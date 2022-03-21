import{S as Nm,i as Mm,s as Bm,e as i,t as a,k as d,w as j,c as r,a as p,h as n,d as t,m as c,x as q,g as o,F as s,y as E,q as _,o as w,B as T,b as P,U as Lm,M as Wm,V as Hm,N as Sm,p as Fs,v as Vm,n as Ns}from"../../chunks/vendor-1e8b365d.js";import{T as xh}from"../../chunks/Tip-62b14c6e.js";import{Y as yh}from"../../chunks/Youtube-c2a8cc39.js";import{I as at}from"../../chunks/IconCopyLink-483c28ba.js";import{C as S}from"../../chunks/CodeBlock-e5764662.js";import{D as Im}from"../../chunks/DocNotebookDropdown-37d928d3.js";import{F as Qm}from"../../chunks/FrameworkSwitchCourse-7f8f0f31.js";function Rm(W){let h,g;return h=new Im({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section7_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section7_tf.ipynb"}]}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function Gm(W){let h,g;return h=new Im({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section7_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section7_pt.ipynb"}]}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function Um(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N;return{c(){h=i("p"),g=a("\u{1F4A1} Encoder-only models like BERT tend to be great at extracting answers to factoid questions like \u201CWho invented the Transformer architecture?\u201D but fare poorly when given open-ended questions like \u201CWhy is the sky blue?\u201D In these more challenging cases, encoder-decoder models like T5 and BART are typically used to synthesize the information in a way that\u2019s quite similar to "),f=i("a"),x=a("text summarization"),D=a(". If you\u2019re interested in this type of "),b=i("em"),$=a("generative"),y=a(" question answering, we recommend checking out our "),m=i("a"),O=a("demo"),k=a(" based on the "),v=i("a"),C=a("ELI5 dataset"),N=a("."),this.h()},l(z){h=r(z,"P",{});var A=p(h);g=n(A,"\u{1F4A1} Encoder-only models like BERT tend to be great at extracting answers to factoid questions like \u201CWho invented the Transformer architecture?\u201D but fare poorly when given open-ended questions like \u201CWhy is the sky blue?\u201D In these more challenging cases, encoder-decoder models like T5 and BART are typically used to synthesize the information in a way that\u2019s quite similar to "),f=r(A,"A",{href:!0});var Q=p(f);x=n(Q,"text summarization"),Q.forEach(t),D=n(A,". If you\u2019re interested in this type of "),b=r(A,"EM",{});var B=p(b);$=n(B,"generative"),B.forEach(t),y=n(A," question answering, we recommend checking out our "),m=r(A,"A",{href:!0,rel:!0});var R=p(m);O=n(R,"demo"),R.forEach(t),k=n(A," based on the "),v=r(A,"A",{href:!0,rel:!0});var M=p(v);C=n(M,"ELI5 dataset"),M.forEach(t),N=n(A,"."),A.forEach(t),this.h()},h(){P(f,"href","/course/chapter7/section5"),P(m,"href","https://yjernite.github.io/lfqa.html"),P(m,"rel","nofollow"),P(v,"href","https://huggingface.co/datasets/eli5"),P(v,"rel","nofollow")},m(z,A){o(z,h,A),s(h,g),s(h,f),s(f,x),s(h,D),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),s(h,v),s(v,C),s(h,N)},d(z){z&&t(h)}}}function Ym(W){let h,g,f,x,D,b,$,y,m,O,k;return{c(){h=i("p"),g=a("\u270F\uFE0F "),f=i("strong"),x=a("Your turn!"),D=a(" When using the XLNet architecture, padding is applied on the left and the question and context are switched. Adapt all the code we just saw to the XLNet architecture (and add "),b=i("code"),$=a("padding=True"),y=a("). Be aware that the "),m=i("code"),O=a("[CLS]"),k=a(" token may not be at the 0 position with padding applied.")},l(v){h=r(v,"P",{});var C=p(h);g=n(C,"\u270F\uFE0F "),f=r(C,"STRONG",{});var N=p(f);x=n(N,"Your turn!"),N.forEach(t),D=n(C," When using the XLNet architecture, padding is applied on the left and the question and context are switched. Adapt all the code we just saw to the XLNet architecture (and add "),b=r(C,"CODE",{});var z=p(b);$=n(z,"padding=True"),z.forEach(t),y=n(C,"). Be aware that the "),m=r(C,"CODE",{});var A=p(m);O=n(A,"[CLS]"),A.forEach(t),k=n(C," token may not be at the 0 position with padding applied."),C.forEach(t)},m(v,C){o(v,h,C),s(h,g),s(h,f),s(f,x),s(h,D),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k)},d(v){v&&t(h)}}}function Jm(W){let h,g,f,x,D,b,$,y,m,O,k;return x=new at({}),{c(){h=i("h2"),g=i("a"),f=i("span"),j(x.$$.fragment),D=d(),b=i("span"),$=a("Fine-tuning the model with Keras"),y=d(),m=i("p"),O=a("The training code for this example will look a lot like the code in the previous sections, but computing the metrics will be uniquely challenging. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The hard part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),this.h()},l(v){h=r(v,"H2",{class:!0});var C=p(h);g=r(C,"A",{id:!0,class:!0,href:!0});var N=p(g);f=r(N,"SPAN",{});var z=p(f);q(x.$$.fragment,z),z.forEach(t),N.forEach(t),D=c(C),b=r(C,"SPAN",{});var A=p(b);$=n(A,"Fine-tuning the model with Keras"),A.forEach(t),C.forEach(t),y=c(v),m=r(v,"P",{});var Q=p(m);O=n(Q,"The training code for this example will look a lot like the code in the previous sections, but computing the metrics will be uniquely challenging. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The hard part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),Q.forEach(t),this.h()},h(){P(g,"id","finetuning-the-model-with-keras"),P(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(g,"href","#finetuning-the-model-with-keras"),P(h,"class","relative group")},m(v,C){o(v,h,C),s(h,g),s(g,f),E(x,f,null),s(h,D),s(h,b),s(b,$),o(v,y,C),o(v,m,C),s(m,O),k=!0},i(v){k||(_(x.$$.fragment,v),k=!0)},o(v){w(x.$$.fragment,v),k=!1},d(v){v&&t(h),T(x),v&&t(y),v&&t(m)}}}function Xm(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N,z,A,Q;return x=new at({}),{c(){h=i("h2"),g=i("a"),f=i("span"),j(x.$$.fragment),D=d(),b=i("span"),$=a("Fine-tuning the model with the "),y=i("code"),m=a("Trainer"),O=a(" API"),k=d(),v=i("p"),C=a("The training code for this example will look a lot like the code in the previous sections \u2014 the hardest thing will be to write the "),N=i("code"),z=a("compute_metrics()"),A=a(" function. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The difficult part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),this.h()},l(B){h=r(B,"H2",{class:!0});var R=p(h);g=r(R,"A",{id:!0,class:!0,href:!0});var M=p(g);f=r(M,"SPAN",{});var L=p(f);q(x.$$.fragment,L),L.forEach(t),M.forEach(t),D=c(R),b=r(R,"SPAN",{});var H=p(b);$=n(H,"Fine-tuning the model with the "),y=r(H,"CODE",{});var X=p(y);m=n(X,"Trainer"),X.forEach(t),O=n(H," API"),H.forEach(t),R.forEach(t),k=c(B),v=r(B,"P",{});var G=p(v);C=n(G,"The training code for this example will look a lot like the code in the previous sections \u2014 the hardest thing will be to write the "),N=r(G,"CODE",{});var I=p(N);z=n(I,"compute_metrics()"),I.forEach(t),A=n(G," function. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The difficult part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),G.forEach(t),this.h()},h(){P(g,"id","finetuning-the-model-with-the-trainer-api"),P(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(g,"href","#finetuning-the-model-with-the-trainer-api"),P(h,"class","relative group")},m(B,R){o(B,h,R),s(h,g),s(g,f),E(x,f,null),s(h,D),s(h,b),s(b,$),s(b,y),s(y,m),s(b,O),o(B,k,R),o(B,v,R),s(v,C),s(v,N),s(N,z),s(v,A),Q=!0},i(B){Q||(_(x.$$.fragment,B),Q=!0)},o(B){w(x.$$.fragment,B),Q=!1},d(B){B&&t(h),T(x),B&&t(k),B&&t(v)}}}function Km(W){let h,g;return h=new yh({props:{id:"VN67ZpN33Ss"}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function Zm(W){let h,g;return h=new yh({props:{id:"BNy08iIWVJM"}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function e_(W){let h,g,f,x,D,b,$;return h=new S({props:{code:`import tensorflow as tf
from transformers import TFAutoModelForQuestionAnswering

eval_set_for_model = eval_set.remove_columns(["example_id", "offset_mapping"])
eval_set_for_model.set_format("numpy")

batch = {k: eval_set_for_model[k] for k in eval_set_for_model.column_names}
trained_model = TFAutoModelForQuestionAnswering.from_pretrained(trained_checkpoint)

outputs = trained_model(**batch)`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForQuestionAnswering

eval_set_for_model = eval_set.remove_columns([<span class="hljs-string">&quot;example_id&quot;</span>, <span class="hljs-string">&quot;offset_mapping&quot;</span>])
eval_set_for_model.set_format(<span class="hljs-string">&quot;numpy&quot;</span>)

batch = {k: eval_set_for_model[k] <span class="hljs-keyword">for</span> k <span class="hljs-keyword">in</span> eval_set_for_model.column_names}
trained_model = TFAutoModelForQuestionAnswering.from_pretrained(trained_checkpoint)

outputs = trained_model(**batch)`}}),b=new S({props:{code:`start_logits = outputs.start_logits.numpy()
end_logits = outputs.end_logits.numpy()`,highlighted:`start_logits = outputs.start_logits.numpy()
end_logits = outputs.end_logits.numpy()`}}),{c(){j(h.$$.fragment),g=d(),f=i("p"),x=a("For ease of experimentation, let\u2019s convert these outputs to NumPy arrays:"),D=d(),j(b.$$.fragment)},l(y){q(h.$$.fragment,y),g=c(y),f=r(y,"P",{});var m=p(f);x=n(m,"For ease of experimentation, let\u2019s convert these outputs to NumPy arrays:"),m.forEach(t),D=c(y),q(b.$$.fragment,y)},m(y,m){E(h,y,m),o(y,g,m),o(y,f,m),s(f,x),o(y,D,m),E(b,y,m),$=!0},i(y){$||(_(h.$$.fragment,y),_(b.$$.fragment,y),$=!0)},o(y){w(h.$$.fragment,y),w(b.$$.fragment,y),$=!1},d(y){T(h,y),y&&t(g),y&&t(f),y&&t(D),T(b,y)}}}function t_(W){let h,g,f,x,D,b,$,y,m,O;return h=new S({props:{code:`import torch
from transformers import AutoModelForQuestionAnswering

eval_set_for_model = eval_set.remove_columns(["example_id", "offset_mapping"])
eval_set_for_model.set_format("torch")

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
batch = {k: eval_set_for_model[k].to(device) for k in eval_set_for_model.column_names}
trained_model = AutoModelForQuestionAnswering.from_pretrained(trained_checkpoint).to(
    device
)

with torch.no_grad():
    outputs = trained_model(**batch)`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForQuestionAnswering

eval_set_for_model = eval_set.remove_columns([<span class="hljs-string">&quot;example_id&quot;</span>, <span class="hljs-string">&quot;offset_mapping&quot;</span>])
eval_set_for_model.set_format(<span class="hljs-string">&quot;torch&quot;</span>)

device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> torch.device(<span class="hljs-string">&quot;cpu&quot;</span>)
batch = {k: eval_set_for_model[k].to(device) <span class="hljs-keyword">for</span> k <span class="hljs-keyword">in</span> eval_set_for_model.column_names}
trained_model = AutoModelForQuestionAnswering.from_pretrained(trained_checkpoint).to(
    device
)

<span class="hljs-keyword">with</span> torch.no_grad():
    outputs = trained_model(**batch)`}}),m=new S({props:{code:`start_logits = outputs.start_logits.cpu().numpy()
end_logits = outputs.end_logits.cpu().numpy()`,highlighted:`start_logits = outputs.start_logits.cpu().numpy()
end_logits = outputs.end_logits.cpu().numpy()`}}),{c(){j(h.$$.fragment),g=d(),f=i("p"),x=a("Since the "),D=i("code"),b=a("Trainer"),$=a(" will give us predictions as NumPy arrays, we grab the start and end logits and convert them to that format:"),y=d(),j(m.$$.fragment)},l(k){q(h.$$.fragment,k),g=c(k),f=r(k,"P",{});var v=p(f);x=n(v,"Since the "),D=r(v,"CODE",{});var C=p(D);b=n(C,"Trainer"),C.forEach(t),$=n(v," will give us predictions as NumPy arrays, we grab the start and end logits and convert them to that format:"),v.forEach(t),y=c(k),q(m.$$.fragment,k)},m(k,v){E(h,k,v),o(k,g,v),o(k,f,v),s(f,x),s(f,D),s(D,b),s(f,$),o(k,y,v),E(m,k,v),O=!0},i(k){O||(_(h.$$.fragment,k),_(m.$$.fragment,k),O=!0)},o(k){w(h.$$.fragment,k),w(m.$$.fragment,k),O=!1},d(k){T(h,k),k&&t(g),k&&t(f),k&&t(y),T(m,k)}}}function s_(W){let h,g,f,x,D;return{c(){h=i("p"),g=a("Now let\u2019s put everything we just did in a "),f=i("code"),x=a("compute_metrics()"),D=a(" function that we will use after training our model. We will need to pass a bit more than just the output logits, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts:")},l(b){h=r(b,"P",{});var $=p(h);g=n($,"Now let\u2019s put everything we just did in a "),f=r($,"CODE",{});var y=p(f);x=n(y,"compute_metrics()"),y.forEach(t),D=n($," function that we will use after training our model. We will need to pass a bit more than just the output logits, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts:"),$.forEach(t)},m(b,$){o(b,h,$),s(h,g),s(h,f),s(f,x),s(h,D)},d(b){b&&t(h)}}}function a_(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N,z,A,Q,B,R,M;return{c(){h=i("p"),g=a("Now let\u2019s put everything we just did in a "),f=i("code"),x=a("compute_metrics()"),D=a(" function that we will use in the "),b=i("code"),$=a("Trainer"),y=a(". Normally, that "),m=i("code"),O=a("compute_metrics()"),k=a(" function only receives a tuple "),v=i("code"),C=a("eval_preds"),N=a(" with logits and labels. Here we will need a bit more, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts, so we won\u2019t be able to use this function to get regular evaluation results during training. We will only use it at the end of training to check the results."),z=d(),A=i("p"),Q=a("The "),B=i("code"),R=a("compute_metrics()"),M=a(" function groups the same steps as before; we just add a small check in case we don\u2019t come up with any valid answers (in which case we predict an empty string).")},l(L){h=r(L,"P",{});var H=p(h);g=n(H,"Now let\u2019s put everything we just did in a "),f=r(H,"CODE",{});var X=p(f);x=n(X,"compute_metrics()"),X.forEach(t),D=n(H," function that we will use in the "),b=r(H,"CODE",{});var G=p(b);$=n(G,"Trainer"),G.forEach(t),y=n(H,". Normally, that "),m=r(H,"CODE",{});var I=p(m);O=n(I,"compute_metrics()"),I.forEach(t),k=n(H," function only receives a tuple "),v=r(H,"CODE",{});var U=p(v);C=n(U,"eval_preds"),U.forEach(t),N=n(H," with logits and labels. Here we will need a bit more, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts, so we won\u2019t be able to use this function to get regular evaluation results during training. We will only use it at the end of training to check the results."),H.forEach(t),z=c(L),A=r(L,"P",{});var K=p(A);Q=n(K,"The "),B=r(K,"CODE",{});var te=p(B);R=n(te,"compute_metrics()"),te.forEach(t),M=n(K," function groups the same steps as before; we just add a small check in case we don\u2019t come up with any valid answers (in which case we predict an empty string)."),K.forEach(t)},m(L,H){o(L,h,H),s(h,g),s(h,f),s(f,x),s(h,D),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),s(h,v),s(v,C),s(h,N),o(L,z,H),o(L,A,H),s(A,Q),s(A,B),s(B,R),s(A,M)},d(L){L&&t(h),L&&t(z),L&&t(A)}}}function n_(W){let h,g,f,x,D,b,$,y;return $=new S({props:{code:"model = TFAutoModelForQuestionAnswering.from_pretrained(model_checkpoint)",highlighted:"model = TFAutoModelForQuestionAnswering.from_pretrained(model_checkpoint)"}}),{c(){h=i("p"),g=a("We are now ready to train our model. Let\u2019s create it first, using the "),f=i("code"),x=a("TFAutoModelForQuestionAnswering"),D=a(" class like before:"),b=d(),j($.$$.fragment)},l(m){h=r(m,"P",{});var O=p(h);g=n(O,"We are now ready to train our model. Let\u2019s create it first, using the "),f=r(O,"CODE",{});var k=p(f);x=n(k,"TFAutoModelForQuestionAnswering"),k.forEach(t),D=n(O," class like before:"),O.forEach(t),b=c(m),q($.$$.fragment,m)},m(m,O){o(m,h,O),s(h,g),s(h,f),s(f,x),s(h,D),o(m,b,O),E($,m,O),y=!0},i(m){y||(_($.$$.fragment,m),y=!0)},o(m){w($.$$.fragment,m),y=!1},d(m){m&&t(h),m&&t(b),T($,m)}}}function o_(W){let h,g,f,x,D,b,$,y;return $=new S({props:{code:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)",highlighted:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)"}}),{c(){h=i("p"),g=a("We are now ready to train our model. Let\u2019s create it first, using the "),f=i("code"),x=a("AutoModelForQuestionAnswering"),D=a(" class like before:"),b=d(),j($.$$.fragment)},l(m){h=r(m,"P",{});var O=p(h);g=n(O,"We are now ready to train our model. Let\u2019s create it first, using the "),f=r(O,"CODE",{});var k=p(f);x=n(k,"AutoModelForQuestionAnswering"),k.forEach(t),D=n(O," class like before:"),O.forEach(t),b=c(m),q($.$$.fragment,m)},m(m,O){o(m,h,O),s(h,g),s(h,f),s(f,x),s(h,D),o(m,b,O),E($,m,O),y=!0},i(m){y||(_($.$$.fragment,m),y=!0)},o(m){w($.$$.fragment,m),y=!1},d(m){m&&t(h),m&&t(b),T($,m)}}}function i_(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N,z,A,Q,B,R,M,L,H,X,G;return x=new S({props:{code:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator(return_tensors="tf")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

data_collator = DefaultDataCollator(return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),m=new S({props:{code:`tf_train_dataset = train_dataset.to_tf_dataset(
    columns=[
        "input_ids",
        "start_positions",
        "end_positions",
        "attention_mask",
        "token_type_ids",
    ],
    collate_fn=data_collator,
    shuffle=True,
    batch_size=16,
)
tf_eval_dataset = validation_dataset.to_tf_dataset(
    columns=["input_ids", "attention_mask", "token_type_ids"],
    collate_fn=data_collator,
    shuffle=False,
    batch_size=16,
)`,highlighted:`tf_train_dataset = train_dataset.to_tf_dataset(
    columns=[
        <span class="hljs-string">&quot;input_ids&quot;</span>,
        <span class="hljs-string">&quot;start_positions&quot;</span>,
        <span class="hljs-string">&quot;end_positions&quot;</span>,
        <span class="hljs-string">&quot;attention_mask&quot;</span>,
        <span class="hljs-string">&quot;token_type_ids&quot;</span>,
    ],
    collate_fn=data_collator,
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">16</span>,
)
tf_eval_dataset = validation_dataset.to_tf_dataset(
    columns=[<span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;token_type_ids&quot;</span>],
    collate_fn=data_collator,
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">16</span>,
)`}}),N=new S({props:{code:`from transformers import create_optimizer
from transformers.keras_callbacks import PushToHubCallback
import tensorflow as tf

# The number of training steps is the number of samples in the dataset, divided by the batch size then multiplied
# by the total number of epochs. Note that the tf_train_dataset here is a batched tf.data.Dataset,
# not the original Hugging Face Dataset, so its len() is already num_samples // batch_size.
num_train_epochs = 3
num_train_steps = len(tf_train_dataset) * num_train_epochs
optimizer, schedule = create_optimizer(
    init_lr=2e-5,
    num_warmup_steps=0,
    num_train_steps=num_train_steps,
    weight_decay_rate=0.01,
)
model.compile(optimizer=optimizer)

# Train in mixed-precision float16
tf.keras.mixed_precision.set_global_policy("mixed_float16")`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">from</span> transformers.keras_callbacks <span class="hljs-keyword">import</span> PushToHubCallback
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-comment"># The number of training steps is the number of samples in the dataset, divided by the batch size then multiplied</span>
<span class="hljs-comment"># by the total number of epochs. Note that the tf_train_dataset here is a batched tf.data.Dataset,</span>
<span class="hljs-comment"># not the original Hugging Face Dataset, so its len() is already num_samples // batch_size.</span>
num_train_epochs = <span class="hljs-number">3</span>
num_train_steps = <span class="hljs-built_in">len</span>(tf_train_dataset) * num_train_epochs
optimizer, schedule = create_optimizer(
    init_lr=<span class="hljs-number">2e-5</span>,
    num_warmup_steps=<span class="hljs-number">0</span>,
    num_train_steps=num_train_steps,
    weight_decay_rate=<span class="hljs-number">0.01</span>,
)
model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)

<span class="hljs-comment"># Train in mixed-precision float16</span>
tf.keras.mixed_precision.set_global_policy(<span class="hljs-string">&quot;mixed_float16&quot;</span>)`}}),{c(){h=i("p"),g=a("Now that\u2019s done, we can create our TF Datasets. We can use the simple default data collator this time:"),f=d(),j(x.$$.fragment),D=d(),b=i("p"),$=a("And now we create the datasets as usual."),y=d(),j(m.$$.fragment),O=d(),k=i("p"),v=a("Next, we set up our training hyperparameters and compile our model:"),C=d(),j(N.$$.fragment),z=d(),A=i("p"),Q=a("Finally, we\u2019re ready to train with "),B=i("code"),R=a("model.fit()"),M=a(". We use a "),L=i("code"),H=a("PushToHubCallback"),X=a(" to upload the model to the Hub after each epoch.")},l(I){h=r(I,"P",{});var U=p(h);g=n(U,"Now that\u2019s done, we can create our TF Datasets. We can use the simple default data collator this time:"),U.forEach(t),f=c(I),q(x.$$.fragment,I),D=c(I),b=r(I,"P",{});var K=p(b);$=n(K,"And now we create the datasets as usual."),K.forEach(t),y=c(I),q(m.$$.fragment,I),O=c(I),k=r(I,"P",{});var te=p(k);v=n(te,"Next, we set up our training hyperparameters and compile our model:"),te.forEach(t),C=c(I),q(N.$$.fragment,I),z=c(I),A=r(I,"P",{});var Y=p(A);Q=n(Y,"Finally, we\u2019re ready to train with "),B=r(Y,"CODE",{});var ie=p(B);R=n(ie,"model.fit()"),ie.forEach(t),M=n(Y,". We use a "),L=r(Y,"CODE",{});var _e=p(L);H=n(_e,"PushToHubCallback"),_e.forEach(t),X=n(Y," to upload the model to the Hub after each epoch."),Y.forEach(t)},m(I,U){o(I,h,U),s(h,g),o(I,f,U),E(x,I,U),o(I,D,U),o(I,b,U),s(b,$),o(I,y,U),E(m,I,U),o(I,O,U),o(I,k,U),s(k,v),o(I,C,U),E(N,I,U),o(I,z,U),o(I,A,U),s(A,Q),s(A,B),s(B,R),s(A,M),s(A,L),s(L,H),s(A,X),G=!0},i(I){G||(_(x.$$.fragment,I),_(m.$$.fragment,I),_(N.$$.fragment,I),G=!0)},o(I){w(x.$$.fragment,I),w(m.$$.fragment,I),w(N.$$.fragment,I),G=!1},d(I){I&&t(h),I&&t(f),T(x,I),I&&t(D),I&&t(b),I&&t(y),T(m,I),I&&t(O),I&&t(k),I&&t(C),T(N,I),I&&t(z),I&&t(A)}}}function r_(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N,z,A,Q,B,R,M,L,H,X,G,I,U,K,te,Y,ie,_e,Ae,xe,ye,We;return te=new S({props:{code:`from transformers import TrainingArguments

args = TrainingArguments(
    "bert-finetuned-squad",
    evaluation_strategy="no",
    save_strategy="epoch",
    learning_rate=2e-5,
    num_train_epochs=3,
    weight_decay=0.01,
    fp16=True,
    push_to_hub=True,
)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrainingArguments

args = TrainingArguments(
    <span class="hljs-string">&quot;bert-finetuned-squad&quot;</span>,
    evaluation_strategy=<span class="hljs-string">&quot;no&quot;</span>,
    save_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    learning_rate=<span class="hljs-number">2e-5</span>,
    num_train_epochs=<span class="hljs-number">3</span>,
    weight_decay=<span class="hljs-number">0.01</span>,
    fp16=<span class="hljs-literal">True</span>,
    push_to_hub=<span class="hljs-literal">True</span>,
)`}}),{c(){h=i("p"),g=a("Once this is done, we can define our "),f=i("code"),x=a("TrainingArguments"),D=a(". As we said when we defined our function to compute the metric, we won\u2019t be able to have a regular evaluation loop because of the signature of the "),b=i("code"),$=a("compute_metrics()"),y=a(" function. We could write our own subclass of "),m=i("code"),O=a("Trainer"),k=a(" to do this (an approach you can find in the "),v=i("a"),C=a("question answering example script"),N=a("), but that\u2019s a bit too long for this section. Instead, we will only evaluate the model at the end of training here and show you how to do a regular evaluation in \u201CA custom training loop\u201D below."),z=d(),A=i("p"),Q=a("This is really where the "),B=i("code"),R=a("Trainer"),M=a(" API shows its limits and the \u{1F917} Accelerate library shines: customizing the class to a specific use case can be painful, but tweaking a fully exposed training loop is easy."),L=d(),H=i("p"),X=a("Let\u2019s take a look at our "),G=i("code"),I=a("TrainingArguments"),U=a(":"),K=d(),j(te.$$.fragment),Y=d(),ie=i("p"),_e=a("We\u2019ve seen most of these before: we set some hyperparameters (like the learning rate, the number of epochs we train for, and some weight decay) and indicate that we want to save the model at the end of every epoch, skip evaluation, and upload our results to the Model Hub. We also enable mixed-precision training with "),Ae=i("code"),xe=a("fp16=True"),ye=a(", as it can speed up the training nicely on a recent GPU."),this.h()},l(V){h=r(V,"P",{});var J=p(h);g=n(J,"Once this is done, we can define our "),f=r(J,"CODE",{});var De=p(f);x=n(De,"TrainingArguments"),De.forEach(t),D=n(J,". As we said when we defined our function to compute the metric, we won\u2019t be able to have a regular evaluation loop because of the signature of the "),b=r(J,"CODE",{});var as=p(b);$=n(as,"compute_metrics()"),as.forEach(t),y=n(J," function. We could write our own subclass of "),m=r(J,"CODE",{});var nt=p(m);O=n(nt,"Trainer"),nt.forEach(t),k=n(J," to do this (an approach you can find in the "),v=r(J,"A",{href:!0,rel:!0});var mt=p(v);C=n(mt,"question answering example script"),mt.forEach(t),N=n(J,"), but that\u2019s a bit too long for this section. Instead, we will only evaluate the model at the end of training here and show you how to do a regular evaluation in \u201CA custom training loop\u201D below."),J.forEach(t),z=c(V),A=r(V,"P",{});var de=p(A);Q=n(de,"This is really where the "),B=r(de,"CODE",{});var ot=p(B);R=n(ot,"Trainer"),ot.forEach(t),M=n(de," API shows its limits and the \u{1F917} Accelerate library shines: customizing the class to a specific use case can be painful, but tweaking a fully exposed training loop is easy."),de.forEach(t),L=c(V),H=r(V,"P",{});var se=p(H);X=n(se,"Let\u2019s take a look at our "),G=r(se,"CODE",{});var we=p(G);I=n(we,"TrainingArguments"),we.forEach(t),U=n(se,":"),se.forEach(t),K=c(V),q(te.$$.fragment,V),Y=c(V),ie=r(V,"P",{});var ce=p(ie);_e=n(ce,"We\u2019ve seen most of these before: we set some hyperparameters (like the learning rate, the number of epochs we train for, and some weight decay) and indicate that we want to save the model at the end of every epoch, skip evaluation, and upload our results to the Model Hub. We also enable mixed-precision training with "),Ae=r(ce,"CODE",{});var Pe=p(Ae);xe=n(Pe,"fp16=True"),Pe.forEach(t),ye=n(ce,", as it can speed up the training nicely on a recent GPU."),ce.forEach(t),this.h()},h(){P(v,"href","https://github.com/huggingface/transformers/blob/master/examples/pytorch/question-answering/trainer_qa.py"),P(v,"rel","nofollow")},m(V,J){o(V,h,J),s(h,g),s(h,f),s(f,x),s(h,D),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),s(h,v),s(v,C),s(h,N),o(V,z,J),o(V,A,J),s(A,Q),s(A,B),s(B,R),s(A,M),o(V,L,J),o(V,H,J),s(H,X),s(H,G),s(G,I),s(H,U),o(V,K,J),E(te,V,J),o(V,Y,J),o(V,ie,J),s(ie,_e),s(ie,Ae),s(Ae,xe),s(ie,ye),We=!0},i(V){We||(_(te.$$.fragment,V),We=!0)},o(V){w(te.$$.fragment,V),We=!1},d(V){V&&t(h),V&&t(z),V&&t(A),V&&t(L),V&&t(H),V&&t(K),T(te,V),V&&t(Y),V&&t(ie)}}}function l_(W){let h,g;return h=new S({props:{code:`from transformers.keras_callbacks import PushToHubCallback

callback = PushToHubCallback(output_dir="bert-finetuned-squad", tokenizer=tokenizer)

# We're going to do validation afterwards, so no validation mid-training
model.fit(tf_train_dataset, callbacks=[callback], epochs=num_train_epochs)`,highlighted:`<span class="hljs-keyword">from</span> transformers.keras_callbacks <span class="hljs-keyword">import</span> PushToHubCallback

callback = PushToHubCallback(output_dir=<span class="hljs-string">&quot;bert-finetuned-squad&quot;</span>, tokenizer=tokenizer)

<span class="hljs-comment"># We&#x27;re going to do validation afterwards, so no validation mid-training</span>
model.fit(tf_train_dataset, callbacks=[callback], epochs=num_train_epochs)`}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function p_(W){let h,g,f,x,D,b,$,y,m,O;return h=new xh({props:{$$slots:{default:[h_]},$$scope:{ctx:W}}}),m=new S({props:{code:`from transformers import Trainer

trainer = Trainer(
    model=model,
    args=args,
    train_dataset=train_dataset,
    eval_dataset=validation_dataset,
    tokenizer=tokenizer,
)
trainer.train()`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Trainer

trainer = Trainer(
    model=model,
    args=args,
    train_dataset=train_dataset,
    eval_dataset=validation_dataset,
    tokenizer=tokenizer,
)
trainer.train()`}}),{c(){j(h.$$.fragment),g=d(),f=i("p"),x=a("Finally, we just pass everything to the "),D=i("code"),b=a("Trainer"),$=a(" class and launch the training:"),y=d(),j(m.$$.fragment)},l(k){q(h.$$.fragment,k),g=c(k),f=r(k,"P",{});var v=p(f);x=n(v,"Finally, we just pass everything to the "),D=r(v,"CODE",{});var C=p(D);b=n(C,"Trainer"),C.forEach(t),$=n(v," class and launch the training:"),v.forEach(t),y=c(k),q(m.$$.fragment,k)},m(k,v){E(h,k,v),o(k,g,v),o(k,f,v),s(f,x),s(f,D),s(D,b),s(f,$),o(k,y,v),E(m,k,v),O=!0},i(k){O||(_(h.$$.fragment,k),_(m.$$.fragment,k),O=!0)},o(k){w(h.$$.fragment,k),w(m.$$.fragment,k),O=!1},d(k){T(h,k),k&&t(g),k&&t(f),k&&t(y),T(m,k)}}}function h_(W){let h,g,f,x,D;return{c(){h=i("p"),g=a("\u{1F4A1} If the output directory you are using exists, it needs to be a local clone of the repository you want to push to (so set a new name if you get an error when defining your "),f=i("code"),x=a("Trainer"),D=a(").")},l(b){h=r(b,"P",{});var $=p(h);g=n($,"\u{1F4A1} If the output directory you are using exists, it needs to be a local clone of the repository you want to push to (so set a new name if you get an error when defining your "),f=r($,"CODE",{});var y=p(f);x=n(y,"Trainer"),y.forEach(t),D=n($,")."),$.forEach(t)},m(b,$){o(b,h,$),s(h,g),s(h,f),s(f,x),s(h,D)},d(b){b&&t(h)}}}function d_(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N;return C=new S({props:{code:`predictions = model.predict(tf_eval_dataset)
compute_metrics(
    predictions["start_logits"],
    predictions["end_logits"],
    validation_dataset,
    raw_datasets["validation"],
)`,highlighted:`predictions = model.predict(tf_eval_dataset)
compute_metrics(
    predictions[<span class="hljs-string">&quot;start_logits&quot;</span>],
    predictions[<span class="hljs-string">&quot;end_logits&quot;</span>],
    validation_dataset,
    raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>],
)`}}),{c(){h=i("p"),g=a("Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=i("code"),x=a("predict()"),D=a(" method of our "),b=i("code"),$=a("model"),y=a(" will take care of getting predictions, and since we did all the hard work of defining a "),m=i("code"),O=a("compute_metrics()"),k=a(" function earlier, we can get our results in a single line:"),v=d(),j(C.$$.fragment)},l(z){h=r(z,"P",{});var A=p(h);g=n(A,"Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=r(A,"CODE",{});var Q=p(f);x=n(Q,"predict()"),Q.forEach(t),D=n(A," method of our "),b=r(A,"CODE",{});var B=p(b);$=n(B,"model"),B.forEach(t),y=n(A," will take care of getting predictions, and since we did all the hard work of defining a "),m=r(A,"CODE",{});var R=p(m);O=n(R,"compute_metrics()"),R.forEach(t),k=n(A," function earlier, we can get our results in a single line:"),A.forEach(t),v=c(z),q(C.$$.fragment,z)},m(z,A){o(z,h,A),s(h,g),s(h,f),s(f,x),s(h,D),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),o(z,v,A),E(C,z,A),N=!0},i(z){N||(_(C.$$.fragment,z),N=!0)},o(z){w(C.$$.fragment,z),N=!1},d(z){z&&t(h),z&&t(v),T(C,z)}}}function c_(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N;return C=new S({props:{code:`predictions, _ = trainer.predict(validation_dataset)
start_logits, end_logits = predictions
compute_metrics(start_logits, end_logits, validation_dataset, raw_datasets["validation"])`,highlighted:`predictions, _ = trainer.predict(validation_dataset)
start_logits, end_logits = predictions
compute_metrics(start_logits, end_logits, validation_dataset, raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>])`}}),{c(){h=i("p"),g=a("Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=i("code"),x=a("predict()"),D=a(" method of the "),b=i("code"),$=a("Trainer"),y=a(" will return a tuple where the first elements will be the predictions of the model (here a pair with the start and end logits). We send this to our "),m=i("code"),O=a("compute_metrics()"),k=a(" function:"),v=d(),j(C.$$.fragment)},l(z){h=r(z,"P",{});var A=p(h);g=n(A,"Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=r(A,"CODE",{});var Q=p(f);x=n(Q,"predict()"),Q.forEach(t),D=n(A," method of the "),b=r(A,"CODE",{});var B=p(b);$=n(B,"Trainer"),B.forEach(t),y=n(A," will return a tuple where the first elements will be the predictions of the model (here a pair with the start and end logits). We send this to our "),m=r(A,"CODE",{});var R=p(m);O=n(R,"compute_metrics()"),R.forEach(t),k=n(A," function:"),A.forEach(t),v=c(z),q(C.$$.fragment,z)},m(z,A){o(z,h,A),s(h,g),s(h,f),s(f,x),s(h,D),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),o(z,v,A),E(C,z,A),N=!0},i(z){N||(_(C.$$.fragment,z),N=!0)},o(z){w(C.$$.fragment,z),N=!1},d(z){z&&t(h),z&&t(v),T(C,z)}}}function Om(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N,z,A,Q,B,R;return $=new S({props:{code:'trainer.push_to_hub(commit_message="Training complete")',highlighted:'trainer.push_to_hub(commit_message=<span class="hljs-string">&quot;Training complete&quot;</span>)'}}),v=new S({props:{code:"'https://huggingface.co/sgugger/bert-finetuned-squad/commit/9dcee1fbc25946a6ed4bb32efb1bd71d5fa90b68'",highlighted:'<span class="hljs-string">&#x27;https://huggingface.co/sgugger/bert-finetuned-squad/commit/9dcee1fbc25946a6ed4bb32efb1bd71d5fa90b68&#x27;</span>'}}),{c(){h=i("p"),g=a("Finally, we use the "),f=i("code"),x=a("push_to_hub()"),D=a(" method to make sure we upload the latest version of the model:"),b=d(),j($.$$.fragment),y=d(),m=i("p"),O=a("This returns the URL of the commit it just did, if you want to inspect it:"),k=d(),j(v.$$.fragment),C=d(),N=i("p"),z=a("The "),A=i("code"),Q=a("Trainer"),B=a(" also drafts a model card with all the evaluation results and uploads it.")},l(M){h=r(M,"P",{});var L=p(h);g=n(L,"Finally, we use the "),f=r(L,"CODE",{});var H=p(f);x=n(H,"push_to_hub()"),H.forEach(t),D=n(L," method to make sure we upload the latest version of the model:"),L.forEach(t),b=c(M),q($.$$.fragment,M),y=c(M),m=r(M,"P",{});var X=p(m);O=n(X,"This returns the URL of the commit it just did, if you want to inspect it:"),X.forEach(t),k=c(M),q(v.$$.fragment,M),C=c(M),N=r(M,"P",{});var G=p(N);z=n(G,"The "),A=r(G,"CODE",{});var I=p(A);Q=n(I,"Trainer"),I.forEach(t),B=n(G," also drafts a model card with all the evaluation results and uploads it."),G.forEach(t)},m(M,L){o(M,h,L),s(h,g),s(h,f),s(f,x),s(h,D),o(M,b,L),E($,M,L),o(M,y,L),o(M,m,L),s(m,O),o(M,k,L),E(v,M,L),o(M,C,L),o(M,N,L),s(N,z),s(N,A),s(A,Q),s(N,B),R=!0},i(M){R||(_($.$$.fragment,M),_(v.$$.fragment,M),R=!0)},o(M){w($.$$.fragment,M),w(v.$$.fragment,M),R=!1},d(M){M&&t(h),M&&t(b),T($,M),M&&t(y),M&&t(m),M&&t(k),T(v,M),M&&t(C),M&&t(N)}}}function u_(W){let h,g,f,x,D;return{c(){h=i("p"),g=a("\u270F\uFE0F "),f=i("strong"),x=a("Your turn!"),D=a(" Try another model architecture to see if it performs better on this task!")},l(b){h=r(b,"P",{});var $=p(h);g=n($,"\u270F\uFE0F "),f=r($,"STRONG",{});var y=p(f);x=n(y,"Your turn!"),y.forEach(t),D=n($," Try another model architecture to see if it performs better on this task!"),$.forEach(t)},m(b,$){o(b,h,$),s(h,g),s(h,f),s(f,x),s(h,D)},d(b){b&&t(h)}}}function zm(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N,z,A,Q,B,R,M,L,H,X,G,I,U,K,te,Y,ie,_e,Ae,xe,ye,We,V,J,De,as,nt,mt,de,ot,se,we,ce,Pe,va,He,xa,Ve,Ce,Ms,_t,An,ya,ke,ka,oe,$a,$e,it,Bs,Qe,Dn,Ls,Ws,ja,rt,Hs,Vs,Pn,Qs,qa,wt,Rs,Se,Ea,je,gt,ns,bt,Ta,pe,Cn,Gs,Aa,vt,os,ge,Sn,xt,On,zn,is,yt,Da,Re,Pa,ae,Ca,Ge,Sa,kt,rs,ls,In,ps,$t,Oa,be,Fn,Us,Ys,Nn,Js,Xs,Mn,za,Oe,ue,Ks,Ue,Bn,Zs,Ia,lt,jt,qt,ea,fe,Et,Fa,Ye,Na,Tt,Ma,he,Ln,hs,At,Ba,Je,La,ds,ta,Wa,Xe,pt,qe,Dt,sa,aa,Wn,cs,Pt,Ha,Ct,us,Va,St,Ot,na,ze,Qa,me,zt,ht,Z,Hn,It,Vn,Qn,Ft,Rn,Gn,fs,Nt,Ra,Ke,Ga,ms,oa,Ua,Mt,_s,ws,Un,gs,Bt,Ya,dt,Ee,bs,ia,Ja,Ze,Ie,Xa,Yn,vs,Jn;return $=new at({}),G=new at({}),se=new S({props:{code:`from torch.utils.data import DataLoader
from transformers import default_data_collator

train_dataset.set_format("torch")
validation_set = validation_dataset.remove_columns(["example_id", "offset_mapping"])
validation_set.set_format("torch")

train_dataloader = DataLoader(
    train_dataset,
    shuffle=True,
    collate_fn=default_data_collator,
    batch_size=8,
)
eval_dataloader = DataLoader(
    validation_set, collate_fn=default_data_collator, batch_size=8
)`,highlighted:`<span class="hljs-keyword">from</span> torch.utils.data <span class="hljs-keyword">import</span> DataLoader
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> default_data_collator

train_dataset.set_format(<span class="hljs-string">&quot;torch&quot;</span>)
validation_set = validation_dataset.remove_columns([<span class="hljs-string">&quot;example_id&quot;</span>, <span class="hljs-string">&quot;offset_mapping&quot;</span>])
validation_set.set_format(<span class="hljs-string">&quot;torch&quot;</span>)

train_dataloader = DataLoader(
    train_dataset,
    shuffle=<span class="hljs-literal">True</span>,
    collate_fn=default_data_collator,
    batch_size=<span class="hljs-number">8</span>,
)
eval_dataloader = DataLoader(
    validation_set, collate_fn=default_data_collator, batch_size=<span class="hljs-number">8</span>
)`}}),He=new S({props:{code:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)",highlighted:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)"}}),ke=new S({props:{code:`from torch.optim import AdamW

optimizer = AdamW(model.parameters(), lr=2e-5)`,highlighted:`<span class="hljs-keyword">from</span> torch.optim <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">2e-5</span>)`}}),Se=new S({props:{code:`from accelerate import Accelerator

accelerator = Accelerator(fp16=True)
model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator(fp16=<span class="hljs-literal">True</span>)
model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`}}),vt=new S({props:{code:`from transformers import get_scheduler

num_train_epochs = 3
num_update_steps_per_epoch = len(train_dataloader)
num_training_steps = num_train_epochs * num_update_steps_per_epoch

lr_scheduler = get_scheduler(
    "linear",
    optimizer=optimizer,
    num_warmup_steps=0,
    num_training_steps=num_training_steps,
)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> get_scheduler

num_train_epochs = <span class="hljs-number">3</span>
num_update_steps_per_epoch = <span class="hljs-built_in">len</span>(train_dataloader)
num_training_steps = num_train_epochs * num_update_steps_per_epoch

lr_scheduler = get_scheduler(
    <span class="hljs-string">&quot;linear&quot;</span>,
    optimizer=optimizer,
    num_warmup_steps=<span class="hljs-number">0</span>,
    num_training_steps=num_training_steps,
)`}}),Ge=new S({props:{code:`from huggingface_hub import Repository, get_full_repo_name

model_name = "bert-finetuned-squad-accelerate"
repo_name = get_full_repo_name(model_name)
repo_name`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository, get_full_repo_name

model_name = <span class="hljs-string">&quot;bert-finetuned-squad-accelerate&quot;</span>
repo_name = get_full_repo_name(model_name)
repo_name`}}),kt=new S({props:{code:"'sgugger/bert-finetuned-squad-accelerate'",highlighted:'<span class="hljs-string">&#x27;sgugger/bert-finetuned-squad-accelerate&#x27;</span>'}}),$t=new S({props:{code:`output_dir = "bert-finetuned-squad-accelerate"
repo = Repository(output_dir, clone_from=repo_name)`,highlighted:`output_dir = <span class="hljs-string">&quot;bert-finetuned-squad-accelerate&quot;</span>
repo = Repository(output_dir, clone_from=repo_name)`}}),Ue=new at({}),Ot=new S({props:{code:`from tqdm.auto import tqdm
import torch

progress_bar = tqdm(range(num_training_steps))

for epoch in range(num_train_epochs):
    # Training
    model.train()
    for step, batch in enumerate(train_dataloader):
        outputs = model(**batch)
        loss = outputs.loss
        accelerator.backward(loss)

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(1)

    # Evaluation
    model.eval()
    start_logits = []
    end_logits = []
    accelerator.print("Evaluation!")
    for batch in tqdm(eval_dataloader):
        with torch.no_grad():
            outputs = model(**batch)

        start_logits.append(accelerator.gather(outputs.start_logits).cpu().numpy())
        end_logits.append(accelerator.gather(outputs.end_logits).cpu().numpy())

    start_logits = np.concatenate(start_logits)
    end_logits = np.concatenate(end_logits)
    start_logits = start_logits[: len(validation_dataset)]
    end_logits = end_logits[: len(validation_dataset)]

    metrics = compute_metrics(
        start_logits, end_logits, validation_dataset, raw_datasets["validation"]
    )
    print(f"epoch {epoch}:", metrics)

    # Save and upload
    accelerator.wait_for_everyone()
    unwrapped_model = accelerator.unwrap_model(model)
    unwrapped_model.save_pretrained(output_dir, save_function=accelerator.save)
    if accelerator.is_main_process:
        tokenizer.save_pretrained(output_dir)
        repo.push_to_hub(
            commit_message=f"Training in progress epoch {epoch}", blocking=False
        )`,highlighted:`<span class="hljs-keyword">from</span> tqdm.auto <span class="hljs-keyword">import</span> tqdm
<span class="hljs-keyword">import</span> torch

progress_bar = tqdm(<span class="hljs-built_in">range</span>(num_training_steps))

<span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_train_epochs):
    <span class="hljs-comment"># Training</span>
    model.train()
    <span class="hljs-keyword">for</span> step, batch <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(train_dataloader):
        outputs = model(**batch)
        loss = outputs.loss
        accelerator.backward(loss)

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(<span class="hljs-number">1</span>)

    <span class="hljs-comment"># Evaluation</span>
    model.<span class="hljs-built_in">eval</span>()
    start_logits = []
    end_logits = []
    accelerator.<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Evaluation!&quot;</span>)
    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> tqdm(eval_dataloader):
        <span class="hljs-keyword">with</span> torch.no_grad():
            outputs = model(**batch)

        start_logits.append(accelerator.gather(outputs.start_logits).cpu().numpy())
        end_logits.append(accelerator.gather(outputs.end_logits).cpu().numpy())

    start_logits = np.concatenate(start_logits)
    end_logits = np.concatenate(end_logits)
    start_logits = start_logits[: <span class="hljs-built_in">len</span>(validation_dataset)]
    end_logits = end_logits[: <span class="hljs-built_in">len</span>(validation_dataset)]

    metrics = compute_metrics(
        start_logits, end_logits, validation_dataset, raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>]
    )
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;epoch <span class="hljs-subst">{epoch}</span>:&quot;</span>, metrics)

    <span class="hljs-comment"># Save and upload</span>
    accelerator.wait_for_everyone()
    unwrapped_model = accelerator.unwrap_model(model)
    unwrapped_model.save_pretrained(output_dir, save_function=accelerator.save)
    <span class="hljs-keyword">if</span> accelerator.is_main_process:
        tokenizer.save_pretrained(output_dir)
        repo.push_to_hub(
            commit_message=<span class="hljs-string">f&quot;Training in progress epoch <span class="hljs-subst">{epoch}</span>&quot;</span>, blocking=<span class="hljs-literal">False</span>
        )`}}),zt=new S({props:{code:`accelerator.wait_for_everyone()
unwrapped_model = accelerator.unwrap_model(model)
unwrapped_model.save_pretrained(output_dir, save_function=accelerator.save)`,highlighted:`accelerator.wait_for_everyone()
unwrapped_model = accelerator.unwrap_model(model)
unwrapped_model.save_pretrained(output_dir, save_function=accelerator.save)`}}),{c(){h=i("p"),g=a("If you want to dive a bit more deeply into the training loop, we will now show you how to do the same thing using \u{1F917}  Accelerate."),f=d(),x=i("h2"),D=i("a"),b=i("span"),j($.$$.fragment),y=d(),m=i("span"),O=a("A custom training loop"),k=d(),v=i("p"),C=a("Let\u2019s now have a look at the full training loop, so you can easily customize the parts you need. It will look a lot like the training loop in "),N=i("a"),z=a("Chapter 3"),A=a(", with the exception of the evaluation loop. We will be able to evaluate the model regularly since we\u2019re not constrained by the "),Q=i("code"),B=a("Trainer"),R=a(" class anymore."),M=d(),L=i("h3"),H=i("a"),X=i("span"),j(G.$$.fragment),I=d(),U=i("span"),K=a("Preparing everything for training"),te=d(),Y=i("p"),ie=a("First we need to build the "),_e=i("code"),Ae=a("DataLoader"),xe=a("s from our datasets. We set the format of those datasets to "),ye=i("code"),We=a('"torch"'),V=a(", and remove the columns in the validation set that are not used by the model. Then, we can use the "),J=i("code"),De=a("default_data_collator"),as=a(" provided by Transformers as a "),nt=i("code"),mt=a("collate_fn"),de=a(" and shuffle the training set, but not the validation set:"),ot=d(),j(se.$$.fragment),we=d(),ce=i("p"),Pe=a("Next we reinstantiate our model, to make sure we\u2019re not continuing the fine-tuning from before but starting from the BERT pretrained model again:"),va=d(),j(He.$$.fragment),xa=d(),Ve=i("p"),Ce=a("Then we will need an optimizer. As usual we use the classic "),Ms=i("code"),_t=a("AdamW"),An=a(", which is like Adam, but with a fix in the way weight decay is applied:"),ya=d(),j(ke.$$.fragment),ka=d(),oe=i("p"),$a=a("Once we have all those objects, we can send them to the "),$e=i("code"),it=a("accelerator.prepare()"),Bs=a(" method. Remember that if you want to train on TPUs in a Colab notebook, you will need to move all of this code into a training function, and that shouldn\u2019t execute any cell that instantiates an "),Qe=i("code"),Dn=a("Accelerator"),Ls=a(". We can force mixed-precision training by passing "),Ws=i("code"),ja=a("fp16=True"),rt=a(" to the "),Hs=i("code"),Vs=a("Accelerator"),Pn=a(" (or, if you are executing the code as a script, just make sure to fill in the \u{1F917} Accelerate "),Qs=i("code"),qa=a("config"),wt=a(" appropriately)."),Rs=d(),j(Se.$$.fragment),Ea=d(),je=i("p"),gt=a("As you should know from the previous sections, we can only use the "),ns=i("code"),bt=a("train_dataloader"),Ta=a(" length to compute the number of training steps after it has gone through the "),pe=i("code"),Cn=a("accelerator.prepare()"),Gs=a(" method. We use the same linear schedule as in the previous sections:"),Aa=d(),j(vt.$$.fragment),os=d(),ge=i("p"),Sn=a("To push our model to the Hub, we will need to create a "),xt=i("code"),On=a("Repository"),zn=a(" object in a working folder. First log in to the Hugging Face Hub, if you\u2019re not logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),is=i("code"),yt=a("repo_name"),Da=a(" with your own choice; it just needs to contain your username, which is what the function "),Re=i("code"),Pa=a("get_full_repo_name()"),ae=a(" does):"),Ca=d(),j(Ge.$$.fragment),Sa=d(),j(kt.$$.fragment),rs=d(),ls=i("p"),In=a("Then we can clone that repository in a local folder. If it already exists, this local folder should be a clone of the repository we are working with:"),ps=d(),j($t.$$.fragment),Oa=d(),be=i("p"),Fn=a("We can now upload anything we save in "),Us=i("code"),Ys=a("output_dir"),Nn=a(" by calling the "),Js=i("code"),Xs=a("repo.push_to_hub()"),Mn=a(" method. This will help us upload the intermediate models at the end of each epoch."),za=d(),Oe=i("h2"),ue=i("a"),Ks=i("span"),j(Ue.$$.fragment),Bn=d(),Zs=i("span"),Ia=a("Training loop"),lt=d(),jt=i("p"),qt=a("We are now ready to write the full training loop. After defining a progress bar to follow how training goes, the loop has three parts:"),ea=d(),fe=i("ul"),Et=i("li"),Fa=a("The training in itself, which is the classic iteration over the "),Ye=i("code"),Na=a("train_dataloader"),Tt=a(", forward pass through the model, then backward pass and optimizer step."),Ma=d(),he=i("li"),Ln=a("The evaluation, in which we gather all the values for "),hs=i("code"),At=a("start_logits"),Ba=a(" and "),Je=i("code"),La=a("end_logits"),ds=a(" before converting them to NumPy arrays. Once the evaluation loop is finished, we concatenate all the results. Note that we need to truncate because the "),ta=i("code"),Wa=a("Accelerator"),Xe=a(" may have added a few samples at the end to ensure we have the same number of examples in each process."),pt=d(),qe=i("li"),Dt=a("Saving and uploading, where we first save the model and the tokenizer, then call "),sa=i("code"),aa=a("repo.push_to_hub()"),Wn=a(". As we did before, we use the argument "),cs=i("code"),Pt=a("blocking=False"),Ha=a(" to tell the \u{1F917} Hub library to push in an asynchronous process. This way, training continues normally and this (long) instruction is executed in the background."),Ct=d(),us=i("p"),Va=a("Here\u2019s the complete code for the training loop:"),St=d(),j(Ot.$$.fragment),na=d(),ze=i("p"),Qa=a("In case this is the first time you\u2019re seeing a model saved with \u{1F917} Accelerate, let\u2019s take a moment to inspect the three lines of code that go with it:"),me=d(),j(zt.$$.fragment),ht=d(),Z=i("p"),Hn=a("The first line is self-explanatory: it tells all the processes to wait until everyone is at that stage before continuing. This is to make sure we have the same model in every process before saving. Then we grab the "),It=i("code"),Vn=a("unwrapped_model"),Qn=a(", which is the base model we defined. The "),Ft=i("code"),Rn=a("accelerator.prepare()"),Gn=a(" method changes the model to work in distributed training, so it won\u2019t have the "),fs=i("code"),Nt=a("save_pretrained()"),Ra=a(" method anymore; the "),Ke=i("code"),Ga=a("accelerator.unwrap_model()"),ms=a(" method undoes that step. Lastly, we call "),oa=i("code"),Ua=a("save_pretrained()"),Mt=a(" but tell that method to use "),_s=i("code"),ws=a("accelerator.save()"),Un=a(" instead of "),gs=i("code"),Bt=a("torch.save()"),Ya=a("."),dt=d(),Ee=i("p"),bs=a("Once this is done, you should have a model that produces results pretty similar to the one trained with the "),ia=i("code"),Ja=a("Trainer"),Ze=a(". You can check the model we trained using this code at "),Ie=i("a"),Xa=i("em"),Yn=a("huggingface-course/bert-finetuned-squad-accelerate"),vs=a(". And if you want to test out any tweaks to the training loop, you can directly implement them by editing the code shown above!"),this.h()},l(u){h=r(u,"P",{});var F=p(h);g=n(F,"If you want to dive a bit more deeply into the training loop, we will now show you how to do the same thing using \u{1F917}  Accelerate."),F.forEach(t),f=c(u),x=r(u,"H2",{class:!0});var Ka=p(x);D=r(Ka,"A",{id:!0,class:!0,href:!0});var ra=p(D);b=r(ra,"SPAN",{});var si=p(b);q($.$$.fragment,si),si.forEach(t),ra.forEach(t),y=c(Ka),m=r(Ka,"SPAN",{});var ai=p(m);O=n(ai,"A custom training loop"),ai.forEach(t),Ka.forEach(t),k=c(u),v=r(u,"P",{});var ct=p(v);C=n(ct,"Let\u2019s now have a look at the full training loop, so you can easily customize the parts you need. It will look a lot like the training loop in "),N=r(ct,"A",{href:!0});var ni=p(N);z=n(ni,"Chapter 3"),ni.forEach(t),A=n(ct,", with the exception of the evaluation loop. We will be able to evaluate the model regularly since we\u2019re not constrained by the "),Q=r(ct,"CODE",{});var oi=p(Q);B=n(oi,"Trainer"),oi.forEach(t),R=n(ct," class anymore."),ct.forEach(t),M=c(u),L=r(u,"H3",{class:!0});var la=p(L);H=r(la,"A",{id:!0,class:!0,href:!0});var pa=p(H);X=r(pa,"SPAN",{});var ii=p(X);q(G.$$.fragment,ii),ii.forEach(t),pa.forEach(t),I=c(la),U=r(la,"SPAN",{});var Xn=p(U);K=n(Xn,"Preparing everything for training"),Xn.forEach(t),la.forEach(t),te=c(u),Y=r(u,"P",{});var ee=p(Y);ie=n(ee,"First we need to build the "),_e=r(ee,"CODE",{});var ha=p(_e);Ae=n(ha,"DataLoader"),ha.forEach(t),xe=n(ee,"s from our datasets. We set the format of those datasets to "),ye=r(ee,"CODE",{});var Za=p(ye);We=n(Za,'"torch"'),Za.forEach(t),V=n(ee,", and remove the columns in the validation set that are not used by the model. Then, we can use the "),J=r(ee,"CODE",{});var ri=p(J);De=n(ri,"default_data_collator"),ri.forEach(t),as=n(ee," provided by Transformers as a "),nt=r(ee,"CODE",{});var li=p(nt);mt=n(li,"collate_fn"),li.forEach(t),de=n(ee," and shuffle the training set, but not the validation set:"),ee.forEach(t),ot=c(u),q(se.$$.fragment,u),we=c(u),ce=r(u,"P",{});var pi=p(ce);Pe=n(pi,"Next we reinstantiate our model, to make sure we\u2019re not continuing the fine-tuning from before but starting from the BERT pretrained model again:"),pi.forEach(t),va=c(u),q(He.$$.fragment,u),xa=c(u),Ve=r(u,"P",{});var Lt=p(Ve);Ce=n(Lt,"Then we will need an optimizer. As usual we use the classic "),Ms=r(Lt,"CODE",{});var en=p(Ms);_t=n(en,"AdamW"),en.forEach(t),An=n(Lt,", which is like Adam, but with a fix in the way weight decay is applied:"),Lt.forEach(t),ya=c(u),q(ke.$$.fragment,u),ka=c(u),oe=r(u,"P",{});var ve=p(oe);$a=n(ve,"Once we have all those objects, we can send them to the "),$e=r(ve,"CODE",{});var hi=p($e);it=n(hi,"accelerator.prepare()"),hi.forEach(t),Bs=n(ve," method. Remember that if you want to train on TPUs in a Colab notebook, you will need to move all of this code into a training function, and that shouldn\u2019t execute any cell that instantiates an "),Qe=r(ve,"CODE",{});var di=p(Qe);Dn=n(di,"Accelerator"),di.forEach(t),Ls=n(ve,". We can force mixed-precision training by passing "),Ws=r(ve,"CODE",{});var da=p(Ws);ja=n(da,"fp16=True"),da.forEach(t),rt=n(ve," to the "),Hs=r(ve,"CODE",{});var tn=p(Hs);Vs=n(tn,"Accelerator"),tn.forEach(t),Pn=n(ve," (or, if you are executing the code as a script, just make sure to fill in the \u{1F917} Accelerate "),Qs=r(ve,"CODE",{});var ci=p(Qs);qa=n(ci,"config"),ci.forEach(t),wt=n(ve," appropriately)."),ve.forEach(t),Rs=c(u),q(Se.$$.fragment,u),Ea=c(u),je=r(u,"P",{});var xs=p(je);gt=n(xs,"As you should know from the previous sections, we can only use the "),ns=r(xs,"CODE",{});var ui=p(ns);bt=n(ui,"train_dataloader"),ui.forEach(t),Ta=n(xs," length to compute the number of training steps after it has gone through the "),pe=r(xs,"CODE",{});var ca=p(pe);Cn=n(ca,"accelerator.prepare()"),ca.forEach(t),Gs=n(xs," method. We use the same linear schedule as in the previous sections:"),xs.forEach(t),Aa=c(u),q(vt.$$.fragment,u),os=c(u),ge=r(u,"P",{});var Fe=p(ge);Sn=n(Fe,"To push our model to the Hub, we will need to create a "),xt=r(Fe,"CODE",{});var fi=p(xt);On=n(fi,"Repository"),fi.forEach(t),zn=n(Fe," object in a working folder. First log in to the Hugging Face Hub, if you\u2019re not logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),is=r(Fe,"CODE",{});var mi=p(is);yt=n(mi,"repo_name"),mi.forEach(t),Da=n(Fe," with your own choice; it just needs to contain your username, which is what the function "),Re=r(Fe,"CODE",{});var Kn=p(Re);Pa=n(Kn,"get_full_repo_name()"),Kn.forEach(t),ae=n(Fe," does):"),Fe.forEach(t),Ca=c(u),q(Ge.$$.fragment,u),Sa=c(u),q(kt.$$.fragment,u),rs=c(u),ls=r(u,"P",{});var ys=p(ls);In=n(ys,"Then we can clone that repository in a local folder. If it already exists, this local folder should be a clone of the repository we are working with:"),ys.forEach(t),ps=c(u),q($t.$$.fragment,u),Oa=c(u),be=r(u,"P",{});var Wt=p(be);Fn=n(Wt,"We can now upload anything we save in "),Us=r(Wt,"CODE",{});var ks=p(Us);Ys=n(ks,"output_dir"),ks.forEach(t),Nn=n(Wt," by calling the "),Js=r(Wt,"CODE",{});var Zn=p(Js);Xs=n(Zn,"repo.push_to_hub()"),Zn.forEach(t),Mn=n(Wt," method. This will help us upload the intermediate models at the end of each epoch."),Wt.forEach(t),za=c(u),Oe=r(u,"H2",{class:!0});var Te=p(Oe);ue=r(Te,"A",{id:!0,class:!0,href:!0});var _i=p(ue);Ks=r(_i,"SPAN",{});var sn=p(Ks);q(Ue.$$.fragment,sn),sn.forEach(t),_i.forEach(t),Bn=c(Te),Zs=r(Te,"SPAN",{});var wi=p(Zs);Ia=n(wi,"Training loop"),wi.forEach(t),Te.forEach(t),lt=c(u),jt=r(u,"P",{});var gi=p(jt);qt=n(gi,"We are now ready to write the full training loop. After defining a progress bar to follow how training goes, the loop has three parts:"),gi.forEach(t),ea=c(u),fe=r(u,"UL",{});var ut=p(fe);Et=r(ut,"LI",{});var an=p(Et);Fa=n(an,"The training in itself, which is the classic iteration over the "),Ye=r(an,"CODE",{});var bi=p(Ye);Na=n(bi,"train_dataloader"),bi.forEach(t),Tt=n(an,", forward pass through the model, then backward pass and optimizer step."),an.forEach(t),Ma=c(ut),he=r(ut,"LI",{});var et=p(he);Ln=n(et,"The evaluation, in which we gather all the values for "),hs=r(et,"CODE",{});var tt=p(hs);At=n(tt,"start_logits"),tt.forEach(t),Ba=n(et," and "),Je=r(et,"CODE",{});var vi=p(Je);La=n(vi,"end_logits"),vi.forEach(t),ds=n(et," before converting them to NumPy arrays. Once the evaluation loop is finished, we concatenate all the results. Note that we need to truncate because the "),ta=r(et,"CODE",{});var ua=p(ta);Wa=n(ua,"Accelerator"),ua.forEach(t),Xe=n(et," may have added a few samples at the end to ensure we have the same number of examples in each process."),et.forEach(t),pt=c(ut),qe=r(ut,"LI",{});var $s=p(qe);Dt=n($s,"Saving and uploading, where we first save the model and the tokenizer, then call "),sa=r($s,"CODE",{});var xi=p(sa);aa=n(xi,"repo.push_to_hub()"),xi.forEach(t),Wn=n($s,". As we did before, we use the argument "),cs=r($s,"CODE",{});var nn=p(cs);Pt=n(nn,"blocking=False"),nn.forEach(t),Ha=n($s," to tell the \u{1F917} Hub library to push in an asynchronous process. This way, training continues normally and this (long) instruction is executed in the background."),$s.forEach(t),ut.forEach(t),Ct=c(u),us=r(u,"P",{});var yi=p(us);Va=n(yi,"Here\u2019s the complete code for the training loop:"),yi.forEach(t),St=c(u),q(Ot.$$.fragment,u),na=c(u),ze=r(u,"P",{});var ki=p(ze);Qa=n(ki,"In case this is the first time you\u2019re seeing a model saved with \u{1F917} Accelerate, let\u2019s take a moment to inspect the three lines of code that go with it:"),ki.forEach(t),me=c(u),q(zt.$$.fragment,u),ht=c(u),Z=r(u,"P",{});var ne=p(Z);Hn=n(ne,"The first line is self-explanatory: it tells all the processes to wait until everyone is at that stage before continuing. This is to make sure we have the same model in every process before saving. Then we grab the "),It=r(ne,"CODE",{});var js=p(It);Vn=n(js,"unwrapped_model"),js.forEach(t),Qn=n(ne,", which is the base model we defined. The "),Ft=r(ne,"CODE",{});var eo=p(Ft);Rn=n(eo,"accelerator.prepare()"),eo.forEach(t),Gn=n(ne," method changes the model to work in distributed training, so it won\u2019t have the "),fs=r(ne,"CODE",{});var qs=p(fs);Nt=n(qs,"save_pretrained()"),qs.forEach(t),Ra=n(ne," method anymore; the "),Ke=r(ne,"CODE",{});var to=p(Ke);Ga=n(to,"accelerator.unwrap_model()"),to.forEach(t),ms=n(ne," method undoes that step. Lastly, we call "),oa=r(ne,"CODE",{});var st=p(oa);Ua=n(st,"save_pretrained()"),st.forEach(t),Mt=n(ne," but tell that method to use "),_s=r(ne,"CODE",{});var $i=p(_s);ws=n($i,"accelerator.save()"),$i.forEach(t),Un=n(ne," instead of "),gs=r(ne,"CODE",{});var on=p(gs);Bt=n(on,"torch.save()"),on.forEach(t),Ya=n(ne,"."),ne.forEach(t),dt=c(u),Ee=r(u,"P",{});var Es=p(Ee);bs=n(Es,"Once this is done, you should have a model that produces results pretty similar to the one trained with the "),ia=r(Es,"CODE",{});var ji=p(ia);Ja=n(ji,"Trainer"),ji.forEach(t),Ze=n(Es,". You can check the model we trained using this code at "),Ie=r(Es,"A",{href:!0,rel:!0});var rn=p(Ie);Xa=r(rn,"EM",{});var qi=p(Xa);Yn=n(qi,"huggingface-course/bert-finetuned-squad-accelerate"),qi.forEach(t),rn.forEach(t),vs=n(Es,". And if you want to test out any tweaks to the training loop, you can directly implement them by editing the code shown above!"),Es.forEach(t),this.h()},h(){P(D,"id","a-custom-training-loop"),P(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(D,"href","#a-custom-training-loop"),P(x,"class","relative group"),P(N,"href","/course/chapter3/4"),P(H,"id","preparing-everything-for-training"),P(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(H,"href","#preparing-everything-for-training"),P(L,"class","relative group"),P(ue,"id","training-loop"),P(ue,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(ue,"href","#training-loop"),P(Oe,"class","relative group"),P(Ie,"href","https://huggingface.co/huggingface-course/bert-finetuned-squad-accelerate"),P(Ie,"rel","nofollow")},m(u,F){o(u,h,F),s(h,g),o(u,f,F),o(u,x,F),s(x,D),s(D,b),E($,b,null),s(x,y),s(x,m),s(m,O),o(u,k,F),o(u,v,F),s(v,C),s(v,N),s(N,z),s(v,A),s(v,Q),s(Q,B),s(v,R),o(u,M,F),o(u,L,F),s(L,H),s(H,X),E(G,X,null),s(L,I),s(L,U),s(U,K),o(u,te,F),o(u,Y,F),s(Y,ie),s(Y,_e),s(_e,Ae),s(Y,xe),s(Y,ye),s(ye,We),s(Y,V),s(Y,J),s(J,De),s(Y,as),s(Y,nt),s(nt,mt),s(Y,de),o(u,ot,F),E(se,u,F),o(u,we,F),o(u,ce,F),s(ce,Pe),o(u,va,F),E(He,u,F),o(u,xa,F),o(u,Ve,F),s(Ve,Ce),s(Ve,Ms),s(Ms,_t),s(Ve,An),o(u,ya,F),E(ke,u,F),o(u,ka,F),o(u,oe,F),s(oe,$a),s(oe,$e),s($e,it),s(oe,Bs),s(oe,Qe),s(Qe,Dn),s(oe,Ls),s(oe,Ws),s(Ws,ja),s(oe,rt),s(oe,Hs),s(Hs,Vs),s(oe,Pn),s(oe,Qs),s(Qs,qa),s(oe,wt),o(u,Rs,F),E(Se,u,F),o(u,Ea,F),o(u,je,F),s(je,gt),s(je,ns),s(ns,bt),s(je,Ta),s(je,pe),s(pe,Cn),s(je,Gs),o(u,Aa,F),E(vt,u,F),o(u,os,F),o(u,ge,F),s(ge,Sn),s(ge,xt),s(xt,On),s(ge,zn),s(ge,is),s(is,yt),s(ge,Da),s(ge,Re),s(Re,Pa),s(ge,ae),o(u,Ca,F),E(Ge,u,F),o(u,Sa,F),E(kt,u,F),o(u,rs,F),o(u,ls,F),s(ls,In),o(u,ps,F),E($t,u,F),o(u,Oa,F),o(u,be,F),s(be,Fn),s(be,Us),s(Us,Ys),s(be,Nn),s(be,Js),s(Js,Xs),s(be,Mn),o(u,za,F),o(u,Oe,F),s(Oe,ue),s(ue,Ks),E(Ue,Ks,null),s(Oe,Bn),s(Oe,Zs),s(Zs,Ia),o(u,lt,F),o(u,jt,F),s(jt,qt),o(u,ea,F),o(u,fe,F),s(fe,Et),s(Et,Fa),s(Et,Ye),s(Ye,Na),s(Et,Tt),s(fe,Ma),s(fe,he),s(he,Ln),s(he,hs),s(hs,At),s(he,Ba),s(he,Je),s(Je,La),s(he,ds),s(he,ta),s(ta,Wa),s(he,Xe),s(fe,pt),s(fe,qe),s(qe,Dt),s(qe,sa),s(sa,aa),s(qe,Wn),s(qe,cs),s(cs,Pt),s(qe,Ha),o(u,Ct,F),o(u,us,F),s(us,Va),o(u,St,F),E(Ot,u,F),o(u,na,F),o(u,ze,F),s(ze,Qa),o(u,me,F),E(zt,u,F),o(u,ht,F),o(u,Z,F),s(Z,Hn),s(Z,It),s(It,Vn),s(Z,Qn),s(Z,Ft),s(Ft,Rn),s(Z,Gn),s(Z,fs),s(fs,Nt),s(Z,Ra),s(Z,Ke),s(Ke,Ga),s(Z,ms),s(Z,oa),s(oa,Ua),s(Z,Mt),s(Z,_s),s(_s,ws),s(Z,Un),s(Z,gs),s(gs,Bt),s(Z,Ya),o(u,dt,F),o(u,Ee,F),s(Ee,bs),s(Ee,ia),s(ia,Ja),s(Ee,Ze),s(Ee,Ie),s(Ie,Xa),s(Xa,Yn),s(Ee,vs),Jn=!0},i(u){Jn||(_($.$$.fragment,u),_(G.$$.fragment,u),_(se.$$.fragment,u),_(He.$$.fragment,u),_(ke.$$.fragment,u),_(Se.$$.fragment,u),_(vt.$$.fragment,u),_(Ge.$$.fragment,u),_(kt.$$.fragment,u),_($t.$$.fragment,u),_(Ue.$$.fragment,u),_(Ot.$$.fragment,u),_(zt.$$.fragment,u),Jn=!0)},o(u){w($.$$.fragment,u),w(G.$$.fragment,u),w(se.$$.fragment,u),w(He.$$.fragment,u),w(ke.$$.fragment,u),w(Se.$$.fragment,u),w(vt.$$.fragment,u),w(Ge.$$.fragment,u),w(kt.$$.fragment,u),w($t.$$.fragment,u),w(Ue.$$.fragment,u),w(Ot.$$.fragment,u),w(zt.$$.fragment,u),Jn=!1},d(u){u&&t(h),u&&t(f),u&&t(x),T($),u&&t(k),u&&t(v),u&&t(M),u&&t(L),T(G),u&&t(te),u&&t(Y),u&&t(ot),T(se,u),u&&t(we),u&&t(ce),u&&t(va),T(He,u),u&&t(xa),u&&t(Ve),u&&t(ya),T(ke,u),u&&t(ka),u&&t(oe),u&&t(Rs),T(Se,u),u&&t(Ea),u&&t(je),u&&t(Aa),T(vt,u),u&&t(os),u&&t(ge),u&&t(Ca),T(Ge,u),u&&t(Sa),T(kt,u),u&&t(rs),u&&t(ls),u&&t(ps),T($t,u),u&&t(Oa),u&&t(be),u&&t(za),u&&t(Oe),T(Ue),u&&t(lt),u&&t(jt),u&&t(ea),u&&t(fe),u&&t(Ct),u&&t(us),u&&t(St),T(Ot,u),u&&t(na),u&&t(ze),u&&t(me),T(zt,u),u&&t(ht),u&&t(Z),u&&t(dt),u&&t(Ee)}}}function f_(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N,z,A,Q,B,R,M,L,H,X,G,I,U,K,te,Y,ie,_e,Ae,xe,ye,We,V,J,De,as,nt,mt,de,ot,se,we,ce,Pe,va,He,xa,Ve,Ce,Ms,_t,An,ya,ke,ka,oe,$a,$e,it,Bs,Qe,Dn,Ls,Ws,ja,rt,Hs,Vs,Pn,Qs,qa,wt,Rs,Se,Ea,je,gt,ns,bt,Ta,pe,Cn,Gs,Aa,vt,os,ge,Sn,xt,On,zn,is,yt,Da,Re,Pa,ae,Ca,Ge,Sa,kt,rs,ls,In,ps,$t,Oa,be,Fn,Us,Ys,Nn,Js,Xs,Mn,za,Oe,ue,Ks,Ue,Bn,Zs,Ia,lt,jt,qt,ea,fe,Et,Fa,Ye,Na,Tt,Ma,he,Ln,hs,At,Ba,Je,La,ds,ta,Wa,Xe,pt,qe,Dt,sa,aa,Wn,cs,Pt,Ha,Ct,us,Va,St,Ot,na,ze,Qa,me,zt,ht,Z,Hn,It,Vn,Qn,Ft,Rn,Gn,fs,Nt,Ra,Ke,Ga,ms,oa,Ua,Mt,_s,ws,Un,gs,Bt,Ya,dt,Ee,bs,ia,Ja,Ze,Ie,Xa,Yn,vs,Jn,u,F,Ka,ra,si,ai,ct,ni,oi,la,pa,ii,Xn,ee,ha,Za,ri,li,pi,Lt,en,ve,hi,di,da,tn,ci,xs,ui,ca,Fe,fi,mi,Kn,ys,Wt,ks,Zn,Te,_i,sn,wi,gi,ut,an,bi,et,tt,vi,ua,$s,xi,nn,yi,ki,ne,js,eo,qs,to,st,$i,on,Es,ji,rn,qi,kh,bl,so,vl,ao,xl,Ei,$h,yl,no,kl,oo,$l,Ti,jh,jl,Ai,qh,ql,ln,Di,jr,Eh,Th,Ah,Ts,qr,Dh,Ph,Er,Ch,Sh,Tr,Oh,zh,El,As,Ih,Ar,Fh,Nh,Dr,Mh,Bh,Tl,pn,Lh,Pr,Wh,Hh,Al,io,Dl,ro,Pl,hn,Vh,Cr,Qh,Rh,Cl,lo,Sl,po,Ol,dn,Gh,Sr,Uh,Yh,zl,ho,Il,co,Fl,Pi,Jh,Nl,cn,Ml,Ci,Xh,Bl,uo,Ll,Si,Kh,Wl,Ds,Zh,Or,ed,td,zr,sd,ad,Hl,fo,Vl,mo,Ql,Oi,nd,Rl,fa,un,Ir,_o,od,Fr,id,Gl,zi,rd,Ul,Ps,ld,Nr,pd,hd,Mr,dd,cd,Yl,wo,Jl,Ii,ud,Xl,go,Kl,bo,Zl,Fi,fd,ep,Ni,md,tp,Ht,Vt,Mi,ma,fn,Br,vo,_d,Lr,wd,sp,Qt,Rt,Bi,mn,gd,xo,Wr,bd,vd,xd,ap,ft,Hr,yd,kd,Vr,$d,jd,yo,qd,Qr,Ed,Td,Ad,_a,Dd,Rr,Pd,Cd,Gr,Sd,Od,np,Ne,zd,Ur,Id,Fd,Yr,Nd,Md,Jr,Bd,Ld,op,Fm='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>log</mi><mo>\u2061</mo><mo stretchy="false">(</mo><mi>a</mi><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><mi>log</mi><mo>\u2061</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>log</mi><mo>\u2061</mo><mo stretchy="false">(</mo><mi>b</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\log(ab) = \\log(a) + \\log(b)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">ab</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mclose">)</span></span></span></span>',ip,rp,_n,Wd,Xr,Hd,Vd,lp,ko,pp,Li,Qd,hp,$o,dp,wn,Rd,Kr,Gd,Ud,cp,Gt,Ut,Wi,Me,Yd,Zr,Jd,Xd,el,Kd,Zd,tl,ec,tc,sl,sc,ac,up,jo,fp,gn,nc,al,oc,ic,mp,Cs,nl,rc,lc,ol,pc,hc,qo,dc,il,cc,uc,_p,Hi,fc,wp,Eo,gp,Vi,mc,bp,To,vp,Qi,_c,xp,Ao,yp,Ri,wc,kp,Do,$p,Po,jp,Gi,gc,qp,Co,Ep,So,Tp,bn,bc,Oo,vc,xc,Ap,Ui,zo,Dp,Yi,yc,Pp,Io,Cp,Fo,Sp,Ji,kc,Op,wa,vn,rl,No,$c,ll,jc,zp,Yt,Jt,Xi,Ki,qc,Ip,Zi,Ec,Fp,Mo,Np,er,Tc,Mp,Bo,Bp,Xt,Kt,tr,Be,Ac,pl,Dc,Pc,hl,Cc,Sc,dl,Oc,zc,cl,Ic,Fc,Lp,Zt,es,sr,ar,Nc,Wp,ts,ss,nr,Lo,Hp,or,Mc,Vp,ir,rr,Bc,Qp,xn,Rp,lr,ga,yn,ul,Wo,Lc,fl,Wc,Gp,kn,Hc,ml,Vc,Qc,Up,Ho,Yp,Vo,Jp,pr,Rc,Xp;f=new Qm({props:{fw:W[0]}}),y=new at({});const Zc=[Gm,Rm],Qo=[];function eu(e,l){return e[0]==="pt"?0:1}C=eu(W),N=Qo[C]=Zc[C](W),I=new yh({props:{id:"ajPx5LwJD-I"}}),de=new xh({props:{$$slots:{default:[Um]},$$scope:{ctx:W}}}),Pe=new at({}),Qe=new at({}),wt=new S({props:{code:`from datasets import load_dataset

raw_datasets = load_dataset("squad")`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

raw_datasets = load_dataset(<span class="hljs-string">&quot;squad&quot;</span>)`}}),gt=new S({props:{code:"raw_datasets",highlighted:"raw_datasets"}}),bt=new S({props:{code:`DatasetDict({
    train: Dataset({
        features: ['id', 'title', 'context', 'question', 'answers'],
        num_rows: 87599
    })
    validation: Dataset({
        features: ['id', 'title', 'context', 'question', 'answers'],
        num_rows: 10570
    })
})`,highlighted:`DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-string">&#x27;title&#x27;</span>, <span class="hljs-string">&#x27;context&#x27;</span>, <span class="hljs-string">&#x27;question&#x27;</span>, <span class="hljs-string">&#x27;answers&#x27;</span>],
        num_rows: <span class="hljs-number">87599</span>
    })
    validation: Dataset({
        features: [<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-string">&#x27;title&#x27;</span>, <span class="hljs-string">&#x27;context&#x27;</span>, <span class="hljs-string">&#x27;question&#x27;</span>, <span class="hljs-string">&#x27;answers&#x27;</span>],
        num_rows: <span class="hljs-number">10570</span>
    })
})`}}),yt=new S({props:{code:`print("Context: ", raw_datasets["train"][0]["context"])
print("Question: ", raw_datasets["train"][0]["question"])
print("Answer: ", raw_datasets["train"][0]["answers"])`,highlighted:`<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Context: &quot;</span>, raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;context&quot;</span>])
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Question: &quot;</span>, raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;question&quot;</span>])
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Answer: &quot;</span>, raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;answers&quot;</span>])`}}),Re=new S({props:{code:`Context: 'Architecturally, the school has a Catholic character. Atop the Main Building\\'s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend "Venite Ad Me Omnes". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.'
Question: 'To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?'
Answer: {'text': ['Saint Bernadette Soubirous'], 'answer_start': [515]}`,highlighted:`Context: <span class="hljs-string">&#x27;Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot;Venite Ad Me Omnes&quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.&#x27;</span>
Question: <span class="hljs-string">&#x27;To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?&#x27;</span>
Answer: {<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Saint Bernadette Soubirous&#x27;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">515</span>]}`}}),lt=new S({props:{code:'raw_datasets["train"].filter(lambda x: len(x["answers"]["text"]) != 1)',highlighted:'raw_datasets[<span class="hljs-string">&quot;train&quot;</span>].<span class="hljs-built_in">filter</span>(<span class="hljs-keyword">lambda</span> x: <span class="hljs-built_in">len</span>(x[<span class="hljs-string">&quot;answers&quot;</span>][<span class="hljs-string">&quot;text&quot;</span>]) != <span class="hljs-number">1</span>)'}}),qt=new S({props:{code:`Dataset({
    features: ['id', 'title', 'context', 'question', 'answers'],
    num_rows: 0
})`,highlighted:`Dataset({
    features: [<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-string">&#x27;title&#x27;</span>, <span class="hljs-string">&#x27;context&#x27;</span>, <span class="hljs-string">&#x27;question&#x27;</span>, <span class="hljs-string">&#x27;answers&#x27;</span>],
    num_rows: <span class="hljs-number">0</span>
})`}}),Ye=new S({props:{code:`print(raw_datasets["validation"][0]["answers"])
print(raw_datasets["validation"][2]["answers"])`,highlighted:`<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;answers&quot;</span>])
<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">2</span>][<span class="hljs-string">&quot;answers&quot;</span>])`}}),Tt=new S({props:{code:`{'text': ['Denver Broncos', 'Denver Broncos', 'Denver Broncos'], 'answer_start': [177, 177, 177]}
{'text': ['Santa Clara, California', "Levi's Stadium", "Levi's Stadium in the San Francisco Bay Area at Santa Clara, California."], 'answer_start': [403, 355, 355]}`,highlighted:`{<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">177</span>, <span class="hljs-number">177</span>, <span class="hljs-number">177</span>]}
{<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Santa Clara, California&#x27;</span>, <span class="hljs-string">&quot;Levi&#x27;s Stadium&quot;</span>, <span class="hljs-string">&quot;Levi&#x27;s Stadium in the San Francisco Bay Area at Santa Clara, California.&quot;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">403</span>, <span class="hljs-number">355</span>, <span class="hljs-number">355</span>]}`}}),At=new S({props:{code:`print(raw_datasets["validation"][2]["context"])
print(raw_datasets["validation"][2]["question"])`,highlighted:`<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">2</span>][<span class="hljs-string">&quot;context&quot;</span>])
<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">2</span>][<span class="hljs-string">&quot;question&quot;</span>])`}}),Je=new S({props:{code:`'Super Bowl 50 was an American football game to determine the champion of the National Football League (NFL) for the 2015 season. The American Football Conference (AFC) champion Denver Broncos defeated the National Football Conference (NFC) champion Carolina Panthers 24\u201310 to earn their third Super Bowl title. The game was played on February 7, 2016, at Levi\\'s Stadium in the San Francisco Bay Area at Santa Clara, California. As this was the 50th Super Bowl, the league emphasized the "golden anniversary" with various gold-themed initiatives, as well as temporarily suspending the tradition of naming each Super Bowl game with Roman numerals (under which the game would have been known as "Super Bowl L"), so that the logo could prominently feature the Arabic numerals 50.'
'Where did Super Bowl 50 take place?'`,highlighted:`<span class="hljs-string">&#x27;Super Bowl 50 was an American football game to determine the champion of the National Football League (NFL) for the 2015 season. The American Football Conference (AFC) champion Denver Broncos defeated the National Football Conference (NFC) champion Carolina Panthers 24\u201310 to earn their third Super Bowl title. The game was played on February 7, 2016, at Levi\\&#x27;s Stadium in the San Francisco Bay Area at Santa Clara, California. As this was the 50th Super Bowl, the league emphasized the &quot;golden anniversary&quot; with various gold-themed initiatives, as well as temporarily suspending the tradition of naming each Super Bowl game with Roman numerals (under which the game would have been known as &quot;Super Bowl L&quot;), so that the logo could prominently feature the Arabic numerals 50.&#x27;</span>
<span class="hljs-string">&#x27;Where did Super Bowl 50 take place?&#x27;</span>`}}),Dt=new at({}),Pt=new yh({props:{id:"qgaM0weJHpA"}}),ze=new S({props:{code:`from transformers import AutoTokenizer

model_checkpoint = "bert-base-cased"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

model_checkpoint = <span class="hljs-string">&quot;bert-base-cased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)`}}),Nt=new S({props:{code:"tokenizer.is_fast",highlighted:"tokenizer.is_fast"}}),Ke=new S({props:{code:"True",highlighted:'<span class="hljs-literal">True</span>'}}),Mt=new S({props:{code:"[CLS] question [SEP] context [SEP]",highlighted:'<span class="hljs-selector-attr">[CLS]</span> question <span class="hljs-selector-attr">[SEP]</span> context <span class="hljs-selector-attr">[SEP]</span>'}}),Bt=new S({props:{code:`context = raw_datasets["train"][0]["context"]
question = raw_datasets["train"][0]["question"]

inputs = tokenizer(question, context)
tokenizer.decode(inputs["input_ids"])`,highlighted:`context = raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;context&quot;</span>]
question = raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;question&quot;</span>]

inputs = tokenizer(question, context)
tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),dt=new S({props:{code:`'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Architecturally, '
'the school has a Catholic character. Atop the Main Building\\'s gold dome is a golden statue of the Virgin '
'Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms '
'upraised with the legend " Venite Ad Me Omnes ". Next to the Main Building is the Basilica of the Sacred '
'Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a '
'replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette '
'Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 statues '
'and the Gold Dome ), is a simple, modern stone statue of Mary. [SEP]'`,highlighted:`<span class="hljs-string">&#x27;[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Architecturally, &#x27;</span>
<span class="hljs-string">&#x27;the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin &#x27;</span>
<span class="hljs-string">&#x27;Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms &#x27;</span>
<span class="hljs-string">&#x27;upraised with the legend &quot; Venite Ad Me Omnes &quot;. Next to the Main Building is the Basilica of the Sacred &#x27;</span>
<span class="hljs-string">&#x27;Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a &#x27;</span>
<span class="hljs-string">&#x27;replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette &#x27;</span>
<span class="hljs-string">&#x27;Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 statues &#x27;</span>
<span class="hljs-string">&#x27;and the Gold Dome ), is a simple, modern stone statue of Mary. [SEP]&#x27;</span>`}}),ys=new S({props:{code:`inputs = tokenizer(
    question,
    context,
    max_length=100,
    truncation="only_second",
    stride=50,
    return_overflowing_tokens=True,
)

for ids in inputs["input_ids"]:
    print(tokenizer.decode(ids))`,highlighted:`inputs = tokenizer(
    question,
    context,
    max_length=<span class="hljs-number">100</span>,
    truncation=<span class="hljs-string">&quot;only_second&quot;</span>,
    stride=<span class="hljs-number">50</span>,
    return_overflowing_tokens=<span class="hljs-literal">True</span>,
)

<span class="hljs-keyword">for</span> ids <span class="hljs-keyword">in</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]:
    <span class="hljs-built_in">print</span>(tokenizer.decode(ids))`}}),ks=new S({props:{code:`'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Architecturally, the school has a Catholic character. Atop the Main Building\\'s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend " Venite Ad Me Omnes ". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basi [SEP]'
'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend " Venite Ad Me Omnes ". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin [SEP]'
'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 [SEP]'
'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP]. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 statues and the Gold Dome ), is a simple, modern stone statue of Mary. [SEP]'`,highlighted:`<span class="hljs-string">&#x27;[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot; Venite Ad Me Omnes &quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basi [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot; Venite Ad Me Omnes &quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP]. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 statues and the Gold Dome ), is a simple, modern stone statue of Mary. [SEP]&#x27;</span>`}}),js=new S({props:{code:`inputs = tokenizer(
    question,
    context,
    max_length=100,
    truncation="only_second",
    stride=50,
    return_overflowing_tokens=True,
    return_offsets_mapping=True,
)
inputs.keys()`,highlighted:`inputs = tokenizer(
    question,
    context,
    max_length=<span class="hljs-number">100</span>,
    truncation=<span class="hljs-string">&quot;only_second&quot;</span>,
    stride=<span class="hljs-number">50</span>,
    return_overflowing_tokens=<span class="hljs-literal">True</span>,
    return_offsets_mapping=<span class="hljs-literal">True</span>,
)
inputs.keys()`}}),qs=new S({props:{code:"dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'offset_mapping', 'overflow_to_sample_mapping'])",highlighted:'dict_keys([<span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;token_type_ids&#x27;</span>, <span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;offset_mapping&#x27;</span>, <span class="hljs-string">&#x27;overflow_to_sample_mapping&#x27;</span>])'}}),so=new S({props:{code:'inputs["overflow_to_sample_mapping"]',highlighted:'inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>]'}}),ao=new S({props:{code:"[0, 0, 0, 0]",highlighted:'[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]'}}),no=new S({props:{code:`inputs = tokenizer(
    raw_datasets["train"][2:6]["question"],
    raw_datasets["train"][2:6]["context"],
    max_length=100,
    truncation="only_second",
    stride=50,
    return_overflowing_tokens=True,
    return_offsets_mapping=True,
)

print(f"The 4 examples gave {len(inputs['input_ids'])} features.")
print(f"Here is where each comes from: {inputs['overflow_to_sample_mapping']}.")`,highlighted:`inputs = tokenizer(
    raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">2</span>:<span class="hljs-number">6</span>][<span class="hljs-string">&quot;question&quot;</span>],
    raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">2</span>:<span class="hljs-number">6</span>][<span class="hljs-string">&quot;context&quot;</span>],
    max_length=<span class="hljs-number">100</span>,
    truncation=<span class="hljs-string">&quot;only_second&quot;</span>,
    stride=<span class="hljs-number">50</span>,
    return_overflowing_tokens=<span class="hljs-literal">True</span>,
    return_offsets_mapping=<span class="hljs-literal">True</span>,
)

<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;The 4 examples gave <span class="hljs-subst">{<span class="hljs-built_in">len</span>(inputs[<span class="hljs-string">&#x27;input_ids&#x27;</span>])}</span> features.&quot;</span>)
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Here is where each comes from: <span class="hljs-subst">{inputs[<span class="hljs-string">&#x27;overflow_to_sample_mapping&#x27;</span>]}</span>.&quot;</span>)`}}),oo=new S({props:{code:`'The 4 examples gave 19 features.'
'Here is where each comes from: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3].'`,highlighted:`<span class="hljs-string">&#x27;The 4 examples gave 19 features.&#x27;</span>
<span class="hljs-string">&#x27;Here is where each comes from: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3].&#x27;</span>`}}),io=new S({props:{code:`answers = raw_datasets["train"][2:6]["answers"]
start_positions = []
end_positions = []

for i, offset in enumerate(inputs["offset_mapping"]):
    sample_idx = inputs["overflow_to_sample_mapping"][i]
    answer = answers[sample_idx]
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

    # If the answer is not fully inside the context, label is (0, 0)
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

start_positions, end_positions`,highlighted:`answers = raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">2</span>:<span class="hljs-number">6</span>][<span class="hljs-string">&quot;answers&quot;</span>]
start_positions = []
end_positions = []

<span class="hljs-keyword">for</span> i, offset <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(inputs[<span class="hljs-string">&quot;offset_mapping&quot;</span>]):
    sample_idx = inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>][i]
    answer = answers[sample_idx]
    start_char = answer[<span class="hljs-string">&quot;answer_start&quot;</span>][<span class="hljs-number">0</span>]
    end_char = answer[<span class="hljs-string">&quot;answer_start&quot;</span>][<span class="hljs-number">0</span>] + <span class="hljs-built_in">len</span>(answer[<span class="hljs-string">&quot;text&quot;</span>][<span class="hljs-number">0</span>])
    sequence_ids = inputs.sequence_ids(i)

    <span class="hljs-comment"># Find the start and end of the context</span>
    idx = <span class="hljs-number">0</span>
    <span class="hljs-keyword">while</span> sequence_ids[idx] != <span class="hljs-number">1</span>:
        idx += <span class="hljs-number">1</span>
    context_start = idx
    <span class="hljs-keyword">while</span> sequence_ids[idx] == <span class="hljs-number">1</span>:
        idx += <span class="hljs-number">1</span>
    context_end = idx - <span class="hljs-number">1</span>

    <span class="hljs-comment"># If the answer is not fully inside the context, label is (0, 0)</span>
    <span class="hljs-keyword">if</span> offset[context_start][<span class="hljs-number">0</span>] &gt; end_char <span class="hljs-keyword">or</span> offset[context_end][<span class="hljs-number">1</span>] &lt; start_char:
        start_positions.append(<span class="hljs-number">0</span>)
        end_positions.append(<span class="hljs-number">0</span>)
    <span class="hljs-keyword">else</span>:
        <span class="hljs-comment"># Otherwise it&#x27;s the start and end token positions</span>
        idx = context_start
        <span class="hljs-keyword">while</span> idx &lt;= context_end <span class="hljs-keyword">and</span> offset[idx][<span class="hljs-number">0</span>] &lt;= start_char:
            idx += <span class="hljs-number">1</span>
        start_positions.append(idx - <span class="hljs-number">1</span>)

        idx = context_end
        <span class="hljs-keyword">while</span> idx &gt;= context_start <span class="hljs-keyword">and</span> offset[idx][<span class="hljs-number">1</span>] &gt;= end_char:
            idx -= <span class="hljs-number">1</span>
        end_positions.append(idx + <span class="hljs-number">1</span>)

start_positions, end_positions`}}),ro=new S({props:{code:`([83, 51, 19, 0, 0, 64, 27, 0, 34, 0, 0, 0, 67, 34, 0, 0, 0, 0, 0],
 [85, 53, 21, 0, 0, 70, 33, 0, 40, 0, 0, 0, 68, 35, 0, 0, 0, 0, 0])`,highlighted:`([<span class="hljs-number">83</span>, <span class="hljs-number">51</span>, <span class="hljs-number">19</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">64</span>, <span class="hljs-number">27</span>, <span class="hljs-number">0</span>, <span class="hljs-number">34</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">67</span>, <span class="hljs-number">34</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
 [<span class="hljs-number">85</span>, <span class="hljs-number">53</span>, <span class="hljs-number">21</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">70</span>, <span class="hljs-number">33</span>, <span class="hljs-number">0</span>, <span class="hljs-number">40</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">68</span>, <span class="hljs-number">35</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>])`}}),lo=new S({props:{code:`idx = 0
sample_idx = inputs["overflow_to_sample_mapping"][idx]
answer = answers[sample_idx]["text"][0]

start = start_positions[idx]
end = end_positions[idx]
labeled_answer = tokenizer.decode(inputs["input_ids"][idx][start : end + 1])

print(f"Theoretical answer: {answer}, labels give: {labeled_answer}")`,highlighted:`idx = <span class="hljs-number">0</span>
sample_idx = inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>][idx]
answer = answers[sample_idx][<span class="hljs-string">&quot;text&quot;</span>][<span class="hljs-number">0</span>]

start = start_positions[idx]
end = end_positions[idx]
labeled_answer = tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][idx][start : end + <span class="hljs-number">1</span>])

<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Theoretical answer: <span class="hljs-subst">{answer}</span>, labels give: <span class="hljs-subst">{labeled_answer}</span>&quot;</span>)`}}),po=new S({props:{code:"'Theoretical answer: the Main Building, labels give: the Main Building'",highlighted:'<span class="hljs-string">&#x27;Theoretical answer: the Main Building, labels give: the Main Building&#x27;</span>'}}),ho=new S({props:{code:`idx = 4
sample_idx = inputs["overflow_to_sample_mapping"][idx]
answer = answers[sample_idx]["text"][0]

decoded_example = tokenizer.decode(inputs["input_ids"][idx])
print(f"Theoretical answer: {answer}, decoded example: {decoded_example}")`,highlighted:`idx = <span class="hljs-number">4</span>
sample_idx = inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>][idx]
answer = answers[sample_idx][<span class="hljs-string">&quot;text&quot;</span>][<span class="hljs-number">0</span>]

decoded_example = tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][idx])
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Theoretical answer: <span class="hljs-subst">{answer}</span>, decoded example: <span class="hljs-subst">{decoded_example}</span>&quot;</span>)`}}),co=new S({props:{code:`'Theoretical answer: a Marian place of prayer and reflection, decoded example: [CLS] What is the Grotto at Notre Dame? [SEP] Architecturally, the school has a Catholic character. Atop the Main Building\\'s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend " Venite Ad Me Omnes ". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grot [SEP]'`,highlighted:'<span class="hljs-string">&#x27;Theoretical answer: a Marian place of prayer and reflection, decoded example: [CLS] What is the Grotto at Notre Dame? [SEP] Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot; Venite Ad Me Omnes &quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grot [SEP]&#x27;</span>'}}),cn=new xh({props:{$$slots:{default:[Ym]},$$scope:{ctx:W}}}),uo=new S({props:{code:`max_length = 384
stride = 128


def preprocess_training_examples(examples):
    questions = [q.strip() for q in examples["question"]]
    inputs = tokenizer(
        questions,
        examples["context"],
        max_length=max_length,
        truncation="only_second",
        stride=stride,
        return_overflowing_tokens=True,
        return_offsets_mapping=True,
        padding="max_length",
    )

    offset_mapping = inputs.pop("offset_mapping")
    sample_map = inputs.pop("overflow_to_sample_mapping")
    answers = examples["answers"]
    start_positions = []
    end_positions = []

    for i, offset in enumerate(offset_mapping):
        sample_idx = sample_map[i]
        answer = answers[sample_idx]
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

        # If the answer is not fully inside the context, label is (0, 0)
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
    return inputs`,highlighted:`max_length = <span class="hljs-number">384</span>
stride = <span class="hljs-number">128</span>


<span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_training_examples</span>(<span class="hljs-params">examples</span>):
    questions = [q.strip() <span class="hljs-keyword">for</span> q <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;question&quot;</span>]]
    inputs = tokenizer(
        questions,
        examples[<span class="hljs-string">&quot;context&quot;</span>],
        max_length=max_length,
        truncation=<span class="hljs-string">&quot;only_second&quot;</span>,
        stride=stride,
        return_overflowing_tokens=<span class="hljs-literal">True</span>,
        return_offsets_mapping=<span class="hljs-literal">True</span>,
        padding=<span class="hljs-string">&quot;max_length&quot;</span>,
    )

    offset_mapping = inputs.pop(<span class="hljs-string">&quot;offset_mapping&quot;</span>)
    sample_map = inputs.pop(<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>)
    answers = examples[<span class="hljs-string">&quot;answers&quot;</span>]
    start_positions = []
    end_positions = []

    <span class="hljs-keyword">for</span> i, offset <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(offset_mapping):
        sample_idx = sample_map[i]
        answer = answers[sample_idx]
        start_char = answer[<span class="hljs-string">&quot;answer_start&quot;</span>][<span class="hljs-number">0</span>]
        end_char = answer[<span class="hljs-string">&quot;answer_start&quot;</span>][<span class="hljs-number">0</span>] + <span class="hljs-built_in">len</span>(answer[<span class="hljs-string">&quot;text&quot;</span>][<span class="hljs-number">0</span>])
        sequence_ids = inputs.sequence_ids(i)

        <span class="hljs-comment"># Find the start and end of the context</span>
        idx = <span class="hljs-number">0</span>
        <span class="hljs-keyword">while</span> sequence_ids[idx] != <span class="hljs-number">1</span>:
            idx += <span class="hljs-number">1</span>
        context_start = idx
        <span class="hljs-keyword">while</span> sequence_ids[idx] == <span class="hljs-number">1</span>:
            idx += <span class="hljs-number">1</span>
        context_end = idx - <span class="hljs-number">1</span>

        <span class="hljs-comment"># If the answer is not fully inside the context, label is (0, 0)</span>
        <span class="hljs-keyword">if</span> offset[context_start][<span class="hljs-number">0</span>] &gt; end_char <span class="hljs-keyword">or</span> offset[context_end][<span class="hljs-number">1</span>] &lt; start_char:
            start_positions.append(<span class="hljs-number">0</span>)
            end_positions.append(<span class="hljs-number">0</span>)
        <span class="hljs-keyword">else</span>:
            <span class="hljs-comment"># Otherwise it&#x27;s the start and end token positions</span>
            idx = context_start
            <span class="hljs-keyword">while</span> idx &lt;= context_end <span class="hljs-keyword">and</span> offset[idx][<span class="hljs-number">0</span>] &lt;= start_char:
                idx += <span class="hljs-number">1</span>
            start_positions.append(idx - <span class="hljs-number">1</span>)

            idx = context_end
            <span class="hljs-keyword">while</span> idx &gt;= context_start <span class="hljs-keyword">and</span> offset[idx][<span class="hljs-number">1</span>] &gt;= end_char:
                idx -= <span class="hljs-number">1</span>
            end_positions.append(idx + <span class="hljs-number">1</span>)

    inputs[<span class="hljs-string">&quot;start_positions&quot;</span>] = start_positions
    inputs[<span class="hljs-string">&quot;end_positions&quot;</span>] = end_positions
    <span class="hljs-keyword">return</span> inputs`}}),fo=new S({props:{code:`train_dataset = raw_datasets["train"].map(
    preprocess_training_examples,
    batched=True,
    remove_columns=raw_datasets["train"].column_names,
)
len(raw_datasets["train"]), len(train_dataset)`,highlighted:`train_dataset = raw_datasets[<span class="hljs-string">&quot;train&quot;</span>].<span class="hljs-built_in">map</span>(
    preprocess_training_examples,
    batched=<span class="hljs-literal">True</span>,
    remove_columns=raw_datasets[<span class="hljs-string">&quot;train&quot;</span>].column_names,
)
<span class="hljs-built_in">len</span>(raw_datasets[<span class="hljs-string">&quot;train&quot;</span>]), <span class="hljs-built_in">len</span>(train_dataset)`}}),mo=new S({props:{code:"(87599, 88729)",highlighted:'(<span class="hljs-number">87599</span>, <span class="hljs-number">88729</span>)'}}),_o=new at({}),wo=new S({props:{code:`def preprocess_validation_examples(examples):
    questions = [q.strip() for q in examples["question"]]
    inputs = tokenizer(
        questions,
        examples["context"],
        max_length=max_length,
        truncation="only_second",
        stride=stride,
        return_overflowing_tokens=True,
        return_offsets_mapping=True,
        padding="max_length",
    )

    sample_map = inputs.pop("overflow_to_sample_mapping")
    example_ids = []

    for i in range(len(inputs["input_ids"])):
        sample_idx = sample_map[i]
        example_ids.append(examples["id"][sample_idx])

        sequence_ids = inputs.sequence_ids(i)
        offset = inputs["offset_mapping"][i]
        inputs["offset_mapping"][i] = [
            o if sequence_ids[k] == 1 else None for k, o in enumerate(offset)
        ]

    inputs["example_id"] = example_ids
    return inputs`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_validation_examples</span>(<span class="hljs-params">examples</span>):
    questions = [q.strip() <span class="hljs-keyword">for</span> q <span class="hljs-keyword">in</span> examples[<span class="hljs-string">&quot;question&quot;</span>]]
    inputs = tokenizer(
        questions,
        examples[<span class="hljs-string">&quot;context&quot;</span>],
        max_length=max_length,
        truncation=<span class="hljs-string">&quot;only_second&quot;</span>,
        stride=stride,
        return_overflowing_tokens=<span class="hljs-literal">True</span>,
        return_offsets_mapping=<span class="hljs-literal">True</span>,
        padding=<span class="hljs-string">&quot;max_length&quot;</span>,
    )

    sample_map = inputs.pop(<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>)
    example_ids = []

    <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])):
        sample_idx = sample_map[i]
        example_ids.append(examples[<span class="hljs-string">&quot;id&quot;</span>][sample_idx])

        sequence_ids = inputs.sequence_ids(i)
        offset = inputs[<span class="hljs-string">&quot;offset_mapping&quot;</span>][i]
        inputs[<span class="hljs-string">&quot;offset_mapping&quot;</span>][i] = [
            o <span class="hljs-keyword">if</span> sequence_ids[k] == <span class="hljs-number">1</span> <span class="hljs-keyword">else</span> <span class="hljs-literal">None</span> <span class="hljs-keyword">for</span> k, o <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(offset)
        ]

    inputs[<span class="hljs-string">&quot;example_id&quot;</span>] = example_ids
    <span class="hljs-keyword">return</span> inputs`}}),go=new S({props:{code:`validation_dataset = raw_datasets["validation"].map(
    preprocess_validation_examples,
    batched=True,
    remove_columns=raw_datasets["validation"].column_names,
)
len(raw_datasets["validation"]), len(validation_dataset)`,highlighted:`validation_dataset = raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>].<span class="hljs-built_in">map</span>(
    preprocess_validation_examples,
    batched=<span class="hljs-literal">True</span>,
    remove_columns=raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>].column_names,
)
<span class="hljs-built_in">len</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>]), <span class="hljs-built_in">len</span>(validation_dataset)`}}),bo=new S({props:{code:"(10570, 10822)",highlighted:'(<span class="hljs-number">10570</span>, <span class="hljs-number">10822</span>)'}});const tu=[Xm,Jm],Ro=[];function su(e,l){return e[0]==="pt"?0:1}Ht=su(W),Vt=Ro[Ht]=tu[Ht](W),vo=new at({});const au=[Zm,Km],Go=[];function nu(e,l){return e[0]==="pt"?0:1}Qt=nu(W),Rt=Go[Qt]=au[Qt](W),ko=new S({props:{code:`small_eval_set = raw_datasets["validation"].select(range(100))
trained_checkpoint = "distilbert-base-cased-distilled-squad"

tokenizer = AutoTokenizer.from_pretrained(trained_checkpoint)
eval_set = small_eval_set.map(
    preprocess_validation_examples,
    batched=True,
    remove_columns=raw_datasets["validation"].column_names,
)`,highlighted:`small_eval_set = raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>].select(<span class="hljs-built_in">range</span>(<span class="hljs-number">100</span>))
trained_checkpoint = <span class="hljs-string">&quot;distilbert-base-cased-distilled-squad&quot;</span>

tokenizer = AutoTokenizer.from_pretrained(trained_checkpoint)
eval_set = small_eval_set.<span class="hljs-built_in">map</span>(
    preprocess_validation_examples,
    batched=<span class="hljs-literal">True</span>,
    remove_columns=raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>].column_names,
)`}}),$o=new S({props:{code:"tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)",highlighted:"tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)"}});const ou=[t_,e_],Uo=[];function iu(e,l){return e[0]==="pt"?0:1}Gt=iu(W),Ut=Uo[Gt]=ou[Gt](W),jo=new S({props:{code:`import collections

example_to_features = collections.defaultdict(list)
for idx, feature in enumerate(eval_set):
    example_to_features[feature["example_id"]].append(idx)`,highlighted:`<span class="hljs-keyword">import</span> collections

example_to_features = collections.defaultdict(<span class="hljs-built_in">list</span>)
<span class="hljs-keyword">for</span> idx, feature <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(eval_set):
    example_to_features[feature[<span class="hljs-string">&quot;example_id&quot;</span>]].append(idx)`}}),Eo=new S({props:{code:`import numpy as np

n_best = 20
max_answer_length = 30
predicted_answers = []

for example in small_eval_set:
    example_id = example["id"]
    context = example["context"]
    answers = []

    for feature_index in example_to_features[example_id]:
        start_logit = start_logits[feature_index]
        end_logit = end_logits[feature_index]
        offsets = eval_set["offset_mapping"][feature_index]

        start_indexes = np.argsort(start_logit)[-1 : -n_best - 1 : -1].tolist()
        end_indexes = np.argsort(end_logit)[-1 : -n_best - 1 : -1].tolist()
        for start_index in start_indexes:
            for end_index in end_indexes:
                # Skip answers that are not fully in the context
                if offsets[start_index] is None or offsets[end_index] is None:
                    continue
                # Skip answers with a length that is either < 0 or > max_answer_length.
                if (
                    end_index < start_index
                    or end_index - start_index + 1 > max_answer_length
                ):
                    continue

                answers.append(
                    {
                        "text": context[offsets[start_index][0] : offsets[end_index][1]],
                        "logit_score": start_logit[start_index] + end_logit[end_index],
                    }
                )

    best_answer = max(answers, key=lambda x: x["logit_score"])
    predicted_answers.append({"id": example_id, "prediction_text": best_answer["text"]})`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

n_best = <span class="hljs-number">20</span>
max_answer_length = <span class="hljs-number">30</span>
predicted_answers = []

<span class="hljs-keyword">for</span> example <span class="hljs-keyword">in</span> small_eval_set:
    example_id = example[<span class="hljs-string">&quot;id&quot;</span>]
    context = example[<span class="hljs-string">&quot;context&quot;</span>]
    answers = []

    <span class="hljs-keyword">for</span> feature_index <span class="hljs-keyword">in</span> example_to_features[example_id]:
        start_logit = start_logits[feature_index]
        end_logit = end_logits[feature_index]
        offsets = eval_set[<span class="hljs-string">&quot;offset_mapping&quot;</span>][feature_index]

        start_indexes = np.argsort(start_logit)[-<span class="hljs-number">1</span> : -n_best - <span class="hljs-number">1</span> : -<span class="hljs-number">1</span>].tolist()
        end_indexes = np.argsort(end_logit)[-<span class="hljs-number">1</span> : -n_best - <span class="hljs-number">1</span> : -<span class="hljs-number">1</span>].tolist()
        <span class="hljs-keyword">for</span> start_index <span class="hljs-keyword">in</span> start_indexes:
            <span class="hljs-keyword">for</span> end_index <span class="hljs-keyword">in</span> end_indexes:
                <span class="hljs-comment"># Skip answers that are not fully in the context</span>
                <span class="hljs-keyword">if</span> offsets[start_index] <span class="hljs-keyword">is</span> <span class="hljs-literal">None</span> <span class="hljs-keyword">or</span> offsets[end_index] <span class="hljs-keyword">is</span> <span class="hljs-literal">None</span>:
                    <span class="hljs-keyword">continue</span>
                <span class="hljs-comment"># Skip answers with a length that is either &lt; 0 or &gt; max_answer_length.</span>
                <span class="hljs-keyword">if</span> (
                    end_index &lt; start_index
                    <span class="hljs-keyword">or</span> end_index - start_index + <span class="hljs-number">1</span> &gt; max_answer_length
                ):
                    <span class="hljs-keyword">continue</span>

                answers.append(
                    {
                        <span class="hljs-string">&quot;text&quot;</span>: context[offsets[start_index][<span class="hljs-number">0</span>] : offsets[end_index][<span class="hljs-number">1</span>]],
                        <span class="hljs-string">&quot;logit_score&quot;</span>: start_logit[start_index] + end_logit[end_index],
                    }
                )

    best_answer = <span class="hljs-built_in">max</span>(answers, key=<span class="hljs-keyword">lambda</span> x: x[<span class="hljs-string">&quot;logit_score&quot;</span>])
    predicted_answers.append({<span class="hljs-string">&quot;id&quot;</span>: example_id, <span class="hljs-string">&quot;prediction_text&quot;</span>: best_answer[<span class="hljs-string">&quot;text&quot;</span>]})`}}),To=new S({props:{code:`from datasets import load_metric

metric = load_metric("squad")`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric

metric = load_metric(<span class="hljs-string">&quot;squad&quot;</span>)`}}),Ao=new S({props:{code:`theoretical_answers = [
    {"id": ex["id"], "answers": ex["answers"]} for ex in small_eval_set
]`,highlighted:`theoretical_answers = [
    {<span class="hljs-string">&quot;id&quot;</span>: ex[<span class="hljs-string">&quot;id&quot;</span>], <span class="hljs-string">&quot;answers&quot;</span>: ex[<span class="hljs-string">&quot;answers&quot;</span>]} <span class="hljs-keyword">for</span> ex <span class="hljs-keyword">in</span> small_eval_set
]`}}),Do=new S({props:{code:`print(predicted_answers[0])
print(theoretical_answers[0])`,highlighted:`<span class="hljs-built_in">print</span>(predicted_answers[<span class="hljs-number">0</span>])
<span class="hljs-built_in">print</span>(theoretical_answers[<span class="hljs-number">0</span>])`}}),Po=new S({props:{code:`{'id': '56be4db0acb8001400a502ec', 'prediction_text': 'Denver Broncos'}
{'id': '56be4db0acb8001400a502ec', 'answers': {'text': ['Denver Broncos', 'Denver Broncos', 'Denver Broncos'], 'answer_start': [177, 177, 177]}}`,highlighted:`{<span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;56be4db0acb8001400a502ec&#x27;</span>, <span class="hljs-string">&#x27;prediction_text&#x27;</span>: <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>}
{<span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;56be4db0acb8001400a502ec&#x27;</span>, <span class="hljs-string">&#x27;answers&#x27;</span>: {<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">177</span>, <span class="hljs-number">177</span>, <span class="hljs-number">177</span>]}}`}}),Co=new S({props:{code:"metric.compute(predictions=predicted_answers, references=theoretical_answers)",highlighted:"metric.compute(predictions=predicted_answers, references=theoretical_answers)"}}),So=new S({props:{code:"{'exact_match': 83.0, 'f1': 88.25}",highlighted:'{<span class="hljs-string">&#x27;exact_match&#x27;</span>: <span class="hljs-number">83.0</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">88.25</span>}'}});function ru(e,l){return e[0]==="pt"?a_:s_}let Kp=ru(W),ba=Kp(W);zo=new S({props:{code:`from tqdm.auto import tqdm


def compute_metrics(start_logits, end_logits, features, examples):
    example_to_features = collections.defaultdict(list)
    for idx, feature in enumerate(features):
        example_to_features[feature["example_id"]].append(idx)

    predicted_answers = []
    for example in tqdm(examples):
        example_id = example["id"]
        context = example["context"]
        answers = []

        # Loop through all features associated with that example
        for feature_index in example_to_features[example_id]:
            start_logit = start_logits[feature_index]
            end_logit = end_logits[feature_index]
            offsets = features[feature_index]["offset_mapping"]

            start_indexes = np.argsort(start_logit)[-1 : -n_best - 1 : -1].tolist()
            end_indexes = np.argsort(end_logit)[-1 : -n_best - 1 : -1].tolist()
            for start_index in start_indexes:
                for end_index in end_indexes:
                    # Skip answers that are not fully in the context
                    if offsets[start_index] is None or offsets[end_index] is None:
                        continue
                    # Skip answers with a length that is either < 0 or > max_answer_length
                    if (
                        end_index < start_index
                        or end_index - start_index + 1 > max_answer_length
                    ):
                        continue

                    answer = {
                        "text": context[offsets[start_index][0] : offsets[end_index][1]],
                        "logit_score": start_logit[start_index] + end_logit[end_index],
                    }
                    answers.append(answer)

        # Select the answer with the best score
        if len(answers) > 0:
            best_answer = max(answers, key=lambda x: x["logit_score"])
            predicted_answers.append(
                {"id": example_id, "prediction_text": best_answer["text"]}
            )
        else:
            predicted_answers.append({"id": example_id, "prediction_text": ""})

    theoretical_answers = [{"id": ex["id"], "answers": ex["answers"]} for ex in examples]
    return metric.compute(predictions=predicted_answers, references=theoretical_answers)`,highlighted:`<span class="hljs-keyword">from</span> tqdm.auto <span class="hljs-keyword">import</span> tqdm


<span class="hljs-keyword">def</span> <span class="hljs-title function_">compute_metrics</span>(<span class="hljs-params">start_logits, end_logits, features, examples</span>):
    example_to_features = collections.defaultdict(<span class="hljs-built_in">list</span>)
    <span class="hljs-keyword">for</span> idx, feature <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(features):
        example_to_features[feature[<span class="hljs-string">&quot;example_id&quot;</span>]].append(idx)

    predicted_answers = []
    <span class="hljs-keyword">for</span> example <span class="hljs-keyword">in</span> tqdm(examples):
        example_id = example[<span class="hljs-string">&quot;id&quot;</span>]
        context = example[<span class="hljs-string">&quot;context&quot;</span>]
        answers = []

        <span class="hljs-comment"># Loop through all features associated with that example</span>
        <span class="hljs-keyword">for</span> feature_index <span class="hljs-keyword">in</span> example_to_features[example_id]:
            start_logit = start_logits[feature_index]
            end_logit = end_logits[feature_index]
            offsets = features[feature_index][<span class="hljs-string">&quot;offset_mapping&quot;</span>]

            start_indexes = np.argsort(start_logit)[-<span class="hljs-number">1</span> : -n_best - <span class="hljs-number">1</span> : -<span class="hljs-number">1</span>].tolist()
            end_indexes = np.argsort(end_logit)[-<span class="hljs-number">1</span> : -n_best - <span class="hljs-number">1</span> : -<span class="hljs-number">1</span>].tolist()
            <span class="hljs-keyword">for</span> start_index <span class="hljs-keyword">in</span> start_indexes:
                <span class="hljs-keyword">for</span> end_index <span class="hljs-keyword">in</span> end_indexes:
                    <span class="hljs-comment"># Skip answers that are not fully in the context</span>
                    <span class="hljs-keyword">if</span> offsets[start_index] <span class="hljs-keyword">is</span> <span class="hljs-literal">None</span> <span class="hljs-keyword">or</span> offsets[end_index] <span class="hljs-keyword">is</span> <span class="hljs-literal">None</span>:
                        <span class="hljs-keyword">continue</span>
                    <span class="hljs-comment"># Skip answers with a length that is either &lt; 0 or &gt; max_answer_length</span>
                    <span class="hljs-keyword">if</span> (
                        end_index &lt; start_index
                        <span class="hljs-keyword">or</span> end_index - start_index + <span class="hljs-number">1</span> &gt; max_answer_length
                    ):
                        <span class="hljs-keyword">continue</span>

                    answer = {
                        <span class="hljs-string">&quot;text&quot;</span>: context[offsets[start_index][<span class="hljs-number">0</span>] : offsets[end_index][<span class="hljs-number">1</span>]],
                        <span class="hljs-string">&quot;logit_score&quot;</span>: start_logit[start_index] + end_logit[end_index],
                    }
                    answers.append(answer)

        <span class="hljs-comment"># Select the answer with the best score</span>
        <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(answers) &gt; <span class="hljs-number">0</span>:
            best_answer = <span class="hljs-built_in">max</span>(answers, key=<span class="hljs-keyword">lambda</span> x: x[<span class="hljs-string">&quot;logit_score&quot;</span>])
            predicted_answers.append(
                {<span class="hljs-string">&quot;id&quot;</span>: example_id, <span class="hljs-string">&quot;prediction_text&quot;</span>: best_answer[<span class="hljs-string">&quot;text&quot;</span>]}
            )
        <span class="hljs-keyword">else</span>:
            predicted_answers.append({<span class="hljs-string">&quot;id&quot;</span>: example_id, <span class="hljs-string">&quot;prediction_text&quot;</span>: <span class="hljs-string">&quot;&quot;</span>})

    theoretical_answers = [{<span class="hljs-string">&quot;id&quot;</span>: ex[<span class="hljs-string">&quot;id&quot;</span>], <span class="hljs-string">&quot;answers&quot;</span>: ex[<span class="hljs-string">&quot;answers&quot;</span>]} <span class="hljs-keyword">for</span> ex <span class="hljs-keyword">in</span> examples]
    <span class="hljs-keyword">return</span> metric.compute(predictions=predicted_answers, references=theoretical_answers)`}}),Io=new S({props:{code:"compute_metrics(start_logits, end_logits, eval_set, small_eval_set)",highlighted:"compute_metrics(start_logits, end_logits, eval_set, small_eval_set)"}}),Fo=new S({props:{code:"{'exact_match': 83.0, 'f1': 88.25}",highlighted:'{<span class="hljs-string">&#x27;exact_match&#x27;</span>: <span class="hljs-number">83.0</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">88.25</span>}'}}),No=new at({});const lu=[o_,n_],Yo=[];function pu(e,l){return e[0]==="pt"?0:1}Yt=pu(W),Jt=Yo[Yt]=lu[Yt](W),Mo=new S({props:{code:`from huggingface_hub import notebook_login

notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Bo=new S({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}});const hu=[r_,i_],Jo=[];function du(e,l){return e[0]==="pt"?0:1}Xt=du(W),Kt=Jo[Xt]=hu[Xt](W);const cu=[p_,l_],Xo=[];function uu(e,l){return e[0]==="pt"?0:1}Zt=uu(W),es=Xo[Zt]=cu[Zt](W);const fu=[c_,d_],Ko=[];function mu(e,l){return e[0]==="pt"?0:1}ts=mu(W),ss=Ko[ts]=fu[ts](W),Lo=new S({props:{code:"{'exact_match': 81.18259224219489, 'f1': 88.67381321905516}",highlighted:'{<span class="hljs-string">&#x27;exact_match&#x27;</span>: <span class="hljs-number">81.18259224219489</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">88.67381321905516</span>}'}});let re=W[0]==="pt"&&Om();xn=new xh({props:{$$slots:{default:[u_]},$$scope:{ctx:W}}});let le=W[0]==="pt"&&zm();return Wo=new at({}),Ho=new S({props:{code:`from transformers import pipeline

# Replace this with your own checkpoint
model_checkpoint = "huggingface-course/bert-finetuned-squad"
question_answerer = pipeline("question-answering", model=model_checkpoint)

context = """
\u{1F917} Transformers is backed by the three most popular deep learning libraries \u2014 Jax, PyTorch and TensorFlow \u2014 with a seamless integration
between them. It's straightforward to train your models with one before loading them for inference with the other.
"""
question = "Which deep learning libraries back \u{1F917} Transformers?"
question_answerer(question=question, context=context)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-comment"># Replace this with your own checkpoint</span>
model_checkpoint = <span class="hljs-string">&quot;huggingface-course/bert-finetuned-squad&quot;</span>
question_answerer = pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>, model=model_checkpoint)

context = <span class="hljs-string">&quot;&quot;&quot;
\u{1F917} Transformers is backed by the three most popular deep learning libraries \u2014 Jax, PyTorch and TensorFlow \u2014 with a seamless integration
between them. It&#x27;s straightforward to train your models with one before loading them for inference with the other.
&quot;&quot;&quot;</span>
question = <span class="hljs-string">&quot;Which deep learning libraries back \u{1F917} Transformers?&quot;</span>
question_answerer(question=question, context=context)`}}),Vo=new S({props:{code:`{'score': 0.9979003071784973,
 'start': 78,
 'end': 105,
 'answer': 'Jax, PyTorch and TensorFlow'}`,highlighted:`{<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9979003071784973</span>,
 <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">78</span>,
 <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">105</span>,
 <span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Jax, PyTorch and TensorFlow&#x27;</span>}`}}),{c(){h=i("meta"),g=d(),j(f.$$.fragment),x=d(),D=i("h1"),b=i("a"),$=i("span"),j(y.$$.fragment),m=d(),O=i("span"),k=a("Question answering"),v=d(),N.c(),z=d(),A=i("p"),Q=a("Time to look at question answering! This task comes in many flavors, but the one we\u2019ll focus on in this section is called "),B=i("em"),R=a("extractive"),M=a(" question answering. This involves posing questions about a document and identifying the answers as "),L=i("em"),H=a("spans of text"),X=a(" in the document itself."),G=d(),j(I.$$.fragment),U=d(),K=i("p"),te=a("We will fine-tune a BERT model on the "),Y=i("a"),ie=a("SQuAD dataset"),_e=a(", which consists of questions posed by crowdworkers on a set of Wikipedia articles. This will give us a model able to compute predictions like this one:"),Ae=d(),xe=i("div"),ye=i("div"),We=d(),V=i("p"),J=a("This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it and double-check the predictions "),De=i("a"),as=a("here"),nt=a("."),mt=d(),j(de.$$.fragment),ot=d(),se=i("h2"),we=i("a"),ce=i("span"),j(Pe.$$.fragment),va=d(),He=i("span"),xa=a("Preparing the data"),Ve=d(),Ce=i("p"),Ms=a("The dataset that is used the most as an academic benchmark for extractive question answering is "),_t=i("a"),An=a("SQuAD"),ya=a(", so that\u2019s the one we\u2019ll use here. There is also a harder "),ke=i("a"),ka=a("SQuAD v2"),oe=a(" benchmark, which includes questions that don\u2019t have an answer. As long as your own dataset contains a column for contexts, a column for questions, and a column for answers, you should be able to adapt the steps below."),$a=d(),$e=i("h3"),it=i("a"),Bs=i("span"),j(Qe.$$.fragment),Dn=d(),Ls=i("span"),Ws=a("The SQuAD dataset"),ja=d(),rt=i("p"),Hs=a("As usual, we can download and cache the dataset in just one step thanks to "),Vs=i("code"),Pn=a("load_dataset()"),Qs=a(":"),qa=d(),j(wt.$$.fragment),Rs=d(),Se=i("p"),Ea=a("We can then have a look at this object to learn more about the SQuAD dataset:"),je=d(),j(gt.$$.fragment),ns=d(),j(bt.$$.fragment),Ta=d(),pe=i("p"),Cn=a("It looks like we have everything we need with the "),Gs=i("code"),Aa=a("context"),vt=a(", "),os=i("code"),ge=a("question"),Sn=a(", and "),xt=i("code"),On=a("answers"),zn=a(" fields, so let\u2019s print those for the first element of our training set:"),is=d(),j(yt.$$.fragment),Da=d(),j(Re.$$.fragment),Pa=d(),ae=i("p"),Ca=a("The "),Ge=i("code"),Sa=a("context"),kt=a(" and "),rs=i("code"),ls=a("question"),In=a(" fields are very straightforward to use. The "),ps=i("code"),$t=a("answers"),Oa=a(" field is a bit trickier as it comports a dictionary with two fields that are both lists. This is the format that will be expected by the "),be=i("code"),Fn=a("squad"),Us=a(" metric during evaluation; if you are using your own data, you don\u2019t necessarily need to worry about putting the answers in the same format. The "),Ys=i("code"),Nn=a("text"),Js=a(" field is rather obvious, and the "),Xs=i("code"),Mn=a("answer_start"),za=a(" field contains the starting character index of each answer in the context."),Oe=d(),ue=i("p"),Ks=a("During training, there is only one possible answer. We can double-check this by using the "),Ue=i("code"),Bn=a("Dataset.filter()"),Zs=a(" method:"),Ia=d(),j(lt.$$.fragment),jt=d(),j(qt.$$.fragment),ea=d(),fe=i("p"),Et=a("For evaluation, however, there are several possible answers for each sample, which may be the same or different:"),Fa=d(),j(Ye.$$.fragment),Na=d(),j(Tt.$$.fragment),Ma=d(),he=i("p"),Ln=a("We won\u2019t dive into the evaluation script as it will all be wrapped up by a \u{1F917} Datasets metric for us, but the short version is that some of the questions have several possible answers, and this script will compare a predicted answer to all the acceptable answers and take the best score. If we take a look at the sample at index 2, for instance:"),hs=d(),j(At.$$.fragment),Ba=d(),j(Je.$$.fragment),La=d(),ds=i("p"),ta=a("we can see that the answer can indeed be one of the three possibilities we saw before."),Wa=d(),Xe=i("h3"),pt=i("a"),qe=i("span"),j(Dt.$$.fragment),sa=d(),aa=i("span"),Wn=a("Processing the training data"),cs=d(),j(Pt.$$.fragment),Ha=d(),Ct=i("p"),us=a("Let\u2019s start with preprocessing the training data. The hard part will be to generate labels for the question\u2019s answer, which will be the start and end positions of the tokens corresponding to the answer inside the context."),Va=d(),St=i("p"),Ot=a("But let\u2019s not get ahead of ourselves. First, we need to convert the text in the input into IDs the model can make sense of, using a tokenizer:"),na=d(),j(ze.$$.fragment),Qa=d(),me=i("p"),zt=a("As mentioned previously, we\u2019ll be fine-tuning a BERT model, but you can use any other model type as long as it has a fast tokenizer implemented. You can see all the architectures that come with a fast version in "),ht=i("a"),Z=a("this big table"),Hn=a(", and to check that the "),It=i("code"),Vn=a("tokenizer"),Qn=a(" object you\u2019re using is indeed backed by \u{1F917} Tokenizers you can look at its "),Ft=i("code"),Rn=a("is_fast"),Gn=a(" attribute:"),fs=d(),j(Nt.$$.fragment),Ra=d(),j(Ke.$$.fragment),Ga=d(),ms=i("p"),oa=a("We can pass to our tokenizer the question and the context together, and it will properly insert the special tokens to form a sentence like this:"),Ua=d(),j(Mt.$$.fragment),_s=d(),ws=i("p"),Un=a("Let\u2019s double-check:"),gs=d(),j(Bt.$$.fragment),Ya=d(),j(dt.$$.fragment),Ee=d(),bs=i("p"),ia=a("The labels will then be the index of the tokens starting and ending the answer, and the model will be tasked to predicted one start and end logit per token in the input, with the theoretical labels being as follow:"),Ja=d(),Ze=i("div"),Ie=i("img"),Yn=d(),vs=i("img"),u=d(),F=i("p"),Ka=a("In this case the context is not too long, but some of the examples in the dataset have very long contexts that will exceed the maximum length we set (which is 384 in this case). As we saw in "),ra=i("a"),si=a("Chapter 6"),ai=a(" when we explored the internals of the "),ct=i("code"),ni=a("question-answering"),oi=a(" pipeline, we will deal with long contexts by creating several training features from one sample of our dataset, with a sliding window between them."),la=d(),pa=i("p"),ii=a("To see how this works using the current example, we can limit the length to 100 and use a sliding window of 50 tokens. As a reminder, we use:"),Xn=d(),ee=i("ul"),ha=i("li"),Za=i("code"),ri=a("max_length"),li=a(" to set the maximum length (here 100)"),pi=d(),Lt=i("li"),en=i("code"),ve=a('truncation="only_second"'),hi=a(" to truncate the context (which is in the second position) when the question with its context is too long"),di=d(),da=i("li"),tn=i("code"),ci=a("stride"),xs=a(" to set the number of overlapping tokens between two successive chunks (here 50)"),ui=d(),ca=i("li"),Fe=i("code"),fi=a("return_overflowing_tokens=True"),mi=a(" to let the tokenizer know we want the overflowing tokens"),Kn=d(),j(ys.$$.fragment),Wt=d(),j(ks.$$.fragment),Zn=d(),Te=i("p"),_i=a("As we can see, our example has been in split into four inputs, each of them containing the question and some part of the context. Note that the answer to the question (\u201CBernadette Soubirous\u201D) only appears in the third and last inputs, so by dealing with long contexts in this way we will create some training examples where the answer is not included in the context. For those examples, the labels will be "),sn=i("code"),wi=a("start_position = end_position = 0"),gi=a(" (so we predict the "),ut=i("code"),an=a("[CLS]"),bi=a(" token). We will also set those labels in the unfortunate case where the answer has been truncated so that we only have the start (or end) of it. For the examples where the answer is fully in the context, the labels will be the index of the token where the answer starts and the index of the token where the answer ends."),et=d(),tt=i("p"),vi=a("The dataset provides us with the start character of the answer in the context, and by adding the length of the answer, we can find the end character in the context. To map those to token indices, we will need to use the offset mappings we studied in "),ua=i("a"),$s=a("Chapter 6"),xi=a(". We can have our tokenizer return these by passing along "),nn=i("code"),yi=a("return_offsets_mapping=True"),ki=a(":"),ne=d(),j(js.$$.fragment),eo=d(),j(qs.$$.fragment),to=d(),st=i("p"),$i=a("As we can see, we get back the usual input IDs, token type IDs, and attention mask, as well as the offset mapping we required and an extra key, "),on=i("code"),Es=a("overflow_to_sample_mapping"),ji=a(". The corresponding value will be of use to us when we tokenize several texts at the same time (which we should do to benefit from the fact that our tokenizer is backed by Rust). Since one sample can give several features, it maps each feature to the example it originated from. Because here we only tokenized one example, we get a list of "),rn=i("code"),qi=a("0"),kh=a("s:"),bl=d(),j(so.$$.fragment),vl=d(),j(ao.$$.fragment),xl=d(),Ei=i("p"),$h=a("But if we tokenize more examples, this will become more useful:"),yl=d(),j(no.$$.fragment),kl=d(),j(oo.$$.fragment),$l=d(),Ti=i("p"),jh=a("As we can see, the first three examples (at indices 2, 3, and 4 in the training set) each gave four features and the last example (at index 5 in the training set) gave 7 features."),jl=d(),Ai=i("p"),qh=a("This information will be useful to map each feature we get to its corresponding label. As mentioned earlier, those labels are:"),ql=d(),ln=i("ul"),Di=i("li"),jr=i("code"),Eh=a("(0, 0)"),Th=a(" if the answer is not in the corresponding span of the context"),Ah=d(),Ts=i("li"),qr=i("code"),Dh=a("(start_position, end_position)"),Ph=a(" if the answer is in the corresponding span of the context, with "),Er=i("code"),Ch=a("start_position"),Sh=a(" being the index of the token (in the input IDs) at the start of the answer and "),Tr=i("code"),Oh=a("end_position"),zh=a(" being the index of the token (in the input IDs) where the answer ends"),El=d(),As=i("p"),Ih=a("To determine which of these is the case and, if relevant, the positions of the tokens, we first find the indices that start and end the context in the input IDs. We could use the token type IDs to do this, but since those do not necessarily exist for all models (DistilBERT does not require them, for instance), we\u2019ll instead use the "),Ar=i("code"),Fh=a("sequence_ids()"),Nh=a(" method of the "),Dr=i("code"),Mh=a("BatchEncoding"),Bh=a(" our tokenizer returns."),Tl=d(),pn=i("p"),Lh=a("Once we have those token indices, we look at the corresponding offsets, which are tuples of two integers representing the span of characters inside the original context. We can thus detect if the chunk of the context in this feature starts after the answer or ends before the answer begins (in which case the label is "),Pr=i("code"),Wh=a("(0, 0)"),Hh=a("). If that\u2019s not the case, we loop to find the first and last token of the answer:"),Al=d(),j(io.$$.fragment),Dl=d(),j(ro.$$.fragment),Pl=d(),hn=i("p"),Vh=a("Let\u2019s take a look at a few results to verify that our approach is correct. For the first feature we find "),Cr=i("code"),Qh=a("(83, 85)"),Rh=a(" as labels, so let\u2019s compare the theoretical answer with the decoded span of tokens from 83 to 85 (inclusive):"),Cl=d(),j(lo.$$.fragment),Sl=d(),j(po.$$.fragment),Ol=d(),dn=i("p"),Gh=a("So that\u2019s a match! Now let\u2019s check index 4, where we set the labels to "),Sr=i("code"),Uh=a("(0, 0)"),Yh=a(", which means the answer is not in the context chunk of that feature:"),zl=d(),j(ho.$$.fragment),Il=d(),j(co.$$.fragment),Fl=d(),Pi=i("p"),Jh=a("Indeed, we don\u2019t see the answer inside the context."),Nl=d(),j(cn.$$.fragment),Ml=d(),Ci=i("p"),Xh=a("Now that we have seen step by step how to preprocess our training data, we can group it in a function we will apply on the whole training dataset. We\u2019ll pad every feature to the maximum length we set, as most of the contexts will be long (and the corresponding samples will be split into several features), so there is no real benefit to applying dynamic padding here:"),Bl=d(),j(uo.$$.fragment),Ll=d(),Si=i("p"),Kh=a("Note that we defined two constants to determine the maximum length used as well as the length of the sliding window, and that we added a tiny bit of cleanup before tokenizing: some of the questions in the SQuAD dataset have extra spaces at the beginning and the end that don\u2019t add anything (and take up space when being tokenized if you use a model like RoBERTa), so we removed those extra spaces."),Wl=d(),Ds=i("p"),Zh=a("To apply this function to the whole training set, we use the "),Or=i("code"),ed=a("Dataset.map()"),td=a(" method with the "),zr=i("code"),sd=a("batched=True"),ad=a(" flag. It\u2019s necessary here as we are changing the length of the dataset (since one example can give several training features):"),Hl=d(),j(fo.$$.fragment),Vl=d(),j(mo.$$.fragment),Ql=d(),Oi=i("p"),nd=a("As we can see, the preprocessing added roughly 1,000 features. Our training set is now ready to be used \u2014 let\u2019s dig into the preprocessing of the validation set!"),Rl=d(),fa=i("h3"),un=i("a"),Ir=i("span"),j(_o.$$.fragment),od=d(),Fr=i("span"),id=a("Processing the validation data"),Gl=d(),zi=i("p"),rd=a("Preprocessing the validation data will be slightly easier as we don\u2019t need to generate labels (unless we want to compute a validation loss, but that number won\u2019t really help us understand how good the model is). The real joy will be to interpret the predictions of the model into spans of the original context. For this, we will just need to store both the offset mappings and some way to match each created feature to the original example it comes from. Since there is an ID column in the original dataset, we\u2019ll use that ID."),Ul=d(),Ps=i("p"),ld=a("The only thing we\u2019ll add here is a tiny bit of cleanup of the offset mappings. They will contain offsets for the question and the context, but once we\u2019re in the post-processing stage we won\u2019t have any way to know which part of the input IDs corresponded to the context and which part was the question (the "),Nr=i("code"),pd=a("sequence_ids()"),hd=a(" method we used is available for the output of the tokenizer only). So, we\u2019ll set the offsets corresponding to the question to "),Mr=i("code"),dd=a("None"),cd=a(":"),Yl=d(),j(wo.$$.fragment),Jl=d(),Ii=i("p"),ud=a("We can apply this function on the whole validation dataset like before:"),Xl=d(),j(go.$$.fragment),Kl=d(),j(bo.$$.fragment),Zl=d(),Fi=i("p"),fd=a("In this case we\u2019ve only added a couple of hundred samples, so it appears the contexts in the validation dataset are a bit shorter."),ep=d(),Ni=i("p"),md=a("Now that we have preprocessed all the data, we can get to the training."),tp=d(),Vt.c(),Mi=d(),ma=i("h3"),fn=i("a"),Br=i("span"),j(vo.$$.fragment),_d=d(),Lr=i("span"),wd=a("Post-processing"),sp=d(),Rt.c(),Bi=d(),mn=i("p"),gd=a("The model will output logits for the start and end positions of the answer in the input IDs, as we saw during our exploration of the "),xo=i("a"),Wr=i("code"),bd=a("question-answering"),vd=a(" pipeline"),xd=a(". The post-processing step will be similar to what we did there, so here\u2019s a quick reminder of the actions we took:"),ap=d(),ft=i("ul"),Hr=i("li"),yd=a("We masked the start and end logits corresponding to tokens outside of the context."),kd=d(),Vr=i("li"),$d=a("We then converted the start and end logits into probabilities using a softmax."),jd=d(),yo=i("li"),qd=a("We attributed a score to each "),Qr=i("code"),Ed=a("(start_token, end_token)"),Td=a(" pair by taking the product of the corresponding two probabilities."),Ad=d(),_a=i("li"),Dd=a("We looked for the pair with the maximum score that yielded a valid answer (e.g., a "),Rr=i("code"),Pd=a("start_token"),Cd=a(" lower than "),Gr=i("code"),Sd=a("end_token"),Od=a(")."),np=d(),Ne=i("p"),zd=a("Here we will change this process slightly because we don\u2019t need to compute actual scores (just the predicted answer). This means we can skip the softmax step. To go faster, we also won\u2019t score all the possible "),Ur=i("code"),Id=a("(start_token, end_token)"),Fd=a(" pairs, but only the ones corresponding to the highest "),Yr=i("code"),Nd=a("n_best"),Md=a(" logits (with "),Jr=i("code"),Bd=a("n_best=20"),Ld=a("). Since we will skip the softmax, those scores will be logit scores, and will be obtained by taking the sum of the start and end logits (instead of the product, because of the rule "),op=new Lm,ip=a(")."),rp=d(),_n=i("p"),Wd=a("To demonstrate all of this, we will need some kind of predictions. Since we have not trained our model yet, we are going to use the default model for the QA pipeline to generate some predictions on a small part of the validation set. We can use the same processing function as before; because it relies on the global constant "),Xr=i("code"),Hd=a("tokenizer"),Vd=a(", we just have to change that object to the tokenizer of the model we want to use temporarily:"),lp=d(),j(ko.$$.fragment),pp=d(),Li=i("p"),Qd=a("Now that the preprocessing is done, we change the tokenizer back to the one we originally picked:"),hp=d(),j($o.$$.fragment),dp=d(),wn=i("p"),Rd=a("We then remove the columns of our "),Kr=i("code"),Gd=a("eval_set"),Ud=a(" that are not expected by the model, build a batch with all of that small validation set, and pass it through the model. If a GPU is available, we use it to go faster:"),cp=d(),Ut.c(),Wi=d(),Me=i("p"),Yd=a("Now, we need to find the predicted answer for each example in our "),Zr=i("code"),Jd=a("small_eval_set"),Xd=a(". One example may have been split into several features in "),el=i("code"),Kd=a("eval_set"),Zd=a(", so the first step is to map each example in "),tl=i("code"),ec=a("small_eval_set"),tc=a(" to the corresponding features in "),sl=i("code"),sc=a("eval_set"),ac=a(":"),up=d(),j(jo.$$.fragment),fp=d(),gn=i("p"),nc=a("With this in hand, we can really get to work by looping through all the examples and, for each example, through all the associated features. As we said before, we\u2019ll look at the logit scores for the "),al=i("code"),oc=a("n_best"),ic=a(" start logits and end logits, excluding positions that give:"),mp=d(),Cs=i("ul"),nl=i("li"),rc=a("An answer that wouldn\u2019t be inside the context"),lc=d(),ol=i("li"),pc=a("An answer with negative length"),hc=d(),qo=i("li"),dc=a("An answer that is too long (we limit the possibilities at "),il=i("code"),cc=a("max_answer_length=30"),uc=a(")"),_p=d(),Hi=i("p"),fc=a("Once we have all the scored possible answers for one example, we just pick the one with the best logit score:"),wp=d(),j(Eo.$$.fragment),gp=d(),Vi=i("p"),mc=a("The final format of the predicted answers is the one that will be expected by the metric we will use. As usual, we can load it with the help of the \u{1F917} Datasets library:"),bp=d(),j(To.$$.fragment),vp=d(),Qi=i("p"),_c=a("This metric expects the predicted answers in the format we saw above (a list of dictionaries with one key for the ID of the example and one key for the predicted text) and the theoretical answers in the format below (a list of dictionaries with one key for the ID of the example and one key for the possible answers):"),xp=d(),j(Ao.$$.fragment),yp=d(),Ri=i("p"),wc=a("We can now check that we get sensible results by looking at the first element of both lists:"),kp=d(),j(Do.$$.fragment),$p=d(),j(Po.$$.fragment),jp=d(),Gi=i("p"),gc=a("Not too bad! Now let\u2019s have a look at the score the metric gives us:"),qp=d(),j(Co.$$.fragment),Ep=d(),j(So.$$.fragment),Tp=d(),bn=i("p"),bc=a("Again, that\u2019s rather good considering that according to "),Oo=i("a"),vc=a("its paper"),xc=a(" DistilBERT fine-tuned on SQuAD obtains 79.1 and 86.9 for those scores on the whole dataset."),Ap=d(),ba.c(),Ui=d(),j(zo.$$.fragment),Dp=d(),Yi=i("p"),yc=a("We can check it works on our predictions:"),Pp=d(),j(Io.$$.fragment),Cp=d(),j(Fo.$$.fragment),Sp=d(),Ji=i("p"),kc=a("Looking good! Now let\u2019s use this to fine-tune our model."),Op=d(),wa=i("h3"),vn=i("a"),rl=i("span"),j(No.$$.fragment),$c=d(),ll=i("span"),jc=a("Fine-tuning the model"),zp=d(),Jt.c(),Xi=d(),Ki=i("p"),qc=a("As usual, we get a warning that some weights are not used (the ones from the pretraining head) and some others are initialized randomly (the ones for the question answering head). You should be used to this by now, but that means this model is not ready to be used just yet and needs fine-tuning \u2014 good thing we\u2019re about to do that!"),Ip=d(),Zi=i("p"),Ec=a("To be able to push our model to the Hub, we\u2019ll need to log in to Hugging Face. If you\u2019re running this code in a notebook, you can do so with the following utility function, which displays a widget where you can enter your login credentials:"),Fp=d(),j(Mo.$$.fragment),Np=d(),er=i("p"),Tc=a("If you aren\u2019t working in a notebook, just type the following line in your terminal:"),Mp=d(),j(Bo.$$.fragment),Bp=d(),Kt.c(),tr=d(),Be=i("p"),Ac=a("By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be in "),pl=i("code"),Dc=a('"sgugger/bert-finetuned-squad"'),Pc=a(". We can override this by passing a "),hl=i("code"),Cc=a("hub_model_id"),Sc=a("; for instance, to push the model to the "),dl=i("code"),Oc=a("huggingface_course"),zc=a(" organization we used "),cl=i("code"),Ic=a('hub_model_id="huggingface_course/bert-finetuned-squad"'),Fc=a(" (which is the model we linked to at the beginning of this section)."),Lp=d(),es.c(),sr=d(),ar=i("p"),Nc=a("Note that while the training happens, each time the model is saved (here, every epoch) it is uploaded to the Hub in the background. This way, you will be able to to resume your training on another machine if necessary. The whole training takes a while (a little over an hour on a Titan RTX), so you can grab a coffee or reread some of the parts of the course that you\u2019ve found more challenging while it proceeds. Also note that as soon as the first epoch is finished, you will see some weights uploaded to the Hub and you can start playing with your model on its page."),Wp=d(),ss.c(),nr=d(),j(Lo.$$.fragment),Hp=d(),or=i("p"),Mc=a("Great! As a comparison, the baseline scores reported in the BERT article for this model are 80.8 and 88.5, so we\u2019re right where we should be."),Vp=d(),re&&re.c(),ir=d(),rr=i("p"),Bc=a("At this stage, you can use the inference widget on the Model Hub to test the model and share it with your friends, family, and favorite pets. You have successfully fine-tuned a model on a question answering task \u2014 congratulations!"),Qp=d(),j(xn.$$.fragment),Rp=d(),le&&le.c(),lr=d(),ga=i("h2"),yn=i("a"),ul=i("span"),j(Wo.$$.fragment),Lc=d(),fl=i("span"),Wc=a("Using the fine-tuned model"),Gp=d(),kn=i("p"),Hc=a("We\u2019ve already shown you how you can use the model we fine-tuned on the Model Hub with the inference widget. To use it locally in a "),ml=i("code"),Vc=a("pipeline"),Qc=a(", you just have to specify the model identifier:"),Up=d(),j(Ho.$$.fragment),Yp=d(),j(Vo.$$.fragment),Jp=d(),pr=i("p"),Rc=a("Great! Our model is working as well as the default one for this pipeline!"),this.h()},l(e){const l=Wm('[data-svelte="svelte-1phssyn"]',document.head);h=r(l,"META",{name:!0,content:!0}),l.forEach(t),g=c(e),q(f.$$.fragment,e),x=c(e),D=r(e,"H1",{class:!0});var Zo=p(D);b=r(Zo,"A",{id:!0,class:!0,href:!0});var hr=p(b);$=r(hr,"SPAN",{});var _l=p($);q(y.$$.fragment,_l),_l.forEach(t),hr.forEach(t),m=c(Zo),O=r(Zo,"SPAN",{});var wl=p(O);k=n(wl,"Question answering"),wl.forEach(t),Zo.forEach(t),v=c(e),N.l(e),z=c(e),A=r(e,"P",{});var Ss=p(A);Q=n(Ss,"Time to look at question answering! This task comes in many flavors, but the one we\u2019ll focus on in this section is called "),B=r(Ss,"EM",{});var dr=p(B);R=n(dr,"extractive"),dr.forEach(t),M=n(Ss," question answering. This involves posing questions about a document and identifying the answers as "),L=r(Ss,"EM",{});var cr=p(L);H=n(cr,"spans of text"),cr.forEach(t),X=n(Ss," in the document itself."),Ss.forEach(t),G=c(e),q(I.$$.fragment,e),U=c(e),K=r(e,"P",{});var $n=p(K);te=n($n,"We will fine-tune a BERT model on the "),Y=r($n,"A",{href:!0,rel:!0});var ur=p(Y);ie=n(ur,"SQuAD dataset"),ur.forEach(t),_e=n($n,", which consists of questions posed by crowdworkers on a set of Wikipedia articles. This will give us a model able to compute predictions like this one:"),$n.forEach(t),Ae=c(e),xe=r(e,"DIV",{class:!0});var fr=p(xe);ye=r(fr,"DIV",{class:!0});var gl=p(ye);gl.forEach(t),fr.forEach(t),We=c(e),V=r(e,"P",{});var ei=p(V);J=n(ei,"This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it and double-check the predictions "),De=r(ei,"A",{href:!0,rel:!0});var _u=p(De);as=n(_u,"here"),_u.forEach(t),nt=n(ei,"."),ei.forEach(t),mt=c(e),q(de.$$.fragment,e),ot=c(e),se=r(e,"H2",{class:!0});var Zp=p(se);we=r(Zp,"A",{id:!0,class:!0,href:!0});var wu=p(we);ce=r(wu,"SPAN",{});var gu=p(ce);q(Pe.$$.fragment,gu),gu.forEach(t),wu.forEach(t),va=c(Zp),He=r(Zp,"SPAN",{});var bu=p(He);xa=n(bu,"Preparing the data"),bu.forEach(t),Zp.forEach(t),Ve=c(e),Ce=r(e,"P",{});var mr=p(Ce);Ms=n(mr,"The dataset that is used the most as an academic benchmark for extractive question answering is "),_t=r(mr,"A",{href:!0,rel:!0});var vu=p(_t);An=n(vu,"SQuAD"),vu.forEach(t),ya=n(mr,", so that\u2019s the one we\u2019ll use here. There is also a harder "),ke=r(mr,"A",{href:!0,rel:!0});var xu=p(ke);ka=n(xu,"SQuAD v2"),xu.forEach(t),oe=n(mr," benchmark, which includes questions that don\u2019t have an answer. As long as your own dataset contains a column for contexts, a column for questions, and a column for answers, you should be able to adapt the steps below."),mr.forEach(t),$a=c(e),$e=r(e,"H3",{class:!0});var eh=p($e);it=r(eh,"A",{id:!0,class:!0,href:!0});var yu=p(it);Bs=r(yu,"SPAN",{});var ku=p(Bs);q(Qe.$$.fragment,ku),ku.forEach(t),yu.forEach(t),Dn=c(eh),Ls=r(eh,"SPAN",{});var $u=p(Ls);Ws=n($u,"The SQuAD dataset"),$u.forEach(t),eh.forEach(t),ja=c(e),rt=r(e,"P",{});var th=p(rt);Hs=n(th,"As usual, we can download and cache the dataset in just one step thanks to "),Vs=r(th,"CODE",{});var ju=p(Vs);Pn=n(ju,"load_dataset()"),ju.forEach(t),Qs=n(th,":"),th.forEach(t),qa=c(e),q(wt.$$.fragment,e),Rs=c(e),Se=r(e,"P",{});var qu=p(Se);Ea=n(qu,"We can then have a look at this object to learn more about the SQuAD dataset:"),qu.forEach(t),je=c(e),q(gt.$$.fragment,e),ns=c(e),q(bt.$$.fragment,e),Ta=c(e),pe=r(e,"P",{});var jn=p(pe);Cn=n(jn,"It looks like we have everything we need with the "),Gs=r(jn,"CODE",{});var Eu=p(Gs);Aa=n(Eu,"context"),Eu.forEach(t),vt=n(jn,", "),os=r(jn,"CODE",{});var Tu=p(os);ge=n(Tu,"question"),Tu.forEach(t),Sn=n(jn,", and "),xt=r(jn,"CODE",{});var Au=p(xt);On=n(Au,"answers"),Au.forEach(t),zn=n(jn," fields, so let\u2019s print those for the first element of our training set:"),jn.forEach(t),is=c(e),q(yt.$$.fragment,e),Da=c(e),q(Re.$$.fragment,e),Pa=c(e),ae=r(e,"P",{});var Le=p(ae);Ca=n(Le,"The "),Ge=r(Le,"CODE",{});var Du=p(Ge);Sa=n(Du,"context"),Du.forEach(t),kt=n(Le," and "),rs=r(Le,"CODE",{});var Pu=p(rs);ls=n(Pu,"question"),Pu.forEach(t),In=n(Le," fields are very straightforward to use. The "),ps=r(Le,"CODE",{});var Cu=p(ps);$t=n(Cu,"answers"),Cu.forEach(t),Oa=n(Le," field is a bit trickier as it comports a dictionary with two fields that are both lists. This is the format that will be expected by the "),be=r(Le,"CODE",{});var Su=p(be);Fn=n(Su,"squad"),Su.forEach(t),Us=n(Le," metric during evaluation; if you are using your own data, you don\u2019t necessarily need to worry about putting the answers in the same format. The "),Ys=r(Le,"CODE",{});var Ou=p(Ys);Nn=n(Ou,"text"),Ou.forEach(t),Js=n(Le," field is rather obvious, and the "),Xs=r(Le,"CODE",{});var zu=p(Xs);Mn=n(zu,"answer_start"),zu.forEach(t),za=n(Le," field contains the starting character index of each answer in the context."),Le.forEach(t),Oe=c(e),ue=r(e,"P",{});var sh=p(ue);Ks=n(sh,"During training, there is only one possible answer. We can double-check this by using the "),Ue=r(sh,"CODE",{});var Iu=p(Ue);Bn=n(Iu,"Dataset.filter()"),Iu.forEach(t),Zs=n(sh," method:"),sh.forEach(t),Ia=c(e),q(lt.$$.fragment,e),jt=c(e),q(qt.$$.fragment,e),ea=c(e),fe=r(e,"P",{});var Fu=p(fe);Et=n(Fu,"For evaluation, however, there are several possible answers for each sample, which may be the same or different:"),Fu.forEach(t),Fa=c(e),q(Ye.$$.fragment,e),Na=c(e),q(Tt.$$.fragment,e),Ma=c(e),he=r(e,"P",{});var Nu=p(he);Ln=n(Nu,"We won\u2019t dive into the evaluation script as it will all be wrapped up by a \u{1F917} Datasets metric for us, but the short version is that some of the questions have several possible answers, and this script will compare a predicted answer to all the acceptable answers and take the best score. If we take a look at the sample at index 2, for instance:"),Nu.forEach(t),hs=c(e),q(At.$$.fragment,e),Ba=c(e),q(Je.$$.fragment,e),La=c(e),ds=r(e,"P",{});var Mu=p(ds);ta=n(Mu,"we can see that the answer can indeed be one of the three possibilities we saw before."),Mu.forEach(t),Wa=c(e),Xe=r(e,"H3",{class:!0});var ah=p(Xe);pt=r(ah,"A",{id:!0,class:!0,href:!0});var Bu=p(pt);qe=r(Bu,"SPAN",{});var Lu=p(qe);q(Dt.$$.fragment,Lu),Lu.forEach(t),Bu.forEach(t),sa=c(ah),aa=r(ah,"SPAN",{});var Wu=p(aa);Wn=n(Wu,"Processing the training data"),Wu.forEach(t),ah.forEach(t),cs=c(e),q(Pt.$$.fragment,e),Ha=c(e),Ct=r(e,"P",{});var Hu=p(Ct);us=n(Hu,"Let\u2019s start with preprocessing the training data. The hard part will be to generate labels for the question\u2019s answer, which will be the start and end positions of the tokens corresponding to the answer inside the context."),Hu.forEach(t),Va=c(e),St=r(e,"P",{});var Vu=p(St);Ot=n(Vu,"But let\u2019s not get ahead of ourselves. First, we need to convert the text in the input into IDs the model can make sense of, using a tokenizer:"),Vu.forEach(t),na=c(e),q(ze.$$.fragment,e),Qa=c(e),me=r(e,"P",{});var qn=p(me);zt=n(qn,"As mentioned previously, we\u2019ll be fine-tuning a BERT model, but you can use any other model type as long as it has a fast tokenizer implemented. You can see all the architectures that come with a fast version in "),ht=r(qn,"A",{href:!0,rel:!0});var Qu=p(ht);Z=n(Qu,"this big table"),Qu.forEach(t),Hn=n(qn,", and to check that the "),It=r(qn,"CODE",{});var Ru=p(It);Vn=n(Ru,"tokenizer"),Ru.forEach(t),Qn=n(qn," object you\u2019re using is indeed backed by \u{1F917} Tokenizers you can look at its "),Ft=r(qn,"CODE",{});var Gu=p(Ft);Rn=n(Gu,"is_fast"),Gu.forEach(t),Gn=n(qn," attribute:"),qn.forEach(t),fs=c(e),q(Nt.$$.fragment,e),Ra=c(e),q(Ke.$$.fragment,e),Ga=c(e),ms=r(e,"P",{});var Uu=p(ms);oa=n(Uu,"We can pass to our tokenizer the question and the context together, and it will properly insert the special tokens to form a sentence like this:"),Uu.forEach(t),Ua=c(e),q(Mt.$$.fragment,e),_s=c(e),ws=r(e,"P",{});var Yu=p(ws);Un=n(Yu,"Let\u2019s double-check:"),Yu.forEach(t),gs=c(e),q(Bt.$$.fragment,e),Ya=c(e),q(dt.$$.fragment,e),Ee=c(e),bs=r(e,"P",{});var Ju=p(bs);ia=n(Ju,"The labels will then be the index of the tokens starting and ending the answer, and the model will be tasked to predicted one start and end logit per token in the input, with the theoretical labels being as follow:"),Ju.forEach(t),Ja=c(e),Ze=r(e,"DIV",{class:!0});var nh=p(Ze);Ie=r(nh,"IMG",{src:!0,alt:!0}),Yn=c(nh),vs=r(nh,"IMG",{src:!0,alt:!0}),nh.forEach(t),u=c(e),F=r(e,"P",{});var _r=p(F);Ka=n(_r,"In this case the context is not too long, but some of the examples in the dataset have very long contexts that will exceed the maximum length we set (which is 384 in this case). As we saw in "),ra=r(_r,"A",{href:!0});var Xu=p(ra);si=n(Xu,"Chapter 6"),Xu.forEach(t),ai=n(_r," when we explored the internals of the "),ct=r(_r,"CODE",{});var Ku=p(ct);ni=n(Ku,"question-answering"),Ku.forEach(t),oi=n(_r," pipeline, we will deal with long contexts by creating several training features from one sample of our dataset, with a sliding window between them."),_r.forEach(t),la=c(e),pa=r(e,"P",{});var Zu=p(pa);ii=n(Zu,"To see how this works using the current example, we can limit the length to 100 and use a sliding window of 50 tokens. As a reminder, we use:"),Zu.forEach(t),Xn=c(e),ee=r(e,"UL",{});var En=p(ee);ha=r(En,"LI",{});var Gc=p(ha);Za=r(Gc,"CODE",{});var ef=p(Za);ri=n(ef,"max_length"),ef.forEach(t),li=n(Gc," to set the maximum length (here 100)"),Gc.forEach(t),pi=c(En),Lt=r(En,"LI",{});var Uc=p(Lt);en=r(Uc,"CODE",{});var tf=p(en);ve=n(tf,'truncation="only_second"'),tf.forEach(t),hi=n(Uc," to truncate the context (which is in the second position) when the question with its context is too long"),Uc.forEach(t),di=c(En),da=r(En,"LI",{});var Yc=p(da);tn=r(Yc,"CODE",{});var sf=p(tn);ci=n(sf,"stride"),sf.forEach(t),xs=n(Yc," to set the number of overlapping tokens between two successive chunks (here 50)"),Yc.forEach(t),ui=c(En),ca=r(En,"LI",{});var Jc=p(ca);Fe=r(Jc,"CODE",{});var af=p(Fe);fi=n(af,"return_overflowing_tokens=True"),af.forEach(t),mi=n(Jc," to let the tokenizer know we want the overflowing tokens"),Jc.forEach(t),En.forEach(t),Kn=c(e),q(ys.$$.fragment,e),Wt=c(e),q(ks.$$.fragment,e),Zn=c(e),Te=r(e,"P",{});var wr=p(Te);_i=n(wr,"As we can see, our example has been in split into four inputs, each of them containing the question and some part of the context. Note that the answer to the question (\u201CBernadette Soubirous\u201D) only appears in the third and last inputs, so by dealing with long contexts in this way we will create some training examples where the answer is not included in the context. For those examples, the labels will be "),sn=r(wr,"CODE",{});var nf=p(sn);wi=n(nf,"start_position = end_position = 0"),nf.forEach(t),gi=n(wr," (so we predict the "),ut=r(wr,"CODE",{});var of=p(ut);an=n(of,"[CLS]"),of.forEach(t),bi=n(wr," token). We will also set those labels in the unfortunate case where the answer has been truncated so that we only have the start (or end) of it. For the examples where the answer is fully in the context, the labels will be the index of the token where the answer starts and the index of the token where the answer ends."),wr.forEach(t),et=c(e),tt=r(e,"P",{});var gr=p(tt);vi=n(gr,"The dataset provides us with the start character of the answer in the context, and by adding the length of the answer, we can find the end character in the context. To map those to token indices, we will need to use the offset mappings we studied in "),ua=r(gr,"A",{href:!0});var rf=p(ua);$s=n(rf,"Chapter 6"),rf.forEach(t),xi=n(gr,". We can have our tokenizer return these by passing along "),nn=r(gr,"CODE",{});var lf=p(nn);yi=n(lf,"return_offsets_mapping=True"),lf.forEach(t),ki=n(gr,":"),gr.forEach(t),ne=c(e),q(js.$$.fragment,e),eo=c(e),q(qs.$$.fragment,e),to=c(e),st=r(e,"P",{});var br=p(st);$i=n(br,"As we can see, we get back the usual input IDs, token type IDs, and attention mask, as well as the offset mapping we required and an extra key, "),on=r(br,"CODE",{});var pf=p(on);Es=n(pf,"overflow_to_sample_mapping"),pf.forEach(t),ji=n(br,". The corresponding value will be of use to us when we tokenize several texts at the same time (which we should do to benefit from the fact that our tokenizer is backed by Rust). Since one sample can give several features, it maps each feature to the example it originated from. Because here we only tokenized one example, we get a list of "),rn=r(br,"CODE",{});var hf=p(rn);qi=n(hf,"0"),hf.forEach(t),kh=n(br,"s:"),br.forEach(t),bl=c(e),q(so.$$.fragment,e),vl=c(e),q(ao.$$.fragment,e),xl=c(e),Ei=r(e,"P",{});var df=p(Ei);$h=n(df,"But if we tokenize more examples, this will become more useful:"),df.forEach(t),yl=c(e),q(no.$$.fragment,e),kl=c(e),q(oo.$$.fragment,e),$l=c(e),Ti=r(e,"P",{});var cf=p(Ti);jh=n(cf,"As we can see, the first three examples (at indices 2, 3, and 4 in the training set) each gave four features and the last example (at index 5 in the training set) gave 7 features."),cf.forEach(t),jl=c(e),Ai=r(e,"P",{});var uf=p(Ai);qh=n(uf,"This information will be useful to map each feature we get to its corresponding label. As mentioned earlier, those labels are:"),uf.forEach(t),ql=c(e),ln=r(e,"UL",{});var oh=p(ln);Di=r(oh,"LI",{});var Xc=p(Di);jr=r(Xc,"CODE",{});var ff=p(jr);Eh=n(ff,"(0, 0)"),ff.forEach(t),Th=n(Xc," if the answer is not in the corresponding span of the context"),Xc.forEach(t),Ah=c(oh),Ts=r(oh,"LI",{});var ti=p(Ts);qr=r(ti,"CODE",{});var mf=p(qr);Dh=n(mf,"(start_position, end_position)"),mf.forEach(t),Ph=n(ti," if the answer is in the corresponding span of the context, with "),Er=r(ti,"CODE",{});var _f=p(Er);Ch=n(_f,"start_position"),_f.forEach(t),Sh=n(ti," being the index of the token (in the input IDs) at the start of the answer and "),Tr=r(ti,"CODE",{});var wf=p(Tr);Oh=n(wf,"end_position"),wf.forEach(t),zh=n(ti," being the index of the token (in the input IDs) where the answer ends"),ti.forEach(t),oh.forEach(t),El=c(e),As=r(e,"P",{});var vr=p(As);Ih=n(vr,"To determine which of these is the case and, if relevant, the positions of the tokens, we first find the indices that start and end the context in the input IDs. We could use the token type IDs to do this, but since those do not necessarily exist for all models (DistilBERT does not require them, for instance), we\u2019ll instead use the "),Ar=r(vr,"CODE",{});var gf=p(Ar);Fh=n(gf,"sequence_ids()"),gf.forEach(t),Nh=n(vr," method of the "),Dr=r(vr,"CODE",{});var bf=p(Dr);Mh=n(bf,"BatchEncoding"),bf.forEach(t),Bh=n(vr," our tokenizer returns."),vr.forEach(t),Tl=c(e),pn=r(e,"P",{});var ih=p(pn);Lh=n(ih,"Once we have those token indices, we look at the corresponding offsets, which are tuples of two integers representing the span of characters inside the original context. We can thus detect if the chunk of the context in this feature starts after the answer or ends before the answer begins (in which case the label is "),Pr=r(ih,"CODE",{});var vf=p(Pr);Wh=n(vf,"(0, 0)"),vf.forEach(t),Hh=n(ih,"). If that\u2019s not the case, we loop to find the first and last token of the answer:"),ih.forEach(t),Al=c(e),q(io.$$.fragment,e),Dl=c(e),q(ro.$$.fragment,e),Pl=c(e),hn=r(e,"P",{});var rh=p(hn);Vh=n(rh,"Let\u2019s take a look at a few results to verify that our approach is correct. For the first feature we find "),Cr=r(rh,"CODE",{});var xf=p(Cr);Qh=n(xf,"(83, 85)"),xf.forEach(t),Rh=n(rh," as labels, so let\u2019s compare the theoretical answer with the decoded span of tokens from 83 to 85 (inclusive):"),rh.forEach(t),Cl=c(e),q(lo.$$.fragment,e),Sl=c(e),q(po.$$.fragment,e),Ol=c(e),dn=r(e,"P",{});var lh=p(dn);Gh=n(lh,"So that\u2019s a match! Now let\u2019s check index 4, where we set the labels to "),Sr=r(lh,"CODE",{});var yf=p(Sr);Uh=n(yf,"(0, 0)"),yf.forEach(t),Yh=n(lh,", which means the answer is not in the context chunk of that feature:"),lh.forEach(t),zl=c(e),q(ho.$$.fragment,e),Il=c(e),q(co.$$.fragment,e),Fl=c(e),Pi=r(e,"P",{});var kf=p(Pi);Jh=n(kf,"Indeed, we don\u2019t see the answer inside the context."),kf.forEach(t),Nl=c(e),q(cn.$$.fragment,e),Ml=c(e),Ci=r(e,"P",{});var $f=p(Ci);Xh=n($f,"Now that we have seen step by step how to preprocess our training data, we can group it in a function we will apply on the whole training dataset. We\u2019ll pad every feature to the maximum length we set, as most of the contexts will be long (and the corresponding samples will be split into several features), so there is no real benefit to applying dynamic padding here:"),$f.forEach(t),Bl=c(e),q(uo.$$.fragment,e),Ll=c(e),Si=r(e,"P",{});var jf=p(Si);Kh=n(jf,"Note that we defined two constants to determine the maximum length used as well as the length of the sliding window, and that we added a tiny bit of cleanup before tokenizing: some of the questions in the SQuAD dataset have extra spaces at the beginning and the end that don\u2019t add anything (and take up space when being tokenized if you use a model like RoBERTa), so we removed those extra spaces."),jf.forEach(t),Wl=c(e),Ds=r(e,"P",{});var xr=p(Ds);Zh=n(xr,"To apply this function to the whole training set, we use the "),Or=r(xr,"CODE",{});var qf=p(Or);ed=n(qf,"Dataset.map()"),qf.forEach(t),td=n(xr," method with the "),zr=r(xr,"CODE",{});var Ef=p(zr);sd=n(Ef,"batched=True"),Ef.forEach(t),ad=n(xr," flag. It\u2019s necessary here as we are changing the length of the dataset (since one example can give several training features):"),xr.forEach(t),Hl=c(e),q(fo.$$.fragment,e),Vl=c(e),q(mo.$$.fragment,e),Ql=c(e),Oi=r(e,"P",{});var Tf=p(Oi);nd=n(Tf,"As we can see, the preprocessing added roughly 1,000 features. Our training set is now ready to be used \u2014 let\u2019s dig into the preprocessing of the validation set!"),Tf.forEach(t),Rl=c(e),fa=r(e,"H3",{class:!0});var ph=p(fa);un=r(ph,"A",{id:!0,class:!0,href:!0});var Af=p(un);Ir=r(Af,"SPAN",{});var Df=p(Ir);q(_o.$$.fragment,Df),Df.forEach(t),Af.forEach(t),od=c(ph),Fr=r(ph,"SPAN",{});var Pf=p(Fr);id=n(Pf,"Processing the validation data"),Pf.forEach(t),ph.forEach(t),Gl=c(e),zi=r(e,"P",{});var Cf=p(zi);rd=n(Cf,"Preprocessing the validation data will be slightly easier as we don\u2019t need to generate labels (unless we want to compute a validation loss, but that number won\u2019t really help us understand how good the model is). The real joy will be to interpret the predictions of the model into spans of the original context. For this, we will just need to store both the offset mappings and some way to match each created feature to the original example it comes from. Since there is an ID column in the original dataset, we\u2019ll use that ID."),Cf.forEach(t),Ul=c(e),Ps=r(e,"P",{});var yr=p(Ps);ld=n(yr,"The only thing we\u2019ll add here is a tiny bit of cleanup of the offset mappings. They will contain offsets for the question and the context, but once we\u2019re in the post-processing stage we won\u2019t have any way to know which part of the input IDs corresponded to the context and which part was the question (the "),Nr=r(yr,"CODE",{});var Sf=p(Nr);pd=n(Sf,"sequence_ids()"),Sf.forEach(t),hd=n(yr," method we used is available for the output of the tokenizer only). So, we\u2019ll set the offsets corresponding to the question to "),Mr=r(yr,"CODE",{});var Of=p(Mr);dd=n(Of,"None"),Of.forEach(t),cd=n(yr,":"),yr.forEach(t),Yl=c(e),q(wo.$$.fragment,e),Jl=c(e),Ii=r(e,"P",{});var zf=p(Ii);ud=n(zf,"We can apply this function on the whole validation dataset like before:"),zf.forEach(t),Xl=c(e),q(go.$$.fragment,e),Kl=c(e),q(bo.$$.fragment,e),Zl=c(e),Fi=r(e,"P",{});var If=p(Fi);fd=n(If,"In this case we\u2019ve only added a couple of hundred samples, so it appears the contexts in the validation dataset are a bit shorter."),If.forEach(t),ep=c(e),Ni=r(e,"P",{});var Ff=p(Ni);md=n(Ff,"Now that we have preprocessed all the data, we can get to the training."),Ff.forEach(t),tp=c(e),Vt.l(e),Mi=c(e),ma=r(e,"H3",{class:!0});var hh=p(ma);fn=r(hh,"A",{id:!0,class:!0,href:!0});var Nf=p(fn);Br=r(Nf,"SPAN",{});var Mf=p(Br);q(vo.$$.fragment,Mf),Mf.forEach(t),Nf.forEach(t),_d=c(hh),Lr=r(hh,"SPAN",{});var Bf=p(Lr);wd=n(Bf,"Post-processing"),Bf.forEach(t),hh.forEach(t),sp=c(e),Rt.l(e),Bi=c(e),mn=r(e,"P",{});var dh=p(mn);gd=n(dh,"The model will output logits for the start and end positions of the answer in the input IDs, as we saw during our exploration of the "),xo=r(dh,"A",{href:!0});var Kc=p(xo);Wr=r(Kc,"CODE",{});var Lf=p(Wr);bd=n(Lf,"question-answering"),Lf.forEach(t),vd=n(Kc," pipeline"),Kc.forEach(t),xd=n(dh,". The post-processing step will be similar to what we did there, so here\u2019s a quick reminder of the actions we took:"),dh.forEach(t),ap=c(e),ft=r(e,"UL",{});var Tn=p(ft);Hr=r(Tn,"LI",{});var Wf=p(Hr);yd=n(Wf,"We masked the start and end logits corresponding to tokens outside of the context."),Wf.forEach(t),kd=c(Tn),Vr=r(Tn,"LI",{});var Hf=p(Vr);$d=n(Hf,"We then converted the start and end logits into probabilities using a softmax."),Hf.forEach(t),jd=c(Tn),yo=r(Tn,"LI",{});var ch=p(yo);qd=n(ch,"We attributed a score to each "),Qr=r(ch,"CODE",{});var Vf=p(Qr);Ed=n(Vf,"(start_token, end_token)"),Vf.forEach(t),Td=n(ch," pair by taking the product of the corresponding two probabilities."),ch.forEach(t),Ad=c(Tn),_a=r(Tn,"LI",{});var kr=p(_a);Dd=n(kr,"We looked for the pair with the maximum score that yielded a valid answer (e.g., a "),Rr=r(kr,"CODE",{});var Qf=p(Rr);Pd=n(Qf,"start_token"),Qf.forEach(t),Cd=n(kr," lower than "),Gr=r(kr,"CODE",{});var Rf=p(Gr);Sd=n(Rf,"end_token"),Rf.forEach(t),Od=n(kr,")."),kr.forEach(t),Tn.forEach(t),np=c(e),Ne=r(e,"P",{});var Os=p(Ne);zd=n(Os,"Here we will change this process slightly because we don\u2019t need to compute actual scores (just the predicted answer). This means we can skip the softmax step. To go faster, we also won\u2019t score all the possible "),Ur=r(Os,"CODE",{});var Gf=p(Ur);Id=n(Gf,"(start_token, end_token)"),Gf.forEach(t),Fd=n(Os," pairs, but only the ones corresponding to the highest "),Yr=r(Os,"CODE",{});var Uf=p(Yr);Nd=n(Uf,"n_best"),Uf.forEach(t),Md=n(Os," logits (with "),Jr=r(Os,"CODE",{});var Yf=p(Jr);Bd=n(Yf,"n_best=20"),Yf.forEach(t),Ld=n(Os,"). Since we will skip the softmax, those scores will be logit scores, and will be obtained by taking the sum of the start and end logits (instead of the product, because of the rule "),op=Hm(Os),ip=n(Os,")."),Os.forEach(t),rp=c(e),_n=r(e,"P",{});var uh=p(_n);Wd=n(uh,"To demonstrate all of this, we will need some kind of predictions. Since we have not trained our model yet, we are going to use the default model for the QA pipeline to generate some predictions on a small part of the validation set. We can use the same processing function as before; because it relies on the global constant "),Xr=r(uh,"CODE",{});var Jf=p(Xr);Hd=n(Jf,"tokenizer"),Jf.forEach(t),Vd=n(uh,", we just have to change that object to the tokenizer of the model we want to use temporarily:"),uh.forEach(t),lp=c(e),q(ko.$$.fragment,e),pp=c(e),Li=r(e,"P",{});var Xf=p(Li);Qd=n(Xf,"Now that the preprocessing is done, we change the tokenizer back to the one we originally picked:"),Xf.forEach(t),hp=c(e),q($o.$$.fragment,e),dp=c(e),wn=r(e,"P",{});var fh=p(wn);Rd=n(fh,"We then remove the columns of our "),Kr=r(fh,"CODE",{});var Kf=p(Kr);Gd=n(Kf,"eval_set"),Kf.forEach(t),Ud=n(fh," that are not expected by the model, build a batch with all of that small validation set, and pass it through the model. If a GPU is available, we use it to go faster:"),fh.forEach(t),cp=c(e),Ut.l(e),Wi=c(e),Me=r(e,"P",{});var zs=p(Me);Yd=n(zs,"Now, we need to find the predicted answer for each example in our "),Zr=r(zs,"CODE",{});var Zf=p(Zr);Jd=n(Zf,"small_eval_set"),Zf.forEach(t),Xd=n(zs,". One example may have been split into several features in "),el=r(zs,"CODE",{});var em=p(el);Kd=n(em,"eval_set"),em.forEach(t),Zd=n(zs,", so the first step is to map each example in "),tl=r(zs,"CODE",{});var tm=p(tl);ec=n(tm,"small_eval_set"),tm.forEach(t),tc=n(zs," to the corresponding features in "),sl=r(zs,"CODE",{});var sm=p(sl);sc=n(sm,"eval_set"),sm.forEach(t),ac=n(zs,":"),zs.forEach(t),up=c(e),q(jo.$$.fragment,e),fp=c(e),gn=r(e,"P",{});var mh=p(gn);nc=n(mh,"With this in hand, we can really get to work by looping through all the examples and, for each example, through all the associated features. As we said before, we\u2019ll look at the logit scores for the "),al=r(mh,"CODE",{});var am=p(al);oc=n(am,"n_best"),am.forEach(t),ic=n(mh," start logits and end logits, excluding positions that give:"),mh.forEach(t),mp=c(e),Cs=r(e,"UL",{});var $r=p(Cs);nl=r($r,"LI",{});var nm=p(nl);rc=n(nm,"An answer that wouldn\u2019t be inside the context"),nm.forEach(t),lc=c($r),ol=r($r,"LI",{});var om=p(ol);pc=n(om,"An answer with negative length"),om.forEach(t),hc=c($r),qo=r($r,"LI",{});var _h=p(qo);dc=n(_h,"An answer that is too long (we limit the possibilities at "),il=r(_h,"CODE",{});var im=p(il);cc=n(im,"max_answer_length=30"),im.forEach(t),uc=n(_h,")"),_h.forEach(t),$r.forEach(t),_p=c(e),Hi=r(e,"P",{});var rm=p(Hi);fc=n(rm,"Once we have all the scored possible answers for one example, we just pick the one with the best logit score:"),rm.forEach(t),wp=c(e),q(Eo.$$.fragment,e),gp=c(e),Vi=r(e,"P",{});var lm=p(Vi);mc=n(lm,"The final format of the predicted answers is the one that will be expected by the metric we will use. As usual, we can load it with the help of the \u{1F917} Datasets library:"),lm.forEach(t),bp=c(e),q(To.$$.fragment,e),vp=c(e),Qi=r(e,"P",{});var pm=p(Qi);_c=n(pm,"This metric expects the predicted answers in the format we saw above (a list of dictionaries with one key for the ID of the example and one key for the predicted text) and the theoretical answers in the format below (a list of dictionaries with one key for the ID of the example and one key for the possible answers):"),pm.forEach(t),xp=c(e),q(Ao.$$.fragment,e),yp=c(e),Ri=r(e,"P",{});var hm=p(Ri);wc=n(hm,"We can now check that we get sensible results by looking at the first element of both lists:"),hm.forEach(t),kp=c(e),q(Do.$$.fragment,e),$p=c(e),q(Po.$$.fragment,e),jp=c(e),Gi=r(e,"P",{});var dm=p(Gi);gc=n(dm,"Not too bad! Now let\u2019s have a look at the score the metric gives us:"),dm.forEach(t),qp=c(e),q(Co.$$.fragment,e),Ep=c(e),q(So.$$.fragment,e),Tp=c(e),bn=r(e,"P",{});var wh=p(bn);bc=n(wh,"Again, that\u2019s rather good considering that according to "),Oo=r(wh,"A",{href:!0,rel:!0});var cm=p(Oo);vc=n(cm,"its paper"),cm.forEach(t),xc=n(wh," DistilBERT fine-tuned on SQuAD obtains 79.1 and 86.9 for those scores on the whole dataset."),wh.forEach(t),Ap=c(e),ba.l(e),Ui=c(e),q(zo.$$.fragment,e),Dp=c(e),Yi=r(e,"P",{});var um=p(Yi);yc=n(um,"We can check it works on our predictions:"),um.forEach(t),Pp=c(e),q(Io.$$.fragment,e),Cp=c(e),q(Fo.$$.fragment,e),Sp=c(e),Ji=r(e,"P",{});var fm=p(Ji);kc=n(fm,"Looking good! Now let\u2019s use this to fine-tune our model."),fm.forEach(t),Op=c(e),wa=r(e,"H3",{class:!0});var gh=p(wa);vn=r(gh,"A",{id:!0,class:!0,href:!0});var mm=p(vn);rl=r(mm,"SPAN",{});var _m=p(rl);q(No.$$.fragment,_m),_m.forEach(t),mm.forEach(t),$c=c(gh),ll=r(gh,"SPAN",{});var wm=p(ll);jc=n(wm,"Fine-tuning the model"),wm.forEach(t),gh.forEach(t),zp=c(e),Jt.l(e),Xi=c(e),Ki=r(e,"P",{});var gm=p(Ki);qc=n(gm,"As usual, we get a warning that some weights are not used (the ones from the pretraining head) and some others are initialized randomly (the ones for the question answering head). You should be used to this by now, but that means this model is not ready to be used just yet and needs fine-tuning \u2014 good thing we\u2019re about to do that!"),gm.forEach(t),Ip=c(e),Zi=r(e,"P",{});var bm=p(Zi);Ec=n(bm,"To be able to push our model to the Hub, we\u2019ll need to log in to Hugging Face. If you\u2019re running this code in a notebook, you can do so with the following utility function, which displays a widget where you can enter your login credentials:"),bm.forEach(t),Fp=c(e),q(Mo.$$.fragment,e),Np=c(e),er=r(e,"P",{});var vm=p(er);Tc=n(vm,"If you aren\u2019t working in a notebook, just type the following line in your terminal:"),vm.forEach(t),Mp=c(e),q(Bo.$$.fragment,e),Bp=c(e),Kt.l(e),tr=c(e),Be=r(e,"P",{});var Is=p(Be);Ac=n(Is,"By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be in "),pl=r(Is,"CODE",{});var xm=p(pl);Dc=n(xm,'"sgugger/bert-finetuned-squad"'),xm.forEach(t),Pc=n(Is,". We can override this by passing a "),hl=r(Is,"CODE",{});var ym=p(hl);Cc=n(ym,"hub_model_id"),ym.forEach(t),Sc=n(Is,"; for instance, to push the model to the "),dl=r(Is,"CODE",{});var km=p(dl);Oc=n(km,"huggingface_course"),km.forEach(t),zc=n(Is," organization we used "),cl=r(Is,"CODE",{});var $m=p(cl);Ic=n($m,'hub_model_id="huggingface_course/bert-finetuned-squad"'),$m.forEach(t),Fc=n(Is," (which is the model we linked to at the beginning of this section)."),Is.forEach(t),Lp=c(e),es.l(e),sr=c(e),ar=r(e,"P",{});var jm=p(ar);Nc=n(jm,"Note that while the training happens, each time the model is saved (here, every epoch) it is uploaded to the Hub in the background. This way, you will be able to to resume your training on another machine if necessary. The whole training takes a while (a little over an hour on a Titan RTX), so you can grab a coffee or reread some of the parts of the course that you\u2019ve found more challenging while it proceeds. Also note that as soon as the first epoch is finished, you will see some weights uploaded to the Hub and you can start playing with your model on its page."),jm.forEach(t),Wp=c(e),ss.l(e),nr=c(e),q(Lo.$$.fragment,e),Hp=c(e),or=r(e,"P",{});var qm=p(or);Mc=n(qm,"Great! As a comparison, the baseline scores reported in the BERT article for this model are 80.8 and 88.5, so we\u2019re right where we should be."),qm.forEach(t),Vp=c(e),re&&re.l(e),ir=c(e),rr=r(e,"P",{});var Em=p(rr);Bc=n(Em,"At this stage, you can use the inference widget on the Model Hub to test the model and share it with your friends, family, and favorite pets. You have successfully fine-tuned a model on a question answering task \u2014 congratulations!"),Em.forEach(t),Qp=c(e),q(xn.$$.fragment,e),Rp=c(e),le&&le.l(e),lr=c(e),ga=r(e,"H2",{class:!0});var bh=p(ga);yn=r(bh,"A",{id:!0,class:!0,href:!0});var Tm=p(yn);ul=r(Tm,"SPAN",{});var Am=p(ul);q(Wo.$$.fragment,Am),Am.forEach(t),Tm.forEach(t),Lc=c(bh),fl=r(bh,"SPAN",{});var Dm=p(fl);Wc=n(Dm,"Using the fine-tuned model"),Dm.forEach(t),bh.forEach(t),Gp=c(e),kn=r(e,"P",{});var vh=p(kn);Hc=n(vh,"We\u2019ve already shown you how you can use the model we fine-tuned on the Model Hub with the inference widget. To use it locally in a "),ml=r(vh,"CODE",{});var Pm=p(ml);Vc=n(Pm,"pipeline"),Pm.forEach(t),Qc=n(vh,", you just have to specify the model identifier:"),vh.forEach(t),Up=c(e),q(Ho.$$.fragment,e),Yp=c(e),q(Vo.$$.fragment,e),Jp=c(e),pr=r(e,"P",{});var Cm=p(pr);Rc=n(Cm,"Great! Our model is working as well as the default one for this pipeline!"),Cm.forEach(t),this.h()},h(){P(h,"name","hf:doc:metadata"),P(h,"content",JSON.stringify(m_)),P(b,"id","question-answering"),P(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(b,"href","#question-answering"),P(D,"class","relative group"),P(Y,"href","https://rajpurkar.github.io/SQuAD-explorer/"),P(Y,"rel","nofollow"),P(ye,"class","max-w-md"),P(xe,"class","w-full flex justify-center"),P(De,"href","https://huggingface.co/huggingface-course/bert-finetuned-squad?context=%F0%9F%A4%97+Transformers+is+backed+by+the+three+most+popular+deep+learning+libraries+%E2%80%94+Jax%2C+PyTorch+and+TensorFlow+%E2%80%94+with+a+seamless+integration+between+them.+It%27s+straightforward+to+train+your+models+with+one+before+loading+them+for+inference+with+the+other.&question=Which+deep+learning+libraries+back+%F0%9F%A4%97+Transformers%3F"),P(De,"rel","nofollow"),P(we,"id","preparing-the-data"),P(we,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(we,"href","#preparing-the-data"),P(se,"class","relative group"),P(_t,"href","https://rajpurkar.github.io/SQuAD-explorer/"),P(_t,"rel","nofollow"),P(ke,"href","https://huggingface.co/datasets/squad_v2"),P(ke,"rel","nofollow"),P(it,"id","the-squad-dataset"),P(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(it,"href","#the-squad-dataset"),P($e,"class","relative group"),P(pt,"id","processing-the-training-data"),P(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(pt,"href","#processing-the-training-data"),P(Xe,"class","relative group"),P(ht,"href","https://huggingface.co/transformers/#supported-frameworks"),P(ht,"rel","nofollow"),Sm(Ie.src,Xa="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/qa_labels.svg")||P(Ie,"src",Xa),P(Ie,"alt","One-hot encoded labels for question answering."),Sm(vs.src,Jn="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/qa_labels-dark.svg")||P(vs,"src",Jn),P(vs,"alt","One-hot encoded labels for question answering."),P(Ze,"class","flex justify-center"),P(ra,"href","/course/chapter6/4"),P(ua,"href","/course/chapter6/4"),P(un,"id","processing-the-validation-data"),P(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(un,"href","#processing-the-validation-data"),P(fa,"class","relative group"),P(fn,"id","postprocessing"),P(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(fn,"href","#postprocessing"),P(ma,"class","relative group"),P(xo,"href","/course/chapter6/4"),op.a=ip,P(Oo,"href","https://arxiv.org/abs/1910.01108v2"),P(Oo,"rel","nofollow"),P(vn,"id","finetuning-the-model"),P(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(vn,"href","#finetuning-the-model"),P(wa,"class","relative group"),P(yn,"id","using-the-finetuned-model"),P(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(yn,"href","#using-the-finetuned-model"),P(ga,"class","relative group")},m(e,l){s(document.head,h),o(e,g,l),E(f,e,l),o(e,x,l),o(e,D,l),s(D,b),s(b,$),E(y,$,null),s(D,m),s(D,O),s(O,k),o(e,v,l),Qo[C].m(e,l),o(e,z,l),o(e,A,l),s(A,Q),s(A,B),s(B,R),s(A,M),s(A,L),s(L,H),s(A,X),o(e,G,l),E(I,e,l),o(e,U,l),o(e,K,l),s(K,te),s(K,Y),s(Y,ie),s(K,_e),o(e,Ae,l),o(e,xe,l),s(xe,ye),o(e,We,l),o(e,V,l),s(V,J),s(V,De),s(De,as),s(V,nt),o(e,mt,l),E(de,e,l),o(e,ot,l),o(e,se,l),s(se,we),s(we,ce),E(Pe,ce,null),s(se,va),s(se,He),s(He,xa),o(e,Ve,l),o(e,Ce,l),s(Ce,Ms),s(Ce,_t),s(_t,An),s(Ce,ya),s(Ce,ke),s(ke,ka),s(Ce,oe),o(e,$a,l),o(e,$e,l),s($e,it),s(it,Bs),E(Qe,Bs,null),s($e,Dn),s($e,Ls),s(Ls,Ws),o(e,ja,l),o(e,rt,l),s(rt,Hs),s(rt,Vs),s(Vs,Pn),s(rt,Qs),o(e,qa,l),E(wt,e,l),o(e,Rs,l),o(e,Se,l),s(Se,Ea),o(e,je,l),E(gt,e,l),o(e,ns,l),E(bt,e,l),o(e,Ta,l),o(e,pe,l),s(pe,Cn),s(pe,Gs),s(Gs,Aa),s(pe,vt),s(pe,os),s(os,ge),s(pe,Sn),s(pe,xt),s(xt,On),s(pe,zn),o(e,is,l),E(yt,e,l),o(e,Da,l),E(Re,e,l),o(e,Pa,l),o(e,ae,l),s(ae,Ca),s(ae,Ge),s(Ge,Sa),s(ae,kt),s(ae,rs),s(rs,ls),s(ae,In),s(ae,ps),s(ps,$t),s(ae,Oa),s(ae,be),s(be,Fn),s(ae,Us),s(ae,Ys),s(Ys,Nn),s(ae,Js),s(ae,Xs),s(Xs,Mn),s(ae,za),o(e,Oe,l),o(e,ue,l),s(ue,Ks),s(ue,Ue),s(Ue,Bn),s(ue,Zs),o(e,Ia,l),E(lt,e,l),o(e,jt,l),E(qt,e,l),o(e,ea,l),o(e,fe,l),s(fe,Et),o(e,Fa,l),E(Ye,e,l),o(e,Na,l),E(Tt,e,l),o(e,Ma,l),o(e,he,l),s(he,Ln),o(e,hs,l),E(At,e,l),o(e,Ba,l),E(Je,e,l),o(e,La,l),o(e,ds,l),s(ds,ta),o(e,Wa,l),o(e,Xe,l),s(Xe,pt),s(pt,qe),E(Dt,qe,null),s(Xe,sa),s(Xe,aa),s(aa,Wn),o(e,cs,l),E(Pt,e,l),o(e,Ha,l),o(e,Ct,l),s(Ct,us),o(e,Va,l),o(e,St,l),s(St,Ot),o(e,na,l),E(ze,e,l),o(e,Qa,l),o(e,me,l),s(me,zt),s(me,ht),s(ht,Z),s(me,Hn),s(me,It),s(It,Vn),s(me,Qn),s(me,Ft),s(Ft,Rn),s(me,Gn),o(e,fs,l),E(Nt,e,l),o(e,Ra,l),E(Ke,e,l),o(e,Ga,l),o(e,ms,l),s(ms,oa),o(e,Ua,l),E(Mt,e,l),o(e,_s,l),o(e,ws,l),s(ws,Un),o(e,gs,l),E(Bt,e,l),o(e,Ya,l),E(dt,e,l),o(e,Ee,l),o(e,bs,l),s(bs,ia),o(e,Ja,l),o(e,Ze,l),s(Ze,Ie),s(Ze,Yn),s(Ze,vs),o(e,u,l),o(e,F,l),s(F,Ka),s(F,ra),s(ra,si),s(F,ai),s(F,ct),s(ct,ni),s(F,oi),o(e,la,l),o(e,pa,l),s(pa,ii),o(e,Xn,l),o(e,ee,l),s(ee,ha),s(ha,Za),s(Za,ri),s(ha,li),s(ee,pi),s(ee,Lt),s(Lt,en),s(en,ve),s(Lt,hi),s(ee,di),s(ee,da),s(da,tn),s(tn,ci),s(da,xs),s(ee,ui),s(ee,ca),s(ca,Fe),s(Fe,fi),s(ca,mi),o(e,Kn,l),E(ys,e,l),o(e,Wt,l),E(ks,e,l),o(e,Zn,l),o(e,Te,l),s(Te,_i),s(Te,sn),s(sn,wi),s(Te,gi),s(Te,ut),s(ut,an),s(Te,bi),o(e,et,l),o(e,tt,l),s(tt,vi),s(tt,ua),s(ua,$s),s(tt,xi),s(tt,nn),s(nn,yi),s(tt,ki),o(e,ne,l),E(js,e,l),o(e,eo,l),E(qs,e,l),o(e,to,l),o(e,st,l),s(st,$i),s(st,on),s(on,Es),s(st,ji),s(st,rn),s(rn,qi),s(st,kh),o(e,bl,l),E(so,e,l),o(e,vl,l),E(ao,e,l),o(e,xl,l),o(e,Ei,l),s(Ei,$h),o(e,yl,l),E(no,e,l),o(e,kl,l),E(oo,e,l),o(e,$l,l),o(e,Ti,l),s(Ti,jh),o(e,jl,l),o(e,Ai,l),s(Ai,qh),o(e,ql,l),o(e,ln,l),s(ln,Di),s(Di,jr),s(jr,Eh),s(Di,Th),s(ln,Ah),s(ln,Ts),s(Ts,qr),s(qr,Dh),s(Ts,Ph),s(Ts,Er),s(Er,Ch),s(Ts,Sh),s(Ts,Tr),s(Tr,Oh),s(Ts,zh),o(e,El,l),o(e,As,l),s(As,Ih),s(As,Ar),s(Ar,Fh),s(As,Nh),s(As,Dr),s(Dr,Mh),s(As,Bh),o(e,Tl,l),o(e,pn,l),s(pn,Lh),s(pn,Pr),s(Pr,Wh),s(pn,Hh),o(e,Al,l),E(io,e,l),o(e,Dl,l),E(ro,e,l),o(e,Pl,l),o(e,hn,l),s(hn,Vh),s(hn,Cr),s(Cr,Qh),s(hn,Rh),o(e,Cl,l),E(lo,e,l),o(e,Sl,l),E(po,e,l),o(e,Ol,l),o(e,dn,l),s(dn,Gh),s(dn,Sr),s(Sr,Uh),s(dn,Yh),o(e,zl,l),E(ho,e,l),o(e,Il,l),E(co,e,l),o(e,Fl,l),o(e,Pi,l),s(Pi,Jh),o(e,Nl,l),E(cn,e,l),o(e,Ml,l),o(e,Ci,l),s(Ci,Xh),o(e,Bl,l),E(uo,e,l),o(e,Ll,l),o(e,Si,l),s(Si,Kh),o(e,Wl,l),o(e,Ds,l),s(Ds,Zh),s(Ds,Or),s(Or,ed),s(Ds,td),s(Ds,zr),s(zr,sd),s(Ds,ad),o(e,Hl,l),E(fo,e,l),o(e,Vl,l),E(mo,e,l),o(e,Ql,l),o(e,Oi,l),s(Oi,nd),o(e,Rl,l),o(e,fa,l),s(fa,un),s(un,Ir),E(_o,Ir,null),s(fa,od),s(fa,Fr),s(Fr,id),o(e,Gl,l),o(e,zi,l),s(zi,rd),o(e,Ul,l),o(e,Ps,l),s(Ps,ld),s(Ps,Nr),s(Nr,pd),s(Ps,hd),s(Ps,Mr),s(Mr,dd),s(Ps,cd),o(e,Yl,l),E(wo,e,l),o(e,Jl,l),o(e,Ii,l),s(Ii,ud),o(e,Xl,l),E(go,e,l),o(e,Kl,l),E(bo,e,l),o(e,Zl,l),o(e,Fi,l),s(Fi,fd),o(e,ep,l),o(e,Ni,l),s(Ni,md),o(e,tp,l),Ro[Ht].m(e,l),o(e,Mi,l),o(e,ma,l),s(ma,fn),s(fn,Br),E(vo,Br,null),s(ma,_d),s(ma,Lr),s(Lr,wd),o(e,sp,l),Go[Qt].m(e,l),o(e,Bi,l),o(e,mn,l),s(mn,gd),s(mn,xo),s(xo,Wr),s(Wr,bd),s(xo,vd),s(mn,xd),o(e,ap,l),o(e,ft,l),s(ft,Hr),s(Hr,yd),s(ft,kd),s(ft,Vr),s(Vr,$d),s(ft,jd),s(ft,yo),s(yo,qd),s(yo,Qr),s(Qr,Ed),s(yo,Td),s(ft,Ad),s(ft,_a),s(_a,Dd),s(_a,Rr),s(Rr,Pd),s(_a,Cd),s(_a,Gr),s(Gr,Sd),s(_a,Od),o(e,np,l),o(e,Ne,l),s(Ne,zd),s(Ne,Ur),s(Ur,Id),s(Ne,Fd),s(Ne,Yr),s(Yr,Nd),s(Ne,Md),s(Ne,Jr),s(Jr,Bd),s(Ne,Ld),op.m(Fm,Ne),s(Ne,ip),o(e,rp,l),o(e,_n,l),s(_n,Wd),s(_n,Xr),s(Xr,Hd),s(_n,Vd),o(e,lp,l),E(ko,e,l),o(e,pp,l),o(e,Li,l),s(Li,Qd),o(e,hp,l),E($o,e,l),o(e,dp,l),o(e,wn,l),s(wn,Rd),s(wn,Kr),s(Kr,Gd),s(wn,Ud),o(e,cp,l),Uo[Gt].m(e,l),o(e,Wi,l),o(e,Me,l),s(Me,Yd),s(Me,Zr),s(Zr,Jd),s(Me,Xd),s(Me,el),s(el,Kd),s(Me,Zd),s(Me,tl),s(tl,ec),s(Me,tc),s(Me,sl),s(sl,sc),s(Me,ac),o(e,up,l),E(jo,e,l),o(e,fp,l),o(e,gn,l),s(gn,nc),s(gn,al),s(al,oc),s(gn,ic),o(e,mp,l),o(e,Cs,l),s(Cs,nl),s(nl,rc),s(Cs,lc),s(Cs,ol),s(ol,pc),s(Cs,hc),s(Cs,qo),s(qo,dc),s(qo,il),s(il,cc),s(qo,uc),o(e,_p,l),o(e,Hi,l),s(Hi,fc),o(e,wp,l),E(Eo,e,l),o(e,gp,l),o(e,Vi,l),s(Vi,mc),o(e,bp,l),E(To,e,l),o(e,vp,l),o(e,Qi,l),s(Qi,_c),o(e,xp,l),E(Ao,e,l),o(e,yp,l),o(e,Ri,l),s(Ri,wc),o(e,kp,l),E(Do,e,l),o(e,$p,l),E(Po,e,l),o(e,jp,l),o(e,Gi,l),s(Gi,gc),o(e,qp,l),E(Co,e,l),o(e,Ep,l),E(So,e,l),o(e,Tp,l),o(e,bn,l),s(bn,bc),s(bn,Oo),s(Oo,vc),s(bn,xc),o(e,Ap,l),ba.m(e,l),o(e,Ui,l),E(zo,e,l),o(e,Dp,l),o(e,Yi,l),s(Yi,yc),o(e,Pp,l),E(Io,e,l),o(e,Cp,l),E(Fo,e,l),o(e,Sp,l),o(e,Ji,l),s(Ji,kc),o(e,Op,l),o(e,wa,l),s(wa,vn),s(vn,rl),E(No,rl,null),s(wa,$c),s(wa,ll),s(ll,jc),o(e,zp,l),Yo[Yt].m(e,l),o(e,Xi,l),o(e,Ki,l),s(Ki,qc),o(e,Ip,l),o(e,Zi,l),s(Zi,Ec),o(e,Fp,l),E(Mo,e,l),o(e,Np,l),o(e,er,l),s(er,Tc),o(e,Mp,l),E(Bo,e,l),o(e,Bp,l),Jo[Xt].m(e,l),o(e,tr,l),o(e,Be,l),s(Be,Ac),s(Be,pl),s(pl,Dc),s(Be,Pc),s(Be,hl),s(hl,Cc),s(Be,Sc),s(Be,dl),s(dl,Oc),s(Be,zc),s(Be,cl),s(cl,Ic),s(Be,Fc),o(e,Lp,l),Xo[Zt].m(e,l),o(e,sr,l),o(e,ar,l),s(ar,Nc),o(e,Wp,l),Ko[ts].m(e,l),o(e,nr,l),E(Lo,e,l),o(e,Hp,l),o(e,or,l),s(or,Mc),o(e,Vp,l),re&&re.m(e,l),o(e,ir,l),o(e,rr,l),s(rr,Bc),o(e,Qp,l),E(xn,e,l),o(e,Rp,l),le&&le.m(e,l),o(e,lr,l),o(e,ga,l),s(ga,yn),s(yn,ul),E(Wo,ul,null),s(ga,Lc),s(ga,fl),s(fl,Wc),o(e,Gp,l),o(e,kn,l),s(kn,Hc),s(kn,ml),s(ml,Vc),s(kn,Qc),o(e,Up,l),E(Ho,e,l),o(e,Yp,l),E(Vo,e,l),o(e,Jp,l),o(e,pr,l),s(pr,Rc),Xp=!0},p(e,[l]){const Zo={};l&1&&(Zo.fw=e[0]),f.$set(Zo);let hr=C;C=eu(e),C!==hr&&(Ns(),w(Qo[hr],1,1,()=>{Qo[hr]=null}),Fs(),N=Qo[C],N||(N=Qo[C]=Zc[C](e),N.c()),_(N,1),N.m(z.parentNode,z));const _l={};l&2&&(_l.$$scope={dirty:l,ctx:e}),de.$set(_l);const wl={};l&2&&(wl.$$scope={dirty:l,ctx:e}),cn.$set(wl);let Ss=Ht;Ht=su(e),Ht!==Ss&&(Ns(),w(Ro[Ss],1,1,()=>{Ro[Ss]=null}),Fs(),Vt=Ro[Ht],Vt||(Vt=Ro[Ht]=tu[Ht](e),Vt.c()),_(Vt,1),Vt.m(Mi.parentNode,Mi));let dr=Qt;Qt=nu(e),Qt!==dr&&(Ns(),w(Go[dr],1,1,()=>{Go[dr]=null}),Fs(),Rt=Go[Qt],Rt||(Rt=Go[Qt]=au[Qt](e),Rt.c()),_(Rt,1),Rt.m(Bi.parentNode,Bi));let cr=Gt;Gt=iu(e),Gt!==cr&&(Ns(),w(Uo[cr],1,1,()=>{Uo[cr]=null}),Fs(),Ut=Uo[Gt],Ut||(Ut=Uo[Gt]=ou[Gt](e),Ut.c()),_(Ut,1),Ut.m(Wi.parentNode,Wi)),Kp!==(Kp=ru(e))&&(ba.d(1),ba=Kp(e),ba&&(ba.c(),ba.m(Ui.parentNode,Ui)));let $n=Yt;Yt=pu(e),Yt!==$n&&(Ns(),w(Yo[$n],1,1,()=>{Yo[$n]=null}),Fs(),Jt=Yo[Yt],Jt||(Jt=Yo[Yt]=lu[Yt](e),Jt.c()),_(Jt,1),Jt.m(Xi.parentNode,Xi));let ur=Xt;Xt=du(e),Xt!==ur&&(Ns(),w(Jo[ur],1,1,()=>{Jo[ur]=null}),Fs(),Kt=Jo[Xt],Kt||(Kt=Jo[Xt]=hu[Xt](e),Kt.c()),_(Kt,1),Kt.m(tr.parentNode,tr));let fr=Zt;Zt=uu(e),Zt!==fr&&(Ns(),w(Xo[fr],1,1,()=>{Xo[fr]=null}),Fs(),es=Xo[Zt],es||(es=Xo[Zt]=cu[Zt](e),es.c()),_(es,1),es.m(sr.parentNode,sr));let gl=ts;ts=mu(e),ts!==gl&&(Ns(),w(Ko[gl],1,1,()=>{Ko[gl]=null}),Fs(),ss=Ko[ts],ss||(ss=Ko[ts]=fu[ts](e),ss.c()),_(ss,1),ss.m(nr.parentNode,nr)),e[0]==="pt"?re?l&1&&_(re,1):(re=Om(),re.c(),_(re,1),re.m(ir.parentNode,ir)):re&&(Ns(),w(re,1,1,()=>{re=null}),Fs());const ei={};l&2&&(ei.$$scope={dirty:l,ctx:e}),xn.$set(ei),e[0]==="pt"?le?l&1&&_(le,1):(le=zm(),le.c(),_(le,1),le.m(lr.parentNode,lr)):le&&(Ns(),w(le,1,1,()=>{le=null}),Fs())},i(e){Xp||(_(f.$$.fragment,e),_(y.$$.fragment,e),_(N),_(I.$$.fragment,e),_(de.$$.fragment,e),_(Pe.$$.fragment,e),_(Qe.$$.fragment,e),_(wt.$$.fragment,e),_(gt.$$.fragment,e),_(bt.$$.fragment,e),_(yt.$$.fragment,e),_(Re.$$.fragment,e),_(lt.$$.fragment,e),_(qt.$$.fragment,e),_(Ye.$$.fragment,e),_(Tt.$$.fragment,e),_(At.$$.fragment,e),_(Je.$$.fragment,e),_(Dt.$$.fragment,e),_(Pt.$$.fragment,e),_(ze.$$.fragment,e),_(Nt.$$.fragment,e),_(Ke.$$.fragment,e),_(Mt.$$.fragment,e),_(Bt.$$.fragment,e),_(dt.$$.fragment,e),_(ys.$$.fragment,e),_(ks.$$.fragment,e),_(js.$$.fragment,e),_(qs.$$.fragment,e),_(so.$$.fragment,e),_(ao.$$.fragment,e),_(no.$$.fragment,e),_(oo.$$.fragment,e),_(io.$$.fragment,e),_(ro.$$.fragment,e),_(lo.$$.fragment,e),_(po.$$.fragment,e),_(ho.$$.fragment,e),_(co.$$.fragment,e),_(cn.$$.fragment,e),_(uo.$$.fragment,e),_(fo.$$.fragment,e),_(mo.$$.fragment,e),_(_o.$$.fragment,e),_(wo.$$.fragment,e),_(go.$$.fragment,e),_(bo.$$.fragment,e),_(Vt),_(vo.$$.fragment,e),_(Rt),_(ko.$$.fragment,e),_($o.$$.fragment,e),_(Ut),_(jo.$$.fragment,e),_(Eo.$$.fragment,e),_(To.$$.fragment,e),_(Ao.$$.fragment,e),_(Do.$$.fragment,e),_(Po.$$.fragment,e),_(Co.$$.fragment,e),_(So.$$.fragment,e),_(zo.$$.fragment,e),_(Io.$$.fragment,e),_(Fo.$$.fragment,e),_(No.$$.fragment,e),_(Jt),_(Mo.$$.fragment,e),_(Bo.$$.fragment,e),_(Kt),_(es),_(ss),_(Lo.$$.fragment,e),_(re),_(xn.$$.fragment,e),_(le),_(Wo.$$.fragment,e),_(Ho.$$.fragment,e),_(Vo.$$.fragment,e),Xp=!0)},o(e){w(f.$$.fragment,e),w(y.$$.fragment,e),w(N),w(I.$$.fragment,e),w(de.$$.fragment,e),w(Pe.$$.fragment,e),w(Qe.$$.fragment,e),w(wt.$$.fragment,e),w(gt.$$.fragment,e),w(bt.$$.fragment,e),w(yt.$$.fragment,e),w(Re.$$.fragment,e),w(lt.$$.fragment,e),w(qt.$$.fragment,e),w(Ye.$$.fragment,e),w(Tt.$$.fragment,e),w(At.$$.fragment,e),w(Je.$$.fragment,e),w(Dt.$$.fragment,e),w(Pt.$$.fragment,e),w(ze.$$.fragment,e),w(Nt.$$.fragment,e),w(Ke.$$.fragment,e),w(Mt.$$.fragment,e),w(Bt.$$.fragment,e),w(dt.$$.fragment,e),w(ys.$$.fragment,e),w(ks.$$.fragment,e),w(js.$$.fragment,e),w(qs.$$.fragment,e),w(so.$$.fragment,e),w(ao.$$.fragment,e),w(no.$$.fragment,e),w(oo.$$.fragment,e),w(io.$$.fragment,e),w(ro.$$.fragment,e),w(lo.$$.fragment,e),w(po.$$.fragment,e),w(ho.$$.fragment,e),w(co.$$.fragment,e),w(cn.$$.fragment,e),w(uo.$$.fragment,e),w(fo.$$.fragment,e),w(mo.$$.fragment,e),w(_o.$$.fragment,e),w(wo.$$.fragment,e),w(go.$$.fragment,e),w(bo.$$.fragment,e),w(Vt),w(vo.$$.fragment,e),w(Rt),w(ko.$$.fragment,e),w($o.$$.fragment,e),w(Ut),w(jo.$$.fragment,e),w(Eo.$$.fragment,e),w(To.$$.fragment,e),w(Ao.$$.fragment,e),w(Do.$$.fragment,e),w(Po.$$.fragment,e),w(Co.$$.fragment,e),w(So.$$.fragment,e),w(zo.$$.fragment,e),w(Io.$$.fragment,e),w(Fo.$$.fragment,e),w(No.$$.fragment,e),w(Jt),w(Mo.$$.fragment,e),w(Bo.$$.fragment,e),w(Kt),w(es),w(ss),w(Lo.$$.fragment,e),w(re),w(xn.$$.fragment,e),w(le),w(Wo.$$.fragment,e),w(Ho.$$.fragment,e),w(Vo.$$.fragment,e),Xp=!1},d(e){t(h),e&&t(g),T(f,e),e&&t(x),e&&t(D),T(y),e&&t(v),Qo[C].d(e),e&&t(z),e&&t(A),e&&t(G),T(I,e),e&&t(U),e&&t(K),e&&t(Ae),e&&t(xe),e&&t(We),e&&t(V),e&&t(mt),T(de,e),e&&t(ot),e&&t(se),T(Pe),e&&t(Ve),e&&t(Ce),e&&t($a),e&&t($e),T(Qe),e&&t(ja),e&&t(rt),e&&t(qa),T(wt,e),e&&t(Rs),e&&t(Se),e&&t(je),T(gt,e),e&&t(ns),T(bt,e),e&&t(Ta),e&&t(pe),e&&t(is),T(yt,e),e&&t(Da),T(Re,e),e&&t(Pa),e&&t(ae),e&&t(Oe),e&&t(ue),e&&t(Ia),T(lt,e),e&&t(jt),T(qt,e),e&&t(ea),e&&t(fe),e&&t(Fa),T(Ye,e),e&&t(Na),T(Tt,e),e&&t(Ma),e&&t(he),e&&t(hs),T(At,e),e&&t(Ba),T(Je,e),e&&t(La),e&&t(ds),e&&t(Wa),e&&t(Xe),T(Dt),e&&t(cs),T(Pt,e),e&&t(Ha),e&&t(Ct),e&&t(Va),e&&t(St),e&&t(na),T(ze,e),e&&t(Qa),e&&t(me),e&&t(fs),T(Nt,e),e&&t(Ra),T(Ke,e),e&&t(Ga),e&&t(ms),e&&t(Ua),T(Mt,e),e&&t(_s),e&&t(ws),e&&t(gs),T(Bt,e),e&&t(Ya),T(dt,e),e&&t(Ee),e&&t(bs),e&&t(Ja),e&&t(Ze),e&&t(u),e&&t(F),e&&t(la),e&&t(pa),e&&t(Xn),e&&t(ee),e&&t(Kn),T(ys,e),e&&t(Wt),T(ks,e),e&&t(Zn),e&&t(Te),e&&t(et),e&&t(tt),e&&t(ne),T(js,e),e&&t(eo),T(qs,e),e&&t(to),e&&t(st),e&&t(bl),T(so,e),e&&t(vl),T(ao,e),e&&t(xl),e&&t(Ei),e&&t(yl),T(no,e),e&&t(kl),T(oo,e),e&&t($l),e&&t(Ti),e&&t(jl),e&&t(Ai),e&&t(ql),e&&t(ln),e&&t(El),e&&t(As),e&&t(Tl),e&&t(pn),e&&t(Al),T(io,e),e&&t(Dl),T(ro,e),e&&t(Pl),e&&t(hn),e&&t(Cl),T(lo,e),e&&t(Sl),T(po,e),e&&t(Ol),e&&t(dn),e&&t(zl),T(ho,e),e&&t(Il),T(co,e),e&&t(Fl),e&&t(Pi),e&&t(Nl),T(cn,e),e&&t(Ml),e&&t(Ci),e&&t(Bl),T(uo,e),e&&t(Ll),e&&t(Si),e&&t(Wl),e&&t(Ds),e&&t(Hl),T(fo,e),e&&t(Vl),T(mo,e),e&&t(Ql),e&&t(Oi),e&&t(Rl),e&&t(fa),T(_o),e&&t(Gl),e&&t(zi),e&&t(Ul),e&&t(Ps),e&&t(Yl),T(wo,e),e&&t(Jl),e&&t(Ii),e&&t(Xl),T(go,e),e&&t(Kl),T(bo,e),e&&t(Zl),e&&t(Fi),e&&t(ep),e&&t(Ni),e&&t(tp),Ro[Ht].d(e),e&&t(Mi),e&&t(ma),T(vo),e&&t(sp),Go[Qt].d(e),e&&t(Bi),e&&t(mn),e&&t(ap),e&&t(ft),e&&t(np),e&&t(Ne),e&&t(rp),e&&t(_n),e&&t(lp),T(ko,e),e&&t(pp),e&&t(Li),e&&t(hp),T($o,e),e&&t(dp),e&&t(wn),e&&t(cp),Uo[Gt].d(e),e&&t(Wi),e&&t(Me),e&&t(up),T(jo,e),e&&t(fp),e&&t(gn),e&&t(mp),e&&t(Cs),e&&t(_p),e&&t(Hi),e&&t(wp),T(Eo,e),e&&t(gp),e&&t(Vi),e&&t(bp),T(To,e),e&&t(vp),e&&t(Qi),e&&t(xp),T(Ao,e),e&&t(yp),e&&t(Ri),e&&t(kp),T(Do,e),e&&t($p),T(Po,e),e&&t(jp),e&&t(Gi),e&&t(qp),T(Co,e),e&&t(Ep),T(So,e),e&&t(Tp),e&&t(bn),e&&t(Ap),ba.d(e),e&&t(Ui),T(zo,e),e&&t(Dp),e&&t(Yi),e&&t(Pp),T(Io,e),e&&t(Cp),T(Fo,e),e&&t(Sp),e&&t(Ji),e&&t(Op),e&&t(wa),T(No),e&&t(zp),Yo[Yt].d(e),e&&t(Xi),e&&t(Ki),e&&t(Ip),e&&t(Zi),e&&t(Fp),T(Mo,e),e&&t(Np),e&&t(er),e&&t(Mp),T(Bo,e),e&&t(Bp),Jo[Xt].d(e),e&&t(tr),e&&t(Be),e&&t(Lp),Xo[Zt].d(e),e&&t(sr),e&&t(ar),e&&t(Wp),Ko[ts].d(e),e&&t(nr),T(Lo,e),e&&t(Hp),e&&t(or),e&&t(Vp),re&&re.d(e),e&&t(ir),e&&t(rr),e&&t(Qp),T(xn,e),e&&t(Rp),le&&le.d(e),e&&t(lr),e&&t(ga),T(Wo),e&&t(Gp),e&&t(kn),e&&t(Up),T(Ho,e),e&&t(Yp),T(Vo,e),e&&t(Jp),e&&t(pr)}}}const m_={local:"question-answering",sections:[{local:"preparing-the-data",sections:[{local:"the-squad-dataset",title:"The SQuAD dataset"},{local:"processing-the-training-data",title:"Processing the training data"},{local:"processing-the-validation-data",title:"Processing the validation data"}],title:"Preparing the data"},{local:"finetuning-the-model-with-the-trainer-api",title:"Fine-tuning the model with the `Trainer` API"},{local:"finetuning-the-model-with-keras",sections:[{local:"postprocessing",title:"Post-processing"},{local:"finetuning-the-model",title:"Fine-tuning the model"}],title:"Fine-tuning the model with Keras"},{local:"a-custom-training-loop",sections:[{local:"preparing-everything-for-training",title:"Preparing everything for training"}],title:"A custom training loop"},{local:"training-loop",title:"Training loop"},{local:"using-the-finetuned-model",title:"Using the fine-tuned model"}],title:"Question answering"};function __(W,h,g){let f="pt";return Vm(()=>{const x=new URLSearchParams(window.location.search);g(0,f=x.get("fw")||"pt")}),[f]}class $_ extends Nm{constructor(h){super();Mm(this,h,__,f_,Bm,{})}}export{$_ as default,m_ as metadata};
