import{S as R_,i as P_,s as B_,e as a,k as l,w as k,t as o,M as A_,c as r,d as t,m as d,a as i,x as v,h as s,b as c,F as e,g as m,y as T,q as w,o as y,B as D,v as L_}from"../../chunks/vendor-6b77c823.js";import{T as Oe}from"../../chunks/Tip-39098574.js";import{D as K}from"../../chunks/Docstring-abef54e3.js";import{C as Te}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ne}from"../../chunks/IconCopyLink-7a11ce68.js";function I_(S){let h,F,u,_,$;return{c(){h=a("p"),F=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function S_(S){let h,F,u,_,$;return{c(){h=a("p"),F=o(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=a("code"),_=o("Module"),$=o(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function O_(S){let h,F,u,_,$;return{c(){h=a("p"),F=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function N_(S){let h,F,u,_,$;return{c(){h=a("p"),F=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function W_(S){let h,F,u,_,$;return{c(){h=a("p"),F=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function H_(S){let h,F,u,_,$;return{c(){h=a("p"),F=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function U_(S){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,oe,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,ne;return{c(){h=a("p"),F=o("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=o("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=o("This second option is useful when using "),L=a("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=o("model(inputs)"),re=o("."),N=l(),R=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),oe=o("a single Tensor with "),W=a("code"),ie=o("input_ids"),se=o(" only and nothing else: "),H=a("code"),le=o("model(inputs_ids)"),ae=l(),M=a("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=o("model([input_ids, attention_mask])"),fe=o(" or "),O=a("code"),X=o("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);$=r(G,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(G),V=r(G,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var we=i(I);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),R=r(p,"P",{});var Ee=i(R);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);oe=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(P),C=r(P,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);ne=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,R,E),e(R,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,oe),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,ne)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function Q_(S){let h,F,u,_,$;return{c(){h=a("p"),F=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function G_(S){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,oe,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,ne;return{c(){h=a("p"),F=o("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=o("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=o("This second option is useful when using "),L=a("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=o("model(inputs)"),re=o("."),N=l(),R=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),oe=o("a single Tensor with "),W=a("code"),ie=o("input_ids"),se=o(" only and nothing else: "),H=a("code"),le=o("model(inputs_ids)"),ae=l(),M=a("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=o("model([input_ids, attention_mask])"),fe=o(" or "),O=a("code"),X=o("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);$=r(G,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(G),V=r(G,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var we=i(I);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),R=r(p,"P",{});var Ee=i(R);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);oe=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(P),C=r(P,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);ne=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,R,E),e(R,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,oe),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,ne)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function K_(S){let h,F,u,_,$;return{c(){h=a("p"),F=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function J_(S){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,oe,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,ne;return{c(){h=a("p"),F=o("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=o("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=o("This second option is useful when using "),L=a("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=o("model(inputs)"),re=o("."),N=l(),R=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),oe=o("a single Tensor with "),W=a("code"),ie=o("input_ids"),se=o(" only and nothing else: "),H=a("code"),le=o("model(inputs_ids)"),ae=l(),M=a("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=o("model([input_ids, attention_mask])"),fe=o(" or "),O=a("code"),X=o("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);$=r(G,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(G),V=r(G,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var we=i(I);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),R=r(p,"P",{});var Ee=i(R);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);oe=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(P),C=r(P,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);ne=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,R,E),e(R,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,oe),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,ne)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function X_(S){let h,F,u,_,$;return{c(){h=a("p"),F=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function Y_(S){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,oe,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,ne;return{c(){h=a("p"),F=o("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=o("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=o("This second option is useful when using "),L=a("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=o("model(inputs)"),re=o("."),N=l(),R=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),oe=o("a single Tensor with "),W=a("code"),ie=o("input_ids"),se=o(" only and nothing else: "),H=a("code"),le=o("model(inputs_ids)"),ae=l(),M=a("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=o("model([input_ids, attention_mask])"),fe=o(" or "),O=a("code"),X=o("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);$=r(G,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(G),V=r(G,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var we=i(I);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),R=r(p,"P",{});var Ee=i(R);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);oe=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(P),C=r(P,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);ne=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,R,E),e(R,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,oe),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,ne)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function Z_(S){let h,F,u,_,$;return{c(){h=a("p"),F=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function eb(S){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,oe,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,ne;return{c(){h=a("p"),F=o("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=o("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=o("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=o("This second option is useful when using "),L=a("code"),ee=o("tf.keras.Model.fit"),ce=o(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=o("model(inputs)"),re=o("."),N=l(),R=a("p"),te=o(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),oe=o("a single Tensor with "),W=a("code"),ie=o("input_ids"),se=o(" only and nothing else: "),H=a("code"),le=o("model(inputs_ids)"),ae=l(),M=a("li"),he=o(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=o("model([input_ids, attention_mask])"),fe=o(" or "),O=a("code"),X=o("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=o(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),ne=o('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);$=r(G,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(G),V=r(G,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var we=i(I);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),R=r(p,"P",{});var Ee=i(R);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),z=r(p,"UL",{});var P=i(z);x=r(P,"LI",{});var A=i(x);oe=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(P),M=r(P,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(P),C=r(P,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);ne=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),P.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,R,E),e(R,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,oe),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,ne)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(R),p&&t(Z),p&&t(z)}}}function tb(S){let h,F,u,_,$;return{c(){h=a("p"),F=o("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=o("Module"),$=o(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function nb(S){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,R,te,Z,z,x,oe,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,ne,p,E,G,$e,De,j,_e,we,Ee,P,A,Fe,Ve,Q,ve,ye,be,qe,Cl,Zs,Aa,Rl,Pl,Bl,ea,La,Al,Ll,Il,ta,Ia,Sl,Ol,wi,et,Nl,Hn,Wl,Hl,Un,Ul,Ql,Qn,Gl,Kl,yi,Vt,rn,Sa,Gn,Jl,Oa,Xl,Di,ut,Kn,Yl,qt,Zl,na,ed,td,Jn,nd,od,sd,zt,ad,oa,rd,id,sa,ld,dd,$i,Mt,ln,Na,Xn,cd,Wa,pd,Ei,Me,Yn,hd,Zn,md,eo,fd,ud,gd,bt,to,_d,Ha,bd,kd,no,Ua,vd,Td,Qa,wd,yd,dn,oo,Dd,xt,$d,Ga,Ed,Fd,Ka,Vd,qd,zd,tt,so,Md,Ja,xd,jd,ao,Cd,jt,Rd,Xa,Pd,Bd,Ya,Ad,Ld,Id,aa,ro,Fi,Ct,cn,Za,io,Sd,er,Od,Vi,Xe,lo,Nd,co,Wd,po,Hd,Ud,Qd,ho,Gd,mo,Kd,Jd,Xd,Ke,fo,Yd,Rt,Zd,ra,ec,tc,tr,nc,oc,sc,pn,ac,nr,rc,ic,uo,qi,Pt,hn,or,go,lc,sr,dc,zi,gt,_o,cc,ar,pc,hc,nt,bo,mc,rr,fc,uc,ir,gc,_c,mn,Mi,Bt,fn,lr,ko,bc,dr,kc,xi,Ye,vo,vc,At,Tc,cr,wc,yc,To,Dc,$c,Ec,wo,Fc,yo,Vc,qc,zc,Re,Do,Mc,Lt,xc,ia,jc,Cc,pr,Rc,Pc,Bc,un,Ac,hr,Lc,Ic,$o,Sc,Eo,ji,It,gn,mr,Fo,Oc,fr,Nc,Ci,We,Vo,Wc,ur,Hc,Uc,qo,Qc,zo,Gc,Kc,Jc,Mo,Xc,xo,Yc,Zc,ep,ke,jo,tp,St,np,la,op,sp,gr,ap,rp,ip,_n,lp,_r,dp,cp,Co,pp,Ro,hp,br,mp,fp,Po,up,Bo,Ri,Ot,bn,kr,Ao,gp,vr,_p,Pi,He,Lo,bp,Tr,kp,vp,Io,Tp,So,wp,yp,Dp,Oo,$p,No,Ep,Fp,Vp,Pe,Wo,qp,Nt,zp,da,Mp,xp,wr,jp,Cp,Rp,kn,Pp,yr,Bp,Ap,Ho,Lp,Uo,Bi,Wt,vn,Dr,Qo,Ip,$r,Sp,Ai,Ue,Go,Op,Ht,Np,Er,Wp,Hp,Fr,Up,Qp,Gp,Ko,Kp,Jo,Jp,Xp,Yp,Xo,Zp,Yo,eh,th,nh,Be,Zo,oh,Ut,sh,ca,ah,rh,Vr,ih,lh,dh,Tn,ch,qr,ph,hh,es,mh,ts,Li,Qt,wn,zr,ns,fh,Mr,uh,Ii,Qe,os,gh,ss,_h,as,bh,kh,vh,rs,Th,is,wh,yh,Dh,yn,$h,Je,ls,Eh,Gt,Fh,pa,Vh,qh,xr,zh,Mh,xh,Dn,jh,jr,Ch,Rh,ds,Si,Kt,$n,Cr,cs,Ph,Rr,Bh,Oi,_t,ps,Ah,Pr,Lh,Ih,ot,hs,Sh,Br,Oh,Nh,ms,Wh,Ar,Hh,Uh,Qh,Ze,Gh,Lr,Kh,Jh,Ir,Xh,Yh,Sr,Zh,em,Or,tm,nm,Ni,Jt,En,Nr,fs,om,Wr,sm,Wi,Ge,us,am,Xt,rm,Hr,im,lm,gs,dm,cm,pm,_s,hm,bs,mm,fm,um,Fn,gm,Ae,ks,_m,Yt,bm,ha,km,vm,Ur,Tm,wm,ym,Vn,Dm,Qr,$m,Em,vs,Fm,Ts,Hi,Zt,qn,Gr,ws,Vm,Kr,qm,Ui,xe,ys,zm,Jr,Mm,xm,Ds,jm,$s,Cm,Rm,Pm,Es,Bm,Fs,Am,Lm,Im,zn,Sm,Le,Vs,Om,en,Nm,ma,Wm,Hm,Xr,Um,Qm,Gm,Mn,Km,Yr,Jm,Xm,qs,Ym,zs,Qi,tn,xn,Zr,Ms,Zm,ei,ef,Gi,je,xs,tf,ti,nf,of,js,sf,Cs,af,rf,lf,Rs,df,Ps,cf,pf,hf,jn,mf,Ie,Bs,ff,nn,uf,fa,gf,_f,ni,bf,kf,vf,Cn,Tf,oi,wf,yf,As,Df,Ls,Ki,on,Rn,si,Is,$f,ai,Ef,Ji,Ce,Ss,Ff,sn,Vf,ri,qf,zf,ii,Mf,xf,jf,Os,Cf,Ns,Rf,Pf,Bf,Ws,Af,Hs,Lf,If,Sf,Pn,Of,Se,Us,Nf,an,Wf,ua,Hf,Uf,li,Qf,Gf,Kf,Bn,Jf,di,Xf,Yf,Qs,Zf,Gs,Xi;return b=new Ne({}),ee=new Ne({}),Gn=new Ne({}),Kn=new K({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L31",parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
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
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Xn=new Ne({}),Yn=new K({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L53",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}]}}),to=new K({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L178",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),oo=new K({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L202",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),so=new K({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L228",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ao=new Te({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),ro=new K({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L261"}}),io=new Ne({}),lo=new K({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L977",parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fo=new K({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1001",parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),pn=new Oe({props:{$$slots:{default:[I_]},$$scope:{ctx:S}}}),uo=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),go=new Ne({}),_o=new K({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L881"}}),bo=new K({props:{name:"_forward_unimplemented",anchor:"None",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/main/src/torch/nn/modules/module.py#L190"}}),mn=new Oe({props:{$$slots:{default:[S_]},$$scope:{ctx:S}}}),ko=new Ne({}),vo=new K({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1090",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Do=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1109",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),un=new Oe({props:{$$slots:{default:[O_]},$$scope:{ctx:S}}}),$o=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
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
`}}),Eo=new Te({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),Fo=new Ne({}),Vo=new K({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1226",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jo=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1251",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),_n=new Oe({props:{$$slots:{default:[N_]},$$scope:{ctx:S}}}),Co=new Te({props:{code:`import torch
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
`}}),Ro=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),Po=new Te({props:{code:`import torch
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
`}}),Bo=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),Ao=new Ne({}),Lo=new K({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1346",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wo=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1360",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),kn=new Oe({props:{$$slots:{default:[W_]},$$scope:{ctx:S}}}),Ho=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
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
`}}),Uo=new Te({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Qo=new Ne({}),Go=new K({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1423",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zo=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1436",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Tn=new Oe({props:{$$slots:{default:[H_]},$$scope:{ctx:S}}}),es=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
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
`}}),ts=new Te({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),ns=new Ne({}),os=new K({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1176",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yn=new Oe({props:{$$slots:{default:[U_]},$$scope:{ctx:S}}}),ls=new K({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1182",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Dn=new Oe({props:{$$slots:{default:[Q_]},$$scope:{ctx:S}}}),ds=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),cs=new Ne({}),ps=new K({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1080"}}),hs=new K({props:{name:"call",anchor:"None",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),fs=new Ne({}),us=new K({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1226",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fn=new Oe({props:{$$slots:{default:[G_]},$$scope:{ctx:S}}}),ks=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1242",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Vn=new Oe({props:{$$slots:{default:[K_]},$$scope:{ctx:S}}}),vs=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForMaskedLM.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),Ts=new Te({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),ws=new Ne({}),ys=new K({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1311",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zn=new Oe({props:{$$slots:{default:[J_]},$$scope:{ctx:S}}}),Vs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1329",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Mn=new Oe({props:{$$slots:{default:[X_]},$$scope:{ctx:S}}}),qs=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForSequenceClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),zs=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFDebertaV2ForSequenceClassification.from_pretrained("kamalkraj/deberta-v2-xlarge", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Ms=new Ne({}),xs=new K({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1401",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jn=new Oe({props:{$$slots:{default:[Y_]},$$scope:{ctx:S}}}),Bs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1413",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Cn=new Oe({props:{$$slots:{default:[Z_]},$$scope:{ctx:S}}}),As=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForTokenClassification.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer(
    "HuggingFace is a company based in Paris and New York", add_special_tokens=False, return_tensors="tf"
)

logits = model(**inputs).logits
predicted_token_class_ids = tf.math.argmax(logits, axis=-1)

# Note that tokens are classified rather then input words which means that
# there might be more predicted token classes than words.
# Multiple token classes might account for the same word
predicted_tokens_classes = [model.config.id2label[t] for t in predicted_token_class_ids[0].numpy().tolist()]
predicted_tokens_classes
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;HuggingFace is a company based in Paris and New York&quot;</span>, add_special_tokens=<span class="hljs-literal">False</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_class_ids = tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Note that tokens are classified rather then input words which means that</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># there might be more predicted token classes than words.</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Multiple token classes might account for the same word</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes = [model.config.id2label[t] <span class="hljs-keyword">for</span> t <span class="hljs-keyword">in</span> predicted_token_class_ids[<span class="hljs-number">0</span>].numpy().tolist()]
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_tokens_classes
`}}),Ls=new Te({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Is=new Ne({}),Ss=new K({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1481",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Pn=new Oe({props:{$$slots:{default:[eb]},$$scope:{ctx:S}}}),Us=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1492",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Bn=new Oe({props:{$$slots:{default:[tb]},$$scope:{ctx:S}}}),Qs=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForQuestionAnswering.from_pretrained("kamalkraj/deberta-v2-xlarge")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),Gs=new Te({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){h=a("meta"),F=l(),u=a("h1"),_=a("a"),$=a("span"),k(b.$$.fragment),g=l(),V=a("span"),de=o("DeBERTa-v2"),J=l(),q=a("h2"),Y=a("a"),L=a("span"),k(ee.$$.fragment),ce=l(),I=a("span"),pe=o("Overview"),re=l(),N=a("p"),R=o("The DeBERTa model was proposed in "),te=a("a"),Z=o("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),z=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),x=l(),oe=a("p"),W=o(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ie=l(),se=a("p"),H=o("The abstract from the paper is the following:"),le=l(),ae=a("p"),M=a("em"),he=o(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),B=a("a"),me=o("https://github.com/microsoft/DeBERTa"),fe=o("."),O=l(),X=a("p"),ue=o("The following information is visible directly on the "),C=a("a"),ge=o(`original implementation
repository`),U=o(`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),ne=a("a"),p=o("blog"),E=l(),G=a("p"),$e=o("New in v2:"),De=l(),j=a("ul"),_e=a("li"),we=a("strong"),Ee=o("Vocabulary"),P=o(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=a("a"),Fe=o("sentencepiece-based"),Ve=o(" tokenizer."),Q=l(),ve=a("li"),ye=a("strong"),be=o("nGiE(nGram Induced Input Encoding)"),qe=o(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Cl=l(),Zs=a("li"),Aa=a("strong"),Rl=o("Sharing position projection matrix with content projection matrix in attention layer"),Pl=o(` Based on previous
experiments, this can save parameters without affecting the performance.`),Bl=l(),ea=a("li"),La=a("strong"),Al=o("Apply bucket to encode relative positions"),Ll=o(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Il=l(),ta=a("li"),Ia=a("strong"),Sl=o("900M model & 1.5B model"),Ol=o(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),wi=l(),et=a("p"),Nl=o("This model was contributed by "),Hn=a("a"),Wl=o("DeBERTa"),Hl=o(`. This model TF 2.0 implementation was
contributed by `),Un=a("a"),Ul=o("kamalkraj"),Ql=o(". The original code can be found "),Qn=a("a"),Gl=o("here"),Kl=o("."),yi=l(),Vt=a("h2"),rn=a("a"),Sa=a("span"),k(Gn.$$.fragment),Jl=l(),Oa=a("span"),Xl=o("DebertaV2Config"),Di=l(),ut=a("div"),k(Kn.$$.fragment),Yl=l(),qt=a("p"),Zl=o("This is the configuration class to store the configuration of a "),na=a("a"),ed=o("DebertaV2Model"),td=o(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Jn=a("a"),nd=o("microsoft/deberta-v2-xlarge"),od=o(" architecture."),sd=l(),zt=a("p"),ad=o("Configuration objects inherit from "),oa=a("a"),rd=o("PretrainedConfig"),id=o(` and can be used to control the model outputs. Read the
documentation from `),sa=a("a"),ld=o("PretrainedConfig"),dd=o(" for more information."),$i=l(),Mt=a("h2"),ln=a("a"),Na=a("span"),k(Xn.$$.fragment),cd=l(),Wa=a("span"),pd=o("DebertaV2Tokenizer"),Ei=l(),Me=a("div"),k(Yn.$$.fragment),hd=l(),Zn=a("p"),md=o("Constructs a DeBERTa-v2 tokenizer. Based on "),eo=a("a"),fd=o("SentencePiece"),ud=o("."),gd=l(),bt=a("div"),k(to.$$.fragment),_d=l(),Ha=a("p"),bd=o(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),kd=l(),no=a("ul"),Ua=a("li"),vd=o("single sequence: [CLS] X [SEP]"),Td=l(),Qa=a("li"),wd=o("pair of sequences: [CLS] A [SEP] B [SEP]"),yd=l(),dn=a("div"),k(oo.$$.fragment),Dd=l(),xt=a("p"),$d=o(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ga=a("code"),Ed=o("prepare_for_model"),Fd=o(" or "),Ka=a("code"),Vd=o("encode_plus"),qd=o(" methods."),zd=l(),tt=a("div"),k(so.$$.fragment),Md=l(),Ja=a("p"),xd=o(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),jd=l(),k(ao.$$.fragment),Cd=l(),jt=a("p"),Rd=o("If "),Xa=a("code"),Pd=o("token_ids_1"),Bd=o(" is "),Ya=a("code"),Ad=o("None"),Ld=o(", this method only returns the first portion of the mask (0s)."),Id=l(),aa=a("div"),k(ro.$$.fragment),Fi=l(),Ct=a("h2"),cn=a("a"),Za=a("span"),k(io.$$.fragment),Sd=l(),er=a("span"),Od=o("DebertaV2Model"),Vi=l(),Xe=a("div"),k(lo.$$.fragment),Nd=l(),co=a("p"),Wd=o(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),po=a("a"),Hd=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ud=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Qd=l(),ho=a("p"),Gd=o("This model is also a PyTorch "),mo=a("a"),Kd=o("torch.nn.Module"),Jd=o(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Xd=l(),Ke=a("div"),k(fo.$$.fragment),Yd=l(),Rt=a("p"),Zd=o("The "),ra=a("a"),ec=o("DebertaV2Model"),tc=o(" forward method, overrides the "),tr=a("code"),nc=o("__call__"),oc=o(" special method."),sc=l(),k(pn.$$.fragment),ac=l(),nr=a("p"),rc=o("Example:"),ic=l(),k(uo.$$.fragment),qi=l(),Pt=a("h2"),hn=a("a"),or=a("span"),k(go.$$.fragment),lc=l(),sr=a("span"),dc=o("DebertaV2PreTrainedModel"),zi=l(),gt=a("div"),k(_o.$$.fragment),cc=l(),ar=a("p"),pc=o(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),hc=l(),nt=a("div"),k(bo.$$.fragment),mc=l(),rr=a("p"),fc=o("Defines the computation performed at every call."),uc=l(),ir=a("p"),gc=o("Should be overridden by all subclasses."),_c=l(),k(mn.$$.fragment),Mi=l(),Bt=a("h2"),fn=a("a"),lr=a("span"),k(ko.$$.fragment),bc=l(),dr=a("span"),kc=o("DebertaV2ForMaskedLM"),xi=l(),Ye=a("div"),k(vo.$$.fragment),vc=l(),At=a("p"),Tc=o("DeBERTa Model with a "),cr=a("code"),wc=o("language modeling"),yc=o(` head on top.
The DeBERTa model was proposed in `),To=a("a"),Dc=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),$c=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ec=l(),wo=a("p"),Fc=o("This model is also a PyTorch "),yo=a("a"),Vc=o("torch.nn.Module"),qc=o(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),zc=l(),Re=a("div"),k(Do.$$.fragment),Mc=l(),Lt=a("p"),xc=o("The "),ia=a("a"),jc=o("DebertaV2ForMaskedLM"),Cc=o(" forward method, overrides the "),pr=a("code"),Rc=o("__call__"),Pc=o(" special method."),Bc=l(),k(un.$$.fragment),Ac=l(),hr=a("p"),Lc=o("Example:"),Ic=l(),k($o.$$.fragment),Sc=l(),k(Eo.$$.fragment),ji=l(),It=a("h2"),gn=a("a"),mr=a("span"),k(Fo.$$.fragment),Oc=l(),fr=a("span"),Nc=o("DebertaV2ForSequenceClassification"),Ci=l(),We=a("div"),k(Vo.$$.fragment),Wc=l(),ur=a("p"),Hc=o(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Uc=l(),qo=a("p"),Qc=o("The DeBERTa model was proposed in "),zo=a("a"),Gc=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Kc=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jc=l(),Mo=a("p"),Xc=o("This model is also a PyTorch "),xo=a("a"),Yc=o("torch.nn.Module"),Zc=o(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ep=l(),ke=a("div"),k(jo.$$.fragment),tp=l(),St=a("p"),np=o("The "),la=a("a"),op=o("DebertaV2ForSequenceClassification"),sp=o(" forward method, overrides the "),gr=a("code"),ap=o("__call__"),rp=o(" special method."),ip=l(),k(_n.$$.fragment),lp=l(),_r=a("p"),dp=o("Example of single-label classification:"),cp=l(),k(Co.$$.fragment),pp=l(),k(Ro.$$.fragment),hp=l(),br=a("p"),mp=o("Example of multi-label classification:"),fp=l(),k(Po.$$.fragment),up=l(),k(Bo.$$.fragment),Ri=l(),Ot=a("h2"),bn=a("a"),kr=a("span"),k(Ao.$$.fragment),gp=l(),vr=a("span"),_p=o("DebertaV2ForTokenClassification"),Pi=l(),He=a("div"),k(Lo.$$.fragment),bp=l(),Tr=a("p"),kp=o(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),vp=l(),Io=a("p"),Tp=o("The DeBERTa model was proposed in "),So=a("a"),wp=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yp=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dp=l(),Oo=a("p"),$p=o("This model is also a PyTorch "),No=a("a"),Ep=o("torch.nn.Module"),Fp=o(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Vp=l(),Pe=a("div"),k(Wo.$$.fragment),qp=l(),Nt=a("p"),zp=o("The "),da=a("a"),Mp=o("DebertaV2ForTokenClassification"),xp=o(" forward method, overrides the "),wr=a("code"),jp=o("__call__"),Cp=o(" special method."),Rp=l(),k(kn.$$.fragment),Pp=l(),yr=a("p"),Bp=o("Example:"),Ap=l(),k(Ho.$$.fragment),Lp=l(),k(Uo.$$.fragment),Bi=l(),Wt=a("h2"),vn=a("a"),Dr=a("span"),k(Qo.$$.fragment),Ip=l(),$r=a("span"),Sp=o("DebertaV2ForQuestionAnswering"),Ai=l(),Ue=a("div"),k(Go.$$.fragment),Op=l(),Ht=a("p"),Np=o(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Er=a("code"),Wp=o("span start logits"),Hp=o(" and "),Fr=a("code"),Up=o("span end logits"),Qp=o(")."),Gp=l(),Ko=a("p"),Kp=o("The DeBERTa model was proposed in "),Jo=a("a"),Jp=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Xp=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Yp=l(),Xo=a("p"),Zp=o("This model is also a PyTorch "),Yo=a("a"),eh=o("torch.nn.Module"),th=o(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),nh=l(),Be=a("div"),k(Zo.$$.fragment),oh=l(),Ut=a("p"),sh=o("The "),ca=a("a"),ah=o("DebertaV2ForQuestionAnswering"),rh=o(" forward method, overrides the "),Vr=a("code"),ih=o("__call__"),lh=o(" special method."),dh=l(),k(Tn.$$.fragment),ch=l(),qr=a("p"),ph=o("Example:"),hh=l(),k(es.$$.fragment),mh=l(),k(ts.$$.fragment),Li=l(),Qt=a("h2"),wn=a("a"),zr=a("span"),k(ns.$$.fragment),fh=l(),Mr=a("span"),uh=o("TFDebertaV2Model"),Ii=l(),Qe=a("div"),k(os.$$.fragment),gh=l(),ss=a("p"),_h=o(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),as=a("a"),bh=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),kh=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),vh=l(),rs=a("p"),Th=o("This model is also a "),is=a("a"),wh=o("tf.keras.Model"),yh=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dh=l(),k(yn.$$.fragment),$h=l(),Je=a("div"),k(ls.$$.fragment),Eh=l(),Gt=a("p"),Fh=o("The "),pa=a("a"),Vh=o("TFDebertaV2Model"),qh=o(" forward method, overrides the "),xr=a("code"),zh=o("__call__"),Mh=o(" special method."),xh=l(),k(Dn.$$.fragment),jh=l(),jr=a("p"),Ch=o("Example:"),Rh=l(),k(ds.$$.fragment),Si=l(),Kt=a("h2"),$n=a("a"),Cr=a("span"),k(cs.$$.fragment),Ph=l(),Rr=a("span"),Bh=o("TFDebertaV2PreTrainedModel"),Oi=l(),_t=a("div"),k(ps.$$.fragment),Ah=l(),Pr=a("p"),Lh=o(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Ih=l(),ot=a("div"),k(hs.$$.fragment),Sh=l(),Br=a("p"),Oh=o("Calls the model on new inputs and returns the outputs as tensors."),Nh=l(),ms=a("p"),Wh=o("In this case "),Ar=a("code"),Hh=o("call()"),Uh=o(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Qh=l(),Ze=a("p"),Gh=o(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Lr=a("code"),Kh=o("tf.keras.Model"),Jh=o(`.
To call a model on an input, always use the `),Ir=a("code"),Xh=o("__call__()"),Yh=o(` method,
i.e. `),Sr=a("code"),Zh=o("model(inputs)"),em=o(", which relies on the underlying "),Or=a("code"),tm=o("call()"),nm=o(" method."),Ni=l(),Jt=a("h2"),En=a("a"),Nr=a("span"),k(fs.$$.fragment),om=l(),Wr=a("span"),sm=o("TFDebertaV2ForMaskedLM"),Wi=l(),Ge=a("div"),k(us.$$.fragment),am=l(),Xt=a("p"),rm=o("DeBERTa Model with a "),Hr=a("code"),im=o("language modeling"),lm=o(` head on top.
The DeBERTa model was proposed in `),gs=a("a"),dm=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),cm=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),pm=l(),_s=a("p"),hm=o("This model is also a "),bs=a("a"),mm=o("tf.keras.Model"),fm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),um=l(),k(Fn.$$.fragment),gm=l(),Ae=a("div"),k(ks.$$.fragment),_m=l(),Yt=a("p"),bm=o("The "),ha=a("a"),km=o("TFDebertaV2ForMaskedLM"),vm=o(" forward method, overrides the "),Ur=a("code"),Tm=o("__call__"),wm=o(" special method."),ym=l(),k(Vn.$$.fragment),Dm=l(),Qr=a("p"),$m=o("Example:"),Em=l(),k(vs.$$.fragment),Fm=l(),k(Ts.$$.fragment),Hi=l(),Zt=a("h2"),qn=a("a"),Gr=a("span"),k(ws.$$.fragment),Vm=l(),Kr=a("span"),qm=o("TFDebertaV2ForSequenceClassification"),Ui=l(),xe=a("div"),k(ys.$$.fragment),zm=l(),Jr=a("p"),Mm=o(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),xm=l(),Ds=a("p"),jm=o("The DeBERTa model was proposed in "),$s=a("a"),Cm=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Rm=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Pm=l(),Es=a("p"),Bm=o("This model is also a "),Fs=a("a"),Am=o("tf.keras.Model"),Lm=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Im=l(),k(zn.$$.fragment),Sm=l(),Le=a("div"),k(Vs.$$.fragment),Om=l(),en=a("p"),Nm=o("The "),ma=a("a"),Wm=o("TFDebertaV2ForSequenceClassification"),Hm=o(" forward method, overrides the "),Xr=a("code"),Um=o("__call__"),Qm=o(" special method."),Gm=l(),k(Mn.$$.fragment),Km=l(),Yr=a("p"),Jm=o("Example:"),Xm=l(),k(qs.$$.fragment),Ym=l(),k(zs.$$.fragment),Qi=l(),tn=a("h2"),xn=a("a"),Zr=a("span"),k(Ms.$$.fragment),Zm=l(),ei=a("span"),ef=o("TFDebertaV2ForTokenClassification"),Gi=l(),je=a("div"),k(xs.$$.fragment),tf=l(),ti=a("p"),nf=o(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),of=l(),js=a("p"),sf=o("The DeBERTa model was proposed in "),Cs=a("a"),af=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),rf=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),lf=l(),Rs=a("p"),df=o("This model is also a "),Ps=a("a"),cf=o("tf.keras.Model"),pf=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hf=l(),k(jn.$$.fragment),mf=l(),Ie=a("div"),k(Bs.$$.fragment),ff=l(),nn=a("p"),uf=o("The "),fa=a("a"),gf=o("TFDebertaV2ForTokenClassification"),_f=o(" forward method, overrides the "),ni=a("code"),bf=o("__call__"),kf=o(" special method."),vf=l(),k(Cn.$$.fragment),Tf=l(),oi=a("p"),wf=o("Example:"),yf=l(),k(As.$$.fragment),Df=l(),k(Ls.$$.fragment),Ki=l(),on=a("h2"),Rn=a("a"),si=a("span"),k(Is.$$.fragment),$f=l(),ai=a("span"),Ef=o("TFDebertaV2ForQuestionAnswering"),Ji=l(),Ce=a("div"),k(Ss.$$.fragment),Ff=l(),sn=a("p"),Vf=o(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ri=a("code"),qf=o("span start logits"),zf=o(" and "),ii=a("code"),Mf=o("span end logits"),xf=o(")."),jf=l(),Os=a("p"),Cf=o("The DeBERTa model was proposed in "),Ns=a("a"),Rf=o(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Pf=o(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Bf=l(),Ws=a("p"),Af=o("This model is also a "),Hs=a("a"),Lf=o("tf.keras.Model"),If=o(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sf=l(),k(Pn.$$.fragment),Of=l(),Se=a("div"),k(Us.$$.fragment),Nf=l(),an=a("p"),Wf=o("The "),ua=a("a"),Hf=o("TFDebertaV2ForQuestionAnswering"),Uf=o(" forward method, overrides the "),li=a("code"),Qf=o("__call__"),Gf=o(" special method."),Kf=l(),k(Bn.$$.fragment),Jf=l(),di=a("p"),Xf=o("Example:"),Yf=l(),k(Qs.$$.fragment),Zf=l(),k(Gs.$$.fragment),this.h()},l(n){const f=A_('[data-svelte="svelte-1phssyn"]',document.head);h=r(f,"META",{name:!0,content:!0}),f.forEach(t),F=d(n),u=r(n,"H1",{class:!0});var Ks=i(u);_=r(Ks,"A",{id:!0,class:!0,href:!0});var ci=i(_);$=r(ci,"SPAN",{});var pi=i($);v(b.$$.fragment,pi),pi.forEach(t),ci.forEach(t),g=d(Ks),V=r(Ks,"SPAN",{});var hi=i(V);de=s(hi,"DeBERTa-v2"),hi.forEach(t),Ks.forEach(t),J=d(n),q=r(n,"H2",{class:!0});var Js=i(q);Y=r(Js,"A",{id:!0,class:!0,href:!0});var mi=i(Y);L=r(mi,"SPAN",{});var fi=i(L);v(ee.$$.fragment,fi),fi.forEach(t),mi.forEach(t),ce=d(Js),I=r(Js,"SPAN",{});var ui=i(I);pe=s(ui,"Overview"),ui.forEach(t),Js.forEach(t),re=d(n),N=r(n,"P",{});var Xs=i(N);R=s(Xs,"The DeBERTa model was proposed in "),te=r(Xs,"A",{href:!0,rel:!0});var gi=i(te);Z=s(gi,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),gi.forEach(t),z=s(Xs,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Xs.forEach(t),x=d(n),oe=r(n,"P",{});var _i=i(oe);W=s(_i,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),_i.forEach(t),ie=d(n),se=r(n,"P",{});var bi=i(se);H=s(bi,"The abstract from the paper is the following:"),bi.forEach(t),le=d(n),ae=r(n,"P",{});var ki=i(ae);M=r(ki,"EM",{});var Ys=i(M);he=s(Ys,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),B=r(Ys,"A",{href:!0,rel:!0});var vi=i(B);me=s(vi,"https://github.com/microsoft/DeBERTa"),vi.forEach(t),fe=s(Ys,"."),Ys.forEach(t),ki.forEach(t),O=d(n),X=r(n,"P",{});var An=i(X);ue=s(An,"The following information is visible directly on the "),C=r(An,"A",{href:!0,rel:!0});var su=i(C);ge=s(su,`original implementation
repository`),su.forEach(t),U=s(An,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),ne=r(An,"A",{href:!0,rel:!0});var au=i(ne);p=s(au,"blog"),au.forEach(t),An.forEach(t),E=d(n),G=r(n,"P",{});var ru=i(G);$e=s(ru,"New in v2:"),ru.forEach(t),De=d(n),j=r(n,"UL",{});var kt=i(j);_e=r(kt,"LI",{});var Ti=i(_e);we=r(Ti,"STRONG",{});var iu=i(we);Ee=s(iu,"Vocabulary"),iu.forEach(t),P=s(Ti,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=r(Ti,"A",{href:!0,rel:!0});var lu=i(A);Fe=s(lu,"sentencepiece-based"),lu.forEach(t),Ve=s(Ti," tokenizer."),Ti.forEach(t),Q=d(kt),ve=r(kt,"LI",{});var eu=i(ve);ye=r(eu,"STRONG",{});var du=i(ye);be=s(du,"nGiE(nGram Induced Input Encoding)"),du.forEach(t),qe=s(eu,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),eu.forEach(t),Cl=d(kt),Zs=r(kt,"LI",{});var tu=i(Zs);Aa=r(tu,"STRONG",{});var cu=i(Aa);Rl=s(cu,"Sharing position projection matrix with content projection matrix in attention layer"),cu.forEach(t),Pl=s(tu,` Based on previous
experiments, this can save parameters without affecting the performance.`),tu.forEach(t),Bl=d(kt),ea=r(kt,"LI",{});var nu=i(ea);La=r(nu,"STRONG",{});var pu=i(La);Al=s(pu,"Apply bucket to encode relative positions"),pu.forEach(t),Ll=s(nu,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),nu.forEach(t),Il=d(kt),ta=r(kt,"LI",{});var ou=i(ta);Ia=r(ou,"STRONG",{});var hu=i(Ia);Sl=s(hu,"900M model & 1.5B model"),hu.forEach(t),Ol=s(ou,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),ou.forEach(t),kt.forEach(t),wi=d(n),et=r(n,"P",{});var Ln=i(et);Nl=s(Ln,"This model was contributed by "),Hn=r(Ln,"A",{href:!0,rel:!0});var mu=i(Hn);Wl=s(mu,"DeBERTa"),mu.forEach(t),Hl=s(Ln,`. This model TF 2.0 implementation was
contributed by `),Un=r(Ln,"A",{href:!0,rel:!0});var fu=i(Un);Ul=s(fu,"kamalkraj"),fu.forEach(t),Ql=s(Ln,". The original code can be found "),Qn=r(Ln,"A",{href:!0,rel:!0});var uu=i(Qn);Gl=s(uu,"here"),uu.forEach(t),Kl=s(Ln,"."),Ln.forEach(t),yi=d(n),Vt=r(n,"H2",{class:!0});var Yi=i(Vt);rn=r(Yi,"A",{id:!0,class:!0,href:!0});var gu=i(rn);Sa=r(gu,"SPAN",{});var _u=i(Sa);v(Gn.$$.fragment,_u),_u.forEach(t),gu.forEach(t),Jl=d(Yi),Oa=r(Yi,"SPAN",{});var bu=i(Oa);Xl=s(bu,"DebertaV2Config"),bu.forEach(t),Yi.forEach(t),Di=d(n),ut=r(n,"DIV",{class:!0});var ga=i(ut);v(Kn.$$.fragment,ga),Yl=d(ga),qt=r(ga,"P",{});var _a=i(qt);Zl=s(_a,"This is the configuration class to store the configuration of a "),na=r(_a,"A",{href:!0});var ku=i(na);ed=s(ku,"DebertaV2Model"),ku.forEach(t),td=s(_a,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Jn=r(_a,"A",{href:!0,rel:!0});var vu=i(Jn);nd=s(vu,"microsoft/deberta-v2-xlarge"),vu.forEach(t),od=s(_a," architecture."),_a.forEach(t),sd=d(ga),zt=r(ga,"P",{});var ba=i(zt);ad=s(ba,"Configuration objects inherit from "),oa=r(ba,"A",{href:!0});var Tu=i(oa);rd=s(Tu,"PretrainedConfig"),Tu.forEach(t),id=s(ba,` and can be used to control the model outputs. Read the
documentation from `),sa=r(ba,"A",{href:!0});var wu=i(sa);ld=s(wu,"PretrainedConfig"),wu.forEach(t),dd=s(ba," for more information."),ba.forEach(t),ga.forEach(t),$i=d(n),Mt=r(n,"H2",{class:!0});var Zi=i(Mt);ln=r(Zi,"A",{id:!0,class:!0,href:!0});var yu=i(ln);Na=r(yu,"SPAN",{});var Du=i(Na);v(Xn.$$.fragment,Du),Du.forEach(t),yu.forEach(t),cd=d(Zi),Wa=r(Zi,"SPAN",{});var $u=i(Wa);pd=s($u,"DebertaV2Tokenizer"),$u.forEach(t),Zi.forEach(t),Ei=d(n),Me=r(n,"DIV",{class:!0});var st=i(Me);v(Yn.$$.fragment,st),hd=d(st),Zn=r(st,"P",{});var el=i(Zn);md=s(el,"Constructs a DeBERTa-v2 tokenizer. Based on "),eo=r(el,"A",{href:!0,rel:!0});var Eu=i(eo);fd=s(Eu,"SentencePiece"),Eu.forEach(t),ud=s(el,"."),el.forEach(t),gd=d(st),bt=r(st,"DIV",{class:!0});var ka=i(bt);v(to.$$.fragment,ka),_d=d(ka),Ha=r(ka,"P",{});var Fu=i(Ha);bd=s(Fu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Fu.forEach(t),kd=d(ka),no=r(ka,"UL",{});var tl=i(no);Ua=r(tl,"LI",{});var Vu=i(Ua);vd=s(Vu,"single sequence: [CLS] X [SEP]"),Vu.forEach(t),Td=d(tl),Qa=r(tl,"LI",{});var qu=i(Qa);wd=s(qu,"pair of sequences: [CLS] A [SEP] B [SEP]"),qu.forEach(t),tl.forEach(t),ka.forEach(t),yd=d(st),dn=r(st,"DIV",{class:!0});var nl=i(dn);v(oo.$$.fragment,nl),Dd=d(nl),xt=r(nl,"P",{});var va=i(xt);$d=s(va,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ga=r(va,"CODE",{});var zu=i(Ga);Ed=s(zu,"prepare_for_model"),zu.forEach(t),Fd=s(va," or "),Ka=r(va,"CODE",{});var Mu=i(Ka);Vd=s(Mu,"encode_plus"),Mu.forEach(t),qd=s(va," methods."),va.forEach(t),nl.forEach(t),zd=d(st),tt=r(st,"DIV",{class:!0});var In=i(tt);v(so.$$.fragment,In),Md=d(In),Ja=r(In,"P",{});var xu=i(Ja);xd=s(xu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),xu.forEach(t),jd=d(In),v(ao.$$.fragment,In),Cd=d(In),jt=r(In,"P",{});var Ta=i(jt);Rd=s(Ta,"If "),Xa=r(Ta,"CODE",{});var ju=i(Xa);Pd=s(ju,"token_ids_1"),ju.forEach(t),Bd=s(Ta," is "),Ya=r(Ta,"CODE",{});var Cu=i(Ya);Ad=s(Cu,"None"),Cu.forEach(t),Ld=s(Ta,", this method only returns the first portion of the mask (0s)."),Ta.forEach(t),In.forEach(t),Id=d(st),aa=r(st,"DIV",{class:!0});var Ru=i(aa);v(ro.$$.fragment,Ru),Ru.forEach(t),st.forEach(t),Fi=d(n),Ct=r(n,"H2",{class:!0});var ol=i(Ct);cn=r(ol,"A",{id:!0,class:!0,href:!0});var Pu=i(cn);Za=r(Pu,"SPAN",{});var Bu=i(Za);v(io.$$.fragment,Bu),Bu.forEach(t),Pu.forEach(t),Sd=d(ol),er=r(ol,"SPAN",{});var Au=i(er);Od=s(Au,"DebertaV2Model"),Au.forEach(t),ol.forEach(t),Vi=d(n),Xe=r(n,"DIV",{class:!0});var Sn=i(Xe);v(lo.$$.fragment,Sn),Nd=d(Sn),co=r(Sn,"P",{});var sl=i(co);Wd=s(sl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),po=r(sl,"A",{href:!0,rel:!0});var Lu=i(po);Hd=s(Lu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Lu.forEach(t),Ud=s(sl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),sl.forEach(t),Qd=d(Sn),ho=r(Sn,"P",{});var al=i(ho);Gd=s(al,"This model is also a PyTorch "),mo=r(al,"A",{href:!0,rel:!0});var Iu=i(mo);Kd=s(Iu,"torch.nn.Module"),Iu.forEach(t),Jd=s(al," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),al.forEach(t),Xd=d(Sn),Ke=r(Sn,"DIV",{class:!0});var vt=i(Ke);v(fo.$$.fragment,vt),Yd=d(vt),Rt=r(vt,"P",{});var wa=i(Rt);Zd=s(wa,"The "),ra=r(wa,"A",{href:!0});var Su=i(ra);ec=s(Su,"DebertaV2Model"),Su.forEach(t),tc=s(wa," forward method, overrides the "),tr=r(wa,"CODE",{});var Ou=i(tr);nc=s(Ou,"__call__"),Ou.forEach(t),oc=s(wa," special method."),wa.forEach(t),sc=d(vt),v(pn.$$.fragment,vt),ac=d(vt),nr=r(vt,"P",{});var Nu=i(nr);rc=s(Nu,"Example:"),Nu.forEach(t),ic=d(vt),v(uo.$$.fragment,vt),vt.forEach(t),Sn.forEach(t),qi=d(n),Pt=r(n,"H2",{class:!0});var rl=i(Pt);hn=r(rl,"A",{id:!0,class:!0,href:!0});var Wu=i(hn);or=r(Wu,"SPAN",{});var Hu=i(or);v(go.$$.fragment,Hu),Hu.forEach(t),Wu.forEach(t),lc=d(rl),sr=r(rl,"SPAN",{});var Uu=i(sr);dc=s(Uu,"DebertaV2PreTrainedModel"),Uu.forEach(t),rl.forEach(t),zi=d(n),gt=r(n,"DIV",{class:!0});var ya=i(gt);v(_o.$$.fragment,ya),cc=d(ya),ar=r(ya,"P",{});var Qu=i(ar);pc=s(Qu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Qu.forEach(t),hc=d(ya),nt=r(ya,"DIV",{class:!0});var On=i(nt);v(bo.$$.fragment,On),mc=d(On),rr=r(On,"P",{});var Gu=i(rr);fc=s(Gu,"Defines the computation performed at every call."),Gu.forEach(t),uc=d(On),ir=r(On,"P",{});var Ku=i(ir);gc=s(Ku,"Should be overridden by all subclasses."),Ku.forEach(t),_c=d(On),v(mn.$$.fragment,On),On.forEach(t),ya.forEach(t),Mi=d(n),Bt=r(n,"H2",{class:!0});var il=i(Bt);fn=r(il,"A",{id:!0,class:!0,href:!0});var Ju=i(fn);lr=r(Ju,"SPAN",{});var Xu=i(lr);v(ko.$$.fragment,Xu),Xu.forEach(t),Ju.forEach(t),bc=d(il),dr=r(il,"SPAN",{});var Yu=i(dr);kc=s(Yu,"DebertaV2ForMaskedLM"),Yu.forEach(t),il.forEach(t),xi=d(n),Ye=r(n,"DIV",{class:!0});var Nn=i(Ye);v(vo.$$.fragment,Nn),vc=d(Nn),At=r(Nn,"P",{});var Da=i(At);Tc=s(Da,"DeBERTa Model with a "),cr=r(Da,"CODE",{});var Zu=i(cr);wc=s(Zu,"language modeling"),Zu.forEach(t),yc=s(Da,` head on top.
The DeBERTa model was proposed in `),To=r(Da,"A",{href:!0,rel:!0});var eg=i(To);Dc=s(eg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),eg.forEach(t),$c=s(Da,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Da.forEach(t),Ec=d(Nn),wo=r(Nn,"P",{});var ll=i(wo);Fc=s(ll,"This model is also a PyTorch "),yo=r(ll,"A",{href:!0,rel:!0});var tg=i(yo);Vc=s(tg,"torch.nn.Module"),tg.forEach(t),qc=s(ll," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ll.forEach(t),zc=d(Nn),Re=r(Nn,"DIV",{class:!0});var at=i(Re);v(Do.$$.fragment,at),Mc=d(at),Lt=r(at,"P",{});var $a=i(Lt);xc=s($a,"The "),ia=r($a,"A",{href:!0});var ng=i(ia);jc=s(ng,"DebertaV2ForMaskedLM"),ng.forEach(t),Cc=s($a," forward method, overrides the "),pr=r($a,"CODE",{});var og=i(pr);Rc=s(og,"__call__"),og.forEach(t),Pc=s($a," special method."),$a.forEach(t),Bc=d(at),v(un.$$.fragment,at),Ac=d(at),hr=r(at,"P",{});var sg=i(hr);Lc=s(sg,"Example:"),sg.forEach(t),Ic=d(at),v($o.$$.fragment,at),Sc=d(at),v(Eo.$$.fragment,at),at.forEach(t),Nn.forEach(t),ji=d(n),It=r(n,"H2",{class:!0});var dl=i(It);gn=r(dl,"A",{id:!0,class:!0,href:!0});var ag=i(gn);mr=r(ag,"SPAN",{});var rg=i(mr);v(Fo.$$.fragment,rg),rg.forEach(t),ag.forEach(t),Oc=d(dl),fr=r(dl,"SPAN",{});var ig=i(fr);Nc=s(ig,"DebertaV2ForSequenceClassification"),ig.forEach(t),dl.forEach(t),Ci=d(n),We=r(n,"DIV",{class:!0});var Tt=i(We);v(Vo.$$.fragment,Tt),Wc=d(Tt),ur=r(Tt,"P",{});var lg=i(ur);Hc=s(lg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),lg.forEach(t),Uc=d(Tt),qo=r(Tt,"P",{});var cl=i(qo);Qc=s(cl,"The DeBERTa model was proposed in "),zo=r(cl,"A",{href:!0,rel:!0});var dg=i(zo);Gc=s(dg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),dg.forEach(t),Kc=s(cl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),cl.forEach(t),Jc=d(Tt),Mo=r(Tt,"P",{});var pl=i(Mo);Xc=s(pl,"This model is also a PyTorch "),xo=r(pl,"A",{href:!0,rel:!0});var cg=i(xo);Yc=s(cg,"torch.nn.Module"),cg.forEach(t),Zc=s(pl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),pl.forEach(t),ep=d(Tt),ke=r(Tt,"DIV",{class:!0});var ze=i(ke);v(jo.$$.fragment,ze),tp=d(ze),St=r(ze,"P",{});var Ea=i(St);np=s(Ea,"The "),la=r(Ea,"A",{href:!0});var pg=i(la);op=s(pg,"DebertaV2ForSequenceClassification"),pg.forEach(t),sp=s(Ea," forward method, overrides the "),gr=r(Ea,"CODE",{});var hg=i(gr);ap=s(hg,"__call__"),hg.forEach(t),rp=s(Ea," special method."),Ea.forEach(t),ip=d(ze),v(_n.$$.fragment,ze),lp=d(ze),_r=r(ze,"P",{});var mg=i(_r);dp=s(mg,"Example of single-label classification:"),mg.forEach(t),cp=d(ze),v(Co.$$.fragment,ze),pp=d(ze),v(Ro.$$.fragment,ze),hp=d(ze),br=r(ze,"P",{});var fg=i(br);mp=s(fg,"Example of multi-label classification:"),fg.forEach(t),fp=d(ze),v(Po.$$.fragment,ze),up=d(ze),v(Bo.$$.fragment,ze),ze.forEach(t),Tt.forEach(t),Ri=d(n),Ot=r(n,"H2",{class:!0});var hl=i(Ot);bn=r(hl,"A",{id:!0,class:!0,href:!0});var ug=i(bn);kr=r(ug,"SPAN",{});var gg=i(kr);v(Ao.$$.fragment,gg),gg.forEach(t),ug.forEach(t),gp=d(hl),vr=r(hl,"SPAN",{});var _g=i(vr);_p=s(_g,"DebertaV2ForTokenClassification"),_g.forEach(t),hl.forEach(t),Pi=d(n),He=r(n,"DIV",{class:!0});var wt=i(He);v(Lo.$$.fragment,wt),bp=d(wt),Tr=r(wt,"P",{});var bg=i(Tr);kp=s(bg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),bg.forEach(t),vp=d(wt),Io=r(wt,"P",{});var ml=i(Io);Tp=s(ml,"The DeBERTa model was proposed in "),So=r(ml,"A",{href:!0,rel:!0});var kg=i(So);wp=s(kg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),kg.forEach(t),yp=s(ml,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ml.forEach(t),Dp=d(wt),Oo=r(wt,"P",{});var fl=i(Oo);$p=s(fl,"This model is also a PyTorch "),No=r(fl,"A",{href:!0,rel:!0});var vg=i(No);Ep=s(vg,"torch.nn.Module"),vg.forEach(t),Fp=s(fl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),fl.forEach(t),Vp=d(wt),Pe=r(wt,"DIV",{class:!0});var rt=i(Pe);v(Wo.$$.fragment,rt),qp=d(rt),Nt=r(rt,"P",{});var Fa=i(Nt);zp=s(Fa,"The "),da=r(Fa,"A",{href:!0});var Tg=i(da);Mp=s(Tg,"DebertaV2ForTokenClassification"),Tg.forEach(t),xp=s(Fa," forward method, overrides the "),wr=r(Fa,"CODE",{});var wg=i(wr);jp=s(wg,"__call__"),wg.forEach(t),Cp=s(Fa," special method."),Fa.forEach(t),Rp=d(rt),v(kn.$$.fragment,rt),Pp=d(rt),yr=r(rt,"P",{});var yg=i(yr);Bp=s(yg,"Example:"),yg.forEach(t),Ap=d(rt),v(Ho.$$.fragment,rt),Lp=d(rt),v(Uo.$$.fragment,rt),rt.forEach(t),wt.forEach(t),Bi=d(n),Wt=r(n,"H2",{class:!0});var ul=i(Wt);vn=r(ul,"A",{id:!0,class:!0,href:!0});var Dg=i(vn);Dr=r(Dg,"SPAN",{});var $g=i(Dr);v(Qo.$$.fragment,$g),$g.forEach(t),Dg.forEach(t),Ip=d(ul),$r=r(ul,"SPAN",{});var Eg=i($r);Sp=s(Eg,"DebertaV2ForQuestionAnswering"),Eg.forEach(t),ul.forEach(t),Ai=d(n),Ue=r(n,"DIV",{class:!0});var yt=i(Ue);v(Go.$$.fragment,yt),Op=d(yt),Ht=r(yt,"P",{});var Va=i(Ht);Np=s(Va,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Er=r(Va,"CODE",{});var Fg=i(Er);Wp=s(Fg,"span start logits"),Fg.forEach(t),Hp=s(Va," and "),Fr=r(Va,"CODE",{});var Vg=i(Fr);Up=s(Vg,"span end logits"),Vg.forEach(t),Qp=s(Va,")."),Va.forEach(t),Gp=d(yt),Ko=r(yt,"P",{});var gl=i(Ko);Kp=s(gl,"The DeBERTa model was proposed in "),Jo=r(gl,"A",{href:!0,rel:!0});var qg=i(Jo);Jp=s(qg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qg.forEach(t),Xp=s(gl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gl.forEach(t),Yp=d(yt),Xo=r(yt,"P",{});var _l=i(Xo);Zp=s(_l,"This model is also a PyTorch "),Yo=r(_l,"A",{href:!0,rel:!0});var zg=i(Yo);eh=s(zg,"torch.nn.Module"),zg.forEach(t),th=s(_l," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),_l.forEach(t),nh=d(yt),Be=r(yt,"DIV",{class:!0});var it=i(Be);v(Zo.$$.fragment,it),oh=d(it),Ut=r(it,"P",{});var qa=i(Ut);sh=s(qa,"The "),ca=r(qa,"A",{href:!0});var Mg=i(ca);ah=s(Mg,"DebertaV2ForQuestionAnswering"),Mg.forEach(t),rh=s(qa," forward method, overrides the "),Vr=r(qa,"CODE",{});var xg=i(Vr);ih=s(xg,"__call__"),xg.forEach(t),lh=s(qa," special method."),qa.forEach(t),dh=d(it),v(Tn.$$.fragment,it),ch=d(it),qr=r(it,"P",{});var jg=i(qr);ph=s(jg,"Example:"),jg.forEach(t),hh=d(it),v(es.$$.fragment,it),mh=d(it),v(ts.$$.fragment,it),it.forEach(t),yt.forEach(t),Li=d(n),Qt=r(n,"H2",{class:!0});var bl=i(Qt);wn=r(bl,"A",{id:!0,class:!0,href:!0});var Cg=i(wn);zr=r(Cg,"SPAN",{});var Rg=i(zr);v(ns.$$.fragment,Rg),Rg.forEach(t),Cg.forEach(t),fh=d(bl),Mr=r(bl,"SPAN",{});var Pg=i(Mr);uh=s(Pg,"TFDebertaV2Model"),Pg.forEach(t),bl.forEach(t),Ii=d(n),Qe=r(n,"DIV",{class:!0});var Dt=i(Qe);v(os.$$.fragment,Dt),gh=d(Dt),ss=r(Dt,"P",{});var kl=i(ss);_h=s(kl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),as=r(kl,"A",{href:!0,rel:!0});var Bg=i(as);bh=s(Bg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Bg.forEach(t),kh=s(kl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kl.forEach(t),vh=d(Dt),rs=r(Dt,"P",{});var vl=i(rs);Th=s(vl,"This model is also a "),is=r(vl,"A",{href:!0,rel:!0});var Ag=i(is);wh=s(Ag,"tf.keras.Model"),Ag.forEach(t),yh=s(vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vl.forEach(t),Dh=d(Dt),v(yn.$$.fragment,Dt),$h=d(Dt),Je=r(Dt,"DIV",{class:!0});var $t=i(Je);v(ls.$$.fragment,$t),Eh=d($t),Gt=r($t,"P",{});var za=i(Gt);Fh=s(za,"The "),pa=r(za,"A",{href:!0});var Lg=i(pa);Vh=s(Lg,"TFDebertaV2Model"),Lg.forEach(t),qh=s(za," forward method, overrides the "),xr=r(za,"CODE",{});var Ig=i(xr);zh=s(Ig,"__call__"),Ig.forEach(t),Mh=s(za," special method."),za.forEach(t),xh=d($t),v(Dn.$$.fragment,$t),jh=d($t),jr=r($t,"P",{});var Sg=i(jr);Ch=s(Sg,"Example:"),Sg.forEach(t),Rh=d($t),v(ds.$$.fragment,$t),$t.forEach(t),Dt.forEach(t),Si=d(n),Kt=r(n,"H2",{class:!0});var Tl=i(Kt);$n=r(Tl,"A",{id:!0,class:!0,href:!0});var Og=i($n);Cr=r(Og,"SPAN",{});var Ng=i(Cr);v(cs.$$.fragment,Ng),Ng.forEach(t),Og.forEach(t),Ph=d(Tl),Rr=r(Tl,"SPAN",{});var Wg=i(Rr);Bh=s(Wg,"TFDebertaV2PreTrainedModel"),Wg.forEach(t),Tl.forEach(t),Oi=d(n),_t=r(n,"DIV",{class:!0});var Ma=i(_t);v(ps.$$.fragment,Ma),Ah=d(Ma),Pr=r(Ma,"P",{});var Hg=i(Pr);Lh=s(Hg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Hg.forEach(t),Ih=d(Ma),ot=r(Ma,"DIV",{class:!0});var Wn=i(ot);v(hs.$$.fragment,Wn),Sh=d(Wn),Br=r(Wn,"P",{});var Ug=i(Br);Oh=s(Ug,"Calls the model on new inputs and returns the outputs as tensors."),Ug.forEach(t),Nh=d(Wn),ms=r(Wn,"P",{});var wl=i(ms);Wh=s(wl,"In this case "),Ar=r(wl,"CODE",{});var Qg=i(Ar);Hh=s(Qg,"call()"),Qg.forEach(t),Uh=s(wl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),wl.forEach(t),Qh=d(Wn),Ze=r(Wn,"P",{});var Et=i(Ze);Gh=s(Et,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Lr=r(Et,"CODE",{});var Gg=i(Lr);Kh=s(Gg,"tf.keras.Model"),Gg.forEach(t),Jh=s(Et,`.
To call a model on an input, always use the `),Ir=r(Et,"CODE",{});var Kg=i(Ir);Xh=s(Kg,"__call__()"),Kg.forEach(t),Yh=s(Et,` method,
i.e. `),Sr=r(Et,"CODE",{});var Jg=i(Sr);Zh=s(Jg,"model(inputs)"),Jg.forEach(t),em=s(Et,", which relies on the underlying "),Or=r(Et,"CODE",{});var Xg=i(Or);tm=s(Xg,"call()"),Xg.forEach(t),nm=s(Et," method."),Et.forEach(t),Wn.forEach(t),Ma.forEach(t),Ni=d(n),Jt=r(n,"H2",{class:!0});var yl=i(Jt);En=r(yl,"A",{id:!0,class:!0,href:!0});var Yg=i(En);Nr=r(Yg,"SPAN",{});var Zg=i(Nr);v(fs.$$.fragment,Zg),Zg.forEach(t),Yg.forEach(t),om=d(yl),Wr=r(yl,"SPAN",{});var e_=i(Wr);sm=s(e_,"TFDebertaV2ForMaskedLM"),e_.forEach(t),yl.forEach(t),Wi=d(n),Ge=r(n,"DIV",{class:!0});var Ft=i(Ge);v(us.$$.fragment,Ft),am=d(Ft),Xt=r(Ft,"P",{});var xa=i(Xt);rm=s(xa,"DeBERTa Model with a "),Hr=r(xa,"CODE",{});var t_=i(Hr);im=s(t_,"language modeling"),t_.forEach(t),lm=s(xa,` head on top.
The DeBERTa model was proposed in `),gs=r(xa,"A",{href:!0,rel:!0});var n_=i(gs);dm=s(n_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),n_.forEach(t),cm=s(xa,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),xa.forEach(t),pm=d(Ft),_s=r(Ft,"P",{});var Dl=i(_s);hm=s(Dl,"This model is also a "),bs=r(Dl,"A",{href:!0,rel:!0});var o_=i(bs);mm=s(o_,"tf.keras.Model"),o_.forEach(t),fm=s(Dl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dl.forEach(t),um=d(Ft),v(Fn.$$.fragment,Ft),gm=d(Ft),Ae=r(Ft,"DIV",{class:!0});var lt=i(Ae);v(ks.$$.fragment,lt),_m=d(lt),Yt=r(lt,"P",{});var ja=i(Yt);bm=s(ja,"The "),ha=r(ja,"A",{href:!0});var s_=i(ha);km=s(s_,"TFDebertaV2ForMaskedLM"),s_.forEach(t),vm=s(ja," forward method, overrides the "),Ur=r(ja,"CODE",{});var a_=i(Ur);Tm=s(a_,"__call__"),a_.forEach(t),wm=s(ja," special method."),ja.forEach(t),ym=d(lt),v(Vn.$$.fragment,lt),Dm=d(lt),Qr=r(lt,"P",{});var r_=i(Qr);$m=s(r_,"Example:"),r_.forEach(t),Em=d(lt),v(vs.$$.fragment,lt),Fm=d(lt),v(Ts.$$.fragment,lt),lt.forEach(t),Ft.forEach(t),Hi=d(n),Zt=r(n,"H2",{class:!0});var $l=i(Zt);qn=r($l,"A",{id:!0,class:!0,href:!0});var i_=i(qn);Gr=r(i_,"SPAN",{});var l_=i(Gr);v(ws.$$.fragment,l_),l_.forEach(t),i_.forEach(t),Vm=d($l),Kr=r($l,"SPAN",{});var d_=i(Kr);qm=s(d_,"TFDebertaV2ForSequenceClassification"),d_.forEach(t),$l.forEach(t),Ui=d(n),xe=r(n,"DIV",{class:!0});var dt=i(xe);v(ys.$$.fragment,dt),zm=d(dt),Jr=r(dt,"P",{});var c_=i(Jr);Mm=s(c_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),c_.forEach(t),xm=d(dt),Ds=r(dt,"P",{});var El=i(Ds);jm=s(El,"The DeBERTa model was proposed in "),$s=r(El,"A",{href:!0,rel:!0});var p_=i($s);Cm=s(p_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),p_.forEach(t),Rm=s(El,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),El.forEach(t),Pm=d(dt),Es=r(dt,"P",{});var Fl=i(Es);Bm=s(Fl,"This model is also a "),Fs=r(Fl,"A",{href:!0,rel:!0});var h_=i(Fs);Am=s(h_,"tf.keras.Model"),h_.forEach(t),Lm=s(Fl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fl.forEach(t),Im=d(dt),v(zn.$$.fragment,dt),Sm=d(dt),Le=r(dt,"DIV",{class:!0});var ct=i(Le);v(Vs.$$.fragment,ct),Om=d(ct),en=r(ct,"P",{});var Ca=i(en);Nm=s(Ca,"The "),ma=r(Ca,"A",{href:!0});var m_=i(ma);Wm=s(m_,"TFDebertaV2ForSequenceClassification"),m_.forEach(t),Hm=s(Ca," forward method, overrides the "),Xr=r(Ca,"CODE",{});var f_=i(Xr);Um=s(f_,"__call__"),f_.forEach(t),Qm=s(Ca," special method."),Ca.forEach(t),Gm=d(ct),v(Mn.$$.fragment,ct),Km=d(ct),Yr=r(ct,"P",{});var u_=i(Yr);Jm=s(u_,"Example:"),u_.forEach(t),Xm=d(ct),v(qs.$$.fragment,ct),Ym=d(ct),v(zs.$$.fragment,ct),ct.forEach(t),dt.forEach(t),Qi=d(n),tn=r(n,"H2",{class:!0});var Vl=i(tn);xn=r(Vl,"A",{id:!0,class:!0,href:!0});var g_=i(xn);Zr=r(g_,"SPAN",{});var __=i(Zr);v(Ms.$$.fragment,__),__.forEach(t),g_.forEach(t),Zm=d(Vl),ei=r(Vl,"SPAN",{});var b_=i(ei);ef=s(b_,"TFDebertaV2ForTokenClassification"),b_.forEach(t),Vl.forEach(t),Gi=d(n),je=r(n,"DIV",{class:!0});var pt=i(je);v(xs.$$.fragment,pt),tf=d(pt),ti=r(pt,"P",{});var k_=i(ti);nf=s(k_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),k_.forEach(t),of=d(pt),js=r(pt,"P",{});var ql=i(js);sf=s(ql,"The DeBERTa model was proposed in "),Cs=r(ql,"A",{href:!0,rel:!0});var v_=i(Cs);af=s(v_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),v_.forEach(t),rf=s(ql,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ql.forEach(t),lf=d(pt),Rs=r(pt,"P",{});var zl=i(Rs);df=s(zl,"This model is also a "),Ps=r(zl,"A",{href:!0,rel:!0});var T_=i(Ps);cf=s(T_,"tf.keras.Model"),T_.forEach(t),pf=s(zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zl.forEach(t),hf=d(pt),v(jn.$$.fragment,pt),mf=d(pt),Ie=r(pt,"DIV",{class:!0});var ht=i(Ie);v(Bs.$$.fragment,ht),ff=d(ht),nn=r(ht,"P",{});var Ra=i(nn);uf=s(Ra,"The "),fa=r(Ra,"A",{href:!0});var w_=i(fa);gf=s(w_,"TFDebertaV2ForTokenClassification"),w_.forEach(t),_f=s(Ra," forward method, overrides the "),ni=r(Ra,"CODE",{});var y_=i(ni);bf=s(y_,"__call__"),y_.forEach(t),kf=s(Ra," special method."),Ra.forEach(t),vf=d(ht),v(Cn.$$.fragment,ht),Tf=d(ht),oi=r(ht,"P",{});var D_=i(oi);wf=s(D_,"Example:"),D_.forEach(t),yf=d(ht),v(As.$$.fragment,ht),Df=d(ht),v(Ls.$$.fragment,ht),ht.forEach(t),pt.forEach(t),Ki=d(n),on=r(n,"H2",{class:!0});var Ml=i(on);Rn=r(Ml,"A",{id:!0,class:!0,href:!0});var $_=i(Rn);si=r($_,"SPAN",{});var E_=i(si);v(Is.$$.fragment,E_),E_.forEach(t),$_.forEach(t),$f=d(Ml),ai=r(Ml,"SPAN",{});var F_=i(ai);Ef=s(F_,"TFDebertaV2ForQuestionAnswering"),F_.forEach(t),Ml.forEach(t),Ji=d(n),Ce=r(n,"DIV",{class:!0});var mt=i(Ce);v(Ss.$$.fragment,mt),Ff=d(mt),sn=r(mt,"P",{});var Pa=i(sn);Vf=s(Pa,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ri=r(Pa,"CODE",{});var V_=i(ri);qf=s(V_,"span start logits"),V_.forEach(t),zf=s(Pa," and "),ii=r(Pa,"CODE",{});var q_=i(ii);Mf=s(q_,"span end logits"),q_.forEach(t),xf=s(Pa,")."),Pa.forEach(t),jf=d(mt),Os=r(mt,"P",{});var xl=i(Os);Cf=s(xl,"The DeBERTa model was proposed in "),Ns=r(xl,"A",{href:!0,rel:!0});var z_=i(Ns);Rf=s(z_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),z_.forEach(t),Pf=s(xl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),xl.forEach(t),Bf=d(mt),Ws=r(mt,"P",{});var jl=i(Ws);Af=s(jl,"This model is also a "),Hs=r(jl,"A",{href:!0,rel:!0});var M_=i(Hs);Lf=s(M_,"tf.keras.Model"),M_.forEach(t),If=s(jl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jl.forEach(t),Sf=d(mt),v(Pn.$$.fragment,mt),Of=d(mt),Se=r(mt,"DIV",{class:!0});var ft=i(Se);v(Us.$$.fragment,ft),Nf=d(ft),an=r(ft,"P",{});var Ba=i(an);Wf=s(Ba,"The "),ua=r(Ba,"A",{href:!0});var x_=i(ua);Hf=s(x_,"TFDebertaV2ForQuestionAnswering"),x_.forEach(t),Uf=s(Ba," forward method, overrides the "),li=r(Ba,"CODE",{});var j_=i(li);Qf=s(j_,"__call__"),j_.forEach(t),Gf=s(Ba," special method."),Ba.forEach(t),Kf=d(ft),v(Bn.$$.fragment,ft),Jf=d(ft),di=r(ft,"P",{});var C_=i(di);Xf=s(C_,"Example:"),C_.forEach(t),Yf=d(ft),v(Qs.$$.fragment,ft),Zf=d(ft),v(Gs.$$.fragment,ft),ft.forEach(t),mt.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(ob)),c(_,"id","debertav2"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#debertav2"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(q,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(B,"href","https://github.com/microsoft/DeBERTa"),c(B,"rel","nofollow"),c(C,"href","https://github.com/microsoft/DeBERTa"),c(C,"rel","nofollow"),c(ne,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),c(ne,"rel","nofollow"),c(A,"href","https://github.com/google/sentencepiece"),c(A,"rel","nofollow"),c(Hn,"href","https://huggingface.co/DeBERTa"),c(Hn,"rel","nofollow"),c(Un,"href","https://huggingface.co/kamalkraj"),c(Un,"rel","nofollow"),c(Qn,"href","https://github.com/microsoft/DeBERTa"),c(Qn,"rel","nofollow"),c(rn,"id","transformers.DebertaV2Config"),c(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(rn,"href","#transformers.DebertaV2Config"),c(Vt,"class","relative group"),c(na,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(Jn,"href","https://huggingface.co/microsoft/deberta-base"),c(Jn,"rel","nofollow"),c(oa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(sa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ut,"class","docstring"),c(ln,"id","transformers.DebertaV2Tokenizer"),c(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ln,"href","#transformers.DebertaV2Tokenizer"),c(Mt,"class","relative group"),c(eo,"href","https://github.com/google/sentencepiece"),c(eo,"rel","nofollow"),c(bt,"class","docstring"),c(dn,"class","docstring"),c(tt,"class","docstring"),c(aa,"class","docstring"),c(Me,"class","docstring"),c(cn,"id","transformers.DebertaV2Model"),c(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(cn,"href","#transformers.DebertaV2Model"),c(Ct,"class","relative group"),c(po,"href","https://arxiv.org/abs/2006.03654"),c(po,"rel","nofollow"),c(mo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(mo,"rel","nofollow"),c(ra,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(Ke,"class","docstring"),c(Xe,"class","docstring"),c(hn,"id","transformers.DebertaV2PreTrainedModel"),c(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(hn,"href","#transformers.DebertaV2PreTrainedModel"),c(Pt,"class","relative group"),c(nt,"class","docstring"),c(gt,"class","docstring"),c(fn,"id","transformers.DebertaV2ForMaskedLM"),c(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fn,"href","#transformers.DebertaV2ForMaskedLM"),c(Bt,"class","relative group"),c(To,"href","https://arxiv.org/abs/2006.03654"),c(To,"rel","nofollow"),c(yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(yo,"rel","nofollow"),c(ia,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),c(Re,"class","docstring"),c(Ye,"class","docstring"),c(gn,"id","transformers.DebertaV2ForSequenceClassification"),c(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(gn,"href","#transformers.DebertaV2ForSequenceClassification"),c(It,"class","relative group"),c(zo,"href","https://arxiv.org/abs/2006.03654"),c(zo,"rel","nofollow"),c(xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(xo,"rel","nofollow"),c(la,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),c(ke,"class","docstring"),c(We,"class","docstring"),c(bn,"id","transformers.DebertaV2ForTokenClassification"),c(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bn,"href","#transformers.DebertaV2ForTokenClassification"),c(Ot,"class","relative group"),c(So,"href","https://arxiv.org/abs/2006.03654"),c(So,"rel","nofollow"),c(No,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(No,"rel","nofollow"),c(da,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),c(Pe,"class","docstring"),c(He,"class","docstring"),c(vn,"id","transformers.DebertaV2ForQuestionAnswering"),c(vn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vn,"href","#transformers.DebertaV2ForQuestionAnswering"),c(Wt,"class","relative group"),c(Jo,"href","https://arxiv.org/abs/2006.03654"),c(Jo,"rel","nofollow"),c(Yo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Yo,"rel","nofollow"),c(ca,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),c(Be,"class","docstring"),c(Ue,"class","docstring"),c(wn,"id","transformers.TFDebertaV2Model"),c(wn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wn,"href","#transformers.TFDebertaV2Model"),c(Qt,"class","relative group"),c(as,"href","https://arxiv.org/abs/2006.03654"),c(as,"rel","nofollow"),c(is,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(is,"rel","nofollow"),c(pa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),c(Je,"class","docstring"),c(Qe,"class","docstring"),c($n,"id","transformers.TFDebertaV2PreTrainedModel"),c($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($n,"href","#transformers.TFDebertaV2PreTrainedModel"),c(Kt,"class","relative group"),c(ot,"class","docstring"),c(_t,"class","docstring"),c(En,"id","transformers.TFDebertaV2ForMaskedLM"),c(En,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(En,"href","#transformers.TFDebertaV2ForMaskedLM"),c(Jt,"class","relative group"),c(gs,"href","https://arxiv.org/abs/2006.03654"),c(gs,"rel","nofollow"),c(bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(bs,"rel","nofollow"),c(ha,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),c(Ae,"class","docstring"),c(Ge,"class","docstring"),c(qn,"id","transformers.TFDebertaV2ForSequenceClassification"),c(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qn,"href","#transformers.TFDebertaV2ForSequenceClassification"),c(Zt,"class","relative group"),c($s,"href","https://arxiv.org/abs/2006.03654"),c($s,"rel","nofollow"),c(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fs,"rel","nofollow"),c(ma,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),c(Le,"class","docstring"),c(xe,"class","docstring"),c(xn,"id","transformers.TFDebertaV2ForTokenClassification"),c(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xn,"href","#transformers.TFDebertaV2ForTokenClassification"),c(tn,"class","relative group"),c(Cs,"href","https://arxiv.org/abs/2006.03654"),c(Cs,"rel","nofollow"),c(Ps,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ps,"rel","nofollow"),c(fa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),c(Ie,"class","docstring"),c(je,"class","docstring"),c(Rn,"id","transformers.TFDebertaV2ForQuestionAnswering"),c(Rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rn,"href","#transformers.TFDebertaV2ForQuestionAnswering"),c(on,"class","relative group"),c(Ns,"href","https://arxiv.org/abs/2006.03654"),c(Ns,"rel","nofollow"),c(Hs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Hs,"rel","nofollow"),c(ua,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),c(Se,"class","docstring"),c(Ce,"class","docstring")},m(n,f){e(document.head,h),m(n,F,f),m(n,u,f),e(u,_),e(_,$),T(b,$,null),e(u,g),e(u,V),e(V,de),m(n,J,f),m(n,q,f),e(q,Y),e(Y,L),T(ee,L,null),e(q,ce),e(q,I),e(I,pe),m(n,re,f),m(n,N,f),e(N,R),e(N,te),e(te,Z),e(N,z),m(n,x,f),m(n,oe,f),e(oe,W),m(n,ie,f),m(n,se,f),e(se,H),m(n,le,f),m(n,ae,f),e(ae,M),e(M,he),e(M,B),e(B,me),e(M,fe),m(n,O,f),m(n,X,f),e(X,ue),e(X,C),e(C,ge),e(X,U),e(X,ne),e(ne,p),m(n,E,f),m(n,G,f),e(G,$e),m(n,De,f),m(n,j,f),e(j,_e),e(_e,we),e(we,Ee),e(_e,P),e(_e,A),e(A,Fe),e(_e,Ve),e(j,Q),e(j,ve),e(ve,ye),e(ye,be),e(ve,qe),e(j,Cl),e(j,Zs),e(Zs,Aa),e(Aa,Rl),e(Zs,Pl),e(j,Bl),e(j,ea),e(ea,La),e(La,Al),e(ea,Ll),e(j,Il),e(j,ta),e(ta,Ia),e(Ia,Sl),e(ta,Ol),m(n,wi,f),m(n,et,f),e(et,Nl),e(et,Hn),e(Hn,Wl),e(et,Hl),e(et,Un),e(Un,Ul),e(et,Ql),e(et,Qn),e(Qn,Gl),e(et,Kl),m(n,yi,f),m(n,Vt,f),e(Vt,rn),e(rn,Sa),T(Gn,Sa,null),e(Vt,Jl),e(Vt,Oa),e(Oa,Xl),m(n,Di,f),m(n,ut,f),T(Kn,ut,null),e(ut,Yl),e(ut,qt),e(qt,Zl),e(qt,na),e(na,ed),e(qt,td),e(qt,Jn),e(Jn,nd),e(qt,od),e(ut,sd),e(ut,zt),e(zt,ad),e(zt,oa),e(oa,rd),e(zt,id),e(zt,sa),e(sa,ld),e(zt,dd),m(n,$i,f),m(n,Mt,f),e(Mt,ln),e(ln,Na),T(Xn,Na,null),e(Mt,cd),e(Mt,Wa),e(Wa,pd),m(n,Ei,f),m(n,Me,f),T(Yn,Me,null),e(Me,hd),e(Me,Zn),e(Zn,md),e(Zn,eo),e(eo,fd),e(Zn,ud),e(Me,gd),e(Me,bt),T(to,bt,null),e(bt,_d),e(bt,Ha),e(Ha,bd),e(bt,kd),e(bt,no),e(no,Ua),e(Ua,vd),e(no,Td),e(no,Qa),e(Qa,wd),e(Me,yd),e(Me,dn),T(oo,dn,null),e(dn,Dd),e(dn,xt),e(xt,$d),e(xt,Ga),e(Ga,Ed),e(xt,Fd),e(xt,Ka),e(Ka,Vd),e(xt,qd),e(Me,zd),e(Me,tt),T(so,tt,null),e(tt,Md),e(tt,Ja),e(Ja,xd),e(tt,jd),T(ao,tt,null),e(tt,Cd),e(tt,jt),e(jt,Rd),e(jt,Xa),e(Xa,Pd),e(jt,Bd),e(jt,Ya),e(Ya,Ad),e(jt,Ld),e(Me,Id),e(Me,aa),T(ro,aa,null),m(n,Fi,f),m(n,Ct,f),e(Ct,cn),e(cn,Za),T(io,Za,null),e(Ct,Sd),e(Ct,er),e(er,Od),m(n,Vi,f),m(n,Xe,f),T(lo,Xe,null),e(Xe,Nd),e(Xe,co),e(co,Wd),e(co,po),e(po,Hd),e(co,Ud),e(Xe,Qd),e(Xe,ho),e(ho,Gd),e(ho,mo),e(mo,Kd),e(ho,Jd),e(Xe,Xd),e(Xe,Ke),T(fo,Ke,null),e(Ke,Yd),e(Ke,Rt),e(Rt,Zd),e(Rt,ra),e(ra,ec),e(Rt,tc),e(Rt,tr),e(tr,nc),e(Rt,oc),e(Ke,sc),T(pn,Ke,null),e(Ke,ac),e(Ke,nr),e(nr,rc),e(Ke,ic),T(uo,Ke,null),m(n,qi,f),m(n,Pt,f),e(Pt,hn),e(hn,or),T(go,or,null),e(Pt,lc),e(Pt,sr),e(sr,dc),m(n,zi,f),m(n,gt,f),T(_o,gt,null),e(gt,cc),e(gt,ar),e(ar,pc),e(gt,hc),e(gt,nt),T(bo,nt,null),e(nt,mc),e(nt,rr),e(rr,fc),e(nt,uc),e(nt,ir),e(ir,gc),e(nt,_c),T(mn,nt,null),m(n,Mi,f),m(n,Bt,f),e(Bt,fn),e(fn,lr),T(ko,lr,null),e(Bt,bc),e(Bt,dr),e(dr,kc),m(n,xi,f),m(n,Ye,f),T(vo,Ye,null),e(Ye,vc),e(Ye,At),e(At,Tc),e(At,cr),e(cr,wc),e(At,yc),e(At,To),e(To,Dc),e(At,$c),e(Ye,Ec),e(Ye,wo),e(wo,Fc),e(wo,yo),e(yo,Vc),e(wo,qc),e(Ye,zc),e(Ye,Re),T(Do,Re,null),e(Re,Mc),e(Re,Lt),e(Lt,xc),e(Lt,ia),e(ia,jc),e(Lt,Cc),e(Lt,pr),e(pr,Rc),e(Lt,Pc),e(Re,Bc),T(un,Re,null),e(Re,Ac),e(Re,hr),e(hr,Lc),e(Re,Ic),T($o,Re,null),e(Re,Sc),T(Eo,Re,null),m(n,ji,f),m(n,It,f),e(It,gn),e(gn,mr),T(Fo,mr,null),e(It,Oc),e(It,fr),e(fr,Nc),m(n,Ci,f),m(n,We,f),T(Vo,We,null),e(We,Wc),e(We,ur),e(ur,Hc),e(We,Uc),e(We,qo),e(qo,Qc),e(qo,zo),e(zo,Gc),e(qo,Kc),e(We,Jc),e(We,Mo),e(Mo,Xc),e(Mo,xo),e(xo,Yc),e(Mo,Zc),e(We,ep),e(We,ke),T(jo,ke,null),e(ke,tp),e(ke,St),e(St,np),e(St,la),e(la,op),e(St,sp),e(St,gr),e(gr,ap),e(St,rp),e(ke,ip),T(_n,ke,null),e(ke,lp),e(ke,_r),e(_r,dp),e(ke,cp),T(Co,ke,null),e(ke,pp),T(Ro,ke,null),e(ke,hp),e(ke,br),e(br,mp),e(ke,fp),T(Po,ke,null),e(ke,up),T(Bo,ke,null),m(n,Ri,f),m(n,Ot,f),e(Ot,bn),e(bn,kr),T(Ao,kr,null),e(Ot,gp),e(Ot,vr),e(vr,_p),m(n,Pi,f),m(n,He,f),T(Lo,He,null),e(He,bp),e(He,Tr),e(Tr,kp),e(He,vp),e(He,Io),e(Io,Tp),e(Io,So),e(So,wp),e(Io,yp),e(He,Dp),e(He,Oo),e(Oo,$p),e(Oo,No),e(No,Ep),e(Oo,Fp),e(He,Vp),e(He,Pe),T(Wo,Pe,null),e(Pe,qp),e(Pe,Nt),e(Nt,zp),e(Nt,da),e(da,Mp),e(Nt,xp),e(Nt,wr),e(wr,jp),e(Nt,Cp),e(Pe,Rp),T(kn,Pe,null),e(Pe,Pp),e(Pe,yr),e(yr,Bp),e(Pe,Ap),T(Ho,Pe,null),e(Pe,Lp),T(Uo,Pe,null),m(n,Bi,f),m(n,Wt,f),e(Wt,vn),e(vn,Dr),T(Qo,Dr,null),e(Wt,Ip),e(Wt,$r),e($r,Sp),m(n,Ai,f),m(n,Ue,f),T(Go,Ue,null),e(Ue,Op),e(Ue,Ht),e(Ht,Np),e(Ht,Er),e(Er,Wp),e(Ht,Hp),e(Ht,Fr),e(Fr,Up),e(Ht,Qp),e(Ue,Gp),e(Ue,Ko),e(Ko,Kp),e(Ko,Jo),e(Jo,Jp),e(Ko,Xp),e(Ue,Yp),e(Ue,Xo),e(Xo,Zp),e(Xo,Yo),e(Yo,eh),e(Xo,th),e(Ue,nh),e(Ue,Be),T(Zo,Be,null),e(Be,oh),e(Be,Ut),e(Ut,sh),e(Ut,ca),e(ca,ah),e(Ut,rh),e(Ut,Vr),e(Vr,ih),e(Ut,lh),e(Be,dh),T(Tn,Be,null),e(Be,ch),e(Be,qr),e(qr,ph),e(Be,hh),T(es,Be,null),e(Be,mh),T(ts,Be,null),m(n,Li,f),m(n,Qt,f),e(Qt,wn),e(wn,zr),T(ns,zr,null),e(Qt,fh),e(Qt,Mr),e(Mr,uh),m(n,Ii,f),m(n,Qe,f),T(os,Qe,null),e(Qe,gh),e(Qe,ss),e(ss,_h),e(ss,as),e(as,bh),e(ss,kh),e(Qe,vh),e(Qe,rs),e(rs,Th),e(rs,is),e(is,wh),e(rs,yh),e(Qe,Dh),T(yn,Qe,null),e(Qe,$h),e(Qe,Je),T(ls,Je,null),e(Je,Eh),e(Je,Gt),e(Gt,Fh),e(Gt,pa),e(pa,Vh),e(Gt,qh),e(Gt,xr),e(xr,zh),e(Gt,Mh),e(Je,xh),T(Dn,Je,null),e(Je,jh),e(Je,jr),e(jr,Ch),e(Je,Rh),T(ds,Je,null),m(n,Si,f),m(n,Kt,f),e(Kt,$n),e($n,Cr),T(cs,Cr,null),e(Kt,Ph),e(Kt,Rr),e(Rr,Bh),m(n,Oi,f),m(n,_t,f),T(ps,_t,null),e(_t,Ah),e(_t,Pr),e(Pr,Lh),e(_t,Ih),e(_t,ot),T(hs,ot,null),e(ot,Sh),e(ot,Br),e(Br,Oh),e(ot,Nh),e(ot,ms),e(ms,Wh),e(ms,Ar),e(Ar,Hh),e(ms,Uh),e(ot,Qh),e(ot,Ze),e(Ze,Gh),e(Ze,Lr),e(Lr,Kh),e(Ze,Jh),e(Ze,Ir),e(Ir,Xh),e(Ze,Yh),e(Ze,Sr),e(Sr,Zh),e(Ze,em),e(Ze,Or),e(Or,tm),e(Ze,nm),m(n,Ni,f),m(n,Jt,f),e(Jt,En),e(En,Nr),T(fs,Nr,null),e(Jt,om),e(Jt,Wr),e(Wr,sm),m(n,Wi,f),m(n,Ge,f),T(us,Ge,null),e(Ge,am),e(Ge,Xt),e(Xt,rm),e(Xt,Hr),e(Hr,im),e(Xt,lm),e(Xt,gs),e(gs,dm),e(Xt,cm),e(Ge,pm),e(Ge,_s),e(_s,hm),e(_s,bs),e(bs,mm),e(_s,fm),e(Ge,um),T(Fn,Ge,null),e(Ge,gm),e(Ge,Ae),T(ks,Ae,null),e(Ae,_m),e(Ae,Yt),e(Yt,bm),e(Yt,ha),e(ha,km),e(Yt,vm),e(Yt,Ur),e(Ur,Tm),e(Yt,wm),e(Ae,ym),T(Vn,Ae,null),e(Ae,Dm),e(Ae,Qr),e(Qr,$m),e(Ae,Em),T(vs,Ae,null),e(Ae,Fm),T(Ts,Ae,null),m(n,Hi,f),m(n,Zt,f),e(Zt,qn),e(qn,Gr),T(ws,Gr,null),e(Zt,Vm),e(Zt,Kr),e(Kr,qm),m(n,Ui,f),m(n,xe,f),T(ys,xe,null),e(xe,zm),e(xe,Jr),e(Jr,Mm),e(xe,xm),e(xe,Ds),e(Ds,jm),e(Ds,$s),e($s,Cm),e(Ds,Rm),e(xe,Pm),e(xe,Es),e(Es,Bm),e(Es,Fs),e(Fs,Am),e(Es,Lm),e(xe,Im),T(zn,xe,null),e(xe,Sm),e(xe,Le),T(Vs,Le,null),e(Le,Om),e(Le,en),e(en,Nm),e(en,ma),e(ma,Wm),e(en,Hm),e(en,Xr),e(Xr,Um),e(en,Qm),e(Le,Gm),T(Mn,Le,null),e(Le,Km),e(Le,Yr),e(Yr,Jm),e(Le,Xm),T(qs,Le,null),e(Le,Ym),T(zs,Le,null),m(n,Qi,f),m(n,tn,f),e(tn,xn),e(xn,Zr),T(Ms,Zr,null),e(tn,Zm),e(tn,ei),e(ei,ef),m(n,Gi,f),m(n,je,f),T(xs,je,null),e(je,tf),e(je,ti),e(ti,nf),e(je,of),e(je,js),e(js,sf),e(js,Cs),e(Cs,af),e(js,rf),e(je,lf),e(je,Rs),e(Rs,df),e(Rs,Ps),e(Ps,cf),e(Rs,pf),e(je,hf),T(jn,je,null),e(je,mf),e(je,Ie),T(Bs,Ie,null),e(Ie,ff),e(Ie,nn),e(nn,uf),e(nn,fa),e(fa,gf),e(nn,_f),e(nn,ni),e(ni,bf),e(nn,kf),e(Ie,vf),T(Cn,Ie,null),e(Ie,Tf),e(Ie,oi),e(oi,wf),e(Ie,yf),T(As,Ie,null),e(Ie,Df),T(Ls,Ie,null),m(n,Ki,f),m(n,on,f),e(on,Rn),e(Rn,si),T(Is,si,null),e(on,$f),e(on,ai),e(ai,Ef),m(n,Ji,f),m(n,Ce,f),T(Ss,Ce,null),e(Ce,Ff),e(Ce,sn),e(sn,Vf),e(sn,ri),e(ri,qf),e(sn,zf),e(sn,ii),e(ii,Mf),e(sn,xf),e(Ce,jf),e(Ce,Os),e(Os,Cf),e(Os,Ns),e(Ns,Rf),e(Os,Pf),e(Ce,Bf),e(Ce,Ws),e(Ws,Af),e(Ws,Hs),e(Hs,Lf),e(Ws,If),e(Ce,Sf),T(Pn,Ce,null),e(Ce,Of),e(Ce,Se),T(Us,Se,null),e(Se,Nf),e(Se,an),e(an,Wf),e(an,ua),e(ua,Hf),e(an,Uf),e(an,li),e(li,Qf),e(an,Gf),e(Se,Kf),T(Bn,Se,null),e(Se,Jf),e(Se,di),e(di,Xf),e(Se,Yf),T(Qs,Se,null),e(Se,Zf),T(Gs,Se,null),Xi=!0},p(n,[f]){const Ks={};f&2&&(Ks.$$scope={dirty:f,ctx:n}),pn.$set(Ks);const ci={};f&2&&(ci.$$scope={dirty:f,ctx:n}),mn.$set(ci);const pi={};f&2&&(pi.$$scope={dirty:f,ctx:n}),un.$set(pi);const hi={};f&2&&(hi.$$scope={dirty:f,ctx:n}),_n.$set(hi);const Js={};f&2&&(Js.$$scope={dirty:f,ctx:n}),kn.$set(Js);const mi={};f&2&&(mi.$$scope={dirty:f,ctx:n}),Tn.$set(mi);const fi={};f&2&&(fi.$$scope={dirty:f,ctx:n}),yn.$set(fi);const ui={};f&2&&(ui.$$scope={dirty:f,ctx:n}),Dn.$set(ui);const Xs={};f&2&&(Xs.$$scope={dirty:f,ctx:n}),Fn.$set(Xs);const gi={};f&2&&(gi.$$scope={dirty:f,ctx:n}),Vn.$set(gi);const _i={};f&2&&(_i.$$scope={dirty:f,ctx:n}),zn.$set(_i);const bi={};f&2&&(bi.$$scope={dirty:f,ctx:n}),Mn.$set(bi);const ki={};f&2&&(ki.$$scope={dirty:f,ctx:n}),jn.$set(ki);const Ys={};f&2&&(Ys.$$scope={dirty:f,ctx:n}),Cn.$set(Ys);const vi={};f&2&&(vi.$$scope={dirty:f,ctx:n}),Pn.$set(vi);const An={};f&2&&(An.$$scope={dirty:f,ctx:n}),Bn.$set(An)},i(n){Xi||(w(b.$$.fragment,n),w(ee.$$.fragment,n),w(Gn.$$.fragment,n),w(Kn.$$.fragment,n),w(Xn.$$.fragment,n),w(Yn.$$.fragment,n),w(to.$$.fragment,n),w(oo.$$.fragment,n),w(so.$$.fragment,n),w(ao.$$.fragment,n),w(ro.$$.fragment,n),w(io.$$.fragment,n),w(lo.$$.fragment,n),w(fo.$$.fragment,n),w(pn.$$.fragment,n),w(uo.$$.fragment,n),w(go.$$.fragment,n),w(_o.$$.fragment,n),w(bo.$$.fragment,n),w(mn.$$.fragment,n),w(ko.$$.fragment,n),w(vo.$$.fragment,n),w(Do.$$.fragment,n),w(un.$$.fragment,n),w($o.$$.fragment,n),w(Eo.$$.fragment,n),w(Fo.$$.fragment,n),w(Vo.$$.fragment,n),w(jo.$$.fragment,n),w(_n.$$.fragment,n),w(Co.$$.fragment,n),w(Ro.$$.fragment,n),w(Po.$$.fragment,n),w(Bo.$$.fragment,n),w(Ao.$$.fragment,n),w(Lo.$$.fragment,n),w(Wo.$$.fragment,n),w(kn.$$.fragment,n),w(Ho.$$.fragment,n),w(Uo.$$.fragment,n),w(Qo.$$.fragment,n),w(Go.$$.fragment,n),w(Zo.$$.fragment,n),w(Tn.$$.fragment,n),w(es.$$.fragment,n),w(ts.$$.fragment,n),w(ns.$$.fragment,n),w(os.$$.fragment,n),w(yn.$$.fragment,n),w(ls.$$.fragment,n),w(Dn.$$.fragment,n),w(ds.$$.fragment,n),w(cs.$$.fragment,n),w(ps.$$.fragment,n),w(hs.$$.fragment,n),w(fs.$$.fragment,n),w(us.$$.fragment,n),w(Fn.$$.fragment,n),w(ks.$$.fragment,n),w(Vn.$$.fragment,n),w(vs.$$.fragment,n),w(Ts.$$.fragment,n),w(ws.$$.fragment,n),w(ys.$$.fragment,n),w(zn.$$.fragment,n),w(Vs.$$.fragment,n),w(Mn.$$.fragment,n),w(qs.$$.fragment,n),w(zs.$$.fragment,n),w(Ms.$$.fragment,n),w(xs.$$.fragment,n),w(jn.$$.fragment,n),w(Bs.$$.fragment,n),w(Cn.$$.fragment,n),w(As.$$.fragment,n),w(Ls.$$.fragment,n),w(Is.$$.fragment,n),w(Ss.$$.fragment,n),w(Pn.$$.fragment,n),w(Us.$$.fragment,n),w(Bn.$$.fragment,n),w(Qs.$$.fragment,n),w(Gs.$$.fragment,n),Xi=!0)},o(n){y(b.$$.fragment,n),y(ee.$$.fragment,n),y(Gn.$$.fragment,n),y(Kn.$$.fragment,n),y(Xn.$$.fragment,n),y(Yn.$$.fragment,n),y(to.$$.fragment,n),y(oo.$$.fragment,n),y(so.$$.fragment,n),y(ao.$$.fragment,n),y(ro.$$.fragment,n),y(io.$$.fragment,n),y(lo.$$.fragment,n),y(fo.$$.fragment,n),y(pn.$$.fragment,n),y(uo.$$.fragment,n),y(go.$$.fragment,n),y(_o.$$.fragment,n),y(bo.$$.fragment,n),y(mn.$$.fragment,n),y(ko.$$.fragment,n),y(vo.$$.fragment,n),y(Do.$$.fragment,n),y(un.$$.fragment,n),y($o.$$.fragment,n),y(Eo.$$.fragment,n),y(Fo.$$.fragment,n),y(Vo.$$.fragment,n),y(jo.$$.fragment,n),y(_n.$$.fragment,n),y(Co.$$.fragment,n),y(Ro.$$.fragment,n),y(Po.$$.fragment,n),y(Bo.$$.fragment,n),y(Ao.$$.fragment,n),y(Lo.$$.fragment,n),y(Wo.$$.fragment,n),y(kn.$$.fragment,n),y(Ho.$$.fragment,n),y(Uo.$$.fragment,n),y(Qo.$$.fragment,n),y(Go.$$.fragment,n),y(Zo.$$.fragment,n),y(Tn.$$.fragment,n),y(es.$$.fragment,n),y(ts.$$.fragment,n),y(ns.$$.fragment,n),y(os.$$.fragment,n),y(yn.$$.fragment,n),y(ls.$$.fragment,n),y(Dn.$$.fragment,n),y(ds.$$.fragment,n),y(cs.$$.fragment,n),y(ps.$$.fragment,n),y(hs.$$.fragment,n),y(fs.$$.fragment,n),y(us.$$.fragment,n),y(Fn.$$.fragment,n),y(ks.$$.fragment,n),y(Vn.$$.fragment,n),y(vs.$$.fragment,n),y(Ts.$$.fragment,n),y(ws.$$.fragment,n),y(ys.$$.fragment,n),y(zn.$$.fragment,n),y(Vs.$$.fragment,n),y(Mn.$$.fragment,n),y(qs.$$.fragment,n),y(zs.$$.fragment,n),y(Ms.$$.fragment,n),y(xs.$$.fragment,n),y(jn.$$.fragment,n),y(Bs.$$.fragment,n),y(Cn.$$.fragment,n),y(As.$$.fragment,n),y(Ls.$$.fragment,n),y(Is.$$.fragment,n),y(Ss.$$.fragment,n),y(Pn.$$.fragment,n),y(Us.$$.fragment,n),y(Bn.$$.fragment,n),y(Qs.$$.fragment,n),y(Gs.$$.fragment,n),Xi=!1},d(n){t(h),n&&t(F),n&&t(u),D(b),n&&t(J),n&&t(q),D(ee),n&&t(re),n&&t(N),n&&t(x),n&&t(oe),n&&t(ie),n&&t(se),n&&t(le),n&&t(ae),n&&t(O),n&&t(X),n&&t(E),n&&t(G),n&&t(De),n&&t(j),n&&t(wi),n&&t(et),n&&t(yi),n&&t(Vt),D(Gn),n&&t(Di),n&&t(ut),D(Kn),n&&t($i),n&&t(Mt),D(Xn),n&&t(Ei),n&&t(Me),D(Yn),D(to),D(oo),D(so),D(ao),D(ro),n&&t(Fi),n&&t(Ct),D(io),n&&t(Vi),n&&t(Xe),D(lo),D(fo),D(pn),D(uo),n&&t(qi),n&&t(Pt),D(go),n&&t(zi),n&&t(gt),D(_o),D(bo),D(mn),n&&t(Mi),n&&t(Bt),D(ko),n&&t(xi),n&&t(Ye),D(vo),D(Do),D(un),D($o),D(Eo),n&&t(ji),n&&t(It),D(Fo),n&&t(Ci),n&&t(We),D(Vo),D(jo),D(_n),D(Co),D(Ro),D(Po),D(Bo),n&&t(Ri),n&&t(Ot),D(Ao),n&&t(Pi),n&&t(He),D(Lo),D(Wo),D(kn),D(Ho),D(Uo),n&&t(Bi),n&&t(Wt),D(Qo),n&&t(Ai),n&&t(Ue),D(Go),D(Zo),D(Tn),D(es),D(ts),n&&t(Li),n&&t(Qt),D(ns),n&&t(Ii),n&&t(Qe),D(os),D(yn),D(ls),D(Dn),D(ds),n&&t(Si),n&&t(Kt),D(cs),n&&t(Oi),n&&t(_t),D(ps),D(hs),n&&t(Ni),n&&t(Jt),D(fs),n&&t(Wi),n&&t(Ge),D(us),D(Fn),D(ks),D(Vn),D(vs),D(Ts),n&&t(Hi),n&&t(Zt),D(ws),n&&t(Ui),n&&t(xe),D(ys),D(zn),D(Vs),D(Mn),D(qs),D(zs),n&&t(Qi),n&&t(tn),D(Ms),n&&t(Gi),n&&t(je),D(xs),D(jn),D(Bs),D(Cn),D(As),D(Ls),n&&t(Ki),n&&t(on),D(Is),n&&t(Ji),n&&t(Ce),D(Ss),D(Pn),D(Us),D(Bn),D(Qs),D(Gs)}}}const ob={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function sb(S){return L_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cb extends R_{constructor(h){super();P_(this,h,sb,nb,B_,{})}}export{cb as default,ob as metadata};
