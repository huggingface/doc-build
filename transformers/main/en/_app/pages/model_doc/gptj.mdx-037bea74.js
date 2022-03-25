import{S as eg,i as tg,s as og,e as a,k as l,w as k,t as n,M as ng,c as r,d as t,m as d,a as i,x as w,h as s,b as c,F as e,g as u,y as b,q as y,o as P,B as $,v as sg}from"../../chunks/vendor-6b77c823.js";import{T as Ke}from"../../chunks/Tip-39098574.js";import{D as re}from"../../chunks/Docstring-abef54e3.js";import{C as he}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Xe}from"../../chunks/IconCopyLink-7a11ce68.js";function ag(I){let p,F,f,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,v)},d(T){T&&t(p)}}}function rg(I){let p,F,f,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,v)},d(T){T&&t(p)}}}function ig(I){let p,F,f,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,v)},d(T){T&&t(p)}}}function lg(I){let p,F,f,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,v)},d(T){T&&t(p)}}}function dg(I){let p,F,f,_,v,T,g,j,ue,K,E,X,O,Z,me,B,fe,ie,L,A,ee,te,J,x,ge,U,le,Y,H,oe,_e,M,de,S,Te,ce,N,W,ve,q,ke,R,se;return{c(){p=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),_=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),j=a("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),fe=n("model(inputs)"),ie=n("."),L=l(),A=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=l(),J=a("ul"),x=a("li"),ge=n("a single Tensor with "),U=a("code"),le=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),_e=l(),M=a("li"),de=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=a("code"),Te=n("model([input_ids, attention_mask])"),ce=n(" or "),N=a("code"),W=n("model([input_ids, attention_mask, token_type_ids])"),ve=l(),q=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var G=i(p);F=s(G,"TF 2.0 models accepts two formats as inputs:"),G.forEach(t),f=d(h),_=r(h,"UL",{});var V=i(_);v=r(V,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),g=d(V),j=r(V,"LI",{});var Ie=i(j);ue=s(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),V.forEach(t),K=d(h),E=r(h,"P",{});var z=i(E);X=s(z,"This second option is useful when using "),O=r(z,"CODE",{});var Le=i(O);Z=s(Le,"tf.keras.Model.fit"),Le.forEach(t),me=s(z,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(z,"CODE",{});var Se=i(B);fe=s(Se,"model(inputs)"),Se.forEach(t),ie=s(z,"."),z.forEach(t),L=d(h),A=r(h,"P",{});var xe=i(A);ee=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),te=d(h),J=r(h,"UL",{});var C=i(J);x=r(C,"LI",{});var Q=i(x);ge=s(Q,"a single Tensor with "),U=r(Q,"CODE",{});var pe=i(U);le=s(pe,"input_ids"),pe.forEach(t),Y=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);oe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),_e=d(C),M=r(C,"LI",{});var D=i(M);de=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=r(D,"CODE",{});var Ne=i(S);Te=s(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ce=s(D," or "),N=r(D,"CODE",{});var we=i(N);W=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),D.forEach(t),ve=d(C),q=r(C,"LI",{});var be=i(q);ke=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(be,"CODE",{});var De=i(R);se=s(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),be.forEach(t),C.forEach(t)},m(h,G){u(h,p,G),e(p,F),u(h,f,G),u(h,_,G),e(_,v),e(v,T),e(_,g),e(_,j),e(j,ue),u(h,K,G),u(h,E,G),e(E,X),e(E,O),e(O,Z),e(E,me),e(E,B),e(B,fe),e(E,ie),u(h,L,G),u(h,A,G),e(A,ee),u(h,te,G),u(h,J,G),e(J,x),e(x,ge),e(x,U),e(U,le),e(x,Y),e(x,H),e(H,oe),e(J,_e),e(J,M),e(M,de),e(M,S),e(S,Te),e(M,ce),e(M,N),e(N,W),e(J,ve),e(J,q),e(q,ke),e(q,R),e(R,se)},d(h){h&&t(p),h&&t(f),h&&t(_),h&&t(K),h&&t(E),h&&t(L),h&&t(A),h&&t(te),h&&t(J)}}}function cg(I){let p,F,f,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,v)},d(T){T&&t(p)}}}function pg(I){let p,F,f,_,v,T,g,j,ue,K,E,X,O,Z,me,B,fe,ie,L,A,ee,te,J,x,ge,U,le,Y,H,oe,_e,M,de,S,Te,ce,N,W,ve,q,ke,R,se;return{c(){p=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),_=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),j=a("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),fe=n("model(inputs)"),ie=n("."),L=l(),A=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=l(),J=a("ul"),x=a("li"),ge=n("a single Tensor with "),U=a("code"),le=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),_e=l(),M=a("li"),de=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=a("code"),Te=n("model([input_ids, attention_mask])"),ce=n(" or "),N=a("code"),W=n("model([input_ids, attention_mask, token_type_ids])"),ve=l(),q=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var G=i(p);F=s(G,"TF 2.0 models accepts two formats as inputs:"),G.forEach(t),f=d(h),_=r(h,"UL",{});var V=i(_);v=r(V,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),g=d(V),j=r(V,"LI",{});var Ie=i(j);ue=s(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),V.forEach(t),K=d(h),E=r(h,"P",{});var z=i(E);X=s(z,"This second option is useful when using "),O=r(z,"CODE",{});var Le=i(O);Z=s(Le,"tf.keras.Model.fit"),Le.forEach(t),me=s(z,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(z,"CODE",{});var Se=i(B);fe=s(Se,"model(inputs)"),Se.forEach(t),ie=s(z,"."),z.forEach(t),L=d(h),A=r(h,"P",{});var xe=i(A);ee=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),te=d(h),J=r(h,"UL",{});var C=i(J);x=r(C,"LI",{});var Q=i(x);ge=s(Q,"a single Tensor with "),U=r(Q,"CODE",{});var pe=i(U);le=s(pe,"input_ids"),pe.forEach(t),Y=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);oe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),_e=d(C),M=r(C,"LI",{});var D=i(M);de=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=r(D,"CODE",{});var Ne=i(S);Te=s(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ce=s(D," or "),N=r(D,"CODE",{});var we=i(N);W=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),D.forEach(t),ve=d(C),q=r(C,"LI",{});var be=i(q);ke=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(be,"CODE",{});var De=i(R);se=s(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),be.forEach(t),C.forEach(t)},m(h,G){u(h,p,G),e(p,F),u(h,f,G),u(h,_,G),e(_,v),e(v,T),e(_,g),e(_,j),e(j,ue),u(h,K,G),u(h,E,G),e(E,X),e(E,O),e(O,Z),e(E,me),e(E,B),e(B,fe),e(E,ie),u(h,L,G),u(h,A,G),e(A,ee),u(h,te,G),u(h,J,G),e(J,x),e(x,ge),e(x,U),e(U,le),e(x,Y),e(x,H),e(H,oe),e(J,_e),e(J,M),e(M,de),e(M,S),e(S,Te),e(M,ce),e(M,N),e(N,W),e(J,ve),e(J,q),e(q,ke),e(q,R),e(R,se)},d(h){h&&t(p),h&&t(f),h&&t(_),h&&t(K),h&&t(E),h&&t(L),h&&t(A),h&&t(te),h&&t(J)}}}function hg(I){let p,F,f,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,v)},d(T){T&&t(p)}}}function ug(I){let p,F,f,_,v,T,g,j,ue,K,E,X,O,Z,me,B,fe,ie,L,A,ee,te,J,x,ge,U,le,Y,H,oe,_e,M,de,S,Te,ce,N,W,ve,q,ke,R,se;return{c(){p=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),_=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),j=a("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),fe=n("model(inputs)"),ie=n("."),L=l(),A=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=l(),J=a("ul"),x=a("li"),ge=n("a single Tensor with "),U=a("code"),le=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),_e=l(),M=a("li"),de=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=a("code"),Te=n("model([input_ids, attention_mask])"),ce=n(" or "),N=a("code"),W=n("model([input_ids, attention_mask, token_type_ids])"),ve=l(),q=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var G=i(p);F=s(G,"TF 2.0 models accepts two formats as inputs:"),G.forEach(t),f=d(h),_=r(h,"UL",{});var V=i(_);v=r(V,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),g=d(V),j=r(V,"LI",{});var Ie=i(j);ue=s(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),V.forEach(t),K=d(h),E=r(h,"P",{});var z=i(E);X=s(z,"This second option is useful when using "),O=r(z,"CODE",{});var Le=i(O);Z=s(Le,"tf.keras.Model.fit"),Le.forEach(t),me=s(z,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(z,"CODE",{});var Se=i(B);fe=s(Se,"model(inputs)"),Se.forEach(t),ie=s(z,"."),z.forEach(t),L=d(h),A=r(h,"P",{});var xe=i(A);ee=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),te=d(h),J=r(h,"UL",{});var C=i(J);x=r(C,"LI",{});var Q=i(x);ge=s(Q,"a single Tensor with "),U=r(Q,"CODE",{});var pe=i(U);le=s(pe,"input_ids"),pe.forEach(t),Y=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);oe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),_e=d(C),M=r(C,"LI",{});var D=i(M);de=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=r(D,"CODE",{});var Ne=i(S);Te=s(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ce=s(D," or "),N=r(D,"CODE",{});var we=i(N);W=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),D.forEach(t),ve=d(C),q=r(C,"LI",{});var be=i(q);ke=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(be,"CODE",{});var De=i(R);se=s(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),be.forEach(t),C.forEach(t)},m(h,G){u(h,p,G),e(p,F),u(h,f,G),u(h,_,G),e(_,v),e(v,T),e(_,g),e(_,j),e(j,ue),u(h,K,G),u(h,E,G),e(E,X),e(E,O),e(O,Z),e(E,me),e(E,B),e(B,fe),e(E,ie),u(h,L,G),u(h,A,G),e(A,ee),u(h,te,G),u(h,J,G),e(J,x),e(x,ge),e(x,U),e(U,le),e(x,Y),e(x,H),e(H,oe),e(J,_e),e(J,M),e(M,de),e(M,S),e(S,Te),e(M,ce),e(M,N),e(N,W),e(J,ve),e(J,q),e(q,ke),e(q,R),e(R,se)},d(h){h&&t(p),h&&t(f),h&&t(_),h&&t(K),h&&t(E),h&&t(L),h&&t(A),h&&t(te),h&&t(J)}}}function mg(I){let p,F,f,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,v)},d(T){T&&t(p)}}}function fg(I){let p,F,f,_,v,T,g,j,ue,K,E,X,O,Z,me,B,fe,ie,L,A,ee,te,J,x,ge,U,le,Y,H,oe,_e,M,de,S,Te,ce,N,W,ve,q,ke,R,se;return{c(){p=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),_=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),j=a("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),E=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),B=a("code"),fe=n("model(inputs)"),ie=n("."),L=l(),A=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=l(),J=a("ul"),x=a("li"),ge=n("a single Tensor with "),U=a("code"),le=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),_e=l(),M=a("li"),de=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=a("code"),Te=n("model([input_ids, attention_mask])"),ce=n(" or "),N=a("code"),W=n("model([input_ids, attention_mask, token_type_ids])"),ve=l(),q=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var G=i(p);F=s(G,"TF 2.0 models accepts two formats as inputs:"),G.forEach(t),f=d(h),_=r(h,"UL",{});var V=i(_);v=r(V,"LI",{});var Ae=i(v);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),g=d(V),j=r(V,"LI",{});var Ie=i(j);ue=s(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),V.forEach(t),K=d(h),E=r(h,"P",{});var z=i(E);X=s(z,"This second option is useful when using "),O=r(z,"CODE",{});var Le=i(O);Z=s(Le,"tf.keras.Model.fit"),Le.forEach(t),me=s(z,` method which currently requires having all the
tensors in the first argument of the model call function: `),B=r(z,"CODE",{});var Se=i(B);fe=s(Se,"model(inputs)"),Se.forEach(t),ie=s(z,"."),z.forEach(t),L=d(h),A=r(h,"P",{});var xe=i(A);ee=s(xe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),xe.forEach(t),te=d(h),J=r(h,"UL",{});var C=i(J);x=r(C,"LI",{});var Q=i(x);ge=s(Q,"a single Tensor with "),U=r(Q,"CODE",{});var pe=i(U);le=s(pe,"input_ids"),pe.forEach(t),Y=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);oe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),_e=d(C),M=r(C,"LI",{});var D=i(M);de=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),S=r(D,"CODE",{});var Ne=i(S);Te=s(Ne,"model([input_ids, attention_mask])"),Ne.forEach(t),ce=s(D," or "),N=r(D,"CODE",{});var we=i(N);W=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),D.forEach(t),ve=d(C),q=r(C,"LI",{});var be=i(q);ke=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(be,"CODE",{});var De=i(R);se=s(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),be.forEach(t),C.forEach(t)},m(h,G){u(h,p,G),e(p,F),u(h,f,G),u(h,_,G),e(_,v),e(v,T),e(_,g),e(_,j),e(j,ue),u(h,K,G),u(h,E,G),e(E,X),e(E,O),e(O,Z),e(E,me),e(E,B),e(B,fe),e(E,ie),u(h,L,G),u(h,A,G),e(A,ee),u(h,te,G),u(h,J,G),e(J,x),e(x,ge),e(x,U),e(U,le),e(x,Y),e(x,H),e(H,oe),e(J,_e),e(J,M),e(M,de),e(M,S),e(S,Te),e(M,ce),e(M,N),e(N,W),e(J,ve),e(J,q),e(q,ke),e(q,R),e(R,se)},d(h){h&&t(p),h&&t(f),h&&t(_),h&&t(K),h&&t(E),h&&t(L),h&&t(A),h&&t(te),h&&t(J)}}}function gg(I){let p,F,f,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,v)},d(T){T&&t(p)}}}function _g(I){let p,F,f,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,v)},d(T){T&&t(p)}}}function Tg(I){let p,F,f,_,v;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,v)},d(T){T&&t(p)}}}function vg(I){let p,F,f,_,v,T,g,j,ue,K,E,X,O,Z,me,B,fe,ie,L,A,ee,te,J,x,ge,U,le,Y,H,oe,_e,M,de,S,Te,ce,N,W,ve,q,ke,R,se,h,G,V,Ae,Ie,z,Le,Se,xe,C,Q,pe,Fe,D,Ne,we,be,De,Ks,pt,Ai,Jo,Ii,Li,Xs,Si,Ni,Ys,Di,Oi,Mr,$t,Kt,Zs,xo,Bi,ea,Wi,qr,Xt,Qi,ms,Ui,Hi,zr,Mo,Cr,fs,Ri,Ar,qo,Ir,Ft,Yt,ta,zo,Vi,oa,Ki,Lr,Ye,Co,Xi,Ze,Yi,gs,Zi,el,Ao,tl,ol,_s,nl,sl,Ts,al,rl,il,na,ll,dl,Io,Sr,jt,Zt,sa,Lo,cl,aa,pl,Nr,ht,So,hl,No,ul,Do,ml,fl,gl,Oe,Oo,_l,Gt,Tl,vs,vl,kl,ra,wl,bl,yl,eo,Pl,ia,$l,Fl,Bo,Dr,Et,to,la,Wo,jl,da,Gl,Or,et,Qo,El,ca,Jl,xl,Uo,Ml,Ho,ql,zl,Cl,Be,Ro,Al,Jt,Il,ks,Ll,Sl,pa,Nl,Dl,Ol,oo,Bl,ha,Wl,Ql,Vo,Br,xt,no,ua,Ko,Ul,ma,Hl,Wr,je,Xo,Rl,fa,Vl,Kl,ws,bs,Xl,Yl,Zl,tt,ed,ga,td,od,_a,nd,sd,Ta,ad,rd,va,id,ld,dd,Yo,cd,Zo,pd,hd,ud,ne,en,md,Mt,fd,ys,gd,_d,ka,Td,vd,kd,so,wd,wa,bd,yd,tn,Pd,on,$d,ba,Fd,jd,nn,Gd,sn,Qr,qt,ao,ya,an,Ed,Pa,Jd,Ur,ot,rn,xd,zt,Md,$a,qd,zd,Fa,Cd,Ad,Id,ln,Ld,dn,Sd,Nd,Dd,Me,cn,Od,Ct,Bd,Ps,Wd,Qd,ja,Ud,Hd,Rd,ro,Vd,Ga,Kd,Xd,pn,Yd,hn,Hr,At,io,Ea,un,Zd,Ja,ec,Rr,Ge,mn,tc,xa,oc,nc,fn,sc,$s,ac,rc,ic,gn,lc,_n,dc,cc,pc,lo,hc,We,Tn,uc,It,mc,Fs,fc,gc,Ma,_c,Tc,vc,co,kc,qa,wc,bc,vn,Vr,Lt,po,za,kn,yc,Ca,Pc,Kr,Ee,wn,$c,Aa,Fc,jc,bn,Gc,js,Ec,Jc,xc,yn,Mc,Pn,qc,zc,Cc,ho,Ac,Qe,$n,Ic,St,Lc,Gs,Sc,Nc,Ia,Dc,Oc,Bc,uo,Wc,La,Qc,Uc,Fn,Xr,Nt,mo,Sa,jn,Hc,Na,Rc,Yr,ae,Gn,Vc,Da,Kc,Xc,Es,Js,Yc,Zc,ep,nt,tp,Oa,op,np,Ba,sp,ap,Wa,rp,ip,Qa,lp,dp,cp,En,pp,xs,hp,up,mp,Jn,fp,xn,gp,_p,Tp,fo,vp,qe,Mn,kp,Dt,wp,Ms,bp,yp,Ua,Pp,$p,Fp,go,jp,Ha,Gp,Ep,qn,Jp,zn,Zr,Ot,_o,Ra,Cn,xp,Va,Mp,ei,Je,An,qp,Bt,zp,Ka,Cp,Ap,Xa,Ip,Lp,Sp,In,Np,qs,Dp,Op,Bp,Ln,Wp,Sn,Qp,Up,Hp,To,Rp,ze,Nn,Vp,Wt,Kp,zs,Xp,Yp,Ya,Zp,eh,th,vo,oh,Za,nh,sh,Dn,ah,On,ti,Qt,ko,er,Bn,rh,tr,ih,oi,ye,Wn,lh,or,dh,ch,Qn,ph,Cs,hh,uh,mh,Un,fh,Hn,gh,_h,Th,nr,vh,kh,ut,sr,Rn,wh,bh,ar,Vn,yh,Ph,rr,Kn,$h,Fh,ir,Xn,jh,Gh,Ue,Yn,Eh,Ut,Jh,lr,xh,Mh,dr,qh,zh,Ch,wo,Ah,cr,Ih,Lh,Zn,ni,Ht,bo,pr,es,Sh,hr,Nh,si,Pe,ts,Dh,ur,Oh,Bh,os,Wh,As,Qh,Uh,Hh,ns,Rh,ss,Vh,Kh,Xh,mr,Yh,Zh,mt,fr,as,eu,tu,gr,rs,ou,nu,_r,is,su,au,Tr,ls,ru,iu,He,ds,lu,Rt,du,vr,cu,pu,kr,hu,uu,mu,yo,fu,wr,gu,_u,cs,ai;return T=new Xe({}),Z=new Xe({}),C=new he({props:{code:`from transformers import GPTJForCausalLM
import torch

model = GPTJForCausalLM.from_pretrained(
    "EleutherAI/gpt-j-6B", revision="float16", torch_dtype=torch.float16, low_cpu_mem_usage=True
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, revision=<span class="hljs-string">&quot;float16&quot;</span>, torch_dtype=torch.float16, low_cpu_mem_usage=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)`}}),xo=new Xe({}),Mo=new he({props:{code:`from transformers import AutoModelForCausalLM, AutoTokenizer

model = AutoModelForCausalLM.from_pretrained("EleutherAI/gpt-j-6B")
tokenizer = AutoTokenizer.from_pretrained("EleutherAI/gpt-j-6B")

prompt = (
    "In a shocking finding, scientists discovered a herd of unicorns living in a remote, "
    "previously unexplored valley, in the Andes Mountains. Even more surprising to the "
    "researchers was the fact that the unicorns spoke perfect English."
)

input_ids = tokenizer(prompt, return_tensors="pt").input_ids

gen_tokens = model.generate(
    input_ids,
    do_sample=True,
    temperature=0.9,
    max_length=100,
)
gen_text = tokenizer.batch_decode(gen_tokens)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> AutoModelForCausalLM, AutoTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = AutoModelForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;In a shocking finding, scientists discovered a herd of unicorns living in a remote, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;previously unexplored valley, in the Andes Mountains. Even more surprising to the &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;researchers was the fact that the unicorns spoke perfect English.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),qo=new he({props:{code:`from transformers import GPTJForCausalLM, AutoTokenizer
import torch

model = GPTJForCausalLM.from_pretrained("EleutherAI/gpt-j-6B", torch_dtype=torch.float16)
tokenizer = AutoTokenizer.from_pretrained("EleutherAI/gpt-j-6B")

prompt = (
    "In a shocking finding, scientists discovered a herd of unicorns living in a remote, "
    "previously unexplored valley, in the Andes Mountains. Even more surprising to the "
    "researchers was the fact that the unicorns spoke perfect English."
)

input_ids = tokenizer(prompt, return_tensors="pt").input_ids

gen_tokens = model.generate(
    input_ids,
    do_sample=True,
    temperature=0.9,
    max_length=100,
)
gen_text = tokenizer.batch_decode(gen_tokens)[0]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJForCausalLM, AutoTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, torch_dtype=torch.float16)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = AutoTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = (
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;In a shocking finding, scientists discovered a herd of unicorns living in a remote, &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;previously unexplored valley, in the Andes Mountains. Even more surprising to the &quot;</span>
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;researchers was the fact that the unicorns spoke perfect English.&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = tokenizer(prompt, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>).input_ids

<span class="hljs-meta">&gt;&gt;&gt; </span>gen_tokens = model.generate(
<span class="hljs-meta">... </span>    input_ids,
<span class="hljs-meta">... </span>    do_sample=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.9</span>,
<span class="hljs-meta">... </span>    max_length=<span class="hljs-number">100</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),zo=new Xe({}),Co=new re({props:{name:"class transformers.GPTJConfig",anchor:"transformers.GPTJConfig",parameters:[{name:"vocab_size",val:" = 50400"},{name:"n_positions",val:" = 2048"},{name:"n_embd",val:" = 4096"},{name:"n_layer",val:" = 28"},{name:"n_head",val:" = 16"},{name:"rotary_dim",val:" = 64"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.0"},{name:"embd_pdrop",val:" = 0.0"},{name:"attn_pdrop",val:" = 0.0"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"tie_word_embeddings",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/configuration_gptj.py#L33",parametersDescription:[{anchor:"transformers.GPTJConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50400) &#x2014;
Vocabulary size of the GPT-J model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJModel">GPTJModel</a>.`,name:"vocab_size"},{anchor:"transformers.GPTJConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 2048) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.GPTJConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 4096) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.GPTJConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 28) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.GPTJConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 16) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.GPTJConfig.rotary_dim",description:`<strong>rotary_dim</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Number of dimensions in the embedding that Rotary Position Embedding is applied to.`,name:"rotary_dim"},{anchor:"transformers.GPTJConfig.n_inner",description:`<strong>n_inner</strong> (<code>int</code>, <em>optional</em>, defaults to None) &#x2014;
Dimensionality of the inner feed-forward layers. <code>None</code> will set it to 4 times n_embd`,name:"n_inner"},{anchor:"transformers.GPTJConfig.activation_function",description:`<strong>activation_function</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;gelu_new&quot;</code>) &#x2014;
Activation function, to be selected in the list <code>[&quot;relu&quot;, &quot;silu&quot;, &quot;gelu&quot;, &quot;tanh&quot;, &quot;gelu_new&quot;]</code>.`,name:"activation_function"},{anchor:"transformers.GPTJConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.GPTJConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.GPTJConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.GPTJConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers.`,name:"layer_norm_epsilon"},{anchor:"transformers.GPTJConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.GPTJConfig.scale_attn_weights",description:`<strong>scale_attn_weights</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Scale attention weights by dividing by sqrt(hidden_size).`,name:"scale_attn_weights"},{anchor:"transformers.GPTJConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Io=new he({props:{code:`from transformers import GPTJModel, GPTJConfig

# Initializing a GPT-J 6B configuration
configuration = GPTJConfig()

# Initializing a model from the configuration
model = GPTJModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJModel, GPTJConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT-J 6B configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = GPTJConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Lo=new Xe({}),So=new re({props:{name:"class transformers.GPTJModel",anchor:"transformers.GPTJModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L449",parametersDescription:[{anchor:"transformers.GPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Oo=new re({props:{name:"forward",anchor:"transformers.GPTJModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L505",parametersDescription:[{anchor:"transformers.GPTJModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>) and optionally if
<code>config.is_encoder_decoder=True</code> 2 additional tensors of shape <code>(batch_size, num_heads, encoder_sequence_length, embed_size_per_head)</code>.</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks and optionally if
<code>config.is_encoder_decoder=True</code> in the cross-attention blocks) that can be used (see <code>past_key_values</code>
input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPast"
>transformers.modeling_outputs.BaseModelOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),eo=new Ke({props:{$$slots:{default:[ag]},$$scope:{ctx:I}}}),Bo=new he({props:{code:`from transformers import GPT2Tokenizer, GPTJModel
import torch

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJModel.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJModel.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Wo=new Xe({}),Qo=new re({props:{name:"class transformers.GPTJForCausalLM",anchor:"transformers.GPTJForCausalLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L689",parametersDescription:[{anchor:"transformers.GPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ro=new re({props:{name:"forward",anchor:"transformers.GPTJForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L758",parametersDescription:[{anchor:"transformers.GPTJForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForCausalLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForCausalLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForCausalLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForCausalLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForCausalLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForCausalLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForCausalLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForCausalLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForCausalLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutputWithPast"
>transformers.modeling_outputs.CausalLMOutputWithPast</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),oo=new Ke({props:{$$slots:{default:[rg]},$$scope:{ctx:I}}}),Vo=new he({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForCausalLM

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForCausalLM.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ko=new Xe({}),Xo=new re({props:{name:"class transformers.GPTJForSequenceClassification",anchor:"transformers.GPTJForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L864",parametersDescription:[{anchor:"transformers.GPTJForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),en=new re({props:{name:"forward",anchor:"transformers.GPTJForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L880",parametersDescription:[{anchor:"transformers.GPTJForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code>or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>tuple(tuple(torch.FloatTensor))</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 Tuple of <code>tuple(torch.FloatTensor)</code> of length <code>config.n_layers</code>, with each tuple having 2 tensors of shape
<code>(batch_size, num_heads, sequence_length, embed_size_per_head)</code>)</p>
<p>Contains pre-computed hidden-states (key and values in the self-attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code>or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new Ke({props:{$$slots:{default:[ig]},$$scope:{ctx:I}}}),tn=new he({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),on=new he({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),nn=new he({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),sn=new he({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),an=new Xe({}),rn=new re({props:{name:"class transformers.GPTJForQuestionAnswering",anchor:"transformers.GPTJForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L990",parametersDescription:[{anchor:"transformers.GPTJForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),cn=new re({props:{name:"forward",anchor:"transformers.GPTJForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L1006",parametersDescription:[{anchor:"transformers.GPTJForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.GPTJForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.n_positions - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.GPTJForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_attention_heads,)</code> or <code>(n_layer, num_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.GPTJForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_dim)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.GPTJForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.GPTJForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.GPTJForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.GPTJForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.GPTJForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ro=new Ke({props:{$$slots:{default:[lg]},$$scope:{ctx:I}}}),pn=new he({props:{code:`from transformers import GPT2Tokenizer, GPTJForQuestionAnswering
import torch

tokenizer = GPT2Tokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = GPTJForQuestionAnswering.from_pretrained("EleutherAI/gpt-j-6B")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),hn=new he({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),un=new Xe({}),mn=new re({props:{name:"class transformers.TFGPTJModel",anchor:"transformers.TFGPTJModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L668",parametersDescription:[{anchor:"transformers.TFGPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new Ke({props:{$$slots:{default:[dg]},$$scope:{ctx:I}}}),Tn=new re({props:{name:"call",anchor:"transformers.TFGPTJModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L673",parametersDescription:[{anchor:"transformers.TFGPTJModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJModel.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJModel.call.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
If set to <code>True</code>, <code>past_key_values</code> key value states are returned and can be used to speed up decoding (see
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
<p>If <code>past_key_values</code> is used only the last hidden-state of the sequences of shape <code>(batch_size, 1, hidden_size)</code> is output.</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPast"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new Ke({props:{$$slots:{default:[cg]},$$scope:{ctx:I}}}),vn=new he({props:{code:`from transformers import GPTJTokenizer, TFGPTJModel
import tensorflow as tf

tokenizer = GPTJTokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = TFGPTJModel.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, TFGPTJModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJModel.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),kn=new Xe({}),wn=new re({props:{name:"class transformers.TFGPTJForCausalLM",anchor:"transformers.TFGPTJForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L754",parametersDescription:[{anchor:"transformers.TFGPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ho=new Ke({props:{$$slots:{default:[pg]},$$scope:{ctx:I}}}),$n=new re({props:{name:"call",anchor:"transformers.TFGPTJForCausalLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L796",parametersDescription:[{anchor:"transformers.TFGPTJForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJForCausalLM.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJForCausalLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJForCausalLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJForCausalLM.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJForCausalLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJForCausalLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJForCausalLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJForCausalLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJForCausalLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForCausalLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForCausalLM.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutputWithPast"
>transformers.modeling_tf_outputs.TFCausalLMOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),uo=new Ke({props:{$$slots:{default:[hg]},$$scope:{ctx:I}}}),Fn=new he({props:{code:`from transformers import GPTJTokenizer, TFGPTJForCausalLM
import tensorflow as tf

tokenizer = GPTJTokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = TFGPTJForCausalLM.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, TFGPTJForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),jn=new Xe({}),Gn=new re({props:{name:"class transformers.TFGPTJForSequenceClassification",anchor:"transformers.TFGPTJForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L903",parametersDescription:[{anchor:"transformers.TFGPTJForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fo=new Ke({props:{$$slots:{default:[ug]},$$scope:{ctx:I}}}),Mn=new re({props:{name:"call",anchor:"transformers.TFGPTJForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L917",parametersDescription:[{anchor:"transformers.TFGPTJForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJForSequenceClassification.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>past_key_values</strong> (<code>List[tf.Tensor]</code>, <em>optional</em>, returned when <code>use_cache=True</code> is passed or when <code>config.use_cache=True</code>) \u2014 List of <code>tf.Tensor</code> of length <code>config.n_layers</code>, with each tensor of shape <code>(2, batch_size, num_heads, sequence_length, embed_size_per_head)</code>).</p>
<p>Contains pre-computed hidden-states (key and values in the attention blocks) that can be used (see
<code>past_key_values</code> input) to speed up sequential decoding.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/model_doc/gpt2#transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutputWithPast</a> or <code>tuple(tf.Tensor)</code></p>
`}}),go=new Ke({props:{$$slots:{default:[mg]},$$scope:{ctx:I}}}),qn=new he({props:{code:`from transformers import GPTJTokenizer, TFGPTJForSequenceClassification
import tensorflow as tf

tokenizer = GPTJTokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = TFGPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, TFGPTJForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),zn=new he({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFGPTJForSequenceClassification.from_pretrained("EleutherAI/gpt-j-6B", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Cn=new Xe({}),An=new re({props:{name:"class transformers.TFGPTJForQuestionAnswering",anchor:"transformers.TFGPTJForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L1049",parametersDescription:[{anchor:"transformers.TFGPTJForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),To=new Ke({props:{$$slots:{default:[fg]},$$scope:{ctx:I}}}),Nn=new re({props:{name:"call",anchor:"transformers.TFGPTJForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L1060",parametersDescription:[{anchor:"transformers.TFGPTJForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.past_key_values",description:`<strong>past_key_values</strong> (<code>List[tf.Tensor]</code> of length <code>config.n_layers</code>) &#x2014;
Contains pre-computed hidden-states (key and values in the attention blocks) as computed by the model (see
<code>past</code> output below). Can be used to speed up sequential decoding. The token ids which have their past
given to this model should not be passed as input ids as they have already been computed.`,name:"past_key_values"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFGPTJForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>start_positions</code> and <code>end_positions</code> are provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
</li>
<li>
<p><strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-start scores (before SoftMax).</p>
</li>
<li>
<p><strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Span-end scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),vo=new Ke({props:{$$slots:{default:[gg]},$$scope:{ctx:I}}}),Dn=new he({props:{code:`from transformers import GPTJTokenizer, TFGPTJForQuestionAnswering
import tensorflow as tf

tokenizer = GPTJTokenizer.from_pretrained("EleutherAI/gpt-j-6B")
model = TFGPTJForQuestionAnswering.from_pretrained("EleutherAI/gpt-j-6B")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, TFGPTJForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFGPTJForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),On=new he({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Bn=new Xe({}),Wn=new re({props:{name:"class transformers.FlaxGPTJModel",anchor:"transformers.FlaxGPTJModel",parameters:[{name:"config",val:": GPTJConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_flax_gptj.py#L607",parametersDescription:[{anchor:"transformers.FlaxGPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTJModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),Yn=new re({props:{name:"__call__",anchor:"transformers.FlaxGPTJPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_flax_gptj.py#L425",parametersDescription:[{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),wo=new Ke({props:{$$slots:{default:[_g]},$$scope:{ctx:I}}}),Zn=new he({props:{code:`from transformers import GPTJTokenizer, FlaxGPTJModel

tokenizer = GPTJTokenizer.from_pretrained("gptj")
model = FlaxGPTJModel.from_pretrained("gptj")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, FlaxGPTJModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTJModel.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),es=new Xe({}),ts=new re({props:{name:"class transformers.FlaxGPTJForCausalLM",anchor:"transformers.FlaxGPTJForCausalLM",parameters:[{name:"config",val:": GPTJConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_flax_gptj.py#L674",parametersDescription:[{anchor:"transformers.FlaxGPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTJForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}]}}),ds=new re({props:{name:"__call__",anchor:"transformers.FlaxGPTJPreTrainedModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_flax_gptj.py#L425",parametersDescription:[{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTJPreTrainedModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig"
>GPTJConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>jnp.ndarray</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(jnp.ndarray)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>jnp.ndarray</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_flax_outputs.FlaxMaskedLMOutput"
>transformers.modeling_flax_outputs.FlaxMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),yo=new Ke({props:{$$slots:{default:[Tg]},$$scope:{ctx:I}}}),cs=new he({props:{code:`from transformers import GPTJTokenizer, FlaxGPTJForCausalLM

tokenizer = GPTJTokenizer.from_pretrained("gptj")
model = FlaxGPTJForCausalLM.from_pretrained("gptj")

inputs = tokenizer("Hello, my dog is cute", return_tensors="np")
outputs = model(**inputs)

# retrieve logts for next token
next_token_logits = outputs.logits[:, -1]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, FlaxGPTJForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;np&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve logts for next token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){p=a("meta"),F=l(),f=a("h1"),_=a("a"),v=a("span"),k(T.$$.fragment),g=l(),j=a("span"),ue=n("GPT-J"),K=l(),E=a("h2"),X=a("a"),O=a("span"),k(Z.$$.fragment),me=l(),B=a("span"),fe=n("Overview"),ie=l(),L=a("p"),A=n("The GPT-J model was released in the "),ee=a("a"),te=n("kingoflolz/mesh-transformer-jax"),J=n(` repository by Ben Wang and Aran Komatsuzaki. It is a GPT-2-like
causal language model trained on `),x=a("a"),ge=n("the Pile"),U=n(" dataset."),le=l(),Y=a("p"),H=n("This model was contributed by "),oe=a("a"),_e=n("Stella Biderman"),M=n("."),de=l(),S=a("p"),Te=n("Tips:"),ce=l(),N=a("ul"),W=a("li"),ve=n("To load "),q=a("a"),ke=n("GPT-J"),R=n(` in float32 one would need at least 2x model size CPU
RAM: 1x for initial weights and another 1x to load the checkpoint. So for GPT-J it would take at least 48GB of CPU
RAM to just load the model. To reduce the CPU RAM usage there are a few options. The `),se=a("code"),h=n("torch_dtype"),G=n(` argument can be
used to initialize the model in half-precision. And the `),V=a("code"),Ae=n("low_cpu_mem_usage"),Ie=n(` argument can be used to keep the RAM
usage to 1x. There is also a `),z=a("a"),Le=n("fp16 branch"),Se=n(` which stores
the fp16 weights, which could be used to further minimize the RAM usage. Combining all this it should take roughly
12.1GB of CPU RAM to load the model.`),xe=l(),k(C.$$.fragment),Q=l(),pe=a("ul"),Fe=a("li"),D=a("p"),Ne=n(`The model should fit on 16GB GPU for inference. For training/fine-tuning it would take much more GPU RAM. Adam
optimizer for example makes four copies of the model: model, gradients, average and squared average of the gradients.
So it would need at least 4x model size GPU memory, even with mixed precision as gradient updates are in fp32. This
is not including the activations and data batches, which would again require some more GPU RAM. So one should explore
solutions such as DeepSpeed, to train/fine-tune the model. Another option is to use the original codebase to
train/fine-tune the model on TPU and then convert the model to Transformers format for inference. Instructions for
that could be found `),we=a("a"),be=n("here"),De=l(),Ks=a("li"),pt=a("p"),Ai=n(`Although the embedding matrix has a size of 50400, only 50257 entries are used by the GPT-2 tokenizer. These extra
tokens are added for the sake of efficiency on TPUs. To avoid the mis-match between embedding matrix size and vocab
size, the tokenizer for `),Jo=a("a"),Ii=n("GPT-J"),Li=n(` contains 143 extra tokens
`),Xs=a("code"),Si=n("<|extratoken_1|>... <|extratoken_143|>"),Ni=n(", so the "),Ys=a("code"),Di=n("vocab_size"),Oi=n(" of tokenizer also becomes 50400."),Mr=l(),$t=a("h3"),Kt=a("a"),Zs=a("span"),k(xo.$$.fragment),Bi=l(),ea=a("span"),Wi=n("Generation"),qr=l(),Xt=a("p"),Qi=n("The "),ms=a("a"),Ui=n("generate()"),Hi=n(` method can be used to generate text using GPT-J
model.`),zr=l(),k(Mo.$$.fragment),Cr=l(),fs=a("p"),Ri=n("\u2026or in float16 precision:"),Ar=l(),k(qo.$$.fragment),Ir=l(),Ft=a("h2"),Yt=a("a"),ta=a("span"),k(zo.$$.fragment),Vi=l(),oa=a("span"),Ki=n("GPTJConfig"),Lr=l(),Ye=a("div"),k(Co.$$.fragment),Xi=l(),Ze=a("p"),Yi=n("This is the configuration class to store the configuration of a "),gs=a("a"),Zi=n("GPTJModel"),el=n(`. It is used to instantiate a GPT-J
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GPT-J
`),Ao=a("a"),tl=n("gpt-j-6B"),ol=n(` architecture. Configuration objects inherit from
`),_s=a("a"),nl=n("PretrainedConfig"),sl=n(" and can be used to control the model outputs. Read the documentation from "),Ts=a("a"),al=n("PretrainedConfig"),rl=n(`
for more information.`),il=l(),na=a("p"),ll=n("Example:"),dl=l(),k(Io.$$.fragment),Sr=l(),jt=a("h2"),Zt=a("a"),sa=a("span"),k(Lo.$$.fragment),cl=l(),aa=a("span"),pl=n("GPTJModel"),Nr=l(),ht=a("div"),k(So.$$.fragment),hl=l(),No=a("p"),ul=n(`The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Do=a("a"),ml=n("torch.nn.Module"),fl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gl=l(),Oe=a("div"),k(Oo.$$.fragment),_l=l(),Gt=a("p"),Tl=n("The "),vs=a("a"),vl=n("GPTJModel"),kl=n(" forward method, overrides the "),ra=a("code"),wl=n("__call__"),bl=n(" special method."),yl=l(),k(eo.$$.fragment),Pl=l(),ia=a("p"),$l=n("Example:"),Fl=l(),k(Bo.$$.fragment),Dr=l(),Et=a("h2"),to=a("a"),la=a("span"),k(Wo.$$.fragment),jl=l(),da=a("span"),Gl=n("GPTJForCausalLM"),Or=l(),et=a("div"),k(Qo.$$.fragment),El=l(),ca=a("p"),Jl=n("The GPT-J Model transformer with a language modeling head on top."),xl=l(),Uo=a("p"),Ml=n("This model is a PyTorch "),Ho=a("a"),ql=n("torch.nn.Module"),zl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Cl=l(),Be=a("div"),k(Ro.$$.fragment),Al=l(),Jt=a("p"),Il=n("The "),ks=a("a"),Ll=n("GPTJForCausalLM"),Sl=n(" forward method, overrides the "),pa=a("code"),Nl=n("__call__"),Dl=n(" special method."),Ol=l(),k(oo.$$.fragment),Bl=l(),ha=a("p"),Wl=n("Example:"),Ql=l(),k(Vo.$$.fragment),Br=l(),xt=a("h2"),no=a("a"),ua=a("span"),k(Ko.$$.fragment),Ul=l(),ma=a("span"),Hl=n("GPTJForSequenceClassification"),Wr=l(),je=a("div"),k(Xo.$$.fragment),Rl=l(),fa=a("p"),Vl=n("The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Kl=l(),ws=a("p"),bs=a("a"),Xl=n("GPTJForSequenceClassification"),Yl=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),Zl=l(),tt=a("p"),ed=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ga=a("code"),td=n("pad_token_id"),od=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),_a=a("code"),nd=n("pad_token_id"),sd=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ta=a("code"),ad=n("inputs_embeds"),rd=n(" are passed instead of "),va=a("code"),id=n("input_ids"),ld=n(`, it does the same (take the last value in
each row of the batch).`),dd=l(),Yo=a("p"),cd=n("This model is a PyTorch "),Zo=a("a"),pd=n("torch.nn.Module"),hd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ud=l(),ne=a("div"),k(en.$$.fragment),md=l(),Mt=a("p"),fd=n("The "),ys=a("a"),gd=n("GPTJForSequenceClassification"),_d=n(" forward method, overrides the "),ka=a("code"),Td=n("__call__"),vd=n(" special method."),kd=l(),k(so.$$.fragment),wd=l(),wa=a("p"),bd=n("Example of single-label classification:"),yd=l(),k(tn.$$.fragment),Pd=l(),k(on.$$.fragment),$d=l(),ba=a("p"),Fd=n("Example of multi-label classification:"),jd=l(),k(nn.$$.fragment),Gd=l(),k(sn.$$.fragment),Qr=l(),qt=a("h2"),ao=a("a"),ya=a("span"),k(an.$$.fragment),Ed=l(),Pa=a("span"),Jd=n("GPTJForQuestionAnswering"),Ur=l(),ot=a("div"),k(rn.$$.fragment),xd=l(),zt=a("p"),Md=n(`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),$a=a("code"),qd=n("span start logits"),zd=n(" and "),Fa=a("code"),Cd=n("span end logits"),Ad=n(")."),Id=l(),ln=a("p"),Ld=n("This model is a PyTorch "),dn=a("a"),Sd=n("torch.nn.Module"),Nd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dd=l(),Me=a("div"),k(cn.$$.fragment),Od=l(),Ct=a("p"),Bd=n("The "),Ps=a("a"),Wd=n("GPTJForQuestionAnswering"),Qd=n(" forward method, overrides the "),ja=a("code"),Ud=n("__call__"),Hd=n(" special method."),Rd=l(),k(ro.$$.fragment),Vd=l(),Ga=a("p"),Kd=n("Example:"),Xd=l(),k(pn.$$.fragment),Yd=l(),k(hn.$$.fragment),Hr=l(),At=a("h2"),io=a("a"),Ea=a("span"),k(un.$$.fragment),Zd=l(),Ja=a("span"),ec=n("TFGPTJModel"),Rr=l(),Ge=a("div"),k(mn.$$.fragment),tc=l(),xa=a("p"),oc=n("The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top."),nc=l(),fn=a("p"),sc=n("This model inherits from "),$s=a("a"),ac=n("TFPreTrainedModel"),rc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ic=l(),gn=a("p"),lc=n("This model is also a "),_n=a("a"),dc=n("tf.keras.Model"),cc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pc=l(),k(lo.$$.fragment),hc=l(),We=a("div"),k(Tn.$$.fragment),uc=l(),It=a("p"),mc=n("The "),Fs=a("a"),fc=n("TFGPTJModel"),gc=n(" forward method, overrides the "),Ma=a("code"),_c=n("__call__"),Tc=n(" special method."),vc=l(),k(co.$$.fragment),kc=l(),qa=a("p"),wc=n("Example:"),bc=l(),k(vn.$$.fragment),Vr=l(),Lt=a("h2"),po=a("a"),za=a("span"),k(kn.$$.fragment),yc=l(),Ca=a("span"),Pc=n("TFGPTJForCausalLM"),Kr=l(),Ee=a("div"),k(wn.$$.fragment),$c=l(),Aa=a("p"),Fc=n("The GPT-J Model transformer with a language modeling head on top."),jc=l(),bn=a("p"),Gc=n("This model inherits from "),js=a("a"),Ec=n("TFPreTrainedModel"),Jc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xc=l(),yn=a("p"),Mc=n("This model is also a "),Pn=a("a"),qc=n("tf.keras.Model"),zc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cc=l(),k(ho.$$.fragment),Ac=l(),Qe=a("div"),k($n.$$.fragment),Ic=l(),St=a("p"),Lc=n("The "),Gs=a("a"),Sc=n("TFGPTJForCausalLM"),Nc=n(" forward method, overrides the "),Ia=a("code"),Dc=n("__call__"),Oc=n(" special method."),Bc=l(),k(uo.$$.fragment),Wc=l(),La=a("p"),Qc=n("Example:"),Uc=l(),k(Fn.$$.fragment),Xr=l(),Nt=a("h2"),mo=a("a"),Sa=a("span"),k(jn.$$.fragment),Hc=l(),Na=a("span"),Rc=n("TFGPTJForSequenceClassification"),Yr=l(),ae=a("div"),k(Gn.$$.fragment),Vc=l(),Da=a("p"),Kc=n("The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Xc=l(),Es=a("p"),Js=a("a"),Yc=n("GPTJForSequenceClassification"),Zc=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),ep=l(),nt=a("p"),tp=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Oa=a("code"),op=n("pad_token_id"),np=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ba=a("code"),sp=n("pad_token_id"),ap=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Wa=a("code"),rp=n("inputs_embeds"),ip=n(" are passed instead of "),Qa=a("code"),lp=n("input_ids"),dp=n(`, it does the same (take the last value in
each row of the batch).`),cp=l(),En=a("p"),pp=n("This model inherits from "),xs=a("a"),hp=n("TFPreTrainedModel"),up=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp=l(),Jn=a("p"),fp=n("This model is also a "),xn=a("a"),gp=n("tf.keras.Model"),_p=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tp=l(),k(fo.$$.fragment),vp=l(),qe=a("div"),k(Mn.$$.fragment),kp=l(),Dt=a("p"),wp=n("The "),Ms=a("a"),bp=n("TFGPTJForSequenceClassification"),yp=n(" forward method, overrides the "),Ua=a("code"),Pp=n("__call__"),$p=n(" special method."),Fp=l(),k(go.$$.fragment),jp=l(),Ha=a("p"),Gp=n("Example:"),Ep=l(),k(qn.$$.fragment),Jp=l(),k(zn.$$.fragment),Zr=l(),Ot=a("h2"),_o=a("a"),Ra=a("span"),k(Cn.$$.fragment),xp=l(),Va=a("span"),Mp=n("TFGPTJForQuestionAnswering"),ei=l(),Je=a("div"),k(An.$$.fragment),qp=l(),Bt=a("p"),zp=n(`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Ka=a("code"),Cp=n("span start logits"),Ap=n(" and "),Xa=a("code"),Ip=n("span end logits"),Lp=n(")."),Sp=l(),In=a("p"),Np=n("This model inherits from "),qs=a("a"),Dp=n("TFPreTrainedModel"),Op=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bp=l(),Ln=a("p"),Wp=n("This model is also a "),Sn=a("a"),Qp=n("tf.keras.Model"),Up=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hp=l(),k(To.$$.fragment),Rp=l(),ze=a("div"),k(Nn.$$.fragment),Vp=l(),Wt=a("p"),Kp=n("The "),zs=a("a"),Xp=n("TFGPTJForQuestionAnswering"),Yp=n(" forward method, overrides the "),Ya=a("code"),Zp=n("__call__"),eh=n(" special method."),th=l(),k(vo.$$.fragment),oh=l(),Za=a("p"),nh=n("Example:"),sh=l(),k(Dn.$$.fragment),ah=l(),k(On.$$.fragment),ti=l(),Qt=a("h2"),ko=a("a"),er=a("span"),k(Bn.$$.fragment),rh=l(),tr=a("span"),ih=n("FlaxGPTJModel"),oi=l(),ye=a("div"),k(Wn.$$.fragment),lh=l(),or=a("p"),dh=n("The bare GPTJ Model transformer outputting raw hidden-states without any specific head on top."),ch=l(),Qn=a("p"),ph=n("This model inherits from "),Cs=a("a"),hh=n("FlaxPreTrainedModel"),uh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mh=l(),Un=a("p"),fh=n(`This model is also a Flax Linen
`),Hn=a("a"),gh=n("flax.nn.Module"),_h=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Th=l(),nr=a("p"),vh=n("Finally, this model supports inherent JAX features such as:"),kh=l(),ut=a("ul"),sr=a("li"),Rn=a("a"),wh=n("Just-In-Time (JIT) compilation"),bh=l(),ar=a("li"),Vn=a("a"),yh=n("Automatic Differentiation"),Ph=l(),rr=a("li"),Kn=a("a"),$h=n("Vectorization"),Fh=l(),ir=a("li"),Xn=a("a"),jh=n("Parallelization"),Gh=l(),Ue=a("div"),k(Yn.$$.fragment),Eh=l(),Ut=a("p"),Jh=n("The "),lr=a("code"),xh=n("FlaxGPTJPreTrainedModel"),Mh=n("forward method, overrides the "),dr=a("code"),qh=n("__call__"),zh=n(" special method."),Ch=l(),k(wo.$$.fragment),Ah=l(),cr=a("p"),Ih=n("Example:"),Lh=l(),k(Zn.$$.fragment),ni=l(),Ht=a("h2"),bo=a("a"),pr=a("span"),k(es.$$.fragment),Sh=l(),hr=a("span"),Nh=n("FlaxGPTJForCausalLM"),si=l(),Pe=a("div"),k(ts.$$.fragment),Dh=l(),ur=a("p"),Oh=n("The GPTJ Model transformer with a language modeling head on top."),Bh=l(),os=a("p"),Wh=n("This model inherits from "),As=a("a"),Qh=n("FlaxPreTrainedModel"),Uh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh=l(),ns=a("p"),Rh=n(`This model is also a Flax Linen
`),ss=a("a"),Vh=n("flax.nn.Module"),Kh=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Xh=l(),mr=a("p"),Yh=n("Finally, this model supports inherent JAX features such as:"),Zh=l(),mt=a("ul"),fr=a("li"),as=a("a"),eu=n("Just-In-Time (JIT) compilation"),tu=l(),gr=a("li"),rs=a("a"),ou=n("Automatic Differentiation"),nu=l(),_r=a("li"),is=a("a"),su=n("Vectorization"),au=l(),Tr=a("li"),ls=a("a"),ru=n("Parallelization"),iu=l(),He=a("div"),k(ds.$$.fragment),lu=l(),Rt=a("p"),du=n("The "),vr=a("code"),cu=n("FlaxGPTJPreTrainedModel"),pu=n("forward method, overrides the "),kr=a("code"),hu=n("__call__"),uu=n(" special method."),mu=l(),k(yo.$$.fragment),fu=l(),wr=a("p"),gu=n("Example:"),_u=l(),k(cs.$$.fragment),this.h()},l(o){const m=ng('[data-svelte="svelte-1phssyn"]',document.head);p=r(m,"META",{name:!0,content:!0}),m.forEach(t),F=d(o),f=r(o,"H1",{class:!0});var ps=i(f);_=r(ps,"A",{id:!0,class:!0,href:!0});var br=i(_);v=r(br,"SPAN",{});var yr=i(v);w(T.$$.fragment,yr),yr.forEach(t),br.forEach(t),g=d(ps),j=r(ps,"SPAN",{});var Pr=i(j);ue=s(Pr,"GPT-J"),Pr.forEach(t),ps.forEach(t),K=d(o),E=r(o,"H2",{class:!0});var hs=i(E);X=r(hs,"A",{id:!0,class:!0,href:!0});var $r=i(X);O=r($r,"SPAN",{});var Fr=i(O);w(Z.$$.fragment,Fr),Fr.forEach(t),$r.forEach(t),me=d(hs),B=r(hs,"SPAN",{});var jr=i(B);fe=s(jr,"Overview"),jr.forEach(t),hs.forEach(t),ie=d(o),L=r(o,"P",{});var Vt=i(L);A=s(Vt,"The GPT-J model was released in the "),ee=r(Vt,"A",{href:!0,rel:!0});var Gr=i(ee);te=s(Gr,"kingoflolz/mesh-transformer-jax"),Gr.forEach(t),J=s(Vt,` repository by Ben Wang and Aran Komatsuzaki. It is a GPT-2-like
causal language model trained on `),x=r(Vt,"A",{href:!0,rel:!0});var Er=i(x);ge=s(Er,"the Pile"),Er.forEach(t),U=s(Vt," dataset."),Vt.forEach(t),le=d(o),Y=r(o,"P",{});var us=i(Y);H=s(us,"This model was contributed by "),oe=r(us,"A",{href:!0,rel:!0});var Jr=i(oe);_e=s(Jr,"Stella Biderman"),Jr.forEach(t),M=s(us,"."),us.forEach(t),de=d(o),S=r(o,"P",{});var xr=i(S);Te=s(xr,"Tips:"),xr.forEach(t),ce=d(o),N=r(o,"UL",{});var wu=i(N);W=r(wu,"LI",{});var ft=i(W);ve=s(ft,"To load "),q=r(ft,"A",{href:!0,rel:!0});var bu=i(q);ke=s(bu,"GPT-J"),bu.forEach(t),R=s(ft,` in float32 one would need at least 2x model size CPU
RAM: 1x for initial weights and another 1x to load the checkpoint. So for GPT-J it would take at least 48GB of CPU
RAM to just load the model. To reduce the CPU RAM usage there are a few options. The `),se=r(ft,"CODE",{});var yu=i(se);h=s(yu,"torch_dtype"),yu.forEach(t),G=s(ft,` argument can be
used to initialize the model in half-precision. And the `),V=r(ft,"CODE",{});var Pu=i(V);Ae=s(Pu,"low_cpu_mem_usage"),Pu.forEach(t),Ie=s(ft,` argument can be used to keep the RAM
usage to 1x. There is also a `),z=r(ft,"A",{href:!0,rel:!0});var $u=i(z);Le=s($u,"fp16 branch"),$u.forEach(t),Se=s(ft,` which stores
the fp16 weights, which could be used to further minimize the RAM usage. Combining all this it should take roughly
12.1GB of CPU RAM to load the model.`),ft.forEach(t),wu.forEach(t),xe=d(o),w(C.$$.fragment,o),Q=d(o),pe=r(o,"UL",{});var ri=i(pe);Fe=r(ri,"LI",{});var Fu=i(Fe);D=r(Fu,"P",{});var Tu=i(D);Ne=s(Tu,`The model should fit on 16GB GPU for inference. For training/fine-tuning it would take much more GPU RAM. Adam
optimizer for example makes four copies of the model: model, gradients, average and squared average of the gradients.
So it would need at least 4x model size GPU memory, even with mixed precision as gradient updates are in fp32. This
is not including the activations and data batches, which would again require some more GPU RAM. So one should explore
solutions such as DeepSpeed, to train/fine-tune the model. Another option is to use the original codebase to
train/fine-tune the model on TPU and then convert the model to Transformers format for inference. Instructions for
that could be found `),we=r(Tu,"A",{href:!0,rel:!0});var ju=i(we);be=s(ju,"here"),ju.forEach(t),Tu.forEach(t),Fu.forEach(t),De=d(ri),Ks=r(ri,"LI",{});var Gu=i(Ks);pt=r(Gu,"P",{});var Po=i(pt);Ai=s(Po,`Although the embedding matrix has a size of 50400, only 50257 entries are used by the GPT-2 tokenizer. These extra
tokens are added for the sake of efficiency on TPUs. To avoid the mis-match between embedding matrix size and vocab
size, the tokenizer for `),Jo=r(Po,"A",{href:!0,rel:!0});var Eu=i(Jo);Ii=s(Eu,"GPT-J"),Eu.forEach(t),Li=s(Po,` contains 143 extra tokens
`),Xs=r(Po,"CODE",{});var Ju=i(Xs);Si=s(Ju,"<|extratoken_1|>... <|extratoken_143|>"),Ju.forEach(t),Ni=s(Po,", so the "),Ys=r(Po,"CODE",{});var xu=i(Ys);Di=s(xu,"vocab_size"),xu.forEach(t),Oi=s(Po," of tokenizer also becomes 50400."),Po.forEach(t),Gu.forEach(t),ri.forEach(t),Mr=d(o),$t=r(o,"H3",{class:!0});var ii=i($t);Kt=r(ii,"A",{id:!0,class:!0,href:!0});var Mu=i(Kt);Zs=r(Mu,"SPAN",{});var qu=i(Zs);w(xo.$$.fragment,qu),qu.forEach(t),Mu.forEach(t),Bi=d(ii),ea=r(ii,"SPAN",{});var zu=i(ea);Wi=s(zu,"Generation"),zu.forEach(t),ii.forEach(t),qr=d(o),Xt=r(o,"P",{});var li=i(Xt);Qi=s(li,"The "),ms=r(li,"A",{href:!0});var Cu=i(ms);Ui=s(Cu,"generate()"),Cu.forEach(t),Hi=s(li,` method can be used to generate text using GPT-J
model.`),li.forEach(t),zr=d(o),w(Mo.$$.fragment,o),Cr=d(o),fs=r(o,"P",{});var Au=i(fs);Ri=s(Au,"\u2026or in float16 precision:"),Au.forEach(t),Ar=d(o),w(qo.$$.fragment,o),Ir=d(o),Ft=r(o,"H2",{class:!0});var di=i(Ft);Yt=r(di,"A",{id:!0,class:!0,href:!0});var Iu=i(Yt);ta=r(Iu,"SPAN",{});var Lu=i(ta);w(zo.$$.fragment,Lu),Lu.forEach(t),Iu.forEach(t),Vi=d(di),oa=r(di,"SPAN",{});var Su=i(oa);Ki=s(Su,"GPTJConfig"),Su.forEach(t),di.forEach(t),Lr=d(o),Ye=r(o,"DIV",{class:!0});var $o=i(Ye);w(Co.$$.fragment,$o),Xi=d($o),Ze=r($o,"P",{});var gt=i(Ze);Yi=s(gt,"This is the configuration class to store the configuration of a "),gs=r(gt,"A",{href:!0});var Nu=i(gs);Zi=s(Nu,"GPTJModel"),Nu.forEach(t),el=s(gt,`. It is used to instantiate a GPT-J
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GPT-J
`),Ao=r(gt,"A",{href:!0,rel:!0});var Du=i(Ao);tl=s(Du,"gpt-j-6B"),Du.forEach(t),ol=s(gt,` architecture. Configuration objects inherit from
`),_s=r(gt,"A",{href:!0});var Ou=i(_s);nl=s(Ou,"PretrainedConfig"),Ou.forEach(t),sl=s(gt," and can be used to control the model outputs. Read the documentation from "),Ts=r(gt,"A",{href:!0});var Bu=i(Ts);al=s(Bu,"PretrainedConfig"),Bu.forEach(t),rl=s(gt,`
for more information.`),gt.forEach(t),il=d($o),na=r($o,"P",{});var Wu=i(na);ll=s(Wu,"Example:"),Wu.forEach(t),dl=d($o),w(Io.$$.fragment,$o),$o.forEach(t),Sr=d(o),jt=r(o,"H2",{class:!0});var ci=i(jt);Zt=r(ci,"A",{id:!0,class:!0,href:!0});var Qu=i(Zt);sa=r(Qu,"SPAN",{});var Uu=i(sa);w(Lo.$$.fragment,Uu),Uu.forEach(t),Qu.forEach(t),cl=d(ci),aa=r(ci,"SPAN",{});var Hu=i(aa);pl=s(Hu,"GPTJModel"),Hu.forEach(t),ci.forEach(t),Nr=d(o),ht=r(o,"DIV",{class:!0});var Is=i(ht);w(So.$$.fragment,Is),hl=d(Is),No=r(Is,"P",{});var pi=i(No);ul=s(pi,`The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Do=r(pi,"A",{href:!0,rel:!0});var Ru=i(Do);ml=s(Ru,"torch.nn.Module"),Ru.forEach(t),fl=s(pi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pi.forEach(t),gl=d(Is),Oe=r(Is,"DIV",{class:!0});var _t=i(Oe);w(Oo.$$.fragment,_t),_l=d(_t),Gt=r(_t,"P",{});var Ls=i(Gt);Tl=s(Ls,"The "),vs=r(Ls,"A",{href:!0});var Vu=i(vs);vl=s(Vu,"GPTJModel"),Vu.forEach(t),kl=s(Ls," forward method, overrides the "),ra=r(Ls,"CODE",{});var Ku=i(ra);wl=s(Ku,"__call__"),Ku.forEach(t),bl=s(Ls," special method."),Ls.forEach(t),yl=d(_t),w(eo.$$.fragment,_t),Pl=d(_t),ia=r(_t,"P",{});var Xu=i(ia);$l=s(Xu,"Example:"),Xu.forEach(t),Fl=d(_t),w(Bo.$$.fragment,_t),_t.forEach(t),Is.forEach(t),Dr=d(o),Et=r(o,"H2",{class:!0});var hi=i(Et);to=r(hi,"A",{id:!0,class:!0,href:!0});var Yu=i(to);la=r(Yu,"SPAN",{});var Zu=i(la);w(Wo.$$.fragment,Zu),Zu.forEach(t),Yu.forEach(t),jl=d(hi),da=r(hi,"SPAN",{});var em=i(da);Gl=s(em,"GPTJForCausalLM"),em.forEach(t),hi.forEach(t),Or=d(o),et=r(o,"DIV",{class:!0});var Fo=i(et);w(Qo.$$.fragment,Fo),El=d(Fo),ca=r(Fo,"P",{});var tm=i(ca);Jl=s(tm,"The GPT-J Model transformer with a language modeling head on top."),tm.forEach(t),xl=d(Fo),Uo=r(Fo,"P",{});var ui=i(Uo);Ml=s(ui,"This model is a PyTorch "),Ho=r(ui,"A",{href:!0,rel:!0});var om=i(Ho);ql=s(om,"torch.nn.Module"),om.forEach(t),zl=s(ui,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ui.forEach(t),Cl=d(Fo),Be=r(Fo,"DIV",{class:!0});var Tt=i(Be);w(Ro.$$.fragment,Tt),Al=d(Tt),Jt=r(Tt,"P",{});var Ss=i(Jt);Il=s(Ss,"The "),ks=r(Ss,"A",{href:!0});var nm=i(ks);Ll=s(nm,"GPTJForCausalLM"),nm.forEach(t),Sl=s(Ss," forward method, overrides the "),pa=r(Ss,"CODE",{});var sm=i(pa);Nl=s(sm,"__call__"),sm.forEach(t),Dl=s(Ss," special method."),Ss.forEach(t),Ol=d(Tt),w(oo.$$.fragment,Tt),Bl=d(Tt),ha=r(Tt,"P",{});var am=i(ha);Wl=s(am,"Example:"),am.forEach(t),Ql=d(Tt),w(Vo.$$.fragment,Tt),Tt.forEach(t),Fo.forEach(t),Br=d(o),xt=r(o,"H2",{class:!0});var mi=i(xt);no=r(mi,"A",{id:!0,class:!0,href:!0});var rm=i(no);ua=r(rm,"SPAN",{});var im=i(ua);w(Ko.$$.fragment,im),im.forEach(t),rm.forEach(t),Ul=d(mi),ma=r(mi,"SPAN",{});var lm=i(ma);Hl=s(lm,"GPTJForSequenceClassification"),lm.forEach(t),mi.forEach(t),Wr=d(o),je=r(o,"DIV",{class:!0});var st=i(je);w(Xo.$$.fragment,st),Rl=d(st),fa=r(st,"P",{});var dm=i(fa);Vl=s(dm,"The GPT-J Model transformer with a sequence classification head on top (linear layer)."),dm.forEach(t),Kl=d(st),ws=r(st,"P",{});var vu=i(ws);bs=r(vu,"A",{href:!0});var cm=i(bs);Xl=s(cm,"GPTJForSequenceClassification"),cm.forEach(t),Yl=s(vu,` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),vu.forEach(t),Zl=d(st),tt=r(st,"P",{});var vt=i(tt);ed=s(vt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ga=r(vt,"CODE",{});var pm=i(ga);td=s(pm,"pad_token_id"),pm.forEach(t),od=s(vt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),_a=r(vt,"CODE",{});var hm=i(_a);nd=s(hm,"pad_token_id"),hm.forEach(t),sd=s(vt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ta=r(vt,"CODE",{});var um=i(Ta);ad=s(um,"inputs_embeds"),um.forEach(t),rd=s(vt," are passed instead of "),va=r(vt,"CODE",{});var mm=i(va);id=s(mm,"input_ids"),mm.forEach(t),ld=s(vt,`, it does the same (take the last value in
each row of the batch).`),vt.forEach(t),dd=d(st),Yo=r(st,"P",{});var fi=i(Yo);cd=s(fi,"This model is a PyTorch "),Zo=r(fi,"A",{href:!0,rel:!0});var fm=i(Zo);pd=s(fm,"torch.nn.Module"),fm.forEach(t),hd=s(fi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fi.forEach(t),ud=d(st),ne=r(st,"DIV",{class:!0});var $e=i(ne);w(en.$$.fragment,$e),md=d($e),Mt=r($e,"P",{});var Ns=i(Mt);fd=s(Ns,"The "),ys=r(Ns,"A",{href:!0});var gm=i(ys);gd=s(gm,"GPTJForSequenceClassification"),gm.forEach(t),_d=s(Ns," forward method, overrides the "),ka=r(Ns,"CODE",{});var _m=i(ka);Td=s(_m,"__call__"),_m.forEach(t),vd=s(Ns," special method."),Ns.forEach(t),kd=d($e),w(so.$$.fragment,$e),wd=d($e),wa=r($e,"P",{});var Tm=i(wa);bd=s(Tm,"Example of single-label classification:"),Tm.forEach(t),yd=d($e),w(tn.$$.fragment,$e),Pd=d($e),w(on.$$.fragment,$e),$d=d($e),ba=r($e,"P",{});var vm=i(ba);Fd=s(vm,"Example of multi-label classification:"),vm.forEach(t),jd=d($e),w(nn.$$.fragment,$e),Gd=d($e),w(sn.$$.fragment,$e),$e.forEach(t),st.forEach(t),Qr=d(o),qt=r(o,"H2",{class:!0});var gi=i(qt);ao=r(gi,"A",{id:!0,class:!0,href:!0});var km=i(ao);ya=r(km,"SPAN",{});var wm=i(ya);w(an.$$.fragment,wm),wm.forEach(t),km.forEach(t),Ed=d(gi),Pa=r(gi,"SPAN",{});var bm=i(Pa);Jd=s(bm,"GPTJForQuestionAnswering"),bm.forEach(t),gi.forEach(t),Ur=d(o),ot=r(o,"DIV",{class:!0});var jo=i(ot);w(rn.$$.fragment,jo),xd=d(jo),zt=r(jo,"P",{});var Ds=i(zt);Md=s(Ds,`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),$a=r(Ds,"CODE",{});var ym=i($a);qd=s(ym,"span start logits"),ym.forEach(t),zd=s(Ds," and "),Fa=r(Ds,"CODE",{});var Pm=i(Fa);Cd=s(Pm,"span end logits"),Pm.forEach(t),Ad=s(Ds,")."),Ds.forEach(t),Id=d(jo),ln=r(jo,"P",{});var _i=i(ln);Ld=s(_i,"This model is a PyTorch "),dn=r(_i,"A",{href:!0,rel:!0});var $m=i(dn);Sd=s($m,"torch.nn.Module"),$m.forEach(t),Nd=s(_i,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_i.forEach(t),Dd=d(jo),Me=r(jo,"DIV",{class:!0});var at=i(Me);w(cn.$$.fragment,at),Od=d(at),Ct=r(at,"P",{});var Os=i(Ct);Bd=s(Os,"The "),Ps=r(Os,"A",{href:!0});var Fm=i(Ps);Wd=s(Fm,"GPTJForQuestionAnswering"),Fm.forEach(t),Qd=s(Os," forward method, overrides the "),ja=r(Os,"CODE",{});var jm=i(ja);Ud=s(jm,"__call__"),jm.forEach(t),Hd=s(Os," special method."),Os.forEach(t),Rd=d(at),w(ro.$$.fragment,at),Vd=d(at),Ga=r(at,"P",{});var Gm=i(Ga);Kd=s(Gm,"Example:"),Gm.forEach(t),Xd=d(at),w(pn.$$.fragment,at),Yd=d(at),w(hn.$$.fragment,at),at.forEach(t),jo.forEach(t),Hr=d(o),At=r(o,"H2",{class:!0});var Ti=i(At);io=r(Ti,"A",{id:!0,class:!0,href:!0});var Em=i(io);Ea=r(Em,"SPAN",{});var Jm=i(Ea);w(un.$$.fragment,Jm),Jm.forEach(t),Em.forEach(t),Zd=d(Ti),Ja=r(Ti,"SPAN",{});var xm=i(Ja);ec=s(xm,"TFGPTJModel"),xm.forEach(t),Ti.forEach(t),Rr=d(o),Ge=r(o,"DIV",{class:!0});var rt=i(Ge);w(mn.$$.fragment,rt),tc=d(rt),xa=r(rt,"P",{});var Mm=i(xa);oc=s(Mm,"The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top."),Mm.forEach(t),nc=d(rt),fn=r(rt,"P",{});var vi=i(fn);sc=s(vi,"This model inherits from "),$s=r(vi,"A",{href:!0});var qm=i($s);ac=s(qm,"TFPreTrainedModel"),qm.forEach(t),rc=s(vi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vi.forEach(t),ic=d(rt),gn=r(rt,"P",{});var ki=i(gn);lc=s(ki,"This model is also a "),_n=r(ki,"A",{href:!0,rel:!0});var zm=i(_n);dc=s(zm,"tf.keras.Model"),zm.forEach(t),cc=s(ki,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ki.forEach(t),pc=d(rt),w(lo.$$.fragment,rt),hc=d(rt),We=r(rt,"DIV",{class:!0});var kt=i(We);w(Tn.$$.fragment,kt),uc=d(kt),It=r(kt,"P",{});var Bs=i(It);mc=s(Bs,"The "),Fs=r(Bs,"A",{href:!0});var Cm=i(Fs);fc=s(Cm,"TFGPTJModel"),Cm.forEach(t),gc=s(Bs," forward method, overrides the "),Ma=r(Bs,"CODE",{});var Am=i(Ma);_c=s(Am,"__call__"),Am.forEach(t),Tc=s(Bs," special method."),Bs.forEach(t),vc=d(kt),w(co.$$.fragment,kt),kc=d(kt),qa=r(kt,"P",{});var Im=i(qa);wc=s(Im,"Example:"),Im.forEach(t),bc=d(kt),w(vn.$$.fragment,kt),kt.forEach(t),rt.forEach(t),Vr=d(o),Lt=r(o,"H2",{class:!0});var wi=i(Lt);po=r(wi,"A",{id:!0,class:!0,href:!0});var Lm=i(po);za=r(Lm,"SPAN",{});var Sm=i(za);w(kn.$$.fragment,Sm),Sm.forEach(t),Lm.forEach(t),yc=d(wi),Ca=r(wi,"SPAN",{});var Nm=i(Ca);Pc=s(Nm,"TFGPTJForCausalLM"),Nm.forEach(t),wi.forEach(t),Kr=d(o),Ee=r(o,"DIV",{class:!0});var it=i(Ee);w(wn.$$.fragment,it),$c=d(it),Aa=r(it,"P",{});var Dm=i(Aa);Fc=s(Dm,"The GPT-J Model transformer with a language modeling head on top."),Dm.forEach(t),jc=d(it),bn=r(it,"P",{});var bi=i(bn);Gc=s(bi,"This model inherits from "),js=r(bi,"A",{href:!0});var Om=i(js);Ec=s(Om,"TFPreTrainedModel"),Om.forEach(t),Jc=s(bi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bi.forEach(t),xc=d(it),yn=r(it,"P",{});var yi=i(yn);Mc=s(yi,"This model is also a "),Pn=r(yi,"A",{href:!0,rel:!0});var Bm=i(Pn);qc=s(Bm,"tf.keras.Model"),Bm.forEach(t),zc=s(yi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yi.forEach(t),Cc=d(it),w(ho.$$.fragment,it),Ac=d(it),Qe=r(it,"DIV",{class:!0});var wt=i(Qe);w($n.$$.fragment,wt),Ic=d(wt),St=r(wt,"P",{});var Ws=i(St);Lc=s(Ws,"The "),Gs=r(Ws,"A",{href:!0});var Wm=i(Gs);Sc=s(Wm,"TFGPTJForCausalLM"),Wm.forEach(t),Nc=s(Ws," forward method, overrides the "),Ia=r(Ws,"CODE",{});var Qm=i(Ia);Dc=s(Qm,"__call__"),Qm.forEach(t),Oc=s(Ws," special method."),Ws.forEach(t),Bc=d(wt),w(uo.$$.fragment,wt),Wc=d(wt),La=r(wt,"P",{});var Um=i(La);Qc=s(Um,"Example:"),Um.forEach(t),Uc=d(wt),w(Fn.$$.fragment,wt),wt.forEach(t),it.forEach(t),Xr=d(o),Nt=r(o,"H2",{class:!0});var Pi=i(Nt);mo=r(Pi,"A",{id:!0,class:!0,href:!0});var Hm=i(mo);Sa=r(Hm,"SPAN",{});var Rm=i(Sa);w(jn.$$.fragment,Rm),Rm.forEach(t),Hm.forEach(t),Hc=d(Pi),Na=r(Pi,"SPAN",{});var Vm=i(Na);Rc=s(Vm,"TFGPTJForSequenceClassification"),Vm.forEach(t),Pi.forEach(t),Yr=d(o),ae=r(o,"DIV",{class:!0});var Ce=i(ae);w(Gn.$$.fragment,Ce),Vc=d(Ce),Da=r(Ce,"P",{});var Km=i(Da);Kc=s(Km,"The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Km.forEach(t),Xc=d(Ce),Es=r(Ce,"P",{});var ku=i(Es);Js=r(ku,"A",{href:!0});var Xm=i(Js);Yc=s(Xm,"GPTJForSequenceClassification"),Xm.forEach(t),Zc=s(ku,` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),ku.forEach(t),ep=d(Ce),nt=r(Ce,"P",{});var bt=i(nt);tp=s(bt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Oa=r(bt,"CODE",{});var Ym=i(Oa);op=s(Ym,"pad_token_id"),Ym.forEach(t),np=s(bt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ba=r(bt,"CODE",{});var Zm=i(Ba);sp=s(Zm,"pad_token_id"),Zm.forEach(t),ap=s(bt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Wa=r(bt,"CODE",{});var ef=i(Wa);rp=s(ef,"inputs_embeds"),ef.forEach(t),ip=s(bt," are passed instead of "),Qa=r(bt,"CODE",{});var tf=i(Qa);lp=s(tf,"input_ids"),tf.forEach(t),dp=s(bt,`, it does the same (take the last value in
each row of the batch).`),bt.forEach(t),cp=d(Ce),En=r(Ce,"P",{});var $i=i(En);pp=s($i,"This model inherits from "),xs=r($i,"A",{href:!0});var of=i(xs);hp=s(of,"TFPreTrainedModel"),of.forEach(t),up=s($i,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$i.forEach(t),mp=d(Ce),Jn=r(Ce,"P",{});var Fi=i(Jn);fp=s(Fi,"This model is also a "),xn=r(Fi,"A",{href:!0,rel:!0});var nf=i(xn);gp=s(nf,"tf.keras.Model"),nf.forEach(t),_p=s(Fi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fi.forEach(t),Tp=d(Ce),w(fo.$$.fragment,Ce),vp=d(Ce),qe=r(Ce,"DIV",{class:!0});var lt=i(qe);w(Mn.$$.fragment,lt),kp=d(lt),Dt=r(lt,"P",{});var Qs=i(Dt);wp=s(Qs,"The "),Ms=r(Qs,"A",{href:!0});var sf=i(Ms);bp=s(sf,"TFGPTJForSequenceClassification"),sf.forEach(t),yp=s(Qs," forward method, overrides the "),Ua=r(Qs,"CODE",{});var af=i(Ua);Pp=s(af,"__call__"),af.forEach(t),$p=s(Qs," special method."),Qs.forEach(t),Fp=d(lt),w(go.$$.fragment,lt),jp=d(lt),Ha=r(lt,"P",{});var rf=i(Ha);Gp=s(rf,"Example:"),rf.forEach(t),Ep=d(lt),w(qn.$$.fragment,lt),Jp=d(lt),w(zn.$$.fragment,lt),lt.forEach(t),Ce.forEach(t),Zr=d(o),Ot=r(o,"H2",{class:!0});var ji=i(Ot);_o=r(ji,"A",{id:!0,class:!0,href:!0});var lf=i(_o);Ra=r(lf,"SPAN",{});var df=i(Ra);w(Cn.$$.fragment,df),df.forEach(t),lf.forEach(t),xp=d(ji),Va=r(ji,"SPAN",{});var cf=i(Va);Mp=s(cf,"TFGPTJForQuestionAnswering"),cf.forEach(t),ji.forEach(t),ei=d(o),Je=r(o,"DIV",{class:!0});var dt=i(Je);w(An.$$.fragment,dt),qp=d(dt),Bt=r(dt,"P",{});var Us=i(Bt);zp=s(Us,`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Ka=r(Us,"CODE",{});var pf=i(Ka);Cp=s(pf,"span start logits"),pf.forEach(t),Ap=s(Us," and "),Xa=r(Us,"CODE",{});var hf=i(Xa);Ip=s(hf,"span end logits"),hf.forEach(t),Lp=s(Us,")."),Us.forEach(t),Sp=d(dt),In=r(dt,"P",{});var Gi=i(In);Np=s(Gi,"This model inherits from "),qs=r(Gi,"A",{href:!0});var uf=i(qs);Dp=s(uf,"TFPreTrainedModel"),uf.forEach(t),Op=s(Gi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gi.forEach(t),Bp=d(dt),Ln=r(dt,"P",{});var Ei=i(Ln);Wp=s(Ei,"This model is also a "),Sn=r(Ei,"A",{href:!0,rel:!0});var mf=i(Sn);Qp=s(mf,"tf.keras.Model"),mf.forEach(t),Up=s(Ei,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ei.forEach(t),Hp=d(dt),w(To.$$.fragment,dt),Rp=d(dt),ze=r(dt,"DIV",{class:!0});var ct=i(ze);w(Nn.$$.fragment,ct),Vp=d(ct),Wt=r(ct,"P",{});var Hs=i(Wt);Kp=s(Hs,"The "),zs=r(Hs,"A",{href:!0});var ff=i(zs);Xp=s(ff,"TFGPTJForQuestionAnswering"),ff.forEach(t),Yp=s(Hs," forward method, overrides the "),Ya=r(Hs,"CODE",{});var gf=i(Ya);Zp=s(gf,"__call__"),gf.forEach(t),eh=s(Hs," special method."),Hs.forEach(t),th=d(ct),w(vo.$$.fragment,ct),oh=d(ct),Za=r(ct,"P",{});var _f=i(Za);nh=s(_f,"Example:"),_f.forEach(t),sh=d(ct),w(Dn.$$.fragment,ct),ah=d(ct),w(On.$$.fragment,ct),ct.forEach(t),dt.forEach(t),ti=d(o),Qt=r(o,"H2",{class:!0});var Ji=i(Qt);ko=r(Ji,"A",{id:!0,class:!0,href:!0});var Tf=i(ko);er=r(Tf,"SPAN",{});var vf=i(er);w(Bn.$$.fragment,vf),vf.forEach(t),Tf.forEach(t),rh=d(Ji),tr=r(Ji,"SPAN",{});var kf=i(tr);ih=s(kf,"FlaxGPTJModel"),kf.forEach(t),Ji.forEach(t),oi=d(o),ye=r(o,"DIV",{class:!0});var Re=i(ye);w(Wn.$$.fragment,Re),lh=d(Re),or=r(Re,"P",{});var wf=i(or);dh=s(wf,"The bare GPTJ Model transformer outputting raw hidden-states without any specific head on top."),wf.forEach(t),ch=d(Re),Qn=r(Re,"P",{});var xi=i(Qn);ph=s(xi,"This model inherits from "),Cs=r(xi,"A",{href:!0});var bf=i(Cs);hh=s(bf,"FlaxPreTrainedModel"),bf.forEach(t),uh=s(xi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xi.forEach(t),mh=d(Re),Un=r(Re,"P",{});var Mi=i(Un);fh=s(Mi,`This model is also a Flax Linen
`),Hn=r(Mi,"A",{href:!0,rel:!0});var yf=i(Hn);gh=s(yf,"flax.nn.Module"),yf.forEach(t),_h=s(Mi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mi.forEach(t),Th=d(Re),nr=r(Re,"P",{});var Pf=i(nr);vh=s(Pf,"Finally, this model supports inherent JAX features such as:"),Pf.forEach(t),kh=d(Re),ut=r(Re,"UL",{});var Go=i(ut);sr=r(Go,"LI",{});var $f=i(sr);Rn=r($f,"A",{href:!0,rel:!0});var Ff=i(Rn);wh=s(Ff,"Just-In-Time (JIT) compilation"),Ff.forEach(t),$f.forEach(t),bh=d(Go),ar=r(Go,"LI",{});var jf=i(ar);Vn=r(jf,"A",{href:!0,rel:!0});var Gf=i(Vn);yh=s(Gf,"Automatic Differentiation"),Gf.forEach(t),jf.forEach(t),Ph=d(Go),rr=r(Go,"LI",{});var Ef=i(rr);Kn=r(Ef,"A",{href:!0,rel:!0});var Jf=i(Kn);$h=s(Jf,"Vectorization"),Jf.forEach(t),Ef.forEach(t),Fh=d(Go),ir=r(Go,"LI",{});var xf=i(ir);Xn=r(xf,"A",{href:!0,rel:!0});var Mf=i(Xn);jh=s(Mf,"Parallelization"),Mf.forEach(t),xf.forEach(t),Go.forEach(t),Gh=d(Re),Ue=r(Re,"DIV",{class:!0});var yt=i(Ue);w(Yn.$$.fragment,yt),Eh=d(yt),Ut=r(yt,"P",{});var Rs=i(Ut);Jh=s(Rs,"The "),lr=r(Rs,"CODE",{});var qf=i(lr);xh=s(qf,"FlaxGPTJPreTrainedModel"),qf.forEach(t),Mh=s(Rs,"forward method, overrides the "),dr=r(Rs,"CODE",{});var zf=i(dr);qh=s(zf,"__call__"),zf.forEach(t),zh=s(Rs," special method."),Rs.forEach(t),Ch=d(yt),w(wo.$$.fragment,yt),Ah=d(yt),cr=r(yt,"P",{});var Cf=i(cr);Ih=s(Cf,"Example:"),Cf.forEach(t),Lh=d(yt),w(Zn.$$.fragment,yt),yt.forEach(t),Re.forEach(t),ni=d(o),Ht=r(o,"H2",{class:!0});var qi=i(Ht);bo=r(qi,"A",{id:!0,class:!0,href:!0});var Af=i(bo);pr=r(Af,"SPAN",{});var If=i(pr);w(es.$$.fragment,If),If.forEach(t),Af.forEach(t),Sh=d(qi),hr=r(qi,"SPAN",{});var Lf=i(hr);Nh=s(Lf,"FlaxGPTJForCausalLM"),Lf.forEach(t),qi.forEach(t),si=d(o),Pe=r(o,"DIV",{class:!0});var Ve=i(Pe);w(ts.$$.fragment,Ve),Dh=d(Ve),ur=r(Ve,"P",{});var Sf=i(ur);Oh=s(Sf,"The GPTJ Model transformer with a language modeling head on top."),Sf.forEach(t),Bh=d(Ve),os=r(Ve,"P",{});var zi=i(os);Wh=s(zi,"This model inherits from "),As=r(zi,"A",{href:!0});var Nf=i(As);Qh=s(Nf,"FlaxPreTrainedModel"),Nf.forEach(t),Uh=s(zi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),zi.forEach(t),Hh=d(Ve),ns=r(Ve,"P",{});var Ci=i(ns);Rh=s(Ci,`This model is also a Flax Linen
`),ss=r(Ci,"A",{href:!0,rel:!0});var Df=i(ss);Vh=s(Df,"flax.nn.Module"),Df.forEach(t),Kh=s(Ci,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Ci.forEach(t),Xh=d(Ve),mr=r(Ve,"P",{});var Of=i(mr);Yh=s(Of,"Finally, this model supports inherent JAX features such as:"),Of.forEach(t),Zh=d(Ve),mt=r(Ve,"UL",{});var Eo=i(mt);fr=r(Eo,"LI",{});var Bf=i(fr);as=r(Bf,"A",{href:!0,rel:!0});var Wf=i(as);eu=s(Wf,"Just-In-Time (JIT) compilation"),Wf.forEach(t),Bf.forEach(t),tu=d(Eo),gr=r(Eo,"LI",{});var Qf=i(gr);rs=r(Qf,"A",{href:!0,rel:!0});var Uf=i(rs);ou=s(Uf,"Automatic Differentiation"),Uf.forEach(t),Qf.forEach(t),nu=d(Eo),_r=r(Eo,"LI",{});var Hf=i(_r);is=r(Hf,"A",{href:!0,rel:!0});var Rf=i(is);su=s(Rf,"Vectorization"),Rf.forEach(t),Hf.forEach(t),au=d(Eo),Tr=r(Eo,"LI",{});var Vf=i(Tr);ls=r(Vf,"A",{href:!0,rel:!0});var Kf=i(ls);ru=s(Kf,"Parallelization"),Kf.forEach(t),Vf.forEach(t),Eo.forEach(t),iu=d(Ve),He=r(Ve,"DIV",{class:!0});var Pt=i(He);w(ds.$$.fragment,Pt),lu=d(Pt),Rt=r(Pt,"P",{});var Vs=i(Rt);du=s(Vs,"The "),vr=r(Vs,"CODE",{});var Xf=i(vr);cu=s(Xf,"FlaxGPTJPreTrainedModel"),Xf.forEach(t),pu=s(Vs,"forward method, overrides the "),kr=r(Vs,"CODE",{});var Yf=i(kr);hu=s(Yf,"__call__"),Yf.forEach(t),uu=s(Vs," special method."),Vs.forEach(t),mu=d(Pt),w(yo.$$.fragment,Pt),fu=d(Pt),wr=r(Pt,"P",{});var Zf=i(wr);gu=s(Zf,"Example:"),Zf.forEach(t),_u=d(Pt),w(cs.$$.fragment,Pt),Pt.forEach(t),Ve.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(kg)),c(_,"id","gptj"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#gptj"),c(f,"class","relative group"),c(X,"id","overview"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#overview"),c(E,"class","relative group"),c(ee,"href","https://github.com/kingoflolz/mesh-transformer-jax"),c(ee,"rel","nofollow"),c(x,"href","https://pile.eleuther.ai/"),c(x,"rel","nofollow"),c(oe,"href","https://huggingface.co/stellaathena"),c(oe,"rel","nofollow"),c(q,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),c(q,"rel","nofollow"),c(z,"href","https://huggingface.co/EleutherAI/gpt-j-6B/tree/float16"),c(z,"rel","nofollow"),c(we,"href","https://github.com/kingoflolz/mesh-transformer-jax/blob/master/howto_finetune.md"),c(we,"rel","nofollow"),c(Jo,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),c(Jo,"rel","nofollow"),c(Kt,"id","generation"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#generation"),c($t,"class","relative group"),c(ms,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(Yt,"id","transformers.GPTJConfig"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.GPTJConfig"),c(Ft,"class","relative group"),c(gs,"href","/docs/transformers/main/en/model_doc/gptj#transformers.GPTJModel"),c(Ao,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),c(Ao,"rel","nofollow"),c(_s,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ts,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ye,"class","docstring"),c(Zt,"id","transformers.GPTJModel"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.GPTJModel"),c(jt,"class","relative group"),c(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Do,"rel","nofollow"),c(vs,"href","/docs/transformers/main/en/model_doc/gptj#transformers.GPTJModel"),c(Oe,"class","docstring"),c(ht,"class","docstring"),c(to,"id","transformers.GPTJForCausalLM"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.GPTJForCausalLM"),c(Et,"class","relative group"),c(Ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ho,"rel","nofollow"),c(ks,"href","/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForCausalLM"),c(Be,"class","docstring"),c(et,"class","docstring"),c(no,"id","transformers.GPTJForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.GPTJForSequenceClassification"),c(xt,"class","relative group"),c(bs,"href","/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),c(Zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Zo,"rel","nofollow"),c(ys,"href","/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),c(ne,"class","docstring"),c(je,"class","docstring"),c(ao,"id","transformers.GPTJForQuestionAnswering"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.GPTJForQuestionAnswering"),c(qt,"class","relative group"),c(dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(dn,"rel","nofollow"),c(Ps,"href","/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForQuestionAnswering"),c(Me,"class","docstring"),c(ot,"class","docstring"),c(io,"id","transformers.TFGPTJModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFGPTJModel"),c(At,"class","relative group"),c($s,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(_n,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(_n,"rel","nofollow"),c(Fs,"href","/docs/transformers/main/en/model_doc/gptj#transformers.TFGPTJModel"),c(We,"class","docstring"),c(Ge,"class","docstring"),c(po,"id","transformers.TFGPTJForCausalLM"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.TFGPTJForCausalLM"),c(Lt,"class","relative group"),c(js,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Pn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Pn,"rel","nofollow"),c(Gs,"href","/docs/transformers/main/en/model_doc/gptj#transformers.TFGPTJForCausalLM"),c(Qe,"class","docstring"),c(Ee,"class","docstring"),c(mo,"id","transformers.TFGPTJForSequenceClassification"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.TFGPTJForSequenceClassification"),c(Nt,"class","relative group"),c(Js,"href","/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),c(xs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(xn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(xn,"rel","nofollow"),c(Ms,"href","/docs/transformers/main/en/model_doc/gptj#transformers.TFGPTJForSequenceClassification"),c(qe,"class","docstring"),c(ae,"class","docstring"),c(_o,"id","transformers.TFGPTJForQuestionAnswering"),c(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_o,"href","#transformers.TFGPTJForQuestionAnswering"),c(Ot,"class","relative group"),c(qs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Sn,"rel","nofollow"),c(zs,"href","/docs/transformers/main/en/model_doc/gptj#transformers.TFGPTJForQuestionAnswering"),c(ze,"class","docstring"),c(Je,"class","docstring"),c(ko,"id","transformers.FlaxGPTJModel"),c(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ko,"href","#transformers.FlaxGPTJModel"),c(Qt,"class","relative group"),c(Cs,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Hn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Hn,"rel","nofollow"),c(Rn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Rn,"rel","nofollow"),c(Vn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Vn,"rel","nofollow"),c(Kn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Kn,"rel","nofollow"),c(Xn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Xn,"rel","nofollow"),c(Ue,"class","docstring"),c(ye,"class","docstring"),c(bo,"id","transformers.FlaxGPTJForCausalLM"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.FlaxGPTJForCausalLM"),c(Ht,"class","relative group"),c(As,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ss,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ss,"rel","nofollow"),c(as,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(as,"rel","nofollow"),c(rs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(rs,"rel","nofollow"),c(is,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(is,"rel","nofollow"),c(ls,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ls,"rel","nofollow"),c(He,"class","docstring"),c(Pe,"class","docstring")},m(o,m){e(document.head,p),u(o,F,m),u(o,f,m),e(f,_),e(_,v),b(T,v,null),e(f,g),e(f,j),e(j,ue),u(o,K,m),u(o,E,m),e(E,X),e(X,O),b(Z,O,null),e(E,me),e(E,B),e(B,fe),u(o,ie,m),u(o,L,m),e(L,A),e(L,ee),e(ee,te),e(L,J),e(L,x),e(x,ge),e(L,U),u(o,le,m),u(o,Y,m),e(Y,H),e(Y,oe),e(oe,_e),e(Y,M),u(o,de,m),u(o,S,m),e(S,Te),u(o,ce,m),u(o,N,m),e(N,W),e(W,ve),e(W,q),e(q,ke),e(W,R),e(W,se),e(se,h),e(W,G),e(W,V),e(V,Ae),e(W,Ie),e(W,z),e(z,Le),e(W,Se),u(o,xe,m),b(C,o,m),u(o,Q,m),u(o,pe,m),e(pe,Fe),e(Fe,D),e(D,Ne),e(D,we),e(we,be),e(pe,De),e(pe,Ks),e(Ks,pt),e(pt,Ai),e(pt,Jo),e(Jo,Ii),e(pt,Li),e(pt,Xs),e(Xs,Si),e(pt,Ni),e(pt,Ys),e(Ys,Di),e(pt,Oi),u(o,Mr,m),u(o,$t,m),e($t,Kt),e(Kt,Zs),b(xo,Zs,null),e($t,Bi),e($t,ea),e(ea,Wi),u(o,qr,m),u(o,Xt,m),e(Xt,Qi),e(Xt,ms),e(ms,Ui),e(Xt,Hi),u(o,zr,m),b(Mo,o,m),u(o,Cr,m),u(o,fs,m),e(fs,Ri),u(o,Ar,m),b(qo,o,m),u(o,Ir,m),u(o,Ft,m),e(Ft,Yt),e(Yt,ta),b(zo,ta,null),e(Ft,Vi),e(Ft,oa),e(oa,Ki),u(o,Lr,m),u(o,Ye,m),b(Co,Ye,null),e(Ye,Xi),e(Ye,Ze),e(Ze,Yi),e(Ze,gs),e(gs,Zi),e(Ze,el),e(Ze,Ao),e(Ao,tl),e(Ze,ol),e(Ze,_s),e(_s,nl),e(Ze,sl),e(Ze,Ts),e(Ts,al),e(Ze,rl),e(Ye,il),e(Ye,na),e(na,ll),e(Ye,dl),b(Io,Ye,null),u(o,Sr,m),u(o,jt,m),e(jt,Zt),e(Zt,sa),b(Lo,sa,null),e(jt,cl),e(jt,aa),e(aa,pl),u(o,Nr,m),u(o,ht,m),b(So,ht,null),e(ht,hl),e(ht,No),e(No,ul),e(No,Do),e(Do,ml),e(No,fl),e(ht,gl),e(ht,Oe),b(Oo,Oe,null),e(Oe,_l),e(Oe,Gt),e(Gt,Tl),e(Gt,vs),e(vs,vl),e(Gt,kl),e(Gt,ra),e(ra,wl),e(Gt,bl),e(Oe,yl),b(eo,Oe,null),e(Oe,Pl),e(Oe,ia),e(ia,$l),e(Oe,Fl),b(Bo,Oe,null),u(o,Dr,m),u(o,Et,m),e(Et,to),e(to,la),b(Wo,la,null),e(Et,jl),e(Et,da),e(da,Gl),u(o,Or,m),u(o,et,m),b(Qo,et,null),e(et,El),e(et,ca),e(ca,Jl),e(et,xl),e(et,Uo),e(Uo,Ml),e(Uo,Ho),e(Ho,ql),e(Uo,zl),e(et,Cl),e(et,Be),b(Ro,Be,null),e(Be,Al),e(Be,Jt),e(Jt,Il),e(Jt,ks),e(ks,Ll),e(Jt,Sl),e(Jt,pa),e(pa,Nl),e(Jt,Dl),e(Be,Ol),b(oo,Be,null),e(Be,Bl),e(Be,ha),e(ha,Wl),e(Be,Ql),b(Vo,Be,null),u(o,Br,m),u(o,xt,m),e(xt,no),e(no,ua),b(Ko,ua,null),e(xt,Ul),e(xt,ma),e(ma,Hl),u(o,Wr,m),u(o,je,m),b(Xo,je,null),e(je,Rl),e(je,fa),e(fa,Vl),e(je,Kl),e(je,ws),e(ws,bs),e(bs,Xl),e(ws,Yl),e(je,Zl),e(je,tt),e(tt,ed),e(tt,ga),e(ga,td),e(tt,od),e(tt,_a),e(_a,nd),e(tt,sd),e(tt,Ta),e(Ta,ad),e(tt,rd),e(tt,va),e(va,id),e(tt,ld),e(je,dd),e(je,Yo),e(Yo,cd),e(Yo,Zo),e(Zo,pd),e(Yo,hd),e(je,ud),e(je,ne),b(en,ne,null),e(ne,md),e(ne,Mt),e(Mt,fd),e(Mt,ys),e(ys,gd),e(Mt,_d),e(Mt,ka),e(ka,Td),e(Mt,vd),e(ne,kd),b(so,ne,null),e(ne,wd),e(ne,wa),e(wa,bd),e(ne,yd),b(tn,ne,null),e(ne,Pd),b(on,ne,null),e(ne,$d),e(ne,ba),e(ba,Fd),e(ne,jd),b(nn,ne,null),e(ne,Gd),b(sn,ne,null),u(o,Qr,m),u(o,qt,m),e(qt,ao),e(ao,ya),b(an,ya,null),e(qt,Ed),e(qt,Pa),e(Pa,Jd),u(o,Ur,m),u(o,ot,m),b(rn,ot,null),e(ot,xd),e(ot,zt),e(zt,Md),e(zt,$a),e($a,qd),e(zt,zd),e(zt,Fa),e(Fa,Cd),e(zt,Ad),e(ot,Id),e(ot,ln),e(ln,Ld),e(ln,dn),e(dn,Sd),e(ln,Nd),e(ot,Dd),e(ot,Me),b(cn,Me,null),e(Me,Od),e(Me,Ct),e(Ct,Bd),e(Ct,Ps),e(Ps,Wd),e(Ct,Qd),e(Ct,ja),e(ja,Ud),e(Ct,Hd),e(Me,Rd),b(ro,Me,null),e(Me,Vd),e(Me,Ga),e(Ga,Kd),e(Me,Xd),b(pn,Me,null),e(Me,Yd),b(hn,Me,null),u(o,Hr,m),u(o,At,m),e(At,io),e(io,Ea),b(un,Ea,null),e(At,Zd),e(At,Ja),e(Ja,ec),u(o,Rr,m),u(o,Ge,m),b(mn,Ge,null),e(Ge,tc),e(Ge,xa),e(xa,oc),e(Ge,nc),e(Ge,fn),e(fn,sc),e(fn,$s),e($s,ac),e(fn,rc),e(Ge,ic),e(Ge,gn),e(gn,lc),e(gn,_n),e(_n,dc),e(gn,cc),e(Ge,pc),b(lo,Ge,null),e(Ge,hc),e(Ge,We),b(Tn,We,null),e(We,uc),e(We,It),e(It,mc),e(It,Fs),e(Fs,fc),e(It,gc),e(It,Ma),e(Ma,_c),e(It,Tc),e(We,vc),b(co,We,null),e(We,kc),e(We,qa),e(qa,wc),e(We,bc),b(vn,We,null),u(o,Vr,m),u(o,Lt,m),e(Lt,po),e(po,za),b(kn,za,null),e(Lt,yc),e(Lt,Ca),e(Ca,Pc),u(o,Kr,m),u(o,Ee,m),b(wn,Ee,null),e(Ee,$c),e(Ee,Aa),e(Aa,Fc),e(Ee,jc),e(Ee,bn),e(bn,Gc),e(bn,js),e(js,Ec),e(bn,Jc),e(Ee,xc),e(Ee,yn),e(yn,Mc),e(yn,Pn),e(Pn,qc),e(yn,zc),e(Ee,Cc),b(ho,Ee,null),e(Ee,Ac),e(Ee,Qe),b($n,Qe,null),e(Qe,Ic),e(Qe,St),e(St,Lc),e(St,Gs),e(Gs,Sc),e(St,Nc),e(St,Ia),e(Ia,Dc),e(St,Oc),e(Qe,Bc),b(uo,Qe,null),e(Qe,Wc),e(Qe,La),e(La,Qc),e(Qe,Uc),b(Fn,Qe,null),u(o,Xr,m),u(o,Nt,m),e(Nt,mo),e(mo,Sa),b(jn,Sa,null),e(Nt,Hc),e(Nt,Na),e(Na,Rc),u(o,Yr,m),u(o,ae,m),b(Gn,ae,null),e(ae,Vc),e(ae,Da),e(Da,Kc),e(ae,Xc),e(ae,Es),e(Es,Js),e(Js,Yc),e(Es,Zc),e(ae,ep),e(ae,nt),e(nt,tp),e(nt,Oa),e(Oa,op),e(nt,np),e(nt,Ba),e(Ba,sp),e(nt,ap),e(nt,Wa),e(Wa,rp),e(nt,ip),e(nt,Qa),e(Qa,lp),e(nt,dp),e(ae,cp),e(ae,En),e(En,pp),e(En,xs),e(xs,hp),e(En,up),e(ae,mp),e(ae,Jn),e(Jn,fp),e(Jn,xn),e(xn,gp),e(Jn,_p),e(ae,Tp),b(fo,ae,null),e(ae,vp),e(ae,qe),b(Mn,qe,null),e(qe,kp),e(qe,Dt),e(Dt,wp),e(Dt,Ms),e(Ms,bp),e(Dt,yp),e(Dt,Ua),e(Ua,Pp),e(Dt,$p),e(qe,Fp),b(go,qe,null),e(qe,jp),e(qe,Ha),e(Ha,Gp),e(qe,Ep),b(qn,qe,null),e(qe,Jp),b(zn,qe,null),u(o,Zr,m),u(o,Ot,m),e(Ot,_o),e(_o,Ra),b(Cn,Ra,null),e(Ot,xp),e(Ot,Va),e(Va,Mp),u(o,ei,m),u(o,Je,m),b(An,Je,null),e(Je,qp),e(Je,Bt),e(Bt,zp),e(Bt,Ka),e(Ka,Cp),e(Bt,Ap),e(Bt,Xa),e(Xa,Ip),e(Bt,Lp),e(Je,Sp),e(Je,In),e(In,Np),e(In,qs),e(qs,Dp),e(In,Op),e(Je,Bp),e(Je,Ln),e(Ln,Wp),e(Ln,Sn),e(Sn,Qp),e(Ln,Up),e(Je,Hp),b(To,Je,null),e(Je,Rp),e(Je,ze),b(Nn,ze,null),e(ze,Vp),e(ze,Wt),e(Wt,Kp),e(Wt,zs),e(zs,Xp),e(Wt,Yp),e(Wt,Ya),e(Ya,Zp),e(Wt,eh),e(ze,th),b(vo,ze,null),e(ze,oh),e(ze,Za),e(Za,nh),e(ze,sh),b(Dn,ze,null),e(ze,ah),b(On,ze,null),u(o,ti,m),u(o,Qt,m),e(Qt,ko),e(ko,er),b(Bn,er,null),e(Qt,rh),e(Qt,tr),e(tr,ih),u(o,oi,m),u(o,ye,m),b(Wn,ye,null),e(ye,lh),e(ye,or),e(or,dh),e(ye,ch),e(ye,Qn),e(Qn,ph),e(Qn,Cs),e(Cs,hh),e(Qn,uh),e(ye,mh),e(ye,Un),e(Un,fh),e(Un,Hn),e(Hn,gh),e(Un,_h),e(ye,Th),e(ye,nr),e(nr,vh),e(ye,kh),e(ye,ut),e(ut,sr),e(sr,Rn),e(Rn,wh),e(ut,bh),e(ut,ar),e(ar,Vn),e(Vn,yh),e(ut,Ph),e(ut,rr),e(rr,Kn),e(Kn,$h),e(ut,Fh),e(ut,ir),e(ir,Xn),e(Xn,jh),e(ye,Gh),e(ye,Ue),b(Yn,Ue,null),e(Ue,Eh),e(Ue,Ut),e(Ut,Jh),e(Ut,lr),e(lr,xh),e(Ut,Mh),e(Ut,dr),e(dr,qh),e(Ut,zh),e(Ue,Ch),b(wo,Ue,null),e(Ue,Ah),e(Ue,cr),e(cr,Ih),e(Ue,Lh),b(Zn,Ue,null),u(o,ni,m),u(o,Ht,m),e(Ht,bo),e(bo,pr),b(es,pr,null),e(Ht,Sh),e(Ht,hr),e(hr,Nh),u(o,si,m),u(o,Pe,m),b(ts,Pe,null),e(Pe,Dh),e(Pe,ur),e(ur,Oh),e(Pe,Bh),e(Pe,os),e(os,Wh),e(os,As),e(As,Qh),e(os,Uh),e(Pe,Hh),e(Pe,ns),e(ns,Rh),e(ns,ss),e(ss,Vh),e(ns,Kh),e(Pe,Xh),e(Pe,mr),e(mr,Yh),e(Pe,Zh),e(Pe,mt),e(mt,fr),e(fr,as),e(as,eu),e(mt,tu),e(mt,gr),e(gr,rs),e(rs,ou),e(mt,nu),e(mt,_r),e(_r,is),e(is,su),e(mt,au),e(mt,Tr),e(Tr,ls),e(ls,ru),e(Pe,iu),e(Pe,He),b(ds,He,null),e(He,lu),e(He,Rt),e(Rt,du),e(Rt,vr),e(vr,cu),e(Rt,pu),e(Rt,kr),e(kr,hu),e(Rt,uu),e(He,mu),b(yo,He,null),e(He,fu),e(He,wr),e(wr,gu),e(He,_u),b(cs,He,null),ai=!0},p(o,[m]){const ps={};m&2&&(ps.$$scope={dirty:m,ctx:o}),eo.$set(ps);const br={};m&2&&(br.$$scope={dirty:m,ctx:o}),oo.$set(br);const yr={};m&2&&(yr.$$scope={dirty:m,ctx:o}),so.$set(yr);const Pr={};m&2&&(Pr.$$scope={dirty:m,ctx:o}),ro.$set(Pr);const hs={};m&2&&(hs.$$scope={dirty:m,ctx:o}),lo.$set(hs);const $r={};m&2&&($r.$$scope={dirty:m,ctx:o}),co.$set($r);const Fr={};m&2&&(Fr.$$scope={dirty:m,ctx:o}),ho.$set(Fr);const jr={};m&2&&(jr.$$scope={dirty:m,ctx:o}),uo.$set(jr);const Vt={};m&2&&(Vt.$$scope={dirty:m,ctx:o}),fo.$set(Vt);const Gr={};m&2&&(Gr.$$scope={dirty:m,ctx:o}),go.$set(Gr);const Er={};m&2&&(Er.$$scope={dirty:m,ctx:o}),To.$set(Er);const us={};m&2&&(us.$$scope={dirty:m,ctx:o}),vo.$set(us);const Jr={};m&2&&(Jr.$$scope={dirty:m,ctx:o}),wo.$set(Jr);const xr={};m&2&&(xr.$$scope={dirty:m,ctx:o}),yo.$set(xr)},i(o){ai||(y(T.$$.fragment,o),y(Z.$$.fragment,o),y(C.$$.fragment,o),y(xo.$$.fragment,o),y(Mo.$$.fragment,o),y(qo.$$.fragment,o),y(zo.$$.fragment,o),y(Co.$$.fragment,o),y(Io.$$.fragment,o),y(Lo.$$.fragment,o),y(So.$$.fragment,o),y(Oo.$$.fragment,o),y(eo.$$.fragment,o),y(Bo.$$.fragment,o),y(Wo.$$.fragment,o),y(Qo.$$.fragment,o),y(Ro.$$.fragment,o),y(oo.$$.fragment,o),y(Vo.$$.fragment,o),y(Ko.$$.fragment,o),y(Xo.$$.fragment,o),y(en.$$.fragment,o),y(so.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(cn.$$.fragment,o),y(ro.$$.fragment,o),y(pn.$$.fragment,o),y(hn.$$.fragment,o),y(un.$$.fragment,o),y(mn.$$.fragment,o),y(lo.$$.fragment,o),y(Tn.$$.fragment,o),y(co.$$.fragment,o),y(vn.$$.fragment,o),y(kn.$$.fragment,o),y(wn.$$.fragment,o),y(ho.$$.fragment,o),y($n.$$.fragment,o),y(uo.$$.fragment,o),y(Fn.$$.fragment,o),y(jn.$$.fragment,o),y(Gn.$$.fragment,o),y(fo.$$.fragment,o),y(Mn.$$.fragment,o),y(go.$$.fragment,o),y(qn.$$.fragment,o),y(zn.$$.fragment,o),y(Cn.$$.fragment,o),y(An.$$.fragment,o),y(To.$$.fragment,o),y(Nn.$$.fragment,o),y(vo.$$.fragment,o),y(Dn.$$.fragment,o),y(On.$$.fragment,o),y(Bn.$$.fragment,o),y(Wn.$$.fragment,o),y(Yn.$$.fragment,o),y(wo.$$.fragment,o),y(Zn.$$.fragment,o),y(es.$$.fragment,o),y(ts.$$.fragment,o),y(ds.$$.fragment,o),y(yo.$$.fragment,o),y(cs.$$.fragment,o),ai=!0)},o(o){P(T.$$.fragment,o),P(Z.$$.fragment,o),P(C.$$.fragment,o),P(xo.$$.fragment,o),P(Mo.$$.fragment,o),P(qo.$$.fragment,o),P(zo.$$.fragment,o),P(Co.$$.fragment,o),P(Io.$$.fragment,o),P(Lo.$$.fragment,o),P(So.$$.fragment,o),P(Oo.$$.fragment,o),P(eo.$$.fragment,o),P(Bo.$$.fragment,o),P(Wo.$$.fragment,o),P(Qo.$$.fragment,o),P(Ro.$$.fragment,o),P(oo.$$.fragment,o),P(Vo.$$.fragment,o),P(Ko.$$.fragment,o),P(Xo.$$.fragment,o),P(en.$$.fragment,o),P(so.$$.fragment,o),P(tn.$$.fragment,o),P(on.$$.fragment,o),P(nn.$$.fragment,o),P(sn.$$.fragment,o),P(an.$$.fragment,o),P(rn.$$.fragment,o),P(cn.$$.fragment,o),P(ro.$$.fragment,o),P(pn.$$.fragment,o),P(hn.$$.fragment,o),P(un.$$.fragment,o),P(mn.$$.fragment,o),P(lo.$$.fragment,o),P(Tn.$$.fragment,o),P(co.$$.fragment,o),P(vn.$$.fragment,o),P(kn.$$.fragment,o),P(wn.$$.fragment,o),P(ho.$$.fragment,o),P($n.$$.fragment,o),P(uo.$$.fragment,o),P(Fn.$$.fragment,o),P(jn.$$.fragment,o),P(Gn.$$.fragment,o),P(fo.$$.fragment,o),P(Mn.$$.fragment,o),P(go.$$.fragment,o),P(qn.$$.fragment,o),P(zn.$$.fragment,o),P(Cn.$$.fragment,o),P(An.$$.fragment,o),P(To.$$.fragment,o),P(Nn.$$.fragment,o),P(vo.$$.fragment,o),P(Dn.$$.fragment,o),P(On.$$.fragment,o),P(Bn.$$.fragment,o),P(Wn.$$.fragment,o),P(Yn.$$.fragment,o),P(wo.$$.fragment,o),P(Zn.$$.fragment,o),P(es.$$.fragment,o),P(ts.$$.fragment,o),P(ds.$$.fragment,o),P(yo.$$.fragment,o),P(cs.$$.fragment,o),ai=!1},d(o){t(p),o&&t(F),o&&t(f),$(T),o&&t(K),o&&t(E),$(Z),o&&t(ie),o&&t(L),o&&t(le),o&&t(Y),o&&t(de),o&&t(S),o&&t(ce),o&&t(N),o&&t(xe),$(C,o),o&&t(Q),o&&t(pe),o&&t(Mr),o&&t($t),$(xo),o&&t(qr),o&&t(Xt),o&&t(zr),$(Mo,o),o&&t(Cr),o&&t(fs),o&&t(Ar),$(qo,o),o&&t(Ir),o&&t(Ft),$(zo),o&&t(Lr),o&&t(Ye),$(Co),$(Io),o&&t(Sr),o&&t(jt),$(Lo),o&&t(Nr),o&&t(ht),$(So),$(Oo),$(eo),$(Bo),o&&t(Dr),o&&t(Et),$(Wo),o&&t(Or),o&&t(et),$(Qo),$(Ro),$(oo),$(Vo),o&&t(Br),o&&t(xt),$(Ko),o&&t(Wr),o&&t(je),$(Xo),$(en),$(so),$(tn),$(on),$(nn),$(sn),o&&t(Qr),o&&t(qt),$(an),o&&t(Ur),o&&t(ot),$(rn),$(cn),$(ro),$(pn),$(hn),o&&t(Hr),o&&t(At),$(un),o&&t(Rr),o&&t(Ge),$(mn),$(lo),$(Tn),$(co),$(vn),o&&t(Vr),o&&t(Lt),$(kn),o&&t(Kr),o&&t(Ee),$(wn),$(ho),$($n),$(uo),$(Fn),o&&t(Xr),o&&t(Nt),$(jn),o&&t(Yr),o&&t(ae),$(Gn),$(fo),$(Mn),$(go),$(qn),$(zn),o&&t(Zr),o&&t(Ot),$(Cn),o&&t(ei),o&&t(Je),$(An),$(To),$(Nn),$(vo),$(Dn),$(On),o&&t(ti),o&&t(Qt),$(Bn),o&&t(oi),o&&t(ye),$(Wn),$(Yn),$(wo),$(Zn),o&&t(ni),o&&t(Ht),$(es),o&&t(si),o&&t(Pe),$(ts),$(ds),$(yo),$(cs)}}}const kg={local:"gptj",sections:[{local:"overview",sections:[{local:"generation",title:"Generation"}],title:"Overview"},{local:"transformers.GPTJConfig",title:"GPTJConfig"},{local:"transformers.GPTJModel",title:"GPTJModel"},{local:"transformers.GPTJForCausalLM",title:"GPTJForCausalLM"},{local:"transformers.GPTJForSequenceClassification",title:"GPTJForSequenceClassification"},{local:"transformers.GPTJForQuestionAnswering",title:"GPTJForQuestionAnswering"},{local:"transformers.TFGPTJModel",title:"TFGPTJModel"},{local:"transformers.TFGPTJForCausalLM",title:"TFGPTJForCausalLM"},{local:"transformers.TFGPTJForSequenceClassification",title:"TFGPTJForSequenceClassification"},{local:"transformers.TFGPTJForQuestionAnswering",title:"TFGPTJForQuestionAnswering"},{local:"transformers.FlaxGPTJModel",title:"FlaxGPTJModel"},{local:"transformers.FlaxGPTJForCausalLM",title:"FlaxGPTJForCausalLM"}],title:"GPT-J"};function wg(I){return sg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jg extends eg{constructor(p){super();tg(this,p,wg,vg,og,{})}}export{jg as default,kg as metadata};
