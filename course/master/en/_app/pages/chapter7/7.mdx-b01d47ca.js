import{S as Mm,i as Bm,s as Lm,e as i,t as a,k as d,w as j,c as r,a as p,h as n,d as t,m as c,x as q,g as o,F as s,y as E,q as _,o as w,B as T,b as A,U as Wm,M as Hm,V as Qm,N as xh,p as Ms,v as Vm,n as Bs}from"../../chunks/vendor-1e8b365d.js";import{T as yh}from"../../chunks/Tip-62b14c6e.js";import{Y as kh}from"../../chunks/Youtube-c2a8cc39.js";import{I as at}from"../../chunks/IconCopyLink-483c28ba.js";import{C as S}from"../../chunks/CodeBlock-e5764662.js";import{D as Fm}from"../../chunks/DocNotebookDropdown-37d928d3.js";import{F as Rm}from"../../chunks/FrameworkSwitchCourse-7f8f0f31.js";function Gm(W){let h,g;return h=new Fm({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section7_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section7_tf.ipynb"}]}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function Um(W){let h,g;return h=new Fm({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section7_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section7_pt.ipynb"}]}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function Ym(W){let h,g,f,x,P,b,$,y,m,O,k,v,C,F;return{c(){h=i("p"),g=a("\u{1F4A1} Encoder-only models like BERT tend to be great at extracting answers to factoid questions like \u201CWho invented the Transformer architecture?\u201D but fare poorly when given open-ended questions like \u201CWhy is the sky blue?\u201D In these more challenging cases, encoder-decoder models like T5 and BART are typically used to synthesize the information in a way that\u2019s quite similar to "),f=i("a"),x=a("text summarization"),P=a(". If you\u2019re interested in this type of "),b=i("em"),$=a("generative"),y=a(" question answering, we recommend checking out our "),m=i("a"),O=a("demo"),k=a(" based on the "),v=i("a"),C=a("ELI5 dataset"),F=a("."),this.h()},l(z){h=r(z,"P",{});var D=p(h);g=n(D,"\u{1F4A1} Encoder-only models like BERT tend to be great at extracting answers to factoid questions like \u201CWho invented the Transformer architecture?\u201D but fare poorly when given open-ended questions like \u201CWhy is the sky blue?\u201D In these more challenging cases, encoder-decoder models like T5 and BART are typically used to synthesize the information in a way that\u2019s quite similar to "),f=r(D,"A",{href:!0});var V=p(f);x=n(V,"text summarization"),V.forEach(t),P=n(D,". If you\u2019re interested in this type of "),b=r(D,"EM",{});var B=p(b);$=n(B,"generative"),B.forEach(t),y=n(D," question answering, we recommend checking out our "),m=r(D,"A",{href:!0,rel:!0});var R=p(m);O=n(R,"demo"),R.forEach(t),k=n(D," based on the "),v=r(D,"A",{href:!0,rel:!0});var M=p(v);C=n(M,"ELI5 dataset"),M.forEach(t),F=n(D,"."),D.forEach(t),this.h()},h(){A(f,"href","/course/chapter7/5"),A(m,"href","https://yjernite.github.io/lfqa.html"),A(m,"rel","nofollow"),A(v,"href","https://huggingface.co/datasets/eli5"),A(v,"rel","nofollow")},m(z,D){o(z,h,D),s(h,g),s(h,f),s(f,x),s(h,P),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),s(h,v),s(v,C),s(h,F)},d(z){z&&t(h)}}}function Jm(W){let h,g,f,x,P,b,$,y,m,O,k;return{c(){h=i("p"),g=a("\u270F\uFE0F "),f=i("strong"),x=a("Your turn!"),P=a(" When using the XLNet architecture, padding is applied on the left and the question and context are switched. Adapt all the code we just saw to the XLNet architecture (and add "),b=i("code"),$=a("padding=True"),y=a("). Be aware that the "),m=i("code"),O=a("[CLS]"),k=a(" token may not be at the 0 position with padding applied.")},l(v){h=r(v,"P",{});var C=p(h);g=n(C,"\u270F\uFE0F "),f=r(C,"STRONG",{});var F=p(f);x=n(F,"Your turn!"),F.forEach(t),P=n(C," When using the XLNet architecture, padding is applied on the left and the question and context are switched. Adapt all the code we just saw to the XLNet architecture (and add "),b=r(C,"CODE",{});var z=p(b);$=n(z,"padding=True"),z.forEach(t),y=n(C,"). Be aware that the "),m=r(C,"CODE",{});var D=p(m);O=n(D,"[CLS]"),D.forEach(t),k=n(C," token may not be at the 0 position with padding applied."),C.forEach(t)},m(v,C){o(v,h,C),s(h,g),s(h,f),s(f,x),s(h,P),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k)},d(v){v&&t(h)}}}function Xm(W){let h,g,f,x,P,b,$,y,m,O,k;return x=new at({}),{c(){h=i("h2"),g=i("a"),f=i("span"),j(x.$$.fragment),P=d(),b=i("span"),$=a("Fine-tuning the model with Keras"),y=d(),m=i("p"),O=a("The training code for this example will look a lot like the code in the previous sections, but computing the metrics will be uniquely challenging. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The hard part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),this.h()},l(v){h=r(v,"H2",{class:!0});var C=p(h);g=r(C,"A",{id:!0,class:!0,href:!0});var F=p(g);f=r(F,"SPAN",{});var z=p(f);q(x.$$.fragment,z),z.forEach(t),F.forEach(t),P=c(C),b=r(C,"SPAN",{});var D=p(b);$=n(D,"Fine-tuning the model with Keras"),D.forEach(t),C.forEach(t),y=c(v),m=r(v,"P",{});var V=p(m);O=n(V,"The training code for this example will look a lot like the code in the previous sections, but computing the metrics will be uniquely challenging. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The hard part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),V.forEach(t),this.h()},h(){A(g,"id","finetuning-the-model-with-keras"),A(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),A(g,"href","#finetuning-the-model-with-keras"),A(h,"class","relative group")},m(v,C){o(v,h,C),s(h,g),s(g,f),E(x,f,null),s(h,P),s(h,b),s(b,$),o(v,y,C),o(v,m,C),s(m,O),k=!0},i(v){k||(_(x.$$.fragment,v),k=!0)},o(v){w(x.$$.fragment,v),k=!1},d(v){v&&t(h),T(x),v&&t(y),v&&t(m)}}}function Km(W){let h,g,f,x,P,b,$,y,m,O,k,v,C,F,z,D,V;return x=new at({}),{c(){h=i("h2"),g=i("a"),f=i("span"),j(x.$$.fragment),P=d(),b=i("span"),$=a("Fine-tuning the model with the "),y=i("code"),m=a("Trainer"),O=a(" API"),k=d(),v=i("p"),C=a("The training code for this example will look a lot like the code in the previous sections \u2014 the hardest thing will be to write the "),F=i("code"),z=a("compute_metrics()"),D=a(" function. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The difficult part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),this.h()},l(B){h=r(B,"H2",{class:!0});var R=p(h);g=r(R,"A",{id:!0,class:!0,href:!0});var M=p(g);f=r(M,"SPAN",{});var L=p(f);q(x.$$.fragment,L),L.forEach(t),M.forEach(t),P=c(R),b=r(R,"SPAN",{});var Q=p(b);$=n(Q,"Fine-tuning the model with the "),y=r(Q,"CODE",{});var K=p(y);m=n(K,"Trainer"),K.forEach(t),O=n(Q," API"),Q.forEach(t),R.forEach(t),k=c(B),v=r(B,"P",{});var G=p(v);C=n(G,"The training code for this example will look a lot like the code in the previous sections \u2014 the hardest thing will be to write the "),F=r(G,"CODE",{});var I=p(F);z=n(I,"compute_metrics()"),I.forEach(t),D=n(G," function. Since we padded all the samples to the maximum length we set, there is no data collator to define, so this metric computation is really the only thing we have to worry about. The difficult part will be to post-process the model predictions into spans of text in the original examples; once we have done that, the metric from the \u{1F917} Datasets library will do most of the work for us."),G.forEach(t),this.h()},h(){A(g,"id","finetuning-the-model-with-the-trainer-api"),A(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),A(g,"href","#finetuning-the-model-with-the-trainer-api"),A(h,"class","relative group")},m(B,R){o(B,h,R),s(h,g),s(g,f),E(x,f,null),s(h,P),s(h,b),s(b,$),s(b,y),s(y,m),s(b,O),o(B,k,R),o(B,v,R),s(v,C),s(v,F),s(F,z),s(v,D),V=!0},i(B){V||(_(x.$$.fragment,B),V=!0)},o(B){w(x.$$.fragment,B),V=!1},d(B){B&&t(h),T(x),B&&t(k),B&&t(v)}}}function Zm(W){let h,g;return h=new kh({props:{id:"VN67ZpN33Ss"}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function e_(W){let h,g;return h=new kh({props:{id:"BNy08iIWVJM"}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function t_(W){let h,g,f,x,P,b,$;return h=new S({props:{code:`import tensorflow as tf
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
end_logits = outputs.end_logits.numpy()`}}),{c(){j(h.$$.fragment),g=d(),f=i("p"),x=a("For ease of experimentation, let\u2019s convert these outputs to NumPy arrays:"),P=d(),j(b.$$.fragment)},l(y){q(h.$$.fragment,y),g=c(y),f=r(y,"P",{});var m=p(f);x=n(m,"For ease of experimentation, let\u2019s convert these outputs to NumPy arrays:"),m.forEach(t),P=c(y),q(b.$$.fragment,y)},m(y,m){E(h,y,m),o(y,g,m),o(y,f,m),s(f,x),o(y,P,m),E(b,y,m),$=!0},i(y){$||(_(h.$$.fragment,y),_(b.$$.fragment,y),$=!0)},o(y){w(h.$$.fragment,y),w(b.$$.fragment,y),$=!1},d(y){T(h,y),y&&t(g),y&&t(f),y&&t(P),T(b,y)}}}function s_(W){let h,g,f,x,P,b,$,y,m,O;return h=new S({props:{code:`import torch
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
end_logits = outputs.end_logits.cpu().numpy()`}}),{c(){j(h.$$.fragment),g=d(),f=i("p"),x=a("Since the "),P=i("code"),b=a("Trainer"),$=a(" will give us predictions as NumPy arrays, we grab the start and end logits and convert them to that format:"),y=d(),j(m.$$.fragment)},l(k){q(h.$$.fragment,k),g=c(k),f=r(k,"P",{});var v=p(f);x=n(v,"Since the "),P=r(v,"CODE",{});var C=p(P);b=n(C,"Trainer"),C.forEach(t),$=n(v," will give us predictions as NumPy arrays, we grab the start and end logits and convert them to that format:"),v.forEach(t),y=c(k),q(m.$$.fragment,k)},m(k,v){E(h,k,v),o(k,g,v),o(k,f,v),s(f,x),s(f,P),s(P,b),s(f,$),o(k,y,v),E(m,k,v),O=!0},i(k){O||(_(h.$$.fragment,k),_(m.$$.fragment,k),O=!0)},o(k){w(h.$$.fragment,k),w(m.$$.fragment,k),O=!1},d(k){T(h,k),k&&t(g),k&&t(f),k&&t(y),T(m,k)}}}function a_(W){let h,g,f,x,P;return{c(){h=i("p"),g=a("Now let\u2019s put everything we just did in a "),f=i("code"),x=a("compute_metrics()"),P=a(" function that we will use after training our model. We will need to pass a bit more than just the output logits, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts:")},l(b){h=r(b,"P",{});var $=p(h);g=n($,"Now let\u2019s put everything we just did in a "),f=r($,"CODE",{});var y=p(f);x=n(y,"compute_metrics()"),y.forEach(t),P=n($," function that we will use after training our model. We will need to pass a bit more than just the output logits, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts:"),$.forEach(t)},m(b,$){o(b,h,$),s(h,g),s(h,f),s(f,x),s(h,P)},d(b){b&&t(h)}}}function n_(W){let h,g,f,x,P,b,$,y,m,O,k,v,C,F,z,D,V,B,R,M;return{c(){h=i("p"),g=a("Now let\u2019s put everything we just did in a "),f=i("code"),x=a("compute_metrics()"),P=a(" function that we will use in the "),b=i("code"),$=a("Trainer"),y=a(". Normally, that "),m=i("code"),O=a("compute_metrics()"),k=a(" function only receives a tuple "),v=i("code"),C=a("eval_preds"),F=a(" with logits and labels. Here we will need a bit more, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts, so we won\u2019t be able to use this function to get regular evaluation results during training. We will only use it at the end of training to check the results."),z=d(),D=i("p"),V=a("The "),B=i("code"),R=a("compute_metrics()"),M=a(" function groups the same steps as before; we just add a small check in case we don\u2019t come up with any valid answers (in which case we predict an empty string).")},l(L){h=r(L,"P",{});var Q=p(h);g=n(Q,"Now let\u2019s put everything we just did in a "),f=r(Q,"CODE",{});var K=p(f);x=n(K,"compute_metrics()"),K.forEach(t),P=n(Q," function that we will use in the "),b=r(Q,"CODE",{});var G=p(b);$=n(G,"Trainer"),G.forEach(t),y=n(Q,". Normally, that "),m=r(Q,"CODE",{});var I=p(m);O=n(I,"compute_metrics()"),I.forEach(t),k=n(Q," function only receives a tuple "),v=r(Q,"CODE",{});var U=p(v);C=n(U,"eval_preds"),U.forEach(t),F=n(Q," with logits and labels. Here we will need a bit more, as we have to look in the dataset of features for the offset and in the dataset of examples for the original contexts, so we won\u2019t be able to use this function to get regular evaluation results during training. We will only use it at the end of training to check the results."),Q.forEach(t),z=c(L),D=r(L,"P",{});var Z=p(D);V=n(Z,"The "),B=r(Z,"CODE",{});var te=p(B);R=n(te,"compute_metrics()"),te.forEach(t),M=n(Z," function groups the same steps as before; we just add a small check in case we don\u2019t come up with any valid answers (in which case we predict an empty string)."),Z.forEach(t)},m(L,Q){o(L,h,Q),s(h,g),s(h,f),s(f,x),s(h,P),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),s(h,v),s(v,C),s(h,F),o(L,z,Q),o(L,D,Q),s(D,V),s(D,B),s(B,R),s(D,M)},d(L){L&&t(h),L&&t(z),L&&t(D)}}}function o_(W){let h,g,f,x,P,b,$,y;return $=new S({props:{code:"model = TFAutoModelForQuestionAnswering.from_pretrained(model_checkpoint)",highlighted:"model = TFAutoModelForQuestionAnswering.from_pretrained(model_checkpoint)"}}),{c(){h=i("p"),g=a("We are now ready to train our model. Let\u2019s create it first, using the "),f=i("code"),x=a("TFAutoModelForQuestionAnswering"),P=a(" class like before:"),b=d(),j($.$$.fragment)},l(m){h=r(m,"P",{});var O=p(h);g=n(O,"We are now ready to train our model. Let\u2019s create it first, using the "),f=r(O,"CODE",{});var k=p(f);x=n(k,"TFAutoModelForQuestionAnswering"),k.forEach(t),P=n(O," class like before:"),O.forEach(t),b=c(m),q($.$$.fragment,m)},m(m,O){o(m,h,O),s(h,g),s(h,f),s(f,x),s(h,P),o(m,b,O),E($,m,O),y=!0},i(m){y||(_($.$$.fragment,m),y=!0)},o(m){w($.$$.fragment,m),y=!1},d(m){m&&t(h),m&&t(b),T($,m)}}}function i_(W){let h,g,f,x,P,b,$,y;return $=new S({props:{code:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)",highlighted:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)"}}),{c(){h=i("p"),g=a("We are now ready to train our model. Let\u2019s create it first, using the "),f=i("code"),x=a("AutoModelForQuestionAnswering"),P=a(" class like before:"),b=d(),j($.$$.fragment)},l(m){h=r(m,"P",{});var O=p(h);g=n(O,"We are now ready to train our model. Let\u2019s create it first, using the "),f=r(O,"CODE",{});var k=p(f);x=n(k,"AutoModelForQuestionAnswering"),k.forEach(t),P=n(O," class like before:"),O.forEach(t),b=c(m),q($.$$.fragment,m)},m(m,O){o(m,h,O),s(h,g),s(h,f),s(f,x),s(h,P),o(m,b,O),E($,m,O),y=!0},i(m){y||(_($.$$.fragment,m),y=!0)},o(m){w($.$$.fragment,m),y=!1},d(m){m&&t(h),m&&t(b),T($,m)}}}function r_(W){let h,g,f,x,P,b,$,y,m,O,k,v,C,F,z,D,V,B,R,M,L,Q,K,G;return x=new S({props:{code:`from transformers import DefaultDataCollator

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
)`}}),F=new S({props:{code:`from transformers import create_optimizer
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
tf.keras.mixed_precision.set_global_policy(<span class="hljs-string">&quot;mixed_float16&quot;</span>)`}}),{c(){h=i("p"),g=a("Now that\u2019s done, we can create our TF Datasets. We can use the simple default data collator this time:"),f=d(),j(x.$$.fragment),P=d(),b=i("p"),$=a("And now we create the datasets as usual."),y=d(),j(m.$$.fragment),O=d(),k=i("p"),v=a("Next, we set up our training hyperparameters and compile our model:"),C=d(),j(F.$$.fragment),z=d(),D=i("p"),V=a("Finally, we\u2019re ready to train with "),B=i("code"),R=a("model.fit()"),M=a(". We use a "),L=i("code"),Q=a("PushToHubCallback"),K=a(" to upload the model to the Hub after each epoch.")},l(I){h=r(I,"P",{});var U=p(h);g=n(U,"Now that\u2019s done, we can create our TF Datasets. We can use the simple default data collator this time:"),U.forEach(t),f=c(I),q(x.$$.fragment,I),P=c(I),b=r(I,"P",{});var Z=p(b);$=n(Z,"And now we create the datasets as usual."),Z.forEach(t),y=c(I),q(m.$$.fragment,I),O=c(I),k=r(I,"P",{});var te=p(k);v=n(te,"Next, we set up our training hyperparameters and compile our model:"),te.forEach(t),C=c(I),q(F.$$.fragment,I),z=c(I),D=r(I,"P",{});var Y=p(D);V=n(Y,"Finally, we\u2019re ready to train with "),B=r(Y,"CODE",{});var oe=p(B);R=n(oe,"model.fit()"),oe.forEach(t),M=n(Y,". We use a "),L=r(Y,"CODE",{});var fe=p(L);Q=n(fe,"PushToHubCallback"),fe.forEach(t),K=n(Y," to upload the model to the Hub after each epoch."),Y.forEach(t)},m(I,U){o(I,h,U),s(h,g),o(I,f,U),E(x,I,U),o(I,P,U),o(I,b,U),s(b,$),o(I,y,U),E(m,I,U),o(I,O,U),o(I,k,U),s(k,v),o(I,C,U),E(F,I,U),o(I,z,U),o(I,D,U),s(D,V),s(D,B),s(B,R),s(D,M),s(D,L),s(L,Q),s(D,K),G=!0},i(I){G||(_(x.$$.fragment,I),_(m.$$.fragment,I),_(F.$$.fragment,I),G=!0)},o(I){w(x.$$.fragment,I),w(m.$$.fragment,I),w(F.$$.fragment,I),G=!1},d(I){I&&t(h),I&&t(f),T(x,I),I&&t(P),I&&t(b),I&&t(y),T(m,I),I&&t(O),I&&t(k),I&&t(C),T(F,I),I&&t(z),I&&t(D)}}}function l_(W){let h,g,f,x,P,b,$,y,m,O,k,v,C,F,z,D,V,B,R,M,L,Q,K,G,I,U,Z,te,Y,oe,fe,Pe,ae,nt,We;return te=new S({props:{code:`from transformers import TrainingArguments

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
)`}}),{c(){h=i("p"),g=a("Once this is done, we can define our "),f=i("code"),x=a("TrainingArguments"),P=a(". As we said when we defined our function to compute the metric, we won\u2019t be able to have a regular evaluation loop because of the signature of the "),b=i("code"),$=a("compute_metrics()"),y=a(" function. We could write our own subclass of "),m=i("code"),O=a("Trainer"),k=a(" to do this (an approach you can find in the "),v=i("a"),C=a("question answering example script"),F=a("), but that\u2019s a bit too long for this section. Instead, we will only evaluate the model at the end of training here and show you how to do a regular evaluation in \u201CA custom training loop\u201D below."),z=d(),D=i("p"),V=a("This is really where the "),B=i("code"),R=a("Trainer"),M=a(" API shows its limits and the \u{1F917} Accelerate library shines: customizing the class to a specific use case can be painful, but tweaking a fully exposed training loop is easy."),L=d(),Q=i("p"),K=a("Let\u2019s take a look at our "),G=i("code"),I=a("TrainingArguments"),U=a(":"),Z=d(),j(te.$$.fragment),Y=d(),oe=i("p"),fe=a("We\u2019ve seen most of these before: we set some hyperparameters (like the learning rate, the number of epochs we train for, and some weight decay) and indicate that we want to save the model at the end of every epoch, skip evaluation, and upload our results to the Model Hub. We also enable mixed-precision training with "),Pe=i("code"),ae=a("fp16=True"),nt=a(", as it can speed up the training nicely on a recent GPU."),this.h()},l(H){h=r(H,"P",{});var X=p(h);g=n(X,"Once this is done, we can define our "),f=r(X,"CODE",{});var kt=p(f);x=n(kt,"TrainingArguments"),kt.forEach(t),P=n(X,". As we said when we defined our function to compute the metric, we won\u2019t be able to have a regular evaluation loop because of the signature of the "),b=r(X,"CODE",{});var ye=p(b);$=n(ye,"compute_metrics()"),ye.forEach(t),y=n(X," function. We could write our own subclass of "),m=r(X,"CODE",{});var ot=p(m);O=n(ot,"Trainer"),ot.forEach(t),k=n(X," to do this (an approach you can find in the "),v=r(X,"A",{href:!0,rel:!0});var Ce=p(v);C=n(Ce,"question answering example script"),Ce.forEach(t),F=n(X,"), but that\u2019s a bit too long for this section. Instead, we will only evaluate the model at the end of training here and show you how to do a regular evaluation in \u201CA custom training loop\u201D below."),X.forEach(t),z=c(H),D=r(H,"P",{});var it=p(D);V=n(it,"This is really where the "),B=r(it,"CODE",{});var $t=p(B);R=n($t,"Trainer"),$t.forEach(t),M=n(it," API shows its limits and the \u{1F917} Accelerate library shines: customizing the class to a specific use case can be painful, but tweaking a fully exposed training loop is easy."),it.forEach(t),L=c(H),Q=r(H,"P",{});var pe=p(Q);K=n(pe,"Let\u2019s take a look at our "),G=r(pe,"CODE",{});var me=p(G);I=n(me,"TrainingArguments"),me.forEach(t),U=n(pe,":"),pe.forEach(t),Z=c(H),q(te.$$.fragment,H),Y=c(H),oe=r(H,"P",{});var _e=p(oe);fe=n(_e,"We\u2019ve seen most of these before: we set some hyperparameters (like the learning rate, the number of epochs we train for, and some weight decay) and indicate that we want to save the model at the end of every epoch, skip evaluation, and upload our results to the Model Hub. We also enable mixed-precision training with "),Pe=r(_e,"CODE",{});var we=p(Pe);ae=n(we,"fp16=True"),we.forEach(t),nt=n(_e,", as it can speed up the training nicely on a recent GPU."),_e.forEach(t),this.h()},h(){A(v,"href","https://github.com/huggingface/transformers/blob/master/examples/pytorch/question-answering/trainer_qa.py"),A(v,"rel","nofollow")},m(H,X){o(H,h,X),s(h,g),s(h,f),s(f,x),s(h,P),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),s(h,v),s(v,C),s(h,F),o(H,z,X),o(H,D,X),s(D,V),s(D,B),s(B,R),s(D,M),o(H,L,X),o(H,Q,X),s(Q,K),s(Q,G),s(G,I),s(Q,U),o(H,Z,X),E(te,H,X),o(H,Y,X),o(H,oe,X),s(oe,fe),s(oe,Pe),s(Pe,ae),s(oe,nt),We=!0},i(H){We||(_(te.$$.fragment,H),We=!0)},o(H){w(te.$$.fragment,H),We=!1},d(H){H&&t(h),H&&t(z),H&&t(D),H&&t(L),H&&t(Q),H&&t(Z),T(te,H),H&&t(Y),H&&t(oe)}}}function p_(W){let h,g;return h=new S({props:{code:`from transformers.keras_callbacks import PushToHubCallback

callback = PushToHubCallback(output_dir="bert-finetuned-squad", tokenizer=tokenizer)

# We're going to do validation afterwards, so no validation mid-training
model.fit(tf_train_dataset, callbacks=[callback], epochs=num_train_epochs)`,highlighted:`<span class="hljs-keyword">from</span> transformers.keras_callbacks <span class="hljs-keyword">import</span> PushToHubCallback

callback = PushToHubCallback(output_dir=<span class="hljs-string">&quot;bert-finetuned-squad&quot;</span>, tokenizer=tokenizer)

<span class="hljs-comment"># We&#x27;re going to do validation afterwards, so no validation mid-training</span>
model.fit(tf_train_dataset, callbacks=[callback], epochs=num_train_epochs)`}}),{c(){j(h.$$.fragment)},l(f){q(h.$$.fragment,f)},m(f,x){E(h,f,x),g=!0},i(f){g||(_(h.$$.fragment,f),g=!0)},o(f){w(h.$$.fragment,f),g=!1},d(f){T(h,f)}}}function h_(W){let h,g,f,x,P,b,$,y,m,O;return h=new yh({props:{$$slots:{default:[d_]},$$scope:{ctx:W}}}),m=new S({props:{code:`from transformers import Trainer

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
trainer.train()`}}),{c(){j(h.$$.fragment),g=d(),f=i("p"),x=a("Finally, we just pass everything to the "),P=i("code"),b=a("Trainer"),$=a(" class and launch the training:"),y=d(),j(m.$$.fragment)},l(k){q(h.$$.fragment,k),g=c(k),f=r(k,"P",{});var v=p(f);x=n(v,"Finally, we just pass everything to the "),P=r(v,"CODE",{});var C=p(P);b=n(C,"Trainer"),C.forEach(t),$=n(v," class and launch the training:"),v.forEach(t),y=c(k),q(m.$$.fragment,k)},m(k,v){E(h,k,v),o(k,g,v),o(k,f,v),s(f,x),s(f,P),s(P,b),s(f,$),o(k,y,v),E(m,k,v),O=!0},i(k){O||(_(h.$$.fragment,k),_(m.$$.fragment,k),O=!0)},o(k){w(h.$$.fragment,k),w(m.$$.fragment,k),O=!1},d(k){T(h,k),k&&t(g),k&&t(f),k&&t(y),T(m,k)}}}function d_(W){let h,g,f,x,P;return{c(){h=i("p"),g=a("\u{1F4A1} If the output directory you are using exists, it needs to be a local clone of the repository you want to push to (so set a new name if you get an error when defining your "),f=i("code"),x=a("Trainer"),P=a(").")},l(b){h=r(b,"P",{});var $=p(h);g=n($,"\u{1F4A1} If the output directory you are using exists, it needs to be a local clone of the repository you want to push to (so set a new name if you get an error when defining your "),f=r($,"CODE",{});var y=p(f);x=n(y,"Trainer"),y.forEach(t),P=n($,")."),$.forEach(t)},m(b,$){o(b,h,$),s(h,g),s(h,f),s(f,x),s(h,P)},d(b){b&&t(h)}}}function c_(W){let h,g,f,x,P,b,$,y,m,O,k,v,C,F;return C=new S({props:{code:`predictions = model.predict(tf_eval_dataset)
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
)`}}),{c(){h=i("p"),g=a("Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=i("code"),x=a("predict()"),P=a(" method of our "),b=i("code"),$=a("model"),y=a(" will take care of getting predictions, and since we did all the hard work of defining a "),m=i("code"),O=a("compute_metrics()"),k=a(" function earlier, we can get our results in a single line:"),v=d(),j(C.$$.fragment)},l(z){h=r(z,"P",{});var D=p(h);g=n(D,"Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=r(D,"CODE",{});var V=p(f);x=n(V,"predict()"),V.forEach(t),P=n(D," method of our "),b=r(D,"CODE",{});var B=p(b);$=n(B,"model"),B.forEach(t),y=n(D," will take care of getting predictions, and since we did all the hard work of defining a "),m=r(D,"CODE",{});var R=p(m);O=n(R,"compute_metrics()"),R.forEach(t),k=n(D," function earlier, we can get our results in a single line:"),D.forEach(t),v=c(z),q(C.$$.fragment,z)},m(z,D){o(z,h,D),s(h,g),s(h,f),s(f,x),s(h,P),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),o(z,v,D),E(C,z,D),F=!0},i(z){F||(_(C.$$.fragment,z),F=!0)},o(z){w(C.$$.fragment,z),F=!1},d(z){z&&t(h),z&&t(v),T(C,z)}}}function u_(W){let h,g,f,x,P,b,$,y,m,O,k,v,C,F;return C=new S({props:{code:`predictions, _ = trainer.predict(validation_dataset)
start_logits, end_logits = predictions
compute_metrics(start_logits, end_logits, validation_dataset, raw_datasets["validation"])`,highlighted:`predictions, _ = trainer.predict(validation_dataset)
start_logits, end_logits = predictions
compute_metrics(start_logits, end_logits, validation_dataset, raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>])`}}),{c(){h=i("p"),g=a("Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=i("code"),x=a("predict()"),P=a(" method of the "),b=i("code"),$=a("Trainer"),y=a(" will return a tuple where the first elements will be the predictions of the model (here a pair with the start and end logits). We send this to our "),m=i("code"),O=a("compute_metrics()"),k=a(" function:"),v=d(),j(C.$$.fragment)},l(z){h=r(z,"P",{});var D=p(h);g=n(D,"Once the training is complete, we can finally evaluate our model (and pray we didn\u2019t spend all that compute time on nothing). The "),f=r(D,"CODE",{});var V=p(f);x=n(V,"predict()"),V.forEach(t),P=n(D," method of the "),b=r(D,"CODE",{});var B=p(b);$=n(B,"Trainer"),B.forEach(t),y=n(D," will return a tuple where the first elements will be the predictions of the model (here a pair with the start and end logits). We send this to our "),m=r(D,"CODE",{});var R=p(m);O=n(R,"compute_metrics()"),R.forEach(t),k=n(D," function:"),D.forEach(t),v=c(z),q(C.$$.fragment,z)},m(z,D){o(z,h,D),s(h,g),s(h,f),s(f,x),s(h,P),s(h,b),s(b,$),s(h,y),s(h,m),s(m,O),s(h,k),o(z,v,D),E(C,z,D),F=!0},i(z){F||(_(C.$$.fragment,z),F=!0)},o(z){w(C.$$.fragment,z),F=!1},d(z){z&&t(h),z&&t(v),T(C,z)}}}function zm(W){let h,g,f,x,P,b,$,y,m,O,k,v,C,F,z,D,V,B,R;return $=new S({props:{code:'trainer.push_to_hub(commit_message="Training complete")',highlighted:'trainer.push_to_hub(commit_message=<span class="hljs-string">&quot;Training complete&quot;</span>)'}}),v=new S({props:{code:"'https://huggingface.co/sgugger/bert-finetuned-squad/commit/9dcee1fbc25946a6ed4bb32efb1bd71d5fa90b68'",highlighted:'<span class="hljs-string">&#x27;https://huggingface.co/sgugger/bert-finetuned-squad/commit/9dcee1fbc25946a6ed4bb32efb1bd71d5fa90b68&#x27;</span>'}}),{c(){h=i("p"),g=a("Finally, we use the "),f=i("code"),x=a("push_to_hub()"),P=a(" method to make sure we upload the latest version of the model:"),b=d(),j($.$$.fragment),y=d(),m=i("p"),O=a("This returns the URL of the commit it just did, if you want to inspect it:"),k=d(),j(v.$$.fragment),C=d(),F=i("p"),z=a("The "),D=i("code"),V=a("Trainer"),B=a(" also drafts a model card with all the evaluation results and uploads it.")},l(M){h=r(M,"P",{});var L=p(h);g=n(L,"Finally, we use the "),f=r(L,"CODE",{});var Q=p(f);x=n(Q,"push_to_hub()"),Q.forEach(t),P=n(L," method to make sure we upload the latest version of the model:"),L.forEach(t),b=c(M),q($.$$.fragment,M),y=c(M),m=r(M,"P",{});var K=p(m);O=n(K,"This returns the URL of the commit it just did, if you want to inspect it:"),K.forEach(t),k=c(M),q(v.$$.fragment,M),C=c(M),F=r(M,"P",{});var G=p(F);z=n(G,"The "),D=r(G,"CODE",{});var I=p(D);V=n(I,"Trainer"),I.forEach(t),B=n(G," also drafts a model card with all the evaluation results and uploads it."),G.forEach(t)},m(M,L){o(M,h,L),s(h,g),s(h,f),s(f,x),s(h,P),o(M,b,L),E($,M,L),o(M,y,L),o(M,m,L),s(m,O),o(M,k,L),E(v,M,L),o(M,C,L),o(M,F,L),s(F,z),s(F,D),s(D,V),s(F,B),R=!0},i(M){R||(_($.$$.fragment,M),_(v.$$.fragment,M),R=!0)},o(M){w($.$$.fragment,M),w(v.$$.fragment,M),R=!1},d(M){M&&t(h),M&&t(b),T($,M),M&&t(y),M&&t(m),M&&t(k),T(v,M),M&&t(C),M&&t(F)}}}function f_(W){let h,g,f,x,P;return{c(){h=i("p"),g=a("\u270F\uFE0F "),f=i("strong"),x=a("Your turn!"),P=a(" Try another model architecture to see if it performs better on this task!")},l(b){h=r(b,"P",{});var $=p(h);g=n($,"\u270F\uFE0F "),f=r($,"STRONG",{});var y=p(f);x=n(y,"Your turn!"),y.forEach(t),P=n($," Try another model architecture to see if it performs better on this task!"),$.forEach(t)},m(b,$){o(b,h,$),s(h,g),s(h,f),s(f,x),s(h,P)},d(b){b&&t(h)}}}function Im(W){let h,g,f,x,P,b,$,y,m,O,k,v,C,F,z,D,V,B,R,M,L,Q,K,G,I,U,Z,te,Y,oe,fe,Pe,ae,nt,We,H,X,kt,ye,ot,Ce,it,$t,pe,me,_e,we,He,Qe,rt,lt,Ls,Ws,ka,Se,$a,ke,ja,ne,jt,Hs,yn,qa,$e,pt,Qs,Ve,kn,Vs,Rs,Ea,ht,Gs,Us,$n,Ta,dt,ct,je,is,Ys,Aa,qt,rs,Et,Da,he,Tt,ls,ge,jn,At,qn,En,Dt,Tn,An,ps,Pt,Pa,ut,ft,ee,Ct,hs,ds,Dn,cs,St,Ca,be,Pn,Js,Xs,Cn,Ks,Zs,Sn,Sa,qe,mt,ea,_t,wt,ta,sa,Oa,us,za,gt,Ee,Te,Ia,bt,On,Fa,Ot,ve,zt,fs,ms,zn,_s,It,Na,Re,Ma,ws,In,Oe,Ge,ze,aa,Ft,na,oa,Fn,ia,Ie,Ba,Nt,Mt,ra,Ue,Nn,la,Ae,pa,J,Mn,Ye,Bn,Ln,Bt,Wn,Hn,Lt,Qn,Vn,gs,Wt,La,Je,Wa,bs,ha,Ha,Ht,vs,xs,Rn,da,le,Qa,Xe,Va,ys,Qt,ks,Ke,Vt,Gn;return $=new at({}),G=new at({}),pe=new S({props:{code:`from torch.utils.data import DataLoader
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
)`}}),Qe=new S({props:{code:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)",highlighted:"model = AutoModelForQuestionAnswering.from_pretrained(model_checkpoint)"}}),ke=new S({props:{code:`from torch.optim import AdamW

