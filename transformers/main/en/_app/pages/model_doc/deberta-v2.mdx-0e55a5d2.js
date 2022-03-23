import{S as F_,i as V_,s as q_,e as a,k as l,w as k,t as n,M as z_,c as r,d as t,m as d,a as i,x as T,h as s,b as c,F as e,g as m,y as w,q as y,o as D,B as $,v as M_}from"../../chunks/vendor-6b77c823.js";import{T as Ae}from"../../chunks/Tip-39098574.js";import{D as K}from"../../chunks/Docstring-abef54e3.js";import{C as Ce}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Le}from"../../chunks/IconCopyLink-7a11ce68.js";function x_(S){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function j_(S){let h,F,u,_,v;return{c(){h=a("p"),F=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=a("code"),_=n("Module"),v=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function C_(S){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function R_(S){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function P_(S){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function B_(S){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function A_(S){let h,F,u,_,v,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);v=r(G,"LI",{});var De=i(v);b=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),g=d(G),V=r(G,"LI",{});var ye=i(V);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var Te=i(I);pe=s(Te,"model(inputs)"),Te.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),R=r(p,"P",{});var $e=i(R);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Fe=i(H);le=s(Fe,"model(inputs_ids)"),Fe.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ke=i(B);me=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var we=i(O);X=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),Q.forEach(t),ue=d(P),C=r(P,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Ve=i(U);oe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,v),e(v,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,R,E),e(R,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function L_(S){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function I_(S){let h,F,u,_,v,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);v=r(G,"LI",{});var De=i(v);b=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),g=d(G),V=r(G,"LI",{});var ye=i(V);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var Te=i(I);pe=s(Te,"model(inputs)"),Te.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),R=r(p,"P",{});var $e=i(R);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Fe=i(H);le=s(Fe,"model(inputs_ids)"),Fe.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ke=i(B);me=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var we=i(O);X=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),Q.forEach(t),ue=d(P),C=r(P,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Ve=i(U);oe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,v),e(v,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,R,E),e(R,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function S_(S){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function O_(S){let h,F,u,_,v,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);v=r(G,"LI",{});var De=i(v);b=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),g=d(G),V=r(G,"LI",{});var ye=i(V);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var Te=i(I);pe=s(Te,"model(inputs)"),Te.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),R=r(p,"P",{});var $e=i(R);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Fe=i(H);le=s(Fe,"model(inputs_ids)"),Fe.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ke=i(B);me=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var we=i(O);X=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),Q.forEach(t),ue=d(P),C=r(P,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Ve=i(U);oe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,v),e(v,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,R,E),e(R,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function N_(S){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function W_(S){let h,F,u,_,v,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);v=r(G,"LI",{});var De=i(v);b=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),g=d(G),V=r(G,"LI",{});var ye=i(V);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var Te=i(I);pe=s(Te,"model(inputs)"),Te.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),R=r(p,"P",{});var $e=i(R);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Fe=i(H);le=s(Fe,"model(inputs_ids)"),Fe.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ke=i(B);me=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var we=i(O);X=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),Q.forEach(t),ue=d(P),C=r(P,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Ve=i(U);oe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,v),e(v,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,R,E),e(R,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function H_(S){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function U_(S){let h,F,u,_,v,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),v=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),R=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);v=r(G,"LI",{});var De=i(v);b=s(De,"having all inputs as keyword arguments (like PyTorch models), or"),De.forEach(t),g=d(G),V=r(G,"LI",{});var ye=i(V);de=s(ye,"having all inputs as a list, tuple or dict in the first positional arguments."),ye.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var Te=i(I);pe=s(Te,"model(inputs)"),Te.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),R=r(p,"P",{});var $e=i(R);te=s($e,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),$e.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Ee=i(W);ie=s(Ee,"input_ids"),Ee.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Fe=i(H);le=s(Fe,"model(inputs_ids)"),Fe.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ke=i(B);me=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var we=i(O);X=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),Q.forEach(t),ue=d(P),C=r(P,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var Ve=i(U);oe=s(Ve,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ve.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,v),e(v,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,R,E),e(R,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function Q_(S){let h,F,u,_,v;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),v=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,v)},d(b){b&&t(h)}}}function G_(S){let h,F,u,_,v,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,oe,p,E,G,De,ye,j,_e,Te,$e,P,A,Ee,Fe,Q,ke,we,be,Ve,zl,Ks,Ca,Ml,xl,jl,Js,Ra,Cl,Rl,Pl,Xs,Pa,Bl,Al,bi,et,Ll,Ho,Il,Sl,Uo,Ol,Nl,Qo,Wl,Hl,vi,Vt,ro,Ba,Go,Ul,Aa,Ql,ki,pt,Ko,Gl,qt,Kl,Ys,Jl,Xl,Jo,Yl,Zl,ed,zt,td,Zs,od,nd,ea,sd,ad,Ti,Mt,io,La,Xo,rd,Ia,id,wi,ze,Yo,ld,Zo,dd,en,cd,pd,hd,ft,tn,md,Sa,fd,ud,on,Oa,gd,_d,Na,bd,vd,lo,nn,kd,xt,Td,Wa,wd,yd,Ha,Dd,$d,Ed,tt,sn,Fd,Ua,Vd,qd,an,zd,jt,Md,Qa,xd,jd,Ga,Cd,Rd,Pd,ta,rn,yi,Ct,co,Ka,ln,Bd,Ja,Ad,Di,Xe,dn,Ld,cn,Id,pn,Sd,Od,Nd,hn,Wd,mn,Hd,Ud,Qd,He,fn,Gd,Rt,Kd,oa,Jd,Xd,Xa,Yd,Zd,ec,po,tc,Ya,oc,nc,un,$i,Pt,ho,Za,gn,sc,er,ac,Ei,ht,_n,rc,tr,ic,lc,ot,bn,dc,or,cc,pc,nr,hc,mc,mo,Fi,Bt,fo,sr,vn,fc,ar,uc,Vi,Ye,kn,gc,At,_c,rr,bc,vc,Tn,kc,Tc,wc,wn,yc,yn,Dc,$c,Ec,Re,Dn,Fc,Lt,Vc,na,qc,zc,ir,Mc,xc,jc,uo,Cc,lr,Rc,Pc,$n,Bc,En,qi,It,go,dr,Fn,Ac,cr,Lc,zi,Ie,Vn,Ic,pr,Sc,Oc,qn,Nc,zn,Wc,Hc,Uc,Mn,Qc,xn,Gc,Kc,Jc,ve,jn,Xc,St,Yc,sa,Zc,ep,hr,tp,op,np,_o,sp,mr,ap,rp,Cn,ip,Rn,lp,fr,dp,cp,Pn,pp,Bn,Mi,Ot,bo,ur,An,hp,gr,mp,xi,Se,Ln,fp,_r,up,gp,In,_p,Sn,bp,vp,kp,On,Tp,Nn,wp,yp,Dp,Pe,Wn,$p,Nt,Ep,aa,Fp,Vp,br,qp,zp,Mp,vo,xp,vr,jp,Cp,Hn,Rp,Un,ji,Wt,ko,kr,Qn,Pp,Tr,Bp,Ci,Oe,Gn,Ap,Ht,Lp,wr,Ip,Sp,yr,Op,Np,Wp,Kn,Hp,Jn,Up,Qp,Gp,Xn,Kp,Yn,Jp,Xp,Yp,Be,Zn,Zp,Ut,eh,ra,th,oh,Dr,nh,sh,ah,To,rh,$r,ih,lh,es,dh,ts,Ri,Qt,wo,Er,os,ch,Fr,ph,Pi,Ne,ns,hh,ss,mh,as,fh,uh,gh,rs,_h,is,bh,vh,kh,yo,Th,Ue,ls,wh,Gt,yh,ia,Dh,$h,Vr,Eh,Fh,Vh,Do,qh,qr,zh,Mh,ds,Bi,Kt,$o,zr,cs,xh,Mr,jh,Ai,mt,ps,Ch,xr,Rh,Ph,nt,hs,Bh,jr,Ah,Lh,ms,Ih,Cr,Sh,Oh,Nh,Ze,Wh,Rr,Hh,Uh,Pr,Qh,Gh,Br,Kh,Jh,Ar,Xh,Yh,Li,Jt,Eo,Lr,fs,Zh,Ir,em,Ii,We,us,tm,Xt,om,Sr,nm,sm,gs,am,rm,im,_s,lm,bs,dm,cm,pm,Fo,hm,Qe,vs,mm,Yt,fm,la,um,gm,Or,_m,bm,vm,Vo,km,Nr,Tm,wm,ks,Si,Zt,qo,Wr,Ts,ym,Hr,Dm,Oi,Me,ws,$m,Ur,Em,Fm,ys,Vm,Ds,qm,zm,Mm,$s,xm,Es,jm,Cm,Rm,zo,Pm,Ge,Fs,Bm,eo,Am,da,Lm,Im,Qr,Sm,Om,Nm,Mo,Wm,Gr,Hm,Um,Vs,Ni,to,xo,Kr,qs,Qm,Jr,Gm,Wi,xe,zs,Km,Xr,Jm,Xm,Ms,Ym,xs,Zm,ef,tf,js,of,Cs,nf,sf,af,jo,rf,Ke,Rs,lf,oo,df,ca,cf,pf,Yr,hf,mf,ff,Co,uf,Zr,gf,_f,Ps,Hi,no,Ro,ei,Bs,bf,ti,vf,Ui,je,As,kf,so,Tf,oi,wf,yf,ni,Df,$f,Ef,Ls,Ff,Is,Vf,qf,zf,Ss,Mf,Os,xf,jf,Cf,Po,Rf,Je,Ns,Pf,ao,Bf,pa,Af,Lf,si,If,Sf,Of,Bo,Nf,ai,Wf,Hf,Ws,Qi;return b=new Le({}),ee=new Le({}),Go=new Le({}),Ko=new K({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L31",parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
Vocabulary size of the DeBERTa-v2 model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model">DebertaV2Model</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaV2Config.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 1536) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DebertaV2Config.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DebertaV2Config.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 24) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DebertaV2Config.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 6144) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DebertaV2Config.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;tanh&quot;</code>, <code>&quot;gelu_fast&quot;</code>, <code>&quot;mish&quot;</code>, <code>&quot;linear&quot;</code>, <code>&quot;sigmoid&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.DebertaV2Config.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DebertaV2Config.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DebertaV2Config.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DebertaV2Config.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/main/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaV2Config.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-7) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaV2Config.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaV2Config.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaV2Config.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaV2Config.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaV2Config.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaV2Config.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Xo=new Le({}),Yo=new K({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L53",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.DebertaV2Tokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaV2Tokenizer.bos_token",description:`<strong>bos_token</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201D;[CLS]&#x201D;) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.
When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.`,name:"bos_token"},{anchor:"transformers.DebertaV2Tokenizer.eos_token",description:`<strong>eos_token</strong> (<code>string</code>, <em>optional</em>, defaults to &#x201D;[SEP]&#x201D;) &#x2014;
The end of sequence token. When building a sequence using special tokens, this is not the token that is
used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.DebertaV2Tokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaV2Tokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaV2Tokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaV2Tokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaV2Tokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.DebertaV2Tokenizer.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
Will be passed to the <code>SentencePieceProcessor.__init__()</code> method. The <a href="https://github.com/google/sentencepiece/tree/master/python" rel="nofollow">Python wrapper for
SentencePiece</a> can be used, among other things,
to set:</p>
<ul>
<li>
<p><code>enable_sampling</code>: Enable subword regularization.</p>
</li>
<li>
<p><code>nbest_size</code>: Sampling parameters for unigram. Invalid for BPE-Dropout.</p>
<ul>
<li><code>nbest_size = {0,1}</code>: No sampling is performed.</li>
<li><code>nbest_size &gt; 1</code>: samples from the nbest_size results.</li>
<li><code>nbest_size &lt; 0</code>: assuming that nbest_size is infinite and samples from the all hypothesis (lattice)
using forward-filtering-and-backward-sampling algorithm.</li>
</ul>
</li>
<li>
<p><code>alpha</code>: Smoothing parameter for unigram sampling, and dropout probability of merge operations for
BPE-dropout.</p>
</li>
</ul>`,name:"sp_model_kwargs"}]}}),tn=new K({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L178",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),nn=new K({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L202",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new K({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L228",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),an=new Ce({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),rn=new K({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L261"}}),ln=new Le({}),dn=new K({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L977",parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fn=new K({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1001",parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2Model.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2Model.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2Model.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2Model.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2Model.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2Model.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2Model.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),po=new Ae({props:{$$slots:{default:[x_]},$$scope:{ctx:S}}}),un=new Ce({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2Model.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2Model.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),gn=new Le({}),_n=new K({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L881"}}),bn=new K({props:{name:"_forward_unimplemented",anchor:"None",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/main/src/torch/nn/modules/module.py#L190"}}),mo=new Ae({props:{$$slots:{default:[j_]},$$scope:{ctx:S}}}),vn=new Le({}),kn=new K({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1090",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Dn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1109",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new Ae({props:{$$slots:{default:[C_]},$$scope:{ctx:S}}}),$n=new Ce({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForMaskedLM.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),En=new Ce({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),Fn=new Le({}),Vn=new K({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1226",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1251",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new Ae({props:{$$slots:{default:[R_]},$$scope:{ctx:S}}}),Cn=new Ce({props:{code:`import torch
from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Rn=new Ce({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Pn=new Ce({props:{code:`import torch
from transformers import DebertaV2Tokenizer, DebertaV2ForSequenceClassification

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Bn=new Ce({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaV2ForSequenceClassification.from_pretrained("microsoft/deberta-v2-xlarge", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),An=new Le({}),Ln=new K({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1346",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1360",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new Ae({props:{$$slots:{default:[P_]},$$scope:{ctx:S}}}),Hn=new Ce({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForTokenClassification.from_pretrained("microsoft/deberta-v2-xlarge")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="pt"
)

with torch.no_grad():
    logits = model(**inputs).logits

predicted_token_class_ids = logits.argmax(-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t.item()] for t in predicted_token_class_ids[0]]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = logits.argmax(-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t.item()] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),Un=new Ce({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Qn=new Le({}),Gn=new K({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1423",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1436",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),To=new Ae({props:{$$slots:{default:[B_]},$$scope:{ctx:S}}}),es=new Ce({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
import torch

tokenizer = DebertaV2Tokenizer.from_pretrained("microsoft/deberta-v2-xlarge")
model = DebertaV2ForQuestionAnswering.from_pretrained("microsoft/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),ts=new Ce({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),os=new Le({}),ns=new K({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1176",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yo=new Ae({props:{$$slots:{default:[A_]},$$scope:{ctx:S}}}),ls=new K({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1182",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2Model.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2Model.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2Model.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2Model.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2Model.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2Model.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2Model.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Do=new Ae({props:{$$slots:{default:[L_]},$$scope:{ctx:S}}}),ds=new Ce({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2Model.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2Model
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2Model.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),cs=new Le({}),ps=new K({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1080"}}),hs=new K({props:{name:"call",anchor:"None",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),fs=new Le({}),us=new K({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1226",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fo=new Ae({props:{$$slots:{default:[I_]},$$scope:{ctx:S}}}),vs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1242",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Vo=new Ae({props:{$$slots:{default:[S_]},$$scope:{ctx:S}}}),ks=new Ce({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForMaskedLM.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ts=new Le({}),ws=new K({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1311",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zo=new Ae({props:{$$slots:{default:[O_]},$$scope:{ctx:S}}}),Fs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1329",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Mo=new Ae({props:{$$slots:{default:[N_]},$$scope:{ctx:S}}}),Vs=new Ce({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForSequenceClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),qs=new Le({}),zs=new K({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1401",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jo=new Ae({props:{$$slots:{default:[W_]},$$scope:{ctx:S}}}),Rs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1413",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of unmasked labels, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Co=new Ae({props:{$$slots:{default:[H_]},$$scope:{ctx:S}}}),Ps=new Ce({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForTokenClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Bs=new Le({}),As=new K({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1481",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Po=new Ae({props:{$$slots:{default:[U_]},$$scope:{ctx:S}}}),Ns=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1492",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config"
>DebertaV2Config</a>) and inputs.</p>
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
`}}),Bo=new Ae({props:{$$slots:{default:[Q_]},$$scope:{ctx:S}}}),Ws=new Ce({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForQuestionAnswering.from_pretrained("kamalkraj/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),{c(){h=a("meta"),F=l(),u=a("h1"),_=a("a"),v=a("span"),k(b.$$.fragment),g=l(),V=a("span"),de=n("DeBERTa-v2"),J=l(),q=a("h2"),Y=a("a"),L=a("span"),k(ee.$$.fragment),ce=l(),I=a("span"),pe=n("Overview"),re=l(),N=a("p"),R=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),z=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),x=l(),ne=a("p"),W=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ie=l(),se=a("p"),H=n("The abstract from the paper is the following:"),le=l(),ae=a("p"),M=a("em"),he=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),B=a("a"),me=n("https://github.com/microsoft/DeBERTa"),fe=n("."),O=l(),X=a("p"),ue=n("The following information is visible directly on the "),C=a("a"),ge=n(`original implementation
repository`),U=n(`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=a("a"),p=n("blog"),E=l(),G=a("p"),De=n("New in v2:"),ye=l(),j=a("ul"),_e=a("li"),Te=a("strong"),$e=n("Vocabulary"),P=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=a("a"),Ee=n("sentencepiece-based"),Fe=n(" tokenizer."),Q=l(),ke=a("li"),we=a("strong"),be=n("nGiE(nGram Induced Input Encoding)"),Ve=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),zl=l(),Ks=a("li"),Ca=a("strong"),Ml=n("Sharing position projection matrix with content projection matrix in attention layer"),xl=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),jl=l(),Js=a("li"),Ra=a("strong"),Cl=n("Apply bucket to encode relative positions"),Rl=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Pl=l(),Xs=a("li"),Pa=a("strong"),Bl=n("900M model & 1.5B model"),Al=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),bi=l(),et=a("p"),Ll=n("This model was contributed by "),Ho=a("a"),Il=n("DeBERTa"),Sl=n(`. This model TF 2.0 implementation was
contributed by `),Uo=a("a"),Ol=n("kamalkraj"),Nl=n(". The original code can be found "),Qo=a("a"),Wl=n("here"),Hl=n("."),vi=l(),Vt=a("h2"),ro=a("a"),Ba=a("span"),k(Go.$$.fragment),Ul=l(),Aa=a("span"),Ql=n("DebertaV2Config"),ki=l(),pt=a("div"),k(Ko.$$.fragment),Gl=l(),qt=a("p"),Kl=n("This is the configuration class to store the configuration of a "),Ys=a("a"),Jl=n("DebertaV2Model"),Xl=n(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Jo=a("a"),Yl=n("microsoft/deberta-v2-xlarge"),Zl=n(" architecture."),ed=l(),zt=a("p"),td=n("Configuration objects inherit from "),Zs=a("a"),od=n("PretrainedConfig"),nd=n(` and can be used to control the model outputs. Read the
documentation from `),ea=a("a"),sd=n("PretrainedConfig"),ad=n(" for more information."),Ti=l(),Mt=a("h2"),io=a("a"),La=a("span"),k(Xo.$$.fragment),rd=l(),Ia=a("span"),id=n("DebertaV2Tokenizer"),wi=l(),ze=a("div"),k(Yo.$$.fragment),ld=l(),Zo=a("p"),dd=n("Constructs a DeBERTa-v2 tokenizer. Based on "),en=a("a"),cd=n("SentencePiece"),pd=n("."),hd=l(),ft=a("div"),k(tn.$$.fragment),md=l(),Sa=a("p"),fd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),ud=l(),on=a("ul"),Oa=a("li"),gd=n("single sequence: [CLS] X [SEP]"),_d=l(),Na=a("li"),bd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),vd=l(),lo=a("div"),k(nn.$$.fragment),kd=l(),xt=a("p"),Td=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Wa=a("code"),wd=n("prepare_for_model"),yd=n(" or "),Ha=a("code"),Dd=n("encode_plus"),$d=n(" methods."),Ed=l(),tt=a("div"),k(sn.$$.fragment),Fd=l(),Ua=a("p"),Vd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),qd=l(),k(an.$$.fragment),zd=l(),jt=a("p"),Md=n("If "),Qa=a("code"),xd=n("token_ids_1"),jd=n(" is "),Ga=a("code"),Cd=n("None"),Rd=n(", this method only returns the first portion of the mask (0s)."),Pd=l(),ta=a("div"),k(rn.$$.fragment),yi=l(),Ct=a("h2"),co=a("a"),Ka=a("span"),k(ln.$$.fragment),Bd=l(),Ja=a("span"),Ad=n("DebertaV2Model"),Di=l(),Xe=a("div"),k(dn.$$.fragment),Ld=l(),cn=a("p"),Id=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),pn=a("a"),Sd=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Od=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Nd=l(),hn=a("p"),Wd=n("This model is also a PyTorch "),mn=a("a"),Hd=n("torch.nn.Module"),Ud=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Qd=l(),He=a("div"),k(fn.$$.fragment),Gd=l(),Rt=a("p"),Kd=n("The "),oa=a("a"),Jd=n("DebertaV2Model"),Xd=n(" forward method, overrides the "),Xa=a("code"),Yd=n("__call__"),Zd=n(" special method."),ec=l(),k(po.$$.fragment),tc=l(),Ya=a("p"),oc=n("Example:"),nc=l(),k(un.$$.fragment),$i=l(),Pt=a("h2"),ho=a("a"),Za=a("span"),k(gn.$$.fragment),sc=l(),er=a("span"),ac=n("DebertaV2PreTrainedModel"),Ei=l(),ht=a("div"),k(_n.$$.fragment),rc=l(),tr=a("p"),ic=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),lc=l(),ot=a("div"),k(bn.$$.fragment),dc=l(),or=a("p"),cc=n("Defines the computation performed at every call."),pc=l(),nr=a("p"),hc=n("Should be overridden by all subclasses."),mc=l(),k(mo.$$.fragment),Fi=l(),Bt=a("h2"),fo=a("a"),sr=a("span"),k(vn.$$.fragment),fc=l(),ar=a("span"),uc=n("DebertaV2ForMaskedLM"),Vi=l(),Ye=a("div"),k(kn.$$.fragment),gc=l(),At=a("p"),_c=n("DeBERTa Model with a "),rr=a("code"),bc=n("language modeling"),vc=n(` head on top.
The DeBERTa model was proposed in `),Tn=a("a"),kc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wc=l(),wn=a("p"),yc=n("This model is also a PyTorch "),yn=a("a"),Dc=n("torch.nn.Module"),$c=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ec=l(),Re=a("div"),k(Dn.$$.fragment),Fc=l(),Lt=a("p"),Vc=n("The "),na=a("a"),qc=n("DebertaV2ForMaskedLM"),zc=n(" forward method, overrides the "),ir=a("code"),Mc=n("__call__"),xc=n(" special method."),jc=l(),k(uo.$$.fragment),Cc=l(),lr=a("p"),Rc=n("Example:"),Pc=l(),k($n.$$.fragment),Bc=l(),k(En.$$.fragment),qi=l(),It=a("h2"),go=a("a"),dr=a("span"),k(Fn.$$.fragment),Ac=l(),cr=a("span"),Lc=n("DebertaV2ForSequenceClassification"),zi=l(),Ie=a("div"),k(Vn.$$.fragment),Ic=l(),pr=a("p"),Sc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Oc=l(),qn=a("p"),Nc=n("The DeBERTa model was proposed in "),zn=a("a"),Wc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Hc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Uc=l(),Mn=a("p"),Qc=n("This model is also a PyTorch "),xn=a("a"),Gc=n("torch.nn.Module"),Kc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Jc=l(),ve=a("div"),k(jn.$$.fragment),Xc=l(),St=a("p"),Yc=n("The "),sa=a("a"),Zc=n("DebertaV2ForSequenceClassification"),ep=n(" forward method, overrides the "),hr=a("code"),tp=n("__call__"),op=n(" special method."),np=l(),k(_o.$$.fragment),sp=l(),mr=a("p"),ap=n("Example of single-label classification:"),rp=l(),k(Cn.$$.fragment),ip=l(),k(Rn.$$.fragment),lp=l(),fr=a("p"),dp=n("Example of multi-label classification:"),cp=l(),k(Pn.$$.fragment),pp=l(),k(Bn.$$.fragment),Mi=l(),Ot=a("h2"),bo=a("a"),ur=a("span"),k(An.$$.fragment),hp=l(),gr=a("span"),mp=n("DebertaV2ForTokenClassification"),xi=l(),Se=a("div"),k(Ln.$$.fragment),fp=l(),_r=a("p"),up=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),gp=l(),In=a("p"),_p=n("The DeBERTa model was proposed in "),Sn=a("a"),bp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),vp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kp=l(),On=a("p"),Tp=n("This model is also a PyTorch "),Nn=a("a"),wp=n("torch.nn.Module"),yp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Dp=l(),Pe=a("div"),k(Wn.$$.fragment),$p=l(),Nt=a("p"),Ep=n("The "),aa=a("a"),Fp=n("DebertaV2ForTokenClassification"),Vp=n(" forward method, overrides the "),br=a("code"),qp=n("__call__"),zp=n(" special method."),Mp=l(),k(vo.$$.fragment),xp=l(),vr=a("p"),jp=n("Example:"),Cp=l(),k(Hn.$$.fragment),Rp=l(),k(Un.$$.fragment),ji=l(),Wt=a("h2"),ko=a("a"),kr=a("span"),k(Qn.$$.fragment),Pp=l(),Tr=a("span"),Bp=n("DebertaV2ForQuestionAnswering"),Ci=l(),Oe=a("div"),k(Gn.$$.fragment),Ap=l(),Ht=a("p"),Lp=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),wr=a("code"),Ip=n("span start logits"),Sp=n(" and "),yr=a("code"),Op=n("span end logits"),Np=n(")."),Wp=l(),Kn=a("p"),Hp=n("The DeBERTa model was proposed in "),Jn=a("a"),Up=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Qp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Gp=l(),Xn=a("p"),Kp=n("This model is also a PyTorch "),Yn=a("a"),Jp=n("torch.nn.Module"),Xp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Yp=l(),Be=a("div"),k(Zn.$$.fragment),Zp=l(),Ut=a("p"),eh=n("The "),ra=a("a"),th=n("DebertaV2ForQuestionAnswering"),oh=n(" forward method, overrides the "),Dr=a("code"),nh=n("__call__"),sh=n(" special method."),ah=l(),k(To.$$.fragment),rh=l(),$r=a("p"),ih=n("Example:"),lh=l(),k(es.$$.fragment),dh=l(),k(ts.$$.fragment),Ri=l(),Qt=a("h2"),wo=a("a"),Er=a("span"),k(os.$$.fragment),ch=l(),Fr=a("span"),ph=n("TFDebertaV2Model"),Pi=l(),Ne=a("div"),k(ns.$$.fragment),hh=l(),ss=a("p"),mh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),as=a("a"),fh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),uh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gh=l(),rs=a("p"),_h=n("This model is also a "),is=a("a"),bh=n("tf.keras.Model"),vh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kh=l(),k(yo.$$.fragment),Th=l(),Ue=a("div"),k(ls.$$.fragment),wh=l(),Gt=a("p"),yh=n("The "),ia=a("a"),Dh=n("TFDebertaV2Model"),$h=n(" forward method, overrides the "),Vr=a("code"),Eh=n("__call__"),Fh=n(" special method."),Vh=l(),k(Do.$$.fragment),qh=l(),qr=a("p"),zh=n("Example:"),Mh=l(),k(ds.$$.fragment),Bi=l(),Kt=a("h2"),$o=a("a"),zr=a("span"),k(cs.$$.fragment),xh=l(),Mr=a("span"),jh=n("TFDebertaV2PreTrainedModel"),Ai=l(),mt=a("div"),k(ps.$$.fragment),Ch=l(),xr=a("p"),Rh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Ph=l(),nt=a("div"),k(hs.$$.fragment),Bh=l(),jr=a("p"),Ah=n("Calls the model on new inputs and returns the outputs as tensors."),Lh=l(),ms=a("p"),Ih=n("In this case "),Cr=a("code"),Sh=n("call()"),Oh=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Nh=l(),Ze=a("p"),Wh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Rr=a("code"),Hh=n("tf.keras.Model"),Uh=n(`.
To call a model on an input, always use the `),Pr=a("code"),Qh=n("__call__()"),Gh=n(` method,
i.e. `),Br=a("code"),Kh=n("model(inputs)"),Jh=n(", which relies on the underlying "),Ar=a("code"),Xh=n("call()"),Yh=n(" method."),Li=l(),Jt=a("h2"),Eo=a("a"),Lr=a("span"),k(fs.$$.fragment),Zh=l(),Ir=a("span"),em=n("TFDebertaV2ForMaskedLM"),Ii=l(),We=a("div"),k(us.$$.fragment),tm=l(),Xt=a("p"),om=n("DeBERTa Model with a "),Sr=a("code"),nm=n("language modeling"),sm=n(` head on top.
The DeBERTa model was proposed in `),gs=a("a"),am=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),rm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),im=l(),_s=a("p"),lm=n("This model is also a "),bs=a("a"),dm=n("tf.keras.Model"),cm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pm=l(),k(Fo.$$.fragment),hm=l(),Qe=a("div"),k(vs.$$.fragment),mm=l(),Yt=a("p"),fm=n("The "),la=a("a"),um=n("TFDebertaV2ForMaskedLM"),gm=n(" forward method, overrides the "),Or=a("code"),_m=n("__call__"),bm=n(" special method."),vm=l(),k(Vo.$$.fragment),km=l(),Nr=a("p"),Tm=n("Example:"),wm=l(),k(ks.$$.fragment),Si=l(),Zt=a("h2"),qo=a("a"),Wr=a("span"),k(Ts.$$.fragment),ym=l(),Hr=a("span"),Dm=n("TFDebertaV2ForSequenceClassification"),Oi=l(),Me=a("div"),k(ws.$$.fragment),$m=l(),Ur=a("p"),Em=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Fm=l(),ys=a("p"),Vm=n("The DeBERTa model was proposed in "),Ds=a("a"),qm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),zm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Mm=l(),$s=a("p"),xm=n("This model is also a "),Es=a("a"),jm=n("tf.keras.Model"),Cm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rm=l(),k(zo.$$.fragment),Pm=l(),Ge=a("div"),k(Fs.$$.fragment),Bm=l(),eo=a("p"),Am=n("The "),da=a("a"),Lm=n("TFDebertaV2ForSequenceClassification"),Im=n(" forward method, overrides the "),Qr=a("code"),Sm=n("__call__"),Om=n(" special method."),Nm=l(),k(Mo.$$.fragment),Wm=l(),Gr=a("p"),Hm=n("Example:"),Um=l(),k(Vs.$$.fragment),Ni=l(),to=a("h2"),xo=a("a"),Kr=a("span"),k(qs.$$.fragment),Qm=l(),Jr=a("span"),Gm=n("TFDebertaV2ForTokenClassification"),Wi=l(),xe=a("div"),k(zs.$$.fragment),Km=l(),Xr=a("p"),Jm=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Xm=l(),Ms=a("p"),Ym=n("The DeBERTa model was proposed in "),xs=a("a"),Zm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ef=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),tf=l(),js=a("p"),of=n("This model is also a "),Cs=a("a"),nf=n("tf.keras.Model"),sf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),af=l(),k(jo.$$.fragment),rf=l(),Ke=a("div"),k(Rs.$$.fragment),lf=l(),oo=a("p"),df=n("The "),ca=a("a"),cf=n("TFDebertaV2ForTokenClassification"),pf=n(" forward method, overrides the "),Yr=a("code"),hf=n("__call__"),mf=n(" special method."),ff=l(),k(Co.$$.fragment),uf=l(),Zr=a("p"),gf=n("Example:"),_f=l(),k(Ps.$$.fragment),Hi=l(),no=a("h2"),Ro=a("a"),ei=a("span"),k(Bs.$$.fragment),bf=l(),ti=a("span"),vf=n("TFDebertaV2ForQuestionAnswering"),Ui=l(),je=a("div"),k(As.$$.fragment),kf=l(),so=a("p"),Tf=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),oi=a("code"),wf=n("span start logits"),yf=n(" and "),ni=a("code"),Df=n("span end logits"),$f=n(")."),Ef=l(),Ls=a("p"),Ff=n("The DeBERTa model was proposed in "),Is=a("a"),Vf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),zf=l(),Ss=a("p"),Mf=n("This model is also a "),Os=a("a"),xf=n("tf.keras.Model"),jf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cf=l(),k(Po.$$.fragment),Rf=l(),Je=a("div"),k(Ns.$$.fragment),Pf=l(),ao=a("p"),Bf=n("The "),pa=a("a"),Af=n("TFDebertaV2ForQuestionAnswering"),Lf=n(" forward method, overrides the "),si=a("code"),If=n("__call__"),Sf=n(" special method."),Of=l(),k(Bo.$$.fragment),Nf=l(),ai=a("p"),Wf=n("Example:"),Hf=l(),k(Ws.$$.fragment),this.h()},l(o){const f=z_('[data-svelte="svelte-1phssyn"]',document.head);h=r(f,"META",{name:!0,content:!0}),f.forEach(t),F=d(o),u=r(o,"H1",{class:!0});var Hs=i(u);_=r(Hs,"A",{id:!0,class:!0,href:!0});var ri=i(_);v=r(ri,"SPAN",{});var ii=i(v);T(b.$$.fragment,ii),ii.forEach(t),ri.forEach(t),g=d(Hs),V=r(Hs,"SPAN",{});var li=i(V);de=s(li,"DeBERTa-v2"),li.forEach(t),Hs.forEach(t),J=d(o),q=r(o,"H2",{class:!0});var Us=i(q);Y=r(Us,"A",{id:!0,class:!0,href:!0});var di=i(Y);L=r(di,"SPAN",{});var ci=i(L);T(ee.$$.fragment,ci),ci.forEach(t),di.forEach(t),ce=d(Us),I=r(Us,"SPAN",{});var pi=i(I);pe=s(pi,"Overview"),pi.forEach(t),Us.forEach(t),re=d(o),N=r(o,"P",{});var Qs=i(N);R=s(Qs,"The DeBERTa model was proposed in "),te=r(Qs,"A",{href:!0,rel:!0});var hi=i(te);Z=s(hi,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),hi.forEach(t),z=s(Qs,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Qs.forEach(t),x=d(o),ne=r(o,"P",{});var mi=i(ne);W=s(mi,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),mi.forEach(t),ie=d(o),se=r(o,"P",{});var fi=i(se);H=s(fi,"The abstract from the paper is the following:"),fi.forEach(t),le=d(o),ae=r(o,"P",{});var ui=i(ae);M=r(ui,"EM",{});var Gs=i(M);he=s(Gs,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),B=r(Gs,"A",{href:!0,rel:!0});var gi=i(B);me=s(gi,"https://github.com/microsoft/DeBERTa"),gi.forEach(t),fe=s(Gs,"."),Gs.forEach(t),ui.forEach(t),O=d(o),X=r(o,"P",{});var Ao=i(X);ue=s(Ao,"The following information is visible directly on the "),C=r(Ao,"A",{href:!0,rel:!0});var Jf=i(C);ge=s(Jf,`original implementation
repository`),Jf.forEach(t),U=s(Ao,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=r(Ao,"A",{href:!0,rel:!0});var Xf=i(oe);p=s(Xf,"blog"),Xf.forEach(t),Ao.forEach(t),E=d(o),G=r(o,"P",{});var Yf=i(G);De=s(Yf,"New in v2:"),Yf.forEach(t),ye=d(o),j=r(o,"UL",{});var ut=i(j);_e=r(ut,"LI",{});var _i=i(_e);Te=r(_i,"STRONG",{});var Zf=i(Te);$e=s(Zf,"Vocabulary"),Zf.forEach(t),P=s(_i,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=r(_i,"A",{href:!0,rel:!0});var eu=i(A);Ee=s(eu,"sentencepiece-based"),eu.forEach(t),Fe=s(_i," tokenizer."),_i.forEach(t),Q=d(ut),ke=r(ut,"LI",{});var Uf=i(ke);we=r(Uf,"STRONG",{});var tu=i(we);be=s(tu,"nGiE(nGram Induced Input Encoding)"),tu.forEach(t),Ve=s(Uf,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Uf.forEach(t),zl=d(ut),Ks=r(ut,"LI",{});var Qf=i(Ks);Ca=r(Qf,"STRONG",{});var ou=i(Ca);Ml=s(ou,"Sharing position projection matrix with content projection matrix in attention layer"),ou.forEach(t),xl=s(Qf,` Based on previous
experiments, this can save parameters without affecting the performance.`),Qf.forEach(t),jl=d(ut),Js=r(ut,"LI",{});var Gf=i(Js);Ra=r(Gf,"STRONG",{});var nu=i(Ra);Cl=s(nu,"Apply bucket to encode relative positions"),nu.forEach(t),Rl=s(Gf,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Gf.forEach(t),Pl=d(ut),Xs=r(ut,"LI",{});var Kf=i(Xs);Pa=r(Kf,"STRONG",{});var su=i(Pa);Bl=s(su,"900M model & 1.5B model"),su.forEach(t),Al=s(Kf,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),Kf.forEach(t),ut.forEach(t),bi=d(o),et=r(o,"P",{});var Lo=i(et);Ll=s(Lo,"This model was contributed by "),Ho=r(Lo,"A",{href:!0,rel:!0});var au=i(Ho);Il=s(au,"DeBERTa"),au.forEach(t),Sl=s(Lo,`. This model TF 2.0 implementation was
contributed by `),Uo=r(Lo,"A",{href:!0,rel:!0});var ru=i(Uo);Ol=s(ru,"kamalkraj"),ru.forEach(t),Nl=s(Lo,". The original code can be found "),Qo=r(Lo,"A",{href:!0,rel:!0});var iu=i(Qo);Wl=s(iu,"here"),iu.forEach(t),Hl=s(Lo,"."),Lo.forEach(t),vi=d(o),Vt=r(o,"H2",{class:!0});var Gi=i(Vt);ro=r(Gi,"A",{id:!0,class:!0,href:!0});var lu=i(ro);Ba=r(lu,"SPAN",{});var du=i(Ba);T(Go.$$.fragment,du),du.forEach(t),lu.forEach(t),Ul=d(Gi),Aa=r(Gi,"SPAN",{});var cu=i(Aa);Ql=s(cu,"DebertaV2Config"),cu.forEach(t),Gi.forEach(t),ki=d(o),pt=r(o,"DIV",{class:!0});var ha=i(pt);T(Ko.$$.fragment,ha),Gl=d(ha),qt=r(ha,"P",{});var ma=i(qt);Kl=s(ma,"This is the configuration class to store the configuration of a "),Ys=r(ma,"A",{href:!0});var pu=i(Ys);Jl=s(pu,"DebertaV2Model"),pu.forEach(t),Xl=s(ma,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Jo=r(ma,"A",{href:!0,rel:!0});var hu=i(Jo);Yl=s(hu,"microsoft/deberta-v2-xlarge"),hu.forEach(t),Zl=s(ma," architecture."),ma.forEach(t),ed=d(ha),zt=r(ha,"P",{});var fa=i(zt);td=s(fa,"Configuration objects inherit from "),Zs=r(fa,"A",{href:!0});var mu=i(Zs);od=s(mu,"PretrainedConfig"),mu.forEach(t),nd=s(fa,` and can be used to control the model outputs. Read the
documentation from `),ea=r(fa,"A",{href:!0});var fu=i(ea);sd=s(fu,"PretrainedConfig"),fu.forEach(t),ad=s(fa," for more information."),fa.forEach(t),ha.forEach(t),Ti=d(o),Mt=r(o,"H2",{class:!0});var Ki=i(Mt);io=r(Ki,"A",{id:!0,class:!0,href:!0});var uu=i(io);La=r(uu,"SPAN",{});var gu=i(La);T(Xo.$$.fragment,gu),gu.forEach(t),uu.forEach(t),rd=d(Ki),Ia=r(Ki,"SPAN",{});var _u=i(Ia);id=s(_u,"DebertaV2Tokenizer"),_u.forEach(t),Ki.forEach(t),wi=d(o),ze=r(o,"DIV",{class:!0});var st=i(ze);T(Yo.$$.fragment,st),ld=d(st),Zo=r(st,"P",{});var Ji=i(Zo);dd=s(Ji,"Constructs a DeBERTa-v2 tokenizer. Based on "),en=r(Ji,"A",{href:!0,rel:!0});var bu=i(en);cd=s(bu,"SentencePiece"),bu.forEach(t),pd=s(Ji,"."),Ji.forEach(t),hd=d(st),ft=r(st,"DIV",{class:!0});var ua=i(ft);T(tn.$$.fragment,ua),md=d(ua),Sa=r(ua,"P",{});var vu=i(Sa);fd=s(vu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),vu.forEach(t),ud=d(ua),on=r(ua,"UL",{});var Xi=i(on);Oa=r(Xi,"LI",{});var ku=i(Oa);gd=s(ku,"single sequence: [CLS] X [SEP]"),ku.forEach(t),_d=d(Xi),Na=r(Xi,"LI",{});var Tu=i(Na);bd=s(Tu,"pair of sequences: [CLS] A [SEP] B [SEP]"),Tu.forEach(t),Xi.forEach(t),ua.forEach(t),vd=d(st),lo=r(st,"DIV",{class:!0});var Yi=i(lo);T(nn.$$.fragment,Yi),kd=d(Yi),xt=r(Yi,"P",{});var ga=i(xt);Td=s(ga,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Wa=r(ga,"CODE",{});var wu=i(Wa);wd=s(wu,"prepare_for_model"),wu.forEach(t),yd=s(ga," or "),Ha=r(ga,"CODE",{});var yu=i(Ha);Dd=s(yu,"encode_plus"),yu.forEach(t),$d=s(ga," methods."),ga.forEach(t),Yi.forEach(t),Ed=d(st),tt=r(st,"DIV",{class:!0});var Io=i(tt);T(sn.$$.fragment,Io),Fd=d(Io),Ua=r(Io,"P",{});var Du=i(Ua);Vd=s(Du,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Du.forEach(t),qd=d(Io),T(an.$$.fragment,Io),zd=d(Io),jt=r(Io,"P",{});var _a=i(jt);Md=s(_a,"If "),Qa=r(_a,"CODE",{});var $u=i(Qa);xd=s($u,"token_ids_1"),$u.forEach(t),jd=s(_a," is "),Ga=r(_a,"CODE",{});var Eu=i(Ga);Cd=s(Eu,"None"),Eu.forEach(t),Rd=s(_a,", this method only returns the first portion of the mask (0s)."),_a.forEach(t),Io.forEach(t),Pd=d(st),ta=r(st,"DIV",{class:!0});var Fu=i(ta);T(rn.$$.fragment,Fu),Fu.forEach(t),st.forEach(t),yi=d(o),Ct=r(o,"H2",{class:!0});var Zi=i(Ct);co=r(Zi,"A",{id:!0,class:!0,href:!0});var Vu=i(co);Ka=r(Vu,"SPAN",{});var qu=i(Ka);T(ln.$$.fragment,qu),qu.forEach(t),Vu.forEach(t),Bd=d(Zi),Ja=r(Zi,"SPAN",{});var zu=i(Ja);Ad=s(zu,"DebertaV2Model"),zu.forEach(t),Zi.forEach(t),Di=d(o),Xe=r(o,"DIV",{class:!0});var So=i(Xe);T(dn.$$.fragment,So),Ld=d(So),cn=r(So,"P",{});var el=i(cn);Id=s(el,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),pn=r(el,"A",{href:!0,rel:!0});var Mu=i(pn);Sd=s(Mu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Mu.forEach(t),Od=s(el,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),el.forEach(t),Nd=d(So),hn=r(So,"P",{});var tl=i(hn);Wd=s(tl,"This model is also a PyTorch "),mn=r(tl,"A",{href:!0,rel:!0});var xu=i(mn);Hd=s(xu,"torch.nn.Module"),xu.forEach(t),Ud=s(tl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),tl.forEach(t),Qd=d(So),He=r(So,"DIV",{class:!0});var gt=i(He);T(fn.$$.fragment,gt),Gd=d(gt),Rt=r(gt,"P",{});var ba=i(Rt);Kd=s(ba,"The "),oa=r(ba,"A",{href:!0});var ju=i(oa);Jd=s(ju,"DebertaV2Model"),ju.forEach(t),Xd=s(ba," forward method, overrides the "),Xa=r(ba,"CODE",{});var Cu=i(Xa);Yd=s(Cu,"__call__"),Cu.forEach(t),Zd=s(ba," special method."),ba.forEach(t),ec=d(gt),T(po.$$.fragment,gt),tc=d(gt),Ya=r(gt,"P",{});var Ru=i(Ya);oc=s(Ru,"Example:"),Ru.forEach(t),nc=d(gt),T(un.$$.fragment,gt),gt.forEach(t),So.forEach(t),$i=d(o),Pt=r(o,"H2",{class:!0});var ol=i(Pt);ho=r(ol,"A",{id:!0,class:!0,href:!0});var Pu=i(ho);Za=r(Pu,"SPAN",{});var Bu=i(Za);T(gn.$$.fragment,Bu),Bu.forEach(t),Pu.forEach(t),sc=d(ol),er=r(ol,"SPAN",{});var Au=i(er);ac=s(Au,"DebertaV2PreTrainedModel"),Au.forEach(t),ol.forEach(t),Ei=d(o),ht=r(o,"DIV",{class:!0});var va=i(ht);T(_n.$$.fragment,va),rc=d(va),tr=r(va,"P",{});var Lu=i(tr);ic=s(Lu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Lu.forEach(t),lc=d(va),ot=r(va,"DIV",{class:!0});var Oo=i(ot);T(bn.$$.fragment,Oo),dc=d(Oo),or=r(Oo,"P",{});var Iu=i(or);cc=s(Iu,"Defines the computation performed at every call."),Iu.forEach(t),pc=d(Oo),nr=r(Oo,"P",{});var Su=i(nr);hc=s(Su,"Should be overridden by all subclasses."),Su.forEach(t),mc=d(Oo),T(mo.$$.fragment,Oo),Oo.forEach(t),va.forEach(t),Fi=d(o),Bt=r(o,"H2",{class:!0});var nl=i(Bt);fo=r(nl,"A",{id:!0,class:!0,href:!0});var Ou=i(fo);sr=r(Ou,"SPAN",{});var Nu=i(sr);T(vn.$$.fragment,Nu),Nu.forEach(t),Ou.forEach(t),fc=d(nl),ar=r(nl,"SPAN",{});var Wu=i(ar);uc=s(Wu,"DebertaV2ForMaskedLM"),Wu.forEach(t),nl.forEach(t),Vi=d(o),Ye=r(o,"DIV",{class:!0});var No=i(Ye);T(kn.$$.fragment,No),gc=d(No),At=r(No,"P",{});var ka=i(At);_c=s(ka,"DeBERTa Model with a "),rr=r(ka,"CODE",{});var Hu=i(rr);bc=s(Hu,"language modeling"),Hu.forEach(t),vc=s(ka,` head on top.
The DeBERTa model was proposed in `),Tn=r(ka,"A",{href:!0,rel:!0});var Uu=i(Tn);kc=s(Uu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Uu.forEach(t),Tc=s(ka,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ka.forEach(t),wc=d(No),wn=r(No,"P",{});var sl=i(wn);yc=s(sl,"This model is also a PyTorch "),yn=r(sl,"A",{href:!0,rel:!0});var Qu=i(yn);Dc=s(Qu,"torch.nn.Module"),Qu.forEach(t),$c=s(sl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),sl.forEach(t),Ec=d(No),Re=r(No,"DIV",{class:!0});var at=i(Re);T(Dn.$$.fragment,at),Fc=d(at),Lt=r(at,"P",{});var Ta=i(Lt);Vc=s(Ta,"The "),na=r(Ta,"A",{href:!0});var Gu=i(na);qc=s(Gu,"DebertaV2ForMaskedLM"),Gu.forEach(t),zc=s(Ta," forward method, overrides the "),ir=r(Ta,"CODE",{});var Ku=i(ir);Mc=s(Ku,"__call__"),Ku.forEach(t),xc=s(Ta," special method."),Ta.forEach(t),jc=d(at),T(uo.$$.fragment,at),Cc=d(at),lr=r(at,"P",{});var Ju=i(lr);Rc=s(Ju,"Example:"),Ju.forEach(t),Pc=d(at),T($n.$$.fragment,at),Bc=d(at),T(En.$$.fragment,at),at.forEach(t),No.forEach(t),qi=d(o),It=r(o,"H2",{class:!0});var al=i(It);go=r(al,"A",{id:!0,class:!0,href:!0});var Xu=i(go);dr=r(Xu,"SPAN",{});var Yu=i(dr);T(Fn.$$.fragment,Yu),Yu.forEach(t),Xu.forEach(t),Ac=d(al),cr=r(al,"SPAN",{});var Zu=i(cr);Lc=s(Zu,"DebertaV2ForSequenceClassification"),Zu.forEach(t),al.forEach(t),zi=d(o),Ie=r(o,"DIV",{class:!0});var _t=i(Ie);T(Vn.$$.fragment,_t),Ic=d(_t),pr=r(_t,"P",{});var eg=i(pr);Sc=s(eg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),eg.forEach(t),Oc=d(_t),qn=r(_t,"P",{});var rl=i(qn);Nc=s(rl,"The DeBERTa model was proposed in "),zn=r(rl,"A",{href:!0,rel:!0});var tg=i(zn);Wc=s(tg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),tg.forEach(t),Hc=s(rl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),rl.forEach(t),Uc=d(_t),Mn=r(_t,"P",{});var il=i(Mn);Qc=s(il,"This model is also a PyTorch "),xn=r(il,"A",{href:!0,rel:!0});var og=i(xn);Gc=s(og,"torch.nn.Module"),og.forEach(t),Kc=s(il," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),il.forEach(t),Jc=d(_t),ve=r(_t,"DIV",{class:!0});var qe=i(ve);T(jn.$$.fragment,qe),Xc=d(qe),St=r(qe,"P",{});var wa=i(St);Yc=s(wa,"The "),sa=r(wa,"A",{href:!0});var ng=i(sa);Zc=s(ng,"DebertaV2ForSequenceClassification"),ng.forEach(t),ep=s(wa," forward method, overrides the "),hr=r(wa,"CODE",{});var sg=i(hr);tp=s(sg,"__call__"),sg.forEach(t),op=s(wa," special method."),wa.forEach(t),np=d(qe),T(_o.$$.fragment,qe),sp=d(qe),mr=r(qe,"P",{});var ag=i(mr);ap=s(ag,"Example of single-label classification:"),ag.forEach(t),rp=d(qe),T(Cn.$$.fragment,qe),ip=d(qe),T(Rn.$$.fragment,qe),lp=d(qe),fr=r(qe,"P",{});var rg=i(fr);dp=s(rg,"Example of multi-label classification:"),rg.forEach(t),cp=d(qe),T(Pn.$$.fragment,qe),pp=d(qe),T(Bn.$$.fragment,qe),qe.forEach(t),_t.forEach(t),Mi=d(o),Ot=r(o,"H2",{class:!0});var ll=i(Ot);bo=r(ll,"A",{id:!0,class:!0,href:!0});var ig=i(bo);ur=r(ig,"SPAN",{});var lg=i(ur);T(An.$$.fragment,lg),lg.forEach(t),ig.forEach(t),hp=d(ll),gr=r(ll,"SPAN",{});var dg=i(gr);mp=s(dg,"DebertaV2ForTokenClassification"),dg.forEach(t),ll.forEach(t),xi=d(o),Se=r(o,"DIV",{class:!0});var bt=i(Se);T(Ln.$$.fragment,bt),fp=d(bt),_r=r(bt,"P",{});var cg=i(_r);up=s(cg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),cg.forEach(t),gp=d(bt),In=r(bt,"P",{});var dl=i(In);_p=s(dl,"The DeBERTa model was proposed in "),Sn=r(dl,"A",{href:!0,rel:!0});var pg=i(Sn);bp=s(pg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),pg.forEach(t),vp=s(dl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dl.forEach(t),kp=d(bt),On=r(bt,"P",{});var cl=i(On);Tp=s(cl,"This model is also a PyTorch "),Nn=r(cl,"A",{href:!0,rel:!0});var hg=i(Nn);wp=s(hg,"torch.nn.Module"),hg.forEach(t),yp=s(cl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),cl.forEach(t),Dp=d(bt),Pe=r(bt,"DIV",{class:!0});var rt=i(Pe);T(Wn.$$.fragment,rt),$p=d(rt),Nt=r(rt,"P",{});var ya=i(Nt);Ep=s(ya,"The "),aa=r(ya,"A",{href:!0});var mg=i(aa);Fp=s(mg,"DebertaV2ForTokenClassification"),mg.forEach(t),Vp=s(ya," forward method, overrides the "),br=r(ya,"CODE",{});var fg=i(br);qp=s(fg,"__call__"),fg.forEach(t),zp=s(ya," special method."),ya.forEach(t),Mp=d(rt),T(vo.$$.fragment,rt),xp=d(rt),vr=r(rt,"P",{});var ug=i(vr);jp=s(ug,"Example:"),ug.forEach(t),Cp=d(rt),T(Hn.$$.fragment,rt),Rp=d(rt),T(Un.$$.fragment,rt),rt.forEach(t),bt.forEach(t),ji=d(o),Wt=r(o,"H2",{class:!0});var pl=i(Wt);ko=r(pl,"A",{id:!0,class:!0,href:!0});var gg=i(ko);kr=r(gg,"SPAN",{});var _g=i(kr);T(Qn.$$.fragment,_g),_g.forEach(t),gg.forEach(t),Pp=d(pl),Tr=r(pl,"SPAN",{});var bg=i(Tr);Bp=s(bg,"DebertaV2ForQuestionAnswering"),bg.forEach(t),pl.forEach(t),Ci=d(o),Oe=r(o,"DIV",{class:!0});var vt=i(Oe);T(Gn.$$.fragment,vt),Ap=d(vt),Ht=r(vt,"P",{});var Da=i(Ht);Lp=s(Da,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),wr=r(Da,"CODE",{});var vg=i(wr);Ip=s(vg,"span start logits"),vg.forEach(t),Sp=s(Da," and "),yr=r(Da,"CODE",{});var kg=i(yr);Op=s(kg,"span end logits"),kg.forEach(t),Np=s(Da,")."),Da.forEach(t),Wp=d(vt),Kn=r(vt,"P",{});var hl=i(Kn);Hp=s(hl,"The DeBERTa model was proposed in "),Jn=r(hl,"A",{href:!0,rel:!0});var Tg=i(Jn);Up=s(Tg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tg.forEach(t),Qp=s(hl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),hl.forEach(t),Gp=d(vt),Xn=r(vt,"P",{});var ml=i(Xn);Kp=s(ml,"This model is also a PyTorch "),Yn=r(ml,"A",{href:!0,rel:!0});var wg=i(Yn);Jp=s(wg,"torch.nn.Module"),wg.forEach(t),Xp=s(ml," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ml.forEach(t),Yp=d(vt),Be=r(vt,"DIV",{class:!0});var it=i(Be);T(Zn.$$.fragment,it),Zp=d(it),Ut=r(it,"P",{});var $a=i(Ut);eh=s($a,"The "),ra=r($a,"A",{href:!0});var yg=i(ra);th=s(yg,"DebertaV2ForQuestionAnswering"),yg.forEach(t),oh=s($a," forward method, overrides the "),Dr=r($a,"CODE",{});var Dg=i(Dr);nh=s(Dg,"__call__"),Dg.forEach(t),sh=s($a," special method."),$a.forEach(t),ah=d(it),T(To.$$.fragment,it),rh=d(it),$r=r(it,"P",{});var $g=i($r);ih=s($g,"Example:"),$g.forEach(t),lh=d(it),T(es.$$.fragment,it),dh=d(it),T(ts.$$.fragment,it),it.forEach(t),vt.forEach(t),Ri=d(o),Qt=r(o,"H2",{class:!0});var fl=i(Qt);wo=r(fl,"A",{id:!0,class:!0,href:!0});var Eg=i(wo);Er=r(Eg,"SPAN",{});var Fg=i(Er);T(os.$$.fragment,Fg),Fg.forEach(t),Eg.forEach(t),ch=d(fl),Fr=r(fl,"SPAN",{});var Vg=i(Fr);ph=s(Vg,"TFDebertaV2Model"),Vg.forEach(t),fl.forEach(t),Pi=d(o),Ne=r(o,"DIV",{class:!0});var kt=i(Ne);T(ns.$$.fragment,kt),hh=d(kt),ss=r(kt,"P",{});var ul=i(ss);mh=s(ul,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),as=r(ul,"A",{href:!0,rel:!0});var qg=i(as);fh=s(qg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qg.forEach(t),uh=s(ul,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ul.forEach(t),gh=d(kt),rs=r(kt,"P",{});var gl=i(rs);_h=s(gl,"This model is also a "),is=r(gl,"A",{href:!0,rel:!0});var zg=i(is);bh=s(zg,"tf.keras.Model"),zg.forEach(t),vh=s(gl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gl.forEach(t),kh=d(kt),T(yo.$$.fragment,kt),Th=d(kt),Ue=r(kt,"DIV",{class:!0});var Tt=i(Ue);T(ls.$$.fragment,Tt),wh=d(Tt),Gt=r(Tt,"P",{});var Ea=i(Gt);yh=s(Ea,"The "),ia=r(Ea,"A",{href:!0});var Mg=i(ia);Dh=s(Mg,"TFDebertaV2Model"),Mg.forEach(t),$h=s(Ea," forward method, overrides the "),Vr=r(Ea,"CODE",{});var xg=i(Vr);Eh=s(xg,"__call__"),xg.forEach(t),Fh=s(Ea," special method."),Ea.forEach(t),Vh=d(Tt),T(Do.$$.fragment,Tt),qh=d(Tt),qr=r(Tt,"P",{});var jg=i(qr);zh=s(jg,"Example:"),jg.forEach(t),Mh=d(Tt),T(ds.$$.fragment,Tt),Tt.forEach(t),kt.forEach(t),Bi=d(o),Kt=r(o,"H2",{class:!0});var _l=i(Kt);$o=r(_l,"A",{id:!0,class:!0,href:!0});var Cg=i($o);zr=r(Cg,"SPAN",{});var Rg=i(zr);T(cs.$$.fragment,Rg),Rg.forEach(t),Cg.forEach(t),xh=d(_l),Mr=r(_l,"SPAN",{});var Pg=i(Mr);jh=s(Pg,"TFDebertaV2PreTrainedModel"),Pg.forEach(t),_l.forEach(t),Ai=d(o),mt=r(o,"DIV",{class:!0});var Fa=i(mt);T(ps.$$.fragment,Fa),Ch=d(Fa),xr=r(Fa,"P",{});var Bg=i(xr);Rh=s(Bg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Bg.forEach(t),Ph=d(Fa),nt=r(Fa,"DIV",{class:!0});var Wo=i(nt);T(hs.$$.fragment,Wo),Bh=d(Wo),jr=r(Wo,"P",{});var Ag=i(jr);Ah=s(Ag,"Calls the model on new inputs and returns the outputs as tensors."),Ag.forEach(t),Lh=d(Wo),ms=r(Wo,"P",{});var bl=i(ms);Ih=s(bl,"In this case "),Cr=r(bl,"CODE",{});var Lg=i(Cr);Sh=s(Lg,"call()"),Lg.forEach(t),Oh=s(bl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),bl.forEach(t),Nh=d(Wo),Ze=r(Wo,"P",{});var wt=i(Ze);Wh=s(wt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Rr=r(wt,"CODE",{});var Ig=i(Rr);Hh=s(Ig,"tf.keras.Model"),Ig.forEach(t),Uh=s(wt,`.
To call a model on an input, always use the `),Pr=r(wt,"CODE",{});var Sg=i(Pr);Qh=s(Sg,"__call__()"),Sg.forEach(t),Gh=s(wt,` method,
i.e. `),Br=r(wt,"CODE",{});var Og=i(Br);Kh=s(Og,"model(inputs)"),Og.forEach(t),Jh=s(wt,", which relies on the underlying "),Ar=r(wt,"CODE",{});var Ng=i(Ar);Xh=s(Ng,"call()"),Ng.forEach(t),Yh=s(wt," method."),wt.forEach(t),Wo.forEach(t),Fa.forEach(t),Li=d(o),Jt=r(o,"H2",{class:!0});var vl=i(Jt);Eo=r(vl,"A",{id:!0,class:!0,href:!0});var Wg=i(Eo);Lr=r(Wg,"SPAN",{});var Hg=i(Lr);T(fs.$$.fragment,Hg),Hg.forEach(t),Wg.forEach(t),Zh=d(vl),Ir=r(vl,"SPAN",{});var Ug=i(Ir);em=s(Ug,"TFDebertaV2ForMaskedLM"),Ug.forEach(t),vl.forEach(t),Ii=d(o),We=r(o,"DIV",{class:!0});var yt=i(We);T(us.$$.fragment,yt),tm=d(yt),Xt=r(yt,"P",{});var Va=i(Xt);om=s(Va,"DeBERTa Model with a "),Sr=r(Va,"CODE",{});var Qg=i(Sr);nm=s(Qg,"language modeling"),Qg.forEach(t),sm=s(Va,` head on top.
The DeBERTa model was proposed in `),gs=r(Va,"A",{href:!0,rel:!0});var Gg=i(gs);am=s(Gg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gg.forEach(t),rm=s(Va,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Va.forEach(t),im=d(yt),_s=r(yt,"P",{});var kl=i(_s);lm=s(kl,"This model is also a "),bs=r(kl,"A",{href:!0,rel:!0});var Kg=i(bs);dm=s(Kg,"tf.keras.Model"),Kg.forEach(t),cm=s(kl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kl.forEach(t),pm=d(yt),T(Fo.$$.fragment,yt),hm=d(yt),Qe=r(yt,"DIV",{class:!0});var Dt=i(Qe);T(vs.$$.fragment,Dt),mm=d(Dt),Yt=r(Dt,"P",{});var qa=i(Yt);fm=s(qa,"The "),la=r(qa,"A",{href:!0});var Jg=i(la);um=s(Jg,"TFDebertaV2ForMaskedLM"),Jg.forEach(t),gm=s(qa," forward method, overrides the "),Or=r(qa,"CODE",{});var Xg=i(Or);_m=s(Xg,"__call__"),Xg.forEach(t),bm=s(qa," special method."),qa.forEach(t),vm=d(Dt),T(Vo.$$.fragment,Dt),km=d(Dt),Nr=r(Dt,"P",{});var Yg=i(Nr);Tm=s(Yg,"Example:"),Yg.forEach(t),wm=d(Dt),T(ks.$$.fragment,Dt),Dt.forEach(t),yt.forEach(t),Si=d(o),Zt=r(o,"H2",{class:!0});var Tl=i(Zt);qo=r(Tl,"A",{id:!0,class:!0,href:!0});var Zg=i(qo);Wr=r(Zg,"SPAN",{});var e_=i(Wr);T(Ts.$$.fragment,e_),e_.forEach(t),Zg.forEach(t),ym=d(Tl),Hr=r(Tl,"SPAN",{});var t_=i(Hr);Dm=s(t_,"TFDebertaV2ForSequenceClassification"),t_.forEach(t),Tl.forEach(t),Oi=d(o),Me=r(o,"DIV",{class:!0});var lt=i(Me);T(ws.$$.fragment,lt),$m=d(lt),Ur=r(lt,"P",{});var o_=i(Ur);Em=s(o_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),o_.forEach(t),Fm=d(lt),ys=r(lt,"P",{});var wl=i(ys);Vm=s(wl,"The DeBERTa model was proposed in "),Ds=r(wl,"A",{href:!0,rel:!0});var n_=i(Ds);qm=s(n_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),n_.forEach(t),zm=s(wl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wl.forEach(t),Mm=d(lt),$s=r(lt,"P",{});var yl=i($s);xm=s(yl,"This model is also a "),Es=r(yl,"A",{href:!0,rel:!0});var s_=i(Es);jm=s(s_,"tf.keras.Model"),s_.forEach(t),Cm=s(yl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yl.forEach(t),Rm=d(lt),T(zo.$$.fragment,lt),Pm=d(lt),Ge=r(lt,"DIV",{class:!0});var $t=i(Ge);T(Fs.$$.fragment,$t),Bm=d($t),eo=r($t,"P",{});var za=i(eo);Am=s(za,"The "),da=r(za,"A",{href:!0});var a_=i(da);Lm=s(a_,"TFDebertaV2ForSequenceClassification"),a_.forEach(t),Im=s(za," forward method, overrides the "),Qr=r(za,"CODE",{});var r_=i(Qr);Sm=s(r_,"__call__"),r_.forEach(t),Om=s(za," special method."),za.forEach(t),Nm=d($t),T(Mo.$$.fragment,$t),Wm=d($t),Gr=r($t,"P",{});var i_=i(Gr);Hm=s(i_,"Example:"),i_.forEach(t),Um=d($t),T(Vs.$$.fragment,$t),$t.forEach(t),lt.forEach(t),Ni=d(o),to=r(o,"H2",{class:!0});var Dl=i(to);xo=r(Dl,"A",{id:!0,class:!0,href:!0});var l_=i(xo);Kr=r(l_,"SPAN",{});var d_=i(Kr);T(qs.$$.fragment,d_),d_.forEach(t),l_.forEach(t),Qm=d(Dl),Jr=r(Dl,"SPAN",{});var c_=i(Jr);Gm=s(c_,"TFDebertaV2ForTokenClassification"),c_.forEach(t),Dl.forEach(t),Wi=d(o),xe=r(o,"DIV",{class:!0});var dt=i(xe);T(zs.$$.fragment,dt),Km=d(dt),Xr=r(dt,"P",{});var p_=i(Xr);Jm=s(p_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),p_.forEach(t),Xm=d(dt),Ms=r(dt,"P",{});var $l=i(Ms);Ym=s($l,"The DeBERTa model was proposed in "),xs=r($l,"A",{href:!0,rel:!0});var h_=i(xs);Zm=s(h_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),h_.forEach(t),ef=s($l,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),$l.forEach(t),tf=d(dt),js=r(dt,"P",{});var El=i(js);of=s(El,"This model is also a "),Cs=r(El,"A",{href:!0,rel:!0});var m_=i(Cs);nf=s(m_,"tf.keras.Model"),m_.forEach(t),sf=s(El,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),El.forEach(t),af=d(dt),T(jo.$$.fragment,dt),rf=d(dt),Ke=r(dt,"DIV",{class:!0});var Et=i(Ke);T(Rs.$$.fragment,Et),lf=d(Et),oo=r(Et,"P",{});var Ma=i(oo);df=s(Ma,"The "),ca=r(Ma,"A",{href:!0});var f_=i(ca);cf=s(f_,"TFDebertaV2ForTokenClassification"),f_.forEach(t),pf=s(Ma," forward method, overrides the "),Yr=r(Ma,"CODE",{});var u_=i(Yr);hf=s(u_,"__call__"),u_.forEach(t),mf=s(Ma," special method."),Ma.forEach(t),ff=d(Et),T(Co.$$.fragment,Et),uf=d(Et),Zr=r(Et,"P",{});var g_=i(Zr);gf=s(g_,"Example:"),g_.forEach(t),_f=d(Et),T(Ps.$$.fragment,Et),Et.forEach(t),dt.forEach(t),Hi=d(o),no=r(o,"H2",{class:!0});var Fl=i(no);Ro=r(Fl,"A",{id:!0,class:!0,href:!0});var __=i(Ro);ei=r(__,"SPAN",{});var b_=i(ei);T(Bs.$$.fragment,b_),b_.forEach(t),__.forEach(t),bf=d(Fl),ti=r(Fl,"SPAN",{});var v_=i(ti);vf=s(v_,"TFDebertaV2ForQuestionAnswering"),v_.forEach(t),Fl.forEach(t),Ui=d(o),je=r(o,"DIV",{class:!0});var ct=i(je);T(As.$$.fragment,ct),kf=d(ct),so=r(ct,"P",{});var xa=i(so);Tf=s(xa,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),oi=r(xa,"CODE",{});var k_=i(oi);wf=s(k_,"span start logits"),k_.forEach(t),yf=s(xa," and "),ni=r(xa,"CODE",{});var T_=i(ni);Df=s(T_,"span end logits"),T_.forEach(t),$f=s(xa,")."),xa.forEach(t),Ef=d(ct),Ls=r(ct,"P",{});var Vl=i(Ls);Ff=s(Vl,"The DeBERTa model was proposed in "),Is=r(Vl,"A",{href:!0,rel:!0});var w_=i(Is);Vf=s(w_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),w_.forEach(t),qf=s(Vl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Vl.forEach(t),zf=d(ct),Ss=r(ct,"P",{});var ql=i(Ss);Mf=s(ql,"This model is also a "),Os=r(ql,"A",{href:!0,rel:!0});var y_=i(Os);xf=s(y_,"tf.keras.Model"),y_.forEach(t),jf=s(ql,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ql.forEach(t),Cf=d(ct),T(Po.$$.fragment,ct),Rf=d(ct),Je=r(ct,"DIV",{class:!0});var Ft=i(Je);T(Ns.$$.fragment,Ft),Pf=d(Ft),ao=r(Ft,"P",{});var ja=i(ao);Bf=s(ja,"The "),pa=r(ja,"A",{href:!0});var D_=i(pa);Af=s(D_,"TFDebertaV2ForQuestionAnswering"),D_.forEach(t),Lf=s(ja," forward method, overrides the "),si=r(ja,"CODE",{});var $_=i(si);If=s($_,"__call__"),$_.forEach(t),Sf=s(ja," special method."),ja.forEach(t),Of=d(Ft),T(Bo.$$.fragment,Ft),Nf=d(Ft),ai=r(Ft,"P",{});var E_=i(ai);Wf=s(E_,"Example:"),E_.forEach(t),Hf=d(Ft),T(Ws.$$.fragment,Ft),Ft.forEach(t),ct.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(K_)),c(_,"id","debertav2"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#debertav2"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(q,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(B,"href","https://github.com/microsoft/DeBERTa"),c(B,"rel","nofollow"),c(C,"href","https://github.com/microsoft/DeBERTa"),c(C,"rel","nofollow"),c(oe,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),c(oe,"rel","nofollow"),c(A,"href","https://github.com/google/sentencepiece"),c(A,"rel","nofollow"),c(Ho,"href","https://huggingface.co/DeBERTa"),c(Ho,"rel","nofollow"),c(Uo,"href","https://huggingface.co/kamalkraj"),c(Uo,"rel","nofollow"),c(Qo,"href","https://github.com/microsoft/DeBERTa"),c(Qo,"rel","nofollow"),c(ro,"id","transformers.DebertaV2Config"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.DebertaV2Config"),c(Vt,"class","relative group"),c(Ys,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(Jo,"href","https://huggingface.co/microsoft/deberta-base"),c(Jo,"rel","nofollow"),c(Zs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ea,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(pt,"class","docstring"),c(io,"id","transformers.DebertaV2Tokenizer"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.DebertaV2Tokenizer"),c(Mt,"class","relative group"),c(en,"href","https://github.com/google/sentencepiece"),c(en,"rel","nofollow"),c(ft,"class","docstring"),c(lo,"class","docstring"),c(tt,"class","docstring"),c(ta,"class","docstring"),c(ze,"class","docstring"),c(co,"id","transformers.DebertaV2Model"),c(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(co,"href","#transformers.DebertaV2Model"),c(Ct,"class","relative group"),c(pn,"href","https://arxiv.org/abs/2006.03654"),c(pn,"rel","nofollow"),c(mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(mn,"rel","nofollow"),c(oa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(He,"class","docstring"),c(Xe,"class","docstring"),c(ho,"id","transformers.DebertaV2PreTrainedModel"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaV2PreTrainedModel"),c(Pt,"class","relative group"),c(ot,"class","docstring"),c(ht,"class","docstring"),c(fo,"id","transformers.DebertaV2ForMaskedLM"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.DebertaV2ForMaskedLM"),c(Bt,"class","relative group"),c(Tn,"href","https://arxiv.org/abs/2006.03654"),c(Tn,"rel","nofollow"),c(yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(yn,"rel","nofollow"),c(na,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),c(Re,"class","docstring"),c(Ye,"class","docstring"),c(go,"id","transformers.DebertaV2ForSequenceClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaV2ForSequenceClassification"),c(It,"class","relative group"),c(zn,"href","https://arxiv.org/abs/2006.03654"),c(zn,"rel","nofollow"),c(xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(xn,"rel","nofollow"),c(sa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),c(ve,"class","docstring"),c(Ie,"class","docstring"),c(bo,"id","transformers.DebertaV2ForTokenClassification"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaV2ForTokenClassification"),c(Ot,"class","relative group"),c(Sn,"href","https://arxiv.org/abs/2006.03654"),c(Sn,"rel","nofollow"),c(Nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Nn,"rel","nofollow"),c(aa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),c(Pe,"class","docstring"),c(Se,"class","docstring"),c(ko,"id","transformers.DebertaV2ForQuestionAnswering"),c(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ko,"href","#transformers.DebertaV2ForQuestionAnswering"),c(Wt,"class","relative group"),c(Jn,"href","https://arxiv.org/abs/2006.03654"),c(Jn,"rel","nofollow"),c(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Yn,"rel","nofollow"),c(ra,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),c(Be,"class","docstring"),c(Oe,"class","docstring"),c(wo,"id","transformers.TFDebertaV2Model"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFDebertaV2Model"),c(Qt,"class","relative group"),c(as,"href","https://arxiv.org/abs/2006.03654"),c(as,"rel","nofollow"),c(is,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(is,"rel","nofollow"),c(ia,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),c(Ue,"class","docstring"),c(Ne,"class","docstring"),c($o,"id","transformers.TFDebertaV2PreTrainedModel"),c($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($o,"href","#transformers.TFDebertaV2PreTrainedModel"),c(Kt,"class","relative group"),c(nt,"class","docstring"),c(mt,"class","docstring"),c(Eo,"id","transformers.TFDebertaV2ForMaskedLM"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.TFDebertaV2ForMaskedLM"),c(Jt,"class","relative group"),c(gs,"href","https://arxiv.org/abs/2006.03654"),c(gs,"rel","nofollow"),c(bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(bs,"rel","nofollow"),c(la,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),c(Qe,"class","docstring"),c(We,"class","docstring"),c(qo,"id","transformers.TFDebertaV2ForSequenceClassification"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.TFDebertaV2ForSequenceClassification"),c(Zt,"class","relative group"),c(Ds,"href","https://arxiv.org/abs/2006.03654"),c(Ds,"rel","nofollow"),c(Es,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Es,"rel","nofollow"),c(da,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),c(Ge,"class","docstring"),c(Me,"class","docstring"),c(xo,"id","transformers.TFDebertaV2ForTokenClassification"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.TFDebertaV2ForTokenClassification"),c(to,"class","relative group"),c(xs,"href","https://arxiv.org/abs/2006.03654"),c(xs,"rel","nofollow"),c(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Cs,"rel","nofollow"),c(ca,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),c(Ke,"class","docstring"),c(xe,"class","docstring"),c(Ro,"id","transformers.TFDebertaV2ForQuestionAnswering"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.TFDebertaV2ForQuestionAnswering"),c(no,"class","relative group"),c(Is,"href","https://arxiv.org/abs/2006.03654"),c(Is,"rel","nofollow"),c(Os,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Os,"rel","nofollow"),c(pa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),c(Je,"class","docstring"),c(je,"class","docstring")},m(o,f){e(document.head,h),m(o,F,f),m(o,u,f),e(u,_),e(_,v),w(b,v,null),e(u,g),e(u,V),e(V,de),m(o,J,f),m(o,q,f),e(q,Y),e(Y,L),w(ee,L,null),e(q,ce),e(q,I),e(I,pe),m(o,re,f),m(o,N,f),e(N,R),e(N,te),e(te,Z),e(N,z),m(o,x,f),m(o,ne,f),e(ne,W),m(o,ie,f),m(o,se,f),e(se,H),m(o,le,f),m(o,ae,f),e(ae,M),e(M,he),e(M,B),e(B,me),e(M,fe),m(o,O,f),m(o,X,f),e(X,ue),e(X,C),e(C,ge),e(X,U),e(X,oe),e(oe,p),m(o,E,f),m(o,G,f),e(G,De),m(o,ye,f),m(o,j,f),e(j,_e),e(_e,Te),e(Te,$e),e(_e,P),e(_e,A),e(A,Ee),e(_e,Fe),e(j,Q),e(j,ke),e(ke,we),e(we,be),e(ke,Ve),e(j,zl),e(j,Ks),e(Ks,Ca),e(Ca,Ml),e(Ks,xl),e(j,jl),e(j,Js),e(Js,Ra),e(Ra,Cl),e(Js,Rl),e(j,Pl),e(j,Xs),e(Xs,Pa),e(Pa,Bl),e(Xs,Al),m(o,bi,f),m(o,et,f),e(et,Ll),e(et,Ho),e(Ho,Il),e(et,Sl),e(et,Uo),e(Uo,Ol),e(et,Nl),e(et,Qo),e(Qo,Wl),e(et,Hl),m(o,vi,f),m(o,Vt,f),e(Vt,ro),e(ro,Ba),w(Go,Ba,null),e(Vt,Ul),e(Vt,Aa),e(Aa,Ql),m(o,ki,f),m(o,pt,f),w(Ko,pt,null),e(pt,Gl),e(pt,qt),e(qt,Kl),e(qt,Ys),e(Ys,Jl),e(qt,Xl),e(qt,Jo),e(Jo,Yl),e(qt,Zl),e(pt,ed),e(pt,zt),e(zt,td),e(zt,Zs),e(Zs,od),e(zt,nd),e(zt,ea),e(ea,sd),e(zt,ad),m(o,Ti,f),m(o,Mt,f),e(Mt,io),e(io,La),w(Xo,La,null),e(Mt,rd),e(Mt,Ia),e(Ia,id),m(o,wi,f),m(o,ze,f),w(Yo,ze,null),e(ze,ld),e(ze,Zo),e(Zo,dd),e(Zo,en),e(en,cd),e(Zo,pd),e(ze,hd),e(ze,ft),w(tn,ft,null),e(ft,md),e(ft,Sa),e(Sa,fd),e(ft,ud),e(ft,on),e(on,Oa),e(Oa,gd),e(on,_d),e(on,Na),e(Na,bd),e(ze,vd),e(ze,lo),w(nn,lo,null),e(lo,kd),e(lo,xt),e(xt,Td),e(xt,Wa),e(Wa,wd),e(xt,yd),e(xt,Ha),e(Ha,Dd),e(xt,$d),e(ze,Ed),e(ze,tt),w(sn,tt,null),e(tt,Fd),e(tt,Ua),e(Ua,Vd),e(tt,qd),w(an,tt,null),e(tt,zd),e(tt,jt),e(jt,Md),e(jt,Qa),e(Qa,xd),e(jt,jd),e(jt,Ga),e(Ga,Cd),e(jt,Rd),e(ze,Pd),e(ze,ta),w(rn,ta,null),m(o,yi,f),m(o,Ct,f),e(Ct,co),e(co,Ka),w(ln,Ka,null),e(Ct,Bd),e(Ct,Ja),e(Ja,Ad),m(o,Di,f),m(o,Xe,f),w(dn,Xe,null),e(Xe,Ld),e(Xe,cn),e(cn,Id),e(cn,pn),e(pn,Sd),e(cn,Od),e(Xe,Nd),e(Xe,hn),e(hn,Wd),e(hn,mn),e(mn,Hd),e(hn,Ud),e(Xe,Qd),e(Xe,He),w(fn,He,null),e(He,Gd),e(He,Rt),e(Rt,Kd),e(Rt,oa),e(oa,Jd),e(Rt,Xd),e(Rt,Xa),e(Xa,Yd),e(Rt,Zd),e(He,ec),w(po,He,null),e(He,tc),e(He,Ya),e(Ya,oc),e(He,nc),w(un,He,null),m(o,$i,f),m(o,Pt,f),e(Pt,ho),e(ho,Za),w(gn,Za,null),e(Pt,sc),e(Pt,er),e(er,ac),m(o,Ei,f),m(o,ht,f),w(_n,ht,null),e(ht,rc),e(ht,tr),e(tr,ic),e(ht,lc),e(ht,ot),w(bn,ot,null),e(ot,dc),e(ot,or),e(or,cc),e(ot,pc),e(ot,nr),e(nr,hc),e(ot,mc),w(mo,ot,null),m(o,Fi,f),m(o,Bt,f),e(Bt,fo),e(fo,sr),w(vn,sr,null),e(Bt,fc),e(Bt,ar),e(ar,uc),m(o,Vi,f),m(o,Ye,f),w(kn,Ye,null),e(Ye,gc),e(Ye,At),e(At,_c),e(At,rr),e(rr,bc),e(At,vc),e(At,Tn),e(Tn,kc),e(At,Tc),e(Ye,wc),e(Ye,wn),e(wn,yc),e(wn,yn),e(yn,Dc),e(wn,$c),e(Ye,Ec),e(Ye,Re),w(Dn,Re,null),e(Re,Fc),e(Re,Lt),e(Lt,Vc),e(Lt,na),e(na,qc),e(Lt,zc),e(Lt,ir),e(ir,Mc),e(Lt,xc),e(Re,jc),w(uo,Re,null),e(Re,Cc),e(Re,lr),e(lr,Rc),e(Re,Pc),w($n,Re,null),e(Re,Bc),w(En,Re,null),m(o,qi,f),m(o,It,f),e(It,go),e(go,dr),w(Fn,dr,null),e(It,Ac),e(It,cr),e(cr,Lc),m(o,zi,f),m(o,Ie,f),w(Vn,Ie,null),e(Ie,Ic),e(Ie,pr),e(pr,Sc),e(Ie,Oc),e(Ie,qn),e(qn,Nc),e(qn,zn),e(zn,Wc),e(qn,Hc),e(Ie,Uc),e(Ie,Mn),e(Mn,Qc),e(Mn,xn),e(xn,Gc),e(Mn,Kc),e(Ie,Jc),e(Ie,ve),w(jn,ve,null),e(ve,Xc),e(ve,St),e(St,Yc),e(St,sa),e(sa,Zc),e(St,ep),e(St,hr),e(hr,tp),e(St,op),e(ve,np),w(_o,ve,null),e(ve,sp),e(ve,mr),e(mr,ap),e(ve,rp),w(Cn,ve,null),e(ve,ip),w(Rn,ve,null),e(ve,lp),e(ve,fr),e(fr,dp),e(ve,cp),w(Pn,ve,null),e(ve,pp),w(Bn,ve,null),m(o,Mi,f),m(o,Ot,f),e(Ot,bo),e(bo,ur),w(An,ur,null),e(Ot,hp),e(Ot,gr),e(gr,mp),m(o,xi,f),m(o,Se,f),w(Ln,Se,null),e(Se,fp),e(Se,_r),e(_r,up),e(Se,gp),e(Se,In),e(In,_p),e(In,Sn),e(Sn,bp),e(In,vp),e(Se,kp),e(Se,On),e(On,Tp),e(On,Nn),e(Nn,wp),e(On,yp),e(Se,Dp),e(Se,Pe),w(Wn,Pe,null),e(Pe,$p),e(Pe,Nt),e(Nt,Ep),e(Nt,aa),e(aa,Fp),e(Nt,Vp),e(Nt,br),e(br,qp),e(Nt,zp),e(Pe,Mp),w(vo,Pe,null),e(Pe,xp),e(Pe,vr),e(vr,jp),e(Pe,Cp),w(Hn,Pe,null),e(Pe,Rp),w(Un,Pe,null),m(o,ji,f),m(o,Wt,f),e(Wt,ko),e(ko,kr),w(Qn,kr,null),e(Wt,Pp),e(Wt,Tr),e(Tr,Bp),m(o,Ci,f),m(o,Oe,f),w(Gn,Oe,null),e(Oe,Ap),e(Oe,Ht),e(Ht,Lp),e(Ht,wr),e(wr,Ip),e(Ht,Sp),e(Ht,yr),e(yr,Op),e(Ht,Np),e(Oe,Wp),e(Oe,Kn),e(Kn,Hp),e(Kn,Jn),e(Jn,Up),e(Kn,Qp),e(Oe,Gp),e(Oe,Xn),e(Xn,Kp),e(Xn,Yn),e(Yn,Jp),e(Xn,Xp),e(Oe,Yp),e(Oe,Be),w(Zn,Be,null),e(Be,Zp),e(Be,Ut),e(Ut,eh),e(Ut,ra),e(ra,th),e(Ut,oh),e(Ut,Dr),e(Dr,nh),e(Ut,sh),e(Be,ah),w(To,Be,null),e(Be,rh),e(Be,$r),e($r,ih),e(Be,lh),w(es,Be,null),e(Be,dh),w(ts,Be,null),m(o,Ri,f),m(o,Qt,f),e(Qt,wo),e(wo,Er),w(os,Er,null),e(Qt,ch),e(Qt,Fr),e(Fr,ph),m(o,Pi,f),m(o,Ne,f),w(ns,Ne,null),e(Ne,hh),e(Ne,ss),e(ss,mh),e(ss,as),e(as,fh),e(ss,uh),e(Ne,gh),e(Ne,rs),e(rs,_h),e(rs,is),e(is,bh),e(rs,vh),e(Ne,kh),w(yo,Ne,null),e(Ne,Th),e(Ne,Ue),w(ls,Ue,null),e(Ue,wh),e(Ue,Gt),e(Gt,yh),e(Gt,ia),e(ia,Dh),e(Gt,$h),e(Gt,Vr),e(Vr,Eh),e(Gt,Fh),e(Ue,Vh),w(Do,Ue,null),e(Ue,qh),e(Ue,qr),e(qr,zh),e(Ue,Mh),w(ds,Ue,null),m(o,Bi,f),m(o,Kt,f),e(Kt,$o),e($o,zr),w(cs,zr,null),e(Kt,xh),e(Kt,Mr),e(Mr,jh),m(o,Ai,f),m(o,mt,f),w(ps,mt,null),e(mt,Ch),e(mt,xr),e(xr,Rh),e(mt,Ph),e(mt,nt),w(hs,nt,null),e(nt,Bh),e(nt,jr),e(jr,Ah),e(nt,Lh),e(nt,ms),e(ms,Ih),e(ms,Cr),e(Cr,Sh),e(ms,Oh),e(nt,Nh),e(nt,Ze),e(Ze,Wh),e(Ze,Rr),e(Rr,Hh),e(Ze,Uh),e(Ze,Pr),e(Pr,Qh),e(Ze,Gh),e(Ze,Br),e(Br,Kh),e(Ze,Jh),e(Ze,Ar),e(Ar,Xh),e(Ze,Yh),m(o,Li,f),m(o,Jt,f),e(Jt,Eo),e(Eo,Lr),w(fs,Lr,null),e(Jt,Zh),e(Jt,Ir),e(Ir,em),m(o,Ii,f),m(o,We,f),w(us,We,null),e(We,tm),e(We,Xt),e(Xt,om),e(Xt,Sr),e(Sr,nm),e(Xt,sm),e(Xt,gs),e(gs,am),e(Xt,rm),e(We,im),e(We,_s),e(_s,lm),e(_s,bs),e(bs,dm),e(_s,cm),e(We,pm),w(Fo,We,null),e(We,hm),e(We,Qe),w(vs,Qe,null),e(Qe,mm),e(Qe,Yt),e(Yt,fm),e(Yt,la),e(la,um),e(Yt,gm),e(Yt,Or),e(Or,_m),e(Yt,bm),e(Qe,vm),w(Vo,Qe,null),e(Qe,km),e(Qe,Nr),e(Nr,Tm),e(Qe,wm),w(ks,Qe,null),m(o,Si,f),m(o,Zt,f),e(Zt,qo),e(qo,Wr),w(Ts,Wr,null),e(Zt,ym),e(Zt,Hr),e(Hr,Dm),m(o,Oi,f),m(o,Me,f),w(ws,Me,null),e(Me,$m),e(Me,Ur),e(Ur,Em),e(Me,Fm),e(Me,ys),e(ys,Vm),e(ys,Ds),e(Ds,qm),e(ys,zm),e(Me,Mm),e(Me,$s),e($s,xm),e($s,Es),e(Es,jm),e($s,Cm),e(Me,Rm),w(zo,Me,null),e(Me,Pm),e(Me,Ge),w(Fs,Ge,null),e(Ge,Bm),e(Ge,eo),e(eo,Am),e(eo,da),e(da,Lm),e(eo,Im),e(eo,Qr),e(Qr,Sm),e(eo,Om),e(Ge,Nm),w(Mo,Ge,null),e(Ge,Wm),e(Ge,Gr),e(Gr,Hm),e(Ge,Um),w(Vs,Ge,null),m(o,Ni,f),m(o,to,f),e(to,xo),e(xo,Kr),w(qs,Kr,null),e(to,Qm),e(to,Jr),e(Jr,Gm),m(o,Wi,f),m(o,xe,f),w(zs,xe,null),e(xe,Km),e(xe,Xr),e(Xr,Jm),e(xe,Xm),e(xe,Ms),e(Ms,Ym),e(Ms,xs),e(xs,Zm),e(Ms,ef),e(xe,tf),e(xe,js),e(js,of),e(js,Cs),e(Cs,nf),e(js,sf),e(xe,af),w(jo,xe,null),e(xe,rf),e(xe,Ke),w(Rs,Ke,null),e(Ke,lf),e(Ke,oo),e(oo,df),e(oo,ca),e(ca,cf),e(oo,pf),e(oo,Yr),e(Yr,hf),e(oo,mf),e(Ke,ff),w(Co,Ke,null),e(Ke,uf),e(Ke,Zr),e(Zr,gf),e(Ke,_f),w(Ps,Ke,null),m(o,Hi,f),m(o,no,f),e(no,Ro),e(Ro,ei),w(Bs,ei,null),e(no,bf),e(no,ti),e(ti,vf),m(o,Ui,f),m(o,je,f),w(As,je,null),e(je,kf),e(je,so),e(so,Tf),e(so,oi),e(oi,wf),e(so,yf),e(so,ni),e(ni,Df),e(so,$f),e(je,Ef),e(je,Ls),e(Ls,Ff),e(Ls,Is),e(Is,Vf),e(Ls,qf),e(je,zf),e(je,Ss),e(Ss,Mf),e(Ss,Os),e(Os,xf),e(Ss,jf),e(je,Cf),w(Po,je,null),e(je,Rf),e(je,Je),w(Ns,Je,null),e(Je,Pf),e(Je,ao),e(ao,Bf),e(ao,pa),e(pa,Af),e(ao,Lf),e(ao,si),e(si,If),e(ao,Sf),e(Je,Of),w(Bo,Je,null),e(Je,Nf),e(Je,ai),e(ai,Wf),e(Je,Hf),w(Ws,Je,null),Qi=!0},p(o,[f]){const Hs={};f&2&&(Hs.$$scope={dirty:f,ctx:o}),po.$set(Hs);const ri={};f&2&&(ri.$$scope={dirty:f,ctx:o}),mo.$set(ri);const ii={};f&2&&(ii.$$scope={dirty:f,ctx:o}),uo.$set(ii);const li={};f&2&&(li.$$scope={dirty:f,ctx:o}),_o.$set(li);const Us={};f&2&&(Us.$$scope={dirty:f,ctx:o}),vo.$set(Us);const di={};f&2&&(di.$$scope={dirty:f,ctx:o}),To.$set(di);const ci={};f&2&&(ci.$$scope={dirty:f,ctx:o}),yo.$set(ci);const pi={};f&2&&(pi.$$scope={dirty:f,ctx:o}),Do.$set(pi);const Qs={};f&2&&(Qs.$$scope={dirty:f,ctx:o}),Fo.$set(Qs);const hi={};f&2&&(hi.$$scope={dirty:f,ctx:o}),Vo.$set(hi);const mi={};f&2&&(mi.$$scope={dirty:f,ctx:o}),zo.$set(mi);const fi={};f&2&&(fi.$$scope={dirty:f,ctx:o}),Mo.$set(fi);const ui={};f&2&&(ui.$$scope={dirty:f,ctx:o}),jo.$set(ui);const Gs={};f&2&&(Gs.$$scope={dirty:f,ctx:o}),Co.$set(Gs);const gi={};f&2&&(gi.$$scope={dirty:f,ctx:o}),Po.$set(gi);const Ao={};f&2&&(Ao.$$scope={dirty:f,ctx:o}),Bo.$set(Ao)},i(o){Qi||(y(b.$$.fragment,o),y(ee.$$.fragment,o),y(Go.$$.fragment,o),y(Ko.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),y(tn.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(dn.$$.fragment,o),y(fn.$$.fragment,o),y(po.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(bn.$$.fragment,o),y(mo.$$.fragment,o),y(vn.$$.fragment,o),y(kn.$$.fragment,o),y(Dn.$$.fragment,o),y(uo.$$.fragment,o),y($n.$$.fragment,o),y(En.$$.fragment,o),y(Fn.$$.fragment,o),y(Vn.$$.fragment,o),y(jn.$$.fragment,o),y(_o.$$.fragment,o),y(Cn.$$.fragment,o),y(Rn.$$.fragment,o),y(Pn.$$.fragment,o),y(Bn.$$.fragment,o),y(An.$$.fragment,o),y(Ln.$$.fragment,o),y(Wn.$$.fragment,o),y(vo.$$.fragment,o),y(Hn.$$.fragment,o),y(Un.$$.fragment,o),y(Qn.$$.fragment,o),y(Gn.$$.fragment,o),y(Zn.$$.fragment,o),y(To.$$.fragment,o),y(es.$$.fragment,o),y(ts.$$.fragment,o),y(os.$$.fragment,o),y(ns.$$.fragment,o),y(yo.$$.fragment,o),y(ls.$$.fragment,o),y(Do.$$.fragment,o),y(ds.$$.fragment,o),y(cs.$$.fragment,o),y(ps.$$.fragment,o),y(hs.$$.fragment,o),y(fs.$$.fragment,o),y(us.$$.fragment,o),y(Fo.$$.fragment,o),y(vs.$$.fragment,o),y(Vo.$$.fragment,o),y(ks.$$.fragment,o),y(Ts.$$.fragment,o),y(ws.$$.fragment,o),y(zo.$$.fragment,o),y(Fs.$$.fragment,o),y(Mo.$$.fragment,o),y(Vs.$$.fragment,o),y(qs.$$.fragment,o),y(zs.$$.fragment,o),y(jo.$$.fragment,o),y(Rs.$$.fragment,o),y(Co.$$.fragment,o),y(Ps.$$.fragment,o),y(Bs.$$.fragment,o),y(As.$$.fragment,o),y(Po.$$.fragment,o),y(Ns.$$.fragment,o),y(Bo.$$.fragment,o),y(Ws.$$.fragment,o),Qi=!0)},o(o){D(b.$$.fragment,o),D(ee.$$.fragment,o),D(Go.$$.fragment,o),D(Ko.$$.fragment,o),D(Xo.$$.fragment,o),D(Yo.$$.fragment,o),D(tn.$$.fragment,o),D(nn.$$.fragment,o),D(sn.$$.fragment,o),D(an.$$.fragment,o),D(rn.$$.fragment,o),D(ln.$$.fragment,o),D(dn.$$.fragment,o),D(fn.$$.fragment,o),D(po.$$.fragment,o),D(un.$$.fragment,o),D(gn.$$.fragment,o),D(_n.$$.fragment,o),D(bn.$$.fragment,o),D(mo.$$.fragment,o),D(vn.$$.fragment,o),D(kn.$$.fragment,o),D(Dn.$$.fragment,o),D(uo.$$.fragment,o),D($n.$$.fragment,o),D(En.$$.fragment,o),D(Fn.$$.fragment,o),D(Vn.$$.fragment,o),D(jn.$$.fragment,o),D(_o.$$.fragment,o),D(Cn.$$.fragment,o),D(Rn.$$.fragment,o),D(Pn.$$.fragment,o),D(Bn.$$.fragment,o),D(An.$$.fragment,o),D(Ln.$$.fragment,o),D(Wn.$$.fragment,o),D(vo.$$.fragment,o),D(Hn.$$.fragment,o),D(Un.$$.fragment,o),D(Qn.$$.fragment,o),D(Gn.$$.fragment,o),D(Zn.$$.fragment,o),D(To.$$.fragment,o),D(es.$$.fragment,o),D(ts.$$.fragment,o),D(os.$$.fragment,o),D(ns.$$.fragment,o),D(yo.$$.fragment,o),D(ls.$$.fragment,o),D(Do.$$.fragment,o),D(ds.$$.fragment,o),D(cs.$$.fragment,o),D(ps.$$.fragment,o),D(hs.$$.fragment,o),D(fs.$$.fragment,o),D(us.$$.fragment,o),D(Fo.$$.fragment,o),D(vs.$$.fragment,o),D(Vo.$$.fragment,o),D(ks.$$.fragment,o),D(Ts.$$.fragment,o),D(ws.$$.fragment,o),D(zo.$$.fragment,o),D(Fs.$$.fragment,o),D(Mo.$$.fragment,o),D(Vs.$$.fragment,o),D(qs.$$.fragment,o),D(zs.$$.fragment,o),D(jo.$$.fragment,o),D(Rs.$$.fragment,o),D(Co.$$.fragment,o),D(Ps.$$.fragment,o),D(Bs.$$.fragment,o),D(As.$$.fragment,o),D(Po.$$.fragment,o),D(Ns.$$.fragment,o),D(Bo.$$.fragment,o),D(Ws.$$.fragment,o),Qi=!1},d(o){t(h),o&&t(F),o&&t(u),$(b),o&&t(J),o&&t(q),$(ee),o&&t(re),o&&t(N),o&&t(x),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(ae),o&&t(O),o&&t(X),o&&t(E),o&&t(G),o&&t(ye),o&&t(j),o&&t(bi),o&&t(et),o&&t(vi),o&&t(Vt),$(Go),o&&t(ki),o&&t(pt),$(Ko),o&&t(Ti),o&&t(Mt),$(Xo),o&&t(wi),o&&t(ze),$(Yo),$(tn),$(nn),$(sn),$(an),$(rn),o&&t(yi),o&&t(Ct),$(ln),o&&t(Di),o&&t(Xe),$(dn),$(fn),$(po),$(un),o&&t($i),o&&t(Pt),$(gn),o&&t(Ei),o&&t(ht),$(_n),$(bn),$(mo),o&&t(Fi),o&&t(Bt),$(vn),o&&t(Vi),o&&t(Ye),$(kn),$(Dn),$(uo),$($n),$(En),o&&t(qi),o&&t(It),$(Fn),o&&t(zi),o&&t(Ie),$(Vn),$(jn),$(_o),$(Cn),$(Rn),$(Pn),$(Bn),o&&t(Mi),o&&t(Ot),$(An),o&&t(xi),o&&t(Se),$(Ln),$(Wn),$(vo),$(Hn),$(Un),o&&t(ji),o&&t(Wt),$(Qn),o&&t(Ci),o&&t(Oe),$(Gn),$(Zn),$(To),$(es),$(ts),o&&t(Ri),o&&t(Qt),$(os),o&&t(Pi),o&&t(Ne),$(ns),$(yo),$(ls),$(Do),$(ds),o&&t(Bi),o&&t(Kt),$(cs),o&&t(Ai),o&&t(mt),$(ps),$(hs),o&&t(Li),o&&t(Jt),$(fs),o&&t(Ii),o&&t(We),$(us),$(Fo),$(vs),$(Vo),$(ks),o&&t(Si),o&&t(Zt),$(Ts),o&&t(Oi),o&&t(Me),$(ws),$(zo),$(Fs),$(Mo),$(Vs),o&&t(Ni),o&&t(to),$(qs),o&&t(Wi),o&&t(xe),$(zs),$(jo),$(Rs),$(Co),$(Ps),o&&t(Hi),o&&t(no),$(Bs),o&&t(Ui),o&&t(je),$(As),$(Po),$(Ns),$(Bo),$(Ws)}}}const K_={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function J_(S){return M_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class ob extends F_{constructor(h){super();V_(this,h,J_,G_,q_,{})}}export{ob as default,K_ as metadata};
