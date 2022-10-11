import{S as Pa,i as Da,s as Ia,e as n,k as u,w as f,t as l,M as Ba,c as s,d as t,m as c,a as o,x as h,h as r,b as m,G as a,g as p,y as g,L as Ha,q as _,o as q,B as z,v as Ua}from"../../../chunks/vendor-hf-doc-builder.js";import{I as Ce}from"../../../chunks/IconCopyLink-hf-doc-builder.js";import{C as ae}from"../../../chunks/CodeBlock-hf-doc-builder.js";function Ga(sa){let w,Se,O,k,me,N,mt,ue,ut,Ae,v,ct,ce,dt,ft,M,ht,gt,Ne,T,E,de,F,_t,ne,qt,fe,zt,Me,y,vt,he,yt,jt,ge,$t,wt,Fe,se,L,Ot,_e,Tt,bt,Le,X,Xe,P,qe,xt,Pe,D,De,b,R,ze,I,Qt,ve,kt,Ie,j,Et,ye,Rt,Ct,B,St,At,Be,H,He,x,C,je,U,Nt,$e,Mt,Ue,$,Ft,we,Lt,Xt,G,Pt,Dt,Ge,J,Je,Q,S,Oe,K,It,Te,Bt,Ke,d,Ht,be,Ut,Gt,xe,Jt,Kt,Qe,Vt,Wt,Ve,oe,V,Yt,ke,Zt,ea,We,W,Ye,Y,Ee,ta,Ze,Z,et,ee,Re,aa,tt,te,at;return N=new Ce({}),F=new Ce({}),X=new ae({props:{code:`from optimum.onnxruntime import ORTQuantizer, ORTModelForSequenceClassification

ort_model = ORTModelForSequenceClassification.from_pretrained("optimum/distilbert-base-uncased-finetuned-sst-2-english")

quantizer = ORTQuantizer.from_pretrained(ort_model)

...

quantizer.quantize(...)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTQuantizer, ORTModelForSequenceClassification

<span class="hljs-comment"># Loading ONNX Model from the Hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ort_model = ORTModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;optimum/distilbert-base-uncased-finetuned-sst-2-english&quot;</span>)

<span class="hljs-comment"># Create a quantizer from a ORTModelForXXX</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer = ORTQuantizer.from_pretrained(ort_model)

<span class="hljs-comment"># Configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>...

<span class="hljs-comment"># Quantize the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.quantize(...)`}}),D=new ae({props:{code:`from optimum.onnxruntime import ORTQuantizer

quantizer = ORTQuantizer.from_pretrained("path/to/model")

...

quantizer.quantize(...)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTQuantizer

<span class="hljs-comment"># This assumes a model.onnx exists in path/to/model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer = ORTQuantizer.from_pretrained(<span class="hljs-string">&quot;path/to/model&quot;</span>)

<span class="hljs-comment"># Configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>...

<span class="hljs-comment"># Quantize the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer.quantize(...)`}}),I=new Ce({}),H=new ae({props:{code:`from optimum.onnxruntime import ORTQuantizer, ORTModelForSequenceClassification
from optimum.onnxruntime.configuration import AutoQuantizationConfig

model_id = "distilbert-base-uncased-finetuned-sst-2-english"
onnx_model = ORTModelForSequenceClassification.from_pretrained(model_id, from_transformers=True)

quantizer = ORTQuantizer.from_pretrained(onnx_model)

dqconfig = AutoQuantizationConfig.avx512_vnni(is_static=False, per_channel=False)

model_quantized_path = quantizer.quantize(`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTQuantizer, ORTModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> AutoQuantizationConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model_id = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
<span class="hljs-comment"># Load PyTorch model and convert to ONNX</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_model = ORTModelForSequenceClassification.from_pretrained(model_id, from_transformers=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Create quantizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer = ORTQuantizer.from_pretrained(onnx_model)

<span class="hljs-comment"># Define the quantization strategy by creating the appropriate configuration </span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dqconfig = AutoQuantizationConfig.avx512_vnni(is_static=<span class="hljs-literal">False</span>, per_channel=<span class="hljs-literal">False</span>)

<span class="hljs-comment"># Quantize the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_quantized_path = quantizer.quantize(
    save_dir=<span class="hljs-string">&quot;path/to/output/model&quot;</span>,
    quantization_config=dqconfig,
)`}}),U=new Ce({}),J=new ae({props:{code:`from functools import partial
from transformers import AutoTokenizer
from optimum.onnxruntime import ORTQuantizer, ORTModelForSequenceClassification
from optimum.onnxruntime.configuration import AutoQuantizationConfig, AutoCalibrationConfig

model_id = "distilbert-base-uncased-finetuned-sst-2-english"

onnx_model = ORTModelForSequenceClassification.from_pretrained(model_id, from_transformers=True)
tokenizer = AutoTokenizer.from_pretrained(model_id)
quantizer = ORTQuantizer.from_pretrained(onnx_model)
qconfig = AutoQuantizationConfig.arm64(is_static=True, per_channel=False)

def preprocess_fn(ex, tokenizer):

calibration_dataset = quantizer.get_calibration_dataset(
calibration_config = AutoCalibrationConfig.minmax(calibration_dataset)

ranges = quantizer.fit(

model_quantized_path = quantizer.quantize(`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> functools <span class="hljs-keyword">import</span> partial
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTQuantizer, ORTModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> AutoQuantizationConfig, AutoCalibrationConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model_id = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>

<span class="hljs-comment"># Load PyTorch model and convert to ONNX and create Quantizer and setup config</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_model = ORTModelForSequenceClassification.from_pretrained(model_id, from_transformers=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_id)
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer = ORTQuantizer.from_pretrained(onnx_model)
<span class="hljs-meta">&gt;&gt;&gt; </span>qconfig = AutoQuantizationConfig.arm64(is_static=<span class="hljs-literal">True</span>, per_channel=<span class="hljs-literal">False</span>)

<span class="hljs-comment"># Create the calibration dataset</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">def</span> <span class="hljs-title function_">preprocess_fn</span>(<span class="hljs-params">ex, tokenizer</span>):
    <span class="hljs-keyword">return</span> tokenizer(ex[<span class="hljs-string">&quot;sentence&quot;</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>calibration_dataset = quantizer.get_calibration_dataset(
    <span class="hljs-string">&quot;glue&quot;</span>,
    dataset_config_name=<span class="hljs-string">&quot;sst2&quot;</span>,
    preprocess_function=partial(preprocess_fn, tokenizer=tokenizer),
    num_samples=<span class="hljs-number">50</span>,
    dataset_split=<span class="hljs-string">&quot;train&quot;</span>,
)
<span class="hljs-comment"># Create the calibration configuration containing the parameters related to calibration.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>calibration_config = AutoCalibrationConfig.minmax(calibration_dataset)

<span class="hljs-comment"># Perform the calibration step: computes the activations quantization ranges</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>ranges = quantizer.fit(
    dataset=calibration_dataset,
    calibration_config=calibration_config,
    operators_to_quantize=qconfig.operators_to_quantize,
)

<span class="hljs-comment"># Apply static quantization on the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_quantized_path = quantizer.quantize(
    save_dir=<span class="hljs-string">&quot;path/to/output/model&quot;</span>,
    calibration_tensors_range=ranges,
    quantization_config=qconfig,
)`}}),K=new Ce({}),W=new ae({props:{code:`from optimum.onnxruntime import ORTQuantizer, ORTModelForSeq2SeqLM
from optimum.onnxruntime.configuration import AutoQuantizationConfig

model_id = "optimum/t5-small"
onnx_model = ORTModelForSeq2SeqLM.from_pretrained(model_id)
model_dir = onnx_model.model_save_dir`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTQuantizer, ORTModelForSeq2SeqLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> AutoQuantizationConfig

<span class="hljs-comment"># load Seq2Seq model and set model file directory</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model_id = <span class="hljs-string">&quot;optimum/t5-small&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>onnx_model = ORTModelForSeq2SeqLM.from_pretrained(model_id)
<span class="hljs-meta">&gt;&gt;&gt; </span>model_dir = onnx_model.model_save_dir`}}),Z=new ae({props:{code:`encoder_quantizer = ORTQuantizer.from_pretrained(model_dir, file_name="encoder_model.onnx")

decoder_quantizer = ORTQuantizer.from_pretrained(model_dir, file_name="decoder_model.onnx")

decoder_wp_quantizer = ORTQuantizer.from_pretrained(model_dir, file_name="decoder_with_past_model.onnx")

quantizer = [encoder_quantizer, decoder_quantizer, decoder_wp_quantizer]`,highlighted:`<span class="hljs-comment"># Create encoder quantizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoder_quantizer = ORTQuantizer.from_pretrained(model_dir, file_name=<span class="hljs-string">&quot;encoder_model.onnx&quot;</span>)

<span class="hljs-comment"># Create decoder quantizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_quantizer = ORTQuantizer.from_pretrained(model_dir, file_name=<span class="hljs-string">&quot;decoder_model.onnx&quot;</span>)

<span class="hljs-comment"># Create decoder with past key values quantizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>decoder_wp_quantizer = ORTQuantizer.from_pretrained(model_dir, file_name=<span class="hljs-string">&quot;decoder_with_past_model.onnx&quot;</span>)

<span class="hljs-comment"># Create Quantizer list</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>quantizer = [encoder_quantizer, decoder_quantizer, decoder_wp_quantizer]`}}),te=new ae({props:{code:`dqconfig = AutoQuantizationConfig.avx512_vnni(is_static=False, per_channel=False)

[q.quantize(save_dir=".",quantization_config=dqconfig) for q in quantizer]`,highlighted:`<span class="hljs-comment"># Define the quantization strategy by creating the appropriate configuration </span>
<span class="hljs-meta">&gt;&gt;&gt; </span>dqconfig = AutoQuantizationConfig.avx512_vnni(is_static=<span class="hljs-literal">False</span>, per_channel=<span class="hljs-literal">False</span>)

<span class="hljs-comment"># Quantize the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>[q.quantize(save_dir=<span class="hljs-string">&quot;.&quot;</span>,quantization_config=dqconfig) <span class="hljs-keyword">for</span> q <span class="hljs-keyword">in</span> quantizer]`}}),{c(){w=n("meta"),Se=u(),O=n("h1"),k=n("a"),me=n("span"),f(N.$$.fragment),mt=u(),ue=n("span"),ut=l("Quantization"),Ae=u(),v=n("p"),ct=l("\u{1F917} Optimum provides an "),ce=n("code"),dt=l("optimum.onnxruntime"),ft=l(" package that enables you to apply quantization on many model hosted on the \u{1F917} hub using the "),M=n("a"),ht=l("ONNX Runtime"),gt=l(" quantization tool."),Ne=u(),T=n("h2"),E=n("a"),de=n("span"),f(F.$$.fragment),_t=u(),ne=n("span"),qt=l("Creating an "),fe=n("code"),zt=l("ORTQuantizer"),Me=u(),y=n("p"),vt=l("The "),he=n("code"),yt=l("ORTQuantizer"),jt=l(" class is used to quantize your ONNX model. The class can be initialized using the "),ge=n("code"),$t=l("from_pretrained()"),wt=l(" method, which supports different checkpoint formats."),Fe=u(),se=n("ol"),L=n("li"),Ot=l("Using an already initialized "),_e=n("code"),Tt=l("ORTModelForXXX"),bt=l(" class."),Le=u(),f(X.$$.fragment),Xe=u(),P=n("ol"),qe=n("li"),xt=l("Using a local ONNX model from a directory."),Pe=u(),f(D.$$.fragment),De=u(),b=n("h2"),R=n("a"),ze=n("span"),f(I.$$.fragment),Qt=u(),ve=n("span"),kt=l("Dynamic Quantization example"),Ie=u(),j=n("p"),Et=l("The "),ye=n("code"),Rt=l("ORTQuantizer"),Ct=l(" class can be used to dynamically quantize your ONNX model. Below you will find an easy end-to-end example on how to dynamically quantize "),B=n("a"),St=l("distilbert-base-uncased-finetuned-sst-2-english"),At=l("."),Be=u(),f(H.$$.fragment),He=u(),x=n("h2"),C=n("a"),je=n("span"),f(U.$$.fragment),Nt=u(),$e=n("span"),Mt=l("Static Quantization example"),Ue=u(),$=n("p"),Ft=l("The "),we=n("code"),Lt=l("ORTQuantizer"),Xt=l(" class can be used to statically quantize your ONNX model. Below you will find an easy end-to-end example on how to statically quantize "),G=n("a"),Pt=l("distilbert-base-uncased-finetuned-sst-2-english"),Dt=l("."),Ge=u(),f(J.$$.fragment),Je=u(),Q=n("h2"),S=n("a"),Oe=n("span"),f(K.$$.fragment),It=u(),Te=n("span"),Bt=l("Quantize Seq2Seq models"),Ke=u(),d=n("p"),Ht=l("The "),be=n("code"),Ut=l("ORTQuantizer"),Gt=l(" currently doesn\u2019t support multi-file models, like "),xe=n("code"),Jt=l("ORTModelForSeq2SeqLM"),Kt=l(". If you want to quantize a Seq2Seq model, you have to quantize each model\u2019s component individually using the "),Qe=n("code"),Vt=l("ORTQuantizer"),Wt=l(" class. Currently, only dynamic quantization is supported for Seq2Seq model."),Ve=u(),oe=n("ol"),V=n("li"),Yt=l("Load seq2seq model as "),ke=n("code"),Zt=l("ORTModelForSeq2SeqLM"),ea=l("."),We=u(),f(W.$$.fragment),Ye=u(),Y=n("ol"),Ee=n("li"),ta=l("Define Quantizer for encoder, decoder and decoder with past keys"),Ze=u(),f(Z.$$.fragment),et=u(),ee=n("ol"),Re=n("li"),aa=l("Quantize all models"),tt=u(),f(te.$$.fragment),this.h()},l(e){const i=Ba('[data-svelte="svelte-1phssyn"]',document.head);w=s(i,"META",{name:!0,content:!0}),i.forEach(t),Se=c(e),O=s(e,"H1",{class:!0});var nt=o(O);k=s(nt,"A",{id:!0,class:!0,href:!0});var oa=o(k);me=s(oa,"SPAN",{});var ia=o(me);h(N.$$.fragment,ia),ia.forEach(t),oa.forEach(t),mt=c(nt),ue=s(nt,"SPAN",{});var la=o(ue);ut=r(la,"Quantization"),la.forEach(t),nt.forEach(t),Ae=c(e),v=s(e,"P",{});var ie=o(v);ct=r(ie,"\u{1F917} Optimum provides an "),ce=s(ie,"CODE",{});var ra=o(ce);dt=r(ra,"optimum.onnxruntime"),ra.forEach(t),ft=r(ie," package that enables you to apply quantization on many model hosted on the \u{1F917} hub using the "),M=s(ie,"A",{href:!0,rel:!0});var pa=o(M);ht=r(pa,"ONNX Runtime"),pa.forEach(t),gt=r(ie," quantization tool."),ie.forEach(t),Ne=c(e),T=s(e,"H2",{class:!0});var st=o(T);E=s(st,"A",{id:!0,class:!0,href:!0});var ma=o(E);de=s(ma,"SPAN",{});var ua=o(de);h(F.$$.fragment,ua),ua.forEach(t),ma.forEach(t),_t=c(st),ne=s(st,"SPAN",{});var na=o(ne);qt=r(na,"Creating an "),fe=s(na,"CODE",{});var ca=o(fe);zt=r(ca,"ORTQuantizer"),ca.forEach(t),na.forEach(t),st.forEach(t),Me=c(e),y=s(e,"P",{});var le=o(y);vt=r(le,"The "),he=s(le,"CODE",{});var da=o(he);yt=r(da,"ORTQuantizer"),da.forEach(t),jt=r(le," class is used to quantize your ONNX model. The class can be initialized using the "),ge=s(le,"CODE",{});var fa=o(ge);$t=r(fa,"from_pretrained()"),fa.forEach(t),wt=r(le," method, which supports different checkpoint formats."),le.forEach(t),Fe=c(e),se=s(e,"OL",{});var ha=o(se);L=s(ha,"LI",{});var ot=o(L);Ot=r(ot,"Using an already initialized "),_e=s(ot,"CODE",{});var ga=o(_e);Tt=r(ga,"ORTModelForXXX"),ga.forEach(t),bt=r(ot," class."),ot.forEach(t),ha.forEach(t),Le=c(e),h(X.$$.fragment,e),Xe=c(e),P=s(e,"OL",{start:!0});var _a=o(P);qe=s(_a,"LI",{});var qa=o(qe);xt=r(qa,"Using a local ONNX model from a directory."),qa.forEach(t),_a.forEach(t),Pe=c(e),h(D.$$.fragment,e),De=c(e),b=s(e,"H2",{class:!0});var it=o(b);R=s(it,"A",{id:!0,class:!0,href:!0});var za=o(R);ze=s(za,"SPAN",{});var va=o(ze);h(I.$$.fragment,va),va.forEach(t),za.forEach(t),Qt=c(it),ve=s(it,"SPAN",{});var ya=o(ve);kt=r(ya,"Dynamic Quantization example"),ya.forEach(t),it.forEach(t),Ie=c(e),j=s(e,"P",{});var re=o(j);Et=r(re,"The "),ye=s(re,"CODE",{});var ja=o(ye);Rt=r(ja,"ORTQuantizer"),ja.forEach(t),Ct=r(re," class can be used to dynamically quantize your ONNX model. Below you will find an easy end-to-end example on how to dynamically quantize "),B=s(re,"A",{href:!0,rel:!0});var $a=o(B);St=r($a,"distilbert-base-uncased-finetuned-sst-2-english"),$a.forEach(t),At=r(re,"."),re.forEach(t),Be=c(e),h(H.$$.fragment,e),He=c(e),x=s(e,"H2",{class:!0});var lt=o(x);C=s(lt,"A",{id:!0,class:!0,href:!0});var wa=o(C);je=s(wa,"SPAN",{});var Oa=o(je);h(U.$$.fragment,Oa),Oa.forEach(t),wa.forEach(t),Nt=c(lt),$e=s(lt,"SPAN",{});var Ta=o($e);Mt=r(Ta,"Static Quantization example"),Ta.forEach(t),lt.forEach(t),Ue=c(e),$=s(e,"P",{});var pe=o($);Ft=r(pe,"The "),we=s(pe,"CODE",{});var ba=o(we);Lt=r(ba,"ORTQuantizer"),ba.forEach(t),Xt=r(pe," class can be used to statically quantize your ONNX model. Below you will find an easy end-to-end example on how to statically quantize "),G=s(pe,"A",{href:!0,rel:!0});var xa=o(G);Pt=r(xa,"distilbert-base-uncased-finetuned-sst-2-english"),xa.forEach(t),Dt=r(pe,"."),pe.forEach(t),Ge=c(e),h(J.$$.fragment,e),Je=c(e),Q=s(e,"H2",{class:!0});var rt=o(Q);S=s(rt,"A",{id:!0,class:!0,href:!0});var Qa=o(S);Oe=s(Qa,"SPAN",{});var ka=o(Oe);h(K.$$.fragment,ka),ka.forEach(t),Qa.forEach(t),It=c(rt),Te=s(rt,"SPAN",{});var Ea=o(Te);Bt=r(Ea,"Quantize Seq2Seq models"),Ea.forEach(t),rt.forEach(t),Ke=c(e),d=s(e,"P",{});var A=o(d);Ht=r(A,"The "),be=s(A,"CODE",{});var Ra=o(be);Ut=r(Ra,"ORTQuantizer"),Ra.forEach(t),Gt=r(A," currently doesn\u2019t support multi-file models, like "),xe=s(A,"CODE",{});var Ca=o(xe);Jt=r(Ca,"ORTModelForSeq2SeqLM"),Ca.forEach(t),Kt=r(A,". If you want to quantize a Seq2Seq model, you have to quantize each model\u2019s component individually using the "),Qe=s(A,"CODE",{});var Sa=o(Qe);Vt=r(Sa,"ORTQuantizer"),Sa.forEach(t),Wt=r(A," class. Currently, only dynamic quantization is supported for Seq2Seq model."),A.forEach(t),Ve=c(e),oe=s(e,"OL",{});var Aa=o(oe);V=s(Aa,"LI",{});var pt=o(V);Yt=r(pt,"Load seq2seq model as "),ke=s(pt,"CODE",{});var Na=o(ke);Zt=r(Na,"ORTModelForSeq2SeqLM"),Na.forEach(t),ea=r(pt,"."),pt.forEach(t),Aa.forEach(t),We=c(e),h(W.$$.fragment,e),Ye=c(e),Y=s(e,"OL",{start:!0});var Ma=o(Y);Ee=s(Ma,"LI",{});var Fa=o(Ee);ta=r(Fa,"Define Quantizer for encoder, decoder and decoder with past keys"),Fa.forEach(t),Ma.forEach(t),Ze=c(e),h(Z.$$.fragment,e),et=c(e),ee=s(e,"OL",{start:!0});var La=o(ee);Re=s(La,"LI",{});var Xa=o(Re);aa=r(Xa,"Quantize all models"),Xa.forEach(t),La.forEach(t),tt=c(e),h(te.$$.fragment,e),this.h()},h(){m(w,"name","hf:doc:metadata"),m(w,"content",JSON.stringify(Ja)),m(k,"id","quantization"),m(k,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(k,"href","#quantization"),m(O,"class","relative group"),m(M,"href","https://github.com/microsoft/onnxruntime/blob/master/onnxruntime/python/tools/quantization/README.md"),m(M,"rel","nofollow"),m(E,"id","creating-an-ortquantizer"),m(E,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(E,"href","#creating-an-ortquantizer"),m(T,"class","relative group"),m(P,"start","2"),m(R,"id","dynamic-quantization-example"),m(R,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(R,"href","#dynamic-quantization-example"),m(b,"class","relative group"),m(B,"href","https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english"),m(B,"rel","nofollow"),m(C,"id","static-quantization-example"),m(C,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(C,"href","#static-quantization-example"),m(x,"class","relative group"),m(G,"href","https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english"),m(G,"rel","nofollow"),m(S,"id","quantize-seq2seq-models"),m(S,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(S,"href","#quantize-seq2seq-models"),m(Q,"class","relative group"),m(Y,"start","2"),m(ee,"start","3")},m(e,i){a(document.head,w),p(e,Se,i),p(e,O,i),a(O,k),a(k,me),g(N,me,null),a(O,mt),a(O,ue),a(ue,ut),p(e,Ae,i),p(e,v,i),a(v,ct),a(v,ce),a(ce,dt),a(v,ft),a(v,M),a(M,ht),a(v,gt),p(e,Ne,i),p(e,T,i),a(T,E),a(E,de),g(F,de,null),a(T,_t),a(T,ne),a(ne,qt),a(ne,fe),a(fe,zt),p(e,Me,i),p(e,y,i),a(y,vt),a(y,he),a(he,yt),a(y,jt),a(y,ge),a(ge,$t),a(y,wt),p(e,Fe,i),p(e,se,i),a(se,L),a(L,Ot),a(L,_e),a(_e,Tt),a(L,bt),p(e,Le,i),g(X,e,i),p(e,Xe,i),p(e,P,i),a(P,qe),a(qe,xt),p(e,Pe,i),g(D,e,i),p(e,De,i),p(e,b,i),a(b,R),a(R,ze),g(I,ze,null),a(b,Qt),a(b,ve),a(ve,kt),p(e,Ie,i),p(e,j,i),a(j,Et),a(j,ye),a(ye,Rt),a(j,Ct),a(j,B),a(B,St),a(j,At),p(e,Be,i),g(H,e,i),p(e,He,i),p(e,x,i),a(x,C),a(C,je),g(U,je,null),a(x,Nt),a(x,$e),a($e,Mt),p(e,Ue,i),p(e,$,i),a($,Ft),a($,we),a(we,Lt),a($,Xt),a($,G),a(G,Pt),a($,Dt),p(e,Ge,i),g(J,e,i),p(e,Je,i),p(e,Q,i),a(Q,S),a(S,Oe),g(K,Oe,null),a(Q,It),a(Q,Te),a(Te,Bt),p(e,Ke,i),p(e,d,i),a(d,Ht),a(d,be),a(be,Ut),a(d,Gt),a(d,xe),a(xe,Jt),a(d,Kt),a(d,Qe),a(Qe,Vt),a(d,Wt),p(e,Ve,i),p(e,oe,i),a(oe,V),a(V,Yt),a(V,ke),a(ke,Zt),a(V,ea),p(e,We,i),g(W,e,i),p(e,Ye,i),p(e,Y,i),a(Y,Ee),a(Ee,ta),p(e,Ze,i),g(Z,e,i),p(e,et,i),p(e,ee,i),a(ee,Re),a(Re,aa),p(e,tt,i),g(te,e,i),at=!0},p:Ha,i(e){at||(_(N.$$.fragment,e),_(F.$$.fragment,e),_(X.$$.fragment,e),_(D.$$.fragment,e),_(I.$$.fragment,e),_(H.$$.fragment,e),_(U.$$.fragment,e),_(J.$$.fragment,e),_(K.$$.fragment,e),_(W.$$.fragment,e),_(Z.$$.fragment,e),_(te.$$.fragment,e),at=!0)},o(e){q(N.$$.fragment,e),q(F.$$.fragment,e),q(X.$$.fragment,e),q(D.$$.fragment,e),q(I.$$.fragment,e),q(H.$$.fragment,e),q(U.$$.fragment,e),q(J.$$.fragment,e),q(K.$$.fragment,e),q(W.$$.fragment,e),q(Z.$$.fragment,e),q(te.$$.fragment,e),at=!1},d(e){t(w),e&&t(Se),e&&t(O),z(N),e&&t(Ae),e&&t(v),e&&t(Ne),e&&t(T),z(F),e&&t(Me),e&&t(y),e&&t(Fe),e&&t(se),e&&t(Le),z(X,e),e&&t(Xe),e&&t(P),e&&t(Pe),z(D,e),e&&t(De),e&&t(b),z(I),e&&t(Ie),e&&t(j),e&&t(Be),z(H,e),e&&t(He),e&&t(x),z(U),e&&t(Ue),e&&t($),e&&t(Ge),z(J,e),e&&t(Je),e&&t(Q),z(K),e&&t(Ke),e&&t(d),e&&t(Ve),e&&t(oe),e&&t(We),z(W,e),e&&t(Ye),e&&t(Y),e&&t(Ze),z(Z,e),e&&t(et),e&&t(ee),e&&t(tt),z(te,e)}}}const Ja={local:"quantization",sections:[{local:"creating-an-ortquantizer",title:"Creating an `ORTQuantizer`"},{local:"dynamic-quantization-example",title:"Dynamic Quantization example "},{local:"static-quantization-example",title:"Static Quantization example "},{local:"quantize-seq2seq-models",title:"Quantize Seq2Seq models"}],title:"Quantization"};function Ka(sa){return Ua(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Za extends Pa{constructor(w){super();Da(this,w,Ka,Ga,Ia,{})}}export{Za as default,Ja as metadata};
