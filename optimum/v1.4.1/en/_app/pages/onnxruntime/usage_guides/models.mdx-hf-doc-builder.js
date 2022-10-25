import{S as Mt,i as Nt,s as zt,e as o,k as u,w as O,t as i,M as Ft,c as s,d as n,m as c,a,x as A,h as l,b as m,G as t,g as p,y as S,L as Ht,q as E,o as M,B as N,v as Rt}from"../../../chunks/vendor-hf-doc-builder.js";import{I as $e}from"../../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Oe}from"../../../chunks/CodeBlock-hf-doc-builder.js";function Ct(lt){let _,le,w,x,G,z,Ae,J,Se,me,b,Ee,Q,Me,Ne,pe,q,y,U,F,ze,V,Fe,ue,d,He,K,Re,Ce,Y,Pe,Ie,Z,Xe,Le,ee,Qe,De,ce,H,de,f,We,te,Be,Ge,ne,Je,Ue,he,R,fe,k,T,oe,C,Ve,se,Ke,ge,h,Ye,D,Ze,et,P,tt,nt,ae,ot,st,_e,I,we,v,j,re,X,at,ie,rt,qe,W,it,ke,L,ve;return z=new $e({}),F=new $e({}),H=new Oe({props:{code:`from transformers import AutoTokenizer, pipeline
-from transformers import AutoModelForQuestionAnswering
+from optimum.onnxruntime import ORTModelForQuestionAnswering

-model = AutoModelForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2") # pytorch checkpoint
+model = ORTModelForQuestionAnswering.from_pretrained("optimum/roberta-base-squad2") # onnx checkpoint
tokenizer = AutoTokenizer.from_pretrained("deepset/roberta-base-squad2")

onnx_qa = pipeline("question-answering",model=model,tokenizer=tokenizer)

question = "What's my name?"
context = "My name is Philipp and I live in Nuremberg."
pred = onnx_qa(question, context)`,highlighted:`from transformers import AutoTokenizer, pipeline
<span class="hljs-deletion">-from transformers import AutoModelForQuestionAnswering</span>
<span class="hljs-addition">+from optimum.onnxruntime import ORTModelForQuestionAnswering</span>

<span class="hljs-deletion">-model = AutoModelForQuestionAnswering.from_pretrained(&quot;deepset/roberta-base-squad2&quot;) # pytorch checkpoint</span>
<span class="hljs-addition">+model = ORTModelForQuestionAnswering.from_pretrained(&quot;optimum/roberta-base-squad2&quot;) # onnx checkpoint</span>
tokenizer = AutoTokenizer.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)

onnx_qa = pipeline(&quot;question-answering&quot;,model=model,tokenizer=tokenizer)

question = &quot;What&#x27;s my name?&quot;
context = &quot;My name is Philipp and I live in Nuremberg.&quot;
pred = onnx_qa(question, context)`}}),R=new Oe({props:{code:`from transformers import AutoTokenizer, pipeline
from optimum.onnxruntime import ORTModelForSequenceClassification

model = ORTModelForSequenceClassification.from_pretrained("distilbert-base-uncased-finetuned-sst-2-english", from_transformers=True)
tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased-finetuned-sst-2-english")

onnx_classifier = pipeline("text-classification", model=model, tokenizer=tokenizer)

result = onnx_classifier("This is a great model")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, pipeline
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification

<span class="hljs-comment"># Load the model from the hub and export it to the ONNX format</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>, from_transformers=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>)

<span class="hljs-comment"># Create a pipeline</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_classifier = pipeline(<span class="hljs-string">&quot;text-classification&quot;</span>, model=model, tokenizer=tokenizer)

<span class="hljs-meta">&gt;&gt;&gt; </span>result = onnx_classifier(<span class="hljs-string">&quot;This is a great model&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;POSITIVE&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9998838901519775</span>}]`}}),C=new $e({}),I=new Oe({props:{code:`from transformers import AutoTokenizer
from optimum.onnxruntime import ORTModelForSequenceClassification

