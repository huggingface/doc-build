import{S as sf,i as af,s as rf,e as a,k as l,w as k,t as n,M as lf,c as r,d as t,m as d,a as i,x as b,h as s,b as c,F as e,g as h,y as w,q as P,o as y,B as I,v as df}from"../../chunks/vendor-6b77c823.js";import{T as at}from"../../chunks/Tip-39098574.js";import{D as re}from"../../chunks/Docstring-abef54e3.js";import{C as Ze}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Xe}from"../../chunks/IconCopyLink-7a11ce68.js";function cf(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function pf(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function hf(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function mf(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function uf(K){let m,G,f,g,v,T,_,A,me,J,$,X,D,Y,ue,x,fe,ce,S,q,Z,ee,M,z,oe,N,pe,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,B,ve;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),ce=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){m=r(p,"P",{});var O=i(m);G=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);v=r(U,"LI",{});var Ee=i(v);T=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(U),A=r(U,"LI",{});var ze=i(A);me=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var Fe=i(x);fe=s(Fe,"model(inputs)"),Fe.forEach(t),ce=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ke=i(q);Z=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),ee=d(p),M=r(p,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var be=i(N);pe=s(be,"input_ids"),be.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var qe=i(H);ge=s(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var $e=i(L);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var Pe=i(W);Te=s(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var we=i(C);le=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(we,"CODE",{});var Ge=i(B);ve=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),we.forEach(t),j.forEach(t)},m(p,O){h(p,m,O),e(m,G),h(p,f,O),h(p,g,O),e(g,v),e(v,T),e(g,_),e(g,A),e(A,me),h(p,J,O),h(p,$,O),e($,X),e($,D),e(D,Y),e($,ue),e($,x),e(x,fe),e($,ce),h(p,S,O),h(p,q,O),e(q,Z),h(p,ee,O),h(p,M,O),e(M,z),e(z,oe),e(z,N),e(N,pe),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,B),e(B,ve)},d(p){p&&t(m),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function ff(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function gf(K){let m,G,f,g,v,T,_,A,me,J,$,X,D,Y,ue,x,fe,ce,S,q,Z,ee,M,z,oe,N,pe,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,B,ve;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),ce=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){m=r(p,"P",{});var O=i(m);G=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);v=r(U,"LI",{});var Ee=i(v);T=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(U),A=r(U,"LI",{});var ze=i(A);me=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var Fe=i(x);fe=s(Fe,"model(inputs)"),Fe.forEach(t),ce=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ke=i(q);Z=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),ee=d(p),M=r(p,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var be=i(N);pe=s(be,"input_ids"),be.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var qe=i(H);ge=s(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var $e=i(L);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var Pe=i(W);Te=s(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var we=i(C);le=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(we,"CODE",{});var Ge=i(B);ve=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),we.forEach(t),j.forEach(t)},m(p,O){h(p,m,O),e(m,G),h(p,f,O),h(p,g,O),e(g,v),e(v,T),e(g,_),e(g,A),e(A,me),h(p,J,O),h(p,$,O),e($,X),e($,D),e(D,Y),e($,ue),e($,x),e(x,fe),e($,ce),h(p,S,O),h(p,q,O),e(q,Z),h(p,ee,O),h(p,M,O),e(M,z),e(z,oe),e(z,N),e(N,pe),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,B),e(B,ve)},d(p){p&&t(m),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function _f(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function Tf(K){let m,G,f,g,v,T,_,A,me,J,$,X,D,Y,ue,x,fe,ce,S,q,Z,ee,M,z,oe,N,pe,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,B,ve;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),ce=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){m=r(p,"P",{});var O=i(m);G=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);v=r(U,"LI",{});var Ee=i(v);T=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(U),A=r(U,"LI",{});var ze=i(A);me=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var Fe=i(x);fe=s(Fe,"model(inputs)"),Fe.forEach(t),ce=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ke=i(q);Z=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),ee=d(p),M=r(p,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var be=i(N);pe=s(be,"input_ids"),be.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var qe=i(H);ge=s(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var $e=i(L);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var Pe=i(W);Te=s(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var we=i(C);le=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(we,"CODE",{});var Ge=i(B);ve=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),we.forEach(t),j.forEach(t)},m(p,O){h(p,m,O),e(m,G),h(p,f,O),h(p,g,O),e(g,v),e(v,T),e(g,_),e(g,A),e(A,me),h(p,J,O),h(p,$,O),e($,X),e($,D),e(D,Y),e($,ue),e($,x),e(x,fe),e($,ce),h(p,S,O),h(p,q,O),e(q,Z),h(p,ee,O),h(p,M,O),e(M,z),e(z,oe),e(z,N),e(N,pe),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,B),e(B,ve)},d(p){p&&t(m),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function vf(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function kf(K){let m,G,f,g,v,T,_,A,me,J,$,X,D,Y,ue,x,fe,ce,S,q,Z,ee,M,z,oe,N,pe,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,B,ve;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),D=a("code"),Y=n("tf.keras.Model.fit"),ue=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),fe=n("model(inputs)"),ce=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),pe=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),ge=n("model(inputs_ids)"),he=l(),E=a("li"),_e=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),ie=n(" or "),W=a("code"),Te=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),le=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=a("code"),ve=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){m=r(p,"P",{});var O=i(m);G=s(O,"TF 2.0 models accepts two formats as inputs:"),O.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);v=r(U,"LI",{});var Ee=i(v);T=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(U),A=r(U,"LI",{});var ze=i(A);me=s(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),D=r(F,"CODE",{});var se=i(D);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),ue=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var Fe=i(x);fe=s(Fe,"model(inputs)"),Fe.forEach(t),ce=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ke=i(q);Z=s(ke,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ke.forEach(t),ee=d(p),M=r(p,"UL",{});var j=i(M);z=r(j,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var be=i(N);pe=s(be,"input_ids"),be.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var qe=i(H);ge=s(qe,"model(inputs_ids)"),qe.forEach(t),R.forEach(t),he=d(j),E=r(j,"LI",{});var V=i(E);_e=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var $e=i(L);Q=s($e,"model([input_ids, attention_mask])"),$e.forEach(t),ie=s(V," or "),W=r(V,"CODE",{});var Pe=i(W);Te=s(Pe,"model([input_ids, attention_mask, token_type_ids])"),Pe.forEach(t),V.forEach(t),te=d(j),C=r(j,"LI",{});var we=i(C);le=s(we,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),B=r(we,"CODE",{});var Ge=i(B);ve=s(Ge,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ge.forEach(t),we.forEach(t),j.forEach(t)},m(p,O){h(p,m,O),e(m,G),h(p,f,O),h(p,g,O),e(g,v),e(v,T),e(g,_),e(g,A),e(A,me),h(p,J,O),h(p,$,O),e($,X),e($,D),e(D,Y),e($,ue),e($,x),e(x,fe),e($,ce),h(p,S,O),h(p,q,O),e(q,Z),h(p,ee,O),h(p,M,O),e(M,z),e(z,oe),e(z,N),e(N,pe),e(z,ne),e(z,H),e(H,ge),e(M,he),e(M,E),e(E,_e),e(E,L),e(L,Q),e(E,ie),e(E,W),e(W,Te),e(M,te),e(M,C),e(C,le),e(C,B),e(B,ve)},d(p){p&&t(m),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function bf(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function wf(K){let m,G,f,g,v,T,_,A,me,J,$,X,D,Y,ue,x,fe,ce,S,q,Z,ee,M,z,oe,N,pe,ne,H,ge,he,E,_e,L,Q,ie,W,Te,te,C,le,B,ve,p,O,U,Ee,ze,F,se,Fe,ke,j,R,be,qe,V,$e,Pe,we,Ge,et,gi,Es,_i,Ti,zs,vi,ki,Fs,bi,wi,ar,bo,rr,Ne,Pi,qs,yi,Ii,Cs,Oi,Ai,Kn,$i,Gi,js,Mi,Ei,ir,Pt,Rt,Ds,wo,zi,xs,Fi,lr,Ce,Po,qi,rt,Ci,Jn,ji,Di,Xn,xi,Hi,yo,Si,Li,Ni,yt,Wi,Qn,Bi,Ui,Yn,Ri,Vi,Ki,Hs,Ji,Xi,Io,dr,It,Vt,Ss,Oo,Qi,Ls,Yi,cr,je,Ao,Zi,Ns,el,tl,$o,Ws,ol,nl,it,sl,Bs,al,rl,Us,il,ll,Rs,dl,cl,pl,Go,hl,Zn,ml,ul,fl,es,Mo,pr,Ot,Kt,Vs,Eo,gl,Ks,_l,hr,Qe,zo,Tl,Fo,vl,Js,kl,bl,wl,qo,Xs,Pl,yl,Qs,Il,Ol,Co,Al,ts,$l,Gl,mr,At,Jt,Ys,jo,Ml,Zs,El,ur,$t,Do,zl,ea,Fl,fr,Gt,xo,ql,ta,Cl,gr,Mt,Xt,oa,Ho,jl,na,Dl,_r,De,So,xl,sa,Hl,Sl,Lo,Ll,os,Nl,Wl,Bl,No,Ul,Wo,Rl,Vl,Kl,We,Bo,Jl,Et,Xl,ns,Ql,Yl,aa,Zl,ed,td,Qt,od,ra,nd,sd,Uo,Tr,zt,Yt,ia,Ro,ad,la,rd,vr,xe,Vo,id,da,ld,dd,Ko,cd,ss,pd,hd,md,Jo,ud,Xo,fd,gd,_d,Be,Qo,Td,Ft,vd,as,kd,bd,ca,wd,Pd,yd,Zt,Id,pa,Od,Ad,Yo,kr,qt,eo,ha,Zo,$d,ma,Gd,br,He,en,Md,ua,Ed,zd,tn,Fd,rs,qd,Cd,jd,on,Dd,nn,xd,Hd,Sd,Ue,sn,Ld,Ct,Nd,is,Wd,Bd,fa,Ud,Rd,Vd,to,Kd,ga,Jd,Xd,an,wr,jt,oo,_a,rn,Qd,Ta,Yd,Pr,Se,ln,Zd,Le,ec,ls,tc,oc,va,nc,sc,ka,ac,rc,ba,ic,lc,wa,dc,cc,pc,dn,hc,ds,mc,uc,fc,cn,gc,pn,_c,Tc,vc,ae,hn,kc,Dt,bc,cs,wc,Pc,Pa,yc,Ic,Oc,no,Ac,ya,$c,Gc,mn,Mc,un,Ec,Ia,zc,Fc,fn,qc,gn,yr,xt,so,Oa,_n,Cc,Aa,jc,Ir,Ie,Tn,Dc,$a,xc,Hc,vn,Sc,ps,Lc,Nc,Wc,kn,Bc,bn,Uc,Rc,Vc,ao,Kc,Re,wn,Jc,Ht,Xc,hs,Qc,Yc,Ga,Zc,ep,tp,ro,op,Ma,np,sp,Pn,Or,St,io,Ea,yn,ap,za,rp,Ar,Oe,In,ip,Fa,lp,dp,On,cp,ms,pp,hp,mp,An,up,$n,fp,gp,_p,lo,Tp,Ve,Gn,vp,Lt,kp,us,bp,wp,qa,Pp,yp,Ip,co,Op,Ca,Ap,$p,Mn,$r,Nt,po,ja,En,Gp,Da,Mp,Gr,Ae,zn,Ep,xa,zp,Fp,Fn,qp,fs,Cp,jp,Dp,qn,xp,Cn,Hp,Sp,Lp,ho,Np,Ke,jn,Wp,Wt,Bp,gs,Up,Rp,Ha,Vp,Kp,Jp,mo,Xp,Sa,Qp,Yp,Dn,Mr,Bt,uo,La,xn,Zp,Na,eh,Er,de,Hn,th,Wa,oh,nh,_s,Ts,sh,ah,rh,Ye,ih,Ba,lh,dh,Ua,ch,ph,Ra,hh,mh,Va,uh,fh,gh,Sn,_h,vs,Th,vh,kh,Ln,bh,Nn,wh,Ph,yh,fo,Ih,Je,Wn,Oh,Ut,Ah,ks,$h,Gh,Ka,Mh,Eh,zh,go,Fh,Ja,qh,Ch,Bn,zr;return T=new Xe({}),Y=new Xe({}),bo=new Ze({props:{code:`pip install spacy ftfy==4.4.3
python -m spacy download en`,highlighted:`pip install spacy ftfy==4.4.3
python -m spacy download en`}}),wo=new Xe({}),Po=new re({props:{name:"class transformers.OpenAIGPTConfig",anchor:"transformers.OpenAIGPTConfig",parameters:[{name:"vocab_size",val:" = 40478"},{name:"n_positions",val:" = 512"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"afn",val:" = 'gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"predict_special_tokens",val:" = True"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/configuration_openai.py#L27",parametersDescription:[{anchor:"transformers.OpenAIGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 40478) &#x2014;
Vocabulary size of the GPT-2 model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTModel">OpenAIGPTModel</a> or <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel">TFOpenAIGPTModel</a>.`,name:"vocab_size"},{anchor:"transformers.OpenAIGPTConfig.n_positions",description:`<strong>n_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"n_positions"},{anchor:"transformers.OpenAIGPTConfig.n_embd",description:`<strong>n_embd</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the embeddings and hidden states.`,name:"n_embd"},{anchor:"transformers.OpenAIGPTConfig.n_layer",description:`<strong>n_layer</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"n_layer"},{anchor:"transformers.OpenAIGPTConfig.n_head",description:`<strong>n_head</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"n_head"},{anchor:"transformers.OpenAIGPTConfig.afn",description:`<strong>afn</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"afn"},{anchor:"transformers.OpenAIGPTConfig.resid_pdrop",description:`<strong>resid_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"resid_pdrop"},{anchor:"transformers.OpenAIGPTConfig.embd_pdrop",description:`<strong>embd_pdrop</strong> (<code>int</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the embeddings.`,name:"embd_pdrop"},{anchor:"transformers.OpenAIGPTConfig.attn_pdrop",description:`<strong>attn_pdrop</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention.`,name:"attn_pdrop"},{anchor:"transformers.OpenAIGPTConfig.layer_norm_epsilon",description:`<strong>layer_norm_epsilon</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-5) &#x2014;
The epsilon to use in the layer normalization layers`,name:"layer_norm_epsilon"},{anchor:"transformers.OpenAIGPTConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.OpenAIGPTConfig.predict_special_tokens",description:`<strong>predict_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not special tokens should be predicted when the model has a language modeling head.`,name:"predict_special_tokens"},{anchor:"transformers.OpenAIGPTConfig.summary_type",description:`<strong>summary_type</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;cls_index&quot;</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Has to be one of the following options:</p>
<ul>
<li><code>&quot;last&quot;</code>: Take the last token hidden state (like XLNet).</li>
<li><code>&quot;first&quot;</code>: Take the first token hidden state (like BERT).</li>
<li><code>&quot;mean&quot;</code>: Take the mean of all tokens hidden states.</li>
<li><code>&quot;cls_index&quot;</code>: Supply a Tensor of classification token position (like GPT/GPT-2).</li>
<li><code>&quot;attn&quot;</code>: Not implemented now, use multi-head attention.</li>
</ul>`,name:"summary_type"},{anchor:"transformers.OpenAIGPTConfig.summary_use_proj",description:`<strong>summary_use_proj</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether or not to add a projection after the vector extraction.`,name:"summary_use_proj"},{anchor:"transformers.OpenAIGPTConfig.summary_activation",description:`<strong>summary_activation</strong> (<code>str</code>, <em>optional</em>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Pass <code>&quot;tanh&quot;</code> for a tanh activation to the output, any other value will result in no activation.`,name:"summary_activation"},{anchor:"transformers.OpenAIGPTConfig.summary_proj_to_labels",description:`<strong>summary_proj_to_labels</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>Whether the projection outputs should have <code>config.num_labels</code> or <code>config.hidden_size</code> classes.`,name:"summary_proj_to_labels"},{anchor:"transformers.OpenAIGPTConfig.summary_first_dropout",description:`<strong>summary_first_dropout</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
Argument used when doing sequence summary, used in the models <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a> and
<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel">OpenAIGPTDoubleHeadsModel</a>.</p>
<p>The dropout ratio to be used after the projection and activation.`,name:"summary_first_dropout"},{anchor:"transformers.OpenAIGPTConfig.use_cache",description:`<strong>use_cache</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Io=new Ze({props:{code:`from transformers import OpenAIGPTConfig, OpenAIGPTModel

# Initializing a GPT configuration
configuration = OpenAIGPTConfig()

# Initializing a model from the configuration
model = OpenAIGPTModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTConfig, OpenAIGPTModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a GPT configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = OpenAIGPTConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Oo=new Xe({}),Ao=new re({props:{name:"class transformers.OpenAIGPTTokenizer",anchor:"transformers.OpenAIGPTTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/tokenization_openai.py#L73",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),Mo=new re({props:{name:"save_vocabulary",anchor:"transformers.OpenAIGPTTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/tokenization_openai.py#L206"}}),Eo=new Xe({}),zo=new re({props:{name:"class transformers.OpenAIGPTTokenizerFast",anchor:"transformers.OpenAIGPTTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/tokenization_openai_fast.py#L40",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),jo=new Xe({}),Do=new re({props:{name:"class transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L301",parametersDescription:[{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_loss",description:`<strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) &#x2014;
Multiple choice classification loss.`,name:"mc_loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),xo=new re({props:{name:"class transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L373",parametersDescription:[{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),Ho=new Xe({}),So=new re({props:{name:"class transformers.OpenAIGPTModel",anchor:"transformers.OpenAIGPTModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L405",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bo=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L431",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutput"
>transformers.modeling_outputs.BaseModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
`}}),Qt=new at({props:{$$slots:{default:[cf]},$$scope:{ctx:K}}}),Uo=new Ze({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ro=new Xe({}),Vo=new re({props:{name:"class transformers.OpenAIGPTLMHeadModel",anchor:"transformers.OpenAIGPTLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L536",parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qo=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L551",parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTLMHeadModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-100, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code>
are ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.CausalLMOutput"
>transformers.modeling_outputs.CausalLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Zt=new at({props:{$$slots:{default:[pf]},$$scope:{ctx:K}}}),Yo=new Ze({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTLMHeadModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs, labels=inputs["input_ids"])
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTLMHeadModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=inputs[<span class="hljs-string">&quot;input_ids&quot;</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Zo=new Xe({}),en=new re({props:{name:"class transformers.OpenAIGPTDoubleHeadsModel",anchor:"transformers.OpenAIGPTDoubleHeadsModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L623",parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sn=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"labels",val:" = None"},{name:"mc_labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L641",parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for language modeling. Note that the labels <strong>are shifted</strong> inside the model, i.e. you can set
<code>labels = input_ids</code> Indices are selected in <code>[-1, 0, ..., config.vocab_size]</code> All labels set to <code>-100</code> are
ignored (masked), the loss is only computed for labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.mc_labels",description:`<strong>mc_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <em>num_choices</em> is the size of the second dimension of the input tensors. (see <em>input_ids</em> above)`,name:"mc_labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Language modeling loss.</p>
</li>
<li>
<p><strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) \u2014 Multiple choice classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
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
  href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),to=new at({props:{$$slots:{default:[hf]},$$scope:{ctx:K}}}),an=new Ze({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
import torch

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTDoubleHeadsModel.from_pretrained("openai-gpt")
tokenizer.add_special_tokens(
    {"cls_token": "[CLS]"}
)  # Add a [CLS] to the vocabulary (we should train it also!)
model.resize_token_embeddings(len(tokenizer))

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
input_ids = torch.tensor([tokenizer.encode(s) for s in choices]).unsqueeze(0)  # Batch size 1, 2 choices
mc_token_ids = torch.tensor([input_ids.size(-1) - 1, input_ids.size(-1) - 1]).unsqueeze(0)  # Batch size 1

outputs = model(input_ids, mc_token_ids=mc_token_ids)
lm_logits = outputs.logits
mc_logits = outputs.mc_logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTDoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.add_special_tokens(
<span class="hljs-meta">... </span>    {<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor([tokenizer.encode(s) <span class="hljs-keyword">for</span> s <span class="hljs-keyword">in</span> choices]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1, 2 choices</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_token_ids = torch.tensor([input_ids.size(-<span class="hljs-number">1</span>) - <span class="hljs-number">1</span>, input_ids.size(-<span class="hljs-number">1</span>) - <span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, mc_token_ids=mc_token_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),rn=new Xe({}),ln=new re({props:{name:"class transformers.OpenAIGPTForSequenceClassification",anchor:"transformers.OpenAIGPTForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L749",parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new re({props:{name:"forward",anchor:"transformers.OpenAIGPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L759",parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
`}}),no=new at({props:{$$slots:{default:[mf]},$$scope:{ctx:K}}}),mn=new Ze({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),un=new Ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),fn=new Ze({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),gn=new Ze({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),_n=new Xe({}),Tn=new re({props:{name:"class transformers.TFOpenAIGPTModel",anchor:"transformers.TFOpenAIGPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L498",parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ao=new at({props:{$$slots:{default:[uf]},$$scope:{ctx:K}}}),wn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L503",parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
`}}),ro=new at({props:{$$slots:{default:[ff]},$$scope:{ctx:K}}}),Pn=new Ze({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),yn=new Xe({}),In=new re({props:{name:"class transformers.TFOpenAIGPTLMHeadModel",anchor:"transformers.TFOpenAIGPTLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L555",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new at({props:{$$slots:{default:[gf]},$$scope:{ctx:K}}}),Gn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L566",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Language modeling loss (for next-token prediction).</p>
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFCausalLMOutput"
>transformers.modeling_tf_outputs.TFCausalLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),co=new at({props:{$$slots:{default:[_f]},$$scope:{ctx:K}}}),Mn=new Ze({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTLMHeadModel.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTLMHeadModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),En=new Xe({}),zn=new re({props:{name:"class transformers.TFOpenAIGPTDoubleHeadsModel",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L645",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ho=new at({props:{$$slots:{default:[Tf]},$$scope:{ctx:K}}}),jn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L654",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.mc_token_ids",description:`<strong>mc_token_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, num_choices)</code>, <em>optional</em>, default to index of the last token of the input) &#x2014;
Index of the classification token in each input sequence. Selected in the range <code>[0, input_ids.size(-1) - 1]</code>.`,name:"mc_token_ids"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).</p>
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
  href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput"
>transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mo=new at({props:{$$slots:{default:[vf]},$$scope:{ctx:K}}}),Dn=new Ze({props:{code:`import tensorflow as tf
from transformers import OpenAIGPTTokenizer, TFOpenAIGPTDoubleHeadsModel

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTDoubleHeadsModel.from_pretrained("openai-gpt")

# Add a [CLS] to the vocabulary (we should train it also!)
tokenizer.add_special_tokens({"cls_token": "[CLS]"})
model.resize_token_embeddings(len(tokenizer))  # Update the model embeddings with the new vocabulary size
print(tokenizer.cls_token_id, len(tokenizer))  # The newly token the last token of the vocabulary

choices = ["Hello, my dog is cute [CLS]", "Hello, my cat is cute [CLS]"]
encoding = tokenizer(choices, return_tensors="tf")
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
inputs["mc_token_ids"] = tf.constant(
    [inputs["input_ids"].shape[-1] - 1, inputs["input_ids"].shape[-1] - 1]
)[
    None, :
]  # Batch size 1
outputs = model(inputs)
lm_prediction_scores, mc_prediction_scores = outputs[:2]`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTDoubleHeadsModel

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTDoubleHeadsModel.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Add a [CLS] to the vocabulary (we should train it also!)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.add_special_tokens({<span class="hljs-string">&quot;cls_token&quot;</span>: <span class="hljs-string">&quot;[CLS]&quot;</span>})
<span class="hljs-meta">&gt;&gt;&gt; </span>model.resize_token_embeddings(<span class="hljs-built_in">len</span>(tokenizer))  <span class="hljs-comment"># Update the model embeddings with the new vocabulary size</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(tokenizer.cls_token_id, <span class="hljs-built_in">len</span>(tokenizer))  <span class="hljs-comment"># The newly token the last token of the vocabulary</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>choices = [<span class="hljs-string">&quot;Hello, my dog is cute [CLS]&quot;</span>, <span class="hljs-string">&quot;Hello, my cat is cute [CLS]&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(choices, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;mc_token_ids&quot;</span>] = tf.constant(
<span class="hljs-meta">... </span>    [inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>, inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].shape[-<span class="hljs-number">1</span>] - <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>)[
<span class="hljs-meta">... </span>    <span class="hljs-literal">None</span>, :
<span class="hljs-meta">&gt;&gt;&gt; </span>]  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),xn=new Xe({}),Hn=new re({props:{name:"class transformers.TFOpenAIGPTForSequenceClassification",anchor:"transformers.TFOpenAIGPTForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L781",parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fo=new at({props:{$$slots:{default:[kf]},$$scope:{ctx:K}}}),Wn=new re({props:{name:"call",anchor:"transformers.TFOpenAIGPTForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L793",parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer">OpenAIGPTTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> or <code>Numpy array</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the cross entropy classification loss. Indices should be in <code>[0, ..., config.vocab_size - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig"
>OpenAIGPTConfig</a>) and inputs.</p>
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
`}}),go=new at({props:{$$slots:{default:[bf]},$$scope:{ctx:K}}}),Bn=new Ze({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
import tensorflow as tf

tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = TFOpenAIGPTForSequenceClassification.from_pretrained("openai-gpt")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFOpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){m=a("meta"),G=l(),f=a("h1"),g=a("a"),v=a("span"),k(T.$$.fragment),_=l(),A=a("span"),me=n("OpenAI GPT"),J=l(),$=a("h2"),X=a("a"),D=a("span"),k(Y.$$.fragment),ue=l(),x=a("span"),fe=n("Overview"),ce=l(),S=a("p"),q=n("OpenAI GPT model was proposed in "),Z=a("a"),ee=n("Improving Language Understanding by Generative Pre-Training"),M=n(`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),z=l(),oe=a("p"),N=n("The abstract from the paper is the following:"),pe=l(),ne=a("p"),H=a("em"),ge=n(`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),he=l(),E=a("p"),_e=n("Tips:"),L=l(),Q=a("ul"),ie=a("li"),W=n(`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Te=l(),te=a("li"),C=n(`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),le=a("em"),B=n("run_generation.py"),ve=n(" example script."),p=l(),O=a("p"),U=a("a"),Ee=n("Write With Transformer"),ze=n(` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),F=l(),se=a("p"),Fe=n("This model was contributed by "),ke=a("a"),j=n("thomwolf"),R=n(". The original code can be found "),be=a("a"),qe=n("here"),V=n("."),$e=l(),Pe=a("p"),we=n("Note:"),Ge=l(),et=a("p"),gi=n("If you want to reproduce the original tokenization process of the "),Es=a("em"),_i=n("OpenAI GPT"),Ti=n(" paper, you will need to install "),zs=a("code"),vi=n("ftfy"),ki=n(`
and `),Fs=a("code"),bi=n("SpaCy"),wi=n(":"),ar=l(),k(bo.$$.fragment),rr=l(),Ne=a("p"),Pi=n("If you don\u2019t install "),qs=a("code"),yi=n("ftfy"),Ii=n(" and "),Cs=a("code"),Oi=n("SpaCy"),Ai=n(", the "),Kn=a("a"),$i=n("OpenAIGPTTokenizer"),Gi=n(` will default to tokenize
using BERT\u2019s `),js=a("code"),Mi=n("BasicTokenizer"),Ei=n(" followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),ir=l(),Pt=a("h2"),Rt=a("a"),Ds=a("span"),k(wo.$$.fragment),zi=l(),xs=a("span"),Fi=n("OpenAIGPTConfig"),lr=l(),Ce=a("div"),k(Po.$$.fragment),qi=l(),rt=a("p"),Ci=n("This is the configuration class to store the configuration of a "),Jn=a("a"),ji=n("OpenAIGPTModel"),Di=n(" or a "),Xn=a("a"),xi=n("TFOpenAIGPTModel"),Hi=n(`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),yo=a("a"),Si=n("GPT"),Li=n(" architecture from OpenAI."),Ni=l(),yt=a("p"),Wi=n("Configuration objects inherit from "),Qn=a("a"),Bi=n("PretrainedConfig"),Ui=n(` and can be used to control the model outputs. Read the
documentation from `),Yn=a("a"),Ri=n("PretrainedConfig"),Vi=n(" for more information."),Ki=l(),Hs=a("p"),Ji=n("Examples:"),Xi=l(),k(Io.$$.fragment),dr=l(),It=a("h2"),Vt=a("a"),Ss=a("span"),k(Oo.$$.fragment),Qi=l(),Ls=a("span"),Yi=n("OpenAIGPTTokenizer"),cr=l(),je=a("div"),k(Ao.$$.fragment),Zi=l(),Ns=a("p"),el=n("Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),tl=l(),$o=a("ul"),Ws=a("li"),ol=n("lowercases all inputs,"),nl=l(),it=a("li"),sl=n("uses "),Bs=a("code"),al=n("SpaCy"),rl=n(" tokenizer and "),Us=a("code"),il=n("ftfy"),ll=n(` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Rs=a("code"),dl=n("BasicTokenizer"),cl=n(" if not."),pl=l(),Go=a("p"),hl=n("This tokenizer inherits from "),Zn=a("a"),ml=n("PreTrainedTokenizer"),ul=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),fl=l(),es=a("div"),k(Mo.$$.fragment),pr=l(),Ot=a("h2"),Kt=a("a"),Vs=a("span"),k(Eo.$$.fragment),gl=l(),Ks=a("span"),_l=n("OpenAIGPTTokenizerFast"),hr=l(),Qe=a("div"),k(zo.$$.fragment),Tl=l(),Fo=a("p"),vl=n("Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Js=a("em"),kl=n("tokenizers"),bl=n(` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),wl=l(),qo=a("ul"),Xs=a("li"),Pl=n("lower case all inputs"),yl=l(),Qs=a("li"),Il=n("uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Ol=l(),Co=a("p"),Al=n("This tokenizer inherits from "),ts=a("a"),$l=n("PreTrainedTokenizerFast"),Gl=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),mr=l(),At=a("h2"),Jt=a("a"),Ys=a("span"),k(jo.$$.fragment),Ml=l(),Zs=a("span"),El=n("OpenAI specific outputs"),ur=l(),$t=a("div"),k(Do.$$.fragment),zl=l(),ea=a("p"),Fl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),fr=l(),Gt=a("div"),k(xo.$$.fragment),ql=l(),ta=a("p"),Cl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),gr=l(),Mt=a("h2"),Xt=a("a"),oa=a("span"),k(Ho.$$.fragment),jl=l(),na=a("span"),Dl=n("OpenAIGPTModel"),_r=l(),De=a("div"),k(So.$$.fragment),xl=l(),sa=a("p"),Hl=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Sl=l(),Lo=a("p"),Ll=n("This model inherits from "),os=a("a"),Nl=n("PreTrainedModel"),Wl=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl=l(),No=a("p"),Ul=n("This model is also a PyTorch "),Wo=a("a"),Rl=n("torch.nn.Module"),Vl=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kl=l(),We=a("div"),k(Bo.$$.fragment),Jl=l(),Et=a("p"),Xl=n("The "),ns=a("a"),Ql=n("OpenAIGPTModel"),Yl=n(" forward method, overrides the "),aa=a("code"),Zl=n("__call__"),ed=n(" special method."),td=l(),k(Qt.$$.fragment),od=l(),ra=a("p"),nd=n("Example:"),sd=l(),k(Uo.$$.fragment),Tr=l(),zt=a("h2"),Yt=a("a"),ia=a("span"),k(Ro.$$.fragment),ad=l(),la=a("span"),rd=n("OpenAIGPTLMHeadModel"),vr=l(),xe=a("div"),k(Vo.$$.fragment),id=l(),da=a("p"),ld=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),dd=l(),Ko=a("p"),cd=n("This model inherits from "),ss=a("a"),pd=n("PreTrainedModel"),hd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),md=l(),Jo=a("p"),ud=n("This model is also a PyTorch "),Xo=a("a"),fd=n("torch.nn.Module"),gd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_d=l(),Be=a("div"),k(Qo.$$.fragment),Td=l(),Ft=a("p"),vd=n("The "),as=a("a"),kd=n("OpenAIGPTLMHeadModel"),bd=n(" forward method, overrides the "),ca=a("code"),wd=n("__call__"),Pd=n(" special method."),yd=l(),k(Zt.$$.fragment),Id=l(),pa=a("p"),Od=n("Example:"),Ad=l(),k(Yo.$$.fragment),kr=l(),qt=a("h2"),eo=a("a"),ha=a("span"),k(Zo.$$.fragment),$d=l(),ma=a("span"),Gd=n("OpenAIGPTDoubleHeadsModel"),br=l(),He=a("div"),k(en.$$.fragment),Md=l(),ua=a("p"),Ed=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),zd=l(),tn=a("p"),Fd=n("This model inherits from "),rs=a("a"),qd=n("PreTrainedModel"),Cd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jd=l(),on=a("p"),Dd=n("This model is also a PyTorch "),nn=a("a"),xd=n("torch.nn.Module"),Hd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Sd=l(),Ue=a("div"),k(sn.$$.fragment),Ld=l(),Ct=a("p"),Nd=n("The "),is=a("a"),Wd=n("OpenAIGPTDoubleHeadsModel"),Bd=n(" forward method, overrides the "),fa=a("code"),Ud=n("__call__"),Rd=n(" special method."),Vd=l(),k(to.$$.fragment),Kd=l(),ga=a("p"),Jd=n("Examples:"),Xd=l(),k(an.$$.fragment),wr=l(),jt=a("h2"),oo=a("a"),_a=a("span"),k(rn.$$.fragment),Qd=l(),Ta=a("span"),Yd=n("OpenAIGPTForSequenceClassification"),Pr=l(),Se=a("div"),k(ln.$$.fragment),Zd=l(),Le=a("p"),ec=n(`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),ls=a("a"),tc=n("OpenAIGPTForSequenceClassification"),oc=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),va=a("code"),nc=n("pad_token_id"),sc=n(` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),ka=a("code"),ac=n("pad_token_id"),rc=n(` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),ba=a("code"),ic=n("inputs_embeds"),lc=n(" are passed instead of "),wa=a("code"),dc=n("input_ids"),cc=n(`, it does the same (take
the last value in each row of the batch).`),pc=l(),dn=a("p"),hc=n("This model inherits from "),ds=a("a"),mc=n("PreTrainedModel"),uc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fc=l(),cn=a("p"),gc=n("This model is also a PyTorch "),pn=a("a"),_c=n("torch.nn.Module"),Tc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vc=l(),ae=a("div"),k(hn.$$.fragment),kc=l(),Dt=a("p"),bc=n("The "),cs=a("a"),wc=n("OpenAIGPTForSequenceClassification"),Pc=n(" forward method, overrides the "),Pa=a("code"),yc=n("__call__"),Ic=n(" special method."),Oc=l(),k(no.$$.fragment),Ac=l(),ya=a("p"),$c=n("Example of single-label classification:"),Gc=l(),k(mn.$$.fragment),Mc=l(),k(un.$$.fragment),Ec=l(),Ia=a("p"),zc=n("Example of multi-label classification:"),Fc=l(),k(fn.$$.fragment),qc=l(),k(gn.$$.fragment),yr=l(),xt=a("h2"),so=a("a"),Oa=a("span"),k(_n.$$.fragment),Cc=l(),Aa=a("span"),jc=n("TFOpenAIGPTModel"),Ir=l(),Ie=a("div"),k(Tn.$$.fragment),Dc=l(),$a=a("p"),xc=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Hc=l(),vn=a("p"),Sc=n("This model inherits from "),ps=a("a"),Lc=n("TFPreTrainedModel"),Nc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wc=l(),kn=a("p"),Bc=n("This model is also a "),bn=a("a"),Uc=n("tf.keras.Model"),Rc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vc=l(),k(ao.$$.fragment),Kc=l(),Re=a("div"),k(wn.$$.fragment),Jc=l(),Ht=a("p"),Xc=n("The "),hs=a("a"),Qc=n("TFOpenAIGPTModel"),Yc=n(" forward method, overrides the "),Ga=a("code"),Zc=n("__call__"),ep=n(" special method."),tp=l(),k(ro.$$.fragment),op=l(),Ma=a("p"),np=n("Example:"),sp=l(),k(Pn.$$.fragment),Or=l(),St=a("h2"),io=a("a"),Ea=a("span"),k(yn.$$.fragment),ap=l(),za=a("span"),rp=n("TFOpenAIGPTLMHeadModel"),Ar=l(),Oe=a("div"),k(In.$$.fragment),ip=l(),Fa=a("p"),lp=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),dp=l(),On=a("p"),cp=n("This model inherits from "),ms=a("a"),pp=n("TFPreTrainedModel"),hp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mp=l(),An=a("p"),up=n("This model is also a "),$n=a("a"),fp=n("tf.keras.Model"),gp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_p=l(),k(lo.$$.fragment),Tp=l(),Ve=a("div"),k(Gn.$$.fragment),vp=l(),Lt=a("p"),kp=n("The "),us=a("a"),bp=n("TFOpenAIGPTLMHeadModel"),wp=n(" forward method, overrides the "),qa=a("code"),Pp=n("__call__"),yp=n(" special method."),Ip=l(),k(co.$$.fragment),Op=l(),Ca=a("p"),Ap=n("Example:"),$p=l(),k(Mn.$$.fragment),$r=l(),Nt=a("h2"),po=a("a"),ja=a("span"),k(En.$$.fragment),Gp=l(),Da=a("span"),Mp=n("TFOpenAIGPTDoubleHeadsModel"),Gr=l(),Ae=a("div"),k(zn.$$.fragment),Ep=l(),xa=a("p"),zp=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Fp=l(),Fn=a("p"),qp=n("This model inherits from "),fs=a("a"),Cp=n("TFPreTrainedModel"),jp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Dp=l(),qn=a("p"),xp=n("This model is also a "),Cn=a("a"),Hp=n("tf.keras.Model"),Sp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Lp=l(),k(ho.$$.fragment),Np=l(),Ke=a("div"),k(jn.$$.fragment),Wp=l(),Wt=a("p"),Bp=n("The "),gs=a("a"),Up=n("TFOpenAIGPTDoubleHeadsModel"),Rp=n(" forward method, overrides the "),Ha=a("code"),Vp=n("__call__"),Kp=n(" special method."),Jp=l(),k(mo.$$.fragment),Xp=l(),Sa=a("p"),Qp=n("Examples:"),Yp=l(),k(Dn.$$.fragment),Mr=l(),Bt=a("h2"),uo=a("a"),La=a("span"),k(xn.$$.fragment),Zp=l(),Na=a("span"),eh=n("TFOpenAIGPTForSequenceClassification"),Er=l(),de=a("div"),k(Hn.$$.fragment),th=l(),Wa=a("p"),oh=n("The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),nh=l(),_s=a("p"),Ts=a("a"),sh=n("TFOpenAIGPTForSequenceClassification"),ah=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),rh=l(),Ye=a("p"),ih=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ba=a("code"),lh=n("pad_token_id"),dh=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ua=a("code"),ch=n("pad_token_id"),ph=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ra=a("code"),hh=n("inputs_embeds"),mh=n(" are passed instead of "),Va=a("code"),uh=n("input_ids"),fh=n(`, it does the same (take the last value in
each row of the batch).`),gh=l(),Sn=a("p"),_h=n("This model inherits from "),vs=a("a"),Th=n("TFPreTrainedModel"),vh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kh=l(),Ln=a("p"),bh=n("This model is also a "),Nn=a("a"),wh=n("tf.keras.Model"),Ph=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yh=l(),k(fo.$$.fragment),Ih=l(),Je=a("div"),k(Wn.$$.fragment),Oh=l(),Ut=a("p"),Ah=n("The "),ks=a("a"),$h=n("TFOpenAIGPTForSequenceClassification"),Gh=n(" forward method, overrides the "),Ka=a("code"),Mh=n("__call__"),Eh=n(" special method."),zh=l(),k(go.$$.fragment),Fh=l(),Ja=a("p"),qh=n("Example:"),Ch=l(),k(Bn.$$.fragment),this.h()},l(o){const u=lf('[data-svelte="svelte-1phssyn"]',document.head);m=r(u,"META",{name:!0,content:!0}),u.forEach(t),G=d(o),f=r(o,"H1",{class:!0});var Un=i(f);g=r(Un,"A",{id:!0,class:!0,href:!0});var Xa=i(g);v=r(Xa,"SPAN",{});var Qa=i(v);b(T.$$.fragment,Qa),Qa.forEach(t),Xa.forEach(t),_=d(Un),A=r(Un,"SPAN",{});var Ya=i(A);me=s(Ya,"OpenAI GPT"),Ya.forEach(t),Un.forEach(t),J=d(o),$=r(o,"H2",{class:!0});var Rn=i($);X=r(Rn,"A",{id:!0,class:!0,href:!0});var Za=i(X);D=r(Za,"SPAN",{});var er=i(D);b(Y.$$.fragment,er),er.forEach(t),Za.forEach(t),ue=d(Rn),x=r(Rn,"SPAN",{});var tr=i(x);fe=s(tr,"Overview"),tr.forEach(t),Rn.forEach(t),ce=d(o),S=r(o,"P",{});var Vn=i(S);q=s(Vn,"OpenAI GPT model was proposed in "),Z=r(Vn,"A",{href:!0,rel:!0});var or=i(Z);ee=s(or,"Improving Language Understanding by Generative Pre-Training"),or.forEach(t),M=s(Vn,`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),Vn.forEach(t),z=d(o),oe=r(o,"P",{});var nr=i(oe);N=s(nr,"The abstract from the paper is the following:"),nr.forEach(t),pe=d(o),ne=r(o,"P",{});var sr=i(ne);H=r(sr,"EM",{});var xh=i(H);ge=s(xh,`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),xh.forEach(t),sr.forEach(t),he=d(o),E=r(o,"P",{});var Hh=i(E);_e=s(Hh,"Tips:"),Hh.forEach(t),L=d(o),Q=r(o,"UL",{});var Fr=i(Q);ie=r(Fr,"LI",{});var Sh=i(ie);W=s(Sh,`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Sh.forEach(t),Te=d(Fr),te=r(Fr,"LI",{});var qr=i(te);C=s(qr,`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),le=r(qr,"EM",{});var Lh=i(le);B=s(Lh,"run_generation.py"),Lh.forEach(t),ve=s(qr," example script."),qr.forEach(t),Fr.forEach(t),p=d(o),O=r(o,"P",{});var jh=i(O);U=r(jh,"A",{href:!0,rel:!0});var Nh=i(U);Ee=s(Nh,"Write With Transformer"),Nh.forEach(t),ze=s(jh,` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),jh.forEach(t),F=d(o),se=r(o,"P",{});var bs=i(se);Fe=s(bs,"This model was contributed by "),ke=r(bs,"A",{href:!0,rel:!0});var Wh=i(ke);j=s(Wh,"thomwolf"),Wh.forEach(t),R=s(bs,". The original code can be found "),be=r(bs,"A",{href:!0,rel:!0});var Bh=i(be);qe=s(Bh,"here"),Bh.forEach(t),V=s(bs,"."),bs.forEach(t),$e=d(o),Pe=r(o,"P",{});var Uh=i(Pe);we=s(Uh,"Note:"),Uh.forEach(t),Ge=d(o),et=r(o,"P",{});var _o=i(et);gi=s(_o,"If you want to reproduce the original tokenization process of the "),Es=r(_o,"EM",{});var Rh=i(Es);_i=s(Rh,"OpenAI GPT"),Rh.forEach(t),Ti=s(_o," paper, you will need to install "),zs=r(_o,"CODE",{});var Vh=i(zs);vi=s(Vh,"ftfy"),Vh.forEach(t),ki=s(_o,`
and `),Fs=r(_o,"CODE",{});var Kh=i(Fs);bi=s(Kh,"SpaCy"),Kh.forEach(t),wi=s(_o,":"),_o.forEach(t),ar=d(o),b(bo.$$.fragment,o),rr=d(o),Ne=r(o,"P",{});var lt=i(Ne);Pi=s(lt,"If you don\u2019t install "),qs=r(lt,"CODE",{});var Jh=i(qs);yi=s(Jh,"ftfy"),Jh.forEach(t),Ii=s(lt," and "),Cs=r(lt,"CODE",{});var Xh=i(Cs);Oi=s(Xh,"SpaCy"),Xh.forEach(t),Ai=s(lt,", the "),Kn=r(lt,"A",{href:!0});var Qh=i(Kn);$i=s(Qh,"OpenAIGPTTokenizer"),Qh.forEach(t),Gi=s(lt,` will default to tokenize
using BERT\u2019s `),js=r(lt,"CODE",{});var Yh=i(js);Mi=s(Yh,"BasicTokenizer"),Yh.forEach(t),Ei=s(lt," followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),lt.forEach(t),ir=d(o),Pt=r(o,"H2",{class:!0});var Cr=i(Pt);Rt=r(Cr,"A",{id:!0,class:!0,href:!0});var Zh=i(Rt);Ds=r(Zh,"SPAN",{});var em=i(Ds);b(wo.$$.fragment,em),em.forEach(t),Zh.forEach(t),zi=d(Cr),xs=r(Cr,"SPAN",{});var tm=i(xs);Fi=s(tm,"OpenAIGPTConfig"),tm.forEach(t),Cr.forEach(t),lr=d(o),Ce=r(o,"DIV",{class:!0});var dt=i(Ce);b(Po.$$.fragment,dt),qi=d(dt),rt=r(dt,"P",{});var To=i(rt);Ci=s(To,"This is the configuration class to store the configuration of a "),Jn=r(To,"A",{href:!0});var om=i(Jn);ji=s(om,"OpenAIGPTModel"),om.forEach(t),Di=s(To," or a "),Xn=r(To,"A",{href:!0});var nm=i(Xn);xi=s(nm,"TFOpenAIGPTModel"),nm.forEach(t),Hi=s(To,`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),yo=r(To,"A",{href:!0,rel:!0});var sm=i(yo);Si=s(sm,"GPT"),sm.forEach(t),Li=s(To," architecture from OpenAI."),To.forEach(t),Ni=d(dt),yt=r(dt,"P",{});var ws=i(yt);Wi=s(ws,"Configuration objects inherit from "),Qn=r(ws,"A",{href:!0});var am=i(Qn);Bi=s(am,"PretrainedConfig"),am.forEach(t),Ui=s(ws,` and can be used to control the model outputs. Read the
documentation from `),Yn=r(ws,"A",{href:!0});var rm=i(Yn);Ri=s(rm,"PretrainedConfig"),rm.forEach(t),Vi=s(ws," for more information."),ws.forEach(t),Ki=d(dt),Hs=r(dt,"P",{});var im=i(Hs);Ji=s(im,"Examples:"),im.forEach(t),Xi=d(dt),b(Io.$$.fragment,dt),dt.forEach(t),dr=d(o),It=r(o,"H2",{class:!0});var jr=i(It);Vt=r(jr,"A",{id:!0,class:!0,href:!0});var lm=i(Vt);Ss=r(lm,"SPAN",{});var dm=i(Ss);b(Oo.$$.fragment,dm),dm.forEach(t),lm.forEach(t),Qi=d(jr),Ls=r(jr,"SPAN",{});var cm=i(Ls);Yi=s(cm,"OpenAIGPTTokenizer"),cm.forEach(t),jr.forEach(t),cr=d(o),je=r(o,"DIV",{class:!0});var ct=i(je);b(Ao.$$.fragment,ct),Zi=d(ct),Ns=r(ct,"P",{});var pm=i(Ns);el=s(pm,"Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),pm.forEach(t),tl=d(ct),$o=r(ct,"UL",{});var Dr=i($o);Ws=r(Dr,"LI",{});var hm=i(Ws);ol=s(hm,"lowercases all inputs,"),hm.forEach(t),nl=d(Dr),it=r(Dr,"LI",{});var vo=i(it);sl=s(vo,"uses "),Bs=r(vo,"CODE",{});var mm=i(Bs);al=s(mm,"SpaCy"),mm.forEach(t),rl=s(vo," tokenizer and "),Us=r(vo,"CODE",{});var um=i(Us);il=s(um,"ftfy"),um.forEach(t),ll=s(vo,` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Rs=r(vo,"CODE",{});var fm=i(Rs);dl=s(fm,"BasicTokenizer"),fm.forEach(t),cl=s(vo," if not."),vo.forEach(t),Dr.forEach(t),pl=d(ct),Go=r(ct,"P",{});var xr=i(Go);hl=s(xr,"This tokenizer inherits from "),Zn=r(xr,"A",{href:!0});var gm=i(Zn);ml=s(gm,"PreTrainedTokenizer"),gm.forEach(t),ul=s(xr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),xr.forEach(t),fl=d(ct),es=r(ct,"DIV",{class:!0});var _m=i(es);b(Mo.$$.fragment,_m),_m.forEach(t),ct.forEach(t),pr=d(o),Ot=r(o,"H2",{class:!0});var Hr=i(Ot);Kt=r(Hr,"A",{id:!0,class:!0,href:!0});var Tm=i(Kt);Vs=r(Tm,"SPAN",{});var vm=i(Vs);b(Eo.$$.fragment,vm),vm.forEach(t),Tm.forEach(t),gl=d(Hr),Ks=r(Hr,"SPAN",{});var km=i(Ks);_l=s(km,"OpenAIGPTTokenizerFast"),km.forEach(t),Hr.forEach(t),hr=d(o),Qe=r(o,"DIV",{class:!0});var ko=i(Qe);b(zo.$$.fragment,ko),Tl=d(ko),Fo=r(ko,"P",{});var Sr=i(Fo);vl=s(Sr,"Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Js=r(Sr,"EM",{});var bm=i(Js);kl=s(bm,"tokenizers"),bm.forEach(t),bl=s(Sr,` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),Sr.forEach(t),wl=d(ko),qo=r(ko,"UL",{});var Lr=i(qo);Xs=r(Lr,"LI",{});var wm=i(Xs);Pl=s(wm,"lower case all inputs"),wm.forEach(t),yl=d(Lr),Qs=r(Lr,"LI",{});var Pm=i(Qs);Il=s(Pm,"uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),Pm.forEach(t),Lr.forEach(t),Ol=d(ko),Co=r(ko,"P",{});var Nr=i(Co);Al=s(Nr,"This tokenizer inherits from "),ts=r(Nr,"A",{href:!0});var ym=i(ts);$l=s(ym,"PreTrainedTokenizerFast"),ym.forEach(t),Gl=s(Nr,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Nr.forEach(t),ko.forEach(t),mr=d(o),At=r(o,"H2",{class:!0});var Wr=i(At);Jt=r(Wr,"A",{id:!0,class:!0,href:!0});var Im=i(Jt);Ys=r(Im,"SPAN",{});var Om=i(Ys);b(jo.$$.fragment,Om),Om.forEach(t),Im.forEach(t),Ml=d(Wr),Zs=r(Wr,"SPAN",{});var Am=i(Zs);El=s(Am,"OpenAI specific outputs"),Am.forEach(t),Wr.forEach(t),ur=d(o),$t=r(o,"DIV",{class:!0});var Br=i($t);b(Do.$$.fragment,Br),zl=d(Br),ea=r(Br,"P",{});var $m=i(ea);Fl=s($m,"Base class for outputs of models predicting if two sentences are consecutive or not."),$m.forEach(t),Br.forEach(t),fr=d(o),Gt=r(o,"DIV",{class:!0});var Ur=i(Gt);b(xo.$$.fragment,Ur),ql=d(Ur),ta=r(Ur,"P",{});var Gm=i(ta);Cl=s(Gm,"Base class for outputs of models predicting if two sentences are consecutive or not."),Gm.forEach(t),Ur.forEach(t),gr=d(o),Mt=r(o,"H2",{class:!0});var Rr=i(Mt);Xt=r(Rr,"A",{id:!0,class:!0,href:!0});var Mm=i(Xt);oa=r(Mm,"SPAN",{});var Em=i(oa);b(Ho.$$.fragment,Em),Em.forEach(t),Mm.forEach(t),jl=d(Rr),na=r(Rr,"SPAN",{});var zm=i(na);Dl=s(zm,"OpenAIGPTModel"),zm.forEach(t),Rr.forEach(t),_r=d(o),De=r(o,"DIV",{class:!0});var pt=i(De);b(So.$$.fragment,pt),xl=d(pt),sa=r(pt,"P",{});var Fm=i(sa);Hl=s(Fm,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Fm.forEach(t),Sl=d(pt),Lo=r(pt,"P",{});var Vr=i(Lo);Ll=s(Vr,"This model inherits from "),os=r(Vr,"A",{href:!0});var qm=i(os);Nl=s(qm,"PreTrainedModel"),qm.forEach(t),Wl=s(Vr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vr.forEach(t),Bl=d(pt),No=r(pt,"P",{});var Kr=i(No);Ul=s(Kr,"This model is also a PyTorch "),Wo=r(Kr,"A",{href:!0,rel:!0});var Cm=i(Wo);Rl=s(Cm,"torch.nn.Module"),Cm.forEach(t),Vl=s(Kr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kr.forEach(t),Kl=d(pt),We=r(pt,"DIV",{class:!0});var ht=i(We);b(Bo.$$.fragment,ht),Jl=d(ht),Et=r(ht,"P",{});var Ps=i(Et);Xl=s(Ps,"The "),ns=r(Ps,"A",{href:!0});var jm=i(ns);Ql=s(jm,"OpenAIGPTModel"),jm.forEach(t),Yl=s(Ps," forward method, overrides the "),aa=r(Ps,"CODE",{});var Dm=i(aa);Zl=s(Dm,"__call__"),Dm.forEach(t),ed=s(Ps," special method."),Ps.forEach(t),td=d(ht),b(Qt.$$.fragment,ht),od=d(ht),ra=r(ht,"P",{});var xm=i(ra);nd=s(xm,"Example:"),xm.forEach(t),sd=d(ht),b(Uo.$$.fragment,ht),ht.forEach(t),pt.forEach(t),Tr=d(o),zt=r(o,"H2",{class:!0});var Jr=i(zt);Yt=r(Jr,"A",{id:!0,class:!0,href:!0});var Hm=i(Yt);ia=r(Hm,"SPAN",{});var Sm=i(ia);b(Ro.$$.fragment,Sm),Sm.forEach(t),Hm.forEach(t),ad=d(Jr),la=r(Jr,"SPAN",{});var Lm=i(la);rd=s(Lm,"OpenAIGPTLMHeadModel"),Lm.forEach(t),Jr.forEach(t),vr=d(o),xe=r(o,"DIV",{class:!0});var mt=i(xe);b(Vo.$$.fragment,mt),id=d(mt),da=r(mt,"P",{});var Nm=i(da);ld=s(Nm,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Nm.forEach(t),dd=d(mt),Ko=r(mt,"P",{});var Xr=i(Ko);cd=s(Xr,"This model inherits from "),ss=r(Xr,"A",{href:!0});var Wm=i(ss);pd=s(Wm,"PreTrainedModel"),Wm.forEach(t),hd=s(Xr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xr.forEach(t),md=d(mt),Jo=r(mt,"P",{});var Qr=i(Jo);ud=s(Qr,"This model is also a PyTorch "),Xo=r(Qr,"A",{href:!0,rel:!0});var Bm=i(Xo);fd=s(Bm,"torch.nn.Module"),Bm.forEach(t),gd=s(Qr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qr.forEach(t),_d=d(mt),Be=r(mt,"DIV",{class:!0});var ut=i(Be);b(Qo.$$.fragment,ut),Td=d(ut),Ft=r(ut,"P",{});var ys=i(Ft);vd=s(ys,"The "),as=r(ys,"A",{href:!0});var Um=i(as);kd=s(Um,"OpenAIGPTLMHeadModel"),Um.forEach(t),bd=s(ys," forward method, overrides the "),ca=r(ys,"CODE",{});var Rm=i(ca);wd=s(Rm,"__call__"),Rm.forEach(t),Pd=s(ys," special method."),ys.forEach(t),yd=d(ut),b(Zt.$$.fragment,ut),Id=d(ut),pa=r(ut,"P",{});var Vm=i(pa);Od=s(Vm,"Example:"),Vm.forEach(t),Ad=d(ut),b(Yo.$$.fragment,ut),ut.forEach(t),mt.forEach(t),kr=d(o),qt=r(o,"H2",{class:!0});var Yr=i(qt);eo=r(Yr,"A",{id:!0,class:!0,href:!0});var Km=i(eo);ha=r(Km,"SPAN",{});var Jm=i(ha);b(Zo.$$.fragment,Jm),Jm.forEach(t),Km.forEach(t),$d=d(Yr),ma=r(Yr,"SPAN",{});var Xm=i(ma);Gd=s(Xm,"OpenAIGPTDoubleHeadsModel"),Xm.forEach(t),Yr.forEach(t),br=d(o),He=r(o,"DIV",{class:!0});var ft=i(He);b(en.$$.fragment,ft),Md=d(ft),ua=r(ft,"P",{});var Qm=i(ua);Ed=s(Qm,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Qm.forEach(t),zd=d(ft),tn=r(ft,"P",{});var Zr=i(tn);Fd=s(Zr,"This model inherits from "),rs=r(Zr,"A",{href:!0});var Ym=i(rs);qd=s(Ym,"PreTrainedModel"),Ym.forEach(t),Cd=s(Zr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zr.forEach(t),jd=d(ft),on=r(ft,"P",{});var ei=i(on);Dd=s(ei,"This model is also a PyTorch "),nn=r(ei,"A",{href:!0,rel:!0});var Zm=i(nn);xd=s(Zm,"torch.nn.Module"),Zm.forEach(t),Hd=s(ei,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ei.forEach(t),Sd=d(ft),Ue=r(ft,"DIV",{class:!0});var gt=i(Ue);b(sn.$$.fragment,gt),Ld=d(gt),Ct=r(gt,"P",{});var Is=i(Ct);Nd=s(Is,"The "),is=r(Is,"A",{href:!0});var eu=i(is);Wd=s(eu,"OpenAIGPTDoubleHeadsModel"),eu.forEach(t),Bd=s(Is," forward method, overrides the "),fa=r(Is,"CODE",{});var tu=i(fa);Ud=s(tu,"__call__"),tu.forEach(t),Rd=s(Is," special method."),Is.forEach(t),Vd=d(gt),b(to.$$.fragment,gt),Kd=d(gt),ga=r(gt,"P",{});var ou=i(ga);Jd=s(ou,"Examples:"),ou.forEach(t),Xd=d(gt),b(an.$$.fragment,gt),gt.forEach(t),ft.forEach(t),wr=d(o),jt=r(o,"H2",{class:!0});var ti=i(jt);oo=r(ti,"A",{id:!0,class:!0,href:!0});var nu=i(oo);_a=r(nu,"SPAN",{});var su=i(_a);b(rn.$$.fragment,su),su.forEach(t),nu.forEach(t),Qd=d(ti),Ta=r(ti,"SPAN",{});var au=i(Ta);Yd=s(au,"OpenAIGPTForSequenceClassification"),au.forEach(t),ti.forEach(t),Pr=d(o),Se=r(o,"DIV",{class:!0});var _t=i(Se);b(ln.$$.fragment,_t),Zd=d(_t),Le=r(_t,"P",{});var tt=i(Le);ec=s(tt,`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),ls=r(tt,"A",{href:!0});var ru=i(ls);tc=s(ru,"OpenAIGPTForSequenceClassification"),ru.forEach(t),oc=s(tt,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),va=r(tt,"CODE",{});var iu=i(va);nc=s(iu,"pad_token_id"),iu.forEach(t),sc=s(tt,` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),ka=r(tt,"CODE",{});var lu=i(ka);ac=s(lu,"pad_token_id"),lu.forEach(t),rc=s(tt,` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),ba=r(tt,"CODE",{});var du=i(ba);ic=s(du,"inputs_embeds"),du.forEach(t),lc=s(tt," are passed instead of "),wa=r(tt,"CODE",{});var cu=i(wa);dc=s(cu,"input_ids"),cu.forEach(t),cc=s(tt,`, it does the same (take
the last value in each row of the batch).`),tt.forEach(t),pc=d(_t),dn=r(_t,"P",{});var oi=i(dn);hc=s(oi,"This model inherits from "),ds=r(oi,"A",{href:!0});var pu=i(ds);mc=s(pu,"PreTrainedModel"),pu.forEach(t),uc=s(oi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),oi.forEach(t),fc=d(_t),cn=r(_t,"P",{});var ni=i(cn);gc=s(ni,"This model is also a PyTorch "),pn=r(ni,"A",{href:!0,rel:!0});var hu=i(pn);_c=s(hu,"torch.nn.Module"),hu.forEach(t),Tc=s(ni,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ni.forEach(t),vc=d(_t),ae=r(_t,"DIV",{class:!0});var ye=i(ae);b(hn.$$.fragment,ye),kc=d(ye),Dt=r(ye,"P",{});var Os=i(Dt);bc=s(Os,"The "),cs=r(Os,"A",{href:!0});var mu=i(cs);wc=s(mu,"OpenAIGPTForSequenceClassification"),mu.forEach(t),Pc=s(Os," forward method, overrides the "),Pa=r(Os,"CODE",{});var uu=i(Pa);yc=s(uu,"__call__"),uu.forEach(t),Ic=s(Os," special method."),Os.forEach(t),Oc=d(ye),b(no.$$.fragment,ye),Ac=d(ye),ya=r(ye,"P",{});var fu=i(ya);$c=s(fu,"Example of single-label classification:"),fu.forEach(t),Gc=d(ye),b(mn.$$.fragment,ye),Mc=d(ye),b(un.$$.fragment,ye),Ec=d(ye),Ia=r(ye,"P",{});var gu=i(Ia);zc=s(gu,"Example of multi-label classification:"),gu.forEach(t),Fc=d(ye),b(fn.$$.fragment,ye),qc=d(ye),b(gn.$$.fragment,ye),ye.forEach(t),_t.forEach(t),yr=d(o),xt=r(o,"H2",{class:!0});var si=i(xt);so=r(si,"A",{id:!0,class:!0,href:!0});var _u=i(so);Oa=r(_u,"SPAN",{});var Tu=i(Oa);b(_n.$$.fragment,Tu),Tu.forEach(t),_u.forEach(t),Cc=d(si),Aa=r(si,"SPAN",{});var vu=i(Aa);jc=s(vu,"TFOpenAIGPTModel"),vu.forEach(t),si.forEach(t),Ir=d(o),Ie=r(o,"DIV",{class:!0});var ot=i(Ie);b(Tn.$$.fragment,ot),Dc=d(ot),$a=r(ot,"P",{});var ku=i($a);xc=s(ku,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),ku.forEach(t),Hc=d(ot),vn=r(ot,"P",{});var ai=i(vn);Sc=s(ai,"This model inherits from "),ps=r(ai,"A",{href:!0});var bu=i(ps);Lc=s(bu,"TFPreTrainedModel"),bu.forEach(t),Nc=s(ai,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ai.forEach(t),Wc=d(ot),kn=r(ot,"P",{});var ri=i(kn);Bc=s(ri,"This model is also a "),bn=r(ri,"A",{href:!0,rel:!0});var wu=i(bn);Uc=s(wu,"tf.keras.Model"),wu.forEach(t),Rc=s(ri,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ri.forEach(t),Vc=d(ot),b(ao.$$.fragment,ot),Kc=d(ot),Re=r(ot,"DIV",{class:!0});var Tt=i(Re);b(wn.$$.fragment,Tt),Jc=d(Tt),Ht=r(Tt,"P",{});var As=i(Ht);Xc=s(As,"The "),hs=r(As,"A",{href:!0});var Pu=i(hs);Qc=s(Pu,"TFOpenAIGPTModel"),Pu.forEach(t),Yc=s(As," forward method, overrides the "),Ga=r(As,"CODE",{});var yu=i(Ga);Zc=s(yu,"__call__"),yu.forEach(t),ep=s(As," special method."),As.forEach(t),tp=d(Tt),b(ro.$$.fragment,Tt),op=d(Tt),Ma=r(Tt,"P",{});var Iu=i(Ma);np=s(Iu,"Example:"),Iu.forEach(t),sp=d(Tt),b(Pn.$$.fragment,Tt),Tt.forEach(t),ot.forEach(t),Or=d(o),St=r(o,"H2",{class:!0});var ii=i(St);io=r(ii,"A",{id:!0,class:!0,href:!0});var Ou=i(io);Ea=r(Ou,"SPAN",{});var Au=i(Ea);b(yn.$$.fragment,Au),Au.forEach(t),Ou.forEach(t),ap=d(ii),za=r(ii,"SPAN",{});var $u=i(za);rp=s($u,"TFOpenAIGPTLMHeadModel"),$u.forEach(t),ii.forEach(t),Ar=d(o),Oe=r(o,"DIV",{class:!0});var nt=i(Oe);b(In.$$.fragment,nt),ip=d(nt),Fa=r(nt,"P",{});var Gu=i(Fa);lp=s(Gu,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Gu.forEach(t),dp=d(nt),On=r(nt,"P",{});var li=i(On);cp=s(li,"This model inherits from "),ms=r(li,"A",{href:!0});var Mu=i(ms);pp=s(Mu,"TFPreTrainedModel"),Mu.forEach(t),hp=s(li,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),li.forEach(t),mp=d(nt),An=r(nt,"P",{});var di=i(An);up=s(di,"This model is also a "),$n=r(di,"A",{href:!0,rel:!0});var Eu=i($n);fp=s(Eu,"tf.keras.Model"),Eu.forEach(t),gp=s(di,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),di.forEach(t),_p=d(nt),b(lo.$$.fragment,nt),Tp=d(nt),Ve=r(nt,"DIV",{class:!0});var vt=i(Ve);b(Gn.$$.fragment,vt),vp=d(vt),Lt=r(vt,"P",{});var $s=i(Lt);kp=s($s,"The "),us=r($s,"A",{href:!0});var zu=i(us);bp=s(zu,"TFOpenAIGPTLMHeadModel"),zu.forEach(t),wp=s($s," forward method, overrides the "),qa=r($s,"CODE",{});var Fu=i(qa);Pp=s(Fu,"__call__"),Fu.forEach(t),yp=s($s," special method."),$s.forEach(t),Ip=d(vt),b(co.$$.fragment,vt),Op=d(vt),Ca=r(vt,"P",{});var qu=i(Ca);Ap=s(qu,"Example:"),qu.forEach(t),$p=d(vt),b(Mn.$$.fragment,vt),vt.forEach(t),nt.forEach(t),$r=d(o),Nt=r(o,"H2",{class:!0});var ci=i(Nt);po=r(ci,"A",{id:!0,class:!0,href:!0});var Cu=i(po);ja=r(Cu,"SPAN",{});var ju=i(ja);b(En.$$.fragment,ju),ju.forEach(t),Cu.forEach(t),Gp=d(ci),Da=r(ci,"SPAN",{});var Du=i(Da);Mp=s(Du,"TFOpenAIGPTDoubleHeadsModel"),Du.forEach(t),ci.forEach(t),Gr=d(o),Ae=r(o,"DIV",{class:!0});var st=i(Ae);b(zn.$$.fragment,st),Ep=d(st),xa=r(st,"P",{});var xu=i(xa);zp=s(xu,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),xu.forEach(t),Fp=d(st),Fn=r(st,"P",{});var pi=i(Fn);qp=s(pi,"This model inherits from "),fs=r(pi,"A",{href:!0});var Hu=i(fs);Cp=s(Hu,"TFPreTrainedModel"),Hu.forEach(t),jp=s(pi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pi.forEach(t),Dp=d(st),qn=r(st,"P",{});var hi=i(qn);xp=s(hi,"This model is also a "),Cn=r(hi,"A",{href:!0,rel:!0});var Su=i(Cn);Hp=s(Su,"tf.keras.Model"),Su.forEach(t),Sp=s(hi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hi.forEach(t),Lp=d(st),b(ho.$$.fragment,st),Np=d(st),Ke=r(st,"DIV",{class:!0});var kt=i(Ke);b(jn.$$.fragment,kt),Wp=d(kt),Wt=r(kt,"P",{});var Gs=i(Wt);Bp=s(Gs,"The "),gs=r(Gs,"A",{href:!0});var Lu=i(gs);Up=s(Lu,"TFOpenAIGPTDoubleHeadsModel"),Lu.forEach(t),Rp=s(Gs," forward method, overrides the "),Ha=r(Gs,"CODE",{});var Nu=i(Ha);Vp=s(Nu,"__call__"),Nu.forEach(t),Kp=s(Gs," special method."),Gs.forEach(t),Jp=d(kt),b(mo.$$.fragment,kt),Xp=d(kt),Sa=r(kt,"P",{});var Wu=i(Sa);Qp=s(Wu,"Examples:"),Wu.forEach(t),Yp=d(kt),b(Dn.$$.fragment,kt),kt.forEach(t),st.forEach(t),Mr=d(o),Bt=r(o,"H2",{class:!0});var mi=i(Bt);uo=r(mi,"A",{id:!0,class:!0,href:!0});var Bu=i(uo);La=r(Bu,"SPAN",{});var Uu=i(La);b(xn.$$.fragment,Uu),Uu.forEach(t),Bu.forEach(t),Zp=d(mi),Na=r(mi,"SPAN",{});var Ru=i(Na);eh=s(Ru,"TFOpenAIGPTForSequenceClassification"),Ru.forEach(t),mi.forEach(t),Er=d(o),de=r(o,"DIV",{class:!0});var Me=i(de);b(Hn.$$.fragment,Me),th=d(Me),Wa=r(Me,"P",{});var Vu=i(Wa);oh=s(Vu,"The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Vu.forEach(t),nh=d(Me),_s=r(Me,"P",{});var Dh=i(_s);Ts=r(Dh,"A",{href:!0});var Ku=i(Ts);sh=s(Ku,"TFOpenAIGPTForSequenceClassification"),Ku.forEach(t),ah=s(Dh,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),Dh.forEach(t),rh=d(Me),Ye=r(Me,"P",{});var bt=i(Ye);ih=s(bt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Ba=r(bt,"CODE",{});var Ju=i(Ba);lh=s(Ju,"pad_token_id"),Ju.forEach(t),dh=s(bt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ua=r(bt,"CODE",{});var Xu=i(Ua);ch=s(Xu,"pad_token_id"),Xu.forEach(t),ph=s(bt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Ra=r(bt,"CODE",{});var Qu=i(Ra);hh=s(Qu,"inputs_embeds"),Qu.forEach(t),mh=s(bt," are passed instead of "),Va=r(bt,"CODE",{});var Yu=i(Va);uh=s(Yu,"input_ids"),Yu.forEach(t),fh=s(bt,`, it does the same (take the last value in
each row of the batch).`),bt.forEach(t),gh=d(Me),Sn=r(Me,"P",{});var ui=i(Sn);_h=s(ui,"This model inherits from "),vs=r(ui,"A",{href:!0});var Zu=i(vs);Th=s(Zu,"TFPreTrainedModel"),Zu.forEach(t),vh=s(ui,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ui.forEach(t),kh=d(Me),Ln=r(Me,"P",{});var fi=i(Ln);bh=s(fi,"This model is also a "),Nn=r(fi,"A",{href:!0,rel:!0});var ef=i(Nn);wh=s(ef,"tf.keras.Model"),ef.forEach(t),Ph=s(fi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fi.forEach(t),yh=d(Me),b(fo.$$.fragment,Me),Ih=d(Me),Je=r(Me,"DIV",{class:!0});var wt=i(Je);b(Wn.$$.fragment,wt),Oh=d(wt),Ut=r(wt,"P",{});var Ms=i(Ut);Ah=s(Ms,"The "),ks=r(Ms,"A",{href:!0});var tf=i(ks);$h=s(tf,"TFOpenAIGPTForSequenceClassification"),tf.forEach(t),Gh=s(Ms," forward method, overrides the "),Ka=r(Ms,"CODE",{});var of=i(Ka);Mh=s(of,"__call__"),of.forEach(t),Eh=s(Ms," special method."),Ms.forEach(t),zh=d(wt),b(go.$$.fragment,wt),Fh=d(wt),Ja=r(wt,"P",{});var nf=i(Ja);qh=s(nf,"Example:"),nf.forEach(t),Ch=d(wt),b(Bn.$$.fragment,wt),wt.forEach(t),Me.forEach(t),this.h()},h(){c(m,"name","hf:doc:metadata"),c(m,"content",JSON.stringify(Pf)),c(g,"id","openai-gpt"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#openai-gpt"),c(f,"class","relative group"),c(X,"id","overview"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#overview"),c($,"class","relative group"),c(Z,"href","https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"),c(Z,"rel","nofollow"),c(U,"href","https://transformer.huggingface.co/doc/gpt"),c(U,"rel","nofollow"),c(ke,"href","https://huggingface.co/thomwolf"),c(ke,"rel","nofollow"),c(be,"href","https://github.com/openai/finetune-transformer-lm"),c(be,"rel","nofollow"),c(Kn,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer"),c(Rt,"id","transformers.OpenAIGPTConfig"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.OpenAIGPTConfig"),c(Pt,"class","relative group"),c(Jn,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),c(Xn,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),c(yo,"href","https://huggingface.co/openai-gpt"),c(yo,"rel","nofollow"),c(Qn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Yn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Ce,"class","docstring"),c(Vt,"id","transformers.OpenAIGPTTokenizer"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.OpenAIGPTTokenizer"),c(It,"class","relative group"),c(Zn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(es,"class","docstring"),c(je,"class","docstring"),c(Kt,"id","transformers.OpenAIGPTTokenizerFast"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.OpenAIGPTTokenizerFast"),c(Ot,"class","relative group"),c(ts,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Qe,"class","docstring"),c(Jt,"id","transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),c(At,"class","relative group"),c($t,"class","docstring"),c(Gt,"class","docstring"),c(Xt,"id","transformers.OpenAIGPTModel"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.OpenAIGPTModel"),c(Mt,"class","relative group"),c(os,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Wo,"rel","nofollow"),c(ns,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),c(We,"class","docstring"),c(De,"class","docstring"),c(Yt,"id","transformers.OpenAIGPTLMHeadModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.OpenAIGPTLMHeadModel"),c(zt,"class","relative group"),c(ss,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xo,"rel","nofollow"),c(as,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTLMHeadModel"),c(Be,"class","docstring"),c(xe,"class","docstring"),c(eo,"id","transformers.OpenAIGPTDoubleHeadsModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.OpenAIGPTDoubleHeadsModel"),c(qt,"class","relative group"),c(rs,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nn,"rel","nofollow"),c(is,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel"),c(Ue,"class","docstring"),c(He,"class","docstring"),c(oo,"id","transformers.OpenAIGPTForSequenceClassification"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.OpenAIGPTForSequenceClassification"),c(jt,"class","relative group"),c(ls,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),c(ds,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(pn,"rel","nofollow"),c(cs,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),c(ae,"class","docstring"),c(Se,"class","docstring"),c(so,"id","transformers.TFOpenAIGPTModel"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.TFOpenAIGPTModel"),c(xt,"class","relative group"),c(ps,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(bn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(bn,"rel","nofollow"),c(hs,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),c(Re,"class","docstring"),c(Ie,"class","docstring"),c(io,"id","transformers.TFOpenAIGPTLMHeadModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFOpenAIGPTLMHeadModel"),c(St,"class","relative group"),c(ms,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c($n,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($n,"rel","nofollow"),c(us,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.TFOpenAIGPTLMHeadModel"),c(Ve,"class","docstring"),c(Oe,"class","docstring"),c(po,"id","transformers.TFOpenAIGPTDoubleHeadsModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.TFOpenAIGPTDoubleHeadsModel"),c(Nt,"class","relative group"),c(fs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Cn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Cn,"rel","nofollow"),c(gs,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.TFOpenAIGPTDoubleHeadsModel"),c(Ke,"class","docstring"),c(Ae,"class","docstring"),c(uo,"id","transformers.TFOpenAIGPTForSequenceClassification"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.TFOpenAIGPTForSequenceClassification"),c(Bt,"class","relative group"),c(Ts,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),c(vs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Nn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Nn,"rel","nofollow"),c(ks,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),c(Je,"class","docstring"),c(de,"class","docstring")},m(o,u){e(document.head,m),h(o,G,u),h(o,f,u),e(f,g),e(g,v),w(T,v,null),e(f,_),e(f,A),e(A,me),h(o,J,u),h(o,$,u),e($,X),e(X,D),w(Y,D,null),e($,ue),e($,x),e(x,fe),h(o,ce,u),h(o,S,u),e(S,q),e(S,Z),e(Z,ee),e(S,M),h(o,z,u),h(o,oe,u),e(oe,N),h(o,pe,u),h(o,ne,u),e(ne,H),e(H,ge),h(o,he,u),h(o,E,u),e(E,_e),h(o,L,u),h(o,Q,u),e(Q,ie),e(ie,W),e(Q,Te),e(Q,te),e(te,C),e(te,le),e(le,B),e(te,ve),h(o,p,u),h(o,O,u),e(O,U),e(U,Ee),e(O,ze),h(o,F,u),h(o,se,u),e(se,Fe),e(se,ke),e(ke,j),e(se,R),e(se,be),e(be,qe),e(se,V),h(o,$e,u),h(o,Pe,u),e(Pe,we),h(o,Ge,u),h(o,et,u),e(et,gi),e(et,Es),e(Es,_i),e(et,Ti),e(et,zs),e(zs,vi),e(et,ki),e(et,Fs),e(Fs,bi),e(et,wi),h(o,ar,u),w(bo,o,u),h(o,rr,u),h(o,Ne,u),e(Ne,Pi),e(Ne,qs),e(qs,yi),e(Ne,Ii),e(Ne,Cs),e(Cs,Oi),e(Ne,Ai),e(Ne,Kn),e(Kn,$i),e(Ne,Gi),e(Ne,js),e(js,Mi),e(Ne,Ei),h(o,ir,u),h(o,Pt,u),e(Pt,Rt),e(Rt,Ds),w(wo,Ds,null),e(Pt,zi),e(Pt,xs),e(xs,Fi),h(o,lr,u),h(o,Ce,u),w(Po,Ce,null),e(Ce,qi),e(Ce,rt),e(rt,Ci),e(rt,Jn),e(Jn,ji),e(rt,Di),e(rt,Xn),e(Xn,xi),e(rt,Hi),e(rt,yo),e(yo,Si),e(rt,Li),e(Ce,Ni),e(Ce,yt),e(yt,Wi),e(yt,Qn),e(Qn,Bi),e(yt,Ui),e(yt,Yn),e(Yn,Ri),e(yt,Vi),e(Ce,Ki),e(Ce,Hs),e(Hs,Ji),e(Ce,Xi),w(Io,Ce,null),h(o,dr,u),h(o,It,u),e(It,Vt),e(Vt,Ss),w(Oo,Ss,null),e(It,Qi),e(It,Ls),e(Ls,Yi),h(o,cr,u),h(o,je,u),w(Ao,je,null),e(je,Zi),e(je,Ns),e(Ns,el),e(je,tl),e(je,$o),e($o,Ws),e(Ws,ol),e($o,nl),e($o,it),e(it,sl),e(it,Bs),e(Bs,al),e(it,rl),e(it,Us),e(Us,il),e(it,ll),e(it,Rs),e(Rs,dl),e(it,cl),e(je,pl),e(je,Go),e(Go,hl),e(Go,Zn),e(Zn,ml),e(Go,ul),e(je,fl),e(je,es),w(Mo,es,null),h(o,pr,u),h(o,Ot,u),e(Ot,Kt),e(Kt,Vs),w(Eo,Vs,null),e(Ot,gl),e(Ot,Ks),e(Ks,_l),h(o,hr,u),h(o,Qe,u),w(zo,Qe,null),e(Qe,Tl),e(Qe,Fo),e(Fo,vl),e(Fo,Js),e(Js,kl),e(Fo,bl),e(Qe,wl),e(Qe,qo),e(qo,Xs),e(Xs,Pl),e(qo,yl),e(qo,Qs),e(Qs,Il),e(Qe,Ol),e(Qe,Co),e(Co,Al),e(Co,ts),e(ts,$l),e(Co,Gl),h(o,mr,u),h(o,At,u),e(At,Jt),e(Jt,Ys),w(jo,Ys,null),e(At,Ml),e(At,Zs),e(Zs,El),h(o,ur,u),h(o,$t,u),w(Do,$t,null),e($t,zl),e($t,ea),e(ea,Fl),h(o,fr,u),h(o,Gt,u),w(xo,Gt,null),e(Gt,ql),e(Gt,ta),e(ta,Cl),h(o,gr,u),h(o,Mt,u),e(Mt,Xt),e(Xt,oa),w(Ho,oa,null),e(Mt,jl),e(Mt,na),e(na,Dl),h(o,_r,u),h(o,De,u),w(So,De,null),e(De,xl),e(De,sa),e(sa,Hl),e(De,Sl),e(De,Lo),e(Lo,Ll),e(Lo,os),e(os,Nl),e(Lo,Wl),e(De,Bl),e(De,No),e(No,Ul),e(No,Wo),e(Wo,Rl),e(No,Vl),e(De,Kl),e(De,We),w(Bo,We,null),e(We,Jl),e(We,Et),e(Et,Xl),e(Et,ns),e(ns,Ql),e(Et,Yl),e(Et,aa),e(aa,Zl),e(Et,ed),e(We,td),w(Qt,We,null),e(We,od),e(We,ra),e(ra,nd),e(We,sd),w(Uo,We,null),h(o,Tr,u),h(o,zt,u),e(zt,Yt),e(Yt,ia),w(Ro,ia,null),e(zt,ad),e(zt,la),e(la,rd),h(o,vr,u),h(o,xe,u),w(Vo,xe,null),e(xe,id),e(xe,da),e(da,ld),e(xe,dd),e(xe,Ko),e(Ko,cd),e(Ko,ss),e(ss,pd),e(Ko,hd),e(xe,md),e(xe,Jo),e(Jo,ud),e(Jo,Xo),e(Xo,fd),e(Jo,gd),e(xe,_d),e(xe,Be),w(Qo,Be,null),e(Be,Td),e(Be,Ft),e(Ft,vd),e(Ft,as),e(as,kd),e(Ft,bd),e(Ft,ca),e(ca,wd),e(Ft,Pd),e(Be,yd),w(Zt,Be,null),e(Be,Id),e(Be,pa),e(pa,Od),e(Be,Ad),w(Yo,Be,null),h(o,kr,u),h(o,qt,u),e(qt,eo),e(eo,ha),w(Zo,ha,null),e(qt,$d),e(qt,ma),e(ma,Gd),h(o,br,u),h(o,He,u),w(en,He,null),e(He,Md),e(He,ua),e(ua,Ed),e(He,zd),e(He,tn),e(tn,Fd),e(tn,rs),e(rs,qd),e(tn,Cd),e(He,jd),e(He,on),e(on,Dd),e(on,nn),e(nn,xd),e(on,Hd),e(He,Sd),e(He,Ue),w(sn,Ue,null),e(Ue,Ld),e(Ue,Ct),e(Ct,Nd),e(Ct,is),e(is,Wd),e(Ct,Bd),e(Ct,fa),e(fa,Ud),e(Ct,Rd),e(Ue,Vd),w(to,Ue,null),e(Ue,Kd),e(Ue,ga),e(ga,Jd),e(Ue,Xd),w(an,Ue,null),h(o,wr,u),h(o,jt,u),e(jt,oo),e(oo,_a),w(rn,_a,null),e(jt,Qd),e(jt,Ta),e(Ta,Yd),h(o,Pr,u),h(o,Se,u),w(ln,Se,null),e(Se,Zd),e(Se,Le),e(Le,ec),e(Le,ls),e(ls,tc),e(Le,oc),e(Le,va),e(va,nc),e(Le,sc),e(Le,ka),e(ka,ac),e(Le,rc),e(Le,ba),e(ba,ic),e(Le,lc),e(Le,wa),e(wa,dc),e(Le,cc),e(Se,pc),e(Se,dn),e(dn,hc),e(dn,ds),e(ds,mc),e(dn,uc),e(Se,fc),e(Se,cn),e(cn,gc),e(cn,pn),e(pn,_c),e(cn,Tc),e(Se,vc),e(Se,ae),w(hn,ae,null),e(ae,kc),e(ae,Dt),e(Dt,bc),e(Dt,cs),e(cs,wc),e(Dt,Pc),e(Dt,Pa),e(Pa,yc),e(Dt,Ic),e(ae,Oc),w(no,ae,null),e(ae,Ac),e(ae,ya),e(ya,$c),e(ae,Gc),w(mn,ae,null),e(ae,Mc),w(un,ae,null),e(ae,Ec),e(ae,Ia),e(Ia,zc),e(ae,Fc),w(fn,ae,null),e(ae,qc),w(gn,ae,null),h(o,yr,u),h(o,xt,u),e(xt,so),e(so,Oa),w(_n,Oa,null),e(xt,Cc),e(xt,Aa),e(Aa,jc),h(o,Ir,u),h(o,Ie,u),w(Tn,Ie,null),e(Ie,Dc),e(Ie,$a),e($a,xc),e(Ie,Hc),e(Ie,vn),e(vn,Sc),e(vn,ps),e(ps,Lc),e(vn,Nc),e(Ie,Wc),e(Ie,kn),e(kn,Bc),e(kn,bn),e(bn,Uc),e(kn,Rc),e(Ie,Vc),w(ao,Ie,null),e(Ie,Kc),e(Ie,Re),w(wn,Re,null),e(Re,Jc),e(Re,Ht),e(Ht,Xc),e(Ht,hs),e(hs,Qc),e(Ht,Yc),e(Ht,Ga),e(Ga,Zc),e(Ht,ep),e(Re,tp),w(ro,Re,null),e(Re,op),e(Re,Ma),e(Ma,np),e(Re,sp),w(Pn,Re,null),h(o,Or,u),h(o,St,u),e(St,io),e(io,Ea),w(yn,Ea,null),e(St,ap),e(St,za),e(za,rp),h(o,Ar,u),h(o,Oe,u),w(In,Oe,null),e(Oe,ip),e(Oe,Fa),e(Fa,lp),e(Oe,dp),e(Oe,On),e(On,cp),e(On,ms),e(ms,pp),e(On,hp),e(Oe,mp),e(Oe,An),e(An,up),e(An,$n),e($n,fp),e(An,gp),e(Oe,_p),w(lo,Oe,null),e(Oe,Tp),e(Oe,Ve),w(Gn,Ve,null),e(Ve,vp),e(Ve,Lt),e(Lt,kp),e(Lt,us),e(us,bp),e(Lt,wp),e(Lt,qa),e(qa,Pp),e(Lt,yp),e(Ve,Ip),w(co,Ve,null),e(Ve,Op),e(Ve,Ca),e(Ca,Ap),e(Ve,$p),w(Mn,Ve,null),h(o,$r,u),h(o,Nt,u),e(Nt,po),e(po,ja),w(En,ja,null),e(Nt,Gp),e(Nt,Da),e(Da,Mp),h(o,Gr,u),h(o,Ae,u),w(zn,Ae,null),e(Ae,Ep),e(Ae,xa),e(xa,zp),e(Ae,Fp),e(Ae,Fn),e(Fn,qp),e(Fn,fs),e(fs,Cp),e(Fn,jp),e(Ae,Dp),e(Ae,qn),e(qn,xp),e(qn,Cn),e(Cn,Hp),e(qn,Sp),e(Ae,Lp),w(ho,Ae,null),e(Ae,Np),e(Ae,Ke),w(jn,Ke,null),e(Ke,Wp),e(Ke,Wt),e(Wt,Bp),e(Wt,gs),e(gs,Up),e(Wt,Rp),e(Wt,Ha),e(Ha,Vp),e(Wt,Kp),e(Ke,Jp),w(mo,Ke,null),e(Ke,Xp),e(Ke,Sa),e(Sa,Qp),e(Ke,Yp),w(Dn,Ke,null),h(o,Mr,u),h(o,Bt,u),e(Bt,uo),e(uo,La),w(xn,La,null),e(Bt,Zp),e(Bt,Na),e(Na,eh),h(o,Er,u),h(o,de,u),w(Hn,de,null),e(de,th),e(de,Wa),e(Wa,oh),e(de,nh),e(de,_s),e(_s,Ts),e(Ts,sh),e(_s,ah),e(de,rh),e(de,Ye),e(Ye,ih),e(Ye,Ba),e(Ba,lh),e(Ye,dh),e(Ye,Ua),e(Ua,ch),e(Ye,ph),e(Ye,Ra),e(Ra,hh),e(Ye,mh),e(Ye,Va),e(Va,uh),e(Ye,fh),e(de,gh),e(de,Sn),e(Sn,_h),e(Sn,vs),e(vs,Th),e(Sn,vh),e(de,kh),e(de,Ln),e(Ln,bh),e(Ln,Nn),e(Nn,wh),e(Ln,Ph),e(de,yh),w(fo,de,null),e(de,Ih),e(de,Je),w(Wn,Je,null),e(Je,Oh),e(Je,Ut),e(Ut,Ah),e(Ut,ks),e(ks,$h),e(Ut,Gh),e(Ut,Ka),e(Ka,Mh),e(Ut,Eh),e(Je,zh),w(go,Je,null),e(Je,Fh),e(Je,Ja),e(Ja,qh),e(Je,Ch),w(Bn,Je,null),zr=!0},p(o,[u]){const Un={};u&2&&(Un.$$scope={dirty:u,ctx:o}),Qt.$set(Un);const Xa={};u&2&&(Xa.$$scope={dirty:u,ctx:o}),Zt.$set(Xa);const Qa={};u&2&&(Qa.$$scope={dirty:u,ctx:o}),to.$set(Qa);const Ya={};u&2&&(Ya.$$scope={dirty:u,ctx:o}),no.$set(Ya);const Rn={};u&2&&(Rn.$$scope={dirty:u,ctx:o}),ao.$set(Rn);const Za={};u&2&&(Za.$$scope={dirty:u,ctx:o}),ro.$set(Za);const er={};u&2&&(er.$$scope={dirty:u,ctx:o}),lo.$set(er);const tr={};u&2&&(tr.$$scope={dirty:u,ctx:o}),co.$set(tr);const Vn={};u&2&&(Vn.$$scope={dirty:u,ctx:o}),ho.$set(Vn);const or={};u&2&&(or.$$scope={dirty:u,ctx:o}),mo.$set(or);const nr={};u&2&&(nr.$$scope={dirty:u,ctx:o}),fo.$set(nr);const sr={};u&2&&(sr.$$scope={dirty:u,ctx:o}),go.$set(sr)},i(o){zr||(P(T.$$.fragment,o),P(Y.$$.fragment,o),P(bo.$$.fragment,o),P(wo.$$.fragment,o),P(Po.$$.fragment,o),P(Io.$$.fragment,o),P(Oo.$$.fragment,o),P(Ao.$$.fragment,o),P(Mo.$$.fragment,o),P(Eo.$$.fragment,o),P(zo.$$.fragment,o),P(jo.$$.fragment,o),P(Do.$$.fragment,o),P(xo.$$.fragment,o),P(Ho.$$.fragment,o),P(So.$$.fragment,o),P(Bo.$$.fragment,o),P(Qt.$$.fragment,o),P(Uo.$$.fragment,o),P(Ro.$$.fragment,o),P(Vo.$$.fragment,o),P(Qo.$$.fragment,o),P(Zt.$$.fragment,o),P(Yo.$$.fragment,o),P(Zo.$$.fragment,o),P(en.$$.fragment,o),P(sn.$$.fragment,o),P(to.$$.fragment,o),P(an.$$.fragment,o),P(rn.$$.fragment,o),P(ln.$$.fragment,o),P(hn.$$.fragment,o),P(no.$$.fragment,o),P(mn.$$.fragment,o),P(un.$$.fragment,o),P(fn.$$.fragment,o),P(gn.$$.fragment,o),P(_n.$$.fragment,o),P(Tn.$$.fragment,o),P(ao.$$.fragment,o),P(wn.$$.fragment,o),P(ro.$$.fragment,o),P(Pn.$$.fragment,o),P(yn.$$.fragment,o),P(In.$$.fragment,o),P(lo.$$.fragment,o),P(Gn.$$.fragment,o),P(co.$$.fragment,o),P(Mn.$$.fragment,o),P(En.$$.fragment,o),P(zn.$$.fragment,o),P(ho.$$.fragment,o),P(jn.$$.fragment,o),P(mo.$$.fragment,o),P(Dn.$$.fragment,o),P(xn.$$.fragment,o),P(Hn.$$.fragment,o),P(fo.$$.fragment,o),P(Wn.$$.fragment,o),P(go.$$.fragment,o),P(Bn.$$.fragment,o),zr=!0)},o(o){y(T.$$.fragment,o),y(Y.$$.fragment,o),y(bo.$$.fragment,o),y(wo.$$.fragment,o),y(Po.$$.fragment,o),y(Io.$$.fragment,o),y(Oo.$$.fragment,o),y(Ao.$$.fragment,o),y(Mo.$$.fragment,o),y(Eo.$$.fragment,o),y(zo.$$.fragment,o),y(jo.$$.fragment,o),y(Do.$$.fragment,o),y(xo.$$.fragment,o),y(Ho.$$.fragment,o),y(So.$$.fragment,o),y(Bo.$$.fragment,o),y(Qt.$$.fragment,o),y(Uo.$$.fragment,o),y(Ro.$$.fragment,o),y(Vo.$$.fragment,o),y(Qo.$$.fragment,o),y(Zt.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(sn.$$.fragment,o),y(to.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(hn.$$.fragment,o),y(no.$$.fragment,o),y(mn.$$.fragment,o),y(un.$$.fragment,o),y(fn.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(Tn.$$.fragment,o),y(ao.$$.fragment,o),y(wn.$$.fragment,o),y(ro.$$.fragment,o),y(Pn.$$.fragment,o),y(yn.$$.fragment,o),y(In.$$.fragment,o),y(lo.$$.fragment,o),y(Gn.$$.fragment,o),y(co.$$.fragment,o),y(Mn.$$.fragment,o),y(En.$$.fragment,o),y(zn.$$.fragment,o),y(ho.$$.fragment,o),y(jn.$$.fragment,o),y(mo.$$.fragment,o),y(Dn.$$.fragment,o),y(xn.$$.fragment,o),y(Hn.$$.fragment,o),y(fo.$$.fragment,o),y(Wn.$$.fragment,o),y(go.$$.fragment,o),y(Bn.$$.fragment,o),zr=!1},d(o){t(m),o&&t(G),o&&t(f),I(T),o&&t(J),o&&t($),I(Y),o&&t(ce),o&&t(S),o&&t(z),o&&t(oe),o&&t(pe),o&&t(ne),o&&t(he),o&&t(E),o&&t(L),o&&t(Q),o&&t(p),o&&t(O),o&&t(F),o&&t(se),o&&t($e),o&&t(Pe),o&&t(Ge),o&&t(et),o&&t(ar),I(bo,o),o&&t(rr),o&&t(Ne),o&&t(ir),o&&t(Pt),I(wo),o&&t(lr),o&&t(Ce),I(Po),I(Io),o&&t(dr),o&&t(It),I(Oo),o&&t(cr),o&&t(je),I(Ao),I(Mo),o&&t(pr),o&&t(Ot),I(Eo),o&&t(hr),o&&t(Qe),I(zo),o&&t(mr),o&&t(At),I(jo),o&&t(ur),o&&t($t),I(Do),o&&t(fr),o&&t(Gt),I(xo),o&&t(gr),o&&t(Mt),I(Ho),o&&t(_r),o&&t(De),I(So),I(Bo),I(Qt),I(Uo),o&&t(Tr),o&&t(zt),I(Ro),o&&t(vr),o&&t(xe),I(Vo),I(Qo),I(Zt),I(Yo),o&&t(kr),o&&t(qt),I(Zo),o&&t(br),o&&t(He),I(en),I(sn),I(to),I(an),o&&t(wr),o&&t(jt),I(rn),o&&t(Pr),o&&t(Se),I(ln),I(hn),I(no),I(mn),I(un),I(fn),I(gn),o&&t(yr),o&&t(xt),I(_n),o&&t(Ir),o&&t(Ie),I(Tn),I(ao),I(wn),I(ro),I(Pn),o&&t(Or),o&&t(St),I(yn),o&&t(Ar),o&&t(Oe),I(In),I(lo),I(Gn),I(co),I(Mn),o&&t($r),o&&t(Nt),I(En),o&&t(Gr),o&&t(Ae),I(zn),I(ho),I(jn),I(mo),I(Dn),o&&t(Mr),o&&t(Bt),I(xn),o&&t(Er),o&&t(de),I(Hn),I(fo),I(Wn),I(go),I(Bn)}}}const Pf={local:"openai-gpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OpenAIGPTConfig",title:"OpenAIGPTConfig"},{local:"transformers.OpenAIGPTTokenizer",title:"OpenAIGPTTokenizer"},{local:"transformers.OpenAIGPTTokenizerFast",title:"OpenAIGPTTokenizerFast"},{local:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",title:"OpenAI specific outputs"},{local:"transformers.OpenAIGPTModel",title:"OpenAIGPTModel"},{local:"transformers.OpenAIGPTLMHeadModel",title:"OpenAIGPTLMHeadModel"},{local:"transformers.OpenAIGPTDoubleHeadsModel",title:"OpenAIGPTDoubleHeadsModel"},{local:"transformers.OpenAIGPTForSequenceClassification",title:"OpenAIGPTForSequenceClassification"},{local:"transformers.TFOpenAIGPTModel",title:"TFOpenAIGPTModel"},{local:"transformers.TFOpenAIGPTLMHeadModel",title:"TFOpenAIGPTLMHeadModel"},{local:"transformers.TFOpenAIGPTDoubleHeadsModel",title:"TFOpenAIGPTDoubleHeadsModel"},{local:"transformers.TFOpenAIGPTForSequenceClassification",title:"TFOpenAIGPTForSequenceClassification"}],title:"OpenAI GPT"};function yf(K){return df(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Mf extends sf{constructor(m){super();af(this,m,yf,wf,rf,{})}}export{Mf as default,Pf as metadata};
