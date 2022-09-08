import{S as Qn,i as Dn,s as Sn,e as o,k as c,w as k,t as i,M as In,c as a,d as s,m as u,a as n,x as z,h as r,b as m,G as t,g as p,y as j,q as y,o as x,B as O,v as Hn}from"../chunks/vendor-hf-doc-builder.js";import{T as Ln}from"../chunks/Tip-hf-doc-builder.js";import{I as ee}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ze}from"../chunks/CodeBlock-hf-doc-builder.js";function Xn(Nt){let f,X,g,E,N;return{c(){f=o("p"),X=i("You can also use the "),g=o("a"),E=i("pipeline()"),N=i(" function from Transformers and provide your Optimum model class."),this.h()},l($){f=a($,"P",{});var M=n(f);X=r(M,"You can also use the "),g=a(M,"A",{href:!0,rel:!0});var U=n(g);E=r(U,"pipeline()"),U.forEach(s),N=r(M," function from Transformers and provide your Optimum model class."),M.forEach(s),this.h()},h(){m(g,"href","https://huggingface.co/docs/transformers/main/en/main_classes/pipelines#pipelines"),m(g,"rel","nofollow")},m($,M){p($,f,M),t(f,X),t(f,g),t(g,E),t(f,N)},d($){$&&s(f)}}}function Un(Nt){let f,X,g,E,N,$,M,U,qs,Ft,C,ks,Ce,zs,js,te,ys,xs,Qt,W,Dt,je,Os,St,ye,Pe,$s,It,d,Ne,Fe,Es,Ts,Qe,De,bs,As,Se,Ie,Rs,Ms,He,Le,Cs,Ps,Xe,Ue,Ns,Fs,We,Be,Qs,Ds,Ge,Ye,Ss,Is,Je,Ve,Hs,Ls,Ke,Ze,Xs,Us,et,tt,Ws,Ht,F,B,st,se,Bs,ot,Gs,Lt,P,Ys,at,Js,Vs,nt,Ks,Zs,Xt,xe,it,eo,Ut,oe,Wt,ae,ne,to,rt,so,oo,Bt,ie,Gt,Oe,re,ao,lt,no,io,Yt,Q,G,pt,le,ro,mt,lo,Jt,_,po,ct,mo,co,pe,uo,ho,ut,fo,go,dt,_o,vo,$e,wo,qo,Vt,me,Kt,D,Y,ht,ce,ko,ft,zo,Zt,v,jo,gt,yo,xo,ue,Oo,$o,_t,Eo,To,vt,bo,Ao,wt,Ro,Mo,es,de,ts,S,J,qt,he,Co,kt,Po,ss,w,No,zt,Fo,Qo,jt,Do,So,yt,Io,Ho,Ee,Lo,Xo,Te,Uo,Wo,os,I,V,xt,fe,Bo,be,Go,Ot,Yo,as,ge,ns,H,K,$t,_e,Jo,Ae,Vo,Et,Ko,is,ve,rs,L,Z,Tt,we,Zo,bt,ea,ls,q,ta,At,sa,oa,Rt,aa,na,Mt,ia,ra,Ct,la,pa,Pt,ma,ca,ps,qe,ms;return $=new ee({}),W=new Ln({props:{$$slots:{default:[Xn]},$$scope:{ctx:Nt}}}),se=new ee({}),oe=new ze({props:{code:`from optimum.pipelines import pipeline

classifier = pipeline(task="text-classification", accelerator="ort")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = pipeline(task=<span class="hljs-string">&quot;text-classification&quot;</span>, accelerator=<span class="hljs-string">&quot;ort&quot;</span>)
`}}),ie=new ze({props:{code:'classifier("I like you. I love you.")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>classifier(<span class="hljs-string">&quot;I like you. I love you.&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;POSITIVE&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9998838901519775</span>}]`}}),le=new ee({}),me=new ze({props:{code:`from transformers import AutoTokenizer
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

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),ce=new ee({}),de=new ze({props:{code:`from transformers import AutoTokenizer
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

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),he=new ee({}),fe=new ee({}),ge=new ze({props:{code:`from pathlib import Path
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
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.model.config.save_pretrained(save_path) <span class="hljs-comment"># saves config.json</span>

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
                  )`}}),_e=new ee({}),ve=new ze({props:{code:`from pathlib import Path
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
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer.model.config.save_pretrained(save_path) <span class="hljs-comment"># saves config.json</span>

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
                  use_auth_token=<span class="hljs-literal">True</span>)`}}),we=new ee({}),qe=new ze({props:{code:`from transformers import AutoTokenizer, pipeline
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
pred = onnx_qa(question, context)`}}),{c(){f=o("meta"),X=c(),g=o("h1"),E=o("a"),N=o("span"),k($.$$.fragment),M=c(),U=o("span"),qs=i("Optimum pipelines for inference"),Ft=c(),C=o("p"),ks=i("The "),Ce=o("code"),zs=i("pipeline()"),js=i(" function makes it simple to use models from the "),te=o("a"),ys=i("Model Hub"),xs=i(" for accelerated inference on a variety of tasks such as text classification, question answering and image classification."),Qt=c(),k(W.$$.fragment),Dt=c(),je=o("p"),Os=i("Currenlty supported tasks are:"),St=c(),ye=o("p"),Pe=o("strong"),$s=i("ONNX Runtime"),It=c(),d=o("ul"),Ne=o("li"),Fe=o("code"),Es=i("feature-extraction"),Ts=c(),Qe=o("li"),De=o("code"),bs=i("text-classification"),As=c(),Se=o("li"),Ie=o("code"),Rs=i("token-classification"),Ms=c(),He=o("li"),Le=o("code"),Cs=i("question-answering"),Ps=c(),Xe=o("li"),Ue=o("code"),Ns=i("zero-shot-classification"),Fs=c(),We=o("li"),Be=o("code"),Qs=i("text-generation"),Ds=c(),Ge=o("li"),Ye=o("code"),Ss=i("text2text-generation"),Is=c(),Je=o("li"),Ve=o("code"),Hs=i("summarization"),Ls=c(),Ke=o("li"),Ze=o("code"),Xs=i("translation"),Us=c(),et=o("li"),tt=o("code"),Ws=i("image-classification"),Ht=c(),F=o("h2"),B=o("a"),st=o("span"),k(se.$$.fragment),Bs=c(),ot=o("span"),Gs=i("Optimum pipeline usage"),Lt=c(),P=o("p"),Ys=i("While each task has an associated pipeline class, it is simpler to use the general "),at=o("code"),Js=i("pipeline()"),Vs=i(` function which wraps all the task-specific pipelines in one object.
The `),nt=o("code"),Ks=i("pipeline()"),Zs=i(" function automatically loads a default model and tokenizer/feature-extractor capable of inference for your task."),Xt=c(),xe=o("ol"),it=o("li"),eo=i("Start by creating a pipeline by specifying an inference task:"),Ut=c(),k(oe.$$.fragment),Wt=c(),ae=o("ol"),ne=o("li"),to=i("Pass your input text/image to the "),rt=o("code"),so=i("pipeline()"),oo=i(" function:"),Bt=c(),k(ie.$$.fragment),Gt=c(),Oe=o("p"),re=o("em"),ao=i("Note: The default models used in the "),lt=o("code"),no=i("pipeline()"),io=i(" function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),Yt=c(),Q=o("h3"),G=o("a"),pt=o("span"),k(le.$$.fragment),ro=c(),mt=o("span"),lo=i("Using vanilla Transformers model and converting to ONNX"),Jt=c(),_=o("p"),po=i("The "),ct=o("code"),mo=i("pipeline()"),co=i(" function accepts any supported model from the "),pe=o("a"),uo=i("Model Hub"),ho=i(`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ut=o("code"),fo=i('from_pretrained("{model_id}",from_transformers=True)'),go=i(" method associated with the "),dt=o("code"),_o=i("ORTModelFor*"),vo=i("\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),$e=o("a"),wo=i("ORTModelForQuestionAnswering"),qo=i(" class for question answering:"),Vt=c(),k(me.$$.fragment),Kt=c(),D=o("h3"),Y=o("a"),ht=o("span"),k(ce.$$.fragment),ko=c(),ft=o("span"),zo=i("Using Optimum models"),Zt=c(),v=o("p"),jo=i("The "),gt=o("code"),yo=i("pipeline()"),xo=i(" function is tightly integrated with "),ue=o("a"),Oo=i("Model Hub"),$o=i(` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),_t=o("code"),Eo=i("from_pretrained()"),To=i(" method associated with the corresponding "),vt=o("code"),bo=i("ORTModelFor*"),Ao=i(`
and `),wt=o("code"),Ro=i("AutoTokenizer'/"),Mo=i("AutoFeatureExtractor` class. For example, here\u2019s how you can load an optimized model for question answering:"),es=c(),k(de.$$.fragment),ts=c(),S=o("h3"),J=o("a"),qt=o("span"),k(he.$$.fragment),Co=c(),kt=o("span"),Po=i("Optimizing and quantizing in pipelines"),ss=c(),w=o("p"),No=i("The "),zt=o("code"),Fo=i("pipeline()"),Qo=i(" function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),jt=o("code"),Do=i("ORTQuantizer"),So=i(" and "),yt=o("code"),Io=i("ORTOptimizer"),Ho=i(`.
Below you can find two examples on how you could `),Ee=o("a"),Lo=i("ORTOptimizer"),Xo=i(" and "),Te=o("a"),Uo=i("ORTQuantizer"),Wo=i(" to optimize/quantize your model and use it for inference afterwards."),os=c(),I=o("h3"),V=o("a"),xt=o("span"),k(fe.$$.fragment),Bo=c(),be=o("span"),Go=i("Quantizing with "),Ot=o("code"),Yo=i("ORTQuantizer"),as=c(),k(ge.$$.fragment),ns=c(),H=o("h3"),K=o("a"),$t=o("span"),k(_e.$$.fragment),Jo=c(),Ae=o("span"),Vo=i("Optimizing with "),Et=o("code"),Ko=i("ORTOptimizer"),is=c(),k(ve.$$.fragment),rs=c(),L=o("h2"),Z=o("a"),Tt=o("span"),k(we.$$.fragment),Zo=c(),bt=o("span"),ea=i("Transformers pipeline usage"),ls=c(),q=o("p"),ta=i("The "),At=o("code"),sa=i("pipeline()"),oa=i(" function is just a light wrapper around the "),Rt=o("code"),aa=i("transformers.pipeline"),na=i(` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),Mt=o("code"),ia=i("transformers.pipeline"),ra=i(" and just replace your "),Ct=o("code"),la=i("AutoModelFor*"),pa=i(` with the optimum
`),Pt=o("code"),ma=i("ORTModelFor*"),ca=i(" class."),ps=c(),k(qe.$$.fragment),this.h()},l(e){const l=In('[data-svelte="svelte-1phssyn"]',document.head);f=a(l,"META",{name:!0,content:!0}),l.forEach(s),X=u(e),g=a(e,"H1",{class:!0});var ke=n(g);E=a(ke,"A",{id:!0,class:!0,href:!0});var ha=n(E);N=a(ha,"SPAN",{});var fa=n(N);z($.$$.fragment,fa),fa.forEach(s),ha.forEach(s),M=u(ke),U=a(ke,"SPAN",{});var ga=n(U);qs=r(ga,"Optimum pipelines for inference"),ga.forEach(s),ke.forEach(s),Ft=u(e),C=a(e,"P",{});var Re=n(C);ks=r(Re,"The "),Ce=a(Re,"CODE",{});var _a=n(Ce);zs=r(_a,"pipeline()"),_a.forEach(s),js=r(Re," function makes it simple to use models from the "),te=a(Re,"A",{href:!0,rel:!0});var va=n(te);ys=r(va,"Model Hub"),va.forEach(s),xs=r(Re," for accelerated inference on a variety of tasks such as text classification, question answering and image classification."),Re.forEach(s),Qt=u(e),z(W.$$.fragment,e),Dt=u(e),je=a(e,"P",{});var wa=n(je);Os=r(wa,"Currenlty supported tasks are:"),wa.forEach(s),St=u(e),ye=a(e,"P",{});var qa=n(ye);Pe=a(qa,"STRONG",{});var ka=n(Pe);$s=r(ka,"ONNX Runtime"),ka.forEach(s),qa.forEach(s),It=u(e),d=a(e,"UL",{});var h=n(d);Ne=a(h,"LI",{});var za=n(Ne);Fe=a(za,"CODE",{});var ja=n(Fe);Es=r(ja,"feature-extraction"),ja.forEach(s),za.forEach(s),Ts=u(h),Qe=a(h,"LI",{});var ya=n(Qe);De=a(ya,"CODE",{});var xa=n(De);bs=r(xa,"text-classification"),xa.forEach(s),ya.forEach(s),As=u(h),Se=a(h,"LI",{});var Oa=n(Se);Ie=a(Oa,"CODE",{});var $a=n(Ie);Rs=r($a,"token-classification"),$a.forEach(s),Oa.forEach(s),Ms=u(h),He=a(h,"LI",{});var Ea=n(He);Le=a(Ea,"CODE",{});var Ta=n(Le);Cs=r(Ta,"question-answering"),Ta.forEach(s),Ea.forEach(s),Ps=u(h),Xe=a(h,"LI",{});var ba=n(Xe);Ue=a(ba,"CODE",{});var Aa=n(Ue);Ns=r(Aa,"zero-shot-classification"),Aa.forEach(s),ba.forEach(s),Fs=u(h),We=a(h,"LI",{});var Ra=n(We);Be=a(Ra,"CODE",{});var Ma=n(Be);Qs=r(Ma,"text-generation"),Ma.forEach(s),Ra.forEach(s),Ds=u(h),Ge=a(h,"LI",{});var Ca=n(Ge);Ye=a(Ca,"CODE",{});var Pa=n(Ye);Ss=r(Pa,"text2text-generation"),Pa.forEach(s),Ca.forEach(s),Is=u(h),Je=a(h,"LI",{});var Na=n(Je);Ve=a(Na,"CODE",{});var Fa=n(Ve);Hs=r(Fa,"summarization"),Fa.forEach(s),Na.forEach(s),Ls=u(h),Ke=a(h,"LI",{});var Qa=n(Ke);Ze=a(Qa,"CODE",{});var Da=n(Ze);Xs=r(Da,"translation"),Da.forEach(s),Qa.forEach(s),Us=u(h),et=a(h,"LI",{});var Sa=n(et);tt=a(Sa,"CODE",{});var Ia=n(tt);Ws=r(Ia,"image-classification"),Ia.forEach(s),Sa.forEach(s),h.forEach(s),Ht=u(e),F=a(e,"H2",{class:!0});var cs=n(F);B=a(cs,"A",{id:!0,class:!0,href:!0});var Ha=n(B);st=a(Ha,"SPAN",{});var La=n(st);z(se.$$.fragment,La),La.forEach(s),Ha.forEach(s),Bs=u(cs),ot=a(cs,"SPAN",{});var Xa=n(ot);Gs=r(Xa,"Optimum pipeline usage"),Xa.forEach(s),cs.forEach(s),Lt=u(e),P=a(e,"P",{});var Me=n(P);Ys=r(Me,"While each task has an associated pipeline class, it is simpler to use the general "),at=a(Me,"CODE",{});var Ua=n(at);Js=r(Ua,"pipeline()"),Ua.forEach(s),Vs=r(Me,` function which wraps all the task-specific pipelines in one object.
The `),nt=a(Me,"CODE",{});var Wa=n(nt);Ks=r(Wa,"pipeline()"),Wa.forEach(s),Zs=r(Me," function automatically loads a default model and tokenizer/feature-extractor capable of inference for your task."),Me.forEach(s),Xt=u(e),xe=a(e,"OL",{});var Ba=n(xe);it=a(Ba,"LI",{});var Ga=n(it);eo=r(Ga,"Start by creating a pipeline by specifying an inference task:"),Ga.forEach(s),Ba.forEach(s),Ut=u(e),z(oe.$$.fragment,e),Wt=u(e),ae=a(e,"OL",{start:!0});var Ya=n(ae);ne=a(Ya,"LI",{});var us=n(ne);to=r(us,"Pass your input text/image to the "),rt=a(us,"CODE",{});var Ja=n(rt);so=r(Ja,"pipeline()"),Ja.forEach(s),oo=r(us," function:"),us.forEach(s),Ya.forEach(s),Bt=u(e),z(ie.$$.fragment,e),Gt=u(e),Oe=a(e,"P",{});var Va=n(Oe);re=a(Va,"EM",{});var ds=n(re);ao=r(ds,"Note: The default models used in the "),lt=a(ds,"CODE",{});var Ka=n(lt);no=r(Ka,"pipeline()"),Ka.forEach(s),io=r(ds," function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),ds.forEach(s),Va.forEach(s),Yt=u(e),Q=a(e,"H3",{class:!0});var hs=n(Q);G=a(hs,"A",{id:!0,class:!0,href:!0});var Za=n(G);pt=a(Za,"SPAN",{});var en=n(pt);z(le.$$.fragment,en),en.forEach(s),Za.forEach(s),ro=u(hs),mt=a(hs,"SPAN",{});var tn=n(mt);lo=r(tn,"Using vanilla Transformers model and converting to ONNX"),tn.forEach(s),hs.forEach(s),Jt=u(e),_=a(e,"P",{});var T=n(_);po=r(T,"The "),ct=a(T,"CODE",{});var sn=n(ct);mo=r(sn,"pipeline()"),sn.forEach(s),co=r(T," function accepts any supported model from the "),pe=a(T,"A",{href:!0,rel:!0});var on=n(pe);uo=r(on,"Model Hub"),on.forEach(s),ho=r(T,`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ut=a(T,"CODE",{});var an=n(ut);fo=r(an,'from_pretrained("{model_id}",from_transformers=True)'),an.forEach(s),go=r(T," method associated with the "),dt=a(T,"CODE",{});var nn=n(dt);_o=r(nn,"ORTModelFor*"),nn.forEach(s),vo=r(T,"\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),$e=a(T,"A",{href:!0});var rn=n($e);wo=r(rn,"ORTModelForQuestionAnswering"),rn.forEach(s),qo=r(T," class for question answering:"),T.forEach(s),Vt=u(e),z(me.$$.fragment,e),Kt=u(e),D=a(e,"H3",{class:!0});var fs=n(D);Y=a(fs,"A",{id:!0,class:!0,href:!0});var ln=n(Y);ht=a(ln,"SPAN",{});var pn=n(ht);z(ce.$$.fragment,pn),pn.forEach(s),ln.forEach(s),ko=u(fs),ft=a(fs,"SPAN",{});var mn=n(ft);zo=r(mn,"Using Optimum models"),mn.forEach(s),fs.forEach(s),Zt=u(e),v=a(e,"P",{});var b=n(v);jo=r(b,"The "),gt=a(b,"CODE",{});var cn=n(gt);yo=r(cn,"pipeline()"),cn.forEach(s),xo=r(b," function is tightly integrated with "),ue=a(b,"A",{href:!0,rel:!0});var un=n(ue);Oo=r(un,"Model Hub"),un.forEach(s),$o=r(b,` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),_t=a(b,"CODE",{});var dn=n(_t);Eo=r(dn,"from_pretrained()"),dn.forEach(s),To=r(b," method associated with the corresponding "),vt=a(b,"CODE",{});var hn=n(vt);bo=r(hn,"ORTModelFor*"),hn.forEach(s),Ao=r(b,`
and `),wt=a(b,"CODE",{});var fn=n(wt);Ro=r(fn,"AutoTokenizer'/"),fn.forEach(s),Mo=r(b,"AutoFeatureExtractor` class. For example, here\u2019s how you can load an optimized model for question answering:"),b.forEach(s),es=u(e),z(de.$$.fragment,e),ts=u(e),S=a(e,"H3",{class:!0});var gs=n(S);J=a(gs,"A",{id:!0,class:!0,href:!0});var gn=n(J);qt=a(gn,"SPAN",{});var _n=n(qt);z(he.$$.fragment,_n),_n.forEach(s),gn.forEach(s),Co=u(gs),kt=a(gs,"SPAN",{});var vn=n(kt);Po=r(vn,"Optimizing and quantizing in pipelines"),vn.forEach(s),gs.forEach(s),ss=u(e),w=a(e,"P",{});var A=n(w);No=r(A,"The "),zt=a(A,"CODE",{});var wn=n(zt);Fo=r(wn,"pipeline()"),wn.forEach(s),Qo=r(A," function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),jt=a(A,"CODE",{});var qn=n(jt);Do=r(qn,"ORTQuantizer"),qn.forEach(s),So=r(A," and "),yt=a(A,"CODE",{});var kn=n(yt);Io=r(kn,"ORTOptimizer"),kn.forEach(s),Ho=r(A,`.
Below you can find two examples on how you could `),Ee=a(A,"A",{href:!0});var zn=n(Ee);Lo=r(zn,"ORTOptimizer"),zn.forEach(s),Xo=r(A," and "),Te=a(A,"A",{href:!0});var jn=n(Te);Uo=r(jn,"ORTQuantizer"),jn.forEach(s),Wo=r(A," to optimize/quantize your model and use it for inference afterwards."),A.forEach(s),os=u(e),I=a(e,"H3",{class:!0});var _s=n(I);V=a(_s,"A",{id:!0,class:!0,href:!0});var yn=n(V);xt=a(yn,"SPAN",{});var xn=n(xt);z(fe.$$.fragment,xn),xn.forEach(s),yn.forEach(s),Bo=u(_s),be=a(_s,"SPAN",{});var ua=n(be);Go=r(ua,"Quantizing with "),Ot=a(ua,"CODE",{});var On=n(Ot);Yo=r(On,"ORTQuantizer"),On.forEach(s),ua.forEach(s),_s.forEach(s),as=u(e),z(ge.$$.fragment,e),ns=u(e),H=a(e,"H3",{class:!0});var vs=n(H);K=a(vs,"A",{id:!0,class:!0,href:!0});var $n=n(K);$t=a($n,"SPAN",{});var En=n($t);z(_e.$$.fragment,En),En.forEach(s),$n.forEach(s),Jo=u(vs),Ae=a(vs,"SPAN",{});var da=n(Ae);Vo=r(da,"Optimizing with "),Et=a(da,"CODE",{});var Tn=n(Et);Ko=r(Tn,"ORTOptimizer"),Tn.forEach(s),da.forEach(s),vs.forEach(s),is=u(e),z(ve.$$.fragment,e),rs=u(e),L=a(e,"H2",{class:!0});var ws=n(L);Z=a(ws,"A",{id:!0,class:!0,href:!0});var bn=n(Z);Tt=a(bn,"SPAN",{});var An=n(Tt);z(we.$$.fragment,An),An.forEach(s),bn.forEach(s),Zo=u(ws),bt=a(ws,"SPAN",{});var Rn=n(bt);ea=r(Rn,"Transformers pipeline usage"),Rn.forEach(s),ws.forEach(s),ls=u(e),q=a(e,"P",{});var R=n(q);ta=r(R,"The "),At=a(R,"CODE",{});var Mn=n(At);sa=r(Mn,"pipeline()"),Mn.forEach(s),oa=r(R," function is just a light wrapper around the "),Rt=a(R,"CODE",{});var Cn=n(Rt);aa=r(Cn,"transformers.pipeline"),Cn.forEach(s),na=r(R,` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),Mt=a(R,"CODE",{});var Pn=n(Mt);ia=r(Pn,"transformers.pipeline"),Pn.forEach(s),ra=r(R," and just replace your "),Ct=a(R,"CODE",{});var Nn=n(Ct);la=r(Nn,"AutoModelFor*"),Nn.forEach(s),pa=r(R,` with the optimum
`),Pt=a(R,"CODE",{});var Fn=n(Pt);ma=r(Fn,"ORTModelFor*"),Fn.forEach(s),ca=r(R," class."),R.forEach(s),ps=u(e),z(qe.$$.fragment,e),this.h()},h(){m(f,"name","hf:doc:metadata"),m(f,"content",JSON.stringify(Wn)),m(E,"id","optimum-pipelines-for-inference"),m(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(E,"href","#optimum-pipelines-for-inference"),m(g,"class","relative group"),m(te,"href","https://huggingface.co/models"),m(te,"rel","nofollow"),m(B,"id","optimum-pipeline-usage"),m(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(B,"href","#optimum-pipeline-usage"),m(F,"class","relative group"),m(ae,"start","2"),m(G,"id","using-vanilla-transformers-model-and-converting-to-onnx"),m(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(G,"href","#using-vanilla-transformers-model-and-converting-to-onnx"),m(Q,"class","relative group"),m(pe,"href","https://huggingface.co/models"),m(pe,"rel","nofollow"),m($e,"href","/docs/optimum/v1.4.0/en/onnxruntime/modeling_ort#optimum.onnxruntime.ORTModelForQuestionAnswering"),m(Y,"id","using-optimum-models"),m(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Y,"href","#using-optimum-models"),m(D,"class","relative group"),m(ue,"href","https://huggingface.co/models"),m(ue,"rel","nofollow"),m(J,"id","optimizing-and-quantizing-in-pipelines"),m(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(J,"href","#optimizing-and-quantizing-in-pipelines"),m(S,"class","relative group"),m(Ee,"href","/docs/optimum/v1.4.0/en/onnxruntime/optimization#optimum.onnxruntime.ORTOptimizer"),m(Te,"href","/docs/optimum/v1.4.0/en/onnxruntime/quantization#optimum.onnxruntime.ORTQuantizer"),m(V,"id","quantizing-with-ortquantizer"),m(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(V,"href","#quantizing-with-ortquantizer"),m(I,"class","relative group"),m(K,"id","optimizing-with-ortoptimizer"),m(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(K,"href","#optimizing-with-ortoptimizer"),m(H,"class","relative group"),m(Z,"id","transformers-pipeline-usage"),m(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Z,"href","#transformers-pipeline-usage"),m(L,"class","relative group")},m(e,l){t(document.head,f),p(e,X,l),p(e,g,l),t(g,E),t(E,N),j($,N,null),t(g,M),t(g,U),t(U,qs),p(e,Ft,l),p(e,C,l),t(C,ks),t(C,Ce),t(Ce,zs),t(C,js),t(C,te),t(te,ys),t(C,xs),p(e,Qt,l),j(W,e,l),p(e,Dt,l),p(e,je,l),t(je,Os),p(e,St,l),p(e,ye,l),t(ye,Pe),t(Pe,$s),p(e,It,l),p(e,d,l),t(d,Ne),t(Ne,Fe),t(Fe,Es),t(d,Ts),t(d,Qe),t(Qe,De),t(De,bs),t(d,As),t(d,Se),t(Se,Ie),t(Ie,Rs),t(d,Ms),t(d,He),t(He,Le),t(Le,Cs),t(d,Ps),t(d,Xe),t(Xe,Ue),t(Ue,Ns),t(d,Fs),t(d,We),t(We,Be),t(Be,Qs),t(d,Ds),t(d,Ge),t(Ge,Ye),t(Ye,Ss),t(d,Is),t(d,Je),t(Je,Ve),t(Ve,Hs),t(d,Ls),t(d,Ke),t(Ke,Ze),t(Ze,Xs),t(d,Us),t(d,et),t(et,tt),t(tt,Ws),p(e,Ht,l),p(e,F,l),t(F,B),t(B,st),j(se,st,null),t(F,Bs),t(F,ot),t(ot,Gs),p(e,Lt,l),p(e,P,l),t(P,Ys),t(P,at),t(at,Js),t(P,Vs),t(P,nt),t(nt,Ks),t(P,Zs),p(e,Xt,l),p(e,xe,l),t(xe,it),t(it,eo),p(e,Ut,l),j(oe,e,l),p(e,Wt,l),p(e,ae,l),t(ae,ne),t(ne,to),t(ne,rt),t(rt,so),t(ne,oo),p(e,Bt,l),j(ie,e,l),p(e,Gt,l),p(e,Oe,l),t(Oe,re),t(re,ao),t(re,lt),t(lt,no),t(re,io),p(e,Yt,l),p(e,Q,l),t(Q,G),t(G,pt),j(le,pt,null),t(Q,ro),t(Q,mt),t(mt,lo),p(e,Jt,l),p(e,_,l),t(_,po),t(_,ct),t(ct,mo),t(_,co),t(_,pe),t(pe,uo),t(_,ho),t(_,ut),t(ut,fo),t(_,go),t(_,dt),t(dt,_o),t(_,vo),t(_,$e),t($e,wo),t(_,qo),p(e,Vt,l),j(me,e,l),p(e,Kt,l),p(e,D,l),t(D,Y),t(Y,ht),j(ce,ht,null),t(D,ko),t(D,ft),t(ft,zo),p(e,Zt,l),p(e,v,l),t(v,jo),t(v,gt),t(gt,yo),t(v,xo),t(v,ue),t(ue,Oo),t(v,$o),t(v,_t),t(_t,Eo),t(v,To),t(v,vt),t(vt,bo),t(v,Ao),t(v,wt),t(wt,Ro),t(v,Mo),p(e,es,l),j(de,e,l),p(e,ts,l),p(e,S,l),t(S,J),t(J,qt),j(he,qt,null),t(S,Co),t(S,kt),t(kt,Po),p(e,ss,l),p(e,w,l),t(w,No),t(w,zt),t(zt,Fo),t(w,Qo),t(w,jt),t(jt,Do),t(w,So),t(w,yt),t(yt,Io),t(w,Ho),t(w,Ee),t(Ee,Lo),t(w,Xo),t(w,Te),t(Te,Uo),t(w,Wo),p(e,os,l),p(e,I,l),t(I,V),t(V,xt),j(fe,xt,null),t(I,Bo),t(I,be),t(be,Go),t(be,Ot),t(Ot,Yo),p(e,as,l),j(ge,e,l),p(e,ns,l),p(e,H,l),t(H,K),t(K,$t),j(_e,$t,null),t(H,Jo),t(H,Ae),t(Ae,Vo),t(Ae,Et),t(Et,Ko),p(e,is,l),j(ve,e,l),p(e,rs,l),p(e,L,l),t(L,Z),t(Z,Tt),j(we,Tt,null),t(L,Zo),t(L,bt),t(bt,ea),p(e,ls,l),p(e,q,l),t(q,ta),t(q,At),t(At,sa),t(q,oa),t(q,Rt),t(Rt,aa),t(q,na),t(q,Mt),t(Mt,ia),t(q,ra),t(q,Ct),t(Ct,la),t(q,pa),t(q,Pt),t(Pt,ma),t(q,ca),p(e,ps,l),j(qe,e,l),ms=!0},p(e,[l]){const ke={};l&2&&(ke.$$scope={dirty:l,ctx:e}),W.$set(ke)},i(e){ms||(y($.$$.fragment,e),y(W.$$.fragment,e),y(se.$$.fragment,e),y(oe.$$.fragment,e),y(ie.$$.fragment,e),y(le.$$.fragment,e),y(me.$$.fragment,e),y(ce.$$.fragment,e),y(de.$$.fragment,e),y(he.$$.fragment,e),y(fe.$$.fragment,e),y(ge.$$.fragment,e),y(_e.$$.fragment,e),y(ve.$$.fragment,e),y(we.$$.fragment,e),y(qe.$$.fragment,e),ms=!0)},o(e){x($.$$.fragment,e),x(W.$$.fragment,e),x(se.$$.fragment,e),x(oe.$$.fragment,e),x(ie.$$.fragment,e),x(le.$$.fragment,e),x(me.$$.fragment,e),x(ce.$$.fragment,e),x(de.$$.fragment,e),x(he.$$.fragment,e),x(fe.$$.fragment,e),x(ge.$$.fragment,e),x(_e.$$.fragment,e),x(ve.$$.fragment,e),x(we.$$.fragment,e),x(qe.$$.fragment,e),ms=!1},d(e){s(f),e&&s(X),e&&s(g),O($),e&&s(Ft),e&&s(C),e&&s(Qt),O(W,e),e&&s(Dt),e&&s(je),e&&s(St),e&&s(ye),e&&s(It),e&&s(d),e&&s(Ht),e&&s(F),O(se),e&&s(Lt),e&&s(P),e&&s(Xt),e&&s(xe),e&&s(Ut),O(oe,e),e&&s(Wt),e&&s(ae),e&&s(Bt),O(ie,e),e&&s(Gt),e&&s(Oe),e&&s(Yt),e&&s(Q),O(le),e&&s(Jt),e&&s(_),e&&s(Vt),O(me,e),e&&s(Kt),e&&s(D),O(ce),e&&s(Zt),e&&s(v),e&&s(es),O(de,e),e&&s(ts),e&&s(S),O(he),e&&s(ss),e&&s(w),e&&s(os),e&&s(I),O(fe),e&&s(as),O(ge,e),e&&s(ns),e&&s(H),O(_e),e&&s(is),O(ve,e),e&&s(rs),e&&s(L),O(we),e&&s(ls),e&&s(q),e&&s(ps),O(qe,e)}}}const Wn={local:"optimum-pipelines-for-inference",sections:[{local:"optimum-pipeline-usage",sections:[{local:"using-vanilla-transformers-model-and-converting-to-onnx",title:"Using vanilla Transformers model and converting to ONNX"},{local:"using-optimum-models",title:"Using Optimum models"},{local:"optimizing-and-quantizing-in-pipelines",title:"Optimizing and quantizing in pipelines"},{local:"quantizing-with-ortquantizer",title:"Quantizing with `ORTQuantizer`"},{local:"optimizing-with-ortoptimizer",title:"Optimizing with `ORTOptimizer`"}],title:"Optimum pipeline usage"},{local:"transformers-pipeline-usage",title:"Transformers pipeline usage"}],title:"Optimum pipelines for inference"};function Bn(Nt){return Hn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Kn extends Qn{constructor(f){super();Dn(this,f,Bn,Un,Sn,{})}}export{Kn as default,Wn as metadata};
