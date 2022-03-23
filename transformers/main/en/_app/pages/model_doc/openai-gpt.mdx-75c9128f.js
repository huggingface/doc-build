import{S as ef,i as tf,s as of,e as a,k as l,w as b,t as n,M as nf,c as r,d as t,m as d,a as i,x as w,h as s,b as c,F as e,g as h,y as P,q as y,o as I,B as O,v as sf}from"../../chunks/vendor-6b77c823.js";import{T as st}from"../../chunks/Tip-39098574.js";import{D as ae}from"../../chunks/Docstring-abef54e3.js";import{C as it}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Xe}from"../../chunks/IconCopyLink-7a11ce68.js";function af(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function rf(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function lf(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function df(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function cf(K){let m,G,f,g,v,T,_,A,he,J,$,X,j,Y,me,x,ue,de,S,q,Z,ee,M,z,oe,N,ce,ne,H,fe,pe,E,ge,L,Q,re,B,_e,te,C,ie,W,Te;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),ue=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),fe=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),B=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){m=r(p,"P",{});var k=i(m);G=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);v=r(U,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(U),A=r(U,"LI",{});var Ee=i(A);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),j=r(F,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var ze=i(x);ue=s(ze,"model(inputs)"),ze.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ve=i(q);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var ke=i(N);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Fe=i(H);fe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),R.forEach(t),pe=d(D),E=r(D,"LI",{});var V=i(E);ge=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),re=s(V," or "),B=r(V,"CODE",{});var we=i(B);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),V.forEach(t),te=d(D),C=r(D,"LI",{});var be=i(C);ie=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(be,"CODE",{});var $e=i(W);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),D.forEach(t)},m(p,k){h(p,m,k),e(m,G),h(p,f,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,A),e(A,he),h(p,J,k),h(p,$,k),e($,X),e($,j),e(j,Y),e($,me),e($,x),e(x,ue),e($,de),h(p,S,k),h(p,q,k),e(q,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,N),e(N,ce),e(z,ne),e(z,H),e(H,fe),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,re),e(E,B),e(B,_e),e(M,te),e(M,C),e(C,ie),e(C,W),e(W,Te)},d(p){p&&t(m),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function pf(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function hf(K){let m,G,f,g,v,T,_,A,he,J,$,X,j,Y,me,x,ue,de,S,q,Z,ee,M,z,oe,N,ce,ne,H,fe,pe,E,ge,L,Q,re,B,_e,te,C,ie,W,Te;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),ue=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),fe=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),B=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){m=r(p,"P",{});var k=i(m);G=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);v=r(U,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(U),A=r(U,"LI",{});var Ee=i(A);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),j=r(F,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var ze=i(x);ue=s(ze,"model(inputs)"),ze.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ve=i(q);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var ke=i(N);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Fe=i(H);fe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),R.forEach(t),pe=d(D),E=r(D,"LI",{});var V=i(E);ge=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),re=s(V," or "),B=r(V,"CODE",{});var we=i(B);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),V.forEach(t),te=d(D),C=r(D,"LI",{});var be=i(C);ie=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(be,"CODE",{});var $e=i(W);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),D.forEach(t)},m(p,k){h(p,m,k),e(m,G),h(p,f,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,A),e(A,he),h(p,J,k),h(p,$,k),e($,X),e($,j),e(j,Y),e($,me),e($,x),e(x,ue),e($,de),h(p,S,k),h(p,q,k),e(q,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,N),e(N,ce),e(z,ne),e(z,H),e(H,fe),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,re),e(E,B),e(B,_e),e(M,te),e(M,C),e(C,ie),e(C,W),e(W,Te)},d(p){p&&t(m),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function mf(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function uf(K){let m,G,f,g,v,T,_,A,he,J,$,X,j,Y,me,x,ue,de,S,q,Z,ee,M,z,oe,N,ce,ne,H,fe,pe,E,ge,L,Q,re,B,_e,te,C,ie,W,Te;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),ue=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),fe=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),B=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){m=r(p,"P",{});var k=i(m);G=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);v=r(U,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(U),A=r(U,"LI",{});var Ee=i(A);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),j=r(F,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var ze=i(x);ue=s(ze,"model(inputs)"),ze.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ve=i(q);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var ke=i(N);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Fe=i(H);fe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),R.forEach(t),pe=d(D),E=r(D,"LI",{});var V=i(E);ge=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),re=s(V," or "),B=r(V,"CODE",{});var we=i(B);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),V.forEach(t),te=d(D),C=r(D,"LI",{});var be=i(C);ie=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(be,"CODE",{});var $e=i(W);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),D.forEach(t)},m(p,k){h(p,m,k),e(m,G),h(p,f,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,A),e(A,he),h(p,J,k),h(p,$,k),e($,X),e($,j),e(j,Y),e($,me),e($,x),e(x,ue),e($,de),h(p,S,k),h(p,q,k),e(q,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,N),e(N,ce),e(z,ne),e(z,H),e(H,fe),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,re),e(E,B),e(B,_e),e(M,te),e(M,C),e(C,ie),e(C,W),e(W,Te)},d(p){p&&t(m),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function ff(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function gf(K){let m,G,f,g,v,T,_,A,he,J,$,X,j,Y,me,x,ue,de,S,q,Z,ee,M,z,oe,N,ce,ne,H,fe,pe,E,ge,L,Q,re,B,_e,te,C,ie,W,Te;return{c(){m=a("p"),G=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=a("ul"),v=a("li"),T=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),$=a("p"),X=n("This second option is useful when using "),j=a("code"),Y=n("tf.keras.Model.fit"),me=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),x=a("code"),ue=n("model(inputs)"),de=n("."),S=l(),q=a("p"),Z=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ee=l(),M=a("ul"),z=a("li"),oe=n("a single Tensor with "),N=a("code"),ce=n("input_ids"),ne=n(" only and nothing else: "),H=a("code"),fe=n("model(inputs_ids)"),pe=l(),E=a("li"),ge=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),Q=n("model([input_ids, attention_mask])"),re=n(" or "),B=a("code"),_e=n("model([input_ids, attention_mask, token_type_ids])"),te=l(),C=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a("code"),Te=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){m=r(p,"P",{});var k=i(m);G=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(p),g=r(p,"UL",{});var U=i(g);v=r(U,"LI",{});var Me=i(v);T=s(Me,"having all inputs as keyword arguments (like PyTorch models), or"),Me.forEach(t),_=d(U),A=r(U,"LI",{});var Ee=i(A);he=s(Ee,"having all inputs as a list, tuple or dict in the first positional arguments."),Ee.forEach(t),U.forEach(t),J=d(p),$=r(p,"P",{});var F=i($);X=s(F,"This second option is useful when using "),j=r(F,"CODE",{});var se=i(j);Y=s(se,"tf.keras.Model.fit"),se.forEach(t),me=s(F,` method which currently requires having all the
tensors in the first argument of the model call function: `),x=r(F,"CODE",{});var ze=i(x);ue=s(ze,"model(inputs)"),ze.forEach(t),de=s(F,"."),F.forEach(t),S=d(p),q=r(p,"P",{});var ve=i(q);Z=s(ve,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ve.forEach(t),ee=d(p),M=r(p,"UL",{});var D=i(M);z=r(D,"LI",{});var R=i(z);oe=s(R,"a single Tensor with "),N=r(R,"CODE",{});var ke=i(N);ce=s(ke,"input_ids"),ke.forEach(t),ne=s(R," only and nothing else: "),H=r(R,"CODE",{});var Fe=i(H);fe=s(Fe,"model(inputs_ids)"),Fe.forEach(t),R.forEach(t),pe=d(D),E=r(D,"LI",{});var V=i(E);ge=s(V,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(V,"CODE",{});var Ae=i(L);Q=s(Ae,"model([input_ids, attention_mask])"),Ae.forEach(t),re=s(V," or "),B=r(V,"CODE",{});var we=i(B);_e=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),V.forEach(t),te=d(D),C=r(D,"LI",{});var be=i(C);ie=s(be,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r(be,"CODE",{});var $e=i(W);Te=s($e,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),$e.forEach(t),be.forEach(t),D.forEach(t)},m(p,k){h(p,m,k),e(m,G),h(p,f,k),h(p,g,k),e(g,v),e(v,T),e(g,_),e(g,A),e(A,he),h(p,J,k),h(p,$,k),e($,X),e($,j),e(j,Y),e($,me),e($,x),e(x,ue),e($,de),h(p,S,k),h(p,q,k),e(q,Z),h(p,ee,k),h(p,M,k),e(M,z),e(z,oe),e(z,N),e(N,ce),e(z,ne),e(z,H),e(H,fe),e(M,pe),e(M,E),e(E,ge),e(E,L),e(L,Q),e(E,re),e(E,B),e(B,_e),e(M,te),e(M,C),e(C,ie),e(C,W),e(W,Te)},d(p){p&&t(m),p&&t(f),p&&t(g),p&&t(J),p&&t($),p&&t(S),p&&t(q),p&&t(ee),p&&t(M)}}}function _f(K){let m,G,f,g,v;return{c(){m=a("p"),G=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=a("code"),g=n("Module"),v=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);G=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=s(A,"Module"),A.forEach(t),v=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(T,_){h(T,m,_),e(m,G),e(m,f),e(f,g),e(m,v)},d(T){T&&t(m)}}}function Tf(K){let m,G,f,g,v,T,_,A,he,J,$,X,j,Y,me,x,ue,de,S,q,Z,ee,M,z,oe,N,ce,ne,H,fe,pe,E,ge,L,Q,re,B,_e,te,C,ie,W,Te,p,k,U,Me,Ee,F,se,ze,ve,D,R,ke,Fe,V,Ae,we,be,$e,Ze,ui,Gs,fi,gi,Ms,_i,Ti,Es,vi,ki,nr,bo,sr,Le,bi,zs,wi,Pi,Fs,yi,Ii,Rn,Oi,Ai,qs,$i,Gi,ar,Pt,Rt,Cs,wo,Mi,Ds,Ei,rr,qe,Po,zi,at,Fi,Vn,qi,Ci,Kn,Di,ji,yo,xi,Hi,Si,yt,Li,Jn,Ni,Bi,Xn,Wi,Ui,Ri,js,Vi,Ki,Io,ir,It,Vt,xs,Oo,Ji,Hs,Xi,lr,Ce,Ao,Qi,Ss,Yi,Zi,$o,Ls,el,tl,rt,ol,Ns,nl,sl,Bs,al,rl,Ws,il,ll,dl,Go,cl,Qn,pl,hl,ml,Yn,Mo,dr,Ot,Kt,Us,Eo,ul,Rs,fl,cr,Qe,zo,gl,Fo,_l,Vs,Tl,vl,kl,qo,Ks,bl,wl,Js,Pl,yl,Co,Il,Zn,Ol,Al,pr,At,Jt,Xs,Do,$l,Qs,Gl,hr,$t,jo,Ml,Ys,El,mr,Gt,xo,zl,Zs,Fl,ur,Mt,Xt,ea,Ho,ql,ta,Cl,fr,De,So,Dl,oa,jl,xl,Lo,Hl,es,Sl,Ll,Nl,No,Bl,Bo,Wl,Ul,Rl,Ne,Wo,Vl,Et,Kl,ts,Jl,Xl,na,Ql,Yl,Zl,Qt,ed,sa,td,od,Uo,gr,zt,Yt,aa,Ro,nd,ra,sd,_r,je,Vo,ad,ia,rd,id,Ko,ld,os,dd,cd,pd,Jo,hd,Xo,md,ud,fd,Be,Qo,gd,Ft,_d,ns,Td,vd,la,kd,bd,wd,Zt,Pd,da,yd,Id,Yo,Tr,qt,eo,ca,Zo,Od,pa,Ad,vr,xe,en,$d,ha,Gd,Md,tn,Ed,ss,zd,Fd,qd,on,Cd,nn,Dd,jd,xd,We,sn,Hd,Ct,Sd,as,Ld,Nd,ma,Bd,Wd,Ud,to,Rd,ua,Vd,Kd,an,kr,Dt,oo,fa,rn,Jd,ga,Xd,br,He,ln,Qd,Se,Yd,rs,Zd,ec,_a,tc,oc,Ta,nc,sc,va,ac,rc,ka,ic,lc,dc,dn,cc,is,pc,hc,mc,cn,uc,pn,fc,gc,_c,Pe,hn,Tc,jt,vc,ls,kc,bc,ba,wc,Pc,yc,no,Ic,wa,Oc,Ac,mn,$c,Pa,Gc,Mc,un,wr,xt,so,ya,fn,Ec,Ia,zc,Pr,ye,gn,Fc,Oa,qc,Cc,_n,Dc,ds,jc,xc,Hc,Tn,Sc,vn,Lc,Nc,Bc,ao,Wc,Ue,kn,Uc,Ht,Rc,cs,Vc,Kc,Aa,Jc,Xc,Qc,ro,Yc,$a,Zc,ep,bn,yr,St,io,Ga,wn,tp,Ma,op,Ir,Ie,Pn,np,Ea,sp,ap,yn,rp,ps,ip,lp,dp,In,cp,On,pp,hp,mp,lo,up,Re,An,fp,Lt,gp,hs,_p,Tp,za,vp,kp,bp,co,wp,Fa,Pp,yp,$n,Or,Nt,po,qa,Gn,Ip,Ca,Op,Ar,Oe,Mn,Ap,Da,$p,Gp,En,Mp,ms,Ep,zp,Fp,zn,qp,Fn,Cp,Dp,jp,ho,xp,Ve,qn,Hp,Bt,Sp,us,Lp,Np,ja,Bp,Wp,Up,mo,Rp,xa,Vp,Kp,Cn,$r,Wt,uo,Ha,Dn,Jp,Sa,Xp,Gr,le,jn,Qp,La,Yp,Zp,fs,gs,eh,th,oh,Ye,nh,Na,sh,ah,Ba,rh,ih,Wa,lh,dh,Ua,ch,ph,hh,xn,mh,_s,uh,fh,gh,Hn,_h,Sn,Th,vh,kh,fo,bh,Ke,Ln,wh,Ut,Ph,Ts,yh,Ih,Ra,Oh,Ah,$h,go,Gh,Va,Mh,Eh,Nn,Mr;return T=new Xe({}),Y=new Xe({}),bo=new it({props:{code:`pip install spacy ftfy==4.4.3
python -m spacy download en`,highlighted:`pip install spacy ftfy==4.4.3
python -m spacy download en`}}),wo=new Xe({}),Po=new ae({props:{name:"class transformers.OpenAIGPTConfig",anchor:"transformers.OpenAIGPTConfig",parameters:[{name:"vocab_size",val:" = 40478"},{name:"n_positions",val:" = 512"},{name:"n_embd",val:" = 768"},{name:"n_layer",val:" = 12"},{name:"n_head",val:" = 12"},{name:"afn",val:" = 'gelu'"},{name:"resid_pdrop",val:" = 0.1"},{name:"embd_pdrop",val:" = 0.1"},{name:"attn_pdrop",val:" = 0.1"},{name:"layer_norm_epsilon",val:" = 1e-05"},{name:"initializer_range",val:" = 0.02"},{name:"predict_special_tokens",val:" = True"},{name:"summary_type",val:" = 'cls_index'"},{name:"summary_use_proj",val:" = True"},{name:"summary_activation",val:" = None"},{name:"summary_proj_to_labels",val:" = True"},{name:"summary_first_dropout",val:" = 0.1"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/configuration_openai.py#L27",parametersDescription:[{anchor:"transformers.OpenAIGPTConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 40478) &#x2014;
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
Whether or not the model should return the last key/values attentions (not used by all models).`,name:"use_cache"}]}}),Io=new it({props:{code:`from transformers import OpenAIGPTConfig, OpenAIGPTModel

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Oo=new Xe({}),Ao=new ae({props:{name:"class transformers.OpenAIGPTTokenizer",anchor:"transformers.OpenAIGPTTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/tokenization_openai.py#L73",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizer.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),Mo=new ae({props:{name:"save_vocabulary",anchor:"transformers.OpenAIGPTTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/tokenization_openai.py#L206"}}),Eo=new Xe({}),zo=new ae({props:{name:"class transformers.OpenAIGPTTokenizerFast",anchor:"transformers.OpenAIGPTTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"unk_token",val:" = '<unk>'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/tokenization_openai_fast.py#L40",parametersDescription:[{anchor:"transformers.OpenAIGPTTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.merges_file",description:`<strong>merges_file</strong> (<code>str</code>) &#x2014;
Path to the merges file.`,name:"merges_file"},{anchor:"transformers.OpenAIGPTTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;unk&gt;&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"}]}}),Do=new Xe({}),jo=new ae({props:{name:"class transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"mc_loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"mc_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L301",parametersDescription:[{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Language modeling loss.`,name:"loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_loss",description:`<strong>mc_loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>mc_labels</code> is provided) &#x2014;
Multiple choice classification loss.`,name:"mc_loss"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),xo=new ae({props:{name:"class transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput",parameters:[{name:"logits",val:": Tensor = None"},{name:"mc_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L373",parametersDescription:[{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.mc_logits",description:`<strong>mc_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
Prediction scores of the multiple choice classification head (scores for each choice before SoftMax).`,name:"mc_logits"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.openai.modeling_tf_openai.TFOpenAIGPTDoubleHeadsModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights after the attention softmax, used to compute the weighted average in the self-attention
heads.`,name:"attentions"}]}}),Ho=new Xe({}),So=new ae({props:{name:"class transformers.OpenAIGPTModel",anchor:"transformers.OpenAIGPTModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L405",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wo=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L431",parametersDescription:[{anchor:"transformers.OpenAIGPTModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Qt=new st({props:{$$slots:{default:[af]},$$scope:{ctx:K}}}),Uo=new it({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Ro=new Xe({}),Vo=new ae({props:{name:"class transformers.OpenAIGPTLMHeadModel",anchor:"transformers.OpenAIGPTLMHeadModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L536",parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qo=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTLMHeadModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L551",parametersDescription:[{anchor:"transformers.OpenAIGPTLMHeadModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),Zt=new st({props:{$$slots:{default:[rf]},$$scope:{ctx:K}}}),Yo=new it({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Zo=new Xe({}),en=new ae({props:{name:"class transformers.OpenAIGPTDoubleHeadsModel",anchor:"transformers.OpenAIGPTDoubleHeadsModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L623",parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sn=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"labels",val:" = None"},{name:"mc_labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L641",parametersDescription:[{anchor:"transformers.OpenAIGPTDoubleHeadsModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),to=new st({props:{$$slots:{default:[lf]},$$scope:{ctx:K}}}),an=new it({props:{code:`from transformers import OpenAIGPTTokenizer, OpenAIGPTDoubleHeadsModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>mc_logits = outputs.mc_logits`}}),rn=new Xe({}),ln=new ae({props:{name:"class transformers.OpenAIGPTForSequenceClassification",anchor:"transformers.OpenAIGPTForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L749",parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new ae({props:{name:"forward",anchor:"transformers.OpenAIGPTForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_openai.py#L759",parametersDescription:[{anchor:"transformers.OpenAIGPTForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),no=new st({props:{$$slots:{default:[df]},$$scope:{ctx:K}}}),mn=new it({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

torch.manual_seed(0)
tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),un=new it({props:{code:`import torch
from transformers import OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

torch.manual_seed(0)
tokenizer = OpenAIGPTTokenizer.from_pretrained("openai-gpt")
model = OpenAIGPTForSequenceClassification.from_pretrained("openai-gpt", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> OpenAIGPTTokenizer, OpenAIGPTForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = OpenAIGPTTokenizer.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = OpenAIGPTForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;openai-gpt&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),fn=new Xe({}),gn=new ae({props:{name:"class transformers.TFOpenAIGPTModel",anchor:"transformers.TFOpenAIGPTModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L498",parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ao=new st({props:{$$slots:{default:[cf]},$$scope:{ctx:K}}}),kn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L503",parametersDescription:[{anchor:"transformers.TFOpenAIGPTModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),ro=new st({props:{$$slots:{default:[pf]},$$scope:{ctx:K}}}),bn=new it({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),wn=new Xe({}),Pn=new ae({props:{name:"class transformers.TFOpenAIGPTLMHeadModel",anchor:"transformers.TFOpenAIGPTLMHeadModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L555",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),lo=new st({props:{$$slots:{default:[hf]},$$scope:{ctx:K}}}),An=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTLMHeadModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L566",parametersDescription:[{anchor:"transformers.TFOpenAIGPTLMHeadModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),co=new st({props:{$$slots:{default:[mf]},$$scope:{ctx:K}}}),$n=new it({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTLMHeadModel
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Gn=new Xe({}),Mn=new ae({props:{name:"class transformers.TFOpenAIGPTDoubleHeadsModel",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L645",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ho=new st({props:{$$slots:{default:[uf]},$$scope:{ctx:K}}}),qn=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"mc_token_ids",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L654",parametersDescription:[{anchor:"transformers.TFOpenAIGPTDoubleHeadsModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),mo=new st({props:{$$slots:{default:[ff]},$$scope:{ctx:K}}}),Cn=new it({props:{code:`import tensorflow as tf
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
<span class="hljs-meta">&gt;&gt;&gt; </span>lm_prediction_scores, mc_prediction_scores = outputs[:<span class="hljs-number">2</span>]`}}),Dn=new Xe({}),jn=new ae({props:{name:"class transformers.TFOpenAIGPTForSequenceClassification",anchor:"transformers.TFOpenAIGPTForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L781",parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTConfig">OpenAIGPTConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fo=new st({props:{$$slots:{default:[gf]},$$scope:{ctx:K}}}),Ln=new ae({props:{name:"call",anchor:"transformers.TFOpenAIGPTForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/openai/modeling_tf_openai.py#L793",parametersDescription:[{anchor:"transformers.TFOpenAIGPTForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
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
`}}),go=new st({props:{$$slots:{default:[_f]},$$scope:{ctx:K}}}),Nn=new it({props:{code:`from transformers import OpenAIGPTTokenizer, TFOpenAIGPTForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){m=a("meta"),G=l(),f=a("h1"),g=a("a"),v=a("span"),b(T.$$.fragment),_=l(),A=a("span"),he=n("OpenAI GPT"),J=l(),$=a("h2"),X=a("a"),j=a("span"),b(Y.$$.fragment),me=l(),x=a("span"),ue=n("Overview"),de=l(),S=a("p"),q=n("OpenAI GPT model was proposed in "),Z=a("a"),ee=n("Improving Language Understanding by Generative Pre-Training"),M=n(`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),z=l(),oe=a("p"),N=n("The abstract from the paper is the following:"),ce=l(),ne=a("p"),H=a("em"),fe=n(`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),pe=l(),E=a("p"),ge=n("Tips:"),L=l(),Q=a("ul"),re=a("li"),B=n(`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),_e=l(),te=a("li"),C=n(`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ie=a("em"),W=n("run_generation.py"),Te=n(" example script."),p=l(),k=a("p"),U=a("a"),Me=n("Write With Transformer"),Ee=n(` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),F=l(),se=a("p"),ze=n("This model was contributed by "),ve=a("a"),D=n("thomwolf"),R=n(". The original code can be found "),ke=a("a"),Fe=n("here"),V=n("."),Ae=l(),we=a("p"),be=n("Note:"),$e=l(),Ze=a("p"),ui=n("If you want to reproduce the original tokenization process of the "),Gs=a("em"),fi=n("OpenAI GPT"),gi=n(" paper, you will need to install "),Ms=a("code"),_i=n("ftfy"),Ti=n(`
and `),Es=a("code"),vi=n("SpaCy"),ki=n(":"),nr=l(),b(bo.$$.fragment),sr=l(),Le=a("p"),bi=n("If you don\u2019t install "),zs=a("code"),wi=n("ftfy"),Pi=n(" and "),Fs=a("code"),yi=n("SpaCy"),Ii=n(", the "),Rn=a("a"),Oi=n("OpenAIGPTTokenizer"),Ai=n(` will default to tokenize
using BERT\u2019s `),qs=a("code"),$i=n("BasicTokenizer"),Gi=n(" followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),ar=l(),Pt=a("h2"),Rt=a("a"),Cs=a("span"),b(wo.$$.fragment),Mi=l(),Ds=a("span"),Ei=n("OpenAIGPTConfig"),rr=l(),qe=a("div"),b(Po.$$.fragment),zi=l(),at=a("p"),Fi=n("This is the configuration class to store the configuration of a "),Vn=a("a"),qi=n("OpenAIGPTModel"),Ci=n(" or a "),Kn=a("a"),Di=n("TFOpenAIGPTModel"),ji=n(`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),yo=a("a"),xi=n("GPT"),Hi=n(" architecture from OpenAI."),Si=l(),yt=a("p"),Li=n("Configuration objects inherit from "),Jn=a("a"),Ni=n("PretrainedConfig"),Bi=n(` and can be used to control the model outputs. Read the
documentation from `),Xn=a("a"),Wi=n("PretrainedConfig"),Ui=n(" for more information."),Ri=l(),js=a("p"),Vi=n("Examples:"),Ki=l(),b(Io.$$.fragment),ir=l(),It=a("h2"),Vt=a("a"),xs=a("span"),b(Oo.$$.fragment),Ji=l(),Hs=a("span"),Xi=n("OpenAIGPTTokenizer"),lr=l(),Ce=a("div"),b(Ao.$$.fragment),Qi=l(),Ss=a("p"),Yi=n("Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),Zi=l(),$o=a("ul"),Ls=a("li"),el=n("lowercases all inputs,"),tl=l(),rt=a("li"),ol=n("uses "),Ns=a("code"),nl=n("SpaCy"),sl=n(" tokenizer and "),Bs=a("code"),al=n("ftfy"),rl=n(` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Ws=a("code"),il=n("BasicTokenizer"),ll=n(" if not."),dl=l(),Go=a("p"),cl=n("This tokenizer inherits from "),Qn=a("a"),pl=n("PreTrainedTokenizer"),hl=n(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),ml=l(),Yn=a("div"),b(Mo.$$.fragment),dr=l(),Ot=a("h2"),Kt=a("a"),Us=a("span"),b(Eo.$$.fragment),ul=l(),Rs=a("span"),fl=n("OpenAIGPTTokenizerFast"),cr=l(),Qe=a("div"),b(zo.$$.fragment),gl=l(),Fo=a("p"),_l=n("Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Vs=a("em"),Tl=n("tokenizers"),vl=n(` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),kl=l(),qo=a("ul"),Ks=a("li"),bl=n("lower case all inputs"),wl=l(),Js=a("li"),Pl=n("uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),yl=l(),Co=a("p"),Il=n("This tokenizer inherits from "),Zn=a("a"),Ol=n("PreTrainedTokenizerFast"),Al=n(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),pr=l(),At=a("h2"),Jt=a("a"),Xs=a("span"),b(Do.$$.fragment),$l=l(),Qs=a("span"),Gl=n("OpenAI specific outputs"),hr=l(),$t=a("div"),b(jo.$$.fragment),Ml=l(),Ys=a("p"),El=n("Base class for outputs of models predicting if two sentences are consecutive or not."),mr=l(),Gt=a("div"),b(xo.$$.fragment),zl=l(),Zs=a("p"),Fl=n("Base class for outputs of models predicting if two sentences are consecutive or not."),ur=l(),Mt=a("h2"),Xt=a("a"),ea=a("span"),b(Ho.$$.fragment),ql=l(),ta=a("span"),Cl=n("OpenAIGPTModel"),fr=l(),De=a("div"),b(So.$$.fragment),Dl=l(),oa=a("p"),jl=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),xl=l(),Lo=a("p"),Hl=n("This model inherits from "),es=a("a"),Sl=n("PreTrainedModel"),Ll=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl=l(),No=a("p"),Bl=n("This model is also a PyTorch "),Bo=a("a"),Wl=n("torch.nn.Module"),Ul=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rl=l(),Ne=a("div"),b(Wo.$$.fragment),Vl=l(),Et=a("p"),Kl=n("The "),ts=a("a"),Jl=n("OpenAIGPTModel"),Xl=n(" forward method, overrides the "),na=a("code"),Ql=n("__call__"),Yl=n(" special method."),Zl=l(),b(Qt.$$.fragment),ed=l(),sa=a("p"),td=n("Example:"),od=l(),b(Uo.$$.fragment),gr=l(),zt=a("h2"),Yt=a("a"),aa=a("span"),b(Ro.$$.fragment),nd=l(),ra=a("span"),sd=n("OpenAIGPTLMHeadModel"),_r=l(),je=a("div"),b(Vo.$$.fragment),ad=l(),ia=a("p"),rd=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),id=l(),Ko=a("p"),ld=n("This model inherits from "),os=a("a"),dd=n("PreTrainedModel"),cd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pd=l(),Jo=a("p"),hd=n("This model is also a PyTorch "),Xo=a("a"),md=n("torch.nn.Module"),ud=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fd=l(),Be=a("div"),b(Qo.$$.fragment),gd=l(),Ft=a("p"),_d=n("The "),ns=a("a"),Td=n("OpenAIGPTLMHeadModel"),vd=n(" forward method, overrides the "),la=a("code"),kd=n("__call__"),bd=n(" special method."),wd=l(),b(Zt.$$.fragment),Pd=l(),da=a("p"),yd=n("Example:"),Id=l(),b(Yo.$$.fragment),Tr=l(),qt=a("h2"),eo=a("a"),ca=a("span"),b(Zo.$$.fragment),Od=l(),pa=a("span"),Ad=n("OpenAIGPTDoubleHeadsModel"),vr=l(),xe=a("div"),b(en.$$.fragment),$d=l(),ha=a("p"),Gd=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Md=l(),tn=a("p"),Ed=n("This model inherits from "),ss=a("a"),zd=n("PreTrainedModel"),Fd=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qd=l(),on=a("p"),Cd=n("This model is also a PyTorch "),nn=a("a"),Dd=n("torch.nn.Module"),jd=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xd=l(),We=a("div"),b(sn.$$.fragment),Hd=l(),Ct=a("p"),Sd=n("The "),as=a("a"),Ld=n("OpenAIGPTDoubleHeadsModel"),Nd=n(" forward method, overrides the "),ma=a("code"),Bd=n("__call__"),Wd=n(" special method."),Ud=l(),b(to.$$.fragment),Rd=l(),ua=a("p"),Vd=n("Examples:"),Kd=l(),b(an.$$.fragment),kr=l(),Dt=a("h2"),oo=a("a"),fa=a("span"),b(rn.$$.fragment),Jd=l(),ga=a("span"),Xd=n("OpenAIGPTForSequenceClassification"),br=l(),He=a("div"),b(ln.$$.fragment),Qd=l(),Se=a("p"),Yd=n(`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),rs=a("a"),Zd=n("OpenAIGPTForSequenceClassification"),ec=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),_a=a("code"),tc=n("pad_token_id"),oc=n(` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),Ta=a("code"),nc=n("pad_token_id"),sc=n(` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),va=a("code"),ac=n("inputs_embeds"),rc=n(" are passed instead of "),ka=a("code"),ic=n("input_ids"),lc=n(`, it does the same (take
the last value in each row of the batch).`),dc=l(),dn=a("p"),cc=n("This model inherits from "),is=a("a"),pc=n("PreTrainedModel"),hc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),mc=l(),cn=a("p"),uc=n("This model is also a PyTorch "),pn=a("a"),fc=n("torch.nn.Module"),gc=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_c=l(),Pe=a("div"),b(hn.$$.fragment),Tc=l(),jt=a("p"),vc=n("The "),ls=a("a"),kc=n("OpenAIGPTForSequenceClassification"),bc=n(" forward method, overrides the "),ba=a("code"),wc=n("__call__"),Pc=n(" special method."),yc=l(),b(no.$$.fragment),Ic=l(),wa=a("p"),Oc=n("Example of single-label classification:"),Ac=l(),b(mn.$$.fragment),$c=l(),Pa=a("p"),Gc=n("Example of multi-label classification:"),Mc=l(),b(un.$$.fragment),wr=l(),xt=a("h2"),so=a("a"),ya=a("span"),b(fn.$$.fragment),Ec=l(),Ia=a("span"),zc=n("TFOpenAIGPTModel"),Pr=l(),ye=a("div"),b(gn.$$.fragment),Fc=l(),Oa=a("p"),qc=n("The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Cc=l(),_n=a("p"),Dc=n("This model inherits from "),ds=a("a"),jc=n("TFPreTrainedModel"),xc=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hc=l(),Tn=a("p"),Sc=n("This model is also a "),vn=a("a"),Lc=n("tf.keras.Model"),Nc=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bc=l(),b(ao.$$.fragment),Wc=l(),Ue=a("div"),b(kn.$$.fragment),Uc=l(),Ht=a("p"),Rc=n("The "),cs=a("a"),Vc=n("TFOpenAIGPTModel"),Kc=n(" forward method, overrides the "),Aa=a("code"),Jc=n("__call__"),Xc=n(" special method."),Qc=l(),b(ro.$$.fragment),Yc=l(),$a=a("p"),Zc=n("Example:"),ep=l(),b(bn.$$.fragment),yr=l(),St=a("h2"),io=a("a"),Ga=a("span"),b(wn.$$.fragment),tp=l(),Ma=a("span"),op=n("TFOpenAIGPTLMHeadModel"),Ir=l(),Ie=a("div"),b(Pn.$$.fragment),np=l(),Ea=a("p"),sp=n(`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),ap=l(),yn=a("p"),rp=n("This model inherits from "),ps=a("a"),ip=n("TFPreTrainedModel"),lp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dp=l(),In=a("p"),cp=n("This model is also a "),On=a("a"),pp=n("tf.keras.Model"),hp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mp=l(),b(lo.$$.fragment),up=l(),Re=a("div"),b(An.$$.fragment),fp=l(),Lt=a("p"),gp=n("The "),hs=a("a"),_p=n("TFOpenAIGPTLMHeadModel"),Tp=n(" forward method, overrides the "),za=a("code"),vp=n("__call__"),kp=n(" special method."),bp=l(),b(co.$$.fragment),wp=l(),Fa=a("p"),Pp=n("Example:"),yp=l(),b($n.$$.fragment),Or=l(),Nt=a("h2"),po=a("a"),qa=a("span"),b(Gn.$$.fragment),Ip=l(),Ca=a("span"),Op=n("TFOpenAIGPTDoubleHeadsModel"),Ar=l(),Oe=a("div"),b(Mn.$$.fragment),Ap=l(),Da=a("p"),$p=n(`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Gp=l(),En=a("p"),Mp=n("This model inherits from "),ms=a("a"),Ep=n("TFPreTrainedModel"),zp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fp=l(),zn=a("p"),qp=n("This model is also a "),Fn=a("a"),Cp=n("tf.keras.Model"),Dp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),jp=l(),b(ho.$$.fragment),xp=l(),Ve=a("div"),b(qn.$$.fragment),Hp=l(),Bt=a("p"),Sp=n("The "),us=a("a"),Lp=n("TFOpenAIGPTDoubleHeadsModel"),Np=n(" forward method, overrides the "),ja=a("code"),Bp=n("__call__"),Wp=n(" special method."),Up=l(),b(mo.$$.fragment),Rp=l(),xa=a("p"),Vp=n("Examples:"),Kp=l(),b(Cn.$$.fragment),$r=l(),Wt=a("h2"),uo=a("a"),Ha=a("span"),b(Dn.$$.fragment),Jp=l(),Sa=a("span"),Xp=n("TFOpenAIGPTForSequenceClassification"),Gr=l(),le=a("div"),b(jn.$$.fragment),Qp=l(),La=a("p"),Yp=n("The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Zp=l(),fs=a("p"),gs=a("a"),eh=n("TFOpenAIGPTForSequenceClassification"),th=n(` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),oh=l(),Ye=a("p"),nh=n(`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Na=a("code"),sh=n("pad_token_id"),ah=n(` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ba=a("code"),rh=n("pad_token_id"),ih=n(` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Wa=a("code"),lh=n("inputs_embeds"),dh=n(" are passed instead of "),Ua=a("code"),ch=n("input_ids"),ph=n(`, it does the same (take the last value in
each row of the batch).`),hh=l(),xn=a("p"),mh=n("This model inherits from "),_s=a("a"),uh=n("TFPreTrainedModel"),fh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gh=l(),Hn=a("p"),_h=n("This model is also a "),Sn=a("a"),Th=n("tf.keras.Model"),vh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kh=l(),b(fo.$$.fragment),bh=l(),Ke=a("div"),b(Ln.$$.fragment),wh=l(),Ut=a("p"),Ph=n("The "),Ts=a("a"),yh=n("TFOpenAIGPTForSequenceClassification"),Ih=n(" forward method, overrides the "),Ra=a("code"),Oh=n("__call__"),Ah=n(" special method."),$h=l(),b(go.$$.fragment),Gh=l(),Va=a("p"),Mh=n("Example:"),Eh=l(),b(Nn.$$.fragment),this.h()},l(o){const u=nf('[data-svelte="svelte-1phssyn"]',document.head);m=r(u,"META",{name:!0,content:!0}),u.forEach(t),G=d(o),f=r(o,"H1",{class:!0});var Bn=i(f);g=r(Bn,"A",{id:!0,class:!0,href:!0});var Ka=i(g);v=r(Ka,"SPAN",{});var Ja=i(v);w(T.$$.fragment,Ja),Ja.forEach(t),Ka.forEach(t),_=d(Bn),A=r(Bn,"SPAN",{});var Xa=i(A);he=s(Xa,"OpenAI GPT"),Xa.forEach(t),Bn.forEach(t),J=d(o),$=r(o,"H2",{class:!0});var Wn=i($);X=r(Wn,"A",{id:!0,class:!0,href:!0});var Qa=i(X);j=r(Qa,"SPAN",{});var Ya=i(j);w(Y.$$.fragment,Ya),Ya.forEach(t),Qa.forEach(t),me=d(Wn),x=r(Wn,"SPAN",{});var Za=i(x);ue=s(Za,"Overview"),Za.forEach(t),Wn.forEach(t),de=d(o),S=r(o,"P",{});var Un=i(S);q=s(Un,"OpenAI GPT model was proposed in "),Z=r(Un,"A",{href:!0,rel:!0});var er=i(Z);ee=s(er,"Improving Language Understanding by Generative Pre-Training"),er.forEach(t),M=s(Un,`
by Alec Radford, Karthik Narasimhan, Tim Salimans and Ilya Sutskever. It\u2019s a causal (unidirectional) transformer
pre-trained using language modeling on a large corpus will long range dependencies, the Toronto Book Corpus.`),Un.forEach(t),z=d(o),oe=r(o,"P",{});var tr=i(oe);N=s(tr,"The abstract from the paper is the following:"),tr.forEach(t),ce=d(o),ne=r(o,"P",{});var or=i(ne);H=r(or,"EM",{});var qh=i(H);fe=s(qh,`Natural language understanding comprises a wide range of diverse tasks such as textual entailment, question answering,
semantic similarity assessment, and document classification. Although large unlabeled text corpora are abundant,
labeled data for learning these specific tasks is scarce, making it challenging for discriminatively trained models to
perform adequately. We demonstrate that large gains on these tasks can be realized by generative pretraining of a
language model on a diverse corpus of unlabeled text, followed by discriminative fine-tuning on each specific task. In
contrast to previous approaches, we make use of task-aware input transformations during fine-tuning to achieve
effective transfer while requiring minimal changes to the model architecture. We demonstrate the effectiveness of our
approach on a wide range of benchmarks for natural language understanding. Our general task-agnostic model outperforms
discriminatively trained models that use architectures specifically crafted for each task, significantly improving upon
the state of the art in 9 out of the 12 tasks studied.`),qh.forEach(t),or.forEach(t),pe=d(o),E=r(o,"P",{});var Ch=i(E);ge=s(Ch,"Tips:"),Ch.forEach(t),L=d(o),Q=r(o,"UL",{});var Er=i(Q);re=r(Er,"LI",{});var Dh=i(re);B=s(Dh,`GPT is a model with absolute position embeddings so it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Dh.forEach(t),_e=d(Er),te=r(Er,"LI",{});var zr=i(te);C=s(zr,`GPT was trained with a causal language modeling (CLM) objective and is therefore powerful at predicting the next
token in a sequence. Leveraging this feature allows GPT-2 to generate syntactically coherent text as it can be
observed in the `),ie=r(zr,"EM",{});var jh=i(ie);W=s(jh,"run_generation.py"),jh.forEach(t),Te=s(zr," example script."),zr.forEach(t),Er.forEach(t),p=d(o),k=r(o,"P",{});var zh=i(k);U=r(zh,"A",{href:!0,rel:!0});var xh=i(U);Me=s(xh,"Write With Transformer"),xh.forEach(t),Ee=s(zh,` is a webapp created and hosted by Hugging Face
showcasing the generative capabilities of several models. GPT is one of them.`),zh.forEach(t),F=d(o),se=r(o,"P",{});var vs=i(se);ze=s(vs,"This model was contributed by "),ve=r(vs,"A",{href:!0,rel:!0});var Hh=i(ve);D=s(Hh,"thomwolf"),Hh.forEach(t),R=s(vs,". The original code can be found "),ke=r(vs,"A",{href:!0,rel:!0});var Sh=i(ke);Fe=s(Sh,"here"),Sh.forEach(t),V=s(vs,"."),vs.forEach(t),Ae=d(o),we=r(o,"P",{});var Lh=i(we);be=s(Lh,"Note:"),Lh.forEach(t),$e=d(o),Ze=r(o,"P",{});var _o=i(Ze);ui=s(_o,"If you want to reproduce the original tokenization process of the "),Gs=r(_o,"EM",{});var Nh=i(Gs);fi=s(Nh,"OpenAI GPT"),Nh.forEach(t),gi=s(_o," paper, you will need to install "),Ms=r(_o,"CODE",{});var Bh=i(Ms);_i=s(Bh,"ftfy"),Bh.forEach(t),Ti=s(_o,`
and `),Es=r(_o,"CODE",{});var Wh=i(Es);vi=s(Wh,"SpaCy"),Wh.forEach(t),ki=s(_o,":"),_o.forEach(t),nr=d(o),w(bo.$$.fragment,o),sr=d(o),Le=r(o,"P",{});var lt=i(Le);bi=s(lt,"If you don\u2019t install "),zs=r(lt,"CODE",{});var Uh=i(zs);wi=s(Uh,"ftfy"),Uh.forEach(t),Pi=s(lt," and "),Fs=r(lt,"CODE",{});var Rh=i(Fs);yi=s(Rh,"SpaCy"),Rh.forEach(t),Ii=s(lt,", the "),Rn=r(lt,"A",{href:!0});var Vh=i(Rn);Oi=s(Vh,"OpenAIGPTTokenizer"),Vh.forEach(t),Ai=s(lt,` will default to tokenize
using BERT\u2019s `),qs=r(lt,"CODE",{});var Kh=i(qs);$i=s(Kh,"BasicTokenizer"),Kh.forEach(t),Gi=s(lt," followed by Byte-Pair Encoding (which should be fine for most usage, don\u2019t worry)."),lt.forEach(t),ar=d(o),Pt=r(o,"H2",{class:!0});var Fr=i(Pt);Rt=r(Fr,"A",{id:!0,class:!0,href:!0});var Jh=i(Rt);Cs=r(Jh,"SPAN",{});var Xh=i(Cs);w(wo.$$.fragment,Xh),Xh.forEach(t),Jh.forEach(t),Mi=d(Fr),Ds=r(Fr,"SPAN",{});var Qh=i(Ds);Ei=s(Qh,"OpenAIGPTConfig"),Qh.forEach(t),Fr.forEach(t),rr=d(o),qe=r(o,"DIV",{class:!0});var dt=i(qe);w(Po.$$.fragment,dt),zi=d(dt),at=r(dt,"P",{});var To=i(at);Fi=s(To,"This is the configuration class to store the configuration of a "),Vn=r(To,"A",{href:!0});var Yh=i(Vn);qi=s(Yh,"OpenAIGPTModel"),Yh.forEach(t),Ci=s(To," or a "),Kn=r(To,"A",{href:!0});var Zh=i(Kn);Di=s(Zh,"TFOpenAIGPTModel"),Zh.forEach(t),ji=s(To,`. It is
used to instantiate a GPT model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the
`),yo=r(To,"A",{href:!0,rel:!0});var em=i(yo);xi=s(em,"GPT"),em.forEach(t),Hi=s(To," architecture from OpenAI."),To.forEach(t),Si=d(dt),yt=r(dt,"P",{});var ks=i(yt);Li=s(ks,"Configuration objects inherit from "),Jn=r(ks,"A",{href:!0});var tm=i(Jn);Ni=s(tm,"PretrainedConfig"),tm.forEach(t),Bi=s(ks,` and can be used to control the model outputs. Read the
documentation from `),Xn=r(ks,"A",{href:!0});var om=i(Xn);Wi=s(om,"PretrainedConfig"),om.forEach(t),Ui=s(ks," for more information."),ks.forEach(t),Ri=d(dt),js=r(dt,"P",{});var nm=i(js);Vi=s(nm,"Examples:"),nm.forEach(t),Ki=d(dt),w(Io.$$.fragment,dt),dt.forEach(t),ir=d(o),It=r(o,"H2",{class:!0});var qr=i(It);Vt=r(qr,"A",{id:!0,class:!0,href:!0});var sm=i(Vt);xs=r(sm,"SPAN",{});var am=i(xs);w(Oo.$$.fragment,am),am.forEach(t),sm.forEach(t),Ji=d(qr),Hs=r(qr,"SPAN",{});var rm=i(Hs);Xi=s(rm,"OpenAIGPTTokenizer"),rm.forEach(t),qr.forEach(t),lr=d(o),Ce=r(o,"DIV",{class:!0});var ct=i(Ce);w(Ao.$$.fragment,ct),Qi=d(ct),Ss=r(ct,"P",{});var im=i(Ss);Yi=s(im,"Construct a GPT Tokenizer. Based on Byte-Pair-Encoding with the following peculiarities:"),im.forEach(t),Zi=d(ct),$o=r(ct,"UL",{});var Cr=i($o);Ls=r(Cr,"LI",{});var lm=i(Ls);el=s(lm,"lowercases all inputs,"),lm.forEach(t),tl=d(Cr),rt=r(Cr,"LI",{});var vo=i(rt);ol=s(vo,"uses "),Ns=r(vo,"CODE",{});var dm=i(Ns);nl=s(dm,"SpaCy"),dm.forEach(t),sl=s(vo," tokenizer and "),Bs=r(vo,"CODE",{});var cm=i(Bs);al=s(cm,"ftfy"),cm.forEach(t),rl=s(vo,` for pre-BPE tokenization if they are installed, fallback to BERT\u2019s
`),Ws=r(vo,"CODE",{});var pm=i(Ws);il=s(pm,"BasicTokenizer"),pm.forEach(t),ll=s(vo," if not."),vo.forEach(t),Cr.forEach(t),dl=d(ct),Go=r(ct,"P",{});var Dr=i(Go);cl=s(Dr,"This tokenizer inherits from "),Qn=r(Dr,"A",{href:!0});var hm=i(Qn);pl=s(hm,"PreTrainedTokenizer"),hm.forEach(t),hl=s(Dr,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods.`),Dr.forEach(t),ml=d(ct),Yn=r(ct,"DIV",{class:!0});var mm=i(Yn);w(Mo.$$.fragment,mm),mm.forEach(t),ct.forEach(t),dr=d(o),Ot=r(o,"H2",{class:!0});var jr=i(Ot);Kt=r(jr,"A",{id:!0,class:!0,href:!0});var um=i(Kt);Us=r(um,"SPAN",{});var fm=i(Us);w(Eo.$$.fragment,fm),fm.forEach(t),um.forEach(t),ul=d(jr),Rs=r(jr,"SPAN",{});var gm=i(Rs);fl=s(gm,"OpenAIGPTTokenizerFast"),gm.forEach(t),jr.forEach(t),cr=d(o),Qe=r(o,"DIV",{class:!0});var ko=i(Qe);w(zo.$$.fragment,ko),gl=d(ko),Fo=r(ko,"P",{});var xr=i(Fo);_l=s(xr,"Construct a \u201Cfast\u201D GPT Tokenizer (backed by HuggingFace\u2019s "),Vs=r(xr,"EM",{});var _m=i(Vs);Tl=s(_m,"tokenizers"),_m.forEach(t),vl=s(xr,` library). Based on Byte-Pair-Encoding with
the following peculiarities:`),xr.forEach(t),kl=d(ko),qo=r(ko,"UL",{});var Hr=i(qo);Ks=r(Hr,"LI",{});var Tm=i(Ks);bl=s(Tm,"lower case all inputs"),Tm.forEach(t),wl=d(Hr),Js=r(Hr,"LI",{});var vm=i(Js);Pl=s(vm,"uses BERT\u2019s BasicTokenizer for pre-BPE tokenization"),vm.forEach(t),Hr.forEach(t),yl=d(ko),Co=r(ko,"P",{});var Sr=i(Co);Il=s(Sr,"This tokenizer inherits from "),Zn=r(Sr,"A",{href:!0});var km=i(Zn);Ol=s(km,"PreTrainedTokenizerFast"),km.forEach(t),Al=s(Sr,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Sr.forEach(t),ko.forEach(t),pr=d(o),At=r(o,"H2",{class:!0});var Lr=i(At);Jt=r(Lr,"A",{id:!0,class:!0,href:!0});var bm=i(Jt);Xs=r(bm,"SPAN",{});var wm=i(Xs);w(Do.$$.fragment,wm),wm.forEach(t),bm.forEach(t),$l=d(Lr),Qs=r(Lr,"SPAN",{});var Pm=i(Qs);Gl=s(Pm,"OpenAI specific outputs"),Pm.forEach(t),Lr.forEach(t),hr=d(o),$t=r(o,"DIV",{class:!0});var Nr=i($t);w(jo.$$.fragment,Nr),Ml=d(Nr),Ys=r(Nr,"P",{});var ym=i(Ys);El=s(ym,"Base class for outputs of models predicting if two sentences are consecutive or not."),ym.forEach(t),Nr.forEach(t),mr=d(o),Gt=r(o,"DIV",{class:!0});var Br=i(Gt);w(xo.$$.fragment,Br),zl=d(Br),Zs=r(Br,"P",{});var Im=i(Zs);Fl=s(Im,"Base class for outputs of models predicting if two sentences are consecutive or not."),Im.forEach(t),Br.forEach(t),ur=d(o),Mt=r(o,"H2",{class:!0});var Wr=i(Mt);Xt=r(Wr,"A",{id:!0,class:!0,href:!0});var Om=i(Xt);ea=r(Om,"SPAN",{});var Am=i(ea);w(Ho.$$.fragment,Am),Am.forEach(t),Om.forEach(t),ql=d(Wr),ta=r(Wr,"SPAN",{});var $m=i(ta);Cl=s($m,"OpenAIGPTModel"),$m.forEach(t),Wr.forEach(t),fr=d(o),De=r(o,"DIV",{class:!0});var pt=i(De);w(So.$$.fragment,pt),Dl=d(pt),oa=r(pt,"P",{});var Gm=i(oa);jl=s(Gm,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),Gm.forEach(t),xl=d(pt),Lo=r(pt,"P",{});var Ur=i(Lo);Hl=s(Ur,"This model inherits from "),es=r(Ur,"A",{href:!0});var Mm=i(es);Sl=s(Mm,"PreTrainedModel"),Mm.forEach(t),Ll=s(Ur,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ur.forEach(t),Nl=d(pt),No=r(pt,"P",{});var Rr=i(No);Bl=s(Rr,"This model is also a PyTorch "),Bo=r(Rr,"A",{href:!0,rel:!0});var Em=i(Bo);Wl=s(Em,"torch.nn.Module"),Em.forEach(t),Ul=s(Rr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rr.forEach(t),Rl=d(pt),Ne=r(pt,"DIV",{class:!0});var ht=i(Ne);w(Wo.$$.fragment,ht),Vl=d(ht),Et=r(ht,"P",{});var bs=i(Et);Kl=s(bs,"The "),ts=r(bs,"A",{href:!0});var zm=i(ts);Jl=s(zm,"OpenAIGPTModel"),zm.forEach(t),Xl=s(bs," forward method, overrides the "),na=r(bs,"CODE",{});var Fm=i(na);Ql=s(Fm,"__call__"),Fm.forEach(t),Yl=s(bs," special method."),bs.forEach(t),Zl=d(ht),w(Qt.$$.fragment,ht),ed=d(ht),sa=r(ht,"P",{});var qm=i(sa);td=s(qm,"Example:"),qm.forEach(t),od=d(ht),w(Uo.$$.fragment,ht),ht.forEach(t),pt.forEach(t),gr=d(o),zt=r(o,"H2",{class:!0});var Vr=i(zt);Yt=r(Vr,"A",{id:!0,class:!0,href:!0});var Cm=i(Yt);aa=r(Cm,"SPAN",{});var Dm=i(aa);w(Ro.$$.fragment,Dm),Dm.forEach(t),Cm.forEach(t),nd=d(Vr),ra=r(Vr,"SPAN",{});var jm=i(ra);sd=s(jm,"OpenAIGPTLMHeadModel"),jm.forEach(t),Vr.forEach(t),_r=d(o),je=r(o,"DIV",{class:!0});var mt=i(je);w(Vo.$$.fragment,mt),ad=d(mt),ia=r(mt,"P",{});var xm=i(ia);rd=s(xm,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),xm.forEach(t),id=d(mt),Ko=r(mt,"P",{});var Kr=i(Ko);ld=s(Kr,"This model inherits from "),os=r(Kr,"A",{href:!0});var Hm=i(os);dd=s(Hm,"PreTrainedModel"),Hm.forEach(t),cd=s(Kr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kr.forEach(t),pd=d(mt),Jo=r(mt,"P",{});var Jr=i(Jo);hd=s(Jr,"This model is also a PyTorch "),Xo=r(Jr,"A",{href:!0,rel:!0});var Sm=i(Xo);md=s(Sm,"torch.nn.Module"),Sm.forEach(t),ud=s(Jr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jr.forEach(t),fd=d(mt),Be=r(mt,"DIV",{class:!0});var ut=i(Be);w(Qo.$$.fragment,ut),gd=d(ut),Ft=r(ut,"P",{});var ws=i(Ft);_d=s(ws,"The "),ns=r(ws,"A",{href:!0});var Lm=i(ns);Td=s(Lm,"OpenAIGPTLMHeadModel"),Lm.forEach(t),vd=s(ws," forward method, overrides the "),la=r(ws,"CODE",{});var Nm=i(la);kd=s(Nm,"__call__"),Nm.forEach(t),bd=s(ws," special method."),ws.forEach(t),wd=d(ut),w(Zt.$$.fragment,ut),Pd=d(ut),da=r(ut,"P",{});var Bm=i(da);yd=s(Bm,"Example:"),Bm.forEach(t),Id=d(ut),w(Yo.$$.fragment,ut),ut.forEach(t),mt.forEach(t),Tr=d(o),qt=r(o,"H2",{class:!0});var Xr=i(qt);eo=r(Xr,"A",{id:!0,class:!0,href:!0});var Wm=i(eo);ca=r(Wm,"SPAN",{});var Um=i(ca);w(Zo.$$.fragment,Um),Um.forEach(t),Wm.forEach(t),Od=d(Xr),pa=r(Xr,"SPAN",{});var Rm=i(pa);Ad=s(Rm,"OpenAIGPTDoubleHeadsModel"),Rm.forEach(t),Xr.forEach(t),vr=d(o),xe=r(o,"DIV",{class:!0});var ft=i(xe);w(en.$$.fragment,ft),$d=d(ft),ha=r(ft,"P",{});var Vm=i(ha);Gd=s(Vm,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),Vm.forEach(t),Md=d(ft),tn=r(ft,"P",{});var Qr=i(tn);Ed=s(Qr,"This model inherits from "),ss=r(Qr,"A",{href:!0});var Km=i(ss);zd=s(Km,"PreTrainedModel"),Km.forEach(t),Fd=s(Qr,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qr.forEach(t),qd=d(ft),on=r(ft,"P",{});var Yr=i(on);Cd=s(Yr,"This model is also a PyTorch "),nn=r(Yr,"A",{href:!0,rel:!0});var Jm=i(nn);Dd=s(Jm,"torch.nn.Module"),Jm.forEach(t),jd=s(Yr,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Yr.forEach(t),xd=d(ft),We=r(ft,"DIV",{class:!0});var gt=i(We);w(sn.$$.fragment,gt),Hd=d(gt),Ct=r(gt,"P",{});var Ps=i(Ct);Sd=s(Ps,"The "),as=r(Ps,"A",{href:!0});var Xm=i(as);Ld=s(Xm,"OpenAIGPTDoubleHeadsModel"),Xm.forEach(t),Nd=s(Ps," forward method, overrides the "),ma=r(Ps,"CODE",{});var Qm=i(ma);Bd=s(Qm,"__call__"),Qm.forEach(t),Wd=s(Ps," special method."),Ps.forEach(t),Ud=d(gt),w(to.$$.fragment,gt),Rd=d(gt),ua=r(gt,"P",{});var Ym=i(ua);Vd=s(Ym,"Examples:"),Ym.forEach(t),Kd=d(gt),w(an.$$.fragment,gt),gt.forEach(t),ft.forEach(t),kr=d(o),Dt=r(o,"H2",{class:!0});var Zr=i(Dt);oo=r(Zr,"A",{id:!0,class:!0,href:!0});var Zm=i(oo);fa=r(Zm,"SPAN",{});var eu=i(fa);w(rn.$$.fragment,eu),eu.forEach(t),Zm.forEach(t),Jd=d(Zr),ga=r(Zr,"SPAN",{});var tu=i(ga);Xd=s(tu,"OpenAIGPTForSequenceClassification"),tu.forEach(t),Zr.forEach(t),br=d(o),He=r(o,"DIV",{class:!0});var _t=i(He);w(ln.$$.fragment,_t),Qd=d(_t),Se=r(_t,"P",{});var et=i(Se);Yd=s(et,`The Original OpenAI GPT Model transformer with a sequence classification head on top (linear layer).
`),rs=r(et,"A",{href:!0});var ou=i(rs);Zd=s(ou,"OpenAIGPTForSequenceClassification"),ou.forEach(t),ec=s(et,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do. Since it does classification on the last token, it requires to know the position of the
last token. If a `),_a=r(et,"CODE",{});var nu=i(_a);tc=s(nu,"pad_token_id"),nu.forEach(t),oc=s(et,` is defined in the configuration, it finds the last token that is not a padding
token in each row. If no `),Ta=r(et,"CODE",{});var su=i(Ta);nc=s(su,"pad_token_id"),su.forEach(t),sc=s(et,` is defined, it simply takes the last value in each row of the batch. Since
it cannot guess the padding tokens when `),va=r(et,"CODE",{});var au=i(va);ac=s(au,"inputs_embeds"),au.forEach(t),rc=s(et," are passed instead of "),ka=r(et,"CODE",{});var ru=i(ka);ic=s(ru,"input_ids"),ru.forEach(t),lc=s(et,`, it does the same (take
the last value in each row of the batch).`),et.forEach(t),dc=d(_t),dn=r(_t,"P",{});var ei=i(dn);cc=s(ei,"This model inherits from "),is=r(ei,"A",{href:!0});var iu=i(is);pc=s(iu,"PreTrainedModel"),iu.forEach(t),hc=s(ei,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ei.forEach(t),mc=d(_t),cn=r(_t,"P",{});var ti=i(cn);uc=s(ti,"This model is also a PyTorch "),pn=r(ti,"A",{href:!0,rel:!0});var lu=i(pn);fc=s(lu,"torch.nn.Module"),lu.forEach(t),gc=s(ti,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ti.forEach(t),_c=d(_t),Pe=r(_t,"DIV",{class:!0});var Je=i(Pe);w(hn.$$.fragment,Je),Tc=d(Je),jt=r(Je,"P",{});var ys=i(jt);vc=s(ys,"The "),ls=r(ys,"A",{href:!0});var du=i(ls);kc=s(du,"OpenAIGPTForSequenceClassification"),du.forEach(t),bc=s(ys," forward method, overrides the "),ba=r(ys,"CODE",{});var cu=i(ba);wc=s(cu,"__call__"),cu.forEach(t),Pc=s(ys," special method."),ys.forEach(t),yc=d(Je),w(no.$$.fragment,Je),Ic=d(Je),wa=r(Je,"P",{});var pu=i(wa);Oc=s(pu,"Example of single-label classification:"),pu.forEach(t),Ac=d(Je),w(mn.$$.fragment,Je),$c=d(Je),Pa=r(Je,"P",{});var hu=i(Pa);Gc=s(hu,"Example of multi-label classification:"),hu.forEach(t),Mc=d(Je),w(un.$$.fragment,Je),Je.forEach(t),_t.forEach(t),wr=d(o),xt=r(o,"H2",{class:!0});var oi=i(xt);so=r(oi,"A",{id:!0,class:!0,href:!0});var mu=i(so);ya=r(mu,"SPAN",{});var uu=i(ya);w(fn.$$.fragment,uu),uu.forEach(t),mu.forEach(t),Ec=d(oi),Ia=r(oi,"SPAN",{});var fu=i(Ia);zc=s(fu,"TFOpenAIGPTModel"),fu.forEach(t),oi.forEach(t),Pr=d(o),ye=r(o,"DIV",{class:!0});var tt=i(ye);w(gn.$$.fragment,tt),Fc=d(tt),Oa=r(tt,"P",{});var gu=i(Oa);qc=s(gu,"The bare OpenAI GPT transformer model outputting raw hidden-states without any specific head on top."),gu.forEach(t),Cc=d(tt),_n=r(tt,"P",{});var ni=i(_n);Dc=s(ni,"This model inherits from "),ds=r(ni,"A",{href:!0});var _u=i(ds);jc=s(_u,"TFPreTrainedModel"),_u.forEach(t),xc=s(ni,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ni.forEach(t),Hc=d(tt),Tn=r(tt,"P",{});var si=i(Tn);Sc=s(si,"This model is also a "),vn=r(si,"A",{href:!0,rel:!0});var Tu=i(vn);Lc=s(Tu,"tf.keras.Model"),Tu.forEach(t),Nc=s(si,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),si.forEach(t),Bc=d(tt),w(ao.$$.fragment,tt),Wc=d(tt),Ue=r(tt,"DIV",{class:!0});var Tt=i(Ue);w(kn.$$.fragment,Tt),Uc=d(Tt),Ht=r(Tt,"P",{});var Is=i(Ht);Rc=s(Is,"The "),cs=r(Is,"A",{href:!0});var vu=i(cs);Vc=s(vu,"TFOpenAIGPTModel"),vu.forEach(t),Kc=s(Is," forward method, overrides the "),Aa=r(Is,"CODE",{});var ku=i(Aa);Jc=s(ku,"__call__"),ku.forEach(t),Xc=s(Is," special method."),Is.forEach(t),Qc=d(Tt),w(ro.$$.fragment,Tt),Yc=d(Tt),$a=r(Tt,"P",{});var bu=i($a);Zc=s(bu,"Example:"),bu.forEach(t),ep=d(Tt),w(bn.$$.fragment,Tt),Tt.forEach(t),tt.forEach(t),yr=d(o),St=r(o,"H2",{class:!0});var ai=i(St);io=r(ai,"A",{id:!0,class:!0,href:!0});var wu=i(io);Ga=r(wu,"SPAN",{});var Pu=i(Ga);w(wn.$$.fragment,Pu),Pu.forEach(t),wu.forEach(t),tp=d(ai),Ma=r(ai,"SPAN",{});var yu=i(Ma);op=s(yu,"TFOpenAIGPTLMHeadModel"),yu.forEach(t),ai.forEach(t),Ir=d(o),Ie=r(o,"DIV",{class:!0});var ot=i(Ie);w(Pn.$$.fragment,ot),np=d(ot),Ea=r(ot,"P",{});var Iu=i(Ea);sp=s(Iu,`OpenAI GPT Model transformer with a language modeling head on top (linear layer with weights tied to the input
embeddings).`),Iu.forEach(t),ap=d(ot),yn=r(ot,"P",{});var ri=i(yn);rp=s(ri,"This model inherits from "),ps=r(ri,"A",{href:!0});var Ou=i(ps);ip=s(Ou,"TFPreTrainedModel"),Ou.forEach(t),lp=s(ri,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ri.forEach(t),dp=d(ot),In=r(ot,"P",{});var ii=i(In);cp=s(ii,"This model is also a "),On=r(ii,"A",{href:!0,rel:!0});var Au=i(On);pp=s(Au,"tf.keras.Model"),Au.forEach(t),hp=s(ii,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ii.forEach(t),mp=d(ot),w(lo.$$.fragment,ot),up=d(ot),Re=r(ot,"DIV",{class:!0});var vt=i(Re);w(An.$$.fragment,vt),fp=d(vt),Lt=r(vt,"P",{});var Os=i(Lt);gp=s(Os,"The "),hs=r(Os,"A",{href:!0});var $u=i(hs);_p=s($u,"TFOpenAIGPTLMHeadModel"),$u.forEach(t),Tp=s(Os," forward method, overrides the "),za=r(Os,"CODE",{});var Gu=i(za);vp=s(Gu,"__call__"),Gu.forEach(t),kp=s(Os," special method."),Os.forEach(t),bp=d(vt),w(co.$$.fragment,vt),wp=d(vt),Fa=r(vt,"P",{});var Mu=i(Fa);Pp=s(Mu,"Example:"),Mu.forEach(t),yp=d(vt),w($n.$$.fragment,vt),vt.forEach(t),ot.forEach(t),Or=d(o),Nt=r(o,"H2",{class:!0});var li=i(Nt);po=r(li,"A",{id:!0,class:!0,href:!0});var Eu=i(po);qa=r(Eu,"SPAN",{});var zu=i(qa);w(Gn.$$.fragment,zu),zu.forEach(t),Eu.forEach(t),Ip=d(li),Ca=r(li,"SPAN",{});var Fu=i(Ca);Op=s(Fu,"TFOpenAIGPTDoubleHeadsModel"),Fu.forEach(t),li.forEach(t),Ar=d(o),Oe=r(o,"DIV",{class:!0});var nt=i(Oe);w(Mn.$$.fragment,nt),Ap=d(nt),Da=r(nt,"P",{});var qu=i(Da);$p=s(qu,`OpenAI GPT Model transformer with a language modeling and a multiple-choice classification head on top e.g. for
RocStories/SWAG tasks. The two heads are two linear layers. The language modeling head has its weights tied to the
input embeddings, the classification head takes as input the input of a specified classification token index in the
input sequence).`),qu.forEach(t),Gp=d(nt),En=r(nt,"P",{});var di=i(En);Mp=s(di,"This model inherits from "),ms=r(di,"A",{href:!0});var Cu=i(ms);Ep=s(Cu,"TFPreTrainedModel"),Cu.forEach(t),zp=s(di,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),di.forEach(t),Fp=d(nt),zn=r(nt,"P",{});var ci=i(zn);qp=s(ci,"This model is also a "),Fn=r(ci,"A",{href:!0,rel:!0});var Du=i(Fn);Cp=s(Du,"tf.keras.Model"),Du.forEach(t),Dp=s(ci,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ci.forEach(t),jp=d(nt),w(ho.$$.fragment,nt),xp=d(nt),Ve=r(nt,"DIV",{class:!0});var kt=i(Ve);w(qn.$$.fragment,kt),Hp=d(kt),Bt=r(kt,"P",{});var As=i(Bt);Sp=s(As,"The "),us=r(As,"A",{href:!0});var ju=i(us);Lp=s(ju,"TFOpenAIGPTDoubleHeadsModel"),ju.forEach(t),Np=s(As," forward method, overrides the "),ja=r(As,"CODE",{});var xu=i(ja);Bp=s(xu,"__call__"),xu.forEach(t),Wp=s(As," special method."),As.forEach(t),Up=d(kt),w(mo.$$.fragment,kt),Rp=d(kt),xa=r(kt,"P",{});var Hu=i(xa);Vp=s(Hu,"Examples:"),Hu.forEach(t),Kp=d(kt),w(Cn.$$.fragment,kt),kt.forEach(t),nt.forEach(t),$r=d(o),Wt=r(o,"H2",{class:!0});var pi=i(Wt);uo=r(pi,"A",{id:!0,class:!0,href:!0});var Su=i(uo);Ha=r(Su,"SPAN",{});var Lu=i(Ha);w(Dn.$$.fragment,Lu),Lu.forEach(t),Su.forEach(t),Jp=d(pi),Sa=r(pi,"SPAN",{});var Nu=i(Sa);Xp=s(Nu,"TFOpenAIGPTForSequenceClassification"),Nu.forEach(t),pi.forEach(t),Gr=d(o),le=r(o,"DIV",{class:!0});var Ge=i(le);w(jn.$$.fragment,Ge),Qp=d(Ge),La=r(Ge,"P",{});var Bu=i(La);Yp=s(Bu,"The OpenAI GPT Model transformer with a sequence classification head on top (linear layer)."),Bu.forEach(t),Zp=d(Ge),fs=r(Ge,"P",{});var Fh=i(fs);gs=r(Fh,"A",{href:!0});var Wu=i(gs);eh=s(Wu,"TFOpenAIGPTForSequenceClassification"),Wu.forEach(t),th=s(Fh,` uses the last token in order to do the classification, as other causal
models (e.g. GPT-2) do.`),Fh.forEach(t),oh=d(Ge),Ye=r(Ge,"P",{});var bt=i(Ye);nh=s(bt,`Since it does classification on the last token, it requires to know the position of the last token. If a
`),Na=r(bt,"CODE",{});var Uu=i(Na);sh=s(Uu,"pad_token_id"),Uu.forEach(t),ah=s(bt,` is defined in the configuration, it finds the last token that is not a padding token in each row. If
no `),Ba=r(bt,"CODE",{});var Ru=i(Ba);rh=s(Ru,"pad_token_id"),Ru.forEach(t),ih=s(bt,` is defined, it simply takes the last value in each row of the batch. Since it cannot guess the
padding tokens when `),Wa=r(bt,"CODE",{});var Vu=i(Wa);lh=s(Vu,"inputs_embeds"),Vu.forEach(t),dh=s(bt," are passed instead of "),Ua=r(bt,"CODE",{});var Ku=i(Ua);ch=s(Ku,"input_ids"),Ku.forEach(t),ph=s(bt,`, it does the same (take the last value in
each row of the batch).`),bt.forEach(t),hh=d(Ge),xn=r(Ge,"P",{});var hi=i(xn);mh=s(hi,"This model inherits from "),_s=r(hi,"A",{href:!0});var Ju=i(_s);uh=s(Ju,"TFPreTrainedModel"),Ju.forEach(t),fh=s(hi,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hi.forEach(t),gh=d(Ge),Hn=r(Ge,"P",{});var mi=i(Hn);_h=s(mi,"This model is also a "),Sn=r(mi,"A",{href:!0,rel:!0});var Xu=i(Sn);Th=s(Xu,"tf.keras.Model"),Xu.forEach(t),vh=s(mi,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),mi.forEach(t),kh=d(Ge),w(fo.$$.fragment,Ge),bh=d(Ge),Ke=r(Ge,"DIV",{class:!0});var wt=i(Ke);w(Ln.$$.fragment,wt),wh=d(wt),Ut=r(wt,"P",{});var $s=i(Ut);Ph=s($s,"The "),Ts=r($s,"A",{href:!0});var Qu=i(Ts);yh=s(Qu,"TFOpenAIGPTForSequenceClassification"),Qu.forEach(t),Ih=s($s," forward method, overrides the "),Ra=r($s,"CODE",{});var Yu=i(Ra);Oh=s(Yu,"__call__"),Yu.forEach(t),Ah=s($s," special method."),$s.forEach(t),$h=d(wt),w(go.$$.fragment,wt),Gh=d(wt),Va=r(wt,"P",{});var Zu=i(Va);Mh=s(Zu,"Example:"),Zu.forEach(t),Eh=d(wt),w(Nn.$$.fragment,wt),wt.forEach(t),Ge.forEach(t),this.h()},h(){c(m,"name","hf:doc:metadata"),c(m,"content",JSON.stringify(vf)),c(g,"id","openai-gpt"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#openai-gpt"),c(f,"class","relative group"),c(X,"id","overview"),c(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(X,"href","#overview"),c($,"class","relative group"),c(Z,"href","https://s3-us-west-2.amazonaws.com/openai-assets/research-covers/language-unsupervised/language_understanding_paper.pdf"),c(Z,"rel","nofollow"),c(U,"href","https://transformer.huggingface.co/doc/gpt"),c(U,"rel","nofollow"),c(ve,"href","https://huggingface.co/thomwolf"),c(ve,"rel","nofollow"),c(ke,"href","https://github.com/openai/finetune-transformer-lm"),c(ke,"rel","nofollow"),c(Rn,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTTokenizer"),c(Rt,"id","transformers.OpenAIGPTConfig"),c(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Rt,"href","#transformers.OpenAIGPTConfig"),c(Pt,"class","relative group"),c(Vn,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),c(Kn,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),c(yo,"href","https://huggingface.co/openai-gpt"),c(yo,"rel","nofollow"),c(Jn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(Xn,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),c(qe,"class","docstring"),c(Vt,"id","transformers.OpenAIGPTTokenizer"),c(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vt,"href","#transformers.OpenAIGPTTokenizer"),c(It,"class","relative group"),c(Qn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),c(Yn,"class","docstring"),c(Ce,"class","docstring"),c(Kt,"id","transformers.OpenAIGPTTokenizerFast"),c(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Kt,"href","#transformers.OpenAIGPTTokenizerFast"),c(Ot,"class","relative group"),c(Zn,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),c(Qe,"class","docstring"),c(Jt,"id","transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),c(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Jt,"href","#transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput"),c(At,"class","relative group"),c($t,"class","docstring"),c(Gt,"class","docstring"),c(Xt,"id","transformers.OpenAIGPTModel"),c(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xt,"href","#transformers.OpenAIGPTModel"),c(Mt,"class","relative group"),c(es,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Bo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Bo,"rel","nofollow"),c(ts,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTModel"),c(Ne,"class","docstring"),c(De,"class","docstring"),c(Yt,"id","transformers.OpenAIGPTLMHeadModel"),c(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Yt,"href","#transformers.OpenAIGPTLMHeadModel"),c(zt,"class","relative group"),c(os,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(Xo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Xo,"rel","nofollow"),c(ns,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTLMHeadModel"),c(Be,"class","docstring"),c(je,"class","docstring"),c(eo,"id","transformers.OpenAIGPTDoubleHeadsModel"),c(eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(eo,"href","#transformers.OpenAIGPTDoubleHeadsModel"),c(qt,"class","relative group"),c(ss,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(nn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(nn,"rel","nofollow"),c(as,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTDoubleHeadsModel"),c(We,"class","docstring"),c(xe,"class","docstring"),c(oo,"id","transformers.OpenAIGPTForSequenceClassification"),c(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(oo,"href","#transformers.OpenAIGPTForSequenceClassification"),c(Dt,"class","relative group"),c(rs,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),c(is,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),c(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(pn,"rel","nofollow"),c(ls,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.OpenAIGPTForSequenceClassification"),c(Pe,"class","docstring"),c(He,"class","docstring"),c(so,"id","transformers.TFOpenAIGPTModel"),c(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(so,"href","#transformers.TFOpenAIGPTModel"),c(xt,"class","relative group"),c(ds,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(vn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(vn,"rel","nofollow"),c(cs,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.TFOpenAIGPTModel"),c(Ue,"class","docstring"),c(ye,"class","docstring"),c(io,"id","transformers.TFOpenAIGPTLMHeadModel"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.TFOpenAIGPTLMHeadModel"),c(St,"class","relative group"),c(ps,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(On,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(On,"rel","nofollow"),c(hs,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.TFOpenAIGPTLMHeadModel"),c(Re,"class","docstring"),c(Ie,"class","docstring"),c(po,"id","transformers.TFOpenAIGPTDoubleHeadsModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.TFOpenAIGPTDoubleHeadsModel"),c(Nt,"class","relative group"),c(ms,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Fn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Fn,"rel","nofollow"),c(us,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.TFOpenAIGPTDoubleHeadsModel"),c(Ve,"class","docstring"),c(Oe,"class","docstring"),c(uo,"id","transformers.TFOpenAIGPTForSequenceClassification"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.TFOpenAIGPTForSequenceClassification"),c(Wt,"class","relative group"),c(gs,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),c(_s,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),c(Sn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Sn,"rel","nofollow"),c(Ts,"href","/docs/transformers/main/en/model_doc/openai-gpt#transformers.TFOpenAIGPTForSequenceClassification"),c(Ke,"class","docstring"),c(le,"class","docstring")},m(o,u){e(document.head,m),h(o,G,u),h(o,f,u),e(f,g),e(g,v),P(T,v,null),e(f,_),e(f,A),e(A,he),h(o,J,u),h(o,$,u),e($,X),e(X,j),P(Y,j,null),e($,me),e($,x),e(x,ue),h(o,de,u),h(o,S,u),e(S,q),e(S,Z),e(Z,ee),e(S,M),h(o,z,u),h(o,oe,u),e(oe,N),h(o,ce,u),h(o,ne,u),e(ne,H),e(H,fe),h(o,pe,u),h(o,E,u),e(E,ge),h(o,L,u),h(o,Q,u),e(Q,re),e(re,B),e(Q,_e),e(Q,te),e(te,C),e(te,ie),e(ie,W),e(te,Te),h(o,p,u),h(o,k,u),e(k,U),e(U,Me),e(k,Ee),h(o,F,u),h(o,se,u),e(se,ze),e(se,ve),e(ve,D),e(se,R),e(se,ke),e(ke,Fe),e(se,V),h(o,Ae,u),h(o,we,u),e(we,be),h(o,$e,u),h(o,Ze,u),e(Ze,ui),e(Ze,Gs),e(Gs,fi),e(Ze,gi),e(Ze,Ms),e(Ms,_i),e(Ze,Ti),e(Ze,Es),e(Es,vi),e(Ze,ki),h(o,nr,u),P(bo,o,u),h(o,sr,u),h(o,Le,u),e(Le,bi),e(Le,zs),e(zs,wi),e(Le,Pi),e(Le,Fs),e(Fs,yi),e(Le,Ii),e(Le,Rn),e(Rn,Oi),e(Le,Ai),e(Le,qs),e(qs,$i),e(Le,Gi),h(o,ar,u),h(o,Pt,u),e(Pt,Rt),e(Rt,Cs),P(wo,Cs,null),e(Pt,Mi),e(Pt,Ds),e(Ds,Ei),h(o,rr,u),h(o,qe,u),P(Po,qe,null),e(qe,zi),e(qe,at),e(at,Fi),e(at,Vn),e(Vn,qi),e(at,Ci),e(at,Kn),e(Kn,Di),e(at,ji),e(at,yo),e(yo,xi),e(at,Hi),e(qe,Si),e(qe,yt),e(yt,Li),e(yt,Jn),e(Jn,Ni),e(yt,Bi),e(yt,Xn),e(Xn,Wi),e(yt,Ui),e(qe,Ri),e(qe,js),e(js,Vi),e(qe,Ki),P(Io,qe,null),h(o,ir,u),h(o,It,u),e(It,Vt),e(Vt,xs),P(Oo,xs,null),e(It,Ji),e(It,Hs),e(Hs,Xi),h(o,lr,u),h(o,Ce,u),P(Ao,Ce,null),e(Ce,Qi),e(Ce,Ss),e(Ss,Yi),e(Ce,Zi),e(Ce,$o),e($o,Ls),e(Ls,el),e($o,tl),e($o,rt),e(rt,ol),e(rt,Ns),e(Ns,nl),e(rt,sl),e(rt,Bs),e(Bs,al),e(rt,rl),e(rt,Ws),e(Ws,il),e(rt,ll),e(Ce,dl),e(Ce,Go),e(Go,cl),e(Go,Qn),e(Qn,pl),e(Go,hl),e(Ce,ml),e(Ce,Yn),P(Mo,Yn,null),h(o,dr,u),h(o,Ot,u),e(Ot,Kt),e(Kt,Us),P(Eo,Us,null),e(Ot,ul),e(Ot,Rs),e(Rs,fl),h(o,cr,u),h(o,Qe,u),P(zo,Qe,null),e(Qe,gl),e(Qe,Fo),e(Fo,_l),e(Fo,Vs),e(Vs,Tl),e(Fo,vl),e(Qe,kl),e(Qe,qo),e(qo,Ks),e(Ks,bl),e(qo,wl),e(qo,Js),e(Js,Pl),e(Qe,yl),e(Qe,Co),e(Co,Il),e(Co,Zn),e(Zn,Ol),e(Co,Al),h(o,pr,u),h(o,At,u),e(At,Jt),e(Jt,Xs),P(Do,Xs,null),e(At,$l),e(At,Qs),e(Qs,Gl),h(o,hr,u),h(o,$t,u),P(jo,$t,null),e($t,Ml),e($t,Ys),e(Ys,El),h(o,mr,u),h(o,Gt,u),P(xo,Gt,null),e(Gt,zl),e(Gt,Zs),e(Zs,Fl),h(o,ur,u),h(o,Mt,u),e(Mt,Xt),e(Xt,ea),P(Ho,ea,null),e(Mt,ql),e(Mt,ta),e(ta,Cl),h(o,fr,u),h(o,De,u),P(So,De,null),e(De,Dl),e(De,oa),e(oa,jl),e(De,xl),e(De,Lo),e(Lo,Hl),e(Lo,es),e(es,Sl),e(Lo,Ll),e(De,Nl),e(De,No),e(No,Bl),e(No,Bo),e(Bo,Wl),e(No,Ul),e(De,Rl),e(De,Ne),P(Wo,Ne,null),e(Ne,Vl),e(Ne,Et),e(Et,Kl),e(Et,ts),e(ts,Jl),e(Et,Xl),e(Et,na),e(na,Ql),e(Et,Yl),e(Ne,Zl),P(Qt,Ne,null),e(Ne,ed),e(Ne,sa),e(sa,td),e(Ne,od),P(Uo,Ne,null),h(o,gr,u),h(o,zt,u),e(zt,Yt),e(Yt,aa),P(Ro,aa,null),e(zt,nd),e(zt,ra),e(ra,sd),h(o,_r,u),h(o,je,u),P(Vo,je,null),e(je,ad),e(je,ia),e(ia,rd),e(je,id),e(je,Ko),e(Ko,ld),e(Ko,os),e(os,dd),e(Ko,cd),e(je,pd),e(je,Jo),e(Jo,hd),e(Jo,Xo),e(Xo,md),e(Jo,ud),e(je,fd),e(je,Be),P(Qo,Be,null),e(Be,gd),e(Be,Ft),e(Ft,_d),e(Ft,ns),e(ns,Td),e(Ft,vd),e(Ft,la),e(la,kd),e(Ft,bd),e(Be,wd),P(Zt,Be,null),e(Be,Pd),e(Be,da),e(da,yd),e(Be,Id),P(Yo,Be,null),h(o,Tr,u),h(o,qt,u),e(qt,eo),e(eo,ca),P(Zo,ca,null),e(qt,Od),e(qt,pa),e(pa,Ad),h(o,vr,u),h(o,xe,u),P(en,xe,null),e(xe,$d),e(xe,ha),e(ha,Gd),e(xe,Md),e(xe,tn),e(tn,Ed),e(tn,ss),e(ss,zd),e(tn,Fd),e(xe,qd),e(xe,on),e(on,Cd),e(on,nn),e(nn,Dd),e(on,jd),e(xe,xd),e(xe,We),P(sn,We,null),e(We,Hd),e(We,Ct),e(Ct,Sd),e(Ct,as),e(as,Ld),e(Ct,Nd),e(Ct,ma),e(ma,Bd),e(Ct,Wd),e(We,Ud),P(to,We,null),e(We,Rd),e(We,ua),e(ua,Vd),e(We,Kd),P(an,We,null),h(o,kr,u),h(o,Dt,u),e(Dt,oo),e(oo,fa),P(rn,fa,null),e(Dt,Jd),e(Dt,ga),e(ga,Xd),h(o,br,u),h(o,He,u),P(ln,He,null),e(He,Qd),e(He,Se),e(Se,Yd),e(Se,rs),e(rs,Zd),e(Se,ec),e(Se,_a),e(_a,tc),e(Se,oc),e(Se,Ta),e(Ta,nc),e(Se,sc),e(Se,va),e(va,ac),e(Se,rc),e(Se,ka),e(ka,ic),e(Se,lc),e(He,dc),e(He,dn),e(dn,cc),e(dn,is),e(is,pc),e(dn,hc),e(He,mc),e(He,cn),e(cn,uc),e(cn,pn),e(pn,fc),e(cn,gc),e(He,_c),e(He,Pe),P(hn,Pe,null),e(Pe,Tc),e(Pe,jt),e(jt,vc),e(jt,ls),e(ls,kc),e(jt,bc),e(jt,ba),e(ba,wc),e(jt,Pc),e(Pe,yc),P(no,Pe,null),e(Pe,Ic),e(Pe,wa),e(wa,Oc),e(Pe,Ac),P(mn,Pe,null),e(Pe,$c),e(Pe,Pa),e(Pa,Gc),e(Pe,Mc),P(un,Pe,null),h(o,wr,u),h(o,xt,u),e(xt,so),e(so,ya),P(fn,ya,null),e(xt,Ec),e(xt,Ia),e(Ia,zc),h(o,Pr,u),h(o,ye,u),P(gn,ye,null),e(ye,Fc),e(ye,Oa),e(Oa,qc),e(ye,Cc),e(ye,_n),e(_n,Dc),e(_n,ds),e(ds,jc),e(_n,xc),e(ye,Hc),e(ye,Tn),e(Tn,Sc),e(Tn,vn),e(vn,Lc),e(Tn,Nc),e(ye,Bc),P(ao,ye,null),e(ye,Wc),e(ye,Ue),P(kn,Ue,null),e(Ue,Uc),e(Ue,Ht),e(Ht,Rc),e(Ht,cs),e(cs,Vc),e(Ht,Kc),e(Ht,Aa),e(Aa,Jc),e(Ht,Xc),e(Ue,Qc),P(ro,Ue,null),e(Ue,Yc),e(Ue,$a),e($a,Zc),e(Ue,ep),P(bn,Ue,null),h(o,yr,u),h(o,St,u),e(St,io),e(io,Ga),P(wn,Ga,null),e(St,tp),e(St,Ma),e(Ma,op),h(o,Ir,u),h(o,Ie,u),P(Pn,Ie,null),e(Ie,np),e(Ie,Ea),e(Ea,sp),e(Ie,ap),e(Ie,yn),e(yn,rp),e(yn,ps),e(ps,ip),e(yn,lp),e(Ie,dp),e(Ie,In),e(In,cp),e(In,On),e(On,pp),e(In,hp),e(Ie,mp),P(lo,Ie,null),e(Ie,up),e(Ie,Re),P(An,Re,null),e(Re,fp),e(Re,Lt),e(Lt,gp),e(Lt,hs),e(hs,_p),e(Lt,Tp),e(Lt,za),e(za,vp),e(Lt,kp),e(Re,bp),P(co,Re,null),e(Re,wp),e(Re,Fa),e(Fa,Pp),e(Re,yp),P($n,Re,null),h(o,Or,u),h(o,Nt,u),e(Nt,po),e(po,qa),P(Gn,qa,null),e(Nt,Ip),e(Nt,Ca),e(Ca,Op),h(o,Ar,u),h(o,Oe,u),P(Mn,Oe,null),e(Oe,Ap),e(Oe,Da),e(Da,$p),e(Oe,Gp),e(Oe,En),e(En,Mp),e(En,ms),e(ms,Ep),e(En,zp),e(Oe,Fp),e(Oe,zn),e(zn,qp),e(zn,Fn),e(Fn,Cp),e(zn,Dp),e(Oe,jp),P(ho,Oe,null),e(Oe,xp),e(Oe,Ve),P(qn,Ve,null),e(Ve,Hp),e(Ve,Bt),e(Bt,Sp),e(Bt,us),e(us,Lp),e(Bt,Np),e(Bt,ja),e(ja,Bp),e(Bt,Wp),e(Ve,Up),P(mo,Ve,null),e(Ve,Rp),e(Ve,xa),e(xa,Vp),e(Ve,Kp),P(Cn,Ve,null),h(o,$r,u),h(o,Wt,u),e(Wt,uo),e(uo,Ha),P(Dn,Ha,null),e(Wt,Jp),e(Wt,Sa),e(Sa,Xp),h(o,Gr,u),h(o,le,u),P(jn,le,null),e(le,Qp),e(le,La),e(La,Yp),e(le,Zp),e(le,fs),e(fs,gs),e(gs,eh),e(fs,th),e(le,oh),e(le,Ye),e(Ye,nh),e(Ye,Na),e(Na,sh),e(Ye,ah),e(Ye,Ba),e(Ba,rh),e(Ye,ih),e(Ye,Wa),e(Wa,lh),e(Ye,dh),e(Ye,Ua),e(Ua,ch),e(Ye,ph),e(le,hh),e(le,xn),e(xn,mh),e(xn,_s),e(_s,uh),e(xn,fh),e(le,gh),e(le,Hn),e(Hn,_h),e(Hn,Sn),e(Sn,Th),e(Hn,vh),e(le,kh),P(fo,le,null),e(le,bh),e(le,Ke),P(Ln,Ke,null),e(Ke,wh),e(Ke,Ut),e(Ut,Ph),e(Ut,Ts),e(Ts,yh),e(Ut,Ih),e(Ut,Ra),e(Ra,Oh),e(Ut,Ah),e(Ke,$h),P(go,Ke,null),e(Ke,Gh),e(Ke,Va),e(Va,Mh),e(Ke,Eh),P(Nn,Ke,null),Mr=!0},p(o,[u]){const Bn={};u&2&&(Bn.$$scope={dirty:u,ctx:o}),Qt.$set(Bn);const Ka={};u&2&&(Ka.$$scope={dirty:u,ctx:o}),Zt.$set(Ka);const Ja={};u&2&&(Ja.$$scope={dirty:u,ctx:o}),to.$set(Ja);const Xa={};u&2&&(Xa.$$scope={dirty:u,ctx:o}),no.$set(Xa);const Wn={};u&2&&(Wn.$$scope={dirty:u,ctx:o}),ao.$set(Wn);const Qa={};u&2&&(Qa.$$scope={dirty:u,ctx:o}),ro.$set(Qa);const Ya={};u&2&&(Ya.$$scope={dirty:u,ctx:o}),lo.$set(Ya);const Za={};u&2&&(Za.$$scope={dirty:u,ctx:o}),co.$set(Za);const Un={};u&2&&(Un.$$scope={dirty:u,ctx:o}),ho.$set(Un);const er={};u&2&&(er.$$scope={dirty:u,ctx:o}),mo.$set(er);const tr={};u&2&&(tr.$$scope={dirty:u,ctx:o}),fo.$set(tr);const or={};u&2&&(or.$$scope={dirty:u,ctx:o}),go.$set(or)},i(o){Mr||(y(T.$$.fragment,o),y(Y.$$.fragment,o),y(bo.$$.fragment,o),y(wo.$$.fragment,o),y(Po.$$.fragment,o),y(Io.$$.fragment,o),y(Oo.$$.fragment,o),y(Ao.$$.fragment,o),y(Mo.$$.fragment,o),y(Eo.$$.fragment,o),y(zo.$$.fragment,o),y(Do.$$.fragment,o),y(jo.$$.fragment,o),y(xo.$$.fragment,o),y(Ho.$$.fragment,o),y(So.$$.fragment,o),y(Wo.$$.fragment,o),y(Qt.$$.fragment,o),y(Uo.$$.fragment,o),y(Ro.$$.fragment,o),y(Vo.$$.fragment,o),y(Qo.$$.fragment,o),y(Zt.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(en.$$.fragment,o),y(sn.$$.fragment,o),y(to.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(ln.$$.fragment,o),y(hn.$$.fragment,o),y(no.$$.fragment,o),y(mn.$$.fragment,o),y(un.$$.fragment,o),y(fn.$$.fragment,o),y(gn.$$.fragment,o),y(ao.$$.fragment,o),y(kn.$$.fragment,o),y(ro.$$.fragment,o),y(bn.$$.fragment,o),y(wn.$$.fragment,o),y(Pn.$$.fragment,o),y(lo.$$.fragment,o),y(An.$$.fragment,o),y(co.$$.fragment,o),y($n.$$.fragment,o),y(Gn.$$.fragment,o),y(Mn.$$.fragment,o),y(ho.$$.fragment,o),y(qn.$$.fragment,o),y(mo.$$.fragment,o),y(Cn.$$.fragment,o),y(Dn.$$.fragment,o),y(jn.$$.fragment,o),y(fo.$$.fragment,o),y(Ln.$$.fragment,o),y(go.$$.fragment,o),y(Nn.$$.fragment,o),Mr=!0)},o(o){I(T.$$.fragment,o),I(Y.$$.fragment,o),I(bo.$$.fragment,o),I(wo.$$.fragment,o),I(Po.$$.fragment,o),I(Io.$$.fragment,o),I(Oo.$$.fragment,o),I(Ao.$$.fragment,o),I(Mo.$$.fragment,o),I(Eo.$$.fragment,o),I(zo.$$.fragment,o),I(Do.$$.fragment,o),I(jo.$$.fragment,o),I(xo.$$.fragment,o),I(Ho.$$.fragment,o),I(So.$$.fragment,o),I(Wo.$$.fragment,o),I(Qt.$$.fragment,o),I(Uo.$$.fragment,o),I(Ro.$$.fragment,o),I(Vo.$$.fragment,o),I(Qo.$$.fragment,o),I(Zt.$$.fragment,o),I(Yo.$$.fragment,o),I(Zo.$$.fragment,o),I(en.$$.fragment,o),I(sn.$$.fragment,o),I(to.$$.fragment,o),I(an.$$.fragment,o),I(rn.$$.fragment,o),I(ln.$$.fragment,o),I(hn.$$.fragment,o),I(no.$$.fragment,o),I(mn.$$.fragment,o),I(un.$$.fragment,o),I(fn.$$.fragment,o),I(gn.$$.fragment,o),I(ao.$$.fragment,o),I(kn.$$.fragment,o),I(ro.$$.fragment,o),I(bn.$$.fragment,o),I(wn.$$.fragment,o),I(Pn.$$.fragment,o),I(lo.$$.fragment,o),I(An.$$.fragment,o),I(co.$$.fragment,o),I($n.$$.fragment,o),I(Gn.$$.fragment,o),I(Mn.$$.fragment,o),I(ho.$$.fragment,o),I(qn.$$.fragment,o),I(mo.$$.fragment,o),I(Cn.$$.fragment,o),I(Dn.$$.fragment,o),I(jn.$$.fragment,o),I(fo.$$.fragment,o),I(Ln.$$.fragment,o),I(go.$$.fragment,o),I(Nn.$$.fragment,o),Mr=!1},d(o){t(m),o&&t(G),o&&t(f),O(T),o&&t(J),o&&t($),O(Y),o&&t(de),o&&t(S),o&&t(z),o&&t(oe),o&&t(ce),o&&t(ne),o&&t(pe),o&&t(E),o&&t(L),o&&t(Q),o&&t(p),o&&t(k),o&&t(F),o&&t(se),o&&t(Ae),o&&t(we),o&&t($e),o&&t(Ze),o&&t(nr),O(bo,o),o&&t(sr),o&&t(Le),o&&t(ar),o&&t(Pt),O(wo),o&&t(rr),o&&t(qe),O(Po),O(Io),o&&t(ir),o&&t(It),O(Oo),o&&t(lr),o&&t(Ce),O(Ao),O(Mo),o&&t(dr),o&&t(Ot),O(Eo),o&&t(cr),o&&t(Qe),O(zo),o&&t(pr),o&&t(At),O(Do),o&&t(hr),o&&t($t),O(jo),o&&t(mr),o&&t(Gt),O(xo),o&&t(ur),o&&t(Mt),O(Ho),o&&t(fr),o&&t(De),O(So),O(Wo),O(Qt),O(Uo),o&&t(gr),o&&t(zt),O(Ro),o&&t(_r),o&&t(je),O(Vo),O(Qo),O(Zt),O(Yo),o&&t(Tr),o&&t(qt),O(Zo),o&&t(vr),o&&t(xe),O(en),O(sn),O(to),O(an),o&&t(kr),o&&t(Dt),O(rn),o&&t(br),o&&t(He),O(ln),O(hn),O(no),O(mn),O(un),o&&t(wr),o&&t(xt),O(fn),o&&t(Pr),o&&t(ye),O(gn),O(ao),O(kn),O(ro),O(bn),o&&t(yr),o&&t(St),O(wn),o&&t(Ir),o&&t(Ie),O(Pn),O(lo),O(An),O(co),O($n),o&&t(Or),o&&t(Nt),O(Gn),o&&t(Ar),o&&t(Oe),O(Mn),O(ho),O(qn),O(mo),O(Cn),o&&t($r),o&&t(Wt),O(Dn),o&&t(Gr),o&&t(le),O(jn),O(fo),O(Ln),O(go),O(Nn)}}}const vf={local:"openai-gpt",sections:[{local:"overview",title:"Overview"},{local:"transformers.OpenAIGPTConfig",title:"OpenAIGPTConfig"},{local:"transformers.OpenAIGPTTokenizer",title:"OpenAIGPTTokenizer"},{local:"transformers.OpenAIGPTTokenizerFast",title:"OpenAIGPTTokenizerFast"},{local:"transformers.models.openai.modeling_openai.OpenAIGPTDoubleHeadsModelOutput",title:"OpenAI specific outputs"},{local:"transformers.OpenAIGPTModel",title:"OpenAIGPTModel"},{local:"transformers.OpenAIGPTLMHeadModel",title:"OpenAIGPTLMHeadModel"},{local:"transformers.OpenAIGPTDoubleHeadsModel",title:"OpenAIGPTDoubleHeadsModel"},{local:"transformers.OpenAIGPTForSequenceClassification",title:"OpenAIGPTForSequenceClassification"},{local:"transformers.TFOpenAIGPTModel",title:"TFOpenAIGPTModel"},{local:"transformers.TFOpenAIGPTLMHeadModel",title:"TFOpenAIGPTLMHeadModel"},{local:"transformers.TFOpenAIGPTDoubleHeadsModel",title:"TFOpenAIGPTDoubleHeadsModel"},{local:"transformers.TFOpenAIGPTForSequenceClassification",title:"TFOpenAIGPTForSequenceClassification"}],title:"OpenAI GPT"};function kf(K){return sf(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Of extends ef{constructor(m){super();tf(this,m,kf,Tf,of,{})}}export{Of as default,vf as metadata};
