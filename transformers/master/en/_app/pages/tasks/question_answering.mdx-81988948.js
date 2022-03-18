import{S as Uo,i as Ho,s as Vo,e as r,k as c,w,t as a,M as Yo,c as l,d as e,m as u,a as i,x as $,h as n,b as m,F as t,g as h,y as j,q as v,o as x,B as b,L as No}from"../../chunks/vendor-6b77c823.js";import{T as Ve}from"../../chunks/Tip-39098574.js";import{Y as Bo}from"../../chunks/Youtube-5c6e11e6.js";import{I as Rt}from"../../chunks/IconCopyLink-7a11ce68.js";import{C as D}from"../../chunks/CodeBlock-3a8b25a8.js";import{F as Jo,M as Ro}from"../../chunks/Markdown-4489c441.js";function Go(A){let f,d,p,_,q;return{c(){f=r("p"),d=a("See the question answering "),p=r("a"),_=a("task page"),q=a(" for more information about other forms of question answering and their associated models, datasets, and metrics."),this.h()},l(g){f=l(g,"P",{});var k=i(f);d=n(k,"See the question answering "),p=l(k,"A",{href:!0,rel:!0});var E=i(p);_=n(E,"task page"),E.forEach(e),q=n(k," for more information about other forms of question answering and their associated models, datasets, and metrics."),k.forEach(e),this.h()},h(){m(p,"href","https://huggingface.co/tasks/question-answering"),m(p,"rel","nofollow")},m(g,k){h(g,f,k),t(f,d),t(f,p),t(p,_),t(f,q)},d(g){g&&e(f)}}}function Ko(A){let f,d;return f=new D({props:{code:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DefaultDataCollator()`}}),{c(){w(f.$$.fragment)},l(p){$(f.$$.fragment,p)},m(p,_){j(f,p,_),d=!0},p:No,i(p){d||(v(f.$$.fragment,p),d=!0)},o(p){x(f.$$.fragment,p),d=!1},d(p){b(f,p)}}}function Wo(A){let f,d;return f=new Ro({props:{$$slots:{default:[Ko]},$$scope:{ctx:A}}}),{c(){w(f.$$.fragment)},l(p){$(f.$$.fragment,p)},m(p,_){j(f,p,_),d=!0},p(p,_){const q={};_&2&&(q.$$scope={dirty:_,ctx:p}),f.$set(q)},i(p){d||(v(f.$$.fragment,p),d=!0)},o(p){x(f.$$.fragment,p),d=!1},d(p){b(f,p)}}}function Xo(A){let f,d;return f=new D({props:{code:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator(return_tensors="tf")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DefaultDataCollator(return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),{c(){w(f.$$.fragment)},l(p){$(f.$$.fragment,p)},m(p,_){j(f,p,_),d=!0},p:No,i(p){d||(v(f.$$.fragment,p),d=!0)},o(p){x(f.$$.fragment,p),d=!1},d(p){b(f,p)}}}function Zo(A){let f,d;return f=new Ro({props:{$$slots:{default:[Xo]},$$scope:{ctx:A}}}),{c(){w(f.$$.fragment)},l(p){$(f.$$.fragment,p)},m(p,_){j(f,p,_),d=!0},p(p,_){const q={};_&2&&(q.$$scope={dirty:_,ctx:p}),f.$set(q)},i(p){d||(v(f.$$.fragment,p),d=!0)},o(p){x(f.$$.fragment,p),d=!1},d(p){b(f,p)}}}function sr(A){let f,d,p,_,q,g,k,E;return{c(){f=r("p"),d=a("If you aren\u2019t familiar with fine-tuning a model with the "),p=r("a"),_=a("Trainer"),q=a(", take a look at the basic tutorial "),g=r("a"),k=a("here"),E=a("!"),this.h()},l(T){f=l(T,"P",{});var y=i(f);d=n(y,"If you aren\u2019t familiar with fine-tuning a model with the "),p=l(y,"A",{href:!0});var z=i(p);_=n(z,"Trainer"),z.forEach(e),q=n(y,", take a look at the basic tutorial "),g=l(y,"A",{href:!0});var M=i(g);k=n(M,"here"),M.forEach(e),E=n(y,"!"),y.forEach(e),this.h()},h(){m(p,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),m(g,"href","../training#finetune-with-trainer")},m(T,y){h(T,f,y),t(f,d),t(f,p),t(p,_),t(f,q),t(f,g),t(g,k),t(f,E)},d(T){T&&e(f)}}}function tr(A){let f,d,p,_,q;return{c(){f=r("p"),d=a("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),p=r("a"),_=a("here"),q=a("!"),this.h()},l(g){f=l(g,"P",{});var k=i(f);d=n(k,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),p=l(k,"A",{href:!0});var E=i(p);_=n(E,"here"),E.forEach(e),q=n(k,"!"),k.forEach(e),this.h()},h(){m(p,"href","../training#finetune-with-keras")},m(g,k){h(g,f,k),t(f,d),t(f,p),t(p,_),t(f,q)},d(g){g&&e(f)}}}function er(A){let f,d,p,_,q,g,k,E;return{c(){f=r("p"),d=a(`For a more in-depth example of how to fine-tune a model for question answering, take a look at the corresponding
`),p=r("a"),_=a("PyTorch notebook"),q=a(`
or `),g=r("a"),k=a("TensorFlow notebook"),E=a("."),this.h()},l(T){f=l(T,"P",{});var y=i(f);d=n(y,`For a more in-depth example of how to fine-tune a model for question answering, take a look at the corresponding
`),p=l(y,"A",{href:!0,rel:!0});var z=i(p);_=n(z,"PyTorch notebook"),z.forEach(e),q=n(y,`
or `),g=l(y,"A",{href:!0,rel:!0});var M=i(g);k=n(M,"TensorFlow notebook"),M.forEach(e),E=n(y,"."),y.forEach(e),this.h()},h(){m(p,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/master/examples/question_answering.ipynb"),m(p,"rel","nofollow"),m(g,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/master/examples/question_answering-tf.ipynb"),m(g,"rel","nofollow")},m(T,y){h(T,f,y),t(f,d),t(f,p),t(p,_),t(f,q),t(f,g),t(g,k),t(f,E)},d(T){T&&e(f)}}}function ar(A){let f,d,p,_,q,g,k,E,T,y,z,M,Bs,Ye,Ut,J,lt,Je,Ge,it,Ke,Ht,O,We,us,Xe,Ze,ms,sa,ta,Vt,G,Yt,R,K,pt,ds,ea,ft,aa,Jt,Ns,na,Gt,_s,Kt,Rs,oa,Wt,gs,Xt,L,ra,ht,la,ia,ct,pa,fa,Zt,U,W,ut,ws,ha,mt,ca,se,$s,te,Q,ua,dt,ma,da,_t,_a,ga,ee,js,ae,Us,wa,ne,I,P,$a,gt,ja,va,wt,xa,ba,$t,qa,ka,ya,H,Ea,jt,Aa,Ta,vt,Da,za,Ca,S,Fa,vs,xt,Pa,Sa,bt,Ma,Oa,qt,La,Qa,oe,X,Ia,kt,Ba,Na,re,xs,le,C,Ra,bs,yt,Ua,Ha,Et,Va,Ya,At,Ja,Ga,ie,qs,pe,B,Ka,Hs,Wa,Xa,Tt,Za,sn,fe,Z,he,V,ss,Dt,ks,tn,zt,en,ce,ts,an,Vs,nn,on,ue,ys,me,es,de,Ys,rn,_e,N,Es,ln,Js,pn,fn,hn,As,cn,Gs,un,mn,dn,Ts,_n,Ks,gn,wn,ge,Ds,we,Y,as,Ct,zs,$n,Ft,jn,$e,Ws,vn,je,ns,ve,F,xn,Pt,bn,qn,Cs,St,kn,yn,Mt,En,An,xe,Fs,be,Xs,Tn,qe,Ps,ke,os,Dn,Zs,zn,Cn,ye,Ss,Ee,rs,Fn,Ms,Ot,Pn,Sn,Ae,Os,Te,ls,Mn,Ls,Lt,On,Ln,De,Qs,ze,is,Ce;return g=new Rt({}),z=new Bo({props:{id:"ajPx5LwJD-I"}}),G=new Ve({props:{$$slots:{default:[Go]},$$scope:{ctx:A}}}),ds=new Rt({}),_s=new D({props:{code:`from datasets import load_dataset

squad = load_dataset("squad")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&quot;squad&quot;</span>)`}}),gs=new D({props:{code:'squad["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>squad[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;answers&#x27;</span>: {<span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">515</span>], <span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Saint Bernadette Soubirous&#x27;</span>]},
 <span class="hljs-string">&#x27;context&#x27;</span>: <span class="hljs-string">&#x27;Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot;Venite Ad Me Omnes&quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.&#x27;</span>,
 <span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;5733be284776f41900661182&#x27;</span>,
 <span class="hljs-string">&#x27;question&#x27;</span>: <span class="hljs-string">&#x27;To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?&#x27;</span>,
 <span class="hljs-string">&#x27;title&#x27;</span>: <span class="hljs-string">&#x27;University_of_Notre_Dame&#x27;</span>
}`}}),ws=new Rt({}),$s=new Bo({props:{id:"qgaM0weJHpA"}}),js=new D({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),xs=new D({props:{code:`def preprocess_function(examples):
    questions = [q.strip() for q in examples["question"]]
    inputs = tokenizer(
        questions,
        examples["context"],
        max_length=384,
        truncation="only_second",
        return_offsets_mapping=True,
        padding="max_length",
    )

    offset_mapping = inputs.pop("offset_mapping")
    answers = examples["answers"]
    start_positions = []
    end_positions = []

    for i, offset in enumerate(offset_mapping):
        answer = answers[i]
        start_char = answer["answer_start"][0]
        end_char = answer["answer_start"][0] + len(answer["text"][0])
        sequence_ids = inputs.sequence_ids(i)

        # Find the start and end of the context
        idx = 0
        while sequence_ids[idx] != 1:
            idx += 1
        context_start = idx
        while sequence_ids[idx] == 1:
            idx += 1
        context_end = idx - 1

        # If the answer is not fully inside the context, label it (0, 0)
        if offset[context_start][0] > end_char or offset[context_end][1] < start_char:
            start_positions.append(0)
            end_positions.append(0)
        else:
            # Otherwise it's the start and end token positions
            idx = context_start
            while idx <= context_end and offset[idx][0] <= start_char:
                idx += 1
            start_positions.append(idx - 1)

            idx = context_end
            while idx >= context_start and offset[idx][1] >= end_char:
                idx -= 1
            end_positions.append(idx + 1)

    inputs["start_positions"] = start_positions
    inputs["end_positions"] = end_positions
    return inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
<span class="hljs-meta">... </span>    questions = [q.strip() <span class="hljs-keyword">for</span> q <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;question&quot;</span>]]
<span class="hljs-meta">... </span>    inputs = tokenizer(
<span class="hljs-meta">... </span>        questions,
<span class="hljs-meta">... </span>        examples[<span class="hljs-string">&quot;context&quot;</span>],
<span class="hljs-meta">... </span>        max_length=<span class="hljs-number">384</span>,
<span class="hljs-meta">... </span>        truncation=<span class="hljs-string">&quot;only_second&quot;</span>,
<span class="hljs-meta">... </span>        return_offsets_mapping=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>        padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>    )

<span class="hljs-meta">... </span>    offset_mapping = inputs.pop(<span class="hljs-string">&quot;offset_mapping&quot;</span>)
<span class="hljs-meta">... </span>    answers = examples[<span class="hljs-string">&quot;answers&quot;</span>]
<span class="hljs-meta">... </span>    start_positions = []
<span class="hljs-meta">... </span>    end_positions = []

<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> i, offset <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(offset_mapping):
<span class="hljs-meta">... </span>        answer = answers[i]
<span class="hljs-meta">... </span>        start_char = answer[<span class="hljs-string">&quot;answer_start&quot;</span>][<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>        end_char = answer[<span class="hljs-string">&quot;answer_start&quot;</span>][<span class="hljs-number">0</span>] + <span class="hljs-built_in">len</span>(answer[<span class="hljs-string">&quot;text&quot;</span>][<span class="hljs-number">0</span>])
<span class="hljs-meta">... </span>        sequence_ids = inputs.sequence_ids(i)

<span class="hljs-meta">... </span>        <span class="hljs-comment"># Find the start and end of the context</span>
<span class="hljs-meta">... </span>        idx = <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>        <span class="hljs-keyword">while</span> sequence_ids[idx] != <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>            idx += <span class="hljs-number">1</span>
<span class="hljs-meta">... </span>        context_start = idx
<span class="hljs-meta">... </span>        <span class="hljs-keyword">while</span> sequence_ids[idx] == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>            idx += <span class="hljs-number">1</span>
<span class="hljs-meta">... </span>        context_end = idx - <span class="hljs-number">1</span>

<span class="hljs-meta">... </span>        <span class="hljs-comment"># If the answer is not fully inside the context, label it (0, 0)</span>
<span class="hljs-meta">... </span>        <span class="hljs-keyword">if</span> offset[context_start][<span class="hljs-number">0</span>] &gt; end_char <span class="hljs-keyword">or</span> offset[context_end][<span class="hljs-number">1</span>] &lt; start_char:
<span class="hljs-meta">... </span>            start_positions.append(<span class="hljs-number">0</span>)
<span class="hljs-meta">... </span>            end_positions.append(<span class="hljs-number">0</span>)
<span class="hljs-meta">... </span>        <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>            <span class="hljs-comment"># Otherwise it&#x27;s the start and end token positions</span>
<span class="hljs-meta">... </span>            idx = context_start
<span class="hljs-meta">... </span>            <span class="hljs-keyword">while</span> idx &lt;= context_end <span class="hljs-keyword">and</span> offset[idx][<span class="hljs-number">0</span>] &lt;= start_char:
<span class="hljs-meta">... </span>                idx += <span class="hljs-number">1</span>
<span class="hljs-meta">... </span>            start_positions.append(idx - <span class="hljs-number">1</span>)

<span class="hljs-meta">... </span>            idx = context_end
<span class="hljs-meta">... </span>            <span class="hljs-keyword">while</span> idx &gt;= context_start <span class="hljs-keyword">and</span> offset[idx][<span class="hljs-number">1</span>] &gt;= end_char:
<span class="hljs-meta">... </span>                idx -= <span class="hljs-number">1</span>
<span class="hljs-meta">... </span>            end_positions.append(idx + <span class="hljs-number">1</span>)

<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;start_positions&quot;</span>] = start_positions
<span class="hljs-meta">... </span>    inputs[<span class="hljs-string">&quot;end_positions&quot;</span>] = end_positions
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> inputs`}}),qs=new D({props:{code:'tokenized_squad = squad.map(preprocess_function, batched=True, remove_columns=squad["train"].column_names)',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_squad = squad.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>, remove_columns=squad[<span class="hljs-string">&quot;train&quot;</span>].column_names)'}}),Z=new Jo({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Zo],pytorch:[Wo]},$$scope:{ctx:A}}}),ks=new Rt({}),ys=new D({props:{code:`from transformers import AutoModelForQuestionAnswering, TrainingArguments, Trainer

model = AutoModelForQuestionAnswering.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForQuestionAnswering, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),es=new Ve({props:{$$slots:{default:[sr]},$$scope:{ctx:A}}}),Ds=new D({props:{code:`training_args = TrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",
    learning_rate=2e-5,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=16,
    num_train_epochs=3,
    weight_decay=0.01,
)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_squad["train"],
    eval_dataset=tokenized_squad["validation"],
    tokenizer=tokenizer,
    data_collator=data_collator,
)

trainer.train()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>training_args = TrainingArguments(
<span class="hljs-meta">... </span>    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
<span class="hljs-meta">... </span>    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
<span class="hljs-meta">... </span>    learning_rate=<span class="hljs-number">2e-5</span>,
<span class="hljs-meta">... </span>    per_device_train_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    per_device_eval_batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    num_train_epochs=<span class="hljs-number">3</span>,
<span class="hljs-meta">... </span>    weight_decay=<span class="hljs-number">0.01</span>,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer = Trainer(
<span class="hljs-meta">... </span>    model=model,
<span class="hljs-meta">... </span>    args=training_args,
<span class="hljs-meta">... </span>    train_dataset=tokenized_squad[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    eval_dataset=tokenized_squad[<span class="hljs-string">&quot;validation&quot;</span>],
<span class="hljs-meta">... </span>    tokenizer=tokenizer,
<span class="hljs-meta">... </span>    data_collator=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),zs=new Rt({}),ns=new Ve({props:{$$slots:{default:[tr]},$$scope:{ctx:A}}}),Fs=new D({props:{code:`tf_train_set = tokenized_squad["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "start_positions", "end_positions"],
    dummy_labels=True,
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_set = tokenized_squad["validation"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "start_positions", "end_positions"],
    dummy_labels=True,
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tf_train_set = tokenized_squad[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;start_positions&quot;</span>, <span class="hljs-string">&quot;end_positions&quot;</span>],
<span class="hljs-meta">... </span>    dummy_labels=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tf_validation_set = tokenized_squad[<span class="hljs-string">&quot;validation&quot;</span>].to_tf_dataset(
<span class="hljs-meta">... </span>    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;start_positions&quot;</span>, <span class="hljs-string">&quot;end_positions&quot;</span>],
<span class="hljs-meta">... </span>    dummy_labels=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)`}}),Ps=new D({props:{code:`from transformers import create_optimizer

batch_size = 16
num_epochs = 2
total_train_steps = (len(tokenized_squad["train"]) // batch_size) * num_epochs
optimizer, schedule = create_optimizer(
    init_lr=2e-5,
    num_warmup_steps=0,
    num_train_steps=total_train_steps,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer

<span class="hljs-meta">&gt;&gt;&gt; </span>batch_size = <span class="hljs-number">16</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_epochs = <span class="hljs-number">2</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>total_train_steps = (<span class="hljs-built_in">len</span>(tokenized_squad[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size) * num_epochs
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer, schedule = create_optimizer(
<span class="hljs-meta">... </span>    init_lr=<span class="hljs-number">2e-5</span>,
<span class="hljs-meta">... </span>    num_warmup_steps=<span class="hljs-number">0</span>,
<span class="hljs-meta">... </span>    num_train_steps=total_train_steps,
<span class="hljs-meta">... </span>)`}}),Ss=new D({props:{code:`from transformers import TFAutoModelForQuestionAnswering

model = TFAutoModelForQuestionAnswering("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForQuestionAnswering(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),Os=new D({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),Qs=new D({props:{code:"model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=3)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=<span class="hljs-number">3</span>)'}}),is=new Ve({props:{$$slots:{default:[er]},$$scope:{ctx:A}}}),{c(){f=r("meta"),d=c(),p=r("h1"),_=r("a"),q=r("span"),w(g.$$.fragment),k=c(),E=r("span"),T=a("Question answering"),y=c(),w(z.$$.fragment),M=c(),Bs=r("p"),Ye=a("Question answering tasks return an answer given a question. There are two common forms of question answering:"),Ut=c(),J=r("ul"),lt=r("li"),Je=a("Extractive: extract the answer from the given context."),Ge=c(),it=r("li"),Ke=a("Abstractive: generate an answer from the context that correctly answers the question."),Ht=c(),O=r("p"),We=a("This guide will show you how to fine-tune "),us=r("a"),Xe=a("DistilBERT"),Ze=a(" on the "),ms=r("a"),sa=a("SQuAD"),ta=a(" dataset for extractive question answering."),Vt=c(),w(G.$$.fragment),Yt=c(),R=r("h2"),K=r("a"),pt=r("span"),w(ds.$$.fragment),ea=c(),ft=r("span"),aa=a("Load SQuAD dataset"),Jt=c(),Ns=r("p"),na=a("Load the SQuAD dataset from the \u{1F917} Datasets library:"),Gt=c(),w(_s.$$.fragment),Kt=c(),Rs=r("p"),oa=a("Then take a look at an example:"),Wt=c(),w(gs.$$.fragment),Xt=c(),L=r("p"),ra=a("The "),ht=r("code"),la=a("answers"),ia=a(" field is a dictionary containing the starting position of the answer and the "),ct=r("code"),pa=a("text"),fa=a(" of the answer."),Zt=c(),U=r("h2"),W=r("a"),ut=r("span"),w(ws.$$.fragment),ha=c(),mt=r("span"),ca=a("Preprocess"),se=c(),w($s.$$.fragment),te=c(),Q=r("p"),ua=a("Load the DistilBERT tokenizer to process the "),dt=r("code"),ma=a("question"),da=a(" and "),_t=r("code"),_a=a("context"),ga=a(" fields:"),ee=c(),w(js.$$.fragment),ae=c(),Us=r("p"),wa=a("There are a few preprocessing steps particular to question answering that you should be aware of:"),ne=c(),I=r("ol"),P=r("li"),$a=a("Some examples in a dataset may have a very long "),gt=r("code"),ja=a("context"),va=a(" that exceeds the maximum input length of the model. Truncate only the "),wt=r("code"),xa=a("context"),ba=a(" by setting "),$t=r("code"),qa=a('truncation="only_second"'),ka=a("."),ya=c(),H=r("li"),Ea=a("Next, map the start and end positions of the answer to the original "),jt=r("code"),Aa=a("context"),Ta=a(` by setting
`),vt=r("code"),Da=a("return_offset_mapping=True"),za=a("."),Ca=c(),S=r("li"),Fa=a("With the mapping in hand, you can find the start and end tokens of the answer. Use the "),vs=r("a"),xt=r("code"),Pa=a("sequence_ids"),Sa=a(` method to
find which part of the offset corresponds to the `),bt=r("code"),Ma=a("question"),Oa=a(" and which corresponds to the "),qt=r("code"),La=a("context"),Qa=a("."),oe=c(),X=r("p"),Ia=a("Here is how you can create a function to truncate and map the start and end tokens of the answer to the "),kt=r("code"),Ba=a("context"),Na=a(":"),re=c(),w(xs.$$.fragment),le=c(),C=r("p"),Ra=a("Use \u{1F917} Datasets "),bs=r("a"),yt=r("code"),Ua=a("map"),Ha=a(" function to apply the preprocessing function over the entire dataset. You can speed up the "),Et=r("code"),Va=a("map"),Ya=a(" function by setting "),At=r("code"),Ja=a("batched=True"),Ga=a(" to process multiple elements of the dataset at once. Remove the columns you don\u2019t need:"),ie=c(),w(qs.$$.fragment),pe=c(),B=r("p"),Ka=a("Use "),Hs=r("a"),Wa=a("DefaultDataCollator"),Xa=a(" to create a batch of examples. Unlike other data collators in \u{1F917} Transformers, the "),Tt=r("code"),Za=a("DefaultDataCollator"),sn=a(" does not apply additional preprocessing such as padding."),fe=c(),w(Z.$$.fragment),he=c(),V=r("h2"),ss=r("a"),Dt=r("span"),w(ks.$$.fragment),tn=c(),zt=r("span"),en=a("Fine-tune with Trainer"),ce=c(),ts=r("p"),an=a("Load DistilBERT with "),Vs=r("a"),nn=a("AutoModelForQuestionAnswering"),on=a(":"),ue=c(),w(ys.$$.fragment),me=c(),w(es.$$.fragment),de=c(),Ys=r("p"),rn=a("At this point, only three steps remain:"),_e=c(),N=r("ol"),Es=r("li"),ln=a("Define your training hyperparameters in "),Js=r("a"),pn=a("TrainingArguments"),fn=a("."),hn=c(),As=r("li"),cn=a("Pass the training arguments to "),Gs=r("a"),un=a("Trainer"),mn=a(" along with the model, dataset, tokenizer, and data collator."),dn=c(),Ts=r("li"),_n=a("Call "),Ks=r("a"),gn=a("train()"),wn=a(" to fine-tune your model."),ge=c(),w(Ds.$$.fragment),we=c(),Y=r("h2"),as=r("a"),Ct=r("span"),w(zs.$$.fragment),$n=c(),Ft=r("span"),jn=a("Fine-tune with TensorFlow"),$e=c(),Ws=r("p"),vn=a("To fine-tune a model in TensorFlow is just as easy, with only a few differences."),je=c(),w(ns.$$.fragment),ve=c(),F=r("p"),xn=a("Convert your datasets to the "),Pt=r("code"),bn=a("tf.data.Dataset"),qn=a(" format with "),Cs=r("a"),St=r("code"),kn=a("to_tf_dataset"),yn=a(". Specify inputs and the start and end positions of an answer in "),Mt=r("code"),En=a("columns"),An=a(", whether to shuffle the dataset order, batch size, and the data collator:"),xe=c(),w(Fs.$$.fragment),be=c(),Xs=r("p"),Tn=a("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),qe=c(),w(Ps.$$.fragment),ke=c(),os=r("p"),Dn=a("Load DistilBERT with "),Zs=r("a"),zn=a("TFAutoModelForQuestionAnswering"),Cn=a(":"),ye=c(),w(Ss.$$.fragment),Ee=c(),rs=r("p"),Fn=a("Configure the model for training with "),Ms=r("a"),Ot=r("code"),Pn=a("compile"),Sn=a(":"),Ae=c(),w(Os.$$.fragment),Te=c(),ls=r("p"),Mn=a("Call "),Ls=r("a"),Lt=r("code"),On=a("fit"),Ln=a(" to fine-tune the model:"),De=c(),w(Qs.$$.fragment),ze=c(),w(is.$$.fragment),this.h()},l(s){const o=Yo('[data-svelte="svelte-1phssyn"]',document.head);f=l(o,"META",{name:!0,content:!0}),o.forEach(e),d=u(s),p=l(s,"H1",{class:!0});var Is=i(p);_=l(Is,"A",{id:!0,class:!0,href:!0});var Qt=i(_);q=l(Qt,"SPAN",{});var It=i(q);$(g.$$.fragment,It),It.forEach(e),Qt.forEach(e),k=u(Is),E=l(Is,"SPAN",{});var Bt=i(E);T=n(Bt,"Question answering"),Bt.forEach(e),Is.forEach(e),y=u(s),$(z.$$.fragment,s),M=u(s),Bs=l(s,"P",{});var Nt=i(Bs);Ye=n(Nt,"Question answering tasks return an answer given a question. There are two common forms of question answering:"),Nt.forEach(e),Ut=u(s),J=l(s,"UL",{});var Fe=i(J);lt=l(Fe,"LI",{});var Qn=i(lt);Je=n(Qn,"Extractive: extract the answer from the given context."),Qn.forEach(e),Ge=u(Fe),it=l(Fe,"LI",{});var In=i(it);Ke=n(In,"Abstractive: generate an answer from the context that correctly answers the question."),In.forEach(e),Fe.forEach(e),Ht=u(s),O=l(s,"P",{});var st=i(O);We=n(st,"This guide will show you how to fine-tune "),us=l(st,"A",{href:!0,rel:!0});var Bn=i(us);Xe=n(Bn,"DistilBERT"),Bn.forEach(e),Ze=n(st," on the "),ms=l(st,"A",{href:!0,rel:!0});var Nn=i(ms);sa=n(Nn,"SQuAD"),Nn.forEach(e),ta=n(st," dataset for extractive question answering."),st.forEach(e),Vt=u(s),$(G.$$.fragment,s),Yt=u(s),R=l(s,"H2",{class:!0});var Pe=i(R);K=l(Pe,"A",{id:!0,class:!0,href:!0});var Rn=i(K);pt=l(Rn,"SPAN",{});var Un=i(pt);$(ds.$$.fragment,Un),Un.forEach(e),Rn.forEach(e),ea=u(Pe),ft=l(Pe,"SPAN",{});var Hn=i(ft);aa=n(Hn,"Load SQuAD dataset"),Hn.forEach(e),Pe.forEach(e),Jt=u(s),Ns=l(s,"P",{});var Vn=i(Ns);na=n(Vn,"Load the SQuAD dataset from the \u{1F917} Datasets library:"),Vn.forEach(e),Gt=u(s),$(_s.$$.fragment,s),Kt=u(s),Rs=l(s,"P",{});var Yn=i(Rs);oa=n(Yn,"Then take a look at an example:"),Yn.forEach(e),Wt=u(s),$(gs.$$.fragment,s),Xt=u(s),L=l(s,"P",{});var tt=i(L);ra=n(tt,"The "),ht=l(tt,"CODE",{});var Jn=i(ht);la=n(Jn,"answers"),Jn.forEach(e),ia=n(tt," field is a dictionary containing the starting position of the answer and the "),ct=l(tt,"CODE",{});var Gn=i(ct);pa=n(Gn,"text"),Gn.forEach(e),fa=n(tt," of the answer."),tt.forEach(e),Zt=u(s),U=l(s,"H2",{class:!0});var Se=i(U);W=l(Se,"A",{id:!0,class:!0,href:!0});var Kn=i(W);ut=l(Kn,"SPAN",{});var Wn=i(ut);$(ws.$$.fragment,Wn),Wn.forEach(e),Kn.forEach(e),ha=u(Se),mt=l(Se,"SPAN",{});var Xn=i(mt);ca=n(Xn,"Preprocess"),Xn.forEach(e),Se.forEach(e),se=u(s),$($s.$$.fragment,s),te=u(s),Q=l(s,"P",{});var et=i(Q);ua=n(et,"Load the DistilBERT tokenizer to process the "),dt=l(et,"CODE",{});var Zn=i(dt);ma=n(Zn,"question"),Zn.forEach(e),da=n(et," and "),_t=l(et,"CODE",{});var so=i(_t);_a=n(so,"context"),so.forEach(e),ga=n(et," fields:"),et.forEach(e),ee=u(s),$(js.$$.fragment,s),ae=u(s),Us=l(s,"P",{});var to=i(Us);wa=n(to,"There are a few preprocessing steps particular to question answering that you should be aware of:"),to.forEach(e),ne=u(s),I=l(s,"OL",{});var at=i(I);P=l(at,"LI",{});var ps=i(P);$a=n(ps,"Some examples in a dataset may have a very long "),gt=l(ps,"CODE",{});var eo=i(gt);ja=n(eo,"context"),eo.forEach(e),va=n(ps," that exceeds the maximum input length of the model. Truncate only the "),wt=l(ps,"CODE",{});var ao=i(wt);xa=n(ao,"context"),ao.forEach(e),ba=n(ps," by setting "),$t=l(ps,"CODE",{});var no=i($t);qa=n(no,'truncation="only_second"'),no.forEach(e),ka=n(ps,"."),ps.forEach(e),ya=u(at),H=l(at,"LI",{});var nt=i(H);Ea=n(nt,"Next, map the start and end positions of the answer to the original "),jt=l(nt,"CODE",{});var oo=i(jt);Aa=n(oo,"context"),oo.forEach(e),Ta=n(nt,` by setting
`),vt=l(nt,"CODE",{});var ro=i(vt);Da=n(ro,"return_offset_mapping=True"),ro.forEach(e),za=n(nt,"."),nt.forEach(e),Ca=u(at),S=l(at,"LI",{});var fs=i(S);Fa=n(fs,"With the mapping in hand, you can find the start and end tokens of the answer. Use the "),vs=l(fs,"A",{href:!0,rel:!0});var lo=i(vs);xt=l(lo,"CODE",{});var io=i(xt);Pa=n(io,"sequence_ids"),io.forEach(e),lo.forEach(e),Sa=n(fs,` method to
find which part of the offset corresponds to the `),bt=l(fs,"CODE",{});var po=i(bt);Ma=n(po,"question"),po.forEach(e),Oa=n(fs," and which corresponds to the "),qt=l(fs,"CODE",{});var fo=i(qt);La=n(fo,"context"),fo.forEach(e),Qa=n(fs,"."),fs.forEach(e),at.forEach(e),oe=u(s),X=l(s,"P",{});var Me=i(X);Ia=n(Me,"Here is how you can create a function to truncate and map the start and end tokens of the answer to the "),kt=l(Me,"CODE",{});var ho=i(kt);Ba=n(ho,"context"),ho.forEach(e),Na=n(Me,":"),Me.forEach(e),re=u(s),$(xs.$$.fragment,s),le=u(s),C=l(s,"P",{});var hs=i(C);Ra=n(hs,"Use \u{1F917} Datasets "),bs=l(hs,"A",{href:!0,rel:!0});var co=i(bs);yt=l(co,"CODE",{});var uo=i(yt);Ua=n(uo,"map"),uo.forEach(e),co.forEach(e),Ha=n(hs," function to apply the preprocessing function over the entire dataset. You can speed up the "),Et=l(hs,"CODE",{});var mo=i(Et);Va=n(mo,"map"),mo.forEach(e),Ya=n(hs," function by setting "),At=l(hs,"CODE",{});var _o=i(At);Ja=n(_o,"batched=True"),_o.forEach(e),Ga=n(hs," to process multiple elements of the dataset at once. Remove the columns you don\u2019t need:"),hs.forEach(e),ie=u(s),$(qs.$$.fragment,s),pe=u(s),B=l(s,"P",{});var ot=i(B);Ka=n(ot,"Use "),Hs=l(ot,"A",{href:!0});var go=i(Hs);Wa=n(go,"DefaultDataCollator"),go.forEach(e),Xa=n(ot," to create a batch of examples. Unlike other data collators in \u{1F917} Transformers, the "),Tt=l(ot,"CODE",{});var wo=i(Tt);Za=n(wo,"DefaultDataCollator"),wo.forEach(e),sn=n(ot," does not apply additional preprocessing such as padding."),ot.forEach(e),fe=u(s),$(Z.$$.fragment,s),he=u(s),V=l(s,"H2",{class:!0});var Oe=i(V);ss=l(Oe,"A",{id:!0,class:!0,href:!0});var $o=i(ss);Dt=l($o,"SPAN",{});var jo=i(Dt);$(ks.$$.fragment,jo),jo.forEach(e),$o.forEach(e),tn=u(Oe),zt=l(Oe,"SPAN",{});var vo=i(zt);en=n(vo,"Fine-tune with Trainer"),vo.forEach(e),Oe.forEach(e),ce=u(s),ts=l(s,"P",{});var Le=i(ts);an=n(Le,"Load DistilBERT with "),Vs=l(Le,"A",{href:!0});var xo=i(Vs);nn=n(xo,"AutoModelForQuestionAnswering"),xo.forEach(e),on=n(Le,":"),Le.forEach(e),ue=u(s),$(ys.$$.fragment,s),me=u(s),$(es.$$.fragment,s),de=u(s),Ys=l(s,"P",{});var bo=i(Ys);rn=n(bo,"At this point, only three steps remain:"),bo.forEach(e),_e=u(s),N=l(s,"OL",{});var rt=i(N);Es=l(rt,"LI",{});var Qe=i(Es);ln=n(Qe,"Define your training hyperparameters in "),Js=l(Qe,"A",{href:!0});var qo=i(Js);pn=n(qo,"TrainingArguments"),qo.forEach(e),fn=n(Qe,"."),Qe.forEach(e),hn=u(rt),As=l(rt,"LI",{});var Ie=i(As);cn=n(Ie,"Pass the training arguments to "),Gs=l(Ie,"A",{href:!0});var ko=i(Gs);un=n(ko,"Trainer"),ko.forEach(e),mn=n(Ie," along with the model, dataset, tokenizer, and data collator."),Ie.forEach(e),dn=u(rt),Ts=l(rt,"LI",{});var Be=i(Ts);_n=n(Be,"Call "),Ks=l(Be,"A",{href:!0});var yo=i(Ks);gn=n(yo,"train()"),yo.forEach(e),wn=n(Be," to fine-tune your model."),Be.forEach(e),rt.forEach(e),ge=u(s),$(Ds.$$.fragment,s),we=u(s),Y=l(s,"H2",{class:!0});var Ne=i(Y);as=l(Ne,"A",{id:!0,class:!0,href:!0});var Eo=i(as);Ct=l(Eo,"SPAN",{});var Ao=i(Ct);$(zs.$$.fragment,Ao),Ao.forEach(e),Eo.forEach(e),$n=u(Ne),Ft=l(Ne,"SPAN",{});var To=i(Ft);jn=n(To,"Fine-tune with TensorFlow"),To.forEach(e),Ne.forEach(e),$e=u(s),Ws=l(s,"P",{});var Do=i(Ws);vn=n(Do,"To fine-tune a model in TensorFlow is just as easy, with only a few differences."),Do.forEach(e),je=u(s),$(ns.$$.fragment,s),ve=u(s),F=l(s,"P",{});var cs=i(F);xn=n(cs,"Convert your datasets to the "),Pt=l(cs,"CODE",{});var zo=i(Pt);bn=n(zo,"tf.data.Dataset"),zo.forEach(e),qn=n(cs," format with "),Cs=l(cs,"A",{href:!0,rel:!0});var Co=i(Cs);St=l(Co,"CODE",{});var Fo=i(St);kn=n(Fo,"to_tf_dataset"),Fo.forEach(e),Co.forEach(e),yn=n(cs,". Specify inputs and the start and end positions of an answer in "),Mt=l(cs,"CODE",{});var Po=i(Mt);En=n(Po,"columns"),Po.forEach(e),An=n(cs,", whether to shuffle the dataset order, batch size, and the data collator:"),cs.forEach(e),xe=u(s),$(Fs.$$.fragment,s),be=u(s),Xs=l(s,"P",{});var So=i(Xs);Tn=n(So,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),So.forEach(e),qe=u(s),$(Ps.$$.fragment,s),ke=u(s),os=l(s,"P",{});var Re=i(os);Dn=n(Re,"Load DistilBERT with "),Zs=l(Re,"A",{href:!0});var Mo=i(Zs);zn=n(Mo,"TFAutoModelForQuestionAnswering"),Mo.forEach(e),Cn=n(Re,":"),Re.forEach(e),ye=u(s),$(Ss.$$.fragment,s),Ee=u(s),rs=l(s,"P",{});var Ue=i(rs);Fn=n(Ue,"Configure the model for training with "),Ms=l(Ue,"A",{href:!0,rel:!0});var Oo=i(Ms);Ot=l(Oo,"CODE",{});var Lo=i(Ot);Pn=n(Lo,"compile"),Lo.forEach(e),Oo.forEach(e),Sn=n(Ue,":"),Ue.forEach(e),Ae=u(s),$(Os.$$.fragment,s),Te=u(s),ls=l(s,"P",{});var He=i(ls);Mn=n(He,"Call "),Ls=l(He,"A",{href:!0,rel:!0});var Qo=i(Ls);Lt=l(Qo,"CODE",{});var Io=i(Lt);On=n(Io,"fit"),Io.forEach(e),Qo.forEach(e),Ln=n(He," to fine-tune the model:"),He.forEach(e),De=u(s),$(Qs.$$.fragment,s),ze=u(s),$(is.$$.fragment,s),this.h()},h(){m(f,"name","hf:doc:metadata"),m(f,"content",JSON.stringify(nr)),m(_,"id","question-answering"),m(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(_,"href","#question-answering"),m(p,"class","relative group"),m(us,"href","https://huggingface.co/distilbert-base-uncased"),m(us,"rel","nofollow"),m(ms,"href","https://huggingface.co/datasets/squad"),m(ms,"rel","nofollow"),m(K,"id","load-squad-dataset"),m(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(K,"href","#load-squad-dataset"),m(R,"class","relative group"),m(W,"id","preprocess"),m(W,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(W,"href","#preprocess"),m(U,"class","relative group"),m(vs,"href","https://huggingface.co/docs/tokenizers/python/latest/api/reference.html#tokenizers.Encoding.sequence_ids"),m(vs,"rel","nofollow"),m(bs,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),m(bs,"rel","nofollow"),m(Hs,"href","/docs/transformers/master/en/main_classes/data_collator#transformers.DefaultDataCollator"),m(ss,"id","finetune-with-trainer"),m(ss,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(ss,"href","#finetune-with-trainer"),m(V,"class","relative group"),m(Vs,"href","/docs/transformers/master/en/model_doc/auto#transformers.AutoModelForQuestionAnswering"),m(Js,"href","/docs/transformers/master/en/main_classes/trainer#transformers.TrainingArguments"),m(Gs,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer"),m(Ks,"href","/docs/transformers/master/en/main_classes/trainer#transformers.Trainer.train"),m(as,"id","finetune-with-tensorflow"),m(as,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(as,"href","#finetune-with-tensorflow"),m(Y,"class","relative group"),m(Cs,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.to_tf_dataset"),m(Cs,"rel","nofollow"),m(Zs,"href","/docs/transformers/master/en/model_doc/auto#transformers.TFAutoModelForQuestionAnswering"),m(Ms,"href","https://keras.io/api/models/model_training_apis/#compile-method"),m(Ms,"rel","nofollow"),m(Ls,"href","https://keras.io/api/models/model_training_apis/#fit-method"),m(Ls,"rel","nofollow")},m(s,o){t(document.head,f),h(s,d,o),h(s,p,o),t(p,_),t(_,q),j(g,q,null),t(p,k),t(p,E),t(E,T),h(s,y,o),j(z,s,o),h(s,M,o),h(s,Bs,o),t(Bs,Ye),h(s,Ut,o),h(s,J,o),t(J,lt),t(lt,Je),t(J,Ge),t(J,it),t(it,Ke),h(s,Ht,o),h(s,O,o),t(O,We),t(O,us),t(us,Xe),t(O,Ze),t(O,ms),t(ms,sa),t(O,ta),h(s,Vt,o),j(G,s,o),h(s,Yt,o),h(s,R,o),t(R,K),t(K,pt),j(ds,pt,null),t(R,ea),t(R,ft),t(ft,aa),h(s,Jt,o),h(s,Ns,o),t(Ns,na),h(s,Gt,o),j(_s,s,o),h(s,Kt,o),h(s,Rs,o),t(Rs,oa),h(s,Wt,o),j(gs,s,o),h(s,Xt,o),h(s,L,o),t(L,ra),t(L,ht),t(ht,la),t(L,ia),t(L,ct),t(ct,pa),t(L,fa),h(s,Zt,o),h(s,U,o),t(U,W),t(W,ut),j(ws,ut,null),t(U,ha),t(U,mt),t(mt,ca),h(s,se,o),j($s,s,o),h(s,te,o),h(s,Q,o),t(Q,ua),t(Q,dt),t(dt,ma),t(Q,da),t(Q,_t),t(_t,_a),t(Q,ga),h(s,ee,o),j(js,s,o),h(s,ae,o),h(s,Us,o),t(Us,wa),h(s,ne,o),h(s,I,o),t(I,P),t(P,$a),t(P,gt),t(gt,ja),t(P,va),t(P,wt),t(wt,xa),t(P,ba),t(P,$t),t($t,qa),t(P,ka),t(I,ya),t(I,H),t(H,Ea),t(H,jt),t(jt,Aa),t(H,Ta),t(H,vt),t(vt,Da),t(H,za),t(I,Ca),t(I,S),t(S,Fa),t(S,vs),t(vs,xt),t(xt,Pa),t(S,Sa),t(S,bt),t(bt,Ma),t(S,Oa),t(S,qt),t(qt,La),t(S,Qa),h(s,oe,o),h(s,X,o),t(X,Ia),t(X,kt),t(kt,Ba),t(X,Na),h(s,re,o),j(xs,s,o),h(s,le,o),h(s,C,o),t(C,Ra),t(C,bs),t(bs,yt),t(yt,Ua),t(C,Ha),t(C,Et),t(Et,Va),t(C,Ya),t(C,At),t(At,Ja),t(C,Ga),h(s,ie,o),j(qs,s,o),h(s,pe,o),h(s,B,o),t(B,Ka),t(B,Hs),t(Hs,Wa),t(B,Xa),t(B,Tt),t(Tt,Za),t(B,sn),h(s,fe,o),j(Z,s,o),h(s,he,o),h(s,V,o),t(V,ss),t(ss,Dt),j(ks,Dt,null),t(V,tn),t(V,zt),t(zt,en),h(s,ce,o),h(s,ts,o),t(ts,an),t(ts,Vs),t(Vs,nn),t(ts,on),h(s,ue,o),j(ys,s,o),h(s,me,o),j(es,s,o),h(s,de,o),h(s,Ys,o),t(Ys,rn),h(s,_e,o),h(s,N,o),t(N,Es),t(Es,ln),t(Es,Js),t(Js,pn),t(Es,fn),t(N,hn),t(N,As),t(As,cn),t(As,Gs),t(Gs,un),t(As,mn),t(N,dn),t(N,Ts),t(Ts,_n),t(Ts,Ks),t(Ks,gn),t(Ts,wn),h(s,ge,o),j(Ds,s,o),h(s,we,o),h(s,Y,o),t(Y,as),t(as,Ct),j(zs,Ct,null),t(Y,$n),t(Y,Ft),t(Ft,jn),h(s,$e,o),h(s,Ws,o),t(Ws,vn),h(s,je,o),j(ns,s,o),h(s,ve,o),h(s,F,o),t(F,xn),t(F,Pt),t(Pt,bn),t(F,qn),t(F,Cs),t(Cs,St),t(St,kn),t(F,yn),t(F,Mt),t(Mt,En),t(F,An),h(s,xe,o),j(Fs,s,o),h(s,be,o),h(s,Xs,o),t(Xs,Tn),h(s,qe,o),j(Ps,s,o),h(s,ke,o),h(s,os,o),t(os,Dn),t(os,Zs),t(Zs,zn),t(os,Cn),h(s,ye,o),j(Ss,s,o),h(s,Ee,o),h(s,rs,o),t(rs,Fn),t(rs,Ms),t(Ms,Ot),t(Ot,Pn),t(rs,Sn),h(s,Ae,o),j(Os,s,o),h(s,Te,o),h(s,ls,o),t(ls,Mn),t(ls,Ls),t(Ls,Lt),t(Lt,On),t(ls,Ln),h(s,De,o),j(Qs,s,o),h(s,ze,o),j(is,s,o),Ce=!0},p(s,[o]){const Is={};o&2&&(Is.$$scope={dirty:o,ctx:s}),G.$set(Is);const Qt={};o&2&&(Qt.$$scope={dirty:o,ctx:s}),Z.$set(Qt);const It={};o&2&&(It.$$scope={dirty:o,ctx:s}),es.$set(It);const Bt={};o&2&&(Bt.$$scope={dirty:o,ctx:s}),ns.$set(Bt);const Nt={};o&2&&(Nt.$$scope={dirty:o,ctx:s}),is.$set(Nt)},i(s){Ce||(v(g.$$.fragment,s),v(z.$$.fragment,s),v(G.$$.fragment,s),v(ds.$$.fragment,s),v(_s.$$.fragment,s),v(gs.$$.fragment,s),v(ws.$$.fragment,s),v($s.$$.fragment,s),v(js.$$.fragment,s),v(xs.$$.fragment,s),v(qs.$$.fragment,s),v(Z.$$.fragment,s),v(ks.$$.fragment,s),v(ys.$$.fragment,s),v(es.$$.fragment,s),v(Ds.$$.fragment,s),v(zs.$$.fragment,s),v(ns.$$.fragment,s),v(Fs.$$.fragment,s),v(Ps.$$.fragment,s),v(Ss.$$.fragment,s),v(Os.$$.fragment,s),v(Qs.$$.fragment,s),v(is.$$.fragment,s),Ce=!0)},o(s){x(g.$$.fragment,s),x(z.$$.fragment,s),x(G.$$.fragment,s),x(ds.$$.fragment,s),x(_s.$$.fragment,s),x(gs.$$.fragment,s),x(ws.$$.fragment,s),x($s.$$.fragment,s),x(js.$$.fragment,s),x(xs.$$.fragment,s),x(qs.$$.fragment,s),x(Z.$$.fragment,s),x(ks.$$.fragment,s),x(ys.$$.fragment,s),x(es.$$.fragment,s),x(Ds.$$.fragment,s),x(zs.$$.fragment,s),x(ns.$$.fragment,s),x(Fs.$$.fragment,s),x(Ps.$$.fragment,s),x(Ss.$$.fragment,s),x(Os.$$.fragment,s),x(Qs.$$.fragment,s),x(is.$$.fragment,s),Ce=!1},d(s){e(f),s&&e(d),s&&e(p),b(g),s&&e(y),b(z,s),s&&e(M),s&&e(Bs),s&&e(Ut),s&&e(J),s&&e(Ht),s&&e(O),s&&e(Vt),b(G,s),s&&e(Yt),s&&e(R),b(ds),s&&e(Jt),s&&e(Ns),s&&e(Gt),b(_s,s),s&&e(Kt),s&&e(Rs),s&&e(Wt),b(gs,s),s&&e(Xt),s&&e(L),s&&e(Zt),s&&e(U),b(ws),s&&e(se),b($s,s),s&&e(te),s&&e(Q),s&&e(ee),b(js,s),s&&e(ae),s&&e(Us),s&&e(ne),s&&e(I),s&&e(oe),s&&e(X),s&&e(re),b(xs,s),s&&e(le),s&&e(C),s&&e(ie),b(qs,s),s&&e(pe),s&&e(B),s&&e(fe),b(Z,s),s&&e(he),s&&e(V),b(ks),s&&e(ce),s&&e(ts),s&&e(ue),b(ys,s),s&&e(me),b(es,s),s&&e(de),s&&e(Ys),s&&e(_e),s&&e(N),s&&e(ge),b(Ds,s),s&&e(we),s&&e(Y),b(zs),s&&e($e),s&&e(Ws),s&&e(je),b(ns,s),s&&e(ve),s&&e(F),s&&e(xe),b(Fs,s),s&&e(be),s&&e(Xs),s&&e(qe),b(Ps,s),s&&e(ke),s&&e(os),s&&e(ye),b(Ss,s),s&&e(Ee),s&&e(rs),s&&e(Ae),b(Os,s),s&&e(Te),s&&e(ls),s&&e(De),b(Qs,s),s&&e(ze),b(is,s)}}}const nr={local:"question-answering",sections:[{local:"load-squad-dataset",title:"Load SQuAD dataset"},{local:"preprocess",title:"Preprocess"},{local:"finetune-with-trainer",title:"Fine-tune with Trainer"},{local:"finetune-with-tensorflow",title:"Fine-tune with TensorFlow"}],title:"Question answering"};function or(A,f,d){let{fw:p}=f;return A.$$set=_=>{"fw"in _&&d(0,p=_.fw)},[p]}class cr extends Uo{constructor(f){super();Ho(this,f,or,ar,Vo,{fw:0})}}export{cr as default,nr as metadata};
