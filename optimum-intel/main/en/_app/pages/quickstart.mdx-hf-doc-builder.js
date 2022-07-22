import{S as Te,i as Pe,s as Ce,e as o,k as c,w as Y,t as l,M as je,c as r,d as n,m,a as s,x as J,h as u,b as p,G as i,g as a,y as K,L as Ee,q as V,o as X,B as Z,v as Qe}from"../chunks/vendor-hf-doc-builder.js";import{I as xe}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as de}from"../chunks/CodeBlock-hf-doc-builder.js";function Ae(he){let f,x,d,h,C,y,ee,j,ne,A,k,te,S,g,ie,w,ae,oe,U,q,L,T,re,M,v,O,P,se,D,I,N,_,le,$,E,ue,pe,B,z,ce,b,Q,me,fe,F;return y=new xe({}),q=new de({props:{code:`-from transformers import Trainer
+from optimum.intel.neural_compressor import IncTrainer

# Initialize our IncTrainer
-trainer = Trainer(
+trainer = IncTrainer(
    model=model,
    args=TrainingArguments(output_dir, num_train_epochs=3.0),
    train_dataset=train_dataset,
    eval_dataset=eval_dataset,
    compute_metrics=compute_metrics,
    tokenizer=tokenizer,
    data_collator=default_data_collator,
)`,highlighted:`<span class="hljs-deletion">-from transformers import Trainer</span>
<span class="hljs-addition">+from optimum.intel.neural_compressor import IncTrainer</span>

# Initialize our IncTrainer
<span class="hljs-deletion">-trainer = Trainer(</span>
<span class="hljs-addition">+trainer = IncTrainer(</span>
    model=model,
    args=TrainingArguments(output_dir, num_train_epochs=3.0),
    train_dataset=train_dataset,
    eval_dataset=eval_dataset,
    compute_metrics=compute_metrics,
    tokenizer=tokenizer,
    data_collator=default_data_collator,
)`}}),v=new de({props:{code:`from optimum.intel.neural_compressor import IncOptimizer, IncPruner, IncQuantizer
from optimum.intel.neural_compressor.configuration import IncPruningConfig, IncQuantizationConfig

# The targeted sparsity is set to 10%
target_sparsity = 0.1
config_path = "echarlaix/distilbert-sst2-inc-dynamic-quantization-magnitude-pruning-0.1"
# Load the quantization configuration detailing the quantization we wish to apply
quantization_config = IncQuantizationConfig.from_pretrained(config_path, config_file_name="quantization.yml")
# Load the pruning configuration detailing the pruning we wish to apply
pruning_config = IncPruningConfig.from_pretrained(config_path, config_file_name="prune.yml")

# Instantiate our IncQuantizer using the desired configuration
quantizer = IncQuantizer(quantization_config, eval_func=eval_func)
# Instantiate our IncPruner using the desired configuration
pruner = IncPruner(pruning_config, eval_func=eval_func, train_func=train_func)
optimizer = IncOptimizer(model, quantizer=quantizer, pruner=pruner)
# Apply pruning and quantization 
optimized_model = optimizer.fit()

# Save the resulting model and its corresponding configuration in the given directory
optimizer.save_pretrained(output_dir)
`,highlighted:`<span class="hljs-keyword">from</span> optimum.intel.neural_compressor <span class="hljs-keyword">import</span> IncOptimizer, IncPruner, IncQuantizer
<span class="hljs-keyword">from</span> optimum.intel.neural_compressor.configuration <span class="hljs-keyword">import</span> IncPruningConfig, IncQuantizationConfig

<span class="hljs-comment"># The targeted sparsity is set to 10%</span>
target_sparsity = <span class="hljs-number">0.1</span>
config_path = <span class="hljs-string">&quot;echarlaix/distilbert-sst2-inc-dynamic-quantization-magnitude-pruning-0.1&quot;</span>
<span class="hljs-comment"># Load the quantization configuration detailing the quantization we wish to apply</span>
quantization_config = IncQuantizationConfig.from_pretrained(config_path, config_file_name=<span class="hljs-string">&quot;quantization.yml&quot;</span>)
<span class="hljs-comment"># Load the pruning configuration detailing the pruning we wish to apply</span>
pruning_config = IncPruningConfig.from_pretrained(config_path, config_file_name=<span class="hljs-string">&quot;prune.yml&quot;</span>)

<span class="hljs-comment"># Instantiate our IncQuantizer using the desired configuration</span>
quantizer = IncQuantizer(quantization_config, eval_func=eval_func)
<span class="hljs-comment"># Instantiate our IncPruner using the desired configuration</span>
pruner = IncPruner(pruning_config, eval_func=eval_func, train_func=train_func)
optimizer = IncOptimizer(model, quantizer=quantizer, pruner=pruner)
<span class="hljs-comment"># Apply pruning and quantization </span>
optimized_model = optimizer.fit()

<span class="hljs-comment"># Save the resulting model and its corresponding configuration in the given directory</span>
optimizer.save_pretrained(output_dir)
`}}),I=new de({props:{code:`from optimum.intel.neural_compressor.quantization import IncQuantizedModelForSequenceClassification

loaded_model_from_hub = IncQuantizedModelForSequenceClassification.from_pretrained(
    "Intel/distilbert-base-uncased-finetuned-sst-2-english-int8-static"
)`,highlighted:`<span class="hljs-keyword">from</span> optimum.intel.neural_compressor.quantization <span class="hljs-keyword">import</span> IncQuantizedModelForSequenceClassification

loaded_model_from_hub = IncQuantizedModelForSequenceClassification.from_pretrained(
    <span class="hljs-string">&quot;Intel/distilbert-base-uncased-finetuned-sst-2-english-int8-static&quot;</span>
)`}}),{c(){f=o("meta"),x=c(),d=o("h1"),h=o("a"),C=o("span"),Y(y.$$.fragment),ee=c(),j=o("span"),ne=l("Quickstart"),A=c(),k=o("p"),te=l(`Here is an example on how to combine magnitude pruning with dynamic quantization while fine-tuning a DistilBERT on the sst-2 task.
Note that quantization is currently only supported for CPUs (only CPU backends are available), so we will not be utilizing GPUs / CUDA in this example.`),S=c(),g=o("p"),ie=l("To apply our pruning methodology, we need to create an instance of IncTrainer, which is very similar to the \u{1F917} Transformers "),w=o("a"),ae=l("Trainer"),oe=l(`.
We will fine-tune our model for 3 epochs while applying pruning.`),U=c(),Y(q.$$.fragment),L=c(),T=o("p"),re=l("To apply our quantization and pruning methodologies, we first need to create the corresponding configuration describing how we want those methodologies to be applied :"),M=c(),Y(v.$$.fragment),O=c(),P=o("p"),se=l("To load a quantized model hosted locally or on the \u{1F917} hub, you can do as follows :"),D=c(),Y(I.$$.fragment),N=c(),_=o("p"),le=l("You can load many more quantized models hosted on the hub under the Intel organization "),$=o("a"),E=o("code"),ue=l("here"),pe=l("."),B=c(),z=o("p"),ce=l("Check out the "),b=o("a"),Q=o("code"),me=l("examples"),fe=l(" directory for more sophisticated usage."),this.h()},l(e){const t=je('[data-svelte="svelte-1phssyn"]',document.head);f=r(t,"META",{name:!0,content:!0}),t.forEach(n),x=m(e),d=r(e,"H1",{class:!0});var G=s(d);h=r(G,"A",{id:!0,class:!0,href:!0});var ge=s(h);C=r(ge,"SPAN",{});var _e=s(C);J(y.$$.fragment,_e),_e.forEach(n),ge.forEach(n),ee=m(G),j=r(G,"SPAN",{});var ze=s(j);ne=u(ze,"Quickstart"),ze.forEach(n),G.forEach(n),A=m(e),k=r(e,"P",{});var ye=s(k);te=u(ye,`Here is an example on how to combine magnitude pruning with dynamic quantization while fine-tuning a DistilBERT on the sst-2 task.
Note that quantization is currently only supported for CPUs (only CPU backends are available), so we will not be utilizing GPUs / CUDA in this example.`),ye.forEach(n),S=m(e),g=r(e,"P",{});var H=s(g);ie=u(H,"To apply our pruning methodology, we need to create an instance of IncTrainer, which is very similar to the \u{1F917} Transformers "),w=r(H,"A",{href:!0,rel:!0});var we=s(w);ae=u(we,"Trainer"),we.forEach(n),oe=u(H,`.
We will fine-tune our model for 3 epochs while applying pruning.`),H.forEach(n),U=m(e),J(q.$$.fragment,e),L=m(e),T=r(e,"P",{});var qe=s(T);re=u(qe,"To apply our quantization and pruning methodologies, we first need to create the corresponding configuration describing how we want those methodologies to be applied :"),qe.forEach(n),M=m(e),J(v.$$.fragment,e),O=m(e),P=r(e,"P",{});var ve=s(P);se=u(ve,"To load a quantized model hosted locally or on the \u{1F917} hub, you can do as follows :"),ve.forEach(n),D=m(e),J(I.$$.fragment,e),N=m(e),_=r(e,"P",{});var R=s(_);le=u(R,"You can load many more quantized models hosted on the hub under the Intel organization "),$=r(R,"A",{href:!0,rel:!0});var Ie=s($);E=r(Ie,"CODE",{});var $e=s(E);ue=u($e,"here"),$e.forEach(n),Ie.forEach(n),pe=u(R,"."),R.forEach(n),B=m(e),z=r(e,"P",{});var W=s(z);ce=u(W,"Check out the "),b=r(W,"A",{href:!0,rel:!0});var be=s(b);Q=r(be,"CODE",{});var ke=s(Q);me=u(ke,"examples"),ke.forEach(n),be.forEach(n),fe=u(W," directory for more sophisticated usage."),W.forEach(n),this.h()},h(){p(f,"name","hf:doc:metadata"),p(f,"content",JSON.stringify(Se)),p(h,"id","quickstart"),p(h,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(h,"href","#quickstart"),p(d,"class","relative group"),p(w,"href","https://huggingface.co/docs/transformers/main_classes/trainer"),p(w,"rel","nofollow"),p($,"href","https://huggingface.co/Intel"),p($,"rel","nofollow"),p(b,"href","https://github.com/huggingface/optimum-intel/tree/main/examples"),p(b,"rel","nofollow")},m(e,t){i(document.head,f),a(e,x,t),a(e,d,t),i(d,h),i(h,C),K(y,C,null),i(d,ee),i(d,j),i(j,ne),a(e,A,t),a(e,k,t),i(k,te),a(e,S,t),a(e,g,t),i(g,ie),i(g,w),i(w,ae),i(g,oe),a(e,U,t),K(q,e,t),a(e,L,t),a(e,T,t),i(T,re),a(e,M,t),K(v,e,t),a(e,O,t),a(e,P,t),i(P,se),a(e,D,t),K(I,e,t),a(e,N,t),a(e,_,t),i(_,le),i(_,$),i($,E),i(E,ue),i(_,pe),a(e,B,t),a(e,z,t),i(z,ce),i(z,b),i(b,Q),i(Q,me),i(z,fe),F=!0},p:Ee,i(e){F||(V(y.$$.fragment,e),V(q.$$.fragment,e),V(v.$$.fragment,e),V(I.$$.fragment,e),F=!0)},o(e){X(y.$$.fragment,e),X(q.$$.fragment,e),X(v.$$.fragment,e),X(I.$$.fragment,e),F=!1},d(e){n(f),e&&n(x),e&&n(d),Z(y),e&&n(A),e&&n(k),e&&n(S),e&&n(g),e&&n(U),Z(q,e),e&&n(L),e&&n(T),e&&n(M),Z(v,e),e&&n(O),e&&n(P),e&&n(D),Z(I,e),e&&n(N),e&&n(_),e&&n(B),e&&n(z)}}}const Se={local:"quickstart",title:"Quickstart"};function Ue(he){return Qe(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class De extends Te{constructor(f){super();Pe(this,f,Ue,Ae,Ce,{})}}export{De as default,Se as metadata};
