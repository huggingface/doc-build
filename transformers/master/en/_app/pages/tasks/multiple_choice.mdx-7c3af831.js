import{S as Tl,i as Cl,s as Al,e as o,k as f,w as g,t,M as Pl,c as r,d as a,m,a as p,x as j,h as n,b as d,F as e,g as c,y as w,q as k,o as b,B as $,L as ql}from"../../chunks/vendor-6b77c823.js";import{T as zl}from"../../chunks/Tip-39098574.js";import{I as Ce}from"../../chunks/IconCopyLink-7a11ce68.js";import{C}from"../../chunks/CodeBlock-3a8b25a8.js";import{F as Ml,M as xl}from"../../chunks/Markdown-4489c441.js";function Dl(z){let h,u;return h=new C({props:{code:`from dataclasses import dataclass
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
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`}}),{c(){g(h.$$.fragment)},l(i){j(h.$$.fragment,i)},m(i,_){w(h,i,_),u=!0},p:ql,i(i){u||(k(h.$$.fragment,i),u=!0)},o(i){b(h.$$.fragment,i),u=!1},d(i){$(h,i)}}}function Fl(z){let h,u;return h=new xl({props:{$$slots:{default:[Dl]},$$scope:{ctx:z}}}),{c(){g(h.$$.fragment)},l(i){j(h.$$.fragment,i)},m(i,_){w(h,i,_),u=!0},p(i,_){const v={};_&2&&(v.$$scope={dirty:_,ctx:i}),h.$set(v)},i(i){u||(k(h.$$.fragment,i),u=!0)},o(i){b(h.$$.fragment,i),u=!1},d(i){$(h,i)}}}function Ol(z){let h,u;return h=new C({props:{code:`from dataclasses import dataclass
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
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> batch`}}),{c(){g(h.$$.fragment)},l(i){j(h.$$.fragment,i)},m(i,_){w(h,i,_),u=!0},p:ql,i(i){u||(k(h.$$.fragment,i),u=!0)},o(i){b(h.$$.fragment,i),u=!1},d(i){$(h,i)}}}function Sl(z){let h,u;return h=new xl({props:{$$slots:{default:[Ol]},$$scope:{ctx:z}}}),{c(){g(h.$$.fragment)},l(i){j(h.$$.fragment,i)},m(i,_){w(h,i,_),u=!0},p(i,_){const v={};_&2&&(v.$$scope={dirty:_,ctx:i}),h.$set(v)},i(i){u||(k(h.$$.fragment,i),u=!0)},o(i){b(h.$$.fragment,i),u=!1},d(i){$(h,i)}}}function Ll(z){let h,u,i,_,v;return{c(){h=o("p"),u=t("If you aren\u2019t familiar with fine-tuning a model with Trainer, take a look at the basic tutorial "),i=o("a"),_=t("here"),v=t("!"),this.h()},l(y){h=r(y,"P",{});var E=p(h);u=n(E,"If you aren\u2019t familiar with fine-tuning a model with Trainer, take a look at the basic tutorial "),i=r(E,"A",{href:!0});var M=p(i);_=n(M,"here"),M.forEach(a),v=n(E,"!"),E.forEach(a),this.h()},h(){d(i,"href","training#finetune-with-trainer")},m(y,E){c(y,h,E),e(h,u),e(h,i),e(i,_),e(h,v)},d(y){y&&a(h)}}}function Nl(z){let h,u,i,_,v;return{c(){h=o("p"),u=t("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),i=o("a"),_=t("here"),v=t("!"),this.h()},l(y){h=r(y,"P",{});var E=p(h);u=n(E,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),i=r(E,"A",{href:!0});var M=p(i);_=n(M,"here"),M.forEach(a),v=n(E,"!"),E.forEach(a),this.h()},h(){d(i,"href","training#finetune-with-keras")},m(y,E){c(y,h,E),e(h,u),e(h,i),e(i,_),e(h,v)},d(y){y&&a(h)}}}function Bl(z){let h,u,i,_,v,y,E,M,Ta,Ae,Ms,Ca,Pe,A,Aa,ls,Pa,Ma,Qs,Da,Fa,os,Oa,Sa,Me,B,R,Vs,rs,La,Xs,Na,De,Ds,Ba,Fe,ps,Oe,Fs,Ia,Se,is,Le,q,Wa,Zs,Ua,Ga,se,Ra,Ha,ee,Ya,Ka,ae,Ja,Qa,Ne,I,H,te,cs,Va,ne,Xa,Be,Os,Za,Ie,hs,We,Ss,st,Ue,F,W,et,le,at,tt,oe,nt,lt,ot,fs,rt,re,pt,it,ct,D,ht,pe,ft,mt,ie,dt,ut,ce,_t,gt,Ge,ms,Re,P,jt,ds,he,wt,kt,fe,bt,$t,me,vt,yt,He,us,Ye,x,Et,Ls,zt,qt,de,xt,Tt,ue,Ct,At,_e,Pt,Mt,Ke,_s,ge,Dt,Ft,Je,Y,Qe,U,K,je,gs,Ot,we,St,Ve,J,Lt,Ns,Nt,Bt,Xe,js,Ze,Q,sa,Bs,It,ea,O,ws,Wt,Is,Ut,Gt,Rt,ks,Ht,Ws,Yt,Kt,Jt,bs,Qt,Us,Vt,Xt,aa,$s,ta,G,V,ke,vs,Zt,be,sn,na,Gs,en,la,X,oa,T,an,$e,tn,nn,ys,ve,ln,on,ye,rn,pn,Ee,cn,hn,ra,Es,pa,Rs,fn,ia,zs,ca,Z,mn,Hs,dn,un,ha,qs,fa,ss,_n,xs,ze,gn,jn,ma,Ts,da,es,wn,Cs,qe,kn,bn,ua,As,_a;return y=new Ce({}),rs=new Ce({}),ps=new C({props:{code:`from datasets import load_dataset

swag = load_dataset("swag", "regular")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>swag = load_dataset(<span class="hljs-string">&quot;swag&quot;</span>, <span class="hljs-string">&quot;regular&quot;</span>)`}}),is=new C({props:{code:'swag["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>swag[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
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
 <span class="hljs-string">&#x27;video-id&#x27;</span>: <span class="hljs-string">&#x27;anetv_jkn6uvmqwh4&#x27;</span>}`}}),cs=new Ce({}),hs=new C({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),ms=new C({props:{code:`ending_names = ["ending0", "ending1", "ending2", "ending3"]


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
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> {k: [v[i : i + <span class="hljs-number">4</span>] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">0</span>, <span class="hljs-built_in">len</span>(v), <span class="hljs-number">4</span>)] <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> tokenized_examples.items()}`}}),us=new C({props:{code:"tokenized_swag = swag.map(preprocess_function, batched=True)",highlighted:'tokenized_swag = swag.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)'}}),Y=new Ml({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Sl],pytorch:[Fl]},$$scope:{ctx:z}}}),gs=new Ce({}),js=new C({props:{code:`from transformers import AutoModelForMultipleChoice, TrainingArguments, Trainer

model = AutoModelForMultipleChoice.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForMultipleChoice, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),Q=new zl({props:{$$slots:{default:[Ll]},$$scope:{ctx:z}}}),$s=new C({props:{code:`training_args = TrainingArguments(
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

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),vs=new Ce({}),X=new zl({props:{$$slots:{default:[Nl]},$$scope:{ctx:z}}}),Es=new C({props:{code:`data_collator = DataCollatorForMultipleChoice(tokenizer=tokenizer)
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
<span class="hljs-meta">... </span>)`}}),zs=new C({props:{code:`from transformers import create_optimizer

batch_size = 16
num_train_epochs = 2
total_train_steps = (len(tokenized_swag["train"]) // batch_size) * num_train_epochs
optimizer, schedule = create_optimizer(init_lr=5e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer

<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size = <span class="hljs-number">16</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_train_epochs = <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>total_train_steps = (<span class="hljs-built_in">len</span>(tokenized_swag[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size) * num_train_epochs
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">5e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),qs=new C({props:{code:`from transformers import TFAutoModelForMultipleChoice

model = TFAutoModelForMultipleChoice.from_pretrained("bert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForMultipleChoice

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;bert-base-uncased&quot;</span>)`}}),Ts=new C({props:{code:`model.compile(
    optimizer=optimizer,
    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=True),
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(
<span class="hljs-meta">... </span>    optimizer=optimizer,
<span class="hljs-meta">... </span>    loss=tf.keras.losses.SparseCategoricalCrossentropy(from_logits=<span class="hljs-literal">True</span>),
<span class="hljs-meta">... </span>)`}}),As=new C({props:{code:"model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=2)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=<span class="hljs-number">2</span>)'}}),{c(){h=o("meta"),u=f(),i=o("h1"),_=o("a"),v=o("span"),g(y.$$.fragment),E=f(),M=o("span"),Ta=t("Multiple choice"),Ae=f(),Ms=o("p"),Ca=t("A multiple choice task is similar to question answering, except several candidate answers are provided along with a context. The model is trained to select the correct answer from multiple inputs given a context."),Pe=f(),A=o("p"),Aa=t("This guide will show you how to fine-tune "),ls=o("a"),Pa=t("BERT"),Ma=t(" on the "),Qs=o("code"),Da=t("regular"),Fa=t(" configuration of the "),os=o("a"),Oa=t("SWAG"),Sa=t(" dataset to select the best answer given multiple options and some context."),Me=f(),B=o("h2"),R=o("a"),Vs=o("span"),g(rs.$$.fragment),La=f(),Xs=o("span"),Na=t("Load SWAG dataset"),De=f(),Ds=o("p"),Ba=t("Load the SWAG dataset from the \u{1F917} Datasets library:"),Fe=f(),g(ps.$$.fragment),Oe=f(),Fs=o("p"),Ia=t("Then take a look at an example:"),Se=f(),g(is.$$.fragment),Le=f(),q=o("p"),Wa=t("The "),Zs=o("code"),Ua=t("sent1"),Ga=t(" and "),se=o("code"),Ra=t("sent2"),Ha=t(" fields show how a sentence begins, and each "),ee=o("code"),Ya=t("ending"),Ka=t(" field shows how a sentence could end. Given the sentence beginning, the model must pick the correct sentence ending as indicated by the "),ae=o("code"),Ja=t("label"),Qa=t(" field."),Ne=f(),I=o("h2"),H=o("a"),te=o("span"),g(cs.$$.fragment),Va=f(),ne=o("span"),Xa=t("Preprocess"),Be=f(),Os=o("p"),Za=t("Load the BERT tokenizer to process the start of each sentence and the four possible endings:"),Ie=f(),g(hs.$$.fragment),We=f(),Ss=o("p"),st=t("The preprocessing function needs to do:"),Ue=f(),F=o("ol"),W=o("li"),et=t("Make four copies of the "),le=o("code"),at=t("sent1"),tt=t(" field so you can combine each of them with "),oe=o("code"),nt=t("sent2"),lt=t(" to recreate how a sentence starts."),ot=f(),fs=o("li"),rt=t("Combine "),re=o("code"),pt=t("sent2"),it=t(" with each of the four possible sentence endings."),ct=f(),D=o("li"),ht=t("Flatten these two lists so you can tokenize them, and then unflatten them afterward so each example has a corresponding "),pe=o("code"),ft=t("input_ids"),mt=t(", "),ie=o("code"),dt=t("attention_mask"),ut=t(", and "),ce=o("code"),_t=t("labels"),gt=t(" field."),Ge=f(),g(ms.$$.fragment),Re=f(),P=o("p"),jt=t("Use \u{1F917} Datasets "),ds=o("a"),he=o("code"),wt=t("map"),kt=t(" function to apply the preprocessing function over the entire dataset. You can speed up the "),fe=o("code"),bt=t("map"),$t=t(" function by setting "),me=o("code"),vt=t("batched=True"),yt=t(" to process multiple elements of the dataset at once:"),He=f(),g(us.$$.fragment),Ye=f(),x=o("p"),Et=t("\u{1F917} Transformers doesn\u2019t have a data collator for multiple choice, so you will need to create one. You can adapt the "),Ls=o("a"),zt=t("DataCollatorWithPadding"),qt=t(" to create a batch of examples for multiple choice. It will also "),de=o("em"),xt=t("dynamically pad"),Tt=t(" your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ue=o("code"),Ct=t("tokenizer"),At=t(" function by setting "),_e=o("code"),Pt=t("padding=True"),Mt=t(", dynamic padding is more efficient."),Ke=f(),_s=o("p"),ge=o("code"),Dt=t("DataCollatorForMultipleChoice"),Ft=t(" will flatten all the model inputs, apply padding, and then unflatten the results:"),Je=f(),g(Y.$$.fragment),Qe=f(),U=o("h2"),K=o("a"),je=o("span"),g(gs.$$.fragment),Ot=f(),we=o("span"),St=t("Fine-tune with Trainer"),Ve=f(),J=o("p"),Lt=t("Load BERT with "),Ns=o("a"),Nt=t("AutoModelForMultipleChoice"),Bt=t(":"),Xe=f(),g(js.$$.fragment),Ze=f(),g(Q.$$.fragment),sa=f(),Bs=o("p"),It=t("At this point, only three steps remain:"),ea=f(),O=o("ol"),ws=o("li"),Wt=t("Define your training hyperparameters in "),Is=o("a"),Ut=t("TrainingArguments"),Gt=t("."),Rt=f(),ks=o("li"),Ht=t("Pass the training arguments to "),Ws=o("a"),Yt=t("Trainer"),Kt=t(" along with the model, dataset, tokenizer, and data collator."),Jt=f(),bs=o("li"),Qt=t("Call "),Us=o("a"),Vt=t("train()"),Xt=t(" to fine-tune your model."),aa=f(),g($s.$$.fragment),ta=f(),G=o("h2"),V=o("a"),ke=o("span"),g(vs.$$.fragment),Zt=f(),be=o("span"),sn=t("Fine-tune with TensorFlow"),na=f(),Gs=o("p"),en=t("To fine-tune a model in TensorFlow is just as easy, with only a few differences."),la=f(),g(X.$$.fragment),oa=f(),T=o("p"),an=t("Convert your datasets to the "),$e=o("code"),tn=t("tf.data.Dataset"),nn=t(" format with "),ys=o("a"),ve=o("code"),ln=t("to_tf_dataset"),on=t(". Specify inputs in "),ye=o("code"),rn=t("columns"),pn=t(", targets in "),Ee=o("code"),cn=t("label_cols"),hn=t(", whether to shuffle the dataset order, batch size, and the data collator:"),ra=f(),g(Es.$$.fragment),pa=f(),Rs=o("p"),fn=t("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),ia=f(),g(zs.$$.fragment),ca=f(),Z=o("p"),mn=t("Load BERT with "),Hs=o("a"),dn=t("TFAutoModelForMultipleChoice"),un=t(":"),ha=f(),g(qs.$$.fragment),fa=f(),ss=o("p"),_n=t("Configure the model for training with "),xs=o("a"),ze=o("code"),gn=t("compile"),jn=t(":"),ma=f(),g(Ts.$$.fragment),da=f(),es=o("p"),wn=t("Call "),Cs=o("a"),qe=o("code"),kn=t("fit"),bn=t(" to fine-tune the model:"),ua=f(),g(As.$$.fragment),this.h()},l(s){const l=Pl('[data-svelte="svelte-1phssyn"]',document.head);h=r(l,"META",{name:!0,content:!0}),l.forEach(a),u=m(s),i=r(s,"H1",{class:!0});var Ps=p(i);_=r(Ps,"A",{id:!0,class:!0,href:!0});var xe=p(_);v=r(xe,"SPAN",{});var Te=p(v);j(y.$$.fragment,Te),Te.forEach(a),xe.forEach(a),E=m(Ps),M=r(Ps,"SPAN",{});var vn=p(M);Ta=n(vn,"Multiple choice"),vn.forEach(a),Ps.forEach(a),Ae=m(s),Ms=r(s,"P",{});var yn=p(Ms);Ca=n(yn,"A multiple choice task is similar to question answering, except several candidate answers are provided along with a context. The model is trained to select the correct answer from multiple inputs given a context."),yn.forEach(a),Pe=m(s),A=r(s,"P",{});var as=p(A);Aa=n(as,"This guide will show you how to fine-tune "),ls=r(as,"A",{href:!0,rel:!0});var En=p(ls);Pa=n(En,"BERT"),En.forEach(a),Ma=n(as," on the "),Qs=r(as,"CODE",{});var zn=p(Qs);Da=n(zn,"regular"),zn.forEach(a),Fa=n(as," configuration of the "),os=r(as,"A",{href:!0,rel:!0});var qn=p(os);Oa=n(qn,"SWAG"),qn.forEach(a),Sa=n(as," dataset to select the best answer given multiple options and some context."),as.forEach(a),Me=m(s),B=r(s,"H2",{class:!0});var ga=p(B);R=r(ga,"A",{id:!0,class:!0,href:!0});var xn=p(R);Vs=r(xn,"SPAN",{});var Tn=p(Vs);j(rs.$$.fragment,Tn),Tn.forEach(a),xn.forEach(a),La=m(ga),Xs=r(ga,"SPAN",{});var Cn=p(Xs);Na=n(Cn,"Load SWAG dataset"),Cn.forEach(a),ga.forEach(a),De=m(s),Ds=r(s,"P",{});var An=p(Ds);Ba=n(An,"Load the SWAG dataset from the \u{1F917} Datasets library:"),An.forEach(a),Fe=m(s),j(ps.$$.fragment,s),Oe=m(s),Fs=r(s,"P",{});var Pn=p(Fs);Ia=n(Pn,"Then take a look at an example:"),Pn.forEach(a),Se=m(s),j(is.$$.fragment,s),Le=m(s),q=r(s,"P",{});var S=p(q);Wa=n(S,"The "),Zs=r(S,"CODE",{});var Mn=p(Zs);Ua=n(Mn,"sent1"),Mn.forEach(a),Ga=n(S," and "),se=r(S,"CODE",{});var Dn=p(se);Ra=n(Dn,"sent2"),Dn.forEach(a),Ha=n(S," fields show how a sentence begins, and each "),ee=r(S,"CODE",{});var Fn=p(ee);Ya=n(Fn,"ending"),Fn.forEach(a),Ka=n(S," field shows how a sentence could end. Given the sentence beginning, the model must pick the correct sentence ending as indicated by the "),ae=r(S,"CODE",{});var On=p(ae);Ja=n(On,"label"),On.forEach(a),Qa=n(S," field."),S.forEach(a),Ne=m(s),I=r(s,"H2",{class:!0});var ja=p(I);H=r(ja,"A",{id:!0,class:!0,href:!0});var Sn=p(H);te=r(Sn,"SPAN",{});var Ln=p(te);j(cs.$$.fragment,Ln),Ln.forEach(a),Sn.forEach(a),Va=m(ja),ne=r(ja,"SPAN",{});var Nn=p(ne);Xa=n(Nn,"Preprocess"),Nn.forEach(a),ja.forEach(a),Be=m(s),Os=r(s,"P",{});var Bn=p(Os);Za=n(Bn,"Load the BERT tokenizer to process the start of each sentence and the four possible endings:"),Bn.forEach(a),Ie=m(s),j(hs.$$.fragment,s),We=m(s),Ss=r(s,"P",{});var In=p(Ss);st=n(In,"The preprocessing function needs to do:"),In.forEach(a),Ue=m(s),F=r(s,"OL",{});var Ys=p(F);W=r(Ys,"LI",{});var Ks=p(W);et=n(Ks,"Make four copies of the "),le=r(Ks,"CODE",{});var Wn=p(le);at=n(Wn,"sent1"),Wn.forEach(a),tt=n(Ks," field so you can combine each of them with "),oe=r(Ks,"CODE",{});var Un=p(oe);nt=n(Un,"sent2"),Un.forEach(a),lt=n(Ks," to recreate how a sentence starts."),Ks.forEach(a),ot=m(Ys),fs=r(Ys,"LI",{});var wa=p(fs);rt=n(wa,"Combine "),re=r(wa,"CODE",{});var Gn=p(re);pt=n(Gn,"sent2"),Gn.forEach(a),it=n(wa," with each of the four possible sentence endings."),wa.forEach(a),ct=m(Ys),D=r(Ys,"LI",{});var ts=p(D);ht=n(ts,"Flatten these two lists so you can tokenize them, and then unflatten them afterward so each example has a corresponding "),pe=r(ts,"CODE",{});var Rn=p(pe);ft=n(Rn,"input_ids"),Rn.forEach(a),mt=n(ts,", "),ie=r(ts,"CODE",{});var Hn=p(ie);dt=n(Hn,"attention_mask"),Hn.forEach(a),ut=n(ts,", and "),ce=r(ts,"CODE",{});var Yn=p(ce);_t=n(Yn,"labels"),Yn.forEach(a),gt=n(ts," field."),ts.forEach(a),Ys.forEach(a),Ge=m(s),j(ms.$$.fragment,s),Re=m(s),P=r(s,"P",{});var ns=p(P);jt=n(ns,"Use \u{1F917} Datasets "),ds=r(ns,"A",{href:!0,rel:!0});var Kn=p(ds);he=r(Kn,"CODE",{});var Jn=p(he);wt=n(Jn,"map"),Jn.forEach(a),Kn.forEach(a),kt=n(ns," function to apply the preprocessing function over the entire dataset. You can speed up the "),fe=r(ns,"CODE",{});var Qn=p(fe);bt=n(Qn,"map"),Qn.forEach(a),$t=n(ns," function by setting "),me=r(ns,"CODE",{});var Vn=p(me);vt=n(Vn,"batched=True"),Vn.forEach(a),yt=n(ns," to process multiple elements of the dataset at once:"),ns.forEach(a),He=m(s),j(us.$$.fragment,s),Ye=m(s),x=r(s,"P",{});var L=p(x);Et=n(L,"\u{1F917} Transformers doesn\u2019t have a data collator for multiple choice, so you will need to create one. You can adapt the "),Ls=r(L,"A",{href:!0});var Xn=p(Ls);zt=n(Xn,"DataCollatorWithPadding"),Xn.forEach(a),qt=n(L," to create a batch of examples for multiple choice. It will also "),de=r(L,"EM",{});var Zn=p(de);xt=n(Zn,"dynamically pad"),Zn.forEach(a),Tt=n(L," your text and labels to the length of the longest element in its batch, so they are a uniform length. While it is possible to pad your text in the "),ue=r(L,"CODE",{});var sl=p(ue);Ct=n(sl,"tokenizer"),sl.forEach(a),At=n(L," function by setting "),_e=r(L,"CODE",{});var el=p(_e);Pt=n(el,"padding=True"),el.forEach(a),Mt=n(L,", dynamic padding is more efficient."),L.forEach(a),Ke=m(s),_s=r(s,"P",{});var $n=p(_s);ge=r($n,"CODE",{});var al=p(ge);Dt=n(al,"DataCollatorForMultipleChoice"),al.forEach(a),Ft=n($n," will flatten all the model inputs, apply padding, and then unflatten the results:"),$n.forEach(a),Je=m(s),j(Y.$$.fragment,s),Qe=m(s),U=r(s,"H2",{class:!0});var ka=p(U);K=r(ka,"A",{id:!0,class:!0,href:!0});var tl=p(K);je=r(tl,"SPAN",{});var nl=p(je);j(gs.$$.fragment,nl),nl.forEach(a),tl.forEach(a),Ot=m(ka),we=r(ka,"SPAN",{});var ll=p(we);St=n(ll,"Fine-tune with Trainer"),ll.forEach(a),ka.forEach(a),Ve=m(s),J=r(s,"P",{});var ba=p(J);Lt=n(ba,"Load BERT with "),Ns=r(ba,"A",{href:!0});var ol=p(Ns);Nt=n(ol,"AutoModelForMultipleChoice"),ol.forEach(a),Bt=n(ba,":"),ba.forEach(a),Xe=m(s),j(js.$$.fragment,s),Ze=m(s),j(Q.$$.fragment,s),sa=m(s),Bs=r(s,"P",{});var rl=p(Bs);It=n(rl,"At this point, only three steps remain:"),rl.forEach(a),ea=m(s),O=r(s,"OL",{});var Js=p(O);ws=r(Js,"LI",{});var $a=p(ws);Wt=n($a,"Define your training hyperparameters in "),Is=r($a,"A",{href:!0});var pl=p(Is);Ut=n(pl,"TrainingArguments"),pl.forEach(a),Gt=n($a,"."),$a.forEach(a),Rt=m(Js),ks=r(Js,"LI",{});var va=p(ks);Ht=n(va,"Pass the training arguments to "),Ws=r(va,"A",{href:!0});var il=p(Ws);Yt=n(il,"Trainer"),il.forEach(a),Kt=n(va," along with the model, dataset, tokenizer, and data collator."),va.forEach(a),Jt=m(Js),bs=r(Js,"LI",{});var ya=p(bs);Qt=n(ya,"Call "),Us=r(ya,"A",{href:!0});var cl=p(Us);Vt=n(cl,"train()"),cl.forEach(a),Xt=n(ya," to fine-tune your model."),ya.forEach(a),Js.forEach(a),aa=m(s),j($s.$$.fragment,s),ta=m(s),G=r(s,"H2",{class:!0});var Ea=p(G);V=r(Ea,"A",{id:!0,class:!0,href:!0});var hl=p(V);ke=r(hl,"SPAN",{});var fl=p(ke);j(vs.$$.fragment,fl),fl.forEach(a),hl.forEach(a),Zt=m(Ea),be=r(Ea,"SPAN",{});var ml=p(be);sn=n(ml,"Fine-tune with TensorFlow"),ml.forEach(a),Ea.forEach(a),na=m(s),Gs=r(s,"P",{});var dl=p(Gs);en=n(dl,"To fine-tune a model in TensorFlow is just as easy, with only a few differences."),dl.forEach(a),la=m(s),j(X.$$.fragment,s),oa=m(s),T=r(s,"P",{});var N=p(T);an=n(N,"Convert your datasets to the "),$e=r(N,"CODE",{});var ul=p($e);tn=n(ul,"tf.data.Dataset"),ul.forEach(a),nn=n(N," format with "),ys=r(N,"A",{href:!0,rel:!0});var _l=p(ys);ve=r(_l,"CODE",{});var gl=p(ve);ln=n(gl,"to_tf_dataset"),gl.forEach(a),_l.forEach(a),on=n(N,". Specify inputs in "),ye=r(N,"CODE",{});var jl=p(ye);rn=n(jl,"columns"),jl.forEach(a),pn=n(N,", targets in "),Ee=r(N,"CODE",{});var wl=p(Ee);cn=n(wl,"label_cols"),wl.forEach(a),hn=n(N,", whether to shuffle the dataset order, batch size, and the data collator:"),N.forEach(a),ra=m(s),j(Es.$$.fragment,s),pa=m(s),Rs=r(s,"P",{});var kl=p(Rs);fn=n(kl,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),kl.forEach(a),ia=m(s),j(zs.$$.fragment,s),ca=m(s),Z=r(s,"P",{});var za=p(Z);mn=n(za,"Load BERT with "),Hs=r(za,"A",{href:!0});var bl=p(Hs);dn=n(bl,"TFAutoModelForMultipleChoice"),bl.forEach(a),un=n(za,":"),za.forEach(a),ha=m(s),j(qs.$$.fragment,s),fa=m(s),ss=r(s,"P",{});var qa=p(ss);_n=n(qa,"Configure the model for training with "),xs=r(qa,"A",{href:!0,rel:!0});var $l=p(xs);ze=r($l,"CODE",{});var vl=p(ze);gn=n(vl,"compile"),vl.forEach(a),$l.forEach(a),jn=n(qa,":"),qa.forEach(a),ma=m(s),j(Ts.$$.fragment,s),da=m(s),es=r(s,"P",{});var xa=p(es);wn=n(xa,"Call "),Cs=r(xa,"A",{href:!0,rel:!0});var yl=p(Cs);qe=r(yl,"CODE",{});var El=p(qe);kn=n(El,"fit"),El.forEach(a),yl.forEach(a),bn=n(xa," to fine-tune the model:"),xa.forEach(a),ua=m(s),j(As.$$.fragment,s),this.h()},h(){d(h,"name","hf:doc:metadata"),d(h,"content",JSON.stringify(Il)),d(_,"id","multiple-choice"),d(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(_,"href","#multiple-choice"),d(i,"class","relative group"),d(ls,"href","https://huggingface.co/bert-base-uncased"),d(ls,"rel","nofollow"),d(os,"href","https://huggingface.co/datasets/swag"),d(os,"rel","nofollow"),d(R,"id","load-swag-dataset"),d(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(R,"href","#load-swag-dataset"),d(B,"class","relative group"),d(H,"id","preprocess"),d(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(H,"href","#preprocess"),d(I,"class","relative group"),d(ds,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),d(ds,"rel","nofollow"),d(Ls,"href","/docs/transformers/master/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),d(K,"id","finetune-with-trainer"),d(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(K,"href","#finetune-with-trainer"),d(U,"class","relative group"),d(Ns,"href","/docs/transformers/master/en/model_doc/auto#transformers.AutoModelForMultipleChoice"),d(Is,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),d(Ws,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),d(Us,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer.train"),d(V,"id","finetune-with-tensorflow"),d(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(V,"href","#finetune-with-tensorflow"),d(G,"class","relative group"),d(ys,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.to_tf_dataset"),d(ys,"rel","nofollow"),d(Hs,"href","/docs/transformers/master/en/model_doc/auto#transformers.TFAutoModelForMultipleChoice"),d(xs,"href","https://keras.io/api/models/model_training_apis/#compile-method"),d(xs,"rel","nofollow"),d(Cs,"href","https://keras.io/api/models/model_training_apis/#fit-method"),d(Cs,"rel","nofollow")},m(s,l){e(document.head,h),c(s,u,l),c(s,i,l),e(i,_),e(_,v),w(y,v,null),e(i,E),e(i,M),e(M,Ta),c(s,Ae,l),c(s,Ms,l),e(Ms,Ca),c(s,Pe,l),c(s,A,l),e(A,Aa),e(A,ls),e(ls,Pa),e(A,Ma),e(A,Qs),e(Qs,Da),e(A,Fa),e(A,os),e(os,Oa),e(A,Sa),c(s,Me,l),c(s,B,l),e(B,R),e(R,Vs),w(rs,Vs,null),e(B,La),e(B,Xs),e(Xs,Na),c(s,De,l),c(s,Ds,l),e(Ds,Ba),c(s,Fe,l),w(ps,s,l),c(s,Oe,l),c(s,Fs,l),e(Fs,Ia),c(s,Se,l),w(is,s,l),c(s,Le,l),c(s,q,l),e(q,Wa),e(q,Zs),e(Zs,Ua),e(q,Ga),e(q,se),e(se,Ra),e(q,Ha),e(q,ee),e(ee,Ya),e(q,Ka),e(q,ae),e(ae,Ja),e(q,Qa),c(s,Ne,l),c(s,I,l),e(I,H),e(H,te),w(cs,te,null),e(I,Va),e(I,ne),e(ne,Xa),c(s,Be,l),c(s,Os,l),e(Os,Za),c(s,Ie,l),w(hs,s,l),c(s,We,l),c(s,Ss,l),e(Ss,st),c(s,Ue,l),c(s,F,l),e(F,W),e(W,et),e(W,le),e(le,at),e(W,tt),e(W,oe),e(oe,nt),e(W,lt),e(F,ot),e(F,fs),e(fs,rt),e(fs,re),e(re,pt),e(fs,it),e(F,ct),e(F,D),e(D,ht),e(D,pe),e(pe,ft),e(D,mt),e(D,ie),e(ie,dt),e(D,ut),e(D,ce),e(ce,_t),e(D,gt),c(s,Ge,l),w(ms,s,l),c(s,Re,l),c(s,P,l),e(P,jt),e(P,ds),e(ds,he),e(he,wt),e(P,kt),e(P,fe),e(fe,bt),e(P,$t),e(P,me),e(me,vt),e(P,yt),c(s,He,l),w(us,s,l),c(s,Ye,l),c(s,x,l),e(x,Et),e(x,Ls),e(Ls,zt),e(x,qt),e(x,de),e(de,xt),e(x,Tt),e(x,ue),e(ue,Ct),e(x,At),e(x,_e),e(_e,Pt),e(x,Mt),c(s,Ke,l),c(s,_s,l),e(_s,ge),e(ge,Dt),e(_s,Ft),c(s,Je,l),w(Y,s,l),c(s,Qe,l),c(s,U,l),e(U,K),e(K,je),w(gs,je,null),e(U,Ot),e(U,we),e(we,St),c(s,Ve,l),c(s,J,l),e(J,Lt),e(J,Ns),e(Ns,Nt),e(J,Bt),c(s,Xe,l),w(js,s,l),c(s,Ze,l),w(Q,s,l),c(s,sa,l),c(s,Bs,l),e(Bs,It),c(s,ea,l),c(s,O,l),e(O,ws),e(ws,Wt),e(ws,Is),e(Is,Ut),e(ws,Gt),e(O,Rt),e(O,ks),e(ks,Ht),e(ks,Ws),e(Ws,Yt),e(ks,Kt),e(O,Jt),e(O,bs),e(bs,Qt),e(bs,Us),e(Us,Vt),e(bs,Xt),c(s,aa,l),w($s,s,l),c(s,ta,l),c(s,G,l),e(G,V),e(V,ke),w(vs,ke,null),e(G,Zt),e(G,be),e(be,sn),c(s,na,l),c(s,Gs,l),e(Gs,en),c(s,la,l),w(X,s,l),c(s,oa,l),c(s,T,l),e(T,an),e(T,$e),e($e,tn),e(T,nn),e(T,ys),e(ys,ve),e(ve,ln),e(T,on),e(T,ye),e(ye,rn),e(T,pn),e(T,Ee),e(Ee,cn),e(T,hn),c(s,ra,l),w(Es,s,l),c(s,pa,l),c(s,Rs,l),e(Rs,fn),c(s,ia,l),w(zs,s,l),c(s,ca,l),c(s,Z,l),e(Z,mn),e(Z,Hs),e(Hs,dn),e(Z,un),c(s,ha,l),w(qs,s,l),c(s,fa,l),c(s,ss,l),e(ss,_n),e(ss,xs),e(xs,ze),e(ze,gn),e(ss,jn),c(s,ma,l),w(Ts,s,l),c(s,da,l),c(s,es,l),e(es,wn),e(es,Cs),e(Cs,qe),e(qe,kn),e(es,bn),c(s,ua,l),w(As,s,l),_a=!0},p(s,[l]){const Ps={};l&2&&(Ps.$$scope={dirty:l,ctx:s}),Y.$set(Ps);const xe={};l&2&&(xe.$$scope={dirty:l,ctx:s}),Q.$set(xe);const Te={};l&2&&(Te.$$scope={dirty:l,ctx:s}),X.$set(Te)},i(s){_a||(k(y.$$.fragment,s),k(rs.$$.fragment,s),k(ps.$$.fragment,s),k(is.$$.fragment,s),k(cs.$$.fragment,s),k(hs.$$.fragment,s),k(ms.$$.fragment,s),k(us.$$.fragment,s),k(Y.$$.fragment,s),k(gs.$$.fragment,s),k(js.$$.fragment,s),k(Q.$$.fragment,s),k($s.$$.fragment,s),k(vs.$$.fragment,s),k(X.$$.fragment,s),k(Es.$$.fragment,s),k(zs.$$.fragment,s),k(qs.$$.fragment,s),k(Ts.$$.fragment,s),k(As.$$.fragment,s),_a=!0)},o(s){b(y.$$.fragment,s),b(rs.$$.fragment,s),b(ps.$$.fragment,s),b(is.$$.fragment,s),b(cs.$$.fragment,s),b(hs.$$.fragment,s),b(ms.$$.fragment,s),b(us.$$.fragment,s),b(Y.$$.fragment,s),b(gs.$$.fragment,s),b(js.$$.fragment,s),b(Q.$$.fragment,s),b($s.$$.fragment,s),b(vs.$$.fragment,s),b(X.$$.fragment,s),b(Es.$$.fragment,s),b(zs.$$.fragment,s),b(qs.$$.fragment,s),b(Ts.$$.fragment,s),b(As.$$.fragment,s),_a=!1},d(s){a(h),s&&a(u),s&&a(i),$(y),s&&a(Ae),s&&a(Ms),s&&a(Pe),s&&a(A),s&&a(Me),s&&a(B),$(rs),s&&a(De),s&&a(Ds),s&&a(Fe),$(ps,s),s&&a(Oe),s&&a(Fs),s&&a(Se),$(is,s),s&&a(Le),s&&a(q),s&&a(Ne),s&&a(I),$(cs),s&&a(Be),s&&a(Os),s&&a(Ie),$(hs,s),s&&a(We),s&&a(Ss),s&&a(Ue),s&&a(F),s&&a(Ge),$(ms,s),s&&a(Re),s&&a(P),s&&a(He),$(us,s),s&&a(Ye),s&&a(x),s&&a(Ke),s&&a(_s),s&&a(Je),$(Y,s),s&&a(Qe),s&&a(U),$(gs),s&&a(Ve),s&&a(J),s&&a(Xe),$(js,s),s&&a(Ze),$(Q,s),s&&a(sa),s&&a(Bs),s&&a(ea),s&&a(O),s&&a(aa),$($s,s),s&&a(ta),s&&a(G),$(vs),s&&a(na),s&&a(Gs),s&&a(la),$(X,s),s&&a(oa),s&&a(T),s&&a(ra),$(Es,s),s&&a(pa),s&&a(Rs),s&&a(ia),$(zs,s),s&&a(ca),s&&a(Z),s&&a(ha),$(qs,s),s&&a(fa),s&&a(ss),s&&a(ma),$(Ts,s),s&&a(da),s&&a(es),s&&a(ua),$(As,s)}}}const Il={local:"multiple-choice",sections:[{local:"load-swag-dataset",title:"Load SWAG dataset"},{local:"preprocess",title:"Preprocess"},{local:"finetune-with-trainer",title:"Fine-tune with Trainer"},{local:"finetune-with-tensorflow",title:"Fine-tune with TensorFlow"}],title:"Multiple choice"};function Wl(z,h,u){let{fw:i}=h;return z.$$set=_=>{"fw"in _&&u(0,i=_.fw)},[i]}class Kl extends Tl{constructor(h){super();Cl(this,h,Wl,Bl,Al,{fw:0})}}export{Kl as default,Il as metadata};
