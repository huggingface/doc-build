import{S as G_,i as Y_,s as Z_,e as o,k as l,w as v,t as r,M as ek,c as s,d as t,m as d,a,x as b,h as i,b as h,F as e,g as m,y as T,q as M,o as w,B as P,v as tk}from"../../chunks/vendor-6b77c823.js";import{T as ye}from"../../chunks/Tip-39098574.js";import{D as J}from"../../chunks/Docstring-abef54e3.js";import{C as ve}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as Ae}from"../../chunks/IconCopyLink-7a11ce68.js";function nk(B){let p,F,f,_,$;return{c(){p=o("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function ok(B){let p,F,f,_,$;return{c(){p=o("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function sk(B){let p,F,f,_,$;return{c(){p=o("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function ak(B){let p,F,f,_,$;return{c(){p=o("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function rk(B){let p,F,f,_,$;return{c(){p=o("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function ik(B){let p,F,f,_,$;return{c(){p=o("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function lk(B){let p,F,f,_,$,k,g,y,le,U,z,X,D,G,de,O,ce,se,R,L,Y,V,E,q,Z,Q,ae,ee,H,re,te,j,pe,W,ne,he,x,oe,C,me;return{c(){p=o("p"),F=r("TF 2.0 models accepts two formats as inputs:"),f=l(),_=o("ul"),$=o("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),y=o("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=o("p"),X=r("This second option is useful when using "),D=o("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=o("code"),ce=r("model(inputs)"),se=r("."),R=l(),L=o("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=o("ul"),q=o("li"),Z=r("a single Tensor with "),Q=o("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),H=o("code"),re=r("model(inputs_ids)"),te=l(),j=o("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=o("code"),ne=r("model([input_ids, attention_mask])"),he=l(),x=o("li"),oe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=o("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var N=a(p);F=i(N,"TF 2.0 models accepts two formats as inputs:"),N.forEach(t),f=d(c),_=s(c,"UL",{});var K=a(_);$=s(K,"LI",{});var _e=a($);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),g=d(K),y=s(K,"LI",{});var Te=a(y);le=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Me=a(O);ce=i(Me,"model(inputs)"),Me.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),L=s(c,"P",{});var we=a(L);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=d(c),E=s(c,"UL",{});var A=a(E);q=s(A,"LI",{});var S=a(q);Z=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Pe=a(Q);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),H=s(S,"CODE",{});var ge=a(H);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=d(A),j=s(A,"LI",{});var ue=a(j);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var $e=a(W);ne=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),ue.forEach(t),he=d(A),x=s(A,"LI",{});var ie=a(x);oe=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=s(ie,"CODE",{});var fe=a(C);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),A.forEach(t)},m(c,N){m(c,p,N),e(p,F),m(c,f,N),m(c,_,N),e(_,$),e($,k),e(_,g),e(_,y),e(y,le),m(c,U,N),m(c,z,N),e(z,X),e(z,D),e(D,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,N),m(c,L,N),e(L,Y),m(c,V,N),m(c,E,N),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,H),e(H,re),e(E,te),e(E,j),e(j,pe),e(j,W),e(W,ne),e(E,he),e(E,x),e(x,oe),e(x,C),e(C,me)},d(c){c&&t(p),c&&t(f),c&&t(_),c&&t(U),c&&t(z),c&&t(R),c&&t(L),c&&t(V),c&&t(E)}}}function dk(B){let p,F,f,_,$;return{c(){p=o("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function ck(B){let p,F,f,_,$,k,g,y,le,U,z,X,D,G,de,O,ce,se,R,L,Y,V,E,q,Z,Q,ae,ee,H,re,te,j,pe,W,ne,he,x,oe,C,me;return{c(){p=o("p"),F=r("TF 2.0 models accepts two formats as inputs:"),f=l(),_=o("ul"),$=o("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),y=o("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=o("p"),X=r("This second option is useful when using "),D=o("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=o("code"),ce=r("model(inputs)"),se=r("."),R=l(),L=o("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=o("ul"),q=o("li"),Z=r("a single Tensor with "),Q=o("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),H=o("code"),re=r("model(inputs_ids)"),te=l(),j=o("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=o("code"),ne=r("model([input_ids, attention_mask])"),he=l(),x=o("li"),oe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=o("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var N=a(p);F=i(N,"TF 2.0 models accepts two formats as inputs:"),N.forEach(t),f=d(c),_=s(c,"UL",{});var K=a(_);$=s(K,"LI",{});var _e=a($);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),g=d(K),y=s(K,"LI",{});var Te=a(y);le=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Me=a(O);ce=i(Me,"model(inputs)"),Me.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),L=s(c,"P",{});var we=a(L);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=d(c),E=s(c,"UL",{});var A=a(E);q=s(A,"LI",{});var S=a(q);Z=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Pe=a(Q);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),H=s(S,"CODE",{});var ge=a(H);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=d(A),j=s(A,"LI",{});var ue=a(j);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var $e=a(W);ne=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),ue.forEach(t),he=d(A),x=s(A,"LI",{});var ie=a(x);oe=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=s(ie,"CODE",{});var fe=a(C);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),A.forEach(t)},m(c,N){m(c,p,N),e(p,F),m(c,f,N),m(c,_,N),e(_,$),e($,k),e(_,g),e(_,y),e(y,le),m(c,U,N),m(c,z,N),e(z,X),e(z,D),e(D,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,N),m(c,L,N),e(L,Y),m(c,V,N),m(c,E,N),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,H),e(H,re),e(E,te),e(E,j),e(j,pe),e(j,W),e(W,ne),e(E,he),e(E,x),e(x,oe),e(x,C),e(C,me)},d(c){c&&t(p),c&&t(f),c&&t(_),c&&t(U),c&&t(z),c&&t(R),c&&t(L),c&&t(V),c&&t(E)}}}function pk(B){let p,F,f,_,$;return{c(){p=o("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function hk(B){let p,F,f,_,$,k,g,y,le,U,z,X,D,G,de,O,ce,se,R,L,Y,V,E,q,Z,Q,ae,ee,H,re,te,j,pe,W,ne,he,x,oe,C,me;return{c(){p=o("p"),F=r("TF 2.0 models accepts two formats as inputs:"),f=l(),_=o("ul"),$=o("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),y=o("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=o("p"),X=r("This second option is useful when using "),D=o("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=o("code"),ce=r("model(inputs)"),se=r("."),R=l(),L=o("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=o("ul"),q=o("li"),Z=r("a single Tensor with "),Q=o("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),H=o("code"),re=r("model(inputs_ids)"),te=l(),j=o("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=o("code"),ne=r("model([input_ids, attention_mask])"),he=l(),x=o("li"),oe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=o("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var N=a(p);F=i(N,"TF 2.0 models accepts two formats as inputs:"),N.forEach(t),f=d(c),_=s(c,"UL",{});var K=a(_);$=s(K,"LI",{});var _e=a($);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),g=d(K),y=s(K,"LI",{});var Te=a(y);le=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Me=a(O);ce=i(Me,"model(inputs)"),Me.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),L=s(c,"P",{});var we=a(L);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=d(c),E=s(c,"UL",{});var A=a(E);q=s(A,"LI",{});var S=a(q);Z=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Pe=a(Q);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),H=s(S,"CODE",{});var ge=a(H);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=d(A),j=s(A,"LI",{});var ue=a(j);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var $e=a(W);ne=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),ue.forEach(t),he=d(A),x=s(A,"LI",{});var ie=a(x);oe=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=s(ie,"CODE",{});var fe=a(C);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),A.forEach(t)},m(c,N){m(c,p,N),e(p,F),m(c,f,N),m(c,_,N),e(_,$),e($,k),e(_,g),e(_,y),e(y,le),m(c,U,N),m(c,z,N),e(z,X),e(z,D),e(D,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,N),m(c,L,N),e(L,Y),m(c,V,N),m(c,E,N),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,H),e(H,re),e(E,te),e(E,j),e(j,pe),e(j,W),e(W,ne),e(E,he),e(E,x),e(x,oe),e(x,C),e(C,me)},d(c){c&&t(p),c&&t(f),c&&t(_),c&&t(U),c&&t(z),c&&t(R),c&&t(L),c&&t(V),c&&t(E)}}}function mk(B){let p,F,f,_,$;return{c(){p=o("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function uk(B){let p,F,f,_,$,k,g,y,le,U,z,X,D,G,de,O,ce,se,R,L,Y,V,E,q,Z,Q,ae,ee,H,re,te,j,pe,W,ne,he,x,oe,C,me;return{c(){p=o("p"),F=r("TF 2.0 models accepts two formats as inputs:"),f=l(),_=o("ul"),$=o("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),y=o("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=o("p"),X=r("This second option is useful when using "),D=o("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=o("code"),ce=r("model(inputs)"),se=r("."),R=l(),L=o("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=o("ul"),q=o("li"),Z=r("a single Tensor with "),Q=o("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),H=o("code"),re=r("model(inputs_ids)"),te=l(),j=o("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=o("code"),ne=r("model([input_ids, attention_mask])"),he=l(),x=o("li"),oe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=o("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var N=a(p);F=i(N,"TF 2.0 models accepts two formats as inputs:"),N.forEach(t),f=d(c),_=s(c,"UL",{});var K=a(_);$=s(K,"LI",{});var _e=a($);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),g=d(K),y=s(K,"LI",{});var Te=a(y);le=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Me=a(O);ce=i(Me,"model(inputs)"),Me.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),L=s(c,"P",{});var we=a(L);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=d(c),E=s(c,"UL",{});var A=a(E);q=s(A,"LI",{});var S=a(q);Z=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Pe=a(Q);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),H=s(S,"CODE",{});var ge=a(H);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=d(A),j=s(A,"LI",{});var ue=a(j);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var $e=a(W);ne=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),ue.forEach(t),he=d(A),x=s(A,"LI",{});var ie=a(x);oe=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=s(ie,"CODE",{});var fe=a(C);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),A.forEach(t)},m(c,N){m(c,p,N),e(p,F),m(c,f,N),m(c,_,N),e(_,$),e($,k),e(_,g),e(_,y),e(y,le),m(c,U,N),m(c,z,N),e(z,X),e(z,D),e(D,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,N),m(c,L,N),e(L,Y),m(c,V,N),m(c,E,N),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,H),e(H,re),e(E,te),e(E,j),e(j,pe),e(j,W),e(W,ne),e(E,he),e(E,x),e(x,oe),e(x,C),e(C,me)},d(c){c&&t(p),c&&t(f),c&&t(_),c&&t(U),c&&t(z),c&&t(R),c&&t(L),c&&t(V),c&&t(E)}}}function fk(B){let p,F,f,_,$;return{c(){p=o("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function gk(B){let p,F,f,_,$,k,g,y,le,U,z,X,D,G,de,O,ce,se,R,L,Y,V,E,q,Z,Q,ae,ee,H,re,te,j,pe,W,ne,he,x,oe,C,me;return{c(){p=o("p"),F=r("TF 2.0 models accepts two formats as inputs:"),f=l(),_=o("ul"),$=o("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),y=o("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=o("p"),X=r("This second option is useful when using "),D=o("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=o("code"),ce=r("model(inputs)"),se=r("."),R=l(),L=o("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=o("ul"),q=o("li"),Z=r("a single Tensor with "),Q=o("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),H=o("code"),re=r("model(inputs_ids)"),te=l(),j=o("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=o("code"),ne=r("model([input_ids, attention_mask])"),he=l(),x=o("li"),oe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=o("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var N=a(p);F=i(N,"TF 2.0 models accepts two formats as inputs:"),N.forEach(t),f=d(c),_=s(c,"UL",{});var K=a(_);$=s(K,"LI",{});var _e=a($);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),g=d(K),y=s(K,"LI",{});var Te=a(y);le=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Me=a(O);ce=i(Me,"model(inputs)"),Me.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),L=s(c,"P",{});var we=a(L);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=d(c),E=s(c,"UL",{});var A=a(E);q=s(A,"LI",{});var S=a(q);Z=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Pe=a(Q);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),H=s(S,"CODE",{});var ge=a(H);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=d(A),j=s(A,"LI",{});var ue=a(j);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var $e=a(W);ne=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),ue.forEach(t),he=d(A),x=s(A,"LI",{});var ie=a(x);oe=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=s(ie,"CODE",{});var fe=a(C);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),A.forEach(t)},m(c,N){m(c,p,N),e(p,F),m(c,f,N),m(c,_,N),e(_,$),e($,k),e(_,g),e(_,y),e(y,le),m(c,U,N),m(c,z,N),e(z,X),e(z,D),e(D,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,N),m(c,L,N),e(L,Y),m(c,V,N),m(c,E,N),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,H),e(H,re),e(E,te),e(E,j),e(j,pe),e(j,W),e(W,ne),e(E,he),e(E,x),e(x,oe),e(x,C),e(C,me)},d(c){c&&t(p),c&&t(f),c&&t(_),c&&t(U),c&&t(z),c&&t(R),c&&t(L),c&&t(V),c&&t(E)}}}function _k(B){let p,F,f,_,$;return{c(){p=o("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function kk(B){let p,F,f,_,$,k,g,y,le,U,z,X,D,G,de,O,ce,se,R,L,Y,V,E,q,Z,Q,ae,ee,H,re,te,j,pe,W,ne,he,x,oe,C,me;return{c(){p=o("p"),F=r("TF 2.0 models accepts two formats as inputs:"),f=l(),_=o("ul"),$=o("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),g=l(),y=o("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=o("p"),X=r("This second option is useful when using "),D=o("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=o("code"),ce=r("model(inputs)"),se=r("."),R=l(),L=o("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=o("ul"),q=o("li"),Z=r("a single Tensor with "),Q=o("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),H=o("code"),re=r("model(inputs_ids)"),te=l(),j=o("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=o("code"),ne=r("model([input_ids, attention_mask])"),he=l(),x=o("li"),oe=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=o("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var N=a(p);F=i(N,"TF 2.0 models accepts two formats as inputs:"),N.forEach(t),f=d(c),_=s(c,"UL",{});var K=a(_);$=s(K,"LI",{});var _e=a($);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),g=d(K),y=s(K,"LI",{});var Te=a(y);le=i(Te,"having all inputs as a list, tuple or dict in the first positional arguments."),Te.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),D=s(I,"CODE",{});var ke=a(D);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Me=a(O);ce=i(Me,"model(inputs)"),Me.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),L=s(c,"P",{});var we=a(L);Y=i(we,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),we.forEach(t),V=d(c),E=s(c,"UL",{});var A=a(E);q=s(A,"LI",{});var S=a(q);Z=i(S,"a single Tensor with "),Q=s(S,"CODE",{});var Pe=a(Q);ae=i(Pe,"input_ids"),Pe.forEach(t),ee=i(S," only and nothing else: "),H=s(S,"CODE",{});var ge=a(H);re=i(ge,"model(inputs_ids)"),ge.forEach(t),S.forEach(t),te=d(A),j=s(A,"LI",{});var ue=a(j);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var $e=a(W);ne=i($e,"model([input_ids, attention_mask])"),$e.forEach(t),ue.forEach(t),he=d(A),x=s(A,"LI",{});var ie=a(x);oe=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),C=s(ie,"CODE",{});var fe=a(C);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),A.forEach(t)},m(c,N){m(c,p,N),e(p,F),m(c,f,N),m(c,_,N),e(_,$),e($,k),e(_,g),e(_,y),e(y,le),m(c,U,N),m(c,z,N),e(z,X),e(z,D),e(D,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,N),m(c,L,N),e(L,Y),m(c,V,N),m(c,E,N),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,H),e(H,re),e(E,te),e(E,j),e(j,pe),e(j,W),e(W,ne),e(E,he),e(E,x),e(x,oe),e(x,C),e(C,me)},d(c){c&&t(p),c&&t(f),c&&t(_),c&&t(U),c&&t(z),c&&t(R),c&&t(L),c&&t(V),c&&t(E)}}}function vk(B){let p,F,f,_,$;return{c(){p=o("p"),F=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),_=r("Module"),$=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var g=a(p);F=i(g,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(g,"CODE",{});var y=a(f);_=i(y,"Module"),y.forEach(t),$=i(g,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),g.forEach(t)},m(k,g){m(k,p,g),e(p,F),e(p,f),e(f,_),e(p,$)},d(k){k&&t(p)}}}function bk(B){let p,F,f,_,$,k,g,y,le,U,z,X,D,G,de,O,ce,se,R,L,Y,V,E,q,Z,Q,ae,ee,H,re,te,j,pe,W,ne,he,x,oe,C,me,c,N,K,_e,Te,I,ke,Me,we,A,S,Pe,ge,ue,$e,ie,fe,on,Qa,Qn,Kl,Ha,Xl,Pi,He,Hn,Jl,ut,Gl,Ks,Yl,Zl,Xs,ed,td,Bn,nd,od,sd,yt,ad,Js,rd,id,Gs,ld,dd,cd,Ba,pd,hd,Rn,$i,Ft,sn,Ra,Un,md,Ua,ud,Ni,Fe,Vn,fd,Kn,gd,Ys,_d,kd,vd,gt,Xn,bd,Va,Td,Md,Jn,Zs,wd,Ka,Pd,$d,ea,Nd,Xa,yd,Fd,an,Gn,zd,Yn,Ed,Ja,qd,jd,Cd,rn,Zn,xd,Ga,Ad,Ld,ta,eo,yi,zt,ln,Ya,to,Id,Za,Sd,Fi,Ze,no,Dd,oo,Od,er,Wd,Qd,Hd,so,Bd,na,Rd,Ud,Vd,dn,ao,Kd,tr,Xd,zi,Et,cn,nr,ro,Jd,or,Gd,Ei,Be,io,Yd,sr,Zd,ec,lo,tc,oa,nc,oc,sc,co,ac,po,rc,ic,lc,Xe,ho,dc,qt,cc,sa,pc,hc,ar,mc,uc,fc,pn,gc,rr,_c,kc,mo,qi,jt,hn,ir,uo,vc,lr,bc,ji,Ct,fo,Tc,Le,go,Mc,xt,wc,aa,Pc,$c,dr,Nc,yc,Fc,mn,zc,cr,Ec,qc,_o,jc,ko,Ci,At,un,pr,vo,Cc,hr,xc,xi,Re,bo,Ac,mr,Lc,Ic,To,Sc,ra,Dc,Oc,Wc,Mo,Qc,wo,Hc,Bc,Rc,be,Po,Uc,Lt,Vc,ia,Kc,Xc,ur,Jc,Gc,Yc,fn,Zc,fr,ep,tp,$o,np,No,op,gr,sp,ap,yo,rp,Fo,Ai,It,gn,_r,zo,ip,kr,lp,Li,Ue,Eo,dp,vr,cp,pp,qo,hp,la,mp,up,fp,jo,gp,Co,_p,kp,vp,Je,xo,bp,St,Tp,da,Mp,wp,br,Pp,$p,Np,_n,yp,Tr,Fp,zp,Ao,Ii,Dt,kn,Mr,Lo,Ep,wr,qp,Si,Ve,Io,jp,Pr,Cp,xp,So,Ap,ca,Lp,Ip,Sp,Do,Dp,Oo,Op,Wp,Qp,Ie,Wo,Hp,Ot,Bp,pa,Rp,Up,$r,Vp,Kp,Xp,vn,Jp,Nr,Gp,Yp,Qo,Zp,Ho,Di,Wt,bn,yr,Bo,eh,Fr,th,Oi,Ke,Ro,nh,Qt,oh,zr,sh,ah,Er,rh,ih,lh,Uo,dh,ha,ch,ph,hh,Vo,mh,Ko,uh,fh,gh,Se,Xo,_h,Ht,kh,ma,vh,bh,qr,Th,Mh,wh,Tn,Ph,jr,$h,Nh,Jo,yh,Go,Wi,Bt,Mn,Cr,Yo,Fh,xr,zh,Qi,ze,Zo,Eh,Ar,qh,jh,es,Ch,ua,xh,Ah,Lh,ts,Ih,ns,Sh,Dh,Oh,wn,Wh,Ge,os,Qh,Rt,Hh,fa,Bh,Rh,Lr,Uh,Vh,Kh,Pn,Xh,Ir,Jh,Gh,ss,Hi,Ut,$n,Sr,as,Yh,Dr,Zh,Bi,Ee,rs,em,is,tm,Or,nm,om,sm,ls,am,ga,rm,im,lm,ds,dm,cs,cm,pm,hm,Nn,mm,De,ps,um,Vt,fm,_a,gm,_m,Wr,km,vm,bm,yn,Tm,Qr,Mm,wm,hs,Pm,ms,Ri,Kt,Fn,Hr,us,$m,Br,Nm,Ui,qe,fs,ym,Rr,Fm,zm,gs,Em,ka,qm,jm,Cm,_s,xm,ks,Am,Lm,Im,zn,Sm,Oe,vs,Dm,Xt,Om,va,Wm,Qm,Ur,Hm,Bm,Rm,En,Um,Vr,Vm,Km,bs,Xm,Ts,Vi,Jt,qn,Kr,Ms,Jm,Xr,Gm,Ki,je,ws,Ym,Jr,Zm,eu,Ps,tu,ba,nu,ou,su,$s,au,Ns,ru,iu,lu,jn,du,Ye,ys,cu,Gt,pu,Ta,hu,mu,Gr,uu,fu,gu,Cn,_u,Yr,ku,vu,Fs,Xi,Yt,xn,Zr,zs,bu,ei,Tu,Ji,Ce,Es,Mu,ti,wu,Pu,qs,$u,Ma,Nu,yu,Fu,js,zu,Cs,Eu,qu,ju,An,Cu,We,xs,xu,Zt,Au,wa,Lu,Iu,ni,Su,Du,Ou,Ln,Wu,oi,Qu,Hu,As,Bu,Ls,Gi,en,In,si,Is,Ru,ai,Uu,Yi,xe,Ss,Vu,tn,Ku,ri,Xu,Ju,ii,Gu,Yu,Zu,Ds,ef,Pa,tf,nf,of,Os,sf,Ws,af,rf,lf,Sn,df,Qe,Qs,cf,nn,pf,$a,hf,mf,li,uf,ff,gf,Dn,_f,di,kf,vf,Hs,bf,Bs,Zi;return k=new Ae({}),G=new Ae({}),Qn=new Ae({}),Hn=new J({props:{name:"class transformers.MPNetConfig",anchor:"transformers.MPNetConfig",parameters:[{name:"vocab_size",val:" = 30527"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/configuration_mpnet.py#L29",parametersDescription:[{anchor:"transformers.MPNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30527) &#x2014;
Vocabulary size of the MPNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetModel">MPNetModel</a> or <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetModel">TFMPNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.MPNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"}]}}),Rn=new ve({props:{code:`from transformers import MPNetModel, MPNetConfig

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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Un=new Ae({}),Vn=new J({props:{name:"class transformers.MPNetTokenizer",anchor:"transformers.MPNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L66",parametersDescription:[{anchor:"transformers.MPNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}]}}),Xn=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L231",parametersDescription:[{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Gn=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.MPNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L256",parametersDescription:[{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L283",parametersDescription:[{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),eo=new J({props:{name:"save_vocabulary",anchor:"transformers.MPNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet.py#L306"}}),to=new Ae({}),no=new J({props:{name:"class transformers.MPNetTokenizerFast",anchor:"transformers.MPNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L51",parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}]}}),ao=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L190",parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),ro=new Ae({}),io=new J({props:{name:"class transformers.MPNetModel",anchor:"transformers.MPNetModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L481",parametersDescription:[{anchor:"transformers.MPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ho=new J({props:{name:"forward",anchor:"transformers.MPNetModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L510",parametersDescription:[{anchor:"transformers.MPNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),pn=new ye({props:{$$slots:{default:[nk]},$$scope:{ctx:B}}}),mo=new ve({props:{code:`from transformers import MPNetTokenizer, MPNetModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),uo=new Ae({}),fo=new J({props:{name:"class transformers.MPNetForMaskedLM",anchor:"transformers.MPNetForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L574"}}),go=new J({props:{name:"forward",anchor:"transformers.MPNetForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L593",parametersDescription:[{anchor:"transformers.MPNetForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
`}}),mn=new ye({props:{$$slots:{default:[ok]},$$scope:{ctx:B}}}),_o=new ve({props:{code:`from transformers import MPNetTokenizer, MPNetForMaskedLM
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
`}}),ko=new ve({props:{code:`labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]
# mask labels of non-[MASK] tokens
labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -100)

outputs = model(**inputs, labels=labels)
round(outputs.loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># mask labels of non-[MASK] tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.where(inputs.input_ids == tokenizer.mask_token_id, labels, -<span class="hljs-number">100</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(outputs.loss.item(), <span class="hljs-number">2</span>)
`}}),vo=new Ae({}),bo=new J({props:{name:"class transformers.MPNetForSequenceClassification",anchor:"transformers.MPNetForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L683",parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Po=new J({props:{name:"forward",anchor:"transformers.MPNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L696",parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
`}}),fn=new ye({props:{$$slots:{default:[sk]},$$scope:{ctx:B}}}),$o=new ve({props:{code:`import torch
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
`}}),No=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
`}}),yo=new ve({props:{code:`import torch
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
`}}),Fo=new ve({props:{code:`# To train a model on \`num_labels\` classes, you can pass \`num_labels=num_labels\` to \`.from_pretrained(...)\`
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
<span class="hljs-meta">&gt;&gt;&gt; </span>loss.backward()`}}),zo=new Ae({}),Eo=new J({props:{name:"class transformers.MPNetForMultipleChoice",anchor:"transformers.MPNetForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L778",parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),xo=new J({props:{name:"forward",anchor:"transformers.MPNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L791",parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_n=new ye({props:{$$slots:{default:[ak]},$$scope:{ctx:B}}}),Ao=new ve({props:{code:`from transformers import MPNetTokenizer, MPNetForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Lo=new Ae({}),Io=new J({props:{name:"class transformers.MPNetForTokenClassification",anchor:"transformers.MPNetForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L869",parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Wo=new J({props:{name:"forward",anchor:"transformers.MPNetForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L884",parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
>MPNetConfig</a>) and inputs.</p>
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
`}}),vn=new ye({props:{$$slots:{default:[rk]},$$scope:{ctx:B}}}),Qo=new ve({props:{code:`from transformers import MPNetTokenizer, MPNetForTokenClassification
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
`}}),Ho=new ve({props:{code:`labels = predicted_token_class_ids
loss = model(**inputs, labels=labels).loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span>labels = predicted_token_class_ids
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = model(**inputs, labels=labels).loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Bo=new Ae({}),Ro=new J({props:{name:"class transformers.MPNetForQuestionAnswering",anchor:"transformers.MPNetForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L969",parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Xo=new J({props:{name:"forward",anchor:"transformers.MPNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_mpnet.py#L983",parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
`}}),Tn=new ye({props:{$$slots:{default:[ik]},$$scope:{ctx:B}}}),Jo=new ve({props:{code:`from transformers import MPNetTokenizer, MPNetForQuestionAnswering
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
`}}),Go=new ve({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = torch.tensor([14]), torch.tensor([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = outputs.loss
round(loss.item(), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = torch.tensor([<span class="hljs-number">14</span>]), torch.tensor([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)
`}}),Yo=new Ae({}),Zo=new J({props:{name:"class transformers.TFMPNetModel",anchor:"transformers.TFMPNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L665",parametersDescription:[{anchor:"transformers.TFMPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wn=new ye({props:{$$slots:{default:[lk]},$$scope:{ctx:B}}}),os=new J({props:{name:"call",anchor:"transformers.TFMPNetModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L670",parametersDescription:[{anchor:"transformers.TFMPNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Pn=new ye({props:{$$slots:{default:[dk]},$$scope:{ctx:B}}}),ss=new ve({props:{code:`from transformers import MPNetTokenizer, TFMPNetModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),as=new Ae({}),rs=new J({props:{name:"class transformers.TFMPNetForMaskedLM",anchor:"transformers.TFMPNetForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L769",parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Nn=new ye({props:{$$slots:{default:[ck]},$$scope:{ctx:B}}}),ps=new J({props:{name:"call",anchor:"transformers.TFMPNetForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L786",parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),yn=new ye({props:{$$slots:{default:[pk]},$$scope:{ctx:B}}}),hs=new ve({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMaskedLM
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
`}}),us=new Ae({}),fs=new J({props:{name:"class transformers.TFMPNetForSequenceClassification",anchor:"transformers.TFMPNetForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L881",parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zn=new ye({props:{$$slots:{default:[hk]},$$scope:{ctx:B}}}),vs=new J({props:{name:"call",anchor:"transformers.TFMPNetForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L892",parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),En=new ye({props:{$$slots:{default:[mk]},$$scope:{ctx:B}}}),bs=new ve({props:{code:`from transformers import MPNetTokenizer, TFMPNetForSequenceClassification
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
`}}),Ms=new Ae({}),ws=new J({props:{name:"class transformers.TFMPNetForMultipleChoice",anchor:"transformers.TFMPNetForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L963",parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jn=new ye({props:{$$slots:{default:[uk]},$$scope:{ctx:B}}}),ys=new J({props:{name:"call",anchor:"transformers.TFMPNetForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L983",parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Cn=new ye({props:{$$slots:{default:[fk]},$$scope:{ctx:B}}}),Fs=new ve({props:{code:`from transformers import MPNetTokenizer, TFMPNetForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),zs=new Ae({}),Es=new J({props:{name:"class transformers.TFMPNetForTokenClassification",anchor:"transformers.TFMPNetForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1081",parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),An=new ye({props:{$$slots:{default:[gk]},$$scope:{ctx:B}}}),xs=new J({props:{name:"call",anchor:"transformers.TFMPNetForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1095",parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Ln=new ye({props:{$$slots:{default:[_k]},$$scope:{ctx:B}}}),As=new ve({props:{code:`from transformers import MPNetTokenizer, TFMPNetForTokenClassification
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
`}}),Is=new Ae({}),Ss=new J({props:{name:"class transformers.TFMPNetForQuestionAnswering",anchor:"transformers.TFMPNetForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1165",parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Sn=new ye({props:{$$slots:{default:[kk]},$$scope:{ctx:B}}}),Qs=new J({props:{name:"call",anchor:"transformers.TFMPNetForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1178",parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFMPNetForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetConfig"
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
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Dn=new ye({props:{$$slots:{default:[vk]},$$scope:{ctx:B}}}),Hs=new ve({props:{code:`from transformers import MPNetTokenizer, TFMPNetForQuestionAnswering
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
`}}),Bs=new ve({props:{code:`# target is "nice puppet"
target_start_index, target_end_index = tf.constant([14]), tf.constant([15])

outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
loss = tf.math.reduce_mean(outputs.loss)
round(float(loss), 2)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># target is &quot;nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>target_start_index, target_end_index = tf.constant([<span class="hljs-number">14</span>]), tf.constant([<span class="hljs-number">15</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=target_start_index, end_positions=target_end_index)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = tf.math.reduce_mean(outputs.loss)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(<span class="hljs-built_in">float</span>(loss), <span class="hljs-number">2</span>)
`}}),{c(){p=o("meta"),F=l(),f=o("h1"),_=o("a"),$=o("span"),v(k.$$.fragment),g=l(),y=o("span"),le=r("MPNet"),U=l(),z=o("h2"),X=o("a"),D=o("span"),v(G.$$.fragment),de=l(),O=o("span"),ce=r("Overview"),se=l(),R=o("p"),L=r("The MPNet model was proposed in "),Y=o("a"),V=r("MPNet: Masked and Permuted Pre-training for Language Understanding"),E=r(" by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),q=l(),Z=o("p"),Q=r(`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),ae=l(),ee=o("p"),H=r("The abstract from the paper is the following:"),re=l(),te=o("p"),j=o("em"),pe=r(`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),W=l(),ne=o("p"),he=r("Tips:"),x=l(),oe=o("ul"),C=o("li"),me=r("MPNet doesn\u2019t have "),c=o("code"),N=r("token_type_ids"),K=r(`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),_e=o("code"),Te=r("tokenizer.sep_token"),I=r(" (or "),ke=o("code"),Me=r("[sep]"),we=r(")."),A=l(),S=o("p"),Pe=r("The original code can be found "),ge=o("a"),ue=r("here"),$e=r("."),ie=l(),fe=o("h2"),on=o("a"),Qa=o("span"),v(Qn.$$.fragment),Kl=l(),Ha=o("span"),Xl=r("MPNetConfig"),Pi=l(),He=o("div"),v(Hn.$$.fragment),Jl=l(),ut=o("p"),Gl=r("This is the configuration class to store the configuration of a "),Ks=o("a"),Yl=r("MPNetModel"),Zl=r(" or a "),Xs=o("a"),ed=r("TFMPNetModel"),td=r(`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Bn=o("a"),nd=r("mpnet-base"),od=r(" architecture."),sd=l(),yt=o("p"),ad=r("Configuration objects inherit from "),Js=o("a"),rd=r("PretrainedConfig"),id=r(` and can be used to control the model outputs. Read the
documentation from `),Gs=o("a"),ld=r("PretrainedConfig"),dd=r(" for more information."),cd=l(),Ba=o("p"),pd=r("Examples:"),hd=l(),v(Rn.$$.fragment),$i=l(),Ft=o("h2"),sn=o("a"),Ra=o("span"),v(Un.$$.fragment),md=l(),Ua=o("span"),ud=r("MPNetTokenizer"),Ni=l(),Fe=o("div"),v(Vn.$$.fragment),fd=l(),Kn=o("p"),gd=r("This tokenizer inherits from "),Ys=o("a"),_d=r("BertTokenizer"),kd=r(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),vd=l(),gt=o("div"),v(Xn.$$.fragment),bd=l(),Va=o("p"),Td=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),Md=l(),Jn=o("ul"),Zs=o("li"),wd=r("single sequence: "),Ka=o("code"),Pd=r("<s> X </s>"),$d=l(),ea=o("li"),Nd=r("pair of sequences: "),Xa=o("code"),yd=r("<s> A </s></s> B </s>"),Fd=l(),an=o("div"),v(Gn.$$.fragment),zd=l(),Yn=o("p"),Ed=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ja=o("code"),qd=r("prepare_for_model"),jd=r(" methods."),Cd=l(),rn=o("div"),v(Zn.$$.fragment),xd=l(),Ga=o("p"),Ad=r(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),Ld=l(),ta=o("div"),v(eo.$$.fragment),yi=l(),zt=o("h2"),ln=o("a"),Ya=o("span"),v(to.$$.fragment),Id=l(),Za=o("span"),Sd=r("MPNetTokenizerFast"),Fi=l(),Ze=o("div"),v(no.$$.fragment),Dd=l(),oo=o("p"),Od=r("Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),er=o("em"),Wd=r("tokenizers"),Qd=r(" library). Based on WordPiece."),Hd=l(),so=o("p"),Bd=r("This tokenizer inherits from "),na=o("a"),Rd=r("PreTrainedTokenizerFast"),Ud=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Vd=l(),dn=o("div"),v(ao.$$.fragment),Kd=l(),tr=o("p"),Xd=r(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),zi=l(),Et=o("h2"),cn=o("a"),nr=o("span"),v(ro.$$.fragment),Jd=l(),or=o("span"),Gd=r("MPNetModel"),Ei=l(),Be=o("div"),v(io.$$.fragment),Yd=l(),sr=o("p"),Zd=r("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),ec=l(),lo=o("p"),tc=r("This model inherits from "),oa=o("a"),nc=r("PreTrainedModel"),oc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sc=l(),co=o("p"),ac=r("This model is also a PyTorch "),po=o("a"),rc=r("torch.nn.Module"),ic=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lc=l(),Xe=o("div"),v(ho.$$.fragment),dc=l(),qt=o("p"),cc=r("The "),sa=o("a"),pc=r("MPNetModel"),hc=r(" forward method, overrides the "),ar=o("code"),mc=r("__call__"),uc=r(" special method."),fc=l(),v(pn.$$.fragment),gc=l(),rr=o("p"),_c=r("Example:"),kc=l(),v(mo.$$.fragment),qi=l(),jt=o("h2"),hn=o("a"),ir=o("span"),v(uo.$$.fragment),vc=l(),lr=o("span"),bc=r("MPNetForMaskedLM"),ji=l(),Ct=o("div"),v(fo.$$.fragment),Tc=l(),Le=o("div"),v(go.$$.fragment),Mc=l(),xt=o("p"),wc=r("The "),aa=o("a"),Pc=r("MPNetForMaskedLM"),$c=r(" forward method, overrides the "),dr=o("code"),Nc=r("__call__"),yc=r(" special method."),Fc=l(),v(mn.$$.fragment),zc=l(),cr=o("p"),Ec=r("Example:"),qc=l(),v(_o.$$.fragment),jc=l(),v(ko.$$.fragment),Ci=l(),At=o("h2"),un=o("a"),pr=o("span"),v(vo.$$.fragment),Cc=l(),hr=o("span"),xc=r("MPNetForSequenceClassification"),xi=l(),Re=o("div"),v(bo.$$.fragment),Ac=l(),mr=o("p"),Lc=r(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Ic=l(),To=o("p"),Sc=r("This model inherits from "),ra=o("a"),Dc=r("PreTrainedModel"),Oc=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Wc=l(),Mo=o("p"),Qc=r("This model is also a PyTorch "),wo=o("a"),Hc=r("torch.nn.Module"),Bc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rc=l(),be=o("div"),v(Po.$$.fragment),Uc=l(),Lt=o("p"),Vc=r("The "),ia=o("a"),Kc=r("MPNetForSequenceClassification"),Xc=r(" forward method, overrides the "),ur=o("code"),Jc=r("__call__"),Gc=r(" special method."),Yc=l(),v(fn.$$.fragment),Zc=l(),fr=o("p"),ep=r("Example of single-label classification:"),tp=l(),v($o.$$.fragment),np=l(),v(No.$$.fragment),op=l(),gr=o("p"),sp=r("Example of multi-label classification:"),ap=l(),v(yo.$$.fragment),rp=l(),v(Fo.$$.fragment),Ai=l(),It=o("h2"),gn=o("a"),_r=o("span"),v(zo.$$.fragment),ip=l(),kr=o("span"),lp=r("MPNetForMultipleChoice"),Li=l(),Ue=o("div"),v(Eo.$$.fragment),dp=l(),vr=o("p"),cp=r(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),pp=l(),qo=o("p"),hp=r("This model inherits from "),la=o("a"),mp=r("PreTrainedModel"),up=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fp=l(),jo=o("p"),gp=r("This model is also a PyTorch "),Co=o("a"),_p=r("torch.nn.Module"),kp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vp=l(),Je=o("div"),v(xo.$$.fragment),bp=l(),St=o("p"),Tp=r("The "),da=o("a"),Mp=r("MPNetForMultipleChoice"),wp=r(" forward method, overrides the "),br=o("code"),Pp=r("__call__"),$p=r(" special method."),Np=l(),v(_n.$$.fragment),yp=l(),Tr=o("p"),Fp=r("Example:"),zp=l(),v(Ao.$$.fragment),Ii=l(),Dt=o("h2"),kn=o("a"),Mr=o("span"),v(Lo.$$.fragment),Ep=l(),wr=o("span"),qp=r("MPNetForTokenClassification"),Si=l(),Ve=o("div"),v(Io.$$.fragment),jp=l(),Pr=o("p"),Cp=r(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),xp=l(),So=o("p"),Ap=r("This model inherits from "),ca=o("a"),Lp=r("PreTrainedModel"),Ip=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Sp=l(),Do=o("p"),Dp=r("This model is also a PyTorch "),Oo=o("a"),Op=r("torch.nn.Module"),Wp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qp=l(),Ie=o("div"),v(Wo.$$.fragment),Hp=l(),Ot=o("p"),Bp=r("The "),pa=o("a"),Rp=r("MPNetForTokenClassification"),Up=r(" forward method, overrides the "),$r=o("code"),Vp=r("__call__"),Kp=r(" special method."),Xp=l(),v(vn.$$.fragment),Jp=l(),Nr=o("p"),Gp=r("Example:"),Yp=l(),v(Qo.$$.fragment),Zp=l(),v(Ho.$$.fragment),Di=l(),Wt=o("h2"),bn=o("a"),yr=o("span"),v(Bo.$$.fragment),eh=l(),Fr=o("span"),th=r("MPNetForQuestionAnswering"),Oi=l(),Ke=o("div"),v(Ro.$$.fragment),nh=l(),Qt=o("p"),oh=r(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zr=o("code"),sh=r("span start logits"),ah=r(" and "),Er=o("code"),rh=r("span end logits"),ih=r(")."),lh=l(),Uo=o("p"),dh=r("This model inherits from "),ha=o("a"),ch=r("PreTrainedModel"),ph=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hh=l(),Vo=o("p"),mh=r("This model is also a PyTorch "),Ko=o("a"),uh=r("torch.nn.Module"),fh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gh=l(),Se=o("div"),v(Xo.$$.fragment),_h=l(),Ht=o("p"),kh=r("The "),ma=o("a"),vh=r("MPNetForQuestionAnswering"),bh=r(" forward method, overrides the "),qr=o("code"),Th=r("__call__"),Mh=r(" special method."),wh=l(),v(Tn.$$.fragment),Ph=l(),jr=o("p"),$h=r("Example:"),Nh=l(),v(Jo.$$.fragment),yh=l(),v(Go.$$.fragment),Wi=l(),Bt=o("h2"),Mn=o("a"),Cr=o("span"),v(Yo.$$.fragment),Fh=l(),xr=o("span"),zh=r("TFMPNetModel"),Qi=l(),ze=o("div"),v(Zo.$$.fragment),Eh=l(),Ar=o("p"),qh=r("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),jh=l(),es=o("p"),Ch=r("This model inherits from "),ua=o("a"),xh=r("TFPreTrainedModel"),Ah=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh=l(),ts=o("p"),Ih=r("This model is also a "),ns=o("a"),Sh=r("tf.keras.Model"),Dh=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Oh=l(),v(wn.$$.fragment),Wh=l(),Ge=o("div"),v(os.$$.fragment),Qh=l(),Rt=o("p"),Hh=r("The "),fa=o("a"),Bh=r("TFMPNetModel"),Rh=r(" forward method, overrides the "),Lr=o("code"),Uh=r("__call__"),Vh=r(" special method."),Kh=l(),v(Pn.$$.fragment),Xh=l(),Ir=o("p"),Jh=r("Example:"),Gh=l(),v(ss.$$.fragment),Hi=l(),Ut=o("h2"),$n=o("a"),Sr=o("span"),v(as.$$.fragment),Yh=l(),Dr=o("span"),Zh=r("TFMPNetForMaskedLM"),Bi=l(),Ee=o("div"),v(rs.$$.fragment),em=l(),is=o("p"),tm=r("MPNet Model with a "),Or=o("code"),nm=r("language modeling"),om=r(" head on top."),sm=l(),ls=o("p"),am=r("This model inherits from "),ga=o("a"),rm=r("TFPreTrainedModel"),im=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),lm=l(),ds=o("p"),dm=r("This model is also a "),cs=o("a"),cm=r("tf.keras.Model"),pm=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hm=l(),v(Nn.$$.fragment),mm=l(),De=o("div"),v(ps.$$.fragment),um=l(),Vt=o("p"),fm=r("The "),_a=o("a"),gm=r("TFMPNetForMaskedLM"),_m=r(" forward method, overrides the "),Wr=o("code"),km=r("__call__"),vm=r(" special method."),bm=l(),v(yn.$$.fragment),Tm=l(),Qr=o("p"),Mm=r("Example:"),wm=l(),v(hs.$$.fragment),Pm=l(),v(ms.$$.fragment),Ri=l(),Kt=o("h2"),Fn=o("a"),Hr=o("span"),v(us.$$.fragment),$m=l(),Br=o("span"),Nm=r("TFMPNetForSequenceClassification"),Ui=l(),qe=o("div"),v(fs.$$.fragment),ym=l(),Rr=o("p"),Fm=r(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),zm=l(),gs=o("p"),Em=r("This model inherits from "),ka=o("a"),qm=r("TFPreTrainedModel"),jm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cm=l(),_s=o("p"),xm=r("This model is also a "),ks=o("a"),Am=r("tf.keras.Model"),Lm=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Im=l(),v(zn.$$.fragment),Sm=l(),Oe=o("div"),v(vs.$$.fragment),Dm=l(),Xt=o("p"),Om=r("The "),va=o("a"),Wm=r("TFMPNetForSequenceClassification"),Qm=r(" forward method, overrides the "),Ur=o("code"),Hm=r("__call__"),Bm=r(" special method."),Rm=l(),v(En.$$.fragment),Um=l(),Vr=o("p"),Vm=r("Example:"),Km=l(),v(bs.$$.fragment),Xm=l(),v(Ts.$$.fragment),Vi=l(),Jt=o("h2"),qn=o("a"),Kr=o("span"),v(Ms.$$.fragment),Jm=l(),Xr=o("span"),Gm=r("TFMPNetForMultipleChoice"),Ki=l(),je=o("div"),v(ws.$$.fragment),Ym=l(),Jr=o("p"),Zm=r(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),eu=l(),Ps=o("p"),tu=r("This model inherits from "),ba=o("a"),nu=r("TFPreTrainedModel"),ou=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),su=l(),$s=o("p"),au=r("This model is also a "),Ns=o("a"),ru=r("tf.keras.Model"),iu=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lu=l(),v(jn.$$.fragment),du=l(),Ye=o("div"),v(ys.$$.fragment),cu=l(),Gt=o("p"),pu=r("The "),Ta=o("a"),hu=r("TFMPNetForMultipleChoice"),mu=r(" forward method, overrides the "),Gr=o("code"),uu=r("__call__"),fu=r(" special method."),gu=l(),v(Cn.$$.fragment),_u=l(),Yr=o("p"),ku=r("Example:"),vu=l(),v(Fs.$$.fragment),Xi=l(),Yt=o("h2"),xn=o("a"),Zr=o("span"),v(zs.$$.fragment),bu=l(),ei=o("span"),Tu=r("TFMPNetForTokenClassification"),Ji=l(),Ce=o("div"),v(Es.$$.fragment),Mu=l(),ti=o("p"),wu=r(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Pu=l(),qs=o("p"),$u=r("This model inherits from "),Ma=o("a"),Nu=r("TFPreTrainedModel"),yu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fu=l(),js=o("p"),zu=r("This model is also a "),Cs=o("a"),Eu=r("tf.keras.Model"),qu=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ju=l(),v(An.$$.fragment),Cu=l(),We=o("div"),v(xs.$$.fragment),xu=l(),Zt=o("p"),Au=r("The "),wa=o("a"),Lu=r("TFMPNetForTokenClassification"),Iu=r(" forward method, overrides the "),ni=o("code"),Su=r("__call__"),Du=r(" special method."),Ou=l(),v(Ln.$$.fragment),Wu=l(),oi=o("p"),Qu=r("Example:"),Hu=l(),v(As.$$.fragment),Bu=l(),v(Ls.$$.fragment),Gi=l(),en=o("h2"),In=o("a"),si=o("span"),v(Is.$$.fragment),Ru=l(),ai=o("span"),Uu=r("TFMPNetForQuestionAnswering"),Yi=l(),xe=o("div"),v(Ss.$$.fragment),Vu=l(),tn=o("p"),Ku=r(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ri=o("code"),Xu=r("span start logits"),Ju=r(" and "),ii=o("code"),Gu=r("span end logits"),Yu=r(")."),Zu=l(),Ds=o("p"),ef=r("This model inherits from "),Pa=o("a"),tf=r("TFPreTrainedModel"),nf=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),of=l(),Os=o("p"),sf=r("This model is also a "),Ws=o("a"),af=r("tf.keras.Model"),rf=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lf=l(),v(Sn.$$.fragment),df=l(),Qe=o("div"),v(Qs.$$.fragment),cf=l(),nn=o("p"),pf=r("The "),$a=o("a"),hf=r("TFMPNetForQuestionAnswering"),mf=r(" forward method, overrides the "),li=o("code"),uf=r("__call__"),ff=r(" special method."),gf=l(),v(Dn.$$.fragment),_f=l(),di=o("p"),kf=r("Example:"),vf=l(),v(Hs.$$.fragment),bf=l(),v(Bs.$$.fragment),this.h()},l(n){const u=ek('[data-svelte="svelte-1phssyn"]',document.head);p=s(u,"META",{name:!0,content:!0}),u.forEach(t),F=d(n),f=s(n,"H1",{class:!0});var Rs=a(f);_=s(Rs,"A",{id:!0,class:!0,href:!0});var ci=a(_);$=s(ci,"SPAN",{});var pi=a($);b(k.$$.fragment,pi),pi.forEach(t),ci.forEach(t),g=d(Rs),y=s(Rs,"SPAN",{});var hi=a(y);le=i(hi,"MPNet"),hi.forEach(t),Rs.forEach(t),U=d(n),z=s(n,"H2",{class:!0});var Us=a(z);X=s(Us,"A",{id:!0,class:!0,href:!0});var mi=a(X);D=s(mi,"SPAN",{});var ui=a(D);b(G.$$.fragment,ui),ui.forEach(t),mi.forEach(t),de=d(Us),O=s(Us,"SPAN",{});var fi=a(O);ce=i(fi,"Overview"),fi.forEach(t),Us.forEach(t),se=d(n),R=s(n,"P",{});var Vs=a(R);L=i(Vs,"The MPNet model was proposed in "),Y=s(Vs,"A",{href:!0,rel:!0});var gi=a(Y);V=i(gi,"MPNet: Masked and Permuted Pre-training for Language Understanding"),gi.forEach(t),E=i(Vs," by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),Vs.forEach(t),q=d(n),Z=s(n,"P",{});var _i=a(Z);Q=i(_i,`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),_i.forEach(t),ae=d(n),ee=s(n,"P",{});var ki=a(ee);H=i(ki,"The abstract from the paper is the following:"),ki.forEach(t),re=d(n),te=s(n,"P",{});var vi=a(te);j=s(vi,"EM",{});var bi=a(j);pe=i(bi,`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),bi.forEach(t),vi.forEach(t),W=d(n),ne=s(n,"P",{});var Ti=a(ne);he=i(Ti,"Tips:"),Ti.forEach(t),x=d(n),oe=s(n,"UL",{});var Mi=a(oe);C=s(Mi,"LI",{});var ft=a(C);me=i(ft,"MPNet doesn\u2019t have "),c=s(ft,"CODE",{});var wi=a(c);N=i(wi,"token_type_ids"),wi.forEach(t),K=i(ft,`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),_e=s(ft,"CODE",{});var wf=a(_e);Te=i(wf,"tokenizer.sep_token"),wf.forEach(t),I=i(ft," (or "),ke=s(ft,"CODE",{});var Pf=a(ke);Me=i(Pf,"[sep]"),Pf.forEach(t),we=i(ft,")."),ft.forEach(t),Mi.forEach(t),A=d(n),S=s(n,"P",{});var el=a(S);Pe=i(el,"The original code can be found "),ge=s(el,"A",{href:!0,rel:!0});var $f=a(ge);ue=i($f,"here"),$f.forEach(t),$e=i(el,"."),el.forEach(t),ie=d(n),fe=s(n,"H2",{class:!0});var tl=a(fe);on=s(tl,"A",{id:!0,class:!0,href:!0});var Nf=a(on);Qa=s(Nf,"SPAN",{});var yf=a(Qa);b(Qn.$$.fragment,yf),yf.forEach(t),Nf.forEach(t),Kl=d(tl),Ha=s(tl,"SPAN",{});var Ff=a(Ha);Xl=i(Ff,"MPNetConfig"),Ff.forEach(t),tl.forEach(t),Pi=d(n),He=s(n,"DIV",{class:!0});var _t=a(He);b(Hn.$$.fragment,_t),Jl=d(_t),ut=s(_t,"P",{});var On=a(ut);Gl=i(On,"This is the configuration class to store the configuration of a "),Ks=s(On,"A",{href:!0});var zf=a(Ks);Yl=i(zf,"MPNetModel"),zf.forEach(t),Zl=i(On," or a "),Xs=s(On,"A",{href:!0});var Ef=a(Xs);ed=i(Ef,"TFMPNetModel"),Ef.forEach(t),td=i(On,`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Bn=s(On,"A",{href:!0,rel:!0});var qf=a(Bn);nd=i(qf,"mpnet-base"),qf.forEach(t),od=i(On," architecture."),On.forEach(t),sd=d(_t),yt=s(_t,"P",{});var Na=a(yt);ad=i(Na,"Configuration objects inherit from "),Js=s(Na,"A",{href:!0});var jf=a(Js);rd=i(jf,"PretrainedConfig"),jf.forEach(t),id=i(Na,` and can be used to control the model outputs. Read the
documentation from `),Gs=s(Na,"A",{href:!0});var Cf=a(Gs);ld=i(Cf,"PretrainedConfig"),Cf.forEach(t),dd=i(Na," for more information."),Na.forEach(t),cd=d(_t),Ba=s(_t,"P",{});var xf=a(Ba);pd=i(xf,"Examples:"),xf.forEach(t),hd=d(_t),b(Rn.$$.fragment,_t),_t.forEach(t),$i=d(n),Ft=s(n,"H2",{class:!0});var nl=a(Ft);sn=s(nl,"A",{id:!0,class:!0,href:!0});var Af=a(sn);Ra=s(Af,"SPAN",{});var Lf=a(Ra);b(Un.$$.fragment,Lf),Lf.forEach(t),Af.forEach(t),md=d(nl),Ua=s(nl,"SPAN",{});var If=a(Ua);ud=i(If,"MPNetTokenizer"),If.forEach(t),nl.forEach(t),Ni=d(n),Fe=s(n,"DIV",{class:!0});var et=a(Fe);b(Vn.$$.fragment,et),fd=d(et),Kn=s(et,"P",{});var ol=a(Kn);gd=i(ol,"This tokenizer inherits from "),Ys=s(ol,"A",{href:!0});var Sf=a(Ys);_d=i(Sf,"BertTokenizer"),Sf.forEach(t),kd=i(ol,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),ol.forEach(t),vd=d(et),gt=s(et,"DIV",{class:!0});var ya=a(gt);b(Xn.$$.fragment,ya),bd=d(ya),Va=s(ya,"P",{});var Df=a(Va);Td=i(Df,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),Df.forEach(t),Md=d(ya),Jn=s(ya,"UL",{});var sl=a(Jn);Zs=s(sl,"LI",{});var Tf=a(Zs);wd=i(Tf,"single sequence: "),Ka=s(Tf,"CODE",{});var Of=a(Ka);Pd=i(Of,"<s> X </s>"),Of.forEach(t),Tf.forEach(t),$d=d(sl),ea=s(sl,"LI",{});var Mf=a(ea);Nd=i(Mf,"pair of sequences: "),Xa=s(Mf,"CODE",{});var Wf=a(Xa);yd=i(Wf,"<s> A </s></s> B </s>"),Wf.forEach(t),Mf.forEach(t),sl.forEach(t),ya.forEach(t),Fd=d(et),an=s(et,"DIV",{class:!0});var al=a(an);b(Gn.$$.fragment,al),zd=d(al),Yn=s(al,"P",{});var rl=a(Yn);Ed=i(rl,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Ja=s(rl,"CODE",{});var Qf=a(Ja);qd=i(Qf,"prepare_for_model"),Qf.forEach(t),jd=i(rl," methods."),rl.forEach(t),al.forEach(t),Cd=d(et),rn=s(et,"DIV",{class:!0});var il=a(rn);b(Zn.$$.fragment,il),xd=d(il),Ga=s(il,"P",{});var Hf=a(Ga);Ad=i(Hf,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),Hf.forEach(t),il.forEach(t),Ld=d(et),ta=s(et,"DIV",{class:!0});var Bf=a(ta);b(eo.$$.fragment,Bf),Bf.forEach(t),et.forEach(t),yi=d(n),zt=s(n,"H2",{class:!0});var ll=a(zt);ln=s(ll,"A",{id:!0,class:!0,href:!0});var Rf=a(ln);Ya=s(Rf,"SPAN",{});var Uf=a(Ya);b(to.$$.fragment,Uf),Uf.forEach(t),Rf.forEach(t),Id=d(ll),Za=s(ll,"SPAN",{});var Vf=a(Za);Sd=i(Vf,"MPNetTokenizerFast"),Vf.forEach(t),ll.forEach(t),Fi=d(n),Ze=s(n,"DIV",{class:!0});var Wn=a(Ze);b(no.$$.fragment,Wn),Dd=d(Wn),oo=s(Wn,"P",{});var dl=a(oo);Od=i(dl,"Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),er=s(dl,"EM",{});var Kf=a(er);Wd=i(Kf,"tokenizers"),Kf.forEach(t),Qd=i(dl," library). Based on WordPiece."),dl.forEach(t),Hd=d(Wn),so=s(Wn,"P",{});var cl=a(so);Bd=i(cl,"This tokenizer inherits from "),na=s(cl,"A",{href:!0});var Xf=a(na);Rd=i(Xf,"PreTrainedTokenizerFast"),Xf.forEach(t),Ud=i(cl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),cl.forEach(t),Vd=d(Wn),dn=s(Wn,"DIV",{class:!0});var pl=a(dn);b(ao.$$.fragment,pl),Kd=d(pl),tr=s(pl,"P",{});var Jf=a(tr);Xd=i(Jf,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),Jf.forEach(t),pl.forEach(t),Wn.forEach(t),zi=d(n),Et=s(n,"H2",{class:!0});var hl=a(Et);cn=s(hl,"A",{id:!0,class:!0,href:!0});var Gf=a(cn);nr=s(Gf,"SPAN",{});var Yf=a(nr);b(ro.$$.fragment,Yf),Yf.forEach(t),Gf.forEach(t),Jd=d(hl),or=s(hl,"SPAN",{});var Zf=a(or);Gd=i(Zf,"MPNetModel"),Zf.forEach(t),hl.forEach(t),Ei=d(n),Be=s(n,"DIV",{class:!0});var kt=a(Be);b(io.$$.fragment,kt),Yd=d(kt),sr=s(kt,"P",{});var eg=a(sr);Zd=i(eg,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),eg.forEach(t),ec=d(kt),lo=s(kt,"P",{});var ml=a(lo);tc=i(ml,"This model inherits from "),oa=s(ml,"A",{href:!0});var tg=a(oa);nc=i(tg,"PreTrainedModel"),tg.forEach(t),oc=i(ml,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ml.forEach(t),sc=d(kt),co=s(kt,"P",{});var ul=a(co);ac=i(ul,"This model is also a PyTorch "),po=s(ul,"A",{href:!0,rel:!0});var ng=a(po);rc=i(ng,"torch.nn.Module"),ng.forEach(t),ic=i(ul,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ul.forEach(t),lc=d(kt),Xe=s(kt,"DIV",{class:!0});var vt=a(Xe);b(ho.$$.fragment,vt),dc=d(vt),qt=s(vt,"P",{});var Fa=a(qt);cc=i(Fa,"The "),sa=s(Fa,"A",{href:!0});var og=a(sa);pc=i(og,"MPNetModel"),og.forEach(t),hc=i(Fa," forward method, overrides the "),ar=s(Fa,"CODE",{});var sg=a(ar);mc=i(sg,"__call__"),sg.forEach(t),uc=i(Fa," special method."),Fa.forEach(t),fc=d(vt),b(pn.$$.fragment,vt),gc=d(vt),rr=s(vt,"P",{});var ag=a(rr);_c=i(ag,"Example:"),ag.forEach(t),kc=d(vt),b(mo.$$.fragment,vt),vt.forEach(t),kt.forEach(t),qi=d(n),jt=s(n,"H2",{class:!0});var fl=a(jt);hn=s(fl,"A",{id:!0,class:!0,href:!0});var rg=a(hn);ir=s(rg,"SPAN",{});var ig=a(ir);b(uo.$$.fragment,ig),ig.forEach(t),rg.forEach(t),vc=d(fl),lr=s(fl,"SPAN",{});var lg=a(lr);bc=i(lg,"MPNetForMaskedLM"),lg.forEach(t),fl.forEach(t),ji=d(n),Ct=s(n,"DIV",{class:!0});var gl=a(Ct);b(fo.$$.fragment,gl),Tc=d(gl),Le=s(gl,"DIV",{class:!0});var tt=a(Le);b(go.$$.fragment,tt),Mc=d(tt),xt=s(tt,"P",{});var za=a(xt);wc=i(za,"The "),aa=s(za,"A",{href:!0});var dg=a(aa);Pc=i(dg,"MPNetForMaskedLM"),dg.forEach(t),$c=i(za," forward method, overrides the "),dr=s(za,"CODE",{});var cg=a(dr);Nc=i(cg,"__call__"),cg.forEach(t),yc=i(za," special method."),za.forEach(t),Fc=d(tt),b(mn.$$.fragment,tt),zc=d(tt),cr=s(tt,"P",{});var pg=a(cr);Ec=i(pg,"Example:"),pg.forEach(t),qc=d(tt),b(_o.$$.fragment,tt),jc=d(tt),b(ko.$$.fragment,tt),tt.forEach(t),gl.forEach(t),Ci=d(n),At=s(n,"H2",{class:!0});var _l=a(At);un=s(_l,"A",{id:!0,class:!0,href:!0});var hg=a(un);pr=s(hg,"SPAN",{});var mg=a(pr);b(vo.$$.fragment,mg),mg.forEach(t),hg.forEach(t),Cc=d(_l),hr=s(_l,"SPAN",{});var ug=a(hr);xc=i(ug,"MPNetForSequenceClassification"),ug.forEach(t),_l.forEach(t),xi=d(n),Re=s(n,"DIV",{class:!0});var bt=a(Re);b(bo.$$.fragment,bt),Ac=d(bt),mr=s(bt,"P",{});var fg=a(mr);Lc=i(fg,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),fg.forEach(t),Ic=d(bt),To=s(bt,"P",{});var kl=a(To);Sc=i(kl,"This model inherits from "),ra=s(kl,"A",{href:!0});var gg=a(ra);Dc=i(gg,"PreTrainedModel"),gg.forEach(t),Oc=i(kl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kl.forEach(t),Wc=d(bt),Mo=s(bt,"P",{});var vl=a(Mo);Qc=i(vl,"This model is also a PyTorch "),wo=s(vl,"A",{href:!0,rel:!0});var _g=a(wo);Hc=i(_g,"torch.nn.Module"),_g.forEach(t),Bc=i(vl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vl.forEach(t),Rc=d(bt),be=s(bt,"DIV",{class:!0});var Ne=a(be);b(Po.$$.fragment,Ne),Uc=d(Ne),Lt=s(Ne,"P",{});var Ea=a(Lt);Vc=i(Ea,"The "),ia=s(Ea,"A",{href:!0});var kg=a(ia);Kc=i(kg,"MPNetForSequenceClassification"),kg.forEach(t),Xc=i(Ea," forward method, overrides the "),ur=s(Ea,"CODE",{});var vg=a(ur);Jc=i(vg,"__call__"),vg.forEach(t),Gc=i(Ea," special method."),Ea.forEach(t),Yc=d(Ne),b(fn.$$.fragment,Ne),Zc=d(Ne),fr=s(Ne,"P",{});var bg=a(fr);ep=i(bg,"Example of single-label classification:"),bg.forEach(t),tp=d(Ne),b($o.$$.fragment,Ne),np=d(Ne),b(No.$$.fragment,Ne),op=d(Ne),gr=s(Ne,"P",{});var Tg=a(gr);sp=i(Tg,"Example of multi-label classification:"),Tg.forEach(t),ap=d(Ne),b(yo.$$.fragment,Ne),rp=d(Ne),b(Fo.$$.fragment,Ne),Ne.forEach(t),bt.forEach(t),Ai=d(n),It=s(n,"H2",{class:!0});var bl=a(It);gn=s(bl,"A",{id:!0,class:!0,href:!0});var Mg=a(gn);_r=s(Mg,"SPAN",{});var wg=a(_r);b(zo.$$.fragment,wg),wg.forEach(t),Mg.forEach(t),ip=d(bl),kr=s(bl,"SPAN",{});var Pg=a(kr);lp=i(Pg,"MPNetForMultipleChoice"),Pg.forEach(t),bl.forEach(t),Li=d(n),Ue=s(n,"DIV",{class:!0});var Tt=a(Ue);b(Eo.$$.fragment,Tt),dp=d(Tt),vr=s(Tt,"P",{});var $g=a(vr);cp=i($g,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),$g.forEach(t),pp=d(Tt),qo=s(Tt,"P",{});var Tl=a(qo);hp=i(Tl,"This model inherits from "),la=s(Tl,"A",{href:!0});var Ng=a(la);mp=i(Ng,"PreTrainedModel"),Ng.forEach(t),up=i(Tl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tl.forEach(t),fp=d(Tt),jo=s(Tt,"P",{});var Ml=a(jo);gp=i(Ml,"This model is also a PyTorch "),Co=s(Ml,"A",{href:!0,rel:!0});var yg=a(Co);_p=i(yg,"torch.nn.Module"),yg.forEach(t),kp=i(Ml,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ml.forEach(t),vp=d(Tt),Je=s(Tt,"DIV",{class:!0});var Mt=a(Je);b(xo.$$.fragment,Mt),bp=d(Mt),St=s(Mt,"P",{});var qa=a(St);Tp=i(qa,"The "),da=s(qa,"A",{href:!0});var Fg=a(da);Mp=i(Fg,"MPNetForMultipleChoice"),Fg.forEach(t),wp=i(qa," forward method, overrides the "),br=s(qa,"CODE",{});var zg=a(br);Pp=i(zg,"__call__"),zg.forEach(t),$p=i(qa," special method."),qa.forEach(t),Np=d(Mt),b(_n.$$.fragment,Mt),yp=d(Mt),Tr=s(Mt,"P",{});var Eg=a(Tr);Fp=i(Eg,"Example:"),Eg.forEach(t),zp=d(Mt),b(Ao.$$.fragment,Mt),Mt.forEach(t),Tt.forEach(t),Ii=d(n),Dt=s(n,"H2",{class:!0});var wl=a(Dt);kn=s(wl,"A",{id:!0,class:!0,href:!0});var qg=a(kn);Mr=s(qg,"SPAN",{});var jg=a(Mr);b(Lo.$$.fragment,jg),jg.forEach(t),qg.forEach(t),Ep=d(wl),wr=s(wl,"SPAN",{});var Cg=a(wr);qp=i(Cg,"MPNetForTokenClassification"),Cg.forEach(t),wl.forEach(t),Si=d(n),Ve=s(n,"DIV",{class:!0});var wt=a(Ve);b(Io.$$.fragment,wt),jp=d(wt),Pr=s(wt,"P",{});var xg=a(Pr);Cp=i(xg,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),xg.forEach(t),xp=d(wt),So=s(wt,"P",{});var Pl=a(So);Ap=i(Pl,"This model inherits from "),ca=s(Pl,"A",{href:!0});var Ag=a(ca);Lp=i(Ag,"PreTrainedModel"),Ag.forEach(t),Ip=i(Pl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pl.forEach(t),Sp=d(wt),Do=s(wt,"P",{});var $l=a(Do);Dp=i($l,"This model is also a PyTorch "),Oo=s($l,"A",{href:!0,rel:!0});var Lg=a(Oo);Op=i(Lg,"torch.nn.Module"),Lg.forEach(t),Wp=i($l,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),$l.forEach(t),Qp=d(wt),Ie=s(wt,"DIV",{class:!0});var nt=a(Ie);b(Wo.$$.fragment,nt),Hp=d(nt),Ot=s(nt,"P",{});var ja=a(Ot);Bp=i(ja,"The "),pa=s(ja,"A",{href:!0});var Ig=a(pa);Rp=i(Ig,"MPNetForTokenClassification"),Ig.forEach(t),Up=i(ja," forward method, overrides the "),$r=s(ja,"CODE",{});var Sg=a($r);Vp=i(Sg,"__call__"),Sg.forEach(t),Kp=i(ja," special method."),ja.forEach(t),Xp=d(nt),b(vn.$$.fragment,nt),Jp=d(nt),Nr=s(nt,"P",{});var Dg=a(Nr);Gp=i(Dg,"Example:"),Dg.forEach(t),Yp=d(nt),b(Qo.$$.fragment,nt),Zp=d(nt),b(Ho.$$.fragment,nt),nt.forEach(t),wt.forEach(t),Di=d(n),Wt=s(n,"H2",{class:!0});var Nl=a(Wt);bn=s(Nl,"A",{id:!0,class:!0,href:!0});var Og=a(bn);yr=s(Og,"SPAN",{});var Wg=a(yr);b(Bo.$$.fragment,Wg),Wg.forEach(t),Og.forEach(t),eh=d(Nl),Fr=s(Nl,"SPAN",{});var Qg=a(Fr);th=i(Qg,"MPNetForQuestionAnswering"),Qg.forEach(t),Nl.forEach(t),Oi=d(n),Ke=s(n,"DIV",{class:!0});var Pt=a(Ke);b(Ro.$$.fragment,Pt),nh=d(Pt),Qt=s(Pt,"P",{});var Ca=a(Qt);oh=i(Ca,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),zr=s(Ca,"CODE",{});var Hg=a(zr);sh=i(Hg,"span start logits"),Hg.forEach(t),ah=i(Ca," and "),Er=s(Ca,"CODE",{});var Bg=a(Er);rh=i(Bg,"span end logits"),Bg.forEach(t),ih=i(Ca,")."),Ca.forEach(t),lh=d(Pt),Uo=s(Pt,"P",{});var yl=a(Uo);dh=i(yl,"This model inherits from "),ha=s(yl,"A",{href:!0});var Rg=a(ha);ch=i(Rg,"PreTrainedModel"),Rg.forEach(t),ph=i(yl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),yl.forEach(t),hh=d(Pt),Vo=s(Pt,"P",{});var Fl=a(Vo);mh=i(Fl,"This model is also a PyTorch "),Ko=s(Fl,"A",{href:!0,rel:!0});var Ug=a(Ko);uh=i(Ug,"torch.nn.Module"),Ug.forEach(t),fh=i(Fl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fl.forEach(t),gh=d(Pt),Se=s(Pt,"DIV",{class:!0});var ot=a(Se);b(Xo.$$.fragment,ot),_h=d(ot),Ht=s(ot,"P",{});var xa=a(Ht);kh=i(xa,"The "),ma=s(xa,"A",{href:!0});var Vg=a(ma);vh=i(Vg,"MPNetForQuestionAnswering"),Vg.forEach(t),bh=i(xa," forward method, overrides the "),qr=s(xa,"CODE",{});var Kg=a(qr);Th=i(Kg,"__call__"),Kg.forEach(t),Mh=i(xa," special method."),xa.forEach(t),wh=d(ot),b(Tn.$$.fragment,ot),Ph=d(ot),jr=s(ot,"P",{});var Xg=a(jr);$h=i(Xg,"Example:"),Xg.forEach(t),Nh=d(ot),b(Jo.$$.fragment,ot),yh=d(ot),b(Go.$$.fragment,ot),ot.forEach(t),Pt.forEach(t),Wi=d(n),Bt=s(n,"H2",{class:!0});var zl=a(Bt);Mn=s(zl,"A",{id:!0,class:!0,href:!0});var Jg=a(Mn);Cr=s(Jg,"SPAN",{});var Gg=a(Cr);b(Yo.$$.fragment,Gg),Gg.forEach(t),Jg.forEach(t),Fh=d(zl),xr=s(zl,"SPAN",{});var Yg=a(xr);zh=i(Yg,"TFMPNetModel"),Yg.forEach(t),zl.forEach(t),Qi=d(n),ze=s(n,"DIV",{class:!0});var st=a(ze);b(Zo.$$.fragment,st),Eh=d(st),Ar=s(st,"P",{});var Zg=a(Ar);qh=i(Zg,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),Zg.forEach(t),jh=d(st),es=s(st,"P",{});var El=a(es);Ch=i(El,"This model inherits from "),ua=s(El,"A",{href:!0});var e_=a(ua);xh=i(e_,"TFPreTrainedModel"),e_.forEach(t),Ah=i(El,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),El.forEach(t),Lh=d(st),ts=s(st,"P",{});var ql=a(ts);Ih=i(ql,"This model is also a "),ns=s(ql,"A",{href:!0,rel:!0});var t_=a(ns);Sh=i(t_,"tf.keras.Model"),t_.forEach(t),Dh=i(ql,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ql.forEach(t),Oh=d(st),b(wn.$$.fragment,st),Wh=d(st),Ge=s(st,"DIV",{class:!0});var $t=a(Ge);b(os.$$.fragment,$t),Qh=d($t),Rt=s($t,"P",{});var Aa=a(Rt);Hh=i(Aa,"The "),fa=s(Aa,"A",{href:!0});var n_=a(fa);Bh=i(n_,"TFMPNetModel"),n_.forEach(t),Rh=i(Aa," forward method, overrides the "),Lr=s(Aa,"CODE",{});var o_=a(Lr);Uh=i(o_,"__call__"),o_.forEach(t),Vh=i(Aa," special method."),Aa.forEach(t),Kh=d($t),b(Pn.$$.fragment,$t),Xh=d($t),Ir=s($t,"P",{});var s_=a(Ir);Jh=i(s_,"Example:"),s_.forEach(t),Gh=d($t),b(ss.$$.fragment,$t),$t.forEach(t),st.forEach(t),Hi=d(n),Ut=s(n,"H2",{class:!0});var jl=a(Ut);$n=s(jl,"A",{id:!0,class:!0,href:!0});var a_=a($n);Sr=s(a_,"SPAN",{});var r_=a(Sr);b(as.$$.fragment,r_),r_.forEach(t),a_.forEach(t),Yh=d(jl),Dr=s(jl,"SPAN",{});var i_=a(Dr);Zh=i(i_,"TFMPNetForMaskedLM"),i_.forEach(t),jl.forEach(t),Bi=d(n),Ee=s(n,"DIV",{class:!0});var at=a(Ee);b(rs.$$.fragment,at),em=d(at),is=s(at,"P",{});var Cl=a(is);tm=i(Cl,"MPNet Model with a "),Or=s(Cl,"CODE",{});var l_=a(Or);nm=i(l_,"language modeling"),l_.forEach(t),om=i(Cl," head on top."),Cl.forEach(t),sm=d(at),ls=s(at,"P",{});var xl=a(ls);am=i(xl,"This model inherits from "),ga=s(xl,"A",{href:!0});var d_=a(ga);rm=i(d_,"TFPreTrainedModel"),d_.forEach(t),im=i(xl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xl.forEach(t),lm=d(at),ds=s(at,"P",{});var Al=a(ds);dm=i(Al,"This model is also a "),cs=s(Al,"A",{href:!0,rel:!0});var c_=a(cs);cm=i(c_,"tf.keras.Model"),c_.forEach(t),pm=i(Al,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Al.forEach(t),hm=d(at),b(Nn.$$.fragment,at),mm=d(at),De=s(at,"DIV",{class:!0});var rt=a(De);b(ps.$$.fragment,rt),um=d(rt),Vt=s(rt,"P",{});var La=a(Vt);fm=i(La,"The "),_a=s(La,"A",{href:!0});var p_=a(_a);gm=i(p_,"TFMPNetForMaskedLM"),p_.forEach(t),_m=i(La," forward method, overrides the "),Wr=s(La,"CODE",{});var h_=a(Wr);km=i(h_,"__call__"),h_.forEach(t),vm=i(La," special method."),La.forEach(t),bm=d(rt),b(yn.$$.fragment,rt),Tm=d(rt),Qr=s(rt,"P",{});var m_=a(Qr);Mm=i(m_,"Example:"),m_.forEach(t),wm=d(rt),b(hs.$$.fragment,rt),Pm=d(rt),b(ms.$$.fragment,rt),rt.forEach(t),at.forEach(t),Ri=d(n),Kt=s(n,"H2",{class:!0});var Ll=a(Kt);Fn=s(Ll,"A",{id:!0,class:!0,href:!0});var u_=a(Fn);Hr=s(u_,"SPAN",{});var f_=a(Hr);b(us.$$.fragment,f_),f_.forEach(t),u_.forEach(t),$m=d(Ll),Br=s(Ll,"SPAN",{});var g_=a(Br);Nm=i(g_,"TFMPNetForSequenceClassification"),g_.forEach(t),Ll.forEach(t),Ui=d(n),qe=s(n,"DIV",{class:!0});var it=a(qe);b(fs.$$.fragment,it),ym=d(it),Rr=s(it,"P",{});var __=a(Rr);Fm=i(__,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),__.forEach(t),zm=d(it),gs=s(it,"P",{});var Il=a(gs);Em=i(Il,"This model inherits from "),ka=s(Il,"A",{href:!0});var k_=a(ka);qm=i(k_,"TFPreTrainedModel"),k_.forEach(t),jm=i(Il,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Il.forEach(t),Cm=d(it),_s=s(it,"P",{});var Sl=a(_s);xm=i(Sl,"This model is also a "),ks=s(Sl,"A",{href:!0,rel:!0});var v_=a(ks);Am=i(v_,"tf.keras.Model"),v_.forEach(t),Lm=i(Sl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Sl.forEach(t),Im=d(it),b(zn.$$.fragment,it),Sm=d(it),Oe=s(it,"DIV",{class:!0});var lt=a(Oe);b(vs.$$.fragment,lt),Dm=d(lt),Xt=s(lt,"P",{});var Ia=a(Xt);Om=i(Ia,"The "),va=s(Ia,"A",{href:!0});var b_=a(va);Wm=i(b_,"TFMPNetForSequenceClassification"),b_.forEach(t),Qm=i(Ia," forward method, overrides the "),Ur=s(Ia,"CODE",{});var T_=a(Ur);Hm=i(T_,"__call__"),T_.forEach(t),Bm=i(Ia," special method."),Ia.forEach(t),Rm=d(lt),b(En.$$.fragment,lt),Um=d(lt),Vr=s(lt,"P",{});var M_=a(Vr);Vm=i(M_,"Example:"),M_.forEach(t),Km=d(lt),b(bs.$$.fragment,lt),Xm=d(lt),b(Ts.$$.fragment,lt),lt.forEach(t),it.forEach(t),Vi=d(n),Jt=s(n,"H2",{class:!0});var Dl=a(Jt);qn=s(Dl,"A",{id:!0,class:!0,href:!0});var w_=a(qn);Kr=s(w_,"SPAN",{});var P_=a(Kr);b(Ms.$$.fragment,P_),P_.forEach(t),w_.forEach(t),Jm=d(Dl),Xr=s(Dl,"SPAN",{});var $_=a(Xr);Gm=i($_,"TFMPNetForMultipleChoice"),$_.forEach(t),Dl.forEach(t),Ki=d(n),je=s(n,"DIV",{class:!0});var dt=a(je);b(ws.$$.fragment,dt),Ym=d(dt),Jr=s(dt,"P",{});var N_=a(Jr);Zm=i(N_,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),N_.forEach(t),eu=d(dt),Ps=s(dt,"P",{});var Ol=a(Ps);tu=i(Ol,"This model inherits from "),ba=s(Ol,"A",{href:!0});var y_=a(ba);nu=i(y_,"TFPreTrainedModel"),y_.forEach(t),ou=i(Ol,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ol.forEach(t),su=d(dt),$s=s(dt,"P",{});var Wl=a($s);au=i(Wl,"This model is also a "),Ns=s(Wl,"A",{href:!0,rel:!0});var F_=a(Ns);ru=i(F_,"tf.keras.Model"),F_.forEach(t),iu=i(Wl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Wl.forEach(t),lu=d(dt),b(jn.$$.fragment,dt),du=d(dt),Ye=s(dt,"DIV",{class:!0});var Nt=a(Ye);b(ys.$$.fragment,Nt),cu=d(Nt),Gt=s(Nt,"P",{});var Sa=a(Gt);pu=i(Sa,"The "),Ta=s(Sa,"A",{href:!0});var z_=a(Ta);hu=i(z_,"TFMPNetForMultipleChoice"),z_.forEach(t),mu=i(Sa," forward method, overrides the "),Gr=s(Sa,"CODE",{});var E_=a(Gr);uu=i(E_,"__call__"),E_.forEach(t),fu=i(Sa," special method."),Sa.forEach(t),gu=d(Nt),b(Cn.$$.fragment,Nt),_u=d(Nt),Yr=s(Nt,"P",{});var q_=a(Yr);ku=i(q_,"Example:"),q_.forEach(t),vu=d(Nt),b(Fs.$$.fragment,Nt),Nt.forEach(t),dt.forEach(t),Xi=d(n),Yt=s(n,"H2",{class:!0});var Ql=a(Yt);xn=s(Ql,"A",{id:!0,class:!0,href:!0});var j_=a(xn);Zr=s(j_,"SPAN",{});var C_=a(Zr);b(zs.$$.fragment,C_),C_.forEach(t),j_.forEach(t),bu=d(Ql),ei=s(Ql,"SPAN",{});var x_=a(ei);Tu=i(x_,"TFMPNetForTokenClassification"),x_.forEach(t),Ql.forEach(t),Ji=d(n),Ce=s(n,"DIV",{class:!0});var ct=a(Ce);b(Es.$$.fragment,ct),Mu=d(ct),ti=s(ct,"P",{});var A_=a(ti);wu=i(A_,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),A_.forEach(t),Pu=d(ct),qs=s(ct,"P",{});var Hl=a(qs);$u=i(Hl,"This model inherits from "),Ma=s(Hl,"A",{href:!0});var L_=a(Ma);Nu=i(L_,"TFPreTrainedModel"),L_.forEach(t),yu=i(Hl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hl.forEach(t),Fu=d(ct),js=s(ct,"P",{});var Bl=a(js);zu=i(Bl,"This model is also a "),Cs=s(Bl,"A",{href:!0,rel:!0});var I_=a(Cs);Eu=i(I_,"tf.keras.Model"),I_.forEach(t),qu=i(Bl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bl.forEach(t),ju=d(ct),b(An.$$.fragment,ct),Cu=d(ct),We=s(ct,"DIV",{class:!0});var pt=a(We);b(xs.$$.fragment,pt),xu=d(pt),Zt=s(pt,"P",{});var Da=a(Zt);Au=i(Da,"The "),wa=s(Da,"A",{href:!0});var S_=a(wa);Lu=i(S_,"TFMPNetForTokenClassification"),S_.forEach(t),Iu=i(Da," forward method, overrides the "),ni=s(Da,"CODE",{});var D_=a(ni);Su=i(D_,"__call__"),D_.forEach(t),Du=i(Da," special method."),Da.forEach(t),Ou=d(pt),b(Ln.$$.fragment,pt),Wu=d(pt),oi=s(pt,"P",{});var O_=a(oi);Qu=i(O_,"Example:"),O_.forEach(t),Hu=d(pt),b(As.$$.fragment,pt),Bu=d(pt),b(Ls.$$.fragment,pt),pt.forEach(t),ct.forEach(t),Gi=d(n),en=s(n,"H2",{class:!0});var Rl=a(en);In=s(Rl,"A",{id:!0,class:!0,href:!0});var W_=a(In);si=s(W_,"SPAN",{});var Q_=a(si);b(Is.$$.fragment,Q_),Q_.forEach(t),W_.forEach(t),Ru=d(Rl),ai=s(Rl,"SPAN",{});var H_=a(ai);Uu=i(H_,"TFMPNetForQuestionAnswering"),H_.forEach(t),Rl.forEach(t),Yi=d(n),xe=s(n,"DIV",{class:!0});var ht=a(xe);b(Ss.$$.fragment,ht),Vu=d(ht),tn=s(ht,"P",{});var Oa=a(tn);Ku=i(Oa,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ri=s(Oa,"CODE",{});var B_=a(ri);Xu=i(B_,"span start logits"),B_.forEach(t),Ju=i(Oa," and "),ii=s(Oa,"CODE",{});var R_=a(ii);Gu=i(R_,"span end logits"),R_.forEach(t),Yu=i(Oa,")."),Oa.forEach(t),Zu=d(ht),Ds=s(ht,"P",{});var Ul=a(Ds);ef=i(Ul,"This model inherits from "),Pa=s(Ul,"A",{href:!0});var U_=a(Pa);tf=i(U_,"TFPreTrainedModel"),U_.forEach(t),nf=i(Ul,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ul.forEach(t),of=d(ht),Os=s(ht,"P",{});var Vl=a(Os);sf=i(Vl,"This model is also a "),Ws=s(Vl,"A",{href:!0,rel:!0});var V_=a(Ws);af=i(V_,"tf.keras.Model"),V_.forEach(t),rf=i(Vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Vl.forEach(t),lf=d(ht),b(Sn.$$.fragment,ht),df=d(ht),Qe=s(ht,"DIV",{class:!0});var mt=a(Qe);b(Qs.$$.fragment,mt),cf=d(mt),nn=s(mt,"P",{});var Wa=a(nn);pf=i(Wa,"The "),$a=s(Wa,"A",{href:!0});var K_=a($a);hf=i(K_,"TFMPNetForQuestionAnswering"),K_.forEach(t),mf=i(Wa," forward method, overrides the "),li=s(Wa,"CODE",{});var X_=a(li);uf=i(X_,"__call__"),X_.forEach(t),ff=i(Wa," special method."),Wa.forEach(t),gf=d(mt),b(Dn.$$.fragment,mt),_f=d(mt),di=s(mt,"P",{});var J_=a(di);kf=i(J_,"Example:"),J_.forEach(t),vf=d(mt),b(Hs.$$.fragment,mt),bf=d(mt),b(Bs.$$.fragment,mt),mt.forEach(t),ht.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(Tk)),h(_,"id","mpnet"),h(_,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_,"href","#mpnet"),h(f,"class","relative group"),h(X,"id","overview"),h(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(X,"href","#overview"),h(z,"class","relative group"),h(Y,"href","https://arxiv.org/abs/2004.09297"),h(Y,"rel","nofollow"),h(ge,"href","https://github.com/microsoft/MPNet"),h(ge,"rel","nofollow"),h(on,"id","transformers.MPNetConfig"),h(on,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(on,"href","#transformers.MPNetConfig"),h(fe,"class","relative group"),h(Ks,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetModel"),h(Xs,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetModel"),h(Bn,"href","https://huggingface.co/mpnet-base"),h(Bn,"rel","nofollow"),h(Js,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Gs,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(He,"class","docstring"),h(sn,"id","transformers.MPNetTokenizer"),h(sn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(sn,"href","#transformers.MPNetTokenizer"),h(Ft,"class","relative group"),h(Ys,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),h(gt,"class","docstring"),h(an,"class","docstring"),h(rn,"class","docstring"),h(ta,"class","docstring"),h(Fe,"class","docstring"),h(ln,"id","transformers.MPNetTokenizerFast"),h(ln,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ln,"href","#transformers.MPNetTokenizerFast"),h(zt,"class","relative group"),h(na,"href","/docs/transformers/main/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(dn,"class","docstring"),h(Ze,"class","docstring"),h(cn,"id","transformers.MPNetModel"),h(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(cn,"href","#transformers.MPNetModel"),h(Et,"class","relative group"),h(oa,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(po,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(po,"rel","nofollow"),h(sa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetModel"),h(Xe,"class","docstring"),h(Be,"class","docstring"),h(hn,"id","transformers.MPNetForMaskedLM"),h(hn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(hn,"href","#transformers.MPNetForMaskedLM"),h(jt,"class","relative group"),h(aa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForMaskedLM"),h(Le,"class","docstring"),h(Ct,"class","docstring"),h(un,"id","transformers.MPNetForSequenceClassification"),h(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(un,"href","#transformers.MPNetForSequenceClassification"),h(At,"class","relative group"),h(ra,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(wo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(wo,"rel","nofollow"),h(ia,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForSequenceClassification"),h(be,"class","docstring"),h(Re,"class","docstring"),h(gn,"id","transformers.MPNetForMultipleChoice"),h(gn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(gn,"href","#transformers.MPNetForMultipleChoice"),h(It,"class","relative group"),h(la,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Co,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Co,"rel","nofollow"),h(da,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForMultipleChoice"),h(Je,"class","docstring"),h(Ue,"class","docstring"),h(kn,"id","transformers.MPNetForTokenClassification"),h(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(kn,"href","#transformers.MPNetForTokenClassification"),h(Dt,"class","relative group"),h(ca,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Oo,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Oo,"rel","nofollow"),h(pa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForTokenClassification"),h(Ie,"class","docstring"),h(Ve,"class","docstring"),h(bn,"id","transformers.MPNetForQuestionAnswering"),h(bn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bn,"href","#transformers.MPNetForQuestionAnswering"),h(Wt,"class","relative group"),h(ha,"href","/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel"),h(Ko,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ko,"rel","nofollow"),h(ma,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.MPNetForQuestionAnswering"),h(Se,"class","docstring"),h(Ke,"class","docstring"),h(Mn,"id","transformers.TFMPNetModel"),h(Mn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Mn,"href","#transformers.TFMPNetModel"),h(Bt,"class","relative group"),h(ua,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(ns,"rel","nofollow"),h(fa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetModel"),h(Ge,"class","docstring"),h(ze,"class","docstring"),h($n,"id","transformers.TFMPNetForMaskedLM"),h($n,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h($n,"href","#transformers.TFMPNetForMaskedLM"),h(Ut,"class","relative group"),h(ga,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(cs,"rel","nofollow"),h(_a,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForMaskedLM"),h(De,"class","docstring"),h(Ee,"class","docstring"),h(Fn,"id","transformers.TFMPNetForSequenceClassification"),h(Fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fn,"href","#transformers.TFMPNetForSequenceClassification"),h(Kt,"class","relative group"),h(ka,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(ks,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(ks,"rel","nofollow"),h(va,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForSequenceClassification"),h(Oe,"class","docstring"),h(qe,"class","docstring"),h(qn,"id","transformers.TFMPNetForMultipleChoice"),h(qn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qn,"href","#transformers.TFMPNetForMultipleChoice"),h(Jt,"class","relative group"),h(ba,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ns,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ns,"rel","nofollow"),h(Ta,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForMultipleChoice"),h(Ye,"class","docstring"),h(je,"class","docstring"),h(xn,"id","transformers.TFMPNetForTokenClassification"),h(xn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xn,"href","#transformers.TFMPNetForTokenClassification"),h(Yt,"class","relative group"),h(Ma,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Cs,"rel","nofollow"),h(wa,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForTokenClassification"),h(We,"class","docstring"),h(Ce,"class","docstring"),h(In,"id","transformers.TFMPNetForQuestionAnswering"),h(In,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(In,"href","#transformers.TFMPNetForQuestionAnswering"),h(en,"class","relative group"),h(Pa,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ws,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ws,"rel","nofollow"),h($a,"href","/docs/transformers/main/en/model_doc/mpnet#transformers.TFMPNetForQuestionAnswering"),h(Qe,"class","docstring"),h(xe,"class","docstring")},m(n,u){e(document.head,p),m(n,F,u),m(n,f,u),e(f,_),e(_,$),T(k,$,null),e(f,g),e(f,y),e(y,le),m(n,U,u),m(n,z,u),e(z,X),e(X,D),T(G,D,null),e(z,de),e(z,O),e(O,ce),m(n,se,u),m(n,R,u),e(R,L),e(R,Y),e(Y,V),e(R,E),m(n,q,u),m(n,Z,u),e(Z,Q),m(n,ae,u),m(n,ee,u),e(ee,H),m(n,re,u),m(n,te,u),e(te,j),e(j,pe),m(n,W,u),m(n,ne,u),e(ne,he),m(n,x,u),m(n,oe,u),e(oe,C),e(C,me),e(C,c),e(c,N),e(C,K),e(C,_e),e(_e,Te),e(C,I),e(C,ke),e(ke,Me),e(C,we),m(n,A,u),m(n,S,u),e(S,Pe),e(S,ge),e(ge,ue),e(S,$e),m(n,ie,u),m(n,fe,u),e(fe,on),e(on,Qa),T(Qn,Qa,null),e(fe,Kl),e(fe,Ha),e(Ha,Xl),m(n,Pi,u),m(n,He,u),T(Hn,He,null),e(He,Jl),e(He,ut),e(ut,Gl),e(ut,Ks),e(Ks,Yl),e(ut,Zl),e(ut,Xs),e(Xs,ed),e(ut,td),e(ut,Bn),e(Bn,nd),e(ut,od),e(He,sd),e(He,yt),e(yt,ad),e(yt,Js),e(Js,rd),e(yt,id),e(yt,Gs),e(Gs,ld),e(yt,dd),e(He,cd),e(He,Ba),e(Ba,pd),e(He,hd),T(Rn,He,null),m(n,$i,u),m(n,Ft,u),e(Ft,sn),e(sn,Ra),T(Un,Ra,null),e(Ft,md),e(Ft,Ua),e(Ua,ud),m(n,Ni,u),m(n,Fe,u),T(Vn,Fe,null),e(Fe,fd),e(Fe,Kn),e(Kn,gd),e(Kn,Ys),e(Ys,_d),e(Kn,kd),e(Fe,vd),e(Fe,gt),T(Xn,gt,null),e(gt,bd),e(gt,Va),e(Va,Td),e(gt,Md),e(gt,Jn),e(Jn,Zs),e(Zs,wd),e(Zs,Ka),e(Ka,Pd),e(Jn,$d),e(Jn,ea),e(ea,Nd),e(ea,Xa),e(Xa,yd),e(Fe,Fd),e(Fe,an),T(Gn,an,null),e(an,zd),e(an,Yn),e(Yn,Ed),e(Yn,Ja),e(Ja,qd),e(Yn,jd),e(Fe,Cd),e(Fe,rn),T(Zn,rn,null),e(rn,xd),e(rn,Ga),e(Ga,Ad),e(Fe,Ld),e(Fe,ta),T(eo,ta,null),m(n,yi,u),m(n,zt,u),e(zt,ln),e(ln,Ya),T(to,Ya,null),e(zt,Id),e(zt,Za),e(Za,Sd),m(n,Fi,u),m(n,Ze,u),T(no,Ze,null),e(Ze,Dd),e(Ze,oo),e(oo,Od),e(oo,er),e(er,Wd),e(oo,Qd),e(Ze,Hd),e(Ze,so),e(so,Bd),e(so,na),e(na,Rd),e(so,Ud),e(Ze,Vd),e(Ze,dn),T(ao,dn,null),e(dn,Kd),e(dn,tr),e(tr,Xd),m(n,zi,u),m(n,Et,u),e(Et,cn),e(cn,nr),T(ro,nr,null),e(Et,Jd),e(Et,or),e(or,Gd),m(n,Ei,u),m(n,Be,u),T(io,Be,null),e(Be,Yd),e(Be,sr),e(sr,Zd),e(Be,ec),e(Be,lo),e(lo,tc),e(lo,oa),e(oa,nc),e(lo,oc),e(Be,sc),e(Be,co),e(co,ac),e(co,po),e(po,rc),e(co,ic),e(Be,lc),e(Be,Xe),T(ho,Xe,null),e(Xe,dc),e(Xe,qt),e(qt,cc),e(qt,sa),e(sa,pc),e(qt,hc),e(qt,ar),e(ar,mc),e(qt,uc),e(Xe,fc),T(pn,Xe,null),e(Xe,gc),e(Xe,rr),e(rr,_c),e(Xe,kc),T(mo,Xe,null),m(n,qi,u),m(n,jt,u),e(jt,hn),e(hn,ir),T(uo,ir,null),e(jt,vc),e(jt,lr),e(lr,bc),m(n,ji,u),m(n,Ct,u),T(fo,Ct,null),e(Ct,Tc),e(Ct,Le),T(go,Le,null),e(Le,Mc),e(Le,xt),e(xt,wc),e(xt,aa),e(aa,Pc),e(xt,$c),e(xt,dr),e(dr,Nc),e(xt,yc),e(Le,Fc),T(mn,Le,null),e(Le,zc),e(Le,cr),e(cr,Ec),e(Le,qc),T(_o,Le,null),e(Le,jc),T(ko,Le,null),m(n,Ci,u),m(n,At,u),e(At,un),e(un,pr),T(vo,pr,null),e(At,Cc),e(At,hr),e(hr,xc),m(n,xi,u),m(n,Re,u),T(bo,Re,null),e(Re,Ac),e(Re,mr),e(mr,Lc),e(Re,Ic),e(Re,To),e(To,Sc),e(To,ra),e(ra,Dc),e(To,Oc),e(Re,Wc),e(Re,Mo),e(Mo,Qc),e(Mo,wo),e(wo,Hc),e(Mo,Bc),e(Re,Rc),e(Re,be),T(Po,be,null),e(be,Uc),e(be,Lt),e(Lt,Vc),e(Lt,ia),e(ia,Kc),e(Lt,Xc),e(Lt,ur),e(ur,Jc),e(Lt,Gc),e(be,Yc),T(fn,be,null),e(be,Zc),e(be,fr),e(fr,ep),e(be,tp),T($o,be,null),e(be,np),T(No,be,null),e(be,op),e(be,gr),e(gr,sp),e(be,ap),T(yo,be,null),e(be,rp),T(Fo,be,null),m(n,Ai,u),m(n,It,u),e(It,gn),e(gn,_r),T(zo,_r,null),e(It,ip),e(It,kr),e(kr,lp),m(n,Li,u),m(n,Ue,u),T(Eo,Ue,null),e(Ue,dp),e(Ue,vr),e(vr,cp),e(Ue,pp),e(Ue,qo),e(qo,hp),e(qo,la),e(la,mp),e(qo,up),e(Ue,fp),e(Ue,jo),e(jo,gp),e(jo,Co),e(Co,_p),e(jo,kp),e(Ue,vp),e(Ue,Je),T(xo,Je,null),e(Je,bp),e(Je,St),e(St,Tp),e(St,da),e(da,Mp),e(St,wp),e(St,br),e(br,Pp),e(St,$p),e(Je,Np),T(_n,Je,null),e(Je,yp),e(Je,Tr),e(Tr,Fp),e(Je,zp),T(Ao,Je,null),m(n,Ii,u),m(n,Dt,u),e(Dt,kn),e(kn,Mr),T(Lo,Mr,null),e(Dt,Ep),e(Dt,wr),e(wr,qp),m(n,Si,u),m(n,Ve,u),T(Io,Ve,null),e(Ve,jp),e(Ve,Pr),e(Pr,Cp),e(Ve,xp),e(Ve,So),e(So,Ap),e(So,ca),e(ca,Lp),e(So,Ip),e(Ve,Sp),e(Ve,Do),e(Do,Dp),e(Do,Oo),e(Oo,Op),e(Do,Wp),e(Ve,Qp),e(Ve,Ie),T(Wo,Ie,null),e(Ie,Hp),e(Ie,Ot),e(Ot,Bp),e(Ot,pa),e(pa,Rp),e(Ot,Up),e(Ot,$r),e($r,Vp),e(Ot,Kp),e(Ie,Xp),T(vn,Ie,null),e(Ie,Jp),e(Ie,Nr),e(Nr,Gp),e(Ie,Yp),T(Qo,Ie,null),e(Ie,Zp),T(Ho,Ie,null),m(n,Di,u),m(n,Wt,u),e(Wt,bn),e(bn,yr),T(Bo,yr,null),e(Wt,eh),e(Wt,Fr),e(Fr,th),m(n,Oi,u),m(n,Ke,u),T(Ro,Ke,null),e(Ke,nh),e(Ke,Qt),e(Qt,oh),e(Qt,zr),e(zr,sh),e(Qt,ah),e(Qt,Er),e(Er,rh),e(Qt,ih),e(Ke,lh),e(Ke,Uo),e(Uo,dh),e(Uo,ha),e(ha,ch),e(Uo,ph),e(Ke,hh),e(Ke,Vo),e(Vo,mh),e(Vo,Ko),e(Ko,uh),e(Vo,fh),e(Ke,gh),e(Ke,Se),T(Xo,Se,null),e(Se,_h),e(Se,Ht),e(Ht,kh),e(Ht,ma),e(ma,vh),e(Ht,bh),e(Ht,qr),e(qr,Th),e(Ht,Mh),e(Se,wh),T(Tn,Se,null),e(Se,Ph),e(Se,jr),e(jr,$h),e(Se,Nh),T(Jo,Se,null),e(Se,yh),T(Go,Se,null),m(n,Wi,u),m(n,Bt,u),e(Bt,Mn),e(Mn,Cr),T(Yo,Cr,null),e(Bt,Fh),e(Bt,xr),e(xr,zh),m(n,Qi,u),m(n,ze,u),T(Zo,ze,null),e(ze,Eh),e(ze,Ar),e(Ar,qh),e(ze,jh),e(ze,es),e(es,Ch),e(es,ua),e(ua,xh),e(es,Ah),e(ze,Lh),e(ze,ts),e(ts,Ih),e(ts,ns),e(ns,Sh),e(ts,Dh),e(ze,Oh),T(wn,ze,null),e(ze,Wh),e(ze,Ge),T(os,Ge,null),e(Ge,Qh),e(Ge,Rt),e(Rt,Hh),e(Rt,fa),e(fa,Bh),e(Rt,Rh),e(Rt,Lr),e(Lr,Uh),e(Rt,Vh),e(Ge,Kh),T(Pn,Ge,null),e(Ge,Xh),e(Ge,Ir),e(Ir,Jh),e(Ge,Gh),T(ss,Ge,null),m(n,Hi,u),m(n,Ut,u),e(Ut,$n),e($n,Sr),T(as,Sr,null),e(Ut,Yh),e(Ut,Dr),e(Dr,Zh),m(n,Bi,u),m(n,Ee,u),T(rs,Ee,null),e(Ee,em),e(Ee,is),e(is,tm),e(is,Or),e(Or,nm),e(is,om),e(Ee,sm),e(Ee,ls),e(ls,am),e(ls,ga),e(ga,rm),e(ls,im),e(Ee,lm),e(Ee,ds),e(ds,dm),e(ds,cs),e(cs,cm),e(ds,pm),e(Ee,hm),T(Nn,Ee,null),e(Ee,mm),e(Ee,De),T(ps,De,null),e(De,um),e(De,Vt),e(Vt,fm),e(Vt,_a),e(_a,gm),e(Vt,_m),e(Vt,Wr),e(Wr,km),e(Vt,vm),e(De,bm),T(yn,De,null),e(De,Tm),e(De,Qr),e(Qr,Mm),e(De,wm),T(hs,De,null),e(De,Pm),T(ms,De,null),m(n,Ri,u),m(n,Kt,u),e(Kt,Fn),e(Fn,Hr),T(us,Hr,null),e(Kt,$m),e(Kt,Br),e(Br,Nm),m(n,Ui,u),m(n,qe,u),T(fs,qe,null),e(qe,ym),e(qe,Rr),e(Rr,Fm),e(qe,zm),e(qe,gs),e(gs,Em),e(gs,ka),e(ka,qm),e(gs,jm),e(qe,Cm),e(qe,_s),e(_s,xm),e(_s,ks),e(ks,Am),e(_s,Lm),e(qe,Im),T(zn,qe,null),e(qe,Sm),e(qe,Oe),T(vs,Oe,null),e(Oe,Dm),e(Oe,Xt),e(Xt,Om),e(Xt,va),e(va,Wm),e(Xt,Qm),e(Xt,Ur),e(Ur,Hm),e(Xt,Bm),e(Oe,Rm),T(En,Oe,null),e(Oe,Um),e(Oe,Vr),e(Vr,Vm),e(Oe,Km),T(bs,Oe,null),e(Oe,Xm),T(Ts,Oe,null),m(n,Vi,u),m(n,Jt,u),e(Jt,qn),e(qn,Kr),T(Ms,Kr,null),e(Jt,Jm),e(Jt,Xr),e(Xr,Gm),m(n,Ki,u),m(n,je,u),T(ws,je,null),e(je,Ym),e(je,Jr),e(Jr,Zm),e(je,eu),e(je,Ps),e(Ps,tu),e(Ps,ba),e(ba,nu),e(Ps,ou),e(je,su),e(je,$s),e($s,au),e($s,Ns),e(Ns,ru),e($s,iu),e(je,lu),T(jn,je,null),e(je,du),e(je,Ye),T(ys,Ye,null),e(Ye,cu),e(Ye,Gt),e(Gt,pu),e(Gt,Ta),e(Ta,hu),e(Gt,mu),e(Gt,Gr),e(Gr,uu),e(Gt,fu),e(Ye,gu),T(Cn,Ye,null),e(Ye,_u),e(Ye,Yr),e(Yr,ku),e(Ye,vu),T(Fs,Ye,null),m(n,Xi,u),m(n,Yt,u),e(Yt,xn),e(xn,Zr),T(zs,Zr,null),e(Yt,bu),e(Yt,ei),e(ei,Tu),m(n,Ji,u),m(n,Ce,u),T(Es,Ce,null),e(Ce,Mu),e(Ce,ti),e(ti,wu),e(Ce,Pu),e(Ce,qs),e(qs,$u),e(qs,Ma),e(Ma,Nu),e(qs,yu),e(Ce,Fu),e(Ce,js),e(js,zu),e(js,Cs),e(Cs,Eu),e(js,qu),e(Ce,ju),T(An,Ce,null),e(Ce,Cu),e(Ce,We),T(xs,We,null),e(We,xu),e(We,Zt),e(Zt,Au),e(Zt,wa),e(wa,Lu),e(Zt,Iu),e(Zt,ni),e(ni,Su),e(Zt,Du),e(We,Ou),T(Ln,We,null),e(We,Wu),e(We,oi),e(oi,Qu),e(We,Hu),T(As,We,null),e(We,Bu),T(Ls,We,null),m(n,Gi,u),m(n,en,u),e(en,In),e(In,si),T(Is,si,null),e(en,Ru),e(en,ai),e(ai,Uu),m(n,Yi,u),m(n,xe,u),T(Ss,xe,null),e(xe,Vu),e(xe,tn),e(tn,Ku),e(tn,ri),e(ri,Xu),e(tn,Ju),e(tn,ii),e(ii,Gu),e(tn,Yu),e(xe,Zu),e(xe,Ds),e(Ds,ef),e(Ds,Pa),e(Pa,tf),e(Ds,nf),e(xe,of),e(xe,Os),e(Os,sf),e(Os,Ws),e(Ws,af),e(Os,rf),e(xe,lf),T(Sn,xe,null),e(xe,df),e(xe,Qe),T(Qs,Qe,null),e(Qe,cf),e(Qe,nn),e(nn,pf),e(nn,$a),e($a,hf),e(nn,mf),e(nn,li),e(li,uf),e(nn,ff),e(Qe,gf),T(Dn,Qe,null),e(Qe,_f),e(Qe,di),e(di,kf),e(Qe,vf),T(Hs,Qe,null),e(Qe,bf),T(Bs,Qe,null),Zi=!0},p(n,[u]){const Rs={};u&2&&(Rs.$$scope={dirty:u,ctx:n}),pn.$set(Rs);const ci={};u&2&&(ci.$$scope={dirty:u,ctx:n}),mn.$set(ci);const pi={};u&2&&(pi.$$scope={dirty:u,ctx:n}),fn.$set(pi);const hi={};u&2&&(hi.$$scope={dirty:u,ctx:n}),_n.$set(hi);const Us={};u&2&&(Us.$$scope={dirty:u,ctx:n}),vn.$set(Us);const mi={};u&2&&(mi.$$scope={dirty:u,ctx:n}),Tn.$set(mi);const ui={};u&2&&(ui.$$scope={dirty:u,ctx:n}),wn.$set(ui);const fi={};u&2&&(fi.$$scope={dirty:u,ctx:n}),Pn.$set(fi);const Vs={};u&2&&(Vs.$$scope={dirty:u,ctx:n}),Nn.$set(Vs);const gi={};u&2&&(gi.$$scope={dirty:u,ctx:n}),yn.$set(gi);const _i={};u&2&&(_i.$$scope={dirty:u,ctx:n}),zn.$set(_i);const ki={};u&2&&(ki.$$scope={dirty:u,ctx:n}),En.$set(ki);const vi={};u&2&&(vi.$$scope={dirty:u,ctx:n}),jn.$set(vi);const bi={};u&2&&(bi.$$scope={dirty:u,ctx:n}),Cn.$set(bi);const Ti={};u&2&&(Ti.$$scope={dirty:u,ctx:n}),An.$set(Ti);const Mi={};u&2&&(Mi.$$scope={dirty:u,ctx:n}),Ln.$set(Mi);const ft={};u&2&&(ft.$$scope={dirty:u,ctx:n}),Sn.$set(ft);const wi={};u&2&&(wi.$$scope={dirty:u,ctx:n}),Dn.$set(wi)},i(n){Zi||(M(k.$$.fragment,n),M(G.$$.fragment,n),M(Qn.$$.fragment,n),M(Hn.$$.fragment,n),M(Rn.$$.fragment,n),M(Un.$$.fragment,n),M(Vn.$$.fragment,n),M(Xn.$$.fragment,n),M(Gn.$$.fragment,n),M(Zn.$$.fragment,n),M(eo.$$.fragment,n),M(to.$$.fragment,n),M(no.$$.fragment,n),M(ao.$$.fragment,n),M(ro.$$.fragment,n),M(io.$$.fragment,n),M(ho.$$.fragment,n),M(pn.$$.fragment,n),M(mo.$$.fragment,n),M(uo.$$.fragment,n),M(fo.$$.fragment,n),M(go.$$.fragment,n),M(mn.$$.fragment,n),M(_o.$$.fragment,n),M(ko.$$.fragment,n),M(vo.$$.fragment,n),M(bo.$$.fragment,n),M(Po.$$.fragment,n),M(fn.$$.fragment,n),M($o.$$.fragment,n),M(No.$$.fragment,n),M(yo.$$.fragment,n),M(Fo.$$.fragment,n),M(zo.$$.fragment,n),M(Eo.$$.fragment,n),M(xo.$$.fragment,n),M(_n.$$.fragment,n),M(Ao.$$.fragment,n),M(Lo.$$.fragment,n),M(Io.$$.fragment,n),M(Wo.$$.fragment,n),M(vn.$$.fragment,n),M(Qo.$$.fragment,n),M(Ho.$$.fragment,n),M(Bo.$$.fragment,n),M(Ro.$$.fragment,n),M(Xo.$$.fragment,n),M(Tn.$$.fragment,n),M(Jo.$$.fragment,n),M(Go.$$.fragment,n),M(Yo.$$.fragment,n),M(Zo.$$.fragment,n),M(wn.$$.fragment,n),M(os.$$.fragment,n),M(Pn.$$.fragment,n),M(ss.$$.fragment,n),M(as.$$.fragment,n),M(rs.$$.fragment,n),M(Nn.$$.fragment,n),M(ps.$$.fragment,n),M(yn.$$.fragment,n),M(hs.$$.fragment,n),M(ms.$$.fragment,n),M(us.$$.fragment,n),M(fs.$$.fragment,n),M(zn.$$.fragment,n),M(vs.$$.fragment,n),M(En.$$.fragment,n),M(bs.$$.fragment,n),M(Ts.$$.fragment,n),M(Ms.$$.fragment,n),M(ws.$$.fragment,n),M(jn.$$.fragment,n),M(ys.$$.fragment,n),M(Cn.$$.fragment,n),M(Fs.$$.fragment,n),M(zs.$$.fragment,n),M(Es.$$.fragment,n),M(An.$$.fragment,n),M(xs.$$.fragment,n),M(Ln.$$.fragment,n),M(As.$$.fragment,n),M(Ls.$$.fragment,n),M(Is.$$.fragment,n),M(Ss.$$.fragment,n),M(Sn.$$.fragment,n),M(Qs.$$.fragment,n),M(Dn.$$.fragment,n),M(Hs.$$.fragment,n),M(Bs.$$.fragment,n),Zi=!0)},o(n){w(k.$$.fragment,n),w(G.$$.fragment,n),w(Qn.$$.fragment,n),w(Hn.$$.fragment,n),w(Rn.$$.fragment,n),w(Un.$$.fragment,n),w(Vn.$$.fragment,n),w(Xn.$$.fragment,n),w(Gn.$$.fragment,n),w(Zn.$$.fragment,n),w(eo.$$.fragment,n),w(to.$$.fragment,n),w(no.$$.fragment,n),w(ao.$$.fragment,n),w(ro.$$.fragment,n),w(io.$$.fragment,n),w(ho.$$.fragment,n),w(pn.$$.fragment,n),w(mo.$$.fragment,n),w(uo.$$.fragment,n),w(fo.$$.fragment,n),w(go.$$.fragment,n),w(mn.$$.fragment,n),w(_o.$$.fragment,n),w(ko.$$.fragment,n),w(vo.$$.fragment,n),w(bo.$$.fragment,n),w(Po.$$.fragment,n),w(fn.$$.fragment,n),w($o.$$.fragment,n),w(No.$$.fragment,n),w(yo.$$.fragment,n),w(Fo.$$.fragment,n),w(zo.$$.fragment,n),w(Eo.$$.fragment,n),w(xo.$$.fragment,n),w(_n.$$.fragment,n),w(Ao.$$.fragment,n),w(Lo.$$.fragment,n),w(Io.$$.fragment,n),w(Wo.$$.fragment,n),w(vn.$$.fragment,n),w(Qo.$$.fragment,n),w(Ho.$$.fragment,n),w(Bo.$$.fragment,n),w(Ro.$$.fragment,n),w(Xo.$$.fragment,n),w(Tn.$$.fragment,n),w(Jo.$$.fragment,n),w(Go.$$.fragment,n),w(Yo.$$.fragment,n),w(Zo.$$.fragment,n),w(wn.$$.fragment,n),w(os.$$.fragment,n),w(Pn.$$.fragment,n),w(ss.$$.fragment,n),w(as.$$.fragment,n),w(rs.$$.fragment,n),w(Nn.$$.fragment,n),w(ps.$$.fragment,n),w(yn.$$.fragment,n),w(hs.$$.fragment,n),w(ms.$$.fragment,n),w(us.$$.fragment,n),w(fs.$$.fragment,n),w(zn.$$.fragment,n),w(vs.$$.fragment,n),w(En.$$.fragment,n),w(bs.$$.fragment,n),w(Ts.$$.fragment,n),w(Ms.$$.fragment,n),w(ws.$$.fragment,n),w(jn.$$.fragment,n),w(ys.$$.fragment,n),w(Cn.$$.fragment,n),w(Fs.$$.fragment,n),w(zs.$$.fragment,n),w(Es.$$.fragment,n),w(An.$$.fragment,n),w(xs.$$.fragment,n),w(Ln.$$.fragment,n),w(As.$$.fragment,n),w(Ls.$$.fragment,n),w(Is.$$.fragment,n),w(Ss.$$.fragment,n),w(Sn.$$.fragment,n),w(Qs.$$.fragment,n),w(Dn.$$.fragment,n),w(Hs.$$.fragment,n),w(Bs.$$.fragment,n),Zi=!1},d(n){t(p),n&&t(F),n&&t(f),P(k),n&&t(U),n&&t(z),P(G),n&&t(se),n&&t(R),n&&t(q),n&&t(Z),n&&t(ae),n&&t(ee),n&&t(re),n&&t(te),n&&t(W),n&&t(ne),n&&t(x),n&&t(oe),n&&t(A),n&&t(S),n&&t(ie),n&&t(fe),P(Qn),n&&t(Pi),n&&t(He),P(Hn),P(Rn),n&&t($i),n&&t(Ft),P(Un),n&&t(Ni),n&&t(Fe),P(Vn),P(Xn),P(Gn),P(Zn),P(eo),n&&t(yi),n&&t(zt),P(to),n&&t(Fi),n&&t(Ze),P(no),P(ao),n&&t(zi),n&&t(Et),P(ro),n&&t(Ei),n&&t(Be),P(io),P(ho),P(pn),P(mo),n&&t(qi),n&&t(jt),P(uo),n&&t(ji),n&&t(Ct),P(fo),P(go),P(mn),P(_o),P(ko),n&&t(Ci),n&&t(At),P(vo),n&&t(xi),n&&t(Re),P(bo),P(Po),P(fn),P($o),P(No),P(yo),P(Fo),n&&t(Ai),n&&t(It),P(zo),n&&t(Li),n&&t(Ue),P(Eo),P(xo),P(_n),P(Ao),n&&t(Ii),n&&t(Dt),P(Lo),n&&t(Si),n&&t(Ve),P(Io),P(Wo),P(vn),P(Qo),P(Ho),n&&t(Di),n&&t(Wt),P(Bo),n&&t(Oi),n&&t(Ke),P(Ro),P(Xo),P(Tn),P(Jo),P(Go),n&&t(Wi),n&&t(Bt),P(Yo),n&&t(Qi),n&&t(ze),P(Zo),P(wn),P(os),P(Pn),P(ss),n&&t(Hi),n&&t(Ut),P(as),n&&t(Bi),n&&t(Ee),P(rs),P(Nn),P(ps),P(yn),P(hs),P(ms),n&&t(Ri),n&&t(Kt),P(us),n&&t(Ui),n&&t(qe),P(fs),P(zn),P(vs),P(En),P(bs),P(Ts),n&&t(Vi),n&&t(Jt),P(Ms),n&&t(Ki),n&&t(je),P(ws),P(jn),P(ys),P(Cn),P(Fs),n&&t(Xi),n&&t(Yt),P(zs),n&&t(Ji),n&&t(Ce),P(Es),P(An),P(xs),P(Ln),P(As),P(Ls),n&&t(Gi),n&&t(en),P(Is),n&&t(Yi),n&&t(xe),P(Ss),P(Sn),P(Qs),P(Dn),P(Hs),P(Bs)}}}const Tk={local:"mpnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.MPNetConfig",title:"MPNetConfig"},{local:"transformers.MPNetTokenizer",title:"MPNetTokenizer"},{local:"transformers.MPNetTokenizerFast",title:"MPNetTokenizerFast"},{local:"transformers.MPNetModel",title:"MPNetModel"},{local:"transformers.MPNetForMaskedLM",title:"MPNetForMaskedLM"},{local:"transformers.MPNetForSequenceClassification",title:"MPNetForSequenceClassification"},{local:"transformers.MPNetForMultipleChoice",title:"MPNetForMultipleChoice"},{local:"transformers.MPNetForTokenClassification",title:"MPNetForTokenClassification"},{local:"transformers.MPNetForQuestionAnswering",title:"MPNetForQuestionAnswering"},{local:"transformers.TFMPNetModel",title:"TFMPNetModel"},{local:"transformers.TFMPNetForMaskedLM",title:"TFMPNetForMaskedLM"},{local:"transformers.TFMPNetForSequenceClassification",title:"TFMPNetForSequenceClassification"},{local:"transformers.TFMPNetForMultipleChoice",title:"TFMPNetForMultipleChoice"},{local:"transformers.TFMPNetForTokenClassification",title:"TFMPNetForTokenClassification"},{local:"transformers.TFMPNetForQuestionAnswering",title:"TFMPNetForQuestionAnswering"}],title:"MPNet"};function Mk(B){return tk(()=>{new URLSearchParams(window.location.search).get("fw")}),[]}class Fk extends G_{constructor(p){super();Y_(this,p,Mk,bk,Z_,{})}}export{Fk as default,Tk as metadata};
