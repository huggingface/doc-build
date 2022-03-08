import{S as cu,i as uu,s as mu,e as r,t as a,c as p,a as h,h as o,d as s,g as l,F as t,k as u,w as $,m,x as j,y as x,q as _,o as w,B as E,b as z,M as fu,N as lu,p as Xt,v as _u,O as gu,n as Zt}from"../../chunks/vendor-e7c81d8a.js";import{T as Ls}from"../../chunks/Tip-989931f5.js";import{Y as Xi}from"../../chunks/Youtube-365ea064.js";import{I as Rs}from"../../chunks/WidgetTextarea.svelte_svelte_type_style_lang-08e92eaf.js";import{C as A}from"../../chunks/CodeBlock-105940ae.js";import{D as du}from"../../chunks/DocNotebookDropdown-928568b4.js";import{I as wu}from"../../chunks/InferenceWidget-88fba1ff.js";import{F as ku}from"../../chunks/FrameworkSwitch-287292d8.js";const{document:iu}=gu;function bu(C){let i,f;return i=new du({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section3_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section3_tf.ipynb"}]}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function yu(C){let i,f;return i=new du({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section3_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section3_pt.ipynb"}]}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function vu(C){let i,f,d,y,T;return{c(){i=r("p"),f=a("\u{1F64B} If the terms \u201Cmasked language modeling\u201D and \u201Cpretrained model\u201D sound unfamiliar to you, go check out "),d=r("a"),y=a("Chapter 1"),T=a(", where we explain all these core concepts, complete with videos!"),this.h()},l(k){i=p(k,"P",{});var b=h(i);f=o(b,"\u{1F64B} If the terms \u201Cmasked language modeling\u201D and \u201Cpretrained model\u201D sound unfamiliar to you, go check out "),d=p(b,"A",{href:!0});var q=h(d);y=o(q,"Chapter 1"),q.forEach(s),T=o(b,", where we explain all these core concepts, complete with videos!"),b.forEach(s),this.h()},h(){z(d,"href","/course/chapter1")},m(k,b){l(k,i,b),t(i,f),t(i,d),t(d,y),t(i,T)},d(k){k&&s(i)}}}function $u(C){let i,f,d,y,T,k,b,q,g,D,L,O,P,N,W,F,H,B;return b=new A({props:{codee:`from transformers import TFAutoModelForMaskedLM

model_checkpoint = "distilbert-base-uncased"
model = TFAutoModelForMaskedLM.from_pretrained(model_checkpoint),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForMaskedLM

model_checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>
model = TFAutoModelForMaskedLM.from_pretrained(model_checkpoint)`}}),W=new A({props:{codee:`model(model.dummy_inputs)  # Build the model
model.summary(),`,highlighted:`model(model.dummy_inputs)  <span class="hljs-comment"># Build the model</span>
model.summary()`}}),H=new A({props:{codee:`Model: "tf_distil_bert_for_masked_lm"
_________________________________________________________________
Layer (type)                 Output Shape              Param #   
=================================================================
distilbert (TFDistilBertMain multiple                  66362880  
_________________________________________________________________
vocab_transform (Dense)      multiple                  590592    
_________________________________________________________________
vocab_layer_norm (LayerNorma multiple                  1536      
_________________________________________________________________
vocab_projector (TFDistilBer multiple                  23866170  
=================================================================
Total params: 66,985,530
Trainable params: 66,985,530
Non-trainable params: 0
_________________________________________________________________,`,highlighted:`Model: <span class="hljs-string">&quot;tf_distil_bert_for_masked_lm&quot;</span>
_________________________________________________________________
Layer (<span class="hljs-built_in">type</span>)                 Output Shape              Param <span class="hljs-comment">#   </span>
=================================================================
distilbert (TFDistilBertMain multiple                  <span class="hljs-number">66362880</span>  
_________________________________________________________________
vocab_transform (Dense)      multiple                  <span class="hljs-number">590592</span>    
_________________________________________________________________
vocab_layer_norm (LayerNorma multiple                  <span class="hljs-number">1536</span>      
_________________________________________________________________
vocab_projector (TFDistilBer multiple                  <span class="hljs-number">23866170</span>  
=================================================================
Total params: <span class="hljs-number">66</span>,<span class="hljs-number">985</span>,<span class="hljs-number">530</span>
Trainable params: <span class="hljs-number">66</span>,<span class="hljs-number">985</span>,<span class="hljs-number">530</span>
Non-trainable params: <span class="hljs-number">0</span>
_________________________________________________________________`}}),{c(){i=r("p"),f=a("Let\u2019s go ahead and download DistilBERT using the "),d=r("code"),y=a("AutoModelForMaskedLM"),T=a(" class:"),k=u(),$(b.$$.fragment),q=u(),g=r("p"),D=a("We can see how many parameters this model has by calling the "),L=r("code"),O=a("summary()"),P=a(" method:"),N=u(),$(W.$$.fragment),F=u(),$(H.$$.fragment)},l(v){i=p(v,"P",{});var R=h(i);f=o(R,"Let\u2019s go ahead and download DistilBERT using the "),d=p(R,"CODE",{});var U=h(d);y=o(U,"AutoModelForMaskedLM"),U.forEach(s),T=o(R," class:"),R.forEach(s),k=m(v),j(b.$$.fragment,v),q=m(v),g=p(v,"P",{});var Y=h(g);D=o(Y,"We can see how many parameters this model has by calling the "),L=p(Y,"CODE",{});var V=h(L);O=o(V,"summary()"),V.forEach(s),P=o(Y," method:"),Y.forEach(s),N=m(v),j(W.$$.fragment,v),F=m(v),j(H.$$.fragment,v)},m(v,R){l(v,i,R),t(i,f),t(i,d),t(d,y),t(i,T),l(v,k,R),x(b,v,R),l(v,q,R),l(v,g,R),t(g,D),t(g,L),t(L,O),t(g,P),l(v,N,R),x(W,v,R),l(v,F,R),x(H,v,R),B=!0},i(v){B||(_(b.$$.fragment,v),_(W.$$.fragment,v),_(H.$$.fragment,v),B=!0)},o(v){w(b.$$.fragment,v),w(W.$$.fragment,v),w(H.$$.fragment,v),B=!1},d(v){v&&s(i),v&&s(k),E(b,v),v&&s(q),v&&s(g),v&&s(N),E(W,v),v&&s(F),E(H,v)}}}function ju(C){let i,f,d,y,T,k,b,q,g,D,L,O,P,N,W,F,H,B;return b=new A({props:{codee:`from transformers import AutoModelForMaskedLM

model_checkpoint = "distilbert-base-uncased"
model = AutoModelForMaskedLM.from_pretrained(model_checkpoint),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForMaskedLM

model_checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>
model = AutoModelForMaskedLM.from_pretrained(model_checkpoint)`}}),W=new A({props:{codee:`distilbert_num_parameters = model.num_parameters() / 1_000_000
print(f"'>>> DistilBERT number of parameters: {round(distilbert_num_parameters)}M'")
print(f"'>>> BERT number of parameters: 110M'"),`,highlighted:`distilbert_num_parameters = model.num_parameters() / <span class="hljs-number">1_000_000</span>
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&#x27;&gt;&gt;&gt; DistilBERT number of parameters: <span class="hljs-subst">{<span class="hljs-built_in">round</span>(distilbert_num_parameters)}</span>M&#x27;&quot;</span>)
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&#x27;&gt;&gt;&gt; BERT number of parameters: 110M&#x27;&quot;</span>)`}}),H=new A({props:{codee:`'>>> DistilBERT number of parameters: 67M'
'>>> BERT number of parameters: 110M',`,highlighted:`<span class="hljs-string">&#x27;&gt;&gt;&gt; DistilBERT number of parameters: 67M&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; BERT number of parameters: 110M&#x27;</span>`}}),{c(){i=r("p"),f=a("Let\u2019s go ahead and download DistilBERT using the "),d=r("code"),y=a("AutoModelForMaskedLM"),T=a(" class:"),k=u(),$(b.$$.fragment),q=u(),g=r("p"),D=a("We can see how many parameters this model has by calling the "),L=r("code"),O=a("num_parameters()"),P=a(" method:"),N=u(),$(W.$$.fragment),F=u(),$(H.$$.fragment)},l(v){i=p(v,"P",{});var R=h(i);f=o(R,"Let\u2019s go ahead and download DistilBERT using the "),d=p(R,"CODE",{});var U=h(d);y=o(U,"AutoModelForMaskedLM"),U.forEach(s),T=o(R," class:"),R.forEach(s),k=m(v),j(b.$$.fragment,v),q=m(v),g=p(v,"P",{});var Y=h(g);D=o(Y,"We can see how many parameters this model has by calling the "),L=p(Y,"CODE",{});var V=h(L);O=o(V,"num_parameters()"),V.forEach(s),P=o(Y," method:"),Y.forEach(s),N=m(v),j(W.$$.fragment,v),F=m(v),j(H.$$.fragment,v)},m(v,R){l(v,i,R),t(i,f),t(i,d),t(d,y),t(i,T),l(v,k,R),x(b,v,R),l(v,q,R),l(v,g,R),t(g,D),t(g,L),t(L,O),t(g,P),l(v,N,R),x(W,v,R),l(v,F,R),x(H,v,R),B=!0},i(v){B||(_(b.$$.fragment,v),_(W.$$.fragment,v),_(H.$$.fragment,v),B=!0)},o(v){w(b.$$.fragment,v),w(W.$$.fragment,v),w(H.$$.fragment,v),B=!1},d(v){v&&s(i),v&&s(k),E(b,v),v&&s(q),v&&s(g),v&&s(N),E(W,v),v&&s(F),E(H,v)}}}function xu(C){let i,f;return i=new A({props:{codee:`import numpy as np
import tensorflow as tf

inputs = tokenizer(text, return_tensors="np")
token_logits = model(**inputs).logits
# Find the location of [MASK] and extract its logits
mask_token_index = np.argwhere(inputs["input_ids"] == tokenizer.mask_token_id)[0, 1]
mask_token_logits = token_logits[0, mask_token_index, :]
# Pick the [MASK] candidates with the highest logits
# We negate the array before argsort to get the largest, not the smallest, logits
top_5_tokens = np.argsort(-mask_token_logits)[:5].tolist()

for token in top_5_tokens:
    print(f">>> {text.replace(tokenizer.mask_token, tokenizer.decode([token]))}"),`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
token_logits = model(**inputs).logits
<span class="hljs-comment"># Find the location of [MASK] and extract its logits</span>
mask_token_index = np.argwhere(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>] == tokenizer.mask_token_id)[<span class="hljs-number">0</span>, <span class="hljs-number">1</span>]
mask_token_logits = token_logits[<span class="hljs-number">0</span>, mask_token_index, :]
<span class="hljs-comment"># Pick the [MASK] candidates with the highest logits</span>
<span class="hljs-comment"># We negate the array before argsort to get the largest, not the smallest, logits</span>
top_5_tokens = np.argsort(-mask_token_logits)[:<span class="hljs-number">5</span>].tolist()

<span class="hljs-keyword">for</span> token <span class="hljs-keyword">in</span> top_5_tokens:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&gt;&gt;&gt; <span class="hljs-subst">{text.replace(tokenizer.mask_token, tokenizer.decode([token]))}</span>&quot;</span>)`}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function Eu(C){let i,f;return i=new A({props:{codee:`import torch

inputs = tokenizer(text, return_tensors="pt")
token_logits = model(**inputs).logits
# Find the location of [MASK] and extract its logits
mask_token_index = torch.where(inputs["input_ids"] == tokenizer.mask_token_id)[1]
mask_token_logits = token_logits[0, mask_token_index, :]
# Pick the [MASK] candidates with the highest logits
top_5_tokens = torch.topk(mask_token_logits, 5, dim=1).indices[0].tolist()

for token in top_5_tokens:
    print(f"'>>> {text.replace(tokenizer.mask_token, tokenizer.decode([token]))}'"),`,highlighted:`<span class="hljs-keyword">import</span> torch

inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
token_logits = model(**inputs).logits
<span class="hljs-comment"># Find the location of [MASK] and extract its logits</span>
mask_token_index = torch.where(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>] == tokenizer.mask_token_id)[<span class="hljs-number">1</span>]
mask_token_logits = token_logits[<span class="hljs-number">0</span>, mask_token_index, :]
<span class="hljs-comment"># Pick the [MASK] candidates with the highest logits</span>
top_5_tokens = torch.topk(mask_token_logits, <span class="hljs-number">5</span>, dim=<span class="hljs-number">1</span>).indices[<span class="hljs-number">0</span>].tolist()

<span class="hljs-keyword">for</span> token <span class="hljs-keyword">in</span> top_5_tokens:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&#x27;&gt;&gt;&gt; <span class="hljs-subst">{text.replace(tokenizer.mask_token, tokenizer.decode([token]))}</span>&#x27;&quot;</span>)`}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function Tu(C){let i,f,d,y,T,k,b,q,g,D,L,O,P,N,W,F,H,B,v,R,U,Y,V,I,qe,pe;return{c(){i=r("p"),f=a("\u270F\uFE0F "),d=r("strong"),y=a("Try it out!"),T=a(" Create a random sample of the "),k=r("code"),b=a("unsupervised"),q=a(" split and verify that the labels are neither "),g=r("code"),D=a("0"),L=a(" nor "),O=r("code"),P=a("1"),N=a(". While you\u2019re at it, you could also check that the labels in the "),W=r("code"),F=a("train"),H=a(" and "),B=r("code"),v=a("test"),R=a(" splits are indeed "),U=r("code"),Y=a("0"),V=a(" or "),I=r("code"),qe=a("1"),pe=a(" \u2014 this is a useful sanity check that every NLP practitioner should perform at the start of a new project!")},l(oe){i=p(oe,"P",{});var G=h(i);f=o(G,"\u270F\uFE0F "),d=p(G,"STRONG",{});var fe=h(d);y=o(fe,"Try it out!"),fe.forEach(s),T=o(G," Create a random sample of the "),k=p(G,"CODE",{});var De=h(k);b=o(De,"unsupervised"),De.forEach(s),q=o(G," split and verify that the labels are neither "),g=p(G,"CODE",{});var ne=h(g);D=o(ne,"0"),ne.forEach(s),L=o(G," nor "),O=p(G,"CODE",{});var Z=h(O);P=o(Z,"1"),Z.forEach(s),N=o(G,". While you\u2019re at it, you could also check that the labels in the "),W=p(G,"CODE",{});var he=h(W);F=o(he,"train"),he.forEach(s),H=o(G," and "),B=p(G,"CODE",{});var _e=h(B);v=o(_e,"test"),_e.forEach(s),R=o(G," splits are indeed "),U=p(G,"CODE",{});var ee=h(U);Y=o(ee,"0"),ee.forEach(s),V=o(G," or "),I=p(G,"CODE",{});var Ce=h(I);qe=o(Ce,"1"),Ce.forEach(s),pe=o(G," \u2014 this is a useful sanity check that every NLP practitioner should perform at the start of a new project!"),G.forEach(s)},m(oe,G){l(oe,i,G),t(i,f),t(i,d),t(d,y),t(i,T),t(i,k),t(k,b),t(i,q),t(i,g),t(g,D),t(i,L),t(i,O),t(O,P),t(i,N),t(i,W),t(W,F),t(i,H),t(i,B),t(B,v),t(i,R),t(i,U),t(U,Y),t(i,V),t(i,I),t(I,qe),t(i,pe)},d(oe){oe&&s(i)}}}function zu(C){let i,f,d,y,T,k,b,q,g,D,L,O,P,N;return{c(){i=r("p"),f=a("\u270F\uFE0F "),d=r("strong"),y=a("Try it out!"),T=a(" Some Transformer models, like "),k=r("a"),b=a("BigBird"),q=a(" and "),g=r("a"),D=a("Longformer"),L=a(", have a much longer context length than BERT and other early Transformer models. Instantiate the tokenizer for one of these checkpoints and verify that the "),O=r("code"),P=a("model_max_length"),N=a(" agrees with what\u2019s quoted on its model card."),this.h()},l(W){i=p(W,"P",{});var F=h(i);f=o(F,"\u270F\uFE0F "),d=p(F,"STRONG",{});var H=h(d);y=o(H,"Try it out!"),H.forEach(s),T=o(F," Some Transformer models, like "),k=p(F,"A",{href:!0,rel:!0});var B=h(k);b=o(B,"BigBird"),B.forEach(s),q=o(F," and "),g=p(F,"A",{href:!0});var v=h(g);D=o(v,"Longformer"),v.forEach(s),L=o(F,", have a much longer context length than BERT and other early Transformer models. Instantiate the tokenizer for one of these checkpoints and verify that the "),O=p(F,"CODE",{});var R=h(O);P=o(R,"model_max_length"),R.forEach(s),N=o(F," agrees with what\u2019s quoted on its model card."),F.forEach(s),this.h()},h(){z(k,"href","https://huggingface.co/google/bigbird-roberta-base"),z(k,"rel","nofollow"),z(g,"href","hf.co/allenai/longformer-base-4096")},m(W,F){l(W,i,F),t(i,f),t(i,d),t(d,y),t(i,T),t(i,k),t(k,b),t(i,q),t(i,g),t(g,D),t(i,L),t(i,O),t(O,P),t(i,N)},d(W){W&&s(i)}}}function Au(C){let i,f;return{c(){i=r("p"),f=a("Note that using a small chunk size can be detrimental in real-world scenarios, so you should use a size that corresponds to the use case you will apply your model to.")},l(d){i=p(d,"P",{});var y=h(i);f=o(y,"Note that using a small chunk size can be detrimental in real-world scenarios, so you should use a size that corresponds to the use case you will apply your model to."),y.forEach(s)},m(d,y){l(d,i,y),t(i,f)},d(d){d&&s(i)}}}function qu(C){let i,f,d,y,T,k,b,q,g,D,L;return{c(){i=r("p"),f=a("\u270F\uFE0F "),d=r("strong"),y=a("Try it out!"),T=a(" Run the code snippet above several times to see the random masking happen in front of your very eyes! Also replace the "),k=r("code"),b=a("tokenizer.decode()"),q=a(" method with "),g=r("code"),D=a("tokenizer.convert_ids_to_tokens()"),L=a(" to see that sometimes a single token from a given word is masked, and not the others.")},l(O){i=p(O,"P",{});var P=h(i);f=o(P,"\u270F\uFE0F "),d=p(P,"STRONG",{});var N=h(d);y=o(N,"Try it out!"),N.forEach(s),T=o(P," Run the code snippet above several times to see the random masking happen in front of your very eyes! Also replace the "),k=p(P,"CODE",{});var W=h(k);b=o(W,"tokenizer.decode()"),W.forEach(s),q=o(P," method with "),g=p(P,"CODE",{});var F=h(g);D=o(F,"tokenizer.convert_ids_to_tokens()"),F.forEach(s),L=o(P," to see that sometimes a single token from a given word is masked, and not the others."),P.forEach(s)},m(O,P){l(O,i,P),t(i,f),t(i,d),t(d,y),t(i,T),t(i,k),t(k,b),t(i,q),t(i,g),t(g,D),t(i,L)},d(O){O&&s(i)}}}function ru(C){let i,f,d,y,T;return{c(){i=r("p"),f=a("One side effect of random masking is that our evaluation metrics will not be deterministic when using the "),d=r("code"),y=a("Trainer"),T=a(", since we use the same data collator for the training and test sets. We\u2019ll see later, when we look at fine-tuning with \u{1F917} Accelerate, how we can use the flexibility of a custom evaluation loop to freeze the randomness.")},l(k){i=p(k,"P",{});var b=h(i);f=o(b,"One side effect of random masking is that our evaluation metrics will not be deterministic when using the "),d=p(b,"CODE",{});var q=h(d);y=o(q,"Trainer"),q.forEach(s),T=o(b,", since we use the same data collator for the training and test sets. We\u2019ll see later, when we look at fine-tuning with \u{1F917} Accelerate, how we can use the flexibility of a custom evaluation loop to freeze the randomness."),b.forEach(s)},m(k,b){l(k,i,b),t(i,f),t(i,d),t(d,y),t(i,T)},d(k){k&&s(i)}}}function Du(C){let i,f;return i=new A({props:{codee:`import collections
import numpy as np

from transformers.data import tf_default_data_collator

wwm_probability = 0.2


def whole_word_masking_data_collator(features):
    for feature in features:
        word_ids = feature.pop("word_ids")

        # Create a map between words and corresponding token indices
        mapping = collections.defaultdict(list)
        current_word_index = -1
        current_word = None
        for idx, word_id in enumerate(word_ids):
            if word_id is not None:
                if word_id != current_word:
                    current_word = word_id
                    current_word_index += 1
                mapping[current_word_index].append(idx)

        # Randomly mask words
        mask = np.random.binomial(1, wwm_probability, (len(mapping),))
        input_ids = feature["input_ids"]
        labels = feature["labels"]
        new_labels = [-100] * len(labels)
        for word_id in np.where(mask)[0]:
            word_id = word_id.item()
            for idx in mapping[word_id]:
                new_labels[idx] = labels[idx]
                input_ids[idx] = tokenizer.mask_token_id

    return tf_default_data_collator(features),`,highlighted:`<span class="hljs-keyword">import</span> collections
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-keyword">from</span> transformers.data <span class="hljs-keyword">import</span> tf_default_data_collator

wwm_probability = <span class="hljs-number">0.2</span>


<span class="hljs-keyword">def</span> <span class="hljs-title function_">whole_word_masking_data_collator</span>(<span class="hljs-params">features</span>):
    <span class="hljs-keyword">for</span> feature <span class="hljs-keyword">in</span> features:
        word_ids = feature.pop(<span class="hljs-string">&quot;word_ids&quot;</span>)

        <span class="hljs-comment"># Create a map between words and corresponding token indices</span>
        mapping = collections.defaultdict(<span class="hljs-built_in">list</span>)
        current_word_index = -<span class="hljs-number">1</span>
        current_word = <span class="hljs-literal">None</span>
        <span class="hljs-keyword">for</span> idx, word_id <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(word_ids):
            <span class="hljs-keyword">if</span> word_id <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span>:
                <span class="hljs-keyword">if</span> word_id != current_word:
                    current_word = word_id
                    current_word_index += <span class="hljs-number">1</span>
                mapping[current_word_index].append(idx)

        <span class="hljs-comment"># Randomly mask words</span>
        mask = np.random.binomial(<span class="hljs-number">1</span>, wwm_probability, (<span class="hljs-built_in">len</span>(mapping),))
        input_ids = feature[<span class="hljs-string">&quot;input_ids&quot;</span>]
        labels = feature[<span class="hljs-string">&quot;labels&quot;</span>]
        new_labels = [-<span class="hljs-number">100</span>] * <span class="hljs-built_in">len</span>(labels)
        <span class="hljs-keyword">for</span> word_id <span class="hljs-keyword">in</span> np.where(mask)[<span class="hljs-number">0</span>]:
            word_id = word_id.item()
            <span class="hljs-keyword">for</span> idx <span class="hljs-keyword">in</span> mapping[word_id]:
                new_labels[idx] = labels[idx]
                input_ids[idx] = tokenizer.mask_token_id

    <span class="hljs-keyword">return</span> tf_default_data_collator(features)`}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function Mu(C){let i,f;return i=new A({props:{codee:`import collections
import numpy as np

from transformers import default_data_collator

wwm_probability = 0.2


def whole_word_masking_data_collator(features):
    for feature in features:
        word_ids = feature.pop("word_ids")

        # Create a map between words and corresponding token indices
        mapping = collections.defaultdict(list)
        current_word_index = -1
        current_word = None
        for idx, word_id in enumerate(word_ids):
            if word_id is not None:
                if word_id != current_word:
                    current_word = word_id
                    current_word_index += 1
                mapping[current_word_index].append(idx)

        # Randomly mask words
        mask = np.random.binomial(1, wwm_probability, (len(mapping),))
        input_ids = feature["input_ids"]
        labels = feature["labels"]
        new_labels = [-100] * len(labels)
        for word_id in np.where(mask)[0]:
            word_id = word_id.item()
            for idx in mapping[word_id]:
                new_labels[idx] = labels[idx]
                input_ids[idx] = tokenizer.mask_token_id

    return default_data_collator(features),`,highlighted:`<span class="hljs-keyword">import</span> collections
<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np

<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> default_data_collator

wwm_probability = <span class="hljs-number">0.2</span>


<span class="hljs-keyword">def</span> <span class="hljs-title function_">whole_word_masking_data_collator</span>(<span class="hljs-params">features</span>):
    <span class="hljs-keyword">for</span> feature <span class="hljs-keyword">in</span> features:
        word_ids = feature.pop(<span class="hljs-string">&quot;word_ids&quot;</span>)

        <span class="hljs-comment"># Create a map between words and corresponding token indices</span>
        mapping = collections.defaultdict(<span class="hljs-built_in">list</span>)
        current_word_index = -<span class="hljs-number">1</span>
        current_word = <span class="hljs-literal">None</span>
        <span class="hljs-keyword">for</span> idx, word_id <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(word_ids):
            <span class="hljs-keyword">if</span> word_id <span class="hljs-keyword">is</span> <span class="hljs-keyword">not</span> <span class="hljs-literal">None</span>:
                <span class="hljs-keyword">if</span> word_id != current_word:
                    current_word = word_id
                    current_word_index += <span class="hljs-number">1</span>
                mapping[current_word_index].append(idx)

        <span class="hljs-comment"># Randomly mask words</span>
        mask = np.random.binomial(<span class="hljs-number">1</span>, wwm_probability, (<span class="hljs-built_in">len</span>(mapping),))
        input_ids = feature[<span class="hljs-string">&quot;input_ids&quot;</span>]
        labels = feature[<span class="hljs-string">&quot;labels&quot;</span>]
        new_labels = [-<span class="hljs-number">100</span>] * <span class="hljs-built_in">len</span>(labels)
        <span class="hljs-keyword">for</span> word_id <span class="hljs-keyword">in</span> np.where(mask)[<span class="hljs-number">0</span>]:
            word_id = word_id.item()
            <span class="hljs-keyword">for</span> idx <span class="hljs-keyword">in</span> mapping[word_id]:
                new_labels[idx] = labels[idx]
                input_ids[idx] = tokenizer.mask_token_id

    <span class="hljs-keyword">return</span> default_data_collator(features)`}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function Pu(C){let i,f,d,y,T,k,b,q,g,D,L;return{c(){i=r("p"),f=a("\u270F\uFE0F "),d=r("strong"),y=a("Try it out!"),T=a(" Run the code snippet above several times to see the random masking happen in front of your very eyes! Also replace the "),k=r("code"),b=a("tokenizer.decode()"),q=a(" method with "),g=r("code"),D=a("tokenizer.convert_ids_to_tokens()"),L=a(" to see that the tokens from a given word are always masked together.")},l(O){i=p(O,"P",{});var P=h(i);f=o(P,"\u270F\uFE0F "),d=p(P,"STRONG",{});var N=h(d);y=o(N,"Try it out!"),N.forEach(s),T=o(P," Run the code snippet above several times to see the random masking happen in front of your very eyes! Also replace the "),k=p(P,"CODE",{});var W=h(k);b=o(W,"tokenizer.decode()"),W.forEach(s),q=o(P," method with "),g=p(P,"CODE",{});var F=h(g);D=o(F,"tokenizer.convert_ids_to_tokens()"),F.forEach(s),L=o(P," to see that the tokens from a given word are always masked together."),P.forEach(s)},m(O,P){l(O,i,P),t(i,f),t(i,d),t(d,y),t(i,T),t(i,k),t(k,b),t(i,q),t(i,g),t(g,D),t(i,L)},d(O){O&&s(i)}}}function Su(C){let i,f,d,y,T,k,b,q,g,D,L,O,P,N,W,F,H,B,v,R,U,Y,V,I,qe,pe,oe,G,fe,De,ne,Z,he,_e,ee,Ce,le,ge,Ie,we,de,Me,se,Ee,ke,ce,Te,ue,ae,be,me,ye,ve,ie,K,J,Ne;return b=new A({props:{codee:`from transformers import TrainingArguments

batch_size = 64
# Show the training loss with every epoch
logging_steps = len(downsampled_dataset["train"]) // batch_size
model_name = model_checkpoint.split("/")[-1]

training_args = TrainingArguments(
    output_dir=f"{model_name}-finetuned-imdb",
    overwrite_output_dir=True,
    evaluation_strategy="epoch",
    learning_rate=2e-5,
    weight_decay=0.01,
    per_device_train_batch_size=batch_size,
    per_device_eval_batch_size=batch_size,
    push_to_hub=True,
    fp16=True,
    logging_steps=logging_steps,
),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrainingArguments

batch_size = <span class="hljs-number">64</span>
<span class="hljs-comment"># Show the training loss with every epoch</span>
logging_steps = <span class="hljs-built_in">len</span>(downsampled_dataset[<span class="hljs-string">&quot;train&quot;</span>]) // batch_size
model_name = model_checkpoint.split(<span class="hljs-string">&quot;/&quot;</span>)[-<span class="hljs-number">1</span>]

training_args = TrainingArguments(
    output_dir=<span class="hljs-string">f&quot;<span class="hljs-subst">{model_name}</span>-finetuned-imdb&quot;</span>,
    overwrite_output_dir=<span class="hljs-literal">True</span>,
    evaluation_strategy=<span class="hljs-string">&quot;epoch&quot;</span>,
    learning_rate=<span class="hljs-number">2e-5</span>,
    weight_decay=<span class="hljs-number">0.01</span>,
    per_device_train_batch_size=batch_size,
    per_device_eval_batch_size=batch_size,
    push_to_hub=<span class="hljs-literal">True</span>,
    fp16=<span class="hljs-literal">True</span>,
    logging_steps=logging_steps,
)`}}),Te=new A({props:{codee:`from transformers import Trainer

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=downsampled_dataset["train"],
    eval_dataset=downsampled_dataset["test"],
    data_collator=data_collator,
),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Trainer

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=downsampled_dataset[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=downsampled_dataset[<span class="hljs-string">&quot;test&quot;</span>],
    data_collator=data_collator,
)`}}),{c(){i=r("p"),f=a("Once we\u2019re logged in, we can specify the arguments for the "),d=r("code"),y=a("Trainer"),T=a(":"),k=u(),$(b.$$.fragment),q=u(),g=r("p"),D=a("Here we tweaked a few of the default options, including "),L=r("code"),O=a("logging_steps"),P=a(" to ensure we track the training loss with each epoch. We\u2019ve also used "),N=r("code"),W=a("fp16=True"),F=a(" to enable mixed-precision training, which gives us another boost in speed."),H=u(),B=r("p"),v=a("Note that you can specify the name of the repository you want to push to with the "),R=r("code"),U=a("hub_model_id"),Y=a(" argument (in particular, you will have to use this argument to push to an organization). For instance, when we pushed the model to the "),V=r("a"),I=r("code"),qe=a("huggingface-course"),pe=a(" organization"),oe=a(", we added "),G=r("code"),fe=a('hub_model_id="huggingface-course/distilbert-finetuned-imdb"'),De=a(" to "),ne=r("code"),Z=a("TrainingArguments"),he=a(". By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be "),_e=r("code"),ee=a('"lewtun/distilbert-finetuned-imdb"'),Ce=a("."),le=u(),ge=r("p"),Ie=a("We now have all the ingredients to instantiate the "),we=r("code"),de=a("Trainer"),Me=a(". Here we just use the standard "),se=r("code"),Ee=a("data_collator"),ke=a(", but you can try the whole word masking collator and compare the results as an exercise:"),ce=u(),$(Te.$$.fragment),ue=u(),ae=r("p"),be=a("We\u2019re now ready to run "),me=r("code"),ye=a("trainer.train()"),ve=a(" \u2014 but before doing so let\u2019s briefly look at "),ie=r("em"),K=a("perplexity"),J=a(", which is a common metric to evaluate the performance of language models."),this.h()},l(M){i=p(M,"P",{});var Q=h(i);f=o(Q,"Once we\u2019re logged in, we can specify the arguments for the "),d=p(Q,"CODE",{});var Oe=h(d);y=o(Oe,"Trainer"),Oe.forEach(s),T=o(Q,":"),Q.forEach(s),k=m(M),j(b.$$.fragment,M),q=m(M),g=p(M,"P",{});var Ke=h(g);D=o(Ke,"Here we tweaked a few of the default options, including "),L=p(Ke,"CODE",{});var $e=h(L);O=o($e,"logging_steps"),$e.forEach(s),P=o(Ke," to ensure we track the training loss with each epoch. We\u2019ve also used "),N=p(Ke,"CODE",{});var re=h(N);W=o(re,"fp16=True"),re.forEach(s),F=o(Ke," to enable mixed-precision training, which gives us another boost in speed."),Ke.forEach(s),H=m(M),B=p(M,"P",{});var te=h(B);v=o(te,"Note that you can specify the name of the repository you want to push to with the "),R=p(te,"CODE",{});var Xe=h(R);U=o(Xe,"hub_model_id"),Xe.forEach(s),Y=o(te," argument (in particular, you will have to use this argument to push to an organization). For instance, when we pushed the model to the "),V=p(te,"A",{href:!0,rel:!0});var je=h(V);I=p(je,"CODE",{});var We=h(I);qe=o(We,"huggingface-course"),We.forEach(s),pe=o(je," organization"),je.forEach(s),oe=o(te,", we added "),G=p(te,"CODE",{});var it=h(G);fe=o(it,'hub_model_id="huggingface-course/distilbert-finetuned-imdb"'),it.forEach(s),De=o(te," to "),ne=p(te,"CODE",{});var Ge=h(ne);Z=o(Ge,"TrainingArguments"),Ge.forEach(s),he=o(te,". By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be "),_e=p(te,"CODE",{});var X=h(_e);ee=o(X,'"lewtun/distilbert-finetuned-imdb"'),X.forEach(s),Ce=o(te,"."),te.forEach(s),le=m(M),ge=p(M,"P",{});var Le=h(ge);Ie=o(Le,"We now have all the ingredients to instantiate the "),we=p(Le,"CODE",{});var ze=h(we);de=o(ze,"Trainer"),ze.forEach(s),Me=o(Le,". Here we just use the standard "),se=p(Le,"CODE",{});var St=h(se);Ee=o(St,"data_collator"),St.forEach(s),ke=o(Le,", but you can try the whole word masking collator and compare the results as an exercise:"),Le.forEach(s),ce=m(M),j(Te.$$.fragment,M),ue=m(M),ae=p(M,"P",{});var Ue=h(ae);be=o(Ue,"We\u2019re now ready to run "),me=p(Ue,"CODE",{});var Re=h(me);ye=o(Re,"trainer.train()"),Re.forEach(s),ve=o(Ue," \u2014 but before doing so let\u2019s briefly look at "),ie=p(Ue,"EM",{});var at=h(ie);K=o(at,"perplexity"),at.forEach(s),J=o(Ue,", which is a common metric to evaluate the performance of language models."),Ue.forEach(s),this.h()},h(){z(V,"href","https://huggingface.co/huggingface-course"),z(V,"rel","nofollow")},m(M,Q){l(M,i,Q),t(i,f),t(i,d),t(d,y),t(i,T),l(M,k,Q),x(b,M,Q),l(M,q,Q),l(M,g,Q),t(g,D),t(g,L),t(L,O),t(g,P),t(g,N),t(N,W),t(g,F),l(M,H,Q),l(M,B,Q),t(B,v),t(B,R),t(R,U),t(B,Y),t(B,V),t(V,I),t(I,qe),t(V,pe),t(B,oe),t(B,G),t(G,fe),t(B,De),t(B,ne),t(ne,Z),t(B,he),t(B,_e),t(_e,ee),t(B,Ce),l(M,le,Q),l(M,ge,Q),t(ge,Ie),t(ge,we),t(we,de),t(ge,Me),t(ge,se),t(se,Ee),t(ge,ke),l(M,ce,Q),x(Te,M,Q),l(M,ue,Q),l(M,ae,Q),t(ae,be),t(ae,me),t(me,ye),t(ae,ve),t(ae,ie),t(ie,K),t(ae,J),Ne=!0},i(M){Ne||(_(b.$$.fragment,M),_(Te.$$.fragment,M),Ne=!0)},o(M){w(b.$$.fragment,M),w(Te.$$.fragment,M),Ne=!1},d(M){M&&s(i),M&&s(k),E(b,M),M&&s(q),M&&s(g),M&&s(H),M&&s(B),M&&s(le),M&&s(ge),M&&s(ce),E(Te,M),M&&s(ue),M&&s(ae)}}}function Cu(C){let i,f,d,y,T,k,b,q,g,D,L,O,P,N,W,F,H,B,v,R,U,Y,V,I,qe,pe,oe,G,fe,De,ne,Z,he,_e,ee,Ce,le,ge,Ie,we,de,Me,se,Ee,ke,ce,Te,ue,ae,be,me,ye,ve,ie;return b=new A({props:{codee:`tf_train_dataset = downsampled_dataset["train"].to_tf_dataset(
    columns=["input_ids", "attention_mask", "labels"],
    collate_fn=data_collator,
    shuffle=True,
    batch_size=32,
)

