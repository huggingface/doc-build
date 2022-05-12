import{S as We,i as Xe,s as Ye,e as r,k as h,w as re,t as s,M as Ze,c as i,d as t,m as p,a as o,x as ie,h as l,b as d,F as a,g as c,y as oe,L as et,q as ne,o as se,B as le,v as tt}from"../chunks/vendor-a44ee391.js";import{D as at}from"../chunks/Docstring-b86362bf.js";import{C as rt}from"../chunks/CodeBlock-5dad88d8.js";import{I as Ge}from"../chunks/IconCopyLink-d11810b0.js";function it(Oe){let m,K,f,v,O,w,ce,T,de,Q,C,he,R,_,M,pe,ue,E,me,fe,V,b,g,U,$,_e,S,be,G,D,ve,W,P,x,ge,q,ye,ze,X,k,Y,u,A,we,y,Ee,I,$e,xe,L,ke,Ae,z,j,Ce,De,B,Pe,Ne,Z;return w=new Ge({}),$=new Ge({}),k=new rt({props:{code:`def training_function(args):
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
<span class="hljs-addition">+   inner_training_loop()</span>`}}),A=new at({props:{name:"accelerate.find_executable_batch_size",anchor:"accelerate.find_executable_batch_size",parameters:[{name:"function",val:": callable = None"},{name:"starting_batch_size",val:": int = 128"}],parametersDescription:[{anchor:"accelerate.find_executable_batch_size.function",description:`<strong>function</strong> (<code>callable</code>, <em>optional</em>) &#x2014;
A function to wrap`,name:"function"},{anchor:"accelerate.find_executable_batch_size.starting_batch_size",description:`<strong>starting_batch_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The batch size to try and fit into memory`,name:"starting_batch_size"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/utils/memory.py#L45"}}),{c(){m=r("meta"),K=h(),f=r("h1"),v=r("a"),O=r("span"),re(w.$$.fragment),ce=h(),T=r("span"),de=s("Memory Utilities"),Q=h(),C=r("p"),he=s(`One of the most frustrating errors when it comes to running training scripts is hitting \u201CCUDA Out-of-Memory\u201D,
as the entire script needs to be restarted, progress is lost, and typically a developer would want to simply
start their script and let it run.`),R=h(),_=r("p"),M=r("code"),pe=s("Accelerate"),ue=s(" provides a utility heavily based on "),E=r("a"),me=s("toma"),fe=s(" to give this capability."),V=h(),b=r("h2"),g=r("a"),U=r("span"),re($.$$.fragment),_e=h(),S=r("span"),be=s("find_executable_batch_size"),G=h(),D=r("p"),ve=s(`This algorithm operates with exponential decay, decreasing the batch size in half after each failed run on some
training script. To use it, restructure your training function to include an inner function that includes this wrapper,
and build your dataloaders inside it. At a minimum, this could look like 4 new lines of code.`),W=h(),P=r("blockquote"),x=r("p"),ge=s("Note: The inner function "),q=r("em"),ye=s("must"),ze=s(" take in the batch size as the first parameter, but we do not pass one to it when called. The wrapper handles this for us"),X=h(),re(k.$$.fragment),Y=h(),u=r("div"),re(A.$$.fragment),we=h(),y=r("p"),Ee=s("A basic decorator that will try to execute "),I=r("code"),$e=s("function"),xe=s(`. If it fails from exceptions related to out-of-memory or
CUDNN, the batch size is cut in half and passed to `),L=r("code"),ke=s("function"),Ae=h(),z=r("p"),j=r("code"),Ce=s("function"),De=s(" must take in a "),B=r("code"),Pe=s("batch_size"),Ne=s(" parameter as its first argument."),this.h()},l(e){const n=Ze('[data-svelte="svelte-1phssyn"]',document.head);m=i(n,"META",{name:!0,content:!0}),n.forEach(t),K=p(e),f=i(e,"H1",{class:!0});var ee=o(f);v=i(ee,"A",{id:!0,class:!0,href:!0});var Te=o(v);O=i(Te,"SPAN",{});var Me=o(O);ie(w.$$.fragment,Me),Me.forEach(t),Te.forEach(t),ce=p(ee),T=i(ee,"SPAN",{});var Ue=o(T);de=l(Ue,"Memory Utilities"),Ue.forEach(t),ee.forEach(t),Q=p(e),C=i(e,"P",{});var Se=o(C);he=l(Se,`One of the most frustrating errors when it comes to running training scripts is hitting \u201CCUDA Out-of-Memory\u201D,
as the entire script needs to be restarted, progress is lost, and typically a developer would want to simply
start their script and let it run.`),Se.forEach(t),R=p(e),_=i(e,"P",{});var H=o(_);M=i(H,"CODE",{});var qe=o(M);pe=l(qe,"Accelerate"),qe.forEach(t),ue=l(H," provides a utility heavily based on "),E=i(H,"A",{href:!0,rel:!0});var Ie=o(E);me=l(Ie,"toma"),Ie.forEach(t),fe=l(H," to give this capability."),H.forEach(t),V=p(e),b=i(e,"H2",{class:!0});var te=o(b);g=i(te,"A",{id:!0,class:!0,href:!0});var Le=o(g);U=i(Le,"SPAN",{});var je=o(U);ie($.$$.fragment,je),je.forEach(t),Le.forEach(t),_e=p(te),S=i(te,"SPAN",{});var Be=o(S);be=l(Be,"find_executable_batch_size"),Be.forEach(t),te.forEach(t),G=p(e),D=i(e,"P",{});var He=o(D);ve=l(He,`This algorithm operates with exponential decay, decreasing the batch size in half after each failed run on some
training script. To use it, restructure your training function to include an inner function that includes this wrapper,
and build your dataloaders inside it. At a minimum, this could look like 4 new lines of code.`),He.forEach(t),W=p(e),P=i(e,"BLOCKQUOTE",{});var Fe=o(P);x=i(Fe,"P",{});var ae=o(x);ge=l(ae,"Note: The inner function "),q=i(ae,"EM",{});var Je=o(q);ye=l(Je,"must"),Je.forEach(t),ze=l(ae," take in the batch size as the first parameter, but we do not pass one to it when called. The wrapper handles this for us"),ae.forEach(t),Fe.forEach(t),X=p(e),ie(k.$$.fragment,e),Y=p(e),u=i(e,"DIV",{class:!0});var N=o(u);ie(A.$$.fragment,N),we=p(N),y=i(N,"P",{});var F=o(y);Ee=l(F,"A basic decorator that will try to execute "),I=i(F,"CODE",{});var Ke=o(I);$e=l(Ke,"function"),Ke.forEach(t),xe=l(F,`. If it fails from exceptions related to out-of-memory or
CUDNN, the batch size is cut in half and passed to `),L=i(F,"CODE",{});var Qe=o(L);ke=l(Qe,"function"),Qe.forEach(t),F.forEach(t),Ae=p(N),z=i(N,"P",{});var J=o(z);j=i(J,"CODE",{});var Re=o(j);Ce=l(Re,"function"),Re.forEach(t),De=l(J," must take in a "),B=i(J,"CODE",{});var Ve=o(B);Pe=l(Ve,"batch_size"),Ve.forEach(t),Ne=l(J," parameter as its first argument."),J.forEach(t),N.forEach(t),this.h()},h(){d(m,"name","hf:doc:metadata"),d(m,"content",JSON.stringify(ot)),d(v,"id","memory-utilities"),d(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(v,"href","#memory-utilities"),d(f,"class","relative group"),d(E,"href","https://github.com/BlackHC/toma"),d(E,"rel","nofollow"),d(g,"id","accelerate.find_executable_batch_size"),d(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(g,"href","#accelerate.find_executable_batch_size"),d(b,"class","relative group"),d(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){a(document.head,m),c(e,K,n),c(e,f,n),a(f,v),a(v,O),oe(w,O,null),a(f,ce),a(f,T),a(T,de),c(e,Q,n),c(e,C,n),a(C,he),c(e,R,n),c(e,_,n),a(_,M),a(M,pe),a(_,ue),a(_,E),a(E,me),a(_,fe),c(e,V,n),c(e,b,n),a(b,g),a(g,U),oe($,U,null),a(b,_e),a(b,S),a(S,be),c(e,G,n),c(e,D,n),a(D,ve),c(e,W,n),c(e,P,n),a(P,x),a(x,ge),a(x,q),a(q,ye),a(x,ze),c(e,X,n),oe(k,e,n),c(e,Y,n),c(e,u,n),oe(A,u,null),a(u,we),a(u,y),a(y,Ee),a(y,I),a(I,$e),a(y,xe),a(y,L),a(L,ke),a(u,Ae),a(u,z),a(z,j),a(j,Ce),a(z,De),a(z,B),a(B,Pe),a(z,Ne),Z=!0},p:et,i(e){Z||(ne(w.$$.fragment,e),ne($.$$.fragment,e),ne(k.$$.fragment,e),ne(A.$$.fragment,e),Z=!0)},o(e){se(w.$$.fragment,e),se($.$$.fragment,e),se(k.$$.fragment,e),se(A.$$.fragment,e),Z=!1},d(e){t(m),e&&t(K),e&&t(f),le(w),e&&t(Q),e&&t(C),e&&t(R),e&&t(_),e&&t(V),e&&t(b),le($),e&&t(G),e&&t(D),e&&t(W),e&&t(P),e&&t(X),le(k,e),e&&t(Y),e&&t(u),le(A)}}}const ot={local:"memory-utilities",sections:[{local:"accelerate.find_executable_batch_size",title:"find_executable_batch_size"}],title:"Memory Utilities"};function nt(Oe){return tt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ht extends We{constructor(m){super();Xe(this,m,nt,it,Ye,{})}}export{ht as default,ot as metadata};
