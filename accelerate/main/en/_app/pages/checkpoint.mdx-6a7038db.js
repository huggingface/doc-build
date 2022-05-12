import{S as Be,i as Ne,s as Te,e as s,k as d,w as Re,t as r,M as De,c as o,d as a,m as h,a as n,x as qe,h as i,b as f,F as t,g as p,y as xe,L as Ge,q as Ce,o as Ie,B as Ue,v as Oe}from"../chunks/vendor-a44ee391.js";import{I as Me}from"../chunks/IconCopyLink-d11810b0.js";import{C as We}from"../chunks/CodeBlock-5dad88d8.js";function Fe(fe){let u,B,_,g,P,w,K,R,Q,N,E,V,T,y,k,X,j,Y,Z,ee,v,te,A,ae,se,q,oe,D,$,re,G,z,l,ne,S,ie,ce,x,le,pe,C,me,de,I,he,ue,O,L,_e,M,b,W;return w=new Me({}),b=new We({props:{code:`from accelerate import Accelerator
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
accelerate.load_state(<span class="hljs-string">&quot;my/save/path&quot;</span>)`}}),{c(){u=s("meta"),B=d(),_=s("h1"),g=s("a"),P=s("span"),Re(w.$$.fragment),K=d(),R=s("span"),Q=r("Checkpointing"),N=d(),E=s("p"),V=r(`When training a PyTorch model with Accelerate, you may often want to save and continue a state of training. Doing so requires
saving and loading the model, optimizer, RNG generators, and the GradScaler. Inside Accelerate are two convience functions to achieve this quickly:`),T=d(),y=s("ul"),k=s("li"),X=r("Use "),j=s("a"),Y=r("save_state()"),Z=r(" for saving everything mentioned above to a folder location"),ee=d(),v=s("li"),te=r("Use "),A=s("a"),ae=r("load_state()"),se=r(" for loading everything stored from an earlier "),q=s("code"),oe=r("save_state"),D=d(),$=s("p"),re=r("It should be noted that the expectation is that those states come from the same training script, they should not be from two separate scripts."),G=d(),z=s("ul"),l=s("li"),ne=r("By using "),S=s("a"),ie=r("register_for_checkpointing()"),ce=r(`, you can register custom objects to be automatically stored or loaded from the two prior functions,
so long as the object has a `),x=s("code"),le=r("state_dict"),pe=d(),C=s("strong"),me=r("and"),de=r(" a "),I=s("code"),he=r("load_state_dict"),ue=r(" functionality. This could include objects such as a learning rate scheduler."),O=d(),L=s("p"),_e=r("Below is a brief example using checkpointing to save and reload a state during training:"),M=d(),Re(b.$$.fragment),this.h()},l(e){const c=De('[data-svelte="svelte-1phssyn"]',document.head);u=o(c,"META",{name:!0,content:!0}),c.forEach(a),B=h(e),_=o(e,"H1",{class:!0});var F=n(_);g=o(F,"A",{id:!0,class:!0,href:!0});var ge=n(g);P=o(ge,"SPAN",{});var ye=n(P);qe(w.$$.fragment,ye),ye.forEach(a),ge.forEach(a),K=h(F),R=o(F,"SPAN",{});var ve=n(R);Q=i(ve,"Checkpointing"),ve.forEach(a),F.forEach(a),N=h(e),E=o(e,"P",{});var we=n(E);V=i(we,`When training a PyTorch model with Accelerate, you may often want to save and continue a state of training. Doing so requires
saving and loading the model, optimizer, RNG generators, and the GradScaler. Inside Accelerate are two convience functions to achieve this quickly:`),we.forEach(a),T=h(e),y=o(e,"UL",{});var H=n(y);k=o(H,"LI",{});var J=n(k);X=i(J,"Use "),j=o(J,"A",{href:!0});var ke=n(j);Y=i(ke,"save_state()"),ke.forEach(a),Z=i(J," for saving everything mentioned above to a folder location"),J.forEach(a),ee=h(H),v=o(H,"LI",{});var U=n(v);te=i(U,"Use "),A=o(U,"A",{href:!0});var be=n(A);ae=i(be,"load_state()"),be.forEach(a),se=i(U," for loading everything stored from an earlier "),q=o(U,"CODE",{});var Ee=n(q);oe=i(Ee,"save_state"),Ee.forEach(a),U.forEach(a),H.forEach(a),D=h(e),$=o(e,"P",{});var je=n($);re=i(je,"It should be noted that the expectation is that those states come from the same training script, they should not be from two separate scripts."),je.forEach(a),G=h(e),z=o(e,"UL",{});var Ae=n(z);l=o(Ae,"LI",{});var m=n(l);ne=i(m,"By using "),S=o(m,"A",{href:!0});var $e=n(S);ie=i($e,"register_for_checkpointing()"),$e.forEach(a),ce=i(m,`, you can register custom objects to be automatically stored or loaded from the two prior functions,
so long as the object has a `),x=o(m,"CODE",{});var ze=n(x);le=i(ze,"state_dict"),ze.forEach(a),pe=h(m),C=o(m,"STRONG",{});var Se=n(C);me=i(Se,"and"),Se.forEach(a),de=i(m," a "),I=o(m,"CODE",{});var Le=n(I);he=i(Le,"load_state_dict"),Le.forEach(a),ue=i(m," functionality. This could include objects such as a learning rate scheduler."),m.forEach(a),Ae.forEach(a),O=h(e),L=o(e,"P",{});var Pe=n(L);_e=i(Pe,"Below is a brief example using checkpointing to save and reload a state during training:"),Pe.forEach(a),M=h(e),qe(b.$$.fragment,e),this.h()},h(){f(u,"name","hf:doc:metadata"),f(u,"content",JSON.stringify(He)),f(g,"id","checkpointing"),f(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),f(g,"href","#checkpointing"),f(_,"class","relative group"),f(j,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator.save_state"),f(A,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator.load_state"),f(S,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator.register_for_checkpointing")},m(e,c){t(document.head,u),p(e,B,c),p(e,_,c),t(_,g),t(g,P),xe(w,P,null),t(_,K),t(_,R),t(R,Q),p(e,N,c),p(e,E,c),t(E,V),p(e,T,c),p(e,y,c),t(y,k),t(k,X),t(k,j),t(j,Y),t(k,Z),t(y,ee),t(y,v),t(v,te),t(v,A),t(A,ae),t(v,se),t(v,q),t(q,oe),p(e,D,c),p(e,$,c),t($,re),p(e,G,c),p(e,z,c),t(z,l),t(l,ne),t(l,S),t(S,ie),t(l,ce),t(l,x),t(x,le),t(l,pe),t(l,C),t(C,me),t(l,de),t(l,I),t(I,he),t(l,ue),p(e,O,c),p(e,L,c),t(L,_e),p(e,M,c),xe(b,e,c),W=!0},p:Ge,i(e){W||(Ce(w.$$.fragment,e),Ce(b.$$.fragment,e),W=!0)},o(e){Ie(w.$$.fragment,e),Ie(b.$$.fragment,e),W=!1},d(e){a(u),e&&a(B),e&&a(_),Ue(w),e&&a(N),e&&a(E),e&&a(T),e&&a(y),e&&a(D),e&&a($),e&&a(G),e&&a(z),e&&a(O),e&&a(L),e&&a(M),Ue(b,e)}}}const He={local:"checkpointing",title:"Checkpointing"};function Je(fe){return Oe(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Xe extends Be{constructor(u){super();Ne(this,u,Je,Fe,Te,{})}}export{Xe as default,He as metadata};
