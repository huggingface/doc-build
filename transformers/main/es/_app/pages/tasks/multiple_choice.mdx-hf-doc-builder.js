import{S as mt,i as ft,s as ut,e as p,k as _,w as z,t as l,M as ht,c as i,d as e,m as g,a as c,x as q,h as r,b as v,G as a,g as d,y as x,q as C,o as T,B as P,v as _t,L as ct}from"../../chunks/vendor-hf-doc-builder.js";import{T as dt}from"../../chunks/Tip-hf-doc-builder.js";import{I as Fa}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ts}from"../../chunks/CodeBlock-hf-doc-builder.js";import{F as it,M as Sa}from"../../chunks/Markdown-hf-doc-builder.js";import"../../chunks/IconTensorflow-hf-doc-builder.js";function gt(B){let n,u;return n=new ts({props:{code:`from dataclasses import dataclass
from transformers.tokenization_utils_base import PreTrainedTokenizerBase, PaddingStrategy
from typing import Optional, Union
import torch


@dataclass
class DataCollatorForMultipleChoice:
    """
    Collator de datos que le a\xF1adir\xE1 relleno de forma autom\xE1tica a las entradas recibidas para
    una tarea de selecci\xF3n m\xFAltiple.
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
<span class="hljs-meta">... </span>    Collator de datos que le a\xF1adir\xE1 relleno de forma autom\xE1tica a las entradas recibidas para
<span class="hljs-meta">... </span>    una tarea de selecci\xF3n m\xFAltiple.
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
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`}}),{c(){z(n.$$.fragment)},l(t){q(n.$$.fragment,t)},m(t,h){x(n,t,h),u=!0},p:ct,i(t){u||(C(n.$$.fragment,t),u=!0)},o(t){T(n.$$.fragment,t),u=!1},d(t){P(n,t)}}}function jt(B){let n,u;return n=new Sa({props:{$$slots:{default:[gt]},$$scope:{ctx:B}}}),{c(){z(n.$$.fragment)},l(t){q(n.$$.fragment,t)},m(t,h){x(n,t,h),u=!0},p(t,h){const $={};h&2&&($.$$scope={dirty:h,ctx:t}),n.$set($)},i(t){u||(C(n.$$.fragment,t),u=!0)},o(t){T(n.$$.fragment,t),u=!1},d(t){P(n,t)}}}function $t(B){let n,u;return n=new ts({props:{code:`from dataclasses import dataclass
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
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`}}),{c(){z(n.$$.fragment)},l(t){q(n.$$.fragment,t)},m(t,h){x(n,t,h),u=!0},p:ct,i(t){u||(C(n.$$.fragment,t),u=!0)},o(t){T(n.$$.fragment,t),u=!1},d(t){P(n,t)}}}function bt(B){let n,u;return n=new Sa({props:{$$slots:{default:[$t]},$$scope:{ctx:B}}}),{c(){z(n.$$.fragment)},l(t){q(n.$$.fragment,t)},m(t,h){x(n,t,h),u=!0},p(t,h){const $={};h&2&&($.$$scope={dirty:h,ctx:t}),n.$set($)},i(t){u||(C(n.$$.fragment,t),u=!0)},o(t){T(n.$$.fragment,t),u=!1},d(t){P(n,t)}}}function kt(B){let n,u,t,h,$,k,y,O;return{c(){n=p("p"),u=l("Para familiarizarte con el fine-tuning con "),t=p("code"),h=l("Trainer"),$=l(", \xA1mira el tutorial b\xE1sico "),k=p("a"),y=l("aqu\xED"),O=l("!"),this.h()},l(M){n=i(M,"P",{});var E=c(n);u=r(E,"Para familiarizarte con el fine-tuning con "),t=i(E,"CODE",{});var F=c(t);h=r(F,"Trainer"),F.forEach(e),$=r(E,", \xA1mira el tutorial b\xE1sico "),k=i(E,"A",{href:!0});var L=c(k);y=r(L,"aqu\xED"),L.forEach(e),O=r(E,"!"),E.forEach(e),this.h()},h(){v(k,"href","../training#finetune-with-trainer")},m(M,E){d(M,n,E),a(n,u),a(n,t),a(t,h),a(n,$),a(n,k),a(k,y),a(n,O)},d(M){M&&e(n)}}}function wt(B){let n,u,t,h,$,k,y,O,M,E,F,L,as,w,X,Q,W,ps,U,fs,G,Y,ns,is,V,R,A,ls,S,rs,os,cs,H,N;return y=new ts({props:{code:`from transformers import AutoModelForMultipleChoice, TrainingArguments, Trainer

model = AutoModelForMultipleChoice.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForMultipleChoice, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),M=new dt({props:{$$slots:{default:[kt]},$$scope:{ctx:B}}}),H=new ts({props:{code:`training_args = TrainingArguments(
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

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){n=p("p"),u=l("Carga el modelo BERT con "),t=p("code"),h=l("AutoModelForMultipleChoice"),$=l(":"),k=_(),z(y.$$.fragment),O=_(),z(M.$$.fragment),E=_(),F=p("p"),L=l("En este punto, solo quedan tres pasos:"),as=_(),w=p("ol"),X=p("li"),Q=l("Definir tus hiperpar\xE1metros de entrenamiento en "),W=p("code"),ps=l("TrainingArguments"),U=l("."),fs=_(),G=p("li"),Y=l("Pasarle los argumentos del entrenamiento al "),ns=p("code"),is=l("Trainer"),V=l(" jnto con el modelo, el dataset, el tokenizer y el collator de datos."),R=_(),A=p("li"),ls=l("Invocar el m\xE9todo "),S=p("code"),rs=l("train()"),os=l(" para realizar el fine-tuning del modelo."),cs=_(),z(H.$$.fragment)},l(m){n=i(m,"P",{});var b=c(n);u=r(b,"Carga el modelo BERT con "),t=i(b,"CODE",{});var K=c(t);h=r(K,"AutoModelForMultipleChoice"),K.forEach(e),$=r(b,":"),b.forEach(e),k=g(m),q(y.$$.fragment,m),O=g(m),q(M.$$.fragment,m),E=g(m),F=i(m,"P",{});var Z=c(F);L=r(Z,"En este punto, solo quedan tres pasos:"),Z.forEach(e),as=g(m),w=i(m,"OL",{});var I=c(w);X=i(I,"LI",{});var ds=c(X);Q=r(ds,"Definir tus hiperpar\xE1metros de entrenamiento en "),W=i(ds,"CODE",{});var us=c(W);ps=r(us,"TrainingArguments"),us.forEach(e),U=r(ds,"."),ds.forEach(e),fs=g(I),G=i(I,"LI",{});var J=c(G);Y=r(J,"Pasarle los argumentos del entrenamiento al "),ns=i(J,"CODE",{});var ss=c(ns);is=r(ss,"Trainer"),ss.forEach(e),V=r(J," jnto con el modelo, el dataset, el tokenizer y el collator de datos."),J.forEach(e),R=g(I),A=i(I,"LI",{});var D=c(A);ls=r(D,"Invocar el m\xE9todo "),S=i(D,"CODE",{});var o=c(S);rs=r(o,"train()"),o.forEach(e),os=r(D," para realizar el fine-tuning del modelo."),D.forEach(e),I.forEach(e),cs=g(m),q(H.$$.fragment,m)},m(m,b){d(m,n,b),a(n,u),a(n,t),a(t,h),a(n,$),d(m,k,b),x(y,m,b),d(m,O,b),x(M,m,b),d(m,E,b),d(m,F,b),a(F,L),d(m,as,b),d(m,w,b),a(w,X),a(X,Q),a(X,W),a(W,ps),a(X,U),a(w,fs),a(w,G),a(G,Y),a(G,ns),a(ns,is),a(G,V),a(w,R),a(w,A),a(A,ls),a(A,S),a(S,rs),a(A,os),d(m,cs,b),x(H,m,b),N=!0},p(m,b){const K={};b&2&&(K.$$scope={dirty:b,ctx:m}),M.$set(K)},i(m){N||(C(y.$$.fragment,m),C(M.$$.fragment,m),C(H.$$.fragment,m),N=!0)},o(m){T(y.$$.fragment,m),T(M.$$.fragment,m),T(H.$$.fragment,m),N=!1},d(m){m&&e(n),m&&e(k),P(y,m),m&&e(O),P(M,m),m&&e(E),m&&e(F),m&&e(as),m&&e(w),m&&e(cs),P(H,m)}}}function vt(B){let n,u;return n=new Sa({props:{$$slots:{default:[wt]},$$scope:{ctx:B}}}),{c(){z(n.$$.fragment)},l(t){q(n.$$.fragment,t)},m(t,h){x(n,t,h),u=!0},p(t,h){const $={};h&2&&($.$$scope={dirty:h,ctx:t}),n.$set($)},i(t){u||(C(n.$$.fragment,t),u=!0)},o(t){T(n.$$.fragment,t),u=!1},d(t){P(n,t)}}}function yt(B){let n,u,t,h,$;return{c(){n=p("p"),u=l("Para familiarizarte con el fine-tuning con Keras, \xA1mira el tutorial b\xE1sico "),t=p("a"),h=l("aqu\xED"),$=l("!"),this.h()},l(k){n=i(k,"P",{});var y=c(n);u=r(y,"Para familiarizarte con el fine-tuning con Keras, \xA1mira el tutorial b\xE1sico "),t=i(y,"A",{href:!0});var O=c(t);h=r(O,"aqu\xED"),O.forEach(e),$=r(y,"!"),y.forEach(e),this.h()},h(){v(t,"href","training#finetune-with-keras")},m(k,y){d(k,n,y),a(n,u),a(n,t),a(t,h),a(n,$)},d(k){k&&e(n)}}}function Et(B){let n,u,t,h,$,k,y,O,M,E,F,L,as,w,X,Q,W,ps,U,fs,G,Y,ns,is,V,R,A,ls,S,rs,os,cs,H,N,m,b,K,Z,I,ds,us,J,ss,D;return E=new ts({props:{code:`data_collator = DataCollatorForMultipleChoice(tokenizer=tokenizer)
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
<span class="hljs-meta">... </span>)`}}),L=new dt({props:{$$slots:{default:[yt]},$$scope:{ctx:B}}}),W=new ts({props:{code:`from transformers import create_optimizer

batch_size = 16
num_train_epochs = 2
total_train_steps = (len(tokenized_swag["train"]) // batch_size) * num_train_epochs
optimizer, schedule = create_optimizer(init_lr=5e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer

<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size = <span class="hljs-number">16</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_train_epochs = <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>total_train_steps = (<span class="hljs-built_in">len</span>(tokenized_swag[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size) * num_train_epochs
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">5e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),V=new ts({props:{code:`from transformers import TFAutoModelForMultipleChoice

model = TFAutoModelForMultipleChoice.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),N=new ts({props:{code:"model.compile(optimizer=optimizer)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)'}}),ss=new ts({props:{code:"model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=2)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=<span class="hljs-number">2</span>)'}}),{c(){n=p("p"),u=l("Para realizar el fine-tuning de un modelo en TensorFlow, primero convierte tus datasets al formato "),t=p("code"),h=l("tf.data.Dataset"),$=l(" con el m\xE9todo "),k=p("code"),y=l("prepare_tf_dataset()"),O=l("."),M=_(),z(E.$$.fragment),F=_(),z(L.$$.fragment),as=_(),w=p("p"),X=l("Prepara una funci\xF3n de optimizaci\xF3n, un programa para la tasa de aprendizaje y algunos hiperpar\xE1metros de entrenamiento:"),Q=_(),z(W.$$.fragment),ps=_(),U=p("p"),fs=l("Carga el modelo BERT con "),G=p("code"),Y=l("TFAutoModelForMultipleChoice"),ns=l(":"),is=_(),z(V.$$.fragment),R=_(),A=p("p"),ls=l("Configura el modelo para entrenarlo con "),S=p("a"),rs=p("code"),os=l("compile"),cs=l(":"),H=_(),z(N.$$.fragment),m=_(),b=p("p"),K=l("Invoca el m\xE9todo "),Z=p("a"),I=p("code"),ds=l("fit"),us=l(" para realizar el fine-tuning del modelo:"),J=_(),z(ss.$$.fragment),this.h()},l(o){n=i(o,"P",{});var j=c(n);u=r(j,"Para realizar el fine-tuning de un modelo en TensorFlow, primero convierte tus datasets al formato "),t=i(j,"CODE",{});var ks=c(t);h=r(ks,"tf.data.Dataset"),ks.forEach(e),$=r(j," con el m\xE9todo "),k=i(j,"CODE",{});var Us=c(k);y=r(Us,"prepare_tf_dataset()"),Us.forEach(e),O=r(j,"."),j.forEach(e),M=g(o),q(E.$$.fragment,o),F=g(o),q(L.$$.fragment,o),as=g(o),w=i(o,"P",{});var Es=c(w);X=r(Es,"Prepara una funci\xF3n de optimizaci\xF3n, un programa para la tasa de aprendizaje y algunos hiperpar\xE1metros de entrenamiento:"),Es.forEach(e),Q=g(o),q(W.$$.fragment,o),ps=g(o),U=i(o,"P",{});var zs=c(U);fs=r(zs,"Carga el modelo BERT con "),G=i(zs,"CODE",{});var Rs=c(G);Y=r(Rs,"TFAutoModelForMultipleChoice"),Rs.forEach(e),ns=r(zs,":"),zs.forEach(e),is=g(o),q(V.$$.fragment,o),R=g(o),A=i(o,"P",{});var _s=c(A);ls=r(_s,"Configura el modelo para entrenarlo con "),S=i(_s,"A",{href:!0,rel:!0});var Ws=c(S);rs=i(Ws,"CODE",{});var Gs=c(rs);os=r(Gs,"compile"),Gs.forEach(e),Ws.forEach(e),cs=r(_s,":"),_s.forEach(e),H=g(o),q(N.$$.fragment,o),m=g(o),b=i(o,"P",{});var gs=c(b);K=r(gs,"Invoca el m\xE9todo "),Z=i(gs,"A",{href:!0,rel:!0});var Hs=c(Z);I=i(Hs,"CODE",{});var Ks=c(I);ds=r(Ks,"fit"),Ks.forEach(e),Hs.forEach(e),us=r(gs," para realizar el fine-tuning del modelo:"),gs.forEach(e),J=g(o),q(ss.$$.fragment,o),this.h()},h(){v(S,"href","https://keras.io/api/models/model_training_apis/#compile-method"),v(S,"rel","nofollow"),v(Z,"href","https://keras.io/api/models/model_training_apis/#fit-method"),v(Z,"rel","nofollow")},m(o,j){d(o,n,j),a(n,u),a(n,t),a(t,h),a(n,$),a(n,k),a(k,y),a(n,O),d(o,M,j),x(E,o,j),d(o,F,j),x(L,o,j),d(o,as,j),d(o,w,j),a(w,X),d(o,Q,j),x(W,o,j),d(o,ps,j),d(o,U,j),a(U,fs),a(U,G),a(G,Y),a(U,ns),d(o,is,j),x(V,o,j),d(o,R,j),d(o,A,j),a(A,ls),a(A,S),a(S,rs),a(rs,os),a(A,cs),d(o,H,j),x(N,o,j),d(o,m,j),d(o,b,j),a(b,K),a(b,Z),a(Z,I),a(I,ds),a(b,us),d(o,J,j),x(ss,o,j),D=!0},p(o,j){const ks={};j&2&&(ks.$$scope={dirty:j,ctx:o}),L.$set(ks)},i(o){D||(C(E.$$.fragment,o),C(L.$$.fragment,o),C(W.$$.fragment,o),C(V.$$.fragment,o),C(N.$$.fragment,o),C(ss.$$.fragment,o),D=!0)},o(o){T(E.$$.fragment,o),T(L.$$.fragment,o),T(W.$$.fragment,o),T(V.$$.fragment,o),T(N.$$.fragment,o),T(ss.$$.fragment,o),D=!1},d(o){o&&e(n),o&&e(M),P(E,o),o&&e(F),P(L,o),o&&e(as),o&&e(w),o&&e(Q),P(W,o),o&&e(ps),o&&e(U),o&&e(is),P(V,o),o&&e(R),o&&e(A),o&&e(H),P(N,o),o&&e(m),o&&e(b),o&&e(J),P(ss,o)}}}function zt(B){let n,u;return n=new Sa({props:{$$slots:{default:[Et]},$$scope:{ctx:B}}}),{c(){z(n.$$.fragment)},l(t){q(n.$$.fragment,t)},m(t,h){x(n,t,h),u=!0},p(t,h){const $={};h&2&&($.$$scope={dirty:h,ctx:t}),n.$set($)},i(t){u||(C(n.$$.fragment,t),u=!0)},o(t){T(n.$$.fragment,t),u=!1},d(t){P(n,t)}}}function qt(B){let n,u,t,h,$,k,y,O,M,E,F,L,as,w,X,Q,W,ps,U,fs,G,Y,ns,is,V,R,A,ls,S,rs,os,cs,H,N,m,b,K,Z,I,ds,us,J,ss,D,o,j,ks,Us,Es,zs,Rs,_s,Ws,Gs,gs,Hs,Ks,ga,ws,qs,Ys,Os,Ba,Zs,La,ja,Js,Na,$a,Fs,ba,Qs,Ia,ka,js,vs,Ua,sa,Ra,Wa,aa,Ga,Ha,Ka,Ss,Ja,ea,Qa,Va,Xa,hs,Ya,ta,Za,se,na,ae,ee,la,te,ne,wa,Bs,va,ms,le,ra,re,oe,oa,pe,ie,pa,ce,de,ya,Ls,Ea,es,me,ia,fe,ue,ca,he,_e,da,ge,je,ma,$e,be,za,xs,ke,fa,we,ve,qa,Cs,xa,ys,Ts,ua,Ns,ye,ha,Ee,Ca,Ps,Ta;return k=new Fa({}),S=new Fa({}),K=new ts({props:{code:`from datasets import load_dataset

swag = load_dataset("swag", "regular")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>swag = load_dataset(<span class="hljs-string">&quot;swag&quot;</span>, <span class="hljs-string">&quot;regular&quot;</span>)`}}),J=new ts({props:{code:'swag["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>swag[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
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
 <span class="hljs-string">&#x27;video-id&#x27;</span>: <span class="hljs-string">&#x27;anetv_jkn6uvmqwh4&#x27;</span>}`}}),Os=new Fa({}),Fs=new ts({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),Bs=new ts({props:{code:`ending_names = ["ending0", "ending1", "ending2", "ending3"]


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
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> {k: [v[i : i + <span class="hljs-number">4</span>] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">len</span>(v), <span class="hljs-number">4</span>)] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> tokenized_examples.items()}`}}),Ls=new ts({props:{code:"tokenized_swag = swag.map(preprocess_function, batched=True)",highlighted:'tokenized_swag = swag.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)'}}),Cs=new it({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[bt],pytorch:[jt]},$$scope:{ctx:B}}}),Ns=new Fa({}),Ps=new it({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[zt],pytorch:[vt]},$$scope:{ctx:B}}}),{c(){n=p("meta"),u=_(),t=p("h1"),h=p("a"),$=p("span"),z(k.$$.fragment),y=_(),O=p("span"),M=l("Selecci\xF3n m\xFAltiple"),E=_(),F=p("p"),L=l(`La tarea de selecci\xF3n m\xFAltiple es parecida a la de responder preguntas, con la excepci\xF3n de que se dan varias opciones de respuesta junto con el contexto. El modelo se entrena para escoger la respuesta correcta
entre varias opciones a partir del contexto dado.`),as=_(),w=p("p"),X=l("Esta gu\xEDa te mostrar\xE1 como hacerle fine-tuning a "),Q=p("a"),W=l("BERT"),ps=l(" en la configuraci\xF3n "),U=p("code"),fs=l("regular"),G=l(" del dataset "),Y=p("a"),ns=l("SWAG"),is=l(`, de forma
que seleccione la mejor respuesta a partir de varias opciones y alg\xFAn contexto.`),V=_(),R=p("h2"),A=p("a"),ls=p("span"),z(S.$$.fragment),rs=_(),os=p("span"),cs=l("Cargar el dataset SWAG"),H=_(),N=p("p"),m=l("Carga el dataset SWAG con la biblioteca \u{1F917} Datasets:"),b=_(),z(K.$$.fragment),Z=_(),I=p("p"),ds=l("Ahora, \xE9chale un vistazo a un ejemplo del dataset:"),us=_(),z(J.$$.fragment),ss=_(),D=p("p"),o=l("Los campos "),j=p("code"),ks=l("sent1"),Us=l(" y "),Es=p("code"),zs=l("sent2"),Rs=l(" muestran c\xF3mo comienza una oraci\xF3n, y cada campo "),_s=p("code"),Ws=l("ending"),Gs=l(" indica c\xF3mo podr\xEDa terminar. Dado el comienzo de la oraci\xF3n, el modelo debe escoger el final de oraci\xF3n correcto indicado por el campo "),gs=p("code"),Hs=l("label"),Ks=l("."),ga=_(),ws=p("h2"),qs=p("a"),Ys=p("span"),z(Os.$$.fragment),Ba=_(),Zs=p("span"),La=l("Preprocesmaiento"),ja=_(),Js=p("p"),Na=l("Carga el tokenizer de BERT para procesar el comienzo de cada oraci\xF3n y los cuatro finales posibles:"),$a=_(),z(Fs.$$.fragment),ba=_(),Qs=p("p"),Ia=l("La funci\xF3n de preprocesmaiento debe hacer lo siguiente:"),ka=_(),js=p("ol"),vs=p("li"),Ua=l("Hacer cuatro copias del campo "),sa=p("code"),Ra=l("sent1"),Wa=l(" de forma que se pueda combinar cada una con el campo "),aa=p("code"),Ga=l("sent2"),Ha=l(" para recrear la forma en que empieza la oraci\xF3n."),Ka=_(),Ss=p("li"),Ja=l("Combinar "),ea=p("code"),Qa=l("sent2"),Va=l(" con cada uno de los cuatro finales de oraci\xF3n posibles."),Xa=_(),hs=p("li"),Ya=l("Aplanar las dos listas para que puedas tokenizarlas, y luego des-aplanarlas para que cada ejemplo tenga los campos "),ta=p("code"),Za=l("input_ids"),se=l(", "),na=p("code"),ae=l("attention_mask"),ee=l(" y "),la=p("code"),te=l("labels"),ne=l(" correspondientes."),wa=_(),z(Bs.$$.fragment),va=_(),ms=p("p"),le=l("Usa la funci\xF3n "),ra=p("code"),re=l("map"),oe=l(" de \u{1F917} Datasets para aplicarle la funci\xF3n de preprocesamiento al dataset entero. Puedes acelerar la funci\xF3n "),oa=p("code"),pe=l("map"),ie=l(" haciendo "),pa=p("code"),ce=l("batched=True"),de=l(" para procesar varios elementos del dataset a la vez."),ya=_(),z(Ls.$$.fragment),Ea=_(),es=p("p"),me=l("\u{1F917} Transformers no tiene un collator de datos para la tarea de selecci\xF3n m\xFAltiple, as\xED que tendr\xEDas que crear uno. Puedes adaptar el "),ia=p("code"),fe=l("DataCollatorWithPadding"),ue=l(` para crear un lote de ejemplos para selecci\xF3n m\xFAltiple. Este tambi\xE9n
le `),ca=p("em"),he=l("a\xF1adir\xE1 relleno de manera din\xE1mica"),_e=l(" a tu texto y a las etiquetas para que tengan la longitud del elemento m\xE1s largo en su lote, de forma que tengan una longitud uniforme. Aunque es posible rellenar el texto en la funci\xF3n "),da=p("code"),ge=l("tokenizer"),je=l(` haciendo
`),ma=p("code"),$e=l("padding=True"),be=l(", el rellenado din\xE1mico es m\xE1s eficiente."),za=_(),xs=p("p"),ke=l("El "),fa=p("code"),we=l("DataCollatorForMultipleChoice"),ve=l(" aplanar\xE1 todas las entradas del modelo, les aplicar\xE1 relleno y luego des-aplanar\xE1 los resultados:"),qa=_(),z(Cs.$$.fragment),xa=_(),ys=p("h2"),Ts=p("a"),ua=p("span"),z(Ns.$$.fragment),ye=_(),ha=p("span"),Ee=l("Entrenamiento"),Ca=_(),z(Ps.$$.fragment),this.h()},l(s){const f=ht('[data-svelte="svelte-1phssyn"]',document.head);n=i(f,"META",{name:!0,content:!0}),f.forEach(e),u=g(s),t=i(s,"H1",{class:!0});var Is=c(t);h=i(Is,"A",{id:!0,class:!0,href:!0});var _a=c(h);$=i(_a,"SPAN",{});var ze=c($);q(k.$$.fragment,ze),ze.forEach(e),_a.forEach(e),y=g(Is),O=i(Is,"SPAN",{});var qe=c(O);M=r(qe,"Selecci\xF3n m\xFAltiple"),qe.forEach(e),Is.forEach(e),E=g(s),F=i(s,"P",{});var xe=c(F);L=r(xe,`La tarea de selecci\xF3n m\xFAltiple es parecida a la de responder preguntas, con la excepci\xF3n de que se dan varias opciones de respuesta junto con el contexto. El modelo se entrena para escoger la respuesta correcta
entre varias opciones a partir del contexto dado.`),xe.forEach(e),as=g(s),w=i(s,"P",{});var As=c(w);X=r(As,"Esta gu\xEDa te mostrar\xE1 como hacerle fine-tuning a "),Q=i(As,"A",{href:!0,rel:!0});var Ce=c(Q);W=r(Ce,"BERT"),Ce.forEach(e),ps=r(As," en la configuraci\xF3n "),U=i(As,"CODE",{});var Te=c(U);fs=r(Te,"regular"),Te.forEach(e),G=r(As," del dataset "),Y=i(As,"A",{href:!0,rel:!0});var Pe=c(Y);ns=r(Pe,"SWAG"),Pe.forEach(e),is=r(As,`, de forma
que seleccione la mejor respuesta a partir de varias opciones y alg\xFAn contexto.`),As.forEach(e),V=g(s),R=i(s,"H2",{class:!0});var Pa=c(R);A=i(Pa,"A",{id:!0,class:!0,href:!0});var Ae=c(A);ls=i(Ae,"SPAN",{});var De=c(ls);q(S.$$.fragment,De),De.forEach(e),Ae.forEach(e),rs=g(Pa),os=i(Pa,"SPAN",{});var Me=c(os);cs=r(Me,"Cargar el dataset SWAG"),Me.forEach(e),Pa.forEach(e),H=g(s),N=i(s,"P",{});var Oe=c(N);m=r(Oe,"Carga el dataset SWAG con la biblioteca \u{1F917} Datasets:"),Oe.forEach(e),b=g(s),q(K.$$.fragment,s),Z=g(s),I=i(s,"P",{});var Fe=c(I);ds=r(Fe,"Ahora, \xE9chale un vistazo a un ejemplo del dataset:"),Fe.forEach(e),us=g(s),q(J.$$.fragment,s),ss=g(s),D=i(s,"P",{});var $s=c(D);o=r($s,"Los campos "),j=i($s,"CODE",{});var Se=c(j);ks=r(Se,"sent1"),Se.forEach(e),Us=r($s," y "),Es=i($s,"CODE",{});var Be=c(Es);zs=r(Be,"sent2"),Be.forEach(e),Rs=r($s," muestran c\xF3mo comienza una oraci\xF3n, y cada campo "),_s=i($s,"CODE",{});var Le=c(_s);Ws=r(Le,"ending"),Le.forEach(e),Gs=r($s," indica c\xF3mo podr\xEDa terminar. Dado el comienzo de la oraci\xF3n, el modelo debe escoger el final de oraci\xF3n correcto indicado por el campo "),gs=i($s,"CODE",{});var Ne=c(gs);Hs=r(Ne,"label"),Ne.forEach(e),Ks=r($s,"."),$s.forEach(e),ga=g(s),ws=i(s,"H2",{class:!0});var Aa=c(ws);qs=i(Aa,"A",{id:!0,class:!0,href:!0});var Ie=c(qs);Ys=i(Ie,"SPAN",{});var Ue=c(Ys);q(Os.$$.fragment,Ue),Ue.forEach(e),Ie.forEach(e),Ba=g(Aa),Zs=i(Aa,"SPAN",{});var Re=c(Zs);La=r(Re,"Preprocesmaiento"),Re.forEach(e),Aa.forEach(e),ja=g(s),Js=i(s,"P",{});var We=c(Js);Na=r(We,"Carga el tokenizer de BERT para procesar el comienzo de cada oraci\xF3n y los cuatro finales posibles:"),We.forEach(e),$a=g(s),q(Fs.$$.fragment,s),ba=g(s),Qs=i(s,"P",{});var Ge=c(Qs);Ia=r(Ge,"La funci\xF3n de preprocesmaiento debe hacer lo siguiente:"),Ge.forEach(e),ka=g(s),js=i(s,"OL",{});var Vs=c(js);vs=i(Vs,"LI",{});var Xs=c(vs);Ua=r(Xs,"Hacer cuatro copias del campo "),sa=i(Xs,"CODE",{});var He=c(sa);Ra=r(He,"sent1"),He.forEach(e),Wa=r(Xs," de forma que se pueda combinar cada una con el campo "),aa=i(Xs,"CODE",{});var Ke=c(aa);Ga=r(Ke,"sent2"),Ke.forEach(e),Ha=r(Xs," para recrear la forma en que empieza la oraci\xF3n."),Xs.forEach(e),Ka=g(Vs),Ss=i(Vs,"LI",{});var Da=c(Ss);Ja=r(Da,"Combinar "),ea=i(Da,"CODE",{});var Je=c(ea);Qa=r(Je,"sent2"),Je.forEach(e),Va=r(Da," con cada uno de los cuatro finales de oraci\xF3n posibles."),Da.forEach(e),Xa=g(Vs),hs=i(Vs,"LI",{});var Ds=c(hs);Ya=r(Ds,"Aplanar las dos listas para que puedas tokenizarlas, y luego des-aplanarlas para que cada ejemplo tenga los campos "),ta=i(Ds,"CODE",{});var Qe=c(ta);Za=r(Qe,"input_ids"),Qe.forEach(e),se=r(Ds,", "),na=i(Ds,"CODE",{});var Ve=c(na);ae=r(Ve,"attention_mask"),Ve.forEach(e),ee=r(Ds," y "),la=i(Ds,"CODE",{});var Xe=c(la);te=r(Xe,"labels"),Xe.forEach(e),ne=r(Ds," correspondientes."),Ds.forEach(e),Vs.forEach(e),wa=g(s),q(Bs.$$.fragment,s),va=g(s),ms=i(s,"P",{});var Ms=c(ms);le=r(Ms,"Usa la funci\xF3n "),ra=i(Ms,"CODE",{});var Ye=c(ra);re=r(Ye,"map"),Ye.forEach(e),oe=r(Ms," de \u{1F917} Datasets para aplicarle la funci\xF3n de preprocesamiento al dataset entero. Puedes acelerar la funci\xF3n "),oa=i(Ms,"CODE",{});var Ze=c(oa);pe=r(Ze,"map"),Ze.forEach(e),ie=r(Ms," haciendo "),pa=i(Ms,"CODE",{});var st=c(pa);ce=r(st,"batched=True"),st.forEach(e),de=r(Ms," para procesar varios elementos del dataset a la vez."),Ms.forEach(e),ya=g(s),q(Ls.$$.fragment,s),Ea=g(s),es=i(s,"P",{});var bs=c(es);me=r(bs,"\u{1F917} Transformers no tiene un collator de datos para la tarea de selecci\xF3n m\xFAltiple, as\xED que tendr\xEDas que crear uno. Puedes adaptar el "),ia=i(bs,"CODE",{});var at=c(ia);fe=r(at,"DataCollatorWithPadding"),at.forEach(e),ue=r(bs,` para crear un lote de ejemplos para selecci\xF3n m\xFAltiple. Este tambi\xE9n
le `),ca=i(bs,"EM",{});var et=c(ca);he=r(et,"a\xF1adir\xE1 relleno de manera din\xE1mica"),et.forEach(e),_e=r(bs," a tu texto y a las etiquetas para que tengan la longitud del elemento m\xE1s largo en su lote, de forma que tengan una longitud uniforme. Aunque es posible rellenar el texto en la funci\xF3n "),da=i(bs,"CODE",{});var tt=c(da);ge=r(tt,"tokenizer"),tt.forEach(e),je=r(bs,` haciendo
`),ma=i(bs,"CODE",{});var nt=c(ma);$e=r(nt,"padding=True"),nt.forEach(e),be=r(bs,", el rellenado din\xE1mico es m\xE1s eficiente."),bs.forEach(e),za=g(s),xs=i(s,"P",{});var Ma=c(xs);ke=r(Ma,"El "),fa=i(Ma,"CODE",{});var lt=c(fa);we=r(lt,"DataCollatorForMultipleChoice"),lt.forEach(e),ve=r(Ma," aplanar\xE1 todas las entradas del modelo, les aplicar\xE1 relleno y luego des-aplanar\xE1 los resultados:"),Ma.forEach(e),qa=g(s),q(Cs.$$.fragment,s),xa=g(s),ys=i(s,"H2",{class:!0});var Oa=c(ys);Ts=i(Oa,"A",{id:!0,class:!0,href:!0});var rt=c(Ts);ua=i(rt,"SPAN",{});var ot=c(ua);q(Ns.$$.fragment,ot),ot.forEach(e),rt.forEach(e),ye=g(Oa),ha=i(Oa,"SPAN",{});var pt=c(ha);Ee=r(pt,"Entrenamiento"),pt.forEach(e),Oa.forEach(e),Ca=g(s),q(Ps.$$.fragment,s),this.h()},h(){v(n,"name","hf:doc:metadata"),v(n,"content",JSON.stringify(xt)),v(h,"id","seleccin-mltiple"),v(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(h,"href","#seleccin-mltiple"),v(t,"class","relative group"),v(Q,"href","https://huggingface.co/bert-base-uncased"),v(Q,"rel","nofollow"),v(Y,"href","https://huggingface.co/datasets/swag"),v(Y,"rel","nofollow"),v(A,"id","cargar-el-dataset-swag"),v(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(A,"href","#cargar-el-dataset-swag"),v(R,"class","relative group"),v(qs,"id","preprocesmaiento"),v(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(qs,"href","#preprocesmaiento"),v(ws,"class","relative group"),v(Ts,"id","entrenamiento"),v(Ts,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),v(Ts,"href","#entrenamiento"),v(ys,"class","relative group")},m(s,f){a(document.head,n),d(s,u,f),d(s,t,f),a(t,h),a(h,$),x(k,$,null),a(t,y),a(t,O),a(O,M),d(s,E,f),d(s,F,f),a(F,L),d(s,as,f),d(s,w,f),a(w,X),a(w,Q),a(Q,W),a(w,ps),a(w,U),a(U,fs),a(w,G),a(w,Y),a(Y,ns),a(w,is),d(s,V,f),d(s,R,f),a(R,A),a(A,ls),x(S,ls,null),a(R,rs),a(R,os),a(os,cs),d(s,H,f),d(s,N,f),a(N,m),d(s,b,f),x(K,s,f),d(s,Z,f),d(s,I,f),a(I,ds),d(s,us,f),x(J,s,f),d(s,ss,f),d(s,D,f),a(D,o),a(D,j),a(j,ks),a(D,Us),a(D,Es),a(Es,zs),a(D,Rs),a(D,_s),a(_s,Ws),a(D,Gs),a(D,gs),a(gs,Hs),a(D,Ks),d(s,ga,f),d(s,ws,f),a(ws,qs),a(qs,Ys),x(Os,Ys,null),a(ws,Ba),a(ws,Zs),a(Zs,La),d(s,ja,f),d(s,Js,f),a(Js,Na),d(s,$a,f),x(Fs,s,f),d(s,ba,f),d(s,Qs,f),a(Qs,Ia),d(s,ka,f),d(s,js,f),a(js,vs),a(vs,Ua),a(vs,sa),a(sa,Ra),a(vs,Wa),a(vs,aa),a(aa,Ga),a(vs,Ha),a(js,Ka),a(js,Ss),a(Ss,Ja),a(Ss,ea),a(ea,Qa),a(Ss,Va),a(js,Xa),a(js,hs),a(hs,Ya),a(hs,ta),a(ta,Za),a(hs,se),a(hs,na),a(na,ae),a(hs,ee),a(hs,la),a(la,te),a(hs,ne),d(s,wa,f),x(Bs,s,f),d(s,va,f),d(s,ms,f),a(ms,le),a(ms,ra),a(ra,re),a(ms,oe),a(ms,oa),a(oa,pe),a(ms,ie),a(ms,pa),a(pa,ce),a(ms,de),d(s,ya,f),x(Ls,s,f),d(s,Ea,f),d(s,es,f),a(es,me),a(es,ia),a(ia,fe),a(es,ue),a(es,ca),a(ca,he),a(es,_e),a(es,da),a(da,ge),a(es,je),a(es,ma),a(ma,$e),a(es,be),d(s,za,f),d(s,xs,f),a(xs,ke),a(xs,fa),a(fa,we),a(xs,ve),d(s,qa,f),x(Cs,s,f),d(s,xa,f),d(s,ys,f),a(ys,Ts),a(Ts,ua),x(Ns,ua,null),a(ys,ye),a(ys,ha),a(ha,Ee),d(s,Ca,f),x(Ps,s,f),Ta=!0},p(s,[f]){const Is={};f&2&&(Is.$$scope={dirty:f,ctx:s}),Cs.$set(Is);const _a={};f&2&&(_a.$$scope={dirty:f,ctx:s}),Ps.$set(_a)},i(s){Ta||(C(k.$$.fragment,s),C(S.$$.fragment,s),C(K.$$.fragment,s),C(J.$$.fragment,s),C(Os.$$.fragment,s),C(Fs.$$.fragment,s),C(Bs.$$.fragment,s),C(Ls.$$.fragment,s),C(Cs.$$.fragment,s),C(Ns.$$.fragment,s),C(Ps.$$.fragment,s),Ta=!0)},o(s){T(k.$$.fragment,s),T(S.$$.fragment,s),T(K.$$.fragment,s),T(J.$$.fragment,s),T(Os.$$.fragment,s),T(Fs.$$.fragment,s),T(Bs.$$.fragment,s),T(Ls.$$.fragment,s),T(Cs.$$.fragment,s),T(Ns.$$.fragment,s),T(Ps.$$.fragment,s),Ta=!1},d(s){e(n),s&&e(u),s&&e(t),P(k),s&&e(E),s&&e(F),s&&e(as),s&&e(w),s&&e(V),s&&e(R),P(S),s&&e(H),s&&e(N),s&&e(b),P(K,s),s&&e(Z),s&&e(I),s&&e(us),P(J,s),s&&e(ss),s&&e(D),s&&e(ga),s&&e(ws),P(Os),s&&e(ja),s&&e(Js),s&&e($a),P(Fs,s),s&&e(ba),s&&e(Qs),s&&e(ka),s&&e(js),s&&e(wa),P(Bs,s),s&&e(va),s&&e(ms),s&&e(ya),P(Ls,s),s&&e(Ea),s&&e(es),s&&e(za),s&&e(xs),s&&e(qa),P(Cs,s),s&&e(xa),s&&e(ys),P(Ns),s&&e(Ca),P(Ps,s)}}}const xt={local:"seleccin-mltiple",sections:[{local:"cargar-el-dataset-swag",title:"Cargar el dataset SWAG"},{local:"preprocesmaiento",title:"Preprocesmaiento"},{local:"entrenamiento",title:"Entrenamiento"}],title:"Selecci\xF3n m\xFAltiple"};function Ct(B){return _t(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ft extends mt{constructor(n){super();ft(this,n,Ct,qt,ut,{})}}export{Ft as default,xt as metadata};