optimizer = AdamW(model.parameters(), lr=2e-5)`,highlighted:`<span class="hljs-keyword">from</span> torch.optim <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">2e-5</span>)`}}),dt=new S({props:{code:`from accelerate import Accelerator

accelerator = Accelerator(fp16=True)
model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator(fp16=<span class="hljs-literal">True</span>)
model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`}}),Tt=new S({props:{code:`from transformers import get_scheduler

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
)`}}),ft=new S({props:{code:`from huggingface_hub import Repository, get_full_repo_name

model_name = "bert-finetuned-squad-accelerate"
repo_name = get_full_repo_name(model_name)
repo_name`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository, get_full_repo_name

model_name = <span class="hljs-string">&quot;bert-finetuned-squad-accelerate&quot;</span>
repo_name = get_full_repo_name(model_name)
repo_name`}}),Ct=new S({props:{code:"'sgugger/bert-finetuned-squad-accelerate'",highlighted:'<span class="hljs-string">&#x27;sgugger/bert-finetuned-squad-accelerate&#x27;</span>'}}),St=new S({props:{code:`output_dir = "bert-finetuned-squad-accelerate"
repo = Repository(output_dir, clone_from=repo_name)`,highlighted:`output_dir = <span class="hljs-string">&quot;bert-finetuned-squad-accelerate&quot;</span>
repo = Repository(output_dir, clone_from=repo_name)`}}),_t=new at({}),Mt=new S({props:{code:`from tqdm.auto import tqdm
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
        )`}}),Ae=new S({props:{code:`accelerator.wait_for_everyone()
unwrapped_model = accelerator.unwrap_model(model)
unwrapped_model.save_pretrained(output_dir, save_function=accelerator.save)`,highlighted:`accelerator.wait_for_everyone()
unwrapped_model = accelerator.unwrap_model(model)
unwrapped_model.save_pretrained(output_dir, save_function=accelerator.save)`}}),{c(){h=i("p"),g=a("If you want to dive a bit more deeply into the training loop, we will now show you how to do the same thing using \u{1F917}  Accelerate."),f=d(),x=i("h2"),P=i("a"),b=i("span"),j($.$$.fragment),y=d(),m=i("span"),O=a("A custom training loop"),k=d(),v=i("p"),C=a("Let\u2019s now have a look at the full training loop, so you can easily customize the parts you need. It will look a lot like the training loop in "),F=i("a"),z=a("Chapter 3"),D=a(", with the exception of the evaluation loop. We will be able to evaluate the model regularly since we\u2019re not constrained by the "),V=i("code"),B=a("Trainer"),R=a(" class anymore."),M=d(),L=i("h3"),Q=i("a"),K=i("span"),j(G.$$.fragment),I=d(),U=i("span"),Z=a("Preparing everything for training"),te=d(),Y=i("p"),oe=a("First we need to build the "),fe=i("code"),Pe=a("DataLoader"),ae=a("s from our datasets. We set the format of those datasets to "),nt=i("code"),We=a('"torch"'),H=a(", and remove the columns in the validation set that are not used by the model. Then, we can use the "),X=i("code"),kt=a("default_data_collator"),ye=a(" provided by Transformers as a "),ot=i("code"),Ce=a("collate_fn"),it=a(" and shuffle the training set, but not the validation set:"),$t=d(),j(pe.$$.fragment),me=d(),_e=i("p"),we=a("Next we reinstantiate our model, to make sure we\u2019re not continuing the fine-tuning from before but starting from the BERT pretrained model again:"),He=d(),j(Qe.$$.fragment),rt=d(),lt=i("p"),Ls=a("Then we will need an optimizer. As usual we use the classic "),Ws=i("code"),ka=a("AdamW"),Se=a(", which is like Adam, but with a fix in the way weight decay is applied:"),$a=d(),j(ke.$$.fragment),ja=d(),ne=i("p"),jt=a("Once we have all those objects, we can send them to the "),Hs=i("code"),yn=a("accelerator.prepare()"),qa=a(" method. Remember that if you want to train on TPUs in a Colab notebook, you will need to move all of this code into a training function, and that shouldn\u2019t execute any cell that instantiates an "),$e=i("code"),pt=a("Accelerator"),Qs=a(". We can force mixed-precision training by passing "),Ve=i("code"),kn=a("fp16=True"),Vs=a(" to the "),Rs=i("code"),Ea=a("Accelerator"),ht=a(" (or, if you are executing the code as a script, just make sure to fill in the \u{1F917} Accelerate "),Gs=i("code"),Us=a("config"),$n=a(" appropriately)."),Ta=d(),j(dt.$$.fragment),ct=d(),je=i("p"),is=a("As you should know from the previous sections, we can only use the "),Ys=i("code"),Aa=a("train_dataloader"),qt=a(" length to compute the number of training steps after it has gone through the "),rs=i("code"),Et=a("accelerator.prepare()"),Da=a(" method. We use the same linear schedule as in the previous sections:"),he=d(),j(Tt.$$.fragment),ls=d(),ge=i("p"),jn=a("To push our model to the Hub, we will need to create a "),At=i("code"),qn=a("Repository"),En=a(" object in a working folder. First log in to the Hugging Face Hub, if you\u2019re not logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),Dt=i("code"),Tn=a("repo_name"),An=a(" with your own choice; it just needs to contain your username, which is what the function "),ps=i("code"),Pt=a("get_full_repo_name()"),Pa=a(" does):"),ut=d(),j(ft.$$.fragment),ee=d(),j(Ct.$$.fragment),hs=d(),ds=i("p"),Dn=a("Then we can clone that repository in a local folder. If it already exists, this local folder should be a clone of the repository we are working with:"),cs=d(),j(St.$$.fragment),Ca=d(),be=i("p"),Pn=a("We can now upload anything we save in "),Js=i("code"),Xs=a("output_dir"),Cn=a(" by calling the "),Ks=i("code"),Zs=a("repo.push_to_hub()"),Sn=a(" method. This will help us upload the intermediate models at the end of each epoch."),Sa=d(),qe=i("h2"),mt=i("a"),ea=i("span"),j(_t.$$.fragment),wt=d(),ta=i("span"),sa=a("Training loop"),Oa=d(),us=i("p"),za=a("We are now ready to write the full training loop. After defining a progress bar to follow how training goes, the loop has three parts:"),gt=d(),Ee=i("ul"),Te=i("li"),Ia=a("The training in itself, which is the classic iteration over the "),bt=i("code"),On=a("train_dataloader"),Fa=a(", forward pass through the model, then backward pass and optimizer step."),Ot=d(),ve=i("li"),zt=a("The evaluation, in which we gather all the values for "),fs=i("code"),ms=a("start_logits"),zn=a(" and "),_s=i("code"),It=a("end_logits"),Na=a(" before converting them to NumPy arrays. Once the evaluation loop is finished, we concatenate all the results. Note that we need to truncate because the "),Re=i("code"),Ma=a("Accelerator"),ws=a(" may have added a few samples at the end to ensure we have the same number of examples in each process."),In=d(),Oe=i("li"),Ge=a("Saving and uploading, where we first save the model and the tokenizer, then call "),ze=i("code"),aa=a("repo.push_to_hub()"),Ft=a(". As we did before, we use the argument "),na=i("code"),oa=a("blocking=False"),Fn=a(" to tell the \u{1F917} Hub library to push in an asynchronous process. This way, training continues normally and this (long) instruction is executed in the background."),ia=d(),Ie=i("p"),Ba=a("Here\u2019s the complete code for the training loop:"),Nt=d(),j(Mt.$$.fragment),ra=d(),Ue=i("p"),Nn=a("In case this is the first time you\u2019re seeing a model saved with \u{1F917} Accelerate, let\u2019s take a moment to inspect the three lines of code that go with it:"),la=d(),j(Ae.$$.fragment),pa=d(),J=i("p"),Mn=a("The first line is self-explanatory: it tells all the processes to wait until everyone is at that stage before continuing. This is to make sure we have the same model in every process before saving. Then we grab the "),Ye=i("code"),Bn=a("unwrapped_model"),Ln=a(", which is the base model we defined. The "),Bt=i("code"),Wn=a("accelerator.prepare()"),Hn=a(" method changes the model to work in distributed training, so it won\u2019t have the "),Lt=i("code"),Qn=a("save_pretrained()"),Vn=a(" method anymore; the "),gs=i("code"),Wt=a("accelerator.unwrap_model()"),La=a(" method undoes that step. Lastly, we call "),Je=i("code"),Wa=a("save_pretrained()"),bs=a(" but tell that method to use "),ha=i("code"),Ha=a("accelerator.save()"),Ht=a(" instead of "),vs=i("code"),xs=a("torch.save()"),Rn=a("."),da=d(),le=i("p"),Qa=a("Once this is done, you should have a model that produces results pretty similar to the one trained with the "),Xe=i("code"),Va=a("Trainer"),ys=a(". You can check the model we trained using this code at "),Qt=i("a"),ks=i("em"),Ke=a("huggingface-course/bert-finetuned-squad-accelerate"),Vt=a(". And if you want to test out any tweaks to the training loop, you can directly implement them by editing the code shown above!"),this.h()},l(u){h=r(u,"P",{});var N=p(h);g=n(N,"If you want to dive a bit more deeply into the training loop, we will now show you how to do the same thing using \u{1F917}  Accelerate."),N.forEach(t),f=c(u),x=r(u,"H2",{class:!0});var Un=p(x);P=r(Un,"A",{id:!0,class:!0,href:!0});var Yn=p(P);b=r(Yn,"SPAN",{});var Ze=p(b);q($.$$.fragment,Ze),Ze.forEach(t),Yn.forEach(t),y=c(Un),m=r(Un,"SPAN",{});var ni=p(m);O=n(ni,"A custom training loop"),ni.forEach(t),Un.forEach(t),k=c(u),v=r(u,"P",{});var et=p(v);C=n(et,"Let\u2019s now have a look at the full training loop, so you can easily customize the parts you need. It will look a lot like the training loop in "),F=r(et,"A",{href:!0});var oi=p(F);z=n(oi,"Chapter 3"),oi.forEach(t),D=n(et,", with the exception of the evaluation loop. We will be able to evaluate the model regularly since we\u2019re not constrained by the "),V=r(et,"CODE",{});var ii=p(V);B=n(ii,"Trainer"),ii.forEach(t),R=n(et," class anymore."),et.forEach(t),M=c(u),L=r(u,"H3",{class:!0});var $s=p(L);Q=r($s,"A",{id:!0,class:!0,href:!0});var ri=p(Q);K=r(ri,"SPAN",{});var li=p(K);q(G.$$.fragment,li),li.forEach(t),ri.forEach(t),I=c($s),U=r($s,"SPAN",{});var Jn=p(U);Z=n(Jn,"Preparing everything for training"),Jn.forEach(t),$s.forEach(t),te=c(u),Y=r(u,"P",{});var de=p(Y);oe=n(de,"First we need to build the "),fe=r(de,"CODE",{});var pi=p(fe);Pe=n(pi,"DataLoader"),pi.forEach(t),ae=n(de,"s from our datasets. We set the format of those datasets to "),nt=r(de,"CODE",{});var Xn=p(nt);We=n(Xn,'"torch"'),Xn.forEach(t),H=n(de,", and remove the columns in the validation set that are not used by the model. Then, we can use the "),X=r(de,"CODE",{});var De=p(X);kt=n(De,"default_data_collator"),De.forEach(t),ye=n(de," provided by Transformers as a "),ot=r(de,"CODE",{});var ca=p(ot);Ce=n(ca,"collate_fn"),ca.forEach(t),it=n(de," and shuffle the training set, but not the validation set:"),de.forEach(t),$t=c(u),q(pe.$$.fragment,u),me=c(u),_e=r(u,"P",{});var Ra=p(_e);we=n(Ra,"Next we reinstantiate our model, to make sure we\u2019re not continuing the fine-tuning from before but starting from the BERT pretrained model again:"),Ra.forEach(t),He=c(u),q(Qe.$$.fragment,u),rt=c(u),lt=r(u,"P",{});var Ga=p(lt);Ls=n(Ga,"Then we will need an optimizer. As usual we use the classic "),Ws=r(Ga,"CODE",{});var hi=p(Ws);ka=n(hi,"AdamW"),hi.forEach(t),Se=n(Ga,", which is like Adam, but with a fix in the way weight decay is applied:"),Ga.forEach(t),$a=c(u),q(ke.$$.fragment,u),ja=c(u),ne=r(u,"P",{});var xe=p(ne);jt=n(xe,"Once we have all those objects, we can send them to the "),Hs=r(xe,"CODE",{});var ua=p(Hs);yn=n(ua,"accelerator.prepare()"),ua.forEach(t),qa=n(xe," method. Remember that if you want to train on TPUs in a Colab notebook, you will need to move all of this code into a training function, and that shouldn\u2019t execute any cell that instantiates an "),$e=r(xe,"CODE",{});var Ua=p($e);pt=n(Ua,"Accelerator"),Ua.forEach(t),Qs=n(xe,". We can force mixed-precision training by passing "),Ve=r(xe,"CODE",{});var di=p(Ve);kn=n(di,"fp16=True"),di.forEach(t),Vs=n(xe," to the "),Rs=r(xe,"CODE",{});var ci=p(Rs);Ea=n(ci,"Accelerator"),ci.forEach(t),ht=n(xe," (or, if you are executing the code as a script, just make sure to fill in the \u{1F917} Accelerate "),Gs=r(xe,"CODE",{});var ui=p(Gs);Us=n(ui,"config"),ui.forEach(t),$n=n(xe," appropriately)."),xe.forEach(t),Ta=c(u),q(dt.$$.fragment,u),ct=c(u),je=r(u,"P",{});var tt=p(je);is=n(tt,"As you should know from the previous sections, we can only use the "),Ys=r(tt,"CODE",{});var Ya=p(Ys);Aa=n(Ya,"train_dataloader"),Ya.forEach(t),qt=n(tt," length to compute the number of training steps after it has gone through the "),rs=r(tt,"CODE",{});var fi=p(rs);Et=n(fi,"accelerator.prepare()"),fi.forEach(t),Da=n(tt," method. We use the same linear schedule as in the previous sections:"),tt.forEach(t),he=c(u),q(Tt.$$.fragment,u),ls=c(u),ge=r(u,"P",{});var vt=p(ge);jn=n(vt,"To push our model to the Hub, we will need to create a "),At=r(vt,"CODE",{});var mi=p(At);qn=n(mi,"Repository"),mi.forEach(t),En=n(vt," object in a working folder. First log in to the Hugging Face Hub, if you\u2019re not logged in already. We\u2019ll determine the repository name from the model ID we want to give our model (feel free to replace the "),Dt=r(vt,"CODE",{});var fa=p(Dt);Tn=n(fa,"repo_name"),fa.forEach(t),An=n(vt," with your own choice; it just needs to contain your username, which is what the function "),ps=r(vt,"CODE",{});var Ja=p(ps);Pt=n(Ja,"get_full_repo_name()"),Ja.forEach(t),Pa=n(vt," does):"),vt.forEach(t),ut=c(u),q(ft.$$.fragment,u),ee=c(u),q(Ct.$$.fragment,u),hs=c(u),ds=r(u,"P",{});var _i=p(ds);Dn=n(_i,"Then we can clone that repository in a local folder. If it already exists, this local folder should be a clone of the repository we are working with:"),_i.forEach(t),cs=c(u),q(St.$$.fragment,u),Ca=c(u),be=r(u,"P",{});var js=p(be);Pn=n(js,"We can now upload anything we save in "),Js=r(js,"CODE",{});var Kn=p(Js);Xs=n(Kn,"output_dir"),Kn.forEach(t),Cn=n(js," by calling the "),Ks=r(js,"CODE",{});var qs=p(Ks);Zs=n(qs,"repo.push_to_hub()"),qs.forEach(t),Sn=n(js," method. This will help us upload the intermediate models at the end of each epoch."),js.forEach(t),Sa=c(u),qe=r(u,"H2",{class:!0});var ma=p(qe);mt=r(ma,"A",{id:!0,class:!0,href:!0});var Es=p(mt);ea=r(Es,"SPAN",{});var Zn=p(ea);q(_t.$$.fragment,Zn),Zn.forEach(t),Es.forEach(t),wt=c(ma),ta=r(ma,"SPAN",{});var st=p(ta);sa=n(st,"Training loop"),st.forEach(t),ma.forEach(t),Oa=c(u),us=r(u,"P",{});var wi=p(us);za=n(wi,"We are now ready to write the full training loop. After defining a progress bar to follow how training goes, the loop has three parts:"),wi.forEach(t),gt=c(u),Ee=r(u,"UL",{});var xt=p(Ee);Te=r(xt,"LI",{});var Xa=p(Te);Ia=n(Xa,"The training in itself, which is the classic iteration over the "),bt=r(Xa,"CODE",{});var gi=p(bt);On=n(gi,"train_dataloader"),gi.forEach(t),Fa=n(Xa,", forward pass through the model, then backward pass and optimizer step."),Xa.forEach(t),Ot=c(xt),ve=r(xt,"LI",{});var Fe=p(ve);zt=n(Fe,"The evaluation, in which we gather all the values for "),fs=r(Fe,"CODE",{});var bi=p(fs);ms=n(bi,"start_logits"),bi.forEach(t),zn=n(Fe," and "),_s=r(Fe,"CODE",{});var vi=p(_s);It=n(vi,"end_logits"),vi.forEach(t),Na=n(Fe," before converting them to NumPy arrays. Once the evaluation loop is finished, we concatenate all the results. Note that we need to truncate because the "),Re=r(Fe,"CODE",{});var eo=p(Re);Ma=n(eo,"Accelerator"),eo.forEach(t),ws=n(Fe," may have added a few samples at the end to ensure we have the same number of examples in each process."),Fe.forEach(t),In=c(xt),Oe=r(xt,"LI",{});var ce=p(Oe);Ge=n(ce,"Saving and uploading, where we first save the model and the tokenizer, then call "),ze=r(ce,"CODE",{});var xi=p(ze);aa=n(xi,"repo.push_to_hub()"),xi.forEach(t),Ft=n(ce,". As we did before, we use the argument "),na=r(ce,"CODE",{});var _a=p(na);oa=n(_a,"blocking=False"),_a.forEach(t),Fn=n(ce," to tell the \u{1F917} Hub library to push in an asynchronous process. This way, training continues normally and this (long) instruction is executed in the background."),ce.forEach(t),xt.forEach(t),ia=c(u),Ie=r(u,"P",{});var yi=p(Ie);Ba=n(yi,"Here\u2019s the complete code for the training loop:"),yi.forEach(t),Nt=c(u),q(Mt.$$.fragment,u),ra=c(u),Ue=r(u,"P",{});var ki=p(Ue);Nn=n(ki,"In case this is the first time you\u2019re seeing a model saved with \u{1F917} Accelerate, let\u2019s take a moment to inspect the three lines of code that go with it:"),ki.forEach(t),la=c(u),q(Ae.$$.fragment,u),pa=c(u),J=r(u,"P",{});var se=p(J);Mn=n(se,"The first line is self-explanatory: it tells all the processes to wait until everyone is at that stage before continuing. This is to make sure we have the same model in every process before saving. Then we grab the "),Ye=r(se,"CODE",{});var $i=p(Ye);Bn=n($i,"unwrapped_model"),$i.forEach(t),Ln=n(se,", which is the base model we defined. The "),Bt=r(se,"CODE",{});var ji=p(Bt);Wn=n(ji,"accelerator.prepare()"),ji.forEach(t),Hn=n(se," method changes the model to work in distributed training, so it won\u2019t have the "),Lt=r(se,"CODE",{});var to=p(Lt);Qn=n(to,"save_pretrained()"),to.forEach(t),Vn=n(se," method anymore; the "),gs=r(se,"CODE",{});var Ts=p(gs);Wt=n(Ts,"accelerator.unwrap_model()"),Ts.forEach(t),La=n(se," method undoes that step. Lastly, we call "),Je=r(se,"CODE",{});var so=p(Je);Wa=n(so,"save_pretrained()"),so.forEach(t),bs=n(se," but tell that method to use "),ha=r(se,"CODE",{});var As=p(ha);Ha=n(As,"accelerator.save()"),As.forEach(t),Ht=n(se," instead of "),vs=r(se,"CODE",{});var ao=p(vs);xs=n(ao,"torch.save()"),ao.forEach(t),Rn=n(se,"."),se.forEach(t),da=c(u),le=r(u,"P",{});var ue=p(le);Qa=n(ue,"Once this is done, you should have a model that produces results pretty similar to the one trained with the "),Xe=r(ue,"CODE",{});var qi=p(Xe);Va=n(qi,"Trainer"),qi.forEach(t),ys=n(ue,". You can check the model we trained using this code at "),Qt=r(ue,"A",{href:!0,rel:!0});var Ka=p(Qt);ks=r(Ka,"EM",{});var Ei=p(ks);Ke=n(Ei,"huggingface-course/bert-finetuned-squad-accelerate"),Ei.forEach(t),Ka.forEach(t),Vt=n(ue,". And if you want to test out any tweaks to the training loop, you can directly implement them by editing the code shown above!"),ue.forEach(t),this.h()},h(){A(P,"id","a-custom-training-loop"),A(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),A(P,"href","#a-custom-training-loop"),A(x,"class","relative group"),A(F,"href","/course/chapter3/4"),A(Q,"id","preparing-everything-for-training"),A(Q,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),A(Q,"href","#preparing-everything-for-training"),A(L,"class","relative group"),A(mt,"id","training-loop"),A(mt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),A(mt,"href","#training-loop"),A(qe,"class","relative group"),A(Qt,"href","https://huggingface.co/huggingface-course/bert-finetuned-squad-accelerate"),A(Qt,"rel","nofollow")},m(u,N){o(u,h,N),s(h,g),o(u,f,N),o(u,x,N),s(x,P),s(P,b),E($,b,null),s(x,y),s(x,m),s(m,O),o(u,k,N),o(u,v,N),s(v,C),s(v,F),s(F,z),s(v,D),s(v,V),s(V,B),s(v,R),o(u,M,N),o(u,L,N),s(L,Q),s(Q,K),E(G,K,null),s(L,I),s(L,U),s(U,Z),o(u,te,N),o(u,Y,N),s(Y,oe),s(Y,fe),s(fe,Pe),s(Y,ae),s(Y,nt),s(nt,We),s(Y,H),s(Y,X),s(X,kt),s(Y,ye),s(Y,ot),s(ot,Ce),s(Y,it),o(u,$t,N),E(pe,u,N),o(u,me,N),o(u,_e,N),s(_e,we),o(u,He,N),E(Qe,u,N),o(u,rt,N),o(u,lt,N),s(lt,Ls),s(lt,Ws),s(Ws,ka),s(lt,Se),o(u,$a,N),E(ke,u,N),o(u,ja,N),o(u,ne,N),s(ne,jt),s(ne,Hs),s(Hs,yn),s(ne,qa),s(ne,$e),s($e,pt),s(ne,Qs),s(ne,Ve),s(Ve,kn),s(ne,Vs),s(ne,Rs),s(Rs,Ea),s(ne,ht),s(ne,Gs),s(Gs,Us),s(ne,$n),o(u,Ta,N),E(dt,u,N),o(u,ct,N),o(u,je,N),s(je,is),s(je,Ys),s(Ys,Aa),s(je,qt),s(je,rs),s(rs,Et),s(je,Da),o(u,he,N),E(Tt,u,N),o(u,ls,N),o(u,ge,N),s(ge,jn),s(ge,At),s(At,qn),s(ge,En),s(ge,Dt),s(Dt,Tn),s(ge,An),s(ge,ps),s(ps,Pt),s(ge,Pa),o(u,ut,N),E(ft,u,N),o(u,ee,N),E(Ct,u,N),o(u,hs,N),o(u,ds,N),s(ds,Dn),o(u,cs,N),E(St,u,N),o(u,Ca,N),o(u,be,N),s(be,Pn),s(be,Js),s(Js,Xs),s(be,Cn),s(be,Ks),s(Ks,Zs),s(be,Sn),o(u,Sa,N),o(u,qe,N),s(qe,mt),s(mt,ea),E(_t,ea,null),s(qe,wt),s(qe,ta),s(ta,sa),o(u,Oa,N),o(u,us,N),s(us,za),o(u,gt,N),o(u,Ee,N),s(Ee,Te),s(Te,Ia),s(Te,bt),s(bt,On),s(Te,Fa),s(Ee,Ot),s(Ee,ve),s(ve,zt),s(ve,fs),s(fs,ms),s(ve,zn),s(ve,_s),s(_s,It),s(ve,Na),s(ve,Re),s(Re,Ma),s(ve,ws),s(Ee,In),s(Ee,Oe),s(Oe,Ge),s(Oe,ze),s(ze,aa),s(Oe,Ft),s(Oe,na),s(na,oa),s(Oe,Fn),o(u,ia,N),o(u,Ie,N),s(Ie,Ba),o(u,Nt,N),E(Mt,u,N),o(u,ra,N),o(u,Ue,N),s(Ue,Nn),o(u,la,N),E(Ae,u,N),o(u,pa,N),o(u,J,N),s(J,Mn),s(J,Ye),s(Ye,Bn),s(J,Ln),s(J,Bt),s(Bt,Wn),s(J,Hn),s(J,Lt),s(Lt,Qn),s(J,Vn),s(J,gs),s(gs,Wt),s(J,La),s(J,Je),s(Je,Wa),s(J,bs),s(J,ha),s(ha,Ha),s(J,Ht),s(J,vs),s(vs,xs),s(J,Rn),o(u,da,N),o(u,le,N),s(le,Qa),s(le,Xe),s(Xe,Va),s(le,ys),s(le,Qt),s(Qt,ks),s(ks,Ke),s(le,Vt),Gn=!0},i(u){Gn||(_($.$$.fragment,u),_(G.$$.fragment,u),_(pe.$$.fragment,u),_(Qe.$$.fragment,u),_(ke.$$.fragment,u),_(dt.$$.fragment,u),_(Tt.$$.fragment,u),_(ft.$$.fragment,u),_(Ct.$$.fragment,u),_(St.$$.fragment,u),_(_t.$$.fragment,u),_(Mt.$$.fragment,u),_(Ae.$$.fragment,u),Gn=!0)},o(u){w($.$$.fragment,u),w(G.$$.fragment,u),w(pe.$$.fragment,u),w(Qe.$$.fragment,u),w(ke.$$.fragment,u),w(dt.$$.fragment,u),w(Tt.$$.fragment,u),w(ft.$$.fragment,u),w(Ct.$$.fragment,u),w(St.$$.fragment,u),w(_t.$$.fragment,u),w(Mt.$$.fragment,u),w(Ae.$$.fragment,u),Gn=!1},d(u){u&&t(h),u&&t(f),u&&t(x),T($),u&&t(k),u&&t(v),u&&t(M),u&&t(L),T(G),u&&t(te),u&&t(Y),u&&t($t),T(pe,u),u&&t(me),u&&t(_e),u&&t(He),T(Qe,u),u&&t(rt),u&&t(lt),u&&t($a),T(ke,u),u&&t(ja),u&&t(ne),u&&t(Ta),T(dt,u),u&&t(ct),u&&t(je),u&&t(he),T(Tt,u),u&&t(ls),u&&t(ge),u&&t(ut),T(ft,u),u&&t(ee),T(Ct,u),u&&t(hs),u&&t(ds),u&&t(cs),T(St,u),u&&t(Ca),u&&t(be),u&&t(Sa),u&&t(qe),T(_t),u&&t(Oa),u&&t(us),u&&t(gt),u&&t(Ee),u&&t(ia),u&&t(Ie),u&&t(Nt),T(Mt,u),u&&t(ra),u&&t(Ue),u&&t(la),T(Ae,u),u&&t(pa),u&&t(J),u&&t(da),u&&t(le)}}}function m_(W){let h,g,f,x,P,b,$,y,m,O,k,v,C,F,z,D,V,B,R,M,L,Q,K,G,I,U,Z,te,Y,oe,fe,Pe,ae,nt,We,H,X,kt,ye,ot,Ce,it,$t,pe,me,_e,we,He,Qe,rt,lt,Ls,Ws,ka,Se,$a,ke,ja,ne,jt,Hs,yn,qa,$e,pt,Qs,Ve,kn,Vs,Rs,Ea,ht,Gs,Us,$n,Ta,dt,ct,je,is,Ys,Aa,qt,rs,Et,Da,he,Tt,ls,ge,jn,At,qn,En,Dt,Tn,An,ps,Pt,Pa,ut,ft,ee,Ct,hs,ds,Dn,cs,St,Ca,be,Pn,Js,Xs,Cn,Ks,Zs,Sn,Sa,qe,mt,ea,_t,wt,ta,sa,Oa,us,za,gt,Ee,Te,Ia,bt,On,Fa,Ot,ve,zt,fs,ms,zn,_s,It,Na,Re,Ma,ws,In,Oe,Ge,ze,aa,Ft,na,oa,Fn,ia,Ie,Ba,Nt,Mt,ra,Ue,Nn,la,Ae,pa,J,Mn,Ye,Bn,Ln,Bt,Wn,Hn,Lt,Qn,Vn,gs,Wt,La,Je,Wa,bs,ha,Ha,Ht,vs,xs,Rn,da,le,Qa,Xe,Va,ys,Qt,ks,Ke,Vt,Gn,u,N,Un,Yn,Ze,ni,et,oi,ii,$s,ri,li,Jn,de,pi,Xn,De,ca,Ra,Ga,hi,xe,ua,Ua,di,ci,ui,tt,Ya,fi,vt,mi,fa,Ja,_i,js,Kn,qs,ma,Es,Zn,st,wi,xt,Xa,gi,Fe,bi,vi,eo,ce,xi,_a,yi,ki,se,$i,ji,to,Ts,so,As,ao,ue,qi,Ka,Ei,$h,qr,jh,qh,vl,no,xl,oo,yl,Ti,Eh,kl,io,$l,ro,jl,Ai,Th,ql,Di,Ah,El,Za,Pi,Er,Dh,Ph,Ch,Ds,Tr,Sh,Oh,Ar,zh,Ih,Dr,Fh,Nh,Tl,Ps,Mh,Pr,Bh,Lh,Cr,Wh,Hh,Al,en,Qh,Sr,Vh,Rh,Dl,lo,Pl,po,Cl,tn,Gh,Or,Uh,Yh,Sl,ho,Ol,co,zl,sn,Jh,zr,Xh,Kh,Il,uo,Fl,fo,Nl,Ci,Zh,Ml,an,Bl,Si,ed,Ll,mo,Wl,Oi,td,Hl,Cs,sd,Ir,ad,nd,Fr,od,id,Ql,_o,Vl,wo,Rl,zi,rd,Gl,wa,nn,Nr,go,ld,Mr,pd,Ul,Ii,hd,Yl,Ss,dd,Br,cd,ud,Lr,fd,md,Jl,bo,Xl,Fi,_d,Kl,vo,Zl,xo,ep,Ni,wd,tp,Mi,gd,sp,Rt,Gt,Bi,ga,on,Wr,yo,bd,Hr,vd,ap,Ut,Yt,Li,rn,xd,ko,Qr,yd,kd,$d,np,yt,Vr,jd,qd,Rr,Ed,Td,$o,Ad,Gr,Dd,Pd,Cd,ba,Sd,Ur,Od,zd,Yr,Id,Fd,op,Ne,Nd,Jr,Md,Bd,Xr,Ld,Wd,Kr,Hd,Qd,ip,Nm='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>log</mi><mo>\u2061</mo><mo stretchy="false">(</mo><mi>a</mi><mi>b</mi><mo stretchy="false">)</mo><mo>=</mo><mi>log</mi><mo>\u2061</mo><mo stretchy="false">(</mo><mi>a</mi><mo stretchy="false">)</mo><mo>+</mo><mi>log</mi><mo>\u2061</mo><mo stretchy="false">(</mo><mi>b</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\log(ab) = \\log(a) + \\log(b)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">ab</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2778em;"></span><span class="mrel">=</span><span class="mspace" style="margin-right:0.2778em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">a</span><span class="mclose">)</span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">+</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mop">lo<span style="margin-right:0.01389em;">g</span></span><span class="mopen">(</span><span class="mord mathnormal">b</span><span class="mclose">)</span></span></span></span>',rp,lp,ln,Vd,Zr,Rd,Gd,pp,jo,hp,Wi,Ud,dp,qo,cp,pn,Yd,el,Jd,Xd,up,Jt,Xt,Hi,Me,Kd,tl,Zd,ec,sl,tc,sc,al,ac,nc,nl,oc,ic,fp,Eo,mp,hn,rc,ol,lc,pc,_p,Os,il,hc,dc,rl,cc,uc,To,fc,ll,mc,_c,wp,Qi,wc,gp,Ao,bp,Vi,gc,vp,Do,xp,Ri,bc,yp,Po,kp,Gi,vc,$p,Co,jp,So,qp,Ui,xc,Ep,Oo,Tp,zo,Ap,dn,yc,Io,kc,$c,Dp,Yi,Fo,Pp,Ji,jc,Cp,No,Sp,Mo,Op,Xi,qc,zp,va,cn,pl,Bo,Ec,hl,Tc,Ip,Kt,Zt,Ki,Zi,Ac,Fp,er,Dc,Np,Lo,Mp,tr,Pc,Bp,Wo,Lp,es,ts,sr,Be,Cc,dl,Sc,Oc,cl,zc,Ic,ul,Fc,Nc,fl,Mc,Bc,Wp,ss,as,ar,nr,Lc,Hp,ns,os,or,Ho,Qp,ir,Wc,Vp,rr,lr,Hc,Rp,un,Gp,pr,xa,fn,ml,Qo,Qc,_l,Vc,Up,mn,Rc,wl,Gc,Uc,Yp,Vo,Jp,Ro,Xp,hr,Yc,Kp;f=new Rm({props:{fw:W[0]}}),y=new at({});const su=[Um,Gm],Go=[];function au(e,l){return e[0]==="pt"?0:1}C=au(W),F=Go[C]=su[C](W),I=new kh({props:{id:"ajPx5LwJD-I"}}),me=new yh({props:{$$slots:{default:[Ym]},$$scope:{ctx:W}}}),rt=new at({}),Ve=new at({}),ct=new S({props:{code:`from datasets import load_dataset

raw_datasets = load_dataset("squad")`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

raw_datasets = load_dataset(<span class="hljs-string">&quot;squad&quot;</span>)`}}),qt=new S({props:{code:"raw_datasets",highlighted:"raw_datasets"}}),Et=new S({props:{code:`DatasetDict({
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
})`}}),Pt=new S({props:{code:`print("Context: ", raw_datasets["train"][0]["context"])
print("Question: ", raw_datasets["train"][0]["question"])
print("Answer: ", raw_datasets["train"][0]["answers"])`,highlighted:`<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Context: &quot;</span>, raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;context&quot;</span>])
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Question: &quot;</span>, raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;question&quot;</span>])
<span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Answer: &quot;</span>, raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;answers&quot;</span>])`}}),ut=new S({props:{code:`Context: 'Architecturally, the school has a Catholic character. Atop the Main Building\\'s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend "Venite Ad Me Omnes". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.'
Question: 'To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?'
Answer: {'text': ['Saint Bernadette Soubirous'], 'answer_start': [515]}`,highlighted:`Context: <span class="hljs-string">&#x27;Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot;Venite Ad Me Omnes&quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive (and in a direct line that connects through 3 statues and the Gold Dome), is a simple, modern stone statue of Mary.&#x27;</span>
Question: <span class="hljs-string">&#x27;To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France?&#x27;</span>
Answer: {<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Saint Bernadette Soubirous&#x27;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">515</span>]}`}}),gt=new S({props:{code:'raw_datasets["train"].filter(lambda x: len(x["answers"]["text"]) != 1)',highlighted:'raw_datasets[<span class="hljs-string">&quot;train&quot;</span>].<span class="hljs-built_in">filter</span>(<span class="hljs-keyword">lambda</span> x: <span class="hljs-built_in">len</span>(x[<span class="hljs-string">&quot;answers&quot;</span>][<span class="hljs-string">&quot;text&quot;</span>]) != <span class="hljs-number">1</span>)'}}),Te=new S({props:{code:`Dataset({
    features: ['id', 'title', 'context', 'question', 'answers'],
    num_rows: 0
})`,highlighted:`Dataset({
    features: [<span class="hljs-string">&#x27;id&#x27;</span>, <span class="hljs-string">&#x27;title&#x27;</span>, <span class="hljs-string">&#x27;context&#x27;</span>, <span class="hljs-string">&#x27;question&#x27;</span>, <span class="hljs-string">&#x27;answers&#x27;</span>],
    num_rows: <span class="hljs-number">0</span>
})`}}),Ot=new S({props:{code:`print(raw_datasets["validation"][0]["answers"])
print(raw_datasets["validation"][2]["answers"])`,highlighted:`<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;answers&quot;</span>])
<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">2</span>][<span class="hljs-string">&quot;answers&quot;</span>])`}}),zt=new S({props:{code:`{'text': ['Denver Broncos', 'Denver Broncos', 'Denver Broncos'], 'answer_start': [177, 177, 177]}
{'text': ['Santa Clara, California', "Levi's Stadium", "Levi's Stadium in the San Francisco Bay Area at Santa Clara, California."], 'answer_start': [403, 355, 355]}`,highlighted:`{<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">177</span>, <span class="hljs-number">177</span>, <span class="hljs-number">177</span>]}
{<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Santa Clara, California&#x27;</span>, <span class="hljs-string">&quot;Levi&#x27;s Stadium&quot;</span>, <span class="hljs-string">&quot;Levi&#x27;s Stadium in the San Francisco Bay Area at Santa Clara, California.&quot;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">403</span>, <span class="hljs-number">355</span>, <span class="hljs-number">355</span>]}`}}),It=new S({props:{code:`print(raw_datasets["validation"][2]["context"])
print(raw_datasets["validation"][2]["question"])`,highlighted:`<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">2</span>][<span class="hljs-string">&quot;context&quot;</span>])
<span class="hljs-built_in">print</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>][<span class="hljs-number">2</span>][<span class="hljs-string">&quot;question&quot;</span>])`}}),Re=new S({props:{code:`'Super Bowl 50 was an American football game to determine the champion of the National Football League (NFL) for the 2015 season. The American Football Conference (AFC) champion Denver Broncos defeated the National Football Conference (NFC) champion Carolina Panthers 24\u201310 to earn their third Super Bowl title. The game was played on February 7, 2016, at Levi\\'s Stadium in the San Francisco Bay Area at Santa Clara, California. As this was the 50th Super Bowl, the league emphasized the "golden anniversary" with various gold-themed initiatives, as well as temporarily suspending the tradition of naming each Super Bowl game with Roman numerals (under which the game would have been known as "Super Bowl L"), so that the logo could prominently feature the Arabic numerals 50.'
'Where did Super Bowl 50 take place?'`,highlighted:`<span class="hljs-string">&#x27;Super Bowl 50 was an American football game to determine the champion of the National Football League (NFL) for the 2015 season. The American Football Conference (AFC) champion Denver Broncos defeated the National Football Conference (NFC) champion Carolina Panthers 24\u201310 to earn their third Super Bowl title. The game was played on February 7, 2016, at Levi\\&#x27;s Stadium in the San Francisco Bay Area at Santa Clara, California. As this was the 50th Super Bowl, the league emphasized the &quot;golden anniversary&quot; with various gold-themed initiatives, as well as temporarily suspending the tradition of naming each Super Bowl game with Roman numerals (under which the game would have been known as &quot;Super Bowl L&quot;), so that the logo could prominently feature the Arabic numerals 50.&#x27;</span>
<span class="hljs-string">&#x27;Where did Super Bowl 50 take place?&#x27;</span>`}}),Ft=new at({}),Ie=new kh({props:{id:"qgaM0weJHpA"}}),Ae=new S({props:{code:`from transformers import AutoTokenizer

model_checkpoint = "bert-base-cased"
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

model_checkpoint = <span class="hljs-string">&quot;bert-base-cased&quot;</span>
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)`}}),Wt=new S({props:{code:"tokenizer.is_fast",highlighted:"tokenizer.is_fast"}}),Je=new S({props:{code:"True",highlighted:'<span class="hljs-literal">True</span>'}}),Ht=new S({props:{code:"[CLS] question [SEP] context [SEP]",highlighted:'<span class="hljs-selector-attr">[CLS]</span> question <span class="hljs-selector-attr">[SEP]</span> context <span class="hljs-selector-attr">[SEP]</span>'}}),le=new S({props:{code:`context = raw_datasets["train"][0]["context"]
question = raw_datasets["train"][0]["question"]

inputs = tokenizer(question, context)
tokenizer.decode(inputs["input_ids"])`,highlighted:`context = raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;context&quot;</span>]
question = raw_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">0</span>][<span class="hljs-string">&quot;question&quot;</span>]

inputs = tokenizer(question, context)
tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])`}}),Xe=new S({props:{code:`'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Architecturally, '
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
<span class="hljs-string">&#x27;and the Gold Dome ), is a simple, modern stone statue of Mary. [SEP]&#x27;</span>`}}),qs=new S({props:{code:`inputs = tokenizer(
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
    <span class="hljs-built_in">print</span>(tokenizer.decode(ids))`}}),Es=new S({props:{code:`'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Architecturally, the school has a Catholic character. Atop the Main Building\\'s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend " Venite Ad Me Omnes ". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basi [SEP]'
'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend " Venite Ad Me Omnes ". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin [SEP]'
'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 [SEP]'
'[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP]. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 statues and the Gold Dome ), is a simple, modern stone statue of Mary. [SEP]'`,highlighted:`<span class="hljs-string">&#x27;[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot; Venite Ad Me Omnes &quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basi [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot; Venite Ad Me Omnes &quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP] Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grotto, a Marian place of prayer and reflection. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 [SEP]&#x27;</span>
<span class="hljs-string">&#x27;[CLS] To whom did the Virgin Mary allegedly appear in 1858 in Lourdes France? [SEP]. It is a replica of the grotto at Lourdes, France where the Virgin Mary reputedly appeared to Saint Bernadette Soubirous in 1858. At the end of the main drive ( and in a direct line that connects through 3 statues and the Gold Dome ), is a simple, modern stone statue of Mary. [SEP]&#x27;</span>`}}),Ts=new S({props:{code:`inputs = tokenizer(
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
inputs.keys()`}}),As=new S({props:{code:"dict_keys(['input_ids', 'token_type_ids', 'attention_mask', 'offset_mapping', 'overflow_to_sample_mapping'])",highlighted:'dict_keys([<span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;token_type_ids&#x27;</span>, <span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;offset_mapping&#x27;</span>, <span class="hljs-string">&#x27;overflow_to_sample_mapping&#x27;</span>])'}}),no=new S({props:{code:'inputs["overflow_to_sample_mapping"]',highlighted:'inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>]'}}),oo=new S({props:{code:"[0, 0, 0, 0]",highlighted:'[<span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>]'}}),io=new S({props:{code:`inputs = tokenizer(
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
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Here is where each comes from: <span class="hljs-subst">{inputs[<span class="hljs-string">&#x27;overflow_to_sample_mapping&#x27;</span>]}</span>.&quot;</span>)`}}),ro=new S({props:{code:`'The 4 examples gave 19 features.'
'Here is where each comes from: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3].'`,highlighted:`<span class="hljs-string">&#x27;The 4 examples gave 19 features.&#x27;</span>
<span class="hljs-string">&#x27;Here is where each comes from: [0, 0, 0, 0, 1, 1, 1, 1, 2, 2, 2, 2, 3, 3, 3, 3, 3, 3, 3].&#x27;</span>`}}),lo=new S({props:{code:`answers = raw_datasets["train"][2:6]["answers"]
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

start_positions, end_positions`}}),po=new S({props:{code:`([83, 51, 19, 0, 0, 64, 27, 0, 34, 0, 0, 0, 67, 34, 0, 0, 0, 0, 0],
 [85, 53, 21, 0, 0, 70, 33, 0, 40, 0, 0, 0, 68, 35, 0, 0, 0, 0, 0])`,highlighted:`([<span class="hljs-number">83</span>, <span class="hljs-number">51</span>, <span class="hljs-number">19</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">64</span>, <span class="hljs-number">27</span>, <span class="hljs-number">0</span>, <span class="hljs-number">34</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">67</span>, <span class="hljs-number">34</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>],
 [<span class="hljs-number">85</span>, <span class="hljs-number">53</span>, <span class="hljs-number">21</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">70</span>, <span class="hljs-number">33</span>, <span class="hljs-number">0</span>, <span class="hljs-number">40</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">68</span>, <span class="hljs-number">35</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>, <span class="hljs-number">0</span>])`}}),ho=new S({props:{code:`idx = 0
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

<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Theoretical answer: <span class="hljs-subst">{answer}</span>, labels give: <span class="hljs-subst">{labeled_answer}</span>&quot;</span>)`}}),co=new S({props:{code:"'Theoretical answer: the Main Building, labels give: the Main Building'",highlighted:'<span class="hljs-string">&#x27;Theoretical answer: the Main Building, labels give: the Main Building&#x27;</span>'}}),uo=new S({props:{code:`idx = 4
sample_idx = inputs["overflow_to_sample_mapping"][idx]
answer = answers[sample_idx]["text"][0]

decoded_example = tokenizer.decode(inputs["input_ids"][idx])
print(f"Theoretical answer: {answer}, decoded example: {decoded_example}")`,highlighted:`idx = <span class="hljs-number">4</span>
sample_idx = inputs[<span class="hljs-string">&quot;overflow_to_sample_mapping&quot;</span>][idx]
answer = answers[sample_idx][<span class="hljs-string">&quot;text&quot;</span>][<span class="hljs-number">0</span>]

decoded_example = tokenizer.decode(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>][idx])
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Theoretical answer: <span class="hljs-subst">{answer}</span>, decoded example: <span class="hljs-subst">{decoded_example}</span>&quot;</span>)`}}),fo=new S({props:{code:`'Theoretical answer: a Marian place of prayer and reflection, decoded example: [CLS] What is the Grotto at Notre Dame? [SEP] Architecturally, the school has a Catholic character. Atop the Main Building\\'s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend " Venite Ad Me Omnes ". Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grot [SEP]'`,highlighted:'<span class="hljs-string">&#x27;Theoretical answer: a Marian place of prayer and reflection, decoded example: [CLS] What is the Grotto at Notre Dame? [SEP] Architecturally, the school has a Catholic character. Atop the Main Building\\&#x27;s gold dome is a golden statue of the Virgin Mary. Immediately in front of the Main Building and facing it, is a copper statue of Christ with arms upraised with the legend &quot; Venite Ad Me Omnes &quot;. Next to the Main Building is the Basilica of the Sacred Heart. Immediately behind the basilica is the Grot [SEP]&#x27;</span>'}}),an=new yh({props:{$$slots:{default:[Jm]},$$scope:{ctx:W}}}),mo=new S({props:{code:`max_length = 384
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
    <span class="hljs-keyword">return</span> inputs`}}),_o=new S({props:{code:`train_dataset = raw_datasets["train"].map(
    preprocess_training_examples,
    batched=True,
    remove_columns=raw_datasets["train"].column_names,
)
len(raw_datasets["train"]), len(train_dataset)`,highlighted:`train_dataset = raw_datasets[<span class="hljs-string">&quot;train&quot;</span>].<span class="hljs-built_in">map</span>(
    preprocess_training_examples,
    batched=<span class="hljs-literal">True</span>,
    remove_columns=raw_datasets[<span class="hljs-string">&quot;train&quot;</span>].column_names,
)
<span class="hljs-built_in">len</span>(raw_datasets[<span class="hljs-string">&quot;train&quot;</span>]), <span class="hljs-built_in">len</span>(train_dataset)`}}),wo=new S({props:{code:"(87599, 88729)",highlighted:'(<span class="hljs-number">87599</span>, <span class="hljs-number">88729</span>)'}}),go=new at({}),bo=new S({props:{code:`def preprocess_validation_examples(examples):
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
    <span class="hljs-keyword">return</span> inputs`}}),vo=new S({props:{code:`validation_dataset = raw_datasets["validation"].map(
    preprocess_validation_examples,
    batched=True,
    remove_columns=raw_datasets["validation"].column_names,
)
len(raw_datasets["validation"]), len(validation_dataset)`,highlighted:`validation_dataset = raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>].<span class="hljs-built_in">map</span>(
    preprocess_validation_examples,
    batched=<span class="hljs-literal">True</span>,
    remove_columns=raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>].column_names,
)
<span class="hljs-built_in">len</span>(raw_datasets[<span class="hljs-string">&quot;validation&quot;</span>]), <span class="hljs-built_in">len</span>(validation_dataset)`}}),xo=new S({props:{code:"(10570, 10822)",highlighted:'(<span class="hljs-number">10570</span>, <span class="hljs-number">10822</span>)'}});const nu=[Km,Xm],Uo=[];function ou(e,l){return e[0]==="pt"?0:1}Rt=ou(W),Gt=Uo[Rt]=nu[Rt](W),yo=new at({});const iu=[e_,Zm],Yo=[];function ru(e,l){return e[0]==="pt"?0:1}Ut=ru(W),Yt=Yo[Ut]=iu[Ut](W),jo=new S({props:{code:`small_eval_set = raw_datasets["validation"].select(range(100))
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
)`}}),qo=new S({props:{code:"tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)",highlighted:"tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)"}});const lu=[s_,t_],Jo=[];function pu(e,l){return e[0]==="pt"?0:1}Jt=pu(W),Xt=Jo[Jt]=lu[Jt](W),Eo=new S({props:{code:`import collections

example_to_features = collections.defaultdict(list)
for idx, feature in enumerate(eval_set):
    example_to_features[feature["example_id"]].append(idx)`,highlighted:`<span class="hljs-keyword">import</span> collections

example_to_features = collections.defaultdict(<span class="hljs-built_in">list</span>)
<span class="hljs-keyword">for</span> idx, feature <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(eval_set):
    example_to_features[feature[<span class="hljs-string">&quot;example_id&quot;</span>]].append(idx)`}}),Ao=new S({props:{code:`import numpy as np

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
    predicted_answers.append({<span class="hljs-string">&quot;id&quot;</span>: example_id, <span class="hljs-string">&quot;prediction_text&quot;</span>: best_answer[<span class="hljs-string">&quot;text&quot;</span>]})`}}),Do=new S({props:{code:`from datasets import load_metric

metric = load_metric("squad")`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_metric

metric = load_metric(<span class="hljs-string">&quot;squad&quot;</span>)`}}),Po=new S({props:{code:`theoretical_answers = [
    {"id": ex["id"], "answers": ex["answers"]} for ex in small_eval_set
]`,highlighted:`theoretical_answers = [
    {<span class="hljs-string">&quot;id&quot;</span>: ex[<span class="hljs-string">&quot;id&quot;</span>], <span class="hljs-string">&quot;answers&quot;</span>: ex[<span class="hljs-string">&quot;answers&quot;</span>]} <span class="hljs-keyword">for</span> ex <span class="hljs-keyword">in</span> small_eval_set
]`}}),Co=new S({props:{code:`print(predicted_answers[0])
print(theoretical_answers[0])`,highlighted:`<span class="hljs-built_in">print</span>(predicted_answers[<span class="hljs-number">0</span>])
<span class="hljs-built_in">print</span>(theoretical_answers[<span class="hljs-number">0</span>])`}}),So=new S({props:{code:`{'id': '56be4db0acb8001400a502ec', 'prediction_text': 'Denver Broncos'}
{'id': '56be4db0acb8001400a502ec', 'answers': {'text': ['Denver Broncos', 'Denver Broncos', 'Denver Broncos'], 'answer_start': [177, 177, 177]}}`,highlighted:`{<span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;56be4db0acb8001400a502ec&#x27;</span>, <span class="hljs-string">&#x27;prediction_text&#x27;</span>: <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>}
{<span class="hljs-string">&#x27;id&#x27;</span>: <span class="hljs-string">&#x27;56be4db0acb8001400a502ec&#x27;</span>, <span class="hljs-string">&#x27;answers&#x27;</span>: {<span class="hljs-string">&#x27;text&#x27;</span>: [<span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>, <span class="hljs-string">&#x27;Denver Broncos&#x27;</span>], <span class="hljs-string">&#x27;answer_start&#x27;</span>: [<span class="hljs-number">177</span>, <span class="hljs-number">177</span>, <span class="hljs-number">177</span>]}}`}}),Oo=new S({props:{code:"metric.compute(predictions=predicted_answers, references=theoretical_answers)",highlighted:"metric.compute(predictions=predicted_answers, references=theoretical_answers)"}}),zo=new S({props:{code:"{'exact_match': 83.0, 'f1': 88.25}",highlighted:'{<span class="hljs-string">&#x27;exact_match&#x27;</span>: <span class="hljs-number">83.0</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">88.25</span>}'}});function hu(e,l){return e[0]==="pt"?n_:a_}let Zp=hu(W),ya=Zp(W);Fo=new S({props:{code:`from tqdm.auto import tqdm


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
    <span class="hljs-keyword">return</span> metric.compute(predictions=predicted_answers, references=theoretical_answers)`}}),No=new S({props:{code:"compute_metrics(start_logits, end_logits, eval_set, small_eval_set)",highlighted:"compute_metrics(start_logits, end_logits, eval_set, small_eval_set)"}}),Mo=new S({props:{code:"{'exact_match': 83.0, 'f1': 88.25}",highlighted:'{<span class="hljs-string">&#x27;exact_match&#x27;</span>: <span class="hljs-number">83.0</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">88.25</span>}'}}),Bo=new at({});const du=[i_,o_],Xo=[];function cu(e,l){return e[0]==="pt"?0:1}Kt=cu(W),Zt=Xo[Kt]=du[Kt](W),Lo=new S({props:{code:`from huggingface_hub import notebook_login

notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Wo=new S({props:{code:"huggingface-cli login",highlighted:"huggingface-cli login"}});const uu=[l_,r_],Ko=[];function fu(e,l){return e[0]==="pt"?0:1}es=fu(W),ts=Ko[es]=uu[es](W);const mu=[h_,p_],Zo=[];function _u(e,l){return e[0]==="pt"?0:1}ss=_u(W),as=Zo[ss]=mu[ss](W);const wu=[u_,c_],ei=[];function gu(e,l){return e[0]==="pt"?0:1}ns=gu(W),os=ei[ns]=wu[ns](W),Ho=new S({props:{code:"{'exact_match': 81.18259224219489, 'f1': 88.67381321905516}",highlighted:'{<span class="hljs-string">&#x27;exact_match&#x27;</span>: <span class="hljs-number">81.18259224219489</span>, <span class="hljs-string">&#x27;f1&#x27;</span>: <span class="hljs-number">88.67381321905516</span>}'}});let ie=W[0]==="pt"&&zm();un=new yh({props:{$$slots:{default:[f_]},$$scope:{ctx:W}}});let re=W[0]==="pt"&&Im();return Qo=new at({}),Vo=new S({props:{code:`from transformers import pipeline

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
question_answerer(question=question, context=context)`}}),Ro=new S({props:{code:`{'score': 0.9979003071784973,
 'start': 78,
 'end': 105,
 'answer': 'Jax, PyTorch and TensorFlow'}`,highlighted:`{<span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9979003071784973</span>,
 <span class="hljs-string">&#x27;start&#x27;</span>: <span class="hljs-number">78</span>,
 <span class="hljs-string">&#x27;end&#x27;</span>: <span class="hljs-number">105</span>,
 <span class="hljs-string">&#x27;answer&#x27;</span>: <span class="hljs-string">&#x27;Jax, PyTorch and TensorFlow&#x27;</span>}`}}),{c(){h=i("meta"),g=d(),j(f.$$.fragment),x=d(),P=i("h1"),b=i("a"),$=i("span"),j(y.$$.fragment),m=d(),O=i("span"),k=a("Question answering"),v=d(),F.c(),z=d(),D=i("p"),V=a("Time to look at question answering! This task comes in many flavors, but the one we\u2019ll focus on in this section is called "),B=i("em"),R=a("extractive"),M=a(" question answering. This involves posing questions about a document and identifying the answers as "),L=i("em"),Q=a("spans of text"),K=a(" in the document itself."),G=d(),j(I.$$.fragment),U=d(),Z=i("p"),te=a("We will fine-tune a BERT model on the "),Y=i("a"),oe=a("SQuAD dataset"),fe=a(", which consists of questions posed by crowdworkers on a set of Wikipedia articles. This will give us a model able to compute predictions like this one:"),Pe=d(),ae=i("iframe"),We=d(),H=i("iframe"),kt=d(),ye=i("p"),ot=a("This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it and double-check the predictions "),Ce=i("a"),it=a("here"),$t=a("."),pe=d(),j(me.$$.fragment),_e=d(),we=i("h2"),He=i("a"),Qe=i("span"),j(rt.$$.fragment),lt=d(),Ls=i("span"),Ws=a("Preparing the data"),ka=d(),Se=i("p"),$a=a("The dataset that is used the most as an academic benchmark for extractive question answering is "),ke=i("a"),ja=a("SQuAD"),ne=a(", so that\u2019s the one we\u2019ll use here. There is also a harder "),jt=i("a"),Hs=a("SQuAD v2"),yn=a(" benchmark, which includes questions that don\u2019t have an answer. As long as your own dataset contains a column for contexts, a column for questions, and a column for answers, you should be able to adapt the steps below."),qa=d(),$e=i("h3"),pt=i("a"),Qs=i("span"),j(Ve.$$.fragment),kn=d(),Vs=i("span"),Rs=a("The SQuAD dataset"),Ea=d(),ht=i("p"),Gs=a("As usual, we can download and cache the dataset in just one step thanks to "),Us=i("code"),$n=a("load_dataset()"),Ta=a(":"),dt=d(),j(ct.$$.fragment),je=d(),is=i("p"),Ys=a("We can then have a look at this object to learn more about the SQuAD dataset:"),Aa=d(),j(qt.$$.fragment),rs=d(),j(Et.$$.fragment),Da=d(),he=i("p"),Tt=a("It looks like we have everything we need with the "),ls=i("code"),ge=a("context"),jn=a(", "),At=i("code"),qn=a("question"),En=a(", and "),Dt=i("code"),Tn=a("answers"),An=a(" fields, so let\u2019s print those for the first element of our training set:"),ps=d(),j(Pt.$$.fragment),Pa=d(),j(ut.$$.fragment),ft=d(),ee=i("p"),Ct=a("The "),hs=i("code"),ds=a("context"),Dn=a(" and "),cs=i("code"),St=a("question"),Ca=a(" fields are very straightforward to use. The "),be=i("code"),Pn=a("answers"),Js=a(" field is a bit trickier as it comports a dictionary with two fields that are both lists. This is the format that will be expected by the "),Xs=i("code"),Cn=a("squad"),Ks=a(" metric during evaluation; if you are using your own data, you don\u2019t necessarily need to worry about putting the answers in the same format. The "),Zs=i("code"),Sn=a("text"),Sa=a(" field is rather obvious, and the "),qe=i("code"),mt=a("answer_start"),ea=a(" field contains the starting character index of each answer in the context."),_t=d(),wt=i("p"),ta=a("During training, there is only one possible answer. We can double-check this by using the "),sa=i("code"),Oa=a("Dataset.filter()"),us=a(" method:"),za=d(),j(gt.$$.fragment),Ee=d(),j(Te.$$.fragment),Ia=d(),bt=i("p"),On=a("For evaluation, however, there are several possible answers for each sample, which may be the same or different:"),Fa=d(),j(Ot.$$.fragment),ve=d(),j(zt.$$.fragment),fs=d(),ms=i("p"),zn=a("We won\u2019t dive into the evaluation script as it will all be wrapped up by a \u{1F917} Datasets metric for us, but the short version is that some of the questions have several possible answers, and this script will compare a predicted answer to all the acceptable answers and take the best score. If we take a look at the sample at index 2, for instance:"),_s=d(),j(It.$$.fragment),Na=d(),j(Re.$$.fragment),Ma=d(),ws=i("p"),In=a("we can see that the answer can indeed be one of the three possibilities we saw before."),Oe=d(),Ge=i("h3"),ze=i("a"),aa=i("span"),j(Ft.$$.fragment),na=d(),oa=i("span"),Fn=a("Processing the training data"),ia=d(),j(Ie.$$.fragment),Ba=d(),Nt=i("p"),Mt=a("Let\u2019s start with preprocessing the training data. The hard part will be to generate labels for the question\u2019s answer, which will be the start and end positions of the tokens corresponding to the answer inside the context."),ra=d(),Ue=i("p"),Nn=a("But let\u2019s not get ahead of ourselves. First, we need to convert the text in the input into IDs the model can make sense of, using a tokenizer:"),la=d(),j(Ae.$$.fragment),pa=d(),J=i("p"),Mn=a("As mentioned previously, we\u2019ll be fine-tuning a BERT model, but you can use any other model type as long as it has a fast tokenizer implemented. You can see all the architectures that come with a fast version in "),Ye=i("a"),Bn=a("this big table"),Ln=a(", and to check that the "),Bt=i("code"),Wn=a("tokenizer"),Hn=a(" object you\u2019re using is indeed backed by \u{1F917} Tokenizers you can look at its "),Lt=i("code"),Qn=a("is_fast"),Vn=a(" attribute:"),gs=d(),j(Wt.$$.fragment),La=d(),j(Je.$$.fragment),Wa=d(),bs=i("p"),ha=a("We can pass to our tokenizer the question and the context together, and it will properly insert the special tokens to form a sentence like this:"),Ha=d(),j(Ht.$$.fragment),vs=d(),xs=i("p"),Rn=a("Let\u2019s double-check:"),da=d(),j(le.$$.fragment),Qa=d(),j(Xe.$$.fragment),Va=d(),ys=i("p"),Qt=a("The labels will then be the index of the tokens starting and ending the answer, and the model will be tasked to predicted one start and end logit per token in the input, with the theoretical labels being as follow:"),ks=d(),Ke=i("div"),Vt=i("img"),u=d(),N=i("img"),Yn=d(),Ze=i("p"),ni=a("In this case the context is not too long, but some of the examples in the dataset have very long contexts that will exceed the maximum length we set (which is 384 in this case). As we saw in "),et=i("a"),oi=a("Chapter 6"),ii=a(" when we explored the internals of the "),$s=i("code"),ri=a("question-answering"),li=a(" pipeline, we will deal with long contexts by creating several training features from one sample of our dataset, with a sliding window between them."),Jn=d(),de=i("p"),pi=a("To see how this works using the current example, we can limit the length to 100 and use a sliding window of 50 tokens. As a reminder, we use:"),Xn=d(),De=i("ul"),ca=i("li"),Ra=i("code"),Ga=a("max_length"),hi=a(" to set the maximum length (here 100)"),xe=d(),ua=i("li"),Ua=i("code"),di=a('truncation="only_second"'),ci=a(" to truncate the context (which is in the second position) when the question with its context is too long"),ui=d(),tt=i("li"),Ya=i("code"),fi=a("stride"),vt=a(" to set the number of overlapping tokens between two successive chunks (here 50)"),mi=d(),fa=i("li"),Ja=i("code"),_i=a("return_overflowing_tokens=True"),js=a(" to let the tokenizer know we want the overflowing tokens"),Kn=d(),j(qs.$$.fragment),ma=d(),j(Es.$$.fragment),Zn=d(),st=i("p"),wi=a("As we can see, our example has been in split into four inputs, each of them containing the question and some part of the context. Note that the answer to the question (\u201CBernadette Soubirous\u201D) only appears in the third and last inputs, so by dealing with long contexts in this way we will create some training examples where the answer is not included in the context. For those examples, the labels will be "),xt=i("code"),Xa=a("start_position = end_position = 0"),gi=a(" (so we predict the "),Fe=i("code"),bi=a("[CLS]"),vi=a(" token). We will also set those labels in the unfortunate case where the answer has been truncated so that we only have the start (or end) of it. For the examples where the answer is fully in the context, the labels will be the index of the token where the answer starts and the index of the token where the answer ends."),eo=d(),ce=i("p"),xi=a("The dataset provides us with the start character of the answer in the context, and by adding the length of the answer, we can find the end character in the context. To map those to token indices, we will need to use the offset mappings we studied in "),_a=i("a"),yi=a("Chapter 6"),ki=a(". We can have our tokenizer return these by passing along "),se=i("code"),$i=a("return_offsets_mapping=True"),ji=a(":"),to=d(),j(Ts.$$.fragment),so=d(),j(As.$$.fragment),ao=d(),ue=i("p"),qi=a("As we can see, we get back the usual input IDs, token type IDs, and attention mask, as well as the offset mapping we required and an extra key, "),Ka=i("code"),Ei=a("overflow_to_sample_mapping"),$h=a(". The corresponding value will be of use to us when we tokenize several texts at the same time (which we should do to benefit from the fact that our tokenizer is backed by Rust). Since one sample can give several features, it maps each feature to the example it originated from. Because here we only tokenized one example, we get a list of "),qr=i("code"),jh=a("0"),qh=a("s:"),vl=d(),j(no.$$.fragment),xl=d(),j(oo.$$.fragment),yl=d(),Ti=i("p"),Eh=a("But if we tokenize more examples, this will become more useful:"),kl=d(),j(io.$$.fragment),$l=d(),j(ro.$$.fragment),jl=d(),Ai=i("p"),Th=a("As we can see, the first three examples (at indices 2, 3, and 4 in the training set) each gave four features and the last example (at index 5 in the training set) gave 7 features."),ql=d(),Di=i("p"),Ah=a("This information will be useful to map each feature we get to its corresponding label. As mentioned earlier, those labels are:"),El=d(),Za=i("ul"),Pi=i("li"),Er=i("code"),Dh=a("(0, 0)"),Ph=a(" if the answer is not in the corresponding span of the context"),Ch=d(),Ds=i("li"),Tr=i("code"),Sh=a("(start_position, end_position)"),Oh=a(" if the answer is in the corresponding span of the context, with "),Ar=i("code"),zh=a("start_position"),Ih=a(" being the index of the token (in the input IDs) at the start of the answer and "),Dr=i("code"),Fh=a("end_position"),Nh=a(" being the index of the token (in the input IDs) where the answer ends"),Tl=d(),Ps=i("p"),Mh=a("To determine which of these is the case and, if relevant, the positions of the tokens, we first find the indices that start and end the context in the input IDs. We could use the token type IDs to do this, but since those do not necessarily exist for all models (DistilBERT does not require them, for instance), we\u2019ll instead use the "),Pr=i("code"),Bh=a("sequence_ids()"),Lh=a(" method of the "),Cr=i("code"),Wh=a("BatchEncoding"),Hh=a(" our tokenizer returns."),Al=d(),en=i("p"),Qh=a("Once we have those token indices, we look at the corresponding offsets, which are tuples of two integers representing the span of characters inside the original context. We can thus detect if the chunk of the context in this feature starts after the answer or ends before the answer begins (in which case the label is "),Sr=i("code"),Vh=a("(0, 0)"),Rh=a("). If that\u2019s not the case, we loop to find the first and last token of the answer:"),Dl=d(),j(lo.$$.fragment),Pl=d(),j(po.$$.fragment),Cl=d(),tn=i("p"),Gh=a("Let\u2019s take a look at a few results to verify that our approach is correct. For the first feature we find "),Or=i("code"),Uh=a("(83, 85)"),Yh=a(" as labels, so let\u2019s compare the theoretical answer with the decoded span of tokens from 83 to 85 (inclusive):"),Sl=d(),j(ho.$$.fragment),Ol=d(),j(co.$$.fragment),zl=d(),sn=i("p"),Jh=a("So that\u2019s a match! Now let\u2019s check index 4, where we set the labels to "),zr=i("code"),Xh=a("(0, 0)"),Kh=a(", which means the answer is not in the context chunk of that feature:"),Il=d(),j(uo.$$.fragment),Fl=d(),j(fo.$$.fragment),Nl=d(),Ci=i("p"),Zh=a("Indeed, we don\u2019t see the answer inside the context."),Ml=d(),j(an.$$.fragment),Bl=d(),Si=i("p"),ed=a("Now that we have seen step by step how to preprocess our training data, we can group it in a function we will apply on the whole training dataset. We\u2019ll pad every feature to the maximum length we set, as most of the contexts will be long (and the corresponding samples will be split into several features), so there is no real benefit to applying dynamic padding here:"),Ll=d(),j(mo.$$.fragment),Wl=d(),Oi=i("p"),td=a("Note that we defined two constants to determine the maximum length used as well as the length of the sliding window, and that we added a tiny bit of cleanup before tokenizing: some of the questions in the SQuAD dataset have extra spaces at the beginning and the end that don\u2019t add anything (and take up space when being tokenized if you use a model like RoBERTa), so we removed those extra spaces."),Hl=d(),Cs=i("p"),sd=a("To apply this function to the whole training set, we use the "),Ir=i("code"),ad=a("Dataset.map()"),nd=a(" method with the "),Fr=i("code"),od=a("batched=True"),id=a(" flag. It\u2019s necessary here as we are changing the length of the dataset (since one example can give several training features):"),Ql=d(),j(_o.$$.fragment),Vl=d(),j(wo.$$.fragment),Rl=d(),zi=i("p"),rd=a("As we can see, the preprocessing added roughly 1,000 features. Our training set is now ready to be used \u2014 let\u2019s dig into the preprocessing of the validation set!"),Gl=d(),wa=i("h3"),nn=i("a"),Nr=i("span"),j(go.$$.fragment),ld=d(),Mr=i("span"),pd=a("Processing the validation data"),Ul=d(),Ii=i("p"),hd=a("Preprocessing the validation data will be slightly easier as we don\u2019t need to generate labels (unless we want to compute a validation loss, but that number won\u2019t really help us understand how good the model is). The real joy will be to interpret the predictions of the model into spans of the original context. For this, we will just need to store both the offset mappings and some way to match each created feature to the original example it comes from. Since there is an ID column in the original dataset, we\u2019ll use that ID."),Yl=d(),Ss=i("p"),dd=a("The only thing we\u2019ll add here is a tiny bit of cleanup of the offset mappings. They will contain offsets for the question and the context, but once we\u2019re in the post-processing stage we won\u2019t have any way to know which part of the input IDs corresponded to the context and which part was the question (the "),Br=i("code"),cd=a("sequence_ids()"),ud=a(" method we used is available for the output of the tokenizer only). So, we\u2019ll set the offsets corresponding to the question to "),Lr=i("code"),fd=a("None"),md=a(":"),Jl=d(),j(bo.$$.fragment),Xl=d(),Fi=i("p"),_d=a("We can apply this function on the whole validation dataset like before:"),Kl=d(),j(vo.$$.fragment),Zl=d(),j(xo.$$.fragment),ep=d(),Ni=i("p"),wd=a("In this case we\u2019ve only added a couple of hundred samples, so it appears the contexts in the validation dataset are a bit shorter."),tp=d(),Mi=i("p"),gd=a("Now that we have preprocessed all the data, we can get to the training."),sp=d(),Gt.c(),Bi=d(),ga=i("h3"),on=i("a"),Wr=i("span"),j(yo.$$.fragment),bd=d(),Hr=i("span"),vd=a("Post-processing"),ap=d(),Yt.c(),Li=d(),rn=i("p"),xd=a("The model will output logits for the start and end positions of the answer in the input IDs, as we saw during our exploration of the "),ko=i("a"),Qr=i("code"),yd=a("question-answering"),kd=a(" pipeline"),$d=a(". The post-processing step will be similar to what we did there, so here\u2019s a quick reminder of the actions we took:"),np=d(),yt=i("ul"),Vr=i("li"),jd=a("We masked the start and end logits corresponding to tokens outside of the context."),qd=d(),Rr=i("li"),Ed=a("We then converted the start and end logits into probabilities using a softmax."),Td=d(),$o=i("li"),Ad=a("We attributed a score to each "),Gr=i("code"),Dd=a("(start_token, end_token)"),Pd=a(" pair by taking the product of the corresponding two probabilities."),Cd=d(),ba=i("li"),Sd=a("We looked for the pair with the maximum score that yielded a valid answer (e.g., a "),Ur=i("code"),Od=a("start_token"),zd=a(" lower than "),Yr=i("code"),Id=a("end_token"),Fd=a(")."),op=d(),Ne=i("p"),Nd=a("Here we will change this process slightly because we don\u2019t need to compute actual scores (just the predicted answer). This means we can skip the softmax step. To go faster, we also won\u2019t score all the possible "),Jr=i("code"),Md=a("(start_token, end_token)"),Bd=a(" pairs, but only the ones corresponding to the highest "),Xr=i("code"),Ld=a("n_best"),Wd=a(" logits (with "),Kr=i("code"),Hd=a("n_best=20"),Qd=a("). Since we will skip the softmax, those scores will be logit scores, and will be obtained by taking the sum of the start and end logits (instead of the product, because of the rule "),ip=new Wm,rp=a(")."),lp=d(),ln=i("p"),Vd=a("To demonstrate all of this, we will need some kind of predictions. Since we have not trained our model yet, we are going to use the default model for the QA pipeline to generate some predictions on a small part of the validation set. We can use the same processing function as before; because it relies on the global constant "),Zr=i("code"),Rd=a("tokenizer"),Gd=a(", we just have to change that object to the tokenizer of the model we want to use temporarily:"),pp=d(),j(jo.$$.fragment),hp=d(),Wi=i("p"),Ud=a("Now that the preprocessing is done, we change the tokenizer back to the one we originally picked:"),dp=d(),j(qo.$$.fragment),cp=d(),pn=i("p"),Yd=a("We then remove the columns of our "),el=i("code"),Jd=a("eval_set"),Xd=a(" that are not expected by the model, build a batch with all of that small validation set, and pass it through the model. If a GPU is available, we use it to go faster:"),up=d(),Xt.c(),Hi=d(),Me=i("p"),Kd=a("Now, we need to find the predicted answer for each example in our "),tl=i("code"),Zd=a("small_eval_set"),ec=a(". One example may have been split into several features in "),sl=i("code"),tc=a("eval_set"),sc=a(", so the first step is to map each example in "),al=i("code"),ac=a("small_eval_set"),nc=a(" to the corresponding features in "),nl=i("code"),oc=a("eval_set"),ic=a(":"),fp=d(),j(Eo.$$.fragment),mp=d(),hn=i("p"),rc=a("With this in hand, we can really get to work by looping through all the examples and, for each example, through all the associated features. As we said before, we\u2019ll look at the logit scores for the "),ol=i("code"),lc=a("n_best"),pc=a(" start logits and end logits, excluding positions that give:"),_p=d(),Os=i("ul"),il=i("li"),hc=a("An answer that wouldn\u2019t be inside the context"),dc=d(),rl=i("li"),cc=a("An answer with negative length"),uc=d(),To=i("li"),fc=a("An answer that is too long (we limit the possibilities at "),ll=i("code"),mc=a("max_answer_length=30"),_c=a(")"),wp=d(),Qi=i("p"),wc=a("Once we have all the scored possible answers for one example, we just pick the one with the best logit score:"),gp=d(),j(Ao.$$.fragment),bp=d(),Vi=i("p"),gc=a("The final format of the predicted answers is the one that will be expected by the metric we will use. As usual, we can load it with the help of the \u{1F917} Datasets library:"),vp=d(),j(Do.$$.fragment),xp=d(),Ri=i("p"),bc=a("This metric expects the predicted answers in the format we saw above (a list of dictionaries with one key for the ID of the example and one key for the predicted text) and the theoretical answers in the format below (a list of dictionaries with one key for the ID of the example and one key for the possible answers):"),yp=d(),j(Po.$$.fragment),kp=d(),Gi=i("p"),vc=a("We can now check that we get sensible results by looking at the first element of both lists:"),$p=d(),j(Co.$$.fragment),jp=d(),j(So.$$.fragment),qp=d(),Ui=i("p"),xc=a("Not too bad! Now let\u2019s have a look at the score the metric gives us:"),Ep=d(),j(Oo.$$.fragment),Tp=d(),j(zo.$$.fragment),Ap=d(),dn=i("p"),yc=a("Again, that\u2019s rather good considering that according to "),Io=i("a"),kc=a("its paper"),$c=a(" DistilBERT fine-tuned on SQuAD obtains 79.1 and 86.9 for those scores on the whole dataset."),Dp=d(),ya.c(),Yi=d(),j(Fo.$$.fragment),Pp=d(),Ji=i("p"),jc=a("We can check it works on our predictions:"),Cp=d(),j(No.$$.fragment),Sp=d(),j(Mo.$$.fragment),Op=d(),Xi=i("p"),qc=a("Looking good! Now let\u2019s use this to fine-tune our model."),zp=d(),va=i("h3"),cn=i("a"),pl=i("span"),j(Bo.$$.fragment),Ec=d(),hl=i("span"),Tc=a("Fine-tuning the model"),Ip=d(),Zt.c(),Ki=d(),Zi=i("p"),Ac=a("As usual, we get a warning that some weights are not used (the ones from the pretraining head) and some others are initialized randomly (the ones for the question answering head). You should be used to this by now, but that means this model is not ready to be used just yet and needs fine-tuning \u2014 good thing we\u2019re about to do that!"),Fp=d(),er=i("p"),Dc=a("To be able to push our model to the Hub, we\u2019ll need to log in to Hugging Face. If you\u2019re running this code in a notebook, you can do so with the following utility function, which displays a widget where you can enter your login credentials:"),Np=d(),j(Lo.$$.fragment),Mp=d(),tr=i("p"),Pc=a("If you aren\u2019t working in a notebook, just type the following line in your terminal:"),Bp=d(),j(Wo.$$.fragment),Lp=d(),ts.c(),sr=d(),Be=i("p"),Cc=a("By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be in "),dl=i("code"),Sc=a('"sgugger/bert-finetuned-squad"'),Oc=a(". We can override this by passing a "),cl=i("code"),zc=a("hub_model_id"),Ic=a("; for instance, to push the model to the "),ul=i("code"),Fc=a("huggingface_course"),Nc=a(" organization we used "),fl=i("code"),Mc=a('hub_model_id="huggingface_course/bert-finetuned-squad"'),Bc=a(" (which is the model we linked to at the beginning of this section)."),Wp=d(),as.c(),ar=d(),nr=i("p"),Lc=a("Note that while the training happens, each time the model is saved (here, every epoch) it is uploaded to the Hub in the background. This way, you will be able to to resume your training on another machine if necessary. The whole training takes a while (a little over an hour on a Titan RTX), so you can grab a coffee or reread some of the parts of the course that you\u2019ve found more challenging while it proceeds. Also note that as soon as the first epoch is finished, you will see some weights uploaded to the Hub and you can start playing with your model on its page."),Hp=d(),os.c(),or=d(),j(Ho.$$.fragment),Qp=d(),ir=i("p"),Wc=a("Great! As a comparison, the baseline scores reported in the BERT article for this model are 80.8 and 88.5, so we\u2019re right where we should be."),Vp=d(),ie&&ie.c(),rr=d(),lr=i("p"),Hc=a("At this stage, you can use the inference widget on the Model Hub to test the model and share it with your friends, family, and favorite pets. You have successfully fine-tuned a model on a question answering task \u2014 congratulations!"),Rp=d(),j(un.$$.fragment),Gp=d(),re&&re.c(),pr=d(),xa=i("h2"),fn=i("a"),ml=i("span"),j(Qo.$$.fragment),Qc=d(),_l=i("span"),Vc=a("Using the fine-tuned model"),Up=d(),mn=i("p"),Rc=a("We\u2019ve already shown you how you can use the model we fine-tuned on the Model Hub with the inference widget. To use it locally in a "),wl=i("code"),Gc=a("pipeline"),Uc=a(", you just have to specify the model identifier:"),Yp=d(),j(Vo.$$.fragment),Jp=d(),j(Ro.$$.fragment),Xp=d(),hr=i("p"),Yc=a("Great! Our model is working as well as the default one for this pipeline!"),this.h()},l(e){const l=Hm('[data-svelte="svelte-1phssyn"]',document.head);h=r(l,"META",{name:!0,content:!0}),l.forEach(t),g=c(e),q(f.$$.fragment,e),x=c(e),P=r(e,"H1",{class:!0});var ti=p(P);b=r(ti,"A",{id:!0,class:!0,href:!0});var dr=p(b);$=r(dr,"SPAN",{});var gl=p($);q(y.$$.fragment,gl),gl.forEach(t),dr.forEach(t),m=c(ti),O=r(ti,"SPAN",{});var bl=p(O);k=n(bl,"Question answering"),bl.forEach(t),ti.forEach(t),v=c(e),F.l(e),z=c(e),D=r(e,"P",{});var zs=p(D);V=n(zs,"Time to look at question answering! This task comes in many flavors, but the one we\u2019ll focus on in this section is called "),B=r(zs,"EM",{});var cr=p(B);R=n(cr,"extractive"),cr.forEach(t),M=n(zs," question answering. This involves posing questions about a document and identifying the answers as "),L=r(zs,"EM",{});var ur=p(L);Q=n(ur,"spans of text"),ur.forEach(t),K=n(zs," in the document itself."),zs.forEach(t),G=c(e),q(I.$$.fragment,e),U=c(e),Z=r(e,"P",{});var _n=p(Z);te=n(_n,"We will fine-tune a BERT model on the "),Y=r(_n,"A",{href:!0,rel:!0});var fr=p(Y);oe=n(fr,"SQuAD dataset"),fr.forEach(t),fe=n(_n,", which consists of questions posed by crowdworkers on a set of Wikipedia articles. This will give us a model able to compute predictions like this one:"),_n.forEach(t),Pe=c(e),ae=r(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),p(ae).forEach(t),We=c(e),H=r(e,"IFRAME",{src:!0,frameborder:!0,height:!0,title:!0,class:!0,allow:!0,sandbox:!0}),p(H).forEach(t),kt=c(e),ye=r(e,"P",{});var wn=p(ye);ot=n(wn,"This is actually showcasing the model that was trained and uploaded to the Hub using the code shown in this section. You can find it and double-check the predictions "),Ce=r(wn,"A",{href:!0,rel:!0});var mr=p(Ce);it=n(mr,"here"),mr.forEach(t),$t=n(wn,"."),wn.forEach(t),pe=c(e),q(me.$$.fragment,e),_e=c(e),we=r(e,"H2",{class:!0});var si=p(we);He=r(si,"A",{id:!0,class:!0,href:!0});var bu=p(He);Qe=r(bu,"SPAN",{});var vu=p(Qe);q(rt.$$.fragment,vu),vu.forEach(t),bu.forEach(t),lt=c(si),Ls=r(si,"SPAN",{});var xu=p(Ls);Ws=n(xu,"Preparing the data"),xu.forEach(t),si.forEach(t),ka=c(e),Se=r(e,"P",{});var _r=p(Se);$a=n(_r,"The dataset that is used the most as an academic benchmark for extractive question answering is "),ke=r(_r,"A",{href:!0,rel:!0});var yu=p(ke);ja=n(yu,"SQuAD"),yu.forEach(t),ne=n(_r,", so that\u2019s the one we\u2019ll use here. There is also a harder "),jt=r(_r,"A",{href:!0,rel:!0});var ku=p(jt);Hs=n(ku,"SQuAD v2"),ku.forEach(t),yn=n(_r," benchmark, which includes questions that don\u2019t have an answer. As long as your own dataset contains a column for contexts, a column for questions, and a column for answers, you should be able to adapt the steps below."),_r.forEach(t),qa=c(e),$e=r(e,"H3",{class:!0});var eh=p($e);pt=r(eh,"A",{id:!0,class:!0,href:!0});var $u=p(pt);Qs=r($u,"SPAN",{});var ju=p(Qs);q(Ve.$$.fragment,ju),ju.forEach(t),$u.forEach(t),kn=c(eh),Vs=r(eh,"SPAN",{});var qu=p(Vs);Rs=n(qu,"The SQuAD dataset"),qu.forEach(t),eh.forEach(t),Ea=c(e),ht=r(e,"P",{});var th=p(ht);Gs=n(th,"As usual, we can download and cache the dataset in just one step thanks to "),Us=r(th,"CODE",{});var Eu=p(Us);$n=n(Eu,"load_dataset()"),Eu.forEach(t),Ta=n(th,":"),th.forEach(t),dt=c(e),q(ct.$$.fragment,e),je=c(e),is=r(e,"P",{});var Tu=p(is);Ys=n(Tu,"We can then have a look at this object to learn more about the SQuAD dataset:"),Tu.forEach(t),Aa=c(e),q(qt.$$.fragment,e),rs=c(e),q(Et.$$.fragment,e),Da=c(e),he=r(e,"P",{});var gn=p(he);Tt=n(gn,"It looks like we have everything we need with the "),ls=r(gn,"CODE",{});var Au=p(ls);ge=n(Au,"context"),Au.forEach(t),jn=n(gn,", "),At=r(gn,"CODE",{});var Du=p(At);qn=n(Du,"question"),Du.forEach(t),En=n(gn,", and "),Dt=r(gn,"CODE",{});var Pu=p(Dt);Tn=n(Pu,"answers"),Pu.forEach(t),An=n(gn," fields, so let\u2019s print those for the first element of our training set:"),gn.forEach(t),ps=c(e),q(Pt.$$.fragment,e),Pa=c(e),q(ut.$$.fragment,e),ft=c(e),ee=r(e,"P",{});var Le=p(ee);Ct=n(Le,"The "),hs=r(Le,"CODE",{});var Cu=p(hs);ds=n(Cu,"context"),Cu.forEach(t),Dn=n(Le," and "),cs=r(Le,"CODE",{});var Su=p(cs);St=n(Su,"question"),Su.forEach(t),Ca=n(Le," fields are very straightforward to use. The "),be=r(Le,"CODE",{});var Ou=p(be);Pn=n(Ou,"answers"),Ou.forEach(t),Js=n(Le," field is a bit trickier as it comports a dictionary with two fields that are both lists. This is the format that will be expected by the "),Xs=r(Le,"CODE",{});var zu=p(Xs);Cn=n(zu,"squad"),zu.forEach(t),Ks=n(Le," metric during evaluation; if you are using your own data, you don\u2019t necessarily need to worry about putting the answers in the same format. The "),Zs=r(Le,"CODE",{});var Iu=p(Zs);Sn=n(Iu,"text"),Iu.forEach(t),Sa=n(Le," field is rather obvious, and the "),qe=r(Le,"CODE",{});var Fu=p(qe);mt=n(Fu,"answer_start"),Fu.forEach(t),ea=n(Le," field contains the starting character index of each answer in the context."),Le.forEach(t),_t=c(e),wt=r(e,"P",{});var sh=p(wt);ta=n(sh,"During training, there is only one possible answer. We can double-check this by using the "),sa=r(sh,"CODE",{});var Nu=p(sa);Oa=n(Nu,"Dataset.filter()"),Nu.forEach(t),us=n(sh," method:"),sh.forEach(t),za=c(e),q(gt.$$.fragment,e),Ee=c(e),q(Te.$$.fragment,e),Ia=c(e),bt=r(e,"P",{});var Mu=p(bt);On=n(Mu,"For evaluation, however, there are several possible answers for each sample, which may be the same or different:"),Mu.forEach(t),Fa=c(e),q(Ot.$$.fragment,e),ve=c(e),q(zt.$$.fragment,e),fs=c(e),ms=r(e,"P",{});var Bu=p(ms);zn=n(Bu,"We won\u2019t dive into the evaluation script as it will all be wrapped up by a \u{1F917} Datasets metric for us, but the short version is that some of the questions have several possible answers, and this script will compare a predicted answer to all the acceptable answers and take the best score. If we take a look at the sample at index 2, for instance:"),Bu.forEach(t),_s=c(e),q(It.$$.fragment,e),Na=c(e),q(Re.$$.fragment,e),Ma=c(e),ws=r(e,"P",{});var Lu=p(ws);In=n(Lu,"we can see that the answer can indeed be one of the three possibilities we saw before."),Lu.forEach(t),Oe=c(e),Ge=r(e,"H3",{class:!0});var ah=p(Ge);ze=r(ah,"A",{id:!0,class:!0,href:!0});var Wu=p(ze);aa=r(Wu,"SPAN",{});var Hu=p(aa);q(Ft.$$.fragment,Hu),Hu.forEach(t),Wu.forEach(t),na=c(ah),oa=r(ah,"SPAN",{});var Qu=p(oa);Fn=n(Qu,"Processing the training data"),Qu.forEach(t),ah.forEach(t),ia=c(e),q(Ie.$$.fragment,e),Ba=c(e),Nt=r(e,"P",{});var Vu=p(Nt);Mt=n(Vu,"Let\u2019s start with preprocessing the training data. The hard part will be to generate labels for the question\u2019s answer, which will be the start and end positions of the tokens corresponding to the answer inside the context."),Vu.forEach(t),ra=c(e),Ue=r(e,"P",{});var Ru=p(Ue);Nn=n(Ru,"But let\u2019s not get ahead of ourselves. First, we need to convert the text in the input into IDs the model can make sense of, using a tokenizer:"),Ru.forEach(t),la=c(e),q(Ae.$$.fragment,e),pa=c(e),J=r(e,"P",{});var bn=p(J);Mn=n(bn,"As mentioned previously, we\u2019ll be fine-tuning a BERT model, but you can use any other model type as long as it has a fast tokenizer implemented. You can see all the architectures that come with a fast version in "),Ye=r(bn,"A",{href:!0,rel:!0});var Gu=p(Ye);Bn=n(Gu,"this big table"),Gu.forEach(t),Ln=n(bn,", and to check that the "),Bt=r(bn,"CODE",{});var Uu=p(Bt);Wn=n(Uu,"tokenizer"),Uu.forEach(t),Hn=n(bn," object you\u2019re using is indeed backed by \u{1F917} Tokenizers you can look at its "),Lt=r(bn,"CODE",{});var Yu=p(Lt);Qn=n(Yu,"is_fast"),Yu.forEach(t),Vn=n(bn," attribute:"),bn.forEach(t),gs=c(e),q(Wt.$$.fragment,e),La=c(e),q(Je.$$.fragment,e),Wa=c(e),bs=r(e,"P",{});var Ju=p(bs);ha=n(Ju,"We can pass to our tokenizer the question and the context together, and it will properly insert the special tokens to form a sentence like this:"),Ju.forEach(t),Ha=c(e),q(Ht.$$.fragment,e),vs=c(e),xs=r(e,"P",{});var Xu=p(xs);Rn=n(Xu,"Let\u2019s double-check:"),Xu.forEach(t),da=c(e),q(le.$$.fragment,e),Qa=c(e),q(Xe.$$.fragment,e),Va=c(e),ys=r(e,"P",{});var Ku=p(ys);Qt=n(Ku,"The labels will then be the index of the tokens starting and ending the answer, and the model will be tasked to predicted one start and end logit per token in the input, with the theoretical labels being as follow:"),Ku.forEach(t),ks=c(e),Ke=r(e,"DIV",{class:!0});var nh=p(Ke);Vt=r(nh,"IMG",{class:!0,src:!0,alt:!0}),u=c(nh),N=r(nh,"IMG",{class:!0,src:!0,alt:!0}),nh.forEach(t),Yn=c(e),Ze=r(e,"P",{});var wr=p(Ze);ni=n(wr,"In this case the context is not too long, but some of the examples in the dataset have very long contexts that will exceed the maximum length we set (which is 384 in this case). As we saw in "),et=r(wr,"A",{href:!0});var Zu=p(et);oi=n(Zu,"Chapter 6"),Zu.forEach(t),ii=n(wr," when we explored the internals of the "),$s=r(wr,"CODE",{});var ef=p($s);ri=n(ef,"question-answering"),ef.forEach(t),li=n(wr," pipeline, we will deal with long contexts by creating several training features from one sample of our dataset, with a sliding window between them."),wr.forEach(t),Jn=c(e),de=r(e,"P",{});var tf=p(de);pi=n(tf,"To see how this works using the current example, we can limit the length to 100 and use a sliding window of 50 tokens. As a reminder, we use:"),tf.forEach(t),Xn=c(e),De=r(e,"UL",{});var vn=p(De);ca=r(vn,"LI",{});var Jc=p(ca);Ra=r(Jc,"CODE",{});var sf=p(Ra);Ga=n(sf,"max_length"),sf.forEach(t),hi=n(Jc," to set the maximum length (here 100)"),Jc.forEach(t),xe=c(vn),ua=r(vn,"LI",{});var Xc=p(ua);Ua=r(Xc,"CODE",{});var af=p(Ua);di=n(af,'truncation="only_second"'),af.forEach(t),ci=n(Xc," to truncate the context (which is in the second position) when the question with its context is too long"),Xc.forEach(t),ui=c(vn),tt=r(vn,"LI",{});var Kc=p(tt);Ya=r(Kc,"CODE",{});var nf=p(Ya);fi=n(nf,"stride"),nf.forEach(t),vt=n(Kc," to set the number of overlapping tokens between two successive chunks (here 50)"),Kc.forEach(t),mi=c(vn),fa=r(vn,"LI",{});var Zc=p(fa);Ja=r(Zc,"CODE",{});var of=p(Ja);_i=n(of,"return_overflowing_tokens=True"),of.forEach(t),js=n(Zc," to let the tokenizer know we want the overflowing tokens"),Zc.forEach(t),vn.forEach(t),Kn=c(e),q(qs.$$.fragment,e),ma=c(e),q(Es.$$.fragment,e),Zn=c(e),st=r(e,"P",{});var gr=p(st);wi=n(gr,"As we can see, our example has been in split into four inputs, each of them containing the question and some part of the context. Note that the answer to the question (\u201CBernadette Soubirous\u201D) only appears in the third and last inputs, so by dealing with long contexts in this way we will create some training examples where the answer is not included in the context. For those examples, the labels will be "),xt=r(gr,"CODE",{});var rf=p(xt);Xa=n(rf,"start_position = end_position = 0"),rf.forEach(t),gi=n(gr," (so we predict the "),Fe=r(gr,"CODE",{});var lf=p(Fe);bi=n(lf,"[CLS]"),lf.forEach(t),vi=n(gr," token). We will also set those labels in the unfortunate case where the answer has been truncated so that we only have the start (or end) of it. For the examples where the answer is fully in the context, the labels will be the index of the token where the answer starts and the index of the token where the answer ends."),gr.forEach(t),eo=c(e),ce=r(e,"P",{});var br=p(ce);xi=n(br,"The dataset provides us with the start character of the answer in the context, and by adding the length of the answer, we can find the end character in the context. To map those to token indices, we will need to use the offset mappings we studied in "),_a=r(br,"A",{href:!0});var pf=p(_a);yi=n(pf,"Chapter 6"),pf.forEach(t),ki=n(br,". We can have our tokenizer return these by passing along "),se=r(br,"CODE",{});var hf=p(se);$i=n(hf,"return_offsets_mapping=True"),hf.forEach(t),ji=n(br,":"),br.forEach(t),to=c(e),q(Ts.$$.fragment,e),so=c(e),q(As.$$.fragment,e),ao=c(e),ue=r(e,"P",{});var vr=p(ue);qi=n(vr,"As we can see, we get back the usual input IDs, token type IDs, and attention mask, as well as the offset mapping we required and an extra key, "),Ka=r(vr,"CODE",{});var df=p(Ka);Ei=n(df,"overflow_to_sample_mapping"),df.forEach(t),$h=n(vr,". The corresponding value will be of use to us when we tokenize several texts at the same time (which we should do to benefit from the fact that our tokenizer is backed by Rust). Since one sample can give several features, it maps each feature to the example it originated from. Because here we only tokenized one example, we get a list of "),qr=r(vr,"CODE",{});var cf=p(qr);jh=n(cf,"0"),cf.forEach(t),qh=n(vr,"s:"),vr.forEach(t),vl=c(e),q(no.$$.fragment,e),xl=c(e),q(oo.$$.fragment,e),yl=c(e),Ti=r(e,"P",{});var uf=p(Ti);Eh=n(uf,"But if we tokenize more examples, this will become more useful:"),uf.forEach(t),kl=c(e),q(io.$$.fragment,e),$l=c(e),q(ro.$$.fragment,e),jl=c(e),Ai=r(e,"P",{});var ff=p(Ai);Th=n(ff,"As we can see, the first three examples (at indices 2, 3, and 4 in the training set) each gave four features and the last example (at index 5 in the training set) gave 7 features."),ff.forEach(t),ql=c(e),Di=r(e,"P",{});var mf=p(Di);Ah=n(mf,"This information will be useful to map each feature we get to its corresponding label. As mentioned earlier, those labels are:"),mf.forEach(t),El=c(e),Za=r(e,"UL",{});var oh=p(Za);Pi=r(oh,"LI",{});var eu=p(Pi);Er=r(eu,"CODE",{});var _f=p(Er);Dh=n(_f,"(0, 0)"),_f.forEach(t),Ph=n(eu," if the answer is not in the corresponding span of the context"),eu.forEach(t),Ch=c(oh),Ds=r(oh,"LI",{});var ai=p(Ds);Tr=r(ai,"CODE",{});var wf=p(Tr);Sh=n(wf,"(start_position, end_position)"),wf.forEach(t),Oh=n(ai," if the answer is in the corresponding span of the context, with "),Ar=r(ai,"CODE",{});var gf=p(Ar);zh=n(gf,"start_position"),gf.forEach(t),Ih=n(ai," being the index of the token (in the input IDs) at the start of the answer and "),Dr=r(ai,"CODE",{});var bf=p(Dr);Fh=n(bf,"end_position"),bf.forEach(t),Nh=n(ai," being the index of the token (in the input IDs) where the answer ends"),ai.forEach(t),oh.forEach(t),Tl=c(e),Ps=r(e,"P",{});var xr=p(Ps);Mh=n(xr,"To determine which of these is the case and, if relevant, the positions of the tokens, we first find the indices that start and end the context in the input IDs. We could use the token type IDs to do this, but since those do not necessarily exist for all models (DistilBERT does not require them, for instance), we\u2019ll instead use the "),Pr=r(xr,"CODE",{});var vf=p(Pr);Bh=n(vf,"sequence_ids()"),vf.forEach(t),Lh=n(xr," method of the "),Cr=r(xr,"CODE",{});var xf=p(Cr);Wh=n(xf,"BatchEncoding"),xf.forEach(t),Hh=n(xr," our tokenizer returns."),xr.forEach(t),Al=c(e),en=r(e,"P",{});var ih=p(en);Qh=n(ih,"Once we have those token indices, we look at the corresponding offsets, which are tuples of two integers representing the span of characters inside the original context. We can thus detect if the chunk of the context in this feature starts after the answer or ends before the answer begins (in which case the label is "),Sr=r(ih,"CODE",{});var yf=p(Sr);Vh=n(yf,"(0, 0)"),yf.forEach(t),Rh=n(ih,"). If that\u2019s not the case, we loop to find the first and last token of the answer:"),ih.forEach(t),Dl=c(e),q(lo.$$.fragment,e),Pl=c(e),q(po.$$.fragment,e),Cl=c(e),tn=r(e,"P",{});var rh=p(tn);Gh=n(rh,"Let\u2019s take a look at a few results to verify that our approach is correct. For the first feature we find "),Or=r(rh,"CODE",{});var kf=p(Or);Uh=n(kf,"(83, 85)"),kf.forEach(t),Yh=n(rh," as labels, so let\u2019s compare the theoretical answer with the decoded span of tokens from 83 to 85 (inclusive):"),rh.forEach(t),Sl=c(e),q(ho.$$.fragment,e),Ol=c(e),q(co.$$.fragment,e),zl=c(e),sn=r(e,"P",{});var lh=p(sn);Jh=n(lh,"So that\u2019s a match! Now let\u2019s check index 4, where we set the labels to "),zr=r(lh,"CODE",{});var $f=p(zr);Xh=n($f,"(0, 0)"),$f.forEach(t),Kh=n(lh,", which means the answer is not in the context chunk of that feature:"),lh.forEach(t),Il=c(e),q(uo.$$.fragment,e),Fl=c(e),q(fo.$$.fragment,e),Nl=c(e),Ci=r(e,"P",{});var jf=p(Ci);Zh=n(jf,"Indeed, we don\u2019t see the answer inside the context."),jf.forEach(t),Ml=c(e),q(an.$$.fragment,e),Bl=c(e),Si=r(e,"P",{});var qf=p(Si);ed=n(qf,"Now that we have seen step by step how to preprocess our training data, we can group it in a function we will apply on the whole training dataset. We\u2019ll pad every feature to the maximum length we set, as most of the contexts will be long (and the corresponding samples will be split into several features), so there is no real benefit to applying dynamic padding here:"),qf.forEach(t),Ll=c(e),q(mo.$$.fragment,e),Wl=c(e),Oi=r(e,"P",{});var Ef=p(Oi);td=n(Ef,"Note that we defined two constants to determine the maximum length used as well as the length of the sliding window, and that we added a tiny bit of cleanup before tokenizing: some of the questions in the SQuAD dataset have extra spaces at the beginning and the end that don\u2019t add anything (and take up space when being tokenized if you use a model like RoBERTa), so we removed those extra spaces."),Ef.forEach(t),Hl=c(e),Cs=r(e,"P",{});var yr=p(Cs);sd=n(yr,"To apply this function to the whole training set, we use the "),Ir=r(yr,"CODE",{});var Tf=p(Ir);ad=n(Tf,"Dataset.map()"),Tf.forEach(t),nd=n(yr," method with the "),Fr=r(yr,"CODE",{});var Af=p(Fr);od=n(Af,"batched=True"),Af.forEach(t),id=n(yr," flag. It\u2019s necessary here as we are changing the length of the dataset (since one example can give several training features):"),yr.forEach(t),Ql=c(e),q(_o.$$.fragment,e),Vl=c(e),q(wo.$$.fragment,e),Rl=c(e),zi=r(e,"P",{});var Df=p(zi);rd=n(Df,"As we can see, the preprocessing added roughly 1,000 features. Our training set is now ready to be used \u2014 let\u2019s dig into the preprocessing of the validation set!"),Df.forEach(t),Gl=c(e),wa=r(e,"H3",{class:!0});var ph=p(wa);nn=r(ph,"A",{id:!0,class:!0,href:!0});var Pf=p(nn);Nr=r(Pf,"SPAN",{});var Cf=p(Nr);q(go.$$.fragment,Cf),Cf.forEach(t),Pf.forEach(t),ld=c(ph),Mr=r(ph,"SPAN",{});var Sf=p(Mr);pd=n(Sf,"Processing the validation data"),Sf.forEach(t),ph.forEach(t),Ul=c(e),Ii=r(e,"P",{});var Of=p(Ii);hd=n(Of,"Preprocessing the validation data will be slightly easier as we don\u2019t need to generate labels (unless we want to compute a validation loss, but that number won\u2019t really help us understand how good the model is). The real joy will be to interpret the predictions of the model into spans of the original context. For this, we will just need to store both the offset mappings and some way to match each created feature to the original example it comes from. Since there is an ID column in the original dataset, we\u2019ll use that ID."),Of.forEach(t),Yl=c(e),Ss=r(e,"P",{});var kr=p(Ss);dd=n(kr,"The only thing we\u2019ll add here is a tiny bit of cleanup of the offset mappings. They will contain offsets for the question and the context, but once we\u2019re in the post-processing stage we won\u2019t have any way to know which part of the input IDs corresponded to the context and which part was the question (the "),Br=r(kr,"CODE",{});var zf=p(Br);cd=n(zf,"sequence_ids()"),zf.forEach(t),ud=n(kr," method we used is available for the output of the tokenizer only). So, we\u2019ll set the offsets corresponding to the question to "),Lr=r(kr,"CODE",{});var If=p(Lr);fd=n(If,"None"),If.forEach(t),md=n(kr,":"),kr.forEach(t),Jl=c(e),q(bo.$$.fragment,e),Xl=c(e),Fi=r(e,"P",{});var Ff=p(Fi);_d=n(Ff,"We can apply this function on the whole validation dataset like before:"),Ff.forEach(t),Kl=c(e),q(vo.$$.fragment,e),Zl=c(e),q(xo.$$.fragment,e),ep=c(e),Ni=r(e,"P",{});var Nf=p(Ni);wd=n(Nf,"In this case we\u2019ve only added a couple of hundred samples, so it appears the contexts in the validation dataset are a bit shorter."),Nf.forEach(t),tp=c(e),Mi=r(e,"P",{});var Mf=p(Mi);gd=n(Mf,"Now that we have preprocessed all the data, we can get to the training."),Mf.forEach(t),sp=c(e),Gt.l(e),Bi=c(e),ga=r(e,"H3",{class:!0});var hh=p(ga);on=r(hh,"A",{id:!0,class:!0,href:!0});var Bf=p(on);Wr=r(Bf,"SPAN",{});var Lf=p(Wr);q(yo.$$.fragment,Lf),Lf.forEach(t),Bf.forEach(t),bd=c(hh),Hr=r(hh,"SPAN",{});var Wf=p(Hr);vd=n(Wf,"Post-processing"),Wf.forEach(t),hh.forEach(t),ap=c(e),Yt.l(e),Li=c(e),rn=r(e,"P",{});var dh=p(rn);xd=n(dh,"The model will output logits for the start and end positions of the answer in the input IDs, as we saw during our exploration of the "),ko=r(dh,"A",{href:!0});var tu=p(ko);Qr=r(tu,"CODE",{});var Hf=p(Qr);yd=n(Hf,"question-answering"),Hf.forEach(t),kd=n(tu," pipeline"),tu.forEach(t),$d=n(dh,". The post-processing step will be similar to what we did there, so here\u2019s a quick reminder of the actions we took:"),dh.forEach(t),np=c(e),yt=r(e,"UL",{});var xn=p(yt);Vr=r(xn,"LI",{});var Qf=p(Vr);jd=n(Qf,"We masked the start and end logits corresponding to tokens outside of the context."),Qf.forEach(t),qd=c(xn),Rr=r(xn,"LI",{});var Vf=p(Rr);Ed=n(Vf,"We then converted the start and end logits into probabilities using a softmax."),Vf.forEach(t),Td=c(xn),$o=r(xn,"LI",{});var ch=p($o);Ad=n(ch,"We attributed a score to each "),Gr=r(ch,"CODE",{});var Rf=p(Gr);Dd=n(Rf,"(start_token, end_token)"),Rf.forEach(t),Pd=n(ch," pair by taking the product of the corresponding two probabilities."),ch.forEach(t),Cd=c(xn),ba=r(xn,"LI",{});var $r=p(ba);Sd=n($r,"We looked for the pair with the maximum score that yielded a valid answer (e.g., a "),Ur=r($r,"CODE",{});var Gf=p(Ur);Od=n(Gf,"start_token"),Gf.forEach(t),zd=n($r," lower than "),Yr=r($r,"CODE",{});var Uf=p(Yr);Id=n(Uf,"end_token"),Uf.forEach(t),Fd=n($r,")."),$r.forEach(t),xn.forEach(t),op=c(e),Ne=r(e,"P",{});var Is=p(Ne);Nd=n(Is,"Here we will change this process slightly because we don\u2019t need to compute actual scores (just the predicted answer). This means we can skip the softmax step. To go faster, we also won\u2019t score all the possible "),Jr=r(Is,"CODE",{});var Yf=p(Jr);Md=n(Yf,"(start_token, end_token)"),Yf.forEach(t),Bd=n(Is," pairs, but only the ones corresponding to the highest "),Xr=r(Is,"CODE",{});var Jf=p(Xr);Ld=n(Jf,"n_best"),Jf.forEach(t),Wd=n(Is," logits (with "),Kr=r(Is,"CODE",{});var Xf=p(Kr);Hd=n(Xf,"n_best=20"),Xf.forEach(t),Qd=n(Is,"). Since we will skip the softmax, those scores will be logit scores, and will be obtained by taking the sum of the start and end logits (instead of the product, because of the rule "),ip=Qm(Is),rp=n(Is,")."),Is.forEach(t),lp=c(e),ln=r(e,"P",{});var uh=p(ln);Vd=n(uh,"To demonstrate all of this, we will need some kind of predictions. Since we have not trained our model yet, we are going to use the default model for the QA pipeline to generate some predictions on a small part of the validation set. We can use the same processing function as before; because it relies on the global constant "),Zr=r(uh,"CODE",{});var Kf=p(Zr);Rd=n(Kf,"tokenizer"),Kf.forEach(t),Gd=n(uh,", we just have to change that object to the tokenizer of the model we want to use temporarily:"),uh.forEach(t),pp=c(e),q(jo.$$.fragment,e),hp=c(e),Wi=r(e,"P",{});var Zf=p(Wi);Ud=n(Zf,"Now that the preprocessing is done, we change the tokenizer back to the one we originally picked:"),Zf.forEach(t),dp=c(e),q(qo.$$.fragment,e),cp=c(e),pn=r(e,"P",{});var fh=p(pn);Yd=n(fh,"We then remove the columns of our "),el=r(fh,"CODE",{});var em=p(el);Jd=n(em,"eval_set"),em.forEach(t),Xd=n(fh," that are not expected by the model, build a batch with all of that small validation set, and pass it through the model. If a GPU is available, we use it to go faster:"),fh.forEach(t),up=c(e),Xt.l(e),Hi=c(e),Me=r(e,"P",{});var Fs=p(Me);Kd=n(Fs,"Now, we need to find the predicted answer for each example in our "),tl=r(Fs,"CODE",{});var tm=p(tl);Zd=n(tm,"small_eval_set"),tm.forEach(t),ec=n(Fs,". One example may have been split into several features in "),sl=r(Fs,"CODE",{});var sm=p(sl);tc=n(sm,"eval_set"),sm.forEach(t),sc=n(Fs,", so the first step is to map each example in "),al=r(Fs,"CODE",{});var am=p(al);ac=n(am,"small_eval_set"),am.forEach(t),nc=n(Fs," to the corresponding features in "),nl=r(Fs,"CODE",{});var nm=p(nl);oc=n(nm,"eval_set"),nm.forEach(t),ic=n(Fs,":"),Fs.forEach(t),fp=c(e),q(Eo.$$.fragment,e),mp=c(e),hn=r(e,"P",{});var mh=p(hn);rc=n(mh,"With this in hand, we can really get to work by looping through all the examples and, for each example, through all the associated features. As we said before, we\u2019ll look at the logit scores for the "),ol=r(mh,"CODE",{});var om=p(ol);lc=n(om,"n_best"),om.forEach(t),pc=n(mh," start logits and end logits, excluding positions that give:"),mh.forEach(t),_p=c(e),Os=r(e,"UL",{});var jr=p(Os);il=r(jr,"LI",{});var im=p(il);hc=n(im,"An answer that wouldn\u2019t be inside the context"),im.forEach(t),dc=c(jr),rl=r(jr,"LI",{});var rm=p(rl);cc=n(rm,"An answer with negative length"),rm.forEach(t),uc=c(jr),To=r(jr,"LI",{});var _h=p(To);fc=n(_h,"An answer that is too long (we limit the possibilities at "),ll=r(_h,"CODE",{});var lm=p(ll);mc=n(lm,"max_answer_length=30"),lm.forEach(t),_c=n(_h,")"),_h.forEach(t),jr.forEach(t),wp=c(e),Qi=r(e,"P",{});var pm=p(Qi);wc=n(pm,"Once we have all the scored possible answers for one example, we just pick the one with the best logit score:"),pm.forEach(t),gp=c(e),q(Ao.$$.fragment,e),bp=c(e),Vi=r(e,"P",{});var hm=p(Vi);gc=n(hm,"The final format of the predicted answers is the one that will be expected by the metric we will use. As usual, we can load it with the help of the \u{1F917} Datasets library:"),hm.forEach(t),vp=c(e),q(Do.$$.fragment,e),xp=c(e),Ri=r(e,"P",{});var dm=p(Ri);bc=n(dm,"This metric expects the predicted answers in the format we saw above (a list of dictionaries with one key for the ID of the example and one key for the predicted text) and the theoretical answers in the format below (a list of dictionaries with one key for the ID of the example and one key for the possible answers):"),dm.forEach(t),yp=c(e),q(Po.$$.fragment,e),kp=c(e),Gi=r(e,"P",{});var cm=p(Gi);vc=n(cm,"We can now check that we get sensible results by looking at the first element of both lists:"),cm.forEach(t),$p=c(e),q(Co.$$.fragment,e),jp=c(e),q(So.$$.fragment,e),qp=c(e),Ui=r(e,"P",{});var um=p(Ui);xc=n(um,"Not too bad! Now let\u2019s have a look at the score the metric gives us:"),um.forEach(t),Ep=c(e),q(Oo.$$.fragment,e),Tp=c(e),q(zo.$$.fragment,e),Ap=c(e),dn=r(e,"P",{});var wh=p(dn);yc=n(wh,"Again, that\u2019s rather good considering that according to "),Io=r(wh,"A",{href:!0,rel:!0});var fm=p(Io);kc=n(fm,"its paper"),fm.forEach(t),$c=n(wh," DistilBERT fine-tuned on SQuAD obtains 79.1 and 86.9 for those scores on the whole dataset."),wh.forEach(t),Dp=c(e),ya.l(e),Yi=c(e),q(Fo.$$.fragment,e),Pp=c(e),Ji=r(e,"P",{});var mm=p(Ji);jc=n(mm,"We can check it works on our predictions:"),mm.forEach(t),Cp=c(e),q(No.$$.fragment,e),Sp=c(e),q(Mo.$$.fragment,e),Op=c(e),Xi=r(e,"P",{});var _m=p(Xi);qc=n(_m,"Looking good! Now let\u2019s use this to fine-tune our model."),_m.forEach(t),zp=c(e),va=r(e,"H3",{class:!0});var gh=p(va);cn=r(gh,"A",{id:!0,class:!0,href:!0});var wm=p(cn);pl=r(wm,"SPAN",{});var gm=p(pl);q(Bo.$$.fragment,gm),gm.forEach(t),wm.forEach(t),Ec=c(gh),hl=r(gh,"SPAN",{});var bm=p(hl);Tc=n(bm,"Fine-tuning the model"),bm.forEach(t),gh.forEach(t),Ip=c(e),Zt.l(e),Ki=c(e),Zi=r(e,"P",{});var vm=p(Zi);Ac=n(vm,"As usual, we get a warning that some weights are not used (the ones from the pretraining head) and some others are initialized randomly (the ones for the question answering head). You should be used to this by now, but that means this model is not ready to be used just yet and needs fine-tuning \u2014 good thing we\u2019re about to do that!"),vm.forEach(t),Fp=c(e),er=r(e,"P",{});var xm=p(er);Dc=n(xm,"To be able to push our model to the Hub, we\u2019ll need to log in to Hugging Face. If you\u2019re running this code in a notebook, you can do so with the following utility function, which displays a widget where you can enter your login credentials:"),xm.forEach(t),Np=c(e),q(Lo.$$.fragment,e),Mp=c(e),tr=r(e,"P",{});var ym=p(tr);Pc=n(ym,"If you aren\u2019t working in a notebook, just type the following line in your terminal:"),ym.forEach(t),Bp=c(e),q(Wo.$$.fragment,e),Lp=c(e),ts.l(e),sr=c(e),Be=r(e,"P",{});var Ns=p(Be);Cc=n(Ns,"By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be in "),dl=r(Ns,"CODE",{});var km=p(dl);Sc=n(km,'"sgugger/bert-finetuned-squad"'),km.forEach(t),Oc=n(Ns,". We can override this by passing a "),cl=r(Ns,"CODE",{});var $m=p(cl);zc=n($m,"hub_model_id"),$m.forEach(t),Ic=n(Ns,"; for instance, to push the model to the "),ul=r(Ns,"CODE",{});var jm=p(ul);Fc=n(jm,"huggingface_course"),jm.forEach(t),Nc=n(Ns," organization we used "),fl=r(Ns,"CODE",{});var qm=p(fl);Mc=n(qm,'hub_model_id="huggingface_course/bert-finetuned-squad"'),qm.forEach(t),Bc=n(Ns," (which is the model we linked to at the beginning of this section)."),Ns.forEach(t),Wp=c(e),as.l(e),ar=c(e),nr=r(e,"P",{});var Em=p(nr);Lc=n(Em,"Note that while the training happens, each time the model is saved (here, every epoch) it is uploaded to the Hub in the background. This way, you will be able to to resume your training on another machine if necessary. The whole training takes a while (a little over an hour on a Titan RTX), so you can grab a coffee or reread some of the parts of the course that you\u2019ve found more challenging while it proceeds. Also note that as soon as the first epoch is finished, you will see some weights uploaded to the Hub and you can start playing with your model on its page."),Em.forEach(t),Hp=c(e),os.l(e),or=c(e),q(Ho.$$.fragment,e),Qp=c(e),ir=r(e,"P",{});var Tm=p(ir);Wc=n(Tm,"Great! As a comparison, the baseline scores reported in the BERT article for this model are 80.8 and 88.5, so we\u2019re right where we should be."),Tm.forEach(t),Vp=c(e),ie&&ie.l(e),rr=c(e),lr=r(e,"P",{});var Am=p(lr);Hc=n(Am,"At this stage, you can use the inference widget on the Model Hub to test the model and share it with your friends, family, and favorite pets. You have successfully fine-tuned a model on a question answering task \u2014 congratulations!"),Am.forEach(t),Rp=c(e),q(un.$$.fragment,e),Gp=c(e),re&&re.l(e),pr=c(e),xa=r(e,"H2",{class:!0});var bh=p(xa);fn=r(bh,"A",{id:!0,class:!0,href:!0});var Dm=p(fn);ml=r(Dm,"SPAN",{});var Pm=p(ml);q(Qo.$$.fragment,Pm),Pm.forEach(t),Dm.forEach(t),Qc=c(bh),_l=r(bh,"SPAN",{});var Cm=p(_l);Vc=n(Cm,"Using the fine-tuned model"),Cm.forEach(t),bh.forEach(t),Up=c(e),mn=r(e,"P",{});var vh=p(mn);Rc=n(vh,"We\u2019ve already shown you how you can use the model we fine-tuned on the Model Hub with the inference widget. To use it locally in a "),wl=r(vh,"CODE",{});var Sm=p(wl);Gc=n(Sm,"pipeline"),Sm.forEach(t),Uc=n(vh,", you just have to specify the model identifier:"),vh.forEach(t),Yp=c(e),q(Vo.$$.fragment,e),Jp=c(e),q(Ro.$$.fragment,e),Xp=c(e),hr=r(e,"P",{});var Om=p(hr);Yc=n(Om,"Great! Our model is working as well as the default one for this pipeline!"),Om.forEach(t),this.h()},h(){A(h,"name","hf:doc:metadata"),A(h,"content",JSON.stringify(__)),A(b,"id","question-answering"),A(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),A(b,"href","#question-answering"),A(P,"class","relative group"),A(Y,"href","https://rajpurkar.github.io/SQuAD-explorer/"),A(Y,"rel","nofollow"),xh(ae.src,nt="https://hf.space/gradioiframe/course-demos/bert-finetuned-squad/+")||A(ae,"src",nt),A(ae,"frameborder","0"),A(ae,"height","450"),A(ae,"title","Gradio app"),A(ae,"class","block dark:hidden container p-0 flex-grow space-iframe"),A(ae,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),A(ae,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),xh(H.src,X="https://hf.space/gradioiframe/course-demos/bert-finetuned-squad-darkmode/+")||A(H,"src",X),A(H,"frameborder","0"),A(H,"height","450"),A(H,"title","Gradio app"),A(H,"class","hidden dark:block container p-0 flex-grow space-iframe"),A(H,"allow","accelerometer; ambient-light-sensor; autoplay; battery; camera; document-domain; encrypted-media; fullscreen; geolocation; gyroscope; layout-animations; legacy-image-formats; magnetometer; microphone; midi; oversized-images; payment; picture-in-picture; publickey-credentials-get; sync-xhr; usb; vr ; wake-lock; xr-spatial-tracking"),A(H,"sandbox","allow-forms allow-modals allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-downloads"),A(Ce,"href","https://huggingface.co/huggingface-course/bert-finetuned-squad?context=%F0%9F%A4%97+Transformers+is+backed+by+the+three+most+popular+deep+learning+libraries+%E2%80%94+Jax%2C+PyTorch+and+TensorFlow+%E2%80%94+with+a+seamless+integration+between+them.+It%27s+straightforward+to+train+your+models+with+one+before+loading+them+for+inference+with+the+other.&question=Which+deep+learning+libraries+back+%F0%9F%A4%97+Transformers%3F"),A(Ce,"rel","nofollow"),A(He,"id","preparing-the-data"),A(He,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),A(He,"href","#preparing-the-data"),A(we,"class","relative group"),A(ke,"href","https://rajpurkar.github.io/SQuAD-explorer/"),A(ke,"rel","nofollow"),A(jt,"href","https://huggingface.co/datasets/squad_v2"),A(jt,"rel","nofollow"),A(pt,"id","the-squad-dataset"),A(pt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),A(pt,"href","#the-squad-dataset"),A($e,"class","relative group"),A(ze,"id","processing-the-training-data"),A(ze,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),A(ze,"href","#processing-the-training-data"),A(Ge,"class","relative group"),A(Ye,"href","https://huggingface.co/transformers/#supported-frameworks"),A(Ye,"rel","nofollow"),A(Vt,"class","block dark:hidden"),xh(Vt.src,Gn="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/qa_labels.svg")||A(Vt,"src",Gn),A(Vt,"alt","One-hot encoded labels for question answering."),A(N,"class","hidden dark:block"),xh(N.src,Un="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/qa_labels-dark.svg")||A(N,"src",Un),A(N,"alt","One-hot encoded labels for question answering."),A(Ke,"class","flex justify-center"),A(et,"href","/course/chapter6/4"),A(_a,"href","/course/chapter6/4"),A(nn,"id","processing-the-validation-data"),A(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),A(nn,"href","#processing-the-validation-data"),A(wa,"class","relative group"),A(on,"id","postprocessing"),A(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),A(on,"href","#postprocessing"),A(ga,"class","relative group"),A(ko,"href","/course/chapter6/4"),ip.a=rp,A(Io,"href","https://arxiv.org/abs/1910.01108v2"),A(Io,"rel","nofollow"),A(cn,"id","finetuning-the-model"),A(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),A(cn,"href","#finetuning-the-model"),A(va,"class","relative group"),A(fn,"id","using-the-finetuned-model"),A(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),A(fn,"href","#using-the-finetuned-model"),A(xa,"class","relative group")},m(e,l){s(document.head,h),o(e,g,l),E(f,e,l),o(e,x,l),o(e,P,l),s(P,b),s(b,$),E(y,$,null),s(P,m),s(P,O),s(O,k),o(e,v,l),Go[C].m(e,l),o(e,z,l),o(e,D,l),s(D,V),s(D,B),s(B,R),s(D,M),s(D,L),s(L,Q),s(D,K),o(e,G,l),E(I,e,l),o(e,U,l),o(e,Z,l),s(Z,te),s(Z,Y),s(Y,oe),s(Z,fe),o(e,Pe,l),o(e,ae,l),o(e,We,l),o(e,H,l),o(e,kt,l),o(e,ye,l),s(ye,ot),s(ye,Ce),s(Ce,it),s(ye,$t),o(e,pe,l),E(me,e,l),o(e,_e,l),o(e,we,l),s(we,He),s(He,Qe),E(rt,Qe,null),s(we,lt),s(we,Ls),s(Ls,Ws),o(e,ka,l),o(e,Se,l),s(Se,$a),s(Se,ke),s(ke,ja),s(Se,ne),s(Se,jt),s(jt,Hs),s(Se,yn),o(e,qa,l),o(e,$e,l),s($e,pt),s(pt,Qs),E(Ve,Qs,null),s($e,kn),s($e,Vs),s(Vs,Rs),o(e,Ea,l),o(e,ht,l),s(ht,Gs),s(ht,Us),s(Us,$n),s(ht,Ta),o(e,dt,l),E(ct,e,l),o(e,je,l),o(e,is,l),s(is,Ys),o(e,Aa,l),E(qt,e,l),o(e,rs,l),E(Et,e,l),o(e,Da,l),o(e,he,l),s(he,Tt),s(he,ls),s(ls,ge),s(he,jn),s(he,At),s(At,qn),s(he,En),s(he,Dt),s(Dt,Tn),s(he,An),o(e,ps,l),E(Pt,e,l),o(e,Pa,l),E(ut,e,l),o(e,ft,l),o(e,ee,l),s(ee,Ct),s(ee,hs),s(hs,ds),s(ee,Dn),s(ee,cs),s(cs,St),s(ee,Ca),s(ee,be),s(be,Pn),s(ee,Js),s(ee,Xs),s(Xs,Cn),s(ee,Ks),s(ee,Zs),s(Zs,Sn),s(ee,Sa),s(ee,qe),s(qe,mt),s(ee,ea),o(e,_t,l),o(e,wt,l),s(wt,ta),s(wt,sa),s(sa,Oa),s(wt,us),o(e,za,l),E(gt,e,l),o(e,Ee,l),E(Te,e,l),o(e,Ia,l),o(e,bt,l),s(bt,On),o(e,Fa,l),E(Ot,e,l),o(e,ve,l),E(zt,e,l),o(e,fs,l),o(e,ms,l),s(ms,zn),o(e,_s,l),E(It,e,l),o(e,Na,l),E(Re,e,l),o(e,Ma,l),o(e,ws,l),s(ws,In),o(e,Oe,l),o(e,Ge,l),s(Ge,ze),s(ze,aa),E(Ft,aa,null),s(Ge,na),s(Ge,oa),s(oa,Fn),o(e,ia,l),E(Ie,e,l),o(e,Ba,l),o(e,Nt,l),s(Nt,Mt),o(e,ra,l),o(e,Ue,l),s(Ue,Nn),o(e,la,l),E(Ae,e,l),o(e,pa,l),o(e,J,l),s(J,Mn),s(J,Ye),s(Ye,Bn),s(J,Ln),s(J,Bt),s(Bt,Wn),s(J,Hn),s(J,Lt),s(Lt,Qn),s(J,Vn),o(e,gs,l),E(Wt,e,l),o(e,La,l),E(Je,e,l),o(e,Wa,l),o(e,bs,l),s(bs,ha),o(e,Ha,l),E(Ht,e,l),o(e,vs,l),o(e,xs,l),s(xs,Rn),o(e,da,l),E(le,e,l),o(e,Qa,l),E(Xe,e,l),o(e,Va,l),o(e,ys,l),s(ys,Qt),o(e,ks,l),o(e,Ke,l),s(Ke,Vt),s(Ke,u),s(Ke,N),o(e,Yn,l),o(e,Ze,l),s(Ze,ni),s(Ze,et),s(et,oi),s(Ze,ii),s(Ze,$s),s($s,ri),s(Ze,li),o(e,Jn,l),o(e,de,l),s(de,pi),o(e,Xn,l),o(e,De,l),s(De,ca),s(ca,Ra),s(Ra,Ga),s(ca,hi),s(De,xe),s(De,ua),s(ua,Ua),s(Ua,di),s(ua,ci),s(De,ui),s(De,tt),s(tt,Ya),s(Ya,fi),s(tt,vt),s(De,mi),s(De,fa),s(fa,Ja),s(Ja,_i),s(fa,js),o(e,Kn,l),E(qs,e,l),o(e,ma,l),E(Es,e,l),o(e,Zn,l),o(e,st,l),s(st,wi),s(st,xt),s(xt,Xa),s(st,gi),s(st,Fe),s(Fe,bi),s(st,vi),o(e,eo,l),o(e,ce,l),s(ce,xi),s(ce,_a),s(_a,yi),s(ce,ki),s(ce,se),s(se,$i),s(ce,ji),o(e,to,l),E(Ts,e,l),o(e,so,l),E(As,e,l),o(e,ao,l),o(e,ue,l),s(ue,qi),s(ue,Ka),s(Ka,Ei),s(ue,$h),s(ue,qr),s(qr,jh),s(ue,qh),o(e,vl,l),E(no,e,l),o(e,xl,l),E(oo,e,l),o(e,yl,l),o(e,Ti,l),s(Ti,Eh),o(e,kl,l),E(io,e,l),o(e,$l,l),E(ro,e,l),o(e,jl,l),o(e,Ai,l),s(Ai,Th),o(e,ql,l),o(e,Di,l),s(Di,Ah),o(e,El,l),o(e,Za,l),s(Za,Pi),s(Pi,Er),s(Er,Dh),s(Pi,Ph),s(Za,Ch),s(Za,Ds),s(Ds,Tr),s(Tr,Sh),s(Ds,Oh),s(Ds,Ar),s(Ar,zh),s(Ds,Ih),s(Ds,Dr),s(Dr,Fh),s(Ds,Nh),o(e,Tl,l),o(e,Ps,l),s(Ps,Mh),s(Ps,Pr),s(Pr,Bh),s(Ps,Lh),s(Ps,Cr),s(Cr,Wh),s(Ps,Hh),o(e,Al,l),o(e,en,l),s(en,Qh),s(en,Sr),s(Sr,Vh),s(en,Rh),o(e,Dl,l),E(lo,e,l),o(e,Pl,l),E(po,e,l),o(e,Cl,l),o(e,tn,l),s(tn,Gh),s(tn,Or),s(Or,Uh),s(tn,Yh),o(e,Sl,l),E(ho,e,l),o(e,Ol,l),E(co,e,l),o(e,zl,l),o(e,sn,l),s(sn,Jh),s(sn,zr),s(zr,Xh),s(sn,Kh),o(e,Il,l),E(uo,e,l),o(e,Fl,l),E(fo,e,l),o(e,Nl,l),o(e,Ci,l),s(Ci,Zh),o(e,Ml,l),E(an,e,l),o(e,Bl,l),o(e,Si,l),s(Si,ed),o(e,Ll,l),E(mo,e,l),o(e,Wl,l),o(e,Oi,l),s(Oi,td),o(e,Hl,l),o(e,Cs,l),s(Cs,sd),s(Cs,Ir),s(Ir,ad),s(Cs,nd),s(Cs,Fr),s(Fr,od),s(Cs,id),o(e,Ql,l),E(_o,e,l),o(e,Vl,l),E(wo,e,l),o(e,Rl,l),o(e,zi,l),s(zi,rd),o(e,Gl,l),o(e,wa,l),s(wa,nn),s(nn,Nr),E(go,Nr,null),s(wa,ld),s(wa,Mr),s(Mr,pd),o(e,Ul,l),o(e,Ii,l),s(Ii,hd),o(e,Yl,l),o(e,Ss,l),s(Ss,dd),s(Ss,Br),s(Br,cd),s(Ss,ud),s(Ss,Lr),s(Lr,fd),s(Ss,md),o(e,Jl,l),E(bo,e,l),o(e,Xl,l),o(e,Fi,l),s(Fi,_d),o(e,Kl,l),E(vo,e,l),o(e,Zl,l),E(xo,e,l),o(e,ep,l),o(e,Ni,l),s(Ni,wd),o(e,tp,l),o(e,Mi,l),s(Mi,gd),o(e,sp,l),Uo[Rt].m(e,l),o(e,Bi,l),o(e,ga,l),s(ga,on),s(on,Wr),E(yo,Wr,null),s(ga,bd),s(ga,Hr),s(Hr,vd),o(e,ap,l),Yo[Ut].m(e,l),o(e,Li,l),o(e,rn,l),s(rn,xd),s(rn,ko),s(ko,Qr),s(Qr,yd),s(ko,kd),s(rn,$d),o(e,np,l),o(e,yt,l),s(yt,Vr),s(Vr,jd),s(yt,qd),s(yt,Rr),s(Rr,Ed),s(yt,Td),s(yt,$o),s($o,Ad),s($o,Gr),s(Gr,Dd),s($o,Pd),s(yt,Cd),s(yt,ba),s(ba,Sd),s(ba,Ur),s(Ur,Od),s(ba,zd),s(ba,Yr),s(Yr,Id),s(ba,Fd),o(e,op,l),o(e,Ne,l),s(Ne,Nd),s(Ne,Jr),s(Jr,Md),s(Ne,Bd),s(Ne,Xr),s(Xr,Ld),s(Ne,Wd),s(Ne,Kr),s(Kr,Hd),s(Ne,Qd),ip.m(Nm,Ne),s(Ne,rp),o(e,lp,l),o(e,ln,l),s(ln,Vd),s(ln,Zr),s(Zr,Rd),s(ln,Gd),o(e,pp,l),E(jo,e,l),o(e,hp,l),o(e,Wi,l),s(Wi,Ud),o(e,dp,l),E(qo,e,l),o(e,cp,l),o(e,pn,l),s(pn,Yd),s(pn,el),s(el,Jd),s(pn,Xd),o(e,up,l),Jo[Jt].m(e,l),o(e,Hi,l),o(e,Me,l),s(Me,Kd),s(Me,tl),s(tl,Zd),s(Me,ec),s(Me,sl),s(sl,tc),s(Me,sc),s(Me,al),s(al,ac),s(Me,nc),s(Me,nl),s(nl,oc),s(Me,ic),o(e,fp,l),E(Eo,e,l),o(e,mp,l),o(e,hn,l),s(hn,rc),s(hn,ol),s(ol,lc),s(hn,pc),o(e,_p,l),o(e,Os,l),s(Os,il),s(il,hc),s(Os,dc),s(Os,rl),s(rl,cc),s(Os,uc),s(Os,To),s(To,fc),s(To,ll),s(ll,mc),s(To,_c),o(e,wp,l),o(e,Qi,l),s(Qi,wc),o(e,gp,l),E(Ao,e,l),o(e,bp,l),o(e,Vi,l),s(Vi,gc),o(e,vp,l),E(Do,e,l),o(e,xp,l),o(e,Ri,l),s(Ri,bc),o(e,yp,l),E(Po,e,l),o(e,kp,l),o(e,Gi,l),s(Gi,vc),o(e,$p,l),E(Co,e,l),o(e,jp,l),E(So,e,l),o(e,qp,l),o(e,Ui,l),s(Ui,xc),o(e,Ep,l),E(Oo,e,l),o(e,Tp,l),E(zo,e,l),o(e,Ap,l),o(e,dn,l),s(dn,yc),s(dn,Io),s(Io,kc),s(dn,$c),o(e,Dp,l),ya.m(e,l),o(e,Yi,l),E(Fo,e,l),o(e,Pp,l),o(e,Ji,l),s(Ji,jc),o(e,Cp,l),E(No,e,l),o(e,Sp,l),E(Mo,e,l),o(e,Op,l),o(e,Xi,l),s(Xi,qc),o(e,zp,l),o(e,va,l),s(va,cn),s(cn,pl),E(Bo,pl,null),s(va,Ec),s(va,hl),s(hl,Tc),o(e,Ip,l),Xo[Kt].m(e,l),o(e,Ki,l),o(e,Zi,l),s(Zi,Ac),o(e,Fp,l),o(e,er,l),s(er,Dc),o(e,Np,l),E(Lo,e,l),o(e,Mp,l),o(e,tr,l),s(tr,Pc),o(e,Bp,l),E(Wo,e,l),o(e,Lp,l),Ko[es].m(e,l),o(e,sr,l),o(e,Be,l),s(Be,Cc),s(Be,dl),s(dl,Sc),s(Be,Oc),s(Be,cl),s(cl,zc),s(Be,Ic),s(Be,ul),s(ul,Fc),s(Be,Nc),s(Be,fl),s(fl,Mc),s(Be,Bc),o(e,Wp,l),Zo[ss].m(e,l),o(e,ar,l),o(e,nr,l),s(nr,Lc),o(e,Hp,l),ei[ns].m(e,l),o(e,or,l),E(Ho,e,l),o(e,Qp,l),o(e,ir,l),s(ir,Wc),o(e,Vp,l),ie&&ie.m(e,l),o(e,rr,l),o(e,lr,l),s(lr,Hc),o(e,Rp,l),E(un,e,l),o(e,Gp,l),re&&re.m(e,l),o(e,pr,l),o(e,xa,l),s(xa,fn),s(fn,ml),E(Qo,ml,null),s(xa,Qc),s(xa,_l),s(_l,Vc),o(e,Up,l),o(e,mn,l),s(mn,Rc),s(mn,wl),s(wl,Gc),s(mn,Uc),o(e,Yp,l),E(Vo,e,l),o(e,Jp,l),E(Ro,e,l),o(e,Xp,l),o(e,hr,l),s(hr,Yc),Kp=!0},p(e,[l]){const ti={};l&1&&(ti.fw=e[0]),f.$set(ti);let dr=C;C=au(e),C!==dr&&(Bs(),w(Go[dr],1,1,()=>{Go[dr]=null}),Ms(),F=Go[C],F||(F=Go[C]=su[C](e),F.c()),_(F,1),F.m(z.parentNode,z));const gl={};l&2&&(gl.$$scope={dirty:l,ctx:e}),me.$set(gl);const bl={};l&2&&(bl.$$scope={dirty:l,ctx:e}),an.$set(bl);let zs=Rt;Rt=ou(e),Rt!==zs&&(Bs(),w(Uo[zs],1,1,()=>{Uo[zs]=null}),Ms(),Gt=Uo[Rt],Gt||(Gt=Uo[Rt]=nu[Rt](e),Gt.c()),_(Gt,1),Gt.m(Bi.parentNode,Bi));let cr=Ut;Ut=ru(e),Ut!==cr&&(Bs(),w(Yo[cr],1,1,()=>{Yo[cr]=null}),Ms(),Yt=Yo[Ut],Yt||(Yt=Yo[Ut]=iu[Ut](e),Yt.c()),_(Yt,1),Yt.m(Li.parentNode,Li));let ur=Jt;Jt=pu(e),Jt!==ur&&(Bs(),w(Jo[ur],1,1,()=>{Jo[ur]=null}),Ms(),Xt=Jo[Jt],Xt||(Xt=Jo[Jt]=lu[Jt](e),Xt.c()),_(Xt,1),Xt.m(Hi.parentNode,Hi)),Zp!==(Zp=hu(e))&&(ya.d(1),ya=Zp(e),ya&&(ya.c(),ya.m(Yi.parentNode,Yi)));let _n=Kt;Kt=cu(e),Kt!==_n&&(Bs(),w(Xo[_n],1,1,()=>{Xo[_n]=null}),Ms(),Zt=Xo[Kt],Zt||(Zt=Xo[Kt]=du[Kt](e),Zt.c()),_(Zt,1),Zt.m(Ki.parentNode,Ki));let fr=es;es=fu(e),es!==fr&&(Bs(),w(Ko[fr],1,1,()=>{Ko[fr]=null}),Ms(),ts=Ko[es],ts||(ts=Ko[es]=uu[es](e),ts.c()),_(ts,1),ts.m(sr.parentNode,sr));let wn=ss;ss=_u(e),ss!==wn&&(Bs(),w(Zo[wn],1,1,()=>{Zo[wn]=null}),Ms(),as=Zo[ss],as||(as=Zo[ss]=mu[ss](e),as.c()),_(as,1),as.m(ar.parentNode,ar));let mr=ns;ns=gu(e),ns!==mr&&(Bs(),w(ei[mr],1,1,()=>{ei[mr]=null}),Ms(),os=ei[ns],os||(os=ei[ns]=wu[ns](e),os.c()),_(os,1),os.m(or.parentNode,or)),e[0]==="pt"?ie?l&1&&_(ie,1):(ie=zm(),ie.c(),_(ie,1),ie.m(rr.parentNode,rr)):ie&&(Bs(),w(ie,1,1,()=>{ie=null}),Ms());const si={};l&2&&(si.$$scope={dirty:l,ctx:e}),un.$set(si),e[0]==="pt"?re?l&1&&_(re,1):(re=Im(),re.c(),_(re,1),re.m(pr.parentNode,pr)):re&&(Bs(),w(re,1,1,()=>{re=null}),Ms())},i(e){Kp||(_(f.$$.fragment,e),_(y.$$.fragment,e),_(F),_(I.$$.fragment,e),_(me.$$.fragment,e),_(rt.$$.fragment,e),_(Ve.$$.fragment,e),_(ct.$$.fragment,e),_(qt.$$.fragment,e),_(Et.$$.fragment,e),_(Pt.$$.fragment,e),_(ut.$$.fragment,e),_(gt.$$.fragment,e),_(Te.$$.fragment,e),_(Ot.$$.fragment,e),_(zt.$$.fragment,e),_(It.$$.fragment,e),_(Re.$$.fragment,e),_(Ft.$$.fragment,e),_(Ie.$$.fragment,e),_(Ae.$$.fragment,e),_(Wt.$$.fragment,e),_(Je.$$.fragment,e),_(Ht.$$.fragment,e),_(le.$$.fragment,e),_(Xe.$$.fragment,e),_(qs.$$.fragment,e),_(Es.$$.fragment,e),_(Ts.$$.fragment,e),_(As.$$.fragment,e),_(no.$$.fragment,e),_(oo.$$.fragment,e),_(io.$$.fragment,e),_(ro.$$.fragment,e),_(lo.$$.fragment,e),_(po.$$.fragment,e),_(ho.$$.fragment,e),_(co.$$.fragment,e),_(uo.$$.fragment,e),_(fo.$$.fragment,e),_(an.$$.fragment,e),_(mo.$$.fragment,e),_(_o.$$.fragment,e),_(wo.$$.fragment,e),_(go.$$.fragment,e),_(bo.$$.fragment,e),_(vo.$$.fragment,e),_(xo.$$.fragment,e),_(Gt),_(yo.$$.fragment,e),_(Yt),_(jo.$$.fragment,e),_(qo.$$.fragment,e),_(Xt),_(Eo.$$.fragment,e),_(Ao.$$.fragment,e),_(Do.$$.fragment,e),_(Po.$$.fragment,e),_(Co.$$.fragment,e),_(So.$$.fragment,e),_(Oo.$$.fragment,e),_(zo.$$.fragment,e),_(Fo.$$.fragment,e),_(No.$$.fragment,e),_(Mo.$$.fragment,e),_(Bo.$$.fragment,e),_(Zt),_(Lo.$$.fragment,e),_(Wo.$$.fragment,e),_(ts),_(as),_(os),_(Ho.$$.fragment,e),_(ie),_(un.$$.fragment,e),_(re),_(Qo.$$.fragment,e),_(Vo.$$.fragment,e),_(Ro.$$.fragment,e),Kp=!0)},o(e){w(f.$$.fragment,e),w(y.$$.fragment,e),w(F),w(I.$$.fragment,e),w(me.$$.fragment,e),w(rt.$$.fragment,e),w(Ve.$$.fragment,e),w(ct.$$.fragment,e),w(qt.$$.fragment,e),w(Et.$$.fragment,e),w(Pt.$$.fragment,e),w(ut.$$.fragment,e),w(gt.$$.fragment,e),w(Te.$$.fragment,e),w(Ot.$$.fragment,e),w(zt.$$.fragment,e),w(It.$$.fragment,e),w(Re.$$.fragment,e),w(Ft.$$.fragment,e),w(Ie.$$.fragment,e),w(Ae.$$.fragment,e),w(Wt.$$.fragment,e),w(Je.$$.fragment,e),w(Ht.$$.fragment,e),w(le.$$.fragment,e),w(Xe.$$.fragment,e),w(qs.$$.fragment,e),w(Es.$$.fragment,e),w(Ts.$$.fragment,e),w(As.$$.fragment,e),w(no.$$.fragment,e),w(oo.$$.fragment,e),w(io.$$.fragment,e),w(ro.$$.fragment,e),w(lo.$$.fragment,e),w(po.$$.fragment,e),w(ho.$$.fragment,e),w(co.$$.fragment,e),w(uo.$$.fragment,e),w(fo.$$.fragment,e),w(an.$$.fragment,e),w(mo.$$.fragment,e),w(_o.$$.fragment,e),w(wo.$$.fragment,e),w(go.$$.fragment,e),w(bo.$$.fragment,e),w(vo.$$.fragment,e),w(xo.$$.fragment,e),w(Gt),w(yo.$$.fragment,e),w(Yt),w(jo.$$.fragment,e),w(qo.$$.fragment,e),w(Xt),w(Eo.$$.fragment,e),w(Ao.$$.fragment,e),w(Do.$$.fragment,e),w(Po.$$.fragment,e),w(Co.$$.fragment,e),w(So.$$.fragment,e),w(Oo.$$.fragment,e),w(zo.$$.fragment,e),w(Fo.$$.fragment,e),w(No.$$.fragment,e),w(Mo.$$.fragment,e),w(Bo.$$.fragment,e),w(Zt),w(Lo.$$.fragment,e),w(Wo.$$.fragment,e),w(ts),w(as),w(os),w(Ho.$$.fragment,e),w(ie),w(un.$$.fragment,e),w(re),w(Qo.$$.fragment,e),w(Vo.$$.fragment,e),w(Ro.$$.fragment,e),Kp=!1},d(e){t(h),e&&t(g),T(f,e),e&&t(x),e&&t(P),T(y),e&&t(v),Go[C].d(e),e&&t(z),e&&t(D),e&&t(G),T(I,e),e&&t(U),e&&t(Z),e&&t(Pe),e&&t(ae),e&&t(We),e&&t(H),e&&t(kt),e&&t(ye),e&&t(pe),T(me,e),e&&t(_e),e&&t(we),T(rt),e&&t(ka),e&&t(Se),e&&t(qa),e&&t($e),T(Ve),e&&t(Ea),e&&t(ht),e&&t(dt),T(ct,e),e&&t(je),e&&t(is),e&&t(Aa),T(qt,e),e&&t(rs),T(Et,e),e&&t(Da),e&&t(he),e&&t(ps),T(Pt,e),e&&t(Pa),T(ut,e),e&&t(ft),e&&t(ee),e&&t(_t),e&&t(wt),e&&t(za),T(gt,e),e&&t(Ee),T(Te,e),e&&t(Ia),e&&t(bt),e&&t(Fa),T(Ot,e),e&&t(ve),T(zt,e),e&&t(fs),e&&t(ms),e&&t(_s),T(It,e),e&&t(Na),T(Re,e),e&&t(Ma),e&&t(ws),e&&t(Oe),e&&t(Ge),T(Ft),e&&t(ia),T(Ie,e),e&&t(Ba),e&&t(Nt),e&&t(ra),e&&t(Ue),e&&t(la),T(Ae,e),e&&t(pa),e&&t(J),e&&t(gs),T(Wt,e),e&&t(La),T(Je,e),e&&t(Wa),e&&t(bs),e&&t(Ha),T(Ht,e),e&&t(vs),e&&t(xs),e&&t(da),T(le,e),e&&t(Qa),T(Xe,e),e&&t(Va),e&&t(ys),e&&t(ks),e&&t(Ke),e&&t(Yn),e&&t(Ze),e&&t(Jn),e&&t(de),e&&t(Xn),e&&t(De),e&&t(Kn),T(qs,e),e&&t(ma),T(Es,e),e&&t(Zn),e&&t(st),e&&t(eo),e&&t(ce),e&&t(to),T(Ts,e),e&&t(so),T(As,e),e&&t(ao),e&&t(ue),e&&t(vl),T(no,e),e&&t(xl),T(oo,e),e&&t(yl),e&&t(Ti),e&&t(kl),T(io,e),e&&t($l),T(ro,e),e&&t(jl),e&&t(Ai),e&&t(ql),e&&t(Di),e&&t(El),e&&t(Za),e&&t(Tl),e&&t(Ps),e&&t(Al),e&&t(en),e&&t(Dl),T(lo,e),e&&t(Pl),T(po,e),e&&t(Cl),e&&t(tn),e&&t(Sl),T(ho,e),e&&t(Ol),T(co,e),e&&t(zl),e&&t(sn),e&&t(Il),T(uo,e),e&&t(Fl),T(fo,e),e&&t(Nl),e&&t(Ci),e&&t(Ml),T(an,e),e&&t(Bl),e&&t(Si),e&&t(Ll),T(mo,e),e&&t(Wl),e&&t(Oi),e&&t(Hl),e&&t(Cs),e&&t(Ql),T(_o,e),e&&t(Vl),T(wo,e),e&&t(Rl),e&&t(zi),e&&t(Gl),e&&t(wa),T(go),e&&t(Ul),e&&t(Ii),e&&t(Yl),e&&t(Ss),e&&t(Jl),T(bo,e),e&&t(Xl),e&&t(Fi),e&&t(Kl),T(vo,e),e&&t(Zl),T(xo,e),e&&t(ep),e&&t(Ni),e&&t(tp),e&&t(Mi),e&&t(sp),Uo[Rt].d(e),e&&t(Bi),e&&t(ga),T(yo),e&&t(ap),Yo[Ut].d(e),e&&t(Li),e&&t(rn),e&&t(np),e&&t(yt),e&&t(op),e&&t(Ne),e&&t(lp),e&&t(ln),e&&t(pp),T(jo,e),e&&t(hp),e&&t(Wi),e&&t(dp),T(qo,e),e&&t(cp),e&&t(pn),e&&t(up),Jo[Jt].d(e),e&&t(Hi),e&&t(Me),e&&t(fp),T(Eo,e),e&&t(mp),e&&t(hn),e&&t(_p),e&&t(Os),e&&t(wp),e&&t(Qi),e&&t(gp),T(Ao,e),e&&t(bp),e&&t(Vi),e&&t(vp),T(Do,e),e&&t(xp),e&&t(Ri),e&&t(yp),T(Po,e),e&&t(kp),e&&t(Gi),e&&t($p),T(Co,e),e&&t(jp),T(So,e),e&&t(qp),e&&t(Ui),e&&t(Ep),T(Oo,e),e&&t(Tp),T(zo,e),e&&t(Ap),e&&t(dn),e&&t(Dp),ya.d(e),e&&t(Yi),T(Fo,e),e&&t(Pp),e&&t(Ji),e&&t(Cp),T(No,e),e&&t(Sp),T(Mo,e),e&&t(Op),e&&t(Xi),e&&t(zp),e&&t(va),T(Bo),e&&t(Ip),Xo[Kt].d(e),e&&t(Ki),e&&t(Zi),e&&t(Fp),e&&t(er),e&&t(Np),T(Lo,e),e&&t(Mp),e&&t(tr),e&&t(Bp),T(Wo,e),e&&t(Lp),Ko[es].d(e),e&&t(sr),e&&t(Be),e&&t(Wp),Zo[ss].d(e),e&&t(ar),e&&t(nr),e&&t(Hp),ei[ns].d(e),e&&t(or),T(Ho,e),e&&t(Qp),e&&t(ir),e&&t(Vp),ie&&ie.d(e),e&&t(rr),e&&t(lr),e&&t(Rp),T(un,e),e&&t(Gp),re&&re.d(e),e&&t(pr),e&&t(xa),T(Qo),e&&t(Up),e&&t(mn),e&&t(Yp),T(Vo,e),e&&t(Jp),T(Ro,e),e&&t(Xp),e&&t(hr)}}}const __={local:"question-answering",sections:[{local:"preparing-the-data",sections:[{local:"the-squad-dataset",title:"The SQuAD dataset"},{local:"processing-the-training-data",title:"Processing the training data"},{local:"processing-the-validation-data",title:"Processing the validation data"}],title:"Preparing the data"},{local:"finetuning-the-model-with-the-trainer-api",title:"Fine-tuning the model with the `Trainer` API"},{local:"finetuning-the-model-with-keras",sections:[{local:"postprocessing",title:"Post-processing"},{local:"finetuning-the-model",title:"Fine-tuning the model"}],title:"Fine-tuning the model with Keras"},{local:"a-custom-training-loop",sections:[{local:"preparing-everything-for-training",title:"Preparing everything for training"}],title:"A custom training loop"},{local:"training-loop",title:"Training loop"},{local:"using-the-finetuned-model",title:"Using the fine-tuned model"}],title:"Question answering"};function w_(W,h,g){let f="pt";return Vm(()=>{const x=new URLSearchParams(window.location.search);g(0,f=x.get("fw")||"pt")}),[f]}class j_ extends Mm{constructor(h){super();Bm(this,h,w_,m_,Lm,{})}}export{j_ as default,__ as metadata};
