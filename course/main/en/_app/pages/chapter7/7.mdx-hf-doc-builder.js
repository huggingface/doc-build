import{S as Im,i as Fm,s as Nm,e as i,t as a,k as d,w as j,c as r,a as p,h as n,d as t,m as c,x as q,g as o,G as s,y as E,q as _,o as w,B as T,b as P,U as Mm,M as Bm,V as Lm,N as Kc,p as Fs,v as Wm,n as Ns}from"../../chunks/vendor-hf-doc-builder.js";import{T as vh}from"../../chunks/Tip-hf-doc-builder.js";import{Y as xh}from"../../chunks/Youtube-hf-doc-builder.js";import{I as st}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as S}from"../../chunks/CodeBlock-hf-doc-builder.js";import{D as Om}from"../../chunks/DocNotebookDropdown-hf-doc-builder.js";import{F as Hm}from"../../chunks/FrameworkSwitchCourse-hf-doc-builder.js";function Qm(W){let h,g;return h=new Om({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section7_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section7_tf.ipynb"}]}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function Vm(W){let h,g;return h=new Om({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section7_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section7_pt.ipynb"}]}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function Rm(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N;return{c(){h=i("p"),g=a("\u{1F4A1} Encoder-only models like BERT tend to be great at extracting answers to factoid questions like \u201CWho invented the Transformer architecture?\u201D but fare poorly when given open-ended questions like \u201CWhy is the sky blue?\u201D In these more challenging cases, encoder-decoder models like T5 and BART are typically used to synthesize the information in a way that\u2019s quite similar to "),f=i("a"),x=a("text summarization"),D=a(". If you\u2019re interested in this type of "),b=i("em"),$=a("generative"),y=a(" question answering, we recommend checking out our "),m=i("a"),O=a("demo"),k=a(" based on the "),v=i("a"),C=a("ELI5 dataset"),N=a("."),this.h()},l(z){h=r(z,"P",{});var A=p(h);g=n(A,"\u{1F4A1} Encoder-only models like BERT tend to be great at extracting answers to factoid questions like \u201CWho invented the Transformer architecture?\u201D but fare poorly when given open-ended questions like \u201CWhy is the sky blue?\u201D In these more challenging cases, encoder-decoder models like T5 and BART are typically used to synthesize the information in a way that\u2019s quite similar to "),f=r(A,"A",{href:!0});var V=p(f);x=n(V,"text summarization"),V.forEach(t),D=n(A,". If you\u2019re interested in this type of "),b=r(A,"EM",{});var B=p(b);$=n(B,"generative"),B.forEach(t),y=n(A," question answering, we recommend checking out our "),m=r(A,"A",{href:!0,rel:!0});var R=p(m);O=n(R,"demo"),R.forEach(t),k=n(A," based on the "),v=r(A,"A",{href:!0,rel:!0});var M=p(v);C=n(M,"ELI5 dataset"),M.forEach(t),N=n(A,"."),A.forEach(t),this.h()},h(){P(f,"href","/course/chapter7/5"),P(m,"href","https://yjernite.github.io/lfqa.html"),P(m,"rel","nofollow"),P(v,"href","https://huggingface.co/datasets/eli5"),P(v,"rel","nofollow")},m(z,A){o(z,h,A),s(h,g),s(h,f),s(f,x),s(h,D),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),s(h,v),s(v,C),s(h,N)},d(z){z&&t(h)}}}function Gm(W){let h,g,f,x,D,b,$,y,m,O,k;return{c(){h=i("p"),g=a("\u270F\uFE0F "),f=i("strong"),x=a("Your turn!"),D=a(" When using the XLNet architecture, padding is applied on the left and the question and context are switched. Adapt all the code we just saw to the XLNet architecture (and add "),b=i("code"),$=a("padding=True"),y=a("). Be aware that the "),m=i("code"),O=a("[CLS]"),k=a(" token may not be at the 0 position with padding applied.")},l(v){h=r(v,"P",{});var C=p(h);g=n(C,"\u270F\uFE0F "),f=r(C,"STRONG",{});var N=p(f);x=n(N,"Your turn!"),N.forEach(t),D=n(C," When using the XLNet architecture, padding is applied on the left and the question and context are switched. Adapt all the code we just saw to the XLNet architecture (and add "),b=r(C,"CODE",{});var z=p(b);$=n(z,"padding=True"),z.forEach(t),y=n(C,"). Be aware that the "),m=r(C,"CODE",{});var A=p(m);O=n(A,"[CLS]"),A.forEach(t),k=n(C," token may not be at the 0 position with padding applied."),C.forEach(t)},m(v,C){o(v,h,C),s(h,g),s(h,f),s(f,x),s(h,D),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k)},d(v){v&&t(h)}}}function Um(W){let h,g,f,x,D,b,$,y,m,O,k;return x=new st({}),{c(){h=i("h2"),g=i("a"),f=i("span"),j(x.$$.fragment),D=d(),b=i("span"),$=a("Fine-tuning the model with Keras"),y=d(),m=i("p"),O=a("The training code for this example will look a lot like the code in the previous sections, but computing the metrics will be uniquely challenging. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The hard part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),this.h()},l(v){h=r(v,"H2",{class:!0});var C=p(h);g=r(C,"A",{id:!0,class:!0,href:!0});var N=p(g);f=r(N,"SPAN",{});var z=p(f);q(x.$$.fragment,z),z.forEach(t),N.forEach(t),D=c(C),b=r(C,"SPAN",{});var A=p(b);$=n(A,"Fine-tuning the model with Keras"),A.forEach(t),C.forEach(t),y=c(v),m=r(v,"P",{});var V=p(m);O=n(V,"The training code for this example will look a lot like the code in the previous sections, but computing the metrics will be uniquely challenging. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The hard part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),V.forEach(t),this.h()},h(){P(g,"id","finetuning-the-model-with-keras"),P(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(g,"href","#finetuning-the-model-with-keras"),P(h,"class","relative group")},m(v,C){o(v,h,C),s(h,g),s(g,f),E(x,f,null),s(h,D),s(h,b),s(b,$),o(v,y,C),o(v,m,C),s(m,O),k=!0},i(v){k||(_(x.$$.fragment,v),k=!0)},o(v){w(x.$$.fragment,v),k=!1},d(v){v&&t(h),T(x),v&&t(y),v&&t(m)}}}function Ym(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N,z,A,V;return x=new st({}),{c(){h=i("h2"),g=i("a"),f=i("span"),j(x.$$.fragment),D=d(),b=i("span"),$=a("Fine-tuning the model with the "),y=i("code"),m=a("Trainer"),O=a(" API"),k=d(),v=i("p"),C=a("The training code for this example will look a lot like the code in the previous sections \u2014 the hardest thing will be to write the "),N=i("code"),z=a("compute_metrics()"),A=a(" function. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The difficult part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),this.h()},l(B){h=r(B,"H2",{class:!0});var R=p(h);g=r(R,"A",{id:!0,class:!0,href:!0});var M=p(g);f=r(M,"SPAN",{});var L=p(f);q(x.$$.fragment,L),L.forEach(t),M.forEach(t),D=c(R),b=r(R,"SPAN",{});var H=p(b);$=n(H,"Fine-tuning the model with the "),y=r(H,"CODE",{});var X=p(y);m=n(X,"Trainer"),X.forEach(t),O=n(H," API"),H.forEach(t),R.forEach(t),k=c(B),v=r(B,"P",{});var G=p(v);C=n(G,"The training code for this example will look a lot like the code in the previous sections \u2014 the hardest thing will be to write the "),N=r(G,"CODE",{});var I=p(N);z=n(I,"compute_metrics()"),I.forEach(t),A=n(G," function. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The difficult part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),G.forEach(t),this.h()},h(){P(g,"id","finetuning-the-model-with-the-trainer-api"),P(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(g,"href","#finetuning-the-model-with-the-trainer-api"),P(h,"class","relative group")},m(B,R){o(B,h,R),s(h,g),s(g,f),E(x,f,null),s(h,D),s(h,b),s(b,$),s(b,y),s(y,m),s(b,O),o(B,k,R),o(B,v,R),s(v,C),s(v,N),s(N,z),s(v,A),V=!0},i(B){V||(_(x.$$.fragment,B),V=!0)},o(B){w(x.$$.fragment,B),V=!1},d(B){B&&t(h),T(x),B&&t(k),B&&t(v)}}}function Jm(W){let h,g;return h=new xh({props:{id:"VN67ZpN33Ss"}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function Xm(W){let h,g;return h=new xh({props:{id:"BNy08iIWVJM"}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function Km(W){let h,g,f,x,D,b,$;return h=new S({props:{code:`import tensorflow as tf
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
end_logits = outputs.end_logits.numpy()`}}),{c(){j(h.$$.fragment),g=d(),f=i("p"),x=a("For ease of experimentation, let\u2019s convert these outputs to NumPy arrays:"),D=d(),j(b.$$.fragment)},l(y){q(h.$$.fragment,y),g=c(y),f=r(y,"P",{});var m=p(f);x=n(m,"For ease of experimentation, let\u2019s convert these outputs to NumPy arrays:"),m.forEach(t),D=c(y),q(b.$$.fragment,y)},m(y,m){E(h,y,m),o(y,g,m),o(y,f,m),s(f,x),o(y,D,m),E(b,y,m),$=!0},i(y){$||(_(h.$$.fragment,y),_(b.$$.fragment,y),$=!0)},o(y){w(h.$$.fragment,y),w(b.$$.fragment,y),$=!1},d(y){T(h,y),y&&t(g),y&&t(f),y&&t(D),T(b,y)}}}function Zm(W){let h,g,f,x,D,b,$,y,m,O;return h=new S({props:{code:`import torch
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
end_logits = outputs.end_logits.cpu().numpy()`}}),{c(){j(h.$$.fragment),g=d(),f=i("p"),x=a("Since the "),D=i("code"),b=a("Trainer"),$=a(" will give us predictions as NumPy arrays, we grab the start and end logits and convert them to that format:"),y=d(),j(m.$$.fragment)},l(k){q(h.$$.fragment,k),g=c(k),f=r(k,"P",{});var v=p(f);x=n(v,"Since the "),D=r(v,"CODE",{});var C=p(D);b=n(C,"Trainer"),C.forEach(t),$=n(v," will give us predictions as NumPy arrays, we grab the start and end logits and convert them to that format:"),v.forEach(t),y=c(k),q(m.$$.fragment,k)},m(k,v){E(h,k,v),o(k,g,v),o(k,f,v),s(f,x),s(f,D),s(D,b),s(f,$),o(k,y,v),E(m,k,v),O=!0},i(k){O||(_(h.$$.fragment,k),_(m.$$.fragment,k),O=!0)},o(k){w(h.$$.fragment,k),w(m.$$.fragment,k),O=!1},d(k){T(h,k),k&&t(g),k&&t(f),k&&t(y),T(m,k)}}}function e_(W){let h,g,f,x,D;return{c(){h=i("p"),g=a("Now let\u2019s put everything we just did in a "),f=i("code"),x=a("compute_metrics()"),D=a(" function that we will use after training our model. We will need to pass a bit more than just the output logits, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts:")},l(b){h=r(b,"P",{});var $=p(h);g=n($,"Now let\u2019s put everything we just did in a "),f=r($,"CODE",{});var y=p(f);x=n(y,"compute_metrics()"),y.forEach(t),D=n($," function that we will use after training our model. We will need to pass a bit more than just the output logits, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts:"),$.forEach(t)},m(b,$){o(b,h,$),s(h,g),s(h,f),s(f,x),s(h,D)},d(b){b&&t(h)}}}function t_(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N,z,A,V,B,R,M;return{c(){h=i("p"),g=a("Now let\u2019s put everything we just did in a "),f=i("code"),x=a("compute_metrics()"),D=a(" function that we will use in the "),b=i("code"),$=a("Trainer"),y=a(". Normally, that "),m=i("code"),O=a("compute_metrics()"),k=a(" function only receives a tuple "),v=i("code"),C=a("eval_preds"),N=a(" with logits and labels. Here we will need a bit more, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts, so we won\u2019t be able to use this function to get regular evaluation results during training. We will only use it at the end of training to check the results."),z=d(),A=i("p"),V=a("The "),B=i("code"),R=a("compute_metrics()"),M=a(" function groups the same steps as before; we just add a small check in case we don\u2019t come up with any valid answers (in which case we predict an empty string).")},l(L){h=r(L,"P",{});var H=p(h);g=n(H,"Now let\u2019s put everything we just did in a "),f=r(H,"CODE",{});var X=p(f);x=n(X,"compute_metrics()"),X.forEach(t),D=n(H," function that we will use in the "),b=r(H,"CODE",{});var G=p(b);$=n(G,"Trainer"),G.forEach(t),y=n(H,". Normally, that "),m=r(H,"CODE",{});var I=p(m);O=n(I,"compute_metrics()"),I.forEach(t),k=n(H," function only receives a tuple "),v=r(H,"CODE",{});var U=p(v);C=n(U,"eval_preds"),U.forEach(t),N=n(H," with logits and labels. Here we will need a bit more, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts, so we won\u2019t be able to use this function to get regular evaluation results during training. We will only use it at the end of training to check the results."),H.forEach(t),z=c(L),A=r(L,"P",{});var K=p(A);V=n(K,"The "),B=r(K,"CODE",{});var te=p(B);R=n(te,"compute_metrics()"),te.forEach(t),M=n(K," function groups the same steps as before; we just add a small check in case we don\u2019t come up with any valid answers (in which case we predict an empty string)."),K.forEach(t)},m(L,H){o(L,h,H),s(h,g),s(h,f),s(f,x),s(h,D),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),s(h,v),s(v,C),s(h,N),o(L,z,H),o(L,A,H),s(A,V),s(A,B),s(B,R),s(A,M)},d(L){L&&t(h),L&&t(z),L&&t(A)}}}function s_(W){let h,g,f,x,D,b,$,y;return $=new S({props:{code:"model = TFAutoModelForQuestionAnswering.from_pretrained(model_checkpoint)",highlighted:"model = TFAutoModelForQuestionAnswering.from_pretrained(model_checkpoint)"}}),{c(){h=i("p"),g=a("We are now ready to train our model. Let\u2019s create it first, using the "),f=i("code"),x=a("TFAutoModelForQuestionAnswering"),D=a(" class like before:"),b=d(),j($.$$.fragment)},l(m){h=r(m,"P",{});var O=p(h);g=n(O,"We are now ready to train our model. Let\u2019s create it first, using the "),f=r(O,"CODE",{});var k=p(f);x=n(k,"TFAutoModelForQuestionAnswering"),k.forEach(t),D=n(O," class like before:"),O.forEach(t),b=c(m),q($.$$.fragment,m)},m(m,O){o(m,h,O),s(h,g),s(h,f),s(f,x),s(h,D),o(m,b,O),E($,m,O),y=!0},i(m){y||(_($.$$.fragment,m),y=!0)},o(m){w($.$$.fragment,m),y=!1},d(m){m&&t(h),m&&t(b),T($,m)}}}function a_(W){let h,g,f,x,D,b,$,y;return $=new S({props:{code:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)",highlighted:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)"}}),{c(){h=i("p"),g=a("We are now ready to train our model. Let\u2019s create it first, using the "),f=i("code"),x=a("AutoModelForQuestionAnswering"),D=a(" class like before:"),b=d(),j($.$$.fragment)},l(m){h=r(m,"P",{});var O=p(h);g=n(O,"We are now ready to train our model. Let\u2019s create it first, using the "),f=r(O,"CODE",{});var k=p(f);x=n(k,"AutoModelForQuestionAnswering"),k.forEach(t),D=n(O," class like before:"),O.forEach(t),b=c(m),q($.$$.fragment,m)},m(m,O){o(m,h,O),s(h,g),s(h,f),s(f,x),s(h,D),o(m,b,O),E($,m,O),y=!0},i(m){y||(_($.$$.fragment,m),y=!0)},o(m){w($.$$.fragment,m),y=!1},d(m){m&&t(h),m&&t(b),T($,m)}}}function n_(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N,z,A,V,B,R,M,L,H,X,G;return x=new S({props:{code:`from transformers import DefaultDataCollator

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
tf.keras.mixed_precision.set_global_policy(<span class="hljs-string">&quot;mixed_float16&quot;</span>)`}}),{c(){h=i("p"),g=a("Now that\u2019s done, we can create our TF Datasets. We can use the simple default data collator this time:"),f=d(),j(x.$$.fragment),D=d(),b=i("p"),$=a("And now we create the datasets as usual."),y=d(),j(m.$$.fragment),O=d(),k=i("p"),v=a("Next, we set up our training hyperparameters and compile our model:"),C=d(),j(N.$$.fragment),z=d(),A=i("p"),V=a("Finally, we\u2019re ready to train with "),B=i("code"),R=a("model.fit()"),M=a(". We use a "),L=i("code"),H=a("PushToHubCallback"),X=a(" to upload the model to the Hub after each epoch.")},l(I){h=r(I,"P",{});var U=p(h);g=n(U,"Now that\u2019s done, we can create our TF Datasets. We can use the simple default data collator this time:"),U.forEach(t),f=c(I),q(x.$$.fragment,I),D=c(I),b=r(I,"P",{});var K=p(b);$=n(K,"And now we create the datasets as usual."),K.forEach(t),y=c(I),q(m.$$.fragment,I),O=c(I),k=r(I,"P",{});var te=p(k);v=n(te,"Next, we set up our training hyperparameters and compile our model:"),te.forEach(t),C=c(I),q(N.$$.fragment,I),z=c(I),A=r(I,"P",{});var Y=p(A);V=n(Y,"Finally, we\u2019re ready to train with "),B=r(Y,"CODE",{});var re=p(B);R=n(re,"model.fit()"),re.forEach(t),M=n(Y,". We use a "),L=r(Y,"CODE",{});var we=p(L);H=n(we,"PushToHubCallback"),we.forEach(t),X=n(Y," to upload the model to the Hub after each epoch."),Y.forEach(t)},m(I,U){o(I,h,U),s(h,g),o(I,f,U),E(x,I,U),o(I,D,U),o(I,b,U),s(b,$),o(I,y,U),E(m,I,U),o(I,O,U),o(I,k,U),s(k,v),o(I,C,U),E(N,I,U),o(I,z,U),o(I,A,U),s(A,V),s(A,B),s(B,R),s(A,M),s(A,L),s(L,H),s(A,X),G=!0},i(I){G||(_(x.$$.fragment,I),_(m.$$.fragment,I),_(N.$$.fragment,I),G=!0)},o(I){w(x.$$.fragment,I),w(m.$$.fragment,I),w(N.$$.fragment,I),G=!1},d(I){I&&t(h),I&&t(f),T(x,I),I&&t(D),I&&t(b),I&&t(y),T(m,I),I&&t(O),I&&t(k),I&&t(C),T(N,I),I&&t(z),I&&t(A)}}}function o_(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N,z,A,V,B,R,M,L,H,X,G,I,U,K,te,Y,re,we,Ae,ne,at,Le;return te=new S({props:{code:`from transformers import TrainingArguments

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
)`}}),{c(){h=i("p"),g=a("Once this is done, we can define our "),f=i("code"),x=a("TrainingArguments"),D=a(". As we said when we defined our function to compute the metric, we won\u2019t be able to have a regular evaluation loop because of the signature of the "),b=i("code"),$=a("compute_metrics()"),y=a(" function. We could write our own subclass of "),m=i("code"),O=a("Trainer"),k=a(" to do this (an approach you can find in the "),v=i("a"),C=a("question answering example script"),N=a("), but that\u2019s a bit too long for this section. Instead, we will only evaluate the model at the end of training here and show you how to do a regular evaluation in \u201CA custom training loop\u201D below."),z=d(),A=i("p"),V=a("This is really where the "),B=i("code"),R=a("Trainer"),M=a(" API shows its limits and the \u{1F917} Accelerate library shines: customizing the class to a specific use case can be painful, but tweaking a fully exposed training loop is easy."),L=d(),H=i("p"),X=a("Let\u2019s take a look at our "),G=i("code"),I=a("TrainingArguments"),U=a(":"),K=d(),j(te.$$.fragment),Y=d(),re=i("p"),we=a("We\u2019ve seen most of these before: we set some hyperparameters (like the learning rate, the number of epochs we train for, and some weight decay) and indicate that we want to save the model at the end of every epoch, skip evaluation, and upload our results to the Model Hub. We also enable mixed-precision training with "),Ae=i("code"),ne=a("fp16=True"),at=a(", as it can speed up the training nicely on a recent GPU."),this.h()},l(Q){h=r(Q,"P",{});var J=p(h);g=n(J,"Once this is done, we can define our "),f=r(J,"CODE",{});var De=p(f);x=n(De,"TrainingArguments"),De.forEach(t),D=n(J,". As we said when we defined our function to compute the metric, we won\u2019t be able to have a regular evaluation loop because of the signature of the "),b=r(J,"CODE",{});var ns=p(b);$=n(ns,"compute_metrics()"),ns.forEach(t),y=n(J," function. We could write our own subclass of "),m=r(J,"CODE",{});var nt=p(m);O=n(nt,"Trainer"),nt.forEach(t),k=n(J," to do this (an approach you can find in the "),v=r(J,"A",{href:!0,rel:!0});var mt=p(v);C=n(mt,"question answering example script"),mt.forEach(t),N=n(J,"), but that\u2019s a bit too long for this section. Instead, we will only evaluate the model at the end of training here and show you how to do a regular evaluation in \u201CA custom training loop\u201D below."),J.forEach(t),z=c(Q),A=r(Q,"P",{});var ce=p(A);V=n(ce,"This is really where the "),B=r(ce,"CODE",{});var ot=p(B);R=n(ot,"Trainer"),ot.forEach(t),M=n(ce," API shows its limits and the \u{1F917} Accelerate library shines: customizing the class to a specific use case can be painful, but tweaking a fully exposed training loop is easy."),ce.forEach(t),L=c(Q),H=r(Q,"P",{});var se=p(H);X=n(se,"Let\u2019s take a look at our "),G=r(se,"CODE",{});var ge=p(G);I=n(ge,"TrainingArguments"),ge.forEach(t),U=n(se,":"),se.forEach(t),K=c(Q),q(te.$$.fragment,Q),Y=c(Q),re=r(Q,"P",{});var ue=p(re);we=n(ue,"We\u2019ve seen most of these before: we set some hyperparameters (like the learning rate, the number of epochs we train for, and some weight decay) and indicate that we want to save the model at the end of every epoch, skip evaluation, and upload our results to the Model Hub. We also enable mixed-precision training with "),Ae=r(ue,"CODE",{});var Pe=p(Ae);ne=n(Pe,"fp16=True"),Pe.forEach(t),at=n(ue,", as it can speed up the training nicely on a recent GPU."),ue.forEach(t),this.h()},h(){P(v,"href","https://github.com/huggingface/transformers/blob/master/examples/pytorch/question-answering/trainer_qa.py"),P(v,"rel","nofollow")},m(Q,J){o(Q,h,J),s(h,g),s(h,f),s(f,x),s(h,D),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),s(h,v),s(v,C),s(h,N),o(Q,z,J),o(Q,A,J),s(A,V),s(A,B),s(B,R),s(A,M),o(Q,L,J),o(Q,H,J),s(H,X),s(H,G),s(G,I),s(H,U),o(Q,K,J),E(te,Q,J),o(Q,Y,J),o(Q,re,J),s(re,we),s(re,Ae),s(Ae,ne),s(re,at),Le=!0},i(Q){Le||(_(te.$$.fragment,Q),Le=!0)},o(Q){w(te.$$.fragment,Q),Le=!1},d(Q){Q&&t(h),Q&&t(z),Q&&t(A),Q&&t(L),Q&&t(H),Q&&t(K),T(te,Q),Q&&t(Y),Q&&t(re)}}}function i_(W){let h,g;return h=new S({props:{code:`from transformers.keras_callbacks import PushToHubCallback

callback = PushToHubCallback(output_dir="bert-finetuned-squad", tokenizer=tokenizer)

# We're going to do validation afterwards, so no validation mid-training
model.fit(tf_train_dataset, callbacks=[callback], epochs=num_train_epochs)`,highlighted:`<span class="hljs-keyword">from</span> transformers.keras_callbacks <span class="hljs-keyword">import</span> PushToHubCallback

callback = PushToHubCallback(output_dir=<span class="hljs-string">&quot;bert-finetuned-squad&quot;</span>, tokenizer=tokenizer)

<span class="hljs-comment"># We&#x27;re going to do validation afterwards, so no validation mid-training</span>
model.fit(tf_train_dataset, callbacks=[callback], epochs=num_train_epochs)`}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function r_(W){let h,g,f,x,D,b,$,y,m,O;return h=new vh({props:{$$slots:{default:[l_]},$$scope:{ctx:W}}}),m=new S({props:{code:`from transformers import Trainer

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
trainer.train()`}}),{c(){j(h.$$.fragment),g=d(),f=i("p"),x=a("Finally, we just pass everything to the "),D=i("code"),b=a("Trainer"),$=a(" class and launch the training:"),y=d(),j(m.$$.fragment)},l(k){q(h.$$.fragment,k),g=c(k),f=r(k,"P",{});var v=p(f);x=n(v,"Finally, we just pass everything to the "),D=r(v,"CODE",{});var C=p(D);b=n(C,"Trainer"),C.forEach(t),$=n(v," class and launch the training:"),v.forEach(t),y=c(k),q(m.$$.fragment,k)},m(k,v){E(h,k,v),o(k,g,v),o(k,f,v),s(f,x),s(f,D),s(D,b),s(f,$),o(k,y,v),E(m,k,v),O=!0},i(k){O||(_(h.$$.fragment,k),_(m.$$.fragment,k),O=!0)},o(k){w(h.$$.fragment,k),w(m.$$.fragment,k),O=!1},d(k){T(h,k),k&&t(g),k&&t(f),k&&t(y),T(m,k)}}}function l_(W){let h,g,f,x,D;return{c(){h=i("p"),g=a("\u{1F4A1} If the output directory you are using exists, it needs to be a local clone of the repository you want to push to (so set a new name if you get an error when defining your "),f=i("code"),x=a("Trainer"),D=a(").")},l(b){h=r(b,"P",{});var $=p(h);g=n($,"\u{1F4A1} If the output directory you are using exists, it needs to be a local clone of the repository you want to push to (so set a new name if you get an error when defining your "),f=r($,"CODE",{});var y=p(f);x=n(y,"Trainer"),y.forEach(t),D=n($,")."),$.forEach(t)},m(b,$){o(b,h,$),s(h,g),s(h,f),s(f,x),s(h,D)},d(b){b&&t(h)}}}function p_(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N;return C=new S({props:{code:`predictions = model.predict(tf_eval_dataset)
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
)`}}),{c(){h=i("p"),g=a("Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=i("code"),x=a("predict()"),D=a(" method of our "),b=i("code"),$=a("model"),y=a(" will take care of getting predictions, and since we did all the hard work of defining a "),m=i("code"),O=a("compute_metrics()"),k=a(" function earlier, we can get our results in a single line:"),v=d(),j(C.$$.fragment)},l(z){h=r(z,"P",{});var A=p(h);g=n(A,"Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=r(A,"CODE",{});var V=p(f);x=n(V,"predict()"),V.forEach(t),D=n(A," method of our "),b=r(A,"CODE",{});var B=p(b);$=n(B,"model"),B.forEach(t),y=n(A," will take care of getting predictions, and since we did all the hard work of defining a "),m=r(A,"CODE",{});var R=p(m);O=n(R,"compute_metrics()"),R.forEach(t),k=n(A," function earlier, we can get our results in a single line:"),A.forEach(t),v=c(z),q(C.$$.fragment,z)},m(z,A){o(z,h,A),s(h,g),s(h,f),s(f,x),s(h,D),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),o(z,v,A),E(C,z,A),N=!0},i(z){N||(_(C.$$.fragment,z),N=!0)},o(z){w(C.$$.fragment,z),N=!1},d(z){z&&t(h),z&&t(v),T(C,z)}}}function h_(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N;return C=new S({props:{code:`predictions, _, _ = trainer.predict(validation_dataset)
start_logits, end_logits = predictions
compute_metrics(start_logits, end_logits, validation_dataset, raw_datasets["validation"])`,highlighted:`predictions, _, _ = trainer.predict(validation_dataset)
start_logits, end_logits = predictions
compute_metrics(start_logits, end_logits, validation_dataset, raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>])`}}),{c(){h=i("p"),g=a("Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=i("code"),x=a("predict()"),D=a(" method of the "),b=i("code"),$=a("Trainer"),y=a(" will return a tuple where the first elements will be the predictions of the model (here a pair with the start and end logits). We send this to our "),m=i("code"),O=a("compute_metrics()"),k=a(" function:"),v=d(),j(C.$$.fragment)},l(z){h=r(z,"P",{});var A=p(h);g=n(A,"Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=r(A,"CODE",{});var V=p(f);x=n(V,"predict()"),V.forEach(t),D=n(A," method of the "),b=r(A,"CODE",{});var B=p(b);$=n(B,"Trainer"),B.forEach(t),y=n(A," will return a tuple where the first elements will be the predictions of the model (here a pair with the start and end logits). We send this to our "),m=r(A,"CODE",{});var R=p(m);O=n(R,"compute_metrics()"),R.forEach(t),k=n(A," function:"),A.forEach(t),v=c(z),q(C.$$.fragment,z)},m(z,A){o(z,h,A),s(h,g),s(h,f),s(f,x),s(h,D),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),o(z,v,A),E(C,z,A),N=!0},i(z){N||(_(C.$$.fragment,z),N=!0)},o(z){w(C.$$.fragment,z),N=!1},d(z){z&&t(h),z&&t(v),T(C,z)}}}function Cm(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N,z,A,V,B,R;return $=new S({props:{code:'trainer.push_to_hub(commit_message="Training complete")',highlighted:'trainer.push_to_hub(commit_message=<span class="hljs-string">&quot;Training complete&quot;</span>)'}}),v=new S({props:{code:"'https://huggingface.co/sgugger/bert-finetuned-squad/commit/9dcee1fbc25946a6ed4bb32efb1bd71d5fa90b68'",highlighted:'<span class="hljs-string">&#x27;https://huggingface.co/sgugger/bert-finetuned-squad/commit/9dcee1fbc25946a6ed4bb32efb1bd71d5fa90b68&#x27;</span>'}}),{c(){h=i("p"),g=a("Finally, we use the "),f=i("code"),x=a("push_to_hub()"),D=a(" method to make sure we upload the latest version of the model:"),b=d(),j($.$$.fragment),y=d(),m=i("p"),O=a("This returns the URL of the commit it just did, if you want to inspect it:"),k=d(),j(v.$$.fragment),C=d(),N=i("p"),z=a("The "),A=i("code"),V=a("Trainer"),B=a(" also drafts a model card with all the evaluation results and uploads it.")},l(M){h=r(M,"P",{});var L=p(h);g=n(L,"Finally, we use the "),f=r(L,"CODE",{});var H=p(f);x=n(H,"push_to_hub()"),H.forEach(t),D=n(L," method to make sure we upload the latest version of the model:"),L.forEach(t),b=c(M),q($.$$.fragment,M),y=c(M),m=r(M,"P",{});var X=p(m);O=n(X,"This returns the URL of the commit it just did, if you want to inspect it:"),X.forEach(t),k=c(M),q(v.$$.fragment,M),C=c(M),N=r(M,"P",{});var G=p(N);z=n(G,"The "),A=r(G,"CODE",{});var I=p(A);V=n(I,"Trainer"),I.forEach(t),B=n(G," also drafts a model card with all the evaluation results and uploads it."),G.forEach(t)},m(M,L){o(M,h,L),s(h,g),s(h,f),s(f,x),s(h,D),o(M,b,L),E($,M,L),o(M,y,L),o(M,m,L),s(m,O),o(M,k,L),E(v,M,L),o(M,C,L),o(M,N,L),s(N,z),s(N,A),s(A,V),s(N,B),R=!0},i(M){R||(_($.$$.fragment,M),_(v.$$.fragment,M),R=!0)},o(M){w($.$$.fragment,M),w(v.$$.fragment,M),R=!1},d(M){M&&t(h),M&&t(b),T($,M),M&&t(y),M&&t(m),M&&t(k),T(v,M),M&&t(C),M&&t(N)}}}function d_(W){let h,g,f,x,D;return{c(){h=i("p"),g=a("\u270F\uFE0F "),f=i("strong"),x=a("Your turn!"),D=a(" Try another model architecture to see if it performs better on this task!")},l(b){h=r(b,"P",{});var $=p(h);g=n($,"\u270F\uFE0F "),f=r($,"STRONG",{});var y=p(f);x=n(y,"Your turn!"),y.forEach(t),D=n($," Try another model architecture to see if it performs better on this task!"),$.forEach(t)},m(b,$){o(b,h,$),s(h,g),s(h,f),s(f,x),s(h,D)},d(b){b&&t(h)}}}function Sm(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N,z,A,V,B,R,M,L,H,X,G,I,U,K,te,Y,re,we,Ae,ne,at,Le,Q,J,De,ns,nt,mt,ce,ot,se,ge,ue,Pe,va,We,xa,He,Ce,Ms,_t,Dn,ya,ye,ka,ie,$a,ke,it,Bs,Qe,Pn,Ls,Ws,ja,rt,Hs,Qs,Cn,Vs,qa,wt,Rs,Se,Ea,$e,gt,os,bt,Ta,he,Sn,Gs,Aa,vt,is,be,On,xt,zn,In,rs,yt,Da,Ve,Pa,ae,Ca,Re,Sa,kt,ls,ps,Fn,hs,$t,Oa,ve,Nn,Us,Ys,Mn,Js,Xs,Bn,za,Oe,fe,Ks,Ge,Ln,Zs,Ia,lt,jt,qt,ea,me,Et,Fa,Ue,Na,Tt,Ma,de,Wn,ds,At,Ba,Ye,La,cs,ta,Wa,Je,pt,je,Dt,sa,aa,Hn,us,Pt,Ha,Ct,fs,Qa,St,Ot,na,ze,Va,_e,zt,ht,Z,Qn,It,Vn,Rn,Ft,Gn,Un,ms,Nt,Ra,Xe,Ga,_s,oa,Ua,Mt,ws,gs,Yn,bs,Bt,Ya,dt,qe,vs,ia,Ja,Ke,Ee,Xa,Jn,Lt,Xn;return $=new st({}),G=new st({}),se=new S({props:{code:`from torch.utils.data import DataLoader
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
)`}}),We=new S({props:{code:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)",highlighted:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)"}}),ye=new S({props:{code:`from torch.optim import AdamW

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
)`}}),Re=new S({props:{code:`from huggingface_hub import Repository, get_full_repo_name

model_name = "bert-finetuned-squad-accelerate"
repo_name = get_full_repo_name(model_name)
repo_name`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository, get_full_repo_name

model_name = <span class="hljs-string">&quot;bert-finetuned-squad-accelerate&quot;</span>
repo_name = get_full_repo_name(model_name)
repo_name`}}),kt=new S({props:{code:"'sgugger/bert-finetuned-squad-accelerate'",highlighted:'<span class="hljs-string">&#x27;sgugger/bert-finetuned-squad-accelerate&#x27;</span>'}}),$t=new S({props:{code:`output_dir = "bert-finetuned-squad-accelerate"
repo = Repository(output_dir, clone_from=repo_name)`,highlighted:`output_dir = <span class="hljs-string">&quot;bert-finetuned-squad-accelerate&quot;</span>
repo = Repository(output_dir, clone_from=repo_name)`}}),Ge=new st({}),Ot=new S({props:{code:`from tqdm.auto import tqdm
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
unwrapped_model.save_pretrained(output_dir, save_function=accelerator.save)`}}),{c(){h=i("p"),g=a("If you want to dive a bit more deeply into the training loop, we will now show you how to do the same thing using \u{1F917}  Accelerate."),f=d(),x=i("h2"),D=i("a"),b=i("span"),j($.$$.fragment),y=d(),m=i("span"),O=a("A custom training loop"),k=d(),v=i("p"),C=a("Let\u2019s now have a look at the full training loop, so you can easily customize the parts you need. It will look a lot like the training loop in "),N=i("a"),z=a("Chapter 3"),A=a(", with the exception of the evaluation loop. We will be able to evaluate the model regularly since we\u2019re not constrained by the "),V=i("code"),B=a("Trainer"),R=a(" class anymore."),M=d(),L=i("h3"),H=i("a"),X=i("span"),j(G.$$.fragment),I=d(),U=i("span"),K=a("Preparing everything for training"),te=d(),Y=i("p"),re=a("First we need to build the "),we=i("code"),Ae=a("DataLoader"),ne=a("s from our datasets. We set the format of those datasets to "),at=i("code"),Le=a('"torch"'),Q=a(", and remove the columns in the validation set that are not used by the model. Then, we can use the "),J=i("code"),De=a("default_data_collator"),ns=a(" provided by Transformers as a "),nt=i("code"),mt=a("collate_fn"),ce=a(" and shuffle the training set, but not the validation set:"),ot=d(),j(se.$$.fragment),ge=d(),ue=i("p"),Pe=a("Next we reinstantiate our model, to make sure we\u2019re not continuing the fine-tuning from before but starting from the BERT pretrained model again:"),va=d(),j(We.$$.fragment),xa=d(),He=i("p"),Ce=a("Then we will need an optimizer. As usual we use the classic "),Ms=i("code"),_t=a("AdamW"),Dn=a(", which is like Adam, but with a fix in the way weight decay is applied:"),ya=d(),j(ye.$$.fragment),ka=d(),ie=i("p"),$a=a("Once we have all those objects, we can send them to the "),ke=i("code"),it=a("accelerator.prepare()"),Bs=a(" method. Remember that if you want to train on TPUs in a Colab notebook, you will need to move all of this code into a training function, and that shouldn\u2019t execute any cell that instantiates an "),Qe=i("code"),Pn=a("Accelerator"),Ls=a(". We can force mixed-precision training by passing "),Ws=i("code"),ja=a("fp16=True"),rt=a(" to the "),Hs=i("code"),Qs=a("Accelerator"),Cn=a(" (or, if you are executing the code as a script, just make sure to fill in the \u{1F917} Accelerate "),Vs=i("code"),qa=a("config"),wt=a(" appropriately)."),Rs=d(),j(Se.$$.fragment),Ea=d(),$e=i("p"),gt=a("As you should know from the previous sections, we can only use the "),os=i("code"),bt=a("train_dataloader"),Ta=a(" length to compute the number of training steps after it has gone through the "),he=i("code"),Sn=a("accelerator.prepare()"),Gs=a(" method. We use the same linear schedule as in the previous sections:"),Aa=d(),j(vt.$$.fragment),is=d(),be=i("p"),On=a("To push our model to the Hub, we will need to create a "),xt=i("code"),zn=a("Repository"),In=a(" object in a working folder. First log in to the Hugging Face Hub, if you\u2019re not logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),rs=i("code"),yt=a("repo_name"),Da=a(" with your own choice; it just needs to contain your username, which is what the function "),Ve=i("code"),Pa=a("get_full_repo_name()"),ae=a(" does):"),Ca=d(),j(Re.$$.fragment),Sa=d(),j(kt.$$.fragment),ls=d(),ps=i("p"),Fn=a("Then we can clone that repository in a local folder. If it already exists, this local folder should be a clone of the repository we are working with:"),hs=d(),j($t.$$.fragment),Oa=d(),ve=i("p"),Nn=a("We can now upload anything we save in "),Us=i("code"),Ys=a("output_dir"),Mn=a(" by calling the "),Js=i("code"),Xs=a("repo.push_to_hub()"),Bn=a(" method. This will help us upload the intermediate models at the end of each epoch."),za=d(),Oe=i("h2"),fe=i("a"),Ks=i("span"),j(Ge.$$.fragment),Ln=d(),Zs=i("span"),Ia=a("Training loop"),lt=d(),jt=i("p"),qt=a("We are now ready to write the full training loop. After defining a progress bar to follow how training goes, the loop has three parts:"),ea=d(),me=i("ul"),Et=i("li"),Fa=a("The training in itself, which is the classic iteration over the "),Ue=i("code"),Na=a("train_dataloader"),Tt=a(", forward pass through the model, then backward pass and optimizer step."),Ma=d(),de=i("li"),Wn=a("The evaluation, in which we gather all the values for "),ds=i("code"),At=a("start_logits"),Ba=a(" and "),Ye=i("code"),La=a("end_logits"),cs=a(" before converting them to NumPy arrays. Once the evaluation loop is finished, we concatenate all the results. Note that we need to truncate because the "),ta=i("code"),Wa=a("Accelerator"),Je=a(" may have added a few samples at the end to ensure we have the same number of examples in each process."),pt=d(),je=i("li"),Dt=a("Saving and uploading, where we first save the model and the tokenizer, then call "),sa=i("code"),aa=a("repo.push_to_hub()"),Hn=a(". As we did before, we use the argument "),us=i("code"),Pt=a("blocking=False"),Ha=a(" to tell the \u{1F917} Hub library to push in an asynchronous process. This way, training continues normally and this (long) instruction is executed in the background."),Ct=d(),fs=i("p"),Qa=a("Here\u2019s the complete code for the training loop:"),St=d(),j(Ot.$$.fragment),na=d(),ze=i("p"),Va=a("In case this is the first time you\u2019re seeing a model saved with \u{1F917} Accelerate, let\u2019s take a moment to inspect the three lines of code that go with it:"),_e=d(),j(zt.$$.fragment),ht=d(),Z=i("p"),Qn=a("The first line is self-explanatory: it tells all the processes to wait until everyone is at that stage before continuing. This is to make sure we have the same model in every process before saving. Then we grab the "),It=i("code"),Vn=a("unwrapped_model"),Rn=a(", which is the base model we defined. The "),Ft=i("code"),Gn=a("accelerator.prepare()"),Un=a(" method changes the model to work in distributed training, so it won\u2019t have the "),ms=i("code"),Nt=a("save_pretrained()"),Ra=a(" method anymore; the "),Xe=i("code"),Ga=a("accelerator.unwrap_model()"),_s=a(" method undoes that step. Lastly, we call "),oa=i("code"),Ua=a("save_pretrained()"),Mt=a(" but tell that method to use "),ws=i("code"),gs=a("accelerator.save()"),Yn=a(" instead of "),bs=i("code"),Bt=a("torch.save()"),Ya=a("."),dt=d(),qe=i("p"),vs=a("Once this is done, you should have a model that produces results pretty similar to the one trained with the "),ia=i("code"),Ja=a("Trainer"),Ke=a(". You can check the model we trained using this code at "),Ee=i("a"),Xa=i("em"),Jn=a("huggingface-course/bert-finetuned-squad-accelerate"),Lt=a(". And if you want to test out any tweaks to the training loop, you can directly implement them by editing the code shown above!"),this.h()},l(u){h=r(u,"P",{});var F=p(h);g=n(F,"If you want to dive a bit more deeply into the training loop, we will now show you how to do the same thing using \u{1F917}  Accelerate."),F.forEach(t),f=c(u),x=r(u,"H2",{class:!0});var Ka=p(x);D=r(Ka,"A",{id:!0,class:!0,href:!0});var ra=p(D);b=r(ra,"SPAN",{});var ai=p(b);q($.$$.fragment,ai),ai.forEach(t),ra.forEach(t),y=c(Ka),m=r(Ka,"SPAN",{});var ni=p(m);O=n(ni,"A custom training loop"),ni.forEach(t),Ka.forEach(t),k=c(u),v=r(u,"P",{});var ct=p(v);C=n(ct,"Let\u2019s now have a look at the full training loop, so you can easily customize the parts you need. It will look a lot like the training loop in "),N=r(ct,"A",{href:!0});var oi=p(N);z=n(oi,"Chapter 3"),oi.forEach(t),A=n(ct,", with the exception of the evaluation loop. We will be able to evaluate the model regularly since we\u2019re not constrained by the "),V=r(ct,"CODE",{});var ii=p(V);B=n(ii,"Trainer"),ii.forEach(t),R=n(ct," class anymore."),ct.forEach(t),M=c(u),L=r(u,"H3",{class:!0});var la=p(L);H=r(la,"A",{id:!0,class:!0,href:!0});var pa=p(H);X=r(pa,"SPAN",{});var ri=p(X);q(G.$$.fragment,ri),ri.forEach(t),pa.forEach(t),I=c(la),U=r(la,"SPAN",{});var Kn=p(U);K=n(Kn,"Preparing everything for training"),Kn.forEach(t),la.forEach(t),te=c(u),Y=r(u,"P",{});var ee=p(Y);re=n(ee,"First we need to build the "),we=r(ee,"CODE",{});var ha=p(we);Ae=n(ha,"DataLoader"),ha.forEach(t),ne=n(ee,"s from our datasets. We set the format of those datasets to "),at=r(ee,"CODE",{});var Za=p(at);Le=n(Za,'"torch"'),Za.forEach(t),Q=n(ee,", and remove the columns in the validation set that are not used by the model. Then, we can use the "),J=r(ee,"CODE",{});var li=p(J);De=n(li,"default_data_collator"),li.forEach(t),ns=n(ee," provided by Transformers as a "),nt=r(ee,"CODE",{});var pi=p(nt);mt=n(pi,"collate_fn"),pi.forEach(t),ce=n(ee," and shuffle the training set, but not the validation set:"),ee.forEach(t),ot=c(u),q(se.$$.fragment,u),ge=c(u),ue=r(u,"P",{});var hi=p(ue);Pe=n(hi,"Next we reinstantiate our model, to make sure we\u2019re not continuing the fine-tuning from before but starting from the BERT pretrained model again:"),hi.forEach(t),va=c(u),q(We.$$.fragment,u),xa=c(u),He=r(u,"P",{});var Wt=p(He);Ce=n(Wt,"Then we will need an optimizer. As usual we use the classic "),Ms=r(Wt,"CODE",{});var en=p(Ms);_t=n(en,"AdamW"),en.forEach(t),Dn=n(Wt,", which is like Adam, but with a fix in the way weight decay is applied:"),Wt.forEach(t),ya=c(u),q(ye.$$.fragment,u),ka=c(u),ie=r(u,"P",{});var xe=p(ie);$a=n(xe,"Once we have all those objects, we can send them to the "),ke=r(xe,"CODE",{});var di=p(ke);it=n(di,"accelerator.prepare()"),di.forEach(t),Bs=n(xe," method. Remember that if you want to train on TPUs in a Colab notebook, you will need to move all of this code into a training function, and that shouldn\u2019t execute any cell that instantiates an "),Qe=r(xe,"CODE",{});var ci=p(Qe);Pn=n(ci,"Accelerator"),ci.forEach(t),Ls=n(xe,". We can force mixed-precision training by passing "),Ws=r(xe,"CODE",{});var da=p(Ws);ja=n(da,"fp16=True"),da.forEach(t),rt=n(xe," to the "),Hs=r(xe,"CODE",{});var tn=p(Hs);Qs=n(tn,"Accelerator"),tn.forEach(t),Cn=n(xe," (or, if you are executing the code as a script, just make sure to fill in the \u{1F917} Accelerate "),Vs=r(xe,"CODE",{});var ui=p(Vs);qa=n(ui,"config"),ui.forEach(t),wt=n(xe," appropriately)."),xe.forEach(t),Rs=c(u),q(Se.$$.fragment,u),Ea=c(u),$e=r(u,"P",{});var xs=p($e);gt=n(xs,"As you should know from the previous sections, we can only use the "),os=r(xs,"CODE",{});var fi=p(os);bt=n(fi,"train_dataloader"),fi.forEach(t),Ta=n(xs," length to compute the number of training steps after it has gone through the "),he=r(xs,"CODE",{});var ca=p(he);Sn=n(ca,"accelerator.prepare()"),ca.forEach(t),Gs=n(xs," method. We use the same linear schedule as in the previous sections:"),xs.forEach(t),Aa=c(u),q(vt.$$.fragment,u),is=c(u),be=r(u,"P",{});var Ie=p(be);On=n(Ie,"To push our model to the Hub, we will need to create a "),xt=r(Ie,"CODE",{});var mi=p(xt);zn=n(mi,"Repository"),mi.forEach(t),In=n(Ie," object in a working folder. First log in to the Hugging Face Hub, if you\u2019re not logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),rs=r(Ie,"CODE",{});var _i=p(rs);yt=n(_i,"repo_name"),_i.forEach(t),Da=n(Ie," with your own choice; it just needs to contain your username, which is what the function "),Ve=r(Ie,"CODE",{});var Zn=p(Ve);Pa=n(Zn,"get_full_repo_name()"),Zn.forEach(t),ae=n(Ie," does):"),Ie.forEach(t),Ca=c(u),q(Re.$$.fragment,u),Sa=c(u),q(kt.$$.fragment,u),ls=c(u),ps=r(u,"P",{});var ys=p(ps);Fn=n(ys,"Then we can clone that repository in a local folder. If it already exists, this local folder should be a clone of the repository we are working with:"),ys.forEach(t),hs=c(u),q($t.$$.fragment,u),Oa=c(u),ve=r(u,"P",{});var Ht=p(ve);Nn=n(Ht,"We can now upload anything we save in "),Us=r(Ht,"CODE",{});var ks=p(Us);Ys=n(ks,"output_dir"),ks.forEach(t),Mn=n(Ht," by calling the "),Js=r(Ht,"CODE",{});var eo=p(Js);Xs=n(eo,"repo.push_to_hub()"),eo.forEach(t),Bn=n(Ht," method. This will help us upload the intermediate models at the end of each epoch."),Ht.forEach(t),za=c(u),Oe=r(u,"H2",{class:!0});var Te=p(Oe);fe=r(Te,"A",{id:!0,class:!0,href:!0});var wi=p(fe);Ks=r(wi,"SPAN",{});var sn=p(Ks);q(Ge.$$.fragment,sn),sn.forEach(t),wi.forEach(t),Ln=c(Te),Zs=r(Te,"SPAN",{});var gi=p(Zs);Ia=n(gi,"Training loop"),gi.forEach(t),Te.forEach(t),lt=c(u),jt=r(u,"P",{});var bi=p(jt);qt=n(bi,"We are now ready to write the full training loop. After defining a progress bar to follow how training goes, the loop has three parts:"),bi.forEach(t),ea=c(u),me=r(u,"UL",{});var ut=p(me);Et=r(ut,"LI",{});var an=p(Et);Fa=n(an,"The training in itself, which is the classic iteration over the "),Ue=r(an,"CODE",{});var vi=p(Ue);Na=n(vi,"train_dataloader"),vi.forEach(t),Tt=n(an,", forward pass through the model, then backward pass and optimizer step."),an.forEach(t),Ma=c(ut),de=r(ut,"LI",{});var Ze=p(de);Wn=n(Ze,"The evaluation, in which we gather all the values for "),ds=r(Ze,"CODE",{});var et=p(ds);At=n(et,"start_logits"),et.forEach(t),Ba=n(Ze," and "),Ye=r(Ze,"CODE",{});var xi=p(Ye);La=n(xi,"end_logits"),xi.forEach(t),cs=n(Ze," before converting them to NumPy arrays. Once the evaluation loop is finished, we concatenate all the results. Note that we need to truncate because the "),ta=r(Ze,"CODE",{});var ua=p(ta);Wa=n(ua,"Accelerator"),ua.forEach(t),Je=n(Ze," may have added a few samples at the end to ensure we have the same number of examples in each process."),Ze.forEach(t),pt=c(ut),je=r(ut,"LI",{});var $s=p(je);Dt=n($s,"Saving and uploading, where we first save the model and the tokenizer, then call "),sa=r($s,"CODE",{});var yi=p(sa);aa=n(yi,"repo.push_to_hub()"),yi.forEach(t),Hn=n($s,". As we did before, we use the argument "),us=r($s,"CODE",{});var nn=p(us);Pt=n(nn,"blocking=False"),nn.forEach(t),Ha=n($s," to tell the \u{1F917} Hub library to push in an asynchronous process. This way, training continues normally and this (long) instruction is executed in the background."),$s.forEach(t),ut.forEach(t),Ct=c(u),fs=r(u,"P",{});var ki=p(fs);Qa=n(ki,"Here\u2019s the complete code for the training loop:"),ki.forEach(t),St=c(u),q(Ot.$$.fragment,u),na=c(u),ze=r(u,"P",{});var $i=p(ze);Va=n($i,"In case this is the first time you\u2019re seeing a model saved with \u{1F917} Accelerate, let\u2019s take a moment to inspect the three lines of code that go with it:"),$i.forEach(t),_e=c(u),q(zt.$$.fragment,u),ht=c(u),Z=r(u,"P",{});var oe=p(Z);Qn=n(oe,"The first line is self-explanatory: it tells all the processes to wait until everyone is at that stage before continuing. This is to make sure we have the same model in every process before saving. Then we grab the "),It=r(oe,"CODE",{});var js=p(It);Vn=n(js,"unwrapped_model"),js.forEach(t),Rn=n(oe,", which is the base model we defined. The "),Ft=r(oe,"CODE",{});var to=p(Ft);Gn=n(to,"accelerator.prepare()"),to.forEach(t),Un=n(oe," method changes the model to work in distributed training, so it won\u2019t have the "),ms=r(oe,"CODE",{});var qs=p(ms);Nt=n(qs,"save_pretrained()"),qs.forEach(t),Ra=n(oe," method anymore; the "),Xe=r(oe,"CODE",{});var so=p(Xe);Ga=n(so,"accelerator.unwrap_model()"),so.forEach(t),_s=n(oe," method undoes that step. Lastly, we call "),oa=r(oe,"CODE",{});var tt=p(oa);Ua=n(tt,"save_pretrained()"),tt.forEach(t),Mt=n(oe," but tell that method to use "),ws=r(oe,"CODE",{});var ji=p(ws);gs=n(ji,"accelerator.save()"),ji.forEach(t),Yn=n(oe," instead of "),bs=r(oe,"CODE",{});var on=p(bs);Bt=n(on,"torch.save()"),on.forEach(t),Ya=n(oe,"."),oe.forEach(t),dt=c(u),qe=r(u,"P",{});var Es=p(qe);vs=n(Es,"Once this is done, you should have a model that produces results pretty similar to the one trained with the "),ia=r(Es,"CODE",{});var qi=p(ia);Ja=n(qi,"Trainer"),qi.forEach(t),Ke=n(Es,". You can check the model we trained using this code at "),Ee=r(Es,"A",{href:!0,rel:!0});var rn=p(Ee);Xa=r(rn,"EM",{});var Ei=p(Xa);Jn=n(Ei,"huggingface-course/bert-finetuned-squad-accelerate"),Ei.forEach(t),rn.forEach(t),Lt=n(Es,". And if you want to test out any tweaks to the training loop, you can directly implement them by editing the code shown above!"),Es.forEach(t),this.h()},h(){P(D,"id","a-custom-training-loop"),P(D,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(D,"href","#a-custom-training-loop"),P(x,"class","relative group"),P(N,"href","/course/chapter3/4"),P(H,"id","preparing-everything-for-training"),P(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(H,"href","#preparing-everything-for-training"),P(L,"class","relative group"),P(fe,"id","training-loop"),P(fe,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(fe,"href","#training-loop"),P(Oe,"class","relative group"),P(Ee,"href","https://huggingface.co/huggingface-course/bert-finetuned-squad-accelerate"),P(Ee,"rel","nofollow")},m(u,F){o(u,h,F),s(h,g),o(u,f,F),o(u,x,F),s(x,D),s(D,b),E($,b,null),s(x,y),s(x,m),s(m,O),o(u,k,F),o(u,v,F),s(v,C),s(v,N),s(N,z),s(v,A),s(v,V),s(V,B),s(v,R),o(u,M,F),o(u,L,F),s(L,H),s(H,X),E(G,X,null),s(L,I),s(L,U),s(U,K),o(u,te,F),o(u,Y,F),s(Y,re),s(Y,we),s(we,Ae),s(Y,ne),s(Y,at),s(at,Le),s(Y,Q),s(Y,J),s(J,De),s(Y,ns),s(Y,nt),s(nt,mt),s(Y,ce),o(u,ot,F),E(se,u,F),o(u,ge,F),o(u,ue,F),s(ue,Pe),o(u,va,F),E(We,u,F),o(u,xa,F),o(u,He,F),s(He,Ce),s(He,Ms),s(Ms,_t),s(He,Dn),o(u,ya,F),E(ye,u,F),o(u,ka,F),o(u,ie,F),s(ie,$a),s(ie,ke),s(ke,it),s(ie,Bs),s(ie,Qe),s(Qe,Pn),s(ie,Ls),s(ie,Ws),s(Ws,ja),s(ie,rt),s(ie,Hs),s(Hs,Qs),s(ie,Cn),s(ie,Vs),s(Vs,qa),s(ie,wt),o(u,Rs,F),E(Se,u,F),o(u,Ea,F),o(u,$e,F),s($e,gt),s($e,os),s(os,bt),s($e,Ta),s($e,he),s(he,Sn),s($e,Gs),o(u,Aa,F),E(vt,u,F),o(u,is,F),o(u,be,F),s(be,On),s(be,xt),s(xt,zn),s(be,In),s(be,rs),s(rs,yt),s(be,Da),s(be,Ve),s(Ve,Pa),s(be,ae),o(u,Ca,F),E(Re,u,F),o(u,Sa,F),E(kt,u,F),o(u,ls,F),o(u,ps,F),s(ps,Fn),o(u,hs,F),E($t,u,F),o(u,Oa,F),o(u,ve,F),s(ve,Nn),s(ve,Us),s(Us,Ys),s(ve,Mn),s(ve,Js),s(Js,Xs),s(ve,Bn),o(u,za,F),o(u,Oe,F),s(Oe,fe),s(fe,Ks),E(Ge,Ks,null),s(Oe,Ln),s(Oe,Zs),s(Zs,Ia),o(u,lt,F),o(u,jt,F),s(jt,qt),o(u,ea,F),o(u,me,F),s(me,Et),s(Et,Fa),s(Et,Ue),s(Ue,Na),s(Et,Tt),s(me,Ma),s(me,de),s(de,Wn),s(de,ds),s(ds,At),s(de,Ba),s(de,Ye),s(Ye,La),s(de,cs),s(de,ta),s(ta,Wa),s(de,Je),s(me,pt),s(me,je),s(je,Dt),s(je,sa),s(sa,aa),s(je,Hn),s(je,us),s(us,Pt),s(je,Ha),o(u,Ct,F),o(u,fs,F),s(fs,Qa),o(u,St,F),E(Ot,u,F),o(u,na,F),o(u,ze,F),s(ze,Va),o(u,_e,F),E(zt,u,F),o(u,ht,F),o(u,Z,F),s(Z,Qn),s(Z,It),s(It,Vn),s(Z,Rn),s(Z,Ft),s(Ft,Gn),s(Z,Un),s(Z,ms),s(ms,Nt),s(Z,Ra),s(Z,Xe),s(Xe,Ga),s(Z,_s),s(Z,oa),s(oa,Ua),s(Z,Mt),s(Z,ws),s(ws,gs),s(Z,Yn),s(Z,bs),s(bs,Bt),s(Z,Ya),o(u,dt,F),o(u,qe,F),s(qe,vs),s(qe,ia),s(ia,Ja),s(qe,Ke),s(qe,Ee),s(Ee,Xa),s(Xa,Jn),s(qe,Lt),Xn=!0},i(u){Xn||(_($.$$.fragment,u),_(G.$$.fragment,u),_(se.$$.fragment,u),_(We.$$.fragment,u),_(ye.$$.fragment,u),_(Se.$$.fragment,u),_(vt.$$.fragment,u),_(Re.$$.fragment,u),_(kt.$$.fragment,u),_($t.$$.fragment,u),_(Ge.$$.fragment,u),_(Ot.$$.fragment,u),_(zt.$$.fragment,u),Xn=!0)},o(u){w($.$$.fragment,u),w(G.$$.fragment,u),w(se.$$.fragment,u),w(We.$$.fragment,u),w(ye.$$.fragment,u),w(Se.$$.fragment,u),w(vt.$$.fragment,u),w(Re.$$.fragment,u),w(kt.$$.fragment,u),w($t.$$.fragment,u),w(Ge.$$.fragment,u),w(Ot.$$.fragment,u),w(zt.$$.fragment,u),Xn=!1},d(u){u&&t(h),u&&t(f),u&&t(x),T($),u&&t(k),u&&t(v),u&&t(M),u&&t(L),T(G),u&&t(te),u&&t(Y),u&&t(ot),T(se,u),u&&t(ge),u&&t(ue),u&&t(va),T(We,u),u&&t(xa),u&&t(He),u&&t(ya),T(ye,u),u&&t(ka),u&&t(ie),u&&t(Rs),T(Se,u),u&&t(Ea),u&&t($e),u&&t(Aa),T(vt,u),u&&t(is),u&&t(be),u&&t(Ca),T(Re,u),u&&t(Sa),T(kt,u),u&&t(ls),u&&t(ps),u&&t(hs),T($t,u),u&&t(Oa),u&&t(ve),u&&t(za),u&&t(Oe),T(Ge),u&&t(lt),u&&t(jt),u&&t(ea),u&&t(me),u&&t(Ct),u&&t(fs),u&&t(St),T(Ot,u),u&&t(na),u&&t(ze),u&&t(_e),T(zt,u),u&&t(ht),u&&t(Z),u&&t(dt),u&&t(qe)}}}function c_(W){let h,g,f,x,D,b,$,y,m,O,k,v,C,N,z,A,V,B,R,M,L,H,X,G,I,U,K,te,Y,re,we,Ae,ne,at,Le,Q,J,De,ns,nt,mt,ce,ot,se,ge,ue,Pe,va,We,xa,He,Ce,Ms,_t,Dn,ya,ye,ka,ie,$a,ke,it,Bs,Qe,Pn,Ls,Ws,ja,rt,Hs,Qs,Cn,Vs,qa,wt,Rs,Se,Ea,$e,gt,os,bt,Ta,he,Sn,Gs,Aa,vt,is,be,On,xt,zn,In,rs,yt,Da,Ve,Pa,ae,Ca,Re,Sa,kt,ls,ps,Fn,hs,$t,Oa,ve,Nn,Us,Ys,Mn,Js,Xs,Bn,za,Oe,fe,Ks,Ge,Ln,Zs,Ia,lt,jt,qt,ea,me,Et,Fa,Ue,Na,Tt,Ma,de,Wn,ds,At,Ba,Ye,La,cs,ta,Wa,Je,pt,je,Dt,sa,aa,Hn,us,Pt,Ha,Ct,fs,Qa,St,Ot,na,ze,Va,_e,zt,ht,Z,Qn,It,Vn,Rn,Ft,Gn,Un,ms,Nt,Ra,Xe,Ga,_s,oa,Ua,Mt,ws,gs,Yn,bs,Bt,Ya,dt,qe,vs,ia,Ja,Ke,Ee,Xa,Jn,Lt,Xn,u,F,Ka,ra,ai,ni,ct,oi,ii,la,pa,ri,Kn,ee,ha,Za,li,pi,hi,Wt,en,xe,di,ci,da,tn,ui,xs,fi,ca,Ie,mi,_i,Zn,ys,Ht,ks,eo,Te,wi,sn,gi,bi,ut,an,vi,Ze,et,xi,ua,$s,yi,nn,ki,$i,oe,js,to,qs,so,tt,ji,on,Es,qi,rn,Ei,yh,bl,ao,vl,no,xl,Ti,kh,yl,oo,kl,io,$l,Ai,$h,jl,Di,jh,ql,ln,Pi,qr,qh,Eh,Th,Ts,Er,Ah,Dh,Tr,Ph,Ch,Ar,Sh,Oh,El,As,zh,Dr,Ih,Fh,Pr,Nh,Mh,Tl,pn,Bh,Cr,Lh,Wh,Al,ro,Dl,lo,Pl,hn,Hh,Sr,Qh,Vh,Cl,po,Sl,ho,Ol,dn,Rh,Or,Gh,Uh,zl,co,Il,uo,Fl,Ci,Yh,Nl,cn,Ml,Si,Jh,Bl,fo,Ll,Oi,Xh,Wl,Ds,Kh,zr,Zh,ed,Ir,td,sd,Hl,mo,Ql,_o,Vl,zi,ad,Rl,fa,un,Fr,wo,nd,Nr,od,Gl,Ii,id,Ul,Ps,rd,Mr,ld,pd,Br,hd,dd,Yl,go,Jl,Fi,cd,Xl,bo,Kl,vo,Zl,Ni,ud,ep,Mi,fd,tp,Qt,Vt,Bi,ma,fn,Lr,xo,md,Wr,_d,sp,Rt,Gt,Li,mn,wd,yo,Hr,gd,bd,vd,ap,ft,Qr,xd,yd,Vr,kd,$d,ko,jd,Rr,qd,Ed,Td,_a,Ad,Gr,Dd,Pd,Ur,Cd,Sd,np,Fe,Od,Yr,zd,Id,Jr,Fd,Nd,Xr,Md,Bd,op,zm='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>log</mi><mo>\u2061</mo><mo stretchy="false">(</mo><mi>a</mi><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><mi>log</mi><mo>\u2061</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>log</mi><mo>\u2061</mo><mo stretchy="false">(</mo><mi>b</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\log(ab) = \\log(a) + \\log(b)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">ab</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mclose">)</span></span></span></span>',ip,rp,_n,Ld,Kr,Wd,Hd,lp,$o,pp,Wi,Qd,hp,jo,dp,wn,Vd,Zr,Rd,Gd,cp,Ut,Yt,Hi,Ne,Ud,el,Yd,Jd,tl,Xd,Kd,sl,Zd,ec,al,tc,sc,up,qo,fp,gn,ac,nl,nc,oc,mp,Cs,ol,ic,rc,il,lc,pc,Eo,hc,rl,dc,cc,_p,Qi,uc,wp,To,gp,Vi,fc,bp,Ao,vp,Ri,mc,xp,Do,yp,Gi,_c,kp,Po,$p,Co,jp,Ui,wc,qp,So,Ep,Oo,Tp,bn,gc,zo,bc,vc,Ap,Yi,Io,Dp,Ji,xc,Pp,Fo,Cp,No,Sp,Xi,yc,Op,wa,vn,ll,Mo,kc,pl,$c,zp,Jt,Xt,Ki,Zi,jc,Ip,er,qc,Fp,Bo,Np,tr,Ec,Mp,Lo,Bp,Kt,Zt,sr,Me,Tc,hl,Ac,Dc,dl,Pc,Cc,cl,Sc,Oc,ul,zc,Ic,Lp,es,ts,ar,nr,Fc,Wp,ss,as,or,Wo,Hp,ir,Nc,Qp,rr,lr,Mc,Vp,xn,Rp,pr,ga,yn,fl,Ho,Bc,ml,Lc,Gp,kn,Wc,_l,Hc,Qc,Up,Qo,Yp,Vo,Jp,hr,Vc,Xp;f=new Hm({props:{fw:W[0]}}),y=new st({});const Zc=[Vm,Qm],Ro=[];function eu(e,l){return e[0]==="pt"?0:1}C=eu(W),N=Ro[C]=Zc[C](W),I=new xh({props:{id:"ajPx5LwJD-I"}}),ce=new vh({props:{$$slots:{default:[Rm]},$$scope:{ctx:W}}}),Pe=new st({}),Qe=new st({}),wt=new S({props:{code:`from datasets import load_dataset

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
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Answer: &quot;</span>, raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;answers&quot;</span>])`}}),Ve=new S({props:{code:`Context: 'Architecturally, the school has a Catholic character. Atop the Main Building\\'s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend "Venite Ad Me Omnes". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.'
Question: 'To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?'
Answer: {'text': ['Saint Bernadette Soubirous'], 'answer_start': [515]}`,highlighted:`Context: <span class="hljs-string">&#x27;Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot;Venite Ad Me Omnes&quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.&#x27;</span>
Question: <span class="hljs-string">&#x27;To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?&#x27;</span>
Answer: {<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Saint Bernadette Soubirous&#x27;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">515</span>]}`}}),lt=new S({props:{code:'raw_datasets["train"].filter(lambda x: len(x["answers"]["text"]) != 1)',highlighted:'raw_datasets[<span class="hljs-string">&quot;train&quot;</span>].<span class="hljs-built_in">filter</span>(<span class="hljs-keyword">lambda</span> x: <span class="hljs-built_in">len</span>(x[<span class="hljs-string">&quot;answers&quot;</span>][<span class="hljs-string">&quot;text&quot;</span>]) != <span class="hljs-number">1</span>)'}}),qt=new S({props:{code:`Dataset({
    features: ['id', 'title', 'context', 'question', 'answers'],
    num_rows: 0
})`,highlighted:`Dataset({
    features: [<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-string">&#x27;title&#x27;</span>, <span class="hljs-string">&#x27;context&#x27;</span>, <span class="hljs-string">&#x27;question&#x27;</span>, <span class="hljs-string">&#x27;answers&#x27;</span>],
    num_rows: <span class="hljs-number">0</span>
})`}}),Ue=new S({props:{code:`print(raw_datasets["validation"][0]["answers"])
print(raw_datasets["validation"][2]["answers"])`,highlighted:`<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;answers&quot;</span>])
<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">2</span>][<span class="hljs-string">&quot;answers&quot;</span>])`}}),Tt=new S({props:{code:`{'text': ['Denver Broncos', 'Denver Broncos', 'Denver Broncos'], 'answer_start': [177, 177, 177]}
{'text': ['Santa Clara, California', "Levi's Stadium", "Levi's Stadium in the San Francisco Bay Area at Santa Clara, California."], 'answer_start': [403, 355, 355]}`,highlighted:`{<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">177</span>, <span class="hljs-number">177</span>, <span class="hljs-number">177</span>]}
{<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Santa Clara, California&#x27;</span>, <span class="hljs-string">&quot;Levi&#x27;s Stadium&quot;</span>, <span class="hljs-string">&quot;Levi&#x27;s Stadium in the San Francisco Bay Area at Santa Clara, California.&quot;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">403</span>, <span class="hljs-number">355</span>, <span class="hljs-number">355</span>]}`}}),At=new S({props:{code:`print(raw_datasets["validation"][2]["context"])
print(raw_datasets["validation"][2]["question"])`,highlighted:`<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">2</span>][<span class="hljs-string">&quot;context&quot;</span>])
<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">2</span>][<span class="hljs-string">&quot;question&quot;</span>])`}}),Ye=new S({props:{code:`'Super Bowl 50 was an American football game to determine the champion of the National Football League (NFL) for the 2015 season. The American Football Conference (AFC) champion Denver Broncos defeated the National Football Conference (NFC) champion Carolina Panthers 24\u201310 to earn their third Super Bowl title. The game was played on February 7, 2016, at Levi\\'s Stadium in the San Francisco Bay Area at Santa Clara, California. As this was the 50th Super Bowl, the league emphasized the "golden anniversary" with various gold-themed initiatives, as well as temporarily suspending the tradition of naming each Super Bowl game with Roman numerals (under which the game would have been known as "Super Bowl L"), so that the logo could prominently feature the Arabic numerals 50.'
'Where did Super Bowl 50 take place?'`,highlighted:`<span class="hljs-string">&#x27;Super Bowl 50 was an American football game to determine the champion of the National Football League (NFL) for the 2015 season. The American Football Conference (AFC) champion Denver Broncos defeated the National Football Conference (NFC) champion Carolina Panthers 24\u201310 to earn their third Super Bowl title. The game was played on February 7, 2016, at Levi\\&#x27;s Stadium in the San Francisco Bay Area at Santa Clara, California. As this was the 50th Super Bowl, the league emphasized the &quot;golden anniversary&quot; with various gold-themed initiatives, as well as temporarily suspending the tradition of naming each Super Bowl game with Roman numerals (under which the game would have been known as &quot;Super Bowl L&quot;), so that the logo could prominently feature the Arabic numerals 50.&#x27;</span>
<span class="hljs-string">&#x27;Where did Super Bowl 50 take place?&#x27;</span>`}}),Dt=new st({}),Pt=new xh({props:{id:"qgaM0weJHpA"}}),ze=new S({props:{code:`from transformers import AutoTokenizer

model_checkpoint = "bert-base-cased"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

model_checkpoint = <span class="hljs-string">&quot;bert-base-cased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)`}}),Nt=new S({props:{code:"tokenizer.is_fast",highlighted:"tokenizer.is_fast"}}),Xe=new S({props:{code:"True",highlighted:'<span class="hljs-literal">True</span>'}}),Mt=new S({props:{code:"[CLS] question [SEP] context [SEP]",highlighted:'<span class="hljs-selector-attr">[CLS]</span> question <span class="hljs-selector-attr">[SEP]</span> context <span class="hljs-selector-attr">[SEP]</span>'}}),Bt=new S({props:{code:`context = raw_datasets["train"][0]["context"]
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
inputs.keys()`}}),qs=new S({props:{code:"dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'offset_mapping', 'overflow_to_sample_mapping'])",highlighted:'dict_keys([<span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;token_type_ids&#x27;</span>, <span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;offset_mapping&#x27;</span>, <span class="hljs-string">&#x27;overflow_to_sample_mapping&#x27;</span>])'}}),ao=new S({props:{code:'inputs["overflow_to_sample_mapping"]',highlighted:'inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>]'}}),no=new S({props:{code:"[0, 0, 0, 0]",highlighted:'[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]'}}),oo=new S({props:{code:`inputs = tokenizer(
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
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Here is where each comes from: <span class="hljs-subst">{inputs[<span class="hljs-string">&#x27;overflow_to_sample_mapping&#x27;</span>]}</span>.&quot;</span>)`}}),io=new S({props:{code:`'The 4 examples gave 19 features.'
'Here is where each comes from: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3].'`,highlighted:`<span class="hljs-string">&#x27;The 4 examples gave 19 features.&#x27;</span>
<span class="hljs-string">&#x27;Here is where each comes from: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3].&#x27;</span>`}}),ro=new S({props:{code:`answers = raw_datasets["train"][2:6]["answers"]
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
    if offset[context_start][0] > start_char or offset[context_end][1] < end_char:
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
    <span class="hljs-keyword">if</span> offset[context_start][<span class="hljs-number">0</span>] &gt; start_char <span class="hljs-keyword">or</span> offset[context_end][<span class="hljs-number">1</span>] &lt; end_char:
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

start_positions, end_positions`}}),lo=new S({props:{code:`([83, 51, 19, 0, 0, 64, 27, 0, 34, 0, 0, 0, 67, 34, 0, 0, 0, 0, 0],
 [85, 53, 21, 0, 0, 70, 33, 0, 40, 0, 0, 0, 68, 35, 0, 0, 0, 0, 0])`,highlighted:`([<span class="hljs-number">83</span>, <span class="hljs-number">51</span>, <span class="hljs-number">19</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">64</span>, <span class="hljs-number">27</span>, <span class="hljs-number">0</span>, <span class="hljs-number">34</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">67</span>, <span class="hljs-number">34</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
 [<span class="hljs-number">85</span>, <span class="hljs-number">53</span>, <span class="hljs-number">21</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">70</span>, <span class="hljs-number">33</span>, <span class="hljs-number">0</span>, <span class="hljs-number">40</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">68</span>, <span class="hljs-number">35</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>])`}}),po=new S({props:{code:`idx = 0
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

<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Theoretical answer: <span class="hljs-subst">{answer}</span>, labels give: <span class="hljs-subst">{labeled_answer}</span>&quot;</span>)`}}),ho=new S({props:{code:"'Theoretical answer: the Main Building, labels give: the Main Building'",highlighted:'<span class="hljs-string">&#x27;Theoretical answer: the Main Building, labels give: the Main Building&#x27;</span>'}}),co=new S({props:{code:`idx = 4
sample_idx = inputs["overflow_to_sample_mapping"][idx]
answer = answers[sample_idx]["text"][0]

decoded_example = tokenizer.decode(inputs["input_ids"][idx])
print(f"Theoretical answer: {answer}, decoded example: {decoded_example}")`,highlighted:`idx = <span class="hljs-number">4</span>
sample_idx = inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>][idx]
answer = answers[sample_idx][<span class="hljs-string">&quot;text&quot;</span>][<span class="hljs-number">0</span>]

decoded_example = tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][idx])
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Theoretical answer: <span class="hljs-subst">{answer}</span>, decoded example: <span class="hljs-subst">{decoded_example}</span>&quot;</span>)`}}),uo=new S({props:{code:`'Theoretical answer: a Marian place of prayer and reflection, decoded example: [CLS] What is the Grotto at Notre Dame? [SEP] Architecturally, the school has a Catholic character. Atop the Main Building\\'s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend " Venite Ad Me Omnes ". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grot [SEP]'`,highlighted:'<span class="hljs-string">&#x27;Theoretical answer: a Marian place of prayer and reflection, decoded example: [CLS] What is the Grotto at Notre Dame? [SEP] Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot; Venite Ad Me Omnes &quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grot [SEP]&#x27;</span>'}}),cn=new vh({props:{$$slots:{default:[Gm]},$$scope:{ctx:W}}}),fo=new S({props:{code:`max_length = 384
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
        if offset[context_start][0] > start_char or offset[context_end][1] < end_char:
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
        <span class="hljs-keyword">if</span> offset[context_start][<span class="hljs-number">0</span>] &gt; start_char <span class="hljs-keyword">or</span> offset[context_end][<span class="hljs-number">1</span>] &lt; end_char:
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
    <span class="hljs-keyword">return</span> inputs`}}),mo=new S({props:{code:`train_dataset = raw_datasets["train"].map(
    preprocess_training_examples,
    batched=True,
    remove_columns=raw_datasets["train"].column_names,
)
len(raw_datasets["train"]), len(train_dataset)`,highlighted:`train_dataset = raw_datasets[<span class="hljs-string">&quot;train&quot;</span>].<span class="hljs-built_in">map</span>(
    preprocess_training_examples,
    batched=<span class="hljs-literal">True</span>,
    remove_columns=raw_datasets[<span class="hljs-string">&quot;train&quot;</span>].column_names,
)
<span class="hljs-built_in">len</span>(raw_datasets[<span class="hljs-string">&quot;train&quot;</span>]), <span class="hljs-built_in">len</span>(train_dataset)`}}),_o=new S({props:{code:"(87599, 88729)",highlighted:'(<span class="hljs-number">87599</span>, <span class="hljs-number">88729</span>)'}}),wo=new st({}),go=new S({props:{code:`def preprocess_validation_examples(examples):
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
    <span class="hljs-keyword">return</span> inputs`}}),bo=new S({props:{code:`validation_dataset = raw_datasets["validation"].map(
    preprocess_validation_examples,
    batched=True,
    remove_columns=raw_datasets["validation"].column_names,
)
len(raw_datasets["validation"]), len(validation_dataset)`,highlighted:`validation_dataset = raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>].<span class="hljs-built_in">map</span>(
    preprocess_validation_examples,
    batched=<span class="hljs-literal">True</span>,
    remove_columns=raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>].column_names,
)
<span class="hljs-built_in">len</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>]), <span class="hljs-built_in">len</span>(validation_dataset)`}}),vo=new S({props:{code:"(10570, 10822)",highlighted:'(<span class="hljs-number">10570</span>, <span class="hljs-number">10822</span>)'}});const tu=[Ym,Um],Go=[];function su(e,l){return e[0]==="pt"?0:1}Qt=su(W),Vt=Go[Qt]=tu[Qt](W),xo=new st({});const au=[Xm,Jm],Uo=[];function nu(e,l){return e[0]==="pt"?0:1}Rt=nu(W),Gt=Uo[Rt]=au[Rt](W),$o=new S({props:{code:`small_eval_set = raw_datasets["validation"].select(range(100))
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
)`}}),jo=new S({props:{code:"tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)",highlighted:"tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)"}});const ou=[Zm,Km],Yo=[];function iu(e,l){return e[0]==="pt"?0:1}Ut=iu(W),Yt=Yo[Ut]=ou[Ut](W),qo=new S({props:{code:`import collections

example_to_features = collections.defaultdict(list)
for idx, feature in enumerate(eval_set):
    example_to_features[feature["example_id"]].append(idx)`,highlighted:`<span class="hljs-keyword">import</span> collections

example_to_features = collections.defaultdict(<span class="hljs-built_in">list</span>)
<span class="hljs-keyword">for</span> idx, feature <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(eval_set):
    example_to_features[feature[<span class="hljs-string">&quot;example_id&quot;</span>]].append(idx)`}}),To=new S({props:{code:`import numpy as np

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
    predicted_answers.append({<span class="hljs-string">&quot;id&quot;</span>: example_id, <span class="hljs-string">&quot;prediction_text&quot;</span>: best_answer[<span class="hljs-string">&quot;text&quot;</span>]})`}}),Ao=new S({props:{code:`from datasets import load_metric

metric = load_metric("squad")`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric

metric = load_metric(<span class="hljs-string">&quot;squad&quot;</span>)`}}),Do=new S({props:{code:`theoretical_answers = [
    {"id": ex["id"], "answers": ex["answers"]} for ex in small_eval_set
]`,highlighted:`theoretical_answers = [
    {<span class="hljs-string">&quot;id&quot;</span>: ex[<span class="hljs-string">&quot;id&quot;</span>], <span class="hljs-string">&quot;answers&quot;</span>: ex[<span class="hljs-string">&quot;answers&quot;</span>]} <span class="hljs-keyword">for</span> ex <span class="hljs-keyword">in</span> small_eval_set
]`}}),Po=new S({props:{code:`print(predicted_answers[0])
print(theoretical_answers[0])`,highlighted:`<span class="hljs-built_in">print</span>(predicted_answers[<span class="hljs-number">0</span>])
<span class="hljs-built_in">print</span>(theoretical_answers[<span class="hljs-number">0</span>])`}}),Co=new S({props:{code:`{'id': '56be4db0acb8001400a502ec', 'prediction_text': 'Denver Broncos'}
{'id': '56be4db0acb8001400a502ec', 'answers': {'text': ['Denver Broncos', 'Denver Broncos', 'Denver Broncos'], 'answer_start': [177, 177, 177]}}`,highlighted:`{<span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;56be4db0acb8001400a502ec&#x27;</span>, <span class="hljs-string">&#x27;prediction_text&#x27;</span>: <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>}
{<span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;56be4db0acb8001400a502ec&#x27;</span>, <span class="hljs-string">&#x27;answers&#x27;</span>: {<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">177</span>, <span class="hljs-number">177</span>, <span class="hljs-number">177</span>]}}`}}),So=new S({props:{code:"metric.compute(predictions=predicted_answers, references=theoretical_answers)",highlighted:"metric.compute(predictions=predicted_answers, references=theoretical_answers)"}}),Oo=new S({props:{code:"{'exact_match': 83.0, 'f1': 88.25}",highlighted:'{<span class="hljs-string">&#x27;exact_match&#x27;</span>: <span class="hljs-number">83.0</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">88.25</span>}'}});function ru(e,l){return e[0]==="pt"?t_:e_}let Kp=ru(W),ba=Kp(W);Io=new S({props:{code:`from tqdm.auto import tqdm


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
    <span class="hljs-keyword">return</span> metric.compute(predictions=predicted_answers, references=theoretical_answers)`}}),Fo=new S({props:{code:"compute_metrics(start_logits, end_logits, eval_set, small_eval_set)",highlighted:"compute_metrics(start_logits, end_logits, eval_set, small_eval_set)"}}),No=new S({props:{code:"{'exact_match': 83.0, 'f1': 88.25}",highlighted:'{<span class="hljs-string">&#x27;exact_match&#x27;</span>: <span class="hljs-number">83.0</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">88.25</span>}'}}),Mo=new st({});const lu=[a_,s_],Jo=[];function pu(e,l){return e[0]==="pt"?0:1}Jt=pu(W),Xt=Jo[Jt]=lu[Jt](W),Bo=new S({props:{code:`from huggingface_hub import notebook_login

notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Lo=new S({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}});const hu=[o_,n_],Xo=[];function du(e,l){return e[0]==="pt"?0:1}Kt=du(W),Zt=Xo[Kt]=hu[Kt](W);const cu=[r_,i_],Ko=[];function uu(e,l){return e[0]==="pt"?0:1}es=uu(W),ts=Ko[es]=cu[es](W);const fu=[h_,p_],Zo=[];function mu(e,l){return e[0]==="pt"?0:1}ss=mu(W),as=Zo[ss]=fu[ss](W),Wo=new S({props:{code:"{'exact_match': 81.18259224219489, 'f1': 88.67381321905516}",highlighted:'{<span class="hljs-string">&#x27;exact_match&#x27;</span>: <span class="hljs-number">81.18259224219489</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">88.67381321905516</span>}'}});let le=W[0]==="pt"&&Cm();xn=new vh({props:{$$slots:{default:[d_]},$$scope:{ctx:W}}});let pe=W[0]==="pt"&&Sm();return Ho=new st({}),Qo=new S({props:{code:`from transformers import pipeline

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
 <span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Jax, PyTorch and TensorFlow&#x27;</span>}`}}),{c(){h=i("meta"),g=d(),j(f.$$.fragment),x=d(),D=i("h1"),b=i("a"),$=i("span"),j(y.$$.fragment),m=d(),O=i("span"),k=a("Question answering"),v=d(),N.c(),z=d(),A=i("p"),V=a("Time to look at question answering! This task comes in many flavors, but the one we\u2019ll focus on in this section is called "),B=i("em"),R=a("extractive"),M=a(" question answering. This involves posing questions about a document and identifying the answers as "),L=i("em"),H=a("spans of text"),X=a(" in the document itself."),G=d(),j(I.$$.fragment),U=d(),K=i("p"),te=a("We will fine-tune a BERT model on the "),Y=i("a"),re=a("SQuAD dataset"),we=a(", which consists of questions posed by crowdworkers on a set of Wikipedia articles. This will give us a model able to compute predictions like this one:"),Ae=d(),ne=i("iframe"),Le=d(),Q=i("p"),J=a("This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it and double-check the predictions "),De=i("a"),ns=a("here"),nt=a("."),mt=d(),j(ce.$$.fragment),ot=d(),se=i("h2"),ge=i("a"),ue=i("span"),j(Pe.$$.fragment),va=d(),We=i("span"),xa=a("Preparing the data"),He=d(),Ce=i("p"),Ms=a("The dataset that is used the most as an academic benchmark for extractive question answering is "),_t=i("a"),Dn=a("SQuAD"),ya=a(", so that\u2019s the one we\u2019ll use here. There is also a harder "),ye=i("a"),ka=a("SQuAD v2"),ie=a(" benchmark, which includes questions that don\u2019t have an answer. As long as your own dataset contains a column for contexts, a column for questions, and a column for answers, you should be able to adapt the steps below."),$a=d(),ke=i("h3"),it=i("a"),Bs=i("span"),j(Qe.$$.fragment),Pn=d(),Ls=i("span"),Ws=a("The SQuAD dataset"),ja=d(),rt=i("p"),Hs=a("As usual, we can download and cache the dataset in just one step thanks to "),Qs=i("code"),Cn=a("load_dataset()"),Vs=a(":"),qa=d(),j(wt.$$.fragment),Rs=d(),Se=i("p"),Ea=a("We can then have a look at this object to learn more about the SQuAD dataset:"),$e=d(),j(gt.$$.fragment),os=d(),j(bt.$$.fragment),Ta=d(),he=i("p"),Sn=a("It looks like we have everything we need with the "),Gs=i("code"),Aa=a("context"),vt=a(", "),is=i("code"),be=a("question"),On=a(", and "),xt=i("code"),zn=a("answers"),In=a(" fields, so let\u2019s print those for the first element of our training set:"),rs=d(),j(yt.$$.fragment),Da=d(),j(Ve.$$.fragment),Pa=d(),ae=i("p"),Ca=a("The "),Re=i("code"),Sa=a("context"),kt=a(" and "),ls=i("code"),ps=a("question"),Fn=a(" fields are very straightforward to use. The "),hs=i("code"),$t=a("answers"),Oa=a(" field is a bit trickier as it comports a dictionary with two fields that are both lists. This is the format that will be expected by the "),ve=i("code"),Nn=a("squad"),Us=a(" metric during evaluation; if you are using your own data, you don\u2019t necessarily need to worry about putting the answers in the same format. The "),Ys=i("code"),Mn=a("text"),Js=a(" field is rather obvious, and the "),Xs=i("code"),Bn=a("answer_start"),za=a(" field contains the starting character index of each answer in the context."),Oe=d(),fe=i("p"),Ks=a("During training, there is only one possible answer. We can double-check this by using the "),Ge=i("code"),Ln=a("Dataset.filter()"),Zs=a(" method:"),Ia=d(),j(lt.$$.fragment),jt=d(),j(qt.$$.fragment),ea=d(),me=i("p"),Et=a("For evaluation, however, there are several possible answers for each sample, which may be the same or different:"),Fa=d(),j(Ue.$$.fragment),Na=d(),j(Tt.$$.fragment),Ma=d(),de=i("p"),Wn=a("We won\u2019t dive into the evaluation script as it will all be wrapped up by a \u{1F917} Datasets metric for us, but the short version is that some of the questions have several possible answers, and this script will compare a predicted answer to all the acceptable answers and take the best score. If we take a look at the sample at index 2, for instance:"),ds=d(),j(At.$$.fragment),Ba=d(),j(Ye.$$.fragment),La=d(),cs=i("p"),ta=a("we can see that the answer can indeed be one of the three possibilities we saw before."),Wa=d(),Je=i("h3"),pt=i("a"),je=i("span"),j(Dt.$$.fragment),sa=d(),aa=i("span"),Hn=a("Processing the training data"),us=d(),j(Pt.$$.fragment),Ha=d(),Ct=i("p"),fs=a("Let\u2019s start with preprocessing the training data. The hard part will be to generate labels for the question\u2019s answer, which will be the start and end positions of the tokens corresponding to the answer inside the context."),Qa=d(),St=i("p"),Ot=a("But let\u2019s not get ahead of ourselves. First, we need to convert the text in the input into IDs the model can make sense of, using a tokenizer:"),na=d(),j(ze.$$.fragment),Va=d(),_e=i("p"),zt=a("As mentioned previously, we\u2019ll be fine-tuning a BERT model, but you can use any other model type as long as it has a fast tokenizer implemented. You can see all the architectures that come with a fast version in "),ht=i("a"),Z=a("this big table"),Qn=a(", and to check that the "),It=i("code"),Vn=a("tokenizer"),Rn=a(" object you\u2019re using is indeed backed by \u{1F917} Tokenizers you can look at its "),Ft=i("code"),Gn=a("is_fast"),Un=a(" attribute:"),ms=d(),j(Nt.$$.fragment),Ra=d(),j(Xe.$$.fragment),Ga=d(),_s=i("p"),oa=a("We can pass to our tokenizer the question and the context together, and it will properly insert the special tokens to form a sentence like this:"),Ua=d(),j(Mt.$$.fragment),ws=d(),gs=i("p"),Yn=a("Let\u2019s double-check:"),bs=d(),j(Bt.$$.fragment),Ya=d(),j(dt.$$.fragment),qe=d(),vs=i("p"),ia=a("The labels will then be the index of the tokens starting and ending the answer, and the model will be tasked to predicted one start and end logit per token in the input, with the theoretical labels being as follow:"),Ja=d(),Ke=i("div"),Ee=i("img"),Jn=d(),Lt=i("img"),u=d(),F=i("p"),Ka=a("In this case the context is not too long, but some of the examples in the dataset have very long contexts that will exceed the maximum length we set (which is 384 in this case). As we saw in "),ra=i("a"),ai=a("Chapter 6"),ni=a(" when we explored the internals of the "),ct=i("code"),oi=a("question-answering"),ii=a(" pipeline, we will deal with long contexts by creating several training features from one sample of our dataset, with a sliding window between them."),la=d(),pa=i("p"),ri=a("To see how this works using the current example, we can limit the length to 100 and use a sliding window of 50 tokens. As a reminder, we use:"),Kn=d(),ee=i("ul"),ha=i("li"),Za=i("code"),li=a("max_length"),pi=a(" to set the maximum length (here 100)"),hi=d(),Wt=i("li"),en=i("code"),xe=a('truncation="only_second"'),di=a(" to truncate the context (which is in the second position) when the question with its context is too long"),ci=d(),da=i("li"),tn=i("code"),ui=a("stride"),xs=a(" to set the number of overlapping tokens between two successive chunks (here 50)"),fi=d(),ca=i("li"),Ie=i("code"),mi=a("return_overflowing_tokens=True"),_i=a(" to let the tokenizer know we want the overflowing tokens"),Zn=d(),j(ys.$$.fragment),Ht=d(),j(ks.$$.fragment),eo=d(),Te=i("p"),wi=a("As we can see, our example has been in split into four inputs, each of them containing the question and some part of the context. Note that the answer to the question (\u201CBernadette Soubirous\u201D) only appears in the third and last inputs, so by dealing with long contexts in this way we will create some training examples where the answer is not included in the context. For those examples, the labels will be "),sn=i("code"),gi=a("start_position = end_position = 0"),bi=a(" (so we predict the "),ut=i("code"),an=a("[CLS]"),vi=a(" token). We will also set those labels in the unfortunate case where the answer has been truncated so that we only have the start (or end) of it. For the examples where the answer is fully in the context, the labels will be the index of the token where the answer starts and the index of the token where the answer ends."),Ze=d(),et=i("p"),xi=a("The dataset provides us with the start character of the answer in the context, and by adding the length of the answer, we can find the end character in the context. To map those to token indices, we will need to use the offset mappings we studied in "),ua=i("a"),$s=a("Chapter 6"),yi=a(". We can have our tokenizer return these by passing along "),nn=i("code"),ki=a("return_offsets_mapping=True"),$i=a(":"),oe=d(),j(js.$$.fragment),to=d(),j(qs.$$.fragment),so=d(),tt=i("p"),ji=a("As we can see, we get back the usual input IDs, token type IDs, and attention mask, as well as the offset mapping we required and an extra key, "),on=i("code"),Es=a("overflow_to_sample_mapping"),qi=a(". The corresponding value will be of use to us when we tokenize several texts at the same time (which we should do to benefit from the fact that our tokenizer is backed by Rust). Since one sample can give several features, it maps each feature to the example it originated from. Because here we only tokenized one example, we get a list of "),rn=i("code"),Ei=a("0"),yh=a("s:"),bl=d(),j(ao.$$.fragment),vl=d(),j(no.$$.fragment),xl=d(),Ti=i("p"),kh=a("But if we tokenize more examples, this will become more useful:"),yl=d(),j(oo.$$.fragment),kl=d(),j(io.$$.fragment),$l=d(),Ai=i("p"),$h=a("As we can see, the first three examples (at indices 2, 3, and 4 in the training set) each gave four features and the last example (at index 5 in the training set) gave 7 features."),jl=d(),Di=i("p"),jh=a("This information will be useful to map each feature we get to its corresponding label. As mentioned earlier, those labels are:"),ql=d(),ln=i("ul"),Pi=i("li"),qr=i("code"),qh=a("(0, 0)"),Eh=a(" if the answer is not in the corresponding span of the context"),Th=d(),Ts=i("li"),Er=i("code"),Ah=a("(start_position, end_position)"),Dh=a(" if the answer is in the corresponding span of the context, with "),Tr=i("code"),Ph=a("start_position"),Ch=a(" being the index of the token (in the input IDs) at the start of the answer and "),Ar=i("code"),Sh=a("end_position"),Oh=a(" being the index of the token (in the input IDs) where the answer ends"),El=d(),As=i("p"),zh=a("To determine which of these is the case and, if relevant, the positions of the tokens, we first find the indices that start and end the context in the input IDs. We could use the token type IDs to do this, but since those do not necessarily exist for all models (DistilBERT does not require them, for instance), we\u2019ll instead use the "),Dr=i("code"),Ih=a("sequence_ids()"),Fh=a(" method of the "),Pr=i("code"),Nh=a("BatchEncoding"),Mh=a(" our tokenizer returns."),Tl=d(),pn=i("p"),Bh=a("Once we have those token indices, we look at the corresponding offsets, which are tuples of two integers representing the span of characters inside the original context. We can thus detect if the chunk of the context in this feature starts after the answer or ends before the answer begins (in which case the label is "),Cr=i("code"),Lh=a("(0, 0)"),Wh=a("). If that\u2019s not the case, we loop to find the first and last token of the answer:"),Al=d(),j(ro.$$.fragment),Dl=d(),j(lo.$$.fragment),Pl=d(),hn=i("p"),Hh=a("Let\u2019s take a look at a few results to verify that our approach is correct. For the first feature we find "),Sr=i("code"),Qh=a("(83, 85)"),Vh=a(" as labels, so let\u2019s compare the theoretical answer with the decoded span of tokens from 83 to 85 (inclusive):"),Cl=d(),j(po.$$.fragment),Sl=d(),j(ho.$$.fragment),Ol=d(),dn=i("p"),Rh=a("So that\u2019s a match! Now let\u2019s check index 4, where we set the labels to "),Or=i("code"),Gh=a("(0, 0)"),Uh=a(", which means the answer is not in the context chunk of that feature:"),zl=d(),j(co.$$.fragment),Il=d(),j(uo.$$.fragment),Fl=d(),Ci=i("p"),Yh=a("Indeed, we don\u2019t see the answer inside the context."),Nl=d(),j(cn.$$.fragment),Ml=d(),Si=i("p"),Jh=a("Now that we have seen step by step how to preprocess our training data, we can group it in a function we will apply on the whole training dataset. We\u2019ll pad every feature to the maximum length we set, as most of the contexts will be long (and the corresponding samples will be split into several features), so there is no real benefit to applying dynamic padding here:"),Bl=d(),j(fo.$$.fragment),Ll=d(),Oi=i("p"),Xh=a("Note that we defined two constants to determine the maximum length used as well as the length of the sliding window, and that we added a tiny bit of cleanup before tokenizing: some of the questions in the SQuAD dataset have extra spaces at the beginning and the end that don\u2019t add anything (and take up space when being tokenized if you use a model like RoBERTa), so we removed those extra spaces."),Wl=d(),Ds=i("p"),Kh=a("To apply this function to the whole training set, we use the "),zr=i("code"),Zh=a("Dataset.map()"),ed=a(" method with the "),Ir=i("code"),td=a("batched=True"),sd=a(" flag. It\u2019s necessary here as we are changing the length of the dataset (since one example can give several training features):"),Hl=d(),j(mo.$$.fragment),Ql=d(),j(_o.$$.fragment),Vl=d(),zi=i("p"),ad=a("As we can see, the preprocessing added roughly 1,000 features. Our training set is now ready to be used \u2014 let\u2019s dig into the preprocessing of the validation set!"),Rl=d(),fa=i("h3"),un=i("a"),Fr=i("span"),j(wo.$$.fragment),nd=d(),Nr=i("span"),od=a("Processing the validation data"),Gl=d(),Ii=i("p"),id=a("Preprocessing the validation data will be slightly easier as we don\u2019t need to generate labels (unless we want to compute a validation loss, but that number won\u2019t really help us understand how good the model is). The real joy will be to interpret the predictions of the model into spans of the original context. For this, we will just need to store both the offset mappings and some way to match each created feature to the original example it comes from. Since there is an ID column in the original dataset, we\u2019ll use that ID."),Ul=d(),Ps=i("p"),rd=a("The only thing we\u2019ll add here is a tiny bit of cleanup of the offset mappings. They will contain offsets for the question and the context, but once we\u2019re in the post-processing stage we won\u2019t have any way to know which part of the input IDs corresponded to the context and which part was the question (the "),Mr=i("code"),ld=a("sequence_ids()"),pd=a(" method we used is available for the output of the tokenizer only). So, we\u2019ll set the offsets corresponding to the question to "),Br=i("code"),hd=a("None"),dd=a(":"),Yl=d(),j(go.$$.fragment),Jl=d(),Fi=i("p"),cd=a("We can apply this function on the whole validation dataset like before:"),Xl=d(),j(bo.$$.fragment),Kl=d(),j(vo.$$.fragment),Zl=d(),Ni=i("p"),ud=a("In this case we\u2019ve only added a couple of hundred samples, so it appears the contexts in the validation dataset are a bit shorter."),ep=d(),Mi=i("p"),fd=a("Now that we have preprocessed all the data, we can get to the training."),tp=d(),Vt.c(),Bi=d(),ma=i("h3"),fn=i("a"),Lr=i("span"),j(xo.$$.fragment),md=d(),Wr=i("span"),_d=a("Post-processing"),sp=d(),Gt.c(),Li=d(),mn=i("p"),wd=a("The model will output logits for the start and end positions of the answer in the input IDs, as we saw during our exploration of the "),yo=i("a"),Hr=i("code"),gd=a("question-answering"),bd=a(" pipeline"),vd=a(". The post-processing step will be similar to what we did there, so here\u2019s a quick reminder of the actions we took:"),ap=d(),ft=i("ul"),Qr=i("li"),xd=a("We masked the start and end logits corresponding to tokens outside of the context."),yd=d(),Vr=i("li"),kd=a("We then converted the start and end logits into probabilities using a softmax."),$d=d(),ko=i("li"),jd=a("We attributed a score to each "),Rr=i("code"),qd=a("(start_token, end_token)"),Ed=a(" pair by taking the product of the corresponding two probabilities."),Td=d(),_a=i("li"),Ad=a("We looked for the pair with the maximum score that yielded a valid answer (e.g., a "),Gr=i("code"),Dd=a("start_token"),Pd=a(" lower than "),Ur=i("code"),Cd=a("end_token"),Sd=a(")."),np=d(),Fe=i("p"),Od=a("Here we will change this process slightly because we don\u2019t need to compute actual scores (just the predicted answer). This means we can skip the softmax step. To go faster, we also won\u2019t score all the possible "),Yr=i("code"),zd=a("(start_token, end_token)"),Id=a(" pairs, but only the ones corresponding to the highest "),Jr=i("code"),Fd=a("n_best"),Nd=a(" logits (with "),Xr=i("code"),Md=a("n_best=20"),Bd=a("). Since we will skip the softmax, those scores will be logit scores, and will be obtained by taking the sum of the start and end logits (instead of the product, because of the rule "),op=new Mm,ip=a(")."),rp=d(),_n=i("p"),Ld=a("To demonstrate all of this, we will need some kind of predictions. Since we have not trained our model yet, we are going to use the default model for the QA pipeline to generate some predictions on a small part of the validation set. We can use the same processing function as before; because it relies on the global constant "),Kr=i("code"),Wd=a("tokenizer"),Hd=a(", we just have to change that object to the tokenizer of the model we want to use temporarily:"),lp=d(),j($o.$$.fragment),pp=d(),Wi=i("p"),Qd=a("Now that the preprocessing is done, we change the tokenizer back to the one we originally picked:"),hp=d(),j(jo.$$.fragment),dp=d(),wn=i("p"),Vd=a("We then remove the columns of our "),Zr=i("code"),Rd=a("eval_set"),Gd=a(" that are not expected by the model, build a batch with all of that small validation set, and pass it through the model. If a GPU is available, we use it to go faster:"),cp=d(),Yt.c(),Hi=d(),Ne=i("p"),Ud=a("Now, we need to find the predicted answer for each example in our "),el=i("code"),Yd=a("small_eval_set"),Jd=a(". One example may have been split into several features in "),tl=i("code"),Xd=a("eval_set"),Kd=a(", so the first step is to map each example in "),sl=i("code"),Zd=a("small_eval_set"),ec=a(" to the corresponding features in "),al=i("code"),tc=a("eval_set"),sc=a(":"),up=d(),j(qo.$$.fragment),fp=d(),gn=i("p"),ac=a("With this in hand, we can really get to work by looping through all the examples and, for each example, through all the associated features. As we said before, we\u2019ll look at the logit scores for the "),nl=i("code"),nc=a("n_best"),oc=a(" start logits and end logits, excluding positions that give:"),mp=d(),Cs=i("ul"),ol=i("li"),ic=a("An answer that wouldn\u2019t be inside the context"),rc=d(),il=i("li"),lc=a("An answer with negative length"),pc=d(),Eo=i("li"),hc=a("An answer that is too long (we limit the possibilities at "),rl=i("code"),dc=a("max_answer_length=30"),cc=a(")"),_p=d(),Qi=i("p"),uc=a("Once we have all the scored possible answers for one example, we just pick the one with the best logit score:"),wp=d(),j(To.$$.fragment),gp=d(),Vi=i("p"),fc=a("The final format of the predicted answers is the one that will be expected by the metric we will use. As usual, we can load it with the help of the \u{1F917} Datasets library:"),bp=d(),j(Ao.$$.fragment),vp=d(),Ri=i("p"),mc=a("This metric expects the predicted answers in the format we saw above (a list of dictionaries with one key for the ID of the example and one key for the predicted text) and the theoretical answers in the format below (a list of dictionaries with one key for the ID of the example and one key for the possible answers):"),xp=d(),j(Do.$$.fragment),yp=d(),Gi=i("p"),_c=a("We can now check that we get sensible results by looking at the first element of both lists:"),kp=d(),j(Po.$$.fragment),$p=d(),j(Co.$$.fragment),jp=d(),Ui=i("p"),wc=a("Not too bad! Now let\u2019s have a look at the score the metric gives us:"),qp=d(),j(So.$$.fragment),Ep=d(),j(Oo.$$.fragment),Tp=d(),bn=i("p"),gc=a("Again, that\u2019s rather good considering that according to "),zo=i("a"),bc=a("its paper"),vc=a(" DistilBERT fine-tuned on SQuAD obtains 79.1 and 86.9 for those scores on the whole dataset."),Ap=d(),ba.c(),Yi=d(),j(Io.$$.fragment),Dp=d(),Ji=i("p"),xc=a("We can check it works on our predictions:"),Pp=d(),j(Fo.$$.fragment),Cp=d(),j(No.$$.fragment),Sp=d(),Xi=i("p"),yc=a("Looking good! Now let\u2019s use this to fine-tune our model."),Op=d(),wa=i("h3"),vn=i("a"),ll=i("span"),j(Mo.$$.fragment),kc=d(),pl=i("span"),$c=a("Fine-tuning the model"),zp=d(),Xt.c(),Ki=d(),Zi=i("p"),jc=a("As usual, we get a warning that some weights are not used (the ones from the pretraining head) and some others are initialized randomly (the ones for the question answering head). You should be used to this by now, but that means this model is not ready to be used just yet and needs fine-tuning \u2014 good thing we\u2019re about to do that!"),Ip=d(),er=i("p"),qc=a("To be able to push our model to the Hub, we\u2019ll need to log in to Hugging Face. If you\u2019re running this code in a notebook, you can do so with the following utility function, which displays a widget where you can enter your login credentials:"),Fp=d(),j(Bo.$$.fragment),Np=d(),tr=i("p"),Ec=a("If you aren\u2019t working in a notebook, just type the following line in your terminal:"),Mp=d(),j(Lo.$$.fragment),Bp=d(),Zt.c(),sr=d(),Me=i("p"),Tc=a("By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be in "),hl=i("code"),Ac=a('"sgugger/bert-finetuned-squad"'),Dc=a(". We can override this by passing a "),dl=i("code"),Pc=a("hub_model_id"),Cc=a("; for instance, to push the model to the "),cl=i("code"),Sc=a("huggingface_course"),Oc=a(" organization we used "),ul=i("code"),zc=a('hub_model_id="huggingface_course/bert-finetuned-squad"'),Ic=a(" (which is the model we linked to at the beginning of this section)."),Lp=d(),ts.c(),ar=d(),nr=i("p"),Fc=a("Note that while the training happens, each time the model is saved (here, every epoch) it is uploaded to the Hub in the background. This way, you will be able to to resume your training on another machine if necessary. The whole training takes a while (a little over an hour on a Titan RTX), so you can grab a coffee or reread some of the parts of the course that you\u2019ve found more challenging while it proceeds. Also note that as soon as the first epoch is finished, you will see some weights uploaded to the Hub and you can start playing with your model on its page."),Wp=d(),as.c(),or=d(),j(Wo.$$.fragment),Hp=d(),ir=i("p"),Nc=a("Great! As a comparison, the baseline scores reported in the BERT article for this model are 80.8 and 88.5, so we\u2019re right where we should be."),Qp=d(),le&&le.c(),rr=d(),lr=i("p"),Mc=a("At this stage, you can use the inference widget on the Model Hub to test the model and share it with your friends, family, and favorite pets. You have successfully fine-tuned a model on a question answering task \u2014 congratulations!"),Vp=d(),j(xn.$$.fragment),Rp=d(),pe&&pe.c(),pr=d(),ga=i("h2"),yn=i("a"),fl=i("span"),j(Ho.$$.fragment),Bc=d(),ml=i("span"),Lc=a("Using the fine-tuned model"),Gp=d(),kn=i("p"),Wc=a("We\u2019ve already shown you how you can use the model we fine-tuned on the Model Hub with the inference widget. To use it locally in a "),_l=i("code"),Hc=a("pipeline"),Qc=a(", you just have to specify the model identifier:"),Up=d(),j(Qo.$$.fragment),Yp=d(),j(Vo.$$.fragment),Jp=d(),hr=i("p"),Vc=a("Great! Our model is working as well as the default one for this pipeline!"),this.h()},l(e){const l=Bm('[data-svelte="svelte-1phssyn"]',document.head);h=r(l,"META",{name:!0,content:!0}),l.forEach(t),g=c(e),q(f.$$.fragment,e),x=c(e),D=r(e,"H1",{class:!0});var ei=p(D);b=r(ei,"A",{id:!0,class:!0,href:!0});var dr=p(b);$=r(dr,"SPAN",{});var wl=p($);q(y.$$.fragment,wl),wl.forEach(t),dr.forEach(t),m=c(ei),O=r(ei,"SPAN",{});var gl=p(O);k=n(gl,"Question answering"),gl.forEach(t),ei.forEach(t),v=c(e),N.l(e),z=c(e),A=r(e,"P",{});var Ss=p(A);V=n(Ss,"Time to look at question answering! This task comes in many flavors, but the one we\u2019ll focus on in this section is called "),B=r(Ss,"EM",{});var cr=p(B);R=n(cr,"extractive"),cr.forEach(t),M=n(Ss," question answering. This involves posing questions about a document and identifying the answers as "),L=r(Ss,"EM",{});var ur=p(L);H=n(ur,"spans of text"),ur.forEach(t),X=n(Ss," in the document itself."),Ss.forEach(t),G=c(e),q(I.$$.fragment,e),U=c(e),K=r(e,"P",{});var $n=p(K);te=n($n,"We will fine-tune a BERT model on the "),Y=r($n,"A",{href:!0,rel:!0});var fr=p(Y);re=n(fr,"SQuAD dataset"),fr.forEach(t),we=n($n,", which consists of questions posed by crowdworkers on a set of Wikipedia articles. This will give us a model able to compute predictions like this one:"),$n.forEach(t),Ae=c(e),ne=r(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),p(ne).forEach(t),Le=c(e),Q=r(e,"P",{});var jn=p(Q);J=n(jn,"This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it and double-check the predictions "),De=r(jn,"A",{href:!0,rel:!0});var mr=p(De);ns=n(mr,"here"),mr.forEach(t),nt=n(jn,"."),jn.forEach(t),mt=c(e),q(ce.$$.fragment,e),ot=c(e),se=r(e,"H2",{class:!0});var ti=p(se);ge=r(ti,"A",{id:!0,class:!0,href:!0});var _u=p(ge);ue=r(_u,"SPAN",{});var wu=p(ue);q(Pe.$$.fragment,wu),wu.forEach(t),_u.forEach(t),va=c(ti),We=r(ti,"SPAN",{});var gu=p(We);xa=n(gu,"Preparing the data"),gu.forEach(t),ti.forEach(t),He=c(e),Ce=r(e,"P",{});var _r=p(Ce);Ms=n(_r,"The dataset that is used the most as an academic benchmark for extractive question answering is "),_t=r(_r,"A",{href:!0,rel:!0});var bu=p(_t);Dn=n(bu,"SQuAD"),bu.forEach(t),ya=n(_r,", so that\u2019s the one we\u2019ll use here. There is also a harder "),ye=r(_r,"A",{href:!0,rel:!0});var vu=p(ye);ka=n(vu,"SQuAD v2"),vu.forEach(t),ie=n(_r," benchmark, which includes questions that don\u2019t have an answer. As long as your own dataset contains a column for contexts, a column for questions, and a column for answers, you should be able to adapt the steps below."),_r.forEach(t),$a=c(e),ke=r(e,"H3",{class:!0});var Zp=p(ke);it=r(Zp,"A",{id:!0,class:!0,href:!0});var xu=p(it);Bs=r(xu,"SPAN",{});var yu=p(Bs);q(Qe.$$.fragment,yu),yu.forEach(t),xu.forEach(t),Pn=c(Zp),Ls=r(Zp,"SPAN",{});var ku=p(Ls);Ws=n(ku,"The SQuAD dataset"),ku.forEach(t),Zp.forEach(t),ja=c(e),rt=r(e,"P",{});var eh=p(rt);Hs=n(eh,"As usual, we can download and cache the dataset in just one step thanks to "),Qs=r(eh,"CODE",{});var $u=p(Qs);Cn=n($u,"load_dataset()"),$u.forEach(t),Vs=n(eh,":"),eh.forEach(t),qa=c(e),q(wt.$$.fragment,e),Rs=c(e),Se=r(e,"P",{});var ju=p(Se);Ea=n(ju,"We can then have a look at this object to learn more about the SQuAD dataset:"),ju.forEach(t),$e=c(e),q(gt.$$.fragment,e),os=c(e),q(bt.$$.fragment,e),Ta=c(e),he=r(e,"P",{});var qn=p(he);Sn=n(qn,"It looks like we have everything we need with the "),Gs=r(qn,"CODE",{});var qu=p(Gs);Aa=n(qu,"context"),qu.forEach(t),vt=n(qn,", "),is=r(qn,"CODE",{});var Eu=p(is);be=n(Eu,"question"),Eu.forEach(t),On=n(qn,", and "),xt=r(qn,"CODE",{});var Tu=p(xt);zn=n(Tu,"answers"),Tu.forEach(t),In=n(qn," fields, so let\u2019s print those for the first element of our training set:"),qn.forEach(t),rs=c(e),q(yt.$$.fragment,e),Da=c(e),q(Ve.$$.fragment,e),Pa=c(e),ae=r(e,"P",{});var Be=p(ae);Ca=n(Be,"The "),Re=r(Be,"CODE",{});var Au=p(Re);Sa=n(Au,"context"),Au.forEach(t),kt=n(Be," and "),ls=r(Be,"CODE",{});var Du=p(ls);ps=n(Du,"question"),Du.forEach(t),Fn=n(Be," fields are very straightforward to use. The "),hs=r(Be,"CODE",{});var Pu=p(hs);$t=n(Pu,"answers"),Pu.forEach(t),Oa=n(Be," field is a bit trickier as it comports a dictionary with two fields that are both lists. This is the format that will be expected by the "),ve=r(Be,"CODE",{});var Cu=p(ve);Nn=n(Cu,"squad"),Cu.forEach(t),Us=n(Be," metric during evaluation; if you are using your own data, you don\u2019t necessarily need to worry about putting the answers in the same format. The "),Ys=r(Be,"CODE",{});var Su=p(Ys);Mn=n(Su,"text"),Su.forEach(t),Js=n(Be," field is rather obvious, and the "),Xs=r(Be,"CODE",{});var Ou=p(Xs);Bn=n(Ou,"answer_start"),Ou.forEach(t),za=n(Be," field contains the starting character index of each answer in the context."),Be.forEach(t),Oe=c(e),fe=r(e,"P",{});var th=p(fe);Ks=n(th,"During training, there is only one possible answer. We can double-check this by using the "),Ge=r(th,"CODE",{});var zu=p(Ge);Ln=n(zu,"Dataset.filter()"),zu.forEach(t),Zs=n(th," method:"),th.forEach(t),Ia=c(e),q(lt.$$.fragment,e),jt=c(e),q(qt.$$.fragment,e),ea=c(e),me=r(e,"P",{});var Iu=p(me);Et=n(Iu,"For evaluation, however, there are several possible answers for each sample, which may be the same or different:"),Iu.forEach(t),Fa=c(e),q(Ue.$$.fragment,e),Na=c(e),q(Tt.$$.fragment,e),Ma=c(e),de=r(e,"P",{});var Fu=p(de);Wn=n(Fu,"We won\u2019t dive into the evaluation script as it will all be wrapped up by a \u{1F917} Datasets metric for us, but the short version is that some of the questions have several possible answers, and this script will compare a predicted answer to all the acceptable answers and take the best score. If we take a look at the sample at index 2, for instance:"),Fu.forEach(t),ds=c(e),q(At.$$.fragment,e),Ba=c(e),q(Ye.$$.fragment,e),La=c(e),cs=r(e,"P",{});var Nu=p(cs);ta=n(Nu,"we can see that the answer can indeed be one of the three possibilities we saw before."),Nu.forEach(t),Wa=c(e),Je=r(e,"H3",{class:!0});var sh=p(Je);pt=r(sh,"A",{id:!0,class:!0,href:!0});var Mu=p(pt);je=r(Mu,"SPAN",{});var Bu=p(je);q(Dt.$$.fragment,Bu),Bu.forEach(t),Mu.forEach(t),sa=c(sh),aa=r(sh,"SPAN",{});var Lu=p(aa);Hn=n(Lu,"Processing the training data"),Lu.forEach(t),sh.forEach(t),us=c(e),q(Pt.$$.fragment,e),Ha=c(e),Ct=r(e,"P",{});var Wu=p(Ct);fs=n(Wu,"Let\u2019s start with preprocessing the training data. The hard part will be to generate labels for the question\u2019s answer, which will be the start and end positions of the tokens corresponding to the answer inside the context."),Wu.forEach(t),Qa=c(e),St=r(e,"P",{});var Hu=p(St);Ot=n(Hu,"But let\u2019s not get ahead of ourselves. First, we need to convert the text in the input into IDs the model can make sense of, using a tokenizer:"),Hu.forEach(t),na=c(e),q(ze.$$.fragment,e),Va=c(e),_e=r(e,"P",{});var En=p(_e);zt=n(En,"As mentioned previously, we\u2019ll be fine-tuning a BERT model, but you can use any other model type as long as it has a fast tokenizer implemented. You can see all the architectures that come with a fast version in "),ht=r(En,"A",{href:!0,rel:!0});var Qu=p(ht);Z=n(Qu,"this big table"),Qu.forEach(t),Qn=n(En,", and to check that the "),It=r(En,"CODE",{});var Vu=p(It);Vn=n(Vu,"tokenizer"),Vu.forEach(t),Rn=n(En," object you\u2019re using is indeed backed by \u{1F917} Tokenizers you can look at its "),Ft=r(En,"CODE",{});var Ru=p(Ft);Gn=n(Ru,"is_fast"),Ru.forEach(t),Un=n(En," attribute:"),En.forEach(t),ms=c(e),q(Nt.$$.fragment,e),Ra=c(e),q(Xe.$$.fragment,e),Ga=c(e),_s=r(e,"P",{});var Gu=p(_s);oa=n(Gu,"We can pass to our tokenizer the question and the context together, and it will properly insert the special tokens to form a sentence like this:"),Gu.forEach(t),Ua=c(e),q(Mt.$$.fragment,e),ws=c(e),gs=r(e,"P",{});var Uu=p(gs);Yn=n(Uu,"Let\u2019s double-check:"),Uu.forEach(t),bs=c(e),q(Bt.$$.fragment,e),Ya=c(e),q(dt.$$.fragment,e),qe=c(e),vs=r(e,"P",{});var Yu=p(vs);ia=n(Yu,"The labels will then be the index of the tokens starting and ending the answer, and the model will be tasked to predicted one start and end logit per token in the input, with the theoretical labels being as follow:"),Yu.forEach(t),Ja=c(e),Ke=r(e,"DIV",{class:!0});var ah=p(Ke);Ee=r(ah,"IMG",{class:!0,src:!0,alt:!0}),Jn=c(ah),Lt=r(ah,"IMG",{class:!0,src:!0,alt:!0}),ah.forEach(t),u=c(e),F=r(e,"P",{});var wr=p(F);Ka=n(wr,"In this case the context is not too long, but some of the examples in the dataset have very long contexts that will exceed the maximum length we set (which is 384 in this case). As we saw in "),ra=r(wr,"A",{href:!0});var Ju=p(ra);ai=n(Ju,"Chapter 6"),Ju.forEach(t),ni=n(wr," when we explored the internals of the "),ct=r(wr,"CODE",{});var Xu=p(ct);oi=n(Xu,"question-answering"),Xu.forEach(t),ii=n(wr," pipeline, we will deal with long contexts by creating several training features from one sample of our dataset, with a sliding window between them."),wr.forEach(t),la=c(e),pa=r(e,"P",{});var Ku=p(pa);ri=n(Ku,"To see how this works using the current example, we can limit the length to 100 and use a sliding window of 50 tokens. As a reminder, we use:"),Ku.forEach(t),Kn=c(e),ee=r(e,"UL",{});var Tn=p(ee);ha=r(Tn,"LI",{});var Rc=p(ha);Za=r(Rc,"CODE",{});var Zu=p(Za);li=n(Zu,"max_length"),Zu.forEach(t),pi=n(Rc," to set the maximum length (here 100)"),Rc.forEach(t),hi=c(Tn),Wt=r(Tn,"LI",{});var Gc=p(Wt);en=r(Gc,"CODE",{});var ef=p(en);xe=n(ef,'truncation="only_second"'),ef.forEach(t),di=n(Gc," to truncate the context (which is in the second position) when the question with its context is too long"),Gc.forEach(t),ci=c(Tn),da=r(Tn,"LI",{});var Uc=p(da);tn=r(Uc,"CODE",{});var tf=p(tn);ui=n(tf,"stride"),tf.forEach(t),xs=n(Uc," to set the number of overlapping tokens between two successive chunks (here 50)"),Uc.forEach(t),fi=c(Tn),ca=r(Tn,"LI",{});var Yc=p(ca);Ie=r(Yc,"CODE",{});var sf=p(Ie);mi=n(sf,"return_overflowing_tokens=True"),sf.forEach(t),_i=n(Yc," to let the tokenizer know we want the overflowing tokens"),Yc.forEach(t),Tn.forEach(t),Zn=c(e),q(ys.$$.fragment,e),Ht=c(e),q(ks.$$.fragment,e),eo=c(e),Te=r(e,"P",{});var gr=p(Te);wi=n(gr,"As we can see, our example has been in split into four inputs, each of them containing the question and some part of the context. Note that the answer to the question (\u201CBernadette Soubirous\u201D) only appears in the third and last inputs, so by dealing with long contexts in this way we will create some training examples where the answer is not included in the context. For those examples, the labels will be "),sn=r(gr,"CODE",{});var af=p(sn);gi=n(af,"start_position = end_position = 0"),af.forEach(t),bi=n(gr," (so we predict the "),ut=r(gr,"CODE",{});var nf=p(ut);an=n(nf,"[CLS]"),nf.forEach(t),vi=n(gr," token). We will also set those labels in the unfortunate case where the answer has been truncated so that we only have the start (or end) of it. For the examples where the answer is fully in the context, the labels will be the index of the token where the answer starts and the index of the token where the answer ends."),gr.forEach(t),Ze=c(e),et=r(e,"P",{});var br=p(et);xi=n(br,"The dataset provides us with the start character of the answer in the context, and by adding the length of the answer, we can find the end character in the context. To map those to token indices, we will need to use the offset mappings we studied in "),ua=r(br,"A",{href:!0});var of=p(ua);$s=n(of,"Chapter 6"),of.forEach(t),yi=n(br,". We can have our tokenizer return these by passing along "),nn=r(br,"CODE",{});var rf=p(nn);ki=n(rf,"return_offsets_mapping=True"),rf.forEach(t),$i=n(br,":"),br.forEach(t),oe=c(e),q(js.$$.fragment,e),to=c(e),q(qs.$$.fragment,e),so=c(e),tt=r(e,"P",{});var vr=p(tt);ji=n(vr,"As we can see, we get back the usual input IDs, token type IDs, and attention mask, as well as the offset mapping we required and an extra key, "),on=r(vr,"CODE",{});var lf=p(on);Es=n(lf,"overflow_to_sample_mapping"),lf.forEach(t),qi=n(vr,". The corresponding value will be of use to us when we tokenize several texts at the same time (which we should do to benefit from the fact that our tokenizer is backed by Rust). Since one sample can give several features, it maps each feature to the example it originated from. Because here we only tokenized one example, we get a list of "),rn=r(vr,"CODE",{});var pf=p(rn);Ei=n(pf,"0"),pf.forEach(t),yh=n(vr,"s:"),vr.forEach(t),bl=c(e),q(ao.$$.fragment,e),vl=c(e),q(no.$$.fragment,e),xl=c(e),Ti=r(e,"P",{});var hf=p(Ti);kh=n(hf,"But if we tokenize more examples, this will become more useful:"),hf.forEach(t),yl=c(e),q(oo.$$.fragment,e),kl=c(e),q(io.$$.fragment,e),$l=c(e),Ai=r(e,"P",{});var df=p(Ai);$h=n(df,"As we can see, the first three examples (at indices 2, 3, and 4 in the training set) each gave four features and the last example (at index 5 in the training set) gave 7 features."),df.forEach(t),jl=c(e),Di=r(e,"P",{});var cf=p(Di);jh=n(cf,"This information will be useful to map each feature we get to its corresponding label. As mentioned earlier, those labels are:"),cf.forEach(t),ql=c(e),ln=r(e,"UL",{});var nh=p(ln);Pi=r(nh,"LI",{});var Jc=p(Pi);qr=r(Jc,"CODE",{});var uf=p(qr);qh=n(uf,"(0, 0)"),uf.forEach(t),Eh=n(Jc," if the answer is not in the corresponding span of the context"),Jc.forEach(t),Th=c(nh),Ts=r(nh,"LI",{});var si=p(Ts);Er=r(si,"CODE",{});var ff=p(Er);Ah=n(ff,"(start_position, end_position)"),ff.forEach(t),Dh=n(si," if the answer is in the corresponding span of the context, with "),Tr=r(si,"CODE",{});var mf=p(Tr);Ph=n(mf,"start_position"),mf.forEach(t),Ch=n(si," being the index of the token (in the input IDs) at the start of the answer and "),Ar=r(si,"CODE",{});var _f=p(Ar);Sh=n(_f,"end_position"),_f.forEach(t),Oh=n(si," being the index of the token (in the input IDs) where the answer ends"),si.forEach(t),nh.forEach(t),El=c(e),As=r(e,"P",{});var xr=p(As);zh=n(xr,"To determine which of these is the case and, if relevant, the positions of the tokens, we first find the indices that start and end the context in the input IDs. We could use the token type IDs to do this, but since those do not necessarily exist for all models (DistilBERT does not require them, for instance), we\u2019ll instead use the "),Dr=r(xr,"CODE",{});var wf=p(Dr);Ih=n(wf,"sequence_ids()"),wf.forEach(t),Fh=n(xr," method of the "),Pr=r(xr,"CODE",{});var gf=p(Pr);Nh=n(gf,"BatchEncoding"),gf.forEach(t),Mh=n(xr," our tokenizer returns."),xr.forEach(t),Tl=c(e),pn=r(e,"P",{});var oh=p(pn);Bh=n(oh,"Once we have those token indices, we look at the corresponding offsets, which are tuples of two integers representing the span of characters inside the original context. We can thus detect if the chunk of the context in this feature starts after the answer or ends before the answer begins (in which case the label is "),Cr=r(oh,"CODE",{});var bf=p(Cr);Lh=n(bf,"(0, 0)"),bf.forEach(t),Wh=n(oh,"). If that\u2019s not the case, we loop to find the first and last token of the answer:"),oh.forEach(t),Al=c(e),q(ro.$$.fragment,e),Dl=c(e),q(lo.$$.fragment,e),Pl=c(e),hn=r(e,"P",{});var ih=p(hn);Hh=n(ih,"Let\u2019s take a look at a few results to verify that our approach is correct. For the first feature we find "),Sr=r(ih,"CODE",{});var vf=p(Sr);Qh=n(vf,"(83, 85)"),vf.forEach(t),Vh=n(ih," as labels, so let\u2019s compare the theoretical answer with the decoded span of tokens from 83 to 85 (inclusive):"),ih.forEach(t),Cl=c(e),q(po.$$.fragment,e),Sl=c(e),q(ho.$$.fragment,e),Ol=c(e),dn=r(e,"P",{});var rh=p(dn);Rh=n(rh,"So that\u2019s a match! Now let\u2019s check index 4, where we set the labels to "),Or=r(rh,"CODE",{});var xf=p(Or);Gh=n(xf,"(0, 0)"),xf.forEach(t),Uh=n(rh,", which means the answer is not in the context chunk of that feature:"),rh.forEach(t),zl=c(e),q(co.$$.fragment,e),Il=c(e),q(uo.$$.fragment,e),Fl=c(e),Ci=r(e,"P",{});var yf=p(Ci);Yh=n(yf,"Indeed, we don\u2019t see the answer inside the context."),yf.forEach(t),Nl=c(e),q(cn.$$.fragment,e),Ml=c(e),Si=r(e,"P",{});var kf=p(Si);Jh=n(kf,"Now that we have seen step by step how to preprocess our training data, we can group it in a function we will apply on the whole training dataset. We\u2019ll pad every feature to the maximum length we set, as most of the contexts will be long (and the corresponding samples will be split into several features), so there is no real benefit to applying dynamic padding here:"),kf.forEach(t),Bl=c(e),q(fo.$$.fragment,e),Ll=c(e),Oi=r(e,"P",{});var $f=p(Oi);Xh=n($f,"Note that we defined two constants to determine the maximum length used as well as the length of the sliding window, and that we added a tiny bit of cleanup before tokenizing: some of the questions in the SQuAD dataset have extra spaces at the beginning and the end that don\u2019t add anything (and take up space when being tokenized if you use a model like RoBERTa), so we removed those extra spaces."),$f.forEach(t),Wl=c(e),Ds=r(e,"P",{});var yr=p(Ds);Kh=n(yr,"To apply this function to the whole training set, we use the "),zr=r(yr,"CODE",{});var jf=p(zr);Zh=n(jf,"Dataset.map()"),jf.forEach(t),ed=n(yr," method with the "),Ir=r(yr,"CODE",{});var qf=p(Ir);td=n(qf,"batched=True"),qf.forEach(t),sd=n(yr," flag. It\u2019s necessary here as we are changing the length of the dataset (since one example can give several training features):"),yr.forEach(t),Hl=c(e),q(mo.$$.fragment,e),Ql=c(e),q(_o.$$.fragment,e),Vl=c(e),zi=r(e,"P",{});var Ef=p(zi);ad=n(Ef,"As we can see, the preprocessing added roughly 1,000 features. Our training set is now ready to be used \u2014 let\u2019s dig into the preprocessing of the validation set!"),Ef.forEach(t),Rl=c(e),fa=r(e,"H3",{class:!0});var lh=p(fa);un=r(lh,"A",{id:!0,class:!0,href:!0});var Tf=p(un);Fr=r(Tf,"SPAN",{});var Af=p(Fr);q(wo.$$.fragment,Af),Af.forEach(t),Tf.forEach(t),nd=c(lh),Nr=r(lh,"SPAN",{});var Df=p(Nr);od=n(Df,"Processing the validation data"),Df.forEach(t),lh.forEach(t),Gl=c(e),Ii=r(e,"P",{});var Pf=p(Ii);id=n(Pf,"Preprocessing the validation data will be slightly easier as we don\u2019t need to generate labels (unless we want to compute a validation loss, but that number won\u2019t really help us understand how good the model is). The real joy will be to interpret the predictions of the model into spans of the original context. For this, we will just need to store both the offset mappings and some way to match each created feature to the original example it comes from. Since there is an ID column in the original dataset, we\u2019ll use that ID."),Pf.forEach(t),Ul=c(e),Ps=r(e,"P",{});var kr=p(Ps);rd=n(kr,"The only thing we\u2019ll add here is a tiny bit of cleanup of the offset mappings. They will contain offsets for the question and the context, but once we\u2019re in the post-processing stage we won\u2019t have any way to know which part of the input IDs corresponded to the context and which part was the question (the "),Mr=r(kr,"CODE",{});var Cf=p(Mr);ld=n(Cf,"sequence_ids()"),Cf.forEach(t),pd=n(kr," method we used is available for the output of the tokenizer only). So, we\u2019ll set the offsets corresponding to the question to "),Br=r(kr,"CODE",{});var Sf=p(Br);hd=n(Sf,"None"),Sf.forEach(t),dd=n(kr,":"),kr.forEach(t),Yl=c(e),q(go.$$.fragment,e),Jl=c(e),Fi=r(e,"P",{});var Of=p(Fi);cd=n(Of,"We can apply this function on the whole validation dataset like before:"),Of.forEach(t),Xl=c(e),q(bo.$$.fragment,e),Kl=c(e),q(vo.$$.fragment,e),Zl=c(e),Ni=r(e,"P",{});var zf=p(Ni);ud=n(zf,"In this case we\u2019ve only added a couple of hundred samples, so it appears the contexts in the validation dataset are a bit shorter."),zf.forEach(t),ep=c(e),Mi=r(e,"P",{});var If=p(Mi);fd=n(If,"Now that we have preprocessed all the data, we can get to the training."),If.forEach(t),tp=c(e),Vt.l(e),Bi=c(e),ma=r(e,"H3",{class:!0});var ph=p(ma);fn=r(ph,"A",{id:!0,class:!0,href:!0});var Ff=p(fn);Lr=r(Ff,"SPAN",{});var Nf=p(Lr);q(xo.$$.fragment,Nf),Nf.forEach(t),Ff.forEach(t),md=c(ph),Wr=r(ph,"SPAN",{});var Mf=p(Wr);_d=n(Mf,"Post-processing"),Mf.forEach(t),ph.forEach(t),sp=c(e),Gt.l(e),Li=c(e),mn=r(e,"P",{});var hh=p(mn);wd=n(hh,"The model will output logits for the start and end positions of the answer in the input IDs, as we saw during our exploration of the "),yo=r(hh,"A",{href:!0});var Xc=p(yo);Hr=r(Xc,"CODE",{});var Bf=p(Hr);gd=n(Bf,"question-answering"),Bf.forEach(t),bd=n(Xc," pipeline"),Xc.forEach(t),vd=n(hh,". The post-processing step will be similar to what we did there, so here\u2019s a quick reminder of the actions we took:"),hh.forEach(t),ap=c(e),ft=r(e,"UL",{});var An=p(ft);Qr=r(An,"LI",{});var Lf=p(Qr);xd=n(Lf,"We masked the start and end logits corresponding to tokens outside of the context."),Lf.forEach(t),yd=c(An),Vr=r(An,"LI",{});var Wf=p(Vr);kd=n(Wf,"We then converted the start and end logits into probabilities using a softmax."),Wf.forEach(t),$d=c(An),ko=r(An,"LI",{});var dh=p(ko);jd=n(dh,"We attributed a score to each "),Rr=r(dh,"CODE",{});var Hf=p(Rr);qd=n(Hf,"(start_token, end_token)"),Hf.forEach(t),Ed=n(dh," pair by taking the product of the corresponding two probabilities."),dh.forEach(t),Td=c(An),_a=r(An,"LI",{});var $r=p(_a);Ad=n($r,"We looked for the pair with the maximum score that yielded a valid answer (e.g., a "),Gr=r($r,"CODE",{});var Qf=p(Gr);Dd=n(Qf,"start_token"),Qf.forEach(t),Pd=n($r," lower than "),Ur=r($r,"CODE",{});var Vf=p(Ur);Cd=n(Vf,"end_token"),Vf.forEach(t),Sd=n($r,")."),$r.forEach(t),An.forEach(t),np=c(e),Fe=r(e,"P",{});var Os=p(Fe);Od=n(Os,"Here we will change this process slightly because we don\u2019t need to compute actual scores (just the predicted answer). This means we can skip the softmax step. To go faster, we also won\u2019t score all the possible "),Yr=r(Os,"CODE",{});var Rf=p(Yr);zd=n(Rf,"(start_token, end_token)"),Rf.forEach(t),Id=n(Os," pairs, but only the ones corresponding to the highest "),Jr=r(Os,"CODE",{});var Gf=p(Jr);Fd=n(Gf,"n_best"),Gf.forEach(t),Nd=n(Os," logits (with "),Xr=r(Os,"CODE",{});var Uf=p(Xr);Md=n(Uf,"n_best=20"),Uf.forEach(t),Bd=n(Os,"). Since we will skip the softmax, those scores will be logit scores, and will be obtained by taking the sum of the start and end logits (instead of the product, because of the rule "),op=Lm(Os),ip=n(Os,")."),Os.forEach(t),rp=c(e),_n=r(e,"P",{});var ch=p(_n);Ld=n(ch,"To demonstrate all of this, we will need some kind of predictions. Since we have not trained our model yet, we are going to use the default model for the QA pipeline to generate some predictions on a small part of the validation set. We can use the same processing function as before; because it relies on the global constant "),Kr=r(ch,"CODE",{});var Yf=p(Kr);Wd=n(Yf,"tokenizer"),Yf.forEach(t),Hd=n(ch,", we just have to change that object to the tokenizer of the model we want to use temporarily:"),ch.forEach(t),lp=c(e),q($o.$$.fragment,e),pp=c(e),Wi=r(e,"P",{});var Jf=p(Wi);Qd=n(Jf,"Now that the preprocessing is done, we change the tokenizer back to the one we originally picked:"),Jf.forEach(t),hp=c(e),q(jo.$$.fragment,e),dp=c(e),wn=r(e,"P",{});var uh=p(wn);Vd=n(uh,"We then remove the columns of our "),Zr=r(uh,"CODE",{});var Xf=p(Zr);Rd=n(Xf,"eval_set"),Xf.forEach(t),Gd=n(uh," that are not expected by the model, build a batch with all of that small validation set, and pass it through the model. If a GPU is available, we use it to go faster:"),uh.forEach(t),cp=c(e),Yt.l(e),Hi=c(e),Ne=r(e,"P",{});var zs=p(Ne);Ud=n(zs,"Now, we need to find the predicted answer for each example in our "),el=r(zs,"CODE",{});var Kf=p(el);Yd=n(Kf,"small_eval_set"),Kf.forEach(t),Jd=n(zs,". One example may have been split into several features in "),tl=r(zs,"CODE",{});var Zf=p(tl);Xd=n(Zf,"eval_set"),Zf.forEach(t),Kd=n(zs,", so the first step is to map each example in "),sl=r(zs,"CODE",{});var em=p(sl);Zd=n(em,"small_eval_set"),em.forEach(t),ec=n(zs," to the corresponding features in "),al=r(zs,"CODE",{});var tm=p(al);tc=n(tm,"eval_set"),tm.forEach(t),sc=n(zs,":"),zs.forEach(t),up=c(e),q(qo.$$.fragment,e),fp=c(e),gn=r(e,"P",{});var fh=p(gn);ac=n(fh,"With this in hand, we can really get to work by looping through all the examples and, for each example, through all the associated features. As we said before, we\u2019ll look at the logit scores for the "),nl=r(fh,"CODE",{});var sm=p(nl);nc=n(sm,"n_best"),sm.forEach(t),oc=n(fh," start logits and end logits, excluding positions that give:"),fh.forEach(t),mp=c(e),Cs=r(e,"UL",{});var jr=p(Cs);ol=r(jr,"LI",{});var am=p(ol);ic=n(am,"An answer that wouldn\u2019t be inside the context"),am.forEach(t),rc=c(jr),il=r(jr,"LI",{});var nm=p(il);lc=n(nm,"An answer with negative length"),nm.forEach(t),pc=c(jr),Eo=r(jr,"LI",{});var mh=p(Eo);hc=n(mh,"An answer that is too long (we limit the possibilities at "),rl=r(mh,"CODE",{});var om=p(rl);dc=n(om,"max_answer_length=30"),om.forEach(t),cc=n(mh,")"),mh.forEach(t),jr.forEach(t),_p=c(e),Qi=r(e,"P",{});var im=p(Qi);uc=n(im,"Once we have all the scored possible answers for one example, we just pick the one with the best logit score:"),im.forEach(t),wp=c(e),q(To.$$.fragment,e),gp=c(e),Vi=r(e,"P",{});var rm=p(Vi);fc=n(rm,"The final format of the predicted answers is the one that will be expected by the metric we will use. As usual, we can load it with the help of the \u{1F917} Datasets library:"),rm.forEach(t),bp=c(e),q(Ao.$$.fragment,e),vp=c(e),Ri=r(e,"P",{});var lm=p(Ri);mc=n(lm,"This metric expects the predicted answers in the format we saw above (a list of dictionaries with one key for the ID of the example and one key for the predicted text) and the theoretical answers in the format below (a list of dictionaries with one key for the ID of the example and one key for the possible answers):"),lm.forEach(t),xp=c(e),q(Do.$$.fragment,e),yp=c(e),Gi=r(e,"P",{});var pm=p(Gi);_c=n(pm,"We can now check that we get sensible results by looking at the first element of both lists:"),pm.forEach(t),kp=c(e),q(Po.$$.fragment,e),$p=c(e),q(Co.$$.fragment,e),jp=c(e),Ui=r(e,"P",{});var hm=p(Ui);wc=n(hm,"Not too bad! Now let\u2019s have a look at the score the metric gives us:"),hm.forEach(t),qp=c(e),q(So.$$.fragment,e),Ep=c(e),q(Oo.$$.fragment,e),Tp=c(e),bn=r(e,"P",{});var _h=p(bn);gc=n(_h,"Again, that\u2019s rather good considering that according to "),zo=r(_h,"A",{href:!0,rel:!0});var dm=p(zo);bc=n(dm,"its paper"),dm.forEach(t),vc=n(_h," DistilBERT fine-tuned on SQuAD obtains 79.1 and 86.9 for those scores on the whole dataset."),_h.forEach(t),Ap=c(e),ba.l(e),Yi=c(e),q(Io.$$.fragment,e),Dp=c(e),Ji=r(e,"P",{});var cm=p(Ji);xc=n(cm,"We can check it works on our predictions:"),cm.forEach(t),Pp=c(e),q(Fo.$$.fragment,e),Cp=c(e),q(No.$$.fragment,e),Sp=c(e),Xi=r(e,"P",{});var um=p(Xi);yc=n(um,"Looking good! Now let\u2019s use this to fine-tune our model."),um.forEach(t),Op=c(e),wa=r(e,"H3",{class:!0});var wh=p(wa);vn=r(wh,"A",{id:!0,class:!0,href:!0});var fm=p(vn);ll=r(fm,"SPAN",{});var mm=p(ll);q(Mo.$$.fragment,mm),mm.forEach(t),fm.forEach(t),kc=c(wh),pl=r(wh,"SPAN",{});var _m=p(pl);$c=n(_m,"Fine-tuning the model"),_m.forEach(t),wh.forEach(t),zp=c(e),Xt.l(e),Ki=c(e),Zi=r(e,"P",{});var wm=p(Zi);jc=n(wm,"As usual, we get a warning that some weights are not used (the ones from the pretraining head) and some others are initialized randomly (the ones for the question answering head). You should be used to this by now, but that means this model is not ready to be used just yet and needs fine-tuning \u2014 good thing we\u2019re about to do that!"),wm.forEach(t),Ip=c(e),er=r(e,"P",{});var gm=p(er);qc=n(gm,"To be able to push our model to the Hub, we\u2019ll need to log in to Hugging Face. If you\u2019re running this code in a notebook, you can do so with the following utility function, which displays a widget where you can enter your login credentials:"),gm.forEach(t),Fp=c(e),q(Bo.$$.fragment,e),Np=c(e),tr=r(e,"P",{});var bm=p(tr);Ec=n(bm,"If you aren\u2019t working in a notebook, just type the following line in your terminal:"),bm.forEach(t),Mp=c(e),q(Lo.$$.fragment,e),Bp=c(e),Zt.l(e),sr=c(e),Me=r(e,"P",{});var Is=p(Me);Tc=n(Is,"By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be in "),hl=r(Is,"CODE",{});var vm=p(hl);Ac=n(vm,'"sgugger/bert-finetuned-squad"'),vm.forEach(t),Dc=n(Is,". We can override this by passing a "),dl=r(Is,"CODE",{});var xm=p(dl);Pc=n(xm,"hub_model_id"),xm.forEach(t),Cc=n(Is,"; for instance, to push the model to the "),cl=r(Is,"CODE",{});var ym=p(cl);Sc=n(ym,"huggingface_course"),ym.forEach(t),Oc=n(Is," organization we used "),ul=r(Is,"CODE",{});var km=p(ul);zc=n(km,'hub_model_id="huggingface_course/bert-finetuned-squad"'),km.forEach(t),Ic=n(Is," (which is the model we linked to at the beginning of this section)."),Is.forEach(t),Lp=c(e),ts.l(e),ar=c(e),nr=r(e,"P",{});var $m=p(nr);Fc=n($m,"Note that while the training happens, each time the model is saved (here, every epoch) it is uploaded to the Hub in the background. This way, you will be able to to resume your training on another machine if necessary. The whole training takes a while (a little over an hour on a Titan RTX), so you can grab a coffee or reread some of the parts of the course that you\u2019ve found more challenging while it proceeds. Also note that as soon as the first epoch is finished, you will see some weights uploaded to the Hub and you can start playing with your model on its page."),$m.forEach(t),Wp=c(e),as.l(e),or=c(e),q(Wo.$$.fragment,e),Hp=c(e),ir=r(e,"P",{});var jm=p(ir);Nc=n(jm,"Great! As a comparison, the baseline scores reported in the BERT article for this model are 80.8 and 88.5, so we\u2019re right where we should be."),jm.forEach(t),Qp=c(e),le&&le.l(e),rr=c(e),lr=r(e,"P",{});var qm=p(lr);Mc=n(qm,"At this stage, you can use the inference widget on the Model Hub to test the model and share it with your friends, family, and favorite pets. You have successfully fine-tuned a model on a question answering task \u2014 congratulations!"),qm.forEach(t),Vp=c(e),q(xn.$$.fragment,e),Rp=c(e),pe&&pe.l(e),pr=c(e),ga=r(e,"H2",{class:!0});var gh=p(ga);yn=r(gh,"A",{id:!0,class:!0,href:!0});var Em=p(yn);fl=r(Em,"SPAN",{});var Tm=p(fl);q(Ho.$$.fragment,Tm),Tm.forEach(t),Em.forEach(t),Bc=c(gh),ml=r(gh,"SPAN",{});var Am=p(ml);Lc=n(Am,"Using the fine-tuned model"),Am.forEach(t),gh.forEach(t),Gp=c(e),kn=r(e,"P",{});var bh=p(kn);Wc=n(bh,"We\u2019ve already shown you how you can use the model we fine-tuned on the Model Hub with the inference widget. To use it locally in a "),_l=r(bh,"CODE",{});var Dm=p(_l);Hc=n(Dm,"pipeline"),Dm.forEach(t),Qc=n(bh,", you just have to specify the model identifier:"),bh.forEach(t),Up=c(e),q(Qo.$$.fragment,e),Yp=c(e),q(Vo.$$.fragment,e),Jp=c(e),hr=r(e,"P",{});var Pm=p(hr);Vc=n(Pm,"Great! Our model is working as well as the default one for this pipeline!"),Pm.forEach(t),this.h()},h(){P(h,"name","hf:doc:metadata"),P(h,"content",JSON.stringify(u_)),P(b,"id","question-answering"),P(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(b,"href","#question-answering"),P(D,"class","relative group"),P(Y,"href","https://rajpurkar.github.io/SQuAD-explorer/"),P(Y,"rel","nofollow"),Kc(ne.src,at="https://hf.space/gradioiframe/course-demos/bert-finetuned-squad/+")||P(ne,"src",at),P(ne,"frameborder","0"),P(ne,"height","450"),P(ne,"title","Gradio app"),P(ne,"class","block dark:hidden container p-0 flex-grow space-iframe"),P(ne,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),P(ne,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),P(De,"href","https://huggingface.co/huggingface-course/bert-finetuned-squad?context=%F0%9F%A4%97+Transformers+is+backed+by+the+three+most+popular+deep+learning+libraries+%E2%80%94+Jax%2C+PyTorch+and+TensorFlow+%E2%80%94+with+a+seamless+integration+between+them.+It%27s+straightforward+to+train+your+models+with+one+before+loading+them+for+inference+with+the+other.&question=Which+deep+learning+libraries+back+%F0%9F%A4%97+Transformers%3F"),P(De,"rel","nofollow"),P(ge,"id","preparing-the-data"),P(ge,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(ge,"href","#preparing-the-data"),P(se,"class","relative group"),P(_t,"href","https://rajpurkar.github.io/SQuAD-explorer/"),P(_t,"rel","nofollow"),P(ye,"href","https://huggingface.co/datasets/squad_v2"),P(ye,"rel","nofollow"),P(it,"id","the-squad-dataset"),P(it,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(it,"href","#the-squad-dataset"),P(ke,"class","relative group"),P(pt,"id","processing-the-training-data"),P(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(pt,"href","#processing-the-training-data"),P(Je,"class","relative group"),P(ht,"href","https://huggingface.co/transformers/#supported-frameworks"),P(ht,"rel","nofollow"),P(Ee,"class","block dark:hidden"),Kc(Ee.src,Xa="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/qa_labels.svg")||P(Ee,"src",Xa),P(Ee,"alt","One-hot encoded labels for question answering."),P(Lt,"class","hidden dark:block"),Kc(Lt.src,Xn="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/qa_labels-dark.svg")||P(Lt,"src",Xn),P(Lt,"alt","One-hot encoded labels for question answering."),P(Ke,"class","flex justify-center"),P(ra,"href","/course/chapter6/4"),P(ua,"href","/course/chapter6/4"),P(un,"id","processing-the-validation-data"),P(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(un,"href","#processing-the-validation-data"),P(fa,"class","relative group"),P(fn,"id","postprocessing"),P(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(fn,"href","#postprocessing"),P(ma,"class","relative group"),P(yo,"href","/course/chapter6/3b"),op.a=ip,P(zo,"href","https://arxiv.org/abs/1910.01108v2"),P(zo,"rel","nofollow"),P(vn,"id","finetuning-the-model"),P(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(vn,"href","#finetuning-the-model"),P(wa,"class","relative group"),P(yn,"id","using-the-finetuned-model"),P(yn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(yn,"href","#using-the-finetuned-model"),P(ga,"class","relative group")},m(e,l){s(document.head,h),o(e,g,l),E(f,e,l),o(e,x,l),o(e,D,l),s(D,b),s(b,$),E(y,$,null),s(D,m),s(D,O),s(O,k),o(e,v,l),Ro[C].m(e,l),o(e,z,l),o(e,A,l),s(A,V),s(A,B),s(B,R),s(A,M),s(A,L),s(L,H),s(A,X),o(e,G,l),E(I,e,l),o(e,U,l),o(e,K,l),s(K,te),s(K,Y),s(Y,re),s(K,we),o(e,Ae,l),o(e,ne,l),o(e,Le,l),o(e,Q,l),s(Q,J),s(Q,De),s(De,ns),s(Q,nt),o(e,mt,l),E(ce,e,l),o(e,ot,l),o(e,se,l),s(se,ge),s(ge,ue),E(Pe,ue,null),s(se,va),s(se,We),s(We,xa),o(e,He,l),o(e,Ce,l),s(Ce,Ms),s(Ce,_t),s(_t,Dn),s(Ce,ya),s(Ce,ye),s(ye,ka),s(Ce,ie),o(e,$a,l),o(e,ke,l),s(ke,it),s(it,Bs),E(Qe,Bs,null),s(ke,Pn),s(ke,Ls),s(Ls,Ws),o(e,ja,l),o(e,rt,l),s(rt,Hs),s(rt,Qs),s(Qs,Cn),s(rt,Vs),o(e,qa,l),E(wt,e,l),o(e,Rs,l),o(e,Se,l),s(Se,Ea),o(e,$e,l),E(gt,e,l),o(e,os,l),E(bt,e,l),o(e,Ta,l),o(e,he,l),s(he,Sn),s(he,Gs),s(Gs,Aa),s(he,vt),s(he,is),s(is,be),s(he,On),s(he,xt),s(xt,zn),s(he,In),o(e,rs,l),E(yt,e,l),o(e,Da,l),E(Ve,e,l),o(e,Pa,l),o(e,ae,l),s(ae,Ca),s(ae,Re),s(Re,Sa),s(ae,kt),s(ae,ls),s(ls,ps),s(ae,Fn),s(ae,hs),s(hs,$t),s(ae,Oa),s(ae,ve),s(ve,Nn),s(ae,Us),s(ae,Ys),s(Ys,Mn),s(ae,Js),s(ae,Xs),s(Xs,Bn),s(ae,za),o(e,Oe,l),o(e,fe,l),s(fe,Ks),s(fe,Ge),s(Ge,Ln),s(fe,Zs),o(e,Ia,l),E(lt,e,l),o(e,jt,l),E(qt,e,l),o(e,ea,l),o(e,me,l),s(me,Et),o(e,Fa,l),E(Ue,e,l),o(e,Na,l),E(Tt,e,l),o(e,Ma,l),o(e,de,l),s(de,Wn),o(e,ds,l),E(At,e,l),o(e,Ba,l),E(Ye,e,l),o(e,La,l),o(e,cs,l),s(cs,ta),o(e,Wa,l),o(e,Je,l),s(Je,pt),s(pt,je),E(Dt,je,null),s(Je,sa),s(Je,aa),s(aa,Hn),o(e,us,l),E(Pt,e,l),o(e,Ha,l),o(e,Ct,l),s(Ct,fs),o(e,Qa,l),o(e,St,l),s(St,Ot),o(e,na,l),E(ze,e,l),o(e,Va,l),o(e,_e,l),s(_e,zt),s(_e,ht),s(ht,Z),s(_e,Qn),s(_e,It),s(It,Vn),s(_e,Rn),s(_e,Ft),s(Ft,Gn),s(_e,Un),o(e,ms,l),E(Nt,e,l),o(e,Ra,l),E(Xe,e,l),o(e,Ga,l),o(e,_s,l),s(_s,oa),o(e,Ua,l),E(Mt,e,l),o(e,ws,l),o(e,gs,l),s(gs,Yn),o(e,bs,l),E(Bt,e,l),o(e,Ya,l),E(dt,e,l),o(e,qe,l),o(e,vs,l),s(vs,ia),o(e,Ja,l),o(e,Ke,l),s(Ke,Ee),s(Ke,Jn),s(Ke,Lt),o(e,u,l),o(e,F,l),s(F,Ka),s(F,ra),s(ra,ai),s(F,ni),s(F,ct),s(ct,oi),s(F,ii),o(e,la,l),o(e,pa,l),s(pa,ri),o(e,Kn,l),o(e,ee,l),s(ee,ha),s(ha,Za),s(Za,li),s(ha,pi),s(ee,hi),s(ee,Wt),s(Wt,en),s(en,xe),s(Wt,di),s(ee,ci),s(ee,da),s(da,tn),s(tn,ui),s(da,xs),s(ee,fi),s(ee,ca),s(ca,Ie),s(Ie,mi),s(ca,_i),o(e,Zn,l),E(ys,e,l),o(e,Ht,l),E(ks,e,l),o(e,eo,l),o(e,Te,l),s(Te,wi),s(Te,sn),s(sn,gi),s(Te,bi),s(Te,ut),s(ut,an),s(Te,vi),o(e,Ze,l),o(e,et,l),s(et,xi),s(et,ua),s(ua,$s),s(et,yi),s(et,nn),s(nn,ki),s(et,$i),o(e,oe,l),E(js,e,l),o(e,to,l),E(qs,e,l),o(e,so,l),o(e,tt,l),s(tt,ji),s(tt,on),s(on,Es),s(tt,qi),s(tt,rn),s(rn,Ei),s(tt,yh),o(e,bl,l),E(ao,e,l),o(e,vl,l),E(no,e,l),o(e,xl,l),o(e,Ti,l),s(Ti,kh),o(e,yl,l),E(oo,e,l),o(e,kl,l),E(io,e,l),o(e,$l,l),o(e,Ai,l),s(Ai,$h),o(e,jl,l),o(e,Di,l),s(Di,jh),o(e,ql,l),o(e,ln,l),s(ln,Pi),s(Pi,qr),s(qr,qh),s(Pi,Eh),s(ln,Th),s(ln,Ts),s(Ts,Er),s(Er,Ah),s(Ts,Dh),s(Ts,Tr),s(Tr,Ph),s(Ts,Ch),s(Ts,Ar),s(Ar,Sh),s(Ts,Oh),o(e,El,l),o(e,As,l),s(As,zh),s(As,Dr),s(Dr,Ih),s(As,Fh),s(As,Pr),s(Pr,Nh),s(As,Mh),o(e,Tl,l),o(e,pn,l),s(pn,Bh),s(pn,Cr),s(Cr,Lh),s(pn,Wh),o(e,Al,l),E(ro,e,l),o(e,Dl,l),E(lo,e,l),o(e,Pl,l),o(e,hn,l),s(hn,Hh),s(hn,Sr),s(Sr,Qh),s(hn,Vh),o(e,Cl,l),E(po,e,l),o(e,Sl,l),E(ho,e,l),o(e,Ol,l),o(e,dn,l),s(dn,Rh),s(dn,Or),s(Or,Gh),s(dn,Uh),o(e,zl,l),E(co,e,l),o(e,Il,l),E(uo,e,l),o(e,Fl,l),o(e,Ci,l),s(Ci,Yh),o(e,Nl,l),E(cn,e,l),o(e,Ml,l),o(e,Si,l),s(Si,Jh),o(e,Bl,l),E(fo,e,l),o(e,Ll,l),o(e,Oi,l),s(Oi,Xh),o(e,Wl,l),o(e,Ds,l),s(Ds,Kh),s(Ds,zr),s(zr,Zh),s(Ds,ed),s(Ds,Ir),s(Ir,td),s(Ds,sd),o(e,Hl,l),E(mo,e,l),o(e,Ql,l),E(_o,e,l),o(e,Vl,l),o(e,zi,l),s(zi,ad),o(e,Rl,l),o(e,fa,l),s(fa,un),s(un,Fr),E(wo,Fr,null),s(fa,nd),s(fa,Nr),s(Nr,od),o(e,Gl,l),o(e,Ii,l),s(Ii,id),o(e,Ul,l),o(e,Ps,l),s(Ps,rd),s(Ps,Mr),s(Mr,ld),s(Ps,pd),s(Ps,Br),s(Br,hd),s(Ps,dd),o(e,Yl,l),E(go,e,l),o(e,Jl,l),o(e,Fi,l),s(Fi,cd),o(e,Xl,l),E(bo,e,l),o(e,Kl,l),E(vo,e,l),o(e,Zl,l),o(e,Ni,l),s(Ni,ud),o(e,ep,l),o(e,Mi,l),s(Mi,fd),o(e,tp,l),Go[Qt].m(e,l),o(e,Bi,l),o(e,ma,l),s(ma,fn),s(fn,Lr),E(xo,Lr,null),s(ma,md),s(ma,Wr),s(Wr,_d),o(e,sp,l),Uo[Rt].m(e,l),o(e,Li,l),o(e,mn,l),s(mn,wd),s(mn,yo),s(yo,Hr),s(Hr,gd),s(yo,bd),s(mn,vd),o(e,ap,l),o(e,ft,l),s(ft,Qr),s(Qr,xd),s(ft,yd),s(ft,Vr),s(Vr,kd),s(ft,$d),s(ft,ko),s(ko,jd),s(ko,Rr),s(Rr,qd),s(ko,Ed),s(ft,Td),s(ft,_a),s(_a,Ad),s(_a,Gr),s(Gr,Dd),s(_a,Pd),s(_a,Ur),s(Ur,Cd),s(_a,Sd),o(e,np,l),o(e,Fe,l),s(Fe,Od),s(Fe,Yr),s(Yr,zd),s(Fe,Id),s(Fe,Jr),s(Jr,Fd),s(Fe,Nd),s(Fe,Xr),s(Xr,Md),s(Fe,Bd),op.m(zm,Fe),s(Fe,ip),o(e,rp,l),o(e,_n,l),s(_n,Ld),s(_n,Kr),s(Kr,Wd),s(_n,Hd),o(e,lp,l),E($o,e,l),o(e,pp,l),o(e,Wi,l),s(Wi,Qd),o(e,hp,l),E(jo,e,l),o(e,dp,l),o(e,wn,l),s(wn,Vd),s(wn,Zr),s(Zr,Rd),s(wn,Gd),o(e,cp,l),Yo[Ut].m(e,l),o(e,Hi,l),o(e,Ne,l),s(Ne,Ud),s(Ne,el),s(el,Yd),s(Ne,Jd),s(Ne,tl),s(tl,Xd),s(Ne,Kd),s(Ne,sl),s(sl,Zd),s(Ne,ec),s(Ne,al),s(al,tc),s(Ne,sc),o(e,up,l),E(qo,e,l),o(e,fp,l),o(e,gn,l),s(gn,ac),s(gn,nl),s(nl,nc),s(gn,oc),o(e,mp,l),o(e,Cs,l),s(Cs,ol),s(ol,ic),s(Cs,rc),s(Cs,il),s(il,lc),s(Cs,pc),s(Cs,Eo),s(Eo,hc),s(Eo,rl),s(rl,dc),s(Eo,cc),o(e,_p,l),o(e,Qi,l),s(Qi,uc),o(e,wp,l),E(To,e,l),o(e,gp,l),o(e,Vi,l),s(Vi,fc),o(e,bp,l),E(Ao,e,l),o(e,vp,l),o(e,Ri,l),s(Ri,mc),o(e,xp,l),E(Do,e,l),o(e,yp,l),o(e,Gi,l),s(Gi,_c),o(e,kp,l),E(Po,e,l),o(e,$p,l),E(Co,e,l),o(e,jp,l),o(e,Ui,l),s(Ui,wc),o(e,qp,l),E(So,e,l),o(e,Ep,l),E(Oo,e,l),o(e,Tp,l),o(e,bn,l),s(bn,gc),s(bn,zo),s(zo,bc),s(bn,vc),o(e,Ap,l),ba.m(e,l),o(e,Yi,l),E(Io,e,l),o(e,Dp,l),o(e,Ji,l),s(Ji,xc),o(e,Pp,l),E(Fo,e,l),o(e,Cp,l),E(No,e,l),o(e,Sp,l),o(e,Xi,l),s(Xi,yc),o(e,Op,l),o(e,wa,l),s(wa,vn),s(vn,ll),E(Mo,ll,null),s(wa,kc),s(wa,pl),s(pl,$c),o(e,zp,l),Jo[Jt].m(e,l),o(e,Ki,l),o(e,Zi,l),s(Zi,jc),o(e,Ip,l),o(e,er,l),s(er,qc),o(e,Fp,l),E(Bo,e,l),o(e,Np,l),o(e,tr,l),s(tr,Ec),o(e,Mp,l),E(Lo,e,l),o(e,Bp,l),Xo[Kt].m(e,l),o(e,sr,l),o(e,Me,l),s(Me,Tc),s(Me,hl),s(hl,Ac),s(Me,Dc),s(Me,dl),s(dl,Pc),s(Me,Cc),s(Me,cl),s(cl,Sc),s(Me,Oc),s(Me,ul),s(ul,zc),s(Me,Ic),o(e,Lp,l),Ko[es].m(e,l),o(e,ar,l),o(e,nr,l),s(nr,Fc),o(e,Wp,l),Zo[ss].m(e,l),o(e,or,l),E(Wo,e,l),o(e,Hp,l),o(e,ir,l),s(ir,Nc),o(e,Qp,l),le&&le.m(e,l),o(e,rr,l),o(e,lr,l),s(lr,Mc),o(e,Vp,l),E(xn,e,l),o(e,Rp,l),pe&&pe.m(e,l),o(e,pr,l),o(e,ga,l),s(ga,yn),s(yn,fl),E(Ho,fl,null),s(ga,Bc),s(ga,ml),s(ml,Lc),o(e,Gp,l),o(e,kn,l),s(kn,Wc),s(kn,_l),s(_l,Hc),s(kn,Qc),o(e,Up,l),E(Qo,e,l),o(e,Yp,l),E(Vo,e,l),o(e,Jp,l),o(e,hr,l),s(hr,Vc),Xp=!0},p(e,[l]){const ei={};l&1&&(ei.fw=e[0]),f.$set(ei);let dr=C;C=eu(e),C!==dr&&(Ns(),w(Ro[dr],1,1,()=>{Ro[dr]=null}),Fs(),N=Ro[C],N||(N=Ro[C]=Zc[C](e),N.c()),_(N,1),N.m(z.parentNode,z));const wl={};l&2&&(wl.$$scope={dirty:l,ctx:e}),ce.$set(wl);const gl={};l&2&&(gl.$$scope={dirty:l,ctx:e}),cn.$set(gl);let Ss=Qt;Qt=su(e),Qt!==Ss&&(Ns(),w(Go[Ss],1,1,()=>{Go[Ss]=null}),Fs(),Vt=Go[Qt],Vt||(Vt=Go[Qt]=tu[Qt](e),Vt.c()),_(Vt,1),Vt.m(Bi.parentNode,Bi));let cr=Rt;Rt=nu(e),Rt!==cr&&(Ns(),w(Uo[cr],1,1,()=>{Uo[cr]=null}),Fs(),Gt=Uo[Rt],Gt||(Gt=Uo[Rt]=au[Rt](e),Gt.c()),_(Gt,1),Gt.m(Li.parentNode,Li));let ur=Ut;Ut=iu(e),Ut!==ur&&(Ns(),w(Yo[ur],1,1,()=>{Yo[ur]=null}),Fs(),Yt=Yo[Ut],Yt||(Yt=Yo[Ut]=ou[Ut](e),Yt.c()),_(Yt,1),Yt.m(Hi.parentNode,Hi)),Kp!==(Kp=ru(e))&&(ba.d(1),ba=Kp(e),ba&&(ba.c(),ba.m(Yi.parentNode,Yi)));let $n=Jt;Jt=pu(e),Jt!==$n&&(Ns(),w(Jo[$n],1,1,()=>{Jo[$n]=null}),Fs(),Xt=Jo[Jt],Xt||(Xt=Jo[Jt]=lu[Jt](e),Xt.c()),_(Xt,1),Xt.m(Ki.parentNode,Ki));let fr=Kt;Kt=du(e),Kt!==fr&&(Ns(),w(Xo[fr],1,1,()=>{Xo[fr]=null}),Fs(),Zt=Xo[Kt],Zt||(Zt=Xo[Kt]=hu[Kt](e),Zt.c()),_(Zt,1),Zt.m(sr.parentNode,sr));let jn=es;es=uu(e),es!==jn&&(Ns(),w(Ko[jn],1,1,()=>{Ko[jn]=null}),Fs(),ts=Ko[es],ts||(ts=Ko[es]=cu[es](e),ts.c()),_(ts,1),ts.m(ar.parentNode,ar));let mr=ss;ss=mu(e),ss!==mr&&(Ns(),w(Zo[mr],1,1,()=>{Zo[mr]=null}),Fs(),as=Zo[ss],as||(as=Zo[ss]=fu[ss](e),as.c()),_(as,1),as.m(or.parentNode,or)),e[0]==="pt"?le?l&1&&_(le,1):(le=Cm(),le.c(),_(le,1),le.m(rr.parentNode,rr)):le&&(Ns(),w(le,1,1,()=>{le=null}),Fs());const ti={};l&2&&(ti.$$scope={dirty:l,ctx:e}),xn.$set(ti),e[0]==="pt"?pe?l&1&&_(pe,1):(pe=Sm(),pe.c(),_(pe,1),pe.m(pr.parentNode,pr)):pe&&(Ns(),w(pe,1,1,()=>{pe=null}),Fs())},i(e){Xp||(_(f.$$.fragment,e),_(y.$$.fragment,e),_(N),_(I.$$.fragment,e),_(ce.$$.fragment,e),_(Pe.$$.fragment,e),_(Qe.$$.fragment,e),_(wt.$$.fragment,e),_(gt.$$.fragment,e),_(bt.$$.fragment,e),_(yt.$$.fragment,e),_(Ve.$$.fragment,e),_(lt.$$.fragment,e),_(qt.$$.fragment,e),_(Ue.$$.fragment,e),_(Tt.$$.fragment,e),_(At.$$.fragment,e),_(Ye.$$.fragment,e),_(Dt.$$.fragment,e),_(Pt.$$.fragment,e),_(ze.$$.fragment,e),_(Nt.$$.fragment,e),_(Xe.$$.fragment,e),_(Mt.$$.fragment,e),_(Bt.$$.fragment,e),_(dt.$$.fragment,e),_(ys.$$.fragment,e),_(ks.$$.fragment,e),_(js.$$.fragment,e),_(qs.$$.fragment,e),_(ao.$$.fragment,e),_(no.$$.fragment,e),_(oo.$$.fragment,e),_(io.$$.fragment,e),_(ro.$$.fragment,e),_(lo.$$.fragment,e),_(po.$$.fragment,e),_(ho.$$.fragment,e),_(co.$$.fragment,e),_(uo.$$.fragment,e),_(cn.$$.fragment,e),_(fo.$$.fragment,e),_(mo.$$.fragment,e),_(_o.$$.fragment,e),_(wo.$$.fragment,e),_(go.$$.fragment,e),_(bo.$$.fragment,e),_(vo.$$.fragment,e),_(Vt),_(xo.$$.fragment,e),_(Gt),_($o.$$.fragment,e),_(jo.$$.fragment,e),_(Yt),_(qo.$$.fragment,e),_(To.$$.fragment,e),_(Ao.$$.fragment,e),_(Do.$$.fragment,e),_(Po.$$.fragment,e),_(Co.$$.fragment,e),_(So.$$.fragment,e),_(Oo.$$.fragment,e),_(Io.$$.fragment,e),_(Fo.$$.fragment,e),_(No.$$.fragment,e),_(Mo.$$.fragment,e),_(Xt),_(Bo.$$.fragment,e),_(Lo.$$.fragment,e),_(Zt),_(ts),_(as),_(Wo.$$.fragment,e),_(le),_(xn.$$.fragment,e),_(pe),_(Ho.$$.fragment,e),_(Qo.$$.fragment,e),_(Vo.$$.fragment,e),Xp=!0)},o(e){w(f.$$.fragment,e),w(y.$$.fragment,e),w(N),w(I.$$.fragment,e),w(ce.$$.fragment,e),w(Pe.$$.fragment,e),w(Qe.$$.fragment,e),w(wt.$$.fragment,e),w(gt.$$.fragment,e),w(bt.$$.fragment,e),w(yt.$$.fragment,e),w(Ve.$$.fragment,e),w(lt.$$.fragment,e),w(qt.$$.fragment,e),w(Ue.$$.fragment,e),w(Tt.$$.fragment,e),w(At.$$.fragment,e),w(Ye.$$.fragment,e),w(Dt.$$.fragment,e),w(Pt.$$.fragment,e),w(ze.$$.fragment,e),w(Nt.$$.fragment,e),w(Xe.$$.fragment,e),w(Mt.$$.fragment,e),w(Bt.$$.fragment,e),w(dt.$$.fragment,e),w(ys.$$.fragment,e),w(ks.$$.fragment,e),w(js.$$.fragment,e),w(qs.$$.fragment,e),w(ao.$$.fragment,e),w(no.$$.fragment,e),w(oo.$$.fragment,e),w(io.$$.fragment,e),w(ro.$$.fragment,e),w(lo.$$.fragment,e),w(po.$$.fragment,e),w(ho.$$.fragment,e),w(co.$$.fragment,e),w(uo.$$.fragment,e),w(cn.$$.fragment,e),w(fo.$$.fragment,e),w(mo.$$.fragment,e),w(_o.$$.fragment,e),w(wo.$$.fragment,e),w(go.$$.fragment,e),w(bo.$$.fragment,e),w(vo.$$.fragment,e),w(Vt),w(xo.$$.fragment,e),w(Gt),w($o.$$.fragment,e),w(jo.$$.fragment,e),w(Yt),w(qo.$$.fragment,e),w(To.$$.fragment,e),w(Ao.$$.fragment,e),w(Do.$$.fragment,e),w(Po.$$.fragment,e),w(Co.$$.fragment,e),w(So.$$.fragment,e),w(Oo.$$.fragment,e),w(Io.$$.fragment,e),w(Fo.$$.fragment,e),w(No.$$.fragment,e),w(Mo.$$.fragment,e),w(Xt),w(Bo.$$.fragment,e),w(Lo.$$.fragment,e),w(Zt),w(ts),w(as),w(Wo.$$.fragment,e),w(le),w(xn.$$.fragment,e),w(pe),w(Ho.$$.fragment,e),w(Qo.$$.fragment,e),w(Vo.$$.fragment,e),Xp=!1},d(e){t(h),e&&t(g),T(f,e),e&&t(x),e&&t(D),T(y),e&&t(v),Ro[C].d(e),e&&t(z),e&&t(A),e&&t(G),T(I,e),e&&t(U),e&&t(K),e&&t(Ae),e&&t(ne),e&&t(Le),e&&t(Q),e&&t(mt),T(ce,e),e&&t(ot),e&&t(se),T(Pe),e&&t(He),e&&t(Ce),e&&t($a),e&&t(ke),T(Qe),e&&t(ja),e&&t(rt),e&&t(qa),T(wt,e),e&&t(Rs),e&&t(Se),e&&t($e),T(gt,e),e&&t(os),T(bt,e),e&&t(Ta),e&&t(he),e&&t(rs),T(yt,e),e&&t(Da),T(Ve,e),e&&t(Pa),e&&t(ae),e&&t(Oe),e&&t(fe),e&&t(Ia),T(lt,e),e&&t(jt),T(qt,e),e&&t(ea),e&&t(me),e&&t(Fa),T(Ue,e),e&&t(Na),T(Tt,e),e&&t(Ma),e&&t(de),e&&t(ds),T(At,e),e&&t(Ba),T(Ye,e),e&&t(La),e&&t(cs),e&&t(Wa),e&&t(Je),T(Dt),e&&t(us),T(Pt,e),e&&t(Ha),e&&t(Ct),e&&t(Qa),e&&t(St),e&&t(na),T(ze,e),e&&t(Va),e&&t(_e),e&&t(ms),T(Nt,e),e&&t(Ra),T(Xe,e),e&&t(Ga),e&&t(_s),e&&t(Ua),T(Mt,e),e&&t(ws),e&&t(gs),e&&t(bs),T(Bt,e),e&&t(Ya),T(dt,e),e&&t(qe),e&&t(vs),e&&t(Ja),e&&t(Ke),e&&t(u),e&&t(F),e&&t(la),e&&t(pa),e&&t(Kn),e&&t(ee),e&&t(Zn),T(ys,e),e&&t(Ht),T(ks,e),e&&t(eo),e&&t(Te),e&&t(Ze),e&&t(et),e&&t(oe),T(js,e),e&&t(to),T(qs,e),e&&t(so),e&&t(tt),e&&t(bl),T(ao,e),e&&t(vl),T(no,e),e&&t(xl),e&&t(Ti),e&&t(yl),T(oo,e),e&&t(kl),T(io,e),e&&t($l),e&&t(Ai),e&&t(jl),e&&t(Di),e&&t(ql),e&&t(ln),e&&t(El),e&&t(As),e&&t(Tl),e&&t(pn),e&&t(Al),T(ro,e),e&&t(Dl),T(lo,e),e&&t(Pl),e&&t(hn),e&&t(Cl),T(po,e),e&&t(Sl),T(ho,e),e&&t(Ol),e&&t(dn),e&&t(zl),T(co,e),e&&t(Il),T(uo,e),e&&t(Fl),e&&t(Ci),e&&t(Nl),T(cn,e),e&&t(Ml),e&&t(Si),e&&t(Bl),T(fo,e),e&&t(Ll),e&&t(Oi),e&&t(Wl),e&&t(Ds),e&&t(Hl),T(mo,e),e&&t(Ql),T(_o,e),e&&t(Vl),e&&t(zi),e&&t(Rl),e&&t(fa),T(wo),e&&t(Gl),e&&t(Ii),e&&t(Ul),e&&t(Ps),e&&t(Yl),T(go,e),e&&t(Jl),e&&t(Fi),e&&t(Xl),T(bo,e),e&&t(Kl),T(vo,e),e&&t(Zl),e&&t(Ni),e&&t(ep),e&&t(Mi),e&&t(tp),Go[Qt].d(e),e&&t(Bi),e&&t(ma),T(xo),e&&t(sp),Uo[Rt].d(e),e&&t(Li),e&&t(mn),e&&t(ap),e&&t(ft),e&&t(np),e&&t(Fe),e&&t(rp),e&&t(_n),e&&t(lp),T($o,e),e&&t(pp),e&&t(Wi),e&&t(hp),T(jo,e),e&&t(dp),e&&t(wn),e&&t(cp),Yo[Ut].d(e),e&&t(Hi),e&&t(Ne),e&&t(up),T(qo,e),e&&t(fp),e&&t(gn),e&&t(mp),e&&t(Cs),e&&t(_p),e&&t(Qi),e&&t(wp),T(To,e),e&&t(gp),e&&t(Vi),e&&t(bp),T(Ao,e),e&&t(vp),e&&t(Ri),e&&t(xp),T(Do,e),e&&t(yp),e&&t(Gi),e&&t(kp),T(Po,e),e&&t($p),T(Co,e),e&&t(jp),e&&t(Ui),e&&t(qp),T(So,e),e&&t(Ep),T(Oo,e),e&&t(Tp),e&&t(bn),e&&t(Ap),ba.d(e),e&&t(Yi),T(Io,e),e&&t(Dp),e&&t(Ji),e&&t(Pp),T(Fo,e),e&&t(Cp),T(No,e),e&&t(Sp),e&&t(Xi),e&&t(Op),e&&t(wa),T(Mo),e&&t(zp),Jo[Jt].d(e),e&&t(Ki),e&&t(Zi),e&&t(Ip),e&&t(er),e&&t(Fp),T(Bo,e),e&&t(Np),e&&t(tr),e&&t(Mp),T(Lo,e),e&&t(Bp),Xo[Kt].d(e),e&&t(sr),e&&t(Me),e&&t(Lp),Ko[es].d(e),e&&t(ar),e&&t(nr),e&&t(Wp),Zo[ss].d(e),e&&t(or),T(Wo,e),e&&t(Hp),e&&t(ir),e&&t(Qp),le&&le.d(e),e&&t(rr),e&&t(lr),e&&t(Vp),T(xn,e),e&&t(Rp),pe&&pe.d(e),e&&t(pr),e&&t(ga),T(Ho),e&&t(Gp),e&&t(kn),e&&t(Up),T(Qo,e),e&&t(Yp),T(Vo,e),e&&t(Jp),e&&t(hr)}}}const u_={local:"question-answering",sections:[{local:"preparing-the-data",sections:[{local:"the-squad-dataset",title:"The SQuAD dataset"},{local:"processing-the-training-data",title:"Processing the training data"},{local:"processing-the-validation-data",title:"Processing the validation data"}],title:"Preparing the data"},{local:"finetuning-the-model-with-the-trainer-api",title:"Fine-tuning the model with the `Trainer` API"},{local:"finetuning-the-model-with-keras",sections:[{local:"postprocessing",title:"Post-processing"},{local:"finetuning-the-model",title:"Fine-tuning the model"}],title:"Fine-tuning the model with Keras"},{local:"a-custom-training-loop",sections:[{local:"preparing-everything-for-training",title:"Preparing everything for training"}],title:"A custom training loop"},{local:"training-loop",title:"Training loop"},{local:"using-the-finetuned-model",title:"Using the fine-tuned model"}],title:"Question answering"};function f_(W,h,g){let f="pt";return Wm(()=>{const x=new URLSearchParams(window.location.search);g(0,f=x.get("fw")||"pt")}),[f]}class y_ extends Im{constructor(h){super();Fm(this,h,f_,c_,Nm,{})}}export{y_ as default,u_ as metadata};
