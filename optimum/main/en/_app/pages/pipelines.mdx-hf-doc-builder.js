import{S as Qa,i as Sa,s as Da,e as s,k as c,w as q,t as i,M as Ia,c as n,d as o,m as d,a,x as k,h as r,b as m,G as t,g as p,y,q as j,o as O,B as x,v as La}from"../chunks/vendor-hf-doc-builder.js";import{T as Ha}from"../chunks/Tip-hf-doc-builder.js";import{I as ee}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ke}from"../chunks/CodeBlock-hf-doc-builder.js";function Xa(Ft){let h,X,g,$,F;return{c(){h=s("p"),X=i("You can also use the "),g=s("a"),$=i("pipeline()"),F=i(" function from Transformers and provide your Optimum model class."),this.h()},l(T){h=n(T,"P",{});var C=a(h);X=r(C,"You can also use the "),g=n(C,"A",{href:!0,rel:!0});var U=a(g);$=r(U,"pipeline()"),U.forEach(o),F=r(C," function from Transformers and provide your Optimum model class."),C.forEach(o),this.h()},h(){m(g,"href","https://huggingface.co/docs/transformers/main/en/main_classes/pipelines#pipelines"),m(g,"rel","nofollow")},m(T,C){p(T,h,C),t(h,X),t(h,g),t(g,$),t(h,F)},d(T){T&&o(h)}}}function Ua(Ft){let h,X,g,$,F,T,C,U,qo,Pt,M,ko,Me,yo,jo,te,Oo,xo,Qt,W,St,ye,To,Dt,je,Ne,$o,It,u,Fe,Pe,Eo,bo,Qe,Se,Ao,Ro,De,Ie,Co,Mo,Le,He,No,Fo,Xe,Ue,Po,Qo,We,Be,So,Do,Ge,Ye,Io,Lo,Je,Ve,Ho,Xo,Ke,Ze,Uo,Wo,et,tt,Bo,Lt,P,B,ot,oe,Go,st,Yo,Ht,N,Jo,nt,Vo,Ko,at,Zo,es,Xt,Oe,it,ts,Ut,se,Wt,ne,ae,os,rt,ss,ns,Bt,ie,Gt,xe,re,as,lt,is,rs,Yt,Q,G,pt,le,ls,mt,ps,Jt,_,ms,ct,cs,ds,pe,us,fs,dt,hs,gs,ut,_s,vs,Te,ws,zs,Vt,me,Kt,S,Y,ft,ce,qs,ht,ks,Zt,v,ys,gt,js,Os,de,xs,Ts,_t,$s,Es,vt,bs,As,wt,Rs,Cs,eo,ue,to,D,J,zt,fe,Ms,qt,Ns,oo,w,Fs,kt,Ps,Qs,yt,Ss,Ds,jt,Is,Ls,$e,Hs,Xs,Ee,Us,Ws,so,I,V,Ot,he,Bs,be,Gs,xt,Ys,no,ge,ao,L,K,Tt,_e,Js,Ae,Vs,$t,Ks,io,ve,ro,H,Z,Et,we,Zs,bt,en,lo,z,tn,At,on,sn,Rt,nn,an,Ct,rn,ln,Mt,pn,mn,Nt,cn,dn,po,ze,mo;return T=new ee({}),W=new Ha({props:{$$slots:{default:[Xa]},$$scope:{ctx:Ft}}}),oe=new ee({}),se=new ke({props:{code:`from optimum.pipelines import pipeline

classifier = pipeline(task="text-classification", accelerator="ort")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = pipeline(task=<span class="hljs-string">&quot;text-classification&quot;</span>, accelerator=<span class="hljs-string">&quot;ort&quot;</span>)
`}}),ie=new ke({props:{code:'classifier("I like you. I love you.")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>classifier(<span class="hljs-string">&quot;I like you. I love you.&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;POSITIVE&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9998838901519775</span>}]`}}),le=new ee({}),me=new ke({props:{code:`from transformers import AutoTokenizer
from optimum.onnxruntime import ORTModelForQuestionAnswering
from optimum.pipelines import pipeline

tokenizer = AutoTokenizer.from_pretrained("deepset/roberta-base-squad2")
# Loading the pytorch checkpoint and converting to ORT format by providing the from_transformers=True parameter
model = ORTModelForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2",from_transformers=True)

onnx_qa = pipeline("question-answering", model=model, tokenizer=tokenizer)
question = "What's my name?"
context = "My name is Philipp and I live in Nuremberg."

pred = onnx_qa(question=question, context=context)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Loading the pytorch checkpoint and converting to ORT format by providing the from_transformers=True parameter</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;deepset/roberta-base-squad2&quot;</span>,from_transformers=<span class="hljs-literal">True</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_qa = pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;What&#x27;s my name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>context = <span class="hljs-string">&quot;My name is Philipp and I live in Nuremberg.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),ce=new ee({}),ue=new ke({props:{code:`from transformers import AutoTokenizer
from optimum.onnxruntime import ORTModelForQuestionAnswering
from optimum.pipelines import pipeline

tokenizer = AutoTokenizer.from_pretrained("optimum/roberta-base-squad2")
# Loading already converted and optimized ORT checkpoint for inference
model = ORTModelForQuestionAnswering.from_pretrained("optimum/roberta-base-squad2")

onnx_qa = pipeline("question-answering", model=model, tokenizer=tokenizer)
question = "What's my name?"
context = "My name is Philipp and I live in Nuremberg."

pred = onnx_qa(question=question, context=context)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;optimum/roberta-base-squad2&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Loading already converted and optimized ORT checkpoint for inference</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;optimum/roberta-base-squad2&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_qa = pipeline(<span class="hljs-string">&quot;question-answering&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>question = <span class="hljs-string">&quot;What&#x27;s my name?&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>context = <span class="hljs-string">&quot;My name is Philipp and I live in Nuremberg.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),fe=new ee({}),he=new ee({}),ge=new ke({props:{code:`from optimum.onnxruntime import ORTModelForSequenceClassification, ORTQuantizer
from optimum.onnxruntime.configuration import AutoQuantizationConfig
from optimum.pipelines import pipeline
from transformers import AutoTokenizer

model_id = "distilbert-base-uncased-finetuned-sst-2-english"
save_dir = "tmp/onnx/"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = ORTModelForSequenceClassification.from_pretrained(model_id, from_transformers=True)

qconfig = AutoQuantizationConfig.avx512_vnni(is_static=False, per_channel=True)
quantizer = ORTQuantizer.from_pretrained(model)
quantizer.quantize(save_dir=save_dir, quantization_config=qconfig)

model = ORTModelForSequenceClassification.from_pretrained(save_dir, file_name="model_quantized.onnx")

onnx_clx = pipeline("text-classification", model=model, tokenizer=tokenizer)
text = "I like the new ORT pipeline"
pred = onnx_clx(text)
print(pred)

tokenizer.save_pretrained("new_path_for_directory")
model.save_pretrained("new_path_for_directory")
model.push_to_hub("new_path_for_directory", repository_id="my-onnx-repo", use_auth_token=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification, ORTQuantizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> AutoQuantizationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-comment"># Load the tokenizer and export the model to the ONNX format</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_id = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>save_dir = <span class="hljs-string">&quot;tmp/onnx/&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_id)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(model_id, from_transformers=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Load the quantization configuration detailing the quantization we wish to apply</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>qconfig = AutoQuantizationConfig.avx512_vnni(is_static=<span class="hljs-literal">False</span>, per_channel=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer = ORTQuantizer.from_pretrained(model)
<span class="hljs-comment"># Apply dynamic quantization and save the resulting model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.quantize(save_dir=save_dir, quantization_config=qconfig)

<span class="hljs-comment"># Load the quantized model from a local repository</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(save_dir, file_name=<span class="hljs-string">&quot;model_quantized.onnx&quot;</span>)

<span class="hljs-comment"># Create the transformers pipeline</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_clx = pipeline(<span class="hljs-string">&quot;text-classification&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;I like the new ORT pipeline&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_clx(text)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(pred)

<span class="hljs-comment"># Save and push the model to the hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.push_to_hub(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>, repository_id=<span class="hljs-string">&quot;my-onnx-repo&quot;</span>, use_auth_token=<span class="hljs-literal">True</span>)`}}),_e=new ee({}),ve=new ke({props:{code:`from optimum.onnxruntime import ORTModelForSequenceClassification, ORTOptimizer
from optimum.onnxruntime.configuration import OptimizationConfig
from optimum.pipelines import pipeline
from transformers import AutoTokenizer

model_id = "distilbert-base-uncased-finetuned-sst-2-english"
save_dir = "tmp/onnx/"
tokenizer = AutoTokenizer.from_pretrained(model_id)
model = ORTModelForSequenceClassification.from_pretrained(model_id, from_transformers=True)

optimization_config = OptimizationConfig(optimization_level=2)
optimizer = ORTOptimizer.from_pretrained(model)
optimizer.optimize(save_dir=save_dir, optimization_config=optimization_config)

model = ORTModelForSequenceClassification.from_pretrained(save_dir, file_name="model_optimized.onnx")

onnx_clx = pipeline("text-classification", model=model, tokenizer=tokenizer)
text = "I like the new ORT pipeline"
pred = onnx_clx(text)
print(pred)

tokenizer.save_pretrained("new_path_for_directory")
model.save_pretrained("new_path_for_directory")
model.push_to_hub("new_path_for_directory", repository_id="my-onnx-repo", use_auth_token=True)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification, ORTOptimizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> OptimizationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-comment"># Load the tokenizer and export the model to the ONNX format</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_id = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>save_dir = <span class="hljs-string">&quot;tmp/onnx/&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_id)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(model_id, from_transformers=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Load the optimization configuration detailing the optimization we wish to apply</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimization_config = OptimizationConfig(optimization_level=<span class="hljs-number">2</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = ORTOptimizer.from_pretrained(model)
<span class="hljs-comment"># Apply optimization and save the resulting model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer.optimize(save_dir=save_dir, optimization_config=optimization_config)

<span class="hljs-comment"># Load the optimized model from a local repository</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(save_dir, file_name=<span class="hljs-string">&quot;model_optimized.onnx&quot;</span>)

<span class="hljs-comment"># Create the transformers pipeline</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_clx = pipeline(<span class="hljs-string">&quot;text-classification&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>text = <span class="hljs-string">&quot;I like the new ORT pipeline&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_clx(text)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(pred)

<span class="hljs-comment"># Save and push the model to the hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model.push_to_hub(<span class="hljs-string">&quot;new_path_for_directory&quot;</span>, repository_id=<span class="hljs-string">&quot;my-onnx-repo&quot;</span>, use_auth_token=<span class="hljs-literal">True</span>)`}}),we=new ee({}),ze=new ke({props:{code:`from transformers import AutoTokenizer, pipeline
-from transformers import AutoModelForQuestionAnswering
+from optimum.onnxruntime import ORTModelForQuestionAnswering

-model = AutoModelForQuestionAnswering.from_pretrained("deepset/roberta-base-squad2")
+model = ORTModelForQuestionAnswering.from_pretrained("optimum/roberta-base-squad2")
tokenizer = AutoTokenizer.from_pretrained("deepset/roberta-base-squad2")

onnx_qa = pipeline("question-answering",model=model,tokenizer=tokenizer)

question = "What's my name?"
context = "My name is Philipp and I live in Nuremberg."
pred = onnx_qa(question, context)`,highlighted:`from transformers import AutoTokenizer, pipeline
<span class="hljs-deletion">-from transformers import AutoModelForQuestionAnswering</span>
<span class="hljs-addition">+from optimum.onnxruntime import ORTModelForQuestionAnswering</span>

<span class="hljs-deletion">-model = AutoModelForQuestionAnswering.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)</span>
<span class="hljs-addition">+model = ORTModelForQuestionAnswering.from_pretrained(&quot;optimum/roberta-base-squad2&quot;)</span>
tokenizer = AutoTokenizer.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)

onnx_qa = pipeline(&quot;question-answering&quot;,model=model,tokenizer=tokenizer)

question = &quot;What&#x27;s my name?&quot;
context = &quot;My name is Philipp and I live in Nuremberg.&quot;
pred = onnx_qa(question, context)`}}),{c(){h=s("meta"),X=c(),g=s("h1"),$=s("a"),F=s("span"),q(T.$$.fragment),C=c(),U=s("span"),qo=i("Optimum pipelines for inference"),Pt=c(),M=s("p"),ko=i("The "),Me=s("code"),yo=i("pipeline()"),jo=i(" function makes it simple to use models from the "),te=s("a"),Oo=i("Model Hub"),xo=i(" for accelerated inference on a variety of tasks such as text classification, question answering and image classification."),Qt=c(),q(W.$$.fragment),St=c(),ye=s("p"),To=i("Currently supported tasks are:"),Dt=c(),je=s("p"),Ne=s("strong"),$o=i("ONNX Runtime"),It=c(),u=s("ul"),Fe=s("li"),Pe=s("code"),Eo=i("feature-extraction"),bo=c(),Qe=s("li"),Se=s("code"),Ao=i("text-classification"),Ro=c(),De=s("li"),Ie=s("code"),Co=i("token-classification"),Mo=c(),Le=s("li"),He=s("code"),No=i("question-answering"),Fo=c(),Xe=s("li"),Ue=s("code"),Po=i("zero-shot-classification"),Qo=c(),We=s("li"),Be=s("code"),So=i("text-generation"),Do=c(),Ge=s("li"),Ye=s("code"),Io=i("text2text-generation"),Lo=c(),Je=s("li"),Ve=s("code"),Ho=i("summarization"),Xo=c(),Ke=s("li"),Ze=s("code"),Uo=i("translation"),Wo=c(),et=s("li"),tt=s("code"),Bo=i("image-classification"),Lt=c(),P=s("h2"),B=s("a"),ot=s("span"),q(oe.$$.fragment),Go=c(),st=s("span"),Yo=i("Optimum pipeline usage"),Ht=c(),N=s("p"),Jo=i("While each task has an associated pipeline class, it is simpler to use the general "),nt=s("code"),Vo=i("pipeline()"),Ko=i(` function which wraps all the task-specific pipelines in one object.
The `),at=s("code"),Zo=i("pipeline()"),es=i(" function automatically loads a default model and tokenizer/feature-extractor capable of inference for your task."),Xt=c(),Oe=s("ol"),it=s("li"),ts=i("Start by creating a pipeline by specifying an inference task:"),Ut=c(),q(se.$$.fragment),Wt=c(),ne=s("ol"),ae=s("li"),os=i("Pass your input text/image to the "),rt=s("code"),ss=i("pipeline()"),ns=i(" function:"),Bt=c(),q(ie.$$.fragment),Gt=c(),xe=s("p"),re=s("em"),as=i("Note: The default models used in the "),lt=s("code"),is=i("pipeline()"),rs=i(" function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),Yt=c(),Q=s("h3"),G=s("a"),pt=s("span"),q(le.$$.fragment),ls=c(),mt=s("span"),ps=i("Using vanilla Transformers model and converting to ONNX"),Jt=c(),_=s("p"),ms=i("The "),ct=s("code"),cs=i("pipeline()"),ds=i(" function accepts any supported model from the "),pe=s("a"),us=i("Model Hub"),fs=i(`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),dt=s("code"),hs=i('from_pretrained("{model_id}",from_transformers=True)'),gs=i(" method associated with the "),ut=s("code"),_s=i("ORTModelFor*"),vs=i("\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),Te=s("a"),ws=i("ORTModelForQuestionAnswering"),zs=i(" class for question answering:"),Vt=c(),q(me.$$.fragment),Kt=c(),S=s("h3"),Y=s("a"),ft=s("span"),q(ce.$$.fragment),qs=c(),ht=s("span"),ks=i("Using Optimum models"),Zt=c(),v=s("p"),ys=i("The "),gt=s("code"),js=i("pipeline()"),Os=i(" function is tightly integrated with "),de=s("a"),xs=i("Model Hub"),Ts=i(` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),_t=s("code"),$s=i("from_pretrained()"),Es=i(" method associated with the corresponding "),vt=s("code"),bs=i("ORTModelFor*"),As=i(`
and `),wt=s("code"),Rs=i("AutoTokenizer'/"),Cs=i("AutoFeatureExtractor` class. For example, here\u2019s how you can load an optimized model for question answering:"),eo=c(),q(ue.$$.fragment),to=c(),D=s("h3"),J=s("a"),zt=s("span"),q(fe.$$.fragment),Ms=c(),qt=s("span"),Ns=i("Optimizing and quantizing in pipelines"),oo=c(),w=s("p"),Fs=i("The "),kt=s("code"),Ps=i("pipeline()"),Qs=i(" function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),yt=s("code"),Ss=i("ORTQuantizer"),Ds=i(" and "),jt=s("code"),Is=i("ORTOptimizer"),Ls=i(`.
Below you can find two examples on how you could `),$e=s("a"),Hs=i("ORTOptimizer"),Xs=i(" and "),Ee=s("a"),Us=i("ORTQuantizer"),Ws=i(" to optimize/quantize your model and use it for inference afterwards."),so=c(),I=s("h3"),V=s("a"),Ot=s("span"),q(he.$$.fragment),Bs=c(),be=s("span"),Gs=i("Quantizing with "),xt=s("code"),Ys=i("ORTQuantizer"),no=c(),q(ge.$$.fragment),ao=c(),L=s("h3"),K=s("a"),Tt=s("span"),q(_e.$$.fragment),Js=c(),Ae=s("span"),Vs=i("Optimizing with "),$t=s("code"),Ks=i("ORTOptimizer"),io=c(),q(ve.$$.fragment),ro=c(),H=s("h2"),Z=s("a"),Et=s("span"),q(we.$$.fragment),Zs=c(),bt=s("span"),en=i("Transformers pipeline usage"),lo=c(),z=s("p"),tn=i("The "),At=s("code"),on=i("pipeline()"),sn=i(" function is just a light wrapper around the "),Rt=s("code"),nn=i("transformers.pipeline"),an=i(` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),Ct=s("code"),rn=i("transformers.pipeline"),ln=i(" and just replace your "),Mt=s("code"),pn=i("AutoModelFor*"),mn=i(` with the optimum
`),Nt=s("code"),cn=i("ORTModelFor*"),dn=i(" class."),po=c(),q(ze.$$.fragment),this.h()},l(e){const l=Ia('[data-svelte="svelte-1phssyn"]',document.head);h=n(l,"META",{name:!0,content:!0}),l.forEach(o),X=d(e),g=n(e,"H1",{class:!0});var qe=a(g);$=n(qe,"A",{id:!0,class:!0,href:!0});var hn=a($);F=n(hn,"SPAN",{});var gn=a(F);k(T.$$.fragment,gn),gn.forEach(o),hn.forEach(o),C=d(qe),U=n(qe,"SPAN",{});var _n=a(U);qo=r(_n,"Optimum pipelines for inference"),_n.forEach(o),qe.forEach(o),Pt=d(e),M=n(e,"P",{});var Re=a(M);ko=r(Re,"The "),Me=n(Re,"CODE",{});var vn=a(Me);yo=r(vn,"pipeline()"),vn.forEach(o),jo=r(Re," function makes it simple to use models from the "),te=n(Re,"A",{href:!0,rel:!0});var wn=a(te);Oo=r(wn,"Model Hub"),wn.forEach(o),xo=r(Re," for accelerated inference on a variety of tasks such as text classification, question answering and image classification."),Re.forEach(o),Qt=d(e),k(W.$$.fragment,e),St=d(e),ye=n(e,"P",{});var zn=a(ye);To=r(zn,"Currently supported tasks are:"),zn.forEach(o),Dt=d(e),je=n(e,"P",{});var qn=a(je);Ne=n(qn,"STRONG",{});var kn=a(Ne);$o=r(kn,"ONNX Runtime"),kn.forEach(o),qn.forEach(o),It=d(e),u=n(e,"UL",{});var f=a(u);Fe=n(f,"LI",{});var yn=a(Fe);Pe=n(yn,"CODE",{});var jn=a(Pe);Eo=r(jn,"feature-extraction"),jn.forEach(o),yn.forEach(o),bo=d(f),Qe=n(f,"LI",{});var On=a(Qe);Se=n(On,"CODE",{});var xn=a(Se);Ao=r(xn,"text-classification"),xn.forEach(o),On.forEach(o),Ro=d(f),De=n(f,"LI",{});var Tn=a(De);Ie=n(Tn,"CODE",{});var $n=a(Ie);Co=r($n,"token-classification"),$n.forEach(o),Tn.forEach(o),Mo=d(f),Le=n(f,"LI",{});var En=a(Le);He=n(En,"CODE",{});var bn=a(He);No=r(bn,"question-answering"),bn.forEach(o),En.forEach(o),Fo=d(f),Xe=n(f,"LI",{});var An=a(Xe);Ue=n(An,"CODE",{});var Rn=a(Ue);Po=r(Rn,"zero-shot-classification"),Rn.forEach(o),An.forEach(o),Qo=d(f),We=n(f,"LI",{});var Cn=a(We);Be=n(Cn,"CODE",{});var Mn=a(Be);So=r(Mn,"text-generation"),Mn.forEach(o),Cn.forEach(o),Do=d(f),Ge=n(f,"LI",{});var Nn=a(Ge);Ye=n(Nn,"CODE",{});var Fn=a(Ye);Io=r(Fn,"text2text-generation"),Fn.forEach(o),Nn.forEach(o),Lo=d(f),Je=n(f,"LI",{});var Pn=a(Je);Ve=n(Pn,"CODE",{});var Qn=a(Ve);Ho=r(Qn,"summarization"),Qn.forEach(o),Pn.forEach(o),Xo=d(f),Ke=n(f,"LI",{});var Sn=a(Ke);Ze=n(Sn,"CODE",{});var Dn=a(Ze);Uo=r(Dn,"translation"),Dn.forEach(o),Sn.forEach(o),Wo=d(f),et=n(f,"LI",{});var In=a(et);tt=n(In,"CODE",{});var Ln=a(tt);Bo=r(Ln,"image-classification"),Ln.forEach(o),In.forEach(o),f.forEach(o),Lt=d(e),P=n(e,"H2",{class:!0});var co=a(P);B=n(co,"A",{id:!0,class:!0,href:!0});var Hn=a(B);ot=n(Hn,"SPAN",{});var Xn=a(ot);k(oe.$$.fragment,Xn),Xn.forEach(o),Hn.forEach(o),Go=d(co),st=n(co,"SPAN",{});var Un=a(st);Yo=r(Un,"Optimum pipeline usage"),Un.forEach(o),co.forEach(o),Ht=d(e),N=n(e,"P",{});var Ce=a(N);Jo=r(Ce,"While each task has an associated pipeline class, it is simpler to use the general "),nt=n(Ce,"CODE",{});var Wn=a(nt);Vo=r(Wn,"pipeline()"),Wn.forEach(o),Ko=r(Ce,` function which wraps all the task-specific pipelines in one object.
The `),at=n(Ce,"CODE",{});var Bn=a(at);Zo=r(Bn,"pipeline()"),Bn.forEach(o),es=r(Ce," function automatically loads a default model and tokenizer/feature-extractor capable of inference for your task."),Ce.forEach(o),Xt=d(e),Oe=n(e,"OL",{});var Gn=a(Oe);it=n(Gn,"LI",{});var Yn=a(it);ts=r(Yn,"Start by creating a pipeline by specifying an inference task:"),Yn.forEach(o),Gn.forEach(o),Ut=d(e),k(se.$$.fragment,e),Wt=d(e),ne=n(e,"OL",{start:!0});var Jn=a(ne);ae=n(Jn,"LI",{});var uo=a(ae);os=r(uo,"Pass your input text/image to the "),rt=n(uo,"CODE",{});var Vn=a(rt);ss=r(Vn,"pipeline()"),Vn.forEach(o),ns=r(uo," function:"),uo.forEach(o),Jn.forEach(o),Bt=d(e),k(ie.$$.fragment,e),Gt=d(e),xe=n(e,"P",{});var Kn=a(xe);re=n(Kn,"EM",{});var fo=a(re);as=r(fo,"Note: The default models used in the "),lt=n(fo,"CODE",{});var Zn=a(lt);is=r(Zn,"pipeline()"),Zn.forEach(o),rs=r(fo," function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),fo.forEach(o),Kn.forEach(o),Yt=d(e),Q=n(e,"H3",{class:!0});var ho=a(Q);G=n(ho,"A",{id:!0,class:!0,href:!0});var ea=a(G);pt=n(ea,"SPAN",{});var ta=a(pt);k(le.$$.fragment,ta),ta.forEach(o),ea.forEach(o),ls=d(ho),mt=n(ho,"SPAN",{});var oa=a(mt);ps=r(oa,"Using vanilla Transformers model and converting to ONNX"),oa.forEach(o),ho.forEach(o),Jt=d(e),_=n(e,"P",{});var E=a(_);ms=r(E,"The "),ct=n(E,"CODE",{});var sa=a(ct);cs=r(sa,"pipeline()"),sa.forEach(o),ds=r(E," function accepts any supported model from the "),pe=n(E,"A",{href:!0,rel:!0});var na=a(pe);us=r(na,"Model Hub"),na.forEach(o),fs=r(E,`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),dt=n(E,"CODE",{});var aa=a(dt);hs=r(aa,'from_pretrained("{model_id}",from_transformers=True)'),aa.forEach(o),gs=r(E," method associated with the "),ut=n(E,"CODE",{});var ia=a(ut);_s=r(ia,"ORTModelFor*"),ia.forEach(o),vs=r(E,"\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),Te=n(E,"A",{href:!0});var ra=a(Te);ws=r(ra,"ORTModelForQuestionAnswering"),ra.forEach(o),zs=r(E," class for question answering:"),E.forEach(o),Vt=d(e),k(me.$$.fragment,e),Kt=d(e),S=n(e,"H3",{class:!0});var go=a(S);Y=n(go,"A",{id:!0,class:!0,href:!0});var la=a(Y);ft=n(la,"SPAN",{});var pa=a(ft);k(ce.$$.fragment,pa),pa.forEach(o),la.forEach(o),qs=d(go),ht=n(go,"SPAN",{});var ma=a(ht);ks=r(ma,"Using Optimum models"),ma.forEach(o),go.forEach(o),Zt=d(e),v=n(e,"P",{});var b=a(v);ys=r(b,"The "),gt=n(b,"CODE",{});var ca=a(gt);js=r(ca,"pipeline()"),ca.forEach(o),Os=r(b," function is tightly integrated with "),de=n(b,"A",{href:!0,rel:!0});var da=a(de);xs=r(da,"Model Hub"),da.forEach(o),Ts=r(b,` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),_t=n(b,"CODE",{});var ua=a(_t);$s=r(ua,"from_pretrained()"),ua.forEach(o),Es=r(b," method associated with the corresponding "),vt=n(b,"CODE",{});var fa=a(vt);bs=r(fa,"ORTModelFor*"),fa.forEach(o),As=r(b,`
and `),wt=n(b,"CODE",{});var ha=a(wt);Rs=r(ha,"AutoTokenizer'/"),ha.forEach(o),Cs=r(b,"AutoFeatureExtractor` class. For example, here\u2019s how you can load an optimized model for question answering:"),b.forEach(o),eo=d(e),k(ue.$$.fragment,e),to=d(e),D=n(e,"H3",{class:!0});var _o=a(D);J=n(_o,"A",{id:!0,class:!0,href:!0});var ga=a(J);zt=n(ga,"SPAN",{});var _a=a(zt);k(fe.$$.fragment,_a),_a.forEach(o),ga.forEach(o),Ms=d(_o),qt=n(_o,"SPAN",{});var va=a(qt);Ns=r(va,"Optimizing and quantizing in pipelines"),va.forEach(o),_o.forEach(o),oo=d(e),w=n(e,"P",{});var A=a(w);Fs=r(A,"The "),kt=n(A,"CODE",{});var wa=a(kt);Ps=r(wa,"pipeline()"),wa.forEach(o),Qs=r(A," function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),yt=n(A,"CODE",{});var za=a(yt);Ss=r(za,"ORTQuantizer"),za.forEach(o),Ds=r(A," and "),jt=n(A,"CODE",{});var qa=a(jt);Is=r(qa,"ORTOptimizer"),qa.forEach(o),Ls=r(A,`.
Below you can find two examples on how you could `),$e=n(A,"A",{href:!0});var ka=a($e);Hs=r(ka,"ORTOptimizer"),ka.forEach(o),Xs=r(A," and "),Ee=n(A,"A",{href:!0});var ya=a(Ee);Us=r(ya,"ORTQuantizer"),ya.forEach(o),Ws=r(A," to optimize/quantize your model and use it for inference afterwards."),A.forEach(o),so=d(e),I=n(e,"H3",{class:!0});var vo=a(I);V=n(vo,"A",{id:!0,class:!0,href:!0});var ja=a(V);Ot=n(ja,"SPAN",{});var Oa=a(Ot);k(he.$$.fragment,Oa),Oa.forEach(o),ja.forEach(o),Bs=d(vo),be=n(vo,"SPAN",{});var un=a(be);Gs=r(un,"Quantizing with "),xt=n(un,"CODE",{});var xa=a(xt);Ys=r(xa,"ORTQuantizer"),xa.forEach(o),un.forEach(o),vo.forEach(o),no=d(e),k(ge.$$.fragment,e),ao=d(e),L=n(e,"H3",{class:!0});var wo=a(L);K=n(wo,"A",{id:!0,class:!0,href:!0});var Ta=a(K);Tt=n(Ta,"SPAN",{});var $a=a(Tt);k(_e.$$.fragment,$a),$a.forEach(o),Ta.forEach(o),Js=d(wo),Ae=n(wo,"SPAN",{});var fn=a(Ae);Vs=r(fn,"Optimizing with "),$t=n(fn,"CODE",{});var Ea=a($t);Ks=r(Ea,"ORTOptimizer"),Ea.forEach(o),fn.forEach(o),wo.forEach(o),io=d(e),k(ve.$$.fragment,e),ro=d(e),H=n(e,"H2",{class:!0});var zo=a(H);Z=n(zo,"A",{id:!0,class:!0,href:!0});var ba=a(Z);Et=n(ba,"SPAN",{});var Aa=a(Et);k(we.$$.fragment,Aa),Aa.forEach(o),ba.forEach(o),Zs=d(zo),bt=n(zo,"SPAN",{});var Ra=a(bt);en=r(Ra,"Transformers pipeline usage"),Ra.forEach(o),zo.forEach(o),lo=d(e),z=n(e,"P",{});var R=a(z);tn=r(R,"The "),At=n(R,"CODE",{});var Ca=a(At);on=r(Ca,"pipeline()"),Ca.forEach(o),sn=r(R," function is just a light wrapper around the "),Rt=n(R,"CODE",{});var Ma=a(Rt);nn=r(Ma,"transformers.pipeline"),Ma.forEach(o),an=r(R,` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),Ct=n(R,"CODE",{});var Na=a(Ct);rn=r(Na,"transformers.pipeline"),Na.forEach(o),ln=r(R," and just replace your "),Mt=n(R,"CODE",{});var Fa=a(Mt);pn=r(Fa,"AutoModelFor*"),Fa.forEach(o),mn=r(R,` with the optimum
`),Nt=n(R,"CODE",{});var Pa=a(Nt);cn=r(Pa,"ORTModelFor*"),Pa.forEach(o),dn=r(R," class."),R.forEach(o),po=d(e),k(ze.$$.fragment,e),this.h()},h(){m(h,"name","hf:doc:metadata"),m(h,"content",JSON.stringify(Wa)),m($,"id","optimum-pipelines-for-inference"),m($,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m($,"href","#optimum-pipelines-for-inference"),m(g,"class","relative group"),m(te,"href","https://huggingface.co/models"),m(te,"rel","nofollow"),m(B,"id","optimum-pipeline-usage"),m(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(B,"href","#optimum-pipeline-usage"),m(P,"class","relative group"),m(ne,"start","2"),m(G,"id","using-vanilla-transformers-model-and-converting-to-onnx"),m(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(G,"href","#using-vanilla-transformers-model-and-converting-to-onnx"),m(Q,"class","relative group"),m(pe,"href","https://huggingface.co/models"),m(pe,"rel","nofollow"),m(Te,"href","/docs/optimum/main/en/onnxruntime/modeling_ort#optimum.onnxruntime.ORTModelForQuestionAnswering"),m(Y,"id","using-optimum-models"),m(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Y,"href","#using-optimum-models"),m(S,"class","relative group"),m(de,"href","https://huggingface.co/models"),m(de,"rel","nofollow"),m(J,"id","optimizing-and-quantizing-in-pipelines"),m(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(J,"href","#optimizing-and-quantizing-in-pipelines"),m(D,"class","relative group"),m($e,"href","/docs/optimum/main/en/onnxruntime/optimization#optimum.onnxruntime.ORTOptimizer"),m(Ee,"href","/docs/optimum/main/en/onnxruntime/quantization#optimum.onnxruntime.ORTQuantizer"),m(V,"id","quantizing-with-ortquantizer"),m(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(V,"href","#quantizing-with-ortquantizer"),m(I,"class","relative group"),m(K,"id","optimizing-with-ortoptimizer"),m(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(K,"href","#optimizing-with-ortoptimizer"),m(L,"class","relative group"),m(Z,"id","transformers-pipeline-usage"),m(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Z,"href","#transformers-pipeline-usage"),m(H,"class","relative group")},m(e,l){t(document.head,h),p(e,X,l),p(e,g,l),t(g,$),t($,F),y(T,F,null),t(g,C),t(g,U),t(U,qo),p(e,Pt,l),p(e,M,l),t(M,ko),t(M,Me),t(Me,yo),t(M,jo),t(M,te),t(te,Oo),t(M,xo),p(e,Qt,l),y(W,e,l),p(e,St,l),p(e,ye,l),t(ye,To),p(e,Dt,l),p(e,je,l),t(je,Ne),t(Ne,$o),p(e,It,l),p(e,u,l),t(u,Fe),t(Fe,Pe),t(Pe,Eo),t(u,bo),t(u,Qe),t(Qe,Se),t(Se,Ao),t(u,Ro),t(u,De),t(De,Ie),t(Ie,Co),t(u,Mo),t(u,Le),t(Le,He),t(He,No),t(u,Fo),t(u,Xe),t(Xe,Ue),t(Ue,Po),t(u,Qo),t(u,We),t(We,Be),t(Be,So),t(u,Do),t(u,Ge),t(Ge,Ye),t(Ye,Io),t(u,Lo),t(u,Je),t(Je,Ve),t(Ve,Ho),t(u,Xo),t(u,Ke),t(Ke,Ze),t(Ze,Uo),t(u,Wo),t(u,et),t(et,tt),t(tt,Bo),p(e,Lt,l),p(e,P,l),t(P,B),t(B,ot),y(oe,ot,null),t(P,Go),t(P,st),t(st,Yo),p(e,Ht,l),p(e,N,l),t(N,Jo),t(N,nt),t(nt,Vo),t(N,Ko),t(N,at),t(at,Zo),t(N,es),p(e,Xt,l),p(e,Oe,l),t(Oe,it),t(it,ts),p(e,Ut,l),y(se,e,l),p(e,Wt,l),p(e,ne,l),t(ne,ae),t(ae,os),t(ae,rt),t(rt,ss),t(ae,ns),p(e,Bt,l),y(ie,e,l),p(e,Gt,l),p(e,xe,l),t(xe,re),t(re,as),t(re,lt),t(lt,is),t(re,rs),p(e,Yt,l),p(e,Q,l),t(Q,G),t(G,pt),y(le,pt,null),t(Q,ls),t(Q,mt),t(mt,ps),p(e,Jt,l),p(e,_,l),t(_,ms),t(_,ct),t(ct,cs),t(_,ds),t(_,pe),t(pe,us),t(_,fs),t(_,dt),t(dt,hs),t(_,gs),t(_,ut),t(ut,_s),t(_,vs),t(_,Te),t(Te,ws),t(_,zs),p(e,Vt,l),y(me,e,l),p(e,Kt,l),p(e,S,l),t(S,Y),t(Y,ft),y(ce,ft,null),t(S,qs),t(S,ht),t(ht,ks),p(e,Zt,l),p(e,v,l),t(v,ys),t(v,gt),t(gt,js),t(v,Os),t(v,de),t(de,xs),t(v,Ts),t(v,_t),t(_t,$s),t(v,Es),t(v,vt),t(vt,bs),t(v,As),t(v,wt),t(wt,Rs),t(v,Cs),p(e,eo,l),y(ue,e,l),p(e,to,l),p(e,D,l),t(D,J),t(J,zt),y(fe,zt,null),t(D,Ms),t(D,qt),t(qt,Ns),p(e,oo,l),p(e,w,l),t(w,Fs),t(w,kt),t(kt,Ps),t(w,Qs),t(w,yt),t(yt,Ss),t(w,Ds),t(w,jt),t(jt,Is),t(w,Ls),t(w,$e),t($e,Hs),t(w,Xs),t(w,Ee),t(Ee,Us),t(w,Ws),p(e,so,l),p(e,I,l),t(I,V),t(V,Ot),y(he,Ot,null),t(I,Bs),t(I,be),t(be,Gs),t(be,xt),t(xt,Ys),p(e,no,l),y(ge,e,l),p(e,ao,l),p(e,L,l),t(L,K),t(K,Tt),y(_e,Tt,null),t(L,Js),t(L,Ae),t(Ae,Vs),t(Ae,$t),t($t,Ks),p(e,io,l),y(ve,e,l),p(e,ro,l),p(e,H,l),t(H,Z),t(Z,Et),y(we,Et,null),t(H,Zs),t(H,bt),t(bt,en),p(e,lo,l),p(e,z,l),t(z,tn),t(z,At),t(At,on),t(z,sn),t(z,Rt),t(Rt,nn),t(z,an),t(z,Ct),t(Ct,rn),t(z,ln),t(z,Mt),t(Mt,pn),t(z,mn),t(z,Nt),t(Nt,cn),t(z,dn),p(e,po,l),y(ze,e,l),mo=!0},p(e,[l]){const qe={};l&2&&(qe.$$scope={dirty:l,ctx:e}),W.$set(qe)},i(e){mo||(j(T.$$.fragment,e),j(W.$$.fragment,e),j(oe.$$.fragment,e),j(se.$$.fragment,e),j(ie.$$.fragment,e),j(le.$$.fragment,e),j(me.$$.fragment,e),j(ce.$$.fragment,e),j(ue.$$.fragment,e),j(fe.$$.fragment,e),j(he.$$.fragment,e),j(ge.$$.fragment,e),j(_e.$$.fragment,e),j(ve.$$.fragment,e),j(we.$$.fragment,e),j(ze.$$.fragment,e),mo=!0)},o(e){O(T.$$.fragment,e),O(W.$$.fragment,e),O(oe.$$.fragment,e),O(se.$$.fragment,e),O(ie.$$.fragment,e),O(le.$$.fragment,e),O(me.$$.fragment,e),O(ce.$$.fragment,e),O(ue.$$.fragment,e),O(fe.$$.fragment,e),O(he.$$.fragment,e),O(ge.$$.fragment,e),O(_e.$$.fragment,e),O(ve.$$.fragment,e),O(we.$$.fragment,e),O(ze.$$.fragment,e),mo=!1},d(e){o(h),e&&o(X),e&&o(g),x(T),e&&o(Pt),e&&o(M),e&&o(Qt),x(W,e),e&&o(St),e&&o(ye),e&&o(Dt),e&&o(je),e&&o(It),e&&o(u),e&&o(Lt),e&&o(P),x(oe),e&&o(Ht),e&&o(N),e&&o(Xt),e&&o(Oe),e&&o(Ut),x(se,e),e&&o(Wt),e&&o(ne),e&&o(Bt),x(ie,e),e&&o(Gt),e&&o(xe),e&&o(Yt),e&&o(Q),x(le),e&&o(Jt),e&&o(_),e&&o(Vt),x(me,e),e&&o(Kt),e&&o(S),x(ce),e&&o(Zt),e&&o(v),e&&o(eo),x(ue,e),e&&o(to),e&&o(D),x(fe),e&&o(oo),e&&o(w),e&&o(so),e&&o(I),x(he),e&&o(no),x(ge,e),e&&o(ao),e&&o(L),x(_e),e&&o(io),x(ve,e),e&&o(ro),e&&o(H),x(we),e&&o(lo),e&&o(z),e&&o(po),x(ze,e)}}}const Wa={local:"optimum-pipelines-for-inference",sections:[{local:"optimum-pipeline-usage",sections:[{local:"using-vanilla-transformers-model-and-converting-to-onnx",title:"Using vanilla Transformers model and converting to ONNX"},{local:"using-optimum-models",title:"Using Optimum models"},{local:"optimizing-and-quantizing-in-pipelines",title:"Optimizing and quantizing in pipelines"},{local:"quantizing-with-ortquantizer",title:"Quantizing with `ORTQuantizer`"},{local:"optimizing-with-ortoptimizer",title:"Optimizing with `ORTOptimizer`"}],title:"Optimum pipeline usage"},{local:"transformers-pipeline-usage",title:"Transformers pipeline usage"}],title:"Optimum pipelines for inference"};function Ba(Ft){return La(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ka extends Qa{constructor(h){super();Sa(this,h,Ba,Ua,Da,{})}}export{Ka as default,Wa as metadata};