tf_eval_dataset = downsampled_dataset["test"].to_tf_dataset(
    columns=["input_ids", "attention_mask", "labels"],
    collate_fn=data_collator,
    shuffle=False,
    batch_size=32,
),`,highlighted:`tf_train_dataset = downsampled_dataset[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>],
    collate_fn=data_collator,
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=<span class="hljs-number">32</span>,
)

tf_eval_dataset = downsampled_dataset[<span class="hljs-string">&quot;test&quot;</span>].to_tf_dataset(
    columns=[<span class="hljs-string">&quot;input_ids&quot;</span>, <span class="hljs-string">&quot;attention_mask&quot;</span>, <span class="hljs-string">&quot;labels&quot;</span>],
    collate_fn=data_collator,
    shuffle=<span class="hljs-literal">False</span>,
    batch_size=<span class="hljs-number">32</span>,
)`}}),Ee=new A({props:{codee:`from transformers import create_optimizer
from transformers.keras_callbacks import PushToHubCallback
import tensorflow as tf

num_train_steps = len(tf_train_dataset)
optimizer, schedule = create_optimizer(
    init_lr=2e-5,
    num_warmup_steps=1_000,
    num_train_steps=num_train_steps,
    weight_decay_rate=0.01,
)
model.compile(optimizer=optimizer)

# Train in mixed-precision float16
tf.keras.mixed_precision.set_global_policy("mixed_float16")

callback = PushToHubCallback(
    output_dir=f"{model_name}-finetuned-imdb", tokenizer=tokenizer
),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
<span class="hljs-keyword">from</span> transformers.keras_callbacks <span class="hljs-keyword">import</span> PushToHubCallback
<span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

num_train_steps = <span class="hljs-built_in">len</span>(tf_train_dataset)
optimizer, schedule = create_optimizer(
    init_lr=<span class="hljs-number">2e-5</span>,
    num_warmup_steps=<span class="hljs-number">1_000</span>,
    num_train_steps=num_train_steps,
    weight_decay_rate=<span class="hljs-number">0.01</span>,
)
model.<span class="hljs-built_in">compile</span>(optimizer=optimizer)

<span class="hljs-comment"># Train in mixed-precision float16</span>
tf.keras.mixed_precision.set_global_policy(<span class="hljs-string">&quot;mixed_float16&quot;</span>)

callback = PushToHubCallback(
    output_dir=<span class="hljs-string">f&quot;<span class="hljs-subst">{model_name}</span>-finetuned-imdb&quot;</span>, tokenizer=tokenizer
)`}}),{c(){i=r("p"),f=a("Once we\u2019re logged in, we can create our "),d=r("code"),y=a("tf.data"),T=a(" datasets. We\u2019ll just use the standard data collator here, but you can also try the whole word masking collator and compare the results as an exercise:"),k=u(),$(b.$$.fragment),q=u(),g=r("p"),D=a("Next, we set up our training hyperparameters and compile our model. We use the "),L=r("code"),O=a("create_optimizer()"),P=a(" function from the \u{1F917} Transformers library, which gives us an "),N=r("code"),W=a("AdamW"),F=a(" optimizer with linear learning rate decay. We also use the model\u2019s built-in loss, which is the default when no loss is specified as an argument to "),H=r("code"),B=a("compile()"),v=a(", and we set the training precision to "),R=r("code"),U=a('"mixed_float16"'),Y=a(". Note that if you\u2019re using a Colab GPU or other GPU that does not have accelerated float16 support, you should probably comment out that line."),V=u(),I=r("p"),qe=a("In addition, we set up a "),pe=r("code"),oe=a("PushToHubCallback"),G=a(" that will save the model to the Hub after each epoch. You can specify the name of the repository you want to push to with the "),fe=r("code"),De=a("hub_model_id"),ne=a(" argument (in particular, you will have to use this argument to push to an organization). For instance, to push the model to the "),Z=r("a"),he=r("code"),_e=a("huggingface-course"),ee=a(" organization"),Ce=a(", we added "),le=r("code"),ge=a('hub_model_id="huggingface-course/distilbert-finetuned-imdb"'),Ie=a(". By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be "),we=r("code"),de=a('"lewtun/distilbert-finetuned-imdb"'),Me=a("."),se=u(),$(Ee.$$.fragment),ke=u(),ce=r("p"),Te=a("We\u2019re now ready to run "),ue=r("code"),ae=a("model.fit()"),be=a(" \u2014 but before doing so let\u2019s briefly look at "),me=r("em"),ye=a("perplexity"),ve=a(", which is a common metric to evaluate the performance of language models."),this.h()},l(K){i=p(K,"P",{});var J=h(i);f=o(J,"Once we\u2019re logged in, we can create our "),d=p(J,"CODE",{});var Ne=h(d);y=o(Ne,"tf.data"),Ne.forEach(s),T=o(J," datasets. We\u2019ll just use the standard data collator here, but you can also try the whole word masking collator and compare the results as an exercise:"),J.forEach(s),k=m(K),j(b.$$.fragment,K),q=m(K),g=p(K,"P",{});var M=h(g);D=o(M,"Next, we set up our training hyperparameters and compile our model. We use the "),L=p(M,"CODE",{});var Q=h(L);O=o(Q,"create_optimizer()"),Q.forEach(s),P=o(M," function from the \u{1F917} Transformers library, which gives us an "),N=p(M,"CODE",{});var Oe=h(N);W=o(Oe,"AdamW"),Oe.forEach(s),F=o(M," optimizer with linear learning rate decay. We also use the model\u2019s built-in loss, which is the default when no loss is specified as an argument to "),H=p(M,"CODE",{});var Ke=h(H);B=o(Ke,"compile()"),Ke.forEach(s),v=o(M,", and we set the training precision to "),R=p(M,"CODE",{});var $e=h(R);U=o($e,'"mixed_float16"'),$e.forEach(s),Y=o(M,". Note that if you\u2019re using a Colab GPU or other GPU that does not have accelerated float16 support, you should probably comment out that line."),M.forEach(s),V=m(K),I=p(K,"P",{});var re=h(I);qe=o(re,"In addition, we set up a "),pe=p(re,"CODE",{});var te=h(pe);oe=o(te,"PushToHubCallback"),te.forEach(s),G=o(re," that will save the model to the Hub after each epoch. You can specify the name of the repository you want to push to with the "),fe=p(re,"CODE",{});var Xe=h(fe);De=o(Xe,"hub_model_id"),Xe.forEach(s),ne=o(re," argument (in particular, you will have to use this argument to push to an organization). For instance, to push the model to the "),Z=p(re,"A",{href:!0,rel:!0});var je=h(Z);he=p(je,"CODE",{});var We=h(he);_e=o(We,"huggingface-course"),We.forEach(s),ee=o(je," organization"),je.forEach(s),Ce=o(re,", we added "),le=p(re,"CODE",{});var it=h(le);ge=o(it,'hub_model_id="huggingface-course/distilbert-finetuned-imdb"'),it.forEach(s),Ie=o(re,". By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be "),we=p(re,"CODE",{});var Ge=h(we);de=o(Ge,'"lewtun/distilbert-finetuned-imdb"'),Ge.forEach(s),Me=o(re,"."),re.forEach(s),se=m(K),j(Ee.$$.fragment,K),ke=m(K),ce=p(K,"P",{});var X=h(ce);Te=o(X,"We\u2019re now ready to run "),ue=p(X,"CODE",{});var Le=h(ue);ae=o(Le,"model.fit()"),Le.forEach(s),be=o(X," \u2014 but before doing so let\u2019s briefly look at "),me=p(X,"EM",{});var ze=h(me);ye=o(ze,"perplexity"),ze.forEach(s),ve=o(X,", which is a common metric to evaluate the performance of language models."),X.forEach(s),this.h()},h(){z(Z,"href","https://huggingface.co/huggingface-course"),z(Z,"rel","nofollow")},m(K,J){l(K,i,J),t(i,f),t(i,d),t(d,y),t(i,T),l(K,k,J),x(b,K,J),l(K,q,J),l(K,g,J),t(g,D),t(g,L),t(L,O),t(g,P),t(g,N),t(N,W),t(g,F),t(g,H),t(H,B),t(g,v),t(g,R),t(R,U),t(g,Y),l(K,V,J),l(K,I,J),t(I,qe),t(I,pe),t(pe,oe),t(I,G),t(I,fe),t(fe,De),t(I,ne),t(I,Z),t(Z,he),t(he,_e),t(Z,ee),t(I,Ce),t(I,le),t(le,ge),t(I,Ie),t(I,we),t(we,de),t(I,Me),l(K,se,J),x(Ee,K,J),l(K,ke,J),l(K,ce,J),t(ce,Te),t(ce,ue),t(ue,ae),t(ce,be),t(ce,me),t(me,ye),t(ce,ve),ie=!0},i(K){ie||(_(b.$$.fragment,K),_(Ee.$$.fragment,K),ie=!0)},o(K){w(b.$$.fragment,K),w(Ee.$$.fragment,K),ie=!1},d(K){K&&s(i),K&&s(k),E(b,K),K&&s(q),K&&s(g),K&&s(V),K&&s(I),K&&s(se),E(Ee,K),K&&s(ke),K&&s(ce)}}}function Ou(C){let i,f,d,y,T,k,b,q;return b=new A({props:{codee:`import math

eval_loss = model.evaluate(tf_eval_dataset)
print(f"Perplexity: {math.exp(eval_loss):.2f}"),`,highlighted:`<span class="hljs-keyword">import</span> math

eval_loss = model.evaluate(tf_eval_dataset)
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Perplexity: <span class="hljs-subst">{math.exp(eval_loss):<span class="hljs-number">.2</span>f}</span>&quot;</span>)`}}),{c(){i=r("p"),f=a("Assuming our test set consists mostly of sentences that are grammatically correct, then one way to measure the quality of our language model is to calculate the probabilities it assigns to the next word in all the sentences of the test set. High probabilities indicates that the model indicates that the model is not \u201Csurprised\u201D or \u201Cperplexed\u201D by the unseen examples, and suggests it has learned the basic patterns of grammar in the language. There are various mathematical definitions of perplexity, but the one we\u2019ll use defines it as the exponential of the cross-entropy loss. Thus, we can calculate the perplexity of our pretrained model by using the "),d=r("code"),y=a("model.evaluate()"),T=a(" method to compute the cross-entropy loss on the test set and then taking the exponential of the result:"),k=u(),$(b.$$.fragment)},l(g){i=p(g,"P",{});var D=h(i);f=o(D,"Assuming our test set consists mostly of sentences that are grammatically correct, then one way to measure the quality of our language model is to calculate the probabilities it assigns to the next word in all the sentences of the test set. High probabilities indicates that the model indicates that the model is not \u201Csurprised\u201D or \u201Cperplexed\u201D by the unseen examples, and suggests it has learned the basic patterns of grammar in the language. There are various mathematical definitions of perplexity, but the one we\u2019ll use defines it as the exponential of the cross-entropy loss. Thus, we can calculate the perplexity of our pretrained model by using the "),d=p(D,"CODE",{});var L=h(d);y=o(L,"model.evaluate()"),L.forEach(s),T=o(D," method to compute the cross-entropy loss on the test set and then taking the exponential of the result:"),D.forEach(s),k=m(g),j(b.$$.fragment,g)},m(g,D){l(g,i,D),t(i,f),t(i,d),t(d,y),t(i,T),l(g,k,D),x(b,g,D),q=!0},i(g){q||(_(b.$$.fragment,g),q=!0)},o(g){w(b.$$.fragment,g),q=!1},d(g){g&&s(i),g&&s(k),E(b,g)}}}function Ku(C){let i,f,d,y,T,k,b,q;return b=new A({props:{codee:`import math

eval_results = trainer.evaluate()
print(f">>> Perplexity: {math.exp(eval_results['eval_loss']):.2f}"),`,highlighted:`<span class="hljs-keyword">import</span> math

