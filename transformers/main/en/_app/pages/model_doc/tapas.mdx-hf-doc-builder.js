import{S as uy,i as my,s as fy,e as o,k as c,w as j,t as s,M as gy,c as n,d as t,m as h,a as r,x as q,h as a,b as m,N as _y,G as e,g as u,y as $,q as E,o as F,B as A,v as Ty,L as Ft}from"../../chunks/vendor-hf-doc-builder.js";import{T as Is}from"../../chunks/Tip-hf-doc-builder.js";import{D as it}from"../../chunks/Docstring-hf-doc-builder.js";import{C as ht}from"../../chunks/CodeBlock-hf-doc-builder.js";import{I as es}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{F as Mc,M as Tn}from"../../chunks/Markdown-hf-doc-builder.js";import{E as To}from"../../chunks/ExampleCodeBlock-hf-doc-builder.js";function by(P){let l,T,d,g,b,p,f,z,k,W,O,G,ae,v,J,Z,de,U,N;return f=new ht({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),U=new ht({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=o("p"),T=s(`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),d=o("a"),g=s("torch-scatter"),b=s(" dependency:"),p=c(),j(f.$$.fragment),z=c(),k=o("p"),W=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),O=o("a"),G=s("TapasConfig"),ae=s(", and then create a "),v=o("a"),J=s("TapasForQuestionAnswering"),Z=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),de=c(),j(U.$$.fragment),this.h()},l(y){l=n(y,"P",{});var C=r(l);T=a(C,`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),d=n(C,"A",{href:!0,rel:!0});var B=r(d);g=a(B,"torch-scatter"),B.forEach(t),b=a(C," dependency:"),C.forEach(t),p=h(y),q(f.$$.fragment,y),z=h(y),k=n(y,"P",{});var ee=r(k);W=a(ee,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),O=n(ee,"A",{href:!0});var pe=r(O);G=a(pe,"TapasConfig"),pe.forEach(t),ae=a(ee,", and then create a "),v=n(ee,"A",{href:!0});var R=r(v);J=a(R,"TapasForQuestionAnswering"),R.forEach(t),Z=a(ee," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),ee.forEach(t),de=h(y),q(U.$$.fragment,y),this.h()},h(){m(d,"href","https://github.com/rusty1s/pytorch_scatter"),m(d,"rel","nofollow"),m(O,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),m(v,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(y,C){u(y,l,C),e(l,T),e(l,d),e(d,g),e(l,b),u(y,p,C),$(f,y,C),u(y,z,C),u(y,k,C),e(k,W),e(k,O),e(O,G),e(k,ae),e(k,v),e(v,J),e(k,Z),u(y,de,C),$(U,y,C),N=!0},p:Ft,i(y){N||(E(f.$$.fragment,y),E(U.$$.fragment,y),N=!0)},o(y){F(f.$$.fragment,y),F(U.$$.fragment,y),N=!1},d(y){y&&t(l),y&&t(p),A(f,y),y&&t(z),y&&t(k),y&&t(de),A(U,y)}}}function wy(P){let l,T;return l=new Tn({props:{$$slots:{default:[by]},$$scope:{ctx:P}}}),{c(){j(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,g){$(l,d,g),T=!0},p(d,g){const b={};g&2&&(b.$$scope={dirty:g,ctx:d}),l.$set(b)},i(d){T||(E(l.$$.fragment,d),T=!0)},o(d){F(l.$$.fragment,d),T=!1},d(d){A(l,d)}}}function vy(P){let l,T,d,g,b,p,f,z,k,W,O,G,ae,v,J,Z,de,U,N;return f=new ht({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

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
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),U=new ht({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}),{c(){l=o("p"),T=s("Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),d=o("a"),g=s("tensorflow_probability"),b=s(" dependency:"),p=c(),j(f.$$.fragment),z=c(),k=o("p"),W=s("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),O=o("a"),G=s("TapasConfig"),ae=s(", and then create a "),v=o("a"),J=s("TFTapasForQuestionAnswering"),Z=s(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),de=c(),j(U.$$.fragment),this.h()},l(y){l=n(y,"P",{});var C=r(l);T=a(C,"Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the "),d=n(C,"A",{href:!0,rel:!0});var B=r(d);g=a(B,"tensorflow_probability"),B.forEach(t),b=a(C," dependency:"),C.forEach(t),p=h(y),q(f.$$.fragment,y),z=h(y),k=n(y,"P",{});var ee=r(k);W=a(ee,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),O=n(ee,"A",{href:!0});var pe=r(O);G=a(pe,"TapasConfig"),pe.forEach(t),ae=a(ee,", and then create a "),v=n(ee,"A",{href:!0});var R=r(v);J=a(R,"TFTapasForQuestionAnswering"),R.forEach(t),Z=a(ee," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),ee.forEach(t),de=h(y),q(U.$$.fragment,y),this.h()},h(){m(d,"href","https://github.com/tensorflow/probability"),m(d,"rel","nofollow"),m(O,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),m(v,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(y,C){u(y,l,C),e(l,T),e(l,d),e(d,g),e(l,b),u(y,p,C),$(f,y,C),u(y,z,C),u(y,k,C),e(k,W),e(k,O),e(O,G),e(k,ae),e(k,v),e(v,J),e(k,Z),u(y,de,C),$(U,y,C),N=!0},p:Ft,i(y){N||(E(f.$$.fragment,y),E(U.$$.fragment,y),N=!0)},o(y){F(f.$$.fragment,y),F(U.$$.fragment,y),N=!1},d(y){y&&t(l),y&&t(p),A(f,y),y&&t(z),y&&t(k),y&&t(de),A(U,y)}}}function yy(P){let l,T;return l=new Tn({props:{$$slots:{default:[vy]},$$scope:{ctx:P}}}),{c(){j(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,g){$(l,d,g),T=!0},p(d,g){const b={};g&2&&(b.$$scope={dirty:g,ctx:d}),l.$set(b)},i(d){T||(E(l.$$.fragment,d),T=!0)},o(d){F(l.$$.fragment,d),T=!1},d(d){A(l,d)}}}function ky(P){let l,T,d,g,b,p,f,z,k,W,O,G,ae,v,J,Z,de,U,N,y,C,B,ee,pe,R,ge,he,X,_e,D,L,I,M,K,H,ve,ze,ue,fe,Ae,se,ke,Te,Pe,Ce,je,Me,$e,ce,Se,ye,Y,qe,V,We,oe,He,Ue,w,S,Ve,be,Ye,Je,Q,Le,ot,Qe,Ie,Xe,le,Ee,Ze,xe,ne,et,Be,re,Re,Fe,tt,Pt,Mt,Ws,St,bs,ts,Dt,ws,ut,De,Hs,Ot,ie,bt,ss,Us,Nt,ns,Bs,Lt,Qt,Rs,It,rs,Gs,Wt,is,Ks,Ht,Vs,st,Ut,ls,Ys,Bt,ds,Js,ps,lt,cs,Oe,hs,wt,Xs,Rt,Gt,Zs,ea,dt,ta,us,ms,gt,Kt;return lt=new ht({props:{code:`from transformers import TapasTokenizer
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
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`}}),gt=new ht({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=<span class="hljs-number">32</span>)`}}),{c(){l=o("p"),T=s("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),d=o("a"),g=s("TapasTokenizer"),b=s(" to convert table-question pairs into "),p=o("code"),f=s("input_ids"),z=s(", "),k=o("code"),W=s("attention_mask"),O=s(", "),G=o("code"),ae=s("token_type_ids"),v=s(" and so on. Again, based on which of the three cases you picked above, "),J=o("a"),Z=s("TapasForQuestionAnswering"),de=s(` requires different
inputs to be fine-tuned:`),U=c(),N=o("table"),y=o("thead"),C=o("tr"),B=o("th"),ee=o("strong"),pe=s("Task"),R=c(),ge=o("th"),he=o("strong"),X=s("Required inputs"),_e=c(),D=o("tbody"),L=o("tr"),I=o("td"),M=s("Conversational"),K=c(),H=o("td"),ve=o("code"),ze=s("input_ids"),ue=s(", "),fe=o("code"),Ae=s("attention_mask"),se=s(", "),ke=o("code"),Te=s("token_type_ids"),Pe=s(", "),Ce=o("code"),je=s("labels"),Me=c(),$e=o("tr"),ce=o("td"),Se=s("Weak supervision for aggregation"),ye=c(),Y=o("td"),qe=o("code"),V=s("input_ids"),We=s(", "),oe=o("code"),He=s("attention_mask"),Ue=s(", "),w=o("code"),S=s("token_type_ids"),Ve=s(", "),be=o("code"),Ye=s("labels"),Je=s(", "),Q=o("code"),Le=s("numeric_values"),ot=s(", "),Qe=o("code"),Ie=s("numeric_values_scale"),Xe=s(", "),le=o("code"),Ee=s("float_answer"),Ze=c(),xe=o("tr"),ne=o("td"),et=s("Strong supervision for aggregation"),Be=c(),re=o("td"),Re=o("code"),Fe=s("input ids"),tt=s(", "),Pt=o("code"),Mt=s("attention mask"),Ws=s(", "),St=o("code"),bs=s("token type ids"),ts=s(", "),Dt=o("code"),ws=s("labels"),ut=s(", "),De=o("code"),Hs=s("aggregation_labels"),Ot=c(),ie=o("p"),bt=o("a"),ss=s("TapasTokenizer"),Us=s(" creates the "),Nt=o("code"),ns=s("labels"),Bs=s(", "),Lt=o("code"),Qt=s("numeric_values"),Rs=s(" and "),It=o("code"),rs=s("numeric_values_scale"),Gs=s(" based on the "),Wt=o("code"),is=s("answer_coordinates"),Ks=s(" and "),Ht=o("code"),Vs=s("answer_text"),st=s(" columns of the TSV file. The "),Ut=o("code"),ls=s("float_answer"),Ys=s(" and "),Bt=o("code"),ds=s("aggregation_labels"),Js=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ps=c(),j(lt.$$.fragment),cs=c(),Oe=o("p"),hs=s("Note that "),wt=o("a"),Xs=s("TapasTokenizer"),Rt=s(" expects the data of the table to be "),Gt=o("strong"),Zs=s("text-only"),ea=s(". You can use "),dt=o("code"),ta=s(".astype(str)"),us=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),ms=c(),j(gt.$$.fragment),this.h()},l(x){l=n(x,"P",{});var te=r(l);T=a(te,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),d=n(te,"A",{href:!0});var ka=r(d);g=a(ka,"TapasTokenizer"),ka.forEach(t),b=a(te," to convert table-question pairs into "),p=n(te,"CODE",{});var sa=r(p);f=a(sa,"input_ids"),sa.forEach(t),z=a(te,", "),k=n(te,"CODE",{});var ja=r(k);W=a(ja,"attention_mask"),ja.forEach(t),O=a(te,", "),G=n(te,"CODE",{});var ha=r(G);ae=a(ha,"token_type_ids"),ha.forEach(t),v=a(te," and so on. Again, based on which of the three cases you picked above, "),J=n(te,"A",{href:!0});var Vt=r(J);Z=a(Vt,"TapasForQuestionAnswering"),Vt.forEach(t),de=a(te,` requires different
inputs to be fine-tuned:`),te.forEach(t),U=h(x),N=n(x,"TABLE",{});var _t=r(N);y=n(_t,"THEAD",{});var aa=r(y);C=n(aa,"TR",{});var vt=r(C);B=n(vt,"TH",{});var qa=r(B);ee=n(qa,"STRONG",{});var oa=r(ee);pe=a(oa,"Task"),oa.forEach(t),qa.forEach(t),R=h(vt),ge=n(vt,"TH",{});var $a=r(ge);he=n($a,"STRONG",{});var ua=r(he);X=a(ua,"Required inputs"),ua.forEach(t),$a.forEach(t),vt.forEach(t),aa.forEach(t),_e=h(_t),D=n(_t,"TBODY",{});var nt=r(D);L=n(nt,"TR",{});var fs=r(L);I=n(fs,"TD",{});var vs=r(I);M=a(vs,"Conversational"),vs.forEach(t),K=h(fs),H=n(fs,"TD",{});var pt=r(H);ve=n(pt,"CODE",{});var Ea=r(ve);ze=a(Ea,"input_ids"),Ea.forEach(t),ue=a(pt,", "),fe=n(pt,"CODE",{});var ma=r(fe);Ae=a(ma,"attention_mask"),ma.forEach(t),se=a(pt,", "),ke=n(pt,"CODE",{});var ys=r(ke);Te=a(ys,"token_type_ids"),ys.forEach(t),Pe=a(pt,", "),Ce=n(pt,"CODE",{});var na=r(Ce);je=a(na,"labels"),na.forEach(t),pt.forEach(t),fs.forEach(t),Me=h(nt),$e=n(nt,"TR",{});var gs=r($e);ce=n(gs,"TD",{});var fa=r(ce);Se=a(fa,"Weak supervision for aggregation"),fa.forEach(t),ye=h(gs),Y=n(gs,"TD",{});var we=r(Y);qe=n(we,"CODE",{});var Fa=r(qe);V=a(Fa,"input_ids"),Fa.forEach(t),We=a(we,", "),oe=n(we,"CODE",{});var ks=r(oe);He=a(ks,"attention_mask"),ks.forEach(t),Ue=a(we,", "),w=n(we,"CODE",{});var Aa=r(w);S=a(Aa,"token_type_ids"),Aa.forEach(t),Ve=a(we,", "),be=n(we,"CODE",{});var za=r(be);Ye=a(za,"labels"),za.forEach(t),Je=a(we,", "),Q=n(we,"CODE",{});var ga=r(Q);Le=a(ga,"numeric_values"),ga.forEach(t),ot=a(we,", "),Qe=n(we,"CODE",{});var At=r(Qe);Ie=a(At,"numeric_values_scale"),At.forEach(t),Xe=a(we,", "),le=n(we,"CODE",{});var ra=r(le);Ee=a(ra,"float_answer"),ra.forEach(t),we.forEach(t),gs.forEach(t),Ze=h(nt),xe=n(nt,"TR",{});var _s=r(xe);ne=n(_s,"TD",{});var xa=r(ne);et=a(xa,"Strong supervision for aggregation"),xa.forEach(t),Be=h(_s),re=n(_s,"TD",{});var Ne=r(re);Re=n(Ne,"CODE",{});var Ca=r(Re);Fe=a(Ca,"input ids"),Ca.forEach(t),tt=a(Ne,", "),Pt=n(Ne,"CODE",{});var ia=r(Pt);Mt=a(ia,"attention mask"),ia.forEach(t),Ws=a(Ne,", "),St=n(Ne,"CODE",{});var Pa=r(St);bs=a(Pa,"token type ids"),Pa.forEach(t),ts=a(Ne,", "),Dt=n(Ne,"CODE",{});var Ma=r(Dt);ws=a(Ma,"labels"),Ma.forEach(t),ut=a(Ne,", "),De=n(Ne,"CODE",{});var Sa=r(De);Hs=a(Sa,"aggregation_labels"),Sa.forEach(t),Ne.forEach(t),_s.forEach(t),nt.forEach(t),_t.forEach(t),Ot=h(x),ie=n(x,"P",{});var me=r(ie);bt=n(me,"A",{href:!0});var Da=r(bt);ss=a(Da,"TapasTokenizer"),Da.forEach(t),Us=a(me," creates the "),Nt=n(me,"CODE",{});var la=r(Nt);ns=a(la,"labels"),la.forEach(t),Bs=a(me,", "),Lt=n(me,"CODE",{});var Oa=r(Lt);Qt=a(Oa,"numeric_values"),Oa.forEach(t),Rs=a(me," and "),It=n(me,"CODE",{});var Na=r(It);rs=a(Na,"numeric_values_scale"),Na.forEach(t),Gs=a(me," based on the "),Wt=n(me,"CODE",{});var _a=r(Wt);is=a(_a,"answer_coordinates"),_a.forEach(t),Ks=a(me," and "),Ht=n(me,"CODE",{});var js=r(Ht);Vs=a(js,"answer_text"),js.forEach(t),st=a(me," columns of the TSV file. The "),Ut=n(me,"CODE",{});var La=r(Ut);ls=a(La,"float_answer"),La.forEach(t),Ys=a(me," and "),Bt=n(me,"CODE",{});var Ta=r(Bt);ds=a(Ta,"aggregation_labels"),Ta.forEach(t),Js=a(me," are already in the TSV file of step 2. Here\u2019s an example:"),me.forEach(t),ps=h(x),q(lt.$$.fragment,x),cs=h(x),Oe=n(x,"P",{});var Ge=r(Oe);hs=a(Ge,"Note that "),wt=n(Ge,"A",{href:!0});var da=r(wt);Xs=a(da,"TapasTokenizer"),da.forEach(t),Rt=a(Ge," expects the data of the table to be "),Gt=n(Ge,"STRONG",{});var Yt=r(Gt);Zs=a(Yt,"text-only"),Yt.forEach(t),ea=a(Ge,". You can use "),dt=n(Ge,"CODE",{});var pa=r(dt);ta=a(pa,".astype(str)"),pa.forEach(t),us=a(Ge,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ge.forEach(t),ms=h(x),q(gt.$$.fragment,x),this.h()},h(){m(d,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),m(J,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),m(bt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),m(wt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(x,te){u(x,l,te),e(l,T),e(l,d),e(d,g),e(l,b),e(l,p),e(p,f),e(l,z),e(l,k),e(k,W),e(l,O),e(l,G),e(G,ae),e(l,v),e(l,J),e(J,Z),e(l,de),u(x,U,te),u(x,N,te),e(N,y),e(y,C),e(C,B),e(B,ee),e(ee,pe),e(C,R),e(C,ge),e(ge,he),e(he,X),e(N,_e),e(N,D),e(D,L),e(L,I),e(I,M),e(L,K),e(L,H),e(H,ve),e(ve,ze),e(H,ue),e(H,fe),e(fe,Ae),e(H,se),e(H,ke),e(ke,Te),e(H,Pe),e(H,Ce),e(Ce,je),e(D,Me),e(D,$e),e($e,ce),e(ce,Se),e($e,ye),e($e,Y),e(Y,qe),e(qe,V),e(Y,We),e(Y,oe),e(oe,He),e(Y,Ue),e(Y,w),e(w,S),e(Y,Ve),e(Y,be),e(be,Ye),e(Y,Je),e(Y,Q),e(Q,Le),e(Y,ot),e(Y,Qe),e(Qe,Ie),e(Y,Xe),e(Y,le),e(le,Ee),e(D,Ze),e(D,xe),e(xe,ne),e(ne,et),e(xe,Be),e(xe,re),e(re,Re),e(Re,Fe),e(re,tt),e(re,Pt),e(Pt,Mt),e(re,Ws),e(re,St),e(St,bs),e(re,ts),e(re,Dt),e(Dt,ws),e(re,ut),e(re,De),e(De,Hs),u(x,Ot,te),u(x,ie,te),e(ie,bt),e(bt,ss),e(ie,Us),e(ie,Nt),e(Nt,ns),e(ie,Bs),e(ie,Lt),e(Lt,Qt),e(ie,Rs),e(ie,It),e(It,rs),e(ie,Gs),e(ie,Wt),e(Wt,is),e(ie,Ks),e(ie,Ht),e(Ht,Vs),e(ie,st),e(ie,Ut),e(Ut,ls),e(ie,Ys),e(ie,Bt),e(Bt,ds),e(ie,Js),u(x,ps,te),$(lt,x,te),u(x,cs,te),u(x,Oe,te),e(Oe,hs),e(Oe,wt),e(wt,Xs),e(Oe,Rt),e(Oe,Gt),e(Gt,Zs),e(Oe,ea),e(Oe,dt),e(dt,ta),e(Oe,us),u(x,ms,te),$(gt,x,te),Kt=!0},p:Ft,i(x){Kt||(E(lt.$$.fragment,x),E(gt.$$.fragment,x),Kt=!0)},o(x){F(lt.$$.fragment,x),F(gt.$$.fragment,x),Kt=!1},d(x){x&&t(l),x&&t(U),x&&t(N),x&&t(Ot),x&&t(ie),x&&t(ps),A(lt,x),x&&t(cs),x&&t(Oe),x&&t(ms),A(gt,x)}}}function jy(P){let l,T;return l=new Tn({props:{$$slots:{default:[ky]},$$scope:{ctx:P}}}),{c(){j(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,g){$(l,d,g),T=!0},p(d,g){const b={};g&2&&(b.$$scope={dirty:g,ctx:d}),l.$set(b)},i(d){T||(E(l.$$.fragment,d),T=!0)},o(d){F(l.$$.fragment,d),T=!1},d(d){A(l,d)}}}function qy(P){let l,T,d,g,b,p,f,z,k,W,O,G,ae,v,J,Z,de,U,N,y,C,B,ee,pe,R,ge,he,X,_e,D,L,I,M,K,H,ve,ze,ue,fe,Ae,se,ke,Te,Pe,Ce,je,Me,$e,ce,Se,ye,Y,qe,V,We,oe,He,Ue,w,S,Ve,be,Ye,Je,Q,Le,ot,Qe,Ie,Xe,le,Ee,Ze,xe,ne,et,Be,re,Re,Fe,tt,Pt,Mt,Ws,St,bs,ts,Dt,ws,ut,De,Hs,Ot,ie,bt,ss,Us,Nt,ns,Bs,Lt,Qt,Rs,It,rs,Gs,Wt,is,Ks,Ht,Vs,st,Ut,ls,Ys,Bt,ds,Js,ps,lt,cs,Oe,hs,wt,Xs,Rt,Gt,Zs,ea,dt,ta,us,ms,gt,Kt;return lt=new ht({props:{code:`from transformers import TapasTokenizer
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
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`}}),gt=new ht({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(<span class="hljs-number">32</span>)`}}),{c(){l=o("p"),T=s("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),d=o("a"),g=s("TapasTokenizer"),b=s(" to convert table-question pairs into "),p=o("code"),f=s("input_ids"),z=s(", "),k=o("code"),W=s("attention_mask"),O=s(", "),G=o("code"),ae=s("token_type_ids"),v=s(" and so on. Again, based on which of the three cases you picked above, "),J=o("a"),Z=s("TFTapasForQuestionAnswering"),de=s(` requires different
inputs to be fine-tuned:`),U=c(),N=o("table"),y=o("thead"),C=o("tr"),B=o("th"),ee=o("strong"),pe=s("Task"),R=c(),ge=o("th"),he=o("strong"),X=s("Required inputs"),_e=c(),D=o("tbody"),L=o("tr"),I=o("td"),M=s("Conversational"),K=c(),H=o("td"),ve=o("code"),ze=s("input_ids"),ue=s(", "),fe=o("code"),Ae=s("attention_mask"),se=s(", "),ke=o("code"),Te=s("token_type_ids"),Pe=s(", "),Ce=o("code"),je=s("labels"),Me=c(),$e=o("tr"),ce=o("td"),Se=s("Weak supervision for aggregation"),ye=c(),Y=o("td"),qe=o("code"),V=s("input_ids"),We=s(", "),oe=o("code"),He=s("attention_mask"),Ue=s(", "),w=o("code"),S=s("token_type_ids"),Ve=s(", "),be=o("code"),Ye=s("labels"),Je=s(", "),Q=o("code"),Le=s("numeric_values"),ot=s(", "),Qe=o("code"),Ie=s("numeric_values_scale"),Xe=s(", "),le=o("code"),Ee=s("float_answer"),Ze=c(),xe=o("tr"),ne=o("td"),et=s("Strong supervision for aggregation"),Be=c(),re=o("td"),Re=o("code"),Fe=s("input ids"),tt=s(", "),Pt=o("code"),Mt=s("attention mask"),Ws=s(", "),St=o("code"),bs=s("token type ids"),ts=s(", "),Dt=o("code"),ws=s("labels"),ut=s(", "),De=o("code"),Hs=s("aggregation_labels"),Ot=c(),ie=o("p"),bt=o("a"),ss=s("TapasTokenizer"),Us=s(" creates the "),Nt=o("code"),ns=s("labels"),Bs=s(", "),Lt=o("code"),Qt=s("numeric_values"),Rs=s(" and "),It=o("code"),rs=s("numeric_values_scale"),Gs=s(" based on the "),Wt=o("code"),is=s("answer_coordinates"),Ks=s(" and "),Ht=o("code"),Vs=s("answer_text"),st=s(" columns of the TSV file. The "),Ut=o("code"),ls=s("float_answer"),Ys=s(" and "),Bt=o("code"),ds=s("aggregation_labels"),Js=s(" are already in the TSV file of step 2. Here\u2019s an example:"),ps=c(),j(lt.$$.fragment),cs=c(),Oe=o("p"),hs=s("Note that "),wt=o("a"),Xs=s("TapasTokenizer"),Rt=s(" expects the data of the table to be "),Gt=o("strong"),Zs=s("text-only"),ea=s(". You can use "),dt=o("code"),ta=s(".astype(str)"),us=s(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),ms=c(),j(gt.$$.fragment),this.h()},l(x){l=n(x,"P",{});var te=r(l);T=a(te,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),d=n(te,"A",{href:!0});var ka=r(d);g=a(ka,"TapasTokenizer"),ka.forEach(t),b=a(te," to convert table-question pairs into "),p=n(te,"CODE",{});var sa=r(p);f=a(sa,"input_ids"),sa.forEach(t),z=a(te,", "),k=n(te,"CODE",{});var ja=r(k);W=a(ja,"attention_mask"),ja.forEach(t),O=a(te,", "),G=n(te,"CODE",{});var ha=r(G);ae=a(ha,"token_type_ids"),ha.forEach(t),v=a(te," and so on. Again, based on which of the three cases you picked above, "),J=n(te,"A",{href:!0});var Vt=r(J);Z=a(Vt,"TFTapasForQuestionAnswering"),Vt.forEach(t),de=a(te,` requires different
inputs to be fine-tuned:`),te.forEach(t),U=h(x),N=n(x,"TABLE",{});var _t=r(N);y=n(_t,"THEAD",{});var aa=r(y);C=n(aa,"TR",{});var vt=r(C);B=n(vt,"TH",{});var qa=r(B);ee=n(qa,"STRONG",{});var oa=r(ee);pe=a(oa,"Task"),oa.forEach(t),qa.forEach(t),R=h(vt),ge=n(vt,"TH",{});var $a=r(ge);he=n($a,"STRONG",{});var ua=r(he);X=a(ua,"Required inputs"),ua.forEach(t),$a.forEach(t),vt.forEach(t),aa.forEach(t),_e=h(_t),D=n(_t,"TBODY",{});var nt=r(D);L=n(nt,"TR",{});var fs=r(L);I=n(fs,"TD",{});var vs=r(I);M=a(vs,"Conversational"),vs.forEach(t),K=h(fs),H=n(fs,"TD",{});var pt=r(H);ve=n(pt,"CODE",{});var Ea=r(ve);ze=a(Ea,"input_ids"),Ea.forEach(t),ue=a(pt,", "),fe=n(pt,"CODE",{});var ma=r(fe);Ae=a(ma,"attention_mask"),ma.forEach(t),se=a(pt,", "),ke=n(pt,"CODE",{});var ys=r(ke);Te=a(ys,"token_type_ids"),ys.forEach(t),Pe=a(pt,", "),Ce=n(pt,"CODE",{});var na=r(Ce);je=a(na,"labels"),na.forEach(t),pt.forEach(t),fs.forEach(t),Me=h(nt),$e=n(nt,"TR",{});var gs=r($e);ce=n(gs,"TD",{});var fa=r(ce);Se=a(fa,"Weak supervision for aggregation"),fa.forEach(t),ye=h(gs),Y=n(gs,"TD",{});var we=r(Y);qe=n(we,"CODE",{});var Fa=r(qe);V=a(Fa,"input_ids"),Fa.forEach(t),We=a(we,", "),oe=n(we,"CODE",{});var ks=r(oe);He=a(ks,"attention_mask"),ks.forEach(t),Ue=a(we,", "),w=n(we,"CODE",{});var Aa=r(w);S=a(Aa,"token_type_ids"),Aa.forEach(t),Ve=a(we,", "),be=n(we,"CODE",{});var za=r(be);Ye=a(za,"labels"),za.forEach(t),Je=a(we,", "),Q=n(we,"CODE",{});var ga=r(Q);Le=a(ga,"numeric_values"),ga.forEach(t),ot=a(we,", "),Qe=n(we,"CODE",{});var At=r(Qe);Ie=a(At,"numeric_values_scale"),At.forEach(t),Xe=a(we,", "),le=n(we,"CODE",{});var ra=r(le);Ee=a(ra,"float_answer"),ra.forEach(t),we.forEach(t),gs.forEach(t),Ze=h(nt),xe=n(nt,"TR",{});var _s=r(xe);ne=n(_s,"TD",{});var xa=r(ne);et=a(xa,"Strong supervision for aggregation"),xa.forEach(t),Be=h(_s),re=n(_s,"TD",{});var Ne=r(re);Re=n(Ne,"CODE",{});var Ca=r(Re);Fe=a(Ca,"input ids"),Ca.forEach(t),tt=a(Ne,", "),Pt=n(Ne,"CODE",{});var ia=r(Pt);Mt=a(ia,"attention mask"),ia.forEach(t),Ws=a(Ne,", "),St=n(Ne,"CODE",{});var Pa=r(St);bs=a(Pa,"token type ids"),Pa.forEach(t),ts=a(Ne,", "),Dt=n(Ne,"CODE",{});var Ma=r(Dt);ws=a(Ma,"labels"),Ma.forEach(t),ut=a(Ne,", "),De=n(Ne,"CODE",{});var Sa=r(De);Hs=a(Sa,"aggregation_labels"),Sa.forEach(t),Ne.forEach(t),_s.forEach(t),nt.forEach(t),_t.forEach(t),Ot=h(x),ie=n(x,"P",{});var me=r(ie);bt=n(me,"A",{href:!0});var Da=r(bt);ss=a(Da,"TapasTokenizer"),Da.forEach(t),Us=a(me," creates the "),Nt=n(me,"CODE",{});var la=r(Nt);ns=a(la,"labels"),la.forEach(t),Bs=a(me,", "),Lt=n(me,"CODE",{});var Oa=r(Lt);Qt=a(Oa,"numeric_values"),Oa.forEach(t),Rs=a(me," and "),It=n(me,"CODE",{});var Na=r(It);rs=a(Na,"numeric_values_scale"),Na.forEach(t),Gs=a(me," based on the "),Wt=n(me,"CODE",{});var _a=r(Wt);is=a(_a,"answer_coordinates"),_a.forEach(t),Ks=a(me," and "),Ht=n(me,"CODE",{});var js=r(Ht);Vs=a(js,"answer_text"),js.forEach(t),st=a(me," columns of the TSV file. The "),Ut=n(me,"CODE",{});var La=r(Ut);ls=a(La,"float_answer"),La.forEach(t),Ys=a(me," and "),Bt=n(me,"CODE",{});var Ta=r(Bt);ds=a(Ta,"aggregation_labels"),Ta.forEach(t),Js=a(me," are already in the TSV file of step 2. Here\u2019s an example:"),me.forEach(t),ps=h(x),q(lt.$$.fragment,x),cs=h(x),Oe=n(x,"P",{});var Ge=r(Oe);hs=a(Ge,"Note that "),wt=n(Ge,"A",{href:!0});var da=r(wt);Xs=a(da,"TapasTokenizer"),da.forEach(t),Rt=a(Ge," expects the data of the table to be "),Gt=n(Ge,"STRONG",{});var Yt=r(Gt);Zs=a(Yt,"text-only"),Yt.forEach(t),ea=a(Ge,". You can use "),dt=n(Ge,"CODE",{});var pa=r(dt);ta=a(pa,".astype(str)"),pa.forEach(t),us=a(Ge,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Ge.forEach(t),ms=h(x),q(gt.$$.fragment,x),this.h()},h(){m(d,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),m(J,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),m(bt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),m(wt,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(x,te){u(x,l,te),e(l,T),e(l,d),e(d,g),e(l,b),e(l,p),e(p,f),e(l,z),e(l,k),e(k,W),e(l,O),e(l,G),e(G,ae),e(l,v),e(l,J),e(J,Z),e(l,de),u(x,U,te),u(x,N,te),e(N,y),e(y,C),e(C,B),e(B,ee),e(ee,pe),e(C,R),e(C,ge),e(ge,he),e(he,X),e(N,_e),e(N,D),e(D,L),e(L,I),e(I,M),e(L,K),e(L,H),e(H,ve),e(ve,ze),e(H,ue),e(H,fe),e(fe,Ae),e(H,se),e(H,ke),e(ke,Te),e(H,Pe),e(H,Ce),e(Ce,je),e(D,Me),e(D,$e),e($e,ce),e(ce,Se),e($e,ye),e($e,Y),e(Y,qe),e(qe,V),e(Y,We),e(Y,oe),e(oe,He),e(Y,Ue),e(Y,w),e(w,S),e(Y,Ve),e(Y,be),e(be,Ye),e(Y,Je),e(Y,Q),e(Q,Le),e(Y,ot),e(Y,Qe),e(Qe,Ie),e(Y,Xe),e(Y,le),e(le,Ee),e(D,Ze),e(D,xe),e(xe,ne),e(ne,et),e(xe,Be),e(xe,re),e(re,Re),e(Re,Fe),e(re,tt),e(re,Pt),e(Pt,Mt),e(re,Ws),e(re,St),e(St,bs),e(re,ts),e(re,Dt),e(Dt,ws),e(re,ut),e(re,De),e(De,Hs),u(x,Ot,te),u(x,ie,te),e(ie,bt),e(bt,ss),e(ie,Us),e(ie,Nt),e(Nt,ns),e(ie,Bs),e(ie,Lt),e(Lt,Qt),e(ie,Rs),e(ie,It),e(It,rs),e(ie,Gs),e(ie,Wt),e(Wt,is),e(ie,Ks),e(ie,Ht),e(Ht,Vs),e(ie,st),e(ie,Ut),e(Ut,ls),e(ie,Ys),e(ie,Bt),e(Bt,ds),e(ie,Js),u(x,ps,te),$(lt,x,te),u(x,cs,te),u(x,Oe,te),e(Oe,hs),e(Oe,wt),e(wt,Xs),e(Oe,Rt),e(Oe,Gt),e(Gt,Zs),e(Oe,ea),e(Oe,dt),e(dt,ta),e(Oe,us),u(x,ms,te),$(gt,x,te),Kt=!0},p:Ft,i(x){Kt||(E(lt.$$.fragment,x),E(gt.$$.fragment,x),Kt=!0)},o(x){F(lt.$$.fragment,x),F(gt.$$.fragment,x),Kt=!1},d(x){x&&t(l),x&&t(U),x&&t(N),x&&t(Ot),x&&t(ie),x&&t(ps),A(lt,x),x&&t(cs),x&&t(Oe),x&&t(ms),A(gt,x)}}}function $y(P){let l,T;return l=new Tn({props:{$$slots:{default:[qy]},$$scope:{ctx:P}}}),{c(){j(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,g){$(l,d,g),T=!0},p(d,g){const b={};g&2&&(b.$$scope={dirty:g,ctx:d}),l.$set(b)},i(d){T||(E(l.$$.fragment,d),T=!0)},o(d){F(l.$$.fragment,d),T=!1},d(d){A(l,d)}}}function Ey(P){let l,T,d,g,b,p,f,z;return f=new ht({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering, AdamW

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
<span class="hljs-meta">... </span>        optimizer.step()`}}),{c(){l=o("p"),T=s("You can then fine-tune "),d=o("a"),g=s("TapasForQuestionAnswering"),b=s(" as follows (shown here for the weak supervision for aggregation case):"),p=c(),j(f.$$.fragment),this.h()},l(k){l=n(k,"P",{});var W=r(l);T=a(W,"You can then fine-tune "),d=n(W,"A",{href:!0});var O=r(d);g=a(O,"TapasForQuestionAnswering"),O.forEach(t),b=a(W," as follows (shown here for the weak supervision for aggregation case):"),W.forEach(t),p=h(k),q(f.$$.fragment,k),this.h()},h(){m(d,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering")},m(k,W){u(k,l,W),e(l,T),e(l,d),e(d,g),e(l,b),u(k,p,W),$(f,k,W),z=!0},p:Ft,i(k){z||(E(f.$$.fragment,k),z=!0)},o(k){F(f.$$.fragment,k),z=!1},d(k){k&&t(l),k&&t(p),A(f,k)}}}function Fy(P){let l,T;return l=new Tn({props:{$$slots:{default:[Ey]},$$scope:{ctx:P}}}),{c(){j(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,g){$(l,d,g),T=!0},p(d,g){const b={};g&2&&(b.$$scope={dirty:g,ctx:d}),l.$set(b)},i(d){T||(E(l.$$.fragment,d),T=!0)},o(d){F(l.$$.fragment,d),T=!1},d(d){A(l,d)}}}function Ay(P){let l,T,d,g,b,p,f,z;return f=new ht({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">... </span>        optimizer.apply_gradients(<span class="hljs-built_in">zip</span>(grads, model.trainable_weights))`}}),{c(){l=o("p"),T=s("You can then fine-tune "),d=o("a"),g=s("TFTapasForQuestionAnswering"),b=s(" as follows (shown here for the weak supervision for aggregation case):"),p=c(),j(f.$$.fragment),this.h()},l(k){l=n(k,"P",{});var W=r(l);T=a(W,"You can then fine-tune "),d=n(W,"A",{href:!0});var O=r(d);g=a(O,"TFTapasForQuestionAnswering"),O.forEach(t),b=a(W," as follows (shown here for the weak supervision for aggregation case):"),W.forEach(t),p=h(k),q(f.$$.fragment,k),this.h()},h(){m(d,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering")},m(k,W){u(k,l,W),e(l,T),e(l,d),e(d,g),e(l,b),u(k,p,W),$(f,k,W),z=!0},p:Ft,i(k){z||(E(f.$$.fragment,k),z=!0)},o(k){F(f.$$.fragment,k),z=!1},d(k){k&&t(l),k&&t(p),A(f,k)}}}function zy(P){let l,T;return l=new Tn({props:{$$slots:{default:[Ay]},$$scope:{ctx:P}}}),{c(){j(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,g){$(l,d,g),T=!0},p(d,g){const b={};g&2&&(b.$$scope={dirty:g,ctx:d}),l.$set(b)},i(d){T||(E(l.$$.fragment,d),T=!0)},o(d){F(l.$$.fragment,d),T=!1},d(d){A(l,d)}}}function xy(P){let l,T,d,g,b,p,f,z,k,W,O,G,ae,v,J,Z,de,U,N,y,C,B,ee,pe,R,ge,he,X,_e,D,L,I;return L=new ht({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=o("p"),T=s("Here we explain how you can use "),d=o("a"),g=s("TapasForQuestionAnswering"),b=s(" or "),p=o("a"),f=s("TFTapasForQuestionAnswering"),z=s(" for inference (i.e. making predictions on new data). For inference, only "),k=o("code"),W=s("input_ids"),O=s(", "),G=o("code"),ae=s("attention_mask"),v=s(" and "),J=o("code"),Z=s("token_type_ids"),de=s(" (which you can obtain using "),U=o("a"),N=s("TapasTokenizer"),y=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),C=o("code"),B=s("~models.tapas.tokenization_tapas.convert_logits_to_predictions"),ee=s(" method to convert these into predicted coordinates and optional aggregation indices."),pe=c(),R=o("p"),ge=s("However, note that inference is "),he=o("strong"),X=s("different"),_e=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),D=c(),j(L.$$.fragment),this.h()},l(M){l=n(M,"P",{});var K=r(l);T=a(K,"Here we explain how you can use "),d=n(K,"A",{href:!0});var H=r(d);g=a(H,"TapasForQuestionAnswering"),H.forEach(t),b=a(K," or "),p=n(K,"A",{href:!0});var ve=r(p);f=a(ve,"TFTapasForQuestionAnswering"),ve.forEach(t),z=a(K," for inference (i.e. making predictions on new data). For inference, only "),k=n(K,"CODE",{});var ze=r(k);W=a(ze,"input_ids"),ze.forEach(t),O=a(K,", "),G=n(K,"CODE",{});var ue=r(G);ae=a(ue,"attention_mask"),ue.forEach(t),v=a(K," and "),J=n(K,"CODE",{});var fe=r(J);Z=a(fe,"token_type_ids"),fe.forEach(t),de=a(K," (which you can obtain using "),U=n(K,"A",{href:!0});var Ae=r(U);N=a(Ae,"TapasTokenizer"),Ae.forEach(t),y=a(K,") have to be provided to the model to obtain the logits. Next, you can use the handy "),C=n(K,"CODE",{});var se=r(C);B=a(se,"~models.tapas.tokenization_tapas.convert_logits_to_predictions"),se.forEach(t),ee=a(K," method to convert these into predicted coordinates and optional aggregation indices."),K.forEach(t),pe=h(M),R=n(M,"P",{});var ke=r(R);ge=a(ke,"However, note that inference is "),he=n(ke,"STRONG",{});var Te=r(he);X=a(Te,"different"),Te.forEach(t),_e=a(ke," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ke.forEach(t),D=h(M),q(L.$$.fragment,M),this.h()},h(){m(d,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),m(p,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),m(U,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(M,K){u(M,l,K),e(l,T),e(l,d),e(d,g),e(l,b),e(l,p),e(p,f),e(l,z),e(l,k),e(k,W),e(l,O),e(l,G),e(G,ae),e(l,v),e(l,J),e(J,Z),e(l,de),e(l,U),e(U,N),e(l,y),e(l,C),e(C,B),e(l,ee),u(M,pe,K),u(M,R,K),e(R,ge),e(R,he),e(he,X),e(R,_e),u(M,D,K),$(L,M,K),I=!0},p:Ft,i(M){I||(E(L.$$.fragment,M),I=!0)},o(M){F(L.$$.fragment,M),I=!1},d(M){M&&t(l),M&&t(pe),M&&t(R),M&&t(D),A(L,M)}}}function Cy(P){let l,T;return l=new Tn({props:{$$slots:{default:[xy]},$$scope:{ctx:P}}}),{c(){j(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,g){$(l,d,g),T=!0},p(d,g){const b={};g&2&&(b.$$scope={dirty:g,ctx:d}),l.$set(b)},i(d){T||(E(l.$$.fragment,d),T=!0)},o(d){F(l.$$.fragment,d),T=!1},d(d){A(l,d)}}}function Py(P){let l,T,d,g,b,p,f,z,k,W,O,G,ae,v,J,Z,de,U,N,y,C,B,ee,pe,R,ge,he,X,_e;return X=new ht({props:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
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
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}),{c(){l=o("p"),T=s("Here we explain how you can use "),d=o("a"),g=s("TFTapasForQuestionAnswering"),b=s(" for inference (i.e. making predictions on new data). For inference, only "),p=o("code"),f=s("input_ids"),z=s(", "),k=o("code"),W=s("attention_mask"),O=s(" and "),G=o("code"),ae=s("token_type_ids"),v=s(" (which you can obtain using "),J=o("a"),Z=s("TapasTokenizer"),de=s(") have to be provided to the model to obtain the logits. Next, you can use the handy "),U=o("code"),N=s("~models.tapas.tokenization_tapas.convert_logits_to_predictions"),y=s(" method to convert these into predicted coordinates and optional aggregation indices."),C=c(),B=o("p"),ee=s("However, note that inference is "),pe=o("strong"),R=s("different"),ge=s(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),he=c(),j(X.$$.fragment),this.h()},l(D){l=n(D,"P",{});var L=r(l);T=a(L,"Here we explain how you can use "),d=n(L,"A",{href:!0});var I=r(d);g=a(I,"TFTapasForQuestionAnswering"),I.forEach(t),b=a(L," for inference (i.e. making predictions on new data). For inference, only "),p=n(L,"CODE",{});var M=r(p);f=a(M,"input_ids"),M.forEach(t),z=a(L,", "),k=n(L,"CODE",{});var K=r(k);W=a(K,"attention_mask"),K.forEach(t),O=a(L," and "),G=n(L,"CODE",{});var H=r(G);ae=a(H,"token_type_ids"),H.forEach(t),v=a(L," (which you can obtain using "),J=n(L,"A",{href:!0});var ve=r(J);Z=a(ve,"TapasTokenizer"),ve.forEach(t),de=a(L,") have to be provided to the model to obtain the logits. Next, you can use the handy "),U=n(L,"CODE",{});var ze=r(U);N=a(ze,"~models.tapas.tokenization_tapas.convert_logits_to_predictions"),ze.forEach(t),y=a(L," method to convert these into predicted coordinates and optional aggregation indices."),L.forEach(t),C=h(D),B=n(D,"P",{});var ue=r(B);ee=a(ue,"However, note that inference is "),pe=n(ue,"STRONG",{});var fe=r(pe);R=a(fe,"different"),fe.forEach(t),ge=a(ue," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),ue.forEach(t),he=h(D),q(X.$$.fragment,D),this.h()},h(){m(d,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),m(J,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer")},m(D,L){u(D,l,L),e(l,T),e(l,d),e(d,g),e(l,b),e(l,p),e(p,f),e(l,z),e(l,k),e(k,W),e(l,O),e(l,G),e(G,ae),e(l,v),e(l,J),e(J,Z),e(l,de),e(l,U),e(U,N),e(l,y),u(D,C,L),u(D,B,L),e(B,ee),e(B,pe),e(pe,R),e(B,ge),u(D,he,L),$(X,D,L),_e=!0},p:Ft,i(D){_e||(E(X.$$.fragment,D),_e=!0)},o(D){F(X.$$.fragment,D),_e=!1},d(D){D&&t(l),D&&t(C),D&&t(B),D&&t(he),A(X,D)}}}function My(P){let l,T;return l=new Tn({props:{$$slots:{default:[Py]},$$scope:{ctx:P}}}),{c(){j(l.$$.fragment)},l(d){q(l.$$.fragment,d)},m(d,g){$(l,d,g),T=!0},p(d,g){const b={};g&2&&(b.$$scope={dirty:g,ctx:d}),l.$set(b)},i(d){T||(E(l.$$.fragment,d),T=!0)},o(d){F(l.$$.fragment,d),T=!1},d(d){A(l,d)}}}function Sy(P){let l,T,d,g,b;return g=new ht({props:{code:`from transformers import TapasModel, TapasConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),{c(){l=o("p"),T=s("Example:"),d=c(),j(g.$$.fragment)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Example:"),f.forEach(t),d=h(p),q(g.$$.fragment,p)},m(p,f){u(p,l,f),e(l,T),u(p,d,f),$(g,p,f),b=!0},p:Ft,i(p){b||(E(g.$$.fragment,p),b=!0)},o(p){F(g.$$.fragment,p),b=!1},d(p){p&&t(l),p&&t(d),A(g,p)}}}function Dy(P){let l,T,d,g,b;return{c(){l=o("p"),T=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),g=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(f,"CODE",{});var z=r(d);g=a(z,"Module"),z.forEach(t),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(p,f){u(p,l,f),e(l,T),e(l,d),e(d,g),e(l,b)},d(p){p&&t(l)}}}function Oy(P){let l,T,d,g,b;return g=new ht({props:{code:`from transformers import TapasTokenizer, TapasModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=o("p"),T=s("Examples:"),d=c(),j(g.$$.fragment)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Examples:"),f.forEach(t),d=h(p),q(g.$$.fragment,p)},m(p,f){u(p,l,f),e(l,T),u(p,d,f),$(g,p,f),b=!0},p:Ft,i(p){b||(E(g.$$.fragment,p),b=!0)},o(p){F(g.$$.fragment,p),b=!1},d(p){p&&t(l),p&&t(d),A(g,p)}}}function Ny(P){let l,T,d,g,b;return{c(){l=o("p"),T=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),g=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(f,"CODE",{});var z=r(d);g=a(z,"Module"),z.forEach(t),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(p,f){u(p,l,f),e(l,T),e(l,d),e(d,g),e(l,b)},d(p){p&&t(l)}}}function Ly(P){let l,T,d,g,b;return g=new ht({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=o("p"),T=s("Examples:"),d=c(),j(g.$$.fragment)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Examples:"),f.forEach(t),d=h(p),q(g.$$.fragment,p)},m(p,f){u(p,l,f),e(l,T),u(p,d,f),$(g,p,f),b=!0},p:Ft,i(p){b||(E(g.$$.fragment,p),b=!0)},o(p){F(g.$$.fragment,p),b=!1},d(p){p&&t(l),p&&t(d),A(g,p)}}}function Qy(P){let l,T,d,g,b;return{c(){l=o("p"),T=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),g=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(f,"CODE",{});var z=r(d);g=a(z,"Module"),z.forEach(t),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(p,f){u(p,l,f),e(l,T),e(l,d),e(d,g),e(l,b)},d(p){p&&t(l)}}}function Iy(P){let l,T,d,g,b;return g=new ht({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=o("p"),T=s("Examples:"),d=c(),j(g.$$.fragment)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Examples:"),f.forEach(t),d=h(p),q(g.$$.fragment,p)},m(p,f){u(p,l,f),e(l,T),u(p,d,f),$(g,p,f),b=!0},p:Ft,i(p){b||(E(g.$$.fragment,p),b=!0)},o(p){F(g.$$.fragment,p),b=!1},d(p){p&&t(l),p&&t(d),A(g,p)}}}function Wy(P){let l,T,d,g,b;return{c(){l=o("p"),T=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),g=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(f,"CODE",{});var z=r(d);g=a(z,"Module"),z.forEach(t),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(p,f){u(p,l,f),e(l,T),e(l,d),e(d,g),e(l,b)},d(p){p&&t(l)}}}function Hy(P){let l,T,d,g,b;return g=new ht({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),{c(){l=o("p"),T=s("Examples:"),d=c(),j(g.$$.fragment)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Examples:"),f.forEach(t),d=h(p),q(g.$$.fragment,p)},m(p,f){u(p,l,f),e(l,T),u(p,d,f),$(g,p,f),b=!0},p:Ft,i(p){b||(E(g.$$.fragment,p),b=!0)},o(p){F(g.$$.fragment,p),b=!1},d(p){p&&t(l),p&&t(d),A(g,p)}}}function Uy(P){let l,T,d,g,b,p,f,z,k,W,O,G,ae,v,J,Z,de,U,N,y,C,B,ee,pe,R,ge,he,X,_e,D,L,I,M,K,H,ve,ze,ue,fe,Ae,se,ke,Te,Pe,Ce,je,Me,$e,ce,Se,ye,Y,qe,V,We,oe,He,Ue;return{c(){l=o("p"),T=s("TensorFlow models and layers in "),d=o("code"),g=s("transformers"),b=s(" accept two formats as input:"),p=c(),f=o("ul"),z=o("li"),k=s("having all inputs as keyword arguments (like PyTorch models), or"),W=c(),O=o("li"),G=s("having all inputs as a list, tuple or dict in the first positional argument."),ae=c(),v=o("p"),J=s(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=o("code"),de=s("model.fit()"),U=s(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=o("code"),y=s("model.fit()"),C=s(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=o("code"),ee=s("fit()"),pe=s(" and "),R=o("code"),ge=s("predict()"),he=s(`, such as when creating your own layers or models with
the Keras `),X=o("code"),_e=s("Functional"),D=s(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),L=c(),I=o("ul"),M=o("li"),K=s("a single Tensor with "),H=o("code"),ve=s("input_ids"),ze=s(" only and nothing else: "),ue=o("code"),fe=s("model(input_ids)"),Ae=c(),se=o("li"),ke=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=o("code"),Pe=s("model([input_ids, attention_mask])"),Ce=s(" or "),je=o("code"),Me=s("model([input_ids, attention_mask, token_type_ids])"),$e=c(),ce=o("li"),Se=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=o("code"),Y=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe=c(),V=o("p"),We=s(`Note that when creating models and layers with
`),oe=o("a"),He=s("subclassing"),Ue=s(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=n(w,"P",{});var S=r(l);T=a(S,"TensorFlow models and layers in "),d=n(S,"CODE",{});var Ve=r(d);g=a(Ve,"transformers"),Ve.forEach(t),b=a(S," accept two formats as input:"),S.forEach(t),p=h(w),f=n(w,"UL",{});var be=r(f);z=n(be,"LI",{});var Ye=r(z);k=a(Ye,"having all inputs as keyword arguments (like PyTorch models), or"),Ye.forEach(t),W=h(be),O=n(be,"LI",{});var Je=r(O);G=a(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(t),be.forEach(t),ae=h(w),v=n(w,"P",{});var Q=r(v);J=a(Q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=n(Q,"CODE",{});var Le=r(Z);de=a(Le,"model.fit()"),Le.forEach(t),U=a(Q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=n(Q,"CODE",{});var ot=r(N);y=a(ot,"model.fit()"),ot.forEach(t),C=a(Q,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=n(Q,"CODE",{});var Qe=r(B);ee=a(Qe,"fit()"),Qe.forEach(t),pe=a(Q," and "),R=n(Q,"CODE",{});var Ie=r(R);ge=a(Ie,"predict()"),Ie.forEach(t),he=a(Q,`, such as when creating your own layers or models with
the Keras `),X=n(Q,"CODE",{});var Xe=r(X);_e=a(Xe,"Functional"),Xe.forEach(t),D=a(Q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Q.forEach(t),L=h(w),I=n(w,"UL",{});var le=r(I);M=n(le,"LI",{});var Ee=r(M);K=a(Ee,"a single Tensor with "),H=n(Ee,"CODE",{});var Ze=r(H);ve=a(Ze,"input_ids"),Ze.forEach(t),ze=a(Ee," only and nothing else: "),ue=n(Ee,"CODE",{});var xe=r(ue);fe=a(xe,"model(input_ids)"),xe.forEach(t),Ee.forEach(t),Ae=h(le),se=n(le,"LI",{});var ne=r(se);ke=a(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=n(ne,"CODE",{});var et=r(Te);Pe=a(et,"model([input_ids, attention_mask])"),et.forEach(t),Ce=a(ne," or "),je=n(ne,"CODE",{});var Be=r(je);Me=a(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),ne.forEach(t),$e=h(le),ce=n(le,"LI",{});var re=r(ce);Se=a(re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=n(re,"CODE",{});var Re=r(ye);Y=a(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),re.forEach(t),le.forEach(t),qe=h(w),V=n(w,"P",{});var Fe=r(V);We=a(Fe,`Note that when creating models and layers with
`),oe=n(Fe,"A",{href:!0,rel:!0});var tt=r(oe);He=a(tt,"subclassing"),tt.forEach(t),Ue=a(Fe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Fe.forEach(t),this.h()},h(){m(oe,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(oe,"rel","nofollow")},m(w,S){u(w,l,S),e(l,T),e(l,d),e(d,g),e(l,b),u(w,p,S),u(w,f,S),e(f,z),e(z,k),e(f,W),e(f,O),e(O,G),u(w,ae,S),u(w,v,S),e(v,J),e(v,Z),e(Z,de),e(v,U),e(v,N),e(N,y),e(v,C),e(v,B),e(B,ee),e(v,pe),e(v,R),e(R,ge),e(v,he),e(v,X),e(X,_e),e(v,D),u(w,L,S),u(w,I,S),e(I,M),e(M,K),e(M,H),e(H,ve),e(M,ze),e(M,ue),e(ue,fe),e(I,Ae),e(I,se),e(se,ke),e(se,Te),e(Te,Pe),e(se,Ce),e(se,je),e(je,Me),e(I,$e),e(I,ce),e(ce,Se),e(ce,ye),e(ye,Y),u(w,qe,S),u(w,V,S),e(V,We),e(V,oe),e(oe,He),e(V,Ue)},d(w){w&&t(l),w&&t(p),w&&t(f),w&&t(ae),w&&t(v),w&&t(L),w&&t(I),w&&t(qe),w&&t(V)}}}function By(P){let l,T,d,g,b;return{c(){l=o("p"),T=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),g=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(f,"CODE",{});var z=r(d);g=a(z,"Module"),z.forEach(t),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(p,f){u(p,l,f),e(l,T),e(l,d),e(d,g),e(l,b)},d(p){p&&t(l)}}}function Ry(P){let l,T,d,g,b;return g=new ht({props:{code:`from transformers import TapasTokenizer, TapasModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),{c(){l=o("p"),T=s("Examples:"),d=c(),j(g.$$.fragment)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Examples:"),f.forEach(t),d=h(p),q(g.$$.fragment,p)},m(p,f){u(p,l,f),e(l,T),u(p,d,f),$(g,p,f),b=!0},p:Ft,i(p){b||(E(g.$$.fragment,p),b=!0)},o(p){F(g.$$.fragment,p),b=!1},d(p){p&&t(l),p&&t(d),A(g,p)}}}function Gy(P){let l,T,d,g,b,p,f,z,k,W,O,G,ae,v,J,Z,de,U,N,y,C,B,ee,pe,R,ge,he,X,_e,D,L,I,M,K,H,ve,ze,ue,fe,Ae,se,ke,Te,Pe,Ce,je,Me,$e,ce,Se,ye,Y,qe,V,We,oe,He,Ue;return{c(){l=o("p"),T=s("TensorFlow models and layers in "),d=o("code"),g=s("transformers"),b=s(" accept two formats as input:"),p=c(),f=o("ul"),z=o("li"),k=s("having all inputs as keyword arguments (like PyTorch models), or"),W=c(),O=o("li"),G=s("having all inputs as a list, tuple or dict in the first positional argument."),ae=c(),v=o("p"),J=s(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=o("code"),de=s("model.fit()"),U=s(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=o("code"),y=s("model.fit()"),C=s(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=o("code"),ee=s("fit()"),pe=s(" and "),R=o("code"),ge=s("predict()"),he=s(`, such as when creating your own layers or models with
the Keras `),X=o("code"),_e=s("Functional"),D=s(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),L=c(),I=o("ul"),M=o("li"),K=s("a single Tensor with "),H=o("code"),ve=s("input_ids"),ze=s(" only and nothing else: "),ue=o("code"),fe=s("model(input_ids)"),Ae=c(),se=o("li"),ke=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=o("code"),Pe=s("model([input_ids, attention_mask])"),Ce=s(" or "),je=o("code"),Me=s("model([input_ids, attention_mask, token_type_ids])"),$e=c(),ce=o("li"),Se=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=o("code"),Y=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe=c(),V=o("p"),We=s(`Note that when creating models and layers with
`),oe=o("a"),He=s("subclassing"),Ue=s(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=n(w,"P",{});var S=r(l);T=a(S,"TensorFlow models and layers in "),d=n(S,"CODE",{});var Ve=r(d);g=a(Ve,"transformers"),Ve.forEach(t),b=a(S," accept two formats as input:"),S.forEach(t),p=h(w),f=n(w,"UL",{});var be=r(f);z=n(be,"LI",{});var Ye=r(z);k=a(Ye,"having all inputs as keyword arguments (like PyTorch models), or"),Ye.forEach(t),W=h(be),O=n(be,"LI",{});var Je=r(O);G=a(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(t),be.forEach(t),ae=h(w),v=n(w,"P",{});var Q=r(v);J=a(Q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=n(Q,"CODE",{});var Le=r(Z);de=a(Le,"model.fit()"),Le.forEach(t),U=a(Q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=n(Q,"CODE",{});var ot=r(N);y=a(ot,"model.fit()"),ot.forEach(t),C=a(Q,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=n(Q,"CODE",{});var Qe=r(B);ee=a(Qe,"fit()"),Qe.forEach(t),pe=a(Q," and "),R=n(Q,"CODE",{});var Ie=r(R);ge=a(Ie,"predict()"),Ie.forEach(t),he=a(Q,`, such as when creating your own layers or models with
the Keras `),X=n(Q,"CODE",{});var Xe=r(X);_e=a(Xe,"Functional"),Xe.forEach(t),D=a(Q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Q.forEach(t),L=h(w),I=n(w,"UL",{});var le=r(I);M=n(le,"LI",{});var Ee=r(M);K=a(Ee,"a single Tensor with "),H=n(Ee,"CODE",{});var Ze=r(H);ve=a(Ze,"input_ids"),Ze.forEach(t),ze=a(Ee," only and nothing else: "),ue=n(Ee,"CODE",{});var xe=r(ue);fe=a(xe,"model(input_ids)"),xe.forEach(t),Ee.forEach(t),Ae=h(le),se=n(le,"LI",{});var ne=r(se);ke=a(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=n(ne,"CODE",{});var et=r(Te);Pe=a(et,"model([input_ids, attention_mask])"),et.forEach(t),Ce=a(ne," or "),je=n(ne,"CODE",{});var Be=r(je);Me=a(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),ne.forEach(t),$e=h(le),ce=n(le,"LI",{});var re=r(ce);Se=a(re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=n(re,"CODE",{});var Re=r(ye);Y=a(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),re.forEach(t),le.forEach(t),qe=h(w),V=n(w,"P",{});var Fe=r(V);We=a(Fe,`Note that when creating models and layers with
`),oe=n(Fe,"A",{href:!0,rel:!0});var tt=r(oe);He=a(tt,"subclassing"),tt.forEach(t),Ue=a(Fe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Fe.forEach(t),this.h()},h(){m(oe,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(oe,"rel","nofollow")},m(w,S){u(w,l,S),e(l,T),e(l,d),e(d,g),e(l,b),u(w,p,S),u(w,f,S),e(f,z),e(z,k),e(f,W),e(f,O),e(O,G),u(w,ae,S),u(w,v,S),e(v,J),e(v,Z),e(Z,de),e(v,U),e(v,N),e(N,y),e(v,C),e(v,B),e(B,ee),e(v,pe),e(v,R),e(R,ge),e(v,he),e(v,X),e(X,_e),e(v,D),u(w,L,S),u(w,I,S),e(I,M),e(M,K),e(M,H),e(H,ve),e(M,ze),e(M,ue),e(ue,fe),e(I,Ae),e(I,se),e(se,ke),e(se,Te),e(Te,Pe),e(se,Ce),e(se,je),e(je,Me),e(I,$e),e(I,ce),e(ce,Se),e(ce,ye),e(ye,Y),u(w,qe,S),u(w,V,S),e(V,We),e(V,oe),e(oe,He),e(V,Ue)},d(w){w&&t(l),w&&t(p),w&&t(f),w&&t(ae),w&&t(v),w&&t(L),w&&t(I),w&&t(qe),w&&t(V)}}}function Ky(P){let l,T,d,g,b;return{c(){l=o("p"),T=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),g=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(f,"CODE",{});var z=r(d);g=a(z,"Module"),z.forEach(t),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(p,f){u(p,l,f),e(l,T),e(l,d),e(d,g),e(l,b)},d(p){p&&t(l)}}}function Vy(P){let l,T,d,g,b;return g=new ht({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=o("p"),T=s("Examples:"),d=c(),j(g.$$.fragment)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Examples:"),f.forEach(t),d=h(p),q(g.$$.fragment,p)},m(p,f){u(p,l,f),e(l,T),u(p,d,f),$(g,p,f),b=!0},p:Ft,i(p){b||(E(g.$$.fragment,p),b=!0)},o(p){F(g.$$.fragment,p),b=!1},d(p){p&&t(l),p&&t(d),A(g,p)}}}function Yy(P){let l,T,d,g,b,p,f,z,k,W,O,G,ae,v,J,Z,de,U,N,y,C,B,ee,pe,R,ge,he,X,_e,D,L,I,M,K,H,ve,ze,ue,fe,Ae,se,ke,Te,Pe,Ce,je,Me,$e,ce,Se,ye,Y,qe,V,We,oe,He,Ue;return{c(){l=o("p"),T=s("TensorFlow models and layers in "),d=o("code"),g=s("transformers"),b=s(" accept two formats as input:"),p=c(),f=o("ul"),z=o("li"),k=s("having all inputs as keyword arguments (like PyTorch models), or"),W=c(),O=o("li"),G=s("having all inputs as a list, tuple or dict in the first positional argument."),ae=c(),v=o("p"),J=s(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=o("code"),de=s("model.fit()"),U=s(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=o("code"),y=s("model.fit()"),C=s(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=o("code"),ee=s("fit()"),pe=s(" and "),R=o("code"),ge=s("predict()"),he=s(`, such as when creating your own layers or models with
the Keras `),X=o("code"),_e=s("Functional"),D=s(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),L=c(),I=o("ul"),M=o("li"),K=s("a single Tensor with "),H=o("code"),ve=s("input_ids"),ze=s(" only and nothing else: "),ue=o("code"),fe=s("model(input_ids)"),Ae=c(),se=o("li"),ke=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=o("code"),Pe=s("model([input_ids, attention_mask])"),Ce=s(" or "),je=o("code"),Me=s("model([input_ids, attention_mask, token_type_ids])"),$e=c(),ce=o("li"),Se=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=o("code"),Y=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe=c(),V=o("p"),We=s(`Note that when creating models and layers with
`),oe=o("a"),He=s("subclassing"),Ue=s(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=n(w,"P",{});var S=r(l);T=a(S,"TensorFlow models and layers in "),d=n(S,"CODE",{});var Ve=r(d);g=a(Ve,"transformers"),Ve.forEach(t),b=a(S," accept two formats as input:"),S.forEach(t),p=h(w),f=n(w,"UL",{});var be=r(f);z=n(be,"LI",{});var Ye=r(z);k=a(Ye,"having all inputs as keyword arguments (like PyTorch models), or"),Ye.forEach(t),W=h(be),O=n(be,"LI",{});var Je=r(O);G=a(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(t),be.forEach(t),ae=h(w),v=n(w,"P",{});var Q=r(v);J=a(Q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=n(Q,"CODE",{});var Le=r(Z);de=a(Le,"model.fit()"),Le.forEach(t),U=a(Q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=n(Q,"CODE",{});var ot=r(N);y=a(ot,"model.fit()"),ot.forEach(t),C=a(Q,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=n(Q,"CODE",{});var Qe=r(B);ee=a(Qe,"fit()"),Qe.forEach(t),pe=a(Q," and "),R=n(Q,"CODE",{});var Ie=r(R);ge=a(Ie,"predict()"),Ie.forEach(t),he=a(Q,`, such as when creating your own layers or models with
the Keras `),X=n(Q,"CODE",{});var Xe=r(X);_e=a(Xe,"Functional"),Xe.forEach(t),D=a(Q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Q.forEach(t),L=h(w),I=n(w,"UL",{});var le=r(I);M=n(le,"LI",{});var Ee=r(M);K=a(Ee,"a single Tensor with "),H=n(Ee,"CODE",{});var Ze=r(H);ve=a(Ze,"input_ids"),Ze.forEach(t),ze=a(Ee," only and nothing else: "),ue=n(Ee,"CODE",{});var xe=r(ue);fe=a(xe,"model(input_ids)"),xe.forEach(t),Ee.forEach(t),Ae=h(le),se=n(le,"LI",{});var ne=r(se);ke=a(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=n(ne,"CODE",{});var et=r(Te);Pe=a(et,"model([input_ids, attention_mask])"),et.forEach(t),Ce=a(ne," or "),je=n(ne,"CODE",{});var Be=r(je);Me=a(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),ne.forEach(t),$e=h(le),ce=n(le,"LI",{});var re=r(ce);Se=a(re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=n(re,"CODE",{});var Re=r(ye);Y=a(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),re.forEach(t),le.forEach(t),qe=h(w),V=n(w,"P",{});var Fe=r(V);We=a(Fe,`Note that when creating models and layers with
`),oe=n(Fe,"A",{href:!0,rel:!0});var tt=r(oe);He=a(tt,"subclassing"),tt.forEach(t),Ue=a(Fe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Fe.forEach(t),this.h()},h(){m(oe,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(oe,"rel","nofollow")},m(w,S){u(w,l,S),e(l,T),e(l,d),e(d,g),e(l,b),u(w,p,S),u(w,f,S),e(f,z),e(z,k),e(f,W),e(f,O),e(O,G),u(w,ae,S),u(w,v,S),e(v,J),e(v,Z),e(Z,de),e(v,U),e(v,N),e(N,y),e(v,C),e(v,B),e(B,ee),e(v,pe),e(v,R),e(R,ge),e(v,he),e(v,X),e(X,_e),e(v,D),u(w,L,S),u(w,I,S),e(I,M),e(M,K),e(M,H),e(H,ve),e(M,ze),e(M,ue),e(ue,fe),e(I,Ae),e(I,se),e(se,ke),e(se,Te),e(Te,Pe),e(se,Ce),e(se,je),e(je,Me),e(I,$e),e(I,ce),e(ce,Se),e(ce,ye),e(ye,Y),u(w,qe,S),u(w,V,S),e(V,We),e(V,oe),e(oe,He),e(V,Ue)},d(w){w&&t(l),w&&t(p),w&&t(f),w&&t(ae),w&&t(v),w&&t(L),w&&t(I),w&&t(qe),w&&t(V)}}}function Jy(P){let l,T,d,g,b;return{c(){l=o("p"),T=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),g=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(f,"CODE",{});var z=r(d);g=a(z,"Module"),z.forEach(t),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(p,f){u(p,l,f),e(l,T),e(l,d),e(d,g),e(l,b)},d(p){p&&t(l)}}}function Xy(P){let l,T,d,g,b;return g=new ht({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){l=o("p"),T=s("Examples:"),d=c(),j(g.$$.fragment)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Examples:"),f.forEach(t),d=h(p),q(g.$$.fragment,p)},m(p,f){u(p,l,f),e(l,T),u(p,d,f),$(g,p,f),b=!0},p:Ft,i(p){b||(E(g.$$.fragment,p),b=!0)},o(p){F(g.$$.fragment,p),b=!1},d(p){p&&t(l),p&&t(d),A(g,p)}}}function Zy(P){let l,T,d,g,b,p,f,z,k,W,O,G,ae,v,J,Z,de,U,N,y,C,B,ee,pe,R,ge,he,X,_e,D,L,I,M,K,H,ve,ze,ue,fe,Ae,se,ke,Te,Pe,Ce,je,Me,$e,ce,Se,ye,Y,qe,V,We,oe,He,Ue;return{c(){l=o("p"),T=s("TensorFlow models and layers in "),d=o("code"),g=s("transformers"),b=s(" accept two formats as input:"),p=c(),f=o("ul"),z=o("li"),k=s("having all inputs as keyword arguments (like PyTorch models), or"),W=c(),O=o("li"),G=s("having all inputs as a list, tuple or dict in the first positional argument."),ae=c(),v=o("p"),J=s(`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=o("code"),de=s("model.fit()"),U=s(` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=o("code"),y=s("model.fit()"),C=s(` supports! If, however, you want to use the second
format outside of Keras methods like `),B=o("code"),ee=s("fit()"),pe=s(" and "),R=o("code"),ge=s("predict()"),he=s(`, such as when creating your own layers or models with
the Keras `),X=o("code"),_e=s("Functional"),D=s(` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),L=c(),I=o("ul"),M=o("li"),K=s("a single Tensor with "),H=o("code"),ve=s("input_ids"),ze=s(" only and nothing else: "),ue=o("code"),fe=s("model(input_ids)"),Ae=c(),se=o("li"),ke=s(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=o("code"),Pe=s("model([input_ids, attention_mask])"),Ce=s(" or "),je=o("code"),Me=s("model([input_ids, attention_mask, token_type_ids])"),$e=c(),ce=o("li"),Se=s(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=o("code"),Y=s('model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe=c(),V=o("p"),We=s(`Note that when creating models and layers with
`),oe=o("a"),He=s("subclassing"),Ue=s(` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),this.h()},l(w){l=n(w,"P",{});var S=r(l);T=a(S,"TensorFlow models and layers in "),d=n(S,"CODE",{});var Ve=r(d);g=a(Ve,"transformers"),Ve.forEach(t),b=a(S," accept two formats as input:"),S.forEach(t),p=h(w),f=n(w,"UL",{});var be=r(f);z=n(be,"LI",{});var Ye=r(z);k=a(Ye,"having all inputs as keyword arguments (like PyTorch models), or"),Ye.forEach(t),W=h(be),O=n(be,"LI",{});var Je=r(O);G=a(Je,"having all inputs as a list, tuple or dict in the first positional argument."),Je.forEach(t),be.forEach(t),ae=h(w),v=n(w,"P",{});var Q=r(v);J=a(Q,`The reason the second format is supported is that Keras methods prefer this format when passing inputs to models
and layers. Because of this support, when using methods like `),Z=n(Q,"CODE",{});var Le=r(Z);de=a(Le,"model.fit()"),Le.forEach(t),U=a(Q,` things should \u201Cjust work\u201D for you - just
pass your inputs and labels in any format that `),N=n(Q,"CODE",{});var ot=r(N);y=a(ot,"model.fit()"),ot.forEach(t),C=a(Q,` supports! If, however, you want to use the second
format outside of Keras methods like `),B=n(Q,"CODE",{});var Qe=r(B);ee=a(Qe,"fit()"),Qe.forEach(t),pe=a(Q," and "),R=n(Q,"CODE",{});var Ie=r(R);ge=a(Ie,"predict()"),Ie.forEach(t),he=a(Q,`, such as when creating your own layers or models with
the Keras `),X=n(Q,"CODE",{});var Xe=r(X);_e=a(Xe,"Functional"),Xe.forEach(t),D=a(Q,` API, there are three possibilities you can use to gather all the input Tensors in the first
positional argument:`),Q.forEach(t),L=h(w),I=n(w,"UL",{});var le=r(I);M=n(le,"LI",{});var Ee=r(M);K=a(Ee,"a single Tensor with "),H=n(Ee,"CODE",{});var Ze=r(H);ve=a(Ze,"input_ids"),Ze.forEach(t),ze=a(Ee," only and nothing else: "),ue=n(Ee,"CODE",{});var xe=r(ue);fe=a(xe,"model(input_ids)"),xe.forEach(t),Ee.forEach(t),Ae=h(le),se=n(le,"LI",{});var ne=r(se);ke=a(ne,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Te=n(ne,"CODE",{});var et=r(Te);Pe=a(et,"model([input_ids, attention_mask])"),et.forEach(t),Ce=a(ne," or "),je=n(ne,"CODE",{});var Be=r(je);Me=a(Be,"model([input_ids, attention_mask, token_type_ids])"),Be.forEach(t),ne.forEach(t),$e=h(le),ce=n(le,"LI",{});var re=r(ce);Se=a(re,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),ye=n(re,"CODE",{});var Re=r(ye);Y=a(Re,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Re.forEach(t),re.forEach(t),le.forEach(t),qe=h(w),V=n(w,"P",{});var Fe=r(V);We=a(Fe,`Note that when creating models and layers with
`),oe=n(Fe,"A",{href:!0,rel:!0});var tt=r(oe);He=a(tt,"subclassing"),tt.forEach(t),Ue=a(Fe,` then you don\u2019t need to worry
about any of this, as you can just pass inputs like you would to any other Python function!`),Fe.forEach(t),this.h()},h(){m(oe,"href","https://keras.io/guides/making_new_layers_and_models_via_subclassing/"),m(oe,"rel","nofollow")},m(w,S){u(w,l,S),e(l,T),e(l,d),e(d,g),e(l,b),u(w,p,S),u(w,f,S),e(f,z),e(z,k),e(f,W),e(f,O),e(O,G),u(w,ae,S),u(w,v,S),e(v,J),e(v,Z),e(Z,de),e(v,U),e(v,N),e(N,y),e(v,C),e(v,B),e(B,ee),e(v,pe),e(v,R),e(R,ge),e(v,he),e(v,X),e(X,_e),e(v,D),u(w,L,S),u(w,I,S),e(I,M),e(M,K),e(M,H),e(H,ve),e(M,ze),e(M,ue),e(ue,fe),e(I,Ae),e(I,se),e(se,ke),e(se,Te),e(Te,Pe),e(se,Ce),e(se,je),e(je,Me),e(I,$e),e(I,ce),e(ce,Se),e(ce,ye),e(ye,Y),u(w,qe,S),u(w,V,S),e(V,We),e(V,oe),e(oe,He),e(V,Ue)},d(w){w&&t(l),w&&t(p),w&&t(f),w&&t(ae),w&&t(v),w&&t(L),w&&t(I),w&&t(qe),w&&t(V)}}}function ek(P){let l,T,d,g,b;return{c(){l=o("p"),T=s("Although the recipe for forward pass needs to be defined within this function, one should call the "),d=o("code"),g=s("Module"),b=s(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Although the recipe for forward pass needs to be defined within this function, one should call the "),d=n(f,"CODE",{});var z=r(d);g=a(z,"Module"),z.forEach(t),b=a(f,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),f.forEach(t)},m(p,f){u(p,l,f),e(l,T),e(l,d),e(d,g),e(l,b)},d(p){p&&t(l)}}}function tk(P){let l,T,d,g,b;return g=new ht({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),{c(){l=o("p"),T=s("Examples:"),d=c(),j(g.$$.fragment)},l(p){l=n(p,"P",{});var f=r(l);T=a(f,"Examples:"),f.forEach(t),d=h(p),q(g.$$.fragment,p)},m(p,f){u(p,l,f),e(l,T),u(p,d,f),$(g,p,f),b=!0},p:Ft,i(p){b||(E(g.$$.fragment,p),b=!0)},o(p){F(g.$$.fragment,p),b=!1},d(p){p&&t(l),p&&t(d),A(g,p)}}}function sk(P){let l,T,d,g,b,p,f,z,k,W,O,G,ae,v,J,Z,de,U,N,y,C,B,ee,pe,R,ge,he,X,_e,D,L,I,M,K,H,ve,ze,ue,fe,Ae,se,ke,Te,Pe,Ce,je,Me,$e,ce,Se,ye,Y,qe,V,We,oe,He,Ue,w,S,Ve,be,Ye,Je,Q,Le,ot,Qe,Ie,Xe,le,Ee,Ze,xe,ne,et,Be,re,Re,Fe,tt,Pt,Mt,Ws,St,bs,ts,Dt,ws,ut,De,Hs,Ot,ie,bt,ss,Us,Nt,ns,Bs,Lt,Qt,Rs,It,rs,Gs,Wt,is,Ks,Ht,Vs,st,Ut,ls,Ys,Bt,ds,Js,ps,lt,cs,Oe,hs,wt,Xs,Rt,Gt,Zs,ea,dt,ta,us,ms,gt,Kt,x,te,ka,sa,ja,ha,Vt,_t,aa,vt,qa,oa,$a,ua,nt,fs,vs,pt,Ea,ma,ys,na,gs,fa,we,Fa,ks,Aa,za,ga,At,ra,_s,xa,Ne,Ca,ia,Pa,Ma,Sa,me,Da,la,Oa,Na,_a,js,La,Ta,Ge,da,Yt,pa,el,Sc,Dc,tl,sl,Oc,Nc,al,ol,Lc,Qc,Qa,Ia,nl,Ic,Wc,rl,Hc,Uc,il,Bc,Rc,Wa,ll,Gc,Kc,dl,Vc,Yc,pl,Jc,Xc,Ha,cl,Zc,eh,hl,th,sh,ul,ah,op,bo,np,wo,oh,bn,nh,rh,rp,vo,ih,wn,lh,dh,ip,Br,ml,ph,lp,yo,ch,vn,hh,uh,dp,rt,Rr,fl,mh,fh,gh,Gr,gl,_h,Th,bh,Kr,_l,wh,vh,yh,Vr,Tl,kh,jh,qh,Yr,bl,$h,Eh,Fh,Jr,wl,Ah,zh,xh,Xr,vl,Ch,Ph,Mh,Zr,yl,Sh,Dh,Oh,ei,kl,Nh,Lh,pp,zt,Qh,yn,Ih,Wh,kn,Hh,Uh,jl,Bh,Rh,ql,Gh,Kh,$l,Vh,Yh,cp,ti,El,Jh,hp,ko,up,Ke,Xh,Fl,Zh,eu,Al,tu,su,zl,au,ou,xl,nu,ru,Cl,iu,lu,Pl,du,pu,si,cu,hu,jn,uu,mu,qn,fu,gu,mp,ai,_u,fp,jo,gp,Ua,qo,Ml,$n,Tu,Sl,bu,_p,$o,Tp,xt,wu,Dl,vu,yu,Ol,ku,ju,Nl,qu,$u,En,Eu,Fu,Fn,Au,zu,bp,Ba,Eo,Ll,An,xu,Ql,Cu,wp,Ra,zn,Pu,xn,Mu,oi,Su,Du,vp,Ga,Fo,Il,Cn,Ou,Wl,Nu,yp,Jt,Pn,Lu,Ka,Qu,ni,Iu,Wu,Mn,Hu,Uu,Bu,Va,Ru,Hl,Gu,Ku,ri,Vu,Yu,Ju,Sn,Xu,Dn,Zu,em,tm,Ao,kp,Ya,zo,Ul,On,sm,Bl,am,jp,ct,Nn,om,Rl,nm,rm,at,im,ii,lm,dm,li,pm,cm,Gl,hm,um,Kl,mm,fm,Vl,gm,_m,Yl,Tm,bm,Jl,wm,vm,Xl,ym,km,Zl,jm,qm,$m,yt,ed,Em,Fm,td,Am,zm,sd,xm,Cm,ad,Pm,Mm,od,Sm,Dm,nd,Om,Nm,rd,Lm,Qm,di,pi,Im,Wm,Hm,xo,Ln,Um,id,Bm,Rm,ba,Qn,Gm,In,Km,ci,Vm,Ym,Jm,Wn,Xm,Hn,Zm,ef,tf,hi,Un,qp,Ja,Co,ld,Bn,sf,dd,af,$p,kt,Rn,of,Gn,nf,ui,rf,lf,df,Kn,pf,Vn,cf,hf,uf,Yn,mf,mi,ff,gf,_f,Jn,Tf,Xn,bf,wf,vf,qs,Zn,yf,Xa,kf,fi,jf,qf,pd,$f,Ef,Ff,Po,Af,Mo,Ep,Za,So,cd,er,zf,hd,xf,Fp,Ts,tr,Cf,eo,Pf,ud,Mf,Sf,gi,Df,Of,Nf,sr,Lf,ar,Qf,If,Wf,$s,or,Hf,to,Uf,_i,Bf,Rf,md,Gf,Kf,Vf,Do,Yf,Oo,Ap,so,No,fd,nr,Jf,gd,Xf,zp,Xt,rr,Zf,_d,eg,tg,ir,sg,Ti,ag,og,ng,lr,rg,dr,ig,lg,dg,Es,pr,pg,ao,cg,bi,hg,ug,Td,mg,fg,gg,Lo,_g,Qo,xp,oo,Io,bd,cr,Tg,wd,bg,Cp,Zt,hr,wg,no,vg,vd,yg,kg,yd,jg,qg,$g,ur,Eg,wi,Fg,Ag,zg,mr,xg,fr,Cg,Pg,Mg,Fs,gr,Sg,ro,Dg,vi,Og,Ng,kd,Lg,Qg,Ig,Wo,Wg,Ho,Pp,io,Uo,jd,_r,Hg,qd,Ug,Mp,jt,Tr,Bg,$d,Rg,Gg,br,Kg,yi,Vg,Yg,Jg,wr,Xg,vr,Zg,e_,t_,Bo,s_,As,yr,a_,lo,o_,ki,n_,r_,Ed,i_,l_,d_,Ro,p_,Go,Sp,po,Ko,Fd,kr,c_,Ad,h_,Dp,qt,jr,u_,qr,m_,zd,f_,g_,__,$r,T_,ji,b_,w_,v_,Er,y_,Fr,k_,j_,q_,Vo,$_,zs,Ar,E_,co,F_,qi,A_,z_,xd,x_,C_,P_,Yo,M_,Jo,Op,ho,Xo,Cd,zr,S_,Pd,D_,Np,$t,xr,O_,Md,N_,L_,Cr,Q_,$i,I_,W_,H_,Pr,U_,Mr,B_,R_,G_,Zo,K_,xs,Sr,V_,uo,Y_,Ei,J_,X_,Sd,Z_,eT,tT,en,sT,tn,Lp,mo,sn,Dd,Dr,aT,Od,oT,Qp,Et,Or,nT,fo,rT,Nd,iT,lT,Ld,dT,pT,cT,Nr,hT,Fi,uT,mT,fT,Lr,gT,Qr,_T,TT,bT,an,wT,Cs,Ir,vT,go,yT,Ai,kT,jT,Qd,qT,$T,ET,on,FT,nn,Ip;return p=new es({}),v=new es({}),vt=new es({}),bo=new Mc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[yy],pytorch:[wy]},$$scope:{ctx:P}}}),ko=new Mc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[$y],pytorch:[jy]},$$scope:{ctx:P}}}),jo=new Mc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[zy],pytorch:[Fy]},$$scope:{ctx:P}}}),$n=new es({}),$o=new Mc({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[My],pytorch:[Cy]},$$scope:{ctx:P}}}),An=new es({}),zn=new it({props:{name:"class transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_aggregation",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],parametersDescription:[{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) &#x2014;
Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.`,name:"loss"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the cell selection head, for every token.`,name:"logits"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits_aggregation",description:`<strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) &#x2014;
Prediction scores of the aggregation head, for every aggregation operator.`,name:"logits_aggregation"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L102"}}),Cn=new es({}),Pn=new it({props:{name:"class transformers.TapasConfig",anchor:"transformers.TapasConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1024"},{name:"type_vocab_sizes",val:" = [3, 256, 256, 2, 256, 256, 10]"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"positive_label_weight",val:" = 10.0"},{name:"num_aggregation_labels",val:" = 0"},{name:"aggregation_loss_weight",val:" = 1.0"},{name:"use_answer_as_supervision",val:" = None"},{name:"answer_loss_importance",val:" = 1.0"},{name:"use_normalized_answer_loss",val:" = False"},{name:"huber_loss_delta",val:" = None"},{name:"temperature",val:" = 1.0"},{name:"aggregation_temperature",val:" = 1.0"},{name:"use_gumbel_for_cells",val:" = False"},{name:"use_gumbel_for_aggregation",val:" = False"},{name:"average_approximation_function",val:" = 'ratio'"},{name:"cell_selection_preference",val:" = None"},{name:"answer_loss_cutoff",val:" = None"},{name:"max_num_rows",val:" = 64"},{name:"max_num_columns",val:" = 32"},{name:"average_logits_per_cell",val:" = False"},{name:"select_one_column",val:" = True"},{name:"allow_empty_column_selection",val:" = False"},{name:"init_cell_selection_weights_to_zero",val:" = False"},{name:"reset_position_index_per_cell",val:" = True"},{name:"disable_per_token_loss",val:" = False"},{name:"aggregation_labels",val:" = None"},{name:"no_aggregation_label_index",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
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
should be set to 0 for these models.`,name:"no_aggregation_label_index"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/configuration_tapas.py#L45"}}),Ao=new To({props:{anchor:"transformers.TapasConfig.example",$$slots:{default:[Sy]},$$scope:{ctx:P}}}),On=new es({}),Nn=new it({props:{name:"class transformers.TapasTokenizer",anchor:"transformers.TapasTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"empty_token",val:" = '[EMPTY]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"cell_trim_length",val:": int = -1"},{name:"max_column_id",val:": int = None"},{name:"max_row_id",val:": int = None"},{name:"strip_column_names",val:": bool = False"},{name:"update_answer_coordinates",val:": bool = False"},{name:"min_question_length",val:" = None"},{name:"max_question_length",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Maximum length of each question in terms of tokens (will be skipped otherwise).`,name:"max_question_length"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L236"}}),Ln=new it({props:{name:"__call__",anchor:"transformers.TapasTokenizer.__call__",parameters:[{name:"table",val:": pd.DataFrame"},{name:"queries",val:": typing.Union[str, typing.List[str], typing.List[int], typing.List[typing.List[str]], typing.List[typing.List[int]], NoneType] = None"},{name:"answer_coordinates",val:": typing.Union[typing.List[typing.Tuple], typing.List[typing.List[typing.Tuple]], NoneType] = None"},{name:"answer_text",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.utils.generic.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.models.tapas.tokenization_tapas.TapasTruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.utils.generic.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>) &#x2014;
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
</ul>`,name:"return_tensors"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L576"}}),Qn=new it({props:{name:"convert_logits_to_predictions",anchor:"transformers.TapasTokenizer.convert_logits_to_predictions",parameters:[{name:"data",val:""},{name:"logits",val:""},{name:"logits_agg",val:" = None"},{name:"cell_classification_threshold",val:" = 0.5"}],parametersDescription:[{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.data",description:`<strong>data</strong> (<code>dict</code>) &#x2014;
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
`}}),Un=new it({props:{name:"save_vocabulary",anchor:"transformers.TapasTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/tokenization_tapas.py#L444"}}),Bn=new es({}),Rn=new it({props:{name:"class transformers.TapasModel",anchor:"transformers.TapasModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],parametersDescription:[{anchor:"transformers.TapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L853"}}),Zn=new it({props:{name:"forward",anchor:"transformers.TapasModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Po=new Is({props:{$$slots:{default:[Dy]},$$scope:{ctx:P}}}),Mo=new To({props:{anchor:"transformers.TapasModel.forward.example",$$slots:{default:[Oy]},$$scope:{ctx:P}}}),er=new es({}),tr=new it({props:{name:"class transformers.TapasForMaskedLM",anchor:"transformers.TapasForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1006"}}),or=new it({props:{name:"forward",anchor:"transformers.TapasForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TapasForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Do=new Is({props:{$$slots:{default:[Ny]},$$scope:{ctx:P}}}),Oo=new To({props:{anchor:"transformers.TapasForMaskedLM.forward.example",$$slots:{default:[Ly]},$$scope:{ctx:P}}}),nr=new es({}),rr=new it({props:{name:"class transformers.TapasForSequenceClassification",anchor:"transformers.TapasForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1466"}}),pr=new it({props:{name:"forward",anchor:"transformers.TapasForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Lo=new Is({props:{$$slots:{default:[Qy]},$$scope:{ctx:P}}}),Qo=new To({props:{anchor:"transformers.TapasForSequenceClassification.forward.example",$$slots:{default:[Iy]},$$scope:{ctx:P}}}),cr=new es({}),hr=new it({props:{name:"class transformers.TapasForQuestionAnswering",anchor:"transformers.TapasForQuestionAnswering",parameters:[{name:"config",val:": TapasConfig"}],parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tapas.py#L1121"}}),gr=new it({props:{name:"forward",anchor:"transformers.TapasForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"table_mask",val:" = None"},{name:"labels",val:" = None"},{name:"aggregation_labels",val:" = None"},{name:"float_answer",val:" = None"},{name:"numeric_values",val:" = None"},{name:"numeric_values_scale",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),Wo=new Is({props:{$$slots:{default:[Wy]},$$scope:{ctx:P}}}),Ho=new To({props:{anchor:"transformers.TapasForQuestionAnswering.forward.example",$$slots:{default:[Hy]},$$scope:{ctx:P}}}),_r=new es({}),Tr=new it({props:{name:"class transformers.TFTapasModel",anchor:"transformers.TFTapasModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L979"}}),Bo=new Is({props:{$$slots:{default:[Uy]},$$scope:{ctx:P}}}),yr=new it({props:{name:"call",anchor:"transformers.TFTapasModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
behaviors between training and evaluation).`,name:"training"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L985",returnDescription:`
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
`}}),Ro=new Is({props:{$$slots:{default:[By]},$$scope:{ctx:P}}}),Go=new To({props:{anchor:"transformers.TFTapasModel.call.example",$$slots:{default:[Ry]},$$scope:{ctx:P}}}),kr=new es({}),jr=new it({props:{name:"class transformers.TFTapasForMaskedLM",anchor:"transformers.TFTapasForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1054"}}),Vo=new Is({props:{$$slots:{default:[Gy]},$$scope:{ctx:P}}}),Ar=new it({props:{name:"call",anchor:"transformers.TFTapasForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1070",returnDescription:`
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
`}}),Yo=new Is({props:{$$slots:{default:[Ky]},$$scope:{ctx:P}}}),Jo=new To({props:{anchor:"transformers.TFTapasForMaskedLM.call.example",$$slots:{default:[Vy]},$$scope:{ctx:P}}}),zr=new es({}),xr=new it({props:{name:"class transformers.TFTapasForSequenceClassification",anchor:"transformers.TFTapasForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1596"}}),Zo=new Is({props:{$$slots:{default:[Yy]},$$scope:{ctx:P}}}),Sr=new it({props:{name:"call",anchor:"transformers.TFTapasForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1607",returnDescription:`
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
`}}),en=new Is({props:{$$slots:{default:[Jy]},$$scope:{ctx:P}}}),tn=new To({props:{anchor:"transformers.TFTapasForSequenceClassification.call.example",$$slots:{default:[Xy]},$$scope:{ctx:P}}}),Dr=new es({}),Or=new it({props:{name:"class transformers.TFTapasForQuestionAnswering",anchor:"transformers.TFTapasForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1260"}}),an=new Is({props:{$$slots:{default:[Zy]},$$scope:{ctx:P}}}),Ir=new it({props:{name:"call",anchor:"transformers.TFTapasForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"table_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"aggregation_labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"float_answer",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values_scale",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
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
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/tapas/modeling_tf_tapas.py#L1282",returnDescription:`
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
`}}),on=new Is({props:{$$slots:{default:[ek]},$$scope:{ctx:P}}}),nn=new To({props:{anchor:"transformers.TFTapasForQuestionAnswering.call.example",$$slots:{default:[tk]},$$scope:{ctx:P}}}),{c(){l=o("meta"),T=c(),d=o("h1"),g=o("a"),b=o("span"),j(p.$$.fragment),f=c(),z=o("span"),k=s("TAPAS"),W=c(),O=o("h2"),G=o("a"),ae=o("span"),j(v.$$.fragment),J=c(),Z=o("span"),de=s("Overview"),U=c(),N=o("p"),y=s("The TAPAS model was proposed in "),C=o("a"),B=s("TAPAS: Weakly Supervised Table Parsing via Pre-training"),ee=s(`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),pe=c(),R=o("p"),ge=s("For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),he=c(),X=o("ul"),_e=o("li"),D=o("a"),L=s("SQA"),I=s(" (Sequential Question Answering by Microsoft)"),M=c(),K=o("li"),H=o("a"),ve=s("WTQ"),ze=s(" (Wiki Table Questions by Stanford University)"),ue=c(),fe=o("li"),Ae=o("a"),se=s("WikiSQL"),ke=s(" (by Salesforce)."),Te=c(),Pe=o("p"),Ce=s("It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),je=c(),Me=o("p"),$e=s("The abstract from the paper is the following:"),ce=c(),Se=o("p"),ye=o("em"),Y=s("Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),qe=c(),V=o("p"),We=s("In addition, the authors have further pre-trained TAPAS to recognize "),oe=o("strong"),He=s("table entailment"),Ue=s(", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),w=o("a"),S=s("TabFact"),Ve=s(", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),be=o("a"),Ye=s("Understanding tables with intermediate pre-training"),Je=s(" by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),Q=c(),Le=o("img"),Qe=c(),Ie=o("small"),Xe=s("TAPAS architecture. Taken from the "),le=o("a"),Ee=s("original blog post"),Ze=s("."),xe=c(),ne=o("p"),et=s("This model was contributed by "),Be=o("a"),re=s("nielsr"),Re=s(". The Tensorflow version of this model was contributed by "),Fe=o("a"),tt=s("kamalkraj"),Pt=s(". The original code can be found "),Mt=o("a"),Ws=s("here"),St=s("."),bs=c(),ts=o("p"),Dt=s("Tips:"),ws=c(),ut=o("ul"),De=o("li"),Hs=s("TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Ot=o("code"),ie=s("reset_position_index_per_cell"),bt=s(" parameter of "),ss=o("a"),Us=s("TapasConfig"),Nt=s(", which is set to "),ns=o("code"),Bs=s("True"),Lt=s(" by default. The default versions of the models available on the "),Qt=o("a"),Rs=s("hub"),It=s(" all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),rs=o("code"),Gs=s('revision="no_reset"'),Wt=s(" when calling the "),is=o("code"),Ks=s("from_pretrained()"),Ht=s(" method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),Vs=c(),st=o("li"),Ut=s("TAPAS is based on BERT, so "),ls=o("code"),Ys=s("TAPAS-base"),Bt=s(" for example corresponds to a "),ds=o("code"),Js=s("BERT-base"),ps=s(" architecture. Of course, "),lt=o("code"),cs=s("TAPAS-large"),Oe=s(" will result in the best performance (the results reported in the paper are from "),hs=o("code"),wt=s("TAPAS-large"),Xs=s("). Results of the various sized models are shown on the "),Rt=o("a"),Gt=s("original Github repository"),Zs=s("."),ea=c(),dt=o("li"),ta=s("TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),us=o("code"),ms=s("prev_labels"),gt=s(" token type ids can be overwritten by the predicted "),Kt=o("code"),x=s("labels"),te=s(" of the model to the previous question. See \u201CUsage\u201D section for more info."),ka=c(),sa=o("li"),ja=s("TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),ha=c(),Vt=o("h2"),_t=o("a"),aa=o("span"),j(vt.$$.fragment),qa=c(),oa=o("span"),$a=s("Usage: fine-tuning"),ua=c(),nt=o("p"),fs=s("Here we explain how you can fine-tune "),vs=o("a"),pt=s("TapasForQuestionAnswering"),Ea=s(" on your own dataset."),ma=c(),ys=o("p"),na=o("strong"),gs=s("STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),fa=c(),we=o("p"),Fa=s("Basically, there are 3 different ways in which one can fine-tune "),ks=o("a"),Aa=s("TapasForQuestionAnswering"),za=s(", corresponding to the different datasets on which Tapas was fine-tuned:"),ga=c(),At=o("ol"),ra=o("li"),_s=s("SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),xa=c(),Ne=o("li"),Ca=s("WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ia=o("strong"),Pa=s("weak supervision"),Ma=s(", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Sa=c(),me=o("li"),Da=s("WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),la=o("strong"),Oa=s("strong supervision"),Na=s(". Here, learning the appropriate aggregation operator is much easier."),_a=c(),js=o("p"),La=s("To summarize:"),Ta=c(),Ge=o("table"),da=o("thead"),Yt=o("tr"),pa=o("th"),el=o("strong"),Sc=s("Task"),Dc=c(),tl=o("th"),sl=o("strong"),Oc=s("Example dataset"),Nc=c(),al=o("th"),ol=o("strong"),Lc=s("Description"),Qc=c(),Qa=o("tbody"),Ia=o("tr"),nl=o("td"),Ic=s("Conversational"),Wc=c(),rl=o("td"),Hc=s("SQA"),Uc=c(),il=o("td"),Bc=s("Conversational, only cell selection questions"),Rc=c(),Wa=o("tr"),ll=o("td"),Gc=s("Weak supervision for aggregation"),Kc=c(),dl=o("td"),Vc=s("WTQ"),Yc=c(),pl=o("td"),Jc=s("Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Xc=c(),Ha=o("tr"),cl=o("td"),Zc=s("Strong supervision for aggregation"),eh=c(),hl=o("td"),th=s("WikiSQL-supervised"),sh=c(),ul=o("td"),ah=s("Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),op=c(),j(bo.$$.fragment),np=c(),wo=o("p"),oh=s("What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),bn=o("a"),nh=s("here"),rh=s(" for more info."),rp=c(),vo=o("p"),ih=s("For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),wn=o("a"),lh=s("here"),dh=s("."),ip=c(),Br=o("p"),ml=o("strong"),ph=s("STEP 2: Prepare your data in the SQA format"),lp=c(),yo=o("p"),ch=s("Second, no matter what you picked above, you should prepare your dataset in the "),vn=o("a"),hh=s("SQA"),uh=s(" format. This format is a TSV/CSV file with the following columns:"),dp=c(),rt=o("ul"),Rr=o("li"),fl=o("code"),mh=s("id"),fh=s(": optional, id of the table-question pair, for bookkeeping purposes."),gh=c(),Gr=o("li"),gl=o("code"),_h=s("annotator"),Th=s(": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),bh=c(),Kr=o("li"),_l=o("code"),wh=s("position"),vh=s(": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),yh=c(),Vr=o("li"),Tl=o("code"),kh=s("question"),jh=s(": string"),qh=c(),Yr=o("li"),bl=o("code"),$h=s("table_file"),Eh=s(": string, name of a csv file containing the tabular data"),Fh=c(),Jr=o("li"),wl=o("code"),Ah=s("answer_coordinates"),zh=s(": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),xh=c(),Xr=o("li"),vl=o("code"),Ch=s("answer_text"),Ph=s(": list of one or more strings (each string being a cell value that is part of the answer)"),Mh=c(),Zr=o("li"),yl=o("code"),Sh=s("aggregation_label"),Dh=s(": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Oh=c(),ei=o("li"),kl=o("code"),Nh=s("float_answer"),Lh=s(": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),pp=c(),zt=o("p"),Qh=s("The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),yn=o("a"),Ih=s("here"),Wh=s(". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),kn=o("a"),Hh=s("here"),Uh=s(". Interestingly, these conversion scripts are not perfect (the "),jl=o("code"),Bh=s("answer_coordinates"),Rh=s(" and "),ql=o("code"),Gh=s("float_answer"),Kh=s(" fields are populated based on the "),$l=o("code"),Vh=s("answer_text"),Yh=s("), meaning that WTQ and WikiSQL results could actually be improved."),cp=c(),ti=o("p"),El=o("strong"),Jh=s("STEP 3: Convert your data into tensors using TapasTokenizer"),hp=c(),j(ko.$$.fragment),up=c(),Ke=o("p"),Xh=s("Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),Fl=o("strong"),Zh=s("not conversational"),eu=s(". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),Al=o("code"),tu=s("queries"),su=s(", "),zl=o("code"),au=s("answer_coordinates"),ou=s(" and "),xl=o("code"),nu=s("answer_text"),ru=s(" per table (in the order of their "),Cl=o("code"),iu=s("position"),lu=s(`
index) and batch encode each table with its questions. This will make sure that the `),Pl=o("code"),du=s("prev_labels"),pu=s(" token types (see docs of "),si=o("a"),cu=s("TapasTokenizer"),hu=s(") are set correctly. See "),jn=o("a"),uu=s("this notebook"),mu=s(" for more info. See "),qn=o("a"),fu=s("this notebook"),gu=s(" for more info regarding using the TensorFlow model."),mp=c(),ai=o("p"),_u=s("**STEP 4: Train (fine-tune) the model"),fp=c(),j(jo.$$.fragment),gp=c(),Ua=o("h2"),qo=o("a"),Ml=o("span"),j($n.$$.fragment),Tu=c(),Sl=o("span"),bu=s("Usage: inference"),_p=c(),j($o.$$.fragment),Tp=c(),xt=o("p"),wu=s("In case of a conversational set-up, then each table-question pair must be provided "),Dl=o("strong"),vu=s("sequentially"),yu=s(" to the model, such that the "),Ol=o("code"),ku=s("prev_labels"),ju=s(" token types can be overwritten by the predicted "),Nl=o("code"),qu=s("labels"),$u=s(" of the previous table-question pair. Again, more info can be found in "),En=o("a"),Eu=s("this notebook"),Fu=s(" (for PyTorch) and "),Fn=o("a"),Au=s("this notebook"),zu=s(" (for TensorFlow)."),bp=c(),Ba=o("h2"),Eo=o("a"),Ll=o("span"),j(An.$$.fragment),xu=c(),Ql=o("span"),Cu=s("TAPAS specific outputs"),wp=c(),Ra=o("div"),j(zn.$$.fragment),Pu=c(),xn=o("p"),Mu=s("Output type of "),oi=o("a"),Su=s("TapasForQuestionAnswering"),Du=s("."),vp=c(),Ga=o("h2"),Fo=o("a"),Il=o("span"),j(Cn.$$.fragment),Ou=c(),Wl=o("span"),Nu=s("TapasConfig"),yp=c(),Jt=o("div"),j(Pn.$$.fragment),Lu=c(),Ka=o("p"),Qu=s("This is the configuration class to store the configuration of a "),ni=o("a"),Iu=s("TapasModel"),Wu=s(`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS
`),Mn=o("a"),Hu=s("google/tapas-base-finetuned-sqa"),Uu=s(" architecture."),Bu=c(),Va=o("p"),Ru=s("Configuration objects inherit from "),Hl=o("code"),Gu=s("PreTrainedConfig"),Ku=s(` and can be used to control the model outputs. Read the
documentation from `),ri=o("a"),Vu=s("PretrainedConfig"),Yu=s(" for more information."),Ju=c(),Sn=o("p"),Xu=s(`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),Dn=o("a"),Zu=s("https://github.com/google-research/tapas/tree/master"),em=s("."),tm=c(),j(Ao.$$.fragment),kp=c(),Ya=o("h2"),zo=o("a"),Ul=o("span"),j(On.$$.fragment),sm=c(),Bl=o("span"),am=s("TapasTokenizer"),jp=c(),ct=o("div"),j(Nn.$$.fragment),om=c(),Rl=o("p"),nm=s(`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),rm=c(),at=o("p"),im=s("This tokenizer inherits from "),ii=o("a"),lm=s("PreTrainedTokenizer"),dm=s(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),li=o("a"),pm=s("TapasTokenizer"),cm=s(` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Gl=o("code"),hm=s("segment_ids"),um=s(`,
`),Kl=o("code"),mm=s("column_ids"),fm=s(", "),Vl=o("code"),gm=s("row_ids"),_m=s(", "),Yl=o("code"),Tm=s("prev_labels"),bm=s(", "),Jl=o("code"),wm=s("column_ranks"),vm=s(", "),Xl=o("code"),ym=s("inv_column_ranks"),km=s(" and "),Zl=o("code"),jm=s("numeric_relations"),qm=s(":"),$m=c(),yt=o("ul"),ed=o("li"),Em=s(`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),Fm=c(),td=o("li"),Am=s(`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),zm=c(),sd=o("li"),xm=s(`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),Cm=c(),ad=o("li"),Pm=s(`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Mm=c(),od=o("li"),Sm=s(`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),Dm=c(),nd=o("li"),Om=s(`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),Nm=c(),rd=o("li"),Lm=s(`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),Qm=c(),di=o("p"),pi=o("a"),Im=s("TapasTokenizer"),Wm=s(` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),Hm=c(),xo=o("div"),j(Ln.$$.fragment),Um=c(),id=o("p"),Bm=s("Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),Rm=c(),ba=o("div"),j(Qn.$$.fragment),Gm=c(),In=o("p"),Km=s("Converts logits of "),ci=o("a"),Vm=s("TapasForQuestionAnswering"),Ym=s(` to actual predicted answer coordinates and optional
aggregation indices.`),Jm=c(),Wn=o("p"),Xm=s(`The original implementation, on which this function is based, can be found
`),Hn=o("a"),Zm=s("here"),ef=s("."),tf=c(),hi=o("div"),j(Un.$$.fragment),qp=c(),Ja=o("h2"),Co=o("a"),ld=o("span"),j(Bn.$$.fragment),sf=c(),dd=o("span"),af=s("TapasModel"),$p=c(),kt=o("div"),j(Rn.$$.fragment),of=c(),Gn=o("p"),nf=s(`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ui=o("a"),rf=s("PreTrainedModel"),lf=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),df=c(),Kn=o("p"),pf=s("This model is also a PyTorch "),Vn=o("a"),cf=s("torch.nn.Module"),hf=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),uf=c(),Yn=o("p"),mf=s("This class is a small change compared to "),mi=o("a"),ff=s("BertModel"),gf=s(", taking into account the additional token type ids."),_f=c(),Jn=o("p"),Tf=s(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Xn=o("a"),bf=s(`Attention is
all you need`),wf=s(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),vf=c(),qs=o("div"),j(Zn.$$.fragment),yf=c(),Xa=o("p"),kf=s("The "),fi=o("a"),jf=s("TapasModel"),qf=s(" forward method, overrides the "),pd=o("code"),$f=s("__call__"),Ef=s(" special method."),Ff=c(),j(Po.$$.fragment),Af=c(),j(Mo.$$.fragment),Ep=c(),Za=o("h2"),So=o("a"),cd=o("span"),j(er.$$.fragment),zf=c(),hd=o("span"),xf=s("TapasForMaskedLM"),Fp=c(),Ts=o("div"),j(tr.$$.fragment),Cf=c(),eo=o("p"),Pf=s("Tapas Model with a "),ud=o("code"),Mf=s("language modeling"),Sf=s(` head on top.
This model inherits from `),gi=o("a"),Df=s("PreTrainedModel"),Of=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nf=c(),sr=o("p"),Lf=s("This model is also a PyTorch "),ar=o("a"),Qf=s("torch.nn.Module"),If=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Wf=c(),$s=o("div"),j(or.$$.fragment),Hf=c(),to=o("p"),Uf=s("The "),_i=o("a"),Bf=s("TapasForMaskedLM"),Rf=s(" forward method, overrides the "),md=o("code"),Gf=s("__call__"),Kf=s(" special method."),Vf=c(),j(Do.$$.fragment),Yf=c(),j(Oo.$$.fragment),Ap=c(),so=o("h2"),No=o("a"),fd=o("span"),j(nr.$$.fragment),Jf=c(),gd=o("span"),Xf=s("TapasForSequenceClassification"),zp=c(),Xt=o("div"),j(rr.$$.fragment),Zf=c(),_d=o("p"),eg=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),tg=c(),ir=o("p"),sg=s("This model inherits from "),Ti=o("a"),ag=s("PreTrainedModel"),og=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ng=c(),lr=o("p"),rg=s("This model is also a PyTorch "),dr=o("a"),ig=s("torch.nn.Module"),lg=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),dg=c(),Es=o("div"),j(pr.$$.fragment),pg=c(),ao=o("p"),cg=s("The "),bi=o("a"),hg=s("TapasForSequenceClassification"),ug=s(" forward method, overrides the "),Td=o("code"),mg=s("__call__"),fg=s(" special method."),gg=c(),j(Lo.$$.fragment),_g=c(),j(Qo.$$.fragment),xp=c(),oo=o("h2"),Io=o("a"),bd=o("span"),j(cr.$$.fragment),Tg=c(),wd=o("span"),bg=s("TapasForQuestionAnswering"),Cp=c(),Zt=o("div"),j(hr.$$.fragment),wg=c(),no=o("p"),vg=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),vd=o("code"),yg=s("logits"),kg=s(" and optional "),yd=o("code"),jg=s("logits_aggregation"),qg=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),$g=c(),ur=o("p"),Eg=s("This model inherits from "),wi=o("a"),Fg=s("PreTrainedModel"),Ag=s(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zg=c(),mr=o("p"),xg=s("This model is also a PyTorch "),fr=o("a"),Cg=s("torch.nn.Module"),Pg=s(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Mg=c(),Fs=o("div"),j(gr.$$.fragment),Sg=c(),ro=o("p"),Dg=s("The "),vi=o("a"),Og=s("TapasForQuestionAnswering"),Ng=s(" forward method, overrides the "),kd=o("code"),Lg=s("__call__"),Qg=s(" special method."),Ig=c(),j(Wo.$$.fragment),Wg=c(),j(Ho.$$.fragment),Pp=c(),io=o("h2"),Uo=o("a"),jd=o("span"),j(_r.$$.fragment),Hg=c(),qd=o("span"),Ug=s("TFTapasModel"),Mp=c(),jt=o("div"),j(Tr.$$.fragment),Bg=c(),$d=o("p"),Rg=s("The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),Gg=c(),br=o("p"),Kg=s("This model inherits from "),yi=o("a"),Vg=s("TFPreTrainedModel"),Yg=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jg=c(),wr=o("p"),Xg=s("This model is also a "),vr=o("a"),Zg=s("tf.keras.Model"),e_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),t_=c(),j(Bo.$$.fragment),s_=c(),As=o("div"),j(yr.$$.fragment),a_=c(),lo=o("p"),o_=s("The "),ki=o("a"),n_=s("TFTapasModel"),r_=s(" forward method, overrides the "),Ed=o("code"),i_=s("__call__"),l_=s(" special method."),d_=c(),j(Ro.$$.fragment),p_=c(),j(Go.$$.fragment),Sp=c(),po=o("h2"),Ko=o("a"),Fd=o("span"),j(kr.$$.fragment),c_=c(),Ad=o("span"),h_=s("TFTapasForMaskedLM"),Dp=c(),qt=o("div"),j(jr.$$.fragment),u_=c(),qr=o("p"),m_=s("Tapas Model with a "),zd=o("code"),f_=s("language modeling"),g_=s(" head on top."),__=c(),$r=o("p"),T_=s("This model inherits from "),ji=o("a"),b_=s("TFPreTrainedModel"),w_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),v_=c(),Er=o("p"),y_=s("This model is also a "),Fr=o("a"),k_=s("tf.keras.Model"),j_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),q_=c(),j(Vo.$$.fragment),$_=c(),zs=o("div"),j(Ar.$$.fragment),E_=c(),co=o("p"),F_=s("The "),qi=o("a"),A_=s("TFTapasForMaskedLM"),z_=s(" forward method, overrides the "),xd=o("code"),x_=s("__call__"),C_=s(" special method."),P_=c(),j(Yo.$$.fragment),M_=c(),j(Jo.$$.fragment),Op=c(),ho=o("h2"),Xo=o("a"),Cd=o("span"),j(zr.$$.fragment),S_=c(),Pd=o("span"),D_=s("TFTapasForSequenceClassification"),Np=c(),$t=o("div"),j(xr.$$.fragment),O_=c(),Md=o("p"),N_=s(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),L_=c(),Cr=o("p"),Q_=s("This model inherits from "),$i=o("a"),I_=s("TFPreTrainedModel"),W_=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),H_=c(),Pr=o("p"),U_=s("This model is also a "),Mr=o("a"),B_=s("tf.keras.Model"),R_=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),G_=c(),j(Zo.$$.fragment),K_=c(),xs=o("div"),j(Sr.$$.fragment),V_=c(),uo=o("p"),Y_=s("The "),Ei=o("a"),J_=s("TFTapasForSequenceClassification"),X_=s(" forward method, overrides the "),Sd=o("code"),Z_=s("__call__"),eT=s(" special method."),tT=c(),j(en.$$.fragment),sT=c(),j(tn.$$.fragment),Lp=c(),mo=o("h2"),sn=o("a"),Dd=o("span"),j(Dr.$$.fragment),aT=c(),Od=o("span"),oT=s("TFTapasForQuestionAnswering"),Qp=c(),Et=o("div"),j(Or.$$.fragment),nT=c(),fo=o("p"),rT=s(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Nd=o("code"),iT=s("logits"),lT=s(" and optional "),Ld=o("code"),dT=s("logits_aggregation"),pT=s(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),cT=c(),Nr=o("p"),hT=s("This model inherits from "),Fi=o("a"),uT=s("TFPreTrainedModel"),mT=s(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fT=c(),Lr=o("p"),gT=s("This model is also a "),Qr=o("a"),_T=s("tf.keras.Model"),TT=s(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bT=c(),j(an.$$.fragment),wT=c(),Cs=o("div"),j(Ir.$$.fragment),vT=c(),go=o("p"),yT=s("The "),Ai=o("a"),kT=s("TFTapasForQuestionAnswering"),jT=s(" forward method, overrides the "),Qd=o("code"),qT=s("__call__"),$T=s(" special method."),ET=c(),j(on.$$.fragment),FT=c(),j(nn.$$.fragment),this.h()},l(i){const _=gy('[data-svelte="svelte-1phssyn"]',document.head);l=n(_,"META",{name:!0,content:!0}),_.forEach(t),T=h(i),d=n(i,"H1",{class:!0});var Wr=r(d);g=n(Wr,"A",{id:!0,class:!0,href:!0});var Id=r(g);b=n(Id,"SPAN",{});var Wd=r(b);q(p.$$.fragment,Wd),Wd.forEach(t),Id.forEach(t),f=h(Wr),z=n(Wr,"SPAN",{});var Hd=r(z);k=a(Hd,"TAPAS"),Hd.forEach(t),Wr.forEach(t),W=h(i),O=n(i,"H2",{class:!0});var Hr=r(O);G=n(Hr,"A",{id:!0,class:!0,href:!0});var Ud=r(G);ae=n(Ud,"SPAN",{});var Bd=r(ae);q(v.$$.fragment,Bd),Bd.forEach(t),Ud.forEach(t),J=h(Hr),Z=n(Hr,"SPAN",{});var Rd=r(Z);de=a(Rd,"Overview"),Rd.forEach(t),Hr.forEach(t),U=h(i),N=n(i,"P",{});var Ur=r(N);y=a(Ur,"The TAPAS model was proposed in "),C=n(Ur,"A",{href:!0,rel:!0});var Gd=r(C);B=a(Gd,"TAPAS: Weakly Supervised Table Parsing via Pre-training"),Gd.forEach(t),ee=a(Ur,`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),Ur.forEach(t),pe=h(i),R=n(i,"P",{});var Kd=r(R);ge=a(Kd,"For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),Kd.forEach(t),he=h(i),X=n(i,"UL",{});var _o=r(X);_e=n(_o,"LI",{});var zi=r(_e);D=n(zi,"A",{href:!0,rel:!0});var Vd=r(D);L=a(Vd,"SQA"),Vd.forEach(t),I=a(zi," (Sequential Question Answering by Microsoft)"),zi.forEach(t),M=h(_o),K=n(_o,"LI",{});var xi=r(K);H=n(xi,"A",{href:!0,rel:!0});var Yd=r(H);ve=a(Yd,"WTQ"),Yd.forEach(t),ze=a(xi," (Wiki Table Questions by Stanford University)"),xi.forEach(t),ue=h(_o),fe=n(_o,"LI",{});var Ci=r(fe);Ae=n(Ci,"A",{href:!0,rel:!0});var Jd=r(Ae);se=a(Jd,"WikiSQL"),Jd.forEach(t),ke=a(Ci," (by Salesforce)."),Ci.forEach(t),_o.forEach(t),Te=h(i),Pe=n(i,"P",{});var Xd=r(Pe);Ce=a(Xd,"It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),Xd.forEach(t),je=h(i),Me=n(i,"P",{});var Zd=r(Me);$e=a(Zd,"The abstract from the paper is the following:"),Zd.forEach(t),ce=h(i),Se=n(i,"P",{});var ep=r(Se);ye=n(ep,"EM",{});var tp=r(ye);Y=a(tp,"Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),tp.forEach(t),ep.forEach(t),qe=h(i),V=n(i,"P",{});var ca=r(V);We=a(ca,"In addition, the authors have further pre-trained TAPAS to recognize "),oe=n(ca,"STRONG",{});var sp=r(oe);He=a(sp,"table entailment"),sp.forEach(t),Ue=a(ca,", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),w=n(ca,"A",{href:!0,rel:!0});var ap=r(w);S=a(ap,"TabFact"),ap.forEach(t),Ve=a(ca,", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),be=n(ca,"A",{href:!0,rel:!0});var LT=r(be);Ye=a(LT,"Understanding tables with intermediate pre-training"),LT.forEach(t),Je=a(ca," by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),ca.forEach(t),Q=h(i),Le=n(i,"IMG",{src:!0,alt:!0,width:!0}),Qe=h(i),Ie=n(i,"SMALL",{});var Wp=r(Ie);Xe=a(Wp,"TAPAS architecture. Taken from the "),le=n(Wp,"A",{href:!0});var QT=r(le);Ee=a(QT,"original blog post"),QT.forEach(t),Ze=a(Wp,"."),Wp.forEach(t),xe=h(i),ne=n(i,"P",{});var rn=r(ne);et=a(rn,"This model was contributed by "),Be=n(rn,"A",{href:!0,rel:!0});var IT=r(Be);re=a(IT,"nielsr"),IT.forEach(t),Re=a(rn,". The Tensorflow version of this model was contributed by "),Fe=n(rn,"A",{href:!0,rel:!0});var WT=r(Fe);tt=a(WT,"kamalkraj"),WT.forEach(t),Pt=a(rn,". The original code can be found "),Mt=n(rn,"A",{href:!0,rel:!0});var HT=r(Mt);Ws=a(HT,"here"),HT.forEach(t),St=a(rn,"."),rn.forEach(t),bs=h(i),ts=n(i,"P",{});var UT=r(ts);Dt=a(UT,"Tips:"),UT.forEach(t),ws=h(i),ut=n(i,"UL",{});var ln=r(ut);De=n(ln,"LI",{});var as=r(De);Hs=a(as,"TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Ot=n(as,"CODE",{});var BT=r(Ot);ie=a(BT,"reset_position_index_per_cell"),BT.forEach(t),bt=a(as," parameter of "),ss=n(as,"A",{href:!0});var RT=r(ss);Us=a(RT,"TapasConfig"),RT.forEach(t),Nt=a(as,", which is set to "),ns=n(as,"CODE",{});var GT=r(ns);Bs=a(GT,"True"),GT.forEach(t),Lt=a(as," by default. The default versions of the models available on the "),Qt=n(as,"A",{href:!0,rel:!0});var KT=r(Qt);Rs=a(KT,"hub"),KT.forEach(t),It=a(as," all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),rs=n(as,"CODE",{});var VT=r(rs);Gs=a(VT,'revision="no_reset"'),VT.forEach(t),Wt=a(as," when calling the "),is=n(as,"CODE",{});var YT=r(is);Ks=a(YT,"from_pretrained()"),YT.forEach(t),Ht=a(as," method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),as.forEach(t),Vs=h(ln),st=n(ln,"LI",{});var Ps=r(st);Ut=a(Ps,"TAPAS is based on BERT, so "),ls=n(Ps,"CODE",{});var JT=r(ls);Ys=a(JT,"TAPAS-base"),JT.forEach(t),Bt=a(Ps," for example corresponds to a "),ds=n(Ps,"CODE",{});var XT=r(ds);Js=a(XT,"BERT-base"),XT.forEach(t),ps=a(Ps," architecture. Of course, "),lt=n(Ps,"CODE",{});var ZT=r(lt);cs=a(ZT,"TAPAS-large"),ZT.forEach(t),Oe=a(Ps," will result in the best performance (the results reported in the paper are from "),hs=n(Ps,"CODE",{});var eb=r(hs);wt=a(eb,"TAPAS-large"),eb.forEach(t),Xs=a(Ps,"). Results of the various sized models are shown on the "),Rt=n(Ps,"A",{href:!0,rel:!0});var tb=r(Rt);Gt=a(tb,"original Github repository"),tb.forEach(t),Zs=a(Ps,"."),Ps.forEach(t),ea=h(ln),dt=n(ln,"LI",{});var Pi=r(dt);ta=a(Pi,"TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),us=n(Pi,"CODE",{});var sb=r(us);ms=a(sb,"prev_labels"),sb.forEach(t),gt=a(Pi," token type ids can be overwritten by the predicted "),Kt=n(Pi,"CODE",{});var ab=r(Kt);x=a(ab,"labels"),ab.forEach(t),te=a(Pi," of the model to the previous question. See \u201CUsage\u201D section for more info."),Pi.forEach(t),ka=h(ln),sa=n(ln,"LI",{});var ob=r(sa);ja=a(ob,"TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),ob.forEach(t),ln.forEach(t),ha=h(i),Vt=n(i,"H2",{class:!0});var Hp=r(Vt);_t=n(Hp,"A",{id:!0,class:!0,href:!0});var nb=r(_t);aa=n(nb,"SPAN",{});var rb=r(aa);q(vt.$$.fragment,rb),rb.forEach(t),nb.forEach(t),qa=h(Hp),oa=n(Hp,"SPAN",{});var ib=r(oa);$a=a(ib,"Usage: fine-tuning"),ib.forEach(t),Hp.forEach(t),ua=h(i),nt=n(i,"P",{});var Up=r(nt);fs=a(Up,"Here we explain how you can fine-tune "),vs=n(Up,"A",{href:!0});var lb=r(vs);pt=a(lb,"TapasForQuestionAnswering"),lb.forEach(t),Ea=a(Up," on your own dataset."),Up.forEach(t),ma=h(i),ys=n(i,"P",{});var db=r(ys);na=n(db,"STRONG",{});var pb=r(na);gs=a(pb,"STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),pb.forEach(t),db.forEach(t),fa=h(i),we=n(i,"P",{});var Bp=r(we);Fa=a(Bp,"Basically, there are 3 different ways in which one can fine-tune "),ks=n(Bp,"A",{href:!0});var cb=r(ks);Aa=a(cb,"TapasForQuestionAnswering"),cb.forEach(t),za=a(Bp,", corresponding to the different datasets on which Tapas was fine-tuned:"),Bp.forEach(t),ga=h(i),At=n(i,"OL",{});var Mi=r(At);ra=n(Mi,"LI",{});var hb=r(ra);_s=a(hb,"SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),hb.forEach(t),xa=h(Mi),Ne=n(Mi,"LI",{});var Rp=r(Ne);Ca=a(Rp,"WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ia=n(Rp,"STRONG",{});var ub=r(ia);Pa=a(ub,"weak supervision"),ub.forEach(t),Ma=a(Rp,", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),Rp.forEach(t),Sa=h(Mi),me=n(Mi,"LI",{});var Gp=r(me);Da=a(Gp,"WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),la=n(Gp,"STRONG",{});var mb=r(la);Oa=a(mb,"strong supervision"),mb.forEach(t),Na=a(Gp,". Here, learning the appropriate aggregation operator is much easier."),Gp.forEach(t),Mi.forEach(t),_a=h(i),js=n(i,"P",{});var fb=r(js);La=a(fb,"To summarize:"),fb.forEach(t),Ta=h(i),Ge=n(i,"TABLE",{});var Kp=r(Ge);da=n(Kp,"THEAD",{});var gb=r(da);Yt=n(gb,"TR",{});var Si=r(Yt);pa=n(Si,"TH",{});var _b=r(pa);el=n(_b,"STRONG",{});var Tb=r(el);Sc=a(Tb,"Task"),Tb.forEach(t),_b.forEach(t),Dc=h(Si),tl=n(Si,"TH",{});var bb=r(tl);sl=n(bb,"STRONG",{});var wb=r(sl);Oc=a(wb,"Example dataset"),wb.forEach(t),bb.forEach(t),Nc=h(Si),al=n(Si,"TH",{});var vb=r(al);ol=n(vb,"STRONG",{});var yb=r(ol);Lc=a(yb,"Description"),yb.forEach(t),vb.forEach(t),Si.forEach(t),gb.forEach(t),Qc=h(Kp),Qa=n(Kp,"TBODY",{});var Di=r(Qa);Ia=n(Di,"TR",{});var Oi=r(Ia);nl=n(Oi,"TD",{});var kb=r(nl);Ic=a(kb,"Conversational"),kb.forEach(t),Wc=h(Oi),rl=n(Oi,"TD",{});var jb=r(rl);Hc=a(jb,"SQA"),jb.forEach(t),Uc=h(Oi),il=n(Oi,"TD",{});var qb=r(il);Bc=a(qb,"Conversational, only cell selection questions"),qb.forEach(t),Oi.forEach(t),Rc=h(Di),Wa=n(Di,"TR",{});var Ni=r(Wa);ll=n(Ni,"TD",{});var $b=r(ll);Gc=a($b,"Weak supervision for aggregation"),$b.forEach(t),Kc=h(Ni),dl=n(Ni,"TD",{});var Eb=r(dl);Vc=a(Eb,"WTQ"),Eb.forEach(t),Yc=h(Ni),pl=n(Ni,"TD",{});var Fb=r(pl);Jc=a(Fb,"Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Fb.forEach(t),Ni.forEach(t),Xc=h(Di),Ha=n(Di,"TR",{});var Li=r(Ha);cl=n(Li,"TD",{});var Ab=r(cl);Zc=a(Ab,"Strong supervision for aggregation"),Ab.forEach(t),eh=h(Li),hl=n(Li,"TD",{});var zb=r(hl);th=a(zb,"WikiSQL-supervised"),zb.forEach(t),sh=h(Li),ul=n(Li,"TD",{});var xb=r(ul);ah=a(xb,"Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),xb.forEach(t),Li.forEach(t),Di.forEach(t),Kp.forEach(t),op=h(i),q(bo.$$.fragment,i),np=h(i),wo=n(i,"P",{});var Vp=r(wo);oh=a(Vp,"What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),bn=n(Vp,"A",{href:!0,rel:!0});var Cb=r(bn);nh=a(Cb,"here"),Cb.forEach(t),rh=a(Vp," for more info."),Vp.forEach(t),rp=h(i),vo=n(i,"P",{});var Yp=r(vo);ih=a(Yp,"For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),wn=n(Yp,"A",{href:!0,rel:!0});var Pb=r(wn);lh=a(Pb,"here"),Pb.forEach(t),dh=a(Yp,"."),Yp.forEach(t),ip=h(i),Br=n(i,"P",{});var Mb=r(Br);ml=n(Mb,"STRONG",{});var Sb=r(ml);ph=a(Sb,"STEP 2: Prepare your data in the SQA format"),Sb.forEach(t),Mb.forEach(t),lp=h(i),yo=n(i,"P",{});var Jp=r(yo);ch=a(Jp,"Second, no matter what you picked above, you should prepare your dataset in the "),vn=n(Jp,"A",{href:!0,rel:!0});var Db=r(vn);hh=a(Db,"SQA"),Db.forEach(t),uh=a(Jp," format. This format is a TSV/CSV file with the following columns:"),Jp.forEach(t),dp=h(i),rt=n(i,"UL",{});var Tt=r(rt);Rr=n(Tt,"LI",{});var AT=r(Rr);fl=n(AT,"CODE",{});var Ob=r(fl);mh=a(Ob,"id"),Ob.forEach(t),fh=a(AT,": optional, id of the table-question pair, for bookkeeping purposes."),AT.forEach(t),gh=h(Tt),Gr=n(Tt,"LI",{});var zT=r(Gr);gl=n(zT,"CODE",{});var Nb=r(gl);_h=a(Nb,"annotator"),Nb.forEach(t),Th=a(zT,": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),zT.forEach(t),bh=h(Tt),Kr=n(Tt,"LI",{});var xT=r(Kr);_l=n(xT,"CODE",{});var Lb=r(_l);wh=a(Lb,"position"),Lb.forEach(t),vh=a(xT,": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),xT.forEach(t),yh=h(Tt),Vr=n(Tt,"LI",{});var CT=r(Vr);Tl=n(CT,"CODE",{});var Qb=r(Tl);kh=a(Qb,"question"),Qb.forEach(t),jh=a(CT,": string"),CT.forEach(t),qh=h(Tt),Yr=n(Tt,"LI",{});var PT=r(Yr);bl=n(PT,"CODE",{});var Ib=r(bl);$h=a(Ib,"table_file"),Ib.forEach(t),Eh=a(PT,": string, name of a csv file containing the tabular data"),PT.forEach(t),Fh=h(Tt),Jr=n(Tt,"LI",{});var MT=r(Jr);wl=n(MT,"CODE",{});var Wb=r(wl);Ah=a(Wb,"answer_coordinates"),Wb.forEach(t),zh=a(MT,": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),MT.forEach(t),xh=h(Tt),Xr=n(Tt,"LI",{});var ST=r(Xr);vl=n(ST,"CODE",{});var Hb=r(vl);Ch=a(Hb,"answer_text"),Hb.forEach(t),Ph=a(ST,": list of one or more strings (each string being a cell value that is part of the answer)"),ST.forEach(t),Mh=h(Tt),Zr=n(Tt,"LI",{});var DT=r(Zr);yl=n(DT,"CODE",{});var Ub=r(yl);Sh=a(Ub,"aggregation_label"),Ub.forEach(t),Dh=a(DT,": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),DT.forEach(t),Oh=h(Tt),ei=n(Tt,"LI",{});var OT=r(ei);kl=n(OT,"CODE",{});var Bb=r(kl);Nh=a(Bb,"float_answer"),Bb.forEach(t),Lh=a(OT,": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),OT.forEach(t),Tt.forEach(t),pp=h(i),zt=n(i,"P",{});var Ms=r(zt);Qh=a(Ms,"The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),yn=n(Ms,"A",{href:!0,rel:!0});var Rb=r(yn);Ih=a(Rb,"here"),Rb.forEach(t),Wh=a(Ms,". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),kn=n(Ms,"A",{href:!0,rel:!0});var Gb=r(kn);Hh=a(Gb,"here"),Gb.forEach(t),Uh=a(Ms,". Interestingly, these conversion scripts are not perfect (the "),jl=n(Ms,"CODE",{});var Kb=r(jl);Bh=a(Kb,"answer_coordinates"),Kb.forEach(t),Rh=a(Ms," and "),ql=n(Ms,"CODE",{});var Vb=r(ql);Gh=a(Vb,"float_answer"),Vb.forEach(t),Kh=a(Ms," fields are populated based on the "),$l=n(Ms,"CODE",{});var Yb=r($l);Vh=a(Yb,"answer_text"),Yb.forEach(t),Yh=a(Ms,"), meaning that WTQ and WikiSQL results could actually be improved."),Ms.forEach(t),cp=h(i),ti=n(i,"P",{});var Jb=r(ti);El=n(Jb,"STRONG",{});var Xb=r(El);Jh=a(Xb,"STEP 3: Convert your data into tensors using TapasTokenizer"),Xb.forEach(t),Jb.forEach(t),hp=h(i),q(ko.$$.fragment,i),up=h(i),Ke=n(i,"P",{});var mt=r(Ke);Xh=a(mt,"Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),Fl=n(mt,"STRONG",{});var Zb=r(Fl);Zh=a(Zb,"not conversational"),Zb.forEach(t),eu=a(mt,". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),Al=n(mt,"CODE",{});var ew=r(Al);tu=a(ew,"queries"),ew.forEach(t),su=a(mt,", "),zl=n(mt,"CODE",{});var tw=r(zl);au=a(tw,"answer_coordinates"),tw.forEach(t),ou=a(mt," and "),xl=n(mt,"CODE",{});var sw=r(xl);nu=a(sw,"answer_text"),sw.forEach(t),ru=a(mt," per table (in the order of their "),Cl=n(mt,"CODE",{});var aw=r(Cl);iu=a(aw,"position"),aw.forEach(t),lu=a(mt,`
index) and batch encode each table with its questions. This will make sure that the `),Pl=n(mt,"CODE",{});var ow=r(Pl);du=a(ow,"prev_labels"),ow.forEach(t),pu=a(mt," token types (see docs of "),si=n(mt,"A",{href:!0});var nw=r(si);cu=a(nw,"TapasTokenizer"),nw.forEach(t),hu=a(mt,") are set correctly. See "),jn=n(mt,"A",{href:!0,rel:!0});var rw=r(jn);uu=a(rw,"this notebook"),rw.forEach(t),mu=a(mt," for more info. See "),qn=n(mt,"A",{href:!0,rel:!0});var iw=r(qn);fu=a(iw,"this notebook"),iw.forEach(t),gu=a(mt," for more info regarding using the TensorFlow model."),mt.forEach(t),mp=h(i),ai=n(i,"P",{});var lw=r(ai);_u=a(lw,"**STEP 4: Train (fine-tune) the model"),lw.forEach(t),fp=h(i),q(jo.$$.fragment,i),gp=h(i),Ua=n(i,"H2",{class:!0});var Xp=r(Ua);qo=n(Xp,"A",{id:!0,class:!0,href:!0});var dw=r(qo);Ml=n(dw,"SPAN",{});var pw=r(Ml);q($n.$$.fragment,pw),pw.forEach(t),dw.forEach(t),Tu=h(Xp),Sl=n(Xp,"SPAN",{});var cw=r(Sl);bu=a(cw,"Usage: inference"),cw.forEach(t),Xp.forEach(t),_p=h(i),q($o.$$.fragment,i),Tp=h(i),xt=n(i,"P",{});var Ss=r(xt);wu=a(Ss,"In case of a conversational set-up, then each table-question pair must be provided "),Dl=n(Ss,"STRONG",{});var hw=r(Dl);vu=a(hw,"sequentially"),hw.forEach(t),yu=a(Ss," to the model, such that the "),Ol=n(Ss,"CODE",{});var uw=r(Ol);ku=a(uw,"prev_labels"),uw.forEach(t),ju=a(Ss," token types can be overwritten by the predicted "),Nl=n(Ss,"CODE",{});var mw=r(Nl);qu=a(mw,"labels"),mw.forEach(t),$u=a(Ss," of the previous table-question pair. Again, more info can be found in "),En=n(Ss,"A",{href:!0,rel:!0});var fw=r(En);Eu=a(fw,"this notebook"),fw.forEach(t),Fu=a(Ss," (for PyTorch) and "),Fn=n(Ss,"A",{href:!0,rel:!0});var gw=r(Fn);Au=a(gw,"this notebook"),gw.forEach(t),zu=a(Ss," (for TensorFlow)."),Ss.forEach(t),bp=h(i),Ba=n(i,"H2",{class:!0});var Zp=r(Ba);Eo=n(Zp,"A",{id:!0,class:!0,href:!0});var _w=r(Eo);Ll=n(_w,"SPAN",{});var Tw=r(Ll);q(An.$$.fragment,Tw),Tw.forEach(t),_w.forEach(t),xu=h(Zp),Ql=n(Zp,"SPAN",{});var bw=r(Ql);Cu=a(bw,"TAPAS specific outputs"),bw.forEach(t),Zp.forEach(t),wp=h(i),Ra=n(i,"DIV",{class:!0});var ec=r(Ra);q(zn.$$.fragment,ec),Pu=h(ec),xn=n(ec,"P",{});var tc=r(xn);Mu=a(tc,"Output type of "),oi=n(tc,"A",{href:!0});var ww=r(oi);Su=a(ww,"TapasForQuestionAnswering"),ww.forEach(t),Du=a(tc,"."),tc.forEach(t),ec.forEach(t),vp=h(i),Ga=n(i,"H2",{class:!0});var sc=r(Ga);Fo=n(sc,"A",{id:!0,class:!0,href:!0});var vw=r(Fo);Il=n(vw,"SPAN",{});var yw=r(Il);q(Cn.$$.fragment,yw),yw.forEach(t),vw.forEach(t),Ou=h(sc),Wl=n(sc,"SPAN",{});var kw=r(Wl);Nu=a(kw,"TapasConfig"),kw.forEach(t),sc.forEach(t),yp=h(i),Jt=n(i,"DIV",{class:!0});var wa=r(Jt);q(Pn.$$.fragment,wa),Lu=h(wa),Ka=n(wa,"P",{});var Qi=r(Ka);Qu=a(Qi,"This is the configuration class to store the configuration of a "),ni=n(Qi,"A",{href:!0});var jw=r(ni);Iu=a(jw,"TapasModel"),jw.forEach(t),Wu=a(Qi,`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS
`),Mn=n(Qi,"A",{href:!0,rel:!0});var qw=r(Mn);Hu=a(qw,"google/tapas-base-finetuned-sqa"),qw.forEach(t),Uu=a(Qi," architecture."),Qi.forEach(t),Bu=h(wa),Va=n(wa,"P",{});var Ii=r(Va);Ru=a(Ii,"Configuration objects inherit from "),Hl=n(Ii,"CODE",{});var $w=r(Hl);Gu=a($w,"PreTrainedConfig"),$w.forEach(t),Ku=a(Ii,` and can be used to control the model outputs. Read the
documentation from `),ri=n(Ii,"A",{href:!0});var Ew=r(ri);Vu=a(Ew,"PretrainedConfig"),Ew.forEach(t),Yu=a(Ii," for more information."),Ii.forEach(t),Ju=h(wa),Sn=n(wa,"P",{});var ac=r(Sn);Xu=a(ac,`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),Dn=n(ac,"A",{href:!0,rel:!0});var Fw=r(Dn);Zu=a(Fw,"https://github.com/google-research/tapas/tree/master"),Fw.forEach(t),em=a(ac,"."),ac.forEach(t),tm=h(wa),q(Ao.$$.fragment,wa),wa.forEach(t),kp=h(i),Ya=n(i,"H2",{class:!0});var oc=r(Ya);zo=n(oc,"A",{id:!0,class:!0,href:!0});var Aw=r(zo);Ul=n(Aw,"SPAN",{});var zw=r(Ul);q(On.$$.fragment,zw),zw.forEach(t),Aw.forEach(t),sm=h(oc),Bl=n(oc,"SPAN",{});var xw=r(Bl);am=a(xw,"TapasTokenizer"),xw.forEach(t),oc.forEach(t),jp=h(i),ct=n(i,"DIV",{class:!0});var Ct=r(ct);q(Nn.$$.fragment,Ct),om=h(Ct),Rl=n(Ct,"P",{});var Cw=r(Rl);nm=a(Cw,`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),Cw.forEach(t),rm=h(Ct),at=n(Ct,"P",{});var ft=r(at);im=a(ft,"This tokenizer inherits from "),ii=n(ft,"A",{href:!0});var Pw=r(ii);lm=a(Pw,"PreTrainedTokenizer"),Pw.forEach(t),dm=a(ft,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),li=n(ft,"A",{href:!0});var Mw=r(li);pm=a(Mw,"TapasTokenizer"),Mw.forEach(t),cm=a(ft,` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Gl=n(ft,"CODE",{});var Sw=r(Gl);hm=a(Sw,"segment_ids"),Sw.forEach(t),um=a(ft,`,
`),Kl=n(ft,"CODE",{});var Dw=r(Kl);mm=a(Dw,"column_ids"),Dw.forEach(t),fm=a(ft,", "),Vl=n(ft,"CODE",{});var Ow=r(Vl);gm=a(Ow,"row_ids"),Ow.forEach(t),_m=a(ft,", "),Yl=n(ft,"CODE",{});var Nw=r(Yl);Tm=a(Nw,"prev_labels"),Nw.forEach(t),bm=a(ft,", "),Jl=n(ft,"CODE",{});var Lw=r(Jl);wm=a(Lw,"column_ranks"),Lw.forEach(t),vm=a(ft,", "),Xl=n(ft,"CODE",{});var Qw=r(Xl);ym=a(Qw,"inv_column_ranks"),Qw.forEach(t),km=a(ft," and "),Zl=n(ft,"CODE",{});var Iw=r(Zl);jm=a(Iw,"numeric_relations"),Iw.forEach(t),qm=a(ft,":"),ft.forEach(t),$m=h(Ct),yt=n(Ct,"UL",{});var os=r(yt);ed=n(os,"LI",{});var Ww=r(ed);Em=a(Ww,`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),Ww.forEach(t),Fm=h(os),td=n(os,"LI",{});var Hw=r(td);Am=a(Hw,`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),Hw.forEach(t),zm=h(os),sd=n(os,"LI",{});var Uw=r(sd);xm=a(Uw,`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),Uw.forEach(t),Cm=h(os),ad=n(os,"LI",{});var Bw=r(ad);Pm=a(Bw,`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),Bw.forEach(t),Mm=h(os),od=n(os,"LI",{});var Rw=r(od);Sm=a(Rw,`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),Rw.forEach(t),Dm=h(os),nd=n(os,"LI",{});var Gw=r(nd);Om=a(Gw,`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),Gw.forEach(t),Nm=h(os),rd=n(os,"LI",{});var Kw=r(rd);Lm=a(Kw,`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),Kw.forEach(t),os.forEach(t),Qm=h(Ct),di=n(Ct,"P",{});var NT=r(di);pi=n(NT,"A",{href:!0});var Vw=r(pi);Im=a(Vw,"TapasTokenizer"),Vw.forEach(t),Wm=a(NT,` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),NT.forEach(t),Hm=h(Ct),xo=n(Ct,"DIV",{class:!0});var nc=r(xo);q(Ln.$$.fragment,nc),Um=h(nc),id=n(nc,"P",{});var Yw=r(id);Bm=a(Yw,"Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),Yw.forEach(t),nc.forEach(t),Rm=h(Ct),ba=n(Ct,"DIV",{class:!0});var Wi=r(ba);q(Qn.$$.fragment,Wi),Gm=h(Wi),In=n(Wi,"P",{});var rc=r(In);Km=a(rc,"Converts logits of "),ci=n(rc,"A",{href:!0});var Jw=r(ci);Vm=a(Jw,"TapasForQuestionAnswering"),Jw.forEach(t),Ym=a(rc,` to actual predicted answer coordinates and optional
aggregation indices.`),rc.forEach(t),Jm=h(Wi),Wn=n(Wi,"P",{});var ic=r(Wn);Xm=a(ic,`The original implementation, on which this function is based, can be found
`),Hn=n(ic,"A",{href:!0,rel:!0});var Xw=r(Hn);Zm=a(Xw,"here"),Xw.forEach(t),ef=a(ic,"."),ic.forEach(t),Wi.forEach(t),tf=h(Ct),hi=n(Ct,"DIV",{class:!0});var Zw=r(hi);q(Un.$$.fragment,Zw),Zw.forEach(t),Ct.forEach(t),qp=h(i),Ja=n(i,"H2",{class:!0});var lc=r(Ja);Co=n(lc,"A",{id:!0,class:!0,href:!0});var ev=r(Co);ld=n(ev,"SPAN",{});var tv=r(ld);q(Bn.$$.fragment,tv),tv.forEach(t),ev.forEach(t),sf=h(lc),dd=n(lc,"SPAN",{});var sv=r(dd);af=a(sv,"TapasModel"),sv.forEach(t),lc.forEach(t),$p=h(i),kt=n(i,"DIV",{class:!0});var Ds=r(kt);q(Rn.$$.fragment,Ds),of=h(Ds),Gn=n(Ds,"P",{});var dc=r(Gn);nf=a(dc,`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ui=n(dc,"A",{href:!0});var av=r(ui);rf=a(av,"PreTrainedModel"),av.forEach(t),lf=a(dc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dc.forEach(t),df=h(Ds),Kn=n(Ds,"P",{});var pc=r(Kn);pf=a(pc,"This model is also a PyTorch "),Vn=n(pc,"A",{href:!0,rel:!0});var ov=r(Vn);cf=a(ov,"torch.nn.Module"),ov.forEach(t),hf=a(pc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pc.forEach(t),uf=h(Ds),Yn=n(Ds,"P",{});var cc=r(Yn);mf=a(cc,"This class is a small change compared to "),mi=n(cc,"A",{href:!0});var nv=r(mi);ff=a(nv,"BertModel"),nv.forEach(t),gf=a(cc,", taking into account the additional token type ids."),cc.forEach(t),_f=h(Ds),Jn=n(Ds,"P",{});var hc=r(Jn);Tf=a(hc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),Xn=n(hc,"A",{href:!0,rel:!0});var rv=r(Xn);bf=a(rv,`Attention is
all you need`),rv.forEach(t),wf=a(hc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),hc.forEach(t),vf=h(Ds),qs=n(Ds,"DIV",{class:!0});var dn=r(qs);q(Zn.$$.fragment,dn),yf=h(dn),Xa=n(dn,"P",{});var Hi=r(Xa);kf=a(Hi,"The "),fi=n(Hi,"A",{href:!0});var iv=r(fi);jf=a(iv,"TapasModel"),iv.forEach(t),qf=a(Hi," forward method, overrides the "),pd=n(Hi,"CODE",{});var lv=r(pd);$f=a(lv,"__call__"),lv.forEach(t),Ef=a(Hi," special method."),Hi.forEach(t),Ff=h(dn),q(Po.$$.fragment,dn),Af=h(dn),q(Mo.$$.fragment,dn),dn.forEach(t),Ds.forEach(t),Ep=h(i),Za=n(i,"H2",{class:!0});var uc=r(Za);So=n(uc,"A",{id:!0,class:!0,href:!0});var dv=r(So);cd=n(dv,"SPAN",{});var pv=r(cd);q(er.$$.fragment,pv),pv.forEach(t),dv.forEach(t),zf=h(uc),hd=n(uc,"SPAN",{});var cv=r(hd);xf=a(cv,"TapasForMaskedLM"),cv.forEach(t),uc.forEach(t),Fp=h(i),Ts=n(i,"DIV",{class:!0});var pn=r(Ts);q(tr.$$.fragment,pn),Cf=h(pn),eo=n(pn,"P",{});var Ui=r(eo);Pf=a(Ui,"Tapas Model with a "),ud=n(Ui,"CODE",{});var hv=r(ud);Mf=a(hv,"language modeling"),hv.forEach(t),Sf=a(Ui,` head on top.
This model inherits from `),gi=n(Ui,"A",{href:!0});var uv=r(gi);Df=a(uv,"PreTrainedModel"),uv.forEach(t),Of=a(Ui,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ui.forEach(t),Nf=h(pn),sr=n(pn,"P",{});var mc=r(sr);Lf=a(mc,"This model is also a PyTorch "),ar=n(mc,"A",{href:!0,rel:!0});var mv=r(ar);Qf=a(mv,"torch.nn.Module"),mv.forEach(t),If=a(mc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),mc.forEach(t),Wf=h(pn),$s=n(pn,"DIV",{class:!0});var cn=r($s);q(or.$$.fragment,cn),Hf=h(cn),to=n(cn,"P",{});var Bi=r(to);Uf=a(Bi,"The "),_i=n(Bi,"A",{href:!0});var fv=r(_i);Bf=a(fv,"TapasForMaskedLM"),fv.forEach(t),Rf=a(Bi," forward method, overrides the "),md=n(Bi,"CODE",{});var gv=r(md);Gf=a(gv,"__call__"),gv.forEach(t),Kf=a(Bi," special method."),Bi.forEach(t),Vf=h(cn),q(Do.$$.fragment,cn),Yf=h(cn),q(Oo.$$.fragment,cn),cn.forEach(t),pn.forEach(t),Ap=h(i),so=n(i,"H2",{class:!0});var fc=r(so);No=n(fc,"A",{id:!0,class:!0,href:!0});var _v=r(No);fd=n(_v,"SPAN",{});var Tv=r(fd);q(nr.$$.fragment,Tv),Tv.forEach(t),_v.forEach(t),Jf=h(fc),gd=n(fc,"SPAN",{});var bv=r(gd);Xf=a(bv,"TapasForSequenceClassification"),bv.forEach(t),fc.forEach(t),zp=h(i),Xt=n(i,"DIV",{class:!0});var va=r(Xt);q(rr.$$.fragment,va),Zf=h(va),_d=n(va,"P",{});var wv=r(_d);eg=a(wv,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),wv.forEach(t),tg=h(va),ir=n(va,"P",{});var gc=r(ir);sg=a(gc,"This model inherits from "),Ti=n(gc,"A",{href:!0});var vv=r(Ti);ag=a(vv,"PreTrainedModel"),vv.forEach(t),og=a(gc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gc.forEach(t),ng=h(va),lr=n(va,"P",{});var _c=r(lr);rg=a(_c,"This model is also a PyTorch "),dr=n(_c,"A",{href:!0,rel:!0});var yv=r(dr);ig=a(yv,"torch.nn.Module"),yv.forEach(t),lg=a(_c,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_c.forEach(t),dg=h(va),Es=n(va,"DIV",{class:!0});var hn=r(Es);q(pr.$$.fragment,hn),pg=h(hn),ao=n(hn,"P",{});var Ri=r(ao);cg=a(Ri,"The "),bi=n(Ri,"A",{href:!0});var kv=r(bi);hg=a(kv,"TapasForSequenceClassification"),kv.forEach(t),ug=a(Ri," forward method, overrides the "),Td=n(Ri,"CODE",{});var jv=r(Td);mg=a(jv,"__call__"),jv.forEach(t),fg=a(Ri," special method."),Ri.forEach(t),gg=h(hn),q(Lo.$$.fragment,hn),_g=h(hn),q(Qo.$$.fragment,hn),hn.forEach(t),va.forEach(t),xp=h(i),oo=n(i,"H2",{class:!0});var Tc=r(oo);Io=n(Tc,"A",{id:!0,class:!0,href:!0});var qv=r(Io);bd=n(qv,"SPAN",{});var $v=r(bd);q(cr.$$.fragment,$v),$v.forEach(t),qv.forEach(t),Tg=h(Tc),wd=n(Tc,"SPAN",{});var Ev=r(wd);bg=a(Ev,"TapasForQuestionAnswering"),Ev.forEach(t),Tc.forEach(t),Cp=h(i),Zt=n(i,"DIV",{class:!0});var ya=r(Zt);q(hr.$$.fragment,ya),wg=h(ya),no=n(ya,"P",{});var Gi=r(no);vg=a(Gi,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),vd=n(Gi,"CODE",{});var Fv=r(vd);yg=a(Fv,"logits"),Fv.forEach(t),kg=a(Gi," and optional "),yd=n(Gi,"CODE",{});var Av=r(yd);jg=a(Av,"logits_aggregation"),Av.forEach(t),qg=a(Gi,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Gi.forEach(t),$g=h(ya),ur=n(ya,"P",{});var bc=r(ur);Eg=a(bc,"This model inherits from "),wi=n(bc,"A",{href:!0});var zv=r(wi);Fg=a(zv,"PreTrainedModel"),zv.forEach(t),Ag=a(bc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bc.forEach(t),zg=h(ya),mr=n(ya,"P",{});var wc=r(mr);xg=a(wc,"This model is also a PyTorch "),fr=n(wc,"A",{href:!0,rel:!0});var xv=r(fr);Cg=a(xv,"torch.nn.Module"),xv.forEach(t),Pg=a(wc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),wc.forEach(t),Mg=h(ya),Fs=n(ya,"DIV",{class:!0});var un=r(Fs);q(gr.$$.fragment,un),Sg=h(un),ro=n(un,"P",{});var Ki=r(ro);Dg=a(Ki,"The "),vi=n(Ki,"A",{href:!0});var Cv=r(vi);Og=a(Cv,"TapasForQuestionAnswering"),Cv.forEach(t),Ng=a(Ki," forward method, overrides the "),kd=n(Ki,"CODE",{});var Pv=r(kd);Lg=a(Pv,"__call__"),Pv.forEach(t),Qg=a(Ki," special method."),Ki.forEach(t),Ig=h(un),q(Wo.$$.fragment,un),Wg=h(un),q(Ho.$$.fragment,un),un.forEach(t),ya.forEach(t),Pp=h(i),io=n(i,"H2",{class:!0});var vc=r(io);Uo=n(vc,"A",{id:!0,class:!0,href:!0});var Mv=r(Uo);jd=n(Mv,"SPAN",{});var Sv=r(jd);q(_r.$$.fragment,Sv),Sv.forEach(t),Mv.forEach(t),Hg=h(vc),qd=n(vc,"SPAN",{});var Dv=r(qd);Ug=a(Dv,"TFTapasModel"),Dv.forEach(t),vc.forEach(t),Mp=h(i),jt=n(i,"DIV",{class:!0});var Os=r(jt);q(Tr.$$.fragment,Os),Bg=h(Os),$d=n(Os,"P",{});var Ov=r($d);Rg=a(Ov,"The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),Ov.forEach(t),Gg=h(Os),br=n(Os,"P",{});var yc=r(br);Kg=a(yc,"This model inherits from "),yi=n(yc,"A",{href:!0});var Nv=r(yi);Vg=a(Nv,"TFPreTrainedModel"),Nv.forEach(t),Yg=a(yc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yc.forEach(t),Jg=h(Os),wr=n(Os,"P",{});var kc=r(wr);Xg=a(kc,"This model is also a "),vr=n(kc,"A",{href:!0,rel:!0});var Lv=r(vr);Zg=a(Lv,"tf.keras.Model"),Lv.forEach(t),e_=a(kc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kc.forEach(t),t_=h(Os),q(Bo.$$.fragment,Os),s_=h(Os),As=n(Os,"DIV",{class:!0});var mn=r(As);q(yr.$$.fragment,mn),a_=h(mn),lo=n(mn,"P",{});var Vi=r(lo);o_=a(Vi,"The "),ki=n(Vi,"A",{href:!0});var Qv=r(ki);n_=a(Qv,"TFTapasModel"),Qv.forEach(t),r_=a(Vi," forward method, overrides the "),Ed=n(Vi,"CODE",{});var Iv=r(Ed);i_=a(Iv,"__call__"),Iv.forEach(t),l_=a(Vi," special method."),Vi.forEach(t),d_=h(mn),q(Ro.$$.fragment,mn),p_=h(mn),q(Go.$$.fragment,mn),mn.forEach(t),Os.forEach(t),Sp=h(i),po=n(i,"H2",{class:!0});var jc=r(po);Ko=n(jc,"A",{id:!0,class:!0,href:!0});var Wv=r(Ko);Fd=n(Wv,"SPAN",{});var Hv=r(Fd);q(kr.$$.fragment,Hv),Hv.forEach(t),Wv.forEach(t),c_=h(jc),Ad=n(jc,"SPAN",{});var Uv=r(Ad);h_=a(Uv,"TFTapasForMaskedLM"),Uv.forEach(t),jc.forEach(t),Dp=h(i),qt=n(i,"DIV",{class:!0});var Ns=r(qt);q(jr.$$.fragment,Ns),u_=h(Ns),qr=n(Ns,"P",{});var qc=r(qr);m_=a(qc,"Tapas Model with a "),zd=n(qc,"CODE",{});var Bv=r(zd);f_=a(Bv,"language modeling"),Bv.forEach(t),g_=a(qc," head on top."),qc.forEach(t),__=h(Ns),$r=n(Ns,"P",{});var $c=r($r);T_=a($c,"This model inherits from "),ji=n($c,"A",{href:!0});var Rv=r(ji);b_=a(Rv,"TFPreTrainedModel"),Rv.forEach(t),w_=a($c,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$c.forEach(t),v_=h(Ns),Er=n(Ns,"P",{});var Ec=r(Er);y_=a(Ec,"This model is also a "),Fr=n(Ec,"A",{href:!0,rel:!0});var Gv=r(Fr);k_=a(Gv,"tf.keras.Model"),Gv.forEach(t),j_=a(Ec,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ec.forEach(t),q_=h(Ns),q(Vo.$$.fragment,Ns),$_=h(Ns),zs=n(Ns,"DIV",{class:!0});var fn=r(zs);q(Ar.$$.fragment,fn),E_=h(fn),co=n(fn,"P",{});var Yi=r(co);F_=a(Yi,"The "),qi=n(Yi,"A",{href:!0});var Kv=r(qi);A_=a(Kv,"TFTapasForMaskedLM"),Kv.forEach(t),z_=a(Yi," forward method, overrides the "),xd=n(Yi,"CODE",{});var Vv=r(xd);x_=a(Vv,"__call__"),Vv.forEach(t),C_=a(Yi," special method."),Yi.forEach(t),P_=h(fn),q(Yo.$$.fragment,fn),M_=h(fn),q(Jo.$$.fragment,fn),fn.forEach(t),Ns.forEach(t),Op=h(i),ho=n(i,"H2",{class:!0});var Fc=r(ho);Xo=n(Fc,"A",{id:!0,class:!0,href:!0});var Yv=r(Xo);Cd=n(Yv,"SPAN",{});var Jv=r(Cd);q(zr.$$.fragment,Jv),Jv.forEach(t),Yv.forEach(t),S_=h(Fc),Pd=n(Fc,"SPAN",{});var Xv=r(Pd);D_=a(Xv,"TFTapasForSequenceClassification"),Xv.forEach(t),Fc.forEach(t),Np=h(i),$t=n(i,"DIV",{class:!0});var Ls=r($t);q(xr.$$.fragment,Ls),O_=h(Ls),Md=n(Ls,"P",{});var Zv=r(Md);N_=a(Zv,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Zv.forEach(t),L_=h(Ls),Cr=n(Ls,"P",{});var Ac=r(Cr);Q_=a(Ac,"This model inherits from "),$i=n(Ac,"A",{href:!0});var ey=r($i);I_=a(ey,"TFPreTrainedModel"),ey.forEach(t),W_=a(Ac,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ac.forEach(t),H_=h(Ls),Pr=n(Ls,"P",{});var zc=r(Pr);U_=a(zc,"This model is also a "),Mr=n(zc,"A",{href:!0,rel:!0});var ty=r(Mr);B_=a(ty,"tf.keras.Model"),ty.forEach(t),R_=a(zc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zc.forEach(t),G_=h(Ls),q(Zo.$$.fragment,Ls),K_=h(Ls),xs=n(Ls,"DIV",{class:!0});var gn=r(xs);q(Sr.$$.fragment,gn),V_=h(gn),uo=n(gn,"P",{});var Ji=r(uo);Y_=a(Ji,"The "),Ei=n(Ji,"A",{href:!0});var sy=r(Ei);J_=a(sy,"TFTapasForSequenceClassification"),sy.forEach(t),X_=a(Ji," forward method, overrides the "),Sd=n(Ji,"CODE",{});var ay=r(Sd);Z_=a(ay,"__call__"),ay.forEach(t),eT=a(Ji," special method."),Ji.forEach(t),tT=h(gn),q(en.$$.fragment,gn),sT=h(gn),q(tn.$$.fragment,gn),gn.forEach(t),Ls.forEach(t),Lp=h(i),mo=n(i,"H2",{class:!0});var xc=r(mo);sn=n(xc,"A",{id:!0,class:!0,href:!0});var oy=r(sn);Dd=n(oy,"SPAN",{});var ny=r(Dd);q(Dr.$$.fragment,ny),ny.forEach(t),oy.forEach(t),aT=h(xc),Od=n(xc,"SPAN",{});var ry=r(Od);oT=a(ry,"TFTapasForQuestionAnswering"),ry.forEach(t),xc.forEach(t),Qp=h(i),Et=n(i,"DIV",{class:!0});var Qs=r(Et);q(Or.$$.fragment,Qs),nT=h(Qs),fo=n(Qs,"P",{});var Xi=r(fo);rT=a(Xi,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Nd=n(Xi,"CODE",{});var iy=r(Nd);iT=a(iy,"logits"),iy.forEach(t),lT=a(Xi," and optional "),Ld=n(Xi,"CODE",{});var ly=r(Ld);dT=a(ly,"logits_aggregation"),ly.forEach(t),pT=a(Xi,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Xi.forEach(t),cT=h(Qs),Nr=n(Qs,"P",{});var Cc=r(Nr);hT=a(Cc,"This model inherits from "),Fi=n(Cc,"A",{href:!0});var dy=r(Fi);uT=a(dy,"TFPreTrainedModel"),dy.forEach(t),mT=a(Cc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cc.forEach(t),fT=h(Qs),Lr=n(Qs,"P",{});var Pc=r(Lr);gT=a(Pc,"This model is also a "),Qr=n(Pc,"A",{href:!0,rel:!0});var py=r(Qr);_T=a(py,"tf.keras.Model"),py.forEach(t),TT=a(Pc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Pc.forEach(t),bT=h(Qs),q(an.$$.fragment,Qs),wT=h(Qs),Cs=n(Qs,"DIV",{class:!0});var _n=r(Cs);q(Ir.$$.fragment,_n),vT=h(_n),go=n(_n,"P",{});var Zi=r(go);yT=a(Zi,"The "),Ai=n(Zi,"A",{href:!0});var cy=r(Ai);kT=a(cy,"TFTapasForQuestionAnswering"),cy.forEach(t),jT=a(Zi," forward method, overrides the "),Qd=n(Zi,"CODE",{});var hy=r(Qd);qT=a(hy,"__call__"),hy.forEach(t),$T=a(Zi," special method."),Zi.forEach(t),ET=h(_n),q(on.$$.fragment,_n),FT=h(_n),q(nn.$$.fragment,_n),_n.forEach(t),Qs.forEach(t),this.h()},h(){m(l,"name","hf:doc:metadata"),m(l,"content",JSON.stringify(ak)),m(g,"id","tapas"),m(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(g,"href","#tapas"),m(d,"class","relative group"),m(G,"id","overview"),m(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(G,"href","#overview"),m(O,"class","relative group"),m(C,"href","https://www.aclweb.org/anthology/2020.acl-main.398"),m(C,"rel","nofollow"),m(D,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),m(D,"rel","nofollow"),m(H,"href","https://github.com/ppasupat/WikiTableQuestions"),m(H,"rel","nofollow"),m(Ae,"href","https://github.com/salesforce/WikiSQL"),m(Ae,"rel","nofollow"),m(w,"href","https://github.com/wenhuchen/Table-Fact-Checking"),m(w,"rel","nofollow"),m(be,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.27/"),m(be,"rel","nofollow"),_y(Le.src,ot="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/tapas_architecture.png")||m(Le,"src",ot),m(Le,"alt","drawing"),m(Le,"width","600"),m(le,"href","https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html"),m(Be,"href","https://huggingface.co/nielsr"),m(Be,"rel","nofollow"),m(Fe,"href","https://huggingface.co/kamalkraj"),m(Fe,"rel","nofollow"),m(Mt,"href","https://github.com/google-research/tapas"),m(Mt,"rel","nofollow"),m(ss,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasConfig"),m(Qt,"href","https://huggingface.co/models?search=tapas"),m(Qt,"rel","nofollow"),m(Rt,"href","https://github.com/google-research/tapas%3E"),m(Rt,"rel","nofollow"),m(_t,"id","usage-finetuning"),m(_t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(_t,"href","#usage-finetuning"),m(Vt,"class","relative group"),m(vs,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),m(ks,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),m(bn,"href","https://github.com/google-research/tapas/issues/91#issuecomment-735719340"),m(bn,"rel","nofollow"),m(wn,"href","https://huggingface.co/models?search=tapas"),m(wn,"rel","nofollow"),m(vn,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),m(vn,"rel","nofollow"),m(yn,"href","https://github.com/google-research/tapas/issues/50#issuecomment-705465960"),m(yn,"rel","nofollow"),m(kn,"href","https://github.com/NielsRogge/tapas_utils"),m(kn,"rel","nofollow"),m(si,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),m(jn,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),m(jn,"rel","nofollow"),m(qn,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),m(qn,"rel","nofollow"),m(qo,"id","usage-inference"),m(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(qo,"href","#usage-inference"),m(Ua,"class","relative group"),m(En,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),m(En,"rel","nofollow"),m(Fn,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),m(Fn,"rel","nofollow"),m(Eo,"id","transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),m(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Eo,"href","#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),m(Ba,"class","relative group"),m(oi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),m(Ra,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Fo,"id","transformers.TapasConfig"),m(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Fo,"href","#transformers.TapasConfig"),m(Ga,"class","relative group"),m(ni,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasModel"),m(Mn,"href","https://huggingface.co/google/tapas-base-finetuned-sqa"),m(Mn,"rel","nofollow"),m(ri,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),m(Dn,"href","https://github.com/google-research/tapas/tree/master"),m(Dn,"rel","nofollow"),m(Jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(zo,"id","transformers.TapasTokenizer"),m(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(zo,"href","#transformers.TapasTokenizer"),m(Ya,"class","relative group"),m(ii,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),m(li,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),m(pi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasTokenizer"),m(xo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ci,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),m(Hn,"href","https://github.com/google-research/tapas/blob/4908213eb4df7aa988573350278b44c4dbe3f71b/tapas/experiments/prediction_utils.py#L288"),m(Hn,"rel","nofollow"),m(ba,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(hi,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(ct,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Co,"id","transformers.TapasModel"),m(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Co,"href","#transformers.TapasModel"),m(Ja,"class","relative group"),m(ui,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(Vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(Vn,"rel","nofollow"),m(mi,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertModel"),m(Xn,"href","https://arxiv.org/abs/1706.03762"),m(Xn,"rel","nofollow"),m(fi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasModel"),m(qs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(So,"id","transformers.TapasForMaskedLM"),m(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(So,"href","#transformers.TapasForMaskedLM"),m(Za,"class","relative group"),m(gi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(ar,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(ar,"rel","nofollow"),m(_i,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForMaskedLM"),m($s,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ts,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(No,"id","transformers.TapasForSequenceClassification"),m(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(No,"href","#transformers.TapasForSequenceClassification"),m(so,"class","relative group"),m(Ti,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(dr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(dr,"rel","nofollow"),m(bi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForSequenceClassification"),m(Es,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Io,"id","transformers.TapasForQuestionAnswering"),m(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Io,"href","#transformers.TapasForQuestionAnswering"),m(oo,"class","relative group"),m(wi,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),m(fr,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),m(fr,"rel","nofollow"),m(vi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),m(Fs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Zt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Uo,"id","transformers.TFTapasModel"),m(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Uo,"href","#transformers.TFTapasModel"),m(io,"class","relative group"),m(yi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(vr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(vr,"rel","nofollow"),m(ki,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasModel"),m(As,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(jt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Ko,"id","transformers.TFTapasForMaskedLM"),m(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Ko,"href","#transformers.TFTapasForMaskedLM"),m(po,"class","relative group"),m(ji,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Fr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Fr,"rel","nofollow"),m(qi,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForMaskedLM"),m(zs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(qt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Xo,"id","transformers.TFTapasForSequenceClassification"),m(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Xo,"href","#transformers.TFTapasForSequenceClassification"),m(ho,"class","relative group"),m($i,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Mr,"rel","nofollow"),m(Ei,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForSequenceClassification"),m(xs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m($t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(sn,"id","transformers.TFTapasForQuestionAnswering"),m(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(sn,"href","#transformers.TFTapasForQuestionAnswering"),m(mo,"class","relative group"),m(Fi,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),m(Qr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),m(Qr,"rel","nofollow"),m(Ai,"href","/docs/transformers/main/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),m(Cs,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),m(Et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(i,_){e(document.head,l),u(i,T,_),u(i,d,_),e(d,g),e(g,b),$(p,b,null),e(d,f),e(d,z),e(z,k),u(i,W,_),u(i,O,_),e(O,G),e(G,ae),$(v,ae,null),e(O,J),e(O,Z),e(Z,de),u(i,U,_),u(i,N,_),e(N,y),e(N,C),e(C,B),e(N,ee),u(i,pe,_),u(i,R,_),e(R,ge),u(i,he,_),u(i,X,_),e(X,_e),e(_e,D),e(D,L),e(_e,I),e(X,M),e(X,K),e(K,H),e(H,ve),e(K,ze),e(X,ue),e(X,fe),e(fe,Ae),e(Ae,se),e(fe,ke),u(i,Te,_),u(i,Pe,_),e(Pe,Ce),u(i,je,_),u(i,Me,_),e(Me,$e),u(i,ce,_),u(i,Se,_),e(Se,ye),e(ye,Y),u(i,qe,_),u(i,V,_),e(V,We),e(V,oe),e(oe,He),e(V,Ue),e(V,w),e(w,S),e(V,Ve),e(V,be),e(be,Ye),e(V,Je),u(i,Q,_),u(i,Le,_),u(i,Qe,_),u(i,Ie,_),e(Ie,Xe),e(Ie,le),e(le,Ee),e(Ie,Ze),u(i,xe,_),u(i,ne,_),e(ne,et),e(ne,Be),e(Be,re),e(ne,Re),e(ne,Fe),e(Fe,tt),e(ne,Pt),e(ne,Mt),e(Mt,Ws),e(ne,St),u(i,bs,_),u(i,ts,_),e(ts,Dt),u(i,ws,_),u(i,ut,_),e(ut,De),e(De,Hs),e(De,Ot),e(Ot,ie),e(De,bt),e(De,ss),e(ss,Us),e(De,Nt),e(De,ns),e(ns,Bs),e(De,Lt),e(De,Qt),e(Qt,Rs),e(De,It),e(De,rs),e(rs,Gs),e(De,Wt),e(De,is),e(is,Ks),e(De,Ht),e(ut,Vs),e(ut,st),e(st,Ut),e(st,ls),e(ls,Ys),e(st,Bt),e(st,ds),e(ds,Js),e(st,ps),e(st,lt),e(lt,cs),e(st,Oe),e(st,hs),e(hs,wt),e(st,Xs),e(st,Rt),e(Rt,Gt),e(st,Zs),e(ut,ea),e(ut,dt),e(dt,ta),e(dt,us),e(us,ms),e(dt,gt),e(dt,Kt),e(Kt,x),e(dt,te),e(ut,ka),e(ut,sa),e(sa,ja),u(i,ha,_),u(i,Vt,_),e(Vt,_t),e(_t,aa),$(vt,aa,null),e(Vt,qa),e(Vt,oa),e(oa,$a),u(i,ua,_),u(i,nt,_),e(nt,fs),e(nt,vs),e(vs,pt),e(nt,Ea),u(i,ma,_),u(i,ys,_),e(ys,na),e(na,gs),u(i,fa,_),u(i,we,_),e(we,Fa),e(we,ks),e(ks,Aa),e(we,za),u(i,ga,_),u(i,At,_),e(At,ra),e(ra,_s),e(At,xa),e(At,Ne),e(Ne,Ca),e(Ne,ia),e(ia,Pa),e(Ne,Ma),e(At,Sa),e(At,me),e(me,Da),e(me,la),e(la,Oa),e(me,Na),u(i,_a,_),u(i,js,_),e(js,La),u(i,Ta,_),u(i,Ge,_),e(Ge,da),e(da,Yt),e(Yt,pa),e(pa,el),e(el,Sc),e(Yt,Dc),e(Yt,tl),e(tl,sl),e(sl,Oc),e(Yt,Nc),e(Yt,al),e(al,ol),e(ol,Lc),e(Ge,Qc),e(Ge,Qa),e(Qa,Ia),e(Ia,nl),e(nl,Ic),e(Ia,Wc),e(Ia,rl),e(rl,Hc),e(Ia,Uc),e(Ia,il),e(il,Bc),e(Qa,Rc),e(Qa,Wa),e(Wa,ll),e(ll,Gc),e(Wa,Kc),e(Wa,dl),e(dl,Vc),e(Wa,Yc),e(Wa,pl),e(pl,Jc),e(Qa,Xc),e(Qa,Ha),e(Ha,cl),e(cl,Zc),e(Ha,eh),e(Ha,hl),e(hl,th),e(Ha,sh),e(Ha,ul),e(ul,ah),u(i,op,_),$(bo,i,_),u(i,np,_),u(i,wo,_),e(wo,oh),e(wo,bn),e(bn,nh),e(wo,rh),u(i,rp,_),u(i,vo,_),e(vo,ih),e(vo,wn),e(wn,lh),e(vo,dh),u(i,ip,_),u(i,Br,_),e(Br,ml),e(ml,ph),u(i,lp,_),u(i,yo,_),e(yo,ch),e(yo,vn),e(vn,hh),e(yo,uh),u(i,dp,_),u(i,rt,_),e(rt,Rr),e(Rr,fl),e(fl,mh),e(Rr,fh),e(rt,gh),e(rt,Gr),e(Gr,gl),e(gl,_h),e(Gr,Th),e(rt,bh),e(rt,Kr),e(Kr,_l),e(_l,wh),e(Kr,vh),e(rt,yh),e(rt,Vr),e(Vr,Tl),e(Tl,kh),e(Vr,jh),e(rt,qh),e(rt,Yr),e(Yr,bl),e(bl,$h),e(Yr,Eh),e(rt,Fh),e(rt,Jr),e(Jr,wl),e(wl,Ah),e(Jr,zh),e(rt,xh),e(rt,Xr),e(Xr,vl),e(vl,Ch),e(Xr,Ph),e(rt,Mh),e(rt,Zr),e(Zr,yl),e(yl,Sh),e(Zr,Dh),e(rt,Oh),e(rt,ei),e(ei,kl),e(kl,Nh),e(ei,Lh),u(i,pp,_),u(i,zt,_),e(zt,Qh),e(zt,yn),e(yn,Ih),e(zt,Wh),e(zt,kn),e(kn,Hh),e(zt,Uh),e(zt,jl),e(jl,Bh),e(zt,Rh),e(zt,ql),e(ql,Gh),e(zt,Kh),e(zt,$l),e($l,Vh),e(zt,Yh),u(i,cp,_),u(i,ti,_),e(ti,El),e(El,Jh),u(i,hp,_),$(ko,i,_),u(i,up,_),u(i,Ke,_),e(Ke,Xh),e(Ke,Fl),e(Fl,Zh),e(Ke,eu),e(Ke,Al),e(Al,tu),e(Ke,su),e(Ke,zl),e(zl,au),e(Ke,ou),e(Ke,xl),e(xl,nu),e(Ke,ru),e(Ke,Cl),e(Cl,iu),e(Ke,lu),e(Ke,Pl),e(Pl,du),e(Ke,pu),e(Ke,si),e(si,cu),e(Ke,hu),e(Ke,jn),e(jn,uu),e(Ke,mu),e(Ke,qn),e(qn,fu),e(Ke,gu),u(i,mp,_),u(i,ai,_),e(ai,_u),u(i,fp,_),$(jo,i,_),u(i,gp,_),u(i,Ua,_),e(Ua,qo),e(qo,Ml),$($n,Ml,null),e(Ua,Tu),e(Ua,Sl),e(Sl,bu),u(i,_p,_),$($o,i,_),u(i,Tp,_),u(i,xt,_),e(xt,wu),e(xt,Dl),e(Dl,vu),e(xt,yu),e(xt,Ol),e(Ol,ku),e(xt,ju),e(xt,Nl),e(Nl,qu),e(xt,$u),e(xt,En),e(En,Eu),e(xt,Fu),e(xt,Fn),e(Fn,Au),e(xt,zu),u(i,bp,_),u(i,Ba,_),e(Ba,Eo),e(Eo,Ll),$(An,Ll,null),e(Ba,xu),e(Ba,Ql),e(Ql,Cu),u(i,wp,_),u(i,Ra,_),$(zn,Ra,null),e(Ra,Pu),e(Ra,xn),e(xn,Mu),e(xn,oi),e(oi,Su),e(xn,Du),u(i,vp,_),u(i,Ga,_),e(Ga,Fo),e(Fo,Il),$(Cn,Il,null),e(Ga,Ou),e(Ga,Wl),e(Wl,Nu),u(i,yp,_),u(i,Jt,_),$(Pn,Jt,null),e(Jt,Lu),e(Jt,Ka),e(Ka,Qu),e(Ka,ni),e(ni,Iu),e(Ka,Wu),e(Ka,Mn),e(Mn,Hu),e(Ka,Uu),e(Jt,Bu),e(Jt,Va),e(Va,Ru),e(Va,Hl),e(Hl,Gu),e(Va,Ku),e(Va,ri),e(ri,Vu),e(Va,Yu),e(Jt,Ju),e(Jt,Sn),e(Sn,Xu),e(Sn,Dn),e(Dn,Zu),e(Sn,em),e(Jt,tm),$(Ao,Jt,null),u(i,kp,_),u(i,Ya,_),e(Ya,zo),e(zo,Ul),$(On,Ul,null),e(Ya,sm),e(Ya,Bl),e(Bl,am),u(i,jp,_),u(i,ct,_),$(Nn,ct,null),e(ct,om),e(ct,Rl),e(Rl,nm),e(ct,rm),e(ct,at),e(at,im),e(at,ii),e(ii,lm),e(at,dm),e(at,li),e(li,pm),e(at,cm),e(at,Gl),e(Gl,hm),e(at,um),e(at,Kl),e(Kl,mm),e(at,fm),e(at,Vl),e(Vl,gm),e(at,_m),e(at,Yl),e(Yl,Tm),e(at,bm),e(at,Jl),e(Jl,wm),e(at,vm),e(at,Xl),e(Xl,ym),e(at,km),e(at,Zl),e(Zl,jm),e(at,qm),e(ct,$m),e(ct,yt),e(yt,ed),e(ed,Em),e(yt,Fm),e(yt,td),e(td,Am),e(yt,zm),e(yt,sd),e(sd,xm),e(yt,Cm),e(yt,ad),e(ad,Pm),e(yt,Mm),e(yt,od),e(od,Sm),e(yt,Dm),e(yt,nd),e(nd,Om),e(yt,Nm),e(yt,rd),e(rd,Lm),e(ct,Qm),e(ct,di),e(di,pi),e(pi,Im),e(di,Wm),e(ct,Hm),e(ct,xo),$(Ln,xo,null),e(xo,Um),e(xo,id),e(id,Bm),e(ct,Rm),e(ct,ba),$(Qn,ba,null),e(ba,Gm),e(ba,In),e(In,Km),e(In,ci),e(ci,Vm),e(In,Ym),e(ba,Jm),e(ba,Wn),e(Wn,Xm),e(Wn,Hn),e(Hn,Zm),e(Wn,ef),e(ct,tf),e(ct,hi),$(Un,hi,null),u(i,qp,_),u(i,Ja,_),e(Ja,Co),e(Co,ld),$(Bn,ld,null),e(Ja,sf),e(Ja,dd),e(dd,af),u(i,$p,_),u(i,kt,_),$(Rn,kt,null),e(kt,of),e(kt,Gn),e(Gn,nf),e(Gn,ui),e(ui,rf),e(Gn,lf),e(kt,df),e(kt,Kn),e(Kn,pf),e(Kn,Vn),e(Vn,cf),e(Kn,hf),e(kt,uf),e(kt,Yn),e(Yn,mf),e(Yn,mi),e(mi,ff),e(Yn,gf),e(kt,_f),e(kt,Jn),e(Jn,Tf),e(Jn,Xn),e(Xn,bf),e(Jn,wf),e(kt,vf),e(kt,qs),$(Zn,qs,null),e(qs,yf),e(qs,Xa),e(Xa,kf),e(Xa,fi),e(fi,jf),e(Xa,qf),e(Xa,pd),e(pd,$f),e(Xa,Ef),e(qs,Ff),$(Po,qs,null),e(qs,Af),$(Mo,qs,null),u(i,Ep,_),u(i,Za,_),e(Za,So),e(So,cd),$(er,cd,null),e(Za,zf),e(Za,hd),e(hd,xf),u(i,Fp,_),u(i,Ts,_),$(tr,Ts,null),e(Ts,Cf),e(Ts,eo),e(eo,Pf),e(eo,ud),e(ud,Mf),e(eo,Sf),e(eo,gi),e(gi,Df),e(eo,Of),e(Ts,Nf),e(Ts,sr),e(sr,Lf),e(sr,ar),e(ar,Qf),e(sr,If),e(Ts,Wf),e(Ts,$s),$(or,$s,null),e($s,Hf),e($s,to),e(to,Uf),e(to,_i),e(_i,Bf),e(to,Rf),e(to,md),e(md,Gf),e(to,Kf),e($s,Vf),$(Do,$s,null),e($s,Yf),$(Oo,$s,null),u(i,Ap,_),u(i,so,_),e(so,No),e(No,fd),$(nr,fd,null),e(so,Jf),e(so,gd),e(gd,Xf),u(i,zp,_),u(i,Xt,_),$(rr,Xt,null),e(Xt,Zf),e(Xt,_d),e(_d,eg),e(Xt,tg),e(Xt,ir),e(ir,sg),e(ir,Ti),e(Ti,ag),e(ir,og),e(Xt,ng),e(Xt,lr),e(lr,rg),e(lr,dr),e(dr,ig),e(lr,lg),e(Xt,dg),e(Xt,Es),$(pr,Es,null),e(Es,pg),e(Es,ao),e(ao,cg),e(ao,bi),e(bi,hg),e(ao,ug),e(ao,Td),e(Td,mg),e(ao,fg),e(Es,gg),$(Lo,Es,null),e(Es,_g),$(Qo,Es,null),u(i,xp,_),u(i,oo,_),e(oo,Io),e(Io,bd),$(cr,bd,null),e(oo,Tg),e(oo,wd),e(wd,bg),u(i,Cp,_),u(i,Zt,_),$(hr,Zt,null),e(Zt,wg),e(Zt,no),e(no,vg),e(no,vd),e(vd,yg),e(no,kg),e(no,yd),e(yd,jg),e(no,qg),e(Zt,$g),e(Zt,ur),e(ur,Eg),e(ur,wi),e(wi,Fg),e(ur,Ag),e(Zt,zg),e(Zt,mr),e(mr,xg),e(mr,fr),e(fr,Cg),e(mr,Pg),e(Zt,Mg),e(Zt,Fs),$(gr,Fs,null),e(Fs,Sg),e(Fs,ro),e(ro,Dg),e(ro,vi),e(vi,Og),e(ro,Ng),e(ro,kd),e(kd,Lg),e(ro,Qg),e(Fs,Ig),$(Wo,Fs,null),e(Fs,Wg),$(Ho,Fs,null),u(i,Pp,_),u(i,io,_),e(io,Uo),e(Uo,jd),$(_r,jd,null),e(io,Hg),e(io,qd),e(qd,Ug),u(i,Mp,_),u(i,jt,_),$(Tr,jt,null),e(jt,Bg),e(jt,$d),e($d,Rg),e(jt,Gg),e(jt,br),e(br,Kg),e(br,yi),e(yi,Vg),e(br,Yg),e(jt,Jg),e(jt,wr),e(wr,Xg),e(wr,vr),e(vr,Zg),e(wr,e_),e(jt,t_),$(Bo,jt,null),e(jt,s_),e(jt,As),$(yr,As,null),e(As,a_),e(As,lo),e(lo,o_),e(lo,ki),e(ki,n_),e(lo,r_),e(lo,Ed),e(Ed,i_),e(lo,l_),e(As,d_),$(Ro,As,null),e(As,p_),$(Go,As,null),u(i,Sp,_),u(i,po,_),e(po,Ko),e(Ko,Fd),$(kr,Fd,null),e(po,c_),e(po,Ad),e(Ad,h_),u(i,Dp,_),u(i,qt,_),$(jr,qt,null),e(qt,u_),e(qt,qr),e(qr,m_),e(qr,zd),e(zd,f_),e(qr,g_),e(qt,__),e(qt,$r),e($r,T_),e($r,ji),e(ji,b_),e($r,w_),e(qt,v_),e(qt,Er),e(Er,y_),e(Er,Fr),e(Fr,k_),e(Er,j_),e(qt,q_),$(Vo,qt,null),e(qt,$_),e(qt,zs),$(Ar,zs,null),e(zs,E_),e(zs,co),e(co,F_),e(co,qi),e(qi,A_),e(co,z_),e(co,xd),e(xd,x_),e(co,C_),e(zs,P_),$(Yo,zs,null),e(zs,M_),$(Jo,zs,null),u(i,Op,_),u(i,ho,_),e(ho,Xo),e(Xo,Cd),$(zr,Cd,null),e(ho,S_),e(ho,Pd),e(Pd,D_),u(i,Np,_),u(i,$t,_),$(xr,$t,null),e($t,O_),e($t,Md),e(Md,N_),e($t,L_),e($t,Cr),e(Cr,Q_),e(Cr,$i),e($i,I_),e(Cr,W_),e($t,H_),e($t,Pr),e(Pr,U_),e(Pr,Mr),e(Mr,B_),e(Pr,R_),e($t,G_),$(Zo,$t,null),e($t,K_),e($t,xs),$(Sr,xs,null),e(xs,V_),e(xs,uo),e(uo,Y_),e(uo,Ei),e(Ei,J_),e(uo,X_),e(uo,Sd),e(Sd,Z_),e(uo,eT),e(xs,tT),$(en,xs,null),e(xs,sT),$(tn,xs,null),u(i,Lp,_),u(i,mo,_),e(mo,sn),e(sn,Dd),$(Dr,Dd,null),e(mo,aT),e(mo,Od),e(Od,oT),u(i,Qp,_),u(i,Et,_),$(Or,Et,null),e(Et,nT),e(Et,fo),e(fo,rT),e(fo,Nd),e(Nd,iT),e(fo,lT),e(fo,Ld),e(Ld,dT),e(fo,pT),e(Et,cT),e(Et,Nr),e(Nr,hT),e(Nr,Fi),e(Fi,uT),e(Nr,mT),e(Et,fT),e(Et,Lr),e(Lr,gT),e(Lr,Qr),e(Qr,_T),e(Lr,TT),e(Et,bT),$(an,Et,null),e(Et,wT),e(Et,Cs),$(Ir,Cs,null),e(Cs,vT),e(Cs,go),e(go,yT),e(go,Ai),e(Ai,kT),e(go,jT),e(go,Qd),e(Qd,qT),e(go,$T),e(Cs,ET),$(on,Cs,null),e(Cs,FT),$(nn,Cs,null),Ip=!0},p(i,[_]){const Wr={};_&2&&(Wr.$$scope={dirty:_,ctx:i}),bo.$set(Wr);const Id={};_&2&&(Id.$$scope={dirty:_,ctx:i}),ko.$set(Id);const Wd={};_&2&&(Wd.$$scope={dirty:_,ctx:i}),jo.$set(Wd);const Hd={};_&2&&(Hd.$$scope={dirty:_,ctx:i}),$o.$set(Hd);const Hr={};_&2&&(Hr.$$scope={dirty:_,ctx:i}),Ao.$set(Hr);const Ud={};_&2&&(Ud.$$scope={dirty:_,ctx:i}),Po.$set(Ud);const Bd={};_&2&&(Bd.$$scope={dirty:_,ctx:i}),Mo.$set(Bd);const Rd={};_&2&&(Rd.$$scope={dirty:_,ctx:i}),Do.$set(Rd);const Ur={};_&2&&(Ur.$$scope={dirty:_,ctx:i}),Oo.$set(Ur);const Gd={};_&2&&(Gd.$$scope={dirty:_,ctx:i}),Lo.$set(Gd);const Kd={};_&2&&(Kd.$$scope={dirty:_,ctx:i}),Qo.$set(Kd);const _o={};_&2&&(_o.$$scope={dirty:_,ctx:i}),Wo.$set(_o);const zi={};_&2&&(zi.$$scope={dirty:_,ctx:i}),Ho.$set(zi);const Vd={};_&2&&(Vd.$$scope={dirty:_,ctx:i}),Bo.$set(Vd);const xi={};_&2&&(xi.$$scope={dirty:_,ctx:i}),Ro.$set(xi);const Yd={};_&2&&(Yd.$$scope={dirty:_,ctx:i}),Go.$set(Yd);const Ci={};_&2&&(Ci.$$scope={dirty:_,ctx:i}),Vo.$set(Ci);const Jd={};_&2&&(Jd.$$scope={dirty:_,ctx:i}),Yo.$set(Jd);const Xd={};_&2&&(Xd.$$scope={dirty:_,ctx:i}),Jo.$set(Xd);const Zd={};_&2&&(Zd.$$scope={dirty:_,ctx:i}),Zo.$set(Zd);const ep={};_&2&&(ep.$$scope={dirty:_,ctx:i}),en.$set(ep);const tp={};_&2&&(tp.$$scope={dirty:_,ctx:i}),tn.$set(tp);const ca={};_&2&&(ca.$$scope={dirty:_,ctx:i}),an.$set(ca);const sp={};_&2&&(sp.$$scope={dirty:_,ctx:i}),on.$set(sp);const ap={};_&2&&(ap.$$scope={dirty:_,ctx:i}),nn.$set(ap)},i(i){Ip||(E(p.$$.fragment,i),E(v.$$.fragment,i),E(vt.$$.fragment,i),E(bo.$$.fragment,i),E(ko.$$.fragment,i),E(jo.$$.fragment,i),E($n.$$.fragment,i),E($o.$$.fragment,i),E(An.$$.fragment,i),E(zn.$$.fragment,i),E(Cn.$$.fragment,i),E(Pn.$$.fragment,i),E(Ao.$$.fragment,i),E(On.$$.fragment,i),E(Nn.$$.fragment,i),E(Ln.$$.fragment,i),E(Qn.$$.fragment,i),E(Un.$$.fragment,i),E(Bn.$$.fragment,i),E(Rn.$$.fragment,i),E(Zn.$$.fragment,i),E(Po.$$.fragment,i),E(Mo.$$.fragment,i),E(er.$$.fragment,i),E(tr.$$.fragment,i),E(or.$$.fragment,i),E(Do.$$.fragment,i),E(Oo.$$.fragment,i),E(nr.$$.fragment,i),E(rr.$$.fragment,i),E(pr.$$.fragment,i),E(Lo.$$.fragment,i),E(Qo.$$.fragment,i),E(cr.$$.fragment,i),E(hr.$$.fragment,i),E(gr.$$.fragment,i),E(Wo.$$.fragment,i),E(Ho.$$.fragment,i),E(_r.$$.fragment,i),E(Tr.$$.fragment,i),E(Bo.$$.fragment,i),E(yr.$$.fragment,i),E(Ro.$$.fragment,i),E(Go.$$.fragment,i),E(kr.$$.fragment,i),E(jr.$$.fragment,i),E(Vo.$$.fragment,i),E(Ar.$$.fragment,i),E(Yo.$$.fragment,i),E(Jo.$$.fragment,i),E(zr.$$.fragment,i),E(xr.$$.fragment,i),E(Zo.$$.fragment,i),E(Sr.$$.fragment,i),E(en.$$.fragment,i),E(tn.$$.fragment,i),E(Dr.$$.fragment,i),E(Or.$$.fragment,i),E(an.$$.fragment,i),E(Ir.$$.fragment,i),E(on.$$.fragment,i),E(nn.$$.fragment,i),Ip=!0)},o(i){F(p.$$.fragment,i),F(v.$$.fragment,i),F(vt.$$.fragment,i),F(bo.$$.fragment,i),F(ko.$$.fragment,i),F(jo.$$.fragment,i),F($n.$$.fragment,i),F($o.$$.fragment,i),F(An.$$.fragment,i),F(zn.$$.fragment,i),F(Cn.$$.fragment,i),F(Pn.$$.fragment,i),F(Ao.$$.fragment,i),F(On.$$.fragment,i),F(Nn.$$.fragment,i),F(Ln.$$.fragment,i),F(Qn.$$.fragment,i),F(Un.$$.fragment,i),F(Bn.$$.fragment,i),F(Rn.$$.fragment,i),F(Zn.$$.fragment,i),F(Po.$$.fragment,i),F(Mo.$$.fragment,i),F(er.$$.fragment,i),F(tr.$$.fragment,i),F(or.$$.fragment,i),F(Do.$$.fragment,i),F(Oo.$$.fragment,i),F(nr.$$.fragment,i),F(rr.$$.fragment,i),F(pr.$$.fragment,i),F(Lo.$$.fragment,i),F(Qo.$$.fragment,i),F(cr.$$.fragment,i),F(hr.$$.fragment,i),F(gr.$$.fragment,i),F(Wo.$$.fragment,i),F(Ho.$$.fragment,i),F(_r.$$.fragment,i),F(Tr.$$.fragment,i),F(Bo.$$.fragment,i),F(yr.$$.fragment,i),F(Ro.$$.fragment,i),F(Go.$$.fragment,i),F(kr.$$.fragment,i),F(jr.$$.fragment,i),F(Vo.$$.fragment,i),F(Ar.$$.fragment,i),F(Yo.$$.fragment,i),F(Jo.$$.fragment,i),F(zr.$$.fragment,i),F(xr.$$.fragment,i),F(Zo.$$.fragment,i),F(Sr.$$.fragment,i),F(en.$$.fragment,i),F(tn.$$.fragment,i),F(Dr.$$.fragment,i),F(Or.$$.fragment,i),F(an.$$.fragment,i),F(Ir.$$.fragment,i),F(on.$$.fragment,i),F(nn.$$.fragment,i),Ip=!1},d(i){t(l),i&&t(T),i&&t(d),A(p),i&&t(W),i&&t(O),A(v),i&&t(U),i&&t(N),i&&t(pe),i&&t(R),i&&t(he),i&&t(X),i&&t(Te),i&&t(Pe),i&&t(je),i&&t(Me),i&&t(ce),i&&t(Se),i&&t(qe),i&&t(V),i&&t(Q),i&&t(Le),i&&t(Qe),i&&t(Ie),i&&t(xe),i&&t(ne),i&&t(bs),i&&t(ts),i&&t(ws),i&&t(ut),i&&t(ha),i&&t(Vt),A(vt),i&&t(ua),i&&t(nt),i&&t(ma),i&&t(ys),i&&t(fa),i&&t(we),i&&t(ga),i&&t(At),i&&t(_a),i&&t(js),i&&t(Ta),i&&t(Ge),i&&t(op),A(bo,i),i&&t(np),i&&t(wo),i&&t(rp),i&&t(vo),i&&t(ip),i&&t(Br),i&&t(lp),i&&t(yo),i&&t(dp),i&&t(rt),i&&t(pp),i&&t(zt),i&&t(cp),i&&t(ti),i&&t(hp),A(ko,i),i&&t(up),i&&t(Ke),i&&t(mp),i&&t(ai),i&&t(fp),A(jo,i),i&&t(gp),i&&t(Ua),A($n),i&&t(_p),A($o,i),i&&t(Tp),i&&t(xt),i&&t(bp),i&&t(Ba),A(An),i&&t(wp),i&&t(Ra),A(zn),i&&t(vp),i&&t(Ga),A(Cn),i&&t(yp),i&&t(Jt),A(Pn),A(Ao),i&&t(kp),i&&t(Ya),A(On),i&&t(jp),i&&t(ct),A(Nn),A(Ln),A(Qn),A(Un),i&&t(qp),i&&t(Ja),A(Bn),i&&t($p),i&&t(kt),A(Rn),A(Zn),A(Po),A(Mo),i&&t(Ep),i&&t(Za),A(er),i&&t(Fp),i&&t(Ts),A(tr),A(or),A(Do),A(Oo),i&&t(Ap),i&&t(so),A(nr),i&&t(zp),i&&t(Xt),A(rr),A(pr),A(Lo),A(Qo),i&&t(xp),i&&t(oo),A(cr),i&&t(Cp),i&&t(Zt),A(hr),A(gr),A(Wo),A(Ho),i&&t(Pp),i&&t(io),A(_r),i&&t(Mp),i&&t(jt),A(Tr),A(Bo),A(yr),A(Ro),A(Go),i&&t(Sp),i&&t(po),A(kr),i&&t(Dp),i&&t(qt),A(jr),A(Vo),A(Ar),A(Yo),A(Jo),i&&t(Op),i&&t(ho),A(zr),i&&t(Np),i&&t($t),A(xr),A(Zo),A(Sr),A(en),A(tn),i&&t(Lp),i&&t(mo),A(Dr),i&&t(Qp),i&&t(Et),A(Or),A(an),A(Ir),A(on),A(nn)}}}const ak={local:"tapas",sections:[{local:"overview",title:"Overview"},{local:"usage-finetuning",title:"Usage: fine-tuning"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",title:"TAPAS specific outputs"},{local:"transformers.TapasConfig",title:"TapasConfig"},{local:"transformers.TapasTokenizer",title:"TapasTokenizer"},{local:"transformers.TapasModel",title:"TapasModel"},{local:"transformers.TapasForMaskedLM",title:"TapasForMaskedLM"},{local:"transformers.TapasForSequenceClassification",title:"TapasForSequenceClassification"},{local:"transformers.TapasForQuestionAnswering",title:"TapasForQuestionAnswering"},{local:"transformers.TFTapasModel",title:"TFTapasModel"},{local:"transformers.TFTapasForMaskedLM",title:"TFTapasForMaskedLM"},{local:"transformers.TFTapasForSequenceClassification",title:"TFTapasForSequenceClassification"},{local:"transformers.TFTapasForQuestionAnswering",title:"TFTapasForQuestionAnswering"}],title:"TAPAS"};function ok(P){return Ty(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class hk extends uy{constructor(l){super();my(this,l,ok,sk,fy,{})}}export{hk as default,ak as metadata};
