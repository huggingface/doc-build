import{S as Hb,i as Ub,s as Qb,e as a,k as l,w as k,t as n,M as Gb,c as r,d as t,m as d,a as i,x as v,h as s,b as c,F as e,g as m,y as T,q as w,o as y,B as D,v as Kb}from"../../chunks/vendor-6b77c823.js";import{T as Ne}from"../../chunks/Tip-39098574.js";import{D as G}from"../../chunks/Docstring-1088f2fb.js";import{C as ve}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Pe}from"../../chunks/IconCopyLink-7a11ce68.js";function Jb(I){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function Xb(I){let h,F,u,_,$;return{c(){h=a("p"),F=n(`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=a("code"),_=n("Module"),$=n(` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,`Although the recipe for forward pass needs to be defined within
this function, one should call the `),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,` instance afterwards
instead of this since the former takes care of running the
registered hooks while the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function Yb(I){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function Zb(I){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function e2(I){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function t2(I){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function o2(I){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,S,pe,re,N,P,te,Z,x,M,ne,W,ie,se,H,le,ae,z,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),x=a("ul"),M=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),z=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var K=i(_);$=r(K,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(j,"CODE",{});var we=i(S);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),P=r(p,"P",{});var Ee=i(P);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),x=r(p,"UL",{});var R=i(x);M=r(R,"LI",{});var A=i(M);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(R),z=r(R,"LI",{});var Q=i(z);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var Te=i(B);me=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(R),C=r(R,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),R.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,S),e(S,pe),e(q,re),m(p,N,E),m(p,P,E),e(P,te),m(p,Z,E),m(p,x,E),e(x,M),e(M,ne),e(M,W),e(W,ie),e(M,se),e(M,H),e(H,le),e(x,ae),e(x,z),e(z,he),e(z,B),e(B,me),e(z,fe),e(z,O),e(O,X),e(x,ue),e(x,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(P),p&&t(Z),p&&t(x)}}}function n2(I){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function s2(I){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,S,pe,re,N,P,te,Z,x,M,ne,W,ie,se,H,le,ae,z,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),x=a("ul"),M=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),z=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var K=i(_);$=r(K,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(j,"CODE",{});var we=i(S);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),P=r(p,"P",{});var Ee=i(P);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),x=r(p,"UL",{});var R=i(x);M=r(R,"LI",{});var A=i(M);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(R),z=r(R,"LI",{});var Q=i(z);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var Te=i(B);me=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(R),C=r(R,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),R.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,S),e(S,pe),e(q,re),m(p,N,E),m(p,P,E),e(P,te),m(p,Z,E),m(p,x,E),e(x,M),e(M,ne),e(M,W),e(W,ie),e(M,se),e(M,H),e(H,le),e(x,ae),e(x,z),e(z,he),e(z,B),e(B,me),e(z,fe),e(z,O),e(O,X),e(x,ue),e(x,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(P),p&&t(Z),p&&t(x)}}}function a2(I){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function r2(I){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,S,pe,re,N,P,te,Z,x,M,ne,W,ie,se,H,le,ae,z,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),x=a("ul"),M=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),z=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var K=i(_);$=r(K,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(j,"CODE",{});var we=i(S);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),P=r(p,"P",{});var Ee=i(P);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),x=r(p,"UL",{});var R=i(x);M=r(R,"LI",{});var A=i(M);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(R),z=r(R,"LI",{});var Q=i(z);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var Te=i(B);me=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(R),C=r(R,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),R.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,S),e(S,pe),e(q,re),m(p,N,E),m(p,P,E),e(P,te),m(p,Z,E),m(p,x,E),e(x,M),e(M,ne),e(M,W),e(W,ie),e(M,se),e(M,H),e(H,le),e(x,ae),e(x,z),e(z,he),e(z,B),e(B,me),e(z,fe),e(z,O),e(O,X),e(x,ue),e(x,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(P),p&&t(Z),p&&t(x)}}}function i2(I){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function l2(I){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,S,pe,re,N,P,te,Z,x,M,ne,W,ie,se,H,le,ae,z,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),x=a("ul"),M=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),z=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var K=i(_);$=r(K,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(j,"CODE",{});var we=i(S);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),P=r(p,"P",{});var Ee=i(P);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),x=r(p,"UL",{});var R=i(x);M=r(R,"LI",{});var A=i(M);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(R),z=r(R,"LI",{});var Q=i(z);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var Te=i(B);me=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(R),C=r(R,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),R.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,S),e(S,pe),e(q,re),m(p,N,E),m(p,P,E),e(P,te),m(p,Z,E),m(p,x,E),e(x,M),e(M,ne),e(M,W),e(W,ie),e(M,se),e(M,H),e(H,le),e(x,ae),e(x,z),e(z,he),e(z,B),e(B,me),e(z,fe),e(z,O),e(O,X),e(x,ue),e(x,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(P),p&&t(Z),p&&t(x)}}}function d2(I){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function c2(I){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,S,pe,re,N,P,te,Z,x,M,ne,W,ie,se,H,le,ae,z,he,B,me,fe,O,X,ue,C,ge,U,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),u=l(),_=a("ul"),$=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),V=a("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),q=a("p"),Y=n("This second option is useful when using "),L=a("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),re=n("."),N=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),x=a("ul"),M=a("li"),ne=n("a single Tensor with "),W=a("code"),ie=n("input_ids"),se=n(" only and nothing else: "),H=a("code"),le=n("model(inputs_ids)"),ae=l(),z=a("li"),he=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=a("code"),me=n("model([input_ids, attention_mask])"),fe=n(" or "),O=a("code"),X=n("model([input_ids, attention_mask, token_type_ids])"),ue=l(),C=a("li"),ge=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var E=i(h);F=s(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(t),u=d(p),_=r(p,"UL",{});var K=i(_);$=r(K,"LI",{});var $e=i($);b=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),g=d(K),V=r(K,"LI",{});var De=i(V);de=s(De,"having all inputs as a list, tuple or dict in the first positional arguments."),De.forEach(t),K.forEach(t),J=d(p),q=r(p,"P",{});var j=i(q);Y=s(j,"This second option is useful when using "),L=r(j,"CODE",{});var _e=i(L);ee=s(_e,"tf.keras.Model.fit"),_e.forEach(t),ce=s(j,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(j,"CODE",{});var we=i(S);pe=s(we,"model(inputs)"),we.forEach(t),re=s(j,"."),j.forEach(t),N=d(p),P=r(p,"P",{});var Ee=i(P);te=s(Ee,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Ee.forEach(t),Z=d(p),x=r(p,"UL",{});var R=i(x);M=r(R,"LI",{});var A=i(M);ne=s(A,"a single Tensor with "),W=r(A,"CODE",{});var Fe=i(W);ie=s(Fe,"input_ids"),Fe.forEach(t),se=s(A," only and nothing else: "),H=r(A,"CODE",{});var Ve=i(H);le=s(Ve,"model(inputs_ids)"),Ve.forEach(t),A.forEach(t),ae=d(R),z=r(R,"LI",{});var Q=i(z);he=s(Q,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),B=r(Q,"CODE",{});var Te=i(B);me=s(Te,"model([input_ids, attention_mask])"),Te.forEach(t),fe=s(Q," or "),O=r(Q,"CODE",{});var ye=i(O);X=s(ye,"model([input_ids, attention_mask, token_type_ids])"),ye.forEach(t),Q.forEach(t),ue=d(R),C=r(R,"LI",{});var be=i(C);ge=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(be,"CODE",{});var qe=i(U);oe=s(qe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),qe.forEach(t),be.forEach(t),R.forEach(t)},m(p,E){m(p,h,E),e(h,F),m(p,u,E),m(p,_,E),e(_,$),e($,b),e(_,g),e(_,V),e(V,de),m(p,J,E),m(p,q,E),e(q,Y),e(q,L),e(L,ee),e(q,ce),e(q,S),e(S,pe),e(q,re),m(p,N,E),m(p,P,E),e(P,te),m(p,Z,E),m(p,x,E),e(x,M),e(M,ne),e(M,W),e(W,ie),e(M,se),e(M,H),e(H,le),e(x,ae),e(x,z),e(z,he),e(z,B),e(B,me),e(z,fe),e(z,O),e(O,X),e(x,ue),e(x,C),e(C,ge),e(C,U),e(U,oe)},d(p){p&&t(h),p&&t(u),p&&t(_),p&&t(J),p&&t(q),p&&t(N),p&&t(P),p&&t(Z),p&&t(x)}}}function p2(I){let h,F,u,_,$;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),u=a("code"),_=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var g=i(h);F=s(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),u=r(g,"CODE",{});var V=i(u);_=s(V,"Module"),V.forEach(t),$=s(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(b,g){m(b,h,g),e(h,F),e(h,u),e(u,_),e(h,$)},d(b){b&&t(h)}}}function h2(I){let h,F,u,_,$,b,g,V,de,J,q,Y,L,ee,ce,S,pe,re,N,P,te,Z,x,M,ne,W,ie,se,H,le,ae,z,he,B,me,fe,O,X,ue,C,ge,U,oe,p,E,K,$e,De,j,_e,we,Ee,R,A,Fe,Ve,Q,Te,ye,be,qe,pd,ua,or,hd,md,fd,ga,nr,ud,gd,_d,_a,sr,bd,kd,Gi,tt,vd,Zo,Td,wd,en,yd,Dd,tn,$d,Ed,Ki,zt,ho,ar,on,Fd,rr,Vd,Ji,_t,nn,qd,Mt,xd,ba,zd,Md,sn,jd,Cd,Pd,jt,Rd,ka,Bd,Ad,va,Ld,Sd,Xi,Ct,mo,ir,an,Id,lr,Od,Yi,ze,rn,Nd,ln,Wd,dn,Hd,Ud,Qd,vt,cn,Gd,dr,Kd,Jd,pn,cr,Xd,Yd,pr,Zd,ec,fo,hn,tc,Pt,oc,hr,nc,sc,mr,ac,rc,ic,ot,mn,lc,fr,dc,cc,fn,pc,Rt,hc,ur,mc,fc,gr,uc,gc,_c,Ta,un,Zi,Bt,uo,_r,gn,bc,br,kc,el,Xe,_n,vc,bn,Tc,kn,wc,yc,Dc,Tt,vn,$c,kr,Ec,Fc,Tn,vr,Vc,qc,Tr,xc,zc,nt,wn,Mc,wr,jc,Cc,yn,Pc,At,Rc,yr,Bc,Ac,Dr,Lc,Sc,tl,Lt,go,$r,Dn,Ic,Er,Oc,ol,Ye,$n,Nc,En,Wc,Fn,Hc,Uc,Qc,Vn,Gc,qn,Kc,Jc,Xc,Ke,xn,Yc,St,Zc,wa,ep,tp,Fr,op,np,sp,_o,ap,Vr,rp,ip,zn,nl,It,bo,qr,Mn,lp,xr,dp,sl,bt,jn,cp,zr,pp,hp,st,Cn,mp,Mr,fp,up,jr,gp,_p,ko,al,Ot,vo,Cr,Pn,bp,Pr,kp,rl,Ze,Rn,vp,Nt,Tp,Rr,wp,yp,Bn,Dp,$p,Ep,An,Fp,Ln,Vp,qp,xp,Re,Sn,zp,Wt,Mp,ya,jp,Cp,Br,Pp,Rp,Bp,To,Ap,Ar,Lp,Sp,In,Ip,On,il,Ht,wo,Lr,Nn,Op,Sr,Np,ll,We,Wn,Wp,Ir,Hp,Up,Hn,Qp,Un,Gp,Kp,Jp,Qn,Xp,Gn,Yp,Zp,eh,ke,Kn,th,Ut,oh,Da,nh,sh,Or,ah,rh,ih,yo,lh,Nr,dh,ch,Jn,ph,Xn,hh,Wr,mh,fh,Yn,uh,Zn,dl,Qt,Do,Hr,es,gh,Ur,_h,cl,He,ts,bh,Qr,kh,vh,os,Th,ns,wh,yh,Dh,ss,$h,as,Eh,Fh,Vh,Be,rs,qh,Gt,xh,$a,zh,Mh,Gr,jh,Ch,Ph,$o,Rh,Kr,Bh,Ah,is,Lh,ls,pl,Kt,Eo,Jr,ds,Sh,Xr,Ih,hl,Ue,cs,Oh,Jt,Nh,Yr,Wh,Hh,Zr,Uh,Qh,Gh,ps,Kh,hs,Jh,Xh,Yh,ms,Zh,fs,em,tm,om,Ae,us,nm,Xt,sm,Ea,am,rm,ei,im,lm,dm,Fo,cm,ti,pm,hm,gs,mm,_s,ml,Yt,Vo,oi,bs,fm,ni,um,fl,Qe,ks,gm,vs,_m,Ts,bm,km,vm,ws,Tm,ys,wm,ym,Dm,qo,$m,Je,Ds,Em,Zt,Fm,Fa,Vm,qm,si,xm,zm,Mm,xo,jm,ai,Cm,Pm,$s,ul,eo,zo,ri,Es,Rm,ii,Bm,gl,kt,Fs,Am,li,Lm,Sm,at,Vs,Im,di,Om,Nm,qs,Wm,ci,Hm,Um,Qm,et,Gm,pi,Km,Jm,hi,Xm,Ym,mi,Zm,ef,fi,tf,of,_l,to,Mo,ui,xs,nf,gi,sf,bl,Ge,zs,af,oo,rf,_i,lf,df,Ms,cf,pf,hf,js,mf,Cs,ff,uf,gf,jo,_f,Le,Ps,bf,no,kf,Va,vf,Tf,bi,wf,yf,Df,Co,$f,ki,Ef,Ff,Rs,Vf,Bs,kl,so,Po,vi,As,qf,Ti,xf,vl,Me,Ls,zf,wi,Mf,jf,Ss,Cf,Is,Pf,Rf,Bf,Os,Af,Ns,Lf,Sf,If,Ro,Of,Se,Ws,Nf,ao,Wf,qa,Hf,Uf,yi,Qf,Gf,Kf,Bo,Jf,Di,Xf,Yf,Hs,Zf,Us,Tl,ro,Ao,$i,Qs,eu,Ei,tu,wl,je,Gs,ou,Fi,nu,su,Ks,au,Js,ru,iu,lu,Xs,du,Ys,cu,pu,hu,Lo,mu,Ie,Zs,fu,io,uu,xa,gu,_u,Vi,bu,ku,vu,So,Tu,qi,wu,yu,ea,Du,ta,yl,lo,Io,xi,oa,$u,zi,Eu,Dl,Ce,na,Fu,co,Vu,Mi,qu,xu,ji,zu,Mu,ju,sa,Cu,aa,Pu,Ru,Bu,ra,Au,ia,Lu,Su,Iu,Oo,Ou,Oe,la,Nu,po,Wu,za,Hu,Uu,Ci,Qu,Gu,Ku,No,Ju,Pi,Xu,Yu,da,Zu,ca,$l;return b=new Pe({}),ee=new Pe({}),on=new Pe({}),nn=new G({props:{name:"class transformers.DebertaV2Config",anchor:"transformers.DebertaV2Config",parameters:[{name:"vocab_size",val:" = 128100"},{name:"hidden_size",val:" = 1536"},{name:"num_hidden_layers",val:" = 24"},{name:"num_attention_heads",val:" = 24"},{name:"intermediate_size",val:" = 6144"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Config.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 128100) &#x2014;
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
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/configuration_deberta_v2.py#L31"}}),an=new Pe({}),rn=new G({props:{name:"class transformers.DebertaV2Tokenizer",anchor:"transformers.DebertaV2Tokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"sp_model_kwargs",val:": typing.Union[typing.Dict[str, typing.Any], NoneType] = None"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L53"}}),cn=new G({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L179",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),hn=new G({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"},{name:"already_has_special_tokens",val:" = False"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaV2Tokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L203",returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),mn=new G({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2Tokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L229",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),fn=new ve({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),un=new G({props:{name:"save_vocabulary",anchor:"transformers.DebertaV2Tokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2.py#L262"}}),gn=new Pe({}),_n=new G({props:{name:"class transformers.DebertaV2TokenizerFast",anchor:"transformers.DebertaV2TokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = False"},{name:"split_by_punct",val:" = False"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
<a href="https://github.com/google/sentencepiece" rel="nofollow">SentencePiece</a> file (generally has a <em>.spm</em> extension) that
contains the vocabulary necessary to instantiate a tokenizer.`,name:"vocab_file"},{anchor:"transformers.DebertaV2TokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaV2TokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.
When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.`,name:"bos_token"},{anchor:"transformers.DebertaV2TokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The end of sequence token. When building a sequence using special tokens, this is not the token that is
used for the end of sequence. The token used is the <code>sep_token</code>.`,name:"eos_token"},{anchor:"transformers.DebertaV2TokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaV2TokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaV2TokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaV2TokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaV2TokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.DebertaV2TokenizerFast.sp_model_kwargs",description:`<strong>sp_model_kwargs</strong> (<code>dict</code>, <em>optional</em>) &#x2014;
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
</ul>`,name:"sp_model_kwargs"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L59"}}),vn=new G({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2TokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L149",returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),wn=new G({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:""},{name:"token_ids_1",val:" = None"}],parametersDescription:[{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaV2TokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/tokenization_deberta_v2_fast.py#L199",returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),yn=new ve({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),Dn=new Pe({}),$n=new G({props:{name:"class transformers.DebertaV2Model",anchor:"transformers.DebertaV2Model",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L977"}}),xn=new G({props:{name:"forward",anchor:"transformers.DebertaV2Model.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2Model.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1001",returnDescription:`
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
`}}),_o=new Ne({props:{$$slots:{default:[Jb]},$$scope:{ctx:I}}}),zn=new ve({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Mn=new Pe({}),jn=new G({props:{name:"class transformers.DebertaV2PreTrainedModel",anchor:"transformers.DebertaV2PreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L881"}}),Cn=new G({props:{name:"_forward_unimplemented",anchor:"transformers.DebertaV2PreTrainedModel.forward",parameters:[{name:"*input",val:": typing.Any"}],source:"https://github.com/huggingface/transformers/blob/main/src/torch/nn/modules/module.py#L190"}}),ko=new Ne({props:{$$slots:{default:[Xb]},$$scope:{ctx:I}}}),Pn=new Pe({}),Rn=new G({props:{name:"class transformers.DebertaV2ForMaskedLM",anchor:"transformers.DebertaV2ForMaskedLM",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1090"}}),Sn=new G({props:{name:"forward",anchor:"transformers.DebertaV2ForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1109",returnDescription:`
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
`}}),To=new Ne({props:{$$slots:{default:[Yb]},$$scope:{ctx:I}}}),In=new ve({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForMaskedLM
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
`}}),On=new ve({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),Nn=new Pe({}),Wn=new G({props:{name:"class transformers.DebertaV2ForSequenceClassification",anchor:"transformers.DebertaV2ForSequenceClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1226"}}),Kn=new G({props:{name:"forward",anchor:"transformers.DebertaV2ForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1251",returnDescription:`
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
`}}),yo=new Ne({props:{$$slots:{default:[Zb]},$$scope:{ctx:I}}}),Jn=new ve({props:{code:`import torch
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
`}}),Xn=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),Yn=new ve({props:{code:`import torch
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
`}}),Zn=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),es=new Pe({}),ts=new G({props:{name:"class transformers.DebertaV2ForTokenClassification",anchor:"transformers.DebertaV2ForTokenClassification",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1346"}}),rs=new G({props:{name:"forward",anchor:"transformers.DebertaV2ForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1360",returnDescription:`
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
`}}),$o=new Ne({props:{$$slots:{default:[e2]},$$scope:{ctx:I}}}),is=new ve({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForTokenClassification
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
`}}),ls=new ve({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),ds=new Pe({}),cs=new G({props:{name:"class transformers.DebertaV2ForQuestionAnswering",anchor:"transformers.DebertaV2ForQuestionAnswering",parameters:[{name:"config",val:""}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1423"}}),us=new G({props:{name:"forward",anchor:"transformers.DebertaV2ForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],parametersDescription:[{anchor:"transformers.DebertaV2ForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_deberta_v2.py#L1436",returnDescription:`
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
`}}),Fo=new Ne({props:{$$slots:{default:[t2]},$$scope:{ctx:I}}}),gs=new ve({props:{code:`from transformers import DebertaV2Tokenizer, DebertaV2ForQuestionAnswering
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
`}}),_s=new ve({props:{code:`# target is "nice puppet"
target_start_index = torch.tensor([14])
target_end_index = torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index = torch.tensor([<span class="hljs-number">14</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>target_end_index = torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),bs=new Pe({}),ks=new G({props:{name:"class transformers.TFDebertaV2Model",anchor:"transformers.TFDebertaV2Model",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1175"}}),qo=new Ne({props:{$$slots:{default:[o2]},$$scope:{ctx:I}}}),Ds=new G({props:{name:"call",anchor:"transformers.TFDebertaV2Model.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2Model.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaV2Model.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1181",returnDescription:`
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
`}}),xo=new Ne({props:{$$slots:{default:[n2]},$$scope:{ctx:I}}}),$s=new ve({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2Model
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Es=new Pe({}),Fs=new G({props:{name:"class transformers.TFDebertaV2PreTrainedModel",anchor:"transformers.TFDebertaV2PreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1079"}}),Vs=new G({props:{name:"call",anchor:"transformers.TFDebertaV2PreTrainedModel.call",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),xs=new Pe({}),zs=new G({props:{name:"class transformers.TFDebertaV2ForMaskedLM",anchor:"transformers.TFDebertaV2ForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1224"}}),jo=new Ne({props:{$$slots:{default:[s2]},$$scope:{ctx:I}}}),Ps=new G({props:{name:"call",anchor:"transformers.TFDebertaV2ForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1240",returnDescription:`
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
`}}),Co=new Ne({props:{$$slots:{default:[a2]},$$scope:{ctx:I}}}),Rs=new ve({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
import tensorflow as tf

tokenizer = DebertaV2Tokenizer.from_pretrained("kamalkraj/deberta-v2-xlarge")
model = TFDebertaV2ForMaskedLM.from_pretrained("kamalkraj/deberta-v2-xlarge")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[0])
selected_logits = tf.gather_nd(logits[0], indices=mask_token_index)

predicted_token_id = tf.math.argmax(selected_logits, axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaV2Tokenizer, TFDebertaV2ForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaV2Tokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaV2ForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-v2-xlarge&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where((inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>selected_logits = tf.gather_nd(logits[<span class="hljs-number">0</span>], indices=mask_token_index)

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(selected_logits, axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),Bs=new ve({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),As=new Pe({}),Ls=new G({props:{name:"class transformers.TFDebertaV2ForSequenceClassification",anchor:"transformers.TFDebertaV2ForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1308"}}),Ro=new Ne({props:{$$slots:{default:[r2]},$$scope:{ctx:I}}}),Ws=new G({props:{name:"call",anchor:"transformers.TFDebertaV2ForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1326",returnDescription:`
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
`}}),Bo=new Ne({props:{$$slots:{default:[i2]},$$scope:{ctx:I}}}),Hs=new ve({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForSequenceClassification
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
`}}),Us=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),Qs=new Pe({}),Gs=new G({props:{name:"class transformers.TFDebertaV2ForTokenClassification",anchor:"transformers.TFDebertaV2ForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1397"}}),Lo=new Ne({props:{$$slots:{default:[l2]},$$scope:{ctx:I}}}),Zs=new G({props:{name:"call",anchor:"transformers.TFDebertaV2ForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1409",returnDescription:`
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
`}}),So=new Ne({props:{$$slots:{default:[d2]},$$scope:{ctx:I}}}),ea=new ve({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForTokenClassification
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
`}}),ta=new ve({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),oa=new Pe({}),na=new G({props:{name:"class transformers.TFDebertaV2ForQuestionAnswering",anchor:"transformers.TFDebertaV2ForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Config">DebertaV2Config</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1476"}}),Oo=new Ne({props:{$$slots:{default:[c2]},$$scope:{ctx:I}}}),la=new G({props:{name:"call",anchor:"transformers.TFDebertaV2ForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"}],parametersDescription:[{anchor:"transformers.TFDebertaV2ForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
are not taken into account for computing the loss.`,name:"end_positions"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/deberta_v2/modeling_tf_deberta_v2.py#L1487",returnDescription:`
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
`}}),No=new Ne({props:{$$slots:{default:[p2]},$$scope:{ctx:I}}}),da=new ve({props:{code:`from transformers import DebertaV2Tokenizer, TFDebertaV2ForQuestionAnswering
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
`}}),ca=new ve({props:{code:`# target is "nice puppet"
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
`}}),{c(){h=a("meta"),F=l(),u=a("h1"),_=a("a"),$=a("span"),k(b.$$.fragment),g=l(),V=a("span"),de=n("DeBERTa-v2"),J=l(),q=a("h2"),Y=a("a"),L=a("span"),k(ee.$$.fragment),ce=l(),S=a("span"),pe=n("Overview"),re=l(),N=a("p"),P=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),x=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),M=l(),ne=a("p"),W=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ie=l(),se=a("p"),H=n("The abstract from the paper is the following:"),le=l(),ae=a("p"),z=a("em"),he=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
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
`),oe=a("a"),p=n("blog"),E=l(),K=a("p"),$e=n("New in v2:"),De=l(),j=a("ul"),_e=a("li"),we=a("strong"),Ee=n("Vocabulary"),R=n(` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=a("a"),Fe=n("sentencepiece-based"),Ve=n(" tokenizer."),Q=l(),Te=a("li"),ye=a("strong"),be=n("nGiE(nGram Induced Input Encoding)"),qe=n(` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),pd=l(),ua=a("li"),or=a("strong"),hd=n("Sharing position projection matrix with content projection matrix in attention layer"),md=n(` Based on previous
experiments, this can save parameters without affecting the performance.`),fd=l(),ga=a("li"),nr=a("strong"),ud=n("Apply bucket to encode relative positions"),gd=n(` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),_d=l(),_a=a("li"),sr=a("strong"),bd=n("900M model & 1.5B model"),kd=n(` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),Gi=l(),tt=a("p"),vd=n("This model was contributed by "),Zo=a("a"),Td=n("DeBERTa"),wd=n(`. This model TF 2.0 implementation was
contributed by `),en=a("a"),yd=n("kamalkraj"),Dd=n(". The original code can be found "),tn=a("a"),$d=n("here"),Ed=n("."),Ki=l(),zt=a("h2"),ho=a("a"),ar=a("span"),k(on.$$.fragment),Fd=l(),rr=a("span"),Vd=n("DebertaV2Config"),Ji=l(),_t=a("div"),k(nn.$$.fragment),qd=l(),Mt=a("p"),xd=n("This is the configuration class to store the configuration of a "),ba=a("a"),zd=n("DebertaV2Model"),Md=n(`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),sn=a("a"),jd=n("microsoft/deberta-v2-xlarge"),Cd=n(" architecture."),Pd=l(),jt=a("p"),Rd=n("Configuration objects inherit from "),ka=a("a"),Bd=n("PretrainedConfig"),Ad=n(` and can be used to control the model outputs. Read the
documentation from `),va=a("a"),Ld=n("PretrainedConfig"),Sd=n(" for more information."),Xi=l(),Ct=a("h2"),mo=a("a"),ir=a("span"),k(an.$$.fragment),Id=l(),lr=a("span"),Od=n("DebertaV2Tokenizer"),Yi=l(),ze=a("div"),k(rn.$$.fragment),Nd=l(),ln=a("p"),Wd=n("Constructs a DeBERTa-v2 tokenizer. Based on "),dn=a("a"),Hd=n("SentencePiece"),Ud=n("."),Qd=l(),vt=a("div"),k(cn.$$.fragment),Gd=l(),dr=a("p"),Kd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Jd=l(),pn=a("ul"),cr=a("li"),Xd=n("single sequence: [CLS] X [SEP]"),Yd=l(),pr=a("li"),Zd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),ec=l(),fo=a("div"),k(hn.$$.fragment),tc=l(),Pt=a("p"),oc=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hr=a("code"),nc=n("prepare_for_model"),sc=n(" or "),mr=a("code"),ac=n("encode_plus"),rc=n(" methods."),ic=l(),ot=a("div"),k(mn.$$.fragment),lc=l(),fr=a("p"),dc=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),cc=l(),k(fn.$$.fragment),pc=l(),Rt=a("p"),hc=n("If "),ur=a("code"),mc=n("token_ids_1"),fc=n(" is "),gr=a("code"),uc=n("None"),gc=n(", this method only returns the first portion of the mask (0s)."),_c=l(),Ta=a("div"),k(un.$$.fragment),Zi=l(),Bt=a("h2"),uo=a("a"),_r=a("span"),k(gn.$$.fragment),bc=l(),br=a("span"),kc=n("DebertaV2TokenizerFast"),el=l(),Xe=a("div"),k(_n.$$.fragment),vc=l(),bn=a("p"),Tc=n("Constructs a DeBERTa-v2 fast tokenizer. Based on "),kn=a("a"),wc=n("SentencePiece"),yc=n("."),Dc=l(),Tt=a("div"),k(vn.$$.fragment),$c=l(),kr=a("p"),Ec=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Fc=l(),Tn=a("ul"),vr=a("li"),Vc=n("single sequence: [CLS] X [SEP]"),qc=l(),Tr=a("li"),xc=n("pair of sequences: [CLS] A [SEP] B [SEP]"),zc=l(),nt=a("div"),k(wn.$$.fragment),Mc=l(),wr=a("p"),jc=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Cc=l(),k(yn.$$.fragment),Pc=l(),At=a("p"),Rc=n("If "),yr=a("code"),Bc=n("token_ids_1"),Ac=n(" is "),Dr=a("code"),Lc=n("None"),Sc=n(", this method only returns the first portion of the mask (0s)."),tl=l(),Lt=a("h2"),go=a("a"),$r=a("span"),k(Dn.$$.fragment),Ic=l(),Er=a("span"),Oc=n("DebertaV2Model"),ol=l(),Ye=a("div"),k($n.$$.fragment),Nc=l(),En=a("p"),Wc=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Fn=a("a"),Hc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Uc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Qc=l(),Vn=a("p"),Gc=n("This model is also a PyTorch "),qn=a("a"),Kc=n("torch.nn.Module"),Jc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Xc=l(),Ke=a("div"),k(xn.$$.fragment),Yc=l(),St=a("p"),Zc=n("The "),wa=a("a"),ep=n("DebertaV2Model"),tp=n(" forward method, overrides the "),Fr=a("code"),op=n("__call__"),np=n(" special method."),sp=l(),k(_o.$$.fragment),ap=l(),Vr=a("p"),rp=n("Example:"),ip=l(),k(zn.$$.fragment),nl=l(),It=a("h2"),bo=a("a"),qr=a("span"),k(Mn.$$.fragment),lp=l(),xr=a("span"),dp=n("DebertaV2PreTrainedModel"),sl=l(),bt=a("div"),k(jn.$$.fragment),cp=l(),zr=a("p"),pp=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),hp=l(),st=a("div"),k(Cn.$$.fragment),mp=l(),Mr=a("p"),fp=n("Defines the computation performed at every call."),up=l(),jr=a("p"),gp=n("Should be overridden by all subclasses."),_p=l(),k(ko.$$.fragment),al=l(),Ot=a("h2"),vo=a("a"),Cr=a("span"),k(Pn.$$.fragment),bp=l(),Pr=a("span"),kp=n("DebertaV2ForMaskedLM"),rl=l(),Ze=a("div"),k(Rn.$$.fragment),vp=l(),Nt=a("p"),Tp=n("DeBERTa Model with a "),Rr=a("code"),wp=n("language modeling"),yp=n(` head on top.
The DeBERTa model was proposed in `),Bn=a("a"),Dp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),$p=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ep=l(),An=a("p"),Fp=n("This model is also a PyTorch "),Ln=a("a"),Vp=n("torch.nn.Module"),qp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),xp=l(),Re=a("div"),k(Sn.$$.fragment),zp=l(),Wt=a("p"),Mp=n("The "),ya=a("a"),jp=n("DebertaV2ForMaskedLM"),Cp=n(" forward method, overrides the "),Br=a("code"),Pp=n("__call__"),Rp=n(" special method."),Bp=l(),k(To.$$.fragment),Ap=l(),Ar=a("p"),Lp=n("Example:"),Sp=l(),k(In.$$.fragment),Ip=l(),k(On.$$.fragment),il=l(),Ht=a("h2"),wo=a("a"),Lr=a("span"),k(Nn.$$.fragment),Op=l(),Sr=a("span"),Np=n("DebertaV2ForSequenceClassification"),ll=l(),We=a("div"),k(Wn.$$.fragment),Wp=l(),Ir=a("p"),Hp=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Up=l(),Hn=a("p"),Qp=n("The DeBERTa model was proposed in "),Un=a("a"),Gp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Kp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jp=l(),Qn=a("p"),Xp=n("This model is also a PyTorch "),Gn=a("a"),Yp=n("torch.nn.Module"),Zp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),eh=l(),ke=a("div"),k(Kn.$$.fragment),th=l(),Ut=a("p"),oh=n("The "),Da=a("a"),nh=n("DebertaV2ForSequenceClassification"),sh=n(" forward method, overrides the "),Or=a("code"),ah=n("__call__"),rh=n(" special method."),ih=l(),k(yo.$$.fragment),lh=l(),Nr=a("p"),dh=n("Example of single-label classification:"),ch=l(),k(Jn.$$.fragment),ph=l(),k(Xn.$$.fragment),hh=l(),Wr=a("p"),mh=n("Example of multi-label classification:"),fh=l(),k(Yn.$$.fragment),uh=l(),k(Zn.$$.fragment),dl=l(),Qt=a("h2"),Do=a("a"),Hr=a("span"),k(es.$$.fragment),gh=l(),Ur=a("span"),_h=n("DebertaV2ForTokenClassification"),cl=l(),He=a("div"),k(ts.$$.fragment),bh=l(),Qr=a("p"),kh=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),vh=l(),os=a("p"),Th=n("The DeBERTa model was proposed in "),ns=a("a"),wh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),yh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Dh=l(),ss=a("p"),$h=n("This model is also a PyTorch "),as=a("a"),Eh=n("torch.nn.Module"),Fh=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Vh=l(),Be=a("div"),k(rs.$$.fragment),qh=l(),Gt=a("p"),xh=n("The "),$a=a("a"),zh=n("DebertaV2ForTokenClassification"),Mh=n(" forward method, overrides the "),Gr=a("code"),jh=n("__call__"),Ch=n(" special method."),Ph=l(),k($o.$$.fragment),Rh=l(),Kr=a("p"),Bh=n("Example:"),Ah=l(),k(is.$$.fragment),Lh=l(),k(ls.$$.fragment),pl=l(),Kt=a("h2"),Eo=a("a"),Jr=a("span"),k(ds.$$.fragment),Sh=l(),Xr=a("span"),Ih=n("DebertaV2ForQuestionAnswering"),hl=l(),Ue=a("div"),k(cs.$$.fragment),Oh=l(),Jt=a("p"),Nh=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yr=a("code"),Wh=n("span start logits"),Hh=n(" and "),Zr=a("code"),Uh=n("span end logits"),Qh=n(")."),Gh=l(),ps=a("p"),Kh=n("The DeBERTa model was proposed in "),hs=a("a"),Jh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Xh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Yh=l(),ms=a("p"),Zh=n("This model is also a PyTorch "),fs=a("a"),em=n("torch.nn.Module"),tm=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),om=l(),Ae=a("div"),k(us.$$.fragment),nm=l(),Xt=a("p"),sm=n("The "),Ea=a("a"),am=n("DebertaV2ForQuestionAnswering"),rm=n(" forward method, overrides the "),ei=a("code"),im=n("__call__"),lm=n(" special method."),dm=l(),k(Fo.$$.fragment),cm=l(),ti=a("p"),pm=n("Example:"),hm=l(),k(gs.$$.fragment),mm=l(),k(_s.$$.fragment),ml=l(),Yt=a("h2"),Vo=a("a"),oi=a("span"),k(bs.$$.fragment),fm=l(),ni=a("span"),um=n("TFDebertaV2Model"),fl=l(),Qe=a("div"),k(ks.$$.fragment),gm=l(),vs=a("p"),_m=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Ts=a("a"),bm=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),km=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),vm=l(),ws=a("p"),Tm=n("This model is also a "),ys=a("a"),wm=n("tf.keras.Model"),ym=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dm=l(),k(qo.$$.fragment),$m=l(),Je=a("div"),k(Ds.$$.fragment),Em=l(),Zt=a("p"),Fm=n("The "),Fa=a("a"),Vm=n("TFDebertaV2Model"),qm=n(" forward method, overrides the "),si=a("code"),xm=n("__call__"),zm=n(" special method."),Mm=l(),k(xo.$$.fragment),jm=l(),ai=a("p"),Cm=n("Example:"),Pm=l(),k($s.$$.fragment),ul=l(),eo=a("h2"),zo=a("a"),ri=a("span"),k(Es.$$.fragment),Rm=l(),ii=a("span"),Bm=n("TFDebertaV2PreTrainedModel"),gl=l(),kt=a("div"),k(Fs.$$.fragment),Am=l(),li=a("p"),Lm=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),Sm=l(),at=a("div"),k(Vs.$$.fragment),Im=l(),di=a("p"),Om=n("Calls the model on new inputs and returns the outputs as tensors."),Nm=l(),qs=a("p"),Wm=n("In this case "),ci=a("code"),Hm=n("call()"),Um=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Qm=l(),et=a("p"),Gm=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),pi=a("code"),Km=n("tf.keras.Model"),Jm=n(`.
To call a model on an input, always use the `),hi=a("code"),Xm=n("__call__()"),Ym=n(` method,
i.e. `),mi=a("code"),Zm=n("model(inputs)"),ef=n(", which relies on the underlying "),fi=a("code"),tf=n("call()"),of=n(" method."),_l=l(),to=a("h2"),Mo=a("a"),ui=a("span"),k(xs.$$.fragment),nf=l(),gi=a("span"),sf=n("TFDebertaV2ForMaskedLM"),bl=l(),Ge=a("div"),k(zs.$$.fragment),af=l(),oo=a("p"),rf=n("DeBERTa Model with a "),_i=a("code"),lf=n("language modeling"),df=n(` head on top.
The DeBERTa model was proposed in `),Ms=a("a"),cf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),pf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),hf=l(),js=a("p"),mf=n("This model is also a "),Cs=a("a"),ff=n("tf.keras.Model"),uf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gf=l(),k(jo.$$.fragment),_f=l(),Le=a("div"),k(Ps.$$.fragment),bf=l(),no=a("p"),kf=n("The "),Va=a("a"),vf=n("TFDebertaV2ForMaskedLM"),Tf=n(" forward method, overrides the "),bi=a("code"),wf=n("__call__"),yf=n(" special method."),Df=l(),k(Co.$$.fragment),$f=l(),ki=a("p"),Ef=n("Example:"),Ff=l(),k(Rs.$$.fragment),Vf=l(),k(Bs.$$.fragment),kl=l(),so=a("h2"),Po=a("a"),vi=a("span"),k(As.$$.fragment),qf=l(),Ti=a("span"),xf=n("TFDebertaV2ForSequenceClassification"),vl=l(),Me=a("div"),k(Ls.$$.fragment),zf=l(),wi=a("p"),Mf=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),jf=l(),Ss=a("p"),Cf=n("The DeBERTa model was proposed in "),Is=a("a"),Pf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Rf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Bf=l(),Os=a("p"),Af=n("This model is also a "),Ns=a("a"),Lf=n("tf.keras.Model"),Sf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),If=l(),k(Ro.$$.fragment),Of=l(),Se=a("div"),k(Ws.$$.fragment),Nf=l(),ao=a("p"),Wf=n("The "),qa=a("a"),Hf=n("TFDebertaV2ForSequenceClassification"),Uf=n(" forward method, overrides the "),yi=a("code"),Qf=n("__call__"),Gf=n(" special method."),Kf=l(),k(Bo.$$.fragment),Jf=l(),Di=a("p"),Xf=n("Example:"),Yf=l(),k(Hs.$$.fragment),Zf=l(),k(Us.$$.fragment),Tl=l(),ro=a("h2"),Ao=a("a"),$i=a("span"),k(Qs.$$.fragment),eu=l(),Ei=a("span"),tu=n("TFDebertaV2ForTokenClassification"),wl=l(),je=a("div"),k(Gs.$$.fragment),ou=l(),Fi=a("p"),nu=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),su=l(),Ks=a("p"),au=n("The DeBERTa model was proposed in "),Js=a("a"),ru=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),iu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),lu=l(),Xs=a("p"),du=n("This model is also a "),Ys=a("a"),cu=n("tf.keras.Model"),pu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hu=l(),k(Lo.$$.fragment),mu=l(),Ie=a("div"),k(Zs.$$.fragment),fu=l(),io=a("p"),uu=n("The "),xa=a("a"),gu=n("TFDebertaV2ForTokenClassification"),_u=n(" forward method, overrides the "),Vi=a("code"),bu=n("__call__"),ku=n(" special method."),vu=l(),k(So.$$.fragment),Tu=l(),qi=a("p"),wu=n("Example:"),yu=l(),k(ea.$$.fragment),Du=l(),k(ta.$$.fragment),yl=l(),lo=a("h2"),Io=a("a"),xi=a("span"),k(oa.$$.fragment),$u=l(),zi=a("span"),Eu=n("TFDebertaV2ForQuestionAnswering"),Dl=l(),Ce=a("div"),k(na.$$.fragment),Fu=l(),co=a("p"),Vu=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Mi=a("code"),qu=n("span start logits"),xu=n(" and "),ji=a("code"),zu=n("span end logits"),Mu=n(")."),ju=l(),sa=a("p"),Cu=n("The DeBERTa model was proposed in "),aa=a("a"),Pu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ru=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Bu=l(),ra=a("p"),Au=n("This model is also a "),ia=a("a"),Lu=n("tf.keras.Model"),Su=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Iu=l(),k(Oo.$$.fragment),Ou=l(),Oe=a("div"),k(la.$$.fragment),Nu=l(),po=a("p"),Wu=n("The "),za=a("a"),Hu=n("TFDebertaV2ForQuestionAnswering"),Uu=n(" forward method, overrides the "),Ci=a("code"),Qu=n("__call__"),Gu=n(" special method."),Ku=l(),k(No.$$.fragment),Ju=l(),Pi=a("p"),Xu=n("Example:"),Yu=l(),k(da.$$.fragment),Zu=l(),k(ca.$$.fragment),this.h()},l(o){const f=Gb('[data-svelte="svelte-1phssyn"]',document.head);h=r(f,"META",{name:!0,content:!0}),f.forEach(t),F=d(o),u=r(o,"H1",{class:!0});var pa=i(u);_=r(pa,"A",{id:!0,class:!0,href:!0});var Ri=i(_);$=r(Ri,"SPAN",{});var Bi=i($);v(b.$$.fragment,Bi),Bi.forEach(t),Ri.forEach(t),g=d(pa),V=r(pa,"SPAN",{});var Ai=i(V);de=s(Ai,"DeBERTa-v2"),Ai.forEach(t),pa.forEach(t),J=d(o),q=r(o,"H2",{class:!0});var ha=i(q);Y=r(ha,"A",{id:!0,class:!0,href:!0});var Li=i(Y);L=r(Li,"SPAN",{});var Si=i(L);v(ee.$$.fragment,Si),Si.forEach(t),Li.forEach(t),ce=d(ha),S=r(ha,"SPAN",{});var Ii=i(S);pe=s(Ii,"Overview"),Ii.forEach(t),ha.forEach(t),re=d(o),N=r(o,"P",{});var ma=i(N);P=s(ma,"The DeBERTa model was proposed in "),te=r(ma,"A",{href:!0,rel:!0});var Oi=i(te);Z=s(Oi,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),Oi.forEach(t),x=s(ma,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),ma.forEach(t),M=d(o),ne=r(o,"P",{});var Ni=i(ne);W=s(Ni,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),Ni.forEach(t),ie=d(o),se=r(o,"P",{});var Wi=i(se);H=s(Wi,"The abstract from the paper is the following:"),Wi.forEach(t),le=d(o),ae=r(o,"P",{});var Hi=i(ae);z=r(Hi,"EM",{});var fa=i(z);he=s(fa,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),B=r(fa,"A",{href:!0,rel:!0});var Ui=i(B);me=s(Ui,"https://github.com/microsoft/DeBERTa"),Ui.forEach(t),fe=s(fa,"."),fa.forEach(t),Hi.forEach(t),O=d(o),X=r(o,"P",{});var Wo=i(X);ue=s(Wo,"The following information is visible directly on the "),C=r(Wo,"A",{href:!0,rel:!0});var sg=i(C);ge=s(sg,`original implementation
repository`),sg.forEach(t),U=s(Wo,`. DeBERTa v2 is the second version of the DeBERTa model. It includes
the 1.5B model used for the SuperGLUE single-model submission and achieving 89.9, versus human baseline 89.8. You can
find more details about this submission in the authors\u2019
`),oe=r(Wo,"A",{href:!0,rel:!0});var ag=i(oe);p=s(ag,"blog"),ag.forEach(t),Wo.forEach(t),E=d(o),K=r(o,"P",{});var rg=i(K);$e=s(rg,"New in v2:"),rg.forEach(t),De=d(o),j=r(o,"UL",{});var wt=i(j);_e=r(wt,"LI",{});var Qi=i(_e);we=r(Qi,"STRONG",{});var ig=i(we);Ee=s(ig,"Vocabulary"),ig.forEach(t),R=s(Qi,` In v2 the tokenizer is changed to use a new vocabulary of size 128K built from the training data.
Instead of a GPT2-based tokenizer, the tokenizer is now
`),A=r(Qi,"A",{href:!0,rel:!0});var lg=i(A);Fe=s(lg,"sentencepiece-based"),lg.forEach(t),Ve=s(Qi," tokenizer."),Qi.forEach(t),Q=d(wt),Te=r(wt,"LI",{});var eg=i(Te);ye=r(eg,"STRONG",{});var dg=i(ye);be=s(dg,"nGiE(nGram Induced Input Encoding)"),dg.forEach(t),qe=s(eg,` The DeBERTa-v2 model uses an additional convolution layer aside with the first
transformer layer to better learn the local dependency of input tokens.`),eg.forEach(t),pd=d(wt),ua=r(wt,"LI",{});var tg=i(ua);or=r(tg,"STRONG",{});var cg=i(or);hd=s(cg,"Sharing position projection matrix with content projection matrix in attention layer"),cg.forEach(t),md=s(tg,` Based on previous
experiments, this can save parameters without affecting the performance.`),tg.forEach(t),fd=d(wt),ga=r(wt,"LI",{});var og=i(ga);nr=r(og,"STRONG",{});var pg=i(nr);ud=s(pg,"Apply bucket to encode relative positions"),pg.forEach(t),gd=s(og,` The DeBERTa-v2 model uses log bucket to encode relative positions
similar to T5.`),og.forEach(t),_d=d(wt),_a=r(wt,"LI",{});var ng=i(_a);sr=r(ng,"STRONG",{});var hg=i(sr);bd=s(hg,"900M model & 1.5B model"),hg.forEach(t),kd=s(ng,` Two additional model sizes are available: 900M and 1.5B, which significantly improves the
performance of downstream tasks.`),ng.forEach(t),wt.forEach(t),Gi=d(o),tt=r(o,"P",{});var Ho=i(tt);vd=s(Ho,"This model was contributed by "),Zo=r(Ho,"A",{href:!0,rel:!0});var mg=i(Zo);Td=s(mg,"DeBERTa"),mg.forEach(t),wd=s(Ho,`. This model TF 2.0 implementation was
contributed by `),en=r(Ho,"A",{href:!0,rel:!0});var fg=i(en);yd=s(fg,"kamalkraj"),fg.forEach(t),Dd=s(Ho,". The original code can be found "),tn=r(Ho,"A",{href:!0,rel:!0});var ug=i(tn);$d=s(ug,"here"),ug.forEach(t),Ed=s(Ho,"."),Ho.forEach(t),Ki=d(o),zt=r(o,"H2",{class:!0});var El=i(zt);ho=r(El,"A",{id:!0,class:!0,href:!0});var gg=i(ho);ar=r(gg,"SPAN",{});var _g=i(ar);v(on.$$.fragment,_g),_g.forEach(t),gg.forEach(t),Fd=d(El),rr=r(El,"SPAN",{});var bg=i(rr);Vd=s(bg,"DebertaV2Config"),bg.forEach(t),El.forEach(t),Ji=d(o),_t=r(o,"DIV",{class:!0});var Ma=i(_t);v(nn.$$.fragment,Ma),qd=d(Ma),Mt=r(Ma,"P",{});var ja=i(Mt);xd=s(ja,"This is the configuration class to store the configuration of a "),ba=r(ja,"A",{href:!0});var kg=i(ba);zd=s(kg,"DebertaV2Model"),kg.forEach(t),Md=s(ja,`. It is used to instantiate a
DeBERTa-v2 model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),sn=r(ja,"A",{href:!0,rel:!0});var vg=i(sn);jd=s(vg,"microsoft/deberta-v2-xlarge"),vg.forEach(t),Cd=s(ja," architecture."),ja.forEach(t),Pd=d(Ma),jt=r(Ma,"P",{});var Ca=i(jt);Rd=s(Ca,"Configuration objects inherit from "),ka=r(Ca,"A",{href:!0});var Tg=i(ka);Bd=s(Tg,"PretrainedConfig"),Tg.forEach(t),Ad=s(Ca,` and can be used to control the model outputs. Read the
documentation from `),va=r(Ca,"A",{href:!0});var wg=i(va);Ld=s(wg,"PretrainedConfig"),wg.forEach(t),Sd=s(Ca," for more information."),Ca.forEach(t),Ma.forEach(t),Xi=d(o),Ct=r(o,"H2",{class:!0});var Fl=i(Ct);mo=r(Fl,"A",{id:!0,class:!0,href:!0});var yg=i(mo);ir=r(yg,"SPAN",{});var Dg=i(ir);v(an.$$.fragment,Dg),Dg.forEach(t),yg.forEach(t),Id=d(Fl),lr=r(Fl,"SPAN",{});var $g=i(lr);Od=s($g,"DebertaV2Tokenizer"),$g.forEach(t),Fl.forEach(t),Yi=d(o),ze=r(o,"DIV",{class:!0});var rt=i(ze);v(rn.$$.fragment,rt),Nd=d(rt),ln=r(rt,"P",{});var Vl=i(ln);Wd=s(Vl,"Constructs a DeBERTa-v2 tokenizer. Based on "),dn=r(Vl,"A",{href:!0,rel:!0});var Eg=i(dn);Hd=s(Eg,"SentencePiece"),Eg.forEach(t),Ud=s(Vl,"."),Vl.forEach(t),Qd=d(rt),vt=r(rt,"DIV",{class:!0});var Pa=i(vt);v(cn.$$.fragment,Pa),Gd=d(Pa),dr=r(Pa,"P",{});var Fg=i(dr);Kd=s(Fg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Fg.forEach(t),Jd=d(Pa),pn=r(Pa,"UL",{});var ql=i(pn);cr=r(ql,"LI",{});var Vg=i(cr);Xd=s(Vg,"single sequence: [CLS] X [SEP]"),Vg.forEach(t),Yd=d(ql),pr=r(ql,"LI",{});var qg=i(pr);Zd=s(qg,"pair of sequences: [CLS] A [SEP] B [SEP]"),qg.forEach(t),ql.forEach(t),Pa.forEach(t),ec=d(rt),fo=r(rt,"DIV",{class:!0});var xl=i(fo);v(hn.$$.fragment,xl),tc=d(xl),Pt=r(xl,"P",{});var Ra=i(Pt);oc=s(Ra,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),hr=r(Ra,"CODE",{});var xg=i(hr);nc=s(xg,"prepare_for_model"),xg.forEach(t),sc=s(Ra," or "),mr=r(Ra,"CODE",{});var zg=i(mr);ac=s(zg,"encode_plus"),zg.forEach(t),rc=s(Ra," methods."),Ra.forEach(t),xl.forEach(t),ic=d(rt),ot=r(rt,"DIV",{class:!0});var Uo=i(ot);v(mn.$$.fragment,Uo),lc=d(Uo),fr=r(Uo,"P",{});var Mg=i(fr);dc=s(Mg,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Mg.forEach(t),cc=d(Uo),v(fn.$$.fragment,Uo),pc=d(Uo),Rt=r(Uo,"P",{});var Ba=i(Rt);hc=s(Ba,"If "),ur=r(Ba,"CODE",{});var jg=i(ur);mc=s(jg,"token_ids_1"),jg.forEach(t),fc=s(Ba," is "),gr=r(Ba,"CODE",{});var Cg=i(gr);uc=s(Cg,"None"),Cg.forEach(t),gc=s(Ba,", this method only returns the first portion of the mask (0s)."),Ba.forEach(t),Uo.forEach(t),_c=d(rt),Ta=r(rt,"DIV",{class:!0});var Pg=i(Ta);v(un.$$.fragment,Pg),Pg.forEach(t),rt.forEach(t),Zi=d(o),Bt=r(o,"H2",{class:!0});var zl=i(Bt);uo=r(zl,"A",{id:!0,class:!0,href:!0});var Rg=i(uo);_r=r(Rg,"SPAN",{});var Bg=i(_r);v(gn.$$.fragment,Bg),Bg.forEach(t),Rg.forEach(t),bc=d(zl),br=r(zl,"SPAN",{});var Ag=i(br);kc=s(Ag,"DebertaV2TokenizerFast"),Ag.forEach(t),zl.forEach(t),el=d(o),Xe=r(o,"DIV",{class:!0});var Qo=i(Xe);v(_n.$$.fragment,Qo),vc=d(Qo),bn=r(Qo,"P",{});var Ml=i(bn);Tc=s(Ml,"Constructs a DeBERTa-v2 fast tokenizer. Based on "),kn=r(Ml,"A",{href:!0,rel:!0});var Lg=i(kn);wc=s(Lg,"SentencePiece"),Lg.forEach(t),yc=s(Ml,"."),Ml.forEach(t),Dc=d(Qo),Tt=r(Qo,"DIV",{class:!0});var Aa=i(Tt);v(vn.$$.fragment,Aa),$c=d(Aa),kr=r(Aa,"P",{});var Sg=i(kr);Ec=s(Sg,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Sg.forEach(t),Fc=d(Aa),Tn=r(Aa,"UL",{});var jl=i(Tn);vr=r(jl,"LI",{});var Ig=i(vr);Vc=s(Ig,"single sequence: [CLS] X [SEP]"),Ig.forEach(t),qc=d(jl),Tr=r(jl,"LI",{});var Og=i(Tr);xc=s(Og,"pair of sequences: [CLS] A [SEP] B [SEP]"),Og.forEach(t),jl.forEach(t),Aa.forEach(t),zc=d(Qo),nt=r(Qo,"DIV",{class:!0});var Go=i(nt);v(wn.$$.fragment,Go),Mc=d(Go),wr=r(Go,"P",{});var Ng=i(wr);jc=s(Ng,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Ng.forEach(t),Cc=d(Go),v(yn.$$.fragment,Go),Pc=d(Go),At=r(Go,"P",{});var La=i(At);Rc=s(La,"If "),yr=r(La,"CODE",{});var Wg=i(yr);Bc=s(Wg,"token_ids_1"),Wg.forEach(t),Ac=s(La," is "),Dr=r(La,"CODE",{});var Hg=i(Dr);Lc=s(Hg,"None"),Hg.forEach(t),Sc=s(La,", this method only returns the first portion of the mask (0s)."),La.forEach(t),Go.forEach(t),Qo.forEach(t),tl=d(o),Lt=r(o,"H2",{class:!0});var Cl=i(Lt);go=r(Cl,"A",{id:!0,class:!0,href:!0});var Ug=i(go);$r=r(Ug,"SPAN",{});var Qg=i($r);v(Dn.$$.fragment,Qg),Qg.forEach(t),Ug.forEach(t),Ic=d(Cl),Er=r(Cl,"SPAN",{});var Gg=i(Er);Oc=s(Gg,"DebertaV2Model"),Gg.forEach(t),Cl.forEach(t),ol=d(o),Ye=r(o,"DIV",{class:!0});var Ko=i(Ye);v($n.$$.fragment,Ko),Nc=d(Ko),En=r(Ko,"P",{});var Pl=i(En);Wc=s(Pl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Fn=r(Pl,"A",{href:!0,rel:!0});var Kg=i(Fn);Hc=s(Kg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Kg.forEach(t),Uc=s(Pl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Pl.forEach(t),Qc=d(Ko),Vn=r(Ko,"P",{});var Rl=i(Vn);Gc=s(Rl,"This model is also a PyTorch "),qn=r(Rl,"A",{href:!0,rel:!0});var Jg=i(qn);Kc=s(Jg,"torch.nn.Module"),Jg.forEach(t),Jc=s(Rl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Rl.forEach(t),Xc=d(Ko),Ke=r(Ko,"DIV",{class:!0});var yt=i(Ke);v(xn.$$.fragment,yt),Yc=d(yt),St=r(yt,"P",{});var Sa=i(St);Zc=s(Sa,"The "),wa=r(Sa,"A",{href:!0});var Xg=i(wa);ep=s(Xg,"DebertaV2Model"),Xg.forEach(t),tp=s(Sa," forward method, overrides the "),Fr=r(Sa,"CODE",{});var Yg=i(Fr);op=s(Yg,"__call__"),Yg.forEach(t),np=s(Sa," special method."),Sa.forEach(t),sp=d(yt),v(_o.$$.fragment,yt),ap=d(yt),Vr=r(yt,"P",{});var Zg=i(Vr);rp=s(Zg,"Example:"),Zg.forEach(t),ip=d(yt),v(zn.$$.fragment,yt),yt.forEach(t),Ko.forEach(t),nl=d(o),It=r(o,"H2",{class:!0});var Bl=i(It);bo=r(Bl,"A",{id:!0,class:!0,href:!0});var e_=i(bo);qr=r(e_,"SPAN",{});var t_=i(qr);v(Mn.$$.fragment,t_),t_.forEach(t),e_.forEach(t),lp=d(Bl),xr=r(Bl,"SPAN",{});var o_=i(xr);dp=s(o_,"DebertaV2PreTrainedModel"),o_.forEach(t),Bl.forEach(t),sl=d(o),bt=r(o,"DIV",{class:!0});var Ia=i(bt);v(jn.$$.fragment,Ia),cp=d(Ia),zr=r(Ia,"P",{});var n_=i(zr);pp=s(n_,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),n_.forEach(t),hp=d(Ia),st=r(Ia,"DIV",{class:!0});var Jo=i(st);v(Cn.$$.fragment,Jo),mp=d(Jo),Mr=r(Jo,"P",{});var s_=i(Mr);fp=s(s_,"Defines the computation performed at every call."),s_.forEach(t),up=d(Jo),jr=r(Jo,"P",{});var a_=i(jr);gp=s(a_,"Should be overridden by all subclasses."),a_.forEach(t),_p=d(Jo),v(ko.$$.fragment,Jo),Jo.forEach(t),Ia.forEach(t),al=d(o),Ot=r(o,"H2",{class:!0});var Al=i(Ot);vo=r(Al,"A",{id:!0,class:!0,href:!0});var r_=i(vo);Cr=r(r_,"SPAN",{});var i_=i(Cr);v(Pn.$$.fragment,i_),i_.forEach(t),r_.forEach(t),bp=d(Al),Pr=r(Al,"SPAN",{});var l_=i(Pr);kp=s(l_,"DebertaV2ForMaskedLM"),l_.forEach(t),Al.forEach(t),rl=d(o),Ze=r(o,"DIV",{class:!0});var Xo=i(Ze);v(Rn.$$.fragment,Xo),vp=d(Xo),Nt=r(Xo,"P",{});var Oa=i(Nt);Tp=s(Oa,"DeBERTa Model with a "),Rr=r(Oa,"CODE",{});var d_=i(Rr);wp=s(d_,"language modeling"),d_.forEach(t),yp=s(Oa,` head on top.
The DeBERTa model was proposed in `),Bn=r(Oa,"A",{href:!0,rel:!0});var c_=i(Bn);Dp=s(c_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),c_.forEach(t),$p=s(Oa,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Oa.forEach(t),Ep=d(Xo),An=r(Xo,"P",{});var Ll=i(An);Fp=s(Ll,"This model is also a PyTorch "),Ln=r(Ll,"A",{href:!0,rel:!0});var p_=i(Ln);Vp=s(p_,"torch.nn.Module"),p_.forEach(t),qp=s(Ll," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ll.forEach(t),xp=d(Xo),Re=r(Xo,"DIV",{class:!0});var it=i(Re);v(Sn.$$.fragment,it),zp=d(it),Wt=r(it,"P",{});var Na=i(Wt);Mp=s(Na,"The "),ya=r(Na,"A",{href:!0});var h_=i(ya);jp=s(h_,"DebertaV2ForMaskedLM"),h_.forEach(t),Cp=s(Na," forward method, overrides the "),Br=r(Na,"CODE",{});var m_=i(Br);Pp=s(m_,"__call__"),m_.forEach(t),Rp=s(Na," special method."),Na.forEach(t),Bp=d(it),v(To.$$.fragment,it),Ap=d(it),Ar=r(it,"P",{});var f_=i(Ar);Lp=s(f_,"Example:"),f_.forEach(t),Sp=d(it),v(In.$$.fragment,it),Ip=d(it),v(On.$$.fragment,it),it.forEach(t),Xo.forEach(t),il=d(o),Ht=r(o,"H2",{class:!0});var Sl=i(Ht);wo=r(Sl,"A",{id:!0,class:!0,href:!0});var u_=i(wo);Lr=r(u_,"SPAN",{});var g_=i(Lr);v(Nn.$$.fragment,g_),g_.forEach(t),u_.forEach(t),Op=d(Sl),Sr=r(Sl,"SPAN",{});var __=i(Sr);Np=s(__,"DebertaV2ForSequenceClassification"),__.forEach(t),Sl.forEach(t),ll=d(o),We=r(o,"DIV",{class:!0});var Dt=i(We);v(Wn.$$.fragment,Dt),Wp=d(Dt),Ir=r(Dt,"P",{});var b_=i(Ir);Hp=s(b_,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),b_.forEach(t),Up=d(Dt),Hn=r(Dt,"P",{});var Il=i(Hn);Qp=s(Il,"The DeBERTa model was proposed in "),Un=r(Il,"A",{href:!0,rel:!0});var k_=i(Un);Gp=s(k_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),k_.forEach(t),Kp=s(Il,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Il.forEach(t),Jp=d(Dt),Qn=r(Dt,"P",{});var Ol=i(Qn);Xp=s(Ol,"This model is also a PyTorch "),Gn=r(Ol,"A",{href:!0,rel:!0});var v_=i(Gn);Yp=s(v_,"torch.nn.Module"),v_.forEach(t),Zp=s(Ol," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ol.forEach(t),eh=d(Dt),ke=r(Dt,"DIV",{class:!0});var xe=i(ke);v(Kn.$$.fragment,xe),th=d(xe),Ut=r(xe,"P",{});var Wa=i(Ut);oh=s(Wa,"The "),Da=r(Wa,"A",{href:!0});var T_=i(Da);nh=s(T_,"DebertaV2ForSequenceClassification"),T_.forEach(t),sh=s(Wa," forward method, overrides the "),Or=r(Wa,"CODE",{});var w_=i(Or);ah=s(w_,"__call__"),w_.forEach(t),rh=s(Wa," special method."),Wa.forEach(t),ih=d(xe),v(yo.$$.fragment,xe),lh=d(xe),Nr=r(xe,"P",{});var y_=i(Nr);dh=s(y_,"Example of single-label classification:"),y_.forEach(t),ch=d(xe),v(Jn.$$.fragment,xe),ph=d(xe),v(Xn.$$.fragment,xe),hh=d(xe),Wr=r(xe,"P",{});var D_=i(Wr);mh=s(D_,"Example of multi-label classification:"),D_.forEach(t),fh=d(xe),v(Yn.$$.fragment,xe),uh=d(xe),v(Zn.$$.fragment,xe),xe.forEach(t),Dt.forEach(t),dl=d(o),Qt=r(o,"H2",{class:!0});var Nl=i(Qt);Do=r(Nl,"A",{id:!0,class:!0,href:!0});var $_=i(Do);Hr=r($_,"SPAN",{});var E_=i(Hr);v(es.$$.fragment,E_),E_.forEach(t),$_.forEach(t),gh=d(Nl),Ur=r(Nl,"SPAN",{});var F_=i(Ur);_h=s(F_,"DebertaV2ForTokenClassification"),F_.forEach(t),Nl.forEach(t),cl=d(o),He=r(o,"DIV",{class:!0});var $t=i(He);v(ts.$$.fragment,$t),bh=d($t),Qr=r($t,"P",{});var V_=i(Qr);kh=s(V_,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),V_.forEach(t),vh=d($t),os=r($t,"P",{});var Wl=i(os);Th=s(Wl,"The DeBERTa model was proposed in "),ns=r(Wl,"A",{href:!0,rel:!0});var q_=i(ns);wh=s(q_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),q_.forEach(t),yh=s(Wl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Wl.forEach(t),Dh=d($t),ss=r($t,"P",{});var Hl=i(ss);$h=s(Hl,"This model is also a PyTorch "),as=r(Hl,"A",{href:!0,rel:!0});var x_=i(as);Eh=s(x_,"torch.nn.Module"),x_.forEach(t),Fh=s(Hl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Hl.forEach(t),Vh=d($t),Be=r($t,"DIV",{class:!0});var lt=i(Be);v(rs.$$.fragment,lt),qh=d(lt),Gt=r(lt,"P",{});var Ha=i(Gt);xh=s(Ha,"The "),$a=r(Ha,"A",{href:!0});var z_=i($a);zh=s(z_,"DebertaV2ForTokenClassification"),z_.forEach(t),Mh=s(Ha," forward method, overrides the "),Gr=r(Ha,"CODE",{});var M_=i(Gr);jh=s(M_,"__call__"),M_.forEach(t),Ch=s(Ha," special method."),Ha.forEach(t),Ph=d(lt),v($o.$$.fragment,lt),Rh=d(lt),Kr=r(lt,"P",{});var j_=i(Kr);Bh=s(j_,"Example:"),j_.forEach(t),Ah=d(lt),v(is.$$.fragment,lt),Lh=d(lt),v(ls.$$.fragment,lt),lt.forEach(t),$t.forEach(t),pl=d(o),Kt=r(o,"H2",{class:!0});var Ul=i(Kt);Eo=r(Ul,"A",{id:!0,class:!0,href:!0});var C_=i(Eo);Jr=r(C_,"SPAN",{});var P_=i(Jr);v(ds.$$.fragment,P_),P_.forEach(t),C_.forEach(t),Sh=d(Ul),Xr=r(Ul,"SPAN",{});var R_=i(Xr);Ih=s(R_,"DebertaV2ForQuestionAnswering"),R_.forEach(t),Ul.forEach(t),hl=d(o),Ue=r(o,"DIV",{class:!0});var Et=i(Ue);v(cs.$$.fragment,Et),Oh=d(Et),Jt=r(Et,"P",{});var Ua=i(Jt);Nh=s(Ua,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Yr=r(Ua,"CODE",{});var B_=i(Yr);Wh=s(B_,"span start logits"),B_.forEach(t),Hh=s(Ua," and "),Zr=r(Ua,"CODE",{});var A_=i(Zr);Uh=s(A_,"span end logits"),A_.forEach(t),Qh=s(Ua,")."),Ua.forEach(t),Gh=d(Et),ps=r(Et,"P",{});var Ql=i(ps);Kh=s(Ql,"The DeBERTa model was proposed in "),hs=r(Ql,"A",{href:!0,rel:!0});var L_=i(hs);Jh=s(L_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),L_.forEach(t),Xh=s(Ql,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ql.forEach(t),Yh=d(Et),ms=r(Et,"P",{});var Gl=i(ms);Zh=s(Gl,"This model is also a PyTorch "),fs=r(Gl,"A",{href:!0,rel:!0});var S_=i(fs);em=s(S_,"torch.nn.Module"),S_.forEach(t),tm=s(Gl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Gl.forEach(t),om=d(Et),Ae=r(Et,"DIV",{class:!0});var dt=i(Ae);v(us.$$.fragment,dt),nm=d(dt),Xt=r(dt,"P",{});var Qa=i(Xt);sm=s(Qa,"The "),Ea=r(Qa,"A",{href:!0});var I_=i(Ea);am=s(I_,"DebertaV2ForQuestionAnswering"),I_.forEach(t),rm=s(Qa," forward method, overrides the "),ei=r(Qa,"CODE",{});var O_=i(ei);im=s(O_,"__call__"),O_.forEach(t),lm=s(Qa," special method."),Qa.forEach(t),dm=d(dt),v(Fo.$$.fragment,dt),cm=d(dt),ti=r(dt,"P",{});var N_=i(ti);pm=s(N_,"Example:"),N_.forEach(t),hm=d(dt),v(gs.$$.fragment,dt),mm=d(dt),v(_s.$$.fragment,dt),dt.forEach(t),Et.forEach(t),ml=d(o),Yt=r(o,"H2",{class:!0});var Kl=i(Yt);Vo=r(Kl,"A",{id:!0,class:!0,href:!0});var W_=i(Vo);oi=r(W_,"SPAN",{});var H_=i(oi);v(bs.$$.fragment,H_),H_.forEach(t),W_.forEach(t),fm=d(Kl),ni=r(Kl,"SPAN",{});var U_=i(ni);um=s(U_,"TFDebertaV2Model"),U_.forEach(t),Kl.forEach(t),fl=d(o),Qe=r(o,"DIV",{class:!0});var Ft=i(Qe);v(ks.$$.fragment,Ft),gm=d(Ft),vs=r(Ft,"P",{});var Jl=i(vs);_m=s(Jl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Ts=r(Jl,"A",{href:!0,rel:!0});var Q_=i(Ts);bm=s(Q_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Q_.forEach(t),km=s(Jl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Jl.forEach(t),vm=d(Ft),ws=r(Ft,"P",{});var Xl=i(ws);Tm=s(Xl,"This model is also a "),ys=r(Xl,"A",{href:!0,rel:!0});var G_=i(ys);wm=s(G_,"tf.keras.Model"),G_.forEach(t),ym=s(Xl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xl.forEach(t),Dm=d(Ft),v(qo.$$.fragment,Ft),$m=d(Ft),Je=r(Ft,"DIV",{class:!0});var Vt=i(Je);v(Ds.$$.fragment,Vt),Em=d(Vt),Zt=r(Vt,"P",{});var Ga=i(Zt);Fm=s(Ga,"The "),Fa=r(Ga,"A",{href:!0});var K_=i(Fa);Vm=s(K_,"TFDebertaV2Model"),K_.forEach(t),qm=s(Ga," forward method, overrides the "),si=r(Ga,"CODE",{});var J_=i(si);xm=s(J_,"__call__"),J_.forEach(t),zm=s(Ga," special method."),Ga.forEach(t),Mm=d(Vt),v(xo.$$.fragment,Vt),jm=d(Vt),ai=r(Vt,"P",{});var X_=i(ai);Cm=s(X_,"Example:"),X_.forEach(t),Pm=d(Vt),v($s.$$.fragment,Vt),Vt.forEach(t),Ft.forEach(t),ul=d(o),eo=r(o,"H2",{class:!0});var Yl=i(eo);zo=r(Yl,"A",{id:!0,class:!0,href:!0});var Y_=i(zo);ri=r(Y_,"SPAN",{});var Z_=i(ri);v(Es.$$.fragment,Z_),Z_.forEach(t),Y_.forEach(t),Rm=d(Yl),ii=r(Yl,"SPAN",{});var eb=i(ii);Bm=s(eb,"TFDebertaV2PreTrainedModel"),eb.forEach(t),Yl.forEach(t),gl=d(o),kt=r(o,"DIV",{class:!0});var Ka=i(kt);v(Fs.$$.fragment,Ka),Am=d(Ka),li=r(Ka,"P",{});var tb=i(li);Lm=s(tb,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),tb.forEach(t),Sm=d(Ka),at=r(Ka,"DIV",{class:!0});var Yo=i(at);v(Vs.$$.fragment,Yo),Im=d(Yo),di=r(Yo,"P",{});var ob=i(di);Om=s(ob,"Calls the model on new inputs and returns the outputs as tensors."),ob.forEach(t),Nm=d(Yo),qs=r(Yo,"P",{});var Zl=i(qs);Wm=s(Zl,"In this case "),ci=r(Zl,"CODE",{});var nb=i(ci);Hm=s(nb,"call()"),nb.forEach(t),Um=s(Zl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Zl.forEach(t),Qm=d(Yo),et=r(Yo,"P",{});var qt=i(et);Gm=s(qt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),pi=r(qt,"CODE",{});var sb=i(pi);Km=s(sb,"tf.keras.Model"),sb.forEach(t),Jm=s(qt,`.
To call a model on an input, always use the `),hi=r(qt,"CODE",{});var ab=i(hi);Xm=s(ab,"__call__()"),ab.forEach(t),Ym=s(qt,` method,
i.e. `),mi=r(qt,"CODE",{});var rb=i(mi);Zm=s(rb,"model(inputs)"),rb.forEach(t),ef=s(qt,", which relies on the underlying "),fi=r(qt,"CODE",{});var ib=i(fi);tf=s(ib,"call()"),ib.forEach(t),of=s(qt," method."),qt.forEach(t),Yo.forEach(t),Ka.forEach(t),_l=d(o),to=r(o,"H2",{class:!0});var ed=i(to);Mo=r(ed,"A",{id:!0,class:!0,href:!0});var lb=i(Mo);ui=r(lb,"SPAN",{});var db=i(ui);v(xs.$$.fragment,db),db.forEach(t),lb.forEach(t),nf=d(ed),gi=r(ed,"SPAN",{});var cb=i(gi);sf=s(cb,"TFDebertaV2ForMaskedLM"),cb.forEach(t),ed.forEach(t),bl=d(o),Ge=r(o,"DIV",{class:!0});var xt=i(Ge);v(zs.$$.fragment,xt),af=d(xt),oo=r(xt,"P",{});var Ja=i(oo);rf=s(Ja,"DeBERTa Model with a "),_i=r(Ja,"CODE",{});var pb=i(_i);lf=s(pb,"language modeling"),pb.forEach(t),df=s(Ja,` head on top.
The DeBERTa model was proposed in `),Ms=r(Ja,"A",{href:!0,rel:!0});var hb=i(Ms);cf=s(hb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),hb.forEach(t),pf=s(Ja,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Ja.forEach(t),hf=d(xt),js=r(xt,"P",{});var td=i(js);mf=s(td,"This model is also a "),Cs=r(td,"A",{href:!0,rel:!0});var mb=i(Cs);ff=s(mb,"tf.keras.Model"),mb.forEach(t),uf=s(td,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),td.forEach(t),gf=d(xt),v(jo.$$.fragment,xt),_f=d(xt),Le=r(xt,"DIV",{class:!0});var ct=i(Le);v(Ps.$$.fragment,ct),bf=d(ct),no=r(ct,"P",{});var Xa=i(no);kf=s(Xa,"The "),Va=r(Xa,"A",{href:!0});var fb=i(Va);vf=s(fb,"TFDebertaV2ForMaskedLM"),fb.forEach(t),Tf=s(Xa," forward method, overrides the "),bi=r(Xa,"CODE",{});var ub=i(bi);wf=s(ub,"__call__"),ub.forEach(t),yf=s(Xa," special method."),Xa.forEach(t),Df=d(ct),v(Co.$$.fragment,ct),$f=d(ct),ki=r(ct,"P",{});var gb=i(ki);Ef=s(gb,"Example:"),gb.forEach(t),Ff=d(ct),v(Rs.$$.fragment,ct),Vf=d(ct),v(Bs.$$.fragment,ct),ct.forEach(t),xt.forEach(t),kl=d(o),so=r(o,"H2",{class:!0});var od=i(so);Po=r(od,"A",{id:!0,class:!0,href:!0});var _b=i(Po);vi=r(_b,"SPAN",{});var bb=i(vi);v(As.$$.fragment,bb),bb.forEach(t),_b.forEach(t),qf=d(od),Ti=r(od,"SPAN",{});var kb=i(Ti);xf=s(kb,"TFDebertaV2ForSequenceClassification"),kb.forEach(t),od.forEach(t),vl=d(o),Me=r(o,"DIV",{class:!0});var pt=i(Me);v(Ls.$$.fragment,pt),zf=d(pt),wi=r(pt,"P",{});var vb=i(wi);Mf=s(vb,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),vb.forEach(t),jf=d(pt),Ss=r(pt,"P",{});var nd=i(Ss);Cf=s(nd,"The DeBERTa model was proposed in "),Is=r(nd,"A",{href:!0,rel:!0});var Tb=i(Is);Pf=s(Tb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Tb.forEach(t),Rf=s(nd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),nd.forEach(t),Bf=d(pt),Os=r(pt,"P",{});var sd=i(Os);Af=s(sd,"This model is also a "),Ns=r(sd,"A",{href:!0,rel:!0});var wb=i(Ns);Lf=s(wb,"tf.keras.Model"),wb.forEach(t),Sf=s(sd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),sd.forEach(t),If=d(pt),v(Ro.$$.fragment,pt),Of=d(pt),Se=r(pt,"DIV",{class:!0});var ht=i(Se);v(Ws.$$.fragment,ht),Nf=d(ht),ao=r(ht,"P",{});var Ya=i(ao);Wf=s(Ya,"The "),qa=r(Ya,"A",{href:!0});var yb=i(qa);Hf=s(yb,"TFDebertaV2ForSequenceClassification"),yb.forEach(t),Uf=s(Ya," forward method, overrides the "),yi=r(Ya,"CODE",{});var Db=i(yi);Qf=s(Db,"__call__"),Db.forEach(t),Gf=s(Ya," special method."),Ya.forEach(t),Kf=d(ht),v(Bo.$$.fragment,ht),Jf=d(ht),Di=r(ht,"P",{});var $b=i(Di);Xf=s($b,"Example:"),$b.forEach(t),Yf=d(ht),v(Hs.$$.fragment,ht),Zf=d(ht),v(Us.$$.fragment,ht),ht.forEach(t),pt.forEach(t),Tl=d(o),ro=r(o,"H2",{class:!0});var ad=i(ro);Ao=r(ad,"A",{id:!0,class:!0,href:!0});var Eb=i(Ao);$i=r(Eb,"SPAN",{});var Fb=i($i);v(Qs.$$.fragment,Fb),Fb.forEach(t),Eb.forEach(t),eu=d(ad),Ei=r(ad,"SPAN",{});var Vb=i(Ei);tu=s(Vb,"TFDebertaV2ForTokenClassification"),Vb.forEach(t),ad.forEach(t),wl=d(o),je=r(o,"DIV",{class:!0});var mt=i(je);v(Gs.$$.fragment,mt),ou=d(mt),Fi=r(mt,"P",{});var qb=i(Fi);nu=s(qb,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),qb.forEach(t),su=d(mt),Ks=r(mt,"P",{});var rd=i(Ks);au=s(rd,"The DeBERTa model was proposed in "),Js=r(rd,"A",{href:!0,rel:!0});var xb=i(Js);ru=s(xb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),xb.forEach(t),iu=s(rd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),rd.forEach(t),lu=d(mt),Xs=r(mt,"P",{});var id=i(Xs);du=s(id,"This model is also a "),Ys=r(id,"A",{href:!0,rel:!0});var zb=i(Ys);cu=s(zb,"tf.keras.Model"),zb.forEach(t),pu=s(id,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),id.forEach(t),hu=d(mt),v(Lo.$$.fragment,mt),mu=d(mt),Ie=r(mt,"DIV",{class:!0});var ft=i(Ie);v(Zs.$$.fragment,ft),fu=d(ft),io=r(ft,"P",{});var Za=i(io);uu=s(Za,"The "),xa=r(Za,"A",{href:!0});var Mb=i(xa);gu=s(Mb,"TFDebertaV2ForTokenClassification"),Mb.forEach(t),_u=s(Za," forward method, overrides the "),Vi=r(Za,"CODE",{});var jb=i(Vi);bu=s(jb,"__call__"),jb.forEach(t),ku=s(Za," special method."),Za.forEach(t),vu=d(ft),v(So.$$.fragment,ft),Tu=d(ft),qi=r(ft,"P",{});var Cb=i(qi);wu=s(Cb,"Example:"),Cb.forEach(t),yu=d(ft),v(ea.$$.fragment,ft),Du=d(ft),v(ta.$$.fragment,ft),ft.forEach(t),mt.forEach(t),yl=d(o),lo=r(o,"H2",{class:!0});var ld=i(lo);Io=r(ld,"A",{id:!0,class:!0,href:!0});var Pb=i(Io);xi=r(Pb,"SPAN",{});var Rb=i(xi);v(oa.$$.fragment,Rb),Rb.forEach(t),Pb.forEach(t),$u=d(ld),zi=r(ld,"SPAN",{});var Bb=i(zi);Eu=s(Bb,"TFDebertaV2ForQuestionAnswering"),Bb.forEach(t),ld.forEach(t),Dl=d(o),Ce=r(o,"DIV",{class:!0});var ut=i(Ce);v(na.$$.fragment,ut),Fu=d(ut),co=r(ut,"P",{});var er=i(co);Vu=s(er,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Mi=r(er,"CODE",{});var Ab=i(Mi);qu=s(Ab,"span start logits"),Ab.forEach(t),xu=s(er," and "),ji=r(er,"CODE",{});var Lb=i(ji);zu=s(Lb,"span end logits"),Lb.forEach(t),Mu=s(er,")."),er.forEach(t),ju=d(ut),sa=r(ut,"P",{});var dd=i(sa);Cu=s(dd,"The DeBERTa model was proposed in "),aa=r(dd,"A",{href:!0,rel:!0});var Sb=i(aa);Pu=s(Sb,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Sb.forEach(t),Ru=s(dd,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dd.forEach(t),Bu=d(ut),ra=r(ut,"P",{});var cd=i(ra);Au=s(cd,"This model is also a "),ia=r(cd,"A",{href:!0,rel:!0});var Ib=i(ia);Lu=s(Ib,"tf.keras.Model"),Ib.forEach(t),Su=s(cd,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cd.forEach(t),Iu=d(ut),v(Oo.$$.fragment,ut),Ou=d(ut),Oe=r(ut,"DIV",{class:!0});var gt=i(Oe);v(la.$$.fragment,gt),Nu=d(gt),po=r(gt,"P",{});var tr=i(po);Wu=s(tr,"The "),za=r(tr,"A",{href:!0});var Ob=i(za);Hu=s(Ob,"TFDebertaV2ForQuestionAnswering"),Ob.forEach(t),Uu=s(tr," forward method, overrides the "),Ci=r(tr,"CODE",{});var Nb=i(Ci);Qu=s(Nb,"__call__"),Nb.forEach(t),Gu=s(tr," special method."),tr.forEach(t),Ku=d(gt),v(No.$$.fragment,gt),Ju=d(gt),Pi=r(gt,"P",{});var Wb=i(Pi);Xu=s(Wb,"Example:"),Wb.forEach(t),Yu=d(gt),v(da.$$.fragment,gt),Zu=d(gt),v(ca.$$.fragment,gt),gt.forEach(t),ut.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(m2)),c(_,"id","debertav2"),c(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(_,"href","#debertav2"),c(u,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(q,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(B,"href","https://github.com/microsoft/DeBERTa"),c(B,"rel","nofollow"),c(C,"href","https://github.com/microsoft/DeBERTa"),c(C,"rel","nofollow"),c(oe,"href","https://www.microsoft.com/en-us/research/blog/microsoft-deberta-surpasses-human-performance-on-the-superglue-benchmark/"),c(oe,"rel","nofollow"),c(A,"href","https://github.com/google/sentencepiece"),c(A,"rel","nofollow"),c(Zo,"href","https://huggingface.co/DeBERTa"),c(Zo,"rel","nofollow"),c(en,"href","https://huggingface.co/kamalkraj"),c(en,"rel","nofollow"),c(tn,"href","https://github.com/microsoft/DeBERTa"),c(tn,"rel","nofollow"),c(ho,"id","transformers.DebertaV2Config"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaV2Config"),c(zt,"class","relative group"),c(ba,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(sn,"href","https://huggingface.co/microsoft/deberta-v2-xlarge"),c(sn,"rel","nofollow"),c(ka,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(va,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(_t,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(mo,"id","transformers.DebertaV2Tokenizer"),c(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(mo,"href","#transformers.DebertaV2Tokenizer"),c(Ct,"class","relative group"),c(dn,"href","https://github.com/google/sentencepiece"),c(dn,"rel","nofollow"),c(vt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(fo,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ot,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ta,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(uo,"id","transformers.DebertaV2TokenizerFast"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.DebertaV2TokenizerFast"),c(Bt,"class","relative group"),c(kn,"href","https://github.com/google/sentencepiece"),c(kn,"rel","nofollow"),c(Tt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(nt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Xe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(go,"id","transformers.DebertaV2Model"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaV2Model"),c(Lt,"class","relative group"),c(Fn,"href","https://arxiv.org/abs/2006.03654"),c(Fn,"rel","nofollow"),c(qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qn,"rel","nofollow"),c(wa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2Model"),c(Ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ye,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(bo,"id","transformers.DebertaV2PreTrainedModel"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaV2PreTrainedModel"),c(It,"class","relative group"),c(st,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(bt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(vo,"id","transformers.DebertaV2ForMaskedLM"),c(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vo,"href","#transformers.DebertaV2ForMaskedLM"),c(Ot,"class","relative group"),c(Bn,"href","https://arxiv.org/abs/2006.03654"),c(Bn,"rel","nofollow"),c(Ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ln,"rel","nofollow"),c(ya,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForMaskedLM"),c(Re,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ze,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(wo,"id","transformers.DebertaV2ForSequenceClassification"),c(wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(wo,"href","#transformers.DebertaV2ForSequenceClassification"),c(Ht,"class","relative group"),c(Un,"href","https://arxiv.org/abs/2006.03654"),c(Un,"rel","nofollow"),c(Gn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Gn,"rel","nofollow"),c(Da,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForSequenceClassification"),c(ke,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(We,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Do,"id","transformers.DebertaV2ForTokenClassification"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.DebertaV2ForTokenClassification"),c(Qt,"class","relative group"),c(ns,"href","https://arxiv.org/abs/2006.03654"),c(ns,"rel","nofollow"),c(as,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(as,"rel","nofollow"),c($a,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForTokenClassification"),c(Be,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(He,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Eo,"id","transformers.DebertaV2ForQuestionAnswering"),c(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Eo,"href","#transformers.DebertaV2ForQuestionAnswering"),c(Kt,"class","relative group"),c(hs,"href","https://arxiv.org/abs/2006.03654"),c(hs,"rel","nofollow"),c(fs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(fs,"rel","nofollow"),c(Ea,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.DebertaV2ForQuestionAnswering"),c(Ae,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ue,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Vo,"id","transformers.TFDebertaV2Model"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.TFDebertaV2Model"),c(Yt,"class","relative group"),c(Ts,"href","https://arxiv.org/abs/2006.03654"),c(Ts,"rel","nofollow"),c(ys,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ys,"rel","nofollow"),c(Fa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2Model"),c(Je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Qe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(zo,"id","transformers.TFDebertaV2PreTrainedModel"),c(zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(zo,"href","#transformers.TFDebertaV2PreTrainedModel"),c(eo,"class","relative group"),c(at,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(kt,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Mo,"id","transformers.TFDebertaV2ForMaskedLM"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDebertaV2ForMaskedLM"),c(to,"class","relative group"),c(Ms,"href","https://arxiv.org/abs/2006.03654"),c(Ms,"rel","nofollow"),c(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Cs,"rel","nofollow"),c(Va,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForMaskedLM"),c(Le,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ge,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Po,"id","transformers.TFDebertaV2ForSequenceClassification"),c(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Po,"href","#transformers.TFDebertaV2ForSequenceClassification"),c(so,"class","relative group"),c(Is,"href","https://arxiv.org/abs/2006.03654"),c(Is,"rel","nofollow"),c(Ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ns,"rel","nofollow"),c(qa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForSequenceClassification"),c(Se,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Me,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ao,"id","transformers.TFDebertaV2ForTokenClassification"),c(Ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ao,"href","#transformers.TFDebertaV2ForTokenClassification"),c(ro,"class","relative group"),c(Js,"href","https://arxiv.org/abs/2006.03654"),c(Js,"rel","nofollow"),c(Ys,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ys,"rel","nofollow"),c(xa,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForTokenClassification"),c(Ie,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(je,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Io,"id","transformers.TFDebertaV2ForQuestionAnswering"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#transformers.TFDebertaV2ForQuestionAnswering"),c(lo,"class","relative group"),c(aa,"href","https://arxiv.org/abs/2006.03654"),c(aa,"rel","nofollow"),c(ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ia,"rel","nofollow"),c(za,"href","/docs/transformers/main/en/model_doc/deberta-v2#transformers.TFDebertaV2ForQuestionAnswering"),c(Oe,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8"),c(Ce,"class","docstring border-l-2 border-t-2 pl-4 pt-3.5 border-gray-100 rounded-tl-xl mb-6 mt-8")},m(o,f){e(document.head,h),m(o,F,f),m(o,u,f),e(u,_),e(_,$),T(b,$,null),e(u,g),e(u,V),e(V,de),m(o,J,f),m(o,q,f),e(q,Y),e(Y,L),T(ee,L,null),e(q,ce),e(q,S),e(S,pe),m(o,re,f),m(o,N,f),e(N,P),e(N,te),e(te,Z),e(N,x),m(o,M,f),m(o,ne,f),e(ne,W),m(o,ie,f),m(o,se,f),e(se,H),m(o,le,f),m(o,ae,f),e(ae,z),e(z,he),e(z,B),e(B,me),e(z,fe),m(o,O,f),m(o,X,f),e(X,ue),e(X,C),e(C,ge),e(X,U),e(X,oe),e(oe,p),m(o,E,f),m(o,K,f),e(K,$e),m(o,De,f),m(o,j,f),e(j,_e),e(_e,we),e(we,Ee),e(_e,R),e(_e,A),e(A,Fe),e(_e,Ve),e(j,Q),e(j,Te),e(Te,ye),e(ye,be),e(Te,qe),e(j,pd),e(j,ua),e(ua,or),e(or,hd),e(ua,md),e(j,fd),e(j,ga),e(ga,nr),e(nr,ud),e(ga,gd),e(j,_d),e(j,_a),e(_a,sr),e(sr,bd),e(_a,kd),m(o,Gi,f),m(o,tt,f),e(tt,vd),e(tt,Zo),e(Zo,Td),e(tt,wd),e(tt,en),e(en,yd),e(tt,Dd),e(tt,tn),e(tn,$d),e(tt,Ed),m(o,Ki,f),m(o,zt,f),e(zt,ho),e(ho,ar),T(on,ar,null),e(zt,Fd),e(zt,rr),e(rr,Vd),m(o,Ji,f),m(o,_t,f),T(nn,_t,null),e(_t,qd),e(_t,Mt),e(Mt,xd),e(Mt,ba),e(ba,zd),e(Mt,Md),e(Mt,sn),e(sn,jd),e(Mt,Cd),e(_t,Pd),e(_t,jt),e(jt,Rd),e(jt,ka),e(ka,Bd),e(jt,Ad),e(jt,va),e(va,Ld),e(jt,Sd),m(o,Xi,f),m(o,Ct,f),e(Ct,mo),e(mo,ir),T(an,ir,null),e(Ct,Id),e(Ct,lr),e(lr,Od),m(o,Yi,f),m(o,ze,f),T(rn,ze,null),e(ze,Nd),e(ze,ln),e(ln,Wd),e(ln,dn),e(dn,Hd),e(ln,Ud),e(ze,Qd),e(ze,vt),T(cn,vt,null),e(vt,Gd),e(vt,dr),e(dr,Kd),e(vt,Jd),e(vt,pn),e(pn,cr),e(cr,Xd),e(pn,Yd),e(pn,pr),e(pr,Zd),e(ze,ec),e(ze,fo),T(hn,fo,null),e(fo,tc),e(fo,Pt),e(Pt,oc),e(Pt,hr),e(hr,nc),e(Pt,sc),e(Pt,mr),e(mr,ac),e(Pt,rc),e(ze,ic),e(ze,ot),T(mn,ot,null),e(ot,lc),e(ot,fr),e(fr,dc),e(ot,cc),T(fn,ot,null),e(ot,pc),e(ot,Rt),e(Rt,hc),e(Rt,ur),e(ur,mc),e(Rt,fc),e(Rt,gr),e(gr,uc),e(Rt,gc),e(ze,_c),e(ze,Ta),T(un,Ta,null),m(o,Zi,f),m(o,Bt,f),e(Bt,uo),e(uo,_r),T(gn,_r,null),e(Bt,bc),e(Bt,br),e(br,kc),m(o,el,f),m(o,Xe,f),T(_n,Xe,null),e(Xe,vc),e(Xe,bn),e(bn,Tc),e(bn,kn),e(kn,wc),e(bn,yc),e(Xe,Dc),e(Xe,Tt),T(vn,Tt,null),e(Tt,$c),e(Tt,kr),e(kr,Ec),e(Tt,Fc),e(Tt,Tn),e(Tn,vr),e(vr,Vc),e(Tn,qc),e(Tn,Tr),e(Tr,xc),e(Xe,zc),e(Xe,nt),T(wn,nt,null),e(nt,Mc),e(nt,wr),e(wr,jc),e(nt,Cc),T(yn,nt,null),e(nt,Pc),e(nt,At),e(At,Rc),e(At,yr),e(yr,Bc),e(At,Ac),e(At,Dr),e(Dr,Lc),e(At,Sc),m(o,tl,f),m(o,Lt,f),e(Lt,go),e(go,$r),T(Dn,$r,null),e(Lt,Ic),e(Lt,Er),e(Er,Oc),m(o,ol,f),m(o,Ye,f),T($n,Ye,null),e(Ye,Nc),e(Ye,En),e(En,Wc),e(En,Fn),e(Fn,Hc),e(En,Uc),e(Ye,Qc),e(Ye,Vn),e(Vn,Gc),e(Vn,qn),e(qn,Kc),e(Vn,Jc),e(Ye,Xc),e(Ye,Ke),T(xn,Ke,null),e(Ke,Yc),e(Ke,St),e(St,Zc),e(St,wa),e(wa,ep),e(St,tp),e(St,Fr),e(Fr,op),e(St,np),e(Ke,sp),T(_o,Ke,null),e(Ke,ap),e(Ke,Vr),e(Vr,rp),e(Ke,ip),T(zn,Ke,null),m(o,nl,f),m(o,It,f),e(It,bo),e(bo,qr),T(Mn,qr,null),e(It,lp),e(It,xr),e(xr,dp),m(o,sl,f),m(o,bt,f),T(jn,bt,null),e(bt,cp),e(bt,zr),e(zr,pp),e(bt,hp),e(bt,st),T(Cn,st,null),e(st,mp),e(st,Mr),e(Mr,fp),e(st,up),e(st,jr),e(jr,gp),e(st,_p),T(ko,st,null),m(o,al,f),m(o,Ot,f),e(Ot,vo),e(vo,Cr),T(Pn,Cr,null),e(Ot,bp),e(Ot,Pr),e(Pr,kp),m(o,rl,f),m(o,Ze,f),T(Rn,Ze,null),e(Ze,vp),e(Ze,Nt),e(Nt,Tp),e(Nt,Rr),e(Rr,wp),e(Nt,yp),e(Nt,Bn),e(Bn,Dp),e(Nt,$p),e(Ze,Ep),e(Ze,An),e(An,Fp),e(An,Ln),e(Ln,Vp),e(An,qp),e(Ze,xp),e(Ze,Re),T(Sn,Re,null),e(Re,zp),e(Re,Wt),e(Wt,Mp),e(Wt,ya),e(ya,jp),e(Wt,Cp),e(Wt,Br),e(Br,Pp),e(Wt,Rp),e(Re,Bp),T(To,Re,null),e(Re,Ap),e(Re,Ar),e(Ar,Lp),e(Re,Sp),T(In,Re,null),e(Re,Ip),T(On,Re,null),m(o,il,f),m(o,Ht,f),e(Ht,wo),e(wo,Lr),T(Nn,Lr,null),e(Ht,Op),e(Ht,Sr),e(Sr,Np),m(o,ll,f),m(o,We,f),T(Wn,We,null),e(We,Wp),e(We,Ir),e(Ir,Hp),e(We,Up),e(We,Hn),e(Hn,Qp),e(Hn,Un),e(Un,Gp),e(Hn,Kp),e(We,Jp),e(We,Qn),e(Qn,Xp),e(Qn,Gn),e(Gn,Yp),e(Qn,Zp),e(We,eh),e(We,ke),T(Kn,ke,null),e(ke,th),e(ke,Ut),e(Ut,oh),e(Ut,Da),e(Da,nh),e(Ut,sh),e(Ut,Or),e(Or,ah),e(Ut,rh),e(ke,ih),T(yo,ke,null),e(ke,lh),e(ke,Nr),e(Nr,dh),e(ke,ch),T(Jn,ke,null),e(ke,ph),T(Xn,ke,null),e(ke,hh),e(ke,Wr),e(Wr,mh),e(ke,fh),T(Yn,ke,null),e(ke,uh),T(Zn,ke,null),m(o,dl,f),m(o,Qt,f),e(Qt,Do),e(Do,Hr),T(es,Hr,null),e(Qt,gh),e(Qt,Ur),e(Ur,_h),m(o,cl,f),m(o,He,f),T(ts,He,null),e(He,bh),e(He,Qr),e(Qr,kh),e(He,vh),e(He,os),e(os,Th),e(os,ns),e(ns,wh),e(os,yh),e(He,Dh),e(He,ss),e(ss,$h),e(ss,as),e(as,Eh),e(ss,Fh),e(He,Vh),e(He,Be),T(rs,Be,null),e(Be,qh),e(Be,Gt),e(Gt,xh),e(Gt,$a),e($a,zh),e(Gt,Mh),e(Gt,Gr),e(Gr,jh),e(Gt,Ch),e(Be,Ph),T($o,Be,null),e(Be,Rh),e(Be,Kr),e(Kr,Bh),e(Be,Ah),T(is,Be,null),e(Be,Lh),T(ls,Be,null),m(o,pl,f),m(o,Kt,f),e(Kt,Eo),e(Eo,Jr),T(ds,Jr,null),e(Kt,Sh),e(Kt,Xr),e(Xr,Ih),m(o,hl,f),m(o,Ue,f),T(cs,Ue,null),e(Ue,Oh),e(Ue,Jt),e(Jt,Nh),e(Jt,Yr),e(Yr,Wh),e(Jt,Hh),e(Jt,Zr),e(Zr,Uh),e(Jt,Qh),e(Ue,Gh),e(Ue,ps),e(ps,Kh),e(ps,hs),e(hs,Jh),e(ps,Xh),e(Ue,Yh),e(Ue,ms),e(ms,Zh),e(ms,fs),e(fs,em),e(ms,tm),e(Ue,om),e(Ue,Ae),T(us,Ae,null),e(Ae,nm),e(Ae,Xt),e(Xt,sm),e(Xt,Ea),e(Ea,am),e(Xt,rm),e(Xt,ei),e(ei,im),e(Xt,lm),e(Ae,dm),T(Fo,Ae,null),e(Ae,cm),e(Ae,ti),e(ti,pm),e(Ae,hm),T(gs,Ae,null),e(Ae,mm),T(_s,Ae,null),m(o,ml,f),m(o,Yt,f),e(Yt,Vo),e(Vo,oi),T(bs,oi,null),e(Yt,fm),e(Yt,ni),e(ni,um),m(o,fl,f),m(o,Qe,f),T(ks,Qe,null),e(Qe,gm),e(Qe,vs),e(vs,_m),e(vs,Ts),e(Ts,bm),e(vs,km),e(Qe,vm),e(Qe,ws),e(ws,Tm),e(ws,ys),e(ys,wm),e(ws,ym),e(Qe,Dm),T(qo,Qe,null),e(Qe,$m),e(Qe,Je),T(Ds,Je,null),e(Je,Em),e(Je,Zt),e(Zt,Fm),e(Zt,Fa),e(Fa,Vm),e(Zt,qm),e(Zt,si),e(si,xm),e(Zt,zm),e(Je,Mm),T(xo,Je,null),e(Je,jm),e(Je,ai),e(ai,Cm),e(Je,Pm),T($s,Je,null),m(o,ul,f),m(o,eo,f),e(eo,zo),e(zo,ri),T(Es,ri,null),e(eo,Rm),e(eo,ii),e(ii,Bm),m(o,gl,f),m(o,kt,f),T(Fs,kt,null),e(kt,Am),e(kt,li),e(li,Lm),e(kt,Sm),e(kt,at),T(Vs,at,null),e(at,Im),e(at,di),e(di,Om),e(at,Nm),e(at,qs),e(qs,Wm),e(qs,ci),e(ci,Hm),e(qs,Um),e(at,Qm),e(at,et),e(et,Gm),e(et,pi),e(pi,Km),e(et,Jm),e(et,hi),e(hi,Xm),e(et,Ym),e(et,mi),e(mi,Zm),e(et,ef),e(et,fi),e(fi,tf),e(et,of),m(o,_l,f),m(o,to,f),e(to,Mo),e(Mo,ui),T(xs,ui,null),e(to,nf),e(to,gi),e(gi,sf),m(o,bl,f),m(o,Ge,f),T(zs,Ge,null),e(Ge,af),e(Ge,oo),e(oo,rf),e(oo,_i),e(_i,lf),e(oo,df),e(oo,Ms),e(Ms,cf),e(oo,pf),e(Ge,hf),e(Ge,js),e(js,mf),e(js,Cs),e(Cs,ff),e(js,uf),e(Ge,gf),T(jo,Ge,null),e(Ge,_f),e(Ge,Le),T(Ps,Le,null),e(Le,bf),e(Le,no),e(no,kf),e(no,Va),e(Va,vf),e(no,Tf),e(no,bi),e(bi,wf),e(no,yf),e(Le,Df),T(Co,Le,null),e(Le,$f),e(Le,ki),e(ki,Ef),e(Le,Ff),T(Rs,Le,null),e(Le,Vf),T(Bs,Le,null),m(o,kl,f),m(o,so,f),e(so,Po),e(Po,vi),T(As,vi,null),e(so,qf),e(so,Ti),e(Ti,xf),m(o,vl,f),m(o,Me,f),T(Ls,Me,null),e(Me,zf),e(Me,wi),e(wi,Mf),e(Me,jf),e(Me,Ss),e(Ss,Cf),e(Ss,Is),e(Is,Pf),e(Ss,Rf),e(Me,Bf),e(Me,Os),e(Os,Af),e(Os,Ns),e(Ns,Lf),e(Os,Sf),e(Me,If),T(Ro,Me,null),e(Me,Of),e(Me,Se),T(Ws,Se,null),e(Se,Nf),e(Se,ao),e(ao,Wf),e(ao,qa),e(qa,Hf),e(ao,Uf),e(ao,yi),e(yi,Qf),e(ao,Gf),e(Se,Kf),T(Bo,Se,null),e(Se,Jf),e(Se,Di),e(Di,Xf),e(Se,Yf),T(Hs,Se,null),e(Se,Zf),T(Us,Se,null),m(o,Tl,f),m(o,ro,f),e(ro,Ao),e(Ao,$i),T(Qs,$i,null),e(ro,eu),e(ro,Ei),e(Ei,tu),m(o,wl,f),m(o,je,f),T(Gs,je,null),e(je,ou),e(je,Fi),e(Fi,nu),e(je,su),e(je,Ks),e(Ks,au),e(Ks,Js),e(Js,ru),e(Ks,iu),e(je,lu),e(je,Xs),e(Xs,du),e(Xs,Ys),e(Ys,cu),e(Xs,pu),e(je,hu),T(Lo,je,null),e(je,mu),e(je,Ie),T(Zs,Ie,null),e(Ie,fu),e(Ie,io),e(io,uu),e(io,xa),e(xa,gu),e(io,_u),e(io,Vi),e(Vi,bu),e(io,ku),e(Ie,vu),T(So,Ie,null),e(Ie,Tu),e(Ie,qi),e(qi,wu),e(Ie,yu),T(ea,Ie,null),e(Ie,Du),T(ta,Ie,null),m(o,yl,f),m(o,lo,f),e(lo,Io),e(Io,xi),T(oa,xi,null),e(lo,$u),e(lo,zi),e(zi,Eu),m(o,Dl,f),m(o,Ce,f),T(na,Ce,null),e(Ce,Fu),e(Ce,co),e(co,Vu),e(co,Mi),e(Mi,qu),e(co,xu),e(co,ji),e(ji,zu),e(co,Mu),e(Ce,ju),e(Ce,sa),e(sa,Cu),e(sa,aa),e(aa,Pu),e(sa,Ru),e(Ce,Bu),e(Ce,ra),e(ra,Au),e(ra,ia),e(ia,Lu),e(ra,Su),e(Ce,Iu),T(Oo,Ce,null),e(Ce,Ou),e(Ce,Oe),T(la,Oe,null),e(Oe,Nu),e(Oe,po),e(po,Wu),e(po,za),e(za,Hu),e(po,Uu),e(po,Ci),e(Ci,Qu),e(po,Gu),e(Oe,Ku),T(No,Oe,null),e(Oe,Ju),e(Oe,Pi),e(Pi,Xu),e(Oe,Yu),T(da,Oe,null),e(Oe,Zu),T(ca,Oe,null),$l=!0},p(o,[f]){const pa={};f&2&&(pa.$$scope={dirty:f,ctx:o}),_o.$set(pa);const Ri={};f&2&&(Ri.$$scope={dirty:f,ctx:o}),ko.$set(Ri);const Bi={};f&2&&(Bi.$$scope={dirty:f,ctx:o}),To.$set(Bi);const Ai={};f&2&&(Ai.$$scope={dirty:f,ctx:o}),yo.$set(Ai);const ha={};f&2&&(ha.$$scope={dirty:f,ctx:o}),$o.$set(ha);const Li={};f&2&&(Li.$$scope={dirty:f,ctx:o}),Fo.$set(Li);const Si={};f&2&&(Si.$$scope={dirty:f,ctx:o}),qo.$set(Si);const Ii={};f&2&&(Ii.$$scope={dirty:f,ctx:o}),xo.$set(Ii);const ma={};f&2&&(ma.$$scope={dirty:f,ctx:o}),jo.$set(ma);const Oi={};f&2&&(Oi.$$scope={dirty:f,ctx:o}),Co.$set(Oi);const Ni={};f&2&&(Ni.$$scope={dirty:f,ctx:o}),Ro.$set(Ni);const Wi={};f&2&&(Wi.$$scope={dirty:f,ctx:o}),Bo.$set(Wi);const Hi={};f&2&&(Hi.$$scope={dirty:f,ctx:o}),Lo.$set(Hi);const fa={};f&2&&(fa.$$scope={dirty:f,ctx:o}),So.$set(fa);const Ui={};f&2&&(Ui.$$scope={dirty:f,ctx:o}),Oo.$set(Ui);const Wo={};f&2&&(Wo.$$scope={dirty:f,ctx:o}),No.$set(Wo)},i(o){$l||(w(b.$$.fragment,o),w(ee.$$.fragment,o),w(on.$$.fragment,o),w(nn.$$.fragment,o),w(an.$$.fragment,o),w(rn.$$.fragment,o),w(cn.$$.fragment,o),w(hn.$$.fragment,o),w(mn.$$.fragment,o),w(fn.$$.fragment,o),w(un.$$.fragment,o),w(gn.$$.fragment,o),w(_n.$$.fragment,o),w(vn.$$.fragment,o),w(wn.$$.fragment,o),w(yn.$$.fragment,o),w(Dn.$$.fragment,o),w($n.$$.fragment,o),w(xn.$$.fragment,o),w(_o.$$.fragment,o),w(zn.$$.fragment,o),w(Mn.$$.fragment,o),w(jn.$$.fragment,o),w(Cn.$$.fragment,o),w(ko.$$.fragment,o),w(Pn.$$.fragment,o),w(Rn.$$.fragment,o),w(Sn.$$.fragment,o),w(To.$$.fragment,o),w(In.$$.fragment,o),w(On.$$.fragment,o),w(Nn.$$.fragment,o),w(Wn.$$.fragment,o),w(Kn.$$.fragment,o),w(yo.$$.fragment,o),w(Jn.$$.fragment,o),w(Xn.$$.fragment,o),w(Yn.$$.fragment,o),w(Zn.$$.fragment,o),w(es.$$.fragment,o),w(ts.$$.fragment,o),w(rs.$$.fragment,o),w($o.$$.fragment,o),w(is.$$.fragment,o),w(ls.$$.fragment,o),w(ds.$$.fragment,o),w(cs.$$.fragment,o),w(us.$$.fragment,o),w(Fo.$$.fragment,o),w(gs.$$.fragment,o),w(_s.$$.fragment,o),w(bs.$$.fragment,o),w(ks.$$.fragment,o),w(qo.$$.fragment,o),w(Ds.$$.fragment,o),w(xo.$$.fragment,o),w($s.$$.fragment,o),w(Es.$$.fragment,o),w(Fs.$$.fragment,o),w(Vs.$$.fragment,o),w(xs.$$.fragment,o),w(zs.$$.fragment,o),w(jo.$$.fragment,o),w(Ps.$$.fragment,o),w(Co.$$.fragment,o),w(Rs.$$.fragment,o),w(Bs.$$.fragment,o),w(As.$$.fragment,o),w(Ls.$$.fragment,o),w(Ro.$$.fragment,o),w(Ws.$$.fragment,o),w(Bo.$$.fragment,o),w(Hs.$$.fragment,o),w(Us.$$.fragment,o),w(Qs.$$.fragment,o),w(Gs.$$.fragment,o),w(Lo.$$.fragment,o),w(Zs.$$.fragment,o),w(So.$$.fragment,o),w(ea.$$.fragment,o),w(ta.$$.fragment,o),w(oa.$$.fragment,o),w(na.$$.fragment,o),w(Oo.$$.fragment,o),w(la.$$.fragment,o),w(No.$$.fragment,o),w(da.$$.fragment,o),w(ca.$$.fragment,o),$l=!0)},o(o){y(b.$$.fragment,o),y(ee.$$.fragment,o),y(on.$$.fragment,o),y(nn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(cn.$$.fragment,o),y(hn.$$.fragment,o),y(mn.$$.fragment,o),y(fn.$$.fragment,o),y(un.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(vn.$$.fragment,o),y(wn.$$.fragment,o),y(yn.$$.fragment,o),y(Dn.$$.fragment,o),y($n.$$.fragment,o),y(xn.$$.fragment,o),y(_o.$$.fragment,o),y(zn.$$.fragment,o),y(Mn.$$.fragment,o),y(jn.$$.fragment,o),y(Cn.$$.fragment,o),y(ko.$$.fragment,o),y(Pn.$$.fragment,o),y(Rn.$$.fragment,o),y(Sn.$$.fragment,o),y(To.$$.fragment,o),y(In.$$.fragment,o),y(On.$$.fragment,o),y(Nn.$$.fragment,o),y(Wn.$$.fragment,o),y(Kn.$$.fragment,o),y(yo.$$.fragment,o),y(Jn.$$.fragment,o),y(Xn.$$.fragment,o),y(Yn.$$.fragment,o),y(Zn.$$.fragment,o),y(es.$$.fragment,o),y(ts.$$.fragment,o),y(rs.$$.fragment,o),y($o.$$.fragment,o),y(is.$$.fragment,o),y(ls.$$.fragment,o),y(ds.$$.fragment,o),y(cs.$$.fragment,o),y(us.$$.fragment,o),y(Fo.$$.fragment,o),y(gs.$$.fragment,o),y(_s.$$.fragment,o),y(bs.$$.fragment,o),y(ks.$$.fragment,o),y(qo.$$.fragment,o),y(Ds.$$.fragment,o),y(xo.$$.fragment,o),y($s.$$.fragment,o),y(Es.$$.fragment,o),y(Fs.$$.fragment,o),y(Vs.$$.fragment,o),y(xs.$$.fragment,o),y(zs.$$.fragment,o),y(jo.$$.fragment,o),y(Ps.$$.fragment,o),y(Co.$$.fragment,o),y(Rs.$$.fragment,o),y(Bs.$$.fragment,o),y(As.$$.fragment,o),y(Ls.$$.fragment,o),y(Ro.$$.fragment,o),y(Ws.$$.fragment,o),y(Bo.$$.fragment,o),y(Hs.$$.fragment,o),y(Us.$$.fragment,o),y(Qs.$$.fragment,o),y(Gs.$$.fragment,o),y(Lo.$$.fragment,o),y(Zs.$$.fragment,o),y(So.$$.fragment,o),y(ea.$$.fragment,o),y(ta.$$.fragment,o),y(oa.$$.fragment,o),y(na.$$.fragment,o),y(Oo.$$.fragment,o),y(la.$$.fragment,o),y(No.$$.fragment,o),y(da.$$.fragment,o),y(ca.$$.fragment,o),$l=!1},d(o){t(h),o&&t(F),o&&t(u),D(b),o&&t(J),o&&t(q),D(ee),o&&t(re),o&&t(N),o&&t(M),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(ae),o&&t(O),o&&t(X),o&&t(E),o&&t(K),o&&t(De),o&&t(j),o&&t(Gi),o&&t(tt),o&&t(Ki),o&&t(zt),D(on),o&&t(Ji),o&&t(_t),D(nn),o&&t(Xi),o&&t(Ct),D(an),o&&t(Yi),o&&t(ze),D(rn),D(cn),D(hn),D(mn),D(fn),D(un),o&&t(Zi),o&&t(Bt),D(gn),o&&t(el),o&&t(Xe),D(_n),D(vn),D(wn),D(yn),o&&t(tl),o&&t(Lt),D(Dn),o&&t(ol),o&&t(Ye),D($n),D(xn),D(_o),D(zn),o&&t(nl),o&&t(It),D(Mn),o&&t(sl),o&&t(bt),D(jn),D(Cn),D(ko),o&&t(al),o&&t(Ot),D(Pn),o&&t(rl),o&&t(Ze),D(Rn),D(Sn),D(To),D(In),D(On),o&&t(il),o&&t(Ht),D(Nn),o&&t(ll),o&&t(We),D(Wn),D(Kn),D(yo),D(Jn),D(Xn),D(Yn),D(Zn),o&&t(dl),o&&t(Qt),D(es),o&&t(cl),o&&t(He),D(ts),D(rs),D($o),D(is),D(ls),o&&t(pl),o&&t(Kt),D(ds),o&&t(hl),o&&t(Ue),D(cs),D(us),D(Fo),D(gs),D(_s),o&&t(ml),o&&t(Yt),D(bs),o&&t(fl),o&&t(Qe),D(ks),D(qo),D(Ds),D(xo),D($s),o&&t(ul),o&&t(eo),D(Es),o&&t(gl),o&&t(kt),D(Fs),D(Vs),o&&t(_l),o&&t(to),D(xs),o&&t(bl),o&&t(Ge),D(zs),D(jo),D(Ps),D(Co),D(Rs),D(Bs),o&&t(kl),o&&t(so),D(As),o&&t(vl),o&&t(Me),D(Ls),D(Ro),D(Ws),D(Bo),D(Hs),D(Us),o&&t(Tl),o&&t(ro),D(Qs),o&&t(wl),o&&t(je),D(Gs),D(Lo),D(Zs),D(So),D(ea),D(ta),o&&t(yl),o&&t(lo),D(oa),o&&t(Dl),o&&t(Ce),D(na),D(Oo),D(la),D(No),D(da),D(ca)}}}const m2={local:"debertav2",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaV2Config",title:"DebertaV2Config"},{local:"transformers.DebertaV2Tokenizer",title:"DebertaV2Tokenizer"},{local:"transformers.DebertaV2TokenizerFast",title:"DebertaV2TokenizerFast"},{local:"transformers.DebertaV2Model",title:"DebertaV2Model"},{local:"transformers.DebertaV2PreTrainedModel",title:"DebertaV2PreTrainedModel"},{local:"transformers.DebertaV2ForMaskedLM",title:"DebertaV2ForMaskedLM"},{local:"transformers.DebertaV2ForSequenceClassification",title:"DebertaV2ForSequenceClassification"},{local:"transformers.DebertaV2ForTokenClassification",title:"DebertaV2ForTokenClassification"},{local:"transformers.DebertaV2ForQuestionAnswering",title:"DebertaV2ForQuestionAnswering"},{local:"transformers.TFDebertaV2Model",title:"TFDebertaV2Model"},{local:"transformers.TFDebertaV2PreTrainedModel",title:"TFDebertaV2PreTrainedModel"},{local:"transformers.TFDebertaV2ForMaskedLM",title:"TFDebertaV2ForMaskedLM"},{local:"transformers.TFDebertaV2ForSequenceClassification",title:"TFDebertaV2ForSequenceClassification"},{local:"transformers.TFDebertaV2ForTokenClassification",title:"TFDebertaV2ForTokenClassification"},{local:"transformers.TFDebertaV2ForQuestionAnswering",title:"TFDebertaV2ForQuestionAnswering"}],title:"DeBERTa-v2"};function f2(I){return Kb(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class v2 extends Hb{constructor(h){super();Ub(this,h,f2,h2,Qb,{})}}export{v2 as default,m2 as metadata};
