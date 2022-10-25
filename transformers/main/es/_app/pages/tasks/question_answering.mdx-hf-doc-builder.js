import{S as gt,i as $t,s as jt,e as p,k as _,w as b,t as r,M as wt,c as i,d as s,m as g,a as c,x as k,h as l,b as x,G as a,g as u,y,q as A,o as D,B as z,v as vt,L as _t}from"../../chunks/vendor-hf-doc-builder.js";import{T as Ha}from"../../chunks/Tip-hf-doc-builder.js";import{Y as ft}from"../../chunks/Youtube-hf-doc-builder.js";import{I as Ua}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ne}from"../../chunks/CodeBlock-hf-doc-builder.js";import{F as ht,M as Va}from"../../chunks/Markdown-hf-doc-builder.js";import"../../chunks/IconTensorflow-hf-doc-builder.js";function xt(O){let t,f,n,h,j;return{c(){t=p("p"),f=r("Revisa la "),n=p("a"),h=r("p\xE1gina de la tarea"),j=r(" de responder preguntas para tener m\xE1s informaci\xF3n sobre otras formas de responder preguntas y los modelos, datasets y m\xE9tricas asociadas."),this.h()},l($){t=i($,"P",{});var w=c(t);f=l(w,"Revisa la "),n=i(w,"A",{href:!0,rel:!0});var T=c(n);h=l(T,"p\xE1gina de la tarea"),T.forEach(s),j=l(w," de responder preguntas para tener m\xE1s informaci\xF3n sobre otras formas de responder preguntas y los modelos, datasets y m\xE9tricas asociadas."),w.forEach(s),this.h()},h(){x(n,"href","https://huggingface.co/tasks/question-answering"),x(n,"rel","nofollow")},m($,w){u($,t,w),a(t,f),a(t,n),a(n,h),a(t,j)},d($){$&&s(t)}}}function Et(O){let t,f;return t=new ne({props:{code:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DefaultDataCollator()`}}),{c(){b(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,h){y(t,n,h),f=!0},p:_t,i(n){f||(A(t.$$.fragment,n),f=!0)},o(n){D(t.$$.fragment,n),f=!1},d(n){z(t,n)}}}function qt(O){let t,f;return t=new Va({props:{$$slots:{default:[Et]},$$scope:{ctx:O}}}),{c(){b(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,h){y(t,n,h),f=!0},p(n,h){const j={};h&2&&(j.$$scope={dirty:h,ctx:n}),t.$set(j)},i(n){f||(A(t.$$.fragment,n),f=!0)},o(n){D(t.$$.fragment,n),f=!1},d(n){z(t,n)}}}function bt(O){let t,f;return t=new ne({props:{code:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator(return_tensors="tf")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

<span class="hljs-meta">&gt;&gt;&gt; </span>data_collator = DefaultDataCollator(return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),{c(){b(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,h){y(t,n,h),f=!0},p:_t,i(n){f||(A(t.$$.fragment,n),f=!0)},o(n){D(t.$$.fragment,n),f=!1},d(n){z(t,n)}}}function kt(O){let t,f;return t=new Va({props:{$$slots:{default:[bt]},$$scope:{ctx:O}}}),{c(){b(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,h){y(t,n,h),f=!0},p(n,h){const j={};h&2&&(j.$$scope={dirty:h,ctx:n}),t.$set(j)},i(n){f||(A(t.$$.fragment,n),f=!0)},o(n){D(t.$$.fragment,n),f=!1},d(n){z(t,n)}}}function yt(O){let t,f,n,h,j,$,w,T;return{c(){t=p("p"),f=r("Para familiarizarte con el fine-tuning con "),n=p("code"),h=r("Trainer"),j=r(", \xA1mira el tutorial b\xE1sico "),$=p("a"),w=r("aqu\xED"),T=r("!"),this.h()},l(C){t=i(C,"P",{});var E=c(t);f=l(E,"Para familiarizarte con el fine-tuning con "),n=i(E,"CODE",{});var P=c(n);h=l(P,"Trainer"),P.forEach(s),j=l(E,", \xA1mira el tutorial b\xE1sico "),$=i(E,"A",{href:!0});var F=c($);w=l(F,"aqu\xED"),F.forEach(s),T=l(E,"!"),E.forEach(s),this.h()},h(){x($,"href","../training#finetune-with-trainer")},m(C,E){u(C,t,E),a(t,f),a(t,n),a(n,h),a(t,j),a(t,$),a($,w),a(t,T)},d(C){C&&s(t)}}}function At(O){let t,f,n,h,j,$,w,T,C,E,P,F,K,S,Y,N,I,oe,W,re,U,pe,Q,ie,B,ce,L,Z,H,le,ue,V,G,M;return w=new ne({props:{code:`from transformers import AutoModelForQuestionAnswering, TrainingArguments, Trainer

model = AutoModelForQuestionAnswering.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForQuestionAnswering, TrainingArguments, Trainer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),C=new Ha({props:{$$slots:{default:[yt]},$$scope:{ctx:O}}}),G=new ne({props:{code:`training_args = TrainingArguments(
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

<span class="hljs-meta">&gt;&gt;&gt; </span>trainer.train()`}}),{c(){t=p("p"),f=r("Carga el modelo DistilBERT con "),n=p("code"),h=r("AutoModelForQuestionAnswering"),j=r(":"),$=_(),b(w.$$.fragment),T=_(),b(C.$$.fragment),E=_(),P=p("p"),F=r("En este punto, solo quedan tres pasos:"),K=_(),S=p("ol"),Y=p("li"),N=r("Definir tus hiperpar\xE1metros de entrenamiento en "),I=p("code"),oe=r("TrainingArguments"),W=r("."),re=_(),U=p("li"),pe=r("Pasarle los argumentos del entrenamiento al "),Q=p("code"),ie=r("Trainer"),B=r(" jnto con el modelo, el dataset, el tokenizer y el collator de datos."),ce=_(),L=p("li"),Z=r("Invocar el m\xE9todo "),H=p("code"),le=r("train()"),ue=r(" para realizar el fine-tuning del modelo."),V=_(),b(G.$$.fragment)},l(m){t=i(m,"P",{});var q=c(t);f=l(q,"Carga el modelo DistilBERT con "),n=i(q,"CODE",{});var J=c(n);h=l(J,"AutoModelForQuestionAnswering"),J.forEach(s),j=l(q,":"),q.forEach(s),$=g(m),k(w.$$.fragment,m),T=g(m),k(C.$$.fragment,m),E=g(m),P=i(m,"P",{});var ae=c(P);F=l(ae,"En este punto, solo quedan tres pasos:"),ae.forEach(s),K=g(m),S=i(m,"OL",{});var R=c(S);Y=i(R,"LI",{});var de=c(Y);N=l(de,"Definir tus hiperpar\xE1metros de entrenamiento en "),I=i(de,"CODE",{});var _e=c(I);oe=l(_e,"TrainingArguments"),_e.forEach(s),W=l(de,"."),de.forEach(s),re=g(R),U=i(R,"LI",{});var X=c(U);pe=l(X,"Pasarle los argumentos del entrenamiento al "),Q=i(X,"CODE",{});var se=c(Q);ie=l(se,"Trainer"),se.forEach(s),B=l(X," jnto con el modelo, el dataset, el tokenizer y el collator de datos."),X.forEach(s),ce=g(R),L=i(R,"LI",{});var te=c(L);Z=l(te,"Invocar el m\xE9todo "),H=i(te,"CODE",{});var o=c(H);le=l(o,"train()"),o.forEach(s),ue=l(te," para realizar el fine-tuning del modelo."),te.forEach(s),R.forEach(s),V=g(m),k(G.$$.fragment,m)},m(m,q){u(m,t,q),a(t,f),a(t,n),a(n,h),a(t,j),u(m,$,q),y(w,m,q),u(m,T,q),y(C,m,q),u(m,E,q),u(m,P,q),a(P,F),u(m,K,q),u(m,S,q),a(S,Y),a(Y,N),a(Y,I),a(I,oe),a(Y,W),a(S,re),a(S,U),a(U,pe),a(U,Q),a(Q,ie),a(U,B),a(S,ce),a(S,L),a(L,Z),a(L,H),a(H,le),a(L,ue),u(m,V,q),y(G,m,q),M=!0},p(m,q){const J={};q&2&&(J.$$scope={dirty:q,ctx:m}),C.$set(J)},i(m){M||(A(w.$$.fragment,m),A(C.$$.fragment,m),A(G.$$.fragment,m),M=!0)},o(m){D(w.$$.fragment,m),D(C.$$.fragment,m),D(G.$$.fragment,m),M=!1},d(m){m&&s(t),m&&s($),z(w,m),m&&s(T),z(C,m),m&&s(E),m&&s(P),m&&s(K),m&&s(S),m&&s(V),z(G,m)}}}function Dt(O){let t,f;return t=new Va({props:{$$slots:{default:[At]},$$scope:{ctx:O}}}),{c(){b(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,h){y(t,n,h),f=!0},p(n,h){const j={};h&2&&(j.$$scope={dirty:h,ctx:n}),t.$set(j)},i(n){f||(A(t.$$.fragment,n),f=!0)},o(n){D(t.$$.fragment,n),f=!1},d(n){z(t,n)}}}function zt(O){let t,f,n,h,j;return{c(){t=p("p"),f=r("Para familiarizarte con el fine-tuning con Keras, \xA1mira el tutorial b\xE1sico "),n=p("a"),h=r("aqu\xED"),j=r("!"),this.h()},l($){t=i($,"P",{});var w=c(t);f=l(w,"Para familiarizarte con el fine-tuning con Keras, \xA1mira el tutorial b\xE1sico "),n=i(w,"A",{href:!0});var T=c(n);h=l(T,"aqu\xED"),T.forEach(s),j=l(w,"!"),w.forEach(s),this.h()},h(){x(n,"href","training#finetune-with-keras")},m($,w){u($,t,w),a(t,f),a(t,n),a(n,h),a(t,j)},d($){$&&s(t)}}}function Ct(O){let t,f,n,h,j,$,w,T,C,E,P,F,K,S,Y,N,I,oe,W,re,U,pe,Q,ie,B,ce,L,Z,H,le,ue,V,G,M,m,q,J,ae,R,de,_e,X,se,te;return E=new ne({props:{code:`tf_train_set = model.prepare_tf_dataset(
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
<span class="hljs-meta">... </span>)`}}),F=new Ha({props:{$$slots:{default:[zt]},$$scope:{ctx:O}}}),I=new ne({props:{code:`from transformers import create_optimizer

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

<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFAutoModelForQuestionAnswering(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),M=new ne({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),se=new ne({props:{code:"model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=3)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>model.fit(x=tf_train_set, validation_data=tf_validation_set, epochs=<span class="hljs-number">3</span>)'}}),{c(){t=p("p"),f=r("Para realizar el fine-tuning de un modelo en TensorFlow, primero convierte tus datasets al formato "),n=p("code"),h=r("tf.data.Dataset"),j=r(" con el m\xE9todo "),$=p("code"),w=r("prepare_tf_dataset()"),T=r("."),C=_(),b(E.$$.fragment),P=_(),b(F.$$.fragment),K=_(),S=p("p"),Y=r("Prepara una funci\xF3n de optimizaci\xF3n, un programa para la tasa de aprendizaje y algunos hiperpar\xE1metros de entrenamiento:"),N=_(),b(I.$$.fragment),oe=_(),W=p("p"),re=r("Carga el modelo DistilBERT con "),U=p("code"),pe=r("TFAutoModelForQuestionAnswering"),Q=r(":"),ie=_(),b(B.$$.fragment),ce=_(),L=p("p"),Z=r("Configura el modelo para entrenarlo con "),H=p("a"),le=p("code"),ue=r("compile"),V=r(":"),G=_(),b(M.$$.fragment),m=_(),q=p("p"),J=r("Invoca el m\xE9todo "),ae=p("a"),R=p("code"),de=r("fit"),_e=r(" para realizar el fine-tuning del modelo:"),X=_(),b(se.$$.fragment),this.h()},l(o){t=i(o,"P",{});var v=c(t);f=l(v,"Para realizar el fine-tuning de un modelo en TensorFlow, primero convierte tus datasets al formato "),n=i(v,"CODE",{});var me=c(n);h=l(me,"tf.data.Dataset"),me.forEach(s),j=l(v," con el m\xE9todo "),$=i(v,"CODE",{});var He=c($);w=l(He,"prepare_tf_dataset()"),He.forEach(s),T=l(v,"."),v.forEach(s),C=g(o),k(E.$$.fragment,o),P=g(o),k(F.$$.fragment,o),K=g(o),S=i(o,"P",{});var Oe=c(S);Y=l(Oe,"Prepara una funci\xF3n de optimizaci\xF3n, un programa para la tasa de aprendizaje y algunos hiperpar\xE1metros de entrenamiento:"),Oe.forEach(s),N=g(o),k(I.$$.fragment,o),oe=g(o),W=i(o,"P",{});var fe=c(W);re=l(fe,"Carga el modelo DistilBERT con "),U=i(fe,"CODE",{});var Fe=c(U);pe=l(Fe,"TFAutoModelForQuestionAnswering"),Fe.forEach(s),Q=l(fe,":"),fe.forEach(s),ie=g(o),k(B.$$.fragment,o),ce=g(o),L=i(o,"P",{});var ee=c(L);Z=l(ee,"Configura el modelo para entrenarlo con "),H=i(ee,"A",{href:!0,rel:!0});var Ve=c(H);le=i(Ve,"CODE",{});var qe=c(le);ue=l(qe,"compile"),qe.forEach(s),Ve.forEach(s),V=l(ee,":"),ee.forEach(s),G=g(o),k(M.$$.fragment,o),m=g(o),q=i(o,"P",{});var be=c(q);J=l(be,"Invoca el m\xE9todo "),ae=i(be,"A",{href:!0,rel:!0});var Ge=c(ae);R=i(Ge,"CODE",{});var ke=c(R);de=l(ke,"fit"),ke.forEach(s),Ge.forEach(s),_e=l(be," para realizar el fine-tuning del modelo:"),be.forEach(s),X=g(o),k(se.$$.fragment,o),this.h()},h(){x(H,"href","https://keras.io/api/models/model_training_apis/#compile-method"),x(H,"rel","nofollow"),x(ae,"href","https://keras.io/api/models/model_training_apis/#fit-method"),x(ae,"rel","nofollow")},m(o,v){u(o,t,v),a(t,f),a(t,n),a(n,h),a(t,j),a(t,$),a($,w),a(t,T),u(o,C,v),y(E,o,v),u(o,P,v),y(F,o,v),u(o,K,v),u(o,S,v),a(S,Y),u(o,N,v),y(I,o,v),u(o,oe,v),u(o,W,v),a(W,re),a(W,U),a(U,pe),a(W,Q),u(o,ie,v),y(B,o,v),u(o,ce,v),u(o,L,v),a(L,Z),a(L,H),a(H,le),a(le,ue),a(L,V),u(o,G,v),y(M,o,v),u(o,m,v),u(o,q,v),a(q,J),a(q,ae),a(ae,R),a(R,de),a(q,_e),u(o,X,v),y(se,o,v),te=!0},p(o,v){const me={};v&2&&(me.$$scope={dirty:v,ctx:o}),F.$set(me)},i(o){te||(A(E.$$.fragment,o),A(F.$$.fragment,o),A(I.$$.fragment,o),A(B.$$.fragment,o),A(M.$$.fragment,o),A(se.$$.fragment,o),te=!0)},o(o){D(E.$$.fragment,o),D(F.$$.fragment,o),D(I.$$.fragment,o),D(B.$$.fragment,o),D(M.$$.fragment,o),D(se.$$.fragment,o),te=!1},d(o){o&&s(t),o&&s(C),z(E,o),o&&s(P),z(F,o),o&&s(K),o&&s(S),o&&s(N),z(I,o),o&&s(oe),o&&s(W),o&&s(ie),z(B,o),o&&s(ce),o&&s(L),o&&s(G),z(M,o),o&&s(m),o&&s(q),o&&s(X),z(se,o)}}}function Tt(O){let t,f;return t=new Va({props:{$$slots:{default:[Ct]},$$scope:{ctx:O}}}),{c(){b(t.$$.fragment)},l(n){k(t.$$.fragment,n)},m(n,h){y(t,n,h),f=!0},p(n,h){const j={};h&2&&(j.$$scope={dirty:h,ctx:n}),t.$set(j)},i(n){f||(A(t.$$.fragment,n),f=!0)},o(n){D(t.$$.fragment,n),f=!1},d(n){z(t,n)}}}function Pt(O){let t,f,n,h,j,$,w,T;return{c(){t=p("p"),f=r(`Para un ejemplo con mayor profundidad de c\xF3mo hacer fine-tuning a un modelo para responder preguntas, \xE9chale un vistazo al
`),n=p("a"),h=r("cuaderno de PyTorch"),j=r(` o al
`),$=p("a"),w=r("cuaderno de TensorFlow"),T=r(" correspondiente."),this.h()},l(C){t=i(C,"P",{});var E=c(t);f=l(E,`Para un ejemplo con mayor profundidad de c\xF3mo hacer fine-tuning a un modelo para responder preguntas, \xE9chale un vistazo al
`),n=i(E,"A",{href:!0,rel:!0});var P=c(n);h=l(P,"cuaderno de PyTorch"),P.forEach(s),j=l(E,` o al
`),$=i(E,"A",{href:!0,rel:!0});var F=c($);w=l(F,"cuaderno de TensorFlow"),F.forEach(s),T=l(E," correspondiente."),E.forEach(s),this.h()},h(){x(n,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering.ipynb"),x(n,"rel","nofollow"),x($,"href","https://colab.research.google.com/github/huggingface/notebooks/blob/main/examples/question_answering-tf.ipynb"),x($,"rel","nofollow")},m(C,E){u(C,t,E),a(t,f),a(t,n),a(n,h),a(t,j),a(t,$),a($,w),a(t,T)},d(C){C&&s(t)}}}function Ot(O){let t,f,n,h,j,$,w,T,C,E,P,F,K,S,Y,N,I,oe,W,re,U,pe,Q,ie,B,ce,L,Z,H,le,ue,V,G,M,m,q,J,ae,R,de,_e,X,se,te,o,v,me,He,Oe,fe,Fe,ee,Ve,qe,be,Ge,ke,Ga,Ja,xa,we,ye,sa,Me,Ka,ta,Ya,Ea,Se,qa,ge,Wa,na,Xa,Za,ra,es,as,ba,Qe,ka,Je,ss,ya,$e,ve,ts,la,ns,rs,oa,ls,os,ps,xe,is,pa,cs,us,ia,ds,ms,fs,Le,hs,Ie,ca,_s,gs,Aa,Ae,$s,ua,js,ws,Da,Be,za,he,vs,da,xs,Es,ma,qs,bs,fa,ks,ys,Ca,Re,Ta,je,As,ha,Ds,zs,_a,Cs,Ts,Pa,De,Oa,Ee,ze,ga,Ne,Ps,$a,Os,Fa,Ce,Ma,Te,Sa;return $=new Ua({}),P=new ft({props:{id:"ajPx5LwJD-I"}}),V=new Ha({props:{$$slots:{default:[xt]},$$scope:{ctx:O}}}),J=new Ua({}),o=new ne({props:{code:`from datasets import load_dataset

squad = load_dataset("squad")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

<span class="hljs-meta">&gt;&gt;&gt; </span>squad = load_dataset(<span class="hljs-string">&quot;squad&quot;</span>)`}}),fe=new ne({props:{code:'squad["train"][0]',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>squad[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>]
{<span class="hljs-string">&#x27;answers&#x27;</span>: {<span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">515</span>], <span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Saint Bernadette Soubirous&#x27;</span>]},
 <span class="hljs-string">&#x27;context&#x27;</span>: <span class="hljs-string">&#x27;Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot;Venite Ad Me Omnes&quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.&#x27;</span>,
 <span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;5733be284776f41900661182&#x27;</span>,
 <span class="hljs-string">&#x27;question&#x27;</span>: <span class="hljs-string">&#x27;To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?&#x27;</span>,
 <span class="hljs-string">&#x27;title&#x27;</span>: <span class="hljs-string">&#x27;University_of_Notre_Dame&#x27;</span>
}`}}),Me=new Ua({}),Se=new ft({props:{id:"qgaM0weJHpA"}}),Qe=new ne({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>)`}}),Be=new ne({props:{code:`def preprocess_function(examples):
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

        # Encuentra el inicio y el fin del contexto
        idx = 0
        while sequence_ids[idx] != 1:
            idx += 1
        context_start = idx
        while sequence_ids[idx] == 1:
            idx += 1
        context_end = idx - 1

        # Si la respuesta entera no est\xE1 dentro del contexto, etiqu\xE9tala como (0, 0)
        if offset[context_start][0] > end_char or offset[context_end][1] < start_char:
            start_positions.append(0)
            end_positions.append(0)
        else:
            # De lo contrario, esta es la posici\xF3n de los tokens de inicio y fin
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

<span class="hljs-meta">... </span>        <span class="hljs-comment"># Encuentra el inicio y el fin del contexto</span>
<span class="hljs-meta">... </span>        idx = <span class="hljs-number">0</span>
<span class="hljs-meta">... </span>        <span class="hljs-keyword">while</span> sequence_ids[idx] != <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>            idx += <span class="hljs-number">1</span>
<span class="hljs-meta">... </span>        context_start = idx
<span class="hljs-meta">... </span>        <span class="hljs-keyword">while</span> sequence_ids[idx] == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>            idx += <span class="hljs-number">1</span>
<span class="hljs-meta">... </span>        context_end = idx - <span class="hljs-number">1</span>

<span class="hljs-meta">... </span>        <span class="hljs-comment"># Si la respuesta entera no est\xE1 dentro del contexto, etiqu\xE9tala como (0, 0)</span>
<span class="hljs-meta">... </span>        <span class="hljs-keyword">if</span> offset[context_start][<span class="hljs-number">0</span>] &gt; end_char <span class="hljs-keyword">or</span> offset[context_end][<span class="hljs-number">1</span>] &lt; start_char:
<span class="hljs-meta">... </span>            start_positions.append(<span class="hljs-number">0</span>)
<span class="hljs-meta">... </span>            end_positions.append(<span class="hljs-number">0</span>)
<span class="hljs-meta">... </span>        <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>            <span class="hljs-comment"># De lo contrario, esta es la posici\xF3n de los tokens de inicio y fin</span>
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
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> inputs`}}),Re=new ne({props:{code:'tokenized_squad = squad.map(preprocess_function, batched=True, remove_columns=squad["train"].column_names)',highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_squad = squad.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>, remove_columns=squad[<span class="hljs-string">&quot;train&quot;</span>].column_names)'}}),De=new ht({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[kt],pytorch:[qt]},$$scope:{ctx:O}}}),Ne=new Ua({}),Ce=new ht({props:{pytorch:!0,tensorflow:!0,jax:!1,$$slots:{tensorflow:[Tt],pytorch:[Dt]},$$scope:{ctx:O}}}),Te=new Ha({props:{$$slots:{default:[Pt]},$$scope:{ctx:O}}}),{c(){t=p("meta"),f=_(),n=p("h1"),h=p("a"),j=p("span"),b($.$$.fragment),w=_(),T=p("span"),C=r("Respuesta a preguntas"),E=_(),b(P.$$.fragment),F=_(),K=p("p"),S=r("La respuesta a preguntas devuelve una respuesta a partir de una pregunta dada. Existen dos formas comunes de responder preguntas:"),Y=_(),N=p("ul"),I=p("li"),oe=r("Extractiva: extraer la respuesta a partir del contexto dado."),W=_(),re=p("li"),U=r("Abstractiva: generar una respuesta que responda correctamente la pregunta a partir del contexto dado."),pe=_(),Q=p("p"),ie=r("Esta gu\xEDa te mostrar\xE1 como hacer fine-tuning de "),B=p("a"),ce=r("DistilBERT"),L=r(" en el dataset "),Z=p("a"),H=r("SQuAD"),le=r(" para responder preguntas de forma extractiva."),ue=_(),b(V.$$.fragment),G=_(),M=p("h2"),m=p("a"),q=p("span"),b(J.$$.fragment),ae=_(),R=p("span"),de=r("Carga el dataset SQuAD"),_e=_(),X=p("p"),se=r("Carga el dataset SQuAD con la biblioteca \u{1F917} Datasets:"),te=_(),b(o.$$.fragment),v=_(),me=p("p"),He=r("Ahora, \xE9chale un vistazo a una muestra:"),Oe=_(),b(fe.$$.fragment),Fe=_(),ee=p("p"),Ve=r("El campo "),qe=p("code"),be=r("answers"),Ge=r(" es un diccionario que contiene la posici\xF3n inicial de la respuesta y el "),ke=p("code"),Ga=r("texto"),Ja=r(" de la respuesta."),xa=_(),we=p("h2"),ye=p("a"),sa=p("span"),b(Me.$$.fragment),Ka=_(),ta=p("span"),Ya=r("Preprocesamiento"),Ea=_(),b(Se.$$.fragment),qa=_(),ge=p("p"),Wa=r("Carga el tokenizer de DistilBERT para procesar los campos "),na=p("code"),Xa=r("question"),Za=r(" (pregunta) y "),ra=p("code"),es=r("context"),as=r(" (contexto):"),ba=_(),b(Qe.$$.fragment),ka=_(),Je=p("p"),ss=r("Hay algunos pasos de preprocesamiento espec\xEDficos para la tarea de respuesta a preguntas que debes tener en cuenta:"),ya=_(),$e=p("ol"),ve=p("li"),ts=r("Algunos ejemplos en un dataset pueden tener un contexto que supera la longitud m\xE1xima de entrada de un modelo. Trunca solamente el contexto asign\xE1ndole el valor "),la=p("code"),ns=r('"only_second"'),rs=r(" al par\xE1metro "),oa=p("code"),ls=r("truncation"),os=r("."),ps=_(),xe=p("li"),is=r("A continuaci\xF3n, mapea las posiciones de inicio y fin de la respuesta al contexto original asign\xE1ndole el valor "),pa=p("code"),cs=r("True"),us=r(" al par\xE1metro "),ia=p("code"),ds=r("return_offsets_mapping"),ms=r("."),fs=_(),Le=p("li"),hs=r("Una vez tengas el mapeo, puedes encontrar los tokens de inicio y fin de la respuesta. Usa el m\xE9todo "),Ie=p("a"),ca=p("code"),_s=r("sequence_ids"),gs=r(`
para encontrar qu\xE9 parte de la lista de tokens desplazados corresponde a la pregunta y cu\xE1l corresponde al contexto.`),Aa=_(),Ae=p("p"),$s=r("A continuaci\xF3n puedes ver como se crea una funci\xF3n para truncar y mapear los tokens de inicio y fin de la respuesta al "),ua=p("code"),js=r("context"),ws=r(":"),Da=_(),b(Be.$$.fragment),za=_(),he=p("p"),vs=r("Usa la funci\xF3n "),da=p("code"),xs=r("map"),Es=r(" de \u{1F917} Datasets para aplicarle la funci\xF3n de preprocesamiento al dataset entero. Puedes acelerar la funci\xF3n "),ma=p("code"),qs=r("map"),bs=r(" haciendo "),fa=p("code"),ks=r("batched=True"),ys=r(` para procesar varios elementos del dataset a la vez.
Quita las columnas que no necesites:`),Ca=_(),b(Re.$$.fragment),Ta=_(),je=p("p"),As=r("Usa el "),ha=p("code"),Ds=r("DefaultDataCollator"),zs=r(" para crear un lote de ejemplos. A diferencia de los otros collators de datos en \u{1F917} Transformers, el "),_a=p("code"),Cs=r("DefaultDataCollator"),Ts=r(" no aplica ning\xFAn procesamiento adicional (como el rellenado)."),Pa=_(),b(De.$$.fragment),Oa=_(),Ee=p("h2"),ze=p("a"),ga=p("span"),b(Ne.$$.fragment),Ps=_(),$a=p("span"),Os=r("Entrenamiento"),Fa=_(),b(Ce.$$.fragment),Ma=_(),b(Te.$$.fragment),this.h()},l(e){const d=wt('[data-svelte="svelte-1phssyn"]',document.head);t=i(d,"META",{name:!0,content:!0}),d.forEach(s),f=g(e),n=i(e,"H1",{class:!0});var Ue=c(n);h=i(Ue,"A",{id:!0,class:!0,href:!0});var ja=c(h);j=i(ja,"SPAN",{});var wa=c(j);k($.$$.fragment,wa),wa.forEach(s),ja.forEach(s),w=g(Ue),T=i(Ue,"SPAN",{});var va=c(T);C=l(va,"Respuesta a preguntas"),va.forEach(s),Ue.forEach(s),E=g(e),k(P.$$.fragment,e),F=g(e),K=i(e,"P",{});var Fs=c(K);S=l(Fs,"La respuesta a preguntas devuelve una respuesta a partir de una pregunta dada. Existen dos formas comunes de responder preguntas:"),Fs.forEach(s),Y=g(e),N=i(e,"UL",{});var Qa=c(N);I=i(Qa,"LI",{});var Ms=c(I);oe=l(Ms,"Extractiva: extraer la respuesta a partir del contexto dado."),Ms.forEach(s),W=g(Qa),re=i(Qa,"LI",{});var Ss=c(re);U=l(Ss,"Abstractiva: generar una respuesta que responda correctamente la pregunta a partir del contexto dado."),Ss.forEach(s),Qa.forEach(s),pe=g(e),Q=i(e,"P",{});var Ke=c(Q);ie=l(Ke,"Esta gu\xEDa te mostrar\xE1 como hacer fine-tuning de "),B=i(Ke,"A",{href:!0,rel:!0});var Qs=c(B);ce=l(Qs,"DistilBERT"),Qs.forEach(s),L=l(Ke," en el dataset "),Z=i(Ke,"A",{href:!0,rel:!0});var Ls=c(Z);H=l(Ls,"SQuAD"),Ls.forEach(s),le=l(Ke," para responder preguntas de forma extractiva."),Ke.forEach(s),ue=g(e),k(V.$$.fragment,e),G=g(e),M=i(e,"H2",{class:!0});var La=c(M);m=i(La,"A",{id:!0,class:!0,href:!0});var Is=c(m);q=i(Is,"SPAN",{});var Bs=c(q);k(J.$$.fragment,Bs),Bs.forEach(s),Is.forEach(s),ae=g(La),R=i(La,"SPAN",{});var Rs=c(R);de=l(Rs,"Carga el dataset SQuAD"),Rs.forEach(s),La.forEach(s),_e=g(e),X=i(e,"P",{});var Ns=c(X);se=l(Ns,"Carga el dataset SQuAD con la biblioteca \u{1F917} Datasets:"),Ns.forEach(s),te=g(e),k(o.$$.fragment,e),v=g(e),me=i(e,"P",{});var Us=c(me);He=l(Us,"Ahora, \xE9chale un vistazo a una muestra:"),Us.forEach(s),Oe=g(e),k(fe.$$.fragment,e),Fe=g(e),ee=i(e,"P",{});var Ye=c(ee);Ve=l(Ye,"El campo "),qe=i(Ye,"CODE",{});var Hs=c(qe);be=l(Hs,"answers"),Hs.forEach(s),Ge=l(Ye," es un diccionario que contiene la posici\xF3n inicial de la respuesta y el "),ke=i(Ye,"CODE",{});var Vs=c(ke);Ga=l(Vs,"texto"),Vs.forEach(s),Ja=l(Ye," de la respuesta."),Ye.forEach(s),xa=g(e),we=i(e,"H2",{class:!0});var Ia=c(we);ye=i(Ia,"A",{id:!0,class:!0,href:!0});var Gs=c(ye);sa=i(Gs,"SPAN",{});var Js=c(sa);k(Me.$$.fragment,Js),Js.forEach(s),Gs.forEach(s),Ka=g(Ia),ta=i(Ia,"SPAN",{});var Ks=c(ta);Ya=l(Ks,"Preprocesamiento"),Ks.forEach(s),Ia.forEach(s),Ea=g(e),k(Se.$$.fragment,e),qa=g(e),ge=i(e,"P",{});var We=c(ge);Wa=l(We,"Carga el tokenizer de DistilBERT para procesar los campos "),na=i(We,"CODE",{});var Ys=c(na);Xa=l(Ys,"question"),Ys.forEach(s),Za=l(We," (pregunta) y "),ra=i(We,"CODE",{});var Ws=c(ra);es=l(Ws,"context"),Ws.forEach(s),as=l(We," (contexto):"),We.forEach(s),ba=g(e),k(Qe.$$.fragment,e),ka=g(e),Je=i(e,"P",{});var Xs=c(Je);ss=l(Xs,"Hay algunos pasos de preprocesamiento espec\xEDficos para la tarea de respuesta a preguntas que debes tener en cuenta:"),Xs.forEach(s),ya=g(e),$e=i(e,"OL",{});var Xe=c($e);ve=i(Xe,"LI",{});var Ze=c(ve);ts=l(Ze,"Algunos ejemplos en un dataset pueden tener un contexto que supera la longitud m\xE1xima de entrada de un modelo. Trunca solamente el contexto asign\xE1ndole el valor "),la=i(Ze,"CODE",{});var Zs=c(la);ns=l(Zs,'"only_second"'),Zs.forEach(s),rs=l(Ze," al par\xE1metro "),oa=i(Ze,"CODE",{});var et=c(oa);ls=l(et,"truncation"),et.forEach(s),os=l(Ze,"."),Ze.forEach(s),ps=g(Xe),xe=i(Xe,"LI",{});var ea=c(xe);is=l(ea,"A continuaci\xF3n, mapea las posiciones de inicio y fin de la respuesta al contexto original asign\xE1ndole el valor "),pa=i(ea,"CODE",{});var at=c(pa);cs=l(at,"True"),at.forEach(s),us=l(ea," al par\xE1metro "),ia=i(ea,"CODE",{});var st=c(ia);ds=l(st,"return_offsets_mapping"),st.forEach(s),ms=l(ea,"."),ea.forEach(s),fs=g(Xe),Le=i(Xe,"LI",{});var Ba=c(Le);hs=l(Ba,"Una vez tengas el mapeo, puedes encontrar los tokens de inicio y fin de la respuesta. Usa el m\xE9todo "),Ie=i(Ba,"A",{href:!0,rel:!0});var tt=c(Ie);ca=i(tt,"CODE",{});var nt=c(ca);_s=l(nt,"sequence_ids"),nt.forEach(s),tt.forEach(s),gs=l(Ba,`
para encontrar qu\xE9 parte de la lista de tokens desplazados corresponde a la pregunta y cu\xE1l corresponde al contexto.`),Ba.forEach(s),Xe.forEach(s),Aa=g(e),Ae=i(e,"P",{});var Ra=c(Ae);$s=l(Ra,"A continuaci\xF3n puedes ver como se crea una funci\xF3n para truncar y mapear los tokens de inicio y fin de la respuesta al "),ua=i(Ra,"CODE",{});var rt=c(ua);js=l(rt,"context"),rt.forEach(s),ws=l(Ra,":"),Ra.forEach(s),Da=g(e),k(Be.$$.fragment,e),za=g(e),he=i(e,"P",{});var Pe=c(he);vs=l(Pe,"Usa la funci\xF3n "),da=i(Pe,"CODE",{});var lt=c(da);xs=l(lt,"map"),lt.forEach(s),Es=l(Pe," de \u{1F917} Datasets para aplicarle la funci\xF3n de preprocesamiento al dataset entero. Puedes acelerar la funci\xF3n "),ma=i(Pe,"CODE",{});var ot=c(ma);qs=l(ot,"map"),ot.forEach(s),bs=l(Pe," haciendo "),fa=i(Pe,"CODE",{});var pt=c(fa);ks=l(pt,"batched=True"),pt.forEach(s),ys=l(Pe,` para procesar varios elementos del dataset a la vez.
Quita las columnas que no necesites:`),Pe.forEach(s),Ca=g(e),k(Re.$$.fragment,e),Ta=g(e),je=i(e,"P",{});var aa=c(je);As=l(aa,"Usa el "),ha=i(aa,"CODE",{});var it=c(ha);Ds=l(it,"DefaultDataCollator"),it.forEach(s),zs=l(aa," para crear un lote de ejemplos. A diferencia de los otros collators de datos en \u{1F917} Transformers, el "),_a=i(aa,"CODE",{});var ct=c(_a);Cs=l(ct,"DefaultDataCollator"),ct.forEach(s),Ts=l(aa," no aplica ning\xFAn procesamiento adicional (como el rellenado)."),aa.forEach(s),Pa=g(e),k(De.$$.fragment,e),Oa=g(e),Ee=i(e,"H2",{class:!0});var Na=c(Ee);ze=i(Na,"A",{id:!0,class:!0,href:!0});var ut=c(ze);ga=i(ut,"SPAN",{});var dt=c(ga);k(Ne.$$.fragment,dt),dt.forEach(s),ut.forEach(s),Ps=g(Na),$a=i(Na,"SPAN",{});var mt=c($a);Os=l(mt,"Entrenamiento"),mt.forEach(s),Na.forEach(s),Fa=g(e),k(Ce.$$.fragment,e),Ma=g(e),k(Te.$$.fragment,e),this.h()},h(){x(t,"name","hf:doc:metadata"),x(t,"content",JSON.stringify(Ft)),x(h,"id","respuesta-a-preguntas"),x(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),x(h,"href","#respuesta-a-preguntas"),x(n,"class","relative group"),x(B,"href","https://huggingface.co/distilbert-base-uncased"),x(B,"rel","nofollow"),x(Z,"href","https://huggingface.co/datasets/squad"),x(Z,"rel","nofollow"),x(m,"id","carga-el-dataset-squad"),x(m,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),x(m,"href","#carga-el-dataset-squad"),x(M,"class","relative group"),x(ye,"id","preprocesamiento"),x(ye,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),x(ye,"href","#preprocesamiento"),x(we,"class","relative group"),x(Ie,"href","https://huggingface.co/docs/tokenizers/python/latest/api/reference.html#tokenizers.Encoding.sequence_ids"),x(Ie,"rel","nofollow"),x(ze,"id","entrenamiento"),x(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),x(ze,"href","#entrenamiento"),x(Ee,"class","relative group")},m(e,d){a(document.head,t),u(e,f,d),u(e,n,d),a(n,h),a(h,j),y($,j,null),a(n,w),a(n,T),a(T,C),u(e,E,d),y(P,e,d),u(e,F,d),u(e,K,d),a(K,S),u(e,Y,d),u(e,N,d),a(N,I),a(I,oe),a(N,W),a(N,re),a(re,U),u(e,pe,d),u(e,Q,d),a(Q,ie),a(Q,B),a(B,ce),a(Q,L),a(Q,Z),a(Z,H),a(Q,le),u(e,ue,d),y(V,e,d),u(e,G,d),u(e,M,d),a(M,m),a(m,q),y(J,q,null),a(M,ae),a(M,R),a(R,de),u(e,_e,d),u(e,X,d),a(X,se),u(e,te,d),y(o,e,d),u(e,v,d),u(e,me,d),a(me,He),u(e,Oe,d),y(fe,e,d),u(e,Fe,d),u(e,ee,d),a(ee,Ve),a(ee,qe),a(qe,be),a(ee,Ge),a(ee,ke),a(ke,Ga),a(ee,Ja),u(e,xa,d),u(e,we,d),a(we,ye),a(ye,sa),y(Me,sa,null),a(we,Ka),a(we,ta),a(ta,Ya),u(e,Ea,d),y(Se,e,d),u(e,qa,d),u(e,ge,d),a(ge,Wa),a(ge,na),a(na,Xa),a(ge,Za),a(ge,ra),a(ra,es),a(ge,as),u(e,ba,d),y(Qe,e,d),u(e,ka,d),u(e,Je,d),a(Je,ss),u(e,ya,d),u(e,$e,d),a($e,ve),a(ve,ts),a(ve,la),a(la,ns),a(ve,rs),a(ve,oa),a(oa,ls),a(ve,os),a($e,ps),a($e,xe),a(xe,is),a(xe,pa),a(pa,cs),a(xe,us),a(xe,ia),a(ia,ds),a(xe,ms),a($e,fs),a($e,Le),a(Le,hs),a(Le,Ie),a(Ie,ca),a(ca,_s),a(Le,gs),u(e,Aa,d),u(e,Ae,d),a(Ae,$s),a(Ae,ua),a(ua,js),a(Ae,ws),u(e,Da,d),y(Be,e,d),u(e,za,d),u(e,he,d),a(he,vs),a(he,da),a(da,xs),a(he,Es),a(he,ma),a(ma,qs),a(he,bs),a(he,fa),a(fa,ks),a(he,ys),u(e,Ca,d),y(Re,e,d),u(e,Ta,d),u(e,je,d),a(je,As),a(je,ha),a(ha,Ds),a(je,zs),a(je,_a),a(_a,Cs),a(je,Ts),u(e,Pa,d),y(De,e,d),u(e,Oa,d),u(e,Ee,d),a(Ee,ze),a(ze,ga),y(Ne,ga,null),a(Ee,Ps),a(Ee,$a),a($a,Os),u(e,Fa,d),y(Ce,e,d),u(e,Ma,d),y(Te,e,d),Sa=!0},p(e,[d]){const Ue={};d&2&&(Ue.$$scope={dirty:d,ctx:e}),V.$set(Ue);const ja={};d&2&&(ja.$$scope={dirty:d,ctx:e}),De.$set(ja);const wa={};d&2&&(wa.$$scope={dirty:d,ctx:e}),Ce.$set(wa);const va={};d&2&&(va.$$scope={dirty:d,ctx:e}),Te.$set(va)},i(e){Sa||(A($.$$.fragment,e),A(P.$$.fragment,e),A(V.$$.fragment,e),A(J.$$.fragment,e),A(o.$$.fragment,e),A(fe.$$.fragment,e),A(Me.$$.fragment,e),A(Se.$$.fragment,e),A(Qe.$$.fragment,e),A(Be.$$.fragment,e),A(Re.$$.fragment,e),A(De.$$.fragment,e),A(Ne.$$.fragment,e),A(Ce.$$.fragment,e),A(Te.$$.fragment,e),Sa=!0)},o(e){D($.$$.fragment,e),D(P.$$.fragment,e),D(V.$$.fragment,e),D(J.$$.fragment,e),D(o.$$.fragment,e),D(fe.$$.fragment,e),D(Me.$$.fragment,e),D(Se.$$.fragment,e),D(Qe.$$.fragment,e),D(Be.$$.fragment,e),D(Re.$$.fragment,e),D(De.$$.fragment,e),D(Ne.$$.fragment,e),D(Ce.$$.fragment,e),D(Te.$$.fragment,e),Sa=!1},d(e){s(t),e&&s(f),e&&s(n),z($),e&&s(E),z(P,e),e&&s(F),e&&s(K),e&&s(Y),e&&s(N),e&&s(pe),e&&s(Q),e&&s(ue),z(V,e),e&&s(G),e&&s(M),z(J),e&&s(_e),e&&s(X),e&&s(te),z(o,e),e&&s(v),e&&s(me),e&&s(Oe),z(fe,e),e&&s(Fe),e&&s(ee),e&&s(xa),e&&s(we),z(Me),e&&s(Ea),z(Se,e),e&&s(qa),e&&s(ge),e&&s(ba),z(Qe,e),e&&s(ka),e&&s(Je),e&&s(ya),e&&s($e),e&&s(Aa),e&&s(Ae),e&&s(Da),z(Be,e),e&&s(za),e&&s(he),e&&s(Ca),z(Re,e),e&&s(Ta),e&&s(je),e&&s(Pa),z(De,e),e&&s(Oa),e&&s(Ee),z(Ne),e&&s(Fa),z(Ce,e),e&&s(Ma),z(Te,e)}}}const Ft={local:"respuesta-a-preguntas",sections:[{local:"carga-el-dataset-squad",title:"Carga el dataset SQuAD"},{local:"preprocesamiento",title:"Preprocesamiento"},{local:"entrenamiento",title:"Entrenamiento"}],title:"Respuesta a preguntas"};function Mt(O){return vt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ut extends gt{constructor(t){super();$t(this,t,Mt,Ot,jt,{})}}export{Ut as default,Ft as metadata};
