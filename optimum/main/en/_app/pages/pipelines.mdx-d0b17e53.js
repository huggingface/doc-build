import{S as yn,i as xn,s as On,e as o,k as m,w as v,t as i,M as $n,c as a,d as s,m as c,a as n,x as w,h as r,b as d,F as t,g as p,y as q,q as k,o as z,B as j,v as En}from"../chunks/vendor-4918fc3c.js";import{T as Tn}from"../chunks/Tip-3d800dd6.js";import{I as oe}from"../chunks/IconCopyLink-21d338b1.js";import{C as Te}from"../chunks/CodeBlock-99419108.js";function bn(Ct){let u,B,y,T,F,$,ae,Q;return{c(){u=o("p"),B=i("You can also use the "),y=o("code"),T=i("pipeline()"),F=i(" function from Transformers and provide your "),$=o("code"),ae=i("OptimumModel"),Q=i(".")},l(D){u=a(D,"P",{});var E=n(u);B=r(E,"You can also use the "),y=a(E,"CODE",{});var x=n(y);T=r(x,"pipeline()"),x.forEach(s),F=r(E," function from Transformers and provide your "),$=a(E,"CODE",{});var be=n($);ae=r(be,"OptimumModel"),be.forEach(s),Q=r(E,"."),E.forEach(s)},m(D,E){p(D,u,E),t(u,B),t(u,y),t(y,T),t(u,F),t(u,$),t($,ae),t(u,Q)},d(D){D&&s(u)}}}function An(Ct){let u,B,y,T,F,$,ae,Q,D,E,x,be,Pe,ws,qs,ne,ks,zs,Fe,js,ys,Mt,X,Pt,Ae,xs,Ft,Re,Qe,Os,Qt,h,De,Ne,$s,Es,Se,Ie,Ts,bs,He,Le,As,Rs,Ue,We,Cs,Ms,Be,Xe,Ps,Fs,Ye,Ge,Qs,Dt,N,Y,Je,ie,Ds,Ve,Ns,Nt,b,Ss,Ke,Is,Hs,Ze,Ls,Us,et,Ws,Bs,St,Ce,re,Xs,tt,Ys,Gs,It,le,Ht,pe,me,Js,st,Vs,Ks,Lt,ce,Ut,Me,de,Zs,ot,eo,to,Wt,S,G,at,ue,so,nt,oo,Bt,f,ao,it,no,io,he,ro,lo,rt,po,mo,lt,co,uo,pt,ho,fo,Xt,fe,Yt,I,J,mt,ge,go,ct,_o,Gt,O,vo,dt,wo,qo,_e,ko,zo,ut,jo,yo,ht,xo,Oo,Jt,ve,Vt,H,V,ft,we,$o,gt,Eo,Kt,g,To,_t,bo,Ao,vt,Ro,Co,wt,Mo,Po,qt,Fo,Qo,kt,Do,No,Zt,L,K,zt,qe,So,ke,Io,jt,Ho,Lo,es,ze,ts,U,Z,yt,je,Uo,ye,Wo,xt,Bo,Xo,ss,xe,os,W,ee,Ot,Oe,Yo,$t,Go,as,_,Jo,Et,Vo,Ko,Tt,Zo,ea,bt,ta,sa,At,oa,aa,Rt,na,ia,ns,$e,is;return $=new oe({}),X=new Tn({props:{$$slots:{default:[bn]},$$scope:{ctx:Ct}}}),ie=new oe({}),le=new Te({props:{code:`from optimum.pipelines import pipeline

classifier = pipeline(task="text-classification", accelerator="ort")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = pipeline(task=<span class="hljs-string">&quot;text-classification&quot;</span>, accelerator=<span class="hljs-string">&quot;ort&quot;</span>)
`}}),ce=new Te({props:{code:'classifier("I like you. I love you.")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>classifier(<span class="hljs-string">&quot;I like you. I love you.&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;POSITIVE&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9998838901519775</span>}]`}}),ue=new oe({}),fe=new Te({props:{code:`from transformers import AutoTokenizer
from optimum.onnxruntime import ORTModelForQuestionAnswering
from optimum.pipelines import pipeline

tokenizer = AutoTokenizer.from_pretrained("deepset/roberta-base-squad2")
# loading the pytorch checkpoint and converting to ORT format by providing the from_transformers=True parameter
model = ORTModelForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2",from_transformers=True)

onnx_qa = pipeline("question-answering", model=model, tokenizer=tokenizer)
question = "What's my name?"
context = "My name is Philipp and I live in Nuremberg."

pred = onnx_qa(question=question, context=context)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading the pytorch checkpoint and converting to ORT format by providing the from_transformers=True parameter</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>,from_transformers=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_qa = pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;What&#x27;s my name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>context = <span class="hljs-string">&quot;My name is Philipp and I live in Nuremberg.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),ge=new oe({}),ve=new Te({props:{code:`from transformers import AutoTokenizer
from optimum.onnxruntime import ORTModelForQuestionAnswering
from optimum.pipelines import pipeline

tokenizer = AutoTokenizer.from_pretrained("optimum/roberta-base-squad2")
# loading already converted and optimized ORT checkpoint for inference
model = ORTModelForQuestionAnswering.from_pretrained("optimum/roberta-base-squad2")

onnx_qa = pipeline("question-answering", model=model, tokenizer=tokenizer)
question = "What's my name?"
context = "My name is Philipp and I live in Nuremberg."

pred = onnx_qa(question=question, context=context)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;optimum/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># loading already converted and optimized ORT checkpoint for inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;optimum/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_qa = pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;What&#x27;s my name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>context = <span class="hljs-string">&quot;My name is Philipp and I live in Nuremberg.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),we=new oe({}),qe=new oe({}),ze=new Te({props:{code:`from pathlib import Path
from optimum.onnxruntime import ORTModelForSequenceClassification, ORTQuantizer
from optimum.onnxruntime.configuration import AutoQuantizationConfig
from optimum.pipelines import pipeline
from transformers import AutoTokenizer

model_id = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(model_id)
save_path = Path("optimum_model")
save_path.mkdir(exist_ok=True)

quantizer = ORTQuantizer.from_pretrained(model_id, feature="sequence-classification")
qconfig = AutoQuantizationConfig.avx512_vnni(is_static=False, per_channel=True)

quantizer.export(
quantizer.model.config.save_pretrained(save_path) # saves config.json 

model = ORTModelForSequenceClassification.from_pretrained(save_path,file_name="model-quantized.onnx")

onnx_clx = pipeline("text-classification", model=model, tokenizer=tokenizer)
text = "I like the new ORT pipeline"
pred = onnx_clx(text)
print(pred)

tokenizer.save_pretrained("new_path_for_directory")
model.save_pretrained("new_path_for_directory")
model.push_to_hub("new_path_for_directory",`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pathlib <span class="hljs-keyword">import</span> Path
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification, ORTQuantizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> AutoQuantizationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-comment"># define model_id and load tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_id = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_id)
<span class="hljs-meta">&gt;&gt;&gt; </span>save_path = Path(<span class="hljs-string">&quot;optimum_model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>save_path.mkdir(exist_ok=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># use ORTQuantizer to export the model and define quantization configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer = ORTQuantizer.from_pretrained(model_id, feature=<span class="hljs-string">&quot;sequence-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>qconfig = AutoQuantizationConfig.avx512_vnni(is_static=<span class="hljs-literal">False</span>, per_channel=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># apply the quantization configuration to the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.export(
    onnx_model_path=save_path / <span class="hljs-string">&quot;model.onnx&quot;</span>,
    onnx_quantized_model_output_path=save_path / <span class="hljs-string">&quot;model-quantized.onnx&quot;</span>,
    quantization_config=qconfig,
    )
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.model.config.save_pretrained(save_path) <span class="hljs-comment"># saves config.json </span>

<span class="hljs-comment"># load optimized model from local path or repository</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(save_path,file_name=<span class="hljs-string">&quot;model-quantized.onnx&quot;</span>)

<span class="hljs-comment"># create transformers pipeline</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_clx = pipeline(<span class="hljs-string">&quot;text-classification&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;I like the new ORT pipeline&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_clx(text)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(pred)

<span class="hljs-comment"># save model &amp; push model to the hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.push_to_hub(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>,
                  repository_id=<span class="hljs-string">&quot;my-onnx-repo&quot;</span>,
                  use_auth_token=<span class="hljs-literal">True</span>
                  )`}}),je=new oe({}),xe=new Te({props:{code:`from pathlib import Path
from optimum.onnxruntime import ORTModelForSequenceClassification, ORTOptimizer
from optimum.onnxruntime.configuration import OptimizationConfig
from optimum.pipelines import pipeline

model_id = "distilbert-base-uncased-finetuned-sst-2-english"
tokenizer = AutoTokenizer.from_pretrained(model_id)
save_path = Path("optimum_model")
save_path.mkdir(exist_ok=True)

optimizer = ORTOptimizer.from_pretrained(model_id, feature="sequence-classification")
optimization_config = OptimizationConfig(optimization_level=2)

optimizer.export(
optimizer.model.config.save_pretrained(save_path) # saves config.json 

model = ORTModelForSequenceClassification.from_pretrained(save_path,file_name="model-optimized.onnx")

onnx_clx = pipeline("text-classification", model=model, tokenizer=tokenizer)
text = "I like the new ORT pipeline"
pred = onnx_clx(text)
print(pred)

tokenizer.save_pretrained("new_path_for_directory")
model.save_pretrained("new_path_for_directory")
model.push_to_hub("new_path_for_directory",`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> pathlib <span class="hljs-keyword">import</span> Path
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification, ORTOptimizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> OptimizationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-comment"># define model_id and load tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_id = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_id)
<span class="hljs-meta">&gt;&gt;&gt; </span>save_path = Path(<span class="hljs-string">&quot;optimum_model&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>save_path.mkdir(exist_ok=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># use ORTOptimizer to export the model and define quantization configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = ORTOptimizer.from_pretrained(model_id, feature=<span class="hljs-string">&quot;sequence-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>optimization_config = OptimizationConfig(optimization_level=<span class="hljs-number">2</span>)

<span class="hljs-comment"># apply the optimization configuration to the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer.export(
    onnx_model_path=save_path / <span class="hljs-string">&quot;model.onnx&quot;</span>,
    onnx_optimized_model_output_path=save_path / <span class="hljs-string">&quot;model-optimized.onnx&quot;</span>,
    optimization_config=optimization_config,
)
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer.model.config.save_pretrained(save_path) <span class="hljs-comment"># saves config.json </span>

<span class="hljs-comment"># load optimized model from local path or repository</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(save_path,file_name=<span class="hljs-string">&quot;model-optimized.onnx&quot;</span>)

<span class="hljs-comment"># create transformers pipeline</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_clx = pipeline(<span class="hljs-string">&quot;text-classification&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;I like the new ORT pipeline&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_clx(text)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(pred)

<span class="hljs-comment"># save model &amp; push model to the hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.push_to_hub(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>,
                  repository_id=<span class="hljs-string">&quot;my-onnx-repo&quot;</span>,
                  use_auth_token=<span class="hljs-literal">True</span>)`}}),Oe=new oe({}),$e=new Te({props:{code:`from transformers import AutoTokenizer, pipeline
-from transformers import AutoModelForQuestionAnswering
+from optimum.onnxruntime import ORTModelForQuestionAnswering

-model = AutoModelForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2")
+model = ORTModelForQuestionAnswering.from_transformers("optimum/roberta-base-squad2")
tokenizer = AutoTokenizer.from_pretrained("deepset/roberta-base-squad2")

onnx_qa = pipeline("question-answering",model=model,tokenizer=tokenizer)

question = "What's my name?"
context = "My name is Philipp and I live in Nuremberg."
pred = onnx_qa(question, context)`,highlighted:`from transformers import AutoTokenizer, pipeline
<span class="hljs-deletion">-from transformers import AutoModelForQuestionAnswering</span>
<span class="hljs-addition">+from optimum.onnxruntime import ORTModelForQuestionAnswering</span>

<span class="hljs-deletion">-model = AutoModelForQuestionAnswering.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)</span>
<span class="hljs-addition">+model = ORTModelForQuestionAnswering.from_transformers(&quot;optimum/roberta-base-squad2&quot;)</span>
tokenizer = AutoTokenizer.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)

onnx_qa = pipeline(&quot;question-answering&quot;,model=model,tokenizer=tokenizer)

question = &quot;What&#x27;s my name?&quot;
context = &quot;My name is Philipp and I live in Nuremberg.&quot;
pred = onnx_qa(question, context)`}}),{c(){u=o("meta"),B=m(),y=o("h1"),T=o("a"),F=o("span"),v($.$$.fragment),ae=m(),Q=o("span"),D=i("Optimum pipelines for inference"),E=m(),x=o("p"),be=i("The "),Pe=o("code"),ws=i("pipeline"),qs=i(" makes it simple to use models from the "),ne=o("a"),ks=i("Model Hub"),zs=i(` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),Fe=o("code"),js=i("pipeline"),ys=i("! This tutorial will teach you to:"),Mt=m(),v(X.$$.fragment),Pt=m(),Ae=o("p"),xs=i("Currenlty supported tasks are:"),Ft=m(),Re=o("p"),Qe=o("strong"),Os=i("Onnx Runtime"),Qt=m(),h=o("ul"),De=o("li"),Ne=o("code"),$s=i("feature-extraction"),Es=m(),Se=o("li"),Ie=o("code"),Ts=i("text-classification"),bs=m(),He=o("li"),Le=o("code"),As=i("token-classification"),Rs=m(),Ue=o("li"),We=o("code"),Cs=i("question-answering"),Ms=m(),Be=o("li"),Xe=o("code"),Ps=i("zero-shot-classification"),Fs=m(),Ye=o("li"),Ge=o("code"),Qs=i("text-generation"),Dt=m(),N=o("h2"),Y=o("a"),Je=o("span"),v(ie.$$.fragment),Ds=m(),Ve=o("span"),Ns=i("Optimum pipeline usage"),Nt=m(),b=o("p"),Ss=i("While each task has an associated [~"),Ke=o("code"),Is=i("pipeline"),Hs=i("], which it is simpler to use the general [~"),Ze=o("code"),Ls=i("pipeline"),Us=i(`] abstraction which contains all the specific task pipelines.
The [~`),et=o("code"),Ws=i("pipeline"),Bs=i("] automatically loads a default model and tokenizer capable of inference for your task."),St=m(),Ce=o("ol"),re=o("li"),Xs=i("Start by creating a [~"),tt=o("code"),Ys=i("pipeline"),Gs=i("] and specify an inference task:"),It=m(),v(le.$$.fragment),Ht=m(),pe=o("ol"),me=o("li"),Js=i("Pass your input text to the [~"),st=o("code"),Vs=i("pipeline"),Ks=i("]:"),Lt=m(),v(ce.$$.fragment),Ut=m(),Me=o("p"),de=o("em"),Zs=i("Note: The default models used in the [~"),ot=o("code"),eo=i("pipeline"),to=i("] are not optimized or quantized, there won\u2019t be an performance improvement compared to there pytorch counter parts."),Wt=m(),S=o("h3"),G=o("a"),at=o("span"),v(ue.$$.fragment),so=m(),nt=o("span"),oo=i("Using vanilla Transformers model and converting to ONNX"),Bt=m(),f=o("p"),ao=i("The "),it=o("code"),no=i("pipeline"),io=i(" accepts any supported model from the "),he=o("a"),ro=i("Model Hub"),lo=i(`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),rt=o("code"),po=i('from_pretrained("{model_id}",from_transformers=True)'),mo=i(" method associated with the "),lt=o("code"),co=i("ORTModelFor*"),uo=i("\n[`AutoTokenizer\u2019] class. For example, here\u2019s how you can load the "),pt=o("code"),ho=i("ORTModelForQuestionAnswering"),fo=i(" class for question answering:"),Xt=m(),v(fe.$$.fragment),Yt=m(),I=o("h3"),J=o("a"),mt=o("span"),v(ge.$$.fragment),go=m(),ct=o("span"),_o=i("Using Optimum models"),Gt=m(),O=o("p"),vo=i("The "),dt=o("code"),wo=i("pipeline"),qo=i(" is tightly integrated with "),_e=o("a"),ko=i("Model Hub"),zo=i(` and can load optimized models directly, e.g. those created with OnnxRuntime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ut=o("code"),jo=i("from_pretrained()"),yo=i(" method associated with the corresponding "),ht=o("code"),xo=i("ORTModelFor*"),Oo=i("\nand [`AutoTokenizer\u2019] class. For example, here\u2019s how you can load an optimized model for question answering:"),Jt=m(),v(ve.$$.fragment),Vt=m(),H=o("h3"),V=o("a"),ft=o("span"),v(we.$$.fragment),$o=m(),gt=o("span"),Eo=i("Optimizing and Quantizing in Pipelines"),Kt=m(),g=o("p"),To=i("The "),_t=o("code"),bo=i("pipeline"),Ao=i(" can not only run inference on vanilla Onnxruntime checkpoints you can also use checkpoints optimized with "),vt=o("code"),Ro=i("ORTQuantizer"),Co=i(" and "),wt=o("code"),Mo=i("ORTOptimizer"),Po=i(`
Below you can find two examples on how you could [~`),qt=o("code"),Fo=i("ORTOptimizer"),Qo=i("] and [~"),kt=o("code"),Do=i("ORTQuantizer"),No=i("] to optimize/quantize your model and use it for inference afterwards."),Zt=m(),L=o("h3"),K=o("a"),zt=o("span"),v(qe.$$.fragment),So=m(),ke=o("span"),Io=i("Quantizing with [~"),jt=o("code"),Ho=i("ORTQuantizer"),Lo=i("]"),es=m(),v(ze.$$.fragment),ts=m(),U=o("h3"),Z=o("a"),yt=o("span"),v(je.$$.fragment),Uo=m(),ye=o("span"),Wo=i("Optimizing with [~"),xt=o("code"),Bo=i("ORTOptimizer"),Xo=i("]"),ss=m(),v(xe.$$.fragment),os=m(),W=o("h2"),ee=o("a"),Ot=o("span"),v(Oe.$$.fragment),Yo=m(),$t=o("span"),Go=i("Transformers pipeline usage"),as=m(),_=o("p"),Jo=i("The "),Et=o("code"),Vo=i("pipeline"),Ko=i(" is just a light wrapper around the "),Tt=o("code"),Zo=i("transformers.pipeline"),ea=i(` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),bt=o("code"),ta=i("transformers.pipeline"),sa=i(" and just replace your "),At=o("code"),oa=i("AutoFor*"),aa=i(` with the optimum
`),Rt=o("code"),na=i("ORTModelFor*"),ia=i(" class."),ns=m(),v($e.$$.fragment),this.h()},l(e){const l=$n('[data-svelte="svelte-1phssyn"]',document.head);u=a(l,"META",{name:!0,content:!0}),l.forEach(s),B=c(e),y=a(e,"H1",{class:!0});var Ee=n(y);T=a(Ee,"A",{id:!0,class:!0,href:!0});var ra=n(T);F=a(ra,"SPAN",{});var la=n(F);w($.$$.fragment,la),la.forEach(s),ra.forEach(s),ae=c(Ee),Q=a(Ee,"SPAN",{});var pa=n(Q);D=r(pa,"Optimum pipelines for inference"),pa.forEach(s),Ee.forEach(s),E=c(e),x=a(e,"P",{});var te=n(x);be=r(te,"The "),Pe=a(te,"CODE",{});var ma=n(Pe);ws=r(ma,"pipeline"),ma.forEach(s),qs=r(te," makes it simple to use models from the "),ne=a(te,"A",{href:!0,rel:!0});var ca=n(ne);ks=r(ca,"Model Hub"),ca.forEach(s),zs=r(te,` for accelerated inference on a variety of tasks such as text classification.
Even if you don\u2019t have experience with a specific modality or understand the code powering the models, you can still use them with the `),Fe=a(te,"CODE",{});var da=n(Fe);js=r(da,"pipeline"),da.forEach(s),ys=r(te,"! This tutorial will teach you to:"),te.forEach(s),Mt=c(e),w(X.$$.fragment,e),Pt=c(e),Ae=a(e,"P",{});var ua=n(Ae);xs=r(ua,"Currenlty supported tasks are:"),ua.forEach(s),Ft=c(e),Re=a(e,"P",{});var ha=n(Re);Qe=a(ha,"STRONG",{});var fa=n(Qe);Os=r(fa,"Onnx Runtime"),fa.forEach(s),ha.forEach(s),Qt=c(e),h=a(e,"UL",{});var A=n(h);De=a(A,"LI",{});var ga=n(De);Ne=a(ga,"CODE",{});var _a=n(Ne);$s=r(_a,"feature-extraction"),_a.forEach(s),ga.forEach(s),Es=c(A),Se=a(A,"LI",{});var va=n(Se);Ie=a(va,"CODE",{});var wa=n(Ie);Ts=r(wa,"text-classification"),wa.forEach(s),va.forEach(s),bs=c(A),He=a(A,"LI",{});var qa=n(He);Le=a(qa,"CODE",{});var ka=n(Le);As=r(ka,"token-classification"),ka.forEach(s),qa.forEach(s),Rs=c(A),Ue=a(A,"LI",{});var za=n(Ue);We=a(za,"CODE",{});var ja=n(We);Cs=r(ja,"question-answering"),ja.forEach(s),za.forEach(s),Ms=c(A),Be=a(A,"LI",{});var ya=n(Be);Xe=a(ya,"CODE",{});var xa=n(Xe);Ps=r(xa,"zero-shot-classification"),xa.forEach(s),ya.forEach(s),Fs=c(A),Ye=a(A,"LI",{});var Oa=n(Ye);Ge=a(Oa,"CODE",{});var $a=n(Ge);Qs=r($a,"text-generation"),$a.forEach(s),Oa.forEach(s),A.forEach(s),Dt=c(e),N=a(e,"H2",{class:!0});var rs=n(N);Y=a(rs,"A",{id:!0,class:!0,href:!0});var Ea=n(Y);Je=a(Ea,"SPAN",{});var Ta=n(Je);w(ie.$$.fragment,Ta),Ta.forEach(s),Ea.forEach(s),Ds=c(rs),Ve=a(rs,"SPAN",{});var ba=n(Ve);Ns=r(ba,"Optimum pipeline usage"),ba.forEach(s),rs.forEach(s),Nt=c(e),b=a(e,"P",{});var se=n(b);Ss=r(se,"While each task has an associated [~"),Ke=a(se,"CODE",{});var Aa=n(Ke);Is=r(Aa,"pipeline"),Aa.forEach(s),Hs=r(se,"], which it is simpler to use the general [~"),Ze=a(se,"CODE",{});var Ra=n(Ze);Ls=r(Ra,"pipeline"),Ra.forEach(s),Us=r(se,`] abstraction which contains all the specific task pipelines.
The [~`),et=a(se,"CODE",{});var Ca=n(et);Ws=r(Ca,"pipeline"),Ca.forEach(s),Bs=r(se,"] automatically loads a default model and tokenizer capable of inference for your task."),se.forEach(s),St=c(e),Ce=a(e,"OL",{});var Ma=n(Ce);re=a(Ma,"LI",{});var ls=n(re);Xs=r(ls,"Start by creating a [~"),tt=a(ls,"CODE",{});var Pa=n(tt);Ys=r(Pa,"pipeline"),Pa.forEach(s),Gs=r(ls,"] and specify an inference task:"),ls.forEach(s),Ma.forEach(s),It=c(e),w(le.$$.fragment,e),Ht=c(e),pe=a(e,"OL",{start:!0});var Fa=n(pe);me=a(Fa,"LI",{});var ps=n(me);Js=r(ps,"Pass your input text to the [~"),st=a(ps,"CODE",{});var Qa=n(st);Vs=r(Qa,"pipeline"),Qa.forEach(s),Ks=r(ps,"]:"),ps.forEach(s),Fa.forEach(s),Lt=c(e),w(ce.$$.fragment,e),Ut=c(e),Me=a(e,"P",{});var Da=n(Me);de=a(Da,"EM",{});var ms=n(de);Zs=r(ms,"Note: The default models used in the [~"),ot=a(ms,"CODE",{});var Na=n(ot);eo=r(Na,"pipeline"),Na.forEach(s),to=r(ms,"] are not optimized or quantized, there won\u2019t be an performance improvement compared to there pytorch counter parts."),ms.forEach(s),Da.forEach(s),Wt=c(e),S=a(e,"H3",{class:!0});var cs=n(S);G=a(cs,"A",{id:!0,class:!0,href:!0});var Sa=n(G);at=a(Sa,"SPAN",{});var Ia=n(at);w(ue.$$.fragment,Ia),Ia.forEach(s),Sa.forEach(s),so=c(cs),nt=a(cs,"SPAN",{});var Ha=n(nt);oo=r(Ha,"Using vanilla Transformers model and converting to ONNX"),Ha.forEach(s),cs.forEach(s),Bt=c(e),f=a(e,"P",{});var R=n(f);ao=r(R,"The "),it=a(R,"CODE",{});var La=n(it);no=r(La,"pipeline"),La.forEach(s),io=r(R," accepts any supported model from the "),he=a(R,"A",{href:!0,rel:!0});var Ua=n(he);ro=r(Ua,"Model Hub"),Ua.forEach(s),lo=r(R,`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),rt=a(R,"CODE",{});var Wa=n(rt);po=r(Wa,'from_pretrained("{model_id}",from_transformers=True)'),Wa.forEach(s),mo=r(R," method associated with the "),lt=a(R,"CODE",{});var Ba=n(lt);co=r(Ba,"ORTModelFor*"),Ba.forEach(s),uo=r(R,"\n[`AutoTokenizer\u2019] class. For example, here\u2019s how you can load the "),pt=a(R,"CODE",{});var Xa=n(pt);ho=r(Xa,"ORTModelForQuestionAnswering"),Xa.forEach(s),fo=r(R," class for question answering:"),R.forEach(s),Xt=c(e),w(fe.$$.fragment,e),Yt=c(e),I=a(e,"H3",{class:!0});var ds=n(I);J=a(ds,"A",{id:!0,class:!0,href:!0});var Ya=n(J);mt=a(Ya,"SPAN",{});var Ga=n(mt);w(ge.$$.fragment,Ga),Ga.forEach(s),Ya.forEach(s),go=c(ds),ct=a(ds,"SPAN",{});var Ja=n(ct);_o=r(Ja,"Using Optimum models"),Ja.forEach(s),ds.forEach(s),Gt=c(e),O=a(e,"P",{});var P=n(O);vo=r(P,"The "),dt=a(P,"CODE",{});var Va=n(dt);wo=r(Va,"pipeline"),Va.forEach(s),qo=r(P," is tightly integrated with "),_e=a(P,"A",{href:!0,rel:!0});var Ka=n(_e);ko=r(Ka,"Model Hub"),Ka.forEach(s),zo=r(P,` and can load optimized models directly, e.g. those created with OnnxRuntime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ut=a(P,"CODE",{});var Za=n(ut);jo=r(Za,"from_pretrained()"),Za.forEach(s),yo=r(P," method associated with the corresponding "),ht=a(P,"CODE",{});var en=n(ht);xo=r(en,"ORTModelFor*"),en.forEach(s),Oo=r(P,"\nand [`AutoTokenizer\u2019] class. For example, here\u2019s how you can load an optimized model for question answering:"),P.forEach(s),Jt=c(e),w(ve.$$.fragment,e),Vt=c(e),H=a(e,"H3",{class:!0});var us=n(H);V=a(us,"A",{id:!0,class:!0,href:!0});var tn=n(V);ft=a(tn,"SPAN",{});var sn=n(ft);w(we.$$.fragment,sn),sn.forEach(s),tn.forEach(s),$o=c(us),gt=a(us,"SPAN",{});var on=n(gt);Eo=r(on,"Optimizing and Quantizing in Pipelines"),on.forEach(s),us.forEach(s),Kt=c(e),g=a(e,"P",{});var C=n(g);To=r(C,"The "),_t=a(C,"CODE",{});var an=n(_t);bo=r(an,"pipeline"),an.forEach(s),Ao=r(C," can not only run inference on vanilla Onnxruntime checkpoints you can also use checkpoints optimized with "),vt=a(C,"CODE",{});var nn=n(vt);Ro=r(nn,"ORTQuantizer"),nn.forEach(s),Co=r(C," and "),wt=a(C,"CODE",{});var rn=n(wt);Mo=r(rn,"ORTOptimizer"),rn.forEach(s),Po=r(C,`
Below you can find two examples on how you could [~`),qt=a(C,"CODE",{});var ln=n(qt);Fo=r(ln,"ORTOptimizer"),ln.forEach(s),Qo=r(C,"] and [~"),kt=a(C,"CODE",{});var pn=n(kt);Do=r(pn,"ORTQuantizer"),pn.forEach(s),No=r(C,"] to optimize/quantize your model and use it for inference afterwards."),C.forEach(s),Zt=c(e),L=a(e,"H3",{class:!0});var hs=n(L);K=a(hs,"A",{id:!0,class:!0,href:!0});var mn=n(K);zt=a(mn,"SPAN",{});var cn=n(zt);w(qe.$$.fragment,cn),cn.forEach(s),mn.forEach(s),So=c(hs),ke=a(hs,"SPAN",{});var fs=n(ke);Io=r(fs,"Quantizing with [~"),jt=a(fs,"CODE",{});var dn=n(jt);Ho=r(dn,"ORTQuantizer"),dn.forEach(s),Lo=r(fs,"]"),fs.forEach(s),hs.forEach(s),es=c(e),w(ze.$$.fragment,e),ts=c(e),U=a(e,"H3",{class:!0});var gs=n(U);Z=a(gs,"A",{id:!0,class:!0,href:!0});var un=n(Z);yt=a(un,"SPAN",{});var hn=n(yt);w(je.$$.fragment,hn),hn.forEach(s),un.forEach(s),Uo=c(gs),ye=a(gs,"SPAN",{});var _s=n(ye);Wo=r(_s,"Optimizing with [~"),xt=a(_s,"CODE",{});var fn=n(xt);Bo=r(fn,"ORTOptimizer"),fn.forEach(s),Xo=r(_s,"]"),_s.forEach(s),gs.forEach(s),ss=c(e),w(xe.$$.fragment,e),os=c(e),W=a(e,"H2",{class:!0});var vs=n(W);ee=a(vs,"A",{id:!0,class:!0,href:!0});var gn=n(ee);Ot=a(gn,"SPAN",{});var _n=n(Ot);w(Oe.$$.fragment,_n),_n.forEach(s),gn.forEach(s),Yo=c(vs),$t=a(vs,"SPAN",{});var vn=n($t);Go=r(vn,"Transformers pipeline usage"),vn.forEach(s),vs.forEach(s),as=c(e),_=a(e,"P",{});var M=n(_);Jo=r(M,"The "),Et=a(M,"CODE",{});var wn=n(Et);Vo=r(wn,"pipeline"),wn.forEach(s),Ko=r(M," is just a light wrapper around the "),Tt=a(M,"CODE",{});var qn=n(Tt);Zo=r(qn,"transformers.pipeline"),qn.forEach(s),ea=r(M,` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),bt=a(M,"CODE",{});var kn=n(bt);ta=r(kn,"transformers.pipeline"),kn.forEach(s),sa=r(M," and just replace your "),At=a(M,"CODE",{});var zn=n(At);oa=r(zn,"AutoFor*"),zn.forEach(s),aa=r(M,` with the optimum
`),Rt=a(M,"CODE",{});var jn=n(Rt);na=r(jn,"ORTModelFor*"),jn.forEach(s),ia=r(M," class."),M.forEach(s),ns=c(e),w($e.$$.fragment,e),this.h()},h(){d(u,"name","hf:doc:metadata"),d(u,"content",JSON.stringify(Rn)),d(T,"id","optimum-pipelines-for-inference"),d(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(T,"href","#optimum-pipelines-for-inference"),d(y,"class","relative group"),d(ne,"href","https://huggingface.co/models"),d(ne,"rel","nofollow"),d(Y,"id","optimum-pipeline-usage"),d(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Y,"href","#optimum-pipeline-usage"),d(N,"class","relative group"),d(pe,"start","2"),d(G,"id","using-vanilla-transformers-model-and-converting-to-onnx"),d(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(G,"href","#using-vanilla-transformers-model-and-converting-to-onnx"),d(S,"class","relative group"),d(he,"href","https://huggingface.co/models"),d(he,"rel","nofollow"),d(J,"id","using-optimum-models"),d(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(J,"href","#using-optimum-models"),d(I,"class","relative group"),d(_e,"href","https://huggingface.co/models"),d(_e,"rel","nofollow"),d(V,"id","optimizing-and-quantizing-in-pipelines"),d(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(V,"href","#optimizing-and-quantizing-in-pipelines"),d(H,"class","relative group"),d(K,"id","quantizing-with-ortquantizer"),d(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(K,"href","#quantizing-with-ortquantizer"),d(L,"class","relative group"),d(Z,"id","optimizing-with-ortoptimizer"),d(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Z,"href","#optimizing-with-ortoptimizer"),d(U,"class","relative group"),d(ee,"id","transformers-pipeline-usage"),d(ee,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(ee,"href","#transformers-pipeline-usage"),d(W,"class","relative group")},m(e,l){t(document.head,u),p(e,B,l),p(e,y,l),t(y,T),t(T,F),q($,F,null),t(y,ae),t(y,Q),t(Q,D),p(e,E,l),p(e,x,l),t(x,be),t(x,Pe),t(Pe,ws),t(x,qs),t(x,ne),t(ne,ks),t(x,zs),t(x,Fe),t(Fe,js),t(x,ys),p(e,Mt,l),q(X,e,l),p(e,Pt,l),p(e,Ae,l),t(Ae,xs),p(e,Ft,l),p(e,Re,l),t(Re,Qe),t(Qe,Os),p(e,Qt,l),p(e,h,l),t(h,De),t(De,Ne),t(Ne,$s),t(h,Es),t(h,Se),t(Se,Ie),t(Ie,Ts),t(h,bs),t(h,He),t(He,Le),t(Le,As),t(h,Rs),t(h,Ue),t(Ue,We),t(We,Cs),t(h,Ms),t(h,Be),t(Be,Xe),t(Xe,Ps),t(h,Fs),t(h,Ye),t(Ye,Ge),t(Ge,Qs),p(e,Dt,l),p(e,N,l),t(N,Y),t(Y,Je),q(ie,Je,null),t(N,Ds),t(N,Ve),t(Ve,Ns),p(e,Nt,l),p(e,b,l),t(b,Ss),t(b,Ke),t(Ke,Is),t(b,Hs),t(b,Ze),t(Ze,Ls),t(b,Us),t(b,et),t(et,Ws),t(b,Bs),p(e,St,l),p(e,Ce,l),t(Ce,re),t(re,Xs),t(re,tt),t(tt,Ys),t(re,Gs),p(e,It,l),q(le,e,l),p(e,Ht,l),p(e,pe,l),t(pe,me),t(me,Js),t(me,st),t(st,Vs),t(me,Ks),p(e,Lt,l),q(ce,e,l),p(e,Ut,l),p(e,Me,l),t(Me,de),t(de,Zs),t(de,ot),t(ot,eo),t(de,to),p(e,Wt,l),p(e,S,l),t(S,G),t(G,at),q(ue,at,null),t(S,so),t(S,nt),t(nt,oo),p(e,Bt,l),p(e,f,l),t(f,ao),t(f,it),t(it,no),t(f,io),t(f,he),t(he,ro),t(f,lo),t(f,rt),t(rt,po),t(f,mo),t(f,lt),t(lt,co),t(f,uo),t(f,pt),t(pt,ho),t(f,fo),p(e,Xt,l),q(fe,e,l),p(e,Yt,l),p(e,I,l),t(I,J),t(J,mt),q(ge,mt,null),t(I,go),t(I,ct),t(ct,_o),p(e,Gt,l),p(e,O,l),t(O,vo),t(O,dt),t(dt,wo),t(O,qo),t(O,_e),t(_e,ko),t(O,zo),t(O,ut),t(ut,jo),t(O,yo),t(O,ht),t(ht,xo),t(O,Oo),p(e,Jt,l),q(ve,e,l),p(e,Vt,l),p(e,H,l),t(H,V),t(V,ft),q(we,ft,null),t(H,$o),t(H,gt),t(gt,Eo),p(e,Kt,l),p(e,g,l),t(g,To),t(g,_t),t(_t,bo),t(g,Ao),t(g,vt),t(vt,Ro),t(g,Co),t(g,wt),t(wt,Mo),t(g,Po),t(g,qt),t(qt,Fo),t(g,Qo),t(g,kt),t(kt,Do),t(g,No),p(e,Zt,l),p(e,L,l),t(L,K),t(K,zt),q(qe,zt,null),t(L,So),t(L,ke),t(ke,Io),t(ke,jt),t(jt,Ho),t(ke,Lo),p(e,es,l),q(ze,e,l),p(e,ts,l),p(e,U,l),t(U,Z),t(Z,yt),q(je,yt,null),t(U,Uo),t(U,ye),t(ye,Wo),t(ye,xt),t(xt,Bo),t(ye,Xo),p(e,ss,l),q(xe,e,l),p(e,os,l),p(e,W,l),t(W,ee),t(ee,Ot),q(Oe,Ot,null),t(W,Yo),t(W,$t),t($t,Go),p(e,as,l),p(e,_,l),t(_,Jo),t(_,Et),t(Et,Vo),t(_,Ko),t(_,Tt),t(Tt,Zo),t(_,ea),t(_,bt),t(bt,ta),t(_,sa),t(_,At),t(At,oa),t(_,aa),t(_,Rt),t(Rt,na),t(_,ia),p(e,ns,l),q($e,e,l),is=!0},p(e,[l]){const Ee={};l&2&&(Ee.$$scope={dirty:l,ctx:e}),X.$set(Ee)},i(e){is||(k($.$$.fragment,e),k(X.$$.fragment,e),k(ie.$$.fragment,e),k(le.$$.fragment,e),k(ce.$$.fragment,e),k(ue.$$.fragment,e),k(fe.$$.fragment,e),k(ge.$$.fragment,e),k(ve.$$.fragment,e),k(we.$$.fragment,e),k(qe.$$.fragment,e),k(ze.$$.fragment,e),k(je.$$.fragment,e),k(xe.$$.fragment,e),k(Oe.$$.fragment,e),k($e.$$.fragment,e),is=!0)},o(e){z($.$$.fragment,e),z(X.$$.fragment,e),z(ie.$$.fragment,e),z(le.$$.fragment,e),z(ce.$$.fragment,e),z(ue.$$.fragment,e),z(fe.$$.fragment,e),z(ge.$$.fragment,e),z(ve.$$.fragment,e),z(we.$$.fragment,e),z(qe.$$.fragment,e),z(ze.$$.fragment,e),z(je.$$.fragment,e),z(xe.$$.fragment,e),z(Oe.$$.fragment,e),z($e.$$.fragment,e),is=!1},d(e){s(u),e&&s(B),e&&s(y),j($),e&&s(E),e&&s(x),e&&s(Mt),j(X,e),e&&s(Pt),e&&s(Ae),e&&s(Ft),e&&s(Re),e&&s(Qt),e&&s(h),e&&s(Dt),e&&s(N),j(ie),e&&s(Nt),e&&s(b),e&&s(St),e&&s(Ce),e&&s(It),j(le,e),e&&s(Ht),e&&s(pe),e&&s(Lt),j(ce,e),e&&s(Ut),e&&s(Me),e&&s(Wt),e&&s(S),j(ue),e&&s(Bt),e&&s(f),e&&s(Xt),j(fe,e),e&&s(Yt),e&&s(I),j(ge),e&&s(Gt),e&&s(O),e&&s(Jt),j(ve,e),e&&s(Vt),e&&s(H),j(we),e&&s(Kt),e&&s(g),e&&s(Zt),e&&s(L),j(qe),e&&s(es),j(ze,e),e&&s(ts),e&&s(U),j(je),e&&s(ss),j(xe,e),e&&s(os),e&&s(W),j(Oe),e&&s(as),e&&s(_),e&&s(ns),j($e,e)}}}const Rn={local:"optimum-pipelines-for-inference",sections:[{local:"optimum-pipeline-usage",sections:[{local:"using-vanilla-transformers-model-and-converting-to-onnx",title:"Using vanilla Transformers model and converting to ONNX"},{local:"using-optimum-models",title:"Using Optimum models"},{local:"optimizing-and-quantizing-in-pipelines",title:"Optimizing and Quantizing in Pipelines"},{local:"quantizing-with-ortquantizer",title:"Quantizing with [~`ORTQuantizer`]"},{local:"optimizing-with-ortoptimizer",title:"Optimizing with [~`ORTOptimizer`]"}],title:"Optimum pipeline usage"},{local:"transformers-pipeline-usage",title:"Transformers pipeline usage"}],title:"Optimum pipelines for inference"};function Cn(Ct){return En(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Dn extends yn{constructor(u){super();xn(this,u,Cn,An,On,{})}}export{Dn as default,Rn as metadata};
