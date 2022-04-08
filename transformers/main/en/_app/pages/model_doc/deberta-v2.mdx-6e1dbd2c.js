import{S as P_,i as R_,s as B_,e as a,k as l,w as k,t as n,M as A_,c as r,d as t,m as d,a as i,x as v,h as s,b as c,F as e,g as m,y as T,q as w,o as y,B as D,v as L_}from"../../chunks/vendor-6b77c823.js";import{T as Oe}from"../../chunks/Tip-39098574.js";import{D as K}from"../../chunks/Docstring-af1d0ae0.js";import{C as Te}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ne}from"../../chunks/IconCopyLink-7a11ce68.js";function I_(S){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function S_(S){let h,F,u,_,$;return{c(){h=a("p"),F=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=a("code"),_=n("Module"),$=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function O_(S){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function N_(S){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function W_(S){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function H_(S){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function U_(S){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,P,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);$=r(G,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(G),V=r(G,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var we=i(I);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),P=r(p,"P",{});var Ee=i(P);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),z=r(p,"UL",{});var R=i(z);x=r(R,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(R),M=r(R,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(R),C=r(R,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),R.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,P,E),e(P,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(P),p&&t(Z),p&&t(z)}}}function Q_(S){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function G_(S){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,P,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);$=r(G,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(G),V=r(G,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var we=i(I);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),P=r(p,"P",{});var Ee=i(P);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),z=r(p,"UL",{});var R=i(z);x=r(R,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(R),M=r(R,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(R),C=r(R,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),R.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,P,E),e(P,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(P),p&&t(Z),p&&t(z)}}}function K_(S){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function J_(S){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,P,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);$=r(G,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(G),V=r(G,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var we=i(I);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),P=r(p,"P",{});var Ee=i(P);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),z=r(p,"UL",{});var R=i(z);x=r(R,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(R),M=r(R,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(R),C=r(R,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),R.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,P,E),e(P,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(P),p&&t(Z),p&&t(z)}}}function X_(S){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function Y_(S){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,P,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);$=r(G,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(G),V=r(G,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var we=i(I);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),P=r(p,"P",{});var Ee=i(P);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),z=r(p,"UL",{});var R=i(z);x=r(R,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(R),M=r(R,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(R),C=r(R,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),R.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,P,E),e(P,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(P),p&&t(Z),p&&t(z)}}}function Z_(S){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function eb(S){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,P,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),z=a("ul"),x=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),M=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var G=i(_);$=r(G,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(G),V=r(G,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),G.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(j,"CODE",{});var we=i(I);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),P=r(p,"P",{});var Ee=i(P);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),z=r(p,"UL",{});var R=i(z);x=r(R,"LI",{});var A=i(x);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(R),M=r(R,"LI",{});var Q=i(M);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var ve=i(B);me=s(ve,"model([input_ids, attention_mask])"),ve.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(R),C=r(R,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),R.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,I),e(I,pe),e(q,re),m(p,N,E),m(p,P,E),e(P,te),m(p,Z,E),m(p,z,E),e(z,x),e(x,ne),e(x,W),e(W,ie),e(x,se),e(x,H),e(H,le),e(z,ae),e(z,M),e(M,he),e(M,B),e(B,me),e(M,fe),e(M,O),e(O,X),e(z,ue),e(z,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(P),p&&t(Z),p&&t(z)}}}function tb(S){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function ob(S){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,I,pe,re,N,P,te,Z,z,x,ne,W,ie,se,H,le,ae,M,he,B,me,fe,O,X,ue,C,ge,U,oe,p,E,G,$e,De,j,_e,we,Ee,R,A,Fe,Ve,Q,ve,ye,be,qe,Cl,Zs,Aa,Pl,Rl,Bl,ea,La,Al,Ll,Il,ta,Ia,Sl,Ol,wi,et,Nl,Ho,Wl,Hl,Uo,Ul,Ql,Qo,Gl,Kl,yi,Vt,ro,Sa,Go,Jl,Oa,Xl,Di,ut,Ko,Yl,qt,Zl,oa,ed,td,Jo,od,nd,sd,zt,ad,na,rd,id,sa,ld,dd,$i,Mt,io,Na,Xo,cd,Wa,pd,Ei,Me,Yo,hd,Zo,md,en,fd,ud,gd,bt,tn,_d,Ha,bd,kd,on,Ua,vd,Td,Qa,wd,yd,lo,nn,Dd,xt,$d,Ga,Ed,Fd,Ka,Vd,qd,zd,tt,sn,Md,Ja,xd,jd,an,Cd,jt,Pd,Xa,Rd,Bd,Ya,Ad,Ld,Id,aa,rn,Fi,Ct,co,Za,ln,Sd,er,Od,Vi,Xe,dn,Nd,cn,Wd,pn,Hd,Ud,Qd,hn,Gd,mn,Kd,Jd,Xd,Ke,fn,Yd,Pt,Zd,ra,ec,tc,tr,oc,nc,sc,po,ac,or,rc,ic,un,qi,Rt,ho,nr,gn,lc,sr,dc,zi,gt,_n,cc,ar,pc,hc,ot,bn,mc,rr,fc,uc,ir,gc,_c,mo,Mi,Bt,fo,lr,kn,bc,dr,kc,xi,Ye,vn,vc,At,Tc,cr,wc,yc,Tn,Dc,$c,Ec,wn,Fc,yn,Vc,qc,zc,Pe,Dn,Mc,Lt,xc,ia,jc,Cc,pr,Pc,Rc,Bc,uo,Ac,hr,Lc,Ic,$n,Sc,En,ji,It,go,mr,Fn,Oc,fr,Nc,Ci,We,Vn,Wc,ur,Hc,Uc,qn,Qc,zn,Gc,Kc,Jc,Mn,Xc,xn,Yc,Zc,ep,ke,jn,tp,St,op,la,np,sp,gr,ap,rp,ip,_o,lp,_r,dp,cp,Cn,pp,Pn,hp,br,mp,fp,Rn,up,Bn,Pi,Ot,bo,kr,An,gp,vr,_p,Ri,He,Ln,bp,Tr,kp,vp,In,Tp,Sn,wp,yp,Dp,On,$p,Nn,Ep,Fp,Vp,Re,Wn,qp,Nt,zp,da,Mp,xp,wr,jp,Cp,Pp,ko,Rp,yr,Bp,Ap,Hn,Lp,Un,Bi,Wt,vo,Dr,Qn,Ip,$r,Sp,Ai,Ue,Gn,Op,Ht,Np,Er,Wp,Hp,Fr,Up,Qp,Gp,Kn,Kp,Jn,Jp,Xp,Yp,Xn,Zp,Yn,eh,th,oh,Be,Zn,nh,Ut,sh,ca,ah,rh,Vr,ih,lh,dh,To,ch,qr,ph,hh,es,mh,ts,Li,Qt,wo,zr,os,fh,Mr,uh,Ii,Qe,ns,gh,ss,_h,as,bh,kh,vh,rs,Th,is,wh,yh,Dh,yo,$h,Je,ls,Eh,Gt,Fh,pa,Vh,qh,xr,zh,Mh,xh,Do,jh,jr,Ch,Ph,ds,Si,Kt,$o,Cr,cs,Rh,Pr,Bh,Oi,_t,ps,Ah,Rr,Lh,Ih,nt,hs,Sh,Br,Oh,Nh,ms,Wh,Ar,Hh,Uh,Qh,Ze,Gh,Lr,Kh,Jh,Ir,Xh,Yh,Sr,Zh,em,Or,tm,om,Ni,Jt,Eo,Nr,fs,nm,Wr,sm,Wi,Ge,us,am,Xt,rm,Hr,im,lm,gs,dm,cm,pm,_s,hm,bs,mm,fm,um,Fo,gm,Ae,ks,_m,Yt,bm,ha,km,vm,Ur,Tm,wm,ym,Vo,Dm,Qr,$m,Em,vs,Fm,Ts,Hi,Zt,qo,Gr,ws,Vm,Kr,qm,Ui,xe,ys,zm,Jr,Mm,xm,Ds,jm,$s,Cm,Pm,Rm,Es,Bm,Fs,Am,Lm,Im,zo,Sm,Le,Vs,Om,eo,Nm,ma,Wm,Hm,Xr,Um,Qm,Gm,Mo,Km,Yr,Jm,Xm,qs,Ym,zs,Qi,to,xo,Zr,Ms,Zm,ei,ef,Gi,je,xs,tf,ti,of,nf,js,sf,Cs,af,rf,lf,Ps,df,Rs,cf,pf,hf,jo,mf,Ie,Bs,ff,oo,uf,fa,gf,_f,oi,bf,kf,vf,Co,Tf,ni,wf,yf,As,Df,Ls,Ki,no,Po,si,Is,$f,ai,Ef,Ji,Ce,Ss,Ff,so,Vf,ri,qf,zf,ii,Mf,xf,jf,Os,Cf,Ns,Pf,Rf,Bf,Ws,Af,Hs,Lf,If,Sf,Ro,Of,Se,Us,Nf,ao,Wf,ua,Hf,Uf,li,Qf,Gf,Kf,Bo,Jf,di,Xf,Yf,Qs,Zf,Gs,Xi;return b=new Ne({}),ee=new Ne({}),Go=new Ne({}),Ko=new K({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L31",parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
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
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Xo=new Ne({}),Yo=new K({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L53",parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
`}}),an=new Te({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),rn=new K({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L261"}}),ln=new Ne({}),dn=new K({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L977",parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fn=new K({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1001",parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),po=new Oe({props:{$$slots:{default:[I_]},$$scope:{ctx:S}}}),un=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),gn=new Ne({}),_n=new K({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L881"}}),bn=new K({props:{name:"_forward_unimplemented",anchor:"transformers.DebertaV2PreTrainedModel.forward",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/main/src/torch/nn/modules/module.py#L190"}}),mo=new Oe({props:{$$slots:{default:[S_]},$$scope:{ctx:S}}}),kn=new Ne({}),vn=new K({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1090",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Dn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1109",parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),uo=new Oe({props:{$$slots:{default:[O_]},$$scope:{ctx:S}}}),$n=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
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
`}}),En=new Te({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),Fn=new Ne({}),Vn=new K({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1226",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1251",parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new Oe({props:{$$slots:{default:[N_]},$$scope:{ctx:S}}}),Cn=new Te({props:{code:`import torch
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
`}}),Pn=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),Rn=new Te({props:{code:`import torch
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
`}}),Bn=new Te({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = DebertaV2ForSequenceClassification.from_pretrained(
    "microsoft/deberta-v2-xlarge", num_labels=num_labels, problem_type="multi_label_classification"
)

labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaV2ForSequenceClassification.from_pretrained(
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;microsoft/deberta-v2-xlarge&quot;</span>, num_labels=num_labels, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),An=new Ne({}),Ln=new K({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1346",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1360",parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ko=new Oe({props:{$$slots:{default:[W_]},$$scope:{ctx:S}}}),Hn=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
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
`}}),Un=new Te({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Qn=new Ne({}),Gn=new K({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1423",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zn=new K({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1436",parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
`}}),To=new Oe({props:{$$slots:{default:[H_]},$$scope:{ctx:S}}}),es=new Te({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
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
`}}),os=new Ne({}),ns=new K({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1175",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),yo=new Oe({props:{$$slots:{default:[U_]},$$scope:{ctx:S}}}),ls=new K({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1181",parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2Model.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],returnDescription:`
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
`}}),Do=new Oe({props:{$$slots:{default:[Q_]},$$scope:{ctx:S}}}),ds=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),cs=new Ne({}),ps=new K({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1079"}}),hs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2PreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),fs=new Ne({}),us=new K({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1224",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Fo=new Oe({props:{$$slots:{default:[G_]},$$scope:{ctx:S}}}),ks=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1240",parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),Vo=new Oe({props:{$$slots:{default:[K_]},$$scope:{ctx:S}}}),vs=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
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
`}}),ws=new Ne({}),ys=new K({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1308",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zo=new Oe({props:{$$slots:{default:[J_]},$$scope:{ctx:S}}}),Vs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1326",parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),Mo=new Oe({props:{$$slots:{default:[X_]},$$scope:{ctx:S}}}),qs=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
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
`}}),Ms=new Ne({}),xs=new K({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1397",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jo=new Oe({props:{$$slots:{default:[Y_]},$$scope:{ctx:S}}}),Bs=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1409",parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
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
`}}),Co=new Oe({props:{$$slots:{default:[Z_]},$$scope:{ctx:S}}}),As=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
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
`}}),Is=new Ne({}),Ss=new K({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1476",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ro=new Oe({props:{$$slots:{default:[eb]},$$scope:{ctx:S}}}),Us=new K({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1487",parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Tokenizer">DebertaV2Tokenizer</a>. See <a href="/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/model_doc/wav2vec2_phoneme#transformers.Wav2Vec2PhonemeCTCTokenizer.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
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
`}}),Bo=new Oe({props:{$$slots:{default:[tb]},$$scope:{ctx:S}}}),Qs=new Te({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
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
`}}),{c(){h=a("meta"),F=l(),u=a("h1"),_=a("a"),$=a("span"),k(b.$$.fragment),g=l(),V=a("span"),de=n("DeBERTa-v2"),J=l(),q=a("h2"),Y=a("a"),L=a("span"),k(ee.$$.fragment),ce=l(),I=a("span"),pe=n("Overview"),re=l(),N=a("p"),P=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),z=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
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
`),oe=a("a"),p=n("blog"),E=l(),G=a("p"),$e=n("New in v2:"),De=l(),j=a("ul"),_e=a("li"),we=a("strong"),Ee=n("Vocabulary"),R=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=a("a"),Fe=n("sentencepiece-based"),Ve=n(" tokenizer."),Q=l(),ve=a("li"),ye=a("strong"),be=n("nGiE(nGram Induced Input Encoding)"),qe=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),Cl=l(),Zs=a("li"),Aa=a("strong"),Pl=n("Sharing position projection matrix with content projection matrix in attention layer"),Rl=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),Bl=l(),ea=a("li"),La=a("strong"),Al=n("Apply bucket to encode relative positions"),Ll=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),Il=l(),ta=a("li"),Ia=a("strong"),Sl=n("900M model & 1.5B model"),Ol=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),wi=l(),et=a("p"),Nl=n("This model was contributed by "),Ho=a("a"),Wl=n("DeBERTa"),Hl=n(`. This model TF 2.0 implementation was
contributed by `),Uo=a("a"),Ul=n("kamalkraj"),Ql=n(". The original code can be found "),Qo=a("a"),Gl=n("here"),Kl=n("."),yi=l(),Vt=a("h2"),ro=a("a"),Sa=a("span"),k(Go.$$.fragment),Jl=l(),Oa=a("span"),Xl=n("DebertaV2Config"),Di=l(),ut=a("div"),k(Ko.$$.fragment),Yl=l(),qt=a("p"),Zl=n("This is the configuration class to store the configuration of a "),oa=a("a"),ed=n("DebertaV2Model"),td=n(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Jo=a("a"),od=n("microsoft/deberta-v2-xlarge"),nd=n(" architecture."),sd=l(),zt=a("p"),ad=n("Configuration objects inherit from "),na=a("a"),rd=n("PretrainedConfig"),id=n(` and can be used to control the model outputs. Read the
documentation from `),sa=a("a"),ld=n("PretrainedConfig"),dd=n(" for more information."),$i=l(),Mt=a("h2"),io=a("a"),Na=a("span"),k(Xo.$$.fragment),cd=l(),Wa=a("span"),pd=n("DebertaV2Tokenizer"),Ei=l(),Me=a("div"),k(Yo.$$.fragment),hd=l(),Zo=a("p"),md=n("Constructs a DeBERTa-v2 tokenizer. Based on "),en=a("a"),fd=n("SentencePiece"),ud=n("."),gd=l(),bt=a("div"),k(tn.$$.fragment),_d=l(),Ha=a("p"),bd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),kd=l(),on=a("ul"),Ua=a("li"),vd=n("single sequence: [CLS] X [SEP]"),Td=l(),Qa=a("li"),wd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),yd=l(),lo=a("div"),k(nn.$$.fragment),Dd=l(),xt=a("p"),$d=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ga=a("code"),Ed=n("prepare_for_model"),Fd=n(" or "),Ka=a("code"),Vd=n("encode_plus"),qd=n(" methods."),zd=l(),tt=a("div"),k(sn.$$.fragment),Md=l(),Ja=a("p"),xd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),jd=l(),k(an.$$.fragment),Cd=l(),jt=a("p"),Pd=n("If "),Xa=a("code"),Rd=n("token_ids_1"),Bd=n(" is "),Ya=a("code"),Ad=n("None"),Ld=n(", this method only returns the first portion of the mask (0s)."),Id=l(),aa=a("div"),k(rn.$$.fragment),Fi=l(),Ct=a("h2"),co=a("a"),Za=a("span"),k(ln.$$.fragment),Sd=l(),er=a("span"),Od=n("DebertaV2Model"),Vi=l(),Xe=a("div"),k(dn.$$.fragment),Nd=l(),cn=a("p"),Wd=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),pn=a("a"),Hd=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ud=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Qd=l(),hn=a("p"),Gd=n("This model is also a PyTorch "),mn=a("a"),Kd=n("torch.nn.Module"),Jd=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Xd=l(),Ke=a("div"),k(fn.$$.fragment),Yd=l(),Pt=a("p"),Zd=n("The "),ra=a("a"),ec=n("DebertaV2Model"),tc=n(" forward method, overrides the "),tr=a("code"),oc=n("__call__"),nc=n(" special method."),sc=l(),k(po.$$.fragment),ac=l(),or=a("p"),rc=n("Example:"),ic=l(),k(un.$$.fragment),qi=l(),Rt=a("h2"),ho=a("a"),nr=a("span"),k(gn.$$.fragment),lc=l(),sr=a("span"),dc=n("DebertaV2PreTrainedModel"),zi=l(),gt=a("div"),k(_n.$$.fragment),cc=l(),ar=a("p"),pc=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),hc=l(),ot=a("div"),k(bn.$$.fragment),mc=l(),rr=a("p"),fc=n("Defines the computation performed at every call."),uc=l(),ir=a("p"),gc=n("Should be overridden by all subclasses."),_c=l(),k(mo.$$.fragment),Mi=l(),Bt=a("h2"),fo=a("a"),lr=a("span"),k(kn.$$.fragment),bc=l(),dr=a("span"),kc=n("DebertaV2ForMaskedLM"),xi=l(),Ye=a("div"),k(vn.$$.fragment),vc=l(),At=a("p"),Tc=n("DeBERTa Model with a "),cr=a("code"),wc=n("language modeling"),yc=n(` head on top.
The DeBERTa model was proposed in `),Tn=a("a"),Dc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),$c=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ec=l(),wn=a("p"),Fc=n("This model is also a PyTorch "),yn=a("a"),Vc=n("torch.nn.Module"),qc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),zc=l(),Pe=a("div"),k(Dn.$$.fragment),Mc=l(),Lt=a("p"),xc=n("The "),ia=a("a"),jc=n("DebertaV2ForMaskedLM"),Cc=n(" forward method, overrides the "),pr=a("code"),Pc=n("__call__"),Rc=n(" special method."),Bc=l(),k(uo.$$.fragment),Ac=l(),hr=a("p"),Lc=n("Example:"),Ic=l(),k($n.$$.fragment),Sc=l(),k(En.$$.fragment),ji=l(),It=a("h2"),go=a("a"),mr=a("span"),k(Fn.$$.fragment),Oc=l(),fr=a("span"),Nc=n("DebertaV2ForSequenceClassification"),Ci=l(),We=a("div"),k(Vn.$$.fragment),Wc=l(),ur=a("p"),Hc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Uc=l(),qn=a("p"),Qc=n("The DeBERTa model was proposed in "),zn=a("a"),Gc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Kc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jc=l(),Mn=a("p"),Xc=n("This model is also a PyTorch "),xn=a("a"),Yc=n("torch.nn.Module"),Zc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ep=l(),ke=a("div"),k(jn.$$.fragment),tp=l(),St=a("p"),op=n("The "),la=a("a"),np=n("DebertaV2ForSequenceClassification"),sp=n(" forward method, overrides the "),gr=a("code"),ap=n("__call__"),rp=n(" special method."),ip=l(),k(_o.$$.fragment),lp=l(),_r=a("p"),dp=n("Example of single-label classification:"),cp=l(),k(Cn.$$.fragment),pp=l(),k(Pn.$$.fragment),hp=l(),br=a("p"),mp=n("Example of multi-label classification:"),fp=l(),k(Rn.$$.fragment),up=l(),k(Bn.$$.fragment),Pi=l(),Ot=a("h2"),bo=a("a"),kr=a("span"),k(An.$$.fragment),gp=l(),vr=a("span"),_p=n("DebertaV2ForTokenClassification"),Ri=l(),He=a("div"),k(Ln.$$.fragment),bp=l(),Tr=a("p"),kp=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),vp=l(),In=a("p"),Tp=n("The DeBERTa model was proposed in "),Sn=a("a"),wp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dp=l(),On=a("p"),$p=n("This model is also a PyTorch "),Nn=a("a"),Ep=n("torch.nn.Module"),Fp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Vp=l(),Re=a("div"),k(Wn.$$.fragment),qp=l(),Nt=a("p"),zp=n("The "),da=a("a"),Mp=n("DebertaV2ForTokenClassification"),xp=n(" forward method, overrides the "),wr=a("code"),jp=n("__call__"),Cp=n(" special method."),Pp=l(),k(ko.$$.fragment),Rp=l(),yr=a("p"),Bp=n("Example:"),Ap=l(),k(Hn.$$.fragment),Lp=l(),k(Un.$$.fragment),Bi=l(),Wt=a("h2"),vo=a("a"),Dr=a("span"),k(Qn.$$.fragment),Ip=l(),$r=a("span"),Sp=n("DebertaV2ForQuestionAnswering"),Ai=l(),Ue=a("div"),k(Gn.$$.fragment),Op=l(),Ht=a("p"),Np=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Er=a("code"),Wp=n("span start logits"),Hp=n(" and "),Fr=a("code"),Up=n("span end logits"),Qp=n(")."),Gp=l(),Kn=a("p"),Kp=n("The DeBERTa model was proposed in "),Jn=a("a"),Jp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Xp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Yp=l(),Xn=a("p"),Zp=n("This model is also a PyTorch "),Yn=a("a"),eh=n("torch.nn.Module"),th=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),oh=l(),Be=a("div"),k(Zn.$$.fragment),nh=l(),Ut=a("p"),sh=n("The "),ca=a("a"),ah=n("DebertaV2ForQuestionAnswering"),rh=n(" forward method, overrides the "),Vr=a("code"),ih=n("__call__"),lh=n(" special method."),dh=l(),k(To.$$.fragment),ch=l(),qr=a("p"),ph=n("Example:"),hh=l(),k(es.$$.fragment),mh=l(),k(ts.$$.fragment),Li=l(),Qt=a("h2"),wo=a("a"),zr=a("span"),k(os.$$.fragment),fh=l(),Mr=a("span"),uh=n("TFDebertaV2Model"),Ii=l(),Qe=a("div"),k(ns.$$.fragment),gh=l(),ss=a("p"),_h=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),as=a("a"),bh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),kh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),vh=l(),rs=a("p"),Th=n("This model is also a "),is=a("a"),wh=n("tf.keras.Model"),yh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dh=l(),k(yo.$$.fragment),$h=l(),Je=a("div"),k(ls.$$.fragment),Eh=l(),Gt=a("p"),Fh=n("The "),pa=a("a"),Vh=n("TFDebertaV2Model"),qh=n(" forward method, overrides the "),xr=a("code"),zh=n("__call__"),Mh=n(" special method."),xh=l(),k(Do.$$.fragment),jh=l(),jr=a("p"),Ch=n("Example:"),Ph=l(),k(ds.$$.fragment),Si=l(),Kt=a("h2"),$o=a("a"),Cr=a("span"),k(cs.$$.fragment),Rh=l(),Pr=a("span"),Bh=n("TFDebertaV2PreTrainedModel"),Oi=l(),_t=a("div"),k(ps.$$.fragment),Ah=l(),Rr=a("p"),Lh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Ih=l(),nt=a("div"),k(hs.$$.fragment),Sh=l(),Br=a("p"),Oh=n("Calls the model on new inputs and returns the outputs as tensors."),Nh=l(),ms=a("p"),Wh=n("In this case "),Ar=a("code"),Hh=n("call()"),Uh=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Qh=l(),Ze=a("p"),Gh=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Lr=a("code"),Kh=n("tf.keras.Model"),Jh=n(`.
To call a model on an input, always use the `),Ir=a("code"),Xh=n("__call__()"),Yh=n(` method,
i.e. `),Sr=a("code"),Zh=n("model(inputs)"),em=n(", which relies on the underlying "),Or=a("code"),tm=n("call()"),om=n(" method."),Ni=l(),Jt=a("h2"),Eo=a("a"),Nr=a("span"),k(fs.$$.fragment),nm=l(),Wr=a("span"),sm=n("TFDebertaV2ForMaskedLM"),Wi=l(),Ge=a("div"),k(us.$$.fragment),am=l(),Xt=a("p"),rm=n("DeBERTa Model with a "),Hr=a("code"),im=n("language modeling"),lm=n(` head on top.
The DeBERTa model was proposed in `),gs=a("a"),dm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),cm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),pm=l(),_s=a("p"),hm=n("This model is also a "),bs=a("a"),mm=n("tf.keras.Model"),fm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),um=l(),k(Fo.$$.fragment),gm=l(),Ae=a("div"),k(ks.$$.fragment),_m=l(),Yt=a("p"),bm=n("The "),ha=a("a"),km=n("TFDebertaV2ForMaskedLM"),vm=n(" forward method, overrides the "),Ur=a("code"),Tm=n("__call__"),wm=n(" special method."),ym=l(),k(Vo.$$.fragment),Dm=l(),Qr=a("p"),$m=n("Example:"),Em=l(),k(vs.$$.fragment),Fm=l(),k(Ts.$$.fragment),Hi=l(),Zt=a("h2"),qo=a("a"),Gr=a("span"),k(ws.$$.fragment),Vm=l(),Kr=a("span"),qm=n("TFDebertaV2ForSequenceClassification"),Ui=l(),xe=a("div"),k(ys.$$.fragment),zm=l(),Jr=a("p"),Mm=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),xm=l(),Ds=a("p"),jm=n("The DeBERTa model was proposed in "),$s=a("a"),Cm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Pm=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Rm=l(),Es=a("p"),Bm=n("This model is also a "),Fs=a("a"),Am=n("tf.keras.Model"),Lm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Im=l(),k(zo.$$.fragment),Sm=l(),Le=a("div"),k(Vs.$$.fragment),Om=l(),eo=a("p"),Nm=n("The "),ma=a("a"),Wm=n("TFDebertaV2ForSequenceClassification"),Hm=n(" forward method, overrides the "),Xr=a("code"),Um=n("__call__"),Qm=n(" special method."),Gm=l(),k(Mo.$$.fragment),Km=l(),Yr=a("p"),Jm=n("Example:"),Xm=l(),k(qs.$$.fragment),Ym=l(),k(zs.$$.fragment),Qi=l(),to=a("h2"),xo=a("a"),Zr=a("span"),k(Ms.$$.fragment),Zm=l(),ei=a("span"),ef=n("TFDebertaV2ForTokenClassification"),Gi=l(),je=a("div"),k(xs.$$.fragment),tf=l(),ti=a("p"),of=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),nf=l(),js=a("p"),sf=n("The DeBERTa model was proposed in "),Cs=a("a"),af=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),rf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),lf=l(),Ps=a("p"),df=n("This model is also a "),Rs=a("a"),cf=n("tf.keras.Model"),pf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hf=l(),k(jo.$$.fragment),mf=l(),Ie=a("div"),k(Bs.$$.fragment),ff=l(),oo=a("p"),uf=n("The "),fa=a("a"),gf=n("TFDebertaV2ForTokenClassification"),_f=n(" forward method, overrides the "),oi=a("code"),bf=n("__call__"),kf=n(" special method."),vf=l(),k(Co.$$.fragment),Tf=l(),ni=a("p"),wf=n("Example:"),yf=l(),k(As.$$.fragment),Df=l(),k(Ls.$$.fragment),Ki=l(),no=a("h2"),Po=a("a"),si=a("span"),k(Is.$$.fragment),$f=l(),ai=a("span"),Ef=n("TFDebertaV2ForQuestionAnswering"),Ji=l(),Ce=a("div"),k(Ss.$$.fragment),Ff=l(),so=a("p"),Vf=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ri=a("code"),qf=n("span start logits"),zf=n(" and "),ii=a("code"),Mf=n("span end logits"),xf=n(")."),jf=l(),Os=a("p"),Cf=n("The DeBERTa model was proposed in "),Ns=a("a"),Pf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Rf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Bf=l(),Ws=a("p"),Af=n("This model is also a "),Hs=a("a"),Lf=n("tf.keras.Model"),If=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sf=l(),k(Ro.$$.fragment),Of=l(),Se=a("div"),k(Us.$$.fragment),Nf=l(),ao=a("p"),Wf=n("The "),ua=a("a"),Hf=n("TFDebertaV2ForQuestionAnswering"),Uf=n(" forward method, overrides the "),li=a("code"),Qf=n("__call__"),Gf=n(" special method."),Kf=l(),k(Bo.$$.fragment),Jf=l(),di=a("p"),Xf=n("Example:"),Yf=l(),k(Qs.$$.fragment),Zf=l(),k(Gs.$$.fragment),this.h()},l(o){const f=A_('[data-svelte="svelte-1phssyn"]',document.head);h=r(f,"META",{name:!0,content:!0}),f.forEach(t),F=d(o),u=r(o,"H1",{class:!0});var Ks=i(u);_=r(Ks,"A",{id:!0,class:!0,href:!0});var ci=i(_);$=r(ci,"SPAN",{});var pi=i($);v(b.$$.fragment,pi),pi.forEach(t),ci.forEach(t),g=d(Ks),V=r(Ks,"SPAN",{});var hi=i(V);de=s(hi,"DeBERTa-v2"),hi.forEach(t),Ks.forEach(t),J=d(o),q=r(o,"H2",{class:!0});var Js=i(q);Y=r(Js,"A",{id:!0,class:!0,href:!0});var mi=i(Y);L=r(mi,"SPAN",{});var fi=i(L);v(ee.$$.fragment,fi),fi.forEach(t),mi.forEach(t),ce=d(Js),I=r(Js,"SPAN",{});var ui=i(I);pe=s(ui,"Overview"),ui.forEach(t),Js.forEach(t),re=d(o),N=r(o,"P",{});var Xs=i(N);P=s(Xs,"The DeBERTa model was proposed in "),te=r(Xs,"A",{href:!0,rel:!0});var gi=i(te);Z=s(gi,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),gi.forEach(t),z=s(Xs,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Xs.forEach(t),x=d(o),ne=r(o,"P",{});var _i=i(ne);W=s(_i,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),_i.forEach(t),ie=d(o),se=r(o,"P",{});var bi=i(se);H=s(bi,"The abstract from the paper is the following:"),bi.forEach(t),le=d(o),ae=r(o,"P",{});var ki=i(ae);M=r(ki,"EM",{});var Ys=i(M);he=s(Ys,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),B=r(Ys,"A",{href:!0,rel:!0});var vi=i(B);me=s(vi,"https://github.com/microsoft/DeBERTa"),vi.forEach(t),fe=s(Ys,"."),Ys.forEach(t),ki.forEach(t),O=d(o),X=r(o,"P",{});var Ao=i(X);ue=s(Ao,"The following information is visible directly on the "),C=r(Ao,"A",{href:!0,rel:!0});var su=i(C);ge=s(su,`original implementation
repository`),su.forEach(t),U=s(Ao,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=r(Ao,"A",{href:!0,rel:!0});var au=i(oe);p=s(au,"blog"),au.forEach(t),Ao.forEach(t),E=d(o),G=r(o,"P",{});var ru=i(G);$e=s(ru,"New in v2:"),ru.forEach(t),De=d(o),j=r(o,"UL",{});var kt=i(j);_e=r(kt,"LI",{});var Ti=i(_e);we=r(Ti,"STRONG",{});var iu=i(we);Ee=s(iu,"Vocabulary"),iu.forEach(t),R=s(Ti,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=r(Ti,"A",{href:!0,rel:!0});var lu=i(A);Fe=s(lu,"sentencepiece-based"),lu.forEach(t),Ve=s(Ti," tokenizer."),Ti.forEach(t),Q=d(kt),ve=r(kt,"LI",{});var eu=i(ve);ye=r(eu,"STRONG",{});var du=i(ye);be=s(du,"nGiE(nGram Induced Input Encoding)"),du.forEach(t),qe=s(eu,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),eu.forEach(t),Cl=d(kt),Zs=r(kt,"LI",{});var tu=i(Zs);Aa=r(tu,"STRONG",{});var cu=i(Aa);Pl=s(cu,"Sharing position projection matrix with content projection matrix in attention layer"),cu.forEach(t),Rl=s(tu,` Based on previous
experiments, this can save parameters without affecting the performance.`),tu.forEach(t),Bl=d(kt),ea=r(kt,"LI",{});var ou=i(ea);La=r(ou,"STRONG",{});var pu=i(La);Al=s(pu,"Apply bucket to encode relative positions"),pu.forEach(t),Ll=s(ou,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),ou.forEach(t),Il=d(kt),ta=r(kt,"LI",{});var nu=i(ta);Ia=r(nu,"STRONG",{});var hu=i(Ia);Sl=s(hu,"900M model & 1.5B model"),hu.forEach(t),Ol=s(nu,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),nu.forEach(t),kt.forEach(t),wi=d(o),et=r(o,"P",{});var Lo=i(et);Nl=s(Lo,"This model was contributed by "),Ho=r(Lo,"A",{href:!0,rel:!0});var mu=i(Ho);Wl=s(mu,"DeBERTa"),mu.forEach(t),Hl=s(Lo,`. This model TF 2.0 implementation was
contributed by `),Uo=r(Lo,"A",{href:!0,rel:!0});var fu=i(Uo);Ul=s(fu,"kamalkraj"),fu.forEach(t),Ql=s(Lo,". The original code can be found "),Qo=r(Lo,"A",{href:!0,rel:!0});var uu=i(Qo);Gl=s(uu,"here"),uu.forEach(t),Kl=s(Lo,"."),Lo.forEach(t),yi=d(o),Vt=r(o,"H2",{class:!0});var Yi=i(Vt);ro=r(Yi,"A",{id:!0,class:!0,href:!0});var gu=i(ro);Sa=r(gu,"SPAN",{});var _u=i(Sa);v(Go.$$.fragment,_u),_u.forEach(t),gu.forEach(t),Jl=d(Yi),Oa=r(Yi,"SPAN",{});var bu=i(Oa);Xl=s(bu,"DebertaV2Config"),bu.forEach(t),Yi.forEach(t),Di=d(o),ut=r(o,"DIV",{class:!0});var ga=i(ut);v(Ko.$$.fragment,ga),Yl=d(ga),qt=r(ga,"P",{});var _a=i(qt);Zl=s(_a,"This is the configuration class to store the configuration of a "),oa=r(_a,"A",{href:!0});var ku=i(oa);ed=s(ku,"DebertaV2Model"),ku.forEach(t),td=s(_a,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Jo=r(_a,"A",{href:!0,rel:!0});var vu=i(Jo);od=s(vu,"microsoft/deberta-v2-xlarge"),vu.forEach(t),nd=s(_a," architecture."),_a.forEach(t),sd=d(ga),zt=r(ga,"P",{});var ba=i(zt);ad=s(ba,"Configuration objects inherit from "),na=r(ba,"A",{href:!0});var Tu=i(na);rd=s(Tu,"PretrainedConfig"),Tu.forEach(t),id=s(ba,` and can be used to control the model outputs. Read the
documentation from `),sa=r(ba,"A",{href:!0});var wu=i(sa);ld=s(wu,"PretrainedConfig"),wu.forEach(t),dd=s(ba," for more information."),ba.forEach(t),ga.forEach(t),$i=d(o),Mt=r(o,"H2",{class:!0});var Zi=i(Mt);io=r(Zi,"A",{id:!0,class:!0,href:!0});var yu=i(io);Na=r(yu,"SPAN",{});var Du=i(Na);v(Xo.$$.fragment,Du),Du.forEach(t),yu.forEach(t),cd=d(Zi),Wa=r(Zi,"SPAN",{});var $u=i(Wa);pd=s($u,"DebertaV2Tokenizer"),$u.forEach(t),Zi.forEach(t),Ei=d(o),Me=r(o,"DIV",{class:!0});var st=i(Me);v(Yo.$$.fragment,st),hd=d(st),Zo=r(st,"P",{});var el=i(Zo);md=s(el,"Constructs a DeBERTa-v2 tokenizer. Based on "),en=r(el,"A",{href:!0,rel:!0});var Eu=i(en);fd=s(Eu,"SentencePiece"),Eu.forEach(t),ud=s(el,"."),el.forEach(t),gd=d(st),bt=r(st,"DIV",{class:!0});var ka=i(bt);v(tn.$$.fragment,ka),_d=d(ka),Ha=r(ka,"P",{});var Fu=i(Ha);bd=s(Fu,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Fu.forEach(t),kd=d(ka),on=r(ka,"UL",{});var tl=i(on);Ua=r(tl,"LI",{});var Vu=i(Ua);vd=s(Vu,"single sequence: [CLS] X [SEP]"),Vu.forEach(t),Td=d(tl),Qa=r(tl,"LI",{});var qu=i(Qa);wd=s(qu,"pair of sequences: [CLS] A [SEP] B [SEP]"),qu.forEach(t),tl.forEach(t),ka.forEach(t),yd=d(st),lo=r(st,"DIV",{class:!0});var ol=i(lo);v(nn.$$.fragment,ol),Dd=d(ol),xt=r(ol,"P",{});var va=i(xt);$d=s(va,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ga=r(va,"CODE",{});var zu=i(Ga);Ed=s(zu,"prepare_for_model"),zu.forEach(t),Fd=s(va," or "),Ka=r(va,"CODE",{});var Mu=i(Ka);Vd=s(Mu,"encode_plus"),Mu.forEach(t),qd=s(va," methods."),va.forEach(t),ol.forEach(t),zd=d(st),tt=r(st,"DIV",{class:!0});var Io=i(tt);v(sn.$$.fragment,Io),Md=d(Io),Ja=r(Io,"P",{});var xu=i(Ja);xd=s(xu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),xu.forEach(t),jd=d(Io),v(an.$$.fragment,Io),Cd=d(Io),jt=r(Io,"P",{});var Ta=i(jt);Pd=s(Ta,"If "),Xa=r(Ta,"CODE",{});var ju=i(Xa);Rd=s(ju,"token_ids_1"),ju.forEach(t),Bd=s(Ta," is "),Ya=r(Ta,"CODE",{});var Cu=i(Ya);Ad=s(Cu,"None"),Cu.forEach(t),Ld=s(Ta,", this method only returns the first portion of the mask (0s)."),Ta.forEach(t),Io.forEach(t),Id=d(st),aa=r(st,"DIV",{class:!0});var Pu=i(aa);v(rn.$$.fragment,Pu),Pu.forEach(t),st.forEach(t),Fi=d(o),Ct=r(o,"H2",{class:!0});var nl=i(Ct);co=r(nl,"A",{id:!0,class:!0,href:!0});var Ru=i(co);Za=r(Ru,"SPAN",{});var Bu=i(Za);v(ln.$$.fragment,Bu),Bu.forEach(t),Ru.forEach(t),Sd=d(nl),er=r(nl,"SPAN",{});var Au=i(er);Od=s(Au,"DebertaV2Model"),Au.forEach(t),nl.forEach(t),Vi=d(o),Xe=r(o,"DIV",{class:!0});var So=i(Xe);v(dn.$$.fragment,So),Nd=d(So),cn=r(So,"P",{});var sl=i(cn);Wd=s(sl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),pn=r(sl,"A",{href:!0,rel:!0});var Lu=i(pn);Hd=s(Lu,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Lu.forEach(t),Ud=s(sl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),sl.forEach(t),Qd=d(So),hn=r(So,"P",{});var al=i(hn);Gd=s(al,"This model is also a PyTorch "),mn=r(al,"A",{href:!0,rel:!0});var Iu=i(mn);Kd=s(Iu,"torch.nn.Module"),Iu.forEach(t),Jd=s(al," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),al.forEach(t),Xd=d(So),Ke=r(So,"DIV",{class:!0});var vt=i(Ke);v(fn.$$.fragment,vt),Yd=d(vt),Pt=r(vt,"P",{});var wa=i(Pt);Zd=s(wa,"The "),ra=r(wa,"A",{href:!0});var Su=i(ra);ec=s(Su,"DebertaV2Model"),Su.forEach(t),tc=s(wa," forward method, overrides the "),tr=r(wa,"CODE",{});var Ou=i(tr);oc=s(Ou,"__call__"),Ou.forEach(t),nc=s(wa," special method."),wa.forEach(t),sc=d(vt),v(po.$$.fragment,vt),ac=d(vt),or=r(vt,"P",{});var Nu=i(or);rc=s(Nu,"Example:"),Nu.forEach(t),ic=d(vt),v(un.$$.fragment,vt),vt.forEach(t),So.forEach(t),qi=d(o),Rt=r(o,"H2",{class:!0});var rl=i(Rt);ho=r(rl,"A",{id:!0,class:!0,href:!0});var Wu=i(ho);nr=r(Wu,"SPAN",{});var Hu=i(nr);v(gn.$$.fragment,Hu),Hu.forEach(t),Wu.forEach(t),lc=d(rl),sr=r(rl,"SPAN",{});var Uu=i(sr);dc=s(Uu,"DebertaV2PreTrainedModel"),Uu.forEach(t),rl.forEach(t),zi=d(o),gt=r(o,"DIV",{class:!0});var ya=i(gt);v(_n.$$.fragment,ya),cc=d(ya),ar=r(ya,"P",{});var Qu=i(ar);pc=s(Qu,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Qu.forEach(t),hc=d(ya),ot=r(ya,"DIV",{class:!0});var Oo=i(ot);v(bn.$$.fragment,Oo),mc=d(Oo),rr=r(Oo,"P",{});var Gu=i(rr);fc=s(Gu,"Defines the computation performed at every call."),Gu.forEach(t),uc=d(Oo),ir=r(Oo,"P",{});var Ku=i(ir);gc=s(Ku,"Should be overridden by all subclasses."),Ku.forEach(t),_c=d(Oo),v(mo.$$.fragment,Oo),Oo.forEach(t),ya.forEach(t),Mi=d(o),Bt=r(o,"H2",{class:!0});var il=i(Bt);fo=r(il,"A",{id:!0,class:!0,href:!0});var Ju=i(fo);lr=r(Ju,"SPAN",{});var Xu=i(lr);v(kn.$$.fragment,Xu),Xu.forEach(t),Ju.forEach(t),bc=d(il),dr=r(il,"SPAN",{});var Yu=i(dr);kc=s(Yu,"DebertaV2ForMaskedLM"),Yu.forEach(t),il.forEach(t),xi=d(o),Ye=r(o,"DIV",{class:!0});var No=i(Ye);v(vn.$$.fragment,No),vc=d(No),At=r(No,"P",{});var Da=i(At);Tc=s(Da,"DeBERTa Model with a "),cr=r(Da,"CODE",{});var Zu=i(cr);wc=s(Zu,"language modeling"),Zu.forEach(t),yc=s(Da,` head on top.
The DeBERTa model was proposed in `),Tn=r(Da,"A",{href:!0,rel:!0});var eg=i(Tn);Dc=s(eg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),eg.forEach(t),$c=s(Da,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Da.forEach(t),Ec=d(No),wn=r(No,"P",{});var ll=i(wn);Fc=s(ll,"This model is also a PyTorch "),yn=r(ll,"A",{href:!0,rel:!0});var tg=i(yn);Vc=s(tg,"torch.nn.Module"),tg.forEach(t),qc=s(ll," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),ll.forEach(t),zc=d(No),Pe=r(No,"DIV",{class:!0});var at=i(Pe);v(Dn.$$.fragment,at),Mc=d(at),Lt=r(at,"P",{});var $a=i(Lt);xc=s($a,"The "),ia=r($a,"A",{href:!0});var og=i(ia);jc=s(og,"DebertaV2ForMaskedLM"),og.forEach(t),Cc=s($a," forward method, overrides the "),pr=r($a,"CODE",{});var ng=i(pr);Pc=s(ng,"__call__"),ng.forEach(t),Rc=s($a," special method."),$a.forEach(t),Bc=d(at),v(uo.$$.fragment,at),Ac=d(at),hr=r(at,"P",{});var sg=i(hr);Lc=s(sg,"Example:"),sg.forEach(t),Ic=d(at),v($n.$$.fragment,at),Sc=d(at),v(En.$$.fragment,at),at.forEach(t),No.forEach(t),ji=d(o),It=r(o,"H2",{class:!0});var dl=i(It);go=r(dl,"A",{id:!0,class:!0,href:!0});var ag=i(go);mr=r(ag,"SPAN",{});var rg=i(mr);v(Fn.$$.fragment,rg),rg.forEach(t),ag.forEach(t),Oc=d(dl),fr=r(dl,"SPAN",{});var ig=i(fr);Nc=s(ig,"DebertaV2ForSequenceClassification"),ig.forEach(t),dl.forEach(t),Ci=d(o),We=r(o,"DIV",{class:!0});var Tt=i(We);v(Vn.$$.fragment,Tt),Wc=d(Tt),ur=r(Tt,"P",{});var lg=i(ur);Hc=s(lg,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),lg.forEach(t),Uc=d(Tt),qn=r(Tt,"P",{});var cl=i(qn);Qc=s(cl,"The DeBERTa model was proposed in "),zn=r(cl,"A",{href:!0,rel:!0});var dg=i(zn);Gc=s(dg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),dg.forEach(t),Kc=s(cl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),cl.forEach(t),Jc=d(Tt),Mn=r(Tt,"P",{});var pl=i(Mn);Xc=s(pl,"This model is also a PyTorch "),xn=r(pl,"A",{href:!0,rel:!0});var cg=i(xn);Yc=s(cg,"torch.nn.Module"),cg.forEach(t),Zc=s(pl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),pl.forEach(t),ep=d(Tt),ke=r(Tt,"DIV",{class:!0});var ze=i(ke);v(jn.$$.fragment,ze),tp=d(ze),St=r(ze,"P",{});var Ea=i(St);op=s(Ea,"The "),la=r(Ea,"A",{href:!0});var pg=i(la);np=s(pg,"DebertaV2ForSequenceClassification"),pg.forEach(t),sp=s(Ea," forward method, overrides the "),gr=r(Ea,"CODE",{});var hg=i(gr);ap=s(hg,"__call__"),hg.forEach(t),rp=s(Ea," special method."),Ea.forEach(t),ip=d(ze),v(_o.$$.fragment,ze),lp=d(ze),_r=r(ze,"P",{});var mg=i(_r);dp=s(mg,"Example of single-label classification:"),mg.forEach(t),cp=d(ze),v(Cn.$$.fragment,ze),pp=d(ze),v(Pn.$$.fragment,ze),hp=d(ze),br=r(ze,"P",{});var fg=i(br);mp=s(fg,"Example of multi-label classification:"),fg.forEach(t),fp=d(ze),v(Rn.$$.fragment,ze),up=d(ze),v(Bn.$$.fragment,ze),ze.forEach(t),Tt.forEach(t),Pi=d(o),Ot=r(o,"H2",{class:!0});var hl=i(Ot);bo=r(hl,"A",{id:!0,class:!0,href:!0});var ug=i(bo);kr=r(ug,"SPAN",{});var gg=i(kr);v(An.$$.fragment,gg),gg.forEach(t),ug.forEach(t),gp=d(hl),vr=r(hl,"SPAN",{});var _g=i(vr);_p=s(_g,"DebertaV2ForTokenClassification"),_g.forEach(t),hl.forEach(t),Ri=d(o),He=r(o,"DIV",{class:!0});var wt=i(He);v(Ln.$$.fragment,wt),bp=d(wt),Tr=r(wt,"P",{});var bg=i(Tr);kp=s(bg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),bg.forEach(t),vp=d(wt),In=r(wt,"P",{});var ml=i(In);Tp=s(ml,"The DeBERTa model was proposed in "),Sn=r(ml,"A",{href:!0,rel:!0});var kg=i(Sn);wp=s(kg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),kg.forEach(t),yp=s(ml,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ml.forEach(t),Dp=d(wt),On=r(wt,"P",{});var fl=i(On);$p=s(fl,"This model is also a PyTorch "),Nn=r(fl,"A",{href:!0,rel:!0});var vg=i(Nn);Ep=s(vg,"torch.nn.Module"),vg.forEach(t),Fp=s(fl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),fl.forEach(t),Vp=d(wt),Re=r(wt,"DIV",{class:!0});var rt=i(Re);v(Wn.$$.fragment,rt),qp=d(rt),Nt=r(rt,"P",{});var Fa=i(Nt);zp=s(Fa,"The "),da=r(Fa,"A",{href:!0});var Tg=i(da);Mp=s(Tg,"DebertaV2ForTokenClassification"),Tg.forEach(t),xp=s(Fa," forward method, overrides the "),wr=r(Fa,"CODE",{});var wg=i(wr);jp=s(wg,"__call__"),wg.forEach(t),Cp=s(Fa," special method."),Fa.forEach(t),Pp=d(rt),v(ko.$$.fragment,rt),Rp=d(rt),yr=r(rt,"P",{});var yg=i(yr);Bp=s(yg,"Example:"),yg.forEach(t),Ap=d(rt),v(Hn.$$.fragment,rt),Lp=d(rt),v(Un.$$.fragment,rt),rt.forEach(t),wt.forEach(t),Bi=d(o),Wt=r(o,"H2",{class:!0});var ul=i(Wt);vo=r(ul,"A",{id:!0,class:!0,href:!0});var Dg=i(vo);Dr=r(Dg,"SPAN",{});var $g=i(Dr);v(Qn.$$.fragment,$g),$g.forEach(t),Dg.forEach(t),Ip=d(ul),$r=r(ul,"SPAN",{});var Eg=i($r);Sp=s(Eg,"DebertaV2ForQuestionAnswering"),Eg.forEach(t),ul.forEach(t),Ai=d(o),Ue=r(o,"DIV",{class:!0});var yt=i(Ue);v(Gn.$$.fragment,yt),Op=d(yt),Ht=r(yt,"P",{});var Va=i(Ht);Np=s(Va,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Er=r(Va,"CODE",{});var Fg=i(Er);Wp=s(Fg,"span start logits"),Fg.forEach(t),Hp=s(Va," and "),Fr=r(Va,"CODE",{});var Vg=i(Fr);Up=s(Vg,"span end logits"),Vg.forEach(t),Qp=s(Va,")."),Va.forEach(t),Gp=d(yt),Kn=r(yt,"P",{});var gl=i(Kn);Kp=s(gl,"The DeBERTa model was proposed in "),Jn=r(gl,"A",{href:!0,rel:!0});var qg=i(Jn);Jp=s(qg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qg.forEach(t),Xp=s(gl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gl.forEach(t),Yp=d(yt),Xn=r(yt,"P",{});var _l=i(Xn);Zp=s(_l,"This model is also a PyTorch "),Yn=r(_l,"A",{href:!0,rel:!0});var zg=i(Yn);eh=s(zg,"torch.nn.Module"),zg.forEach(t),th=s(_l," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),_l.forEach(t),oh=d(yt),Be=r(yt,"DIV",{class:!0});var it=i(Be);v(Zn.$$.fragment,it),nh=d(it),Ut=r(it,"P",{});var qa=i(Ut);sh=s(qa,"The "),ca=r(qa,"A",{href:!0});var Mg=i(ca);ah=s(Mg,"DebertaV2ForQuestionAnswering"),Mg.forEach(t),rh=s(qa," forward method, overrides the "),Vr=r(qa,"CODE",{});var xg=i(Vr);ih=s(xg,"__call__"),xg.forEach(t),lh=s(qa," special method."),qa.forEach(t),dh=d(it),v(To.$$.fragment,it),ch=d(it),qr=r(it,"P",{});var jg=i(qr);ph=s(jg,"Example:"),jg.forEach(t),hh=d(it),v(es.$$.fragment,it),mh=d(it),v(ts.$$.fragment,it),it.forEach(t),yt.forEach(t),Li=d(o),Qt=r(o,"H2",{class:!0});var bl=i(Qt);wo=r(bl,"A",{id:!0,class:!0,href:!0});var Cg=i(wo);zr=r(Cg,"SPAN",{});var Pg=i(zr);v(os.$$.fragment,Pg),Pg.forEach(t),Cg.forEach(t),fh=d(bl),Mr=r(bl,"SPAN",{});var Rg=i(Mr);uh=s(Rg,"TFDebertaV2Model"),Rg.forEach(t),bl.forEach(t),Ii=d(o),Qe=r(o,"DIV",{class:!0});var Dt=i(Qe);v(ns.$$.fragment,Dt),gh=d(Dt),ss=r(Dt,"P",{});var kl=i(ss);_h=s(kl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),as=r(kl,"A",{href:!0,rel:!0});var Bg=i(as);bh=s(Bg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Bg.forEach(t),kh=s(kl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kl.forEach(t),vh=d(Dt),rs=r(Dt,"P",{});var vl=i(rs);Th=s(vl,"This model is also a "),is=r(vl,"A",{href:!0,rel:!0});var Ag=i(is);wh=s(Ag,"tf.keras.Model"),Ag.forEach(t),yh=s(vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vl.forEach(t),Dh=d(Dt),v(yo.$$.fragment,Dt),$h=d(Dt),Je=r(Dt,"DIV",{class:!0});var $t=i(Je);v(ls.$$.fragment,$t),Eh=d($t),Gt=r($t,"P",{});var za=i(Gt);Fh=s(za,"The "),pa=r(za,"A",{href:!0});var Lg=i(pa);Vh=s(Lg,"TFDebertaV2Model"),Lg.forEach(t),qh=s(za," forward method, overrides the "),xr=r(za,"CODE",{});var Ig=i(xr);zh=s(Ig,"__call__"),Ig.forEach(t),Mh=s(za," special method."),za.forEach(t),xh=d($t),v(Do.$$.fragment,$t),jh=d($t),jr=r($t,"P",{});var Sg=i(jr);Ch=s(Sg,"Example:"),Sg.forEach(t),Ph=d($t),v(ds.$$.fragment,$t),$t.forEach(t),Dt.forEach(t),Si=d(o),Kt=r(o,"H2",{class:!0});var Tl=i(Kt);$o=r(Tl,"A",{id:!0,class:!0,href:!0});var Og=i($o);Cr=r(Og,"SPAN",{});var Ng=i(Cr);v(cs.$$.fragment,Ng),Ng.forEach(t),Og.forEach(t),Rh=d(Tl),Pr=r(Tl,"SPAN",{});var Wg=i(Pr);Bh=s(Wg,"TFDebertaV2PreTrainedModel"),Wg.forEach(t),Tl.forEach(t),Oi=d(o),_t=r(o,"DIV",{class:!0});var Ma=i(_t);v(ps.$$.fragment,Ma),Ah=d(Ma),Rr=r(Ma,"P",{});var Hg=i(Rr);Lh=s(Hg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Hg.forEach(t),Ih=d(Ma),nt=r(Ma,"DIV",{class:!0});var Wo=i(nt);v(hs.$$.fragment,Wo),Sh=d(Wo),Br=r(Wo,"P",{});var Ug=i(Br);Oh=s(Ug,"Calls the model on new inputs and returns the outputs as tensors."),Ug.forEach(t),Nh=d(Wo),ms=r(Wo,"P",{});var wl=i(ms);Wh=s(wl,"In this case "),Ar=r(wl,"CODE",{});var Qg=i(Ar);Hh=s(Qg,"call()"),Qg.forEach(t),Uh=s(wl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),wl.forEach(t),Qh=d(Wo),Ze=r(Wo,"P",{});var Et=i(Ze);Gh=s(Et,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),Lr=r(Et,"CODE",{});var Gg=i(Lr);Kh=s(Gg,"tf.keras.Model"),Gg.forEach(t),Jh=s(Et,`.
To call a model on an input, always use the `),Ir=r(Et,"CODE",{});var Kg=i(Ir);Xh=s(Kg,"__call__()"),Kg.forEach(t),Yh=s(Et,` method,
i.e. `),Sr=r(Et,"CODE",{});var Jg=i(Sr);Zh=s(Jg,"model(inputs)"),Jg.forEach(t),em=s(Et,", which relies on the underlying "),Or=r(Et,"CODE",{});var Xg=i(Or);tm=s(Xg,"call()"),Xg.forEach(t),om=s(Et," method."),Et.forEach(t),Wo.forEach(t),Ma.forEach(t),Ni=d(o),Jt=r(o,"H2",{class:!0});var yl=i(Jt);Eo=r(yl,"A",{id:!0,class:!0,href:!0});var Yg=i(Eo);Nr=r(Yg,"SPAN",{});var Zg=i(Nr);v(fs.$$.fragment,Zg),Zg.forEach(t),Yg.forEach(t),nm=d(yl),Wr=r(yl,"SPAN",{});var e_=i(Wr);sm=s(e_,"TFDebertaV2ForMaskedLM"),e_.forEach(t),yl.forEach(t),Wi=d(o),Ge=r(o,"DIV",{class:!0});var Ft=i(Ge);v(us.$$.fragment,Ft),am=d(Ft),Xt=r(Ft,"P",{});var xa=i(Xt);rm=s(xa,"DeBERTa Model with a "),Hr=r(xa,"CODE",{});var t_=i(Hr);im=s(t_,"language modeling"),t_.forEach(t),lm=s(xa,` head on top.
The DeBERTa model was proposed in `),gs=r(xa,"A",{href:!0,rel:!0});var o_=i(gs);dm=s(o_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),o_.forEach(t),cm=s(xa,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),xa.forEach(t),pm=d(Ft),_s=r(Ft,"P",{});var Dl=i(_s);hm=s(Dl,"This model is also a "),bs=r(Dl,"A",{href:!0,rel:!0});var n_=i(bs);mm=s(n_,"tf.keras.Model"),n_.forEach(t),fm=s(Dl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dl.forEach(t),um=d(Ft),v(Fo.$$.fragment,Ft),gm=d(Ft),Ae=r(Ft,"DIV",{class:!0});var lt=i(Ae);v(ks.$$.fragment,lt),_m=d(lt),Yt=r(lt,"P",{});var ja=i(Yt);bm=s(ja,"The "),ha=r(ja,"A",{href:!0});var s_=i(ha);km=s(s_,"TFDebertaV2ForMaskedLM"),s_.forEach(t),vm=s(ja," forward method, overrides the "),Ur=r(ja,"CODE",{});var a_=i(Ur);Tm=s(a_,"__call__"),a_.forEach(t),wm=s(ja," special method."),ja.forEach(t),ym=d(lt),v(Vo.$$.fragment,lt),Dm=d(lt),Qr=r(lt,"P",{});var r_=i(Qr);$m=s(r_,"Example:"),r_.forEach(t),Em=d(lt),v(vs.$$.fragment,lt),Fm=d(lt),v(Ts.$$.fragment,lt),lt.forEach(t),Ft.forEach(t),Hi=d(o),Zt=r(o,"H2",{class:!0});var $l=i(Zt);qo=r($l,"A",{id:!0,class:!0,href:!0});var i_=i(qo);Gr=r(i_,"SPAN",{});var l_=i(Gr);v(ws.$$.fragment,l_),l_.forEach(t),i_.forEach(t),Vm=d($l),Kr=r($l,"SPAN",{});var d_=i(Kr);qm=s(d_,"TFDebertaV2ForSequenceClassification"),d_.forEach(t),$l.forEach(t),Ui=d(o),xe=r(o,"DIV",{class:!0});var dt=i(xe);v(ys.$$.fragment,dt),zm=d(dt),Jr=r(dt,"P",{});var c_=i(Jr);Mm=s(c_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),c_.forEach(t),xm=d(dt),Ds=r(dt,"P",{});var El=i(Ds);jm=s(El,"The DeBERTa model was proposed in "),$s=r(El,"A",{href:!0,rel:!0});var p_=i($s);Cm=s(p_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),p_.forEach(t),Pm=s(El,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),El.forEach(t),Rm=d(dt),Es=r(dt,"P",{});var Fl=i(Es);Bm=s(Fl,"This model is also a "),Fs=r(Fl,"A",{href:!0,rel:!0});var h_=i(Fs);Am=s(h_,"tf.keras.Model"),h_.forEach(t),Lm=s(Fl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Fl.forEach(t),Im=d(dt),v(zo.$$.fragment,dt),Sm=d(dt),Le=r(dt,"DIV",{class:!0});var ct=i(Le);v(Vs.$$.fragment,ct),Om=d(ct),eo=r(ct,"P",{});var Ca=i(eo);Nm=s(Ca,"The "),ma=r(Ca,"A",{href:!0});var m_=i(ma);Wm=s(m_,"TFDebertaV2ForSequenceClassification"),m_.forEach(t),Hm=s(Ca," forward method, overrides the "),Xr=r(Ca,"CODE",{});var f_=i(Xr);Um=s(f_,"__call__"),f_.forEach(t),Qm=s(Ca," special method."),Ca.forEach(t),Gm=d(ct),v(Mo.$$.fragment,ct),Km=d(ct),Yr=r(ct,"P",{});var u_=i(Yr);Jm=s(u_,"Example:"),u_.forEach(t),Xm=d(ct),v(qs.$$.fragment,ct),Ym=d(ct),v(zs.$$.fragment,ct),ct.forEach(t),dt.forEach(t),Qi=d(o),to=r(o,"H2",{class:!0});var Vl=i(to);xo=r(Vl,"A",{id:!0,class:!0,href:!0});var g_=i(xo);Zr=r(g_,"SPAN",{});var __=i(Zr);v(Ms.$$.fragment,__),__.forEach(t),g_.forEach(t),Zm=d(Vl),ei=r(Vl,"SPAN",{});var b_=i(ei);ef=s(b_,"TFDebertaV2ForTokenClassification"),b_.forEach(t),Vl.forEach(t),Gi=d(o),je=r(o,"DIV",{class:!0});var pt=i(je);v(xs.$$.fragment,pt),tf=d(pt),ti=r(pt,"P",{});var k_=i(ti);of=s(k_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),k_.forEach(t),nf=d(pt),js=r(pt,"P",{});var ql=i(js);sf=s(ql,"The DeBERTa model was proposed in "),Cs=r(ql,"A",{href:!0,rel:!0});var v_=i(Cs);af=s(v_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),v_.forEach(t),rf=s(ql,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),ql.forEach(t),lf=d(pt),Ps=r(pt,"P",{});var zl=i(Ps);df=s(zl,"This model is also a "),Rs=r(zl,"A",{href:!0,rel:!0});var T_=i(Rs);cf=s(T_,"tf.keras.Model"),T_.forEach(t),pf=s(zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zl.forEach(t),hf=d(pt),v(jo.$$.fragment,pt),mf=d(pt),Ie=r(pt,"DIV",{class:!0});var ht=i(Ie);v(Bs.$$.fragment,ht),ff=d(ht),oo=r(ht,"P",{});var Pa=i(oo);uf=s(Pa,"The "),fa=r(Pa,"A",{href:!0});var w_=i(fa);gf=s(w_,"TFDebertaV2ForTokenClassification"),w_.forEach(t),_f=s(Pa," forward method, overrides the "),oi=r(Pa,"CODE",{});var y_=i(oi);bf=s(y_,"__call__"),y_.forEach(t),kf=s(Pa," special method."),Pa.forEach(t),vf=d(ht),v(Co.$$.fragment,ht),Tf=d(ht),ni=r(ht,"P",{});var D_=i(ni);wf=s(D_,"Example:"),D_.forEach(t),yf=d(ht),v(As.$$.fragment,ht),Df=d(ht),v(Ls.$$.fragment,ht),ht.forEach(t),pt.forEach(t),Ki=d(o),no=r(o,"H2",{class:!0});var Ml=i(no);Po=r(Ml,"A",{id:!0,class:!0,href:!0});var $_=i(Po);si=r($_,"SPAN",{});var E_=i(si);v(Is.$$.fragment,E_),E_.forEach(t),$_.forEach(t),$f=d(Ml),ai=r(Ml,"SPAN",{});var F_=i(ai);Ef=s(F_,"TFDebertaV2ForQuestionAnswering"),F_.forEach(t),Ml.forEach(t),Ji=d(o),Ce=r(o,"DIV",{class:!0});var mt=i(Ce);v(Ss.$$.fragment,mt),Ff=d(mt),so=r(mt,"P",{});var Ra=i(so);Vf=s(Ra,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ri=r(Ra,"CODE",{});var V_=i(ri);qf=s(V_,"span start logits"),V_.forEach(t),zf=s(Ra," and "),ii=r(Ra,"CODE",{});var q_=i(ii);Mf=s(q_,"span end logits"),q_.forEach(t),xf=s(Ra,")."),Ra.forEach(t),jf=d(mt),Os=r(mt,"P",{});var xl=i(Os);Cf=s(xl,"The DeBERTa model was proposed in "),Ns=r(xl,"A",{href:!0,rel:!0});var z_=i(Ns);Pf=s(z_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),z_.forEach(t),Rf=s(xl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),xl.forEach(t),Bf=d(mt),Ws=r(mt,"P",{});var jl=i(Ws);Af=s(jl,"This model is also a "),Hs=r(jl,"A",{href:!0,rel:!0});var M_=i(Hs);Lf=s(M_,"tf.keras.Model"),M_.forEach(t),If=s(jl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jl.forEach(t),Sf=d(mt),v(Ro.$$.fragment,mt),Of=d(mt),Se=r(mt,"DIV",{class:!0});var ft=i(Se);v(Us.$$.fragment,ft),Nf=d(ft),ao=r(ft,"P",{});var Ba=i(ao);Wf=s(Ba,"The "),ua=r(Ba,"A",{href:!0});var x_=i(ua);Hf=s(x_,"TFDebertaV2ForQuestionAnswering"),x_.forEach(t),Uf=s(Ba," forward method, overrides the "),li=r(Ba,"CODE",{});var j_=i(li);Qf=s(j_,"__call__"),j_.forEach(t),Gf=s(Ba," special method."),Ba.forEach(t),Kf=d(ft),v(Bo.$$.fragment,ft),Jf=d(ft),di=r(ft,"P",{});var C_=i(di);Xf=s(C_,"Example:"),C_.forEach(t),Yf=d(ft),v(Qs.$$.fragment,ft),Zf=d(ft),v(Gs.$$.fragment,ft),ft.forEach(t),mt.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(nb)),c(_,"id","debertav2"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#debertav2"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(q,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(B,"href","https://github.com/microsoft/DeBERTa"),c(B,"rel","nofollow"),c(C,"href","https://github.com/microsoft/DeBERTa"),c(C,"rel","nofollow"),c(oe,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),c(oe,"rel","nofollow"),c(A,"href","https://github.com/google/sentencepiece"),c(A,"rel","nofollow"),c(Ho,"href","https://huggingface.co/DeBERTa"),c(Ho,"rel","nofollow"),c(Uo,"href","https://huggingface.co/kamalkraj"),c(Uo,"rel","nofollow"),c(Qo,"href","https://github.com/microsoft/DeBERTa"),c(Qo,"rel","nofollow"),c(ro,"id","transformers.DebertaV2Config"),c(ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ro,"href","#transformers.DebertaV2Config"),c(Vt,"class","relative group"),c(oa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(Jo,"href","https://huggingface.co/microsoft/deberta-base"),c(Jo,"rel","nofollow"),c(na,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(sa,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(ut,"class","docstring"),c(io,"id","transformers.DebertaV2Tokenizer"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.DebertaV2Tokenizer"),c(Mt,"class","relative group"),c(en,"href","https://github.com/google/sentencepiece"),c(en,"rel","nofollow"),c(bt,"class","docstring"),c(lo,"class","docstring"),c(tt,"class","docstring"),c(aa,"class","docstring"),c(Me,"class","docstring"),c(co,"id","transformers.DebertaV2Model"),c(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(co,"href","#transformers.DebertaV2Model"),c(Ct,"class","relative group"),c(pn,"href","https://arxiv.org/abs/2006.03654"),c(pn,"rel","nofollow"),c(mn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(mn,"rel","nofollow"),c(ra,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(Ke,"class","docstring"),c(Xe,"class","docstring"),c(ho,"id","transformers.DebertaV2PreTrainedModel"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaV2PreTrainedModel"),c(Rt,"class","relative group"),c(ot,"class","docstring"),c(gt,"class","docstring"),c(fo,"id","transformers.DebertaV2ForMaskedLM"),c(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fo,"href","#transformers.DebertaV2ForMaskedLM"),c(Bt,"class","relative group"),c(Tn,"href","https://arxiv.org/abs/2006.03654"),c(Tn,"rel","nofollow"),c(yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(yn,"rel","nofollow"),c(ia,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),c(Pe,"class","docstring"),c(Ye,"class","docstring"),c(go,"id","transformers.DebertaV2ForSequenceClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaV2ForSequenceClassification"),c(It,"class","relative group"),c(zn,"href","https://arxiv.org/abs/2006.03654"),c(zn,"rel","nofollow"),c(xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(xn,"rel","nofollow"),c(la,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),c(ke,"class","docstring"),c(We,"class","docstring"),c(bo,"id","transformers.DebertaV2ForTokenClassification"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaV2ForTokenClassification"),c(Ot,"class","relative group"),c(Sn,"href","https://arxiv.org/abs/2006.03654"),c(Sn,"rel","nofollow"),c(Nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Nn,"rel","nofollow"),c(da,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),c(Re,"class","docstring"),c(He,"class","docstring"),c(vo,"id","transformers.DebertaV2ForQuestionAnswering"),c(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vo,"href","#transformers.DebertaV2ForQuestionAnswering"),c(Wt,"class","relative group"),c(Jn,"href","https://arxiv.org/abs/2006.03654"),c(Jn,"rel","nofollow"),c(Yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Yn,"rel","nofollow"),c(ca,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),c(Be,"class","docstring"),c(Ue,"class","docstring"),c(wo,"id","transformers.TFDebertaV2Model"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.TFDebertaV2Model"),c(Qt,"class","relative group"),c(as,"href","https://arxiv.org/abs/2006.03654"),c(as,"rel","nofollow"),c(is,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(is,"rel","nofollow"),c(pa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),c(Je,"class","docstring"),c(Qe,"class","docstring"),c($o,"id","transformers.TFDebertaV2PreTrainedModel"),c($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c($o,"href","#transformers.TFDebertaV2PreTrainedModel"),c(Kt,"class","relative group"),c(nt,"class","docstring"),c(_t,"class","docstring"),c(Eo,"id","transformers.TFDebertaV2ForMaskedLM"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.TFDebertaV2ForMaskedLM"),c(Jt,"class","relative group"),c(gs,"href","https://arxiv.org/abs/2006.03654"),c(gs,"rel","nofollow"),c(bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(bs,"rel","nofollow"),c(ha,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),c(Ae,"class","docstring"),c(Ge,"class","docstring"),c(qo,"id","transformers.TFDebertaV2ForSequenceClassification"),c(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(qo,"href","#transformers.TFDebertaV2ForSequenceClassification"),c(Zt,"class","relative group"),c($s,"href","https://arxiv.org/abs/2006.03654"),c($s,"rel","nofollow"),c(Fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fs,"rel","nofollow"),c(ma,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),c(Le,"class","docstring"),c(xe,"class","docstring"),c(xo,"id","transformers.TFDebertaV2ForTokenClassification"),c(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(xo,"href","#transformers.TFDebertaV2ForTokenClassification"),c(to,"class","relative group"),c(Cs,"href","https://arxiv.org/abs/2006.03654"),c(Cs,"rel","nofollow"),c(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Rs,"rel","nofollow"),c(fa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),c(Ie,"class","docstring"),c(je,"class","docstring"),c(Po,"id","transformers.TFDebertaV2ForQuestionAnswering"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.TFDebertaV2ForQuestionAnswering"),c(no,"class","relative group"),c(Ns,"href","https://arxiv.org/abs/2006.03654"),c(Ns,"rel","nofollow"),c(Hs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Hs,"rel","nofollow"),c(ua,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),c(Se,"class","docstring"),c(Ce,"class","docstring")},m(o,f){e(document.head,h),m(o,F,f),m(o,u,f),e(u,_),e(_,$),T(b,$,null),e(u,g),e(u,V),e(V,de),m(o,J,f),m(o,q,f),e(q,Y),e(Y,L),T(ee,L,null),e(q,ce),e(q,I),e(I,pe),m(o,re,f),m(o,N,f),e(N,P),e(N,te),e(te,Z),e(N,z),m(o,x,f),m(o,ne,f),e(ne,W),m(o,ie,f),m(o,se,f),e(se,H),m(o,le,f),m(o,ae,f),e(ae,M),e(M,he),e(M,B),e(B,me),e(M,fe),m(o,O,f),m(o,X,f),e(X,ue),e(X,C),e(C,ge),e(X,U),e(X,oe),e(oe,p),m(o,E,f),m(o,G,f),e(G,$e),m(o,De,f),m(o,j,f),e(j,_e),e(_e,we),e(we,Ee),e(_e,R),e(_e,A),e(A,Fe),e(_e,Ve),e(j,Q),e(j,ve),e(ve,ye),e(ye,be),e(ve,qe),e(j,Cl),e(j,Zs),e(Zs,Aa),e(Aa,Pl),e(Zs,Rl),e(j,Bl),e(j,ea),e(ea,La),e(La,Al),e(ea,Ll),e(j,Il),e(j,ta),e(ta,Ia),e(Ia,Sl),e(ta,Ol),m(o,wi,f),m(o,et,f),e(et,Nl),e(et,Ho),e(Ho,Wl),e(et,Hl),e(et,Uo),e(Uo,Ul),e(et,Ql),e(et,Qo),e(Qo,Gl),e(et,Kl),m(o,yi,f),m(o,Vt,f),e(Vt,ro),e(ro,Sa),T(Go,Sa,null),e(Vt,Jl),e(Vt,Oa),e(Oa,Xl),m(o,Di,f),m(o,ut,f),T(Ko,ut,null),e(ut,Yl),e(ut,qt),e(qt,Zl),e(qt,oa),e(oa,ed),e(qt,td),e(qt,Jo),e(Jo,od),e(qt,nd),e(ut,sd),e(ut,zt),e(zt,ad),e(zt,na),e(na,rd),e(zt,id),e(zt,sa),e(sa,ld),e(zt,dd),m(o,$i,f),m(o,Mt,f),e(Mt,io),e(io,Na),T(Xo,Na,null),e(Mt,cd),e(Mt,Wa),e(Wa,pd),m(o,Ei,f),m(o,Me,f),T(Yo,Me,null),e(Me,hd),e(Me,Zo),e(Zo,md),e(Zo,en),e(en,fd),e(Zo,ud),e(Me,gd),e(Me,bt),T(tn,bt,null),e(bt,_d),e(bt,Ha),e(Ha,bd),e(bt,kd),e(bt,on),e(on,Ua),e(Ua,vd),e(on,Td),e(on,Qa),e(Qa,wd),e(Me,yd),e(Me,lo),T(nn,lo,null),e(lo,Dd),e(lo,xt),e(xt,$d),e(xt,Ga),e(Ga,Ed),e(xt,Fd),e(xt,Ka),e(Ka,Vd),e(xt,qd),e(Me,zd),e(Me,tt),T(sn,tt,null),e(tt,Md),e(tt,Ja),e(Ja,xd),e(tt,jd),T(an,tt,null),e(tt,Cd),e(tt,jt),e(jt,Pd),e(jt,Xa),e(Xa,Rd),e(jt,Bd),e(jt,Ya),e(Ya,Ad),e(jt,Ld),e(Me,Id),e(Me,aa),T(rn,aa,null),m(o,Fi,f),m(o,Ct,f),e(Ct,co),e(co,Za),T(ln,Za,null),e(Ct,Sd),e(Ct,er),e(er,Od),m(o,Vi,f),m(o,Xe,f),T(dn,Xe,null),e(Xe,Nd),e(Xe,cn),e(cn,Wd),e(cn,pn),e(pn,Hd),e(cn,Ud),e(Xe,Qd),e(Xe,hn),e(hn,Gd),e(hn,mn),e(mn,Kd),e(hn,Jd),e(Xe,Xd),e(Xe,Ke),T(fn,Ke,null),e(Ke,Yd),e(Ke,Pt),e(Pt,Zd),e(Pt,ra),e(ra,ec),e(Pt,tc),e(Pt,tr),e(tr,oc),e(Pt,nc),e(Ke,sc),T(po,Ke,null),e(Ke,ac),e(Ke,or),e(or,rc),e(Ke,ic),T(un,Ke,null),m(o,qi,f),m(o,Rt,f),e(Rt,ho),e(ho,nr),T(gn,nr,null),e(Rt,lc),e(Rt,sr),e(sr,dc),m(o,zi,f),m(o,gt,f),T(_n,gt,null),e(gt,cc),e(gt,ar),e(ar,pc),e(gt,hc),e(gt,ot),T(bn,ot,null),e(ot,mc),e(ot,rr),e(rr,fc),e(ot,uc),e(ot,ir),e(ir,gc),e(ot,_c),T(mo,ot,null),m(o,Mi,f),m(o,Bt,f),e(Bt,fo),e(fo,lr),T(kn,lr,null),e(Bt,bc),e(Bt,dr),e(dr,kc),m(o,xi,f),m(o,Ye,f),T(vn,Ye,null),e(Ye,vc),e(Ye,At),e(At,Tc),e(At,cr),e(cr,wc),e(At,yc),e(At,Tn),e(Tn,Dc),e(At,$c),e(Ye,Ec),e(Ye,wn),e(wn,Fc),e(wn,yn),e(yn,Vc),e(wn,qc),e(Ye,zc),e(Ye,Pe),T(Dn,Pe,null),e(Pe,Mc),e(Pe,Lt),e(Lt,xc),e(Lt,ia),e(ia,jc),e(Lt,Cc),e(Lt,pr),e(pr,Pc),e(Lt,Rc),e(Pe,Bc),T(uo,Pe,null),e(Pe,Ac),e(Pe,hr),e(hr,Lc),e(Pe,Ic),T($n,Pe,null),e(Pe,Sc),T(En,Pe,null),m(o,ji,f),m(o,It,f),e(It,go),e(go,mr),T(Fn,mr,null),e(It,Oc),e(It,fr),e(fr,Nc),m(o,Ci,f),m(o,We,f),T(Vn,We,null),e(We,Wc),e(We,ur),e(ur,Hc),e(We,Uc),e(We,qn),e(qn,Qc),e(qn,zn),e(zn,Gc),e(qn,Kc),e(We,Jc),e(We,Mn),e(Mn,Xc),e(Mn,xn),e(xn,Yc),e(Mn,Zc),e(We,ep),e(We,ke),T(jn,ke,null),e(ke,tp),e(ke,St),e(St,op),e(St,la),e(la,np),e(St,sp),e(St,gr),e(gr,ap),e(St,rp),e(ke,ip),T(_o,ke,null),e(ke,lp),e(ke,_r),e(_r,dp),e(ke,cp),T(Cn,ke,null),e(ke,pp),T(Pn,ke,null),e(ke,hp),e(ke,br),e(br,mp),e(ke,fp),T(Rn,ke,null),e(ke,up),T(Bn,ke,null),m(o,Pi,f),m(o,Ot,f),e(Ot,bo),e(bo,kr),T(An,kr,null),e(Ot,gp),e(Ot,vr),e(vr,_p),m(o,Ri,f),m(o,He,f),T(Ln,He,null),e(He,bp),e(He,Tr),e(Tr,kp),e(He,vp),e(He,In),e(In,Tp),e(In,Sn),e(Sn,wp),e(In,yp),e(He,Dp),e(He,On),e(On,$p),e(On,Nn),e(Nn,Ep),e(On,Fp),e(He,Vp),e(He,Re),T(Wn,Re,null),e(Re,qp),e(Re,Nt),e(Nt,zp),e(Nt,da),e(da,Mp),e(Nt,xp),e(Nt,wr),e(wr,jp),e(Nt,Cp),e(Re,Pp),T(ko,Re,null),e(Re,Rp),e(Re,yr),e(yr,Bp),e(Re,Ap),T(Hn,Re,null),e(Re,Lp),T(Un,Re,null),m(o,Bi,f),m(o,Wt,f),e(Wt,vo),e(vo,Dr),T(Qn,Dr,null),e(Wt,Ip),e(Wt,$r),e($r,Sp),m(o,Ai,f),m(o,Ue,f),T(Gn,Ue,null),e(Ue,Op),e(Ue,Ht),e(Ht,Np),e(Ht,Er),e(Er,Wp),e(Ht,Hp),e(Ht,Fr),e(Fr,Up),e(Ht,Qp),e(Ue,Gp),e(Ue,Kn),e(Kn,Kp),e(Kn,Jn),e(Jn,Jp),e(Kn,Xp),e(Ue,Yp),e(Ue,Xn),e(Xn,Zp),e(Xn,Yn),e(Yn,eh),e(Xn,th),e(Ue,oh),e(Ue,Be),T(Zn,Be,null),e(Be,nh),e(Be,Ut),e(Ut,sh),e(Ut,ca),e(ca,ah),e(Ut,rh),e(Ut,Vr),e(Vr,ih),e(Ut,lh),e(Be,dh),T(To,Be,null),e(Be,ch),e(Be,qr),e(qr,ph),e(Be,hh),T(es,Be,null),e(Be,mh),T(ts,Be,null),m(o,Li,f),m(o,Qt,f),e(Qt,wo),e(wo,zr),T(os,zr,null),e(Qt,fh),e(Qt,Mr),e(Mr,uh),m(o,Ii,f),m(o,Qe,f),T(ns,Qe,null),e(Qe,gh),e(Qe,ss),e(ss,_h),e(ss,as),e(as,bh),e(ss,kh),e(Qe,vh),e(Qe,rs),e(rs,Th),e(rs,is),e(is,wh),e(rs,yh),e(Qe,Dh),T(yo,Qe,null),e(Qe,$h),e(Qe,Je),T(ls,Je,null),e(Je,Eh),e(Je,Gt),e(Gt,Fh),e(Gt,pa),e(pa,Vh),e(Gt,qh),e(Gt,xr),e(xr,zh),e(Gt,Mh),e(Je,xh),T(Do,Je,null),e(Je,jh),e(Je,jr),e(jr,Ch),e(Je,Ph),T(ds,Je,null),m(o,Si,f),m(o,Kt,f),e(Kt,$o),e($o,Cr),T(cs,Cr,null),e(Kt,Rh),e(Kt,Pr),e(Pr,Bh),m(o,Oi,f),m(o,_t,f),T(ps,_t,null),e(_t,Ah),e(_t,Rr),e(Rr,Lh),e(_t,Ih),e(_t,nt),T(hs,nt,null),e(nt,Sh),e(nt,Br),e(Br,Oh),e(nt,Nh),e(nt,ms),e(ms,Wh),e(ms,Ar),e(Ar,Hh),e(ms,Uh),e(nt,Qh),e(nt,Ze),e(Ze,Gh),e(Ze,Lr),e(Lr,Kh),e(Ze,Jh),e(Ze,Ir),e(Ir,Xh),e(Ze,Yh),e(Ze,Sr),e(Sr,Zh),e(Ze,em),e(Ze,Or),e(Or,tm),e(Ze,om),m(o,Ni,f),m(o,Jt,f),e(Jt,Eo),e(Eo,Nr),T(fs,Nr,null),e(Jt,nm),e(Jt,Wr),e(Wr,sm),m(o,Wi,f),m(o,Ge,f),T(us,Ge,null),e(Ge,am),e(Ge,Xt),e(Xt,rm),e(Xt,Hr),e(Hr,im),e(Xt,lm),e(Xt,gs),e(gs,dm),e(Xt,cm),e(Ge,pm),e(Ge,_s),e(_s,hm),e(_s,bs),e(bs,mm),e(_s,fm),e(Ge,um),T(Fo,Ge,null),e(Ge,gm),e(Ge,Ae),T(ks,Ae,null),e(Ae,_m),e(Ae,Yt),e(Yt,bm),e(Yt,ha),e(ha,km),e(Yt,vm),e(Yt,Ur),e(Ur,Tm),e(Yt,wm),e(Ae,ym),T(Vo,Ae,null),e(Ae,Dm),e(Ae,Qr),e(Qr,$m),e(Ae,Em),T(vs,Ae,null),e(Ae,Fm),T(Ts,Ae,null),m(o,Hi,f),m(o,Zt,f),e(Zt,qo),e(qo,Gr),T(ws,Gr,null),e(Zt,Vm),e(Zt,Kr),e(Kr,qm),m(o,Ui,f),m(o,xe,f),T(ys,xe,null),e(xe,zm),e(xe,Jr),e(Jr,Mm),e(xe,xm),e(xe,Ds),e(Ds,jm),e(Ds,$s),e($s,Cm),e(Ds,Pm),e(xe,Rm),e(xe,Es),e(Es,Bm),e(Es,Fs),e(Fs,Am),e(Es,Lm),e(xe,Im),T(zo,xe,null),e(xe,Sm),e(xe,Le),T(Vs,Le,null),e(Le,Om),e(Le,eo),e(eo,Nm),e(eo,ma),e(ma,Wm),e(eo,Hm),e(eo,Xr),e(Xr,Um),e(eo,Qm),e(Le,Gm),T(Mo,Le,null),e(Le,Km),e(Le,Yr),e(Yr,Jm),e(Le,Xm),T(qs,Le,null),e(Le,Ym),T(zs,Le,null),m(o,Qi,f),m(o,to,f),e(to,xo),e(xo,Zr),T(Ms,Zr,null),e(to,Zm),e(to,ei),e(ei,ef),m(o,Gi,f),m(o,je,f),T(xs,je,null),e(je,tf),e(je,ti),e(ti,of),e(je,nf),e(je,js),e(js,sf),e(js,Cs),e(Cs,af),e(js,rf),e(je,lf),e(je,Ps),e(Ps,df),e(Ps,Rs),e(Rs,cf),e(Ps,pf),e(je,hf),T(jo,je,null),e(je,mf),e(je,Ie),T(Bs,Ie,null),e(Ie,ff),e(Ie,oo),e(oo,uf),e(oo,fa),e(fa,gf),e(oo,_f),e(oo,oi),e(oi,bf),e(oo,kf),e(Ie,vf),T(Co,Ie,null),e(Ie,Tf),e(Ie,ni),e(ni,wf),e(Ie,yf),T(As,Ie,null),e(Ie,Df),T(Ls,Ie,null),m(o,Ki,f),m(o,no,f),e(no,Po),e(Po,si),T(Is,si,null),e(no,$f),e(no,ai),e(ai,Ef),m(o,Ji,f),m(o,Ce,f),T(Ss,Ce,null),e(Ce,Ff),e(Ce,so),e(so,Vf),e(so,ri),e(ri,qf),e(so,zf),e(so,ii),e(ii,Mf),e(so,xf),e(Ce,jf),e(Ce,Os),e(Os,Cf),e(Os,Ns),e(Ns,Pf),e(Os,Rf),e(Ce,Bf),e(Ce,Ws),e(Ws,Af),e(Ws,Hs),e(Hs,Lf),e(Ws,If),e(Ce,Sf),T(Ro,Ce,null),e(Ce,Of),e(Ce,Se),T(Us,Se,null),e(Se,Nf),e(Se,ao),e(ao,Wf),e(ao,ua),e(ua,Hf),e(ao,Uf),e(ao,li),e(li,Qf),e(ao,Gf),e(Se,Kf),T(Bo,Se,null),e(Se,Jf),e(Se,di),e(di,Xf),e(Se,Yf),T(Qs,Se,null),e(Se,Zf),T(Gs,Se,null),Xi=!0},p(o,[f]){const Ks={};f&2&&(Ks.$$scope={dirty:f,ctx:o}),po.$set(Ks);const ci={};f&2&&(ci.$$scope={dirty:f,ctx:o}),mo.$set(ci);const pi={};f&2&&(pi.$$scope={dirty:f,ctx:o}),uo.$set(pi);const hi={};f&2&&(hi.$$scope={dirty:f,ctx:o}),_o.$set(hi);const Js={};f&2&&(Js.$$scope={dirty:f,ctx:o}),ko.$set(Js);const mi={};f&2&&(mi.$$scope={dirty:f,ctx:o}),To.$set(mi);const fi={};f&2&&(fi.$$scope={dirty:f,ctx:o}),yo.$set(fi);const ui={};f&2&&(ui.$$scope={dirty:f,ctx:o}),Do.$set(ui);const Xs={};f&2&&(Xs.$$scope={dirty:f,ctx:o}),Fo.$set(Xs);const gi={};f&2&&(gi.$$scope={dirty:f,ctx:o}),Vo.$set(gi);const _i={};f&2&&(_i.$$scope={dirty:f,ctx:o}),zo.$set(_i);const bi={};f&2&&(bi.$$scope={dirty:f,ctx:o}),Mo.$set(bi);const ki={};f&2&&(ki.$$scope={dirty:f,ctx:o}),jo.$set(ki);const Ys={};f&2&&(Ys.$$scope={dirty:f,ctx:o}),Co.$set(Ys);const vi={};f&2&&(vi.$$scope={dirty:f,ctx:o}),Ro.$set(vi);const Ao={};f&2&&(Ao.$$scope={dirty:f,ctx:o}),Bo.$set(Ao)},i(o){Xi||(w(b.$$.fragment,o),w(ee.$$.fragment,o),w(Go.$$.fragment,o),w(Ko.$$.fragment,o),w(Xo.$$.fragment,o),w(Yo.$$.fragment,o),w(tn.$$.fragment,o),w(nn.$$.fragment,o),w(sn.$$.fragment,o),w(an.$$.fragment,o),w(rn.$$.fragment,o),w(ln.$$.fragment,o),w(dn.$$.fragment,o),w(fn.$$.fragment,o),w(po.$$.fragment,o),w(un.$$.fragment,o),w(gn.$$.fragment,o),w(_n.$$.fragment,o),w(bn.$$.fragment,o),w(mo.$$.fragment,o),w(kn.$$.fragment,o),w(vn.$$.fragment,o),w(Dn.$$.fragment,o),w(uo.$$.fragment,o),w($n.$$.fragment,o),w(En.$$.fragment,o),w(Fn.$$.fragment,o),w(Vn.$$.fragment,o),w(jn.$$.fragment,o),w(_o.$$.fragment,o),w(Cn.$$.fragment,o),w(Pn.$$.fragment,o),w(Rn.$$.fragment,o),w(Bn.$$.fragment,o),w(An.$$.fragment,o),w(Ln.$$.fragment,o),w(Wn.$$.fragment,o),w(ko.$$.fragment,o),w(Hn.$$.fragment,o),w(Un.$$.fragment,o),w(Qn.$$.fragment,o),w(Gn.$$.fragment,o),w(Zn.$$.fragment,o),w(To.$$.fragment,o),w(es.$$.fragment,o),w(ts.$$.fragment,o),w(os.$$.fragment,o),w(ns.$$.fragment,o),w(yo.$$.fragment,o),w(ls.$$.fragment,o),w(Do.$$.fragment,o),w(ds.$$.fragment,o),w(cs.$$.fragment,o),w(ps.$$.fragment,o),w(hs.$$.fragment,o),w(fs.$$.fragment,o),w(us.$$.fragment,o),w(Fo.$$.fragment,o),w(ks.$$.fragment,o),w(Vo.$$.fragment,o),w(vs.$$.fragment,o),w(Ts.$$.fragment,o),w(ws.$$.fragment,o),w(ys.$$.fragment,o),w(zo.$$.fragment,o),w(Vs.$$.fragment,o),w(Mo.$$.fragment,o),w(qs.$$.fragment,o),w(zs.$$.fragment,o),w(Ms.$$.fragment,o),w(xs.$$.fragment,o),w(jo.$$.fragment,o),w(Bs.$$.fragment,o),w(Co.$$.fragment,o),w(As.$$.fragment,o),w(Ls.$$.fragment,o),w(Is.$$.fragment,o),w(Ss.$$.fragment,o),w(Ro.$$.fragment,o),w(Us.$$.fragment,o),w(Bo.$$.fragment,o),w(Qs.$$.fragment,o),w(Gs.$$.fragment,o),Xi=!0)},o(o){y(b.$$.fragment,o),y(ee.$$.fragment,o),y(Go.$$.fragment,o),y(Ko.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),y(tn.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(dn.$$.fragment,o),y(fn.$$.fragment,o),y(po.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(bn.$$.fragment,o),y(mo.$$.fragment,o),y(kn.$$.fragment,o),y(vn.$$.fragment,o),y(Dn.$$.fragment,o),y(uo.$$.fragment,o),y($n.$$.fragment,o),y(En.$$.fragment,o),y(Fn.$$.fragment,o),y(Vn.$$.fragment,o),y(jn.$$.fragment,o),y(_o.$$.fragment,o),y(Cn.$$.fragment,o),y(Pn.$$.fragment,o),y(Rn.$$.fragment,o),y(Bn.$$.fragment,o),y(An.$$.fragment,o),y(Ln.$$.fragment,o),y(Wn.$$.fragment,o),y(ko.$$.fragment,o),y(Hn.$$.fragment,o),y(Un.$$.fragment,o),y(Qn.$$.fragment,o),y(Gn.$$.fragment,o),y(Zn.$$.fragment,o),y(To.$$.fragment,o),y(es.$$.fragment,o),y(ts.$$.fragment,o),y(os.$$.fragment,o),y(ns.$$.fragment,o),y(yo.$$.fragment,o),y(ls.$$.fragment,o),y(Do.$$.fragment,o),y(ds.$$.fragment,o),y(cs.$$.fragment,o),y(ps.$$.fragment,o),y(hs.$$.fragment,o),y(fs.$$.fragment,o),y(us.$$.fragment,o),y(Fo.$$.fragment,o),y(ks.$$.fragment,o),y(Vo.$$.fragment,o),y(vs.$$.fragment,o),y(Ts.$$.fragment,o),y(ws.$$.fragment,o),y(ys.$$.fragment,o),y(zo.$$.fragment,o),y(Vs.$$.fragment,o),y(Mo.$$.fragment,o),y(qs.$$.fragment,o),y(zs.$$.fragment,o),y(Ms.$$.fragment,o),y(xs.$$.fragment,o),y(jo.$$.fragment,o),y(Bs.$$.fragment,o),y(Co.$$.fragment,o),y(As.$$.fragment,o),y(Ls.$$.fragment,o),y(Is.$$.fragment,o),y(Ss.$$.fragment,o),y(Ro.$$.fragment,o),y(Us.$$.fragment,o),y(Bo.$$.fragment,o),y(Qs.$$.fragment,o),y(Gs.$$.fragment,o),Xi=!1},d(o){t(h),o&&t(F),o&&t(u),D(b),o&&t(J),o&&t(q),D(ee),o&&t(re),o&&t(N),o&&t(x),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(ae),o&&t(O),o&&t(X),o&&t(E),o&&t(G),o&&t(De),o&&t(j),o&&t(wi),o&&t(et),o&&t(yi),o&&t(Vt),D(Go),o&&t(Di),o&&t(ut),D(Ko),o&&t($i),o&&t(Mt),D(Xo),o&&t(Ei),o&&t(Me),D(Yo),D(tn),D(nn),D(sn),D(an),D(rn),o&&t(Fi),o&&t(Ct),D(ln),o&&t(Vi),o&&t(Xe),D(dn),D(fn),D(po),D(un),o&&t(qi),o&&t(Rt),D(gn),o&&t(zi),o&&t(gt),D(_n),D(bn),D(mo),o&&t(Mi),o&&t(Bt),D(kn),o&&t(xi),o&&t(Ye),D(vn),D(Dn),D(uo),D($n),D(En),o&&t(ji),o&&t(It),D(Fn),o&&t(Ci),o&&t(We),D(Vn),D(jn),D(_o),D(Cn),D(Pn),D(Rn),D(Bn),o&&t(Pi),o&&t(Ot),D(An),o&&t(Ri),o&&t(He),D(Ln),D(Wn),D(ko),D(Hn),D(Un),o&&t(Bi),o&&t(Wt),D(Qn),o&&t(Ai),o&&t(Ue),D(Gn),D(Zn),D(To),D(es),D(ts),o&&t(Li),o&&t(Qt),D(os),o&&t(Ii),o&&t(Qe),D(ns),D(yo),D(ls),D(Do),D(ds),o&&t(Si),o&&t(Kt),D(cs),o&&t(Oi),o&&t(_t),D(ps),D(hs),o&&t(Ni),o&&t(Jt),D(fs),o&&t(Wi),o&&t(Ge),D(us),D(Fo),D(ks),D(Vo),D(vs),D(Ts),o&&t(Hi),o&&t(Zt),D(ws),o&&t(Ui),o&&t(xe),D(ys),D(zo),D(Vs),D(Mo),D(qs),D(zs),o&&t(Qi),o&&t(to),D(Ms),o&&t(Gi),o&&t(je),D(xs),D(jo),D(Bs),D(Co),D(As),D(Ls),o&&t(Ki),o&&t(no),D(Is),o&&t(Ji),o&&t(Ce),D(Ss),D(Ro),D(Us),D(Bo),D(Qs),D(Gs)}}}const nb={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function sb(S){return L_(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class cb extends P_{constructor(h){super();R_(this,h,sb,ob,B_,{})}}export{cb as default,nb as metadata};