model = ORTModelForSequenceClassification.from_pretrained("distilbert-base-uncased-finetuned-sst-2-english", from_transformers=True)
tokenizer = AutoTokenizer.from_pretrained("distilbert-base-uncased-finetuned-sst-2-english")

model.save_pretrained("a_local_path_for_convert_onnx_model")
tokenizer.save_pretrained("a_local_path_for_convert_onnx_model")

model.push_to_hub("a_local_path_for_convert_onnx_model", repository_id="my-onnx-repo", use_auth_token=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification

<span class="hljs-comment"># Load the model from the hub and export it to the ONNX format</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>, from_transformers=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>)

<span class="hljs-comment"># Save the converted model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;a_local_path_for_convert_onnx_model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(<span class="hljs-string">&quot;a_local_path_for_convert_onnx_model&quot;</span>)

<span class="hljs-comment"># Push the onnx model to HF Hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.push_to_hub(<span class="hljs-string">&quot;a_local_path_for_convert_onnx_model&quot;</span>, repository_id=<span class="hljs-string">&quot;my-onnx-repo&quot;</span>, use_auth_token=<span class="hljs-literal">True</span>)`}}),X=new $e({}),L=new Oe({props:{code:`from transformers import AutoTokenizer, pipeline
from optimum.onnxruntime import ORTModelForSeq2SeqLM

model = ORTModelForSeq2SeqLM.from_pretrained("t5-small", from_transformers=True)
tokenizer = AutoTokenizer.from_pretrained("t5-small")

onnx_translation = pipeline("translation_en_to_fr", model=model, tokenizer=tokenizer)

result = onnx_translation("My name is Eustache")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer, pipeline
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSeq2SeqLM

<span class="hljs-comment"># Load the model from the hub and export it to the ONNX format</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSeq2SeqLM.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>, from_transformers=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;t5-small&quot;</span>)

<span class="hljs-comment"># Create a pipeline</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_translation = pipeline(<span class="hljs-string">&quot;translation_en_to_fr&quot;</span>, model=model, tokenizer=tokenizer)

<span class="hljs-meta">&gt;&gt;&gt; </span>result = onnx_translation(<span class="hljs-string">&quot;My name is Eustache&quot;</span>)
[{<span class="hljs-string">&#x27;translation_text&#x27;</span>: <span class="hljs-string">&#x27;Mon nom est Eustache&#x27;</span>}]`}}),{c(){_=o("meta"),le=u(),w=o("h1"),x=o("a"),G=o("span"),O(z.$$.fragment),Ae=u(),J=o("span"),Se=i("Optimum Inference with ONNX Runtime"),me=u(),b=o("p"),Ee=i(`Optimum is a utility package for building and running inference with accelerated runtime like ONNX Runtime.
Optimum can be used to load optimized models from the `),Q=o("a"),Me=i("Hugging Face Hub"),Ne=i(` and create pipelines
to run accelerated inference without rewriting your APIs.`),pe=u(),q=o("h2"),y=o("a"),U=o("span"),O(F.$$.fragment),ze=u(),V=o("span"),Fe=i("Switching from Transformers to Optimum Inference"),ue=u(),d=o("p"),He=i("The Optimum Inference models are API compatible with Hugging Face Transformers models. This means you can just replace your "),K=o("code"),Re=i("AutoModelForXxx"),Ce=i(" class with the corresponding "),Y=o("code"),Pe=i("ORTModelForXxx"),Ie=i(" class in "),Z=o("code"),Xe=i("optimum"),Le=i(". For example, this is how you can use a question answering model in "),ee=o("code"),Qe=i("optimum"),De=i(":"),ce=u(),O(H.$$.fragment),de=u(),f=o("p"),We=i("Optimum Inference also includes methods to convert vanilla Transformers models to optimized ones. Simply pass "),te=o("code"),Be=i("from_transformers=True"),Ge=i(" to the "),ne=o("code"),Je=i("from_pretrained()"),Ue=i(" method, and your model will be loaded and converted to ONNX on-the-fly:"),he=u(),O(R.$$.fragment),fe=u(),k=o("h3"),T=o("a"),oe=o("span"),O(C.$$.fragment),Ve=u(),se=o("span"),Ke=i("Working with the Hugging Face Model Hub"),ge=u(),h=o("p"),Ye=i("The Optimum model classes like "),D=o("a"),Ze=i("ORTModelForSequenceClassification"),et=i(" are integrated with the "),P=o("a"),tt=i("Hugging Face Model Hub"),nt=i(`, which means you can not only
load model from the Hub, but also push your models to the Hub with `),ae=o("code"),ot=i("push_to_hub()"),st=i(` method. Below is an example which downloads a vanilla Transformers model
from the Hub and converts it to an optimum onnxruntime model and pushes it back into a new repository.`),_e=u(),O(I.$$.fragment),we=u(),v=o("h2"),j=o("a"),re=o("span"),O(X.$$.fragment),at=u(),ie=o("span"),rt=i("Export and inference of sequence-to-sequence models"),qe=u(),W=o("p"),it=i(`Sequence-to-sequence (Seq2Seq) models, that generate a new sequence from an input, can also be used when running inference with ONNX Runtime. When Seq2Seq models are exported to the ONNX format, they are decomposed into three parts that are later combined during inference.
Those three parts consist of the encoder, the \u201Cdecoder\u201D (which actually consists of the decoder with the language modeling head), and the \u201Cdecoder\u201D with pre-computed key/values as additional inputs.
This specific export comes from the fact that during the first pass, the decoder has no pre-computed key/values hidden-states, while during the rest of the generation past key/values will be used to speed up sequential decoding.
Here is an example on how you can export a T5 model to the ONNX format and run inference for a translation task:`),ke=u(),O(L.$$.fragment),this.h()},l(e){const r=Ft('[data-svelte="svelte-1phssyn"]',document.head);_=s(r,"META",{name:!0,content:!0}),r.forEach(n),le=c(e),w=s(e,"H1",{class:!0});var xe=a(w);x=s(xe,"A",{id:!0,class:!0,href:!0});var mt=a(x);G=s(mt,"SPAN",{});var pt=a(G);A(z.$$.fragment,pt),pt.forEach(n),mt.forEach(n),Ae=c(xe),J=s(xe,"SPAN",{});var ut=a(J);Se=l(ut,"Optimum Inference with ONNX Runtime"),ut.forEach(n),xe.forEach(n),me=c(e),b=s(e,"P",{});var be=a(b);Ee=l(be,`Optimum is a utility package for building and running inference with accelerated runtime like ONNX Runtime.
Optimum can be used to load optimized models from the `),Q=s(be,"A",{href:!0});var ct=a(Q);Me=l(ct,"Hugging Face Hub"),ct.forEach(n),Ne=l(be,` and create pipelines
to run accelerated inference without rewriting your APIs.`),be.forEach(n),pe=c(e),q=s(e,"H2",{class:!0});var ye=a(q);y=s(ye,"A",{id:!0,class:!0,href:!0});var dt=a(y);U=s(dt,"SPAN",{});var ht=a(U);A(F.$$.fragment,ht),ht.forEach(n),dt.forEach(n),ze=c(ye),V=s(ye,"SPAN",{});var ft=a(V);Fe=l(ft,"Switching from Transformers to Optimum Inference"),ft.forEach(n),ye.forEach(n),ue=c(e),d=s(e,"P",{});var g=a(d);He=l(g,"The Optimum Inference models are API compatible with Hugging Face Transformers models. This means you can just replace your "),K=s(g,"CODE",{});var gt=a(K);Re=l(gt,"AutoModelForXxx"),gt.forEach(n),Ce=l(g," class with the corresponding "),Y=s(g,"CODE",{});var _t=a(Y);Pe=l(_t,"ORTModelForXxx"),_t.forEach(n),Ie=l(g," class in "),Z=s(g,"CODE",{});var wt=a(Z);Xe=l(wt,"optimum"),wt.forEach(n),Le=l(g,". For example, this is how you can use a question answering model in "),ee=s(g,"CODE",{});var qt=a(ee);Qe=l(qt,"optimum"),qt.forEach(n),De=l(g,":"),g.forEach(n),ce=c(e),A(H.$$.fragment,e),de=c(e),f=s(e,"P",{});var B=a(f);We=l(B,"Optimum Inference also includes methods to convert vanilla Transformers models to optimized ones. Simply pass "),te=s(B,"CODE",{});var kt=a(te);Be=l(kt,"from_transformers=True"),kt.forEach(n),Ge=l(B," to the "),ne=s(B,"CODE",{});var vt=a(ne);Je=l(vt,"from_pretrained()"),vt.forEach(n),Ue=l(B," method, and your model will be loaded and converted to ONNX on-the-fly:"),B.forEach(n),he=c(e),A(R.$$.fragment,e),fe=c(e),k=s(e,"H3",{class:!0});var Te=a(k);T=s(Te,"A",{id:!0,class:!0,href:!0});var xt=a(T);oe=s(xt,"SPAN",{});var bt=a(oe);A(C.$$.fragment,bt),bt.forEach(n),xt.forEach(n),Ve=c(Te),se=s(Te,"SPAN",{});var yt=a(se);Ke=l(yt,"Working with the Hugging Face Model Hub"),yt.forEach(n),Te.forEach(n),ge=c(e),h=s(e,"P",{});var $=a(h);Ye=l($,"The Optimum model classes like "),D=s($,"A",{href:!0});var Tt=a(D);Ze=l(Tt,"ORTModelForSequenceClassification"),Tt.forEach(n),et=l($," are integrated with the "),P=s($,"A",{href:!0,rel:!0});var jt=a(P);tt=l(jt,"Hugging Face Model Hub"),jt.forEach(n),nt=l($,`, which means you can not only
load model from the Hub, but also push your models to the Hub with `),ae=s($,"CODE",{});var $t=a(ae);ot=l($t,"push_to_hub()"),$t.forEach(n),st=l($,` method. Below is an example which downloads a vanilla Transformers model
from the Hub and converts it to an optimum onnxruntime model and pushes it back into a new repository.`),$.forEach(n),_e=c(e),A(I.$$.fragment,e),we=c(e),v=s(e,"H2",{class:!0});var je=a(v);j=s(je,"A",{id:!0,class:!0,href:!0});var Ot=a(j);re=s(Ot,"SPAN",{});var At=a(re);A(X.$$.fragment,At),At.forEach(n),Ot.forEach(n),at=c(je),ie=s(je,"SPAN",{});var St=a(ie);rt=l(St,"Export and inference of sequence-to-sequence models"),St.forEach(n),je.forEach(n),qe=c(e),W=s(e,"P",{});var Et=a(W);it=l(Et,`Sequence-to-sequence (Seq2Seq) models, that generate a new sequence from an input, can also be used when running inference with ONNX Runtime. When Seq2Seq models are exported to the ONNX format, they are decomposed into three parts that are later combined during inference.
Those three parts consist of the encoder, the \u201Cdecoder\u201D (which actually consists of the decoder with the language modeling head), and the \u201Cdecoder\u201D with pre-computed key/values as additional inputs.
This specific export comes from the fact that during the first pass, the decoder has no pre-computed key/values hidden-states, while during the rest of the generation past key/values will be used to speed up sequential decoding.
Here is an example on how you can export a T5 model to the ONNX format and run inference for a translation task:`),Et.forEach(n),ke=c(e),A(L.$$.fragment,e),this.h()},h(){m(_,"name","hf:doc:metadata"),m(_,"content",JSON.stringify(Pt)),m(x,"id","optimum-inference-with-onnx-runtime"),m(x,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(x,"href","#optimum-inference-with-onnx-runtime"),m(w,"class","relative group"),m(Q,"href","hf.co/models"),m(y,"id","switching-from-transformers-to-optimum-inference"),m(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(y,"href","#switching-from-transformers-to-optimum-inference"),m(q,"class","relative group"),m(T,"id","working-with-the-hugging-face-model-hub"),m(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(T,"href","#working-with-the-hugging-face-model-hub"),m(k,"class","relative group"),m(D,"href","/docs/optimum/v1.4.1/en/onnxruntime/package_reference/modeling_ort#optimum.onnxruntime.ORTModelForSequenceClassification"),m(P,"href","https://hf.co/models"),m(P,"rel","nofollow"),m(j,"id","export-and-inference-of-sequencetosequence-models"),m(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(j,"href","#export-and-inference-of-sequencetosequence-models"),m(v,"class","relative group")},m(e,r){t(document.head,_),p(e,le,r),p(e,w,r),t(w,x),t(x,G),S(z,G,null),t(w,Ae),t(w,J),t(J,Se),p(e,me,r),p(e,b,r),t(b,Ee),t(b,Q),t(Q,Me),t(b,Ne),p(e,pe,r),p(e,q,r),t(q,y),t(y,U),S(F,U,null),t(q,ze),t(q,V),t(V,Fe),p(e,ue,r),p(e,d,r),t(d,He),t(d,K),t(K,Re),t(d,Ce),t(d,Y),t(Y,Pe),t(d,Ie),t(d,Z),t(Z,Xe),t(d,Le),t(d,ee),t(ee,Qe),t(d,De),p(e,ce,r),S(H,e,r),p(e,de,r),p(e,f,r),t(f,We),t(f,te),t(te,Be),t(f,Ge),t(f,ne),t(ne,Je),t(f,Ue),p(e,he,r),S(R,e,r),p(e,fe,r),p(e,k,r),t(k,T),t(T,oe),S(C,oe,null),t(k,Ve),t(k,se),t(se,Ke),p(e,ge,r),p(e,h,r),t(h,Ye),t(h,D),t(D,Ze),t(h,et),t(h,P),t(P,tt),t(h,nt),t(h,ae),t(ae,ot),t(h,st),p(e,_e,r),S(I,e,r),p(e,we,r),p(e,v,r),t(v,j),t(j,re),S(X,re,null),t(v,at),t(v,ie),t(ie,rt),p(e,qe,r),p(e,W,r),t(W,it),p(e,ke,r),S(L,e,r),ve=!0},p:Ht,i(e){ve||(E(z.$$.fragment,e),E(F.$$.fragment,e),E(H.$$.fragment,e),E(R.$$.fragment,e),E(C.$$.fragment,e),E(I.$$.fragment,e),E(X.$$.fragment,e),E(L.$$.fragment,e),ve=!0)},o(e){M(z.$$.fragment,e),M(F.$$.fragment,e),M(H.$$.fragment,e),M(R.$$.fragment,e),M(C.$$.fragment,e),M(I.$$.fragment,e),M(X.$$.fragment,e),M(L.$$.fragment,e),ve=!1},d(e){n(_),e&&n(le),e&&n(w),N(z),e&&n(me),e&&n(b),e&&n(pe),e&&n(q),N(F),e&&n(ue),e&&n(d),e&&n(ce),N(H,e),e&&n(de),e&&n(f),e&&n(he),N(R,e),e&&n(fe),e&&n(k),N(C),e&&n(ge),e&&n(h),e&&n(_e),N(I,e),e&&n(we),e&&n(v),N(X),e&&n(qe),e&&n(W),e&&n(ke),N(L,e)}}}const Pt={local:"optimum-inference-with-onnx-runtime",sections:[{local:"switching-from-transformers-to-optimum-inference",sections:[{local:"working-with-the-hugging-face-model-hub",title:"Working with the Hugging Face Model Hub"}],title:"Switching from Transformers to Optimum Inference"},{local:"export-and-inference-of-sequencetosequence-models",title:"Export and inference of sequence-to-sequence models"}],title:"Optimum Inference with ONNX Runtime"};function It(lt){return Rt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Dt extends Mt{constructor(_){super();Nt(this,_,It,Ct,zt,{})}}export{Dt as default,Pt as metadata};
