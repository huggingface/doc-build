import{S as ht,i as ft,s as mt,e as p,k as _,w as E,t as l,M as dt,c as i,d as a,m as g,a as c,x,h as r,b as $,G as e,g as h,y as z,q as T,o as q,B as C,v as ut,L as it}from"../../chunks/vendor-hf-doc-builder.js";import{T as ct}from"../../chunks/Tip-hf-doc-builder.js";import{I as Fe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ns}from"../../chunks/CodeBlock-hf-doc-builder.js";import{F as pt,M as Oe}from"../../chunks/Markdown-hf-doc-builder.js";function _t(D){let n,d;return n=new ns({props:{code:`from dataclasses import dataclass
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
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`}}),{c(){E(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,u){z(n,t,u),d=!0},p:it,i(t){d||(T(n.$$.fragment,t),d=!0)},o(t){q(n.$$.fragment,t),d=!1},d(t){C(n,t)}}}function gt(D){let n,d;return n=new Oe({props:{$$slots:{default:[_t]},$$scope:{ctx:D}}}),{c(){E(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,u){z(n,t,u),d=!0},p(t,u){const w={};u&2&&(w.$$scope={dirty:u,ctx:t}),n.$set(w)},i(t){d||(T(n.$$.fragment,t),d=!0)},o(t){q(n.$$.fragment,t),d=!1},d(t){C(n,t)}}}function jt(D){let n,d;return n=new ns({props:{code:`from dataclasses import dataclass
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
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`}}),{c(){E(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,u){z(n,t,u),d=!0},p:it,i(t){d||(T(n.$$.fragment,t),d=!0)},o(t){q(n.$$.fragment,t),d=!1},d(t){C(n,t)}}}function $t(D){let n,d;return n=new Oe({props:{$$slots:{default:[jt]},$$scope:{ctx:D}}}),{c(){E(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,u){z(n,t,u),d=!0},p(t,u){const w={};u&2&&(w.$$scope={dirty:u,ctx:t}),n.$set(w)},i(t){d||(T(n.$$.fragment,t),d=!0)},o(t){q(n.$$.fragment,t),d=!1},d(t){C(n,t)}}}function wt(D){let n,d,t,u,w;return{c(){n=p("p"),d=l("If you aren\u2019t familiar with fine-tuning a model with Trainer, take a look at the basic tutorial "),t=p("a"),u=l("here"),w=l("!"),this.h()},l(b){n=i(b,"P",{});var y=c(n);d=r(y,"If you aren\u2019t familiar with fine-tuning a model with Trainer, take a look at the basic tutorial "),t=i(y,"A",{href:!0});var F=c(t);u=r(F,"here"),F.forEach(a),w=r(y,"!"),y.forEach(a),this.h()},h(){$(t,"href","../training#finetune-with-trainer")},m(b,y){h(b,n,y),e(n,d),e(n,t),e(t,u),e(n,w)},d(b){b&&a(n)}}}function kt(D){let n,d,t,u,w,b,y,F,U,G,L,K,es,v,V,J,B,ps,N,ms,I,X,as,is,Q,W,A,ls,M,rs,os,cs,R,O;return y=new ns({props:{code:`from transformers import AutoModelForMultipleChoice, TrainingArguments, Trainer

model = AutoModelForMultipleChoice.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForMultipleChoice, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),U=new ct({props:{$$slots:{default:[wt]},$$scope:{ctx:D}}}),R=new ns({props:{code:`training_args = TrainingArguments(
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

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){n=p("p"),d=l("Load BERT with "),t=p("a"),u=l("AutoModelForMultipleChoice"),w=l(":"),b=_(),E(y.$$.fragment),F=_(),E(U.$$.fragment),G=_(),L=p("p"),K=l("At this point, only three steps remain:"),es=_(),v=p("ol"),V=p("li"),J=l("Define your training hyperparameters in "),B=p("a"),ps=l("TrainingArguments"),N=l("."),ms=_(),I=p("li"),X=l("Pass the training arguments to "),as=p("a"),is=l("Trainer"),Q=l(" along with the model, dataset, tokenizer, and data collator."),W=_(),A=p("li"),ls=l("Call "),M=p("a"),rs=l("train()"),os=l(" to fine-tune your model."),cs=_(),E(R.$$.fragment),this.h()},l(f){n=i(f,"P",{});var k=c(n);d=r(k,"Load BERT with "),t=i(k,"A",{href:!0});var H=c(t);u=r(H,"AutoModelForMultipleChoice"),H.forEach(a),w=r(k,":"),k.forEach(a),b=g(f),x(y.$$.fragment,f),F=g(f),x(U.$$.fragment,f),G=g(f),L=i(f,"P",{});var Z=c(L);K=r(Z,"At this point, only three steps remain:"),Z.forEach(a),es=g(f),v=i(f,"OL",{});var S=c(v);V=i(S,"LI",{});var hs=c(V);J=r(hs,"Define your training hyperparameters in "),B=i(hs,"A",{href:!0});var ds=c(B);ps=r(ds,"TrainingArguments"),ds.forEach(a),N=r(hs,"."),hs.forEach(a),ms=g(S),I=i(S,"LI",{});var Y=c(I);X=r(Y,"Pass the training arguments to "),as=i(Y,"A",{href:!0});var ss=c(as);is=r(ss,"Trainer"),ss.forEach(a),Q=r(Y," along with the model, dataset, tokenizer, and data collator."),Y.forEach(a),W=g(S),A=i(S,"LI",{});var P=c(A);ls=r(P,"Call "),M=i(P,"A",{href:!0});var o=c(M);rs=r(o,"train()"),o.forEach(a),os=r(P," to fine-tune your model."),P.forEach(a),S.forEach(a),cs=g(f),x(R.$$.fragment,f),this.h()},h(){$(t,"href","/docs/transformers/v4.22.1/en/model_doc/auto#transformers.AutoModelForMultipleChoice"),$(B,"href","/docs/transformers/v4.22.1/en/main_classes/trainer#transformers.TrainingArguments"),$(as,"href","/docs/transformers/v4.22.1/en/main_classes/trainer#transformers.Trainer"),$(M,"href","/docs/transformers/v4.22.1/en/main_classes/trainer#transformers.Trainer.train")},m(f,k){h(f,n,k),e(n,d),e(n,t),e(t,u),e(n,w),h(f,b,k),z(y,f,k),h(f,F,k),z(U,f,k),h(f,G,k),h(f,L,k),e(L,K),h(f,es,k),h(f,v,k),e(v,V),e(V,J),e(V,B),e(B,ps),e(V,N),e(v,ms),e(v,I),e(I,X),e(I,as),e(as,is),e(I,Q),e(v,W),e(v,A),e(A,ls),e(A,M),e(M,rs),e(A,os),h(f,cs,k),z(R,f,k),O=!0},p(f,k){const H={};k&2&&(H.$$scope={dirty:k,ctx:f}),U.$set(H)},i(f){O||(T(y.$$.fragment,f),T(U.$$.fragment,f),T(R.$$.fragment,f),O=!0)},o(f){q(y.$$.fragment,f),q(U.$$.fragment,f),q(R.$$.fragment,f),O=!1},d(f){f&&a(n),f&&a(b),C(y,f),f&&a(F),C(U,f),f&&a(G),f&&a(L),f&&a(es),f&&a(v),f&&a(cs),C(R,f)}}}function bt(D){let n,d;return n=new Oe({props:{$$slots:{default:[kt]},$$scope:{ctx:D}}}),{c(){E(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,u){z(n,t,u),d=!0},p(t,u){const w={};u&2&&(w.$$scope={dirty:u,ctx:t}),n.$set(w)},i(t){d||(T(n.$$.fragment,t),d=!0)},o(t){q(n.$$.fragment,t),d=!1},d(t){C(n,t)}}}function vt(D){let n,d,t,u,w;return{c(){n=p("p"),d=l("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),t=p("a"),u=l("here"),w=l("!"),this.h()},l(b){n=i(b,"P",{});var y=c(n);d=r(y,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),t=i(y,"A",{href:!0});var F=c(t);u=r(F,"here"),F.forEach(a),w=r(y,"!"),y.forEach(a),this.h()},h(){$(t,"href","training#finetune-with-keras")},m(b,y){h(b,n,y),e(n,d),e(n,t),e(t,u),e(n,w)},d(b){b&&a(n)}}}function yt(D){let n,d,t,u,w,b,y,F,U,G,L,K,es,v,V,J,B,ps,N,ms,I,X,as,is,Q,W,A,ls,M,rs,os,cs,R,O,f,k,H,Z,S,hs,ds,Y,ss,P;return G=new ns({props:{code:`data_collator = DataCollatorForMultipleChoice(tokenizer=tokenizer)
tf_train_set = model.prepare_tf_dataset(
    tokenized_swag["train"],
    shuffle=True,
    batch_size=batch_size,
    collate_fn=data_collator,
)

tf_validation_set = model.prepare_tf_dataset(
    tokenized_swag["validation"],
    shuffle=False,
    batch_size=batch_size,
    collate_fn=data_collator,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForMultipleChoice(tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>tf_train_set = model.prepare_tf_dataset(
<span class="hljs-meta">... </span>    tokenized_swag[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    batch_size=batch_size,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tf_validation_set = model.prepare_tf_dataset(
<span class="hljs-meta">... </span>    tokenized_swag[<span class="hljs-string">&quot;validation&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    batch_size=batch_size,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)`}}),K=new ct({props:{$$slots:{default:[vt]},$$scope:{ctx:D}}}),B=new ns({props:{code:`from transformers import create_optimizer

batch_size = 16
num_train_epochs = 2
total_train_steps = (len(tokenized_swag["train"]) // batch_size) * num_train_epochs
optimizer, schedule = create_optimizer(init_lr=5e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer

<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size = <span class="hljs-number">16</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_train_epochs = <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>total_train_steps = (<span class="hljs-built_in">len</span>(tokenized_swag[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size) * num_train_epochs
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">5e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),Q=new ns({props:{code:`from transformers import TFAutoModelForMultipleChoice

model = TFAutoModelForMultipleChoice.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),O=new ns({props:{code:"model.compile(optimizer=optimizer)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)'}}),ss=new ns({props:{code:"model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=2)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=<span class="hljs-number">2</span>)'}}),{c(){n=p("p"),d=l("To fine-tune a model in TensorFlow, start by converting your datasets to the "),t=p("code"),u=l("tf.data.Dataset"),w=l(" format with "),b=p("a"),y=l("prepare_tf_dataset()"),F=l("."),U=_(),E(G.$$.fragment),L=_(),E(K.$$.fragment),es=_(),v=p("p"),V=l("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),J=_(),E(B.$$.fragment),ps=_(),N=p("p"),ms=l("Load BERT with "),I=p("a"),X=l("TFAutoModelForMultipleChoice"),as=l(":"),is=_(),E(Q.$$.fragment),W=_(),A=p("p"),ls=l("Configure the model for training with "),M=p("a"),rs=p("code"),os=l("compile"),cs=l(":"),R=_(),E(O.$$.fragment),f=_(),k=p("p"),H=l("Call "),Z=p("a"),S=p("code"),hs=l("fit"),ds=l(" to fine-tune the model:"),Y=_(),E(ss.$$.fragment),this.h()},l(o){n=i(o,"P",{});var j=c(n);d=r(j,"To fine-tune a model in TensorFlow, start by converting your datasets to the "),t=i(j,"CODE",{});var ks=c(t);u=r(ks,"tf.data.Dataset"),ks.forEach(a),w=r(j," format with "),b=i(j,"A",{href:!0});var Us=c(b);y=r(Us,"prepare_tf_dataset()"),Us.forEach(a),F=r(j,"."),j.forEach(a),U=g(o),x(G.$$.fragment,o),L=g(o),x(K.$$.fragment,o),es=g(o),v=i(o,"P",{});var Es=c(v);V=r(Es,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Es.forEach(a),J=g(o),x(B.$$.fragment,o),ps=g(o),N=i(o,"P",{});var xs=c(N);ms=r(xs,"Load BERT with "),I=i(xs,"A",{href:!0});var Gs=c(I);X=r(Gs,"TFAutoModelForMultipleChoice"),Gs.forEach(a),as=r(xs,":"),xs.forEach(a),is=g(o),x(Q.$$.fragment,o),W=g(o),A=i(o,"P",{});var _s=c(A);ls=r(_s,"Configure the model for training with "),M=i(_s,"A",{href:!0,rel:!0});var Rs=c(M);rs=i(Rs,"CODE",{});var Hs=c(rs);os=r(Hs,"compile"),Hs.forEach(a),Rs.forEach(a),cs=r(_s,":"),_s.forEach(a),R=g(o),x(O.$$.fragment,o),f=g(o),k=i(o,"P",{});var gs=c(k);H=r(gs,"Call "),Z=i(gs,"A",{href:!0,rel:!0});var Ys=c(Z);S=i(Ys,"CODE",{});var Ks=c(S);hs=r(Ks,"fit"),Ks.forEach(a),Ys.forEach(a),ds=r(gs," to fine-tune the model:"),gs.forEach(a),Y=g(o),x(ss.$$.fragment,o),this.h()},h(){$(b,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel.prepare_tf_dataset"),$(I,"href","/docs/transformers/v4.22.1/en/model_doc/auto#transformers.TFAutoModelForMultipleChoice"),$(M,"href","https://keras.io/api/models/model_training_apis/#compile-method"),$(M,"rel","nofollow"),$(Z,"href","https://keras.io/api/models/model_training_apis/#fit-method"),$(Z,"rel","nofollow")},m(o,j){h(o,n,j),e(n,d),e(n,t),e(t,u),e(n,w),e(n,b),e(b,y),e(n,F),h(o,U,j),z(G,o,j),h(o,L,j),z(K,o,j),h(o,es,j),h(o,v,j),e(v,V),h(o,J,j),z(B,o,j),h(o,ps,j),h(o,N,j),e(N,ms),e(N,I),e(I,X),e(N,as),h(o,is,j),z(Q,o,j),h(o,W,j),h(o,A,j),e(A,ls),e(A,M),e(M,rs),e(rs,os),e(A,cs),h(o,R,j),z(O,o,j),h(o,f,j),h(o,k,j),e(k,H),e(k,Z),e(Z,S),e(S,hs),e(k,ds),h(o,Y,j),z(ss,o,j),P=!0},p(o,j){const ks={};j&2&&(ks.$$scope={dirty:j,ctx:o}),K.$set(ks)},i(o){P||(T(G.$$.fragment,o),T(K.$$.fragment,o),T(B.$$.fragment,o),T(Q.$$.fragment,o),T(O.$$.fragment,o),T(ss.$$.fragment,o),P=!0)},o(o){q(G.$$.fragment,o),q(K.$$.fragment,o),q(B.$$.fragment,o),q(Q.$$.fragment,o),q(O.$$.fragment,o),q(ss.$$.fragment,o),P=!1},d(o){o&&a(n),o&&a(U),C(G,o),o&&a(L),C(K,o),o&&a(es),o&&a(v),o&&a(J),C(B,o),o&&a(ps),o&&a(N),o&&a(is),C(Q,o),o&&a(W),o&&a(A),o&&a(R),C(O,o),o&&a(f),o&&a(k),o&&a(Y),C(ss,o)}}}function Et(D){let n,d;return n=new Oe({props:{$$slots:{default:[yt]},$$scope:{ctx:D}}}),{c(){E(n.$$.fragment)},l(t){x(n.$$.fragment,t)},m(t,u){z(n,t,u),d=!0},p(t,u){const w={};u&2&&(w.$$scope={dirty:u,ctx:t}),n.$set(w)},i(t){d||(T(n.$$.fragment,t),d=!0)},o(t){q(n.$$.fragment,t),d=!1},d(t){C(n,t)}}}function xt(D){let n,d,t,u,w,b,y,F,U,G,L,K,es,v,V,J,B,ps,N,ms,I,X,as,is,Q,W,A,ls,M,rs,os,cs,R,O,f,k,H,Z,S,hs,ds,Y,ss,P,o,j,ks,Us,Es,xs,Gs,_s,Rs,Hs,gs,Ys,Ks,ge,bs,zs,se,Ds,Se,ee,Le,je,Js,Be,$e,Fs,we,Qs,Ne,ke,js,vs,Ie,ae,We,Ue,te,Ge,Re,He,Os,Ye,ne,Ke,Je,Qe,us,Ve,le,Xe,Ze,re,sa,ea,oe,aa,ta,be,Ss,ve,fs,na,Ls,la,ra,pe,oa,pa,ie,ia,ca,ye,Bs,Ee,ts,ha,Vs,fa,ma,ce,da,ua,he,_a,ga,fe,ja,$a,xe,Ns,me,wa,ka,ze,Ts,Te,ys,qs,de,Is,ba,ue,va,qe,Cs,Ce;return b=new Fe({}),M=new Fe({}),H=new ns({props:{code:`from datasets import load_dataset

swag = load_dataset("swag", "regular")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>swag = load_dataset(<span class="hljs-string">&quot;swag&quot;</span>, <span class="hljs-string">&quot;regular&quot;</span>)`}}),Y=new ns({props:{code:'swag["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>swag[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
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
 <span class="hljs-string">&#x27;video-id&#x27;</span>: <span class="hljs-string">&#x27;anetv_jkn6uvmqwh4&#x27;</span>}`}}),Ds=new Fe({}),Fs=new ns({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),Ss=new ns({props:{code:`ending_names = ["ending0", "ending1", "ending2", "ending3"]


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
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> {k: [v[i : i + <span class="hljs-number">4</span>] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">len</span>(v), <span class="hljs-number">4</span>)] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> tokenized_examples.items()}`}}),Bs=new ns({props:{code:"tokenized_swag = swag.map(preprocess_function, batched=True)",highlighted:'tokenized_swag = swag.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)'}}),Ts=new pt({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[$t],pytorch:[gt]},$$scope:{ctx:D}}}),Is=new Fe({}),Cs=new pt({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Et],pytorch:[bt]},$$scope:{ctx:D}}}),{c(){n=p("meta"),d=_(),t=p("h1"),u=p("a"),w=p("span"),E(b.$$.fragment),y=_(),F=p("span"),U=l("Multiple choice"),G=_(),L=p("p"),K=l("A multiple choice task is similar to question answering, except several candidate answers are provided along with a context. The model is trained to select the correct answer from multiple inputs given a context."),es=_(),v=p("p"),V=l("This guide will show you how to fine-tune "),J=p("a"),B=l("BERT"),ps=l(" on the "),N=p("code"),ms=l("regular"),I=l(" configuration of the "),X=p("a"),as=l("SWAG"),is=l(" dataset to select the best answer given multiple options and some context."),Q=_(),W=p("h2"),A=p("a"),ls=p("span"),E(M.$$.fragment),rs=_(),os=p("span"),cs=l("Load SWAG dataset"),R=_(),O=p("p"),f=l("Load the SWAG dataset from the \u{1F917} Datasets library:"),k=_(),E(H.$$.fragment),Z=_(),S=p("p"),hs=l("Then take a look at an example:"),ds=_(),E(Y.$$.fragment),ss=_(),P=p("p"),o=l("The "),j=p("code"),ks=l("sent1"),Us=l(" and "),Es=p("code"),xs=l("sent2"),Gs=l(" fields show how a sentence begins, and each "),_s=p("code"),Rs=l("ending"),Hs=l(" field shows how a sentence could end. Given the sentence beginning, the model must pick the correct sentence ending as indicated by the "),gs=p("code"),Ys=l("label"),Ks=l(" field."),ge=_(),bs=p("h2"),zs=p("a"),se=p("span"),E(Ds.$$.fragment),Se=_(),ee=p("span"),Le=l("Preprocess"),je=_(),Js=p("p"),Be=l("Load the BERT tokenizer to process the start of each sentence and the four possible endings:"),$e=_(),E(Fs.$$.fragment),we=_(),Qs=p("p"),Ne=l("The preprocessing function needs to do:"),ke=_(),js=p("ol"),vs=p("li"),Ie=l("Make four copies of the "),ae=p("code"),We=l("sent1"),Ue=l(" field so you can combine each of them with "),te=p("code"),Ge=l("sent2"),Re=l(" to recreate how a sentence starts."),He=_(),Os=p("li"),Ye=l("Combine "),ne=p("code"),Ke=l("sent2"),Je=l(" with each of the four possible sentence endings."),Qe=_(),us=p("li"),Ve=l("Flatten these two lists so you can tokenize them, and then unflatten them afterward so each example has a corresponding "),le=p("code"),Xe=l("input_ids"),Ze=l(", "),re=p("code"),sa=l("attention_mask"),ea=l(", and "),oe=p("code"),aa=l("labels"),ta=l(" field."),be=_(),E(Ss.$$.fragment),ve=_(),fs=p("p"),na=l("Use \u{1F917} Datasets "),Ls=p("a"),la=l("map"),ra=l(" function to apply the preprocessing function over the entire dataset. You can speed up the "),pe=p("code"),oa=l("map"),pa=l(" function by setting "),ie=p("code"),ia=l("batched=True"),ca=l(" to process multiple elements of the dataset at once:"),ye=_(),E(Bs.$$.fragment),Ee=_(),ts=p("p"),ha=l("\u{1F917} Transformers doesn\u2019t have a data collator for multiple choice, so you will need to create one. You can adapt the "),Vs=p("a"),fa=l("DataCollatorWithPadding"),ma=l(" to create a batch of examples for multiple choice. It will also "),ce=p("em"),da=l("dynamically pad"),ua=l(" your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),he=p("code"),_a=l("tokenizer"),ga=l(" function by setting "),fe=p("code"),ja=l("padding=True"),$a=l(", dynamic padding is more efficient."),xe=_(),Ns=p("p"),me=p("code"),wa=l("DataCollatorForMultipleChoice"),ka=l(" will flatten all the model inputs, apply padding, and then unflatten the results:"),ze=_(),E(Ts.$$.fragment),Te=_(),ys=p("h2"),qs=p("a"),de=p("span"),E(Is.$$.fragment),ba=_(),ue=p("span"),va=l("Train"),qe=_(),E(Cs.$$.fragment),this.h()},l(s){const m=dt('[data-svelte="svelte-1phssyn"]',document.head);n=i(m,"META",{name:!0,content:!0}),m.forEach(a),d=g(s),t=i(s,"H1",{class:!0});var Ws=c(t);u=i(Ws,"A",{id:!0,class:!0,href:!0});var _e=c(u);w=i(_e,"SPAN",{});var Ea=c(w);x(b.$$.fragment,Ea),Ea.forEach(a),_e.forEach(a),y=g(Ws),F=i(Ws,"SPAN",{});var xa=c(F);U=r(xa,"Multiple choice"),xa.forEach(a),Ws.forEach(a),G=g(s),L=i(s,"P",{});var za=c(L);K=r(za,"A multiple choice task is similar to question answering, except several candidate answers are provided along with a context. The model is trained to select the correct answer from multiple inputs given a context."),za.forEach(a),es=g(s),v=i(s,"P",{});var As=c(v);V=r(As,"This guide will show you how to fine-tune "),J=i(As,"A",{href:!0,rel:!0});var Ta=c(J);B=r(Ta,"BERT"),Ta.forEach(a),ps=r(As," on the "),N=i(As,"CODE",{});var qa=c(N);ms=r(qa,"regular"),qa.forEach(a),I=r(As," configuration of the "),X=i(As,"A",{href:!0,rel:!0});var Ca=c(X);as=r(Ca,"SWAG"),Ca.forEach(a),is=r(As," dataset to select the best answer given multiple options and some context."),As.forEach(a),Q=g(s),W=i(s,"H2",{class:!0});var Ae=c(W);A=i(Ae,"A",{id:!0,class:!0,href:!0});var Aa=c(A);ls=i(Aa,"SPAN",{});var Pa=c(ls);x(M.$$.fragment,Pa),Pa.forEach(a),Aa.forEach(a),rs=g(Ae),os=i(Ae,"SPAN",{});var Ma=c(os);cs=r(Ma,"Load SWAG dataset"),Ma.forEach(a),Ae.forEach(a),R=g(s),O=i(s,"P",{});var Da=c(O);f=r(Da,"Load the SWAG dataset from the \u{1F917} Datasets library:"),Da.forEach(a),k=g(s),x(H.$$.fragment,s),Z=g(s),S=i(s,"P",{});var Fa=c(S);hs=r(Fa,"Then take a look at an example:"),Fa.forEach(a),ds=g(s),x(Y.$$.fragment,s),ss=g(s),P=i(s,"P",{});var $s=c(P);o=r($s,"The "),j=i($s,"CODE",{});var Oa=c(j);ks=r(Oa,"sent1"),Oa.forEach(a),Us=r($s," and "),Es=i($s,"CODE",{});var Sa=c(Es);xs=r(Sa,"sent2"),Sa.forEach(a),Gs=r($s," fields show how a sentence begins, and each "),_s=i($s,"CODE",{});var La=c(_s);Rs=r(La,"ending"),La.forEach(a),Hs=r($s," field shows how a sentence could end. Given the sentence beginning, the model must pick the correct sentence ending as indicated by the "),gs=i($s,"CODE",{});var Ba=c(gs);Ys=r(Ba,"label"),Ba.forEach(a),Ks=r($s," field."),$s.forEach(a),ge=g(s),bs=i(s,"H2",{class:!0});var Pe=c(bs);zs=i(Pe,"A",{id:!0,class:!0,href:!0});var Na=c(zs);se=i(Na,"SPAN",{});var Ia=c(se);x(Ds.$$.fragment,Ia),Ia.forEach(a),Na.forEach(a),Se=g(Pe),ee=i(Pe,"SPAN",{});var Wa=c(ee);Le=r(Wa,"Preprocess"),Wa.forEach(a),Pe.forEach(a),je=g(s),Js=i(s,"P",{});var Ua=c(Js);Be=r(Ua,"Load the BERT tokenizer to process the start of each sentence and the four possible endings:"),Ua.forEach(a),$e=g(s),x(Fs.$$.fragment,s),we=g(s),Qs=i(s,"P",{});var Ga=c(Qs);Ne=r(Ga,"The preprocessing function needs to do:"),Ga.forEach(a),ke=g(s),js=i(s,"OL",{});var Xs=c(js);vs=i(Xs,"LI",{});var Zs=c(vs);Ie=r(Zs,"Make four copies of the "),ae=i(Zs,"CODE",{});var Ra=c(ae);We=r(Ra,"sent1"),Ra.forEach(a),Ue=r(Zs," field so you can combine each of them with "),te=i(Zs,"CODE",{});var Ha=c(te);Ge=r(Ha,"sent2"),Ha.forEach(a),Re=r(Zs," to recreate how a sentence starts."),Zs.forEach(a),He=g(Xs),Os=i(Xs,"LI",{});var Me=c(Os);Ye=r(Me,"Combine "),ne=i(Me,"CODE",{});var Ya=c(ne);Ke=r(Ya,"sent2"),Ya.forEach(a),Je=r(Me," with each of the four possible sentence endings."),Me.forEach(a),Qe=g(Xs),us=i(Xs,"LI",{});var Ps=c(us);Ve=r(Ps,"Flatten these two lists so you can tokenize them, and then unflatten them afterward so each example has a corresponding "),le=i(Ps,"CODE",{});var Ka=c(le);Xe=r(Ka,"input_ids"),Ka.forEach(a),Ze=r(Ps,", "),re=i(Ps,"CODE",{});var Ja=c(re);sa=r(Ja,"attention_mask"),Ja.forEach(a),ea=r(Ps,", and "),oe=i(Ps,"CODE",{});var Qa=c(oe);aa=r(Qa,"labels"),Qa.forEach(a),ta=r(Ps," field."),Ps.forEach(a),Xs.forEach(a),be=g(s),x(Ss.$$.fragment,s),ve=g(s),fs=i(s,"P",{});var Ms=c(fs);na=r(Ms,"Use \u{1F917} Datasets "),Ls=i(Ms,"A",{href:!0,rel:!0});var Va=c(Ls);la=r(Va,"map"),Va.forEach(a),ra=r(Ms," function to apply the preprocessing function over the entire dataset. You can speed up the "),pe=i(Ms,"CODE",{});var Xa=c(pe);oa=r(Xa,"map"),Xa.forEach(a),pa=r(Ms," function by setting "),ie=i(Ms,"CODE",{});var Za=c(ie);ia=r(Za,"batched=True"),Za.forEach(a),ca=r(Ms," to process multiple elements of the dataset at once:"),Ms.forEach(a),ye=g(s),x(Bs.$$.fragment,s),Ee=g(s),ts=i(s,"P",{});var ws=c(ts);ha=r(ws,"\u{1F917} Transformers doesn\u2019t have a data collator for multiple choice, so you will need to create one. You can adapt the "),Vs=i(ws,"A",{href:!0});var st=c(Vs);fa=r(st,"DataCollatorWithPadding"),st.forEach(a),ma=r(ws," to create a batch of examples for multiple choice. It will also "),ce=i(ws,"EM",{});var et=c(ce);da=r(et,"dynamically pad"),et.forEach(a),ua=r(ws," your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),he=i(ws,"CODE",{});var at=c(he);_a=r(at,"tokenizer"),at.forEach(a),ga=r(ws," function by setting "),fe=i(ws,"CODE",{});var tt=c(fe);ja=r(tt,"padding=True"),tt.forEach(a),$a=r(ws,", dynamic padding is more efficient."),ws.forEach(a),xe=g(s),Ns=i(s,"P",{});var ya=c(Ns);me=i(ya,"CODE",{});var nt=c(me);wa=r(nt,"DataCollatorForMultipleChoice"),nt.forEach(a),ka=r(ya," will flatten all the model inputs, apply padding, and then unflatten the results:"),ya.forEach(a),ze=g(s),x(Ts.$$.fragment,s),Te=g(s),ys=i(s,"H2",{class:!0});var De=c(ys);qs=i(De,"A",{id:!0,class:!0,href:!0});var lt=c(qs);de=i(lt,"SPAN",{});var rt=c(de);x(Is.$$.fragment,rt),rt.forEach(a),lt.forEach(a),ba=g(De),ue=i(De,"SPAN",{});var ot=c(ue);va=r(ot,"Train"),ot.forEach(a),De.forEach(a),qe=g(s),x(Cs.$$.fragment,s),this.h()},h(){$(n,"name","hf:doc:metadata"),$(n,"content",JSON.stringify(zt)),$(u,"id","multiple-choice"),$(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(u,"href","#multiple-choice"),$(t,"class","relative group"),$(J,"href","https://huggingface.co/bert-base-uncased"),$(J,"rel","nofollow"),$(X,"href","https://huggingface.co/datasets/swag"),$(X,"rel","nofollow"),$(A,"id","load-swag-dataset"),$(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(A,"href","#load-swag-dataset"),$(W,"class","relative group"),$(zs,"id","preprocess"),$(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(zs,"href","#preprocess"),$(bs,"class","relative group"),$(Ls,"href","https://huggingface.co/docs/datasets/v2.5.1/en/package_reference/main_classes#datasets.Dataset.map"),$(Ls,"rel","nofollow"),$(Vs,"href","/docs/transformers/v4.22.1/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),$(qs,"id","train"),$(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),$(qs,"href","#train"),$(ys,"class","relative group")},m(s,m){e(document.head,n),h(s,d,m),h(s,t,m),e(t,u),e(u,w),z(b,w,null),e(t,y),e(t,F),e(F,U),h(s,G,m),h(s,L,m),e(L,K),h(s,es,m),h(s,v,m),e(v,V),e(v,J),e(J,B),e(v,ps),e(v,N),e(N,ms),e(v,I),e(v,X),e(X,as),e(v,is),h(s,Q,m),h(s,W,m),e(W,A),e(A,ls),z(M,ls,null),e(W,rs),e(W,os),e(os,cs),h(s,R,m),h(s,O,m),e(O,f),h(s,k,m),z(H,s,m),h(s,Z,m),h(s,S,m),e(S,hs),h(s,ds,m),z(Y,s,m),h(s,ss,m),h(s,P,m),e(P,o),e(P,j),e(j,ks),e(P,Us),e(P,Es),e(Es,xs),e(P,Gs),e(P,_s),e(_s,Rs),e(P,Hs),e(P,gs),e(gs,Ys),e(P,Ks),h(s,ge,m),h(s,bs,m),e(bs,zs),e(zs,se),z(Ds,se,null),e(bs,Se),e(bs,ee),e(ee,Le),h(s,je,m),h(s,Js,m),e(Js,Be),h(s,$e,m),z(Fs,s,m),h(s,we,m),h(s,Qs,m),e(Qs,Ne),h(s,ke,m),h(s,js,m),e(js,vs),e(vs,Ie),e(vs,ae),e(ae,We),e(vs,Ue),e(vs,te),e(te,Ge),e(vs,Re),e(js,He),e(js,Os),e(Os,Ye),e(Os,ne),e(ne,Ke),e(Os,Je),e(js,Qe),e(js,us),e(us,Ve),e(us,le),e(le,Xe),e(us,Ze),e(us,re),e(re,sa),e(us,ea),e(us,oe),e(oe,aa),e(us,ta),h(s,be,m),z(Ss,s,m),h(s,ve,m),h(s,fs,m),e(fs,na),e(fs,Ls),e(Ls,la),e(fs,ra),e(fs,pe),e(pe,oa),e(fs,pa),e(fs,ie),e(ie,ia),e(fs,ca),h(s,ye,m),z(Bs,s,m),h(s,Ee,m),h(s,ts,m),e(ts,ha),e(ts,Vs),e(Vs,fa),e(ts,ma),e(ts,ce),e(ce,da),e(ts,ua),e(ts,he),e(he,_a),e(ts,ga),e(ts,fe),e(fe,ja),e(ts,$a),h(s,xe,m),h(s,Ns,m),e(Ns,me),e(me,wa),e(Ns,ka),h(s,ze,m),z(Ts,s,m),h(s,Te,m),h(s,ys,m),e(ys,qs),e(qs,de),z(Is,de,null),e(ys,ba),e(ys,ue),e(ue,va),h(s,qe,m),z(Cs,s,m),Ce=!0},p(s,[m]){const Ws={};m&2&&(Ws.$$scope={dirty:m,ctx:s}),Ts.$set(Ws);const _e={};m&2&&(_e.$$scope={dirty:m,ctx:s}),Cs.$set(_e)},i(s){Ce||(T(b.$$.fragment,s),T(M.$$.fragment,s),T(H.$$.fragment,s),T(Y.$$.fragment,s),T(Ds.$$.fragment,s),T(Fs.$$.fragment,s),T(Ss.$$.fragment,s),T(Bs.$$.fragment,s),T(Ts.$$.fragment,s),T(Is.$$.fragment,s),T(Cs.$$.fragment,s),Ce=!0)},o(s){q(b.$$.fragment,s),q(M.$$.fragment,s),q(H.$$.fragment,s),q(Y.$$.fragment,s),q(Ds.$$.fragment,s),q(Fs.$$.fragment,s),q(Ss.$$.fragment,s),q(Bs.$$.fragment,s),q(Ts.$$.fragment,s),q(Is.$$.fragment,s),q(Cs.$$.fragment,s),Ce=!1},d(s){a(n),s&&a(d),s&&a(t),C(b),s&&a(G),s&&a(L),s&&a(es),s&&a(v),s&&a(Q),s&&a(W),C(M),s&&a(R),s&&a(O),s&&a(k),C(H,s),s&&a(Z),s&&a(S),s&&a(ds),C(Y,s),s&&a(ss),s&&a(P),s&&a(ge),s&&a(bs),C(Ds),s&&a(je),s&&a(Js),s&&a($e),C(Fs,s),s&&a(we),s&&a(Qs),s&&a(ke),s&&a(js),s&&a(be),C(Ss,s),s&&a(ve),s&&a(fs),s&&a(ye),C(Bs,s),s&&a(Ee),s&&a(ts),s&&a(xe),s&&a(Ns),s&&a(ze),C(Ts,s),s&&a(Te),s&&a(ys),C(Is),s&&a(qe),C(Cs,s)}}}const zt={local:"multiple-choice",sections:[{local:"load-swag-dataset",title:"Load SWAG dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Multiple choice"};function Tt(D){return ut(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Dt extends ht{constructor(n){super();ft(this,n,Tt,xt,mt,{})}}export{Dt as default,zt as metadata};
