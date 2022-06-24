import{S as Be,i as Ge,s as Ne,e as s,k as d,w as Se,t as r,M as Te,c as o,d as a,m,a as n,x as Le,h as l,b as _,G as t,g as h,y as ze,L as De,q as Ie,o as Re,B as Ue,v as Oe}from"../chunks/vendor-hf-doc-builder.js";import{I as Me}from"../chunks/IconCopyLink-hf-doc-builder.js";import{C as We}from"../chunks/CodeBlock-hf-doc-builder.js";function He(_e){let u,B,f,v,P,w,K,S,Q,G,E,V,N,g,k,X,j,Y,Z,ee,y,te,$,ae,se,L,oe,T,A,re,D,q,c,ne,x,le,ie,z,ce,he,I,pe,de,R,me,ue,O,C,fe,M,b,W;return w=new Me({}),b=new We({props:{code:`





`,highlighted:`<span class="hljs-keyword">from</span> accelerate <span class="hljs-keyword">import</span> Accelerator
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
accelerate.load_state(<span class="hljs-string">&quot;my/save/path&quot;</span>)`}}),{c(){u=s("meta"),B=d(),f=s("h1"),v=s("a"),P=s("span"),Se(w.$$.fragment),K=d(),S=s("span"),Q=r("Checkpointing"),G=d(),E=s("p"),V=r(`When training a PyTorch model with Accelerate, you may often want to save and continue a state of training. Doing so requires
saving and loading the model, optimizer, RNG generators, and the GradScaler. Inside Accelerate are two convience functions to achieve this quickly:`),N=d(),g=s("ul"),k=s("li"),X=r("Use "),j=s("a"),Y=r("save_state()"),Z=r(" for saving everything mentioned above to a folder location"),ee=d(),y=s("li"),te=r("Use "),$=s("a"),ae=r("load_state()"),se=r(" for loading everything stored from an earlier "),L=s("code"),oe=r("save_state"),T=d(),A=s("p"),re=r("It should be noted that the expectation is that those states come from the same training script, they should not be from two separate scripts."),D=d(),q=s("ul"),c=s("li"),ne=r("By using "),x=s("a"),le=r("register_for_checkpointing()"),ie=r(`, you can register custom objects to be automatically stored or loaded from the two prior functions,
so long as the object has a `),z=s("code"),ce=r("state_dict"),he=d(),I=s("strong"),pe=r("and"),de=r(" a "),R=s("code"),me=r("load_state_dict"),ue=r(" functionality. This could include objects such as a learning rate scheduler."),O=d(),C=s("p"),fe=r("Below is a brief example using checkpointing to save and reload a state during training:"),M=d(),Se(b.$$.fragment),this.h()},l(e){const i=Te('[data-svelte="svelte-1phssyn"]',document.head);u=o(i,"META",{name:!0,content:!0}),i.forEach(a),B=m(e),f=o(e,"H1",{class:!0});var H=n(f);v=o(H,"A",{id:!0,class:!0,href:!0});var ve=n(v);P=o(ve,"SPAN",{});var ge=n(P);Le(w.$$.fragment,ge),ge.forEach(a),ve.forEach(a),K=m(H),S=o(H,"SPAN",{});var ye=n(S);Q=l(ye,"Checkpointing"),ye.forEach(a),H.forEach(a),G=m(e),E=o(e,"P",{});var we=n(E);V=l(we,`When training a PyTorch model with Accelerate, you may often want to save and continue a state of training. Doing so requires
saving and loading the model, optimizer, RNG generators, and the GradScaler. Inside Accelerate are two convience functions to achieve this quickly:`),we.forEach(a),N=m(e),g=o(e,"UL",{});var J=n(g);k=o(J,"LI",{});var F=n(k);X=l(F,"Use "),j=o(F,"A",{href:!0});var ke=n(j);Y=l(ke,"save_state()"),ke.forEach(a),Z=l(F," for saving everything mentioned above to a folder location"),F.forEach(a),ee=m(J),y=o(J,"LI",{});var U=n(y);te=l(U,"Use "),$=o(U,"A",{href:!0});var be=n($);ae=l(be,"load_state()"),be.forEach(a),se=l(U," for loading everything stored from an earlier "),L=o(U,"CODE",{});var Ee=n(L);oe=l(Ee,"save_state"),Ee.forEach(a),U.forEach(a),J.forEach(a),T=m(e),A=o(e,"P",{});var je=n(A);re=l(je,"It should be noted that the expectation is that those states come from the same training script, they should not be from two separate scripts."),je.forEach(a),D=m(e),q=o(e,"UL",{});var $e=n(q);c=o($e,"LI",{});var p=n(c);ne=l(p,"By using "),x=o(p,"A",{href:!0});var Ae=n(x);le=l(Ae,"register_for_checkpointing()"),Ae.forEach(a),ie=l(p,`, you can register custom objects to be automatically stored or loaded from the two prior functions,
so long as the object has a `),z=o(p,"CODE",{});var qe=n(z);ce=l(qe,"state_dict"),qe.forEach(a),he=m(p),I=o(p,"STRONG",{});var xe=n(I);pe=l(xe,"and"),xe.forEach(a),de=l(p," a "),R=o(p,"CODE",{});var Ce=n(R);me=l(Ce,"load_state_dict"),Ce.forEach(a),ue=l(p," functionality. This could include objects such as a learning rate scheduler."),p.forEach(a),$e.forEach(a),O=m(e),C=o(e,"P",{});var Pe=n(C);fe=l(Pe,"Below is a brief example using checkpointing to save and reload a state during training:"),Pe.forEach(a),M=m(e),Le(b.$$.fragment,e),this.h()},h(){_(u,"name","hf:doc:metadata"),_(u,"content",JSON.stringify(Je)),_(v,"id","checkpointing"),_(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),_(v,"href","#checkpointing"),_(f,"class","relative group"),_(j,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator.save_state"),_($,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator.load_state"),_(x,"href","/docs/accelerate/main/en/accelerator#accelerate.Accelerator.register_for_checkpointing")},m(e,i){t(document.head,u),h(e,B,i),h(e,f,i),t(f,v),t(v,P),ze(w,P,null),t(f,K),t(f,S),t(S,Q),h(e,G,i),h(e,E,i),t(E,V),h(e,N,i),h(e,g,i),t(g,k),t(k,X),t(k,j),t(j,Y),t(k,Z),t(g,ee),t(g,y),t(y,te),t(y,$),t($,ae),t(y,se),t(y,L),t(L,oe),h(e,T,i),h(e,A,i),t(A,re),h(e,D,i),h(e,q,i),t(q,c),t(c,ne),t(c,x),t(x,le),t(c,ie),t(c,z),t(z,ce),t(c,he),t(c,I),t(I,pe),t(c,de),t(c,R),t(R,me),t(c,ue),h(e,O,i),h(e,C,i),t(C,fe),h(e,M,i),ze(b,e,i),W=!0},p:De,i(e){W||(Ie(w.$$.fragment,e),Ie(b.$$.fragment,e),W=!0)},o(e){Re(w.$$.fragment,e),Re(b.$$.fragment,e),W=!1},d(e){a(u),e&&a(B),e&&a(f),Ue(w),e&&a(G),e&&a(E),e&&a(N),e&&a(g),e&&a(T),e&&a(A),e&&a(D),e&&a(q),e&&a(O),e&&a(C),e&&a(M),Ue(b,e)}}}const Je={local:"checkpointing",title:"Checkpointing"};function Fe(_e){return Oe(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Xe extends Be{constructor(u){super();Ge(this,u,Fe,He,Ne,{})}}export{Xe as default,Je as metadata};
