import{S as Oe,i as ve,s as je,e as i,k as d,w as F,t as r,M as we,c as a,d as e,m as c,a as n,x as X,h as l,b as m,G as s,g as p,y as A,L as ye,q as L,o as P,B as D,v as $e}from"../../../chunks/vendor-hf-doc-builder.js";import{I as Yt}from"../../../chunks/IconCopyLink-hf-doc-builder.js";import{C as yt}from"../../../chunks/CodeBlock-hf-doc-builder.js";function Te(Zt){let u,ot,g,O,G,$,$t,J,Tt,it,f,qt,K,kt,xt,T,bt,Rt,at,_,v,Q,q,Et,B,St,V,Ct,nt,h,Mt,W,Nt,Ft,Y,Xt,At,rt,U,k,Lt,Z,Pt,Dt,lt,x,pt,b,tt,Bt,mt,R,dt,z,j,et,E,Ut,st,Ht,ct,w,It,S,Gt,Jt,ft,C,ht,y,Kt,M,Qt,Vt,ut,N,gt;return $=new Yt({}),q=new Yt({}),x=new yt({props:{code:`from optimum.onnxruntime import ORTOptimizer, ORTModelForSequenceClassification

model = ORTModelForSequenceClassification.from_pretrained("optimum/distilbert-base-uncased-finetuned-sst-2-english")

optimizer = ORTOptimizer.from_pretrained(model)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTOptimizer, ORTModelForSequenceClassification

<span class="hljs-comment"># Loading ONNX Model from the Hub</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;optimum/distilbert-base-uncased-finetuned-sst-2-english&quot;</span>)

<span class="hljs-comment"># Create an optimizer from an ORTModelForXXX</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = ORTOptimizer.from_pretrained(model)`}}),R=new yt({props:{code:`from optimum.onnxruntime import ORTOptimizer

optimizer = ORTOptimizer.from_pretrained("path/to/model")`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTOptimizer

<span class="hljs-comment"># This assumes a model.onnx exists in path/to/model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = ORTOptimizer.from_pretrained(<span class="hljs-string">&quot;path/to/model&quot;</span>)`}}),E=new Yt({}),C=new yt({props:{code:`from optimum.onnxruntime import ORTOptimizer, ORTModelForSequenceClassification
from optimum.onnxruntime.configuration import OptimizationConfig

model_id = "distilbert-base-uncased-finetuned-sst-2-english"
save_dir = "/tmp/outputs"

model = ORTModelForSequenceClassification.from_pretrained(model_id, from_transformers=True)

optimizer = ORTOptimizer.from_pretrained(model)

optimization_config = OptimizationConfig(

optimizer.optimize(save_dir=save_dir, optimization_config=optimization_config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTOptimizer, ORTModelForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> OptimizationConfig

<span class="hljs-meta">&gt;&gt;&gt; </span>model_id = <span class="hljs-string">&quot;distilbert-base-uncased-finetuned-sst-2-english&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>save_dir = <span class="hljs-string">&quot;/tmp/outputs&quot;</span>

<span class="hljs-comment"># Load a PyTorch model and export it to the ONNX format</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSequenceClassification.from_pretrained(model_id, from_transformers=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Create the optimizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = ORTOptimizer.from_pretrained(model)

<span class="hljs-comment"># Define the optimization strategy by creating the appropriate configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimization_config = OptimizationConfig(
    optimization_level=<span class="hljs-number">2</span>,
    optimize_with_onnxruntime_only=<span class="hljs-literal">False</span>,
    optimize_for_gpu=<span class="hljs-literal">False</span>,
)

<span class="hljs-comment"># Optimize the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer.optimize(save_dir=save_dir, optimization_config=optimization_config)`}}),N=new yt({props:{code:`from optimum.onnxruntime import ORTOptimizer, ORTModelForSeq2SeqLM
from optimum.onnxruntime.configuration import OptimizationConfig
from transformers import AutoTokenizer

model_id = "sshleifer/distilbart-cnn-12-6"
save_dir = "/tmp/outputs"

model = ORTModelForSeq2SeqLM.from_pretrained(model_id, from_transformers=True)

optimizer = ORTOptimizer.from_pretrained(model)

optimization_config = OptimizationConfig(

optimizer.optimize(save_dir=save_dir, optimization_config=optimization_config)

optimized_model = ORTModelForSeq2SeqLM.from_pretrained(
tokenizer = AutoTokenizer.from_pretrained(model_id)
tokens = tokenizer("This is a sample input", return_tensors="pt")
outputs = optimized_model.generate(**tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime <span class="hljs-keyword">import</span> ORTOptimizer, ORTModelForSeq2SeqLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> optimum.onnxruntime.configuration <span class="hljs-keyword">import</span> OptimizationConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model_id = <span class="hljs-string">&quot;sshleifer/distilbart-cnn-12-6&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>save_dir = <span class="hljs-string">&quot;/tmp/outputs&quot;</span>

<span class="hljs-comment"># Load a PyTorch model and export it to the ONNX format</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ORTModelForSeq2SeqLM.from_pretrained(model_id, from_transformers=<span class="hljs-literal">True</span>)

<span class="hljs-comment"># Create the optimizer</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = ORTOptimizer.from_pretrained(model)

<span class="hljs-comment"># Define the optimization strategy by creating the appropriate configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimization_config = OptimizationConfig(
    optimization_level=<span class="hljs-number">2</span>,
    optimize_with_onnxruntime_only=<span class="hljs-literal">False</span>,
    optimize_for_gpu=<span class="hljs-literal">False</span>,
)

<span class="hljs-comment"># Optimize the model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer.optimize(save_dir=save_dir, optimization_config=optimization_config)

<span class="hljs-comment"># Load the resulting optimized model</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>optimized_model = ORTModelForSeq2SeqLM.from_pretrained(
    save_dir,
    encoder_file_name=<span class="hljs-string">&quot;encoder_model_optimized.onnx&quot;</span>,
    decoder_file_name=<span class="hljs-string">&quot;decoder_model_optimized.onnx&quot;</span>,
    decoder_file_with_past_name=<span class="hljs-string">&quot;decoder_with_past_model_optimized.onnx&quot;</span>,
)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(model_id)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokens = tokenizer(<span class="hljs-string">&quot;This is a sample input&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = optimized_model.generate(**tokens)`}}),{c(){u=i("meta"),ot=d(),g=i("h1"),O=i("a"),G=i("span"),F($.$$.fragment),$t=d(),J=i("span"),Tt=r("Optimization"),it=d(),f=i("p"),qt=r("\u{1F917} Optimum provides an "),K=i("code"),kt=r("optimum.onnxruntime"),xt=r(" package that enables you to apply graph optimization on many model hosted on the \u{1F917} hub using the "),T=i("a"),bt=r("ONNX Runtime"),Rt=r(" model optimization tool."),at=d(),_=i("h2"),v=i("a"),Q=i("span"),F(q.$$.fragment),Et=d(),B=i("span"),St=r("Creating an "),V=i("code"),Ct=r("ORTOptimizer"),nt=d(),h=i("p"),Mt=r("The "),W=i("code"),Nt=r("ORTOptimizer"),Ft=r(" class is used to optimize your ONNX model. The class can be initialized using the "),Y=i("code"),Xt=r("from_pretrained()"),At=r(" method, which supports different checkpoint formats."),rt=d(),U=i("ol"),k=i("li"),Lt=r("Using an already initialized "),Z=i("code"),Pt=r("ORTModelForXXX"),Dt=r(" class."),lt=d(),F(x.$$.fragment),pt=d(),b=i("ol"),tt=i("li"),Bt=r("Using a local ONNX model from a directory."),mt=d(),F(R.$$.fragment),dt=d(),z=i("h2"),j=i("a"),et=i("span"),F(E.$$.fragment),Ut=d(),st=i("span"),Ht=r("Optimization examples"),ct=d(),w=i("p"),It=r("Below you will find an easy end-to-end example on how to optimize "),S=i("a"),Gt=r("distilbert-base-uncased-finetuned-sst-2-english"),Jt=r("."),ft=d(),F(C.$$.fragment),ht=d(),y=i("p"),Kt=r("Below you will find an easy end-to-end example on how to optimize a Seq2Seq model "),M=i("a"),Qt=r("sshleifer/distilbart-cnn-12-6\u201D"),Vt=r("."),ut=d(),F(N.$$.fragment),this.h()},l(t){const o=we('[data-svelte="svelte-1phssyn"]',document.head);u=a(o,"META",{name:!0,content:!0}),o.forEach(e),ot=c(t),g=a(t,"H1",{class:!0});var _t=n(g);O=a(_t,"A",{id:!0,class:!0,href:!0});var te=n(O);G=a(te,"SPAN",{});var ee=n(G);X($.$$.fragment,ee),ee.forEach(e),te.forEach(e),$t=c(_t),J=a(_t,"SPAN",{});var se=n(J);Tt=l(se,"Optimization"),se.forEach(e),_t.forEach(e),it=c(t),f=a(t,"P",{});var H=n(f);qt=l(H,"\u{1F917} Optimum provides an "),K=a(H,"CODE",{});var oe=n(K);kt=l(oe,"optimum.onnxruntime"),oe.forEach(e),xt=l(H," package that enables you to apply graph optimization on many model hosted on the \u{1F917} hub using the "),T=a(H,"A",{href:!0,rel:!0});var ie=n(T);bt=l(ie,"ONNX Runtime"),ie.forEach(e),Rt=l(H," model optimization tool."),H.forEach(e),at=c(t),_=a(t,"H2",{class:!0});var zt=n(_);v=a(zt,"A",{id:!0,class:!0,href:!0});var ae=n(v);Q=a(ae,"SPAN",{});var ne=n(Q);X(q.$$.fragment,ne),ne.forEach(e),ae.forEach(e),Et=c(zt),B=a(zt,"SPAN",{});var Wt=n(B);St=l(Wt,"Creating an "),V=a(Wt,"CODE",{});var re=n(V);Ct=l(re,"ORTOptimizer"),re.forEach(e),Wt.forEach(e),zt.forEach(e),nt=c(t),h=a(t,"P",{});var I=n(h);Mt=l(I,"The "),W=a(I,"CODE",{});var le=n(W);Nt=l(le,"ORTOptimizer"),le.forEach(e),Ft=l(I," class is used to optimize your ONNX model. The class can be initialized using the "),Y=a(I,"CODE",{});var pe=n(Y);Xt=l(pe,"from_pretrained()"),pe.forEach(e),At=l(I," method, which supports different checkpoint formats."),I.forEach(e),rt=c(t),U=a(t,"OL",{});var me=n(U);k=a(me,"LI",{});var Ot=n(k);Lt=l(Ot,"Using an already initialized "),Z=a(Ot,"CODE",{});var de=n(Z);Pt=l(de,"ORTModelForXXX"),de.forEach(e),Dt=l(Ot," class."),Ot.forEach(e),me.forEach(e),lt=c(t),X(x.$$.fragment,t),pt=c(t),b=a(t,"OL",{start:!0});var ce=n(b);tt=a(ce,"LI",{});var fe=n(tt);Bt=l(fe,"Using a local ONNX model from a directory."),fe.forEach(e),ce.forEach(e),mt=c(t),X(R.$$.fragment,t),dt=c(t),z=a(t,"H2",{class:!0});var vt=n(z);j=a(vt,"A",{id:!0,class:!0,href:!0});var he=n(j);et=a(he,"SPAN",{});var ue=n(et);X(E.$$.fragment,ue),ue.forEach(e),he.forEach(e),Ut=c(vt),st=a(vt,"SPAN",{});var ge=n(st);Ht=l(ge,"Optimization examples"),ge.forEach(e),vt.forEach(e),ct=c(t),w=a(t,"P",{});var jt=n(w);It=l(jt,"Below you will find an easy end-to-end example on how to optimize "),S=a(jt,"A",{href:!0,rel:!0});var _e=n(S);Gt=l(_e,"distilbert-base-uncased-finetuned-sst-2-english"),_e.forEach(e),Jt=l(jt,"."),jt.forEach(e),ft=c(t),X(C.$$.fragment,t),ht=c(t),y=a(t,"P",{});var wt=n(y);Kt=l(wt,"Below you will find an easy end-to-end example on how to optimize a Seq2Seq model "),M=a(wt,"A",{href:!0,rel:!0});var ze=n(M);Qt=l(ze,"sshleifer/distilbart-cnn-12-6\u201D"),ze.forEach(e),Vt=l(wt,"."),wt.forEach(e),ut=c(t),X(N.$$.fragment,t),this.h()},h(){m(u,"name","hf:doc:metadata"),m(u,"content",JSON.stringify(qe)),m(O,"id","optimization"),m(O,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(O,"href","#optimization"),m(g,"class","relative group"),m(T,"href","https://github.com/microsoft/onnxruntime/tree/master/onnxruntime/python/tools/transformers"),m(T,"rel","nofollow"),m(v,"id","creating-an-ortoptimizer"),m(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(v,"href","#creating-an-ortoptimizer"),m(_,"class","relative group"),m(b,"start","2"),m(j,"id","optimization-examples"),m(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),m(j,"href","#optimization-examples"),m(z,"class","relative group"),m(S,"href","https://huggingface.co/distilbert-base-uncased-finetuned-sst-2-english"),m(S,"rel","nofollow"),m(M,"href","https://huggingface.co/sshleifer/distilbart-cnn-12-6"),m(M,"rel","nofollow")},m(t,o){s(document.head,u),p(t,ot,o),p(t,g,o),s(g,O),s(O,G),A($,G,null),s(g,$t),s(g,J),s(J,Tt),p(t,it,o),p(t,f,o),s(f,qt),s(f,K),s(K,kt),s(f,xt),s(f,T),s(T,bt),s(f,Rt),p(t,at,o),p(t,_,o),s(_,v),s(v,Q),A(q,Q,null),s(_,Et),s(_,B),s(B,St),s(B,V),s(V,Ct),p(t,nt,o),p(t,h,o),s(h,Mt),s(h,W),s(W,Nt),s(h,Ft),s(h,Y),s(Y,Xt),s(h,At),p(t,rt,o),p(t,U,o),s(U,k),s(k,Lt),s(k,Z),s(Z,Pt),s(k,Dt),p(t,lt,o),A(x,t,o),p(t,pt,o),p(t,b,o),s(b,tt),s(tt,Bt),p(t,mt,o),A(R,t,o),p(t,dt,o),p(t,z,o),s(z,j),s(j,et),A(E,et,null),s(z,Ut),s(z,st),s(st,Ht),p(t,ct,o),p(t,w,o),s(w,It),s(w,S),s(S,Gt),s(w,Jt),p(t,ft,o),A(C,t,o),p(t,ht,o),p(t,y,o),s(y,Kt),s(y,M),s(M,Qt),s(y,Vt),p(t,ut,o),A(N,t,o),gt=!0},p:ye,i(t){gt||(L($.$$.fragment,t),L(q.$$.fragment,t),L(x.$$.fragment,t),L(R.$$.fragment,t),L(E.$$.fragment,t),L(C.$$.fragment,t),L(N.$$.fragment,t),gt=!0)},o(t){P($.$$.fragment,t),P(q.$$.fragment,t),P(x.$$.fragment,t),P(R.$$.fragment,t),P(E.$$.fragment,t),P(C.$$.fragment,t),P(N.$$.fragment,t),gt=!1},d(t){e(u),t&&e(ot),t&&e(g),D($),t&&e(it),t&&e(f),t&&e(at),t&&e(_),D(q),t&&e(nt),t&&e(h),t&&e(rt),t&&e(U),t&&e(lt),D(x,t),t&&e(pt),t&&e(b),t&&e(mt),D(R,t),t&&e(dt),t&&e(z),D(E),t&&e(ct),t&&e(w),t&&e(ft),D(C,t),t&&e(ht),t&&e(y),t&&e(ut),D(N,t)}}}const qe={local:"optimization",sections:[{local:"creating-an-ortoptimizer",title:"Creating an `ORTOptimizer`"},{local:"optimization-examples",title:"Optimization examples"}],title:"Optimization"};function ke(Zt){return $e(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ee extends Oe{constructor(u){super();ve(this,u,ke,Te,je,{})}}export{Ee as default,qe as metadata};
