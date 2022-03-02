import{S as ql,i as xl,s as Tl,e as o,k as c,w as u,t,M as Cl,c as r,d as a,m as h,a as p,x as _,h as n,b as f,F as e,g as i,y as g,q as j,o as w,B as b}from"../../chunks/vendor-4833417e.js";import{T as zl}from"../../chunks/Tip-fffd6df1.js";import{I as Te}from"../../chunks/IconCopyLink-4b81c553.js";import{C as A}from"../../chunks/CodeBlock-6a3d1b46.js";import{C as Al}from"../../chunks/CodeBlockFw-27a176a0.js";import"../../chunks/CopyButton-dacfbfaf.js";function Pl(ts){let d,$,m,k,x;return{c(){d=o("p"),$=t("If you aren\u2019t familiar with fine-tuning a model with Trainer, take a look at the basic tutorial "),m=o("a"),k=t("here"),x=t("!"),this.h()},l(v){d=r(v,"P",{});var y=p(d);$=n(y,"If you aren\u2019t familiar with fine-tuning a model with Trainer, take a look at the basic tutorial "),m=r(y,"A",{href:!0});var P=p(m);k=n(P,"here"),P.forEach(a),x=n(y,"!"),y.forEach(a),this.h()},h(){f(m,"href","training#finetune-with-trainer")},m(v,y){i(v,d,y),e(d,$),e(d,m),e(m,k),e(d,x)},d(v){v&&a(d)}}}function Dl(ts){let d,$,m,k,x;return{c(){d=o("p"),$=t("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),m=o("a"),k=t("here"),x=t("!"),this.h()},l(v){d=r(v,"P",{});var y=p(d);$=n(y,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),m=r(y,"A",{href:!0});var P=p(m);k=n(P,"here"),P.forEach(a),x=n(y,"!"),y.forEach(a),this.h()},h(){f(m,"href","training#finetune-with-keras")},m(v,y){i(v,d,y),e(d,$),e(d,m),e(m,k),e(d,x)},d(v){v&&a(d)}}}function Ml(ts){let d,$,m,k,x,v,y,P,xa,Ce,Ds,Ta,Ae,T,Ca,ns,Aa,Pa,Qs,Da,Ma,ls,Fa,Oa,Pe,B,G,Vs,os,Sa,Xs,La,De,Ms,Ba,Me,rs,Fe,Fs,Na,Oe,ps,Se,E,Ia,Zs,Wa,Ua,se,Ga,Ra,ee,Ha,Ya,ae,Ka,Ja,Le,N,R,te,is,Qa,ne,Va,Be,Os,Xa,Ne,cs,Ie,Ss,Za,We,M,I,st,le,et,at,oe,tt,nt,lt,hs,ot,re,rt,pt,it,D,ct,pe,ht,ft,ie,dt,mt,ce,ut,_t,Ue,fs,Ge,C,gt,ds,he,jt,wt,fe,bt,kt,de,vt,yt,Re,ms,He,z,$t,Ls,Et,zt,me,qt,xt,ue,Tt,Ct,_e,At,Pt,Ye,us,ge,Dt,Mt,Ke,_s,Je,W,H,je,gs,Ft,we,Ot,Qe,Y,St,Bs,Lt,Bt,Ve,js,Xe,K,Ze,Ns,Nt,sa,F,ws,It,Is,Wt,Ut,Gt,bs,Rt,Ws,Ht,Yt,Kt,ks,Jt,Us,Qt,Vt,ea,vs,aa,U,J,be,ys,Xt,ke,Zt,ta,Gs,sn,na,Q,la,q,en,ve,an,tn,$s,ye,nn,ln,$e,on,rn,Ee,pn,cn,oa,Es,ra,Rs,hn,pa,zs,ia,V,fn,Hs,dn,mn,ca,qs,ha,X,un,xs,ze,_n,gn,fa,Ts,da,Z,jn,Cs,qe,wn,bn,ma,As,ua;return v=new Te({}),os=new Te({}),rs=new A({props:{codee:`from datasets import load_dataset

swag = load_dataset("swag", "regular"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>swag = load_dataset(<span class="hljs-string">&quot;swag&quot;</span>, <span class="hljs-string">&quot;regular&quot;</span>)`}}),ps=new A({props:{codee:'swag["train"][0],',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>swag[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
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
 <span class="hljs-string">&#x27;video-id&#x27;</span>: <span class="hljs-string">&#x27;anetv_jkn6uvmqwh4&#x27;</span>}`}}),is=new Te({}),cs=new A({props:{codee:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),fs=new A({props:{codee:`ending_names = ["ending0", "ending1", "ending2", "ending3"]


def preprocess_function(examples):
    first_sentences = [[context] * 4 for context in examples["sent1"]]
    question_headers = examples["sent2"]
    second_sentences = [
        [f"{header} {examples[end][i]}" for end in ending_names] for i, header in enumerate(question_headers)
    ]

    first_sentences = sum(first_sentences, [])
    second_sentences = sum(second_sentences, [])

    tokenized_examples = tokenizer(first_sentences, second_sentences, truncation=True)
    return {k: [v[i : i + 4] for i in range(0, len(v), 4)] for k, v in tokenized_examples.items()},`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>ending_names = [<span class="hljs-string">&quot;ending0&quot;</span>, <span class="hljs-string">&quot;ending1&quot;</span>, <span class="hljs-string">&quot;ending2&quot;</span>, <span class="hljs-string">&quot;ending3&quot;</span>]


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    first_sentences = [[context] * <span class="hljs-number">4</span> <span class="hljs-keyword">for</span> context <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;sent1&quot;</span>]]
<span class="hljs-meta">... </span>    question_headers = examples[<span class="hljs-string">&quot;sent2&quot;</span>]
<span class="hljs-meta">... </span>    second_sentences = [
<span class="hljs-meta">... </span>        [<span class="hljs-string">f&quot;<span class="hljs-subst">{header}</span> <span class="hljs-subst">{examples[end][i]}</span>&quot;</span> <span class="hljs-keyword">for</span> end <span class="hljs-keyword">in</span> ending_names] <span class="hljs-keyword">for</span> i, header <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(question_headers)
<span class="hljs-meta">... </span>    ]

<span class="hljs-meta">... </span>    first_sentences = <span class="hljs-built_in">sum</span>(first_sentences, [])
<span class="hljs-meta">... </span>    second_sentences = <span class="hljs-built_in">sum</span>(second_sentences, [])

<span class="hljs-meta">... </span>    tokenized_examples = tokenizer(first_sentences, second_sentences, truncation=<span class="hljs-literal">True</span>)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> {k: [v[i : i + <span class="hljs-number">4</span>] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">len</span>(v), <span class="hljs-number">4</span>)] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> tokenized_examples.items()}`}}),ms=new A({props:{codee:"tokenized_swag = swag.map(preprocess_function, batched=True),",highlighted:'tokenized_swag = swag.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)'}}),_s=new Al({props:{group1:{id:"pt",code:`from dataclasses import dataclass
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
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`},group2:{id:"tf",code:`from dataclasses import dataclass
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
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`}}}),gs=new Te({}),js=new A({props:{codee:`from transformers import AutoModelForMultipleChoice, TrainingArguments, Trainer

model = AutoModelForMultipleChoice.from_pretrained("bert-base-uncased"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForMultipleChoice, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),K=new zl({props:{$$slots:{default:[Pl]},$$scope:{ctx:ts}}}),vs=new A({props:{codee:`training_args = TrainingArguments(
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

trainer.train(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(
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

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),ys=new Te({}),Q=new zl({props:{$$slots:{default:[Dl]},$$scope:{ctx:ts}}}),Es=new A({props:{codee:`data_collator = DataCollatorForMultipleChoice(tokenizer=tokenizer)
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
),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DataCollatorForMultipleChoice(tokenizer=tokenizer)
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
<span class="hljs-meta">... </span>)`}}),zs=new A({props:{codee:`from transformers import create_optimizer

batch_size = 16
num_train_epochs = 2
total_train_steps = (len(tokenized_swag["train"]) // batch_size) * num_train_epochs
optimizer, schedule = create_optimizer(init_lr=5e-5, num_warmup_steps=0, num_train_steps=total_train_steps),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer

<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size = <span class="hljs-number">16</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_train_epochs = <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>total_train_steps = (<span class="hljs-built_in">len</span>(tokenized_swag[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size) * num_train_epochs
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">5e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),qs=new A({props:{codee:`from transformers import TFAutoModelForMultipleChoice

model = TFAutoModelForMultipleChoice.from_pretrained("bert-base-uncased"),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),Ts=new A({props:{codee:`model.compile(
    optimizer=optimizer,
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(
<span class="hljs-meta">... </span>    optimizer=optimizer,
<span class="hljs-meta">... </span>    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=<span class="hljs-literal">True</span>),
<span class="hljs-meta">... </span>)`}}),As=new A({props:{codee:"model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=2),",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=<span class="hljs-number">2</span>)'}}),{c(){d=o("meta"),$=c(),m=o("h1"),k=o("a"),x=o("span"),u(v.$$.fragment),y=c(),P=o("span"),xa=t("Multiple choice"),Ce=c(),Ds=o("p"),Ta=t("A multiple choice task is similar to question answering, except several candidate answers are provided along with a context. The model is trained to select the correct answer from multiple inputs given a context."),Ae=c(),T=o("p"),Ca=t("This guide will show you how to fine-tune "),ns=o("a"),Aa=t("BERT"),Pa=t(" on the "),Qs=o("code"),Da=t("regular"),Ma=t(" configuration of the "),ls=o("a"),Fa=t("SWAG"),Oa=t(" dataset to select the best answer given multiple options and some context."),Pe=c(),B=o("h2"),G=o("a"),Vs=o("span"),u(os.$$.fragment),Sa=c(),Xs=o("span"),La=t("Load SWAG dataset"),De=c(),Ms=o("p"),Ba=t("Load the SWAG dataset from the \u{1F917} Datasets library:"),Me=c(),u(rs.$$.fragment),Fe=c(),Fs=o("p"),Na=t("Then take a look at an example:"),Oe=c(),u(ps.$$.fragment),Se=c(),E=o("p"),Ia=t("The "),Zs=o("code"),Wa=t("sent1"),Ua=t(" and "),se=o("code"),Ga=t("sent2"),Ra=t(" fields show how a sentence begins, and each "),ee=o("code"),Ha=t("ending"),Ya=t(" field shows how a sentence could end. Given the sentence beginning, the model must pick the correct sentence ending as indicated by the "),ae=o("code"),Ka=t("label"),Ja=t(" field."),Le=c(),N=o("h2"),R=o("a"),te=o("span"),u(is.$$.fragment),Qa=c(),ne=o("span"),Va=t("Preprocess"),Be=c(),Os=o("p"),Xa=t("Load the BERT tokenizer to process the start of each sentence and the four possible endings:"),Ne=c(),u(cs.$$.fragment),Ie=c(),Ss=o("p"),Za=t("The preprocessing function needs to do:"),We=c(),M=o("ol"),I=o("li"),st=t("Make four copies of the "),le=o("code"),et=t("sent1"),at=t(" field so you can combine each of them with "),oe=o("code"),tt=t("sent2"),nt=t(" to recreate how a sentence starts."),lt=c(),hs=o("li"),ot=t("Combine "),re=o("code"),rt=t("sent2"),pt=t(" with each of the four possible sentence endings."),it=c(),D=o("li"),ct=t("Flatten these two lists so you can tokenize them, and then unflatten them afterward so each example has a corresponding "),pe=o("code"),ht=t("input_ids"),ft=t(", "),ie=o("code"),dt=t("attention_mask"),mt=t(", and "),ce=o("code"),ut=t("labels"),_t=t(" field."),Ue=c(),u(fs.$$.fragment),Ge=c(),C=o("p"),gt=t("Use \u{1F917} Datasets "),ds=o("a"),he=o("code"),jt=t("map"),wt=t(" function to apply the preprocessing function over the entire dataset. You can speed up the "),fe=o("code"),bt=t("map"),kt=t(" function by setting "),de=o("code"),vt=t("batched=True"),yt=t(" to process multiple elements of the dataset at once:"),Re=c(),u(ms.$$.fragment),He=c(),z=o("p"),$t=t("\u{1F917} Transformers doesn\u2019t have a data collator for multiple choice, so you will need to create one. You can adapt the "),Ls=o("a"),Et=t("DataCollatorWithPadding"),zt=t(" to create a batch of examples for multiple choice. It will also "),me=o("em"),qt=t("dynamically pad"),xt=t(" your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ue=o("code"),Tt=t("tokenizer"),Ct=t(" function by setting "),_e=o("code"),At=t("padding=True"),Pt=t(", dynamic padding is more efficient."),Ye=c(),us=o("p"),ge=o("code"),Dt=t("DataCollatorForMultipleChoice"),Mt=t(" will flatten all the model inputs, apply padding, and then unflatten the results:"),Ke=c(),u(_s.$$.fragment),Je=c(),W=o("h2"),H=o("a"),je=o("span"),u(gs.$$.fragment),Ft=c(),we=o("span"),Ot=t("Fine-tune with Trainer"),Qe=c(),Y=o("p"),St=t("Load BERT with "),Bs=o("a"),Lt=t("AutoModelForMultipleChoice"),Bt=t(":"),Ve=c(),u(js.$$.fragment),Xe=c(),u(K.$$.fragment),Ze=c(),Ns=o("p"),Nt=t("At this point, only three steps remain:"),sa=c(),F=o("ol"),ws=o("li"),It=t("Define your training hyperparameters in "),Is=o("a"),Wt=t("TrainingArguments"),Ut=t("."),Gt=c(),bs=o("li"),Rt=t("Pass the training arguments to "),Ws=o("a"),Ht=t("Trainer"),Yt=t(" along with the model, dataset, tokenizer, and data collator."),Kt=c(),ks=o("li"),Jt=t("Call "),Us=o("a"),Qt=t("train()"),Vt=t(" to fine-tune your model."),ea=c(),u(vs.$$.fragment),aa=c(),U=o("h2"),J=o("a"),be=o("span"),u(ys.$$.fragment),Xt=c(),ke=o("span"),Zt=t("Fine-tune with TensorFlow"),ta=c(),Gs=o("p"),sn=t("To fine-tune a model in TensorFlow is just as easy, with only a few differences."),na=c(),u(Q.$$.fragment),la=c(),q=o("p"),en=t("Convert your datasets to the "),ve=o("code"),an=t("tf.data.Dataset"),tn=t(" format with "),$s=o("a"),ye=o("code"),nn=t("to_tf_dataset"),ln=t(". Specify inputs in "),$e=o("code"),on=t("columns"),rn=t(", targets in "),Ee=o("code"),pn=t("label_cols"),cn=t(", whether to shuffle the dataset order, batch size, and the data collator:"),oa=c(),u(Es.$$.fragment),ra=c(),Rs=o("p"),hn=t("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),pa=c(),u(zs.$$.fragment),ia=c(),V=o("p"),fn=t("Load BERT with "),Hs=o("a"),dn=t("TFAutoModelForMultipleChoice"),mn=t(":"),ca=c(),u(qs.$$.fragment),ha=c(),X=o("p"),un=t("Configure the model for training with "),xs=o("a"),ze=o("code"),_n=t("compile"),gn=t(":"),fa=c(),u(Ts.$$.fragment),da=c(),Z=o("p"),jn=t("Call "),Cs=o("a"),qe=o("code"),wn=t("fit"),bn=t(" to fine-tune the model:"),ma=c(),u(As.$$.fragment),this.h()},l(s){const l=Cl('[data-svelte="svelte-1phssyn"]',document.head);d=r(l,"META",{name:!0,content:!0}),l.forEach(a),$=h(s),m=r(s,"H1",{class:!0});var Ps=p(m);k=r(Ps,"A",{id:!0,class:!0,href:!0});var xe=p(k);x=r(xe,"SPAN",{});var vn=p(x);_(v.$$.fragment,vn),vn.forEach(a),xe.forEach(a),y=h(Ps),P=r(Ps,"SPAN",{});var yn=p(P);xa=n(yn,"Multiple choice"),yn.forEach(a),Ps.forEach(a),Ce=h(s),Ds=r(s,"P",{});var $n=p(Ds);Ta=n($n,"A multiple choice task is similar to question answering, except several candidate answers are provided along with a context. The model is trained to select the correct answer from multiple inputs given a context."),$n.forEach(a),Ae=h(s),T=r(s,"P",{});var ss=p(T);Ca=n(ss,"This guide will show you how to fine-tune "),ns=r(ss,"A",{href:!0,rel:!0});var En=p(ns);Aa=n(En,"BERT"),En.forEach(a),Pa=n(ss," on the "),Qs=r(ss,"CODE",{});var zn=p(Qs);Da=n(zn,"regular"),zn.forEach(a),Ma=n(ss," configuration of the "),ls=r(ss,"A",{href:!0,rel:!0});var qn=p(ls);Fa=n(qn,"SWAG"),qn.forEach(a),Oa=n(ss," dataset to select the best answer given multiple options and some context."),ss.forEach(a),Pe=h(s),B=r(s,"H2",{class:!0});var _a=p(B);G=r(_a,"A",{id:!0,class:!0,href:!0});var xn=p(G);Vs=r(xn,"SPAN",{});var Tn=p(Vs);_(os.$$.fragment,Tn),Tn.forEach(a),xn.forEach(a),Sa=h(_a),Xs=r(_a,"SPAN",{});var Cn=p(Xs);La=n(Cn,"Load SWAG dataset"),Cn.forEach(a),_a.forEach(a),De=h(s),Ms=r(s,"P",{});var An=p(Ms);Ba=n(An,"Load the SWAG dataset from the \u{1F917} Datasets library:"),An.forEach(a),Me=h(s),_(rs.$$.fragment,s),Fe=h(s),Fs=r(s,"P",{});var Pn=p(Fs);Na=n(Pn,"Then take a look at an example:"),Pn.forEach(a),Oe=h(s),_(ps.$$.fragment,s),Se=h(s),E=r(s,"P",{});var O=p(E);Ia=n(O,"The "),Zs=r(O,"CODE",{});var Dn=p(Zs);Wa=n(Dn,"sent1"),Dn.forEach(a),Ua=n(O," and "),se=r(O,"CODE",{});var Mn=p(se);Ga=n(Mn,"sent2"),Mn.forEach(a),Ra=n(O," fields show how a sentence begins, and each "),ee=r(O,"CODE",{});var Fn=p(ee);Ha=n(Fn,"ending"),Fn.forEach(a),Ya=n(O," field shows how a sentence could end. Given the sentence beginning, the model must pick the correct sentence ending as indicated by the "),ae=r(O,"CODE",{});var On=p(ae);Ka=n(On,"label"),On.forEach(a),Ja=n(O," field."),O.forEach(a),Le=h(s),N=r(s,"H2",{class:!0});var ga=p(N);R=r(ga,"A",{id:!0,class:!0,href:!0});var Sn=p(R);te=r(Sn,"SPAN",{});var Ln=p(te);_(is.$$.fragment,Ln),Ln.forEach(a),Sn.forEach(a),Qa=h(ga),ne=r(ga,"SPAN",{});var Bn=p(ne);Va=n(Bn,"Preprocess"),Bn.forEach(a),ga.forEach(a),Be=h(s),Os=r(s,"P",{});var Nn=p(Os);Xa=n(Nn,"Load the BERT tokenizer to process the start of each sentence and the four possible endings:"),Nn.forEach(a),Ne=h(s),_(cs.$$.fragment,s),Ie=h(s),Ss=r(s,"P",{});var In=p(Ss);Za=n(In,"The preprocessing function needs to do:"),In.forEach(a),We=h(s),M=r(s,"OL",{});var Ys=p(M);I=r(Ys,"LI",{});var Ks=p(I);st=n(Ks,"Make four copies of the "),le=r(Ks,"CODE",{});var Wn=p(le);et=n(Wn,"sent1"),Wn.forEach(a),at=n(Ks," field so you can combine each of them with "),oe=r(Ks,"CODE",{});var Un=p(oe);tt=n(Un,"sent2"),Un.forEach(a),nt=n(Ks," to recreate how a sentence starts."),Ks.forEach(a),lt=h(Ys),hs=r(Ys,"LI",{});var ja=p(hs);ot=n(ja,"Combine "),re=r(ja,"CODE",{});var Gn=p(re);rt=n(Gn,"sent2"),Gn.forEach(a),pt=n(ja," with each of the four possible sentence endings."),ja.forEach(a),it=h(Ys),D=r(Ys,"LI",{});var es=p(D);ct=n(es,"Flatten these two lists so you can tokenize them, and then unflatten them afterward so each example has a corresponding "),pe=r(es,"CODE",{});var Rn=p(pe);ht=n(Rn,"input_ids"),Rn.forEach(a),ft=n(es,", "),ie=r(es,"CODE",{});var Hn=p(ie);dt=n(Hn,"attention_mask"),Hn.forEach(a),mt=n(es,", and "),ce=r(es,"CODE",{});var Yn=p(ce);ut=n(Yn,"labels"),Yn.forEach(a),_t=n(es," field."),es.forEach(a),Ys.forEach(a),Ue=h(s),_(fs.$$.fragment,s),Ge=h(s),C=r(s,"P",{});var as=p(C);gt=n(as,"Use \u{1F917} Datasets "),ds=r(as,"A",{href:!0,rel:!0});var Kn=p(ds);he=r(Kn,"CODE",{});var Jn=p(he);jt=n(Jn,"map"),Jn.forEach(a),Kn.forEach(a),wt=n(as," function to apply the preprocessing function over the entire dataset. You can speed up the "),fe=r(as,"CODE",{});var Qn=p(fe);bt=n(Qn,"map"),Qn.forEach(a),kt=n(as," function by setting "),de=r(as,"CODE",{});var Vn=p(de);vt=n(Vn,"batched=True"),Vn.forEach(a),yt=n(as," to process multiple elements of the dataset at once:"),as.forEach(a),Re=h(s),_(ms.$$.fragment,s),He=h(s),z=r(s,"P",{});var S=p(z);$t=n(S,"\u{1F917} Transformers doesn\u2019t have a data collator for multiple choice, so you will need to create one. You can adapt the "),Ls=r(S,"A",{href:!0});var Xn=p(Ls);Et=n(Xn,"DataCollatorWithPadding"),Xn.forEach(a),zt=n(S," to create a batch of examples for multiple choice. It will also "),me=r(S,"EM",{});var Zn=p(me);qt=n(Zn,"dynamically pad"),Zn.forEach(a),xt=n(S," your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ue=r(S,"CODE",{});var sl=p(ue);Tt=n(sl,"tokenizer"),sl.forEach(a),Ct=n(S," function by setting "),_e=r(S,"CODE",{});var el=p(_e);At=n(el,"padding=True"),el.forEach(a),Pt=n(S,", dynamic padding is more efficient."),S.forEach(a),Ye=h(s),us=r(s,"P",{});var kn=p(us);ge=r(kn,"CODE",{});var al=p(ge);Dt=n(al,"DataCollatorForMultipleChoice"),al.forEach(a),Mt=n(kn," will flatten all the model inputs, apply padding, and then unflatten the results:"),kn.forEach(a),Ke=h(s),_(_s.$$.fragment,s),Je=h(s),W=r(s,"H2",{class:!0});var wa=p(W);H=r(wa,"A",{id:!0,class:!0,href:!0});var tl=p(H);je=r(tl,"SPAN",{});var nl=p(je);_(gs.$$.fragment,nl),nl.forEach(a),tl.forEach(a),Ft=h(wa),we=r(wa,"SPAN",{});var ll=p(we);Ot=n(ll,"Fine-tune with Trainer"),ll.forEach(a),wa.forEach(a),Qe=h(s),Y=r(s,"P",{});var ba=p(Y);St=n(ba,"Load BERT with "),Bs=r(ba,"A",{href:!0});var ol=p(Bs);Lt=n(ol,"AutoModelForMultipleChoice"),ol.forEach(a),Bt=n(ba,":"),ba.forEach(a),Ve=h(s),_(js.$$.fragment,s),Xe=h(s),_(K.$$.fragment,s),Ze=h(s),Ns=r(s,"P",{});var rl=p(Ns);Nt=n(rl,"At this point, only three steps remain:"),rl.forEach(a),sa=h(s),F=r(s,"OL",{});var Js=p(F);ws=r(Js,"LI",{});var ka=p(ws);It=n(ka,"Define your training hyperparameters in "),Is=r(ka,"A",{href:!0});var pl=p(Is);Wt=n(pl,"TrainingArguments"),pl.forEach(a),Ut=n(ka,"."),ka.forEach(a),Gt=h(Js),bs=r(Js,"LI",{});var va=p(bs);Rt=n(va,"Pass the training arguments to "),Ws=r(va,"A",{href:!0});var il=p(Ws);Ht=n(il,"Trainer"),il.forEach(a),Yt=n(va," along with the model, dataset, tokenizer, and data collator."),va.forEach(a),Kt=h(Js),ks=r(Js,"LI",{});var ya=p(ks);Jt=n(ya,"Call "),Us=r(ya,"A",{href:!0});var cl=p(Us);Qt=n(cl,"train()"),cl.forEach(a),Vt=n(ya," to fine-tune your model."),ya.forEach(a),Js.forEach(a),ea=h(s),_(vs.$$.fragment,s),aa=h(s),U=r(s,"H2",{class:!0});var $a=p(U);J=r($a,"A",{id:!0,class:!0,href:!0});var hl=p(J);be=r(hl,"SPAN",{});var fl=p(be);_(ys.$$.fragment,fl),fl.forEach(a),hl.forEach(a),Xt=h($a),ke=r($a,"SPAN",{});var dl=p(ke);Zt=n(dl,"Fine-tune with TensorFlow"),dl.forEach(a),$a.forEach(a),ta=h(s),Gs=r(s,"P",{});var ml=p(Gs);sn=n(ml,"To fine-tune a model in TensorFlow is just as easy, with only a few differences."),ml.forEach(a),na=h(s),_(Q.$$.fragment,s),la=h(s),q=r(s,"P",{});var L=p(q);en=n(L,"Convert your datasets to the "),ve=r(L,"CODE",{});var ul=p(ve);an=n(ul,"tf.data.Dataset"),ul.forEach(a),tn=n(L," format with "),$s=r(L,"A",{href:!0,rel:!0});var _l=p($s);ye=r(_l,"CODE",{});var gl=p(ye);nn=n(gl,"to_tf_dataset"),gl.forEach(a),_l.forEach(a),ln=n(L,". Specify inputs in "),$e=r(L,"CODE",{});var jl=p($e);on=n(jl,"columns"),jl.forEach(a),rn=n(L,", targets in "),Ee=r(L,"CODE",{});var wl=p(Ee);pn=n(wl,"label_cols"),wl.forEach(a),cn=n(L,", whether to shuffle the dataset order, batch size, and the data collator:"),L.forEach(a),oa=h(s),_(Es.$$.fragment,s),ra=h(s),Rs=r(s,"P",{});var bl=p(Rs);hn=n(bl,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),bl.forEach(a),pa=h(s),_(zs.$$.fragment,s),ia=h(s),V=r(s,"P",{});var Ea=p(V);fn=n(Ea,"Load BERT with "),Hs=r(Ea,"A",{href:!0});var kl=p(Hs);dn=n(kl,"TFAutoModelForMultipleChoice"),kl.forEach(a),mn=n(Ea,":"),Ea.forEach(a),ca=h(s),_(qs.$$.fragment,s),ha=h(s),X=r(s,"P",{});var za=p(X);un=n(za,"Configure the model for training with "),xs=r(za,"A",{href:!0,rel:!0});var vl=p(xs);ze=r(vl,"CODE",{});var yl=p(ze);_n=n(yl,"compile"),yl.forEach(a),vl.forEach(a),gn=n(za,":"),za.forEach(a),fa=h(s),_(Ts.$$.fragment,s),da=h(s),Z=r(s,"P",{});var qa=p(Z);jn=n(qa,"Call "),Cs=r(qa,"A",{href:!0,rel:!0});var $l=p(Cs);qe=r($l,"CODE",{});var El=p(qe);wn=n(El,"fit"),El.forEach(a),$l.forEach(a),bn=n(qa," to fine-tune the model:"),qa.forEach(a),ma=h(s),_(As.$$.fragment,s),this.h()},h(){f(d,"name","hf:doc:metadata"),f(d,"content",JSON.stringify(Fl)),f(k,"id","multiple-choice"),f(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(k,"href","#multiple-choice"),f(m,"class","relative group"),f(ns,"href","https://huggingface.co/bert-base-uncased"),f(ns,"rel","nofollow"),f(ls,"href","https://huggingface.co/datasets/swag"),f(ls,"rel","nofollow"),f(G,"id","load-swag-dataset"),f(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(G,"href","#load-swag-dataset"),f(B,"class","relative group"),f(R,"id","preprocess"),f(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(R,"href","#preprocess"),f(N,"class","relative group"),f(ds,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),f(ds,"rel","nofollow"),f(Ls,"href","/docs/transformers/v4.17.0/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),f(H,"id","finetune-with-trainer"),f(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(H,"href","#finetune-with-trainer"),f(W,"class","relative group"),f(Bs,"href","/docs/transformers/v4.17.0/en/model_doc/auto#transformers.AutoModelForMultipleChoice"),f(Is,"href","/docs/transformers/v4.17.0/en/main_classes/trainer#transformers.TrainingArguments"),f(Ws,"href","/docs/transformers/v4.17.0/en/main_classes/trainer#transformers.Trainer"),f(Us,"href","/docs/transformers/v4.17.0/en/main_classes/trainer#transformers.Trainer.train"),f(J,"id","finetune-with-tensorflow"),f(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(J,"href","#finetune-with-tensorflow"),f(U,"class","relative group"),f($s,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.to_tf_dataset"),f($s,"rel","nofollow"),f(Hs,"href","/docs/transformers/v4.17.0/en/model_doc/auto#transformers.TFAutoModelForMultipleChoice"),f(xs,"href","https://keras.io/api/models/model_training_apis/#compile-method"),f(xs,"rel","nofollow"),f(Cs,"href","https://keras.io/api/models/model_training_apis/#fit-method"),f(Cs,"rel","nofollow")},m(s,l){e(document.head,d),i(s,$,l),i(s,m,l),e(m,k),e(k,x),g(v,x,null),e(m,y),e(m,P),e(P,xa),i(s,Ce,l),i(s,Ds,l),e(Ds,Ta),i(s,Ae,l),i(s,T,l),e(T,Ca),e(T,ns),e(ns,Aa),e(T,Pa),e(T,Qs),e(Qs,Da),e(T,Ma),e(T,ls),e(ls,Fa),e(T,Oa),i(s,Pe,l),i(s,B,l),e(B,G),e(G,Vs),g(os,Vs,null),e(B,Sa),e(B,Xs),e(Xs,La),i(s,De,l),i(s,Ms,l),e(Ms,Ba),i(s,Me,l),g(rs,s,l),i(s,Fe,l),i(s,Fs,l),e(Fs,Na),i(s,Oe,l),g(ps,s,l),i(s,Se,l),i(s,E,l),e(E,Ia),e(E,Zs),e(Zs,Wa),e(E,Ua),e(E,se),e(se,Ga),e(E,Ra),e(E,ee),e(ee,Ha),e(E,Ya),e(E,ae),e(ae,Ka),e(E,Ja),i(s,Le,l),i(s,N,l),e(N,R),e(R,te),g(is,te,null),e(N,Qa),e(N,ne),e(ne,Va),i(s,Be,l),i(s,Os,l),e(Os,Xa),i(s,Ne,l),g(cs,s,l),i(s,Ie,l),i(s,Ss,l),e(Ss,Za),i(s,We,l),i(s,M,l),e(M,I),e(I,st),e(I,le),e(le,et),e(I,at),e(I,oe),e(oe,tt),e(I,nt),e(M,lt),e(M,hs),e(hs,ot),e(hs,re),e(re,rt),e(hs,pt),e(M,it),e(M,D),e(D,ct),e(D,pe),e(pe,ht),e(D,ft),e(D,ie),e(ie,dt),e(D,mt),e(D,ce),e(ce,ut),e(D,_t),i(s,Ue,l),g(fs,s,l),i(s,Ge,l),i(s,C,l),e(C,gt),e(C,ds),e(ds,he),e(he,jt),e(C,wt),e(C,fe),e(fe,bt),e(C,kt),e(C,de),e(de,vt),e(C,yt),i(s,Re,l),g(ms,s,l),i(s,He,l),i(s,z,l),e(z,$t),e(z,Ls),e(Ls,Et),e(z,zt),e(z,me),e(me,qt),e(z,xt),e(z,ue),e(ue,Tt),e(z,Ct),e(z,_e),e(_e,At),e(z,Pt),i(s,Ye,l),i(s,us,l),e(us,ge),e(ge,Dt),e(us,Mt),i(s,Ke,l),g(_s,s,l),i(s,Je,l),i(s,W,l),e(W,H),e(H,je),g(gs,je,null),e(W,Ft),e(W,we),e(we,Ot),i(s,Qe,l),i(s,Y,l),e(Y,St),e(Y,Bs),e(Bs,Lt),e(Y,Bt),i(s,Ve,l),g(js,s,l),i(s,Xe,l),g(K,s,l),i(s,Ze,l),i(s,Ns,l),e(Ns,Nt),i(s,sa,l),i(s,F,l),e(F,ws),e(ws,It),e(ws,Is),e(Is,Wt),e(ws,Ut),e(F,Gt),e(F,bs),e(bs,Rt),e(bs,Ws),e(Ws,Ht),e(bs,Yt),e(F,Kt),e(F,ks),e(ks,Jt),e(ks,Us),e(Us,Qt),e(ks,Vt),i(s,ea,l),g(vs,s,l),i(s,aa,l),i(s,U,l),e(U,J),e(J,be),g(ys,be,null),e(U,Xt),e(U,ke),e(ke,Zt),i(s,ta,l),i(s,Gs,l),e(Gs,sn),i(s,na,l),g(Q,s,l),i(s,la,l),i(s,q,l),e(q,en),e(q,ve),e(ve,an),e(q,tn),e(q,$s),e($s,ye),e(ye,nn),e(q,ln),e(q,$e),e($e,on),e(q,rn),e(q,Ee),e(Ee,pn),e(q,cn),i(s,oa,l),g(Es,s,l),i(s,ra,l),i(s,Rs,l),e(Rs,hn),i(s,pa,l),g(zs,s,l),i(s,ia,l),i(s,V,l),e(V,fn),e(V,Hs),e(Hs,dn),e(V,mn),i(s,ca,l),g(qs,s,l),i(s,ha,l),i(s,X,l),e(X,un),e(X,xs),e(xs,ze),e(ze,_n),e(X,gn),i(s,fa,l),g(Ts,s,l),i(s,da,l),i(s,Z,l),e(Z,jn),e(Z,Cs),e(Cs,qe),e(qe,wn),e(Z,bn),i(s,ma,l),g(As,s,l),ua=!0},p(s,[l]){const Ps={};l&2&&(Ps.$$scope={dirty:l,ctx:s}),K.$set(Ps);const xe={};l&2&&(xe.$$scope={dirty:l,ctx:s}),Q.$set(xe)},i(s){ua||(j(v.$$.fragment,s),j(os.$$.fragment,s),j(rs.$$.fragment,s),j(ps.$$.fragment,s),j(is.$$.fragment,s),j(cs.$$.fragment,s),j(fs.$$.fragment,s),j(ms.$$.fragment,s),j(_s.$$.fragment,s),j(gs.$$.fragment,s),j(js.$$.fragment,s),j(K.$$.fragment,s),j(vs.$$.fragment,s),j(ys.$$.fragment,s),j(Q.$$.fragment,s),j(Es.$$.fragment,s),j(zs.$$.fragment,s),j(qs.$$.fragment,s),j(Ts.$$.fragment,s),j(As.$$.fragment,s),ua=!0)},o(s){w(v.$$.fragment,s),w(os.$$.fragment,s),w(rs.$$.fragment,s),w(ps.$$.fragment,s),w(is.$$.fragment,s),w(cs.$$.fragment,s),w(fs.$$.fragment,s),w(ms.$$.fragment,s),w(_s.$$.fragment,s),w(gs.$$.fragment,s),w(js.$$.fragment,s),w(K.$$.fragment,s),w(vs.$$.fragment,s),w(ys.$$.fragment,s),w(Q.$$.fragment,s),w(Es.$$.fragment,s),w(zs.$$.fragment,s),w(qs.$$.fragment,s),w(Ts.$$.fragment,s),w(As.$$.fragment,s),ua=!1},d(s){a(d),s&&a($),s&&a(m),b(v),s&&a(Ce),s&&a(Ds),s&&a(Ae),s&&a(T),s&&a(Pe),s&&a(B),b(os),s&&a(De),s&&a(Ms),s&&a(Me),b(rs,s),s&&a(Fe),s&&a(Fs),s&&a(Oe),b(ps,s),s&&a(Se),s&&a(E),s&&a(Le),s&&a(N),b(is),s&&a(Be),s&&a(Os),s&&a(Ne),b(cs,s),s&&a(Ie),s&&a(Ss),s&&a(We),s&&a(M),s&&a(Ue),b(fs,s),s&&a(Ge),s&&a(C),s&&a(Re),b(ms,s),s&&a(He),s&&a(z),s&&a(Ye),s&&a(us),s&&a(Ke),b(_s,s),s&&a(Je),s&&a(W),b(gs),s&&a(Qe),s&&a(Y),s&&a(Ve),b(js,s),s&&a(Xe),b(K,s),s&&a(Ze),s&&a(Ns),s&&a(sa),s&&a(F),s&&a(ea),b(vs,s),s&&a(aa),s&&a(U),b(ys),s&&a(ta),s&&a(Gs),s&&a(na),b(Q,s),s&&a(la),s&&a(q),s&&a(oa),b(Es,s),s&&a(ra),s&&a(Rs),s&&a(pa),b(zs,s),s&&a(ia),s&&a(V),s&&a(ca),b(qs,s),s&&a(ha),s&&a(X),s&&a(fa),b(Ts,s),s&&a(da),s&&a(Z),s&&a(ma),b(As,s)}}}const Fl={local:"multiple-choice",sections:[{local:"load-swag-dataset",title:"Load SWAG dataset"},{local:"preprocess",title:"Preprocess"},{local:"finetune-with-trainer",title:"Fine-tune with Trainer"},{local:"finetune-with-tensorflow",title:"Fine-tune with TensorFlow"}],title:"Multiple choice"};function Ol(ts,d,$){let{fw:m}=d;return ts.$$set=k=>{"fw"in k&&$(0,m=k.fw)},[m]}class Ul extends ql{constructor(d){super();xl(this,d,Ol,Ml,Tl,{fw:0})}}export{Ul as default,Fl as metadata};
