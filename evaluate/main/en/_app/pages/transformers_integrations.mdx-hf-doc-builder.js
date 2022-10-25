import{S as Fa,i as Na,s as Ha,e as n,k as _,w as P,t,M as Ua,c as l,d as s,m as f,a as o,x as L,h as r,b as c,G as a,g as d,y as M,L as Ba,q as F,o as N,B as H,v as Ia}from"../chunks/vendor-hf-doc-builder.js";import{I as pa}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ca}from"../chunks/CodeBlock-hf-doc-builder.js";function Wa(da){let k,oe,q,w,U,S,be,B,je,ie,D,we,pe,z,ce,b,T,I,E,Te,W,ye,de,p,Se,G,ze,Ee,x,xe,$e,R,Ae,Ce,Y,Oe,De,J,Pe,Le,K,Me,Fe,Q,Ne,He,ue,$,me,j,y,V,A,Ue,X,Be,he,h,Ie,C,We,Ge,Z,Re,Ye,ee,Je,Ke,ae,Qe,Ve,_e,O,fe,u,Xe,se,Ze,ea,te,aa,sa,re,ta,ra,ne,na,la,le,oa,ia,ge;return S=new pa({}),z=new ca({props:{code:"pip install datasets transformers torch evaluate nltk rouge_score",highlighted:"pip install datasets transformers torch evaluate nltk rouge_score"}}),E=new pa({}),$=new ca({props:{code:`from datasets import load_dataset
from transformers import AutoTokenizer, AutoModelForSequenceClassification, TrainingArguments, Trainer
import numpy as np
import evaluate

# Prepare and tokenize dataset
dataset = load_dataset("yelp_review_full")
tokenizer = AutoTokenizer.from_pretrained("bert-base-cased")

def tokenize_function(examples):
    return tokenizer(examples["text"], padding="max_length", truncation=True)

tokenized_datasets = dataset.map(tokenize_function, batched=True)

small_train_dataset = tokenized_datasets["train"].shuffle(seed=42).select(range(200))
small_eval_dataset = tokenized_datasets["test"].shuffle(seed=42).select(range(200))

# Setup evaluation 
metric = evaluate.load("accuracy")

def compute_metrics(eval_pred):
    logits, labels = eval_pred
    predictions = np.argmax(logits, axis=-1)
    return metric.compute(predictions=predictions, references=labels)

# Load pretrained model and evaluate model after each epoch
model = AutoModelForSequenceClassification.from_pretrained("bert-base-cased", num_labels=5)
training_args = TrainingArguments(output_dir="test_trainer", evaluation_strategy="epoch")

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=small_train_dataset,
    eval_dataset=small_eval_dataset,
    compute_metrics=compute_metrics,
)

trainer.train()`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, AutoModelForSequenceClassification, TrainingArguments, Trainer
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">import</span> evaluate

<span class="hljs-comment"># Prepare and tokenize dataset</span>
dataset = load_dataset(<span class="hljs-string">&quot;yelp_review_full&quot;</span>)
tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>)

<span class="hljs-keyword">def</span> <span class="hljs-title function_">tokenize_function</span>(<span class="hljs-params">examples</span>):
    <span class="hljs-keyword">return</span> tokenizer(examples[<span class="hljs-string">&quot;text&quot;</span>], padding=<span class="hljs-string">&quot;max_length&quot;</span>, truncation=<span class="hljs-literal">True</span>)

tokenized_datasets = dataset.<span class="hljs-built_in">map</span>(tokenize_function, batched=<span class="hljs-literal">True</span>)

small_train_dataset = tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>].shuffle(seed=<span class="hljs-number">42</span>).select(<span class="hljs-built_in">range</span>(<span class="hljs-number">200</span>))
small_eval_dataset = tokenized_datasets[<span class="hljs-string">&quot;test&quot;</span>].shuffle(seed=<span class="hljs-number">42</span>).select(<span class="hljs-built_in">range</span>(<span class="hljs-number">200</span>))

<span class="hljs-comment"># Setup evaluation </span>
metric = evaluate.load(<span class="hljs-string">&quot;accuracy&quot;</span>)

<span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_metrics</span>(<span class="hljs-params">eval_pred</span>):
    logits, labels = eval_pred
    predictions = np.argmax(logits, axis=-<span class="hljs-number">1</span>)
    <span class="hljs-keyword">return</span> metric.compute(predictions=predictions, references=labels)

<span class="hljs-comment"># Load pretrained model and evaluate model after each epoch</span>
model = AutoModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;bert-base-cased&quot;</span>, num_labels=<span class="hljs-number">5</span>)
training_args = TrainingArguments(output_dir=<span class="hljs-string">&quot;test_trainer&quot;</span>, evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>)

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=small_train_dataset,
    eval_dataset=small_eval_dataset,
    compute_metrics=compute_metrics,
)

