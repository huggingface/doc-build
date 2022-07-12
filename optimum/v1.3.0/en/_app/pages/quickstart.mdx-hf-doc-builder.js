import{S as Ha,i as Ia,s as La,e as o,k as m,w as T,t as s,M as Xa,c as i,d as a,m as c,a as l,x as A,h as n,b as j,G as e,g as p,y as R,L as Ba,q as D,o as N,B as F,v as Ga}from"../chunks/vendor-hf-doc-builder.js";import{I as Ja}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as U}from"../chunks/CodeBlock-hf-doc-builder.js";function Ua(ra){let q,wt,y,b,et,Q,Yt,at,Zt,Et,h,te,st,ee,ae,nt,se,ne,ot,oe,ie,it,le,re,$t,K,pe,Ot,S,Ct,V,me,Tt,M,At,d,ce,lt,he,de,rt,fe,ue,pt,ge,_e,mt,ze,je,Rt,P,Dt,f,qe,ct,ye,ve,ht,xe,be,dt,ke,we,Nt,H,Ft,u,Ee,ft,$e,Oe,ut,Ce,Te,I,gt,Ae,Re,Qt,L,St,k,De,_t,Ne,Fe,Mt,X,Pt,w,Qe,zt,Se,Me,Ht,B,It,W,Pe,Lt,g,v,He,jt,Ie,Le,qt,Xe,Be,Ge,x,Je,yt,Ue,Ke,vt,Ve,We,Ye,G,Ze,xt,ta,ea,aa,bt,sa,Xt,E,na,J,kt,oa,ia,Bt,Y,la,Gt;return Q=new Ja({}),S=new U({props:{code:`import os
from optimum.onnxruntime import ORTModelForSequenceClassification
from transformers import AutoTokenizer
model_checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
save_directory = "tmp/onnx/"
file_name = "model.onnx"
onnx_path = os.path.join(save_directory, "model.onnx")
# Load a model from transformers and export it through the ONNX format
model = ORTModelForSequenceClassification.from_pretrained(model_checkpoint, from_transformers=True)
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
# Save the onnx model and tokenizer
model.save_pretrained(save_directory, file_name=file_name)
tokenizer.save_pretrained(save_directory)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> os
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>model_checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>save_directory = <span class="hljs-string">&quot;tmp/onnx/&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>file_name = <span class="hljs-string">&quot;model.onnx&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_path = os.path.join(save_directory, <span class="hljs-string">&quot;model.onnx&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Load a model from transformers and export it through the ONNX format</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(model_checkpoint, from_transformers=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Save the onnx model and tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.save_pretrained(save_directory, file_name=file_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(save_directory)`}}),M=new U({props:{code:`from optimum.onnxruntime.configuration import AutoQuantizationConfig
from optimum.onnxruntime import ORTQuantizer
# Define the quantization methodology
qconfig = AutoQuantizationConfig.arm64(is_static=False, per_channel=False)
quantizer = ORTQuantizer.from_pretrained(model_checkpoint, feature="sequence-classification")
# Apply dynamic quantization on the model
quantizer.export(
    onnx_model_path=onnx_path,
    onnx_quantized_model_output_path=os.path.join(save_directory, "model-quantized.onnx"),
    quantization_config=qconfig,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> AutoQuantizationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTQuantizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Define the quantization methodology</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>qconfig = AutoQuantizationConfig.arm64(is_static=<span class="hljs-literal">False</span>, per_channel=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer = ORTQuantizer.from_pretrained(model_checkpoint, feature=<span class="hljs-string">&quot;sequence-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Apply dynamic quantization on the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.export(
<span class="hljs-meta">... </span>    onnx_model_path=onnx_path,
<span class="hljs-meta">... </span>    onnx_quantized_model_output_path=os.path.join(save_directory, <span class="hljs-string">&quot;model-quantized.onnx&quot;</span>),
<span class="hljs-meta">... </span>    quantization_config=qconfig,
<span class="hljs-meta">... </span>)`}}),P=new U({props:{code:`from optimum.onnxruntime import ORTModelForSequenceClassification
from transformers import pipeline, AutoTokenizer
model = ORTModelForSequenceClassification.from_pretrained(save_directory, file_name="model-quantized.onnx")
tokenizer = AutoTokenizer.from_pretrained(save_directory)
cls_pipeline = pipeline("text-classification", model=model, tokenizer=tokenizer)
results = cls_pipeline("I love burritos!")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(save_directory, file_name=<span class="hljs-string">&quot;model-quantized.onnx&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(save_directory)
<span class="hljs-meta">&gt;&gt;&gt; </span>cls_pipeline = pipeline(<span class="hljs-string">&quot;text-classification&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>results = cls_pipeline(<span class="hljs-string">&quot;I love burritos!&quot;</span>)`}}),H=new U({props:{code:"qconfig = AutoQuantizationConfig.arm64(is_static=True, per_channel=False)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>qconfig = AutoQuantizationConfig.arm64(is_static=<span class="hljs-literal">True</span>, per_channel=<span class="hljs-literal">False</span>)'}}),L=new U({props:{code:`from functools import partial
from optimum.onnxruntime.configuration import AutoCalibrationConfig

# Create the calibration dataset
calibration_dataset = quantizer.get_calibration_dataset(
    "glue",
    dataset_config_name="sst2",
    preprocess_function=partial(preprocess_fn, tokenizer=quantizer.preprocessor),
    num_samples=50,
    dataset_split="train",
)
# Create the calibration configuration containing the parameters related to calibration.
calibration_config = AutoCalibrationConfig.minmax(calibration_dataset)
# Perform the calibration step: computes the activations quantization ranges
ranges = quantizer.fit(
    dataset=calibration_dataset,
    calibration_config=calibration_config,
    onnx_model_path=onnx_path,
    operators_to_quantize=qconfig.operators_to_quantize,
)
# Apply static quantization on the model
quantizer.export(
    onnx_model_path=onnx_path,
    onnx_quantized_model_output_path=os.path.join(save_directory, "model-quantized.onnx"),
    calibration_tensors_range=ranges,
    quantization_config=qconfig,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> functools <span class="hljs-keyword">import</span> partial
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> AutoCalibrationConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Create the calibration dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>calibration_dataset = quantizer.get_calibration_dataset(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;glue&quot;</span>,
<span class="hljs-meta">... </span>    dataset_config_name=<span class="hljs-string">&quot;sst2&quot;</span>,
<span class="hljs-meta">... </span>    preprocess_function=partial(preprocess_fn, tokenizer=quantizer.preprocessor),
<span class="hljs-meta">... </span>    num_samples=<span class="hljs-number">50</span>,
<span class="hljs-meta">... </span>    dataset_split=<span class="hljs-string">&quot;train&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Create the calibration configuration containing the parameters related to calibration.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>calibration_config = AutoCalibrationConfig.minmax(calibration_dataset)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Perform the calibration step: computes the activations quantization ranges</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ranges = quantizer.fit(
<span class="hljs-meta">... </span>    dataset=calibration_dataset,
<span class="hljs-meta">... </span>    calibration_config=calibration_config,
<span class="hljs-meta">... </span>    onnx_model_path=onnx_path,
<span class="hljs-meta">... </span>    operators_to_quantize=qconfig.operators_to_quantize,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Apply static quantization on the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.export(
<span class="hljs-meta">... </span>    onnx_model_path=onnx_path,
<span class="hljs-meta">... </span>    onnx_quantized_model_output_path=os.path.join(save_directory, <span class="hljs-string">&quot;model-quantized.onnx&quot;</span>),
<span class="hljs-meta">... </span>    calibration_tensors_range=ranges,
<span class="hljs-meta">... </span>    quantization_config=qconfig,
<span class="hljs-meta">... </span>)`}}),X=new U({props:{code:`from optimum.onnxruntime.configuration import OptimizationConfig

# Here the optimization level is selected to be 1, enabling basic optimizations such as redundant node eliminations and constant folding. Higher optimization level will result in a hardware dependent optimized graph.
optimization_config = OptimizationConfig(optimization_level=1)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> OptimizationConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Here the optimization level is selected to be 1, enabling basic optimizations such as redundant node eliminations and constant folding. Higher optimization level will result in a hardware dependent optimized graph.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimization_config = OptimizationConfig(optimization_level=<span class="hljs-number">1</span>)`}}),B=new U({props:{code:`from optimum.onnxruntime import ORTOptimizer

optimizer = ORTOptimizer.from_pretrained(
    model_checkpoint,
    feature="sequence-classification",
)
# Export the optimized model
optimizer.export(
    onnx_model_path=onnx_path,
    onnx_optimized_model_output_path=os.path.join(save_directory, "model-optimized.onnx"),
    optimization_config=optimization_config,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTOptimizer

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = ORTOptimizer.from_pretrained(
<span class="hljs-meta">... </span>    model_checkpoint,
<span class="hljs-meta">... </span>    feature=<span class="hljs-string">&quot;sequence-classification&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Export the optimized model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer.export(
<span class="hljs-meta">... </span>    onnx_model_path=onnx_path,
<span class="hljs-meta">... </span>    onnx_optimized_model_output_path=os.path.join(save_directory, <span class="hljs-string">&quot;model-optimized.onnx&quot;</span>),
<span class="hljs-meta">... </span>    optimization_config=optimization_config,
<span class="hljs-meta">... </span>)`}}),{c(){q=o("meta"),wt=m(),y=o("h1"),b=o("a"),et=o("span"),T(Q.$$.fragment),Yt=m(),at=o("span"),Zt=s("Quickstart"),Et=m(),h=o("p"),te=s("At its core, \u{1F917} Optimum uses "),st=o("em"),ee=s("configuration objects"),ae=s(" to define parameters for optimization on different accelerators. These objects are then used to instantiate dedicated "),nt=o("em"),se=s("optimizers"),ne=s(", "),ot=o("em"),oe=s("quantizers"),ie=s(", and "),it=o("em"),le=s("pruners"),re=s("."),$t=m(),K=o("p"),pe=s("Before applying quantization or optimization, we first need to export our model to the ONNX format."),Ot=m(),T(S.$$.fragment),Ct=m(),V=o("p"),me=s("Let\u2019s see now how we can apply dynamic quantization with ONNX Runtime:"),Tt=m(),T(M.$$.fragment),At=m(),d=o("p"),ce=s("In this example, we\u2019ve quantized a model from the Hugging Face Hub, but it could also be a path to a local model directory. The "),lt=o("code"),he=s("feature"),de=s(" argument in the "),rt=o("code"),fe=s("from_pretrained()"),ue=s(" method corresponds to the type of task that we wish to quantize the model for. The result from applying the "),pt=o("code"),ge=s("export()"),_e=s(" method is a "),mt=o("code"),ze=s("model-quantized.onnx"),je=s(" file that can be used to run inference. Here\u2019s an example of how to load an ONNX Runtime model and generate predictions with it:"),Rt=m(),T(P.$$.fragment),Dt=m(),f=o("p"),qe=s("Similarly, you can apply static quantization by simply setting "),ct=o("code"),ye=s("is_static"),ve=s(" to "),ht=o("code"),xe=s("True"),be=s(" when instantiating the "),dt=o("code"),ke=s("QuantizationConfig"),we=s(" object:"),Nt=m(),T(H.$$.fragment),Ft=m(),u=o("p"),Ee=s("Static quantization relies on feeding batches of data through the model to estimate the activation quantization parameters ahead of inference time. To support this, \u{1F917} Optimum allows you to provide a "),ft=o("em"),$e=s("calibration dataset"),Oe=s(". The calibration dataset can be a simple "),ut=o("code"),Ce=s("Dataset"),Te=s(" object from the \u{1F917} Datasets library, or any dataset that\u2019s hosted on the Hugging Face Hub. For this example, we\u2019ll pick the "),I=o("a"),gt=o("code"),Ae=s("sst2"),Re=s(" dataset that the model was originally trained on:"),Qt=m(),T(L.$$.fragment),St=m(),k=o("p"),De=s("As a final example, let\u2019s take a look at applying "),_t=o("em"),Ne=s("graph optimizations"),Fe=s(" techniques such as operator fusion and constant folding. As before, we load a configuration object, but this time by setting the optimization level instead of the quantization approach:"),Mt=m(),T(X.$$.fragment),Pt=m(),w=o("p"),Qe=s("Next, we load an "),zt=o("em"),Se=s("optimizer"),Me=s(" to apply these optimisations to our model:"),Ht=m(),T(B.$$.fragment),It=m(),W=o("p"),Pe=s("And that\u2019s it - the model is now optimized and ready for inference! As you can see, the process is similar in each case:"),Lt=m(),g=o("ol"),v=o("li"),He=s("Define the optimization / quantization strategies via an "),jt=o("code"),Ie=s("OptimizationConfig"),Le=s(" / "),qt=o("code"),Xe=s("QuantizationConfig"),Be=s(" object"),Ge=m(),x=o("li"),Je=s("Instantiate a "),yt=o("code"),Ue=s("ORTQuantizer"),Ke=s(" or "),vt=o("code"),Ve=s("ORTOptimizer"),We=s(" class"),Ye=m(),G=o("li"),Ze=s("Apply the "),xt=o("code"),ta=s("export()"),ea=s(" method"),aa=m(),bt=o("li"),sa=s("Run inference"),Xt=m(),E=o("p"),na=s("Check out the "),J=o("a"),kt=o("code"),oa=s("examples"),ia=s(" directory for more sophisticated usage."),Bt=m(),Y=o("p"),la=s("Happy optimising \u{1F917}!"),this.h()},l(t){const r=Xa('[data-svelte="svelte-1phssyn"]',document.head);q=i(r,"META",{name:!0,content:!0}),r.forEach(a),wt=c(t),y=i(t,"H1",{class:!0});var Jt=l(y);b=i(Jt,"A",{id:!0,class:!0,href:!0});var pa=l(b);et=i(pa,"SPAN",{});var ma=l(et);A(Q.$$.fragment,ma),ma.forEach(a),pa.forEach(a),Yt=c(Jt),at=i(Jt,"SPAN",{});var ca=l(at);Zt=n(ca,"Quickstart"),ca.forEach(a),Jt.forEach(a),Et=c(t),h=i(t,"P",{});var _=l(h);te=n(_,"At its core, \u{1F917} Optimum uses "),st=i(_,"EM",{});var ha=l(st);ee=n(ha,"configuration objects"),ha.forEach(a),ae=n(_," to define parameters for optimization on different accelerators. These objects are then used to instantiate dedicated "),nt=i(_,"EM",{});var da=l(nt);se=n(da,"optimizers"),da.forEach(a),ne=n(_,", "),ot=i(_,"EM",{});var fa=l(ot);oe=n(fa,"quantizers"),fa.forEach(a),ie=n(_,", and "),it=i(_,"EM",{});var ua=l(it);le=n(ua,"pruners"),ua.forEach(a),re=n(_,"."),_.forEach(a),$t=c(t),K=i(t,"P",{});var ga=l(K);pe=n(ga,"Before applying quantization or optimization, we first need to export our model to the ONNX format."),ga.forEach(a),Ot=c(t),A(S.$$.fragment,t),Ct=c(t),V=i(t,"P",{});var _a=l(V);me=n(_a,"Let\u2019s see now how we can apply dynamic quantization with ONNX Runtime:"),_a.forEach(a),Tt=c(t),A(M.$$.fragment,t),At=c(t),d=i(t,"P",{});var z=l(d);ce=n(z,"In this example, we\u2019ve quantized a model from the Hugging Face Hub, but it could also be a path to a local model directory. The "),lt=i(z,"CODE",{});var za=l(lt);he=n(za,"feature"),za.forEach(a),de=n(z," argument in the "),rt=i(z,"CODE",{});var ja=l(rt);fe=n(ja,"from_pretrained()"),ja.forEach(a),ue=n(z," method corresponds to the type of task that we wish to quantize the model for. The result from applying the "),pt=i(z,"CODE",{});var qa=l(pt);ge=n(qa,"export()"),qa.forEach(a),_e=n(z," method is a "),mt=i(z,"CODE",{});var ya=l(mt);ze=n(ya,"model-quantized.onnx"),ya.forEach(a),je=n(z," file that can be used to run inference. Here\u2019s an example of how to load an ONNX Runtime model and generate predictions with it:"),z.forEach(a),Rt=c(t),A(P.$$.fragment,t),Dt=c(t),f=i(t,"P",{});var $=l(f);qe=n($,"Similarly, you can apply static quantization by simply setting "),ct=i($,"CODE",{});var va=l(ct);ye=n(va,"is_static"),va.forEach(a),ve=n($," to "),ht=i($,"CODE",{});var xa=l(ht);xe=n(xa,"True"),xa.forEach(a),be=n($," when instantiating the "),dt=i($,"CODE",{});var ba=l(dt);ke=n(ba,"QuantizationConfig"),ba.forEach(a),we=n($," object:"),$.forEach(a),Nt=c(t),A(H.$$.fragment,t),Ft=c(t),u=i(t,"P",{});var O=l(u);Ee=n(O,"Static quantization relies on feeding batches of data through the model to estimate the activation quantization parameters ahead of inference time. To support this, \u{1F917} Optimum allows you to provide a "),ft=i(O,"EM",{});var ka=l(ft);$e=n(ka,"calibration dataset"),ka.forEach(a),Oe=n(O,". The calibration dataset can be a simple "),ut=i(O,"CODE",{});var wa=l(ut);Ce=n(wa,"Dataset"),wa.forEach(a),Te=n(O," object from the \u{1F917} Datasets library, or any dataset that\u2019s hosted on the Hugging Face Hub. For this example, we\u2019ll pick the "),I=i(O,"A",{href:!0,rel:!0});var Ea=l(I);gt=i(Ea,"CODE",{});var $a=l(gt);Ae=n($a,"sst2"),$a.forEach(a),Ea.forEach(a),Re=n(O," dataset that the model was originally trained on:"),O.forEach(a),Qt=c(t),A(L.$$.fragment,t),St=c(t),k=i(t,"P",{});var Ut=l(k);De=n(Ut,"As a final example, let\u2019s take a look at applying "),_t=i(Ut,"EM",{});var Oa=l(_t);Ne=n(Oa,"graph optimizations"),Oa.forEach(a),Fe=n(Ut," techniques such as operator fusion and constant folding. As before, we load a configuration object, but this time by setting the optimization level instead of the quantization approach:"),Ut.forEach(a),Mt=c(t),A(X.$$.fragment,t),Pt=c(t),w=i(t,"P",{});var Kt=l(w);Qe=n(Kt,"Next, we load an "),zt=i(Kt,"EM",{});var Ca=l(zt);Se=n(Ca,"optimizer"),Ca.forEach(a),Me=n(Kt," to apply these optimisations to our model:"),Kt.forEach(a),Ht=c(t),A(B.$$.fragment,t),It=c(t),W=i(t,"P",{});var Ta=l(W);Pe=n(Ta,"And that\u2019s it - the model is now optimized and ready for inference! As you can see, the process is similar in each case:"),Ta.forEach(a),Lt=c(t),g=i(t,"OL",{});var C=l(g);v=i(C,"LI",{});var Z=l(v);He=n(Z,"Define the optimization / quantization strategies via an "),jt=i(Z,"CODE",{});var Aa=l(jt);Ie=n(Aa,"OptimizationConfig"),Aa.forEach(a),Le=n(Z," / "),qt=i(Z,"CODE",{});var Ra=l(qt);Xe=n(Ra,"QuantizationConfig"),Ra.forEach(a),Be=n(Z," object"),Z.forEach(a),Ge=c(C),x=i(C,"LI",{});var tt=l(x);Je=n(tt,"Instantiate a "),yt=i(tt,"CODE",{});var Da=l(yt);Ue=n(Da,"ORTQuantizer"),Da.forEach(a),Ke=n(tt," or "),vt=i(tt,"CODE",{});var Na=l(vt);Ve=n(Na,"ORTOptimizer"),Na.forEach(a),We=n(tt," class"),tt.forEach(a),Ye=c(C),G=i(C,"LI",{});var Vt=l(G);Ze=n(Vt,"Apply the "),xt=i(Vt,"CODE",{});var Fa=l(xt);ta=n(Fa,"export()"),Fa.forEach(a),ea=n(Vt," method"),Vt.forEach(a),aa=c(C),bt=i(C,"LI",{});var Qa=l(bt);sa=n(Qa,"Run inference"),Qa.forEach(a),C.forEach(a),Xt=c(t),E=i(t,"P",{});var Wt=l(E);na=n(Wt,"Check out the "),J=i(Wt,"A",{href:!0,rel:!0});var Sa=l(J);kt=i(Sa,"CODE",{});var Ma=l(kt);oa=n(Ma,"examples"),Ma.forEach(a),Sa.forEach(a),ia=n(Wt," directory for more sophisticated usage."),Wt.forEach(a),Bt=c(t),Y=i(t,"P",{});var Pa=l(Y);la=n(Pa,"Happy optimising \u{1F917}!"),Pa.forEach(a),this.h()},h(){j(q,"name","hf:doc:metadata"),j(q,"content",JSON.stringify(Ka)),j(b,"id","quickstart"),j(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(b,"href","#quickstart"),j(y,"class","relative group"),j(I,"href","https://huggingface.co/datasets/glue/viewer/sst2/test"),j(I,"rel","nofollow"),j(J,"href","https://github.com/huggingface/optimum/tree/main/examples"),j(J,"rel","nofollow")},m(t,r){e(document.head,q),p(t,wt,r),p(t,y,r),e(y,b),e(b,et),R(Q,et,null),e(y,Yt),e(y,at),e(at,Zt),p(t,Et,r),p(t,h,r),e(h,te),e(h,st),e(st,ee),e(h,ae),e(h,nt),e(nt,se),e(h,ne),e(h,ot),e(ot,oe),e(h,ie),e(h,it),e(it,le),e(h,re),p(t,$t,r),p(t,K,r),e(K,pe),p(t,Ot,r),R(S,t,r),p(t,Ct,r),p(t,V,r),e(V,me),p(t,Tt,r),R(M,t,r),p(t,At,r),p(t,d,r),e(d,ce),e(d,lt),e(lt,he),e(d,de),e(d,rt),e(rt,fe),e(d,ue),e(d,pt),e(pt,ge),e(d,_e),e(d,mt),e(mt,ze),e(d,je),p(t,Rt,r),R(P,t,r),p(t,Dt,r),p(t,f,r),e(f,qe),e(f,ct),e(ct,ye),e(f,ve),e(f,ht),e(ht,xe),e(f,be),e(f,dt),e(dt,ke),e(f,we),p(t,Nt,r),R(H,t,r),p(t,Ft,r),p(t,u,r),e(u,Ee),e(u,ft),e(ft,$e),e(u,Oe),e(u,ut),e(ut,Ce),e(u,Te),e(u,I),e(I,gt),e(gt,Ae),e(u,Re),p(t,Qt,r),R(L,t,r),p(t,St,r),p(t,k,r),e(k,De),e(k,_t),e(_t,Ne),e(k,Fe),p(t,Mt,r),R(X,t,r),p(t,Pt,r),p(t,w,r),e(w,Qe),e(w,zt),e(zt,Se),e(w,Me),p(t,Ht,r),R(B,t,r),p(t,It,r),p(t,W,r),e(W,Pe),p(t,Lt,r),p(t,g,r),e(g,v),e(v,He),e(v,jt),e(jt,Ie),e(v,Le),e(v,qt),e(qt,Xe),e(v,Be),e(g,Ge),e(g,x),e(x,Je),e(x,yt),e(yt,Ue),e(x,Ke),e(x,vt),e(vt,Ve),e(x,We),e(g,Ye),e(g,G),e(G,Ze),e(G,xt),e(xt,ta),e(G,ea),e(g,aa),e(g,bt),e(bt,sa),p(t,Xt,r),p(t,E,r),e(E,na),e(E,J),e(J,kt),e(kt,oa),e(E,ia),p(t,Bt,r),p(t,Y,r),e(Y,la),Gt=!0},p:Ba,i(t){Gt||(D(Q.$$.fragment,t),D(S.$$.fragment,t),D(M.$$.fragment,t),D(P.$$.fragment,t),D(H.$$.fragment,t),D(L.$$.fragment,t),D(X.$$.fragment,t),D(B.$$.fragment,t),Gt=!0)},o(t){N(Q.$$.fragment,t),N(S.$$.fragment,t),N(M.$$.fragment,t),N(P.$$.fragment,t),N(H.$$.fragment,t),N(L.$$.fragment,t),N(X.$$.fragment,t),N(B.$$.fragment,t),Gt=!1},d(t){a(q),t&&a(wt),t&&a(y),F(Q),t&&a(Et),t&&a(h),t&&a($t),t&&a(K),t&&a(Ot),F(S,t),t&&a(Ct),t&&a(V),t&&a(Tt),F(M,t),t&&a(At),t&&a(d),t&&a(Rt),F(P,t),t&&a(Dt),t&&a(f),t&&a(Nt),F(H,t),t&&a(Ft),t&&a(u),t&&a(Qt),F(L,t),t&&a(St),t&&a(k),t&&a(Mt),F(X,t),t&&a(Pt),t&&a(w),t&&a(Ht),F(B,t),t&&a(It),t&&a(W),t&&a(Lt),t&&a(g),t&&a(Xt),t&&a(E),t&&a(Bt),t&&a(Y)}}}const Ka={local:"quickstart",title:"Quickstart"};function Va(ra){return Ga(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ts extends Ha{constructor(q){super();Ia(this,q,Va,Ua,La,{})}}export{ts as default,Ka as metadata};
