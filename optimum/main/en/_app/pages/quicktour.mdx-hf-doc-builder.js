import{S as Ya,i as Za,s as er,e as r,k as u,w as d,t as m,M as tr,c as n,d as t,m as f,a as i,x as c,h as p,b as l,G as a,g as s,y as h,L as ar,q as g,o as _,B as v,v as rr}from"../chunks/vendor-hf-doc-builder.js";import{I as X}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as se}from"../chunks/CodeBlock-hf-doc-builder.js";function nr(fa){let q,Fe,y,P,ge,G,$t,_e,wt,Me,le,Tt,Xe,A,H,ve,D,kt,$e,bt,Ge,O,R,we,Q,qt,Te,yt,De,w,At,ke,Ot,jt,V,zt,xt,Qe,L,Ve,j,S,be,B,Nt,qe,Et,Le,T,Pt,ye,Ht,Rt,J,St,Ct,Be,K,Je,z,C,Ae,W,It,Oe,Ut,Ke,k,Ft,je,Mt,Xt,Y,Gt,Dt,We,Z,Ye,x,I,ze,ee,Qt,xe,Vt,Ze,N,U,Ne,te,Lt,Ee,Bt,et,$,Jt,Pe,Kt,Wt,He,Yt,Zt,Re,ea,ta,tt,me,aa,at,ae,rt,pe,ra,nt,re,it,b,na,Se,ia,oa,Ce,sa,la,ot,ne,st,E,F,Ie,ie,ma,Ue,pa,lt,ue,ua,mt,oe,pt;return G=new X({}),D=new X({}),Q=new X({}),L=new se({props:{code:`- from transformers import Trainer, TrainingArguments
+ from optimum.graphcore import IPUConfig, IPUTrainer, IPUTrainingArguments

  # Download a pretrained model from the Hub
  model = AutoModelForXxx.from_pretrained("bert-base-uncased")

  # Define the training arguments
- training_args = TrainingArguments(
+ training_args = IPUTrainingArguments(
      output_dir="path/to/save/folder/",
+     ipu_config_name="Graphcore/bert-base-ipu", # Any IPUConfig on the Hub or stored locally
      ...
  )

  # Define the configuration to compile and put the model on the IPU
+ ipu_config = IPUConfig.from_pretrained(training_args.ipu_config_name)

  # Initialize the trainer
- trainer = Trainer(
+ trainer = IPUTrainer(
      model=model,
+     ipu_config=ipu_config
      args=training_args,
      train_dataset=train_dataset
      ...
  )

  # Use Graphcore IPU for training!
  trainer.train()`,highlighted:`<span class="hljs-deletion">- from transformers import Trainer, TrainingArguments</span>
<span class="hljs-addition">+ from optimum.graphcore import IPUConfig, IPUTrainer, IPUTrainingArguments</span>

  # Download a pretrained model from the Hub
  model = AutoModelForXxx.from_pretrained(&quot;bert-base-uncased&quot;)

  # Define the training arguments
<span class="hljs-deletion">- training_args = TrainingArguments(</span>
<span class="hljs-addition">+ training_args = IPUTrainingArguments(</span>
      output_dir=&quot;path/to/save/folder/&quot;,
<span class="hljs-addition">+     ipu_config_name=&quot;Graphcore/bert-base-ipu&quot;, # Any IPUConfig on the Hub or stored locally</span>
      ...
  )

  # Define the configuration to compile and put the model on the IPU
<span class="hljs-addition">+ ipu_config = IPUConfig.from_pretrained(training_args.ipu_config_name)</span>

  # Initialize the trainer
<span class="hljs-deletion">- trainer = Trainer(</span>
<span class="hljs-addition">+ trainer = IPUTrainer(</span>
      model=model,
<span class="hljs-addition">+     ipu_config=ipu_config</span>
      args=training_args,
      train_dataset=train_dataset
      ...
  )

  # Use Graphcore IPU for training!
  trainer.train()`}}),B=new X({}),K=new se({props:{code:`- from transformers import Trainer, TrainingArguments
+ from optimum.habana import GaudiTrainer, GaudiTrainingArguments

  # Download a pretrained model from the Hub
  model = AutoModelForXxx.from_pretrained("bert-base-uncased")

  # Define the training arguments
- training_args = TrainingArguments(
+ training_args = GaudiTrainingArguments(
      output_dir="path/to/save/folder/",
+     use_habana=True,
+     use_lazy_mode=True,
+     gaudi_config_name="Habana/bert-base-uncased",
      ...
  )

  # Initialize the trainer
- trainer = Trainer(
+ trainer = GaudiTrainer(
      model=model,
      args=training_args,
      train_dataset=train_dataset,
      ...
  )

  # Use Habana Gaudi processor for training!
  trainer.train()`,highlighted:`<span class="hljs-deletion">- from transformers import Trainer, TrainingArguments</span>
<span class="hljs-addition">+ from optimum.habana import GaudiTrainer, GaudiTrainingArguments</span>

  # Download a pretrained model from the Hub
  model = AutoModelForXxx.from_pretrained(&quot;bert-base-uncased&quot;)

  # Define the training arguments
<span class="hljs-deletion">- training_args = TrainingArguments(</span>
<span class="hljs-addition">+ training_args = GaudiTrainingArguments(</span>
      output_dir=&quot;path/to/save/folder/&quot;,
<span class="hljs-addition">+     use_habana=True,</span>
<span class="hljs-addition">+     use_lazy_mode=True,</span>
<span class="hljs-addition">+     gaudi_config_name=&quot;Habana/bert-base-uncased&quot;,</span>
      ...
  )

  # Initialize the trainer
<span class="hljs-deletion">- trainer = Trainer(</span>
<span class="hljs-addition">+ trainer = GaudiTrainer(</span>
      model=model,
      args=training_args,
      train_dataset=train_dataset,
      ...
  )

  # Use Habana Gaudi processor for training!
  trainer.train()`}}),W=new X({}),Z=new se({props:{code:`- from transformers import Trainer
+ from optimum.onnxruntime import ORTTrainer

  # Download a pretrained model from the Hub
  model = AutoModelForSequenceClassification.from_pretrained("bert-base-uncased")

  # Create a ONNX Runtime Trainer
- trainer = Trainer(
+ trainer = ORTTrainer(
      model=model,
      args=training_args,
      train_dataset=train_dataset,
+     feature="sequence-classification", # The model type to export to ONNX
      ...
  )

  # Use ONNX Runtime for training!
  trainer.train()`,highlighted:`<span class="hljs-deletion">- from transformers import Trainer</span>
<span class="hljs-addition">+ from optimum.onnxruntime import ORTTrainer</span>

  # Download a pretrained model from the Hub
  model = AutoModelForSequenceClassification.from_pretrained(&quot;bert-base-uncased&quot;)

  # Create a ONNX Runtime Trainer
<span class="hljs-deletion">- trainer = Trainer(</span>
<span class="hljs-addition">+ trainer = ORTTrainer(</span>
      model=model,
      args=training_args,
      train_dataset=train_dataset,
<span class="hljs-addition">+     feature=&quot;sequence-classification&quot;, # The model type to export to ONNX</span>
      ...
  )

  # Use ONNX Runtime for training!
  trainer.train()`}}),ee=new X({}),te=new X({}),ae=new se({props:{code:`from optimum.onnxruntime import ORTModelForSequenceClassification
from transformers import AutoTokenizer
model_checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
save_directory = "tmp/onnx/"
# Load a model from transformers and export it to ONNX
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
ort_model = ORTModelForSequenceClassification.from_pretrained(model_checkpoint, from_transformers=True)
# Save the onnx model and tokenizer
ort_model.save_pretrained(save_directory)
tokenizer.save_pretrained(save_directory)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>model_checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>save_directory = <span class="hljs-string">&quot;tmp/onnx/&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Load a model from transformers and export it to ONNX</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
<span class="hljs-meta">&gt;&gt;&gt; </span>ort_model = ORTModelForSequenceClassification.from_pretrained(model_checkpoint, from_transformers=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Save the onnx model and tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ort_model.save_pretrained(save_directory)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(save_directory)`}}),re=new se({props:{code:`from optimum.onnxruntime.configuration import AutoQuantizationConfig
from optimum.onnxruntime import ORTQuantizer

# Define the quantization methodology
qconfig = AutoQuantizationConfig.arm64(is_static=False, per_channel=False)
quantizer = ORTQuantizer.from_pretrained(ort_model)
# Apply dynamic quantization on the model
quantizer.quantize(save_dir=save_directory, quantization_config=qconfig)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> AutoQuantizationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTQuantizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Define the quantization methodology</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>qconfig = AutoQuantizationConfig.arm64(is_static=<span class="hljs-literal">False</span>, per_channel=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer = ORTQuantizer.from_pretrained(ort_model)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Apply dynamic quantization on the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.quantize(save_dir=save_directory, quantization_config=qconfig)`}}),ne=new se({props:{code:`from optimum.onnxruntime import ORTModelForSequenceClassification
from transformers import pipeline, AutoTokenizer

model = ORTModelForSequenceClassification.from_pretrained(save_directory, file_name="model_quantized.onnx")
tokenizer = AutoTokenizer.from_pretrained(save_directory)
classifier = pipeline("text-classification", model=model, tokenizer=tokenizer)
results = classifier("I love burritos!")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(save_directory, file_name=<span class="hljs-string">&quot;model_quantized.onnx&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(save_directory)
<span class="hljs-meta">&gt;&gt;&gt; </span>classifier = pipeline(<span class="hljs-string">&quot;text-classification&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>results = classifier(<span class="hljs-string">&quot;I love burritos!&quot;</span>)`}}),ie=new X({}),oe=new se({props:{code:`- from transformers import AutoModelForSequenceClassification
+ from optimum.intel.openvino import OVModelForSequenceClassification
  from transformers import AutoTokenizer, pipeline

  # Download a tokenizer and model from the Hub and convert to OpenVINO format
  tokenizer = AutoTokenizer.from_pretrained(model_id)
  model_id = "distilbert-base-uncased-finetuned-sst-2-english"
- model = AutoModelForSequenceClassification.from_pretrained(model_id)
+ model = OVModelForSequenceClassification.from_pretrained(model_id, from_transformers=True)

  # Run inference!
  classifier = pipeline("text-classification", model=model, tokenizer=tokenizer)
  results = classifier("He's a dreadful magician.")`,highlighted:`<span class="hljs-deletion">- from transformers import AutoModelForSequenceClassification</span>
<span class="hljs-addition">+ from optimum.intel.openvino import OVModelForSequenceClassification</span>
  from transformers import AutoTokenizer, pipeline

  # Download a tokenizer and model from the Hub and convert to OpenVINO format
  tokenizer = AutoTokenizer.from_pretrained(model_id)
  model_id = &quot;distilbert-base-uncased-finetuned-sst-2-english&quot;
<span class="hljs-deletion">- model = AutoModelForSequenceClassification.from_pretrained(model_id)</span>
<span class="hljs-addition">+ model = OVModelForSequenceClassification.from_pretrained(model_id, from_transformers=True)</span>

  # Run inference!
  classifier = pipeline(&quot;text-classification&quot;, model=model, tokenizer=tokenizer)
  results = classifier(&quot;He&#x27;s a dreadful magician.&quot;)`}}),{c(){q=r("meta"),Fe=u(),y=r("h1"),P=r("a"),ge=r("span"),d(G.$$.fragment),$t=u(),_e=r("span"),wt=m("Quick tour"),Me=u(),le=r("p"),Tt=m("This quick tour is intended for developers who are ready to dive into the code and see examples of how to integrate \u{1F917} Optimum into their model training and inference workflows."),Xe=u(),A=r("h2"),H=r("a"),ve=r("span"),d(D.$$.fragment),kt=u(),$e=r("span"),bt=m("Accelerated training"),Ge=u(),O=r("h3"),R=r("a"),we=r("span"),d(Q.$$.fragment),qt=u(),Te=r("span"),yt=m("Optimum Graphcore"),De=u(),w=r("p"),At=m("To train transformers on Graphcore\u2019s IPUs, \u{1F917} Optimum provides a "),ke=r("code"),Ot=m("IPUTrainer"),jt=m(" that is very similar to the "),V=r("a"),zt=m("\u{1F917} Transformers trainer"),xt=m(". Here is a simple example:"),Qe=u(),d(L.$$.fragment),Ve=u(),j=r("h3"),S=r("a"),be=r("span"),d(B.$$.fragment),Nt=u(),qe=r("span"),Et=m("Optimum Habana"),Le=u(),T=r("p"),Pt=m("To train transformers on Habana\u2019s Gaudi processors, \u{1F917} Optimum provides a "),ye=r("code"),Ht=m("GaudiTrainer"),Rt=m(" that is very similar to the "),J=r("a"),St=m("\u{1F917} Transformers trainer"),Ct=m(". Here is a simple example:"),Be=u(),d(K.$$.fragment),Je=u(),z=r("h3"),C=r("a"),Ae=r("span"),d(W.$$.fragment),It=u(),Oe=r("span"),Ut=m("ONNX Runtime"),Ke=u(),k=r("p"),Ft=m("To train transformers with ONNX Runtime\u2019s acceleration features, \u{1F917} Optimum provides a "),je=r("code"),Mt=m("ORTTrainer"),Xt=m(" that is very similar to the "),Y=r("a"),Gt=m("\u{1F917} Transformers trainer"),Dt=m(". Here is a simple example:"),We=u(),d(Z.$$.fragment),Ye=u(),x=r("h2"),I=r("a"),ze=r("span"),d(ee.$$.fragment),Qt=u(),xe=r("span"),Vt=m("Accelerated inference"),Ze=u(),N=r("h3"),U=r("a"),Ne=r("span"),d(te.$$.fragment),Lt=u(),Ee=r("span"),Bt=m("ONNX Runtime"),et=u(),$=r("p"),Jt=m("To accelerate inference with ONNX Runtime, \u{1F917} Optimum uses "),Pe=r("em"),Kt=m("configuration objects"),Wt=m(" to define parameters for optimization. These objects are then used to instantiate dedicated "),He=r("em"),Yt=m("optimizers"),Zt=m(" and "),Re=r("em"),ea=m("quantizers"),ta=m("."),tt=u(),me=r("p"),aa=m("Before applying quantization or optimization, first export our model to the ONNX format:"),at=u(),d(ae.$$.fragment),rt=u(),pe=r("p"),ra=m("Let\u2019s see now how we can apply dynamic quantization with ONNX Runtime:"),nt=u(),d(re.$$.fragment),it=u(),b=r("p"),na=m("In this example, we\u2019ve quantized a model from the Hugging Face Hub, but it could also be a path to a local model directory. The result from applying the "),Se=r("code"),ia=m("quantize()"),oa=m(" method is a "),Ce=r("code"),sa=m("model_quantized.onnx"),la=m(" file that can be used to run inference. Here\u2019s an example of how to load an ONNX Runtime model and generate predictions with it:"),ot=u(),d(ne.$$.fragment),st=u(),E=r("h3"),F=r("a"),Ie=r("span"),d(ie.$$.fragment),ma=u(),Ue=r("span"),pa=m("Optimum Intel"),lt=u(),ue=r("p"),ua=m("Here is an example on how to perform inference with the OpenVINO Runtime:"),mt=u(),d(oe.$$.fragment),this.h()},l(e){const o=tr('[data-svelte="svelte-1phssyn"]',document.head);q=n(o,"META",{name:!0,content:!0}),o.forEach(t),Fe=f(e),y=n(e,"H1",{class:!0});var ut=i(y);P=n(ut,"A",{id:!0,class:!0,href:!0});var da=i(P);ge=n(da,"SPAN",{});var ca=i(ge);c(G.$$.fragment,ca),ca.forEach(t),da.forEach(t),$t=f(ut),_e=n(ut,"SPAN",{});var ha=i(_e);wt=p(ha,"Quick tour"),ha.forEach(t),ut.forEach(t),Me=f(e),le=n(e,"P",{});var ga=i(le);Tt=p(ga,"This quick tour is intended for developers who are ready to dive into the code and see examples of how to integrate \u{1F917} Optimum into their model training and inference workflows."),ga.forEach(t),Xe=f(e),A=n(e,"H2",{class:!0});var ft=i(A);H=n(ft,"A",{id:!0,class:!0,href:!0});var _a=i(H);ve=n(_a,"SPAN",{});var va=i(ve);c(D.$$.fragment,va),va.forEach(t),_a.forEach(t),kt=f(ft),$e=n(ft,"SPAN",{});var $a=i($e);bt=p($a,"Accelerated training"),$a.forEach(t),ft.forEach(t),Ge=f(e),O=n(e,"H3",{class:!0});var dt=i(O);R=n(dt,"A",{id:!0,class:!0,href:!0});var wa=i(R);we=n(wa,"SPAN",{});var Ta=i(we);c(Q.$$.fragment,Ta),Ta.forEach(t),wa.forEach(t),qt=f(dt),Te=n(dt,"SPAN",{});var ka=i(Te);yt=p(ka,"Optimum Graphcore"),ka.forEach(t),dt.forEach(t),De=f(e),w=n(e,"P",{});var fe=i(w);At=p(fe,"To train transformers on Graphcore\u2019s IPUs, \u{1F917} Optimum provides a "),ke=n(fe,"CODE",{});var ba=i(ke);Ot=p(ba,"IPUTrainer"),ba.forEach(t),jt=p(fe," that is very similar to the "),V=n(fe,"A",{href:!0,rel:!0});var qa=i(V);zt=p(qa,"\u{1F917} Transformers trainer"),qa.forEach(t),xt=p(fe,". Here is a simple example:"),fe.forEach(t),Qe=f(e),c(L.$$.fragment,e),Ve=f(e),j=n(e,"H3",{class:!0});var ct=i(j);S=n(ct,"A",{id:!0,class:!0,href:!0});var ya=i(S);be=n(ya,"SPAN",{});var Aa=i(be);c(B.$$.fragment,Aa),Aa.forEach(t),ya.forEach(t),Nt=f(ct),qe=n(ct,"SPAN",{});var Oa=i(qe);Et=p(Oa,"Optimum Habana"),Oa.forEach(t),ct.forEach(t),Le=f(e),T=n(e,"P",{});var de=i(T);Pt=p(de,"To train transformers on Habana\u2019s Gaudi processors, \u{1F917} Optimum provides a "),ye=n(de,"CODE",{});var ja=i(ye);Ht=p(ja,"GaudiTrainer"),ja.forEach(t),Rt=p(de," that is very similar to the "),J=n(de,"A",{href:!0,rel:!0});var za=i(J);St=p(za,"\u{1F917} Transformers trainer"),za.forEach(t),Ct=p(de,". Here is a simple example:"),de.forEach(t),Be=f(e),c(K.$$.fragment,e),Je=f(e),z=n(e,"H3",{class:!0});var ht=i(z);C=n(ht,"A",{id:!0,class:!0,href:!0});var xa=i(C);Ae=n(xa,"SPAN",{});var Na=i(Ae);c(W.$$.fragment,Na),Na.forEach(t),xa.forEach(t),It=f(ht),Oe=n(ht,"SPAN",{});var Ea=i(Oe);Ut=p(Ea,"ONNX Runtime"),Ea.forEach(t),ht.forEach(t),Ke=f(e),k=n(e,"P",{});var ce=i(k);Ft=p(ce,"To train transformers with ONNX Runtime\u2019s acceleration features, \u{1F917} Optimum provides a "),je=n(ce,"CODE",{});var Pa=i(je);Mt=p(Pa,"ORTTrainer"),Pa.forEach(t),Xt=p(ce," that is very similar to the "),Y=n(ce,"A",{href:!0,rel:!0});var Ha=i(Y);Gt=p(Ha,"\u{1F917} Transformers trainer"),Ha.forEach(t),Dt=p(ce,". Here is a simple example:"),ce.forEach(t),We=f(e),c(Z.$$.fragment,e),Ye=f(e),x=n(e,"H2",{class:!0});var gt=i(x);I=n(gt,"A",{id:!0,class:!0,href:!0});var Ra=i(I);ze=n(Ra,"SPAN",{});var Sa=i(ze);c(ee.$$.fragment,Sa),Sa.forEach(t),Ra.forEach(t),Qt=f(gt),xe=n(gt,"SPAN",{});var Ca=i(xe);Vt=p(Ca,"Accelerated inference"),Ca.forEach(t),gt.forEach(t),Ze=f(e),N=n(e,"H3",{class:!0});var _t=i(N);U=n(_t,"A",{id:!0,class:!0,href:!0});var Ia=i(U);Ne=n(Ia,"SPAN",{});var Ua=i(Ne);c(te.$$.fragment,Ua),Ua.forEach(t),Ia.forEach(t),Lt=f(_t),Ee=n(_t,"SPAN",{});var Fa=i(Ee);Bt=p(Fa,"ONNX Runtime"),Fa.forEach(t),_t.forEach(t),et=f(e),$=n(e,"P",{});var M=i($);Jt=p(M,"To accelerate inference with ONNX Runtime, \u{1F917} Optimum uses "),Pe=n(M,"EM",{});var Ma=i(Pe);Kt=p(Ma,"configuration objects"),Ma.forEach(t),Wt=p(M," to define parameters for optimization. These objects are then used to instantiate dedicated "),He=n(M,"EM",{});var Xa=i(He);Yt=p(Xa,"optimizers"),Xa.forEach(t),Zt=p(M," and "),Re=n(M,"EM",{});var Ga=i(Re);ea=p(Ga,"quantizers"),Ga.forEach(t),ta=p(M,"."),M.forEach(t),tt=f(e),me=n(e,"P",{});var Da=i(me);aa=p(Da,"Before applying quantization or optimization, first export our model to the ONNX format:"),Da.forEach(t),at=f(e),c(ae.$$.fragment,e),rt=f(e),pe=n(e,"P",{});var Qa=i(pe);ra=p(Qa,"Let\u2019s see now how we can apply dynamic quantization with ONNX Runtime:"),Qa.forEach(t),nt=f(e),c(re.$$.fragment,e),it=f(e),b=n(e,"P",{});var he=i(b);na=p(he,"In this example, we\u2019ve quantized a model from the Hugging Face Hub, but it could also be a path to a local model directory. The result from applying the "),Se=n(he,"CODE",{});var Va=i(Se);ia=p(Va,"quantize()"),Va.forEach(t),oa=p(he," method is a "),Ce=n(he,"CODE",{});var La=i(Ce);sa=p(La,"model_quantized.onnx"),La.forEach(t),la=p(he," file that can be used to run inference. Here\u2019s an example of how to load an ONNX Runtime model and generate predictions with it:"),he.forEach(t),ot=f(e),c(ne.$$.fragment,e),st=f(e),E=n(e,"H3",{class:!0});var vt=i(E);F=n(vt,"A",{id:!0,class:!0,href:!0});var Ba=i(F);Ie=n(Ba,"SPAN",{});var Ja=i(Ie);c(ie.$$.fragment,Ja),Ja.forEach(t),Ba.forEach(t),ma=f(vt),Ue=n(vt,"SPAN",{});var Ka=i(Ue);pa=p(Ka,"Optimum Intel"),Ka.forEach(t),vt.forEach(t),lt=f(e),ue=n(e,"P",{});var Wa=i(ue);ua=p(Wa,"Here is an example on how to perform inference with the OpenVINO Runtime:"),Wa.forEach(t),mt=f(e),c(oe.$$.fragment,e),this.h()},h(){l(q,"name","hf:doc:metadata"),l(q,"content",JSON.stringify(ir)),l(P,"id","quick-tour"),l(P,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(P,"href","#quick-tour"),l(y,"class","relative group"),l(H,"id","accelerated-training"),l(H,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(H,"href","#accelerated-training"),l(A,"class","relative group"),l(R,"id","optimum-graphcore"),l(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(R,"href","#optimum-graphcore"),l(O,"class","relative group"),l(V,"href","https://huggingface.co/docs/transformers/main_classes/trainer"),l(V,"rel","nofollow"),l(S,"id","optimum-habana"),l(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(S,"href","#optimum-habana"),l(j,"class","relative group"),l(J,"href","https://huggingface.co/docs/transformers/main_classes/trainer"),l(J,"rel","nofollow"),l(C,"id","onnx-runtime"),l(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(C,"href","#onnx-runtime"),l(z,"class","relative group"),l(Y,"href","https://huggingface.co/docs/transformers/main_classes/trainer"),l(Y,"rel","nofollow"),l(I,"id","accelerated-inference"),l(I,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(I,"href","#accelerated-inference"),l(x,"class","relative group"),l(U,"id","onnx-runtime"),l(U,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(U,"href","#onnx-runtime"),l(N,"class","relative group"),l(F,"id","optimum-intel"),l(F,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),l(F,"href","#optimum-intel"),l(E,"class","relative group")},m(e,o){a(document.head,q),s(e,Fe,o),s(e,y,o),a(y,P),a(P,ge),h(G,ge,null),a(y,$t),a(y,_e),a(_e,wt),s(e,Me,o),s(e,le,o),a(le,Tt),s(e,Xe,o),s(e,A,o),a(A,H),a(H,ve),h(D,ve,null),a(A,kt),a(A,$e),a($e,bt),s(e,Ge,o),s(e,O,o),a(O,R),a(R,we),h(Q,we,null),a(O,qt),a(O,Te),a(Te,yt),s(e,De,o),s(e,w,o),a(w,At),a(w,ke),a(ke,Ot),a(w,jt),a(w,V),a(V,zt),a(w,xt),s(e,Qe,o),h(L,e,o),s(e,Ve,o),s(e,j,o),a(j,S),a(S,be),h(B,be,null),a(j,Nt),a(j,qe),a(qe,Et),s(e,Le,o),s(e,T,o),a(T,Pt),a(T,ye),a(ye,Ht),a(T,Rt),a(T,J),a(J,St),a(T,Ct),s(e,Be,o),h(K,e,o),s(e,Je,o),s(e,z,o),a(z,C),a(C,Ae),h(W,Ae,null),a(z,It),a(z,Oe),a(Oe,Ut),s(e,Ke,o),s(e,k,o),a(k,Ft),a(k,je),a(je,Mt),a(k,Xt),a(k,Y),a(Y,Gt),a(k,Dt),s(e,We,o),h(Z,e,o),s(e,Ye,o),s(e,x,o),a(x,I),a(I,ze),h(ee,ze,null),a(x,Qt),a(x,xe),a(xe,Vt),s(e,Ze,o),s(e,N,o),a(N,U),a(U,Ne),h(te,Ne,null),a(N,Lt),a(N,Ee),a(Ee,Bt),s(e,et,o),s(e,$,o),a($,Jt),a($,Pe),a(Pe,Kt),a($,Wt),a($,He),a(He,Yt),a($,Zt),a($,Re),a(Re,ea),a($,ta),s(e,tt,o),s(e,me,o),a(me,aa),s(e,at,o),h(ae,e,o),s(e,rt,o),s(e,pe,o),a(pe,ra),s(e,nt,o),h(re,e,o),s(e,it,o),s(e,b,o),a(b,na),a(b,Se),a(Se,ia),a(b,oa),a(b,Ce),a(Ce,sa),a(b,la),s(e,ot,o),h(ne,e,o),s(e,st,o),s(e,E,o),a(E,F),a(F,Ie),h(ie,Ie,null),a(E,ma),a(E,Ue),a(Ue,pa),s(e,lt,o),s(e,ue,o),a(ue,ua),s(e,mt,o),h(oe,e,o),pt=!0},p:ar,i(e){pt||(g(G.$$.fragment,e),g(D.$$.fragment,e),g(Q.$$.fragment,e),g(L.$$.fragment,e),g(B.$$.fragment,e),g(K.$$.fragment,e),g(W.$$.fragment,e),g(Z.$$.fragment,e),g(ee.$$.fragment,e),g(te.$$.fragment,e),g(ae.$$.fragment,e),g(re.$$.fragment,e),g(ne.$$.fragment,e),g(ie.$$.fragment,e),g(oe.$$.fragment,e),pt=!0)},o(e){_(G.$$.fragment,e),_(D.$$.fragment,e),_(Q.$$.fragment,e),_(L.$$.fragment,e),_(B.$$.fragment,e),_(K.$$.fragment,e),_(W.$$.fragment,e),_(Z.$$.fragment,e),_(ee.$$.fragment,e),_(te.$$.fragment,e),_(ae.$$.fragment,e),_(re.$$.fragment,e),_(ne.$$.fragment,e),_(ie.$$.fragment,e),_(oe.$$.fragment,e),pt=!1},d(e){t(q),e&&t(Fe),e&&t(y),v(G),e&&t(Me),e&&t(le),e&&t(Xe),e&&t(A),v(D),e&&t(Ge),e&&t(O),v(Q),e&&t(De),e&&t(w),e&&t(Qe),v(L,e),e&&t(Ve),e&&t(j),v(B),e&&t(Le),e&&t(T),e&&t(Be),v(K,e),e&&t(Je),e&&t(z),v(W),e&&t(Ke),e&&t(k),e&&t(We),v(Z,e),e&&t(Ye),e&&t(x),v(ee),e&&t(Ze),e&&t(N),v(te),e&&t(et),e&&t($),e&&t(tt),e&&t(me),e&&t(at),v(ae,e),e&&t(rt),e&&t(pe),e&&t(nt),v(re,e),e&&t(it),e&&t(b),e&&t(ot),v(ne,e),e&&t(st),e&&t(E),v(ie),e&&t(lt),e&&t(ue),e&&t(mt),v(oe,e)}}}const ir={local:"quick-tour",sections:[{local:"accelerated-training",sections:[{local:"optimum-graphcore",title:"Optimum Graphcore"},{local:"optimum-habana",title:"Optimum Habana"},{local:"onnx-runtime",title:"ONNX Runtime"}],title:"Accelerated training"},{local:"accelerated-inference",sections:[{local:"onnx-runtime",title:"ONNX Runtime"},{local:"optimum-intel",title:"Optimum Intel"}],title:"Accelerated inference"}],title:"Quick tour"};function or(fa){return rr(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class pr extends Ya{constructor(q){super();Za(this,q,or,nr,er,{})}}export{pr as default,ir as metadata};
