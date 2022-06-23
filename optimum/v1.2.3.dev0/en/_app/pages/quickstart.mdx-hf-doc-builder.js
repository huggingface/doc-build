import{S as Ta,i as Aa,s as Ra,e as o,k as c,w as I,t as s,M as Da,c as i,d as a,m,a as l,x as L,h as n,b as j,G as e,g as r,y as S,L as Qa,q as X,o as B,B as G,v as Ha}from"../chunks/vendor-hf-doc-builder.js";import{I as Pa}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as W}from"../chunks/CodeBlock-hf-doc-builder.js";function Fa(ta){let q,yt,b,v,Y,T,Gt,Z,Jt,vt,u,Ut,tt,Kt,Vt,et,Wt,Yt,at,Zt,te,st,ee,ae,wt,A,kt,h,se,nt,ne,oe,ot,ie,le,it,pe,re,lt,ce,me,Et,R,$t,d,ue,pt,he,de,rt,fe,ge,ct,_e,ze,Ot,D,Ct,f,je,mt,qe,be,ut,xe,ye,Q,ht,ve,we,Tt,H,At,w,ke,dt,Ee,$e,Rt,P,Dt,k,Oe,ft,Ce,Te,Qt,F,Ht,J,Ae,Pt,g,x,Re,gt,De,Qe,_t,He,Pe,Fe,y,Me,zt,Ne,Ie,jt,Le,Se,Xe,M,Be,qt,Ge,Je,Ue,bt,Ke,Ft,E,Ve,N,xt,We,Ye,Mt,U,Ze,Nt;return T=new Pa({}),A=new W({props:{code:`from optimum.onnxruntime import ORTConfig, ORTQuantizer

# The model we wish to quantize
model_checkpoint = "distilbert-base-uncased-finetuned-sst-2-english"
# The type of quantization to apply
qconfig = AutoQuantizationConfig.arm64(is_static=False, per_channel=False)
quantizer = ORTQuantizer.from_pretrained(model_checkpoint, feature="sequence-classification")
# Quantize the model!
quantizer.fit(model_checkpoint, output_dir=".", feature="sequence-classification")
quantizer = ORTQuantizer(
    onnx_model_path="model.onnx",
    onnx_quantized_model_output_path="model-quantized.onnx",
    quantization_config=qconfig,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTConfig, ORTQuantizer

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># The model we wish to quantize</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_checkpoint = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># The type of quantization to apply</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>qconfig = AutoQuantizationConfig.arm64(is_static=<span class="hljs-literal">False</span>, per_channel=<span class="hljs-literal">False</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer = ORTQuantizer.from_pretrained(model_checkpoint, feature=<span class="hljs-string">&quot;sequence-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Quantize the model!</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.fit(model_checkpoint, output_dir=<span class="hljs-string">&quot;.&quot;</span>, feature=<span class="hljs-string">&quot;sequence-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer = ORTQuantizer(
<span class="hljs-meta">... </span>    onnx_model_path=<span class="hljs-string">&quot;model.onnx&quot;</span>,
<span class="hljs-meta">... </span>    onnx_quantized_model_output_path=<span class="hljs-string">&quot;model-quantized.onnx&quot;</span>,
<span class="hljs-meta">... </span>    quantization_config=qconfig,
<span class="hljs-meta">... </span>)`}}),R=new W({props:{code:`from functools import partial
from datasets import Dataset
from optimum.onnxruntime import ORTModel

# Load quantized model
ort_model = ORTModel("model-quantized.onnx", quantizer._onnx_config)
# Create a dataset or load one from the Hub
ds = Dataset.from_dict({"sentence": ["I love burritos!"]})
tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)

def preprocess_fn(ex, tokenizer):
    return tokenizer(ex["sentence"])

# Tokenize the inputs
tokenized_ds = ds.map(partial(preprocess_fn, tokenizer=quantizer.preprocessor))
ort_outputs = ort_model.evaluation_loop(tokenized_ds)
# Extract logits!
ort_outputs.predictions`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> functools <span class="hljs-keyword">import</span> partial
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> datasets <span class="hljs-keyword">import</span> Dataset
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Load quantized model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ort_model = ORTModel(<span class="hljs-string">&quot;model-quantized.onnx&quot;</span>, quantizer._onnx_config)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Create a dataset or load one from the Hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ds = Dataset.from_dict({<span class="hljs-string">&quot;sentence&quot;</span>: [<span class="hljs-string">&quot;I love burritos!&quot;</span>]})
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_checkpoint)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_fn</span>(<span class="hljs-params">ex, tokenizer</span>):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">return</span> tokenizer(ex[<span class="hljs-string">&quot;sentence&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Tokenize the inputs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_ds = ds.<span class="hljs-built_in">map</span>(partial(preprocess_fn, tokenizer=quantizer.preprocessor))
<span class="hljs-meta">&gt;&gt;&gt; </span>ort_outputs = ort_model.evaluation_loop(tokenized_ds)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Extract logits!</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ort_outputs.predictions`}}),D=new W({props:{code:"qconfig = AutoQuantizationConfig.arm64(is_static=True, per_channel=False)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>qconfig = AutoQuantizationConfig.arm64(is_static=<span class="hljs-literal">True</span>, per_channel=<span class="hljs-literal">False</span>)'}}),H=new W({props:{code:`from optimum.onnxruntime.configuration import AutoCalibrationConfig

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
    onnx_model_path="model.onnx",
    operators_to_quantize=qconfig.operators_to_quantize,
)
# Quantize the same way we did for dynamic quantization!
quantizer.export(
    onnx_model_path="model.onnx",
    onnx_quantized_model_output_path="model-quantized.onnx",
    calibration_tensors_range=ranges,
    quantization_config=qconfig,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> AutoCalibrationConfig

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
<span class="hljs-meta">... </span>    onnx_model_path=<span class="hljs-string">&quot;model.onnx&quot;</span>,
<span class="hljs-meta">... </span>    operators_to_quantize=qconfig.operators_to_quantize,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Quantize the same way we did for dynamic quantization!</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.export(
<span class="hljs-meta">... </span>    onnx_model_path=<span class="hljs-string">&quot;model.onnx&quot;</span>,
<span class="hljs-meta">... </span>    onnx_quantized_model_output_path=<span class="hljs-string">&quot;model-quantized.onnx&quot;</span>,
<span class="hljs-meta">... </span>    calibration_tensors_range=ranges,
<span class="hljs-meta">... </span>    quantization_config=qconfig,
<span class="hljs-meta">... </span>)`}}),P=new W({props:{code:`from optimum.onnxruntime.configuration import OptimizationConfig

# Here the optimization level is selected to be 1, enabling basic optimizations such as redundant node eliminations and constant folding. Higher optimization level will result in a hardware dependent optimized graph.
optimization_config = OptimizationConfig(optimization_level=1)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> OptimizationConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Here the optimization level is selected to be 1, enabling basic optimizations such as redundant node eliminations and constant folding. Higher optimization level will result in a hardware dependent optimized graph.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimization_config = OptimizationConfig(optimization_level=<span class="hljs-number">1</span>)`}}),F=new W({props:{code:`from optimum.onnxruntime import ORTOptimizer

optimizer = ORTOptimizer.from_pretrained(
    model_checkpoint,
    feature="sequence-classification",
)
# Export the optimized model
optimizer.export(
    onnx_model_path="model.onnx",
    onnx_optimized_model_output_path="model-optimized.onnx",
    optimization_config=optimization_config,
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTOptimizer

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = ORTOptimizer.from_pretrained(
<span class="hljs-meta">... </span>    model_checkpoint,
<span class="hljs-meta">... </span>    feature=<span class="hljs-string">&quot;sequence-classification&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Export the optimized model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer.export(
<span class="hljs-meta">... </span>    onnx_model_path=<span class="hljs-string">&quot;model.onnx&quot;</span>,
<span class="hljs-meta">... </span>    onnx_optimized_model_output_path=<span class="hljs-string">&quot;model-optimized.onnx&quot;</span>,
<span class="hljs-meta">... </span>    optimization_config=optimization_config,
<span class="hljs-meta">... </span>)`}}),{c(){q=o("meta"),yt=c(),b=o("h1"),v=o("a"),Y=o("span"),I(T.$$.fragment),Gt=c(),Z=o("span"),Jt=s("Quickstart"),vt=c(),u=o("p"),Ut=s("At its core, \u{1F917} Optimum uses "),tt=o("em"),Kt=s("configuration objects"),Vt=s(" to define parameters for optimization on different accelerators. These objects are then used to instantiate dedicated "),et=o("em"),Wt=s("optimizers"),Yt=s(", "),at=o("em"),Zt=s("quantizers"),te=s(", and "),st=o("em"),ee=s("pruners"),ae=s(". For example, here\u2019s how you can apply dynamic quantization with ONNX Runtime:"),wt=c(),I(A.$$.fragment),kt=c(),h=o("p"),se=s("In this example, we\u2019ve quantized a model from the Hugging Face Hub, but it could also be a path to a local model directory. The "),nt=o("code"),ne=s("feature"),oe=s(" argument in the "),ot=o("code"),ie=s("from_pretrained()"),le=s(" method corresponds to the type of task that we wish to quantize the model for. The result from applying the "),it=o("code"),pe=s("export()"),re=s(" method is a "),lt=o("code"),ce=s("model-quantized.onnx"),me=s(" file that can be used to run inference. Here\u2019s an example of how to load an ONNX Runtime model and generate predictions with it:"),Et=c(),I(R.$$.fragment),$t=c(),d=o("p"),ue=s("Similarly, you can apply static quantization by simply setting "),pt=o("code"),he=s("is_static"),de=s(" to "),rt=o("code"),fe=s("True"),ge=s(" when instantiating the "),ct=o("code"),_e=s("QuantizationConfig"),ze=s(" object:"),Ot=c(),I(D.$$.fragment),Ct=c(),f=o("p"),je=s("Static quantization relies on feeding batches of data through the model to estimate the activation quantization parameters ahead of inference time. To support this, \u{1F917} Optimum allows you to provide a "),mt=o("em"),qe=s("calibration dataset"),be=s(". The calibration dataset can be a simple "),ut=o("code"),xe=s("Dataset"),ye=s(" object from the \u{1F917} Datasets library, or any dataset that\u2019s hosted on the Hugging Face Hub. For this example, we\u2019ll pick the "),Q=o("a"),ht=o("code"),ve=s("sst2"),we=s(" dataset that the model was originally trained on:"),Tt=c(),I(H.$$.fragment),At=c(),w=o("p"),ke=s("As a final example, let\u2019s take a look at applying "),dt=o("em"),Ee=s("graph optimizations"),$e=s(" techniques such as operator fusion and constant folding. As before, we load a configuration object, but this time by setting the optimization level instead of the quantization approach:"),Rt=c(),I(P.$$.fragment),Dt=c(),k=o("p"),Oe=s("Next, we load an "),ft=o("em"),Ce=s("optimizer"),Te=s(" to apply these optimisations to our model:"),Qt=c(),I(F.$$.fragment),Ht=c(),J=o("p"),Ae=s("And that\u2019s it - the model is now optimized and ready for inference! As you can see, the process is similar in each case:"),Pt=c(),g=o("ol"),x=o("li"),Re=s("Define the optimization / quantization strategies via an "),gt=o("code"),De=s("OptimizationConfig"),Qe=s(" / "),_t=o("code"),He=s("QuantizationConfig"),Pe=s(" object"),Fe=c(),y=o("li"),Me=s("Instantiate a "),zt=o("code"),Ne=s("ORTQuantizer"),Ie=s(" or "),jt=o("code"),Le=s("ORTOptimizer"),Se=s(" class"),Xe=c(),M=o("li"),Be=s("Apply the "),qt=o("code"),Ge=s("export()"),Je=s(" method"),Ue=c(),bt=o("li"),Ke=s("Run inference"),Ft=c(),E=o("p"),Ve=s("Check out the "),N=o("a"),xt=o("code"),We=s("examples"),Ye=s(" directory for more sophisticated usage."),Mt=c(),U=o("p"),Ze=s("Happy optimising \u{1F917}!"),this.h()},l(t){const p=Da('[data-svelte="svelte-1phssyn"]',document.head);q=i(p,"META",{name:!0,content:!0}),p.forEach(a),yt=m(t),b=i(t,"H1",{class:!0});var It=l(b);v=i(It,"A",{id:!0,class:!0,href:!0});var ea=l(v);Y=i(ea,"SPAN",{});var aa=l(Y);L(T.$$.fragment,aa),aa.forEach(a),ea.forEach(a),Gt=m(It),Z=i(It,"SPAN",{});var sa=l(Z);Jt=n(sa,"Quickstart"),sa.forEach(a),It.forEach(a),vt=m(t),u=i(t,"P",{});var _=l(u);Ut=n(_,"At its core, \u{1F917} Optimum uses "),tt=i(_,"EM",{});var na=l(tt);Kt=n(na,"configuration objects"),na.forEach(a),Vt=n(_," to define parameters for optimization on different accelerators. These objects are then used to instantiate dedicated "),et=i(_,"EM",{});var oa=l(et);Wt=n(oa,"optimizers"),oa.forEach(a),Yt=n(_,", "),at=i(_,"EM",{});var ia=l(at);Zt=n(ia,"quantizers"),ia.forEach(a),te=n(_,", and "),st=i(_,"EM",{});var la=l(st);ee=n(la,"pruners"),la.forEach(a),ae=n(_,". For example, here\u2019s how you can apply dynamic quantization with ONNX Runtime:"),_.forEach(a),wt=m(t),L(A.$$.fragment,t),kt=m(t),h=i(t,"P",{});var z=l(h);se=n(z,"In this example, we\u2019ve quantized a model from the Hugging Face Hub, but it could also be a path to a local model directory. The "),nt=i(z,"CODE",{});var pa=l(nt);ne=n(pa,"feature"),pa.forEach(a),oe=n(z," argument in the "),ot=i(z,"CODE",{});var ra=l(ot);ie=n(ra,"from_pretrained()"),ra.forEach(a),le=n(z," method corresponds to the type of task that we wish to quantize the model for. The result from applying the "),it=i(z,"CODE",{});var ca=l(it);pe=n(ca,"export()"),ca.forEach(a),re=n(z," method is a "),lt=i(z,"CODE",{});var ma=l(lt);ce=n(ma,"model-quantized.onnx"),ma.forEach(a),me=n(z," file that can be used to run inference. Here\u2019s an example of how to load an ONNX Runtime model and generate predictions with it:"),z.forEach(a),Et=m(t),L(R.$$.fragment,t),$t=m(t),d=i(t,"P",{});var $=l(d);ue=n($,"Similarly, you can apply static quantization by simply setting "),pt=i($,"CODE",{});var ua=l(pt);he=n(ua,"is_static"),ua.forEach(a),de=n($," to "),rt=i($,"CODE",{});var ha=l(rt);fe=n(ha,"True"),ha.forEach(a),ge=n($," when instantiating the "),ct=i($,"CODE",{});var da=l(ct);_e=n(da,"QuantizationConfig"),da.forEach(a),ze=n($," object:"),$.forEach(a),Ot=m(t),L(D.$$.fragment,t),Ct=m(t),f=i(t,"P",{});var O=l(f);je=n(O,"Static quantization relies on feeding batches of data through the model to estimate the activation quantization parameters ahead of inference time. To support this, \u{1F917} Optimum allows you to provide a "),mt=i(O,"EM",{});var fa=l(mt);qe=n(fa,"calibration dataset"),fa.forEach(a),be=n(O,". The calibration dataset can be a simple "),ut=i(O,"CODE",{});var ga=l(ut);xe=n(ga,"Dataset"),ga.forEach(a),ye=n(O," object from the \u{1F917} Datasets library, or any dataset that\u2019s hosted on the Hugging Face Hub. For this example, we\u2019ll pick the "),Q=i(O,"A",{href:!0,rel:!0});var _a=l(Q);ht=i(_a,"CODE",{});var za=l(ht);ve=n(za,"sst2"),za.forEach(a),_a.forEach(a),we=n(O," dataset that the model was originally trained on:"),O.forEach(a),Tt=m(t),L(H.$$.fragment,t),At=m(t),w=i(t,"P",{});var Lt=l(w);ke=n(Lt,"As a final example, let\u2019s take a look at applying "),dt=i(Lt,"EM",{});var ja=l(dt);Ee=n(ja,"graph optimizations"),ja.forEach(a),$e=n(Lt," techniques such as operator fusion and constant folding. As before, we load a configuration object, but this time by setting the optimization level instead of the quantization approach:"),Lt.forEach(a),Rt=m(t),L(P.$$.fragment,t),Dt=m(t),k=i(t,"P",{});var St=l(k);Oe=n(St,"Next, we load an "),ft=i(St,"EM",{});var qa=l(ft);Ce=n(qa,"optimizer"),qa.forEach(a),Te=n(St," to apply these optimisations to our model:"),St.forEach(a),Qt=m(t),L(F.$$.fragment,t),Ht=m(t),J=i(t,"P",{});var ba=l(J);Ae=n(ba,"And that\u2019s it - the model is now optimized and ready for inference! As you can see, the process is similar in each case:"),ba.forEach(a),Pt=m(t),g=i(t,"OL",{});var C=l(g);x=i(C,"LI",{});var K=l(x);Re=n(K,"Define the optimization / quantization strategies via an "),gt=i(K,"CODE",{});var xa=l(gt);De=n(xa,"OptimizationConfig"),xa.forEach(a),Qe=n(K," / "),_t=i(K,"CODE",{});var ya=l(_t);He=n(ya,"QuantizationConfig"),ya.forEach(a),Pe=n(K," object"),K.forEach(a),Fe=m(C),y=i(C,"LI",{});var V=l(y);Me=n(V,"Instantiate a "),zt=i(V,"CODE",{});var va=l(zt);Ne=n(va,"ORTQuantizer"),va.forEach(a),Ie=n(V," or "),jt=i(V,"CODE",{});var wa=l(jt);Le=n(wa,"ORTOptimizer"),wa.forEach(a),Se=n(V," class"),V.forEach(a),Xe=m(C),M=i(C,"LI",{});var Xt=l(M);Be=n(Xt,"Apply the "),qt=i(Xt,"CODE",{});var ka=l(qt);Ge=n(ka,"export()"),ka.forEach(a),Je=n(Xt," method"),Xt.forEach(a),Ue=m(C),bt=i(C,"LI",{});var Ea=l(bt);Ke=n(Ea,"Run inference"),Ea.forEach(a),C.forEach(a),Ft=m(t),E=i(t,"P",{});var Bt=l(E);Ve=n(Bt,"Check out the "),N=i(Bt,"A",{href:!0,rel:!0});var $a=l(N);xt=i($a,"CODE",{});var Oa=l(xt);We=n(Oa,"examples"),Oa.forEach(a),$a.forEach(a),Ye=n(Bt," directory for more sophisticated usage."),Bt.forEach(a),Mt=m(t),U=i(t,"P",{});var Ca=l(U);Ze=n(Ca,"Happy optimising \u{1F917}!"),Ca.forEach(a),this.h()},h(){j(q,"name","hf:doc:metadata"),j(q,"content",JSON.stringify(Ma)),j(v,"id","quickstart"),j(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(v,"href","#quickstart"),j(b,"class","relative group"),j(Q,"href","https://huggingface.co/datasets/glue/viewer/sst2/test"),j(Q,"rel","nofollow"),j(N,"href","https://github.com/huggingface/optimum/tree/main/examples"),j(N,"rel","nofollow")},m(t,p){e(document.head,q),r(t,yt,p),r(t,b,p),e(b,v),e(v,Y),S(T,Y,null),e(b,Gt),e(b,Z),e(Z,Jt),r(t,vt,p),r(t,u,p),e(u,Ut),e(u,tt),e(tt,Kt),e(u,Vt),e(u,et),e(et,Wt),e(u,Yt),e(u,at),e(at,Zt),e(u,te),e(u,st),e(st,ee),e(u,ae),r(t,wt,p),S(A,t,p),r(t,kt,p),r(t,h,p),e(h,se),e(h,nt),e(nt,ne),e(h,oe),e(h,ot),e(ot,ie),e(h,le),e(h,it),e(it,pe),e(h,re),e(h,lt),e(lt,ce),e(h,me),r(t,Et,p),S(R,t,p),r(t,$t,p),r(t,d,p),e(d,ue),e(d,pt),e(pt,he),e(d,de),e(d,rt),e(rt,fe),e(d,ge),e(d,ct),e(ct,_e),e(d,ze),r(t,Ot,p),S(D,t,p),r(t,Ct,p),r(t,f,p),e(f,je),e(f,mt),e(mt,qe),e(f,be),e(f,ut),e(ut,xe),e(f,ye),e(f,Q),e(Q,ht),e(ht,ve),e(f,we),r(t,Tt,p),S(H,t,p),r(t,At,p),r(t,w,p),e(w,ke),e(w,dt),e(dt,Ee),e(w,$e),r(t,Rt,p),S(P,t,p),r(t,Dt,p),r(t,k,p),e(k,Oe),e(k,ft),e(ft,Ce),e(k,Te),r(t,Qt,p),S(F,t,p),r(t,Ht,p),r(t,J,p),e(J,Ae),r(t,Pt,p),r(t,g,p),e(g,x),e(x,Re),e(x,gt),e(gt,De),e(x,Qe),e(x,_t),e(_t,He),e(x,Pe),e(g,Fe),e(g,y),e(y,Me),e(y,zt),e(zt,Ne),e(y,Ie),e(y,jt),e(jt,Le),e(y,Se),e(g,Xe),e(g,M),e(M,Be),e(M,qt),e(qt,Ge),e(M,Je),e(g,Ue),e(g,bt),e(bt,Ke),r(t,Ft,p),r(t,E,p),e(E,Ve),e(E,N),e(N,xt),e(xt,We),e(E,Ye),r(t,Mt,p),r(t,U,p),e(U,Ze),Nt=!0},p:Qa,i(t){Nt||(X(T.$$.fragment,t),X(A.$$.fragment,t),X(R.$$.fragment,t),X(D.$$.fragment,t),X(H.$$.fragment,t),X(P.$$.fragment,t),X(F.$$.fragment,t),Nt=!0)},o(t){B(T.$$.fragment,t),B(A.$$.fragment,t),B(R.$$.fragment,t),B(D.$$.fragment,t),B(H.$$.fragment,t),B(P.$$.fragment,t),B(F.$$.fragment,t),Nt=!1},d(t){a(q),t&&a(yt),t&&a(b),G(T),t&&a(vt),t&&a(u),t&&a(wt),G(A,t),t&&a(kt),t&&a(h),t&&a(Et),G(R,t),t&&a($t),t&&a(d),t&&a(Ot),G(D,t),t&&a(Ct),t&&a(f),t&&a(Tt),G(H,t),t&&a(At),t&&a(w),t&&a(Rt),G(P,t),t&&a(Dt),t&&a(k),t&&a(Qt),G(F,t),t&&a(Ht),t&&a(J),t&&a(Pt),t&&a(g),t&&a(Ft),t&&a(E),t&&a(Mt),t&&a(U)}}}const Ma={local:"quickstart",title:"Quickstart"};function Na(ta){return Ha(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Xa extends Ta{constructor(q){super();Aa(this,q,Na,Fa,Ra,{})}}export{Xa as default,Ma as metadata};
