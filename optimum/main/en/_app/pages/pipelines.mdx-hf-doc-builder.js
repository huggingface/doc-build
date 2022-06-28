import{S as Qn,i as Dn,s as Sn,e as a,k as c,w as k,t as i,M as In,c as o,d as s,m as u,a as n,x as z,h as r,b as m,G as t,g as p,y as j,q as y,o as x,B as O,v as Hn}from"../chunks/vendor-hf-doc-builder.js";import{T as Ln}from"../chunks/Tip-hf-doc-builder.js";import{I as ee}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as ze}from"../chunks/CodeBlock-hf-doc-builder.js";function Xn(Nt){let f,X,g,E,N;return{c(){f=a("p"),X=i("You can also use the "),g=a("a"),E=i("pipeline()"),N=i(" function from Transformers and provide your Optimum model class."),this.h()},l($){f=o($,"P",{});var C=n(f);X=r(C,"You can also use the "),g=o(C,"A",{href:!0,rel:!0});var U=n(g);E=r(U,"pipeline()"),U.forEach(s),N=r(C," function from Transformers and provide your Optimum model class."),C.forEach(s),this.h()},h(){m(g,"href","https://huggingface.co/docs/transformers/main/en/main_classes/pipelines#pipelines"),m(g,"rel","nofollow")},m($,C){p($,f,C),t(f,X),t(f,g),t(g,E),t(f,N)},d($){$&&s(f)}}}function Un(Nt){let f,X,g,E,N,$,C,U,qs,Ft,M,ks,Me,zs,js,te,ys,xs,Qt,W,Dt,je,Os,St,ye,Pe,$s,It,d,Ne,Fe,Es,Ts,Qe,De,bs,As,Se,Ie,Rs,Cs,He,Le,Ms,Ps,Xe,Ue,Ns,Fs,We,Be,Qs,Ds,Ge,Ye,Ss,Is,Je,Ve,Hs,Ls,Ke,Ze,Xs,Us,et,tt,Ws,Ht,F,B,st,se,Bs,at,Gs,Lt,P,Ys,ot,Js,Vs,nt,Ks,Zs,Xt,xe,it,ea,Ut,ae,Wt,oe,ne,ta,rt,sa,aa,Bt,ie,Gt,Oe,re,oa,lt,na,ia,Yt,Q,G,pt,le,ra,mt,la,Jt,_,pa,ct,ma,ca,pe,ua,da,ut,ha,fa,dt,ga,_a,$e,va,wa,Vt,me,Kt,D,Y,ht,ce,qa,ft,ka,Zt,v,za,gt,ja,ya,ue,xa,Oa,_t,$a,Ea,vt,Ta,ba,wt,Aa,Ra,es,de,ts,S,J,qt,he,Ca,kt,Ma,ss,w,Pa,zt,Na,Fa,jt,Qa,Da,yt,Sa,Ia,Ee,Ha,La,Te,Xa,Ua,as,I,V,xt,fe,Wa,be,Ba,Ot,Ga,os,ge,ns,H,K,$t,_e,Ya,Ae,Ja,Et,Va,is,ve,rs,L,Z,Tt,we,Ka,bt,Za,ls,q,eo,At,to,so,Rt,ao,oo,Ct,no,io,Mt,ro,lo,Pt,po,mo,ps,qe,ms;return $=new ee({}),W=new Ln({props:{$$slots:{default:[Xn]},$$scope:{ctx:Nt}}}),se=new ee({}),ae=new ze({props:{code:`from optimum.pipelines import pipeline

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
                  use_auth_token=<span class="hljs-literal">True</span>)`}}),we=new ee({}),qe=new ze({props:{code:`

`,highlighted:`from transformers import AutoTokenizer, pipeline
<span class="hljs-deletion">-from transformers import AutoModelForQuestionAnswering</span>
<span class="hljs-addition">+from optimum.onnxruntime import ORTModelForQuestionAnswering</span>

<span class="hljs-deletion">-model = AutoModelForQuestionAnswering.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)</span>
<span class="hljs-addition">+model = ORTModelForQuestionAnswering.from_pretrained(&quot;optimum/roberta-base-squad2&quot;)</span>
tokenizer = AutoTokenizer.from_pretrained(&quot;deepset/roberta-base-squad2&quot;)

onnx_qa = pipeline(&quot;question-answering&quot;,model=model,tokenizer=tokenizer)

question = &quot;What&#x27;s my name?&quot;
context = &quot;My name is Philipp and I live in Nuremberg.&quot;
pred = onnx_qa(question, context)`}}),{c(){f=a("meta"),X=c(),g=a("h1"),E=a("a"),N=a("span"),k($.$$.fragment),C=c(),U=a("span"),qs=i("Optimum pipelines for inference"),Ft=c(),M=a("p"),ks=i("The "),Me=a("code"),zs=i("pipeline()"),js=i(" function makes it simple to use models from the "),te=a("a"),ys=i("Model Hub"),xs=i(" for accelerated inference on a variety of tasks such as text classification, question answering and image classification."),Qt=c(),k(W.$$.fragment),Dt=c(),je=a("p"),Os=i("Currenlty supported tasks are:"),St=c(),ye=a("p"),Pe=a("strong"),$s=i("ONNX Runtime"),It=c(),d=a("ul"),Ne=a("li"),Fe=a("code"),Es=i("feature-extraction"),Ts=c(),Qe=a("li"),De=a("code"),bs=i("text-classification"),As=c(),Se=a("li"),Ie=a("code"),Rs=i("token-classification"),Cs=c(),He=a("li"),Le=a("code"),Ms=i("question-answering"),Ps=c(),Xe=a("li"),Ue=a("code"),Ns=i("zero-shot-classification"),Fs=c(),We=a("li"),Be=a("code"),Qs=i("text-generation"),Ds=c(),Ge=a("li"),Ye=a("code"),Ss=i("text2text-generation"),Is=c(),Je=a("li"),Ve=a("code"),Hs=i("summarization"),Ls=c(),Ke=a("li"),Ze=a("code"),Xs=i("translation"),Us=c(),et=a("li"),tt=a("code"),Ws=i("image-classification"),Ht=c(),F=a("h2"),B=a("a"),st=a("span"),k(se.$$.fragment),Bs=c(),at=a("span"),Gs=i("Optimum pipeline usage"),Lt=c(),P=a("p"),Ys=i("While each task has an associated pipeline class, it is simpler to use the general "),ot=a("code"),Js=i("pipeline()"),Vs=i(` function which wraps all the task-specific pipelines in one object.
The `),nt=a("code"),Ks=i("pipeline()"),Zs=i(" function automatically loads a default model and tokenizer/feature-extractor capable of inference for your task."),Xt=c(),xe=a("ol"),it=a("li"),ea=i("Start by creating a pipeline by specifying an inference task:"),Ut=c(),k(ae.$$.fragment),Wt=c(),oe=a("ol"),ne=a("li"),ta=i("Pass your input text/image to the "),rt=a("code"),sa=i("pipeline()"),aa=i(" function:"),Bt=c(),k(ie.$$.fragment),Gt=c(),Oe=a("p"),re=a("em"),oa=i("Note: The default models used in the "),lt=a("code"),na=i("pipeline()"),ia=i(" function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),Yt=c(),Q=a("h3"),G=a("a"),pt=a("span"),k(le.$$.fragment),ra=c(),mt=a("span"),la=i("Using vanilla Transformers model and converting to ONNX"),Jt=c(),_=a("p"),pa=i("The "),ct=a("code"),ma=i("pipeline()"),ca=i(" function accepts any supported model from the "),pe=a("a"),ua=i("Model Hub"),da=i(`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ut=a("code"),ha=i('from_pretrained("{model_id}",from_transformers=True)'),fa=i(" method associated with the "),dt=a("code"),ga=i("ORTModelFor*"),_a=i("\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),$e=a("a"),va=i("ORTModelForQuestionAnswering"),wa=i(" class for question answering:"),Vt=c(),k(me.$$.fragment),Kt=c(),D=a("h3"),Y=a("a"),ht=a("span"),k(ce.$$.fragment),qa=c(),ft=a("span"),ka=i("Using Optimum models"),Zt=c(),v=a("p"),za=i("The "),gt=a("code"),ja=i("pipeline()"),ya=i(" function is tightly integrated with "),ue=a("a"),xa=i("Model Hub"),Oa=i(` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),_t=a("code"),$a=i("from_pretrained()"),Ea=i(" method associated with the corresponding "),vt=a("code"),Ta=i("ORTModelFor*"),ba=i(`
and `),wt=a("code"),Aa=i("AutoTokenizer'/"),Ra=i("AutoFeatureExtractor` class. For example, here\u2019s how you can load an optimized model for question answering:"),es=c(),k(de.$$.fragment),ts=c(),S=a("h3"),J=a("a"),qt=a("span"),k(he.$$.fragment),Ca=c(),kt=a("span"),Ma=i("Optimizing and quantizing in pipelines"),ss=c(),w=a("p"),Pa=i("The "),zt=a("code"),Na=i("pipeline()"),Fa=i(" function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),jt=a("code"),Qa=i("ORTQuantizer"),Da=i(" and "),yt=a("code"),Sa=i("ORTOptimizer"),Ia=i(`.
Below you can find two examples on how you could `),Ee=a("a"),Ha=i("ORTOptimizer"),La=i(" and "),Te=a("a"),Xa=i("ORTQuantizer"),Ua=i(" to optimize/quantize your model and use it for inference afterwards."),as=c(),I=a("h3"),V=a("a"),xt=a("span"),k(fe.$$.fragment),Wa=c(),be=a("span"),Ba=i("Quantizing with "),Ot=a("code"),Ga=i("ORTQuantizer"),os=c(),k(ge.$$.fragment),ns=c(),H=a("h3"),K=a("a"),$t=a("span"),k(_e.$$.fragment),Ya=c(),Ae=a("span"),Ja=i("Optimizing with "),Et=a("code"),Va=i("ORTOptimizer"),is=c(),k(ve.$$.fragment),rs=c(),L=a("h2"),Z=a("a"),Tt=a("span"),k(we.$$.fragment),Ka=c(),bt=a("span"),Za=i("Transformers pipeline usage"),ls=c(),q=a("p"),eo=i("The "),At=a("code"),to=i("pipeline()"),so=i(" function is just a light wrapper around the "),Rt=a("code"),ao=i("transformers.pipeline"),oo=i(` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),Ct=a("code"),no=i("transformers.pipeline"),io=i(" and just replace your "),Mt=a("code"),ro=i("AutoModelFor*"),lo=i(` with the optimum
`),Pt=a("code"),po=i("ORTModelFor*"),mo=i(" class."),ps=c(),k(qe.$$.fragment),this.h()},l(e){const l=In('[data-svelte="svelte-1phssyn"]',document.head);f=o(l,"META",{name:!0,content:!0}),l.forEach(s),X=u(e),g=o(e,"H1",{class:!0});var ke=n(g);E=o(ke,"A",{id:!0,class:!0,href:!0});var ho=n(E);N=o(ho,"SPAN",{});var fo=n(N);z($.$$.fragment,fo),fo.forEach(s),ho.forEach(s),C=u(ke),U=o(ke,"SPAN",{});var go=n(U);qs=r(go,"Optimum pipelines for inference"),go.forEach(s),ke.forEach(s),Ft=u(e),M=o(e,"P",{});var Re=n(M);ks=r(Re,"The "),Me=o(Re,"CODE",{});var _o=n(Me);zs=r(_o,"pipeline()"),_o.forEach(s),js=r(Re," function makes it simple to use models from the "),te=o(Re,"A",{href:!0,rel:!0});var vo=n(te);ys=r(vo,"Model Hub"),vo.forEach(s),xs=r(Re," for accelerated inference on a variety of tasks such as text classification, question answering and image classification."),Re.forEach(s),Qt=u(e),z(W.$$.fragment,e),Dt=u(e),je=o(e,"P",{});var wo=n(je);Os=r(wo,"Currenlty supported tasks are:"),wo.forEach(s),St=u(e),ye=o(e,"P",{});var qo=n(ye);Pe=o(qo,"STRONG",{});var ko=n(Pe);$s=r(ko,"ONNX Runtime"),ko.forEach(s),qo.forEach(s),It=u(e),d=o(e,"UL",{});var h=n(d);Ne=o(h,"LI",{});var zo=n(Ne);Fe=o(zo,"CODE",{});var jo=n(Fe);Es=r(jo,"feature-extraction"),jo.forEach(s),zo.forEach(s),Ts=u(h),Qe=o(h,"LI",{});var yo=n(Qe);De=o(yo,"CODE",{});var xo=n(De);bs=r(xo,"text-classification"),xo.forEach(s),yo.forEach(s),As=u(h),Se=o(h,"LI",{});var Oo=n(Se);Ie=o(Oo,"CODE",{});var $o=n(Ie);Rs=r($o,"token-classification"),$o.forEach(s),Oo.forEach(s),Cs=u(h),He=o(h,"LI",{});var Eo=n(He);Le=o(Eo,"CODE",{});var To=n(Le);Ms=r(To,"question-answering"),To.forEach(s),Eo.forEach(s),Ps=u(h),Xe=o(h,"LI",{});var bo=n(Xe);Ue=o(bo,"CODE",{});var Ao=n(Ue);Ns=r(Ao,"zero-shot-classification"),Ao.forEach(s),bo.forEach(s),Fs=u(h),We=o(h,"LI",{});var Ro=n(We);Be=o(Ro,"CODE",{});var Co=n(Be);Qs=r(Co,"text-generation"),Co.forEach(s),Ro.forEach(s),Ds=u(h),Ge=o(h,"LI",{});var Mo=n(Ge);Ye=o(Mo,"CODE",{});var Po=n(Ye);Ss=r(Po,"text2text-generation"),Po.forEach(s),Mo.forEach(s),Is=u(h),Je=o(h,"LI",{});var No=n(Je);Ve=o(No,"CODE",{});var Fo=n(Ve);Hs=r(Fo,"summarization"),Fo.forEach(s),No.forEach(s),Ls=u(h),Ke=o(h,"LI",{});var Qo=n(Ke);Ze=o(Qo,"CODE",{});var Do=n(Ze);Xs=r(Do,"translation"),Do.forEach(s),Qo.forEach(s),Us=u(h),et=o(h,"LI",{});var So=n(et);tt=o(So,"CODE",{});var Io=n(tt);Ws=r(Io,"image-classification"),Io.forEach(s),So.forEach(s),h.forEach(s),Ht=u(e),F=o(e,"H2",{class:!0});var cs=n(F);B=o(cs,"A",{id:!0,class:!0,href:!0});var Ho=n(B);st=o(Ho,"SPAN",{});var Lo=n(st);z(se.$$.fragment,Lo),Lo.forEach(s),Ho.forEach(s),Bs=u(cs),at=o(cs,"SPAN",{});var Xo=n(at);Gs=r(Xo,"Optimum pipeline usage"),Xo.forEach(s),cs.forEach(s),Lt=u(e),P=o(e,"P",{});var Ce=n(P);Ys=r(Ce,"While each task has an associated pipeline class, it is simpler to use the general "),ot=o(Ce,"CODE",{});var Uo=n(ot);Js=r(Uo,"pipeline()"),Uo.forEach(s),Vs=r(Ce,` function which wraps all the task-specific pipelines in one object.
The `),nt=o(Ce,"CODE",{});var Wo=n(nt);Ks=r(Wo,"pipeline()"),Wo.forEach(s),Zs=r(Ce," function automatically loads a default model and tokenizer/feature-extractor capable of inference for your task."),Ce.forEach(s),Xt=u(e),xe=o(e,"OL",{});var Bo=n(xe);it=o(Bo,"LI",{});var Go=n(it);ea=r(Go,"Start by creating a pipeline by specifying an inference task:"),Go.forEach(s),Bo.forEach(s),Ut=u(e),z(ae.$$.fragment,e),Wt=u(e),oe=o(e,"OL",{start:!0});var Yo=n(oe);ne=o(Yo,"LI",{});var us=n(ne);ta=r(us,"Pass your input text/image to the "),rt=o(us,"CODE",{});var Jo=n(rt);sa=r(Jo,"pipeline()"),Jo.forEach(s),aa=r(us," function:"),us.forEach(s),Yo.forEach(s),Bt=u(e),z(ie.$$.fragment,e),Gt=u(e),Oe=o(e,"P",{});var Vo=n(Oe);re=o(Vo,"EM",{});var ds=n(re);oa=r(ds,"Note: The default models used in the "),lt=o(ds,"CODE",{});var Ko=n(lt);na=r(Ko,"pipeline()"),Ko.forEach(s),ia=r(ds," function are not optimized or quantized, so there won\u2019t be a performance improvement compared to their PyTorch counterparts."),ds.forEach(s),Vo.forEach(s),Yt=u(e),Q=o(e,"H3",{class:!0});var hs=n(Q);G=o(hs,"A",{id:!0,class:!0,href:!0});var Zo=n(G);pt=o(Zo,"SPAN",{});var en=n(pt);z(le.$$.fragment,en),en.forEach(s),Zo.forEach(s),ra=u(hs),mt=o(hs,"SPAN",{});var tn=n(mt);la=r(tn,"Using vanilla Transformers model and converting to ONNX"),tn.forEach(s),hs.forEach(s),Jt=u(e),_=o(e,"P",{});var T=n(_);pa=r(T,"The "),ct=o(T,"CODE",{});var sn=n(ct);ma=r(sn,"pipeline()"),sn.forEach(s),ca=r(T," function accepts any supported model from the "),pe=o(T,"A",{href:!0,rel:!0});var an=n(pe);ua=r(an,"Model Hub"),an.forEach(s),da=r(T,`.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),ut=o(T,"CODE",{});var on=n(ut);ha=r(on,'from_pretrained("{model_id}",from_transformers=True)'),on.forEach(s),fa=r(T," method associated with the "),dt=o(T,"CODE",{});var nn=n(dt);ga=r(nn,"ORTModelFor*"),nn.forEach(s),_a=r(T,"\n`AutoTokenizer\u2019 class. For example, here\u2019s how you can load the "),$e=o(T,"A",{href:!0});var rn=n($e);va=r(rn,"ORTModelForQuestionAnswering"),rn.forEach(s),wa=r(T," class for question answering:"),T.forEach(s),Vt=u(e),z(me.$$.fragment,e),Kt=u(e),D=o(e,"H3",{class:!0});var fs=n(D);Y=o(fs,"A",{id:!0,class:!0,href:!0});var ln=n(Y);ht=o(ln,"SPAN",{});var pn=n(ht);z(ce.$$.fragment,pn),pn.forEach(s),ln.forEach(s),qa=u(fs),ft=o(fs,"SPAN",{});var mn=n(ft);ka=r(mn,"Using Optimum models"),mn.forEach(s),fs.forEach(s),Zt=u(e),v=o(e,"P",{});var b=n(v);za=r(b,"The "),gt=o(b,"CODE",{});var cn=n(gt);ja=r(cn,"pipeline()"),cn.forEach(s),ya=r(b," function is tightly integrated with "),ue=o(b,"A",{href:!0,rel:!0});var un=n(ue);xa=r(un,"Model Hub"),un.forEach(s),Oa=r(b,` and can load optimized models directly, e.g. those created with ONNX Runtime.
There are tags on the Model Hub that allow you to filter for a model you\u2019d like to use for your task.
Once you\u2019ve picked an appropriate model, load it with the `),_t=o(b,"CODE",{});var dn=n(_t);$a=r(dn,"from_pretrained()"),dn.forEach(s),Ea=r(b," method associated with the corresponding "),vt=o(b,"CODE",{});var hn=n(vt);Ta=r(hn,"ORTModelFor*"),hn.forEach(s),ba=r(b,`
and `),wt=o(b,"CODE",{});var fn=n(wt);Aa=r(fn,"AutoTokenizer'/"),fn.forEach(s),Ra=r(b,"AutoFeatureExtractor` class. For example, here\u2019s how you can load an optimized model for question answering:"),b.forEach(s),es=u(e),z(de.$$.fragment,e),ts=u(e),S=o(e,"H3",{class:!0});var gs=n(S);J=o(gs,"A",{id:!0,class:!0,href:!0});var gn=n(J);qt=o(gn,"SPAN",{});var _n=n(qt);z(he.$$.fragment,_n),_n.forEach(s),gn.forEach(s),Ca=u(gs),kt=o(gs,"SPAN",{});var vn=n(kt);Ma=r(vn,"Optimizing and quantizing in pipelines"),vn.forEach(s),gs.forEach(s),ss=u(e),w=o(e,"P",{});var A=n(w);Pa=r(A,"The "),zt=o(A,"CODE",{});var wn=n(zt);Na=r(wn,"pipeline()"),wn.forEach(s),Fa=r(A," function can not only run inference on vanilla ONNX Runtime checkpoints - you can also use checkpoints optimized with "),jt=o(A,"CODE",{});var qn=n(jt);Qa=r(qn,"ORTQuantizer"),qn.forEach(s),Da=r(A," and "),yt=o(A,"CODE",{});var kn=n(yt);Sa=r(kn,"ORTOptimizer"),kn.forEach(s),Ia=r(A,`.
Below you can find two examples on how you could `),Ee=o(A,"A",{href:!0});var zn=n(Ee);Ha=r(zn,"ORTOptimizer"),zn.forEach(s),La=r(A," and "),Te=o(A,"A",{href:!0});var jn=n(Te);Xa=r(jn,"ORTQuantizer"),jn.forEach(s),Ua=r(A," to optimize/quantize your model and use it for inference afterwards."),A.forEach(s),as=u(e),I=o(e,"H3",{class:!0});var _s=n(I);V=o(_s,"A",{id:!0,class:!0,href:!0});var yn=n(V);xt=o(yn,"SPAN",{});var xn=n(xt);z(fe.$$.fragment,xn),xn.forEach(s),yn.forEach(s),Wa=u(_s),be=o(_s,"SPAN",{});var co=n(be);Ba=r(co,"Quantizing with "),Ot=o(co,"CODE",{});var On=n(Ot);Ga=r(On,"ORTQuantizer"),On.forEach(s),co.forEach(s),_s.forEach(s),os=u(e),z(ge.$$.fragment,e),ns=u(e),H=o(e,"H3",{class:!0});var vs=n(H);K=o(vs,"A",{id:!0,class:!0,href:!0});var $n=n(K);$t=o($n,"SPAN",{});var En=n($t);z(_e.$$.fragment,En),En.forEach(s),$n.forEach(s),Ya=u(vs),Ae=o(vs,"SPAN",{});var uo=n(Ae);Ja=r(uo,"Optimizing with "),Et=o(uo,"CODE",{});var Tn=n(Et);Va=r(Tn,"ORTOptimizer"),Tn.forEach(s),uo.forEach(s),vs.forEach(s),is=u(e),z(ve.$$.fragment,e),rs=u(e),L=o(e,"H2",{class:!0});var ws=n(L);Z=o(ws,"A",{id:!0,class:!0,href:!0});var bn=n(Z);Tt=o(bn,"SPAN",{});var An=n(Tt);z(we.$$.fragment,An),An.forEach(s),bn.forEach(s),Ka=u(ws),bt=o(ws,"SPAN",{});var Rn=n(bt);Za=r(Rn,"Transformers pipeline usage"),Rn.forEach(s),ws.forEach(s),ls=u(e),q=o(e,"P",{});var R=n(q);eo=r(R,"The "),At=o(R,"CODE",{});var Cn=n(At);to=r(Cn,"pipeline()"),Cn.forEach(s),so=r(R," function is just a light wrapper around the "),Rt=o(R,"CODE",{});var Mn=n(Rt);ao=r(Mn,"transformers.pipeline"),Mn.forEach(s),oo=r(R,` function to enable checks for supported tasks and additional features
, like quantization and optimization. This being said you can use the `),Ct=o(R,"CODE",{});var Pn=n(Ct);no=r(Pn,"transformers.pipeline"),Pn.forEach(s),io=r(R," and just replace your "),Mt=o(R,"CODE",{});var Nn=n(Mt);ro=r(Nn,"AutoModelFor*"),Nn.forEach(s),lo=r(R,` with the optimum
`),Pt=o(R,"CODE",{});var Fn=n(Pt);po=r(Fn,"ORTModelFor*"),Fn.forEach(s),mo=r(R," class."),R.forEach(s),ps=u(e),z(qe.$$.fragment,e),this.h()},h(){m(f,"name","hf:doc:metadata"),m(f,"content",JSON.stringify(Wn)),m(E,"id","optimum-pipelines-for-inference"),m(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(E,"href","#optimum-pipelines-for-inference"),m(g,"class","relative group"),m(te,"href","https://huggingface.co/models"),m(te,"rel","nofollow"),m(B,"id","optimum-pipeline-usage"),m(B,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(B,"href","#optimum-pipeline-usage"),m(F,"class","relative group"),m(oe,"start","2"),m(G,"id","using-vanilla-transformers-model-and-converting-to-onnx"),m(G,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(G,"href","#using-vanilla-transformers-model-and-converting-to-onnx"),m(Q,"class","relative group"),m(pe,"href","https://huggingface.co/models"),m(pe,"rel","nofollow"),m($e,"href","/docs/optimum/main/en/onnxruntime/modeling_ort#optimum.onnxruntime.ORTModelForQuestionAnswering"),m(Y,"id","using-optimum-models"),m(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Y,"href","#using-optimum-models"),m(D,"class","relative group"),m(ue,"href","https://huggingface.co/models"),m(ue,"rel","nofollow"),m(J,"id","optimizing-and-quantizing-in-pipelines"),m(J,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(J,"href","#optimizing-and-quantizing-in-pipelines"),m(S,"class","relative group"),m(Ee,"href","/docs/optimum/main/en/onnxruntime/optimization#optimum.onnxruntime.ORTOptimizer"),m(Te,"href","/docs/optimum/main/en/onnxruntime/quantization#optimum.onnxruntime.ORTQuantizer"),m(V,"id","quantizing-with-ortquantizer"),m(V,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(V,"href","#quantizing-with-ortquantizer"),m(I,"class","relative group"),m(K,"id","optimizing-with-ortoptimizer"),m(K,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(K,"href","#optimizing-with-ortoptimizer"),m(H,"class","relative group"),m(Z,"id","transformers-pipeline-usage"),m(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(Z,"href","#transformers-pipeline-usage"),m(L,"class","relative group")},m(e,l){t(document.head,f),p(e,X,l),p(e,g,l),t(g,E),t(E,N),j($,N,null),t(g,C),t(g,U),t(U,qs),p(e,Ft,l),p(e,M,l),t(M,ks),t(M,Me),t(Me,zs),t(M,js),t(M,te),t(te,ys),t(M,xs),p(e,Qt,l),j(W,e,l),p(e,Dt,l),p(e,je,l),t(je,Os),p(e,St,l),p(e,ye,l),t(ye,Pe),t(Pe,$s),p(e,It,l),p(e,d,l),t(d,Ne),t(Ne,Fe),t(Fe,Es),t(d,Ts),t(d,Qe),t(Qe,De),t(De,bs),t(d,As),t(d,Se),t(Se,Ie),t(Ie,Rs),t(d,Cs),t(d,He),t(He,Le),t(Le,Ms),t(d,Ps),t(d,Xe),t(Xe,Ue),t(Ue,Ns),t(d,Fs),t(d,We),t(We,Be),t(Be,Qs),t(d,Ds),t(d,Ge),t(Ge,Ye),t(Ye,Ss),t(d,Is),t(d,Je),t(Je,Ve),t(Ve,Hs),t(d,Ls),t(d,Ke),t(Ke,Ze),t(Ze,Xs),t(d,Us),t(d,et),t(et,tt),t(tt,Ws),p(e,Ht,l),p(e,F,l),t(F,B),t(B,st),j(se,st,null),t(F,Bs),t(F,at),t(at,Gs),p(e,Lt,l),p(e,P,l),t(P,Ys),t(P,ot),t(ot,Js),t(P,Vs),t(P,nt),t(nt,Ks),t(P,Zs),p(e,Xt,l),p(e,xe,l),t(xe,it),t(it,ea),p(e,Ut,l),j(ae,e,l),p(e,Wt,l),p(e,oe,l),t(oe,ne),t(ne,ta),t(ne,rt),t(rt,sa),t(ne,aa),p(e,Bt,l),j(ie,e,l),p(e,Gt,l),p(e,Oe,l),t(Oe,re),t(re,oa),t(re,lt),t(lt,na),t(re,ia),p(e,Yt,l),p(e,Q,l),t(Q,G),t(G,pt),j(le,pt,null),t(Q,ra),t(Q,mt),t(mt,la),p(e,Jt,l),p(e,_,l),t(_,pa),t(_,ct),t(ct,ma),t(_,ca),t(_,pe),t(pe,ua),t(_,da),t(_,ut),t(ut,ha),t(_,fa),t(_,dt),t(dt,ga),t(_,_a),t(_,$e),t($e,va),t(_,wa),p(e,Vt,l),j(me,e,l),p(e,Kt,l),p(e,D,l),t(D,Y),t(Y,ht),j(ce,ht,null),t(D,qa),t(D,ft),t(ft,ka),p(e,Zt,l),p(e,v,l),t(v,za),t(v,gt),t(gt,ja),t(v,ya),t(v,ue),t(ue,xa),t(v,Oa),t(v,_t),t(_t,$a),t(v,Ea),t(v,vt),t(vt,Ta),t(v,ba),t(v,wt),t(wt,Aa),t(v,Ra),p(e,es,l),j(de,e,l),p(e,ts,l),p(e,S,l),t(S,J),t(J,qt),j(he,qt,null),t(S,Ca),t(S,kt),t(kt,Ma),p(e,ss,l),p(e,w,l),t(w,Pa),t(w,zt),t(zt,Na),t(w,Fa),t(w,jt),t(jt,Qa),t(w,Da),t(w,yt),t(yt,Sa),t(w,Ia),t(w,Ee),t(Ee,Ha),t(w,La),t(w,Te),t(Te,Xa),t(w,Ua),p(e,as,l),p(e,I,l),t(I,V),t(V,xt),j(fe,xt,null),t(I,Wa),t(I,be),t(be,Ba),t(be,Ot),t(Ot,Ga),p(e,os,l),j(ge,e,l),p(e,ns,l),p(e,H,l),t(H,K),t(K,$t),j(_e,$t,null),t(H,Ya),t(H,Ae),t(Ae,Ja),t(Ae,Et),t(Et,Va),p(e,is,l),j(ve,e,l),p(e,rs,l),p(e,L,l),t(L,Z),t(Z,Tt),j(we,Tt,null),t(L,Ka),t(L,bt),t(bt,Za),p(e,ls,l),p(e,q,l),t(q,eo),t(q,At),t(At,to),t(q,so),t(q,Rt),t(Rt,ao),t(q,oo),t(q,Ct),t(Ct,no),t(q,io),t(q,Mt),t(Mt,ro),t(q,lo),t(q,Pt),t(Pt,po),t(q,mo),p(e,ps,l),j(qe,e,l),ms=!0},p(e,[l]){const ke={};l&2&&(ke.$$scope={dirty:l,ctx:e}),W.$set(ke)},i(e){ms||(y($.$$.fragment,e),y(W.$$.fragment,e),y(se.$$.fragment,e),y(ae.$$.fragment,e),y(ie.$$.fragment,e),y(le.$$.fragment,e),y(me.$$.fragment,e),y(ce.$$.fragment,e),y(de.$$.fragment,e),y(he.$$.fragment,e),y(fe.$$.fragment,e),y(ge.$$.fragment,e),y(_e.$$.fragment,e),y(ve.$$.fragment,e),y(we.$$.fragment,e),y(qe.$$.fragment,e),ms=!0)},o(e){x($.$$.fragment,e),x(W.$$.fragment,e),x(se.$$.fragment,e),x(ae.$$.fragment,e),x(ie.$$.fragment,e),x(le.$$.fragment,e),x(me.$$.fragment,e),x(ce.$$.fragment,e),x(de.$$.fragment,e),x(he.$$.fragment,e),x(fe.$$.fragment,e),x(ge.$$.fragment,e),x(_e.$$.fragment,e),x(ve.$$.fragment,e),x(we.$$.fragment,e),x(qe.$$.fragment,e),ms=!1},d(e){s(f),e&&s(X),e&&s(g),O($),e&&s(Ft),e&&s(M),e&&s(Qt),O(W,e),e&&s(Dt),e&&s(je),e&&s(St),e&&s(ye),e&&s(It),e&&s(d),e&&s(Ht),e&&s(F),O(se),e&&s(Lt),e&&s(P),e&&s(Xt),e&&s(xe),e&&s(Ut),O(ae,e),e&&s(Wt),e&&s(oe),e&&s(Bt),O(ie,e),e&&s(Gt),e&&s(Oe),e&&s(Yt),e&&s(Q),O(le),e&&s(Jt),e&&s(_),e&&s(Vt),O(me,e),e&&s(Kt),e&&s(D),O(ce),e&&s(Zt),e&&s(v),e&&s(es),O(de,e),e&&s(ts),e&&s(S),O(he),e&&s(ss),e&&s(w),e&&s(as),e&&s(I),O(fe),e&&s(os),O(ge,e),e&&s(ns),e&&s(H),O(_e),e&&s(is),O(ve,e),e&&s(rs),e&&s(L),O(we),e&&s(ls),e&&s(q),e&&s(ps),O(qe,e)}}}const Wn={local:"optimum-pipelines-for-inference",sections:[{local:"optimum-pipeline-usage",sections:[{local:"using-vanilla-transformers-model-and-converting-to-onnx",title:"Using vanilla Transformers model and converting to ONNX"},{local:"using-optimum-models",title:"Using Optimum models"},{local:"optimizing-and-quantizing-in-pipelines",title:"Optimizing and quantizing in pipelines"},{local:"quantizing-with-ortquantizer",title:"Quantizing with `ORTQuantizer`"},{local:"optimizing-with-ortoptimizer",title:"Optimizing with `ORTOptimizer`"}],title:"Optimum pipeline usage"},{local:"transformers-pipeline-usage",title:"Transformers pipeline usage"}],title:"Optimum pipelines for inference"};function Bn(Nt){return Hn(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Kn extends Qn{constructor(f){super();Dn(this,f,Bn,Un,Sn,{})}}export{Kn as default,Wn as metadata};
