import{S as Te,i as Ae,s as Re,e as o,k as c,w as I,t as s,M as De,c as i,d as e,m,a as l,x as L,h as n,b as j,G as a,g as r,y as S,L as Qe,q as X,o as B,B as G,v as Pe}from"../chunks/vendor-hf-doc-builder.js";import{I as He}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as W}from"../chunks/CodeBlock-hf-doc-builder.js";function Fe(te){let q,yt,b,k,Y,T,Gt,Z,Jt,kt,u,Ut,tt,Kt,Vt,at,Wt,Yt,et,Zt,ta,st,aa,ea,vt,A,wt,h,sa,nt,na,oa,ot,ia,la,it,pa,ra,lt,ca,ma,Et,R,$t,d,ua,pt,ha,da,rt,fa,ga,ct,_a,za,Ot,D,Ct,f,ja,mt,qa,ba,ut,xa,ya,Q,ht,ka,va,Tt,P,At,v,wa,dt,Ea,$a,Rt,H,Dt,w,Oa,ft,Ca,Ta,Qt,F,Pt,J,Aa,Ht,g,x,Ra,gt,Da,Qa,_t,Pa,Ha,Fa,y,Ma,zt,Na,Ia,jt,La,Sa,Xa,M,Ba,qt,Ga,Ja,Ua,bt,Ka,Ft,E,Va,N,xt,Wa,Ya,Mt,U,Za,Nt;return T=new He({}),A=new W({props:{code:`from optimum.onnxruntime import ORTConfig, ORTQuantizer

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
tokenized_ds = ds.map(partial(preprocess_fn, tokenizer=quantizer.tokenizer))
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
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenized_ds = ds.<span class="hljs-built_in">map</span>(partial(preprocess_fn, tokenizer=quantizer.tokenizer))
<span class="hljs-meta">&gt;&gt;&gt; </span>ort_outputs = ort_model.evaluation_loop(tokenized_ds)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Extract logits!</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ort_outputs.predictions`}}),D=new W({props:{code:"qconfig = AutoQuantizationConfig.arm64(is_static=True, per_channel=False)",highlighted:'<span class="hljs-meta">&gt;&gt;&gt; </span>qconfig = AutoQuantizationConfig.arm64(is_static=<span class="hljs-literal">True</span>, per_channel=<span class="hljs-literal">False</span>)'}}),P=new W({props:{code:`from optimum.onnxruntime.configuration import AutoCalibrationConfig

# Create the calibration dataset
calibration_dataset = quantizer.get_calibration_dataset(
    "glue",
    dataset_config_name="sst2",
    preprocess_function=partial(preprocess_fn, tokenizer=quantizer.tokenizer),
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
<span class="hljs-meta">... </span>    preprocess_function=partial(preprocess_fn, tokenizer=quantizer.tokenizer),
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
<span class="hljs-meta">... </span>)`}}),H=new W({props:{code:`from optimum.onnxruntime.configuration import OptimizationConfig

# optimization_config=99 enables all available graph optimisations
optimization_config = OptimizationConfig(optimization_level=99)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> OptimizationConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># optimization_config=99 enables all available graph optimisations</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimization_config = OptimizationConfig(optimization_level=<span class="hljs-number">99</span>)`}}),F=new W({props:{code:`from optimum.onnxruntime import ORTOptimizer

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
<span class="hljs-meta">... </span>)`}}),{c(){q=o("meta"),yt=c(),b=o("h1"),k=o("a"),Y=o("span"),I(T.$$.fragment),Gt=c(),Z=o("span"),Jt=s("Quickstart"),kt=c(),u=o("p"),Ut=s("At its core, \u{1F917} Optimum uses "),tt=o("em"),Kt=s("configuration objects"),Vt=s(" to define parameters for optimization on different accelerators. These objects are then used to instantiate dedicated "),at=o("em"),Wt=s("optimizers"),Yt=s(", "),et=o("em"),Zt=s("quantizers"),ta=s(", and "),st=o("em"),aa=s("pruners"),ea=s(". For example, here\u2019s how you can apply dynamic quantization with ONNX Runtime:"),vt=c(),I(A.$$.fragment),wt=c(),h=o("p"),sa=s("In this example, we\u2019ve quantized a model from the Hugging Face Hub, but it could also be a path to a local model directory. The "),nt=o("code"),na=s("feature"),oa=s(" argument in the "),ot=o("code"),ia=s("from_pretrained()"),la=s(" method corresponds to the type of task that we wish to quantize the model for. The result from applying the "),it=o("code"),pa=s("export()"),ra=s(" method is a "),lt=o("code"),ca=s("model-quantized.onnx"),ma=s(" file that can be used to run inference. Here\u2019s an example of how to load an ONNX Runtime model and generate predictions with it:"),Et=c(),I(R.$$.fragment),$t=c(),d=o("p"),ua=s("Similarly, you can apply static quantization by simply setting "),pt=o("code"),ha=s("is_static"),da=s(" to "),rt=o("code"),fa=s("True"),ga=s(" when instantiating the "),ct=o("code"),_a=s("QuantizationConfig"),za=s(" object:"),Ot=c(),I(D.$$.fragment),Ct=c(),f=o("p"),ja=s("Static quantization relies on feeding batches of data through the model to estimate the activation quantization parameters ahead of inference time. To support this, \u{1F917} Optimum allows you to provide a "),mt=o("em"),qa=s("calibration dataset"),ba=s(". The calibration dataset can be a simple "),ut=o("code"),xa=s("Dataset"),ya=s(" object from the \u{1F917} Datasets library, or any dataset that\u2019s hosted on the Hugging Face Hub. For this example, we\u2019ll pick the "),Q=o("a"),ht=o("code"),ka=s("sst2"),va=s(" dataset that the model was originally trained on:"),Tt=c(),I(P.$$.fragment),At=c(),v=o("p"),wa=s("As a final example, let\u2019s take a look at applying "),dt=o("em"),Ea=s("graph optimizations"),$a=s(" techniques such as operator fusion and constant folding. As before, we load a configuration object, but this time by setting the optimization level instead of the quantization approach:"),Rt=c(),I(H.$$.fragment),Dt=c(),w=o("p"),Oa=s("Next, we load an "),ft=o("em"),Ca=s("optimizer"),Ta=s(" to apply these optimisations to our model:"),Qt=c(),I(F.$$.fragment),Pt=c(),J=o("p"),Aa=s("And that\u2019s it - the model is now optimized and ready for inference! As you can see, the process is similar in each case:"),Ht=c(),g=o("ol"),x=o("li"),Ra=s("Define the optimization / quantization strategies via an "),gt=o("code"),Da=s("OptimizationConfig"),Qa=s(" / "),_t=o("code"),Pa=s("QuantizationConfig"),Ha=s(" object"),Fa=c(),y=o("li"),Ma=s("Instantiate a "),zt=o("code"),Na=s("ORTQuantizer"),Ia=s(" or "),jt=o("code"),La=s("ORTOptimizer"),Sa=s(" class"),Xa=c(),M=o("li"),Ba=s("Apply the "),qt=o("code"),Ga=s("export()"),Ja=s(" method"),Ua=c(),bt=o("li"),Ka=s("Run inference"),Ft=c(),E=o("p"),Va=s("Check out the "),N=o("a"),xt=o("code"),Wa=s("examples"),Ya=s(" directory for more sophisticated usage."),Mt=c(),U=o("p"),Za=s("Happy optimising \u{1F917}!"),this.h()},l(t){const p=De('[data-svelte="svelte-1phssyn"]',document.head);q=i(p,"META",{name:!0,content:!0}),p.forEach(e),yt=m(t),b=i(t,"H1",{class:!0});var It=l(b);k=i(It,"A",{id:!0,class:!0,href:!0});var ae=l(k);Y=i(ae,"SPAN",{});var ee=l(Y);L(T.$$.fragment,ee),ee.forEach(e),ae.forEach(e),Gt=m(It),Z=i(It,"SPAN",{});var se=l(Z);Jt=n(se,"Quickstart"),se.forEach(e),It.forEach(e),kt=m(t),u=i(t,"P",{});var _=l(u);Ut=n(_,"At its core, \u{1F917} Optimum uses "),tt=i(_,"EM",{});var ne=l(tt);Kt=n(ne,"configuration objects"),ne.forEach(e),Vt=n(_," to define parameters for optimization on different accelerators. These objects are then used to instantiate dedicated "),at=i(_,"EM",{});var oe=l(at);Wt=n(oe,"optimizers"),oe.forEach(e),Yt=n(_,", "),et=i(_,"EM",{});var ie=l(et);Zt=n(ie,"quantizers"),ie.forEach(e),ta=n(_,", and "),st=i(_,"EM",{});var le=l(st);aa=n(le,"pruners"),le.forEach(e),ea=n(_,". For example, here\u2019s how you can apply dynamic quantization with ONNX Runtime:"),_.forEach(e),vt=m(t),L(A.$$.fragment,t),wt=m(t),h=i(t,"P",{});var z=l(h);sa=n(z,"In this example, we\u2019ve quantized a model from the Hugging Face Hub, but it could also be a path to a local model directory. The "),nt=i(z,"CODE",{});var pe=l(nt);na=n(pe,"feature"),pe.forEach(e),oa=n(z," argument in the "),ot=i(z,"CODE",{});var re=l(ot);ia=n(re,"from_pretrained()"),re.forEach(e),la=n(z," method corresponds to the type of task that we wish to quantize the model for. The result from applying the "),it=i(z,"CODE",{});var ce=l(it);pa=n(ce,"export()"),ce.forEach(e),ra=n(z," method is a "),lt=i(z,"CODE",{});var me=l(lt);ca=n(me,"model-quantized.onnx"),me.forEach(e),ma=n(z," file that can be used to run inference. Here\u2019s an example of how to load an ONNX Runtime model and generate predictions with it:"),z.forEach(e),Et=m(t),L(R.$$.fragment,t),$t=m(t),d=i(t,"P",{});var $=l(d);ua=n($,"Similarly, you can apply static quantization by simply setting "),pt=i($,"CODE",{});var ue=l(pt);ha=n(ue,"is_static"),ue.forEach(e),da=n($," to "),rt=i($,"CODE",{});var he=l(rt);fa=n(he,"True"),he.forEach(e),ga=n($," when instantiating the "),ct=i($,"CODE",{});var de=l(ct);_a=n(de,"QuantizationConfig"),de.forEach(e),za=n($," object:"),$.forEach(e),Ot=m(t),L(D.$$.fragment,t),Ct=m(t),f=i(t,"P",{});var O=l(f);ja=n(O,"Static quantization relies on feeding batches of data through the model to estimate the activation quantization parameters ahead of inference time. To support this, \u{1F917} Optimum allows you to provide a "),mt=i(O,"EM",{});var fe=l(mt);qa=n(fe,"calibration dataset"),fe.forEach(e),ba=n(O,". The calibration dataset can be a simple "),ut=i(O,"CODE",{});var ge=l(ut);xa=n(ge,"Dataset"),ge.forEach(e),ya=n(O," object from the \u{1F917} Datasets library, or any dataset that\u2019s hosted on the Hugging Face Hub. For this example, we\u2019ll pick the "),Q=i(O,"A",{href:!0,rel:!0});var _e=l(Q);ht=i(_e,"CODE",{});var ze=l(ht);ka=n(ze,"sst2"),ze.forEach(e),_e.forEach(e),va=n(O," dataset that the model was originally trained on:"),O.forEach(e),Tt=m(t),L(P.$$.fragment,t),At=m(t),v=i(t,"P",{});var Lt=l(v);wa=n(Lt,"As a final example, let\u2019s take a look at applying "),dt=i(Lt,"EM",{});var je=l(dt);Ea=n(je,"graph optimizations"),je.forEach(e),$a=n(Lt," techniques such as operator fusion and constant folding. As before, we load a configuration object, but this time by setting the optimization level instead of the quantization approach:"),Lt.forEach(e),Rt=m(t),L(H.$$.fragment,t),Dt=m(t),w=i(t,"P",{});var St=l(w);Oa=n(St,"Next, we load an "),ft=i(St,"EM",{});var qe=l(ft);Ca=n(qe,"optimizer"),qe.forEach(e),Ta=n(St," to apply these optimisations to our model:"),St.forEach(e),Qt=m(t),L(F.$$.fragment,t),Pt=m(t),J=i(t,"P",{});var be=l(J);Aa=n(be,"And that\u2019s it - the model is now optimized and ready for inference! As you can see, the process is similar in each case:"),be.forEach(e),Ht=m(t),g=i(t,"OL",{});var C=l(g);x=i(C,"LI",{});var K=l(x);Ra=n(K,"Define the optimization / quantization strategies via an "),gt=i(K,"CODE",{});var xe=l(gt);Da=n(xe,"OptimizationConfig"),xe.forEach(e),Qa=n(K," / "),_t=i(K,"CODE",{});var ye=l(_t);Pa=n(ye,"QuantizationConfig"),ye.forEach(e),Ha=n(K," object"),K.forEach(e),Fa=m(C),y=i(C,"LI",{});var V=l(y);Ma=n(V,"Instantiate a "),zt=i(V,"CODE",{});var ke=l(zt);Na=n(ke,"ORTQuantizer"),ke.forEach(e),Ia=n(V," or "),jt=i(V,"CODE",{});var ve=l(jt);La=n(ve,"ORTOptimizer"),ve.forEach(e),Sa=n(V," class"),V.forEach(e),Xa=m(C),M=i(C,"LI",{});var Xt=l(M);Ba=n(Xt,"Apply the "),qt=i(Xt,"CODE",{});var we=l(qt);Ga=n(we,"export()"),we.forEach(e),Ja=n(Xt," method"),Xt.forEach(e),Ua=m(C),bt=i(C,"LI",{});var Ee=l(bt);Ka=n(Ee,"Run inference"),Ee.forEach(e),C.forEach(e),Ft=m(t),E=i(t,"P",{});var Bt=l(E);Va=n(Bt,"Check out the "),N=i(Bt,"A",{href:!0,rel:!0});var $e=l(N);xt=i($e,"CODE",{});var Oe=l(xt);Wa=n(Oe,"examples"),Oe.forEach(e),$e.forEach(e),Ya=n(Bt," directory for more sophisticated usage."),Bt.forEach(e),Mt=m(t),U=i(t,"P",{});var Ce=l(U);Za=n(Ce,"Happy optimising \u{1F917}!"),Ce.forEach(e),this.h()},h(){j(q,"name","hf:doc:metadata"),j(q,"content",JSON.stringify(Me)),j(k,"id","quickstart"),j(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),j(k,"href","#quickstart"),j(b,"class","relative group"),j(Q,"href","https://huggingface.co/datasets/glue/viewer/sst2/test"),j(Q,"rel","nofollow"),j(N,"href","https://github.com/huggingface/optimum/tree/main/examples"),j(N,"rel","nofollow")},m(t,p){a(document.head,q),r(t,yt,p),r(t,b,p),a(b,k),a(k,Y),S(T,Y,null),a(b,Gt),a(b,Z),a(Z,Jt),r(t,kt,p),r(t,u,p),a(u,Ut),a(u,tt),a(tt,Kt),a(u,Vt),a(u,at),a(at,Wt),a(u,Yt),a(u,et),a(et,Zt),a(u,ta),a(u,st),a(st,aa),a(u,ea),r(t,vt,p),S(A,t,p),r(t,wt,p),r(t,h,p),a(h,sa),a(h,nt),a(nt,na),a(h,oa),a(h,ot),a(ot,ia),a(h,la),a(h,it),a(it,pa),a(h,ra),a(h,lt),a(lt,ca),a(h,ma),r(t,Et,p),S(R,t,p),r(t,$t,p),r(t,d,p),a(d,ua),a(d,pt),a(pt,ha),a(d,da),a(d,rt),a(rt,fa),a(d,ga),a(d,ct),a(ct,_a),a(d,za),r(t,Ot,p),S(D,t,p),r(t,Ct,p),r(t,f,p),a(f,ja),a(f,mt),a(mt,qa),a(f,ba),a(f,ut),a(ut,xa),a(f,ya),a(f,Q),a(Q,ht),a(ht,ka),a(f,va),r(t,Tt,p),S(P,t,p),r(t,At,p),r(t,v,p),a(v,wa),a(v,dt),a(dt,Ea),a(v,$a),r(t,Rt,p),S(H,t,p),r(t,Dt,p),r(t,w,p),a(w,Oa),a(w,ft),a(ft,Ca),a(w,Ta),r(t,Qt,p),S(F,t,p),r(t,Pt,p),r(t,J,p),a(J,Aa),r(t,Ht,p),r(t,g,p),a(g,x),a(x,Ra),a(x,gt),a(gt,Da),a(x,Qa),a(x,_t),a(_t,Pa),a(x,Ha),a(g,Fa),a(g,y),a(y,Ma),a(y,zt),a(zt,Na),a(y,Ia),a(y,jt),a(jt,La),a(y,Sa),a(g,Xa),a(g,M),a(M,Ba),a(M,qt),a(qt,Ga),a(M,Ja),a(g,Ua),a(g,bt),a(bt,Ka),r(t,Ft,p),r(t,E,p),a(E,Va),a(E,N),a(N,xt),a(xt,Wa),a(E,Ya),r(t,Mt,p),r(t,U,p),a(U,Za),Nt=!0},p:Qe,i(t){Nt||(X(T.$$.fragment,t),X(A.$$.fragment,t),X(R.$$.fragment,t),X(D.$$.fragment,t),X(P.$$.fragment,t),X(H.$$.fragment,t),X(F.$$.fragment,t),Nt=!0)},o(t){B(T.$$.fragment,t),B(A.$$.fragment,t),B(R.$$.fragment,t),B(D.$$.fragment,t),B(P.$$.fragment,t),B(H.$$.fragment,t),B(F.$$.fragment,t),Nt=!1},d(t){e(q),t&&e(yt),t&&e(b),G(T),t&&e(kt),t&&e(u),t&&e(vt),G(A,t),t&&e(wt),t&&e(h),t&&e(Et),G(R,t),t&&e($t),t&&e(d),t&&e(Ot),G(D,t),t&&e(Ct),t&&e(f),t&&e(Tt),G(P,t),t&&e(At),t&&e(v),t&&e(Rt),G(H,t),t&&e(Dt),t&&e(w),t&&e(Qt),G(F,t),t&&e(Pt),t&&e(J),t&&e(Ht),t&&e(g),t&&e(Ft),t&&e(E),t&&e(Mt),t&&e(U)}}}const Me={local:"quickstart",title:"Quickstart"};function Ne(te){return Pe(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Xe extends Te{constructor(q){super();Ae(this,q,Ne,Fe,Re,{})}}export{Xe as default,Me as metadata};
