import{S as Oe,i as Se,s as Ne,e as i,k as h,w as he,t as s,M as Ue,c as o,d as t,m as p,a as n,x as pe,h as c,b as d,G as a,g as l,y as ue,L as qe,q as me,o as _e,B as fe,v as je}from"../../chunks/vendor-hf-doc-builder.js";import{I as Ce}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as Be}from"../../chunks/CodeBlock-hf-doc-builder.js";function Le(ve){let u,q,m,v,T,g,V,M,W,j,k,X,B,_,C,Y,Z,w,ee,te,L,f,b,O,z,ae,S,re,D,x,ie,H,A,$,oe,N,ne,le,I,E,G,y,se,P,ce,de,J;return g=new Ce({}),z=new Ce({}),E=new Be({props:{code:`def training_function(args):
    accelerator = Accelerator()
    model = get_model()
    model.to(accelerator.device)
    optimizer = get_optimizer()

+   @find_executable_batch_size(starting_batch_size=args.batch_size)
+   def inner_training_loop(batch_size):
+       nonlocal model, optimizer # Ensure they can be used in our context
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
    model = get_model()
    model.to(accelerator.device)
    optimizer = get_optimizer()

<span class="hljs-addition">+   @find_executable_batch_size(starting_batch_size=args.batch_size)</span>
<span class="hljs-addition">+   def inner_training_loop(batch_size):</span>
<span class="hljs-addition">+       nonlocal model, optimizer # Ensure they can be used in our context</span>
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
<span class="hljs-addition">+   inner_training_loop()</span>`}}),{c(){u=i("meta"),q=h(),m=i("h1"),v=i("a"),T=i("span"),he(g.$$.fragment),V=h(),M=i("span"),W=s("Memory Utilities"),j=h(),k=i("p"),X=s(`One of the most frustrating errors when it comes to running training scripts is hitting \u201CCUDA Out-of-Memory\u201D,
as the entire script needs to be restarted, progress is lost, and typically a developer would want to simply
start their script and let it run.`),B=h(),_=i("p"),C=i("code"),Y=s("Accelerate"),Z=s(" provides a utility heavily based on "),w=i("a"),ee=s("toma"),te=s(" to give this capability."),L=h(),f=i("h2"),b=i("a"),O=i("span"),he(z.$$.fragment),ae=h(),S=i("span"),re=s("find_executable_batch_size"),D=h(),x=i("p"),ie=s(`This algorithm operates with exponential decay, decreasing the batch size in half after each failed run on some
training script. To use it, restructure your training function to include an inner function that includes this wrapper,
and build your dataloaders inside it. At a minimum, this could look like 4 new lines of code.`),H=h(),A=i("blockquote"),$=i("p"),oe=s("Note: The inner function "),N=i("em"),ne=s("must"),le=s(" take in the batch size as the first parameter, but we do not pass one to it when called. The wrapper handles this for us"),I=h(),he(E.$$.fragment),G=h(),y=i("p"),se=s("To find out more, check the documentation "),P=i("a"),ce=s("here"),de=s("."),this.h()},l(e){const r=Ue('[data-svelte="svelte-1phssyn"]',document.head);u=o(r,"META",{name:!0,content:!0}),r.forEach(t),q=p(e),m=o(e,"H1",{class:!0});var K=n(m);v=o(K,"A",{id:!0,class:!0,href:!0});var be=n(v);T=o(be,"SPAN",{});var ye=n(T);pe(g.$$.fragment,ye),ye.forEach(t),be.forEach(t),V=p(K),M=o(K,"SPAN",{});var ge=n(M);W=c(ge,"Memory Utilities"),ge.forEach(t),K.forEach(t),j=p(e),k=o(e,"P",{});var we=n(k);X=c(we,`One of the most frustrating errors when it comes to running training scripts is hitting \u201CCUDA Out-of-Memory\u201D,
as the entire script needs to be restarted, progress is lost, and typically a developer would want to simply
start their script and let it run.`),we.forEach(t),B=p(e),_=o(e,"P",{});var U=n(_);C=o(U,"CODE",{});var ze=n(C);Y=c(ze,"Accelerate"),ze.forEach(t),Z=c(U," provides a utility heavily based on "),w=o(U,"A",{href:!0,rel:!0});var $e=n(w);ee=c($e,"toma"),$e.forEach(t),te=c(U," to give this capability."),U.forEach(t),L=p(e),f=o(e,"H2",{class:!0});var Q=n(f);b=o(Q,"A",{id:!0,class:!0,href:!0});var Ee=n(b);O=o(Ee,"SPAN",{});var ke=n(O);pe(z.$$.fragment,ke),ke.forEach(t),Ee.forEach(t),ae=p(Q),S=o(Q,"SPAN",{});var xe=n(S);re=c(xe,"find_executable_batch_size"),xe.forEach(t),Q.forEach(t),D=p(e),x=o(e,"P",{});var Ae=n(x);ie=c(Ae,`This algorithm operates with exponential decay, decreasing the batch size in half after each failed run on some
training script. To use it, restructure your training function to include an inner function that includes this wrapper,
and build your dataloaders inside it. At a minimum, this could look like 4 new lines of code.`),Ae.forEach(t),H=p(e),A=o(e,"BLOCKQUOTE",{});var Pe=n(A);$=o(Pe,"P",{});var R=n($);oe=c(R,"Note: The inner function "),N=o(R,"EM",{});var Te=n(N);ne=c(Te,"must"),Te.forEach(t),le=c(R," take in the batch size as the first parameter, but we do not pass one to it when called. The wrapper handles this for us"),R.forEach(t),Pe.forEach(t),I=p(e),pe(E.$$.fragment,e),G=p(e),y=o(e,"P",{});var F=n(y);se=c(F,"To find out more, check the documentation "),P=o(F,"A",{href:!0});var Me=n(P);ce=c(Me,"here"),Me.forEach(t),de=c(F,"."),F.forEach(t),this.h()},h(){d(u,"name","hf:doc:metadata"),d(u,"content",JSON.stringify(De)),d(v,"id","memory-utilities"),d(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(v,"href","#memory-utilities"),d(m,"class","relative group"),d(w,"href","https://github.com/BlackHC/toma"),d(w,"rel","nofollow"),d(b,"id","findexecutablebatchsize"),d(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(b,"href","#findexecutablebatchsize"),d(f,"class","relative group"),d(P,"href","../package_reference/utilities#accelerate.find_executable_batch_size")},m(e,r){a(document.head,u),l(e,q,r),l(e,m,r),a(m,v),a(v,T),ue(g,T,null),a(m,V),a(m,M),a(M,W),l(e,j,r),l(e,k,r),a(k,X),l(e,B,r),l(e,_,r),a(_,C),a(C,Y),a(_,Z),a(_,w),a(w,ee),a(_,te),l(e,L,r),l(e,f,r),a(f,b),a(b,O),ue(z,O,null),a(f,ae),a(f,S),a(S,re),l(e,D,r),l(e,x,r),a(x,ie),l(e,H,r),l(e,A,r),a(A,$),a($,oe),a($,N),a(N,ne),a($,le),l(e,I,r),ue(E,e,r),l(e,G,r),l(e,y,r),a(y,se),a(y,P),a(P,ce),a(y,de),J=!0},p:qe,i(e){J||(me(g.$$.fragment,e),me(z.$$.fragment,e),me(E.$$.fragment,e),J=!0)},o(e){_e(g.$$.fragment,e),_e(z.$$.fragment,e),_e(E.$$.fragment,e),J=!1},d(e){t(u),e&&t(q),e&&t(m),fe(g),e&&t(j),e&&t(k),e&&t(B),e&&t(_),e&&t(L),e&&t(f),fe(z),e&&t(D),e&&t(x),e&&t(H),e&&t(A),e&&t(I),fe(E,e),e&&t(G),e&&t(y)}}}const De={local:"memory-utilities",sections:[{local:"findexecutablebatchsize",title:"find_executable_batch_size"}],title:"Memory Utilities"};function He(ve){return je(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Ke extends Oe{constructor(u){super();Se(this,u,He,Le,Ne,{})}}export{Ke as default,De as metadata};