eval_results = trainer.evaluate()
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&gt;&gt;&gt; Perplexity: <span class="hljs-subst">{math.exp(eval_results[<span class="hljs-string">&#x27;eval_loss&#x27;</span>]):<span class="hljs-number">.2</span>f}</span>&quot;</span>)`}}),{c(){i=r("p"),f=a("Assuming our test set consists mostly of sentences that are grammatically correct, then one way to measure the quality of our language model is to calculate the probabilities it assigns to the next word in all the sentences of the test set. High probabilities indicates that the model is not \u201Csurprised\u201D or \u201Cperplexed\u201D by the unseen examples, and suggests it has learned the basic patterns of grammar in the language. There are various mathematical definitions of perplexity, but the one we\u2019ll use defines it as the exponential of the cross-entropy loss. Thus, we can calculate the perplexity of our pretrained model by using the "),d=r("code"),y=a("Trainer.evaluate()"),T=a(" function to compute the cross-entropy loss on the test set and then taking the exponential of the result:"),k=u(),$(b.$$.fragment)},l(g){i=p(g,"P",{});var D=h(i);f=o(D,"Assuming our test set consists mostly of sentences that are grammatically correct, then one way to measure the quality of our language model is to calculate the probabilities it assigns to the next word in all the sentences of the test set. High probabilities indicates that the model is not \u201Csurprised\u201D or \u201Cperplexed\u201D by the unseen examples, and suggests it has learned the basic patterns of grammar in the language. There are various mathematical definitions of perplexity, but the one we\u2019ll use defines it as the exponential of the cross-entropy loss. Thus, we can calculate the perplexity of our pretrained model by using the "),d=p(D,"CODE",{});var L=h(d);y=o(L,"Trainer.evaluate()"),L.forEach(s),T=o(D," function to compute the cross-entropy loss on the test set and then taking the exponential of the result:"),D.forEach(s),k=m(g),j(b.$$.fragment,g)},m(g,D){l(g,i,D),t(i,f),t(i,d),t(d,y),t(i,T),l(g,k,D),x(b,g,D),q=!0},i(g){q||(_(b.$$.fragment,g),q=!0)},o(g){w(b.$$.fragment,g),q=!1},d(g){g&&s(i),g&&s(k),E(b,g)}}}function Lu(C){let i,f;return i=new A({props:{codee:"model.fit(tf_train_dataset, validation_data=tf_eval_dataset, callbacks=[callback]),",highlighted:"model.fit(tf_train_dataset, validation_data=tf_eval_dataset, callbacks=[callback])"}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function Ru(C){let i,f;return i=new A({props:{codee:"trainer.train(),",highlighted:"trainer.train()"}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function Nu(C){let i,f;return i=new A({props:{codee:`eval_loss = model.evaluate(tf_eval_dataset)
print(f"Perplexity: {math.exp(eval_loss):.2f}"),`,highlighted:`eval_loss = model.evaluate(tf_eval_dataset)
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Perplexity: <span class="hljs-subst">{math.exp(eval_loss):<span class="hljs-number">.2</span>f}</span>&quot;</span>)`}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function Wu(C){let i,f;return i=new A({props:{codee:`eval_results = trainer.evaluate()
print(f">>> Perplexity: {math.exp(eval_results['eval_loss']):.2f}"),`,highlighted:`eval_results = trainer.evaluate()
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&gt;&gt;&gt; Perplexity: <span class="hljs-subst">{math.exp(eval_results[<span class="hljs-string">&#x27;eval_loss&#x27;</span>]):<span class="hljs-number">.2</span>f}</span>&quot;</span>)`}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function pu(C){let i,f,d,y,T;return y=new A({props:{codee:"trainer.push_to_hub(),",highlighted:"trainer.push_to_hub()"}}),{c(){i=r("p"),f=a("Once training is finished, we can push the model card with the training information to the Hub (the checkpoints are saved during training itself):"),d=u(),$(y.$$.fragment)},l(k){i=p(k,"P",{});var b=h(i);f=o(b,"Once training is finished, we can push the model card with the training information to the Hub (the checkpoints are saved during training itself):"),b.forEach(s),d=m(k),j(y.$$.fragment,k)},m(k,b){l(k,i,b),t(i,f),l(k,d,b),x(y,k,b),T=!0},i(k){T||(_(y.$$.fragment,k),T=!0)},o(k){w(y.$$.fragment,k),T=!1},d(k){k&&s(i),k&&s(d),E(y,k)}}}function Fu(C){let i,f,d,y,T;return{c(){i=r("p"),f=a("\u270F\uFE0F "),d=r("strong"),y=a("Your turn!"),T=a(" Run the training above after changing the data collator to the whole word masking collator. Do you get better results?")},l(k){i=p(k,"P",{});var b=h(i);f=o(b,"\u270F\uFE0F "),d=p(b,"STRONG",{});var q=h(d);y=o(q,"Your turn!"),q.forEach(s),T=o(b," Run the training above after changing the data collator to the whole word masking collator. Do you get better results?"),b.forEach(s)},m(k,b){l(k,i,b),t(i,f),t(i,d),t(d,y),t(i,T)},d(k){k&&s(i)}}}function hu(C){let i,f,d,y,T,k,b,q,g,D,L,O,P,N,W,F,H,B,v,R,U,Y,V,I,qe,pe,oe,G,fe,De,ne,Z,he,_e,ee,Ce,le,ge,Ie,we,de,Me,se,Ee,ke,ce,Te,ue,ae,be,me,ye,ve,ie,K,J,Ne,M,Q,Oe,Ke,$e,re,te,Xe,je,We,it,Ge,X,Le,ze,St,Ue,Re,at,Ct,Ns,rt,ot,hs,wt,es,Ae,Ye,pt,Ot,Ws,ts,Ve,ss,xe,Fs,Kt,kt,ds,Je,cs,Lt,bt,us;return b=new Rs({}),he=new A({props:{codee:`def insert_random_mask(batch):
    features = [dict(zip(batch, t)) for t in zip(*batch.values())]
    masked_inputs = data_collator(features)
    # Create a new "masked" column for each column in the dataset
    return {"masked_" + k: v.numpy() for k, v in masked_inputs.items()},`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">insert_random_mask</span>(<span class="hljs-params">batch</span>):
    features = [<span class="hljs-built_in">dict</span>(<span class="hljs-built_in">zip</span>(batch, t)) <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(*batch.values())]
    masked_inputs = data_collator(features)
    <span class="hljs-comment"># Create a new &quot;masked&quot; column for each column in the dataset</span>
    <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;masked_&quot;</span> + k: v.numpy() <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> masked_inputs.items()}`}}),de=new A({props:{codee:`downsampled_dataset = downsampled_dataset.remove_columns(["word_ids"])
eval_dataset = downsampled_dataset["test"].map(
    insert_random_mask,
    batched=True,
    remove_columns=downsampled_dataset["test"].column_names,
)
eval_dataset = eval_dataset.rename_columns(
    {
        "masked_input_ids": "input_ids",
        "masked_attention_mask": "attention_mask",
        "masked_labels": "labels",
    }
),`,highlighted:`downsampled_dataset = downsampled_dataset.remove_columns([<span class="hljs-string">&quot;word_ids&quot;</span>])
eval_dataset = downsampled_dataset[<span class="hljs-string">&quot;test&quot;</span>].<span class="hljs-built_in">map</span>(
    insert_random_mask,
    batched=<span class="hljs-literal">True</span>,
    remove_columns=downsampled_dataset[<span class="hljs-string">&quot;test&quot;</span>].column_names,
)
eval_dataset = eval_dataset.rename_columns(
    {
        <span class="hljs-string">&quot;masked_input_ids&quot;</span>: <span class="hljs-string">&quot;input_ids&quot;</span>,
        <span class="hljs-string">&quot;masked_attention_mask&quot;</span>: <span class="hljs-string">&quot;attention_mask&quot;</span>,
        <span class="hljs-string">&quot;masked_labels&quot;</span>: <span class="hljs-string">&quot;labels&quot;</span>,
    }
)`}}),ae=new A({props:{codee:`from torch.utils.data import DataLoader
from transformers import default_data_collator

batch_size = 64
train_dataloader = DataLoader(
    downsampled_dataset["train"],
    shuffle=True,
    batch_size=batch_size,
    collate_fn=data_collator,
)
eval_dataloader = DataLoader(
    eval_dataset, batch_size=batch_size, collate_fn=default_data_collator
),`,highlighted:`<span class="hljs-keyword">from</span> torch.utils.data <span class="hljs-keyword">import</span> DataLoader
<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> default_data_collator

batch_size = <span class="hljs-number">64</span>
train_dataloader = DataLoader(
    downsampled_dataset[<span class="hljs-string">&quot;train&quot;</span>],
    shuffle=<span class="hljs-literal">True</span>,
    batch_size=batch_size,
    collate_fn=data_collator,
)
eval_dataloader = DataLoader(
    eval_dataset, batch_size=batch_size, collate_fn=default_data_collator
)`}}),ie=new A({props:{codee:"model = AutoModelForMaskedLM.from_pretrained(model_checkpoint),",highlighted:'model = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">AutoModelForMaskedLM</span>.</span></span>from<span class="hljs-constructor">_pretrained(<span class="hljs-params">model_checkpoint</span>)</span>'}}),$e=new A({props:{codee:`from torch.optim import AdamW

optimizer = AdamW(model.parameters(), lr=5e-5),`,highlighted:`<span class="hljs-keyword">from</span> torch.optim <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)`}}),X=new A({props:{codee:`from accelerate import Accelerator

accelerator = Accelerator()
model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
),`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator()
model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`}}),Re=new A({props:{codee:`from transformers import get_scheduler

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
)`}}),ot=new A({props:{codee:`from huggingface_hub import get_full_repo_name

model_name = "distilbert-base-uncased-finetuned-imdb-accelerate"
repo_name = get_full_repo_name(model_name)
repo_name,`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_full_repo_name

model_name = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-imdb-accelerate&quot;</span>
repo_name = get_full_repo_name(model_name)
repo_name`}}),wt=new A({props:{codee:"'lewtun/distilbert-base-uncased-finetuned-imdb-accelerate',",highlighted:'<span class="hljs-string">&#x27;lewtun/distilbert-base-uncased-finetuned-imdb-accelerate&#x27;</span>'}}),Ve=new A({props:{codee:`from huggingface_hub import Repository

output_dir = model_name
repo = Repository(output_dir, clone_from=repo_name),`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository

output_dir = model_name
repo = Repository(output_dir, clone_from=repo_name)`}}),kt=new A({props:{codee:`from tqdm.auto import tqdm
import torch
import math

progress_bar = tqdm(range(num_training_steps))

for epoch in range(num_train_epochs):
    # Training
    model.train()
    for batch in train_dataloader:
        outputs = model(**batch)
        loss = outputs.loss
        accelerator.backward(loss)

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(1)

    # Evaluation
    model.eval()
    losses = []
    for step, batch in enumerate(eval_dataloader):
        with torch.no_grad():
            outputs = model(**batch)

        loss = outputs.loss
        losses.append(accelerator.gather(loss.repeat(batch_size)))

    losses = torch.cat(losses)
    losses = losses[: len(eval_dataset)]
    try:
        perplexity = math.exp(torch.mean(losses))
    except OverflowError:
        perplexity = float("inf")

    print(f">>> Epoch {epoch}: Perplexity: {perplexity}")

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
<span class="hljs-keyword">import</span> math

progress_bar = tqdm(<span class="hljs-built_in">range</span>(num_training_steps))

<span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_train_epochs):
    <span class="hljs-comment"># Training</span>
    model.train()
    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
        outputs = model(**batch)
        loss = outputs.loss
        accelerator.backward(loss)

        optimizer.step()
        lr_scheduler.step()
        optimizer.zero_grad()
        progress_bar.update(<span class="hljs-number">1</span>)

    <span class="hljs-comment"># Evaluation</span>
    model.<span class="hljs-built_in">eval</span>()
    losses = []
    <span class="hljs-keyword">for</span> step, batch <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(eval_dataloader):
        <span class="hljs-keyword">with</span> torch.no_grad():
            outputs = model(**batch)

        loss = outputs.loss
        losses.append(accelerator.gather(loss.repeat(batch_size)))

    losses = torch.cat(losses)
    losses = losses[: <span class="hljs-built_in">len</span>(eval_dataset)]
    <span class="hljs-keyword">try</span>:
        perplexity = math.exp(torch.mean(losses))
    <span class="hljs-keyword">except</span> OverflowError:
        perplexity = <span class="hljs-built_in">float</span>(<span class="hljs-string">&quot;inf&quot;</span>)

    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&gt;&gt;&gt; Epoch <span class="hljs-subst">{epoch}</span>: Perplexity: <span class="hljs-subst">{perplexity}</span>&quot;</span>)

    <span class="hljs-comment"># Save and upload</span>
    accelerator.wait_for_everyone()
    unwrapped_model = accelerator.unwrap_model(model)
    unwrapped_model.save_pretrained(output_dir, save_function=accelerator.save)
    <span class="hljs-keyword">if</span> accelerator.is_main_process:
        tokenizer.save_pretrained(output_dir)
        repo.push_to_hub(
            commit_message=<span class="hljs-string">f&quot;Training in progress epoch <span class="hljs-subst">{epoch}</span>&quot;</span>, blocking=<span class="hljs-literal">False</span>
        )`}}),Je=new A({props:{codee:`Epoch 0: Perplexity: 11.397545307900472
Epoch 1: Perplexity: 10.904909330983092
Epoch 2: Perplexity: 10.729503505340409,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>Epoch <span class="hljs-number">0</span>: Perplexity: <span class="hljs-number">11.397545307900472</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>Epoch <span class="hljs-number">1</span>: Perplexity: <span class="hljs-number">10.904909330983092</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>Epoch <span class="hljs-number">2</span>: Perplexity: <span class="hljs-number">10.729503505340409</span>`}}),{c(){i=r("p"),f=a("In our use case we didn\u2019t need to do anything special with the training loop, but in some cases you might need to implement some custom logic. For these applications, you can use \u{1F917} Accelerate \u2014 let\u2019s take a look!"),d=u(),y=r("h2"),T=r("a"),k=r("span"),$(b.$$.fragment),q=u(),g=r("span"),D=a("Fine-tuning DistilBERT with \u{1F917} Accelerate"),L=u(),O=r("p"),P=a("As we saw with the "),N=r("code"),W=a("Trainer"),F=a(", fine-tuning a masked language model is very similar to the text classification example from "),H=r("a"),B=a("Chapter 3"),v=a(". In fact, the only subtlety is the use of a special data collator, and we\u2019ve already covered that earlier in this section!"),R=u(),U=r("p"),Y=a("However, we saw that "),V=r("code"),I=a("DataCollatorForLanguageModeling"),qe=a(" also applies random masking with each evaluation, so we\u2019ll see some fluctuations in our perplexity scores with each training run. One way to eliminate this source of randomness is to apply the masking "),pe=r("em"),oe=a("once"),G=a(" on the whole test set, and then use the default data collator in \u{1F917} Transformers to collect the batches during evaluation. To see how this works, let\u2019s implement a simple function that applies the masking on a batch, similar to our first encounter with "),fe=r("code"),De=a("DataCollatorForLanguageModeling"),ne=a(":"),Z=u(),$(he.$$.fragment),_e=u(),ee=r("p"),Ce=a("Next, we\u2019ll apply this function to our test set and drop the unmasked columns so we can replace them with the masked ones. You can use whole word masking by replacing the "),le=r("code"),ge=a("data_collator"),Ie=a(" above with the appropriate one, in which case you should remove the first line here:"),we=u(),$(de.$$.fragment),Me=u(),se=r("p"),Ee=a("We can then set up the dataloaders as usual, but we\u2019ll use the "),ke=r("code"),ce=a("default_data_collator"),Te=a(" from \u{1F917} Transformers for the evaluation set:"),ue=u(),$(ae.$$.fragment),be=u(),me=r("p"),ye=a("Form here, we follow the standard steps with \u{1F917} Accelerate. The first order of business is to load a fresh version of the pretrained model:"),ve=u(),$(ie.$$.fragment),K=u(),J=r("p"),Ne=a("Then we need to specify the optimizer; we\u2019ll use the standard "),M=r("code"),Q=a("AdamW"),Oe=a(":"),Ke=u(),$($e.$$.fragment),re=u(),te=r("p"),Xe=a("With these objects, we can now prepare everything for training with the "),je=r("code"),We=a("Accelerator"),it=a(" object:"),Ge=u(),$(X.$$.fragment),Le=u(),ze=r("p"),St=a("Now that our model, optimizer, and dataloaders are configured, we can specify the learning rate scheduler as follows:"),Ue=u(),$(Re.$$.fragment),at=u(),Ct=r("p"),Ns=a("There is just one last thing to do before training: create a model repository on the Hugging Face Hub! We can use the \u{1F917} Hub library to first generate the full name of our repo:"),rt=u(),$(ot.$$.fragment),hs=u(),$(wt.$$.fragment),es=u(),Ae=r("p"),Ye=a("then create and clone the repository using the "),pt=r("code"),Ot=a("Repository"),Ws=a(" class from \u{1F917} Hub:"),ts=u(),$(Ve.$$.fragment),ss=u(),xe=r("p"),Fs=a("With that done, it\u2019s just a simple matter of writing out the full training and evaluation loop:"),Kt=u(),$(kt.$$.fragment),ds=u(),$(Je.$$.fragment),cs=u(),Lt=r("p"),bt=a("Cool, we\u2019ve been able to evaluate perplexity with each epoch and ensure that multiple training runs are reproducible!"),this.h()},l(c){i=p(c,"P",{});var S=h(i);f=o(S,"In our use case we didn\u2019t need to do anything special with the training loop, but in some cases you might need to implement some custom logic. For these applications, you can use \u{1F917} Accelerate \u2014 let\u2019s take a look!"),S.forEach(s),d=m(c),y=p(c,"H2",{class:!0});var ms=h(y);T=p(ms,"A",{id:!0,class:!0,href:!0});var Qa=h(T);k=p(Qa,"SPAN",{});var Bs=h(k);j(b.$$.fragment,Bs),Bs.forEach(s),Qa.forEach(s),q=m(ms),g=p(ms,"SPAN",{});var Rt=h(g);D=o(Rt,"Fine-tuning DistilBERT with \u{1F917} Accelerate"),Rt.forEach(s),ms.forEach(s),L=m(c),O=p(c,"P",{});var yt=h(O);P=o(yt,"As we saw with the "),N=p(yt,"CODE",{});var as=h(N);W=o(as,"Trainer"),as.forEach(s),F=o(yt,", fine-tuning a masked language model is very similar to the text classification example from "),H=p(yt,"A",{href:!0});var Xa=h(H);B=o(Xa,"Chapter 3"),Xa.forEach(s),v=o(yt,". In fact, the only subtlety is the use of a special data collator, and we\u2019ve already covered that earlier in this section!"),yt.forEach(s),R=m(c),U=p(c,"P",{});var nt=h(U);Y=o(nt,"However, we saw that "),V=p(nt,"CODE",{});var Ze=h(V);I=o(Ze,"DataCollatorForLanguageModeling"),Ze.forEach(s),qe=o(nt," also applies random masking with each evaluation, so we\u2019ll see some fluctuations in our perplexity scores with each training run. One way to eliminate this source of randomness is to apply the masking "),pe=p(nt,"EM",{});var et=h(pe);oe=o(et,"once"),et.forEach(s),G=o(nt," on the whole test set, and then use the default data collator in \u{1F917} Transformers to collect the batches during evaluation. To see how this works, let\u2019s implement a simple function that applies the masking on a batch, similar to our first encounter with "),fe=p(nt,"CODE",{});var os=h(fe);De=o(os,"DataCollatorForLanguageModeling"),os.forEach(s),ne=o(nt,":"),nt.forEach(s),Z=m(c),j(he.$$.fragment,c),_e=m(c),ee=p(c,"P",{});var ht=h(ee);Ce=o(ht,"Next, we\u2019ll apply this function to our test set and drop the unmasked columns so we can replace them with the masked ones. You can use whole word masking by replacing the "),le=p(ht,"CODE",{});var Hs=h(le);ge=o(Hs,"data_collator"),Hs.forEach(s),Ie=o(ht," above with the appropriate one, in which case you should remove the first line here:"),ht.forEach(s),we=m(c),j(de.$$.fragment,c),Me=m(c),se=p(c,"P",{});var vt=h(se);Ee=o(vt,"We can then set up the dataloaders as usual, but we\u2019ll use the "),ke=p(vt,"CODE",{});var Za=h(ke);ce=o(Za,"default_data_collator"),Za.forEach(s),Te=o(vt," from \u{1F917} Transformers for the evaluation set:"),vt.forEach(s),ue=m(c),j(ae.$$.fragment,c),be=m(c),me=p(c,"P",{});var Is=h(me);ye=o(Is,"Form here, we follow the standard steps with \u{1F917} Accelerate. The first order of business is to load a fresh version of the pretrained model:"),Is.forEach(s),ve=m(c),j(ie.$$.fragment,c),K=m(c),J=p(c,"P",{});var tt=h(J);Ne=o(tt,"Then we need to specify the optimizer; we\u2019ll use the standard "),M=p(tt,"CODE",{});var $t=h(M);Q=o($t,"AdamW"),$t.forEach(s),Oe=o(tt,":"),tt.forEach(s),Ke=m(c),j($e.$$.fragment,c),re=m(c),te=p(c,"P",{});var Nt=h(te);Xe=o(Nt,"With these objects, we can now prepare everything for training with the "),je=p(Nt,"CODE",{});var Wt=h(je);We=o(Wt,"Accelerator"),Wt.forEach(s),it=o(Nt," object:"),Nt.forEach(s),Ge=m(c),j(X.$$.fragment,c),Le=m(c),ze=p(c,"P",{});var eo=h(ze);St=o(eo,"Now that our model, optimizer, and dataloaders are configured, we can specify the learning rate scheduler as follows:"),eo.forEach(s),Ue=m(c),j(Re.$$.fragment,c),at=m(c),Ct=p(c,"P",{});var fs=h(Ct);Ns=o(fs,"There is just one last thing to do before training: create a model repository on the Hugging Face Hub! We can use the \u{1F917} Hub library to first generate the full name of our repo:"),fs.forEach(s),rt=m(c),j(ot.$$.fragment,c),hs=m(c),j(wt.$$.fragment,c),es=m(c),Ae=p(c,"P",{});var _s=h(Ae);Ye=o(_s,"then create and clone the repository using the "),pt=p(_s,"CODE",{});var Gs=h(pt);Ot=o(Gs,"Repository"),Gs.forEach(s),Ws=o(_s," class from \u{1F917} Hub:"),_s.forEach(s),ts=m(c),j(Ve.$$.fragment,c),ss=m(c),xe=p(c,"P",{});var lt=h(xe);Fs=o(lt,"With that done, it\u2019s just a simple matter of writing out the full training and evaluation loop:"),lt.forEach(s),Kt=m(c),j(kt.$$.fragment,c),ds=m(c),j(Je.$$.fragment,c),cs=m(c),Lt=p(c,"P",{});var to=h(Lt);bt=o(to,"Cool, we\u2019ve been able to evaluate perplexity with each epoch and ensure that multiple training runs are reproducible!"),to.forEach(s),this.h()},h(){z(T,"id","finetuning-distilbert-with-accelerate"),z(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(T,"href","#finetuning-distilbert-with-accelerate"),z(y,"class","relative group"),z(H,"href","/course/chapter3")},m(c,S){l(c,i,S),t(i,f),l(c,d,S),l(c,y,S),t(y,T),t(T,k),x(b,k,null),t(y,q),t(y,g),t(g,D),l(c,L,S),l(c,O,S),t(O,P),t(O,N),t(N,W),t(O,F),t(O,H),t(H,B),t(O,v),l(c,R,S),l(c,U,S),t(U,Y),t(U,V),t(V,I),t(U,qe),t(U,pe),t(pe,oe),t(U,G),t(U,fe),t(fe,De),t(U,ne),l(c,Z,S),x(he,c,S),l(c,_e,S),l(c,ee,S),t(ee,Ce),t(ee,le),t(le,ge),t(ee,Ie),l(c,we,S),x(de,c,S),l(c,Me,S),l(c,se,S),t(se,Ee),t(se,ke),t(ke,ce),t(se,Te),l(c,ue,S),x(ae,c,S),l(c,be,S),l(c,me,S),t(me,ye),l(c,ve,S),x(ie,c,S),l(c,K,S),l(c,J,S),t(J,Ne),t(J,M),t(M,Q),t(J,Oe),l(c,Ke,S),x($e,c,S),l(c,re,S),l(c,te,S),t(te,Xe),t(te,je),t(je,We),t(te,it),l(c,Ge,S),x(X,c,S),l(c,Le,S),l(c,ze,S),t(ze,St),l(c,Ue,S),x(Re,c,S),l(c,at,S),l(c,Ct,S),t(Ct,Ns),l(c,rt,S),x(ot,c,S),l(c,hs,S),x(wt,c,S),l(c,es,S),l(c,Ae,S),t(Ae,Ye),t(Ae,pt),t(pt,Ot),t(Ae,Ws),l(c,ts,S),x(Ve,c,S),l(c,ss,S),l(c,xe,S),t(xe,Fs),l(c,Kt,S),x(kt,c,S),l(c,ds,S),x(Je,c,S),l(c,cs,S),l(c,Lt,S),t(Lt,bt),us=!0},i(c){us||(_(b.$$.fragment,c),_(he.$$.fragment,c),_(de.$$.fragment,c),_(ae.$$.fragment,c),_(ie.$$.fragment,c),_($e.$$.fragment,c),_(X.$$.fragment,c),_(Re.$$.fragment,c),_(ot.$$.fragment,c),_(wt.$$.fragment,c),_(Ve.$$.fragment,c),_(kt.$$.fragment,c),_(Je.$$.fragment,c),us=!0)},o(c){w(b.$$.fragment,c),w(he.$$.fragment,c),w(de.$$.fragment,c),w(ae.$$.fragment,c),w(ie.$$.fragment,c),w($e.$$.fragment,c),w(X.$$.fragment,c),w(Re.$$.fragment,c),w(ot.$$.fragment,c),w(wt.$$.fragment,c),w(Ve.$$.fragment,c),w(kt.$$.fragment,c),w(Je.$$.fragment,c),us=!1},d(c){c&&s(i),c&&s(d),c&&s(y),E(b),c&&s(L),c&&s(O),c&&s(R),c&&s(U),c&&s(Z),E(he,c),c&&s(_e),c&&s(ee),c&&s(we),E(de,c),c&&s(Me),c&&s(se),c&&s(ue),E(ae,c),c&&s(be),c&&s(me),c&&s(ve),E(ie,c),c&&s(K),c&&s(J),c&&s(Ke),E($e,c),c&&s(re),c&&s(te),c&&s(Ge),E(X,c),c&&s(Le),c&&s(ze),c&&s(Ue),E(Re,c),c&&s(at),c&&s(Ct),c&&s(rt),E(ot,c),c&&s(hs),E(wt,c),c&&s(es),c&&s(Ae),c&&s(ts),E(Ve,c),c&&s(ss),c&&s(xe),c&&s(Kt),E(kt,c),c&&s(ds),E(Je,c),c&&s(cs),c&&s(Lt)}}}function Bu(C){let i,f,d,y,T,k,b,q;return{c(){i=r("p"),f=a("\u270F\uFE0F "),d=r("strong"),y=a("Try it out!"),T=a(" To quantify the benefits of domain adaptation, fine-tune a classifier on the IMDb labels for both the pretrained and fine-tuned DistilBERT checkpoints. If you need a refresher on text classification, check out "),k=r("a"),b=a("Chapter 3"),q=a("."),this.h()},l(g){i=p(g,"P",{});var D=h(i);f=o(D,"\u270F\uFE0F "),d=p(D,"STRONG",{});var L=h(d);y=o(L,"Try it out!"),L.forEach(s),T=o(D," To quantify the benefits of domain adaptation, fine-tune a classifier on the IMDb labels for both the pretrained and fine-tuned DistilBERT checkpoints. If you need a refresher on text classification, check out "),k=p(D,"A",{href:!0});var O=h(k);b=o(O,"Chapter 3"),O.forEach(s),q=o(D,"."),D.forEach(s),this.h()},h(){z(k,"href","/course/chapter3")},m(g,D){l(g,i,D),t(i,f),t(i,d),t(d,y),t(i,T),t(i,k),t(k,b),t(i,q)},d(g){g&&s(i)}}}function Hu(C){let i,f,d,y,T,k,b,q,g,D,L,O,P,N,W,F,H,B,v,R,U,Y,V,I,qe,pe,oe,G,fe,De,ne,Z,he,_e,ee,Ce,le,ge,Ie,we,de,Me,se,Ee,ke,ce,Te,ue,ae,be,me,ye,ve,ie,K,J,Ne,M,Q,Oe,Ke,$e,re,te,Xe,je,We,it,Ge,X,Le,ze,St,Ue,Re,at,Ct,Ns,rt,ot,hs,wt,es,Ae,Ye,pt,Ot,Ws,ts,Ve,ss,xe,Fs,Kt,kt,ds,Je,cs,Lt,bt,us,c,S,ms,Qa,Bs,Rt,yt,as,Xa,nt,Ze,et,os,ht,Hs,vt,Za,Is,tt,$t,Nt,Wt,eo,fs,_s,Gs,lt,to,Us,Zi,er,Vo,tr,sr,ol,Ys,nl,Vs,ll,Fe,ar,Jo,or,nr,Qo,lr,ir,Xo,rr,pr,Zo,hr,dr,en,cr,ur,il,Js,rl,Qs,pl,Ft,mr,tn,fr,_r,sn,gr,wr,hl,gs,dl,ws,kr,so,br,yr,cl,ns,ks,an,Xs,vr,on,$r,ul,Zs,ml,ao,jr,fl,Be,xr,nn,Er,Tr,ln,zr,Ar,oo,qr,Dr,rn,Mr,Pr,pn,Sr,Cr,_l,ea,gl,ta,wl,dt,Or,hn,Kr,Lr,dn,Rr,Nr,cn,Wr,Fr,kl,bs,Br,un,Hr,Ir,bl,sa,yl,aa,vl,ys,Gr,mn,Ur,Yr,$l,vs,jl,no,Vr,xl,oa,El,$s,Tl,lo,Jr,zl,na,Al,la,ql,io,Qr,Dl,ia,Ml,ra,Pl,Bt,Xr,fn,Zr,ep,_n,tp,sp,Sl,pa,Cl,ha,Ol,ro,ap,Kl,js,da,op,gn,np,lp,ip,ca,rp,wn,pp,hp,Ll,po,dp,Rl,ua,Nl,st,cp,kn,up,mp,bn,fp,_p,yn,gp,wp,vn,kp,bp,Wl,Ht,yp,$n,vp,$p,jn,jp,xp,Fl,ma,Bl,fa,Hl,He,Ep,xn,Tp,zp,En,Ap,qp,Tn,Dp,Mp,zn,Pp,Sp,An,Cp,Op,Il,_a,Gl,ga,Ul,ho,Kp,Yl,wa,Vl,ka,Jl,ct,Lp,qn,Rp,Np,Dn,Wp,Fp,Mn,Bp,Hp,Ql,ls,xs,Pn,ba,Ip,ya,Gp,Sn,Up,Yp,Xl,ut,Vp,co,Jp,Qp,Cn,Xp,Zp,On,eh,th,Zl,va,ei,mt,sh,Kn,ah,oh,Ln,nh,lh,Rn,ih,rh,ti,$a,si,ja,ai,It,ph,Nn,hh,dh,Wn,ch,uh,oi,Es,ni,uo,Gt,mh,Fn,fh,_h,Bn,gh,wh,li,jt,xt,mo,fo,kh,ii,xa,ri,Ea,pi,Ts,hi,Ut,bh,Hn,yh,vh,_o,$h,jh,di,Ta,ci,za,ui,Yt,xh,In,Eh,Th,Gn,zh,Ah,mi,Aa,fi,go,qh,_i,qa,gi,wo,Dh,wi,Et,Tt,ko,is,zs,Un,Da,Mh,Yn,Ph,ki,Ma,bi,bo,Sh,yi,zt,At,yo,Pa,vi,vo,Ch,$i,qt,Dt,$o,jo,Oh,ji,Mt,Pt,xo,Sa,xi,Eo,Kh,Ei,To,As,Ti,zo,rs,qs,Vn,Ca,Lh,Jn,Rh,zi,Vt,Nh,Qn,Wh,Fh,Xn,Bh,Hh,Ai,Oa,qi,Ao,Ih,Di,Ka,Mi,La,Pi,qo,Gh,Si,Ra,Ci,Ds,Uh,Do,Yh,Vh,Oi,Ms,Ki;d=new ku({props:{fw:C[0]}}),q=new Rs({});const Jh=[yu,bu],Na=[];function Qh(e,n){return e[0]==="pt"?0:1}P=Qh(C),N=Na[P]=Jh[P](C),se=new wu({props:{model:C[1]}}),ue=new Xi({props:{id:"mqElG5QJWUg"}}),be=new Ls({props:{$$slots:{default:[vu]},$$scope:{ctx:C}}}),K=new Rs({});const Xh=[ju,$u],Wa=[];function Zh(e,n){return e[0]==="pt"?0:1}Ae=Zh(C),Ye=Wa[Ae]=Xh[Ae](C),Ve=new A({props:{codee:'text = "This is a great [MASK].",',highlighted:'text = <span class="hljs-string">&quot;This is a great [MASK].&quot;</span>'}}),Rt=new A({props:{codee:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(model_checkpoint),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)`}});const ed=[Eu,xu],Fa=[];function td(e,n){return e[0]==="pt"?0:1}Ze=td(C),et=Fa[Ze]=ed[Ze](C),ht=new A({props:{codee:`'>>> This is a great deal.'
'>>> This is a great success.'
'>>> This is a great adventure.'
'>>> This is a great idea.'
'>>> This is a great feat.',`,highlighted:`<span class="hljs-string">&#x27;&gt;&gt;&gt; This is a great deal.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; This is a great success.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; This is a great adventure.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; This is a great idea.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; This is a great feat.&#x27;</span>`}}),Wt=new Rs({}),Ys=new A({props:{codee:`from datasets import load_dataset

imdb_dataset = load_dataset("imdb")
imdb_dataset,`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

imdb_dataset = load_dataset(<span class="hljs-string">&quot;imdb&quot;</span>)
imdb_dataset`}}),Vs=new A({props:{codee:`DatasetDict({
    train: Dataset({
        features: ['text', 'label'],
        num_rows: 25000
    })
    test: Dataset({
        features: ['text', 'label'],
        num_rows: 25000
    })
    unsupervised: Dataset({
        features: ['text', 'label'],
        num_rows: 50000
    })
}),`,highlighted:`DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;text&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>],
        num_rows: <span class="hljs-number">25000</span>
    })
    test: Dataset({
        features: [<span class="hljs-string">&#x27;text&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>],
        num_rows: <span class="hljs-number">25000</span>
    })
    unsupervised: Dataset({
        features: [<span class="hljs-string">&#x27;text&#x27;</span>, <span class="hljs-string">&#x27;label&#x27;</span>],
        num_rows: <span class="hljs-number">50000</span>
    })
})`}}),Js=new A({props:{codee:`sample = imdb_dataset["train"].shuffle(seed=42).select(range(3))

