import{S as Im,i as Fm,s as Nm,e as i,t as a,k as d,w as j,c as r,a as p,h as n,d as t,m as c,x as q,g as o,F as s,y as E,q as _,o as w,B as T,b as P,V as Mm,M as Bm,W as Lm,N as Wm,p as zs,v as Hm,O as Vm,n as Is}from"../../chunks/vendor-e7c81d8a.js";import{T as bh}from"../../chunks/Tip-989931f5.js";import{Y as vh}from"../../chunks/Youtube-365ea064.js";import{I as tt}from"../../chunks/WidgetTextarea.svelte_svelte_type_style_lang-08e92eaf.js";import{C as S}from"../../chunks/CodeBlock-105940ae.js";import{D as Om}from"../../chunks/DocNotebookDropdown-928568b4.js";import{I as Qm}from"../../chunks/InferenceWidget-88fba1ff.js";import{F as Rm}from"../../chunks/FrameworkSwitch-287292d8.js";const{document:Pm}=Vm;function Gm(W){let h,g;return h=new Om({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section7_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section7_tf.ipynb"}]}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function Um(W){let h,g;return h=new Om({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section7_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section7_pt.ipynb"}]}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function Ym(W){let h,g,f,x,A,b,k,y,m,O,$,v,C,F;return{c(){h=i("p"),g=a("\u{1F4A1} Encoder-only models like BERT tend to be great at extracting answers to factoid questions like \u201CWho invented the Transformer architecture?\u201D but fare poorly when given open-ended questions like \u201CWhy is the sky blue?\u201D In these more challenging cases, encoder-decoder models like T5 and BART are typically used to synthesize the information in a way that\u2019s quite similar to "),f=i("a"),x=a("text summarization"),A=a(". If you\u2019re interested in this type of "),b=i("em"),k=a("generative"),y=a(" question answering, we recommend checking out our "),m=i("a"),O=a("demo"),$=a(" based on the "),v=i("a"),C=a("ELI5 dataset"),F=a("."),this.h()},l(z){h=r(z,"P",{});var D=p(h);g=n(D,"\u{1F4A1} Encoder-only models like BERT tend to be great at extracting answers to factoid questions like \u201CWho invented the Transformer architecture?\u201D but fare poorly when given open-ended questions like \u201CWhy is the sky blue?\u201D In these more challenging cases, encoder-decoder models like T5 and BART are typically used to synthesize the information in a way that\u2019s quite similar to "),f=r(D,"A",{href:!0});var V=p(f);x=n(V,"text summarization"),V.forEach(t),A=n(D,". If you\u2019re interested in this type of "),b=r(D,"EM",{});var B=p(b);k=n(B,"generative"),B.forEach(t),y=n(D," question answering, we recommend checking out our "),m=r(D,"A",{href:!0,rel:!0});var Q=p(m);O=n(Q,"demo"),Q.forEach(t),$=n(D," based on the "),v=r(D,"A",{href:!0,rel:!0});var M=p(v);C=n(M,"ELI5 dataset"),M.forEach(t),F=n(D,"."),D.forEach(t),this.h()},h(){P(f,"href","/course/chapter7/section5"),P(m,"href","https://yjernite.github.io/lfqa.html"),P(m,"rel","nofollow"),P(v,"href","https://huggingface.co/datasets/eli5"),P(v,"rel","nofollow")},m(z,D){o(z,h,D),s(h,g),s(h,f),s(f,x),s(h,A),s(h,b),s(b,k),s(h,y),s(h,m),s(m,O),s(h,$),s(h,v),s(v,C),s(h,F)},d(z){z&&t(h)}}}function Jm(W){let h,g,f,x,A,b,k,y,m,O,$;return{c(){h=i("p"),g=a("\u270F\uFE0F "),f=i("strong"),x=a("Your turn!"),A=a(" When using the XLNet architecture, padding is applied on the left and the question and context are switched. Adapt all the code we just saw to the XLNet architecture (and add "),b=i("code"),k=a("padding=True"),y=a("). Be aware that the "),m=i("code"),O=a("[CLS]"),$=a(" token may not be at the 0 position with padding applied.")},l(v){h=r(v,"P",{});var C=p(h);g=n(C,"\u270F\uFE0F "),f=r(C,"STRONG",{});var F=p(f);x=n(F,"Your turn!"),F.forEach(t),A=n(C," When using the XLNet architecture, padding is applied on the left and the question and context are switched. Adapt all the code we just saw to the XLNet architecture (and add "),b=r(C,"CODE",{});var z=p(b);k=n(z,"padding=True"),z.forEach(t),y=n(C,"). Be aware that the "),m=r(C,"CODE",{});var D=p(m);O=n(D,"[CLS]"),D.forEach(t),$=n(C," token may not be at the 0 position with padding applied."),C.forEach(t)},m(v,C){o(v,h,C),s(h,g),s(h,f),s(f,x),s(h,A),s(h,b),s(b,k),s(h,y),s(h,m),s(m,O),s(h,$)},d(v){v&&t(h)}}}function Xm(W){let h,g,f,x,A,b,k,y,m,O,$;return x=new tt({}),{c(){h=i("h2"),g=i("a"),f=i("span"),j(x.$$.fragment),A=d(),b=i("span"),k=a("Fine-tuning the model with Keras"),y=d(),m=i("p"),O=a("The training code for this example will look a lot like the code in the previous sections, but computing the metrics will be uniquely challenging. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The hard part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),this.h()},l(v){h=r(v,"H2",{class:!0});var C=p(h);g=r(C,"A",{id:!0,class:!0,href:!0});var F=p(g);f=r(F,"SPAN",{});var z=p(f);q(x.$$.fragment,z),z.forEach(t),F.forEach(t),A=c(C),b=r(C,"SPAN",{});var D=p(b);k=n(D,"Fine-tuning the model with Keras"),D.forEach(t),C.forEach(t),y=c(v),m=r(v,"P",{});var V=p(m);O=n(V,"The training code for this example will look a lot like the code in the previous sections, but computing the metrics will be uniquely challenging. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The hard part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),V.forEach(t),this.h()},h(){P(g,"id","finetuning-the-model-with-keras"),P(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(g,"href","#finetuning-the-model-with-keras"),P(h,"class","relative group")},m(v,C){o(v,h,C),s(h,g),s(g,f),E(x,f,null),s(h,A),s(h,b),s(b,k),o(v,y,C),o(v,m,C),s(m,O),$=!0},i(v){$||(_(x.$$.fragment,v),$=!0)},o(v){w(x.$$.fragment,v),$=!1},d(v){v&&t(h),T(x),v&&t(y),v&&t(m)}}}function Km(W){let h,g,f,x,A,b,k,y,m,O,$,v,C,F,z,D,V;return x=new tt({}),{c(){h=i("h2"),g=i("a"),f=i("span"),j(x.$$.fragment),A=d(),b=i("span"),k=a("Fine-tuning the model with the "),y=i("code"),m=a("Trainer"),O=a(" API"),$=d(),v=i("p"),C=a("The training code for this example will look a lot like the code in the previous sections \u2014 the hardest thing will be to write the "),F=i("code"),z=a("compute_metrics()"),D=a(" function. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The difficult part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),this.h()},l(B){h=r(B,"H2",{class:!0});var Q=p(h);g=r(Q,"A",{id:!0,class:!0,href:!0});var M=p(g);f=r(M,"SPAN",{});var L=p(f);q(x.$$.fragment,L),L.forEach(t),M.forEach(t),A=c(Q),b=r(Q,"SPAN",{});var H=p(b);k=n(H,"Fine-tuning the model with the "),y=r(H,"CODE",{});var K=p(y);m=n(K,"Trainer"),K.forEach(t),O=n(H," API"),H.forEach(t),Q.forEach(t),$=c(B),v=r(B,"P",{});var G=p(v);C=n(G,"The training code for this example will look a lot like the code in the previous sections \u2014 the hardest thing will be to write the "),F=r(G,"CODE",{});var I=p(F);z=n(I,"compute_metrics()"),I.forEach(t),D=n(G," function. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The difficult part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),G.forEach(t),this.h()},h(){P(g,"id","finetuning-the-model-with-the-trainer-api"),P(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(g,"href","#finetuning-the-model-with-the-trainer-api"),P(h,"class","relative group")},m(B,Q){o(B,h,Q),s(h,g),s(g,f),E(x,f,null),s(h,A),s(h,b),s(b,k),s(b,y),s(y,m),s(b,O),o(B,$,Q),o(B,v,Q),s(v,C),s(v,F),s(F,z),s(v,D),V=!0},i(B){V||(_(x.$$.fragment,B),V=!0)},o(B){w(x.$$.fragment,B),V=!1},d(B){B&&t(h),T(x),B&&t($),B&&t(v)}}}function Zm(W){let h,g;return h=new vh({props:{id:"VN67ZpN33Ss"}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function e_(W){let h,g;return h=new vh({props:{id:"BNy08iIWVJM"}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function t_(W){let h,g,f,x,A,b,k;return h=new S({props:{codee:`import tensorflow as tf
from transformers import TFAutoModelForQuestionAnswering

eval_set_for_model = eval_set.remove_columns(["example_id", "offset_mapping"])
eval_set_for_model.set_format("numpy")

batch = {k: eval_set_for_model[k] for k in eval_set_for_model.column_names}
trained_model = TFAutoModelForQuestionAnswering.from_pretrained(trained_checkpoint)

outputs = trained_model(**batch),`,highlighted:`<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForQuestionAnswering

eval_set_for_model = eval_set.remove_columns([<span class="hljs-string">&quot;example_id&quot;</span>, <span class="hljs-string">&quot;offset_mapping&quot;</span>])
eval_set_for_model.set_format(<span class="hljs-string">&quot;numpy&quot;</span>)

batch = {k: eval_set_for_model[k] <span class="hljs-keyword">for</span> k <span class="hljs-keyword">in</span> eval_set_for_model.column_names}
trained_model = TFAutoModelForQuestionAnswering.from_pretrained(trained_checkpoint)

outputs = trained_model(**batch)`}}),b=new S({props:{codee:`start_logits = outputs.start_logits.numpy()
end_logits = outputs.end_logits.numpy(),`,highlighted:`start_logits = outputs.start_logits.numpy()
end_logits = outputs.end_logits.numpy()`}}),{c(){j(h.$$.fragment),g=d(),f=i("p"),x=a("For ease of experimentation, let\u2019s convert these outputs to NumPy arrays:"),A=d(),j(b.$$.fragment)},l(y){q(h.$$.fragment,y),g=c(y),f=r(y,"P",{});var m=p(f);x=n(m,"For ease of experimentation, let\u2019s convert these outputs to NumPy arrays:"),m.forEach(t),A=c(y),q(b.$$.fragment,y)},m(y,m){E(h,y,m),o(y,g,m),o(y,f,m),s(f,x),o(y,A,m),E(b,y,m),k=!0},i(y){k||(_(h.$$.fragment,y),_(b.$$.fragment,y),k=!0)},o(y){w(h.$$.fragment,y),w(b.$$.fragment,y),k=!1},d(y){T(h,y),y&&t(g),y&&t(f),y&&t(A),T(b,y)}}}function s_(W){let h,g,f,x,A,b,k,y,m,O;return h=new S({props:{codee:`import torch
from transformers import AutoModelForQuestionAnswering

eval_set_for_model = eval_set.remove_columns(["example_id", "offset_mapping"])
eval_set_for_model.set_format("torch")

device = torch.device("cuda") if torch.cuda.is_available() else torch.device("cpu")
batch = {k: eval_set_for_model[k].to(device) for k in eval_set_for_model.column_names}
trained_model = AutoModelForQuestionAnswering.from_pretrained(trained_checkpoint).to(
    device
)

with torch.no_grad():
    outputs = trained_model(**batch),`,highlighted:`<span class="hljs-keyword">import</span> torch
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForQuestionAnswering

eval_set_for_model = eval_set.remove_columns([<span class="hljs-string">&quot;example_id&quot;</span>, <span class="hljs-string">&quot;offset_mapping&quot;</span>])
eval_set_for_model.set_format(<span class="hljs-string">&quot;torch&quot;</span>)

device = torch.device(<span class="hljs-string">&quot;cuda&quot;</span>) <span class="hljs-keyword">if</span> torch.cuda.is_available() <span class="hljs-keyword">else</span> torch.device(<span class="hljs-string">&quot;cpu&quot;</span>)
batch = {k: eval_set_for_model[k].to(device) <span class="hljs-keyword">for</span> k <span class="hljs-keyword">in</span> eval_set_for_model.column_names}
trained_model = AutoModelForQuestionAnswering.from_pretrained(trained_checkpoint).to(
    device
)

<span class="hljs-keyword">with</span> torch.no_grad():
    outputs = trained_model(**batch)`}}),m=new S({props:{codee:`start_logits = outputs.start_logits.cpu().numpy()
end_logits = outputs.end_logits.cpu().numpy(),`,highlighted:`start_logits = outputs.start_logits.cpu().numpy()
end_logits = outputs.end_logits.cpu().numpy()`}}),{c(){j(h.$$.fragment),g=d(),f=i("p"),x=a("Since the "),A=i("code"),b=a("Trainer"),k=a(" will give us predictions as NumPy arrays, we grab the start and end logits and convert them to that format:"),y=d(),j(m.$$.fragment)},l($){q(h.$$.fragment,$),g=c($),f=r($,"P",{});var v=p(f);x=n(v,"Since the "),A=r(v,"CODE",{});var C=p(A);b=n(C,"Trainer"),C.forEach(t),k=n(v," will give us predictions as NumPy arrays, we grab the start and end logits and convert them to that format:"),v.forEach(t),y=c($),q(m.$$.fragment,$)},m($,v){E(h,$,v),o($,g,v),o($,f,v),s(f,x),s(f,A),s(A,b),s(f,k),o($,y,v),E(m,$,v),O=!0},i($){O||(_(h.$$.fragment,$),_(m.$$.fragment,$),O=!0)},o($){w(h.$$.fragment,$),w(m.$$.fragment,$),O=!1},d($){T(h,$),$&&t(g),$&&t(f),$&&t(y),T(m,$)}}}function a_(W){let h,g,f,x,A;return{c(){h=i("p"),g=a("Now let\u2019s put everything we just did in a "),f=i("code"),x=a("compute_metrics()"),A=a(" function that we will use after training our model. We will need to pass a bit more than just the output logits, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts:")},l(b){h=r(b,"P",{});var k=p(h);g=n(k,"Now let\u2019s put everything we just did in a "),f=r(k,"CODE",{});var y=p(f);x=n(y,"compute_metrics()"),y.forEach(t),A=n(k," function that we will use after training our model. We will need to pass a bit more than just the output logits, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts:"),k.forEach(t)},m(b,k){o(b,h,k),s(h,g),s(h,f),s(f,x),s(h,A)},d(b){b&&t(h)}}}function n_(W){let h,g,f,x,A,b,k,y,m,O,$,v,C,F,z,D,V,B,Q,M;return{c(){h=i("p"),g=a("Now let\u2019s put everything we just did in a "),f=i("code"),x=a("compute_metrics()"),A=a(" function that we will use in the "),b=i("code"),k=a("Trainer"),y=a(". Normally, that "),m=i("code"),O=a("compute_metrics()"),$=a(" function only receives a tuple "),v=i("code"),C=a("eval_preds"),F=a(" with logits and labels. Here we will need a bit more, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts, so we won\u2019t be able to use this function to get regular evaluation results during training. We will only use it at the end of training to check the results."),z=d(),D=i("p"),V=a("The "),B=i("code"),Q=a("compute_metrics()"),M=a(" function groups the same steps as before; we just add a small check in case we don\u2019t come up with any valid answers (in which case we predict an empty string).")},l(L){h=r(L,"P",{});var H=p(h);g=n(H,"Now let\u2019s put everything we just did in a "),f=r(H,"CODE",{});var K=p(f);x=n(K,"compute_metrics()"),K.forEach(t),A=n(H," function that we will use in the "),b=r(H,"CODE",{});var G=p(b);k=n(G,"Trainer"),G.forEach(t),y=n(H,". Normally, that "),m=r(H,"CODE",{});var I=p(m);O=n(I,"compute_metrics()"),I.forEach(t),$=n(H," function only receives a tuple "),v=r(H,"CODE",{});var Y=p(v);C=n(Y,"eval_preds"),Y.forEach(t),F=n(H," with logits and labels. Here we will need a bit more, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts, so we won\u2019t be able to use this function to get regular evaluation results during training. We will only use it at the end of training to check the results."),H.forEach(t),z=c(L),D=r(L,"P",{});var Z=p(D);V=n(Z,"The "),B=r(Z,"CODE",{});var te=p(B);Q=n(te,"compute_metrics()"),te.forEach(t),M=n(Z," function groups the same steps as before; we just add a small check in case we don\u2019t come up with any valid answers (in which case we predict an empty string)."),Z.forEach(t)},m(L,H){o(L,h,H),s(h,g),s(h,f),s(f,x),s(h,A),s(h,b),s(b,k),s(h,y),s(h,m),s(m,O),s(h,$),s(h,v),s(v,C),s(h,F),o(L,z,H),o(L,D,H),s(D,V),s(D,B),s(B,Q),s(D,M)},d(L){L&&t(h),L&&t(z),L&&t(D)}}}function o_(W){let h,g,f,x,A,b,k,y;return k=new S({props:{codee:"model = TFAutoModelForQuestionAnswering.from_pretrained(model_checkpoint),",highlighted:"model = TFAutoModelForQuestionAnswering.from_pretrained(model_checkpoint)"}}),{c(){h=i("p"),g=a("We are now ready to train our model. Let\u2019s create it first, using the "),f=i("code"),x=a("TFAutoModelForQuestionAnswering"),A=a(" class like before:"),b=d(),j(k.$$.fragment)},l(m){h=r(m,"P",{});var O=p(h);g=n(O,"We are now ready to train our model. Let\u2019s create it first, using the "),f=r(O,"CODE",{});var $=p(f);x=n($,"TFAutoModelForQuestionAnswering"),$.forEach(t),A=n(O," class like before:"),O.forEach(t),b=c(m),q(k.$$.fragment,m)},m(m,O){o(m,h,O),s(h,g),s(h,f),s(f,x),s(h,A),o(m,b,O),E(k,m,O),y=!0},i(m){y||(_(k.$$.fragment,m),y=!0)},o(m){w(k.$$.fragment,m),y=!1},d(m){m&&t(h),m&&t(b),T(k,m)}}}function i_(W){let h,g,f,x,A,b,k,y;return k=new S({props:{codee:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint),",highlighted:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)"}}),{c(){h=i("p"),g=a("We are now ready to train our model. Let\u2019s create it first, using the "),f=i("code"),x=a("AutoModelForQuestionAnswering"),A=a(" class like before:"),b=d(),j(k.$$.fragment)},l(m){h=r(m,"P",{});var O=p(h);g=n(O,"We are now ready to train our model. Let\u2019s create it first, using the "),f=r(O,"CODE",{});var $=p(f);x=n($,"AutoModelForQuestionAnswering"),$.forEach(t),A=n(O," class like before:"),O.forEach(t),b=c(m),q(k.$$.fragment,m)},m(m,O){o(m,h,O),s(h,g),s(h,f),s(f,x),s(h,A),o(m,b,O),E(k,m,O),y=!0},i(m){y||(_(k.$$.fragment,m),y=!0)},o(m){w(k.$$.fragment,m),y=!1},d(m){m&&t(h),m&&t(b),T(k,m)}}}function r_(W){let h,g,f,x,A,b,k,y,m,O,$,v,C,F,z,D,V,B,Q,M,L,H,K,G;return x=new S({props:{codee:`from transformers import DefaultDataCollator

data_collator = DefaultDataCollator(return_tensors="tf"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DefaultDataCollator

data_collator = DefaultDataCollator(return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)`}}),m=new S({props:{codee:`tf_train_dataset = train_dataset.to_tf_dataset(
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
),`,highlighted:`tf_train_dataset = train_dataset.to_tf_dataset(
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
)`}}),F=new S({props:{codee:`from transformers import create_optimizer
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
tf.keras.mixed_precision.set_global_policy("mixed_float16"),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
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
tf.keras.mixed_precision.set_global_policy(<span class="hljs-string">&quot;mixed_float16&quot;</span>)`}}),{c(){h=i("p"),g=a("Now that\u2019s done, we can create our TF Datasets. We can use the simple default data collator this time:"),f=d(),j(x.$$.fragment),A=d(),b=i("p"),k=a("And now we create the datasets as usual."),y=d(),j(m.$$.fragment),O=d(),$=i("p"),v=a("Next, we set up our training hyperparameters and compile our model:"),C=d(),j(F.$$.fragment),z=d(),D=i("p"),V=a("Finally, we\u2019re ready to train with "),B=i("code"),Q=a("model.fit()"),M=a(". We use a "),L=i("code"),H=a("PushToHubCallback"),K=a(" to upload the model to the Hub after each epoch.")},l(I){h=r(I,"P",{});var Y=p(h);g=n(Y,"Now that\u2019s done, we can create our TF Datasets. We can use the simple default data collator this time:"),Y.forEach(t),f=c(I),q(x.$$.fragment,I),A=c(I),b=r(I,"P",{});var Z=p(b);k=n(Z,"And now we create the datasets as usual."),Z.forEach(t),y=c(I),q(m.$$.fragment,I),O=c(I),$=r(I,"P",{});var te=p($);v=n(te,"Next, we set up our training hyperparameters and compile our model:"),te.forEach(t),C=c(I),q(F.$$.fragment,I),z=c(I),D=r(I,"P",{});var J=p(D);V=n(J,"Finally, we\u2019re ready to train with "),B=r(J,"CODE",{});var ie=p(B);Q=n(ie,"model.fit()"),ie.forEach(t),M=n(J,". We use a "),L=r(J,"CODE",{});var fe=p(L);H=n(fe,"PushToHubCallback"),fe.forEach(t),K=n(J," to upload the model to the Hub after each epoch."),J.forEach(t)},m(I,Y){o(I,h,Y),s(h,g),o(I,f,Y),E(x,I,Y),o(I,A,Y),o(I,b,Y),s(b,k),o(I,y,Y),E(m,I,Y),o(I,O,Y),o(I,$,Y),s($,v),o(I,C,Y),E(F,I,Y),o(I,z,Y),o(I,D,Y),s(D,V),s(D,B),s(B,Q),s(D,M),s(D,L),s(L,H),s(D,K),G=!0},i(I){G||(_(x.$$.fragment,I),_(m.$$.fragment,I),_(F.$$.fragment,I),G=!0)},o(I){w(x.$$.fragment,I),w(m.$$.fragment,I),w(F.$$.fragment,I),G=!1},d(I){I&&t(h),I&&t(f),T(x,I),I&&t(A),I&&t(b),I&&t(y),T(m,I),I&&t(O),I&&t($),I&&t(C),T(F,I),I&&t(z),I&&t(D)}}}function l_(W){let h,g,f,x,A,b,k,y,m,O,$,v,C,F,z,D,V,B,Q,M,L,H,K,G,I,Y,Z,te,J,ie,fe,Te,$e,me,_e;return te=new S({props:{codee:`from transformers import TrainingArguments

args = TrainingArguments(
    "bert-finetuned-squad",
    evaluation_strategy="no",
    save_strategy="epoch",
    learning_rate=2e-5,
    num_train_epochs=3,
    weight_decay=0.01,
    fp16=True,
    push_to_hub=True,
),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrainingArguments

args = TrainingArguments(
    <span class="hljs-string">&quot;bert-finetuned-squad&quot;</span>,
    evaluation_strategy=<span class="hljs-string">&quot;no&quot;</span>,
    save_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    learning_rate=<span class="hljs-number">2e-5</span>,
    num_train_epochs=<span class="hljs-number">3</span>,
    weight_decay=<span class="hljs-number">0.01</span>,
    fp16=<span class="hljs-literal">True</span>,
    push_to_hub=<span class="hljs-literal">True</span>,
)`}}),{c(){h=i("p"),g=a("Once this is done, we can define our "),f=i("code"),x=a("TrainingArguments"),A=a(". As we said when we defined our function to compute the metric, we won\u2019t be able to have a regular evaluation loop because of the signature of the "),b=i("code"),k=a("compute_metrics()"),y=a(" function. We could write our own subclass of "),m=i("code"),O=a("Trainer"),$=a(" to do this (an approach you can find in the "),v=i("a"),C=a("question answering example script"),F=a("), but that\u2019s a bit too long for this section. Instead, we will only evaluate the model at the end of training here and show you how to do a regular evaluation in \u201CA custom training loop\u201D below."),z=d(),D=i("p"),V=a("This is really where the "),B=i("code"),Q=a("Trainer"),M=a(" API shows its limits and the \u{1F917} Accelerate library shines: customizing the class to a specific use case can be painful, but tweaking a fully exposed training loop is easy."),L=d(),H=i("p"),K=a("Let\u2019s take a look at our "),G=i("code"),I=a("TrainingArguments"),Y=a(":"),Z=d(),j(te.$$.fragment),J=d(),ie=i("p"),fe=a("We\u2019ve seen most of these before: we set some hyperparameters (like the learning rate, the number of epochs we train for, and some weight decay) and indicate that we want to save the model at the end of every epoch, skip evaluation, and upload our results to the Model Hub. We also enable mixed-precision training with "),Te=i("code"),$e=a("fp16=True"),me=a(", as it can speed up the training nicely on a recent GPU."),this.h()},l(R){h=r(R,"P",{});var U=p(h);g=n(U,"Once this is done, we can define our "),f=r(U,"CODE",{});var is=p(f);x=n(is,"TrainingArguments"),is.forEach(t),A=n(U,". As we said when we defined our function to compute the metric, we won\u2019t be able to have a regular evaluation loop because of the signature of the "),b=r(U,"CODE",{});var Ae=p(b);k=n(Ae,"compute_metrics()"),Ae.forEach(t),y=n(U," function. We could write our own subclass of "),m=r(U,"CODE",{});var st=p(m);O=n(st,"Trainer"),st.forEach(t),$=n(U," to do this (an approach you can find in the "),v=r(U,"A",{href:!0,rel:!0});var rs=p(v);C=n(rs,"question answering example script"),rs.forEach(t),F=n(U,"), but that\u2019s a bit too long for this section. Instead, we will only evaluate the model at the end of training here and show you how to do a regular evaluation in \u201CA custom training loop\u201D below."),U.forEach(t),z=c(R),D=r(R,"P",{});var Le=p(D);V=n(Le,"This is really where the "),B=r(Le,"CODE",{});var we=p(B);Q=n(we,"Trainer"),we.forEach(t),M=n(Le," API shows its limits and the \u{1F917} Accelerate library shines: customizing the class to a specific use case can be painful, but tweaking a fully exposed training loop is easy."),Le.forEach(t),L=c(R),H=r(R,"P",{});var ce=p(H);K=n(ce,"Let\u2019s take a look at our "),G=r(ce,"CODE",{});var ue=p(G);I=n(ue,"TrainingArguments"),ue.forEach(t),Y=n(ce,":"),ce.forEach(t),Z=c(R),q(te.$$.fragment,R),J=c(R),ie=r(R,"P",{});var ae=p(ie);fe=n(ae,"We\u2019ve seen most of these before: we set some hyperparameters (like the learning rate, the number of epochs we train for, and some weight decay) and indicate that we want to save the model at the end of every epoch, skip evaluation, and upload our results to the Model Hub. We also enable mixed-precision training with "),Te=r(ae,"CODE",{});var at=p(Te);$e=n(at,"fp16=True"),at.forEach(t),me=n(ae,", as it can speed up the training nicely on a recent GPU."),ae.forEach(t),this.h()},h(){P(v,"href","https://github.com/huggingface/transformers/blob/master/examples/pytorch/question-answering/trainer_qa.py"),P(v,"rel","nofollow")},m(R,U){o(R,h,U),s(h,g),s(h,f),s(f,x),s(h,A),s(h,b),s(b,k),s(h,y),s(h,m),s(m,O),s(h,$),s(h,v),s(v,C),s(h,F),o(R,z,U),o(R,D,U),s(D,V),s(D,B),s(B,Q),s(D,M),o(R,L,U),o(R,H,U),s(H,K),s(H,G),s(G,I),s(H,Y),o(R,Z,U),E(te,R,U),o(R,J,U),o(R,ie,U),s(ie,fe),s(ie,Te),s(Te,$e),s(ie,me),_e=!0},i(R){_e||(_(te.$$.fragment,R),_e=!0)},o(R){w(te.$$.fragment,R),_e=!1},d(R){R&&t(h),R&&t(z),R&&t(D),R&&t(L),R&&t(H),R&&t(Z),T(te,R),R&&t(J),R&&t(ie)}}}function p_(W){let h,g;return h=new S({props:{codee:`from transformers.keras_callbacks import PushToHubCallback

callback = PushToHubCallback(output_dir="bert-finetuned-squad", tokenizer=tokenizer)

# We're going to do validation afterwards, so no validation mid-training
model.fit(tf_train_dataset, callbacks=[callback], epochs=num_train_epochs),`,highlighted:`<span class="hljs-keyword">from</span> transformers.keras_callbacks <span class="hljs-keyword">import</span> PushToHubCallback

callback = PushToHubCallback(output_dir=<span class="hljs-string">&quot;bert-finetuned-squad&quot;</span>, tokenizer=tokenizer)

<span class="hljs-comment"># We&#x27;re going to do validation afterwards, so no validation mid-training</span>
model.fit(tf_train_dataset, callbacks=[callback], epochs=num_train_epochs)`}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function h_(W){let h,g,f,x,A,b,k,y,m,O;return h=new bh({props:{$$slots:{default:[d_]},$$scope:{ctx:W}}}),m=new S({props:{codee:`from transformers import Trainer

trainer = Trainer(
    model=model,
    args=args,
    train_dataset=train_dataset,
    eval_dataset=validation_dataset,
    tokenizer=tokenizer,
)
trainer.train(),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Trainer

trainer = Trainer(
    model=model,
    args=args,
    train_dataset=train_dataset,
    eval_dataset=validation_dataset,
    tokenizer=tokenizer,
)
trainer.train()`}}),{c(){j(h.$$.fragment),g=d(),f=i("p"),x=a("Finally, we just pass everything to the "),A=i("code"),b=a("Trainer"),k=a(" class and launch the training:"),y=d(),j(m.$$.fragment)},l($){q(h.$$.fragment,$),g=c($),f=r($,"P",{});var v=p(f);x=n(v,"Finally, we just pass everything to the "),A=r(v,"CODE",{});var C=p(A);b=n(C,"Trainer"),C.forEach(t),k=n(v," class and launch the training:"),v.forEach(t),y=c($),q(m.$$.fragment,$)},m($,v){E(h,$,v),o($,g,v),o($,f,v),s(f,x),s(f,A),s(A,b),s(f,k),o($,y,v),E(m,$,v),O=!0},i($){O||(_(h.$$.fragment,$),_(m.$$.fragment,$),O=!0)},o($){w(h.$$.fragment,$),w(m.$$.fragment,$),O=!1},d($){T(h,$),$&&t(g),$&&t(f),$&&t(y),T(m,$)}}}function d_(W){let h,g,f,x,A;return{c(){h=i("p"),g=a("\u{1F4A1} If the output directory you are using exists, it needs to be a local clone of the repository you want to push to (so set a new name if you get an error when defining your "),f=i("code"),x=a("Trainer"),A=a(").")},l(b){h=r(b,"P",{});var k=p(h);g=n(k,"\u{1F4A1} If the output directory you are using exists, it needs to be a local clone of the repository you want to push to (so set a new name if you get an error when defining your "),f=r(k,"CODE",{});var y=p(f);x=n(y,"Trainer"),y.forEach(t),A=n(k,")."),k.forEach(t)},m(b,k){o(b,h,k),s(h,g),s(h,f),s(f,x),s(h,A)},d(b){b&&t(h)}}}function c_(W){let h,g,f,x,A,b,k,y,m,O,$,v,C,F;return C=new S({props:{codee:`predictions = model.predict(tf_eval_dataset)
compute_metrics(
    predictions["start_logits"],
    predictions["end_logits"],
    validation_dataset,
    raw_datasets["validation"],
),`,highlighted:`predictions = model.predict(tf_eval_dataset)
compute_metrics(
    predictions[<span class="hljs-string">&quot;start_logits&quot;</span>],
    predictions[<span class="hljs-string">&quot;end_logits&quot;</span>],
    validation_dataset,
    raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>],
)`}}),{c(){h=i("p"),g=a("Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=i("code"),x=a("predict()"),A=a(" method of our "),b=i("code"),k=a("model"),y=a(" will take care of getting predictions, and since we did all the hard work of defining a "),m=i("code"),O=a("compute_metrics()"),$=a(" function earlier, we can get our results in a single line:"),v=d(),j(C.$$.fragment)},l(z){h=r(z,"P",{});var D=p(h);g=n(D,"Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=r(D,"CODE",{});var V=p(f);x=n(V,"predict()"),V.forEach(t),A=n(D," method of our "),b=r(D,"CODE",{});var B=p(b);k=n(B,"model"),B.forEach(t),y=n(D," will take care of getting predictions, and since we did all the hard work of defining a "),m=r(D,"CODE",{});var Q=p(m);O=n(Q,"compute_metrics()"),Q.forEach(t),$=n(D," function earlier, we can get our results in a single line:"),D.forEach(t),v=c(z),q(C.$$.fragment,z)},m(z,D){o(z,h,D),s(h,g),s(h,f),s(f,x),s(h,A),s(h,b),s(b,k),s(h,y),s(h,m),s(m,O),s(h,$),o(z,v,D),E(C,z,D),F=!0},i(z){F||(_(C.$$.fragment,z),F=!0)},o(z){w(C.$$.fragment,z),F=!1},d(z){z&&t(h),z&&t(v),T(C,z)}}}function u_(W){let h,g,f,x,A,b,k,y,m,O,$,v,C,F;return C=new S({props:{codee:`predictions, _ = trainer.predict(validation_dataset)
start_logits, end_logits = predictions
compute_metrics(start_logits, end_logits, validation_dataset, raw_datasets["validation"]),`,highlighted:`predictions, _ = trainer.predict(validation_dataset)
start_logits, end_logits = predictions
compute_metrics(start_logits, end_logits, validation_dataset, raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>])`}}),{c(){h=i("p"),g=a("Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=i("code"),x=a("predict()"),A=a(" method of the "),b=i("code"),k=a("Trainer"),y=a(" will return a tuple where the first elements will be the predictions of the model (here a pair with the start and end logits). We send this to our "),m=i("code"),O=a("compute_metrics()"),$=a(" function:"),v=d(),j(C.$$.fragment)},l(z){h=r(z,"P",{});var D=p(h);g=n(D,"Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=r(D,"CODE",{});var V=p(f);x=n(V,"predict()"),V.forEach(t),A=n(D," method of the "),b=r(D,"CODE",{});var B=p(b);k=n(B,"Trainer"),B.forEach(t),y=n(D," will return a tuple where the first elements will be the predictions of the model (here a pair with the start and end logits). We send this to our "),m=r(D,"CODE",{});var Q=p(m);O=n(Q,"compute_metrics()"),Q.forEach(t),$=n(D," function:"),D.forEach(t),v=c(z),q(C.$$.fragment,z)},m(z,D){o(z,h,D),s(h,g),s(h,f),s(f,x),s(h,A),s(h,b),s(b,k),s(h,y),s(h,m),s(m,O),s(h,$),o(z,v,D),E(C,z,D),F=!0},i(z){F||(_(C.$$.fragment,z),F=!0)},o(z){w(C.$$.fragment,z),F=!1},d(z){z&&t(h),z&&t(v),T(C,z)}}}function Cm(W){let h,g,f,x,A,b,k,y,m,O,$,v,C,F,z,D,V,B,Q;return k=new S({props:{codee:'trainer.push_to_hub(commit_message="Training complete"),',highlighted:'trainer.push_to_hub(commit_message=<span class="hljs-string">&quot;Training complete&quot;</span>)'}}),v=new S({props:{codee:"'https://huggingface.co/sgugger/bert-finetuned-squad/commit/9dcee1fbc25946a6ed4bb32efb1bd71d5fa90b68',",highlighted:'<span class="hljs-string">&#x27;https://huggingface.co/sgugger/bert-finetuned-squad/commit/9dcee1fbc25946a6ed4bb32efb1bd71d5fa90b68&#x27;</span>'}}),{c(){h=i("p"),g=a("Finally, we use the "),f=i("code"),x=a("push_to_hub()"),A=a(" method to make sure we upload the latest version of the model:"),b=d(),j(k.$$.fragment),y=d(),m=i("p"),O=a("This returns the URL of the commit it just did, if you want to inspect it:"),$=d(),j(v.$$.fragment),C=d(),F=i("p"),z=a("The "),D=i("code"),V=a("Trainer"),B=a(" also drafts a model card with all the evaluation results and uploads it.")},l(M){h=r(M,"P",{});var L=p(h);g=n(L,"Finally, we use the "),f=r(L,"CODE",{});var H=p(f);x=n(H,"push_to_hub()"),H.forEach(t),A=n(L," method to make sure we upload the latest version of the model:"),L.forEach(t),b=c(M),q(k.$$.fragment,M),y=c(M),m=r(M,"P",{});var K=p(m);O=n(K,"This returns the URL of the commit it just did, if you want to inspect it:"),K.forEach(t),$=c(M),q(v.$$.fragment,M),C=c(M),F=r(M,"P",{});var G=p(F);z=n(G,"The "),D=r(G,"CODE",{});var I=p(D);V=n(I,"Trainer"),I.forEach(t),B=n(G," also drafts a model card with all the evaluation results and uploads it."),G.forEach(t)},m(M,L){o(M,h,L),s(h,g),s(h,f),s(f,x),s(h,A),o(M,b,L),E(k,M,L),o(M,y,L),o(M,m,L),s(m,O),o(M,$,L),E(v,M,L),o(M,C,L),o(M,F,L),s(F,z),s(F,D),s(D,V),s(F,B),Q=!0},i(M){Q||(_(k.$$.fragment,M),_(v.$$.fragment,M),Q=!0)},o(M){w(k.$$.fragment,M),w(v.$$.fragment,M),Q=!1},d(M){M&&t(h),M&&t(b),T(k,M),M&&t(y),M&&t(m),M&&t($),T(v,M),M&&t(C),M&&t(F)}}}function f_(W){let h,g,f,x,A;return{c(){h=i("p"),g=a("\u270F\uFE0F "),f=i("strong"),x=a("Your turn!"),A=a(" Try another model architecture to see if it performs better on this task!")},l(b){h=r(b,"P",{});var k=p(h);g=n(k,"\u270F\uFE0F "),f=r(k,"STRONG",{});var y=p(f);x=n(y,"Your turn!"),y.forEach(t),A=n(k," Try another model architecture to see if it performs better on this task!"),k.forEach(t)},m(b,k){o(b,h,k),s(h,g),s(h,f),s(f,x),s(h,A)},d(b){b&&t(h)}}}function Sm(W){let h,g,f,x,A,b,k,y,m,O,$,v,C,F,z,D,V,B,Q,M,L,H,K,G,I,Y,Z,te,J,ie,fe,Te,$e,me,_e,R,U,is,Ae,st,rs,Le,we,ce,ue,ae,at,nt,xt,ls,ot,ya,ge,Tn,yt,$a,$t,it,ne,An,ps,We,rt,kt,jt,Dn,qt,Pn,ka,De,Cn,Fs,Ns,Sn,ja,lt,pt,Et,Pe,qa,He,Ea,Tt,hs,be,On,ds,At,Ta,pe,zn,Ms,Bs,In,Ls,Aa,Dt,cs,Pt,Da,ee,Ct,us,St,Pa,ht,Fn,Ca,Ve,Sa,Ce,Ws,Hs,Nn,Vs,Qs,Mn,Rs,Oa,Qe,Re,Se,Ot,Gs,Us,Bn,Ys,Oe,za,dt,ke,ze,Ln,fs,zt,Ia,It,ve,ms,Js,Fa,Ft,_s,Nt,Na,ct,Wn,Ma,Ge,he,Xs,Ue,Hn,Ks,Zs,Ba,Mt,ea,Ye,Vn,ta,Ie,La,Bt,Lt,sa,oe,Wa,X,Qn,aa,na,Rn,oa,ia,Gn,ra,Ha,Wt,ws,Ht,Va,ut,Un,Qa,Je,Ra,gs,la,Ga,Vt,pa,de,Ua,ft,Yn,Ya,je,mt,ai,Ja,qe;return k=new tt({}),G=new tt({}),ce=new S({props:{codee:`from torch.utils.data import DataLoader
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
),`,highlighted:`<span class="hljs-keyword">from</span> torch.utils.data <span class="hljs-keyword">import</span> DataLoader
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
)`}}),xt=new S({props:{codee:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint),",highlighted:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)"}}),$t=new S({props:{codee:`from torch.optim import AdamW

optimizer = AdamW(model.parameters(), lr=2e-5),`,highlighted:`<span class="hljs-keyword">from</span> torch.optim <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">2e-5</span>)`}}),pt=new S({props:{codee:`from accelerate import Accelerator

accelerator = Accelerator(fp16=True)
model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
),`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator(fp16=<span class="hljs-literal">True</span>)
model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`}}),At=new S({props:{codee:`from transformers import get_scheduler

num_train_epochs = 3
num_update_steps_per_epoch = len(train_dataloader)
num_training_steps = num_train_epochs * num_update_steps_per_epoch

lr_scheduler = get_scheduler(
    "linear",
    optimizer=optimizer,
    num_warmup_steps=0,
    num_training_steps=num_training_steps,
),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> get_scheduler

num_train_epochs = <span class="hljs-number">3</span>
num_update_steps_per_epoch = <span class="hljs-built_in">len</span>(train_dataloader)
num_training_steps = num_train_epochs * num_update_steps_per_epoch

lr_scheduler = get_scheduler(
    <span class="hljs-string">&quot;linear&quot;</span>,
    optimizer=optimizer,
    num_warmup_steps=<span class="hljs-number">0</span>,
    num_training_steps=num_training_steps,
)`}}),Ct=new S({props:{codee:`from huggingface_hub import Repository, get_full_repo_name

model_name = "bert-finetuned-squad-accelerate"
repo_name = get_full_repo_name(model_name)
repo_name,`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository, get_full_repo_name

model_name = <span class="hljs-string">&quot;bert-finetuned-squad-accelerate&quot;</span>
repo_name = get_full_repo_name(model_name)
repo_name`}}),St=new S({props:{codee:"'sgugger/bert-finetuned-squad-accelerate',",highlighted:'<span class="hljs-string">&#x27;sgugger/bert-finetuned-squad-accelerate&#x27;</span>'}}),Ve=new S({props:{codee:`output_dir = "bert-finetuned-squad-accelerate"
repo = Repository(output_dir, clone_from=repo_name),`,highlighted:`output_dir = <span class="hljs-string">&quot;bert-finetuned-squad-accelerate&quot;</span>
repo = Repository(output_dir, clone_from=repo_name)`}}),Ot=new tt({}),Ie=new S({props:{codee:`from tqdm.auto import tqdm
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
        ),`,highlighted:`<span class="hljs-keyword">from</span> tqdm.auto <span class="hljs-keyword">import</span> tqdm
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
        )`}}),oe=new S({props:{codee:`accelerator.wait_for_everyone()
unwrapped_model = accelerator.unwrap_model(model)
unwrapped_model.save_pretrained(output_dir, save_function=accelerator.save),`,highlighted:`accelerator.wait_for_everyone()
unwrapped_model = accelerator.unwrap_model(model)
unwrapped_model.save_pretrained(output_dir, save_function=accelerator.save)`}}),{c(){h=i("p"),g=a("If you want to dive a bit more deeply into the training loop, we will now show you how to do the same thing using \u{1F917}  Accelerate."),f=d(),x=i("h2"),A=i("a"),b=i("span"),j(k.$$.fragment),y=d(),m=i("span"),O=a("A custom training loop"),$=d(),v=i("p"),C=a("Let\u2019s now have a look at the full training loop, so you can easily customize the parts you need. It will look a lot like the training loop in "),F=i("a"),z=a("Chapter 3"),D=a(", with the exception of the evaluation loop. We will be able to evaluate the model regularly since we\u2019re not constrained by the "),V=i("code"),B=a("Trainer"),Q=a(" class anymore."),M=d(),L=i("h3"),H=i("a"),K=i("span"),j(G.$$.fragment),I=d(),Y=i("span"),Z=a("Preparing everything for training"),te=d(),J=i("p"),ie=a("First we need to build the "),fe=i("code"),Te=a("DataLoader"),$e=a("s from our datasets. We set the format of those datasets to "),me=i("code"),_e=a('"torch"'),R=a(", and remove the columns in the validation set that are not used by the model. Then, we can use the "),U=i("code"),is=a("default_data_collator"),Ae=a(" provided by Transformers as a "),st=i("code"),rs=a("collate_fn"),Le=a(" and shuffle the training set, but not the validation set:"),we=d(),j(ce.$$.fragment),ue=d(),ae=i("p"),at=a("Next we reinstantiate our model, to make sure we\u2019re not continuing the fine-tuning from before but starting from the BERT pretrained model again:"),nt=d(),j(xt.$$.fragment),ls=d(),ot=i("p"),ya=a("Then we will need an optimizer. As usual we use the classic "),ge=i("code"),Tn=a("AdamW"),yt=a(", which is like Adam, but with a fix in the way weight decay is applied:"),$a=d(),j($t.$$.fragment),it=d(),ne=i("p"),An=a("Once we have all those objects, we can send them to the "),ps=i("code"),We=a("accelerator.prepare()"),rt=a(" method. Remember that if you want to train on TPUs in a Colab notebook, you will need to move all of this code into a training function, and that shouldn\u2019t execute any cell that instantiates an "),kt=i("code"),jt=a("Accelerator"),Dn=a(". We can force mixed-precision training by passing "),qt=i("code"),Pn=a("fp16=True"),ka=a(" to the "),De=i("code"),Cn=a("Accelerator"),Fs=a(" (or, if you are executing the code as a script, just make sure to fill in the \u{1F917} Accelerate "),Ns=i("code"),Sn=a("config"),ja=a(" appropriately)."),lt=d(),j(pt.$$.fragment),Et=d(),Pe=i("p"),qa=a("As you should know from the previous sections, we can only use the "),He=i("code"),Ea=a("train_dataloader"),Tt=a(" length to compute the number of training steps after it has gone through the "),hs=i("code"),be=a("accelerator.prepare()"),On=a(" method. We use the same linear schedule as in the previous sections:"),ds=d(),j(At.$$.fragment),Ta=d(),pe=i("p"),zn=a("To push our model to the Hub, we will need to create a "),Ms=i("code"),Bs=a("Repository"),In=a(" object in a working folder. First log in to the Hugging Face Hub, if you\u2019re not logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),Ls=i("code"),Aa=a("repo_name"),Dt=a(" with your own choice; it just needs to contain your username, which is what the function "),cs=i("code"),Pt=a("get_full_repo_name()"),Da=a(" does):"),ee=d(),j(Ct.$$.fragment),us=d(),j(St.$$.fragment),Pa=d(),ht=i("p"),Fn=a("Then we can clone that repository in a local folder. If it already exists, this local folder should be a clone of the repository we are working with:"),Ca=d(),j(Ve.$$.fragment),Sa=d(),Ce=i("p"),Ws=a("We can now upload anything we save in "),Hs=i("code"),Nn=a("output_dir"),Vs=a(" by calling the "),Qs=i("code"),Mn=a("repo.push_to_hub()"),Rs=a(" method. This will help us upload the intermediate models at the end of each epoch."),Oa=d(),Qe=i("h2"),Re=i("a"),Se=i("span"),j(Ot.$$.fragment),Gs=d(),Us=i("span"),Bn=a("Training loop"),Ys=d(),Oe=i("p"),za=a("We are now ready to write the full training loop. After defining a progress bar to follow how training goes, the loop has three parts:"),dt=d(),ke=i("ul"),ze=i("li"),Ln=a("The training in itself, which is the classic iteration over the "),fs=i("code"),zt=a("train_dataloader"),Ia=a(", forward pass through the model, then backward pass and optimizer step."),It=d(),ve=i("li"),ms=a("The evaluation, in which we gather all the values for "),Js=i("code"),Fa=a("start_logits"),Ft=a(" and "),_s=i("code"),Nt=a("end_logits"),Na=a(" before converting them to NumPy arrays. Once the evaluation loop is finished, we concatenate all the results. Note that we need to truncate because the "),ct=i("code"),Wn=a("Accelerator"),Ma=a(" may have added a few samples at the end to ensure we have the same number of examples in each process."),Ge=d(),he=i("li"),Xs=a("Saving and uploading, where we first save the model and the tokenizer, then call "),Ue=i("code"),Hn=a("repo.push_to_hub()"),Ks=a(". As we did before, we use the argument "),Zs=i("code"),Ba=a("blocking=False"),Mt=a(" to tell the \u{1F917} Hub library to push in an asynchronous process. This way, training continues normally and this (long) instruction is executed in the background."),ea=d(),Ye=i("p"),Vn=a("Here\u2019s the complete code for the training loop:"),ta=d(),j(Ie.$$.fragment),La=d(),Bt=i("p"),Lt=a("In case this is the first time you\u2019re seeing a model saved with \u{1F917} Accelerate, let\u2019s take a moment to inspect the three lines of code that go with it:"),sa=d(),j(oe.$$.fragment),Wa=d(),X=i("p"),Qn=a("The first line is self-explanatory: it tells all the processes to wait until everyone is at that stage before continuing. This is to make sure we have the same model in every process before saving. Then we grab the "),aa=i("code"),na=a("unwrapped_model"),Rn=a(", which is the base model we defined. The "),oa=i("code"),ia=a("accelerator.prepare()"),Gn=a(" method changes the model to work in distributed training, so it won\u2019t have the "),ra=i("code"),Ha=a("save_pretrained()"),Wt=a(" method anymore; the "),ws=i("code"),Ht=a("accelerator.unwrap_model()"),Va=a(" method undoes that step. Lastly, we call "),ut=i("code"),Un=a("save_pretrained()"),Qa=a(" but tell that method to use "),Je=i("code"),Ra=a("accelerator.save()"),gs=a(" instead of "),la=i("code"),Ga=a("torch.save()"),Vt=a("."),pa=d(),de=i("p"),Ua=a("Once this is done, you should have a model that produces results pretty similar to the one trained with the "),ft=i("code"),Yn=a("Trainer"),Ya=a(". You can check the model we trained using this code at "),je=i("a"),mt=i("em"),ai=a("huggingface-course/bert-finetuned-squad-accelerate"),Ja=a(". And if you want to test out any tweaks to the training loop, you can directly implement them by editing the code shown above!"),this.h()},l(u){h=r(u,"P",{});var N=p(h);g=n(N,"If you want to dive a bit more deeply into the training loop, we will now show you how to do the same thing using \u{1F917}  Accelerate."),N.forEach(t),f=c(u),x=r(u,"H2",{class:!0});var Xa=p(x);A=r(Xa,"A",{id:!0,class:!0,href:!0});var ni=p(A);b=r(ni,"SPAN",{});var Ka=p(b);q(k.$$.fragment,Ka),Ka.forEach(t),ni.forEach(t),y=c(Xa),m=r(Xa,"SPAN",{});var oi=p(m);O=n(oi,"A custom training loop"),oi.forEach(t),Xa.forEach(t),$=c(u),v=r(u,"P",{});var bs=p(v);C=n(bs,"Let\u2019s now have a look at the full training loop, so you can easily customize the parts you need. It will look a lot like the training loop in "),F=r(bs,"A",{href:!0});var Jn=p(F);z=n(Jn,"Chapter 3"),Jn.forEach(t),D=n(bs,", with the exception of the evaluation loop. We will be able to evaluate the model regularly since we\u2019re not constrained by the "),V=r(bs,"CODE",{});var ha=p(V);B=n(ha,"Trainer"),ha.forEach(t),Q=n(bs," class anymore."),bs.forEach(t),M=c(u),L=r(u,"H3",{class:!0});var Za=p(L);H=r(Za,"A",{id:!0,class:!0,href:!0});var Xn=p(H);K=r(Xn,"SPAN",{});var Ee=p(K);q(G.$$.fragment,Ee),Ee.forEach(t),Xn.forEach(t),I=c(Za),Y=r(Za,"SPAN",{});var da=p(Y);Z=n(da,"Preparing everything for training"),da.forEach(t),Za.forEach(t),te=c(u),J=r(u,"P",{});var xe=p(J);ie=n(xe,"First we need to build the "),fe=r(xe,"CODE",{});var ii=p(fe);Te=n(ii,"DataLoader"),ii.forEach(t),$e=n(xe,"s from our datasets. We set the format of those datasets to "),me=r(xe,"CODE",{});var ri=p(me);_e=n(ri,'"torch"'),ri.forEach(t),R=n(xe,", and remove the columns in the validation set that are not used by the model. Then, we can use the "),U=r(xe,"CODE",{});var li=p(U);is=n(li,"default_data_collator"),li.forEach(t),Ae=n(xe," provided by Transformers as a "),st=r(xe,"CODE",{});var ca=p(st);rs=n(ca,"collate_fn"),ca.forEach(t),Le=n(xe," and shuffle the training set, but not the validation set:"),xe.forEach(t),we=c(u),q(ce.$$.fragment,u),ue=c(u),ae=r(u,"P",{});var en=p(ae);at=n(en,"Next we reinstantiate our model, to make sure we\u2019re not continuing the fine-tuning from before but starting from the BERT pretrained model again:"),en.forEach(t),nt=c(u),q(xt.$$.fragment,u),ls=c(u),ot=r(u,"P",{});var tn=p(ot);ya=n(tn,"Then we will need an optimizer. As usual we use the classic "),ge=r(tn,"CODE",{});var pi=p(ge);Tn=n(pi,"AdamW"),pi.forEach(t),yt=n(tn,", which is like Adam, but with a fix in the way weight decay is applied:"),tn.forEach(t),$a=c(u),q($t.$$.fragment,u),it=c(u),ne=r(u,"P",{});var ye=p(ne);An=n(ye,"Once we have all those objects, we can send them to the "),ps=r(ye,"CODE",{});var ua=p(ps);We=n(ua,"accelerator.prepare()"),ua.forEach(t),rt=n(ye," method. Remember that if you want to train on TPUs in a Colab notebook, you will need to move all of this code into a training function, and that shouldn\u2019t execute any cell that instantiates an "),kt=r(ye,"CODE",{});var sn=p(kt);jt=n(sn,"Accelerator"),sn.forEach(t),Dn=n(ye,". We can force mixed-precision training by passing "),qt=r(ye,"CODE",{});var hi=p(qt);Pn=n(hi,"fp16=True"),hi.forEach(t),ka=n(ye," to the "),De=r(ye,"CODE",{});var di=p(De);Cn=n(di,"Accelerator"),di.forEach(t),Fs=n(ye," (or, if you are executing the code as a script, just make sure to fill in the \u{1F917} Accelerate "),Ns=r(ye,"CODE",{});var ci=p(Ns);Sn=n(ci,"config"),ci.forEach(t),ja=n(ye," appropriately)."),ye.forEach(t),lt=c(u),q(pt.$$.fragment,u),Et=c(u),Pe=r(u,"P",{});var Xe=p(Pe);qa=n(Xe,"As you should know from the previous sections, we can only use the "),He=r(Xe,"CODE",{});var an=p(He);Ea=n(an,"train_dataloader"),an.forEach(t),Tt=n(Xe," length to compute the number of training steps after it has gone through the "),hs=r(Xe,"CODE",{});var ui=p(hs);be=n(ui,"accelerator.prepare()"),ui.forEach(t),On=n(Xe," method. We use the same linear schedule as in the previous sections:"),Xe.forEach(t),ds=c(u),q(At.$$.fragment,u),Ta=c(u),pe=r(u,"P",{});var _t=p(pe);zn=n(_t,"To push our model to the Hub, we will need to create a "),Ms=r(_t,"CODE",{});var Kn=p(Ms);Bs=n(Kn,"Repository"),Kn.forEach(t),In=n(_t," object in a working folder. First log in to the Hugging Face Hub, if you\u2019re not logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),Ls=r(_t,"CODE",{});var vs=p(Ls);Aa=n(vs,"repo_name"),vs.forEach(t),Dt=n(_t," with your own choice; it just needs to contain your username, which is what the function "),cs=r(_t,"CODE",{});var Zn=p(cs);Pt=n(Zn,"get_full_repo_name()"),Zn.forEach(t),Da=n(_t," does):"),_t.forEach(t),ee=c(u),q(Ct.$$.fragment,u),us=c(u),q(St.$$.fragment,u),Pa=c(u),ht=r(u,"P",{});var xs=p(ht);Fn=n(xs,"Then we can clone that repository in a local folder. If it already exists, this local folder should be a clone of the repository we are working with:"),xs.forEach(t),Ca=c(u),q(Ve.$$.fragment,u),Sa=c(u),Ce=r(u,"P",{});var Qt=p(Ce);Ws=n(Qt,"We can now upload anything we save in "),Hs=r(Qt,"CODE",{});var Ke=p(Hs);Nn=n(Ke,"output_dir"),Ke.forEach(t),Vs=n(Qt," by calling the "),Qs=r(Qt,"CODE",{});var fi=p(Qs);Mn=n(fi,"repo.push_to_hub()"),fi.forEach(t),Rs=n(Qt," method. This will help us upload the intermediate models at the end of each epoch."),Qt.forEach(t),Oa=c(u),Qe=r(u,"H2",{class:!0});var ys=p(Qe);Re=r(ys,"A",{id:!0,class:!0,href:!0});var mi=p(Re);Se=r(mi,"SPAN",{});var _i=p(Se);q(Ot.$$.fragment,_i),_i.forEach(t),mi.forEach(t),Gs=c(ys),Us=r(ys,"SPAN",{});var nn=p(Us);Bn=n(nn,"Training loop"),nn.forEach(t),ys.forEach(t),Ys=c(u),Oe=r(u,"P",{});var wi=p(Oe);za=n(wi,"We are now ready to write the full training loop. After defining a progress bar to follow how training goes, the loop has three parts:"),wi.forEach(t),dt=c(u),ke=r(u,"UL",{});var $s=p(ke);ze=r($s,"LI",{});var fa=p(ze);Ln=n(fa,"The training in itself, which is the classic iteration over the "),fs=r(fa,"CODE",{});var Ze=p(fs);zt=n(Ze,"train_dataloader"),Ze.forEach(t),Ia=n(fa,", forward pass through the model, then backward pass and optimizer step."),fa.forEach(t),It=c($s),ve=r($s,"LI",{});var wt=p(ve);ms=n(wt,"The evaluation, in which we gather all the values for "),Js=r(wt,"CODE",{});var ma=p(Js);Fa=n(ma,"start_logits"),ma.forEach(t),Ft=n(wt," and "),_s=r(wt,"CODE",{});var gi=p(_s);Nt=n(gi,"end_logits"),gi.forEach(t),Na=n(wt," before converting them to NumPy arrays. Once the evaluation loop is finished, we concatenate all the results. Note that we need to truncate because the "),ct=r(wt,"CODE",{});var bi=p(ct);Wn=n(bi,"Accelerator"),bi.forEach(t),Ma=n(wt," may have added a few samples at the end to ensure we have the same number of examples in each process."),wt.forEach(t),Ge=c($s),he=r($s,"LI",{});var gt=p(he);Xs=n(gt,"Saving and uploading, where we first save the model and the tokenizer, then call "),Ue=r(gt,"CODE",{});var vi=p(Ue);Hn=n(vi,"repo.push_to_hub()"),vi.forEach(t),Ks=n(gt,". As we did before, we use the argument "),Zs=r(gt,"CODE",{});var xi=p(Zs);Ba=n(xi,"blocking=False"),xi.forEach(t),Mt=n(gt," to tell the \u{1F917} Hub library to push in an asynchronous process. This way, training continues normally and this (long) instruction is executed in the background."),gt.forEach(t),$s.forEach(t),ea=c(u),Ye=r(u,"P",{});var eo=p(Ye);Vn=n(eo,"Here\u2019s the complete code for the training loop:"),eo.forEach(t),ta=c(u),q(Ie.$$.fragment,u),La=c(u),Bt=r(u,"P",{});var ks=p(Bt);Lt=n(ks,"In case this is the first time you\u2019re seeing a model saved with \u{1F917} Accelerate, let\u2019s take a moment to inspect the three lines of code that go with it:"),ks.forEach(t),sa=c(u),q(oe.$$.fragment,u),Wa=c(u),X=r(u,"P",{});var se=p(X);Qn=n(se,"The first line is self-explanatory: it tells all the processes to wait until everyone is at that stage before continuing. This is to make sure we have the same model in every process before saving. Then we grab the "),aa=r(se,"CODE",{});var js=p(aa);na=n(js,"unwrapped_model"),js.forEach(t),Rn=n(se,", which is the base model we defined. The "),oa=r(se,"CODE",{});var to=p(oa);ia=n(to,"accelerator.prepare()"),to.forEach(t),Gn=n(se," method changes the model to work in distributed training, so it won\u2019t have the "),ra=r(se,"CODE",{});var et=p(ra);Ha=n(et,"save_pretrained()"),et.forEach(t),Wt=n(se," method anymore; the "),ws=r(se,"CODE",{});var yi=p(ws);Ht=n(yi,"accelerator.unwrap_model()"),yi.forEach(t),Va=n(se," method undoes that step. Lastly, we call "),ut=r(se,"CODE",{});var on=p(ut);Un=n(on,"save_pretrained()"),on.forEach(t),Qa=n(se," but tell that method to use "),Je=r(se,"CODE",{});var $i=p(Je);Ra=n($i,"accelerator.save()"),$i.forEach(t),gs=n(se," instead of "),la=r(se,"CODE",{});var ki=p(la);Ga=n(ki,"torch.save()"),ki.forEach(t),Vt=n(se,"."),se.forEach(t),pa=c(u),de=r(u,"P",{});var bt=p(de);Ua=n(bt,"Once this is done, you should have a model that produces results pretty similar to the one trained with the "),ft=r(bt,"CODE",{});var ji=p(ft);Yn=n(ji,"Trainer"),ji.forEach(t),Ya=n(bt,". You can check the model we trained using this code at "),je=r(bt,"A",{href:!0,rel:!0});var qi=p(je);mt=r(qi,"EM",{});var so=p(mt);ai=n(so,"huggingface-course/bert-finetuned-squad-accelerate"),so.forEach(t),qi.forEach(t),Ja=n(bt,". And if you want to test out any tweaks to the training loop, you can directly implement them by editing the code shown above!"),bt.forEach(t),this.h()},h(){P(A,"id","a-custom-training-loop"),P(A,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(A,"href","#a-custom-training-loop"),P(x,"class","relative group"),P(F,"href","/course/chapter3/4"),P(H,"id","preparing-everything-for-training"),P(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(H,"href","#preparing-everything-for-training"),P(L,"class","relative group"),P(Re,"id","training-loop"),P(Re,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(Re,"href","#training-loop"),P(Qe,"class","relative group"),P(je,"href","https://huggingface.co/huggingface-course/bert-finetuned-squad-accelerate"),P(je,"rel","nofollow")},m(u,N){o(u,h,N),s(h,g),o(u,f,N),o(u,x,N),s(x,A),s(A,b),E(k,b,null),s(x,y),s(x,m),s(m,O),o(u,$,N),o(u,v,N),s(v,C),s(v,F),s(F,z),s(v,D),s(v,V),s(V,B),s(v,Q),o(u,M,N),o(u,L,N),s(L,H),s(H,K),E(G,K,null),s(L,I),s(L,Y),s(Y,Z),o(u,te,N),o(u,J,N),s(J,ie),s(J,fe),s(fe,Te),s(J,$e),s(J,me),s(me,_e),s(J,R),s(J,U),s(U,is),s(J,Ae),s(J,st),s(st,rs),s(J,Le),o(u,we,N),E(ce,u,N),o(u,ue,N),o(u,ae,N),s(ae,at),o(u,nt,N),E(xt,u,N),o(u,ls,N),o(u,ot,N),s(ot,ya),s(ot,ge),s(ge,Tn),s(ot,yt),o(u,$a,N),E($t,u,N),o(u,it,N),o(u,ne,N),s(ne,An),s(ne,ps),s(ps,We),s(ne,rt),s(ne,kt),s(kt,jt),s(ne,Dn),s(ne,qt),s(qt,Pn),s(ne,ka),s(ne,De),s(De,Cn),s(ne,Fs),s(ne,Ns),s(Ns,Sn),s(ne,ja),o(u,lt,N),E(pt,u,N),o(u,Et,N),o(u,Pe,N),s(Pe,qa),s(Pe,He),s(He,Ea),s(Pe,Tt),s(Pe,hs),s(hs,be),s(Pe,On),o(u,ds,N),E(At,u,N),o(u,Ta,N),o(u,pe,N),s(pe,zn),s(pe,Ms),s(Ms,Bs),s(pe,In),s(pe,Ls),s(Ls,Aa),s(pe,Dt),s(pe,cs),s(cs,Pt),s(pe,Da),o(u,ee,N),E(Ct,u,N),o(u,us,N),E(St,u,N),o(u,Pa,N),o(u,ht,N),s(ht,Fn),o(u,Ca,N),E(Ve,u,N),o(u,Sa,N),o(u,Ce,N),s(Ce,Ws),s(Ce,Hs),s(Hs,Nn),s(Ce,Vs),s(Ce,Qs),s(Qs,Mn),s(Ce,Rs),o(u,Oa,N),o(u,Qe,N),s(Qe,Re),s(Re,Se),E(Ot,Se,null),s(Qe,Gs),s(Qe,Us),s(Us,Bn),o(u,Ys,N),o(u,Oe,N),s(Oe,za),o(u,dt,N),o(u,ke,N),s(ke,ze),s(ze,Ln),s(ze,fs),s(fs,zt),s(ze,Ia),s(ke,It),s(ke,ve),s(ve,ms),s(ve,Js),s(Js,Fa),s(ve,Ft),s(ve,_s),s(_s,Nt),s(ve,Na),s(ve,ct),s(ct,Wn),s(ve,Ma),s(ke,Ge),s(ke,he),s(he,Xs),s(he,Ue),s(Ue,Hn),s(he,Ks),s(he,Zs),s(Zs,Ba),s(he,Mt),o(u,ea,N),o(u,Ye,N),s(Ye,Vn),o(u,ta,N),E(Ie,u,N),o(u,La,N),o(u,Bt,N),s(Bt,Lt),o(u,sa,N),E(oe,u,N),o(u,Wa,N),o(u,X,N),s(X,Qn),s(X,aa),s(aa,na),s(X,Rn),s(X,oa),s(oa,ia),s(X,Gn),s(X,ra),s(ra,Ha),s(X,Wt),s(X,ws),s(ws,Ht),s(X,Va),s(X,ut),s(ut,Un),s(X,Qa),s(X,Je),s(Je,Ra),s(X,gs),s(X,la),s(la,Ga),s(X,Vt),o(u,pa,N),o(u,de,N),s(de,Ua),s(de,ft),s(ft,Yn),s(de,Ya),s(de,je),s(je,mt),s(mt,ai),s(de,Ja),qe=!0},i(u){qe||(_(k.$$.fragment,u),_(G.$$.fragment,u),_(ce.$$.fragment,u),_(xt.$$.fragment,u),_($t.$$.fragment,u),_(pt.$$.fragment,u),_(At.$$.fragment,u),_(Ct.$$.fragment,u),_(St.$$.fragment,u),_(Ve.$$.fragment,u),_(Ot.$$.fragment,u),_(Ie.$$.fragment,u),_(oe.$$.fragment,u),qe=!0)},o(u){w(k.$$.fragment,u),w(G.$$.fragment,u),w(ce.$$.fragment,u),w(xt.$$.fragment,u),w($t.$$.fragment,u),w(pt.$$.fragment,u),w(At.$$.fragment,u),w(Ct.$$.fragment,u),w(St.$$.fragment,u),w(Ve.$$.fragment,u),w(Ot.$$.fragment,u),w(Ie.$$.fragment,u),w(oe.$$.fragment,u),qe=!1},d(u){u&&t(h),u&&t(f),u&&t(x),T(k),u&&t($),u&&t(v),u&&t(M),u&&t(L),T(G),u&&t(te),u&&t(J),u&&t(we),T(ce,u),u&&t(ue),u&&t(ae),u&&t(nt),T(xt,u),u&&t(ls),u&&t(ot),u&&t($a),T($t,u),u&&t(it),u&&t(ne),u&&t(lt),T(pt,u),u&&t(Et),u&&t(Pe),u&&t(ds),T(At,u),u&&t(Ta),u&&t(pe),u&&t(ee),T(Ct,u),u&&t(us),T(St,u),u&&t(Pa),u&&t(ht),u&&t(Ca),T(Ve,u),u&&t(Sa),u&&t(Ce),u&&t(Oa),u&&t(Qe),T(Ot),u&&t(Ys),u&&t(Oe),u&&t(dt),u&&t(ke),u&&t(ea),u&&t(Ye),u&&t(ta),T(Ie,u),u&&t(La),u&&t(Bt),u&&t(sa),T(oe,u),u&&t(Wa),u&&t(X),u&&t(pa),u&&t(de)}}}function m_(W){let h,g,f,x,A,b,k,y,m,O,$,v,C,F,z,D,V,B,Q,M,L,H,K,G,I,Y,Z,te,J,ie,fe,Te,$e,me,_e,R,U,is,Ae,st,rs,Le,we,ce,ue,ae,at,nt,xt,ls,ot,ya,ge,Tn,yt,$a,$t,it,ne,An,ps,We,rt,kt,jt,Dn,qt,Pn,ka,De,Cn,Fs,Ns,Sn,ja,lt,pt,Et,Pe,qa,He,Ea,Tt,hs,be,On,ds,At,Ta,pe,zn,Ms,Bs,In,Ls,Aa,Dt,cs,Pt,Da,ee,Ct,us,St,Pa,ht,Fn,Ca,Ve,Sa,Ce,Ws,Hs,Nn,Vs,Qs,Mn,Rs,Oa,Qe,Re,Se,Ot,Gs,Us,Bn,Ys,Oe,za,dt,ke,ze,Ln,fs,zt,Ia,It,ve,ms,Js,Fa,Ft,_s,Nt,Na,ct,Wn,Ma,Ge,he,Xs,Ue,Hn,Ks,Zs,Ba,Mt,ea,Ye,Vn,ta,Ie,La,Bt,Lt,sa,oe,Wa,X,Qn,aa,na,Rn,oa,ia,Gn,ra,Ha,Wt,ws,Ht,Va,ut,Un,Qa,Je,Ra,gs,la,Ga,Vt,pa,de,Ua,ft,Yn,Ya,je,mt,ai,Ja,qe,u,N,Xa,ni,Ka,oi,bs,Jn,ha,Za,Xn,Ee,da,xe,ii,ri,li,ca,en,tn,pi,ye,ua,sn,hi,di,ci,Xe,an,ui,_t,Kn,vs,Zn,xs,Qt,Ke,fi,ys,mi,_i,nn,wi,$s,fa,Ze,wt,ma,gi,bi,gt,vi,xi,eo,ks,se,js,to,et,yi,on,$i,ki,bt,ji,qi,so,ao,bl,no,vl,Ei,xh,xl,oo,yl,io,$l,Ti,yh,kl,Ai,$h,jl,rn,Di,qr,kh,jh,qh,qs,Er,Eh,Th,Tr,Ah,Dh,Ar,Ph,Ch,ql,Es,Sh,Dr,Oh,zh,Pr,Ih,Fh,El,ln,Nh,Cr,Mh,Bh,Tl,ro,Al,lo,Dl,pn,Lh,Sr,Wh,Hh,Pl,po,Cl,ho,Sl,hn,Vh,Or,Qh,Rh,Ol,co,zl,uo,Il,Pi,Gh,Fl,dn,Nl,Ci,Uh,Ml,fo,Bl,Si,Yh,Ll,Ts,Jh,zr,Xh,Kh,Ir,Zh,ed,Wl,mo,Hl,_o,Vl,Oi,td,Ql,_a,cn,Fr,wo,sd,Nr,ad,Rl,zi,nd,Gl,As,od,Mr,id,rd,Br,ld,pd,Ul,go,Yl,Ii,hd,Jl,bo,Xl,vo,Kl,Fi,dd,Zl,Ni,cd,ep,Rt,Gt,Mi,wa,un,Lr,xo,ud,Wr,fd,tp,Ut,Yt,Bi,fn,md,yo,Hr,_d,wd,gd,sp,vt,Vr,bd,vd,Qr,xd,yd,$o,$d,Rr,kd,jd,qd,ga,Ed,Gr,Td,Ad,Ur,Dd,Pd,ap,Fe,Cd,Yr,Sd,Od,Jr,zd,Id,Xr,Fd,Nd,np,zm='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>log</mi><mo>\u2061</mo><mo stretchy="false">(</mo><mi>a</mi><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><mi>log</mi><mo>\u2061</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>log</mi><mo>\u2061</mo><mo stretchy="false">(</mo><mi>b</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\log(ab) = \\log(a) + \\log(b)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">ab</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mclose">)</span></span></span></span>',op,ip,mn,Md,Kr,Bd,Ld,rp,ko,lp,Li,Wd,pp,jo,hp,_n,Hd,Zr,Vd,Qd,dp,Jt,Xt,Wi,Ne,Rd,el,Gd,Ud,tl,Yd,Jd,sl,Xd,Kd,al,Zd,ec,cp,qo,up,wn,tc,nl,sc,ac,fp,Ds,ol,nc,oc,il,ic,rc,Eo,lc,rl,pc,hc,mp,Hi,dc,_p,To,wp,Vi,cc,gp,Ao,bp,Qi,uc,vp,Do,xp,Ri,fc,yp,Po,$p,Co,kp,Gi,mc,jp,So,qp,Oo,Ep,gn,_c,zo,wc,gc,Tp,Ui,Io,Ap,Yi,bc,Dp,Fo,Pp,No,Cp,Ji,vc,Sp,ba,bn,ll,Mo,xc,pl,yc,Op,Kt,Zt,Xi,Ki,$c,zp,Zi,kc,Ip,Bo,Fp,er,jc,Np,Lo,Mp,es,ts,tr,Me,qc,hl,Ec,Tc,dl,Ac,Dc,cl,Pc,Cc,ul,Sc,Oc,Bp,ss,as,sr,ar,zc,Lp,ns,os,nr,Wo,Wp,or,Ic,Hp,ir,rr,Fc,Vp,vn,Qp,lr,va,xn,fl,Ho,Nc,ml,Mc,Rp,yn,Bc,_l,Lc,Wc,Gp,Vo,Up,Qo,Yp,pr,Hc,Jp;f=new Rm({props:{fw:W[0]}}),y=new tt({});const Jc=[Um,Gm],Ro=[];function Xc(e,l){return e[0]==="pt"?0:1}C=Xc(W),F=Ro[C]=Jc[C](W),I=new vh({props:{id:"ajPx5LwJD-I"}}),_e=new Qm({props:{model:W[1]}}),we=new bh({props:{$$slots:{default:[Ym]},$$scope:{ctx:W}}}),nt=new tt({}),jt=new tt({}),lt=new S({props:{codee:`from datasets import load_dataset

raw_datasets = load_dataset("squad"),`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

raw_datasets = load_dataset(<span class="hljs-string">&quot;squad&quot;</span>)`}}),He=new S({props:{codee:"raw_datasets,",highlighted:"raw_datasets"}}),Tt=new S({props:{codee:`DatasetDict({
    train: Dataset({
        features: ['id', 'title', 'context', 'question', 'answers'],
        num_rows: 87599
    })
    validation: Dataset({
        features: ['id', 'title', 'context', 'question', 'answers'],
        num_rows: 10570
    })
}),`,highlighted:`DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-string">&#x27;title&#x27;</span>, <span class="hljs-string">&#x27;context&#x27;</span>, <span class="hljs-string">&#x27;question&#x27;</span>, <span class="hljs-string">&#x27;answers&#x27;</span>],
        num_rows: <span class="hljs-number">87599</span>
    })
    validation: Dataset({
        features: [<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-string">&#x27;title&#x27;</span>, <span class="hljs-string">&#x27;context&#x27;</span>, <span class="hljs-string">&#x27;question&#x27;</span>, <span class="hljs-string">&#x27;answers&#x27;</span>],
        num_rows: <span class="hljs-number">10570</span>
    })
})`}}),Dt=new S({props:{codee:`print("Context: ", raw_datasets["train"][0]["context"])
print("Question: ", raw_datasets["train"][0]["question"])
print("Answer: ", raw_datasets["train"][0]["answers"]),`,highlighted:`<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Context: &quot;</span>, raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;context&quot;</span>])
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Question: &quot;</span>, raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;question&quot;</span>])
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Answer: &quot;</span>, raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;answers&quot;</span>])`}}),Pt=new S({props:{codee:`Context: 'Architecturally, the school has a Catholic character. Atop the Main Building\\'s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend "Venite Ad Me Omnes". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.'
Question: 'To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?'
Answer: {'text': ['Saint Bernadette Soubirous'], 'answer_start': [515]},`,highlighted:`Context: <span class="hljs-string">&#x27;Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot;Venite Ad Me Omnes&quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.&#x27;</span>
Question: <span class="hljs-string">&#x27;To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?&#x27;</span>
Answer: {<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Saint Bernadette Soubirous&#x27;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">515</span>]}`}}),Oe=new S({props:{codee:'raw_datasets["train"].filter(lambda x: len(x["answers"]["text"]) != 1),',highlighted:'raw_datasets[<span class="hljs-string">&quot;train&quot;</span>].<span class="hljs-built_in">filter</span>(<span class="hljs-keyword">lambda</span> x: <span class="hljs-built_in">len</span>(x[<span class="hljs-string">&quot;answers&quot;</span>][<span class="hljs-string">&quot;text&quot;</span>]) != <span class="hljs-number">1</span>)'}}),dt=new S({props:{codee:`Dataset({
    features: ['id', 'title', 'context', 'question', 'answers'],
    num_rows: 0
}),`,highlighted:`Dataset({
    features: [<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-string">&#x27;title&#x27;</span>, <span class="hljs-string">&#x27;context&#x27;</span>, <span class="hljs-string">&#x27;question&#x27;</span>, <span class="hljs-string">&#x27;answers&#x27;</span>],
    num_rows: <span class="hljs-number">0</span>
})`}}),zt=new S({props:{codee:`print(raw_datasets["validation"][0]["answers"])
print(raw_datasets["validation"][2]["answers"]),`,highlighted:`<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;answers&quot;</span>])
<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">2</span>][<span class="hljs-string">&quot;answers&quot;</span>])`}}),It=new S({props:{codee:`{'text': ['Denver Broncos', 'Denver Broncos', 'Denver Broncos'], 'answer_start': [177, 177, 177]}
{'text': ['Santa Clara, California', "Levi's Stadium", "Levi's Stadium in the San Francisco Bay Area at Santa Clara, California."], 'answer_start': [403, 355, 355]},`,highlighted:`{<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">177</span>, <span class="hljs-number">177</span>, <span class="hljs-number">177</span>]}
{<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Santa Clara, California&#x27;</span>, <span class="hljs-string">&quot;Levi&#x27;s Stadium&quot;</span>, <span class="hljs-string">&quot;Levi&#x27;s Stadium in the San Francisco Bay Area at Santa Clara, California.&quot;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">403</span>, <span class="hljs-number">355</span>, <span class="hljs-number">355</span>]}`}}),Ft=new S({props:{codee:`print(raw_datasets["validation"][2]["context"])
print(raw_datasets["validation"][2]["question"]),`,highlighted:`<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">2</span>][<span class="hljs-string">&quot;context&quot;</span>])
<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">2</span>][<span class="hljs-string">&quot;question&quot;</span>])`}}),Nt=new S({props:{codee:`'Super Bowl 50 was an American football game to determine the champion of the National Football League (NFL) for the 2015 season. The American Football Conference (AFC) champion Denver Broncos defeated the National Football Conference (NFC) champion Carolina Panthers 24\u201310 to earn their third Super Bowl title. The game was played on February 7, 2016, at Levi\\'s Stadium in the San Francisco Bay Area at Santa Clara, California. As this was the 50th Super Bowl, the league emphasized the "golden anniversary" with various gold-themed initiatives, as well as temporarily suspending the tradition of naming each Super Bowl game with Roman numerals (under which the game would have been known as "Super Bowl L"), so that the logo could prominently feature the Arabic numerals 50.'
'Where did Super Bowl 50 take place?',`,highlighted:`<span class="hljs-string">&#x27;Super Bowl 50 was an American football game to determine the champion of the National Football League (NFL) for the 2015 season. The American Football Conference (AFC) champion Denver Broncos defeated the National Football Conference (NFC) champion Carolina Panthers 24\u201310 to earn their third Super Bowl title. The game was played on February 7, 2016, at Levi\\&#x27;s Stadium in the San Francisco Bay Area at Santa Clara, California. As this was the 50th Super Bowl, the league emphasized the &quot;golden anniversary&quot; with various gold-themed initiatives, as well as temporarily suspending the tradition of naming each Super Bowl game with Roman numerals (under which the game would have been known as &quot;Super Bowl L&quot;), so that the logo could prominently feature the Arabic numerals 50.&#x27;</span>
<span class="hljs-string">&#x27;Where did Super Bowl 50 take place?&#x27;</span>`}}),Ue=new tt({}),Mt=new vh({props:{id:"qgaM0weJHpA"}}),Lt=new S({props:{codee:`from transformers import AutoTokenizer

model_checkpoint = "bert-base-cased"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

model_checkpoint = <span class="hljs-string">&quot;bert-base-cased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)`}}),Wt=new S({props:{codee:"tokenizer.is_fast,",highlighted:"tokenizer.is_fast"}}),Ht=new S({props:{codee:"True,",highlighted:'<span class="hljs-literal">True</span>'}}),Je=new S({props:{codee:"[CLS] question [SEP] context [SEP],",highlighted:'<span class="hljs-selector-attr">[CLS]</span> question <span class="hljs-selector-attr">[SEP]</span> context <span class="hljs-selector-attr">[SEP]</span>'}}),Vt=new S({props:{codee:`context = raw_datasets["train"][0]["context"]
question = raw_datasets["train"][0]["question"]

inputs = tokenizer(question, context)
tokenizer.decode(inputs["input_ids"]),`,highlighted:`context = raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;context&quot;</span>]
question = raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;question&quot;</span>]

inputs = tokenizer(question, context)
tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),de=new S({props:{codee:`'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Architecturally, '
'the school has a Catholic character. Atop the Main Building\\'s gold dome is a golden statue of the Virgin '
'Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms '
'upraised with the legend " Venite Ad Me Omnes ". Next to the Main Building is the Basilica of the Sacred '
'Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a '
'replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette '
'Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 statues '
'and the Gold Dome ), is a simple, modern stone statue of Mary. [SEP]',`,highlighted:`<span class="hljs-string">&#x27;[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Architecturally, &#x27;</span>
<span class="hljs-string">&#x27;the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin &#x27;</span>
<span class="hljs-string">&#x27;Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms &#x27;</span>
<span class="hljs-string">&#x27;upraised with the legend &quot; Venite Ad Me Omnes &quot;. Next to the Main Building is the Basilica of the Sacred &#x27;</span>
<span class="hljs-string">&#x27;Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a &#x27;</span>
<span class="hljs-string">&#x27;replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette &#x27;</span>
<span class="hljs-string">&#x27;Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 statues &#x27;</span>
<span class="hljs-string">&#x27;and the Gold Dome ), is a simple, modern stone statue of Mary. [SEP]&#x27;</span>`}}),vs=new S({props:{codee:`inputs = tokenizer(
    question,
    context,
    max_length=100,
    truncation="only_second",
    stride=50,
    return_overflowing_tokens=True,
)

for ids in inputs["input_ids"]:
    print(tokenizer.decode(ids)),`,highlighted:`inputs = tokenizer(
    question,
    context,
    max_length=<span class="hljs-number">100</span>,
    truncation=<span class="hljs-string">&quot;only_second&quot;</span>,
    stride=<span class="hljs-number">50</span>,
    return_overflowing_tokens=<span class="hljs-literal">True</span>,
)

<span class="hljs-keyword">for</span> ids <span class="hljs-keyword">in</span> inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]:
    <span class="hljs-built_in">print</span>(tokenizer.decode(ids))`}}),xs=new S({props:{codee:`'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Architecturally, the school has a Catholic character. Atop the Main Building\\'s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend " Venite Ad Me Omnes ". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basi [SEP]'
'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend " Venite Ad Me Omnes ". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin [SEP]'
'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 [SEP]'
'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP]. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 statues and the Gold Dome ), is a simple, modern stone statue of Mary. [SEP]',`,highlighted:`<span class="hljs-string">&#x27;[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot; Venite Ad Me Omnes &quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basi [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot; Venite Ad Me Omnes &quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP]. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 statues and the Gold Dome ), is a simple, modern stone statue of Mary. [SEP]&#x27;</span>`}}),ks=new S({props:{codee:`inputs = tokenizer(
    question,
    context,
    max_length=100,
    truncation="only_second",
    stride=50,
    return_overflowing_tokens=True,
    return_offsets_mapping=True,
)
inputs.keys(),`,highlighted:`inputs = tokenizer(
    question,
    context,
    max_length=<span class="hljs-number">100</span>,
    truncation=<span class="hljs-string">&quot;only_second&quot;</span>,
    stride=<span class="hljs-number">50</span>,
    return_overflowing_tokens=<span class="hljs-literal">True</span>,
    return_offsets_mapping=<span class="hljs-literal">True</span>,
)
inputs.keys()`}}),js=new S({props:{codee:"dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'offset_mapping', 'overflow_to_sample_mapping']),",highlighted:'dict_keys([<span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;token_type_ids&#x27;</span>, <span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;offset_mapping&#x27;</span>, <span class="hljs-string">&#x27;overflow_to_sample_mapping&#x27;</span>])'}}),ao=new S({props:{codee:'inputs["overflow_to_sample_mapping"],',highlighted:'inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>]'}}),no=new S({props:{codee:"[0, 0, 0, 0],",highlighted:'[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]'}}),oo=new S({props:{codee:`inputs = tokenizer(
    raw_datasets["train"][2:6]["question"],
    raw_datasets["train"][2:6]["context"],
    max_length=100,
    truncation="only_second",
    stride=50,
    return_overflowing_tokens=True,
    return_offsets_mapping=True,
)

print(f"The 4 examples gave {len(inputs['input_ids'])} features.")
print(f"Here is where each comes from: {inputs['overflow_to_sample_mapping']}."),`,highlighted:`inputs = tokenizer(
    raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">2</span>:<span class="hljs-number">6</span>][<span class="hljs-string">&quot;question&quot;</span>],
    raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">2</span>:<span class="hljs-number">6</span>][<span class="hljs-string">&quot;context&quot;</span>],
    max_length=<span class="hljs-number">100</span>,
    truncation=<span class="hljs-string">&quot;only_second&quot;</span>,
    stride=<span class="hljs-number">50</span>,
    return_overflowing_tokens=<span class="hljs-literal">True</span>,
    return_offsets_mapping=<span class="hljs-literal">True</span>,
)

<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;The 4 examples gave <span class="hljs-subst">{<span class="hljs-built_in">len</span>(inputs[<span class="hljs-string">&#x27;input_ids&#x27;</span>])}</span> features.&quot;</span>)
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Here is where each comes from: <span class="hljs-subst">{inputs[<span class="hljs-string">&#x27;overflow_to_sample_mapping&#x27;</span>]}</span>.&quot;</span>)`}}),io=new S({props:{codee:`'The 4 examples gave 19 features.'
'Here is where each comes from: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3].',`,highlighted:`<span class="hljs-string">&#x27;The 4 examples gave 19 features.&#x27;</span>
<span class="hljs-string">&#x27;Here is where each comes from: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3].&#x27;</span>`}}),ro=new S({props:{codee:`answers = raw_datasets["train"][2:6]["answers"]
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

start_positions, end_positions,`,highlighted:`answers = raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">2</span>:<span class="hljs-number">6</span>][<span class="hljs-string">&quot;answers&quot;</span>]
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

start_positions, end_positions`}}),lo=new S({props:{codee:`([83, 51, 19, 0, 0, 64, 27, 0, 34, 0, 0, 0, 67, 34, 0, 0, 0, 0, 0],
 [85, 53, 21, 0, 0, 70, 33, 0, 40, 0, 0, 0, 68, 35, 0, 0, 0, 0, 0]),`,highlighted:`([<span class="hljs-number">83</span>, <span class="hljs-number">51</span>, <span class="hljs-number">19</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">64</span>, <span class="hljs-number">27</span>, <span class="hljs-number">0</span>, <span class="hljs-number">34</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">67</span>, <span class="hljs-number">34</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
 [<span class="hljs-number">85</span>, <span class="hljs-number">53</span>, <span class="hljs-number">21</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">70</span>, <span class="hljs-number">33</span>, <span class="hljs-number">0</span>, <span class="hljs-number">40</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">68</span>, <span class="hljs-number">35</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>])`}}),po=new S({props:{codee:`idx = 0
sample_idx = inputs["overflow_to_sample_mapping"][idx]
answer = answers[sample_idx]["text"][0]

start = start_positions[idx]
end = end_positions[idx]
labeled_answer = tokenizer.decode(inputs["input_ids"][idx][start : end + 1])

print(f"Theoretical answer: {answer}, labels give: {labeled_answer}"),`,highlighted:`idx = <span class="hljs-number">0</span>
sample_idx = inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>][idx]
answer = answers[sample_idx][<span class="hljs-string">&quot;text&quot;</span>][<span class="hljs-number">0</span>]

start = start_positions[idx]
end = end_positions[idx]
labeled_answer = tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][idx][start : end + <span class="hljs-number">1</span>])

<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Theoretical answer: <span class="hljs-subst">{answer}</span>, labels give: <span class="hljs-subst">{labeled_answer}</span>&quot;</span>)`}}),ho=new S({props:{codee:"'Theoretical answer: the Main Building, labels give: the Main Building',",highlighted:'<span class="hljs-string">&#x27;Theoretical answer: the Main Building, labels give: the Main Building&#x27;</span>'}}),co=new S({props:{codee:`idx = 4
sample_idx = inputs["overflow_to_sample_mapping"][idx]
answer = answers[sample_idx]["text"][0]

decoded_example = tokenizer.decode(inputs["input_ids"][idx])
print(f"Theoretical answer: {answer}, decoded example: {decoded_example}"),`,highlighted:`idx = <span class="hljs-number">4</span>
sample_idx = inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>][idx]
answer = answers[sample_idx][<span class="hljs-string">&quot;text&quot;</span>][<span class="hljs-number">0</span>]

decoded_example = tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][idx])
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Theoretical answer: <span class="hljs-subst">{answer}</span>, decoded example: <span class="hljs-subst">{decoded_example}</span>&quot;</span>)`}}),uo=new S({props:{codee:`'Theoretical answer: a Marian place of prayer and reflection, decoded example: [CLS] What is the Grotto at Notre Dame? [SEP] Architecturally, the school has a Catholic character. Atop the Main Building\\'s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend " Venite Ad Me Omnes ". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grot [SEP]',`,highlighted:'<span class="hljs-string">&#x27;Theoretical answer: a Marian place of prayer and reflection, decoded example: [CLS] What is the Grotto at Notre Dame? [SEP] Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot; Venite Ad Me Omnes &quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grot [SEP]&#x27;</span>'}}),dn=new bh({props:{$$slots:{default:[Jm]},$$scope:{ctx:W}}}),fo=new S({props:{codee:`max_length = 384
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
    return inputs,`,highlighted:`max_length = <span class="hljs-number">384</span>
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
    <span class="hljs-keyword">return</span> inputs`}}),mo=new S({props:{codee:`train_dataset = raw_datasets["train"].map(
    preprocess_training_examples,
    batched=True,
    remove_columns=raw_datasets["train"].column_names,
)
len(raw_datasets["train"]), len(train_dataset),`,highlighted:`train_dataset = raw_datasets[<span class="hljs-string">&quot;train&quot;</span>].<span class="hljs-built_in">map</span>(
    preprocess_training_examples,
    batched=<span class="hljs-literal">True</span>,
    remove_columns=raw_datasets[<span class="hljs-string">&quot;train&quot;</span>].column_names,
)
<span class="hljs-built_in">len</span>(raw_datasets[<span class="hljs-string">&quot;train&quot;</span>]), <span class="hljs-built_in">len</span>(train_dataset)`}}),_o=new S({props:{codee:"(87599, 88729),",highlighted:'(<span class="hljs-number">87599</span>, <span class="hljs-number">88729</span>)'}}),wo=new tt({}),go=new S({props:{codee:`def preprocess_validation_examples(examples):
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
    return inputs,`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_validation_examples</span>(<span class="hljs-params">examples</span>):
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
    <span class="hljs-keyword">return</span> inputs`}}),bo=new S({props:{codee:`validation_dataset = raw_datasets["validation"].map(
    preprocess_validation_examples,
    batched=True,
    remove_columns=raw_datasets["validation"].column_names,
)
len(raw_datasets["validation"]), len(validation_dataset),`,highlighted:`validation_dataset = raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>].<span class="hljs-built_in">map</span>(
    preprocess_validation_examples,
    batched=<span class="hljs-literal">True</span>,
    remove_columns=raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>].column_names,
)
<span class="hljs-built_in">len</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>]), <span class="hljs-built_in">len</span>(validation_dataset)`}}),vo=new S({props:{codee:"(10570, 10822),",highlighted:'(<span class="hljs-number">10570</span>, <span class="hljs-number">10822</span>)'}});const Kc=[Km,Xm],Go=[];function Zc(e,l){return e[0]==="pt"?0:1}Rt=Zc(W),Gt=Go[Rt]=Kc[Rt](W),xo=new tt({});const eu=[e_,Zm],Uo=[];function tu(e,l){return e[0]==="pt"?0:1}Ut=tu(W),Yt=Uo[Ut]=eu[Ut](W),ko=new S({props:{codee:`small_eval_set = raw_datasets["validation"].select(range(100))
trained_checkpoint = "distilbert-base-cased-distilled-squad"

tokenizer = AutoTokenizer.from_pretrained(trained_checkpoint)
eval_set = small_eval_set.map(
    preprocess_validation_examples,
    batched=True,
    remove_columns=raw_datasets["validation"].column_names,
),`,highlighted:`small_eval_set = raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>].select(<span class="hljs-built_in">range</span>(<span class="hljs-number">100</span>))
trained_checkpoint = <span class="hljs-string">&quot;distilbert-base-cased-distilled-squad&quot;</span>

tokenizer = AutoTokenizer.from_pretrained(trained_checkpoint)
eval_set = small_eval_set.<span class="hljs-built_in">map</span>(
    preprocess_validation_examples,
    batched=<span class="hljs-literal">True</span>,
    remove_columns=raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>].column_names,
)`}}),jo=new S({props:{codee:"tokenizer = AutoTokenizer.from_pretrained(model_checkpoint),",highlighted:"tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)"}});const su=[s_,t_],Yo=[];function au(e,l){return e[0]==="pt"?0:1}Jt=au(W),Xt=Yo[Jt]=su[Jt](W),qo=new S({props:{codee:`import collections

example_to_features = collections.defaultdict(list)
for idx, feature in enumerate(eval_set):
    example_to_features[feature["example_id"]].append(idx),`,highlighted:`<span class="hljs-keyword">import</span> collections

example_to_features = collections.defaultdict(<span class="hljs-built_in">list</span>)
<span class="hljs-keyword">for</span> idx, feature <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(eval_set):
    example_to_features[feature[<span class="hljs-string">&quot;example_id&quot;</span>]].append(idx)`}}),To=new S({props:{codee:`import numpy as np

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
    predicted_answers.append({"id": example_id, "prediction_text": best_answer["text"]}),`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

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
    predicted_answers.append({<span class="hljs-string">&quot;id&quot;</span>: example_id, <span class="hljs-string">&quot;prediction_text&quot;</span>: best_answer[<span class="hljs-string">&quot;text&quot;</span>]})`}}),Ao=new S({props:{codee:`from datasets import load_metric

metric = load_metric("squad"),`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric

metric = load_metric(<span class="hljs-string">&quot;squad&quot;</span>)`}}),Do=new S({props:{codee:`theoretical_answers = [
    {"id": ex["id"], "answers": ex["answers"]} for ex in small_eval_set
],`,highlighted:`theoretical_answers = [
    {<span class="hljs-string">&quot;id&quot;</span>: ex[<span class="hljs-string">&quot;id&quot;</span>], <span class="hljs-string">&quot;answers&quot;</span>: ex[<span class="hljs-string">&quot;answers&quot;</span>]} <span class="hljs-keyword">for</span> ex <span class="hljs-keyword">in</span> small_eval_set
]`}}),Po=new S({props:{codee:`print(predicted_answers[0])
print(theoretical_answers[0]),`,highlighted:`<span class="hljs-built_in">print</span>(predicted_answers[<span class="hljs-number">0</span>])
<span class="hljs-built_in">print</span>(theoretical_answers[<span class="hljs-number">0</span>])`}}),Co=new S({props:{codee:`{'id': '56be4db0acb8001400a502ec', 'prediction_text': 'Denver Broncos'}
{'id': '56be4db0acb8001400a502ec', 'answers': {'text': ['Denver Broncos', 'Denver Broncos', 'Denver Broncos'], 'answer_start': [177, 177, 177]}},`,highlighted:`{<span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;56be4db0acb8001400a502ec&#x27;</span>, <span class="hljs-string">&#x27;prediction_text&#x27;</span>: <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>}
{<span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;56be4db0acb8001400a502ec&#x27;</span>, <span class="hljs-string">&#x27;answers&#x27;</span>: {<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">177</span>, <span class="hljs-number">177</span>, <span class="hljs-number">177</span>]}}`}}),So=new S({props:{codee:"metric.compute(predictions=predicted_answers, references=theoretical_answers),",highlighted:"metric.compute(predictions=predicted_answers, references=theoretical_answers)"}}),Oo=new S({props:{codee:"{'exact_match': 83.0, 'f1': 88.25},",highlighted:'{<span class="hljs-string">&#x27;exact_match&#x27;</span>: <span class="hljs-number">83.0</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">88.25</span>}'}});function nu(e,l){return e[0]==="pt"?n_:a_}let Xp=nu(W),xa=Xp(W);Io=new S({props:{codee:`from tqdm.auto import tqdm


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
    return metric.compute(predictions=predicted_answers, references=theoretical_answers),`,highlighted:`<span class="hljs-keyword">from</span> tqdm.auto <span class="hljs-keyword">import</span> tqdm


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
    <span class="hljs-keyword">return</span> metric.compute(predictions=predicted_answers, references=theoretical_answers)`}}),Fo=new S({props:{codee:"compute_metrics(start_logits, end_logits, eval_set, small_eval_set),",highlighted:"compute_metrics(start_logits, end_logits, eval_set, small_eval_set)"}}),No=new S({props:{codee:"{'exact_match': 83.0, 'f1': 88.25},",highlighted:'{<span class="hljs-string">&#x27;exact_match&#x27;</span>: <span class="hljs-number">83.0</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">88.25</span>}'}}),Mo=new tt({});const ou=[i_,o_],Jo=[];function iu(e,l){return e[0]==="pt"?0:1}Kt=iu(W),Zt=Jo[Kt]=ou[Kt](W),Bo=new S({props:{codee:`from huggingface_hub import notebook_login

notebook_login(),`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Lo=new S({props:{codee:"huggingface-cli login,",highlighted:"huggingface-cli login"}});const ru=[l_,r_],Xo=[];function lu(e,l){return e[0]==="pt"?0:1}es=lu(W),ts=Xo[es]=ru[es](W);const pu=[h_,p_],Ko=[];function hu(e,l){return e[0]==="pt"?0:1}ss=hu(W),as=Ko[ss]=pu[ss](W);const du=[u_,c_],Zo=[];function cu(e,l){return e[0]==="pt"?0:1}ns=cu(W),os=Zo[ns]=du[ns](W),Wo=new S({props:{codee:"{'exact_match': 81.18259224219489, 'f1': 88.67381321905516},",highlighted:'{<span class="hljs-string">&#x27;exact_match&#x27;</span>: <span class="hljs-number">81.18259224219489</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">88.67381321905516</span>}'}});let re=W[0]==="pt"&&Cm();vn=new bh({props:{$$slots:{default:[f_]},$$scope:{ctx:W}}});let le=W[0]==="pt"&&Sm();return Ho=new tt({}),Vo=new S({props:{codee:`from transformers import pipeline

# Replace this with your own checkpoint
model_checkpoint = "huggingface-course/bert-finetuned-squad"
question_answerer = pipeline("question-answering", model=model_checkpoint)

context = """
\u{1F917} Transformers is backed by the three most popular deep learning libraries \u2014 Jax, PyTorch and TensorFlow \u2014 with a seamless integration
between them. It's straightforward to train your models with one before loading them for inference with the other.
"""
question = "Which deep learning libraries back \u{1F917} Transformers?"
question_answerer(question=question, context=context),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

<span class="hljs-comment"># Replace this with your own checkpoint</span>
model_checkpoint = <span class="hljs-string">&quot;huggingface-course/bert-finetuned-squad&quot;</span>
question_answerer = pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>, model=model_checkpoint)

context = <span class="hljs-string">&quot;&quot;&quot;
\u{1F917} Transformers is backed by the three most popular deep learning libraries \u2014 Jax, PyTorch and TensorFlow \u2014 with a seamless integration
between them. It&#x27;s straightforward to train your models with one before loading them for inference with the other.
&quot;&quot;&quot;</span>
question = <span class="hljs-string">&quot;Which deep learning libraries back \u{1F917} Transformers?&quot;</span>
question_answerer(question=question, context=context)`}}),Qo=new S({props:{codee:`{'score': 0.9979003071784973,
 'start': 78,
 'end': 105,
 'answer': 'Jax, PyTorch and TensorFlow'},`,highlighted:`{<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9979003071784973</span>,
 <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">78</span>,
 <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">105</span>,
 <span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Jax, PyTorch and TensorFlow&#x27;</span>}`}}),{c(){h=i("meta"),g=d(),j(f.$$.fragment),x=d(),A=i("h1"),b=i("a"),k=i("span"),j(y.$$.fragment),m=d(),O=i("span"),$=a("Question answering"),v=d(),F.c(),z=d(),D=i("p"),V=a("Time to look at question answering! This task comes in many flavors, but the one we\u2019ll focus on in this section is called "),B=i("em"),Q=a("extractive"),M=a(" question answering. This involves posing questions about a document and identifying the answers as "),L=i("em"),H=a("spans of text"),K=a(" in the document itself."),G=d(),j(I.$$.fragment),Y=d(),Z=i("p"),te=a("We will fine-tune a BERT model on the "),J=i("a"),ie=a("SQuAD dataset"),fe=a(", which consists of questions posed by crowdworkers on a set of Wikipedia articles. This will give us a model able to compute predictions like this one:"),Te=d(),$e=i("div"),me=i("div"),j(_e.$$.fragment),R=d(),U=i("p"),is=a("This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it and double-check the predictions "),Ae=i("a"),st=a("here"),rs=a("."),Le=d(),j(we.$$.fragment),ce=d(),ue=i("h2"),ae=i("a"),at=i("span"),j(nt.$$.fragment),xt=d(),ls=i("span"),ot=a("Preparing the data"),ya=d(),ge=i("p"),Tn=a("The dataset that is used the most as an academic benchmark for extractive question answering is "),yt=i("a"),$a=a("SQuAD"),$t=a(", so that\u2019s the one we\u2019ll use here. There is also a harder "),it=i("a"),ne=a("SQuAD v2"),An=a(" benchmark, which includes questions that don\u2019t have an answer. As long as your own dataset contains a column for contexts, a column for questions, and a column for answers, you should be able to adapt the steps below."),ps=d(),We=i("h3"),rt=i("a"),kt=i("span"),j(jt.$$.fragment),Dn=d(),qt=i("span"),Pn=a("The SQuAD dataset"),ka=d(),De=i("p"),Cn=a("As usual, we can download and cache the dataset in just one step thanks to "),Fs=i("code"),Ns=a("load_dataset()"),Sn=a(":"),ja=d(),j(lt.$$.fragment),pt=d(),Et=i("p"),Pe=a("We can then have a look at this object to learn more about the SQuAD dataset:"),qa=d(),j(He.$$.fragment),Ea=d(),j(Tt.$$.fragment),hs=d(),be=i("p"),On=a("It looks like we have everything we need with the "),ds=i("code"),At=a("context"),Ta=a(", "),pe=i("code"),zn=a("question"),Ms=a(", and "),Bs=i("code"),In=a("answers"),Ls=a(" fields, so let\u2019s print those for the first element of our training set:"),Aa=d(),j(Dt.$$.fragment),cs=d(),j(Pt.$$.fragment),Da=d(),ee=i("p"),Ct=a("The "),us=i("code"),St=a("context"),Pa=a(" and "),ht=i("code"),Fn=a("question"),Ca=a(" fields are very straightforward to use. The "),Ve=i("code"),Sa=a("answers"),Ce=a(" field is a bit trickier as it comports a dictionary with two fields that are both lists. This is the format that will be expected by the "),Ws=i("code"),Hs=a("squad"),Nn=a(" metric during evaluation; if you are using your own data, you don\u2019t necessarily need to worry about putting the answers in the same format. The "),Vs=i("code"),Qs=a("text"),Mn=a(" field is rather obvious, and the "),Rs=i("code"),Oa=a("answer_start"),Qe=a(" field contains the starting character index of each answer in the context."),Re=d(),Se=i("p"),Ot=a("During training, there is only one possible answer. We can double-check this by using the "),Gs=i("code"),Us=a("Dataset.filter()"),Bn=a(" method:"),Ys=d(),j(Oe.$$.fragment),za=d(),j(dt.$$.fragment),ke=d(),ze=i("p"),Ln=a("For evaluation, however, there are several possible answers for each sample, which may be the same or different:"),fs=d(),j(zt.$$.fragment),Ia=d(),j(It.$$.fragment),ve=d(),ms=i("p"),Js=a("We won\u2019t dive into the evaluation script as it will all be wrapped up by a \u{1F917} Datasets metric for us, but the short version is that some of the questions have several possible answers, and this script will compare a predicted answer to all the acceptable answers and take the best score. If we take a look at the sample at index 2, for instance:"),Fa=d(),j(Ft.$$.fragment),_s=d(),j(Nt.$$.fragment),Na=d(),ct=i("p"),Wn=a("we can see that the answer can indeed be one of the three possibilities we saw before."),Ma=d(),Ge=i("h3"),he=i("a"),Xs=i("span"),j(Ue.$$.fragment),Hn=d(),Ks=i("span"),Zs=a("Processing the training data"),Ba=d(),j(Mt.$$.fragment),ea=d(),Ye=i("p"),Vn=a("Let\u2019s start with preprocessing the training data. The hard part will be to generate labels for the question\u2019s answer, which will be the start and end positions of the tokens corresponding to the answer inside the context."),ta=d(),Ie=i("p"),La=a("But let\u2019s not get ahead of ourselves. First, we need to convert the text in the input into IDs the model can make sense of, using a tokenizer:"),Bt=d(),j(Lt.$$.fragment),sa=d(),oe=i("p"),Wa=a("As mentioned previously, we\u2019ll be fine-tuning a BERT model, but you can use any other model type as long as it has a fast tokenizer implemented. You can see all the architectures that come with a fast version in "),X=i("a"),Qn=a("this big table"),aa=a(", and to check that the "),na=i("code"),Rn=a("tokenizer"),oa=a(" object you\u2019re using is indeed backed by \u{1F917} Tokenizers you can look at its "),ia=i("code"),Gn=a("is_fast"),ra=a(" attribute:"),Ha=d(),j(Wt.$$.fragment),ws=d(),j(Ht.$$.fragment),Va=d(),ut=i("p"),Un=a("We can pass to our tokenizer the question and the context together, and it will properly insert the special tokens to form a sentence like this:"),Qa=d(),j(Je.$$.fragment),Ra=d(),gs=i("p"),la=a("Let\u2019s double-check:"),Ga=d(),j(Vt.$$.fragment),pa=d(),j(de.$$.fragment),Ua=d(),ft=i("p"),Yn=a("The labels will then be the index of the tokens starting and ending the answer, and the model will be tasked to predicted one start and end logit per token in the input, with the theoretical labels being as follow:"),Ya=d(),je=i("div"),mt=i("img"),Ja=d(),qe=i("p"),u=a("In this case the context is not too long, but some of the examples in the dataset have very long contexts that will exceed the maximum length we set (which is 384 in this case). As we saw in "),N=i("a"),Xa=a("Chapter 6"),ni=a(" when we explored the internals of the "),Ka=i("code"),oi=a("question-answering"),bs=a(" pipeline, we will deal with long contexts by creating several training features from one sample of our dataset, with a sliding window between them."),Jn=d(),ha=i("p"),Za=a("To see how this works using the current example, we can limit the length to 100 and use a sliding window of 50 tokens. As a reminder, we use:"),Xn=d(),Ee=i("ul"),da=i("li"),xe=i("code"),ii=a("max_length"),ri=a(" to set the maximum length (here 100)"),li=d(),ca=i("li"),en=i("code"),tn=a('truncation="only_second"'),pi=a(" to truncate the context (which is in the second position) when the question with its context is too long"),ye=d(),ua=i("li"),sn=i("code"),hi=a("stride"),di=a(" to set the number of overlapping tokens between two successive chunks (here 50)"),ci=d(),Xe=i("li"),an=i("code"),ui=a("return_overflowing_tokens=True"),_t=a(" to let the tokenizer know we want the overflowing tokens"),Kn=d(),j(vs.$$.fragment),Zn=d(),j(xs.$$.fragment),Qt=d(),Ke=i("p"),fi=a("As we can see, our example has been in split into four inputs, each of them containing the question and some part of the context. Note that the answer to the question (\u201CBernadette Soubirous\u201D) only appears in the third and last inputs, so by dealing with long contexts in this way we will create some training examples where the answer is not included in the context. For those examples, the labels will be "),ys=i("code"),mi=a("start_position = end_position = 0"),_i=a(" (so we predict the "),nn=i("code"),wi=a("[CLS]"),$s=a(" token). We will also set those labels in the unfortunate case where the answer has been truncated so that we only have the start (or end) of it. For the examples where the answer is fully in the context, the labels will be the index of the token where the answer starts and the index of the token where the answer ends."),fa=d(),Ze=i("p"),wt=a("The dataset provides us with the start character of the answer in the context, and by adding the length of the answer, we can find the end character in the context. To map those to token indices, we will need to use the offset mappings we studied in "),ma=i("a"),gi=a("Chapter 6"),bi=a(". We can have our tokenizer return these by passing along "),gt=i("code"),vi=a("return_offsets_mapping=True"),xi=a(":"),eo=d(),j(ks.$$.fragment),se=d(),j(js.$$.fragment),to=d(),et=i("p"),yi=a("As we can see, we get back the usual input IDs, token type IDs, and attention mask, as well as the offset mapping we required and an extra key, "),on=i("code"),$i=a("overflow_to_sample_mapping"),ki=a(". The corresponding value will be of use to us when we tokenize several texts at the same time (which we should do to benefit from the fact that our tokenizer is backed by Rust). Since one sample can give several features, it maps each feature to the example it originated from. Because here we only tokenized one example, we get a list of "),bt=i("code"),ji=a("0"),qi=a("s:"),so=d(),j(ao.$$.fragment),bl=d(),j(no.$$.fragment),vl=d(),Ei=i("p"),xh=a("But if we tokenize more examples, this will become more useful:"),xl=d(),j(oo.$$.fragment),yl=d(),j(io.$$.fragment),$l=d(),Ti=i("p"),yh=a("As we can see, the first three examples (at indices 2, 3, and 4 in the training set) each gave four features and the last example (at index 5 in the training set) gave 7 features."),kl=d(),Ai=i("p"),$h=a("This information will be useful to map each feature we get to its corresponding label. As mentioned earlier, those labels are:"),jl=d(),rn=i("ul"),Di=i("li"),qr=i("code"),kh=a("(0, 0)"),jh=a(" if the answer is not in the corresponding span of the context"),qh=d(),qs=i("li"),Er=i("code"),Eh=a("(start_position, end_position)"),Th=a(" if the answer is in the corresponding span of the context, with "),Tr=i("code"),Ah=a("start_position"),Dh=a(" being the index of the token (in the input IDs) at the start of the answer and "),Ar=i("code"),Ph=a("end_position"),Ch=a(" being the index of the token (in the input IDs) where the answer ends"),ql=d(),Es=i("p"),Sh=a("To determine which of these is the case and, if relevant, the positions of the tokens, we first find the indices that start and end the context in the input IDs. We could use the token type IDs to do this, but since those do not necessarily exist for all models (DistilBERT does not require them, for instance), we\u2019ll instead use the "),Dr=i("code"),Oh=a("sequence_ids()"),zh=a(" method of the "),Pr=i("code"),Ih=a("BatchEncoding"),Fh=a(" our tokenizer returns."),El=d(),ln=i("p"),Nh=a("Once we have those token indices, we look at the corresponding offsets, which are tuples of two integers representing the span of characters inside the original context. We can thus detect if the chunk of the context in this feature starts after the answer or ends before the answer begins (in which case the label is "),Cr=i("code"),Mh=a("(0, 0)"),Bh=a("). If that\u2019s not the case, we loop to find the first and last token of the answer:"),Tl=d(),j(ro.$$.fragment),Al=d(),j(lo.$$.fragment),Dl=d(),pn=i("p"),Lh=a("Let\u2019s take a look at a few results to verify that our approach is correct. For the first feature we find "),Sr=i("code"),Wh=a("(83, 85)"),Hh=a(" as labels, so let\u2019s compare the theoretical answer with the decoded span of tokens from 83 to 85 (inclusive):"),Pl=d(),j(po.$$.fragment),Cl=d(),j(ho.$$.fragment),Sl=d(),hn=i("p"),Vh=a("So that\u2019s a match! Now let\u2019s check index 4, where we set the labels to "),Or=i("code"),Qh=a("(0, 0)"),Rh=a(", which means the answer is not in the context chunk of that feature:"),Ol=d(),j(co.$$.fragment),zl=d(),j(uo.$$.fragment),Il=d(),Pi=i("p"),Gh=a("Indeed, we don\u2019t see the answer inside the context."),Fl=d(),j(dn.$$.fragment),Nl=d(),Ci=i("p"),Uh=a("Now that we have seen step by step how to preprocess our training data, we can group it in a function we will apply on the whole training dataset. We\u2019ll pad every feature to the maximum length we set, as most of the contexts will be long (and the corresponding samples will be split into several features), so there is no real benefit to applying dynamic padding here:"),Ml=d(),j(fo.$$.fragment),Bl=d(),Si=i("p"),Yh=a("Note that we defined two constants to determine the maximum length used as well as the length of the sliding window, and that we added a tiny bit of cleanup before tokenizing: some of the questions in the SQuAD dataset have extra spaces at the beginning and the end that don\u2019t add anything (and take up space when being tokenized if you use a model like RoBERTa), so we removed those extra spaces."),Ll=d(),Ts=i("p"),Jh=a("To apply this function to the whole training set, we use the "),zr=i("code"),Xh=a("Dataset.map()"),Kh=a(" method with the "),Ir=i("code"),Zh=a("batched=True"),ed=a(" flag. It\u2019s necessary here as we are changing the length of the dataset (since one example can give several training features):"),Wl=d(),j(mo.$$.fragment),Hl=d(),j(_o.$$.fragment),Vl=d(),Oi=i("p"),td=a("As we can see, the preprocessing added roughly 1,000 features. Our training set is now ready to be used \u2014 let\u2019s dig into the preprocessing of the validation set!"),Ql=d(),_a=i("h3"),cn=i("a"),Fr=i("span"),j(wo.$$.fragment),sd=d(),Nr=i("span"),ad=a("Processing the validation data"),Rl=d(),zi=i("p"),nd=a("Preprocessing the validation data will be slightly easier as we don\u2019t need to generate labels (unless we want to compute a validation loss, but that number won\u2019t really help us understand how good the model is). The real joy will be to interpret the predictions of the model into spans of the original context. For this, we will just need to store both the offset mappings and some way to match each created feature to the original example it comes from. Since there is an ID column in the original dataset, we\u2019ll use that ID."),Gl=d(),As=i("p"),od=a("The only thing we\u2019ll add here is a tiny bit of cleanup of the offset mappings. They will contain offsets for the question and the context, but once we\u2019re in the post-processing stage we won\u2019t have any way to know which part of the input IDs corresponded to the context and which part was the question (the "),Mr=i("code"),id=a("sequence_ids()"),rd=a(" method we used is available for the output of the tokenizer only). So, we\u2019ll set the offsets corresponding to the question to "),Br=i("code"),ld=a("None"),pd=a(":"),Ul=d(),j(go.$$.fragment),Yl=d(),Ii=i("p"),hd=a("We can apply this function on the whole validation dataset like before:"),Jl=d(),j(bo.$$.fragment),Xl=d(),j(vo.$$.fragment),Kl=d(),Fi=i("p"),dd=a("In this case we\u2019ve only added a couple of hundred samples, so it appears the contexts in the validation dataset are a bit shorter."),Zl=d(),Ni=i("p"),cd=a("Now that we have preprocessed all the data, we can get to the training."),ep=d(),Gt.c(),Mi=d(),wa=i("h3"),un=i("a"),Lr=i("span"),j(xo.$$.fragment),ud=d(),Wr=i("span"),fd=a("Post-processing"),tp=d(),Yt.c(),Bi=d(),fn=i("p"),md=a("The model will output logits for the start and end positions of the answer in the input IDs, as we saw during our exploration of the "),yo=i("a"),Hr=i("code"),_d=a("question-answering"),wd=a(" pipeline"),gd=a(". The post-processing step will be similar to what we did there, so here\u2019s a quick reminder of the actions we took:"),sp=d(),vt=i("ul"),Vr=i("li"),bd=a("We masked the start and end logits corresponding to tokens outside of the context."),vd=d(),Qr=i("li"),xd=a("We then converted the start and end logits into probabilities using a softmax."),yd=d(),$o=i("li"),$d=a("We attributed a score to each "),Rr=i("code"),kd=a("(start_token, end_token)"),jd=a(" pair by taking the product of the corresponding two probabilities."),qd=d(),ga=i("li"),Ed=a("We looked for the pair with the maximum score that yielded a valid answer (e.g., a "),Gr=i("code"),Td=a("start_token"),Ad=a(" lower than "),Ur=i("code"),Dd=a("end_token"),Pd=a(")."),ap=d(),Fe=i("p"),Cd=a("Here we will change this process slightly because we don\u2019t need to compute actual scores (just the predicted answer). This means we can skip the softmax step. To go faster, we also won\u2019t score all the possible "),Yr=i("code"),Sd=a("(start_token, end_token)"),Od=a(" pairs, but only the ones corresponding to the highest "),Jr=i("code"),zd=a("n_best"),Id=a(" logits (with "),Xr=i("code"),Fd=a("n_best=20"),Nd=a("). Since we will skip the softmax, those scores will be logit scores, and will be obtained by taking the sum of the start and end logits (instead of the product, because of the rule "),np=new Mm,op=a(")."),ip=d(),mn=i("p"),Md=a("To demonstrate all of this, we will need some kind of predictions. Since we have not trained our model yet, we are going to use the default model for the QA pipeline to generate some predictions on a small part of the validation set. We can use the same processing function as before; because it relies on the global constant "),Kr=i("code"),Bd=a("tokenizer"),Ld=a(", we just have to change that object to the tokenizer of the model we want to use temporarily:"),rp=d(),j(ko.$$.fragment),lp=d(),Li=i("p"),Wd=a("Now that the preprocessing is done, we change the tokenizer back to the one we originally picked:"),pp=d(),j(jo.$$.fragment),hp=d(),_n=i("p"),Hd=a("We then remove the columns of our "),Zr=i("code"),Vd=a("eval_set"),Qd=a(" that are not expected by the model, build a batch with all of that small validation set, and pass it through the model. If a GPU is available, we use it to go faster:"),dp=d(),Xt.c(),Wi=d(),Ne=i("p"),Rd=a("Now, we need to find the predicted answer for each example in our "),el=i("code"),Gd=a("small_eval_set"),Ud=a(". One example may have been split into several features in "),tl=i("code"),Yd=a("eval_set"),Jd=a(", so the first step is to map each example in "),sl=i("code"),Xd=a("small_eval_set"),Kd=a(" to the corresponding features in "),al=i("code"),Zd=a("eval_set"),ec=a(":"),cp=d(),j(qo.$$.fragment),up=d(),wn=i("p"),tc=a("With this in hand, we can really get to work by looping through all the examples and, for each example, through all the associated features. As we said before, we\u2019ll look at the logit scores for the "),nl=i("code"),sc=a("n_best"),ac=a(" start logits and end logits, excluding positions that give:"),fp=d(),Ds=i("ul"),ol=i("li"),nc=a("An answer that wouldn\u2019t be inside the context"),oc=d(),il=i("li"),ic=a("An answer with negative length"),rc=d(),Eo=i("li"),lc=a("An answer that is too long (we limit the possibilities at "),rl=i("code"),pc=a("max_answer_length=30"),hc=a(")"),mp=d(),Hi=i("p"),dc=a("Once we have all the scored possible answers for one example, we just pick the one with the best logit score:"),_p=d(),j(To.$$.fragment),wp=d(),Vi=i("p"),cc=a("The final format of the predicted answers is the one that will be expected by the metric we will use. As usual, we can load it with the help of the \u{1F917} Datasets library:"),gp=d(),j(Ao.$$.fragment),bp=d(),Qi=i("p"),uc=a("This metric expects the predicted answers in the format we saw above (a list of dictionaries with one key for the ID of the example and one key for the predicted text) and the theoretical answers in the format below (a list of dictionaries with one key for the ID of the example and one key for the possible answers):"),vp=d(),j(Do.$$.fragment),xp=d(),Ri=i("p"),fc=a("We can now check that we get sensible results by looking at the first element of both lists:"),yp=d(),j(Po.$$.fragment),$p=d(),j(Co.$$.fragment),kp=d(),Gi=i("p"),mc=a("Not too bad! Now let\u2019s have a look at the score the metric gives us:"),jp=d(),j(So.$$.fragment),qp=d(),j(Oo.$$.fragment),Ep=d(),gn=i("p"),_c=a("Again, that\u2019s rather good considering that according to "),zo=i("a"),wc=a("its paper"),gc=a(" DistilBERT fine-tuned on SQuAD obtains 79.1 and 86.9 for those scores on the whole dataset."),Tp=d(),xa.c(),Ui=d(),j(Io.$$.fragment),Ap=d(),Yi=i("p"),bc=a("We can check it works on our predictions:"),Dp=d(),j(Fo.$$.fragment),Pp=d(),j(No.$$.fragment),Cp=d(),Ji=i("p"),vc=a("Looking good! Now let\u2019s use this to fine-tune our model."),Sp=d(),ba=i("h3"),bn=i("a"),ll=i("span"),j(Mo.$$.fragment),xc=d(),pl=i("span"),yc=a("Fine-tuning the model"),Op=d(),Zt.c(),Xi=d(),Ki=i("p"),$c=a("As usual, we get a warning that some weights are not used (the ones from the pretraining head) and some others are initialized randomly (the ones for the question answering head). You should be used to this by now, but that means this model is not ready to be used just yet and needs fine-tuning \u2014 good thing we\u2019re about to do that!"),zp=d(),Zi=i("p"),kc=a("To be able to push our model to the Hub, we\u2019ll need to log in to Hugging Face. If you\u2019re running this code in a notebook, you can do so with the following utility function, which displays a widget where you can enter your login credentials:"),Ip=d(),j(Bo.$$.fragment),Fp=d(),er=i("p"),jc=a("If you aren\u2019t working in a notebook, just type the following line in your terminal:"),Np=d(),j(Lo.$$.fragment),Mp=d(),ts.c(),tr=d(),Me=i("p"),qc=a("By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be in "),hl=i("code"),Ec=a('"sgugger/bert-finetuned-squad"'),Tc=a(". We can override this by passing a "),dl=i("code"),Ac=a("hub_model_id"),Dc=a("; for instance, to push the model to the "),cl=i("code"),Pc=a("huggingface_course"),Cc=a(" organization we used "),ul=i("code"),Sc=a('hub_model_id="huggingface_course/bert-finetuned-squad"'),Oc=a(" (which is the model we linked to at the beginning of this section)."),Bp=d(),as.c(),sr=d(),ar=i("p"),zc=a("Note that while the training happens, each time the model is saved (here, every epoch) it is uploaded to the Hub in the background. This way, you will be able to to resume your training on another machine if necessary. The whole training takes a while (a little over an hour on a Titan RTX), so you can grab a coffee or reread some of the parts of the course that you\u2019ve found more challenging while it proceeds. Also note that as soon as the first epoch is finished, you will see some weights uploaded to the Hub and you can start playing with your model on its page."),Lp=d(),os.c(),nr=d(),j(Wo.$$.fragment),Wp=d(),or=i("p"),Ic=a("Great! As a comparison, the baseline scores reported in the BERT article for this model are 80.8 and 88.5, so we\u2019re right where we should be."),Hp=d(),re&&re.c(),ir=d(),rr=i("p"),Fc=a("At this stage, you can use the inference widget on the Model Hub to test the model and share it with your friends, family, and favorite pets. You have successfully fine-tuned a model on a question answering task \u2014 congratulations!"),Vp=d(),j(vn.$$.fragment),Qp=d(),le&&le.c(),lr=d(),va=i("h2"),xn=i("a"),fl=i("span"),j(Ho.$$.fragment),Nc=d(),ml=i("span"),Mc=a("Using the fine-tuned model"),Rp=d(),yn=i("p"),Bc=a("We\u2019ve already shown you how you can use the model we fine-tuned on the Model Hub with the inference widget. To use it locally in a "),_l=i("code"),Lc=a("pipeline"),Wc=a(", you just have to specify the model identifier:"),Gp=d(),j(Vo.$$.fragment),Up=d(),j(Qo.$$.fragment),Yp=d(),pr=i("p"),Hc=a("Great! Our model is working as well as the default one for this pipeline!"),this.h()},l(e){const l=Bm('[data-svelte="svelte-1phssyn"]',Pm.head);h=r(l,"META",{name:!0,content:!0}),l.forEach(t),g=c(e),q(f.$$.fragment,e),x=c(e),A=r(e,"H1",{class:!0});var ei=p(A);b=r(ei,"A",{id:!0,class:!0,href:!0});var hr=p(b);k=r(hr,"SPAN",{});var wl=p(k);q(y.$$.fragment,wl),wl.forEach(t),hr.forEach(t),m=c(ei),O=r(ei,"SPAN",{});var gl=p(O);$=n(gl,"Question answering"),gl.forEach(t),ei.forEach(t),v=c(e),F.l(e),z=c(e),D=r(e,"P",{});var Ps=p(D);V=n(Ps,"Time to look at question answering! This task comes in many flavors, but the one we\u2019ll focus on in this section is called "),B=r(Ps,"EM",{});var dr=p(B);Q=n(dr,"extractive"),dr.forEach(t),M=n(Ps," question answering. This involves posing questions about a document and identifying the answers as "),L=r(Ps,"EM",{});var cr=p(L);H=n(cr,"spans of text"),cr.forEach(t),K=n(Ps," in the document itself."),Ps.forEach(t),G=c(e),q(I.$$.fragment,e),Y=c(e),Z=r(e,"P",{});var $n=p(Z);te=n($n,"We will fine-tune a BERT model on the "),J=r($n,"A",{href:!0,rel:!0});var ur=p(J);ie=n(ur,"SQuAD dataset"),ur.forEach(t),fe=n($n,", which consists of questions posed by crowdworkers on a set of Wikipedia articles. This will give us a model able to compute predictions like this one:"),$n.forEach(t),Te=c(e),$e=r(e,"DIV",{class:!0});var fr=p($e);me=r(fr,"DIV",{class:!0});var mr=p(me);q(_e.$$.fragment,mr),mr.forEach(t),fr.forEach(t),R=c(e),U=r(e,"P",{});var ti=p(U);is=n(ti,"This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it and double-check the predictions "),Ae=r(ti,"A",{href:!0,rel:!0});var uu=p(Ae);st=n(uu,"here"),uu.forEach(t),rs=n(ti,"."),ti.forEach(t),Le=c(e),q(we.$$.fragment,e),ce=c(e),ue=r(e,"H2",{class:!0});var Kp=p(ue);ae=r(Kp,"A",{id:!0,class:!0,href:!0});var fu=p(ae);at=r(fu,"SPAN",{});var mu=p(at);q(nt.$$.fragment,mu),mu.forEach(t),fu.forEach(t),xt=c(Kp),ls=r(Kp,"SPAN",{});var _u=p(ls);ot=n(_u,"Preparing the data"),_u.forEach(t),Kp.forEach(t),ya=c(e),ge=r(e,"P",{});var _r=p(ge);Tn=n(_r,"The dataset that is used the most as an academic benchmark for extractive question answering is "),yt=r(_r,"A",{href:!0,rel:!0});var wu=p(yt);$a=n(wu,"SQuAD"),wu.forEach(t),$t=n(_r,", so that\u2019s the one we\u2019ll use here. There is also a harder "),it=r(_r,"A",{href:!0,rel:!0});var gu=p(it);ne=n(gu,"SQuAD v2"),gu.forEach(t),An=n(_r," benchmark, which includes questions that don\u2019t have an answer. As long as your own dataset contains a column for contexts, a column for questions, and a column for answers, you should be able to adapt the steps below."),_r.forEach(t),ps=c(e),We=r(e,"H3",{class:!0});var Zp=p(We);rt=r(Zp,"A",{id:!0,class:!0,href:!0});var bu=p(rt);kt=r(bu,"SPAN",{});var vu=p(kt);q(jt.$$.fragment,vu),vu.forEach(t),bu.forEach(t),Dn=c(Zp),qt=r(Zp,"SPAN",{});var xu=p(qt);Pn=n(xu,"The SQuAD dataset"),xu.forEach(t),Zp.forEach(t),ka=c(e),De=r(e,"P",{});var eh=p(De);Cn=n(eh,"As usual, we can download and cache the dataset in just one step thanks to "),Fs=r(eh,"CODE",{});var yu=p(Fs);Ns=n(yu,"load_dataset()"),yu.forEach(t),Sn=n(eh,":"),eh.forEach(t),ja=c(e),q(lt.$$.fragment,e),pt=c(e),Et=r(e,"P",{});var $u=p(Et);Pe=n($u,"We can then have a look at this object to learn more about the SQuAD dataset:"),$u.forEach(t),qa=c(e),q(He.$$.fragment,e),Ea=c(e),q(Tt.$$.fragment,e),hs=c(e),be=r(e,"P",{});var kn=p(be);On=n(kn,"It looks like we have everything we need with the "),ds=r(kn,"CODE",{});var ku=p(ds);At=n(ku,"context"),ku.forEach(t),Ta=n(kn,", "),pe=r(kn,"CODE",{});var ju=p(pe);zn=n(ju,"question"),ju.forEach(t),Ms=n(kn,", and "),Bs=r(kn,"CODE",{});var qu=p(Bs);In=n(qu,"answers"),qu.forEach(t),Ls=n(kn," fields, so let\u2019s print those for the first element of our training set:"),kn.forEach(t),Aa=c(e),q(Dt.$$.fragment,e),cs=c(e),q(Pt.$$.fragment,e),Da=c(e),ee=r(e,"P",{});var Be=p(ee);Ct=n(Be,"The "),us=r(Be,"CODE",{});var Eu=p(us);St=n(Eu,"context"),Eu.forEach(t),Pa=n(Be," and "),ht=r(Be,"CODE",{});var Tu=p(ht);Fn=n(Tu,"question"),Tu.forEach(t),Ca=n(Be," fields are very straightforward to use. The "),Ve=r(Be,"CODE",{});var Au=p(Ve);Sa=n(Au,"answers"),Au.forEach(t),Ce=n(Be," field is a bit trickier as it comports a dictionary with two fields that are both lists. This is the format that will be expected by the "),Ws=r(Be,"CODE",{});var Du=p(Ws);Hs=n(Du,"squad"),Du.forEach(t),Nn=n(Be," metric during evaluation; if you are using your own data, you don\u2019t necessarily need to worry about putting the answers in the same format. The "),Vs=r(Be,"CODE",{});var Pu=p(Vs);Qs=n(Pu,"text"),Pu.forEach(t),Mn=n(Be," field is rather obvious, and the "),Rs=r(Be,"CODE",{});var Cu=p(Rs);Oa=n(Cu,"answer_start"),Cu.forEach(t),Qe=n(Be," field contains the starting character index of each answer in the context."),Be.forEach(t),Re=c(e),Se=r(e,"P",{});var th=p(Se);Ot=n(th,"During training, there is only one possible answer. We can double-check this by using the "),Gs=r(th,"CODE",{});var Su=p(Gs);Us=n(Su,"Dataset.filter()"),Su.forEach(t),Bn=n(th," method:"),th.forEach(t),Ys=c(e),q(Oe.$$.fragment,e),za=c(e),q(dt.$$.fragment,e),ke=c(e),ze=r(e,"P",{});var Ou=p(ze);Ln=n(Ou,"For evaluation, however, there are several possible answers for each sample, which may be the same or different:"),Ou.forEach(t),fs=c(e),q(zt.$$.fragment,e),Ia=c(e),q(It.$$.fragment,e),ve=c(e),ms=r(e,"P",{});var zu=p(ms);Js=n(zu,"We won\u2019t dive into the evaluation script as it will all be wrapped up by a \u{1F917} Datasets metric for us, but the short version is that some of the questions have several possible answers, and this script will compare a predicted answer to all the acceptable answers and take the best score. If we take a look at the sample at index 2, for instance:"),zu.forEach(t),Fa=c(e),q(Ft.$$.fragment,e),_s=c(e),q(Nt.$$.fragment,e),Na=c(e),ct=r(e,"P",{});var Iu=p(ct);Wn=n(Iu,"we can see that the answer can indeed be one of the three possibilities we saw before."),Iu.forEach(t),Ma=c(e),Ge=r(e,"H3",{class:!0});var sh=p(Ge);he=r(sh,"A",{id:!0,class:!0,href:!0});var Fu=p(he);Xs=r(Fu,"SPAN",{});var Nu=p(Xs);q(Ue.$$.fragment,Nu),Nu.forEach(t),Fu.forEach(t),Hn=c(sh),Ks=r(sh,"SPAN",{});var Mu=p(Ks);Zs=n(Mu,"Processing the training data"),Mu.forEach(t),sh.forEach(t),Ba=c(e),q(Mt.$$.fragment,e),ea=c(e),Ye=r(e,"P",{});var Bu=p(Ye);Vn=n(Bu,"Let\u2019s start with preprocessing the training data. The hard part will be to generate labels for the question\u2019s answer, which will be the start and end positions of the tokens corresponding to the answer inside the context."),Bu.forEach(t),ta=c(e),Ie=r(e,"P",{});var Lu=p(Ie);La=n(Lu,"But let\u2019s not get ahead of ourselves. First, we need to convert the text in the input into IDs the model can make sense of, using a tokenizer:"),Lu.forEach(t),Bt=c(e),q(Lt.$$.fragment,e),sa=c(e),oe=r(e,"P",{});var jn=p(oe);Wa=n(jn,"As mentioned previously, we\u2019ll be fine-tuning a BERT model, but you can use any other model type as long as it has a fast tokenizer implemented. You can see all the architectures that come with a fast version in "),X=r(jn,"A",{href:!0,rel:!0});var Wu=p(X);Qn=n(Wu,"this big table"),Wu.forEach(t),aa=n(jn,", and to check that the "),na=r(jn,"CODE",{});var Hu=p(na);Rn=n(Hu,"tokenizer"),Hu.forEach(t),oa=n(jn," object you\u2019re using is indeed backed by \u{1F917} Tokenizers you can look at its "),ia=r(jn,"CODE",{});var Vu=p(ia);Gn=n(Vu,"is_fast"),Vu.forEach(t),ra=n(jn," attribute:"),jn.forEach(t),Ha=c(e),q(Wt.$$.fragment,e),ws=c(e),q(Ht.$$.fragment,e),Va=c(e),ut=r(e,"P",{});var Qu=p(ut);Un=n(Qu,"We can pass to our tokenizer the question and the context together, and it will properly insert the special tokens to form a sentence like this:"),Qu.forEach(t),Qa=c(e),q(Je.$$.fragment,e),Ra=c(e),gs=r(e,"P",{});var Ru=p(gs);la=n(Ru,"Let\u2019s double-check:"),Ru.forEach(t),Ga=c(e),q(Vt.$$.fragment,e),pa=c(e),q(de.$$.fragment,e),Ua=c(e),ft=r(e,"P",{});var Gu=p(ft);Yn=n(Gu,"The labels will then be the index of the tokens starting and ending the answer, and the model will be tasked to predicted one start and end logit per token in the input, with the theoretical labels being as follow:"),Gu.forEach(t),Ya=c(e),je=r(e,"DIV",{class:!0});var Uu=p(je);mt=r(Uu,"IMG",{src:!0,alt:!0}),Uu.forEach(t),Ja=c(e),qe=r(e,"P",{});var wr=p(qe);u=n(wr,"In this case the context is not too long, but some of the examples in the dataset have very long contexts that will exceed the maximum length we set (which is 384 in this case). As we saw in "),N=r(wr,"A",{href:!0});var Yu=p(N);Xa=n(Yu,"Chapter 6"),Yu.forEach(t),ni=n(wr," when we explored the internals of the "),Ka=r(wr,"CODE",{});var Ju=p(Ka);oi=n(Ju,"question-answering"),Ju.forEach(t),bs=n(wr," pipeline, we will deal with long contexts by creating several training features from one sample of our dataset, with a sliding window between them."),wr.forEach(t),Jn=c(e),ha=r(e,"P",{});var Xu=p(ha);Za=n(Xu,"To see how this works using the current example, we can limit the length to 100 and use a sliding window of 50 tokens. As a reminder, we use:"),Xu.forEach(t),Xn=c(e),Ee=r(e,"UL",{});var qn=p(Ee);da=r(qn,"LI",{});var Vc=p(da);xe=r(Vc,"CODE",{});var Ku=p(xe);ii=n(Ku,"max_length"),Ku.forEach(t),ri=n(Vc," to set the maximum length (here 100)"),Vc.forEach(t),li=c(qn),ca=r(qn,"LI",{});var Qc=p(ca);en=r(Qc,"CODE",{});var Zu=p(en);tn=n(Zu,'truncation="only_second"'),Zu.forEach(t),pi=n(Qc," to truncate the context (which is in the second position) when the question with its context is too long"),Qc.forEach(t),ye=c(qn),ua=r(qn,"LI",{});var Rc=p(ua);sn=r(Rc,"CODE",{});var ef=p(sn);hi=n(ef,"stride"),ef.forEach(t),di=n(Rc," to set the number of overlapping tokens between two successive chunks (here 50)"),Rc.forEach(t),ci=c(qn),Xe=r(qn,"LI",{});var Gc=p(Xe);an=r(Gc,"CODE",{});var tf=p(an);ui=n(tf,"return_overflowing_tokens=True"),tf.forEach(t),_t=n(Gc," to let the tokenizer know we want the overflowing tokens"),Gc.forEach(t),qn.forEach(t),Kn=c(e),q(vs.$$.fragment,e),Zn=c(e),q(xs.$$.fragment,e),Qt=c(e),Ke=r(e,"P",{});var gr=p(Ke);fi=n(gr,"As we can see, our example has been in split into four inputs, each of them containing the question and some part of the context. Note that the answer to the question (\u201CBernadette Soubirous\u201D) only appears in the third and last inputs, so by dealing with long contexts in this way we will create some training examples where the answer is not included in the context. For those examples, the labels will be "),ys=r(gr,"CODE",{});var sf=p(ys);mi=n(sf,"start_position = end_position = 0"),sf.forEach(t),_i=n(gr," (so we predict the "),nn=r(gr,"CODE",{});var af=p(nn);wi=n(af,"[CLS]"),af.forEach(t),$s=n(gr," token). We will also set those labels in the unfortunate case where the answer has been truncated so that we only have the start (or end) of it. For the examples where the answer is fully in the context, the labels will be the index of the token where the answer starts and the index of the token where the answer ends."),gr.forEach(t),fa=c(e),Ze=r(e,"P",{});var br=p(Ze);wt=n(br,"The dataset provides us with the start character of the answer in the context, and by adding the length of the answer, we can find the end character in the context. To map those to token indices, we will need to use the offset mappings we studied in "),ma=r(br,"A",{href:!0});var nf=p(ma);gi=n(nf,"Chapter 6"),nf.forEach(t),bi=n(br,". We can have our tokenizer return these by passing along "),gt=r(br,"CODE",{});var of=p(gt);vi=n(of,"return_offsets_mapping=True"),of.forEach(t),xi=n(br,":"),br.forEach(t),eo=c(e),q(ks.$$.fragment,e),se=c(e),q(js.$$.fragment,e),to=c(e),et=r(e,"P",{});var vr=p(et);yi=n(vr,"As we can see, we get back the usual input IDs, token type IDs, and attention mask, as well as the offset mapping we required and an extra key, "),on=r(vr,"CODE",{});var rf=p(on);$i=n(rf,"overflow_to_sample_mapping"),rf.forEach(t),ki=n(vr,". The corresponding value will be of use to us when we tokenize several texts at the same time (which we should do to benefit from the fact that our tokenizer is backed by Rust). Since one sample can give several features, it maps each feature to the example it originated from. Because here we only tokenized one example, we get a list of "),bt=r(vr,"CODE",{});var lf=p(bt);ji=n(lf,"0"),lf.forEach(t),qi=n(vr,"s:"),vr.forEach(t),so=c(e),q(ao.$$.fragment,e),bl=c(e),q(no.$$.fragment,e),vl=c(e),Ei=r(e,"P",{});var pf=p(Ei);xh=n(pf,"But if we tokenize more examples, this will become more useful:"),pf.forEach(t),xl=c(e),q(oo.$$.fragment,e),yl=c(e),q(io.$$.fragment,e),$l=c(e),Ti=r(e,"P",{});var hf=p(Ti);yh=n(hf,"As we can see, the first three examples (at indices 2, 3, and 4 in the training set) each gave four features and the last example (at index 5 in the training set) gave 7 features."),hf.forEach(t),kl=c(e),Ai=r(e,"P",{});var df=p(Ai);$h=n(df,"This information will be useful to map each feature we get to its corresponding label. As mentioned earlier, those labels are:"),df.forEach(t),jl=c(e),rn=r(e,"UL",{});var ah=p(rn);Di=r(ah,"LI",{});var Uc=p(Di);qr=r(Uc,"CODE",{});var cf=p(qr);kh=n(cf,"(0, 0)"),cf.forEach(t),jh=n(Uc," if the answer is not in the corresponding span of the context"),Uc.forEach(t),qh=c(ah),qs=r(ah,"LI",{});var si=p(qs);Er=r(si,"CODE",{});var uf=p(Er);Eh=n(uf,"(start_position, end_position)"),uf.forEach(t),Th=n(si," if the answer is in the corresponding span of the context, with "),Tr=r(si,"CODE",{});var ff=p(Tr);Ah=n(ff,"start_position"),ff.forEach(t),Dh=n(si," being the index of the token (in the input IDs) at the start of the answer and "),Ar=r(si,"CODE",{});var mf=p(Ar);Ph=n(mf,"end_position"),mf.forEach(t),Ch=n(si," being the index of the token (in the input IDs) where the answer ends"),si.forEach(t),ah.forEach(t),ql=c(e),Es=r(e,"P",{});var xr=p(Es);Sh=n(xr,"To determine which of these is the case and, if relevant, the positions of the tokens, we first find the indices that start and end the context in the input IDs. We could use the token type IDs to do this, but since those do not necessarily exist for all models (DistilBERT does not require them, for instance), we\u2019ll instead use the "),Dr=r(xr,"CODE",{});var _f=p(Dr);Oh=n(_f,"sequence_ids()"),_f.forEach(t),zh=n(xr," method of the "),Pr=r(xr,"CODE",{});var wf=p(Pr);Ih=n(wf,"BatchEncoding"),wf.forEach(t),Fh=n(xr," our tokenizer returns."),xr.forEach(t),El=c(e),ln=r(e,"P",{});var nh=p(ln);Nh=n(nh,"Once we have those token indices, we look at the corresponding offsets, which are tuples of two integers representing the span of characters inside the original context. We can thus detect if the chunk of the context in this feature starts after the answer or ends before the answer begins (in which case the label is "),Cr=r(nh,"CODE",{});var gf=p(Cr);Mh=n(gf,"(0, 0)"),gf.forEach(t),Bh=n(nh,"). If that\u2019s not the case, we loop to find the first and last token of the answer:"),nh.forEach(t),Tl=c(e),q(ro.$$.fragment,e),Al=c(e),q(lo.$$.fragment,e),Dl=c(e),pn=r(e,"P",{});var oh=p(pn);Lh=n(oh,"Let\u2019s take a look at a few results to verify that our approach is correct. For the first feature we find "),Sr=r(oh,"CODE",{});var bf=p(Sr);Wh=n(bf,"(83, 85)"),bf.forEach(t),Hh=n(oh," as labels, so let\u2019s compare the theoretical answer with the decoded span of tokens from 83 to 85 (inclusive):"),oh.forEach(t),Pl=c(e),q(po.$$.fragment,e),Cl=c(e),q(ho.$$.fragment,e),Sl=c(e),hn=r(e,"P",{});var ih=p(hn);Vh=n(ih,"So that\u2019s a match! Now let\u2019s check index 4, where we set the labels to "),Or=r(ih,"CODE",{});var vf=p(Or);Qh=n(vf,"(0, 0)"),vf.forEach(t),Rh=n(ih,", which means the answer is not in the context chunk of that feature:"),ih.forEach(t),Ol=c(e),q(co.$$.fragment,e),zl=c(e),q(uo.$$.fragment,e),Il=c(e),Pi=r(e,"P",{});var xf=p(Pi);Gh=n(xf,"Indeed, we don\u2019t see the answer inside the context."),xf.forEach(t),Fl=c(e),q(dn.$$.fragment,e),Nl=c(e),Ci=r(e,"P",{});var yf=p(Ci);Uh=n(yf,"Now that we have seen step by step how to preprocess our training data, we can group it in a function we will apply on the whole training dataset. We\u2019ll pad every feature to the maximum length we set, as most of the contexts will be long (and the corresponding samples will be split into several features), so there is no real benefit to applying dynamic padding here:"),yf.forEach(t),Ml=c(e),q(fo.$$.fragment,e),Bl=c(e),Si=r(e,"P",{});var $f=p(Si);Yh=n($f,"Note that we defined two constants to determine the maximum length used as well as the length of the sliding window, and that we added a tiny bit of cleanup before tokenizing: some of the questions in the SQuAD dataset have extra spaces at the beginning and the end that don\u2019t add anything (and take up space when being tokenized if you use a model like RoBERTa), so we removed those extra spaces."),$f.forEach(t),Ll=c(e),Ts=r(e,"P",{});var yr=p(Ts);Jh=n(yr,"To apply this function to the whole training set, we use the "),zr=r(yr,"CODE",{});var kf=p(zr);Xh=n(kf,"Dataset.map()"),kf.forEach(t),Kh=n(yr," method with the "),Ir=r(yr,"CODE",{});var jf=p(Ir);Zh=n(jf,"batched=True"),jf.forEach(t),ed=n(yr," flag. It\u2019s necessary here as we are changing the length of the dataset (since one example can give several training features):"),yr.forEach(t),Wl=c(e),q(mo.$$.fragment,e),Hl=c(e),q(_o.$$.fragment,e),Vl=c(e),Oi=r(e,"P",{});var qf=p(Oi);td=n(qf,"As we can see, the preprocessing added roughly 1,000 features. Our training set is now ready to be used \u2014 let\u2019s dig into the preprocessing of the validation set!"),qf.forEach(t),Ql=c(e),_a=r(e,"H3",{class:!0});var rh=p(_a);cn=r(rh,"A",{id:!0,class:!0,href:!0});var Ef=p(cn);Fr=r(Ef,"SPAN",{});var Tf=p(Fr);q(wo.$$.fragment,Tf),Tf.forEach(t),Ef.forEach(t),sd=c(rh),Nr=r(rh,"SPAN",{});var Af=p(Nr);ad=n(Af,"Processing the validation data"),Af.forEach(t),rh.forEach(t),Rl=c(e),zi=r(e,"P",{});var Df=p(zi);nd=n(Df,"Preprocessing the validation data will be slightly easier as we don\u2019t need to generate labels (unless we want to compute a validation loss, but that number won\u2019t really help us understand how good the model is). The real joy will be to interpret the predictions of the model into spans of the original context. For this, we will just need to store both the offset mappings and some way to match each created feature to the original example it comes from. Since there is an ID column in the original dataset, we\u2019ll use that ID."),Df.forEach(t),Gl=c(e),As=r(e,"P",{});var $r=p(As);od=n($r,"The only thing we\u2019ll add here is a tiny bit of cleanup of the offset mappings. They will contain offsets for the question and the context, but once we\u2019re in the post-processing stage we won\u2019t have any way to know which part of the input IDs corresponded to the context and which part was the question (the "),Mr=r($r,"CODE",{});var Pf=p(Mr);id=n(Pf,"sequence_ids()"),Pf.forEach(t),rd=n($r," method we used is available for the output of the tokenizer only). So, we\u2019ll set the offsets corresponding to the question to "),Br=r($r,"CODE",{});var Cf=p(Br);ld=n(Cf,"None"),Cf.forEach(t),pd=n($r,":"),$r.forEach(t),Ul=c(e),q(go.$$.fragment,e),Yl=c(e),Ii=r(e,"P",{});var Sf=p(Ii);hd=n(Sf,"We can apply this function on the whole validation dataset like before:"),Sf.forEach(t),Jl=c(e),q(bo.$$.fragment,e),Xl=c(e),q(vo.$$.fragment,e),Kl=c(e),Fi=r(e,"P",{});var Of=p(Fi);dd=n(Of,"In this case we\u2019ve only added a couple of hundred samples, so it appears the contexts in the validation dataset are a bit shorter."),Of.forEach(t),Zl=c(e),Ni=r(e,"P",{});var zf=p(Ni);cd=n(zf,"Now that we have preprocessed all the data, we can get to the training."),zf.forEach(t),ep=c(e),Gt.l(e),Mi=c(e),wa=r(e,"H3",{class:!0});var lh=p(wa);un=r(lh,"A",{id:!0,class:!0,href:!0});var If=p(un);Lr=r(If,"SPAN",{});var Ff=p(Lr);q(xo.$$.fragment,Ff),Ff.forEach(t),If.forEach(t),ud=c(lh),Wr=r(lh,"SPAN",{});var Nf=p(Wr);fd=n(Nf,"Post-processing"),Nf.forEach(t),lh.forEach(t),tp=c(e),Yt.l(e),Bi=c(e),fn=r(e,"P",{});var ph=p(fn);md=n(ph,"The model will output logits for the start and end positions of the answer in the input IDs, as we saw during our exploration of the "),yo=r(ph,"A",{href:!0});var Yc=p(yo);Hr=r(Yc,"CODE",{});var Mf=p(Hr);_d=n(Mf,"question-answering"),Mf.forEach(t),wd=n(Yc," pipeline"),Yc.forEach(t),gd=n(ph,". The post-processing step will be similar to what we did there, so here\u2019s a quick reminder of the actions we took:"),ph.forEach(t),sp=c(e),vt=r(e,"UL",{});var En=p(vt);Vr=r(En,"LI",{});var Bf=p(Vr);bd=n(Bf,"We masked the start and end logits corresponding to tokens outside of the context."),Bf.forEach(t),vd=c(En),Qr=r(En,"LI",{});var Lf=p(Qr);xd=n(Lf,"We then converted the start and end logits into probabilities using a softmax."),Lf.forEach(t),yd=c(En),$o=r(En,"LI",{});var hh=p($o);$d=n(hh,"We attributed a score to each "),Rr=r(hh,"CODE",{});var Wf=p(Rr);kd=n(Wf,"(start_token, end_token)"),Wf.forEach(t),jd=n(hh," pair by taking the product of the corresponding two probabilities."),hh.forEach(t),qd=c(En),ga=r(En,"LI",{});var kr=p(ga);Ed=n(kr,"We looked for the pair with the maximum score that yielded a valid answer (e.g., a "),Gr=r(kr,"CODE",{});var Hf=p(Gr);Td=n(Hf,"start_token"),Hf.forEach(t),Ad=n(kr," lower than "),Ur=r(kr,"CODE",{});var Vf=p(Ur);Dd=n(Vf,"end_token"),Vf.forEach(t),Pd=n(kr,")."),kr.forEach(t),En.forEach(t),ap=c(e),Fe=r(e,"P",{});var Cs=p(Fe);Cd=n(Cs,"Here we will change this process slightly because we don\u2019t need to compute actual scores (just the predicted answer). This means we can skip the softmax step. To go faster, we also won\u2019t score all the possible "),Yr=r(Cs,"CODE",{});var Qf=p(Yr);Sd=n(Qf,"(start_token, end_token)"),Qf.forEach(t),Od=n(Cs," pairs, but only the ones corresponding to the highest "),Jr=r(Cs,"CODE",{});var Rf=p(Jr);zd=n(Rf,"n_best"),Rf.forEach(t),Id=n(Cs," logits (with "),Xr=r(Cs,"CODE",{});var Gf=p(Xr);Fd=n(Gf,"n_best=20"),Gf.forEach(t),Nd=n(Cs,"). Since we will skip the softmax, those scores will be logit scores, and will be obtained by taking the sum of the start and end logits (instead of the product, because of the rule "),np=Lm(Cs),op=n(Cs,")."),Cs.forEach(t),ip=c(e),mn=r(e,"P",{});var dh=p(mn);Md=n(dh,"To demonstrate all of this, we will need some kind of predictions. Since we have not trained our model yet, we are going to use the default model for the QA pipeline to generate some predictions on a small part of the validation set. We can use the same processing function as before; because it relies on the global constant "),Kr=r(dh,"CODE",{});var Uf=p(Kr);Bd=n(Uf,"tokenizer"),Uf.forEach(t),Ld=n(dh,", we just have to change that object to the tokenizer of the model we want to use temporarily:"),dh.forEach(t),rp=c(e),q(ko.$$.fragment,e),lp=c(e),Li=r(e,"P",{});var Yf=p(Li);Wd=n(Yf,"Now that the preprocessing is done, we change the tokenizer back to the one we originally picked:"),Yf.forEach(t),pp=c(e),q(jo.$$.fragment,e),hp=c(e),_n=r(e,"P",{});var ch=p(_n);Hd=n(ch,"We then remove the columns of our "),Zr=r(ch,"CODE",{});var Jf=p(Zr);Vd=n(Jf,"eval_set"),Jf.forEach(t),Qd=n(ch," that are not expected by the model, build a batch with all of that small validation set, and pass it through the model. If a GPU is available, we use it to go faster:"),ch.forEach(t),dp=c(e),Xt.l(e),Wi=c(e),Ne=r(e,"P",{});var Ss=p(Ne);Rd=n(Ss,"Now, we need to find the predicted answer for each example in our "),el=r(Ss,"CODE",{});var Xf=p(el);Gd=n(Xf,"small_eval_set"),Xf.forEach(t),Ud=n(Ss,". One example may have been split into several features in "),tl=r(Ss,"CODE",{});var Kf=p(tl);Yd=n(Kf,"eval_set"),Kf.forEach(t),Jd=n(Ss,", so the first step is to map each example in "),sl=r(Ss,"CODE",{});var Zf=p(sl);Xd=n(Zf,"small_eval_set"),Zf.forEach(t),Kd=n(Ss," to the corresponding features in "),al=r(Ss,"CODE",{});var em=p(al);Zd=n(em,"eval_set"),em.forEach(t),ec=n(Ss,":"),Ss.forEach(t),cp=c(e),q(qo.$$.fragment,e),up=c(e),wn=r(e,"P",{});var uh=p(wn);tc=n(uh,"With this in hand, we can really get to work by looping through all the examples and, for each example, through all the associated features. As we said before, we\u2019ll look at the logit scores for the "),nl=r(uh,"CODE",{});var tm=p(nl);sc=n(tm,"n_best"),tm.forEach(t),ac=n(uh," start logits and end logits, excluding positions that give:"),uh.forEach(t),fp=c(e),Ds=r(e,"UL",{});var jr=p(Ds);ol=r(jr,"LI",{});var sm=p(ol);nc=n(sm,"An answer that wouldn\u2019t be inside the context"),sm.forEach(t),oc=c(jr),il=r(jr,"LI",{});var am=p(il);ic=n(am,"An answer with negative length"),am.forEach(t),rc=c(jr),Eo=r(jr,"LI",{});var fh=p(Eo);lc=n(fh,"An answer that is too long (we limit the possibilities at "),rl=r(fh,"CODE",{});var nm=p(rl);pc=n(nm,"max_answer_length=30"),nm.forEach(t),hc=n(fh,")"),fh.forEach(t),jr.forEach(t),mp=c(e),Hi=r(e,"P",{});var om=p(Hi);dc=n(om,"Once we have all the scored possible answers for one example, we just pick the one with the best logit score:"),om.forEach(t),_p=c(e),q(To.$$.fragment,e),wp=c(e),Vi=r(e,"P",{});var im=p(Vi);cc=n(im,"The final format of the predicted answers is the one that will be expected by the metric we will use. As usual, we can load it with the help of the \u{1F917} Datasets library:"),im.forEach(t),gp=c(e),q(Ao.$$.fragment,e),bp=c(e),Qi=r(e,"P",{});var rm=p(Qi);uc=n(rm,"This metric expects the predicted answers in the format we saw above (a list of dictionaries with one key for the ID of the example and one key for the predicted text) and the theoretical answers in the format below (a list of dictionaries with one key for the ID of the example and one key for the possible answers):"),rm.forEach(t),vp=c(e),q(Do.$$.fragment,e),xp=c(e),Ri=r(e,"P",{});var lm=p(Ri);fc=n(lm,"We can now check that we get sensible results by looking at the first element of both lists:"),lm.forEach(t),yp=c(e),q(Po.$$.fragment,e),$p=c(e),q(Co.$$.fragment,e),kp=c(e),Gi=r(e,"P",{});var pm=p(Gi);mc=n(pm,"Not too bad! Now let\u2019s have a look at the score the metric gives us:"),pm.forEach(t),jp=c(e),q(So.$$.fragment,e),qp=c(e),q(Oo.$$.fragment,e),Ep=c(e),gn=r(e,"P",{});var mh=p(gn);_c=n(mh,"Again, that\u2019s rather good considering that according to "),zo=r(mh,"A",{href:!0,rel:!0});var hm=p(zo);wc=n(hm,"its paper"),hm.forEach(t),gc=n(mh," DistilBERT fine-tuned on SQuAD obtains 79.1 and 86.9 for those scores on the whole dataset."),mh.forEach(t),Tp=c(e),xa.l(e),Ui=c(e),q(Io.$$.fragment,e),Ap=c(e),Yi=r(e,"P",{});var dm=p(Yi);bc=n(dm,"We can check it works on our predictions:"),dm.forEach(t),Dp=c(e),q(Fo.$$.fragment,e),Pp=c(e),q(No.$$.fragment,e),Cp=c(e),Ji=r(e,"P",{});var cm=p(Ji);vc=n(cm,"Looking good! Now let\u2019s use this to fine-tune our model."),cm.forEach(t),Sp=c(e),ba=r(e,"H3",{class:!0});var _h=p(ba);bn=r(_h,"A",{id:!0,class:!0,href:!0});var um=p(bn);ll=r(um,"SPAN",{});var fm=p(ll);q(Mo.$$.fragment,fm),fm.forEach(t),um.forEach(t),xc=c(_h),pl=r(_h,"SPAN",{});var mm=p(pl);yc=n(mm,"Fine-tuning the model"),mm.forEach(t),_h.forEach(t),Op=c(e),Zt.l(e),Xi=c(e),Ki=r(e,"P",{});var _m=p(Ki);$c=n(_m,"As usual, we get a warning that some weights are not used (the ones from the pretraining head) and some others are initialized randomly (the ones for the question answering head). You should be used to this by now, but that means this model is not ready to be used just yet and needs fine-tuning \u2014 good thing we\u2019re about to do that!"),_m.forEach(t),zp=c(e),Zi=r(e,"P",{});var wm=p(Zi);kc=n(wm,"To be able to push our model to the Hub, we\u2019ll need to log in to Hugging Face. If you\u2019re running this code in a notebook, you can do so with the following utility function, which displays a widget where you can enter your login credentials:"),wm.forEach(t),Ip=c(e),q(Bo.$$.fragment,e),Fp=c(e),er=r(e,"P",{});var gm=p(er);jc=n(gm,"If you aren\u2019t working in a notebook, just type the following line in your terminal:"),gm.forEach(t),Np=c(e),q(Lo.$$.fragment,e),Mp=c(e),ts.l(e),tr=c(e),Me=r(e,"P",{});var Os=p(Me);qc=n(Os,"By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be in "),hl=r(Os,"CODE",{});var bm=p(hl);Ec=n(bm,'"sgugger/bert-finetuned-squad"'),bm.forEach(t),Tc=n(Os,". We can override this by passing a "),dl=r(Os,"CODE",{});var vm=p(dl);Ac=n(vm,"hub_model_id"),vm.forEach(t),Dc=n(Os,"; for instance, to push the model to the "),cl=r(Os,"CODE",{});var xm=p(cl);Pc=n(xm,"huggingface_course"),xm.forEach(t),Cc=n(Os," organization we used "),ul=r(Os,"CODE",{});var ym=p(ul);Sc=n(ym,'hub_model_id="huggingface_course/bert-finetuned-squad"'),ym.forEach(t),Oc=n(Os," (which is the model we linked to at the beginning of this section)."),Os.forEach(t),Bp=c(e),as.l(e),sr=c(e),ar=r(e,"P",{});var $m=p(ar);zc=n($m,"Note that while the training happens, each time the model is saved (here, every epoch) it is uploaded to the Hub in the background. This way, you will be able to to resume your training on another machine if necessary. The whole training takes a while (a little over an hour on a Titan RTX), so you can grab a coffee or reread some of the parts of the course that you\u2019ve found more challenging while it proceeds. Also note that as soon as the first epoch is finished, you will see some weights uploaded to the Hub and you can start playing with your model on its page."),$m.forEach(t),Lp=c(e),os.l(e),nr=c(e),q(Wo.$$.fragment,e),Wp=c(e),or=r(e,"P",{});var km=p(or);Ic=n(km,"Great! As a comparison, the baseline scores reported in the BERT article for this model are 80.8 and 88.5, so we\u2019re right where we should be."),km.forEach(t),Hp=c(e),re&&re.l(e),ir=c(e),rr=r(e,"P",{});var jm=p(rr);Fc=n(jm,"At this stage, you can use the inference widget on the Model Hub to test the model and share it with your friends, family, and favorite pets. You have successfully fine-tuned a model on a question answering task \u2014 congratulations!"),jm.forEach(t),Vp=c(e),q(vn.$$.fragment,e),Qp=c(e),le&&le.l(e),lr=c(e),va=r(e,"H2",{class:!0});var wh=p(va);xn=r(wh,"A",{id:!0,class:!0,href:!0});var qm=p(xn);fl=r(qm,"SPAN",{});var Em=p(fl);q(Ho.$$.fragment,Em),Em.forEach(t),qm.forEach(t),Nc=c(wh),ml=r(wh,"SPAN",{});var Tm=p(ml);Mc=n(Tm,"Using the fine-tuned model"),Tm.forEach(t),wh.forEach(t),Rp=c(e),yn=r(e,"P",{});var gh=p(yn);Bc=n(gh,"We\u2019ve already shown you how you can use the model we fine-tuned on the Model Hub with the inference widget. To use it locally in a "),_l=r(gh,"CODE",{});var Am=p(_l);Lc=n(Am,"pipeline"),Am.forEach(t),Wc=n(gh,", you just have to specify the model identifier:"),gh.forEach(t),Gp=c(e),q(Vo.$$.fragment,e),Up=c(e),q(Qo.$$.fragment,e),Yp=c(e),pr=r(e,"P",{});var Dm=p(pr);Hc=n(Dm,"Great! Our model is working as well as the default one for this pipeline!"),Dm.forEach(t),this.h()},h(){P(h,"name","hf:doc:metadata"),P(h,"content",JSON.stringify(__)),P(b,"id","question-answering"),P(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(b,"href","#question-answering"),P(A,"class","relative group"),P(J,"href","https://rajpurkar.github.io/SQuAD-explorer/"),P(J,"rel","nofollow"),P(me,"class","max-w-md"),P($e,"class","w-full flex justify-center"),P(Ae,"href","https://huggingface.co/huggingface-course/bert-finetuned-squad?context=%F0%9F%A4%97+Transformers+is+backed+by+the+three+most+popular+deep+learning+libraries+%E2%80%94+Jax%2C+PyTorch+and+TensorFlow+%E2%80%94+with+a+seamless+integration+between+them.+It%27s+straightforward+to+train+your+models+with+one+before+loading+them+for+inference+with+the+other.&question=Which+deep+learning+libraries+back+%F0%9F%A4%97+Transformers%3F"),P(Ae,"rel","nofollow"),P(ae,"id","preparing-the-data"),P(ae,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(ae,"href","#preparing-the-data"),P(ue,"class","relative group"),P(yt,"href","https://rajpurkar.github.io/SQuAD-explorer/"),P(yt,"rel","nofollow"),P(it,"href","https://huggingface.co/datasets/squad_v2"),P(it,"rel","nofollow"),P(rt,"id","the-squad-dataset"),P(rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(rt,"href","#the-squad-dataset"),P(We,"class","relative group"),P(he,"id","processing-the-training-data"),P(he,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(he,"href","#processing-the-training-data"),P(Ge,"class","relative group"),P(X,"href","https://huggingface.co/transformers/#supported-frameworks"),P(X,"rel","nofollow"),Wm(mt.src,ai="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/qa_labels.PNG")||P(mt,"src",ai),P(mt,"alt","One-hot encoded labels for question answering."),P(je,"class","flex justify-center"),P(N,"href","/course/chapter6/4"),P(ma,"href","/course/chapter6/4"),P(cn,"id","processing-the-validation-data"),P(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(cn,"href","#processing-the-validation-data"),P(_a,"class","relative group"),P(un,"id","postprocessing"),P(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(un,"href","#postprocessing"),P(wa,"class","relative group"),P(yo,"href","/course/chapter6/4"),np.a=op,P(zo,"href","https://arxiv.org/abs/1910.01108v2"),P(zo,"rel","nofollow"),P(bn,"id","finetuning-the-model"),P(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(bn,"href","#finetuning-the-model"),P(ba,"class","relative group"),P(xn,"id","using-the-finetuned-model"),P(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),P(xn,"href","#using-the-finetuned-model"),P(va,"class","relative group")},m(e,l){s(Pm.head,h),o(e,g,l),E(f,e,l),o(e,x,l),o(e,A,l),s(A,b),s(b,k),E(y,k,null),s(A,m),s(A,O),s(O,$),o(e,v,l),Ro[C].m(e,l),o(e,z,l),o(e,D,l),s(D,V),s(D,B),s(B,Q),s(D,M),s(D,L),s(L,H),s(D,K),o(e,G,l),E(I,e,l),o(e,Y,l),o(e,Z,l),s(Z,te),s(Z,J),s(J,ie),s(Z,fe),o(e,Te,l),o(e,$e,l),s($e,me),E(_e,me,null),o(e,R,l),o(e,U,l),s(U,is),s(U,Ae),s(Ae,st),s(U,rs),o(e,Le,l),E(we,e,l),o(e,ce,l),o(e,ue,l),s(ue,ae),s(ae,at),E(nt,at,null),s(ue,xt),s(ue,ls),s(ls,ot),o(e,ya,l),o(e,ge,l),s(ge,Tn),s(ge,yt),s(yt,$a),s(ge,$t),s(ge,it),s(it,ne),s(ge,An),o(e,ps,l),o(e,We,l),s(We,rt),s(rt,kt),E(jt,kt,null),s(We,Dn),s(We,qt),s(qt,Pn),o(e,ka,l),o(e,De,l),s(De,Cn),s(De,Fs),s(Fs,Ns),s(De,Sn),o(e,ja,l),E(lt,e,l),o(e,pt,l),o(e,Et,l),s(Et,Pe),o(e,qa,l),E(He,e,l),o(e,Ea,l),E(Tt,e,l),o(e,hs,l),o(e,be,l),s(be,On),s(be,ds),s(ds,At),s(be,Ta),s(be,pe),s(pe,zn),s(be,Ms),s(be,Bs),s(Bs,In),s(be,Ls),o(e,Aa,l),E(Dt,e,l),o(e,cs,l),E(Pt,e,l),o(e,Da,l),o(e,ee,l),s(ee,Ct),s(ee,us),s(us,St),s(ee,Pa),s(ee,ht),s(ht,Fn),s(ee,Ca),s(ee,Ve),s(Ve,Sa),s(ee,Ce),s(ee,Ws),s(Ws,Hs),s(ee,Nn),s(ee,Vs),s(Vs,Qs),s(ee,Mn),s(ee,Rs),s(Rs,Oa),s(ee,Qe),o(e,Re,l),o(e,Se,l),s(Se,Ot),s(Se,Gs),s(Gs,Us),s(Se,Bn),o(e,Ys,l),E(Oe,e,l),o(e,za,l),E(dt,e,l),o(e,ke,l),o(e,ze,l),s(ze,Ln),o(e,fs,l),E(zt,e,l),o(e,Ia,l),E(It,e,l),o(e,ve,l),o(e,ms,l),s(ms,Js),o(e,Fa,l),E(Ft,e,l),o(e,_s,l),E(Nt,e,l),o(e,Na,l),o(e,ct,l),s(ct,Wn),o(e,Ma,l),o(e,Ge,l),s(Ge,he),s(he,Xs),E(Ue,Xs,null),s(Ge,Hn),s(Ge,Ks),s(Ks,Zs),o(e,Ba,l),E(Mt,e,l),o(e,ea,l),o(e,Ye,l),s(Ye,Vn),o(e,ta,l),o(e,Ie,l),s(Ie,La),o(e,Bt,l),E(Lt,e,l),o(e,sa,l),o(e,oe,l),s(oe,Wa),s(oe,X),s(X,Qn),s(oe,aa),s(oe,na),s(na,Rn),s(oe,oa),s(oe,ia),s(ia,Gn),s(oe,ra),o(e,Ha,l),E(Wt,e,l),o(e,ws,l),E(Ht,e,l),o(e,Va,l),o(e,ut,l),s(ut,Un),o(e,Qa,l),E(Je,e,l),o(e,Ra,l),o(e,gs,l),s(gs,la),o(e,Ga,l),E(Vt,e,l),o(e,pa,l),E(de,e,l),o(e,Ua,l),o(e,ft,l),s(ft,Yn),o(e,Ya,l),o(e,je,l),s(je,mt),o(e,Ja,l),o(e,qe,l),s(qe,u),s(qe,N),s(N,Xa),s(qe,ni),s(qe,Ka),s(Ka,oi),s(qe,bs),o(e,Jn,l),o(e,ha,l),s(ha,Za),o(e,Xn,l),o(e,Ee,l),s(Ee,da),s(da,xe),s(xe,ii),s(da,ri),s(Ee,li),s(Ee,ca),s(ca,en),s(en,tn),s(ca,pi),s(Ee,ye),s(Ee,ua),s(ua,sn),s(sn,hi),s(ua,di),s(Ee,ci),s(Ee,Xe),s(Xe,an),s(an,ui),s(Xe,_t),o(e,Kn,l),E(vs,e,l),o(e,Zn,l),E(xs,e,l),o(e,Qt,l),o(e,Ke,l),s(Ke,fi),s(Ke,ys),s(ys,mi),s(Ke,_i),s(Ke,nn),s(nn,wi),s(Ke,$s),o(e,fa,l),o(e,Ze,l),s(Ze,wt),s(Ze,ma),s(ma,gi),s(Ze,bi),s(Ze,gt),s(gt,vi),s(Ze,xi),o(e,eo,l),E(ks,e,l),o(e,se,l),E(js,e,l),o(e,to,l),o(e,et,l),s(et,yi),s(et,on),s(on,$i),s(et,ki),s(et,bt),s(bt,ji),s(et,qi),o(e,so,l),E(ao,e,l),o(e,bl,l),E(no,e,l),o(e,vl,l),o(e,Ei,l),s(Ei,xh),o(e,xl,l),E(oo,e,l),o(e,yl,l),E(io,e,l),o(e,$l,l),o(e,Ti,l),s(Ti,yh),o(e,kl,l),o(e,Ai,l),s(Ai,$h),o(e,jl,l),o(e,rn,l),s(rn,Di),s(Di,qr),s(qr,kh),s(Di,jh),s(rn,qh),s(rn,qs),s(qs,Er),s(Er,Eh),s(qs,Th),s(qs,Tr),s(Tr,Ah),s(qs,Dh),s(qs,Ar),s(Ar,Ph),s(qs,Ch),o(e,ql,l),o(e,Es,l),s(Es,Sh),s(Es,Dr),s(Dr,Oh),s(Es,zh),s(Es,Pr),s(Pr,Ih),s(Es,Fh),o(e,El,l),o(e,ln,l),s(ln,Nh),s(ln,Cr),s(Cr,Mh),s(ln,Bh),o(e,Tl,l),E(ro,e,l),o(e,Al,l),E(lo,e,l),o(e,Dl,l),o(e,pn,l),s(pn,Lh),s(pn,Sr),s(Sr,Wh),s(pn,Hh),o(e,Pl,l),E(po,e,l),o(e,Cl,l),E(ho,e,l),o(e,Sl,l),o(e,hn,l),s(hn,Vh),s(hn,Or),s(Or,Qh),s(hn,Rh),o(e,Ol,l),E(co,e,l),o(e,zl,l),E(uo,e,l),o(e,Il,l),o(e,Pi,l),s(Pi,Gh),o(e,Fl,l),E(dn,e,l),o(e,Nl,l),o(e,Ci,l),s(Ci,Uh),o(e,Ml,l),E(fo,e,l),o(e,Bl,l),o(e,Si,l),s(Si,Yh),o(e,Ll,l),o(e,Ts,l),s(Ts,Jh),s(Ts,zr),s(zr,Xh),s(Ts,Kh),s(Ts,Ir),s(Ir,Zh),s(Ts,ed),o(e,Wl,l),E(mo,e,l),o(e,Hl,l),E(_o,e,l),o(e,Vl,l),o(e,Oi,l),s(Oi,td),o(e,Ql,l),o(e,_a,l),s(_a,cn),s(cn,Fr),E(wo,Fr,null),s(_a,sd),s(_a,Nr),s(Nr,ad),o(e,Rl,l),o(e,zi,l),s(zi,nd),o(e,Gl,l),o(e,As,l),s(As,od),s(As,Mr),s(Mr,id),s(As,rd),s(As,Br),s(Br,ld),s(As,pd),o(e,Ul,l),E(go,e,l),o(e,Yl,l),o(e,Ii,l),s(Ii,hd),o(e,Jl,l),E(bo,e,l),o(e,Xl,l),E(vo,e,l),o(e,Kl,l),o(e,Fi,l),s(Fi,dd),o(e,Zl,l),o(e,Ni,l),s(Ni,cd),o(e,ep,l),Go[Rt].m(e,l),o(e,Mi,l),o(e,wa,l),s(wa,un),s(un,Lr),E(xo,Lr,null),s(wa,ud),s(wa,Wr),s(Wr,fd),o(e,tp,l),Uo[Ut].m(e,l),o(e,Bi,l),o(e,fn,l),s(fn,md),s(fn,yo),s(yo,Hr),s(Hr,_d),s(yo,wd),s(fn,gd),o(e,sp,l),o(e,vt,l),s(vt,Vr),s(Vr,bd),s(vt,vd),s(vt,Qr),s(Qr,xd),s(vt,yd),s(vt,$o),s($o,$d),s($o,Rr),s(Rr,kd),s($o,jd),s(vt,qd),s(vt,ga),s(ga,Ed),s(ga,Gr),s(Gr,Td),s(ga,Ad),s(ga,Ur),s(Ur,Dd),s(ga,Pd),o(e,ap,l),o(e,Fe,l),s(Fe,Cd),s(Fe,Yr),s(Yr,Sd),s(Fe,Od),s(Fe,Jr),s(Jr,zd),s(Fe,Id),s(Fe,Xr),s(Xr,Fd),s(Fe,Nd),np.m(zm,Fe),s(Fe,op),o(e,ip,l),o(e,mn,l),s(mn,Md),s(mn,Kr),s(Kr,Bd),s(mn,Ld),o(e,rp,l),E(ko,e,l),o(e,lp,l),o(e,Li,l),s(Li,Wd),o(e,pp,l),E(jo,e,l),o(e,hp,l),o(e,_n,l),s(_n,Hd),s(_n,Zr),s(Zr,Vd),s(_n,Qd),o(e,dp,l),Yo[Jt].m(e,l),o(e,Wi,l),o(e,Ne,l),s(Ne,Rd),s(Ne,el),s(el,Gd),s(Ne,Ud),s(Ne,tl),s(tl,Yd),s(Ne,Jd),s(Ne,sl),s(sl,Xd),s(Ne,Kd),s(Ne,al),s(al,Zd),s(Ne,ec),o(e,cp,l),E(qo,e,l),o(e,up,l),o(e,wn,l),s(wn,tc),s(wn,nl),s(nl,sc),s(wn,ac),o(e,fp,l),o(e,Ds,l),s(Ds,ol),s(ol,nc),s(Ds,oc),s(Ds,il),s(il,ic),s(Ds,rc),s(Ds,Eo),s(Eo,lc),s(Eo,rl),s(rl,pc),s(Eo,hc),o(e,mp,l),o(e,Hi,l),s(Hi,dc),o(e,_p,l),E(To,e,l),o(e,wp,l),o(e,Vi,l),s(Vi,cc),o(e,gp,l),E(Ao,e,l),o(e,bp,l),o(e,Qi,l),s(Qi,uc),o(e,vp,l),E(Do,e,l),o(e,xp,l),o(e,Ri,l),s(Ri,fc),o(e,yp,l),E(Po,e,l),o(e,$p,l),E(Co,e,l),o(e,kp,l),o(e,Gi,l),s(Gi,mc),o(e,jp,l),E(So,e,l),o(e,qp,l),E(Oo,e,l),o(e,Ep,l),o(e,gn,l),s(gn,_c),s(gn,zo),s(zo,wc),s(gn,gc),o(e,Tp,l),xa.m(e,l),o(e,Ui,l),E(Io,e,l),o(e,Ap,l),o(e,Yi,l),s(Yi,bc),o(e,Dp,l),E(Fo,e,l),o(e,Pp,l),E(No,e,l),o(e,Cp,l),o(e,Ji,l),s(Ji,vc),o(e,Sp,l),o(e,ba,l),s(ba,bn),s(bn,ll),E(Mo,ll,null),s(ba,xc),s(ba,pl),s(pl,yc),o(e,Op,l),Jo[Kt].m(e,l),o(e,Xi,l),o(e,Ki,l),s(Ki,$c),o(e,zp,l),o(e,Zi,l),s(Zi,kc),o(e,Ip,l),E(Bo,e,l),o(e,Fp,l),o(e,er,l),s(er,jc),o(e,Np,l),E(Lo,e,l),o(e,Mp,l),Xo[es].m(e,l),o(e,tr,l),o(e,Me,l),s(Me,qc),s(Me,hl),s(hl,Ec),s(Me,Tc),s(Me,dl),s(dl,Ac),s(Me,Dc),s(Me,cl),s(cl,Pc),s(Me,Cc),s(Me,ul),s(ul,Sc),s(Me,Oc),o(e,Bp,l),Ko[ss].m(e,l),o(e,sr,l),o(e,ar,l),s(ar,zc),o(e,Lp,l),Zo[ns].m(e,l),o(e,nr,l),E(Wo,e,l),o(e,Wp,l),o(e,or,l),s(or,Ic),o(e,Hp,l),re&&re.m(e,l),o(e,ir,l),o(e,rr,l),s(rr,Fc),o(e,Vp,l),E(vn,e,l),o(e,Qp,l),le&&le.m(e,l),o(e,lr,l),o(e,va,l),s(va,xn),s(xn,fl),E(Ho,fl,null),s(va,Nc),s(va,ml),s(ml,Mc),o(e,Rp,l),o(e,yn,l),s(yn,Bc),s(yn,_l),s(_l,Lc),s(yn,Wc),o(e,Gp,l),E(Vo,e,l),o(e,Up,l),E(Qo,e,l),o(e,Yp,l),o(e,pr,l),s(pr,Hc),Jp=!0},p(e,[l]){const ei={};l&1&&(ei.fw=e[0]),f.$set(ei);let hr=C;C=Xc(e),C!==hr&&(Is(),w(Ro[hr],1,1,()=>{Ro[hr]=null}),zs(),F=Ro[C],F||(F=Ro[C]=Jc[C](e),F.c()),_(F,1),F.m(z.parentNode,z));const wl={};l&4&&(wl.$$scope={dirty:l,ctx:e}),we.$set(wl);const gl={};l&4&&(gl.$$scope={dirty:l,ctx:e}),dn.$set(gl);let Ps=Rt;Rt=Zc(e),Rt!==Ps&&(Is(),w(Go[Ps],1,1,()=>{Go[Ps]=null}),zs(),Gt=Go[Rt],Gt||(Gt=Go[Rt]=Kc[Rt](e),Gt.c()),_(Gt,1),Gt.m(Mi.parentNode,Mi));let dr=Ut;Ut=tu(e),Ut!==dr&&(Is(),w(Uo[dr],1,1,()=>{Uo[dr]=null}),zs(),Yt=Uo[Ut],Yt||(Yt=Uo[Ut]=eu[Ut](e),Yt.c()),_(Yt,1),Yt.m(Bi.parentNode,Bi));let cr=Jt;Jt=au(e),Jt!==cr&&(Is(),w(Yo[cr],1,1,()=>{Yo[cr]=null}),zs(),Xt=Yo[Jt],Xt||(Xt=Yo[Jt]=su[Jt](e),Xt.c()),_(Xt,1),Xt.m(Wi.parentNode,Wi)),Xp!==(Xp=nu(e))&&(xa.d(1),xa=Xp(e),xa&&(xa.c(),xa.m(Ui.parentNode,Ui)));let $n=Kt;Kt=iu(e),Kt!==$n&&(Is(),w(Jo[$n],1,1,()=>{Jo[$n]=null}),zs(),Zt=Jo[Kt],Zt||(Zt=Jo[Kt]=ou[Kt](e),Zt.c()),_(Zt,1),Zt.m(Xi.parentNode,Xi));let ur=es;es=lu(e),es!==ur&&(Is(),w(Xo[ur],1,1,()=>{Xo[ur]=null}),zs(),ts=Xo[es],ts||(ts=Xo[es]=ru[es](e),ts.c()),_(ts,1),ts.m(tr.parentNode,tr));let fr=ss;ss=hu(e),ss!==fr&&(Is(),w(Ko[fr],1,1,()=>{Ko[fr]=null}),zs(),as=Ko[ss],as||(as=Ko[ss]=pu[ss](e),as.c()),_(as,1),as.m(sr.parentNode,sr));let mr=ns;ns=cu(e),ns!==mr&&(Is(),w(Zo[mr],1,1,()=>{Zo[mr]=null}),zs(),os=Zo[ns],os||(os=Zo[ns]=du[ns](e),os.c()),_(os,1),os.m(nr.parentNode,nr)),e[0]==="pt"?re?l&1&&_(re,1):(re=Cm(),re.c(),_(re,1),re.m(ir.parentNode,ir)):re&&(Is(),w(re,1,1,()=>{re=null}),zs());const ti={};l&4&&(ti.$$scope={dirty:l,ctx:e}),vn.$set(ti),e[0]==="pt"?le?l&1&&_(le,1):(le=Sm(),le.c(),_(le,1),le.m(lr.parentNode,lr)):le&&(Is(),w(le,1,1,()=>{le=null}),zs())},i(e){Jp||(_(f.$$.fragment,e),_(y.$$.fragment,e),_(F),_(I.$$.fragment,e),_(_e.$$.fragment,e),_(we.$$.fragment,e),_(nt.$$.fragment,e),_(jt.$$.fragment,e),_(lt.$$.fragment,e),_(He.$$.fragment,e),_(Tt.$$.fragment,e),_(Dt.$$.fragment,e),_(Pt.$$.fragment,e),_(Oe.$$.fragment,e),_(dt.$$.fragment,e),_(zt.$$.fragment,e),_(It.$$.fragment,e),_(Ft.$$.fragment,e),_(Nt.$$.fragment,e),_(Ue.$$.fragment,e),_(Mt.$$.fragment,e),_(Lt.$$.fragment,e),_(Wt.$$.fragment,e),_(Ht.$$.fragment,e),_(Je.$$.fragment,e),_(Vt.$$.fragment,e),_(de.$$.fragment,e),_(vs.$$.fragment,e),_(xs.$$.fragment,e),_(ks.$$.fragment,e),_(js.$$.fragment,e),_(ao.$$.fragment,e),_(no.$$.fragment,e),_(oo.$$.fragment,e),_(io.$$.fragment,e),_(ro.$$.fragment,e),_(lo.$$.fragment,e),_(po.$$.fragment,e),_(ho.$$.fragment,e),_(co.$$.fragment,e),_(uo.$$.fragment,e),_(dn.$$.fragment,e),_(fo.$$.fragment,e),_(mo.$$.fragment,e),_(_o.$$.fragment,e),_(wo.$$.fragment,e),_(go.$$.fragment,e),_(bo.$$.fragment,e),_(vo.$$.fragment,e),_(Gt),_(xo.$$.fragment,e),_(Yt),_(ko.$$.fragment,e),_(jo.$$.fragment,e),_(Xt),_(qo.$$.fragment,e),_(To.$$.fragment,e),_(Ao.$$.fragment,e),_(Do.$$.fragment,e),_(Po.$$.fragment,e),_(Co.$$.fragment,e),_(So.$$.fragment,e),_(Oo.$$.fragment,e),_(Io.$$.fragment,e),_(Fo.$$.fragment,e),_(No.$$.fragment,e),_(Mo.$$.fragment,e),_(Zt),_(Bo.$$.fragment,e),_(Lo.$$.fragment,e),_(ts),_(as),_(os),_(Wo.$$.fragment,e),_(re),_(vn.$$.fragment,e),_(le),_(Ho.$$.fragment,e),_(Vo.$$.fragment,e),_(Qo.$$.fragment,e),Jp=!0)},o(e){w(f.$$.fragment,e),w(y.$$.fragment,e),w(F),w(I.$$.fragment,e),w(_e.$$.fragment,e),w(we.$$.fragment,e),w(nt.$$.fragment,e),w(jt.$$.fragment,e),w(lt.$$.fragment,e),w(He.$$.fragment,e),w(Tt.$$.fragment,e),w(Dt.$$.fragment,e),w(Pt.$$.fragment,e),w(Oe.$$.fragment,e),w(dt.$$.fragment,e),w(zt.$$.fragment,e),w(It.$$.fragment,e),w(Ft.$$.fragment,e),w(Nt.$$.fragment,e),w(Ue.$$.fragment,e),w(Mt.$$.fragment,e),w(Lt.$$.fragment,e),w(Wt.$$.fragment,e),w(Ht.$$.fragment,e),w(Je.$$.fragment,e),w(Vt.$$.fragment,e),w(de.$$.fragment,e),w(vs.$$.fragment,e),w(xs.$$.fragment,e),w(ks.$$.fragment,e),w(js.$$.fragment,e),w(ao.$$.fragment,e),w(no.$$.fragment,e),w(oo.$$.fragment,e),w(io.$$.fragment,e),w(ro.$$.fragment,e),w(lo.$$.fragment,e),w(po.$$.fragment,e),w(ho.$$.fragment,e),w(co.$$.fragment,e),w(uo.$$.fragment,e),w(dn.$$.fragment,e),w(fo.$$.fragment,e),w(mo.$$.fragment,e),w(_o.$$.fragment,e),w(wo.$$.fragment,e),w(go.$$.fragment,e),w(bo.$$.fragment,e),w(vo.$$.fragment,e),w(Gt),w(xo.$$.fragment,e),w(Yt),w(ko.$$.fragment,e),w(jo.$$.fragment,e),w(Xt),w(qo.$$.fragment,e),w(To.$$.fragment,e),w(Ao.$$.fragment,e),w(Do.$$.fragment,e),w(Po.$$.fragment,e),w(Co.$$.fragment,e),w(So.$$.fragment,e),w(Oo.$$.fragment,e),w(Io.$$.fragment,e),w(Fo.$$.fragment,e),w(No.$$.fragment,e),w(Mo.$$.fragment,e),w(Zt),w(Bo.$$.fragment,e),w(Lo.$$.fragment,e),w(ts),w(as),w(os),w(Wo.$$.fragment,e),w(re),w(vn.$$.fragment,e),w(le),w(Ho.$$.fragment,e),w(Vo.$$.fragment,e),w(Qo.$$.fragment,e),Jp=!1},d(e){t(h),e&&t(g),T(f,e),e&&t(x),e&&t(A),T(y),e&&t(v),Ro[C].d(e),e&&t(z),e&&t(D),e&&t(G),T(I,e),e&&t(Y),e&&t(Z),e&&t(Te),e&&t($e),T(_e),e&&t(R),e&&t(U),e&&t(Le),T(we,e),e&&t(ce),e&&t(ue),T(nt),e&&t(ya),e&&t(ge),e&&t(ps),e&&t(We),T(jt),e&&t(ka),e&&t(De),e&&t(ja),T(lt,e),e&&t(pt),e&&t(Et),e&&t(qa),T(He,e),e&&t(Ea),T(Tt,e),e&&t(hs),e&&t(be),e&&t(Aa),T(Dt,e),e&&t(cs),T(Pt,e),e&&t(Da),e&&t(ee),e&&t(Re),e&&t(Se),e&&t(Ys),T(Oe,e),e&&t(za),T(dt,e),e&&t(ke),e&&t(ze),e&&t(fs),T(zt,e),e&&t(Ia),T(It,e),e&&t(ve),e&&t(ms),e&&t(Fa),T(Ft,e),e&&t(_s),T(Nt,e),e&&t(Na),e&&t(ct),e&&t(Ma),e&&t(Ge),T(Ue),e&&t(Ba),T(Mt,e),e&&t(ea),e&&t(Ye),e&&t(ta),e&&t(Ie),e&&t(Bt),T(Lt,e),e&&t(sa),e&&t(oe),e&&t(Ha),T(Wt,e),e&&t(ws),T(Ht,e),e&&t(Va),e&&t(ut),e&&t(Qa),T(Je,e),e&&t(Ra),e&&t(gs),e&&t(Ga),T(Vt,e),e&&t(pa),T(de,e),e&&t(Ua),e&&t(ft),e&&t(Ya),e&&t(je),e&&t(Ja),e&&t(qe),e&&t(Jn),e&&t(ha),e&&t(Xn),e&&t(Ee),e&&t(Kn),T(vs,e),e&&t(Zn),T(xs,e),e&&t(Qt),e&&t(Ke),e&&t(fa),e&&t(Ze),e&&t(eo),T(ks,e),e&&t(se),T(js,e),e&&t(to),e&&t(et),e&&t(so),T(ao,e),e&&t(bl),T(no,e),e&&t(vl),e&&t(Ei),e&&t(xl),T(oo,e),e&&t(yl),T(io,e),e&&t($l),e&&t(Ti),e&&t(kl),e&&t(Ai),e&&t(jl),e&&t(rn),e&&t(ql),e&&t(Es),e&&t(El),e&&t(ln),e&&t(Tl),T(ro,e),e&&t(Al),T(lo,e),e&&t(Dl),e&&t(pn),e&&t(Pl),T(po,e),e&&t(Cl),T(ho,e),e&&t(Sl),e&&t(hn),e&&t(Ol),T(co,e),e&&t(zl),T(uo,e),e&&t(Il),e&&t(Pi),e&&t(Fl),T(dn,e),e&&t(Nl),e&&t(Ci),e&&t(Ml),T(fo,e),e&&t(Bl),e&&t(Si),e&&t(Ll),e&&t(Ts),e&&t(Wl),T(mo,e),e&&t(Hl),T(_o,e),e&&t(Vl),e&&t(Oi),e&&t(Ql),e&&t(_a),T(wo),e&&t(Rl),e&&t(zi),e&&t(Gl),e&&t(As),e&&t(Ul),T(go,e),e&&t(Yl),e&&t(Ii),e&&t(Jl),T(bo,e),e&&t(Xl),T(vo,e),e&&t(Kl),e&&t(Fi),e&&t(Zl),e&&t(Ni),e&&t(ep),Go[Rt].d(e),e&&t(Mi),e&&t(wa),T(xo),e&&t(tp),Uo[Ut].d(e),e&&t(Bi),e&&t(fn),e&&t(sp),e&&t(vt),e&&t(ap),e&&t(Fe),e&&t(ip),e&&t(mn),e&&t(rp),T(ko,e),e&&t(lp),e&&t(Li),e&&t(pp),T(jo,e),e&&t(hp),e&&t(_n),e&&t(dp),Yo[Jt].d(e),e&&t(Wi),e&&t(Ne),e&&t(cp),T(qo,e),e&&t(up),e&&t(wn),e&&t(fp),e&&t(Ds),e&&t(mp),e&&t(Hi),e&&t(_p),T(To,e),e&&t(wp),e&&t(Vi),e&&t(gp),T(Ao,e),e&&t(bp),e&&t(Qi),e&&t(vp),T(Do,e),e&&t(xp),e&&t(Ri),e&&t(yp),T(Po,e),e&&t($p),T(Co,e),e&&t(kp),e&&t(Gi),e&&t(jp),T(So,e),e&&t(qp),T(Oo,e),e&&t(Ep),e&&t(gn),e&&t(Tp),xa.d(e),e&&t(Ui),T(Io,e),e&&t(Ap),e&&t(Yi),e&&t(Dp),T(Fo,e),e&&t(Pp),T(No,e),e&&t(Cp),e&&t(Ji),e&&t(Sp),e&&t(ba),T(Mo),e&&t(Op),Jo[Kt].d(e),e&&t(Xi),e&&t(Ki),e&&t(zp),e&&t(Zi),e&&t(Ip),T(Bo,e),e&&t(Fp),e&&t(er),e&&t(Np),T(Lo,e),e&&t(Mp),Xo[es].d(e),e&&t(tr),e&&t(Me),e&&t(Bp),Ko[ss].d(e),e&&t(sr),e&&t(ar),e&&t(Lp),Zo[ns].d(e),e&&t(nr),T(Wo,e),e&&t(Wp),e&&t(or),e&&t(Hp),re&&re.d(e),e&&t(ir),e&&t(rr),e&&t(Vp),T(vn,e),e&&t(Qp),le&&le.d(e),e&&t(lr),e&&t(va),T(Ho),e&&t(Rp),e&&t(yn),e&&t(Gp),T(Vo,e),e&&t(Up),T(Qo,e),e&&t(Yp),e&&t(pr)}}}const __={local:"question-answering",sections:[{local:"preparing-the-data",sections:[{local:"the-squad-dataset",title:"The SQuAD dataset"},{local:"processing-the-training-data",title:"Processing the training data"},{local:"processing-the-validation-data",title:"Processing the validation data"}],title:"Preparing the data"},{local:"finetuning-the-model-with-the-trainer-api",title:"Fine-tuning the model with the `Trainer` API"},{local:"finetuning-the-model-with-keras",sections:[{local:"postprocessing",title:"Post-processing"},{local:"finetuning-the-model",title:"Fine-tuning the model"}],title:"Fine-tuning the model with Keras"},{local:"a-custom-training-loop",sections:[{local:"preparing-everything-for-training",title:"Preparing everything for training"}],title:"A custom training loop"},{local:"training-loop",title:"Training loop"},{local:"using-the-finetuned-model",title:"Using the fine-tuned model"}],title:"Question answering"};function w_(W,h,g){let f="pt";return Hm(()=>{const A=new URL(document.location).searchParams;g(0,f=A.get("fw")||"pt")}),[f,{id:"huggingface-course/bert-finetuned-squad",pipeline_tag:"question-answering",mask_token:"[MASK]",branch:"main",widgetData:[{context:"\u{1F917} Transformers is backed by the three most popular deep learning libraries \u2014 Jax, PyTorch and TensorFlow \u2014 with a seamless integration between them. It's straightforward to train your models with one before loading them for inference with the other.",text:"Which deep learning libraries back \u{1F917} Transformers?"}],"model-index":[{name:"test-bert-finetuned-squad",results:[]}],pwcLink:{error:"Metadata error: specify a dataset to view leaderboard"}}]}class q_ extends Im{constructor(h){super();Fm(this,h,w_,m_,Nm,{})}}export{q_ as default,__ as metadata};
