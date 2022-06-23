import{S as qo,i as ko,s as jo,e as a,k as c,w as q,t as i,M as zo,c as n,d as s,m as u,a as o,x as k,h as r,b as m,G as t,g as p,y as j,q as z,o as y,B as x,v as yo}from"../chunks/vendor-hf-doc-builder.js";import{T as xo}from"../chunks/Tip-hf-doc-builder.js";import{I as ee}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as je}from"../chunks/CodeBlock-hf-doc-builder.js";function Oo(bt){let d,U,f,T,F;return{c(){d=a("p"),U=i("You can also use the "),f=a("a"),T=i("pipeline()"),F=i(" function from Transformers and provide your Optimum model class."),this.h()},l($){d=n($,"P",{});var C=o(d);U=r(C,"You can also use the "),f=n(C,"A",{href:!0,rel:!0});var W=o(f);T=r(W,"pipeline()"),W.forEach(s),F=r(C," function from Transformers and provide your Optimum model class."),C.forEach(s),this.h()},h(){m(f,"href","https://huggingface.co/docs/transformers/main/en/main_classes/pipelines#pipelines"),m(f,"rel","nofollow")},m($,C){p($,d,C),t(d,U),t(d,f),t(f,T),t(d,F)},d($){$&&s(d)}}}function $o(bt){let d,U,f,T,F,$,C,W,hs,At,M,fs,Me,gs,_s,te,vs,ws,Rt,X,Ct,ze,qs,Mt,ye,Pe,ks,Pt,h,Fe,Ne,js,zs,Qe,Se,ys,xs,De,Ie,Os,$s,He,Le,Ts,Es,Ue,We,bs,As,Xe,Be,Rs,Cs,Ge,Ye,Ms,Ft,N,B,Je,se,Ps,Ve,Fs,Nt,P,Ns,Ke,Qs,Ss,Ze,Ds,Is,Qt,xe,et,Hs,St,ae,Dt,ne,oe,Ls,tt,Us,Ws,It,ie,Ht,Oe,re,Xs,st,Bs,Gs,Lt,Q,G,at,le,Ys,nt,Js,Ut,g,Vs,ot,Ks,Zs,pe,ea,ta,it,sa,aa,rt,na,oa,$e,ia,ra,Wt,me,Xt,S,Y,lt,ce,la,pt,pa,Bt,_,ma,mt,ca,ua,ue,da,ha,ct,fa,ga,ut,_a,va,dt,wa,qa,Gt,de,Yt,D,J,ht,he,ka,ft,ja,Jt,v,za,gt,ya,xa,_t,Oa,$a,vt,Ta,Ea,Te,ba,Aa,Ee,Ra,Ca,Vt,I,V,wt,fe,Ma,be,Pa,qt,Fa,Kt,ge,Zt,H,K,kt,_e,Na,Ae,Qa,jt,Sa,es,ve,ts,L,Z,zt,we,Da,yt,Ia,ss,w,Ha,xt,La,Ua,Ot,Wa,Xa,$t,Ba,Ga,Tt,Ya,Ja,Et,Va,Ka,as,qe,ns;return $=new ee({}),X=new xo({props:{$$slots:{default:[Oo]},$$scope:{ctx:bt}}}),se=new ee({}),ae=new je({props:{code:`from optimum.pipelines import pipeline

classifier = pipeline(task="text-classification", accelerator="ort")
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.pipelines <span class="hljs-keyword">import</span> pipeline

<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = pipeline(task=<span class="hljs-string">&quot;text-classification&quot;</span>, accelerator=<span class="hljs-string">&quot;ort&quot;</span>)
`}}),ie=new je({props:{code:'classifier("I like you. I love you.")',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>classifier(<span class="hljs-string">&quot;I like you. I love you.&quot;</span>)
[{<span class="hljs-string">&#x27;label&#x27;</span>: <span class="hljs-string">&#x27;POSITIVE&#x27;</span>, <span class="hljs-string">&#x27;score&#x27;</span>: <span class="hljs-number">0.9998838901519775</span>}]`}}),le=new ee({}),me=new je({props:{code:`from transformers import AutoTokenizer
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

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),ce=new ee({}),de=new je({props:{code:`from transformers import AutoTokenizer
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

<span class="hljs-meta">&gt;&gt;&gt; </span>pred = onnx_qa(question=question, context=context)`}}),he=new ee({}),fe=new ee({}),ge=new je({props:{code:`from pathlib import Path
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
                  )`}}),_e=new ee({}),ve=new je({props:{code:`from pathlib import Path
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
                  use_auth_token=<span class="hljs-literal">True</span>)`}}),we=new ee({}),qe=new je({props:{code:`

`,highlighted:`from transformers import AutoTokenizer, pipeline
<span class="hljs-deletion">-from transformers import AutoModelForQuestionAnswering</span>
<span class="hljs-addition">+from optimum.onnxruntime import ORTModelForQuestionAnswering</span>

<span class="hljs-deletion">-model = AutoModelForQuestionAnswering.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)</span>
<span class="hljs-addition">+model = ORTModelForQuestionAnswering.from_pretrained(&quot;optimum/roberta-base-squad2&quot;)</span>
tokenizer = AutoTokenizer.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)

onnx_qa = pipeline(&quot;question-answering&quot;,model=model,tokenizer=tokenizer)

question = &quot;What&#x27;s my name?&quot;
context = &quot;My name is Philipp and I live in Nuremberg.&quot;
pred = onnx_qa(question, context)`}}),{c(){d=a("meta"),U=c(),f=a("h1"),T=a("a"),F=a("span"),q($.$$.fragment),C=c(),W=a("span"),hs=i("Optimum pipelines for inference"),At=c(),M=a("p"),fs=i("The "),Me=a("code"),gs=i("pipeline()"),_s=i(" function makes it simple to use models from the "),te=a("a"),vs=i("Model Hub"),ws=i(" for accelerated inference on a variety of tasks such as text classification, question answering and image classification."),Rt=c(),q(X.$$.fragment),Ct=c(),ze=a("p"),qs=i("Currenlty supported tasks are:"),Mt=c(),ye=a("p"),Pe=a("strong"),ks=i("Onnx Runtime"),Pt=c(),h=a("ul"),Fe=a("li"),Ne=a("code"),js=i("feature-extraction"),zs=c(),Qe=a("li"),Se=a("code"),ys=i("text-classification"),xs=c(),De=a("li"),Ie=a("code"),Os=i("token-classification"),$s=c(),He=a("li"),Le=a("code"),Ts=i("question-answering"),Es=c(),Ue=a("li"),We=a("code"),bs=i("zero-shot-classification"),As=c(),Xe=a("li"),Be=a("code"),Rs=i("text-generation"),Cs=c(),Ge=a("li"),Ye=a("code"),Ms=i("image-classification"),Ft=c(),N=a("h2"),B=a("a"),Je=a("span"),q(se.$$.fragment),Ps=c(),Ve=a("span"),Fs=i("Optimum pipeline usage"),Nt=c(),P=a("p"),Ns=i("While each task has an associated pipeline class, it is simpler to use the general "),Ke=a("code"),Qs=i("pipeline()"),Ss=i(` function which wraps all the task-specific pipelines in one object.
The `),Ze=a("code"),Ds=i("pipeline()"),Is=i(" function automatically loads a default model and tokenizer/feature-extractor capable of inference for your task."),Qt=c(),xe=a("ol"),et=a("li"),Hs=i("Start by creating a pipeline by specifying an inference task:"),St=c(),q(ae.$$.fragment),Dt=c(),ne=a("ol"),oe=a("li"),Ls=i("Pass your input text/image to the "),tt=a("code"),Us=i("pipeline()"),Ws=i(" function:"),It=c(),q(ie.$$.fragment),Ht=c(),Oe=a("p"),re=a("em"),Xs=i("Note: The default models used in the "),st=a("code"),Bs=i("pipeline()"),Gs=i(" function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),Lt=c(),Q=a("h3"),G=a("a"),at=a("span"),q(le.$$.fragment),Ys=c(),nt=a("span"),Js=i("Using vanilla Transformers model and converting to ONNX"),Ut=c(),g=a("p"),Vs=i("The "),ot=a("code"),Ks=i("pipeline()"),Zs=i(" function accepts any supported model from the "),pe=a("a"),ea=i("Model Hub"),ta=i(`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),it=a("code"),sa=i('from_pretrained("{model_id}",from_transformers=True)'),aa=i(" method associated with the "),rt=a("code"),na=i("ORTModelFor*"),oa=i("\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),$e=a("a"),ia=i("ORTModelForQuestionAnswering"),ra=i(" class for question answering:"),Wt=c(),q(me.$$.fragment),Xt=c(),S=a("h3"),Y=a("a"),lt=a("span"),q(ce.$$.fragment),la=c(),pt=a("span"),pa=i("Using Optimum models"),Bt=c(),_=a("p"),ma=i("The "),mt=a("code"),ca=i("pipeline()"),ua=i(" function is tightly integrated with "),ue=a("a"),da=i("Model Hub"),ha=i(` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ct=a("code"),fa=i("from_pretrained()"),ga=i(" method associated with the corresponding "),ut=a("code"),_a=i("ORTModelFor*"),va=i(`
and `),dt=a("code"),wa=i("AutoTokenizer'/"),qa=i("AutoFeatureExtractor` class. For example, here\u2019s how you can load an optimized model for question answering:"),Gt=c(),q(de.$$.fragment),Yt=c(),D=a("h3"),J=a("a"),ht=a("span"),q(he.$$.fragment),ka=c(),ft=a("span"),ja=i("Optimizing and quantizing in pipelines"),Jt=c(),v=a("p"),za=i("The "),gt=a("code"),ya=i("pipeline()"),xa=i(" function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),_t=a("code"),Oa=i("ORTQuantizer"),$a=i(" and "),vt=a("code"),Ta=i("ORTOptimizer"),Ea=i(`.
Below you can find two examples on how you could `),Te=a("a"),ba=i("ORTOptimizer"),Aa=i(" and "),Ee=a("a"),Ra=i("ORTQuantizer"),Ca=i(" to optimize/quantize your model and use it for inference afterwards."),Vt=c(),I=a("h3"),V=a("a"),wt=a("span"),q(fe.$$.fragment),Ma=c(),be=a("span"),Pa=i("Quantizing with "),qt=a("code"),Fa=i("ORTQuantizer"),Kt=c(),q(ge.$$.fragment),Zt=c(),H=a("h3"),K=a("a"),kt=a("span"),q(_e.$$.fragment),Na=c(),Ae=a("span"),Qa=i("Optimizing with "),jt=a("code"),Sa=i("ORTOptimizer"),es=c(),q(ve.$$.fragment),ts=c(),L=a("h2"),Z=a("a"),zt=a("span"),q(we.$$.fragment),Da=c(),yt=a("span"),Ia=i("Transformers pipeline usage"),ss=c(),w=a("p"),Ha=i("The "),xt=a("code"),La=i("pipeline()"),Ua=i(" function is just a light wrapper around the "),Ot=a("code"),Wa=i("transformers.pipeline"),Xa=i(` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),$t=a("code"),Ba=i("transformers.pipeline"),Ga=i(" and just replace your "),Tt=a("code"),Ya=i("AutoModelFor*"),Ja=i(` with the optimum
`),Et=a("code"),Va=i("ORTModelFor*"),Ka=i(" class."),as=c(),q(qe.$$.fragment),this.h()},l(e){const l=zo('[data-svelte="svelte-1phssyn"]',document.head);d=n(l,"META",{name:!0,content:!0}),l.forEach(s),U=u(e),f=n(e,"H1",{class:!0});var ke=o(f);T=n(ke,"A",{id:!0,class:!0,href:!0});var tn=o(T);F=n(tn,"SPAN",{});var sn=o(F);k($.$$.fragment,sn),sn.forEach(s),tn.forEach(s),C=u(ke),W=n(ke,"SPAN",{});var an=o(W);hs=r(an,"Optimum pipelines for inference"),an.forEach(s),ke.forEach(s),At=u(e),M=n(e,"P",{});var Re=o(M);fs=r(Re,"The "),Me=n(Re,"CODE",{});var nn=o(Me);gs=r(nn,"pipeline()"),nn.forEach(s),_s=r(Re," function makes it simple to use models from the "),te=n(Re,"A",{href:!0,rel:!0});var on=o(te);vs=r(on,"Model Hub"),on.forEach(s),ws=r(Re," for accelerated inference on a variety of tasks such as text classification, question answering and image classification."),Re.forEach(s),Rt=u(e),k(X.$$.fragment,e),Ct=u(e),ze=n(e,"P",{});var rn=o(ze);qs=r(rn,"Currenlty supported tasks are:"),rn.forEach(s),Mt=u(e),ye=n(e,"P",{});var ln=o(ye);Pe=n(ln,"STRONG",{});var pn=o(Pe);ks=r(pn,"Onnx Runtime"),pn.forEach(s),ln.forEach(s),Pt=u(e),h=n(e,"UL",{});var O=o(h);Fe=n(O,"LI",{});var mn=o(Fe);Ne=n(mn,"CODE",{});var cn=o(Ne);js=r(cn,"feature-extraction"),cn.forEach(s),mn.forEach(s),zs=u(O),Qe=n(O,"LI",{});var un=o(Qe);Se=n(un,"CODE",{});var dn=o(Se);ys=r(dn,"text-classification"),dn.forEach(s),un.forEach(s),xs=u(O),De=n(O,"LI",{});var hn=o(De);Ie=n(hn,"CODE",{});var fn=o(Ie);Os=r(fn,"token-classification"),fn.forEach(s),hn.forEach(s),$s=u(O),He=n(O,"LI",{});var gn=o(He);Le=n(gn,"CODE",{});var _n=o(Le);Ts=r(_n,"question-answering"),_n.forEach(s),gn.forEach(s),Es=u(O),Ue=n(O,"LI",{});var vn=o(Ue);We=n(vn,"CODE",{});var wn=o(We);bs=r(wn,"zero-shot-classification"),wn.forEach(s),vn.forEach(s),As=u(O),Xe=n(O,"LI",{});var qn=o(Xe);Be=n(qn,"CODE",{});var kn=o(Be);Rs=r(kn,"text-generation"),kn.forEach(s),qn.forEach(s),Cs=u(O),Ge=n(O,"LI",{});var jn=o(Ge);Ye=n(jn,"CODE",{});var zn=o(Ye);Ms=r(zn,"image-classification"),zn.forEach(s),jn.forEach(s),O.forEach(s),Ft=u(e),N=n(e,"H2",{class:!0});var os=o(N);B=n(os,"A",{id:!0,class:!0,href:!0});var yn=o(B);Je=n(yn,"SPAN",{});var xn=o(Je);k(se.$$.fragment,xn),xn.forEach(s),yn.forEach(s),Ps=u(os),Ve=n(os,"SPAN",{});var On=o(Ve);Fs=r(On,"Optimum pipeline usage"),On.forEach(s),os.forEach(s),Nt=u(e),P=n(e,"P",{});var Ce=o(P);Ns=r(Ce,"While each task has an associated pipeline class, it is simpler to use the general "),Ke=n(Ce,"CODE",{});var $n=o(Ke);Qs=r($n,"pipeline()"),$n.forEach(s),Ss=r(Ce,` function which wraps all the task-specific pipelines in one object.
The `),Ze=n(Ce,"CODE",{});var Tn=o(Ze);Ds=r(Tn,"pipeline()"),Tn.forEach(s),Is=r(Ce," function automatically loads a default model and tokenizer/feature-extractor capable of inference for your task."),Ce.forEach(s),Qt=u(e),xe=n(e,"OL",{});var En=o(xe);et=n(En,"LI",{});var bn=o(et);Hs=r(bn,"Start by creating a pipeline by specifying an inference task:"),bn.forEach(s),En.forEach(s),St=u(e),k(ae.$$.fragment,e),Dt=u(e),ne=n(e,"OL",{start:!0});var An=o(ne);oe=n(An,"LI",{});var is=o(oe);Ls=r(is,"Pass your input text/image to the "),tt=n(is,"CODE",{});var Rn=o(tt);Us=r(Rn,"pipeline()"),Rn.forEach(s),Ws=r(is," function:"),is.forEach(s),An.forEach(s),It=u(e),k(ie.$$.fragment,e),Ht=u(e),Oe=n(e,"P",{});var Cn=o(Oe);re=n(Cn,"EM",{});var rs=o(re);Xs=r(rs,"Note: The default models used in the "),st=n(rs,"CODE",{});var Mn=o(st);Bs=r(Mn,"pipeline()"),Mn.forEach(s),Gs=r(rs," function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),rs.forEach(s),Cn.forEach(s),Lt=u(e),Q=n(e,"H3",{class:!0});var ls=o(Q);G=n(ls,"A",{id:!0,class:!0,href:!0});var Pn=o(G);at=n(Pn,"SPAN",{});var Fn=o(at);k(le.$$.fragment,Fn),Fn.forEach(s),Pn.forEach(s),Ys=u(ls),nt=n(ls,"SPAN",{});var Nn=o(nt);Js=r(Nn,"Using vanilla Transformers model and converting to ONNX"),Nn.forEach(s),ls.forEach(s),Ut=u(e),g=n(e,"P",{});var E=o(g);Vs=r(E,"The "),ot=n(E,"CODE",{});var Qn=o(ot);Ks=r(Qn,"pipeline()"),Qn.forEach(s),Zs=r(E," function accepts any supported model from the "),pe=n(E,"A",{href:!0,rel:!0});var Sn=o(pe);ea=r(Sn,"Model Hub"),Sn.forEach(s),ta=r(E,`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),it=n(E,"CODE",{});var Dn=o(it);sa=r(Dn,'from_pretrained("{model_id}",from_transformers=True)'),Dn.forEach(s),aa=r(E," method associated with the "),rt=n(E,"CODE",{});var In=o(rt);na=r(In,"ORTModelFor*"),In.forEach(s),oa=r(E,"\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),$e=n(E,"A",{href:!0});var Hn=o($e);ia=r(Hn,"ORTModelForQuestionAnswering"),Hn.forEach(s),ra=r(E," class for question answering:"),E.forEach(s),Wt=u(e),k(me.$$.fragment,e),Xt=u(e),S=n(e,"H3",{class:!0});var ps=o(S);Y=n(ps,"A",{id:!0,class:!0,href:!0});var Ln=o(Y);lt=n(Ln,"SPAN",{});var Un=o(lt);k(ce.$$.fragment,Un),Un.forEach(s),Ln.forEach(s),la=u(ps),pt=n(ps,"SPAN",{});var Wn=o(pt);pa=r(Wn,"Using Optimum models"),Wn.forEach(s),ps.forEach(s),Bt=u(e),_=n(e,"P",{});var b=o(_);ma=r(b,"The "),mt=n(b,"CODE",{});var Xn=o(mt);ca=r(Xn,"pipeline()"),Xn.forEach(s),ua=r(b," function is tightly integrated with "),ue=n(b,"A",{href:!0,rel:!0});var Bn=o(ue);da=r(Bn,"Model Hub"),Bn.forEach(s),ha=r(b,` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ct=n(b,"CODE",{});var Gn=o(ct);fa=r(Gn,"from_pretrained()"),Gn.forEach(s),ga=r(b," method associated with the corresponding "),ut=n(b,"CODE",{});var Yn=o(ut);_a=r(Yn,"ORTModelFor*"),Yn.forEach(s),va=r(b,`
and `),dt=n(b,"CODE",{});var Jn=o(dt);wa=r(Jn,"AutoTokenizer'/"),Jn.forEach(s),qa=r(b,"AutoFeatureExtractor` class. For example, here\u2019s how you can load an optimized model for question answering:"),b.forEach(s),Gt=u(e),k(de.$$.fragment,e),Yt=u(e),D=n(e,"H3",{class:!0});var ms=o(D);J=n(ms,"A",{id:!0,class:!0,href:!0});var Vn=o(J);ht=n(Vn,"SPAN",{});var Kn=o(ht);k(he.$$.fragment,Kn),Kn.forEach(s),Vn.forEach(s),ka=u(ms),ft=n(ms,"SPAN",{});var Zn=o(ft);ja=r(Zn,"Optimizing and quantizing in pipelines"),Zn.forEach(s),ms.forEach(s),Jt=u(e),v=n(e,"P",{});var A=o(v);za=r(A,"The "),gt=n(A,"CODE",{});var eo=o(gt);ya=r(eo,"pipeline()"),eo.forEach(s),xa=r(A," function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),_t=n(A,"CODE",{});var to=o(_t);Oa=r(to,"ORTQuantizer"),to.forEach(s),$a=r(A," and "),vt=n(A,"CODE",{});var so=o(vt);Ta=r(so,"ORTOptimizer"),so.forEach(s),Ea=r(A,`.
Below you can find two examples on how you could `),Te=n(A,"A",{href:!0});var ao=o(Te);ba=r(ao,"ORTOptimizer"),ao.forEach(s),Aa=r(A," and "),Ee=n(A,"A",{href:!0});var no=o(Ee);Ra=r(no,"ORTQuantizer"),no.forEach(s),Ca=r(A," to optimize/quantize your model and use it for inference afterwards."),A.forEach(s),Vt=u(e),I=n(e,"H3",{class:!0});var cs=o(I);V=n(cs,"A",{id:!0,class:!0,href:!0});var oo=o(V);wt=n(oo,"SPAN",{});var io=o(wt);k(fe.$$.fragment,io),io.forEach(s),oo.forEach(s),Ma=u(cs),be=n(cs,"SPAN",{});var Za=o(be);Pa=r(Za,"Quantizing with "),qt=n(Za,"CODE",{});var ro=o(qt);Fa=r(ro,"ORTQuantizer"),ro.forEach(s),Za.forEach(s),cs.forEach(s),Kt=u(e),k(ge.$$.fragment,e),Zt=u(e),H=n(e,"H3",{class:!0});var us=o(H);K=n(us,"A",{id:!0,class:!0,href:!0});var lo=o(K);kt=n(lo,"SPAN",{});var po=o(kt);k(_e.$$.fragment,po),po.forEach(s),lo.forEach(s),Na=u(us),Ae=n(us,"SPAN",{});var en=o(Ae);Qa=r(en,"Optimizing with "),jt=n(en,"CODE",{});var mo=o(jt);Sa=r(mo,"ORTOptimizer"),mo.forEach(s),en.forEach(s),us.forEach(s),es=u(e),k(ve.$$.fragment,e),ts=u(e),L=n(e,"H2",{class:!0});var ds=o(L);Z=n(ds,"A",{id:!0,class:!0,href:!0});var co=o(Z);zt=n(co,"SPAN",{});var uo=o(zt);k(we.$$.fragment,uo),uo.forEach(s),co.forEach(s),Da=u(ds),yt=n(ds,"SPAN",{});var ho=o(yt);Ia=r(ho,"Transformers pipeline usage"),ho.forEach(s),ds.forEach(s),ss=u(e),w=n(e,"P",{});var R=o(w);Ha=r(R,"The "),xt=n(R,"CODE",{});var fo=o(xt);La=r(fo,"pipeline()"),fo.forEach(s),Ua=r(R," function is just a light wrapper around the "),Ot=n(R,"CODE",{});var go=o(Ot);Wa=r(go,"transformers.pipeline"),go.forEach(s),Xa=r(R,` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),$t=n(R,"CODE",{});var _o=o($t);Ba=r(_o,"transformers.pipeline"),_o.forEach(s),Ga=r(R," and just replace your "),Tt=n(R,"CODE",{});var vo=o(Tt);Ya=r(vo,"AutoModelFor*"),vo.forEach(s),Ja=r(R,` with the optimum
`),Et=n(R,"CODE",{});var wo=o(Et);Va=r(wo,"ORTModelFor*"),wo.forEach(s),Ka=r(R," class."),R.forEach(s),as=u(e),k(qe.$$.fragment,e),this.h()},h(){m(d,"name","hf:doc:metadata"),m(d,"content",JSON.stringify(To)),m(T,"id","optimum-pipelines-for-inference"),m(T,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(T,"href","#optimum-pipelines-for-inference"),m(f,"class","relative group"),m(te,"href","https://huggingface.co/models"),m(te,"rel","nofollow"),m(B,"id","optimum-pipeline-usage"),m(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(B,"href","#optimum-pipeline-usage"),m(N,"class","relative group"),m(ne,"start","2"),m(G,"id","using-vanilla-transformers-model-and-converting-to-onnx"),m(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(G,"href","#using-vanilla-transformers-model-and-converting-to-onnx"),m(Q,"class","relative group"),m(pe,"href","https://huggingface.co/models"),m(pe,"rel","nofollow"),m($e,"href","/docs/optimum/v1.2.3.dev0/en/onnxruntime/modeling_ort#optimum.onnxruntime.ORTModelForQuestionAnswering"),m(Y,"id","using-optimum-models"),m(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Y,"href","#using-optimum-models"),m(S,"class","relative group"),m(ue,"href","https://huggingface.co/models"),m(ue,"rel","nofollow"),m(J,"id","optimizing-and-quantizing-in-pipelines"),m(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(J,"href","#optimizing-and-quantizing-in-pipelines"),m(D,"class","relative group"),m(Te,"href","/docs/optimum/v1.2.3.dev0/en/onnxruntime/optimization#optimum.onnxruntime.ORTOptimizer"),m(Ee,"href","/docs/optimum/v1.2.3.dev0/en/onnxruntime/quantization#optimum.onnxruntime.ORTQuantizer"),m(V,"id","quantizing-with-ortquantizer"),m(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(V,"href","#quantizing-with-ortquantizer"),m(I,"class","relative group"),m(K,"id","optimizing-with-ortoptimizer"),m(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(K,"href","#optimizing-with-ortoptimizer"),m(H,"class","relative group"),m(Z,"id","transformers-pipeline-usage"),m(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Z,"href","#transformers-pipeline-usage"),m(L,"class","relative group")},m(e,l){t(document.head,d),p(e,U,l),p(e,f,l),t(f,T),t(T,F),j($,F,null),t(f,C),t(f,W),t(W,hs),p(e,At,l),p(e,M,l),t(M,fs),t(M,Me),t(Me,gs),t(M,_s),t(M,te),t(te,vs),t(M,ws),p(e,Rt,l),j(X,e,l),p(e,Ct,l),p(e,ze,l),t(ze,qs),p(e,Mt,l),p(e,ye,l),t(ye,Pe),t(Pe,ks),p(e,Pt,l),p(e,h,l),t(h,Fe),t(Fe,Ne),t(Ne,js),t(h,zs),t(h,Qe),t(Qe,Se),t(Se,ys),t(h,xs),t(h,De),t(De,Ie),t(Ie,Os),t(h,$s),t(h,He),t(He,Le),t(Le,Ts),t(h,Es),t(h,Ue),t(Ue,We),t(We,bs),t(h,As),t(h,Xe),t(Xe,Be),t(Be,Rs),t(h,Cs),t(h,Ge),t(Ge,Ye),t(Ye,Ms),p(e,Ft,l),p(e,N,l),t(N,B),t(B,Je),j(se,Je,null),t(N,Ps),t(N,Ve),t(Ve,Fs),p(e,Nt,l),p(e,P,l),t(P,Ns),t(P,Ke),t(Ke,Qs),t(P,Ss),t(P,Ze),t(Ze,Ds),t(P,Is),p(e,Qt,l),p(e,xe,l),t(xe,et),t(et,Hs),p(e,St,l),j(ae,e,l),p(e,Dt,l),p(e,ne,l),t(ne,oe),t(oe,Ls),t(oe,tt),t(tt,Us),t(oe,Ws),p(e,It,l),j(ie,e,l),p(e,Ht,l),p(e,Oe,l),t(Oe,re),t(re,Xs),t(re,st),t(st,Bs),t(re,Gs),p(e,Lt,l),p(e,Q,l),t(Q,G),t(G,at),j(le,at,null),t(Q,Ys),t(Q,nt),t(nt,Js),p(e,Ut,l),p(e,g,l),t(g,Vs),t(g,ot),t(ot,Ks),t(g,Zs),t(g,pe),t(pe,ea),t(g,ta),t(g,it),t(it,sa),t(g,aa),t(g,rt),t(rt,na),t(g,oa),t(g,$e),t($e,ia),t(g,ra),p(e,Wt,l),j(me,e,l),p(e,Xt,l),p(e,S,l),t(S,Y),t(Y,lt),j(ce,lt,null),t(S,la),t(S,pt),t(pt,pa),p(e,Bt,l),p(e,_,l),t(_,ma),t(_,mt),t(mt,ca),t(_,ua),t(_,ue),t(ue,da),t(_,ha),t(_,ct),t(ct,fa),t(_,ga),t(_,ut),t(ut,_a),t(_,va),t(_,dt),t(dt,wa),t(_,qa),p(e,Gt,l),j(de,e,l),p(e,Yt,l),p(e,D,l),t(D,J),t(J,ht),j(he,ht,null),t(D,ka),t(D,ft),t(ft,ja),p(e,Jt,l),p(e,v,l),t(v,za),t(v,gt),t(gt,ya),t(v,xa),t(v,_t),t(_t,Oa),t(v,$a),t(v,vt),t(vt,Ta),t(v,Ea),t(v,Te),t(Te,ba),t(v,Aa),t(v,Ee),t(Ee,Ra),t(v,Ca),p(e,Vt,l),p(e,I,l),t(I,V),t(V,wt),j(fe,wt,null),t(I,Ma),t(I,be),t(be,Pa),t(be,qt),t(qt,Fa),p(e,Kt,l),j(ge,e,l),p(e,Zt,l),p(e,H,l),t(H,K),t(K,kt),j(_e,kt,null),t(H,Na),t(H,Ae),t(Ae,Qa),t(Ae,jt),t(jt,Sa),p(e,es,l),j(ve,e,l),p(e,ts,l),p(e,L,l),t(L,Z),t(Z,zt),j(we,zt,null),t(L,Da),t(L,yt),t(yt,Ia),p(e,ss,l),p(e,w,l),t(w,Ha),t(w,xt),t(xt,La),t(w,Ua),t(w,Ot),t(Ot,Wa),t(w,Xa),t(w,$t),t($t,Ba),t(w,Ga),t(w,Tt),t(Tt,Ya),t(w,Ja),t(w,Et),t(Et,Va),t(w,Ka),p(e,as,l),j(qe,e,l),ns=!0},p(e,[l]){const ke={};l&2&&(ke.$$scope={dirty:l,ctx:e}),X.$set(ke)},i(e){ns||(z($.$$.fragment,e),z(X.$$.fragment,e),z(se.$$.fragment,e),z(ae.$$.fragment,e),z(ie.$$.fragment,e),z(le.$$.fragment,e),z(me.$$.fragment,e),z(ce.$$.fragment,e),z(de.$$.fragment,e),z(he.$$.fragment,e),z(fe.$$.fragment,e),z(ge.$$.fragment,e),z(_e.$$.fragment,e),z(ve.$$.fragment,e),z(we.$$.fragment,e),z(qe.$$.fragment,e),ns=!0)},o(e){y($.$$.fragment,e),y(X.$$.fragment,e),y(se.$$.fragment,e),y(ae.$$.fragment,e),y(ie.$$.fragment,e),y(le.$$.fragment,e),y(me.$$.fragment,e),y(ce.$$.fragment,e),y(de.$$.fragment,e),y(he.$$.fragment,e),y(fe.$$.fragment,e),y(ge.$$.fragment,e),y(_e.$$.fragment,e),y(ve.$$.fragment,e),y(we.$$.fragment,e),y(qe.$$.fragment,e),ns=!1},d(e){s(d),e&&s(U),e&&s(f),x($),e&&s(At),e&&s(M),e&&s(Rt),x(X,e),e&&s(Ct),e&&s(ze),e&&s(Mt),e&&s(ye),e&&s(Pt),e&&s(h),e&&s(Ft),e&&s(N),x(se),e&&s(Nt),e&&s(P),e&&s(Qt),e&&s(xe),e&&s(St),x(ae,e),e&&s(Dt),e&&s(ne),e&&s(It),x(ie,e),e&&s(Ht),e&&s(Oe),e&&s(Lt),e&&s(Q),x(le),e&&s(Ut),e&&s(g),e&&s(Wt),x(me,e),e&&s(Xt),e&&s(S),x(ce),e&&s(Bt),e&&s(_),e&&s(Gt),x(de,e),e&&s(Yt),e&&s(D),x(he),e&&s(Jt),e&&s(v),e&&s(Vt),e&&s(I),x(fe),e&&s(Kt),x(ge,e),e&&s(Zt),e&&s(H),x(_e),e&&s(es),x(ve,e),e&&s(ts),e&&s(L),x(we),e&&s(ss),e&&s(w),e&&s(as),x(qe,e)}}}const To={local:"optimum-pipelines-for-inference",sections:[{local:"optimum-pipeline-usage",sections:[{local:"using-vanilla-transformers-model-and-converting-to-onnx",title:"Using vanilla Transformers model and converting to ONNX"},{local:"using-optimum-models",title:"Using Optimum models"},{local:"optimizing-and-quantizing-in-pipelines",title:"Optimizing and quantizing in pipelines"},{local:"quantizing-with-ortquantizer",title:"Quantizing with `ORTQuantizer`"},{local:"optimizing-with-ortoptimizer",title:"Optimizing with `ORTOptimizer`"}],title:"Optimum pipeline usage"},{local:"transformers-pipeline-usage",title:"Transformers pipeline usage"}],title:"Optimum pipelines for inference"};function Eo(bt){return yo(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Mo extends qo{constructor(d){super();ko(this,d,Eo,$o,jo,{})}}export{Mo as default,To as metadata};
