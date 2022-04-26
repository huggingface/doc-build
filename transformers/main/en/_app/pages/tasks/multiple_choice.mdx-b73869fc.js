import{S as mt,i as dt,s as ut,e as p,k as _,w as E,t as l,M as _t,c as i,d as a,m as g,a as c,x,h as r,b as $,F as e,g as h,y as z,q,o as T,B as C,v as gt,L as ht}from"../../chunks/vendor-6b77c823.js";import{T as ft}from"../../chunks/Tip-39098574.js";import{I as Le}from"../../chunks/IconCopyLink-7a11ce68.js";import{C as os}from"../../chunks/CodeBlock-3a8b25a8.js";import{F as ct,M as Be}from"../../chunks/Markdown-9acf6d91.js";function jt(M){let n,d;return n=new os({props:{code:`from dataclasses import dataclass
from transformers.tokenization_utils_base import PreTrainedTokenizerBase, PaddingStrategy
from typing import Optional, Union
import torch


@dataclass
class DataCollatorForMultipleChoice:
    """
    Data collator that will dynamically pad the inputs for multiple choice received.
    """

    tokenizer: PreTrainedTokenizerBase
    padding: Union[bool, str, PaddingStrategy] = True
    max_length: Optional[int] = None
    pad_to_multiple_of: Optional[int] = None

    def __call__(self, features):
        label_name = "label" if "label" in features[0].keys() else "labels"
        labels = [feature.pop(label_name) for feature in features]
        batch_size = len(features)
        num_choices = len(features[0]["input_ids"])
        flattened_features = [
            [{k: v[i] for k, v in feature.items()} for i in range(num_choices)] for feature in features
        ]
        flattened_features = sum(flattened_features, [])

        batch = self.tokenizer.pad(
            flattened_features,
            padding=self.padding,
            max_length=self.max_length,
            pad_to_multiple_of=self.pad_to_multiple_of,
            return_tensors="pt",
        )

        batch = {k: v.view(batch_size, num_choices, -1) for k, v in batch.items()}
        batch["labels"] = torch.tensor(labels, dtype=torch.int64)
        return batch`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> dataclasses <span class="hljs-keyword">import</span> dataclass
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.tokenization_utils_base <span class="hljs-keyword">import</span> PreTrainedTokenizerBase, PaddingStrategy
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">Optional</span>, <span class="hljs-type">Union</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch


<span class="hljs-meta">&gt;&gt;&gt; </span>@dataclass
<span class="hljs-meta">... </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">DataCollatorForMultipleChoice</span>:
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&quot;&quot;
<span class="hljs-meta">... </span>    Data collator that will dynamically pad the inputs for multiple choice received.
<span class="hljs-meta">... </span>    &quot;&quot;&quot;</span>

<span class="hljs-meta">... </span>    tokenizer: PreTrainedTokenizerBase
<span class="hljs-meta">... </span>    padding: <span class="hljs-type">Union</span>[<span class="hljs-built_in">bool</span>, <span class="hljs-built_in">str</span>, PaddingStrategy] = <span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    max_length: <span class="hljs-type">Optional</span>[<span class="hljs-built_in">int</span>] = <span class="hljs-literal">None</span>
<span class="hljs-meta">... </span>    pad_to_multiple_of: <span class="hljs-type">Optional</span>[<span class="hljs-built_in">int</span>] = <span class="hljs-literal">None</span>

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__call__</span>(<span class="hljs-params">self, features</span>):
<span class="hljs-meta">... </span>        label_name = <span class="hljs-string">&quot;label&quot;</span> <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;label&quot;</span> <span class="hljs-keyword">in</span> features[<span class="hljs-number">0</span>].keys() <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;labels&quot;</span>
<span class="hljs-meta">... </span>        labels = [feature.pop(label_name) <span class="hljs-keyword">for</span> feature <span class="hljs-keyword">in</span> features]
<span class="hljs-meta">... </span>        batch_size = <span class="hljs-built_in">len</span>(features)
<span class="hljs-meta">... </span>        num_choices = <span class="hljs-built_in">len</span>(features[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">... </span>        flattened_features = [
<span class="hljs-meta">... </span>            [{k: v[i] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> feature.items()} <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_choices)] <span class="hljs-keyword">for</span> feature <span class="hljs-keyword">in</span> features
<span class="hljs-meta">... </span>        ]
<span class="hljs-meta">... </span>        flattened_features = <span class="hljs-built_in">sum</span>(flattened_features, [])

<span class="hljs-meta">... </span>        batch = self.tokenizer.pad(
<span class="hljs-meta">... </span>            flattened_features,
<span class="hljs-meta">... </span>            padding=self.padding,
<span class="hljs-meta">... </span>            max_length=self.max_length,
<span class="hljs-meta">... </span>            pad_to_multiple_of=self.pad_to_multiple_of,
<span class="hljs-meta">... </span>            return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>        )

<span class="hljs-meta">... </span>        batch = {k: v.view(batch_size, num_choices, -<span class="hljs-number">1</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> batch.items()}
<span class="hljs-meta">... </span>        batch[<span class="hljs-string">&quot;labels&quot;</span>] = torch.tensor(labels, dtype=torch.int64)
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`}}),{c(){E(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,u){z(n,t,u),d=!0},p:ht,i(t){d||(q(n.$$.fragment,t),d=!0)},o(t){T(n.$$.fragment,t),d=!1},d(t){C(n,t)}}}function $t(M){let n,d;return n=new Be({props:{$$slots:{default:[jt]},$$scope:{ctx:M}}}),{c(){E(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,u){z(n,t,u),d=!0},p(t,u){const w={};u&2&&(w.$$scope={dirty:u,ctx:t}),n.$set(w)},i(t){d||(q(n.$$.fragment,t),d=!0)},o(t){T(n.$$.fragment,t),d=!1},d(t){C(n,t)}}}function wt(M){let n,d;return n=new os({props:{code:`from dataclasses import dataclass
from transformers.tokenization_utils_base import PreTrainedTokenizerBase, PaddingStrategy
from typing import Optional, Union
import tensorflow as tf


@dataclass
class DataCollatorForMultipleChoice:
    """
    Data collator that will dynamically pad the inputs for multiple choice received.
    """

    tokenizer: PreTrainedTokenizerBase
    padding: Union[bool, str, PaddingStrategy] = True
    max_length: Optional[int] = None
    pad_to_multiple_of: Optional[int] = None

    def __call__(self, features):
        label_name = "label" if "label" in features[0].keys() else "labels"
        labels = [feature.pop(label_name) for feature in features]
        batch_size = len(features)
        num_choices = len(features[0]["input_ids"])
        flattened_features = [
            [{k: v[i] for k, v in feature.items()} for i in range(num_choices)] for feature in features
        ]
        flattened_features = sum(flattened_features, [])

        batch = self.tokenizer.pad(
            flattened_features,
            padding=self.padding,
            max_length=self.max_length,
            pad_to_multiple_of=self.pad_to_multiple_of,
            return_tensors="tf",
        )

        batch = {k: tf.reshape(v, (batch_size, num_choices, -1)) for k, v in batch.items()}
        batch["labels"] = tf.convert_to_tensor(labels, dtype=tf.int64)
        return batch`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> dataclasses <span class="hljs-keyword">import</span> dataclass
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers.tokenization_utils_base <span class="hljs-keyword">import</span> PreTrainedTokenizerBase, PaddingStrategy
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> typing <span class="hljs-keyword">import</span> <span class="hljs-type">Optional</span>, <span class="hljs-type">Union</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf


<span class="hljs-meta">&gt;&gt;&gt; </span>@dataclass
<span class="hljs-meta">... </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">DataCollatorForMultipleChoice</span>:
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;&quot;&quot;
<span class="hljs-meta">... </span>    Data collator that will dynamically pad the inputs for multiple choice received.
<span class="hljs-meta">... </span>    &quot;&quot;&quot;</span>

<span class="hljs-meta">... </span>    tokenizer: PreTrainedTokenizerBase
<span class="hljs-meta">... </span>    padding: <span class="hljs-type">Union</span>[<span class="hljs-built_in">bool</span>, <span class="hljs-built_in">str</span>, PaddingStrategy] = <span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>    max_length: <span class="hljs-type">Optional</span>[<span class="hljs-built_in">int</span>] = <span class="hljs-literal">None</span>
<span class="hljs-meta">... </span>    pad_to_multiple_of: <span class="hljs-type">Optional</span>[<span class="hljs-built_in">int</span>] = <span class="hljs-literal">None</span>

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__call__</span>(<span class="hljs-params">self, features</span>):
<span class="hljs-meta">... </span>        label_name = <span class="hljs-string">&quot;label&quot;</span> <span class="hljs-keyword">if</span> <span class="hljs-string">&quot;label&quot;</span> <span class="hljs-keyword">in</span> features[<span class="hljs-number">0</span>].keys() <span class="hljs-keyword">else</span> <span class="hljs-string">&quot;labels&quot;</span>
<span class="hljs-meta">... </span>        labels = [feature.pop(label_name) <span class="hljs-keyword">for</span> feature <span class="hljs-keyword">in</span> features]
<span class="hljs-meta">... </span>        batch_size = <span class="hljs-built_in">len</span>(features)
<span class="hljs-meta">... </span>        num_choices = <span class="hljs-built_in">len</span>(features[<span class="hljs-number">0</span>][<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">... </span>        flattened_features = [
<span class="hljs-meta">... </span>            [{k: v[i] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> feature.items()} <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_choices)] <span class="hljs-keyword">for</span> feature <span class="hljs-keyword">in</span> features
<span class="hljs-meta">... </span>        ]
<span class="hljs-meta">... </span>        flattened_features = <span class="hljs-built_in">sum</span>(flattened_features, [])

<span class="hljs-meta">... </span>        batch = self.tokenizer.pad(
<span class="hljs-meta">... </span>            flattened_features,
<span class="hljs-meta">... </span>            padding=self.padding,
<span class="hljs-meta">... </span>            max_length=self.max_length,
<span class="hljs-meta">... </span>            pad_to_multiple_of=self.pad_to_multiple_of,
<span class="hljs-meta">... </span>            return_tensors=<span class="hljs-string">&quot;tf&quot;</span>,
<span class="hljs-meta">... </span>        )

<span class="hljs-meta">... </span>        batch = {k: tf.reshape(v, (batch_size, num_choices, -<span class="hljs-number">1</span>)) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> batch.items()}
<span class="hljs-meta">... </span>        batch[<span class="hljs-string">&quot;labels&quot;</span>] = tf.convert_to_tensor(labels, dtype=tf.int64)
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`}}),{c(){E(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,u){z(n,t,u),d=!0},p:ht,i(t){d||(q(n.$$.fragment,t),d=!0)},o(t){T(n.$$.fragment,t),d=!1},d(t){C(n,t)}}}function kt(M){let n,d;return n=new Be({props:{$$slots:{default:[wt]},$$scope:{ctx:M}}}),{c(){E(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,u){z(n,t,u),d=!0},p(t,u){const w={};u&2&&(w.$$scope={dirty:u,ctx:t}),n.$set(w)},i(t){d||(q(n.$$.fragment,t),d=!0)},o(t){T(n.$$.fragment,t),d=!1},d(t){C(n,t)}}}function bt(M){let n,d,t,u,w;return{c(){n=p("p"),d=l("If you aren\u2019t familiar with fine-tuning a model with Trainer, take a look at the basic tutorial "),t=p("a"),u=l("here"),w=l("!"),this.h()},l(k){n=i(k,"P",{});var v=c(n);d=r(v,"If you aren\u2019t familiar with fine-tuning a model with Trainer, take a look at the basic tutorial "),t=i(v,"A",{href:!0});var D=c(t);u=r(D,"here"),D.forEach(a),w=r(v,"!"),v.forEach(a),this.h()},h(){$(t,"href","../training#finetune-with-trainer")},m(k,v){h(k,n,v),e(n,d),e(n,t),e(t,u),e(n,w)},d(k){k&&a(n)}}}function vt(M){let n,d,t,u,w,k,v,D,H,V,W,_s,X,y,Z,Y,L,hs,B,fs,N,ss,es,as,ps,P,F,K,I,gs,ns,J,U,O;return v=new os({props:{code:`from transformers import AutoModelForMultipleChoice, TrainingArguments, Trainer

model = AutoModelForMultipleChoice.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForMultipleChoice, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),H=new ft({props:{$$slots:{default:[bt]},$$scope:{ctx:M}}}),U=new os({props:{code:`training_args = TrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",
    learning_rate=5e-5,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=16,
    num_train_epochs=3,
    weight_decay=0.01,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_swag["train"],
    eval_dataset=tokenized_swag["validation"],
    tokenizer=tokenizer,
    data_collator=DataCollatorForMultipleChoice(tokenizer=tokenizer),
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">5e-5</span>,
<span class="hljs-meta">... </span>    per_device_train_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    per_device_eval_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">3</span>,
<span class="hljs-meta">... </span>    weight_decay=<span class="hljs-number">0.01</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=tokenized_swag[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=tokenized_swag[<span class="hljs-string">&quot;validation&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=tokenizer,
<span class="hljs-meta">... </span>    data_collator=DataCollatorForMultipleChoice(tokenizer=tokenizer),
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){n=p("p"),d=l("Load BERT with "),t=p("a"),u=l("AutoModelForMultipleChoice"),w=l(":"),k=_(),E(v.$$.fragment),D=_(),E(H.$$.fragment),V=_(),W=p("p"),_s=l("At this point, only three steps remain:"),X=_(),y=p("ol"),Z=p("li"),Y=l("Define your training hyperparameters in "),L=p("a"),hs=l("TrainingArguments"),B=l("."),fs=_(),N=p("li"),ss=l("Pass the training arguments to "),es=p("a"),as=l("Trainer"),ps=l(" along with the model, dataset, tokenizer, and data collator."),P=_(),F=p("li"),K=l("Call "),I=p("a"),gs=l("train()"),ns=l(" to fine-tune your model."),J=_(),E(U.$$.fragment),this.h()},l(f){n=i(f,"P",{});var b=c(n);d=r(b,"Load BERT with "),t=i(b,"A",{href:!0});var S=c(t);u=r(S,"AutoModelForMultipleChoice"),S.forEach(a),w=r(b,":"),b.forEach(a),k=g(f),x(v.$$.fragment,f),D=g(f),x(H.$$.fragment,f),V=g(f),W=i(f,"P",{});var js=c(W);_s=r(js,"At this point, only three steps remain:"),js.forEach(a),X=g(f),y=i(f,"OL",{});var G=c(y);Z=i(G,"LI",{});var is=c(Z);Y=r(is,"Define your training hyperparameters in "),L=i(is,"A",{href:!0});var ts=c(L);hs=r(ts,"TrainingArguments"),ts.forEach(a),B=r(is,"."),is.forEach(a),fs=g(G),N=i(G,"LI",{});var R=c(N);ss=r(R,"Pass the training arguments to "),es=i(R,"A",{href:!0});var Q=c(es);as=r(Q,"Trainer"),Q.forEach(a),ps=r(R," along with the model, dataset, tokenizer, and data collator."),R.forEach(a),P=g(G),F=i(G,"LI",{});var A=c(F);K=r(A,"Call "),I=i(A,"A",{href:!0});var ls=c(I);gs=r(ls,"train()"),ls.forEach(a),ns=r(A," to fine-tune your model."),A.forEach(a),G.forEach(a),J=g(f),x(U.$$.fragment,f),this.h()},h(){$(t,"href","/docs/transformers/main/en/model_doc/auto#transformers.AutoModelForMultipleChoice"),$(L,"href","/docs/transformers/main/en/main_classes/trainer#transformers.TrainingArguments"),$(es,"href","/docs/transformers/main/en/main_classes/trainer#transformers.Trainer"),$(I,"href","/docs/transformers/main/en/main_classes/trainer#transformers.Trainer.train")},m(f,b){h(f,n,b),e(n,d),e(n,t),e(t,u),e(n,w),h(f,k,b),z(v,f,b),h(f,D,b),z(H,f,b),h(f,V,b),h(f,W,b),e(W,_s),h(f,X,b),h(f,y,b),e(y,Z),e(Z,Y),e(Z,L),e(L,hs),e(Z,B),e(y,fs),e(y,N),e(N,ss),e(N,es),e(es,as),e(N,ps),e(y,P),e(y,F),e(F,K),e(F,I),e(I,gs),e(F,ns),h(f,J,b),z(U,f,b),O=!0},p(f,b){const S={};b&2&&(S.$$scope={dirty:b,ctx:f}),H.$set(S)},i(f){O||(q(v.$$.fragment,f),q(H.$$.fragment,f),q(U.$$.fragment,f),O=!0)},o(f){T(v.$$.fragment,f),T(H.$$.fragment,f),T(U.$$.fragment,f),O=!1},d(f){f&&a(n),f&&a(k),C(v,f),f&&a(D),C(H,f),f&&a(V),f&&a(W),f&&a(X),f&&a(y),f&&a(J),C(U,f)}}}function yt(M){let n,d;return n=new Be({props:{$$slots:{default:[vt]},$$scope:{ctx:M}}}),{c(){E(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,u){z(n,t,u),d=!0},p(t,u){const w={};u&2&&(w.$$scope={dirty:u,ctx:t}),n.$set(w)},i(t){d||(q(n.$$.fragment,t),d=!0)},o(t){T(n.$$.fragment,t),d=!1},d(t){C(n,t)}}}function Et(M){let n,d,t,u,w;return{c(){n=p("p"),d=l("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),t=p("a"),u=l("here"),w=l("!"),this.h()},l(k){n=i(k,"P",{});var v=c(n);d=r(v,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),t=i(v,"A",{href:!0});var D=c(t);u=r(D,"here"),D.forEach(a),w=r(v,"!"),v.forEach(a),this.h()},h(){$(t,"href","training#finetune-with-keras")},m(k,v){h(k,n,v),e(n,d),e(n,t),e(t,u),e(n,w)},d(k){k&&a(n)}}}function xt(M){let n,d,t,u,w,k,v,D,H,V,W,_s,X,y,Z,Y,L,hs,B,fs,N,ss,es,as,ps,P,F,K,I,gs,ns,J,U,O,f,b,S,js,G,is,ts,R,Q,A,ls,$s,Is,Ws,bs,ws,Cs;return L=new os({props:{code:`data_collator = DataCollatorForMultipleChoice(tokenizer=tokenizer)
tf_train_set = tokenized_swag["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids"],
    label_cols=["labels"],
    shuffle=True,
    batch_size=batch_size,
    collate_fn=data_collator,
)

tf_validation_set = tokenized_swag["validation"].to_tf_dataset(
    columns=["attention_mask", "input_ids"],
    label_cols=["labels"],
    shuffle=False,
    batch_size=batch_size,
    collate_fn=data_collator,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForMultipleChoice(tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>tf_train_set = tokenized_swag[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>],
<span class="hljs-meta">... </span>    label_cols=[<span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    batch_size=batch_size,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tf_validation_set = tokenized_swag[<span class="hljs-string">&quot;validation&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>],
<span class="hljs-meta">... </span>    label_cols=[<span class="hljs-string">&quot;labels&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    batch_size=batch_size,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)`}}),B=new ft({props:{$$slots:{default:[Et]},$$scope:{ctx:M}}}),as=new os({props:{code:`from transformers import create_optimizer

batch_size = 16
num_train_epochs = 2
total_train_steps = (len(tokenized_swag["train"]) // batch_size) * num_train_epochs
optimizer, schedule = create_optimizer(init_lr=5e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer

<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size = <span class="hljs-number">16</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_train_epochs = <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>total_train_steps = (<span class="hljs-built_in">len</span>(tokenized_swag[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size) * num_train_epochs
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">5e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),J=new os({props:{code:`from transformers import TFAutoModelForMultipleChoice

model = TFAutoModelForMultipleChoice.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),ts=new os({props:{code:`model.compile(
    optimizer=optimizer,
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(
<span class="hljs-meta">... </span>    optimizer=optimizer,
<span class="hljs-meta">... </span>    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=<span class="hljs-literal">True</span>),
<span class="hljs-meta">... </span>)`}}),ws=new os({props:{code:"model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=2)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=<span class="hljs-number">2</span>)'}}),{c(){n=p("p"),d=l("To fine-tune a model in TensorFlow, start by converting your datasets to the "),t=p("code"),u=l("tf.data.Dataset"),w=l(" format with "),k=p("a"),v=p("code"),D=l("to_tf_dataset"),H=l(". Specify inputs in "),V=p("code"),W=l("columns"),_s=l(", targets in "),X=p("code"),y=l("label_cols"),Z=l(", whether to shuffle the dataset order, batch size, and the data collator:"),Y=_(),E(L.$$.fragment),hs=_(),E(B.$$.fragment),fs=_(),N=p("p"),ss=l("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),es=_(),E(as.$$.fragment),ps=_(),P=p("p"),F=l("Load BERT with "),K=p("a"),I=l("TFAutoModelForMultipleChoice"),gs=l(":"),ns=_(),E(J.$$.fragment),U=_(),O=p("p"),f=l("Configure the model for training with "),b=p("a"),S=p("code"),js=l("compile"),G=l(":"),is=_(),E(ts.$$.fragment),R=_(),Q=p("p"),A=l("Call "),ls=p("a"),$s=p("code"),Is=l("fit"),Ws=l(" to fine-tune the model:"),bs=_(),E(ws.$$.fragment),this.h()},l(o){n=i(o,"P",{});var j=c(n);d=r(j,"To fine-tune a model in TensorFlow, start by converting your datasets to the "),t=i(j,"CODE",{});var xs=c(t);u=r(xs,"tf.data.Dataset"),xs.forEach(a),w=r(j," format with "),k=i(j,"A",{href:!0,rel:!0});var As=c(k);v=i(As,"CODE",{});var Zs=c(v);D=r(Zs,"to_tf_dataset"),Zs.forEach(a),As.forEach(a),H=r(j,". Specify inputs in "),V=i(j,"CODE",{});var se=c(V);W=r(se,"columns"),se.forEach(a),_s=r(j,", targets in "),X=i(j,"CODE",{});var Us=c(X);y=r(Us,"label_cols"),Us.forEach(a),Z=r(j,", whether to shuffle the dataset order, batch size, and the data collator:"),j.forEach(a),Y=g(o),x(L.$$.fragment,o),hs=g(o),x(B.$$.fragment,o),fs=g(o),N=i(o,"P",{});var ms=c(N);ss=r(ms,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),ms.forEach(a),es=g(o),x(as.$$.fragment,o),ps=g(o),P=i(o,"P",{});var cs=c(P);F=r(cs,"Load BERT with "),K=i(cs,"A",{href:!0});var Ps=c(K);I=r(Ps,"TFAutoModelForMultipleChoice"),Ps.forEach(a),gs=r(cs,":"),cs.forEach(a),ns=g(o),x(J.$$.fragment,o),U=g(o),O=i(o,"P",{});var ds=c(O);f=r(ds,"Configure the model for training with "),b=i(ds,"A",{href:!0,rel:!0});var ee=c(b);S=i(ee,"CODE",{});var Ms=c(S);js=r(Ms,"compile"),Ms.forEach(a),ee.forEach(a),G=r(ds,":"),ds.forEach(a),is=g(o),x(ts.$$.fragment,o),R=g(o),Q=i(o,"P",{});var Ds=c(Q);A=r(Ds,"Call "),ls=i(Ds,"A",{href:!0,rel:!0});var Gs=c(ls);$s=i(Gs,"CODE",{});var zs=c($s);Is=r(zs,"fit"),zs.forEach(a),Gs.forEach(a),Ws=r(Ds," to fine-tune the model:"),Ds.forEach(a),bs=g(o),x(ws.$$.fragment,o),this.h()},h(){$(k,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.to_tf_dataset"),$(k,"rel","nofollow"),$(K,"href","/docs/transformers/main/en/model_doc/auto#transformers.TFAutoModelForMultipleChoice"),$(b,"href","https://keras.io/api/models/model_training_apis/#compile-method"),$(b,"rel","nofollow"),$(ls,"href","https://keras.io/api/models/model_training_apis/#fit-method"),$(ls,"rel","nofollow")},m(o,j){h(o,n,j),e(n,d),e(n,t),e(t,u),e(n,w),e(n,k),e(k,v),e(v,D),e(n,H),e(n,V),e(V,W),e(n,_s),e(n,X),e(X,y),e(n,Z),h(o,Y,j),z(L,o,j),h(o,hs,j),z(B,o,j),h(o,fs,j),h(o,N,j),e(N,ss),h(o,es,j),z(as,o,j),h(o,ps,j),h(o,P,j),e(P,F),e(P,K),e(K,I),e(P,gs),h(o,ns,j),z(J,o,j),h(o,U,j),h(o,O,j),e(O,f),e(O,b),e(b,S),e(S,js),e(O,G),h(o,is,j),z(ts,o,j),h(o,R,j),h(o,Q,j),e(Q,A),e(Q,ls),e(ls,$s),e($s,Is),e(Q,Ws),h(o,bs,j),z(ws,o,j),Cs=!0},p(o,j){const xs={};j&2&&(xs.$$scope={dirty:j,ctx:o}),B.$set(xs)},i(o){Cs||(q(L.$$.fragment,o),q(B.$$.fragment,o),q(as.$$.fragment,o),q(J.$$.fragment,o),q(ts.$$.fragment,o),q(ws.$$.fragment,o),Cs=!0)},o(o){T(L.$$.fragment,o),T(B.$$.fragment,o),T(as.$$.fragment,o),T(J.$$.fragment,o),T(ts.$$.fragment,o),T(ws.$$.fragment,o),Cs=!1},d(o){o&&a(n),o&&a(Y),C(L,o),o&&a(hs),C(B,o),o&&a(fs),o&&a(N),o&&a(es),C(as,o),o&&a(ps),o&&a(P),o&&a(ns),C(J,o),o&&a(U),o&&a(O),o&&a(is),C(ts,o),o&&a(R),o&&a(Q),o&&a(bs),C(ws,o)}}}function zt(M){let n,d;return n=new Be({props:{$$slots:{default:[xt]},$$scope:{ctx:M}}}),{c(){E(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,u){z(n,t,u),d=!0},p(t,u){const w={};u&2&&(w.$$scope={dirty:u,ctx:t}),n.$set(w)},i(t){d||(q(n.$$.fragment,t),d=!0)},o(t){T(n.$$.fragment,t),d=!1},d(t){C(n,t)}}}function qt(M){let n,d,t,u,w,k,v,D,H,V,W,_s,X,y,Z,Y,L,hs,B,fs,N,ss,es,as,ps,P,F,K,I,gs,ns,J,U,O,f,b,S,js,G,is,ts,R,Q,A,ls,$s,Is,Ws,bs,ws,Cs,o,j,xs,As,Zs,se,Us,ms,cs,Ps,ds,ee,Ms,Ds,Gs,zs,Ne,be,Rs,ve,ae,Ie,ye,vs,qs,We,re,Ue,Ge,oe,Re,He,Ye,Hs,Ke,pe,Je,Qe,Ve,ks,Xe,ie,Ze,sa,ce,ea,aa,he,ta,na,Ee,Ys,xe,us,la,Ks,fe,ra,oa,me,pa,ia,de,ca,ha,ze,Js,qe,rs,fa,te,ma,da,ue,ua,_a,_e,ga,ja,ge,$a,wa,Te,Qs,je,ka,ba,Ce,Fs,Ae,Ts,Os,$e,Vs,va,we,ya,Pe,Ss,Me;return k=new Le({}),I=new Le({}),S=new os({props:{code:`from datasets import load_dataset

swag = load_dataset("swag", "regular")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>swag = load_dataset(<span class="hljs-string">&quot;swag&quot;</span>, <span class="hljs-string">&quot;regular&quot;</span>)`}}),R=new os({props:{code:'swag["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>swag[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;ending0&#x27;</span>: <span class="hljs-string">&#x27;passes by walking down the street playing their instruments.&#x27;</span>,
 <span class="hljs-string">&#x27;ending1&#x27;</span>: <span class="hljs-string">&#x27;has heard approaching them.&#x27;</span>,
 <span class="hljs-string">&#x27;ending2&#x27;</span>: <span class="hljs-string">&quot;arrives and they&#x27;re outside dancing and asleep.&quot;</span>,
 <span class="hljs-string">&#x27;ending3&#x27;</span>: <span class="hljs-string">&#x27;turns the lead singer watches the performance.&#x27;</span>,
 <span class="hljs-string">&#x27;fold-ind&#x27;</span>: <span class="hljs-string">&#x27;3416&#x27;</span>,
 <span class="hljs-string">&#x27;gold-source&#x27;</span>: <span class="hljs-string">&#x27;gold&#x27;</span>,
 <span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-number">0</span>,
 <span class="hljs-string">&#x27;sent1&#x27;</span>: <span class="hljs-string">&#x27;Members of the procession walk down the street holding small horn brass instruments.&#x27;</span>,
 <span class="hljs-string">&#x27;sent2&#x27;</span>: <span class="hljs-string">&#x27;A drum line&#x27;</span>,
 <span class="hljs-string">&#x27;startphrase&#x27;</span>: <span class="hljs-string">&#x27;Members of the procession walk down the street holding small horn brass instruments. A drum line&#x27;</span>,
 <span class="hljs-string">&#x27;video-id&#x27;</span>: <span class="hljs-string">&#x27;anetv_jkn6uvmqwh4&#x27;</span>}`}}),ds=new Le({}),Rs=new os({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),Ys=new os({props:{code:`ending_names = ["ending0", "ending1", "ending2", "ending3"]


def preprocess_function(examples):
    first_sentences = [[context] * 4 for context in examples["sent1"]]
    question_headers = examples["sent2"]
    second_sentences = [
        [f"{header} {examples[end][i]}" for end in ending_names] for i, header in enumerate(question_headers)
    ]

    first_sentences = sum(first_sentences, [])
    second_sentences = sum(second_sentences, [])

    tokenized_examples = tokenizer(first_sentences, second_sentences, truncation=True)
    return {k: [v[i : i + 4] for i in range(0, len(v), 4)] for k, v in tokenized_examples.items()}`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>ending_names = [<span class="hljs-string">&quot;ending0&quot;</span>, <span class="hljs-string">&quot;ending1&quot;</span>, <span class="hljs-string">&quot;ending2&quot;</span>, <span class="hljs-string">&quot;ending3&quot;</span>]


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    first_sentences = [[context] * <span class="hljs-number">4</span> <span class="hljs-keyword">for</span> context <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;sent1&quot;</span>]]
<span class="hljs-meta">... </span>    question_headers = examples[<span class="hljs-string">&quot;sent2&quot;</span>]
<span class="hljs-meta">... </span>    second_sentences = [
<span class="hljs-meta">... </span>        [<span class="hljs-string">f&quot;<span class="hljs-subst">{header}</span> <span class="hljs-subst">{examples[end][i]}</span>&quot;</span> <span class="hljs-keyword">for</span> end <span class="hljs-keyword">in</span> ending_names] <span class="hljs-keyword">for</span> i, header <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(question_headers)
<span class="hljs-meta">... </span>    ]

<span class="hljs-meta">... </span>    first_sentences = <span class="hljs-built_in">sum</span>(first_sentences, [])
<span class="hljs-meta">... </span>    second_sentences = <span class="hljs-built_in">sum</span>(second_sentences, [])

<span class="hljs-meta">... </span>    tokenized_examples = tokenizer(first_sentences, second_sentences, truncation=<span class="hljs-literal">True</span>)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> {k: [v[i : i + <span class="hljs-number">4</span>] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">len</span>(v), <span class="hljs-number">4</span>)] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> tokenized_examples.items()}`}}),Js=new os({props:{code:"tokenized_swag = swag.map(preprocess_function, batched=True)",highlighted:'tokenized_swag = swag.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)'}}),Fs=new ct({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[kt],pytorch:[$t]},$$scope:{ctx:M}}}),Vs=new Le({}),Ss=new ct({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[zt],pytorch:[yt]},$$scope:{ctx:M}}}),{c(){n=p("meta"),d=_(),t=p("h1"),u=p("a"),w=p("span"),E(k.$$.fragment),v=_(),D=p("span"),H=l("Multiple choice"),V=_(),W=p("p"),_s=l("A multiple choice task is similar to question answering, except several candidate answers are provided along with a context. The model is trained to select the correct answer from multiple inputs given a context."),X=_(),y=p("p"),Z=l("This guide will show you how to fine-tune "),Y=p("a"),L=l("BERT"),hs=l(" on the "),B=p("code"),fs=l("regular"),N=l(" configuration of the "),ss=p("a"),es=l("SWAG"),as=l(" dataset to select the best answer given multiple options and some context."),ps=_(),P=p("h2"),F=p("a"),K=p("span"),E(I.$$.fragment),gs=_(),ns=p("span"),J=l("Load SWAG dataset"),U=_(),O=p("p"),f=l("Load the SWAG dataset from the \u{1F917} Datasets library:"),b=_(),E(S.$$.fragment),js=_(),G=p("p"),is=l("Then take a look at an example:"),ts=_(),E(R.$$.fragment),Q=_(),A=p("p"),ls=l("The "),$s=p("code"),Is=l("sent1"),Ws=l(" and "),bs=p("code"),ws=l("sent2"),Cs=l(" fields show how a sentence begins, and each "),o=p("code"),j=l("ending"),xs=l(" field shows how a sentence could end. Given the sentence beginning, the model must pick the correct sentence ending as indicated by the "),As=p("code"),Zs=l("label"),se=l(" field."),Us=_(),ms=p("h2"),cs=p("a"),Ps=p("span"),E(ds.$$.fragment),ee=_(),Ms=p("span"),Ds=l("Preprocess"),Gs=_(),zs=p("p"),Ne=l("Load the BERT tokenizer to process the start of each sentence and the four possible endings:"),be=_(),E(Rs.$$.fragment),ve=_(),ae=p("p"),Ie=l("The preprocessing function needs to do:"),ye=_(),vs=p("ol"),qs=p("li"),We=l("Make four copies of the "),re=p("code"),Ue=l("sent1"),Ge=l(" field so you can combine each of them with "),oe=p("code"),Re=l("sent2"),He=l(" to recreate how a sentence starts."),Ye=_(),Hs=p("li"),Ke=l("Combine "),pe=p("code"),Je=l("sent2"),Qe=l(" with each of the four possible sentence endings."),Ve=_(),ks=p("li"),Xe=l("Flatten these two lists so you can tokenize them, and then unflatten them afterward so each example has a corresponding "),ie=p("code"),Ze=l("input_ids"),sa=l(", "),ce=p("code"),ea=l("attention_mask"),aa=l(", and "),he=p("code"),ta=l("labels"),na=l(" field."),Ee=_(),E(Ys.$$.fragment),xe=_(),us=p("p"),la=l("Use \u{1F917} Datasets "),Ks=p("a"),fe=p("code"),ra=l("map"),oa=l(" function to apply the preprocessing function over the entire dataset. You can speed up the "),me=p("code"),pa=l("map"),ia=l(" function by setting "),de=p("code"),ca=l("batched=True"),ha=l(" to process multiple elements of the dataset at once:"),ze=_(),E(Js.$$.fragment),qe=_(),rs=p("p"),fa=l("\u{1F917} Transformers doesn\u2019t have a data collator for multiple choice, so you will need to create one. You can adapt the "),te=p("a"),ma=l("DataCollatorWithPadding"),da=l(" to create a batch of examples for multiple choice. It will also "),ue=p("em"),ua=l("dynamically pad"),_a=l(" your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),_e=p("code"),ga=l("tokenizer"),ja=l(" function by setting "),ge=p("code"),$a=l("padding=True"),wa=l(", dynamic padding is more efficient."),Te=_(),Qs=p("p"),je=p("code"),ka=l("DataCollatorForMultipleChoice"),ba=l(" will flatten all the model inputs, apply padding, and then unflatten the results:"),Ce=_(),E(Fs.$$.fragment),Ae=_(),Ts=p("h2"),Os=p("a"),$e=p("span"),E(Vs.$$.fragment),va=_(),we=p("span"),ya=l("Train"),Pe=_(),E(Ss.$$.fragment),this.h()},l(s){const m=_t('[data-svelte="svelte-1phssyn"]',document.head);n=i(m,"META",{name:!0,content:!0}),m.forEach(a),d=g(s),t=i(s,"H1",{class:!0});var Xs=c(t);u=i(Xs,"A",{id:!0,class:!0,href:!0});var ke=c(u);w=i(ke,"SPAN",{});var xa=c(w);x(k.$$.fragment,xa),xa.forEach(a),ke.forEach(a),v=g(Xs),D=i(Xs,"SPAN",{});var za=c(D);H=r(za,"Multiple choice"),za.forEach(a),Xs.forEach(a),V=g(s),W=i(s,"P",{});var qa=c(W);_s=r(qa,"A multiple choice task is similar to question answering, except several candidate answers are provided along with a context. The model is trained to select the correct answer from multiple inputs given a context."),qa.forEach(a),X=g(s),y=i(s,"P",{});var Ls=c(y);Z=r(Ls,"This guide will show you how to fine-tune "),Y=i(Ls,"A",{href:!0,rel:!0});var Ta=c(Y);L=r(Ta,"BERT"),Ta.forEach(a),hs=r(Ls," on the "),B=i(Ls,"CODE",{});var Ca=c(B);fs=r(Ca,"regular"),Ca.forEach(a),N=r(Ls," configuration of the "),ss=i(Ls,"A",{href:!0,rel:!0});var Aa=c(ss);es=r(Aa,"SWAG"),Aa.forEach(a),as=r(Ls," dataset to select the best answer given multiple options and some context."),Ls.forEach(a),ps=g(s),P=i(s,"H2",{class:!0});var De=c(P);F=i(De,"A",{id:!0,class:!0,href:!0});var Pa=c(F);K=i(Pa,"SPAN",{});var Ma=c(K);x(I.$$.fragment,Ma),Ma.forEach(a),Pa.forEach(a),gs=g(De),ns=i(De,"SPAN",{});var Da=c(ns);J=r(Da,"Load SWAG dataset"),Da.forEach(a),De.forEach(a),U=g(s),O=i(s,"P",{});var Fa=c(O);f=r(Fa,"Load the SWAG dataset from the \u{1F917} Datasets library:"),Fa.forEach(a),b=g(s),x(S.$$.fragment,s),js=g(s),G=i(s,"P",{});var Oa=c(G);is=r(Oa,"Then take a look at an example:"),Oa.forEach(a),ts=g(s),x(R.$$.fragment,s),Q=g(s),A=i(s,"P",{});var ys=c(A);ls=r(ys,"The "),$s=i(ys,"CODE",{});var Sa=c($s);Is=r(Sa,"sent1"),Sa.forEach(a),Ws=r(ys," and "),bs=i(ys,"CODE",{});var La=c(bs);ws=r(La,"sent2"),La.forEach(a),Cs=r(ys," fields show how a sentence begins, and each "),o=i(ys,"CODE",{});var Ba=c(o);j=r(Ba,"ending"),Ba.forEach(a),xs=r(ys," field shows how a sentence could end. Given the sentence beginning, the model must pick the correct sentence ending as indicated by the "),As=i(ys,"CODE",{});var Na=c(As);Zs=r(Na,"label"),Na.forEach(a),se=r(ys," field."),ys.forEach(a),Us=g(s),ms=i(s,"H2",{class:!0});var Fe=c(ms);cs=i(Fe,"A",{id:!0,class:!0,href:!0});var Ia=c(cs);Ps=i(Ia,"SPAN",{});var Wa=c(Ps);x(ds.$$.fragment,Wa),Wa.forEach(a),Ia.forEach(a),ee=g(Fe),Ms=i(Fe,"SPAN",{});var Ua=c(Ms);Ds=r(Ua,"Preprocess"),Ua.forEach(a),Fe.forEach(a),Gs=g(s),zs=i(s,"P",{});var Ga=c(zs);Ne=r(Ga,"Load the BERT tokenizer to process the start of each sentence and the four possible endings:"),Ga.forEach(a),be=g(s),x(Rs.$$.fragment,s),ve=g(s),ae=i(s,"P",{});var Ra=c(ae);Ie=r(Ra,"The preprocessing function needs to do:"),Ra.forEach(a),ye=g(s),vs=i(s,"OL",{});var ne=c(vs);qs=i(ne,"LI",{});var le=c(qs);We=r(le,"Make four copies of the "),re=i(le,"CODE",{});var Ha=c(re);Ue=r(Ha,"sent1"),Ha.forEach(a),Ge=r(le," field so you can combine each of them with "),oe=i(le,"CODE",{});var Ya=c(oe);Re=r(Ya,"sent2"),Ya.forEach(a),He=r(le," to recreate how a sentence starts."),le.forEach(a),Ye=g(ne),Hs=i(ne,"LI",{});var Oe=c(Hs);Ke=r(Oe,"Combine "),pe=i(Oe,"CODE",{});var Ka=c(pe);Je=r(Ka,"sent2"),Ka.forEach(a),Qe=r(Oe," with each of the four possible sentence endings."),Oe.forEach(a),Ve=g(ne),ks=i(ne,"LI",{});var Bs=c(ks);Xe=r(Bs,"Flatten these two lists so you can tokenize them, and then unflatten them afterward so each example has a corresponding "),ie=i(Bs,"CODE",{});var Ja=c(ie);Ze=r(Ja,"input_ids"),Ja.forEach(a),sa=r(Bs,", "),ce=i(Bs,"CODE",{});var Qa=c(ce);ea=r(Qa,"attention_mask"),Qa.forEach(a),aa=r(Bs,", and "),he=i(Bs,"CODE",{});var Va=c(he);ta=r(Va,"labels"),Va.forEach(a),na=r(Bs," field."),Bs.forEach(a),ne.forEach(a),Ee=g(s),x(Ys.$$.fragment,s),xe=g(s),us=i(s,"P",{});var Ns=c(us);la=r(Ns,"Use \u{1F917} Datasets "),Ks=i(Ns,"A",{href:!0,rel:!0});var Xa=c(Ks);fe=i(Xa,"CODE",{});var Za=c(fe);ra=r(Za,"map"),Za.forEach(a),Xa.forEach(a),oa=r(Ns," function to apply the preprocessing function over the entire dataset. You can speed up the "),me=i(Ns,"CODE",{});var st=c(me);pa=r(st,"map"),st.forEach(a),ia=r(Ns," function by setting "),de=i(Ns,"CODE",{});var et=c(de);ca=r(et,"batched=True"),et.forEach(a),ha=r(Ns," to process multiple elements of the dataset at once:"),Ns.forEach(a),ze=g(s),x(Js.$$.fragment,s),qe=g(s),rs=i(s,"P",{});var Es=c(rs);fa=r(Es,"\u{1F917} Transformers doesn\u2019t have a data collator for multiple choice, so you will need to create one. You can adapt the "),te=i(Es,"A",{href:!0});var at=c(te);ma=r(at,"DataCollatorWithPadding"),at.forEach(a),da=r(Es," to create a batch of examples for multiple choice. It will also "),ue=i(Es,"EM",{});var tt=c(ue);ua=r(tt,"dynamically pad"),tt.forEach(a),_a=r(Es," your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),_e=i(Es,"CODE",{});var nt=c(_e);ga=r(nt,"tokenizer"),nt.forEach(a),ja=r(Es," function by setting "),ge=i(Es,"CODE",{});var lt=c(ge);$a=r(lt,"padding=True"),lt.forEach(a),wa=r(Es,", dynamic padding is more efficient."),Es.forEach(a),Te=g(s),Qs=i(s,"P",{});var Ea=c(Qs);je=i(Ea,"CODE",{});var rt=c(je);ka=r(rt,"DataCollatorForMultipleChoice"),rt.forEach(a),ba=r(Ea," will flatten all the model inputs, apply padding, and then unflatten the results:"),Ea.forEach(a),Ce=g(s),x(Fs.$$.fragment,s),Ae=g(s),Ts=i(s,"H2",{class:!0});var Se=c(Ts);Os=i(Se,"A",{id:!0,class:!0,href:!0});var ot=c(Os);$e=i(ot,"SPAN",{});var pt=c($e);x(Vs.$$.fragment,pt),pt.forEach(a),ot.forEach(a),va=g(Se),we=i(Se,"SPAN",{});var it=c(we);ya=r(it,"Train"),it.forEach(a),Se.forEach(a),Pe=g(s),x(Ss.$$.fragment,s),this.h()},h(){$(n,"name","hf:doc:metadata"),$(n,"content",JSON.stringify(Tt)),$(u,"id","multiple-choice"),$(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(u,"href","#multiple-choice"),$(t,"class","relative group"),$(Y,"href","https://huggingface.co/bert-base-uncased"),$(Y,"rel","nofollow"),$(ss,"href","https://huggingface.co/datasets/swag"),$(ss,"rel","nofollow"),$(F,"id","load-swag-dataset"),$(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(F,"href","#load-swag-dataset"),$(P,"class","relative group"),$(cs,"id","preprocess"),$(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(cs,"href","#preprocess"),$(ms,"class","relative group"),$(Ks,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),$(Ks,"rel","nofollow"),$(te,"href","/docs/transformers/main/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),$(Os,"id","train"),$(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Os,"href","#train"),$(Ts,"class","relative group")},m(s,m){e(document.head,n),h(s,d,m),h(s,t,m),e(t,u),e(u,w),z(k,w,null),e(t,v),e(t,D),e(D,H),h(s,V,m),h(s,W,m),e(W,_s),h(s,X,m),h(s,y,m),e(y,Z),e(y,Y),e(Y,L),e(y,hs),e(y,B),e(B,fs),e(y,N),e(y,ss),e(ss,es),e(y,as),h(s,ps,m),h(s,P,m),e(P,F),e(F,K),z(I,K,null),e(P,gs),e(P,ns),e(ns,J),h(s,U,m),h(s,O,m),e(O,f),h(s,b,m),z(S,s,m),h(s,js,m),h(s,G,m),e(G,is),h(s,ts,m),z(R,s,m),h(s,Q,m),h(s,A,m),e(A,ls),e(A,$s),e($s,Is),e(A,Ws),e(A,bs),e(bs,ws),e(A,Cs),e(A,o),e(o,j),e(A,xs),e(A,As),e(As,Zs),e(A,se),h(s,Us,m),h(s,ms,m),e(ms,cs),e(cs,Ps),z(ds,Ps,null),e(ms,ee),e(ms,Ms),e(Ms,Ds),h(s,Gs,m),h(s,zs,m),e(zs,Ne),h(s,be,m),z(Rs,s,m),h(s,ve,m),h(s,ae,m),e(ae,Ie),h(s,ye,m),h(s,vs,m),e(vs,qs),e(qs,We),e(qs,re),e(re,Ue),e(qs,Ge),e(qs,oe),e(oe,Re),e(qs,He),e(vs,Ye),e(vs,Hs),e(Hs,Ke),e(Hs,pe),e(pe,Je),e(Hs,Qe),e(vs,Ve),e(vs,ks),e(ks,Xe),e(ks,ie),e(ie,Ze),e(ks,sa),e(ks,ce),e(ce,ea),e(ks,aa),e(ks,he),e(he,ta),e(ks,na),h(s,Ee,m),z(Ys,s,m),h(s,xe,m),h(s,us,m),e(us,la),e(us,Ks),e(Ks,fe),e(fe,ra),e(us,oa),e(us,me),e(me,pa),e(us,ia),e(us,de),e(de,ca),e(us,ha),h(s,ze,m),z(Js,s,m),h(s,qe,m),h(s,rs,m),e(rs,fa),e(rs,te),e(te,ma),e(rs,da),e(rs,ue),e(ue,ua),e(rs,_a),e(rs,_e),e(_e,ga),e(rs,ja),e(rs,ge),e(ge,$a),e(rs,wa),h(s,Te,m),h(s,Qs,m),e(Qs,je),e(je,ka),e(Qs,ba),h(s,Ce,m),z(Fs,s,m),h(s,Ae,m),h(s,Ts,m),e(Ts,Os),e(Os,$e),z(Vs,$e,null),e(Ts,va),e(Ts,we),e(we,ya),h(s,Pe,m),z(Ss,s,m),Me=!0},p(s,[m]){const Xs={};m&2&&(Xs.$$scope={dirty:m,ctx:s}),Fs.$set(Xs);const ke={};m&2&&(ke.$$scope={dirty:m,ctx:s}),Ss.$set(ke)},i(s){Me||(q(k.$$.fragment,s),q(I.$$.fragment,s),q(S.$$.fragment,s),q(R.$$.fragment,s),q(ds.$$.fragment,s),q(Rs.$$.fragment,s),q(Ys.$$.fragment,s),q(Js.$$.fragment,s),q(Fs.$$.fragment,s),q(Vs.$$.fragment,s),q(Ss.$$.fragment,s),Me=!0)},o(s){T(k.$$.fragment,s),T(I.$$.fragment,s),T(S.$$.fragment,s),T(R.$$.fragment,s),T(ds.$$.fragment,s),T(Rs.$$.fragment,s),T(Ys.$$.fragment,s),T(Js.$$.fragment,s),T(Fs.$$.fragment,s),T(Vs.$$.fragment,s),T(Ss.$$.fragment,s),Me=!1},d(s){a(n),s&&a(d),s&&a(t),C(k),s&&a(V),s&&a(W),s&&a(X),s&&a(y),s&&a(ps),s&&a(P),C(I),s&&a(U),s&&a(O),s&&a(b),C(S,s),s&&a(js),s&&a(G),s&&a(ts),C(R,s),s&&a(Q),s&&a(A),s&&a(Us),s&&a(ms),C(ds),s&&a(Gs),s&&a(zs),s&&a(be),C(Rs,s),s&&a(ve),s&&a(ae),s&&a(ye),s&&a(vs),s&&a(Ee),C(Ys,s),s&&a(xe),s&&a(us),s&&a(ze),C(Js,s),s&&a(qe),s&&a(rs),s&&a(Te),s&&a(Qs),s&&a(Ce),C(Fs,s),s&&a(Ae),s&&a(Ts),C(Vs),s&&a(Pe),C(Ss,s)}}}const Tt={local:"multiple-choice",sections:[{local:"load-swag-dataset",title:"Load SWAG dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Multiple choice"};function Ct(M){return gt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ot extends mt{constructor(n){super();dt(this,n,Ct,qt,ut,{})}}export{Ot as default,Tt as metadata};