for row in sample:
    print(f"\\n'>>> Review: {row['text']}'")
    print(f"'>>> Label: {row['label']}'"),`,highlighted:`sample = imdb_dataset[<span class="hljs-string">&quot;train&quot;</span>].shuffle(seed=<span class="hljs-number">42</span>).select(<span class="hljs-built_in">range</span>(<span class="hljs-number">3</span>))

<span class="hljs-keyword">for</span> row <span class="hljs-keyword">in</span> sample:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;\\n&#x27;&gt;&gt;&gt; Review: <span class="hljs-subst">{row[<span class="hljs-string">&#x27;text&#x27;</span>]}</span>&#x27;&quot;</span>)
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&#x27;&gt;&gt;&gt; Label: <span class="hljs-subst">{row[<span class="hljs-string">&#x27;label&#x27;</span>]}</span>&#x27;&quot;</span>)`}}),Qs=new A({props:{codee:`
'>>> Review: This is your typical Priyadarshan movie--a bunch of loony characters out on some silly mission. His signature climax has the entire cast of the film coming together and fighting each other in some crazy moshpit over hidden money. Whether it is a winning lottery ticket in Malamaal Weekly, black money in Hera Pheri, "kodokoo" in Phir Hera Pheri, etc., etc., the director is becoming ridiculously predictable. Don\\'t get me wrong; as clich\xE9d and preposterous his movies may be, I usually end up enjoying the comedy. However, in most his previous movies there has actually been some good humor, (Hungama and Hera Pheri being noteworthy ones). Now, the hilarity of his films is fading as he is using the same formula over and over again.<br /><br />Songs are good. Tanushree Datta looks awesome. Rajpal Yadav is irritating, and Tusshar is not a whole lot better. Kunal Khemu is OK, and Sharman Joshi is the best.'
'>>> Label: 0'

'>>> Review: Okay, the story makes no sense, the characters lack any dimensionally, the best dialogue is ad-libs about the low quality of movie, the cinematography is dismal, and only editing saves a bit of the muddle, but Sam" Peckinpah directed the film. Somehow, his direction is not enough. For those who appreciate Peckinpah and his great work, this movie is a disappointment. Even a great cast cannot redeem the time the viewer wastes with this minimal effort.<br /><br />The proper response to the movie is the contempt that the director San Peckinpah, James Caan, Robert Duvall, Burt Young, Bo Hopkins, Arthur Hill, and even Gig Young bring to their work. Watch the great Peckinpah films. Skip this mess.'
'>>> Label: 0'

'>>> Review: I saw this movie at the theaters when I was about 6 or 7 years old. I loved it then, and have recently come to own a VHS version. <br /><br />My 4 and 6 year old children love this movie and have been asking again and again to watch it. <br /><br />I have enjoyed watching it again too. Though I have to admit it is not as good on a little TV.<br /><br />I do not have older children so I do not know what they would think of it. <br /><br />The songs are very cute. My daughter keeps singing them over and over.<br /><br />Hope this helps.'
'>>> Label: 1',`,highlighted:`
<span class="hljs-string">&#x27;&gt;&gt;&gt; Review: This is your typical Priyadarshan movie--a bunch of loony characters out on some silly mission. His signature climax has the entire cast of the film coming together and fighting each other in some crazy moshpit over hidden money. Whether it is a winning lottery ticket in Malamaal Weekly, black money in Hera Pheri, &quot;kodokoo&quot; in Phir Hera Pheri, etc., etc., the director is becoming ridiculously predictable. Don\\&#x27;t get me wrong; as clich\xE9d and preposterous his movies may be, I usually end up enjoying the comedy. However, in most his previous movies there has actually been some good humor, (Hungama and Hera Pheri being noteworthy ones). Now, the hilarity of his films is fading as he is using the same formula over and over again.&lt;br /&gt;&lt;br /&gt;Songs are good. Tanushree Datta looks awesome. Rajpal Yadav is irritating, and Tusshar is not a whole lot better. Kunal Khemu is OK, and Sharman Joshi is the best.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Label: 0&#x27;</span>

<span class="hljs-string">&#x27;&gt;&gt;&gt; Review: Okay, the story makes no sense, the characters lack any dimensionally, the best dialogue is ad-libs about the low quality of movie, the cinematography is dismal, and only editing saves a bit of the muddle, but Sam&quot; Peckinpah directed the film. Somehow, his direction is not enough. For those who appreciate Peckinpah and his great work, this movie is a disappointment. Even a great cast cannot redeem the time the viewer wastes with this minimal effort.&lt;br /&gt;&lt;br /&gt;The proper response to the movie is the contempt that the director San Peckinpah, James Caan, Robert Duvall, Burt Young, Bo Hopkins, Arthur Hill, and even Gig Young bring to their work. Watch the great Peckinpah films. Skip this mess.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Label: 0&#x27;</span>

<span class="hljs-string">&#x27;&gt;&gt;&gt; Review: I saw this movie at the theaters when I was about 6 or 7 years old. I loved it then, and have recently come to own a VHS version. &lt;br /&gt;&lt;br /&gt;My 4 and 6 year old children love this movie and have been asking again and again to watch it. &lt;br /&gt;&lt;br /&gt;I have enjoyed watching it again too. Though I have to admit it is not as good on a little TV.&lt;br /&gt;&lt;br /&gt;I do not have older children so I do not know what they would think of it. &lt;br /&gt;&lt;br /&gt;The songs are very cute. My daughter keeps singing them over and over.&lt;br /&gt;&lt;br /&gt;Hope this helps.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Label: 1&#x27;</span>`}}),gs=new Ls({props:{$$slots:{default:[Tu]},$$scope:{ctx:C}}}),Xs=new Rs({}),Zs=new Xi({props:{id:"8PmhEIXhBvI"}}),ea=new A({props:{codee:`def tokenize_function(examples):
    result = tokenizer(examples["text"])
    if tokenizer.is_fast:
        result["word_ids"] = [result.word_ids(i) for i in range(len(result["input_ids"]))]
    return result


