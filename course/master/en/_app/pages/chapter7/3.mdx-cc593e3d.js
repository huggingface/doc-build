import{S as uu,i as mu,s as fu,e as r,t as a,c as p,a as h,h as o,d as s,g as l,F as t,k as u,w as $,m,x as j,y as x,q as _,o as w,B as E,b as T,M as _u,N as Xh,p as Qt,v as gu,n as Xt}from"../../chunks/vendor-1e8b365d.js";import{T as Ws}from"../../chunks/Tip-62b14c6e.js";import{Y as Zi}from"../../chunks/Youtube-c2a8cc39.js";import{I as Bs}from"../../chunks/IconCopyLink-483c28ba.js";import{C as A}from"../../chunks/CodeBlock-e5764662.js";import{D as cu}from"../../chunks/DocNotebookDropdown-37d928d3.js";import{F as wu}from"../../chunks/FrameworkSwitchCourse-7f8f0f31.js";function ku(L){let i,f;return i=new cu({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section3_tf.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section3_tf.ipynb"}]}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function bu(L){let i,f;return i=new cu({props:{classNames:"absolute z-10 right-0 top-0",options:[{label:"Google Colab",value:"https://colab.research.google.com/github/huggingface/notebooks/blob/master/course/chapter7/section3_pt.ipynb"},{label:"Aws Studio",value:"https://studiolab.sagemaker.aws/import/github/huggingface/notebooks/blob/master/course/chapter7/section3_pt.ipynb"}]}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function yu(L){let i,f,d,y,z;return{c(){i=r("p"),f=a("\u{1F64B} If the terms \u201Cmasked language modeling\u201D and \u201Cpretrained model\u201D sound unfamiliar to you, go check out "),d=r("a"),y=a("Chapter 1"),z=a(", where we explain all these core concepts, complete with videos!"),this.h()},l(k){i=p(k,"P",{});var b=h(i);f=o(b,"\u{1F64B} If the terms \u201Cmasked language modeling\u201D and \u201Cpretrained model\u201D sound unfamiliar to you, go check out "),d=p(b,"A",{href:!0});var q=h(d);y=o(q,"Chapter 1"),q.forEach(s),z=o(b,", where we explain all these core concepts, complete with videos!"),b.forEach(s),this.h()},h(){T(d,"href","/course/chapter1")},m(k,b){l(k,i,b),t(i,f),t(i,d),t(d,y),t(i,z)},d(k){k&&s(i)}}}function vu(L){let i,f,d,y,z,k,b,q,g,D,K,C,P,N,F,W,H,B;return b=new A({props:{code:`from transformers import TFAutoModelForMaskedLM

model_checkpoint = "distilbert-base-uncased"
model = TFAutoModelForMaskedLM.from_pretrained(model_checkpoint)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TFAutoModelForMaskedLM

model_checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>
model = TFAutoModelForMaskedLM.from_pretrained(model_checkpoint)`}}),F=new A({props:{code:`model(model.dummy_inputs)  # Build the model
model.summary()`,highlighted:`model(model.dummy_inputs)  <span class="hljs-comment"># Build the model</span>
model.summary()`}}),H=new A({props:{code:`Model: "tf_distil_bert_for_masked_lm"
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
_________________________________________________________________`,highlighted:`Model: <span class="hljs-string">&quot;tf_distil_bert_for_masked_lm&quot;</span>
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
_________________________________________________________________`}}),{c(){i=r("p"),f=a("Let\u2019s go ahead and download DistilBERT using the "),d=r("code"),y=a("AutoModelForMaskedLM"),z=a(" class:"),k=u(),$(b.$$.fragment),q=u(),g=r("p"),D=a("We can see how many parameters this model has by calling the "),K=r("code"),C=a("summary()"),P=a(" method:"),N=u(),$(F.$$.fragment),W=u(),$(H.$$.fragment)},l(v){i=p(v,"P",{});var R=h(i);f=o(R,"Let\u2019s go ahead and download DistilBERT using the "),d=p(R,"CODE",{});var U=h(d);y=o(U,"AutoModelForMaskedLM"),U.forEach(s),z=o(R," class:"),R.forEach(s),k=m(v),j(b.$$.fragment,v),q=m(v),g=p(v,"P",{});var Y=h(g);D=o(Y,"We can see how many parameters this model has by calling the "),K=p(Y,"CODE",{});var J=h(K);C=o(J,"summary()"),J.forEach(s),P=o(Y," method:"),Y.forEach(s),N=m(v),j(F.$$.fragment,v),W=m(v),j(H.$$.fragment,v)},m(v,R){l(v,i,R),t(i,f),t(i,d),t(d,y),t(i,z),l(v,k,R),x(b,v,R),l(v,q,R),l(v,g,R),t(g,D),t(g,K),t(K,C),t(g,P),l(v,N,R),x(F,v,R),l(v,W,R),x(H,v,R),B=!0},i(v){B||(_(b.$$.fragment,v),_(F.$$.fragment,v),_(H.$$.fragment,v),B=!0)},o(v){w(b.$$.fragment,v),w(F.$$.fragment,v),w(H.$$.fragment,v),B=!1},d(v){v&&s(i),v&&s(k),E(b,v),v&&s(q),v&&s(g),v&&s(N),E(F,v),v&&s(W),E(H,v)}}}function $u(L){let i,f,d,y,z,k,b,q,g,D,K,C,P,N,F,W,H,B;return b=new A({props:{code:`from transformers import AutoModelForMaskedLM

model_checkpoint = "distilbert-base-uncased"
model = AutoModelForMaskedLM.from_pretrained(model_checkpoint)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForMaskedLM

model_checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased&quot;</span>
model = AutoModelForMaskedLM.from_pretrained(model_checkpoint)`}}),F=new A({props:{code:`distilbert_num_parameters = model.num_parameters() / 1_000_000
print(f"'>>> DistilBERT number of parameters: {round(distilbert_num_parameters)}M'")
print(f"'>>> BERT number of parameters: 110M'")`,highlighted:`distilbert_num_parameters = model.num_parameters() / <span class="hljs-number">1_000_000</span>
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&#x27;&gt;&gt;&gt; DistilBERT number of parameters: <span class="hljs-subst">{<span class="hljs-built_in">round</span>(distilbert_num_parameters)}</span>M&#x27;&quot;</span>)
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&#x27;&gt;&gt;&gt; BERT number of parameters: 110M&#x27;&quot;</span>)`}}),H=new A({props:{code:`'>>> DistilBERT number of parameters: 67M'
'>>> BERT number of parameters: 110M'`,highlighted:`<span class="hljs-string">&#x27;&gt;&gt;&gt; DistilBERT number of parameters: 67M&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; BERT number of parameters: 110M&#x27;</span>`}}),{c(){i=r("p"),f=a("Let\u2019s go ahead and download DistilBERT using the "),d=r("code"),y=a("AutoModelForMaskedLM"),z=a(" class:"),k=u(),$(b.$$.fragment),q=u(),g=r("p"),D=a("We can see how many parameters this model has by calling the "),K=r("code"),C=a("num_parameters()"),P=a(" method:"),N=u(),$(F.$$.fragment),W=u(),$(H.$$.fragment)},l(v){i=p(v,"P",{});var R=h(i);f=o(R,"Let\u2019s go ahead and download DistilBERT using the "),d=p(R,"CODE",{});var U=h(d);y=o(U,"AutoModelForMaskedLM"),U.forEach(s),z=o(R," class:"),R.forEach(s),k=m(v),j(b.$$.fragment,v),q=m(v),g=p(v,"P",{});var Y=h(g);D=o(Y,"We can see how many parameters this model has by calling the "),K=p(Y,"CODE",{});var J=h(K);C=o(J,"num_parameters()"),J.forEach(s),P=o(Y," method:"),Y.forEach(s),N=m(v),j(F.$$.fragment,v),W=m(v),j(H.$$.fragment,v)},m(v,R){l(v,i,R),t(i,f),t(i,d),t(d,y),t(i,z),l(v,k,R),x(b,v,R),l(v,q,R),l(v,g,R),t(g,D),t(g,K),t(K,C),t(g,P),l(v,N,R),x(F,v,R),l(v,W,R),x(H,v,R),B=!0},i(v){B||(_(b.$$.fragment,v),_(F.$$.fragment,v),_(H.$$.fragment,v),B=!0)},o(v){w(b.$$.fragment,v),w(F.$$.fragment,v),w(H.$$.fragment,v),B=!1},d(v){v&&s(i),v&&s(k),E(b,v),v&&s(q),v&&s(g),v&&s(N),E(F,v),v&&s(W),E(H,v)}}}function ju(L){let i,f;return i=new A({props:{code:`import numpy as np
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
    print(f">>> {text.replace(tokenizer.mask_token, tokenizer.decode([token]))}")`,highlighted:`<span class="hljs-keyword">import</span> numpy <span class="hljs-keyword">as</span> np
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
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&gt;&gt;&gt; <span class="hljs-subst">{text.replace(tokenizer.mask_token, tokenizer.decode([token]))}</span>&quot;</span>)`}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function xu(L){let i,f;return i=new A({props:{code:`import torch

inputs = tokenizer(text, return_tensors="pt")
token_logits = model(**inputs).logits
# Find the location of [MASK] and extract its logits
mask_token_index = torch.where(inputs["input_ids"] == tokenizer.mask_token_id)[1]
mask_token_logits = token_logits[0, mask_token_index, :]
# Pick the [MASK] candidates with the highest logits
top_5_tokens = torch.topk(mask_token_logits, 5, dim=1).indices[0].tolist()

for token in top_5_tokens:
    print(f"'>>> {text.replace(tokenizer.mask_token, tokenizer.decode([token]))}'")`,highlighted:`<span class="hljs-keyword">import</span> torch

inputs = tokenizer(text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
token_logits = model(**inputs).logits
<span class="hljs-comment"># Find the location of [MASK] and extract its logits</span>
mask_token_index = torch.where(inputs[<span class="hljs-string">&quot;input_ids&quot;</span>] == tokenizer.mask_token_id)[<span class="hljs-number">1</span>]
mask_token_logits = token_logits[<span class="hljs-number">0</span>, mask_token_index, :]
<span class="hljs-comment"># Pick the [MASK] candidates with the highest logits</span>
top_5_tokens = torch.topk(mask_token_logits, <span class="hljs-number">5</span>, dim=<span class="hljs-number">1</span>).indices[<span class="hljs-number">0</span>].tolist()

<span class="hljs-keyword">for</span> token <span class="hljs-keyword">in</span> top_5_tokens:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&#x27;&gt;&gt;&gt; <span class="hljs-subst">{text.replace(tokenizer.mask_token, tokenizer.decode([token]))}</span>&#x27;&quot;</span>)`}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function Eu(L){let i,f,d,y,z,k,b,q,g,D,K,C,P,N,F,W,H,B,v,R,U,Y,J,I,je,de;return{c(){i=r("p"),f=a("\u270F\uFE0F "),d=r("strong"),y=a("Try it out!"),z=a(" Create a random sample of the "),k=r("code"),b=a("unsupervised"),q=a(" split and verify that the labels are neither "),g=r("code"),D=a("0"),K=a(" nor "),C=r("code"),P=a("1"),N=a(". While you\u2019re at it, you could also check that the labels in the "),F=r("code"),W=a("train"),H=a(" and "),B=r("code"),v=a("test"),R=a(" splits are indeed "),U=r("code"),Y=a("0"),J=a(" or "),I=r("code"),je=a("1"),de=a(" \u2014 this is a useful sanity check that every NLP practitioner should perform at the start of a new project!")},l(ne){i=p(ne,"P",{});var G=h(i);f=o(G,"\u270F\uFE0F "),d=p(G,"STRONG",{});var fe=h(d);y=o(fe,"Try it out!"),fe.forEach(s),z=o(G," Create a random sample of the "),k=p(G,"CODE",{});var xe=h(k);b=o(xe,"unsupervised"),xe.forEach(s),q=o(G," split and verify that the labels are neither "),g=p(G,"CODE",{});var oe=h(g);D=o(oe,"0"),oe.forEach(s),K=o(G," nor "),C=p(G,"CODE",{});var Z=h(C);P=o(Z,"1"),Z.forEach(s),N=o(G,". While you\u2019re at it, you could also check that the labels in the "),F=p(G,"CODE",{});var ce=h(F);W=o(ce,"train"),ce.forEach(s),H=o(G," and "),B=p(G,"CODE",{});var we=h(B);v=o(we,"test"),we.forEach(s),R=o(G," splits are indeed "),U=p(G,"CODE",{});var te=h(U);Y=o(te,"0"),te.forEach(s),J=o(G," or "),I=p(G,"CODE",{});var Oe=h(I);je=o(Oe,"1"),Oe.forEach(s),de=o(G," \u2014 this is a useful sanity check that every NLP practitioner should perform at the start of a new project!"),G.forEach(s)},m(ne,G){l(ne,i,G),t(i,f),t(i,d),t(d,y),t(i,z),t(i,k),t(k,b),t(i,q),t(i,g),t(g,D),t(i,K),t(i,C),t(C,P),t(i,N),t(i,F),t(F,W),t(i,H),t(i,B),t(B,v),t(i,R),t(i,U),t(U,Y),t(i,J),t(i,I),t(I,je),t(i,de)},d(ne){ne&&s(i)}}}function Tu(L){let i,f,d,y,z,k,b,q,g,D,K,C,P,N;return{c(){i=r("p"),f=a("\u270F\uFE0F "),d=r("strong"),y=a("Try it out!"),z=a(" Some Transformer models, like "),k=r("a"),b=a("BigBird"),q=a(" and "),g=r("a"),D=a("Longformer"),K=a(", have a much longer context length than BERT and other early Transformer models. Instantiate the tokenizer for one of these checkpoints and verify that the "),C=r("code"),P=a("model_max_length"),N=a(" agrees with what\u2019s quoted on its model card."),this.h()},l(F){i=p(F,"P",{});var W=h(i);f=o(W,"\u270F\uFE0F "),d=p(W,"STRONG",{});var H=h(d);y=o(H,"Try it out!"),H.forEach(s),z=o(W," Some Transformer models, like "),k=p(W,"A",{href:!0,rel:!0});var B=h(k);b=o(B,"BigBird"),B.forEach(s),q=o(W," and "),g=p(W,"A",{href:!0});var v=h(g);D=o(v,"Longformer"),v.forEach(s),K=o(W,", have a much longer context length than BERT and other early Transformer models. Instantiate the tokenizer for one of these checkpoints and verify that the "),C=p(W,"CODE",{});var R=h(C);P=o(R,"model_max_length"),R.forEach(s),N=o(W," agrees with what\u2019s quoted on its model card."),W.forEach(s),this.h()},h(){T(k,"href","https://huggingface.co/google/bigbird-roberta-base"),T(k,"rel","nofollow"),T(g,"href","hf.co/allenai/longformer-base-4096")},m(F,W){l(F,i,W),t(i,f),t(i,d),t(d,y),t(i,z),t(i,k),t(k,b),t(i,q),t(i,g),t(g,D),t(i,K),t(i,C),t(C,P),t(i,N)},d(F){F&&s(i)}}}function zu(L){let i,f;return{c(){i=r("p"),f=a("Note that using a small chunk size can be detrimental in real-world scenarios, so you should use a size that corresponds to the use case you will apply your model to.")},l(d){i=p(d,"P",{});var y=h(i);f=o(y,"Note that using a small chunk size can be detrimental in real-world scenarios, so you should use a size that corresponds to the use case you will apply your model to."),y.forEach(s)},m(d,y){l(d,i,y),t(i,f)},d(d){d&&s(i)}}}function Au(L){let i,f,d,y,z,k,b,q,g,D,K;return{c(){i=r("p"),f=a("\u270F\uFE0F "),d=r("strong"),y=a("Try it out!"),z=a(" Run the code snippet above several times to see the random masking happen in front of your very eyes! Also replace the "),k=r("code"),b=a("tokenizer.decode()"),q=a(" method with "),g=r("code"),D=a("tokenizer.convert_ids_to_tokens()"),K=a(" to see that sometimes a single token from a given word is masked, and not the others.")},l(C){i=p(C,"P",{});var P=h(i);f=o(P,"\u270F\uFE0F "),d=p(P,"STRONG",{});var N=h(d);y=o(N,"Try it out!"),N.forEach(s),z=o(P," Run the code snippet above several times to see the random masking happen in front of your very eyes! Also replace the "),k=p(P,"CODE",{});var F=h(k);b=o(F,"tokenizer.decode()"),F.forEach(s),q=o(P," method with "),g=p(P,"CODE",{});var W=h(g);D=o(W,"tokenizer.convert_ids_to_tokens()"),W.forEach(s),K=o(P," to see that sometimes a single token from a given word is masked, and not the others."),P.forEach(s)},m(C,P){l(C,i,P),t(i,f),t(i,d),t(d,y),t(i,z),t(i,k),t(k,b),t(i,q),t(i,g),t(g,D),t(i,K)},d(C){C&&s(i)}}}function pu(L){let i,f,d,y,z;return{c(){i=r("p"),f=a("One side effect of random masking is that our evaluation metrics will not be deterministic when using the "),d=r("code"),y=a("Trainer"),z=a(", since we use the same data collator for the training and test sets. We\u2019ll see later, when we look at fine-tuning with \u{1F917} Accelerate, how we can use the flexibility of a custom evaluation loop to freeze the randomness.")},l(k){i=p(k,"P",{});var b=h(i);f=o(b,"One side effect of random masking is that our evaluation metrics will not be deterministic when using the "),d=p(b,"CODE",{});var q=h(d);y=o(q,"Trainer"),q.forEach(s),z=o(b,", since we use the same data collator for the training and test sets. We\u2019ll see later, when we look at fine-tuning with \u{1F917} Accelerate, how we can use the flexibility of a custom evaluation loop to freeze the randomness."),b.forEach(s)},m(k,b){l(k,i,b),t(i,f),t(i,d),t(d,y),t(i,z)},d(k){k&&s(i)}}}function qu(L){let i,f;return i=new A({props:{code:`import collections
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

    return tf_default_data_collator(features)`,highlighted:`<span class="hljs-keyword">import</span> collections
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

    <span class="hljs-keyword">return</span> tf_default_data_collator(features)`}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function Du(L){let i,f;return i=new A({props:{code:`import collections
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

    return default_data_collator(features)`,highlighted:`<span class="hljs-keyword">import</span> collections
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

    <span class="hljs-keyword">return</span> default_data_collator(features)`}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function Mu(L){let i,f,d,y,z,k,b,q,g,D,K;return{c(){i=r("p"),f=a("\u270F\uFE0F "),d=r("strong"),y=a("Try it out!"),z=a(" Run the code snippet above several times to see the random masking happen in front of your very eyes! Also replace the "),k=r("code"),b=a("tokenizer.decode()"),q=a(" method with "),g=r("code"),D=a("tokenizer.convert_ids_to_tokens()"),K=a(" to see that the tokens from a given word are always masked together.")},l(C){i=p(C,"P",{});var P=h(i);f=o(P,"\u270F\uFE0F "),d=p(P,"STRONG",{});var N=h(d);y=o(N,"Try it out!"),N.forEach(s),z=o(P," Run the code snippet above several times to see the random masking happen in front of your very eyes! Also replace the "),k=p(P,"CODE",{});var F=h(k);b=o(F,"tokenizer.decode()"),F.forEach(s),q=o(P," method with "),g=p(P,"CODE",{});var W=h(g);D=o(W,"tokenizer.convert_ids_to_tokens()"),W.forEach(s),K=o(P," to see that the tokens from a given word are always masked together."),P.forEach(s)},m(C,P){l(C,i,P),t(i,f),t(i,d),t(d,y),t(i,z),t(i,k),t(k,b),t(i,q),t(i,g),t(g,D),t(i,K)},d(C){C&&s(i)}}}function Pu(L){let i,f,d,y,z,k,b,q,g,D,K,C,P,N,F,W,H,B,v,R,U,Y,J,I,je,de,ne,G,fe,xe,oe,Z,ce,we,te,Oe,ke,se,Ge,ie,Ee,Fe,re,ue,be,pe,_e,Te,ae,ye,me,ve,Le,ee,S,V,ze;return b=new A({props:{code:`from transformers import TrainingArguments

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
)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TrainingArguments

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
)`}}),_e=new A({props:{code:`from transformers import Trainer

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=downsampled_dataset["train"],
    eval_dataset=downsampled_dataset["test"],
    data_collator=data_collator,
)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Trainer

