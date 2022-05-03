import{S as Ge,i as Xe,s as Ye,e as r,k as h,w as re,t as s,M as Ze,c as i,d as t,m,a as o,x as ie,h as l,b as d,F as a,g as c,y as oe,L as et,q as ne,o as se,B as le,v as tt}from"../chunks/vendor-4918fc3c.js";import{D as at}from"../chunks/Docstring-02f0cd65.js";import{C as rt}from"../chunks/CodeBlock-99419108.js";import{I as We}from"../chunks/IconCopyLink-21d338b1.js";function it(Ne){let _,K,p,v,N,w,ce,O,de,Q,C,he,R,f,M,me,ue,x,_e,pe,V,b,g,U,E,fe,S,be,W,D,ve,G,P,$,ge,q,ye,ze,X,k,Y,u,A,we,y,xe,I,Ee,$e,L,ke,Ae,z,j,Ce,De,B,Pe,Te,Z;return w=new We({}),E=new We({}),k=new rt({props:{code:`def training_function(args):
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
<span class="hljs-addition">+   inner_training_loop()</span>`}}),A=new at({props:{name:"accelerate.memory_utils.find_executable_batch_size",anchor:"accelerate.memory_utils.find_executable_batch_size",parameters:[{name:"function",val:": callable = None"},{name:"starting_batch_size",val:": int = 128"},{name:"auto_find_batch_size",val:": bool = True"}],parametersDescription:[{anchor:"accelerate.memory_utils.find_executable_batch_size.function",description:`<strong>function</strong> (<code>callable</code>, <em>optional</em>) &#x2014;
A function to wrap`,name:"function"},{anchor:"accelerate.memory_utils.find_executable_batch_size.starting_batch_size",description:`<strong>starting_batch_size</strong> (<code>int</code>, <em>optional</em>) &#x2014;
The batch size to try and fit into memory`,name:"starting_batch_size"},{anchor:"accelerate.memory_utils.find_executable_batch_size.auto_find_batch_size",description:`<strong>auto_find_batch_size</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to try and find the executable batch size. Default is True.`,name:"auto_find_batch_size"}],source:"https://github.com/huggingface/accelerate/blob/main/src/accelerate/memory_utils.py#L45"}}),{c(){_=r("meta"),K=h(),p=r("h1"),v=r("a"),N=r("span"),re(w.$$.fragment),ce=h(),O=r("span"),de=s("Memory Utilities"),Q=h(),C=r("p"),he=s(`One of the most frustrating errors when it comes to running training scripts is hitting \u201CCUDA Out-of-Memory\u201D,
as the entire script needs to be restarted, progress is lost, and typically a developer would want to simply
start their script and let it run.`),R=h(),f=r("p"),M=r("code"),me=s("Accelerate"),ue=s(" provides a utility heavily based on "),x=r("a"),_e=s("toma"),pe=s(" to give this capability."),V=h(),b=r("h2"),g=r("a"),U=r("span"),re(E.$$.fragment),fe=h(),S=r("span"),be=s("find_executable_batch_size"),W=h(),D=r("p"),ve=s(`This algorithm operates with exponential decay, decreasing the batch size in half after each failed run on some
training script. To use it, restructure your training function to include an inner function that includes this wrapper,
and build your dataloaders inside it. At a minimum, this could look like 4 new lines of code.`),G=h(),P=r("blockquote"),$=r("p"),ge=s("Note: The inner function "),q=r("em"),ye=s("must"),ze=s(" take in the batch size as the first parameter, but we do not pass one to it when called. The wrapper handles this for us"),X=h(),re(k.$$.fragment),Y=h(),u=r("div"),re(A.$$.fragment),we=h(),y=r("p"),xe=s("A basic decorator that will try to execute "),I=r("code"),Ee=s("function"),$e=s(`. If it fails from exceptions related to out-of-memory or
CUDNN, the batch size is cut in half and passed to `),L=r("code"),ke=s("function"),Ae=h(),z=r("p"),j=r("code"),Ce=s("function"),De=s(" must take in a "),B=r("code"),Pe=s("batch_size"),Te=s(" parameter as its first argument."),this.h()},l(e){const n=Ze('[data-svelte="svelte-1phssyn"]',document.head);_=i(n,"META",{name:!0,content:!0}),n.forEach(t),K=m(e),p=i(e,"H1",{class:!0});var ee=o(p);v=i(ee,"A",{id:!0,class:!0,href:!0});var Oe=o(v);N=i(Oe,"SPAN",{});var Me=o(N);ie(w.$$.fragment,Me),Me.forEach(t),Oe.forEach(t),ce=m(ee),O=i(ee,"SPAN",{});var Ue=o(O);de=l(Ue,"Memory Utilities"),Ue.forEach(t),ee.forEach(t),Q=m(e),C=i(e,"P",{});var Se=o(C);he=l(Se,`One of the most frustrating errors when it comes to running training scripts is hitting \u201CCUDA Out-of-Memory\u201D,
as the entire script needs to be restarted, progress is lost, and typically a developer would want to simply
start their script and let it run.`),Se.forEach(t),R=m(e),f=i(e,"P",{});var H=o(f);M=i(H,"CODE",{});var qe=o(M);me=l(qe,"Accelerate"),qe.forEach(t),ue=l(H," provides a utility heavily based on "),x=i(H,"A",{href:!0,rel:!0});var Ie=o(x);_e=l(Ie,"toma"),Ie.forEach(t),pe=l(H," to give this capability."),H.forEach(t),V=m(e),b=i(e,"H2",{class:!0});var te=o(b);g=i(te,"A",{id:!0,class:!0,href:!0});var Le=o(g);U=i(Le,"SPAN",{});var je=o(U);ie(E.$$.fragment,je),je.forEach(t),Le.forEach(t),fe=m(te),S=i(te,"SPAN",{});var Be=o(S);be=l(Be,"find_executable_batch_size"),Be.forEach(t),te.forEach(t),W=m(e),D=i(e,"P",{});var He=o(D);ve=l(He,`This algorithm operates with exponential decay, decreasing the batch size in half after each failed run on some
training script. To use it, restructure your training function to include an inner function that includes this wrapper,
and build your dataloaders inside it. At a minimum, this could look like 4 new lines of code.`),He.forEach(t),G=m(e),P=i(e,"BLOCKQUOTE",{});var Fe=o(P);$=i(Fe,"P",{});var ae=o($);ge=l(ae,"Note: The inner function "),q=i(ae,"EM",{});var Je=o(q);ye=l(Je,"must"),Je.forEach(t),ze=l(ae," take in the batch size as the first parameter, but we do not pass one to it when called. The wrapper handles this for us"),ae.forEach(t),Fe.forEach(t),X=m(e),ie(k.$$.fragment,e),Y=m(e),u=i(e,"DIV",{class:!0});var T=o(u);ie(A.$$.fragment,T),we=m(T),y=i(T,"P",{});var F=o(y);xe=l(F,"A basic decorator that will try to execute "),I=i(F,"CODE",{});var Ke=o(I);Ee=l(Ke,"function"),Ke.forEach(t),$e=l(F,`. If it fails from exceptions related to out-of-memory or
CUDNN, the batch size is cut in half and passed to `),L=i(F,"CODE",{});var Qe=o(L);ke=l(Qe,"function"),Qe.forEach(t),F.forEach(t),Ae=m(T),z=i(T,"P",{});var J=o(z);j=i(J,"CODE",{});var Re=o(j);Ce=l(Re,"function"),Re.forEach(t),De=l(J," must take in a "),B=i(J,"CODE",{});var Ve=o(B);Pe=l(Ve,"batch_size"),Ve.forEach(t),Te=l(J," parameter as its first argument."),J.forEach(t),T.forEach(t),this.h()},h(){d(_,"name","hf:doc:metadata"),d(_,"content",JSON.stringify(ot)),d(v,"id","memory-utilities"),d(v,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(v,"href","#memory-utilities"),d(p,"class","relative group"),d(x,"href","https://github.com/BlackHC/toma"),d(x,"rel","nofollow"),d(g,"id","accelerate.memory_utils.find_executable_batch_size"),d(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(g,"href","#accelerate.memory_utils.find_executable_batch_size"),d(b,"class","relative group"),d(u,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(e,n){a(document.head,_),c(e,K,n),c(e,p,n),a(p,v),a(v,N),oe(w,N,null),a(p,ce),a(p,O),a(O,de),c(e,Q,n),c(e,C,n),a(C,he),c(e,R,n),c(e,f,n),a(f,M),a(M,me),a(f,ue),a(f,x),a(x,_e),a(f,pe),c(e,V,n),c(e,b,n),a(b,g),a(g,U),oe(E,U,null),a(b,fe),a(b,S),a(S,be),c(e,W,n),c(e,D,n),a(D,ve),c(e,G,n),c(e,P,n),a(P,$),a($,ge),a($,q),a(q,ye),a($,ze),c(e,X,n),oe(k,e,n),c(e,Y,n),c(e,u,n),oe(A,u,null),a(u,we),a(u,y),a(y,xe),a(y,I),a(I,Ee),a(y,$e),a(y,L),a(L,ke),a(u,Ae),a(u,z),a(z,j),a(j,Ce),a(z,De),a(z,B),a(B,Pe),a(z,Te),Z=!0},p:et,i(e){Z||(ne(w.$$.fragment,e),ne(E.$$.fragment,e),ne(k.$$.fragment,e),ne(A.$$.fragment,e),Z=!0)},o(e){se(w.$$.fragment,e),se(E.$$.fragment,e),se(k.$$.fragment,e),se(A.$$.fragment,e),Z=!1},d(e){t(_),e&&t(K),e&&t(p),le(w),e&&t(Q),e&&t(C),e&&t(R),e&&t(f),e&&t(V),e&&t(b),le(E),e&&t(W),e&&t(D),e&&t(G),e&&t(P),e&&t(X),le(k,e),e&&t(Y),e&&t(u),le(A)}}}const ot={local:"memory-utilities",sections:[{local:"accelerate.memory_utils.find_executable_batch_size",title:"find_executable_batch_size"}],title:"Memory Utilities"};function nt(Ne){return tt(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ht extends Ge{constructor(_){super();Xe(this,_,nt,it,Ye,{})}}export{ht as default,ot as metadata};