trainer.train()`}}),A=new pa({}),O=new ca({props:{code:`import nltk
from datasets import load_dataset
import evaluate
import numpy as np
from transformers import AutoTokenizer, DataCollatorForSeq2Seq
from transformers import AutoModelForSeq2SeqLM, Seq2SeqTrainingArguments, Seq2SeqTrainer

# Prepare and tokenize dataset
billsum = load_dataset("billsum", split="ca_test").shuffle(seed=42).select(range(200))
billsum = billsum.train_test_split(test_size=0.2)
tokenizer = AutoTokenizer.from_pretrained("t5-small")
prefix = "summarize: "

def preprocess_function(examples):
    inputs = [prefix + doc for doc in examples["text"]]
    model_inputs = tokenizer(inputs, max_length=1024, truncation=True)

    labels = tokenizer(text_target=examples["summary"], max_length=128, truncation=True)

    model_inputs["labels"] = labels["input_ids"]
    return model_inputs

tokenized_billsum = billsum.map(preprocess_function, batched=True)

# Setup evaluation
nltk.download("punkt", quiet=True)
metric = evaluate.load("rouge")

def compute_metrics(eval_preds):
    preds, labels = eval_preds

    # decode preds and labels
    labels = np.where(labels != -100, labels, tokenizer.pad_token_id)
    decoded_preds = tokenizer.batch_decode(preds, skip_special_tokens=True)
    decoded_labels = tokenizer.batch_decode(labels, skip_special_tokens=True)

    # rougeLSum expects newline after each sentence
    decoded_preds = ["\\n".join(nltk.sent_tokenize(pred.strip())) for pred in decoded_preds]
    decoded_labels = ["\\n".join(nltk.sent_tokenize(label.strip())) for label in decoded_labels]

    result = metric.compute(predictions=decoded_preds, references=decoded_labels, use_stemmer=True)
    return result

# Load pretrained model and evaluate model after each epoch
model = AutoModelForSeq2SeqLM.from_pretrained("t5-small")
data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model)

training_args = Seq2SeqTrainingArguments(
    output_dir="./results",
    evaluation_strategy="epoch",
    learning_rate=2e-5,
    per_device_train_batch_size=16,
    per_device_eval_batch_size=4,
    weight_decay=0.01,
    save_total_limit=3,
    num_train_epochs=2,
    fp16=True,
    predict_with_generate=True
)

trainer = Seq2SeqTrainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_billsum["train"],
    eval_dataset=tokenized_billsum["test"],
    tokenizer=tokenizer,
    data_collator=data_collator,
    compute_metrics=compute_metrics
)

trainer.train()`,highlighted:`<span class="hljs-keyword">import</span> nltk
<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset
<span class="hljs-keyword">import</span> evaluate
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, DataCollatorForSeq2Seq
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForSeq2SeqLM, Seq2SeqTrainingArguments, Seq2SeqTrainer