trainer = Trainer(
    model=model,
    args=training_args,
    train_dataset=downsampled_dataset[<span class="hljs-string">&quot;train&quot;</span>],
    eval_dataset=downsampled_dataset[<span class="hljs-string">&quot;test&quot;</span>],
    data_collator=data_collator,
)`}}),{c(){i=r("p"),f=a("Once we\u2019re logged in, we can specify the arguments for the "),d=r("code"),y=a("Trainer"),z=a(":"),k=u(),$(b.$$.fragment),q=u(),g=r("p"),D=a("Here we tweaked a few of the default options, including "),K=r("code"),C=a("logging_steps"),P=a(" to ensure we track the training loss with each epoch. We\u2019ve also used "),N=r("code"),F=a("fp16=True"),W=a(" to enable mixed-precision training, which gives us another boost in speed."),H=u(),B=r("p"),v=a("Note that you can specify the name of the repository you want to push to with the "),R=r("code"),U=a("hub_model_id"),Y=a(" argument (in particular, you will have to use this argument to push to an organization). For instance, when we pushed the model to the "),J=r("a"),I=r("code"),je=a("huggingface-course"),de=a(" organization"),ne=a(", we added "),G=r("code"),fe=a('hub_model_id="huggingface-course/distilbert-finetuned-imdb"'),xe=a(" to "),oe=r("code"),Z=a("TrainingArguments"),ce=a(". By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be "),we=r("code"),te=a('"lewtun/distilbert-finetuned-imdb"'),Oe=a("."),ke=u(),se=r("p"),Ge=a("We now have all the ingredients to instantiate the "),ie=r("code"),Ee=a("Trainer"),Fe=a(". Here we just use the standard "),re=r("code"),ue=a("data_collator"),be=a(", but you can try the whole word masking collator and compare the results as an exercise:"),pe=u(),$(_e.$$.fragment),Te=u(),ae=r("p"),ye=a("We\u2019re now ready to run "),me=r("code"),ve=a("trainer.train()"),Le=a(" \u2014 but before doing so let\u2019s briefly look at "),ee=r("em"),S=a("perplexity"),V=a(", which is a common metric to evaluate the performance of language models."),this.h()},l(M){i=p(M,"P",{});var X=h(i);f=o(X,"Once we\u2019re logged in, we can specify the arguments for the "),d=p(X,"CODE",{});var ot=h(d);y=o(ot,"Trainer"),ot.forEach(s),z=o(X,":"),X.forEach(s),k=m(M),j(b.$$.fragment,M),q=m(M),g=p(M,"P",{});var Ae=h(g);D=o(Ae,"Here we tweaked a few of the default options, including "),K=p(Ae,"CODE",{});var ge=h(K);C=o(ge,"logging_steps"),ge.forEach(s),P=o(Ae," to ensure we track the training loss with each epoch. We\u2019ve also used "),N=p(Ae,"CODE",{});var he=h(N);F=o(he,"fp16=True"),he.forEach(s),W=o(Ae," to enable mixed-precision training, which gives us another boost in speed."),Ae.forEach(s),H=m(M),B=p(M,"P",{});var Q=h(B);v=o(Q,"Note that you can specify the name of the repository you want to push to with the "),R=p(Q,"CODE",{});var nt=h(R);U=o(nt,"hub_model_id"),nt.forEach(s),Y=o(Q," argument (in particular, you will have to use this argument to push to an organization). For instance, when we pushed the model to the "),J=p(Q,"A",{href:!0,rel:!0});var Ke=h(J);I=p(Ke,"CODE",{});var Je=h(I);je=o(Je,"huggingface-course"),Je.forEach(s),de=o(Ke," organization"),Ke.forEach(s),ne=o(Q,", we added "),G=p(Q,"CODE",{});var Re=h(G);fe=o(Re,'hub_model_id="huggingface-course/distilbert-finetuned-imdb"'),Re.forEach(s),xe=o(Q," to "),oe=p(Q,"CODE",{});var Ce=h(oe);Z=o(Ce,"TrainingArguments"),Ce.forEach(s),ce=o(Q,". By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be "),we=p(Q,"CODE",{});var $e=h(we);te=o($e,'"lewtun/distilbert-finetuned-imdb"'),$e.forEach(s),Oe=o(Q,"."),Q.forEach(s),ke=m(M),se=p(M,"P",{});var qe=h(se);Ge=o(qe,"We now have all the ingredients to instantiate the "),ie=p(qe,"CODE",{});var le=h(ie);Ee=o(le,"Trainer"),le.forEach(s),Fe=o(qe,". Here we just use the standard "),re=p(qe,"CODE",{});var Ct=h(re);ue=o(Ct,"data_collator"),Ct.forEach(s),be=o(qe,", but you can try the whole word masking collator and compare the results as an exercise:"),qe.forEach(s),pe=m(M),j(_e.$$.fragment,M),Te=m(M),ae=p(M,"P",{});var De=h(ae);ye=o(De,"We\u2019re now ready to run "),me=p(De,"CODE",{});var Qe=h(me);ve=o(Qe,"trainer.train()"),Qe.forEach(s),Le=o(De," \u2014 but before doing so let\u2019s briefly look at "),ee=p(De,"EM",{});var gt=h(ee);S=o(gt,"perplexity"),gt.forEach(s),V=o(De,", which is a common metric to evaluate the performance of language models."),De.forEach(s),this.h()},h(){T(J,"href","https://huggingface.co/huggingface-course"),T(J,"rel","nofollow")},m(M,X){l(M,i,X),t(i,f),t(i,d),t(d,y),t(i,z),l(M,k,X),x(b,M,X),l(M,q,X),l(M,g,X),t(g,D),t(g,K),t(K,C),t(g,P),t(g,N),t(N,F),t(g,W),l(M,H,X),l(M,B,X),t(B,v),t(B,R),t(R,U),t(B,Y),t(B,J),t(J,I),t(I,je),t(J,de),t(B,ne),t(B,G),t(G,fe),t(B,xe),t(B,oe),t(oe,Z),t(B,ce),t(B,we),t(we,te),t(B,Oe),l(M,ke,X),l(M,se,X),t(se,Ge),t(se,ie),t(ie,Ee),t(se,Fe),t(se,re),t(re,ue),t(se,be),l(M,pe,X),x(_e,M,X),l(M,Te,X),l(M,ae,X),t(ae,ye),t(ae,me),t(me,ve),t(ae,Le),t(ae,ee),t(ee,S),t(ae,V),ze=!0},i(M){ze||(_(b.$$.fragment,M),_(_e.$$.fragment,M),ze=!0)},o(M){w(b.$$.fragment,M),w(_e.$$.fragment,M),ze=!1},d(M){M&&s(i),M&&s(k),E(b,M),M&&s(q),M&&s(g),M&&s(H),M&&s(B),M&&s(ke),M&&s(se),M&&s(pe),E(_e,M),M&&s(Te),M&&s(ae)}}}function Su(L){let i,f,d,y,z,k,b,q,g,D,K,C,P,N,F,W,H,B,v,R,U,Y,J,I,je,de,ne,G,fe,xe,oe,Z,ce,we,te,Oe,ke,se,Ge,ie,Ee,Fe,re,ue,be,pe,_e,Te,ae,ye,me,ve,Le,ee;return b=new A({props:{code:`tf_train_dataset = downsampled_dataset["train"].to_tf_dataset(
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
)`,highlighted:`tf_train_dataset = downsampled_dataset[<span class="hljs-string">&quot;train&quot;</span>].to_tf_dataset(
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
)`}}),ue=new A({props:{code:`from transformers import create_optimizer
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
)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> create_optimizer
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
)`}}),{c(){i=r("p"),f=a("Once we\u2019re logged in, we can create our "),d=r("code"),y=a("tf.data"),z=a(" datasets. We\u2019ll just use the standard data collator here, but you can also try the whole word masking collator and compare the results as an exercise:"),k=u(),$(b.$$.fragment),q=u(),g=r("p"),D=a("Next, we set up our training hyperparameters and compile our model. We use the "),K=r("code"),C=a("create_optimizer()"),P=a(" function from the \u{1F917} Transformers library, which gives us an "),N=r("code"),F=a("AdamW"),W=a(" optimizer with linear learning rate decay. We also use the model\u2019s built-in loss, which is the default when no loss is specified as an argument to "),H=r("code"),B=a("compile()"),v=a(", and we set the training precision to "),R=r("code"),U=a('"mixed_float16"'),Y=a(". Note that if you\u2019re using a Colab GPU or other GPU that does not have accelerated float16 support, you should probably comment out that line."),J=u(),I=r("p"),je=a("In addition, we set up a "),de=r("code"),ne=a("PushToHubCallback"),G=a(" that will save the model to the Hub after each epoch. You can specify the name of the repository you want to push to with the "),fe=r("code"),xe=a("hub_model_id"),oe=a(" argument (in particular, you will have to use this argument to push to an organization). For instance, to push the model to the "),Z=r("a"),ce=r("code"),we=a("huggingface-course"),te=a(" organization"),Oe=a(", we added "),ke=r("code"),se=a('hub_model_id="huggingface-course/distilbert-finetuned-imdb"'),Ge=a(". By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be "),ie=r("code"),Ee=a('"lewtun/distilbert-finetuned-imdb"'),Fe=a("."),re=u(),$(ue.$$.fragment),be=u(),pe=r("p"),_e=a("We\u2019re now ready to run "),Te=r("code"),ae=a("model.fit()"),ye=a(" \u2014 but before doing so let\u2019s briefly look at "),me=r("em"),ve=a("perplexity"),Le=a(", which is a common metric to evaluate the performance of language models."),this.h()},l(S){i=p(S,"P",{});var V=h(i);f=o(V,"Once we\u2019re logged in, we can create our "),d=p(V,"CODE",{});var ze=h(d);y=o(ze,"tf.data"),ze.forEach(s),z=o(V," datasets. We\u2019ll just use the standard data collator here, but you can also try the whole word masking collator and compare the results as an exercise:"),V.forEach(s),k=m(S),j(b.$$.fragment,S),q=m(S),g=p(S,"P",{});var M=h(g);D=o(M,"Next, we set up our training hyperparameters and compile our model. We use the "),K=p(M,"CODE",{});var X=h(K);C=o(X,"create_optimizer()"),X.forEach(s),P=o(M," function from the \u{1F917} Transformers library, which gives us an "),N=p(M,"CODE",{});var ot=h(N);F=o(ot,"AdamW"),ot.forEach(s),W=o(M," optimizer with linear learning rate decay. We also use the model\u2019s built-in loss, which is the default when no loss is specified as an argument to "),H=p(M,"CODE",{});var Ae=h(H);B=o(Ae,"compile()"),Ae.forEach(s),v=o(M,", and we set the training precision to "),R=p(M,"CODE",{});var ge=h(R);U=o(ge,'"mixed_float16"'),ge.forEach(s),Y=o(M,". Note that if you\u2019re using a Colab GPU or other GPU that does not have accelerated float16 support, you should probably comment out that line."),M.forEach(s),J=m(S),I=p(S,"P",{});var he=h(I);je=o(he,"In addition, we set up a "),de=p(he,"CODE",{});var Q=h(de);ne=o(Q,"PushToHubCallback"),Q.forEach(s),G=o(he," that will save the model to the Hub after each epoch. You can specify the name of the repository you want to push to with the "),fe=p(he,"CODE",{});var nt=h(fe);xe=o(nt,"hub_model_id"),nt.forEach(s),oe=o(he," argument (in particular, you will have to use this argument to push to an organization). For instance, to push the model to the "),Z=p(he,"A",{href:!0,rel:!0});var Ke=h(Z);ce=p(Ke,"CODE",{});var Je=h(ce);we=o(Je,"huggingface-course"),Je.forEach(s),te=o(Ke," organization"),Ke.forEach(s),Oe=o(he,", we added "),ke=p(he,"CODE",{});var Re=h(ke);se=o(Re,'hub_model_id="huggingface-course/distilbert-finetuned-imdb"'),Re.forEach(s),Ge=o(he,". By default, the repository used will be in your namespace and named after the output directory you set, so in our case it will be "),ie=p(he,"CODE",{});var Ce=h(ie);Ee=o(Ce,'"lewtun/distilbert-finetuned-imdb"'),Ce.forEach(s),Fe=o(he,"."),he.forEach(s),re=m(S),j(ue.$$.fragment,S),be=m(S),pe=p(S,"P",{});var $e=h(pe);_e=o($e,"We\u2019re now ready to run "),Te=p($e,"CODE",{});var qe=h(Te);ae=o(qe,"model.fit()"),qe.forEach(s),ye=o($e," \u2014 but before doing so let\u2019s briefly look at "),me=p($e,"EM",{});var le=h(me);ve=o(le,"perplexity"),le.forEach(s),Le=o($e,", which is a common metric to evaluate the performance of language models."),$e.forEach(s),this.h()},h(){T(Z,"href","https://huggingface.co/huggingface-course"),T(Z,"rel","nofollow")},m(S,V){l(S,i,V),t(i,f),t(i,d),t(d,y),t(i,z),l(S,k,V),x(b,S,V),l(S,q,V),l(S,g,V),t(g,D),t(g,K),t(K,C),t(g,P),t(g,N),t(N,F),t(g,W),t(g,H),t(H,B),t(g,v),t(g,R),t(R,U),t(g,Y),l(S,J,V),l(S,I,V),t(I,je),t(I,de),t(de,ne),t(I,G),t(I,fe),t(fe,xe),t(I,oe),t(I,Z),t(Z,ce),t(ce,we),t(Z,te),t(I,Oe),t(I,ke),t(ke,se),t(I,Ge),t(I,ie),t(ie,Ee),t(I,Fe),l(S,re,V),x(ue,S,V),l(S,be,V),l(S,pe,V),t(pe,_e),t(pe,Te),t(Te,ae),t(pe,ye),t(pe,me),t(me,ve),t(pe,Le),ee=!0},i(S){ee||(_(b.$$.fragment,S),_(ue.$$.fragment,S),ee=!0)},o(S){w(b.$$.fragment,S),w(ue.$$.fragment,S),ee=!1},d(S){S&&s(i),S&&s(k),E(b,S),S&&s(q),S&&s(g),S&&s(J),S&&s(I),S&&s(re),E(ue,S),S&&s(be),S&&s(pe)}}}function Cu(L){let i,f,d,y,z,k,b,q;return b=new A({props:{code:`import math

eval_loss = model.evaluate(tf_eval_dataset)
print(f"Perplexity: {math.exp(eval_loss):.2f}")`,highlighted:`<span class="hljs-keyword">import</span> math

eval_loss = model.evaluate(tf_eval_dataset)
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Perplexity: <span class="hljs-subst">{math.exp(eval_loss):<span class="hljs-number">.2</span>f}</span>&quot;</span>)`}}),{c(){i=r("p"),f=a("Assuming our test set consists mostly of sentences that are grammatically correct, then one way to measure the quality of our language model is to calculate the probabilities it assigns to the next word in all the sentences of the test set. High probabilities indicates that the model indicates that the model is not \u201Csurprised\u201D or \u201Cperplexed\u201D by the unseen examples, and suggests it has learned the basic patterns of grammar in the language. There are various mathematical definitions of perplexity, but the one we\u2019ll use defines it as the exponential of the cross-entropy loss. Thus, we can calculate the perplexity of our pretrained model by using the "),d=r("code"),y=a("model.evaluate()"),z=a(" method to compute the cross-entropy loss on the test set and then taking the exponential of the result:"),k=u(),$(b.$$.fragment)},l(g){i=p(g,"P",{});var D=h(i);f=o(D,"Assuming our test set consists mostly of sentences that are grammatically correct, then one way to measure the quality of our language model is to calculate the probabilities it assigns to the next word in all the sentences of the test set. High probabilities indicates that the model indicates that the model is not \u201Csurprised\u201D or \u201Cperplexed\u201D by the unseen examples, and suggests it has learned the basic patterns of grammar in the language. There are various mathematical definitions of perplexity, but the one we\u2019ll use defines it as the exponential of the cross-entropy loss. Thus, we can calculate the perplexity of our pretrained model by using the "),d=p(D,"CODE",{});var K=h(d);y=o(K,"model.evaluate()"),K.forEach(s),z=o(D," method to compute the cross-entropy loss on the test set and then taking the exponential of the result:"),D.forEach(s),k=m(g),j(b.$$.fragment,g)},m(g,D){l(g,i,D),t(i,f),t(i,d),t(d,y),t(i,z),l(g,k,D),x(b,g,D),q=!0},i(g){q||(_(b.$$.fragment,g),q=!0)},o(g){w(b.$$.fragment,g),q=!1},d(g){g&&s(i),g&&s(k),E(b,g)}}}function Ou(L){let i,f,d,y,z,k,b,q;return b=new A({props:{code:`import math

eval_results = trainer.evaluate()
print(f">>> Perplexity: {math.exp(eval_results['eval_loss']):.2f}")`,highlighted:`<span class="hljs-keyword">import</span> math