# Use batched=True to activate fast multithreading!
tokenized_datasets = imdb_dataset.map(
    tokenize_function, batched=True, remove_columns=["text", "label"]
)
tokenized_datasets,`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">tokenize_function</span>(<span class="hljs-params">examples</span>):
    result = tokenizer(examples[<span class="hljs-string">&quot;text&quot;</span>])
    <span class="hljs-keyword">if</span> tokenizer.is_fast:
        result[<span class="hljs-string">&quot;word_ids&quot;</span>] = [result.word_ids(i) <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(result[<span class="hljs-string">&quot;input_ids&quot;</span>]))]
    <span class="hljs-keyword">return</span> result


<span class="hljs-comment"># Use batched=True to activate fast multithreading!</span>
tokenized_datasets = imdb_dataset.<span class="hljs-built_in">map</span>(
    tokenize_function, batched=<span class="hljs-literal">True</span>, remove_columns=[<span class="hljs-string">&quot;text&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>]
)
tokenized_datasets`}}),ta=new A({props:{codee:`DatasetDict({
    train: Dataset({
        features: ['attention_mask', 'input_ids', 'word_ids'],
        num_rows: 25000
    })
    test: Dataset({
        features: ['attention_mask', 'input_ids', 'word_ids'],
        num_rows: 25000
    })
    unsupervised: Dataset({
        features: ['attention_mask', 'input_ids', 'word_ids'],
        num_rows: 50000
    })
}),`,highlighted:`DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;word_ids&#x27;</span>],
        num_rows: <span class="hljs-number">25000</span>
    })
    test: Dataset({
        features: [<span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;word_ids&#x27;</span>],
        num_rows: <span class="hljs-number">25000</span>
    })
    unsupervised: Dataset({
        features: [<span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;word_ids&#x27;</span>],
        num_rows: <span class="hljs-number">50000</span>
    })
})`}}),sa=new A({props:{codee:"tokenizer.model_max_length,",highlighted:"tokenizer.model_max_length"}}),aa=new A({props:{codee:"512,",highlighted:'<span class="hljs-number">512</span>'}}),vs=new Ls({props:{$$slots:{default:[zu]},$$scope:{ctx:C}}}),oa=new A({props:{codee:"chunk_size = 128,",highlighted:'chunk_size = <span class="hljs-number">128</span>'}}),$s=new Ls({props:{warning:!0,$$slots:{default:[Au]},$$scope:{ctx:C}}}),na=new A({props:{codee:`# Slicing produces a list of lists for each feature
tokenized_samples = tokenized_datasets["train"][:3]

for idx, sample in enumerate(tokenized_samples["input_ids"]):
    print(f"'>>> Review {idx} length: {len(sample)}'"),`,highlighted:`<span class="hljs-comment"># Slicing produces a list of lists for each feature</span>
tokenized_samples = tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>][:<span class="hljs-number">3</span>]

<span class="hljs-keyword">for</span> idx, sample <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(tokenized_samples[<span class="hljs-string">&quot;input_ids&quot;</span>]):
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&#x27;&gt;&gt;&gt; Review <span class="hljs-subst">{idx}</span> length: <span class="hljs-subst">{<span class="hljs-built_in">len</span>(sample)}</span>&#x27;&quot;</span>)`}}),la=new A({props:{codee:`'>>> Review 0 length: 200'
'>>> Review 1 length: 559'
'>>> Review 2 length: 192',`,highlighted:`<span class="hljs-string">&#x27;&gt;&gt;&gt; Review 0 length: 200&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Review 1 length: 559&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Review 2 length: 192&#x27;</span>`}}),ia=new A({props:{codee:`concatenated_examples = {
    k: sum(tokenized_samples[k], []) for k in tokenized_samples.keys()
}
total_length = len(concatenated_examples["input_ids"])
print(f"'>>> Concatenated reviews length: {total_length}'"),`,highlighted:`concatenated_examples = {
    k: <span class="hljs-built_in">sum</span>(tokenized_samples[k], []) <span class="hljs-keyword">for</span> k <span class="hljs-keyword">in</span> tokenized_samples.keys()
}
total_length = <span class="hljs-built_in">len</span>(concatenated_examples[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&#x27;&gt;&gt;&gt; Concatenated reviews length: <span class="hljs-subst">{total_length}</span>&#x27;&quot;</span>)`}}),ra=new A({props:{codee:"'>>> Concatenated reviews length: 951',",highlighted:'<span class="hljs-string">&#x27;&gt;&gt;&gt; Concatenated reviews length: 951&#x27;</span>'}}),pa=new A({props:{codee:`chunks = {
    k: [t[i : i + chunk_size] for i in range(0, total_length, chunk_size)]
    for k, t in concatenated_examples.items()
}

for chunk in chunks["input_ids"]:
    print(f"'>>> Chunk length: {len(chunk)}'"),`,highlighted:`chunks = {
    k: [t[i : i + chunk_size] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">0</span>, total_length, chunk_size)]
    <span class="hljs-keyword">for</span> k, t <span class="hljs-keyword">in</span> concatenated_examples.items()
}

<span class="hljs-keyword">for</span> chunk <span class="hljs-keyword">in</span> chunks[<span class="hljs-string">&quot;input_ids&quot;</span>]:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&#x27;&gt;&gt;&gt; Chunk length: <span class="hljs-subst">{<span class="hljs-built_in">len</span>(chunk)}</span>&#x27;&quot;</span>)`}}),ha=new A({props:{codee:`'>>> Chunk length: 128'
'>>> Chunk length: 128'
'>>> Chunk length: 128'
'>>> Chunk length: 128'
'>>> Chunk length: 128'
'>>> Chunk length: 128'
'>>> Chunk length: 128'
'>>> Chunk length: 55',`,highlighted:`<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 128&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 128&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 128&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 128&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 128&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 128&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 128&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 55&#x27;</span>`}}),ua=new A({props:{codee:`def group_texts(examples):
    # Concatenate all texts
    concatenated_examples = {k: sum(examples[k], []) for k in examples.keys()}
    # Compute length of concatenated texts
    total_length = len(concatenated_examples[list(examples.keys())[0]])
    # We drop the last chunk if it's smaller than chunk_size
    total_length = (total_length // chunk_size) * chunk_size
    # Split by chunks of max_len
    result = {
        k: [t[i : i + chunk_size] for i in range(0, total_length, chunk_size)]
        for k, t in concatenated_examples.items()
    }
    # Create a new labels column
    result["labels"] = result["input_ids"].copy()
    return result,`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">group_texts</span>(<span class="hljs-params">examples</span>):
    <span class="hljs-comment"># Concatenate all texts</span>
    concatenated_examples = {k: <span class="hljs-built_in">sum</span>(examples[k], []) <span class="hljs-keyword">for</span> k <span class="hljs-keyword">in</span> examples.keys()}
    <span class="hljs-comment"># Compute length of concatenated texts</span>
    total_length = <span class="hljs-built_in">len</span>(concatenated_examples[<span class="hljs-built_in">list</span>(examples.keys())[<span class="hljs-number">0</span>]])
    <span class="hljs-comment"># We drop the last chunk if it&#x27;s smaller than chunk_size</span>
    total_length = (total_length // chunk_size) * chunk_size
    <span class="hljs-comment"># Split by chunks of max_len</span>
    result = {
        k: [t[i : i + chunk_size] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">0</span>, total_length, chunk_size)]
        <span class="hljs-keyword">for</span> k, t <span class="hljs-keyword">in</span> concatenated_examples.items()
    }
    <span class="hljs-comment"># Create a new labels column</span>
    result[<span class="hljs-string">&quot;labels&quot;</span>] = result[<span class="hljs-string">&quot;input_ids&quot;</span>].copy()
    <span class="hljs-keyword">return</span> result`}}),ma=new A({props:{codee:`lm_datasets = tokenized_datasets.map(group_texts, batched=True)
lm_datasets,`,highlighted:`lm_datasets = tokenized_datasets.<span class="hljs-built_in">map</span>(group_texts, batched=<span class="hljs-literal">True</span>)
lm_datasets`}}),fa=new A({props:{codee:`DatasetDict({
    train: Dataset({
        features: ['attention_mask', 'input_ids', 'labels', 'word_ids'],
        num_rows: 61289
    })
    test: Dataset({
        features: ['attention_mask', 'input_ids', 'labels', 'word_ids'],
        num_rows: 59905
    })
    unsupervised: Dataset({
        features: ['attention_mask', 'input_ids', 'labels', 'word_ids'],
        num_rows: 122963
    })
}),`,highlighted:`DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;labels&#x27;</span>, <span class="hljs-string">&#x27;word_ids&#x27;</span>],
        num_rows: <span class="hljs-number">61289</span>
    })
    test: Dataset({
        features: [<span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;labels&#x27;</span>, <span class="hljs-string">&#x27;word_ids&#x27;</span>],
        num_rows: <span class="hljs-number">59905</span>
    })
    unsupervised: Dataset({
        features: [<span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;labels&#x27;</span>, <span class="hljs-string">&#x27;word_ids&#x27;</span>],
        num_rows: <span class="hljs-number">122963</span>
    })
})`}}),_a=new A({props:{codee:'tokenizer.decode(lm_datasets["train"][1]["input_ids"]),',highlighted:'tokenizer.decode(lm_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">1</span>][<span class="hljs-string">&quot;input_ids&quot;</span>])'}}),ga=new A({props:{codee:`".... at.......... high. a classic line : inspector : i'm here to sack one of your teachers. student : welcome to bromwell high. i expect that many adults of my age think that bromwell high is far fetched. what a pity that it isn't! [SEP] [CLS] homelessness ( or houselessness as george carlin stated ) has been an issue for years but never a plan to help those on the street that were once considered human who did everything from going to school, work, or vote for the matter. most people think of the homeless",`,highlighted:'<span class="hljs-string">&quot;.... at.......... high. a classic line : inspector : i&#x27;m here to sack one of your teachers. student : welcome to bromwell high. i expect that many adults of my age think that bromwell high is far fetched. what a pity that it isn&#x27;t! [SEP] [CLS] homelessness ( or houselessness as george carlin stated ) has been an issue for years but never a plan to help those on the street that were once considered human who did everything from going to school, work, or vote for the matter. most people think of the homeless&quot;</span>'}}),wa=new A({props:{codee:'tokenizer.decode(lm_datasets["train"][1]["labels"]),',highlighted:'tokenizer.decode(lm_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">1</span>][<span class="hljs-string">&quot;labels&quot;</span>])'}}),ka=new A({props:{codee:`".... at.......... high. a classic line : inspector : i'm here to sack one of your teachers. student : welcome to bromwell high. i expect that many adults of my age think that bromwell high is far fetched. what a pity that it isn't! [SEP] [CLS] homelessness ( or houselessness as george carlin stated ) has been an issue for years but never a plan to help those on the street that were once considered human who did everything from going to school, work, or vote for the matter. most people think of the homeless",`,highlighted:'<span class="hljs-string">&quot;.... at.......... high. a classic line : inspector : i&#x27;m here to sack one of your teachers. student : welcome to bromwell high. i expect that many adults of my age think that bromwell high is far fetched. what a pity that it isn&#x27;t! [SEP] [CLS] homelessness ( or houselessness as george carlin stated ) has been an issue for years but never a plan to help those on the street that were once considered human who did everything from going to school, work, or vote for the matter. most people think of the homeless&quot;</span>'}}),ba=new Rs({}),va=new A({props:{codee:`from transformers import DataCollatorForLanguageModeling

data_collator = DataCollatorForLanguageModeling(tokenizer=tokenizer, mlm_probability=0.15),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForLanguageModeling

data_collator = DataCollatorForLanguageModeling(tokenizer=tokenizer, mlm_probability=<span class="hljs-number">0.15</span>)`}}),$a=new A({props:{codee:`samples = [lm_datasets["train"][i] for i in range(2)]
for sample in samples:
    _ = sample.pop("word_ids")

for chunk in data_collator(samples)["input_ids"]:
    print(f"\\n'>>> {tokenizer.decode(chunk)}'"),`,highlighted:`samples = [lm_datasets[<span class="hljs-string">&quot;train&quot;</span>][i] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>)]
<span class="hljs-keyword">for</span> sample <span class="hljs-keyword">in</span> samples:
    _ = sample.pop(<span class="hljs-string">&quot;word_ids&quot;</span>)

<span class="hljs-keyword">for</span> chunk <span class="hljs-keyword">in</span> data_collator(samples)[<span class="hljs-string">&quot;input_ids&quot;</span>]:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;\\n&#x27;&gt;&gt;&gt; <span class="hljs-subst">{tokenizer.decode(chunk)}</span>&#x27;&quot;</span>)`}}),ja=new A({props:{codee:`'>>> [CLS] bromwell [MASK] is a cartoon comedy. it ran at the same [MASK] as some other [MASK] about school life, [MASK] as " teachers ". [MASK] [MASK] [MASK] in the teaching [MASK] lead [MASK] to believe that bromwell high\\'[MASK] satire is much closer to reality than is " teachers ". the scramble [MASK] [MASK] financially, the [MASK]ful students whogn [MASK] right through [MASK] pathetic teachers\\'pomp, the pettiness of the whole situation, distinction remind me of the schools i knew and their students. when i saw [MASK] episode in [MASK] a student repeatedly tried to burn down the school, [MASK] immediately recalled. [MASK]...'

'>>> .... at.. [MASK]... [MASK]... high. a classic line plucked inspector : i\\'[MASK] here to [MASK] one of your [MASK]. student : welcome to bromwell [MASK]. i expect that many adults of my age think that [MASK]mwell [MASK] is [MASK] fetched. what a pity that it isn\\'t! [SEP] [CLS] [MASK]ness ( or [MASK]lessness as george \u5B87in stated )\u516C been an issue for years but never [MASK] plan to help those on the street that were once considered human [MASK] did everything from going to school, [MASK], [MASK] vote for the matter. most people think [MASK] the homeless',`,highlighted:`<span class="hljs-string">&#x27;&gt;&gt;&gt; [CLS] bromwell [MASK] is a cartoon comedy. it ran at the same [MASK] as some other [MASK] about school life, [MASK] as &quot; teachers &quot;. [MASK] [MASK] [MASK] in the teaching [MASK] lead [MASK] to believe that bromwell high\\&#x27;[MASK] satire is much closer to reality than is &quot; teachers &quot;. the scramble [MASK] [MASK] financially, the [MASK]ful students whogn [MASK] right through [MASK] pathetic teachers\\&#x27;pomp, the pettiness of the whole situation, distinction remind me of the schools i knew and their students. when i saw [MASK] episode in [MASK] a student repeatedly tried to burn down the school, [MASK] immediately recalled. [MASK]...&#x27;</span>

<span class="hljs-string">&#x27;&gt;&gt;&gt; .... at.. [MASK]... [MASK]... high. a classic line plucked inspector : i\\&#x27;[MASK] here to [MASK] one of your [MASK]. student : welcome to bromwell [MASK]. i expect that many adults of my age think that [MASK]mwell [MASK] is [MASK] fetched. what a pity that it isn\\&#x27;t! [SEP] [CLS] [MASK]ness ( or [MASK]lessness as george \u5B87in stated )\u516C been an issue for years but never [MASK] plan to help those on the street that were once considered human [MASK] did everything from going to school, [MASK], [MASK] vote for the matter. most people think [MASK] the homeless&#x27;</span>`}}),Es=new Ls({props:{$$slots:{default:[qu]},$$scope:{ctx:C}}});let Qe=C[0]==="pt"&&ru();const sd=[Mu,Du],Ba=[];function ad(e,n){return e[0]==="pt"?0:1}jt=ad(C),xt=Ba[jt]=sd[jt](C),xa=new A({props:{codee:`samples = [lm_datasets["train"][i] for i in range(2)]
batch = whole_word_masking_data_collator(samples)

for chunk in batch["input_ids"]:
    print(f"\\n'>>> {tokenizer.decode(chunk)}'"),`,highlighted:`samples = [lm_datasets[<span class="hljs-string">&quot;train&quot;</span>][i] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>)]
batch = whole_word_masking_data_collator(samples)

<span class="hljs-keyword">for</span> chunk <span class="hljs-keyword">in</span> batch[<span class="hljs-string">&quot;input_ids&quot;</span>]:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;\\n&#x27;&gt;&gt;&gt; <span class="hljs-subst">{tokenizer.decode(chunk)}</span>&#x27;&quot;</span>)`}}),Ea=new A({props:{codee:`'>>> [CLS] bromwell high is a cartoon comedy [MASK] it ran at the same time as some other programs about school life, such as " teachers ". my 35 years in the teaching profession lead me to believe that bromwell high\\'s satire is much closer to reality than is " teachers ". the scramble to survive financially, the insightful students who can see right through their pathetic teachers\\'pomp, the pettiness of the whole situation, all remind me of the schools i knew and their students. when i saw the episode in which a student repeatedly tried to burn down the school, i immediately recalled.....'

'>>> .... [MASK] [MASK] [MASK] [MASK]....... high. a classic line : inspector : i\\'m here to sack one of your teachers. student : welcome to bromwell high. i expect that many adults of my age think that bromwell high is far fetched. what a pity that it isn\\'t! [SEP] [CLS] homelessness ( or houselessness as george carlin stated ) has been an issue for years but never a plan to help those on the street that were once considered human who did everything from going to school, work, or vote for the matter. most people think of the homeless',`,highlighted:`<span class="hljs-string">&#x27;&gt;&gt;&gt; [CLS] bromwell high is a cartoon comedy [MASK] it ran at the same time as some other programs about school life, such as &quot; teachers &quot;. my 35 years in the teaching profession lead me to believe that bromwell high\\&#x27;s satire is much closer to reality than is &quot; teachers &quot;. the scramble to survive financially, the insightful students who can see right through their pathetic teachers\\&#x27;pomp, the pettiness of the whole situation, all remind me of the schools i knew and their students. when i saw the episode in which a student repeatedly tried to burn down the school, i immediately recalled.....&#x27;</span>

<span class="hljs-string">&#x27;&gt;&gt;&gt; .... [MASK] [MASK] [MASK] [MASK]....... high. a classic line : inspector : i\\&#x27;m here to sack one of your teachers. student : welcome to bromwell high. i expect that many adults of my age think that bromwell high is far fetched. what a pity that it isn\\&#x27;t! [SEP] [CLS] homelessness ( or houselessness as george carlin stated ) has been an issue for years but never a plan to help those on the street that were once considered human who did everything from going to school, work, or vote for the matter. most people think of the homeless&#x27;</span>`}}),Ts=new Ls({props:{$$slots:{default:[Pu]},$$scope:{ctx:C}}}),Ta=new A({props:{codee:`train_size = 10_000
test_size = int(0.1 * train_size)

downsampled_dataset = lm_datasets["train"].train_test_split(
    train_size=train_size, test_size=test_size, seed=42
)
downsampled_dataset,`,highlighted:`train_size = <span class="hljs-number">10_000</span>
test_size = <span class="hljs-built_in">int</span>(<span class="hljs-number">0.1</span> * train_size)

downsampled_dataset = lm_datasets[<span class="hljs-string">&quot;train&quot;</span>].train_test_split(
    train_size=train_size, test_size=test_size, seed=<span class="hljs-number">42</span>
)
downsampled_dataset`}}),za=new A({props:{codee:`DatasetDict({
    train: Dataset({
        features: ['attention_mask', 'input_ids', 'labels', 'word_ids'],
        num_rows: 10000
    })
    test: Dataset({
        features: ['attention_mask', 'input_ids', 'labels', 'word_ids'],
        num_rows: 1000
    })
}),`,highlighted:`DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;labels&#x27;</span>, <span class="hljs-string">&#x27;word_ids&#x27;</span>],
        num_rows: <span class="hljs-number">10000</span>
    })
    test: Dataset({
        features: [<span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;labels&#x27;</span>, <span class="hljs-string">&#x27;word_ids&#x27;</span>],
        num_rows: <span class="hljs-number">1000</span>
    })
})`}}),Aa=new A({props:{codee:`from huggingface_hub import notebook_login

notebook_login(),`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),qa=new A({props:{codee:"huggingface-cli login,",highlighted:'huggingface-<span class="hljs-keyword">cli</span> login'}});const od=[Cu,Su],Ha=[];function nd(e,n){return e[0]==="tf"?0:1}Et=nd(C),Tt=Ha[Et]=od[Et](C),Da=new Rs({}),Ma=new Xi({props:{id:"NURcDHhYe98"}});const ld=[Ku,Ou],Ia=[];function id(e,n){return e[0]==="pt"?0:1}zt=id(C),At=Ia[zt]=ld[zt](C),Pa=new A({props:{codee:"Perplexity: 21.75,",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>Perplexity: <span class="hljs-number">21.75</span>'}});const rd=[Ru,Lu],Ga=[];function pd(e,n){return e[0]==="pt"?0:1}qt=pd(C),Dt=Ga[qt]=rd[qt](C);const hd=[Wu,Nu],Ua=[];function dd(e,n){return e[0]==="pt"?0:1}Mt=dd(C),Pt=Ua[Mt]=hd[Mt](C),Sa=new A({props:{codee:"Perplexity: 11.32,",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>Perplexity: <span class="hljs-number">11.32</span>'}});let Pe=C[0]==="pt"&&pu();As=new Ls({props:{$$slots:{default:[Fu]},$$scope:{ctx:C}}});let Se=C[0]==="pt"&&hu();return Ca=new Rs({}),Oa=new A({props:{codee:`from transformers import pipeline

