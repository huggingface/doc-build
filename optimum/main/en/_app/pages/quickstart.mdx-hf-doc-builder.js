import{S as Qa,i as Sa,s as Ma,e as o,k as m,w as T,t as s,M as Pa,c as i,d as a,m as c,a as r,x as A,h as n,b as z,G as e,g as p,y as R,L as Ha,q as D,o as N,B as F,v as Ia}from"../chunks/vendor-hf-doc-builder.js";import{I as La}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as J}from"../chunks/CodeBlock-hf-doc-builder.js";function Xa(oa){let j,Et,v,k,at,Q,Wt,st,Yt,$t,f,Zt,nt,te,ee,ot,ae,se,it,ne,oe,lt,ie,le,Ot,U,re,Ct,S,xt,K,pe,Tt,M,At,g,me,rt,ce,fe,pt,de,ue,Rt,P,Dt,d,he,mt,ge,_e,ct,ze,je,ft,ve,ye,Nt,H,Ft,u,qe,dt,be,ke,ut,we,Ee,I,ht,$e,Oe,Qt,L,St,w,Ce,gt,xe,Te,Mt,X,Pt,E,Ae,_t,Re,De,Ht,B,It,V,Ne,Lt,h,y,Fe,zt,Qe,Se,jt,Me,Pe,He,q,Ie,vt,Le,Xe,yt,Be,Ge,Je,b,Ue,qt,Ke,Ve,bt,We,Ye,Ze,kt,ta,Xt,$,ea,G,wt,aa,sa,Bt,W,na,Gt;return Q=new La({}),S=new J({props:{code:`from optimum.onnxruntime import ORTModelForSequenceClassification
from transformers import AutoTokenizer
model_checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
save_directory = "tmp/onnx/"
# Load a model from transformers and export it to ONNX
ort_model = ORTModelForSequenceClassification.from_pretrained(model_checkpoint, from_transformers=True)
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
# Save the onnx model and tokenizer
ort_model.save_pretrained(save_directory)
tokenizer.save_pretrained(save_directory)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>model_checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>save_directory = <span class="hljs-string">&quot;tmp/onnx/&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Load a model from transformers and export it to ONNX</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ort_model = ORTModelForSequenceClassification.from_pretrained(model_checkpoint, from_transformers=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Save the onnx model and tokenizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ort_model.save_pretrained(save_directory)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.save_pretrained(save_directory)`}}),M=new J({props:{code:`from optimum.onnxruntime.configuration import AutoQuantizationConfig
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
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.quantize(save_dir=save_directory, quantization_config=qconfig)`}}),P=new J({props:{code:`from optimum.onnxruntime import ORTModelForSequenceClassification
from transformers import pipeline, AutoTokenizer
model = ORTModelForSequenceClassification.from_pretrained(save_directory, file_name="model_quantized.onnx")
tokenizer = AutoTokenizer.from_pretrained(save_directory)
cls_pipeline = pipeline("text-classification", model=model, tokenizer=tokenizer)
results = cls_pipeline("I love burritos!")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> pipeline, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(save_directory, file_name=<span class="hljs-string">&quot;model_quantized.onnx&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(save_directory)
<span class="hljs-meta">&gt;&gt;&gt; </span>cls_pipeline = pipeline(<span class="hljs-string">&quot;text-classification&quot;</span>, model=model, tokenizer=tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>results = cls_pipeline(<span class="hljs-string">&quot;I love burritos!&quot;</span>)`}}),H=new J({props:{code:"qconfig = AutoQuantizationConfig.arm64(is_static=True, per_channel=False)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>qconfig = AutoQuantizationConfig.arm64(is_static=<span class="hljs-literal">True</span>, per_channel=<span class="hljs-literal">False</span>)'}}),L=new J({props:{code:`from functools import partial
from optimum.onnxruntime.configuration import AutoCalibrationConfig

def preprocess_fn(ex, tokenizer):
    return tokenizer(ex["sentence"])

# Create the calibration dataset
calibration_dataset = quantizer.get_calibration_dataset(
    "glue",
    dataset_config_name="sst2",
    preprocess_function=partial(preprocess_fn, tokenizer=tokenizer),
    num_samples=50,
    dataset_split="train",
)
# Create the calibration configuration containing the parameters related to calibration.
calibration_config = AutoCalibrationConfig.minmax(calibration_dataset)
# Perform the calibration step: computes the activations quantization ranges
ranges = quantizer.fit(
    dataset=calibration_dataset,
    calibration_config=calibration_config,
    operators_to_quantize=qconfig.operators_to_quantize,
)
# Apply static quantization on the model
quantizer.quantize(
    save_dir=save_directory,
    calibration_tensors_range=ranges,
    quantization_config=qconfig,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> functools <span class="hljs-keyword">import</span> partial
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> AutoCalibrationConfig

<span class="hljs-comment"># Define the processing function to apply to each example after loading the dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_fn</span>(<span class="hljs-params">ex, tokenizer</span>):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> tokenizer(ex[<span class="hljs-string">&quot;sentence&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Create the calibration dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>calibration_dataset = quantizer.get_calibration_dataset(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;glue&quot;</span>,
<span class="hljs-meta">... </span>    dataset_config_name=<span class="hljs-string">&quot;sst2&quot;</span>,
<span class="hljs-meta">... </span>    preprocess_function=partial(preprocess_fn, tokenizer=tokenizer),
<span class="hljs-meta">... </span>    num_samples=<span class="hljs-number">50</span>,
<span class="hljs-meta">... </span>    dataset_split=<span class="hljs-string">&quot;train&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Create the calibration configuration containing the parameters related to calibration.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>calibration_config = AutoCalibrationConfig.minmax(calibration_dataset)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Perform the calibration step: computes the activations quantization ranges</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ranges = quantizer.fit(
<span class="hljs-meta">... </span>    dataset=calibration_dataset,
<span class="hljs-meta">... </span>    calibration_config=calibration_config,
<span class="hljs-meta">... </span>    operators_to_quantize=qconfig.operators_to_quantize,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Apply static quantization on the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.quantize(
<span class="hljs-meta">... </span>    save_dir=save_directory,
<span class="hljs-meta">... </span>    calibration_tensors_range=ranges,
<span class="hljs-meta">... </span>    quantization_config=qconfig,
<span class="hljs-meta">... </span>)`}}),X=new J({props:{code:`from optimum.onnxruntime.configuration import OptimizationConfig

# Here the optimization level is selected to be 1, enabling basic optimizations such as redundant node eliminations and constant folding. Higher optimization level will result in a hardware dependent optimized graph.
optimization_config = OptimizationConfig(optimization_level=1)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> OptimizationConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Here the optimization level is selected to be 1, enabling basic optimizations such as redundant node eliminations and constant folding. Higher optimization level will result in a hardware dependent optimized graph.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimization_config = OptimizationConfig(optimization_level=<span class="hljs-number">1</span>)`}}),B=new J({props:{code:`from optimum.onnxruntime import ORTOptimizer

optimizer = ORTOptimizer.from_pretrained(ort_model)

# Optimize the model
optimizer.optimize(save_dir=save_directory, optimization_config=optimization_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTOptimizer

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = ORTOptimizer.from_pretrained(ort_model)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Optimize the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer.optimize(save_dir=save_directory, optimization_config=optimization_config)`}}),{c(){j=o("meta"),Et=m(),v=o("h1"),k=o("a"),at=o("span"),T(Q.$$.fragment),Wt=m(),st=o("span"),Yt=s("Quickstart"),$t=m(),f=o("p"),Zt=s("At its core, \u{1F917} Optimum uses "),nt=o("em"),te=s("configuration objects"),ee=s(" to define parameters for optimization on different accelerators. These objects are then used to instantiate dedicated "),ot=o("em"),ae=s("optimizers"),se=s(", "),it=o("em"),ne=s("quantizers"),oe=s(", and "),lt=o("em"),ie=s("pruners"),le=s("."),Ot=m(),U=o("p"),re=s("Before applying quantization or optimization, we first need to export our model to the ONNX format."),Ct=m(),T(S.$$.fragment),xt=m(),K=o("p"),pe=s("Let\u2019s see now how we can apply dynamic quantization with ONNX Runtime:"),Tt=m(),T(M.$$.fragment),At=m(),g=o("p"),me=s("In this example, we\u2019ve quantized a model from the Hugging Face Hub, but it could also be a path to a local model directory. The result from applying the "),rt=o("code"),ce=s("quantize()"),fe=s(" method is a "),pt=o("code"),de=s("model_quantized.onnx"),ue=s(" file that can be used to run inference. Here\u2019s an example of how to load an ONNX Runtime model and generate predictions with it:"),Rt=m(),T(P.$$.fragment),Dt=m(),d=o("p"),he=s("Similarly, you can apply static quantization by simply setting "),mt=o("code"),ge=s("is_static"),_e=s(" to "),ct=o("code"),ze=s("True"),je=s(" when instantiating the "),ft=o("code"),ve=s("QuantizationConfig"),ye=s(" object:"),Nt=m(),T(H.$$.fragment),Ft=m(),u=o("p"),qe=s("Static quantization relies on feeding batches of data through the model to estimate the activation quantization parameters ahead of inference time. To support this, \u{1F917} Optimum allows you to provide a "),dt=o("em"),be=s("calibration dataset"),ke=s(". The calibration dataset can be a simple "),ut=o("code"),we=s("Dataset"),Ee=s(" object from the \u{1F917} Datasets library, or any dataset that\u2019s hosted on the Hugging Face Hub. For this example, we\u2019ll pick the "),I=o("a"),ht=o("code"),$e=s("sst2"),Oe=s(" dataset that the model was originally trained on:"),Qt=m(),T(L.$$.fragment),St=m(),w=o("p"),Ce=s("As a final example, let\u2019s take a look at applying "),gt=o("em"),xe=s("graph optimizations"),Te=s(" techniques such as operator fusion and constant folding. As before, we load a configuration object, but this time by setting the optimization level instead of the quantization approach:"),Mt=m(),T(X.$$.fragment),Pt=m(),E=o("p"),Ae=s("Next, we load an "),_t=o("em"),Re=s("optimizer"),De=s(" to apply these optimisations to our model:"),Ht=m(),T(B.$$.fragment),It=m(),V=o("p"),Ne=s("And that\u2019s it - the model is now optimized and ready for inference! As you can see, the process is similar in each case:"),Lt=m(),h=o("ol"),y=o("li"),Fe=s("Define the optimization / quantization strategies via an "),zt=o("code"),Qe=s("OptimizationConfig"),Se=s(" / "),jt=o("code"),Me=s("QuantizationConfig"),Pe=s(" object"),He=m(),q=o("li"),Ie=s("Instantiate a "),vt=o("code"),Le=s("ORTQuantizer"),Xe=s(" or "),yt=o("code"),Be=s("ORTOptimizer"),Ge=s(" class"),Je=m(),b=o("li"),Ue=s("Apply the "),qt=o("code"),Ke=s("quantize()"),Ve=s(" or "),bt=o("code"),We=s("optimize()"),Ye=s(" method"),Ze=m(),kt=o("li"),ta=s("Run inference"),Xt=m(),$=o("p"),ea=s("Check out the "),G=o("a"),wt=o("code"),aa=s("examples"),sa=s(" directory for more sophisticated usage."),Bt=m(),W=o("p"),na=s("Happy optimising \u{1F917}!"),this.h()},l(t){const l=Pa('[data-svelte="svelte-1phssyn"]',document.head);j=i(l,"META",{name:!0,content:!0}),l.forEach(a),Et=c(t),v=i(t,"H1",{class:!0});var Jt=r(v);k=i(Jt,"A",{id:!0,class:!0,href:!0});var ia=r(k);at=i(ia,"SPAN",{});var la=r(at);A(Q.$$.fragment,la),la.forEach(a),ia.forEach(a),Wt=c(Jt),st=i(Jt,"SPAN",{});var ra=r(st);Yt=n(ra,"Quickstart"),ra.forEach(a),Jt.forEach(a),$t=c(t),f=i(t,"P",{});var _=r(f);Zt=n(_,"At its core, \u{1F917} Optimum uses "),nt=i(_,"EM",{});var pa=r(nt);te=n(pa,"configuration objects"),pa.forEach(a),ee=n(_," to define parameters for optimization on different accelerators. These objects are then used to instantiate dedicated "),ot=i(_,"EM",{});var ma=r(ot);ae=n(ma,"optimizers"),ma.forEach(a),se=n(_,", "),it=i(_,"EM",{});var ca=r(it);ne=n(ca,"quantizers"),ca.forEach(a),oe=n(_,", and "),lt=i(_,"EM",{});var fa=r(lt);ie=n(fa,"pruners"),fa.forEach(a),le=n(_,"."),_.forEach(a),Ot=c(t),U=i(t,"P",{});var da=r(U);re=n(da,"Before applying quantization or optimization, we first need to export our model to the ONNX format."),da.forEach(a),Ct=c(t),A(S.$$.fragment,t),xt=c(t),K=i(t,"P",{});var ua=r(K);pe=n(ua,"Let\u2019s see now how we can apply dynamic quantization with ONNX Runtime:"),ua.forEach(a),Tt=c(t),A(M.$$.fragment,t),At=c(t),g=i(t,"P",{});var Y=r(g);me=n(Y,"In this example, we\u2019ve quantized a model from the Hugging Face Hub, but it could also be a path to a local model directory. The result from applying the "),rt=i(Y,"CODE",{});var ha=r(rt);ce=n(ha,"quantize()"),ha.forEach(a),fe=n(Y," method is a "),pt=i(Y,"CODE",{});var ga=r(pt);de=n(ga,"model_quantized.onnx"),ga.forEach(a),ue=n(Y," file that can be used to run inference. Here\u2019s an example of how to load an ONNX Runtime model and generate predictions with it:"),Y.forEach(a),Rt=c(t),A(P.$$.fragment,t),Dt=c(t),d=i(t,"P",{});var O=r(d);he=n(O,"Similarly, you can apply static quantization by simply setting "),mt=i(O,"CODE",{});var _a=r(mt);ge=n(_a,"is_static"),_a.forEach(a),_e=n(O," to "),ct=i(O,"CODE",{});var za=r(ct);ze=n(za,"True"),za.forEach(a),je=n(O," when instantiating the "),ft=i(O,"CODE",{});var ja=r(ft);ve=n(ja,"QuantizationConfig"),ja.forEach(a),ye=n(O," object:"),O.forEach(a),Nt=c(t),A(H.$$.fragment,t),Ft=c(t),u=i(t,"P",{});var C=r(u);qe=n(C,"Static quantization relies on feeding batches of data through the model to estimate the activation quantization parameters ahead of inference time. To support this, \u{1F917} Optimum allows you to provide a "),dt=i(C,"EM",{});var va=r(dt);be=n(va,"calibration dataset"),va.forEach(a),ke=n(C,". The calibration dataset can be a simple "),ut=i(C,"CODE",{});var ya=r(ut);we=n(ya,"Dataset"),ya.forEach(a),Ee=n(C," object from the \u{1F917} Datasets library, or any dataset that\u2019s hosted on the Hugging Face Hub. For this example, we\u2019ll pick the "),I=i(C,"A",{href:!0,rel:!0});var qa=r(I);ht=i(qa,"CODE",{});var ba=r(ht);$e=n(ba,"sst2"),ba.forEach(a),qa.forEach(a),Oe=n(C," dataset that the model was originally trained on:"),C.forEach(a),Qt=c(t),A(L.$$.fragment,t),St=c(t),w=i(t,"P",{});var Ut=r(w);Ce=n(Ut,"As a final example, let\u2019s take a look at applying "),gt=i(Ut,"EM",{});var ka=r(gt);xe=n(ka,"graph optimizations"),ka.forEach(a),Te=n(Ut," techniques such as operator fusion and constant folding. As before, we load a configuration object, but this time by setting the optimization level instead of the quantization approach:"),Ut.forEach(a),Mt=c(t),A(X.$$.fragment,t),Pt=c(t),E=i(t,"P",{});var Kt=r(E);Ae=n(Kt,"Next, we load an "),_t=i(Kt,"EM",{});var wa=r(_t);Re=n(wa,"optimizer"),wa.forEach(a),De=n(Kt," to apply these optimisations to our model:"),Kt.forEach(a),Ht=c(t),A(B.$$.fragment,t),It=c(t),V=i(t,"P",{});var Ea=r(V);Ne=n(Ea,"And that\u2019s it - the model is now optimized and ready for inference! As you can see, the process is similar in each case:"),Ea.forEach(a),Lt=c(t),h=i(t,"OL",{});var x=r(h);y=i(x,"LI",{});var Z=r(y);Fe=n(Z,"Define the optimization / quantization strategies via an "),zt=i(Z,"CODE",{});var $a=r(zt);Qe=n($a,"OptimizationConfig"),$a.forEach(a),Se=n(Z," / "),jt=i(Z,"CODE",{});var Oa=r(jt);Me=n(Oa,"QuantizationConfig"),Oa.forEach(a),Pe=n(Z," object"),Z.forEach(a),He=c(x),q=i(x,"LI",{});var tt=r(q);Ie=n(tt,"Instantiate a "),vt=i(tt,"CODE",{});var Ca=r(vt);Le=n(Ca,"ORTQuantizer"),Ca.forEach(a),Xe=n(tt," or "),yt=i(tt,"CODE",{});var xa=r(yt);Be=n(xa,"ORTOptimizer"),xa.forEach(a),Ge=n(tt," class"),tt.forEach(a),Je=c(x),b=i(x,"LI",{});var et=r(b);Ue=n(et,"Apply the "),qt=i(et,"CODE",{});var Ta=r(qt);Ke=n(Ta,"quantize()"),Ta.forEach(a),Ve=n(et," or "),bt=i(et,"CODE",{});var Aa=r(bt);We=n(Aa,"optimize()"),Aa.forEach(a),Ye=n(et," method"),et.forEach(a),Ze=c(x),kt=i(x,"LI",{});var Ra=r(kt);ta=n(Ra,"Run inference"),Ra.forEach(a),x.forEach(a),Xt=c(t),$=i(t,"P",{});var Vt=r($);ea=n(Vt,"Check out the "),G=i(Vt,"A",{href:!0,rel:!0});var Da=r(G);wt=i(Da,"CODE",{});var Na=r(wt);aa=n(Na,"examples"),Na.forEach(a),Da.forEach(a),sa=n(Vt," directory for more sophisticated usage."),Vt.forEach(a),Bt=c(t),W=i(t,"P",{});var Fa=r(W);na=n(Fa,"Happy optimising \u{1F917}!"),Fa.forEach(a),this.h()},h(){z(j,"name","hf:doc:metadata"),z(j,"content",JSON.stringify(Ba)),z(k,"id","quickstart"),z(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),z(k,"href","#quickstart"),z(v,"class","relative group"),z(I,"href","https://huggingface.co/datasets/glue/viewer/sst2/test"),z(I,"rel","nofollow"),z(G,"href","https://github.com/huggingface/optimum/tree/main/examples"),z(G,"rel","nofollow")},m(t,l){e(document.head,j),p(t,Et,l),p(t,v,l),e(v,k),e(k,at),R(Q,at,null),e(v,Wt),e(v,st),e(st,Yt),p(t,$t,l),p(t,f,l),e(f,Zt),e(f,nt),e(nt,te),e(f,ee),e(f,ot),e(ot,ae),e(f,se),e(f,it),e(it,ne),e(f,oe),e(f,lt),e(lt,ie),e(f,le),p(t,Ot,l),p(t,U,l),e(U,re),p(t,Ct,l),R(S,t,l),p(t,xt,l),p(t,K,l),e(K,pe),p(t,Tt,l),R(M,t,l),p(t,At,l),p(t,g,l),e(g,me),e(g,rt),e(rt,ce),e(g,fe),e(g,pt),e(pt,de),e(g,ue),p(t,Rt,l),R(P,t,l),p(t,Dt,l),p(t,d,l),e(d,he),e(d,mt),e(mt,ge),e(d,_e),e(d,ct),e(ct,ze),e(d,je),e(d,ft),e(ft,ve),e(d,ye),p(t,Nt,l),R(H,t,l),p(t,Ft,l),p(t,u,l),e(u,qe),e(u,dt),e(dt,be),e(u,ke),e(u,ut),e(ut,we),e(u,Ee),e(u,I),e(I,ht),e(ht,$e),e(u,Oe),p(t,Qt,l),R(L,t,l),p(t,St,l),p(t,w,l),e(w,Ce),e(w,gt),e(gt,xe),e(w,Te),p(t,Mt,l),R(X,t,l),p(t,Pt,l),p(t,E,l),e(E,Ae),e(E,_t),e(_t,Re),e(E,De),p(t,Ht,l),R(B,t,l),p(t,It,l),p(t,V,l),e(V,Ne),p(t,Lt,l),p(t,h,l),e(h,y),e(y,Fe),e(y,zt),e(zt,Qe),e(y,Se),e(y,jt),e(jt,Me),e(y,Pe),e(h,He),e(h,q),e(q,Ie),e(q,vt),e(vt,Le),e(q,Xe),e(q,yt),e(yt,Be),e(q,Ge),e(h,Je),e(h,b),e(b,Ue),e(b,qt),e(qt,Ke),e(b,Ve),e(b,bt),e(bt,We),e(b,Ye),e(h,Ze),e(h,kt),e(kt,ta),p(t,Xt,l),p(t,$,l),e($,ea),e($,G),e(G,wt),e(wt,aa),e($,sa),p(t,Bt,l),p(t,W,l),e(W,na),Gt=!0},p:Ha,i(t){Gt||(D(Q.$$.fragment,t),D(S.$$.fragment,t),D(M.$$.fragment,t),D(P.$$.fragment,t),D(H.$$.fragment,t),D(L.$$.fragment,t),D(X.$$.fragment,t),D(B.$$.fragment,t),Gt=!0)},o(t){N(Q.$$.fragment,t),N(S.$$.fragment,t),N(M.$$.fragment,t),N(P.$$.fragment,t),N(H.$$.fragment,t),N(L.$$.fragment,t),N(X.$$.fragment,t),N(B.$$.fragment,t),Gt=!1},d(t){a(j),t&&a(Et),t&&a(v),F(Q),t&&a($t),t&&a(f),t&&a(Ot),t&&a(U),t&&a(Ct),F(S,t),t&&a(xt),t&&a(K),t&&a(Tt),F(M,t),t&&a(At),t&&a(g),t&&a(Rt),F(P,t),t&&a(Dt),t&&a(d),t&&a(Nt),F(H,t),t&&a(Ft),t&&a(u),t&&a(Qt),F(L,t),t&&a(St),t&&a(w),t&&a(Mt),F(X,t),t&&a(Pt),t&&a(E),t&&a(Ht),F(B,t),t&&a(It),t&&a(V),t&&a(Lt),t&&a(h),t&&a(Xt),t&&a($),t&&a(Bt),t&&a(W)}}}const Ba={local:"quickstart",title:"Quickstart"};function Ga(oa){return Ia(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Va extends Qa{constructor(j){super();Sa(this,j,Ga,Xa,Ma,{})}}export{Va as default,Ba as metadata};
