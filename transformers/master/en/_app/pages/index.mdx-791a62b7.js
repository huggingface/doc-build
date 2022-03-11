import{S as ue,i as ce,s as _e,e as p,k as _,w as v,t as o,M as de,c as f,d as e,m as d,a as m,x as q,h as l,b as ct,F as s,g as r,y as z,q as E,o as C,B as F,L as Rt}from"../chunks/vendor-329198bb.js";import{I as fe}from"../chunks/IconCopyLink-236b0ec7.js";import{C as K}from"../chunks/CodeBlock-49151c5f.js";import{F as me,M as Gt}from"../chunks/Markdown-4ceeca51.js";import"../chunks/CopyButton-970e2b07.js";import"../chunks/IconTensorflow-ed0412f1.js";function he(St){let c,b,i,u,x,O,Ct,ht,J,qt,_t,P,zt,st,at,M,V,h,jt,R,Et,yt,Q,lt,dt,L,tt,pt,G,D,et,H,wt,A,N,U,k,$,w,gt,kt,X,W,ft,I,nt,rt,T,mt,j,ut,Y,it,Ft,ot,B,$t,t,n,S,Pt,Wt,Dt,g,At,vt,Ot,Tt,bt,Nt,xt,Z,Mt;return u=new fe({}),lt=new K({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),G=new fe({}),nt=new K({props:{code:`tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)`}}),ut=new K({props:{code:`from transformers import create_optimizer
import tensorflow as tf

batch_size = 16
num_epochs = 5
batches_per_epoch = len(tokenized_imdb["train"]) // batch_size
total_train_steps = int(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=2e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

batch_size = <span class="hljs-number">16</span>
num_epochs = <span class="hljs-number">5</span>
batches_per_epoch = <span class="hljs-built_in">len</span>(tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
total_train_steps = <span class="hljs-built_in">int</span>(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">2e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),n=new K({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),g=new K({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),Z=new K({props:{code:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`,highlighted:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`}}),{c(){c=p("h2"),b=p("a"),i=p("span"),v(u.$$.fragment),x=_(),O=p("span"),Ct=o("Pytorch heading"),ht=_(),J=p("p"),qt=o("Fine-tuning with TensorFlow is just as easy, with only a few differences."),_t=_(),P=p("p"),zt=o("Start by batching the processed examples together with dynamic padding using the "),st=p("a"),at=o("DataCollatorWithPadding"),M=o(` function.
Make sure you set `),V=p("code"),h=o('return_tensors="tf"'),jt=o(" to return "),R=p("code"),Et=o("tf.Tensor"),yt=o(" outputs instead of PyTorch tensors!"),Q=_(),v(lt.$$.fragment),dt=_(),L=p("h3"),tt=p("a"),pt=p("span"),v(G.$$.fragment),D=_(),et=p("span"),H=o("Smaller Pytorch heading"),wt=_(),A=p("p"),N=o("Next, convert your datasets to the "),U=p("code"),k=o("tf.data.Dataset"),$=o(" format with "),w=p("code"),gt=o("to_tf_dataset"),kt=o(`. Specify inputs and labels in the
`),X=p("code"),W=o("columns"),ft=o(" argument:"),I=_(),v(nt.$$.fragment),rt=_(),T=p("p"),mt=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),j=_(),v(ut.$$.fragment),Y=_(),it=p("p"),Ft=o("Load your model with the "),ot=p("a"),B=o("TFAutoModelForSequenceClassification"),$t=o(" class along with the number of expected labels:"),t=_(),v(n.$$.fragment),S=_(),Pt=p("p"),Wt=o("Compile the model:"),Dt=_(),v(g.$$.fragment),At=_(),vt=p("p"),Ot=o("Finally, fine-tune the model by calling "),Tt=p("code"),bt=o("model.fit"),Nt=o(":"),xt=_(),v(Z.$$.fragment),this.h()},l(a){c=f(a,"H2",{class:!0});var y=m(c);b=f(y,"A",{id:!0,class:!0,href:!0});var Kt=m(b);i=f(Kt,"SPAN",{});var Qt=m(i);q(u.$$.fragment,Qt),Qt.forEach(e),Kt.forEach(e),x=d(y),O=f(y,"SPAN",{});var Ut=m(O);Ct=l(Ut,"Pytorch heading"),Ut.forEach(e),y.forEach(e),ht=d(a),J=f(a,"P",{});var Vt=m(J);qt=l(Vt,"Fine-tuning with TensorFlow is just as easy, with only a few differences."),Vt.forEach(e),_t=d(a),P=f(a,"P",{});var Lt=m(P);zt=l(Lt,"Start by batching the processed examples together with dynamic padding using the "),st=f(Lt,"A",{href:!0});var Xt=m(st);at=l(Xt,"DataCollatorWithPadding"),Xt.forEach(e),M=l(Lt,` function.
Make sure you set `),V=f(Lt,"CODE",{});var Yt=m(V);h=l(Yt,'return_tensors="tf"'),Yt.forEach(e),jt=l(Lt," to return "),R=f(Lt,"CODE",{});var Zt=m(R);Et=l(Zt,"tf.Tensor"),Zt.forEach(e),yt=l(Lt," outputs instead of PyTorch tensors!"),Lt.forEach(e),Q=d(a),q(lt.$$.fragment,a),dt=d(a),L=f(a,"H3",{class:!0});var Bt=m(L);tt=f(Bt,"A",{id:!0,class:!0,href:!0});var te=m(tt);pt=f(te,"SPAN",{});var ee=m(pt);q(G.$$.fragment,ee),ee.forEach(e),te.forEach(e),D=d(Bt),et=f(Bt,"SPAN",{});var se=m(et);H=l(se,"Smaller Pytorch heading"),se.forEach(e),Bt.forEach(e),wt=d(a),A=f(a,"P",{});var Ht=m(A);N=l(Ht,"Next, convert your datasets to the "),U=f(Ht,"CODE",{});var ae=m(U);k=l(ae,"tf.data.Dataset"),ae.forEach(e),$=l(Ht," format with "),w=f(Ht,"CODE",{});var oe=m(w);gt=l(oe,"to_tf_dataset"),oe.forEach(e),kt=l(Ht,`. Specify inputs and labels in the
`),X=f(Ht,"CODE",{});var le=m(X);W=l(le,"columns"),le.forEach(e),ft=l(Ht," argument:"),Ht.forEach(e),I=d(a),q(nt.$$.fragment,a),rt=d(a),T=f(a,"P",{});var ne=m(T);mt=l(ne,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),ne.forEach(e),j=d(a),q(ut.$$.fragment,a),Y=d(a),it=f(a,"P",{});var It=m(it);Ft=l(It,"Load your model with the "),ot=f(It,"A",{href:!0});var re=m(ot);B=l(re,"TFAutoModelForSequenceClassification"),re.forEach(e),$t=l(It," class along with the number of expected labels:"),It.forEach(e),t=d(a),q(n.$$.fragment,a),S=d(a),Pt=f(a,"P",{});var ie=m(Pt);Wt=l(ie,"Compile the model:"),ie.forEach(e),Dt=d(a),q(g.$$.fragment,a),At=d(a),vt=f(a,"P",{});var Jt=m(vt);Ot=l(Jt,"Finally, fine-tune the model by calling "),Tt=f(Jt,"CODE",{});var pe=m(Tt);bt=l(pe,"model.fit"),pe.forEach(e),Nt=l(Jt,":"),Jt.forEach(e),xt=d(a),q(Z.$$.fragment,a),this.h()},h(){ct(b,"id","pytorch-heading"),ct(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),ct(b,"href","#pytorch-heading"),ct(c,"class","relative group"),ct(st,"href","/docs/transformers/master/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),ct(tt,"id","smaller-pytorch-heading"),ct(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),ct(tt,"href","#smaller-pytorch-heading"),ct(L,"class","relative group"),ct(ot,"href","/docs/transformers/master/en/model_doc/auto#transformers.TFAutoModelForSequenceClassification")},m(a,y){r(a,c,y),s(c,b),s(b,i),z(u,i,null),s(c,x),s(c,O),s(O,Ct),r(a,ht,y),r(a,J,y),s(J,qt),r(a,_t,y),r(a,P,y),s(P,zt),s(P,st),s(st,at),s(P,M),s(P,V),s(V,h),s(P,jt),s(P,R),s(R,Et),s(P,yt),r(a,Q,y),z(lt,a,y),r(a,dt,y),r(a,L,y),s(L,tt),s(tt,pt),z(G,pt,null),s(L,D),s(L,et),s(et,H),r(a,wt,y),r(a,A,y),s(A,N),s(A,U),s(U,k),s(A,$),s(A,w),s(w,gt),s(A,kt),s(A,X),s(X,W),s(A,ft),r(a,I,y),z(nt,a,y),r(a,rt,y),r(a,T,y),s(T,mt),r(a,j,y),z(ut,a,y),r(a,Y,y),r(a,it,y),s(it,Ft),s(it,ot),s(ot,B),s(it,$t),r(a,t,y),z(n,a,y),r(a,S,y),r(a,Pt,y),s(Pt,Wt),r(a,Dt,y),z(g,a,y),r(a,At,y),r(a,vt,y),s(vt,Ot),s(vt,Tt),s(Tt,bt),s(vt,Nt),r(a,xt,y),z(Z,a,y),Mt=!0},p:Rt,i(a){Mt||(E(u.$$.fragment,a),E(lt.$$.fragment,a),E(G.$$.fragment,a),E(nt.$$.fragment,a),E(ut.$$.fragment,a),E(n.$$.fragment,a),E(g.$$.fragment,a),E(Z.$$.fragment,a),Mt=!0)},o(a){C(u.$$.fragment,a),C(lt.$$.fragment,a),C(G.$$.fragment,a),C(nt.$$.fragment,a),C(ut.$$.fragment,a),C(n.$$.fragment,a),C(g.$$.fragment,a),C(Z.$$.fragment,a),Mt=!1},d(a){a&&e(c),F(u),a&&e(ht),a&&e(J),a&&e(_t),a&&e(P),a&&e(Q),F(lt,a),a&&e(dt),a&&e(L),F(G),a&&e(wt),a&&e(A),a&&e(I),F(nt,a),a&&e(rt),a&&e(T),a&&e(j),F(ut,a),a&&e(Y),a&&e(it),a&&e(t),F(n,a),a&&e(S),a&&e(Pt),a&&e(Dt),F(g,a),a&&e(At),a&&e(vt),a&&e(xt),F(Z,a)}}}function $e(St){let c,b;return c=new Gt({props:{$$slots:{default:[he]},$$scope:{ctx:St}}}),{c(){v(c.$$.fragment)},l(i){q(c.$$.fragment,i)},m(i,u){z(c,i,u),b=!0},p(i,u){const x={};u&2&&(x.$$scope={dirty:u,ctx:i}),c.$set(x)},i(i){b||(E(c.$$.fragment,i),b=!0)},o(i){C(c.$$.fragment,i),b=!1},d(i){F(c,i)}}}function be(St){let c,b,i,u,x,O,Ct,ht,J,qt,_t,P,zt,st,at,M,V,h,jt,R,Et,yt,Q,lt,dt,L,tt,pt,G,D,et,H,wt,A,N,U,k,$,w,gt,kt,X,W,ft,I,nt,rt,T,mt,j,ut,Y,it,Ft,ot,B,$t,t,n,S,Pt,Wt,Dt,g,At,vt,Ot,Tt,bt,Nt,xt,Z,Mt;return u=new fe({}),lt=new K({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),G=new fe({}),nt=new K({props:{code:`tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)`}}),ut=new K({props:{code:`from transformers import create_optimizer
import tensorflow as tf

batch_size = 16
num_epochs = 5
batches_per_epoch = len(tokenized_imdb["train"]) // batch_size
total_train_steps = int(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=2e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

batch_size = <span class="hljs-number">16</span>
num_epochs = <span class="hljs-number">5</span>
batches_per_epoch = <span class="hljs-built_in">len</span>(tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
total_train_steps = <span class="hljs-built_in">int</span>(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">2e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),n=new K({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),g=new K({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),Z=new K({props:{code:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`,highlighted:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`}}),{c(){c=p("h2"),b=p("a"),i=p("span"),v(u.$$.fragment),x=_(),O=p("span"),Ct=o("Tensorflow heading"),ht=_(),J=p("p"),qt=o("Fine-tuning with TensorFlow is just as easy, with only a few differences."),_t=_(),P=p("p"),zt=o("Start by batching the processed examples together with dynamic padding using the "),st=p("a"),at=o("DataCollatorWithPadding"),M=o(` function.
Make sure you set `),V=p("code"),h=o('return_tensors="tf"'),jt=o(" to return "),R=p("code"),Et=o("tf.Tensor"),yt=o(" outputs instead of PyTorch tensors!"),Q=_(),v(lt.$$.fragment),dt=_(),L=p("h3"),tt=p("a"),pt=p("span"),v(G.$$.fragment),D=_(),et=p("span"),H=o("Smaller Tensorflow heading"),wt=_(),A=p("p"),N=o("Next, convert your datasets to the "),U=p("code"),k=o("tf.data.Dataset"),$=o(" format with "),w=p("code"),gt=o("to_tf_dataset"),kt=o(`. Specify inputs and labels in the
`),X=p("code"),W=o("columns"),ft=o(" argument:"),I=_(),v(nt.$$.fragment),rt=_(),T=p("p"),mt=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),j=_(),v(ut.$$.fragment),Y=_(),it=p("p"),Ft=o("Load your model with the "),ot=p("a"),B=o("TFAutoModelForSequenceClassification"),$t=o(" class along with the number of expected labels:"),t=_(),v(n.$$.fragment),S=_(),Pt=p("p"),Wt=o("Compile the model:"),Dt=_(),v(g.$$.fragment),At=_(),vt=p("p"),Ot=o("Finally, fine-tune the model by calling "),Tt=p("code"),bt=o("model.fit"),Nt=o(":"),xt=_(),v(Z.$$.fragment),this.h()},l(a){c=f(a,"H2",{class:!0});var y=m(c);b=f(y,"A",{id:!0,class:!0,href:!0});var Kt=m(b);i=f(Kt,"SPAN",{});var Qt=m(i);q(u.$$.fragment,Qt),Qt.forEach(e),Kt.forEach(e),x=d(y),O=f(y,"SPAN",{});var Ut=m(O);Ct=l(Ut,"Tensorflow heading"),Ut.forEach(e),y.forEach(e),ht=d(a),J=f(a,"P",{});var Vt=m(J);qt=l(Vt,"Fine-tuning with TensorFlow is just as easy, with only a few differences."),Vt.forEach(e),_t=d(a),P=f(a,"P",{});var Lt=m(P);zt=l(Lt,"Start by batching the processed examples together with dynamic padding using the "),st=f(Lt,"A",{href:!0});var Xt=m(st);at=l(Xt,"DataCollatorWithPadding"),Xt.forEach(e),M=l(Lt,` function.
Make sure you set `),V=f(Lt,"CODE",{});var Yt=m(V);h=l(Yt,'return_tensors="tf"'),Yt.forEach(e),jt=l(Lt," to return "),R=f(Lt,"CODE",{});var Zt=m(R);Et=l(Zt,"tf.Tensor"),Zt.forEach(e),yt=l(Lt," outputs instead of PyTorch tensors!"),Lt.forEach(e),Q=d(a),q(lt.$$.fragment,a),dt=d(a),L=f(a,"H3",{class:!0});var Bt=m(L);tt=f(Bt,"A",{id:!0,class:!0,href:!0});var te=m(tt);pt=f(te,"SPAN",{});var ee=m(pt);q(G.$$.fragment,ee),ee.forEach(e),te.forEach(e),D=d(Bt),et=f(Bt,"SPAN",{});var se=m(et);H=l(se,"Smaller Tensorflow heading"),se.forEach(e),Bt.forEach(e),wt=d(a),A=f(a,"P",{});var Ht=m(A);N=l(Ht,"Next, convert your datasets to the "),U=f(Ht,"CODE",{});var ae=m(U);k=l(ae,"tf.data.Dataset"),ae.forEach(e),$=l(Ht," format with "),w=f(Ht,"CODE",{});var oe=m(w);gt=l(oe,"to_tf_dataset"),oe.forEach(e),kt=l(Ht,`. Specify inputs and labels in the
`),X=f(Ht,"CODE",{});var le=m(X);W=l(le,"columns"),le.forEach(e),ft=l(Ht," argument:"),Ht.forEach(e),I=d(a),q(nt.$$.fragment,a),rt=d(a),T=f(a,"P",{});var ne=m(T);mt=l(ne,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),ne.forEach(e),j=d(a),q(ut.$$.fragment,a),Y=d(a),it=f(a,"P",{});var It=m(it);Ft=l(It,"Load your model with the "),ot=f(It,"A",{href:!0});var re=m(ot);B=l(re,"TFAutoModelForSequenceClassification"),re.forEach(e),$t=l(It," class along with the number of expected labels:"),It.forEach(e),t=d(a),q(n.$$.fragment,a),S=d(a),Pt=f(a,"P",{});var ie=m(Pt);Wt=l(ie,"Compile the model:"),ie.forEach(e),Dt=d(a),q(g.$$.fragment,a),At=d(a),vt=f(a,"P",{});var Jt=m(vt);Ot=l(Jt,"Finally, fine-tune the model by calling "),Tt=f(Jt,"CODE",{});var pe=m(Tt);bt=l(pe,"model.fit"),pe.forEach(e),Nt=l(Jt,":"),Jt.forEach(e),xt=d(a),q(Z.$$.fragment,a),this.h()},h(){ct(b,"id","tensorflow-heading"),ct(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),ct(b,"href","#tensorflow-heading"),ct(c,"class","relative group"),ct(st,"href","/docs/transformers/master/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),ct(tt,"id","smaller-tensorflow-heading"),ct(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),ct(tt,"href","#smaller-tensorflow-heading"),ct(L,"class","relative group"),ct(ot,"href","/docs/transformers/master/en/model_doc/auto#transformers.TFAutoModelForSequenceClassification")},m(a,y){r(a,c,y),s(c,b),s(b,i),z(u,i,null),s(c,x),s(c,O),s(O,Ct),r(a,ht,y),r(a,J,y),s(J,qt),r(a,_t,y),r(a,P,y),s(P,zt),s(P,st),s(st,at),s(P,M),s(P,V),s(V,h),s(P,jt),s(P,R),s(R,Et),s(P,yt),r(a,Q,y),z(lt,a,y),r(a,dt,y),r(a,L,y),s(L,tt),s(tt,pt),z(G,pt,null),s(L,D),s(L,et),s(et,H),r(a,wt,y),r(a,A,y),s(A,N),s(A,U),s(U,k),s(A,$),s(A,w),s(w,gt),s(A,kt),s(A,X),s(X,W),s(A,ft),r(a,I,y),z(nt,a,y),r(a,rt,y),r(a,T,y),s(T,mt),r(a,j,y),z(ut,a,y),r(a,Y,y),r(a,it,y),s(it,Ft),s(it,ot),s(ot,B),s(it,$t),r(a,t,y),z(n,a,y),r(a,S,y),r(a,Pt,y),s(Pt,Wt),r(a,Dt,y),z(g,a,y),r(a,At,y),r(a,vt,y),s(vt,Ot),s(vt,Tt),s(Tt,bt),s(vt,Nt),r(a,xt,y),z(Z,a,y),Mt=!0},p:Rt,i(a){Mt||(E(u.$$.fragment,a),E(lt.$$.fragment,a),E(G.$$.fragment,a),E(nt.$$.fragment,a),E(ut.$$.fragment,a),E(n.$$.fragment,a),E(g.$$.fragment,a),E(Z.$$.fragment,a),Mt=!0)},o(a){C(u.$$.fragment,a),C(lt.$$.fragment,a),C(G.$$.fragment,a),C(nt.$$.fragment,a),C(ut.$$.fragment,a),C(n.$$.fragment,a),C(g.$$.fragment,a),C(Z.$$.fragment,a),Mt=!1},d(a){a&&e(c),F(u),a&&e(ht),a&&e(J),a&&e(_t),a&&e(P),a&&e(Q),F(lt,a),a&&e(dt),a&&e(L),F(G),a&&e(wt),a&&e(A),a&&e(I),F(nt,a),a&&e(rt),a&&e(T),a&&e(j),F(ut,a),a&&e(Y),a&&e(it),a&&e(t),F(n,a),a&&e(S),a&&e(Pt),a&&e(Dt),F(g,a),a&&e(At),a&&e(vt),a&&e(xt),F(Z,a)}}}function we(St){let c,b;return c=new Gt({props:{$$slots:{default:[be]},$$scope:{ctx:St}}}),{c(){v(c.$$.fragment)},l(i){q(c.$$.fragment,i)},m(i,u){z(c,i,u),b=!0},p(i,u){const x={};u&2&&(x.$$scope={dirty:u,ctx:i}),c.$set(x)},i(i){b||(E(c.$$.fragment,i),b=!0)},o(i){C(c.$$.fragment,i),b=!1},d(i){F(c,i)}}}function ge(St){let c,b,i,u,x,O,Ct,ht,J,qt,_t,P,zt,st,at,M,V,h,jt,R,Et,yt,Q,lt,dt,L,tt,pt,G,D,et,H,wt,A,N,U,k,$,w,gt,kt,X,W,ft,I,nt,rt,T,mt,j,ut,Y,it,Ft,ot,B,$t,t,n,S,Pt,Wt,Dt,g,At,vt,Ot,Tt,bt,Nt,xt,Z,Mt;return u=new fe({}),lt=new K({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),G=new fe({}),nt=new K({props:{code:`tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)`}}),ut=new K({props:{code:`from transformers import create_optimizer
import tensorflow as tf

batch_size = 16
num_epochs = 5
batches_per_epoch = len(tokenized_imdb["train"]) // batch_size
total_train_steps = int(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=2e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

batch_size = <span class="hljs-number">16</span>
num_epochs = <span class="hljs-number">5</span>
batches_per_epoch = <span class="hljs-built_in">len</span>(tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
total_train_steps = <span class="hljs-built_in">int</span>(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">2e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),n=new K({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),g=new K({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),Z=new K({props:{code:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`,highlighted:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`}}),{c(){c=p("h2"),b=p("a"),i=p("span"),v(u.$$.fragment),x=_(),O=p("span"),Ct=o("Flax heading"),ht=_(),J=p("p"),qt=o("Fine-tuning with TensorFlow is just as easy, with only a few differences."),_t=_(),P=p("p"),zt=o("Start by batching the processed examples together with dynamic padding using the "),st=p("a"),at=o("DataCollatorWithPadding"),M=o(` function.
Make sure you set `),V=p("code"),h=o('return_tensors="tf"'),jt=o(" to return "),R=p("code"),Et=o("tf.Tensor"),yt=o(" outputs instead of PyTorch tensors!"),Q=_(),v(lt.$$.fragment),dt=_(),L=p("h3"),tt=p("a"),pt=p("span"),v(G.$$.fragment),D=_(),et=p("span"),H=o("Smaller Flax heading"),wt=_(),A=p("p"),N=o("Next, convert your datasets to the "),U=p("code"),k=o("tf.data.Dataset"),$=o(" format with "),w=p("code"),gt=o("to_tf_dataset"),kt=o(`. Specify inputs and labels in the
`),X=p("code"),W=o("columns"),ft=o(" argument:"),I=_(),v(nt.$$.fragment),rt=_(),T=p("p"),mt=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),j=_(),v(ut.$$.fragment),Y=_(),it=p("p"),Ft=o("Load your model with the "),ot=p("a"),B=o("TFAutoModelForSequenceClassification"),$t=o(" class along with the number of expected labels:"),t=_(),v(n.$$.fragment),S=_(),Pt=p("p"),Wt=o("Compile the model:"),Dt=_(),v(g.$$.fragment),At=_(),vt=p("p"),Ot=o("Finally, fine-tune the model by calling "),Tt=p("code"),bt=o("model.fit"),Nt=o(":"),xt=_(),v(Z.$$.fragment),this.h()},l(a){c=f(a,"H2",{class:!0});var y=m(c);b=f(y,"A",{id:!0,class:!0,href:!0});var Kt=m(b);i=f(Kt,"SPAN",{});var Qt=m(i);q(u.$$.fragment,Qt),Qt.forEach(e),Kt.forEach(e),x=d(y),O=f(y,"SPAN",{});var Ut=m(O);Ct=l(Ut,"Flax heading"),Ut.forEach(e),y.forEach(e),ht=d(a),J=f(a,"P",{});var Vt=m(J);qt=l(Vt,"Fine-tuning with TensorFlow is just as easy, with only a few differences."),Vt.forEach(e),_t=d(a),P=f(a,"P",{});var Lt=m(P);zt=l(Lt,"Start by batching the processed examples together with dynamic padding using the "),st=f(Lt,"A",{href:!0});var Xt=m(st);at=l(Xt,"DataCollatorWithPadding"),Xt.forEach(e),M=l(Lt,` function.
Make sure you set `),V=f(Lt,"CODE",{});var Yt=m(V);h=l(Yt,'return_tensors="tf"'),Yt.forEach(e),jt=l(Lt," to return "),R=f(Lt,"CODE",{});var Zt=m(R);Et=l(Zt,"tf.Tensor"),Zt.forEach(e),yt=l(Lt," outputs instead of PyTorch tensors!"),Lt.forEach(e),Q=d(a),q(lt.$$.fragment,a),dt=d(a),L=f(a,"H3",{class:!0});var Bt=m(L);tt=f(Bt,"A",{id:!0,class:!0,href:!0});var te=m(tt);pt=f(te,"SPAN",{});var ee=m(pt);q(G.$$.fragment,ee),ee.forEach(e),te.forEach(e),D=d(Bt),et=f(Bt,"SPAN",{});var se=m(et);H=l(se,"Smaller Flax heading"),se.forEach(e),Bt.forEach(e),wt=d(a),A=f(a,"P",{});var Ht=m(A);N=l(Ht,"Next, convert your datasets to the "),U=f(Ht,"CODE",{});var ae=m(U);k=l(ae,"tf.data.Dataset"),ae.forEach(e),$=l(Ht," format with "),w=f(Ht,"CODE",{});var oe=m(w);gt=l(oe,"to_tf_dataset"),oe.forEach(e),kt=l(Ht,`. Specify inputs and labels in the
`),X=f(Ht,"CODE",{});var le=m(X);W=l(le,"columns"),le.forEach(e),ft=l(Ht," argument:"),Ht.forEach(e),I=d(a),q(nt.$$.fragment,a),rt=d(a),T=f(a,"P",{});var ne=m(T);mt=l(ne,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),ne.forEach(e),j=d(a),q(ut.$$.fragment,a),Y=d(a),it=f(a,"P",{});var It=m(it);Ft=l(It,"Load your model with the "),ot=f(It,"A",{href:!0});var re=m(ot);B=l(re,"TFAutoModelForSequenceClassification"),re.forEach(e),$t=l(It," class along with the number of expected labels:"),It.forEach(e),t=d(a),q(n.$$.fragment,a),S=d(a),Pt=f(a,"P",{});var ie=m(Pt);Wt=l(ie,"Compile the model:"),ie.forEach(e),Dt=d(a),q(g.$$.fragment,a),At=d(a),vt=f(a,"P",{});var Jt=m(vt);Ot=l(Jt,"Finally, fine-tune the model by calling "),Tt=f(Jt,"CODE",{});var pe=m(Tt);bt=l(pe,"model.fit"),pe.forEach(e),Nt=l(Jt,":"),Jt.forEach(e),xt=d(a),q(Z.$$.fragment,a),this.h()},h(){ct(b,"id","flax-heading"),ct(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),ct(b,"href","#flax-heading"),ct(c,"class","relative group"),ct(st,"href","/docs/transformers/master/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),ct(tt,"id","smaller-flax-heading"),ct(tt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),ct(tt,"href","#smaller-flax-heading"),ct(L,"class","relative group"),ct(ot,"href","/docs/transformers/master/en/model_doc/auto#transformers.TFAutoModelForSequenceClassification")},m(a,y){r(a,c,y),s(c,b),s(b,i),z(u,i,null),s(c,x),s(c,O),s(O,Ct),r(a,ht,y),r(a,J,y),s(J,qt),r(a,_t,y),r(a,P,y),s(P,zt),s(P,st),s(st,at),s(P,M),s(P,V),s(V,h),s(P,jt),s(P,R),s(R,Et),s(P,yt),r(a,Q,y),z(lt,a,y),r(a,dt,y),r(a,L,y),s(L,tt),s(tt,pt),z(G,pt,null),s(L,D),s(L,et),s(et,H),r(a,wt,y),r(a,A,y),s(A,N),s(A,U),s(U,k),s(A,$),s(A,w),s(w,gt),s(A,kt),s(A,X),s(X,W),s(A,ft),r(a,I,y),z(nt,a,y),r(a,rt,y),r(a,T,y),s(T,mt),r(a,j,y),z(ut,a,y),r(a,Y,y),r(a,it,y),s(it,Ft),s(it,ot),s(ot,B),s(it,$t),r(a,t,y),z(n,a,y),r(a,S,y),r(a,Pt,y),s(Pt,Wt),r(a,Dt,y),z(g,a,y),r(a,At,y),r(a,vt,y),s(vt,Ot),s(vt,Tt),s(Tt,bt),s(vt,Nt),r(a,xt,y),z(Z,a,y),Mt=!0},p:Rt,i(a){Mt||(E(u.$$.fragment,a),E(lt.$$.fragment,a),E(G.$$.fragment,a),E(nt.$$.fragment,a),E(ut.$$.fragment,a),E(n.$$.fragment,a),E(g.$$.fragment,a),E(Z.$$.fragment,a),Mt=!0)},o(a){C(u.$$.fragment,a),C(lt.$$.fragment,a),C(G.$$.fragment,a),C(nt.$$.fragment,a),C(ut.$$.fragment,a),C(n.$$.fragment,a),C(g.$$.fragment,a),C(Z.$$.fragment,a),Mt=!1},d(a){a&&e(c),F(u),a&&e(ht),a&&e(J),a&&e(_t),a&&e(P),a&&e(Q),F(lt,a),a&&e(dt),a&&e(L),F(G),a&&e(wt),a&&e(A),a&&e(I),F(nt,a),a&&e(rt),a&&e(T),a&&e(j),F(ut,a),a&&e(Y),a&&e(it),a&&e(t),F(n,a),a&&e(S),a&&e(Pt),a&&e(Dt),F(g,a),a&&e(At),a&&e(vt),a&&e(xt),F(Z,a)}}}function ye(St){let c,b;return c=new Gt({props:{$$slots:{default:[ge]},$$scope:{ctx:St}}}),{c(){v(c.$$.fragment)},l(i){q(c.$$.fragment,i)},m(i,u){z(c,i,u),b=!0},p(i,u){const x={};u&2&&(x.$$scope={dirty:u,ctx:i}),c.$set(x)},i(i){b||(E(c.$$.fragment,i),b=!0)},o(i){C(c.$$.fragment,i),b=!1},d(i){F(c,i)}}}function je(St){let c,b,i,u,x,O,Ct,ht,J,qt,_t,P,zt,st,at,M,V,h,jt,R,Et,yt,Q,lt,dt,L,tt,pt,G,D,et,H,wt,A,N,U,k,$,w,gt,kt,X,W,ft,I,nt,rt,T,mt,j,ut,Y,it,Ft,ot,B,$t;return M=new K({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),D=new K({props:{code:`tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)`}}),N=new K({props:{code:`from transformers import create_optimizer
import tensorflow as tf

batch_size = 16
num_epochs = 5
batches_per_epoch = len(tokenized_imdb["train"]) // batch_size
total_train_steps = int(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=2e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

batch_size = <span class="hljs-number">16</span>
num_epochs = <span class="hljs-number">5</span>
batches_per_epoch = <span class="hljs-built_in">len</span>(tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
total_train_steps = <span class="hljs-built_in">int</span>(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">2e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),W=new K({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),T=new K({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),B=new K({props:{code:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`,highlighted:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`}}),{c(){c=p("p"),b=o("Fine-tuning with TensorFlow is just as easy, with only a few differences."),i=_(),u=p("p"),x=o("Start by batching the processed examples together with dynamic padding using the "),O=p("a"),Ct=o("DataCollatorWithPadding"),ht=o(` function.
Make sure you set `),J=p("code"),qt=o('return_tensors="tf"'),_t=o(" to return "),P=p("code"),zt=o("tf.Tensor"),st=o(" outputs instead of PyTorch tensors!"),at=_(),v(M.$$.fragment),V=_(),h=p("p"),jt=o("Next, convert your datasets to the "),R=p("code"),Et=o("tf.data.Dataset"),yt=o(" format with "),Q=p("code"),lt=o("to_tf_dataset"),dt=o(`. Specify inputs and labels in the
`),L=p("code"),tt=o("columns"),pt=o(" argument:"),G=_(),v(D.$$.fragment),et=_(),H=p("p"),wt=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),A=_(),v(N.$$.fragment),U=_(),k=p("p"),$=o("Load your model with the "),w=p("a"),gt=o("TFAutoModelForSequenceClassification"),kt=o(" class along with the number of expected labels:"),X=_(),v(W.$$.fragment),ft=_(),I=p("p"),nt=o("Compile the model:"),rt=_(),v(T.$$.fragment),mt=_(),j=p("p"),ut=o("Finally, fine-tune the model by calling "),Y=p("code"),it=o("model.fit"),Ft=o(":"),ot=_(),v(B.$$.fragment),this.h()},l(t){c=f(t,"P",{});var n=m(c);b=l(n,"Fine-tuning with TensorFlow is just as easy, with only a few differences."),n.forEach(e),i=d(t),u=f(t,"P",{});var S=m(u);x=l(S,"Start by batching the processed examples together with dynamic padding using the "),O=f(S,"A",{href:!0});var Pt=m(O);Ct=l(Pt,"DataCollatorWithPadding"),Pt.forEach(e),ht=l(S,` function.
Make sure you set `),J=f(S,"CODE",{});var Wt=m(J);qt=l(Wt,'return_tensors="tf"'),Wt.forEach(e),_t=l(S," to return "),P=f(S,"CODE",{});var Dt=m(P);zt=l(Dt,"tf.Tensor"),Dt.forEach(e),st=l(S," outputs instead of PyTorch tensors!"),S.forEach(e),at=d(t),q(M.$$.fragment,t),V=d(t),h=f(t,"P",{});var g=m(h);jt=l(g,"Next, convert your datasets to the "),R=f(g,"CODE",{});var At=m(R);Et=l(At,"tf.data.Dataset"),At.forEach(e),yt=l(g," format with "),Q=f(g,"CODE",{});var vt=m(Q);lt=l(vt,"to_tf_dataset"),vt.forEach(e),dt=l(g,`. Specify inputs and labels in the
`),L=f(g,"CODE",{});var Ot=m(L);tt=l(Ot,"columns"),Ot.forEach(e),pt=l(g," argument:"),g.forEach(e),G=d(t),q(D.$$.fragment,t),et=d(t),H=f(t,"P",{});var Tt=m(H);wt=l(Tt,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Tt.forEach(e),A=d(t),q(N.$$.fragment,t),U=d(t),k=f(t,"P",{});var bt=m(k);$=l(bt,"Load your model with the "),w=f(bt,"A",{href:!0});var Nt=m(w);gt=l(Nt,"TFAutoModelForSequenceClassification"),Nt.forEach(e),kt=l(bt," class along with the number of expected labels:"),bt.forEach(e),X=d(t),q(W.$$.fragment,t),ft=d(t),I=f(t,"P",{});var xt=m(I);nt=l(xt,"Compile the model:"),xt.forEach(e),rt=d(t),q(T.$$.fragment,t),mt=d(t),j=f(t,"P",{});var Z=m(j);ut=l(Z,"Finally, fine-tune the model by calling "),Y=f(Z,"CODE",{});var Mt=m(Y);it=l(Mt,"model.fit"),Mt.forEach(e),Ft=l(Z,":"),Z.forEach(e),ot=d(t),q(B.$$.fragment,t),this.h()},h(){ct(O,"href","/docs/transformers/master/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),ct(w,"href","/docs/transformers/master/en/model_doc/auto#transformers.TFAutoModelForSequenceClassification")},m(t,n){r(t,c,n),s(c,b),r(t,i,n),r(t,u,n),s(u,x),s(u,O),s(O,Ct),s(u,ht),s(u,J),s(J,qt),s(u,_t),s(u,P),s(P,zt),s(u,st),r(t,at,n),z(M,t,n),r(t,V,n),r(t,h,n),s(h,jt),s(h,R),s(R,Et),s(h,yt),s(h,Q),s(Q,lt),s(h,dt),s(h,L),s(L,tt),s(h,pt),r(t,G,n),z(D,t,n),r(t,et,n),r(t,H,n),s(H,wt),r(t,A,n),z(N,t,n),r(t,U,n),r(t,k,n),s(k,$),s(k,w),s(w,gt),s(k,kt),r(t,X,n),z(W,t,n),r(t,ft,n),r(t,I,n),s(I,nt),r(t,rt,n),z(T,t,n),r(t,mt,n),r(t,j,n),s(j,ut),s(j,Y),s(Y,it),s(j,Ft),r(t,ot,n),z(B,t,n),$t=!0},p:Rt,i(t){$t||(E(M.$$.fragment,t),E(D.$$.fragment,t),E(N.$$.fragment,t),E(W.$$.fragment,t),E(T.$$.fragment,t),E(B.$$.fragment,t),$t=!0)},o(t){C(M.$$.fragment,t),C(D.$$.fragment,t),C(N.$$.fragment,t),C(W.$$.fragment,t),C(T.$$.fragment,t),C(B.$$.fragment,t),$t=!1},d(t){t&&e(c),t&&e(i),t&&e(u),t&&e(at),F(M,t),t&&e(V),t&&e(h),t&&e(G),F(D,t),t&&e(et),t&&e(H),t&&e(A),F(N,t),t&&e(U),t&&e(k),t&&e(X),F(W,t),t&&e(ft),t&&e(I),t&&e(rt),F(T,t),t&&e(mt),t&&e(j),t&&e(ot),F(B,t)}}}function ke(St){let c,b;return c=new Gt({props:{$$slots:{default:[je]},$$scope:{ctx:St}}}),{c(){v(c.$$.fragment)},l(i){q(c.$$.fragment,i)},m(i,u){z(c,i,u),b=!0},p(i,u){const x={};u&2&&(x.$$scope={dirty:u,ctx:i}),c.$set(x)},i(i){b||(E(c.$$.fragment,i),b=!0)},o(i){C(c.$$.fragment,i),b=!1},d(i){F(c,i)}}}function ve(St){let c,b,i,u,x,O,Ct,ht,J,qt,_t,P,zt,st,at,M,V,h,jt,R,Et,yt,Q,lt,dt,L,tt,pt,G,D,et,H,wt,A,N,U,k,$,w,gt,kt,X,W,ft,I,nt,rt,T,mt,j,ut,Y,it,Ft,ot,B,$t;return M=new K({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),D=new K({props:{code:`tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)`}}),N=new K({props:{code:`from transformers import create_optimizer
import tensorflow as tf

batch_size = 16
num_epochs = 5
batches_per_epoch = len(tokenized_imdb["train"]) // batch_size
total_train_steps = int(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=2e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

batch_size = <span class="hljs-number">16</span>
num_epochs = <span class="hljs-number">5</span>
batches_per_epoch = <span class="hljs-built_in">len</span>(tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
total_train_steps = <span class="hljs-built_in">int</span>(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">2e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),W=new K({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),T=new K({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),B=new K({props:{code:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`,highlighted:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`}}),{c(){c=p("p"),b=o("Fine-tuning with TensorFlow is just as easy, with only a few differences."),i=_(),u=p("p"),x=o("Start by batching the processed examples together with dynamic padding using the "),O=p("a"),Ct=o("DataCollatorWithPadding"),ht=o(` function.
Make sure you set `),J=p("code"),qt=o('return_tensors="tf"'),_t=o(" to return "),P=p("code"),zt=o("tf.Tensor"),st=o(" outputs instead of PyTorch tensors!"),at=_(),v(M.$$.fragment),V=_(),h=p("p"),jt=o("Next, convert your datasets to the "),R=p("code"),Et=o("tf.data.Dataset"),yt=o(" format with "),Q=p("code"),lt=o("to_tf_dataset"),dt=o(`. Specify inputs and labels in the
`),L=p("code"),tt=o("columns"),pt=o(" argument:"),G=_(),v(D.$$.fragment),et=_(),H=p("p"),wt=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),A=_(),v(N.$$.fragment),U=_(),k=p("p"),$=o("Load your model with the "),w=p("a"),gt=o("TFAutoModelForSequenceClassification"),kt=o(" class along with the number of expected labels:"),X=_(),v(W.$$.fragment),ft=_(),I=p("p"),nt=o("Compile the model:"),rt=_(),v(T.$$.fragment),mt=_(),j=p("p"),ut=o("Finally, fine-tune the model by calling "),Y=p("code"),it=o("model.fit"),Ft=o(":"),ot=_(),v(B.$$.fragment),this.h()},l(t){c=f(t,"P",{});var n=m(c);b=l(n,"Fine-tuning with TensorFlow is just as easy, with only a few differences."),n.forEach(e),i=d(t),u=f(t,"P",{});var S=m(u);x=l(S,"Start by batching the processed examples together with dynamic padding using the "),O=f(S,"A",{href:!0});var Pt=m(O);Ct=l(Pt,"DataCollatorWithPadding"),Pt.forEach(e),ht=l(S,` function.
Make sure you set `),J=f(S,"CODE",{});var Wt=m(J);qt=l(Wt,'return_tensors="tf"'),Wt.forEach(e),_t=l(S," to return "),P=f(S,"CODE",{});var Dt=m(P);zt=l(Dt,"tf.Tensor"),Dt.forEach(e),st=l(S," outputs instead of PyTorch tensors!"),S.forEach(e),at=d(t),q(M.$$.fragment,t),V=d(t),h=f(t,"P",{});var g=m(h);jt=l(g,"Next, convert your datasets to the "),R=f(g,"CODE",{});var At=m(R);Et=l(At,"tf.data.Dataset"),At.forEach(e),yt=l(g," format with "),Q=f(g,"CODE",{});var vt=m(Q);lt=l(vt,"to_tf_dataset"),vt.forEach(e),dt=l(g,`. Specify inputs and labels in the
`),L=f(g,"CODE",{});var Ot=m(L);tt=l(Ot,"columns"),Ot.forEach(e),pt=l(g," argument:"),g.forEach(e),G=d(t),q(D.$$.fragment,t),et=d(t),H=f(t,"P",{});var Tt=m(H);wt=l(Tt,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Tt.forEach(e),A=d(t),q(N.$$.fragment,t),U=d(t),k=f(t,"P",{});var bt=m(k);$=l(bt,"Load your model with the "),w=f(bt,"A",{href:!0});var Nt=m(w);gt=l(Nt,"TFAutoModelForSequenceClassification"),Nt.forEach(e),kt=l(bt," class along with the number of expected labels:"),bt.forEach(e),X=d(t),q(W.$$.fragment,t),ft=d(t),I=f(t,"P",{});var xt=m(I);nt=l(xt,"Compile the model:"),xt.forEach(e),rt=d(t),q(T.$$.fragment,t),mt=d(t),j=f(t,"P",{});var Z=m(j);ut=l(Z,"Finally, fine-tune the model by calling "),Y=f(Z,"CODE",{});var Mt=m(Y);it=l(Mt,"model.fit"),Mt.forEach(e),Ft=l(Z,":"),Z.forEach(e),ot=d(t),q(B.$$.fragment,t),this.h()},h(){ct(O,"href","/docs/transformers/master/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),ct(w,"href","/docs/transformers/master/en/model_doc/auto#transformers.TFAutoModelForSequenceClassification")},m(t,n){r(t,c,n),s(c,b),r(t,i,n),r(t,u,n),s(u,x),s(u,O),s(O,Ct),s(u,ht),s(u,J),s(J,qt),s(u,_t),s(u,P),s(P,zt),s(u,st),r(t,at,n),z(M,t,n),r(t,V,n),r(t,h,n),s(h,jt),s(h,R),s(R,Et),s(h,yt),s(h,Q),s(Q,lt),s(h,dt),s(h,L),s(L,tt),s(h,pt),r(t,G,n),z(D,t,n),r(t,et,n),r(t,H,n),s(H,wt),r(t,A,n),z(N,t,n),r(t,U,n),r(t,k,n),s(k,$),s(k,w),s(w,gt),s(k,kt),r(t,X,n),z(W,t,n),r(t,ft,n),r(t,I,n),s(I,nt),r(t,rt,n),z(T,t,n),r(t,mt,n),r(t,j,n),s(j,ut),s(j,Y),s(Y,it),s(j,Ft),r(t,ot,n),z(B,t,n),$t=!0},p:Rt,i(t){$t||(E(M.$$.fragment,t),E(D.$$.fragment,t),E(N.$$.fragment,t),E(W.$$.fragment,t),E(T.$$.fragment,t),E(B.$$.fragment,t),$t=!0)},o(t){C(M.$$.fragment,t),C(D.$$.fragment,t),C(N.$$.fragment,t),C(W.$$.fragment,t),C(T.$$.fragment,t),C(B.$$.fragment,t),$t=!1},d(t){t&&e(c),t&&e(i),t&&e(u),t&&e(at),F(M,t),t&&e(V),t&&e(h),t&&e(G),F(D,t),t&&e(et),t&&e(H),t&&e(A),F(N,t),t&&e(U),t&&e(k),t&&e(X),F(W,t),t&&e(ft),t&&e(I),t&&e(rt),F(T,t),t&&e(mt),t&&e(j),t&&e(ot),F(B,t)}}}function qe(St){let c,b;return c=new Gt({props:{$$slots:{default:[ve]},$$scope:{ctx:St}}}),{c(){v(c.$$.fragment)},l(i){q(c.$$.fragment,i)},m(i,u){z(c,i,u),b=!0},p(i,u){const x={};u&2&&(x.$$scope={dirty:u,ctx:i}),c.$set(x)},i(i){b||(E(c.$$.fragment,i),b=!0)},o(i){C(c.$$.fragment,i),b=!1},d(i){F(c,i)}}}function ze(St){let c,b,i,u,x,O,Ct,ht,J,qt,_t,P,zt,st,at,M,V,h,jt,R,Et,yt,Q,lt,dt,L,tt,pt,G,D,et,H,wt,A,N,U,k,$,w,gt,kt,X,W,ft,I,nt,rt,T,mt,j,ut,Y,it,Ft,ot,B,$t;return M=new K({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),D=new K({props:{code:`tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)`}}),N=new K({props:{code:`from transformers import create_optimizer
import tensorflow as tf

batch_size = 16
num_epochs = 5
batches_per_epoch = len(tokenized_imdb["train"]) // batch_size
total_train_steps = int(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=2e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

batch_size = <span class="hljs-number">16</span>
num_epochs = <span class="hljs-number">5</span>
batches_per_epoch = <span class="hljs-built_in">len</span>(tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
total_train_steps = <span class="hljs-built_in">int</span>(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">2e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),W=new K({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),T=new K({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),B=new K({props:{code:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`,highlighted:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`}}),{c(){c=p("p"),b=o("Fine-tuning with TensorFlow is just as easy, with only a few differences."),i=_(),u=p("p"),x=o("Start by batching the processed examples together with dynamic padding using the "),O=p("a"),Ct=o("DataCollatorWithPadding"),ht=o(` function.
Make sure you set `),J=p("code"),qt=o('return_tensors="tf"'),_t=o(" to return "),P=p("code"),zt=o("tf.Tensor"),st=o(" outputs instead of PyTorch tensors!"),at=_(),v(M.$$.fragment),V=_(),h=p("p"),jt=o("Next, convert your datasets to the "),R=p("code"),Et=o("tf.data.Dataset"),yt=o(" format with "),Q=p("code"),lt=o("to_tf_dataset"),dt=o(`. Specify inputs and labels in the
`),L=p("code"),tt=o("columns"),pt=o(" argument:"),G=_(),v(D.$$.fragment),et=_(),H=p("p"),wt=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),A=_(),v(N.$$.fragment),U=_(),k=p("p"),$=o("Load your model with the "),w=p("a"),gt=o("TFAutoModelForSequenceClassification"),kt=o(" class along with the number of expected labels:"),X=_(),v(W.$$.fragment),ft=_(),I=p("p"),nt=o("Compile the model:"),rt=_(),v(T.$$.fragment),mt=_(),j=p("p"),ut=o("Finally, fine-tune the model by calling "),Y=p("code"),it=o("model.fit"),Ft=o(":"),ot=_(),v(B.$$.fragment),this.h()},l(t){c=f(t,"P",{});var n=m(c);b=l(n,"Fine-tuning with TensorFlow is just as easy, with only a few differences."),n.forEach(e),i=d(t),u=f(t,"P",{});var S=m(u);x=l(S,"Start by batching the processed examples together with dynamic padding using the "),O=f(S,"A",{href:!0});var Pt=m(O);Ct=l(Pt,"DataCollatorWithPadding"),Pt.forEach(e),ht=l(S,` function.
Make sure you set `),J=f(S,"CODE",{});var Wt=m(J);qt=l(Wt,'return_tensors="tf"'),Wt.forEach(e),_t=l(S," to return "),P=f(S,"CODE",{});var Dt=m(P);zt=l(Dt,"tf.Tensor"),Dt.forEach(e),st=l(S," outputs instead of PyTorch tensors!"),S.forEach(e),at=d(t),q(M.$$.fragment,t),V=d(t),h=f(t,"P",{});var g=m(h);jt=l(g,"Next, convert your datasets to the "),R=f(g,"CODE",{});var At=m(R);Et=l(At,"tf.data.Dataset"),At.forEach(e),yt=l(g," format with "),Q=f(g,"CODE",{});var vt=m(Q);lt=l(vt,"to_tf_dataset"),vt.forEach(e),dt=l(g,`. Specify inputs and labels in the
`),L=f(g,"CODE",{});var Ot=m(L);tt=l(Ot,"columns"),Ot.forEach(e),pt=l(g," argument:"),g.forEach(e),G=d(t),q(D.$$.fragment,t),et=d(t),H=f(t,"P",{});var Tt=m(H);wt=l(Tt,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Tt.forEach(e),A=d(t),q(N.$$.fragment,t),U=d(t),k=f(t,"P",{});var bt=m(k);$=l(bt,"Load your model with the "),w=f(bt,"A",{href:!0});var Nt=m(w);gt=l(Nt,"TFAutoModelForSequenceClassification"),Nt.forEach(e),kt=l(bt," class along with the number of expected labels:"),bt.forEach(e),X=d(t),q(W.$$.fragment,t),ft=d(t),I=f(t,"P",{});var xt=m(I);nt=l(xt,"Compile the model:"),xt.forEach(e),rt=d(t),q(T.$$.fragment,t),mt=d(t),j=f(t,"P",{});var Z=m(j);ut=l(Z,"Finally, fine-tune the model by calling "),Y=f(Z,"CODE",{});var Mt=m(Y);it=l(Mt,"model.fit"),Mt.forEach(e),Ft=l(Z,":"),Z.forEach(e),ot=d(t),q(B.$$.fragment,t),this.h()},h(){ct(O,"href","/docs/transformers/master/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),ct(w,"href","/docs/transformers/master/en/model_doc/auto#transformers.TFAutoModelForSequenceClassification")},m(t,n){r(t,c,n),s(c,b),r(t,i,n),r(t,u,n),s(u,x),s(u,O),s(O,Ct),s(u,ht),s(u,J),s(J,qt),s(u,_t),s(u,P),s(P,zt),s(u,st),r(t,at,n),z(M,t,n),r(t,V,n),r(t,h,n),s(h,jt),s(h,R),s(R,Et),s(h,yt),s(h,Q),s(Q,lt),s(h,dt),s(h,L),s(L,tt),s(h,pt),r(t,G,n),z(D,t,n),r(t,et,n),r(t,H,n),s(H,wt),r(t,A,n),z(N,t,n),r(t,U,n),r(t,k,n),s(k,$),s(k,w),s(w,gt),s(k,kt),r(t,X,n),z(W,t,n),r(t,ft,n),r(t,I,n),s(I,nt),r(t,rt,n),z(T,t,n),r(t,mt,n),r(t,j,n),s(j,ut),s(j,Y),s(Y,it),s(j,Ft),r(t,ot,n),z(B,t,n),$t=!0},p:Rt,i(t){$t||(E(M.$$.fragment,t),E(D.$$.fragment,t),E(N.$$.fragment,t),E(W.$$.fragment,t),E(T.$$.fragment,t),E(B.$$.fragment,t),$t=!0)},o(t){C(M.$$.fragment,t),C(D.$$.fragment,t),C(N.$$.fragment,t),C(W.$$.fragment,t),C(T.$$.fragment,t),C(B.$$.fragment,t),$t=!1},d(t){t&&e(c),t&&e(i),t&&e(u),t&&e(at),F(M,t),t&&e(V),t&&e(h),t&&e(G),F(D,t),t&&e(et),t&&e(H),t&&e(A),F(N,t),t&&e(U),t&&e(k),t&&e(X),F(W,t),t&&e(ft),t&&e(I),t&&e(rt),F(T,t),t&&e(mt),t&&e(j),t&&e(ot),F(B,t)}}}function Ee(St){let c,b;return c=new Gt({props:{$$slots:{default:[ze]},$$scope:{ctx:St}}}),{c(){v(c.$$.fragment)},l(i){q(c.$$.fragment,i)},m(i,u){z(c,i,u),b=!0},p(i,u){const x={};u&2&&(x.$$scope={dirty:u,ctx:i}),c.$set(x)},i(i){b||(E(c.$$.fragment,i),b=!0)},o(i){C(c.$$.fragment,i),b=!1},d(i){F(c,i)}}}function Ce(St){let c,b,i,u,x,O,Ct,ht,J,qt,_t,P,zt,st,at,M,V,h,jt,R,Et,yt,Q,lt,dt,L,tt,pt,G,D,et,H,wt,A,N,U,k,$,w,gt,kt,X,W,ft,I,nt,rt,T,mt,j,ut,Y,it,Ft,ot,B,$t;return M=new K({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),D=new K({props:{code:`tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)`}}),N=new K({props:{code:`from transformers import create_optimizer
import tensorflow as tf

batch_size = 16
num_epochs = 5
batches_per_epoch = len(tokenized_imdb["train"]) // batch_size
total_train_steps = int(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=2e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

batch_size = <span class="hljs-number">16</span>
num_epochs = <span class="hljs-number">5</span>
batches_per_epoch = <span class="hljs-built_in">len</span>(tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
total_train_steps = <span class="hljs-built_in">int</span>(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">2e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),W=new K({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),T=new K({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),B=new K({props:{code:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`,highlighted:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`}}),{c(){c=p("p"),b=o("Fine-tuning with TensorFlow is just as easy, with only a few differences."),i=_(),u=p("p"),x=o("Start by batching the processed examples together with dynamic padding using the "),O=p("a"),Ct=o("DataCollatorWithPadding"),ht=o(` function.
Make sure you set `),J=p("code"),qt=o('return_tensors="tf"'),_t=o(" to return "),P=p("code"),zt=o("tf.Tensor"),st=o(" outputs instead of PyTorch tensors!"),at=_(),v(M.$$.fragment),V=_(),h=p("p"),jt=o("Next, convert your datasets to the "),R=p("code"),Et=o("tf.data.Dataset"),yt=o(" format with "),Q=p("code"),lt=o("to_tf_dataset"),dt=o(`. Specify inputs and labels in the
`),L=p("code"),tt=o("columns"),pt=o(" argument:"),G=_(),v(D.$$.fragment),et=_(),H=p("p"),wt=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),A=_(),v(N.$$.fragment),U=_(),k=p("p"),$=o("Load your model with the "),w=p("a"),gt=o("TFAutoModelForSequenceClassification"),kt=o(" class along with the number of expected labels:"),X=_(),v(W.$$.fragment),ft=_(),I=p("p"),nt=o("Compile the model:"),rt=_(),v(T.$$.fragment),mt=_(),j=p("p"),ut=o("Finally, fine-tune the model by calling "),Y=p("code"),it=o("model.fit"),Ft=o(":"),ot=_(),v(B.$$.fragment),this.h()},l(t){c=f(t,"P",{});var n=m(c);b=l(n,"Fine-tuning with TensorFlow is just as easy, with only a few differences."),n.forEach(e),i=d(t),u=f(t,"P",{});var S=m(u);x=l(S,"Start by batching the processed examples together with dynamic padding using the "),O=f(S,"A",{href:!0});var Pt=m(O);Ct=l(Pt,"DataCollatorWithPadding"),Pt.forEach(e),ht=l(S,` function.
Make sure you set `),J=f(S,"CODE",{});var Wt=m(J);qt=l(Wt,'return_tensors="tf"'),Wt.forEach(e),_t=l(S," to return "),P=f(S,"CODE",{});var Dt=m(P);zt=l(Dt,"tf.Tensor"),Dt.forEach(e),st=l(S," outputs instead of PyTorch tensors!"),S.forEach(e),at=d(t),q(M.$$.fragment,t),V=d(t),h=f(t,"P",{});var g=m(h);jt=l(g,"Next, convert your datasets to the "),R=f(g,"CODE",{});var At=m(R);Et=l(At,"tf.data.Dataset"),At.forEach(e),yt=l(g," format with "),Q=f(g,"CODE",{});var vt=m(Q);lt=l(vt,"to_tf_dataset"),vt.forEach(e),dt=l(g,`. Specify inputs and labels in the
`),L=f(g,"CODE",{});var Ot=m(L);tt=l(Ot,"columns"),Ot.forEach(e),pt=l(g," argument:"),g.forEach(e),G=d(t),q(D.$$.fragment,t),et=d(t),H=f(t,"P",{});var Tt=m(H);wt=l(Tt,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Tt.forEach(e),A=d(t),q(N.$$.fragment,t),U=d(t),k=f(t,"P",{});var bt=m(k);$=l(bt,"Load your model with the "),w=f(bt,"A",{href:!0});var Nt=m(w);gt=l(Nt,"TFAutoModelForSequenceClassification"),Nt.forEach(e),kt=l(bt," class along with the number of expected labels:"),bt.forEach(e),X=d(t),q(W.$$.fragment,t),ft=d(t),I=f(t,"P",{});var xt=m(I);nt=l(xt,"Compile the model:"),xt.forEach(e),rt=d(t),q(T.$$.fragment,t),mt=d(t),j=f(t,"P",{});var Z=m(j);ut=l(Z,"Finally, fine-tune the model by calling "),Y=f(Z,"CODE",{});var Mt=m(Y);it=l(Mt,"model.fit"),Mt.forEach(e),Ft=l(Z,":"),Z.forEach(e),ot=d(t),q(B.$$.fragment,t),this.h()},h(){ct(O,"href","/docs/transformers/master/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),ct(w,"href","/docs/transformers/master/en/model_doc/auto#transformers.TFAutoModelForSequenceClassification")},m(t,n){r(t,c,n),s(c,b),r(t,i,n),r(t,u,n),s(u,x),s(u,O),s(O,Ct),s(u,ht),s(u,J),s(J,qt),s(u,_t),s(u,P),s(P,zt),s(u,st),r(t,at,n),z(M,t,n),r(t,V,n),r(t,h,n),s(h,jt),s(h,R),s(R,Et),s(h,yt),s(h,Q),s(Q,lt),s(h,dt),s(h,L),s(L,tt),s(h,pt),r(t,G,n),z(D,t,n),r(t,et,n),r(t,H,n),s(H,wt),r(t,A,n),z(N,t,n),r(t,U,n),r(t,k,n),s(k,$),s(k,w),s(w,gt),s(k,kt),r(t,X,n),z(W,t,n),r(t,ft,n),r(t,I,n),s(I,nt),r(t,rt,n),z(T,t,n),r(t,mt,n),r(t,j,n),s(j,ut),s(j,Y),s(Y,it),s(j,Ft),r(t,ot,n),z(B,t,n),$t=!0},p:Rt,i(t){$t||(E(M.$$.fragment,t),E(D.$$.fragment,t),E(N.$$.fragment,t),E(W.$$.fragment,t),E(T.$$.fragment,t),E(B.$$.fragment,t),$t=!0)},o(t){C(M.$$.fragment,t),C(D.$$.fragment,t),C(N.$$.fragment,t),C(W.$$.fragment,t),C(T.$$.fragment,t),C(B.$$.fragment,t),$t=!1},d(t){t&&e(c),t&&e(i),t&&e(u),t&&e(at),F(M,t),t&&e(V),t&&e(h),t&&e(G),F(D,t),t&&e(et),t&&e(H),t&&e(A),F(N,t),t&&e(U),t&&e(k),t&&e(X),F(W,t),t&&e(ft),t&&e(I),t&&e(rt),F(T,t),t&&e(mt),t&&e(j),t&&e(ot),F(B,t)}}}function Fe(St){let c,b;return c=new Gt({props:{$$slots:{default:[Ce]},$$scope:{ctx:St}}}),{c(){v(c.$$.fragment)},l(i){q(c.$$.fragment,i)},m(i,u){z(c,i,u),b=!0},p(i,u){const x={};u&2&&(x.$$scope={dirty:u,ctx:i}),c.$set(x)},i(i){b||(E(c.$$.fragment,i),b=!0)},o(i){C(c.$$.fragment,i),b=!1},d(i){F(c,i)}}}function Pe(St){let c,b,i,u,x,O,Ct,ht,J,qt,_t,P,zt,st,at,M,V,h,jt,R,Et,yt,Q,lt,dt,L,tt,pt,G,D,et,H,wt,A,N,U,k,$,w,gt,kt,X,W,ft,I,nt,rt,T,mt,j,ut,Y,it,Ft,ot,B,$t;return M=new K({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),D=new K({props:{code:`tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)`}}),N=new K({props:{code:`from transformers import create_optimizer
import tensorflow as tf

batch_size = 16
num_epochs = 5
batches_per_epoch = len(tokenized_imdb["train"]) // batch_size
total_train_steps = int(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=2e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

batch_size = <span class="hljs-number">16</span>
num_epochs = <span class="hljs-number">5</span>
batches_per_epoch = <span class="hljs-built_in">len</span>(tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
total_train_steps = <span class="hljs-built_in">int</span>(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">2e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),W=new K({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),T=new K({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),B=new K({props:{code:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`,highlighted:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`}}),{c(){c=p("p"),b=o("Fine-tuning with TensorFlow is just as easy, with only a few differences."),i=_(),u=p("p"),x=o("Start by batching the processed examples together with dynamic padding using the "),O=p("a"),Ct=o("DataCollatorWithPadding"),ht=o(` function.
Make sure you set `),J=p("code"),qt=o('return_tensors="tf"'),_t=o(" to return "),P=p("code"),zt=o("tf.Tensor"),st=o(" outputs instead of PyTorch tensors!"),at=_(),v(M.$$.fragment),V=_(),h=p("p"),jt=o("Next, convert your datasets to the "),R=p("code"),Et=o("tf.data.Dataset"),yt=o(" format with "),Q=p("code"),lt=o("to_tf_dataset"),dt=o(`. Specify inputs and labels in the
`),L=p("code"),tt=o("columns"),pt=o(" argument:"),G=_(),v(D.$$.fragment),et=_(),H=p("p"),wt=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),A=_(),v(N.$$.fragment),U=_(),k=p("p"),$=o("Load your model with the "),w=p("a"),gt=o("TFAutoModelForSequenceClassification"),kt=o(" class along with the number of expected labels:"),X=_(),v(W.$$.fragment),ft=_(),I=p("p"),nt=o("Compile the model:"),rt=_(),v(T.$$.fragment),mt=_(),j=p("p"),ut=o("Finally, fine-tune the model by calling "),Y=p("code"),it=o("model.fit"),Ft=o(":"),ot=_(),v(B.$$.fragment),this.h()},l(t){c=f(t,"P",{});var n=m(c);b=l(n,"Fine-tuning with TensorFlow is just as easy, with only a few differences."),n.forEach(e),i=d(t),u=f(t,"P",{});var S=m(u);x=l(S,"Start by batching the processed examples together with dynamic padding using the "),O=f(S,"A",{href:!0});var Pt=m(O);Ct=l(Pt,"DataCollatorWithPadding"),Pt.forEach(e),ht=l(S,` function.
Make sure you set `),J=f(S,"CODE",{});var Wt=m(J);qt=l(Wt,'return_tensors="tf"'),Wt.forEach(e),_t=l(S," to return "),P=f(S,"CODE",{});var Dt=m(P);zt=l(Dt,"tf.Tensor"),Dt.forEach(e),st=l(S," outputs instead of PyTorch tensors!"),S.forEach(e),at=d(t),q(M.$$.fragment,t),V=d(t),h=f(t,"P",{});var g=m(h);jt=l(g,"Next, convert your datasets to the "),R=f(g,"CODE",{});var At=m(R);Et=l(At,"tf.data.Dataset"),At.forEach(e),yt=l(g," format with "),Q=f(g,"CODE",{});var vt=m(Q);lt=l(vt,"to_tf_dataset"),vt.forEach(e),dt=l(g,`. Specify inputs and labels in the
`),L=f(g,"CODE",{});var Ot=m(L);tt=l(Ot,"columns"),Ot.forEach(e),pt=l(g," argument:"),g.forEach(e),G=d(t),q(D.$$.fragment,t),et=d(t),H=f(t,"P",{});var Tt=m(H);wt=l(Tt,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Tt.forEach(e),A=d(t),q(N.$$.fragment,t),U=d(t),k=f(t,"P",{});var bt=m(k);$=l(bt,"Load your model with the "),w=f(bt,"A",{href:!0});var Nt=m(w);gt=l(Nt,"TFAutoModelForSequenceClassification"),Nt.forEach(e),kt=l(bt," class along with the number of expected labels:"),bt.forEach(e),X=d(t),q(W.$$.fragment,t),ft=d(t),I=f(t,"P",{});var xt=m(I);nt=l(xt,"Compile the model:"),xt.forEach(e),rt=d(t),q(T.$$.fragment,t),mt=d(t),j=f(t,"P",{});var Z=m(j);ut=l(Z,"Finally, fine-tune the model by calling "),Y=f(Z,"CODE",{});var Mt=m(Y);it=l(Mt,"model.fit"),Mt.forEach(e),Ft=l(Z,":"),Z.forEach(e),ot=d(t),q(B.$$.fragment,t),this.h()},h(){ct(O,"href","/docs/transformers/master/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),ct(w,"href","/docs/transformers/master/en/model_doc/auto#transformers.TFAutoModelForSequenceClassification")},m(t,n){r(t,c,n),s(c,b),r(t,i,n),r(t,u,n),s(u,x),s(u,O),s(O,Ct),s(u,ht),s(u,J),s(J,qt),s(u,_t),s(u,P),s(P,zt),s(u,st),r(t,at,n),z(M,t,n),r(t,V,n),r(t,h,n),s(h,jt),s(h,R),s(R,Et),s(h,yt),s(h,Q),s(Q,lt),s(h,dt),s(h,L),s(L,tt),s(h,pt),r(t,G,n),z(D,t,n),r(t,et,n),r(t,H,n),s(H,wt),r(t,A,n),z(N,t,n),r(t,U,n),r(t,k,n),s(k,$),s(k,w),s(w,gt),s(k,kt),r(t,X,n),z(W,t,n),r(t,ft,n),r(t,I,n),s(I,nt),r(t,rt,n),z(T,t,n),r(t,mt,n),r(t,j,n),s(j,ut),s(j,Y),s(Y,it),s(j,Ft),r(t,ot,n),z(B,t,n),$t=!0},p:Rt,i(t){$t||(E(M.$$.fragment,t),E(D.$$.fragment,t),E(N.$$.fragment,t),E(W.$$.fragment,t),E(T.$$.fragment,t),E(B.$$.fragment,t),$t=!0)},o(t){C(M.$$.fragment,t),C(D.$$.fragment,t),C(N.$$.fragment,t),C(W.$$.fragment,t),C(T.$$.fragment,t),C(B.$$.fragment,t),$t=!1},d(t){t&&e(c),t&&e(i),t&&e(u),t&&e(at),F(M,t),t&&e(V),t&&e(h),t&&e(G),F(D,t),t&&e(et),t&&e(H),t&&e(A),F(N,t),t&&e(U),t&&e(k),t&&e(X),F(W,t),t&&e(ft),t&&e(I),t&&e(rt),F(T,t),t&&e(mt),t&&e(j),t&&e(ot),F(B,t)}}}function Te(St){let c,b;return c=new Gt({props:{$$slots:{default:[Pe]},$$scope:{ctx:St}}}),{c(){v(c.$$.fragment)},l(i){q(c.$$.fragment,i)},m(i,u){z(c,i,u),b=!0},p(i,u){const x={};u&2&&(x.$$scope={dirty:u,ctx:i}),c.$set(x)},i(i){b||(E(c.$$.fragment,i),b=!0)},o(i){C(c.$$.fragment,i),b=!1},d(i){F(c,i)}}}function Se(St){let c,b,i,u,x,O,Ct,ht,J,qt,_t,P,zt,st,at,M,V,h,jt,R,Et,yt,Q,lt,dt,L,tt,pt,G,D,et,H,wt,A,N,U,k,$,w,gt,kt,X,W,ft,I,nt,rt,T,mt,j,ut,Y,it,Ft,ot,B,$t;return M=new K({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),D=new K({props:{code:`tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)`}}),N=new K({props:{code:`from transformers import create_optimizer
import tensorflow as tf

batch_size = 16
num_epochs = 5
batches_per_epoch = len(tokenized_imdb["train"]) // batch_size
total_train_steps = int(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=2e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

batch_size = <span class="hljs-number">16</span>
num_epochs = <span class="hljs-number">5</span>
batches_per_epoch = <span class="hljs-built_in">len</span>(tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
total_train_steps = <span class="hljs-built_in">int</span>(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">2e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),W=new K({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),T=new K({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),B=new K({props:{code:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`,highlighted:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`}}),{c(){c=p("p"),b=o("Fine-tuning with TensorFlow is just as easy, with only a few differences."),i=_(),u=p("p"),x=o("Start by batching the processed examples together with dynamic padding using the "),O=p("a"),Ct=o("DataCollatorWithPadding"),ht=o(` function.
Make sure you set `),J=p("code"),qt=o('return_tensors="tf"'),_t=o(" to return "),P=p("code"),zt=o("tf.Tensor"),st=o(" outputs instead of PyTorch tensors!"),at=_(),v(M.$$.fragment),V=_(),h=p("p"),jt=o("Next, convert your datasets to the "),R=p("code"),Et=o("tf.data.Dataset"),yt=o(" format with "),Q=p("code"),lt=o("to_tf_dataset"),dt=o(`. Specify inputs and labels in the
`),L=p("code"),tt=o("columns"),pt=o(" argument:"),G=_(),v(D.$$.fragment),et=_(),H=p("p"),wt=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),A=_(),v(N.$$.fragment),U=_(),k=p("p"),$=o("Load your model with the "),w=p("a"),gt=o("TFAutoModelForSequenceClassification"),kt=o(" class along with the number of expected labels:"),X=_(),v(W.$$.fragment),ft=_(),I=p("p"),nt=o("Compile the model:"),rt=_(),v(T.$$.fragment),mt=_(),j=p("p"),ut=o("Finally, fine-tune the model by calling "),Y=p("code"),it=o("model.fit"),Ft=o(":"),ot=_(),v(B.$$.fragment),this.h()},l(t){c=f(t,"P",{});var n=m(c);b=l(n,"Fine-tuning with TensorFlow is just as easy, with only a few differences."),n.forEach(e),i=d(t),u=f(t,"P",{});var S=m(u);x=l(S,"Start by batching the processed examples together with dynamic padding using the "),O=f(S,"A",{href:!0});var Pt=m(O);Ct=l(Pt,"DataCollatorWithPadding"),Pt.forEach(e),ht=l(S,` function.
Make sure you set `),J=f(S,"CODE",{});var Wt=m(J);qt=l(Wt,'return_tensors="tf"'),Wt.forEach(e),_t=l(S," to return "),P=f(S,"CODE",{});var Dt=m(P);zt=l(Dt,"tf.Tensor"),Dt.forEach(e),st=l(S," outputs instead of PyTorch tensors!"),S.forEach(e),at=d(t),q(M.$$.fragment,t),V=d(t),h=f(t,"P",{});var g=m(h);jt=l(g,"Next, convert your datasets to the "),R=f(g,"CODE",{});var At=m(R);Et=l(At,"tf.data.Dataset"),At.forEach(e),yt=l(g," format with "),Q=f(g,"CODE",{});var vt=m(Q);lt=l(vt,"to_tf_dataset"),vt.forEach(e),dt=l(g,`. Specify inputs and labels in the
`),L=f(g,"CODE",{});var Ot=m(L);tt=l(Ot,"columns"),Ot.forEach(e),pt=l(g," argument:"),g.forEach(e),G=d(t),q(D.$$.fragment,t),et=d(t),H=f(t,"P",{});var Tt=m(H);wt=l(Tt,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Tt.forEach(e),A=d(t),q(N.$$.fragment,t),U=d(t),k=f(t,"P",{});var bt=m(k);$=l(bt,"Load your model with the "),w=f(bt,"A",{href:!0});var Nt=m(w);gt=l(Nt,"TFAutoModelForSequenceClassification"),Nt.forEach(e),kt=l(bt," class along with the number of expected labels:"),bt.forEach(e),X=d(t),q(W.$$.fragment,t),ft=d(t),I=f(t,"P",{});var xt=m(I);nt=l(xt,"Compile the model:"),xt.forEach(e),rt=d(t),q(T.$$.fragment,t),mt=d(t),j=f(t,"P",{});var Z=m(j);ut=l(Z,"Finally, fine-tune the model by calling "),Y=f(Z,"CODE",{});var Mt=m(Y);it=l(Mt,"model.fit"),Mt.forEach(e),Ft=l(Z,":"),Z.forEach(e),ot=d(t),q(B.$$.fragment,t),this.h()},h(){ct(O,"href","/docs/transformers/master/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),ct(w,"href","/docs/transformers/master/en/model_doc/auto#transformers.TFAutoModelForSequenceClassification")},m(t,n){r(t,c,n),s(c,b),r(t,i,n),r(t,u,n),s(u,x),s(u,O),s(O,Ct),s(u,ht),s(u,J),s(J,qt),s(u,_t),s(u,P),s(P,zt),s(u,st),r(t,at,n),z(M,t,n),r(t,V,n),r(t,h,n),s(h,jt),s(h,R),s(R,Et),s(h,yt),s(h,Q),s(Q,lt),s(h,dt),s(h,L),s(L,tt),s(h,pt),r(t,G,n),z(D,t,n),r(t,et,n),r(t,H,n),s(H,wt),r(t,A,n),z(N,t,n),r(t,U,n),r(t,k,n),s(k,$),s(k,w),s(w,gt),s(k,kt),r(t,X,n),z(W,t,n),r(t,ft,n),r(t,I,n),s(I,nt),r(t,rt,n),z(T,t,n),r(t,mt,n),r(t,j,n),s(j,ut),s(j,Y),s(Y,it),s(j,Ft),r(t,ot,n),z(B,t,n),$t=!0},p:Rt,i(t){$t||(E(M.$$.fragment,t),E(D.$$.fragment,t),E(N.$$.fragment,t),E(W.$$.fragment,t),E(T.$$.fragment,t),E(B.$$.fragment,t),$t=!0)},o(t){C(M.$$.fragment,t),C(D.$$.fragment,t),C(N.$$.fragment,t),C(W.$$.fragment,t),C(T.$$.fragment,t),C(B.$$.fragment,t),$t=!1},d(t){t&&e(c),t&&e(i),t&&e(u),t&&e(at),F(M,t),t&&e(V),t&&e(h),t&&e(G),F(D,t),t&&e(et),t&&e(H),t&&e(A),F(N,t),t&&e(U),t&&e(k),t&&e(X),F(W,t),t&&e(ft),t&&e(I),t&&e(rt),F(T,t),t&&e(mt),t&&e(j),t&&e(ot),F(B,t)}}}function De(St){let c,b;return c=new Gt({props:{$$slots:{default:[Se]},$$scope:{ctx:St}}}),{c(){v(c.$$.fragment)},l(i){q(c.$$.fragment,i)},m(i,u){z(c,i,u),b=!0},p(i,u){const x={};u&2&&(x.$$scope={dirty:u,ctx:i}),c.$set(x)},i(i){b||(E(c.$$.fragment,i),b=!0)},o(i){C(c.$$.fragment,i),b=!1},d(i){F(c,i)}}}function Ae(St){let c,b,i,u,x,O,Ct,ht,J,qt,_t,P,zt,st,at,M,V,h,jt,R,Et,yt,Q,lt,dt,L,tt,pt,G,D,et,H,wt,A,N,U,k,$,w,gt,kt,X,W,ft,I,nt,rt,T,mt,j,ut,Y,it,Ft,ot,B,$t;return M=new K({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),D=new K({props:{code:`tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)`}}),N=new K({props:{code:`from transformers import create_optimizer
import tensorflow as tf

batch_size = 16
num_epochs = 5
batches_per_epoch = len(tokenized_imdb["train"]) // batch_size
total_train_steps = int(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=2e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

batch_size = <span class="hljs-number">16</span>
num_epochs = <span class="hljs-number">5</span>
batches_per_epoch = <span class="hljs-built_in">len</span>(tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
total_train_steps = <span class="hljs-built_in">int</span>(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">2e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),W=new K({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),T=new K({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),B=new K({props:{code:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`,highlighted:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`}}),{c(){c=p("p"),b=o("Fine-tuning with TensorFlow is just as easy, with only a few differences."),i=_(),u=p("p"),x=o("Start by batching the processed examples together with dynamic padding using the "),O=p("a"),Ct=o("DataCollatorWithPadding"),ht=o(` function.
Make sure you set `),J=p("code"),qt=o('return_tensors="tf"'),_t=o(" to return "),P=p("code"),zt=o("tf.Tensor"),st=o(" outputs instead of PyTorch tensors!"),at=_(),v(M.$$.fragment),V=_(),h=p("p"),jt=o("Next, convert your datasets to the "),R=p("code"),Et=o("tf.data.Dataset"),yt=o(" format with "),Q=p("code"),lt=o("to_tf_dataset"),dt=o(`. Specify inputs and labels in the
`),L=p("code"),tt=o("columns"),pt=o(" argument:"),G=_(),v(D.$$.fragment),et=_(),H=p("p"),wt=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),A=_(),v(N.$$.fragment),U=_(),k=p("p"),$=o("Load your model with the "),w=p("a"),gt=o("TFAutoModelForSequenceClassification"),kt=o(" class along with the number of expected labels:"),X=_(),v(W.$$.fragment),ft=_(),I=p("p"),nt=o("Compile the model:"),rt=_(),v(T.$$.fragment),mt=_(),j=p("p"),ut=o("Finally, fine-tune the model by calling "),Y=p("code"),it=o("model.fit"),Ft=o(":"),ot=_(),v(B.$$.fragment),this.h()},l(t){c=f(t,"P",{});var n=m(c);b=l(n,"Fine-tuning with TensorFlow is just as easy, with only a few differences."),n.forEach(e),i=d(t),u=f(t,"P",{});var S=m(u);x=l(S,"Start by batching the processed examples together with dynamic padding using the "),O=f(S,"A",{href:!0});var Pt=m(O);Ct=l(Pt,"DataCollatorWithPadding"),Pt.forEach(e),ht=l(S,` function.
Make sure you set `),J=f(S,"CODE",{});var Wt=m(J);qt=l(Wt,'return_tensors="tf"'),Wt.forEach(e),_t=l(S," to return "),P=f(S,"CODE",{});var Dt=m(P);zt=l(Dt,"tf.Tensor"),Dt.forEach(e),st=l(S," outputs instead of PyTorch tensors!"),S.forEach(e),at=d(t),q(M.$$.fragment,t),V=d(t),h=f(t,"P",{});var g=m(h);jt=l(g,"Next, convert your datasets to the "),R=f(g,"CODE",{});var At=m(R);Et=l(At,"tf.data.Dataset"),At.forEach(e),yt=l(g," format with "),Q=f(g,"CODE",{});var vt=m(Q);lt=l(vt,"to_tf_dataset"),vt.forEach(e),dt=l(g,`. Specify inputs and labels in the
`),L=f(g,"CODE",{});var Ot=m(L);tt=l(Ot,"columns"),Ot.forEach(e),pt=l(g," argument:"),g.forEach(e),G=d(t),q(D.$$.fragment,t),et=d(t),H=f(t,"P",{});var Tt=m(H);wt=l(Tt,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Tt.forEach(e),A=d(t),q(N.$$.fragment,t),U=d(t),k=f(t,"P",{});var bt=m(k);$=l(bt,"Load your model with the "),w=f(bt,"A",{href:!0});var Nt=m(w);gt=l(Nt,"TFAutoModelForSequenceClassification"),Nt.forEach(e),kt=l(bt," class along with the number of expected labels:"),bt.forEach(e),X=d(t),q(W.$$.fragment,t),ft=d(t),I=f(t,"P",{});var xt=m(I);nt=l(xt,"Compile the model:"),xt.forEach(e),rt=d(t),q(T.$$.fragment,t),mt=d(t),j=f(t,"P",{});var Z=m(j);ut=l(Z,"Finally, fine-tune the model by calling "),Y=f(Z,"CODE",{});var Mt=m(Y);it=l(Mt,"model.fit"),Mt.forEach(e),Ft=l(Z,":"),Z.forEach(e),ot=d(t),q(B.$$.fragment,t),this.h()},h(){ct(O,"href","/docs/transformers/master/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),ct(w,"href","/docs/transformers/master/en/model_doc/auto#transformers.TFAutoModelForSequenceClassification")},m(t,n){r(t,c,n),s(c,b),r(t,i,n),r(t,u,n),s(u,x),s(u,O),s(O,Ct),s(u,ht),s(u,J),s(J,qt),s(u,_t),s(u,P),s(P,zt),s(u,st),r(t,at,n),z(M,t,n),r(t,V,n),r(t,h,n),s(h,jt),s(h,R),s(R,Et),s(h,yt),s(h,Q),s(Q,lt),s(h,dt),s(h,L),s(L,tt),s(h,pt),r(t,G,n),z(D,t,n),r(t,et,n),r(t,H,n),s(H,wt),r(t,A,n),z(N,t,n),r(t,U,n),r(t,k,n),s(k,$),s(k,w),s(w,gt),s(k,kt),r(t,X,n),z(W,t,n),r(t,ft,n),r(t,I,n),s(I,nt),r(t,rt,n),z(T,t,n),r(t,mt,n),r(t,j,n),s(j,ut),s(j,Y),s(Y,it),s(j,Ft),r(t,ot,n),z(B,t,n),$t=!0},p:Rt,i(t){$t||(E(M.$$.fragment,t),E(D.$$.fragment,t),E(N.$$.fragment,t),E(W.$$.fragment,t),E(T.$$.fragment,t),E(B.$$.fragment,t),$t=!0)},o(t){C(M.$$.fragment,t),C(D.$$.fragment,t),C(N.$$.fragment,t),C(W.$$.fragment,t),C(T.$$.fragment,t),C(B.$$.fragment,t),$t=!1},d(t){t&&e(c),t&&e(i),t&&e(u),t&&e(at),F(M,t),t&&e(V),t&&e(h),t&&e(G),F(D,t),t&&e(et),t&&e(H),t&&e(A),F(N,t),t&&e(U),t&&e(k),t&&e(X),F(W,t),t&&e(ft),t&&e(I),t&&e(rt),F(T,t),t&&e(mt),t&&e(j),t&&e(ot),F(B,t)}}}function xe(St){let c,b;return c=new Gt({props:{$$slots:{default:[Ae]},$$scope:{ctx:St}}}),{c(){v(c.$$.fragment)},l(i){q(c.$$.fragment,i)},m(i,u){z(c,i,u),b=!0},p(i,u){const x={};u&2&&(x.$$scope={dirty:u,ctx:i}),c.$set(x)},i(i){b||(E(c.$$.fragment,i),b=!0)},o(i){C(c.$$.fragment,i),b=!1},d(i){F(c,i)}}}function Me(St){let c,b,i,u,x,O,Ct,ht,J,qt,_t,P,zt,st,at,M,V,h,jt,R,Et,yt,Q,lt,dt,L,tt,pt,G,D,et,H,wt,A,N,U,k,$,w,gt,kt,X,W,ft,I,nt,rt,T,mt,j,ut,Y,it,Ft,ot,B,$t;return M=new K({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),D=new K({props:{code:`tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)`}}),N=new K({props:{code:`from transformers import create_optimizer
import tensorflow as tf

batch_size = 16
num_epochs = 5
batches_per_epoch = len(tokenized_imdb["train"]) // batch_size
total_train_steps = int(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=2e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

batch_size = <span class="hljs-number">16</span>
num_epochs = <span class="hljs-number">5</span>
batches_per_epoch = <span class="hljs-built_in">len</span>(tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
total_train_steps = <span class="hljs-built_in">int</span>(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">2e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),W=new K({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),T=new K({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),B=new K({props:{code:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`,highlighted:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`}}),{c(){c=p("p"),b=o("Fine-tuning with TensorFlow is just as easy, with only a few differences."),i=_(),u=p("p"),x=o("Start by batching the processed examples together with dynamic padding using the "),O=p("a"),Ct=o("DataCollatorWithPadding"),ht=o(` function.
Make sure you set `),J=p("code"),qt=o('return_tensors="tf"'),_t=o(" to return "),P=p("code"),zt=o("tf.Tensor"),st=o(" outputs instead of PyTorch tensors!"),at=_(),v(M.$$.fragment),V=_(),h=p("p"),jt=o("Next, convert your datasets to the "),R=p("code"),Et=o("tf.data.Dataset"),yt=o(" format with "),Q=p("code"),lt=o("to_tf_dataset"),dt=o(`. Specify inputs and labels in the
`),L=p("code"),tt=o("columns"),pt=o(" argument:"),G=_(),v(D.$$.fragment),et=_(),H=p("p"),wt=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),A=_(),v(N.$$.fragment),U=_(),k=p("p"),$=o("Load your model with the "),w=p("a"),gt=o("TFAutoModelForSequenceClassification"),kt=o(" class along with the number of expected labels:"),X=_(),v(W.$$.fragment),ft=_(),I=p("p"),nt=o("Compile the model:"),rt=_(),v(T.$$.fragment),mt=_(),j=p("p"),ut=o("Finally, fine-tune the model by calling "),Y=p("code"),it=o("model.fit"),Ft=o(":"),ot=_(),v(B.$$.fragment),this.h()},l(t){c=f(t,"P",{});var n=m(c);b=l(n,"Fine-tuning with TensorFlow is just as easy, with only a few differences."),n.forEach(e),i=d(t),u=f(t,"P",{});var S=m(u);x=l(S,"Start by batching the processed examples together with dynamic padding using the "),O=f(S,"A",{href:!0});var Pt=m(O);Ct=l(Pt,"DataCollatorWithPadding"),Pt.forEach(e),ht=l(S,` function.
Make sure you set `),J=f(S,"CODE",{});var Wt=m(J);qt=l(Wt,'return_tensors="tf"'),Wt.forEach(e),_t=l(S," to return "),P=f(S,"CODE",{});var Dt=m(P);zt=l(Dt,"tf.Tensor"),Dt.forEach(e),st=l(S," outputs instead of PyTorch tensors!"),S.forEach(e),at=d(t),q(M.$$.fragment,t),V=d(t),h=f(t,"P",{});var g=m(h);jt=l(g,"Next, convert your datasets to the "),R=f(g,"CODE",{});var At=m(R);Et=l(At,"tf.data.Dataset"),At.forEach(e),yt=l(g," format with "),Q=f(g,"CODE",{});var vt=m(Q);lt=l(vt,"to_tf_dataset"),vt.forEach(e),dt=l(g,`. Specify inputs and labels in the
`),L=f(g,"CODE",{});var Ot=m(L);tt=l(Ot,"columns"),Ot.forEach(e),pt=l(g," argument:"),g.forEach(e),G=d(t),q(D.$$.fragment,t),et=d(t),H=f(t,"P",{});var Tt=m(H);wt=l(Tt,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Tt.forEach(e),A=d(t),q(N.$$.fragment,t),U=d(t),k=f(t,"P",{});var bt=m(k);$=l(bt,"Load your model with the "),w=f(bt,"A",{href:!0});var Nt=m(w);gt=l(Nt,"TFAutoModelForSequenceClassification"),Nt.forEach(e),kt=l(bt," class along with the number of expected labels:"),bt.forEach(e),X=d(t),q(W.$$.fragment,t),ft=d(t),I=f(t,"P",{});var xt=m(I);nt=l(xt,"Compile the model:"),xt.forEach(e),rt=d(t),q(T.$$.fragment,t),mt=d(t),j=f(t,"P",{});var Z=m(j);ut=l(Z,"Finally, fine-tune the model by calling "),Y=f(Z,"CODE",{});var Mt=m(Y);it=l(Mt,"model.fit"),Mt.forEach(e),Ft=l(Z,":"),Z.forEach(e),ot=d(t),q(B.$$.fragment,t),this.h()},h(){ct(O,"href","/docs/transformers/master/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),ct(w,"href","/docs/transformers/master/en/model_doc/auto#transformers.TFAutoModelForSequenceClassification")},m(t,n){r(t,c,n),s(c,b),r(t,i,n),r(t,u,n),s(u,x),s(u,O),s(O,Ct),s(u,ht),s(u,J),s(J,qt),s(u,_t),s(u,P),s(P,zt),s(u,st),r(t,at,n),z(M,t,n),r(t,V,n),r(t,h,n),s(h,jt),s(h,R),s(R,Et),s(h,yt),s(h,Q),s(Q,lt),s(h,dt),s(h,L),s(L,tt),s(h,pt),r(t,G,n),z(D,t,n),r(t,et,n),r(t,H,n),s(H,wt),r(t,A,n),z(N,t,n),r(t,U,n),r(t,k,n),s(k,$),s(k,w),s(w,gt),s(k,kt),r(t,X,n),z(W,t,n),r(t,ft,n),r(t,I,n),s(I,nt),r(t,rt,n),z(T,t,n),r(t,mt,n),r(t,j,n),s(j,ut),s(j,Y),s(Y,it),s(j,Ft),r(t,ot,n),z(B,t,n),$t=!0},p:Rt,i(t){$t||(E(M.$$.fragment,t),E(D.$$.fragment,t),E(N.$$.fragment,t),E(W.$$.fragment,t),E(T.$$.fragment,t),E(B.$$.fragment,t),$t=!0)},o(t){C(M.$$.fragment,t),C(D.$$.fragment,t),C(N.$$.fragment,t),C(W.$$.fragment,t),C(T.$$.fragment,t),C(B.$$.fragment,t),$t=!1},d(t){t&&e(c),t&&e(i),t&&e(u),t&&e(at),F(M,t),t&&e(V),t&&e(h),t&&e(G),F(D,t),t&&e(et),t&&e(H),t&&e(A),F(N,t),t&&e(U),t&&e(k),t&&e(X),F(W,t),t&&e(ft),t&&e(I),t&&e(rt),F(T,t),t&&e(mt),t&&e(j),t&&e(ot),F(B,t)}}}function We(St){let c,b;return c=new Gt({props:{$$slots:{default:[Me]},$$scope:{ctx:St}}}),{c(){v(c.$$.fragment)},l(i){q(c.$$.fragment,i)},m(i,u){z(c,i,u),b=!0},p(i,u){const x={};u&2&&(x.$$scope={dirty:u,ctx:i}),c.$set(x)},i(i){b||(E(c.$$.fragment,i),b=!0)},o(i){C(c.$$.fragment,i),b=!1},d(i){F(c,i)}}}function Oe(St){let c,b,i,u,x,O,Ct,ht,J,qt,_t,P,zt,st,at,M,V,h,jt,R,Et,yt,Q,lt,dt,L,tt,pt,G,D,et,H,wt,A,N,U,k,$,w,gt,kt,X,W,ft,I,nt,rt,T,mt,j,ut,Y,it,Ft,ot,B,$t;return M=new K({props:{code:`from transformers import DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorWithPadding

data_collator = DataCollatorWithPadding(tokenizer, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),D=new K({props:{code:`tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)`}}),N=new K({props:{code:`from transformers import create_optimizer
import tensorflow as tf

batch_size = 16
num_epochs = 5
batches_per_epoch = len(tokenized_imdb["train"]) // batch_size
total_train_steps = int(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=2e-5, num_warmup_steps=0, num_train_steps=total_train_steps)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

batch_size = <span class="hljs-number">16</span>
num_epochs = <span class="hljs-number">5</span>
batches_per_epoch = <span class="hljs-built_in">len</span>(tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
total_train_steps = <span class="hljs-built_in">int</span>(batches_per_epoch * num_epochs)
optimizer, schedule = create_optimizer(init_lr=<span class="hljs-number">2e-5</span>, num_warmup_steps=<span class="hljs-number">0</span>, num_train_steps=total_train_steps)`}}),W=new K({props:{code:`from transformers import TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained("distilbert-base-uncased", num_labels=2)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForSequenceClassification

model = TFAutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>, num_labels=<span class="hljs-number">2</span>)`}}),T=new K({props:{code:`import tensorflow as tf

model.compile(optimizer=optimizer)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)`}}),B=new K({props:{code:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`,highlighted:`model.fit(
    tf_train_set,
    validation_data=tf_validation_set,
    epochs=num_train_epochs,
)`}}),{c(){c=p("p"),b=o("Fine-tuning with TensorFlow is just as easy, with only a few differences."),i=_(),u=p("p"),x=o("Start by batching the processed examples together with dynamic padding using the "),O=p("a"),Ct=o("DataCollatorWithPadding"),ht=o(` function.
Make sure you set `),J=p("code"),qt=o('return_tensors="tf"'),_t=o(" to return "),P=p("code"),zt=o("tf.Tensor"),st=o(" outputs instead of PyTorch tensors!"),at=_(),v(M.$$.fragment),V=_(),h=p("p"),jt=o("Next, convert your datasets to the "),R=p("code"),Et=o("tf.data.Dataset"),yt=o(" format with "),Q=p("code"),lt=o("to_tf_dataset"),dt=o(`. Specify inputs and labels in the
`),L=p("code"),tt=o("columns"),pt=o(" argument:"),G=_(),v(D.$$.fragment),et=_(),H=p("p"),wt=o("Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),A=_(),v(N.$$.fragment),U=_(),k=p("p"),$=o("Load your model with the "),w=p("a"),gt=o("TFAutoModelForSequenceClassification"),kt=o(" class along with the number of expected labels:"),X=_(),v(W.$$.fragment),ft=_(),I=p("p"),nt=o("Compile the model:"),rt=_(),v(T.$$.fragment),mt=_(),j=p("p"),ut=o("Finally, fine-tune the model by calling "),Y=p("code"),it=o("model.fit"),Ft=o(":"),ot=_(),v(B.$$.fragment),this.h()},l(t){c=f(t,"P",{});var n=m(c);b=l(n,"Fine-tuning with TensorFlow is just as easy, with only a few differences."),n.forEach(e),i=d(t),u=f(t,"P",{});var S=m(u);x=l(S,"Start by batching the processed examples together with dynamic padding using the "),O=f(S,"A",{href:!0});var Pt=m(O);Ct=l(Pt,"DataCollatorWithPadding"),Pt.forEach(e),ht=l(S,` function.
Make sure you set `),J=f(S,"CODE",{});var Wt=m(J);qt=l(Wt,'return_tensors="tf"'),Wt.forEach(e),_t=l(S," to return "),P=f(S,"CODE",{});var Dt=m(P);zt=l(Dt,"tf.Tensor"),Dt.forEach(e),st=l(S," outputs instead of PyTorch tensors!"),S.forEach(e),at=d(t),q(M.$$.fragment,t),V=d(t),h=f(t,"P",{});var g=m(h);jt=l(g,"Next, convert your datasets to the "),R=f(g,"CODE",{});var At=m(R);Et=l(At,"tf.data.Dataset"),At.forEach(e),yt=l(g," format with "),Q=f(g,"CODE",{});var vt=m(Q);lt=l(vt,"to_tf_dataset"),vt.forEach(e),dt=l(g,`. Specify inputs and labels in the
`),L=f(g,"CODE",{});var Ot=m(L);tt=l(Ot,"columns"),Ot.forEach(e),pt=l(g," argument:"),g.forEach(e),G=d(t),q(D.$$.fragment,t),et=d(t),H=f(t,"P",{});var Tt=m(H);wt=l(Tt,"Set up an optimizer function, learning rate schedule, and some training hyperparameters:"),Tt.forEach(e),A=d(t),q(N.$$.fragment,t),U=d(t),k=f(t,"P",{});var bt=m(k);$=l(bt,"Load your model with the "),w=f(bt,"A",{href:!0});var Nt=m(w);gt=l(Nt,"TFAutoModelForSequenceClassification"),Nt.forEach(e),kt=l(bt," class along with the number of expected labels:"),bt.forEach(e),X=d(t),q(W.$$.fragment,t),ft=d(t),I=f(t,"P",{});var xt=m(I);nt=l(xt,"Compile the model:"),xt.forEach(e),rt=d(t),q(T.$$.fragment,t),mt=d(t),j=f(t,"P",{});var Z=m(j);ut=l(Z,"Finally, fine-tune the model by calling "),Y=f(Z,"CODE",{});var Mt=m(Y);it=l(Mt,"model.fit"),Mt.forEach(e),Ft=l(Z,":"),Z.forEach(e),ot=d(t),q(B.$$.fragment,t),this.h()},h(){ct(O,"href","/docs/transformers/master/en/main_classes/data_collator#transformers.DataCollatorWithPadding"),ct(w,"href","/docs/transformers/master/en/model_doc/auto#transformers.TFAutoModelForSequenceClassification")},m(t,n){r(t,c,n),s(c,b),r(t,i,n),r(t,u,n),s(u,x),s(u,O),s(O,Ct),s(u,ht),s(u,J),s(J,qt),s(u,_t),s(u,P),s(P,zt),s(u,st),r(t,at,n),z(M,t,n),r(t,V,n),r(t,h,n),s(h,jt),s(h,R),s(R,Et),s(h,yt),s(h,Q),s(Q,lt),s(h,dt),s(h,L),s(L,tt),s(h,pt),r(t,G,n),z(D,t,n),r(t,et,n),r(t,H,n),s(H,wt),r(t,A,n),z(N,t,n),r(t,U,n),r(t,k,n),s(k,$),s(k,w),s(w,gt),s(k,kt),r(t,X,n),z(W,t,n),r(t,ft,n),r(t,I,n),s(I,nt),r(t,rt,n),z(T,t,n),r(t,mt,n),r(t,j,n),s(j,ut),s(j,Y),s(Y,it),s(j,Ft),r(t,ot,n),z(B,t,n),$t=!0},p:Rt,i(t){$t||(E(M.$$.fragment,t),E(D.$$.fragment,t),E(N.$$.fragment,t),E(W.$$.fragment,t),E(T.$$.fragment,t),E(B.$$.fragment,t),$t=!0)},o(t){C(M.$$.fragment,t),C(D.$$.fragment,t),C(N.$$.fragment,t),C(W.$$.fragment,t),C(T.$$.fragment,t),C(B.$$.fragment,t),$t=!1},d(t){t&&e(c),t&&e(i),t&&e(u),t&&e(at),F(M,t),t&&e(V),t&&e(h),t&&e(G),F(D,t),t&&e(et),t&&e(H),t&&e(A),F(N,t),t&&e(U),t&&e(k),t&&e(X),F(W,t),t&&e(ft),t&&e(I),t&&e(rt),F(T,t),t&&e(mt),t&&e(j),t&&e(ot),F(B,t)}}}function Ne(St){let c,b;return c=new Gt({props:{$$slots:{default:[Oe]},$$scope:{ctx:St}}}),{c(){v(c.$$.fragment)},l(i){q(c.$$.fragment,i)},m(i,u){z(c,i,u),b=!0},p(i,u){const x={};u&2&&(x.$$scope={dirty:u,ctx:i}),c.$set(x)},i(i){b||(E(c.$$.fragment,i),b=!0)},o(i){C(c.$$.fragment,i),b=!1},d(i){F(c,i)}}}function Le(St){let c,b,i,u,x,O,Ct,ht,J,qt,_t,P,zt,st,at,M,V,h,jt,R,Et,yt,Q,lt,dt,L,tt,pt,G,D,et,H,wt,A,N,U,k;return O=new fe({}),V=new fe({}),pt=new K({props:{code:`tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(tf_train_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=True,
    batch_size=16,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb["train"].to_tf_dataset(
    columns=["attention_mask", "input_ids", "label"],
    shuffle=False,
    batch_size=16,
    collate_fn=data_collator,
)`,highlighted:`tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(tf_train_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)

tf_validation_dataset = tokenized_imdb[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>],
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">16</span>,
    collate_fn=data_collator,
)`}}),D=new me({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[ye],tensorflow:[we],pytorch:[$e]},$$scope:{ctx:St}}}),H=new me({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[Ee],tensorflow:[qe],pytorch:[ke]},$$scope:{ctx:St}}}),A=new me({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[De],tensorflow:[Te],pytorch:[Fe]},$$scope:{ctx:St}}}),U=new me({props:{pytorch:!0,tensorflow:!0,jax:!0,$$slots:{jax:[Ne],tensorflow:[We],pytorch:[xe]},$$scope:{ctx:St}}}),{c(){c=p("meta"),b=_(),i=p("h1"),u=p("a"),x=p("span"),v(O.$$.fragment),Ct=_(),ht=p("span"),J=o("Common Text"),qt=_(),_t=p("p"),P=o("Some common paragprah"),zt=_(),st=p("h2"),at=p("a"),M=p("span"),v(V.$$.fragment),h=_(),jt=p("span"),R=o("Common Text Heading 2"),Et=_(),yt=p("p"),Q=o(`Every model is different yet bears similarities with the others. Therefore most models use the same inputs, which are
detailed here alongside usage examples.`),lt=_(),dt=p("p"),L=o("Some more paragraphs"),tt=_(),v(pt.$$.fragment),G=_(),v(D.$$.fragment),et=_(),v(H.$$.fragment),wt=_(),v(A.$$.fragment),N=_(),v(U.$$.fragment),this.h()},l($){const w=de('[data-svelte="svelte-1phssyn"]',document.head);c=f(w,"META",{name:!0,content:!0}),w.forEach(e),b=d($),i=f($,"H1",{class:!0});var gt=m(i);u=f(gt,"A",{id:!0,class:!0,href:!0});var kt=m(u);x=f(kt,"SPAN",{});var X=m(x);q(O.$$.fragment,X),X.forEach(e),kt.forEach(e),Ct=d(gt),ht=f(gt,"SPAN",{});var W=m(ht);J=l(W,"Common Text"),W.forEach(e),gt.forEach(e),qt=d($),_t=f($,"P",{});var ft=m(_t);P=l(ft,"Some common paragprah"),ft.forEach(e),zt=d($),st=f($,"H2",{class:!0});var I=m(st);at=f(I,"A",{id:!0,class:!0,href:!0});var nt=m(at);M=f(nt,"SPAN",{});var rt=m(M);q(V.$$.fragment,rt),rt.forEach(e),nt.forEach(e),h=d(I),jt=f(I,"SPAN",{});var T=m(jt);R=l(T,"Common Text Heading 2"),T.forEach(e),I.forEach(e),Et=d($),yt=f($,"P",{});var mt=m(yt);Q=l(mt,`Every model is different yet bears similarities with the others. Therefore most models use the same inputs, which are
detailed here alongside usage examples.`),mt.forEach(e),lt=d($),dt=f($,"P",{});var j=m(dt);L=l(j,"Some more paragraphs"),j.forEach(e),tt=d($),q(pt.$$.fragment,$),G=d($),q(D.$$.fragment,$),et=d($),q(H.$$.fragment,$),wt=d($),q(A.$$.fragment,$),N=d($),q(U.$$.fragment,$),this.h()},h(){ct(c,"name","hf:doc:metadata"),ct(c,"content",JSON.stringify(He)),ct(u,"id","common-text"),ct(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),ct(u,"href","#common-text"),ct(i,"class","relative group"),ct(at,"id","common-text-heading-2"),ct(at,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),ct(at,"href","#common-text-heading-2"),ct(st,"class","relative group")},m($,w){s(document.head,c),r($,b,w),r($,i,w),s(i,u),s(u,x),z(O,x,null),s(i,Ct),s(i,ht),s(ht,J),r($,qt,w),r($,_t,w),s(_t,P),r($,zt,w),r($,st,w),s(st,at),s(at,M),z(V,M,null),s(st,h),s(st,jt),s(jt,R),r($,Et,w),r($,yt,w),s(yt,Q),r($,lt,w),r($,dt,w),s(dt,L),r($,tt,w),z(pt,$,w),r($,G,w),z(D,$,w),r($,et,w),z(H,$,w),r($,wt,w),z(A,$,w),r($,N,w),z(U,$,w),k=!0},p($,[w]){const gt={};w&2&&(gt.$$scope={dirty:w,ctx:$}),D.$set(gt);const kt={};w&2&&(kt.$$scope={dirty:w,ctx:$}),H.$set(kt);const X={};w&2&&(X.$$scope={dirty:w,ctx:$}),A.$set(X);const W={};w&2&&(W.$$scope={dirty:w,ctx:$}),U.$set(W)},i($){k||(E(O.$$.fragment,$),E(V.$$.fragment,$),E(pt.$$.fragment,$),E(D.$$.fragment,$),E(H.$$.fragment,$),E(A.$$.fragment,$),E(U.$$.fragment,$),k=!0)},o($){C(O.$$.fragment,$),C(V.$$.fragment,$),C(pt.$$.fragment,$),C(D.$$.fragment,$),C(H.$$.fragment,$),C(A.$$.fragment,$),C(U.$$.fragment,$),k=!1},d($){e(c),$&&e(b),$&&e(i),F(O),$&&e(qt),$&&e(_t),$&&e(zt),$&&e(st),F(V),$&&e(Et),$&&e(yt),$&&e(lt),$&&e(dt),$&&e(tt),F(pt,$),$&&e(G),F(D,$),$&&e(et),F(H,$),$&&e(wt),F(A,$),$&&e(N),F(U,$)}}}const He={local:"common-text",sections:[{local:"common-text-heading-2",title:"Common Text Heading 2"},{local:"pytorch-heading",sections:[{local:"smaller-pytorch-heading",title:"Smaller Pytorch heading"}],title:"Pytorch heading"},{local:"tensorflow-heading",sections:[{local:"smaller-tensorflow-heading",title:"Smaller Tensorflow heading"}],title:"Tensorflow heading"},{local:"flax-heading",sections:[{local:"smaller-flax-heading",title:"Smaller Flax heading"}],title:"Flax heading"}],title:"Common Text"};function Be(St,c,b){let{fw:i}=c;return St.$$set=u=>{"fw"in u&&b(0,i=u.fw)},[i]}class Ue extends ue{constructor(c){super();ce(this,c,Be,Le,_e,{fw:0})}}export{Ue as default,He as metadata};
