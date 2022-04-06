import{S as G_,i as Y_,s as Z_,e as n,k as l,w as v,t as r,M as ek,c as s,d as t,m as d,a,x as b,h as i,b as h,F as e,g as m,y as T,q as M,o as w,B as P,v as tk}from"../../chunks/vendor-6b77c823.js";import{T as ye}from"../../chunks/Tip-39098574.js";import{D as J}from"../../chunks/Docstring-abef54e3.js";import{C as ve}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ae}from"../../chunks/IconCopyLink-7a11ce68.js";function ok(R){let p,F,f,_,$;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function nk(R){let p,F,f,_,$;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function sk(R){let p,F,f,_,$;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function ak(R){let p,F,f,_,$;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function rk(R){let p,F,f,_,$;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function ik(R){let p,F,f,_,$;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function lk(R){let p,F,f,_,$,k,g,y,le,B,z,X,D,G,de,O,ce,se,U,L,Y,V,E,q,Z,Q,ae,ee,H,re,te,j,pe,W,oe,he,x,ne,C,me;return{c(){p=n("p"),F=r("TF 2.0 models accepts two formats as inputs:"),f=l(),_=n("ul"),$=n("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),y=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),B=l(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=r("model(inputs)"),se=r("."),U=l(),L=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Z=r("a single Tensor with "),Q=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),H=n("code"),re=r("model(inputs_ids)"),te=l(),j=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),oe=r("model([input_ids, attention_mask])"),he=l(),x=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=n("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var N=a(p);F=i(N,"TF 2.0 models accepts two formats as inputs:"),N.forEach(t),f=d(c),_=s(c,"UL",{});var K=a(_);$=s(K,"LI",{});var _e=a($);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),g=d(K),y=s(K,"LI",{});var Te=a(y);le=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),B=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Me=a(O);ce=i(Me,"model(inputs)"),Me.forEach(t),se=i(I,"."),I.forEach(t),U=d(c),L=s(c,"P",{});var we=a(L);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=d(c),E=s(c,"UL",{});var A=a(E);q=s(A,"LI",{});var S=a(q);Z=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Pe=a(Q);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),H=s(S,"CODE",{});var ge=a(H);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=d(A),j=s(A,"LI",{});var ue=a(j);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var $e=a(W);oe=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),ue.forEach(t),he=d(A),x=s(A,"LI",{});var ie=a(x);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=s(ie,"CODE",{});var fe=a(C);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),A.forEach(t)},m(c,N){m(c,p,N),e(p,F),m(c,f,N),m(c,_,N),e(_,$),e($,k),e(_,g),e(_,y),e(y,le),m(c,B,N),m(c,z,N),e(z,X),e(z,D),e(D,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,U,N),m(c,L,N),e(L,Y),m(c,V,N),m(c,E,N),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,H),e(H,re),e(E,te),e(E,j),e(j,pe),e(j,W),e(W,oe),e(E,he),e(E,x),e(x,ne),e(x,C),e(C,me)},d(c){c&&t(p),c&&t(f),c&&t(_),c&&t(B),c&&t(z),c&&t(U),c&&t(L),c&&t(V),c&&t(E)}}}function dk(R){let p,F,f,_,$;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function ck(R){let p,F,f,_,$,k,g,y,le,B,z,X,D,G,de,O,ce,se,U,L,Y,V,E,q,Z,Q,ae,ee,H,re,te,j,pe,W,oe,he,x,ne,C,me;return{c(){p=n("p"),F=r("TF 2.0 models accepts two formats as inputs:"),f=l(),_=n("ul"),$=n("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),y=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),B=l(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=r("model(inputs)"),se=r("."),U=l(),L=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Z=r("a single Tensor with "),Q=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),H=n("code"),re=r("model(inputs_ids)"),te=l(),j=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),oe=r("model([input_ids, attention_mask])"),he=l(),x=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=n("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var N=a(p);F=i(N,"TF 2.0 models accepts two formats as inputs:"),N.forEach(t),f=d(c),_=s(c,"UL",{});var K=a(_);$=s(K,"LI",{});var _e=a($);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),g=d(K),y=s(K,"LI",{});var Te=a(y);le=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),B=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Me=a(O);ce=i(Me,"model(inputs)"),Me.forEach(t),se=i(I,"."),I.forEach(t),U=d(c),L=s(c,"P",{});var we=a(L);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=d(c),E=s(c,"UL",{});var A=a(E);q=s(A,"LI",{});var S=a(q);Z=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Pe=a(Q);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),H=s(S,"CODE",{});var ge=a(H);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=d(A),j=s(A,"LI",{});var ue=a(j);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var $e=a(W);oe=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),ue.forEach(t),he=d(A),x=s(A,"LI",{});var ie=a(x);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=s(ie,"CODE",{});var fe=a(C);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),A.forEach(t)},m(c,N){m(c,p,N),e(p,F),m(c,f,N),m(c,_,N),e(_,$),e($,k),e(_,g),e(_,y),e(y,le),m(c,B,N),m(c,z,N),e(z,X),e(z,D),e(D,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,U,N),m(c,L,N),e(L,Y),m(c,V,N),m(c,E,N),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,H),e(H,re),e(E,te),e(E,j),e(j,pe),e(j,W),e(W,oe),e(E,he),e(E,x),e(x,ne),e(x,C),e(C,me)},d(c){c&&t(p),c&&t(f),c&&t(_),c&&t(B),c&&t(z),c&&t(U),c&&t(L),c&&t(V),c&&t(E)}}}function pk(R){let p,F,f,_,$;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function hk(R){let p,F,f,_,$,k,g,y,le,B,z,X,D,G,de,O,ce,se,U,L,Y,V,E,q,Z,Q,ae,ee,H,re,te,j,pe,W,oe,he,x,ne,C,me;return{c(){p=n("p"),F=r("TF 2.0 models accepts two formats as inputs:"),f=l(),_=n("ul"),$=n("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),y=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),B=l(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=r("model(inputs)"),se=r("."),U=l(),L=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Z=r("a single Tensor with "),Q=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),H=n("code"),re=r("model(inputs_ids)"),te=l(),j=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),oe=r("model([input_ids, attention_mask])"),he=l(),x=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=n("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var N=a(p);F=i(N,"TF 2.0 models accepts two formats as inputs:"),N.forEach(t),f=d(c),_=s(c,"UL",{});var K=a(_);$=s(K,"LI",{});var _e=a($);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),g=d(K),y=s(K,"LI",{});var Te=a(y);le=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),B=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Me=a(O);ce=i(Me,"model(inputs)"),Me.forEach(t),se=i(I,"."),I.forEach(t),U=d(c),L=s(c,"P",{});var we=a(L);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=d(c),E=s(c,"UL",{});var A=a(E);q=s(A,"LI",{});var S=a(q);Z=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Pe=a(Q);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),H=s(S,"CODE",{});var ge=a(H);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=d(A),j=s(A,"LI",{});var ue=a(j);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var $e=a(W);oe=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),ue.forEach(t),he=d(A),x=s(A,"LI",{});var ie=a(x);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=s(ie,"CODE",{});var fe=a(C);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),A.forEach(t)},m(c,N){m(c,p,N),e(p,F),m(c,f,N),m(c,_,N),e(_,$),e($,k),e(_,g),e(_,y),e(y,le),m(c,B,N),m(c,z,N),e(z,X),e(z,D),e(D,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,U,N),m(c,L,N),e(L,Y),m(c,V,N),m(c,E,N),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,H),e(H,re),e(E,te),e(E,j),e(j,pe),e(j,W),e(W,oe),e(E,he),e(E,x),e(x,ne),e(x,C),e(C,me)},d(c){c&&t(p),c&&t(f),c&&t(_),c&&t(B),c&&t(z),c&&t(U),c&&t(L),c&&t(V),c&&t(E)}}}function mk(R){let p,F,f,_,$;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function uk(R){let p,F,f,_,$,k,g,y,le,B,z,X,D,G,de,O,ce,se,U,L,Y,V,E,q,Z,Q,ae,ee,H,re,te,j,pe,W,oe,he,x,ne,C,me;return{c(){p=n("p"),F=r("TF 2.0 models accepts two formats as inputs:"),f=l(),_=n("ul"),$=n("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),y=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),B=l(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=r("model(inputs)"),se=r("."),U=l(),L=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Z=r("a single Tensor with "),Q=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),H=n("code"),re=r("model(inputs_ids)"),te=l(),j=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),oe=r("model([input_ids, attention_mask])"),he=l(),x=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=n("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var N=a(p);F=i(N,"TF 2.0 models accepts two formats as inputs:"),N.forEach(t),f=d(c),_=s(c,"UL",{});var K=a(_);$=s(K,"LI",{});var _e=a($);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),g=d(K),y=s(K,"LI",{});var Te=a(y);le=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),B=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Me=a(O);ce=i(Me,"model(inputs)"),Me.forEach(t),se=i(I,"."),I.forEach(t),U=d(c),L=s(c,"P",{});var we=a(L);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=d(c),E=s(c,"UL",{});var A=a(E);q=s(A,"LI",{});var S=a(q);Z=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Pe=a(Q);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),H=s(S,"CODE",{});var ge=a(H);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=d(A),j=s(A,"LI",{});var ue=a(j);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var $e=a(W);oe=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),ue.forEach(t),he=d(A),x=s(A,"LI",{});var ie=a(x);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=s(ie,"CODE",{});var fe=a(C);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),A.forEach(t)},m(c,N){m(c,p,N),e(p,F),m(c,f,N),m(c,_,N),e(_,$),e($,k),e(_,g),e(_,y),e(y,le),m(c,B,N),m(c,z,N),e(z,X),e(z,D),e(D,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,U,N),m(c,L,N),e(L,Y),m(c,V,N),m(c,E,N),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,H),e(H,re),e(E,te),e(E,j),e(j,pe),e(j,W),e(W,oe),e(E,he),e(E,x),e(x,ne),e(x,C),e(C,me)},d(c){c&&t(p),c&&t(f),c&&t(_),c&&t(B),c&&t(z),c&&t(U),c&&t(L),c&&t(V),c&&t(E)}}}function fk(R){let p,F,f,_,$;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function gk(R){let p,F,f,_,$,k,g,y,le,B,z,X,D,G,de,O,ce,se,U,L,Y,V,E,q,Z,Q,ae,ee,H,re,te,j,pe,W,oe,he,x,ne,C,me;return{c(){p=n("p"),F=r("TF 2.0 models accepts two formats as inputs:"),f=l(),_=n("ul"),$=n("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),y=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),B=l(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=r("model(inputs)"),se=r("."),U=l(),L=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Z=r("a single Tensor with "),Q=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),H=n("code"),re=r("model(inputs_ids)"),te=l(),j=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),oe=r("model([input_ids, attention_mask])"),he=l(),x=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=n("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var N=a(p);F=i(N,"TF 2.0 models accepts two formats as inputs:"),N.forEach(t),f=d(c),_=s(c,"UL",{});var K=a(_);$=s(K,"LI",{});var _e=a($);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),g=d(K),y=s(K,"LI",{});var Te=a(y);le=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),B=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Me=a(O);ce=i(Me,"model(inputs)"),Me.forEach(t),se=i(I,"."),I.forEach(t),U=d(c),L=s(c,"P",{});var we=a(L);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=d(c),E=s(c,"UL",{});var A=a(E);q=s(A,"LI",{});var S=a(q);Z=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Pe=a(Q);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),H=s(S,"CODE",{});var ge=a(H);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=d(A),j=s(A,"LI",{});var ue=a(j);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var $e=a(W);oe=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),ue.forEach(t),he=d(A),x=s(A,"LI",{});var ie=a(x);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=s(ie,"CODE",{});var fe=a(C);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),A.forEach(t)},m(c,N){m(c,p,N),e(p,F),m(c,f,N),m(c,_,N),e(_,$),e($,k),e(_,g),e(_,y),e(y,le),m(c,B,N),m(c,z,N),e(z,X),e(z,D),e(D,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,U,N),m(c,L,N),e(L,Y),m(c,V,N),m(c,E,N),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,H),e(H,re),e(E,te),e(E,j),e(j,pe),e(j,W),e(W,oe),e(E,he),e(E,x),e(x,ne),e(x,C),e(C,me)},d(c){c&&t(p),c&&t(f),c&&t(_),c&&t(B),c&&t(z),c&&t(U),c&&t(L),c&&t(V),c&&t(E)}}}function _k(R){let p,F,f,_,$;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function kk(R){let p,F,f,_,$,k,g,y,le,B,z,X,D,G,de,O,ce,se,U,L,Y,V,E,q,Z,Q,ae,ee,H,re,te,j,pe,W,oe,he,x,ne,C,me;return{c(){p=n("p"),F=r("TF 2.0 models accepts two formats as inputs:"),f=l(),_=n("ul"),$=n("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),y=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),B=l(),z=n("p"),X=r("This second option is useful when using "),D=n("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=r("model(inputs)"),se=r("."),U=l(),L=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Z=r("a single Tensor with "),Q=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),H=n("code"),re=r("model(inputs_ids)"),te=l(),j=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),oe=r("model([input_ids, attention_mask])"),he=l(),x=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=n("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var N=a(p);F=i(N,"TF 2.0 models accepts two formats as inputs:"),N.forEach(t),f=d(c),_=s(c,"UL",{});var K=a(_);$=s(K,"LI",{});var _e=a($);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),g=d(K),y=s(K,"LI",{});var Te=a(y);le=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),B=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Me=a(O);ce=i(Me,"model(inputs)"),Me.forEach(t),se=i(I,"."),I.forEach(t),U=d(c),L=s(c,"P",{});var we=a(L);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=d(c),E=s(c,"UL",{});var A=a(E);q=s(A,"LI",{});var S=a(q);Z=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Pe=a(Q);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),H=s(S,"CODE",{});var ge=a(H);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=d(A),j=s(A,"LI",{});var ue=a(j);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var $e=a(W);oe=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),ue.forEach(t),he=d(A),x=s(A,"LI",{});var ie=a(x);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=s(ie,"CODE",{});var fe=a(C);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),A.forEach(t)},m(c,N){m(c,p,N),e(p,F),m(c,f,N),m(c,_,N),e(_,$),e($,k),e(_,g),e(_,y),e(y,le),m(c,B,N),m(c,z,N),e(z,X),e(z,D),e(D,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,U,N),m(c,L,N),e(L,Y),m(c,V,N),m(c,E,N),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,H),e(H,re),e(E,te),e(E,j),e(j,pe),e(j,W),e(W,oe),e(E,he),e(E,x),e(x,ne),e(x,C),e(C,me)},d(c){c&&t(p),c&&t(f),c&&t(_),c&&t(B),c&&t(z),c&&t(U),c&&t(L),c&&t(V),c&&t(E)}}}function vk(R){let p,F,f,_,$;return{c(){p=n("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function bk(R){let p,F,f,_,$,k,g,y,le,B,z,X,D,G,de,O,ce,se,U,L,Y,V,E,q,Z,Q,ae,ee,H,re,te,j,pe,W,oe,he,x,ne,C,me,c,N,K,_e,Te,I,ke,Me,we,A,S,Pe,ge,ue,$e,ie,fe,no,Qa,Qo,Kl,Ha,Xl,Pi,He,Ho,Jl,ut,Gl,Ks,Yl,Zl,Xs,ed,td,Ro,od,nd,sd,yt,ad,Js,rd,id,Gs,ld,dd,cd,Ra,pd,hd,Uo,$i,Ft,so,Ua,Bo,md,Ba,ud,Ni,Fe,Vo,fd,Ko,gd,Ys,_d,kd,vd,gt,Xo,bd,Va,Td,Md,Jo,Zs,wd,Ka,Pd,$d,ea,Nd,Xa,yd,Fd,ao,Go,zd,Yo,Ed,Ja,qd,jd,Cd,ro,Zo,xd,Ga,Ad,Ld,ta,en,yi,zt,io,Ya,tn,Id,Za,Sd,Fi,Ze,on,Dd,nn,Od,er,Wd,Qd,Hd,sn,Rd,oa,Ud,Bd,Vd,lo,an,Kd,tr,Xd,zi,Et,co,or,rn,Jd,nr,Gd,Ei,Re,ln,Yd,sr,Zd,ec,dn,tc,na,oc,nc,sc,cn,ac,pn,rc,ic,lc,Xe,hn,dc,qt,cc,sa,pc,hc,ar,mc,uc,fc,po,gc,rr,_c,kc,mn,qi,jt,ho,ir,un,vc,lr,bc,ji,Ct,fn,Tc,Le,gn,Mc,xt,wc,aa,Pc,$c,dr,Nc,yc,Fc,mo,zc,cr,Ec,qc,_n,jc,kn,Ci,At,uo,pr,vn,Cc,hr,xc,xi,Ue,bn,Ac,mr,Lc,Ic,Tn,Sc,ra,Dc,Oc,Wc,Mn,Qc,wn,Hc,Rc,Uc,be,Pn,Bc,Lt,Vc,ia,Kc,Xc,ur,Jc,Gc,Yc,fo,Zc,fr,ep,tp,$n,op,Nn,np,gr,sp,ap,yn,rp,Fn,Ai,It,go,_r,zn,ip,kr,lp,Li,Be,En,dp,vr,cp,pp,qn,hp,la,mp,up,fp,jn,gp,Cn,_p,kp,vp,Je,xn,bp,St,Tp,da,Mp,wp,br,Pp,$p,Np,_o,yp,Tr,Fp,zp,An,Ii,Dt,ko,Mr,Ln,Ep,wr,qp,Si,Ve,In,jp,Pr,Cp,xp,Sn,Ap,ca,Lp,Ip,Sp,Dn,Dp,On,Op,Wp,Qp,Ie,Wn,Hp,Ot,Rp,pa,Up,Bp,$r,Vp,Kp,Xp,vo,Jp,Nr,Gp,Yp,Qn,Zp,Hn,Di,Wt,bo,yr,Rn,eh,Fr,th,Oi,Ke,Un,oh,Qt,nh,zr,sh,ah,Er,rh,ih,lh,Bn,dh,ha,ch,ph,hh,Vn,mh,Kn,uh,fh,gh,Se,Xn,_h,Ht,kh,ma,vh,bh,qr,Th,Mh,wh,To,Ph,jr,$h,Nh,Jn,yh,Gn,Wi,Rt,Mo,Cr,Yn,Fh,xr,zh,Qi,ze,Zn,Eh,Ar,qh,jh,es,Ch,ua,xh,Ah,Lh,ts,Ih,os,Sh,Dh,Oh,wo,Wh,Ge,ns,Qh,Ut,Hh,fa,Rh,Uh,Lr,Bh,Vh,Kh,Po,Xh,Ir,Jh,Gh,ss,Hi,Bt,$o,Sr,as,Yh,Dr,Zh,Ri,Ee,rs,em,is,tm,Or,om,nm,sm,ls,am,ga,rm,im,lm,ds,dm,cs,cm,pm,hm,No,mm,De,ps,um,Vt,fm,_a,gm,_m,Wr,km,vm,bm,yo,Tm,Qr,Mm,wm,hs,Pm,ms,Ui,Kt,Fo,Hr,us,$m,Rr,Nm,Bi,qe,fs,ym,Ur,Fm,zm,gs,Em,ka,qm,jm,Cm,_s,xm,ks,Am,Lm,Im,zo,Sm,Oe,vs,Dm,Xt,Om,va,Wm,Qm,Br,Hm,Rm,Um,Eo,Bm,Vr,Vm,Km,bs,Xm,Ts,Vi,Jt,qo,Kr,Ms,Jm,Xr,Gm,Ki,je,ws,Ym,Jr,Zm,eu,Ps,tu,ba,ou,nu,su,$s,au,Ns,ru,iu,lu,jo,du,Ye,ys,cu,Gt,pu,Ta,hu,mu,Gr,uu,fu,gu,Co,_u,Yr,ku,vu,Fs,Xi,Yt,xo,Zr,zs,bu,ei,Tu,Ji,Ce,Es,Mu,ti,wu,Pu,qs,$u,Ma,Nu,yu,Fu,js,zu,Cs,Eu,qu,ju,Ao,Cu,We,xs,xu,Zt,Au,wa,Lu,Iu,oi,Su,Du,Ou,Lo,Wu,ni,Qu,Hu,As,Ru,Ls,Gi,eo,Io,si,Is,Uu,ai,Bu,Yi,xe,Ss,Vu,to,Ku,ri,Xu,Ju,ii,Gu,Yu,Zu,Ds,ef,Pa,tf,of,nf,Os,sf,Ws,af,rf,lf,So,df,Qe,Qs,cf,oo,pf,$a,hf,mf,li,uf,ff,gf,Do,_f,di,kf,vf,Hs,bf,Rs,Zi;return k=new Ae({}),G=new Ae({}),Qo=new Ae({}),Ho=new J({props:{name:"class transformers.MPNetConfig",anchor:"transformers.MPNetConfig",parameters:[{name:"vocab_size",val:" = 30527"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/configuration_mpnet.py#L29",parametersDescription:[{anchor:"transformers.MPNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30527) &#x2014;
Vocabulary size of the MPNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetModel">MPNetModel</a> or <a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.TFMPNetModel">TFMPNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.MPNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.MPNetConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.MPNetConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.MPNetConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.MPNetConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.MPNetConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.MPNetConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.MPNetConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.MPNetConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.MPNetConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.MPNetConfig.relative_attention_num_buckets",description:`<strong>relative_attention_num_buckets</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"}]}}),Uo=new ve({props:{code:`from transformers import MPNetModel, MPNetConfig

# Initializing a MPNet mpnet-base style configuration
configuration = MPNetConfig()

# Initializing a model from the mpnet-base style configuration
model = MPNetModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetModel, MPNetConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MPNet mpnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MPNetConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the mpnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Bo=new Ae({}),Vo=new J({props:{name:"class transformers.MPNetTokenizer",anchor:"transformers.MPNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/tokenization_mpnet.py#L66",parametersDescription:[{anchor:"transformers.MPNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
Path to the vocabulary file.`,name:"vocab_file"},{anchor:"transformers.MPNetTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.MPNetTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.MPNetTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.MPNetTokenizer.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pre-training. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MPNetTokenizer.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MPNetTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MPNetTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MPNetTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MPNetTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MPNetTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MPNetTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters.</p>
<p>This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}]}}),Xo=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/tokenization_mpnet.py#L231",parametersDescription:[{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Go=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.MPNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/tokenization_mpnet.py#L256",parametersDescription:[{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zo=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/tokenization_mpnet.py#L283",parametersDescription:[{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),en=new J({props:{name:"save_vocabulary",anchor:"transformers.MPNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/tokenization_mpnet.py#L306"}}),tn=new Ae({}),on=new J({props:{name:"class transformers.MPNetTokenizerFast",anchor:"transformers.MPNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L51",parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.MPNetTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.MPNetTokenizerFast.bos_token",description:`<strong>bos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The beginning of sequence token that was used during pretraining. Can be used a sequence classifier token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the beginning of
sequence. The token used is the <code>cls_token</code>.</p>

					</div>`,name:"bos_token"},{anchor:"transformers.MPNetTokenizerFast.eos_token",description:`<strong>eos_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The end of sequence token.</p>
<div class="course-tip  bg-gradient-to-br dark:bg-gradient-to-r before:border-green-500 dark:before:border-green-800 from-green-50 dark:from-gray-900 to-white dark:to-gray-950 border border-green-50 text-green-700 dark:text-gray-400">
						
<p>When building a sequence using special tokens, this is not the token that is used for the end of sequence.
The token used is the <code>sep_token</code>.</p>

					</div>`,name:"eos_token"},{anchor:"transformers.MPNetTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;/s&gt;&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.MPNetTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;s&gt;&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.MPNetTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.MPNetTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;pad&gt;&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.MPNetTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;&lt;mask&gt;&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.MPNetTokenizerFast.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see <a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">this
issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}]}}),an=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L190",parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rn=new Ae({}),ln=new J({props:{name:"class transformers.MPNetModel",anchor:"transformers.MPNetModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_mpnet.py#L481",parametersDescription:[{anchor:"transformers.MPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new J({props:{name:"forward",anchor:"transformers.MPNetModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_mpnet.py#L510",parametersDescription:[{anchor:"transformers.MPNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) after further processing
through the layers used for the auxiliary pretraining task. E.g. for BERT-family of models, this returns
the classification token after processing through a linear layer and a tanh activation function. The linear
layer weights are trained from the next sentence prediction (classification) objective during pretraining.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),po=new ye({props:{$$slots:{default:[ok]},$$scope:{ctx:R}}}),mn=new ve({props:{code:`from transformers import MPNetTokenizer, MPNetModel
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetModel.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),un=new Ae({}),fn=new J({props:{name:"class transformers.MPNetForMaskedLM",anchor:"transformers.MPNetForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_mpnet.py#L574"}}),gn=new J({props:{name:"forward",anchor:"transformers.MPNetForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_mpnet.py#L593",parametersDescription:[{anchor:"transformers.MPNetForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mo=new ye({props:{$$slots:{default:[nk]},$$scope:{ctx:R}}}),_n=new ve({props:{code:`from transformers import MPNetTokenizer, MPNetForMaskedLM
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForMaskedLM.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[0].nonzero(as_tuple=True)[0]

predicted_token_id = logits[0, mask_token_index].argmax(axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = (inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>].nonzero(as_tuple=<span class="hljs-literal">True</span>)[<span class="hljs-number">0</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = logits[<span class="hljs-number">0</span>, mask_token_index].argmax(axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),kn=new ve({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),vn=new Ae({}),bn=new J({props:{name:"class transformers.MPNetForSequenceClassification",anchor:"transformers.MPNetForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_mpnet.py#L683",parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Pn=new J({props:{name:"forward",anchor:"transformers.MPNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_mpnet.py#L696",parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new ye({props:{$$slots:{default:[sk]},$$scope:{ctx:R}}}),$n=new ve({props:{code:`import torch
from transformers import MPNetTokenizer, MPNetForSequenceClassification

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Nn=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base", num_labels=num_labels)

labels = torch.tensor(1)
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),yn=new ve({props:{code:`import torch
from transformers import MPNetTokenizer, MPNetForSequenceClassification

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")

with torch.no_grad():
    logits = model(**inputs).logits

predicted_class_id = logits.argmax().item()
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = logits.argmax().item()
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Fn=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base", num_labels=num_labels)

num_labels = len(model.config.id2label)
labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
    torch.float
)
loss = model(**inputs, labels=labels).loss
loss.backward()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.nn.functional.one_hot(torch.tensor([predicted_class_id]), num_classes=num_labels).to(
<span class="hljs-meta">... </span>    torch.<span class="hljs-built_in">float</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),zn=new Ae({}),En=new J({props:{name:"class transformers.MPNetForMultipleChoice",anchor:"transformers.MPNetForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_mpnet.py#L778",parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xn=new J({props:{name:"forward",anchor:"transformers.MPNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_mpnet.py#L791",parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new ye({props:{$$slots:{default:[ak]},$$scope:{ctx:R}}}),An=new ve({props:{code:`from transformers import MPNetTokenizer, MPNetForMultipleChoice
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForMultipleChoice.from_pretrained("microsoft/mpnet-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ln=new Ae({}),In=new J({props:{name:"class transformers.MPNetForTokenClassification",anchor:"transformers.MPNetForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_mpnet.py#L869",parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wn=new J({props:{name:"forward",anchor:"transformers.MPNetForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_mpnet.py#L884",parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new ye({props:{$$slots:{default:[rk]},$$scope:{ctx:R}}}),Qn=new ve({props:{code:`from transformers import MPNetTokenizer, MPNetForTokenClassification
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForTokenClassification.from_pretrained("microsoft/mpnet-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

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
`}}),Hn=new ve({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Rn=new Ae({}),Un=new J({props:{name:"class transformers.MPNetForQuestionAnswering",anchor:"transformers.MPNetForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_mpnet.py#L969",parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xn=new J({props:{name:"forward",anchor:"transformers.MPNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_mpnet.py#L983",parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.MPNetForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.MPNetForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.MPNetForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.MPNetForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.MPNetForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.MPNetForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),To=new ye({props:{$$slots:{default:[ik]},$$scope:{ctx:R}}}),Jn=new ve({props:{code:`from transformers import MPNetTokenizer, MPNetForQuestionAnswering
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForQuestionAnswering.from_pretrained("microsoft/mpnet-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="pt")
with torch.no_grad():
    outputs = model(**inputs)

answer_start_index = outputs.start_logits.argmax()
answer_end_index = outputs.end_logits.argmax()

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">with</span> torch.no_grad():
<span class="hljs-meta">... </span>    outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = outputs.start_logits.argmax()
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = outputs.end_logits.argmax()

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),Gn=new ve({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Yn=new Ae({}),Zn=new J({props:{name:"class transformers.TFMPNetModel",anchor:"transformers.TFMPNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L664",parametersDescription:[{anchor:"transformers.TFMPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wo=new ye({props:{$$slots:{default:[lk]},$$scope:{ctx:R}}}),ns=new J({props:{name:"call",anchor:"transformers.TFMPNetModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L669",parametersDescription:[{anchor:"transformers.TFMPNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Po=new ye({props:{$$slots:{default:[dk]},$$scope:{ctx:R}}}),ss=new ve({props:{code:`from transformers import MPNetTokenizer, TFMPNetModel
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetModel.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),as=new Ae({}),rs=new J({props:{name:"class transformers.TFMPNetForMaskedLM",anchor:"transformers.TFMPNetForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L767",parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),No=new ye({props:{$$slots:{default:[ck]},$$scope:{ctx:R}}}),ps=new J({props:{name:"call",anchor:"transformers.TFMPNetForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L784",parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yo=new ye({props:{$$slots:{default:[pk]},$$scope:{ctx:R}}}),hs=new ve({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMaskedLM
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForMaskedLM.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
logits = model(**inputs).logits

# retrieve index of [MASK]
mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[0][1]

predicted_token_id = tf.math.argmax(logits[0, mask_token_index], axis=-1)
tokenizer.decode(predicted_token_id)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># retrieve index of [MASK]</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>mask_token_index = tf.where(inputs.input_ids == tokenizer.mask_token_id)[<span class="hljs-number">0</span>][<span class="hljs-number">1</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_token_id = tf.math.argmax(logits[<span class="hljs-number">0</span>, mask_token_index], axis=-<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predicted_token_id)
`}}),ms=new ve({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]
# mask labels of non-[MASK] tokens
labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(float(outputs.loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(outputs.loss), <span class="hljs-number">2</span>)
`}}),us=new Ae({}),fs=new J({props:{name:"class transformers.TFMPNetForSequenceClassification",anchor:"transformers.TFMPNetForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L878",parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zo=new ye({props:{$$slots:{default:[hk]},$$scope:{ctx:R}}}),vs=new J({props:{name:"call",anchor:"transformers.TFMPNetForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L889",parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Eo=new ye({props:{$$slots:{default:[mk]},$$scope:{ctx:R}}}),bs=new ve({props:{code:`from transformers import MPNetTokenizer, TFMPNetForSequenceClassification
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")

logits = model(**inputs).logits

predicted_class_id = int(tf.math.argmax(logits, axis=-1)[0])
model.config.id2label[predicted_class_id]
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = model(**inputs).logits

<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_class_id = <span class="hljs-built_in">int</span>(tf.math.argmax(logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>model.config.id2label[predicted_class_id]
`}}),Ts=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
num_labels = len(model.config.id2label)
model = TFMPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base", num_labels=num_labels)

labels = tf.constant(1)
loss = model(**inputs, labels=labels).loss
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>num_labels = <span class="hljs-built_in">len</span>(model.config.id2label)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, num_labels=num_labels)

<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.constant(<span class="hljs-number">1</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Ms=new Ae({}),ws=new J({props:{name:"class transformers.TFMPNetForMultipleChoice",anchor:"transformers.TFMPNetForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L959",parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jo=new ye({props:{$$slots:{default:[uk]},$$scope:{ctx:R}}}),ys=new J({props:{name:"call",anchor:"transformers.TFMPNetForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L979",parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(batch_size, )</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) \u2014 <em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Co=new ye({props:{$$slots:{default:[fk]},$$scope:{ctx:R}}}),Fs=new ve({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMultipleChoice
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForMultipleChoice.from_pretrained("microsoft/mpnet-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),zs=new Ae({}),Es=new J({props:{name:"class transformers.TFMPNetForTokenClassification",anchor:"transformers.TFMPNetForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1076",parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ao=new ye({props:{$$slots:{default:[gk]},$$scope:{ctx:R}}}),xs=new J({props:{name:"call",anchor:"transformers.TFMPNetForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1090",parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Lo=new ye({props:{$$slots:{default:[_k]},$$scope:{ctx:R}}}),As=new ve({props:{code:`from transformers import MPNetTokenizer, TFMPNetForTokenClassification
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForTokenClassification.from_pretrained("microsoft/mpnet-base")

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
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

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
`}}),Ls=new ve({props:{code:`labels = predicted_token_class_ids
loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(model(**inputs, labels=labels).loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),Is=new Ae({}),Ss=new J({props:{name:"class transformers.TFMPNetForQuestionAnswering",anchor:"transformers.TFMPNetForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1159",parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),So=new ye({props:{$$slots:{default:[kk]},$$scope:{ctx:R}}}),Qs=new J({props:{name:"call",anchor:"transformers.TFMPNetForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.18.0/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1172",parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used in
eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.18.0/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Do=new ye({props:{$$slots:{default:[vk]},$$scope:{ctx:R}}}),Hs=new ve({props:{code:`from transformers import MPNetTokenizer, TFMPNetForQuestionAnswering
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForQuestionAnswering.from_pretrained("microsoft/mpnet-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"

inputs = tokenizer(question, text, return_tensors="tf")
outputs = model(**inputs)

answer_start_index = int(tf.math.argmax(outputs.start_logits, axis=-1)[0])
answer_end_index = int(tf.math.argmax(outputs.end_logits, axis=-1)[0])

predict_answer_tokens = inputs.input_ids[0, answer_start_index : answer_end_index + 1]
tokenizer.decode(predict_answer_tokens)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_start_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.start_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_end_index = <span class="hljs-built_in">int</span>(tf.math.argmax(outputs.end_logits, axis=-<span class="hljs-number">1</span>)[<span class="hljs-number">0</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>predict_answer_tokens = inputs.input_ids[<span class="hljs-number">0</span>, answer_start_index : answer_end_index + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer.decode(predict_answer_tokens)
`}}),Rs=new ve({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){p=n("meta"),F=l(),f=n("h1"),_=n("a"),$=n("span"),v(k.$$.fragment),g=l(),y=n("span"),le=r("MPNet"),B=l(),z=n("h2"),X=n("a"),D=n("span"),v(G.$$.fragment),de=l(),O=n("span"),ce=r("Overview"),se=l(),U=n("p"),L=r("The MPNet model was proposed in "),Y=n("a"),V=r("MPNet: Masked and Permuted Pre-training for Language Understanding"),E=r(" by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),q=l(),Z=n("p"),Q=r(`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),ae=l(),ee=n("p"),H=r("The abstract from the paper is the following:"),re=l(),te=n("p"),j=n("em"),pe=r(`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),W=l(),oe=n("p"),he=r("Tips:"),x=l(),ne=n("ul"),C=n("li"),me=r("MPNet doesn\u2019t have "),c=n("code"),N=r("token_type_ids"),K=r(`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),_e=n("code"),Te=r("tokenizer.sep_token"),I=r(" (or "),ke=n("code"),Me=r("[sep]"),we=r(")."),A=l(),S=n("p"),Pe=r("The original code can be found "),ge=n("a"),ue=r("here"),$e=r("."),ie=l(),fe=n("h2"),no=n("a"),Qa=n("span"),v(Qo.$$.fragment),Kl=l(),Ha=n("span"),Xl=r("MPNetConfig"),Pi=l(),He=n("div"),v(Ho.$$.fragment),Jl=l(),ut=n("p"),Gl=r("This is the configuration class to store the configuration of a "),Ks=n("a"),Yl=r("MPNetModel"),Zl=r(" or a "),Xs=n("a"),ed=r("TFMPNetModel"),td=r(`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Ro=n("a"),od=r("mpnet-base"),nd=r(" architecture."),sd=l(),yt=n("p"),ad=r("Configuration objects inherit from "),Js=n("a"),rd=r("PretrainedConfig"),id=r(` and can be used to control the model outputs. Read the
documentation from `),Gs=n("a"),ld=r("PretrainedConfig"),dd=r(" for more information."),cd=l(),Ra=n("p"),pd=r("Examples:"),hd=l(),v(Uo.$$.fragment),$i=l(),Ft=n("h2"),so=n("a"),Ua=n("span"),v(Bo.$$.fragment),md=l(),Ba=n("span"),ud=r("MPNetTokenizer"),Ni=l(),Fe=n("div"),v(Vo.$$.fragment),fd=l(),Ko=n("p"),gd=r("This tokenizer inherits from "),Ys=n("a"),_d=r("BertTokenizer"),kd=r(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),vd=l(),gt=n("div"),v(Xo.$$.fragment),bd=l(),Va=n("p"),Td=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),Md=l(),Jo=n("ul"),Zs=n("li"),wd=r("single sequence: "),Ka=n("code"),Pd=r("<s> X </s>"),$d=l(),ea=n("li"),Nd=r("pair of sequences: "),Xa=n("code"),yd=r("<s> A </s></s> B </s>"),Fd=l(),ao=n("div"),v(Go.$$.fragment),zd=l(),Yo=n("p"),Ed=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ja=n("code"),qd=r("prepare_for_model"),jd=r(" methods."),Cd=l(),ro=n("div"),v(Zo.$$.fragment),xd=l(),Ga=n("p"),Ad=r(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),Ld=l(),ta=n("div"),v(en.$$.fragment),yi=l(),zt=n("h2"),io=n("a"),Ya=n("span"),v(tn.$$.fragment),Id=l(),Za=n("span"),Sd=r("MPNetTokenizerFast"),Fi=l(),Ze=n("div"),v(on.$$.fragment),Dd=l(),nn=n("p"),Od=r("Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),er=n("em"),Wd=r("tokenizers"),Qd=r(" library). Based on WordPiece."),Hd=l(),sn=n("p"),Rd=r("This tokenizer inherits from "),oa=n("a"),Ud=r("PreTrainedTokenizerFast"),Bd=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vd=l(),lo=n("div"),v(an.$$.fragment),Kd=l(),tr=n("p"),Xd=r(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),zi=l(),Et=n("h2"),co=n("a"),or=n("span"),v(rn.$$.fragment),Jd=l(),nr=n("span"),Gd=r("MPNetModel"),Ei=l(),Re=n("div"),v(ln.$$.fragment),Yd=l(),sr=n("p"),Zd=r("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),ec=l(),dn=n("p"),tc=r("This model inherits from "),na=n("a"),oc=r("PreTrainedModel"),nc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sc=l(),cn=n("p"),ac=r("This model is also a PyTorch "),pn=n("a"),rc=r("torch.nn.Module"),ic=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lc=l(),Xe=n("div"),v(hn.$$.fragment),dc=l(),qt=n("p"),cc=r("The "),sa=n("a"),pc=r("MPNetModel"),hc=r(" forward method, overrides the "),ar=n("code"),mc=r("__call__"),uc=r(" special method."),fc=l(),v(po.$$.fragment),gc=l(),rr=n("p"),_c=r("Example:"),kc=l(),v(mn.$$.fragment),qi=l(),jt=n("h2"),ho=n("a"),ir=n("span"),v(un.$$.fragment),vc=l(),lr=n("span"),bc=r("MPNetForMaskedLM"),ji=l(),Ct=n("div"),v(fn.$$.fragment),Tc=l(),Le=n("div"),v(gn.$$.fragment),Mc=l(),xt=n("p"),wc=r("The "),aa=n("a"),Pc=r("MPNetForMaskedLM"),$c=r(" forward method, overrides the "),dr=n("code"),Nc=r("__call__"),yc=r(" special method."),Fc=l(),v(mo.$$.fragment),zc=l(),cr=n("p"),Ec=r("Example:"),qc=l(),v(_n.$$.fragment),jc=l(),v(kn.$$.fragment),Ci=l(),At=n("h2"),uo=n("a"),pr=n("span"),v(vn.$$.fragment),Cc=l(),hr=n("span"),xc=r("MPNetForSequenceClassification"),xi=l(),Ue=n("div"),v(bn.$$.fragment),Ac=l(),mr=n("p"),Lc=r(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ic=l(),Tn=n("p"),Sc=r("This model inherits from "),ra=n("a"),Dc=r("PreTrainedModel"),Oc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wc=l(),Mn=n("p"),Qc=r("This model is also a PyTorch "),wn=n("a"),Hc=r("torch.nn.Module"),Rc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uc=l(),be=n("div"),v(Pn.$$.fragment),Bc=l(),Lt=n("p"),Vc=r("The "),ia=n("a"),Kc=r("MPNetForSequenceClassification"),Xc=r(" forward method, overrides the "),ur=n("code"),Jc=r("__call__"),Gc=r(" special method."),Yc=l(),v(fo.$$.fragment),Zc=l(),fr=n("p"),ep=r("Example of single-label classification:"),tp=l(),v($n.$$.fragment),op=l(),v(Nn.$$.fragment),np=l(),gr=n("p"),sp=r("Example of multi-label classification:"),ap=l(),v(yn.$$.fragment),rp=l(),v(Fn.$$.fragment),Ai=l(),It=n("h2"),go=n("a"),_r=n("span"),v(zn.$$.fragment),ip=l(),kr=n("span"),lp=r("MPNetForMultipleChoice"),Li=l(),Be=n("div"),v(En.$$.fragment),dp=l(),vr=n("p"),cp=r(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),pp=l(),qn=n("p"),hp=r("This model inherits from "),la=n("a"),mp=r("PreTrainedModel"),up=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp=l(),jn=n("p"),gp=r("This model is also a PyTorch "),Cn=n("a"),_p=r("torch.nn.Module"),kp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vp=l(),Je=n("div"),v(xn.$$.fragment),bp=l(),St=n("p"),Tp=r("The "),da=n("a"),Mp=r("MPNetForMultipleChoice"),wp=r(" forward method, overrides the "),br=n("code"),Pp=r("__call__"),$p=r(" special method."),Np=l(),v(_o.$$.fragment),yp=l(),Tr=n("p"),Fp=r("Example:"),zp=l(),v(An.$$.fragment),Ii=l(),Dt=n("h2"),ko=n("a"),Mr=n("span"),v(Ln.$$.fragment),Ep=l(),wr=n("span"),qp=r("MPNetForTokenClassification"),Si=l(),Ve=n("div"),v(In.$$.fragment),jp=l(),Pr=n("p"),Cp=r(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),xp=l(),Sn=n("p"),Ap=r("This model inherits from "),ca=n("a"),Lp=r("PreTrainedModel"),Ip=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sp=l(),Dn=n("p"),Dp=r("This model is also a PyTorch "),On=n("a"),Op=r("torch.nn.Module"),Wp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qp=l(),Ie=n("div"),v(Wn.$$.fragment),Hp=l(),Ot=n("p"),Rp=r("The "),pa=n("a"),Up=r("MPNetForTokenClassification"),Bp=r(" forward method, overrides the "),$r=n("code"),Vp=r("__call__"),Kp=r(" special method."),Xp=l(),v(vo.$$.fragment),Jp=l(),Nr=n("p"),Gp=r("Example:"),Yp=l(),v(Qn.$$.fragment),Zp=l(),v(Hn.$$.fragment),Di=l(),Wt=n("h2"),bo=n("a"),yr=n("span"),v(Rn.$$.fragment),eh=l(),Fr=n("span"),th=r("MPNetForQuestionAnswering"),Oi=l(),Ke=n("div"),v(Un.$$.fragment),oh=l(),Qt=n("p"),nh=r(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zr=n("code"),sh=r("span start logits"),ah=r(" and "),Er=n("code"),rh=r("span end logits"),ih=r(")."),lh=l(),Bn=n("p"),dh=r("This model inherits from "),ha=n("a"),ch=r("PreTrainedModel"),ph=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hh=l(),Vn=n("p"),mh=r("This model is also a PyTorch "),Kn=n("a"),uh=r("torch.nn.Module"),fh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gh=l(),Se=n("div"),v(Xn.$$.fragment),_h=l(),Ht=n("p"),kh=r("The "),ma=n("a"),vh=r("MPNetForQuestionAnswering"),bh=r(" forward method, overrides the "),qr=n("code"),Th=r("__call__"),Mh=r(" special method."),wh=l(),v(To.$$.fragment),Ph=l(),jr=n("p"),$h=r("Example:"),Nh=l(),v(Jn.$$.fragment),yh=l(),v(Gn.$$.fragment),Wi=l(),Rt=n("h2"),Mo=n("a"),Cr=n("span"),v(Yn.$$.fragment),Fh=l(),xr=n("span"),zh=r("TFMPNetModel"),Qi=l(),ze=n("div"),v(Zn.$$.fragment),Eh=l(),Ar=n("p"),qh=r("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),jh=l(),es=n("p"),Ch=r("This model inherits from "),ua=n("a"),xh=r("TFPreTrainedModel"),Ah=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh=l(),ts=n("p"),Ih=r("This model is also a "),os=n("a"),Sh=r("tf.keras.Model"),Dh=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Oh=l(),v(wo.$$.fragment),Wh=l(),Ge=n("div"),v(ns.$$.fragment),Qh=l(),Ut=n("p"),Hh=r("The "),fa=n("a"),Rh=r("TFMPNetModel"),Uh=r(" forward method, overrides the "),Lr=n("code"),Bh=r("__call__"),Vh=r(" special method."),Kh=l(),v(Po.$$.fragment),Xh=l(),Ir=n("p"),Jh=r("Example:"),Gh=l(),v(ss.$$.fragment),Hi=l(),Bt=n("h2"),$o=n("a"),Sr=n("span"),v(as.$$.fragment),Yh=l(),Dr=n("span"),Zh=r("TFMPNetForMaskedLM"),Ri=l(),Ee=n("div"),v(rs.$$.fragment),em=l(),is=n("p"),tm=r("MPNet Model with a "),Or=n("code"),om=r("language modeling"),nm=r(" head on top."),sm=l(),ls=n("p"),am=r("This model inherits from "),ga=n("a"),rm=r("TFPreTrainedModel"),im=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lm=l(),ds=n("p"),dm=r("This model is also a "),cs=n("a"),cm=r("tf.keras.Model"),pm=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hm=l(),v(No.$$.fragment),mm=l(),De=n("div"),v(ps.$$.fragment),um=l(),Vt=n("p"),fm=r("The "),_a=n("a"),gm=r("TFMPNetForMaskedLM"),_m=r(" forward method, overrides the "),Wr=n("code"),km=r("__call__"),vm=r(" special method."),bm=l(),v(yo.$$.fragment),Tm=l(),Qr=n("p"),Mm=r("Example:"),wm=l(),v(hs.$$.fragment),Pm=l(),v(ms.$$.fragment),Ui=l(),Kt=n("h2"),Fo=n("a"),Hr=n("span"),v(us.$$.fragment),$m=l(),Rr=n("span"),Nm=r("TFMPNetForSequenceClassification"),Bi=l(),qe=n("div"),v(fs.$$.fragment),ym=l(),Ur=n("p"),Fm=r(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),zm=l(),gs=n("p"),Em=r("This model inherits from "),ka=n("a"),qm=r("TFPreTrainedModel"),jm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cm=l(),_s=n("p"),xm=r("This model is also a "),ks=n("a"),Am=r("tf.keras.Model"),Lm=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Im=l(),v(zo.$$.fragment),Sm=l(),Oe=n("div"),v(vs.$$.fragment),Dm=l(),Xt=n("p"),Om=r("The "),va=n("a"),Wm=r("TFMPNetForSequenceClassification"),Qm=r(" forward method, overrides the "),Br=n("code"),Hm=r("__call__"),Rm=r(" special method."),Um=l(),v(Eo.$$.fragment),Bm=l(),Vr=n("p"),Vm=r("Example:"),Km=l(),v(bs.$$.fragment),Xm=l(),v(Ts.$$.fragment),Vi=l(),Jt=n("h2"),qo=n("a"),Kr=n("span"),v(Ms.$$.fragment),Jm=l(),Xr=n("span"),Gm=r("TFMPNetForMultipleChoice"),Ki=l(),je=n("div"),v(ws.$$.fragment),Ym=l(),Jr=n("p"),Zm=r(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),eu=l(),Ps=n("p"),tu=r("This model inherits from "),ba=n("a"),ou=r("TFPreTrainedModel"),nu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),su=l(),$s=n("p"),au=r("This model is also a "),Ns=n("a"),ru=r("tf.keras.Model"),iu=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lu=l(),v(jo.$$.fragment),du=l(),Ye=n("div"),v(ys.$$.fragment),cu=l(),Gt=n("p"),pu=r("The "),Ta=n("a"),hu=r("TFMPNetForMultipleChoice"),mu=r(" forward method, overrides the "),Gr=n("code"),uu=r("__call__"),fu=r(" special method."),gu=l(),v(Co.$$.fragment),_u=l(),Yr=n("p"),ku=r("Example:"),vu=l(),v(Fs.$$.fragment),Xi=l(),Yt=n("h2"),xo=n("a"),Zr=n("span"),v(zs.$$.fragment),bu=l(),ei=n("span"),Tu=r("TFMPNetForTokenClassification"),Ji=l(),Ce=n("div"),v(Es.$$.fragment),Mu=l(),ti=n("p"),wu=r(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Pu=l(),qs=n("p"),$u=r("This model inherits from "),Ma=n("a"),Nu=r("TFPreTrainedModel"),yu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu=l(),js=n("p"),zu=r("This model is also a "),Cs=n("a"),Eu=r("tf.keras.Model"),qu=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ju=l(),v(Ao.$$.fragment),Cu=l(),We=n("div"),v(xs.$$.fragment),xu=l(),Zt=n("p"),Au=r("The "),wa=n("a"),Lu=r("TFMPNetForTokenClassification"),Iu=r(" forward method, overrides the "),oi=n("code"),Su=r("__call__"),Du=r(" special method."),Ou=l(),v(Lo.$$.fragment),Wu=l(),ni=n("p"),Qu=r("Example:"),Hu=l(),v(As.$$.fragment),Ru=l(),v(Ls.$$.fragment),Gi=l(),eo=n("h2"),Io=n("a"),si=n("span"),v(Is.$$.fragment),Uu=l(),ai=n("span"),Bu=r("TFMPNetForQuestionAnswering"),Yi=l(),xe=n("div"),v(Ss.$$.fragment),Vu=l(),to=n("p"),Ku=r(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ri=n("code"),Xu=r("span start logits"),Ju=r(" and "),ii=n("code"),Gu=r("span end logits"),Yu=r(")."),Zu=l(),Ds=n("p"),ef=r("This model inherits from "),Pa=n("a"),tf=r("TFPreTrainedModel"),of=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nf=l(),Os=n("p"),sf=r("This model is also a "),Ws=n("a"),af=r("tf.keras.Model"),rf=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lf=l(),v(So.$$.fragment),df=l(),Qe=n("div"),v(Qs.$$.fragment),cf=l(),oo=n("p"),pf=r("The "),$a=n("a"),hf=r("TFMPNetForQuestionAnswering"),mf=r(" forward method, overrides the "),li=n("code"),uf=r("__call__"),ff=r(" special method."),gf=l(),v(Do.$$.fragment),_f=l(),di=n("p"),kf=r("Example:"),vf=l(),v(Hs.$$.fragment),bf=l(),v(Rs.$$.fragment),this.h()},l(o){const u=ek('[data-svelte="svelte-1phssyn"]',document.head);p=s(u,"META",{name:!0,content:!0}),u.forEach(t),F=d(o),f=s(o,"H1",{class:!0});var Us=a(f);_=s(Us,"A",{id:!0,class:!0,href:!0});var ci=a(_);$=s(ci,"SPAN",{});var pi=a($);b(k.$$.fragment,pi),pi.forEach(t),ci.forEach(t),g=d(Us),y=s(Us,"SPAN",{});var hi=a(y);le=i(hi,"MPNet"),hi.forEach(t),Us.forEach(t),B=d(o),z=s(o,"H2",{class:!0});var Bs=a(z);X=s(Bs,"A",{id:!0,class:!0,href:!0});var mi=a(X);D=s(mi,"SPAN",{});var ui=a(D);b(G.$$.fragment,ui),ui.forEach(t),mi.forEach(t),de=d(Bs),O=s(Bs,"SPAN",{});var fi=a(O);ce=i(fi,"Overview"),fi.forEach(t),Bs.forEach(t),se=d(o),U=s(o,"P",{});var Vs=a(U);L=i(Vs,"The MPNet model was proposed in "),Y=s(Vs,"A",{href:!0,rel:!0});var gi=a(Y);V=i(gi,"MPNet: Masked and Permuted Pre-training for Language Understanding"),gi.forEach(t),E=i(Vs," by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),Vs.forEach(t),q=d(o),Z=s(o,"P",{});var _i=a(Z);Q=i(_i,`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),_i.forEach(t),ae=d(o),ee=s(o,"P",{});var ki=a(ee);H=i(ki,"The abstract from the paper is the following:"),ki.forEach(t),re=d(o),te=s(o,"P",{});var vi=a(te);j=s(vi,"EM",{});var bi=a(j);pe=i(bi,`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),bi.forEach(t),vi.forEach(t),W=d(o),oe=s(o,"P",{});var Ti=a(oe);he=i(Ti,"Tips:"),Ti.forEach(t),x=d(o),ne=s(o,"UL",{});var Mi=a(ne);C=s(Mi,"LI",{});var ft=a(C);me=i(ft,"MPNet doesn\u2019t have "),c=s(ft,"CODE",{});var wi=a(c);N=i(wi,"token_type_ids"),wi.forEach(t),K=i(ft,`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),_e=s(ft,"CODE",{});var wf=a(_e);Te=i(wf,"tokenizer.sep_token"),wf.forEach(t),I=i(ft," (or "),ke=s(ft,"CODE",{});var Pf=a(ke);Me=i(Pf,"[sep]"),Pf.forEach(t),we=i(ft,")."),ft.forEach(t),Mi.forEach(t),A=d(o),S=s(o,"P",{});var el=a(S);Pe=i(el,"The original code can be found "),ge=s(el,"A",{href:!0,rel:!0});var $f=a(ge);ue=i($f,"here"),$f.forEach(t),$e=i(el,"."),el.forEach(t),ie=d(o),fe=s(o,"H2",{class:!0});var tl=a(fe);no=s(tl,"A",{id:!0,class:!0,href:!0});var Nf=a(no);Qa=s(Nf,"SPAN",{});var yf=a(Qa);b(Qo.$$.fragment,yf),yf.forEach(t),Nf.forEach(t),Kl=d(tl),Ha=s(tl,"SPAN",{});var Ff=a(Ha);Xl=i(Ff,"MPNetConfig"),Ff.forEach(t),tl.forEach(t),Pi=d(o),He=s(o,"DIV",{class:!0});var _t=a(He);b(Ho.$$.fragment,_t),Jl=d(_t),ut=s(_t,"P",{});var Oo=a(ut);Gl=i(Oo,"This is the configuration class to store the configuration of a "),Ks=s(Oo,"A",{href:!0});var zf=a(Ks);Yl=i(zf,"MPNetModel"),zf.forEach(t),Zl=i(Oo," or a "),Xs=s(Oo,"A",{href:!0});var Ef=a(Xs);ed=i(Ef,"TFMPNetModel"),Ef.forEach(t),td=i(Oo,`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Ro=s(Oo,"A",{href:!0,rel:!0});var qf=a(Ro);od=i(qf,"mpnet-base"),qf.forEach(t),nd=i(Oo," architecture."),Oo.forEach(t),sd=d(_t),yt=s(_t,"P",{});var Na=a(yt);ad=i(Na,"Configuration objects inherit from "),Js=s(Na,"A",{href:!0});var jf=a(Js);rd=i(jf,"PretrainedConfig"),jf.forEach(t),id=i(Na,` and can be used to control the model outputs. Read the
documentation from `),Gs=s(Na,"A",{href:!0});var Cf=a(Gs);ld=i(Cf,"PretrainedConfig"),Cf.forEach(t),dd=i(Na," for more information."),Na.forEach(t),cd=d(_t),Ra=s(_t,"P",{});var xf=a(Ra);pd=i(xf,"Examples:"),xf.forEach(t),hd=d(_t),b(Uo.$$.fragment,_t),_t.forEach(t),$i=d(o),Ft=s(o,"H2",{class:!0});var ol=a(Ft);so=s(ol,"A",{id:!0,class:!0,href:!0});var Af=a(so);Ua=s(Af,"SPAN",{});var Lf=a(Ua);b(Bo.$$.fragment,Lf),Lf.forEach(t),Af.forEach(t),md=d(ol),Ba=s(ol,"SPAN",{});var If=a(Ba);ud=i(If,"MPNetTokenizer"),If.forEach(t),ol.forEach(t),Ni=d(o),Fe=s(o,"DIV",{class:!0});var et=a(Fe);b(Vo.$$.fragment,et),fd=d(et),Ko=s(et,"P",{});var nl=a(Ko);gd=i(nl,"This tokenizer inherits from "),Ys=s(nl,"A",{href:!0});var Sf=a(Ys);_d=i(Sf,"BertTokenizer"),Sf.forEach(t),kd=i(nl,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),nl.forEach(t),vd=d(et),gt=s(et,"DIV",{class:!0});var ya=a(gt);b(Xo.$$.fragment,ya),bd=d(ya),Va=s(ya,"P",{});var Df=a(Va);Td=i(Df,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),Df.forEach(t),Md=d(ya),Jo=s(ya,"UL",{});var sl=a(Jo);Zs=s(sl,"LI",{});var Tf=a(Zs);wd=i(Tf,"single sequence: "),Ka=s(Tf,"CODE",{});var Of=a(Ka);Pd=i(Of,"<s> X </s>"),Of.forEach(t),Tf.forEach(t),$d=d(sl),ea=s(sl,"LI",{});var Mf=a(ea);Nd=i(Mf,"pair of sequences: "),Xa=s(Mf,"CODE",{});var Wf=a(Xa);yd=i(Wf,"<s> A </s></s> B </s>"),Wf.forEach(t),Mf.forEach(t),sl.forEach(t),ya.forEach(t),Fd=d(et),ao=s(et,"DIV",{class:!0});var al=a(ao);b(Go.$$.fragment,al),zd=d(al),Yo=s(al,"P",{});var rl=a(Yo);Ed=i(rl,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ja=s(rl,"CODE",{});var Qf=a(Ja);qd=i(Qf,"prepare_for_model"),Qf.forEach(t),jd=i(rl," methods."),rl.forEach(t),al.forEach(t),Cd=d(et),ro=s(et,"DIV",{class:!0});var il=a(ro);b(Zo.$$.fragment,il),xd=d(il),Ga=s(il,"P",{});var Hf=a(Ga);Ad=i(Hf,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),Hf.forEach(t),il.forEach(t),Ld=d(et),ta=s(et,"DIV",{class:!0});var Rf=a(ta);b(en.$$.fragment,Rf),Rf.forEach(t),et.forEach(t),yi=d(o),zt=s(o,"H2",{class:!0});var ll=a(zt);io=s(ll,"A",{id:!0,class:!0,href:!0});var Uf=a(io);Ya=s(Uf,"SPAN",{});var Bf=a(Ya);b(tn.$$.fragment,Bf),Bf.forEach(t),Uf.forEach(t),Id=d(ll),Za=s(ll,"SPAN",{});var Vf=a(Za);Sd=i(Vf,"MPNetTokenizerFast"),Vf.forEach(t),ll.forEach(t),Fi=d(o),Ze=s(o,"DIV",{class:!0});var Wo=a(Ze);b(on.$$.fragment,Wo),Dd=d(Wo),nn=s(Wo,"P",{});var dl=a(nn);Od=i(dl,"Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),er=s(dl,"EM",{});var Kf=a(er);Wd=i(Kf,"tokenizers"),Kf.forEach(t),Qd=i(dl," library). Based on WordPiece."),dl.forEach(t),Hd=d(Wo),sn=s(Wo,"P",{});var cl=a(sn);Rd=i(cl,"This tokenizer inherits from "),oa=s(cl,"A",{href:!0});var Xf=a(oa);Ud=i(Xf,"PreTrainedTokenizerFast"),Xf.forEach(t),Bd=i(cl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),cl.forEach(t),Vd=d(Wo),lo=s(Wo,"DIV",{class:!0});var pl=a(lo);b(an.$$.fragment,pl),Kd=d(pl),tr=s(pl,"P",{});var Jf=a(tr);Xd=i(Jf,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),Jf.forEach(t),pl.forEach(t),Wo.forEach(t),zi=d(o),Et=s(o,"H2",{class:!0});var hl=a(Et);co=s(hl,"A",{id:!0,class:!0,href:!0});var Gf=a(co);or=s(Gf,"SPAN",{});var Yf=a(or);b(rn.$$.fragment,Yf),Yf.forEach(t),Gf.forEach(t),Jd=d(hl),nr=s(hl,"SPAN",{});var Zf=a(nr);Gd=i(Zf,"MPNetModel"),Zf.forEach(t),hl.forEach(t),Ei=d(o),Re=s(o,"DIV",{class:!0});var kt=a(Re);b(ln.$$.fragment,kt),Yd=d(kt),sr=s(kt,"P",{});var eg=a(sr);Zd=i(eg,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),eg.forEach(t),ec=d(kt),dn=s(kt,"P",{});var ml=a(dn);tc=i(ml,"This model inherits from "),na=s(ml,"A",{href:!0});var tg=a(na);oc=i(tg,"PreTrainedModel"),tg.forEach(t),nc=i(ml,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ml.forEach(t),sc=d(kt),cn=s(kt,"P",{});var ul=a(cn);ac=i(ul,"This model is also a PyTorch "),pn=s(ul,"A",{href:!0,rel:!0});var og=a(pn);rc=i(og,"torch.nn.Module"),og.forEach(t),ic=i(ul,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ul.forEach(t),lc=d(kt),Xe=s(kt,"DIV",{class:!0});var vt=a(Xe);b(hn.$$.fragment,vt),dc=d(vt),qt=s(vt,"P",{});var Fa=a(qt);cc=i(Fa,"The "),sa=s(Fa,"A",{href:!0});var ng=a(sa);pc=i(ng,"MPNetModel"),ng.forEach(t),hc=i(Fa," forward method, overrides the "),ar=s(Fa,"CODE",{});var sg=a(ar);mc=i(sg,"__call__"),sg.forEach(t),uc=i(Fa," special method."),Fa.forEach(t),fc=d(vt),b(po.$$.fragment,vt),gc=d(vt),rr=s(vt,"P",{});var ag=a(rr);_c=i(ag,"Example:"),ag.forEach(t),kc=d(vt),b(mn.$$.fragment,vt),vt.forEach(t),kt.forEach(t),qi=d(o),jt=s(o,"H2",{class:!0});var fl=a(jt);ho=s(fl,"A",{id:!0,class:!0,href:!0});var rg=a(ho);ir=s(rg,"SPAN",{});var ig=a(ir);b(un.$$.fragment,ig),ig.forEach(t),rg.forEach(t),vc=d(fl),lr=s(fl,"SPAN",{});var lg=a(lr);bc=i(lg,"MPNetForMaskedLM"),lg.forEach(t),fl.forEach(t),ji=d(o),Ct=s(o,"DIV",{class:!0});var gl=a(Ct);b(fn.$$.fragment,gl),Tc=d(gl),Le=s(gl,"DIV",{class:!0});var tt=a(Le);b(gn.$$.fragment,tt),Mc=d(tt),xt=s(tt,"P",{});var za=a(xt);wc=i(za,"The "),aa=s(za,"A",{href:!0});var dg=a(aa);Pc=i(dg,"MPNetForMaskedLM"),dg.forEach(t),$c=i(za," forward method, overrides the "),dr=s(za,"CODE",{});var cg=a(dr);Nc=i(cg,"__call__"),cg.forEach(t),yc=i(za," special method."),za.forEach(t),Fc=d(tt),b(mo.$$.fragment,tt),zc=d(tt),cr=s(tt,"P",{});var pg=a(cr);Ec=i(pg,"Example:"),pg.forEach(t),qc=d(tt),b(_n.$$.fragment,tt),jc=d(tt),b(kn.$$.fragment,tt),tt.forEach(t),gl.forEach(t),Ci=d(o),At=s(o,"H2",{class:!0});var _l=a(At);uo=s(_l,"A",{id:!0,class:!0,href:!0});var hg=a(uo);pr=s(hg,"SPAN",{});var mg=a(pr);b(vn.$$.fragment,mg),mg.forEach(t),hg.forEach(t),Cc=d(_l),hr=s(_l,"SPAN",{});var ug=a(hr);xc=i(ug,"MPNetForSequenceClassification"),ug.forEach(t),_l.forEach(t),xi=d(o),Ue=s(o,"DIV",{class:!0});var bt=a(Ue);b(bn.$$.fragment,bt),Ac=d(bt),mr=s(bt,"P",{});var fg=a(mr);Lc=i(fg,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),fg.forEach(t),Ic=d(bt),Tn=s(bt,"P",{});var kl=a(Tn);Sc=i(kl,"This model inherits from "),ra=s(kl,"A",{href:!0});var gg=a(ra);Dc=i(gg,"PreTrainedModel"),gg.forEach(t),Oc=i(kl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kl.forEach(t),Wc=d(bt),Mn=s(bt,"P",{});var vl=a(Mn);Qc=i(vl,"This model is also a PyTorch "),wn=s(vl,"A",{href:!0,rel:!0});var _g=a(wn);Hc=i(_g,"torch.nn.Module"),_g.forEach(t),Rc=i(vl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vl.forEach(t),Uc=d(bt),be=s(bt,"DIV",{class:!0});var Ne=a(be);b(Pn.$$.fragment,Ne),Bc=d(Ne),Lt=s(Ne,"P",{});var Ea=a(Lt);Vc=i(Ea,"The "),ia=s(Ea,"A",{href:!0});var kg=a(ia);Kc=i(kg,"MPNetForSequenceClassification"),kg.forEach(t),Xc=i(Ea," forward method, overrides the "),ur=s(Ea,"CODE",{});var vg=a(ur);Jc=i(vg,"__call__"),vg.forEach(t),Gc=i(Ea," special method."),Ea.forEach(t),Yc=d(Ne),b(fo.$$.fragment,Ne),Zc=d(Ne),fr=s(Ne,"P",{});var bg=a(fr);ep=i(bg,"Example of single-label classification:"),bg.forEach(t),tp=d(Ne),b($n.$$.fragment,Ne),op=d(Ne),b(Nn.$$.fragment,Ne),np=d(Ne),gr=s(Ne,"P",{});var Tg=a(gr);sp=i(Tg,"Example of multi-label classification:"),Tg.forEach(t),ap=d(Ne),b(yn.$$.fragment,Ne),rp=d(Ne),b(Fn.$$.fragment,Ne),Ne.forEach(t),bt.forEach(t),Ai=d(o),It=s(o,"H2",{class:!0});var bl=a(It);go=s(bl,"A",{id:!0,class:!0,href:!0});var Mg=a(go);_r=s(Mg,"SPAN",{});var wg=a(_r);b(zn.$$.fragment,wg),wg.forEach(t),Mg.forEach(t),ip=d(bl),kr=s(bl,"SPAN",{});var Pg=a(kr);lp=i(Pg,"MPNetForMultipleChoice"),Pg.forEach(t),bl.forEach(t),Li=d(o),Be=s(o,"DIV",{class:!0});var Tt=a(Be);b(En.$$.fragment,Tt),dp=d(Tt),vr=s(Tt,"P",{});var $g=a(vr);cp=i($g,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$g.forEach(t),pp=d(Tt),qn=s(Tt,"P",{});var Tl=a(qn);hp=i(Tl,"This model inherits from "),la=s(Tl,"A",{href:!0});var Ng=a(la);mp=i(Ng,"PreTrainedModel"),Ng.forEach(t),up=i(Tl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tl.forEach(t),fp=d(Tt),jn=s(Tt,"P",{});var Ml=a(jn);gp=i(Ml,"This model is also a PyTorch "),Cn=s(Ml,"A",{href:!0,rel:!0});var yg=a(Cn);_p=i(yg,"torch.nn.Module"),yg.forEach(t),kp=i(Ml,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ml.forEach(t),vp=d(Tt),Je=s(Tt,"DIV",{class:!0});var Mt=a(Je);b(xn.$$.fragment,Mt),bp=d(Mt),St=s(Mt,"P",{});var qa=a(St);Tp=i(qa,"The "),da=s(qa,"A",{href:!0});var Fg=a(da);Mp=i(Fg,"MPNetForMultipleChoice"),Fg.forEach(t),wp=i(qa," forward method, overrides the "),br=s(qa,"CODE",{});var zg=a(br);Pp=i(zg,"__call__"),zg.forEach(t),$p=i(qa," special method."),qa.forEach(t),Np=d(Mt),b(_o.$$.fragment,Mt),yp=d(Mt),Tr=s(Mt,"P",{});var Eg=a(Tr);Fp=i(Eg,"Example:"),Eg.forEach(t),zp=d(Mt),b(An.$$.fragment,Mt),Mt.forEach(t),Tt.forEach(t),Ii=d(o),Dt=s(o,"H2",{class:!0});var wl=a(Dt);ko=s(wl,"A",{id:!0,class:!0,href:!0});var qg=a(ko);Mr=s(qg,"SPAN",{});var jg=a(Mr);b(Ln.$$.fragment,jg),jg.forEach(t),qg.forEach(t),Ep=d(wl),wr=s(wl,"SPAN",{});var Cg=a(wr);qp=i(Cg,"MPNetForTokenClassification"),Cg.forEach(t),wl.forEach(t),Si=d(o),Ve=s(o,"DIV",{class:!0});var wt=a(Ve);b(In.$$.fragment,wt),jp=d(wt),Pr=s(wt,"P",{});var xg=a(Pr);Cp=i(xg,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),xg.forEach(t),xp=d(wt),Sn=s(wt,"P",{});var Pl=a(Sn);Ap=i(Pl,"This model inherits from "),ca=s(Pl,"A",{href:!0});var Ag=a(ca);Lp=i(Ag,"PreTrainedModel"),Ag.forEach(t),Ip=i(Pl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pl.forEach(t),Sp=d(wt),Dn=s(wt,"P",{});var $l=a(Dn);Dp=i($l,"This model is also a PyTorch "),On=s($l,"A",{href:!0,rel:!0});var Lg=a(On);Op=i(Lg,"torch.nn.Module"),Lg.forEach(t),Wp=i($l,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$l.forEach(t),Qp=d(wt),Ie=s(wt,"DIV",{class:!0});var ot=a(Ie);b(Wn.$$.fragment,ot),Hp=d(ot),Ot=s(ot,"P",{});var ja=a(Ot);Rp=i(ja,"The "),pa=s(ja,"A",{href:!0});var Ig=a(pa);Up=i(Ig,"MPNetForTokenClassification"),Ig.forEach(t),Bp=i(ja," forward method, overrides the "),$r=s(ja,"CODE",{});var Sg=a($r);Vp=i(Sg,"__call__"),Sg.forEach(t),Kp=i(ja," special method."),ja.forEach(t),Xp=d(ot),b(vo.$$.fragment,ot),Jp=d(ot),Nr=s(ot,"P",{});var Dg=a(Nr);Gp=i(Dg,"Example:"),Dg.forEach(t),Yp=d(ot),b(Qn.$$.fragment,ot),Zp=d(ot),b(Hn.$$.fragment,ot),ot.forEach(t),wt.forEach(t),Di=d(o),Wt=s(o,"H2",{class:!0});var Nl=a(Wt);bo=s(Nl,"A",{id:!0,class:!0,href:!0});var Og=a(bo);yr=s(Og,"SPAN",{});var Wg=a(yr);b(Rn.$$.fragment,Wg),Wg.forEach(t),Og.forEach(t),eh=d(Nl),Fr=s(Nl,"SPAN",{});var Qg=a(Fr);th=i(Qg,"MPNetForQuestionAnswering"),Qg.forEach(t),Nl.forEach(t),Oi=d(o),Ke=s(o,"DIV",{class:!0});var Pt=a(Ke);b(Un.$$.fragment,Pt),oh=d(Pt),Qt=s(Pt,"P",{});var Ca=a(Qt);nh=i(Ca,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zr=s(Ca,"CODE",{});var Hg=a(zr);sh=i(Hg,"span start logits"),Hg.forEach(t),ah=i(Ca," and "),Er=s(Ca,"CODE",{});var Rg=a(Er);rh=i(Rg,"span end logits"),Rg.forEach(t),ih=i(Ca,")."),Ca.forEach(t),lh=d(Pt),Bn=s(Pt,"P",{});var yl=a(Bn);dh=i(yl,"This model inherits from "),ha=s(yl,"A",{href:!0});var Ug=a(ha);ch=i(Ug,"PreTrainedModel"),Ug.forEach(t),ph=i(yl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yl.forEach(t),hh=d(Pt),Vn=s(Pt,"P",{});var Fl=a(Vn);mh=i(Fl,"This model is also a PyTorch "),Kn=s(Fl,"A",{href:!0,rel:!0});var Bg=a(Kn);uh=i(Bg,"torch.nn.Module"),Bg.forEach(t),fh=i(Fl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fl.forEach(t),gh=d(Pt),Se=s(Pt,"DIV",{class:!0});var nt=a(Se);b(Xn.$$.fragment,nt),_h=d(nt),Ht=s(nt,"P",{});var xa=a(Ht);kh=i(xa,"The "),ma=s(xa,"A",{href:!0});var Vg=a(ma);vh=i(Vg,"MPNetForQuestionAnswering"),Vg.forEach(t),bh=i(xa," forward method, overrides the "),qr=s(xa,"CODE",{});var Kg=a(qr);Th=i(Kg,"__call__"),Kg.forEach(t),Mh=i(xa," special method."),xa.forEach(t),wh=d(nt),b(To.$$.fragment,nt),Ph=d(nt),jr=s(nt,"P",{});var Xg=a(jr);$h=i(Xg,"Example:"),Xg.forEach(t),Nh=d(nt),b(Jn.$$.fragment,nt),yh=d(nt),b(Gn.$$.fragment,nt),nt.forEach(t),Pt.forEach(t),Wi=d(o),Rt=s(o,"H2",{class:!0});var zl=a(Rt);Mo=s(zl,"A",{id:!0,class:!0,href:!0});var Jg=a(Mo);Cr=s(Jg,"SPAN",{});var Gg=a(Cr);b(Yn.$$.fragment,Gg),Gg.forEach(t),Jg.forEach(t),Fh=d(zl),xr=s(zl,"SPAN",{});var Yg=a(xr);zh=i(Yg,"TFMPNetModel"),Yg.forEach(t),zl.forEach(t),Qi=d(o),ze=s(o,"DIV",{class:!0});var st=a(ze);b(Zn.$$.fragment,st),Eh=d(st),Ar=s(st,"P",{});var Zg=a(Ar);qh=i(Zg,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),Zg.forEach(t),jh=d(st),es=s(st,"P",{});var El=a(es);Ch=i(El,"This model inherits from "),ua=s(El,"A",{href:!0});var e_=a(ua);xh=i(e_,"TFPreTrainedModel"),e_.forEach(t),Ah=i(El,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),El.forEach(t),Lh=d(st),ts=s(st,"P",{});var ql=a(ts);Ih=i(ql,"This model is also a "),os=s(ql,"A",{href:!0,rel:!0});var t_=a(os);Sh=i(t_,"tf.keras.Model"),t_.forEach(t),Dh=i(ql,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ql.forEach(t),Oh=d(st),b(wo.$$.fragment,st),Wh=d(st),Ge=s(st,"DIV",{class:!0});var $t=a(Ge);b(ns.$$.fragment,$t),Qh=d($t),Ut=s($t,"P",{});var Aa=a(Ut);Hh=i(Aa,"The "),fa=s(Aa,"A",{href:!0});var o_=a(fa);Rh=i(o_,"TFMPNetModel"),o_.forEach(t),Uh=i(Aa," forward method, overrides the "),Lr=s(Aa,"CODE",{});var n_=a(Lr);Bh=i(n_,"__call__"),n_.forEach(t),Vh=i(Aa," special method."),Aa.forEach(t),Kh=d($t),b(Po.$$.fragment,$t),Xh=d($t),Ir=s($t,"P",{});var s_=a(Ir);Jh=i(s_,"Example:"),s_.forEach(t),Gh=d($t),b(ss.$$.fragment,$t),$t.forEach(t),st.forEach(t),Hi=d(o),Bt=s(o,"H2",{class:!0});var jl=a(Bt);$o=s(jl,"A",{id:!0,class:!0,href:!0});var a_=a($o);Sr=s(a_,"SPAN",{});var r_=a(Sr);b(as.$$.fragment,r_),r_.forEach(t),a_.forEach(t),Yh=d(jl),Dr=s(jl,"SPAN",{});var i_=a(Dr);Zh=i(i_,"TFMPNetForMaskedLM"),i_.forEach(t),jl.forEach(t),Ri=d(o),Ee=s(o,"DIV",{class:!0});var at=a(Ee);b(rs.$$.fragment,at),em=d(at),is=s(at,"P",{});var Cl=a(is);tm=i(Cl,"MPNet Model with a "),Or=s(Cl,"CODE",{});var l_=a(Or);om=i(l_,"language modeling"),l_.forEach(t),nm=i(Cl," head on top."),Cl.forEach(t),sm=d(at),ls=s(at,"P",{});var xl=a(ls);am=i(xl,"This model inherits from "),ga=s(xl,"A",{href:!0});var d_=a(ga);rm=i(d_,"TFPreTrainedModel"),d_.forEach(t),im=i(xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xl.forEach(t),lm=d(at),ds=s(at,"P",{});var Al=a(ds);dm=i(Al,"This model is also a "),cs=s(Al,"A",{href:!0,rel:!0});var c_=a(cs);cm=i(c_,"tf.keras.Model"),c_.forEach(t),pm=i(Al,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Al.forEach(t),hm=d(at),b(No.$$.fragment,at),mm=d(at),De=s(at,"DIV",{class:!0});var rt=a(De);b(ps.$$.fragment,rt),um=d(rt),Vt=s(rt,"P",{});var La=a(Vt);fm=i(La,"The "),_a=s(La,"A",{href:!0});var p_=a(_a);gm=i(p_,"TFMPNetForMaskedLM"),p_.forEach(t),_m=i(La," forward method, overrides the "),Wr=s(La,"CODE",{});var h_=a(Wr);km=i(h_,"__call__"),h_.forEach(t),vm=i(La," special method."),La.forEach(t),bm=d(rt),b(yo.$$.fragment,rt),Tm=d(rt),Qr=s(rt,"P",{});var m_=a(Qr);Mm=i(m_,"Example:"),m_.forEach(t),wm=d(rt),b(hs.$$.fragment,rt),Pm=d(rt),b(ms.$$.fragment,rt),rt.forEach(t),at.forEach(t),Ui=d(o),Kt=s(o,"H2",{class:!0});var Ll=a(Kt);Fo=s(Ll,"A",{id:!0,class:!0,href:!0});var u_=a(Fo);Hr=s(u_,"SPAN",{});var f_=a(Hr);b(us.$$.fragment,f_),f_.forEach(t),u_.forEach(t),$m=d(Ll),Rr=s(Ll,"SPAN",{});var g_=a(Rr);Nm=i(g_,"TFMPNetForSequenceClassification"),g_.forEach(t),Ll.forEach(t),Bi=d(o),qe=s(o,"DIV",{class:!0});var it=a(qe);b(fs.$$.fragment,it),ym=d(it),Ur=s(it,"P",{});var __=a(Ur);Fm=i(__,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),__.forEach(t),zm=d(it),gs=s(it,"P",{});var Il=a(gs);Em=i(Il,"This model inherits from "),ka=s(Il,"A",{href:!0});var k_=a(ka);qm=i(k_,"TFPreTrainedModel"),k_.forEach(t),jm=i(Il,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Il.forEach(t),Cm=d(it),_s=s(it,"P",{});var Sl=a(_s);xm=i(Sl,"This model is also a "),ks=s(Sl,"A",{href:!0,rel:!0});var v_=a(ks);Am=i(v_,"tf.keras.Model"),v_.forEach(t),Lm=i(Sl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sl.forEach(t),Im=d(it),b(zo.$$.fragment,it),Sm=d(it),Oe=s(it,"DIV",{class:!0});var lt=a(Oe);b(vs.$$.fragment,lt),Dm=d(lt),Xt=s(lt,"P",{});var Ia=a(Xt);Om=i(Ia,"The "),va=s(Ia,"A",{href:!0});var b_=a(va);Wm=i(b_,"TFMPNetForSequenceClassification"),b_.forEach(t),Qm=i(Ia," forward method, overrides the "),Br=s(Ia,"CODE",{});var T_=a(Br);Hm=i(T_,"__call__"),T_.forEach(t),Rm=i(Ia," special method."),Ia.forEach(t),Um=d(lt),b(Eo.$$.fragment,lt),Bm=d(lt),Vr=s(lt,"P",{});var M_=a(Vr);Vm=i(M_,"Example:"),M_.forEach(t),Km=d(lt),b(bs.$$.fragment,lt),Xm=d(lt),b(Ts.$$.fragment,lt),lt.forEach(t),it.forEach(t),Vi=d(o),Jt=s(o,"H2",{class:!0});var Dl=a(Jt);qo=s(Dl,"A",{id:!0,class:!0,href:!0});var w_=a(qo);Kr=s(w_,"SPAN",{});var P_=a(Kr);b(Ms.$$.fragment,P_),P_.forEach(t),w_.forEach(t),Jm=d(Dl),Xr=s(Dl,"SPAN",{});var $_=a(Xr);Gm=i($_,"TFMPNetForMultipleChoice"),$_.forEach(t),Dl.forEach(t),Ki=d(o),je=s(o,"DIV",{class:!0});var dt=a(je);b(ws.$$.fragment,dt),Ym=d(dt),Jr=s(dt,"P",{});var N_=a(Jr);Zm=i(N_,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),N_.forEach(t),eu=d(dt),Ps=s(dt,"P",{});var Ol=a(Ps);tu=i(Ol,"This model inherits from "),ba=s(Ol,"A",{href:!0});var y_=a(ba);ou=i(y_,"TFPreTrainedModel"),y_.forEach(t),nu=i(Ol,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ol.forEach(t),su=d(dt),$s=s(dt,"P",{});var Wl=a($s);au=i(Wl,"This model is also a "),Ns=s(Wl,"A",{href:!0,rel:!0});var F_=a(Ns);ru=i(F_,"tf.keras.Model"),F_.forEach(t),iu=i(Wl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wl.forEach(t),lu=d(dt),b(jo.$$.fragment,dt),du=d(dt),Ye=s(dt,"DIV",{class:!0});var Nt=a(Ye);b(ys.$$.fragment,Nt),cu=d(Nt),Gt=s(Nt,"P",{});var Sa=a(Gt);pu=i(Sa,"The "),Ta=s(Sa,"A",{href:!0});var z_=a(Ta);hu=i(z_,"TFMPNetForMultipleChoice"),z_.forEach(t),mu=i(Sa," forward method, overrides the "),Gr=s(Sa,"CODE",{});var E_=a(Gr);uu=i(E_,"__call__"),E_.forEach(t),fu=i(Sa," special method."),Sa.forEach(t),gu=d(Nt),b(Co.$$.fragment,Nt),_u=d(Nt),Yr=s(Nt,"P",{});var q_=a(Yr);ku=i(q_,"Example:"),q_.forEach(t),vu=d(Nt),b(Fs.$$.fragment,Nt),Nt.forEach(t),dt.forEach(t),Xi=d(o),Yt=s(o,"H2",{class:!0});var Ql=a(Yt);xo=s(Ql,"A",{id:!0,class:!0,href:!0});var j_=a(xo);Zr=s(j_,"SPAN",{});var C_=a(Zr);b(zs.$$.fragment,C_),C_.forEach(t),j_.forEach(t),bu=d(Ql),ei=s(Ql,"SPAN",{});var x_=a(ei);Tu=i(x_,"TFMPNetForTokenClassification"),x_.forEach(t),Ql.forEach(t),Ji=d(o),Ce=s(o,"DIV",{class:!0});var ct=a(Ce);b(Es.$$.fragment,ct),Mu=d(ct),ti=s(ct,"P",{});var A_=a(ti);wu=i(A_,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),A_.forEach(t),Pu=d(ct),qs=s(ct,"P",{});var Hl=a(qs);$u=i(Hl,"This model inherits from "),Ma=s(Hl,"A",{href:!0});var L_=a(Ma);Nu=i(L_,"TFPreTrainedModel"),L_.forEach(t),yu=i(Hl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl.forEach(t),Fu=d(ct),js=s(ct,"P",{});var Rl=a(js);zu=i(Rl,"This model is also a "),Cs=s(Rl,"A",{href:!0,rel:!0});var I_=a(Cs);Eu=i(I_,"tf.keras.Model"),I_.forEach(t),qu=i(Rl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Rl.forEach(t),ju=d(ct),b(Ao.$$.fragment,ct),Cu=d(ct),We=s(ct,"DIV",{class:!0});var pt=a(We);b(xs.$$.fragment,pt),xu=d(pt),Zt=s(pt,"P",{});var Da=a(Zt);Au=i(Da,"The "),wa=s(Da,"A",{href:!0});var S_=a(wa);Lu=i(S_,"TFMPNetForTokenClassification"),S_.forEach(t),Iu=i(Da," forward method, overrides the "),oi=s(Da,"CODE",{});var D_=a(oi);Su=i(D_,"__call__"),D_.forEach(t),Du=i(Da," special method."),Da.forEach(t),Ou=d(pt),b(Lo.$$.fragment,pt),Wu=d(pt),ni=s(pt,"P",{});var O_=a(ni);Qu=i(O_,"Example:"),O_.forEach(t),Hu=d(pt),b(As.$$.fragment,pt),Ru=d(pt),b(Ls.$$.fragment,pt),pt.forEach(t),ct.forEach(t),Gi=d(o),eo=s(o,"H2",{class:!0});var Ul=a(eo);Io=s(Ul,"A",{id:!0,class:!0,href:!0});var W_=a(Io);si=s(W_,"SPAN",{});var Q_=a(si);b(Is.$$.fragment,Q_),Q_.forEach(t),W_.forEach(t),Uu=d(Ul),ai=s(Ul,"SPAN",{});var H_=a(ai);Bu=i(H_,"TFMPNetForQuestionAnswering"),H_.forEach(t),Ul.forEach(t),Yi=d(o),xe=s(o,"DIV",{class:!0});var ht=a(xe);b(Ss.$$.fragment,ht),Vu=d(ht),to=s(ht,"P",{});var Oa=a(to);Ku=i(Oa,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ri=s(Oa,"CODE",{});var R_=a(ri);Xu=i(R_,"span start logits"),R_.forEach(t),Ju=i(Oa," and "),ii=s(Oa,"CODE",{});var U_=a(ii);Gu=i(U_,"span end logits"),U_.forEach(t),Yu=i(Oa,")."),Oa.forEach(t),Zu=d(ht),Ds=s(ht,"P",{});var Bl=a(Ds);ef=i(Bl,"This model inherits from "),Pa=s(Bl,"A",{href:!0});var B_=a(Pa);tf=i(B_,"TFPreTrainedModel"),B_.forEach(t),of=i(Bl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bl.forEach(t),nf=d(ht),Os=s(ht,"P",{});var Vl=a(Os);sf=i(Vl,"This model is also a "),Ws=s(Vl,"A",{href:!0,rel:!0});var V_=a(Ws);af=i(V_,"tf.keras.Model"),V_.forEach(t),rf=i(Vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vl.forEach(t),lf=d(ht),b(So.$$.fragment,ht),df=d(ht),Qe=s(ht,"DIV",{class:!0});var mt=a(Qe);b(Qs.$$.fragment,mt),cf=d(mt),oo=s(mt,"P",{});var Wa=a(oo);pf=i(Wa,"The "),$a=s(Wa,"A",{href:!0});var K_=a($a);hf=i(K_,"TFMPNetForQuestionAnswering"),K_.forEach(t),mf=i(Wa," forward method, overrides the "),li=s(Wa,"CODE",{});var X_=a(li);uf=i(X_,"__call__"),X_.forEach(t),ff=i(Wa," special method."),Wa.forEach(t),gf=d(mt),b(Do.$$.fragment,mt),_f=d(mt),di=s(mt,"P",{});var J_=a(di);kf=i(J_,"Example:"),J_.forEach(t),vf=d(mt),b(Hs.$$.fragment,mt),bf=d(mt),b(Rs.$$.fragment,mt),mt.forEach(t),ht.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(Tk)),h(_,"id","mpnet"),h(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_,"href","#mpnet"),h(f,"class","relative group"),h(X,"id","overview"),h(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(X,"href","#overview"),h(z,"class","relative group"),h(Y,"href","https://arxiv.org/abs/2004.09297"),h(Y,"rel","nofollow"),h(ge,"href","https://github.com/microsoft/MPNet"),h(ge,"rel","nofollow"),h(no,"id","transformers.MPNetConfig"),h(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(no,"href","#transformers.MPNetConfig"),h(fe,"class","relative group"),h(Ks,"href","/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetModel"),h(Xs,"href","/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.TFMPNetModel"),h(Ro,"href","https://huggingface.co/mpnet-base"),h(Ro,"rel","nofollow"),h(Js,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(Gs,"href","/docs/transformers/v4.18.0/en/main_classes/configuration#transformers.PretrainedConfig"),h(He,"class","docstring"),h(so,"id","transformers.MPNetTokenizer"),h(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(so,"href","#transformers.MPNetTokenizer"),h(Ft,"class","relative group"),h(Ys,"href","/docs/transformers/v4.18.0/en/model_doc/bert#transformers.BertTokenizer"),h(gt,"class","docstring"),h(ao,"class","docstring"),h(ro,"class","docstring"),h(ta,"class","docstring"),h(Fe,"class","docstring"),h(io,"id","transformers.MPNetTokenizerFast"),h(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(io,"href","#transformers.MPNetTokenizerFast"),h(zt,"class","relative group"),h(oa,"href","/docs/transformers/v4.18.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(lo,"class","docstring"),h(Ze,"class","docstring"),h(co,"id","transformers.MPNetModel"),h(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(co,"href","#transformers.MPNetModel"),h(Et,"class","relative group"),h(na,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),h(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(pn,"rel","nofollow"),h(sa,"href","/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetModel"),h(Xe,"class","docstring"),h(Re,"class","docstring"),h(ho,"id","transformers.MPNetForMaskedLM"),h(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ho,"href","#transformers.MPNetForMaskedLM"),h(jt,"class","relative group"),h(aa,"href","/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetForMaskedLM"),h(Le,"class","docstring"),h(Ct,"class","docstring"),h(uo,"id","transformers.MPNetForSequenceClassification"),h(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(uo,"href","#transformers.MPNetForSequenceClassification"),h(At,"class","relative group"),h(ra,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),h(wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(wn,"rel","nofollow"),h(ia,"href","/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetForSequenceClassification"),h(be,"class","docstring"),h(Ue,"class","docstring"),h(go,"id","transformers.MPNetForMultipleChoice"),h(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(go,"href","#transformers.MPNetForMultipleChoice"),h(It,"class","relative group"),h(la,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),h(Cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Cn,"rel","nofollow"),h(da,"href","/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetForMultipleChoice"),h(Je,"class","docstring"),h(Be,"class","docstring"),h(ko,"id","transformers.MPNetForTokenClassification"),h(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ko,"href","#transformers.MPNetForTokenClassification"),h(Dt,"class","relative group"),h(ca,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),h(On,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(On,"rel","nofollow"),h(pa,"href","/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetForTokenClassification"),h(Ie,"class","docstring"),h(Ve,"class","docstring"),h(bo,"id","transformers.MPNetForQuestionAnswering"),h(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bo,"href","#transformers.MPNetForQuestionAnswering"),h(Wt,"class","relative group"),h(ha,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.PreTrainedModel"),h(Kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Kn,"rel","nofollow"),h(ma,"href","/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.MPNetForQuestionAnswering"),h(Se,"class","docstring"),h(Ke,"class","docstring"),h(Mo,"id","transformers.TFMPNetModel"),h(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Mo,"href","#transformers.TFMPNetModel"),h(Rt,"class","relative group"),h(ua,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(os,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(os,"rel","nofollow"),h(fa,"href","/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.TFMPNetModel"),h(Ge,"class","docstring"),h(ze,"class","docstring"),h($o,"id","transformers.TFMPNetForMaskedLM"),h($o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($o,"href","#transformers.TFMPNetForMaskedLM"),h(Bt,"class","relative group"),h(ga,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(cs,"rel","nofollow"),h(_a,"href","/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.TFMPNetForMaskedLM"),h(De,"class","docstring"),h(Ee,"class","docstring"),h(Fo,"id","transformers.TFMPNetForSequenceClassification"),h(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fo,"href","#transformers.TFMPNetForSequenceClassification"),h(Kt,"class","relative group"),h(ka,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(ks,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(ks,"rel","nofollow"),h(va,"href","/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.TFMPNetForSequenceClassification"),h(Oe,"class","docstring"),h(qe,"class","docstring"),h(qo,"id","transformers.TFMPNetForMultipleChoice"),h(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qo,"href","#transformers.TFMPNetForMultipleChoice"),h(Jt,"class","relative group"),h(ba,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ns,"rel","nofollow"),h(Ta,"href","/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.TFMPNetForMultipleChoice"),h(Ye,"class","docstring"),h(je,"class","docstring"),h(xo,"id","transformers.TFMPNetForTokenClassification"),h(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xo,"href","#transformers.TFMPNetForTokenClassification"),h(Yt,"class","relative group"),h(Ma,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Cs,"rel","nofollow"),h(wa,"href","/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.TFMPNetForTokenClassification"),h(We,"class","docstring"),h(Ce,"class","docstring"),h(Io,"id","transformers.TFMPNetForQuestionAnswering"),h(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Io,"href","#transformers.TFMPNetForQuestionAnswering"),h(eo,"class","relative group"),h(Pa,"href","/docs/transformers/v4.18.0/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ws,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ws,"rel","nofollow"),h($a,"href","/docs/transformers/v4.18.0/en/model_doc/mpnet#transformers.TFMPNetForQuestionAnswering"),h(Qe,"class","docstring"),h(xe,"class","docstring")},m(o,u){e(document.head,p),m(o,F,u),m(o,f,u),e(f,_),e(_,$),T(k,$,null),e(f,g),e(f,y),e(y,le),m(o,B,u),m(o,z,u),e(z,X),e(X,D),T(G,D,null),e(z,de),e(z,O),e(O,ce),m(o,se,u),m(o,U,u),e(U,L),e(U,Y),e(Y,V),e(U,E),m(o,q,u),m(o,Z,u),e(Z,Q),m(o,ae,u),m(o,ee,u),e(ee,H),m(o,re,u),m(o,te,u),e(te,j),e(j,pe),m(o,W,u),m(o,oe,u),e(oe,he),m(o,x,u),m(o,ne,u),e(ne,C),e(C,me),e(C,c),e(c,N),e(C,K),e(C,_e),e(_e,Te),e(C,I),e(C,ke),e(ke,Me),e(C,we),m(o,A,u),m(o,S,u),e(S,Pe),e(S,ge),e(ge,ue),e(S,$e),m(o,ie,u),m(o,fe,u),e(fe,no),e(no,Qa),T(Qo,Qa,null),e(fe,Kl),e(fe,Ha),e(Ha,Xl),m(o,Pi,u),m(o,He,u),T(Ho,He,null),e(He,Jl),e(He,ut),e(ut,Gl),e(ut,Ks),e(Ks,Yl),e(ut,Zl),e(ut,Xs),e(Xs,ed),e(ut,td),e(ut,Ro),e(Ro,od),e(ut,nd),e(He,sd),e(He,yt),e(yt,ad),e(yt,Js),e(Js,rd),e(yt,id),e(yt,Gs),e(Gs,ld),e(yt,dd),e(He,cd),e(He,Ra),e(Ra,pd),e(He,hd),T(Uo,He,null),m(o,$i,u),m(o,Ft,u),e(Ft,so),e(so,Ua),T(Bo,Ua,null),e(Ft,md),e(Ft,Ba),e(Ba,ud),m(o,Ni,u),m(o,Fe,u),T(Vo,Fe,null),e(Fe,fd),e(Fe,Ko),e(Ko,gd),e(Ko,Ys),e(Ys,_d),e(Ko,kd),e(Fe,vd),e(Fe,gt),T(Xo,gt,null),e(gt,bd),e(gt,Va),e(Va,Td),e(gt,Md),e(gt,Jo),e(Jo,Zs),e(Zs,wd),e(Zs,Ka),e(Ka,Pd),e(Jo,$d),e(Jo,ea),e(ea,Nd),e(ea,Xa),e(Xa,yd),e(Fe,Fd),e(Fe,ao),T(Go,ao,null),e(ao,zd),e(ao,Yo),e(Yo,Ed),e(Yo,Ja),e(Ja,qd),e(Yo,jd),e(Fe,Cd),e(Fe,ro),T(Zo,ro,null),e(ro,xd),e(ro,Ga),e(Ga,Ad),e(Fe,Ld),e(Fe,ta),T(en,ta,null),m(o,yi,u),m(o,zt,u),e(zt,io),e(io,Ya),T(tn,Ya,null),e(zt,Id),e(zt,Za),e(Za,Sd),m(o,Fi,u),m(o,Ze,u),T(on,Ze,null),e(Ze,Dd),e(Ze,nn),e(nn,Od),e(nn,er),e(er,Wd),e(nn,Qd),e(Ze,Hd),e(Ze,sn),e(sn,Rd),e(sn,oa),e(oa,Ud),e(sn,Bd),e(Ze,Vd),e(Ze,lo),T(an,lo,null),e(lo,Kd),e(lo,tr),e(tr,Xd),m(o,zi,u),m(o,Et,u),e(Et,co),e(co,or),T(rn,or,null),e(Et,Jd),e(Et,nr),e(nr,Gd),m(o,Ei,u),m(o,Re,u),T(ln,Re,null),e(Re,Yd),e(Re,sr),e(sr,Zd),e(Re,ec),e(Re,dn),e(dn,tc),e(dn,na),e(na,oc),e(dn,nc),e(Re,sc),e(Re,cn),e(cn,ac),e(cn,pn),e(pn,rc),e(cn,ic),e(Re,lc),e(Re,Xe),T(hn,Xe,null),e(Xe,dc),e(Xe,qt),e(qt,cc),e(qt,sa),e(sa,pc),e(qt,hc),e(qt,ar),e(ar,mc),e(qt,uc),e(Xe,fc),T(po,Xe,null),e(Xe,gc),e(Xe,rr),e(rr,_c),e(Xe,kc),T(mn,Xe,null),m(o,qi,u),m(o,jt,u),e(jt,ho),e(ho,ir),T(un,ir,null),e(jt,vc),e(jt,lr),e(lr,bc),m(o,ji,u),m(o,Ct,u),T(fn,Ct,null),e(Ct,Tc),e(Ct,Le),T(gn,Le,null),e(Le,Mc),e(Le,xt),e(xt,wc),e(xt,aa),e(aa,Pc),e(xt,$c),e(xt,dr),e(dr,Nc),e(xt,yc),e(Le,Fc),T(mo,Le,null),e(Le,zc),e(Le,cr),e(cr,Ec),e(Le,qc),T(_n,Le,null),e(Le,jc),T(kn,Le,null),m(o,Ci,u),m(o,At,u),e(At,uo),e(uo,pr),T(vn,pr,null),e(At,Cc),e(At,hr),e(hr,xc),m(o,xi,u),m(o,Ue,u),T(bn,Ue,null),e(Ue,Ac),e(Ue,mr),e(mr,Lc),e(Ue,Ic),e(Ue,Tn),e(Tn,Sc),e(Tn,ra),e(ra,Dc),e(Tn,Oc),e(Ue,Wc),e(Ue,Mn),e(Mn,Qc),e(Mn,wn),e(wn,Hc),e(Mn,Rc),e(Ue,Uc),e(Ue,be),T(Pn,be,null),e(be,Bc),e(be,Lt),e(Lt,Vc),e(Lt,ia),e(ia,Kc),e(Lt,Xc),e(Lt,ur),e(ur,Jc),e(Lt,Gc),e(be,Yc),T(fo,be,null),e(be,Zc),e(be,fr),e(fr,ep),e(be,tp),T($n,be,null),e(be,op),T(Nn,be,null),e(be,np),e(be,gr),e(gr,sp),e(be,ap),T(yn,be,null),e(be,rp),T(Fn,be,null),m(o,Ai,u),m(o,It,u),e(It,go),e(go,_r),T(zn,_r,null),e(It,ip),e(It,kr),e(kr,lp),m(o,Li,u),m(o,Be,u),T(En,Be,null),e(Be,dp),e(Be,vr),e(vr,cp),e(Be,pp),e(Be,qn),e(qn,hp),e(qn,la),e(la,mp),e(qn,up),e(Be,fp),e(Be,jn),e(jn,gp),e(jn,Cn),e(Cn,_p),e(jn,kp),e(Be,vp),e(Be,Je),T(xn,Je,null),e(Je,bp),e(Je,St),e(St,Tp),e(St,da),e(da,Mp),e(St,wp),e(St,br),e(br,Pp),e(St,$p),e(Je,Np),T(_o,Je,null),e(Je,yp),e(Je,Tr),e(Tr,Fp),e(Je,zp),T(An,Je,null),m(o,Ii,u),m(o,Dt,u),e(Dt,ko),e(ko,Mr),T(Ln,Mr,null),e(Dt,Ep),e(Dt,wr),e(wr,qp),m(o,Si,u),m(o,Ve,u),T(In,Ve,null),e(Ve,jp),e(Ve,Pr),e(Pr,Cp),e(Ve,xp),e(Ve,Sn),e(Sn,Ap),e(Sn,ca),e(ca,Lp),e(Sn,Ip),e(Ve,Sp),e(Ve,Dn),e(Dn,Dp),e(Dn,On),e(On,Op),e(Dn,Wp),e(Ve,Qp),e(Ve,Ie),T(Wn,Ie,null),e(Ie,Hp),e(Ie,Ot),e(Ot,Rp),e(Ot,pa),e(pa,Up),e(Ot,Bp),e(Ot,$r),e($r,Vp),e(Ot,Kp),e(Ie,Xp),T(vo,Ie,null),e(Ie,Jp),e(Ie,Nr),e(Nr,Gp),e(Ie,Yp),T(Qn,Ie,null),e(Ie,Zp),T(Hn,Ie,null),m(o,Di,u),m(o,Wt,u),e(Wt,bo),e(bo,yr),T(Rn,yr,null),e(Wt,eh),e(Wt,Fr),e(Fr,th),m(o,Oi,u),m(o,Ke,u),T(Un,Ke,null),e(Ke,oh),e(Ke,Qt),e(Qt,nh),e(Qt,zr),e(zr,sh),e(Qt,ah),e(Qt,Er),e(Er,rh),e(Qt,ih),e(Ke,lh),e(Ke,Bn),e(Bn,dh),e(Bn,ha),e(ha,ch),e(Bn,ph),e(Ke,hh),e(Ke,Vn),e(Vn,mh),e(Vn,Kn),e(Kn,uh),e(Vn,fh),e(Ke,gh),e(Ke,Se),T(Xn,Se,null),e(Se,_h),e(Se,Ht),e(Ht,kh),e(Ht,ma),e(ma,vh),e(Ht,bh),e(Ht,qr),e(qr,Th),e(Ht,Mh),e(Se,wh),T(To,Se,null),e(Se,Ph),e(Se,jr),e(jr,$h),e(Se,Nh),T(Jn,Se,null),e(Se,yh),T(Gn,Se,null),m(o,Wi,u),m(o,Rt,u),e(Rt,Mo),e(Mo,Cr),T(Yn,Cr,null),e(Rt,Fh),e(Rt,xr),e(xr,zh),m(o,Qi,u),m(o,ze,u),T(Zn,ze,null),e(ze,Eh),e(ze,Ar),e(Ar,qh),e(ze,jh),e(ze,es),e(es,Ch),e(es,ua),e(ua,xh),e(es,Ah),e(ze,Lh),e(ze,ts),e(ts,Ih),e(ts,os),e(os,Sh),e(ts,Dh),e(ze,Oh),T(wo,ze,null),e(ze,Wh),e(ze,Ge),T(ns,Ge,null),e(Ge,Qh),e(Ge,Ut),e(Ut,Hh),e(Ut,fa),e(fa,Rh),e(Ut,Uh),e(Ut,Lr),e(Lr,Bh),e(Ut,Vh),e(Ge,Kh),T(Po,Ge,null),e(Ge,Xh),e(Ge,Ir),e(Ir,Jh),e(Ge,Gh),T(ss,Ge,null),m(o,Hi,u),m(o,Bt,u),e(Bt,$o),e($o,Sr),T(as,Sr,null),e(Bt,Yh),e(Bt,Dr),e(Dr,Zh),m(o,Ri,u),m(o,Ee,u),T(rs,Ee,null),e(Ee,em),e(Ee,is),e(is,tm),e(is,Or),e(Or,om),e(is,nm),e(Ee,sm),e(Ee,ls),e(ls,am),e(ls,ga),e(ga,rm),e(ls,im),e(Ee,lm),e(Ee,ds),e(ds,dm),e(ds,cs),e(cs,cm),e(ds,pm),e(Ee,hm),T(No,Ee,null),e(Ee,mm),e(Ee,De),T(ps,De,null),e(De,um),e(De,Vt),e(Vt,fm),e(Vt,_a),e(_a,gm),e(Vt,_m),e(Vt,Wr),e(Wr,km),e(Vt,vm),e(De,bm),T(yo,De,null),e(De,Tm),e(De,Qr),e(Qr,Mm),e(De,wm),T(hs,De,null),e(De,Pm),T(ms,De,null),m(o,Ui,u),m(o,Kt,u),e(Kt,Fo),e(Fo,Hr),T(us,Hr,null),e(Kt,$m),e(Kt,Rr),e(Rr,Nm),m(o,Bi,u),m(o,qe,u),T(fs,qe,null),e(qe,ym),e(qe,Ur),e(Ur,Fm),e(qe,zm),e(qe,gs),e(gs,Em),e(gs,ka),e(ka,qm),e(gs,jm),e(qe,Cm),e(qe,_s),e(_s,xm),e(_s,ks),e(ks,Am),e(_s,Lm),e(qe,Im),T(zo,qe,null),e(qe,Sm),e(qe,Oe),T(vs,Oe,null),e(Oe,Dm),e(Oe,Xt),e(Xt,Om),e(Xt,va),e(va,Wm),e(Xt,Qm),e(Xt,Br),e(Br,Hm),e(Xt,Rm),e(Oe,Um),T(Eo,Oe,null),e(Oe,Bm),e(Oe,Vr),e(Vr,Vm),e(Oe,Km),T(bs,Oe,null),e(Oe,Xm),T(Ts,Oe,null),m(o,Vi,u),m(o,Jt,u),e(Jt,qo),e(qo,Kr),T(Ms,Kr,null),e(Jt,Jm),e(Jt,Xr),e(Xr,Gm),m(o,Ki,u),m(o,je,u),T(ws,je,null),e(je,Ym),e(je,Jr),e(Jr,Zm),e(je,eu),e(je,Ps),e(Ps,tu),e(Ps,ba),e(ba,ou),e(Ps,nu),e(je,su),e(je,$s),e($s,au),e($s,Ns),e(Ns,ru),e($s,iu),e(je,lu),T(jo,je,null),e(je,du),e(je,Ye),T(ys,Ye,null),e(Ye,cu),e(Ye,Gt),e(Gt,pu),e(Gt,Ta),e(Ta,hu),e(Gt,mu),e(Gt,Gr),e(Gr,uu),e(Gt,fu),e(Ye,gu),T(Co,Ye,null),e(Ye,_u),e(Ye,Yr),e(Yr,ku),e(Ye,vu),T(Fs,Ye,null),m(o,Xi,u),m(o,Yt,u),e(Yt,xo),e(xo,Zr),T(zs,Zr,null),e(Yt,bu),e(Yt,ei),e(ei,Tu),m(o,Ji,u),m(o,Ce,u),T(Es,Ce,null),e(Ce,Mu),e(Ce,ti),e(ti,wu),e(Ce,Pu),e(Ce,qs),e(qs,$u),e(qs,Ma),e(Ma,Nu),e(qs,yu),e(Ce,Fu),e(Ce,js),e(js,zu),e(js,Cs),e(Cs,Eu),e(js,qu),e(Ce,ju),T(Ao,Ce,null),e(Ce,Cu),e(Ce,We),T(xs,We,null),e(We,xu),e(We,Zt),e(Zt,Au),e(Zt,wa),e(wa,Lu),e(Zt,Iu),e(Zt,oi),e(oi,Su),e(Zt,Du),e(We,Ou),T(Lo,We,null),e(We,Wu),e(We,ni),e(ni,Qu),e(We,Hu),T(As,We,null),e(We,Ru),T(Ls,We,null),m(o,Gi,u),m(o,eo,u),e(eo,Io),e(Io,si),T(Is,si,null),e(eo,Uu),e(eo,ai),e(ai,Bu),m(o,Yi,u),m(o,xe,u),T(Ss,xe,null),e(xe,Vu),e(xe,to),e(to,Ku),e(to,ri),e(ri,Xu),e(to,Ju),e(to,ii),e(ii,Gu),e(to,Yu),e(xe,Zu),e(xe,Ds),e(Ds,ef),e(Ds,Pa),e(Pa,tf),e(Ds,of),e(xe,nf),e(xe,Os),e(Os,sf),e(Os,Ws),e(Ws,af),e(Os,rf),e(xe,lf),T(So,xe,null),e(xe,df),e(xe,Qe),T(Qs,Qe,null),e(Qe,cf),e(Qe,oo),e(oo,pf),e(oo,$a),e($a,hf),e(oo,mf),e(oo,li),e(li,uf),e(oo,ff),e(Qe,gf),T(Do,Qe,null),e(Qe,_f),e(Qe,di),e(di,kf),e(Qe,vf),T(Hs,Qe,null),e(Qe,bf),T(Rs,Qe,null),Zi=!0},p(o,[u]){const Us={};u&2&&(Us.$$scope={dirty:u,ctx:o}),po.$set(Us);const ci={};u&2&&(ci.$$scope={dirty:u,ctx:o}),mo.$set(ci);const pi={};u&2&&(pi.$$scope={dirty:u,ctx:o}),fo.$set(pi);const hi={};u&2&&(hi.$$scope={dirty:u,ctx:o}),_o.$set(hi);const Bs={};u&2&&(Bs.$$scope={dirty:u,ctx:o}),vo.$set(Bs);const mi={};u&2&&(mi.$$scope={dirty:u,ctx:o}),To.$set(mi);const ui={};u&2&&(ui.$$scope={dirty:u,ctx:o}),wo.$set(ui);const fi={};u&2&&(fi.$$scope={dirty:u,ctx:o}),Po.$set(fi);const Vs={};u&2&&(Vs.$$scope={dirty:u,ctx:o}),No.$set(Vs);const gi={};u&2&&(gi.$$scope={dirty:u,ctx:o}),yo.$set(gi);const _i={};u&2&&(_i.$$scope={dirty:u,ctx:o}),zo.$set(_i);const ki={};u&2&&(ki.$$scope={dirty:u,ctx:o}),Eo.$set(ki);const vi={};u&2&&(vi.$$scope={dirty:u,ctx:o}),jo.$set(vi);const bi={};u&2&&(bi.$$scope={dirty:u,ctx:o}),Co.$set(bi);const Ti={};u&2&&(Ti.$$scope={dirty:u,ctx:o}),Ao.$set(Ti);const Mi={};u&2&&(Mi.$$scope={dirty:u,ctx:o}),Lo.$set(Mi);const ft={};u&2&&(ft.$$scope={dirty:u,ctx:o}),So.$set(ft);const wi={};u&2&&(wi.$$scope={dirty:u,ctx:o}),Do.$set(wi)},i(o){Zi||(M(k.$$.fragment,o),M(G.$$.fragment,o),M(Qo.$$.fragment,o),M(Ho.$$.fragment,o),M(Uo.$$.fragment,o),M(Bo.$$.fragment,o),M(Vo.$$.fragment,o),M(Xo.$$.fragment,o),M(Go.$$.fragment,o),M(Zo.$$.fragment,o),M(en.$$.fragment,o),M(tn.$$.fragment,o),M(on.$$.fragment,o),M(an.$$.fragment,o),M(rn.$$.fragment,o),M(ln.$$.fragment,o),M(hn.$$.fragment,o),M(po.$$.fragment,o),M(mn.$$.fragment,o),M(un.$$.fragment,o),M(fn.$$.fragment,o),M(gn.$$.fragment,o),M(mo.$$.fragment,o),M(_n.$$.fragment,o),M(kn.$$.fragment,o),M(vn.$$.fragment,o),M(bn.$$.fragment,o),M(Pn.$$.fragment,o),M(fo.$$.fragment,o),M($n.$$.fragment,o),M(Nn.$$.fragment,o),M(yn.$$.fragment,o),M(Fn.$$.fragment,o),M(zn.$$.fragment,o),M(En.$$.fragment,o),M(xn.$$.fragment,o),M(_o.$$.fragment,o),M(An.$$.fragment,o),M(Ln.$$.fragment,o),M(In.$$.fragment,o),M(Wn.$$.fragment,o),M(vo.$$.fragment,o),M(Qn.$$.fragment,o),M(Hn.$$.fragment,o),M(Rn.$$.fragment,o),M(Un.$$.fragment,o),M(Xn.$$.fragment,o),M(To.$$.fragment,o),M(Jn.$$.fragment,o),M(Gn.$$.fragment,o),M(Yn.$$.fragment,o),M(Zn.$$.fragment,o),M(wo.$$.fragment,o),M(ns.$$.fragment,o),M(Po.$$.fragment,o),M(ss.$$.fragment,o),M(as.$$.fragment,o),M(rs.$$.fragment,o),M(No.$$.fragment,o),M(ps.$$.fragment,o),M(yo.$$.fragment,o),M(hs.$$.fragment,o),M(ms.$$.fragment,o),M(us.$$.fragment,o),M(fs.$$.fragment,o),M(zo.$$.fragment,o),M(vs.$$.fragment,o),M(Eo.$$.fragment,o),M(bs.$$.fragment,o),M(Ts.$$.fragment,o),M(Ms.$$.fragment,o),M(ws.$$.fragment,o),M(jo.$$.fragment,o),M(ys.$$.fragment,o),M(Co.$$.fragment,o),M(Fs.$$.fragment,o),M(zs.$$.fragment,o),M(Es.$$.fragment,o),M(Ao.$$.fragment,o),M(xs.$$.fragment,o),M(Lo.$$.fragment,o),M(As.$$.fragment,o),M(Ls.$$.fragment,o),M(Is.$$.fragment,o),M(Ss.$$.fragment,o),M(So.$$.fragment,o),M(Qs.$$.fragment,o),M(Do.$$.fragment,o),M(Hs.$$.fragment,o),M(Rs.$$.fragment,o),Zi=!0)},o(o){w(k.$$.fragment,o),w(G.$$.fragment,o),w(Qo.$$.fragment,o),w(Ho.$$.fragment,o),w(Uo.$$.fragment,o),w(Bo.$$.fragment,o),w(Vo.$$.fragment,o),w(Xo.$$.fragment,o),w(Go.$$.fragment,o),w(Zo.$$.fragment,o),w(en.$$.fragment,o),w(tn.$$.fragment,o),w(on.$$.fragment,o),w(an.$$.fragment,o),w(rn.$$.fragment,o),w(ln.$$.fragment,o),w(hn.$$.fragment,o),w(po.$$.fragment,o),w(mn.$$.fragment,o),w(un.$$.fragment,o),w(fn.$$.fragment,o),w(gn.$$.fragment,o),w(mo.$$.fragment,o),w(_n.$$.fragment,o),w(kn.$$.fragment,o),w(vn.$$.fragment,o),w(bn.$$.fragment,o),w(Pn.$$.fragment,o),w(fo.$$.fragment,o),w($n.$$.fragment,o),w(Nn.$$.fragment,o),w(yn.$$.fragment,o),w(Fn.$$.fragment,o),w(zn.$$.fragment,o),w(En.$$.fragment,o),w(xn.$$.fragment,o),w(_o.$$.fragment,o),w(An.$$.fragment,o),w(Ln.$$.fragment,o),w(In.$$.fragment,o),w(Wn.$$.fragment,o),w(vo.$$.fragment,o),w(Qn.$$.fragment,o),w(Hn.$$.fragment,o),w(Rn.$$.fragment,o),w(Un.$$.fragment,o),w(Xn.$$.fragment,o),w(To.$$.fragment,o),w(Jn.$$.fragment,o),w(Gn.$$.fragment,o),w(Yn.$$.fragment,o),w(Zn.$$.fragment,o),w(wo.$$.fragment,o),w(ns.$$.fragment,o),w(Po.$$.fragment,o),w(ss.$$.fragment,o),w(as.$$.fragment,o),w(rs.$$.fragment,o),w(No.$$.fragment,o),w(ps.$$.fragment,o),w(yo.$$.fragment,o),w(hs.$$.fragment,o),w(ms.$$.fragment,o),w(us.$$.fragment,o),w(fs.$$.fragment,o),w(zo.$$.fragment,o),w(vs.$$.fragment,o),w(Eo.$$.fragment,o),w(bs.$$.fragment,o),w(Ts.$$.fragment,o),w(Ms.$$.fragment,o),w(ws.$$.fragment,o),w(jo.$$.fragment,o),w(ys.$$.fragment,o),w(Co.$$.fragment,o),w(Fs.$$.fragment,o),w(zs.$$.fragment,o),w(Es.$$.fragment,o),w(Ao.$$.fragment,o),w(xs.$$.fragment,o),w(Lo.$$.fragment,o),w(As.$$.fragment,o),w(Ls.$$.fragment,o),w(Is.$$.fragment,o),w(Ss.$$.fragment,o),w(So.$$.fragment,o),w(Qs.$$.fragment,o),w(Do.$$.fragment,o),w(Hs.$$.fragment,o),w(Rs.$$.fragment,o),Zi=!1},d(o){t(p),o&&t(F),o&&t(f),P(k),o&&t(B),o&&t(z),P(G),o&&t(se),o&&t(U),o&&t(q),o&&t(Z),o&&t(ae),o&&t(ee),o&&t(re),o&&t(te),o&&t(W),o&&t(oe),o&&t(x),o&&t(ne),o&&t(A),o&&t(S),o&&t(ie),o&&t(fe),P(Qo),o&&t(Pi),o&&t(He),P(Ho),P(Uo),o&&t($i),o&&t(Ft),P(Bo),o&&t(Ni),o&&t(Fe),P(Vo),P(Xo),P(Go),P(Zo),P(en),o&&t(yi),o&&t(zt),P(tn),o&&t(Fi),o&&t(Ze),P(on),P(an),o&&t(zi),o&&t(Et),P(rn),o&&t(Ei),o&&t(Re),P(ln),P(hn),P(po),P(mn),o&&t(qi),o&&t(jt),P(un),o&&t(ji),o&&t(Ct),P(fn),P(gn),P(mo),P(_n),P(kn),o&&t(Ci),o&&t(At),P(vn),o&&t(xi),o&&t(Ue),P(bn),P(Pn),P(fo),P($n),P(Nn),P(yn),P(Fn),o&&t(Ai),o&&t(It),P(zn),o&&t(Li),o&&t(Be),P(En),P(xn),P(_o),P(An),o&&t(Ii),o&&t(Dt),P(Ln),o&&t(Si),o&&t(Ve),P(In),P(Wn),P(vo),P(Qn),P(Hn),o&&t(Di),o&&t(Wt),P(Rn),o&&t(Oi),o&&t(Ke),P(Un),P(Xn),P(To),P(Jn),P(Gn),o&&t(Wi),o&&t(Rt),P(Yn),o&&t(Qi),o&&t(ze),P(Zn),P(wo),P(ns),P(Po),P(ss),o&&t(Hi),o&&t(Bt),P(as),o&&t(Ri),o&&t(Ee),P(rs),P(No),P(ps),P(yo),P(hs),P(ms),o&&t(Ui),o&&t(Kt),P(us),o&&t(Bi),o&&t(qe),P(fs),P(zo),P(vs),P(Eo),P(bs),P(Ts),o&&t(Vi),o&&t(Jt),P(Ms),o&&t(Ki),o&&t(je),P(ws),P(jo),P(ys),P(Co),P(Fs),o&&t(Xi),o&&t(Yt),P(zs),o&&t(Ji),o&&t(Ce),P(Es),P(Ao),P(xs),P(Lo),P(As),P(Ls),o&&t(Gi),o&&t(eo),P(Is),o&&t(Yi),o&&t(xe),P(Ss),P(So),P(Qs),P(Do),P(Hs),P(Rs)}}}const Tk={local:"mpnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.MPNetConfig",title:"MPNetConfig"},{local:"transformers.MPNetTokenizer",title:"MPNetTokenizer"},{local:"transformers.MPNetTokenizerFast",title:"MPNetTokenizerFast"},{local:"transformers.MPNetModel",title:"MPNetModel"},{local:"transformers.MPNetForMaskedLM",title:"MPNetForMaskedLM"},{local:"transformers.MPNetForSequenceClassification",title:"MPNetForSequenceClassification"},{local:"transformers.MPNetForMultipleChoice",title:"MPNetForMultipleChoice"},{local:"transformers.MPNetForTokenClassification",title:"MPNetForTokenClassification"},{local:"transformers.MPNetForQuestionAnswering",title:"MPNetForQuestionAnswering"},{local:"transformers.TFMPNetModel",title:"TFMPNetModel"},{local:"transformers.TFMPNetForMaskedLM",title:"TFMPNetForMaskedLM"},{local:"transformers.TFMPNetForSequenceClassification",title:"TFMPNetForSequenceClassification"},{local:"transformers.TFMPNetForMultipleChoice",title:"TFMPNetForMultipleChoice"},{local:"transformers.TFMPNetForTokenClassification",title:"TFMPNetForTokenClassification"},{local:"transformers.TFMPNetForQuestionAnswering",title:"TFMPNetForQuestionAnswering"}],title:"MPNet"};function Mk(R){return tk(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Fk extends G_{constructor(p){super();Y_(this,p,Mk,bk,Z_,{})}}export{Fk as default,Tk as metadata};