<span class="hljs-comment"># Prepare and tokenize dataset</span>
billsum = load_dataset(<span class="hljs-string">&quot;billsum&quot;</span>, split=<span class="hljs-string">&quot;ca_test&quot;</span>).shuffle(seed=<span class="hljs-number">42</span>).select(<span class="hljs-built_in">range</span>(<span class="hljs-number">200</span>))
billsum = billsum.train_test_split(test_size=<span class="hljs-number">0.2</span>)
tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
prefix = <span class="hljs-string">&quot;summarize: &quot;</span>

<span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_function</span>(<span class="hljs-params">examples</span>):
    inputs = [prefix + doc <span class="hljs-keyword">for</span> doc <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;text&quot;</span>]]
    model_inputs = tokenizer(inputs, max_length=<span class="hljs-number">1024</span>, truncation=<span class="hljs-literal">True</span>)

    labels = tokenizer(text_target=examples[<span class="hljs-string">&quot;summary&quot;</span>], max_length=<span class="hljs-number">128</span>, truncation=<span class="hljs-literal">True</span>)

    model_inputs[<span class="hljs-string">&quot;labels&quot;</span>] = labels[<span class="hljs-string">&quot;input_ids&quot;</span>]
    <span class="hljs-keyword">return</span> model_inputs

tokenized_billsum = billsum.<span class="hljs-built_in">map</span>(preprocess_function, batched=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Setup evaluation</span>
nltk.download(<span class="hljs-string">&quot;punkt&quot;</span>, quiet=<span class="hljs-literal">True</span>)
metric = evaluate.load(<span class="hljs-string">&quot;rouge&quot;</span>)

<span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_metrics</span>(<span class="hljs-params">eval_preds</span>):
    preds, labels = eval_preds

    <span class="hljs-comment"># decode preds and labels</span>
    labels = np.where(labels != -<span class="hljs-number">100</span>, labels, tokenizer.pad_token_id)
    decoded_preds = tokenizer.batch_decode(preds, skip_special_tokens=<span class="hljs-literal">True</span>)
    decoded_labels = tokenizer.batch_decode(labels, skip_special_tokens=<span class="hljs-literal">True</span>)

    <span class="hljs-comment"># rougeLSum expects newline after each sentence</span>
    decoded_preds = [<span class="hljs-string">&quot;\\n&quot;</span>.join(nltk.sent_tokenize(pred.strip())) <span class="hljs-keyword">for</span> pred <span class="hljs-keyword">in</span> decoded_preds]
    decoded_labels = [<span class="hljs-string">&quot;\\n&quot;</span>.join(nltk.sent_tokenize(label.strip())) <span class="hljs-keyword">for</span> label <span class="hljs-keyword">in</span> decoded_labels]

    result = metric.compute(predictions=decoded_preds, references=decoded_labels, use_stemmer=<span class="hljs-literal">True</span>)
    <span class="hljs-keyword">return</span> result

<span class="hljs-comment"># Load pretrained model and evaluate model after each epoch</span>
model = AutoModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)
data_collator = DataCollatorForSeq2Seq(tokenizer=tokenizer, model=model)

training_args = Seq2SeqTrainingArguments(
    output_dir=<span class="hljs-string">&quot;./results&quot;</span>,
    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    learning_rate=<span class="hljs-number">2e-5</span>,
    per_device_train_batch_size=<span class="hljs-number">16</span>,
    per_device_eval_batch_size=<span class="hljs-number">4</span>,
    weight_decay=<span class="hljs-number">0.01</span>,
    save_total_limit=<span class="hljs-number">3</span>,
    num_train_epochs=<span class="hljs-number">2</span>,
    fp16=<span class="hljs-literal">True</span>,
    predict_with_generate=<span class="hljs-literal">True</span>
)

