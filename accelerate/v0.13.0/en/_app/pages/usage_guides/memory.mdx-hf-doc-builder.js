import{S as Ge,i as Re,s as Je,e as r,k as h,w as we,t as l,M as Ke,c as i,d as t,m as u,a as n,x as ze,h as s,b as d,G as a,g as c,y as Ee,L as Qe,q as $e,o as ke,B as xe,v as Ve}from"../../chunks/vendor-hf-doc-builder.js";import{I as Fe}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as We}from"../../chunks/CodeBlock-hf-doc-builder.js";function Xe(Ae){let m,I,f,b,M,w,ee,O,te,L,x,ae,H,_,S,re,ie,z,oe,ne,F,v,y,U,E,le,N,se,G,A,ce,R,P,$,de,q,he,ue,J,p,pe,D,me,fe,j,_e,ve,K,k,Q,g,be,T,ye,ge,V;return w=new Fe({}),E=new Fe({}),k=new We({props:{code:`def training_function(args):
    accelerator = Accelerator()

+   @find_executable_batch_size(starting_batch_size=args.batch_size)
+   def inner_training_loop(batch_size):
+       nonlocal accelerator # Ensure they can be used in our context
+       accelerator.free_memory() # Free all lingering references
        model = get_model()
        model.to(accelerator.device)
        optimizer = get_optimizer()
        train_dataloader, eval_dataloader = get_dataloaders(accelerator, batch_size)
        lr_scheduler = get_scheduler(
            optimizer, 
            num_training_steps=len(train_dataloader)*num_epochs
        )
        model, optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(
            model, optimizer, train_dataloader, eval_dataloader, lr_scheduler
        )
        train(model, optimizer, train_dataloader, lr_scheduler)
        validate(model, eval_dataloader)
+   inner_training_loop()`,highlighted:`def training_function(args):
    accelerator = Accelerator()

<span class="hljs-addition">+   @find_executable_batch_size(starting_batch_size=args.batch_size)</span>
<span class="hljs-addition">+   def inner_training_loop(batch_size):</span>
<span class="hljs-addition">+       nonlocal accelerator # Ensure they can be used in our context</span>
<span class="hljs-addition">+       accelerator.free_memory() # Free all lingering references</span>
        model = get_model()
        model.to(accelerator.device)
        optimizer = get_optimizer()
        train_dataloader, eval_dataloader = get_dataloaders(accelerator, batch_size)
        lr_scheduler = get_scheduler(
            optimizer, 
            num_training_steps=len(train_dataloader)*num_epochs
        )
        model, optimizer, train_dataloader, eval_dataloader, lr_scheduler = accelerator.prepare(
            model, optimizer, train_dataloader, eval_dataloader, lr_scheduler
        )
        train(model, optimizer, train_dataloader, lr_scheduler)
        validate(model, eval_dataloader)
<span class="hljs-addition">+   inner_training_loop()</span>`}}),{c(){m=r("meta"),I=h(),f=r("h1"),b=r("a"),M=r("span"),we(w.$$.fragment),ee=h(),O=r("span"),te=l("Memory Utilities"),L=h(),x=r("p"),ae=l(`One of the most frustrating errors when it comes to running training scripts is hitting \u201CCUDA Out-of-Memory\u201D,
as the entire script needs to be restarted, progress is lost, and typically a developer would want to simply
start their script and let it run.`),H=h(),_=r("p"),S=r("code"),re=l("Accelerate"),ie=l(" provides a utility heavily based on "),z=r("a"),oe=l("toma"),ne=l(" to give this capability."),F=h(),v=r("h2"),y=r("a"),U=r("span"),we(E.$$.fragment),le=h(),N=r("span"),se=l("find_executable_batch_size"),G=h(),A=r("p"),ce=l(`This algorithm operates with exponential decay, decreasing the batch size in half after each failed run on some
training script. To use it, restructure your training function to include an inner function that includes this wrapper,
and build your dataloaders inside it. At a minimum, this could look like 4 new lines of code.`),R=h(),P=r("blockquote"),$=r("p"),de=l("Note: The inner function "),q=r("em"),he=l("must"),ue=l(" take in the batch size as the first parameter, but we do not pass one to it when called. The wrapper handles this for us"),J=h(),p=r("p"),pe=l("It should also be noted that anything which will consume CUDA memory and passed to the "),D=r("code"),me=l("accelerator"),fe=h(),j=r("strong"),_e=l("must"),ve=l(` be declared inside the inner function,
such as models and optimizers.`),K=h(),we(k.$$.fragment),Q=h(),g=r("p"),be=l("To find out more, check the documentation "),T=r("a"),ye=l("here"),ge=l("."),this.h()},l(e){const o=Ke('[data-svelte="svelte-1phssyn"]',document.head);m=i(o,"META",{name:!0,content:!0}),o.forEach(t),I=u(e),f=i(e,"H1",{class:!0});var W=n(f);b=i(W,"A",{id:!0,class:!0,href:!0});var Pe=n(b);M=i(Pe,"SPAN",{});var Te=n(M);ze(w.$$.fragment,Te),Te.forEach(t),Pe.forEach(t),ee=u(W),O=i(W,"SPAN",{});var Ce=n(O);te=s(Ce,"Memory Utilities"),Ce.forEach(t),W.forEach(t),L=u(e),x=i(e,"P",{});var Me=n(x);ae=s(Me,`One of the most frustrating errors when it comes to running training scripts is hitting \u201CCUDA Out-of-Memory\u201D,
as the entire script needs to be restarted, progress is lost, and typically a developer would want to simply
start their script and let it run.`),Me.forEach(t),H=u(e),_=i(e,"P",{});var B=n(_);S=i(B,"CODE",{});var Oe=n(S);re=s(Oe,"Accelerate"),Oe.forEach(t),ie=s(B," provides a utility heavily based on "),z=i(B,"A",{href:!0,rel:!0});var Se=n(z);oe=s(Se,"toma"),Se.forEach(t),ne=s(B," to give this capability."),B.forEach(t),F=u(e),v=i(e,"H2",{class:!0});var X=n(v);y=i(X,"A",{id:!0,class:!0,href:!0});var Ue=n(y);U=i(Ue,"SPAN",{});var Ne=n(U);ze(E.$$.fragment,Ne),Ne.forEach(t),Ue.forEach(t),le=u(X),N=i(X,"SPAN",{});var qe=n(N);se=s(qe,"find_executable_batch_size"),qe.forEach(t),X.forEach(t),G=u(e),A=i(e,"P",{});var De=n(A);ce=s(De,`This algorithm operates with exponential decay, decreasing the batch size in half after each failed run on some
training script. To use it, restructure your training function to include an inner function that includes this wrapper,
and build your dataloaders inside it. At a minimum, this could look like 4 new lines of code.`),De.forEach(t),R=u(e),P=i(e,"BLOCKQUOTE",{});var je=n(P);$=i(je,"P",{});var Y=n($);de=s(Y,"Note: The inner function "),q=i(Y,"EM",{});var Be=n(q);he=s(Be,"must"),Be.forEach(t),ue=s(Y," take in the batch size as the first parameter, but we do not pass one to it when called. The wrapper handles this for us"),Y.forEach(t),je.forEach(t),J=u(e),p=i(e,"P",{});var C=n(p);pe=s(C,"It should also be noted that anything which will consume CUDA memory and passed to the "),D=i(C,"CODE",{});var Ie=n(D);me=s(Ie,"accelerator"),Ie.forEach(t),fe=u(C),j=i(C,"STRONG",{});var Le=n(j);_e=s(Le,"must"),Le.forEach(t),ve=s(C,` be declared inside the inner function,
such as models and optimizers.`),C.forEach(t),K=u(e),ze(k.$$.fragment,e),Q=u(e),g=i(e,"P",{});var Z=n(g);be=s(Z,"To find out more, check the documentation "),T=i(Z,"A",{href:!0});var He=n(T);ye=s(He,"here"),He.forEach(t),ge=s(Z,"."),Z.forEach(t),this.h()},h(){d(m,"name","hf:doc:metadata"),d(m,"content",JSON.stringify(Ye)),d(b,"id","memory-utilities"),d(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(b,"href","#memory-utilities"),d(f,"class","relative group"),d(z,"href","https://github.com/BlackHC/toma"),d(z,"rel","nofollow"),d(y,"id","findexecutablebatchsize"),d(y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(y,"href","#findexecutablebatchsize"),d(v,"class","relative group"),d(T,"href","../package_reference/utilities#accelerate.find_executable_batch_size")},m(e,o){a(document.head,m),c(e,I,o),c(e,f,o),a(f,b),a(b,M),Ee(w,M,null),a(f,ee),a(f,O),a(O,te),c(e,L,o),c(e,x,o),a(x,ae),c(e,H,o),c(e,_,o),a(_,S),a(S,re),a(_,ie),a(_,z),a(z,oe),a(_,ne),c(e,F,o),c(e,v,o),a(v,y),a(y,U),Ee(E,U,null),a(v,le),a(v,N),a(N,se),c(e,G,o),c(e,A,o),a(A,ce),c(e,R,o),c(e,P,o),a(P,$),a($,de),a($,q),a(q,he),a($,ue),c(e,J,o),c(e,p,o),a(p,pe),a(p,D),a(D,me),a(p,fe),a(p,j),a(j,_e),a(p,ve),c(e,K,o),Ee(k,e,o),c(e,Q,o),c(e,g,o),a(g,be),a(g,T),a(T,ye),a(g,ge),V=!0},p:Qe,i(e){V||($e(w.$$.fragment,e),$e(E.$$.fragment,e),$e(k.$$.fragment,e),V=!0)},o(e){ke(w.$$.fragment,e),ke(E.$$.fragment,e),ke(k.$$.fragment,e),V=!1},d(e){t(m),e&&t(I),e&&t(f),xe(w),e&&t(L),e&&t(x),e&&t(H),e&&t(_),e&&t(F),e&&t(v),xe(E),e&&t(G),e&&t(A),e&&t(R),e&&t(P),e&&t(J),e&&t(p),e&&t(K),xe(k,e),e&&t(Q),e&&t(g)}}}const Ye={local:"memory-utilities",sections:[{local:"findexecutablebatchsize",title:"find_executable_batch_size"}],title:"Memory Utilities"};function Ze(Ae){return Ve(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class rt extends Ge{constructor(m){super();Re(this,m,Ze,Xe,Je,{})}}export{rt as default,Ye as metadata};
