import{S as rs,i as os,s as is,e as o,k as m,w as U,t as e,M as ls,c as i,d as s,m as h,a as l,x as Y,h as r,b as d,G as t,g as p,y as J,L as ps,q as B,o as R,B as F,v as us}from"../chunks/vendor-hf-doc-builder.js";import{I as cs,C as ca}from"../chunks/CodeBlock-hf-doc-builder.js";function ms(Da){let g,K,_,j,P,k,ma,C,ha,V,w,da,H,fa,ga,W,v,I,_a,ja,S,wa,X,u,va,L,ka,qa,q,ya,Ta,M,$a,ba,D,Ga,Ea,y,za,Aa,T,xa,Na,Z,A,Oa,aa,$,sa,x,Pa,ta,b,na,f,Ca,Q,Ha,Ia,G,Sa,La,ea,E,ra,N,Ma,oa,z,ia;return k=new cs({}),$=new ca({props:{code:`from transformers import Trainer, TrainingArguments

training_args = TrainingArguments(
  # training arguments...
)

# A lot of code here

# Initialize our Trainer
trainer = Trainer(
    model=model,
    args=training_args,  # Original training arguments.
    train_dataset=train_dataset if training_args.do_train else None,
    eval_dataset=eval_dataset if training_args.do_eval else None,
    compute_metrics=compute_metrics,
    tokenizer=tokenizer,
    data_collator=data_collator,
)`,highlighted:`<span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> Trainer, TrainingArguments

training_args = TrainingArguments(
  <span class="hljs-comment"># training arguments...</span>
)

<span class="hljs-comment"># A lot of code here</span>

<span class="hljs-comment"># Initialize our Trainer</span>
trainer = Trainer(
    model=model,
    args=training_args,  <span class="hljs-comment"># Original training arguments.</span>
    train_dataset=train_dataset <span class="hljs-keyword">if</span> training_args.do_train <span class="hljs-keyword">else</span> <span class="hljs-literal">None</span>,
    eval_dataset=eval_dataset <span class="hljs-keyword">if</span> training_args.do_eval <span class="hljs-keyword">else</span> <span class="hljs-literal">None</span>,
    compute_metrics=compute_metrics,
    tokenizer=tokenizer,
    data_collator=data_collator,
)`}}),b=new ca({props:{code:`from optimum.habana import GaudiConfig, GaudiTrainer, GaudiTrainingArguments

training_args = GaudiTrainingArguments(
  # same training arguments...
  use_habana=True,
  use_lazy_mode=True,  # whether to use lazy or eager mode
  gaudi_config_name=path_to_gaudi_config,
)

# A lot of the same code as the original script here

# Initialize our Trainer
trainer = GaudiTrainer(
    model=model,
    # You can manually specify the Gaudi configuration to use with
    # gaudi_config=my_gaudi_config
    args=training_args,
    train_dataset=train_dataset if training_args.do_train else None,
    eval_dataset=eval_dataset if training_args.do_eval else None,
    compute_metrics=compute_metrics,
    tokenizer=tokenizer,
    data_collator=data_collator,
)`,highlighted:`<span class="hljs-keyword">from</span> optimum.habana <span class="hljs-keyword">import</span> GaudiConfig, GaudiTrainer, GaudiTrainingArguments

training_args = GaudiTrainingArguments(
  <span class="hljs-comment"># same training arguments...</span>
  use_habana=<span class="hljs-literal">True</span>,
  use_lazy_mode=<span class="hljs-literal">True</span>,  <span class="hljs-comment"># whether to use lazy or eager mode</span>
  gaudi_config_name=path_to_gaudi_config,
)

<span class="hljs-comment"># A lot of the same code as the original script here</span>

<span class="hljs-comment"># Initialize our Trainer</span>
trainer = GaudiTrainer(
    model=model,
    <span class="hljs-comment"># You can manually specify the Gaudi configuration to use with</span>
    <span class="hljs-comment"># gaudi_config=my_gaudi_config</span>
    args=training_args,
    train_dataset=train_dataset <span class="hljs-keyword">if</span> training_args.do_train <span class="hljs-keyword">else</span> <span class="hljs-literal">None</span>,
    eval_dataset=eval_dataset <span class="hljs-keyword">if</span> training_args.do_eval <span class="hljs-keyword">else</span> <span class="hljs-literal">None</span>,
    compute_metrics=compute_metrics,
    tokenizer=tokenizer,
    data_collator=data_collator,
)`}}),E=new ca({props:{code:`{
  "use_habana_mixed_precision": true,
  "hmp_opt_level": "O1",
  "hmp_is_verbose": false,
  "use_fused_adam": true,
  "use_fused_clip_norm": true,
  "hmp_bf16_ops": [
    "add",
    "addmm",
    "bmm",
    "div",
    "dropout",
    "gelu",
    "iadd",
    "linear",
    "layer_norm",
    "matmul",
    "mm",
    "rsub",
    "softmax",
    "truediv"
  ],
  "hmp_fp32_ops": [
    "embedding",
    "nll_loss",
    "log_softmax"
  ]
}`,highlighted:`<span class="hljs-punctuation">{</span>
  <span class="hljs-attr">&quot;use_habana_mixed_precision&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;hmp_opt_level&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-string">&quot;O1&quot;</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;hmp_is_verbose&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">false</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;use_fused_adam&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;use_fused_clip_norm&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-keyword">true</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;hmp_bf16_ops&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-string">&quot;add&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;addmm&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;bmm&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;div&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;dropout&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;gelu&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;iadd&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;linear&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;layer_norm&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;matmul&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;mm&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;rsub&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;softmax&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;truediv&quot;</span>
  <span class="hljs-punctuation">]</span><span class="hljs-punctuation">,</span>
  <span class="hljs-attr">&quot;hmp_fp32_ops&quot;</span><span class="hljs-punctuation">:</span> <span class="hljs-punctuation">[</span>
    <span class="hljs-string">&quot;embedding&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;nll_loss&quot;</span><span class="hljs-punctuation">,</span>
    <span class="hljs-string">&quot;log_softmax&quot;</span>
  <span class="hljs-punctuation">]</span>
<span class="hljs-punctuation">}</span>`}}),z=new ca({props:{code:`gaudi_config = GaudiConfig.from_pretrained(
    gaudi_config_name,
    cache_dir=model_args.cache_dir,
    revision=model_args.model_revision,
    use_auth_token=True if model_args.use_auth_token else None,
)`,highlighted:`gaudi_config = GaudiConfig.from_pretrained(
    gaudi_config_name,
    cache_dir=model_args.cache_dir,
    revision=model_args.model_revision,
    use_auth_token=<span class="hljs-literal">True</span> <span class="hljs-keyword">if</span> model_args.use_auth_token <span class="hljs-keyword">else</span> <span class="hljs-literal">None</span>,
)`}}),{c(){g=o("meta"),K=m(),_=o("h1"),j=o("a"),P=o("span"),U(k.$$.fragment),ma=m(),C=o("span"),ha=e("Quickstart"),V=m(),w=o("p"),da=e("\u{1F917} Optimum Habana was designed with one goal in mind: "),H=o("strong"),fa=e("make training and evaluation straightforward for any \u{1F917} Transformers user while leveraging the complete power of Gaudi processors"),ga=e(`.
There are two main classes one needs to know:`),W=m(),v=o("ul"),I=o("li"),_a=e("GaudiTrainer: the trainer class that takes care of compiling (lazy or eager mode) and distributing the model to run on HPUs, and of performing traning and evaluation."),ja=m(),S=o("li"),wa=e("GaudiConfig: the class that enables to configure Habana Mixed Precision and to decide whether optimized operators and optimizers should be used or not."),X=m(),u=o("p"),va=e("The "),L=o("code"),ka=e("GaudiTrainer"),qa=e(" is very similar to the "),q=o("a"),ya=e("\u{1F917} Transformers Trainer"),Ta=e(", and adapting a script using the Trainer to make it work with Gaudi will mostly consist in simply swapping the "),M=o("code"),$a=e("Trainer"),ba=e(" class for the "),D=o("code"),Ga=e("GaudiTrainer"),Ea=e(` one.
That\u2019s how most of the `),y=o("a"),za=e("example scripts"),Aa=e(" were adapted from their "),T=o("a"),xa=e("original counterparts"),Na=e("."),Z=m(),A=o("p"),Oa=e("Original script:"),aa=m(),U($.$$.fragment),sa=m(),x=o("p"),Pa=e("Transformed version that can run on Gaudi:"),ta=m(),U(b.$$.fragment),na=m(),f=o("p"),Ca=e("where "),Q=o("code"),Ha=e("gaudi_config_name"),Ia=e(" is the name of a model from the "),G=o("a"),Sa=e("Hub"),La=e(" (Gaudi configurations are stored in model repositories). You can also give the path to a custom Gaudi configuration written in a JSON file such as this one:"),ea=m(),U(E.$$.fragment),ra=m(),N=o("p"),Ma=e("If you prefer to instantiate a Gaudi configuration to work on it before giving it to the trainer, you can do it as follows:"),oa=m(),U(z.$$.fragment),this.h()},l(a){const n=ls('[data-svelte="svelte-1phssyn"]',document.head);g=i(n,"META",{name:!0,content:!0}),n.forEach(s),K=h(a),_=i(a,"H1",{class:!0});var la=l(_);j=i(la,"A",{id:!0,class:!0,href:!0});var Qa=l(j);P=i(Qa,"SPAN",{});var Ua=l(P);Y(k.$$.fragment,Ua),Ua.forEach(s),Qa.forEach(s),ma=h(la),C=i(la,"SPAN",{});var Ya=l(C);ha=r(Ya,"Quickstart"),Ya.forEach(s),la.forEach(s),V=h(a),w=i(a,"P",{});var pa=l(w);da=r(pa,"\u{1F917} Optimum Habana was designed with one goal in mind: "),H=i(pa,"STRONG",{});var Ja=l(H);fa=r(Ja,"make training and evaluation straightforward for any \u{1F917} Transformers user while leveraging the complete power of Gaudi processors"),Ja.forEach(s),ga=r(pa,`.
There are two main classes one needs to know:`),pa.forEach(s),W=h(a),v=i(a,"UL",{});var ua=l(v);I=i(ua,"LI",{});var Ba=l(I);_a=r(Ba,"GaudiTrainer: the trainer class that takes care of compiling (lazy or eager mode) and distributing the model to run on HPUs, and of performing traning and evaluation."),Ba.forEach(s),ja=h(ua),S=i(ua,"LI",{});var Ra=l(S);wa=r(Ra,"GaudiConfig: the class that enables to configure Habana Mixed Precision and to decide whether optimized operators and optimizers should be used or not."),Ra.forEach(s),ua.forEach(s),X=h(a),u=i(a,"P",{});var c=l(u);va=r(c,"The "),L=i(c,"CODE",{});var Fa=l(L);ka=r(Fa,"GaudiTrainer"),Fa.forEach(s),qa=r(c," is very similar to the "),q=i(c,"A",{href:!0,rel:!0});var Ka=l(q);ya=r(Ka,"\u{1F917} Transformers Trainer"),Ka.forEach(s),Ta=r(c,", and adapting a script using the Trainer to make it work with Gaudi will mostly consist in simply swapping the "),M=i(c,"CODE",{});var Va=l(M);$a=r(Va,"Trainer"),Va.forEach(s),ba=r(c," class for the "),D=i(c,"CODE",{});var Wa=l(D);Ga=r(Wa,"GaudiTrainer"),Wa.forEach(s),Ea=r(c,` one.
That\u2019s how most of the `),y=i(c,"A",{href:!0,rel:!0});var Xa=l(y);za=r(Xa,"example scripts"),Xa.forEach(s),Aa=r(c," were adapted from their "),T=i(c,"A",{href:!0,rel:!0});var Za=l(T);xa=r(Za,"original counterparts"),Za.forEach(s),Na=r(c,"."),c.forEach(s),Z=h(a),A=i(a,"P",{});var as=l(A);Oa=r(as,"Original script:"),as.forEach(s),aa=h(a),Y($.$$.fragment,a),sa=h(a),x=i(a,"P",{});var ss=l(x);Pa=r(ss,"Transformed version that can run on Gaudi:"),ss.forEach(s),ta=h(a),Y(b.$$.fragment,a),na=h(a),f=i(a,"P",{});var O=l(f);Ca=r(O,"where "),Q=i(O,"CODE",{});var ts=l(Q);Ha=r(ts,"gaudi_config_name"),ts.forEach(s),Ia=r(O," is the name of a model from the "),G=i(O,"A",{href:!0,rel:!0});var ns=l(G);Sa=r(ns,"Hub"),ns.forEach(s),La=r(O," (Gaudi configurations are stored in model repositories). You can also give the path to a custom Gaudi configuration written in a JSON file such as this one:"),O.forEach(s),ea=h(a),Y(E.$$.fragment,a),ra=h(a),N=i(a,"P",{});var es=l(N);Ma=r(es,"If you prefer to instantiate a Gaudi configuration to work on it before giving it to the trainer, you can do it as follows:"),es.forEach(s),oa=h(a),Y(z.$$.fragment,a),this.h()},h(){d(g,"name","hf:doc:metadata"),d(g,"content",JSON.stringify(hs)),d(j,"id","quickstart"),d(j,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(j,"href","#quickstart"),d(_,"class","relative group"),d(q,"href","https://huggingface.co/docs/transformers/main_classes/trainer"),d(q,"rel","nofollow"),d(y,"href","https://github.com/huggingface/optimum-habana/tree/main/examples"),d(y,"rel","nofollow"),d(T,"href","https://github.com/huggingface/transformers/tree/main/examples/pytorch"),d(T,"rel","nofollow"),d(G,"href","https://huggingface.co/Habana"),d(G,"rel","nofollow")},m(a,n){t(document.head,g),p(a,K,n),p(a,_,n),t(_,j),t(j,P),J(k,P,null),t(_,ma),t(_,C),t(C,ha),p(a,V,n),p(a,w,n),t(w,da),t(w,H),t(H,fa),t(w,ga),p(a,W,n),p(a,v,n),t(v,I),t(I,_a),t(v,ja),t(v,S),t(S,wa),p(a,X,n),p(a,u,n),t(u,va),t(u,L),t(L,ka),t(u,qa),t(u,q),t(q,ya),t(u,Ta),t(u,M),t(M,$a),t(u,ba),t(u,D),t(D,Ga),t(u,Ea),t(u,y),t(y,za),t(u,Aa),t(u,T),t(T,xa),t(u,Na),p(a,Z,n),p(a,A,n),t(A,Oa),p(a,aa,n),J($,a,n),p(a,sa,n),p(a,x,n),t(x,Pa),p(a,ta,n),J(b,a,n),p(a,na,n),p(a,f,n),t(f,Ca),t(f,Q),t(Q,Ha),t(f,Ia),t(f,G),t(G,Sa),t(f,La),p(a,ea,n),J(E,a,n),p(a,ra,n),p(a,N,n),t(N,Ma),p(a,oa,n),J(z,a,n),ia=!0},p:ps,i(a){ia||(B(k.$$.fragment,a),B($.$$.fragment,a),B(b.$$.fragment,a),B(E.$$.fragment,a),B(z.$$.fragment,a),ia=!0)},o(a){R(k.$$.fragment,a),R($.$$.fragment,a),R(b.$$.fragment,a),R(E.$$.fragment,a),R(z.$$.fragment,a),ia=!1},d(a){s(g),a&&s(K),a&&s(_),F(k),a&&s(V),a&&s(w),a&&s(W),a&&s(v),a&&s(X),a&&s(u),a&&s(Z),a&&s(A),a&&s(aa),F($,a),a&&s(sa),a&&s(x),a&&s(ta),F(b,a),a&&s(na),a&&s(f),a&&s(ea),F(E,a),a&&s(ra),a&&s(N),a&&s(oa),F(z,a)}}}const hs={local:"quickstart",title:"Quickstart"};function ds(Da){return us(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class _s extends rs{constructor(g){super();os(this,g,ds,ms,is,{})}}export{_s as default,hs as metadata};
