import{S as Ta,i as Da,s as za,e as l,k as _,w as y,t as r,M as Ca,c as i,d as e,m as g,a as p,x as E,h as o,b as w,G as t,g as c,y as A,q as T,o as D,B as z,v as Pa,L as Aa}from"../../chunks/vendor-hf-doc-builder.js";import{T as Kt}from"../../chunks/Tip-hf-doc-builder.js";import{Y as ya}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Jt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as rs}from"../../chunks/CodeBlock-hf-doc-builder.js";import{F as Ea,M as Wt}from"../../chunks/Markdown-hf-doc-builder.js";function Fa(P){let a,u,n,d,j;return{c(){a=l("p"),u=r("See the question answering "),n=l("a"),d=r("task page"),j=r(" for more information about other forms of question answering and their associated models, datasets, and metrics."),this.h()},l($){a=i($,"P",{});var x=p(a);u=o(x,"See the question answering "),n=i(x,"A",{href:!0,rel:!0});var C=p(n);d=o(C,"task page"),C.forEach(e),j=o(x," for more information about other forms of question answering and their associated models, datasets, and metrics."),x.forEach(e),this.h()},h(){w(n,"href","https://huggingface.co/tasks/question-answering"),w(n,"rel","nofollow")},m($,x){c($,a,x),t(a,u),t(a,n),t(n,d),t(a,j)},d($){$&&e(a)}}}function Sa(P){let a,u;return a=new rs({props:{code:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DefaultDataCollator()`}}),{c(){y(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,d){A(a,n,d),u=!0},p:Aa,i(n){u||(T(a.$$.fragment,n),u=!0)},o(n){D(a.$$.fragment,n),u=!1},d(n){z(a,n)}}}function Ma(P){let a,u;return a=new Wt({props:{$$slots:{default:[Sa]},$$scope:{ctx:P}}}),{c(){y(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,d){A(a,n,d),u=!0},p(n,d){const j={};d&2&&(j.$$scope={dirty:d,ctx:n}),a.$set(j)},i(n){u||(T(a.$$.fragment,n),u=!0)},o(n){D(a.$$.fragment,n),u=!1},d(n){z(a,n)}}}function La(P){let a,u;return a=new rs({props:{code:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator(return_tensors="tf")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DefaultDataCollator(return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),{c(){y(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,d){A(a,n,d),u=!0},p:Aa,i(n){u||(T(a.$$.fragment,n),u=!0)},o(n){D(a.$$.fragment,n),u=!1},d(n){z(a,n)}}}function Qa(P){let a,u;return a=new Wt({props:{$$slots:{default:[La]},$$scope:{ctx:P}}}),{c(){y(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,d){A(a,n,d),u=!0},p(n,d){const j={};d&2&&(j.$$scope={dirty:d,ctx:n}),a.$set(j)},i(n){u||(T(a.$$.fragment,n),u=!0)},o(n){D(a.$$.fragment,n),u=!1},d(n){z(a,n)}}}function Oa(P){let a,u,n,d,j,$,x,C;return{c(){a=l("p"),u=r("If you aren\u2019t familiar with fine-tuning a model with the "),n=l("a"),d=r("Trainer"),j=r(", take a look at the basic tutorial "),$=l("a"),x=r("here"),C=r("!"),this.h()},l(b){a=i(b,"P",{});var k=p(a);u=o(k,"If you aren\u2019t familiar with fine-tuning a model with the "),n=i(k,"A",{href:!0});var F=p(n);d=o(F,"Trainer"),F.forEach(e),j=o(k,", take a look at the basic tutorial "),$=i(k,"A",{href:!0});var I=p($);x=o(I,"here"),I.forEach(e),C=o(k,"!"),k.forEach(e),this.h()},h(){w(n,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),w($,"href","../training#finetune-with-trainer")},m(b,k){c(b,a,k),t(a,u),t(a,n),t(n,d),t(a,j),t(a,$),t($,x),t(a,C)},d(b){b&&e(a)}}}function Ia(P){let a,u,n,d,j,$,x,C,b,k,F,I,B,N,S,Y,R,ds,ps,G,W,J,M,ns,ss,_s,X,U,ts,Z,fs,L,H,V;return x=new rs({props:{code:`from transformers import AutoModelForQuestionAnswering, TrainingArguments, Trainer

model = AutoModelForQuestionAnswering.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForQuestionAnswering, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),b=new Kt({props:{$$slots:{default:[Oa]},$$scope:{ctx:P}}}),H=new rs({props:{code:`training_args = TrainingArguments(
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

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){a=l("p"),u=r("Load DistilBERT with "),n=l("a"),d=r("AutoModelForQuestionAnswering"),j=r(":"),$=_(),y(x.$$.fragment),C=_(),y(b.$$.fragment),k=_(),F=l("p"),I=r("At this point, only three steps remain:"),B=_(),N=l("ol"),S=l("li"),Y=r("Define your training hyperparameters in "),R=l("a"),ds=r("TrainingArguments"),ps=r("."),G=_(),W=l("li"),J=r("Pass the training arguments to "),M=l("a"),ns=r("Trainer"),ss=r(" along with the model, dataset, tokenizer, and data collator."),_s=_(),X=l("li"),U=r("Call "),ts=l("a"),Z=r("train()"),fs=r(" to fine-tune your model."),L=_(),y(H.$$.fragment),this.h()},l(m){a=i(m,"P",{});var q=p(a);u=o(q,"Load DistilBERT with "),n=i(q,"A",{href:!0});var Q=p(n);d=o(Q,"AutoModelForQuestionAnswering"),Q.forEach(e),j=o(q,":"),q.forEach(e),$=g(m),E(x.$$.fragment,m),C=g(m),E(b.$$.fragment,m),k=g(m),F=i(m,"P",{});var gs=p(F);I=o(gs,"At this point, only three steps remain:"),gs.forEach(e),B=g(m),N=i(m,"OL",{});var O=p(N);S=i(O,"LI",{});var cs=p(S);Y=o(cs,"Define your training hyperparameters in "),R=i(cs,"A",{href:!0});var es=p(R);ds=o(es,"TrainingArguments"),es.forEach(e),ps=o(cs,"."),cs.forEach(e),G=g(O),W=i(O,"LI",{});var K=p(W);J=o(K,"Pass the training arguments to "),M=i(K,"A",{href:!0});var vs=p(M);ns=o(vs,"Trainer"),vs.forEach(e),ss=o(K," along with the model, dataset, tokenizer, and data collator."),K.forEach(e),_s=g(O),X=i(O,"LI",{});var os=p(X);U=o(os,"Call "),ts=i(os,"A",{href:!0});var as=p(ts);Z=o(as,"train()"),as.forEach(e),fs=o(os," to fine-tune your model."),os.forEach(e),O.forEach(e),L=g(m),E(H.$$.fragment,m),this.h()},h(){w(n,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.AutoModelForQuestionAnswering"),w(R,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.TrainingArguments"),w(M,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer"),w(ts,"href","/docs/transformers/v4.21.2/en/main_classes/trainer#transformers.Trainer.train")},m(m,q){c(m,a,q),t(a,u),t(a,n),t(n,d),t(a,j),c(m,$,q),A(x,m,q),c(m,C,q),A(b,m,q),c(m,k,q),c(m,F,q),t(F,I),c(m,B,q),c(m,N,q),t(N,S),t(S,Y),t(S,R),t(R,ds),t(S,ps),t(N,G),t(N,W),t(W,J),t(W,M),t(M,ns),t(W,ss),t(N,_s),t(N,X),t(X,U),t(X,ts),t(ts,Z),t(X,fs),c(m,L,q),A(H,m,q),V=!0},p(m,q){const Q={};q&2&&(Q.$$scope={dirty:q,ctx:m}),b.$set(Q)},i(m){V||(T(x.$$.fragment,m),T(b.$$.fragment,m),T(H.$$.fragment,m),V=!0)},o(m){D(x.$$.fragment,m),D(b.$$.fragment,m),D(H.$$.fragment,m),V=!1},d(m){m&&e(a),m&&e($),z(x,m),m&&e(C),z(b,m),m&&e(k),m&&e(F),m&&e(B),m&&e(N),m&&e(L),z(H,m)}}}function Ba(P){let a,u;return a=new Wt({props:{$$slots:{default:[Ia]},$$scope:{ctx:P}}}),{c(){y(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,d){A(a,n,d),u=!0},p(n,d){const j={};d&2&&(j.$$scope={dirty:d,ctx:n}),a.$set(j)},i(n){u||(T(a.$$.fragment,n),u=!0)},o(n){D(a.$$.fragment,n),u=!1},d(n){z(a,n)}}}function Na(P){let a,u,n,d,j;return{c(){a=l("p"),u=r("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),n=l("a"),d=r("here"),j=r("!"),this.h()},l($){a=i($,"P",{});var x=p(a);u=o(x,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),n=i(x,"A",{href:!0});var C=p(n);d=o(C,"here"),C.forEach(e),j=o(x,"!"),x.forEach(e),this.h()},h(){w(n,"href","training#finetune-with-keras")},m($,x){c($,a,x),t(a,u),t(a,n),t(n,d),t(a,j)},d($){$&&e(a)}}}function Ra(P){let a,u,n,d,j,$,x,C,b,k,F,I,B,N,S,Y,R,ds,ps,G,W,J,M,ns,ss,_s,X,U,ts,Z,fs,L,H,V,m,q,Q,gs,O,cs,es,K,vs,os,as,hs,$s;return B=new rs({props:{code:`tf_train_set = tokenized_squad["train"].to_tf_dataset(
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
<span class="hljs-meta">... </span>)`}}),S=new Kt({props:{$$slots:{default:[Na]},$$scope:{ctx:P}}}),G=new rs({props:{code:`from transformers import create_optimizer

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
<span class="hljs-meta">... </span>)`}}),U=new rs({props:{code:`from transformers import TFAutoModelForQuestionAnswering

model = TFAutoModelForQuestionAnswering("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForQuestionAnswering(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),Q=new rs({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),hs=new rs({props:{code:"model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=3)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=<span class="hljs-number">3</span>)'}}),{c(){a=l("p"),u=r("To fine-tune a model in TensorFlow, start by converting your datasets to the "),n=l("code"),d=r("tf.data.Dataset"),j=r(" format with "),$=l("a"),x=r("to_tf_dataset"),C=r(". Specify inputs and the start and end positions of an answer in "),b=l("code"),k=r("columns"),F=r(", whether to shuffle the dataset order, batch size, and the data collator:"),I=_(),y(B.$$.fragment),N=_(),y(S.$$.fragment),Y=_(),R=l("p"),ds=r("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),ps=_(),y(G.$$.fragment),W=_(),J=l("p"),M=r("Load DistilBERT with "),ns=l("a"),ss=r("TFAutoModelForQuestionAnswering"),_s=r(":"),X=_(),y(U.$$.fragment),ts=_(),Z=l("p"),fs=r("Configure the model for training with "),L=l("a"),H=l("code"),V=r("compile"),m=r(":"),q=_(),y(Q.$$.fragment),gs=_(),O=l("p"),cs=r("Call "),es=l("a"),K=l("code"),vs=r("fit"),os=r(" to fine-tune the model:"),as=_(),y(hs.$$.fragment),this.h()},l(f){a=i(f,"P",{});var v=p(a);u=o(v,"To fine-tune a model in TensorFlow, start by converting your datasets to the "),n=i(v,"CODE",{});var ls=p(n);d=o(ls,"tf.data.Dataset"),ls.forEach(e),j=o(v," format with "),$=i(v,"A",{href:!0,rel:!0});var Is=p($);x=o(Is,"to_tf_dataset"),Is.forEach(e),C=o(v,". Specify inputs and the start and end positions of an answer in "),b=i(v,"CODE",{});var is=p(b);k=o(is,"columns"),is.forEach(e),F=o(v,", whether to shuffle the dataset order, batch size, and the data collator:"),v.forEach(e),I=g(f),E(B.$$.fragment,f),N=g(f),E(S.$$.fragment,f),Y=g(f),R=i(f,"P",{});var Ws=p(R);ds=o(Ws,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Ws.forEach(e),ps=g(f),E(G.$$.fragment,f),W=g(f),J=i(f,"P",{});var xs=p(J);M=o(xs,"Load DistilBERT with "),ns=i(xs,"A",{href:!0});var Xs=p(ns);ss=o(Xs,"TFAutoModelForQuestionAnswering"),Xs.forEach(e),_s=o(xs,":"),xs.forEach(e),X=g(f),E(U.$$.fragment,f),ts=g(f),Z=i(f,"P",{});var As=p(Z);fs=o(As,"Configure the model for training with "),L=i(As,"A",{href:!0,rel:!0});var Ts=p(L);H=i(Ts,"CODE",{});var Zs=p(H);V=o(Zs,"compile"),Zs.forEach(e),Ts.forEach(e),m=o(As,":"),As.forEach(e),q=g(f),E(Q.$$.fragment,f),gs=g(f),O=i(f,"P",{});var Ds=p(O);cs=o(Ds,"Call "),es=i(Ds,"A",{href:!0,rel:!0});var Bs=p(es);K=i(Bs,"CODE",{});var us=p(K);vs=o(us,"fit"),us.forEach(e),Bs.forEach(e),os=o(Ds," to fine-tune the model:"),Ds.forEach(e),as=g(f),E(hs.$$.fragment,f),this.h()},h(){w($,"href","https://huggingface.co/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Dataset.to_tf_dataset"),w($,"rel","nofollow"),w(ns,"href","/docs/transformers/v4.21.2/en/model_doc/auto#transformers.TFAutoModelForQuestionAnswering"),w(L,"href","https://keras.io/api/models/model_training_apis/#compile-method"),w(L,"rel","nofollow"),w(es,"href","https://keras.io/api/models/model_training_apis/#fit-method"),w(es,"rel","nofollow")},m(f,v){c(f,a,v),t(a,u),t(a,n),t(n,d),t(a,j),t(a,$),t($,x),t(a,C),t(a,b),t(b,k),t(a,F),c(f,I,v),A(B,f,v),c(f,N,v),A(S,f,v),c(f,Y,v),c(f,R,v),t(R,ds),c(f,ps,v),A(G,f,v),c(f,W,v),c(f,J,v),t(J,M),t(J,ns),t(ns,ss),t(J,_s),c(f,X,v),A(U,f,v),c(f,ts,v),c(f,Z,v),t(Z,fs),t(Z,L),t(L,H),t(H,V),t(Z,m),c(f,q,v),A(Q,f,v),c(f,gs,v),c(f,O,v),t(O,cs),t(O,es),t(es,K),t(K,vs),t(O,os),c(f,as,v),A(hs,f,v),$s=!0},p(f,v){const ls={};v&2&&(ls.$$scope={dirty:v,ctx:f}),S.$set(ls)},i(f){$s||(T(B.$$.fragment,f),T(S.$$.fragment,f),T(G.$$.fragment,f),T(U.$$.fragment,f),T(Q.$$.fragment,f),T(hs.$$.fragment,f),$s=!0)},o(f){D(B.$$.fragment,f),D(S.$$.fragment,f),D(G.$$.fragment,f),D(U.$$.fragment,f),D(Q.$$.fragment,f),D(hs.$$.fragment,f),$s=!1},d(f){f&&e(a),f&&e(I),z(B,f),f&&e(N),z(S,f),f&&e(Y),f&&e(R),f&&e(ps),z(G,f),f&&e(W),f&&e(J),f&&e(X),z(U,f),f&&e(ts),f&&e(Z),f&&e(q),z(Q,f),f&&e(gs),f&&e(O),f&&e(as),z(hs,f)}}}function Ua(P){let a,u;return a=new Wt({props:{$$slots:{default:[Ra]},$$scope:{ctx:P}}}),{c(){y(a.$$.fragment)},l(n){E(a.$$.fragment,n)},m(n,d){A(a,n,d),u=!0},p(n,d){const j={};d&2&&(j.$$scope={dirty:d,ctx:n}),a.$set(j)},i(n){u||(T(a.$$.fragment,n),u=!0)},o(n){D(a.$$.fragment,n),u=!1},d(n){z(a,n)}}}function Ha(P){let a,u,n,d,j,$,x,C;return{c(){a=l("p"),u=r(`For a more in-depth example of how to fine-tune a model for question answering, take a look at the corresponding
`),n=l("a"),d=r("PyTorch notebook"),j=r(`
or `),$=l("a"),x=r("TensorFlow notebook"),C=r("."),this.h()},l(b){a=i(b,"P",{});var k=p(a);u=o(k,`For a more in-depth example of how to fine-tune a model for question answering, take a look at the corresponding
`),n=i(k,"A",{href:!0,rel:!0});var F=p(n);d=o(F,"PyTorch notebook"),F.forEach(e),j=o(k,`
or `),$=i(k,"A",{href:!0,rel:!0});var I=p($);x=o(I,"TensorFlow notebook"),I.forEach(e),C=o(k,"."),k.forEach(e),this.h()},h(){w(n,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering.ipynb"),w(n,"rel","nofollow"),w($,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering-tf.ipynb"),w($,"rel","nofollow")},m(b,k){c(b,a,k),t(a,u),t(a,n),t(n,d),t(a,j),t(a,$),t($,x),t(a,C)},d(b){b&&e(a)}}}function Va(P){let a,u,n,d,j,$,x,C,b,k,F,I,B,N,S,Y,R,ds,ps,G,W,J,M,ns,ss,_s,X,U,ts,Z,fs,L,H,V,m,q,Q,gs,O,cs,es,K,vs,os,as,hs,$s,f,v,ls,Is,is,Ws,xs,Xs,As,Ts,Zs,Ds,Bs,us,zs,it,Ns,Xt,pt,Zt,Tt,Rs,Dt,ks,se,ft,te,ee,ct,ae,ne,zt,Us,Ct,st,re,Pt,bs,ws,oe,ht,le,ie,ut,pe,fe,mt,ce,he,ue,ys,me,dt,de,_e,_t,ge,$e,we,js,je,Hs,gt,ve,xe,$t,ke,be,wt,qe,ye,Ft,Cs,Ee,jt,Ae,Te,St,Vs,Mt,ms,De,Ys,ze,Ce,vt,Pe,Fe,xt,Se,Me,Lt,Gs,Qt,qs,Le,tt,Qe,Oe,kt,Ie,Be,Ot,Ps,It,Es,Fs,bt,Js,Ne,qt,Re,Bt,Ss,Nt,Ms,Rt;return $=new Jt({}),F=new ya({props:{id:"ajPx5LwJD-I"}}),L=new Kt({props:{$$slots:{default:[Fa]},$$scope:{ctx:P}}}),Q=new Jt({}),as=new rs({props:{code:`from datasets import load_dataset

squad = load_dataset("squad")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&quot;squad&quot;</span>)`}}),ls=new rs({props:{code:'squad["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>squad[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;answers&#x27;</span>: {<span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">515</span>], <span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Saint Bernadette Soubirous&#x27;</span>]},
 <span class="hljs-string">&#x27;context&#x27;</span>: <span class="hljs-string">&#x27;Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot;Venite Ad Me Omnes&quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.&#x27;</span>,
 <span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;5733be284776f41900661182&#x27;</span>,
 <span class="hljs-string">&#x27;question&#x27;</span>: <span class="hljs-string">&#x27;To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?&#x27;</span>,
 <span class="hljs-string">&#x27;title&#x27;</span>: <span class="hljs-string">&#x27;University_of_Notre_Dame&#x27;</span>
}`}}),Ns=new Jt({}),Rs=new ya({props:{id:"qgaM0weJHpA"}}),Us=new rs({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),Vs=new rs({props:{code:`def preprocess_function(examples):
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
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> inputs`}}),Gs=new rs({props:{code:'tokenized_squad = squad.map(preprocess_function, batched=True, remove_columns=squad["train"].column_names)',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_squad = squad.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>, remove_columns=squad[<span class="hljs-string">&quot;train&quot;</span>].column_names)'}}),Ps=new Ea({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Qa],pytorch:[Ma]},$$scope:{ctx:P}}}),Js=new Jt({}),Ss=new Ea({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Ua],pytorch:[Ba]},$$scope:{ctx:P}}}),Ms=new Kt({props:{$$slots:{default:[Ha]},$$scope:{ctx:P}}}),{c(){a=l("meta"),u=_(),n=l("h1"),d=l("a"),j=l("span"),y($.$$.fragment),x=_(),C=l("span"),b=r("Question answering"),k=_(),y(F.$$.fragment),I=_(),B=l("p"),N=r("Question answering tasks return an answer given a question. There are two common forms of question answering:"),S=_(),Y=l("ul"),R=l("li"),ds=r("Extractive: extract the answer from the given context."),ps=_(),G=l("li"),W=r("Abstractive: generate an answer from the context that correctly answers the question."),J=_(),M=l("p"),ns=r("This guide will show you how to fine-tune "),ss=l("a"),_s=r("DistilBERT"),X=r(" on the "),U=l("a"),ts=r("SQuAD"),Z=r(" dataset for extractive question answering."),fs=_(),y(L.$$.fragment),H=_(),V=l("h2"),m=l("a"),q=l("span"),y(Q.$$.fragment),gs=_(),O=l("span"),cs=r("Load SQuAD dataset"),es=_(),K=l("p"),vs=r("Load the SQuAD dataset from the \u{1F917} Datasets library:"),os=_(),y(as.$$.fragment),hs=_(),$s=l("p"),f=r("Then take a look at an example:"),v=_(),y(ls.$$.fragment),Is=_(),is=l("p"),Ws=r("The "),xs=l("code"),Xs=r("answers"),As=r(" field is a dictionary containing the starting position of the answer and the "),Ts=l("code"),Zs=r("text"),Ds=r(" of the answer."),Bs=_(),us=l("h2"),zs=l("a"),it=l("span"),y(Ns.$$.fragment),Xt=_(),pt=l("span"),Zt=r("Preprocess"),Tt=_(),y(Rs.$$.fragment),Dt=_(),ks=l("p"),se=r("Load the DistilBERT tokenizer to process the "),ft=l("code"),te=r("question"),ee=r(" and "),ct=l("code"),ae=r("context"),ne=r(" fields:"),zt=_(),y(Us.$$.fragment),Ct=_(),st=l("p"),re=r("There are a few preprocessing steps particular to question answering that you should be aware of:"),Pt=_(),bs=l("ol"),ws=l("li"),oe=r("Some examples in a dataset may have a very long "),ht=l("code"),le=r("context"),ie=r(" that exceeds the maximum input length of the model. Truncate only the "),ut=l("code"),pe=r("context"),fe=r(" by setting "),mt=l("code"),ce=r('truncation="only_second"'),he=r("."),ue=_(),ys=l("li"),me=r("Next, map the start and end positions of the answer to the original "),dt=l("code"),de=r("context"),_e=r(` by setting
`),_t=l("code"),ge=r("return_offset_mapping=True"),$e=r("."),we=_(),js=l("li"),je=r("With the mapping in hand, you can find the start and end tokens of the answer. Use the "),Hs=l("a"),gt=l("code"),ve=r("sequence_ids"),xe=r(` method to
find which part of the offset corresponds to the `),$t=l("code"),ke=r("question"),be=r(" and which corresponds to the "),wt=l("code"),qe=r("context"),ye=r("."),Ft=_(),Cs=l("p"),Ee=r("Here is how you can create a function to truncate and map the start and end tokens of the answer to the "),jt=l("code"),Ae=r("context"),Te=r(":"),St=_(),y(Vs.$$.fragment),Mt=_(),ms=l("p"),De=r("Use \u{1F917} Datasets "),Ys=l("a"),ze=r("map"),Ce=r(" function to apply the preprocessing function over the entire dataset. You can speed up the "),vt=l("code"),Pe=r("map"),Fe=r(" function by setting "),xt=l("code"),Se=r("batched=True"),Me=r(" to process multiple elements of the dataset at once. Remove the columns you don\u2019t need:"),Lt=_(),y(Gs.$$.fragment),Qt=_(),qs=l("p"),Le=r("Use "),tt=l("a"),Qe=r("DefaultDataCollator"),Oe=r(" to create a batch of examples. Unlike other data collators in \u{1F917} Transformers, the "),kt=l("code"),Ie=r("DefaultDataCollator"),Be=r(" does not apply additional preprocessing such as padding."),Ot=_(),y(Ps.$$.fragment),It=_(),Es=l("h2"),Fs=l("a"),bt=l("span"),y(Js.$$.fragment),Ne=_(),qt=l("span"),Re=r("Train"),Bt=_(),y(Ss.$$.fragment),Nt=_(),y(Ms.$$.fragment),this.h()},l(s){const h=Ca('[data-svelte="svelte-1phssyn"]',document.head);a=i(h,"META",{name:!0,content:!0}),h.forEach(e),u=g(s),n=i(s,"H1",{class:!0});var Ks=p(n);d=i(Ks,"A",{id:!0,class:!0,href:!0});var yt=p(d);j=i(yt,"SPAN",{});var Et=p(j);E($.$$.fragment,Et),Et.forEach(e),yt.forEach(e),x=g(Ks),C=i(Ks,"SPAN",{});var At=p(C);b=o(At,"Question answering"),At.forEach(e),Ks.forEach(e),k=g(s),E(F.$$.fragment,s),I=g(s),B=i(s,"P",{});var Ue=p(B);N=o(Ue,"Question answering tasks return an answer given a question. There are two common forms of question answering:"),Ue.forEach(e),S=g(s),Y=i(s,"UL",{});var Ut=p(Y);R=i(Ut,"LI",{});var He=p(R);ds=o(He,"Extractive: extract the answer from the given context."),He.forEach(e),ps=g(Ut),G=i(Ut,"LI",{});var Ve=p(G);W=o(Ve,"Abstractive: generate an answer from the context that correctly answers the question."),Ve.forEach(e),Ut.forEach(e),J=g(s),M=i(s,"P",{});var et=p(M);ns=o(et,"This guide will show you how to fine-tune "),ss=i(et,"A",{href:!0,rel:!0});var Ye=p(ss);_s=o(Ye,"DistilBERT"),Ye.forEach(e),X=o(et," on the "),U=i(et,"A",{href:!0,rel:!0});var Ge=p(U);ts=o(Ge,"SQuAD"),Ge.forEach(e),Z=o(et," dataset for extractive question answering."),et.forEach(e),fs=g(s),E(L.$$.fragment,s),H=g(s),V=i(s,"H2",{class:!0});var Ht=p(V);m=i(Ht,"A",{id:!0,class:!0,href:!0});var Je=p(m);q=i(Je,"SPAN",{});var Ke=p(q);E(Q.$$.fragment,Ke),Ke.forEach(e),Je.forEach(e),gs=g(Ht),O=i(Ht,"SPAN",{});var We=p(O);cs=o(We,"Load SQuAD dataset"),We.forEach(e),Ht.forEach(e),es=g(s),K=i(s,"P",{});var Xe=p(K);vs=o(Xe,"Load the SQuAD dataset from the \u{1F917} Datasets library:"),Xe.forEach(e),os=g(s),E(as.$$.fragment,s),hs=g(s),$s=i(s,"P",{});var Ze=p($s);f=o(Ze,"Then take a look at an example:"),Ze.forEach(e),v=g(s),E(ls.$$.fragment,s),Is=g(s),is=i(s,"P",{});var at=p(is);Ws=o(at,"The "),xs=i(at,"CODE",{});var sa=p(xs);Xs=o(sa,"answers"),sa.forEach(e),As=o(at," field is a dictionary containing the starting position of the answer and the "),Ts=i(at,"CODE",{});var ta=p(Ts);Zs=o(ta,"text"),ta.forEach(e),Ds=o(at," of the answer."),at.forEach(e),Bs=g(s),us=i(s,"H2",{class:!0});var Vt=p(us);zs=i(Vt,"A",{id:!0,class:!0,href:!0});var ea=p(zs);it=i(ea,"SPAN",{});var aa=p(it);E(Ns.$$.fragment,aa),aa.forEach(e),ea.forEach(e),Xt=g(Vt),pt=i(Vt,"SPAN",{});var na=p(pt);Zt=o(na,"Preprocess"),na.forEach(e),Vt.forEach(e),Tt=g(s),E(Rs.$$.fragment,s),Dt=g(s),ks=i(s,"P",{});var nt=p(ks);se=o(nt,"Load the DistilBERT tokenizer to process the "),ft=i(nt,"CODE",{});var ra=p(ft);te=o(ra,"question"),ra.forEach(e),ee=o(nt," and "),ct=i(nt,"CODE",{});var oa=p(ct);ae=o(oa,"context"),oa.forEach(e),ne=o(nt," fields:"),nt.forEach(e),zt=g(s),E(Us.$$.fragment,s),Ct=g(s),st=i(s,"P",{});var la=p(st);re=o(la,"There are a few preprocessing steps particular to question answering that you should be aware of:"),la.forEach(e),Pt=g(s),bs=i(s,"OL",{});var rt=p(bs);ws=i(rt,"LI",{});var Ls=p(ws);oe=o(Ls,"Some examples in a dataset may have a very long "),ht=i(Ls,"CODE",{});var ia=p(ht);le=o(ia,"context"),ia.forEach(e),ie=o(Ls," that exceeds the maximum input length of the model. Truncate only the "),ut=i(Ls,"CODE",{});var pa=p(ut);pe=o(pa,"context"),pa.forEach(e),fe=o(Ls," by setting "),mt=i(Ls,"CODE",{});var fa=p(mt);ce=o(fa,'truncation="only_second"'),fa.forEach(e),he=o(Ls,"."),Ls.forEach(e),ue=g(rt),ys=i(rt,"LI",{});var ot=p(ys);me=o(ot,"Next, map the start and end positions of the answer to the original "),dt=i(ot,"CODE",{});var ca=p(dt);de=o(ca,"context"),ca.forEach(e),_e=o(ot,` by setting
`),_t=i(ot,"CODE",{});var ha=p(_t);ge=o(ha,"return_offset_mapping=True"),ha.forEach(e),$e=o(ot,"."),ot.forEach(e),we=g(rt),js=i(rt,"LI",{});var Qs=p(js);je=o(Qs,"With the mapping in hand, you can find the start and end tokens of the answer. Use the "),Hs=i(Qs,"A",{href:!0,rel:!0});var ua=p(Hs);gt=i(ua,"CODE",{});var ma=p(gt);ve=o(ma,"sequence_ids"),ma.forEach(e),ua.forEach(e),xe=o(Qs,` method to
find which part of the offset corresponds to the `),$t=i(Qs,"CODE",{});var da=p($t);ke=o(da,"question"),da.forEach(e),be=o(Qs," and which corresponds to the "),wt=i(Qs,"CODE",{});var _a=p(wt);qe=o(_a,"context"),_a.forEach(e),ye=o(Qs,"."),Qs.forEach(e),rt.forEach(e),Ft=g(s),Cs=i(s,"P",{});var Yt=p(Cs);Ee=o(Yt,"Here is how you can create a function to truncate and map the start and end tokens of the answer to the "),jt=i(Yt,"CODE",{});var ga=p(jt);Ae=o(ga,"context"),ga.forEach(e),Te=o(Yt,":"),Yt.forEach(e),St=g(s),E(Vs.$$.fragment,s),Mt=g(s),ms=i(s,"P",{});var Os=p(ms);De=o(Os,"Use \u{1F917} Datasets "),Ys=i(Os,"A",{href:!0,rel:!0});var $a=p(Ys);ze=o($a,"map"),$a.forEach(e),Ce=o(Os," function to apply the preprocessing function over the entire dataset. You can speed up the "),vt=i(Os,"CODE",{});var wa=p(vt);Pe=o(wa,"map"),wa.forEach(e),Fe=o(Os," function by setting "),xt=i(Os,"CODE",{});var ja=p(xt);Se=o(ja,"batched=True"),ja.forEach(e),Me=o(Os," to process multiple elements of the dataset at once. Remove the columns you don\u2019t need:"),Os.forEach(e),Lt=g(s),E(Gs.$$.fragment,s),Qt=g(s),qs=i(s,"P",{});var lt=p(qs);Le=o(lt,"Use "),tt=i(lt,"A",{href:!0});var va=p(tt);Qe=o(va,"DefaultDataCollator"),va.forEach(e),Oe=o(lt," to create a batch of examples. Unlike other data collators in \u{1F917} Transformers, the "),kt=i(lt,"CODE",{});var xa=p(kt);Ie=o(xa,"DefaultDataCollator"),xa.forEach(e),Be=o(lt," does not apply additional preprocessing such as padding."),lt.forEach(e),Ot=g(s),E(Ps.$$.fragment,s),It=g(s),Es=i(s,"H2",{class:!0});var Gt=p(Es);Fs=i(Gt,"A",{id:!0,class:!0,href:!0});var ka=p(Fs);bt=i(ka,"SPAN",{});var ba=p(bt);E(Js.$$.fragment,ba),ba.forEach(e),ka.forEach(e),Ne=g(Gt),qt=i(Gt,"SPAN",{});var qa=p(qt);Re=o(qa,"Train"),qa.forEach(e),Gt.forEach(e),Bt=g(s),E(Ss.$$.fragment,s),Nt=g(s),E(Ms.$$.fragment,s),this.h()},h(){w(a,"name","hf:doc:metadata"),w(a,"content",JSON.stringify(Ya)),w(d,"id","question-answering"),w(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(d,"href","#question-answering"),w(n,"class","relative group"),w(ss,"href","https://huggingface.co/distilbert-base-uncased"),w(ss,"rel","nofollow"),w(U,"href","https://huggingface.co/datasets/squad"),w(U,"rel","nofollow"),w(m,"id","load-squad-dataset"),w(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(m,"href","#load-squad-dataset"),w(V,"class","relative group"),w(zs,"id","preprocess"),w(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(zs,"href","#preprocess"),w(us,"class","relative group"),w(Hs,"href","https://huggingface.co/docs/tokenizers/python/latest/api/reference.html#tokenizers.Encoding.sequence_ids"),w(Hs,"rel","nofollow"),w(Ys,"href","https://huggingface.co/docs/datasets/v2.4.0/en/package_reference/main_classes#datasets.Dataset.map"),w(Ys,"rel","nofollow"),w(tt,"href","/docs/transformers/v4.21.2/en/main_classes/data_collator#transformers.DefaultDataCollator"),w(Fs,"id","train"),w(Fs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(Fs,"href","#train"),w(Es,"class","relative group")},m(s,h){t(document.head,a),c(s,u,h),c(s,n,h),t(n,d),t(d,j),A($,j,null),t(n,x),t(n,C),t(C,b),c(s,k,h),A(F,s,h),c(s,I,h),c(s,B,h),t(B,N),c(s,S,h),c(s,Y,h),t(Y,R),t(R,ds),t(Y,ps),t(Y,G),t(G,W),c(s,J,h),c(s,M,h),t(M,ns),t(M,ss),t(ss,_s),t(M,X),t(M,U),t(U,ts),t(M,Z),c(s,fs,h),A(L,s,h),c(s,H,h),c(s,V,h),t(V,m),t(m,q),A(Q,q,null),t(V,gs),t(V,O),t(O,cs),c(s,es,h),c(s,K,h),t(K,vs),c(s,os,h),A(as,s,h),c(s,hs,h),c(s,$s,h),t($s,f),c(s,v,h),A(ls,s,h),c(s,Is,h),c(s,is,h),t(is,Ws),t(is,xs),t(xs,Xs),t(is,As),t(is,Ts),t(Ts,Zs),t(is,Ds),c(s,Bs,h),c(s,us,h),t(us,zs),t(zs,it),A(Ns,it,null),t(us,Xt),t(us,pt),t(pt,Zt),c(s,Tt,h),A(Rs,s,h),c(s,Dt,h),c(s,ks,h),t(ks,se),t(ks,ft),t(ft,te),t(ks,ee),t(ks,ct),t(ct,ae),t(ks,ne),c(s,zt,h),A(Us,s,h),c(s,Ct,h),c(s,st,h),t(st,re),c(s,Pt,h),c(s,bs,h),t(bs,ws),t(ws,oe),t(ws,ht),t(ht,le),t(ws,ie),t(ws,ut),t(ut,pe),t(ws,fe),t(ws,mt),t(mt,ce),t(ws,he),t(bs,ue),t(bs,ys),t(ys,me),t(ys,dt),t(dt,de),t(ys,_e),t(ys,_t),t(_t,ge),t(ys,$e),t(bs,we),t(bs,js),t(js,je),t(js,Hs),t(Hs,gt),t(gt,ve),t(js,xe),t(js,$t),t($t,ke),t(js,be),t(js,wt),t(wt,qe),t(js,ye),c(s,Ft,h),c(s,Cs,h),t(Cs,Ee),t(Cs,jt),t(jt,Ae),t(Cs,Te),c(s,St,h),A(Vs,s,h),c(s,Mt,h),c(s,ms,h),t(ms,De),t(ms,Ys),t(Ys,ze),t(ms,Ce),t(ms,vt),t(vt,Pe),t(ms,Fe),t(ms,xt),t(xt,Se),t(ms,Me),c(s,Lt,h),A(Gs,s,h),c(s,Qt,h),c(s,qs,h),t(qs,Le),t(qs,tt),t(tt,Qe),t(qs,Oe),t(qs,kt),t(kt,Ie),t(qs,Be),c(s,Ot,h),A(Ps,s,h),c(s,It,h),c(s,Es,h),t(Es,Fs),t(Fs,bt),A(Js,bt,null),t(Es,Ne),t(Es,qt),t(qt,Re),c(s,Bt,h),A(Ss,s,h),c(s,Nt,h),A(Ms,s,h),Rt=!0},p(s,[h]){const Ks={};h&2&&(Ks.$$scope={dirty:h,ctx:s}),L.$set(Ks);const yt={};h&2&&(yt.$$scope={dirty:h,ctx:s}),Ps.$set(yt);const Et={};h&2&&(Et.$$scope={dirty:h,ctx:s}),Ss.$set(Et);const At={};h&2&&(At.$$scope={dirty:h,ctx:s}),Ms.$set(At)},i(s){Rt||(T($.$$.fragment,s),T(F.$$.fragment,s),T(L.$$.fragment,s),T(Q.$$.fragment,s),T(as.$$.fragment,s),T(ls.$$.fragment,s),T(Ns.$$.fragment,s),T(Rs.$$.fragment,s),T(Us.$$.fragment,s),T(Vs.$$.fragment,s),T(Gs.$$.fragment,s),T(Ps.$$.fragment,s),T(Js.$$.fragment,s),T(Ss.$$.fragment,s),T(Ms.$$.fragment,s),Rt=!0)},o(s){D($.$$.fragment,s),D(F.$$.fragment,s),D(L.$$.fragment,s),D(Q.$$.fragment,s),D(as.$$.fragment,s),D(ls.$$.fragment,s),D(Ns.$$.fragment,s),D(Rs.$$.fragment,s),D(Us.$$.fragment,s),D(Vs.$$.fragment,s),D(Gs.$$.fragment,s),D(Ps.$$.fragment,s),D(Js.$$.fragment,s),D(Ss.$$.fragment,s),D(Ms.$$.fragment,s),Rt=!1},d(s){e(a),s&&e(u),s&&e(n),z($),s&&e(k),z(F,s),s&&e(I),s&&e(B),s&&e(S),s&&e(Y),s&&e(J),s&&e(M),s&&e(fs),z(L,s),s&&e(H),s&&e(V),z(Q),s&&e(es),s&&e(K),s&&e(os),z(as,s),s&&e(hs),s&&e($s),s&&e(v),z(ls,s),s&&e(Is),s&&e(is),s&&e(Bs),s&&e(us),z(Ns),s&&e(Tt),z(Rs,s),s&&e(Dt),s&&e(ks),s&&e(zt),z(Us,s),s&&e(Ct),s&&e(st),s&&e(Pt),s&&e(bs),s&&e(Ft),s&&e(Cs),s&&e(St),z(Vs,s),s&&e(Mt),s&&e(ms),s&&e(Lt),z(Gs,s),s&&e(Qt),s&&e(qs),s&&e(Ot),z(Ps,s),s&&e(It),s&&e(Es),z(Js),s&&e(Bt),z(Ss,s),s&&e(Nt),z(Ms,s)}}}const Ya={local:"question-answering",sections:[{local:"load-squad-dataset",title:"Load SQuAD dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Question answering"};function Ga(P){return Pa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tn extends Ta{constructor(a){super();Da(this,a,Ga,Va,za,{})}}export{tn as default,Ya as metadata};
