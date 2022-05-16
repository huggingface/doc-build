import{S as za,i as Ca,s as Pa,e as l,k as _,w as b,t as o,M as Fa,c as i,d as e,m as g,a as p,x as q,h as r,b as w,F as t,g as f,y,q as E,o as A,B as T,v as Sa,L as Da}from"../../chunks/vendor-6b77c823.js";import{T as Wt}from"../../chunks/Tip-39098574.js";import{Y as Aa}from"../../chunks/Youtube-5c6e11e6.js";import{I as Kt}from"../../chunks/IconCopyLink-7a11ce68.js";import{C as ls}from"../../chunks/CodeBlock-3a8b25a8.js";import{F as Ta,M as Xt}from"../../chunks/Markdown-9acf6d91.js";function Ma(F){let a,u,n,d,j;return{c(){a=l("p"),u=o("See the question answering "),n=l("a"),d=o("task page"),j=o(" for more information about other forms of question answering and their associated models, datasets, and metrics."),this.h()},l($){a=i($,"P",{});var x=p(a);u=r(x,"See the question answering "),n=i(x,"A",{href:!0,rel:!0});var z=p(n);d=r(z,"task page"),z.forEach(e),j=r(x," for more information about other forms of question answering and their associated models, datasets, and metrics."),x.forEach(e),this.h()},h(){w(n,"href","https://huggingface.co/tasks/question-answering"),w(n,"rel","nofollow")},m($,x){f($,a,x),t(a,u),t(a,n),t(n,d),t(a,j)},d($){$&&e(a)}}}function La(F){let a,u;return a=new ls({props:{code:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DefaultDataCollator()`}}),{c(){b(a.$$.fragment)},l(n){q(a.$$.fragment,n)},m(n,d){y(a,n,d),u=!0},p:Da,i(n){u||(E(a.$$.fragment,n),u=!0)},o(n){A(a.$$.fragment,n),u=!1},d(n){T(a,n)}}}function Oa(F){let a,u;return a=new Xt({props:{$$slots:{default:[La]},$$scope:{ctx:F}}}),{c(){b(a.$$.fragment)},l(n){q(a.$$.fragment,n)},m(n,d){y(a,n,d),u=!0},p(n,d){const j={};d&2&&(j.$$scope={dirty:d,ctx:n}),a.$set(j)},i(n){u||(E(a.$$.fragment,n),u=!0)},o(n){A(a.$$.fragment,n),u=!1},d(n){T(a,n)}}}function Qa(F){let a,u;return a=new ls({props:{code:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator(return_tensors="tf")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DefaultDataCollator(return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),{c(){b(a.$$.fragment)},l(n){q(a.$$.fragment,n)},m(n,d){y(a,n,d),u=!0},p:Da,i(n){u||(E(a.$$.fragment,n),u=!0)},o(n){A(a.$$.fragment,n),u=!1},d(n){T(a,n)}}}function Ia(F){let a,u;return a=new Xt({props:{$$slots:{default:[Qa]},$$scope:{ctx:F}}}),{c(){b(a.$$.fragment)},l(n){q(a.$$.fragment,n)},m(n,d){y(a,n,d),u=!0},p(n,d){const j={};d&2&&(j.$$scope={dirty:d,ctx:n}),a.$set(j)},i(n){u||(E(a.$$.fragment,n),u=!0)},o(n){A(a.$$.fragment,n),u=!1},d(n){T(a,n)}}}function Ba(F){let a,u,n,d,j,$,x,z;return{c(){a=l("p"),u=o("If you aren\u2019t familiar with fine-tuning a model with the "),n=l("a"),d=o("Trainer"),j=o(", take a look at the basic tutorial "),$=l("a"),x=o("here"),z=o("!"),this.h()},l(C){a=i(C,"P",{});var k=p(a);u=r(k,"If you aren\u2019t familiar with fine-tuning a model with the "),n=i(k,"A",{href:!0});var S=p(n);d=r(S,"Trainer"),S.forEach(e),j=r(k,", take a look at the basic tutorial "),$=i(k,"A",{href:!0});var N=p($);x=r(N,"here"),N.forEach(e),z=r(k,"!"),k.forEach(e),this.h()},h(){w(n,"href","/docs/transformers/v4.19.2/en/main_classes/trainer#transformers.Trainer"),w($,"href","../training#finetune-with-trainer")},m(C,k){f(C,a,k),t(a,u),t(a,n),t(n,d),t(a,j),t(a,$),t($,x),t(a,z)},d(C){C&&e(a)}}}function Na(F){let a,u,n,d,j,$,x,z,C,k,S,N,X,M,V,L,Y,ts,ms,es,I,is,P,ds,R,_s,ss,Z,U,fs,J,G,O,Q;return x=new ls({props:{code:`from transformers import AutoModelForQuestionAnswering, TrainingArguments, Trainer

model = AutoModelForQuestionAnswering.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForQuestionAnswering, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),C=new Wt({props:{$$slots:{default:[Ba]},$$scope:{ctx:F}}}),O=new ls({props:{code:`training_args = TrainingArguments(
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

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){a=l("p"),u=o("Load DistilBERT with "),n=l("a"),d=o("AutoModelForQuestionAnswering"),j=o(":"),$=_(),b(x.$$.fragment),z=_(),b(C.$$.fragment),k=_(),S=l("p"),N=o("At this point, only three steps remain:"),X=_(),M=l("ol"),V=l("li"),L=o("Define your training hyperparameters in "),Y=l("a"),ts=o("TrainingArguments"),ms=o("."),es=_(),I=l("li"),is=o("Pass the training arguments to "),P=l("a"),ds=o("Trainer"),R=o(" along with the model, dataset, tokenizer, and data collator."),_s=_(),ss=l("li"),Z=o("Call "),U=l("a"),fs=o("train()"),J=o(" to fine-tune your model."),G=_(),b(O.$$.fragment),this.h()},l(m){a=i(m,"P",{});var D=p(a);u=r(D,"Load DistilBERT with "),n=i(D,"A",{href:!0});var H=p(n);d=r(H,"AutoModelForQuestionAnswering"),H.forEach(e),j=r(D,":"),D.forEach(e),$=g(m),q(x.$$.fragment,m),z=g(m),q(C.$$.fragment,m),k=g(m),S=i(m,"P",{});var as=p(S);N=r(as,"At this point, only three steps remain:"),as.forEach(e),X=g(m),M=i(m,"OL",{});var K=p(M);V=i(K,"LI",{});var W=p(V);L=r(W,"Define your training hyperparameters in "),Y=i(W,"A",{href:!0});var gs=p(Y);ts=r(gs,"TrainingArguments"),gs.forEach(e),ms=r(W,"."),W.forEach(e),es=g(K),I=i(K,"LI",{});var B=p(I);is=r(B,"Pass the training arguments to "),P=i(B,"A",{href:!0});var hs=p(P);ds=r(hs,"Trainer"),hs.forEach(e),R=r(B," along with the model, dataset, tokenizer, and data collator."),B.forEach(e),_s=g(K),ss=i(K,"LI",{});var ps=p(ss);Z=r(ps,"Call "),U=i(ps,"A",{href:!0});var ns=p(U);fs=r(ns,"train()"),ns.forEach(e),J=r(ps," to fine-tune your model."),ps.forEach(e),K.forEach(e),G=g(m),q(O.$$.fragment,m),this.h()},h(){w(n,"href","/docs/transformers/v4.19.2/en/model_doc/auto#transformers.AutoModelForQuestionAnswering"),w(Y,"href","/docs/transformers/v4.19.2/en/main_classes/trainer#transformers.TrainingArguments"),w(P,"href","/docs/transformers/v4.19.2/en/main_classes/trainer#transformers.Trainer"),w(U,"href","/docs/transformers/v4.19.2/en/main_classes/trainer#transformers.Trainer.train")},m(m,D){f(m,a,D),t(a,u),t(a,n),t(n,d),t(a,j),f(m,$,D),y(x,m,D),f(m,z,D),y(C,m,D),f(m,k,D),f(m,S,D),t(S,N),f(m,X,D),f(m,M,D),t(M,V),t(V,L),t(V,Y),t(Y,ts),t(V,ms),t(M,es),t(M,I),t(I,is),t(I,P),t(P,ds),t(I,R),t(M,_s),t(M,ss),t(ss,Z),t(ss,U),t(U,fs),t(ss,J),f(m,G,D),y(O,m,D),Q=!0},p(m,D){const H={};D&2&&(H.$$scope={dirty:D,ctx:m}),C.$set(H)},i(m){Q||(E(x.$$.fragment,m),E(C.$$.fragment,m),E(O.$$.fragment,m),Q=!0)},o(m){A(x.$$.fragment,m),A(C.$$.fragment,m),A(O.$$.fragment,m),Q=!1},d(m){m&&e(a),m&&e($),T(x,m),m&&e(z),T(C,m),m&&e(k),m&&e(S),m&&e(X),m&&e(M),m&&e(G),T(O,m)}}}function Ra(F){let a,u;return a=new Xt({props:{$$slots:{default:[Na]},$$scope:{ctx:F}}}),{c(){b(a.$$.fragment)},l(n){q(a.$$.fragment,n)},m(n,d){y(a,n,d),u=!0},p(n,d){const j={};d&2&&(j.$$scope={dirty:d,ctx:n}),a.$set(j)},i(n){u||(E(a.$$.fragment,n),u=!0)},o(n){A(a.$$.fragment,n),u=!1},d(n){T(a,n)}}}function Ua(F){let a,u,n,d,j;return{c(){a=l("p"),u=o("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),n=l("a"),d=o("here"),j=o("!"),this.h()},l($){a=i($,"P",{});var x=p(a);u=r(x,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),n=i(x,"A",{href:!0});var z=p(n);d=r(z,"here"),z.forEach(e),j=r(x,"!"),x.forEach(e),this.h()},h(){w(n,"href","training#finetune-with-keras")},m($,x){f($,a,x),t(a,u),t(a,n),t(n,d),t(a,j)},d($){$&&e(a)}}}function Ha(F){let a,u,n,d,j,$,x,z,C,k,S,N,X,M,V,L,Y,ts,ms,es,I,is,P,ds,R,_s,ss,Z,U,fs,J,G,O,Q,m,D,H,as,K,W,gs,B,hs,ps,ns,qs,os,As;return M=new ls({props:{code:`tf_train_set = tokenized_squad["train"].to_tf_dataset(
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
<span class="hljs-meta">... </span>)`}}),L=new Wt({props:{$$slots:{default:[Ua]},$$scope:{ctx:F}}}),I=new ls({props:{code:`from transformers import create_optimizer

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
<span class="hljs-meta">... </span>)`}}),U=new ls({props:{code:`from transformers import TFAutoModelForQuestionAnswering

model = TFAutoModelForQuestionAnswering("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForQuestionAnswering(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),as=new ls({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),os=new ls({props:{code:"model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=3)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=<span class="hljs-number">3</span>)'}}),{c(){a=l("p"),u=o("To fine-tune a model in TensorFlow, start by converting your datasets to the "),n=l("code"),d=o("tf.data.Dataset"),j=o(" format with "),$=l("a"),x=l("code"),z=o("to_tf_dataset"),C=o(". Specify inputs and the start and end positions of an answer in "),k=l("code"),S=o("columns"),N=o(", whether to shuffle the dataset order, batch size, and the data collator:"),X=_(),b(M.$$.fragment),V=_(),b(L.$$.fragment),Y=_(),ts=l("p"),ms=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),es=_(),b(I.$$.fragment),is=_(),P=l("p"),ds=o("Load DistilBERT with "),R=l("a"),_s=o("TFAutoModelForQuestionAnswering"),ss=o(":"),Z=_(),b(U.$$.fragment),fs=_(),J=l("p"),G=o("Configure the model for training with "),O=l("a"),Q=l("code"),m=o("compile"),D=o(":"),H=_(),b(as.$$.fragment),K=_(),W=l("p"),gs=o("Call "),B=l("a"),hs=l("code"),ps=o("fit"),ns=o(" to fine-tune the model:"),qs=_(),b(os.$$.fragment),this.h()},l(c){a=i(c,"P",{});var v=p(a);u=r(v,"To fine-tune a model in TensorFlow, start by converting your datasets to the "),n=i(v,"CODE",{});var vs=p(n);d=r(vs,"tf.data.Dataset"),vs.forEach(e),j=r(v," format with "),$=i(v,"A",{href:!0,rel:!0});var cs=p($);x=i(cs,"CODE",{});var Xs=p(x);z=r(Xs,"to_tf_dataset"),Xs.forEach(e),cs.forEach(e),C=r(v,". Specify inputs and the start and end positions of an answer in "),k=i(v,"CODE",{});var Ts=p(k);S=r(Ts,"columns"),Ts.forEach(e),N=r(v,", whether to shuffle the dataset order, batch size, and the data collator:"),v.forEach(e),X=g(c),q(M.$$.fragment,c),V=g(c),q(L.$$.fragment,c),Y=g(c),ts=i(c,"P",{});var Zs=p(ts);ms=r(Zs,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Zs.forEach(e),es=g(c),q(I.$$.fragment,c),is=g(c),P=i(c,"P",{});var Ds=p(P);ds=r(Ds,"Load DistilBERT with "),R=i(Ds,"A",{href:!0});var zs=p(R);_s=r(zs,"TFAutoModelForQuestionAnswering"),zs.forEach(e),ss=r(Ds,":"),Ds.forEach(e),Z=g(c),q(U.$$.fragment,c),fs=g(c),J=i(c,"P",{});var Cs=p(J);G=r(Cs,"Configure the model for training with "),O=i(Cs,"A",{href:!0,rel:!0});var st=p(O);Q=i(st,"CODE",{});var Ns=p(Q);m=r(Ns,"compile"),Ns.forEach(e),st.forEach(e),D=r(Cs,":"),Cs.forEach(e),H=g(c),q(as.$$.fragment,c),K=g(c),W=i(c,"P",{});var rs=p(W);gs=r(rs,"Call "),B=i(rs,"A",{href:!0,rel:!0});var $s=p(B);hs=i($s,"CODE",{});var Ps=p(hs);ps=r(Ps,"fit"),Ps.forEach(e),$s.forEach(e),ns=r(rs," to fine-tune the model:"),rs.forEach(e),qs=g(c),q(os.$$.fragment,c),this.h()},h(){w($,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.to_tf_dataset"),w($,"rel","nofollow"),w(R,"href","/docs/transformers/v4.19.2/en/model_doc/auto#transformers.TFAutoModelForQuestionAnswering"),w(O,"href","https://keras.io/api/models/model_training_apis/#compile-method"),w(O,"rel","nofollow"),w(B,"href","https://keras.io/api/models/model_training_apis/#fit-method"),w(B,"rel","nofollow")},m(c,v){f(c,a,v),t(a,u),t(a,n),t(n,d),t(a,j),t(a,$),t($,x),t(x,z),t(a,C),t(a,k),t(k,S),t(a,N),f(c,X,v),y(M,c,v),f(c,V,v),y(L,c,v),f(c,Y,v),f(c,ts,v),t(ts,ms),f(c,es,v),y(I,c,v),f(c,is,v),f(c,P,v),t(P,ds),t(P,R),t(R,_s),t(P,ss),f(c,Z,v),y(U,c,v),f(c,fs,v),f(c,J,v),t(J,G),t(J,O),t(O,Q),t(Q,m),t(J,D),f(c,H,v),y(as,c,v),f(c,K,v),f(c,W,v),t(W,gs),t(W,B),t(B,hs),t(hs,ps),t(W,ns),f(c,qs,v),y(os,c,v),As=!0},p(c,v){const vs={};v&2&&(vs.$$scope={dirty:v,ctx:c}),L.$set(vs)},i(c){As||(E(M.$$.fragment,c),E(L.$$.fragment,c),E(I.$$.fragment,c),E(U.$$.fragment,c),E(as.$$.fragment,c),E(os.$$.fragment,c),As=!0)},o(c){A(M.$$.fragment,c),A(L.$$.fragment,c),A(I.$$.fragment,c),A(U.$$.fragment,c),A(as.$$.fragment,c),A(os.$$.fragment,c),As=!1},d(c){c&&e(a),c&&e(X),T(M,c),c&&e(V),T(L,c),c&&e(Y),c&&e(ts),c&&e(es),T(I,c),c&&e(is),c&&e(P),c&&e(Z),T(U,c),c&&e(fs),c&&e(J),c&&e(H),T(as,c),c&&e(K),c&&e(W),c&&e(qs),T(os,c)}}}function Va(F){let a,u;return a=new Xt({props:{$$slots:{default:[Ha]},$$scope:{ctx:F}}}),{c(){b(a.$$.fragment)},l(n){q(a.$$.fragment,n)},m(n,d){y(a,n,d),u=!0},p(n,d){const j={};d&2&&(j.$$scope={dirty:d,ctx:n}),a.$set(j)},i(n){u||(E(a.$$.fragment,n),u=!0)},o(n){A(a.$$.fragment,n),u=!1},d(n){T(a,n)}}}function Ya(F){let a,u,n,d,j,$,x,z;return{c(){a=l("p"),u=o(`For a more in-depth example of how to fine-tune a model for question answering, take a look at the corresponding
`),n=l("a"),d=o("PyTorch notebook"),j=o(`
or `),$=l("a"),x=o("TensorFlow notebook"),z=o("."),this.h()},l(C){a=i(C,"P",{});var k=p(a);u=r(k,`For a more in-depth example of how to fine-tune a model for question answering, take a look at the corresponding
`),n=i(k,"A",{href:!0,rel:!0});var S=p(n);d=r(S,"PyTorch notebook"),S.forEach(e),j=r(k,`
or `),$=i(k,"A",{href:!0,rel:!0});var N=p($);x=r(N,"TensorFlow notebook"),N.forEach(e),z=r(k,"."),k.forEach(e),this.h()},h(){w(n,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering.ipynb"),w(n,"rel","nofollow"),w($,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering-tf.ipynb"),w($,"rel","nofollow")},m(C,k){f(C,a,k),t(a,u),t(a,n),t(n,d),t(a,j),t(a,$),t($,x),t(a,z)},d(C){C&&e(a)}}}function Ja(F){let a,u,n,d,j,$,x,z,C,k,S,N,X,M,V,L,Y,ts,ms,es,I,is,P,ds,R,_s,ss,Z,U,fs,J,G,O,Q,m,D,H,as,K,W,gs,B,hs,ps,ns,qs,os,As,c,v,vs,cs,Xs,Ts,Zs,Ds,zs,Cs,st,Ns,rs,$s,Ps,Rs,Zt,pt,se,Dt,Us,zt,xs,te,ct,ee,ae,ft,ne,oe,Ct,Hs,Pt,tt,re,Ft,ks,ws,le,ht,ie,pe,ut,ce,fe,mt,he,ue,me,ys,de,dt,_e,ge,_t,$e,we,je,js,ve,Vs,gt,xe,ke,$t,be,qe,wt,ye,Ee,St,Fs,Ae,jt,Te,De,Mt,Ys,Lt,us,ze,Js,vt,Ce,Pe,xt,Fe,Se,kt,Me,Le,Ot,Gs,Qt,bs,Oe,et,Qe,Ie,bt,Be,Ne,It,Ss,Bt,Es,Ms,qt,Ks,Re,yt,Ue,Nt,Ls,Rt,Os,Ut;return $=new Kt({}),S=new Aa({props:{id:"ajPx5LwJD-I"}}),G=new Wt({props:{$$slots:{default:[Ma]},$$scope:{ctx:F}}}),H=new Kt({}),ns=new ls({props:{code:`from datasets import load_dataset

squad = load_dataset("squad")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&quot;squad&quot;</span>)`}}),v=new ls({props:{code:'squad["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>squad[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;answers&#x27;</span>: {<span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">515</span>], <span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Saint Bernadette Soubirous&#x27;</span>]},
 <span class="hljs-string">&#x27;context&#x27;</span>: <span class="hljs-string">&#x27;Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot;Venite Ad Me Omnes&quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.&#x27;</span>,
 <span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;5733be284776f41900661182&#x27;</span>,
 <span class="hljs-string">&#x27;question&#x27;</span>: <span class="hljs-string">&#x27;To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?&#x27;</span>,
 <span class="hljs-string">&#x27;title&#x27;</span>: <span class="hljs-string">&#x27;University_of_Notre_Dame&#x27;</span>
}`}}),Rs=new Kt({}),Us=new Aa({props:{id:"qgaM0weJHpA"}}),Hs=new ls({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),Ys=new ls({props:{code:`def preprocess_function(examples):
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
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> inputs`}}),Gs=new ls({props:{code:'tokenized_squad = squad.map(preprocess_function, batched=True, remove_columns=squad["train"].column_names)',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_squad = squad.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>, remove_columns=squad[<span class="hljs-string">&quot;train&quot;</span>].column_names)'}}),Ss=new Ta({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Ia],pytorch:[Oa]},$$scope:{ctx:F}}}),Ks=new Kt({}),Ls=new Ta({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Va],pytorch:[Ra]},$$scope:{ctx:F}}}),Os=new Wt({props:{$$slots:{default:[Ya]},$$scope:{ctx:F}}}),{c(){a=l("meta"),u=_(),n=l("h1"),d=l("a"),j=l("span"),b($.$$.fragment),x=_(),z=l("span"),C=o("Question answering"),k=_(),b(S.$$.fragment),N=_(),X=l("p"),M=o("Question answering tasks return an answer given a question. There are two common forms of question answering:"),V=_(),L=l("ul"),Y=l("li"),ts=o("Extractive: extract the answer from the given context."),ms=_(),es=l("li"),I=o("Abstractive: generate an answer from the context that correctly answers the question."),is=_(),P=l("p"),ds=o("This guide will show you how to fine-tune "),R=l("a"),_s=o("DistilBERT"),ss=o(" on the "),Z=l("a"),U=o("SQuAD"),fs=o(" dataset for extractive question answering."),J=_(),b(G.$$.fragment),O=_(),Q=l("h2"),m=l("a"),D=l("span"),b(H.$$.fragment),as=_(),K=l("span"),W=o("Load SQuAD dataset"),gs=_(),B=l("p"),hs=o("Load the SQuAD dataset from the \u{1F917} Datasets library:"),ps=_(),b(ns.$$.fragment),qs=_(),os=l("p"),As=o("Then take a look at an example:"),c=_(),b(v.$$.fragment),vs=_(),cs=l("p"),Xs=o("The "),Ts=l("code"),Zs=o("answers"),Ds=o(" field is a dictionary containing the starting position of the answer and the "),zs=l("code"),Cs=o("text"),st=o(" of the answer."),Ns=_(),rs=l("h2"),$s=l("a"),Ps=l("span"),b(Rs.$$.fragment),Zt=_(),pt=l("span"),se=o("Preprocess"),Dt=_(),b(Us.$$.fragment),zt=_(),xs=l("p"),te=o("Load the DistilBERT tokenizer to process the "),ct=l("code"),ee=o("question"),ae=o(" and "),ft=l("code"),ne=o("context"),oe=o(" fields:"),Ct=_(),b(Hs.$$.fragment),Pt=_(),tt=l("p"),re=o("There are a few preprocessing steps particular to question answering that you should be aware of:"),Ft=_(),ks=l("ol"),ws=l("li"),le=o("Some examples in a dataset may have a very long "),ht=l("code"),ie=o("context"),pe=o(" that exceeds the maximum input length of the model. Truncate only the "),ut=l("code"),ce=o("context"),fe=o(" by setting "),mt=l("code"),he=o('truncation="only_second"'),ue=o("."),me=_(),ys=l("li"),de=o("Next, map the start and end positions of the answer to the original "),dt=l("code"),_e=o("context"),ge=o(` by setting
`),_t=l("code"),$e=o("return_offset_mapping=True"),we=o("."),je=_(),js=l("li"),ve=o("With the mapping in hand, you can find the start and end tokens of the answer. Use the "),Vs=l("a"),gt=l("code"),xe=o("sequence_ids"),ke=o(` method to
find which part of the offset corresponds to the `),$t=l("code"),be=o("question"),qe=o(" and which corresponds to the "),wt=l("code"),ye=o("context"),Ee=o("."),St=_(),Fs=l("p"),Ae=o("Here is how you can create a function to truncate and map the start and end tokens of the answer to the "),jt=l("code"),Te=o("context"),De=o(":"),Mt=_(),b(Ys.$$.fragment),Lt=_(),us=l("p"),ze=o("Use \u{1F917} Datasets "),Js=l("a"),vt=l("code"),Ce=o("map"),Pe=o(" function to apply the preprocessing function over the entire dataset. You can speed up the "),xt=l("code"),Fe=o("map"),Se=o(" function by setting "),kt=l("code"),Me=o("batched=True"),Le=o(" to process multiple elements of the dataset at once. Remove the columns you don\u2019t need:"),Ot=_(),b(Gs.$$.fragment),Qt=_(),bs=l("p"),Oe=o("Use "),et=l("a"),Qe=o("DefaultDataCollator"),Ie=o(" to create a batch of examples. Unlike other data collators in \u{1F917} Transformers, the "),bt=l("code"),Be=o("DefaultDataCollator"),Ne=o(" does not apply additional preprocessing such as padding."),It=_(),b(Ss.$$.fragment),Bt=_(),Es=l("h2"),Ms=l("a"),qt=l("span"),b(Ks.$$.fragment),Re=_(),yt=l("span"),Ue=o("Train"),Nt=_(),b(Ls.$$.fragment),Rt=_(),b(Os.$$.fragment),this.h()},l(s){const h=Fa('[data-svelte="svelte-1phssyn"]',document.head);a=i(h,"META",{name:!0,content:!0}),h.forEach(e),u=g(s),n=i(s,"H1",{class:!0});var Ws=p(n);d=i(Ws,"A",{id:!0,class:!0,href:!0});var Et=p(d);j=i(Et,"SPAN",{});var At=p(j);q($.$$.fragment,At),At.forEach(e),Et.forEach(e),x=g(Ws),z=i(Ws,"SPAN",{});var Tt=p(z);C=r(Tt,"Question answering"),Tt.forEach(e),Ws.forEach(e),k=g(s),q(S.$$.fragment,s),N=g(s),X=i(s,"P",{});var He=p(X);M=r(He,"Question answering tasks return an answer given a question. There are two common forms of question answering:"),He.forEach(e),V=g(s),L=i(s,"UL",{});var Ht=p(L);Y=i(Ht,"LI",{});var Ve=p(Y);ts=r(Ve,"Extractive: extract the answer from the given context."),Ve.forEach(e),ms=g(Ht),es=i(Ht,"LI",{});var Ye=p(es);I=r(Ye,"Abstractive: generate an answer from the context that correctly answers the question."),Ye.forEach(e),Ht.forEach(e),is=g(s),P=i(s,"P",{});var at=p(P);ds=r(at,"This guide will show you how to fine-tune "),R=i(at,"A",{href:!0,rel:!0});var Je=p(R);_s=r(Je,"DistilBERT"),Je.forEach(e),ss=r(at," on the "),Z=i(at,"A",{href:!0,rel:!0});var Ge=p(Z);U=r(Ge,"SQuAD"),Ge.forEach(e),fs=r(at," dataset for extractive question answering."),at.forEach(e),J=g(s),q(G.$$.fragment,s),O=g(s),Q=i(s,"H2",{class:!0});var Vt=p(Q);m=i(Vt,"A",{id:!0,class:!0,href:!0});var Ke=p(m);D=i(Ke,"SPAN",{});var We=p(D);q(H.$$.fragment,We),We.forEach(e),Ke.forEach(e),as=g(Vt),K=i(Vt,"SPAN",{});var Xe=p(K);W=r(Xe,"Load SQuAD dataset"),Xe.forEach(e),Vt.forEach(e),gs=g(s),B=i(s,"P",{});var Ze=p(B);hs=r(Ze,"Load the SQuAD dataset from the \u{1F917} Datasets library:"),Ze.forEach(e),ps=g(s),q(ns.$$.fragment,s),qs=g(s),os=i(s,"P",{});var sa=p(os);As=r(sa,"Then take a look at an example:"),sa.forEach(e),c=g(s),q(v.$$.fragment,s),vs=g(s),cs=i(s,"P",{});var nt=p(cs);Xs=r(nt,"The "),Ts=i(nt,"CODE",{});var ta=p(Ts);Zs=r(ta,"answers"),ta.forEach(e),Ds=r(nt," field is a dictionary containing the starting position of the answer and the "),zs=i(nt,"CODE",{});var ea=p(zs);Cs=r(ea,"text"),ea.forEach(e),st=r(nt," of the answer."),nt.forEach(e),Ns=g(s),rs=i(s,"H2",{class:!0});var Yt=p(rs);$s=i(Yt,"A",{id:!0,class:!0,href:!0});var aa=p($s);Ps=i(aa,"SPAN",{});var na=p(Ps);q(Rs.$$.fragment,na),na.forEach(e),aa.forEach(e),Zt=g(Yt),pt=i(Yt,"SPAN",{});var oa=p(pt);se=r(oa,"Preprocess"),oa.forEach(e),Yt.forEach(e),Dt=g(s),q(Us.$$.fragment,s),zt=g(s),xs=i(s,"P",{});var ot=p(xs);te=r(ot,"Load the DistilBERT tokenizer to process the "),ct=i(ot,"CODE",{});var ra=p(ct);ee=r(ra,"question"),ra.forEach(e),ae=r(ot," and "),ft=i(ot,"CODE",{});var la=p(ft);ne=r(la,"context"),la.forEach(e),oe=r(ot," fields:"),ot.forEach(e),Ct=g(s),q(Hs.$$.fragment,s),Pt=g(s),tt=i(s,"P",{});var ia=p(tt);re=r(ia,"There are a few preprocessing steps particular to question answering that you should be aware of:"),ia.forEach(e),Ft=g(s),ks=i(s,"OL",{});var rt=p(ks);ws=i(rt,"LI",{});var Qs=p(ws);le=r(Qs,"Some examples in a dataset may have a very long "),ht=i(Qs,"CODE",{});var pa=p(ht);ie=r(pa,"context"),pa.forEach(e),pe=r(Qs," that exceeds the maximum input length of the model. Truncate only the "),ut=i(Qs,"CODE",{});var ca=p(ut);ce=r(ca,"context"),ca.forEach(e),fe=r(Qs," by setting "),mt=i(Qs,"CODE",{});var fa=p(mt);he=r(fa,'truncation="only_second"'),fa.forEach(e),ue=r(Qs,"."),Qs.forEach(e),me=g(rt),ys=i(rt,"LI",{});var lt=p(ys);de=r(lt,"Next, map the start and end positions of the answer to the original "),dt=i(lt,"CODE",{});var ha=p(dt);_e=r(ha,"context"),ha.forEach(e),ge=r(lt,` by setting
`),_t=i(lt,"CODE",{});var ua=p(_t);$e=r(ua,"return_offset_mapping=True"),ua.forEach(e),we=r(lt,"."),lt.forEach(e),je=g(rt),js=i(rt,"LI",{});var Is=p(js);ve=r(Is,"With the mapping in hand, you can find the start and end tokens of the answer. Use the "),Vs=i(Is,"A",{href:!0,rel:!0});var ma=p(Vs);gt=i(ma,"CODE",{});var da=p(gt);xe=r(da,"sequence_ids"),da.forEach(e),ma.forEach(e),ke=r(Is,` method to
find which part of the offset corresponds to the `),$t=i(Is,"CODE",{});var _a=p($t);be=r(_a,"question"),_a.forEach(e),qe=r(Is," and which corresponds to the "),wt=i(Is,"CODE",{});var ga=p(wt);ye=r(ga,"context"),ga.forEach(e),Ee=r(Is,"."),Is.forEach(e),rt.forEach(e),St=g(s),Fs=i(s,"P",{});var Jt=p(Fs);Ae=r(Jt,"Here is how you can create a function to truncate and map the start and end tokens of the answer to the "),jt=i(Jt,"CODE",{});var $a=p(jt);Te=r($a,"context"),$a.forEach(e),De=r(Jt,":"),Jt.forEach(e),Mt=g(s),q(Ys.$$.fragment,s),Lt=g(s),us=i(s,"P",{});var Bs=p(us);ze=r(Bs,"Use \u{1F917} Datasets "),Js=i(Bs,"A",{href:!0,rel:!0});var wa=p(Js);vt=i(wa,"CODE",{});var ja=p(vt);Ce=r(ja,"map"),ja.forEach(e),wa.forEach(e),Pe=r(Bs," function to apply the preprocessing function over the entire dataset. You can speed up the "),xt=i(Bs,"CODE",{});var va=p(xt);Fe=r(va,"map"),va.forEach(e),Se=r(Bs," function by setting "),kt=i(Bs,"CODE",{});var xa=p(kt);Me=r(xa,"batched=True"),xa.forEach(e),Le=r(Bs," to process multiple elements of the dataset at once. Remove the columns you don\u2019t need:"),Bs.forEach(e),Ot=g(s),q(Gs.$$.fragment,s),Qt=g(s),bs=i(s,"P",{});var it=p(bs);Oe=r(it,"Use "),et=i(it,"A",{href:!0});var ka=p(et);Qe=r(ka,"DefaultDataCollator"),ka.forEach(e),Ie=r(it," to create a batch of examples. Unlike other data collators in \u{1F917} Transformers, the "),bt=i(it,"CODE",{});var ba=p(bt);Be=r(ba,"DefaultDataCollator"),ba.forEach(e),Ne=r(it," does not apply additional preprocessing such as padding."),it.forEach(e),It=g(s),q(Ss.$$.fragment,s),Bt=g(s),Es=i(s,"H2",{class:!0});var Gt=p(Es);Ms=i(Gt,"A",{id:!0,class:!0,href:!0});var qa=p(Ms);qt=i(qa,"SPAN",{});var ya=p(qt);q(Ks.$$.fragment,ya),ya.forEach(e),qa.forEach(e),Re=g(Gt),yt=i(Gt,"SPAN",{});var Ea=p(yt);Ue=r(Ea,"Train"),Ea.forEach(e),Gt.forEach(e),Nt=g(s),q(Ls.$$.fragment,s),Rt=g(s),q(Os.$$.fragment,s),this.h()},h(){w(a,"name","hf:doc:metadata"),w(a,"content",JSON.stringify(Ga)),w(d,"id","question-answering"),w(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(d,"href","#question-answering"),w(n,"class","relative group"),w(R,"href","https://huggingface.co/distilbert-base-uncased"),w(R,"rel","nofollow"),w(Z,"href","https://huggingface.co/datasets/squad"),w(Z,"rel","nofollow"),w(m,"id","load-squad-dataset"),w(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(m,"href","#load-squad-dataset"),w(Q,"class","relative group"),w($s,"id","preprocess"),w($s,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w($s,"href","#preprocess"),w(rs,"class","relative group"),w(Vs,"href","https://huggingface.co/docs/tokenizers/python/latest/api/reference.html#tokenizers.Encoding.sequence_ids"),w(Vs,"rel","nofollow"),w(Js,"href","https://huggingface.co/docs/datasets/package_reference/main_classes.html#datasets.Dataset.map"),w(Js,"rel","nofollow"),w(et,"href","/docs/transformers/v4.19.2/en/main_classes/data_collator#transformers.DefaultDataCollator"),w(Ms,"id","train"),w(Ms,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(Ms,"href","#train"),w(Es,"class","relative group")},m(s,h){t(document.head,a),f(s,u,h),f(s,n,h),t(n,d),t(d,j),y($,j,null),t(n,x),t(n,z),t(z,C),f(s,k,h),y(S,s,h),f(s,N,h),f(s,X,h),t(X,M),f(s,V,h),f(s,L,h),t(L,Y),t(Y,ts),t(L,ms),t(L,es),t(es,I),f(s,is,h),f(s,P,h),t(P,ds),t(P,R),t(R,_s),t(P,ss),t(P,Z),t(Z,U),t(P,fs),f(s,J,h),y(G,s,h),f(s,O,h),f(s,Q,h),t(Q,m),t(m,D),y(H,D,null),t(Q,as),t(Q,K),t(K,W),f(s,gs,h),f(s,B,h),t(B,hs),f(s,ps,h),y(ns,s,h),f(s,qs,h),f(s,os,h),t(os,As),f(s,c,h),y(v,s,h),f(s,vs,h),f(s,cs,h),t(cs,Xs),t(cs,Ts),t(Ts,Zs),t(cs,Ds),t(cs,zs),t(zs,Cs),t(cs,st),f(s,Ns,h),f(s,rs,h),t(rs,$s),t($s,Ps),y(Rs,Ps,null),t(rs,Zt),t(rs,pt),t(pt,se),f(s,Dt,h),y(Us,s,h),f(s,zt,h),f(s,xs,h),t(xs,te),t(xs,ct),t(ct,ee),t(xs,ae),t(xs,ft),t(ft,ne),t(xs,oe),f(s,Ct,h),y(Hs,s,h),f(s,Pt,h),f(s,tt,h),t(tt,re),f(s,Ft,h),f(s,ks,h),t(ks,ws),t(ws,le),t(ws,ht),t(ht,ie),t(ws,pe),t(ws,ut),t(ut,ce),t(ws,fe),t(ws,mt),t(mt,he),t(ws,ue),t(ks,me),t(ks,ys),t(ys,de),t(ys,dt),t(dt,_e),t(ys,ge),t(ys,_t),t(_t,$e),t(ys,we),t(ks,je),t(ks,js),t(js,ve),t(js,Vs),t(Vs,gt),t(gt,xe),t(js,ke),t(js,$t),t($t,be),t(js,qe),t(js,wt),t(wt,ye),t(js,Ee),f(s,St,h),f(s,Fs,h),t(Fs,Ae),t(Fs,jt),t(jt,Te),t(Fs,De),f(s,Mt,h),y(Ys,s,h),f(s,Lt,h),f(s,us,h),t(us,ze),t(us,Js),t(Js,vt),t(vt,Ce),t(us,Pe),t(us,xt),t(xt,Fe),t(us,Se),t(us,kt),t(kt,Me),t(us,Le),f(s,Ot,h),y(Gs,s,h),f(s,Qt,h),f(s,bs,h),t(bs,Oe),t(bs,et),t(et,Qe),t(bs,Ie),t(bs,bt),t(bt,Be),t(bs,Ne),f(s,It,h),y(Ss,s,h),f(s,Bt,h),f(s,Es,h),t(Es,Ms),t(Ms,qt),y(Ks,qt,null),t(Es,Re),t(Es,yt),t(yt,Ue),f(s,Nt,h),y(Ls,s,h),f(s,Rt,h),y(Os,s,h),Ut=!0},p(s,[h]){const Ws={};h&2&&(Ws.$$scope={dirty:h,ctx:s}),G.$set(Ws);const Et={};h&2&&(Et.$$scope={dirty:h,ctx:s}),Ss.$set(Et);const At={};h&2&&(At.$$scope={dirty:h,ctx:s}),Ls.$set(At);const Tt={};h&2&&(Tt.$$scope={dirty:h,ctx:s}),Os.$set(Tt)},i(s){Ut||(E($.$$.fragment,s),E(S.$$.fragment,s),E(G.$$.fragment,s),E(H.$$.fragment,s),E(ns.$$.fragment,s),E(v.$$.fragment,s),E(Rs.$$.fragment,s),E(Us.$$.fragment,s),E(Hs.$$.fragment,s),E(Ys.$$.fragment,s),E(Gs.$$.fragment,s),E(Ss.$$.fragment,s),E(Ks.$$.fragment,s),E(Ls.$$.fragment,s),E(Os.$$.fragment,s),Ut=!0)},o(s){A($.$$.fragment,s),A(S.$$.fragment,s),A(G.$$.fragment,s),A(H.$$.fragment,s),A(ns.$$.fragment,s),A(v.$$.fragment,s),A(Rs.$$.fragment,s),A(Us.$$.fragment,s),A(Hs.$$.fragment,s),A(Ys.$$.fragment,s),A(Gs.$$.fragment,s),A(Ss.$$.fragment,s),A(Ks.$$.fragment,s),A(Ls.$$.fragment,s),A(Os.$$.fragment,s),Ut=!1},d(s){e(a),s&&e(u),s&&e(n),T($),s&&e(k),T(S,s),s&&e(N),s&&e(X),s&&e(V),s&&e(L),s&&e(is),s&&e(P),s&&e(J),T(G,s),s&&e(O),s&&e(Q),T(H),s&&e(gs),s&&e(B),s&&e(ps),T(ns,s),s&&e(qs),s&&e(os),s&&e(c),T(v,s),s&&e(vs),s&&e(cs),s&&e(Ns),s&&e(rs),T(Rs),s&&e(Dt),T(Us,s),s&&e(zt),s&&e(xs),s&&e(Ct),T(Hs,s),s&&e(Pt),s&&e(tt),s&&e(Ft),s&&e(ks),s&&e(St),s&&e(Fs),s&&e(Mt),T(Ys,s),s&&e(Lt),s&&e(us),s&&e(Ot),T(Gs,s),s&&e(Qt),s&&e(bs),s&&e(It),T(Ss,s),s&&e(Bt),s&&e(Es),T(Ks),s&&e(Nt),T(Ls,s),s&&e(Rt),T(Os,s)}}}const Ga={local:"question-answering",sections:[{local:"load-squad-dataset",title:"Load SQuAD dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Question answering"};function Ka(F){return Sa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class an extends za{constructor(a){super();Ca(this,a,Ka,Ja,Pa,{})}}export{an as default,Ga as metadata};
