import{S as Ta,i as Da,s as za,e as i,k as _,w as q,t as r,M as Ca,c as p,d as s,m as g,a as f,x as y,h as o,b as w,G as t,g as c,y as E,q as A,o as T,B as D,v as Pa,L as Aa}from"../../chunks/vendor-hf-doc-builder.js";import{T as Gt}from"../../chunks/Tip-hf-doc-builder.js";import{Y as ya}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Yt}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ne}from"../../chunks/CodeBlock-hf-doc-builder.js";import{F as Ea,M as Jt}from"../../chunks/Markdown-hf-doc-builder.js";function Fa(F){let a,u,n,d,j;return{c(){a=i("p"),u=r("See the question answering "),n=i("a"),d=r("task page"),j=r(" for more information about other forms of question answering and their associated models, datasets, and metrics."),this.h()},l($){a=p($,"P",{});var v=f(a);u=o(v,"See the question answering "),n=p(v,"A",{href:!0,rel:!0});var C=f(n);d=o(C,"task page"),C.forEach(s),j=o(v," for more information about other forms of question answering and their associated models, datasets, and metrics."),v.forEach(s),this.h()},h(){w(n,"href","https://huggingface.co/tasks/question-answering"),w(n,"rel","nofollow")},m($,v){c($,a,v),t(a,u),t(a,n),t(n,d),t(a,j)},d($){$&&s(a)}}}function Ma(F){let a,u;return a=new ne({props:{code:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DefaultDataCollator()`}}),{c(){q(a.$$.fragment)},l(n){y(a.$$.fragment,n)},m(n,d){E(a,n,d),u=!0},p:Aa,i(n){u||(A(a.$$.fragment,n),u=!0)},o(n){T(a.$$.fragment,n),u=!1},d(n){D(a,n)}}}function Sa(F){let a,u;return a=new Jt({props:{$$slots:{default:[Ma]},$$scope:{ctx:F}}}),{c(){q(a.$$.fragment)},l(n){y(a.$$.fragment,n)},m(n,d){E(a,n,d),u=!0},p(n,d){const j={};d&2&&(j.$$scope={dirty:d,ctx:n}),a.$set(j)},i(n){u||(A(a.$$.fragment,n),u=!0)},o(n){T(a.$$.fragment,n),u=!1},d(n){D(a,n)}}}function La(F){let a,u;return a=new ne({props:{code:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator(return_tensors="tf")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DefaultDataCollator(return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),{c(){q(a.$$.fragment)},l(n){y(a.$$.fragment,n)},m(n,d){E(a,n,d),u=!0},p:Aa,i(n){u||(A(a.$$.fragment,n),u=!0)},o(n){T(a.$$.fragment,n),u=!1},d(n){D(a,n)}}}function Qa(F){let a,u;return a=new Jt({props:{$$slots:{default:[La]},$$scope:{ctx:F}}}),{c(){q(a.$$.fragment)},l(n){y(a.$$.fragment,n)},m(n,d){E(a,n,d),u=!0},p(n,d){const j={};d&2&&(j.$$scope={dirty:d,ctx:n}),a.$set(j)},i(n){u||(A(a.$$.fragment,n),u=!0)},o(n){T(a.$$.fragment,n),u=!1},d(n){D(a,n)}}}function Oa(F){let a,u,n,d,j,$,v,C;return{c(){a=i("p"),u=r("If you aren\u2019t familiar with fine-tuning a model with the "),n=i("a"),d=r("Trainer"),j=r(", take a look at the basic tutorial "),$=i("a"),v=r("here"),C=r("!"),this.h()},l(z){a=p(z,"P",{});var k=f(a);u=o(k,"If you aren\u2019t familiar with fine-tuning a model with the "),n=p(k,"A",{href:!0});var P=f(n);d=o(P,"Trainer"),P.forEach(s),j=o(k,", take a look at the basic tutorial "),$=p(k,"A",{href:!0});var M=f($);v=o(M,"here"),M.forEach(s),C=o(k,"!"),k.forEach(s),this.h()},h(){w(n,"href","/docs/transformers/v4.22.1/en/main_classes/trainer#transformers.Trainer"),w($,"href","../training#finetune-with-trainer")},m(z,k){c(z,a,k),t(a,u),t(a,n),t(n,d),t(a,j),t(a,$),t($,v),t(a,C)},d(z){z&&s(a)}}}function Ia(F){let a,u,n,d,j,$,v,C,z,k,P,M,J,L,K,H,O,le,W,re,N,ie,Q,pe,B,fe,I,Z,R,oe,ce,V,Y,S;return v=new ne({props:{code:`from transformers import AutoModelForQuestionAnswering, TrainingArguments, Trainer

model = AutoModelForQuestionAnswering.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForQuestionAnswering, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),z=new Gt({props:{$$slots:{default:[Oa]},$$scope:{ctx:F}}}),Y=new ne({props:{code:`training_args = TrainingArguments(
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

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){a=i("p"),u=r("Load DistilBERT with "),n=i("a"),d=r("AutoModelForQuestionAnswering"),j=r(":"),$=_(),q(v.$$.fragment),C=_(),q(z.$$.fragment),k=_(),P=i("p"),M=r("At this point, only three steps remain:"),J=_(),L=i("ol"),K=i("li"),H=r("Define your training hyperparameters in "),O=i("a"),le=r("TrainingArguments"),W=r("."),re=_(),N=i("li"),ie=r("Pass the training arguments to "),Q=i("a"),pe=r("Trainer"),B=r(" along with the model, dataset, tokenizer, and data collator."),fe=_(),I=i("li"),Z=r("Call "),R=i("a"),oe=r("train()"),ce=r(" to fine-tune your model."),V=_(),q(Y.$$.fragment),this.h()},l(m){a=p(m,"P",{});var b=f(a);u=o(b,"Load DistilBERT with "),n=p(b,"A",{href:!0});var G=f(n);d=o(G,"AutoModelForQuestionAnswering"),G.forEach(s),j=o(b,":"),b.forEach(s),$=g(m),y(v.$$.fragment,m),C=g(m),y(z.$$.fragment,m),k=g(m),P=p(m,"P",{});var te=f(P);M=o(te,"At this point, only three steps remain:"),te.forEach(s),J=g(m),L=p(m,"OL",{});var U=f(L);K=p(U,"LI",{});var he=f(K);H=o(he,"Define your training hyperparameters in "),O=p(he,"A",{href:!0});var _e=f(O);le=o(_e,"TrainingArguments"),_e.forEach(s),W=o(he,"."),he.forEach(s),re=g(U),N=p(U,"LI",{});var X=f(N);ie=o(X,"Pass the training arguments to "),Q=p(X,"A",{href:!0});var se=f(Q);pe=o(se,"Trainer"),se.forEach(s),B=o(X," along with the model, dataset, tokenizer, and data collator."),X.forEach(s),fe=g(U),I=p(U,"LI",{});var ae=f(I);Z=o(ae,"Call "),R=p(ae,"A",{href:!0});var l=f(R);oe=o(l,"train()"),l.forEach(s),ce=o(ae," to fine-tune your model."),ae.forEach(s),U.forEach(s),V=g(m),y(Y.$$.fragment,m),this.h()},h(){w(n,"href","/docs/transformers/v4.22.1/en/model_doc/auto#transformers.AutoModelForQuestionAnswering"),w(O,"href","/docs/transformers/v4.22.1/en/main_classes/trainer#transformers.TrainingArguments"),w(Q,"href","/docs/transformers/v4.22.1/en/main_classes/trainer#transformers.Trainer"),w(R,"href","/docs/transformers/v4.22.1/en/main_classes/trainer#transformers.Trainer.train")},m(m,b){c(m,a,b),t(a,u),t(a,n),t(n,d),t(a,j),c(m,$,b),E(v,m,b),c(m,C,b),E(z,m,b),c(m,k,b),c(m,P,b),t(P,M),c(m,J,b),c(m,L,b),t(L,K),t(K,H),t(K,O),t(O,le),t(K,W),t(L,re),t(L,N),t(N,ie),t(N,Q),t(Q,pe),t(N,B),t(L,fe),t(L,I),t(I,Z),t(I,R),t(R,oe),t(I,ce),c(m,V,b),E(Y,m,b),S=!0},p(m,b){const G={};b&2&&(G.$$scope={dirty:b,ctx:m}),z.$set(G)},i(m){S||(A(v.$$.fragment,m),A(z.$$.fragment,m),A(Y.$$.fragment,m),S=!0)},o(m){T(v.$$.fragment,m),T(z.$$.fragment,m),T(Y.$$.fragment,m),S=!1},d(m){m&&s(a),m&&s($),D(v,m),m&&s(C),D(z,m),m&&s(k),m&&s(P),m&&s(J),m&&s(L),m&&s(V),D(Y,m)}}}function Ba(F){let a,u;return a=new Jt({props:{$$slots:{default:[Ia]},$$scope:{ctx:F}}}),{c(){q(a.$$.fragment)},l(n){y(a.$$.fragment,n)},m(n,d){E(a,n,d),u=!0},p(n,d){const j={};d&2&&(j.$$scope={dirty:d,ctx:n}),a.$set(j)},i(n){u||(A(a.$$.fragment,n),u=!0)},o(n){T(a.$$.fragment,n),u=!1},d(n){D(a,n)}}}function Na(F){let a,u,n,d,j;return{c(){a=i("p"),u=r("If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),n=i("a"),d=r("here"),j=r("!"),this.h()},l($){a=p($,"P",{});var v=f(a);u=o(v,"If you aren\u2019t familiar with fine-tuning a model with Keras, take a look at the basic tutorial "),n=p(v,"A",{href:!0});var C=f(n);d=o(C,"here"),C.forEach(s),j=o(v,"!"),v.forEach(s),this.h()},h(){w(n,"href","training#finetune-with-keras")},m($,v){c($,a,v),t(a,u),t(a,n),t(n,d),t(a,j)},d($){$&&s(a)}}}function Ra(F){let a,u,n,d,j,$,v,C,z,k,P,M,J,L,K,H,O,le,W,re,N,ie,Q,pe,B,fe,I,Z,R,oe,ce,V,Y,S,m,b,G,te,U,he,_e,X,se,ae;return k=new ne({props:{code:`tf_train_set = model.prepare_tf_dataset(
    tokenized_squad["train"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_set = model.prepare_tf_dataset(
    tokenized_squad["validation"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>tf_train_set = model.prepare_tf_dataset(
<span class="hljs-meta">... </span>    tokenized_squad[<span class="hljs-string">&quot;train&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>tf_validation_set = model.prepare_tf_dataset(
<span class="hljs-meta">... </span>    tokenized_squad[<span class="hljs-string">&quot;validation&quot;</span>],
<span class="hljs-meta">... </span>    shuffle=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    batch_size=<span class="hljs-number">16</span>,
<span class="hljs-meta">... </span>    collate_fn=data_collator,
<span class="hljs-meta">... </span>)`}}),M=new Gt({props:{$$slots:{default:[Na]},$$scope:{ctx:F}}}),O=new ne({props:{code:`from transformers import create_optimizer

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
<span class="hljs-meta">... </span>)`}}),B=new ne({props:{code:`from transformers import TFAutoModelForQuestionAnswering

model = TFAutoModelForQuestionAnswering("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForQuestionAnswering(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),S=new ne({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),se=new ne({props:{code:"model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=3)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=<span class="hljs-number">3</span>)'}}),{c(){a=i("p"),u=r("To fine-tune a model in TensorFlow, start by converting your datasets to the "),n=i("code"),d=r("tf.data.Dataset"),j=r(" format with "),$=i("a"),v=r("prepare_tf_dataset()"),C=r("."),z=_(),q(k.$$.fragment),P=_(),q(M.$$.fragment),J=_(),L=i("p"),K=r("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),H=_(),q(O.$$.fragment),le=_(),W=i("p"),re=r("Load DistilBERT with "),N=i("a"),ie=r("TFAutoModelForQuestionAnswering"),Q=r(":"),pe=_(),q(B.$$.fragment),fe=_(),I=i("p"),Z=r("Configure the model for training with "),R=i("a"),oe=i("code"),ce=r("compile"),V=r(":"),Y=_(),q(S.$$.fragment),m=_(),b=i("p"),G=r("Call "),te=i("a"),U=i("code"),he=r("fit"),_e=r(" to fine-tune the model:"),X=_(),q(se.$$.fragment),this.h()},l(l){a=p(l,"P",{});var x=f(a);u=o(x,"To fine-tune a model in TensorFlow, start by converting your datasets to the "),n=p(x,"CODE",{});var me=f(n);d=o(me,"tf.data.Dataset"),me.forEach(s),j=o(x," format with "),$=p(x,"A",{href:!0});var Ge=f($);v=o(Ge,"prepare_tf_dataset()"),Ge.forEach(s),C=o(x,"."),x.forEach(s),z=g(l),y(k.$$.fragment,l),P=g(l),y(M.$$.fragment,l),J=g(l),L=p(l,"P",{});var Le=f(L);K=o(Le,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Le.forEach(s),H=g(l),y(O.$$.fragment,l),le=g(l),W=p(l,"P",{});var ue=f(W);re=o(ue,"Load DistilBERT with "),N=p(ue,"A",{href:!0});var Qe=f(N);ie=o(Qe,"TFAutoModelForQuestionAnswering"),Qe.forEach(s),Q=o(ue,":"),ue.forEach(s),pe=g(l),y(B.$$.fragment,l),fe=g(l),I=p(l,"P",{});var ee=f(I);Z=o(ee,"Configure the model for training with "),R=p(ee,"A",{href:!0,rel:!0});var Je=f(R);oe=p(Je,"CODE",{});var qe=f(oe);ce=o(qe,"compile"),qe.forEach(s),Je.forEach(s),V=o(ee,":"),ee.forEach(s),Y=g(l),y(S.$$.fragment,l),m=g(l),b=p(l,"P",{});var ye=f(b);G=o(ye,"Call "),te=p(ye,"A",{href:!0,rel:!0});var Ke=f(te);U=p(Ke,"CODE",{});var Ee=f(U);he=o(Ee,"fit"),Ee.forEach(s),Ke.forEach(s),_e=o(ye," to fine-tune the model:"),ye.forEach(s),X=g(l),y(se.$$.fragment,l),this.h()},h(){w($,"href","/docs/transformers/v4.22.1/en/main_classes/model#transformers.TFPreTrainedModel.prepare_tf_dataset"),w(N,"href","/docs/transformers/v4.22.1/en/model_doc/auto#transformers.TFAutoModelForQuestionAnswering"),w(R,"href","https://keras.io/api/models/model_training_apis/#compile-method"),w(R,"rel","nofollow"),w(te,"href","https://keras.io/api/models/model_training_apis/#fit-method"),w(te,"rel","nofollow")},m(l,x){c(l,a,x),t(a,u),t(a,n),t(n,d),t(a,j),t(a,$),t($,v),t(a,C),c(l,z,x),E(k,l,x),c(l,P,x),E(M,l,x),c(l,J,x),c(l,L,x),t(L,K),c(l,H,x),E(O,l,x),c(l,le,x),c(l,W,x),t(W,re),t(W,N),t(N,ie),t(W,Q),c(l,pe,x),E(B,l,x),c(l,fe,x),c(l,I,x),t(I,Z),t(I,R),t(R,oe),t(oe,ce),t(I,V),c(l,Y,x),E(S,l,x),c(l,m,x),c(l,b,x),t(b,G),t(b,te),t(te,U),t(U,he),t(b,_e),c(l,X,x),E(se,l,x),ae=!0},p(l,x){const me={};x&2&&(me.$$scope={dirty:x,ctx:l}),M.$set(me)},i(l){ae||(A(k.$$.fragment,l),A(M.$$.fragment,l),A(O.$$.fragment,l),A(B.$$.fragment,l),A(S.$$.fragment,l),A(se.$$.fragment,l),ae=!0)},o(l){T(k.$$.fragment,l),T(M.$$.fragment,l),T(O.$$.fragment,l),T(B.$$.fragment,l),T(S.$$.fragment,l),T(se.$$.fragment,l),ae=!1},d(l){l&&s(a),l&&s(z),D(k,l),l&&s(P),D(M,l),l&&s(J),l&&s(L),l&&s(H),D(O,l),l&&s(le),l&&s(W),l&&s(pe),D(B,l),l&&s(fe),l&&s(I),l&&s(Y),D(S,l),l&&s(m),l&&s(b),l&&s(X),D(se,l)}}}function Ua(F){let a,u;return a=new Jt({props:{$$slots:{default:[Ra]},$$scope:{ctx:F}}}),{c(){q(a.$$.fragment)},l(n){y(a.$$.fragment,n)},m(n,d){E(a,n,d),u=!0},p(n,d){const j={};d&2&&(j.$$scope={dirty:d,ctx:n}),a.$set(j)},i(n){u||(A(a.$$.fragment,n),u=!0)},o(n){T(a.$$.fragment,n),u=!1},d(n){D(a,n)}}}function Ha(F){let a,u,n,d,j,$,v,C;return{c(){a=i("p"),u=r(`For a more in-depth example of how to fine-tune a model for question answering, take a look at the corresponding
`),n=i("a"),d=r("PyTorch notebook"),j=r(`
or `),$=i("a"),v=r("TensorFlow notebook"),C=r("."),this.h()},l(z){a=p(z,"P",{});var k=f(a);u=o(k,`For a more in-depth example of how to fine-tune a model for question answering, take a look at the corresponding
`),n=p(k,"A",{href:!0,rel:!0});var P=f(n);d=o(P,"PyTorch notebook"),P.forEach(s),j=o(k,`
or `),$=p(k,"A",{href:!0,rel:!0});var M=f($);v=o(M,"TensorFlow notebook"),M.forEach(s),C=o(k,"."),k.forEach(s),this.h()},h(){w(n,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering.ipynb"),w(n,"rel","nofollow"),w($,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering-tf.ipynb"),w($,"rel","nofollow")},m(z,k){c(z,a,k),t(a,u),t(a,n),t(n,d),t(a,j),t(a,$),t($,v),t(a,C)},d(z){z&&s(a)}}}function Va(F){let a,u,n,d,j,$,v,C,z,k,P,M,J,L,K,H,O,le,W,re,N,ie,Q,pe,B,fe,I,Z,R,oe,ce,V,Y,S,m,b,G,te,U,he,_e,X,se,ae,l,x,me,Ge,Le,ue,Qe,ee,Je,qe,ye,Ke,Ee,Kt,Wt,yt,xe,Ae,rt,Oe,Xt,ot,Zt,Et,Ie,At,we,es,lt,ts,ss,it,as,ns,Tt,Be,Dt,We,rs,zt,je,ge,os,pt,ls,is,ft,ps,fs,ct,cs,hs,ms,ke,us,ht,ds,_s,mt,gs,$s,ws,$e,js,Ne,ut,vs,xs,dt,ks,bs,_t,qs,ys,Ct,Te,Es,gt,As,Ts,Pt,Re,Ft,de,Ds,Ue,zs,Cs,$t,Ps,Fs,wt,Ms,Ss,Mt,He,St,ve,Ls,Xe,Qs,Os,jt,Is,Bs,Lt,De,Qt,be,ze,vt,Ve,Ns,xt,Rs,Ot,Ce,It,Pe,Bt;return $=new Yt({}),P=new ya({props:{id:"ajPx5LwJD-I"}}),V=new Gt({props:{$$slots:{default:[Fa]},$$scope:{ctx:F}}}),G=new Yt({}),l=new ne({props:{code:`from datasets import load_dataset

squad = load_dataset("squad")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&quot;squad&quot;</span>)`}}),ue=new ne({props:{code:'squad["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>squad[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;answers&#x27;</span>: {<span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">515</span>], <span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Saint Bernadette Soubirous&#x27;</span>]},
 <span class="hljs-string">&#x27;context&#x27;</span>: <span class="hljs-string">&#x27;Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot;Venite Ad Me Omnes&quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.&#x27;</span>,
 <span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;5733be284776f41900661182&#x27;</span>,
 <span class="hljs-string">&#x27;question&#x27;</span>: <span class="hljs-string">&#x27;To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?&#x27;</span>,
 <span class="hljs-string">&#x27;title&#x27;</span>: <span class="hljs-string">&#x27;University_of_Notre_Dame&#x27;</span>
}`}}),Oe=new Yt({}),Ie=new ya({props:{id:"qgaM0weJHpA"}}),Be=new ne({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),Re=new ne({props:{code:`def preprocess_function(examples):
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
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> inputs`}}),He=new ne({props:{code:'tokenized_squad = squad.map(preprocess_function, batched=True, remove_columns=squad["train"].column_names)',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_squad = squad.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>, remove_columns=squad[<span class="hljs-string">&quot;train&quot;</span>].column_names)'}}),De=new Ea({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Qa],pytorch:[Sa]},$$scope:{ctx:F}}}),Ve=new Yt({}),Ce=new Ea({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Ua],pytorch:[Ba]},$$scope:{ctx:F}}}),Pe=new Gt({props:{$$slots:{default:[Ha]},$$scope:{ctx:F}}}),{c(){a=i("meta"),u=_(),n=i("h1"),d=i("a"),j=i("span"),q($.$$.fragment),v=_(),C=i("span"),z=r("Question answering"),k=_(),q(P.$$.fragment),M=_(),J=i("p"),L=r("Question answering tasks return an answer given a question. There are two common forms of question answering:"),K=_(),H=i("ul"),O=i("li"),le=r("Extractive: extract the answer from the given context."),W=_(),re=i("li"),N=r("Abstractive: generate an answer from the context that correctly answers the question."),ie=_(),Q=i("p"),pe=r("This guide will show you how to fine-tune "),B=i("a"),fe=r("DistilBERT"),I=r(" on the "),Z=i("a"),R=r("SQuAD"),oe=r(" dataset for extractive question answering."),ce=_(),q(V.$$.fragment),Y=_(),S=i("h2"),m=i("a"),b=i("span"),q(G.$$.fragment),te=_(),U=i("span"),he=r("Load SQuAD dataset"),_e=_(),X=i("p"),se=r("Load the SQuAD dataset from the \u{1F917} Datasets library:"),ae=_(),q(l.$$.fragment),x=_(),me=i("p"),Ge=r("Then take a look at an example:"),Le=_(),q(ue.$$.fragment),Qe=_(),ee=i("p"),Je=r("The "),qe=i("code"),ye=r("answers"),Ke=r(" field is a dictionary containing the starting position of the answer and the "),Ee=i("code"),Kt=r("text"),Wt=r(" of the answer."),yt=_(),xe=i("h2"),Ae=i("a"),rt=i("span"),q(Oe.$$.fragment),Xt=_(),ot=i("span"),Zt=r("Preprocess"),Et=_(),q(Ie.$$.fragment),At=_(),we=i("p"),es=r("Load the DistilBERT tokenizer to process the "),lt=i("code"),ts=r("question"),ss=r(" and "),it=i("code"),as=r("context"),ns=r(" fields:"),Tt=_(),q(Be.$$.fragment),Dt=_(),We=i("p"),rs=r("There are a few preprocessing steps particular to question answering that you should be aware of:"),zt=_(),je=i("ol"),ge=i("li"),os=r("Some examples in a dataset may have a very long "),pt=i("code"),ls=r("context"),is=r(" that exceeds the maximum input length of the model. Truncate only the "),ft=i("code"),ps=r("context"),fs=r(" by setting "),ct=i("code"),cs=r('truncation="only_second"'),hs=r("."),ms=_(),ke=i("li"),us=r("Next, map the start and end positions of the answer to the original "),ht=i("code"),ds=r("context"),_s=r(` by setting
`),mt=i("code"),gs=r("return_offset_mapping=True"),$s=r("."),ws=_(),$e=i("li"),js=r("With the mapping in hand, you can find the start and end tokens of the answer. Use the "),Ne=i("a"),ut=i("code"),vs=r("sequence_ids"),xs=r(` method to
find which part of the offset corresponds to the `),dt=i("code"),ks=r("question"),bs=r(" and which corresponds to the "),_t=i("code"),qs=r("context"),ys=r("."),Ct=_(),Te=i("p"),Es=r("Here is how you can create a function to truncate and map the start and end tokens of the answer to the "),gt=i("code"),As=r("context"),Ts=r(":"),Pt=_(),q(Re.$$.fragment),Ft=_(),de=i("p"),Ds=r("Use \u{1F917} Datasets "),Ue=i("a"),zs=r("map"),Cs=r(" function to apply the preprocessing function over the entire dataset. You can speed up the "),$t=i("code"),Ps=r("map"),Fs=r(" function by setting "),wt=i("code"),Ms=r("batched=True"),Ss=r(" to process multiple elements of the dataset at once. Remove the columns you don\u2019t need:"),Mt=_(),q(He.$$.fragment),St=_(),ve=i("p"),Ls=r("Use "),Xe=i("a"),Qs=r("DefaultDataCollator"),Os=r(" to create a batch of examples. Unlike other data collators in \u{1F917} Transformers, the "),jt=i("code"),Is=r("DefaultDataCollator"),Bs=r(" does not apply additional preprocessing such as padding."),Lt=_(),q(De.$$.fragment),Qt=_(),be=i("h2"),ze=i("a"),vt=i("span"),q(Ve.$$.fragment),Ns=_(),xt=i("span"),Rs=r("Train"),Ot=_(),q(Ce.$$.fragment),It=_(),q(Pe.$$.fragment),this.h()},l(e){const h=Ca('[data-svelte="svelte-1phssyn"]',document.head);a=p(h,"META",{name:!0,content:!0}),h.forEach(s),u=g(e),n=p(e,"H1",{class:!0});var Ye=f(n);d=p(Ye,"A",{id:!0,class:!0,href:!0});var kt=f(d);j=p(kt,"SPAN",{});var bt=f(j);y($.$$.fragment,bt),bt.forEach(s),kt.forEach(s),v=g(Ye),C=p(Ye,"SPAN",{});var qt=f(C);z=o(qt,"Question answering"),qt.forEach(s),Ye.forEach(s),k=g(e),y(P.$$.fragment,e),M=g(e),J=p(e,"P",{});var Us=f(J);L=o(Us,"Question answering tasks return an answer given a question. There are two common forms of question answering:"),Us.forEach(s),K=g(e),H=p(e,"UL",{});var Nt=f(H);O=p(Nt,"LI",{});var Hs=f(O);le=o(Hs,"Extractive: extract the answer from the given context."),Hs.forEach(s),W=g(Nt),re=p(Nt,"LI",{});var Vs=f(re);N=o(Vs,"Abstractive: generate an answer from the context that correctly answers the question."),Vs.forEach(s),Nt.forEach(s),ie=g(e),Q=p(e,"P",{});var Ze=f(Q);pe=o(Ze,"This guide will show you how to fine-tune "),B=p(Ze,"A",{href:!0,rel:!0});var Ys=f(B);fe=o(Ys,"DistilBERT"),Ys.forEach(s),I=o(Ze," on the "),Z=p(Ze,"A",{href:!0,rel:!0});var Gs=f(Z);R=o(Gs,"SQuAD"),Gs.forEach(s),oe=o(Ze," dataset for extractive question answering."),Ze.forEach(s),ce=g(e),y(V.$$.fragment,e),Y=g(e),S=p(e,"H2",{class:!0});var Rt=f(S);m=p(Rt,"A",{id:!0,class:!0,href:!0});var Js=f(m);b=p(Js,"SPAN",{});var Ks=f(b);y(G.$$.fragment,Ks),Ks.forEach(s),Js.forEach(s),te=g(Rt),U=p(Rt,"SPAN",{});var Ws=f(U);he=o(Ws,"Load SQuAD dataset"),Ws.forEach(s),Rt.forEach(s),_e=g(e),X=p(e,"P",{});var Xs=f(X);se=o(Xs,"Load the SQuAD dataset from the \u{1F917} Datasets library:"),Xs.forEach(s),ae=g(e),y(l.$$.fragment,e),x=g(e),me=p(e,"P",{});var Zs=f(me);Ge=o(Zs,"Then take a look at an example:"),Zs.forEach(s),Le=g(e),y(ue.$$.fragment,e),Qe=g(e),ee=p(e,"P",{});var et=f(ee);Je=o(et,"The "),qe=p(et,"CODE",{});var ea=f(qe);ye=o(ea,"answers"),ea.forEach(s),Ke=o(et," field is a dictionary containing the starting position of the answer and the "),Ee=p(et,"CODE",{});var ta=f(Ee);Kt=o(ta,"text"),ta.forEach(s),Wt=o(et," of the answer."),et.forEach(s),yt=g(e),xe=p(e,"H2",{class:!0});var Ut=f(xe);Ae=p(Ut,"A",{id:!0,class:!0,href:!0});var sa=f(Ae);rt=p(sa,"SPAN",{});var aa=f(rt);y(Oe.$$.fragment,aa),aa.forEach(s),sa.forEach(s),Xt=g(Ut),ot=p(Ut,"SPAN",{});var na=f(ot);Zt=o(na,"Preprocess"),na.forEach(s),Ut.forEach(s),Et=g(e),y(Ie.$$.fragment,e),At=g(e),we=p(e,"P",{});var tt=f(we);es=o(tt,"Load the DistilBERT tokenizer to process the "),lt=p(tt,"CODE",{});var ra=f(lt);ts=o(ra,"question"),ra.forEach(s),ss=o(tt," and "),it=p(tt,"CODE",{});var oa=f(it);as=o(oa,"context"),oa.forEach(s),ns=o(tt," fields:"),tt.forEach(s),Tt=g(e),y(Be.$$.fragment,e),Dt=g(e),We=p(e,"P",{});var la=f(We);rs=o(la,"There are a few preprocessing steps particular to question answering that you should be aware of:"),la.forEach(s),zt=g(e),je=p(e,"OL",{});var st=f(je);ge=p(st,"LI",{});var Fe=f(ge);os=o(Fe,"Some examples in a dataset may have a very long "),pt=p(Fe,"CODE",{});var ia=f(pt);ls=o(ia,"context"),ia.forEach(s),is=o(Fe," that exceeds the maximum input length of the model. Truncate only the "),ft=p(Fe,"CODE",{});var pa=f(ft);ps=o(pa,"context"),pa.forEach(s),fs=o(Fe," by setting "),ct=p(Fe,"CODE",{});var fa=f(ct);cs=o(fa,'truncation="only_second"'),fa.forEach(s),hs=o(Fe,"."),Fe.forEach(s),ms=g(st),ke=p(st,"LI",{});var at=f(ke);us=o(at,"Next, map the start and end positions of the answer to the original "),ht=p(at,"CODE",{});var ca=f(ht);ds=o(ca,"context"),ca.forEach(s),_s=o(at,` by setting
`),mt=p(at,"CODE",{});var ha=f(mt);gs=o(ha,"return_offset_mapping=True"),ha.forEach(s),$s=o(at,"."),at.forEach(s),ws=g(st),$e=p(st,"LI",{});var Me=f($e);js=o(Me,"With the mapping in hand, you can find the start and end tokens of the answer. Use the "),Ne=p(Me,"A",{href:!0,rel:!0});var ma=f(Ne);ut=p(ma,"CODE",{});var ua=f(ut);vs=o(ua,"sequence_ids"),ua.forEach(s),ma.forEach(s),xs=o(Me,` method to
find which part of the offset corresponds to the `),dt=p(Me,"CODE",{});var da=f(dt);ks=o(da,"question"),da.forEach(s),bs=o(Me," and which corresponds to the "),_t=p(Me,"CODE",{});var _a=f(_t);qs=o(_a,"context"),_a.forEach(s),ys=o(Me,"."),Me.forEach(s),st.forEach(s),Ct=g(e),Te=p(e,"P",{});var Ht=f(Te);Es=o(Ht,"Here is how you can create a function to truncate and map the start and end tokens of the answer to the "),gt=p(Ht,"CODE",{});var ga=f(gt);As=o(ga,"context"),ga.forEach(s),Ts=o(Ht,":"),Ht.forEach(s),Pt=g(e),y(Re.$$.fragment,e),Ft=g(e),de=p(e,"P",{});var Se=f(de);Ds=o(Se,"Use \u{1F917} Datasets "),Ue=p(Se,"A",{href:!0,rel:!0});var $a=f(Ue);zs=o($a,"map"),$a.forEach(s),Cs=o(Se," function to apply the preprocessing function over the entire dataset. You can speed up the "),$t=p(Se,"CODE",{});var wa=f($t);Ps=o(wa,"map"),wa.forEach(s),Fs=o(Se," function by setting "),wt=p(Se,"CODE",{});var ja=f(wt);Ms=o(ja,"batched=True"),ja.forEach(s),Ss=o(Se," to process multiple elements of the dataset at once. Remove the columns you don\u2019t need:"),Se.forEach(s),Mt=g(e),y(He.$$.fragment,e),St=g(e),ve=p(e,"P",{});var nt=f(ve);Ls=o(nt,"Use "),Xe=p(nt,"A",{href:!0});var va=f(Xe);Qs=o(va,"DefaultDataCollator"),va.forEach(s),Os=o(nt," to create a batch of examples. Unlike other data collators in \u{1F917} Transformers, the "),jt=p(nt,"CODE",{});var xa=f(jt);Is=o(xa,"DefaultDataCollator"),xa.forEach(s),Bs=o(nt," does not apply additional preprocessing such as padding."),nt.forEach(s),Lt=g(e),y(De.$$.fragment,e),Qt=g(e),be=p(e,"H2",{class:!0});var Vt=f(be);ze=p(Vt,"A",{id:!0,class:!0,href:!0});var ka=f(ze);vt=p(ka,"SPAN",{});var ba=f(vt);y(Ve.$$.fragment,ba),ba.forEach(s),ka.forEach(s),Ns=g(Vt),xt=p(Vt,"SPAN",{});var qa=f(xt);Rs=o(qa,"Train"),qa.forEach(s),Vt.forEach(s),Ot=g(e),y(Ce.$$.fragment,e),It=g(e),y(Pe.$$.fragment,e),this.h()},h(){w(a,"name","hf:doc:metadata"),w(a,"content",JSON.stringify(Ya)),w(d,"id","question-answering"),w(d,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(d,"href","#question-answering"),w(n,"class","relative group"),w(B,"href","https://huggingface.co/distilbert-base-uncased"),w(B,"rel","nofollow"),w(Z,"href","https://huggingface.co/datasets/squad"),w(Z,"rel","nofollow"),w(m,"id","load-squad-dataset"),w(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(m,"href","#load-squad-dataset"),w(S,"class","relative group"),w(Ae,"id","preprocess"),w(Ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(Ae,"href","#preprocess"),w(xe,"class","relative group"),w(Ne,"href","https://huggingface.co/docs/tokenizers/python/latest/api/reference.html#tokenizers.Encoding.sequence_ids"),w(Ne,"rel","nofollow"),w(Ue,"href","https://huggingface.co/docs/datasets/v2.5.1/en/package_reference/main_classes#datasets.Dataset.map"),w(Ue,"rel","nofollow"),w(Xe,"href","/docs/transformers/v4.22.1/en/main_classes/data_collator#transformers.DefaultDataCollator"),w(ze,"id","train"),w(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),w(ze,"href","#train"),w(be,"class","relative group")},m(e,h){t(document.head,a),c(e,u,h),c(e,n,h),t(n,d),t(d,j),E($,j,null),t(n,v),t(n,C),t(C,z),c(e,k,h),E(P,e,h),c(e,M,h),c(e,J,h),t(J,L),c(e,K,h),c(e,H,h),t(H,O),t(O,le),t(H,W),t(H,re),t(re,N),c(e,ie,h),c(e,Q,h),t(Q,pe),t(Q,B),t(B,fe),t(Q,I),t(Q,Z),t(Z,R),t(Q,oe),c(e,ce,h),E(V,e,h),c(e,Y,h),c(e,S,h),t(S,m),t(m,b),E(G,b,null),t(S,te),t(S,U),t(U,he),c(e,_e,h),c(e,X,h),t(X,se),c(e,ae,h),E(l,e,h),c(e,x,h),c(e,me,h),t(me,Ge),c(e,Le,h),E(ue,e,h),c(e,Qe,h),c(e,ee,h),t(ee,Je),t(ee,qe),t(qe,ye),t(ee,Ke),t(ee,Ee),t(Ee,Kt),t(ee,Wt),c(e,yt,h),c(e,xe,h),t(xe,Ae),t(Ae,rt),E(Oe,rt,null),t(xe,Xt),t(xe,ot),t(ot,Zt),c(e,Et,h),E(Ie,e,h),c(e,At,h),c(e,we,h),t(we,es),t(we,lt),t(lt,ts),t(we,ss),t(we,it),t(it,as),t(we,ns),c(e,Tt,h),E(Be,e,h),c(e,Dt,h),c(e,We,h),t(We,rs),c(e,zt,h),c(e,je,h),t(je,ge),t(ge,os),t(ge,pt),t(pt,ls),t(ge,is),t(ge,ft),t(ft,ps),t(ge,fs),t(ge,ct),t(ct,cs),t(ge,hs),t(je,ms),t(je,ke),t(ke,us),t(ke,ht),t(ht,ds),t(ke,_s),t(ke,mt),t(mt,gs),t(ke,$s),t(je,ws),t(je,$e),t($e,js),t($e,Ne),t(Ne,ut),t(ut,vs),t($e,xs),t($e,dt),t(dt,ks),t($e,bs),t($e,_t),t(_t,qs),t($e,ys),c(e,Ct,h),c(e,Te,h),t(Te,Es),t(Te,gt),t(gt,As),t(Te,Ts),c(e,Pt,h),E(Re,e,h),c(e,Ft,h),c(e,de,h),t(de,Ds),t(de,Ue),t(Ue,zs),t(de,Cs),t(de,$t),t($t,Ps),t(de,Fs),t(de,wt),t(wt,Ms),t(de,Ss),c(e,Mt,h),E(He,e,h),c(e,St,h),c(e,ve,h),t(ve,Ls),t(ve,Xe),t(Xe,Qs),t(ve,Os),t(ve,jt),t(jt,Is),t(ve,Bs),c(e,Lt,h),E(De,e,h),c(e,Qt,h),c(e,be,h),t(be,ze),t(ze,vt),E(Ve,vt,null),t(be,Ns),t(be,xt),t(xt,Rs),c(e,Ot,h),E(Ce,e,h),c(e,It,h),E(Pe,e,h),Bt=!0},p(e,[h]){const Ye={};h&2&&(Ye.$$scope={dirty:h,ctx:e}),V.$set(Ye);const kt={};h&2&&(kt.$$scope={dirty:h,ctx:e}),De.$set(kt);const bt={};h&2&&(bt.$$scope={dirty:h,ctx:e}),Ce.$set(bt);const qt={};h&2&&(qt.$$scope={dirty:h,ctx:e}),Pe.$set(qt)},i(e){Bt||(A($.$$.fragment,e),A(P.$$.fragment,e),A(V.$$.fragment,e),A(G.$$.fragment,e),A(l.$$.fragment,e),A(ue.$$.fragment,e),A(Oe.$$.fragment,e),A(Ie.$$.fragment,e),A(Be.$$.fragment,e),A(Re.$$.fragment,e),A(He.$$.fragment,e),A(De.$$.fragment,e),A(Ve.$$.fragment,e),A(Ce.$$.fragment,e),A(Pe.$$.fragment,e),Bt=!0)},o(e){T($.$$.fragment,e),T(P.$$.fragment,e),T(V.$$.fragment,e),T(G.$$.fragment,e),T(l.$$.fragment,e),T(ue.$$.fragment,e),T(Oe.$$.fragment,e),T(Ie.$$.fragment,e),T(Be.$$.fragment,e),T(Re.$$.fragment,e),T(He.$$.fragment,e),T(De.$$.fragment,e),T(Ve.$$.fragment,e),T(Ce.$$.fragment,e),T(Pe.$$.fragment,e),Bt=!1},d(e){s(a),e&&s(u),e&&s(n),D($),e&&s(k),D(P,e),e&&s(M),e&&s(J),e&&s(K),e&&s(H),e&&s(ie),e&&s(Q),e&&s(ce),D(V,e),e&&s(Y),e&&s(S),D(G),e&&s(_e),e&&s(X),e&&s(ae),D(l,e),e&&s(x),e&&s(me),e&&s(Le),D(ue,e),e&&s(Qe),e&&s(ee),e&&s(yt),e&&s(xe),D(Oe),e&&s(Et),D(Ie,e),e&&s(At),e&&s(we),e&&s(Tt),D(Be,e),e&&s(Dt),e&&s(We),e&&s(zt),e&&s(je),e&&s(Ct),e&&s(Te),e&&s(Pt),D(Re,e),e&&s(Ft),e&&s(de),e&&s(Mt),D(He,e),e&&s(St),e&&s(ve),e&&s(Lt),D(De,e),e&&s(Qt),e&&s(be),D(Ve),e&&s(Ot),D(Ce,e),e&&s(It),D(Pe,e)}}}const Ya={local:"question-answering",sections:[{local:"load-squad-dataset",title:"Load SQuAD dataset"},{local:"preprocess",title:"Preprocess"},{local:"train",title:"Train"}],title:"Question answering"};function Ga(F){return Pa(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class tn extends Ta{constructor(a){super();Da(this,a,Ga,Va,za,{})}}export{tn as default,Ya as metadata};