mask_filler = pipeline(
    "fill-mask", model="huggingface-course/distilbert-base-uncased-finetuned-imdb"
),`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

mask_filler = pipeline(
    <span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;huggingface-course/distilbert-base-uncased-finetuned-imdb&quot;</span>
)`}}),Ka=new A({props:{codee:`preds = mask_filler(text)

for pred in preds:
    print(f">>> {pred['sequence']}"),`,highlighted:`preds = mask_filler(text)

<span class="hljs-keyword">for</span> pred <span class="hljs-keyword">in</span> preds:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&gt;&gt;&gt; <span class="hljs-subst">{pred[<span class="hljs-string">&#x27;sequence&#x27;</span>]}</span>&quot;</span>)`}}),La=new A({props:{codee:`'>>> this is a great movie.'
'>>> this is a great film.'
'>>> this is a great story.'
'>>> this is a great movies.'
'>>> this is a great character.',`,highlighted:`<span class="hljs-string">&#x27;&gt;&gt;&gt; this is a great movie.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; this is a great film.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; this is a great story.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; this is a great movies.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; this is a great character.&#x27;</span>`}}),Ra=new Xi({props:{id:"0Oxphw4Q9fo"}}),Ms=new Ls({props:{$$slots:{default:[Bu]},$$scope:{ctx:C}}}),{c(){i=r("meta"),f=u(),$(d.$$.fragment),y=u(),T=r("h1"),k=r("a"),b=r("span"),$(q.$$.fragment),g=u(),D=r("span"),L=a("Fine-tuning a masked language model"),O=u(),N.c(),W=u(),F=r("p"),H=a("For many NLP applications involving Transformer models, you can simply take a pretrained model from the Hugging Face Hub and fine-tune it directly on your data for the task at hand. Provided that the corpus used for pretraining is not too different from the corpus used for fine-tuning, transfer learning will usually produce good results."),B=u(),v=r("p"),R=a("However, there are a few cases where you\u2019ll want to first fine-tune the language models on your data, before training a task-specific head. For example, if your dataset contains legal contracts or scientific articles, a vanilla Transformer model like BERT will typically treat the domain-specific words in your corpus as rare tokens, and the resulting performance may be less than satisfactory. By fine-tuning the language model on in-domain data you can boost the performance of many downstream tasks, which means you usually only have to do this step once!"),U=u(),Y=r("p"),V=a("This process of fine-tuning a pretrained language model on in-domain data is usually called "),I=r("em"),qe=a("domain adaptation"),pe=a(". It was popularized in 2018 by "),oe=r("a"),G=a("ULMFiT"),fe=a(", which was one of the first neural architectures (based on LSTMs) to make transfer learning really work for NLP. An example of domain adaptation with ULMFiT is shown in the image below; in this section we\u2019ll do something similar, but with a Transformer instead of an LSTM!"),De=u(),ne=r("div"),Z=r("img"),_e=u(),ee=r("p"),Ce=a("By the end of this section you\u2019ll have a "),le=r("a"),ge=a("masked language model"),Ie=a(" on the Hub that can autocomplete sentences as shown below:"),we=u(),de=r("div"),Me=r("div"),$(se.$$.fragment),Ee=u(),ke=r("p"),ce=a("Let\u2019s dive in!"),Te=u(),$(ue.$$.fragment),ae=u(),$(be.$$.fragment),me=u(),ye=r("h2"),ve=r("a"),ie=r("span"),$(K.$$.fragment),J=u(),Ne=r("span"),M=a("Picking a pretrained model for masked language modeling"),Q=u(),Oe=r("p"),Ke=a("To get started, let\u2019s pick a suitable pretrained model for masked language modeling. As shown in the following screenshot, you can find a list of candidates by applying the \u201CFill-Mask\u201D filter on the "),$e=r("a"),re=a("Hugging Face Hub"),te=a(":"),Xe=u(),je=r("div"),We=r("img"),Ge=u(),X=r("p"),Le=a("Although the BERT and RoBERTa family of models are the most downloaded, we\u2019ll use a model called "),ze=r("a"),St=a("DistilBERT"),Ue=a(`
that can be trained much faster with little to no loss in downstream performance. This model was trained using a special technique called `),Re=r("a"),at=r("em"),Ct=a("knowledge distillation"),Ns=a(", where a large \u201Cteacher model\u201D like BERT is used to guide the training of a \u201Cstudent model\u201D that has far fewer parameters. An explanation of the details of knowledge distillation would take us too far afield in this section, but if you\u2019re interested you can read all about it in "),rt=r("a"),ot=r("em"),hs=a("Natural Language Processing with Transformers"),wt=a(" (colloquially known as the Transformers textbook)."),es=u(),Ye.c(),pt=u(),Ot=r("p"),Ws=a("With around 67 million parameters, DistilBERT is approximately two times smaller than the BERT base model, which roughly translates into a two-fold speedup in training \u2014 nice! Let\u2019s now see what kinds of tokens this model predicts are the most likely completions of a small sample of text:"),ts=u(),$(Ve.$$.fragment),ss=u(),xe=r("p"),Fs=a("As humans, we can imagine many possibilities for the "),Kt=r("code"),kt=a("[MASK]"),ds=a(" token, such as \u201Cday\u201D, \u201Cride\u201D, or \u201Cpainting\u201D. For pretrained models, the predictions depend on the corpus the model was trained on, since it learns to pick up the statistical patterns present in the data. Like BERT, DistilBERT was pretrained on the "),Je=r("a"),cs=a("English Wikipedia"),Lt=a(" and "),bt=r("a"),us=a("BookCorpus"),c=a(" datasets, so we expect the predictions for "),S=r("code"),ms=a("[MASK]"),Qa=a(" to reflect these domains. To predict the mask we need DistilBERT\u2019s tokenizer to produce the inputs for the model, so let\u2019s download that from the Hub as well:"),Bs=u(),$(Rt.$$.fragment),yt=u(),as=r("p"),Xa=a("With a tokenizer and a model, we can now pass our text example to the model, extract the logits, and print out the top 5 candidates:"),nt=u(),et.c(),os=u(),$(ht.$$.fragment),Hs=u(),vt=r("p"),Za=a("We can see from the outputs that the model\u2019s predictions refer to everyday terms, which is perhaps not surprising given the foundation of English Wikipedia. Let\u2019s see how we can change this domain to something a bit more niche \u2014 highly polarized movie reviews!"),Is=u(),tt=r("h2"),$t=r("a"),Nt=r("span"),$(Wt.$$.fragment),eo=u(),fs=r("span"),_s=a("The dataset"),Gs=u(),lt=r("p"),to=a("To showcase domain adaptation, we\u2019ll use the famous "),Us=r("a"),Zi=a("Large Movie Review Dataset"),er=a(" (or IMDb for short), which is a corpus of movie reviews that is often used to benchmark sentiment analysis models. By fine-tuning DistilBERT on this corpus, we expect the language model will adapt its vocabulary from the factual data of Wikipedia that it was pretrained on to the more subjective elements of movie reviews. We can get the data from the Hugging Face Hub with the "),Vo=r("code"),tr=a("load_dataset()"),sr=a(" function from \u{1F917} Datasets:"),ol=u(),$(Ys.$$.fragment),nl=u(),$(Vs.$$.fragment),ll=u(),Fe=r("p"),ar=a("We can see that the "),Jo=r("code"),or=a("train"),nr=a(" and "),Qo=r("code"),lr=a("test"),ir=a(" splits each consist of 25,000 reviews, while there is an unlabeled split called "),Xo=r("code"),rr=a("unsupervised"),pr=a(" that contains 50,000 reviews. Let\u2019s take a look at a few samples to get an idea of what kind of text we\u2019re dealing with. As we\u2019ve done in previous chapters of the course, we\u2019ll chain the "),Zo=r("code"),hr=a("Dataset.shuffle()"),dr=a(" and "),en=r("code"),cr=a("Dataset.select()"),ur=a(" functions to create a random sample:"),il=u(),$(Js.$$.fragment),rl=u(),$(Qs.$$.fragment),pl=u(),Ft=r("p"),mr=a("Yep, these are certainly movie reviews, and if you\u2019re old enough you may even understand the comment in the last review about owning a VHS version \u{1F61C}! Although we won\u2019t need the labels for language modeling, we can already see that a "),tn=r("code"),fr=a("0"),_r=a(" denotes a negative review, while a "),sn=r("code"),gr=a("1"),wr=a(" corresponds to a positive one."),hl=u(),$(gs.$$.fragment),dl=u(),ws=r("p"),kr=a("Now that we\u2019ve had a quick look at the data, let\u2019s dive into preparing it for masked language modeling. As we\u2019ll see, there are some additional steps that one needs to take compared to the sequence classification tasks we saw in "),so=r("a"),br=a("Chapter 3"),yr=a(". Let\u2019s go!"),cl=u(),ns=r("h2"),ks=r("a"),an=r("span"),$(Xs.$$.fragment),vr=u(),on=r("span"),$r=a("Preprocessing the data"),ul=u(),$(Zs.$$.fragment),ml=u(),ao=r("p"),jr=a("For both auto-regressive and masked language modeling, a common preprocessing step is to concatenate all the examples and then split the whole corpus into chunks of equal size. This is quite different from our usual approach, where we simply tokenize individual examples. Why concatenate everything together? The reason is that individual examples might get truncated if they\u2019re too long, and that would result in losing information that might be useful for the language modeling task!"),fl=u(),Be=r("p"),xr=a("So to get started, we\u2019ll first tokenize our corpus as usual, but "),nn=r("em"),Er=a("without"),Tr=a(" setting the "),ln=r("code"),zr=a("truncation=True"),Ar=a(" option in our tokenizer. We\u2019ll also grab the word IDs if they are available ((which they will be if we\u2019re using a fast tokenizer, as described in "),oo=r("a"),qr=a("Chapter 6"),Dr=a("), as we will need them later on to do whole word masking. We\u2019ll wrap this in a simple function, and while we\u2019re at it we\u2019ll remove the "),rn=r("code"),Mr=a("text"),Pr=a(" and "),pn=r("code"),Sr=a("label"),Cr=a(" columns since we don\u2019t need them any longer:"),_l=u(),$(ea.$$.fragment),gl=u(),$(ta.$$.fragment),wl=u(),dt=r("p"),Or=a("Since DistilBERT is a BERT-like model, we can see that the encoded texts consist of the "),hn=r("code"),Kr=a("input_ids"),Lr=a(" and "),dn=r("code"),Rr=a("attention_mask"),Nr=a(" that we\u2019ve seen in other chapters, as well as the "),cn=r("code"),Wr=a("word_ids"),Fr=a(" we added."),kl=u(),bs=r("p"),Br=a("Now that we\u2019ve tokenized our movie reviews, the next step is to group them all together and split the result into chunks. But how big should these chunks be? This will ultimately be determined by the amount of GPU memory that you have available, but a good starting point is to see what the model\u2019s maximum context size is. This can be inferred by inspecting the "),un=r("code"),Hr=a("model_max_length"),Ir=a(" attribute of the tokenizer:"),bl=u(),$(sa.$$.fragment),yl=u(),$(aa.$$.fragment),vl=u(),ys=r("p"),Gr=a("This value is derived from the "),mn=r("em"),Ur=a("tokenizer_config.json"),Yr=a(" file associated with a checkpoint; in this case we can see that the context size is 512 tokens, just like with BERT."),$l=u(),$(vs.$$.fragment),jl=u(),no=r("p"),Vr=a("So, in order to run our experiments on GPUs like those found on Google Colab, we\u2019ll pick something a bit smaller that can fit in memory:"),xl=u(),$(oa.$$.fragment),El=u(),$($s.$$.fragment),Tl=u(),lo=r("p"),Jr=a("Now comes the fun part. To show how the concatenation works, let\u2019s take a few reviews from our tokenized training set and print out the number of tokens per review:"),zl=u(),$(na.$$.fragment),Al=u(),$(la.$$.fragment),ql=u(),io=r("p"),Qr=a("We can then concatenate all these examples with a simple dictionary comprehension, as follows:"),Dl=u(),$(ia.$$.fragment),Ml=u(),$(ra.$$.fragment),Pl=u(),Bt=r("p"),Xr=a("Great, the total length checks out \u2014 so now let\u2019s split the concatenated reviews into chunks of the size given by "),fn=r("code"),Zr=a("block_size"),ep=a(". To do so, we iterate over the features in "),_n=r("code"),tp=a("concatenated_examples"),sp=a(" and use a list comprehension to create slices of each feature. The result is a dictionary of chunks for each feature:"),Sl=u(),$(pa.$$.fragment),Cl=u(),$(ha.$$.fragment),Ol=u(),ro=r("p"),ap=a("As you can see in this example, the last chunk will generally be smaller than the maximum chunk size. There are two main strategies for dealing with this:"),Kl=u(),js=r("ul"),da=r("li"),op=a("Drop the last chunk if it\u2019s smaller than "),gn=r("code"),np=a("chunk_size"),lp=a("."),ip=u(),ca=r("li"),rp=a("Pad the last chunk until its length equals "),wn=r("code"),pp=a("chunk_size"),hp=a("."),Ll=u(),po=r("p"),dp=a("We\u2019ll take the first approach here, so let\u2019s wrap all of the above logic in a single function that we can apply to our tokenized datasets:"),Rl=u(),$(ua.$$.fragment),Nl=u(),st=r("p"),cp=a("Note that in the last step of "),kn=r("code"),up=a("group_texts()"),mp=a(" we create a new "),bn=r("code"),fp=a("labels"),_p=a(" column which is a copy of the "),yn=r("code"),gp=a("input_ids"),wp=a(" one. As we\u2019ll see shortly, that\u2019s because in masked language modeling the objective is to predict randomly masked tokens in the input batch, and by creating a "),vn=r("code"),kp=a("labels"),bp=a(" column we provide the ground truth for our language model to learn from."),Wl=u(),Ht=r("p"),yp=a("Let\u2019s now apply "),$n=r("code"),vp=a("group_texts()"),$p=a(" to our tokenized datasets using our trusty "),jn=r("code"),jp=a("Dataset.map()"),xp=a(" function:"),Fl=u(),$(ma.$$.fragment),Bl=u(),$(fa.$$.fragment),Hl=u(),He=r("p"),Ep=a("You can see that grouping and then chunking the texts has produced many more examples than our original 25,000 for the "),xn=r("code"),Tp=a("train"),zp=a(" and "),En=r("code"),Ap=a("test"),qp=a(" splits. That\u2019s because we now have examples involving "),Tn=r("em"),Dp=a("contiguous tokens"),Mp=a(" that span across multiple examples from the original corpus. You can see this explicitly by looking for the special "),zn=r("code"),Pp=a("[SEP]"),Sp=a(" and "),An=r("code"),Cp=a("[CLS]"),Op=a(" tokens in one of the chunks:"),Il=u(),$(_a.$$.fragment),Gl=u(),$(ga.$$.fragment),Ul=u(),ho=r("p"),Kp=a("In this example you can see two overlapping movie reviews, one about a high school movie and the other about homelessness. Let\u2019s also check out what the labels look like for masked language modeling:"),Yl=u(),$(wa.$$.fragment),Vl=u(),$(ka.$$.fragment),Jl=u(),ct=r("p"),Lp=a("As expected from our "),qn=r("code"),Rp=a("group_texts()"),Np=a(" function above, this looks identical to the decoded "),Dn=r("code"),Wp=a("input_ids"),Fp=a(" \u2014 but then how can our model possibly learn anything? We\u2019re missing a key step: inserting "),Mn=r("code"),Bp=a("[MASK]"),Hp=a(" tokens at random positions in the inputs! Let\u2019s see how we can do this on the fly during fine-tuning using a special data collator."),Ql=u(),ls=r("h2"),xs=r("a"),Pn=r("span"),$(ba.$$.fragment),Ip=u(),ya=r("span"),Gp=a("Fine-tuning DistilBERT with the "),Sn=r("code"),Up=a("Trainer"),Yp=a(" API"),Xl=u(),ut=r("p"),Vp=a("Fine-tuning a masked language model is almost identical to fine-tuning a sequence classification model, like we did in "),co=r("a"),Jp=a("Chapter 3"),Qp=a(". The only difference is that we need a special data collator that can randomly mask some of the tokens in each batch of texts. Fortunately, \u{1F917} Transformers comes prepared with a dedicated "),Cn=r("code"),Xp=a("DataCollatorForLanguageModeling"),Zp=a(" for just this task. We just have to pass it the tokenizer and an "),On=r("code"),eh=a("mlm_probability"),th=a(" argument that specifies what fraction of the tokens to mask. We\u2019ll pick 15%, which is the amount used for BERT and a common choice in the literature:"),Zl=u(),$(va.$$.fragment),ei=u(),mt=r("p"),sh=a("To see how the random masking works, let\u2019s feed a few examples to the data collator. Since it expects a list of "),Kn=r("code"),ah=a("dict"),oh=a("s, where each "),Ln=r("code"),nh=a("dict"),lh=a(" represents a single chunk of contiguous text, we first iterate over the dataset before feeding the batch to the collator. We remove the "),Rn=r("code"),ih=a('"word_ids"'),rh=a(" key for this data collator as it does not expect it:"),ti=u(),$($a.$$.fragment),si=u(),$(ja.$$.fragment),ai=u(),It=r("p"),ph=a("Nice, it worked! We can see that the "),Nn=r("code"),hh=a("[MASK]"),dh=a(" token has been randomly inserted at various locations in our text. These will be the tokens which our model will have to predict during training \u2014 and the beauty of the data collator is that it will randomize the "),Wn=r("code"),ch=a("[MASK]"),uh=a(" insertion with every batch!"),oi=u(),$(Es.$$.fragment),ni=u(),Qe&&Qe.c(),uo=u(),Gt=r("p"),mh=a("When training models for masked language modeling, one technique that can be used is to mask whole words together, not just individual tokens. This approach is called "),Fn=r("em"),fh=a("whole word masking"),_h=a(". If we want to use whole word masking, we will need to build a data collator ourselves. A data collator is just a function that takes a list of samples and converts them into a batch, so let\u2019s do this now! We\u2019ll use the word IDs computed earlier to make a map between word indices and the corresponding tokens, then randomly decide which words to mask and apply that mask on the inputs. Note that the labels are all "),Bn=r("code"),gh=a("-100"),wh=a(" except for the ones corresponding to mask words."),li=u(),xt.c(),mo=u(),fo=r("p"),kh=a("Next, we can try it on the same samples as before:"),ii=u(),$(xa.$$.fragment),ri=u(),$(Ea.$$.fragment),pi=u(),$(Ts.$$.fragment),hi=u(),Ut=r("p"),bh=a("Now that we have two data collators, the rest of the fine-tuning steps are standard. Training can take a while on Google Colab if you\u2019re not lucky enough to score a mythical P100 GPU \u{1F62D}, so we\u2019ll first downsample the size of the training set to a few thousand examples. Don\u2019t worry, we\u2019ll still get a pretty decent language model! A quick way to downsample a dataset in \u{1F917} Datasets is via the "),Hn=r("code"),yh=a("Dataset.train_test_split()"),vh=a(" function that we saw in "),_o=r("a"),$h=a("Chapter 5"),jh=a(":"),di=u(),$(Ta.$$.fragment),ci=u(),$(za.$$.fragment),ui=u(),Yt=r("p"),xh=a("This has automatically created new "),In=r("code"),Eh=a("train"),Th=a(" and "),Gn=r("code"),zh=a("test"),Ah=a(" splits, with the training set size set to 10,000 examples and the validation set to 10% of that \u2014 feel free to increase this if you have a beefy GPU! The next thing we need to do is log in to the Hugging Face Hub. If you\u2019re running this code in a notebook, you can do so with the following utility function:"),mi=u(),$(Aa.$$.fragment),fi=u(),go=r("p"),qh=a("which will display a widget where you can enter your credentials. Alternatively, you can run:"),_i=u(),$(qa.$$.fragment),gi=u(),wo=r("p"),Dh=a("in your favorite terminal and log in there."),wi=u(),Tt.c(),ko=u(),is=r("h3"),zs=r("a"),Un=r("span"),$(Da.$$.fragment),Mh=u(),Yn=r("span"),Ph=a("Perplexity for language models"),ki=u(),$(Ma.$$.fragment),bi=u(),bo=r("p"),Sh=a("Unlike other tasks like text classification or question answering where we\u2019re given a labeled corpus to train on, with language modeling we don\u2019t have any explicit labels. So how do we determine what makes a good language model? Like with the autocorrect feature in your phone, a good language model is one that assigns high probabilities to sentences that are grammatically correct, and low probabilities to nonsense sentences. To give you a better idea of what this looks like, you can find whole sets of \u201Cautocorrect fails\u201D online, where the model in a person\u2019s phone has produced some rather funny (and often inappropriate) completions!"),yi=u(),At.c(),yo=u(),$(Pa.$$.fragment),vi=u(),vo=r("p"),Ch=a("A lower perplexity score means a better language model, and we can see here that our starting model has a somewhat large value. Let\u2019s see if we can lower it by fine-tuning! To do that, we first run the training loop:"),$i=u(),Dt.c(),$o=u(),jo=r("p"),Oh=a("and then compute the resulting perplexity on the test set as before:"),ji=u(),Pt.c(),xo=u(),$(Sa.$$.fragment),xi=u(),Eo=r("p"),Kh=a("Nice \u2014 this is quite a reduction in perplexity, which tells us the model has learned something about the domain of movie reviews!"),Ei=u(),Pe&&Pe.c(),To=u(),$(As.$$.fragment),Ti=u(),Se&&Se.c(),zo=u(),rs=r("h2"),qs=r("a"),Vn=r("span"),$(Ca.$$.fragment),Lh=u(),Jn=r("span"),Rh=a("Using our fine-tuned model"),zi=u(),Vt=r("p"),Nh=a("You can interact with your fine-tuned model either by using its widget on the Hub or locally with the "),Qn=r("code"),Wh=a("pipeline"),Fh=a(" from \u{1F917} Transformers. Let\u2019s use the latter to download our model using the "),Xn=r("code"),Bh=a("fill-mask"),Hh=a(" pipeline:"),Ai=u(),$(Oa.$$.fragment),qi=u(),Ao=r("p"),Ih=a("We can then feed the pipeline our sample text of \u201CThis is a great [MASK]\u201D and see what the top 5 predictions are:"),Di=u(),$(Ka.$$.fragment),Mi=u(),$(La.$$.fragment),Pi=u(),qo=r("p"),Gh=a("Neat \u2014 our model has clearly adapted its weights to predict words that are more strongly associated with movies!"),Si=u(),$(Ra.$$.fragment),Ci=u(),Ds=r("p"),Uh=a("This wraps up our first experiment with training a language model. In "),Do=r("a"),Yh=a("section 6"),Vh=a(" you\u2019ll learn how to train an auto-regressive model like GPT-2 from scratch; head over there if you\u2019d like to see how you can pretrain your very own Transformer model!"),Oi=u(),$(Ms.$$.fragment),this.h()},l(e){const n=fu('[data-svelte="svelte-1phssyn"]',iu.head);i=p(n,"META",{name:!0,content:!0}),n.forEach(s),f=m(e),j(d.$$.fragment,e),y=m(e),T=p(e,"H1",{class:!0});var Ya=h(T);k=p(Ya,"A",{id:!0,class:!0,href:!0});var Mo=h(k);b=p(Mo,"SPAN",{});var Zn=h(b);j(q.$$.fragment,Zn),Zn.forEach(s),Mo.forEach(s),g=m(Ya),D=p(Ya,"SPAN",{});var Po=h(D);L=o(Po,"Fine-tuning a masked language model"),Po.forEach(s),Ya.forEach(s),O=m(e),N.l(e),W=m(e),F=p(e,"P",{});var So=h(F);H=o(So,"For many NLP applications involving Transformer models, you can simply take a pretrained model from the Hugging Face Hub and fine-tune it directly on your data for the task at hand. Provided that the corpus used for pretraining is not too different from the corpus used for fine-tuning, transfer learning will usually produce good results."),So.forEach(s),B=m(e),v=p(e,"P",{});var el=h(v);R=o(el,"However, there are a few cases where you\u2019ll want to first fine-tune the language models on your data, before training a task-specific head. For example, if your dataset contains legal contracts or scientific articles, a vanilla Transformer model like BERT will typically treat the domain-specific words in your corpus as rare tokens, and the resulting performance may be less than satisfactory. By fine-tuning the language model on in-domain data you can boost the performance of many downstream tasks, which means you usually only have to do this step once!"),el.forEach(s),U=m(e),Y=p(e,"P",{});var ps=h(Y);V=o(ps,"This process of fine-tuning a pretrained language model on in-domain data is usually called "),I=p(ps,"EM",{});var tl=h(I);qe=o(tl,"domain adaptation"),tl.forEach(s),pe=o(ps,". It was popularized in 2018 by "),oe=p(ps,"A",{href:!0,rel:!0});var sl=h(oe);G=o(sl,"ULMFiT"),sl.forEach(s),fe=o(ps,", which was one of the first neural architectures (based on LSTMs) to make transfer learning really work for NLP. An example of domain adaptation with ULMFiT is shown in the image below; in this section we\u2019ll do something similar, but with a Transformer instead of an LSTM!"),ps.forEach(s),De=m(e),ne=p(e,"DIV",{class:!0});var Co=h(ne);Z=p(Co,"IMG",{src:!0,alt:!0,width:!0}),Co.forEach(s),_e=m(e),ee=p(e,"P",{});var Va=h(ee);Ce=o(Va,"By the end of this section you\u2019ll have a "),le=p(Va,"A",{href:!0,rel:!0});var Oo=h(le);ge=o(Oo,"masked language model"),Oo.forEach(s),Ie=o(Va," on the Hub that can autocomplete sentences as shown below:"),Va.forEach(s),we=m(e),de=p(e,"DIV",{class:!0});var Ko=h(de);Me=p(Ko,"DIV",{class:!0});var Lo=h(Me);j(se.$$.fragment,Lo),Lo.forEach(s),Ko.forEach(s),Ee=m(e),ke=p(e,"P",{});var Ro=h(ke);ce=o(Ro,"Let\u2019s dive in!"),Ro.forEach(s),Te=m(e),j(ue.$$.fragment,e),ae=m(e),j(be.$$.fragment,e),me=m(e),ye=p(e,"H2",{class:!0});var Ja=h(ye);ve=p(Ja,"A",{id:!0,class:!0,href:!0});var al=h(ve);ie=p(al,"SPAN",{});var cd=h(ie);j(K.$$.fragment,cd),cd.forEach(s),al.forEach(s),J=m(Ja),Ne=p(Ja,"SPAN",{});var ud=h(Ne);M=o(ud,"Picking a pretrained model for masked language modeling"),ud.forEach(s),Ja.forEach(s),Q=m(e),Oe=p(e,"P",{});var Li=h(Oe);Ke=o(Li,"To get started, let\u2019s pick a suitable pretrained model for masked language modeling. As shown in the following screenshot, you can find a list of candidates by applying the \u201CFill-Mask\u201D filter on the "),$e=p(Li,"A",{href:!0,rel:!0});var md=h($e);re=o(md,"Hugging Face Hub"),md.forEach(s),te=o(Li,":"),Li.forEach(s),Xe=m(e),je=p(e,"DIV",{class:!0});var fd=h(je);We=p(fd,"IMG",{src:!0,alt:!0,width:!0}),fd.forEach(s),Ge=m(e),X=p(e,"P",{});var Ps=h(X);Le=o(Ps,"Although the BERT and RoBERTa family of models are the most downloaded, we\u2019ll use a model called "),ze=p(Ps,"A",{href:!0,rel:!0});var _d=h(ze);St=o(_d,"DistilBERT"),_d.forEach(s),Ue=o(Ps,`
that can be trained much faster with little to no loss in downstream performance. This model was trained using a special technique called `),Re=p(Ps,"A",{href:!0,rel:!0});var gd=h(Re);at=p(gd,"EM",{});var wd=h(at);Ct=o(wd,"knowledge distillation"),wd.forEach(s),gd.forEach(s),Ns=o(Ps,", where a large \u201Cteacher model\u201D like BERT is used to guide the training of a \u201Cstudent model\u201D that has far fewer parameters. An explanation of the details of knowledge distillation would take us too far afield in this section, but if you\u2019re interested you can read all about it in "),rt=p(Ps,"A",{href:!0,rel:!0});var kd=h(rt);ot=p(kd,"EM",{});var bd=h(ot);hs=o(bd,"Natural Language Processing with Transformers"),bd.forEach(s),kd.forEach(s),wt=o(Ps," (colloquially known as the Transformers textbook)."),Ps.forEach(s),es=m(e),Ye.l(e),pt=m(e),Ot=p(e,"P",{});var yd=h(Ot);Ws=o(yd,"With around 67 million parameters, DistilBERT is approximately two times smaller than the BERT base model, which roughly translates into a two-fold speedup in training \u2014 nice! Let\u2019s now see what kinds of tokens this model predicts are the most likely completions of a small sample of text:"),yd.forEach(s),ts=m(e),j(Ve.$$.fragment,e),ss=m(e),xe=p(e,"P",{});var Jt=h(xe);Fs=o(Jt,"As humans, we can imagine many possibilities for the "),Kt=p(Jt,"CODE",{});var vd=h(Kt);kt=o(vd,"[MASK]"),vd.forEach(s),ds=o(Jt," token, such as \u201Cday\u201D, \u201Cride\u201D, or \u201Cpainting\u201D. For pretrained models, the predictions depend on the corpus the model was trained on, since it learns to pick up the statistical patterns present in the data. Like BERT, DistilBERT was pretrained on the "),Je=p(Jt,"A",{href:!0,rel:!0});var $d=h(Je);cs=o($d,"English Wikipedia"),$d.forEach(s),Lt=o(Jt," and "),bt=p(Jt,"A",{href:!0,rel:!0});var jd=h(bt);us=o(jd,"BookCorpus"),jd.forEach(s),c=o(Jt," datasets, so we expect the predictions for "),S=p(Jt,"CODE",{});var xd=h(S);ms=o(xd,"[MASK]"),xd.forEach(s),Qa=o(Jt," to reflect these domains. To predict the mask we need DistilBERT\u2019s tokenizer to produce the inputs for the model, so let\u2019s download that from the Hub as well:"),Jt.forEach(s),Bs=m(e),j(Rt.$$.fragment,e),yt=m(e),as=p(e,"P",{});var Ed=h(as);Xa=o(Ed,"With a tokenizer and a model, we can now pass our text example to the model, extract the logits, and print out the top 5 candidates:"),Ed.forEach(s),nt=m(e),et.l(e),os=m(e),j(ht.$$.fragment,e),Hs=m(e),vt=p(e,"P",{});var Td=h(vt);Za=o(Td,"We can see from the outputs that the model\u2019s predictions refer to everyday terms, which is perhaps not surprising given the foundation of English Wikipedia. Let\u2019s see how we can change this domain to something a bit more niche \u2014 highly polarized movie reviews!"),Td.forEach(s),Is=m(e),tt=p(e,"H2",{class:!0});var Ri=h(tt);$t=p(Ri,"A",{id:!0,class:!0,href:!0});var zd=h($t);Nt=p(zd,"SPAN",{});var Ad=h(Nt);j(Wt.$$.fragment,Ad),Ad.forEach(s),zd.forEach(s),eo=m(Ri),fs=p(Ri,"SPAN",{});var qd=h(fs);_s=o(qd,"The dataset"),qd.forEach(s),Ri.forEach(s),Gs=m(e),lt=p(e,"P",{});var No=h(lt);to=o(No,"To showcase domain adaptation, we\u2019ll use the famous "),Us=p(No,"A",{href:!0,rel:!0});var Dd=h(Us);Zi=o(Dd,"Large Movie Review Dataset"),Dd.forEach(s),er=o(No," (or IMDb for short), which is a corpus of movie reviews that is often used to benchmark sentiment analysis models. By fine-tuning DistilBERT on this corpus, we expect the language model will adapt its vocabulary from the factual data of Wikipedia that it was pretrained on to the more subjective elements of movie reviews. We can get the data from the Hugging Face Hub with the "),Vo=p(No,"CODE",{});var Md=h(Vo);tr=o(Md,"load_dataset()"),Md.forEach(s),sr=o(No," function from \u{1F917} Datasets:"),No.forEach(s),ol=m(e),j(Ys.$$.fragment,e),nl=m(e),j(Vs.$$.fragment,e),ll=m(e),Fe=p(e,"P",{});var ft=h(Fe);ar=o(ft,"We can see that the "),Jo=p(ft,"CODE",{});var Pd=h(Jo);or=o(Pd,"train"),Pd.forEach(s),nr=o(ft," and "),Qo=p(ft,"CODE",{});var Sd=h(Qo);lr=o(Sd,"test"),Sd.forEach(s),ir=o(ft," splits each consist of 25,000 reviews, while there is an unlabeled split called "),Xo=p(ft,"CODE",{});var Cd=h(Xo);rr=o(Cd,"unsupervised"),Cd.forEach(s),pr=o(ft," that contains 50,000 reviews. Let\u2019s take a look at a few samples to get an idea of what kind of text we\u2019re dealing with. As we\u2019ve done in previous chapters of the course, we\u2019ll chain the "),Zo=p(ft,"CODE",{});var Od=h(Zo);hr=o(Od,"Dataset.shuffle()"),Od.forEach(s),dr=o(ft," and "),en=p(ft,"CODE",{});var Kd=h(en);cr=o(Kd,"Dataset.select()"),Kd.forEach(s),ur=o(ft," functions to create a random sample:"),ft.forEach(s),il=m(e),j(Js.$$.fragment,e),rl=m(e),j(Qs.$$.fragment,e),pl=m(e),Ft=p(e,"P",{});var Wo=h(Ft);mr=o(Wo,"Yep, these are certainly movie reviews, and if you\u2019re old enough you may even understand the comment in the last review about owning a VHS version \u{1F61C}! Although we won\u2019t need the labels for language modeling, we can already see that a "),tn=p(Wo,"CODE",{});var Ld=h(tn);fr=o(Ld,"0"),Ld.forEach(s),_r=o(Wo," denotes a negative review, while a "),sn=p(Wo,"CODE",{});var Rd=h(sn);gr=o(Rd,"1"),Rd.forEach(s),wr=o(Wo," corresponds to a positive one."),Wo.forEach(s),hl=m(e),j(gs.$$.fragment,e),dl=m(e),ws=p(e,"P",{});var Ni=h(ws);kr=o(Ni,"Now that we\u2019ve had a quick look at the data, let\u2019s dive into preparing it for masked language modeling. As we\u2019ll see, there are some additional steps that one needs to take compared to the sequence classification tasks we saw in "),so=p(Ni,"A",{href:!0});var Nd=h(so);br=o(Nd,"Chapter 3"),Nd.forEach(s),yr=o(Ni,". Let\u2019s go!"),Ni.forEach(s),cl=m(e),ns=p(e,"H2",{class:!0});var Wi=h(ns);ks=p(Wi,"A",{id:!0,class:!0,href:!0});var Wd=h(ks);an=p(Wd,"SPAN",{});var Fd=h(an);j(Xs.$$.fragment,Fd),Fd.forEach(s),Wd.forEach(s),vr=m(Wi),on=p(Wi,"SPAN",{});var Bd=h(on);$r=o(Bd,"Preprocessing the data"),Bd.forEach(s),Wi.forEach(s),ul=m(e),j(Zs.$$.fragment,e),ml=m(e),ao=p(e,"P",{});var Hd=h(ao);jr=o(Hd,"For both auto-regressive and masked language modeling, a common preprocessing step is to concatenate all the examples and then split the whole corpus into chunks of equal size. This is quite different from our usual approach, where we simply tokenize individual examples. Why concatenate everything together? The reason is that individual examples might get truncated if they\u2019re too long, and that would result in losing information that might be useful for the language modeling task!"),Hd.forEach(s),fl=m(e),Be=p(e,"P",{});var _t=h(Be);xr=o(_t,"So to get started, we\u2019ll first tokenize our corpus as usual, but "),nn=p(_t,"EM",{});var Id=h(nn);Er=o(Id,"without"),Id.forEach(s),Tr=o(_t," setting the "),ln=p(_t,"CODE",{});var Gd=h(ln);zr=o(Gd,"truncation=True"),Gd.forEach(s),Ar=o(_t," option in our tokenizer. We\u2019ll also grab the word IDs if they are available ((which they will be if we\u2019re using a fast tokenizer, as described in "),oo=p(_t,"A",{href:!0});var Ud=h(oo);qr=o(Ud,"Chapter 6"),Ud.forEach(s),Dr=o(_t,"), as we will need them later on to do whole word masking. We\u2019ll wrap this in a simple function, and while we\u2019re at it we\u2019ll remove the "),rn=p(_t,"CODE",{});var Yd=h(rn);Mr=o(Yd,"text"),Yd.forEach(s),Pr=o(_t," and "),pn=p(_t,"CODE",{});var Vd=h(pn);Sr=o(Vd,"label"),Vd.forEach(s),Cr=o(_t," columns since we don\u2019t need them any longer:"),_t.forEach(s),_l=m(e),j(ea.$$.fragment,e),gl=m(e),j(ta.$$.fragment,e),wl=m(e),dt=p(e,"P",{});var Ss=h(dt);Or=o(Ss,"Since DistilBERT is a BERT-like model, we can see that the encoded texts consist of the "),hn=p(Ss,"CODE",{});var Jd=h(hn);Kr=o(Jd,"input_ids"),Jd.forEach(s),Lr=o(Ss," and "),dn=p(Ss,"CODE",{});var Qd=h(dn);Rr=o(Qd,"attention_mask"),Qd.forEach(s),Nr=o(Ss," that we\u2019ve seen in other chapters, as well as the "),cn=p(Ss,"CODE",{});var Xd=h(cn);Wr=o(Xd,"word_ids"),Xd.forEach(s),Fr=o(Ss," we added."),Ss.forEach(s),kl=m(e),bs=p(e,"P",{});var Fi=h(bs);Br=o(Fi,"Now that we\u2019ve tokenized our movie reviews, the next step is to group them all together and split the result into chunks. But how big should these chunks be? This will ultimately be determined by the amount of GPU memory that you have available, but a good starting point is to see what the model\u2019s maximum context size is. This can be inferred by inspecting the "),un=p(Fi,"CODE",{});var Zd=h(un);Hr=o(Zd,"model_max_length"),Zd.forEach(s),Ir=o(Fi," attribute of the tokenizer:"),Fi.forEach(s),bl=m(e),j(sa.$$.fragment,e),yl=m(e),j(aa.$$.fragment,e),vl=m(e),ys=p(e,"P",{});var Bi=h(ys);Gr=o(Bi,"This value is derived from the "),mn=p(Bi,"EM",{});var ec=h(mn);Ur=o(ec,"tokenizer_config.json"),ec.forEach(s),Yr=o(Bi," file associated with a checkpoint; in this case we can see that the context size is 512 tokens, just like with BERT."),Bi.forEach(s),$l=m(e),j(vs.$$.fragment,e),jl=m(e),no=p(e,"P",{});var tc=h(no);Vr=o(tc,"So, in order to run our experiments on GPUs like those found on Google Colab, we\u2019ll pick something a bit smaller that can fit in memory:"),tc.forEach(s),xl=m(e),j(oa.$$.fragment,e),El=m(e),j($s.$$.fragment,e),Tl=m(e),lo=p(e,"P",{});var sc=h(lo);Jr=o(sc,"Now comes the fun part. To show how the concatenation works, let\u2019s take a few reviews from our tokenized training set and print out the number of tokens per review:"),sc.forEach(s),zl=m(e),j(na.$$.fragment,e),Al=m(e),j(la.$$.fragment,e),ql=m(e),io=p(e,"P",{});var ac=h(io);Qr=o(ac,"We can then concatenate all these examples with a simple dictionary comprehension, as follows:"),ac.forEach(s),Dl=m(e),j(ia.$$.fragment,e),Ml=m(e),j(ra.$$.fragment,e),Pl=m(e),Bt=p(e,"P",{});var Fo=h(Bt);Xr=o(Fo,"Great, the total length checks out \u2014 so now let\u2019s split the concatenated reviews into chunks of the size given by "),fn=p(Fo,"CODE",{});var oc=h(fn);Zr=o(oc,"block_size"),oc.forEach(s),ep=o(Fo,". To do so, we iterate over the features in "),_n=p(Fo,"CODE",{});var nc=h(_n);tp=o(nc,"concatenated_examples"),nc.forEach(s),sp=o(Fo," and use a list comprehension to create slices of each feature. The result is a dictionary of chunks for each feature:"),Fo.forEach(s),Sl=m(e),j(pa.$$.fragment,e),Cl=m(e),j(ha.$$.fragment,e),Ol=m(e),ro=p(e,"P",{});var lc=h(ro);ap=o(lc,"As you can see in this example, the last chunk will generally be smaller than the maximum chunk size. There are two main strategies for dealing with this:"),lc.forEach(s),Kl=m(e),js=p(e,"UL",{});var Hi=h(js);da=p(Hi,"LI",{});var Ii=h(da);op=o(Ii,"Drop the last chunk if it\u2019s smaller than "),gn=p(Ii,"CODE",{});var ic=h(gn);np=o(ic,"chunk_size"),ic.forEach(s),lp=o(Ii,"."),Ii.forEach(s),ip=m(Hi),ca=p(Hi,"LI",{});var Gi=h(ca);rp=o(Gi,"Pad the last chunk until its length equals "),wn=p(Gi,"CODE",{});var rc=h(wn);pp=o(rc,"chunk_size"),rc.forEach(s),hp=o(Gi,"."),Gi.forEach(s),Hi.forEach(s),Ll=m(e),po=p(e,"P",{});var pc=h(po);dp=o(pc,"We\u2019ll take the first approach here, so let\u2019s wrap all of the above logic in a single function that we can apply to our tokenized datasets:"),pc.forEach(s),Rl=m(e),j(ua.$$.fragment,e),Nl=m(e),st=p(e,"P",{});var Qt=h(st);cp=o(Qt,"Note that in the last step of "),kn=p(Qt,"CODE",{});var hc=h(kn);up=o(hc,"group_texts()"),hc.forEach(s),mp=o(Qt," we create a new "),bn=p(Qt,"CODE",{});var dc=h(bn);fp=o(dc,"labels"),dc.forEach(s),_p=o(Qt," column which is a copy of the "),yn=p(Qt,"CODE",{});var cc=h(yn);gp=o(cc,"input_ids"),cc.forEach(s),wp=o(Qt," one. As we\u2019ll see shortly, that\u2019s because in masked language modeling the objective is to predict randomly masked tokens in the input batch, and by creating a "),vn=p(Qt,"CODE",{});var uc=h(vn);kp=o(uc,"labels"),uc.forEach(s),bp=o(Qt," column we provide the ground truth for our language model to learn from."),Qt.forEach(s),Wl=m(e),Ht=p(e,"P",{});var Bo=h(Ht);yp=o(Bo,"Let\u2019s now apply "),$n=p(Bo,"CODE",{});var mc=h($n);vp=o(mc,"group_texts()"),mc.forEach(s),$p=o(Bo," to our tokenized datasets using our trusty "),jn=p(Bo,"CODE",{});var fc=h(jn);jp=o(fc,"Dataset.map()"),fc.forEach(s),xp=o(Bo," function:"),Bo.forEach(s),Fl=m(e),j(ma.$$.fragment,e),Bl=m(e),j(fa.$$.fragment,e),Hl=m(e),He=p(e,"P",{});var gt=h(He);Ep=o(gt,"You can see that grouping and then chunking the texts has produced many more examples than our original 25,000 for the "),xn=p(gt,"CODE",{});var _c=h(xn);Tp=o(_c,"train"),_c.forEach(s),zp=o(gt," and "),En=p(gt,"CODE",{});var gc=h(En);Ap=o(gc,"test"),gc.forEach(s),qp=o(gt," splits. That\u2019s because we now have examples involving "),Tn=p(gt,"EM",{});var wc=h(Tn);Dp=o(wc,"contiguous tokens"),wc.forEach(s),Mp=o(gt," that span across multiple examples from the original corpus. You can see this explicitly by looking for the special "),zn=p(gt,"CODE",{});var kc=h(zn);Pp=o(kc,"[SEP]"),kc.forEach(s),Sp=o(gt," and "),An=p(gt,"CODE",{});var bc=h(An);Cp=o(bc,"[CLS]"),bc.forEach(s),Op=o(gt," tokens in one of the chunks:"),gt.forEach(s),Il=m(e),j(_a.$$.fragment,e),Gl=m(e),j(ga.$$.fragment,e),Ul=m(e),ho=p(e,"P",{});var yc=h(ho);Kp=o(yc,"In this example you can see two overlapping movie reviews, one about a high school movie and the other about homelessness. Let\u2019s also check out what the labels look like for masked language modeling:"),yc.forEach(s),Yl=m(e),j(wa.$$.fragment,e),Vl=m(e),j(ka.$$.fragment,e),Jl=m(e),ct=p(e,"P",{});var Cs=h(ct);Lp=o(Cs,"As expected from our "),qn=p(Cs,"CODE",{});var vc=h(qn);Rp=o(vc,"group_texts()"),vc.forEach(s),Np=o(Cs," function above, this looks identical to the decoded "),Dn=p(Cs,"CODE",{});var $c=h(Dn);Wp=o($c,"input_ids"),$c.forEach(s),Fp=o(Cs," \u2014 but then how can our model possibly learn anything? We\u2019re missing a key step: inserting "),Mn=p(Cs,"CODE",{});var jc=h(Mn);Bp=o(jc,"[MASK]"),jc.forEach(s),Hp=o(Cs," tokens at random positions in the inputs! Let\u2019s see how we can do this on the fly during fine-tuning using a special data collator."),Cs.forEach(s),Ql=m(e),ls=p(e,"H2",{class:!0});var Ui=h(ls);xs=p(Ui,"A",{id:!0,class:!0,href:!0});var xc=h(xs);Pn=p(xc,"SPAN",{});var Ec=h(Pn);j(ba.$$.fragment,Ec),Ec.forEach(s),xc.forEach(s),Ip=m(Ui),ya=p(Ui,"SPAN",{});var Yi=h(ya);Gp=o(Yi,"Fine-tuning DistilBERT with the "),Sn=p(Yi,"CODE",{});var Tc=h(Sn);Up=o(Tc,"Trainer"),Tc.forEach(s),Yp=o(Yi," API"),Yi.forEach(s),Ui.forEach(s),Xl=m(e),ut=p(e,"P",{});var Os=h(ut);Vp=o(Os,"Fine-tuning a masked language model is almost identical to fine-tuning a sequence classification model, like we did in "),co=p(Os,"A",{href:!0});var zc=h(co);Jp=o(zc,"Chapter 3"),zc.forEach(s),Qp=o(Os,". The only difference is that we need a special data collator that can randomly mask some of the tokens in each batch of texts. Fortunately, \u{1F917} Transformers comes prepared with a dedicated "),Cn=p(Os,"CODE",{});var Ac=h(Cn);Xp=o(Ac,"DataCollatorForLanguageModeling"),Ac.forEach(s),Zp=o(Os," for just this task. We just have to pass it the tokenizer and an "),On=p(Os,"CODE",{});var qc=h(On);eh=o(qc,"mlm_probability"),qc.forEach(s),th=o(Os," argument that specifies what fraction of the tokens to mask. We\u2019ll pick 15%, which is the amount used for BERT and a common choice in the literature:"),Os.forEach(s),Zl=m(e),j(va.$$.fragment,e),ei=m(e),mt=p(e,"P",{});var Ks=h(mt);sh=o(Ks,"To see how the random masking works, let\u2019s feed a few examples to the data collator. Since it expects a list of "),Kn=p(Ks,"CODE",{});var Dc=h(Kn);ah=o(Dc,"dict"),Dc.forEach(s),oh=o(Ks,"s, where each "),Ln=p(Ks,"CODE",{});var Mc=h(Ln);nh=o(Mc,"dict"),Mc.forEach(s),lh=o(Ks," represents a single chunk of contiguous text, we first iterate over the dataset before feeding the batch to the collator. We remove the "),Rn=p(Ks,"CODE",{});var Pc=h(Rn);ih=o(Pc,'"word_ids"'),Pc.forEach(s),rh=o(Ks," key for this data collator as it does not expect it:"),Ks.forEach(s),ti=m(e),j($a.$$.fragment,e),si=m(e),j(ja.$$.fragment,e),ai=m(e),It=p(e,"P",{});var Ho=h(It);ph=o(Ho,"Nice, it worked! We can see that the "),Nn=p(Ho,"CODE",{});var Sc=h(Nn);hh=o(Sc,"[MASK]"),Sc.forEach(s),dh=o(Ho," token has been randomly inserted at various locations in our text. These will be the tokens which our model will have to predict during training \u2014 and the beauty of the data collator is that it will randomize the "),Wn=p(Ho,"CODE",{});var Cc=h(Wn);ch=o(Cc,"[MASK]"),Cc.forEach(s),uh=o(Ho," insertion with every batch!"),Ho.forEach(s),oi=m(e),j(Es.$$.fragment,e),ni=m(e),Qe&&Qe.l(e),uo=m(e),Gt=p(e,"P",{});var Io=h(Gt);mh=o(Io,"When training models for masked language modeling, one technique that can be used is to mask whole words together, not just individual tokens. This approach is called "),Fn=p(Io,"EM",{});var Oc=h(Fn);fh=o(Oc,"whole word masking"),Oc.forEach(s),_h=o(Io,". If we want to use whole word masking, we will need to build a data collator ourselves. A data collator is just a function that takes a list of samples and converts them into a batch, so let\u2019s do this now! We\u2019ll use the word IDs computed earlier to make a map between word indices and the corresponding tokens, then randomly decide which words to mask and apply that mask on the inputs. Note that the labels are all "),Bn=p(Io,"CODE",{});var Kc=h(Bn);gh=o(Kc,"-100"),Kc.forEach(s),wh=o(Io," except for the ones corresponding to mask words."),Io.forEach(s),li=m(e),xt.l(e),mo=m(e),fo=p(e,"P",{});var Lc=h(fo);kh=o(Lc,"Next, we can try it on the same samples as before:"),Lc.forEach(s),ii=m(e),j(xa.$$.fragment,e),ri=m(e),j(Ea.$$.fragment,e),pi=m(e),j(Ts.$$.fragment,e),hi=m(e),Ut=p(e,"P",{});var Go=h(Ut);bh=o(Go,"Now that we have two data collators, the rest of the fine-tuning steps are standard. Training can take a while on Google Colab if you\u2019re not lucky enough to score a mythical P100 GPU \u{1F62D}, so we\u2019ll first downsample the size of the training set to a few thousand examples. Don\u2019t worry, we\u2019ll still get a pretty decent language model! A quick way to downsample a dataset in \u{1F917} Datasets is via the "),Hn=p(Go,"CODE",{});var Rc=h(Hn);yh=o(Rc,"Dataset.train_test_split()"),Rc.forEach(s),vh=o(Go," function that we saw in "),_o=p(Go,"A",{href:!0});var Nc=h(_o);$h=o(Nc,"Chapter 5"),Nc.forEach(s),jh=o(Go,":"),Go.forEach(s),di=m(e),j(Ta.$$.fragment,e),ci=m(e),j(za.$$.fragment,e),ui=m(e),Yt=p(e,"P",{});var Uo=h(Yt);xh=o(Uo,"This has automatically created new "),In=p(Uo,"CODE",{});var Wc=h(In);Eh=o(Wc,"train"),Wc.forEach(s),Th=o(Uo," and "),Gn=p(Uo,"CODE",{});var Fc=h(Gn);zh=o(Fc,"test"),Fc.forEach(s),Ah=o(Uo," splits, with the training set size set to 10,000 examples and the validation set to 10% of that \u2014 feel free to increase this if you have a beefy GPU! The next thing we need to do is log in to the Hugging Face Hub. If you\u2019re running this code in a notebook, you can do so with the following utility function:"),Uo.forEach(s),mi=m(e),j(Aa.$$.fragment,e),fi=m(e),go=p(e,"P",{});var Bc=h(go);qh=o(Bc,"which will display a widget where you can enter your credentials. Alternatively, you can run:"),Bc.forEach(s),_i=m(e),j(qa.$$.fragment,e),gi=m(e),wo=p(e,"P",{});var Hc=h(wo);Dh=o(Hc,"in your favorite terminal and log in there."),Hc.forEach(s),wi=m(e),Tt.l(e),ko=m(e),is=p(e,"H3",{class:!0});var Vi=h(is);zs=p(Vi,"A",{id:!0,class:!0,href:!0});var Ic=h(zs);Un=p(Ic,"SPAN",{});var Gc=h(Un);j(Da.$$.fragment,Gc),Gc.forEach(s),Ic.forEach(s),Mh=m(Vi),Yn=p(Vi,"SPAN",{});var Uc=h(Yn);Ph=o(Uc,"Perplexity for language models"),Uc.forEach(s),Vi.forEach(s),ki=m(e),j(Ma.$$.fragment,e),bi=m(e),bo=p(e,"P",{});var Yc=h(bo);Sh=o(Yc,"Unlike other tasks like text classification or question answering where we\u2019re given a labeled corpus to train on, with language modeling we don\u2019t have any explicit labels. So how do we determine what makes a good language model? Like with the autocorrect feature in your phone, a good language model is one that assigns high probabilities to sentences that are grammatically correct, and low probabilities to nonsense sentences. To give you a better idea of what this looks like, you can find whole sets of \u201Cautocorrect fails\u201D online, where the model in a person\u2019s phone has produced some rather funny (and often inappropriate) completions!"),Yc.forEach(s),yi=m(e),At.l(e),yo=m(e),j(Pa.$$.fragment,e),vi=m(e),vo=p(e,"P",{});var Vc=h(vo);Ch=o(Vc,"A lower perplexity score means a better language model, and we can see here that our starting model has a somewhat large value. Let\u2019s see if we can lower it by fine-tuning! To do that, we first run the training loop:"),Vc.forEach(s),$i=m(e),Dt.l(e),$o=m(e),jo=p(e,"P",{});var Jc=h(jo);Oh=o(Jc,"and then compute the resulting perplexity on the test set as before:"),Jc.forEach(s),ji=m(e),Pt.l(e),xo=m(e),j(Sa.$$.fragment,e),xi=m(e),Eo=p(e,"P",{});var Qc=h(Eo);Kh=o(Qc,"Nice \u2014 this is quite a reduction in perplexity, which tells us the model has learned something about the domain of movie reviews!"),Qc.forEach(s),Ei=m(e),Pe&&Pe.l(e),To=m(e),j(As.$$.fragment,e),Ti=m(e),Se&&Se.l(e),zo=m(e),rs=p(e,"H2",{class:!0});var Ji=h(rs);qs=p(Ji,"A",{id:!0,class:!0,href:!0});var Xc=h(qs);Vn=p(Xc,"SPAN",{});var Zc=h(Vn);j(Ca.$$.fragment,Zc),Zc.forEach(s),Xc.forEach(s),Lh=m(Ji),Jn=p(Ji,"SPAN",{});var eu=h(Jn);Rh=o(eu,"Using our fine-tuned model"),eu.forEach(s),Ji.forEach(s),zi=m(e),Vt=p(e,"P",{});var Yo=h(Vt);Nh=o(Yo,"You can interact with your fine-tuned model either by using its widget on the Hub or locally with the "),Qn=p(Yo,"CODE",{});var tu=h(Qn);Wh=o(tu,"pipeline"),tu.forEach(s),Fh=o(Yo," from \u{1F917} Transformers. Let\u2019s use the latter to download our model using the "),Xn=p(Yo,"CODE",{});var su=h(Xn);Bh=o(su,"fill-mask"),su.forEach(s),Hh=o(Yo," pipeline:"),Yo.forEach(s),Ai=m(e),j(Oa.$$.fragment,e),qi=m(e),Ao=p(e,"P",{});var au=h(Ao);Ih=o(au,"We can then feed the pipeline our sample text of \u201CThis is a great [MASK]\u201D and see what the top 5 predictions are:"),au.forEach(s),Di=m(e),j(Ka.$$.fragment,e),Mi=m(e),j(La.$$.fragment,e),Pi=m(e),qo=p(e,"P",{});var ou=h(qo);Gh=o(ou,"Neat \u2014 our model has clearly adapted its weights to predict words that are more strongly associated with movies!"),ou.forEach(s),Si=m(e),j(Ra.$$.fragment,e),Ci=m(e),Ds=p(e,"P",{});var Qi=h(Ds);Uh=o(Qi,"This wraps up our first experiment with training a language model. In "),Do=p(Qi,"A",{href:!0});var nu=h(Do);Yh=o(nu,"section 6"),nu.forEach(s),Vh=o(Qi," you\u2019ll learn how to train an auto-regressive model like GPT-2 from scratch; head over there if you\u2019d like to see how you can pretrain your very own Transformer model!"),Qi.forEach(s),Oi=m(e),j(Ms.$$.fragment,e),this.h()},h(){z(i,"name","hf:doc:metadata"),z(i,"content",JSON.stringify(Iu)),z(k,"id","finetuning-a-masked-language-model"),z(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(k,"href","#finetuning-a-masked-language-model"),z(T,"class","relative group"),z(oe,"href","https://arxiv.org/abs/1801.06146"),z(oe,"rel","nofollow"),lu(Z.src,he="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/ulmfit.png")||z(Z,"src",he),z(Z,"alt","ULMFiT."),z(Z,"width","80%"),z(ne,"class","flex justify-center"),z(le,"href","https://huggingface.co/huggingface-course/distilbert-base-uncased-finetuned-imdb?text=This+is+a+great+%5BMASK%5D."),z(le,"rel","nofollow"),z(Me,"class","max-w-md z-40"),z(de,"class","w-full flex justify-center z-40"),z(ve,"id","picking-a-pretrained-model-for-masked-language-modeling"),z(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(ve,"href","#picking-a-pretrained-model-for-masked-language-modeling"),z(ye,"class","relative group"),z($e,"href","https://huggingface.co/models?pipeline_tag=fill-mask&sort=downloads"),z($e,"rel","nofollow"),lu(We.src,it="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/mlm-models.png")||z(We,"src",it),z(We,"alt","Hub models."),z(We,"width","80%"),z(je,"class","flex justify-center"),z(ze,"href","https://huggingface.co/distilbert-base-uncased"),z(ze,"rel","nofollow"),z(Re,"href","https://en.wikipedia.org/wiki/Knowledge_distillation"),z(Re,"rel","nofollow"),z(rt,"href","https://learning.oreilly.com/library/view/natural-language-processing/9781098103231/ch05.html"),z(rt,"rel","nofollow"),z(Je,"href","https://huggingface.co/datasets/wikipedia"),z(Je,"rel","nofollow"),z(bt,"href","https://huggingface.co/datasets/bookcorpus"),z(bt,"rel","nofollow"),z($t,"id","the-dataset"),z($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z($t,"href","#the-dataset"),z(tt,"class","relative group"),z(Us,"href","https://huggingface.co/datasets/imdb"),z(Us,"rel","nofollow"),z(so,"href","/course/chapter3"),z(ks,"id","preprocessing-the-data"),z(ks,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(ks,"href","#preprocessing-the-data"),z(ns,"class","relative group"),z(oo,"href","/course/chapter6/3"),z(xs,"id","finetuning-distilbert-with-the-trainer-api"),z(xs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(xs,"href","#finetuning-distilbert-with-the-trainer-api"),z(ls,"class","relative group"),z(co,"href","/course/chapter3"),z(_o,"href","/course/chapter5"),z(zs,"id","perplexity-for-language-models"),z(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(zs,"href","#perplexity-for-language-models"),z(is,"class","relative group"),z(qs,"id","using-our-finetuned-model"),z(qs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(qs,"href","#using-our-finetuned-model"),z(rs,"class","relative group"),z(Do,"href","/course/chapter7/section6")},m(e,n){t(iu.head,i),l(e,f,n),x(d,e,n),l(e,y,n),l(e,T,n),t(T,k),t(k,b),x(q,b,null),t(T,g),t(T,D),t(D,L),l(e,O,n),Na[P].m(e,n),l(e,W,n),l(e,F,n),t(F,H),l(e,B,n),l(e,v,n),t(v,R),l(e,U,n),l(e,Y,n),t(Y,V),t(Y,I),t(I,qe),t(Y,pe),t(Y,oe),t(oe,G),t(Y,fe),l(e,De,n),l(e,ne,n),t(ne,Z),l(e,_e,n),l(e,ee,n),t(ee,Ce),t(ee,le),t(le,ge),t(ee,Ie),l(e,we,n),l(e,de,n),t(de,Me),x(se,Me,null),l(e,Ee,n),l(e,ke,n),t(ke,ce),l(e,Te,n),x(ue,e,n),l(e,ae,n),x(be,e,n),l(e,me,n),l(e,ye,n),t(ye,ve),t(ve,ie),x(K,ie,null),t(ye,J),t(ye,Ne),t(Ne,M),l(e,Q,n),l(e,Oe,n),t(Oe,Ke),t(Oe,$e),t($e,re),t(Oe,te),l(e,Xe,n),l(e,je,n),t(je,We),l(e,Ge,n),l(e,X,n),t(X,Le),t(X,ze),t(ze,St),t(X,Ue),t(X,Re),t(Re,at),t(at,Ct),t(X,Ns),t(X,rt),t(rt,ot),t(ot,hs),t(X,wt),l(e,es,n),Wa[Ae].m(e,n),l(e,pt,n),l(e,Ot,n),t(Ot,Ws),l(e,ts,n),x(Ve,e,n),l(e,ss,n),l(e,xe,n),t(xe,Fs),t(xe,Kt),t(Kt,kt),t(xe,ds),t(xe,Je),t(Je,cs),t(xe,Lt),t(xe,bt),t(bt,us),t(xe,c),t(xe,S),t(S,ms),t(xe,Qa),l(e,Bs,n),x(Rt,e,n),l(e,yt,n),l(e,as,n),t(as,Xa),l(e,nt,n),Fa[Ze].m(e,n),l(e,os,n),x(ht,e,n),l(e,Hs,n),l(e,vt,n),t(vt,Za),l(e,Is,n),l(e,tt,n),t(tt,$t),t($t,Nt),x(Wt,Nt,null),t(tt,eo),t(tt,fs),t(fs,_s),l(e,Gs,n),l(e,lt,n),t(lt,to),t(lt,Us),t(Us,Zi),t(lt,er),t(lt,Vo),t(Vo,tr),t(lt,sr),l(e,ol,n),x(Ys,e,n),l(e,nl,n),x(Vs,e,n),l(e,ll,n),l(e,Fe,n),t(Fe,ar),t(Fe,Jo),t(Jo,or),t(Fe,nr),t(Fe,Qo),t(Qo,lr),t(Fe,ir),t(Fe,Xo),t(Xo,rr),t(Fe,pr),t(Fe,Zo),t(Zo,hr),t(Fe,dr),t(Fe,en),t(en,cr),t(Fe,ur),l(e,il,n),x(Js,e,n),l(e,rl,n),x(Qs,e,n),l(e,pl,n),l(e,Ft,n),t(Ft,mr),t(Ft,tn),t(tn,fr),t(Ft,_r),t(Ft,sn),t(sn,gr),t(Ft,wr),l(e,hl,n),x(gs,e,n),l(e,dl,n),l(e,ws,n),t(ws,kr),t(ws,so),t(so,br),t(ws,yr),l(e,cl,n),l(e,ns,n),t(ns,ks),t(ks,an),x(Xs,an,null),t(ns,vr),t(ns,on),t(on,$r),l(e,ul,n),x(Zs,e,n),l(e,ml,n),l(e,ao,n),t(ao,jr),l(e,fl,n),l(e,Be,n),t(Be,xr),t(Be,nn),t(nn,Er),t(Be,Tr),t(Be,ln),t(ln,zr),t(Be,Ar),t(Be,oo),t(oo,qr),t(Be,Dr),t(Be,rn),t(rn,Mr),t(Be,Pr),t(Be,pn),t(pn,Sr),t(Be,Cr),l(e,_l,n),x(ea,e,n),l(e,gl,n),x(ta,e,n),l(e,wl,n),l(e,dt,n),t(dt,Or),t(dt,hn),t(hn,Kr),t(dt,Lr),t(dt,dn),t(dn,Rr),t(dt,Nr),t(dt,cn),t(cn,Wr),t(dt,Fr),l(e,kl,n),l(e,bs,n),t(bs,Br),t(bs,un),t(un,Hr),t(bs,Ir),l(e,bl,n),x(sa,e,n),l(e,yl,n),x(aa,e,n),l(e,vl,n),l(e,ys,n),t(ys,Gr),t(ys,mn),t(mn,Ur),t(ys,Yr),l(e,$l,n),x(vs,e,n),l(e,jl,n),l(e,no,n),t(no,Vr),l(e,xl,n),x(oa,e,n),l(e,El,n),x($s,e,n),l(e,Tl,n),l(e,lo,n),t(lo,Jr),l(e,zl,n),x(na,e,n),l(e,Al,n),x(la,e,n),l(e,ql,n),l(e,io,n),t(io,Qr),l(e,Dl,n),x(ia,e,n),l(e,Ml,n),x(ra,e,n),l(e,Pl,n),l(e,Bt,n),t(Bt,Xr),t(Bt,fn),t(fn,Zr),t(Bt,ep),t(Bt,_n),t(_n,tp),t(Bt,sp),l(e,Sl,n),x(pa,e,n),l(e,Cl,n),x(ha,e,n),l(e,Ol,n),l(e,ro,n),t(ro,ap),l(e,Kl,n),l(e,js,n),t(js,da),t(da,op),t(da,gn),t(gn,np),t(da,lp),t(js,ip),t(js,ca),t(ca,rp),t(ca,wn),t(wn,pp),t(ca,hp),l(e,Ll,n),l(e,po,n),t(po,dp),l(e,Rl,n),x(ua,e,n),l(e,Nl,n),l(e,st,n),t(st,cp),t(st,kn),t(kn,up),t(st,mp),t(st,bn),t(bn,fp),t(st,_p),t(st,yn),t(yn,gp),t(st,wp),t(st,vn),t(vn,kp),t(st,bp),l(e,Wl,n),l(e,Ht,n),t(Ht,yp),t(Ht,$n),t($n,vp),t(Ht,$p),t(Ht,jn),t(jn,jp),t(Ht,xp),l(e,Fl,n),x(ma,e,n),l(e,Bl,n),x(fa,e,n),l(e,Hl,n),l(e,He,n),t(He,Ep),t(He,xn),t(xn,Tp),t(He,zp),t(He,En),t(En,Ap),t(He,qp),t(He,Tn),t(Tn,Dp),t(He,Mp),t(He,zn),t(zn,Pp),t(He,Sp),t(He,An),t(An,Cp),t(He,Op),l(e,Il,n),x(_a,e,n),l(e,Gl,n),x(ga,e,n),l(e,Ul,n),l(e,ho,n),t(ho,Kp),l(e,Yl,n),x(wa,e,n),l(e,Vl,n),x(ka,e,n),l(e,Jl,n),l(e,ct,n),t(ct,Lp),t(ct,qn),t(qn,Rp),t(ct,Np),t(ct,Dn),t(Dn,Wp),t(ct,Fp),t(ct,Mn),t(Mn,Bp),t(ct,Hp),l(e,Ql,n),l(e,ls,n),t(ls,xs),t(xs,Pn),x(ba,Pn,null),t(ls,Ip),t(ls,ya),t(ya,Gp),t(ya,Sn),t(Sn,Up),t(ya,Yp),l(e,Xl,n),l(e,ut,n),t(ut,Vp),t(ut,co),t(co,Jp),t(ut,Qp),t(ut,Cn),t(Cn,Xp),t(ut,Zp),t(ut,On),t(On,eh),t(ut,th),l(e,Zl,n),x(va,e,n),l(e,ei,n),l(e,mt,n),t(mt,sh),t(mt,Kn),t(Kn,ah),t(mt,oh),t(mt,Ln),t(Ln,nh),t(mt,lh),t(mt,Rn),t(Rn,ih),t(mt,rh),l(e,ti,n),x($a,e,n),l(e,si,n),x(ja,e,n),l(e,ai,n),l(e,It,n),t(It,ph),t(It,Nn),t(Nn,hh),t(It,dh),t(It,Wn),t(Wn,ch),t(It,uh),l(e,oi,n),x(Es,e,n),l(e,ni,n),Qe&&Qe.m(e,n),l(e,uo,n),l(e,Gt,n),t(Gt,mh),t(Gt,Fn),t(Fn,fh),t(Gt,_h),t(Gt,Bn),t(Bn,gh),t(Gt,wh),l(e,li,n),Ba[jt].m(e,n),l(e,mo,n),l(e,fo,n),t(fo,kh),l(e,ii,n),x(xa,e,n),l(e,ri,n),x(Ea,e,n),l(e,pi,n),x(Ts,e,n),l(e,hi,n),l(e,Ut,n),t(Ut,bh),t(Ut,Hn),t(Hn,yh),t(Ut,vh),t(Ut,_o),t(_o,$h),t(Ut,jh),l(e,di,n),x(Ta,e,n),l(e,ci,n),x(za,e,n),l(e,ui,n),l(e,Yt,n),t(Yt,xh),t(Yt,In),t(In,Eh),t(Yt,Th),t(Yt,Gn),t(Gn,zh),t(Yt,Ah),l(e,mi,n),x(Aa,e,n),l(e,fi,n),l(e,go,n),t(go,qh),l(e,_i,n),x(qa,e,n),l(e,gi,n),l(e,wo,n),t(wo,Dh),l(e,wi,n),Ha[Et].m(e,n),l(e,ko,n),l(e,is,n),t(is,zs),t(zs,Un),x(Da,Un,null),t(is,Mh),t(is,Yn),t(Yn,Ph),l(e,ki,n),x(Ma,e,n),l(e,bi,n),l(e,bo,n),t(bo,Sh),l(e,yi,n),Ia[zt].m(e,n),l(e,yo,n),x(Pa,e,n),l(e,vi,n),l(e,vo,n),t(vo,Ch),l(e,$i,n),Ga[qt].m(e,n),l(e,$o,n),l(e,jo,n),t(jo,Oh),l(e,ji,n),Ua[Mt].m(e,n),l(e,xo,n),x(Sa,e,n),l(e,xi,n),l(e,Eo,n),t(Eo,Kh),l(e,Ei,n),Pe&&Pe.m(e,n),l(e,To,n),x(As,e,n),l(e,Ti,n),Se&&Se.m(e,n),l(e,zo,n),l(e,rs,n),t(rs,qs),t(qs,Vn),x(Ca,Vn,null),t(rs,Lh),t(rs,Jn),t(Jn,Rh),l(e,zi,n),l(e,Vt,n),t(Vt,Nh),t(Vt,Qn),t(Qn,Wh),t(Vt,Fh),t(Vt,Xn),t(Xn,Bh),t(Vt,Hh),l(e,Ai,n),x(Oa,e,n),l(e,qi,n),l(e,Ao,n),t(Ao,Ih),l(e,Di,n),x(Ka,e,n),l(e,Mi,n),x(La,e,n),l(e,Pi,n),l(e,qo,n),t(qo,Gh),l(e,Si,n),x(Ra,e,n),l(e,Ci,n),l(e,Ds,n),t(Ds,Uh),t(Ds,Do),t(Do,Yh),t(Ds,Vh),l(e,Oi,n),x(Ms,e,n),Ki=!0},p(e,[n]){const Ya={};n&1&&(Ya.fw=e[0]),d.$set(Ya);let Mo=P;P=Qh(e),P!==Mo&&(Zt(),w(Na[Mo],1,1,()=>{Na[Mo]=null}),Xt(),N=Na[P],N||(N=Na[P]=Jh[P](e),N.c()),_(N,1),N.m(W.parentNode,W));const Zn={};n&8&&(Zn.$$scope={dirty:n,ctx:e}),be.$set(Zn);let Po=Ae;Ae=Zh(e),Ae!==Po&&(Zt(),w(Wa[Po],1,1,()=>{Wa[Po]=null}),Xt(),Ye=Wa[Ae],Ye||(Ye=Wa[Ae]=Xh[Ae](e),Ye.c()),_(Ye,1),Ye.m(pt.parentNode,pt));let So=Ze;Ze=td(e),Ze!==So&&(Zt(),w(Fa[So],1,1,()=>{Fa[So]=null}),Xt(),et=Fa[Ze],et||(et=Fa[Ze]=ed[Ze](e),et.c()),_(et,1),et.m(os.parentNode,os));const el={};n&8&&(el.$$scope={dirty:n,ctx:e}),gs.$set(el);const ps={};n&8&&(ps.$$scope={dirty:n,ctx:e}),vs.$set(ps);const tl={};n&8&&(tl.$$scope={dirty:n,ctx:e}),$s.$set(tl);const sl={};n&8&&(sl.$$scope={dirty:n,ctx:e}),Es.$set(sl),e[0]==="pt"?Qe||(Qe=ru(),Qe.c(),Qe.m(uo.parentNode,uo)):Qe&&(Qe.d(1),Qe=null);let Co=jt;jt=ad(e),jt!==Co&&(Zt(),w(Ba[Co],1,1,()=>{Ba[Co]=null}),Xt(),xt=Ba[jt],xt||(xt=Ba[jt]=sd[jt](e),xt.c()),_(xt,1),xt.m(mo.parentNode,mo));const Va={};n&8&&(Va.$$scope={dirty:n,ctx:e}),Ts.$set(Va);let Oo=Et;Et=nd(e),Et!==Oo&&(Zt(),w(Ha[Oo],1,1,()=>{Ha[Oo]=null}),Xt(),Tt=Ha[Et],Tt||(Tt=Ha[Et]=od[Et](e),Tt.c()),_(Tt,1),Tt.m(ko.parentNode,ko));let Ko=zt;zt=id(e),zt!==Ko&&(Zt(),w(Ia[Ko],1,1,()=>{Ia[Ko]=null}),Xt(),At=Ia[zt],At||(At=Ia[zt]=ld[zt](e),At.c()),_(At,1),At.m(yo.parentNode,yo));let Lo=qt;qt=pd(e),qt!==Lo&&(Zt(),w(Ga[Lo],1,1,()=>{Ga[Lo]=null}),Xt(),Dt=Ga[qt],Dt||(Dt=Ga[qt]=rd[qt](e),Dt.c()),_(Dt,1),Dt.m($o.parentNode,$o));let Ro=Mt;Mt=dd(e),Mt!==Ro&&(Zt(),w(Ua[Ro],1,1,()=>{Ua[Ro]=null}),Xt(),Pt=Ua[Mt],Pt||(Pt=Ua[Mt]=hd[Mt](e),Pt.c()),_(Pt,1),Pt.m(xo.parentNode,xo)),e[0]==="pt"?Pe?n&1&&_(Pe,1):(Pe=pu(),Pe.c(),_(Pe,1),Pe.m(To.parentNode,To)):Pe&&(Zt(),w(Pe,1,1,()=>{Pe=null}),Xt());const Ja={};n&8&&(Ja.$$scope={dirty:n,ctx:e}),As.$set(Ja),e[0]==="pt"?Se?n&1&&_(Se,1):(Se=hu(),Se.c(),_(Se,1),Se.m(zo.parentNode,zo)):Se&&(Zt(),w(Se,1,1,()=>{Se=null}),Xt());const al={};n&8&&(al.$$scope={dirty:n,ctx:e}),Ms.$set(al)},i(e){Ki||(_(d.$$.fragment,e),_(q.$$.fragment,e),_(N),_(se.$$.fragment,e),_(ue.$$.fragment,e),_(be.$$.fragment,e),_(K.$$.fragment,e),_(Ye),_(Ve.$$.fragment,e),_(Rt.$$.fragment,e),_(et),_(ht.$$.fragment,e),_(Wt.$$.fragment,e),_(Ys.$$.fragment,e),_(Vs.$$.fragment,e),_(Js.$$.fragment,e),_(Qs.$$.fragment,e),_(gs.$$.fragment,e),_(Xs.$$.fragment,e),_(Zs.$$.fragment,e),_(ea.$$.fragment,e),_(ta.$$.fragment,e),_(sa.$$.fragment,e),_(aa.$$.fragment,e),_(vs.$$.fragment,e),_(oa.$$.fragment,e),_($s.$$.fragment,e),_(na.$$.fragment,e),_(la.$$.fragment,e),_(ia.$$.fragment,e),_(ra.$$.fragment,e),_(pa.$$.fragment,e),_(ha.$$.fragment,e),_(ua.$$.fragment,e),_(ma.$$.fragment,e),_(fa.$$.fragment,e),_(_a.$$.fragment,e),_(ga.$$.fragment,e),_(wa.$$.fragment,e),_(ka.$$.fragment,e),_(ba.$$.fragment,e),_(va.$$.fragment,e),_($a.$$.fragment,e),_(ja.$$.fragment,e),_(Es.$$.fragment,e),_(xt),_(xa.$$.fragment,e),_(Ea.$$.fragment,e),_(Ts.$$.fragment,e),_(Ta.$$.fragment,e),_(za.$$.fragment,e),_(Aa.$$.fragment,e),_(qa.$$.fragment,e),_(Tt),_(Da.$$.fragment,e),_(Ma.$$.fragment,e),_(At),_(Pa.$$.fragment,e),_(Dt),_(Pt),_(Sa.$$.fragment,e),_(Pe),_(As.$$.fragment,e),_(Se),_(Ca.$$.fragment,e),_(Oa.$$.fragment,e),_(Ka.$$.fragment,e),_(La.$$.fragment,e),_(Ra.$$.fragment,e),_(Ms.$$.fragment,e),Ki=!0)},o(e){w(d.$$.fragment,e),w(q.$$.fragment,e),w(N),w(se.$$.fragment,e),w(ue.$$.fragment,e),w(be.$$.fragment,e),w(K.$$.fragment,e),w(Ye),w(Ve.$$.fragment,e),w(Rt.$$.fragment,e),w(et),w(ht.$$.fragment,e),w(Wt.$$.fragment,e),w(Ys.$$.fragment,e),w(Vs.$$.fragment,e),w(Js.$$.fragment,e),w(Qs.$$.fragment,e),w(gs.$$.fragment,e),w(Xs.$$.fragment,e),w(Zs.$$.fragment,e),w(ea.$$.fragment,e),w(ta.$$.fragment,e),w(sa.$$.fragment,e),w(aa.$$.fragment,e),w(vs.$$.fragment,e),w(oa.$$.fragment,e),w($s.$$.fragment,e),w(na.$$.fragment,e),w(la.$$.fragment,e),w(ia.$$.fragment,e),w(ra.$$.fragment,e),w(pa.$$.fragment,e),w(ha.$$.fragment,e),w(ua.$$.fragment,e),w(ma.$$.fragment,e),w(fa.$$.fragment,e),w(_a.$$.fragment,e),w(ga.$$.fragment,e),w(wa.$$.fragment,e),w(ka.$$.fragment,e),w(ba.$$.fragment,e),w(va.$$.fragment,e),w($a.$$.fragment,e),w(ja.$$.fragment,e),w(Es.$$.fragment,e),w(xt),w(xa.$$.fragment,e),w(Ea.$$.fragment,e),w(Ts.$$.fragment,e),w(Ta.$$.fragment,e),w(za.$$.fragment,e),w(Aa.$$.fragment,e),w(qa.$$.fragment,e),w(Tt),w(Da.$$.fragment,e),w(Ma.$$.fragment,e),w(At),w(Pa.$$.fragment,e),w(Dt),w(Pt),w(Sa.$$.fragment,e),w(Pe),w(As.$$.fragment,e),w(Se),w(Ca.$$.fragment,e),w(Oa.$$.fragment,e),w(Ka.$$.fragment,e),w(La.$$.fragment,e),w(Ra.$$.fragment,e),w(Ms.$$.fragment,e),Ki=!1},d(e){s(i),e&&s(f),E(d,e),e&&s(y),e&&s(T),E(q),e&&s(O),Na[P].d(e),e&&s(W),e&&s(F),e&&s(B),e&&s(v),e&&s(U),e&&s(Y),e&&s(De),e&&s(ne),e&&s(_e),e&&s(ee),e&&s(we),e&&s(de),E(se),e&&s(Ee),e&&s(ke),e&&s(Te),E(ue,e),e&&s(ae),E(be,e),e&&s(me),e&&s(ye),E(K),e&&s(Q),e&&s(Oe),e&&s(Xe),e&&s(je),e&&s(Ge),e&&s(X),e&&s(es),Wa[Ae].d(e),e&&s(pt),e&&s(Ot),e&&s(ts),E(Ve,e),e&&s(ss),e&&s(xe),e&&s(Bs),E(Rt,e),e&&s(yt),e&&s(as),e&&s(nt),Fa[Ze].d(e),e&&s(os),E(ht,e),e&&s(Hs),e&&s(vt),e&&s(Is),e&&s(tt),E(Wt),e&&s(Gs),e&&s(lt),e&&s(ol),E(Ys,e),e&&s(nl),E(Vs,e),e&&s(ll),e&&s(Fe),e&&s(il),E(Js,e),e&&s(rl),E(Qs,e),e&&s(pl),e&&s(Ft),e&&s(hl),E(gs,e),e&&s(dl),e&&s(ws),e&&s(cl),e&&s(ns),E(Xs),e&&s(ul),E(Zs,e),e&&s(ml),e&&s(ao),e&&s(fl),e&&s(Be),e&&s(_l),E(ea,e),e&&s(gl),E(ta,e),e&&s(wl),e&&s(dt),e&&s(kl),e&&s(bs),e&&s(bl),E(sa,e),e&&s(yl),E(aa,e),e&&s(vl),e&&s(ys),e&&s($l),E(vs,e),e&&s(jl),e&&s(no),e&&s(xl),E(oa,e),e&&s(El),E($s,e),e&&s(Tl),e&&s(lo),e&&s(zl),E(na,e),e&&s(Al),E(la,e),e&&s(ql),e&&s(io),e&&s(Dl),E(ia,e),e&&s(Ml),E(ra,e),e&&s(Pl),e&&s(Bt),e&&s(Sl),E(pa,e),e&&s(Cl),E(ha,e),e&&s(Ol),e&&s(ro),e&&s(Kl),e&&s(js),e&&s(Ll),e&&s(po),e&&s(Rl),E(ua,e),e&&s(Nl),e&&s(st),e&&s(Wl),e&&s(Ht),e&&s(Fl),E(ma,e),e&&s(Bl),E(fa,e),e&&s(Hl),e&&s(He),e&&s(Il),E(_a,e),e&&s(Gl),E(ga,e),e&&s(Ul),e&&s(ho),e&&s(Yl),E(wa,e),e&&s(Vl),E(ka,e),e&&s(Jl),e&&s(ct),e&&s(Ql),e&&s(ls),E(ba),e&&s(Xl),e&&s(ut),e&&s(Zl),E(va,e),e&&s(ei),e&&s(mt),e&&s(ti),E($a,e),e&&s(si),E(ja,e),e&&s(ai),e&&s(It),e&&s(oi),E(Es,e),e&&s(ni),Qe&&Qe.d(e),e&&s(uo),e&&s(Gt),e&&s(li),Ba[jt].d(e),e&&s(mo),e&&s(fo),e&&s(ii),E(xa,e),e&&s(ri),E(Ea,e),e&&s(pi),E(Ts,e),e&&s(hi),e&&s(Ut),e&&s(di),E(Ta,e),e&&s(ci),E(za,e),e&&s(ui),e&&s(Yt),e&&s(mi),E(Aa,e),e&&s(fi),e&&s(go),e&&s(_i),E(qa,e),e&&s(gi),e&&s(wo),e&&s(wi),Ha[Et].d(e),e&&s(ko),e&&s(is),E(Da),e&&s(ki),E(Ma,e),e&&s(bi),e&&s(bo),e&&s(yi),Ia[zt].d(e),e&&s(yo),E(Pa,e),e&&s(vi),e&&s(vo),e&&s($i),Ga[qt].d(e),e&&s($o),e&&s(jo),e&&s(ji),Ua[Mt].d(e),e&&s(xo),E(Sa,e),e&&s(xi),e&&s(Eo),e&&s(Ei),Pe&&Pe.d(e),e&&s(To),E(As,e),e&&s(Ti),Se&&Se.d(e),e&&s(zo),e&&s(rs),E(Ca),e&&s(zi),e&&s(Vt),e&&s(Ai),E(Oa,e),e&&s(qi),e&&s(Ao),e&&s(Di),E(Ka,e),e&&s(Mi),E(La,e),e&&s(Pi),e&&s(qo),e&&s(Si),E(Ra,e),e&&s(Ci),e&&s(Ds),e&&s(Oi),E(Ms,e)}}}const Iu={local:"finetuning-a-masked-language-model",sections:[{local:"picking-a-pretrained-model-for-masked-language-modeling",title:"Picking a pretrained model for masked language modeling"},{local:"the-dataset",title:"The dataset"},{local:"preprocessing-the-data",title:"Preprocessing the data"},{local:"finetuning-distilbert-with-the-trainer-api",sections:[{local:"perplexity-for-language-models",title:"Perplexity for language models"}],title:"Fine-tuning DistilBERT with the `Trainer` API"},{local:"finetuning-distilbert-with-accelerate",title:"Fine-tuning DistilBERT with \u{1F917} Accelerate"},{local:"using-our-finetuned-model",title:"Using our fine-tuned model"}],title:"Fine-tuning a masked language model"};function Gu(C,i,f){let d="pt";return _u(()=>{const T=new URL(document.location).searchParams;f(0,d=T.get("fw")||"pt")}),[d,{id:"huggingface-course/distilbert-base-uncased-finetuned-imdb",pipeline_tag:"fill-mask",mask_token:"[MASK]",branch:"main",widgetData:[{text:"This is a great [MASK]."}],"model-index":[{name:"distilbert-base-uncased-finetuned-imdb",results:[]}],pwcLink:{error:"Metadata error: specify a dataset to view leaderboard"}}]}class tm extends cu{constructor(i){super();uu(this,i,Gu,Hu,mu,{})}}export{tm as default,Iu as metadata};
