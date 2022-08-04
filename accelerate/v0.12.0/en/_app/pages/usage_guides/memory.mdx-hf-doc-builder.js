import{S as Ce,i as Oe,s as Se,e as i,k as h,w as de,t as s,M as Ne,c as o,d as t,m as p,a as n,x as he,h as c,b as d,G as a,g as l,y as pe,L as Ue,q as ue,o as me,B as _e,v as qe}from"../../chunks/vendor-hf-doc-builder.js";import{I as Me}from"../../chunks/IconCopyLink-hf-doc-builder.js";import{C as je}from"../../chunks/CodeBlock-hf-doc-builder.js";function Be(fe){let u,q,m,v,T,y,F,M,V,j,k,W,B,_,C,X,Y,g,Z,ee,L,f,b,O,w,te,S,ae,D,x,re,H,A,z,ie,N,oe,ne,I,$,G,E,le,P,se,J;return y=new Me({}),w=new Me({}),$=new je({props:{code:`def training_function(args):
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
<span class="hljs-addition">+   inner_training_loop()</span>`}}),{c(){u=i("meta"),q=h(),m=i("h1"),v=i("a"),T=i("span"),de(y.$$.fragment),F=h(),M=i("span"),V=s("Memory Utilities"),j=h(),k=i("p"),W=s(`One of the most frustrating errors when it comes to running training scripts is hitting \u201CCUDA Out-of-Memory\u201D,
as the entire script needs to be restarted, progress is lost, and typically a developer would want to simply
start their script and let it run.`),B=h(),_=i("p"),C=i("code"),X=s("Accelerate"),Y=s(" provides a utility heavily based on "),g=i("a"),Z=s("toma"),ee=s(" to give this capability."),L=h(),f=i("h2"),b=i("a"),O=i("span"),de(w.$$.fragment),te=h(),S=i("span"),ae=s("find_executable_batch_size"),D=h(),x=i("p"),re=s(`This algorithm operates with exponential decay, decreasing the batch size in half after each failed run on some
training script. To use it, restructure your training function to include an inner function that includes this wrapper,
and build your dataloaders inside it. At a minimum, this could look like 4 new lines of code.`),H=h(),A=i("blockquote"),z=i("p"),ie=s("Note: The inner function "),N=i("em"),oe=s("must"),ne=s(" take in the batch size as the first parameter, but we do not pass one to it when called. The wrapper handles this for us"),I=h(),de($.$$.fragment),G=h(),E=i("p"),le=s("To find out more, check the documentation "),P=i("a"),se=s("here"),this.h()},l(e){const r=Ne('[data-svelte="svelte-1phssyn"]',document.head);u=o(r,"META",{name:!0,content:!0}),r.forEach(t),q=p(e),m=o(e,"H1",{class:!0});var K=n(m);v=o(K,"A",{id:!0,class:!0,href:!0});var ve=n(v);T=o(ve,"SPAN",{});var be=n(T);he(y.$$.fragment,be),be.forEach(t),ve.forEach(t),F=p(K),M=o(K,"SPAN",{});var ye=n(M);V=c(ye,"Memory Utilities"),ye.forEach(t),K.forEach(t),j=p(e),k=o(e,"P",{});var ge=n(k);W=c(ge,`One of the most frustrating errors when it comes to running training scripts is hitting \u201CCUDA Out-of-Memory\u201D,
as the entire script needs to be restarted, progress is lost, and typically a developer would want to simply
start their script and let it run.`),ge.forEach(t),B=p(e),_=o(e,"P",{});var U=n(_);C=o(U,"CODE",{});var we=n(C);X=c(we,"Accelerate"),we.forEach(t),Y=c(U," provides a utility heavily based on "),g=o(U,"A",{href:!0,rel:!0});var ze=n(g);Z=c(ze,"toma"),ze.forEach(t),ee=c(U," to give this capability."),U.forEach(t),L=p(e),f=o(e,"H2",{class:!0});var Q=n(f);b=o(Q,"A",{id:!0,class:!0,href:!0});var $e=n(b);O=o($e,"SPAN",{});var Ee=n(O);he(w.$$.fragment,Ee),Ee.forEach(t),$e.forEach(t),te=p(Q),S=o(Q,"SPAN",{});var ke=n(S);ae=c(ke,"find_executable_batch_size"),ke.forEach(t),Q.forEach(t),D=p(e),x=o(e,"P",{});var xe=n(x);re=c(xe,`This algorithm operates with exponential decay, decreasing the batch size in half after each failed run on some
training script. To use it, restructure your training function to include an inner function that includes this wrapper,
and build your dataloaders inside it. At a minimum, this could look like 4 new lines of code.`),xe.forEach(t),H=p(e),A=o(e,"BLOCKQUOTE",{});var Ae=n(A);z=o(Ae,"P",{});var R=n(z);ie=c(R,"Note: The inner function "),N=o(R,"EM",{});var Pe=n(N);oe=c(Pe,"must"),Pe.forEach(t),ne=c(R," take in the batch size as the first parameter, but we do not pass one to it when called. The wrapper handles this for us"),R.forEach(t),Ae.forEach(t),I=p(e),he($.$$.fragment,e),G=p(e),E=o(e,"P",{});var ce=n(E);le=c(ce,"To find out more, check the documentation "),P=o(ce,"A",{href:!0});var Te=n(P);se=c(Te,"here"),Te.forEach(t),ce.forEach(t),this.h()},h(){d(u,"name","hf:doc:metadata"),d(u,"content",JSON.stringify(Le)),d(v,"id","memory-utilities"),d(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(v,"href","#memory-utilities"),d(m,"class","relative group"),d(g,"href","https://github.com/BlackHC/toma"),d(g,"rel","nofollow"),d(b,"id","findexecutablebatchsize"),d(b,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(b,"href","#findexecutablebatchsize"),d(f,"class","relative group"),d(P,"href","package_reference/utilities#accelerate.find_executable_batch_size")},m(e,r){a(document.head,u),l(e,q,r),l(e,m,r),a(m,v),a(v,T),pe(y,T,null),a(m,F),a(m,M),a(M,V),l(e,j,r),l(e,k,r),a(k,W),l(e,B,r),l(e,_,r),a(_,C),a(C,X),a(_,Y),a(_,g),a(g,Z),a(_,ee),l(e,L,r),l(e,f,r),a(f,b),a(b,O),pe(w,O,null),a(f,te),a(f,S),a(S,ae),l(e,D,r),l(e,x,r),a(x,re),l(e,H,r),l(e,A,r),a(A,z),a(z,ie),a(z,N),a(N,oe),a(z,ne),l(e,I,r),pe($,e,r),l(e,G,r),l(e,E,r),a(E,le),a(E,P),a(P,se),J=!0},p:Ue,i(e){J||(ue(y.$$.fragment,e),ue(w.$$.fragment,e),ue($.$$.fragment,e),J=!0)},o(e){me(y.$$.fragment,e),me(w.$$.fragment,e),me($.$$.fragment,e),J=!1},d(e){t(u),e&&t(q),e&&t(m),_e(y),e&&t(j),e&&t(k),e&&t(B),e&&t(_),e&&t(L),e&&t(f),_e(w),e&&t(D),e&&t(x),e&&t(H),e&&t(A),e&&t(I),_e($,e),e&&t(G),e&&t(E)}}}const Le={local:"memory-utilities",sections:[{local:"findexecutablebatchsize",title:"find_executable_batch_size"}],title:"Memory Utilities"};function De(fe){return qe(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Je extends Ce{constructor(u){super();Oe(this,u,De,Be,Se,{})}}export{Je as default,Le as metadata};