trainer = Seq2SeqTrainer(
    model=model,
    args=training_args,
    train_dataset=tokenized_billsum[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=tokenized_billsum[<span class="hljs-string">&quot;test&quot;</span>],
    tokenizer=tokenizer,
    data_collator=data_collator,
    compute_metrics=compute_metrics
)

trainer.train()`}}),{c(){k=n("meta"),oe=_(),q=n("h1"),w=n("a"),U=n("span"),P(S.$$.fragment),be=_(),B=n("span"),je=t("\u{1F917} Transformers"),ie=_(),D=n("p"),we=t("To run the \u{1F917} Transformers examples make sure you have installed the following libraries:"),pe=_(),P(z.$$.fragment),ce=_(),b=n("h2"),T=n("a"),I=n("span"),P(E.$$.fragment),Te=_(),W=n("span"),ye=t("Trainer"),de=_(),p=n("p"),Se=t("The metrics in "),G=n("code"),ze=t("evaluate"),Ee=t(" can be easily integrated with the "),x=n("a"),xe=t("Trainer"),$e=t(". The "),R=n("code"),Ae=t("Trainer"),Ce=t(" accepts a "),Y=n("code"),Oe=t("compute_metrics"),De=t(" keyword argument that passes a function to compute metrics. One can specify the evaluation interval with "),J=n("code"),Pe=t("evaluation_strategy"),Le=t(" in the "),K=n("code"),Me=t("TrainerArguments"),Fe=t(", and based on that, the model is evaluated accordingly, and the predictions and labels passed to "),Q=n("code"),Ne=t("compute_metrics"),He=t("."),ue=_(),P($.$$.fragment),me=_(),j=n("h2"),y=n("a"),V=n("span"),P(A.$$.fragment),Ue=_(),X=n("span"),Be=t("Seq2SeqTrainer"),he=_(),h=n("p"),Ie=t("We can use the "),C=n("a"),We=t("Seq2SeqTrainer"),Ge=t(" for sequence-to-sequence tasks such as translation or summarization. For such generative tasks usually metrics such as ROUGE or BLEU are evaluated. However, these metrics require that we generate some text with the model rather than a single forward pass as with e.g. classification. The "),Z=n("code"),Re=t("Seq2SeqTrainer"),Ye=t(" allows for the use of the generate method when setting "),ee=n("code"),Je=t("predict_with_generate=True"),Ke=t(" which will generate text for each sample in the evaluation set. That means we evaluate generated text within the "),ae=n("code"),Qe=t("compute_metric"),Ve=t(" function. We just need to decode the predictions and labels first."),_e=_(),P(O.$$.fragment),fe=_(),u=n("p"),Xe=t("You can use any "),se=n("code"),Ze=t("evaluate"),ea=t(" metric with the "),te=n("code"),aa=t("Trainer"),sa=t(" and "),re=n("code"),ta=t("Seq2SeqTrainer"),ra=t(" as long as they are compatible with the task and predictions. In case you don\u2019t want to train a model but just evaluate an existing model you can replace "),ne=n("code"),na=t("trainer.train()"),la=t(" with "),le=n("code"),oa=t("trainer.evaluate()"),ia=t(" in the above scripts."),this.h()},l(e){const i=Ua('[data-svelte="svelte-1phssyn"]',document.head);k=l(i,"META",{name:!0,content:!0}),i.forEach(s),oe=f(e),q=l(e,"H1",{class:!0});var ve=o(q);w=l(ve,"A",{id:!0,class:!0,href:!0});var ua=o(w);U=l(ua,"SPAN",{});var ma=o(U);L(S.$$.fragment,ma),ma.forEach(s),ua.forEach(s),be=f(ve),B=l(ve,"SPAN",{});var ha=o(B);je=r(ha,"\u{1F917} Transformers"),ha.forEach(s),ve.forEach(s),ie=f(e),D=l(e,"P",{});var _a=o(D);we=r(_a,"To run the \u{1F917} Transformers examples make sure you have installed the following libraries:"),_a.forEach(s),pe=f(e),L(z.$$.fragment,e),ce=f(e),b=l(e,"H2",{class:!0});var ke=o(b);T=l(ke,"A",{id:!0,class:!0,href:!0});var fa=o(T);I=l(fa,"SPAN",{});var ga=o(I);L(E.$$.fragment,ga),ga.forEach(s),fa.forEach(s),Te=f(ke),W=l(ke,"SPAN",{});var va=o(W);ye=r(va,"Trainer"),va.forEach(s),ke.forEach(s),de=f(e),p=l(e,"P",{});var m=o(p);Se=r(m,"The metrics in "),G=l(m,"CODE",{});var ka=o(G);ze=r(ka,"evaluate"),ka.forEach(s),Ee=r(m," can be easily integrated with the "),x=l(m,"A",{href:!0,rel:!0});var qa=o(x);xe=r(qa,"Trainer"),qa.forEach(s),$e=r(m,". The "),R=l(m,"CODE",{});var ba=o(R);Ae=r(ba,"Trainer"),ba.forEach(s),Ce=r(m," accepts a "),Y=l(m,"CODE",{});var ja=o(Y);Oe=r(ja,"compute_metrics"),ja.forEach(s),De=r(m," keyword argument that passes a function to compute metrics. One can specify the evaluation interval with "),J=l(m,"CODE",{});var wa=o(J);Pe=r(wa,"evaluation_strategy"),wa.forEach(s),Le=r(m," in the "),K=l(m,"CODE",{});var Ta=o(K);Me=r(Ta,"TrainerArguments"),Ta.forEach(s),Fe=r(m,", and based on that, the model is evaluated accordingly, and the predictions and labels passed to "),Q=l(m,"CODE",{});var ya=o(Q);Ne=r(ya,"compute_metrics"),ya.forEach(s),He=r(m,"."),m.forEach(s),ue=f(e),L($.$$.fragment,e),me=f(e),j=l(e,"H2",{class:!0});var qe=o(j);y=l(qe,"A",{id:!0,class:!0,href:!0});var Sa=o(y);V=l(Sa,"SPAN",{});var za=o(V);L(A.$$.fragment,za),za.forEach(s),Sa.forEach(s),Ue=f(qe),X=l(qe,"SPAN",{});var Ea=o(X);Be=r(Ea,"Seq2SeqTrainer"),Ea.forEach(s),qe.forEach(s),he=f(e),h=l(e,"P",{});var v=o(h);Ie=r(v,"We can use the "),C=l(v,"A",{href:!0,rel:!0});var xa=o(C);We=r(xa,"Seq2SeqTrainer"),xa.forEach(s),Ge=r(v," for sequence-to-sequence tasks such as translation or summarization. For such generative tasks usually metrics such as ROUGE or BLEU are evaluated. However, these metrics require that we generate some text with the model rather than a single forward pass as with e.g. classification. The "),Z=l(v,"CODE",{});var $a=o(Z);Re=r($a,"Seq2SeqTrainer"),$a.forEach(s),Ye=r(v," allows for the use of the generate method when setting "),ee=l(v,"CODE",{});var Aa=o(ee);Je=r(Aa,"predict_with_generate=True"),Aa.forEach(s),Ke=r(v," which will generate text for each sample in the evaluation set. That means we evaluate generated text within the "),ae=l(v,"CODE",{});var Ca=o(ae);Qe=r(Ca,"compute_metric"),Ca.forEach(s),Ve=r(v," function. We just need to decode the predictions and labels first."),v.forEach(s),_e=f(e),L(O.$$.fragment,e),fe=f(e),u=l(e,"P",{});var g=o(u);Xe=r(g,"You can use any "),se=l(g,"CODE",{});var Oa=o(se);Ze=r(Oa,"evaluate"),Oa.forEach(s),ea=r(g," metric with the "),te=l(g,"CODE",{});var Da=o(te);aa=r(Da,"Trainer"),Da.forEach(s),sa=r(g," and "),re=l(g,"CODE",{});var Pa=o(re);ta=r(Pa,"Seq2SeqTrainer"),Pa.forEach(s),ra=r(g," as long as they are compatible with the task and predictions. In case you don\u2019t want to train a model but just evaluate an existing model you can replace "),ne=l(g,"CODE",{});var La=o(ne);na=r(La,"trainer.train()"),La.forEach(s),la=r(g," with "),le=l(g,"CODE",{});var Ma=o(le);oa=r(Ma,"trainer.evaluate()"),Ma.forEach(s),ia=r(g," in the above scripts."),g.forEach(s),this.h()},h(){c(k,"name","hf:doc:metadata"),c(k,"content",JSON.stringify(Ga)),c(w,"id","transformers"),c(w,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(w,"href","#transformers"),c(q,"class","relative group"),c(T,"id","trainer"),c(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(T,"href","#trainer"),c(b,"class","relative group"),c(x,"href","https://huggingface.co/docs/transformers/main/en/main_classes/trainer#transformers.Trainer"),c(x,"rel","nofollow"),c(y,"id","seq2seqtrainer"),c(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(y,"href","#seq2seqtrainer"),c(j,"class","relative group"),c(C,"href","https://huggingface.co/docs/transformers/main/en/main_classes/trainer#transformers.Seq2SeqTrainer"),c(C,"rel","nofollow")},m(e,i){a(document.head,k),d(e,oe,i),d(e,q,i),a(q,w),a(w,U),M(S,U,null),a(q,be),a(q,B),a(B,je),d(e,ie,i),d(e,D,i),a(D,we),d(e,pe,i),M(z,e,i),d(e,ce,i),d(e,b,i),a(b,T),a(T,I),M(E,I,null),a(b,Te),a(b,W),a(W,ye),d(e,de,i),d(e,p,i),a(p,Se),a(p,G),a(G,ze),a(p,Ee),a(p,x),a(x,xe),a(p,$e),a(p,R),a(R,Ae),a(p,Ce),a(p,Y),a(Y,Oe),a(p,De),a(p,J),a(J,Pe),a(p,Le),a(p,K),a(K,Me),a(p,Fe),a(p,Q),a(Q,Ne),a(p,He),d(e,ue,i),M($,e,i),d(e,me,i),d(e,j,i),a(j,y),a(y,V),M(A,V,null),a(j,Ue),a(j,X),a(X,Be),d(e,he,i),d(e,h,i),a(h,Ie),a(h,C),a(C,We),a(h,Ge),a(h,Z),a(Z,Re),a(h,Ye),a(h,ee),a(ee,Je),a(h,Ke),a(h,ae),a(ae,Qe),a(h,Ve),d(e,_e,i),M(O,e,i),d(e,fe,i),d(e,u,i),a(u,Xe),a(u,se),a(se,Ze),a(u,ea),a(u,te),a(te,aa),a(u,sa),a(u,re),a(re,ta),a(u,ra),a(u,ne),a(ne,na),a(u,la),a(u,le),a(le,oa),a(u,ia),ge=!0},p:Ba,i(e){ge||(F(S.$$.fragment,e),F(z.$$.fragment,e),F(E.$$.fragment,e),F($.$$.fragment,e),F(A.$$.fragment,e),F(O.$$.fragment,e),ge=!0)},o(e){N(S.$$.fragment,e),N(z.$$.fragment,e),N(E.$$.fragment,e),N($.$$.fragment,e),N(A.$$.fragment,e),N(O.$$.fragment,e),ge=!1},d(e){s(k),e&&s(oe),e&&s(q),H(S),e&&s(ie),e&&s(D),e&&s(pe),H(z,e),e&&s(ce),e&&s(b),H(E),e&&s(de),e&&s(p),e&&s(ue),H($,e),e&&s(me),e&&s(j),H(A),e&&s(he),e&&s(h),e&&s(_e),H(O,e),e&&s(fe),e&&s(u)}}}const Ga={local:"transformers",sections:[{local:"trainer",title:"Trainer"},{local:"seq2seqtrainer",title:"Seq2SeqTrainer"}],title:"\u{1F917} Transformers"};function Ra(da){return Ia(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Qa extends Fa{constructor(k){super();Na(this,k,Ra,Wa,Ha,{})}}export{Qa as default,Ga as metadata};
