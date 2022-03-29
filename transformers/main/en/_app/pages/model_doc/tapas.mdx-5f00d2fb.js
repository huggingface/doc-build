import{S as Uk,i as Bk,s as Rk,e as n,k as d,w as $,t as s,M as Gk,c as o,d as t,m as p,a as r,x as E,h as a,b as h,N as Vk,F as e,g as u,y as F,q as A,o as z,B as x,v as Kk,L as ro}from"../../chunks/vendor-6b77c823.js";import{T as Ms}from"../../chunks/Tip-39098574.js";import{D as He}from"../../chunks/Docstring-abef54e3.js";import{C as Ve}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Bt}from"../../chunks/IconCopyLink-7a11ce68.js";import{F as Cc,M as io}from"../../chunks/Markdown-4489c441.js";function Yk(U){let l,_,c,f,v,w,T,y,k,D,q,H,G,V,B,K,re,I,O;return T=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

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
`),c=n("a"),f=s("torch-scatter"),v=s(" dependency:"),w=d(),$(T.$$.fragment),y=d(),k=n("p"),D=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=n("a"),H=s("TapasConfig"),G=s(", and then create a "),V=n("a"),B=s("TapasForQuestionAnswering"),K=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=d(),$(I.$$.fragment),this.h()},l(b){l=o(b,"P",{});var M=r(l);_=a(M,`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),c=o(M,"A",{href:!0,rel:!0});var R=r(c);f=a(R,"torch-scatter"),R.forEach(t),v=a(M," dependency:"),M.forEach(t),w=p(b),E(T.$$.fragment,b),y=p(b),k=o(b,"P",{});var C=r(k);D=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=o(C,"A",{href:!0});var N=r(q);H=a(N,"TapasConfig"),N.forEach(t),G=a(C,", and then create a "),V=o(C,"A",{href:!0});var ee=r(V);B=a(ee,"TapasForQuestionAnswering"),ee.forEach(t),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(t),re=p(b),E(I.$$.fragment,b),this.h()},h(){h(c,"href","https://github.com/rusty1s/pytorch_scatter"),h(c,"rel","nofollow"),h(q,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),h(V,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(b,M){u(b,l,M),e(l,_),e(l,c),e(c,f),e(l,v),u(b,w,M),F(T,b,M),u(b,y,M),u(b,k,M),e(k,D),e(k,q),e(q,H),e(k,G),e(k,V),e(V,B),e(k,K),u(b,re,M),F(I,b,M),O=!0},p:ro,i(b){O||(A(T.$$.fragment,b),A(I.$$.fragment,b),O=!0)},o(b){z(T.$$.fragment,b),z(I.$$.fragment,b),O=!1},d(b){b&&t(l),b&&t(w),x(T,b),b&&t(y),b&&t(k),b&&t(re),x(I,b)}}}function Jk(U){let l,_;return l=new io({props:{$$slots:{default:[Yk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function Xk(U){let l,_,c,f,v,w,T,y,k,D,q,H,G,V,B,K,re,I,O;return T=new Ve({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=n("p"),_=s("Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),c=n("a"),f=s("tensorflow_probability"),v=s(" dependency:"),w=d(),$(T.$$.fragment),y=d(),k=n("p"),D=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=n("a"),H=s("TapasConfig"),G=s(", and then create a "),V=n("a"),B=s("TFTapasForQuestionAnswering"),K=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=d(),$(I.$$.fragment),this.h()},l(b){l=o(b,"P",{});var M=r(l);_=a(M,"Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),c=o(M,"A",{href:!0,rel:!0});var R=r(c);f=a(R,"tensorflow_probability"),R.forEach(t),v=a(M," dependency:"),M.forEach(t),w=p(b),E(T.$$.fragment,b),y=p(b),k=o(b,"P",{});var C=r(k);D=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=o(C,"A",{href:!0});var N=r(q);H=a(N,"TapasConfig"),N.forEach(t),G=a(C,", and then create a "),V=o(C,"A",{href:!0});var ee=r(V);B=a(ee,"TFTapasForQuestionAnswering"),ee.forEach(t),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(t),re=p(b),E(I.$$.fragment,b),this.h()},h(){h(c,"href","https://github.com/tensorflow/probability"),h(c,"rel","nofollow"),h(q,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),h(V,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(b,M){u(b,l,M),e(l,_),e(l,c),e(c,f),e(l,v),u(b,w,M),F(T,b,M),u(b,y,M),u(b,k,M),e(k,D),e(k,q),e(q,H),e(k,G),e(k,V),e(V,B),e(k,K),u(b,re,M),F(I,b,M),O=!0},p:ro,i(b){O||(A(T.$$.fragment,b),A(I.$$.fragment,b),O=!0)},o(b){z(T.$$.fragment,b),z(I.$$.fragment,b),O=!1},d(b){b&&t(l),b&&t(w),x(T,b),b&&t(y),b&&t(k),b&&t(re),x(I,b)}}}function Zk(U){let l,_;return l=new io({props:{$$slots:{default:[Xk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function ey(U){let l,_,c,f,v,w,T,y,k,D,q,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,te,ce,ne,se,S,L,W,X,Q,Y,ge,ue,_e,me,oe,qe,ie,we,g,P,ve,ze,be,le,xe,Me,Z,de,pe,De,je,Te,Ne,ke,Ae,Oe,Ze,Ss,Ps,ut,mt,pa,ft,gt,Ds,tt,Ns,Os,Ke,Se,Ls,bt,ye,kt,yt,Qs,qt,jt,Is,$t,vs,Rt,Et,ws,Ye,$e,Ws,Ft,ae,nt,Gt,Hs,At,ns,Us,zt,xt,Bs,Ct,os,Rs,Mt,rs,Gs,St,Vs,Le,Pt,is,Ks,Dt,ls,Ys,ds,Ue,ps,Ee,cs,ot,Js,Nt,Ot,Xs,Zs,Be,ea,hs,us,et,Lt;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=<span class="hljs-number">32</span>)`}}),{c(){l=n("p"),_=s("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=n("a"),f=s("TapasTokenizer"),v=s(" to convert table-question pairs into "),w=n("code"),T=s("input_ids"),y=s(", "),k=n("code"),D=s("attention_mask"),q=s(", "),H=n("code"),G=s("token_type_ids"),V=s(" and so on. Again, based on which of the three cases you picked above, "),B=n("a"),K=s("TapasForQuestionAnswering"),re=s(` requires different
inputs to be fine-tuned:`),I=d(),O=n("table"),b=n("thead"),M=n("tr"),R=n("th"),C=n("strong"),N=s("Task"),ee=d(),te=n("th"),ce=n("strong"),ne=s("Required inputs"),se=d(),S=n("tbody"),L=n("tr"),W=n("td"),X=s("Conversational"),Q=d(),Y=n("td"),ge=n("code"),ue=s("input_ids"),_e=s(", "),me=n("code"),oe=s("attention_mask"),qe=s(", "),ie=n("code"),we=s("token_type_ids"),g=s(", "),P=n("code"),ve=s("labels"),ze=d(),be=n("tr"),le=n("td"),xe=s("Weak supervision for aggregation"),Me=d(),Z=n("td"),de=n("code"),pe=s("input_ids"),De=s(", "),je=n("code"),Te=s("attention_mask"),Ne=s(", "),ke=n("code"),Ae=s("token_type_ids"),Oe=s(", "),Ze=n("code"),Ss=s("labels"),Ps=s(", "),ut=n("code"),mt=s("numeric_values"),pa=s(", "),ft=n("code"),gt=s("numeric_values_scale"),Ds=s(", "),tt=n("code"),Ns=s("float_answer"),Os=d(),Ke=n("tr"),Se=n("td"),Ls=s("Strong supervision for aggregation"),bt=d(),ye=n("td"),kt=n("code"),yt=s("input ids"),Qs=s(", "),qt=n("code"),jt=s("attention mask"),Is=s(", "),$t=n("code"),vs=s("token type ids"),Rt=s(", "),Et=n("code"),ws=s("labels"),Ye=s(", "),$e=n("code"),Ws=s("aggregation_labels"),Ft=d(),ae=n("p"),nt=n("a"),Gt=s("TapasTokenizer"),Hs=s(" creates the "),At=n("code"),ns=s("labels"),Us=s(", "),zt=n("code"),xt=s("numeric_values"),Bs=s(" and "),Ct=n("code"),os=s("numeric_values_scale"),Rs=s(" based on the "),Mt=n("code"),rs=s("answer_coordinates"),Gs=s(" and "),St=n("code"),Vs=s("answer_text"),Le=s(" columns of the TSV file. The "),Pt=n("code"),is=s("float_answer"),Ks=s(" and "),Dt=n("code"),ls=s("aggregation_labels"),Ys=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ds=d(),$(Ue.$$.fragment),ps=d(),Ee=n("p"),cs=s("Note that "),ot=n("a"),Js=s("TapasTokenizer"),Nt=s(" expects the data of the table to be "),Ot=n("strong"),Xs=s("text-only"),Zs=s(". You can use "),Be=n("code"),ea=s(".astype(str)"),hs=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),us=d(),$(et.$$.fragment),this.h()},l(j){l=o(j,"P",{});var J=r(l);_=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=o(J,"A",{href:!0});var xa=r(c);f=a(xa,"TapasTokenizer"),xa.forEach(t),v=a(J," to convert table-question pairs into "),w=o(J,"CODE",{});var ta=r(w);T=a(ta,"input_ids"),ta.forEach(t),y=a(J,", "),k=o(J,"CODE",{});var Ca=r(k);D=a(Ca,"attention_mask"),Ca.forEach(t),q=a(J,", "),H=o(J,"CODE",{});var ca=r(H);G=a(ca,"token_type_ids"),ca.forEach(t),V=a(J," and so on. Again, based on which of the three cases you picked above, "),B=o(J,"A",{href:!0});var Qt=r(B);K=a(Qt,"TapasForQuestionAnswering"),Qt.forEach(t),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(t),I=p(j),O=o(j,"TABLE",{});var st=r(O);b=o(st,"THEAD",{});var sa=r(b);M=o(sa,"TR",{});var rt=r(M);R=o(rt,"TH",{});var Ma=r(R);C=o(Ma,"STRONG",{});var aa=r(C);N=a(aa,"Task"),aa.forEach(t),Ma.forEach(t),ee=p(rt),te=o(rt,"TH",{});var Sa=r(te);ce=o(Sa,"STRONG",{});var ha=r(ce);ne=a(ha,"Required inputs"),ha.forEach(t),Sa.forEach(t),rt.forEach(t),sa.forEach(t),se=p(st),S=o(st,"TBODY",{});var Ie=r(S);L=o(Ie,"TR",{});var ms=r(L);W=o(ms,"TD",{});var bs=r(W);X=a(bs,"Conversational"),bs.forEach(t),Q=p(ms),Y=o(ms,"TD",{});var Re=r(Y);ge=o(Re,"CODE",{});var Pa=r(ge);ue=a(Pa,"input_ids"),Pa.forEach(t),_e=a(Re,", "),me=o(Re,"CODE",{});var ua=r(me);oe=a(ua,"attention_mask"),ua.forEach(t),qe=a(Re,", "),ie=o(Re,"CODE",{});var ks=r(ie);we=a(ks,"token_type_ids"),ks.forEach(t),g=a(Re,", "),P=o(Re,"CODE",{});var na=r(P);ve=a(na,"labels"),na.forEach(t),Re.forEach(t),ms.forEach(t),ze=p(Ie),be=o(Ie,"TR",{});var fs=r(be);le=o(fs,"TD",{});var ma=r(le);xe=a(ma,"Weak supervision for aggregation"),ma.forEach(t),Me=p(fs),Z=o(fs,"TD",{});var fe=r(Z);de=o(fe,"CODE",{});var Da=r(de);pe=a(Da,"input_ids"),Da.forEach(t),De=a(fe,", "),je=o(fe,"CODE",{});var ys=r(je);Te=a(ys,"attention_mask"),ys.forEach(t),Ne=a(fe,", "),ke=o(fe,"CODE",{});var Na=r(ke);Ae=a(Na,"token_type_ids"),Na.forEach(t),Oe=a(fe,", "),Ze=o(fe,"CODE",{});var Oa=r(Ze);Ss=a(Oa,"labels"),Oa.forEach(t),Ps=a(fe,", "),ut=o(fe,"CODE",{});var fa=r(ut);mt=a(fa,"numeric_values"),fa.forEach(t),pa=a(fe,", "),ft=o(fe,"CODE",{});var _t=r(ft);gt=a(_t,"numeric_values_scale"),_t.forEach(t),Ds=a(fe,", "),tt=o(fe,"CODE",{});var oa=r(tt);Ns=a(oa,"float_answer"),oa.forEach(t),fe.forEach(t),fs.forEach(t),Os=p(Ie),Ke=o(Ie,"TR",{});var gs=r(Ke);Se=o(gs,"TD",{});var La=r(Se);Ls=a(La,"Strong supervision for aggregation"),La.forEach(t),bt=p(gs),ye=o(gs,"TD",{});var Fe=r(ye);kt=o(Fe,"CODE",{});var Qa=r(kt);yt=a(Qa,"input ids"),Qa.forEach(t),Qs=a(Fe,", "),qt=o(Fe,"CODE",{});var ra=r(qt);jt=a(ra,"attention mask"),ra.forEach(t),Is=a(Fe,", "),$t=o(Fe,"CODE",{});var Ia=r($t);vs=a(Ia,"token type ids"),Ia.forEach(t),Rt=a(Fe,", "),Et=o(Fe,"CODE",{});var Wa=r(Et);ws=a(Wa,"labels"),Wa.forEach(t),Ye=a(Fe,", "),$e=o(Fe,"CODE",{});var Ha=r($e);Ws=a(Ha,"aggregation_labels"),Ha.forEach(t),Fe.forEach(t),gs.forEach(t),Ie.forEach(t),st.forEach(t),Ft=p(j),ae=o(j,"P",{});var he=r(ae);nt=o(he,"A",{href:!0});var Ua=r(nt);Gt=a(Ua,"TapasTokenizer"),Ua.forEach(t),Hs=a(he," creates the "),At=o(he,"CODE",{});var ia=r(At);ns=a(ia,"labels"),ia.forEach(t),Us=a(he,", "),zt=o(he,"CODE",{});var Ba=r(zt);xt=a(Ba,"numeric_values"),Ba.forEach(t),Bs=a(he," and "),Ct=o(he,"CODE",{});var Ra=r(Ct);os=a(Ra,"numeric_values_scale"),Ra.forEach(t),Rs=a(he," based on the "),Mt=o(he,"CODE",{});var ga=r(Mt);rs=a(ga,"answer_coordinates"),ga.forEach(t),Gs=a(he," and "),St=o(he,"CODE",{});var qs=r(St);Vs=a(qs,"answer_text"),qs.forEach(t),Le=a(he," columns of the TSV file. The "),Pt=o(he,"CODE",{});var Ga=r(Pt);is=a(Ga,"float_answer"),Ga.forEach(t),Ks=a(he," and "),Dt=o(he,"CODE",{});var _a=r(Dt);ls=a(_a,"aggregation_labels"),_a.forEach(t),Ys=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(t),ds=p(j),E(Ue.$$.fragment,j),ps=p(j),Ee=o(j,"P",{});var Ce=r(Ee);cs=a(Ce,"Note that "),ot=o(Ce,"A",{href:!0});var la=r(ot);Js=a(la,"TapasTokenizer"),la.forEach(t),Nt=a(Ce," expects the data of the table to be "),Ot=o(Ce,"STRONG",{});var It=r(Ot);Xs=a(It,"text-only"),It.forEach(t),Zs=a(Ce,". You can use "),Be=o(Ce,"CODE",{});var da=r(Be);ea=a(da,".astype(str)"),da.forEach(t),hs=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(t),us=p(j),E(et.$$.fragment,j),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(B,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(nt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(ot,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(j,J){u(j,l,J),e(l,_),e(l,c),e(c,f),e(l,v),e(l,w),e(w,T),e(l,y),e(l,k),e(k,D),e(l,q),e(l,H),e(H,G),e(l,V),e(l,B),e(B,K),e(l,re),u(j,I,J),u(j,O,J),e(O,b),e(b,M),e(M,R),e(R,C),e(C,N),e(M,ee),e(M,te),e(te,ce),e(ce,ne),e(O,se),e(O,S),e(S,L),e(L,W),e(W,X),e(L,Q),e(L,Y),e(Y,ge),e(ge,ue),e(Y,_e),e(Y,me),e(me,oe),e(Y,qe),e(Y,ie),e(ie,we),e(Y,g),e(Y,P),e(P,ve),e(S,ze),e(S,be),e(be,le),e(le,xe),e(be,Me),e(be,Z),e(Z,de),e(de,pe),e(Z,De),e(Z,je),e(je,Te),e(Z,Ne),e(Z,ke),e(ke,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Ss),e(Z,Ps),e(Z,ut),e(ut,mt),e(Z,pa),e(Z,ft),e(ft,gt),e(Z,Ds),e(Z,tt),e(tt,Ns),e(S,Os),e(S,Ke),e(Ke,Se),e(Se,Ls),e(Ke,bt),e(Ke,ye),e(ye,kt),e(kt,yt),e(ye,Qs),e(ye,qt),e(qt,jt),e(ye,Is),e(ye,$t),e($t,vs),e(ye,Rt),e(ye,Et),e(Et,ws),e(ye,Ye),e(ye,$e),e($e,Ws),u(j,Ft,J),u(j,ae,J),e(ae,nt),e(nt,Gt),e(ae,Hs),e(ae,At),e(At,ns),e(ae,Us),e(ae,zt),e(zt,xt),e(ae,Bs),e(ae,Ct),e(Ct,os),e(ae,Rs),e(ae,Mt),e(Mt,rs),e(ae,Gs),e(ae,St),e(St,Vs),e(ae,Le),e(ae,Pt),e(Pt,is),e(ae,Ks),e(ae,Dt),e(Dt,ls),e(ae,Ys),u(j,ds,J),F(Ue,j,J),u(j,ps,J),u(j,Ee,J),e(Ee,cs),e(Ee,ot),e(ot,Js),e(Ee,Nt),e(Ee,Ot),e(Ot,Xs),e(Ee,Zs),e(Ee,Be),e(Be,ea),e(Ee,hs),u(j,us,J),F(et,j,J),Lt=!0},p:ro,i(j){Lt||(A(Ue.$$.fragment,j),A(et.$$.fragment,j),Lt=!0)},o(j){z(Ue.$$.fragment,j),z(et.$$.fragment,j),Lt=!1},d(j){j&&t(l),j&&t(I),j&&t(O),j&&t(Ft),j&&t(ae),j&&t(ds),x(Ue,j),j&&t(ps),j&&t(Ee),j&&t(us),x(et,j)}}}function ty(U){let l,_;return l=new io({props:{$$slots:{default:[ey]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function sy(U){let l,_,c,f,v,w,T,y,k,D,q,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,te,ce,ne,se,S,L,W,X,Q,Y,ge,ue,_e,me,oe,qe,ie,we,g,P,ve,ze,be,le,xe,Me,Z,de,pe,De,je,Te,Ne,ke,Ae,Oe,Ze,Ss,Ps,ut,mt,pa,ft,gt,Ds,tt,Ns,Os,Ke,Se,Ls,bt,ye,kt,yt,Qs,qt,jt,Is,$t,vs,Rt,Et,ws,Ye,$e,Ws,Ft,ae,nt,Gt,Hs,At,ns,Us,zt,xt,Bs,Ct,os,Rs,Mt,rs,Gs,St,Vs,Le,Pt,is,Ks,Dt,ls,Ys,ds,Ue,ps,Ee,cs,ot,Js,Nt,Ot,Xs,Zs,Be,ea,hs,us,et,Lt;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
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
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(<span class="hljs-number">32</span>)`}}),{c(){l=n("p"),_=s("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=n("a"),f=s("TapasTokenizer"),v=s(" to convert table-question pairs into "),w=n("code"),T=s("input_ids"),y=s(", "),k=n("code"),D=s("attention_mask"),q=s(", "),H=n("code"),G=s("token_type_ids"),V=s(" and so on. Again, based on which of the three cases you picked above, "),B=n("a"),K=s("TFTapasForQuestionAnswering"),re=s(` requires different
inputs to be fine-tuned:`),I=d(),O=n("table"),b=n("thead"),M=n("tr"),R=n("th"),C=n("strong"),N=s("Task"),ee=d(),te=n("th"),ce=n("strong"),ne=s("Required inputs"),se=d(),S=n("tbody"),L=n("tr"),W=n("td"),X=s("Conversational"),Q=d(),Y=n("td"),ge=n("code"),ue=s("input_ids"),_e=s(", "),me=n("code"),oe=s("attention_mask"),qe=s(", "),ie=n("code"),we=s("token_type_ids"),g=s(", "),P=n("code"),ve=s("labels"),ze=d(),be=n("tr"),le=n("td"),xe=s("Weak supervision for aggregation"),Me=d(),Z=n("td"),de=n("code"),pe=s("input_ids"),De=s(", "),je=n("code"),Te=s("attention_mask"),Ne=s(", "),ke=n("code"),Ae=s("token_type_ids"),Oe=s(", "),Ze=n("code"),Ss=s("labels"),Ps=s(", "),ut=n("code"),mt=s("numeric_values"),pa=s(", "),ft=n("code"),gt=s("numeric_values_scale"),Ds=s(", "),tt=n("code"),Ns=s("float_answer"),Os=d(),Ke=n("tr"),Se=n("td"),Ls=s("Strong supervision for aggregation"),bt=d(),ye=n("td"),kt=n("code"),yt=s("input ids"),Qs=s(", "),qt=n("code"),jt=s("attention mask"),Is=s(", "),$t=n("code"),vs=s("token type ids"),Rt=s(", "),Et=n("code"),ws=s("labels"),Ye=s(", "),$e=n("code"),Ws=s("aggregation_labels"),Ft=d(),ae=n("p"),nt=n("a"),Gt=s("TapasTokenizer"),Hs=s(" creates the "),At=n("code"),ns=s("labels"),Us=s(", "),zt=n("code"),xt=s("numeric_values"),Bs=s(" and "),Ct=n("code"),os=s("numeric_values_scale"),Rs=s(" based on the "),Mt=n("code"),rs=s("answer_coordinates"),Gs=s(" and "),St=n("code"),Vs=s("answer_text"),Le=s(" columns of the TSV file. The "),Pt=n("code"),is=s("float_answer"),Ks=s(" and "),Dt=n("code"),ls=s("aggregation_labels"),Ys=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ds=d(),$(Ue.$$.fragment),ps=d(),Ee=n("p"),cs=s("Note that "),ot=n("a"),Js=s("TapasTokenizer"),Nt=s(" expects the data of the table to be "),Ot=n("strong"),Xs=s("text-only"),Zs=s(". You can use "),Be=n("code"),ea=s(".astype(str)"),hs=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),us=d(),$(et.$$.fragment),this.h()},l(j){l=o(j,"P",{});var J=r(l);_=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=o(J,"A",{href:!0});var xa=r(c);f=a(xa,"TapasTokenizer"),xa.forEach(t),v=a(J," to convert table-question pairs into "),w=o(J,"CODE",{});var ta=r(w);T=a(ta,"input_ids"),ta.forEach(t),y=a(J,", "),k=o(J,"CODE",{});var Ca=r(k);D=a(Ca,"attention_mask"),Ca.forEach(t),q=a(J,", "),H=o(J,"CODE",{});var ca=r(H);G=a(ca,"token_type_ids"),ca.forEach(t),V=a(J," and so on. Again, based on which of the three cases you picked above, "),B=o(J,"A",{href:!0});var Qt=r(B);K=a(Qt,"TFTapasForQuestionAnswering"),Qt.forEach(t),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(t),I=p(j),O=o(j,"TABLE",{});var st=r(O);b=o(st,"THEAD",{});var sa=r(b);M=o(sa,"TR",{});var rt=r(M);R=o(rt,"TH",{});var Ma=r(R);C=o(Ma,"STRONG",{});var aa=r(C);N=a(aa,"Task"),aa.forEach(t),Ma.forEach(t),ee=p(rt),te=o(rt,"TH",{});var Sa=r(te);ce=o(Sa,"STRONG",{});var ha=r(ce);ne=a(ha,"Required inputs"),ha.forEach(t),Sa.forEach(t),rt.forEach(t),sa.forEach(t),se=p(st),S=o(st,"TBODY",{});var Ie=r(S);L=o(Ie,"TR",{});var ms=r(L);W=o(ms,"TD",{});var bs=r(W);X=a(bs,"Conversational"),bs.forEach(t),Q=p(ms),Y=o(ms,"TD",{});var Re=r(Y);ge=o(Re,"CODE",{});var Pa=r(ge);ue=a(Pa,"input_ids"),Pa.forEach(t),_e=a(Re,", "),me=o(Re,"CODE",{});var ua=r(me);oe=a(ua,"attention_mask"),ua.forEach(t),qe=a(Re,", "),ie=o(Re,"CODE",{});var ks=r(ie);we=a(ks,"token_type_ids"),ks.forEach(t),g=a(Re,", "),P=o(Re,"CODE",{});var na=r(P);ve=a(na,"labels"),na.forEach(t),Re.forEach(t),ms.forEach(t),ze=p(Ie),be=o(Ie,"TR",{});var fs=r(be);le=o(fs,"TD",{});var ma=r(le);xe=a(ma,"Weak supervision for aggregation"),ma.forEach(t),Me=p(fs),Z=o(fs,"TD",{});var fe=r(Z);de=o(fe,"CODE",{});var Da=r(de);pe=a(Da,"input_ids"),Da.forEach(t),De=a(fe,", "),je=o(fe,"CODE",{});var ys=r(je);Te=a(ys,"attention_mask"),ys.forEach(t),Ne=a(fe,", "),ke=o(fe,"CODE",{});var Na=r(ke);Ae=a(Na,"token_type_ids"),Na.forEach(t),Oe=a(fe,", "),Ze=o(fe,"CODE",{});var Oa=r(Ze);Ss=a(Oa,"labels"),Oa.forEach(t),Ps=a(fe,", "),ut=o(fe,"CODE",{});var fa=r(ut);mt=a(fa,"numeric_values"),fa.forEach(t),pa=a(fe,", "),ft=o(fe,"CODE",{});var _t=r(ft);gt=a(_t,"numeric_values_scale"),_t.forEach(t),Ds=a(fe,", "),tt=o(fe,"CODE",{});var oa=r(tt);Ns=a(oa,"float_answer"),oa.forEach(t),fe.forEach(t),fs.forEach(t),Os=p(Ie),Ke=o(Ie,"TR",{});var gs=r(Ke);Se=o(gs,"TD",{});var La=r(Se);Ls=a(La,"Strong supervision for aggregation"),La.forEach(t),bt=p(gs),ye=o(gs,"TD",{});var Fe=r(ye);kt=o(Fe,"CODE",{});var Qa=r(kt);yt=a(Qa,"input ids"),Qa.forEach(t),Qs=a(Fe,", "),qt=o(Fe,"CODE",{});var ra=r(qt);jt=a(ra,"attention mask"),ra.forEach(t),Is=a(Fe,", "),$t=o(Fe,"CODE",{});var Ia=r($t);vs=a(Ia,"token type ids"),Ia.forEach(t),Rt=a(Fe,", "),Et=o(Fe,"CODE",{});var Wa=r(Et);ws=a(Wa,"labels"),Wa.forEach(t),Ye=a(Fe,", "),$e=o(Fe,"CODE",{});var Ha=r($e);Ws=a(Ha,"aggregation_labels"),Ha.forEach(t),Fe.forEach(t),gs.forEach(t),Ie.forEach(t),st.forEach(t),Ft=p(j),ae=o(j,"P",{});var he=r(ae);nt=o(he,"A",{href:!0});var Ua=r(nt);Gt=a(Ua,"TapasTokenizer"),Ua.forEach(t),Hs=a(he," creates the "),At=o(he,"CODE",{});var ia=r(At);ns=a(ia,"labels"),ia.forEach(t),Us=a(he,", "),zt=o(he,"CODE",{});var Ba=r(zt);xt=a(Ba,"numeric_values"),Ba.forEach(t),Bs=a(he," and "),Ct=o(he,"CODE",{});var Ra=r(Ct);os=a(Ra,"numeric_values_scale"),Ra.forEach(t),Rs=a(he," based on the "),Mt=o(he,"CODE",{});var ga=r(Mt);rs=a(ga,"answer_coordinates"),ga.forEach(t),Gs=a(he," and "),St=o(he,"CODE",{});var qs=r(St);Vs=a(qs,"answer_text"),qs.forEach(t),Le=a(he," columns of the TSV file. The "),Pt=o(he,"CODE",{});var Ga=r(Pt);is=a(Ga,"float_answer"),Ga.forEach(t),Ks=a(he," and "),Dt=o(he,"CODE",{});var _a=r(Dt);ls=a(_a,"aggregation_labels"),_a.forEach(t),Ys=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(t),ds=p(j),E(Ue.$$.fragment,j),ps=p(j),Ee=o(j,"P",{});var Ce=r(Ee);cs=a(Ce,"Note that "),ot=o(Ce,"A",{href:!0});var la=r(ot);Js=a(la,"TapasTokenizer"),la.forEach(t),Nt=a(Ce," expects the data of the table to be "),Ot=o(Ce,"STRONG",{});var It=r(Ot);Xs=a(It,"text-only"),It.forEach(t),Zs=a(Ce,". You can use "),Be=o(Ce,"CODE",{});var da=r(Be);ea=a(da,".astype(str)"),da.forEach(t),hs=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(t),us=p(j),E(et.$$.fragment,j),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(B,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(nt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(ot,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(j,J){u(j,l,J),e(l,_),e(l,c),e(c,f),e(l,v),e(l,w),e(w,T),e(l,y),e(l,k),e(k,D),e(l,q),e(l,H),e(H,G),e(l,V),e(l,B),e(B,K),e(l,re),u(j,I,J),u(j,O,J),e(O,b),e(b,M),e(M,R),e(R,C),e(C,N),e(M,ee),e(M,te),e(te,ce),e(ce,ne),e(O,se),e(O,S),e(S,L),e(L,W),e(W,X),e(L,Q),e(L,Y),e(Y,ge),e(ge,ue),e(Y,_e),e(Y,me),e(me,oe),e(Y,qe),e(Y,ie),e(ie,we),e(Y,g),e(Y,P),e(P,ve),e(S,ze),e(S,be),e(be,le),e(le,xe),e(be,Me),e(be,Z),e(Z,de),e(de,pe),e(Z,De),e(Z,je),e(je,Te),e(Z,Ne),e(Z,ke),e(ke,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Ss),e(Z,Ps),e(Z,ut),e(ut,mt),e(Z,pa),e(Z,ft),e(ft,gt),e(Z,Ds),e(Z,tt),e(tt,Ns),e(S,Os),e(S,Ke),e(Ke,Se),e(Se,Ls),e(Ke,bt),e(Ke,ye),e(ye,kt),e(kt,yt),e(ye,Qs),e(ye,qt),e(qt,jt),e(ye,Is),e(ye,$t),e($t,vs),e(ye,Rt),e(ye,Et),e(Et,ws),e(ye,Ye),e(ye,$e),e($e,Ws),u(j,Ft,J),u(j,ae,J),e(ae,nt),e(nt,Gt),e(ae,Hs),e(ae,At),e(At,ns),e(ae,Us),e(ae,zt),e(zt,xt),e(ae,Bs),e(ae,Ct),e(Ct,os),e(ae,Rs),e(ae,Mt),e(Mt,rs),e(ae,Gs),e(ae,St),e(St,Vs),e(ae,Le),e(ae,Pt),e(Pt,is),e(ae,Ks),e(ae,Dt),e(Dt,ls),e(ae,Ys),u(j,ds,J),F(Ue,j,J),u(j,ps,J),u(j,Ee,J),e(Ee,cs),e(Ee,ot),e(ot,Js),e(Ee,Nt),e(Ee,Ot),e(Ot,Xs),e(Ee,Zs),e(Ee,Be),e(Be,ea),e(Ee,hs),u(j,us,J),F(et,j,J),Lt=!0},p:ro,i(j){Lt||(A(Ue.$$.fragment,j),A(et.$$.fragment,j),Lt=!0)},o(j){z(Ue.$$.fragment,j),z(et.$$.fragment,j),Lt=!1},d(j){j&&t(l),j&&t(I),j&&t(O),j&&t(Ft),j&&t(ae),j&&t(ds),x(Ue,j),j&&t(ps),j&&t(Ee),j&&t(us),x(et,j)}}}function ay(U){let l,_;return l=new io({props:{$$slots:{default:[sy]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function ny(U){let l,_,c,f,v,w,T,y;return T=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering, AdamW

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
<span class="hljs-meta">... </span>        optimizer.step()`}}),{c(){l=n("p"),_=s("You can then fine-tune "),c=n("a"),f=s("TapasForQuestionAnswering"),v=s(" as follows (shown here for the weak supervision for aggregation case):"),w=d(),$(T.$$.fragment),this.h()},l(k){l=o(k,"P",{});var D=r(l);_=a(D,"You can then fine-tune "),c=o(D,"A",{href:!0});var q=r(c);f=a(q,"TapasForQuestionAnswering"),q.forEach(t),v=a(D," as follows (shown here for the weak supervision for aggregation case):"),D.forEach(t),w=p(k),E(T.$$.fragment,k),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(k,D){u(k,l,D),e(l,_),e(l,c),e(c,f),e(l,v),u(k,w,D),F(T,k,D),y=!0},p:ro,i(k){y||(A(T.$$.fragment,k),y=!0)},o(k){z(T.$$.fragment,k),y=!1},d(k){k&&t(l),k&&t(w),x(T,k)}}}function oy(U){let l,_;return l=new io({props:{$$slots:{default:[ny]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function ry(U){let l,_,c,f,v,w,T,y;return T=new Ve({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">... </span>        optimizer.apply_gradients(<span class="hljs-built_in">zip</span>(grads, model.trainable_weights))`}}),{c(){l=n("p"),_=s("You can then fine-tune "),c=n("a"),f=s("TFTapasForQuestionAnswering"),v=s(" as follows (shown here for the weak supervision for aggregation case):"),w=d(),$(T.$$.fragment),this.h()},l(k){l=o(k,"P",{});var D=r(l);_=a(D,"You can then fine-tune "),c=o(D,"A",{href:!0});var q=r(c);f=a(q,"TFTapasForQuestionAnswering"),q.forEach(t),v=a(D," as follows (shown here for the weak supervision for aggregation case):"),D.forEach(t),w=p(k),E(T.$$.fragment,k),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(k,D){u(k,l,D),e(l,_),e(l,c),e(c,f),e(l,v),u(k,w,D),F(T,k,D),y=!0},p:ro,i(k){y||(A(T.$$.fragment,k),y=!0)},o(k){z(T.$$.fragment,k),y=!1},d(k){k&&t(l),k&&t(w),x(T,k)}}}function iy(U){let l,_;return l=new io({props:{$$slots:{default:[ry]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function ly(U){let l,_,c,f,v,w,T,y,k,D,q,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,te,ce,ne,se,S,L,W;return L=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=n("p"),_=s("Here we explain how you can use "),c=n("a"),f=s("TapasForQuestionAnswering"),v=s(" or "),w=n("a"),T=s("TFTapasForQuestionAnswering"),y=s(" for inference (i.e. making predictions on new data). For inference, only "),k=n("code"),D=s("input_ids"),q=s(", "),H=n("code"),G=s("attention_mask"),V=s(" and "),B=n("code"),K=s("token_type_ids"),re=s(" (which you can obtain using "),I=n("a"),O=s("TapasTokenizer"),b=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=n("code"),R=s("convert_logits_to_predictions"),C=s(" method to convert these into predicted coordinates and optional aggregation indices."),N=d(),ee=n("p"),te=s("However, note that inference is "),ce=n("strong"),ne=s("different"),se=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),S=d(),$(L.$$.fragment),this.h()},l(X){l=o(X,"P",{});var Q=r(l);_=a(Q,"Here we explain how you can use "),c=o(Q,"A",{href:!0});var Y=r(c);f=a(Y,"TapasForQuestionAnswering"),Y.forEach(t),v=a(Q," or "),w=o(Q,"A",{href:!0});var ge=r(w);T=a(ge,"TFTapasForQuestionAnswering"),ge.forEach(t),y=a(Q," for inference (i.e. making predictions on new data). For inference, only "),k=o(Q,"CODE",{});var ue=r(k);D=a(ue,"input_ids"),ue.forEach(t),q=a(Q,", "),H=o(Q,"CODE",{});var _e=r(H);G=a(_e,"attention_mask"),_e.forEach(t),V=a(Q," and "),B=o(Q,"CODE",{});var me=r(B);K=a(me,"token_type_ids"),me.forEach(t),re=a(Q," (which you can obtain using "),I=o(Q,"A",{href:!0});var oe=r(I);O=a(oe,"TapasTokenizer"),oe.forEach(t),b=a(Q,") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=o(Q,"CODE",{});var qe=r(M);R=a(qe,"convert_logits_to_predictions"),qe.forEach(t),C=a(Q," method to convert these into predicted coordinates and optional aggregation indices."),Q.forEach(t),N=p(X),ee=o(X,"P",{});var ie=r(ee);te=a(ie,"However, note that inference is "),ce=o(ie,"STRONG",{});var we=r(ce);ne=a(we,"different"),we.forEach(t),se=a(ie," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ie.forEach(t),S=p(X),E(L.$$.fragment,X),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(w,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(I,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(X,Q){u(X,l,Q),e(l,_),e(l,c),e(c,f),e(l,v),e(l,w),e(w,T),e(l,y),e(l,k),e(k,D),e(l,q),e(l,H),e(H,G),e(l,V),e(l,B),e(B,K),e(l,re),e(l,I),e(I,O),e(l,b),e(l,M),e(M,R),e(l,C),u(X,N,Q),u(X,ee,Q),e(ee,te),e(ee,ce),e(ce,ne),e(ee,se),u(X,S,Q),F(L,X,Q),W=!0},p:ro,i(X){W||(A(L.$$.fragment,X),W=!0)},o(X){z(L.$$.fragment,X),W=!1},d(X){X&&t(l),X&&t(N),X&&t(ee),X&&t(S),x(L,X)}}}function dy(U){let l,_;return l=new io({props:{$$slots:{default:[ly]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function py(U){let l,_,c,f,v,w,T,y,k,D,q,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,te,ce,ne,se;return ne=new Ve({props:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
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
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=n("p"),_=s("Here we explain how you can use "),c=n("a"),f=s("TFTapasForQuestionAnswering"),v=s(" for inference (i.e. making predictions on new data). For inference, only "),w=n("code"),T=s("input_ids"),y=s(", "),k=n("code"),D=s("attention_mask"),q=s(" and "),H=n("code"),G=s("token_type_ids"),V=s(" (which you can obtain using "),B=n("a"),K=s("TapasTokenizer"),re=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),I=n("code"),O=s("convert_logits_to_predictions"),b=s(" method to convert these into predicted coordinates and optional aggregation indices."),M=d(),R=n("p"),C=s("However, note that inference is "),N=n("strong"),ee=s("different"),te=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ce=d(),$(ne.$$.fragment),this.h()},l(S){l=o(S,"P",{});var L=r(l);_=a(L,"Here we explain how you can use "),c=o(L,"A",{href:!0});var W=r(c);f=a(W,"TFTapasForQuestionAnswering"),W.forEach(t),v=a(L," for inference (i.e. making predictions on new data). For inference, only "),w=o(L,"CODE",{});var X=r(w);T=a(X,"input_ids"),X.forEach(t),y=a(L,", "),k=o(L,"CODE",{});var Q=r(k);D=a(Q,"attention_mask"),Q.forEach(t),q=a(L," and "),H=o(L,"CODE",{});var Y=r(H);G=a(Y,"token_type_ids"),Y.forEach(t),V=a(L," (which you can obtain using "),B=o(L,"A",{href:!0});var ge=r(B);K=a(ge,"TapasTokenizer"),ge.forEach(t),re=a(L,") have to be provided to the model to obtain the logits. Next, you can use the handy "),I=o(L,"CODE",{});var ue=r(I);O=a(ue,"convert_logits_to_predictions"),ue.forEach(t),b=a(L," method to convert these into predicted coordinates and optional aggregation indices."),L.forEach(t),M=p(S),R=o(S,"P",{});var _e=r(R);C=a(_e,"However, note that inference is "),N=o(_e,"STRONG",{});var me=r(N);ee=a(me,"different"),me.forEach(t),te=a(_e," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),_e.forEach(t),ce=p(S),E(ne.$$.fragment,S),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(B,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(S,L){u(S,l,L),e(l,_),e(l,c),e(c,f),e(l,v),e(l,w),e(w,T),e(l,y),e(l,k),e(k,D),e(l,q),e(l,H),e(H,G),e(l,V),e(l,B),e(B,K),e(l,re),e(l,I),e(I,O),e(l,b),u(S,M,L),u(S,R,L),e(R,C),e(R,N),e(N,ee),e(R,te),u(S,ce,L),F(ne,S,L),se=!0},p:ro,i(S){se||(A(ne.$$.fragment,S),se=!0)},o(S){z(ne.$$.fragment,S),se=!1},d(S){S&&t(l),S&&t(M),S&&t(R),S&&t(ce),x(ne,S)}}}function cy(U){let l,_;return l=new io({props:{$$slots:{default:[py]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const v={};f&2&&(v.$$scope={dirty:f,ctx:c}),l.$set(v)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function hy(U){let l,_,c,f,v;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&t(l)}}}function uy(U){let l,_,c,f,v;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&t(l)}}}function my(U){let l,_,c,f,v;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&t(l)}}}function fy(U){let l,_,c,f,v;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&t(l)}}}function gy(U){let l,_,c,f,v,w,T,y,k,D,q,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,te,ce,ne,se,S,L,W,X,Q,Y,ge,ue,_e,me,oe,qe,ie,we;return{c(){l=n("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=n("ul"),v=n("li"),w=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),y=n("li"),k=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=n("p"),H=s("This second option is useful when using "),G=n("code"),V=s("tf.keras.Model.fit"),B=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),re=s("model(inputs)"),I=s("."),O=d(),b=n("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=d(),C=n("ul"),N=n("li"),ee=s("a single Tensor with "),te=n("code"),ce=s("input_ids"),ne=s(" only and nothing else: "),se=n("code"),S=s("model(inputs_ids)"),L=d(),W=n("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),ue=n("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=d(),oe=n("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n("code"),we=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=o(g,"P",{});var P=r(l);_=a(P,"TF 2.0 models accepts two formats as inputs:"),P.forEach(t),c=p(g),f=o(g,"UL",{});var ve=r(f);v=o(ve,"LI",{});var ze=r(v);w=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(ve),y=o(ve,"LI",{});var be=r(y);k=a(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),ve.forEach(t),D=p(g),q=o(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),G=o(le,"CODE",{});var xe=r(G);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),B=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),b=o(g,"P",{});var Z=r(b);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),R=p(g),C=o(g,"UL",{});var de=r(C);N=o(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=o(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),ne=a(pe," only and nothing else: "),se=o(pe,"CODE",{});var je=r(se);S=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=o(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),ue=o(Te,"CODE",{});var ke=r(ue);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Te.forEach(t),me=p(de),oe=o(de,"LI",{});var Ae=r(oe);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o(Ae,"CODE",{});var Oe=r(ie);we=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,P){u(g,l,P),e(l,_),u(g,c,P),u(g,f,P),e(f,v),e(v,w),e(f,T),e(f,y),e(y,k),u(g,D,P),u(g,q,P),e(q,H),e(q,G),e(G,V),e(q,B),e(q,K),e(K,re),e(q,I),u(g,O,P),u(g,b,P),e(b,M),u(g,R,P),u(g,C,P),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,ne),e(N,se),e(se,S),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,oe),e(oe,qe),e(oe,ie),e(ie,we)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(b),g&&t(R),g&&t(C)}}}function _y(U){let l,_,c,f,v;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&t(l)}}}function Ty(U){let l,_,c,f,v,w,T,y,k,D,q,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,te,ce,ne,se,S,L,W,X,Q,Y,ge,ue,_e,me,oe,qe,ie,we;return{c(){l=n("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=n("ul"),v=n("li"),w=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),y=n("li"),k=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=n("p"),H=s("This second option is useful when using "),G=n("code"),V=s("tf.keras.Model.fit"),B=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),re=s("model(inputs)"),I=s("."),O=d(),b=n("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=d(),C=n("ul"),N=n("li"),ee=s("a single Tensor with "),te=n("code"),ce=s("input_ids"),ne=s(" only and nothing else: "),se=n("code"),S=s("model(inputs_ids)"),L=d(),W=n("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),ue=n("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=d(),oe=n("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n("code"),we=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=o(g,"P",{});var P=r(l);_=a(P,"TF 2.0 models accepts two formats as inputs:"),P.forEach(t),c=p(g),f=o(g,"UL",{});var ve=r(f);v=o(ve,"LI",{});var ze=r(v);w=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(ve),y=o(ve,"LI",{});var be=r(y);k=a(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),ve.forEach(t),D=p(g),q=o(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),G=o(le,"CODE",{});var xe=r(G);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),B=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),b=o(g,"P",{});var Z=r(b);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),R=p(g),C=o(g,"UL",{});var de=r(C);N=o(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=o(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),ne=a(pe," only and nothing else: "),se=o(pe,"CODE",{});var je=r(se);S=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=o(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),ue=o(Te,"CODE",{});var ke=r(ue);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Te.forEach(t),me=p(de),oe=o(de,"LI",{});var Ae=r(oe);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o(Ae,"CODE",{});var Oe=r(ie);we=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,P){u(g,l,P),e(l,_),u(g,c,P),u(g,f,P),e(f,v),e(v,w),e(f,T),e(f,y),e(y,k),u(g,D,P),u(g,q,P),e(q,H),e(q,G),e(G,V),e(q,B),e(q,K),e(K,re),e(q,I),u(g,O,P),u(g,b,P),e(b,M),u(g,R,P),u(g,C,P),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,ne),e(N,se),e(se,S),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,oe),e(oe,qe),e(oe,ie),e(ie,we)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(b),g&&t(R),g&&t(C)}}}function vy(U){let l,_,c,f,v;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&t(l)}}}function wy(U){let l,_,c,f,v,w,T,y,k,D,q,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,te,ce,ne,se,S,L,W,X,Q,Y,ge,ue,_e,me,oe,qe,ie,we;return{c(){l=n("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=n("ul"),v=n("li"),w=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),y=n("li"),k=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=n("p"),H=s("This second option is useful when using "),G=n("code"),V=s("tf.keras.Model.fit"),B=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),re=s("model(inputs)"),I=s("."),O=d(),b=n("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=d(),C=n("ul"),N=n("li"),ee=s("a single Tensor with "),te=n("code"),ce=s("input_ids"),ne=s(" only and nothing else: "),se=n("code"),S=s("model(inputs_ids)"),L=d(),W=n("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),ue=n("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=d(),oe=n("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n("code"),we=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=o(g,"P",{});var P=r(l);_=a(P,"TF 2.0 models accepts two formats as inputs:"),P.forEach(t),c=p(g),f=o(g,"UL",{});var ve=r(f);v=o(ve,"LI",{});var ze=r(v);w=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(ve),y=o(ve,"LI",{});var be=r(y);k=a(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),ve.forEach(t),D=p(g),q=o(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),G=o(le,"CODE",{});var xe=r(G);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),B=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),b=o(g,"P",{});var Z=r(b);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),R=p(g),C=o(g,"UL",{});var de=r(C);N=o(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=o(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),ne=a(pe," only and nothing else: "),se=o(pe,"CODE",{});var je=r(se);S=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=o(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),ue=o(Te,"CODE",{});var ke=r(ue);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Te.forEach(t),me=p(de),oe=o(de,"LI",{});var Ae=r(oe);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o(Ae,"CODE",{});var Oe=r(ie);we=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,P){u(g,l,P),e(l,_),u(g,c,P),u(g,f,P),e(f,v),e(v,w),e(f,T),e(f,y),e(y,k),u(g,D,P),u(g,q,P),e(q,H),e(q,G),e(G,V),e(q,B),e(q,K),e(K,re),e(q,I),u(g,O,P),u(g,b,P),e(b,M),u(g,R,P),u(g,C,P),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,ne),e(N,se),e(se,S),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,oe),e(oe,qe),e(oe,ie),e(ie,we)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(b),g&&t(R),g&&t(C)}}}function by(U){let l,_,c,f,v;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&t(l)}}}function ky(U){let l,_,c,f,v,w,T,y,k,D,q,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,te,ce,ne,se,S,L,W,X,Q,Y,ge,ue,_e,me,oe,qe,ie,we;return{c(){l=n("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=n("ul"),v=n("li"),w=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),y=n("li"),k=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=n("p"),H=s("This second option is useful when using "),G=n("code"),V=s("tf.keras.Model.fit"),B=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),re=s("model(inputs)"),I=s("."),O=d(),b=n("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),R=d(),C=n("ul"),N=n("li"),ee=s("a single Tensor with "),te=n("code"),ce=s("input_ids"),ne=s(" only and nothing else: "),se=n("code"),S=s("model(inputs_ids)"),L=d(),W=n("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),ue=n("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),me=d(),oe=n("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n("code"),we=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=o(g,"P",{});var P=r(l);_=a(P,"TF 2.0 models accepts two formats as inputs:"),P.forEach(t),c=p(g),f=o(g,"UL",{});var ve=r(f);v=o(ve,"LI",{});var ze=r(v);w=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(ve),y=o(ve,"LI",{});var be=r(y);k=a(be,"having all inputs as a list, tuple or dict in the first positional arguments."),be.forEach(t),ve.forEach(t),D=p(g),q=o(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),G=o(le,"CODE",{});var xe=r(G);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),B=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),b=o(g,"P",{});var Z=r(b);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),R=p(g),C=o(g,"UL",{});var de=r(C);N=o(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=o(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),ne=a(pe," only and nothing else: "),se=o(pe,"CODE",{});var je=r(se);S=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=o(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),ue=o(Te,"CODE",{});var ke=r(ue);_e=a(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Te.forEach(t),me=p(de),oe=o(de,"LI",{});var Ae=r(oe);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o(Ae,"CODE",{});var Oe=r(ie);we=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,P){u(g,l,P),e(l,_),u(g,c,P),u(g,f,P),e(f,v),e(v,w),e(f,T),e(f,y),e(y,k),u(g,D,P),u(g,q,P),e(q,H),e(q,G),e(G,V),e(q,B),e(q,K),e(K,re),e(q,I),u(g,O,P),u(g,b,P),e(b,M),u(g,R,P),u(g,C,P),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,ne),e(N,se),e(se,S),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,ue),e(ue,_e),e(C,me),e(C,oe),e(oe,qe),e(oe,ie),e(ie,we)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(b),g&&t(R),g&&t(C)}}}function yy(U){let l,_,c,f,v;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),v=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){l=o(w,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var y=r(c);f=a(y,"Module"),y.forEach(t),v=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(w,T){u(w,l,T),e(l,_),e(l,c),e(c,f),e(l,v)},d(w){w&&t(l)}}}function qy(U){let l,_,c,f,v,w,T,y,k,D,q,H,G,V,B,K,re,I,O,b,M,R,C,N,ee,te,ce,ne,se,S,L,W,X,Q,Y,ge,ue,_e,me,oe,qe,ie,we,g,P,ve,ze,be,le,xe,Me,Z,de,pe,De,je,Te,Ne,ke,Ae,Oe,Ze,Ss,Ps,ut,mt,pa,ft,gt,Ds,tt,Ns,Os,Ke,Se,Ls,bt,ye,kt,yt,Qs,qt,jt,Is,$t,vs,Rt,Et,ws,Ye,$e,Ws,Ft,ae,nt,Gt,Hs,At,ns,Us,zt,xt,Bs,Ct,os,Rs,Mt,rs,Gs,St,Vs,Le,Pt,is,Ks,Dt,ls,Ys,ds,Ue,ps,Ee,cs,ot,Js,Nt,Ot,Xs,Zs,Be,ea,hs,us,et,Lt,j,J,xa,ta,Ca,ca,Qt,st,sa,rt,Ma,aa,Sa,ha,Ie,ms,bs,Re,Pa,ua,ks,na,fs,ma,fe,Da,ys,Na,Oa,fa,_t,oa,gs,La,Fe,Qa,ra,Ia,Wa,Ha,he,Ua,ia,Ba,Ra,ga,qs,Ga,_a,Ce,la,It,da,Ki,Mc,Sc,Yi,Ji,Pc,Dc,Xi,Zi,Nc,Oc,Va,Ka,el,Lc,Qc,tl,Ic,Wc,sl,Hc,Uc,Ya,al,Bc,Rc,nl,Gc,Vc,ol,Kc,Yc,Ja,rl,Jc,Xc,il,Zc,eh,ll,th,sp,qn,ap,jn,sh,lo,ah,nh,np,$n,oh,po,rh,ih,op,Hr,dl,lh,rp,En,dh,co,ph,ch,ip,We,Ur,pl,hh,uh,mh,Br,cl,fh,gh,_h,Rr,hl,Th,vh,wh,Gr,ul,bh,kh,yh,Vr,ml,qh,jh,$h,Kr,fl,Eh,Fh,Ah,Yr,gl,zh,xh,Ch,Jr,_l,Mh,Sh,Ph,Xr,Tl,Dh,Nh,lp,Tt,Oh,ho,Lh,Qh,uo,Ih,Wh,vl,Hh,Uh,wl,Bh,Rh,bl,Gh,Vh,dp,Zr,kl,Kh,pp,Fn,cp,Pe,Yh,yl,Jh,Xh,ql,Zh,eu,jl,tu,su,$l,au,nu,El,ou,ru,Fl,iu,lu,ei,du,pu,mo,cu,hu,fo,uu,mu,hp,ti,fu,up,An,mp,Xa,zn,Al,go,gu,zl,_u,fp,xn,gp,vt,Tu,xl,vu,wu,Cl,bu,ku,Ml,yu,qu,_o,ju,$u,To,Eu,Fu,_p,Za,Cn,Sl,vo,Au,Pl,zu,Tp,en,wo,xu,bo,Cu,si,Mu,Su,vp,tn,Mn,Dl,ko,Pu,Nl,Du,wp,Wt,yo,Nu,_s,Ou,ai,Lu,Qu,Ol,Iu,Wu,Ll,Hu,Uu,ni,Bu,Ru,Gu,qo,Vu,jo,Ku,Yu,Ju,Ql,Xu,Zu,$o,bp,sn,Sn,Il,Eo,em,Wl,tm,kp,Ge,Fo,sm,Hl,am,nm,Qe,om,oi,rm,im,ri,lm,dm,Ul,pm,cm,Bl,hm,um,Rl,mm,fm,Gl,gm,_m,Vl,Tm,vm,Kl,wm,bm,Yl,km,ym,qm,it,Jl,jm,$m,Xl,Em,Fm,Zl,Am,zm,ed,xm,Cm,td,Mm,Sm,sd,Pm,Dm,ad,Nm,Om,ii,li,Lm,Qm,Im,Pn,Ao,Wm,nd,Hm,Um,Ta,zo,Bm,xo,Rm,di,Gm,Vm,Km,Co,Ym,Mo,Jm,Xm,Zm,pi,So,yp,an,Dn,od,Po,ef,rd,tf,qp,lt,Do,sf,No,af,ci,nf,of,rf,Oo,lf,Lo,df,pf,cf,Qo,hf,hi,uf,mf,ff,Io,gf,Wo,_f,Tf,vf,Vt,Ho,wf,nn,bf,ui,kf,yf,id,qf,jf,$f,Nn,Ef,ld,Ff,Af,Uo,jp,on,On,dd,Bo,zf,pd,xf,$p,Ts,Ro,Cf,rn,Mf,cd,Sf,Pf,mi,Df,Nf,Of,Go,Lf,Vo,Qf,If,Wf,Kt,Ko,Hf,ln,Uf,fi,Bf,Rf,hd,Gf,Vf,Kf,Ln,Yf,ud,Jf,Xf,Yo,Ep,dn,Qn,md,Jo,Zf,fd,eg,Fp,Ht,Xo,tg,gd,sg,ag,Zo,ng,gi,og,rg,ig,er,lg,tr,dg,pg,cg,Yt,sr,hg,pn,ug,_i,mg,fg,_d,gg,_g,Tg,In,vg,Td,wg,bg,ar,Ap,cn,Wn,vd,nr,kg,wd,yg,zp,Ut,or,qg,hn,jg,bd,$g,Eg,kd,Fg,Ag,zg,rr,xg,Ti,Cg,Mg,Sg,ir,Pg,lr,Dg,Ng,Og,Jt,dr,Lg,un,Qg,vi,Ig,Wg,yd,Hg,Ug,Bg,Hn,Rg,qd,Gg,Vg,pr,xp,mn,Un,jd,cr,Kg,$d,Yg,Cp,dt,hr,Jg,Ed,Xg,Zg,ur,e_,wi,t_,s_,a_,mr,n_,fr,o_,r_,i_,Bn,l_,Xt,gr,d_,fn,p_,bi,c_,h_,Fd,u_,m_,f_,Rn,g_,Ad,__,T_,_r,Mp,gn,Gn,zd,Tr,v_,xd,w_,Sp,pt,vr,b_,wr,k_,Cd,y_,q_,j_,br,$_,ki,E_,F_,A_,kr,z_,yr,x_,C_,M_,Vn,S_,Zt,qr,P_,_n,D_,yi,N_,O_,Md,L_,Q_,I_,Kn,W_,Sd,H_,U_,jr,Pp,Tn,Yn,Pd,$r,B_,Dd,R_,Dp,ct,Er,G_,Nd,V_,K_,Fr,Y_,qi,J_,X_,Z_,Ar,eT,zr,tT,sT,aT,Jn,nT,es,xr,oT,vn,rT,ji,iT,lT,Od,dT,pT,cT,Xn,hT,Ld,uT,mT,Cr,Np,wn,Zn,Qd,Mr,fT,Id,gT,Op,ht,Sr,_T,bn,TT,Wd,vT,wT,Hd,bT,kT,yT,Pr,qT,$i,jT,$T,ET,Dr,FT,Nr,AT,zT,xT,eo,CT,ts,Or,MT,kn,ST,Ei,PT,DT,Ud,NT,OT,LT,to,QT,Bd,IT,WT,Lr,Lp;return w=new Bt({}),V=new Bt({}),rt=new Bt({}),qn=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Zk],pytorch:[Jk]},$$scope:{ctx:U}}}),Fn=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ay],pytorch:[ty]},$$scope:{ctx:U}}}),An=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[iy],pytorch:[oy]},$$scope:{ctx:U}}}),go=new Bt({}),xn=new Cc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[cy],pytorch:[dy]},$$scope:{ctx:U}}}),vo=new Bt({}),wo=new He({props:{name:"class transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_aggregation",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L106",parametersDescription:[{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) &#x2014;
Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.`,name:"loss"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the cell selection head, for every token.`,name:"logits"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits_aggregation",description:`<strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) &#x2014;
Prediction scores of the aggregation head, for every aggregation operator.`,name:"logits_aggregation"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}]}}),ko=new Bt({}),yo=new He({props:{name:"class transformers.TapasConfig",anchor:"transformers.TapasConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1024"},{name:"type_vocab_sizes",val:" = [3, 256, 256, 2, 256, 256, 10]"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"positive_label_weight",val:" = 10.0"},{name:"num_aggregation_labels",val:" = 0"},{name:"aggregation_loss_weight",val:" = 1.0"},{name:"use_answer_as_supervision",val:" = None"},{name:"answer_loss_importance",val:" = 1.0"},{name:"use_normalized_answer_loss",val:" = False"},{name:"huber_loss_delta",val:" = None"},{name:"temperature",val:" = 1.0"},{name:"aggregation_temperature",val:" = 1.0"},{name:"use_gumbel_for_cells",val:" = False"},{name:"use_gumbel_for_aggregation",val:" = False"},{name:"average_approximation_function",val:" = 'ratio'"},{name:"cell_selection_preference",val:" = None"},{name:"answer_loss_cutoff",val:" = None"},{name:"max_num_rows",val:" = 64"},{name:"max_num_columns",val:" = 32"},{name:"average_logits_per_cell",val:" = False"},{name:"select_one_column",val:" = True"},{name:"allow_empty_column_selection",val:" = False"},{name:"init_cell_selection_weights_to_zero",val:" = False"},{name:"reset_position_index_per_cell",val:" = True"},{name:"disable_per_token_loss",val:" = False"},{name:"aggregation_labels",val:" = None"},{name:"no_aggregation_label_index",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/configuration_tapas.py#L37",parametersDescription:[{anchor:"transformers.TapasConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
should be set to 0 for these models.`,name:"no_aggregation_label_index"}]}}),$o=new Ve({props:{code:`from transformers import TapasModel, TapasConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Eo=new Bt({}),Fo=new He({props:{name:"class transformers.TapasTokenizer",anchor:"transformers.TapasTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"empty_token",val:" = '[EMPTY]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"cell_trim_length",val:": int = -1"},{name:"max_column_id",val:": int = None"},{name:"max_row_id",val:": int = None"},{name:"strip_column_names",val:": bool = False"},{name:"update_answer_coordinates",val:": bool = False"},{name:"min_question_length",val:" = None"},{name:"max_question_length",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L188",parametersDescription:[{anchor:"transformers.TapasTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Maximum length of each question in terms of tokens (will be skipped otherwise).`,name:"max_question_length"}]}}),Ao=new He({props:{name:"__call__",anchor:"transformers.TapasTokenizer.__call__",parameters:[{name:"table",val:": pd.DataFrame"},{name:"queries",val:": typing.Union[str, typing.List[str], typing.List[int], typing.List[typing.List[str]], typing.List[typing.List[int]], NoneType] = None"},{name:"answer_coordinates",val:": typing.Union[typing.List[typing.Tuple], typing.List[typing.List[typing.Tuple]], NoneType] = None"},{name:"answer_text",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.models.tapas.tokenization_tapas.TapasTruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L528",parametersDescription:[{anchor:"transformers.TapasTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>) &#x2014;
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
</ul>`,name:"return_tensors"}]}}),zo=new He({props:{name:"convert_logits_to_predictions",anchor:"transformers.TapasTokenizer.convert_logits_to_predictions",parameters:[{name:"data",val:""},{name:"logits",val:""},{name:"logits_agg",val:" = None"},{name:"cell_classification_threshold",val:" = 0.5"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L1890",parametersDescription:[{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.data",description:`<strong>data</strong> (<code>dict</code>) &#x2014;
Dictionary mapping features to actual values. Should be created using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.`,name:"data"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits",description:`<strong>logits</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Tensor containing the logits at the token level.`,name:"logits"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits_agg",description:`<strong>logits_agg</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_aggregation_labels)</code>, <em>optional</em>) &#x2014;
Tensor containing the aggregation logits.`,name:"logits_agg"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.cell_classification_threshold",description:`<strong>cell_classification_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to be used for cell selection. All table cells for which their probability is larger than
this threshold will be selected.`,name:"cell_classification_threshold"}],returnDescription:`
<ul>
<li>predicted_answer_coordinates (<code>List[List[[tuple]]</code> of length <code>batch_size</code>): Predicted answer coordinates
as a list of lists of tuples. Each element in the list contains the predicted answer coordinates of a
single example in the batch, as a list of tuples. Each tuple is a cell, i.e. (row index, column index).</li>
<li>predicted_aggregation_indices (<code>List[int]</code>of length <code>batch_size</code>, <em>optional</em>, returned when
<code>logits_aggregation</code> is provided): Predicted aggregation operator indices of the aggregation head.</li>
</ul>
`,returnType:`
<p><code>tuple</code> comprising various elements depending on the inputs</p>
`}}),So=new He({props:{name:"save_vocabulary",anchor:"transformers.TapasTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L396"}}),Po=new Bt({}),Do=new He({props:{name:"class transformers.TapasModel",anchor:"transformers.TapasModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L856",parametersDescription:[{anchor:"transformers.TapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ho=new He({props:{name:"forward",anchor:"transformers.TapasModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L894",parametersDescription:[{anchor:"transformers.TapasModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
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
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Nn=new Ms({props:{$$slots:{default:[hy]},$$scope:{ctx:U}}}),Uo=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Bo=new Bt({}),Ro=new He({props:{name:"class transformers.TapasForMaskedLM",anchor:"transformers.TapasForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1009",parametersDescription:[{anchor:"transformers.TapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ko=new He({props:{name:"forward",anchor:"transformers.TapasForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1028",parametersDescription:[{anchor:"transformers.TapasForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
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
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ln=new Ms({props:{$$slots:{default:[uy]},$$scope:{ctx:U}}}),Yo=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Jo=new Bt({}),Xo=new He({props:{name:"class transformers.TapasForSequenceClassification",anchor:"transformers.TapasForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1468",parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sr=new He({props:{name:"forward",anchor:"transformers.TapasForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1480",parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],returnDescription:`
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
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),In=new Ms({props:{$$slots:{default:[my]},$$scope:{ctx:U}}}),ar=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),nr=new Bt({}),or=new He({props:{name:"class transformers.TapasForQuestionAnswering",anchor:"transformers.TapasForQuestionAnswering",parameters:[{name:"config",val:": TapasConfig"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1124",parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),dr=new He({props:{name:"forward",anchor:"transformers.TapasForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"table_mask",val:" = None"},{name:"labels",val:" = None"},{name:"aggregation_labels",val:" = None"},{name:"float_answer",val:" = None"},{name:"numeric_values",val:" = None"},{name:"numeric_values_scale",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1159",parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],returnDescription:`
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
`}}),Hn=new Ms({props:{$$slots:{default:[fy]},$$scope:{ctx:U}}}),pr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),cr=new Bt({}),hr=new He({props:{name:"class transformers.TFTapasModel",anchor:"transformers.TFTapasModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L962",parametersDescription:[{anchor:"transformers.TFTapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bn=new Ms({props:{$$slots:{default:[gy]},$$scope:{ctx:U}}}),gr=new He({props:{name:"call",anchor:"transformers.TFTapasModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L968",parametersDescription:[{anchor:"transformers.TFTapasModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
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
`}}),Rn=new Ms({props:{$$slots:{default:[_y]},$$scope:{ctx:U}}}),_r=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Tr=new Bt({}),vr=new He({props:{name:"class transformers.TFTapasForMaskedLM",anchor:"transformers.TFTapasForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1038",parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Vn=new Ms({props:{$$slots:{default:[Ty]},$$scope:{ctx:U}}}),qr=new He({props:{name:"call",anchor:"transformers.TFTapasForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1054",parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
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
`}}),Kn=new Ms({props:{$$slots:{default:[vy]},$$scope:{ctx:U}}}),jr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$r=new Bt({}),Er=new He({props:{name:"class transformers.TFTapasForSequenceClassification",anchor:"transformers.TFTapasForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1578",parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Jn=new Ms({props:{$$slots:{default:[wy]},$$scope:{ctx:U}}}),xr=new He({props:{name:"call",anchor:"transformers.TFTapasForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1589",parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],returnDescription:`
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
`}}),Xn=new Ms({props:{$$slots:{default:[by]},$$scope:{ctx:U}}}),Cr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Mr=new Bt({}),Sr=new He({props:{name:"class transformers.TFTapasForQuestionAnswering",anchor:"transformers.TFTapasForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1245",parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),eo=new Ms({props:{$$slots:{default:[ky]},$$scope:{ctx:U}}}),Or=new He({props:{name:"call",anchor:"transformers.TFTapasForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"table_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"aggregation_labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"float_answer",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values_scale",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1267",parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2#transformers.Wav2Vec2CTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],returnDescription:`
<p>A <code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code>or a tuple of <code>tf.Tensor</code> (if
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
<p><code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code>or <code>tuple(tf.Tensor)</code></p>
`}}),to=new Ms({props:{$$slots:{default:[yy]},$$scope:{ctx:U}}}),Lr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),{c(){l=n("meta"),_=d(),c=n("h1"),f=n("a"),v=n("span"),$(w.$$.fragment),T=d(),y=n("span"),k=s("TAPAS"),D=d(),q=n("h2"),H=n("a"),G=n("span"),$(V.$$.fragment),B=d(),K=n("span"),re=s("Overview"),I=d(),O=n("p"),b=s("The TAPAS model was proposed in "),M=n("a"),R=s("TAPAS: Weakly Supervised Table Parsing via Pre-training"),C=s(`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),N=d(),ee=n("p"),te=s("For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),ce=d(),ne=n("ul"),se=n("li"),S=n("a"),L=s("SQA"),W=s(" (Sequential Question Answering by Microsoft)"),X=d(),Q=n("li"),Y=n("a"),ge=s("WTQ"),ue=s(" (Wiki Table Questions by Stanford University)"),_e=d(),me=n("li"),oe=n("a"),qe=s("WikiSQL"),ie=s(" (by Salesforce)."),we=d(),g=n("p"),P=s("It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),ve=d(),ze=n("p"),be=s("The abstract from the paper is the following:"),le=d(),xe=n("p"),Me=n("em"),Z=s("Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),de=d(),pe=n("p"),De=s("In addition, the authors have further pre-trained TAPAS to recognize "),je=n("strong"),Te=s("table entailment"),Ne=s(", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ke=n("a"),Ae=s("TabFact"),Oe=s(", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=n("a"),Ss=s("Understanding tables with intermediate pre-training"),Ps=s(" by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),ut=d(),mt=n("img"),ft=d(),gt=n("small"),Ds=s("TAPAS architecture. Taken from the "),tt=n("a"),Ns=s("original blog post"),Os=s("."),Ke=d(),Se=n("p"),Ls=s("This model was contributed by "),bt=n("a"),ye=s("nielsr"),kt=s(". The Tensorflow version of this model was contributed by "),yt=n("a"),Qs=s("kamalkraj"),qt=s(". The original code can be found "),jt=n("a"),Is=s("here"),$t=s("."),vs=d(),Rt=n("p"),Et=s("Tips:"),ws=d(),Ye=n("ul"),$e=n("li"),Ws=s("TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Ft=n("code"),ae=s("reset_position_index_per_cell"),nt=s(" parameter of "),Gt=n("a"),Hs=s("TapasConfig"),At=s(", which is set to "),ns=n("code"),Us=s("True"),zt=s(" by default. The default versions of the models available on the "),xt=n("a"),Bs=s("hub"),Ct=s(" all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),os=n("code"),Rs=s('revision="no_reset"'),Mt=s(" when calling the "),rs=n("code"),Gs=s("from_pretrained()"),St=s(" method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),Vs=d(),Le=n("li"),Pt=s("TAPAS is based on BERT, so "),is=n("code"),Ks=s("TAPAS-base"),Dt=s(" for example corresponds to a "),ls=n("code"),Ys=s("BERT-base"),ds=s(" architecture. Of course, "),Ue=n("code"),ps=s("TAPAS-large"),Ee=s(" will result in the best performance (the results reported in the paper are from "),cs=n("code"),ot=s("TAPAS-large"),Js=s("). Results of the various sized models are shown on the "),Nt=n("a"),Ot=s("original Github repository"),Xs=s("."),Zs=d(),Be=n("li"),ea=s("TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),hs=n("code"),us=s("prev_labels"),et=s(" token type ids can be overwritten by the predicted "),Lt=n("code"),j=s("labels"),J=s(" of the model to the previous question. See \u201CUsage\u201D section for more info."),xa=d(),ta=n("li"),Ca=s("TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),ca=d(),Qt=n("h2"),st=n("a"),sa=n("span"),$(rt.$$.fragment),Ma=d(),aa=n("span"),Sa=s("Usage: fine-tuning"),ha=d(),Ie=n("p"),ms=s("Here we explain how you can fine-tune "),bs=n("a"),Re=s("TapasForQuestionAnswering"),Pa=s(" on your own dataset."),ua=d(),ks=n("p"),na=n("strong"),fs=s("STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),ma=d(),fe=n("p"),Da=s("Basically, there are 3 different ways in which one can fine-tune "),ys=n("a"),Na=s("TapasForQuestionAnswering"),Oa=s(", corresponding to the different datasets on which Tapas was fine-tuned:"),fa=d(),_t=n("ol"),oa=n("li"),gs=s("SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),La=d(),Fe=n("li"),Qa=s("WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ra=n("strong"),Ia=s("weak supervision"),Wa=s(", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Ha=d(),he=n("li"),Ua=s("WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ia=n("strong"),Ba=s("strong supervision"),Ra=s(". Here, learning the appropriate aggregation operator is much easier."),ga=d(),qs=n("p"),Ga=s("To summarize:"),_a=d(),Ce=n("table"),la=n("thead"),It=n("tr"),da=n("th"),Ki=n("strong"),Mc=s("Task"),Sc=d(),Yi=n("th"),Ji=n("strong"),Pc=s("Example dataset"),Dc=d(),Xi=n("th"),Zi=n("strong"),Nc=s("Description"),Oc=d(),Va=n("tbody"),Ka=n("tr"),el=n("td"),Lc=s("Conversational"),Qc=d(),tl=n("td"),Ic=s("SQA"),Wc=d(),sl=n("td"),Hc=s("Conversational, only cell selection questions"),Uc=d(),Ya=n("tr"),al=n("td"),Bc=s("Weak supervision for aggregation"),Rc=d(),nl=n("td"),Gc=s("WTQ"),Vc=d(),ol=n("td"),Kc=s("Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Yc=d(),Ja=n("tr"),rl=n("td"),Jc=s("Strong supervision for aggregation"),Xc=d(),il=n("td"),Zc=s("WikiSQL-supervised"),eh=d(),ll=n("td"),th=s("Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),sp=d(),$(qn.$$.fragment),ap=d(),jn=n("p"),sh=s("What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),lo=n("a"),ah=s("here"),nh=s(" for more info."),np=d(),$n=n("p"),oh=s("For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),po=n("a"),rh=s("here"),ih=s("."),op=d(),Hr=n("p"),dl=n("strong"),lh=s("STEP 2: Prepare your data in the SQA format"),rp=d(),En=n("p"),dh=s("Second, no matter what you picked above, you should prepare your dataset in the "),co=n("a"),ph=s("SQA"),ch=s(" format. This format is a TSV/CSV file with the following columns:"),ip=d(),We=n("ul"),Ur=n("li"),pl=n("code"),hh=s("id"),uh=s(": optional, id of the table-question pair, for bookkeeping purposes."),mh=d(),Br=n("li"),cl=n("code"),fh=s("annotator"),gh=s(": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),_h=d(),Rr=n("li"),hl=n("code"),Th=s("position"),vh=s(": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),wh=d(),Gr=n("li"),ul=n("code"),bh=s("question"),kh=s(": string"),yh=d(),Vr=n("li"),ml=n("code"),qh=s("table_file"),jh=s(": string, name of a csv file containing the tabular data"),$h=d(),Kr=n("li"),fl=n("code"),Eh=s("answer_coordinates"),Fh=s(": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),Ah=d(),Yr=n("li"),gl=n("code"),zh=s("answer_text"),xh=s(": list of one or more strings (each string being a cell value that is part of the answer)"),Ch=d(),Jr=n("li"),_l=n("code"),Mh=s("aggregation_label"),Sh=s(": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Ph=d(),Xr=n("li"),Tl=n("code"),Dh=s("float_answer"),Nh=s(": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),lp=d(),Tt=n("p"),Oh=s("The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),ho=n("a"),Lh=s("here"),Qh=s(". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),uo=n("a"),Ih=s("here"),Wh=s(". Interestingly, these conversion scripts are not perfect (the "),vl=n("code"),Hh=s("answer_coordinates"),Uh=s(" and "),wl=n("code"),Bh=s("float_answer"),Rh=s(" fields are populated based on the "),bl=n("code"),Gh=s("answer_text"),Vh=s("), meaning that WTQ and WikiSQL results could actually be improved."),dp=d(),Zr=n("p"),kl=n("strong"),Kh=s("STEP 3: Convert your data into tensors using TapasTokenizer"),pp=d(),$(Fn.$$.fragment),cp=d(),Pe=n("p"),Yh=s("Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),yl=n("strong"),Jh=s("not conversational"),Xh=s(". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),ql=n("code"),Zh=s("queries"),eu=s(", "),jl=n("code"),tu=s("answer_coordinates"),su=s(" and "),$l=n("code"),au=s("answer_text"),nu=s(" per table (in the order of their "),El=n("code"),ou=s("position"),ru=s(`
index) and batch encode each table with its questions. This will make sure that the `),Fl=n("code"),iu=s("prev_labels"),lu=s(" token types (see docs of "),ei=n("a"),du=s("TapasTokenizer"),pu=s(") are set correctly. See "),mo=n("a"),cu=s("this notebook"),hu=s(" for more info. See "),fo=n("a"),uu=s("this notebook"),mu=s(" for more info regarding using the TensorFlow model."),hp=d(),ti=n("p"),fu=s("**STEP 4: Train (fine-tune) the model"),up=d(),$(An.$$.fragment),mp=d(),Xa=n("h2"),zn=n("a"),Al=n("span"),$(go.$$.fragment),gu=d(),zl=n("span"),_u=s("Usage: inference"),fp=d(),$(xn.$$.fragment),gp=d(),vt=n("p"),Tu=s("In case of a conversational set-up, then each table-question pair must be provided "),xl=n("strong"),vu=s("sequentially"),wu=s(" to the model, such that the "),Cl=n("code"),bu=s("prev_labels"),ku=s(" token types can be overwritten by the predicted "),Ml=n("code"),yu=s("labels"),qu=s(" of the previous table-question pair. Again, more info can be found in "),_o=n("a"),ju=s("this notebook"),$u=s(" (for PyTorch) and "),To=n("a"),Eu=s("this notebook"),Fu=s(" (for TensorFlow)."),_p=d(),Za=n("h2"),Cn=n("a"),Sl=n("span"),$(vo.$$.fragment),Au=d(),Pl=n("span"),zu=s("TAPAS specific outputs"),Tp=d(),en=n("div"),$(wo.$$.fragment),xu=d(),bo=n("p"),Cu=s("Output type of "),si=n("a"),Mu=s("TapasForQuestionAnswering"),Su=s("."),vp=d(),tn=n("h2"),Mn=n("a"),Dl=n("span"),$(ko.$$.fragment),Pu=d(),Nl=n("span"),Du=s("TapasConfig"),wp=d(),Wt=n("div"),$(yo.$$.fragment),Nu=d(),_s=n("p"),Ou=s("This is the configuration class to store the configuration of a "),ai=n("a"),Lu=s("TapasModel"),Qu=s(`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS `),Ol=n("em"),Iu=s("tapas-base-finetuned-sqa"),Wu=s(` architecture.
Configuration objects inherit from `),Ll=n("code"),Hu=s("PreTrainedConfig"),Uu=s(` and can be used to control the model outputs. Read the
documentation from `),ni=n("a"),Bu=s("PretrainedConfig"),Ru=s(" for more information."),Gu=d(),qo=n("p"),Vu=s(`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),jo=n("a"),Ku=s("https://github.com/google-research/tapas/tree/master"),Yu=s("."),Ju=d(),Ql=n("p"),Xu=s("Example:"),Zu=d(),$($o.$$.fragment),bp=d(),sn=n("h2"),Sn=n("a"),Il=n("span"),$(Eo.$$.fragment),em=d(),Wl=n("span"),tm=s("TapasTokenizer"),kp=d(),Ge=n("div"),$(Fo.$$.fragment),sm=d(),Hl=n("p"),am=s(`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),nm=d(),Qe=n("p"),om=s("This tokenizer inherits from "),oi=n("a"),rm=s("PreTrainedTokenizer"),im=s(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),ri=n("a"),lm=s("TapasTokenizer"),dm=s(` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Ul=n("code"),pm=s("segment_ids"),cm=s(`,
`),Bl=n("code"),hm=s("column_ids"),um=s(", "),Rl=n("code"),mm=s("row_ids"),fm=s(", "),Gl=n("code"),gm=s("prev_labels"),_m=s(", "),Vl=n("code"),Tm=s("column_ranks"),vm=s(", "),Kl=n("code"),wm=s("inv_column_ranks"),bm=s(" and "),Yl=n("code"),km=s("numeric_relations"),ym=s(":"),qm=d(),it=n("ul"),Jl=n("li"),jm=s(`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),$m=d(),Xl=n("li"),Em=s(`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),Fm=d(),Zl=n("li"),Am=s(`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),zm=d(),ed=n("li"),xm=s(`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Cm=d(),td=n("li"),Mm=s(`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),Sm=d(),sd=n("li"),Pm=s(`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),Dm=d(),ad=n("li"),Nm=s(`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),Om=d(),ii=n("p"),li=n("a"),Lm=s("TapasTokenizer"),Qm=s(` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),Im=d(),Pn=n("div"),$(Ao.$$.fragment),Wm=d(),nd=n("p"),Hm=s("Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),Um=d(),Ta=n("div"),$(zo.$$.fragment),Bm=d(),xo=n("p"),Rm=s("Converts logits of "),di=n("a"),Gm=s("TapasForQuestionAnswering"),Vm=s(` to actual predicted answer coordinates and optional
aggregation indices.`),Km=d(),Co=n("p"),Ym=s(`The original implementation, on which this function is based, can be found
`),Mo=n("a"),Jm=s("here"),Xm=s("."),Zm=d(),pi=n("div"),$(So.$$.fragment),yp=d(),an=n("h2"),Dn=n("a"),od=n("span"),$(Po.$$.fragment),ef=d(),rd=n("span"),tf=s("TapasModel"),qp=d(),lt=n("div"),$(Do.$$.fragment),sf=d(),No=n("p"),af=s(`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ci=n("a"),nf=s("PreTrainedModel"),of=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rf=d(),Oo=n("p"),lf=s("This model is also a PyTorch "),Lo=n("a"),df=s("torch.nn.Module"),pf=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cf=d(),Qo=n("p"),hf=s("This class is a small change compared to "),hi=n("a"),uf=s("BertModel"),mf=s(", taking into account the additional token type ids."),ff=d(),Io=n("p"),gf=s(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Wo=n("a"),_f=s(`Attention is
all you need`),Tf=s(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),vf=d(),Vt=n("div"),$(Ho.$$.fragment),wf=d(),nn=n("p"),bf=s("The "),ui=n("a"),kf=s("TapasModel"),yf=s(" forward method, overrides the "),id=n("code"),qf=s("__call__"),jf=s(" special method."),$f=d(),$(Nn.$$.fragment),Ef=d(),ld=n("p"),Ff=s("Examples:"),Af=d(),$(Uo.$$.fragment),jp=d(),on=n("h2"),On=n("a"),dd=n("span"),$(Bo.$$.fragment),zf=d(),pd=n("span"),xf=s("TapasForMaskedLM"),$p=d(),Ts=n("div"),$(Ro.$$.fragment),Cf=d(),rn=n("p"),Mf=s("Tapas Model with a "),cd=n("code"),Sf=s("language modeling"),Pf=s(` head on top.
This model inherits from `),mi=n("a"),Df=s("PreTrainedModel"),Nf=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Of=d(),Go=n("p"),Lf=s("This model is also a PyTorch "),Vo=n("a"),Qf=s("torch.nn.Module"),If=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wf=d(),Kt=n("div"),$(Ko.$$.fragment),Hf=d(),ln=n("p"),Uf=s("The "),fi=n("a"),Bf=s("TapasForMaskedLM"),Rf=s(" forward method, overrides the "),hd=n("code"),Gf=s("__call__"),Vf=s(" special method."),Kf=d(),$(Ln.$$.fragment),Yf=d(),ud=n("p"),Jf=s("Examples:"),Xf=d(),$(Yo.$$.fragment),Ep=d(),dn=n("h2"),Qn=n("a"),md=n("span"),$(Jo.$$.fragment),Zf=d(),fd=n("span"),eg=s("TapasForSequenceClassification"),Fp=d(),Ht=n("div"),$(Xo.$$.fragment),tg=d(),gd=n("p"),sg=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),ag=d(),Zo=n("p"),ng=s("This model inherits from "),gi=n("a"),og=s("PreTrainedModel"),rg=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ig=d(),er=n("p"),lg=s("This model is also a PyTorch "),tr=n("a"),dg=s("torch.nn.Module"),pg=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cg=d(),Yt=n("div"),$(sr.$$.fragment),hg=d(),pn=n("p"),ug=s("The "),_i=n("a"),mg=s("TapasForSequenceClassification"),fg=s(" forward method, overrides the "),_d=n("code"),gg=s("__call__"),_g=s(" special method."),Tg=d(),$(In.$$.fragment),vg=d(),Td=n("p"),wg=s("Examples:"),bg=d(),$(ar.$$.fragment),Ap=d(),cn=n("h2"),Wn=n("a"),vd=n("span"),$(nr.$$.fragment),kg=d(),wd=n("span"),yg=s("TapasForQuestionAnswering"),zp=d(),Ut=n("div"),$(or.$$.fragment),qg=d(),hn=n("p"),jg=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),bd=n("code"),$g=s("logits"),Eg=s(" and optional "),kd=n("code"),Fg=s("logits_aggregation"),Ag=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),zg=d(),rr=n("p"),xg=s("This model inherits from "),Ti=n("a"),Cg=s("PreTrainedModel"),Mg=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sg=d(),ir=n("p"),Pg=s("This model is also a PyTorch "),lr=n("a"),Dg=s("torch.nn.Module"),Ng=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Og=d(),Jt=n("div"),$(dr.$$.fragment),Lg=d(),un=n("p"),Qg=s("The "),vi=n("a"),Ig=s("TapasForQuestionAnswering"),Wg=s(" forward method, overrides the "),yd=n("code"),Hg=s("__call__"),Ug=s(" special method."),Bg=d(),$(Hn.$$.fragment),Rg=d(),qd=n("p"),Gg=s("Examples:"),Vg=d(),$(pr.$$.fragment),xp=d(),mn=n("h2"),Un=n("a"),jd=n("span"),$(cr.$$.fragment),Kg=d(),$d=n("span"),Yg=s("TFTapasModel"),Cp=d(),dt=n("div"),$(hr.$$.fragment),Jg=d(),Ed=n("p"),Xg=s("The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),Zg=d(),ur=n("p"),e_=s("This model inherits from "),wi=n("a"),t_=s("TFPreTrainedModel"),s_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),a_=d(),mr=n("p"),n_=s("This model is also a "),fr=n("a"),o_=s("tf.keras.Model"),r_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),i_=d(),$(Bn.$$.fragment),l_=d(),Xt=n("div"),$(gr.$$.fragment),d_=d(),fn=n("p"),p_=s("The "),bi=n("a"),c_=s("TFTapasModel"),h_=s(" forward method, overrides the "),Fd=n("code"),u_=s("__call__"),m_=s(" special method."),f_=d(),$(Rn.$$.fragment),g_=d(),Ad=n("p"),__=s("Examples:"),T_=d(),$(_r.$$.fragment),Mp=d(),gn=n("h2"),Gn=n("a"),zd=n("span"),$(Tr.$$.fragment),v_=d(),xd=n("span"),w_=s("TFTapasForMaskedLM"),Sp=d(),pt=n("div"),$(vr.$$.fragment),b_=d(),wr=n("p"),k_=s("Tapas Model with a "),Cd=n("code"),y_=s("language modeling"),q_=s(" head on top."),j_=d(),br=n("p"),$_=s("This model inherits from "),ki=n("a"),E_=s("TFPreTrainedModel"),F_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),A_=d(),kr=n("p"),z_=s("This model is also a "),yr=n("a"),x_=s("tf.keras.Model"),C_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),M_=d(),$(Vn.$$.fragment),S_=d(),Zt=n("div"),$(qr.$$.fragment),P_=d(),_n=n("p"),D_=s("The "),yi=n("a"),N_=s("TFTapasForMaskedLM"),O_=s(" forward method, overrides the "),Md=n("code"),L_=s("__call__"),Q_=s(" special method."),I_=d(),$(Kn.$$.fragment),W_=d(),Sd=n("p"),H_=s("Examples:"),U_=d(),$(jr.$$.fragment),Pp=d(),Tn=n("h2"),Yn=n("a"),Pd=n("span"),$($r.$$.fragment),B_=d(),Dd=n("span"),R_=s("TFTapasForSequenceClassification"),Dp=d(),ct=n("div"),$(Er.$$.fragment),G_=d(),Nd=n("p"),V_=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),K_=d(),Fr=n("p"),Y_=s("This model inherits from "),qi=n("a"),J_=s("TFPreTrainedModel"),X_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Z_=d(),Ar=n("p"),eT=s("This model is also a "),zr=n("a"),tT=s("tf.keras.Model"),sT=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),aT=d(),$(Jn.$$.fragment),nT=d(),es=n("div"),$(xr.$$.fragment),oT=d(),vn=n("p"),rT=s("The "),ji=n("a"),iT=s("TFTapasForSequenceClassification"),lT=s(" forward method, overrides the "),Od=n("code"),dT=s("__call__"),pT=s(" special method."),cT=d(),$(Xn.$$.fragment),hT=d(),Ld=n("p"),uT=s("Examples:"),mT=d(),$(Cr.$$.fragment),Np=d(),wn=n("h2"),Zn=n("a"),Qd=n("span"),$(Mr.$$.fragment),fT=d(),Id=n("span"),gT=s("TFTapasForQuestionAnswering"),Op=d(),ht=n("div"),$(Sr.$$.fragment),_T=d(),bn=n("p"),TT=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Wd=n("code"),vT=s("logits"),wT=s(" and optional "),Hd=n("code"),bT=s("logits_aggregation"),kT=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),yT=d(),Pr=n("p"),qT=s("This model inherits from "),$i=n("a"),jT=s("TFPreTrainedModel"),$T=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ET=d(),Dr=n("p"),FT=s("This model is also a "),Nr=n("a"),AT=s("tf.keras.Model"),zT=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xT=d(),$(eo.$$.fragment),CT=d(),ts=n("div"),$(Or.$$.fragment),MT=d(),kn=n("p"),ST=s("The "),Ei=n("a"),PT=s("TFTapasForQuestionAnswering"),DT=s(" forward method, overrides the "),Ud=n("code"),NT=s("__call__"),OT=s(" special method."),LT=d(),$(to.$$.fragment),QT=d(),Bd=n("p"),IT=s("Examples:"),WT=d(),$(Lr.$$.fragment),this.h()},l(i){const m=Gk('[data-svelte="svelte-1phssyn"]',document.head);l=o(m,"META",{name:!0,content:!0}),m.forEach(t),_=p(i),c=o(i,"H1",{class:!0});var Qr=r(c);f=o(Qr,"A",{id:!0,class:!0,href:!0});var Rd=r(f);v=o(Rd,"SPAN",{});var Gd=r(v);E(w.$$.fragment,Gd),Gd.forEach(t),Rd.forEach(t),T=p(Qr),y=o(Qr,"SPAN",{});var Vd=r(y);k=a(Vd,"TAPAS"),Vd.forEach(t),Qr.forEach(t),D=p(i),q=o(i,"H2",{class:!0});var Ir=r(q);H=o(Ir,"A",{id:!0,class:!0,href:!0});var Kd=r(H);G=o(Kd,"SPAN",{});var Yd=r(G);E(V.$$.fragment,Yd),Yd.forEach(t),Kd.forEach(t),B=p(Ir),K=o(Ir,"SPAN",{});var Jd=r(K);re=a(Jd,"Overview"),Jd.forEach(t),Ir.forEach(t),I=p(i),O=o(i,"P",{});var Wr=r(O);b=a(Wr,"The TAPAS model was proposed in "),M=o(Wr,"A",{href:!0,rel:!0});var Xd=r(M);R=a(Xd,"TAPAS: Weakly Supervised Table Parsing via Pre-training"),Xd.forEach(t),C=a(Wr,`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),Wr.forEach(t),N=p(i),ee=o(i,"P",{});var Zd=r(ee);te=a(Zd,"For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),Zd.forEach(t),ce=p(i),ne=o(i,"UL",{});var yn=r(ne);se=o(yn,"LI",{});var Fi=r(se);S=o(Fi,"A",{href:!0,rel:!0});var ep=r(S);L=a(ep,"SQA"),ep.forEach(t),W=a(Fi," (Sequential Question Answering by Microsoft)"),Fi.forEach(t),X=p(yn),Q=o(yn,"LI",{});var Ai=r(Q);Y=o(Ai,"A",{href:!0,rel:!0});var tp=r(Y);ge=a(tp,"WTQ"),tp.forEach(t),ue=a(Ai," (Wiki Table Questions by Stanford University)"),Ai.forEach(t),_e=p(yn),me=o(yn,"LI",{});var HT=r(me);oe=o(HT,"A",{href:!0,rel:!0});var ev=r(oe);qe=a(ev,"WikiSQL"),ev.forEach(t),ie=a(HT," (by Salesforce)."),HT.forEach(t),yn.forEach(t),we=p(i),g=o(i,"P",{});var tv=r(g);P=a(tv,"It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),tv.forEach(t),ve=p(i),ze=o(i,"P",{});var sv=r(ze);be=a(sv,"The abstract from the paper is the following:"),sv.forEach(t),le=p(i),xe=o(i,"P",{});var av=r(xe);Me=o(av,"EM",{});var nv=r(Me);Z=a(nv,"Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),nv.forEach(t),av.forEach(t),de=p(i),pe=o(i,"P",{});var so=r(pe);De=a(so,"In addition, the authors have further pre-trained TAPAS to recognize "),je=o(so,"STRONG",{});var ov=r(je);Te=a(ov,"table entailment"),ov.forEach(t),Ne=a(so,", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ke=o(so,"A",{href:!0,rel:!0});var rv=r(ke);Ae=a(rv,"TabFact"),rv.forEach(t),Oe=a(so,", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=o(so,"A",{href:!0,rel:!0});var iv=r(Ze);Ss=a(iv,"Understanding tables with intermediate pre-training"),iv.forEach(t),Ps=a(so," by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),so.forEach(t),ut=p(i),mt=o(i,"IMG",{src:!0,alt:!0,width:!0}),ft=p(i),gt=o(i,"SMALL",{});var Qp=r(gt);Ds=a(Qp,"TAPAS architecture. Taken from the "),tt=o(Qp,"A",{href:!0});var lv=r(tt);Ns=a(lv,"original blog post"),lv.forEach(t),Os=a(Qp,"."),Qp.forEach(t),Ke=p(i),Se=o(i,"P",{});var ao=r(Se);Ls=a(ao,"This model was contributed by "),bt=o(ao,"A",{href:!0,rel:!0});var dv=r(bt);ye=a(dv,"nielsr"),dv.forEach(t),kt=a(ao,". The Tensorflow version of this model was contributed by "),yt=o(ao,"A",{href:!0,rel:!0});var pv=r(yt);Qs=a(pv,"kamalkraj"),pv.forEach(t),qt=a(ao,". The original code can be found "),jt=o(ao,"A",{href:!0,rel:!0});var cv=r(jt);Is=a(cv,"here"),cv.forEach(t),$t=a(ao,"."),ao.forEach(t),vs=p(i),Rt=o(i,"P",{});var hv=r(Rt);Et=a(hv,"Tips:"),hv.forEach(t),ws=p(i),Ye=o(i,"UL",{});var no=r(Ye);$e=o(no,"LI",{});var ss=r($e);Ws=a(ss,"TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Ft=o(ss,"CODE",{});var uv=r(Ft);ae=a(uv,"reset_position_index_per_cell"),uv.forEach(t),nt=a(ss," parameter of "),Gt=o(ss,"A",{href:!0});var mv=r(Gt);Hs=a(mv,"TapasConfig"),mv.forEach(t),At=a(ss,", which is set to "),ns=o(ss,"CODE",{});var fv=r(ns);Us=a(fv,"True"),fv.forEach(t),zt=a(ss," by default. The default versions of the models available on the "),xt=o(ss,"A",{href:!0,rel:!0});var gv=r(xt);Bs=a(gv,"hub"),gv.forEach(t),Ct=a(ss," all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),os=o(ss,"CODE",{});var _v=r(os);Rs=a(_v,'revision="no_reset"'),_v.forEach(t),Mt=a(ss," when calling the "),rs=o(ss,"CODE",{});var Tv=r(rs);Gs=a(Tv,"from_pretrained()"),Tv.forEach(t),St=a(ss," method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),ss.forEach(t),Vs=p(no),Le=o(no,"LI",{});var js=r(Le);Pt=a(js,"TAPAS is based on BERT, so "),is=o(js,"CODE",{});var vv=r(is);Ks=a(vv,"TAPAS-base"),vv.forEach(t),Dt=a(js," for example corresponds to a "),ls=o(js,"CODE",{});var wv=r(ls);Ys=a(wv,"BERT-base"),wv.forEach(t),ds=a(js," architecture. Of course, "),Ue=o(js,"CODE",{});var bv=r(Ue);ps=a(bv,"TAPAS-large"),bv.forEach(t),Ee=a(js," will result in the best performance (the results reported in the paper are from "),cs=o(js,"CODE",{});var kv=r(cs);ot=a(kv,"TAPAS-large"),kv.forEach(t),Js=a(js,"). Results of the various sized models are shown on the "),Nt=o(js,"A",{href:!0,rel:!0});var yv=r(Nt);Ot=a(yv,"original Github repository"),yv.forEach(t),Xs=a(js,"."),js.forEach(t),Zs=p(no),Be=o(no,"LI",{});var zi=r(Be);ea=a(zi,"TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),hs=o(zi,"CODE",{});var qv=r(hs);us=a(qv,"prev_labels"),qv.forEach(t),et=a(zi," token type ids can be overwritten by the predicted "),Lt=o(zi,"CODE",{});var jv=r(Lt);j=a(jv,"labels"),jv.forEach(t),J=a(zi," of the model to the previous question. See \u201CUsage\u201D section for more info."),zi.forEach(t),xa=p(no),ta=o(no,"LI",{});var $v=r(ta);Ca=a($v,"TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),$v.forEach(t),no.forEach(t),ca=p(i),Qt=o(i,"H2",{class:!0});var Ip=r(Qt);st=o(Ip,"A",{id:!0,class:!0,href:!0});var Ev=r(st);sa=o(Ev,"SPAN",{});var Fv=r(sa);E(rt.$$.fragment,Fv),Fv.forEach(t),Ev.forEach(t),Ma=p(Ip),aa=o(Ip,"SPAN",{});var Av=r(aa);Sa=a(Av,"Usage: fine-tuning"),Av.forEach(t),Ip.forEach(t),ha=p(i),Ie=o(i,"P",{});var Wp=r(Ie);ms=a(Wp,"Here we explain how you can fine-tune "),bs=o(Wp,"A",{href:!0});var zv=r(bs);Re=a(zv,"TapasForQuestionAnswering"),zv.forEach(t),Pa=a(Wp," on your own dataset."),Wp.forEach(t),ua=p(i),ks=o(i,"P",{});var xv=r(ks);na=o(xv,"STRONG",{});var Cv=r(na);fs=a(Cv,"STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),Cv.forEach(t),xv.forEach(t),ma=p(i),fe=o(i,"P",{});var Hp=r(fe);Da=a(Hp,"Basically, there are 3 different ways in which one can fine-tune "),ys=o(Hp,"A",{href:!0});var Mv=r(ys);Na=a(Mv,"TapasForQuestionAnswering"),Mv.forEach(t),Oa=a(Hp,", corresponding to the different datasets on which Tapas was fine-tuned:"),Hp.forEach(t),fa=p(i),_t=o(i,"OL",{});var xi=r(_t);oa=o(xi,"LI",{});var Sv=r(oa);gs=a(Sv,"SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),Sv.forEach(t),La=p(xi),Fe=o(xi,"LI",{});var Up=r(Fe);Qa=a(Up,"WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ra=o(Up,"STRONG",{});var Pv=r(ra);Ia=a(Pv,"weak supervision"),Pv.forEach(t),Wa=a(Up,", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Up.forEach(t),Ha=p(xi),he=o(xi,"LI",{});var Bp=r(he);Ua=a(Bp,"WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ia=o(Bp,"STRONG",{});var Dv=r(ia);Ba=a(Dv,"strong supervision"),Dv.forEach(t),Ra=a(Bp,". Here, learning the appropriate aggregation operator is much easier."),Bp.forEach(t),xi.forEach(t),ga=p(i),qs=o(i,"P",{});var Nv=r(qs);Ga=a(Nv,"To summarize:"),Nv.forEach(t),_a=p(i),Ce=o(i,"TABLE",{});var Rp=r(Ce);la=o(Rp,"THEAD",{});var Ov=r(la);It=o(Ov,"TR",{});var Ci=r(It);da=o(Ci,"TH",{});var Lv=r(da);Ki=o(Lv,"STRONG",{});var Qv=r(Ki);Mc=a(Qv,"Task"),Qv.forEach(t),Lv.forEach(t),Sc=p(Ci),Yi=o(Ci,"TH",{});var Iv=r(Yi);Ji=o(Iv,"STRONG",{});var Wv=r(Ji);Pc=a(Wv,"Example dataset"),Wv.forEach(t),Iv.forEach(t),Dc=p(Ci),Xi=o(Ci,"TH",{});var Hv=r(Xi);Zi=o(Hv,"STRONG",{});var Uv=r(Zi);Nc=a(Uv,"Description"),Uv.forEach(t),Hv.forEach(t),Ci.forEach(t),Ov.forEach(t),Oc=p(Rp),Va=o(Rp,"TBODY",{});var Mi=r(Va);Ka=o(Mi,"TR",{});var Si=r(Ka);el=o(Si,"TD",{});var Bv=r(el);Lc=a(Bv,"Conversational"),Bv.forEach(t),Qc=p(Si),tl=o(Si,"TD",{});var Rv=r(tl);Ic=a(Rv,"SQA"),Rv.forEach(t),Wc=p(Si),sl=o(Si,"TD",{});var Gv=r(sl);Hc=a(Gv,"Conversational, only cell selection questions"),Gv.forEach(t),Si.forEach(t),Uc=p(Mi),Ya=o(Mi,"TR",{});var Pi=r(Ya);al=o(Pi,"TD",{});var Vv=r(al);Bc=a(Vv,"Weak supervision for aggregation"),Vv.forEach(t),Rc=p(Pi),nl=o(Pi,"TD",{});var Kv=r(nl);Gc=a(Kv,"WTQ"),Kv.forEach(t),Vc=p(Pi),ol=o(Pi,"TD",{});var Yv=r(ol);Kc=a(Yv,"Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Yv.forEach(t),Pi.forEach(t),Yc=p(Mi),Ja=o(Mi,"TR",{});var Di=r(Ja);rl=o(Di,"TD",{});var Jv=r(rl);Jc=a(Jv,"Strong supervision for aggregation"),Jv.forEach(t),Xc=p(Di),il=o(Di,"TD",{});var Xv=r(il);Zc=a(Xv,"WikiSQL-supervised"),Xv.forEach(t),eh=p(Di),ll=o(Di,"TD",{});var Zv=r(ll);th=a(Zv,"Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),Zv.forEach(t),Di.forEach(t),Mi.forEach(t),Rp.forEach(t),sp=p(i),E(qn.$$.fragment,i),ap=p(i),jn=o(i,"P",{});var Gp=r(jn);sh=a(Gp,"What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),lo=o(Gp,"A",{href:!0,rel:!0});var ew=r(lo);ah=a(ew,"here"),ew.forEach(t),nh=a(Gp," for more info."),Gp.forEach(t),np=p(i),$n=o(i,"P",{});var Vp=r($n);oh=a(Vp,"For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),po=o(Vp,"A",{href:!0,rel:!0});var tw=r(po);rh=a(tw,"here"),tw.forEach(t),ih=a(Vp,"."),Vp.forEach(t),op=p(i),Hr=o(i,"P",{});var sw=r(Hr);dl=o(sw,"STRONG",{});var aw=r(dl);lh=a(aw,"STEP 2: Prepare your data in the SQA format"),aw.forEach(t),sw.forEach(t),rp=p(i),En=o(i,"P",{});var Kp=r(En);dh=a(Kp,"Second, no matter what you picked above, you should prepare your dataset in the "),co=o(Kp,"A",{href:!0,rel:!0});var nw=r(co);ph=a(nw,"SQA"),nw.forEach(t),ch=a(Kp," format. This format is a TSV/CSV file with the following columns:"),Kp.forEach(t),ip=p(i),We=o(i,"UL",{});var at=r(We);Ur=o(at,"LI",{});var UT=r(Ur);pl=o(UT,"CODE",{});var ow=r(pl);hh=a(ow,"id"),ow.forEach(t),uh=a(UT,": optional, id of the table-question pair, for bookkeeping purposes."),UT.forEach(t),mh=p(at),Br=o(at,"LI",{});var BT=r(Br);cl=o(BT,"CODE",{});var rw=r(cl);fh=a(rw,"annotator"),rw.forEach(t),gh=a(BT,": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),BT.forEach(t),_h=p(at),Rr=o(at,"LI",{});var RT=r(Rr);hl=o(RT,"CODE",{});var iw=r(hl);Th=a(iw,"position"),iw.forEach(t),vh=a(RT,": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),RT.forEach(t),wh=p(at),Gr=o(at,"LI",{});var GT=r(Gr);ul=o(GT,"CODE",{});var lw=r(ul);bh=a(lw,"question"),lw.forEach(t),kh=a(GT,": string"),GT.forEach(t),yh=p(at),Vr=o(at,"LI",{});var VT=r(Vr);ml=o(VT,"CODE",{});var dw=r(ml);qh=a(dw,"table_file"),dw.forEach(t),jh=a(VT,": string, name of a csv file containing the tabular data"),VT.forEach(t),$h=p(at),Kr=o(at,"LI",{});var KT=r(Kr);fl=o(KT,"CODE",{});var pw=r(fl);Eh=a(pw,"answer_coordinates"),pw.forEach(t),Fh=a(KT,": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),KT.forEach(t),Ah=p(at),Yr=o(at,"LI",{});var YT=r(Yr);gl=o(YT,"CODE",{});var cw=r(gl);zh=a(cw,"answer_text"),cw.forEach(t),xh=a(YT,": list of one or more strings (each string being a cell value that is part of the answer)"),YT.forEach(t),Ch=p(at),Jr=o(at,"LI",{});var JT=r(Jr);_l=o(JT,"CODE",{});var hw=r(_l);Mh=a(hw,"aggregation_label"),hw.forEach(t),Sh=a(JT,": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),JT.forEach(t),Ph=p(at),Xr=o(at,"LI",{});var XT=r(Xr);Tl=o(XT,"CODE",{});var uw=r(Tl);Dh=a(uw,"float_answer"),uw.forEach(t),Nh=a(XT,": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),XT.forEach(t),at.forEach(t),lp=p(i),Tt=o(i,"P",{});var $s=r(Tt);Oh=a($s,"The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),ho=o($s,"A",{href:!0,rel:!0});var mw=r(ho);Lh=a(mw,"here"),mw.forEach(t),Qh=a($s,". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),uo=o($s,"A",{href:!0,rel:!0});var fw=r(uo);Ih=a(fw,"here"),fw.forEach(t),Wh=a($s,". Interestingly, these conversion scripts are not perfect (the "),vl=o($s,"CODE",{});var gw=r(vl);Hh=a(gw,"answer_coordinates"),gw.forEach(t),Uh=a($s," and "),wl=o($s,"CODE",{});var _w=r(wl);Bh=a(_w,"float_answer"),_w.forEach(t),Rh=a($s," fields are populated based on the "),bl=o($s,"CODE",{});var Tw=r(bl);Gh=a(Tw,"answer_text"),Tw.forEach(t),Vh=a($s,"), meaning that WTQ and WikiSQL results could actually be improved."),$s.forEach(t),dp=p(i),Zr=o(i,"P",{});var vw=r(Zr);kl=o(vw,"STRONG",{});var ww=r(kl);Kh=a(ww,"STEP 3: Convert your data into tensors using TapasTokenizer"),ww.forEach(t),vw.forEach(t),pp=p(i),E(Fn.$$.fragment,i),cp=p(i),Pe=o(i,"P",{});var Je=r(Pe);Yh=a(Je,"Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),yl=o(Je,"STRONG",{});var bw=r(yl);Jh=a(bw,"not conversational"),bw.forEach(t),Xh=a(Je,". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),ql=o(Je,"CODE",{});var kw=r(ql);Zh=a(kw,"queries"),kw.forEach(t),eu=a(Je,", "),jl=o(Je,"CODE",{});var yw=r(jl);tu=a(yw,"answer_coordinates"),yw.forEach(t),su=a(Je," and "),$l=o(Je,"CODE",{});var qw=r($l);au=a(qw,"answer_text"),qw.forEach(t),nu=a(Je," per table (in the order of their "),El=o(Je,"CODE",{});var jw=r(El);ou=a(jw,"position"),jw.forEach(t),ru=a(Je,`
index) and batch encode each table with its questions. This will make sure that the `),Fl=o(Je,"CODE",{});var $w=r(Fl);iu=a($w,"prev_labels"),$w.forEach(t),lu=a(Je," token types (see docs of "),ei=o(Je,"A",{href:!0});var Ew=r(ei);du=a(Ew,"TapasTokenizer"),Ew.forEach(t),pu=a(Je,") are set correctly. See "),mo=o(Je,"A",{href:!0,rel:!0});var Fw=r(mo);cu=a(Fw,"this notebook"),Fw.forEach(t),hu=a(Je," for more info. See "),fo=o(Je,"A",{href:!0,rel:!0});var Aw=r(fo);uu=a(Aw,"this notebook"),Aw.forEach(t),mu=a(Je," for more info regarding using the TensorFlow model."),Je.forEach(t),hp=p(i),ti=o(i,"P",{});var zw=r(ti);fu=a(zw,"**STEP 4: Train (fine-tune) the model"),zw.forEach(t),up=p(i),E(An.$$.fragment,i),mp=p(i),Xa=o(i,"H2",{class:!0});var Yp=r(Xa);zn=o(Yp,"A",{id:!0,class:!0,href:!0});var xw=r(zn);Al=o(xw,"SPAN",{});var Cw=r(Al);E(go.$$.fragment,Cw),Cw.forEach(t),xw.forEach(t),gu=p(Yp),zl=o(Yp,"SPAN",{});var Mw=r(zl);_u=a(Mw,"Usage: inference"),Mw.forEach(t),Yp.forEach(t),fp=p(i),E(xn.$$.fragment,i),gp=p(i),vt=o(i,"P",{});var Es=r(vt);Tu=a(Es,"In case of a conversational set-up, then each table-question pair must be provided "),xl=o(Es,"STRONG",{});var Sw=r(xl);vu=a(Sw,"sequentially"),Sw.forEach(t),wu=a(Es," to the model, such that the "),Cl=o(Es,"CODE",{});var Pw=r(Cl);bu=a(Pw,"prev_labels"),Pw.forEach(t),ku=a(Es," token types can be overwritten by the predicted "),Ml=o(Es,"CODE",{});var Dw=r(Ml);yu=a(Dw,"labels"),Dw.forEach(t),qu=a(Es," of the previous table-question pair. Again, more info can be found in "),_o=o(Es,"A",{href:!0,rel:!0});var Nw=r(_o);ju=a(Nw,"this notebook"),Nw.forEach(t),$u=a(Es," (for PyTorch) and "),To=o(Es,"A",{href:!0,rel:!0});var Ow=r(To);Eu=a(Ow,"this notebook"),Ow.forEach(t),Fu=a(Es," (for TensorFlow)."),Es.forEach(t),_p=p(i),Za=o(i,"H2",{class:!0});var Jp=r(Za);Cn=o(Jp,"A",{id:!0,class:!0,href:!0});var Lw=r(Cn);Sl=o(Lw,"SPAN",{});var Qw=r(Sl);E(vo.$$.fragment,Qw),Qw.forEach(t),Lw.forEach(t),Au=p(Jp),Pl=o(Jp,"SPAN",{});var Iw=r(Pl);zu=a(Iw,"TAPAS specific outputs"),Iw.forEach(t),Jp.forEach(t),Tp=p(i),en=o(i,"DIV",{class:!0});var Xp=r(en);E(wo.$$.fragment,Xp),xu=p(Xp),bo=o(Xp,"P",{});var Zp=r(bo);Cu=a(Zp,"Output type of "),si=o(Zp,"A",{href:!0});var Ww=r(si);Mu=a(Ww,"TapasForQuestionAnswering"),Ww.forEach(t),Su=a(Zp,"."),Zp.forEach(t),Xp.forEach(t),vp=p(i),tn=o(i,"H2",{class:!0});var ec=r(tn);Mn=o(ec,"A",{id:!0,class:!0,href:!0});var Hw=r(Mn);Dl=o(Hw,"SPAN",{});var Uw=r(Dl);E(ko.$$.fragment,Uw),Uw.forEach(t),Hw.forEach(t),Pu=p(ec),Nl=o(ec,"SPAN",{});var Bw=r(Nl);Du=a(Bw,"TapasConfig"),Bw.forEach(t),ec.forEach(t),wp=p(i),Wt=o(i,"DIV",{class:!0});var va=r(Wt);E(yo.$$.fragment,va),Nu=p(va),_s=o(va,"P",{});var wa=r(_s);Ou=a(wa,"This is the configuration class to store the configuration of a "),ai=o(wa,"A",{href:!0});var Rw=r(ai);Lu=a(Rw,"TapasModel"),Rw.forEach(t),Qu=a(wa,`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS `),Ol=o(wa,"EM",{});var Gw=r(Ol);Iu=a(Gw,"tapas-base-finetuned-sqa"),Gw.forEach(t),Wu=a(wa,` architecture.
Configuration objects inherit from `),Ll=o(wa,"CODE",{});var Vw=r(Ll);Hu=a(Vw,"PreTrainedConfig"),Vw.forEach(t),Uu=a(wa,` and can be used to control the model outputs. Read the
documentation from `),ni=o(wa,"A",{href:!0});var Kw=r(ni);Bu=a(Kw,"PretrainedConfig"),Kw.forEach(t),Ru=a(wa," for more information."),wa.forEach(t),Gu=p(va),qo=o(va,"P",{});var tc=r(qo);Vu=a(tc,`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),jo=o(tc,"A",{href:!0,rel:!0});var Yw=r(jo);Ku=a(Yw,"https://github.com/google-research/tapas/tree/master"),Yw.forEach(t),Yu=a(tc,"."),tc.forEach(t),Ju=p(va),Ql=o(va,"P",{});var Jw=r(Ql);Xu=a(Jw,"Example:"),Jw.forEach(t),Zu=p(va),E($o.$$.fragment,va),va.forEach(t),bp=p(i),sn=o(i,"H2",{class:!0});var sc=r(sn);Sn=o(sc,"A",{id:!0,class:!0,href:!0});var Xw=r(Sn);Il=o(Xw,"SPAN",{});var Zw=r(Il);E(Eo.$$.fragment,Zw),Zw.forEach(t),Xw.forEach(t),em=p(sc),Wl=o(sc,"SPAN",{});var eb=r(Wl);tm=a(eb,"TapasTokenizer"),eb.forEach(t),sc.forEach(t),kp=p(i),Ge=o(i,"DIV",{class:!0});var wt=r(Ge);E(Fo.$$.fragment,wt),sm=p(wt),Hl=o(wt,"P",{});var tb=r(Hl);am=a(tb,`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),tb.forEach(t),nm=p(wt),Qe=o(wt,"P",{});var Xe=r(Qe);om=a(Xe,"This tokenizer inherits from "),oi=o(Xe,"A",{href:!0});var sb=r(oi);rm=a(sb,"PreTrainedTokenizer"),sb.forEach(t),im=a(Xe,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),ri=o(Xe,"A",{href:!0});var ab=r(ri);lm=a(ab,"TapasTokenizer"),ab.forEach(t),dm=a(Xe,` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Ul=o(Xe,"CODE",{});var nb=r(Ul);pm=a(nb,"segment_ids"),nb.forEach(t),cm=a(Xe,`,
`),Bl=o(Xe,"CODE",{});var ob=r(Bl);hm=a(ob,"column_ids"),ob.forEach(t),um=a(Xe,", "),Rl=o(Xe,"CODE",{});var rb=r(Rl);mm=a(rb,"row_ids"),rb.forEach(t),fm=a(Xe,", "),Gl=o(Xe,"CODE",{});var ib=r(Gl);gm=a(ib,"prev_labels"),ib.forEach(t),_m=a(Xe,", "),Vl=o(Xe,"CODE",{});var lb=r(Vl);Tm=a(lb,"column_ranks"),lb.forEach(t),vm=a(Xe,", "),Kl=o(Xe,"CODE",{});var db=r(Kl);wm=a(db,"inv_column_ranks"),db.forEach(t),bm=a(Xe," and "),Yl=o(Xe,"CODE",{});var pb=r(Yl);km=a(pb,"numeric_relations"),pb.forEach(t),ym=a(Xe,":"),Xe.forEach(t),qm=p(wt),it=o(wt,"UL",{});var as=r(it);Jl=o(as,"LI",{});var cb=r(Jl);jm=a(cb,`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),cb.forEach(t),$m=p(as),Xl=o(as,"LI",{});var hb=r(Xl);Em=a(hb,`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),hb.forEach(t),Fm=p(as),Zl=o(as,"LI",{});var ub=r(Zl);Am=a(ub,`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),ub.forEach(t),zm=p(as),ed=o(as,"LI",{});var mb=r(ed);xm=a(mb,`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),mb.forEach(t),Cm=p(as),td=o(as,"LI",{});var fb=r(td);Mm=a(fb,`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),fb.forEach(t),Sm=p(as),sd=o(as,"LI",{});var gb=r(sd);Pm=a(gb,`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),gb.forEach(t),Dm=p(as),ad=o(as,"LI",{});var _b=r(ad);Nm=a(_b,`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),_b.forEach(t),as.forEach(t),Om=p(wt),ii=o(wt,"P",{});var ZT=r(ii);li=o(ZT,"A",{href:!0});var Tb=r(li);Lm=a(Tb,"TapasTokenizer"),Tb.forEach(t),Qm=a(ZT,` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),ZT.forEach(t),Im=p(wt),Pn=o(wt,"DIV",{class:!0});var ac=r(Pn);E(Ao.$$.fragment,ac),Wm=p(ac),nd=o(ac,"P",{});var vb=r(nd);Hm=a(vb,"Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),vb.forEach(t),ac.forEach(t),Um=p(wt),Ta=o(wt,"DIV",{class:!0});var Ni=r(Ta);E(zo.$$.fragment,Ni),Bm=p(Ni),xo=o(Ni,"P",{});var nc=r(xo);Rm=a(nc,"Converts logits of "),di=o(nc,"A",{href:!0});var wb=r(di);Gm=a(wb,"TapasForQuestionAnswering"),wb.forEach(t),Vm=a(nc,` to actual predicted answer coordinates and optional
aggregation indices.`),nc.forEach(t),Km=p(Ni),Co=o(Ni,"P",{});var oc=r(Co);Ym=a(oc,`The original implementation, on which this function is based, can be found
`),Mo=o(oc,"A",{href:!0,rel:!0});var bb=r(Mo);Jm=a(bb,"here"),bb.forEach(t),Xm=a(oc,"."),oc.forEach(t),Ni.forEach(t),Zm=p(wt),pi=o(wt,"DIV",{class:!0});var kb=r(pi);E(So.$$.fragment,kb),kb.forEach(t),wt.forEach(t),yp=p(i),an=o(i,"H2",{class:!0});var rc=r(an);Dn=o(rc,"A",{id:!0,class:!0,href:!0});var yb=r(Dn);od=o(yb,"SPAN",{});var qb=r(od);E(Po.$$.fragment,qb),qb.forEach(t),yb.forEach(t),ef=p(rc),rd=o(rc,"SPAN",{});var jb=r(rd);tf=a(jb,"TapasModel"),jb.forEach(t),rc.forEach(t),qp=p(i),lt=o(i,"DIV",{class:!0});var Fs=r(lt);E(Do.$$.fragment,Fs),sf=p(Fs),No=o(Fs,"P",{});var ic=r(No);af=a(ic,`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ci=o(ic,"A",{href:!0});var $b=r(ci);nf=a($b,"PreTrainedModel"),$b.forEach(t),of=a(ic,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ic.forEach(t),rf=p(Fs),Oo=o(Fs,"P",{});var lc=r(Oo);lf=a(lc,"This model is also a PyTorch "),Lo=o(lc,"A",{href:!0,rel:!0});var Eb=r(Lo);df=a(Eb,"torch.nn.Module"),Eb.forEach(t),pf=a(lc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lc.forEach(t),cf=p(Fs),Qo=o(Fs,"P",{});var dc=r(Qo);hf=a(dc,"This class is a small change compared to "),hi=o(dc,"A",{href:!0});var Fb=r(hi);uf=a(Fb,"BertModel"),Fb.forEach(t),mf=a(dc,", taking into account the additional token type ids."),dc.forEach(t),ff=p(Fs),Io=o(Fs,"P",{});var pc=r(Io);gf=a(pc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Wo=o(pc,"A",{href:!0,rel:!0});var Ab=r(Wo);_f=a(Ab,`Attention is
all you need`),Ab.forEach(t),Tf=a(pc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),pc.forEach(t),vf=p(Fs),Vt=o(Fs,"DIV",{class:!0});var ba=r(Vt);E(Ho.$$.fragment,ba),wf=p(ba),nn=o(ba,"P",{});var Oi=r(nn);bf=a(Oi,"The "),ui=o(Oi,"A",{href:!0});var zb=r(ui);kf=a(zb,"TapasModel"),zb.forEach(t),yf=a(Oi," forward method, overrides the "),id=o(Oi,"CODE",{});var xb=r(id);qf=a(xb,"__call__"),xb.forEach(t),jf=a(Oi," special method."),Oi.forEach(t),$f=p(ba),E(Nn.$$.fragment,ba),Ef=p(ba),ld=o(ba,"P",{});var Cb=r(ld);Ff=a(Cb,"Examples:"),Cb.forEach(t),Af=p(ba),E(Uo.$$.fragment,ba),ba.forEach(t),Fs.forEach(t),jp=p(i),on=o(i,"H2",{class:!0});var cc=r(on);On=o(cc,"A",{id:!0,class:!0,href:!0});var Mb=r(On);dd=o(Mb,"SPAN",{});var Sb=r(dd);E(Bo.$$.fragment,Sb),Sb.forEach(t),Mb.forEach(t),zf=p(cc),pd=o(cc,"SPAN",{});var Pb=r(pd);xf=a(Pb,"TapasForMaskedLM"),Pb.forEach(t),cc.forEach(t),$p=p(i),Ts=o(i,"DIV",{class:!0});var oo=r(Ts);E(Ro.$$.fragment,oo),Cf=p(oo),rn=o(oo,"P",{});var Li=r(rn);Mf=a(Li,"Tapas Model with a "),cd=o(Li,"CODE",{});var Db=r(cd);Sf=a(Db,"language modeling"),Db.forEach(t),Pf=a(Li,` head on top.
This model inherits from `),mi=o(Li,"A",{href:!0});var Nb=r(mi);Df=a(Nb,"PreTrainedModel"),Nb.forEach(t),Nf=a(Li,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Li.forEach(t),Of=p(oo),Go=o(oo,"P",{});var hc=r(Go);Lf=a(hc,"This model is also a PyTorch "),Vo=o(hc,"A",{href:!0,rel:!0});var Ob=r(Vo);Qf=a(Ob,"torch.nn.Module"),Ob.forEach(t),If=a(hc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),hc.forEach(t),Wf=p(oo),Kt=o(oo,"DIV",{class:!0});var ka=r(Kt);E(Ko.$$.fragment,ka),Hf=p(ka),ln=o(ka,"P",{});var Qi=r(ln);Uf=a(Qi,"The "),fi=o(Qi,"A",{href:!0});var Lb=r(fi);Bf=a(Lb,"TapasForMaskedLM"),Lb.forEach(t),Rf=a(Qi," forward method, overrides the "),hd=o(Qi,"CODE",{});var Qb=r(hd);Gf=a(Qb,"__call__"),Qb.forEach(t),Vf=a(Qi," special method."),Qi.forEach(t),Kf=p(ka),E(Ln.$$.fragment,ka),Yf=p(ka),ud=o(ka,"P",{});var Ib=r(ud);Jf=a(Ib,"Examples:"),Ib.forEach(t),Xf=p(ka),E(Yo.$$.fragment,ka),ka.forEach(t),oo.forEach(t),Ep=p(i),dn=o(i,"H2",{class:!0});var uc=r(dn);Qn=o(uc,"A",{id:!0,class:!0,href:!0});var Wb=r(Qn);md=o(Wb,"SPAN",{});var Hb=r(md);E(Jo.$$.fragment,Hb),Hb.forEach(t),Wb.forEach(t),Zf=p(uc),fd=o(uc,"SPAN",{});var Ub=r(fd);eg=a(Ub,"TapasForSequenceClassification"),Ub.forEach(t),uc.forEach(t),Fp=p(i),Ht=o(i,"DIV",{class:!0});var ya=r(Ht);E(Xo.$$.fragment,ya),tg=p(ya),gd=o(ya,"P",{});var Bb=r(gd);sg=a(Bb,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Bb.forEach(t),ag=p(ya),Zo=o(ya,"P",{});var mc=r(Zo);ng=a(mc,"This model inherits from "),gi=o(mc,"A",{href:!0});var Rb=r(gi);og=a(Rb,"PreTrainedModel"),Rb.forEach(t),rg=a(mc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mc.forEach(t),ig=p(ya),er=o(ya,"P",{});var fc=r(er);lg=a(fc,"This model is also a PyTorch "),tr=o(fc,"A",{href:!0,rel:!0});var Gb=r(tr);dg=a(Gb,"torch.nn.Module"),Gb.forEach(t),pg=a(fc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fc.forEach(t),cg=p(ya),Yt=o(ya,"DIV",{class:!0});var qa=r(Yt);E(sr.$$.fragment,qa),hg=p(qa),pn=o(qa,"P",{});var Ii=r(pn);ug=a(Ii,"The "),_i=o(Ii,"A",{href:!0});var Vb=r(_i);mg=a(Vb,"TapasForSequenceClassification"),Vb.forEach(t),fg=a(Ii," forward method, overrides the "),_d=o(Ii,"CODE",{});var Kb=r(_d);gg=a(Kb,"__call__"),Kb.forEach(t),_g=a(Ii," special method."),Ii.forEach(t),Tg=p(qa),E(In.$$.fragment,qa),vg=p(qa),Td=o(qa,"P",{});var Yb=r(Td);wg=a(Yb,"Examples:"),Yb.forEach(t),bg=p(qa),E(ar.$$.fragment,qa),qa.forEach(t),ya.forEach(t),Ap=p(i),cn=o(i,"H2",{class:!0});var gc=r(cn);Wn=o(gc,"A",{id:!0,class:!0,href:!0});var Jb=r(Wn);vd=o(Jb,"SPAN",{});var Xb=r(vd);E(nr.$$.fragment,Xb),Xb.forEach(t),Jb.forEach(t),kg=p(gc),wd=o(gc,"SPAN",{});var Zb=r(wd);yg=a(Zb,"TapasForQuestionAnswering"),Zb.forEach(t),gc.forEach(t),zp=p(i),Ut=o(i,"DIV",{class:!0});var ja=r(Ut);E(or.$$.fragment,ja),qg=p(ja),hn=o(ja,"P",{});var Wi=r(hn);jg=a(Wi,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),bd=o(Wi,"CODE",{});var ek=r(bd);$g=a(ek,"logits"),ek.forEach(t),Eg=a(Wi," and optional "),kd=o(Wi,"CODE",{});var tk=r(kd);Fg=a(tk,"logits_aggregation"),tk.forEach(t),Ag=a(Wi,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Wi.forEach(t),zg=p(ja),rr=o(ja,"P",{});var _c=r(rr);xg=a(_c,"This model inherits from "),Ti=o(_c,"A",{href:!0});var sk=r(Ti);Cg=a(sk,"PreTrainedModel"),sk.forEach(t),Mg=a(_c,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_c.forEach(t),Sg=p(ja),ir=o(ja,"P",{});var Tc=r(ir);Pg=a(Tc,"This model is also a PyTorch "),lr=o(Tc,"A",{href:!0,rel:!0});var ak=r(lr);Dg=a(ak,"torch.nn.Module"),ak.forEach(t),Ng=a(Tc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tc.forEach(t),Og=p(ja),Jt=o(ja,"DIV",{class:!0});var $a=r(Jt);E(dr.$$.fragment,$a),Lg=p($a),un=o($a,"P",{});var Hi=r(un);Qg=a(Hi,"The "),vi=o(Hi,"A",{href:!0});var nk=r(vi);Ig=a(nk,"TapasForQuestionAnswering"),nk.forEach(t),Wg=a(Hi," forward method, overrides the "),yd=o(Hi,"CODE",{});var ok=r(yd);Hg=a(ok,"__call__"),ok.forEach(t),Ug=a(Hi," special method."),Hi.forEach(t),Bg=p($a),E(Hn.$$.fragment,$a),Rg=p($a),qd=o($a,"P",{});var rk=r(qd);Gg=a(rk,"Examples:"),rk.forEach(t),Vg=p($a),E(pr.$$.fragment,$a),$a.forEach(t),ja.forEach(t),xp=p(i),mn=o(i,"H2",{class:!0});var vc=r(mn);Un=o(vc,"A",{id:!0,class:!0,href:!0});var ik=r(Un);jd=o(ik,"SPAN",{});var lk=r(jd);E(cr.$$.fragment,lk),lk.forEach(t),ik.forEach(t),Kg=p(vc),$d=o(vc,"SPAN",{});var dk=r($d);Yg=a(dk,"TFTapasModel"),dk.forEach(t),vc.forEach(t),Cp=p(i),dt=o(i,"DIV",{class:!0});var As=r(dt);E(hr.$$.fragment,As),Jg=p(As),Ed=o(As,"P",{});var pk=r(Ed);Xg=a(pk,"The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),pk.forEach(t),Zg=p(As),ur=o(As,"P",{});var wc=r(ur);e_=a(wc,"This model inherits from "),wi=o(wc,"A",{href:!0});var ck=r(wi);t_=a(ck,"TFPreTrainedModel"),ck.forEach(t),s_=a(wc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wc.forEach(t),a_=p(As),mr=o(As,"P",{});var bc=r(mr);n_=a(bc,"This model is also a "),fr=o(bc,"A",{href:!0,rel:!0});var hk=r(fr);o_=a(hk,"tf.keras.Model"),hk.forEach(t),r_=a(bc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bc.forEach(t),i_=p(As),E(Bn.$$.fragment,As),l_=p(As),Xt=o(As,"DIV",{class:!0});var Ea=r(Xt);E(gr.$$.fragment,Ea),d_=p(Ea),fn=o(Ea,"P",{});var Ui=r(fn);p_=a(Ui,"The "),bi=o(Ui,"A",{href:!0});var uk=r(bi);c_=a(uk,"TFTapasModel"),uk.forEach(t),h_=a(Ui," forward method, overrides the "),Fd=o(Ui,"CODE",{});var mk=r(Fd);u_=a(mk,"__call__"),mk.forEach(t),m_=a(Ui," special method."),Ui.forEach(t),f_=p(Ea),E(Rn.$$.fragment,Ea),g_=p(Ea),Ad=o(Ea,"P",{});var fk=r(Ad);__=a(fk,"Examples:"),fk.forEach(t),T_=p(Ea),E(_r.$$.fragment,Ea),Ea.forEach(t),As.forEach(t),Mp=p(i),gn=o(i,"H2",{class:!0});var kc=r(gn);Gn=o(kc,"A",{id:!0,class:!0,href:!0});var gk=r(Gn);zd=o(gk,"SPAN",{});var _k=r(zd);E(Tr.$$.fragment,_k),_k.forEach(t),gk.forEach(t),v_=p(kc),xd=o(kc,"SPAN",{});var Tk=r(xd);w_=a(Tk,"TFTapasForMaskedLM"),Tk.forEach(t),kc.forEach(t),Sp=p(i),pt=o(i,"DIV",{class:!0});var zs=r(pt);E(vr.$$.fragment,zs),b_=p(zs),wr=o(zs,"P",{});var yc=r(wr);k_=a(yc,"Tapas Model with a "),Cd=o(yc,"CODE",{});var vk=r(Cd);y_=a(vk,"language modeling"),vk.forEach(t),q_=a(yc," head on top."),yc.forEach(t),j_=p(zs),br=o(zs,"P",{});var qc=r(br);$_=a(qc,"This model inherits from "),ki=o(qc,"A",{href:!0});var wk=r(ki);E_=a(wk,"TFPreTrainedModel"),wk.forEach(t),F_=a(qc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qc.forEach(t),A_=p(zs),kr=o(zs,"P",{});var jc=r(kr);z_=a(jc,"This model is also a "),yr=o(jc,"A",{href:!0,rel:!0});var bk=r(yr);x_=a(bk,"tf.keras.Model"),bk.forEach(t),C_=a(jc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jc.forEach(t),M_=p(zs),E(Vn.$$.fragment,zs),S_=p(zs),Zt=o(zs,"DIV",{class:!0});var Fa=r(Zt);E(qr.$$.fragment,Fa),P_=p(Fa),_n=o(Fa,"P",{});var Bi=r(_n);D_=a(Bi,"The "),yi=o(Bi,"A",{href:!0});var kk=r(yi);N_=a(kk,"TFTapasForMaskedLM"),kk.forEach(t),O_=a(Bi," forward method, overrides the "),Md=o(Bi,"CODE",{});var yk=r(Md);L_=a(yk,"__call__"),yk.forEach(t),Q_=a(Bi," special method."),Bi.forEach(t),I_=p(Fa),E(Kn.$$.fragment,Fa),W_=p(Fa),Sd=o(Fa,"P",{});var qk=r(Sd);H_=a(qk,"Examples:"),qk.forEach(t),U_=p(Fa),E(jr.$$.fragment,Fa),Fa.forEach(t),zs.forEach(t),Pp=p(i),Tn=o(i,"H2",{class:!0});var $c=r(Tn);Yn=o($c,"A",{id:!0,class:!0,href:!0});var jk=r(Yn);Pd=o(jk,"SPAN",{});var $k=r(Pd);E($r.$$.fragment,$k),$k.forEach(t),jk.forEach(t),B_=p($c),Dd=o($c,"SPAN",{});var Ek=r(Dd);R_=a(Ek,"TFTapasForSequenceClassification"),Ek.forEach(t),$c.forEach(t),Dp=p(i),ct=o(i,"DIV",{class:!0});var xs=r(ct);E(Er.$$.fragment,xs),G_=p(xs),Nd=o(xs,"P",{});var Fk=r(Nd);V_=a(Fk,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Fk.forEach(t),K_=p(xs),Fr=o(xs,"P",{});var Ec=r(Fr);Y_=a(Ec,"This model inherits from "),qi=o(Ec,"A",{href:!0});var Ak=r(qi);J_=a(Ak,"TFPreTrainedModel"),Ak.forEach(t),X_=a(Ec,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ec.forEach(t),Z_=p(xs),Ar=o(xs,"P",{});var Fc=r(Ar);eT=a(Fc,"This model is also a "),zr=o(Fc,"A",{href:!0,rel:!0});var zk=r(zr);tT=a(zk,"tf.keras.Model"),zk.forEach(t),sT=a(Fc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fc.forEach(t),aT=p(xs),E(Jn.$$.fragment,xs),nT=p(xs),es=o(xs,"DIV",{class:!0});var Aa=r(es);E(xr.$$.fragment,Aa),oT=p(Aa),vn=o(Aa,"P",{});var Ri=r(vn);rT=a(Ri,"The "),ji=o(Ri,"A",{href:!0});var xk=r(ji);iT=a(xk,"TFTapasForSequenceClassification"),xk.forEach(t),lT=a(Ri," forward method, overrides the "),Od=o(Ri,"CODE",{});var Ck=r(Od);dT=a(Ck,"__call__"),Ck.forEach(t),pT=a(Ri," special method."),Ri.forEach(t),cT=p(Aa),E(Xn.$$.fragment,Aa),hT=p(Aa),Ld=o(Aa,"P",{});var Mk=r(Ld);uT=a(Mk,"Examples:"),Mk.forEach(t),mT=p(Aa),E(Cr.$$.fragment,Aa),Aa.forEach(t),xs.forEach(t),Np=p(i),wn=o(i,"H2",{class:!0});var Ac=r(wn);Zn=o(Ac,"A",{id:!0,class:!0,href:!0});var Sk=r(Zn);Qd=o(Sk,"SPAN",{});var Pk=r(Qd);E(Mr.$$.fragment,Pk),Pk.forEach(t),Sk.forEach(t),fT=p(Ac),Id=o(Ac,"SPAN",{});var Dk=r(Id);gT=a(Dk,"TFTapasForQuestionAnswering"),Dk.forEach(t),Ac.forEach(t),Op=p(i),ht=o(i,"DIV",{class:!0});var Cs=r(ht);E(Sr.$$.fragment,Cs),_T=p(Cs),bn=o(Cs,"P",{});var Gi=r(bn);TT=a(Gi,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Wd=o(Gi,"CODE",{});var Nk=r(Wd);vT=a(Nk,"logits"),Nk.forEach(t),wT=a(Gi," and optional "),Hd=o(Gi,"CODE",{});var Ok=r(Hd);bT=a(Ok,"logits_aggregation"),Ok.forEach(t),kT=a(Gi,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Gi.forEach(t),yT=p(Cs),Pr=o(Cs,"P",{});var zc=r(Pr);qT=a(zc,"This model inherits from "),$i=o(zc,"A",{href:!0});var Lk=r($i);jT=a(Lk,"TFPreTrainedModel"),Lk.forEach(t),$T=a(zc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zc.forEach(t),ET=p(Cs),Dr=o(Cs,"P",{});var xc=r(Dr);FT=a(xc,"This model is also a "),Nr=o(xc,"A",{href:!0,rel:!0});var Qk=r(Nr);AT=a(Qk,"tf.keras.Model"),Qk.forEach(t),zT=a(xc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xc.forEach(t),xT=p(Cs),E(eo.$$.fragment,Cs),CT=p(Cs),ts=o(Cs,"DIV",{class:!0});var za=r(ts);E(Or.$$.fragment,za),MT=p(za),kn=o(za,"P",{});var Vi=r(kn);ST=a(Vi,"The "),Ei=o(Vi,"A",{href:!0});var Ik=r(Ei);PT=a(Ik,"TFTapasForQuestionAnswering"),Ik.forEach(t),DT=a(Vi," forward method, overrides the "),Ud=o(Vi,"CODE",{});var Wk=r(Ud);NT=a(Wk,"__call__"),Wk.forEach(t),OT=a(Vi," special method."),Vi.forEach(t),LT=p(za),E(to.$$.fragment,za),QT=p(za),Bd=o(za,"P",{});var Hk=r(Bd);IT=a(Hk,"Examples:"),Hk.forEach(t),WT=p(za),E(Lr.$$.fragment,za),za.forEach(t),Cs.forEach(t),this.h()},h(){h(l,"name","hf:doc:metadata"),h(l,"content",JSON.stringify(jy)),h(f,"id","tapas"),h(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(f,"href","#tapas"),h(c,"class","relative group"),h(H,"id","overview"),h(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(H,"href","#overview"),h(q,"class","relative group"),h(M,"href","https://www.aclweb.org/anthology/2020.acl-main.398"),h(M,"rel","nofollow"),h(S,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),h(S,"rel","nofollow"),h(Y,"href","https://github.com/ppasupat/WikiTableQuestions"),h(Y,"rel","nofollow"),h(oe,"href","https://github.com/salesforce/WikiSQL"),h(oe,"rel","nofollow"),h(ke,"href","https://github.com/wenhuchen/Table-Fact-Checking"),h(ke,"rel","nofollow"),h(Ze,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.27/"),h(Ze,"rel","nofollow"),Vk(mt.src,pa="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/tapas_architecture.png")||h(mt,"src",pa),h(mt,"alt","drawing"),h(mt,"width","600"),h(tt,"href","https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html"),h(bt,"href","https://huggingface.co/nielsr"),h(bt,"rel","nofollow"),h(yt,"href","https://huggingface.co/kamalkraj"),h(yt,"rel","nofollow"),h(jt,"href","https://github.com/google-research/tapas"),h(jt,"rel","nofollow"),h(Gt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),h(xt,"href","https://huggingface.co/models?search=tapas"),h(xt,"rel","nofollow"),h(Nt,"href","https://github.com/google-research/tapas%3E"),h(Nt,"rel","nofollow"),h(st,"id","usage-finetuning"),h(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(st,"href","#usage-finetuning"),h(Qt,"class","relative group"),h(bs,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(ys,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(lo,"href","https://github.com/google-research/tapas/issues/91#issuecomment-735719340"),h(lo,"rel","nofollow"),h(po,"href","https://huggingface.co/models?search=tapas"),h(po,"rel","nofollow"),h(co,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),h(co,"rel","nofollow"),h(ho,"href","https://github.com/google-research/tapas/issues/50#issuecomment-705465960"),h(ho,"rel","nofollow"),h(uo,"href","https://github.com/NielsRogge/tapas_utils"),h(uo,"rel","nofollow"),h(ei,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(mo,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(mo,"rel","nofollow"),h(fo,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(fo,"rel","nofollow"),h(zn,"id","usage-inference"),h(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zn,"href","#usage-inference"),h(Xa,"class","relative group"),h(_o,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(_o,"rel","nofollow"),h(To,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(To,"rel","nofollow"),h(Cn,"id","transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),h(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Cn,"href","#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),h(Za,"class","relative group"),h(si,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(en,"class","docstring"),h(Mn,"id","transformers.TapasConfig"),h(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Mn,"href","#transformers.TapasConfig"),h(tn,"class","relative group"),h(ai,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasModel"),h(ni,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(jo,"href","https://github.com/google-research/tapas/tree/master"),h(jo,"rel","nofollow"),h(Wt,"class","docstring"),h(Sn,"id","transformers.TapasTokenizer"),h(Sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Sn,"href","#transformers.TapasTokenizer"),h(sn,"class","relative group"),h(oi,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(ri,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(li,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(Pn,"class","docstring"),h(di,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(Mo,"href","https://github.com/google-research/tapas/blob/4908213eb4df7aa988573350278b44c4dbe3f71b/tapas/experiments/prediction_utils.py#L288"),h(Mo,"rel","nofollow"),h(Ta,"class","docstring"),h(pi,"class","docstring"),h(Ge,"class","docstring"),h(Dn,"id","transformers.TapasModel"),h(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Dn,"href","#transformers.TapasModel"),h(an,"class","relative group"),h(ci,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Lo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Lo,"rel","nofollow"),h(hi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),h(Wo,"href","https://arxiv.org/abs/1706.03762"),h(Wo,"rel","nofollow"),h(ui,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasModel"),h(Vt,"class","docstring"),h(lt,"class","docstring"),h(On,"id","transformers.TapasForMaskedLM"),h(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(On,"href","#transformers.TapasForMaskedLM"),h(on,"class","relative group"),h(mi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Vo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Vo,"rel","nofollow"),h(fi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForMaskedLM"),h(Kt,"class","docstring"),h(Ts,"class","docstring"),h(Qn,"id","transformers.TapasForSequenceClassification"),h(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qn,"href","#transformers.TapasForSequenceClassification"),h(dn,"class","relative group"),h(gi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(tr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(tr,"rel","nofollow"),h(_i,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForSequenceClassification"),h(Yt,"class","docstring"),h(Ht,"class","docstring"),h(Wn,"id","transformers.TapasForQuestionAnswering"),h(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wn,"href","#transformers.TapasForQuestionAnswering"),h(cn,"class","relative group"),h(Ti,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(lr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(lr,"rel","nofollow"),h(vi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(Jt,"class","docstring"),h(Ut,"class","docstring"),h(Un,"id","transformers.TFTapasModel"),h(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Un,"href","#transformers.TFTapasModel"),h(mn,"class","relative group"),h(wi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(fr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(fr,"rel","nofollow"),h(bi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasModel"),h(Xt,"class","docstring"),h(dt,"class","docstring"),h(Gn,"id","transformers.TFTapasForMaskedLM"),h(Gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Gn,"href","#transformers.TFTapasForMaskedLM"),h(gn,"class","relative group"),h(ki,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(yr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(yr,"rel","nofollow"),h(yi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForMaskedLM"),h(Zt,"class","docstring"),h(pt,"class","docstring"),h(Yn,"id","transformers.TFTapasForSequenceClassification"),h(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yn,"href","#transformers.TFTapasForSequenceClassification"),h(Tn,"class","relative group"),h(qi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(zr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(zr,"rel","nofollow"),h(ji,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForSequenceClassification"),h(es,"class","docstring"),h(ct,"class","docstring"),h(Zn,"id","transformers.TFTapasForQuestionAnswering"),h(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Zn,"href","#transformers.TFTapasForQuestionAnswering"),h(wn,"class","relative group"),h($i,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Nr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Nr,"rel","nofollow"),h(Ei,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(ts,"class","docstring"),h(ht,"class","docstring")},m(i,m){e(document.head,l),u(i,_,m),u(i,c,m),e(c,f),e(f,v),F(w,v,null),e(c,T),e(c,y),e(y,k),u(i,D,m),u(i,q,m),e(q,H),e(H,G),F(V,G,null),e(q,B),e(q,K),e(K,re),u(i,I,m),u(i,O,m),e(O,b),e(O,M),e(M,R),e(O,C),u(i,N,m),u(i,ee,m),e(ee,te),u(i,ce,m),u(i,ne,m),e(ne,se),e(se,S),e(S,L),e(se,W),e(ne,X),e(ne,Q),e(Q,Y),e(Y,ge),e(Q,ue),e(ne,_e),e(ne,me),e(me,oe),e(oe,qe),e(me,ie),u(i,we,m),u(i,g,m),e(g,P),u(i,ve,m),u(i,ze,m),e(ze,be),u(i,le,m),u(i,xe,m),e(xe,Me),e(Me,Z),u(i,de,m),u(i,pe,m),e(pe,De),e(pe,je),e(je,Te),e(pe,Ne),e(pe,ke),e(ke,Ae),e(pe,Oe),e(pe,Ze),e(Ze,Ss),e(pe,Ps),u(i,ut,m),u(i,mt,m),u(i,ft,m),u(i,gt,m),e(gt,Ds),e(gt,tt),e(tt,Ns),e(gt,Os),u(i,Ke,m),u(i,Se,m),e(Se,Ls),e(Se,bt),e(bt,ye),e(Se,kt),e(Se,yt),e(yt,Qs),e(Se,qt),e(Se,jt),e(jt,Is),e(Se,$t),u(i,vs,m),u(i,Rt,m),e(Rt,Et),u(i,ws,m),u(i,Ye,m),e(Ye,$e),e($e,Ws),e($e,Ft),e(Ft,ae),e($e,nt),e($e,Gt),e(Gt,Hs),e($e,At),e($e,ns),e(ns,Us),e($e,zt),e($e,xt),e(xt,Bs),e($e,Ct),e($e,os),e(os,Rs),e($e,Mt),e($e,rs),e(rs,Gs),e($e,St),e(Ye,Vs),e(Ye,Le),e(Le,Pt),e(Le,is),e(is,Ks),e(Le,Dt),e(Le,ls),e(ls,Ys),e(Le,ds),e(Le,Ue),e(Ue,ps),e(Le,Ee),e(Le,cs),e(cs,ot),e(Le,Js),e(Le,Nt),e(Nt,Ot),e(Le,Xs),e(Ye,Zs),e(Ye,Be),e(Be,ea),e(Be,hs),e(hs,us),e(Be,et),e(Be,Lt),e(Lt,j),e(Be,J),e(Ye,xa),e(Ye,ta),e(ta,Ca),u(i,ca,m),u(i,Qt,m),e(Qt,st),e(st,sa),F(rt,sa,null),e(Qt,Ma),e(Qt,aa),e(aa,Sa),u(i,ha,m),u(i,Ie,m),e(Ie,ms),e(Ie,bs),e(bs,Re),e(Ie,Pa),u(i,ua,m),u(i,ks,m),e(ks,na),e(na,fs),u(i,ma,m),u(i,fe,m),e(fe,Da),e(fe,ys),e(ys,Na),e(fe,Oa),u(i,fa,m),u(i,_t,m),e(_t,oa),e(oa,gs),e(_t,La),e(_t,Fe),e(Fe,Qa),e(Fe,ra),e(ra,Ia),e(Fe,Wa),e(_t,Ha),e(_t,he),e(he,Ua),e(he,ia),e(ia,Ba),e(he,Ra),u(i,ga,m),u(i,qs,m),e(qs,Ga),u(i,_a,m),u(i,Ce,m),e(Ce,la),e(la,It),e(It,da),e(da,Ki),e(Ki,Mc),e(It,Sc),e(It,Yi),e(Yi,Ji),e(Ji,Pc),e(It,Dc),e(It,Xi),e(Xi,Zi),e(Zi,Nc),e(Ce,Oc),e(Ce,Va),e(Va,Ka),e(Ka,el),e(el,Lc),e(Ka,Qc),e(Ka,tl),e(tl,Ic),e(Ka,Wc),e(Ka,sl),e(sl,Hc),e(Va,Uc),e(Va,Ya),e(Ya,al),e(al,Bc),e(Ya,Rc),e(Ya,nl),e(nl,Gc),e(Ya,Vc),e(Ya,ol),e(ol,Kc),e(Va,Yc),e(Va,Ja),e(Ja,rl),e(rl,Jc),e(Ja,Xc),e(Ja,il),e(il,Zc),e(Ja,eh),e(Ja,ll),e(ll,th),u(i,sp,m),F(qn,i,m),u(i,ap,m),u(i,jn,m),e(jn,sh),e(jn,lo),e(lo,ah),e(jn,nh),u(i,np,m),u(i,$n,m),e($n,oh),e($n,po),e(po,rh),e($n,ih),u(i,op,m),u(i,Hr,m),e(Hr,dl),e(dl,lh),u(i,rp,m),u(i,En,m),e(En,dh),e(En,co),e(co,ph),e(En,ch),u(i,ip,m),u(i,We,m),e(We,Ur),e(Ur,pl),e(pl,hh),e(Ur,uh),e(We,mh),e(We,Br),e(Br,cl),e(cl,fh),e(Br,gh),e(We,_h),e(We,Rr),e(Rr,hl),e(hl,Th),e(Rr,vh),e(We,wh),e(We,Gr),e(Gr,ul),e(ul,bh),e(Gr,kh),e(We,yh),e(We,Vr),e(Vr,ml),e(ml,qh),e(Vr,jh),e(We,$h),e(We,Kr),e(Kr,fl),e(fl,Eh),e(Kr,Fh),e(We,Ah),e(We,Yr),e(Yr,gl),e(gl,zh),e(Yr,xh),e(We,Ch),e(We,Jr),e(Jr,_l),e(_l,Mh),e(Jr,Sh),e(We,Ph),e(We,Xr),e(Xr,Tl),e(Tl,Dh),e(Xr,Nh),u(i,lp,m),u(i,Tt,m),e(Tt,Oh),e(Tt,ho),e(ho,Lh),e(Tt,Qh),e(Tt,uo),e(uo,Ih),e(Tt,Wh),e(Tt,vl),e(vl,Hh),e(Tt,Uh),e(Tt,wl),e(wl,Bh),e(Tt,Rh),e(Tt,bl),e(bl,Gh),e(Tt,Vh),u(i,dp,m),u(i,Zr,m),e(Zr,kl),e(kl,Kh),u(i,pp,m),F(Fn,i,m),u(i,cp,m),u(i,Pe,m),e(Pe,Yh),e(Pe,yl),e(yl,Jh),e(Pe,Xh),e(Pe,ql),e(ql,Zh),e(Pe,eu),e(Pe,jl),e(jl,tu),e(Pe,su),e(Pe,$l),e($l,au),e(Pe,nu),e(Pe,El),e(El,ou),e(Pe,ru),e(Pe,Fl),e(Fl,iu),e(Pe,lu),e(Pe,ei),e(ei,du),e(Pe,pu),e(Pe,mo),e(mo,cu),e(Pe,hu),e(Pe,fo),e(fo,uu),e(Pe,mu),u(i,hp,m),u(i,ti,m),e(ti,fu),u(i,up,m),F(An,i,m),u(i,mp,m),u(i,Xa,m),e(Xa,zn),e(zn,Al),F(go,Al,null),e(Xa,gu),e(Xa,zl),e(zl,_u),u(i,fp,m),F(xn,i,m),u(i,gp,m),u(i,vt,m),e(vt,Tu),e(vt,xl),e(xl,vu),e(vt,wu),e(vt,Cl),e(Cl,bu),e(vt,ku),e(vt,Ml),e(Ml,yu),e(vt,qu),e(vt,_o),e(_o,ju),e(vt,$u),e(vt,To),e(To,Eu),e(vt,Fu),u(i,_p,m),u(i,Za,m),e(Za,Cn),e(Cn,Sl),F(vo,Sl,null),e(Za,Au),e(Za,Pl),e(Pl,zu),u(i,Tp,m),u(i,en,m),F(wo,en,null),e(en,xu),e(en,bo),e(bo,Cu),e(bo,si),e(si,Mu),e(bo,Su),u(i,vp,m),u(i,tn,m),e(tn,Mn),e(Mn,Dl),F(ko,Dl,null),e(tn,Pu),e(tn,Nl),e(Nl,Du),u(i,wp,m),u(i,Wt,m),F(yo,Wt,null),e(Wt,Nu),e(Wt,_s),e(_s,Ou),e(_s,ai),e(ai,Lu),e(_s,Qu),e(_s,Ol),e(Ol,Iu),e(_s,Wu),e(_s,Ll),e(Ll,Hu),e(_s,Uu),e(_s,ni),e(ni,Bu),e(_s,Ru),e(Wt,Gu),e(Wt,qo),e(qo,Vu),e(qo,jo),e(jo,Ku),e(qo,Yu),e(Wt,Ju),e(Wt,Ql),e(Ql,Xu),e(Wt,Zu),F($o,Wt,null),u(i,bp,m),u(i,sn,m),e(sn,Sn),e(Sn,Il),F(Eo,Il,null),e(sn,em),e(sn,Wl),e(Wl,tm),u(i,kp,m),u(i,Ge,m),F(Fo,Ge,null),e(Ge,sm),e(Ge,Hl),e(Hl,am),e(Ge,nm),e(Ge,Qe),e(Qe,om),e(Qe,oi),e(oi,rm),e(Qe,im),e(Qe,ri),e(ri,lm),e(Qe,dm),e(Qe,Ul),e(Ul,pm),e(Qe,cm),e(Qe,Bl),e(Bl,hm),e(Qe,um),e(Qe,Rl),e(Rl,mm),e(Qe,fm),e(Qe,Gl),e(Gl,gm),e(Qe,_m),e(Qe,Vl),e(Vl,Tm),e(Qe,vm),e(Qe,Kl),e(Kl,wm),e(Qe,bm),e(Qe,Yl),e(Yl,km),e(Qe,ym),e(Ge,qm),e(Ge,it),e(it,Jl),e(Jl,jm),e(it,$m),e(it,Xl),e(Xl,Em),e(it,Fm),e(it,Zl),e(Zl,Am),e(it,zm),e(it,ed),e(ed,xm),e(it,Cm),e(it,td),e(td,Mm),e(it,Sm),e(it,sd),e(sd,Pm),e(it,Dm),e(it,ad),e(ad,Nm),e(Ge,Om),e(Ge,ii),e(ii,li),e(li,Lm),e(ii,Qm),e(Ge,Im),e(Ge,Pn),F(Ao,Pn,null),e(Pn,Wm),e(Pn,nd),e(nd,Hm),e(Ge,Um),e(Ge,Ta),F(zo,Ta,null),e(Ta,Bm),e(Ta,xo),e(xo,Rm),e(xo,di),e(di,Gm),e(xo,Vm),e(Ta,Km),e(Ta,Co),e(Co,Ym),e(Co,Mo),e(Mo,Jm),e(Co,Xm),e(Ge,Zm),e(Ge,pi),F(So,pi,null),u(i,yp,m),u(i,an,m),e(an,Dn),e(Dn,od),F(Po,od,null),e(an,ef),e(an,rd),e(rd,tf),u(i,qp,m),u(i,lt,m),F(Do,lt,null),e(lt,sf),e(lt,No),e(No,af),e(No,ci),e(ci,nf),e(No,of),e(lt,rf),e(lt,Oo),e(Oo,lf),e(Oo,Lo),e(Lo,df),e(Oo,pf),e(lt,cf),e(lt,Qo),e(Qo,hf),e(Qo,hi),e(hi,uf),e(Qo,mf),e(lt,ff),e(lt,Io),e(Io,gf),e(Io,Wo),e(Wo,_f),e(Io,Tf),e(lt,vf),e(lt,Vt),F(Ho,Vt,null),e(Vt,wf),e(Vt,nn),e(nn,bf),e(nn,ui),e(ui,kf),e(nn,yf),e(nn,id),e(id,qf),e(nn,jf),e(Vt,$f),F(Nn,Vt,null),e(Vt,Ef),e(Vt,ld),e(ld,Ff),e(Vt,Af),F(Uo,Vt,null),u(i,jp,m),u(i,on,m),e(on,On),e(On,dd),F(Bo,dd,null),e(on,zf),e(on,pd),e(pd,xf),u(i,$p,m),u(i,Ts,m),F(Ro,Ts,null),e(Ts,Cf),e(Ts,rn),e(rn,Mf),e(rn,cd),e(cd,Sf),e(rn,Pf),e(rn,mi),e(mi,Df),e(rn,Nf),e(Ts,Of),e(Ts,Go),e(Go,Lf),e(Go,Vo),e(Vo,Qf),e(Go,If),e(Ts,Wf),e(Ts,Kt),F(Ko,Kt,null),e(Kt,Hf),e(Kt,ln),e(ln,Uf),e(ln,fi),e(fi,Bf),e(ln,Rf),e(ln,hd),e(hd,Gf),e(ln,Vf),e(Kt,Kf),F(Ln,Kt,null),e(Kt,Yf),e(Kt,ud),e(ud,Jf),e(Kt,Xf),F(Yo,Kt,null),u(i,Ep,m),u(i,dn,m),e(dn,Qn),e(Qn,md),F(Jo,md,null),e(dn,Zf),e(dn,fd),e(fd,eg),u(i,Fp,m),u(i,Ht,m),F(Xo,Ht,null),e(Ht,tg),e(Ht,gd),e(gd,sg),e(Ht,ag),e(Ht,Zo),e(Zo,ng),e(Zo,gi),e(gi,og),e(Zo,rg),e(Ht,ig),e(Ht,er),e(er,lg),e(er,tr),e(tr,dg),e(er,pg),e(Ht,cg),e(Ht,Yt),F(sr,Yt,null),e(Yt,hg),e(Yt,pn),e(pn,ug),e(pn,_i),e(_i,mg),e(pn,fg),e(pn,_d),e(_d,gg),e(pn,_g),e(Yt,Tg),F(In,Yt,null),e(Yt,vg),e(Yt,Td),e(Td,wg),e(Yt,bg),F(ar,Yt,null),u(i,Ap,m),u(i,cn,m),e(cn,Wn),e(Wn,vd),F(nr,vd,null),e(cn,kg),e(cn,wd),e(wd,yg),u(i,zp,m),u(i,Ut,m),F(or,Ut,null),e(Ut,qg),e(Ut,hn),e(hn,jg),e(hn,bd),e(bd,$g),e(hn,Eg),e(hn,kd),e(kd,Fg),e(hn,Ag),e(Ut,zg),e(Ut,rr),e(rr,xg),e(rr,Ti),e(Ti,Cg),e(rr,Mg),e(Ut,Sg),e(Ut,ir),e(ir,Pg),e(ir,lr),e(lr,Dg),e(ir,Ng),e(Ut,Og),e(Ut,Jt),F(dr,Jt,null),e(Jt,Lg),e(Jt,un),e(un,Qg),e(un,vi),e(vi,Ig),e(un,Wg),e(un,yd),e(yd,Hg),e(un,Ug),e(Jt,Bg),F(Hn,Jt,null),e(Jt,Rg),e(Jt,qd),e(qd,Gg),e(Jt,Vg),F(pr,Jt,null),u(i,xp,m),u(i,mn,m),e(mn,Un),e(Un,jd),F(cr,jd,null),e(mn,Kg),e(mn,$d),e($d,Yg),u(i,Cp,m),u(i,dt,m),F(hr,dt,null),e(dt,Jg),e(dt,Ed),e(Ed,Xg),e(dt,Zg),e(dt,ur),e(ur,e_),e(ur,wi),e(wi,t_),e(ur,s_),e(dt,a_),e(dt,mr),e(mr,n_),e(mr,fr),e(fr,o_),e(mr,r_),e(dt,i_),F(Bn,dt,null),e(dt,l_),e(dt,Xt),F(gr,Xt,null),e(Xt,d_),e(Xt,fn),e(fn,p_),e(fn,bi),e(bi,c_),e(fn,h_),e(fn,Fd),e(Fd,u_),e(fn,m_),e(Xt,f_),F(Rn,Xt,null),e(Xt,g_),e(Xt,Ad),e(Ad,__),e(Xt,T_),F(_r,Xt,null),u(i,Mp,m),u(i,gn,m),e(gn,Gn),e(Gn,zd),F(Tr,zd,null),e(gn,v_),e(gn,xd),e(xd,w_),u(i,Sp,m),u(i,pt,m),F(vr,pt,null),e(pt,b_),e(pt,wr),e(wr,k_),e(wr,Cd),e(Cd,y_),e(wr,q_),e(pt,j_),e(pt,br),e(br,$_),e(br,ki),e(ki,E_),e(br,F_),e(pt,A_),e(pt,kr),e(kr,z_),e(kr,yr),e(yr,x_),e(kr,C_),e(pt,M_),F(Vn,pt,null),e(pt,S_),e(pt,Zt),F(qr,Zt,null),e(Zt,P_),e(Zt,_n),e(_n,D_),e(_n,yi),e(yi,N_),e(_n,O_),e(_n,Md),e(Md,L_),e(_n,Q_),e(Zt,I_),F(Kn,Zt,null),e(Zt,W_),e(Zt,Sd),e(Sd,H_),e(Zt,U_),F(jr,Zt,null),u(i,Pp,m),u(i,Tn,m),e(Tn,Yn),e(Yn,Pd),F($r,Pd,null),e(Tn,B_),e(Tn,Dd),e(Dd,R_),u(i,Dp,m),u(i,ct,m),F(Er,ct,null),e(ct,G_),e(ct,Nd),e(Nd,V_),e(ct,K_),e(ct,Fr),e(Fr,Y_),e(Fr,qi),e(qi,J_),e(Fr,X_),e(ct,Z_),e(ct,Ar),e(Ar,eT),e(Ar,zr),e(zr,tT),e(Ar,sT),e(ct,aT),F(Jn,ct,null),e(ct,nT),e(ct,es),F(xr,es,null),e(es,oT),e(es,vn),e(vn,rT),e(vn,ji),e(ji,iT),e(vn,lT),e(vn,Od),e(Od,dT),e(vn,pT),e(es,cT),F(Xn,es,null),e(es,hT),e(es,Ld),e(Ld,uT),e(es,mT),F(Cr,es,null),u(i,Np,m),u(i,wn,m),e(wn,Zn),e(Zn,Qd),F(Mr,Qd,null),e(wn,fT),e(wn,Id),e(Id,gT),u(i,Op,m),u(i,ht,m),F(Sr,ht,null),e(ht,_T),e(ht,bn),e(bn,TT),e(bn,Wd),e(Wd,vT),e(bn,wT),e(bn,Hd),e(Hd,bT),e(bn,kT),e(ht,yT),e(ht,Pr),e(Pr,qT),e(Pr,$i),e($i,jT),e(Pr,$T),e(ht,ET),e(ht,Dr),e(Dr,FT),e(Dr,Nr),e(Nr,AT),e(Dr,zT),e(ht,xT),F(eo,ht,null),e(ht,CT),e(ht,ts),F(Or,ts,null),e(ts,MT),e(ts,kn),e(kn,ST),e(kn,Ei),e(Ei,PT),e(kn,DT),e(kn,Ud),e(Ud,NT),e(kn,OT),e(ts,LT),F(to,ts,null),e(ts,QT),e(ts,Bd),e(Bd,IT),e(ts,WT),F(Lr,ts,null),Lp=!0},p(i,[m]){const Qr={};m&2&&(Qr.$$scope={dirty:m,ctx:i}),qn.$set(Qr);const Rd={};m&2&&(Rd.$$scope={dirty:m,ctx:i}),Fn.$set(Rd);const Gd={};m&2&&(Gd.$$scope={dirty:m,ctx:i}),An.$set(Gd);const Vd={};m&2&&(Vd.$$scope={dirty:m,ctx:i}),xn.$set(Vd);const Ir={};m&2&&(Ir.$$scope={dirty:m,ctx:i}),Nn.$set(Ir);const Kd={};m&2&&(Kd.$$scope={dirty:m,ctx:i}),Ln.$set(Kd);const Yd={};m&2&&(Yd.$$scope={dirty:m,ctx:i}),In.$set(Yd);const Jd={};m&2&&(Jd.$$scope={dirty:m,ctx:i}),Hn.$set(Jd);const Wr={};m&2&&(Wr.$$scope={dirty:m,ctx:i}),Bn.$set(Wr);const Xd={};m&2&&(Xd.$$scope={dirty:m,ctx:i}),Rn.$set(Xd);const Zd={};m&2&&(Zd.$$scope={dirty:m,ctx:i}),Vn.$set(Zd);const yn={};m&2&&(yn.$$scope={dirty:m,ctx:i}),Kn.$set(yn);const Fi={};m&2&&(Fi.$$scope={dirty:m,ctx:i}),Jn.$set(Fi);const ep={};m&2&&(ep.$$scope={dirty:m,ctx:i}),Xn.$set(ep);const Ai={};m&2&&(Ai.$$scope={dirty:m,ctx:i}),eo.$set(Ai);const tp={};m&2&&(tp.$$scope={dirty:m,ctx:i}),to.$set(tp)},i(i){Lp||(A(w.$$.fragment,i),A(V.$$.fragment,i),A(rt.$$.fragment,i),A(qn.$$.fragment,i),A(Fn.$$.fragment,i),A(An.$$.fragment,i),A(go.$$.fragment,i),A(xn.$$.fragment,i),A(vo.$$.fragment,i),A(wo.$$.fragment,i),A(ko.$$.fragment,i),A(yo.$$.fragment,i),A($o.$$.fragment,i),A(Eo.$$.fragment,i),A(Fo.$$.fragment,i),A(Ao.$$.fragment,i),A(zo.$$.fragment,i),A(So.$$.fragment,i),A(Po.$$.fragment,i),A(Do.$$.fragment,i),A(Ho.$$.fragment,i),A(Nn.$$.fragment,i),A(Uo.$$.fragment,i),A(Bo.$$.fragment,i),A(Ro.$$.fragment,i),A(Ko.$$.fragment,i),A(Ln.$$.fragment,i),A(Yo.$$.fragment,i),A(Jo.$$.fragment,i),A(Xo.$$.fragment,i),A(sr.$$.fragment,i),A(In.$$.fragment,i),A(ar.$$.fragment,i),A(nr.$$.fragment,i),A(or.$$.fragment,i),A(dr.$$.fragment,i),A(Hn.$$.fragment,i),A(pr.$$.fragment,i),A(cr.$$.fragment,i),A(hr.$$.fragment,i),A(Bn.$$.fragment,i),A(gr.$$.fragment,i),A(Rn.$$.fragment,i),A(_r.$$.fragment,i),A(Tr.$$.fragment,i),A(vr.$$.fragment,i),A(Vn.$$.fragment,i),A(qr.$$.fragment,i),A(Kn.$$.fragment,i),A(jr.$$.fragment,i),A($r.$$.fragment,i),A(Er.$$.fragment,i),A(Jn.$$.fragment,i),A(xr.$$.fragment,i),A(Xn.$$.fragment,i),A(Cr.$$.fragment,i),A(Mr.$$.fragment,i),A(Sr.$$.fragment,i),A(eo.$$.fragment,i),A(Or.$$.fragment,i),A(to.$$.fragment,i),A(Lr.$$.fragment,i),Lp=!0)},o(i){z(w.$$.fragment,i),z(V.$$.fragment,i),z(rt.$$.fragment,i),z(qn.$$.fragment,i),z(Fn.$$.fragment,i),z(An.$$.fragment,i),z(go.$$.fragment,i),z(xn.$$.fragment,i),z(vo.$$.fragment,i),z(wo.$$.fragment,i),z(ko.$$.fragment,i),z(yo.$$.fragment,i),z($o.$$.fragment,i),z(Eo.$$.fragment,i),z(Fo.$$.fragment,i),z(Ao.$$.fragment,i),z(zo.$$.fragment,i),z(So.$$.fragment,i),z(Po.$$.fragment,i),z(Do.$$.fragment,i),z(Ho.$$.fragment,i),z(Nn.$$.fragment,i),z(Uo.$$.fragment,i),z(Bo.$$.fragment,i),z(Ro.$$.fragment,i),z(Ko.$$.fragment,i),z(Ln.$$.fragment,i),z(Yo.$$.fragment,i),z(Jo.$$.fragment,i),z(Xo.$$.fragment,i),z(sr.$$.fragment,i),z(In.$$.fragment,i),z(ar.$$.fragment,i),z(nr.$$.fragment,i),z(or.$$.fragment,i),z(dr.$$.fragment,i),z(Hn.$$.fragment,i),z(pr.$$.fragment,i),z(cr.$$.fragment,i),z(hr.$$.fragment,i),z(Bn.$$.fragment,i),z(gr.$$.fragment,i),z(Rn.$$.fragment,i),z(_r.$$.fragment,i),z(Tr.$$.fragment,i),z(vr.$$.fragment,i),z(Vn.$$.fragment,i),z(qr.$$.fragment,i),z(Kn.$$.fragment,i),z(jr.$$.fragment,i),z($r.$$.fragment,i),z(Er.$$.fragment,i),z(Jn.$$.fragment,i),z(xr.$$.fragment,i),z(Xn.$$.fragment,i),z(Cr.$$.fragment,i),z(Mr.$$.fragment,i),z(Sr.$$.fragment,i),z(eo.$$.fragment,i),z(Or.$$.fragment,i),z(to.$$.fragment,i),z(Lr.$$.fragment,i),Lp=!1},d(i){t(l),i&&t(_),i&&t(c),x(w),i&&t(D),i&&t(q),x(V),i&&t(I),i&&t(O),i&&t(N),i&&t(ee),i&&t(ce),i&&t(ne),i&&t(we),i&&t(g),i&&t(ve),i&&t(ze),i&&t(le),i&&t(xe),i&&t(de),i&&t(pe),i&&t(ut),i&&t(mt),i&&t(ft),i&&t(gt),i&&t(Ke),i&&t(Se),i&&t(vs),i&&t(Rt),i&&t(ws),i&&t(Ye),i&&t(ca),i&&t(Qt),x(rt),i&&t(ha),i&&t(Ie),i&&t(ua),i&&t(ks),i&&t(ma),i&&t(fe),i&&t(fa),i&&t(_t),i&&t(ga),i&&t(qs),i&&t(_a),i&&t(Ce),i&&t(sp),x(qn,i),i&&t(ap),i&&t(jn),i&&t(np),i&&t($n),i&&t(op),i&&t(Hr),i&&t(rp),i&&t(En),i&&t(ip),i&&t(We),i&&t(lp),i&&t(Tt),i&&t(dp),i&&t(Zr),i&&t(pp),x(Fn,i),i&&t(cp),i&&t(Pe),i&&t(hp),i&&t(ti),i&&t(up),x(An,i),i&&t(mp),i&&t(Xa),x(go),i&&t(fp),x(xn,i),i&&t(gp),i&&t(vt),i&&t(_p),i&&t(Za),x(vo),i&&t(Tp),i&&t(en),x(wo),i&&t(vp),i&&t(tn),x(ko),i&&t(wp),i&&t(Wt),x(yo),x($o),i&&t(bp),i&&t(sn),x(Eo),i&&t(kp),i&&t(Ge),x(Fo),x(Ao),x(zo),x(So),i&&t(yp),i&&t(an),x(Po),i&&t(qp),i&&t(lt),x(Do),x(Ho),x(Nn),x(Uo),i&&t(jp),i&&t(on),x(Bo),i&&t($p),i&&t(Ts),x(Ro),x(Ko),x(Ln),x(Yo),i&&t(Ep),i&&t(dn),x(Jo),i&&t(Fp),i&&t(Ht),x(Xo),x(sr),x(In),x(ar),i&&t(Ap),i&&t(cn),x(nr),i&&t(zp),i&&t(Ut),x(or),x(dr),x(Hn),x(pr),i&&t(xp),i&&t(mn),x(cr),i&&t(Cp),i&&t(dt),x(hr),x(Bn),x(gr),x(Rn),x(_r),i&&t(Mp),i&&t(gn),x(Tr),i&&t(Sp),i&&t(pt),x(vr),x(Vn),x(qr),x(Kn),x(jr),i&&t(Pp),i&&t(Tn),x($r),i&&t(Dp),i&&t(ct),x(Er),x(Jn),x(xr),x(Xn),x(Cr),i&&t(Np),i&&t(wn),x(Mr),i&&t(Op),i&&t(ht),x(Sr),x(eo),x(Or),x(to),x(Lr)}}}const jy={local:"tapas",sections:[{local:"overview",title:"Overview"},{local:"usage-finetuning",title:"Usage: fine-tuning"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",title:"TAPAS specific outputs"},{local:"transformers.TapasConfig",title:"TapasConfig"},{local:"transformers.TapasTokenizer",title:"TapasTokenizer"},{local:"transformers.TapasModel",title:"TapasModel"},{local:"transformers.TapasForMaskedLM",title:"TapasForMaskedLM"},{local:"transformers.TapasForSequenceClassification",title:"TapasForSequenceClassification"},{local:"transformers.TapasForQuestionAnswering",title:"TapasForQuestionAnswering"},{local:"transformers.TFTapasModel",title:"TFTapasModel"},{local:"transformers.TFTapasForMaskedLM",title:"TFTapasForMaskedLM"},{local:"transformers.TFTapasForSequenceClassification",title:"TFTapasForSequenceClassification"},{local:"transformers.TFTapasForQuestionAnswering",title:"TFTapasForQuestionAnswering"}],title:"TAPAS"};function $y(U){return Kk(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class My extends Uk{constructor(l){super();Bk(this,l,$y,qy,Rk,{})}}export{My as default,jy as metadata};
