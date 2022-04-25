import{S as Vy,i as Ky,s as Yy,e as n,k as d,w as $,t as s,M as Jy,c as o,d as t,m as p,a as r,x as E,h as a,b as h,N as Xy,F as e,g as m,y as F,q as A,o as z,B as x,v as Zy,L as ro}from"../../chunks/vendor-6b77c823.js";import{T as Ms}from"../../chunks/Tip-39098574.js";import{D as He}from"../../chunks/Docstring-1088f2fb.js";import{C as Ve}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Rt}from"../../chunks/IconCopyLink-7a11ce68.js";import{F as Pc,M as io}from"../../chunks/Markdown-9acf6d91.js";function ek(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O;return T=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

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
`),c=o(M,"A",{href:!0,rel:!0});var G=r(c);f=a(G,"torch-scatter"),G.forEach(t),b=a(M," dependency:"),M.forEach(t),v=p(w),E(T.$$.fragment,w),k=p(w),y=o(w,"P",{});var C=r(y);D=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=o(C,"A",{href:!0});var N=r(q);H=a(N,"TapasConfig"),N.forEach(t),B=a(C,", and then create a "),V=o(C,"A",{href:!0});var ee=r(V);R=a(ee,"TapasForQuestionAnswering"),ee.forEach(t),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(t),re=p(w),E(I.$$.fragment,w),this.h()},h(){h(c,"href","https://github.com/rusty1s/pytorch_scatter"),h(c,"rel","nofollow"),h(q,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),h(V,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(w,M){m(w,l,M),e(l,_),e(l,c),e(c,f),e(l,b),m(w,v,M),F(T,w,M),m(w,k,M),m(w,y,M),e(y,D),e(y,q),e(q,H),e(y,B),e(y,V),e(V,R),e(y,K),m(w,re,M),F(I,w,M),O=!0},p:ro,i(w){O||(A(T.$$.fragment,w),A(I.$$.fragment,w),O=!0)},o(w){z(T.$$.fragment,w),z(I.$$.fragment,w),O=!1},d(w){w&&t(l),w&&t(v),x(T,w),w&&t(k),w&&t(y),w&&t(re),x(I,w)}}}function tk(U){let l,_;return l=new io({props:{$$slots:{default:[ek]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function sk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O;return T=new Ve({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=n("p"),_=s("Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),c=n("a"),f=s("tensorflow_probability"),b=s(" dependency:"),v=d(),$(T.$$.fragment),k=d(),y=n("p"),D=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=n("a"),H=s("TapasConfig"),B=s(", and then create a "),V=n("a"),R=s("TFTapasForQuestionAnswering"),K=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),re=d(),$(I.$$.fragment),this.h()},l(w){l=o(w,"P",{});var M=r(l);_=a(M,"Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),c=o(M,"A",{href:!0,rel:!0});var G=r(c);f=a(G,"tensorflow_probability"),G.forEach(t),b=a(M," dependency:"),M.forEach(t),v=p(w),E(T.$$.fragment,w),k=p(w),y=o(w,"P",{});var C=r(y);D=a(C,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),q=o(C,"A",{href:!0});var N=r(q);H=a(N,"TapasConfig"),N.forEach(t),B=a(C,", and then create a "),V=o(C,"A",{href:!0});var ee=r(V);R=a(ee,"TFTapasForQuestionAnswering"),ee.forEach(t),K=a(C," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),C.forEach(t),re=p(w),E(I.$$.fragment,w),this.h()},h(){h(c,"href","https://github.com/tensorflow/probability"),h(c,"rel","nofollow"),h(q,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),h(V,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(w,M){m(w,l,M),e(l,_),e(l,c),e(c,f),e(l,b),m(w,v,M),F(T,w,M),m(w,k,M),m(w,y,M),e(y,D),e(y,q),e(q,H),e(y,B),e(y,V),e(V,R),e(y,K),m(w,re,M),F(I,w,M),O=!0},p:ro,i(w){O||(A(T.$$.fragment,w),A(I.$$.fragment,w),O=!0)},o(w){z(T.$$.fragment,w),z(I.$$.fragment,w),O=!1},d(w){w&&t(l),w&&t(v),x(T,w),w&&t(k),w&&t(y),w&&t(re),x(I,w)}}}function ak(U){let l,_;return l=new io({props:{$$slots:{default:[sk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function nk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se,P,L,W,X,Q,Y,ge,me,_e,ue,oe,qe,ie,ve,g,S,be,ze,we,le,xe,Me,Z,de,pe,De,je,Te,Ne,ye,Ae,Oe,Ze,Ps,Ss,ut,ft,pa,gt,_t,Ds,tt,Ns,Os,Ke,Pe,Ls,yt,ke,kt,qt,Qs,jt,$t,Is,Et,Ts,Gt,Ft,bs,Ye,$e,Ws,At,ae,nt,Bt,Hs,zt,ns,Us,xt,Ct,Rs,Mt,os,Gs,Pt,rs,Bs,St,Vs,Le,Dt,is,Ks,Nt,ls,Ys,ds,Ue,ps,Ee,cs,ot,Js,Ot,Lt,Xs,Zs,Re,ea,hs,ms,et,Qt;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
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
inputs to be fine-tuned:`),I=d(),O=n("table"),w=n("thead"),M=n("tr"),G=n("th"),C=n("strong"),N=s("Task"),ee=d(),te=n("th"),ce=n("strong"),ne=s("Required inputs"),se=d(),P=n("tbody"),L=n("tr"),W=n("td"),X=s("Conversational"),Q=d(),Y=n("td"),ge=n("code"),me=s("input_ids"),_e=s(", "),ue=n("code"),oe=s("attention_mask"),qe=s(", "),ie=n("code"),ve=s("token_type_ids"),g=s(", "),S=n("code"),be=s("labels"),ze=d(),we=n("tr"),le=n("td"),xe=s("Weak supervision for aggregation"),Me=d(),Z=n("td"),de=n("code"),pe=s("input_ids"),De=s(", "),je=n("code"),Te=s("attention_mask"),Ne=s(", "),ye=n("code"),Ae=s("token_type_ids"),Oe=s(", "),Ze=n("code"),Ps=s("labels"),Ss=s(", "),ut=n("code"),ft=s("numeric_values"),pa=s(", "),gt=n("code"),_t=s("numeric_values_scale"),Ds=s(", "),tt=n("code"),Ns=s("float_answer"),Os=d(),Ke=n("tr"),Pe=n("td"),Ls=s("Strong supervision for aggregation"),yt=d(),ke=n("td"),kt=n("code"),qt=s("input ids"),Qs=s(", "),jt=n("code"),$t=s("attention mask"),Is=s(", "),Et=n("code"),Ts=s("token type ids"),Gt=s(", "),Ft=n("code"),bs=s("labels"),Ye=s(", "),$e=n("code"),Ws=s("aggregation_labels"),At=d(),ae=n("p"),nt=n("a"),Bt=s("TapasTokenizer"),Hs=s(" creates the "),zt=n("code"),ns=s("labels"),Us=s(", "),xt=n("code"),Ct=s("numeric_values"),Rs=s(" and "),Mt=n("code"),os=s("numeric_values_scale"),Gs=s(" based on the "),Pt=n("code"),rs=s("answer_coordinates"),Bs=s(" and "),St=n("code"),Vs=s("answer_text"),Le=s(" columns of the TSV file. The "),Dt=n("code"),is=s("float_answer"),Ks=s(" and "),Nt=n("code"),ls=s("aggregation_labels"),Ys=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ds=d(),$(Ue.$$.fragment),ps=d(),Ee=n("p"),cs=s("Note that "),ot=n("a"),Js=s("TapasTokenizer"),Ot=s(" expects the data of the table to be "),Lt=n("strong"),Xs=s("text-only"),Zs=s(". You can use "),Re=n("code"),ea=s(".astype(str)"),hs=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),ms=d(),$(et.$$.fragment),this.h()},l(j){l=o(j,"P",{});var J=r(l);_=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=o(J,"A",{href:!0});var Aa=r(c);f=a(Aa,"TapasTokenizer"),Aa.forEach(t),b=a(J," to convert table-question pairs into "),v=o(J,"CODE",{});var ta=r(v);T=a(ta,"input_ids"),ta.forEach(t),k=a(J,", "),y=o(J,"CODE",{});var za=r(y);D=a(za,"attention_mask"),za.forEach(t),q=a(J,", "),H=o(J,"CODE",{});var ca=r(H);B=a(ca,"token_type_ids"),ca.forEach(t),V=a(J," and so on. Again, based on which of the three cases you picked above, "),R=o(J,"A",{href:!0});var It=r(R);K=a(It,"TapasForQuestionAnswering"),It.forEach(t),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(t),I=p(j),O=o(j,"TABLE",{});var st=r(O);w=o(st,"THEAD",{});var sa=r(w);M=o(sa,"TR",{});var rt=r(M);G=o(rt,"TH",{});var xa=r(G);C=o(xa,"STRONG",{});var aa=r(C);N=a(aa,"Task"),aa.forEach(t),xa.forEach(t),ee=p(rt),te=o(rt,"TH",{});var Ca=r(te);ce=o(Ca,"STRONG",{});var ha=r(ce);ne=a(ha,"Required inputs"),ha.forEach(t),Ca.forEach(t),rt.forEach(t),sa.forEach(t),se=p(st),P=o(st,"TBODY",{});var Ie=r(P);L=o(Ie,"TR",{});var us=r(L);W=o(us,"TD",{});var vs=r(W);X=a(vs,"Conversational"),vs.forEach(t),Q=p(us),Y=o(us,"TD",{});var Ge=r(Y);ge=o(Ge,"CODE",{});var Ma=r(ge);me=a(Ma,"input_ids"),Ma.forEach(t),_e=a(Ge,", "),ue=o(Ge,"CODE",{});var ma=r(ue);oe=a(ma,"attention_mask"),ma.forEach(t),qe=a(Ge,", "),ie=o(Ge,"CODE",{});var ws=r(ie);ve=a(ws,"token_type_ids"),ws.forEach(t),g=a(Ge,", "),S=o(Ge,"CODE",{});var na=r(S);be=a(na,"labels"),na.forEach(t),Ge.forEach(t),us.forEach(t),ze=p(Ie),we=o(Ie,"TR",{});var fs=r(we);le=o(fs,"TD",{});var ua=r(le);xe=a(ua,"Weak supervision for aggregation"),ua.forEach(t),Me=p(fs),Z=o(fs,"TD",{});var fe=r(Z);de=o(fe,"CODE",{});var Pa=r(de);pe=a(Pa,"input_ids"),Pa.forEach(t),De=a(fe,", "),je=o(fe,"CODE",{});var ys=r(je);Te=a(ys,"attention_mask"),ys.forEach(t),Ne=a(fe,", "),ye=o(fe,"CODE",{});var Sa=r(ye);Ae=a(Sa,"token_type_ids"),Sa.forEach(t),Oe=a(fe,", "),Ze=o(fe,"CODE",{});var Da=r(Ze);Ps=a(Da,"labels"),Da.forEach(t),Ss=a(fe,", "),ut=o(fe,"CODE",{});var fa=r(ut);ft=a(fa,"numeric_values"),fa.forEach(t),pa=a(fe,", "),gt=o(fe,"CODE",{});var Tt=r(gt);_t=a(Tt,"numeric_values_scale"),Tt.forEach(t),Ds=a(fe,", "),tt=o(fe,"CODE",{});var oa=r(tt);Ns=a(oa,"float_answer"),oa.forEach(t),fe.forEach(t),fs.forEach(t),Os=p(Ie),Ke=o(Ie,"TR",{});var gs=r(Ke);Pe=o(gs,"TD",{});var Na=r(Pe);Ls=a(Na,"Strong supervision for aggregation"),Na.forEach(t),yt=p(gs),ke=o(gs,"TD",{});var Fe=r(ke);kt=o(Fe,"CODE",{});var Oa=r(kt);qt=a(Oa,"input ids"),Oa.forEach(t),Qs=a(Fe,", "),jt=o(Fe,"CODE",{});var ra=r(jt);$t=a(ra,"attention mask"),ra.forEach(t),Is=a(Fe,", "),Et=o(Fe,"CODE",{});var La=r(Et);Ts=a(La,"token type ids"),La.forEach(t),Gt=a(Fe,", "),Ft=o(Fe,"CODE",{});var Qa=r(Ft);bs=a(Qa,"labels"),Qa.forEach(t),Ye=a(Fe,", "),$e=o(Fe,"CODE",{});var Ia=r($e);Ws=a(Ia,"aggregation_labels"),Ia.forEach(t),Fe.forEach(t),gs.forEach(t),Ie.forEach(t),st.forEach(t),At=p(j),ae=o(j,"P",{});var he=r(ae);nt=o(he,"A",{href:!0});var Wa=r(nt);Bt=a(Wa,"TapasTokenizer"),Wa.forEach(t),Hs=a(he," creates the "),zt=o(he,"CODE",{});var ia=r(zt);ns=a(ia,"labels"),ia.forEach(t),Us=a(he,", "),xt=o(he,"CODE",{});var Ha=r(xt);Ct=a(Ha,"numeric_values"),Ha.forEach(t),Rs=a(he," and "),Mt=o(he,"CODE",{});var Ua=r(Mt);os=a(Ua,"numeric_values_scale"),Ua.forEach(t),Gs=a(he," based on the "),Pt=o(he,"CODE",{});var ga=r(Pt);rs=a(ga,"answer_coordinates"),ga.forEach(t),Bs=a(he," and "),St=o(he,"CODE",{});var ks=r(St);Vs=a(ks,"answer_text"),ks.forEach(t),Le=a(he," columns of the TSV file. The "),Dt=o(he,"CODE",{});var Ra=r(Dt);is=a(Ra,"float_answer"),Ra.forEach(t),Ks=a(he," and "),Nt=o(he,"CODE",{});var _a=r(Nt);ls=a(_a,"aggregation_labels"),_a.forEach(t),Ys=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(t),ds=p(j),E(Ue.$$.fragment,j),ps=p(j),Ee=o(j,"P",{});var Ce=r(Ee);cs=a(Ce,"Note that "),ot=o(Ce,"A",{href:!0});var la=r(ot);Js=a(la,"TapasTokenizer"),la.forEach(t),Ot=a(Ce," expects the data of the table to be "),Lt=o(Ce,"STRONG",{});var Wt=r(Lt);Xs=a(Wt,"text-only"),Wt.forEach(t),Zs=a(Ce,". You can use "),Re=o(Ce,"CODE",{});var da=r(Re);ea=a(da,".astype(str)"),da.forEach(t),hs=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(t),ms=p(j),E(et.$$.fragment,j),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(R,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(nt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(ot,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(j,J){m(j,l,J),e(l,_),e(l,c),e(c,f),e(l,b),e(l,v),e(v,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),m(j,I,J),m(j,O,J),e(O,w),e(w,M),e(M,G),e(G,C),e(C,N),e(M,ee),e(M,te),e(te,ce),e(ce,ne),e(O,se),e(O,P),e(P,L),e(L,W),e(W,X),e(L,Q),e(L,Y),e(Y,ge),e(ge,me),e(Y,_e),e(Y,ue),e(ue,oe),e(Y,qe),e(Y,ie),e(ie,ve),e(Y,g),e(Y,S),e(S,be),e(P,ze),e(P,we),e(we,le),e(le,xe),e(we,Me),e(we,Z),e(Z,de),e(de,pe),e(Z,De),e(Z,je),e(je,Te),e(Z,Ne),e(Z,ye),e(ye,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Ps),e(Z,Ss),e(Z,ut),e(ut,ft),e(Z,pa),e(Z,gt),e(gt,_t),e(Z,Ds),e(Z,tt),e(tt,Ns),e(P,Os),e(P,Ke),e(Ke,Pe),e(Pe,Ls),e(Ke,yt),e(Ke,ke),e(ke,kt),e(kt,qt),e(ke,Qs),e(ke,jt),e(jt,$t),e(ke,Is),e(ke,Et),e(Et,Ts),e(ke,Gt),e(ke,Ft),e(Ft,bs),e(ke,Ye),e(ke,$e),e($e,Ws),m(j,At,J),m(j,ae,J),e(ae,nt),e(nt,Bt),e(ae,Hs),e(ae,zt),e(zt,ns),e(ae,Us),e(ae,xt),e(xt,Ct),e(ae,Rs),e(ae,Mt),e(Mt,os),e(ae,Gs),e(ae,Pt),e(Pt,rs),e(ae,Bs),e(ae,St),e(St,Vs),e(ae,Le),e(ae,Dt),e(Dt,is),e(ae,Ks),e(ae,Nt),e(Nt,ls),e(ae,Ys),m(j,ds,J),F(Ue,j,J),m(j,ps,J),m(j,Ee,J),e(Ee,cs),e(Ee,ot),e(ot,Js),e(Ee,Ot),e(Ee,Lt),e(Lt,Xs),e(Ee,Zs),e(Ee,Re),e(Re,ea),e(Ee,hs),m(j,ms,J),F(et,j,J),Qt=!0},p:ro,i(j){Qt||(A(Ue.$$.fragment,j),A(et.$$.fragment,j),Qt=!0)},o(j){z(Ue.$$.fragment,j),z(et.$$.fragment,j),Qt=!1},d(j){j&&t(l),j&&t(I),j&&t(O),j&&t(At),j&&t(ae),j&&t(ds),x(Ue,j),j&&t(ps),j&&t(Ee),j&&t(ms),x(et,j)}}}function ok(U){let l,_;return l=new io({props:{$$slots:{default:[nk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function rk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se,P,L,W,X,Q,Y,ge,me,_e,ue,oe,qe,ie,ve,g,S,be,ze,we,le,xe,Me,Z,de,pe,De,je,Te,Ne,ye,Ae,Oe,Ze,Ps,Ss,ut,ft,pa,gt,_t,Ds,tt,Ns,Os,Ke,Pe,Ls,yt,ke,kt,qt,Qs,jt,$t,Is,Et,Ts,Gt,Ft,bs,Ye,$e,Ws,At,ae,nt,Bt,Hs,zt,ns,Us,xt,Ct,Rs,Mt,os,Gs,Pt,rs,Bs,St,Vs,Le,Dt,is,Ks,Nt,ls,Ys,ds,Ue,ps,Ee,cs,ot,Js,Ot,Lt,Xs,Zs,Re,ea,hs,ms,et,Qt;return Ue=new Ve({props:{code:`from transformers import TapasTokenizer
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
inputs to be fine-tuned:`),I=d(),O=n("table"),w=n("thead"),M=n("tr"),G=n("th"),C=n("strong"),N=s("Task"),ee=d(),te=n("th"),ce=n("strong"),ne=s("Required inputs"),se=d(),P=n("tbody"),L=n("tr"),W=n("td"),X=s("Conversational"),Q=d(),Y=n("td"),ge=n("code"),me=s("input_ids"),_e=s(", "),ue=n("code"),oe=s("attention_mask"),qe=s(", "),ie=n("code"),ve=s("token_type_ids"),g=s(", "),S=n("code"),be=s("labels"),ze=d(),we=n("tr"),le=n("td"),xe=s("Weak supervision for aggregation"),Me=d(),Z=n("td"),de=n("code"),pe=s("input_ids"),De=s(", "),je=n("code"),Te=s("attention_mask"),Ne=s(", "),ye=n("code"),Ae=s("token_type_ids"),Oe=s(", "),Ze=n("code"),Ps=s("labels"),Ss=s(", "),ut=n("code"),ft=s("numeric_values"),pa=s(", "),gt=n("code"),_t=s("numeric_values_scale"),Ds=s(", "),tt=n("code"),Ns=s("float_answer"),Os=d(),Ke=n("tr"),Pe=n("td"),Ls=s("Strong supervision for aggregation"),yt=d(),ke=n("td"),kt=n("code"),qt=s("input ids"),Qs=s(", "),jt=n("code"),$t=s("attention mask"),Is=s(", "),Et=n("code"),Ts=s("token type ids"),Gt=s(", "),Ft=n("code"),bs=s("labels"),Ye=s(", "),$e=n("code"),Ws=s("aggregation_labels"),At=d(),ae=n("p"),nt=n("a"),Bt=s("TapasTokenizer"),Hs=s(" creates the "),zt=n("code"),ns=s("labels"),Us=s(", "),xt=n("code"),Ct=s("numeric_values"),Rs=s(" and "),Mt=n("code"),os=s("numeric_values_scale"),Gs=s(" based on the "),Pt=n("code"),rs=s("answer_coordinates"),Bs=s(" and "),St=n("code"),Vs=s("answer_text"),Le=s(" columns of the TSV file. The "),Dt=n("code"),is=s("float_answer"),Ks=s(" and "),Nt=n("code"),ls=s("aggregation_labels"),Ys=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ds=d(),$(Ue.$$.fragment),ps=d(),Ee=n("p"),cs=s("Note that "),ot=n("a"),Js=s("TapasTokenizer"),Ot=s(" expects the data of the table to be "),Lt=n("strong"),Xs=s("text-only"),Zs=s(". You can use "),Re=n("code"),ea=s(".astype(str)"),hs=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),ms=d(),$(et.$$.fragment),this.h()},l(j){l=o(j,"P",{});var J=r(l);_=a(J,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),c=o(J,"A",{href:!0});var Aa=r(c);f=a(Aa,"TapasTokenizer"),Aa.forEach(t),b=a(J," to convert table-question pairs into "),v=o(J,"CODE",{});var ta=r(v);T=a(ta,"input_ids"),ta.forEach(t),k=a(J,", "),y=o(J,"CODE",{});var za=r(y);D=a(za,"attention_mask"),za.forEach(t),q=a(J,", "),H=o(J,"CODE",{});var ca=r(H);B=a(ca,"token_type_ids"),ca.forEach(t),V=a(J," and so on. Again, based on which of the three cases you picked above, "),R=o(J,"A",{href:!0});var It=r(R);K=a(It,"TFTapasForQuestionAnswering"),It.forEach(t),re=a(J,` requires different
inputs to be fine-tuned:`),J.forEach(t),I=p(j),O=o(j,"TABLE",{});var st=r(O);w=o(st,"THEAD",{});var sa=r(w);M=o(sa,"TR",{});var rt=r(M);G=o(rt,"TH",{});var xa=r(G);C=o(xa,"STRONG",{});var aa=r(C);N=a(aa,"Task"),aa.forEach(t),xa.forEach(t),ee=p(rt),te=o(rt,"TH",{});var Ca=r(te);ce=o(Ca,"STRONG",{});var ha=r(ce);ne=a(ha,"Required inputs"),ha.forEach(t),Ca.forEach(t),rt.forEach(t),sa.forEach(t),se=p(st),P=o(st,"TBODY",{});var Ie=r(P);L=o(Ie,"TR",{});var us=r(L);W=o(us,"TD",{});var vs=r(W);X=a(vs,"Conversational"),vs.forEach(t),Q=p(us),Y=o(us,"TD",{});var Ge=r(Y);ge=o(Ge,"CODE",{});var Ma=r(ge);me=a(Ma,"input_ids"),Ma.forEach(t),_e=a(Ge,", "),ue=o(Ge,"CODE",{});var ma=r(ue);oe=a(ma,"attention_mask"),ma.forEach(t),qe=a(Ge,", "),ie=o(Ge,"CODE",{});var ws=r(ie);ve=a(ws,"token_type_ids"),ws.forEach(t),g=a(Ge,", "),S=o(Ge,"CODE",{});var na=r(S);be=a(na,"labels"),na.forEach(t),Ge.forEach(t),us.forEach(t),ze=p(Ie),we=o(Ie,"TR",{});var fs=r(we);le=o(fs,"TD",{});var ua=r(le);xe=a(ua,"Weak supervision for aggregation"),ua.forEach(t),Me=p(fs),Z=o(fs,"TD",{});var fe=r(Z);de=o(fe,"CODE",{});var Pa=r(de);pe=a(Pa,"input_ids"),Pa.forEach(t),De=a(fe,", "),je=o(fe,"CODE",{});var ys=r(je);Te=a(ys,"attention_mask"),ys.forEach(t),Ne=a(fe,", "),ye=o(fe,"CODE",{});var Sa=r(ye);Ae=a(Sa,"token_type_ids"),Sa.forEach(t),Oe=a(fe,", "),Ze=o(fe,"CODE",{});var Da=r(Ze);Ps=a(Da,"labels"),Da.forEach(t),Ss=a(fe,", "),ut=o(fe,"CODE",{});var fa=r(ut);ft=a(fa,"numeric_values"),fa.forEach(t),pa=a(fe,", "),gt=o(fe,"CODE",{});var Tt=r(gt);_t=a(Tt,"numeric_values_scale"),Tt.forEach(t),Ds=a(fe,", "),tt=o(fe,"CODE",{});var oa=r(tt);Ns=a(oa,"float_answer"),oa.forEach(t),fe.forEach(t),fs.forEach(t),Os=p(Ie),Ke=o(Ie,"TR",{});var gs=r(Ke);Pe=o(gs,"TD",{});var Na=r(Pe);Ls=a(Na,"Strong supervision for aggregation"),Na.forEach(t),yt=p(gs),ke=o(gs,"TD",{});var Fe=r(ke);kt=o(Fe,"CODE",{});var Oa=r(kt);qt=a(Oa,"input ids"),Oa.forEach(t),Qs=a(Fe,", "),jt=o(Fe,"CODE",{});var ra=r(jt);$t=a(ra,"attention mask"),ra.forEach(t),Is=a(Fe,", "),Et=o(Fe,"CODE",{});var La=r(Et);Ts=a(La,"token type ids"),La.forEach(t),Gt=a(Fe,", "),Ft=o(Fe,"CODE",{});var Qa=r(Ft);bs=a(Qa,"labels"),Qa.forEach(t),Ye=a(Fe,", "),$e=o(Fe,"CODE",{});var Ia=r($e);Ws=a(Ia,"aggregation_labels"),Ia.forEach(t),Fe.forEach(t),gs.forEach(t),Ie.forEach(t),st.forEach(t),At=p(j),ae=o(j,"P",{});var he=r(ae);nt=o(he,"A",{href:!0});var Wa=r(nt);Bt=a(Wa,"TapasTokenizer"),Wa.forEach(t),Hs=a(he," creates the "),zt=o(he,"CODE",{});var ia=r(zt);ns=a(ia,"labels"),ia.forEach(t),Us=a(he,", "),xt=o(he,"CODE",{});var Ha=r(xt);Ct=a(Ha,"numeric_values"),Ha.forEach(t),Rs=a(he," and "),Mt=o(he,"CODE",{});var Ua=r(Mt);os=a(Ua,"numeric_values_scale"),Ua.forEach(t),Gs=a(he," based on the "),Pt=o(he,"CODE",{});var ga=r(Pt);rs=a(ga,"answer_coordinates"),ga.forEach(t),Bs=a(he," and "),St=o(he,"CODE",{});var ks=r(St);Vs=a(ks,"answer_text"),ks.forEach(t),Le=a(he," columns of the TSV file. The "),Dt=o(he,"CODE",{});var Ra=r(Dt);is=a(Ra,"float_answer"),Ra.forEach(t),Ks=a(he," and "),Nt=o(he,"CODE",{});var _a=r(Nt);ls=a(_a,"aggregation_labels"),_a.forEach(t),Ys=a(he," are already in the TSV file of step 2. Here\u2019s an example:"),he.forEach(t),ds=p(j),E(Ue.$$.fragment,j),ps=p(j),Ee=o(j,"P",{});var Ce=r(Ee);cs=a(Ce,"Note that "),ot=o(Ce,"A",{href:!0});var la=r(ot);Js=a(la,"TapasTokenizer"),la.forEach(t),Ot=a(Ce," expects the data of the table to be "),Lt=o(Ce,"STRONG",{});var Wt=r(Lt);Xs=a(Wt,"text-only"),Wt.forEach(t),Zs=a(Ce,". You can use "),Re=o(Ce,"CODE",{});var da=r(Re);ea=a(da,".astype(str)"),da.forEach(t),hs=a(Ce,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ce.forEach(t),ms=p(j),E(et.$$.fragment,j),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(R,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(nt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(ot,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(j,J){m(j,l,J),e(l,_),e(l,c),e(c,f),e(l,b),e(l,v),e(v,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),m(j,I,J),m(j,O,J),e(O,w),e(w,M),e(M,G),e(G,C),e(C,N),e(M,ee),e(M,te),e(te,ce),e(ce,ne),e(O,se),e(O,P),e(P,L),e(L,W),e(W,X),e(L,Q),e(L,Y),e(Y,ge),e(ge,me),e(Y,_e),e(Y,ue),e(ue,oe),e(Y,qe),e(Y,ie),e(ie,ve),e(Y,g),e(Y,S),e(S,be),e(P,ze),e(P,we),e(we,le),e(le,xe),e(we,Me),e(we,Z),e(Z,de),e(de,pe),e(Z,De),e(Z,je),e(je,Te),e(Z,Ne),e(Z,ye),e(ye,Ae),e(Z,Oe),e(Z,Ze),e(Ze,Ps),e(Z,Ss),e(Z,ut),e(ut,ft),e(Z,pa),e(Z,gt),e(gt,_t),e(Z,Ds),e(Z,tt),e(tt,Ns),e(P,Os),e(P,Ke),e(Ke,Pe),e(Pe,Ls),e(Ke,yt),e(Ke,ke),e(ke,kt),e(kt,qt),e(ke,Qs),e(ke,jt),e(jt,$t),e(ke,Is),e(ke,Et),e(Et,Ts),e(ke,Gt),e(ke,Ft),e(Ft,bs),e(ke,Ye),e(ke,$e),e($e,Ws),m(j,At,J),m(j,ae,J),e(ae,nt),e(nt,Bt),e(ae,Hs),e(ae,zt),e(zt,ns),e(ae,Us),e(ae,xt),e(xt,Ct),e(ae,Rs),e(ae,Mt),e(Mt,os),e(ae,Gs),e(ae,Pt),e(Pt,rs),e(ae,Bs),e(ae,St),e(St,Vs),e(ae,Le),e(ae,Dt),e(Dt,is),e(ae,Ks),e(ae,Nt),e(Nt,ls),e(ae,Ys),m(j,ds,J),F(Ue,j,J),m(j,ps,J),m(j,Ee,J),e(Ee,cs),e(Ee,ot),e(ot,Js),e(Ee,Ot),e(Ee,Lt),e(Lt,Xs),e(Ee,Zs),e(Ee,Re),e(Re,ea),e(Ee,hs),m(j,ms,J),F(et,j,J),Qt=!0},p:ro,i(j){Qt||(A(Ue.$$.fragment,j),A(et.$$.fragment,j),Qt=!0)},o(j){z(Ue.$$.fragment,j),z(et.$$.fragment,j),Qt=!1},d(j){j&&t(l),j&&t(I),j&&t(O),j&&t(At),j&&t(ae),j&&t(ds),x(Ue,j),j&&t(ps),j&&t(Ee),j&&t(ms),x(et,j)}}}function ik(U){let l,_;return l=new io({props:{$$slots:{default:[rk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function lk(U){let l,_,c,f,b,v,T,k;return T=new Ve({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering, AdamW

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
<span class="hljs-meta">... </span>        optimizer.step()`}}),{c(){l=n("p"),_=s("You can then fine-tune "),c=n("a"),f=s("TapasForQuestionAnswering"),b=s(" as follows (shown here for the weak supervision for aggregation case):"),v=d(),$(T.$$.fragment),this.h()},l(y){l=o(y,"P",{});var D=r(l);_=a(D,"You can then fine-tune "),c=o(D,"A",{href:!0});var q=r(c);f=a(q,"TapasForQuestionAnswering"),q.forEach(t),b=a(D," as follows (shown here for the weak supervision for aggregation case):"),D.forEach(t),v=p(y),E(T.$$.fragment,y),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(y,D){m(y,l,D),e(l,_),e(l,c),e(c,f),e(l,b),m(y,v,D),F(T,y,D),k=!0},p:ro,i(y){k||(A(T.$$.fragment,y),k=!0)},o(y){z(T.$$.fragment,y),k=!1},d(y){y&&t(l),y&&t(v),x(T,y)}}}function dk(U){let l,_;return l=new io({props:{$$slots:{default:[lk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function pk(U){let l,_,c,f,b,v,T,k;return T=new Ve({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">... </span>        optimizer.apply_gradients(<span class="hljs-built_in">zip</span>(grads, model.trainable_weights))`}}),{c(){l=n("p"),_=s("You can then fine-tune "),c=n("a"),f=s("TFTapasForQuestionAnswering"),b=s(" as follows (shown here for the weak supervision for aggregation case):"),v=d(),$(T.$$.fragment),this.h()},l(y){l=o(y,"P",{});var D=r(l);_=a(D,"You can then fine-tune "),c=o(D,"A",{href:!0});var q=r(c);f=a(q,"TFTapasForQuestionAnswering"),q.forEach(t),b=a(D," as follows (shown here for the weak supervision for aggregation case):"),D.forEach(t),v=p(y),E(T.$$.fragment,y),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(y,D){m(y,l,D),e(l,_),e(l,c),e(c,f),e(l,b),m(y,v,D),F(T,y,D),k=!0},p:ro,i(y){k||(A(T.$$.fragment,y),k=!0)},o(y){z(T.$$.fragment,y),k=!1},d(y){y&&t(l),y&&t(v),x(T,y)}}}function ck(U){let l,_;return l=new io({props:{$$slots:{default:[pk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function hk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se,P,L,W;return L=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=n("p"),_=s("Here we explain how you can use "),c=n("a"),f=s("TapasForQuestionAnswering"),b=s(" or "),v=n("a"),T=s("TFTapasForQuestionAnswering"),k=s(" for inference (i.e. making predictions on new data). For inference, only "),y=n("code"),D=s("input_ids"),q=s(", "),H=n("code"),B=s("attention_mask"),V=s(" and "),R=n("code"),K=s("token_type_ids"),re=s(" (which you can obtain using "),I=n("a"),O=s("TapasTokenizer"),w=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=n("code"),G=s("convert_logits_to_predictions"),C=s(" method to convert these into predicted coordinates and optional aggregation indices."),N=d(),ee=n("p"),te=s("However, note that inference is "),ce=n("strong"),ne=s("different"),se=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),P=d(),$(L.$$.fragment),this.h()},l(X){l=o(X,"P",{});var Q=r(l);_=a(Q,"Here we explain how you can use "),c=o(Q,"A",{href:!0});var Y=r(c);f=a(Y,"TapasForQuestionAnswering"),Y.forEach(t),b=a(Q," or "),v=o(Q,"A",{href:!0});var ge=r(v);T=a(ge,"TFTapasForQuestionAnswering"),ge.forEach(t),k=a(Q," for inference (i.e. making predictions on new data). For inference, only "),y=o(Q,"CODE",{});var me=r(y);D=a(me,"input_ids"),me.forEach(t),q=a(Q,", "),H=o(Q,"CODE",{});var _e=r(H);B=a(_e,"attention_mask"),_e.forEach(t),V=a(Q," and "),R=o(Q,"CODE",{});var ue=r(R);K=a(ue,"token_type_ids"),ue.forEach(t),re=a(Q," (which you can obtain using "),I=o(Q,"A",{href:!0});var oe=r(I);O=a(oe,"TapasTokenizer"),oe.forEach(t),w=a(Q,") have to be provided to the model to obtain the logits. Next, you can use the handy "),M=o(Q,"CODE",{});var qe=r(M);G=a(qe,"convert_logits_to_predictions"),qe.forEach(t),C=a(Q," method to convert these into predicted coordinates and optional aggregation indices."),Q.forEach(t),N=p(X),ee=o(X,"P",{});var ie=r(ee);te=a(ie,"However, note that inference is "),ce=o(ie,"STRONG",{});var ve=r(ce);ne=a(ve,"different"),ve.forEach(t),se=a(ie," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ie.forEach(t),P=p(X),E(L.$$.fragment,X),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(v,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(I,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(X,Q){m(X,l,Q),e(l,_),e(l,c),e(c,f),e(l,b),e(l,v),e(v,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),e(l,I),e(I,O),e(l,w),e(l,M),e(M,G),e(l,C),m(X,N,Q),m(X,ee,Q),e(ee,te),e(ee,ce),e(ce,ne),e(ee,se),m(X,P,Q),F(L,X,Q),W=!0},p:ro,i(X){W||(A(L.$$.fragment,X),W=!0)},o(X){z(L.$$.fragment,X),W=!1},d(X){X&&t(l),X&&t(N),X&&t(ee),X&&t(P),x(L,X)}}}function mk(U){let l,_;return l=new io({props:{$$slots:{default:[hk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function uk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se;return ne=new Ve({props:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
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
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=n("p"),_=s("Here we explain how you can use "),c=n("a"),f=s("TFTapasForQuestionAnswering"),b=s(" for inference (i.e. making predictions on new data). For inference, only "),v=n("code"),T=s("input_ids"),k=s(", "),y=n("code"),D=s("attention_mask"),q=s(" and "),H=n("code"),B=s("token_type_ids"),V=s(" (which you can obtain using "),R=n("a"),K=s("TapasTokenizer"),re=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),I=n("code"),O=s("convert_logits_to_predictions"),w=s(" method to convert these into predicted coordinates and optional aggregation indices."),M=d(),G=n("p"),C=s("However, note that inference is "),N=n("strong"),ee=s("different"),te=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ce=d(),$(ne.$$.fragment),this.h()},l(P){l=o(P,"P",{});var L=r(l);_=a(L,"Here we explain how you can use "),c=o(L,"A",{href:!0});var W=r(c);f=a(W,"TFTapasForQuestionAnswering"),W.forEach(t),b=a(L," for inference (i.e. making predictions on new data). For inference, only "),v=o(L,"CODE",{});var X=r(v);T=a(X,"input_ids"),X.forEach(t),k=a(L,", "),y=o(L,"CODE",{});var Q=r(y);D=a(Q,"attention_mask"),Q.forEach(t),q=a(L," and "),H=o(L,"CODE",{});var Y=r(H);B=a(Y,"token_type_ids"),Y.forEach(t),V=a(L," (which you can obtain using "),R=o(L,"A",{href:!0});var ge=r(R);K=a(ge,"TapasTokenizer"),ge.forEach(t),re=a(L,") have to be provided to the model to obtain the logits. Next, you can use the handy "),I=o(L,"CODE",{});var me=r(I);O=a(me,"convert_logits_to_predictions"),me.forEach(t),w=a(L," method to convert these into predicted coordinates and optional aggregation indices."),L.forEach(t),M=p(P),G=o(P,"P",{});var _e=r(G);C=a(_e,"However, note that inference is "),N=o(_e,"STRONG",{});var ue=r(N);ee=a(ue,"different"),ue.forEach(t),te=a(_e," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),_e.forEach(t),ce=p(P),E(ne.$$.fragment,P),this.h()},h(){h(c,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(R,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(P,L){m(P,l,L),e(l,_),e(l,c),e(c,f),e(l,b),e(l,v),e(v,T),e(l,k),e(l,y),e(y,D),e(l,q),e(l,H),e(H,B),e(l,V),e(l,R),e(R,K),e(l,re),e(l,I),e(I,O),e(l,w),m(P,M,L),m(P,G,L),e(G,C),e(G,N),e(N,ee),e(G,te),m(P,ce,L),F(ne,P,L),se=!0},p:ro,i(P){se||(A(ne.$$.fragment,P),se=!0)},o(P){z(ne.$$.fragment,P),se=!1},d(P){P&&t(l),P&&t(M),P&&t(G),P&&t(ce),x(ne,P)}}}function fk(U){let l,_;return l=new io({props:{$$slots:{default:[uk]},$$scope:{ctx:U}}}),{c(){$(l.$$.fragment)},l(c){E(l.$$.fragment,c)},m(c,f){F(l,c,f),_=!0},p(c,f){const b={};f&2&&(b.$$scope={dirty:f,ctx:c}),l.$set(b)},i(c){_||(A(l.$$.fragment,c),_=!0)},o(c){z(l.$$.fragment,c),_=!1},d(c){x(l,c)}}}function gk(U){let l,_,c,f,b;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=o(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){m(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function _k(U){let l,_,c,f,b;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=o(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){m(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function Tk(U){let l,_,c,f,b;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=o(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){m(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function bk(U){let l,_,c,f,b;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),b=s(`
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
the latter silently ignores them.`),T.forEach(t)},m(v,T){m(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function qk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se,P,L,W,X,Q,Y,ge,me,_e,ue,oe,qe,ie,ve;return{c(){l=n("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=n("ul"),b=n("li"),v=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),k=n("li"),y=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=n("p"),H=s("This second option is useful when using "),B=n("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),re=s("model(inputs)"),I=s("."),O=d(),w=n("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=d(),C=n("ul"),N=n("li"),ee=s("a single Tensor with "),te=n("code"),ce=s("input_ids"),ne=s(" only and nothing else: "),se=n("code"),P=s("model(inputs_ids)"),L=d(),W=n("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),me=n("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),ue=d(),oe=n("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=o(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(t),c=p(g),f=o(g,"UL",{});var be=r(f);b=o(be,"LI",{});var ze=r(b);v=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(be),k=o(be,"LI",{});var we=r(k);y=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),D=p(g),q=o(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),B=o(le,"CODE",{});var xe=r(B);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),w=o(g,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=p(g),C=o(g,"UL",{});var de=r(C);N=o(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=o(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),ne=a(pe," only and nothing else: "),se=o(pe,"CODE",{});var je=r(se);P=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=o(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),me=o(Te,"CODE",{});var ye=r(me);_e=a(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Te.forEach(t),ue=p(de),oe=o(de,"LI",{});var Ae=r(oe);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,S){m(g,l,S),e(l,_),m(g,c,S),m(g,f,S),e(f,b),e(b,v),e(f,T),e(f,k),e(k,y),m(g,D,S),m(g,q,S),e(q,H),e(q,B),e(B,V),e(q,R),e(q,K),e(K,re),e(q,I),m(g,O,S),m(g,w,S),e(w,M),m(g,G,S),m(g,C,S),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,ne),e(N,se),e(se,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,me),e(me,_e),e(C,ue),e(C,oe),e(oe,qe),e(oe,ie),e(ie,ve)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(w),g&&t(G),g&&t(C)}}}function jk(U){let l,_,c,f,b;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=o(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){m(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function $k(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se,P,L,W,X,Q,Y,ge,me,_e,ue,oe,qe,ie,ve;return{c(){l=n("p"),_=s("TF 2.0 models accepts two formats as inputs:"),c=d(),f=n("ul"),b=n("li"),v=s("having all inputs as keyword arguments (like PyTorch models), or"),T=d(),k=n("li"),y=s("having all inputs as a list, tuple or dict in the first positional arguments."),D=d(),q=n("p"),H=s("This second option is useful when using "),B=n("code"),V=s("tf.keras.Model.fit"),R=s(` method which currently requires having all the
tensors in the first argument of the model call function: `),K=n("code"),re=s("model(inputs)"),I=s("."),O=d(),w=n("p"),M=s(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),G=d(),C=n("ul"),N=n("li"),ee=s("a single Tensor with "),te=n("code"),ce=s("input_ids"),ne=s(" only and nothing else: "),se=n("code"),P=s("model(inputs_ids)"),L=d(),W=n("li"),X=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=n("code"),Y=s("model([input_ids, attention_mask])"),ge=s(" or "),me=n("code"),_e=s("model([input_ids, attention_mask, token_type_ids])"),ue=d(),oe=n("li"),qe=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=n("code"),ve=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(g){l=o(g,"P",{});var S=r(l);_=a(S,"TF 2.0 models accepts two formats as inputs:"),S.forEach(t),c=p(g),f=o(g,"UL",{});var be=r(f);b=o(be,"LI",{});var ze=r(b);v=a(ze,"having all inputs as keyword arguments (like PyTorch models), or"),ze.forEach(t),T=p(be),k=o(be,"LI",{});var we=r(k);y=a(we,"having all inputs as a list, tuple or dict in the first positional arguments."),we.forEach(t),be.forEach(t),D=p(g),q=o(g,"P",{});var le=r(q);H=a(le,"This second option is useful when using "),B=o(le,"CODE",{});var xe=r(B);V=a(xe,"tf.keras.Model.fit"),xe.forEach(t),R=a(le,` method which currently requires having all the
tensors in the first argument of the model call function: `),K=o(le,"CODE",{});var Me=r(K);re=a(Me,"model(inputs)"),Me.forEach(t),I=a(le,"."),le.forEach(t),O=p(g),w=o(g,"P",{});var Z=r(w);M=a(Z,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z.forEach(t),G=p(g),C=o(g,"UL",{});var de=r(C);N=o(de,"LI",{});var pe=r(N);ee=a(pe,"a single Tensor with "),te=o(pe,"CODE",{});var De=r(te);ce=a(De,"input_ids"),De.forEach(t),ne=a(pe," only and nothing else: "),se=o(pe,"CODE",{});var je=r(se);P=a(je,"model(inputs_ids)"),je.forEach(t),pe.forEach(t),L=p(de),W=o(de,"LI",{});var Te=r(W);X=a(Te,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o(Te,"CODE",{});var Ne=r(Q);Y=a(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ge=a(Te," or "),me=o(Te,"CODE",{});var ye=r(me);_e=a(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Te.forEach(t),ue=p(de),oe=o(de,"LI",{});var Ae=r(oe);qe=a(Ae,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ie=o(Ae,"CODE",{});var Oe=r(ie);ve=a(Oe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Oe.forEach(t),Ae.forEach(t),de.forEach(t)},m(g,S){m(g,l,S),e(l,_),m(g,c,S),m(g,f,S),e(f,b),e(b,v),e(f,T),e(f,k),e(k,y),m(g,D,S),m(g,q,S),e(q,H),e(q,B),e(B,V),e(q,R),e(q,K),e(K,re),e(q,I),m(g,O,S),m(g,w,S),e(w,M),m(g,G,S),m(g,C,S),e(C,N),e(N,ee),e(N,te),e(te,ce),e(N,ne),e(N,se),e(se,P),e(C,L),e(C,W),e(W,X),e(W,Q),e(Q,Y),e(W,ge),e(W,me),e(me,_e),e(C,ue),e(C,oe),e(oe,qe),e(oe,ie),e(ie,ve)},d(g){g&&t(l),g&&t(c),g&&t(f),g&&t(D),g&&t(q),g&&t(O),g&&t(w),g&&t(G),g&&t(C)}}}function Ek(U){let l,_,c,f,b;return{c(){l=n("p"),_=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),c=n("code"),f=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){l=o(v,"P",{});var T=r(l);_=a(T,"Although the recipe for forward pass needs to be defined within this function, one should call the "),c=o(T,"CODE",{});var k=r(c);f=a(k,"Module"),k.forEach(t),b=a(T,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),T.forEach(t)},m(v,T){m(v,l,T),e(l,_),e(l,c),e(c,f),e(l,b)},d(v){v&&t(l)}}}function Fk(U){let l,_,c,f,b,v,T,k,y,D,q,H,B,V,R,K,re,I,O,w,M,G,C,N,ee,te,ce,ne,se,P,L,W,X,Q,Y,ge,me,_e,ue,oe,qe,ie,ve,g,S,be,ze,we,le,xe,Me,Z,de,pe,De,je,Te,Ne,ye,Ae,Oe,Ze,Ps,Ss,ut,ft,pa,gt,_t,Ds,tt,Ns,Os,Ke,Pe,Ls,yt,ke,kt,qt,Qs,jt,$t,Is,Et,Ts,Gt,Ft,bs,Ye,$e,Ws,At,ae,nt,Bt,Hs,zt,ns,Us,xt,Ct,Rs,Mt,os,Gs,Pt,rs,Bs,St,Vs,Le,Dt,is,Ks,Nt,ls,Ys,ds,Ue,ps,Ee,cs,ot,Js,Ot,Lt,Xs,Zs,Re,ea,hs,ms,et,Qt,j,J,Aa,ta,za,ca,It,st,sa,rt,xa,aa,Ca,ha,Ie,us,vs,Ge,Ma,ma,ws,na,fs,ua,fe,Pa,ys,Sa,Da,fa,Tt,oa,gs,Na,Fe,Oa,ra,La,Qa,Ia,he,Wa,ia,Ha,Ua,ga,ks,Ra,_a,Ce,la,Wt,da,Xi,Sc,Dc,Zi,el,Nc,Oc,tl,sl,Lc,Qc,Ga,Ba,al,Ic,Wc,nl,Hc,Uc,ol,Rc,Gc,Va,rl,Bc,Vc,il,Kc,Yc,ll,Jc,Xc,Ka,dl,Zc,eh,pl,th,sh,cl,ah,np,qn,op,jn,nh,lo,oh,rh,rp,$n,ih,po,lh,dh,ip,Ur,hl,ph,lp,En,ch,co,hh,mh,dp,We,Rr,ml,uh,fh,gh,Gr,ul,_h,Th,bh,Br,fl,vh,wh,yh,Vr,gl,kh,qh,jh,Kr,_l,$h,Eh,Fh,Yr,Tl,Ah,zh,xh,Jr,bl,Ch,Mh,Ph,Xr,vl,Sh,Dh,Nh,Zr,wl,Oh,Lh,pp,bt,Qh,ho,Ih,Wh,mo,Hh,Uh,yl,Rh,Gh,kl,Bh,Vh,ql,Kh,Yh,cp,ei,jl,Jh,hp,Fn,mp,Se,Xh,$l,Zh,em,El,tm,sm,Fl,am,nm,Al,om,rm,zl,im,lm,xl,dm,pm,ti,cm,hm,uo,mm,um,fo,fm,gm,up,si,_m,fp,An,gp,Ya,zn,Cl,go,Tm,Ml,bm,_p,xn,Tp,vt,vm,Pl,wm,ym,Sl,km,qm,Dl,jm,$m,_o,Em,Fm,To,Am,zm,bp,Ja,Cn,Nl,bo,xm,Ol,Cm,vp,Xa,vo,Mm,wo,Pm,ai,Sm,Dm,wp,Za,Mn,Ll,yo,Nm,Ql,Om,yp,it,ko,Lm,en,Qm,ni,Im,Wm,qo,Hm,Um,Rm,tn,Gm,Il,Bm,Vm,oi,Km,Ym,Jm,jo,Xm,$o,Zm,eu,tu,Wl,su,au,Eo,kp,sn,Pn,Hl,Fo,nu,Ul,ou,qp,Be,Ao,ru,Rl,iu,lu,Qe,du,ri,pu,cu,ii,hu,mu,Gl,uu,fu,Bl,gu,_u,Vl,Tu,bu,Kl,vu,wu,Yl,yu,ku,Jl,qu,ju,Xl,$u,Eu,Fu,lt,Zl,Au,zu,ed,xu,Cu,td,Mu,Pu,sd,Su,Du,ad,Nu,Ou,nd,Lu,Qu,od,Iu,Wu,li,di,Hu,Uu,Ru,Sn,zo,Gu,rd,Bu,Vu,Ta,xo,Ku,Co,Yu,pi,Ju,Xu,Zu,Mo,ef,Po,tf,sf,af,ci,So,jp,an,Dn,id,Do,nf,ld,of,$p,dt,No,rf,Oo,lf,hi,df,pf,cf,Lo,hf,Qo,mf,uf,ff,Io,gf,mi,_f,Tf,bf,Wo,vf,Ho,wf,yf,kf,Vt,Uo,qf,nn,jf,ui,$f,Ef,dd,Ff,Af,zf,Nn,xf,pd,Cf,Mf,Ro,Ep,on,On,cd,Go,Pf,hd,Sf,Fp,_s,Bo,Df,rn,Nf,md,Of,Lf,fi,Qf,If,Wf,Vo,Hf,Ko,Uf,Rf,Gf,Kt,Yo,Bf,ln,Vf,gi,Kf,Yf,ud,Jf,Xf,Zf,Ln,eg,fd,tg,sg,Jo,Ap,dn,Qn,gd,Xo,ag,_d,ng,zp,Ht,Zo,og,Td,rg,ig,er,lg,_i,dg,pg,cg,tr,hg,sr,mg,ug,fg,Yt,ar,gg,pn,_g,Ti,Tg,bg,bd,vg,wg,yg,In,kg,vd,qg,jg,nr,xp,cn,Wn,wd,or,$g,yd,Eg,Cp,Ut,rr,Fg,hn,Ag,kd,zg,xg,qd,Cg,Mg,Pg,ir,Sg,bi,Dg,Ng,Og,lr,Lg,dr,Qg,Ig,Wg,Jt,pr,Hg,mn,Ug,vi,Rg,Gg,jd,Bg,Vg,Kg,Hn,Yg,$d,Jg,Xg,cr,Mp,un,Un,Ed,hr,Zg,Fd,e_,Pp,pt,mr,t_,Ad,s_,a_,ur,n_,wi,o_,r_,i_,fr,l_,gr,d_,p_,c_,Rn,h_,Xt,_r,m_,fn,u_,yi,f_,g_,zd,__,T_,b_,Gn,v_,xd,w_,y_,Tr,Sp,gn,Bn,Cd,br,k_,Md,q_,Dp,ct,vr,j_,wr,$_,Pd,E_,F_,A_,yr,z_,ki,x_,C_,M_,kr,P_,qr,S_,D_,N_,Vn,O_,Zt,jr,L_,_n,Q_,qi,I_,W_,Sd,H_,U_,R_,Kn,G_,Dd,B_,V_,$r,Np,Tn,Yn,Nd,Er,K_,Od,Y_,Op,ht,Fr,J_,Ld,X_,Z_,Ar,eT,ji,tT,sT,aT,zr,nT,xr,oT,rT,iT,Jn,lT,es,Cr,dT,bn,pT,$i,cT,hT,Qd,mT,uT,fT,Xn,gT,Id,_T,TT,Mr,Lp,vn,Zn,Wd,Pr,bT,Hd,vT,Qp,mt,Sr,wT,wn,yT,Ud,kT,qT,Rd,jT,$T,ET,Dr,FT,Ei,AT,zT,xT,Nr,CT,Or,MT,PT,ST,eo,DT,ts,Lr,NT,yn,OT,Fi,LT,QT,Gd,IT,WT,HT,to,UT,Bd,RT,GT,Qr,Ip;return v=new Rt({}),V=new Rt({}),rt=new Rt({}),qn=new Pc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ak],pytorch:[tk]},$$scope:{ctx:U}}}),Fn=new Pc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ik],pytorch:[ok]},$$scope:{ctx:U}}}),An=new Pc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[ck],pytorch:[dk]},$$scope:{ctx:U}}}),go=new Rt({}),xn=new Pc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[fk],pytorch:[mk]},$$scope:{ctx:U}}}),bo=new Rt({}),vo=new He({props:{name:"class transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_aggregation",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) &#x2014;
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
should be set to 0 for these models.`,name:"no_aggregation_label_index"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/configuration_tapas.py#L37"}}),Eo=new Ve({props:{code:`from transformers import TapasModel, TapasConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Fo=new Rt({}),Ao=new He({props:{name:"class transformers.TapasTokenizer",anchor:"transformers.TapasTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"empty_token",val:" = '[EMPTY]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"cell_trim_length",val:": int = -1"},{name:"max_column_id",val:": int = None"},{name:"max_row_id",val:": int = None"},{name:"strip_column_names",val:": bool = False"},{name:"update_answer_coordinates",val:": bool = False"},{name:"min_question_length",val:" = None"},{name:"max_question_length",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Maximum length of each question in terms of tokens (will be skipped otherwise).`,name:"max_question_length"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L188"}}),zo=new He({props:{name:"__call__",anchor:"transformers.TapasTokenizer.__call__",parameters:[{name:"table",val:": pd.DataFrame"},{name:"queries",val:": typing.Union[str, typing.List[str], typing.List[int], typing.List[typing.List[str]], typing.List[typing.List[int]], NoneType] = None"},{name:"answer_coordinates",val:": typing.Union[typing.List[typing.Tuple], typing.List[typing.List[typing.Tuple]], NoneType] = None"},{name:"answer_text",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.models.tapas.tokenization_tapas.TapasTruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L528"}}),xo=new He({props:{name:"convert_logits_to_predictions",anchor:"transformers.TapasTokenizer.convert_logits_to_predictions",parameters:[{name:"data",val:""},{name:"logits",val:""},{name:"logits_agg",val:" = None"},{name:"cell_classification_threshold",val:" = 0.5"}],parametersDescription:[{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.data",description:`<strong>data</strong> (<code>dict</code>) &#x2014;
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
`}}),So=new He({props:{name:"save_vocabulary",anchor:"transformers.TapasTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L396"}}),Do=new Rt({}),No=new He({props:{name:"class transformers.TapasModel",anchor:"transformers.TapasModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.TapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L852"}}),Uo=new He({props:{name:"forward",anchor:"transformers.TapasModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Nn=new Ms({props:{$$slots:{default:[gk]},$$scope:{ctx:U}}}),Ro=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Go=new Rt({}),Bo=new He({props:{name:"class transformers.TapasForMaskedLM",anchor:"transformers.TapasForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1005"}}),Yo=new He({props:{name:"forward",anchor:"transformers.TapasForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Ln=new Ms({props:{$$slots:{default:[_k]},$$scope:{ctx:U}}}),Jo=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Xo=new Rt({}),Zo=new He({props:{name:"class transformers.TapasForSequenceClassification",anchor:"transformers.TapasForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1464"}}),ar=new He({props:{name:"forward",anchor:"transformers.TapasForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),In=new Ms({props:{$$slots:{default:[Tk]},$$scope:{ctx:U}}}),nr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),or=new Rt({}),rr=new He({props:{name:"class transformers.TapasForQuestionAnswering",anchor:"transformers.TapasForQuestionAnswering",parameters:[{name:"config",val:": TapasConfig"}],parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1120"}}),pr=new He({props:{name:"forward",anchor:"transformers.TapasForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"table_mask",val:" = None"},{name:"labels",val:" = None"},{name:"aggregation_labels",val:" = None"},{name:"float_answer",val:" = None"},{name:"numeric_values",val:" = None"},{name:"numeric_values_scale",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Hn=new Ms({props:{$$slots:{default:[bk]},$$scope:{ctx:U}}}),cr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),hr=new Rt({}),mr=new He({props:{name:"class transformers.TFTapasModel",anchor:"transformers.TFTapasModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L961"}}),Rn=new Ms({props:{$$slots:{default:[vk]},$$scope:{ctx:U}}}),_r=new He({props:{name:"call",anchor:"transformers.TFTapasModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Gn=new Ms({props:{$$slots:{default:[wk]},$$scope:{ctx:U}}}),Tr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),br=new Rt({}),vr=new He({props:{name:"class transformers.TFTapasForMaskedLM",anchor:"transformers.TFTapasForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1036"}}),Vn=new Ms({props:{$$slots:{default:[yk]},$$scope:{ctx:U}}}),jr=new He({props:{name:"call",anchor:"transformers.TFTapasForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Kn=new Ms({props:{$$slots:{default:[kk]},$$scope:{ctx:U}}}),$r=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Er=new Rt({}),Fr=new He({props:{name:"class transformers.TFTapasForSequenceClassification",anchor:"transformers.TFTapasForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1574"}}),Jn=new Ms({props:{$$slots:{default:[qk]},$$scope:{ctx:U}}}),Cr=new He({props:{name:"call",anchor:"transformers.TFTapasForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
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
`}}),Xn=new Ms({props:{$$slots:{default:[jk]},$$scope:{ctx:U}}}),Mr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Pr=new Rt({}),Sr=new He({props:{name:"class transformers.TFTapasForQuestionAnswering",anchor:"transformers.TFTapasForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1242"}}),eo=new Ms({props:{$$slots:{default:[$k]},$$scope:{ctx:U}}}),Lr=new He({props:{name:"call",anchor:"transformers.TFTapasForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"table_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"aggregation_labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"float_answer",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values_scale",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),to=new Ms({props:{$$slots:{default:[Ek]},$$scope:{ctx:U}}}),Qr=new Ve({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
millions of tables from English Wikipedia and corresponding texts.`),N=d(),ee=n("p"),te=s("For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),ce=d(),ne=n("ul"),se=n("li"),P=n("a"),L=s("SQA"),W=s(" (Sequential Question Answering by Microsoft)"),X=d(),Q=n("li"),Y=n("a"),ge=s("WTQ"),me=s(" (Wiki Table Questions by Stanford University)"),_e=d(),ue=n("li"),oe=n("a"),qe=s("WikiSQL"),ie=s(" (by Salesforce)."),ve=d(),g=n("p"),S=s("It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),be=d(),ze=n("p"),we=s("The abstract from the paper is the following:"),le=d(),xe=n("p"),Me=n("em"),Z=s("Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),de=d(),pe=n("p"),De=s("In addition, the authors have further pre-trained TAPAS to recognize "),je=n("strong"),Te=s("table entailment"),Ne=s(", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ye=n("a"),Ae=s("TabFact"),Oe=s(", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=n("a"),Ps=s("Understanding tables with intermediate pre-training"),Ss=s(" by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),ut=d(),ft=n("img"),gt=d(),_t=n("small"),Ds=s("TAPAS architecture. Taken from the "),tt=n("a"),Ns=s("original blog post"),Os=s("."),Ke=d(),Pe=n("p"),Ls=s("This model was contributed by "),yt=n("a"),ke=s("nielsr"),kt=s(". The Tensorflow version of this model was contributed by "),qt=n("a"),Qs=s("kamalkraj"),jt=s(". The original code can be found "),$t=n("a"),Is=s("here"),Et=s("."),Ts=d(),Gt=n("p"),Ft=s("Tips:"),bs=d(),Ye=n("ul"),$e=n("li"),Ws=s("TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),At=n("code"),ae=s("reset_position_index_per_cell"),nt=s(" parameter of "),Bt=n("a"),Hs=s("TapasConfig"),zt=s(", which is set to "),ns=n("code"),Us=s("True"),xt=s(" by default. The default versions of the models available on the "),Ct=n("a"),Rs=s("hub"),Mt=s(" all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),os=n("code"),Gs=s('revision="no_reset"'),Pt=s(" when calling the "),rs=n("code"),Bs=s("from_pretrained()"),St=s(" method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),Vs=d(),Le=n("li"),Dt=s("TAPAS is based on BERT, so "),is=n("code"),Ks=s("TAPAS-base"),Nt=s(" for example corresponds to a "),ls=n("code"),Ys=s("BERT-base"),ds=s(" architecture. Of course, "),Ue=n("code"),ps=s("TAPAS-large"),Ee=s(" will result in the best performance (the results reported in the paper are from "),cs=n("code"),ot=s("TAPAS-large"),Js=s("). Results of the various sized models are shown on the "),Ot=n("a"),Lt=s("original Github repository"),Xs=s("."),Zs=d(),Re=n("li"),ea=s("TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),hs=n("code"),ms=s("prev_labels"),et=s(" token type ids can be overwritten by the predicted "),Qt=n("code"),j=s("labels"),J=s(" of the model to the previous question. See \u201CUsage\u201D section for more info."),Aa=d(),ta=n("li"),za=s("TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),ca=d(),It=n("h2"),st=n("a"),sa=n("span"),$(rt.$$.fragment),xa=d(),aa=n("span"),Ca=s("Usage: fine-tuning"),ha=d(),Ie=n("p"),us=s("Here we explain how you can fine-tune "),vs=n("a"),Ge=s("TapasForQuestionAnswering"),Ma=s(" on your own dataset."),ma=d(),ws=n("p"),na=n("strong"),fs=s("STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),ua=d(),fe=n("p"),Pa=s("Basically, there are 3 different ways in which one can fine-tune "),ys=n("a"),Sa=s("TapasForQuestionAnswering"),Da=s(", corresponding to the different datasets on which Tapas was fine-tuned:"),fa=d(),Tt=n("ol"),oa=n("li"),gs=s("SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),Na=d(),Fe=n("li"),Oa=s("WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ra=n("strong"),La=s("weak supervision"),Qa=s(", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Ia=d(),he=n("li"),Wa=s("WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ia=n("strong"),Ha=s("strong supervision"),Ua=s(". Here, learning the appropriate aggregation operator is much easier."),ga=d(),ks=n("p"),Ra=s("To summarize:"),_a=d(),Ce=n("table"),la=n("thead"),Wt=n("tr"),da=n("th"),Xi=n("strong"),Sc=s("Task"),Dc=d(),Zi=n("th"),el=n("strong"),Nc=s("Example dataset"),Oc=d(),tl=n("th"),sl=n("strong"),Lc=s("Description"),Qc=d(),Ga=n("tbody"),Ba=n("tr"),al=n("td"),Ic=s("Conversational"),Wc=d(),nl=n("td"),Hc=s("SQA"),Uc=d(),ol=n("td"),Rc=s("Conversational, only cell selection questions"),Gc=d(),Va=n("tr"),rl=n("td"),Bc=s("Weak supervision for aggregation"),Vc=d(),il=n("td"),Kc=s("WTQ"),Yc=d(),ll=n("td"),Jc=s("Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Xc=d(),Ka=n("tr"),dl=n("td"),Zc=s("Strong supervision for aggregation"),eh=d(),pl=n("td"),th=s("WikiSQL-supervised"),sh=d(),cl=n("td"),ah=s("Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),np=d(),$(qn.$$.fragment),op=d(),jn=n("p"),nh=s("What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),lo=n("a"),oh=s("here"),rh=s(" for more info."),rp=d(),$n=n("p"),ih=s("For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),po=n("a"),lh=s("here"),dh=s("."),ip=d(),Ur=n("p"),hl=n("strong"),ph=s("STEP 2: Prepare your data in the SQA format"),lp=d(),En=n("p"),ch=s("Second, no matter what you picked above, you should prepare your dataset in the "),co=n("a"),hh=s("SQA"),mh=s(" format. This format is a TSV/CSV file with the following columns:"),dp=d(),We=n("ul"),Rr=n("li"),ml=n("code"),uh=s("id"),fh=s(": optional, id of the table-question pair, for bookkeeping purposes."),gh=d(),Gr=n("li"),ul=n("code"),_h=s("annotator"),Th=s(": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),bh=d(),Br=n("li"),fl=n("code"),vh=s("position"),wh=s(": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),yh=d(),Vr=n("li"),gl=n("code"),kh=s("question"),qh=s(": string"),jh=d(),Kr=n("li"),_l=n("code"),$h=s("table_file"),Eh=s(": string, name of a csv file containing the tabular data"),Fh=d(),Yr=n("li"),Tl=n("code"),Ah=s("answer_coordinates"),zh=s(": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),xh=d(),Jr=n("li"),bl=n("code"),Ch=s("answer_text"),Mh=s(": list of one or more strings (each string being a cell value that is part of the answer)"),Ph=d(),Xr=n("li"),vl=n("code"),Sh=s("aggregation_label"),Dh=s(": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Nh=d(),Zr=n("li"),wl=n("code"),Oh=s("float_answer"),Lh=s(": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),pp=d(),bt=n("p"),Qh=s("The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),ho=n("a"),Ih=s("here"),Wh=s(". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),mo=n("a"),Hh=s("here"),Uh=s(". Interestingly, these conversion scripts are not perfect (the "),yl=n("code"),Rh=s("answer_coordinates"),Gh=s(" and "),kl=n("code"),Bh=s("float_answer"),Vh=s(" fields are populated based on the "),ql=n("code"),Kh=s("answer_text"),Yh=s("), meaning that WTQ and WikiSQL results could actually be improved."),cp=d(),ei=n("p"),jl=n("strong"),Jh=s("STEP 3: Convert your data into tensors using TapasTokenizer"),hp=d(),$(Fn.$$.fragment),mp=d(),Se=n("p"),Xh=s("Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),$l=n("strong"),Zh=s("not conversational"),em=s(". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),El=n("code"),tm=s("queries"),sm=s(", "),Fl=n("code"),am=s("answer_coordinates"),nm=s(" and "),Al=n("code"),om=s("answer_text"),rm=s(" per table (in the order of their "),zl=n("code"),im=s("position"),lm=s(`
index) and batch encode each table with its questions. This will make sure that the `),xl=n("code"),dm=s("prev_labels"),pm=s(" token types (see docs of "),ti=n("a"),cm=s("TapasTokenizer"),hm=s(") are set correctly. See "),uo=n("a"),mm=s("this notebook"),um=s(" for more info. See "),fo=n("a"),fm=s("this notebook"),gm=s(" for more info regarding using the TensorFlow model."),up=d(),si=n("p"),_m=s("**STEP 4: Train (fine-tune) the model"),fp=d(),$(An.$$.fragment),gp=d(),Ya=n("h2"),zn=n("a"),Cl=n("span"),$(go.$$.fragment),Tm=d(),Ml=n("span"),bm=s("Usage: inference"),_p=d(),$(xn.$$.fragment),Tp=d(),vt=n("p"),vm=s("In case of a conversational set-up, then each table-question pair must be provided "),Pl=n("strong"),wm=s("sequentially"),ym=s(" to the model, such that the "),Sl=n("code"),km=s("prev_labels"),qm=s(" token types can be overwritten by the predicted "),Dl=n("code"),jm=s("labels"),$m=s(" of the previous table-question pair. Again, more info can be found in "),_o=n("a"),Em=s("this notebook"),Fm=s(" (for PyTorch) and "),To=n("a"),Am=s("this notebook"),zm=s(" (for TensorFlow)."),bp=d(),Ja=n("h2"),Cn=n("a"),Nl=n("span"),$(bo.$$.fragment),xm=d(),Ol=n("span"),Cm=s("TAPAS specific outputs"),vp=d(),Xa=n("div"),$(vo.$$.fragment),Mm=d(),wo=n("p"),Pm=s("Output type of "),ai=n("a"),Sm=s("TapasForQuestionAnswering"),Dm=s("."),wp=d(),Za=n("h2"),Mn=n("a"),Ll=n("span"),$(yo.$$.fragment),Nm=d(),Ql=n("span"),Om=s("TapasConfig"),yp=d(),it=n("div"),$(ko.$$.fragment),Lm=d(),en=n("p"),Qm=s("This is the configuration class to store the configuration of a "),ni=n("a"),Im=s("TapasModel"),Wm=s(`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS
`),qo=n("a"),Hm=s("google/tapas-base-finetuned-sqa"),Um=s(" architecture."),Rm=d(),tn=n("p"),Gm=s("Configuration objects inherit from "),Il=n("code"),Bm=s("PreTrainedConfig"),Vm=s(` and can be used to control the model outputs. Read the
documentation from `),oi=n("a"),Km=s("PretrainedConfig"),Ym=s(" for more information."),Jm=d(),jo=n("p"),Xm=s(`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),$o=n("a"),Zm=s("https://github.com/google-research/tapas/tree/master"),eu=s("."),tu=d(),Wl=n("p"),su=s("Example:"),au=d(),$(Eo.$$.fragment),kp=d(),sn=n("h2"),Pn=n("a"),Hl=n("span"),$(Fo.$$.fragment),nu=d(),Ul=n("span"),ou=s("TapasTokenizer"),qp=d(),Be=n("div"),$(Ao.$$.fragment),ru=d(),Rl=n("p"),iu=s(`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),lu=d(),Qe=n("p"),du=s("This tokenizer inherits from "),ri=n("a"),pu=s("PreTrainedTokenizer"),cu=s(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),ii=n("a"),hu=s("TapasTokenizer"),mu=s(` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Gl=n("code"),uu=s("segment_ids"),fu=s(`,
`),Bl=n("code"),gu=s("column_ids"),_u=s(", "),Vl=n("code"),Tu=s("row_ids"),bu=s(", "),Kl=n("code"),vu=s("prev_labels"),wu=s(", "),Yl=n("code"),yu=s("column_ranks"),ku=s(", "),Jl=n("code"),qu=s("inv_column_ranks"),ju=s(" and "),Xl=n("code"),$u=s("numeric_relations"),Eu=s(":"),Fu=d(),lt=n("ul"),Zl=n("li"),Au=s(`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),zu=d(),ed=n("li"),xu=s(`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),Cu=d(),td=n("li"),Mu=s(`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),Pu=d(),sd=n("li"),Su=s(`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Du=d(),ad=n("li"),Nu=s(`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),Ou=d(),nd=n("li"),Lu=s(`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),Qu=d(),od=n("li"),Iu=s(`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),Wu=d(),li=n("p"),di=n("a"),Hu=s("TapasTokenizer"),Uu=s(` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),Ru=d(),Sn=n("div"),$(zo.$$.fragment),Gu=d(),rd=n("p"),Bu=s("Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),Vu=d(),Ta=n("div"),$(xo.$$.fragment),Ku=d(),Co=n("p"),Yu=s("Converts logits of "),pi=n("a"),Ju=s("TapasForQuestionAnswering"),Xu=s(` to actual predicted answer coordinates and optional
aggregation indices.`),Zu=d(),Mo=n("p"),ef=s(`The original implementation, on which this function is based, can be found
`),Po=n("a"),tf=s("here"),sf=s("."),af=d(),ci=n("div"),$(So.$$.fragment),jp=d(),an=n("h2"),Dn=n("a"),id=n("span"),$(Do.$$.fragment),nf=d(),ld=n("span"),of=s("TapasModel"),$p=d(),dt=n("div"),$(No.$$.fragment),rf=d(),Oo=n("p"),lf=s(`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),hi=n("a"),df=s("PreTrainedModel"),pf=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cf=d(),Lo=n("p"),hf=s("This model is also a PyTorch "),Qo=n("a"),mf=s("torch.nn.Module"),uf=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ff=d(),Io=n("p"),gf=s("This class is a small change compared to "),mi=n("a"),_f=s("BertModel"),Tf=s(", taking into account the additional token type ids."),bf=d(),Wo=n("p"),vf=s(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Ho=n("a"),wf=s(`Attention is
all you need`),yf=s(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),kf=d(),Vt=n("div"),$(Uo.$$.fragment),qf=d(),nn=n("p"),jf=s("The "),ui=n("a"),$f=s("TapasModel"),Ef=s(" forward method, overrides the "),dd=n("code"),Ff=s("__call__"),Af=s(" special method."),zf=d(),$(Nn.$$.fragment),xf=d(),pd=n("p"),Cf=s("Examples:"),Mf=d(),$(Ro.$$.fragment),Ep=d(),on=n("h2"),On=n("a"),cd=n("span"),$(Go.$$.fragment),Pf=d(),hd=n("span"),Sf=s("TapasForMaskedLM"),Fp=d(),_s=n("div"),$(Bo.$$.fragment),Df=d(),rn=n("p"),Nf=s("Tapas Model with a "),md=n("code"),Of=s("language modeling"),Lf=s(` head on top.
This model inherits from `),fi=n("a"),Qf=s("PreTrainedModel"),If=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wf=d(),Vo=n("p"),Hf=s("This model is also a PyTorch "),Ko=n("a"),Uf=s("torch.nn.Module"),Rf=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gf=d(),Kt=n("div"),$(Yo.$$.fragment),Bf=d(),ln=n("p"),Vf=s("The "),gi=n("a"),Kf=s("TapasForMaskedLM"),Yf=s(" forward method, overrides the "),ud=n("code"),Jf=s("__call__"),Xf=s(" special method."),Zf=d(),$(Ln.$$.fragment),eg=d(),fd=n("p"),tg=s("Examples:"),sg=d(),$(Jo.$$.fragment),Ap=d(),dn=n("h2"),Qn=n("a"),gd=n("span"),$(Xo.$$.fragment),ag=d(),_d=n("span"),ng=s("TapasForSequenceClassification"),zp=d(),Ht=n("div"),$(Zo.$$.fragment),og=d(),Td=n("p"),rg=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),ig=d(),er=n("p"),lg=s("This model inherits from "),_i=n("a"),dg=s("PreTrainedModel"),pg=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),cg=d(),tr=n("p"),hg=s("This model is also a PyTorch "),sr=n("a"),mg=s("torch.nn.Module"),ug=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fg=d(),Yt=n("div"),$(ar.$$.fragment),gg=d(),pn=n("p"),_g=s("The "),Ti=n("a"),Tg=s("TapasForSequenceClassification"),bg=s(" forward method, overrides the "),bd=n("code"),vg=s("__call__"),wg=s(" special method."),yg=d(),$(In.$$.fragment),kg=d(),vd=n("p"),qg=s("Examples:"),jg=d(),$(nr.$$.fragment),xp=d(),cn=n("h2"),Wn=n("a"),wd=n("span"),$(or.$$.fragment),$g=d(),yd=n("span"),Eg=s("TapasForQuestionAnswering"),Cp=d(),Ut=n("div"),$(rr.$$.fragment),Fg=d(),hn=n("p"),Ag=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),kd=n("code"),zg=s("logits"),xg=s(" and optional "),qd=n("code"),Cg=s("logits_aggregation"),Mg=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Pg=d(),ir=n("p"),Sg=s("This model inherits from "),bi=n("a"),Dg=s("PreTrainedModel"),Ng=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Og=d(),lr=n("p"),Lg=s("This model is also a PyTorch "),dr=n("a"),Qg=s("torch.nn.Module"),Ig=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wg=d(),Jt=n("div"),$(pr.$$.fragment),Hg=d(),mn=n("p"),Ug=s("The "),vi=n("a"),Rg=s("TapasForQuestionAnswering"),Gg=s(" forward method, overrides the "),jd=n("code"),Bg=s("__call__"),Vg=s(" special method."),Kg=d(),$(Hn.$$.fragment),Yg=d(),$d=n("p"),Jg=s("Examples:"),Xg=d(),$(cr.$$.fragment),Mp=d(),un=n("h2"),Un=n("a"),Ed=n("span"),$(hr.$$.fragment),Zg=d(),Fd=n("span"),e_=s("TFTapasModel"),Pp=d(),pt=n("div"),$(mr.$$.fragment),t_=d(),Ad=n("p"),s_=s("The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),a_=d(),ur=n("p"),n_=s("This model inherits from "),wi=n("a"),o_=s("TFPreTrainedModel"),r_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),i_=d(),fr=n("p"),l_=s("This model is also a "),gr=n("a"),d_=s("tf.keras.Model"),p_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),c_=d(),$(Rn.$$.fragment),h_=d(),Xt=n("div"),$(_r.$$.fragment),m_=d(),fn=n("p"),u_=s("The "),yi=n("a"),f_=s("TFTapasModel"),g_=s(" forward method, overrides the "),zd=n("code"),__=s("__call__"),T_=s(" special method."),b_=d(),$(Gn.$$.fragment),v_=d(),xd=n("p"),w_=s("Examples:"),y_=d(),$(Tr.$$.fragment),Sp=d(),gn=n("h2"),Bn=n("a"),Cd=n("span"),$(br.$$.fragment),k_=d(),Md=n("span"),q_=s("TFTapasForMaskedLM"),Dp=d(),ct=n("div"),$(vr.$$.fragment),j_=d(),wr=n("p"),$_=s("Tapas Model with a "),Pd=n("code"),E_=s("language modeling"),F_=s(" head on top."),A_=d(),yr=n("p"),z_=s("This model inherits from "),ki=n("a"),x_=s("TFPreTrainedModel"),C_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),M_=d(),kr=n("p"),P_=s("This model is also a "),qr=n("a"),S_=s("tf.keras.Model"),D_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),N_=d(),$(Vn.$$.fragment),O_=d(),Zt=n("div"),$(jr.$$.fragment),L_=d(),_n=n("p"),Q_=s("The "),qi=n("a"),I_=s("TFTapasForMaskedLM"),W_=s(" forward method, overrides the "),Sd=n("code"),H_=s("__call__"),U_=s(" special method."),R_=d(),$(Kn.$$.fragment),G_=d(),Dd=n("p"),B_=s("Examples:"),V_=d(),$($r.$$.fragment),Np=d(),Tn=n("h2"),Yn=n("a"),Nd=n("span"),$(Er.$$.fragment),K_=d(),Od=n("span"),Y_=s("TFTapasForSequenceClassification"),Op=d(),ht=n("div"),$(Fr.$$.fragment),J_=d(),Ld=n("p"),X_=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Z_=d(),Ar=n("p"),eT=s("This model inherits from "),ji=n("a"),tT=s("TFPreTrainedModel"),sT=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),aT=d(),zr=n("p"),nT=s("This model is also a "),xr=n("a"),oT=s("tf.keras.Model"),rT=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),iT=d(),$(Jn.$$.fragment),lT=d(),es=n("div"),$(Cr.$$.fragment),dT=d(),bn=n("p"),pT=s("The "),$i=n("a"),cT=s("TFTapasForSequenceClassification"),hT=s(" forward method, overrides the "),Qd=n("code"),mT=s("__call__"),uT=s(" special method."),fT=d(),$(Xn.$$.fragment),gT=d(),Id=n("p"),_T=s("Examples:"),TT=d(),$(Mr.$$.fragment),Lp=d(),vn=n("h2"),Zn=n("a"),Wd=n("span"),$(Pr.$$.fragment),bT=d(),Hd=n("span"),vT=s("TFTapasForQuestionAnswering"),Qp=d(),mt=n("div"),$(Sr.$$.fragment),wT=d(),wn=n("p"),yT=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Ud=n("code"),kT=s("logits"),qT=s(" and optional "),Rd=n("code"),jT=s("logits_aggregation"),$T=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),ET=d(),Dr=n("p"),FT=s("This model inherits from "),Ei=n("a"),AT=s("TFPreTrainedModel"),zT=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xT=d(),Nr=n("p"),CT=s("This model is also a "),Or=n("a"),MT=s("tf.keras.Model"),PT=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ST=d(),$(eo.$$.fragment),DT=d(),ts=n("div"),$(Lr.$$.fragment),NT=d(),yn=n("p"),OT=s("The "),Fi=n("a"),LT=s("TFTapasForQuestionAnswering"),QT=s(" forward method, overrides the "),Gd=n("code"),IT=s("__call__"),WT=s(" special method."),HT=d(),$(to.$$.fragment),UT=d(),Bd=n("p"),RT=s("Examples:"),GT=d(),$(Qr.$$.fragment),this.h()},l(i){const u=Jy('[data-svelte="svelte-1phssyn"]',document.head);l=o(u,"META",{name:!0,content:!0}),u.forEach(t),_=p(i),c=o(i,"H1",{class:!0});var Ir=r(c);f=o(Ir,"A",{id:!0,class:!0,href:!0});var Vd=r(f);b=o(Vd,"SPAN",{});var Kd=r(b);E(v.$$.fragment,Kd),Kd.forEach(t),Vd.forEach(t),T=p(Ir),k=o(Ir,"SPAN",{});var Yd=r(k);y=a(Yd,"TAPAS"),Yd.forEach(t),Ir.forEach(t),D=p(i),q=o(i,"H2",{class:!0});var Wr=r(q);H=o(Wr,"A",{id:!0,class:!0,href:!0});var Jd=r(H);B=o(Jd,"SPAN",{});var Xd=r(B);E(V.$$.fragment,Xd),Xd.forEach(t),Jd.forEach(t),R=p(Wr),K=o(Wr,"SPAN",{});var Zd=r(K);re=a(Zd,"Overview"),Zd.forEach(t),Wr.forEach(t),I=p(i),O=o(i,"P",{});var Hr=r(O);w=a(Hr,"The TAPAS model was proposed in "),M=o(Hr,"A",{href:!0,rel:!0});var ep=r(M);G=a(ep,"TAPAS: Weakly Supervised Table Parsing via Pre-training"),ep.forEach(t),C=a(Hr,`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),Hr.forEach(t),N=p(i),ee=o(i,"P",{});var tp=r(ee);te=a(tp,"For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),tp.forEach(t),ce=p(i),ne=o(i,"UL",{});var kn=r(ne);se=o(kn,"LI",{});var Ai=r(se);P=o(Ai,"A",{href:!0,rel:!0});var sp=r(P);L=a(sp,"SQA"),sp.forEach(t),W=a(Ai," (Sequential Question Answering by Microsoft)"),Ai.forEach(t),X=p(kn),Q=o(kn,"LI",{});var zi=r(Q);Y=o(zi,"A",{href:!0,rel:!0});var ap=r(Y);ge=a(ap,"WTQ"),ap.forEach(t),me=a(zi," (Wiki Table Questions by Stanford University)"),zi.forEach(t),_e=p(kn),ue=o(kn,"LI",{});var BT=r(ue);oe=o(BT,"A",{href:!0,rel:!0});var nb=r(oe);qe=a(nb,"WikiSQL"),nb.forEach(t),ie=a(BT," (by Salesforce)."),BT.forEach(t),kn.forEach(t),ve=p(i),g=o(i,"P",{});var ob=r(g);S=a(ob,"It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),ob.forEach(t),be=p(i),ze=o(i,"P",{});var rb=r(ze);we=a(rb,"The abstract from the paper is the following:"),rb.forEach(t),le=p(i),xe=o(i,"P",{});var ib=r(xe);Me=o(ib,"EM",{});var lb=r(Me);Z=a(lb,"Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),lb.forEach(t),ib.forEach(t),de=p(i),pe=o(i,"P",{});var so=r(pe);De=a(so,"In addition, the authors have further pre-trained TAPAS to recognize "),je=o(so,"STRONG",{});var db=r(je);Te=a(db,"table entailment"),db.forEach(t),Ne=a(so,", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),ye=o(so,"A",{href:!0,rel:!0});var pb=r(ye);Ae=a(pb,"TabFact"),pb.forEach(t),Oe=a(so,", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),Ze=o(so,"A",{href:!0,rel:!0});var cb=r(Ze);Ps=a(cb,"Understanding tables with intermediate pre-training"),cb.forEach(t),Ss=a(so," by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),so.forEach(t),ut=p(i),ft=o(i,"IMG",{src:!0,alt:!0,width:!0}),gt=p(i),_t=o(i,"SMALL",{});var Wp=r(_t);Ds=a(Wp,"TAPAS architecture. Taken from the "),tt=o(Wp,"A",{href:!0});var hb=r(tt);Ns=a(hb,"original blog post"),hb.forEach(t),Os=a(Wp,"."),Wp.forEach(t),Ke=p(i),Pe=o(i,"P",{});var ao=r(Pe);Ls=a(ao,"This model was contributed by "),yt=o(ao,"A",{href:!0,rel:!0});var mb=r(yt);ke=a(mb,"nielsr"),mb.forEach(t),kt=a(ao,". The Tensorflow version of this model was contributed by "),qt=o(ao,"A",{href:!0,rel:!0});var ub=r(qt);Qs=a(ub,"kamalkraj"),ub.forEach(t),jt=a(ao,". The original code can be found "),$t=o(ao,"A",{href:!0,rel:!0});var fb=r($t);Is=a(fb,"here"),fb.forEach(t),Et=a(ao,"."),ao.forEach(t),Ts=p(i),Gt=o(i,"P",{});var gb=r(Gt);Ft=a(gb,"Tips:"),gb.forEach(t),bs=p(i),Ye=o(i,"UL",{});var no=r(Ye);$e=o(no,"LI",{});var ss=r($e);Ws=a(ss,"TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),At=o(ss,"CODE",{});var _b=r(At);ae=a(_b,"reset_position_index_per_cell"),_b.forEach(t),nt=a(ss," parameter of "),Bt=o(ss,"A",{href:!0});var Tb=r(Bt);Hs=a(Tb,"TapasConfig"),Tb.forEach(t),zt=a(ss,", which is set to "),ns=o(ss,"CODE",{});var bb=r(ns);Us=a(bb,"True"),bb.forEach(t),xt=a(ss," by default. The default versions of the models available on the "),Ct=o(ss,"A",{href:!0,rel:!0});var vb=r(Ct);Rs=a(vb,"hub"),vb.forEach(t),Mt=a(ss," all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),os=o(ss,"CODE",{});var wb=r(os);Gs=a(wb,'revision="no_reset"'),wb.forEach(t),Pt=a(ss," when calling the "),rs=o(ss,"CODE",{});var yb=r(rs);Bs=a(yb,"from_pretrained()"),yb.forEach(t),St=a(ss," method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),ss.forEach(t),Vs=p(no),Le=o(no,"LI",{});var qs=r(Le);Dt=a(qs,"TAPAS is based on BERT, so "),is=o(qs,"CODE",{});var kb=r(is);Ks=a(kb,"TAPAS-base"),kb.forEach(t),Nt=a(qs," for example corresponds to a "),ls=o(qs,"CODE",{});var qb=r(ls);Ys=a(qb,"BERT-base"),qb.forEach(t),ds=a(qs," architecture. Of course, "),Ue=o(qs,"CODE",{});var jb=r(Ue);ps=a(jb,"TAPAS-large"),jb.forEach(t),Ee=a(qs," will result in the best performance (the results reported in the paper are from "),cs=o(qs,"CODE",{});var $b=r(cs);ot=a($b,"TAPAS-large"),$b.forEach(t),Js=a(qs,"). Results of the various sized models are shown on the "),Ot=o(qs,"A",{href:!0,rel:!0});var Eb=r(Ot);Lt=a(Eb,"original Github repository"),Eb.forEach(t),Xs=a(qs,"."),qs.forEach(t),Zs=p(no),Re=o(no,"LI",{});var xi=r(Re);ea=a(xi,"TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),hs=o(xi,"CODE",{});var Fb=r(hs);ms=a(Fb,"prev_labels"),Fb.forEach(t),et=a(xi," token type ids can be overwritten by the predicted "),Qt=o(xi,"CODE",{});var Ab=r(Qt);j=a(Ab,"labels"),Ab.forEach(t),J=a(xi," of the model to the previous question. See \u201CUsage\u201D section for more info."),xi.forEach(t),Aa=p(no),ta=o(no,"LI",{});var zb=r(ta);za=a(zb,"TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),zb.forEach(t),no.forEach(t),ca=p(i),It=o(i,"H2",{class:!0});var Hp=r(It);st=o(Hp,"A",{id:!0,class:!0,href:!0});var xb=r(st);sa=o(xb,"SPAN",{});var Cb=r(sa);E(rt.$$.fragment,Cb),Cb.forEach(t),xb.forEach(t),xa=p(Hp),aa=o(Hp,"SPAN",{});var Mb=r(aa);Ca=a(Mb,"Usage: fine-tuning"),Mb.forEach(t),Hp.forEach(t),ha=p(i),Ie=o(i,"P",{});var Up=r(Ie);us=a(Up,"Here we explain how you can fine-tune "),vs=o(Up,"A",{href:!0});var Pb=r(vs);Ge=a(Pb,"TapasForQuestionAnswering"),Pb.forEach(t),Ma=a(Up," on your own dataset."),Up.forEach(t),ma=p(i),ws=o(i,"P",{});var Sb=r(ws);na=o(Sb,"STRONG",{});var Db=r(na);fs=a(Db,"STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),Db.forEach(t),Sb.forEach(t),ua=p(i),fe=o(i,"P",{});var Rp=r(fe);Pa=a(Rp,"Basically, there are 3 different ways in which one can fine-tune "),ys=o(Rp,"A",{href:!0});var Nb=r(ys);Sa=a(Nb,"TapasForQuestionAnswering"),Nb.forEach(t),Da=a(Rp,", corresponding to the different datasets on which Tapas was fine-tuned:"),Rp.forEach(t),fa=p(i),Tt=o(i,"OL",{});var Ci=r(Tt);oa=o(Ci,"LI",{});var Ob=r(oa);gs=a(Ob,"SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),Ob.forEach(t),Na=p(Ci),Fe=o(Ci,"LI",{});var Gp=r(Fe);Oa=a(Gp,"WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ra=o(Gp,"STRONG",{});var Lb=r(ra);La=a(Lb,"weak supervision"),Lb.forEach(t),Qa=a(Gp,", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Gp.forEach(t),Ia=p(Ci),he=o(Ci,"LI",{});var Bp=r(he);Wa=a(Bp,"WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ia=o(Bp,"STRONG",{});var Qb=r(ia);Ha=a(Qb,"strong supervision"),Qb.forEach(t),Ua=a(Bp,". Here, learning the appropriate aggregation operator is much easier."),Bp.forEach(t),Ci.forEach(t),ga=p(i),ks=o(i,"P",{});var Ib=r(ks);Ra=a(Ib,"To summarize:"),Ib.forEach(t),_a=p(i),Ce=o(i,"TABLE",{});var Vp=r(Ce);la=o(Vp,"THEAD",{});var Wb=r(la);Wt=o(Wb,"TR",{});var Mi=r(Wt);da=o(Mi,"TH",{});var Hb=r(da);Xi=o(Hb,"STRONG",{});var Ub=r(Xi);Sc=a(Ub,"Task"),Ub.forEach(t),Hb.forEach(t),Dc=p(Mi),Zi=o(Mi,"TH",{});var Rb=r(Zi);el=o(Rb,"STRONG",{});var Gb=r(el);Nc=a(Gb,"Example dataset"),Gb.forEach(t),Rb.forEach(t),Oc=p(Mi),tl=o(Mi,"TH",{});var Bb=r(tl);sl=o(Bb,"STRONG",{});var Vb=r(sl);Lc=a(Vb,"Description"),Vb.forEach(t),Bb.forEach(t),Mi.forEach(t),Wb.forEach(t),Qc=p(Vp),Ga=o(Vp,"TBODY",{});var Pi=r(Ga);Ba=o(Pi,"TR",{});var Si=r(Ba);al=o(Si,"TD",{});var Kb=r(al);Ic=a(Kb,"Conversational"),Kb.forEach(t),Wc=p(Si),nl=o(Si,"TD",{});var Yb=r(nl);Hc=a(Yb,"SQA"),Yb.forEach(t),Uc=p(Si),ol=o(Si,"TD",{});var Jb=r(ol);Rc=a(Jb,"Conversational, only cell selection questions"),Jb.forEach(t),Si.forEach(t),Gc=p(Pi),Va=o(Pi,"TR",{});var Di=r(Va);rl=o(Di,"TD",{});var Xb=r(rl);Bc=a(Xb,"Weak supervision for aggregation"),Xb.forEach(t),Vc=p(Di),il=o(Di,"TD",{});var Zb=r(il);Kc=a(Zb,"WTQ"),Zb.forEach(t),Yc=p(Di),ll=o(Di,"TD",{});var ev=r(ll);Jc=a(ev,"Questions might involve aggregation, and the model must learn this given only the answer as supervision"),ev.forEach(t),Di.forEach(t),Xc=p(Pi),Ka=o(Pi,"TR",{});var Ni=r(Ka);dl=o(Ni,"TD",{});var tv=r(dl);Zc=a(tv,"Strong supervision for aggregation"),tv.forEach(t),eh=p(Ni),pl=o(Ni,"TD",{});var sv=r(pl);th=a(sv,"WikiSQL-supervised"),sv.forEach(t),sh=p(Ni),cl=o(Ni,"TD",{});var av=r(cl);ah=a(av,"Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),av.forEach(t),Ni.forEach(t),Pi.forEach(t),Vp.forEach(t),np=p(i),E(qn.$$.fragment,i),op=p(i),jn=o(i,"P",{});var Kp=r(jn);nh=a(Kp,"What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),lo=o(Kp,"A",{href:!0,rel:!0});var nv=r(lo);oh=a(nv,"here"),nv.forEach(t),rh=a(Kp," for more info."),Kp.forEach(t),rp=p(i),$n=o(i,"P",{});var Yp=r($n);ih=a(Yp,"For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),po=o(Yp,"A",{href:!0,rel:!0});var ov=r(po);lh=a(ov,"here"),ov.forEach(t),dh=a(Yp,"."),Yp.forEach(t),ip=p(i),Ur=o(i,"P",{});var rv=r(Ur);hl=o(rv,"STRONG",{});var iv=r(hl);ph=a(iv,"STEP 2: Prepare your data in the SQA format"),iv.forEach(t),rv.forEach(t),lp=p(i),En=o(i,"P",{});var Jp=r(En);ch=a(Jp,"Second, no matter what you picked above, you should prepare your dataset in the "),co=o(Jp,"A",{href:!0,rel:!0});var lv=r(co);hh=a(lv,"SQA"),lv.forEach(t),mh=a(Jp," format. This format is a TSV/CSV file with the following columns:"),Jp.forEach(t),dp=p(i),We=o(i,"UL",{});var at=r(We);Rr=o(at,"LI",{});var VT=r(Rr);ml=o(VT,"CODE",{});var dv=r(ml);uh=a(dv,"id"),dv.forEach(t),fh=a(VT,": optional, id of the table-question pair, for bookkeeping purposes."),VT.forEach(t),gh=p(at),Gr=o(at,"LI",{});var KT=r(Gr);ul=o(KT,"CODE",{});var pv=r(ul);_h=a(pv,"annotator"),pv.forEach(t),Th=a(KT,": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),KT.forEach(t),bh=p(at),Br=o(at,"LI",{});var YT=r(Br);fl=o(YT,"CODE",{});var cv=r(fl);vh=a(cv,"position"),cv.forEach(t),wh=a(YT,": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),YT.forEach(t),yh=p(at),Vr=o(at,"LI",{});var JT=r(Vr);gl=o(JT,"CODE",{});var hv=r(gl);kh=a(hv,"question"),hv.forEach(t),qh=a(JT,": string"),JT.forEach(t),jh=p(at),Kr=o(at,"LI",{});var XT=r(Kr);_l=o(XT,"CODE",{});var mv=r(_l);$h=a(mv,"table_file"),mv.forEach(t),Eh=a(XT,": string, name of a csv file containing the tabular data"),XT.forEach(t),Fh=p(at),Yr=o(at,"LI",{});var ZT=r(Yr);Tl=o(ZT,"CODE",{});var uv=r(Tl);Ah=a(uv,"answer_coordinates"),uv.forEach(t),zh=a(ZT,": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),ZT.forEach(t),xh=p(at),Jr=o(at,"LI",{});var eb=r(Jr);bl=o(eb,"CODE",{});var fv=r(bl);Ch=a(fv,"answer_text"),fv.forEach(t),Mh=a(eb,": list of one or more strings (each string being a cell value that is part of the answer)"),eb.forEach(t),Ph=p(at),Xr=o(at,"LI",{});var tb=r(Xr);vl=o(tb,"CODE",{});var gv=r(vl);Sh=a(gv,"aggregation_label"),gv.forEach(t),Dh=a(tb,": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),tb.forEach(t),Nh=p(at),Zr=o(at,"LI",{});var sb=r(Zr);wl=o(sb,"CODE",{});var _v=r(wl);Oh=a(_v,"float_answer"),_v.forEach(t),Lh=a(sb,": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),sb.forEach(t),at.forEach(t),pp=p(i),bt=o(i,"P",{});var js=r(bt);Qh=a(js,"The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),ho=o(js,"A",{href:!0,rel:!0});var Tv=r(ho);Ih=a(Tv,"here"),Tv.forEach(t),Wh=a(js,". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),mo=o(js,"A",{href:!0,rel:!0});var bv=r(mo);Hh=a(bv,"here"),bv.forEach(t),Uh=a(js,". Interestingly, these conversion scripts are not perfect (the "),yl=o(js,"CODE",{});var vv=r(yl);Rh=a(vv,"answer_coordinates"),vv.forEach(t),Gh=a(js," and "),kl=o(js,"CODE",{});var wv=r(kl);Bh=a(wv,"float_answer"),wv.forEach(t),Vh=a(js," fields are populated based on the "),ql=o(js,"CODE",{});var yv=r(ql);Kh=a(yv,"answer_text"),yv.forEach(t),Yh=a(js,"), meaning that WTQ and WikiSQL results could actually be improved."),js.forEach(t),cp=p(i),ei=o(i,"P",{});var kv=r(ei);jl=o(kv,"STRONG",{});var qv=r(jl);Jh=a(qv,"STEP 3: Convert your data into tensors using TapasTokenizer"),qv.forEach(t),kv.forEach(t),hp=p(i),E(Fn.$$.fragment,i),mp=p(i),Se=o(i,"P",{});var Je=r(Se);Xh=a(Je,"Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),$l=o(Je,"STRONG",{});var jv=r($l);Zh=a(jv,"not conversational"),jv.forEach(t),em=a(Je,". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),El=o(Je,"CODE",{});var $v=r(El);tm=a($v,"queries"),$v.forEach(t),sm=a(Je,", "),Fl=o(Je,"CODE",{});var Ev=r(Fl);am=a(Ev,"answer_coordinates"),Ev.forEach(t),nm=a(Je," and "),Al=o(Je,"CODE",{});var Fv=r(Al);om=a(Fv,"answer_text"),Fv.forEach(t),rm=a(Je," per table (in the order of their "),zl=o(Je,"CODE",{});var Av=r(zl);im=a(Av,"position"),Av.forEach(t),lm=a(Je,`
index) and batch encode each table with its questions. This will make sure that the `),xl=o(Je,"CODE",{});var zv=r(xl);dm=a(zv,"prev_labels"),zv.forEach(t),pm=a(Je," token types (see docs of "),ti=o(Je,"A",{href:!0});var xv=r(ti);cm=a(xv,"TapasTokenizer"),xv.forEach(t),hm=a(Je,") are set correctly. See "),uo=o(Je,"A",{href:!0,rel:!0});var Cv=r(uo);mm=a(Cv,"this notebook"),Cv.forEach(t),um=a(Je," for more info. See "),fo=o(Je,"A",{href:!0,rel:!0});var Mv=r(fo);fm=a(Mv,"this notebook"),Mv.forEach(t),gm=a(Je," for more info regarding using the TensorFlow model."),Je.forEach(t),up=p(i),si=o(i,"P",{});var Pv=r(si);_m=a(Pv,"**STEP 4: Train (fine-tune) the model"),Pv.forEach(t),fp=p(i),E(An.$$.fragment,i),gp=p(i),Ya=o(i,"H2",{class:!0});var Xp=r(Ya);zn=o(Xp,"A",{id:!0,class:!0,href:!0});var Sv=r(zn);Cl=o(Sv,"SPAN",{});var Dv=r(Cl);E(go.$$.fragment,Dv),Dv.forEach(t),Sv.forEach(t),Tm=p(Xp),Ml=o(Xp,"SPAN",{});var Nv=r(Ml);bm=a(Nv,"Usage: inference"),Nv.forEach(t),Xp.forEach(t),_p=p(i),E(xn.$$.fragment,i),Tp=p(i),vt=o(i,"P",{});var $s=r(vt);vm=a($s,"In case of a conversational set-up, then each table-question pair must be provided "),Pl=o($s,"STRONG",{});var Ov=r(Pl);wm=a(Ov,"sequentially"),Ov.forEach(t),ym=a($s," to the model, such that the "),Sl=o($s,"CODE",{});var Lv=r(Sl);km=a(Lv,"prev_labels"),Lv.forEach(t),qm=a($s," token types can be overwritten by the predicted "),Dl=o($s,"CODE",{});var Qv=r(Dl);jm=a(Qv,"labels"),Qv.forEach(t),$m=a($s," of the previous table-question pair. Again, more info can be found in "),_o=o($s,"A",{href:!0,rel:!0});var Iv=r(_o);Em=a(Iv,"this notebook"),Iv.forEach(t),Fm=a($s," (for PyTorch) and "),To=o($s,"A",{href:!0,rel:!0});var Wv=r(To);Am=a(Wv,"this notebook"),Wv.forEach(t),zm=a($s," (for TensorFlow)."),$s.forEach(t),bp=p(i),Ja=o(i,"H2",{class:!0});var Zp=r(Ja);Cn=o(Zp,"A",{id:!0,class:!0,href:!0});var Hv=r(Cn);Nl=o(Hv,"SPAN",{});var Uv=r(Nl);E(bo.$$.fragment,Uv),Uv.forEach(t),Hv.forEach(t),xm=p(Zp),Ol=o(Zp,"SPAN",{});var Rv=r(Ol);Cm=a(Rv,"TAPAS specific outputs"),Rv.forEach(t),Zp.forEach(t),vp=p(i),Xa=o(i,"DIV",{class:!0});var ec=r(Xa);E(vo.$$.fragment,ec),Mm=p(ec),wo=o(ec,"P",{});var tc=r(wo);Pm=a(tc,"Output type of "),ai=o(tc,"A",{href:!0});var Gv=r(ai);Sm=a(Gv,"TapasForQuestionAnswering"),Gv.forEach(t),Dm=a(tc,"."),tc.forEach(t),ec.forEach(t),wp=p(i),Za=o(i,"H2",{class:!0});var sc=r(Za);Mn=o(sc,"A",{id:!0,class:!0,href:!0});var Bv=r(Mn);Ll=o(Bv,"SPAN",{});var Vv=r(Ll);E(yo.$$.fragment,Vv),Vv.forEach(t),Bv.forEach(t),Nm=p(sc),Ql=o(sc,"SPAN",{});var Kv=r(Ql);Om=a(Kv,"TapasConfig"),Kv.forEach(t),sc.forEach(t),yp=p(i),it=o(i,"DIV",{class:!0});var Es=r(it);E(ko.$$.fragment,Es),Lm=p(Es),en=o(Es,"P",{});var Oi=r(en);Qm=a(Oi,"This is the configuration class to store the configuration of a "),ni=o(Oi,"A",{href:!0});var Yv=r(ni);Im=a(Yv,"TapasModel"),Yv.forEach(t),Wm=a(Oi,`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS
`),qo=o(Oi,"A",{href:!0,rel:!0});var Jv=r(qo);Hm=a(Jv,"google/tapas-base-finetuned-sqa"),Jv.forEach(t),Um=a(Oi," architecture."),Oi.forEach(t),Rm=p(Es),tn=o(Es,"P",{});var Li=r(tn);Gm=a(Li,"Configuration objects inherit from "),Il=o(Li,"CODE",{});var Xv=r(Il);Bm=a(Xv,"PreTrainedConfig"),Xv.forEach(t),Vm=a(Li,` and can be used to control the model outputs. Read the
documentation from `),oi=o(Li,"A",{href:!0});var Zv=r(oi);Km=a(Zv,"PretrainedConfig"),Zv.forEach(t),Ym=a(Li," for more information."),Li.forEach(t),Jm=p(Es),jo=o(Es,"P",{});var ac=r(jo);Xm=a(ac,`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),$o=o(ac,"A",{href:!0,rel:!0});var ew=r($o);Zm=a(ew,"https://github.com/google-research/tapas/tree/master"),ew.forEach(t),eu=a(ac,"."),ac.forEach(t),tu=p(Es),Wl=o(Es,"P",{});var tw=r(Wl);su=a(tw,"Example:"),tw.forEach(t),au=p(Es),E(Eo.$$.fragment,Es),Es.forEach(t),kp=p(i),sn=o(i,"H2",{class:!0});var nc=r(sn);Pn=o(nc,"A",{id:!0,class:!0,href:!0});var sw=r(Pn);Hl=o(sw,"SPAN",{});var aw=r(Hl);E(Fo.$$.fragment,aw),aw.forEach(t),sw.forEach(t),nu=p(nc),Ul=o(nc,"SPAN",{});var nw=r(Ul);ou=a(nw,"TapasTokenizer"),nw.forEach(t),nc.forEach(t),qp=p(i),Be=o(i,"DIV",{class:!0});var wt=r(Be);E(Ao.$$.fragment,wt),ru=p(wt),Rl=o(wt,"P",{});var ow=r(Rl);iu=a(ow,`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),ow.forEach(t),lu=p(wt),Qe=o(wt,"P",{});var Xe=r(Qe);du=a(Xe,"This tokenizer inherits from "),ri=o(Xe,"A",{href:!0});var rw=r(ri);pu=a(rw,"PreTrainedTokenizer"),rw.forEach(t),cu=a(Xe,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),ii=o(Xe,"A",{href:!0});var iw=r(ii);hu=a(iw,"TapasTokenizer"),iw.forEach(t),mu=a(Xe,` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Gl=o(Xe,"CODE",{});var lw=r(Gl);uu=a(lw,"segment_ids"),lw.forEach(t),fu=a(Xe,`,
`),Bl=o(Xe,"CODE",{});var dw=r(Bl);gu=a(dw,"column_ids"),dw.forEach(t),_u=a(Xe,", "),Vl=o(Xe,"CODE",{});var pw=r(Vl);Tu=a(pw,"row_ids"),pw.forEach(t),bu=a(Xe,", "),Kl=o(Xe,"CODE",{});var cw=r(Kl);vu=a(cw,"prev_labels"),cw.forEach(t),wu=a(Xe,", "),Yl=o(Xe,"CODE",{});var hw=r(Yl);yu=a(hw,"column_ranks"),hw.forEach(t),ku=a(Xe,", "),Jl=o(Xe,"CODE",{});var mw=r(Jl);qu=a(mw,"inv_column_ranks"),mw.forEach(t),ju=a(Xe," and "),Xl=o(Xe,"CODE",{});var uw=r(Xl);$u=a(uw,"numeric_relations"),uw.forEach(t),Eu=a(Xe,":"),Xe.forEach(t),Fu=p(wt),lt=o(wt,"UL",{});var as=r(lt);Zl=o(as,"LI",{});var fw=r(Zl);Au=a(fw,`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),fw.forEach(t),zu=p(as),ed=o(as,"LI",{});var gw=r(ed);xu=a(gw,`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),gw.forEach(t),Cu=p(as),td=o(as,"LI",{});var _w=r(td);Mu=a(_w,`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),_w.forEach(t),Pu=p(as),sd=o(as,"LI",{});var Tw=r(sd);Su=a(Tw,`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Tw.forEach(t),Du=p(as),ad=o(as,"LI",{});var bw=r(ad);Nu=a(bw,`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),bw.forEach(t),Ou=p(as),nd=o(as,"LI",{});var vw=r(nd);Lu=a(vw,`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),vw.forEach(t),Qu=p(as),od=o(as,"LI",{});var ww=r(od);Iu=a(ww,`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),ww.forEach(t),as.forEach(t),Wu=p(wt),li=o(wt,"P",{});var ab=r(li);di=o(ab,"A",{href:!0});var yw=r(di);Hu=a(yw,"TapasTokenizer"),yw.forEach(t),Uu=a(ab,` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),ab.forEach(t),Ru=p(wt),Sn=o(wt,"DIV",{class:!0});var oc=r(Sn);E(zo.$$.fragment,oc),Gu=p(oc),rd=o(oc,"P",{});var kw=r(rd);Bu=a(kw,"Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),kw.forEach(t),oc.forEach(t),Vu=p(wt),Ta=o(wt,"DIV",{class:!0});var Qi=r(Ta);E(xo.$$.fragment,Qi),Ku=p(Qi),Co=o(Qi,"P",{});var rc=r(Co);Yu=a(rc,"Converts logits of "),pi=o(rc,"A",{href:!0});var qw=r(pi);Ju=a(qw,"TapasForQuestionAnswering"),qw.forEach(t),Xu=a(rc,` to actual predicted answer coordinates and optional
aggregation indices.`),rc.forEach(t),Zu=p(Qi),Mo=o(Qi,"P",{});var ic=r(Mo);ef=a(ic,`The original implementation, on which this function is based, can be found
`),Po=o(ic,"A",{href:!0,rel:!0});var jw=r(Po);tf=a(jw,"here"),jw.forEach(t),sf=a(ic,"."),ic.forEach(t),Qi.forEach(t),af=p(wt),ci=o(wt,"DIV",{class:!0});var $w=r(ci);E(So.$$.fragment,$w),$w.forEach(t),wt.forEach(t),jp=p(i),an=o(i,"H2",{class:!0});var lc=r(an);Dn=o(lc,"A",{id:!0,class:!0,href:!0});var Ew=r(Dn);id=o(Ew,"SPAN",{});var Fw=r(id);E(Do.$$.fragment,Fw),Fw.forEach(t),Ew.forEach(t),nf=p(lc),ld=o(lc,"SPAN",{});var Aw=r(ld);of=a(Aw,"TapasModel"),Aw.forEach(t),lc.forEach(t),$p=p(i),dt=o(i,"DIV",{class:!0});var Fs=r(dt);E(No.$$.fragment,Fs),rf=p(Fs),Oo=o(Fs,"P",{});var dc=r(Oo);lf=a(dc,`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),hi=o(dc,"A",{href:!0});var zw=r(hi);df=a(zw,"PreTrainedModel"),zw.forEach(t),pf=a(dc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dc.forEach(t),cf=p(Fs),Lo=o(Fs,"P",{});var pc=r(Lo);hf=a(pc,"This model is also a PyTorch "),Qo=o(pc,"A",{href:!0,rel:!0});var xw=r(Qo);mf=a(xw,"torch.nn.Module"),xw.forEach(t),uf=a(pc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pc.forEach(t),ff=p(Fs),Io=o(Fs,"P",{});var cc=r(Io);gf=a(cc,"This class is a small change compared to "),mi=o(cc,"A",{href:!0});var Cw=r(mi);_f=a(Cw,"BertModel"),Cw.forEach(t),Tf=a(cc,", taking into account the additional token type ids."),cc.forEach(t),bf=p(Fs),Wo=o(Fs,"P",{});var hc=r(Wo);vf=a(hc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Ho=o(hc,"A",{href:!0,rel:!0});var Mw=r(Ho);wf=a(Mw,`Attention is
all you need`),Mw.forEach(t),yf=a(hc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),hc.forEach(t),kf=p(Fs),Vt=o(Fs,"DIV",{class:!0});var ba=r(Vt);E(Uo.$$.fragment,ba),qf=p(ba),nn=o(ba,"P",{});var Ii=r(nn);jf=a(Ii,"The "),ui=o(Ii,"A",{href:!0});var Pw=r(ui);$f=a(Pw,"TapasModel"),Pw.forEach(t),Ef=a(Ii," forward method, overrides the "),dd=o(Ii,"CODE",{});var Sw=r(dd);Ff=a(Sw,"__call__"),Sw.forEach(t),Af=a(Ii," special method."),Ii.forEach(t),zf=p(ba),E(Nn.$$.fragment,ba),xf=p(ba),pd=o(ba,"P",{});var Dw=r(pd);Cf=a(Dw,"Examples:"),Dw.forEach(t),Mf=p(ba),E(Ro.$$.fragment,ba),ba.forEach(t),Fs.forEach(t),Ep=p(i),on=o(i,"H2",{class:!0});var mc=r(on);On=o(mc,"A",{id:!0,class:!0,href:!0});var Nw=r(On);cd=o(Nw,"SPAN",{});var Ow=r(cd);E(Go.$$.fragment,Ow),Ow.forEach(t),Nw.forEach(t),Pf=p(mc),hd=o(mc,"SPAN",{});var Lw=r(hd);Sf=a(Lw,"TapasForMaskedLM"),Lw.forEach(t),mc.forEach(t),Fp=p(i),_s=o(i,"DIV",{class:!0});var oo=r(_s);E(Bo.$$.fragment,oo),Df=p(oo),rn=o(oo,"P",{});var Wi=r(rn);Nf=a(Wi,"Tapas Model with a "),md=o(Wi,"CODE",{});var Qw=r(md);Of=a(Qw,"language modeling"),Qw.forEach(t),Lf=a(Wi,` head on top.
This model inherits from `),fi=o(Wi,"A",{href:!0});var Iw=r(fi);Qf=a(Iw,"PreTrainedModel"),Iw.forEach(t),If=a(Wi,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wi.forEach(t),Wf=p(oo),Vo=o(oo,"P",{});var uc=r(Vo);Hf=a(uc,"This model is also a PyTorch "),Ko=o(uc,"A",{href:!0,rel:!0});var Ww=r(Ko);Uf=a(Ww,"torch.nn.Module"),Ww.forEach(t),Rf=a(uc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),uc.forEach(t),Gf=p(oo),Kt=o(oo,"DIV",{class:!0});var va=r(Kt);E(Yo.$$.fragment,va),Bf=p(va),ln=o(va,"P",{});var Hi=r(ln);Vf=a(Hi,"The "),gi=o(Hi,"A",{href:!0});var Hw=r(gi);Kf=a(Hw,"TapasForMaskedLM"),Hw.forEach(t),Yf=a(Hi," forward method, overrides the "),ud=o(Hi,"CODE",{});var Uw=r(ud);Jf=a(Uw,"__call__"),Uw.forEach(t),Xf=a(Hi," special method."),Hi.forEach(t),Zf=p(va),E(Ln.$$.fragment,va),eg=p(va),fd=o(va,"P",{});var Rw=r(fd);tg=a(Rw,"Examples:"),Rw.forEach(t),sg=p(va),E(Jo.$$.fragment,va),va.forEach(t),oo.forEach(t),Ap=p(i),dn=o(i,"H2",{class:!0});var fc=r(dn);Qn=o(fc,"A",{id:!0,class:!0,href:!0});var Gw=r(Qn);gd=o(Gw,"SPAN",{});var Bw=r(gd);E(Xo.$$.fragment,Bw),Bw.forEach(t),Gw.forEach(t),ag=p(fc),_d=o(fc,"SPAN",{});var Vw=r(_d);ng=a(Vw,"TapasForSequenceClassification"),Vw.forEach(t),fc.forEach(t),zp=p(i),Ht=o(i,"DIV",{class:!0});var wa=r(Ht);E(Zo.$$.fragment,wa),og=p(wa),Td=o(wa,"P",{});var Kw=r(Td);rg=a(Kw,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Kw.forEach(t),ig=p(wa),er=o(wa,"P",{});var gc=r(er);lg=a(gc,"This model inherits from "),_i=o(gc,"A",{href:!0});var Yw=r(_i);dg=a(Yw,"PreTrainedModel"),Yw.forEach(t),pg=a(gc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc.forEach(t),cg=p(wa),tr=o(wa,"P",{});var _c=r(tr);hg=a(_c,"This model is also a PyTorch "),sr=o(_c,"A",{href:!0,rel:!0});var Jw=r(sr);mg=a(Jw,"torch.nn.Module"),Jw.forEach(t),ug=a(_c,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_c.forEach(t),fg=p(wa),Yt=o(wa,"DIV",{class:!0});var ya=r(Yt);E(ar.$$.fragment,ya),gg=p(ya),pn=o(ya,"P",{});var Ui=r(pn);_g=a(Ui,"The "),Ti=o(Ui,"A",{href:!0});var Xw=r(Ti);Tg=a(Xw,"TapasForSequenceClassification"),Xw.forEach(t),bg=a(Ui," forward method, overrides the "),bd=o(Ui,"CODE",{});var Zw=r(bd);vg=a(Zw,"__call__"),Zw.forEach(t),wg=a(Ui," special method."),Ui.forEach(t),yg=p(ya),E(In.$$.fragment,ya),kg=p(ya),vd=o(ya,"P",{});var ey=r(vd);qg=a(ey,"Examples:"),ey.forEach(t),jg=p(ya),E(nr.$$.fragment,ya),ya.forEach(t),wa.forEach(t),xp=p(i),cn=o(i,"H2",{class:!0});var Tc=r(cn);Wn=o(Tc,"A",{id:!0,class:!0,href:!0});var ty=r(Wn);wd=o(ty,"SPAN",{});var sy=r(wd);E(or.$$.fragment,sy),sy.forEach(t),ty.forEach(t),$g=p(Tc),yd=o(Tc,"SPAN",{});var ay=r(yd);Eg=a(ay,"TapasForQuestionAnswering"),ay.forEach(t),Tc.forEach(t),Cp=p(i),Ut=o(i,"DIV",{class:!0});var ka=r(Ut);E(rr.$$.fragment,ka),Fg=p(ka),hn=o(ka,"P",{});var Ri=r(hn);Ag=a(Ri,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),kd=o(Ri,"CODE",{});var ny=r(kd);zg=a(ny,"logits"),ny.forEach(t),xg=a(Ri," and optional "),qd=o(Ri,"CODE",{});var oy=r(qd);Cg=a(oy,"logits_aggregation"),oy.forEach(t),Mg=a(Ri,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Ri.forEach(t),Pg=p(ka),ir=o(ka,"P",{});var bc=r(ir);Sg=a(bc,"This model inherits from "),bi=o(bc,"A",{href:!0});var ry=r(bi);Dg=a(ry,"PreTrainedModel"),ry.forEach(t),Ng=a(bc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bc.forEach(t),Og=p(ka),lr=o(ka,"P",{});var vc=r(lr);Lg=a(vc,"This model is also a PyTorch "),dr=o(vc,"A",{href:!0,rel:!0});var iy=r(dr);Qg=a(iy,"torch.nn.Module"),iy.forEach(t),Ig=a(vc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vc.forEach(t),Wg=p(ka),Jt=o(ka,"DIV",{class:!0});var qa=r(Jt);E(pr.$$.fragment,qa),Hg=p(qa),mn=o(qa,"P",{});var Gi=r(mn);Ug=a(Gi,"The "),vi=o(Gi,"A",{href:!0});var ly=r(vi);Rg=a(ly,"TapasForQuestionAnswering"),ly.forEach(t),Gg=a(Gi," forward method, overrides the "),jd=o(Gi,"CODE",{});var dy=r(jd);Bg=a(dy,"__call__"),dy.forEach(t),Vg=a(Gi," special method."),Gi.forEach(t),Kg=p(qa),E(Hn.$$.fragment,qa),Yg=p(qa),$d=o(qa,"P",{});var py=r($d);Jg=a(py,"Examples:"),py.forEach(t),Xg=p(qa),E(cr.$$.fragment,qa),qa.forEach(t),ka.forEach(t),Mp=p(i),un=o(i,"H2",{class:!0});var wc=r(un);Un=o(wc,"A",{id:!0,class:!0,href:!0});var cy=r(Un);Ed=o(cy,"SPAN",{});var hy=r(Ed);E(hr.$$.fragment,hy),hy.forEach(t),cy.forEach(t),Zg=p(wc),Fd=o(wc,"SPAN",{});var my=r(Fd);e_=a(my,"TFTapasModel"),my.forEach(t),wc.forEach(t),Pp=p(i),pt=o(i,"DIV",{class:!0});var As=r(pt);E(mr.$$.fragment,As),t_=p(As),Ad=o(As,"P",{});var uy=r(Ad);s_=a(uy,"The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),uy.forEach(t),a_=p(As),ur=o(As,"P",{});var yc=r(ur);n_=a(yc,"This model inherits from "),wi=o(yc,"A",{href:!0});var fy=r(wi);o_=a(fy,"TFPreTrainedModel"),fy.forEach(t),r_=a(yc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yc.forEach(t),i_=p(As),fr=o(As,"P",{});var kc=r(fr);l_=a(kc,"This model is also a "),gr=o(kc,"A",{href:!0,rel:!0});var gy=r(gr);d_=a(gy,"tf.keras.Model"),gy.forEach(t),p_=a(kc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kc.forEach(t),c_=p(As),E(Rn.$$.fragment,As),h_=p(As),Xt=o(As,"DIV",{class:!0});var ja=r(Xt);E(_r.$$.fragment,ja),m_=p(ja),fn=o(ja,"P",{});var Bi=r(fn);u_=a(Bi,"The "),yi=o(Bi,"A",{href:!0});var _y=r(yi);f_=a(_y,"TFTapasModel"),_y.forEach(t),g_=a(Bi," forward method, overrides the "),zd=o(Bi,"CODE",{});var Ty=r(zd);__=a(Ty,"__call__"),Ty.forEach(t),T_=a(Bi," special method."),Bi.forEach(t),b_=p(ja),E(Gn.$$.fragment,ja),v_=p(ja),xd=o(ja,"P",{});var by=r(xd);w_=a(by,"Examples:"),by.forEach(t),y_=p(ja),E(Tr.$$.fragment,ja),ja.forEach(t),As.forEach(t),Sp=p(i),gn=o(i,"H2",{class:!0});var qc=r(gn);Bn=o(qc,"A",{id:!0,class:!0,href:!0});var vy=r(Bn);Cd=o(vy,"SPAN",{});var wy=r(Cd);E(br.$$.fragment,wy),wy.forEach(t),vy.forEach(t),k_=p(qc),Md=o(qc,"SPAN",{});var yy=r(Md);q_=a(yy,"TFTapasForMaskedLM"),yy.forEach(t),qc.forEach(t),Dp=p(i),ct=o(i,"DIV",{class:!0});var zs=r(ct);E(vr.$$.fragment,zs),j_=p(zs),wr=o(zs,"P",{});var jc=r(wr);$_=a(jc,"Tapas Model with a "),Pd=o(jc,"CODE",{});var ky=r(Pd);E_=a(ky,"language modeling"),ky.forEach(t),F_=a(jc," head on top."),jc.forEach(t),A_=p(zs),yr=o(zs,"P",{});var $c=r(yr);z_=a($c,"This model inherits from "),ki=o($c,"A",{href:!0});var qy=r(ki);x_=a(qy,"TFPreTrainedModel"),qy.forEach(t),C_=a($c,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$c.forEach(t),M_=p(zs),kr=o(zs,"P",{});var Ec=r(kr);P_=a(Ec,"This model is also a "),qr=o(Ec,"A",{href:!0,rel:!0});var jy=r(qr);S_=a(jy,"tf.keras.Model"),jy.forEach(t),D_=a(Ec,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ec.forEach(t),N_=p(zs),E(Vn.$$.fragment,zs),O_=p(zs),Zt=o(zs,"DIV",{class:!0});var $a=r(Zt);E(jr.$$.fragment,$a),L_=p($a),_n=o($a,"P",{});var Vi=r(_n);Q_=a(Vi,"The "),qi=o(Vi,"A",{href:!0});var $y=r(qi);I_=a($y,"TFTapasForMaskedLM"),$y.forEach(t),W_=a(Vi," forward method, overrides the "),Sd=o(Vi,"CODE",{});var Ey=r(Sd);H_=a(Ey,"__call__"),Ey.forEach(t),U_=a(Vi," special method."),Vi.forEach(t),R_=p($a),E(Kn.$$.fragment,$a),G_=p($a),Dd=o($a,"P",{});var Fy=r(Dd);B_=a(Fy,"Examples:"),Fy.forEach(t),V_=p($a),E($r.$$.fragment,$a),$a.forEach(t),zs.forEach(t),Np=p(i),Tn=o(i,"H2",{class:!0});var Fc=r(Tn);Yn=o(Fc,"A",{id:!0,class:!0,href:!0});var Ay=r(Yn);Nd=o(Ay,"SPAN",{});var zy=r(Nd);E(Er.$$.fragment,zy),zy.forEach(t),Ay.forEach(t),K_=p(Fc),Od=o(Fc,"SPAN",{});var xy=r(Od);Y_=a(xy,"TFTapasForSequenceClassification"),xy.forEach(t),Fc.forEach(t),Op=p(i),ht=o(i,"DIV",{class:!0});var xs=r(ht);E(Fr.$$.fragment,xs),J_=p(xs),Ld=o(xs,"P",{});var Cy=r(Ld);X_=a(Cy,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Cy.forEach(t),Z_=p(xs),Ar=o(xs,"P",{});var Ac=r(Ar);eT=a(Ac,"This model inherits from "),ji=o(Ac,"A",{href:!0});var My=r(ji);tT=a(My,"TFPreTrainedModel"),My.forEach(t),sT=a(Ac,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ac.forEach(t),aT=p(xs),zr=o(xs,"P",{});var zc=r(zr);nT=a(zc,"This model is also a "),xr=o(zc,"A",{href:!0,rel:!0});var Py=r(xr);oT=a(Py,"tf.keras.Model"),Py.forEach(t),rT=a(zc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zc.forEach(t),iT=p(xs),E(Jn.$$.fragment,xs),lT=p(xs),es=o(xs,"DIV",{class:!0});var Ea=r(es);E(Cr.$$.fragment,Ea),dT=p(Ea),bn=o(Ea,"P",{});var Ki=r(bn);pT=a(Ki,"The "),$i=o(Ki,"A",{href:!0});var Sy=r($i);cT=a(Sy,"TFTapasForSequenceClassification"),Sy.forEach(t),hT=a(Ki," forward method, overrides the "),Qd=o(Ki,"CODE",{});var Dy=r(Qd);mT=a(Dy,"__call__"),Dy.forEach(t),uT=a(Ki," special method."),Ki.forEach(t),fT=p(Ea),E(Xn.$$.fragment,Ea),gT=p(Ea),Id=o(Ea,"P",{});var Ny=r(Id);_T=a(Ny,"Examples:"),Ny.forEach(t),TT=p(Ea),E(Mr.$$.fragment,Ea),Ea.forEach(t),xs.forEach(t),Lp=p(i),vn=o(i,"H2",{class:!0});var xc=r(vn);Zn=o(xc,"A",{id:!0,class:!0,href:!0});var Oy=r(Zn);Wd=o(Oy,"SPAN",{});var Ly=r(Wd);E(Pr.$$.fragment,Ly),Ly.forEach(t),Oy.forEach(t),bT=p(xc),Hd=o(xc,"SPAN",{});var Qy=r(Hd);vT=a(Qy,"TFTapasForQuestionAnswering"),Qy.forEach(t),xc.forEach(t),Qp=p(i),mt=o(i,"DIV",{class:!0});var Cs=r(mt);E(Sr.$$.fragment,Cs),wT=p(Cs),wn=o(Cs,"P",{});var Yi=r(wn);yT=a(Yi,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Ud=o(Yi,"CODE",{});var Iy=r(Ud);kT=a(Iy,"logits"),Iy.forEach(t),qT=a(Yi," and optional "),Rd=o(Yi,"CODE",{});var Wy=r(Rd);jT=a(Wy,"logits_aggregation"),Wy.forEach(t),$T=a(Yi,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Yi.forEach(t),ET=p(Cs),Dr=o(Cs,"P",{});var Cc=r(Dr);FT=a(Cc,"This model inherits from "),Ei=o(Cc,"A",{href:!0});var Hy=r(Ei);AT=a(Hy,"TFPreTrainedModel"),Hy.forEach(t),zT=a(Cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cc.forEach(t),xT=p(Cs),Nr=o(Cs,"P",{});var Mc=r(Nr);CT=a(Mc,"This model is also a "),Or=o(Mc,"A",{href:!0,rel:!0});var Uy=r(Or);MT=a(Uy,"tf.keras.Model"),Uy.forEach(t),PT=a(Mc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mc.forEach(t),ST=p(Cs),E(eo.$$.fragment,Cs),DT=p(Cs),ts=o(Cs,"DIV",{class:!0});var Fa=r(ts);E(Lr.$$.fragment,Fa),NT=p(Fa),yn=o(Fa,"P",{});var Ji=r(yn);OT=a(Ji,"The "),Fi=o(Ji,"A",{href:!0});var Ry=r(Fi);LT=a(Ry,"TFTapasForQuestionAnswering"),Ry.forEach(t),QT=a(Ji," forward method, overrides the "),Gd=o(Ji,"CODE",{});var Gy=r(Gd);IT=a(Gy,"__call__"),Gy.forEach(t),WT=a(Ji," special method."),Ji.forEach(t),HT=p(Fa),E(to.$$.fragment,Fa),UT=p(Fa),Bd=o(Fa,"P",{});var By=r(Bd);RT=a(By,"Examples:"),By.forEach(t),GT=p(Fa),E(Qr.$$.fragment,Fa),Fa.forEach(t),Cs.forEach(t),this.h()},h(){h(l,"name","hf:doc:metadata"),h(l,"content",JSON.stringify(Ak)),h(f,"id","tapas"),h(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(f,"href","#tapas"),h(c,"class","relative group"),h(H,"id","overview"),h(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(H,"href","#overview"),h(q,"class","relative group"),h(M,"href","https://www.aclweb.org/anthology/2020.acl-main.398"),h(M,"rel","nofollow"),h(P,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),h(P,"rel","nofollow"),h(Y,"href","https://github.com/ppasupat/WikiTableQuestions"),h(Y,"rel","nofollow"),h(oe,"href","https://github.com/salesforce/WikiSQL"),h(oe,"rel","nofollow"),h(ye,"href","https://github.com/wenhuchen/Table-Fact-Checking"),h(ye,"rel","nofollow"),h(Ze,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.27/"),h(Ze,"rel","nofollow"),Xy(ft.src,pa="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/tapas_architecture.png")||h(ft,"src",pa),h(ft,"alt","drawing"),h(ft,"width","600"),h(tt,"href","https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html"),h(yt,"href","https://huggingface.co/nielsr"),h(yt,"rel","nofollow"),h(qt,"href","https://huggingface.co/kamalkraj"),h(qt,"rel","nofollow"),h($t,"href","https://github.com/google-research/tapas"),h($t,"rel","nofollow"),h(Bt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),h(Ct,"href","https://huggingface.co/models?search=tapas"),h(Ct,"rel","nofollow"),h(Ot,"href","https://github.com/google-research/tapas%3E"),h(Ot,"rel","nofollow"),h(st,"id","usage-finetuning"),h(st,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(st,"href","#usage-finetuning"),h(It,"class","relative group"),h(vs,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(ys,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(lo,"href","https://github.com/google-research/tapas/issues/91#issuecomment-735719340"),h(lo,"rel","nofollow"),h(po,"href","https://huggingface.co/models?search=tapas"),h(po,"rel","nofollow"),h(co,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),h(co,"rel","nofollow"),h(ho,"href","https://github.com/google-research/tapas/issues/50#issuecomment-705465960"),h(ho,"rel","nofollow"),h(mo,"href","https://github.com/NielsRogge/tapas_utils"),h(mo,"rel","nofollow"),h(ti,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(uo,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(uo,"rel","nofollow"),h(fo,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(fo,"rel","nofollow"),h(zn,"id","usage-inference"),h(zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(zn,"href","#usage-inference"),h(Ya,"class","relative group"),h(_o,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(_o,"rel","nofollow"),h(To,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),h(To,"rel","nofollow"),h(Cn,"id","transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),h(Cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Cn,"href","#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),h(Ja,"class","relative group"),h(ai,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(Xa,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Mn,"id","transformers.TapasConfig"),h(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Mn,"href","#transformers.TapasConfig"),h(Za,"class","relative group"),h(ni,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasModel"),h(qo,"href","https://huggingface.co/google/tapas-base-finetuned-sqa"),h(qo,"rel","nofollow"),h(oi,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h($o,"href","https://github.com/google-research/tapas/tree/master"),h($o,"rel","nofollow"),h(it,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Pn,"id","transformers.TapasTokenizer"),h(Pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Pn,"href","#transformers.TapasTokenizer"),h(sn,"class","relative group"),h(ri,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),h(ii,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(di,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),h(Sn,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(Po,"href","https://github.com/google-research/tapas/blob/4908213eb4df7aa988573350278b44c4dbe3f71b/tapas/experiments/prediction_utils.py#L288"),h(Po,"rel","nofollow"),h(Ta,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ci,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Dn,"id","transformers.TapasModel"),h(Dn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Dn,"href","#transformers.TapasModel"),h(an,"class","relative group"),h(hi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Qo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Qo,"rel","nofollow"),h(mi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),h(Ho,"href","https://arxiv.org/abs/1706.03762"),h(Ho,"rel","nofollow"),h(ui,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasModel"),h(Vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(dt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(On,"id","transformers.TapasForMaskedLM"),h(On,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(On,"href","#transformers.TapasForMaskedLM"),h(on,"class","relative group"),h(fi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ko,"rel","nofollow"),h(gi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForMaskedLM"),h(Kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(_s,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Qn,"id","transformers.TapasForSequenceClassification"),h(Qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Qn,"href","#transformers.TapasForSequenceClassification"),h(dn,"class","relative group"),h(_i,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(sr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(sr,"rel","nofollow"),h(Ti,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForSequenceClassification"),h(Yt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Wn,"id","transformers.TapasForQuestionAnswering"),h(Wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Wn,"href","#transformers.TapasForQuestionAnswering"),h(cn,"class","relative group"),h(bi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(dr,"rel","nofollow"),h(vi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),h(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Ut,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Un,"id","transformers.TFTapasModel"),h(Un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Un,"href","#transformers.TFTapasModel"),h(un,"class","relative group"),h(wi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(gr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(gr,"rel","nofollow"),h(yi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasModel"),h(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(pt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Bn,"id","transformers.TFTapasForMaskedLM"),h(Bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Bn,"href","#transformers.TFTapasForMaskedLM"),h(gn,"class","relative group"),h(ki,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(qr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(qr,"rel","nofollow"),h(qi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForMaskedLM"),h(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Yn,"id","transformers.TFTapasForSequenceClassification"),h(Yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Yn,"href","#transformers.TFTapasForSequenceClassification"),h(Tn,"class","relative group"),h(ji,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(xr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(xr,"rel","nofollow"),h($i,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForSequenceClassification"),h(es,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(Zn,"id","transformers.TFTapasForQuestionAnswering"),h(Zn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Zn,"href","#transformers.TFTapasForQuestionAnswering"),h(vn,"class","relative group"),h(Ei,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Or,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Or,"rel","nofollow"),h(Fi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),h(ts,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),h(mt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,u){e(document.head,l),m(i,_,u),m(i,c,u),e(c,f),e(f,b),F(v,b,null),e(c,T),e(c,k),e(k,y),m(i,D,u),m(i,q,u),e(q,H),e(H,B),F(V,B,null),e(q,R),e(q,K),e(K,re),m(i,I,u),m(i,O,u),e(O,w),e(O,M),e(M,G),e(O,C),m(i,N,u),m(i,ee,u),e(ee,te),m(i,ce,u),m(i,ne,u),e(ne,se),e(se,P),e(P,L),e(se,W),e(ne,X),e(ne,Q),e(Q,Y),e(Y,ge),e(Q,me),e(ne,_e),e(ne,ue),e(ue,oe),e(oe,qe),e(ue,ie),m(i,ve,u),m(i,g,u),e(g,S),m(i,be,u),m(i,ze,u),e(ze,we),m(i,le,u),m(i,xe,u),e(xe,Me),e(Me,Z),m(i,de,u),m(i,pe,u),e(pe,De),e(pe,je),e(je,Te),e(pe,Ne),e(pe,ye),e(ye,Ae),e(pe,Oe),e(pe,Ze),e(Ze,Ps),e(pe,Ss),m(i,ut,u),m(i,ft,u),m(i,gt,u),m(i,_t,u),e(_t,Ds),e(_t,tt),e(tt,Ns),e(_t,Os),m(i,Ke,u),m(i,Pe,u),e(Pe,Ls),e(Pe,yt),e(yt,ke),e(Pe,kt),e(Pe,qt),e(qt,Qs),e(Pe,jt),e(Pe,$t),e($t,Is),e(Pe,Et),m(i,Ts,u),m(i,Gt,u),e(Gt,Ft),m(i,bs,u),m(i,Ye,u),e(Ye,$e),e($e,Ws),e($e,At),e(At,ae),e($e,nt),e($e,Bt),e(Bt,Hs),e($e,zt),e($e,ns),e(ns,Us),e($e,xt),e($e,Ct),e(Ct,Rs),e($e,Mt),e($e,os),e(os,Gs),e($e,Pt),e($e,rs),e(rs,Bs),e($e,St),e(Ye,Vs),e(Ye,Le),e(Le,Dt),e(Le,is),e(is,Ks),e(Le,Nt),e(Le,ls),e(ls,Ys),e(Le,ds),e(Le,Ue),e(Ue,ps),e(Le,Ee),e(Le,cs),e(cs,ot),e(Le,Js),e(Le,Ot),e(Ot,Lt),e(Le,Xs),e(Ye,Zs),e(Ye,Re),e(Re,ea),e(Re,hs),e(hs,ms),e(Re,et),e(Re,Qt),e(Qt,j),e(Re,J),e(Ye,Aa),e(Ye,ta),e(ta,za),m(i,ca,u),m(i,It,u),e(It,st),e(st,sa),F(rt,sa,null),e(It,xa),e(It,aa),e(aa,Ca),m(i,ha,u),m(i,Ie,u),e(Ie,us),e(Ie,vs),e(vs,Ge),e(Ie,Ma),m(i,ma,u),m(i,ws,u),e(ws,na),e(na,fs),m(i,ua,u),m(i,fe,u),e(fe,Pa),e(fe,ys),e(ys,Sa),e(fe,Da),m(i,fa,u),m(i,Tt,u),e(Tt,oa),e(oa,gs),e(Tt,Na),e(Tt,Fe),e(Fe,Oa),e(Fe,ra),e(ra,La),e(Fe,Qa),e(Tt,Ia),e(Tt,he),e(he,Wa),e(he,ia),e(ia,Ha),e(he,Ua),m(i,ga,u),m(i,ks,u),e(ks,Ra),m(i,_a,u),m(i,Ce,u),e(Ce,la),e(la,Wt),e(Wt,da),e(da,Xi),e(Xi,Sc),e(Wt,Dc),e(Wt,Zi),e(Zi,el),e(el,Nc),e(Wt,Oc),e(Wt,tl),e(tl,sl),e(sl,Lc),e(Ce,Qc),e(Ce,Ga),e(Ga,Ba),e(Ba,al),e(al,Ic),e(Ba,Wc),e(Ba,nl),e(nl,Hc),e(Ba,Uc),e(Ba,ol),e(ol,Rc),e(Ga,Gc),e(Ga,Va),e(Va,rl),e(rl,Bc),e(Va,Vc),e(Va,il),e(il,Kc),e(Va,Yc),e(Va,ll),e(ll,Jc),e(Ga,Xc),e(Ga,Ka),e(Ka,dl),e(dl,Zc),e(Ka,eh),e(Ka,pl),e(pl,th),e(Ka,sh),e(Ka,cl),e(cl,ah),m(i,np,u),F(qn,i,u),m(i,op,u),m(i,jn,u),e(jn,nh),e(jn,lo),e(lo,oh),e(jn,rh),m(i,rp,u),m(i,$n,u),e($n,ih),e($n,po),e(po,lh),e($n,dh),m(i,ip,u),m(i,Ur,u),e(Ur,hl),e(hl,ph),m(i,lp,u),m(i,En,u),e(En,ch),e(En,co),e(co,hh),e(En,mh),m(i,dp,u),m(i,We,u),e(We,Rr),e(Rr,ml),e(ml,uh),e(Rr,fh),e(We,gh),e(We,Gr),e(Gr,ul),e(ul,_h),e(Gr,Th),e(We,bh),e(We,Br),e(Br,fl),e(fl,vh),e(Br,wh),e(We,yh),e(We,Vr),e(Vr,gl),e(gl,kh),e(Vr,qh),e(We,jh),e(We,Kr),e(Kr,_l),e(_l,$h),e(Kr,Eh),e(We,Fh),e(We,Yr),e(Yr,Tl),e(Tl,Ah),e(Yr,zh),e(We,xh),e(We,Jr),e(Jr,bl),e(bl,Ch),e(Jr,Mh),e(We,Ph),e(We,Xr),e(Xr,vl),e(vl,Sh),e(Xr,Dh),e(We,Nh),e(We,Zr),e(Zr,wl),e(wl,Oh),e(Zr,Lh),m(i,pp,u),m(i,bt,u),e(bt,Qh),e(bt,ho),e(ho,Ih),e(bt,Wh),e(bt,mo),e(mo,Hh),e(bt,Uh),e(bt,yl),e(yl,Rh),e(bt,Gh),e(bt,kl),e(kl,Bh),e(bt,Vh),e(bt,ql),e(ql,Kh),e(bt,Yh),m(i,cp,u),m(i,ei,u),e(ei,jl),e(jl,Jh),m(i,hp,u),F(Fn,i,u),m(i,mp,u),m(i,Se,u),e(Se,Xh),e(Se,$l),e($l,Zh),e(Se,em),e(Se,El),e(El,tm),e(Se,sm),e(Se,Fl),e(Fl,am),e(Se,nm),e(Se,Al),e(Al,om),e(Se,rm),e(Se,zl),e(zl,im),e(Se,lm),e(Se,xl),e(xl,dm),e(Se,pm),e(Se,ti),e(ti,cm),e(Se,hm),e(Se,uo),e(uo,mm),e(Se,um),e(Se,fo),e(fo,fm),e(Se,gm),m(i,up,u),m(i,si,u),e(si,_m),m(i,fp,u),F(An,i,u),m(i,gp,u),m(i,Ya,u),e(Ya,zn),e(zn,Cl),F(go,Cl,null),e(Ya,Tm),e(Ya,Ml),e(Ml,bm),m(i,_p,u),F(xn,i,u),m(i,Tp,u),m(i,vt,u),e(vt,vm),e(vt,Pl),e(Pl,wm),e(vt,ym),e(vt,Sl),e(Sl,km),e(vt,qm),e(vt,Dl),e(Dl,jm),e(vt,$m),e(vt,_o),e(_o,Em),e(vt,Fm),e(vt,To),e(To,Am),e(vt,zm),m(i,bp,u),m(i,Ja,u),e(Ja,Cn),e(Cn,Nl),F(bo,Nl,null),e(Ja,xm),e(Ja,Ol),e(Ol,Cm),m(i,vp,u),m(i,Xa,u),F(vo,Xa,null),e(Xa,Mm),e(Xa,wo),e(wo,Pm),e(wo,ai),e(ai,Sm),e(wo,Dm),m(i,wp,u),m(i,Za,u),e(Za,Mn),e(Mn,Ll),F(yo,Ll,null),e(Za,Nm),e(Za,Ql),e(Ql,Om),m(i,yp,u),m(i,it,u),F(ko,it,null),e(it,Lm),e(it,en),e(en,Qm),e(en,ni),e(ni,Im),e(en,Wm),e(en,qo),e(qo,Hm),e(en,Um),e(it,Rm),e(it,tn),e(tn,Gm),e(tn,Il),e(Il,Bm),e(tn,Vm),e(tn,oi),e(oi,Km),e(tn,Ym),e(it,Jm),e(it,jo),e(jo,Xm),e(jo,$o),e($o,Zm),e(jo,eu),e(it,tu),e(it,Wl),e(Wl,su),e(it,au),F(Eo,it,null),m(i,kp,u),m(i,sn,u),e(sn,Pn),e(Pn,Hl),F(Fo,Hl,null),e(sn,nu),e(sn,Ul),e(Ul,ou),m(i,qp,u),m(i,Be,u),F(Ao,Be,null),e(Be,ru),e(Be,Rl),e(Rl,iu),e(Be,lu),e(Be,Qe),e(Qe,du),e(Qe,ri),e(ri,pu),e(Qe,cu),e(Qe,ii),e(ii,hu),e(Qe,mu),e(Qe,Gl),e(Gl,uu),e(Qe,fu),e(Qe,Bl),e(Bl,gu),e(Qe,_u),e(Qe,Vl),e(Vl,Tu),e(Qe,bu),e(Qe,Kl),e(Kl,vu),e(Qe,wu),e(Qe,Yl),e(Yl,yu),e(Qe,ku),e(Qe,Jl),e(Jl,qu),e(Qe,ju),e(Qe,Xl),e(Xl,$u),e(Qe,Eu),e(Be,Fu),e(Be,lt),e(lt,Zl),e(Zl,Au),e(lt,zu),e(lt,ed),e(ed,xu),e(lt,Cu),e(lt,td),e(td,Mu),e(lt,Pu),e(lt,sd),e(sd,Su),e(lt,Du),e(lt,ad),e(ad,Nu),e(lt,Ou),e(lt,nd),e(nd,Lu),e(lt,Qu),e(lt,od),e(od,Iu),e(Be,Wu),e(Be,li),e(li,di),e(di,Hu),e(li,Uu),e(Be,Ru),e(Be,Sn),F(zo,Sn,null),e(Sn,Gu),e(Sn,rd),e(rd,Bu),e(Be,Vu),e(Be,Ta),F(xo,Ta,null),e(Ta,Ku),e(Ta,Co),e(Co,Yu),e(Co,pi),e(pi,Ju),e(Co,Xu),e(Ta,Zu),e(Ta,Mo),e(Mo,ef),e(Mo,Po),e(Po,tf),e(Mo,sf),e(Be,af),e(Be,ci),F(So,ci,null),m(i,jp,u),m(i,an,u),e(an,Dn),e(Dn,id),F(Do,id,null),e(an,nf),e(an,ld),e(ld,of),m(i,$p,u),m(i,dt,u),F(No,dt,null),e(dt,rf),e(dt,Oo),e(Oo,lf),e(Oo,hi),e(hi,df),e(Oo,pf),e(dt,cf),e(dt,Lo),e(Lo,hf),e(Lo,Qo),e(Qo,mf),e(Lo,uf),e(dt,ff),e(dt,Io),e(Io,gf),e(Io,mi),e(mi,_f),e(Io,Tf),e(dt,bf),e(dt,Wo),e(Wo,vf),e(Wo,Ho),e(Ho,wf),e(Wo,yf),e(dt,kf),e(dt,Vt),F(Uo,Vt,null),e(Vt,qf),e(Vt,nn),e(nn,jf),e(nn,ui),e(ui,$f),e(nn,Ef),e(nn,dd),e(dd,Ff),e(nn,Af),e(Vt,zf),F(Nn,Vt,null),e(Vt,xf),e(Vt,pd),e(pd,Cf),e(Vt,Mf),F(Ro,Vt,null),m(i,Ep,u),m(i,on,u),e(on,On),e(On,cd),F(Go,cd,null),e(on,Pf),e(on,hd),e(hd,Sf),m(i,Fp,u),m(i,_s,u),F(Bo,_s,null),e(_s,Df),e(_s,rn),e(rn,Nf),e(rn,md),e(md,Of),e(rn,Lf),e(rn,fi),e(fi,Qf),e(rn,If),e(_s,Wf),e(_s,Vo),e(Vo,Hf),e(Vo,Ko),e(Ko,Uf),e(Vo,Rf),e(_s,Gf),e(_s,Kt),F(Yo,Kt,null),e(Kt,Bf),e(Kt,ln),e(ln,Vf),e(ln,gi),e(gi,Kf),e(ln,Yf),e(ln,ud),e(ud,Jf),e(ln,Xf),e(Kt,Zf),F(Ln,Kt,null),e(Kt,eg),e(Kt,fd),e(fd,tg),e(Kt,sg),F(Jo,Kt,null),m(i,Ap,u),m(i,dn,u),e(dn,Qn),e(Qn,gd),F(Xo,gd,null),e(dn,ag),e(dn,_d),e(_d,ng),m(i,zp,u),m(i,Ht,u),F(Zo,Ht,null),e(Ht,og),e(Ht,Td),e(Td,rg),e(Ht,ig),e(Ht,er),e(er,lg),e(er,_i),e(_i,dg),e(er,pg),e(Ht,cg),e(Ht,tr),e(tr,hg),e(tr,sr),e(sr,mg),e(tr,ug),e(Ht,fg),e(Ht,Yt),F(ar,Yt,null),e(Yt,gg),e(Yt,pn),e(pn,_g),e(pn,Ti),e(Ti,Tg),e(pn,bg),e(pn,bd),e(bd,vg),e(pn,wg),e(Yt,yg),F(In,Yt,null),e(Yt,kg),e(Yt,vd),e(vd,qg),e(Yt,jg),F(nr,Yt,null),m(i,xp,u),m(i,cn,u),e(cn,Wn),e(Wn,wd),F(or,wd,null),e(cn,$g),e(cn,yd),e(yd,Eg),m(i,Cp,u),m(i,Ut,u),F(rr,Ut,null),e(Ut,Fg),e(Ut,hn),e(hn,Ag),e(hn,kd),e(kd,zg),e(hn,xg),e(hn,qd),e(qd,Cg),e(hn,Mg),e(Ut,Pg),e(Ut,ir),e(ir,Sg),e(ir,bi),e(bi,Dg),e(ir,Ng),e(Ut,Og),e(Ut,lr),e(lr,Lg),e(lr,dr),e(dr,Qg),e(lr,Ig),e(Ut,Wg),e(Ut,Jt),F(pr,Jt,null),e(Jt,Hg),e(Jt,mn),e(mn,Ug),e(mn,vi),e(vi,Rg),e(mn,Gg),e(mn,jd),e(jd,Bg),e(mn,Vg),e(Jt,Kg),F(Hn,Jt,null),e(Jt,Yg),e(Jt,$d),e($d,Jg),e(Jt,Xg),F(cr,Jt,null),m(i,Mp,u),m(i,un,u),e(un,Un),e(Un,Ed),F(hr,Ed,null),e(un,Zg),e(un,Fd),e(Fd,e_),m(i,Pp,u),m(i,pt,u),F(mr,pt,null),e(pt,t_),e(pt,Ad),e(Ad,s_),e(pt,a_),e(pt,ur),e(ur,n_),e(ur,wi),e(wi,o_),e(ur,r_),e(pt,i_),e(pt,fr),e(fr,l_),e(fr,gr),e(gr,d_),e(fr,p_),e(pt,c_),F(Rn,pt,null),e(pt,h_),e(pt,Xt),F(_r,Xt,null),e(Xt,m_),e(Xt,fn),e(fn,u_),e(fn,yi),e(yi,f_),e(fn,g_),e(fn,zd),e(zd,__),e(fn,T_),e(Xt,b_),F(Gn,Xt,null),e(Xt,v_),e(Xt,xd),e(xd,w_),e(Xt,y_),F(Tr,Xt,null),m(i,Sp,u),m(i,gn,u),e(gn,Bn),e(Bn,Cd),F(br,Cd,null),e(gn,k_),e(gn,Md),e(Md,q_),m(i,Dp,u),m(i,ct,u),F(vr,ct,null),e(ct,j_),e(ct,wr),e(wr,$_),e(wr,Pd),e(Pd,E_),e(wr,F_),e(ct,A_),e(ct,yr),e(yr,z_),e(yr,ki),e(ki,x_),e(yr,C_),e(ct,M_),e(ct,kr),e(kr,P_),e(kr,qr),e(qr,S_),e(kr,D_),e(ct,N_),F(Vn,ct,null),e(ct,O_),e(ct,Zt),F(jr,Zt,null),e(Zt,L_),e(Zt,_n),e(_n,Q_),e(_n,qi),e(qi,I_),e(_n,W_),e(_n,Sd),e(Sd,H_),e(_n,U_),e(Zt,R_),F(Kn,Zt,null),e(Zt,G_),e(Zt,Dd),e(Dd,B_),e(Zt,V_),F($r,Zt,null),m(i,Np,u),m(i,Tn,u),e(Tn,Yn),e(Yn,Nd),F(Er,Nd,null),e(Tn,K_),e(Tn,Od),e(Od,Y_),m(i,Op,u),m(i,ht,u),F(Fr,ht,null),e(ht,J_),e(ht,Ld),e(Ld,X_),e(ht,Z_),e(ht,Ar),e(Ar,eT),e(Ar,ji),e(ji,tT),e(Ar,sT),e(ht,aT),e(ht,zr),e(zr,nT),e(zr,xr),e(xr,oT),e(zr,rT),e(ht,iT),F(Jn,ht,null),e(ht,lT),e(ht,es),F(Cr,es,null),e(es,dT),e(es,bn),e(bn,pT),e(bn,$i),e($i,cT),e(bn,hT),e(bn,Qd),e(Qd,mT),e(bn,uT),e(es,fT),F(Xn,es,null),e(es,gT),e(es,Id),e(Id,_T),e(es,TT),F(Mr,es,null),m(i,Lp,u),m(i,vn,u),e(vn,Zn),e(Zn,Wd),F(Pr,Wd,null),e(vn,bT),e(vn,Hd),e(Hd,vT),m(i,Qp,u),m(i,mt,u),F(Sr,mt,null),e(mt,wT),e(mt,wn),e(wn,yT),e(wn,Ud),e(Ud,kT),e(wn,qT),e(wn,Rd),e(Rd,jT),e(wn,$T),e(mt,ET),e(mt,Dr),e(Dr,FT),e(Dr,Ei),e(Ei,AT),e(Dr,zT),e(mt,xT),e(mt,Nr),e(Nr,CT),e(Nr,Or),e(Or,MT),e(Nr,PT),e(mt,ST),F(eo,mt,null),e(mt,DT),e(mt,ts),F(Lr,ts,null),e(ts,NT),e(ts,yn),e(yn,OT),e(yn,Fi),e(Fi,LT),e(yn,QT),e(yn,Gd),e(Gd,IT),e(yn,WT),e(ts,HT),F(to,ts,null),e(ts,UT),e(ts,Bd),e(Bd,RT),e(ts,GT),F(Qr,ts,null),Ip=!0},p(i,[u]){const Ir={};u&2&&(Ir.$$scope={dirty:u,ctx:i}),qn.$set(Ir);const Vd={};u&2&&(Vd.$$scope={dirty:u,ctx:i}),Fn.$set(Vd);const Kd={};u&2&&(Kd.$$scope={dirty:u,ctx:i}),An.$set(Kd);const Yd={};u&2&&(Yd.$$scope={dirty:u,ctx:i}),xn.$set(Yd);const Wr={};u&2&&(Wr.$$scope={dirty:u,ctx:i}),Nn.$set(Wr);const Jd={};u&2&&(Jd.$$scope={dirty:u,ctx:i}),Ln.$set(Jd);const Xd={};u&2&&(Xd.$$scope={dirty:u,ctx:i}),In.$set(Xd);const Zd={};u&2&&(Zd.$$scope={dirty:u,ctx:i}),Hn.$set(Zd);const Hr={};u&2&&(Hr.$$scope={dirty:u,ctx:i}),Rn.$set(Hr);const ep={};u&2&&(ep.$$scope={dirty:u,ctx:i}),Gn.$set(ep);const tp={};u&2&&(tp.$$scope={dirty:u,ctx:i}),Vn.$set(tp);const kn={};u&2&&(kn.$$scope={dirty:u,ctx:i}),Kn.$set(kn);const Ai={};u&2&&(Ai.$$scope={dirty:u,ctx:i}),Jn.$set(Ai);const sp={};u&2&&(sp.$$scope={dirty:u,ctx:i}),Xn.$set(sp);const zi={};u&2&&(zi.$$scope={dirty:u,ctx:i}),eo.$set(zi);const ap={};u&2&&(ap.$$scope={dirty:u,ctx:i}),to.$set(ap)},i(i){Ip||(A(v.$$.fragment,i),A(V.$$.fragment,i),A(rt.$$.fragment,i),A(qn.$$.fragment,i),A(Fn.$$.fragment,i),A(An.$$.fragment,i),A(go.$$.fragment,i),A(xn.$$.fragment,i),A(bo.$$.fragment,i),A(vo.$$.fragment,i),A(yo.$$.fragment,i),A(ko.$$.fragment,i),A(Eo.$$.fragment,i),A(Fo.$$.fragment,i),A(Ao.$$.fragment,i),A(zo.$$.fragment,i),A(xo.$$.fragment,i),A(So.$$.fragment,i),A(Do.$$.fragment,i),A(No.$$.fragment,i),A(Uo.$$.fragment,i),A(Nn.$$.fragment,i),A(Ro.$$.fragment,i),A(Go.$$.fragment,i),A(Bo.$$.fragment,i),A(Yo.$$.fragment,i),A(Ln.$$.fragment,i),A(Jo.$$.fragment,i),A(Xo.$$.fragment,i),A(Zo.$$.fragment,i),A(ar.$$.fragment,i),A(In.$$.fragment,i),A(nr.$$.fragment,i),A(or.$$.fragment,i),A(rr.$$.fragment,i),A(pr.$$.fragment,i),A(Hn.$$.fragment,i),A(cr.$$.fragment,i),A(hr.$$.fragment,i),A(mr.$$.fragment,i),A(Rn.$$.fragment,i),A(_r.$$.fragment,i),A(Gn.$$.fragment,i),A(Tr.$$.fragment,i),A(br.$$.fragment,i),A(vr.$$.fragment,i),A(Vn.$$.fragment,i),A(jr.$$.fragment,i),A(Kn.$$.fragment,i),A($r.$$.fragment,i),A(Er.$$.fragment,i),A(Fr.$$.fragment,i),A(Jn.$$.fragment,i),A(Cr.$$.fragment,i),A(Xn.$$.fragment,i),A(Mr.$$.fragment,i),A(Pr.$$.fragment,i),A(Sr.$$.fragment,i),A(eo.$$.fragment,i),A(Lr.$$.fragment,i),A(to.$$.fragment,i),A(Qr.$$.fragment,i),Ip=!0)},o(i){z(v.$$.fragment,i),z(V.$$.fragment,i),z(rt.$$.fragment,i),z(qn.$$.fragment,i),z(Fn.$$.fragment,i),z(An.$$.fragment,i),z(go.$$.fragment,i),z(xn.$$.fragment,i),z(bo.$$.fragment,i),z(vo.$$.fragment,i),z(yo.$$.fragment,i),z(ko.$$.fragment,i),z(Eo.$$.fragment,i),z(Fo.$$.fragment,i),z(Ao.$$.fragment,i),z(zo.$$.fragment,i),z(xo.$$.fragment,i),z(So.$$.fragment,i),z(Do.$$.fragment,i),z(No.$$.fragment,i),z(Uo.$$.fragment,i),z(Nn.$$.fragment,i),z(Ro.$$.fragment,i),z(Go.$$.fragment,i),z(Bo.$$.fragment,i),z(Yo.$$.fragment,i),z(Ln.$$.fragment,i),z(Jo.$$.fragment,i),z(Xo.$$.fragment,i),z(Zo.$$.fragment,i),z(ar.$$.fragment,i),z(In.$$.fragment,i),z(nr.$$.fragment,i),z(or.$$.fragment,i),z(rr.$$.fragment,i),z(pr.$$.fragment,i),z(Hn.$$.fragment,i),z(cr.$$.fragment,i),z(hr.$$.fragment,i),z(mr.$$.fragment,i),z(Rn.$$.fragment,i),z(_r.$$.fragment,i),z(Gn.$$.fragment,i),z(Tr.$$.fragment,i),z(br.$$.fragment,i),z(vr.$$.fragment,i),z(Vn.$$.fragment,i),z(jr.$$.fragment,i),z(Kn.$$.fragment,i),z($r.$$.fragment,i),z(Er.$$.fragment,i),z(Fr.$$.fragment,i),z(Jn.$$.fragment,i),z(Cr.$$.fragment,i),z(Xn.$$.fragment,i),z(Mr.$$.fragment,i),z(Pr.$$.fragment,i),z(Sr.$$.fragment,i),z(eo.$$.fragment,i),z(Lr.$$.fragment,i),z(to.$$.fragment,i),z(Qr.$$.fragment,i),Ip=!1},d(i){t(l),i&&t(_),i&&t(c),x(v),i&&t(D),i&&t(q),x(V),i&&t(I),i&&t(O),i&&t(N),i&&t(ee),i&&t(ce),i&&t(ne),i&&t(ve),i&&t(g),i&&t(be),i&&t(ze),i&&t(le),i&&t(xe),i&&t(de),i&&t(pe),i&&t(ut),i&&t(ft),i&&t(gt),i&&t(_t),i&&t(Ke),i&&t(Pe),i&&t(Ts),i&&t(Gt),i&&t(bs),i&&t(Ye),i&&t(ca),i&&t(It),x(rt),i&&t(ha),i&&t(Ie),i&&t(ma),i&&t(ws),i&&t(ua),i&&t(fe),i&&t(fa),i&&t(Tt),i&&t(ga),i&&t(ks),i&&t(_a),i&&t(Ce),i&&t(np),x(qn,i),i&&t(op),i&&t(jn),i&&t(rp),i&&t($n),i&&t(ip),i&&t(Ur),i&&t(lp),i&&t(En),i&&t(dp),i&&t(We),i&&t(pp),i&&t(bt),i&&t(cp),i&&t(ei),i&&t(hp),x(Fn,i),i&&t(mp),i&&t(Se),i&&t(up),i&&t(si),i&&t(fp),x(An,i),i&&t(gp),i&&t(Ya),x(go),i&&t(_p),x(xn,i),i&&t(Tp),i&&t(vt),i&&t(bp),i&&t(Ja),x(bo),i&&t(vp),i&&t(Xa),x(vo),i&&t(wp),i&&t(Za),x(yo),i&&t(yp),i&&t(it),x(ko),x(Eo),i&&t(kp),i&&t(sn),x(Fo),i&&t(qp),i&&t(Be),x(Ao),x(zo),x(xo),x(So),i&&t(jp),i&&t(an),x(Do),i&&t($p),i&&t(dt),x(No),x(Uo),x(Nn),x(Ro),i&&t(Ep),i&&t(on),x(Go),i&&t(Fp),i&&t(_s),x(Bo),x(Yo),x(Ln),x(Jo),i&&t(Ap),i&&t(dn),x(Xo),i&&t(zp),i&&t(Ht),x(Zo),x(ar),x(In),x(nr),i&&t(xp),i&&t(cn),x(or),i&&t(Cp),i&&t(Ut),x(rr),x(pr),x(Hn),x(cr),i&&t(Mp),i&&t(un),x(hr),i&&t(Pp),i&&t(pt),x(mr),x(Rn),x(_r),x(Gn),x(Tr),i&&t(Sp),i&&t(gn),x(br),i&&t(Dp),i&&t(ct),x(vr),x(Vn),x(jr),x(Kn),x($r),i&&t(Np),i&&t(Tn),x(Er),i&&t(Op),i&&t(ht),x(Fr),x(Jn),x(Cr),x(Xn),x(Mr),i&&t(Lp),i&&t(vn),x(Pr),i&&t(Qp),i&&t(mt),x(Sr),x(eo),x(Lr),x(to),x(Qr)}}}const Ak={local:"tapas",sections:[{local:"overview",title:"Overview"},{local:"usage-finetuning",title:"Usage: fine-tuning"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",title:"TAPAS specific outputs"},{local:"transformers.TapasConfig",title:"TapasConfig"},{local:"transformers.TapasTokenizer",title:"TapasTokenizer"},{local:"transformers.TapasModel",title:"TapasModel"},{local:"transformers.TapasForMaskedLM",title:"TapasForMaskedLM"},{local:"transformers.TapasForSequenceClassification",title:"TapasForSequenceClassification"},{local:"transformers.TapasForQuestionAnswering",title:"TapasForQuestionAnswering"},{local:"transformers.TFTapasModel",title:"TFTapasModel"},{local:"transformers.TFTapasForMaskedLM",title:"TFTapasForMaskedLM"},{local:"transformers.TFTapasForSequenceClassification",title:"TFTapasForSequenceClassification"},{local:"transformers.TFTapasForQuestionAnswering",title:"TFTapasForQuestionAnswering"}],title:"TAPAS"};function zk(U){return Zy(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Nk extends Vy{constructor(l){super();Ky(this,l,zk,Fk,Yy,{})}}export{Nk as default,Ak as metadata};
