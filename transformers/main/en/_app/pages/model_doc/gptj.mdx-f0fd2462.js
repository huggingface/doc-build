import{S as eg,i as tg,s as og,e as a,k as l,w as v,t as n,M as ng,c as r,d as t,m as d,a as i,x as k,h as s,b as c,F as e,g as u,y as w,q as b,o as P,B as $,v as sg}from"../../chunks/vendor-6b77c823.js";import{T as Ke}from"../../chunks/Tip-39098574.js";import{D as re}from"../../chunks/Docstring-17b815d9.js";import{C as he}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Xe}from"../../chunks/IconCopyLink-7a11ce68.js";function ag(I){let p,F,f,_,y;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),y=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,y)},d(T){T&&t(p)}}}function rg(I){let p,F,f,_,y;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),y=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,y)},d(T){T&&t(p)}}}function ig(I){let p,F,f,_,y;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),y=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,y)},d(T){T&&t(p)}}}function lg(I){let p,F,f,_,y;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),y=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,y)},d(T){T&&t(p)}}}function dg(I){let p,F,f,_,y,T,g,j,ue,K,x,X,O,Z,me,W,fe,ie,L,A,ee,te,J,E,ge,B,le,Y,H,oe,_e,M,de,N,Te,ce,S,U,ye,q,ve,R,se;return{c(){p=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),_=a("ul"),y=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),j=a("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),x=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=a("code"),fe=n("model(inputs)"),ie=n("."),L=l(),A=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=l(),J=a("ul"),E=a("li"),ge=n("a single Tensor with "),B=a("code"),le=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),_e=l(),M=a("li"),de=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Te=n("model([input_ids, attention_mask])"),ce=n(" or "),S=a("code"),U=n("model([input_ids, attention_mask, token_type_ids])"),ye=l(),q=a("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var G=i(p);F=s(G,"TF 2.0 models accepts two formats as inputs:"),G.forEach(t),f=d(h),_=r(h,"UL",{});var V=i(_);y=r(V,"LI",{});var Ae=i(y);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),g=d(V),j=r(V,"LI",{});var Ie=i(j);ue=s(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),V.forEach(t),K=d(h),x=r(h,"P",{});var C=i(x);X=s(C,"This second option is useful when using "),O=r(C,"CODE",{});var Le=i(O);Z=s(Le,"tf.keras.Model.fit"),Le.forEach(t),me=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=r(C,"CODE",{});var Ne=i(W);fe=s(Ne,"model(inputs)"),Ne.forEach(t),ie=s(C,"."),C.forEach(t),L=d(h),A=r(h,"P",{});var Ee=i(A);ee=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),te=d(h),J=r(h,"UL",{});var z=i(J);E=r(z,"LI",{});var Q=i(E);ge=s(Q,"a single Tensor with "),B=r(Q,"CODE",{});var pe=i(B);le=s(pe,"input_ids"),pe.forEach(t),Y=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);oe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),_e=d(z),M=r(z,"LI",{});var D=i(M);de=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(D,"CODE",{});var Se=i(N);Te=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),ce=s(D," or "),S=r(D,"CODE",{});var ke=i(S);U=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),D.forEach(t),ye=d(z),q=r(z,"LI",{});var we=i(q);ve=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(we,"CODE",{});var De=i(R);se=s(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),we.forEach(t),z.forEach(t)},m(h,G){u(h,p,G),e(p,F),u(h,f,G),u(h,_,G),e(_,y),e(y,T),e(_,g),e(_,j),e(j,ue),u(h,K,G),u(h,x,G),e(x,X),e(x,O),e(O,Z),e(x,me),e(x,W),e(W,fe),e(x,ie),u(h,L,G),u(h,A,G),e(A,ee),u(h,te,G),u(h,J,G),e(J,E),e(E,ge),e(E,B),e(B,le),e(E,Y),e(E,H),e(H,oe),e(J,_e),e(J,M),e(M,de),e(M,N),e(N,Te),e(M,ce),e(M,S),e(S,U),e(J,ye),e(J,q),e(q,ve),e(q,R),e(R,se)},d(h){h&&t(p),h&&t(f),h&&t(_),h&&t(K),h&&t(x),h&&t(L),h&&t(A),h&&t(te),h&&t(J)}}}function cg(I){let p,F,f,_,y;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),y=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,y)},d(T){T&&t(p)}}}function pg(I){let p,F,f,_,y,T,g,j,ue,K,x,X,O,Z,me,W,fe,ie,L,A,ee,te,J,E,ge,B,le,Y,H,oe,_e,M,de,N,Te,ce,S,U,ye,q,ve,R,se;return{c(){p=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),_=a("ul"),y=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),j=a("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),x=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=a("code"),fe=n("model(inputs)"),ie=n("."),L=l(),A=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=l(),J=a("ul"),E=a("li"),ge=n("a single Tensor with "),B=a("code"),le=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),_e=l(),M=a("li"),de=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Te=n("model([input_ids, attention_mask])"),ce=n(" or "),S=a("code"),U=n("model([input_ids, attention_mask, token_type_ids])"),ye=l(),q=a("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var G=i(p);F=s(G,"TF 2.0 models accepts two formats as inputs:"),G.forEach(t),f=d(h),_=r(h,"UL",{});var V=i(_);y=r(V,"LI",{});var Ae=i(y);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),g=d(V),j=r(V,"LI",{});var Ie=i(j);ue=s(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),V.forEach(t),K=d(h),x=r(h,"P",{});var C=i(x);X=s(C,"This second option is useful when using "),O=r(C,"CODE",{});var Le=i(O);Z=s(Le,"tf.keras.Model.fit"),Le.forEach(t),me=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=r(C,"CODE",{});var Ne=i(W);fe=s(Ne,"model(inputs)"),Ne.forEach(t),ie=s(C,"."),C.forEach(t),L=d(h),A=r(h,"P",{});var Ee=i(A);ee=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),te=d(h),J=r(h,"UL",{});var z=i(J);E=r(z,"LI",{});var Q=i(E);ge=s(Q,"a single Tensor with "),B=r(Q,"CODE",{});var pe=i(B);le=s(pe,"input_ids"),pe.forEach(t),Y=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);oe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),_e=d(z),M=r(z,"LI",{});var D=i(M);de=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(D,"CODE",{});var Se=i(N);Te=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),ce=s(D," or "),S=r(D,"CODE",{});var ke=i(S);U=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),D.forEach(t),ye=d(z),q=r(z,"LI",{});var we=i(q);ve=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(we,"CODE",{});var De=i(R);se=s(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),we.forEach(t),z.forEach(t)},m(h,G){u(h,p,G),e(p,F),u(h,f,G),u(h,_,G),e(_,y),e(y,T),e(_,g),e(_,j),e(j,ue),u(h,K,G),u(h,x,G),e(x,X),e(x,O),e(O,Z),e(x,me),e(x,W),e(W,fe),e(x,ie),u(h,L,G),u(h,A,G),e(A,ee),u(h,te,G),u(h,J,G),e(J,E),e(E,ge),e(E,B),e(B,le),e(E,Y),e(E,H),e(H,oe),e(J,_e),e(J,M),e(M,de),e(M,N),e(N,Te),e(M,ce),e(M,S),e(S,U),e(J,ye),e(J,q),e(q,ve),e(q,R),e(R,se)},d(h){h&&t(p),h&&t(f),h&&t(_),h&&t(K),h&&t(x),h&&t(L),h&&t(A),h&&t(te),h&&t(J)}}}function hg(I){let p,F,f,_,y;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),y=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,y)},d(T){T&&t(p)}}}function ug(I){let p,F,f,_,y,T,g,j,ue,K,x,X,O,Z,me,W,fe,ie,L,A,ee,te,J,E,ge,B,le,Y,H,oe,_e,M,de,N,Te,ce,S,U,ye,q,ve,R,se;return{c(){p=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),_=a("ul"),y=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),j=a("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),x=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=a("code"),fe=n("model(inputs)"),ie=n("."),L=l(),A=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=l(),J=a("ul"),E=a("li"),ge=n("a single Tensor with "),B=a("code"),le=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),_e=l(),M=a("li"),de=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Te=n("model([input_ids, attention_mask])"),ce=n(" or "),S=a("code"),U=n("model([input_ids, attention_mask, token_type_ids])"),ye=l(),q=a("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var G=i(p);F=s(G,"TF 2.0 models accepts two formats as inputs:"),G.forEach(t),f=d(h),_=r(h,"UL",{});var V=i(_);y=r(V,"LI",{});var Ae=i(y);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),g=d(V),j=r(V,"LI",{});var Ie=i(j);ue=s(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),V.forEach(t),K=d(h),x=r(h,"P",{});var C=i(x);X=s(C,"This second option is useful when using "),O=r(C,"CODE",{});var Le=i(O);Z=s(Le,"tf.keras.Model.fit"),Le.forEach(t),me=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=r(C,"CODE",{});var Ne=i(W);fe=s(Ne,"model(inputs)"),Ne.forEach(t),ie=s(C,"."),C.forEach(t),L=d(h),A=r(h,"P",{});var Ee=i(A);ee=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),te=d(h),J=r(h,"UL",{});var z=i(J);E=r(z,"LI",{});var Q=i(E);ge=s(Q,"a single Tensor with "),B=r(Q,"CODE",{});var pe=i(B);le=s(pe,"input_ids"),pe.forEach(t),Y=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);oe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),_e=d(z),M=r(z,"LI",{});var D=i(M);de=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(D,"CODE",{});var Se=i(N);Te=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),ce=s(D," or "),S=r(D,"CODE",{});var ke=i(S);U=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),D.forEach(t),ye=d(z),q=r(z,"LI",{});var we=i(q);ve=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(we,"CODE",{});var De=i(R);se=s(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),we.forEach(t),z.forEach(t)},m(h,G){u(h,p,G),e(p,F),u(h,f,G),u(h,_,G),e(_,y),e(y,T),e(_,g),e(_,j),e(j,ue),u(h,K,G),u(h,x,G),e(x,X),e(x,O),e(O,Z),e(x,me),e(x,W),e(W,fe),e(x,ie),u(h,L,G),u(h,A,G),e(A,ee),u(h,te,G),u(h,J,G),e(J,E),e(E,ge),e(E,B),e(B,le),e(E,Y),e(E,H),e(H,oe),e(J,_e),e(J,M),e(M,de),e(M,N),e(N,Te),e(M,ce),e(M,S),e(S,U),e(J,ye),e(J,q),e(q,ve),e(q,R),e(R,se)},d(h){h&&t(p),h&&t(f),h&&t(_),h&&t(K),h&&t(x),h&&t(L),h&&t(A),h&&t(te),h&&t(J)}}}function mg(I){let p,F,f,_,y;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),y=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,y)},d(T){T&&t(p)}}}function fg(I){let p,F,f,_,y,T,g,j,ue,K,x,X,O,Z,me,W,fe,ie,L,A,ee,te,J,E,ge,B,le,Y,H,oe,_e,M,de,N,Te,ce,S,U,ye,q,ve,R,se;return{c(){p=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),_=a("ul"),y=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),j=a("li"),ue=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),x=a("p"),X=n("This second option is useful when using "),O=a("code"),Z=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),W=a("code"),fe=n("model(inputs)"),ie=n("."),L=l(),A=a("p"),ee=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),te=l(),J=a("ul"),E=a("li"),ge=n("a single Tensor with "),B=a("code"),le=n("input_ids"),Y=n(" only and nothing else: "),H=a("code"),oe=n("model(inputs_ids)"),_e=l(),M=a("li"),de=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=a("code"),Te=n("model([input_ids, attention_mask])"),ce=n(" or "),S=a("code"),U=n("model([input_ids, attention_mask, token_type_ids])"),ye=l(),q=a("li"),ve=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a("code"),se=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(h){p=r(h,"P",{});var G=i(p);F=s(G,"TF 2.0 models accepts two formats as inputs:"),G.forEach(t),f=d(h),_=r(h,"UL",{});var V=i(_);y=r(V,"LI",{});var Ae=i(y);T=s(Ae,"having all inputs as keyword arguments (like PyTorch models), or"),Ae.forEach(t),g=d(V),j=r(V,"LI",{});var Ie=i(j);ue=s(Ie,"having all inputs as a list, tuple or dict in the first positional arguments."),Ie.forEach(t),V.forEach(t),K=d(h),x=r(h,"P",{});var C=i(x);X=s(C,"This second option is useful when using "),O=r(C,"CODE",{});var Le=i(O);Z=s(Le,"tf.keras.Model.fit"),Le.forEach(t),me=s(C,` method which currently requires having all the
tensors in the first argument of the model call function: `),W=r(C,"CODE",{});var Ne=i(W);fe=s(Ne,"model(inputs)"),Ne.forEach(t),ie=s(C,"."),C.forEach(t),L=d(h),A=r(h,"P",{});var Ee=i(A);ee=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),te=d(h),J=r(h,"UL",{});var z=i(J);E=r(z,"LI",{});var Q=i(E);ge=s(Q,"a single Tensor with "),B=r(Q,"CODE",{});var pe=i(B);le=s(pe,"input_ids"),pe.forEach(t),Y=s(Q," only and nothing else: "),H=r(Q,"CODE",{});var Fe=i(H);oe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),Q.forEach(t),_e=d(z),M=r(z,"LI",{});var D=i(M);de=s(D,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),N=r(D,"CODE",{});var Se=i(N);Te=s(Se,"model([input_ids, attention_mask])"),Se.forEach(t),ce=s(D," or "),S=r(D,"CODE",{});var ke=i(S);U=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),D.forEach(t),ye=d(z),q=r(z,"LI",{});var we=i(q);ve=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(we,"CODE",{});var De=i(R);se=s(De,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),De.forEach(t),we.forEach(t),z.forEach(t)},m(h,G){u(h,p,G),e(p,F),u(h,f,G),u(h,_,G),e(_,y),e(y,T),e(_,g),e(_,j),e(j,ue),u(h,K,G),u(h,x,G),e(x,X),e(x,O),e(O,Z),e(x,me),e(x,W),e(W,fe),e(x,ie),u(h,L,G),u(h,A,G),e(A,ee),u(h,te,G),u(h,J,G),e(J,E),e(E,ge),e(E,B),e(B,le),e(E,Y),e(E,H),e(H,oe),e(J,_e),e(J,M),e(M,de),e(M,N),e(N,Te),e(M,ce),e(M,S),e(S,U),e(J,ye),e(J,q),e(q,ve),e(q,R),e(R,se)},d(h){h&&t(p),h&&t(f),h&&t(_),h&&t(K),h&&t(x),h&&t(L),h&&t(A),h&&t(te),h&&t(J)}}}function gg(I){let p,F,f,_,y;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),y=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,y)},d(T){T&&t(p)}}}function _g(I){let p,F,f,_,y;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),y=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,y)},d(T){T&&t(p)}}}function Tg(I){let p,F,f,_,y;return{c(){p=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),_=n("Module"),y=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){p=r(T,"P",{});var g=i(p);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(g,"CODE",{});var j=i(f);_=s(j,"Module"),j.forEach(t),y=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(T,g){u(T,p,g),e(p,F),e(p,f),e(f,_),e(p,y)},d(T){T&&t(p)}}}function yg(I){let p,F,f,_,y,T,g,j,ue,K,x,X,O,Z,me,W,fe,ie,L,A,ee,te,J,E,ge,B,le,Y,H,oe,_e,M,de,N,Te,ce,S,U,ye,q,ve,R,se,h,G,V,Ae,Ie,C,Le,Ne,Ee,z,Q,pe,Fe,D,Se,ke,we,De,Ks,pt,Ai,Jo,Ii,Li,Xs,Ni,Si,Ys,Di,Oi,Mr,$t,Kt,Zs,Eo,Wi,ea,Ui,qr,Xt,Qi,ms,Bi,Hi,Cr,Mo,zr,fs,Ri,Ar,qo,Ir,Ft,Yt,ta,Co,Vi,oa,Ki,Lr,Ye,zo,Xi,Ze,Yi,gs,Zi,el,Ao,tl,ol,_s,nl,sl,Ts,al,rl,il,na,ll,dl,Io,Nr,jt,Zt,sa,Lo,cl,aa,pl,Sr,ht,No,hl,So,ul,Do,ml,fl,gl,Oe,Oo,_l,Gt,Tl,ys,yl,vl,ra,kl,wl,bl,eo,Pl,ia,$l,Fl,Wo,Dr,xt,to,la,Uo,jl,da,Gl,Or,et,Qo,xl,ca,Jl,El,Bo,Ml,Ho,ql,Cl,zl,We,Ro,Al,Jt,Il,vs,Ll,Nl,pa,Sl,Dl,Ol,oo,Wl,ha,Ul,Ql,Vo,Wr,Et,no,ua,Ko,Bl,ma,Hl,Ur,je,Xo,Rl,fa,Vl,Kl,ks,ws,Xl,Yl,Zl,tt,ed,ga,td,od,_a,nd,sd,Ta,ad,rd,ya,id,ld,dd,Yo,cd,Zo,pd,hd,ud,ne,en,md,Mt,fd,bs,gd,_d,va,Td,yd,vd,so,kd,ka,wd,bd,tn,Pd,on,$d,wa,Fd,jd,nn,Gd,sn,Qr,qt,ao,ba,an,xd,Pa,Jd,Br,ot,rn,Ed,Ct,Md,$a,qd,Cd,Fa,zd,Ad,Id,ln,Ld,dn,Nd,Sd,Dd,Me,cn,Od,zt,Wd,Ps,Ud,Qd,ja,Bd,Hd,Rd,ro,Vd,Ga,Kd,Xd,pn,Yd,hn,Hr,At,io,xa,un,Zd,Ja,ec,Rr,Ge,mn,tc,Ea,oc,nc,fn,sc,$s,ac,rc,ic,gn,lc,_n,dc,cc,pc,lo,hc,Ue,Tn,uc,It,mc,Fs,fc,gc,Ma,_c,Tc,yc,co,vc,qa,kc,wc,yn,Vr,Lt,po,Ca,vn,bc,za,Pc,Kr,xe,kn,$c,Aa,Fc,jc,wn,Gc,js,xc,Jc,Ec,bn,Mc,Pn,qc,Cc,zc,ho,Ac,Qe,$n,Ic,Nt,Lc,Gs,Nc,Sc,Ia,Dc,Oc,Wc,uo,Uc,La,Qc,Bc,Fn,Xr,St,mo,Na,jn,Hc,Sa,Rc,Yr,ae,Gn,Vc,Da,Kc,Xc,xs,Js,Yc,Zc,ep,nt,tp,Oa,op,np,Wa,sp,ap,Ua,rp,ip,Qa,lp,dp,cp,xn,pp,Es,hp,up,mp,Jn,fp,En,gp,_p,Tp,fo,yp,qe,Mn,vp,Dt,kp,Ms,wp,bp,Ba,Pp,$p,Fp,go,jp,Ha,Gp,xp,qn,Jp,Cn,Zr,Ot,_o,Ra,zn,Ep,Va,Mp,ei,Je,An,qp,Wt,Cp,Ka,zp,Ap,Xa,Ip,Lp,Np,In,Sp,qs,Dp,Op,Wp,Ln,Up,Nn,Qp,Bp,Hp,To,Rp,Ce,Sn,Vp,Ut,Kp,Cs,Xp,Yp,Ya,Zp,eh,th,yo,oh,Za,nh,sh,Dn,ah,On,ti,Qt,vo,er,Wn,rh,tr,ih,oi,be,Un,lh,or,dh,ch,Qn,ph,zs,hh,uh,mh,Bn,fh,Hn,gh,_h,Th,nr,yh,vh,ut,sr,Rn,kh,wh,ar,Vn,bh,Ph,rr,Kn,$h,Fh,ir,Xn,jh,Gh,Be,Yn,xh,Bt,Jh,lr,Eh,Mh,dr,qh,Ch,zh,ko,Ah,cr,Ih,Lh,Zn,ni,Ht,wo,pr,es,Nh,hr,Sh,si,Pe,ts,Dh,ur,Oh,Wh,os,Uh,As,Qh,Bh,Hh,ns,Rh,ss,Vh,Kh,Xh,mr,Yh,Zh,mt,fr,as,eu,tu,gr,rs,ou,nu,_r,is,su,au,Tr,ls,ru,iu,He,ds,lu,Rt,du,yr,cu,pu,vr,hu,uu,mu,bo,fu,kr,gu,_u,cs,ai;return T=new Xe({}),Z=new Xe({}),z=new he({props:{code:`from transformers import GPTJForCausalLM
import torch

model = GPTJForCausalLM.from_pretrained(
    "EleutherAI/gpt-j-6B", revision="float16", torch_dtype=torch.float16, low_cpu_mem_usage=True
)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJForCausalLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;EleutherAI/gpt-j-6B&quot;</span>, revision=<span class="hljs-string">&quot;float16&quot;</span>, torch_dtype=torch.float16, low_cpu_mem_usage=<span class="hljs-literal">True</span>
<span class="hljs-meta">... </span>)`}}),Eo=new Xe({}),Mo=new he({props:{code:`from transformers import AutoModelForCausalLM, AutoTokenizer

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
<span class="hljs-meta">&gt;&gt;&gt; </span>gen_text = tokenizer.batch_decode(gen_tokens)[<span class="hljs-number">0</span>]`}}),Co=new Xe({}),zo=new re({props:{name:"class transformers.GPTJConfig",anchor:"transformers.GPTJConfig",parameters:[{name:"vocab_size",val:" = 50400"},{name:"n_positions",val:" = 2048"},{name:"n_embd",val:" = 4096"},{name:"n_layer",val:" = 28"},{name:"n_head",val:" = 16"},{name:"rotary_dim",val:" = 64"},{name:"n_inner",val:" = None"},{name:"activation_function",val:" = 'gelu_new'"},{name:"resid_pdrop",val:" = 0.0"},{name:"embd_pdrop",val:" = 0.0"},{name:"attn_pdrop",val:" = 0.0"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"scale_attn_weights",val:" = True"},{name:"use_cache",val:" = True"},{name:"bos_token_id",val:" = 50256"},{name:"eos_token_id",val:" = 50256"},{name:"tie_word_embeddings",val:" = False"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.GPTJConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 50400) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/configuration_gptj.py#L33"}}),Io=new he({props:{code:`from transformers import GPTJModel, GPTJConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Lo=new Xe({}),No=new re({props:{name:"class transformers.GPTJModel",anchor:"transformers.GPTJModel",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L469"}}),Oo=new re({props:{name:"forward",anchor:"transformers.GPTJModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTJModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L525",returnDescription:`
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
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
`}}),eo=new Ke({props:{$$slots:{default:[ag]},$$scope:{ctx:I}}}),Wo=new he({props:{code:`from transformers import GPT2Tokenizer, GPTJModel
import torch

tokenizer = GPT2Tokenizer.from_pretrained("hf-internal-testing/tiny-random-gptj")
model = GPTJModel.from_pretrained("hf-internal-testing/tiny-random-gptj")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJModel.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Uo=new Xe({}),Qo=new re({props:{name:"class transformers.GPTJForCausalLM",anchor:"transformers.GPTJForCausalLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L710"}}),Ro=new re({props:{name:"forward",anchor:"transformers.GPTJForCausalLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTJForCausalLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L779",returnDescription:`
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
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

tokenizer = GPT2Tokenizer.from_pretrained("hf-internal-testing/tiny-random-gptj")
model = GPTJForCausalLM.from_pretrained("hf-internal-testing/tiny-random-gptj")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForCausalLM

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForCausalLM.from_pretrained(<span class="hljs-string">&quot;hf-internal-testing/tiny-random-gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ko=new Xe({}),Xo=new re({props:{name:"class transformers.GPTJForSequenceClassification",anchor:"transformers.GPTJForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L885"}}),en=new re({props:{name:"forward",anchor:"transformers.GPTJForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"past_key_values",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"use_cache",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTJForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L901",returnDescription:`
<p>A <code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or a tuple of
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.</p>
</li>
</ul>
`,returnType:`
<p><code>transformers.modeling_outputs.SequenceClassifierOutputWithPast</code> or <code>tuple(torch.FloatTensor)</code></p>
`}}),so=new Ke({props:{$$slots:{default:[ig]},$$scope:{ctx:I}}}),tn=new he({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("ydshieh/tiny-random-gptj-for-sequence-classification")
model = GPTJForSequenceClassification.from_pretrained("ydshieh/tiny-random-gptj-for-sequence-classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),on=new he({props:{code:'# To train a model on `num_labels` classes, you can pass `num_labels=num_labels` to `.from_pretrained(...)`\nnum_labels = len(model.config.id2label)\nmodel = GPTJForSequenceClassification.from_pretrained("ydshieh/tiny-random-gptj-for-sequence-classification", num_labels=num_labels)\n\nlabels = torch.tensor(1)\nloss = model(**inputs, labels=labels).loss\nround(loss.item(), 2)',highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">0.76</span>`}}),nn=new he({props:{code:`import torch
from transformers import GPT2Tokenizer, GPTJForSequenceClassification

tokenizer = GPT2Tokenizer.from_pretrained("ydshieh/tiny-random-gptj-for-sequence-classification")
model = GPTJForSequenceClassification.from_pretrained("ydshieh/tiny-random-gptj-for-sequence-classification", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
<span class="hljs-string">&#x27;LABEL_0&#x27;</span>`}}),sn=new he({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = GPTJForSequenceClassification.from_pretrained(
    "ydshieh/tiny-random-gptj-for-sequence-classification", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-sequence-classification&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),an=new Xe({}),rn=new re({props:{name:"class transformers.GPTJForQuestionAnswering",anchor:"transformers.GPTJForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.GPTJForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L1012"}}),cn=new re({props:{name:"forward",anchor:"transformers.GPTJForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],parametersDescription:[{anchor:"transformers.GPTJForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_gptj.py#L1028",returnDescription:`
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings, if the model has an embedding layer, +
one for the output of each layer) of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the optional initial embedding outputs.</p>
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

tokenizer = GPT2Tokenizer.from_pretrained("ydshieh/tiny-random-gptj-for-question-answering")
model = GPTJForQuestionAnswering.from_pretrained("ydshieh/tiny-random-gptj-for-question-answering")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPT2Tokenizer, GPTJForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPT2Tokenizer.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-question-answering&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = GPTJForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;ydshieh/tiny-random-gptj-for-question-answering&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
<span class="hljs-string">&#x27; was Jim Henson?Jim Henson was a n&#x27;</span>`}}),hn=new he({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
<span class="hljs-number">3.13</span>`}}),un=new Xe({}),mn=new re({props:{name:"class transformers.TFGPTJModel",anchor:"transformers.TFGPTJModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L647"}}),lo=new Ke({props:{$$slots:{default:[dg]},$$scope:{ctx:I}}}),Tn=new re({props:{name:"call",anchor:"transformers.TFGPTJModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>past</code>). Set to <code>False</code> during training, <code>True</code> during generation`,name:"use_cache"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L652",returnDescription:`
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
`}}),co=new Ke({props:{$$slots:{default:[cg]},$$scope:{ctx:I}}}),yn=new he({props:{code:`from transformers import GPTJTokenizer, TFGPTJModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),vn=new Xe({}),kn=new re({props:{name:"class transformers.TFGPTJForCausalLM",anchor:"transformers.TFGPTJForCausalLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L717"}}),ho=new Ke({props:{$$slots:{default:[pg]},$$scope:{ctx:I}}}),$n=new re({props:{name:"call",anchor:"transformers.TFGPTJForCausalLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJForCausalLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L759",returnDescription:`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),jn=new Xe({}),Gn=new re({props:{name:"class transformers.TFGPTJForSequenceClassification",anchor:"transformers.TFGPTJForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L849"}}),fo=new Ke({props:{$$slots:{default:[ug]},$$scope:{ctx:I}}}),Mn=new re({props:{name:"call",anchor:"transformers.TFGPTJForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"use_cache",val:": typing.Optional[bool] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L863",returnDescription:`
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
`}}),Cn=new he({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),zn=new Xe({}),An=new re({props:{name:"class transformers.TFGPTJForQuestionAnswering",anchor:"transformers.TFGPTJForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFGPTJForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L975"}}),To=new Ke({props:{$$slots:{default:[fg]},$$scope:{ctx:I}}}),Sn=new re({props:{name:"call",anchor:"transformers.TFGPTJForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"past_key_values",val:": typing.Union[typing.Tuple[typing.Tuple[typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor]]], NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFGPTJForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code> if <code>past</code> is <code>None</code> else <code>past[0].shape[-2]</code> (<code>sequence_length</code> of
input past key value states). Indices of input sequence tokens in the vocabulary.</p>
<p>If <code>past</code> is used, only input IDs that do not have their past calculated should be passed as <code>input_ids</code>.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_tf_gptj.py#L986",returnDescription:`
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
`}}),yo=new Ke({props:{$$slots:{default:[gg]},$$scope:{ctx:I}}}),Dn=new he({props:{code:`from transformers import GPTJTokenizer, TFGPTJForQuestionAnswering
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
target_start_index = tf.constant([14])
target_end_index = tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = tf.constant([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Wn=new Xe({}),Un=new re({props:{name:"class transformers.FlaxGPTJModel",anchor:"transformers.FlaxGPTJModel",parameters:[{name:"config",val:": GPTJConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTJModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTJModel.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_flax_gptj.py#L607"}}),Yn=new re({props:{name:"__call__",anchor:"transformers.FlaxGPTJModel.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTJModel.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTJModel.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTJModel.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTJModel.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTJModel.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTJModel.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTJModel.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_flax_gptj.py#L425",returnDescription:`
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
`}}),ko=new Ke({props:{$$slots:{default:[_g]},$$scope:{ctx:I}}}),Zn=new he({props:{code:`from transformers import GPTJTokenizer, FlaxGPTJModel

tokenizer = GPTJTokenizer.from_pretrained("gptj")
model = FlaxGPTJModel.from_pretrained("gptj")

inputs = tokenizer("Hello, my dog is cute", return_tensors="jax")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> GPTJTokenizer, FlaxGPTJModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = GPTJTokenizer.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = FlaxGPTJModel.from_pretrained(<span class="hljs-string">&quot;gptj&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;jax&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),es=new Xe({}),ts=new re({props:{name:"class transformers.FlaxGPTJForCausalLM",anchor:"transformers.FlaxGPTJForCausalLM",parameters:[{name:"config",val:": GPTJConfig"},{name:"input_shape",val:": typing.Tuple = (1, 1)"},{name:"seed",val:": int = 0"},{name:"dtype",val:": dtype = <class 'jax._src.numpy.lax_numpy.float32'>"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.FlaxGPTJForCausalLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/gptj#transformers.GPTJConfig">GPTJConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"},{anchor:"transformers.FlaxGPTJForCausalLM.dtype",description:`<strong>dtype</strong> (<code>jax.numpy.dtype</code>, <em>optional</em>, defaults to <code>jax.numpy.float32</code>) &#x2014;
The data type of the computation. Can be one of <code>jax.numpy.float32</code>, <code>jax.numpy.float16</code> (on GPUs) and
<code>jax.numpy.bfloat16</code> (on TPUs).</p>
<p>This can be used to enable mixed-precision training or half-precision inference on GPUs or TPUs. If
specified all the computation will be performed with the given <code>dtype</code>.</p>
<p><strong>Note that this only specifies the dtype of the computation and does not influence the dtype of model
parameters.</strong></p>
<p>If you wish to change the dtype of the model parameters, see <a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_fp16">to_fp16()</a> and
<a href="/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel.to_bf16">to_bf16()</a>.`,name:"dtype"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_flax_gptj.py#L674"}}),ds=new re({props:{name:"__call__",anchor:"transformers.FlaxGPTJForCausalLM.__call__",parameters:[{name:"input_ids",val:""},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"params",val:": dict = None"},{name:"past_key_values",val:": dict = None"},{name:"dropout_rng",val:": PRNGKey = None"},{name:"train",val:": bool = False"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.FlaxGPTJForCausalLM.__call__.input_ids",description:`<strong>input_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, input_ids_length)</code>) &#x2014;
<code>input_ids_length</code> = <code>sequence_length</code>. Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <code>GPTJTokenizer</code>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.attention_mask",description:`<strong>attention_mask</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.position_ids",description:`<strong>position_ids</strong> (<code>numpy.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.`,name:"position_ids"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.past_key_values",description:`<strong>past_key_values</strong> (<code>Dict[str, np.ndarray]</code>, <em>optional</em>, returned by <code>init_cache</code> or when passing previous <code>past_key_values</code>) &#x2014;
Dictionary of pre-computed hidden-states (key and values in the attention blocks) that can be used for fast
auto-regressive decoding. Pre-computed key and value hidden-states are of shape <em>[batch_size, max_length]</em>.`,name:"past_key_values"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.FlaxGPTJForCausalLM.__call__.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/gptj/modeling_flax_gptj.py#L425",returnDescription:`
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
`}}),bo=new Ke({props:{$$slots:{default:[Tg]},$$scope:{ctx:I}}}),cs=new he({props:{code:`from transformers import GPTJTokenizer, FlaxGPTJForCausalLM

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
<span class="hljs-meta">&gt;&gt;&gt; </span>next_token_logits = outputs.logits[:, -<span class="hljs-number">1</span>]`}}),{c(){p=a("meta"),F=l(),f=a("h1"),_=a("a"),y=a("span"),v(T.$$.fragment),g=l(),j=a("span"),ue=n("GPT-J"),K=l(),x=a("h2"),X=a("a"),O=a("span"),v(Z.$$.fragment),me=l(),W=a("span"),fe=n("Overview"),ie=l(),L=a("p"),A=n("The GPT-J model was released in the "),ee=a("a"),te=n("kingoflolz/mesh-transformer-jax"),J=n(` repository by Ben Wang and Aran Komatsuzaki. It is a GPT-2-like
causal language model trained on `),E=a("a"),ge=n("the Pile"),B=n(" dataset."),le=l(),Y=a("p"),H=n("This model was contributed by "),oe=a("a"),_e=n("Stella Biderman"),M=n("."),de=l(),N=a("p"),Te=n("Tips:"),ce=l(),S=a("ul"),U=a("li"),ye=n("To load "),q=a("a"),ve=n("GPT-J"),R=n(` in float32 one would need at least 2x model size CPU
RAM: 1x for initial weights and another 1x to load the checkpoint. So for GPT-J it would take at least 48GB of CPU
RAM to just load the model. To reduce the CPU RAM usage there are a few options. The `),se=a("code"),h=n("torch_dtype"),G=n(` argument can be
used to initialize the model in half-precision. And the `),V=a("code"),Ae=n("low_cpu_mem_usage"),Ie=n(` argument can be used to keep the RAM
usage to 1x. There is also a `),C=a("a"),Le=n("fp16 branch"),Ne=n(` which stores
the fp16 weights, which could be used to further minimize the RAM usage. Combining all this it should take roughly
12.1GB of CPU RAM to load the model.`),Ee=l(),v(z.$$.fragment),Q=l(),pe=a("ul"),Fe=a("li"),D=a("p"),Se=n(`The model should fit on 16GB GPU for inference. For training/fine-tuning it would take much more GPU RAM. Adam
optimizer for example makes four copies of the model: model, gradients, average and squared average of the gradients.
So it would need at least 4x model size GPU memory, even with mixed precision as gradient updates are in fp32. This
is not including the activations and data batches, which would again require some more GPU RAM. So one should explore
solutions such as DeepSpeed, to train/fine-tune the model. Another option is to use the original codebase to
train/fine-tune the model on TPU and then convert the model to Transformers format for inference. Instructions for
that could be found `),ke=a("a"),we=n("here"),De=l(),Ks=a("li"),pt=a("p"),Ai=n(`Although the embedding matrix has a size of 50400, only 50257 entries are used by the GPT-2 tokenizer. These extra
tokens are added for the sake of efficiency on TPUs. To avoid the mis-match between embedding matrix size and vocab
size, the tokenizer for `),Jo=a("a"),Ii=n("GPT-J"),Li=n(` contains 143 extra tokens
`),Xs=a("code"),Ni=n("<|extratoken_1|>... <|extratoken_143|>"),Si=n(", so the "),Ys=a("code"),Di=n("vocab_size"),Oi=n(" of tokenizer also becomes 50400."),Mr=l(),$t=a("h3"),Kt=a("a"),Zs=a("span"),v(Eo.$$.fragment),Wi=l(),ea=a("span"),Ui=n("Generation"),qr=l(),Xt=a("p"),Qi=n("The "),ms=a("a"),Bi=n("generate()"),Hi=n(` method can be used to generate text using GPT-J
model.`),Cr=l(),v(Mo.$$.fragment),zr=l(),fs=a("p"),Ri=n("\u2026or in float16 precision:"),Ar=l(),v(qo.$$.fragment),Ir=l(),Ft=a("h2"),Yt=a("a"),ta=a("span"),v(Co.$$.fragment),Vi=l(),oa=a("span"),Ki=n("GPTJConfig"),Lr=l(),Ye=a("div"),v(zo.$$.fragment),Xi=l(),Ze=a("p"),Yi=n("This is the configuration class to store the configuration of a "),gs=a("a"),Zi=n("GPTJModel"),el=n(`. It is used to instantiate a GPT-J
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GPT-J
`),Ao=a("a"),tl=n("gpt-j-6B"),ol=n(` architecture. Configuration objects inherit from
`),_s=a("a"),nl=n("PretrainedConfig"),sl=n(" and can be used to control the model outputs. Read the documentation from "),Ts=a("a"),al=n("PretrainedConfig"),rl=n(`
for more information.`),il=l(),na=a("p"),ll=n("Example:"),dl=l(),v(Io.$$.fragment),Nr=l(),jt=a("h2"),Zt=a("a"),sa=a("span"),v(Lo.$$.fragment),cl=l(),aa=a("span"),pl=n("GPTJModel"),Sr=l(),ht=a("div"),v(No.$$.fragment),hl=l(),So=a("p"),ul=n(`The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Do=a("a"),ml=n("torch.nn.Module"),fl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gl=l(),Oe=a("div"),v(Oo.$$.fragment),_l=l(),Gt=a("p"),Tl=n("The "),ys=a("a"),yl=n("GPTJModel"),vl=n(" forward method, overrides the "),ra=a("code"),kl=n("__call__"),wl=n(" special method."),bl=l(),v(eo.$$.fragment),Pl=l(),ia=a("p"),$l=n("Example:"),Fl=l(),v(Wo.$$.fragment),Dr=l(),xt=a("h2"),to=a("a"),la=a("span"),v(Uo.$$.fragment),jl=l(),da=a("span"),Gl=n("GPTJForCausalLM"),Or=l(),et=a("div"),v(Qo.$$.fragment),xl=l(),ca=a("p"),Jl=n("The GPT-J Model transformer with a language modeling head on top."),El=l(),Bo=a("p"),Ml=n("This model is a PyTorch "),Ho=a("a"),ql=n("torch.nn.Module"),Cl=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),zl=l(),We=a("div"),v(Ro.$$.fragment),Al=l(),Jt=a("p"),Il=n("The "),vs=a("a"),Ll=n("GPTJForCausalLM"),Nl=n(" forward method, overrides the "),pa=a("code"),Sl=n("__call__"),Dl=n(" special method."),Ol=l(),v(oo.$$.fragment),Wl=l(),ha=a("p"),Ul=n("Example:"),Ql=l(),v(Vo.$$.fragment),Wr=l(),Et=a("h2"),no=a("a"),ua=a("span"),v(Ko.$$.fragment),Bl=l(),ma=a("span"),Hl=n("GPTJForSequenceClassification"),Ur=l(),je=a("div"),v(Xo.$$.fragment),Rl=l(),fa=a("p"),Vl=n("The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Kl=l(),ks=a("p"),ws=a("a"),Xl=n("GPTJForSequenceClassification"),Yl=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),Zl=l(),tt=a("p"),ed=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ga=a("code"),td=n("pad_token_id"),od=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),_a=a("code"),nd=n("pad_token_id"),sd=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ta=a("code"),ad=n("inputs_embeds"),rd=n(" are passed instead of "),ya=a("code"),id=n("input_ids"),ld=n(`, it does the same (take the last value in
each row of the batch).`),dd=l(),Yo=a("p"),cd=n("This model is a PyTorch "),Zo=a("a"),pd=n("torch.nn.Module"),hd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ud=l(),ne=a("div"),v(en.$$.fragment),md=l(),Mt=a("p"),fd=n("The "),bs=a("a"),gd=n("GPTJForSequenceClassification"),_d=n(" forward method, overrides the "),va=a("code"),Td=n("__call__"),yd=n(" special method."),vd=l(),v(so.$$.fragment),kd=l(),ka=a("p"),wd=n("Example of single-label classification:"),bd=l(),v(tn.$$.fragment),Pd=l(),v(on.$$.fragment),$d=l(),wa=a("p"),Fd=n("Example of multi-label classification:"),jd=l(),v(nn.$$.fragment),Gd=l(),v(sn.$$.fragment),Qr=l(),qt=a("h2"),ao=a("a"),ba=a("span"),v(an.$$.fragment),xd=l(),Pa=a("span"),Jd=n("GPTJForQuestionAnswering"),Br=l(),ot=a("div"),v(rn.$$.fragment),Ed=l(),Ct=a("p"),Md=n(`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),$a=a("code"),qd=n("span start logits"),Cd=n(" and "),Fa=a("code"),zd=n("span end logits"),Ad=n(")."),Id=l(),ln=a("p"),Ld=n("This model is a PyTorch "),dn=a("a"),Nd=n("torch.nn.Module"),Sd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dd=l(),Me=a("div"),v(cn.$$.fragment),Od=l(),zt=a("p"),Wd=n("The "),Ps=a("a"),Ud=n("GPTJForQuestionAnswering"),Qd=n(" forward method, overrides the "),ja=a("code"),Bd=n("__call__"),Hd=n(" special method."),Rd=l(),v(ro.$$.fragment),Vd=l(),Ga=a("p"),Kd=n("Example:"),Xd=l(),v(pn.$$.fragment),Yd=l(),v(hn.$$.fragment),Hr=l(),At=a("h2"),io=a("a"),xa=a("span"),v(un.$$.fragment),Zd=l(),Ja=a("span"),ec=n("TFGPTJModel"),Rr=l(),Ge=a("div"),v(mn.$$.fragment),tc=l(),Ea=a("p"),oc=n("The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top."),nc=l(),fn=a("p"),sc=n("This model inherits from "),$s=a("a"),ac=n("TFPreTrainedModel"),rc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ic=l(),gn=a("p"),lc=n("This model is also a "),_n=a("a"),dc=n("tf.keras.Model"),cc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pc=l(),v(lo.$$.fragment),hc=l(),Ue=a("div"),v(Tn.$$.fragment),uc=l(),It=a("p"),mc=n("The "),Fs=a("a"),fc=n("TFGPTJModel"),gc=n(" forward method, overrides the "),Ma=a("code"),_c=n("__call__"),Tc=n(" special method."),yc=l(),v(co.$$.fragment),vc=l(),qa=a("p"),kc=n("Example:"),wc=l(),v(yn.$$.fragment),Vr=l(),Lt=a("h2"),po=a("a"),Ca=a("span"),v(vn.$$.fragment),bc=l(),za=a("span"),Pc=n("TFGPTJForCausalLM"),Kr=l(),xe=a("div"),v(kn.$$.fragment),$c=l(),Aa=a("p"),Fc=n("The GPT-J Model transformer with a language modeling head on top."),jc=l(),wn=a("p"),Gc=n("This model inherits from "),js=a("a"),xc=n("TFPreTrainedModel"),Jc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ec=l(),bn=a("p"),Mc=n("This model is also a "),Pn=a("a"),qc=n("tf.keras.Model"),Cc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zc=l(),v(ho.$$.fragment),Ac=l(),Qe=a("div"),v($n.$$.fragment),Ic=l(),Nt=a("p"),Lc=n("The "),Gs=a("a"),Nc=n("TFGPTJForCausalLM"),Sc=n(" forward method, overrides the "),Ia=a("code"),Dc=n("__call__"),Oc=n(" special method."),Wc=l(),v(uo.$$.fragment),Uc=l(),La=a("p"),Qc=n("Example:"),Bc=l(),v(Fn.$$.fragment),Xr=l(),St=a("h2"),mo=a("a"),Na=a("span"),v(jn.$$.fragment),Hc=l(),Sa=a("span"),Rc=n("TFGPTJForSequenceClassification"),Yr=l(),ae=a("div"),v(Gn.$$.fragment),Vc=l(),Da=a("p"),Kc=n("The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Xc=l(),xs=a("p"),Js=a("a"),Yc=n("GPTJForSequenceClassification"),Zc=n(` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),ep=l(),nt=a("p"),tp=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Oa=a("code"),op=n("pad_token_id"),np=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Wa=a("code"),sp=n("pad_token_id"),ap=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ua=a("code"),rp=n("inputs_embeds"),ip=n(" are passed instead of "),Qa=a("code"),lp=n("input_ids"),dp=n(`, it does the same (take the last value in
each row of the batch).`),cp=l(),xn=a("p"),pp=n("This model inherits from "),Es=a("a"),hp=n("TFPreTrainedModel"),up=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp=l(),Jn=a("p"),fp=n("This model is also a "),En=a("a"),gp=n("tf.keras.Model"),_p=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tp=l(),v(fo.$$.fragment),yp=l(),qe=a("div"),v(Mn.$$.fragment),vp=l(),Dt=a("p"),kp=n("The "),Ms=a("a"),wp=n("TFGPTJForSequenceClassification"),bp=n(" forward method, overrides the "),Ba=a("code"),Pp=n("__call__"),$p=n(" special method."),Fp=l(),v(go.$$.fragment),jp=l(),Ha=a("p"),Gp=n("Example:"),xp=l(),v(qn.$$.fragment),Jp=l(),v(Cn.$$.fragment),Zr=l(),Ot=a("h2"),_o=a("a"),Ra=a("span"),v(zn.$$.fragment),Ep=l(),Va=a("span"),Mp=n("TFGPTJForQuestionAnswering"),ei=l(),Je=a("div"),v(An.$$.fragment),qp=l(),Wt=a("p"),Cp=n(`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Ka=a("code"),zp=n("span start logits"),Ap=n(" and "),Xa=a("code"),Ip=n("span end logits"),Lp=n(")."),Np=l(),In=a("p"),Sp=n("This model inherits from "),qs=a("a"),Dp=n("TFPreTrainedModel"),Op=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wp=l(),Ln=a("p"),Up=n("This model is also a "),Nn=a("a"),Qp=n("tf.keras.Model"),Bp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Hp=l(),v(To.$$.fragment),Rp=l(),Ce=a("div"),v(Sn.$$.fragment),Vp=l(),Ut=a("p"),Kp=n("The "),Cs=a("a"),Xp=n("TFGPTJForQuestionAnswering"),Yp=n(" forward method, overrides the "),Ya=a("code"),Zp=n("__call__"),eh=n(" special method."),th=l(),v(yo.$$.fragment),oh=l(),Za=a("p"),nh=n("Example:"),sh=l(),v(Dn.$$.fragment),ah=l(),v(On.$$.fragment),ti=l(),Qt=a("h2"),vo=a("a"),er=a("span"),v(Wn.$$.fragment),rh=l(),tr=a("span"),ih=n("FlaxGPTJModel"),oi=l(),be=a("div"),v(Un.$$.fragment),lh=l(),or=a("p"),dh=n("The bare GPTJ Model transformer outputting raw hidden-states without any specific head on top."),ch=l(),Qn=a("p"),ph=n("This model inherits from "),zs=a("a"),hh=n("FlaxPreTrainedModel"),uh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mh=l(),Bn=a("p"),fh=n(`This model is also a Flax Linen
`),Hn=a("a"),gh=n("flax.nn.Module"),_h=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Th=l(),nr=a("p"),yh=n("Finally, this model supports inherent JAX features such as:"),vh=l(),ut=a("ul"),sr=a("li"),Rn=a("a"),kh=n("Just-In-Time (JIT) compilation"),wh=l(),ar=a("li"),Vn=a("a"),bh=n("Automatic Differentiation"),Ph=l(),rr=a("li"),Kn=a("a"),$h=n("Vectorization"),Fh=l(),ir=a("li"),Xn=a("a"),jh=n("Parallelization"),Gh=l(),Be=a("div"),v(Yn.$$.fragment),xh=l(),Bt=a("p"),Jh=n("The "),lr=a("code"),Eh=n("FlaxGPTJPreTrainedModel"),Mh=n(" forward method, overrides the "),dr=a("code"),qh=n("__call__"),Ch=n(" special method."),zh=l(),v(ko.$$.fragment),Ah=l(),cr=a("p"),Ih=n("Example:"),Lh=l(),v(Zn.$$.fragment),ni=l(),Ht=a("h2"),wo=a("a"),pr=a("span"),v(es.$$.fragment),Nh=l(),hr=a("span"),Sh=n("FlaxGPTJForCausalLM"),si=l(),Pe=a("div"),v(ts.$$.fragment),Dh=l(),ur=a("p"),Oh=n("The GPTJ Model transformer with a language modeling head on top."),Wh=l(),os=a("p"),Uh=n("This model inherits from "),As=a("a"),Qh=n("FlaxPreTrainedModel"),Bh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hh=l(),ns=a("p"),Rh=n(`This model is also a Flax Linen
`),ss=a("a"),Vh=n("flax.nn.Module"),Kh=n(` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Xh=l(),mr=a("p"),Yh=n("Finally, this model supports inherent JAX features such as:"),Zh=l(),mt=a("ul"),fr=a("li"),as=a("a"),eu=n("Just-In-Time (JIT) compilation"),tu=l(),gr=a("li"),rs=a("a"),ou=n("Automatic Differentiation"),nu=l(),_r=a("li"),is=a("a"),su=n("Vectorization"),au=l(),Tr=a("li"),ls=a("a"),ru=n("Parallelization"),iu=l(),He=a("div"),v(ds.$$.fragment),lu=l(),Rt=a("p"),du=n("The "),yr=a("code"),cu=n("FlaxGPTJPreTrainedModel"),pu=n(" forward method, overrides the "),vr=a("code"),hu=n("__call__"),uu=n(" special method."),mu=l(),v(bo.$$.fragment),fu=l(),kr=a("p"),gu=n("Example:"),_u=l(),v(cs.$$.fragment),this.h()},l(o){const m=ng('[data-svelte="svelte-1phssyn"]',document.head);p=r(m,"META",{name:!0,content:!0}),m.forEach(t),F=d(o),f=r(o,"H1",{class:!0});var ps=i(f);_=r(ps,"A",{id:!0,class:!0,href:!0});var wr=i(_);y=r(wr,"SPAN",{});var br=i(y);k(T.$$.fragment,br),br.forEach(t),wr.forEach(t),g=d(ps),j=r(ps,"SPAN",{});var Pr=i(j);ue=s(Pr,"GPT-J"),Pr.forEach(t),ps.forEach(t),K=d(o),x=r(o,"H2",{class:!0});var hs=i(x);X=r(hs,"A",{id:!0,class:!0,href:!0});var $r=i(X);O=r($r,"SPAN",{});var Fr=i(O);k(Z.$$.fragment,Fr),Fr.forEach(t),$r.forEach(t),me=d(hs),W=r(hs,"SPAN",{});var jr=i(W);fe=s(jr,"Overview"),jr.forEach(t),hs.forEach(t),ie=d(o),L=r(o,"P",{});var Vt=i(L);A=s(Vt,"The GPT-J model was released in the "),ee=r(Vt,"A",{href:!0,rel:!0});var Gr=i(ee);te=s(Gr,"kingoflolz/mesh-transformer-jax"),Gr.forEach(t),J=s(Vt,` repository by Ben Wang and Aran Komatsuzaki. It is a GPT-2-like
causal language model trained on `),E=r(Vt,"A",{href:!0,rel:!0});var xr=i(E);ge=s(xr,"the Pile"),xr.forEach(t),B=s(Vt," dataset."),Vt.forEach(t),le=d(o),Y=r(o,"P",{});var us=i(Y);H=s(us,"This model was contributed by "),oe=r(us,"A",{href:!0,rel:!0});var Jr=i(oe);_e=s(Jr,"Stella Biderman"),Jr.forEach(t),M=s(us,"."),us.forEach(t),de=d(o),N=r(o,"P",{});var Er=i(N);Te=s(Er,"Tips:"),Er.forEach(t),ce=d(o),S=r(o,"UL",{});var ku=i(S);U=r(ku,"LI",{});var ft=i(U);ye=s(ft,"To load "),q=r(ft,"A",{href:!0,rel:!0});var wu=i(q);ve=s(wu,"GPT-J"),wu.forEach(t),R=s(ft,` in float32 one would need at least 2x model size CPU
RAM: 1x for initial weights and another 1x to load the checkpoint. So for GPT-J it would take at least 48GB of CPU
RAM to just load the model. To reduce the CPU RAM usage there are a few options. The `),se=r(ft,"CODE",{});var bu=i(se);h=s(bu,"torch_dtype"),bu.forEach(t),G=s(ft,` argument can be
used to initialize the model in half-precision. And the `),V=r(ft,"CODE",{});var Pu=i(V);Ae=s(Pu,"low_cpu_mem_usage"),Pu.forEach(t),Ie=s(ft,` argument can be used to keep the RAM
usage to 1x. There is also a `),C=r(ft,"A",{href:!0,rel:!0});var $u=i(C);Le=s($u,"fp16 branch"),$u.forEach(t),Ne=s(ft,` which stores
the fp16 weights, which could be used to further minimize the RAM usage. Combining all this it should take roughly
12.1GB of CPU RAM to load the model.`),ft.forEach(t),ku.forEach(t),Ee=d(o),k(z.$$.fragment,o),Q=d(o),pe=r(o,"UL",{});var ri=i(pe);Fe=r(ri,"LI",{});var Fu=i(Fe);D=r(Fu,"P",{});var Tu=i(D);Se=s(Tu,`The model should fit on 16GB GPU for inference. For training/fine-tuning it would take much more GPU RAM. Adam
optimizer for example makes four copies of the model: model, gradients, average and squared average of the gradients.
So it would need at least 4x model size GPU memory, even with mixed precision as gradient updates are in fp32. This
is not including the activations and data batches, which would again require some more GPU RAM. So one should explore
solutions such as DeepSpeed, to train/fine-tune the model. Another option is to use the original codebase to
train/fine-tune the model on TPU and then convert the model to Transformers format for inference. Instructions for
that could be found `),ke=r(Tu,"A",{href:!0,rel:!0});var ju=i(ke);we=s(ju,"here"),ju.forEach(t),Tu.forEach(t),Fu.forEach(t),De=d(ri),Ks=r(ri,"LI",{});var Gu=i(Ks);pt=r(Gu,"P",{});var Po=i(pt);Ai=s(Po,`Although the embedding matrix has a size of 50400, only 50257 entries are used by the GPT-2 tokenizer. These extra
tokens are added for the sake of efficiency on TPUs. To avoid the mis-match between embedding matrix size and vocab
size, the tokenizer for `),Jo=r(Po,"A",{href:!0,rel:!0});var xu=i(Jo);Ii=s(xu,"GPT-J"),xu.forEach(t),Li=s(Po,` contains 143 extra tokens
`),Xs=r(Po,"CODE",{});var Ju=i(Xs);Ni=s(Ju,"<|extratoken_1|>... <|extratoken_143|>"),Ju.forEach(t),Si=s(Po,", so the "),Ys=r(Po,"CODE",{});var Eu=i(Ys);Di=s(Eu,"vocab_size"),Eu.forEach(t),Oi=s(Po," of tokenizer also becomes 50400."),Po.forEach(t),Gu.forEach(t),ri.forEach(t),Mr=d(o),$t=r(o,"H3",{class:!0});var ii=i($t);Kt=r(ii,"A",{id:!0,class:!0,href:!0});var Mu=i(Kt);Zs=r(Mu,"SPAN",{});var qu=i(Zs);k(Eo.$$.fragment,qu),qu.forEach(t),Mu.forEach(t),Wi=d(ii),ea=r(ii,"SPAN",{});var Cu=i(ea);Ui=s(Cu,"Generation"),Cu.forEach(t),ii.forEach(t),qr=d(o),Xt=r(o,"P",{});var li=i(Xt);Qi=s(li,"The "),ms=r(li,"A",{href:!0});var zu=i(ms);Bi=s(zu,"generate()"),zu.forEach(t),Hi=s(li,` method can be used to generate text using GPT-J
model.`),li.forEach(t),Cr=d(o),k(Mo.$$.fragment,o),zr=d(o),fs=r(o,"P",{});var Au=i(fs);Ri=s(Au,"\u2026or in float16 precision:"),Au.forEach(t),Ar=d(o),k(qo.$$.fragment,o),Ir=d(o),Ft=r(o,"H2",{class:!0});var di=i(Ft);Yt=r(di,"A",{id:!0,class:!0,href:!0});var Iu=i(Yt);ta=r(Iu,"SPAN",{});var Lu=i(ta);k(Co.$$.fragment,Lu),Lu.forEach(t),Iu.forEach(t),Vi=d(di),oa=r(di,"SPAN",{});var Nu=i(oa);Ki=s(Nu,"GPTJConfig"),Nu.forEach(t),di.forEach(t),Lr=d(o),Ye=r(o,"DIV",{class:!0});var $o=i(Ye);k(zo.$$.fragment,$o),Xi=d($o),Ze=r($o,"P",{});var gt=i(Ze);Yi=s(gt,"This is the configuration class to store the configuration of a "),gs=r(gt,"A",{href:!0});var Su=i(gs);Zi=s(Su,"GPTJModel"),Su.forEach(t),el=s(gt,`. It is used to instantiate a GPT-J
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the GPT-J
`),Ao=r(gt,"A",{href:!0,rel:!0});var Du=i(Ao);tl=s(Du,"gpt-j-6B"),Du.forEach(t),ol=s(gt,` architecture. Configuration objects inherit from
`),_s=r(gt,"A",{href:!0});var Ou=i(_s);nl=s(Ou,"PretrainedConfig"),Ou.forEach(t),sl=s(gt," and can be used to control the model outputs. Read the documentation from "),Ts=r(gt,"A",{href:!0});var Wu=i(Ts);al=s(Wu,"PretrainedConfig"),Wu.forEach(t),rl=s(gt,`
for more information.`),gt.forEach(t),il=d($o),na=r($o,"P",{});var Uu=i(na);ll=s(Uu,"Example:"),Uu.forEach(t),dl=d($o),k(Io.$$.fragment,$o),$o.forEach(t),Nr=d(o),jt=r(o,"H2",{class:!0});var ci=i(jt);Zt=r(ci,"A",{id:!0,class:!0,href:!0});var Qu=i(Zt);sa=r(Qu,"SPAN",{});var Bu=i(sa);k(Lo.$$.fragment,Bu),Bu.forEach(t),Qu.forEach(t),cl=d(ci),aa=r(ci,"SPAN",{});var Hu=i(aa);pl=s(Hu,"GPTJModel"),Hu.forEach(t),ci.forEach(t),Sr=d(o),ht=r(o,"DIV",{class:!0});var Is=i(ht);k(No.$$.fragment,Is),hl=d(Is),So=r(Is,"P",{});var pi=i(So);ul=s(pi,`The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),Do=r(pi,"A",{href:!0,rel:!0});var Ru=i(Do);ml=s(Ru,"torch.nn.Module"),Ru.forEach(t),fl=s(pi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),pi.forEach(t),gl=d(Is),Oe=r(Is,"DIV",{class:!0});var _t=i(Oe);k(Oo.$$.fragment,_t),_l=d(_t),Gt=r(_t,"P",{});var Ls=i(Gt);Tl=s(Ls,"The "),ys=r(Ls,"A",{href:!0});var Vu=i(ys);yl=s(Vu,"GPTJModel"),Vu.forEach(t),vl=s(Ls," forward method, overrides the "),ra=r(Ls,"CODE",{});var Ku=i(ra);kl=s(Ku,"__call__"),Ku.forEach(t),wl=s(Ls," special method."),Ls.forEach(t),bl=d(_t),k(eo.$$.fragment,_t),Pl=d(_t),ia=r(_t,"P",{});var Xu=i(ia);$l=s(Xu,"Example:"),Xu.forEach(t),Fl=d(_t),k(Wo.$$.fragment,_t),_t.forEach(t),Is.forEach(t),Dr=d(o),xt=r(o,"H2",{class:!0});var hi=i(xt);to=r(hi,"A",{id:!0,class:!0,href:!0});var Yu=i(to);la=r(Yu,"SPAN",{});var Zu=i(la);k(Uo.$$.fragment,Zu),Zu.forEach(t),Yu.forEach(t),jl=d(hi),da=r(hi,"SPAN",{});var em=i(da);Gl=s(em,"GPTJForCausalLM"),em.forEach(t),hi.forEach(t),Or=d(o),et=r(o,"DIV",{class:!0});var Fo=i(et);k(Qo.$$.fragment,Fo),xl=d(Fo),ca=r(Fo,"P",{});var tm=i(ca);Jl=s(tm,"The GPT-J Model transformer with a language modeling head on top."),tm.forEach(t),El=d(Fo),Bo=r(Fo,"P",{});var ui=i(Bo);Ml=s(ui,"This model is a PyTorch "),Ho=r(ui,"A",{href:!0,rel:!0});var om=i(Ho);ql=s(om,"torch.nn.Module"),om.forEach(t),Cl=s(ui,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ui.forEach(t),zl=d(Fo),We=r(Fo,"DIV",{class:!0});var Tt=i(We);k(Ro.$$.fragment,Tt),Al=d(Tt),Jt=r(Tt,"P",{});var Ns=i(Jt);Il=s(Ns,"The "),vs=r(Ns,"A",{href:!0});var nm=i(vs);Ll=s(nm,"GPTJForCausalLM"),nm.forEach(t),Nl=s(Ns," forward method, overrides the "),pa=r(Ns,"CODE",{});var sm=i(pa);Sl=s(sm,"__call__"),sm.forEach(t),Dl=s(Ns," special method."),Ns.forEach(t),Ol=d(Tt),k(oo.$$.fragment,Tt),Wl=d(Tt),ha=r(Tt,"P",{});var am=i(ha);Ul=s(am,"Example:"),am.forEach(t),Ql=d(Tt),k(Vo.$$.fragment,Tt),Tt.forEach(t),Fo.forEach(t),Wr=d(o),Et=r(o,"H2",{class:!0});var mi=i(Et);no=r(mi,"A",{id:!0,class:!0,href:!0});var rm=i(no);ua=r(rm,"SPAN",{});var im=i(ua);k(Ko.$$.fragment,im),im.forEach(t),rm.forEach(t),Bl=d(mi),ma=r(mi,"SPAN",{});var lm=i(ma);Hl=s(lm,"GPTJForSequenceClassification"),lm.forEach(t),mi.forEach(t),Ur=d(o),je=r(o,"DIV",{class:!0});var st=i(je);k(Xo.$$.fragment,st),Rl=d(st),fa=r(st,"P",{});var dm=i(fa);Vl=s(dm,"The GPT-J Model transformer with a sequence classification head on top (linear layer)."),dm.forEach(t),Kl=d(st),ks=r(st,"P",{});var yu=i(ks);ws=r(yu,"A",{href:!0});var cm=i(ws);Xl=s(cm,"GPTJForSequenceClassification"),cm.forEach(t),Yl=s(yu,` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),yu.forEach(t),Zl=d(st),tt=r(st,"P",{});var yt=i(tt);ed=s(yt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),ga=r(yt,"CODE",{});var pm=i(ga);td=s(pm,"pad_token_id"),pm.forEach(t),od=s(yt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),_a=r(yt,"CODE",{});var hm=i(_a);nd=s(hm,"pad_token_id"),hm.forEach(t),sd=s(yt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ta=r(yt,"CODE",{});var um=i(Ta);ad=s(um,"inputs_embeds"),um.forEach(t),rd=s(yt," are passed instead of "),ya=r(yt,"CODE",{});var mm=i(ya);id=s(mm,"input_ids"),mm.forEach(t),ld=s(yt,`, it does the same (take the last value in
each row of the batch).`),yt.forEach(t),dd=d(st),Yo=r(st,"P",{});var fi=i(Yo);cd=s(fi,"This model is a PyTorch "),Zo=r(fi,"A",{href:!0,rel:!0});var fm=i(Zo);pd=s(fm,"torch.nn.Module"),fm.forEach(t),hd=s(fi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fi.forEach(t),ud=d(st),ne=r(st,"DIV",{class:!0});var $e=i(ne);k(en.$$.fragment,$e),md=d($e),Mt=r($e,"P",{});var Ss=i(Mt);fd=s(Ss,"The "),bs=r(Ss,"A",{href:!0});var gm=i(bs);gd=s(gm,"GPTJForSequenceClassification"),gm.forEach(t),_d=s(Ss," forward method, overrides the "),va=r(Ss,"CODE",{});var _m=i(va);Td=s(_m,"__call__"),_m.forEach(t),yd=s(Ss," special method."),Ss.forEach(t),vd=d($e),k(so.$$.fragment,$e),kd=d($e),ka=r($e,"P",{});var Tm=i(ka);wd=s(Tm,"Example of single-label classification:"),Tm.forEach(t),bd=d($e),k(tn.$$.fragment,$e),Pd=d($e),k(on.$$.fragment,$e),$d=d($e),wa=r($e,"P",{});var ym=i(wa);Fd=s(ym,"Example of multi-label classification:"),ym.forEach(t),jd=d($e),k(nn.$$.fragment,$e),Gd=d($e),k(sn.$$.fragment,$e),$e.forEach(t),st.forEach(t),Qr=d(o),qt=r(o,"H2",{class:!0});var gi=i(qt);ao=r(gi,"A",{id:!0,class:!0,href:!0});var vm=i(ao);ba=r(vm,"SPAN",{});var km=i(ba);k(an.$$.fragment,km),km.forEach(t),vm.forEach(t),xd=d(gi),Pa=r(gi,"SPAN",{});var wm=i(Pa);Jd=s(wm,"GPTJForQuestionAnswering"),wm.forEach(t),gi.forEach(t),Br=d(o),ot=r(o,"DIV",{class:!0});var jo=i(ot);k(rn.$$.fragment,jo),Ed=d(jo),Ct=r(jo,"P",{});var Ds=i(Ct);Md=s(Ds,`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),$a=r(Ds,"CODE",{});var bm=i($a);qd=s(bm,"span start logits"),bm.forEach(t),Cd=s(Ds," and "),Fa=r(Ds,"CODE",{});var Pm=i(Fa);zd=s(Pm,"span end logits"),Pm.forEach(t),Ad=s(Ds,")."),Ds.forEach(t),Id=d(jo),ln=r(jo,"P",{});var _i=i(ln);Ld=s(_i,"This model is a PyTorch "),dn=r(_i,"A",{href:!0,rel:!0});var $m=i(dn);Nd=s($m,"torch.nn.Module"),$m.forEach(t),Sd=s(_i,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),_i.forEach(t),Dd=d(jo),Me=r(jo,"DIV",{class:!0});var at=i(Me);k(cn.$$.fragment,at),Od=d(at),zt=r(at,"P",{});var Os=i(zt);Wd=s(Os,"The "),Ps=r(Os,"A",{href:!0});var Fm=i(Ps);Ud=s(Fm,"GPTJForQuestionAnswering"),Fm.forEach(t),Qd=s(Os," forward method, overrides the "),ja=r(Os,"CODE",{});var jm=i(ja);Bd=s(jm,"__call__"),jm.forEach(t),Hd=s(Os," special method."),Os.forEach(t),Rd=d(at),k(ro.$$.fragment,at),Vd=d(at),Ga=r(at,"P",{});var Gm=i(Ga);Kd=s(Gm,"Example:"),Gm.forEach(t),Xd=d(at),k(pn.$$.fragment,at),Yd=d(at),k(hn.$$.fragment,at),at.forEach(t),jo.forEach(t),Hr=d(o),At=r(o,"H2",{class:!0});var Ti=i(At);io=r(Ti,"A",{id:!0,class:!0,href:!0});var xm=i(io);xa=r(xm,"SPAN",{});var Jm=i(xa);k(un.$$.fragment,Jm),Jm.forEach(t),xm.forEach(t),Zd=d(Ti),Ja=r(Ti,"SPAN",{});var Em=i(Ja);ec=s(Em,"TFGPTJModel"),Em.forEach(t),Ti.forEach(t),Rr=d(o),Ge=r(o,"DIV",{class:!0});var rt=i(Ge);k(mn.$$.fragment,rt),tc=d(rt),Ea=r(rt,"P",{});var Mm=i(Ea);oc=s(Mm,"The bare GPT-J Model transformer outputting raw hidden-states without any specific head on top."),Mm.forEach(t),nc=d(rt),fn=r(rt,"P",{});var yi=i(fn);sc=s(yi,"This model inherits from "),$s=r(yi,"A",{href:!0});var qm=i($s);ac=s(qm,"TFPreTrainedModel"),qm.forEach(t),rc=s(yi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yi.forEach(t),ic=d(rt),gn=r(rt,"P",{});var vi=i(gn);lc=s(vi,"This model is also a "),_n=r(vi,"A",{href:!0,rel:!0});var Cm=i(_n);dc=s(Cm,"tf.keras.Model"),Cm.forEach(t),cc=s(vi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vi.forEach(t),pc=d(rt),k(lo.$$.fragment,rt),hc=d(rt),Ue=r(rt,"DIV",{class:!0});var vt=i(Ue);k(Tn.$$.fragment,vt),uc=d(vt),It=r(vt,"P",{});var Ws=i(It);mc=s(Ws,"The "),Fs=r(Ws,"A",{href:!0});var zm=i(Fs);fc=s(zm,"TFGPTJModel"),zm.forEach(t),gc=s(Ws," forward method, overrides the "),Ma=r(Ws,"CODE",{});var Am=i(Ma);_c=s(Am,"__call__"),Am.forEach(t),Tc=s(Ws," special method."),Ws.forEach(t),yc=d(vt),k(co.$$.fragment,vt),vc=d(vt),qa=r(vt,"P",{});var Im=i(qa);kc=s(Im,"Example:"),Im.forEach(t),wc=d(vt),k(yn.$$.fragment,vt),vt.forEach(t),rt.forEach(t),Vr=d(o),Lt=r(o,"H2",{class:!0});var ki=i(Lt);po=r(ki,"A",{id:!0,class:!0,href:!0});var Lm=i(po);Ca=r(Lm,"SPAN",{});var Nm=i(Ca);k(vn.$$.fragment,Nm),Nm.forEach(t),Lm.forEach(t),bc=d(ki),za=r(ki,"SPAN",{});var Sm=i(za);Pc=s(Sm,"TFGPTJForCausalLM"),Sm.forEach(t),ki.forEach(t),Kr=d(o),xe=r(o,"DIV",{class:!0});var it=i(xe);k(kn.$$.fragment,it),$c=d(it),Aa=r(it,"P",{});var Dm=i(Aa);Fc=s(Dm,"The GPT-J Model transformer with a language modeling head on top."),Dm.forEach(t),jc=d(it),wn=r(it,"P",{});var wi=i(wn);Gc=s(wi,"This model inherits from "),js=r(wi,"A",{href:!0});var Om=i(js);xc=s(Om,"TFPreTrainedModel"),Om.forEach(t),Jc=s(wi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wi.forEach(t),Ec=d(it),bn=r(it,"P",{});var bi=i(bn);Mc=s(bi,"This model is also a "),Pn=r(bi,"A",{href:!0,rel:!0});var Wm=i(Pn);qc=s(Wm,"tf.keras.Model"),Wm.forEach(t),Cc=s(bi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bi.forEach(t),zc=d(it),k(ho.$$.fragment,it),Ac=d(it),Qe=r(it,"DIV",{class:!0});var kt=i(Qe);k($n.$$.fragment,kt),Ic=d(kt),Nt=r(kt,"P",{});var Us=i(Nt);Lc=s(Us,"The "),Gs=r(Us,"A",{href:!0});var Um=i(Gs);Nc=s(Um,"TFGPTJForCausalLM"),Um.forEach(t),Sc=s(Us," forward method, overrides the "),Ia=r(Us,"CODE",{});var Qm=i(Ia);Dc=s(Qm,"__call__"),Qm.forEach(t),Oc=s(Us," special method."),Us.forEach(t),Wc=d(kt),k(uo.$$.fragment,kt),Uc=d(kt),La=r(kt,"P",{});var Bm=i(La);Qc=s(Bm,"Example:"),Bm.forEach(t),Bc=d(kt),k(Fn.$$.fragment,kt),kt.forEach(t),it.forEach(t),Xr=d(o),St=r(o,"H2",{class:!0});var Pi=i(St);mo=r(Pi,"A",{id:!0,class:!0,href:!0});var Hm=i(mo);Na=r(Hm,"SPAN",{});var Rm=i(Na);k(jn.$$.fragment,Rm),Rm.forEach(t),Hm.forEach(t),Hc=d(Pi),Sa=r(Pi,"SPAN",{});var Vm=i(Sa);Rc=s(Vm,"TFGPTJForSequenceClassification"),Vm.forEach(t),Pi.forEach(t),Yr=d(o),ae=r(o,"DIV",{class:!0});var ze=i(ae);k(Gn.$$.fragment,ze),Vc=d(ze),Da=r(ze,"P",{});var Km=i(Da);Kc=s(Km,"The GPT-J Model transformer with a sequence classification head on top (linear layer)."),Km.forEach(t),Xc=d(ze),xs=r(ze,"P",{});var vu=i(xs);Js=r(vu,"A",{href:!0});var Xm=i(Js);Yc=s(Xm,"GPTJForSequenceClassification"),Xm.forEach(t),Zc=s(vu,` uses the last token in order to do the classification, as other causal models
(e.g. GPT, GPT-2, GPT-Neo) do.`),vu.forEach(t),ep=d(ze),nt=r(ze,"P",{});var wt=i(nt);tp=s(wt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Oa=r(wt,"CODE",{});var Ym=i(Oa);op=s(Ym,"pad_token_id"),Ym.forEach(t),np=s(wt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Wa=r(wt,"CODE",{});var Zm=i(Wa);sp=s(Zm,"pad_token_id"),Zm.forEach(t),ap=s(wt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ua=r(wt,"CODE",{});var ef=i(Ua);rp=s(ef,"inputs_embeds"),ef.forEach(t),ip=s(wt," are passed instead of "),Qa=r(wt,"CODE",{});var tf=i(Qa);lp=s(tf,"input_ids"),tf.forEach(t),dp=s(wt,`, it does the same (take the last value in
each row of the batch).`),wt.forEach(t),cp=d(ze),xn=r(ze,"P",{});var $i=i(xn);pp=s($i,"This model inherits from "),Es=r($i,"A",{href:!0});var of=i(Es);hp=s(of,"TFPreTrainedModel"),of.forEach(t),up=s($i,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$i.forEach(t),mp=d(ze),Jn=r(ze,"P",{});var Fi=i(Jn);fp=s(Fi,"This model is also a "),En=r(Fi,"A",{href:!0,rel:!0});var nf=i(En);gp=s(nf,"tf.keras.Model"),nf.forEach(t),_p=s(Fi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fi.forEach(t),Tp=d(ze),k(fo.$$.fragment,ze),yp=d(ze),qe=r(ze,"DIV",{class:!0});var lt=i(qe);k(Mn.$$.fragment,lt),vp=d(lt),Dt=r(lt,"P",{});var Qs=i(Dt);kp=s(Qs,"The "),Ms=r(Qs,"A",{href:!0});var sf=i(Ms);wp=s(sf,"TFGPTJForSequenceClassification"),sf.forEach(t),bp=s(Qs," forward method, overrides the "),Ba=r(Qs,"CODE",{});var af=i(Ba);Pp=s(af,"__call__"),af.forEach(t),$p=s(Qs," special method."),Qs.forEach(t),Fp=d(lt),k(go.$$.fragment,lt),jp=d(lt),Ha=r(lt,"P",{});var rf=i(Ha);Gp=s(rf,"Example:"),rf.forEach(t),xp=d(lt),k(qn.$$.fragment,lt),Jp=d(lt),k(Cn.$$.fragment,lt),lt.forEach(t),ze.forEach(t),Zr=d(o),Ot=r(o,"H2",{class:!0});var ji=i(Ot);_o=r(ji,"A",{id:!0,class:!0,href:!0});var lf=i(_o);Ra=r(lf,"SPAN",{});var df=i(Ra);k(zn.$$.fragment,df),df.forEach(t),lf.forEach(t),Ep=d(ji),Va=r(ji,"SPAN",{});var cf=i(Va);Mp=s(cf,"TFGPTJForQuestionAnswering"),cf.forEach(t),ji.forEach(t),ei=d(o),Je=r(o,"DIV",{class:!0});var dt=i(Je);k(An.$$.fragment,dt),qp=d(dt),Wt=r(dt,"P",{});var Bs=i(Wt);Cp=s(Bs,`The GPT-J Model transformer with a span classification head on top for extractive question-answering tasks like
SQuAD (a linear layers on top of the hidden-states output to compute `),Ka=r(Bs,"CODE",{});var pf=i(Ka);zp=s(pf,"span start logits"),pf.forEach(t),Ap=s(Bs," and "),Xa=r(Bs,"CODE",{});var hf=i(Xa);Ip=s(hf,"span end logits"),hf.forEach(t),Lp=s(Bs,")."),Bs.forEach(t),Np=d(dt),In=r(dt,"P",{});var Gi=i(In);Sp=s(Gi,"This model inherits from "),qs=r(Gi,"A",{href:!0});var uf=i(qs);Dp=s(uf,"TFPreTrainedModel"),uf.forEach(t),Op=s(Gi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gi.forEach(t),Wp=d(dt),Ln=r(dt,"P",{});var xi=i(Ln);Up=s(xi,"This model is also a "),Nn=r(xi,"A",{href:!0,rel:!0});var mf=i(Nn);Qp=s(mf,"tf.keras.Model"),mf.forEach(t),Bp=s(xi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),xi.forEach(t),Hp=d(dt),k(To.$$.fragment,dt),Rp=d(dt),Ce=r(dt,"DIV",{class:!0});var ct=i(Ce);k(Sn.$$.fragment,ct),Vp=d(ct),Ut=r(ct,"P",{});var Hs=i(Ut);Kp=s(Hs,"The "),Cs=r(Hs,"A",{href:!0});var ff=i(Cs);Xp=s(ff,"TFGPTJForQuestionAnswering"),ff.forEach(t),Yp=s(Hs," forward method, overrides the "),Ya=r(Hs,"CODE",{});var gf=i(Ya);Zp=s(gf,"__call__"),gf.forEach(t),eh=s(Hs," special method."),Hs.forEach(t),th=d(ct),k(yo.$$.fragment,ct),oh=d(ct),Za=r(ct,"P",{});var _f=i(Za);nh=s(_f,"Example:"),_f.forEach(t),sh=d(ct),k(Dn.$$.fragment,ct),ah=d(ct),k(On.$$.fragment,ct),ct.forEach(t),dt.forEach(t),ti=d(o),Qt=r(o,"H2",{class:!0});var Ji=i(Qt);vo=r(Ji,"A",{id:!0,class:!0,href:!0});var Tf=i(vo);er=r(Tf,"SPAN",{});var yf=i(er);k(Wn.$$.fragment,yf),yf.forEach(t),Tf.forEach(t),rh=d(Ji),tr=r(Ji,"SPAN",{});var vf=i(tr);ih=s(vf,"FlaxGPTJModel"),vf.forEach(t),Ji.forEach(t),oi=d(o),be=r(o,"DIV",{class:!0});var Re=i(be);k(Un.$$.fragment,Re),lh=d(Re),or=r(Re,"P",{});var kf=i(or);dh=s(kf,"The bare GPTJ Model transformer outputting raw hidden-states without any specific head on top."),kf.forEach(t),ch=d(Re),Qn=r(Re,"P",{});var Ei=i(Qn);ph=s(Ei,"This model inherits from "),zs=r(Ei,"A",{href:!0});var wf=i(zs);hh=s(wf,"FlaxPreTrainedModel"),wf.forEach(t),uh=s(Ei,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ei.forEach(t),mh=d(Re),Bn=r(Re,"P",{});var Mi=i(Bn);fh=s(Mi,`This model is also a Flax Linen
`),Hn=r(Mi,"A",{href:!0,rel:!0});var bf=i(Hn);gh=s(bf,"flax.nn.Module"),bf.forEach(t),_h=s(Mi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),Mi.forEach(t),Th=d(Re),nr=r(Re,"P",{});var Pf=i(nr);yh=s(Pf,"Finally, this model supports inherent JAX features such as:"),Pf.forEach(t),vh=d(Re),ut=r(Re,"UL",{});var Go=i(ut);sr=r(Go,"LI",{});var $f=i(sr);Rn=r($f,"A",{href:!0,rel:!0});var Ff=i(Rn);kh=s(Ff,"Just-In-Time (JIT) compilation"),Ff.forEach(t),$f.forEach(t),wh=d(Go),ar=r(Go,"LI",{});var jf=i(ar);Vn=r(jf,"A",{href:!0,rel:!0});var Gf=i(Vn);bh=s(Gf,"Automatic Differentiation"),Gf.forEach(t),jf.forEach(t),Ph=d(Go),rr=r(Go,"LI",{});var xf=i(rr);Kn=r(xf,"A",{href:!0,rel:!0});var Jf=i(Kn);$h=s(Jf,"Vectorization"),Jf.forEach(t),xf.forEach(t),Fh=d(Go),ir=r(Go,"LI",{});var Ef=i(ir);Xn=r(Ef,"A",{href:!0,rel:!0});var Mf=i(Xn);jh=s(Mf,"Parallelization"),Mf.forEach(t),Ef.forEach(t),Go.forEach(t),Gh=d(Re),Be=r(Re,"DIV",{class:!0});var bt=i(Be);k(Yn.$$.fragment,bt),xh=d(bt),Bt=r(bt,"P",{});var Rs=i(Bt);Jh=s(Rs,"The "),lr=r(Rs,"CODE",{});var qf=i(lr);Eh=s(qf,"FlaxGPTJPreTrainedModel"),qf.forEach(t),Mh=s(Rs," forward method, overrides the "),dr=r(Rs,"CODE",{});var Cf=i(dr);qh=s(Cf,"__call__"),Cf.forEach(t),Ch=s(Rs," special method."),Rs.forEach(t),zh=d(bt),k(ko.$$.fragment,bt),Ah=d(bt),cr=r(bt,"P",{});var zf=i(cr);Ih=s(zf,"Example:"),zf.forEach(t),Lh=d(bt),k(Zn.$$.fragment,bt),bt.forEach(t),Re.forEach(t),ni=d(o),Ht=r(o,"H2",{class:!0});var qi=i(Ht);wo=r(qi,"A",{id:!0,class:!0,href:!0});var Af=i(wo);pr=r(Af,"SPAN",{});var If=i(pr);k(es.$$.fragment,If),If.forEach(t),Af.forEach(t),Nh=d(qi),hr=r(qi,"SPAN",{});var Lf=i(hr);Sh=s(Lf,"FlaxGPTJForCausalLM"),Lf.forEach(t),qi.forEach(t),si=d(o),Pe=r(o,"DIV",{class:!0});var Ve=i(Pe);k(ts.$$.fragment,Ve),Dh=d(Ve),ur=r(Ve,"P",{});var Nf=i(ur);Oh=s(Nf,"The GPTJ Model transformer with a language modeling head on top."),Nf.forEach(t),Wh=d(Ve),os=r(Ve,"P",{});var Ci=i(os);Uh=s(Ci,"This model inherits from "),As=r(Ci,"A",{href:!0});var Sf=i(As);Qh=s(Sf,"FlaxPreTrainedModel"),Sf.forEach(t),Bh=s(Ci,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ci.forEach(t),Hh=d(Ve),ns=r(Ve,"P",{});var zi=i(ns);Rh=s(zi,`This model is also a Flax Linen
`),ss=r(zi,"A",{href:!0,rel:!0});var Df=i(ss);Vh=s(Df,"flax.nn.Module"),Df.forEach(t),Kh=s(zi,` subclass. Use it as a
regular Flax Module and refer to the Flax documentation for all matter related to general usage and behavior.`),zi.forEach(t),Xh=d(Ve),mr=r(Ve,"P",{});var Of=i(mr);Yh=s(Of,"Finally, this model supports inherent JAX features such as:"),Of.forEach(t),Zh=d(Ve),mt=r(Ve,"UL",{});var xo=i(mt);fr=r(xo,"LI",{});var Wf=i(fr);as=r(Wf,"A",{href:!0,rel:!0});var Uf=i(as);eu=s(Uf,"Just-In-Time (JIT) compilation"),Uf.forEach(t),Wf.forEach(t),tu=d(xo),gr=r(xo,"LI",{});var Qf=i(gr);rs=r(Qf,"A",{href:!0,rel:!0});var Bf=i(rs);ou=s(Bf,"Automatic Differentiation"),Bf.forEach(t),Qf.forEach(t),nu=d(xo),_r=r(xo,"LI",{});var Hf=i(_r);is=r(Hf,"A",{href:!0,rel:!0});var Rf=i(is);su=s(Rf,"Vectorization"),Rf.forEach(t),Hf.forEach(t),au=d(xo),Tr=r(xo,"LI",{});var Vf=i(Tr);ls=r(Vf,"A",{href:!0,rel:!0});var Kf=i(ls);ru=s(Kf,"Parallelization"),Kf.forEach(t),Vf.forEach(t),xo.forEach(t),iu=d(Ve),He=r(Ve,"DIV",{class:!0});var Pt=i(He);k(ds.$$.fragment,Pt),lu=d(Pt),Rt=r(Pt,"P",{});var Vs=i(Rt);du=s(Vs,"The "),yr=r(Vs,"CODE",{});var Xf=i(yr);cu=s(Xf,"FlaxGPTJPreTrainedModel"),Xf.forEach(t),pu=s(Vs," forward method, overrides the "),vr=r(Vs,"CODE",{});var Yf=i(vr);hu=s(Yf,"__call__"),Yf.forEach(t),uu=s(Vs," special method."),Vs.forEach(t),mu=d(Pt),k(bo.$$.fragment,Pt),fu=d(Pt),kr=r(Pt,"P",{});var Zf=i(kr);gu=s(Zf,"Example:"),Zf.forEach(t),_u=d(Pt),k(cs.$$.fragment,Pt),Pt.forEach(t),Ve.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(vg)),c(_,"id","gptj"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#gptj"),c(f,"class","relative group"),c(X,"id","overview"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#overview"),c(x,"class","relative group"),c(ee,"href","https://github.com/kingoflolz/mesh-transformer-jax"),c(ee,"rel","nofollow"),c(E,"href","https://pile.eleuther.ai/"),c(E,"rel","nofollow"),c(oe,"href","https://huggingface.co/stellaathena"),c(oe,"rel","nofollow"),c(q,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),c(q,"rel","nofollow"),c(C,"href","https://huggingface.co/EleutherAI/gpt-j-6B/tree/float16"),c(C,"rel","nofollow"),c(ke,"href","https://github.com/kingoflolz/mesh-transformer-jax/blob/master/howto_finetune.md"),c(ke,"rel","nofollow"),c(Jo,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),c(Jo,"rel","nofollow"),c(Kt,"id","generation"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#generation"),c($t,"class","relative group"),c(ms,"href","/docs/transformers/main/en/main_classes/text_generation#transformers.generation_utils.GenerationMixin.generate"),c(Yt,"id","transformers.GPTJConfig"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.GPTJConfig"),c(Ft,"class","relative group"),c(gs,"href","/docs/transformers/main/en/model_doc/gptj#transformers.GPTJModel"),c(Ao,"href","https://huggingface.co/EleutherAI/gpt-j-6B"),c(Ao,"rel","nofollow"),c(_s,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ts,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Zt,"id","transformers.GPTJModel"),c(Zt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zt,"href","#transformers.GPTJModel"),c(jt,"class","relative group"),c(Do,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Do,"rel","nofollow"),c(ys,"href","/docs/transformers/main/en/model_doc/gptj#transformers.GPTJModel"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ht,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(to,"id","transformers.GPTJForCausalLM"),c(to,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(to,"href","#transformers.GPTJForCausalLM"),c(xt,"class","relative group"),c(Ho,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ho,"rel","nofollow"),c(vs,"href","/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForCausalLM"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(et,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(no,"id","transformers.GPTJForSequenceClassification"),c(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(no,"href","#transformers.GPTJForSequenceClassification"),c(Et,"class","relative group"),c(ws,"href","/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),c(Zo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Zo,"rel","nofollow"),c(bs,"href","/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),c(ne,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ao,"id","transformers.GPTJForQuestionAnswering"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.GPTJForQuestionAnswering"),c(qt,"class","relative group"),c(dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(dn,"rel","nofollow"),c(Ps,"href","/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForQuestionAnswering"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(io,"id","transformers.TFGPTJModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFGPTJModel"),c(At,"class","relative group"),c($s,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(_n,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(_n,"rel","nofollow"),c(Fs,"href","/docs/transformers/main/en/model_doc/gptj#transformers.TFGPTJModel"),c(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(po,"id","transformers.TFGPTJForCausalLM"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.TFGPTJForCausalLM"),c(Lt,"class","relative group"),c(js,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Pn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Pn,"rel","nofollow"),c(Gs,"href","/docs/transformers/main/en/model_doc/gptj#transformers.TFGPTJForCausalLM"),c(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(mo,"id","transformers.TFGPTJForSequenceClassification"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.TFGPTJForSequenceClassification"),c(St,"class","relative group"),c(Js,"href","/docs/transformers/main/en/model_doc/gptj#transformers.GPTJForSequenceClassification"),c(Es,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(En,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(En,"rel","nofollow"),c(Ms,"href","/docs/transformers/main/en/model_doc/gptj#transformers.TFGPTJForSequenceClassification"),c(qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(_o,"id","transformers.TFGPTJForQuestionAnswering"),c(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_o,"href","#transformers.TFGPTJForQuestionAnswering"),c(Ot,"class","relative group"),c(qs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Nn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Nn,"rel","nofollow"),c(Cs,"href","/docs/transformers/main/en/model_doc/gptj#transformers.TFGPTJForQuestionAnswering"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(vo,"id","transformers.FlaxGPTJModel"),c(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vo,"href","#transformers.FlaxGPTJModel"),c(Qt,"class","relative group"),c(zs,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(Hn,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(Hn,"rel","nofollow"),c(Rn,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(Rn,"rel","nofollow"),c(Vn,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(Vn,"rel","nofollow"),c(Kn,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(Kn,"rel","nofollow"),c(Xn,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(Xn,"rel","nofollow"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wo,"id","transformers.FlaxGPTJForCausalLM"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.FlaxGPTJForCausalLM"),c(Ht,"class","relative group"),c(As,"href","/docs/transformers/main/en/main_classes/model#transformers.FlaxPreTrainedModel"),c(ss,"href","https://flax.readthedocs.io/en/latest/_autosummary/flax.nn.module.html"),c(ss,"rel","nofollow"),c(as,"href","https://jax.readthedocs.io/en/latest/jax.html#just-in-time-compilation-jit"),c(as,"rel","nofollow"),c(rs,"href","https://jax.readthedocs.io/en/latest/jax.html#automatic-differentiation"),c(rs,"rel","nofollow"),c(is,"href","https://jax.readthedocs.io/en/latest/jax.html#vectorization-vmap"),c(is,"rel","nofollow"),c(ls,"href","https://jax.readthedocs.io/en/latest/jax.html#parallelization-pmap"),c(ls,"rel","nofollow"),c(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Pe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,m){e(document.head,p),u(o,F,m),u(o,f,m),e(f,_),e(_,y),w(T,y,null),e(f,g),e(f,j),e(j,ue),u(o,K,m),u(o,x,m),e(x,X),e(X,O),w(Z,O,null),e(x,me),e(x,W),e(W,fe),u(o,ie,m),u(o,L,m),e(L,A),e(L,ee),e(ee,te),e(L,J),e(L,E),e(E,ge),e(L,B),u(o,le,m),u(o,Y,m),e(Y,H),e(Y,oe),e(oe,_e),e(Y,M),u(o,de,m),u(o,N,m),e(N,Te),u(o,ce,m),u(o,S,m),e(S,U),e(U,ye),e(U,q),e(q,ve),e(U,R),e(U,se),e(se,h),e(U,G),e(U,V),e(V,Ae),e(U,Ie),e(U,C),e(C,Le),e(U,Ne),u(o,Ee,m),w(z,o,m),u(o,Q,m),u(o,pe,m),e(pe,Fe),e(Fe,D),e(D,Se),e(D,ke),e(ke,we),e(pe,De),e(pe,Ks),e(Ks,pt),e(pt,Ai),e(pt,Jo),e(Jo,Ii),e(pt,Li),e(pt,Xs),e(Xs,Ni),e(pt,Si),e(pt,Ys),e(Ys,Di),e(pt,Oi),u(o,Mr,m),u(o,$t,m),e($t,Kt),e(Kt,Zs),w(Eo,Zs,null),e($t,Wi),e($t,ea),e(ea,Ui),u(o,qr,m),u(o,Xt,m),e(Xt,Qi),e(Xt,ms),e(ms,Bi),e(Xt,Hi),u(o,Cr,m),w(Mo,o,m),u(o,zr,m),u(o,fs,m),e(fs,Ri),u(o,Ar,m),w(qo,o,m),u(o,Ir,m),u(o,Ft,m),e(Ft,Yt),e(Yt,ta),w(Co,ta,null),e(Ft,Vi),e(Ft,oa),e(oa,Ki),u(o,Lr,m),u(o,Ye,m),w(zo,Ye,null),e(Ye,Xi),e(Ye,Ze),e(Ze,Yi),e(Ze,gs),e(gs,Zi),e(Ze,el),e(Ze,Ao),e(Ao,tl),e(Ze,ol),e(Ze,_s),e(_s,nl),e(Ze,sl),e(Ze,Ts),e(Ts,al),e(Ze,rl),e(Ye,il),e(Ye,na),e(na,ll),e(Ye,dl),w(Io,Ye,null),u(o,Nr,m),u(o,jt,m),e(jt,Zt),e(Zt,sa),w(Lo,sa,null),e(jt,cl),e(jt,aa),e(aa,pl),u(o,Sr,m),u(o,ht,m),w(No,ht,null),e(ht,hl),e(ht,So),e(So,ul),e(So,Do),e(Do,ml),e(So,fl),e(ht,gl),e(ht,Oe),w(Oo,Oe,null),e(Oe,_l),e(Oe,Gt),e(Gt,Tl),e(Gt,ys),e(ys,yl),e(Gt,vl),e(Gt,ra),e(ra,kl),e(Gt,wl),e(Oe,bl),w(eo,Oe,null),e(Oe,Pl),e(Oe,ia),e(ia,$l),e(Oe,Fl),w(Wo,Oe,null),u(o,Dr,m),u(o,xt,m),e(xt,to),e(to,la),w(Uo,la,null),e(xt,jl),e(xt,da),e(da,Gl),u(o,Or,m),u(o,et,m),w(Qo,et,null),e(et,xl),e(et,ca),e(ca,Jl),e(et,El),e(et,Bo),e(Bo,Ml),e(Bo,Ho),e(Ho,ql),e(Bo,Cl),e(et,zl),e(et,We),w(Ro,We,null),e(We,Al),e(We,Jt),e(Jt,Il),e(Jt,vs),e(vs,Ll),e(Jt,Nl),e(Jt,pa),e(pa,Sl),e(Jt,Dl),e(We,Ol),w(oo,We,null),e(We,Wl),e(We,ha),e(ha,Ul),e(We,Ql),w(Vo,We,null),u(o,Wr,m),u(o,Et,m),e(Et,no),e(no,ua),w(Ko,ua,null),e(Et,Bl),e(Et,ma),e(ma,Hl),u(o,Ur,m),u(o,je,m),w(Xo,je,null),e(je,Rl),e(je,fa),e(fa,Vl),e(je,Kl),e(je,ks),e(ks,ws),e(ws,Xl),e(ks,Yl),e(je,Zl),e(je,tt),e(tt,ed),e(tt,ga),e(ga,td),e(tt,od),e(tt,_a),e(_a,nd),e(tt,sd),e(tt,Ta),e(Ta,ad),e(tt,rd),e(tt,ya),e(ya,id),e(tt,ld),e(je,dd),e(je,Yo),e(Yo,cd),e(Yo,Zo),e(Zo,pd),e(Yo,hd),e(je,ud),e(je,ne),w(en,ne,null),e(ne,md),e(ne,Mt),e(Mt,fd),e(Mt,bs),e(bs,gd),e(Mt,_d),e(Mt,va),e(va,Td),e(Mt,yd),e(ne,vd),w(so,ne,null),e(ne,kd),e(ne,ka),e(ka,wd),e(ne,bd),w(tn,ne,null),e(ne,Pd),w(on,ne,null),e(ne,$d),e(ne,wa),e(wa,Fd),e(ne,jd),w(nn,ne,null),e(ne,Gd),w(sn,ne,null),u(o,Qr,m),u(o,qt,m),e(qt,ao),e(ao,ba),w(an,ba,null),e(qt,xd),e(qt,Pa),e(Pa,Jd),u(o,Br,m),u(o,ot,m),w(rn,ot,null),e(ot,Ed),e(ot,Ct),e(Ct,Md),e(Ct,$a),e($a,qd),e(Ct,Cd),e(Ct,Fa),e(Fa,zd),e(Ct,Ad),e(ot,Id),e(ot,ln),e(ln,Ld),e(ln,dn),e(dn,Nd),e(ln,Sd),e(ot,Dd),e(ot,Me),w(cn,Me,null),e(Me,Od),e(Me,zt),e(zt,Wd),e(zt,Ps),e(Ps,Ud),e(zt,Qd),e(zt,ja),e(ja,Bd),e(zt,Hd),e(Me,Rd),w(ro,Me,null),e(Me,Vd),e(Me,Ga),e(Ga,Kd),e(Me,Xd),w(pn,Me,null),e(Me,Yd),w(hn,Me,null),u(o,Hr,m),u(o,At,m),e(At,io),e(io,xa),w(un,xa,null),e(At,Zd),e(At,Ja),e(Ja,ec),u(o,Rr,m),u(o,Ge,m),w(mn,Ge,null),e(Ge,tc),e(Ge,Ea),e(Ea,oc),e(Ge,nc),e(Ge,fn),e(fn,sc),e(fn,$s),e($s,ac),e(fn,rc),e(Ge,ic),e(Ge,gn),e(gn,lc),e(gn,_n),e(_n,dc),e(gn,cc),e(Ge,pc),w(lo,Ge,null),e(Ge,hc),e(Ge,Ue),w(Tn,Ue,null),e(Ue,uc),e(Ue,It),e(It,mc),e(It,Fs),e(Fs,fc),e(It,gc),e(It,Ma),e(Ma,_c),e(It,Tc),e(Ue,yc),w(co,Ue,null),e(Ue,vc),e(Ue,qa),e(qa,kc),e(Ue,wc),w(yn,Ue,null),u(o,Vr,m),u(o,Lt,m),e(Lt,po),e(po,Ca),w(vn,Ca,null),e(Lt,bc),e(Lt,za),e(za,Pc),u(o,Kr,m),u(o,xe,m),w(kn,xe,null),e(xe,$c),e(xe,Aa),e(Aa,Fc),e(xe,jc),e(xe,wn),e(wn,Gc),e(wn,js),e(js,xc),e(wn,Jc),e(xe,Ec),e(xe,bn),e(bn,Mc),e(bn,Pn),e(Pn,qc),e(bn,Cc),e(xe,zc),w(ho,xe,null),e(xe,Ac),e(xe,Qe),w($n,Qe,null),e(Qe,Ic),e(Qe,Nt),e(Nt,Lc),e(Nt,Gs),e(Gs,Nc),e(Nt,Sc),e(Nt,Ia),e(Ia,Dc),e(Nt,Oc),e(Qe,Wc),w(uo,Qe,null),e(Qe,Uc),e(Qe,La),e(La,Qc),e(Qe,Bc),w(Fn,Qe,null),u(o,Xr,m),u(o,St,m),e(St,mo),e(mo,Na),w(jn,Na,null),e(St,Hc),e(St,Sa),e(Sa,Rc),u(o,Yr,m),u(o,ae,m),w(Gn,ae,null),e(ae,Vc),e(ae,Da),e(Da,Kc),e(ae,Xc),e(ae,xs),e(xs,Js),e(Js,Yc),e(xs,Zc),e(ae,ep),e(ae,nt),e(nt,tp),e(nt,Oa),e(Oa,op),e(nt,np),e(nt,Wa),e(Wa,sp),e(nt,ap),e(nt,Ua),e(Ua,rp),e(nt,ip),e(nt,Qa),e(Qa,lp),e(nt,dp),e(ae,cp),e(ae,xn),e(xn,pp),e(xn,Es),e(Es,hp),e(xn,up),e(ae,mp),e(ae,Jn),e(Jn,fp),e(Jn,En),e(En,gp),e(Jn,_p),e(ae,Tp),w(fo,ae,null),e(ae,yp),e(ae,qe),w(Mn,qe,null),e(qe,vp),e(qe,Dt),e(Dt,kp),e(Dt,Ms),e(Ms,wp),e(Dt,bp),e(Dt,Ba),e(Ba,Pp),e(Dt,$p),e(qe,Fp),w(go,qe,null),e(qe,jp),e(qe,Ha),e(Ha,Gp),e(qe,xp),w(qn,qe,null),e(qe,Jp),w(Cn,qe,null),u(o,Zr,m),u(o,Ot,m),e(Ot,_o),e(_o,Ra),w(zn,Ra,null),e(Ot,Ep),e(Ot,Va),e(Va,Mp),u(o,ei,m),u(o,Je,m),w(An,Je,null),e(Je,qp),e(Je,Wt),e(Wt,Cp),e(Wt,Ka),e(Ka,zp),e(Wt,Ap),e(Wt,Xa),e(Xa,Ip),e(Wt,Lp),e(Je,Np),e(Je,In),e(In,Sp),e(In,qs),e(qs,Dp),e(In,Op),e(Je,Wp),e(Je,Ln),e(Ln,Up),e(Ln,Nn),e(Nn,Qp),e(Ln,Bp),e(Je,Hp),w(To,Je,null),e(Je,Rp),e(Je,Ce),w(Sn,Ce,null),e(Ce,Vp),e(Ce,Ut),e(Ut,Kp),e(Ut,Cs),e(Cs,Xp),e(Ut,Yp),e(Ut,Ya),e(Ya,Zp),e(Ut,eh),e(Ce,th),w(yo,Ce,null),e(Ce,oh),e(Ce,Za),e(Za,nh),e(Ce,sh),w(Dn,Ce,null),e(Ce,ah),w(On,Ce,null),u(o,ti,m),u(o,Qt,m),e(Qt,vo),e(vo,er),w(Wn,er,null),e(Qt,rh),e(Qt,tr),e(tr,ih),u(o,oi,m),u(o,be,m),w(Un,be,null),e(be,lh),e(be,or),e(or,dh),e(be,ch),e(be,Qn),e(Qn,ph),e(Qn,zs),e(zs,hh),e(Qn,uh),e(be,mh),e(be,Bn),e(Bn,fh),e(Bn,Hn),e(Hn,gh),e(Bn,_h),e(be,Th),e(be,nr),e(nr,yh),e(be,vh),e(be,ut),e(ut,sr),e(sr,Rn),e(Rn,kh),e(ut,wh),e(ut,ar),e(ar,Vn),e(Vn,bh),e(ut,Ph),e(ut,rr),e(rr,Kn),e(Kn,$h),e(ut,Fh),e(ut,ir),e(ir,Xn),e(Xn,jh),e(be,Gh),e(be,Be),w(Yn,Be,null),e(Be,xh),e(Be,Bt),e(Bt,Jh),e(Bt,lr),e(lr,Eh),e(Bt,Mh),e(Bt,dr),e(dr,qh),e(Bt,Ch),e(Be,zh),w(ko,Be,null),e(Be,Ah),e(Be,cr),e(cr,Ih),e(Be,Lh),w(Zn,Be,null),u(o,ni,m),u(o,Ht,m),e(Ht,wo),e(wo,pr),w(es,pr,null),e(Ht,Nh),e(Ht,hr),e(hr,Sh),u(o,si,m),u(o,Pe,m),w(ts,Pe,null),e(Pe,Dh),e(Pe,ur),e(ur,Oh),e(Pe,Wh),e(Pe,os),e(os,Uh),e(os,As),e(As,Qh),e(os,Bh),e(Pe,Hh),e(Pe,ns),e(ns,Rh),e(ns,ss),e(ss,Vh),e(ns,Kh),e(Pe,Xh),e(Pe,mr),e(mr,Yh),e(Pe,Zh),e(Pe,mt),e(mt,fr),e(fr,as),e(as,eu),e(mt,tu),e(mt,gr),e(gr,rs),e(rs,ou),e(mt,nu),e(mt,_r),e(_r,is),e(is,su),e(mt,au),e(mt,Tr),e(Tr,ls),e(ls,ru),e(Pe,iu),e(Pe,He),w(ds,He,null),e(He,lu),e(He,Rt),e(Rt,du),e(Rt,yr),e(yr,cu),e(Rt,pu),e(Rt,vr),e(vr,hu),e(Rt,uu),e(He,mu),w(bo,He,null),e(He,fu),e(He,kr),e(kr,gu),e(He,_u),w(cs,He,null),ai=!0},p(o,[m]){const ps={};m&2&&(ps.$$scope={dirty:m,ctx:o}),eo.$set(ps);const wr={};m&2&&(wr.$$scope={dirty:m,ctx:o}),oo.$set(wr);const br={};m&2&&(br.$$scope={dirty:m,ctx:o}),so.$set(br);const Pr={};m&2&&(Pr.$$scope={dirty:m,ctx:o}),ro.$set(Pr);const hs={};m&2&&(hs.$$scope={dirty:m,ctx:o}),lo.$set(hs);const $r={};m&2&&($r.$$scope={dirty:m,ctx:o}),co.$set($r);const Fr={};m&2&&(Fr.$$scope={dirty:m,ctx:o}),ho.$set(Fr);const jr={};m&2&&(jr.$$scope={dirty:m,ctx:o}),uo.$set(jr);const Vt={};m&2&&(Vt.$$scope={dirty:m,ctx:o}),fo.$set(Vt);const Gr={};m&2&&(Gr.$$scope={dirty:m,ctx:o}),go.$set(Gr);const xr={};m&2&&(xr.$$scope={dirty:m,ctx:o}),To.$set(xr);const us={};m&2&&(us.$$scope={dirty:m,ctx:o}),yo.$set(us);const Jr={};m&2&&(Jr.$$scope={dirty:m,ctx:o}),ko.$set(Jr);const Er={};m&2&&(Er.$$scope={dirty:m,ctx:o}),bo.$set(Er)},i(o){ai||(b(T.$$.fragment,o),b(Z.$$.fragment,o),b(z.$$.fragment,o),b(Eo.$$.fragment,o),b(Mo.$$.fragment,o),b(qo.$$.fragment,o),b(Co.$$.fragment,o),b(zo.$$.fragment,o),b(Io.$$.fragment,o),b(Lo.$$.fragment,o),b(No.$$.fragment,o),b(Oo.$$.fragment,o),b(eo.$$.fragment,o),b(Wo.$$.fragment,o),b(Uo.$$.fragment,o),b(Qo.$$.fragment,o),b(Ro.$$.fragment,o),b(oo.$$.fragment,o),b(Vo.$$.fragment,o),b(Ko.$$.fragment,o),b(Xo.$$.fragment,o),b(en.$$.fragment,o),b(so.$$.fragment,o),b(tn.$$.fragment,o),b(on.$$.fragment,o),b(nn.$$.fragment,o),b(sn.$$.fragment,o),b(an.$$.fragment,o),b(rn.$$.fragment,o),b(cn.$$.fragment,o),b(ro.$$.fragment,o),b(pn.$$.fragment,o),b(hn.$$.fragment,o),b(un.$$.fragment,o),b(mn.$$.fragment,o),b(lo.$$.fragment,o),b(Tn.$$.fragment,o),b(co.$$.fragment,o),b(yn.$$.fragment,o),b(vn.$$.fragment,o),b(kn.$$.fragment,o),b(ho.$$.fragment,o),b($n.$$.fragment,o),b(uo.$$.fragment,o),b(Fn.$$.fragment,o),b(jn.$$.fragment,o),b(Gn.$$.fragment,o),b(fo.$$.fragment,o),b(Mn.$$.fragment,o),b(go.$$.fragment,o),b(qn.$$.fragment,o),b(Cn.$$.fragment,o),b(zn.$$.fragment,o),b(An.$$.fragment,o),b(To.$$.fragment,o),b(Sn.$$.fragment,o),b(yo.$$.fragment,o),b(Dn.$$.fragment,o),b(On.$$.fragment,o),b(Wn.$$.fragment,o),b(Un.$$.fragment,o),b(Yn.$$.fragment,o),b(ko.$$.fragment,o),b(Zn.$$.fragment,o),b(es.$$.fragment,o),b(ts.$$.fragment,o),b(ds.$$.fragment,o),b(bo.$$.fragment,o),b(cs.$$.fragment,o),ai=!0)},o(o){P(T.$$.fragment,o),P(Z.$$.fragment,o),P(z.$$.fragment,o),P(Eo.$$.fragment,o),P(Mo.$$.fragment,o),P(qo.$$.fragment,o),P(Co.$$.fragment,o),P(zo.$$.fragment,o),P(Io.$$.fragment,o),P(Lo.$$.fragment,o),P(No.$$.fragment,o),P(Oo.$$.fragment,o),P(eo.$$.fragment,o),P(Wo.$$.fragment,o),P(Uo.$$.fragment,o),P(Qo.$$.fragment,o),P(Ro.$$.fragment,o),P(oo.$$.fragment,o),P(Vo.$$.fragment,o),P(Ko.$$.fragment,o),P(Xo.$$.fragment,o),P(en.$$.fragment,o),P(so.$$.fragment,o),P(tn.$$.fragment,o),P(on.$$.fragment,o),P(nn.$$.fragment,o),P(sn.$$.fragment,o),P(an.$$.fragment,o),P(rn.$$.fragment,o),P(cn.$$.fragment,o),P(ro.$$.fragment,o),P(pn.$$.fragment,o),P(hn.$$.fragment,o),P(un.$$.fragment,o),P(mn.$$.fragment,o),P(lo.$$.fragment,o),P(Tn.$$.fragment,o),P(co.$$.fragment,o),P(yn.$$.fragment,o),P(vn.$$.fragment,o),P(kn.$$.fragment,o),P(ho.$$.fragment,o),P($n.$$.fragment,o),P(uo.$$.fragment,o),P(Fn.$$.fragment,o),P(jn.$$.fragment,o),P(Gn.$$.fragment,o),P(fo.$$.fragment,o),P(Mn.$$.fragment,o),P(go.$$.fragment,o),P(qn.$$.fragment,o),P(Cn.$$.fragment,o),P(zn.$$.fragment,o),P(An.$$.fragment,o),P(To.$$.fragment,o),P(Sn.$$.fragment,o),P(yo.$$.fragment,o),P(Dn.$$.fragment,o),P(On.$$.fragment,o),P(Wn.$$.fragment,o),P(Un.$$.fragment,o),P(Yn.$$.fragment,o),P(ko.$$.fragment,o),P(Zn.$$.fragment,o),P(es.$$.fragment,o),P(ts.$$.fragment,o),P(ds.$$.fragment,o),P(bo.$$.fragment,o),P(cs.$$.fragment,o),ai=!1},d(o){t(p),o&&t(F),o&&t(f),$(T),o&&t(K),o&&t(x),$(Z),o&&t(ie),o&&t(L),o&&t(le),o&&t(Y),o&&t(de),o&&t(N),o&&t(ce),o&&t(S),o&&t(Ee),$(z,o),o&&t(Q),o&&t(pe),o&&t(Mr),o&&t($t),$(Eo),o&&t(qr),o&&t(Xt),o&&t(Cr),$(Mo,o),o&&t(zr),o&&t(fs),o&&t(Ar),$(qo,o),o&&t(Ir),o&&t(Ft),$(Co),o&&t(Lr),o&&t(Ye),$(zo),$(Io),o&&t(Nr),o&&t(jt),$(Lo),o&&t(Sr),o&&t(ht),$(No),$(Oo),$(eo),$(Wo),o&&t(Dr),o&&t(xt),$(Uo),o&&t(Or),o&&t(et),$(Qo),$(Ro),$(oo),$(Vo),o&&t(Wr),o&&t(Et),$(Ko),o&&t(Ur),o&&t(je),$(Xo),$(en),$(so),$(tn),$(on),$(nn),$(sn),o&&t(Qr),o&&t(qt),$(an),o&&t(Br),o&&t(ot),$(rn),$(cn),$(ro),$(pn),$(hn),o&&t(Hr),o&&t(At),$(un),o&&t(Rr),o&&t(Ge),$(mn),$(lo),$(Tn),$(co),$(yn),o&&t(Vr),o&&t(Lt),$(vn),o&&t(Kr),o&&t(xe),$(kn),$(ho),$($n),$(uo),$(Fn),o&&t(Xr),o&&t(St),$(jn),o&&t(Yr),o&&t(ae),$(Gn),$(fo),$(Mn),$(go),$(qn),$(Cn),o&&t(Zr),o&&t(Ot),$(zn),o&&t(ei),o&&t(Je),$(An),$(To),$(Sn),$(yo),$(Dn),$(On),o&&t(ti),o&&t(Qt),$(Wn),o&&t(oi),o&&t(be),$(Un),$(Yn),$(ko),$(Zn),o&&t(ni),o&&t(Ht),$(es),o&&t(si),o&&t(Pe),$(ts),$(ds),$(bo),$(cs)}}}const vg={local:"gptj",sections:[{local:"overview",sections:[{local:"generation",title:"Generation"}],title:"Overview"},{local:"transformers.GPTJConfig",title:"GPTJConfig"},{local:"transformers.GPTJModel",title:"GPTJModel"},{local:"transformers.GPTJForCausalLM",title:"GPTJForCausalLM"},{local:"transformers.GPTJForSequenceClassification",title:"GPTJForSequenceClassification"},{local:"transformers.GPTJForQuestionAnswering",title:"GPTJForQuestionAnswering"},{local:"transformers.TFGPTJModel",title:"TFGPTJModel"},{local:"transformers.TFGPTJForCausalLM",title:"TFGPTJForCausalLM"},{local:"transformers.TFGPTJForSequenceClassification",title:"TFGPTJForSequenceClassification"},{local:"transformers.TFGPTJForQuestionAnswering",title:"TFGPTJForQuestionAnswering"},{local:"transformers.FlaxGPTJModel",title:"FlaxGPTJModel"},{local:"transformers.FlaxGPTJForCausalLM",title:"FlaxGPTJForCausalLM"}],title:"GPT-J"};function kg(I){return sg(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class jg extends eg{constructor(p){super();tg(this,p,kg,yg,og,{})}}export{jg as default,vg as metadata};
