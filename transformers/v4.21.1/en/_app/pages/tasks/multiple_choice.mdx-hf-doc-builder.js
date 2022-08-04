import{S as ht,i as ft,s as mt,e as p,k as _,w as x,t as l,M as ut,c as i,d as a,m as g,a as c,x as z,h as r,b as $,G as e,g as h,y as q,q as T,o as C,B as A,v as dt,L as it}from"../../chunks/vendor-hf-doc-builder.js";import{T as ct}from"../../chunks/Tip-hf-doc-builder.js";import{I as Se}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ts}from"../../chunks/CodeBlock-hf-doc-builder.js";import{F as pt,M as Le}from"../../chunks/Markdown-hf-doc-builder.js";function _t(F){let n,u;return n=new ts({props:{code:`from dataclasses import dataclass
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
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`}}),{c(){x(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,d){q(n,t,d),u=!0},p:it,i(t){u||(T(n.$$.fragment,t),u=!0)},o(t){C(n.$$.fragment,t),u=!1},d(t){A(n,t)}}}function gt(F){let n,u;return n=new Le({props:{$$slots:{default:[_t]},$$scope:{ctx:F}}}),{c(){x(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,d){q(n,t,d),u=!0},p(t,d){const w={};d&2&&(w.$$scope={dirty:d,ctx:t}),n.$set(w)},i(t){u||(T(n.$$.fragment,t),u=!0)},o(t){C(n.$$.fragment,t),u=!1},d(t){A(n,t)}}}function jt(F){let n,u;return n=new ts({props:{code:`from dataclasses import dataclass
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
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`}}),{c(){x(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,d){q(n,t,d),u=!0},p:it,i(t){u||(T(n.$$.fragment,t),u=!0)},o(t){C(n.$$.fragment,t),u=!1},d(t){A(n,t)}}}function $t(F){let n,u;return n=new Le({props:{$$slots:{default:[jt]},$$scope:{ctx:F}}}),{c(){x(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,d){q(n,t,d),u=!0},p(t,d){const w={};d&2&&(w.$$scope={dirty:d,ctx:t}),n.$set(w)},i(t){u||(T(n.$$.fragment,t),u=!0)},o(t){C(n.$$.fragment,t),u=!1},d(t){A(n,t)}}}function wt(F){let n,u,t,d,w;return{c(){n=p("p"),u=l("If you aren\u2019t familiar with fine-tuning a model with Trainer, take a look at the basic tutorial "),t=p("a"),d=l("here"),w=l("!"),this.h()},l(k){n=i(k,"P",{});var v=c(n);u=r(v,"If you aren\u2019t familiar with fine-tuning a model with Trainer, take a look at the basic tutorial "),t=i(v,"A",{href:!0});var O=c(t);d=r(O,"here"),O.forEach(a),w=r(v,"!"),v.forEach(a),this.h()},h(){$(t,"href","../training#finetune-with-trainer")},m(k,v){h(k,n,v),e(n,u),e(n,t),e(t,d),e(n,w)},d(k){k&&a(n)}}}function kt(F){let n,u,t,d,w,k,v,O,L,ns,W,ls,rs,y,Y,S,V,K,ss,es,X,J,B,hs,U,G,P,os,N,fs,R,ps,M,Z;return v=new ts({props:{code:`from transformers import AutoModelForMultipleChoice, TrainingArguments, Trainer

model = AutoModelForMultipleChoice.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForMultipleChoice, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),L=new ct({props:{$$slots:{default:[wt]},$$scope:{ctx:F}}}),M=new ts({props:{code:`training_args = TrainingArguments(
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

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){n=p("p"),u=l("Load BERT with "),t=p("a"),d=l("AutoModelForMultipleChoice"),w=l(":"),k=_(),x(v.$$.fragment),O=_(),x(L.$$.fragment),ns=_(),W=p("p"),ls=l("At this point, only three steps remain:"),rs=_(),y=p("ol"),Y=p("li"),S=l("Define your training hyperparameters in "),V=p("a"),K=l("TrainingArguments"),ss=l("."),es=_(),X=p("li"),J=l("Pass the training arguments to "),B=p("a"),hs=l("Trainer"),U=l(" along with the model, dataset, tokenizer, and data collator."),G=_(),P=p("li"),os=l("Call "),N=p("a"),fs=l("train()"),R=l(" to fine-tune your model."),ps=_(),x(M.$$.fragment),this.h()},l(f){n=i(f,"P",{});var b=c(n);u=r(b,"Load BERT with "),t=i(b,"A",{href:!0});var H=c(t);d=r(H,"AutoModelForMultipleChoice"),H.forEach(a),w=r(b,":"),b.forEach(a),k=g(f),z(v.$$.fragment,f),O=g(f),z(L.$$.fragment,f),ns=g(f),W=i(f,"P",{});var gs=c(W);ls=r(gs,"At this point, only three steps remain:"),gs.forEach(a),rs=g(f),y=i(f,"OL",{});var I=c(y);Y=i(I,"LI",{});var Q=c(Y);S=r(Q,"Define your training hyperparameters in "),V=i(Q,"A",{href:!0});var ms=c(V);K=r(ms,"TrainingArguments"),ms.forEach(a),ss=r(Q,"."),Q.forEach(a),es=g(I),X=i(I,"LI",{});var D=c(X);J=r(D,"Pass the training arguments to "),B=i(D,"A",{href:!0});var js=c(B);hs=r(js,"Trainer"),js.forEach(a),U=r(D," along with the model, dataset, tokenizer, and data collator."),D.forEach(a),G=g(I),P=i(I,"LI",{});var E=c(P);os=r(E,"Call "),N=i(E,"A",{href:!0});var us=c(N);fs=r(us,"train()"),us.forEach(a),R=r(E," to fine-tune your model."),E.forEach(a),I.forEach(a),ps=g(f),z(M.$$.fragment,f),this.h()},h(){$(t,"href","/docs/transformers/v4.21.1/en/model_doc/auto#transformers.AutoModelForMultipleChoice"),$(V,"href","/docs/transformers/v4.21.1/en/main_classes/trainer#transformers.TrainingArguments"),$(B,"href","/docs/transformers/v4.21.1/en/main_classes/trainer#transformers.Trainer"),$(N,"href","/docs/transformers/v4.21.1/en/main_classes/trainer#transformers.Trainer.train")},m(f,b){h(f,n,b),e(n,u),e(n,t),e(t,d),e(n,w),h(f,k,b),q(v,f,b),h(f,O,b),q(L,f,b),h(f,ns,b),h(f,W,b),e(W,ls),h(f,rs,b),h(f,y,b),e(y,Y),e(Y,S),e(Y,V),e(V,K),e(Y,ss),e(y,es),e(y,X),e(X,J),e(X,B),e(B,hs),e(X,U),e(y,G),e(y,P),e(P,os),e(P,N),e(N,fs),e(P,R),h(f,ps,b),q(M,f,b),Z=!0},p(f,b){const H={};b&2&&(H.$$scope={dirty:b,ctx:f}),L.$set(H)},i(f){Z||(T(v.$$.fragment,f),T(L.$$.fragment,f),T(M.$$.fragment,f),Z=!0)},o(f){C(v.$$.fragment,f),C(L.$$.fragment,f),C(M.$$.fragment,f),Z=!1},d(f){f&&a(n),f&&a(k),A(v,f),f&&a(O),A(L,f),f&&a(ns),f&&a(W),f&&a(rs),f&&a(y),f&&a(ps),A(M,f)}}}function bt(F){let n,u;return n=new Le({props:{$$slots:{default:[kt]},$$scope:{ctx:F}}}),{c(){x(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,d){q(n,t,d),u=!0},p(t,d){const w={};d&2&&(w.$$scope={dirty:d,ctx:t}),n.$set(w)},i(t){u||(T(n.$$.fragment,t),u=!0)},o(t){C(n.$$.fragment,t),u=!1},d(t){A(n,t)}}}function vt(F){let n,u,t,d,w;return{c(){n=p("p"),u=l("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),t=p("a"),d=l("here"),w=l("!"),this.h()},l(k){n=i(k,"P",{});var v=c(n);u=r(v,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),t=i(v,"A",{href:!0});var O=c(t);d=r(O,"here"),O.forEach(a),w=r(v,"!"),v.forEach(a),this.h()},h(){$(t,"href","training#finetune-with-keras")},m(k,v){h(k,n,v),e(n,u),e(n,t),e(t,d),e(n,w)},d(k){k&&a(n)}}}function yt(F){let n,u,t,d,w,k,v,O,L,ns,W,ls,rs,y,Y,S,V,K,ss,es,X,J,B,hs,U,G,P,os,N,fs,R,ps,M,Z,f,b,H,gs,I,Q,ms,D,js,E,us,ys,Is,Ts,is,Cs;return S=new ts({props:{code:`data_collator = DataCollatorForMultipleChoice(tokenizer=tokenizer)
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
<span class="hljs-meta">... </span>)`}}),K=new ct({props:{$$slots:{default:[vt]},$$scope:{ctx:F}}}),B=new ts({props:{code:`from transformers import create_optimizer

batch_size = 16
num_train_epochs = 2
total_train_steps = (len(tokenized_swag["train"]) // batch_size) * num_train_epochs
optimizer, schedule = create_optimizer(init_lr=5e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer

<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size = <span class="hljs-number">16</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_train_epochs = <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>total_train_steps = (<span class="hljs-built_in">len</span>(tokenized_swag[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size) * num_train_epochs
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">5e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),R=new ts({props:{code:`from transformers import TFAutoModelForMultipleChoice

model = TFAutoModelForMultipleChoice.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),Q=new ts({props:{code:`model.compile(
    optimizer=optimizer,
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(
<span class="hljs-meta">... </span>    optimizer=optimizer,
<span class="hljs-meta">... </span>    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=<span class="hljs-literal">True</span>),
<span class="hljs-meta">... </span>)`}}),is=new ts({props:{code:"model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=2)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=<span class="hljs-number">2</span>)'}}),{c(){n=p("p"),u=l("To fine-tune a model in TensorFlow, start by converting your datasets to the "),t=p("code"),d=l("tf.data.Dataset"),w=l(" format with "),k=p("a"),v=l("to_tf_dataset"),O=l(". Specify inputs in "),L=p("code"),ns=l("columns"),W=l(", targets in "),ls=p("code"),rs=l("label_cols"),y=l(", whether to shuffle the dataset order, batch size, and the data collator:"),Y=_(),x(S.$$.fragment),V=_(),x(K.$$.fragment),ss=_(),es=p("p"),X=l("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),J=_(),x(B.$$.fragment),hs=_(),U=p("p"),G=l("Load BERT with "),P=p("a"),os=l("TFAutoModelForMultipleChoice"),N=l(":"),fs=_(),x(R.$$.fragment),ps=_(),M=p("p"),Z=l("Configure the model for training with "),f=p("a"),b=p("code"),H=l("compile"),gs=l(":"),I=_(),x(Q.$$.fragment),ms=_(),D=p("p"),js=l("Call "),E=p("a"),us=p("code"),ys=l("fit"),Is=l(" to fine-tune the model:"),Ts=_(),x(is.$$.fragment),this.h()},l(o){n=i(o,"P",{});var j=c(n);u=r(j,"To fine-tune a model in TensorFlow, start by converting your datasets to the "),t=i(j,"CODE",{});var Es=c(t);d=r(Es,"tf.data.Dataset"),Es.forEach(a),w=r(j," format with "),k=i(j,"A",{href:!0,rel:!0});var Qs=c(k);v=r(Qs,"to_tf_dataset"),Qs.forEach(a),O=r(j,". Specify inputs in "),L=i(j,"CODE",{});var As=c(L);ns=r(As,"columns"),As.forEach(a),W=r(j,", targets in "),ls=i(j,"CODE",{});var Vs=c(ls);rs=r(Vs,"label_cols"),Vs.forEach(a),y=r(j,", whether to shuffle the dataset order, batch size, and the data collator:"),j.forEach(a),Y=g(o),z(S.$$.fragment,o),V=g(o),z(K.$$.fragment,o),ss=g(o),es=i(o,"P",{});var Xs=c(es);X=r(Xs,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Xs.forEach(a),J=g(o),z(B.$$.fragment,o),hs=g(o),U=i(o,"P",{});var xs=c(U);G=r(xs,"Load BERT with "),P=i(xs,"A",{href:!0});var ds=c(P);os=r(ds,"TFAutoModelForMultipleChoice"),ds.forEach(a),N=r(xs,":"),xs.forEach(a),fs=g(o),z(R.$$.fragment,o),ps=g(o),M=i(o,"P",{});var cs=c(M);Z=r(cs,"Configure the model for training with "),f=i(cs,"A",{href:!0,rel:!0});var Ps=c(f);b=i(Ps,"CODE",{});var ws=c(b);H=r(ws,"compile"),ws.forEach(a),Ps.forEach(a),gs=r(cs,":"),cs.forEach(a),I=g(o),z(Q.$$.fragment,o),ms=g(o),D=i(o,"P",{});var Ms=c(D);js=r(Ms,"Call "),E=i(Ms,"A",{href:!0,rel:!0});var Ds=c(E);us=i(Ds,"CODE",{});var Zs=c(us);ys=r(Zs,"fit"),Zs.forEach(a),Ds.forEach(a),Is=r(Ms," to fine-tune the model:"),Ms.forEach(a),Ts=g(o),z(is.$$.fragment,o),this.h()},h(){$(k,"href","https://huggingface.co/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Dataset.to_tf_dataset"),$(k,"rel","nofollow"),$(P,"href","/docs/transformers/v4.21.1/en/model_doc/auto#transformers.TFAutoModelForMultipleChoice"),$(f,"href","https://keras.io/api/models/model_training_apis/#compile-method"),$(f,"rel","nofollow"),$(E,"href","https://keras.io/api/models/model_training_apis/#fit-method"),$(E,"rel","nofollow")},m(o,j){h(o,n,j),e(n,u),e(n,t),e(t,d),e(n,w),e(n,k),e(k,v),e(n,O),e(n,L),e(L,ns),e(n,W),e(n,ls),e(ls,rs),e(n,y),h(o,Y,j),q(S,o,j),h(o,V,j),q(K,o,j),h(o,ss,j),h(o,es,j),e(es,X),h(o,J,j),q(B,o,j),h(o,hs,j),h(o,U,j),e(U,G),e(U,P),e(P,os),e(U,N),h(o,fs,j),q(R,o,j),h(o,ps,j),h(o,M,j),e(M,Z),e(M,f),e(f,b),e(b,H),e(M,gs),h(o,I,j),q(Q,o,j),h(o,ms,j),h(o,D,j),e(D,js),e(D,E),e(E,us),e(us,ys),e(D,Is),h(o,Ts,j),q(is,o,j),Cs=!0},p(o,j){const Es={};j&2&&(Es.$$scope={dirty:j,ctx:o}),K.$set(Es)},i(o){Cs||(T(S.$$.fragment,o),T(K.$$.fragment,o),T(B.$$.fragment,o),T(R.$$.fragment,o),T(Q.$$.fragment,o),T(is.$$.fragment,o),Cs=!0)},o(o){C(S.$$.fragment,o),C(K.$$.fragment,o),C(B.$$.fragment,o),C(R.$$.fragment,o),C(Q.$$.fragment,o),C(is.$$.fragment,o),Cs=!1},d(o){o&&a(n),o&&a(Y),A(S,o),o&&a(V),A(K,o),o&&a(ss),o&&a(es),o&&a(J),A(B,o),o&&a(hs),o&&a(U),o&&a(fs),A(R,o),o&&a(ps),o&&a(M),o&&a(I),A(Q,o),o&&a(ms),o&&a(D),o&&a(Ts),A(is,o)}}}function Et(F){let n,u;return n=new Le({props:{$$slots:{default:[yt]},$$scope:{ctx:F}}}),{c(){x(n.$$.fragment)},l(t){z(n.$$.fragment,t)},m(t,d){q(n,t,d),u=!0},p(t,d){const w={};d&2&&(w.$$scope={dirty:d,ctx:t}),n.$set(w)},i(t){u||(T(n.$$.fragment,t),u=!0)},o(t){C(n.$$.fragment,t),u=!1},d(t){A(n,t)}}}function xt(F){let n,u,t,d,w,k,v,O,L,ns,W,ls,rs,y,Y,S,V,K,ss,es,X,J,B,hs,U,G,P,os,N,fs,R,ps,M,Z,f,b,H,gs,I,Q,ms,D,js,E,us,ys,Is,Ts,is,Cs,o,j,Es,Qs,As,Vs,Xs,xs,ds,cs,Ps,ws,Ms,Ds,Zs,we,se,Be,ke,Ws,be,ee,Ne,ve,ks,zs,Ie,le,We,Ue,re,Ge,Re,He,Us,Ye,oe,Ke,Je,Qe,$s,Ve,pe,Xe,Ze,ie,sa,ea,ce,aa,ta,ye,Gs,Ee,_s,na,Rs,la,ra,he,oa,pa,fe,ia,ca,xe,Hs,ze,as,ha,ae,fa,ma,me,ua,da,ue,_a,ga,de,ja,$a,qe,Ys,_e,wa,ka,Te,Fs,Ce,qs,Os,ge,Ks,ba,je,va,Ae,Ss,Pe;return k=new Se({}),N=new Se({}),H=new ts({props:{code:`from datasets import load_dataset

swag = load_dataset("swag", "regular")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>swag = load_dataset(<span class="hljs-string">&quot;swag&quot;</span>, <span class="hljs-string">&quot;regular&quot;</span>)`}}),D=new ts({props:{code:'swag["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>swag[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
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
 <span class="hljs-string">&#x27;video-id&#x27;</span>: <span class="hljs-string">&#x27;anetv_jkn6uvmqwh4&#x27;</span>}`}}),ws=new Se({}),Ws=new ts({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),Gs=new ts({props:{code:`ending_names = ["ending0", "ending1", "ending2", "ending3"]


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
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> {k: [v[i : i + <span class="hljs-number">4</span>] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">len</span>(v), <span class="hljs-number">4</span>)] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> tokenized_examples.items()}`}}),Hs=new ts({props:{code:"tokenized_swag = swag.map(preprocess_function, batched=True)",highlighted:'tokenized_swag = swag.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)'}}),Fs=new pt({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[$t],pytorch:[gt]},$$scope:{ctx:F}}}),Ks=new Se({}),Ss=new pt({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Et],pytorch:[bt]},$$scope:{ctx:F}}}),{c(){n=p("meta"),u=_(),t=p("h1"),d=p("a"),w=p("span"),x(k.$$.fragment),v=_(),O=p("span"),L=l("Multiple choice"),ns=_(),W=p("p"),ls=l("A multiple choice task is similar to question answering, except several candidate answers are provided along with a context. The model is trained to select the correct answer from multiple inputs given a context."),rs=_(),y=p("p"),Y=l("This guide will show you how to fine-tune "),S=p("a"),V=l("BERT"),K=l(" on the "),ss=p("code"),es=l("regular"),X=l(" configuration of the "),J=p("a"),B=l("SWAG"),hs=l(" dataset to select the best answer given multiple options and some context."),U=_(),G=p("h2"),P=p("a"),os=p("span"),x(N.$$.fragment),fs=_(),R=p("span"),ps=l("Load SWAG dataset"),M=_(),Z=p("p"),f=l("Load the SWAG dataset from the \u{1F917} Datasets library:"),b=_(),x(H.$$.fragment),gs=_(),I=p("p"),Q=l("Then take a look at an example:"),ms=_(),x(D.$$.fragment),js=_(),E=p("p"),us=l("The "),ys=p("code"),Is=l("sent1"),Ts=l(" and "),is=p("code"),Cs=l("sent2"),o=l(" fields show how a sentence begins, and each "),j=p("code"),Es=l("ending"),Qs=l(" field shows how a sentence could end. Given the sentence beginning, the model must pick the correct sentence ending as indicated by the "),As=p("code"),Vs=l("label"),Xs=l(" field."),xs=_(),ds=p("h2"),cs=p("a"),Ps=p("span"),x(ws.$$.fragment),Ms=_(),Ds=p("span"),Zs=l("Preprocess"),we=_(),se=p("p"),Be=l("Load the BERT tokenizer to process the start of each sentence and the four possible endings:"),ke=_(),x(Ws.$$.fragment),be=_(),ee=p("p"),Ne=l("The preprocessing function needs to do:"),ve=_(),ks=p("ol"),zs=p("li"),Ie=l("Make four copies of the "),le=p("code"),We=l("sent1"),Ue=l(" field so you can combine each of them with "),re=p("code"),Ge=l("sent2"),Re=l(" to recreate how a sentence starts."),He=_(),Us=p("li"),Ye=l("Combine "),oe=p("code"),Ke=l("sent2"),Je=l(" with each of the four possible sentence endings."),Qe=_(),$s=p("li"),Ve=l("Flatten these two lists so you can tokenize them, and then unflatten them afterward so each example has a corresponding "),pe=p("code"),Xe=l("input_ids"),Ze=l(", "),ie=p("code"),sa=l("attention_mask"),ea=l(", and "),ce=p("code"),aa=l("labels"),ta=l(" field."),ye=_(),x(Gs.$$.fragment),Ee=_(),_s=p("p"),na=l("Use \u{1F917} Datasets "),Rs=p("a"),la=l("map"),ra=l(" function to apply the preprocessing function over the entire dataset. You can speed up the "),he=p("code"),oa=l("map"),pa=l(" function by setting "),fe=p("code"),ia=l("batched=True"),ca=l(" to process multiple elements of the dataset at once:"),xe=_(),x(Hs.$$.fragment),ze=_(),as=p("p"),ha=l("\u{1F917} Transformers doesn\u2019t have a data collator for multiple choice, so you will need to create one. You can adapt the "),ae=p("a"),fa=l("DataCollatorWithPadding"),ma=l(" to create a batch of examples for multiple choice. It will also "),me=p("em"),ua=l("dynamically pad"),da=l(" your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ue=p("code"),_a=l("tokenizer"),ga=l(" function by setting "),de=p("code"),ja=l("padding=True"),$a=l(", dynamic padding is more efficient."),qe=_(),Ys=p("p"),_e=p("code"),wa=l("DataCollatorForMultipleChoice"),ka=l(" will flatten all the model inputs, apply padding, and then unflatten the results:"),Te=_(),x(Fs.$$.fragment),Ce=_(),qs=p("h2"),Os=p("a"),ge=p("span"),x(Ks.$$.fragment),ba=_(),je=p("span"),va=l("Train"),Ae=_(),x(Ss.$$.fragment),this.h()},l(s){const m=ut('[data-svelte="svelte-1phssyn"]',document.head);n=i(m,"META",{name:!0,content:!0}),m.forEach(a),u=g(s),t=i(s,"H1",{class:!0});var Js=c(t);d=i(Js,"A",{id:!0,class:!0,href:!0});var $e=c(d);w=i($e,"SPAN",{});var Ea=c(w);z(k.$$.fragment,Ea),Ea.forEach(a),$e.forEach(a),v=g(Js),O=i(Js,"SPAN",{});var xa=c(O);L=r(xa,"Multiple choice"),xa.forEach(a),Js.forEach(a),ns=g(s),W=i(s,"P",{});var za=c(W);ls=r(za,"A multiple choice task is similar to question answering, except several candidate answers are provided along with a context. The model is trained to select the correct answer from multiple inputs given a context."),za.forEach(a),rs=g(s),y=i(s,"P",{});var Ls=c(y);Y=r(Ls,"This guide will show you how to fine-tune "),S=i(Ls,"A",{href:!0,rel:!0});var qa=c(S);V=r(qa,"BERT"),qa.forEach(a),K=r(Ls," on the "),ss=i(Ls,"CODE",{});var Ta=c(ss);es=r(Ta,"regular"),Ta.forEach(a),X=r(Ls," configuration of the "),J=i(Ls,"A",{href:!0,rel:!0});var Ca=c(J);B=r(Ca,"SWAG"),Ca.forEach(a),hs=r(Ls," dataset to select the best answer given multiple options and some context."),Ls.forEach(a),U=g(s),G=i(s,"H2",{class:!0});var Me=c(G);P=i(Me,"A",{id:!0,class:!0,href:!0});var Aa=c(P);os=i(Aa,"SPAN",{});var Pa=c(os);z(N.$$.fragment,Pa),Pa.forEach(a),Aa.forEach(a),fs=g(Me),R=i(Me,"SPAN",{});var Ma=c(R);ps=r(Ma,"Load SWAG dataset"),Ma.forEach(a),Me.forEach(a),M=g(s),Z=i(s,"P",{});var Da=c(Z);f=r(Da,"Load the SWAG dataset from the \u{1F917} Datasets library:"),Da.forEach(a),b=g(s),z(H.$$.fragment,s),gs=g(s),I=i(s,"P",{});var Fa=c(I);Q=r(Fa,"Then take a look at an example:"),Fa.forEach(a),ms=g(s),z(D.$$.fragment,s),js=g(s),E=i(s,"P",{});var bs=c(E);us=r(bs,"The "),ys=i(bs,"CODE",{});var Oa=c(ys);Is=r(Oa,"sent1"),Oa.forEach(a),Ts=r(bs," and "),is=i(bs,"CODE",{});var Sa=c(is);Cs=r(Sa,"sent2"),Sa.forEach(a),o=r(bs," fields show how a sentence begins, and each "),j=i(bs,"CODE",{});var La=c(j);Es=r(La,"ending"),La.forEach(a),Qs=r(bs," field shows how a sentence could end. Given the sentence beginning, the model must pick the correct sentence ending as indicated by the "),As=i(bs,"CODE",{});var Ba=c(As);Vs=r(Ba,"label"),Ba.forEach(a),Xs=r(bs," field."),bs.forEach(a),xs=g(s),ds=i(s,"H2",{class:!0});var De=c(ds);cs=i(De,"A",{id:!0,class:!0,href:!0});var Na=c(cs);Ps=i(Na,"SPAN",{});var Ia=c(Ps);z(ws.$$.fragment,Ia),Ia.forEach(a),Na.forEach(a),Ms=g(De),Ds=i(De,"SPAN",{});var Wa=c(Ds);Zs=r(Wa,"Preprocess"),Wa.forEach(a),De.forEach(a),we=g(s),se=i(s,"P",{});var Ua=c(se);Be=r(Ua,"Load the BERT tokenizer to process the start of each sentence and the four possible endings:"),Ua.forEach(a),ke=g(s),z(Ws.$$.fragment,s),be=g(s),ee=i(s,"P",{});var Ga=c(ee);Ne=r(Ga,"The preprocessing function needs to do:"),Ga.forEach(a),ve=g(s),ks=i(s,"OL",{});var te=c(ks);zs=i(te,"LI",{});var ne=c(zs);Ie=r(ne,"Make four copies of the "),le=i(ne,"CODE",{});var Ra=c(le);We=r(Ra,"sent1"),Ra.forEach(a),Ue=r(ne," field so you can combine each of them with "),re=i(ne,"CODE",{});var Ha=c(re);Ge=r(Ha,"sent2"),Ha.forEach(a),Re=r(ne," to recreate how a sentence starts."),ne.forEach(a),He=g(te),Us=i(te,"LI",{});var Fe=c(Us);Ye=r(Fe,"Combine "),oe=i(Fe,"CODE",{});var Ya=c(oe);Ke=r(Ya,"sent2"),Ya.forEach(a),Je=r(Fe," with each of the four possible sentence endings."),Fe.forEach(a),Qe=g(te),$s=i(te,"LI",{});var Bs=c($s);Ve=r(Bs,"Flatten these two lists so you can tokenize them, and then unflatten them afterward so each example has a corresponding "),pe=i(Bs,"CODE",{});var Ka=c(pe);Xe=r(Ka,"input_ids"),Ka.forEach(a),Ze=r(Bs,", "),ie=i(Bs,"CODE",{});var Ja=c(ie);sa=r(Ja,"attention_mask"),Ja.forEach(a),ea=r(Bs,", and "),ce=i(Bs,"CODE",{});var Qa=c(ce);aa=r(Qa,"labels"),Qa.forEach(a),ta=r(Bs," field."),Bs.forEach(a),te.forEach(a),ye=g(s),z(Gs.$$.fragment,s),Ee=g(s),_s=i(s,"P",{});var Ns=c(_s);na=r(Ns,"Use \u{1F917} Datasets "),Rs=i(Ns,"A",{href:!0,rel:!0});var Va=c(Rs);la=r(Va,"map"),Va.forEach(a),ra=r(Ns," function to apply the preprocessing function over the entire dataset. You can speed up the "),he=i(Ns,"CODE",{});var Xa=c(he);oa=r(Xa,"map"),Xa.forEach(a),pa=r(Ns," function by setting "),fe=i(Ns,"CODE",{});var Za=c(fe);ia=r(Za,"batched=True"),Za.forEach(a),ca=r(Ns," to process multiple elements of the dataset at once:"),Ns.forEach(a),xe=g(s),z(Hs.$$.fragment,s),ze=g(s),as=i(s,"P",{});var vs=c(as);ha=r(vs,"\u{1F917} Transformers doesn\u2019t have a data collator for multiple choice, so you will need to create one. You can adapt the "),ae=i(vs,"A",{href:!0});var st=c(ae);fa=r(st,"DataCollatorWithPadding"),st.forEach(a),ma=r(vs," to create a batch of examples for multiple choice. It will also "),me=i(vs,"EM",{});var et=c(me);ua=r(et,"dynamically pad"),et.forEach(a),da=r(vs," your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ue=i(vs,"CODE",{});var at=c(ue);_a=r(at,"tokenizer"),at.forEach(a),ga=r(vs," function by setting "),de=i(vs,"CODE",{});var tt=c(de);ja=r(tt,"padding=True"),tt.forEach(a),$a=r(vs,", dynamic padding is more efficient."),vs.forEach(a),qe=g(s),Ys=i(s,"P",{});var ya=c(Ys);_e=i(ya,"CODE",{});var nt=c(_e);wa=r(nt,"DataCollatorForMultipleChoice"),nt.forEach(a),ka=r(ya," will flatten all the model inputs, apply padding, and then unflatten the results:"),ya.forEach(a),Te=g(s),z(Fs.$$.fragment,s),Ce=g(s),qs=i(s,"H2",{class:!0});var Oe=c(qs);Os=i(Oe,"A",{id:!0,class:!0,href:!0});var lt=c(Os);ge=i(lt,"SPAN",{});var rt=c(ge);z(Ks.$$.fragment,rt),rt.forEach(a),lt.forEach(a),ba=g(Oe),je=i(Oe,"SPAN",{});var ot=c(je);va=r(ot,"Train"),ot.forEach(a),Oe.forEach(a),Ae=g(s),z(Ss.$$.fragment,s),this.h()},h(){$(n,"name","hf:doc:metadata"),$(n,"content",JSON.stringify(zt)),$(d,"id","multiple-choice"),$(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(d,"href","#multiple-choice"),$(t,"class","relative group"),$(S,"href","https://huggingface.co/bert-base-uncased"),$(S,"rel","nofollow"),$(J,"href","https://huggingface.co/datasets/swag"),$(J,"rel","nofollow"),$(P,"id","load-swag-dataset"),$(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(P,"href","#load-swag-dataset"),$(G,"class","relative group"),$(cs,"id","preprocess"),$(cs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(cs,"href","#preprocess"),$(ds,"class","relative group"),$(Rs,"href","https://huggingface.co/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Dataset.map"),$(Rs,"rel","nofollow"),$(ae,"href","/docs/transformers/v4.21.1/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),$(Os,"id","train"),$(Os,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(Os,"href","#train"),$(qs,"class","relative group")},m(s,m){e(document.head,n),h(s,u,m),h(s,t,m),e(t,d),e(d,w),q(k,w,null),e(t,v),e(t,O),e(O,L),h(s,ns,m),h(s,W,m),e(W,ls),h(s,rs,m),h(s,y,m),e(y,Y),e(y,S),e(S,V),e(y,K),e(y,ss),e(ss,es),e(y,X),e(y,J),e(J,B),e(y,hs),h(s,U,m),h(s,G,m),e(G,P),e(P,os),q(N,os,null),e(G,fs),e(G,R),e(R,ps),h(s,M,m),h(s,Z,m),e(Z,f),h(s,b,m),q(H,s,m),h(s,gs,m),h(s,I,m),e(I,Q),h(s,ms,m),q(D,s,m),h(s,js,m),h(s,E,m),e(E,us),e(E,ys),e(ys,Is),e(E,Ts),e(E,is),e(is,Cs),e(E,o),e(E,j),e(j,Es),e(E,Qs),e(E,As),e(As,Vs),e(E,Xs),h(s,xs,m),h(s,ds,m),e(ds,cs),e(cs,Ps),q(ws,Ps,null),e(ds,Ms),e(ds,Ds),e(Ds,Zs),h(s,we,m),h(s,se,m),e(se,Be),h(s,ke,m),q(Ws,s,m),h(s,be,m),h(s,ee,m),e(ee,Ne),h(s,ve,m),h(s,ks,m),e(ks,zs),e(zs,Ie),e(zs,le),e(le,We),e(zs,Ue),e(zs,re),e(re,Ge),e(zs,Re),e(ks,He),e(ks,Us),e(Us,Ye),e(Us,oe),e(oe,Ke),e(Us,Je),e(ks,Qe),e(ks,$s),e($s,Ve),e($s,pe),e(pe,Xe),e($s,Ze),e($s,ie),e(ie,sa),e($s,ea),e($s,ce),e(ce,aa),e($s,ta),h(s,ye,m),q(Gs,s,m),h(s,Ee,m),h(s,_s,m),e(_s,na),e(_s,Rs),e(Rs,la),e(_s,ra),e(_s,he),e(he,oa),e(_s,pa),e(_s,fe),e(fe,ia),e(_s,ca),h(s,xe,m),q(Hs,s,m),h(s,ze,m),h(s,as,m),e(as,ha),e(as,ae),e(ae,fa),e(as,ma),e(as,me),e(me,ua),e(as,da),e(as,ue),e(ue,_a),e(as,ga),e(as,de),e(de,ja),e(as,$a),h(s,qe,m),h(s,Ys,m),e(Ys,_e),e(_e,wa),e(Ys,ka),h(s,Te,m),q(Fs,s,m),h(s,Ce,m),h(s,qs,m),e(qs,Os),e(Os,ge),q(Ks,ge,null),e(qs,ba),e(qs,je),e(je,va),h(s,Ae,m),q(Ss,s,m),Pe=!0},p(s,[m]){const Js={};m&2&&(Js.$$scope={dirty:m,ctx:s}),Fs.$set(Js);const $e={};m&2&&($e.$$scope={dirty:m,ctx:s}),Ss.$set($e)},i(s){Pe||(T(k.$$.fragment,s),T(N.$$.fragment,s),T(H.$$.fragment,s),T(D.$$.fragment,s),T(ws.$$.fragment,s),T(Ws.$$.fragment,s),T(Gs.$$.fragment,s),T(Hs.$$.fragment,s),T(Fs.$$.fragment,s),T(Ks.$$.fragment,s),T(Ss.$$.fragment,s),Pe=!0)},o(s){C(k.$$.fragment,s),C(N.$$.fragment,s),C(H.$$.fragment,s),C(D.$$.fragment,s),C(ws.$$.fragment,s),C(Ws.$$.fragment,s),C(Gs.$$.fragment,s),C(Hs.$$.fragment,s),C(Fs.$$.fragment,s),C(Ks.$$.fragment,s),C(Ss.$$.fragment,s),Pe=!1},d(s){a(n),s&&a(u),s&&a(t),A(k),s&&a(ns),s&&a(W),s&&a(rs),s&&a(y),s&&a(U),s&&a(G),A(N),s&&a(M),s&&a(Z),s&&a(b),A(H,s),s&&a(gs),s&&a(I),s&&a(ms),A(D,s),s&&a(js),s&&a(E),s&&a(xs),s&&a(ds),A(ws),s&&a(we),s&&a(se),s&&a(ke),A(Ws,s),s&&a(be),s&&a(ee),s&&a(ve),s&&a(ks),s&&a(ye),A(Gs,s),s&&a(Ee),s&&a(_s),s&&a(xe),A(Hs,s),s&&a(ze),s&&a(as),s&&a(qe),s&&a(Ys),s&&a(Te),A(Fs,s),s&&a(Ce),s&&a(qs),A(Ks),s&&a(Ae),A(Ss,s)}}}const zt={local:"multiple-choice",sections:[{local:"load-swag-dataset",title:"Load SWAG dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Multiple choice"};function qt(F){return dt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Dt extends ht{constructor(n){super();ft(this,n,qt,xt,mt,{})}}export{Dt as default,zt as metadata};