eval_results = trainer.evaluate()
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&gt;&gt;&gt; Perplexity: <span class="hljs-subst">{math.exp(eval_results[<span class="hljs-string">&#x27;eval_loss&#x27;</span>]):<span class="hljs-number">.2</span>f}</span>&quot;</span>)`}}),{c(){i=r("p"),f=a("Assuming our test set consists mostly of sentences that are grammatically correct, then one way to measure the quality of our language model is to calculate the probabilities it assigns to the next word in all the sentences of the test set. High probabilities indicates that the model is not \u201Csurprised\u201D or \u201Cperplexed\u201D by the unseen examples, and suggests it has learned the basic patterns of grammar in the language. There are various mathematical definitions of perplexity, but the one we\u2019ll use defines it as the exponential of the cross-entropy loss. Thus, we can calculate the perplexity of our pretrained model by using the "),d=r("code"),y=a("Trainer.evaluate()"),z=a(" function to compute the cross-entropy loss on the test set and then taking the exponential of the result:"),k=u(),$(b.$$.fragment)},l(g){i=p(g,"P",{});var D=h(i);f=o(D,"Assuming our test set consists mostly of sentences that are grammatically correct, then one way to measure the quality of our language model is to calculate the probabilities it assigns to the next word in all the sentences of the test set. High probabilities indicates that the model is not \u201Csurprised\u201D or \u201Cperplexed\u201D by the unseen examples, and suggests it has learned the basic patterns of grammar in the language. There are various mathematical definitions of perplexity, but the one we\u2019ll use defines it as the exponential of the cross-entropy loss. Thus, we can calculate the perplexity of our pretrained model by using the "),d=p(D,"CODE",{});var K=h(d);y=o(K,"Trainer.evaluate()"),K.forEach(s),z=o(D," function to compute the cross-entropy loss on the test set and then taking the exponential of the result:"),D.forEach(s),k=m(g),j(b.$$.fragment,g)},m(g,D){l(g,i,D),t(i,f),t(i,d),t(d,y),t(i,z),l(g,k,D),x(b,g,D),q=!0},i(g){q||(_(b.$$.fragment,g),q=!0)},o(g){w(b.$$.fragment,g),q=!1},d(g){g&&s(i),g&&s(k),E(b,g)}}}function Lu(L){let i,f;return i=new A({props:{code:"model.fit(tf_train_dataset, validation_data=tf_eval_dataset, callbacks=[callback])",highlighted:"model.fit(tf_train_dataset, validation_data=tf_eval_dataset, callbacks=[callback])"}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function Ku(L){let i,f;return i=new A({props:{code:"trainer.train()",highlighted:"trainer.train()"}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function Ru(L){let i,f;return i=new A({props:{code:`eval_loss = model.evaluate(tf_eval_dataset)
print(f"Perplexity: {math.exp(eval_loss):.2f}")`,highlighted:`eval_loss = model.evaluate(tf_eval_dataset)
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;Perplexity: <span class="hljs-subst">{math.exp(eval_loss):<span class="hljs-number">.2</span>f}</span>&quot;</span>)`}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function Nu(L){let i,f;return i=new A({props:{code:`eval_results = trainer.evaluate()
print(f">>> Perplexity: {math.exp(eval_results['eval_loss']):.2f}")`,highlighted:`eval_results = trainer.evaluate()
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&gt;&gt;&gt; Perplexity: <span class="hljs-subst">{math.exp(eval_results[<span class="hljs-string">&#x27;eval_loss&#x27;</span>]):<span class="hljs-number">.2</span>f}</span>&quot;</span>)`}}),{c(){$(i.$$.fragment)},l(d){j(i.$$.fragment,d)},m(d,y){x(i,d,y),f=!0},i(d){f||(_(i.$$.fragment,d),f=!0)},o(d){w(i.$$.fragment,d),f=!1},d(d){E(i,d)}}}function hu(L){let i,f,d,y,z;return y=new A({props:{code:"trainer.push_to_hub()",highlighted:"trainer.push_to_hub()"}}),{c(){i=r("p"),f=a("Once training is finished, we can push the model card with the training information to the Hub (the checkpoints are saved during training itself):"),d=u(),$(y.$$.fragment)},l(k){i=p(k,"P",{});var b=h(i);f=o(b,"Once training is finished, we can push the model card with the training information to the Hub (the checkpoints are saved during training itself):"),b.forEach(s),d=m(k),j(y.$$.fragment,k)},m(k,b){l(k,i,b),t(i,f),l(k,d,b),x(y,k,b),z=!0},i(k){z||(_(y.$$.fragment,k),z=!0)},o(k){w(y.$$.fragment,k),z=!1},d(k){k&&s(i),k&&s(d),E(y,k)}}}function Fu(L){let i,f,d,y,z;return{c(){i=r("p"),f=a("\u270F\uFE0F "),d=r("strong"),y=a("Your turn!"),z=a(" Run the training above after changing the data collator to the whole word masking collator. Do you get better results?")},l(k){i=p(k,"P",{});var b=h(i);f=o(b,"\u270F\uFE0F "),d=p(b,"STRONG",{});var q=h(d);y=o(q,"Your turn!"),q.forEach(s),z=o(b," Run the training above after changing the data collator to the whole word masking collator. Do you get better results?"),b.forEach(s)},m(k,b){l(k,i,b),t(i,f),t(i,d),t(d,y),t(i,z)},d(k){k&&s(i)}}}function du(L){let i,f,d,y,z,k,b,q,g,D,K,C,P,N,F,W,H,B,v,R,U,Y,J,I,je,de,ne,G,fe,xe,oe,Z,ce,we,te,Oe,ke,se,Ge,ie,Ee,Fe,re,ue,be,pe,_e,Te,ae,ye,me,ve,Le,ee,S,V,ze,M,X,ot,Ae,ge,he,Q,nt,Ke,Je,Re,Ce,$e,qe,le,Ct,De,Qe,gt,Xe,Zt,rs,wt,it,lt,ps,rt,hs,Ne,Ue,Ot,kt,bt,es,Ze,ds,Me,yt,Lt,vt,cs,et,Hs,us;return b=new Bs({}),ce=new A({props:{code:`def insert_random_mask(batch):
    features = [dict(zip(batch, t)) for t in zip(*batch.values())]
    masked_inputs = data_collator(features)
    # Create a new "masked" column for each column in the dataset
    return {"masked_" + k: v.numpy() for k, v in masked_inputs.items()}`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">insert_random_mask</span>(<span class="hljs-params">batch</span>):
    features = [<span class="hljs-built_in">dict</span>(<span class="hljs-built_in">zip</span>(batch, t)) <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(*batch.values())]
    masked_inputs = data_collator(features)
    <span class="hljs-comment"># Create a new &quot;masked&quot; column for each column in the dataset</span>
    <span class="hljs-keyword">return</span> {<span class="hljs-string">&quot;masked_&quot;</span> + k: v.numpy() <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> masked_inputs.items()}`}}),Ee=new A({props:{code:`downsampled_dataset = downsampled_dataset.remove_columns(["word_ids"])
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
)`,highlighted:`downsampled_dataset = downsampled_dataset.remove_columns([<span class="hljs-string">&quot;word_ids&quot;</span>])
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
)`}}),ae=new A({props:{code:`from torch.utils.data import DataLoader
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
)`,highlighted:`<span class="hljs-keyword">from</span> torch.utils.data <span class="hljs-keyword">import</span> DataLoader
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
)`}}),ee=new A({props:{code:"model = AutoModelForMaskedLM.from_pretrained(model_checkpoint)",highlighted:'model = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">AutoModelForMaskedLM</span>.</span></span>from<span class="hljs-constructor">_pretrained(<span class="hljs-params">model_checkpoint</span>)</span>'}}),ge=new A({props:{code:`from torch.optim import AdamW

optimizer = AdamW(model.parameters(), lr=5e-5)`,highlighted:`<span class="hljs-keyword">from</span> torch.optim <span class="hljs-keyword">import</span> AdamW

optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)`}}),$e=new A({props:{code:`from accelerate import Accelerator

accelerator = Accelerator()
model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator

accelerator = Accelerator()
model, optimizer, train_dataloader, eval_dataloader = accelerator.prepare(
    model, optimizer, train_dataloader, eval_dataloader
)`}}),Qe=new A({props:{code:`from transformers import get_scheduler

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
)`}}),wt=new A({props:{code:`from huggingface_hub import get_full_repo_name

model_name = "distilbert-base-uncased-finetuned-imdb-accelerate"
repo_name = get_full_repo_name(model_name)
repo_name`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> get_full_repo_name

model_name = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-imdb-accelerate&quot;</span>
repo_name = get_full_repo_name(model_name)
repo_name`}}),lt=new A({props:{code:"'lewtun/distilbert-base-uncased-finetuned-imdb-accelerate'",highlighted:'<span class="hljs-string">&#x27;lewtun/distilbert-base-uncased-finetuned-imdb-accelerate&#x27;</span>'}}),bt=new A({props:{code:`from huggingface_hub import Repository

output_dir = model_name
repo = Repository(output_dir, clone_from=repo_name)`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> Repository

output_dir = model_name
repo = Repository(output_dir, clone_from=repo_name)`}}),yt=new A({props:{code:`from tqdm.auto import tqdm
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
        )`,highlighted:`<span class="hljs-keyword">from</span> tqdm.auto <span class="hljs-keyword">import</span> tqdm
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
        )`}}),vt=new A({props:{code:`Epoch 0: Perplexity: 11.397545307900472
Epoch 1: Perplexity: 10.904909330983092
Epoch 2: Perplexity: 10.729503505340409`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>Epoch <span class="hljs-number">0</span>: Perplexity: <span class="hljs-number">11.397545307900472</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>Epoch <span class="hljs-number">1</span>: Perplexity: <span class="hljs-number">10.904909330983092</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>Epoch <span class="hljs-number">2</span>: Perplexity: <span class="hljs-number">10.729503505340409</span>`}}),{c(){i=r("p"),f=a("In our use case we didn\u2019t need to do anything special with the training loop, but in some cases you might need to implement some custom logic. For these applications, you can use \u{1F917} Accelerate \u2014 let\u2019s take a look!"),d=u(),y=r("h2"),z=r("a"),k=r("span"),$(b.$$.fragment),q=u(),g=r("span"),D=a("Fine-tuning DistilBERT with \u{1F917} Accelerate"),K=u(),C=r("p"),P=a("As we saw with the "),N=r("code"),F=a("Trainer"),W=a(", fine-tuning a masked language model is very similar to the text classification example from "),H=r("a"),B=a("Chapter 3"),v=a(". In fact, the only subtlety is the use of a special data collator, and we\u2019ve already covered that earlier in this section!"),R=u(),U=r("p"),Y=a("However, we saw that "),J=r("code"),I=a("DataCollatorForLanguageModeling"),je=a(" also applies random masking with each evaluation, so we\u2019ll see some fluctuations in our perplexity scores with each training run. One way to eliminate this source of randomness is to apply the masking "),de=r("em"),ne=a("once"),G=a(" on the whole test set, and then use the default data collator in \u{1F917} Transformers to collect the batches during evaluation. To see how this works, let\u2019s implement a simple function that applies the masking on a batch, similar to our first encounter with "),fe=r("code"),xe=a("DataCollatorForLanguageModeling"),oe=a(":"),Z=u(),$(ce.$$.fragment),we=u(),te=r("p"),Oe=a("Next, we\u2019ll apply this function to our test set and drop the unmasked columns so we can replace them with the masked ones. You can use whole word masking by replacing the "),ke=r("code"),se=a("data_collator"),Ge=a(" above with the appropriate one, in which case you should remove the first line here:"),ie=u(),$(Ee.$$.fragment),Fe=u(),re=r("p"),ue=a("We can then set up the dataloaders as usual, but we\u2019ll use the "),be=r("code"),pe=a("default_data_collator"),_e=a(" from \u{1F917} Transformers for the evaluation set:"),Te=u(),$(ae.$$.fragment),ye=u(),me=r("p"),ve=a("Form here, we follow the standard steps with \u{1F917} Accelerate. The first order of business is to load a fresh version of the pretrained model:"),Le=u(),$(ee.$$.fragment),S=u(),V=r("p"),ze=a("Then we need to specify the optimizer; we\u2019ll use the standard "),M=r("code"),X=a("AdamW"),ot=a(":"),Ae=u(),$(ge.$$.fragment),he=u(),Q=r("p"),nt=a("With these objects, we can now prepare everything for training with the "),Ke=r("code"),Je=a("Accelerator"),Re=a(" object:"),Ce=u(),$($e.$$.fragment),qe=u(),le=r("p"),Ct=a("Now that our model, optimizer, and dataloaders are configured, we can specify the learning rate scheduler as follows:"),De=u(),$(Qe.$$.fragment),gt=u(),Xe=r("p"),Zt=a("There is just one last thing to do before training: create a model repository on the Hugging Face Hub! We can use the \u{1F917} Hub library to first generate the full name of our repo:"),rs=u(),$(wt.$$.fragment),it=u(),$(lt.$$.fragment),ps=u(),rt=r("p"),hs=a("then create and clone the repository using the "),Ne=r("code"),Ue=a("Repository"),Ot=a(" class from \u{1F917} Hub:"),kt=u(),$(bt.$$.fragment),es=u(),Ze=r("p"),ds=a("With that done, it\u2019s just a simple matter of writing out the full training and evaluation loop:"),Me=u(),$(yt.$$.fragment),Lt=u(),$(vt.$$.fragment),cs=u(),et=r("p"),Hs=a("Cool, we\u2019ve been able to evaluate perplexity with each epoch and ensure that multiple training runs are reproducible!"),this.h()},l(c){i=p(c,"P",{});var O=h(i);f=o(O,"In our use case we didn\u2019t need to do anything special with the training loop, but in some cases you might need to implement some custom logic. For these applications, you can use \u{1F917} Accelerate \u2014 let\u2019s take a look!"),O.forEach(s),d=m(c),y=p(c,"H2",{class:!0});var ms=h(y);z=p(ms,"A",{id:!0,class:!0,href:!0});var fs=h(z);k=p(fs,"SPAN",{});var eo=h(k);j(b.$$.fragment,eo),eo.forEach(s),fs.forEach(s),q=m(ms),g=p(ms,"SPAN",{});var to=h(g);D=o(to,"Fine-tuning DistilBERT with \u{1F917} Accelerate"),to.forEach(s),ms.forEach(s),K=m(c),C=p(c,"P",{});var $t=h(C);P=o($t,"As we saw with the "),N=p($t,"CODE",{});var Kt=h(N);F=o(Kt,"Trainer"),Kt.forEach(s),W=o($t,", fine-tuning a masked language model is very similar to the text classification example from "),H=p($t,"A",{href:!0});var Is=h(H);B=o(Is,"Chapter 3"),Is.forEach(s),v=o($t,". In fact, the only subtlety is the use of a special data collator, and we\u2019ve already covered that earlier in this section!"),$t.forEach(s),R=m(c),U=p(c,"P",{});var Ye=h(U);Y=o(Ye,"However, we saw that "),J=p(Ye,"CODE",{});var so=h(J);I=o(so,"DataCollatorForLanguageModeling"),so.forEach(s),je=o(Ye," also applies random masking with each evaluation, so we\u2019ll see some fluctuations in our perplexity scores with each training run. One way to eliminate this source of randomness is to apply the masking "),de=p(Ye,"EM",{});var Gs=h(de);ne=o(Gs,"once"),Gs.forEach(s),G=o(Ye," on the whole test set, and then use the default data collator in \u{1F917} Transformers to collect the batches during evaluation. To see how this works, let\u2019s implement a simple function that applies the masking on a batch, similar to our first encounter with "),fe=p(Ye,"CODE",{});var tt=h(fe);xe=o(tt,"DataCollatorForLanguageModeling"),tt.forEach(s),oe=o(Ye,":"),Ye.forEach(s),Z=m(c),j(ce.$$.fragment,c),we=m(c),te=p(c,"P",{});var We=h(te);Oe=o(We,"Next, we\u2019ll apply this function to our test set and drop the unmasked columns so we can replace them with the masked ones. You can use whole word masking by replacing the "),ke=p(We,"CODE",{});var ts=h(ke);se=o(ts,"data_collator"),ts.forEach(s),Ge=o(We," above with the appropriate one, in which case you should remove the first line here:"),We.forEach(s),ie=m(c),j(Ee.$$.fragment,c),Fe=m(c),re=p(c,"P",{});var pt=h(re);ue=o(pt,"We can then set up the dataloaders as usual, but we\u2019ll use the "),be=p(pt,"CODE",{});var Us=h(be);pe=o(Us,"default_data_collator"),Us.forEach(s),_e=o(pt," from \u{1F917} Transformers for the evaluation set:"),pt.forEach(s),Te=m(c),j(ae.$$.fragment,c),ye=m(c),me=p(c,"P",{});var ss=h(me);ve=o(ss,"Form here, we follow the standard steps with \u{1F917} Accelerate. The first order of business is to load a fresh version of the pretrained model:"),ss.forEach(s),Le=m(c),j(ee.$$.fragment,c),S=m(c),V=p(c,"P",{});var _s=h(V);ze=o(_s,"Then we need to specify the optimizer; we\u2019ll use the standard "),M=p(_s,"CODE",{});var Ys=h(M);X=o(Ys,"AdamW"),Ys.forEach(s),ot=o(_s,":"),_s.forEach(s),Ae=m(c),j(ge.$$.fragment,c),he=m(c),Q=p(c,"P",{});var st=h(Q);nt=o(st,"With these objects, we can now prepare everything for training with the "),Ke=p(st,"CODE",{});var jt=h(Ke);Je=o(jt,"Accelerator"),jt.forEach(s),Re=o(st," object:"),st.forEach(s),Ce=m(c),j($e.$$.fragment,c),qe=m(c),le=p(c,"P",{});var gs=h(le);Ct=o(gs,"Now that our model, optimizer, and dataloaders are configured, we can specify the learning rate scheduler as follows:"),gs.forEach(s),De=m(c),j(Qe.$$.fragment,c),gt=m(c),Xe=p(c,"P",{});var Rt=h(Xe);Zt=o(Rt,"There is just one last thing to do before training: create a model repository on the Hugging Face Hub! We can use the \u{1F917} Hub library to first generate the full name of our repo:"),Rt.forEach(s),rs=m(c),j(wt.$$.fragment,c),it=m(c),j(lt.$$.fragment,c),ps=m(c),rt=p(c,"P",{});var ws=h(rt);hs=o(ws,"then create and clone the repository using the "),Ne=p(ws,"CODE",{});var ks=h(Ne);Ue=o(ks,"Repository"),ks.forEach(s),Ot=o(ws," class from \u{1F917} Hub:"),ws.forEach(s),kt=m(c),j(bt.$$.fragment,c),es=m(c),Ze=p(c,"P",{});var ao=h(Ze);ds=o(ao,"With that done, it\u2019s just a simple matter of writing out the full training and evaluation loop:"),ao.forEach(s),Me=m(c),j(yt.$$.fragment,c),Lt=m(c),j(vt.$$.fragment,c),cs=m(c),et=p(c,"P",{});var Vs=h(et);Hs=o(Vs,"Cool, we\u2019ve been able to evaluate perplexity with each epoch and ensure that multiple training runs are reproducible!"),Vs.forEach(s),this.h()},h(){T(z,"id","finetuning-distilbert-with-accelerate"),T(z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(z,"href","#finetuning-distilbert-with-accelerate"),T(y,"class","relative group"),T(H,"href","/course/chapter3")},m(c,O){l(c,i,O),t(i,f),l(c,d,O),l(c,y,O),t(y,z),t(z,k),x(b,k,null),t(y,q),t(y,g),t(g,D),l(c,K,O),l(c,C,O),t(C,P),t(C,N),t(N,F),t(C,W),t(C,H),t(H,B),t(C,v),l(c,R,O),l(c,U,O),t(U,Y),t(U,J),t(J,I),t(U,je),t(U,de),t(de,ne),t(U,G),t(U,fe),t(fe,xe),t(U,oe),l(c,Z,O),x(ce,c,O),l(c,we,O),l(c,te,O),t(te,Oe),t(te,ke),t(ke,se),t(te,Ge),l(c,ie,O),x(Ee,c,O),l(c,Fe,O),l(c,re,O),t(re,ue),t(re,be),t(be,pe),t(re,_e),l(c,Te,O),x(ae,c,O),l(c,ye,O),l(c,me,O),t(me,ve),l(c,Le,O),x(ee,c,O),l(c,S,O),l(c,V,O),t(V,ze),t(V,M),t(M,X),t(V,ot),l(c,Ae,O),x(ge,c,O),l(c,he,O),l(c,Q,O),t(Q,nt),t(Q,Ke),t(Ke,Je),t(Q,Re),l(c,Ce,O),x($e,c,O),l(c,qe,O),l(c,le,O),t(le,Ct),l(c,De,O),x(Qe,c,O),l(c,gt,O),l(c,Xe,O),t(Xe,Zt),l(c,rs,O),x(wt,c,O),l(c,it,O),x(lt,c,O),l(c,ps,O),l(c,rt,O),t(rt,hs),t(rt,Ne),t(Ne,Ue),t(rt,Ot),l(c,kt,O),x(bt,c,O),l(c,es,O),l(c,Ze,O),t(Ze,ds),l(c,Me,O),x(yt,c,O),l(c,Lt,O),x(vt,c,O),l(c,cs,O),l(c,et,O),t(et,Hs),us=!0},i(c){us||(_(b.$$.fragment,c),_(ce.$$.fragment,c),_(Ee.$$.fragment,c),_(ae.$$.fragment,c),_(ee.$$.fragment,c),_(ge.$$.fragment,c),_($e.$$.fragment,c),_(Qe.$$.fragment,c),_(wt.$$.fragment,c),_(lt.$$.fragment,c),_(bt.$$.fragment,c),_(yt.$$.fragment,c),_(vt.$$.fragment,c),us=!0)},o(c){w(b.$$.fragment,c),w(ce.$$.fragment,c),w(Ee.$$.fragment,c),w(ae.$$.fragment,c),w(ee.$$.fragment,c),w(ge.$$.fragment,c),w($e.$$.fragment,c),w(Qe.$$.fragment,c),w(wt.$$.fragment,c),w(lt.$$.fragment,c),w(bt.$$.fragment,c),w(yt.$$.fragment,c),w(vt.$$.fragment,c),us=!1},d(c){c&&s(i),c&&s(d),c&&s(y),E(b),c&&s(K),c&&s(C),c&&s(R),c&&s(U),c&&s(Z),E(ce,c),c&&s(we),c&&s(te),c&&s(ie),E(Ee,c),c&&s(Fe),c&&s(re),c&&s(Te),E(ae,c),c&&s(ye),c&&s(me),c&&s(Le),E(ee,c),c&&s(S),c&&s(V),c&&s(Ae),E(ge,c),c&&s(he),c&&s(Q),c&&s(Ce),E($e,c),c&&s(qe),c&&s(le),c&&s(De),E(Qe,c),c&&s(gt),c&&s(Xe),c&&s(rs),E(wt,c),c&&s(it),E(lt,c),c&&s(ps),c&&s(rt),c&&s(kt),E(bt,c),c&&s(es),c&&s(Ze),c&&s(Me),E(yt,c),c&&s(Lt),E(vt,c),c&&s(cs),c&&s(et)}}}function Wu(L){let i,f,d,y,z,k,b,q;return{c(){i=r("p"),f=a("\u270F\uFE0F "),d=r("strong"),y=a("Try it out!"),z=a(" To quantify the benefits of domain adaptation, fine-tune a classifier on the IMDb labels for both the pretrained and fine-tuned DistilBERT checkpoints. If you need a refresher on text classification, check out "),k=r("a"),b=a("Chapter 3"),q=a("."),this.h()},l(g){i=p(g,"P",{});var D=h(i);f=o(D,"\u270F\uFE0F "),d=p(D,"STRONG",{});var K=h(d);y=o(K,"Try it out!"),K.forEach(s),z=o(D," To quantify the benefits of domain adaptation, fine-tune a classifier on the IMDb labels for both the pretrained and fine-tuned DistilBERT checkpoints. If you need a refresher on text classification, check out "),k=p(D,"A",{href:!0});var C=h(k);b=o(C,"Chapter 3"),C.forEach(s),q=o(D,"."),D.forEach(s),this.h()},h(){T(k,"href","/course/chapter3")},m(g,D){l(g,i,D),t(i,f),t(i,d),t(d,y),t(i,z),t(i,k),t(k,b),t(i,q)},d(g){g&&s(i)}}}function Bu(L){let i,f,d,y,z,k,b,q,g,D,K,C,P,N,F,W,H,B,v,R,U,Y,J,I,je,de,ne,G,fe,xe,oe,Z,ce,we,te,Oe,ke,se,Ge,ie,Ee,Fe,re,ue,be,pe,_e,Te,ae,ye,me,ve,Le,ee,S,V,ze,M,X,ot,Ae,ge,he,Q,nt,Ke,Je,Re,Ce,$e,qe,le,Ct,De,Qe,gt,Xe,Zt,rs,wt,it,lt,ps,rt,hs,Ne,Ue,Ot,kt,bt,es,Ze,ds,Me,yt,Lt,vt,cs,et,Hs,us,c,O,ms,fs,eo,to,$t,Kt,Is,Ye,so,Gs,tt,We,ts,pt,Us,ss,_s,Ys,st,jt,gs,Rt,ws,ks,ao,Vs,Nt,er,Js,tr,sr,Vo,ar,or,nl,Qs,ll,Xs,il,Be,nr,Jo,lr,ir,Qo,rr,pr,Xo,hr,dr,Zo,cr,ur,en,mr,fr,rl,Zs,pl,ea,hl,Ft,_r,tn,gr,wr,sn,kr,br,dl,bs,cl,ys,yr,oo,vr,$r,ul,as,vs,an,ta,jr,on,xr,ml,sa,fl,no,Er,_l,He,Tr,nn,zr,Ar,ln,qr,Dr,lo,Mr,Pr,rn,Sr,Cr,pn,Or,Lr,gl,aa,wl,oa,kl,ht,Kr,hn,Rr,Nr,dn,Fr,Wr,cn,Br,Hr,bl,$s,Ir,un,Gr,Ur,yl,na,vl,la,$l,js,Yr,mn,Vr,Jr,jl,xs,xl,io,Qr,El,ia,Tl,Es,zl,ro,Xr,Al,ra,ql,pa,Dl,po,Zr,Ml,ha,Pl,da,Sl,Wt,ep,fn,tp,sp,_n,ap,op,Cl,ca,Ol,ua,Ll,ho,np,Kl,Ts,ma,lp,gn,ip,rp,pp,fa,hp,wn,dp,cp,Rl,co,up,Nl,_a,Fl,at,mp,kn,fp,_p,bn,gp,wp,yn,kp,bp,vn,yp,vp,Wl,Bt,$p,$n,jp,xp,jn,Ep,Tp,Bl,ga,Hl,wa,Il,Ie,zp,xn,Ap,qp,En,Dp,Mp,Tn,Pp,Sp,zn,Cp,Op,An,Lp,Kp,Gl,ka,Ul,ba,Yl,uo,Rp,Vl,ya,Jl,va,Ql,dt,Np,qn,Fp,Wp,Dn,Bp,Hp,Mn,Ip,Gp,Xl,os,zs,Pn,$a,Up,ja,Yp,Sn,Vp,Jp,Zl,ct,Qp,mo,Xp,Zp,Cn,eh,th,On,sh,ah,ei,xa,ti,ut,oh,Ln,nh,lh,Kn,ih,rh,Rn,ph,hh,si,Ea,ai,Ta,oi,Ht,dh,Nn,ch,uh,Fn,mh,fh,ni,As,li,fo,It,_h,Wn,gh,wh,Bn,kh,bh,ii,xt,Et,_o,go,yh,ri,za,pi,Aa,hi,qs,di,Gt,vh,Hn,$h,jh,wo,xh,Eh,ci,qa,ui,Da,mi,Ut,Th,In,zh,Ah,Gn,qh,Dh,fi,Ma,_i,ko,Mh,gi,Pa,wi,bo,Ph,ki,Tt,zt,yo,ns,Ds,Un,Sa,Sh,Yn,Ch,bi,Ca,yi,vo,Oh,vi,At,qt,$o,Oa,$i,jo,Lh,ji,Dt,Mt,xo,Eo,Kh,xi,Pt,St,To,La,Ei,zo,Rh,Ti,Ao,Ms,zi,qo,ls,Ps,Vn,Ka,Nh,Jn,Fh,Ai,Yt,Wh,Qn,Bh,Hh,Xn,Ih,Gh,qi,Ra,Di,Do,Uh,Mi,Na,Pi,Fa,Si,Mo,Yh,Ci,Wa,Oi,Ss,Vh,Po,Jh,Qh,Li,Cs,Ki;d=new wu({props:{fw:L[0]}}),q=new Bs({});const Zh=[bu,ku],Ba=[];function ed(e,n){return e[0]==="pt"?0:1}P=ed(L),N=Ba[P]=Zh[P](L),ye=new Zi({props:{id:"mqElG5QJWUg"}}),ve=new Ws({props:{$$slots:{default:[yu]},$$scope:{ctx:L}}}),ze=new Bs({});const td=[$u,vu],Ha=[];function sd(e,n){return e[0]==="pt"?0:1}Ne=sd(L),Ue=Ha[Ne]=td[Ne](L),Ze=new A({props:{code:'text = "This is a great [MASK]."',highlighted:'text = <span class="hljs-string">&quot;This is a great [MASK].&quot;</span>'}}),Kt=new A({props:{code:`from transformers import AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)`}});const ad=[xu,ju],Ia=[];function od(e,n){return e[0]==="pt"?0:1}tt=od(L),We=Ia[tt]=ad[tt](L),pt=new A({props:{code:`'>>> This is a great deal.'
'>>> This is a great success.'
'>>> This is a great adventure.'
'>>> This is a great idea.'
'>>> This is a great feat.'`,highlighted:`<span class="hljs-string">&#x27;&gt;&gt;&gt; This is a great deal.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; This is a great success.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; This is a great adventure.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; This is a great idea.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; This is a great feat.&#x27;</span>`}}),Rt=new Bs({}),Qs=new A({props:{code:`from datasets import load_dataset

imdb_dataset = load_dataset("imdb")
imdb_dataset`,highlighted:`<span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> load_dataset

imdb_dataset = load_dataset(<span class="hljs-string">&quot;imdb&quot;</span>)
imdb_dataset`}}),Xs=new A({props:{code:`DatasetDict({
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
})`,highlighted:`DatasetDict({
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
})`}}),Zs=new A({props:{code:`sample = imdb_dataset["train"].shuffle(seed=42).select(range(3))

for row in sample:
    print(f"\\n'>>> Review: {row['text']}'")
    print(f"'>>> Label: {row['label']}'")`,highlighted:`sample = imdb_dataset[<span class="hljs-string">&quot;train&quot;</span>].shuffle(seed=<span class="hljs-number">42</span>).select(<span class="hljs-built_in">range</span>(<span class="hljs-number">3</span>))

<span class="hljs-keyword">for</span> row <span class="hljs-keyword">in</span> sample:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;\\n&#x27;&gt;&gt;&gt; Review: <span class="hljs-subst">{row[<span class="hljs-string">&#x27;text&#x27;</span>]}</span>&#x27;&quot;</span>)
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&#x27;&gt;&gt;&gt; Label: <span class="hljs-subst">{row[<span class="hljs-string">&#x27;label&#x27;</span>]}</span>&#x27;&quot;</span>)`}}),ea=new A({props:{code:`
'>>> Review: This is your typical Priyadarshan movie--a bunch of loony characters out on some silly mission. His signature climax has the entire cast of the film coming together and fighting each other in some crazy moshpit over hidden money. Whether it is a winning lottery ticket in Malamaal Weekly, black money in Hera Pheri, "kodokoo" in Phir Hera Pheri, etc., etc., the director is becoming ridiculously predictable. Don\\'t get me wrong; as clich\xE9d and preposterous his movies may be, I usually end up enjoying the comedy. However, in most his previous movies there has actually been some good humor, (Hungama and Hera Pheri being noteworthy ones). Now, the hilarity of his films is fading as he is using the same formula over and over again.<br /><br />Songs are good. Tanushree Datta looks awesome. Rajpal Yadav is irritating, and Tusshar is not a whole lot better. Kunal Khemu is OK, and Sharman Joshi is the best.'
'>>> Label: 0'

'>>> Review: Okay, the story makes no sense, the characters lack any dimensionally, the best dialogue is ad-libs about the low quality of movie, the cinematography is dismal, and only editing saves a bit of the muddle, but Sam" Peckinpah directed the film. Somehow, his direction is not enough. For those who appreciate Peckinpah and his great work, this movie is a disappointment. Even a great cast cannot redeem the time the viewer wastes with this minimal effort.<br /><br />The proper response to the movie is the contempt that the director San Peckinpah, James Caan, Robert Duvall, Burt Young, Bo Hopkins, Arthur Hill, and even Gig Young bring to their work. Watch the great Peckinpah films. Skip this mess.'
'>>> Label: 0'

'>>> Review: I saw this movie at the theaters when I was about 6 or 7 years old. I loved it then, and have recently come to own a VHS version. <br /><br />My 4 and 6 year old children love this movie and have been asking again and again to watch it. <br /><br />I have enjoyed watching it again too. Though I have to admit it is not as good on a little TV.<br /><br />I do not have older children so I do not know what they would think of it. <br /><br />The songs are very cute. My daughter keeps singing them over and over.<br /><br />Hope this helps.'
'>>> Label: 1'`,highlighted:`
<span class="hljs-string">&#x27;&gt;&gt;&gt; Review: This is your typical Priyadarshan movie--a bunch of loony characters out on some silly mission. His signature climax has the entire cast of the film coming together and fighting each other in some crazy moshpit over hidden money. Whether it is a winning lottery ticket in Malamaal Weekly, black money in Hera Pheri, &quot;kodokoo&quot; in Phir Hera Pheri, etc., etc., the director is becoming ridiculously predictable. Don\\&#x27;t get me wrong; as clich\xE9d and preposterous his movies may be, I usually end up enjoying the comedy. However, in most his previous movies there has actually been some good humor, (Hungama and Hera Pheri being noteworthy ones). Now, the hilarity of his films is fading as he is using the same formula over and over again.&lt;br /&gt;&lt;br /&gt;Songs are good. Tanushree Datta looks awesome. Rajpal Yadav is irritating, and Tusshar is not a whole lot better. Kunal Khemu is OK, and Sharman Joshi is the best.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Label: 0&#x27;</span>

<span class="hljs-string">&#x27;&gt;&gt;&gt; Review: Okay, the story makes no sense, the characters lack any dimensionally, the best dialogue is ad-libs about the low quality of movie, the cinematography is dismal, and only editing saves a bit of the muddle, but Sam&quot; Peckinpah directed the film. Somehow, his direction is not enough. For those who appreciate Peckinpah and his great work, this movie is a disappointment. Even a great cast cannot redeem the time the viewer wastes with this minimal effort.&lt;br /&gt;&lt;br /&gt;The proper response to the movie is the contempt that the director San Peckinpah, James Caan, Robert Duvall, Burt Young, Bo Hopkins, Arthur Hill, and even Gig Young bring to their work. Watch the great Peckinpah films. Skip this mess.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Label: 0&#x27;</span>

<span class="hljs-string">&#x27;&gt;&gt;&gt; Review: I saw this movie at the theaters when I was about 6 or 7 years old. I loved it then, and have recently come to own a VHS version. &lt;br /&gt;&lt;br /&gt;My 4 and 6 year old children love this movie and have been asking again and again to watch it. &lt;br /&gt;&lt;br /&gt;I have enjoyed watching it again too. Though I have to admit it is not as good on a little TV.&lt;br /&gt;&lt;br /&gt;I do not have older children so I do not know what they would think of it. &lt;br /&gt;&lt;br /&gt;The songs are very cute. My daughter keeps singing them over and over.&lt;br /&gt;&lt;br /&gt;Hope this helps.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Label: 1&#x27;</span>`}}),bs=new Ws({props:{$$slots:{default:[Eu]},$$scope:{ctx:L}}}),ta=new Bs({}),sa=new Zi({props:{id:"8PmhEIXhBvI"}}),aa=new A({props:{code:`def tokenize_function(examples):
    result = tokenizer(examples["text"])
    if tokenizer.is_fast:
        result["word_ids"] = [result.word_ids(i) for i in range(len(result["input_ids"]))]
    return result


# Use batched=True to activate fast multithreading!
tokenized_datasets = imdb_dataset.map(
    tokenize_function, batched=True, remove_columns=["text", "label"]
)
tokenized_datasets`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">tokenize_function</span>(<span class="hljs-params">examples</span>):
    result = tokenizer(examples[<span class="hljs-string">&quot;text&quot;</span>])
    <span class="hljs-keyword">if</span> tokenizer.is_fast:
        result[<span class="hljs-string">&quot;word_ids&quot;</span>] = [result.word_ids(i) <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-built_in">len</span>(result[<span class="hljs-string">&quot;input_ids&quot;</span>]))]
    <span class="hljs-keyword">return</span> result


<span class="hljs-comment"># Use batched=True to activate fast multithreading!</span>
tokenized_datasets = imdb_dataset.<span class="hljs-built_in">map</span>(
    tokenize_function, batched=<span class="hljs-literal">True</span>, remove_columns=[<span class="hljs-string">&quot;text&quot;</span>, <span class="hljs-string">&quot;label&quot;</span>]
)
tokenized_datasets`}}),oa=new A({props:{code:`DatasetDict({
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
})`,highlighted:`DatasetDict({
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
})`}}),na=new A({props:{code:"tokenizer.model_max_length",highlighted:"tokenizer.model_max_length"}}),la=new A({props:{code:"512",highlighted:'<span class="hljs-number">512</span>'}}),xs=new Ws({props:{$$slots:{default:[Tu]},$$scope:{ctx:L}}}),ia=new A({props:{code:"chunk_size = 128",highlighted:'chunk_size = <span class="hljs-number">128</span>'}}),Es=new Ws({props:{warning:!0,$$slots:{default:[zu]},$$scope:{ctx:L}}}),ra=new A({props:{code:`# Slicing produces a list of lists for each feature
tokenized_samples = tokenized_datasets["train"][:3]

for idx, sample in enumerate(tokenized_samples["input_ids"]):
    print(f"'>>> Review {idx} length: {len(sample)}'")`,highlighted:`<span class="hljs-comment"># Slicing produces a list of lists for each feature</span>
tokenized_samples = tokenized_datasets[<span class="hljs-string">&quot;train&quot;</span>][:<span class="hljs-number">3</span>]

<span class="hljs-keyword">for</span> idx, sample <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(tokenized_samples[<span class="hljs-string">&quot;input_ids&quot;</span>]):
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&#x27;&gt;&gt;&gt; Review <span class="hljs-subst">{idx}</span> length: <span class="hljs-subst">{<span class="hljs-built_in">len</span>(sample)}</span>&#x27;&quot;</span>)`}}),pa=new A({props:{code:`'>>> Review 0 length: 200'
'>>> Review 1 length: 559'
'>>> Review 2 length: 192'`,highlighted:`<span class="hljs-string">&#x27;&gt;&gt;&gt; Review 0 length: 200&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Review 1 length: 559&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Review 2 length: 192&#x27;</span>`}}),ha=new A({props:{code:`concatenated_examples = {
    k: sum(tokenized_samples[k], []) for k in tokenized_samples.keys()
}
total_length = len(concatenated_examples["input_ids"])
print(f"'>>> Concatenated reviews length: {total_length}'")`,highlighted:`concatenated_examples = {
    k: <span class="hljs-built_in">sum</span>(tokenized_samples[k], []) <span class="hljs-keyword">for</span> k <span class="hljs-keyword">in</span> tokenized_samples.keys()
}
total_length = <span class="hljs-built_in">len</span>(concatenated_examples[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&#x27;&gt;&gt;&gt; Concatenated reviews length: <span class="hljs-subst">{total_length}</span>&#x27;&quot;</span>)`}}),da=new A({props:{code:"'>>> Concatenated reviews length: 951'",highlighted:'<span class="hljs-string">&#x27;&gt;&gt;&gt; Concatenated reviews length: 951&#x27;</span>'}}),ca=new A({props:{code:`chunks = {
    k: [t[i : i + chunk_size] for i in range(0, total_length, chunk_size)]
    for k, t in concatenated_examples.items()
}

for chunk in chunks["input_ids"]:
    print(f"'>>> Chunk length: {len(chunk)}'")`,highlighted:`chunks = {
    k: [t[i : i + chunk_size] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">0</span>, total_length, chunk_size)]
    <span class="hljs-keyword">for</span> k, t <span class="hljs-keyword">in</span> concatenated_examples.items()
}

<span class="hljs-keyword">for</span> chunk <span class="hljs-keyword">in</span> chunks[<span class="hljs-string">&quot;input_ids&quot;</span>]:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&#x27;&gt;&gt;&gt; Chunk length: <span class="hljs-subst">{<span class="hljs-built_in">len</span>(chunk)}</span>&#x27;&quot;</span>)`}}),ua=new A({props:{code:`'>>> Chunk length: 128'
'>>> Chunk length: 128'
'>>> Chunk length: 128'
'>>> Chunk length: 128'
'>>> Chunk length: 128'
'>>> Chunk length: 128'
'>>> Chunk length: 128'
'>>> Chunk length: 55'`,highlighted:`<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 128&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 128&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 128&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 128&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 128&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 128&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 128&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; Chunk length: 55&#x27;</span>`}}),_a=new A({props:{code:`def group_texts(examples):
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
    return result`,highlighted:`<span class="hljs-keyword">def</span> <span class="hljs-title function_">group_texts</span>(<span class="hljs-params">examples</span>):
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
    <span class="hljs-keyword">return</span> result`}}),ga=new A({props:{code:`lm_datasets = tokenized_datasets.map(group_texts, batched=True)
lm_datasets`,highlighted:`lm_datasets = tokenized_datasets.<span class="hljs-built_in">map</span>(group_texts, batched=<span class="hljs-literal">True</span>)
lm_datasets`}}),wa=new A({props:{code:`DatasetDict({
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
})`,highlighted:`DatasetDict({
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
})`}}),ka=new A({props:{code:'tokenizer.decode(lm_datasets["train"][1]["input_ids"])',highlighted:'tokenizer.decode(lm_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">1</span>][<span class="hljs-string">&quot;input_ids&quot;</span>])'}}),ba=new A({props:{code:`".... at.......... high. a classic line : inspector : i'm here to sack one of your teachers. student : welcome to bromwell high. i expect that many adults of my age think that bromwell high is far fetched. what a pity that it isn't! [SEP] [CLS] homelessness ( or houselessness as george carlin stated ) has been an issue for years but never a plan to help those on the street that were once considered human who did everything from going to school, work, or vote for the matter. most people think of the homeless"`,highlighted:'<span class="hljs-string">&quot;.... at.......... high. a classic line : inspector : i&#x27;m here to sack one of your teachers. student : welcome to bromwell high. i expect that many adults of my age think that bromwell high is far fetched. what a pity that it isn&#x27;t! [SEP] [CLS] homelessness ( or houselessness as george carlin stated ) has been an issue for years but never a plan to help those on the street that were once considered human who did everything from going to school, work, or vote for the matter. most people think of the homeless&quot;</span>'}}),ya=new A({props:{code:'tokenizer.decode(lm_datasets["train"][1]["labels"])',highlighted:'tokenizer.decode(lm_datasets[<span class="hljs-string">&quot;train&quot;</span>][<span class="hljs-number">1</span>][<span class="hljs-string">&quot;labels&quot;</span>])'}}),va=new A({props:{code:`".... at.......... high. a classic line : inspector : i'm here to sack one of your teachers. student : welcome to bromwell high. i expect that many adults of my age think that bromwell high is far fetched. what a pity that it isn't! [SEP] [CLS] homelessness ( or houselessness as george carlin stated ) has been an issue for years but never a plan to help those on the street that were once considered human who did everything from going to school, work, or vote for the matter. most people think of the homeless"`,highlighted:'<span class="hljs-string">&quot;.... at.......... high. a classic line : inspector : i&#x27;m here to sack one of your teachers. student : welcome to bromwell high. i expect that many adults of my age think that bromwell high is far fetched. what a pity that it isn&#x27;t! [SEP] [CLS] homelessness ( or houselessness as george carlin stated ) has been an issue for years but never a plan to help those on the street that were once considered human who did everything from going to school, work, or vote for the matter. most people think of the homeless&quot;</span>'}}),$a=new Bs({}),xa=new A({props:{code:`from transformers import DataCollatorForLanguageModeling

data_collator = DataCollatorForLanguageModeling(tokenizer=tokenizer, mlm_probability=0.15)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DataCollatorForLanguageModeling

data_collator = DataCollatorForLanguageModeling(tokenizer=tokenizer, mlm_probability=<span class="hljs-number">0.15</span>)`}}),Ea=new A({props:{code:`samples = [lm_datasets["train"][i] for i in range(2)]
for sample in samples:
    _ = sample.pop("word_ids")

for chunk in data_collator(samples)["input_ids"]:
    print(f"\\n'>>> {tokenizer.decode(chunk)}'")`,highlighted:`samples = [lm_datasets[<span class="hljs-string">&quot;train&quot;</span>][i] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>)]
<span class="hljs-keyword">for</span> sample <span class="hljs-keyword">in</span> samples:
    _ = sample.pop(<span class="hljs-string">&quot;word_ids&quot;</span>)

<span class="hljs-keyword">for</span> chunk <span class="hljs-keyword">in</span> data_collator(samples)[<span class="hljs-string">&quot;input_ids&quot;</span>]:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;\\n&#x27;&gt;&gt;&gt; <span class="hljs-subst">{tokenizer.decode(chunk)}</span>&#x27;&quot;</span>)`}}),Ta=new A({props:{code:`'>>> [CLS] bromwell [MASK] is a cartoon comedy. it ran at the same [MASK] as some other [MASK] about school life, [MASK] as " teachers ". [MASK] [MASK] [MASK] in the teaching [MASK] lead [MASK] to believe that bromwell high\\'[MASK] satire is much closer to reality than is " teachers ". the scramble [MASK] [MASK] financially, the [MASK]ful students whogn [MASK] right through [MASK] pathetic teachers\\'pomp, the pettiness of the whole situation, distinction remind me of the schools i knew and their students. when i saw [MASK] episode in [MASK] a student repeatedly tried to burn down the school, [MASK] immediately recalled. [MASK]...'

'>>> .... at.. [MASK]... [MASK]... high. a classic line plucked inspector : i\\'[MASK] here to [MASK] one of your [MASK]. student : welcome to bromwell [MASK]. i expect that many adults of my age think that [MASK]mwell [MASK] is [MASK] fetched. what a pity that it isn\\'t! [SEP] [CLS] [MASK]ness ( or [MASK]lessness as george \u5B87in stated )\u516C been an issue for years but never [MASK] plan to help those on the street that were once considered human [MASK] did everything from going to school, [MASK], [MASK] vote for the matter. most people think [MASK] the homeless'`,highlighted:`<span class="hljs-string">&#x27;&gt;&gt;&gt; [CLS] bromwell [MASK] is a cartoon comedy. it ran at the same [MASK] as some other [MASK] about school life, [MASK] as &quot; teachers &quot;. [MASK] [MASK] [MASK] in the teaching [MASK] lead [MASK] to believe that bromwell high\\&#x27;[MASK] satire is much closer to reality than is &quot; teachers &quot;. the scramble [MASK] [MASK] financially, the [MASK]ful students whogn [MASK] right through [MASK] pathetic teachers\\&#x27;pomp, the pettiness of the whole situation, distinction remind me of the schools i knew and their students. when i saw [MASK] episode in [MASK] a student repeatedly tried to burn down the school, [MASK] immediately recalled. [MASK]...&#x27;</span>

<span class="hljs-string">&#x27;&gt;&gt;&gt; .... at.. [MASK]... [MASK]... high. a classic line plucked inspector : i\\&#x27;[MASK] here to [MASK] one of your [MASK]. student : welcome to bromwell [MASK]. i expect that many adults of my age think that [MASK]mwell [MASK] is [MASK] fetched. what a pity that it isn\\&#x27;t! [SEP] [CLS] [MASK]ness ( or [MASK]lessness as george \u5B87in stated )\u516C been an issue for years but never [MASK] plan to help those on the street that were once considered human [MASK] did everything from going to school, [MASK], [MASK] vote for the matter. most people think [MASK] the homeless&#x27;</span>`}}),As=new Ws({props:{$$slots:{default:[Au]},$$scope:{ctx:L}}});let Ve=L[0]==="pt"&&pu();const nd=[Du,qu],Ga=[];function ld(e,n){return e[0]==="pt"?0:1}xt=ld(L),Et=Ga[xt]=nd[xt](L),za=new A({props:{code:`samples = [lm_datasets["train"][i] for i in range(2)]
batch = whole_word_masking_data_collator(samples)

for chunk in batch["input_ids"]:
    print(f"\\n'>>> {tokenizer.decode(chunk)}'")`,highlighted:`samples = [lm_datasets[<span class="hljs-string">&quot;train&quot;</span>][i] <span class="hljs-keyword">for</span> i <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>)]
batch = whole_word_masking_data_collator(samples)

<span class="hljs-keyword">for</span> chunk <span class="hljs-keyword">in</span> batch[<span class="hljs-string">&quot;input_ids&quot;</span>]:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;\\n&#x27;&gt;&gt;&gt; <span class="hljs-subst">{tokenizer.decode(chunk)}</span>&#x27;&quot;</span>)`}}),Aa=new A({props:{code:`'>>> [CLS] bromwell high is a cartoon comedy [MASK] it ran at the same time as some other programs about school life, such as " teachers ". my 35 years in the teaching profession lead me to believe that bromwell high\\'s satire is much closer to reality than is " teachers ". the scramble to survive financially, the insightful students who can see right through their pathetic teachers\\'pomp, the pettiness of the whole situation, all remind me of the schools i knew and their students. when i saw the episode in which a student repeatedly tried to burn down the school, i immediately recalled.....'

'>>> .... [MASK] [MASK] [MASK] [MASK]....... high. a classic line : inspector : i\\'m here to sack one of your teachers. student : welcome to bromwell high. i expect that many adults of my age think that bromwell high is far fetched. what a pity that it isn\\'t! [SEP] [CLS] homelessness ( or houselessness as george carlin stated ) has been an issue for years but never a plan to help those on the street that were once considered human who did everything from going to school, work, or vote for the matter. most people think of the homeless'`,highlighted:`<span class="hljs-string">&#x27;&gt;&gt;&gt; [CLS] bromwell high is a cartoon comedy [MASK] it ran at the same time as some other programs about school life, such as &quot; teachers &quot;. my 35 years in the teaching profession lead me to believe that bromwell high\\&#x27;s satire is much closer to reality than is &quot; teachers &quot;. the scramble to survive financially, the insightful students who can see right through their pathetic teachers\\&#x27;pomp, the pettiness of the whole situation, all remind me of the schools i knew and their students. when i saw the episode in which a student repeatedly tried to burn down the school, i immediately recalled.....&#x27;</span>

<span class="hljs-string">&#x27;&gt;&gt;&gt; .... [MASK] [MASK] [MASK] [MASK]....... high. a classic line : inspector : i\\&#x27;m here to sack one of your teachers. student : welcome to bromwell high. i expect that many adults of my age think that bromwell high is far fetched. what a pity that it isn\\&#x27;t! [SEP] [CLS] homelessness ( or houselessness as george carlin stated ) has been an issue for years but never a plan to help those on the street that were once considered human who did everything from going to school, work, or vote for the matter. most people think of the homeless&#x27;</span>`}}),qs=new Ws({props:{$$slots:{default:[Mu]},$$scope:{ctx:L}}}),qa=new A({props:{code:`train_size = 10_000
test_size = int(0.1 * train_size)

downsampled_dataset = lm_datasets["train"].train_test_split(
    train_size=train_size, test_size=test_size, seed=42
)
downsampled_dataset`,highlighted:`train_size = <span class="hljs-number">10_000</span>
test_size = <span class="hljs-built_in">int</span>(<span class="hljs-number">0.1</span> * train_size)

downsampled_dataset = lm_datasets[<span class="hljs-string">&quot;train&quot;</span>].train_test_split(
    train_size=train_size, test_size=test_size, seed=<span class="hljs-number">42</span>
)
downsampled_dataset`}}),Da=new A({props:{code:`DatasetDict({
    train: Dataset({
        features: ['attention_mask', 'input_ids', 'labels', 'word_ids'],
        num_rows: 10000
    })
    test: Dataset({
        features: ['attention_mask', 'input_ids', 'labels', 'word_ids'],
        num_rows: 1000
    })
})`,highlighted:`DatasetDict({
    train: Dataset({
        features: [<span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;labels&#x27;</span>, <span class="hljs-string">&#x27;word_ids&#x27;</span>],
        num_rows: <span class="hljs-number">10000</span>
    })
    test: Dataset({
        features: [<span class="hljs-string">&#x27;attention_mask&#x27;</span>, <span class="hljs-string">&#x27;input_ids&#x27;</span>, <span class="hljs-string">&#x27;labels&#x27;</span>, <span class="hljs-string">&#x27;word_ids&#x27;</span>],
        num_rows: <span class="hljs-number">1000</span>
    })
})`}}),Ma=new A({props:{code:`from huggingface_hub import notebook_login

notebook_login()`,highlighted:`<span class="hljs-keyword">from</span> huggingface_hub <span class="hljs-keyword">import</span> notebook_login

notebook_login()`}}),Pa=new A({props:{code:"huggingface-cli login",highlighted:'huggingface-<span class="hljs-keyword">cli</span> login'}});const id=[Su,Pu],Ua=[];function rd(e,n){return e[0]==="tf"?0:1}Tt=rd(L),zt=Ua[Tt]=id[Tt](L),Sa=new Bs({}),Ca=new Zi({props:{id:"NURcDHhYe98"}});const pd=[Ou,Cu],Ya=[];function hd(e,n){return e[0]==="pt"?0:1}At=hd(L),qt=Ya[At]=pd[At](L),Oa=new A({props:{code:"Perplexity: 21.75",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>Perplexity: <span class="hljs-number">21.75</span>'}});const dd=[Ku,Lu],Va=[];function cd(e,n){return e[0]==="pt"?0:1}Dt=cd(L),Mt=Va[Dt]=dd[Dt](L);const ud=[Nu,Ru],Ja=[];function md(e,n){return e[0]==="pt"?0:1}Pt=md(L),St=Ja[Pt]=ud[Pt](L),La=new A({props:{code:"Perplexity: 11.32",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>Perplexity: <span class="hljs-number">11.32</span>'}});let Pe=L[0]==="pt"&&hu();Ms=new Ws({props:{$$slots:{default:[Fu]},$$scope:{ctx:L}}});let Se=L[0]==="pt"&&du();return Ka=new Bs({}),Ra=new A({props:{code:`from transformers import pipeline

mask_filler = pipeline(
    "fill-mask", model="huggingface-course/distilbert-base-uncased-finetuned-imdb"
)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline

mask_filler = pipeline(
    <span class="hljs-string">&quot;fill-mask&quot;</span>, model=<span class="hljs-string">&quot;huggingface-course/distilbert-base-uncased-finetuned-imdb&quot;</span>
)`}}),Na=new A({props:{code:`preds = mask_filler(text)

for pred in preds:
    print(f">>> {pred['sequence']}")`,highlighted:`preds = mask_filler(text)

<span class="hljs-keyword">for</span> pred <span class="hljs-keyword">in</span> preds:
    <span class="hljs-built_in">print</span>(<span class="hljs-string">f&quot;&gt;&gt;&gt; <span class="hljs-subst">{pred[<span class="hljs-string">&#x27;sequence&#x27;</span>]}</span>&quot;</span>)`}}),Fa=new A({props:{code:`'>>> this is a great movie.'
'>>> this is a great film.'
'>>> this is a great story.'
'>>> this is a great movies.'
'>>> this is a great character.'`,highlighted:`<span class="hljs-string">&#x27;&gt;&gt;&gt; this is a great movie.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; this is a great film.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; this is a great story.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; this is a great movies.&#x27;</span>
<span class="hljs-string">&#x27;&gt;&gt;&gt; this is a great character.&#x27;</span>`}}),Wa=new Zi({props:{id:"0Oxphw4Q9fo"}}),Cs=new Ws({props:{$$slots:{default:[Wu]},$$scope:{ctx:L}}}),{c(){i=r("meta"),f=u(),$(d.$$.fragment),y=u(),z=r("h1"),k=r("a"),b=r("span"),$(q.$$.fragment),g=u(),D=r("span"),K=a("Fine-tuning a masked language model"),C=u(),N.c(),F=u(),W=r("p"),H=a("For many NLP applications involving Transformer models, you can simply take a pretrained model from the Hugging Face Hub and fine-tune it directly on your data for the task at hand. Provided that the corpus used for pretraining is not too different from the corpus used for fine-tuning, transfer learning will usually produce good results."),B=u(),v=r("p"),R=a("However, there are a few cases where you\u2019ll want to first fine-tune the language models on your data, before training a task-specific head. For example, if your dataset contains legal contracts or scientific articles, a vanilla Transformer model like BERT will typically treat the domain-specific words in your corpus as rare tokens, and the resulting performance may be less than satisfactory. By fine-tuning the language model on in-domain data you can boost the performance of many downstream tasks, which means you usually only have to do this step once!"),U=u(),Y=r("p"),J=a("This process of fine-tuning a pretrained language model on in-domain data is usually called "),I=r("em"),je=a("domain adaptation"),de=a(". It was popularized in 2018 by "),ne=r("a"),G=a("ULMFiT"),fe=a(", which was one of the first neural architectures (based on LSTMs) to make transfer learning really work for NLP. An example of domain adaptation with ULMFiT is shown in the image below; in this section we\u2019ll do something similar, but with a Transformer instead of an LSTM!"),xe=u(),oe=r("div"),Z=r("img"),we=u(),te=r("img"),ke=u(),se=r("p"),Ge=a("By the end of this section you\u2019ll have a "),ie=r("a"),Ee=a("masked language model"),Fe=a(" on the Hub that can autocomplete sentences as shown below:"),re=u(),ue=r("div"),be=r("div"),pe=u(),_e=r("p"),Te=a("Let\u2019s dive in!"),ae=u(),$(ye.$$.fragment),me=u(),$(ve.$$.fragment),Le=u(),ee=r("h2"),S=r("a"),V=r("span"),$(ze.$$.fragment),M=u(),X=r("span"),ot=a("Picking a pretrained model for masked language modeling"),Ae=u(),ge=r("p"),he=a("To get started, let\u2019s pick a suitable pretrained model for masked language modeling. As shown in the following screenshot, you can find a list of candidates by applying the \u201CFill-Mask\u201D filter on the "),Q=r("a"),nt=a("Hugging Face Hub"),Ke=a(":"),Je=u(),Re=r("div"),Ce=r("img"),qe=u(),le=r("p"),Ct=a("Although the BERT and RoBERTa family of models are the most downloaded, we\u2019ll use a model called "),De=r("a"),Qe=a("DistilBERT"),gt=a(`
that can be trained much faster with little to no loss in downstream performance. This model was trained using a special technique called `),Xe=r("a"),Zt=r("em"),rs=a("knowledge distillation"),wt=a(", where a large \u201Cteacher model\u201D like BERT is used to guide the training of a \u201Cstudent model\u201D that has far fewer parameters. An explanation of the details of knowledge distillation would take us too far afield in this section, but if you\u2019re interested you can read all about it in "),it=r("a"),lt=r("em"),ps=a("Natural Language Processing with Transformers"),rt=a(" (colloquially known as the Transformers textbook)."),hs=u(),Ue.c(),Ot=u(),kt=r("p"),bt=a("With around 67 million parameters, DistilBERT is approximately two times smaller than the BERT base model, which roughly translates into a two-fold speedup in training \u2014 nice! Let\u2019s now see what kinds of tokens this model predicts are the most likely completions of a small sample of text:"),es=u(),$(Ze.$$.fragment),ds=u(),Me=r("p"),yt=a("As humans, we can imagine many possibilities for the "),Lt=r("code"),vt=a("[MASK]"),cs=a(" token, such as \u201Cday\u201D, \u201Cride\u201D, or \u201Cpainting\u201D. For pretrained models, the predictions depend on the corpus the model was trained on, since it learns to pick up the statistical patterns present in the data. Like BERT, DistilBERT was pretrained on the "),et=r("a"),Hs=a("English Wikipedia"),us=a(" and "),c=r("a"),O=a("BookCorpus"),ms=a(" datasets, so we expect the predictions for "),fs=r("code"),eo=a("[MASK]"),to=a(" to reflect these domains. To predict the mask we need DistilBERT\u2019s tokenizer to produce the inputs for the model, so let\u2019s download that from the Hub as well:"),$t=u(),$(Kt.$$.fragment),Is=u(),Ye=r("p"),so=a("With a tokenizer and a model, we can now pass our text example to the model, extract the logits, and print out the top 5 candidates:"),Gs=u(),We.c(),ts=u(),$(pt.$$.fragment),Us=u(),ss=r("p"),_s=a("We can see from the outputs that the model\u2019s predictions refer to everyday terms, which is perhaps not surprising given the foundation of English Wikipedia. Let\u2019s see how we can change this domain to something a bit more niche \u2014 highly polarized movie reviews!"),Ys=u(),st=r("h2"),jt=r("a"),gs=r("span"),$(Rt.$$.fragment),ws=u(),ks=r("span"),ao=a("The dataset"),Vs=u(),Nt=r("p"),er=a("To showcase domain adaptation, we\u2019ll use the famous "),Js=r("a"),tr=a("Large Movie Review Dataset"),sr=a(" (or IMDb for short), which is a corpus of movie reviews that is often used to benchmark sentiment analysis models. By fine-tuning DistilBERT on this corpus, we expect the language model will adapt its vocabulary from the factual data of Wikipedia that it was pretrained on to the more subjective elements of movie reviews. We can get the data from the Hugging Face Hub with the "),Vo=r("code"),ar=a("load_dataset()"),or=a(" function from \u{1F917} Datasets:"),nl=u(),$(Qs.$$.fragment),ll=u(),$(Xs.$$.fragment),il=u(),Be=r("p"),nr=a("We can see that the "),Jo=r("code"),lr=a("train"),ir=a(" and "),Qo=r("code"),rr=a("test"),pr=a(" splits each consist of 25,000 reviews, while there is an unlabeled split called "),Xo=r("code"),hr=a("unsupervised"),dr=a(" that contains 50,000 reviews. Let\u2019s take a look at a few samples to get an idea of what kind of text we\u2019re dealing with. As we\u2019ve done in previous chapters of the course, we\u2019ll chain the "),Zo=r("code"),cr=a("Dataset.shuffle()"),ur=a(" and "),en=r("code"),mr=a("Dataset.select()"),fr=a(" functions to create a random sample:"),rl=u(),$(Zs.$$.fragment),pl=u(),$(ea.$$.fragment),hl=u(),Ft=r("p"),_r=a("Yep, these are certainly movie reviews, and if you\u2019re old enough you may even understand the comment in the last review about owning a VHS version \u{1F61C}! Although we won\u2019t need the labels for language modeling, we can already see that a "),tn=r("code"),gr=a("0"),wr=a(" denotes a negative review, while a "),sn=r("code"),kr=a("1"),br=a(" corresponds to a positive one."),dl=u(),$(bs.$$.fragment),cl=u(),ys=r("p"),yr=a("Now that we\u2019ve had a quick look at the data, let\u2019s dive into preparing it for masked language modeling. As we\u2019ll see, there are some additional steps that one needs to take compared to the sequence classification tasks we saw in "),oo=r("a"),vr=a("Chapter 3"),$r=a(". Let\u2019s go!"),ul=u(),as=r("h2"),vs=r("a"),an=r("span"),$(ta.$$.fragment),jr=u(),on=r("span"),xr=a("Preprocessing the data"),ml=u(),$(sa.$$.fragment),fl=u(),no=r("p"),Er=a("For both auto-regressive and masked language modeling, a common preprocessing step is to concatenate all the examples and then split the whole corpus into chunks of equal size. This is quite different from our usual approach, where we simply tokenize individual examples. Why concatenate everything together? The reason is that individual examples might get truncated if they\u2019re too long, and that would result in losing information that might be useful for the language modeling task!"),_l=u(),He=r("p"),Tr=a("So to get started, we\u2019ll first tokenize our corpus as usual, but "),nn=r("em"),zr=a("without"),Ar=a(" setting the "),ln=r("code"),qr=a("truncation=True"),Dr=a(" option in our tokenizer. We\u2019ll also grab the word IDs if they are available ((which they will be if we\u2019re using a fast tokenizer, as described in "),lo=r("a"),Mr=a("Chapter 6"),Pr=a("), as we will need them later on to do whole word masking. We\u2019ll wrap this in a simple function, and while we\u2019re at it we\u2019ll remove the "),rn=r("code"),Sr=a("text"),Cr=a(" and "),pn=r("code"),Or=a("label"),Lr=a(" columns since we don\u2019t need them any longer:"),gl=u(),$(aa.$$.fragment),wl=u(),$(oa.$$.fragment),kl=u(),ht=r("p"),Kr=a("Since DistilBERT is a BERT-like model, we can see that the encoded texts consist of the "),hn=r("code"),Rr=a("input_ids"),Nr=a(" and "),dn=r("code"),Fr=a("attention_mask"),Wr=a(" that we\u2019ve seen in other chapters, as well as the "),cn=r("code"),Br=a("word_ids"),Hr=a(" we added."),bl=u(),$s=r("p"),Ir=a("Now that we\u2019ve tokenized our movie reviews, the next step is to group them all together and split the result into chunks. But how big should these chunks be? This will ultimately be determined by the amount of GPU memory that you have available, but a good starting point is to see what the model\u2019s maximum context size is. This can be inferred by inspecting the "),un=r("code"),Gr=a("model_max_length"),Ur=a(" attribute of the tokenizer:"),yl=u(),$(na.$$.fragment),vl=u(),$(la.$$.fragment),$l=u(),js=r("p"),Yr=a("This value is derived from the "),mn=r("em"),Vr=a("tokenizer_config.json"),Jr=a(" file associated with a checkpoint; in this case we can see that the context size is 512 tokens, just like with BERT."),jl=u(),$(xs.$$.fragment),xl=u(),io=r("p"),Qr=a("So, in order to run our experiments on GPUs like those found on Google Colab, we\u2019ll pick something a bit smaller that can fit in memory:"),El=u(),$(ia.$$.fragment),Tl=u(),$(Es.$$.fragment),zl=u(),ro=r("p"),Xr=a("Now comes the fun part. To show how the concatenation works, let\u2019s take a few reviews from our tokenized training set and print out the number of tokens per review:"),Al=u(),$(ra.$$.fragment),ql=u(),$(pa.$$.fragment),Dl=u(),po=r("p"),Zr=a("We can then concatenate all these examples with a simple dictionary comprehension, as follows:"),Ml=u(),$(ha.$$.fragment),Pl=u(),$(da.$$.fragment),Sl=u(),Wt=r("p"),ep=a("Great, the total length checks out \u2014 so now let\u2019s split the concatenated reviews into chunks of the size given by "),fn=r("code"),tp=a("block_size"),sp=a(". To do so, we iterate over the features in "),_n=r("code"),ap=a("concatenated_examples"),op=a(" and use a list comprehension to create slices of each feature. The result is a dictionary of chunks for each feature:"),Cl=u(),$(ca.$$.fragment),Ol=u(),$(ua.$$.fragment),Ll=u(),ho=r("p"),np=a("As you can see in this example, the last chunk will generally be smaller than the maximum chunk size. There are two main strategies for dealing with this:"),Kl=u(),Ts=r("ul"),ma=r("li"),lp=a("Drop the last chunk if it\u2019s smaller than "),gn=r("code"),ip=a("chunk_size"),rp=a("."),pp=u(),fa=r("li"),hp=a("Pad the last chunk until its length equals "),wn=r("code"),dp=a("chunk_size"),cp=a("."),Rl=u(),co=r("p"),up=a("We\u2019ll take the first approach here, so let\u2019s wrap all of the above logic in a single function that we can apply to our tokenized datasets:"),Nl=u(),$(_a.$$.fragment),Fl=u(),at=r("p"),mp=a("Note that in the last step of "),kn=r("code"),fp=a("group_texts()"),_p=a(" we create a new "),bn=r("code"),gp=a("labels"),wp=a(" column which is a copy of the "),yn=r("code"),kp=a("input_ids"),bp=a(" one. As we\u2019ll see shortly, that\u2019s because in masked language modeling the objective is to predict randomly masked tokens in the input batch, and by creating a "),vn=r("code"),yp=a("labels"),vp=a(" column we provide the ground truth for our language model to learn from."),Wl=u(),Bt=r("p"),$p=a("Let\u2019s now apply "),$n=r("code"),jp=a("group_texts()"),xp=a(" to our tokenized datasets using our trusty "),jn=r("code"),Ep=a("Dataset.map()"),Tp=a(" function:"),Bl=u(),$(ga.$$.fragment),Hl=u(),$(wa.$$.fragment),Il=u(),Ie=r("p"),zp=a("You can see that grouping and then chunking the texts has produced many more examples than our original 25,000 for the "),xn=r("code"),Ap=a("train"),qp=a(" and "),En=r("code"),Dp=a("test"),Mp=a(" splits. That\u2019s because we now have examples involving "),Tn=r("em"),Pp=a("contiguous tokens"),Sp=a(" that span across multiple examples from the original corpus. You can see this explicitly by looking for the special "),zn=r("code"),Cp=a("[SEP]"),Op=a(" and "),An=r("code"),Lp=a("[CLS]"),Kp=a(" tokens in one of the chunks:"),Gl=u(),$(ka.$$.fragment),Ul=u(),$(ba.$$.fragment),Yl=u(),uo=r("p"),Rp=a("In this example you can see two overlapping movie reviews, one about a high school movie and the other about homelessness. Let\u2019s also check out what the labels look like for masked language modeling:"),Vl=u(),$(ya.$$.fragment),Jl=u(),$(va.$$.fragment),Ql=u(),dt=r("p"),Np=a("As expected from our "),qn=r("code"),Fp=a("group_texts()"),Wp=a(" function above, this looks identical to the decoded "),Dn=r("code"),Bp=a("input_ids"),Hp=a(" \u2014 but then how can our model possibly learn anything? We\u2019re missing a key step: inserting "),Mn=r("code"),Ip=a("[MASK]"),Gp=a(" tokens at random positions in the inputs! Let\u2019s see how we can do this on the fly during fine-tuning using a special data collator."),Xl=u(),os=r("h2"),zs=r("a"),Pn=r("span"),$($a.$$.fragment),Up=u(),ja=r("span"),Yp=a("Fine-tuning DistilBERT with the "),Sn=r("code"),Vp=a("Trainer"),Jp=a(" API"),Zl=u(),ct=r("p"),Qp=a("Fine-tuning a masked language model is almost identical to fine-tuning a sequence classification model, like we did in "),mo=r("a"),Xp=a("Chapter 3"),Zp=a(". The only difference is that we need a special data collator that can randomly mask some of the tokens in each batch of texts. Fortunately, \u{1F917} Transformers comes prepared with a dedicated "),Cn=r("code"),eh=a("DataCollatorForLanguageModeling"),th=a(" for just this task. We just have to pass it the tokenizer and an "),On=r("code"),sh=a("mlm_probability"),ah=a(" argument that specifies what fraction of the tokens to mask. We\u2019ll pick 15%, which is the amount used for BERT and a common choice in the literature:"),ei=u(),$(xa.$$.fragment),ti=u(),ut=r("p"),oh=a("To see how the random masking works, let\u2019s feed a few examples to the data collator. Since it expects a list of "),Ln=r("code"),nh=a("dict"),lh=a("s, where each "),Kn=r("code"),ih=a("dict"),rh=a(" represents a single chunk of contiguous text, we first iterate over the dataset before feeding the batch to the collator. We remove the "),Rn=r("code"),ph=a('"word_ids"'),hh=a(" key for this data collator as it does not expect it:"),si=u(),$(Ea.$$.fragment),ai=u(),$(Ta.$$.fragment),oi=u(),Ht=r("p"),dh=a("Nice, it worked! We can see that the "),Nn=r("code"),ch=a("[MASK]"),uh=a(" token has been randomly inserted at various locations in our text. These will be the tokens which our model will have to predict during training \u2014 and the beauty of the data collator is that it will randomize the "),Fn=r("code"),mh=a("[MASK]"),fh=a(" insertion with every batch!"),ni=u(),$(As.$$.fragment),li=u(),Ve&&Ve.c(),fo=u(),It=r("p"),_h=a("When training models for masked language modeling, one technique that can be used is to mask whole words together, not just individual tokens. This approach is called "),Wn=r("em"),gh=a("whole word masking"),wh=a(". If we want to use whole word masking, we will need to build a data collator ourselves. A data collator is just a function that takes a list of samples and converts them into a batch, so let\u2019s do this now! We\u2019ll use the word IDs computed earlier to make a map between word indices and the corresponding tokens, then randomly decide which words to mask and apply that mask on the inputs. Note that the labels are all "),Bn=r("code"),kh=a("-100"),bh=a(" except for the ones corresponding to mask words."),ii=u(),Et.c(),_o=u(),go=r("p"),yh=a("Next, we can try it on the same samples as before:"),ri=u(),$(za.$$.fragment),pi=u(),$(Aa.$$.fragment),hi=u(),$(qs.$$.fragment),di=u(),Gt=r("p"),vh=a("Now that we have two data collators, the rest of the fine-tuning steps are standard. Training can take a while on Google Colab if you\u2019re not lucky enough to score a mythical P100 GPU \u{1F62D}, so we\u2019ll first downsample the size of the training set to a few thousand examples. Don\u2019t worry, we\u2019ll still get a pretty decent language model! A quick way to downsample a dataset in \u{1F917} Datasets is via the "),Hn=r("code"),$h=a("Dataset.train_test_split()"),jh=a(" function that we saw in "),wo=r("a"),xh=a("Chapter 5"),Eh=a(":"),ci=u(),$(qa.$$.fragment),ui=u(),$(Da.$$.fragment),mi=u(),Ut=r("p"),Th=a("This has automatically created new "),In=r("code"),zh=a("train"),Ah=a(" and "),Gn=r("code"),qh=a("test"),Dh=a(" splits, with the training set size set to 10,000 examples and the validation set to 10% of that \u2014 feel free to increase this if you have a beefy GPU! The next thing we need to do is log in to the Hugging Face Hub. If you\u2019re running this code in a notebook, you can do so with the following utility function:"),fi=u(),$(Ma.$$.fragment),_i=u(),ko=r("p"),Mh=a("which will display a widget where you can enter your credentials. Alternatively, you can run:"),gi=u(),$(Pa.$$.fragment),wi=u(),bo=r("p"),Ph=a("in your favorite terminal and log in there."),ki=u(),zt.c(),yo=u(),ns=r("h3"),Ds=r("a"),Un=r("span"),$(Sa.$$.fragment),Sh=u(),Yn=r("span"),Ch=a("Perplexity for language models"),bi=u(),$(Ca.$$.fragment),yi=u(),vo=r("p"),Oh=a("Unlike other tasks like text classification or question answering where we\u2019re given a labeled corpus to train on, with language modeling we don\u2019t have any explicit labels. So how do we determine what makes a good language model? Like with the autocorrect feature in your phone, a good language model is one that assigns high probabilities to sentences that are grammatically correct, and low probabilities to nonsense sentences. To give you a better idea of what this looks like, you can find whole sets of \u201Cautocorrect fails\u201D online, where the model in a person\u2019s phone has produced some rather funny (and often inappropriate) completions!"),vi=u(),qt.c(),$o=u(),$(Oa.$$.fragment),$i=u(),jo=r("p"),Lh=a("A lower perplexity score means a better language model, and we can see here that our starting model has a somewhat large value. Let\u2019s see if we can lower it by fine-tuning! To do that, we first run the training loop:"),ji=u(),Mt.c(),xo=u(),Eo=r("p"),Kh=a("and then compute the resulting perplexity on the test set as before:"),xi=u(),St.c(),To=u(),$(La.$$.fragment),Ei=u(),zo=r("p"),Rh=a("Nice \u2014 this is quite a reduction in perplexity, which tells us the model has learned something about the domain of movie reviews!"),Ti=u(),Pe&&Pe.c(),Ao=u(),$(Ms.$$.fragment),zi=u(),Se&&Se.c(),qo=u(),ls=r("h2"),Ps=r("a"),Vn=r("span"),$(Ka.$$.fragment),Nh=u(),Jn=r("span"),Fh=a("Using our fine-tuned model"),Ai=u(),Yt=r("p"),Wh=a("You can interact with your fine-tuned model either by using its widget on the Hub or locally with the "),Qn=r("code"),Bh=a("pipeline"),Hh=a(" from \u{1F917} Transformers. Let\u2019s use the latter to download our model using the "),Xn=r("code"),Ih=a("fill-mask"),Gh=a(" pipeline:"),qi=u(),$(Ra.$$.fragment),Di=u(),Do=r("p"),Uh=a("We can then feed the pipeline our sample text of \u201CThis is a great [MASK]\u201D and see what the top 5 predictions are:"),Mi=u(),$(Na.$$.fragment),Pi=u(),$(Fa.$$.fragment),Si=u(),Mo=r("p"),Yh=a("Neat \u2014 our model has clearly adapted its weights to predict words that are more strongly associated with movies!"),Ci=u(),$(Wa.$$.fragment),Oi=u(),Ss=r("p"),Vh=a("This wraps up our first experiment with training a language model. In "),Po=r("a"),Jh=a("section 6"),Qh=a(" you\u2019ll learn how to train an auto-regressive model like GPT-2 from scratch; head over there if you\u2019d like to see how you can pretrain your very own Transformer model!"),Li=u(),$(Cs.$$.fragment),this.h()},l(e){const n=_u('[data-svelte="svelte-1phssyn"]',document.head);i=p(n,"META",{name:!0,content:!0}),n.forEach(s),f=m(e),j(d.$$.fragment,e),y=m(e),z=p(e,"H1",{class:!0});var Qa=h(z);k=p(Qa,"A",{id:!0,class:!0,href:!0});var So=h(k);b=p(So,"SPAN",{});var Zn=h(b);j(q.$$.fragment,Zn),Zn.forEach(s),So.forEach(s),g=m(Qa),D=p(Qa,"SPAN",{});var Co=h(D);K=o(Co,"Fine-tuning a masked language model"),Co.forEach(s),Qa.forEach(s),C=m(e),N.l(e),F=m(e),W=p(e,"P",{});var Oo=h(W);H=o(Oo,"For many NLP applications involving Transformer models, you can simply take a pretrained model from the Hugging Face Hub and fine-tune it directly on your data for the task at hand. Provided that the corpus used for pretraining is not too different from the corpus used for fine-tuning, transfer learning will usually produce good results."),Oo.forEach(s),B=m(e),v=p(e,"P",{});var el=h(v);R=o(el,"However, there are a few cases where you\u2019ll want to first fine-tune the language models on your data, before training a task-specific head. For example, if your dataset contains legal contracts or scientific articles, a vanilla Transformer model like BERT will typically treat the domain-specific words in your corpus as rare tokens, and the resulting performance may be less than satisfactory. By fine-tuning the language model on in-domain data you can boost the performance of many downstream tasks, which means you usually only have to do this step once!"),el.forEach(s),U=m(e),Y=p(e,"P",{});var is=h(Y);J=o(is,"This process of fine-tuning a pretrained language model on in-domain data is usually called "),I=p(is,"EM",{});var tl=h(I);je=o(tl,"domain adaptation"),tl.forEach(s),de=o(is,". It was popularized in 2018 by "),ne=p(is,"A",{href:!0,rel:!0});var sl=h(ne);G=o(sl,"ULMFiT"),sl.forEach(s),fe=o(is,", which was one of the first neural architectures (based on LSTMs) to make transfer learning really work for NLP. An example of domain adaptation with ULMFiT is shown in the image below; in this section we\u2019ll do something similar, but with a Transformer instead of an LSTM!"),is.forEach(s),xe=m(e),oe=p(e,"DIV",{class:!0});var Os=h(oe);Z=p(Os,"IMG",{class:!0,src:!0,alt:!0}),we=m(Os),te=p(Os,"IMG",{class:!0,src:!0,alt:!0}),Os.forEach(s),ke=m(e),se=p(e,"P",{});var Xa=h(se);Ge=o(Xa,"By the end of this section you\u2019ll have a "),ie=p(Xa,"A",{href:!0,rel:!0});var Lo=h(ie);Ee=o(Lo,"masked language model"),Lo.forEach(s),Fe=o(Xa," on the Hub that can autocomplete sentences as shown below:"),Xa.forEach(s),re=m(e),ue=p(e,"DIV",{class:!0});var Ko=h(ue);be=p(Ko,"DIV",{class:!0});var al=h(be);al.forEach(s),Ko.forEach(s),pe=m(e),_e=p(e,"P",{});var Ro=h(_e);Te=o(Ro,"Let\u2019s dive in!"),Ro.forEach(s),ae=m(e),j(ye.$$.fragment,e),me=m(e),j(ve.$$.fragment,e),Le=m(e),ee=p(e,"H2",{class:!0});var Za=h(ee);S=p(Za,"A",{id:!0,class:!0,href:!0});var ol=h(S);V=p(ol,"SPAN",{});var fd=h(V);j(ze.$$.fragment,fd),fd.forEach(s),ol.forEach(s),M=m(Za),X=p(Za,"SPAN",{});var _d=h(X);ot=o(_d,"Picking a pretrained model for masked language modeling"),_d.forEach(s),Za.forEach(s),Ae=m(e),ge=p(e,"P",{});var Ri=h(ge);he=o(Ri,"To get started, let\u2019s pick a suitable pretrained model for masked language modeling. As shown in the following screenshot, you can find a list of candidates by applying the \u201CFill-Mask\u201D filter on the "),Q=p(Ri,"A",{href:!0,rel:!0});var gd=h(Q);nt=o(gd,"Hugging Face Hub"),gd.forEach(s),Ke=o(Ri,":"),Ri.forEach(s),Je=m(e),Re=p(e,"DIV",{class:!0});var wd=h(Re);Ce=p(wd,"IMG",{src:!0,alt:!0,width:!0}),wd.forEach(s),qe=m(e),le=p(e,"P",{});var Ls=h(le);Ct=o(Ls,"Although the BERT and RoBERTa family of models are the most downloaded, we\u2019ll use a model called "),De=p(Ls,"A",{href:!0,rel:!0});var kd=h(De);Qe=o(kd,"DistilBERT"),kd.forEach(s),gt=o(Ls,`
that can be trained much faster with little to no loss in downstream performance. This model was trained using a special technique called `),Xe=p(Ls,"A",{href:!0,rel:!0});var bd=h(Xe);Zt=p(bd,"EM",{});var yd=h(Zt);rs=o(yd,"knowledge distillation"),yd.forEach(s),bd.forEach(s),wt=o(Ls,", where a large \u201Cteacher model\u201D like BERT is used to guide the training of a \u201Cstudent model\u201D that has far fewer parameters. An explanation of the details of knowledge distillation would take us too far afield in this section, but if you\u2019re interested you can read all about it in "),it=p(Ls,"A",{href:!0,rel:!0});var vd=h(it);lt=p(vd,"EM",{});var $d=h(lt);ps=o($d,"Natural Language Processing with Transformers"),$d.forEach(s),vd.forEach(s),rt=o(Ls," (colloquially known as the Transformers textbook)."),Ls.forEach(s),hs=m(e),Ue.l(e),Ot=m(e),kt=p(e,"P",{});var jd=h(kt);bt=o(jd,"With around 67 million parameters, DistilBERT is approximately two times smaller than the BERT base model, which roughly translates into a two-fold speedup in training \u2014 nice! Let\u2019s now see what kinds of tokens this model predicts are the most likely completions of a small sample of text:"),jd.forEach(s),es=m(e),j(Ze.$$.fragment,e),ds=m(e),Me=p(e,"P",{});var Vt=h(Me);yt=o(Vt,"As humans, we can imagine many possibilities for the "),Lt=p(Vt,"CODE",{});var xd=h(Lt);vt=o(xd,"[MASK]"),xd.forEach(s),cs=o(Vt," token, such as \u201Cday\u201D, \u201Cride\u201D, or \u201Cpainting\u201D. For pretrained models, the predictions depend on the corpus the model was trained on, since it learns to pick up the statistical patterns present in the data. Like BERT, DistilBERT was pretrained on the "),et=p(Vt,"A",{href:!0,rel:!0});var Ed=h(et);Hs=o(Ed,"English Wikipedia"),Ed.forEach(s),us=o(Vt," and "),c=p(Vt,"A",{href:!0,rel:!0});var Td=h(c);O=o(Td,"BookCorpus"),Td.forEach(s),ms=o(Vt," datasets, so we expect the predictions for "),fs=p(Vt,"CODE",{});var zd=h(fs);eo=o(zd,"[MASK]"),zd.forEach(s),to=o(Vt," to reflect these domains. To predict the mask we need DistilBERT\u2019s tokenizer to produce the inputs for the model, so let\u2019s download that from the Hub as well:"),Vt.forEach(s),$t=m(e),j(Kt.$$.fragment,e),Is=m(e),Ye=p(e,"P",{});var Ad=h(Ye);so=o(Ad,"With a tokenizer and a model, we can now pass our text example to the model, extract the logits, and print out the top 5 candidates:"),Ad.forEach(s),Gs=m(e),We.l(e),ts=m(e),j(pt.$$.fragment,e),Us=m(e),ss=p(e,"P",{});var qd=h(ss);_s=o(qd,"We can see from the outputs that the model\u2019s predictions refer to everyday terms, which is perhaps not surprising given the foundation of English Wikipedia. Let\u2019s see how we can change this domain to something a bit more niche \u2014 highly polarized movie reviews!"),qd.forEach(s),Ys=m(e),st=p(e,"H2",{class:!0});var Ni=h(st);jt=p(Ni,"A",{id:!0,class:!0,href:!0});var Dd=h(jt);gs=p(Dd,"SPAN",{});var Md=h(gs);j(Rt.$$.fragment,Md),Md.forEach(s),Dd.forEach(s),ws=m(Ni),ks=p(Ni,"SPAN",{});var Pd=h(ks);ao=o(Pd,"The dataset"),Pd.forEach(s),Ni.forEach(s),Vs=m(e),Nt=p(e,"P",{});var No=h(Nt);er=o(No,"To showcase domain adaptation, we\u2019ll use the famous "),Js=p(No,"A",{href:!0,rel:!0});var Sd=h(Js);tr=o(Sd,"Large Movie Review Dataset"),Sd.forEach(s),sr=o(No," (or IMDb for short), which is a corpus of movie reviews that is often used to benchmark sentiment analysis models. By fine-tuning DistilBERT on this corpus, we expect the language model will adapt its vocabulary from the factual data of Wikipedia that it was pretrained on to the more subjective elements of movie reviews. We can get the data from the Hugging Face Hub with the "),Vo=p(No,"CODE",{});var Cd=h(Vo);ar=o(Cd,"load_dataset()"),Cd.forEach(s),or=o(No," function from \u{1F917} Datasets:"),No.forEach(s),nl=m(e),j(Qs.$$.fragment,e),ll=m(e),j(Xs.$$.fragment,e),il=m(e),Be=p(e,"P",{});var mt=h(Be);nr=o(mt,"We can see that the "),Jo=p(mt,"CODE",{});var Od=h(Jo);lr=o(Od,"train"),Od.forEach(s),ir=o(mt," and "),Qo=p(mt,"CODE",{});var Ld=h(Qo);rr=o(Ld,"test"),Ld.forEach(s),pr=o(mt," splits each consist of 25,000 reviews, while there is an unlabeled split called "),Xo=p(mt,"CODE",{});var Kd=h(Xo);hr=o(Kd,"unsupervised"),Kd.forEach(s),dr=o(mt," that contains 50,000 reviews. Let\u2019s take a look at a few samples to get an idea of what kind of text we\u2019re dealing with. As we\u2019ve done in previous chapters of the course, we\u2019ll chain the "),Zo=p(mt,"CODE",{});var Rd=h(Zo);cr=o(Rd,"Dataset.shuffle()"),Rd.forEach(s),ur=o(mt," and "),en=p(mt,"CODE",{});var Nd=h(en);mr=o(Nd,"Dataset.select()"),Nd.forEach(s),fr=o(mt," functions to create a random sample:"),mt.forEach(s),rl=m(e),j(Zs.$$.fragment,e),pl=m(e),j(ea.$$.fragment,e),hl=m(e),Ft=p(e,"P",{});var Fo=h(Ft);_r=o(Fo,"Yep, these are certainly movie reviews, and if you\u2019re old enough you may even understand the comment in the last review about owning a VHS version \u{1F61C}! Although we won\u2019t need the labels for language modeling, we can already see that a "),tn=p(Fo,"CODE",{});var Fd=h(tn);gr=o(Fd,"0"),Fd.forEach(s),wr=o(Fo," denotes a negative review, while a "),sn=p(Fo,"CODE",{});var Wd=h(sn);kr=o(Wd,"1"),Wd.forEach(s),br=o(Fo," corresponds to a positive one."),Fo.forEach(s),dl=m(e),j(bs.$$.fragment,e),cl=m(e),ys=p(e,"P",{});var Fi=h(ys);yr=o(Fi,"Now that we\u2019ve had a quick look at the data, let\u2019s dive into preparing it for masked language modeling. As we\u2019ll see, there are some additional steps that one needs to take compared to the sequence classification tasks we saw in "),oo=p(Fi,"A",{href:!0});var Bd=h(oo);vr=o(Bd,"Chapter 3"),Bd.forEach(s),$r=o(Fi,". Let\u2019s go!"),Fi.forEach(s),ul=m(e),as=p(e,"H2",{class:!0});var Wi=h(as);vs=p(Wi,"A",{id:!0,class:!0,href:!0});var Hd=h(vs);an=p(Hd,"SPAN",{});var Id=h(an);j(ta.$$.fragment,Id),Id.forEach(s),Hd.forEach(s),jr=m(Wi),on=p(Wi,"SPAN",{});var Gd=h(on);xr=o(Gd,"Preprocessing the data"),Gd.forEach(s),Wi.forEach(s),ml=m(e),j(sa.$$.fragment,e),fl=m(e),no=p(e,"P",{});var Ud=h(no);Er=o(Ud,"For both auto-regressive and masked language modeling, a common preprocessing step is to concatenate all the examples and then split the whole corpus into chunks of equal size. This is quite different from our usual approach, where we simply tokenize individual examples. Why concatenate everything together? The reason is that individual examples might get truncated if they\u2019re too long, and that would result in losing information that might be useful for the language modeling task!"),Ud.forEach(s),_l=m(e),He=p(e,"P",{});var ft=h(He);Tr=o(ft,"So to get started, we\u2019ll first tokenize our corpus as usual, but "),nn=p(ft,"EM",{});var Yd=h(nn);zr=o(Yd,"without"),Yd.forEach(s),Ar=o(ft," setting the "),ln=p(ft,"CODE",{});var Vd=h(ln);qr=o(Vd,"truncation=True"),Vd.forEach(s),Dr=o(ft," option in our tokenizer. We\u2019ll also grab the word IDs if they are available ((which they will be if we\u2019re using a fast tokenizer, as described in "),lo=p(ft,"A",{href:!0});var Jd=h(lo);Mr=o(Jd,"Chapter 6"),Jd.forEach(s),Pr=o(ft,"), as we will need them later on to do whole word masking. We\u2019ll wrap this in a simple function, and while we\u2019re at it we\u2019ll remove the "),rn=p(ft,"CODE",{});var Qd=h(rn);Sr=o(Qd,"text"),Qd.forEach(s),Cr=o(ft," and "),pn=p(ft,"CODE",{});var Xd=h(pn);Or=o(Xd,"label"),Xd.forEach(s),Lr=o(ft," columns since we don\u2019t need them any longer:"),ft.forEach(s),gl=m(e),j(aa.$$.fragment,e),wl=m(e),j(oa.$$.fragment,e),kl=m(e),ht=p(e,"P",{});var Ks=h(ht);Kr=o(Ks,"Since DistilBERT is a BERT-like model, we can see that the encoded texts consist of the "),hn=p(Ks,"CODE",{});var Zd=h(hn);Rr=o(Zd,"input_ids"),Zd.forEach(s),Nr=o(Ks," and "),dn=p(Ks,"CODE",{});var ec=h(dn);Fr=o(ec,"attention_mask"),ec.forEach(s),Wr=o(Ks," that we\u2019ve seen in other chapters, as well as the "),cn=p(Ks,"CODE",{});var tc=h(cn);Br=o(tc,"word_ids"),tc.forEach(s),Hr=o(Ks," we added."),Ks.forEach(s),bl=m(e),$s=p(e,"P",{});var Bi=h($s);Ir=o(Bi,"Now that we\u2019ve tokenized our movie reviews, the next step is to group them all together and split the result into chunks. But how big should these chunks be? This will ultimately be determined by the amount of GPU memory that you have available, but a good starting point is to see what the model\u2019s maximum context size is. This can be inferred by inspecting the "),un=p(Bi,"CODE",{});var sc=h(un);Gr=o(sc,"model_max_length"),sc.forEach(s),Ur=o(Bi," attribute of the tokenizer:"),Bi.forEach(s),yl=m(e),j(na.$$.fragment,e),vl=m(e),j(la.$$.fragment,e),$l=m(e),js=p(e,"P",{});var Hi=h(js);Yr=o(Hi,"This value is derived from the "),mn=p(Hi,"EM",{});var ac=h(mn);Vr=o(ac,"tokenizer_config.json"),ac.forEach(s),Jr=o(Hi," file associated with a checkpoint; in this case we can see that the context size is 512 tokens, just like with BERT."),Hi.forEach(s),jl=m(e),j(xs.$$.fragment,e),xl=m(e),io=p(e,"P",{});var oc=h(io);Qr=o(oc,"So, in order to run our experiments on GPUs like those found on Google Colab, we\u2019ll pick something a bit smaller that can fit in memory:"),oc.forEach(s),El=m(e),j(ia.$$.fragment,e),Tl=m(e),j(Es.$$.fragment,e),zl=m(e),ro=p(e,"P",{});var nc=h(ro);Xr=o(nc,"Now comes the fun part. To show how the concatenation works, let\u2019s take a few reviews from our tokenized training set and print out the number of tokens per review:"),nc.forEach(s),Al=m(e),j(ra.$$.fragment,e),ql=m(e),j(pa.$$.fragment,e),Dl=m(e),po=p(e,"P",{});var lc=h(po);Zr=o(lc,"We can then concatenate all these examples with a simple dictionary comprehension, as follows:"),lc.forEach(s),Ml=m(e),j(ha.$$.fragment,e),Pl=m(e),j(da.$$.fragment,e),Sl=m(e),Wt=p(e,"P",{});var Wo=h(Wt);ep=o(Wo,"Great, the total length checks out \u2014 so now let\u2019s split the concatenated reviews into chunks of the size given by "),fn=p(Wo,"CODE",{});var ic=h(fn);tp=o(ic,"block_size"),ic.forEach(s),sp=o(Wo,". To do so, we iterate over the features in "),_n=p(Wo,"CODE",{});var rc=h(_n);ap=o(rc,"concatenated_examples"),rc.forEach(s),op=o(Wo," and use a list comprehension to create slices of each feature. The result is a dictionary of chunks for each feature:"),Wo.forEach(s),Cl=m(e),j(ca.$$.fragment,e),Ol=m(e),j(ua.$$.fragment,e),Ll=m(e),ho=p(e,"P",{});var pc=h(ho);np=o(pc,"As you can see in this example, the last chunk will generally be smaller than the maximum chunk size. There are two main strategies for dealing with this:"),pc.forEach(s),Kl=m(e),Ts=p(e,"UL",{});var Ii=h(Ts);ma=p(Ii,"LI",{});var Gi=h(ma);lp=o(Gi,"Drop the last chunk if it\u2019s smaller than "),gn=p(Gi,"CODE",{});var hc=h(gn);ip=o(hc,"chunk_size"),hc.forEach(s),rp=o(Gi,"."),Gi.forEach(s),pp=m(Ii),fa=p(Ii,"LI",{});var Ui=h(fa);hp=o(Ui,"Pad the last chunk until its length equals "),wn=p(Ui,"CODE",{});var dc=h(wn);dp=o(dc,"chunk_size"),dc.forEach(s),cp=o(Ui,"."),Ui.forEach(s),Ii.forEach(s),Rl=m(e),co=p(e,"P",{});var cc=h(co);up=o(cc,"We\u2019ll take the first approach here, so let\u2019s wrap all of the above logic in a single function that we can apply to our tokenized datasets:"),cc.forEach(s),Nl=m(e),j(_a.$$.fragment,e),Fl=m(e),at=p(e,"P",{});var Jt=h(at);mp=o(Jt,"Note that in the last step of "),kn=p(Jt,"CODE",{});var uc=h(kn);fp=o(uc,"group_texts()"),uc.forEach(s),_p=o(Jt," we create a new "),bn=p(Jt,"CODE",{});var mc=h(bn);gp=o(mc,"labels"),mc.forEach(s),wp=o(Jt," column which is a copy of the "),yn=p(Jt,"CODE",{});var fc=h(yn);kp=o(fc,"input_ids"),fc.forEach(s),bp=o(Jt," one. As we\u2019ll see shortly, that\u2019s because in masked language modeling the objective is to predict randomly masked tokens in the input batch, and by creating a "),vn=p(Jt,"CODE",{});var _c=h(vn);yp=o(_c,"labels"),_c.forEach(s),vp=o(Jt," column we provide the ground truth for our language model to learn from."),Jt.forEach(s),Wl=m(e),Bt=p(e,"P",{});var Bo=h(Bt);$p=o(Bo,"Let\u2019s now apply "),$n=p(Bo,"CODE",{});var gc=h($n);jp=o(gc,"group_texts()"),gc.forEach(s),xp=o(Bo," to our tokenized datasets using our trusty "),jn=p(Bo,"CODE",{});var wc=h(jn);Ep=o(wc,"Dataset.map()"),wc.forEach(s),Tp=o(Bo," function:"),Bo.forEach(s),Bl=m(e),j(ga.$$.fragment,e),Hl=m(e),j(wa.$$.fragment,e),Il=m(e),Ie=p(e,"P",{});var _t=h(Ie);zp=o(_t,"You can see that grouping and then chunking the texts has produced many more examples than our original 25,000 for the "),xn=p(_t,"CODE",{});var kc=h(xn);Ap=o(kc,"train"),kc.forEach(s),qp=o(_t," and "),En=p(_t,"CODE",{});var bc=h(En);Dp=o(bc,"test"),bc.forEach(s),Mp=o(_t," splits. That\u2019s because we now have examples involving "),Tn=p(_t,"EM",{});var yc=h(Tn);Pp=o(yc,"contiguous tokens"),yc.forEach(s),Sp=o(_t," that span across multiple examples from the original corpus. You can see this explicitly by looking for the special "),zn=p(_t,"CODE",{});var vc=h(zn);Cp=o(vc,"[SEP]"),vc.forEach(s),Op=o(_t," and "),An=p(_t,"CODE",{});var $c=h(An);Lp=o($c,"[CLS]"),$c.forEach(s),Kp=o(_t," tokens in one of the chunks:"),_t.forEach(s),Gl=m(e),j(ka.$$.fragment,e),Ul=m(e),j(ba.$$.fragment,e),Yl=m(e),uo=p(e,"P",{});var jc=h(uo);Rp=o(jc,"In this example you can see two overlapping movie reviews, one about a high school movie and the other about homelessness. Let\u2019s also check out what the labels look like for masked language modeling:"),jc.forEach(s),Vl=m(e),j(ya.$$.fragment,e),Jl=m(e),j(va.$$.fragment,e),Ql=m(e),dt=p(e,"P",{});var Rs=h(dt);Np=o(Rs,"As expected from our "),qn=p(Rs,"CODE",{});var xc=h(qn);Fp=o(xc,"group_texts()"),xc.forEach(s),Wp=o(Rs," function above, this looks identical to the decoded "),Dn=p(Rs,"CODE",{});var Ec=h(Dn);Bp=o(Ec,"input_ids"),Ec.forEach(s),Hp=o(Rs," \u2014 but then how can our model possibly learn anything? We\u2019re missing a key step: inserting "),Mn=p(Rs,"CODE",{});var Tc=h(Mn);Ip=o(Tc,"[MASK]"),Tc.forEach(s),Gp=o(Rs," tokens at random positions in the inputs! Let\u2019s see how we can do this on the fly during fine-tuning using a special data collator."),Rs.forEach(s),Xl=m(e),os=p(e,"H2",{class:!0});var Yi=h(os);zs=p(Yi,"A",{id:!0,class:!0,href:!0});var zc=h(zs);Pn=p(zc,"SPAN",{});var Ac=h(Pn);j($a.$$.fragment,Ac),Ac.forEach(s),zc.forEach(s),Up=m(Yi),ja=p(Yi,"SPAN",{});var Vi=h(ja);Yp=o(Vi,"Fine-tuning DistilBERT with the "),Sn=p(Vi,"CODE",{});var qc=h(Sn);Vp=o(qc,"Trainer"),qc.forEach(s),Jp=o(Vi," API"),Vi.forEach(s),Yi.forEach(s),Zl=m(e),ct=p(e,"P",{});var Ns=h(ct);Qp=o(Ns,"Fine-tuning a masked language model is almost identical to fine-tuning a sequence classification model, like we did in "),mo=p(Ns,"A",{href:!0});var Dc=h(mo);Xp=o(Dc,"Chapter 3"),Dc.forEach(s),Zp=o(Ns,". The only difference is that we need a special data collator that can randomly mask some of the tokens in each batch of texts. Fortunately, \u{1F917} Transformers comes prepared with a dedicated "),Cn=p(Ns,"CODE",{});var Mc=h(Cn);eh=o(Mc,"DataCollatorForLanguageModeling"),Mc.forEach(s),th=o(Ns," for just this task. We just have to pass it the tokenizer and an "),On=p(Ns,"CODE",{});var Pc=h(On);sh=o(Pc,"mlm_probability"),Pc.forEach(s),ah=o(Ns," argument that specifies what fraction of the tokens to mask. We\u2019ll pick 15%, which is the amount used for BERT and a common choice in the literature:"),Ns.forEach(s),ei=m(e),j(xa.$$.fragment,e),ti=m(e),ut=p(e,"P",{});var Fs=h(ut);oh=o(Fs,"To see how the random masking works, let\u2019s feed a few examples to the data collator. Since it expects a list of "),Ln=p(Fs,"CODE",{});var Sc=h(Ln);nh=o(Sc,"dict"),Sc.forEach(s),lh=o(Fs,"s, where each "),Kn=p(Fs,"CODE",{});var Cc=h(Kn);ih=o(Cc,"dict"),Cc.forEach(s),rh=o(Fs," represents a single chunk of contiguous text, we first iterate over the dataset before feeding the batch to the collator. We remove the "),Rn=p(Fs,"CODE",{});var Oc=h(Rn);ph=o(Oc,'"word_ids"'),Oc.forEach(s),hh=o(Fs," key for this data collator as it does not expect it:"),Fs.forEach(s),si=m(e),j(Ea.$$.fragment,e),ai=m(e),j(Ta.$$.fragment,e),oi=m(e),Ht=p(e,"P",{});var Ho=h(Ht);dh=o(Ho,"Nice, it worked! We can see that the "),Nn=p(Ho,"CODE",{});var Lc=h(Nn);ch=o(Lc,"[MASK]"),Lc.forEach(s),uh=o(Ho," token has been randomly inserted at various locations in our text. These will be the tokens which our model will have to predict during training \u2014 and the beauty of the data collator is that it will randomize the "),Fn=p(Ho,"CODE",{});var Kc=h(Fn);mh=o(Kc,"[MASK]"),Kc.forEach(s),fh=o(Ho," insertion with every batch!"),Ho.forEach(s),ni=m(e),j(As.$$.fragment,e),li=m(e),Ve&&Ve.l(e),fo=m(e),It=p(e,"P",{});var Io=h(It);_h=o(Io,"When training models for masked language modeling, one technique that can be used is to mask whole words together, not just individual tokens. This approach is called "),Wn=p(Io,"EM",{});var Rc=h(Wn);gh=o(Rc,"whole word masking"),Rc.forEach(s),wh=o(Io,". If we want to use whole word masking, we will need to build a data collator ourselves. A data collator is just a function that takes a list of samples and converts them into a batch, so let\u2019s do this now! We\u2019ll use the word IDs computed earlier to make a map between word indices and the corresponding tokens, then randomly decide which words to mask and apply that mask on the inputs. Note that the labels are all "),Bn=p(Io,"CODE",{});var Nc=h(Bn);kh=o(Nc,"-100"),Nc.forEach(s),bh=o(Io," except for the ones corresponding to mask words."),Io.forEach(s),ii=m(e),Et.l(e),_o=m(e),go=p(e,"P",{});var Fc=h(go);yh=o(Fc,"Next, we can try it on the same samples as before:"),Fc.forEach(s),ri=m(e),j(za.$$.fragment,e),pi=m(e),j(Aa.$$.fragment,e),hi=m(e),j(qs.$$.fragment,e),di=m(e),Gt=p(e,"P",{});var Go=h(Gt);vh=o(Go,"Now that we have two data collators, the rest of the fine-tuning steps are standard. Training can take a while on Google Colab if you\u2019re not lucky enough to score a mythical P100 GPU \u{1F62D}, so we\u2019ll first downsample the size of the training set to a few thousand examples. Don\u2019t worry, we\u2019ll still get a pretty decent language model! A quick way to downsample a dataset in \u{1F917} Datasets is via the "),Hn=p(Go,"CODE",{});var Wc=h(Hn);$h=o(Wc,"Dataset.train_test_split()"),Wc.forEach(s),jh=o(Go," function that we saw in "),wo=p(Go,"A",{href:!0});var Bc=h(wo);xh=o(Bc,"Chapter 5"),Bc.forEach(s),Eh=o(Go,":"),Go.forEach(s),ci=m(e),j(qa.$$.fragment,e),ui=m(e),j(Da.$$.fragment,e),mi=m(e),Ut=p(e,"P",{});var Uo=h(Ut);Th=o(Uo,"This has automatically created new "),In=p(Uo,"CODE",{});var Hc=h(In);zh=o(Hc,"train"),Hc.forEach(s),Ah=o(Uo," and "),Gn=p(Uo,"CODE",{});var Ic=h(Gn);qh=o(Ic,"test"),Ic.forEach(s),Dh=o(Uo," splits, with the training set size set to 10,000 examples and the validation set to 10% of that \u2014 feel free to increase this if you have a beefy GPU! The next thing we need to do is log in to the Hugging Face Hub. If you\u2019re running this code in a notebook, you can do so with the following utility function:"),Uo.forEach(s),fi=m(e),j(Ma.$$.fragment,e),_i=m(e),ko=p(e,"P",{});var Gc=h(ko);Mh=o(Gc,"which will display a widget where you can enter your credentials. Alternatively, you can run:"),Gc.forEach(s),gi=m(e),j(Pa.$$.fragment,e),wi=m(e),bo=p(e,"P",{});var Uc=h(bo);Ph=o(Uc,"in your favorite terminal and log in there."),Uc.forEach(s),ki=m(e),zt.l(e),yo=m(e),ns=p(e,"H3",{class:!0});var Ji=h(ns);Ds=p(Ji,"A",{id:!0,class:!0,href:!0});var Yc=h(Ds);Un=p(Yc,"SPAN",{});var Vc=h(Un);j(Sa.$$.fragment,Vc),Vc.forEach(s),Yc.forEach(s),Sh=m(Ji),Yn=p(Ji,"SPAN",{});var Jc=h(Yn);Ch=o(Jc,"Perplexity for language models"),Jc.forEach(s),Ji.forEach(s),bi=m(e),j(Ca.$$.fragment,e),yi=m(e),vo=p(e,"P",{});var Qc=h(vo);Oh=o(Qc,"Unlike other tasks like text classification or question answering where we\u2019re given a labeled corpus to train on, with language modeling we don\u2019t have any explicit labels. So how do we determine what makes a good language model? Like with the autocorrect feature in your phone, a good language model is one that assigns high probabilities to sentences that are grammatically correct, and low probabilities to nonsense sentences. To give you a better idea of what this looks like, you can find whole sets of \u201Cautocorrect fails\u201D online, where the model in a person\u2019s phone has produced some rather funny (and often inappropriate) completions!"),Qc.forEach(s),vi=m(e),qt.l(e),$o=m(e),j(Oa.$$.fragment,e),$i=m(e),jo=p(e,"P",{});var Xc=h(jo);Lh=o(Xc,"A lower perplexity score means a better language model, and we can see here that our starting model has a somewhat large value. Let\u2019s see if we can lower it by fine-tuning! To do that, we first run the training loop:"),Xc.forEach(s),ji=m(e),Mt.l(e),xo=m(e),Eo=p(e,"P",{});var Zc=h(Eo);Kh=o(Zc,"and then compute the resulting perplexity on the test set as before:"),Zc.forEach(s),xi=m(e),St.l(e),To=m(e),j(La.$$.fragment,e),Ei=m(e),zo=p(e,"P",{});var eu=h(zo);Rh=o(eu,"Nice \u2014 this is quite a reduction in perplexity, which tells us the model has learned something about the domain of movie reviews!"),eu.forEach(s),Ti=m(e),Pe&&Pe.l(e),Ao=m(e),j(Ms.$$.fragment,e),zi=m(e),Se&&Se.l(e),qo=m(e),ls=p(e,"H2",{class:!0});var Qi=h(ls);Ps=p(Qi,"A",{id:!0,class:!0,href:!0});var tu=h(Ps);Vn=p(tu,"SPAN",{});var su=h(Vn);j(Ka.$$.fragment,su),su.forEach(s),tu.forEach(s),Nh=m(Qi),Jn=p(Qi,"SPAN",{});var au=h(Jn);Fh=o(au,"Using our fine-tuned model"),au.forEach(s),Qi.forEach(s),Ai=m(e),Yt=p(e,"P",{});var Yo=h(Yt);Wh=o(Yo,"You can interact with your fine-tuned model either by using its widget on the Hub or locally with the "),Qn=p(Yo,"CODE",{});var ou=h(Qn);Bh=o(ou,"pipeline"),ou.forEach(s),Hh=o(Yo," from \u{1F917} Transformers. Let\u2019s use the latter to download our model using the "),Xn=p(Yo,"CODE",{});var nu=h(Xn);Ih=o(nu,"fill-mask"),nu.forEach(s),Gh=o(Yo," pipeline:"),Yo.forEach(s),qi=m(e),j(Ra.$$.fragment,e),Di=m(e),Do=p(e,"P",{});var lu=h(Do);Uh=o(lu,"We can then feed the pipeline our sample text of \u201CThis is a great [MASK]\u201D and see what the top 5 predictions are:"),lu.forEach(s),Mi=m(e),j(Na.$$.fragment,e),Pi=m(e),j(Fa.$$.fragment,e),Si=m(e),Mo=p(e,"P",{});var iu=h(Mo);Yh=o(iu,"Neat \u2014 our model has clearly adapted its weights to predict words that are more strongly associated with movies!"),iu.forEach(s),Ci=m(e),j(Wa.$$.fragment,e),Oi=m(e),Ss=p(e,"P",{});var Xi=h(Ss);Vh=o(Xi,"This wraps up our first experiment with training a language model. In "),Po=p(Xi,"A",{href:!0});var ru=h(Po);Jh=o(ru,"section 6"),ru.forEach(s),Qh=o(Xi," you\u2019ll learn how to train an auto-regressive model like GPT-2 from scratch; head over there if you\u2019d like to see how you can pretrain your very own Transformer model!"),Xi.forEach(s),Li=m(e),j(Cs.$$.fragment,e),this.h()},h(){T(i,"name","hf:doc:metadata"),T(i,"content",JSON.stringify(Hu)),T(k,"id","finetuning-a-masked-language-model"),T(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(k,"href","#finetuning-a-masked-language-model"),T(z,"class","relative group"),T(ne,"href","https://arxiv.org/abs/1801.06146"),T(ne,"rel","nofollow"),T(Z,"class","block dark:hidden"),Xh(Z.src,ce="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/ulmfit.svg")||T(Z,"src",ce),T(Z,"alt","ULMFiT."),T(te,"class","hidden dark:block"),Xh(te.src,Oe="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/ulmfit-dark.svg")||T(te,"src",Oe),T(te,"alt","ULMFiT."),T(oe,"class","flex justify-center"),T(ie,"href","https://huggingface.co/huggingface-course/distilbert-base-uncased-finetuned-imdb?text=This+is+a+great+%5BMASK%5D."),T(ie,"rel","nofollow"),T(be,"class","max-w-md"),T(ue,"class","w-full flex justify-center"),T(S,"id","picking-a-pretrained-model-for-masked-language-modeling"),T(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(S,"href","#picking-a-pretrained-model-for-masked-language-modeling"),T(ee,"class","relative group"),T(Q,"href","https://huggingface.co/models?pipeline_tag=fill-mask&sort=downloads"),T(Q,"rel","nofollow"),Xh(Ce.src,$e="https://huggingface.co/datasets/huggingface-course/documentation-images/resolve/main/en/chapter7/mlm-models.png")||T(Ce,"src",$e),T(Ce,"alt","Hub models."),T(Ce,"width","80%"),T(Re,"class","flex justify-center"),T(De,"href","https://huggingface.co/distilbert-base-uncased"),T(De,"rel","nofollow"),T(Xe,"href","https://en.wikipedia.org/wiki/Knowledge_distillation"),T(Xe,"rel","nofollow"),T(it,"href","https://learning.oreilly.com/library/view/natural-language-processing/9781098103231/ch05.html"),T(it,"rel","nofollow"),T(et,"href","https://huggingface.co/datasets/wikipedia"),T(et,"rel","nofollow"),T(c,"href","https://huggingface.co/datasets/bookcorpus"),T(c,"rel","nofollow"),T(jt,"id","the-dataset"),T(jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(jt,"href","#the-dataset"),T(st,"class","relative group"),T(Js,"href","https://huggingface.co/datasets/imdb"),T(Js,"rel","nofollow"),T(oo,"href","/course/chapter3"),T(vs,"id","preprocessing-the-data"),T(vs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(vs,"href","#preprocessing-the-data"),T(as,"class","relative group"),T(lo,"href","/course/chapter6/3"),T(zs,"id","finetuning-distilbert-with-the-trainer-api"),T(zs,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(zs,"href","#finetuning-distilbert-with-the-trainer-api"),T(os,"class","relative group"),T(mo,"href","/course/chapter3"),T(wo,"href","/course/chapter5"),T(Ds,"id","perplexity-for-language-models"),T(Ds,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(Ds,"href","#perplexity-for-language-models"),T(ns,"class","relative group"),T(Ps,"id","using-our-finetuned-model"),T(Ps,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),T(Ps,"href","#using-our-finetuned-model"),T(ls,"class","relative group"),T(Po,"href","/course/chapter7/section6")},m(e,n){t(document.head,i),l(e,f,n),x(d,e,n),l(e,y,n),l(e,z,n),t(z,k),t(k,b),x(q,b,null),t(z,g),t(z,D),t(D,K),l(e,C,n),Ba[P].m(e,n),l(e,F,n),l(e,W,n),t(W,H),l(e,B,n),l(e,v,n),t(v,R),l(e,U,n),l(e,Y,n),t(Y,J),t(Y,I),t(I,je),t(Y,de),t(Y,ne),t(ne,G),t(Y,fe),l(e,xe,n),l(e,oe,n),t(oe,Z),t(oe,we),t(oe,te),l(e,ke,n),l(e,se,n),t(se,Ge),t(se,ie),t(ie,Ee),t(se,Fe),l(e,re,n),l(e,ue,n),t(ue,be),l(e,pe,n),l(e,_e,n),t(_e,Te),l(e,ae,n),x(ye,e,n),l(e,me,n),x(ve,e,n),l(e,Le,n),l(e,ee,n),t(ee,S),t(S,V),x(ze,V,null),t(ee,M),t(ee,X),t(X,ot),l(e,Ae,n),l(e,ge,n),t(ge,he),t(ge,Q),t(Q,nt),t(ge,Ke),l(e,Je,n),l(e,Re,n),t(Re,Ce),l(e,qe,n),l(e,le,n),t(le,Ct),t(le,De),t(De,Qe),t(le,gt),t(le,Xe),t(Xe,Zt),t(Zt,rs),t(le,wt),t(le,it),t(it,lt),t(lt,ps),t(le,rt),l(e,hs,n),Ha[Ne].m(e,n),l(e,Ot,n),l(e,kt,n),t(kt,bt),l(e,es,n),x(Ze,e,n),l(e,ds,n),l(e,Me,n),t(Me,yt),t(Me,Lt),t(Lt,vt),t(Me,cs),t(Me,et),t(et,Hs),t(Me,us),t(Me,c),t(c,O),t(Me,ms),t(Me,fs),t(fs,eo),t(Me,to),l(e,$t,n),x(Kt,e,n),l(e,Is,n),l(e,Ye,n),t(Ye,so),l(e,Gs,n),Ia[tt].m(e,n),l(e,ts,n),x(pt,e,n),l(e,Us,n),l(e,ss,n),t(ss,_s),l(e,Ys,n),l(e,st,n),t(st,jt),t(jt,gs),x(Rt,gs,null),t(st,ws),t(st,ks),t(ks,ao),l(e,Vs,n),l(e,Nt,n),t(Nt,er),t(Nt,Js),t(Js,tr),t(Nt,sr),t(Nt,Vo),t(Vo,ar),t(Nt,or),l(e,nl,n),x(Qs,e,n),l(e,ll,n),x(Xs,e,n),l(e,il,n),l(e,Be,n),t(Be,nr),t(Be,Jo),t(Jo,lr),t(Be,ir),t(Be,Qo),t(Qo,rr),t(Be,pr),t(Be,Xo),t(Xo,hr),t(Be,dr),t(Be,Zo),t(Zo,cr),t(Be,ur),t(Be,en),t(en,mr),t(Be,fr),l(e,rl,n),x(Zs,e,n),l(e,pl,n),x(ea,e,n),l(e,hl,n),l(e,Ft,n),t(Ft,_r),t(Ft,tn),t(tn,gr),t(Ft,wr),t(Ft,sn),t(sn,kr),t(Ft,br),l(e,dl,n),x(bs,e,n),l(e,cl,n),l(e,ys,n),t(ys,yr),t(ys,oo),t(oo,vr),t(ys,$r),l(e,ul,n),l(e,as,n),t(as,vs),t(vs,an),x(ta,an,null),t(as,jr),t(as,on),t(on,xr),l(e,ml,n),x(sa,e,n),l(e,fl,n),l(e,no,n),t(no,Er),l(e,_l,n),l(e,He,n),t(He,Tr),t(He,nn),t(nn,zr),t(He,Ar),t(He,ln),t(ln,qr),t(He,Dr),t(He,lo),t(lo,Mr),t(He,Pr),t(He,rn),t(rn,Sr),t(He,Cr),t(He,pn),t(pn,Or),t(He,Lr),l(e,gl,n),x(aa,e,n),l(e,wl,n),x(oa,e,n),l(e,kl,n),l(e,ht,n),t(ht,Kr),t(ht,hn),t(hn,Rr),t(ht,Nr),t(ht,dn),t(dn,Fr),t(ht,Wr),t(ht,cn),t(cn,Br),t(ht,Hr),l(e,bl,n),l(e,$s,n),t($s,Ir),t($s,un),t(un,Gr),t($s,Ur),l(e,yl,n),x(na,e,n),l(e,vl,n),x(la,e,n),l(e,$l,n),l(e,js,n),t(js,Yr),t(js,mn),t(mn,Vr),t(js,Jr),l(e,jl,n),x(xs,e,n),l(e,xl,n),l(e,io,n),t(io,Qr),l(e,El,n),x(ia,e,n),l(e,Tl,n),x(Es,e,n),l(e,zl,n),l(e,ro,n),t(ro,Xr),l(e,Al,n),x(ra,e,n),l(e,ql,n),x(pa,e,n),l(e,Dl,n),l(e,po,n),t(po,Zr),l(e,Ml,n),x(ha,e,n),l(e,Pl,n),x(da,e,n),l(e,Sl,n),l(e,Wt,n),t(Wt,ep),t(Wt,fn),t(fn,tp),t(Wt,sp),t(Wt,_n),t(_n,ap),t(Wt,op),l(e,Cl,n),x(ca,e,n),l(e,Ol,n),x(ua,e,n),l(e,Ll,n),l(e,ho,n),t(ho,np),l(e,Kl,n),l(e,Ts,n),t(Ts,ma),t(ma,lp),t(ma,gn),t(gn,ip),t(ma,rp),t(Ts,pp),t(Ts,fa),t(fa,hp),t(fa,wn),t(wn,dp),t(fa,cp),l(e,Rl,n),l(e,co,n),t(co,up),l(e,Nl,n),x(_a,e,n),l(e,Fl,n),l(e,at,n),t(at,mp),t(at,kn),t(kn,fp),t(at,_p),t(at,bn),t(bn,gp),t(at,wp),t(at,yn),t(yn,kp),t(at,bp),t(at,vn),t(vn,yp),t(at,vp),l(e,Wl,n),l(e,Bt,n),t(Bt,$p),t(Bt,$n),t($n,jp),t(Bt,xp),t(Bt,jn),t(jn,Ep),t(Bt,Tp),l(e,Bl,n),x(ga,e,n),l(e,Hl,n),x(wa,e,n),l(e,Il,n),l(e,Ie,n),t(Ie,zp),t(Ie,xn),t(xn,Ap),t(Ie,qp),t(Ie,En),t(En,Dp),t(Ie,Mp),t(Ie,Tn),t(Tn,Pp),t(Ie,Sp),t(Ie,zn),t(zn,Cp),t(Ie,Op),t(Ie,An),t(An,Lp),t(Ie,Kp),l(e,Gl,n),x(ka,e,n),l(e,Ul,n),x(ba,e,n),l(e,Yl,n),l(e,uo,n),t(uo,Rp),l(e,Vl,n),x(ya,e,n),l(e,Jl,n),x(va,e,n),l(e,Ql,n),l(e,dt,n),t(dt,Np),t(dt,qn),t(qn,Fp),t(dt,Wp),t(dt,Dn),t(Dn,Bp),t(dt,Hp),t(dt,Mn),t(Mn,Ip),t(dt,Gp),l(e,Xl,n),l(e,os,n),t(os,zs),t(zs,Pn),x($a,Pn,null),t(os,Up),t(os,ja),t(ja,Yp),t(ja,Sn),t(Sn,Vp),t(ja,Jp),l(e,Zl,n),l(e,ct,n),t(ct,Qp),t(ct,mo),t(mo,Xp),t(ct,Zp),t(ct,Cn),t(Cn,eh),t(ct,th),t(ct,On),t(On,sh),t(ct,ah),l(e,ei,n),x(xa,e,n),l(e,ti,n),l(e,ut,n),t(ut,oh),t(ut,Ln),t(Ln,nh),t(ut,lh),t(ut,Kn),t(Kn,ih),t(ut,rh),t(ut,Rn),t(Rn,ph),t(ut,hh),l(e,si,n),x(Ea,e,n),l(e,ai,n),x(Ta,e,n),l(e,oi,n),l(e,Ht,n),t(Ht,dh),t(Ht,Nn),t(Nn,ch),t(Ht,uh),t(Ht,Fn),t(Fn,mh),t(Ht,fh),l(e,ni,n),x(As,e,n),l(e,li,n),Ve&&Ve.m(e,n),l(e,fo,n),l(e,It,n),t(It,_h),t(It,Wn),t(Wn,gh),t(It,wh),t(It,Bn),t(Bn,kh),t(It,bh),l(e,ii,n),Ga[xt].m(e,n),l(e,_o,n),l(e,go,n),t(go,yh),l(e,ri,n),x(za,e,n),l(e,pi,n),x(Aa,e,n),l(e,hi,n),x(qs,e,n),l(e,di,n),l(e,Gt,n),t(Gt,vh),t(Gt,Hn),t(Hn,$h),t(Gt,jh),t(Gt,wo),t(wo,xh),t(Gt,Eh),l(e,ci,n),x(qa,e,n),l(e,ui,n),x(Da,e,n),l(e,mi,n),l(e,Ut,n),t(Ut,Th),t(Ut,In),t(In,zh),t(Ut,Ah),t(Ut,Gn),t(Gn,qh),t(Ut,Dh),l(e,fi,n),x(Ma,e,n),l(e,_i,n),l(e,ko,n),t(ko,Mh),l(e,gi,n),x(Pa,e,n),l(e,wi,n),l(e,bo,n),t(bo,Ph),l(e,ki,n),Ua[Tt].m(e,n),l(e,yo,n),l(e,ns,n),t(ns,Ds),t(Ds,Un),x(Sa,Un,null),t(ns,Sh),t(ns,Yn),t(Yn,Ch),l(e,bi,n),x(Ca,e,n),l(e,yi,n),l(e,vo,n),t(vo,Oh),l(e,vi,n),Ya[At].m(e,n),l(e,$o,n),x(Oa,e,n),l(e,$i,n),l(e,jo,n),t(jo,Lh),l(e,ji,n),Va[Dt].m(e,n),l(e,xo,n),l(e,Eo,n),t(Eo,Kh),l(e,xi,n),Ja[Pt].m(e,n),l(e,To,n),x(La,e,n),l(e,Ei,n),l(e,zo,n),t(zo,Rh),l(e,Ti,n),Pe&&Pe.m(e,n),l(e,Ao,n),x(Ms,e,n),l(e,zi,n),Se&&Se.m(e,n),l(e,qo,n),l(e,ls,n),t(ls,Ps),t(Ps,Vn),x(Ka,Vn,null),t(ls,Nh),t(ls,Jn),t(Jn,Fh),l(e,Ai,n),l(e,Yt,n),t(Yt,Wh),t(Yt,Qn),t(Qn,Bh),t(Yt,Hh),t(Yt,Xn),t(Xn,Ih),t(Yt,Gh),l(e,qi,n),x(Ra,e,n),l(e,Di,n),l(e,Do,n),t(Do,Uh),l(e,Mi,n),x(Na,e,n),l(e,Pi,n),x(Fa,e,n),l(e,Si,n),l(e,Mo,n),t(Mo,Yh),l(e,Ci,n),x(Wa,e,n),l(e,Oi,n),l(e,Ss,n),t(Ss,Vh),t(Ss,Po),t(Po,Jh),t(Ss,Qh),l(e,Li,n),x(Cs,e,n),Ki=!0},p(e,[n]){const Qa={};n&1&&(Qa.fw=e[0]),d.$set(Qa);let So=P;P=ed(e),P!==So&&(Xt(),w(Ba[So],1,1,()=>{Ba[So]=null}),Qt(),N=Ba[P],N||(N=Ba[P]=Zh[P](e),N.c()),_(N,1),N.m(F.parentNode,F));const Zn={};n&2&&(Zn.$$scope={dirty:n,ctx:e}),ve.$set(Zn);let Co=Ne;Ne=sd(e),Ne!==Co&&(Xt(),w(Ha[Co],1,1,()=>{Ha[Co]=null}),Qt(),Ue=Ha[Ne],Ue||(Ue=Ha[Ne]=td[Ne](e),Ue.c()),_(Ue,1),Ue.m(Ot.parentNode,Ot));let Oo=tt;tt=od(e),tt!==Oo&&(Xt(),w(Ia[Oo],1,1,()=>{Ia[Oo]=null}),Qt(),We=Ia[tt],We||(We=Ia[tt]=ad[tt](e),We.c()),_(We,1),We.m(ts.parentNode,ts));const el={};n&2&&(el.$$scope={dirty:n,ctx:e}),bs.$set(el);const is={};n&2&&(is.$$scope={dirty:n,ctx:e}),xs.$set(is);const tl={};n&2&&(tl.$$scope={dirty:n,ctx:e}),Es.$set(tl);const sl={};n&2&&(sl.$$scope={dirty:n,ctx:e}),As.$set(sl),e[0]==="pt"?Ve||(Ve=pu(),Ve.c(),Ve.m(fo.parentNode,fo)):Ve&&(Ve.d(1),Ve=null);let Os=xt;xt=ld(e),xt!==Os&&(Xt(),w(Ga[Os],1,1,()=>{Ga[Os]=null}),Qt(),Et=Ga[xt],Et||(Et=Ga[xt]=nd[xt](e),Et.c()),_(Et,1),Et.m(_o.parentNode,_o));const Xa={};n&2&&(Xa.$$scope={dirty:n,ctx:e}),qs.$set(Xa);let Lo=Tt;Tt=rd(e),Tt!==Lo&&(Xt(),w(Ua[Lo],1,1,()=>{Ua[Lo]=null}),Qt(),zt=Ua[Tt],zt||(zt=Ua[Tt]=id[Tt](e),zt.c()),_(zt,1),zt.m(yo.parentNode,yo));let Ko=At;At=hd(e),At!==Ko&&(Xt(),w(Ya[Ko],1,1,()=>{Ya[Ko]=null}),Qt(),qt=Ya[At],qt||(qt=Ya[At]=pd[At](e),qt.c()),_(qt,1),qt.m($o.parentNode,$o));let al=Dt;Dt=cd(e),Dt!==al&&(Xt(),w(Va[al],1,1,()=>{Va[al]=null}),Qt(),Mt=Va[Dt],Mt||(Mt=Va[Dt]=dd[Dt](e),Mt.c()),_(Mt,1),Mt.m(xo.parentNode,xo));let Ro=Pt;Pt=md(e),Pt!==Ro&&(Xt(),w(Ja[Ro],1,1,()=>{Ja[Ro]=null}),Qt(),St=Ja[Pt],St||(St=Ja[Pt]=ud[Pt](e),St.c()),_(St,1),St.m(To.parentNode,To)),e[0]==="pt"?Pe?n&1&&_(Pe,1):(Pe=hu(),Pe.c(),_(Pe,1),Pe.m(Ao.parentNode,Ao)):Pe&&(Xt(),w(Pe,1,1,()=>{Pe=null}),Qt());const Za={};n&2&&(Za.$$scope={dirty:n,ctx:e}),Ms.$set(Za),e[0]==="pt"?Se?n&1&&_(Se,1):(Se=du(),Se.c(),_(Se,1),Se.m(qo.parentNode,qo)):Se&&(Xt(),w(Se,1,1,()=>{Se=null}),Qt());const ol={};n&2&&(ol.$$scope={dirty:n,ctx:e}),Cs.$set(ol)},i(e){Ki||(_(d.$$.fragment,e),_(q.$$.fragment,e),_(N),_(ye.$$.fragment,e),_(ve.$$.fragment,e),_(ze.$$.fragment,e),_(Ue),_(Ze.$$.fragment,e),_(Kt.$$.fragment,e),_(We),_(pt.$$.fragment,e),_(Rt.$$.fragment,e),_(Qs.$$.fragment,e),_(Xs.$$.fragment,e),_(Zs.$$.fragment,e),_(ea.$$.fragment,e),_(bs.$$.fragment,e),_(ta.$$.fragment,e),_(sa.$$.fragment,e),_(aa.$$.fragment,e),_(oa.$$.fragment,e),_(na.$$.fragment,e),_(la.$$.fragment,e),_(xs.$$.fragment,e),_(ia.$$.fragment,e),_(Es.$$.fragment,e),_(ra.$$.fragment,e),_(pa.$$.fragment,e),_(ha.$$.fragment,e),_(da.$$.fragment,e),_(ca.$$.fragment,e),_(ua.$$.fragment,e),_(_a.$$.fragment,e),_(ga.$$.fragment,e),_(wa.$$.fragment,e),_(ka.$$.fragment,e),_(ba.$$.fragment,e),_(ya.$$.fragment,e),_(va.$$.fragment,e),_($a.$$.fragment,e),_(xa.$$.fragment,e),_(Ea.$$.fragment,e),_(Ta.$$.fragment,e),_(As.$$.fragment,e),_(Et),_(za.$$.fragment,e),_(Aa.$$.fragment,e),_(qs.$$.fragment,e),_(qa.$$.fragment,e),_(Da.$$.fragment,e),_(Ma.$$.fragment,e),_(Pa.$$.fragment,e),_(zt),_(Sa.$$.fragment,e),_(Ca.$$.fragment,e),_(qt),_(Oa.$$.fragment,e),_(Mt),_(St),_(La.$$.fragment,e),_(Pe),_(Ms.$$.fragment,e),_(Se),_(Ka.$$.fragment,e),_(Ra.$$.fragment,e),_(Na.$$.fragment,e),_(Fa.$$.fragment,e),_(Wa.$$.fragment,e),_(Cs.$$.fragment,e),Ki=!0)},o(e){w(d.$$.fragment,e),w(q.$$.fragment,e),w(N),w(ye.$$.fragment,e),w(ve.$$.fragment,e),w(ze.$$.fragment,e),w(Ue),w(Ze.$$.fragment,e),w(Kt.$$.fragment,e),w(We),w(pt.$$.fragment,e),w(Rt.$$.fragment,e),w(Qs.$$.fragment,e),w(Xs.$$.fragment,e),w(Zs.$$.fragment,e),w(ea.$$.fragment,e),w(bs.$$.fragment,e),w(ta.$$.fragment,e),w(sa.$$.fragment,e),w(aa.$$.fragment,e),w(oa.$$.fragment,e),w(na.$$.fragment,e),w(la.$$.fragment,e),w(xs.$$.fragment,e),w(ia.$$.fragment,e),w(Es.$$.fragment,e),w(ra.$$.fragment,e),w(pa.$$.fragment,e),w(ha.$$.fragment,e),w(da.$$.fragment,e),w(ca.$$.fragment,e),w(ua.$$.fragment,e),w(_a.$$.fragment,e),w(ga.$$.fragment,e),w(wa.$$.fragment,e),w(ka.$$.fragment,e),w(ba.$$.fragment,e),w(ya.$$.fragment,e),w(va.$$.fragment,e),w($a.$$.fragment,e),w(xa.$$.fragment,e),w(Ea.$$.fragment,e),w(Ta.$$.fragment,e),w(As.$$.fragment,e),w(Et),w(za.$$.fragment,e),w(Aa.$$.fragment,e),w(qs.$$.fragment,e),w(qa.$$.fragment,e),w(Da.$$.fragment,e),w(Ma.$$.fragment,e),w(Pa.$$.fragment,e),w(zt),w(Sa.$$.fragment,e),w(Ca.$$.fragment,e),w(qt),w(Oa.$$.fragment,e),w(Mt),w(St),w(La.$$.fragment,e),w(Pe),w(Ms.$$.fragment,e),w(Se),w(Ka.$$.fragment,e),w(Ra.$$.fragment,e),w(Na.$$.fragment,e),w(Fa.$$.fragment,e),w(Wa.$$.fragment,e),w(Cs.$$.fragment,e),Ki=!1},d(e){s(i),e&&s(f),E(d,e),e&&s(y),e&&s(z),E(q),e&&s(C),Ba[P].d(e),e&&s(F),e&&s(W),e&&s(B),e&&s(v),e&&s(U),e&&s(Y),e&&s(xe),e&&s(oe),e&&s(ke),e&&s(se),e&&s(re),e&&s(ue),e&&s(pe),e&&s(_e),e&&s(ae),E(ye,e),e&&s(me),E(ve,e),e&&s(Le),e&&s(ee),E(ze),e&&s(Ae),e&&s(ge),e&&s(Je),e&&s(Re),e&&s(qe),e&&s(le),e&&s(hs),Ha[Ne].d(e),e&&s(Ot),e&&s(kt),e&&s(es),E(Ze,e),e&&s(ds),e&&s(Me),e&&s($t),E(Kt,e),e&&s(Is),e&&s(Ye),e&&s(Gs),Ia[tt].d(e),e&&s(ts),E(pt,e),e&&s(Us),e&&s(ss),e&&s(Ys),e&&s(st),E(Rt),e&&s(Vs),e&&s(Nt),e&&s(nl),E(Qs,e),e&&s(ll),E(Xs,e),e&&s(il),e&&s(Be),e&&s(rl),E(Zs,e),e&&s(pl),E(ea,e),e&&s(hl),e&&s(Ft),e&&s(dl),E(bs,e),e&&s(cl),e&&s(ys),e&&s(ul),e&&s(as),E(ta),e&&s(ml),E(sa,e),e&&s(fl),e&&s(no),e&&s(_l),e&&s(He),e&&s(gl),E(aa,e),e&&s(wl),E(oa,e),e&&s(kl),e&&s(ht),e&&s(bl),e&&s($s),e&&s(yl),E(na,e),e&&s(vl),E(la,e),e&&s($l),e&&s(js),e&&s(jl),E(xs,e),e&&s(xl),e&&s(io),e&&s(El),E(ia,e),e&&s(Tl),E(Es,e),e&&s(zl),e&&s(ro),e&&s(Al),E(ra,e),e&&s(ql),E(pa,e),e&&s(Dl),e&&s(po),e&&s(Ml),E(ha,e),e&&s(Pl),E(da,e),e&&s(Sl),e&&s(Wt),e&&s(Cl),E(ca,e),e&&s(Ol),E(ua,e),e&&s(Ll),e&&s(ho),e&&s(Kl),e&&s(Ts),e&&s(Rl),e&&s(co),e&&s(Nl),E(_a,e),e&&s(Fl),e&&s(at),e&&s(Wl),e&&s(Bt),e&&s(Bl),E(ga,e),e&&s(Hl),E(wa,e),e&&s(Il),e&&s(Ie),e&&s(Gl),E(ka,e),e&&s(Ul),E(ba,e),e&&s(Yl),e&&s(uo),e&&s(Vl),E(ya,e),e&&s(Jl),E(va,e),e&&s(Ql),e&&s(dt),e&&s(Xl),e&&s(os),E($a),e&&s(Zl),e&&s(ct),e&&s(ei),E(xa,e),e&&s(ti),e&&s(ut),e&&s(si),E(Ea,e),e&&s(ai),E(Ta,e),e&&s(oi),e&&s(Ht),e&&s(ni),E(As,e),e&&s(li),Ve&&Ve.d(e),e&&s(fo),e&&s(It),e&&s(ii),Ga[xt].d(e),e&&s(_o),e&&s(go),e&&s(ri),E(za,e),e&&s(pi),E(Aa,e),e&&s(hi),E(qs,e),e&&s(di),e&&s(Gt),e&&s(ci),E(qa,e),e&&s(ui),E(Da,e),e&&s(mi),e&&s(Ut),e&&s(fi),E(Ma,e),e&&s(_i),e&&s(ko),e&&s(gi),E(Pa,e),e&&s(wi),e&&s(bo),e&&s(ki),Ua[Tt].d(e),e&&s(yo),e&&s(ns),E(Sa),e&&s(bi),E(Ca,e),e&&s(yi),e&&s(vo),e&&s(vi),Ya[At].d(e),e&&s($o),E(Oa,e),e&&s($i),e&&s(jo),e&&s(ji),Va[Dt].d(e),e&&s(xo),e&&s(Eo),e&&s(xi),Ja[Pt].d(e),e&&s(To),E(La,e),e&&s(Ei),e&&s(zo),e&&s(Ti),Pe&&Pe.d(e),e&&s(Ao),E(Ms,e),e&&s(zi),Se&&Se.d(e),e&&s(qo),e&&s(ls),E(Ka),e&&s(Ai),e&&s(Yt),e&&s(qi),E(Ra,e),e&&s(Di),e&&s(Do),e&&s(Mi),E(Na,e),e&&s(Pi),E(Fa,e),e&&s(Si),e&&s(Mo),e&&s(Ci),E(Wa,e),e&&s(Oi),e&&s(Ss),e&&s(Li),E(Cs,e)}}}const Hu={local:"finetuning-a-masked-language-model",sections:[{local:"picking-a-pretrained-model-for-masked-language-modeling",title:"Picking a pretrained model for masked language modeling"},{local:"the-dataset",title:"The dataset"},{local:"preprocessing-the-data",title:"Preprocessing the data"},{local:"finetuning-distilbert-with-the-trainer-api",sections:[{local:"perplexity-for-language-models",title:"Perplexity for language models"}],title:"Fine-tuning DistilBERT with the `Trainer` API"},{local:"finetuning-distilbert-with-accelerate",title:"Fine-tuning DistilBERT with \u{1F917} Accelerate"},{local:"using-our-finetuned-model",title:"Using our fine-tuned model"}],title:"Fine-tuning a masked language model"};function Iu(L,i,f){let d="pt";return gu(()=>{const y=new URLSearchParams(window.location.search);f(0,d=y.get("fw")||"pt")}),[d]}class Zu extends uu{constructor(i){super();mu(this,i,Iu,Bu,fu,{})}}export{Zu as default,Hu as metadata};
