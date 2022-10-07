import{S as Be,i as Ge,s as Ne,e as s,k as d,w as Re,t as r,M as Te,c as o,d as a,m as h,a as n,x as qe,h as c,b as f,G as t,g as p,y as xe,L as De,q as Ce,o as Ie,B as Ue,v as Oe}from"../../chunks/vendor-hf-doc-builder.js";import{I as Me}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as We}from"../../chunks/CodeBlock-hf-doc-builder.js";function He(fe){let u,B,_,g,P,k,K,R,Q,G,E,V,N,v,w,X,j,Y,Z,ee,y,te,A,ae,se,q,oe,T,$,re,D,z,l,ne,S,ce,ie,x,le,pe,C,me,de,I,he,ue,O,L,_e,M,b,W;return k=new Me({}),b=new We({props:{code:`from accelerate import Accelerator
import torch

accelerator = Accelerator()

my_scheduler = torch.optim.lr_scheduler.StepLR(my_optimizer, step_size=1, gamma=0.99)
my_model, my_optimizer, my_training_dataloader = accelerate.prepare(my_model, my_optimizer, my_training_dataloader)

# Register the LR scheduler
accelerate.register_for_checkpointing(my_scheduler)

# Save the starting state
accelerate.save_state("my/save/path")

device = accelerator.device
my_model.to(device)

# Perform training
for epoch in range(num_epochs):
    for batch in my_training_dataloader:
        my_optimizer.zero_grad()
        inputs, targets = batch
        inputs = inputs.to(device)
        targets = targets.to(device)
        outputs = my_model(inputs)
        loss = my_loss_function(outputs, targets)
        accelerator.backward(loss)
        my_optimizer.step()
    my_scheduler.step()

# Restore previous state
accelerate.load_state("my/save/path")`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator
<span class="hljs-keyword">import</span> torch

accelerator = Accelerator()

my_scheduler = torch.optim.lr_scheduler.StepLR(my_optimizer, step_size=<span class="hljs-number">1</span>, gamma=<span class="hljs-number">0.99</span>)
my_model, my_optimizer, my_training_dataloader = accelerate.prepare(my_model, my_optimizer, my_training_dataloader)

<span class="hljs-comment"># Register the LR scheduler</span>
accelerate.register_for_checkpointing(my_scheduler)

<span class="hljs-comment"># Save the starting state</span>
accelerate.save_state(<span class="hljs-string">&quot;my/save/path&quot;</span>)

device = accelerator.device
my_model.to(device)

<span class="hljs-comment"># Perform training</span>
<span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(num_epochs):
    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> my_training_dataloader:
        my_optimizer.zero_grad()
        inputs, targets = batch
        inputs = inputs.to(device)
        targets = targets.to(device)
        outputs = my_model(inputs)
        loss = my_loss_function(outputs, targets)
        accelerator.backward(loss)
        my_optimizer.step()
    my_scheduler.step()

<span class="hljs-comment"># Restore previous state</span>
accelerate.load_state(<span class="hljs-string">&quot;my/save/path&quot;</span>)`}}),{c(){u=s("meta"),B=d(),_=s("h1"),g=s("a"),P=s("span"),Re(k.$$.fragment),K=d(),R=s("span"),Q=r("Checkpointing"),G=d(),E=s("p"),V=r(`When training a PyTorch model with \u{1F917} Accelerate, you may often want to save and continue a state of training. Doing so requires
saving and loading the model, optimizer, RNG generators, and the GradScaler. Inside \u{1F917} Accelerate are two convenience functions to achieve this quickly:`),N=d(),v=s("ul"),w=s("li"),X=r("Use "),j=s("a"),Y=r("save_state()"),Z=r(" for saving everything mentioned above to a folder location"),ee=d(),y=s("li"),te=r("Use "),A=s("a"),ae=r("load_state()"),se=r(" for loading everything stored from an earlier "),q=s("code"),oe=r("save_state"),T=d(),$=s("p"),re=r("It should be noted that the expectation is that those states come from the same training script, they should not be from two separate scripts."),D=d(),z=s("ul"),l=s("li"),ne=r("By using "),S=s("a"),ce=r("register_for_checkpointing()"),ie=r(`, you can register custom objects to be automatically stored or loaded from the two prior functions,
so long as the object has a `),x=s("code"),le=r("state_dict"),pe=d(),C=s("strong"),me=r("and"),de=r(" a "),I=s("code"),he=r("load_state_dict"),ue=r(" functionality. This could include objects such as a learning rate scheduler."),O=d(),L=s("p"),_e=r("Below is a brief example using checkpointing to save and reload a state during training:"),M=d(),Re(b.$$.fragment),this.h()},l(e){const i=Te('[data-svelte="svelte-1phssyn"]',document.head);u=o(i,"META",{name:!0,content:!0}),i.forEach(a),B=h(e),_=o(e,"H1",{class:!0});var H=n(_);g=o(H,"A",{id:!0,class:!0,href:!0});var ge=n(g);P=o(ge,"SPAN",{});var ve=n(P);qe(k.$$.fragment,ve),ve.forEach(a),ge.forEach(a),K=h(H),R=o(H,"SPAN",{});var ye=n(R);Q=c(ye,"Checkpointing"),ye.forEach(a),H.forEach(a),G=h(e),E=o(e,"P",{});var ke=n(E);V=c(ke,`When training a PyTorch model with \u{1F917} Accelerate, you may often want to save and continue a state of training. Doing so requires
saving and loading the model, optimizer, RNG generators, and the GradScaler. Inside \u{1F917} Accelerate are two convenience functions to achieve this quickly:`),ke.forEach(a),N=h(e),v=o(e,"UL",{});var J=n(v);w=o(J,"LI",{});var F=n(w);X=c(F,"Use "),j=o(F,"A",{href:!0});var we=n(j);Y=c(we,"save_state()"),we.forEach(a),Z=c(F," for saving everything mentioned above to a folder location"),F.forEach(a),ee=h(J),y=o(J,"LI",{});var U=n(y);te=c(U,"Use "),A=o(U,"A",{href:!0});var be=n(A);ae=c(be,"load_state()"),be.forEach(a),se=c(U," for loading everything stored from an earlier "),q=o(U,"CODE",{});var Ee=n(q);oe=c(Ee,"save_state"),Ee.forEach(a),U.forEach(a),J.forEach(a),T=h(e),$=o(e,"P",{});var je=n($);re=c(je,"It should be noted that the expectation is that those states come from the same training script, they should not be from two separate scripts."),je.forEach(a),D=h(e),z=o(e,"UL",{});var Ae=n(z);l=o(Ae,"LI",{});var m=n(l);ne=c(m,"By using "),S=o(m,"A",{href:!0});var $e=n(S);ce=c($e,"register_for_checkpointing()"),$e.forEach(a),ie=c(m,`, you can register custom objects to be automatically stored or loaded from the two prior functions,
so long as the object has a `),x=o(m,"CODE",{});var ze=n(x);le=c(ze,"state_dict"),ze.forEach(a),pe=h(m),C=o(m,"STRONG",{});var Se=n(C);me=c(Se,"and"),Se.forEach(a),de=c(m," a "),I=o(m,"CODE",{});var Le=n(I);he=c(Le,"load_state_dict"),Le.forEach(a),ue=c(m," functionality. This could include objects such as a learning rate scheduler."),m.forEach(a),Ae.forEach(a),O=h(e),L=o(e,"P",{});var Pe=n(L);_e=c(Pe,"Below is a brief example using checkpointing to save and reload a state during training:"),Pe.forEach(a),M=h(e),qe(b.$$.fragment,e),this.h()},h(){f(u,"name","hf:doc:metadata"),f(u,"content",JSON.stringify(Je)),f(g,"id","checkpointing"),f(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(g,"href","#checkpointing"),f(_,"class","relative group"),f(j,"href","/docs/accelerate/v0.13.1/en/package_reference/accelerator#accelerate.Accelerator.save_state"),f(A,"href","/docs/accelerate/v0.13.1/en/package_reference/accelerator#accelerate.Accelerator.load_state"),f(S,"href","/docs/accelerate/v0.13.1/en/package_reference/accelerator#accelerate.Accelerator.register_for_checkpointing")},m(e,i){t(document.head,u),p(e,B,i),p(e,_,i),t(_,g),t(g,P),xe(k,P,null),t(_,K),t(_,R),t(R,Q),p(e,G,i),p(e,E,i),t(E,V),p(e,N,i),p(e,v,i),t(v,w),t(w,X),t(w,j),t(j,Y),t(w,Z),t(v,ee),t(v,y),t(y,te),t(y,A),t(A,ae),t(y,se),t(y,q),t(q,oe),p(e,T,i),p(e,$,i),t($,re),p(e,D,i),p(e,z,i),t(z,l),t(l,ne),t(l,S),t(S,ce),t(l,ie),t(l,x),t(x,le),t(l,pe),t(l,C),t(C,me),t(l,de),t(l,I),t(I,he),t(l,ue),p(e,O,i),p(e,L,i),t(L,_e),p(e,M,i),xe(b,e,i),W=!0},p:De,i(e){W||(Ce(k.$$.fragment,e),Ce(b.$$.fragment,e),W=!0)},o(e){Ie(k.$$.fragment,e),Ie(b.$$.fragment,e),W=!1},d(e){a(u),e&&a(B),e&&a(_),Ue(k),e&&a(G),e&&a(E),e&&a(N),e&&a(v),e&&a(T),e&&a($),e&&a(D),e&&a(z),e&&a(O),e&&a(L),e&&a(M),Ue(b,e)}}}const Je={local:"checkpointing",title:"Checkpointing"};function Fe(fe){return Oe(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Xe extends Be{constructor(u){super();Ge(this,u,Fe,He,Ne,{})}}export{Xe as default,Je as metadata};
