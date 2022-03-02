import{S as x_,i as j_,s as L_,e as n,k as l,w as M,t as r,M as A_,c as s,d as t,m as d,a,x as b,h as i,b as h,F as e,g as m,y as w,q as P,o as N,B as $}from"../../chunks/vendor-4833417e.js";import{T as Ne}from"../../chunks/Tip-fffd6df1.js";import{D as J}from"../../chunks/Docstring-7b52c3d4.js";import{C as Ye}from"../../chunks/CodeBlock-6a3d1b46.js";import{I as xe}from"../../chunks/IconCopyLink-4b81c553.js";import"../../chunks/CopyButton-dacfbfaf.js";function I_(H){let p,y,f,g,v;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var _=a(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=a(f);g=i(F,"Module"),F.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(k,_){m(k,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(k){k&&t(p)}}}function D_(H){let p,y,f,g,v;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var _=a(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=a(f);g=i(F,"Module"),F.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(k,_){m(k,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(k){k&&t(p)}}}function S_(H){let p,y,f,g,v;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var _=a(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=a(f);g=i(F,"Module"),F.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(k,_){m(k,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(k){k&&t(p)}}}function O_(H){let p,y,f,g,v;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var _=a(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=a(f);g=i(F,"Module"),F.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(k,_){m(k,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(k){k&&t(p)}}}function W_(H){let p,y,f,g,v;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var _=a(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=a(f);g=i(F,"Module"),F.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(k,_){m(k,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(k){k&&t(p)}}}function H_(H){let p,y,f,g,v;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var _=a(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=a(f);g=i(F,"Module"),F.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(k,_){m(k,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(k){k&&t(p)}}}function Q_(H){let p,y,f,g,v,k,_,F,le,U,z,X,S,G,de,O,ce,se,R,A,Y,V,E,q,Z,Q,ae,ee,B,re,te,C,pe,W,oe,he,j,ne,x,me;return{c(){p=n("p"),y=r("TF 2.0 models accepts two formats as inputs:"),f=l(),g=n("ul"),v=n("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=n("p"),X=r("This second option is useful when using "),S=n("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=r("model(inputs)"),se=r("."),R=l(),A=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Z=r("a single Tensor with "),Q=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),B=n("code"),re=r("model(inputs_ids)"),te=l(),C=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),oe=r("model([input_ids, attention_mask])"),he=l(),j=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=n("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var T=a(p);y=i(T,"TF 2.0 models accepts two formats as inputs:"),T.forEach(t),f=d(c),g=s(c,"UL",{});var K=a(g);v=s(K,"LI",{});var _e=a(v);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),_=d(K),F=s(K,"LI",{});var ve=a(F);le=i(ve,"having all inputs as a list, tuple or dict in the first positional arguments."),ve.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),S=s(I,"CODE",{});var ke=a(S);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Te=a(O);ce=i(Te,"model(inputs)"),Te.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),A=s(c,"P",{});var Me=a(A);Y=i(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),Me.forEach(t),V=d(c),E=s(c,"UL",{});var L=a(E);q=s(L,"LI",{});var D=a(q);Z=i(D,"a single Tensor with "),Q=s(D,"CODE",{});var be=a(Q);ae=i(be,"input_ids"),be.forEach(t),ee=i(D," only and nothing else: "),B=s(D,"CODE",{});var ge=a(B);re=i(ge,"model(inputs_ids)"),ge.forEach(t),D.forEach(t),te=d(L),C=s(L,"LI",{});var ue=a(C);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var we=a(W);oe=i(we,"model([input_ids, attention_mask])"),we.forEach(t),ue.forEach(t),he=d(L),j=s(L,"LI",{});var ie=a(j);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=s(ie,"CODE",{});var fe=a(x);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),L.forEach(t)},m(c,T){m(c,p,T),e(p,y),m(c,f,T),m(c,g,T),e(g,v),e(v,k),e(g,_),e(g,F),e(F,le),m(c,U,T),m(c,z,T),e(z,X),e(z,S),e(S,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,T),m(c,A,T),e(A,Y),m(c,V,T),m(c,E,T),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,B),e(B,re),e(E,te),e(E,C),e(C,pe),e(C,W),e(W,oe),e(E,he),e(E,j),e(j,ne),e(j,x),e(x,me)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(U),c&&t(z),c&&t(R),c&&t(A),c&&t(V),c&&t(E)}}}function B_(H){let p,y,f,g,v;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var _=a(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=a(f);g=i(F,"Module"),F.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(k,_){m(k,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(k){k&&t(p)}}}function R_(H){let p,y,f,g,v,k,_,F,le,U,z,X,S,G,de,O,ce,se,R,A,Y,V,E,q,Z,Q,ae,ee,B,re,te,C,pe,W,oe,he,j,ne,x,me;return{c(){p=n("p"),y=r("TF 2.0 models accepts two formats as inputs:"),f=l(),g=n("ul"),v=n("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=n("p"),X=r("This second option is useful when using "),S=n("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=r("model(inputs)"),se=r("."),R=l(),A=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Z=r("a single Tensor with "),Q=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),B=n("code"),re=r("model(inputs_ids)"),te=l(),C=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),oe=r("model([input_ids, attention_mask])"),he=l(),j=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=n("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var T=a(p);y=i(T,"TF 2.0 models accepts two formats as inputs:"),T.forEach(t),f=d(c),g=s(c,"UL",{});var K=a(g);v=s(K,"LI",{});var _e=a(v);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),_=d(K),F=s(K,"LI",{});var ve=a(F);le=i(ve,"having all inputs as a list, tuple or dict in the first positional arguments."),ve.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),S=s(I,"CODE",{});var ke=a(S);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Te=a(O);ce=i(Te,"model(inputs)"),Te.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),A=s(c,"P",{});var Me=a(A);Y=i(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),Me.forEach(t),V=d(c),E=s(c,"UL",{});var L=a(E);q=s(L,"LI",{});var D=a(q);Z=i(D,"a single Tensor with "),Q=s(D,"CODE",{});var be=a(Q);ae=i(be,"input_ids"),be.forEach(t),ee=i(D," only and nothing else: "),B=s(D,"CODE",{});var ge=a(B);re=i(ge,"model(inputs_ids)"),ge.forEach(t),D.forEach(t),te=d(L),C=s(L,"LI",{});var ue=a(C);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var we=a(W);oe=i(we,"model([input_ids, attention_mask])"),we.forEach(t),ue.forEach(t),he=d(L),j=s(L,"LI",{});var ie=a(j);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=s(ie,"CODE",{});var fe=a(x);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),L.forEach(t)},m(c,T){m(c,p,T),e(p,y),m(c,f,T),m(c,g,T),e(g,v),e(v,k),e(g,_),e(g,F),e(F,le),m(c,U,T),m(c,z,T),e(z,X),e(z,S),e(S,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,T),m(c,A,T),e(A,Y),m(c,V,T),m(c,E,T),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,B),e(B,re),e(E,te),e(E,C),e(C,pe),e(C,W),e(W,oe),e(E,he),e(E,j),e(j,ne),e(j,x),e(x,me)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(U),c&&t(z),c&&t(R),c&&t(A),c&&t(V),c&&t(E)}}}function U_(H){let p,y,f,g,v;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var _=a(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=a(f);g=i(F,"Module"),F.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(k,_){m(k,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(k){k&&t(p)}}}function V_(H){let p,y,f,g,v,k,_,F,le,U,z,X,S,G,de,O,ce,se,R,A,Y,V,E,q,Z,Q,ae,ee,B,re,te,C,pe,W,oe,he,j,ne,x,me;return{c(){p=n("p"),y=r("TF 2.0 models accepts two formats as inputs:"),f=l(),g=n("ul"),v=n("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=n("p"),X=r("This second option is useful when using "),S=n("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=r("model(inputs)"),se=r("."),R=l(),A=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Z=r("a single Tensor with "),Q=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),B=n("code"),re=r("model(inputs_ids)"),te=l(),C=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),oe=r("model([input_ids, attention_mask])"),he=l(),j=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=n("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var T=a(p);y=i(T,"TF 2.0 models accepts two formats as inputs:"),T.forEach(t),f=d(c),g=s(c,"UL",{});var K=a(g);v=s(K,"LI",{});var _e=a(v);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),_=d(K),F=s(K,"LI",{});var ve=a(F);le=i(ve,"having all inputs as a list, tuple or dict in the first positional arguments."),ve.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),S=s(I,"CODE",{});var ke=a(S);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Te=a(O);ce=i(Te,"model(inputs)"),Te.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),A=s(c,"P",{});var Me=a(A);Y=i(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),Me.forEach(t),V=d(c),E=s(c,"UL",{});var L=a(E);q=s(L,"LI",{});var D=a(q);Z=i(D,"a single Tensor with "),Q=s(D,"CODE",{});var be=a(Q);ae=i(be,"input_ids"),be.forEach(t),ee=i(D," only and nothing else: "),B=s(D,"CODE",{});var ge=a(B);re=i(ge,"model(inputs_ids)"),ge.forEach(t),D.forEach(t),te=d(L),C=s(L,"LI",{});var ue=a(C);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var we=a(W);oe=i(we,"model([input_ids, attention_mask])"),we.forEach(t),ue.forEach(t),he=d(L),j=s(L,"LI",{});var ie=a(j);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=s(ie,"CODE",{});var fe=a(x);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),L.forEach(t)},m(c,T){m(c,p,T),e(p,y),m(c,f,T),m(c,g,T),e(g,v),e(v,k),e(g,_),e(g,F),e(F,le),m(c,U,T),m(c,z,T),e(z,X),e(z,S),e(S,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,T),m(c,A,T),e(A,Y),m(c,V,T),m(c,E,T),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,B),e(B,re),e(E,te),e(E,C),e(C,pe),e(C,W),e(W,oe),e(E,he),e(E,j),e(j,ne),e(j,x),e(x,me)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(U),c&&t(z),c&&t(R),c&&t(A),c&&t(V),c&&t(E)}}}function K_(H){let p,y,f,g,v;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var _=a(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=a(f);g=i(F,"Module"),F.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(k,_){m(k,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(k){k&&t(p)}}}function X_(H){let p,y,f,g,v,k,_,F,le,U,z,X,S,G,de,O,ce,se,R,A,Y,V,E,q,Z,Q,ae,ee,B,re,te,C,pe,W,oe,he,j,ne,x,me;return{c(){p=n("p"),y=r("TF 2.0 models accepts two formats as inputs:"),f=l(),g=n("ul"),v=n("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=n("p"),X=r("This second option is useful when using "),S=n("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=r("model(inputs)"),se=r("."),R=l(),A=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Z=r("a single Tensor with "),Q=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),B=n("code"),re=r("model(inputs_ids)"),te=l(),C=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),oe=r("model([input_ids, attention_mask])"),he=l(),j=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=n("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var T=a(p);y=i(T,"TF 2.0 models accepts two formats as inputs:"),T.forEach(t),f=d(c),g=s(c,"UL",{});var K=a(g);v=s(K,"LI",{});var _e=a(v);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),_=d(K),F=s(K,"LI",{});var ve=a(F);le=i(ve,"having all inputs as a list, tuple or dict in the first positional arguments."),ve.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),S=s(I,"CODE",{});var ke=a(S);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Te=a(O);ce=i(Te,"model(inputs)"),Te.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),A=s(c,"P",{});var Me=a(A);Y=i(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),Me.forEach(t),V=d(c),E=s(c,"UL",{});var L=a(E);q=s(L,"LI",{});var D=a(q);Z=i(D,"a single Tensor with "),Q=s(D,"CODE",{});var be=a(Q);ae=i(be,"input_ids"),be.forEach(t),ee=i(D," only and nothing else: "),B=s(D,"CODE",{});var ge=a(B);re=i(ge,"model(inputs_ids)"),ge.forEach(t),D.forEach(t),te=d(L),C=s(L,"LI",{});var ue=a(C);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var we=a(W);oe=i(we,"model([input_ids, attention_mask])"),we.forEach(t),ue.forEach(t),he=d(L),j=s(L,"LI",{});var ie=a(j);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=s(ie,"CODE",{});var fe=a(x);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),L.forEach(t)},m(c,T){m(c,p,T),e(p,y),m(c,f,T),m(c,g,T),e(g,v),e(v,k),e(g,_),e(g,F),e(F,le),m(c,U,T),m(c,z,T),e(z,X),e(z,S),e(S,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,T),m(c,A,T),e(A,Y),m(c,V,T),m(c,E,T),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,B),e(B,re),e(E,te),e(E,C),e(C,pe),e(C,W),e(W,oe),e(E,he),e(E,j),e(j,ne),e(j,x),e(x,me)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(U),c&&t(z),c&&t(R),c&&t(A),c&&t(V),c&&t(E)}}}function J_(H){let p,y,f,g,v;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var _=a(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=a(f);g=i(F,"Module"),F.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(k,_){m(k,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(k){k&&t(p)}}}function G_(H){let p,y,f,g,v,k,_,F,le,U,z,X,S,G,de,O,ce,se,R,A,Y,V,E,q,Z,Q,ae,ee,B,re,te,C,pe,W,oe,he,j,ne,x,me;return{c(){p=n("p"),y=r("TF 2.0 models accepts two formats as inputs:"),f=l(),g=n("ul"),v=n("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=n("p"),X=r("This second option is useful when using "),S=n("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=r("model(inputs)"),se=r("."),R=l(),A=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Z=r("a single Tensor with "),Q=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),B=n("code"),re=r("model(inputs_ids)"),te=l(),C=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),oe=r("model([input_ids, attention_mask])"),he=l(),j=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=n("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var T=a(p);y=i(T,"TF 2.0 models accepts two formats as inputs:"),T.forEach(t),f=d(c),g=s(c,"UL",{});var K=a(g);v=s(K,"LI",{});var _e=a(v);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),_=d(K),F=s(K,"LI",{});var ve=a(F);le=i(ve,"having all inputs as a list, tuple or dict in the first positional arguments."),ve.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),S=s(I,"CODE",{});var ke=a(S);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Te=a(O);ce=i(Te,"model(inputs)"),Te.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),A=s(c,"P",{});var Me=a(A);Y=i(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),Me.forEach(t),V=d(c),E=s(c,"UL",{});var L=a(E);q=s(L,"LI",{});var D=a(q);Z=i(D,"a single Tensor with "),Q=s(D,"CODE",{});var be=a(Q);ae=i(be,"input_ids"),be.forEach(t),ee=i(D," only and nothing else: "),B=s(D,"CODE",{});var ge=a(B);re=i(ge,"model(inputs_ids)"),ge.forEach(t),D.forEach(t),te=d(L),C=s(L,"LI",{});var ue=a(C);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var we=a(W);oe=i(we,"model([input_ids, attention_mask])"),we.forEach(t),ue.forEach(t),he=d(L),j=s(L,"LI",{});var ie=a(j);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=s(ie,"CODE",{});var fe=a(x);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),L.forEach(t)},m(c,T){m(c,p,T),e(p,y),m(c,f,T),m(c,g,T),e(g,v),e(v,k),e(g,_),e(g,F),e(F,le),m(c,U,T),m(c,z,T),e(z,X),e(z,S),e(S,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,T),m(c,A,T),e(A,Y),m(c,V,T),m(c,E,T),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,B),e(B,re),e(E,te),e(E,C),e(C,pe),e(C,W),e(W,oe),e(E,he),e(E,j),e(j,ne),e(j,x),e(x,me)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(U),c&&t(z),c&&t(R),c&&t(A),c&&t(V),c&&t(E)}}}function Y_(H){let p,y,f,g,v;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var _=a(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=a(f);g=i(F,"Module"),F.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(k,_){m(k,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(k){k&&t(p)}}}function Z_(H){let p,y,f,g,v,k,_,F,le,U,z,X,S,G,de,O,ce,se,R,A,Y,V,E,q,Z,Q,ae,ee,B,re,te,C,pe,W,oe,he,j,ne,x,me;return{c(){p=n("p"),y=r("TF 2.0 models accepts two formats as inputs:"),f=l(),g=n("ul"),v=n("li"),k=r("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=n("li"),le=r("having all inputs as a list, tuple or dict in the first positional arguments."),U=l(),z=n("p"),X=r("This second option is useful when using "),S=n("code"),G=r("tf.keras.Model.fit"),de=r(` method which currently requires having all the
tensors in the first argument of the model call function: `),O=n("code"),ce=r("model(inputs)"),se=r("."),R=l(),A=n("p"),Y=r(`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),V=l(),E=n("ul"),q=n("li"),Z=r("a single Tensor with "),Q=n("code"),ae=r("input_ids"),ee=r(" only and nothing else: "),B=n("code"),re=r("model(inputs_ids)"),te=l(),C=n("li"),pe=r(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=n("code"),oe=r("model([input_ids, attention_mask])"),he=l(),j=n("li"),ne=r(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=n("code"),me=r('model({"input_ids": input_ids, "attention_mask": attention_mask})')},l(c){p=s(c,"P",{});var T=a(p);y=i(T,"TF 2.0 models accepts two formats as inputs:"),T.forEach(t),f=d(c),g=s(c,"UL",{});var K=a(g);v=s(K,"LI",{});var _e=a(v);k=i(_e,"having all inputs as keyword arguments (like PyTorch models), or"),_e.forEach(t),_=d(K),F=s(K,"LI",{});var ve=a(F);le=i(ve,"having all inputs as a list, tuple or dict in the first positional arguments."),ve.forEach(t),K.forEach(t),U=d(c),z=s(c,"P",{});var I=a(z);X=i(I,"This second option is useful when using "),S=s(I,"CODE",{});var ke=a(S);G=i(ke,"tf.keras.Model.fit"),ke.forEach(t),de=i(I,` method which currently requires having all the
tensors in the first argument of the model call function: `),O=s(I,"CODE",{});var Te=a(O);ce=i(Te,"model(inputs)"),Te.forEach(t),se=i(I,"."),I.forEach(t),R=d(c),A=s(c,"P",{});var Me=a(A);Y=i(Me,`If you choose this second option, there are three possibilities you can use to gather all the input Tensor in the
first positional argument :`),Me.forEach(t),V=d(c),E=s(c,"UL",{});var L=a(E);q=s(L,"LI",{});var D=a(q);Z=i(D,"a single Tensor with "),Q=s(D,"CODE",{});var be=a(Q);ae=i(be,"input_ids"),be.forEach(t),ee=i(D," only and nothing else: "),B=s(D,"CODE",{});var ge=a(B);re=i(ge,"model(inputs_ids)"),ge.forEach(t),D.forEach(t),te=d(L),C=s(L,"LI",{});var ue=a(C);pe=i(ue,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=s(ue,"CODE",{});var we=a(W);oe=i(we,"model([input_ids, attention_mask])"),we.forEach(t),ue.forEach(t),he=d(L),j=s(L,"LI",{});var ie=a(j);ne=i(ie,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),x=s(ie,"CODE",{});var fe=a(x);me=i(fe,'model({"input_ids": input_ids, "attention_mask": attention_mask})'),fe.forEach(t),ie.forEach(t),L.forEach(t)},m(c,T){m(c,p,T),e(p,y),m(c,f,T),m(c,g,T),e(g,v),e(v,k),e(g,_),e(g,F),e(F,le),m(c,U,T),m(c,z,T),e(z,X),e(z,S),e(S,G),e(z,de),e(z,O),e(O,ce),e(z,se),m(c,R,T),m(c,A,T),e(A,Y),m(c,V,T),m(c,E,T),e(E,q),e(q,Z),e(q,Q),e(Q,ae),e(q,ee),e(q,B),e(B,re),e(E,te),e(E,C),e(C,pe),e(C,W),e(W,oe),e(E,he),e(E,j),e(j,ne),e(j,x),e(x,me)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(U),c&&t(z),c&&t(R),c&&t(A),c&&t(V),c&&t(E)}}}function ek(H){let p,y,f,g,v;return{c(){p=n("p"),y=r("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=n("code"),g=r("Module"),v=r(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(k){p=s(k,"P",{});var _=a(p);y=i(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=s(_,"CODE",{});var F=a(f);g=i(F,"Module"),F.forEach(t),v=i(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(k,_){m(k,p,_),e(p,y),e(p,f),e(f,g),e(p,v)},d(k){k&&t(p)}}}function tk(H){let p,y,f,g,v,k,_,F,le,U,z,X,S,G,de,O,ce,se,R,A,Y,V,E,q,Z,Q,ae,ee,B,re,te,C,pe,W,oe,he,j,ne,x,me,c,T,K,_e,ve,I,ke,Te,Me,L,D,be,ge,ue,we,ie,fe,no,xa,Ho,Sl,ja,Ol,fi,je,Qo,Wl,it,Hl,Ss,Ql,Bl,Os,Rl,Ul,Bo,Vl,Kl,Xl,yt,Jl,Ws,Gl,Yl,Hs,Zl,ed,td,La,od,nd,Ro,gi,Ft,so,Aa,Uo,sd,Ia,ad,_i,$e,Vo,rd,Ko,id,Qs,ld,dd,cd,dt,Xo,pd,Da,hd,md,Jo,Bs,ud,Sa,fd,gd,Rs,_d,Oa,kd,vd,ao,Go,Td,Yo,Md,Wa,bd,wd,Pd,ro,Zo,Nd,Ha,$d,yd,Us,en,ki,zt,io,Qa,tn,Fd,Ba,zd,vi,Ze,on,Ed,nn,qd,Ra,Cd,xd,jd,sn,Ld,Vs,Ad,Id,Dd,lo,an,Sd,Ua,Od,Ti,Et,co,Va,rn,Wd,Ka,Hd,Mi,Le,ln,Qd,Xa,Bd,Rd,dn,Ud,Ks,Vd,Kd,Xd,cn,Jd,pn,Gd,Yd,Zd,Oe,hn,ec,qt,tc,Xs,oc,nc,Ja,sc,ac,rc,po,ic,Ga,lc,dc,mn,bi,Ct,ho,Ya,un,cc,Za,pc,wi,xt,fn,hc,We,gn,mc,jt,uc,Js,fc,gc,er,_c,kc,vc,mo,Tc,tr,Mc,bc,_n,Pi,Lt,uo,or,kn,wc,nr,Pc,Ni,Ae,vn,Nc,sr,$c,yc,Tn,Fc,Gs,zc,Ec,qc,Mn,Cc,bn,xc,jc,Lc,Pe,wn,Ac,At,Ic,Ys,Dc,Sc,ar,Oc,Wc,Hc,fo,Qc,rr,Bc,Rc,Pn,Uc,ir,Vc,Kc,Nn,$i,It,go,lr,$n,Xc,dr,Jc,yi,Ie,yn,Gc,cr,Yc,Zc,Fn,ep,Zs,tp,op,np,zn,sp,En,ap,rp,ip,He,qn,lp,Dt,dp,ea,cp,pp,pr,hp,mp,up,_o,fp,hr,gp,_p,Cn,Fi,St,ko,mr,xn,kp,ur,vp,zi,De,jn,Tp,fr,Mp,bp,Ln,wp,ta,Pp,Np,$p,An,yp,In,Fp,zp,Ep,Qe,Dn,qp,Ot,Cp,oa,xp,jp,gr,Lp,Ap,Ip,vo,Dp,_r,Sp,Op,Sn,Ei,Wt,To,kr,On,Wp,vr,Hp,qi,Se,Wn,Qp,Ht,Bp,Tr,Rp,Up,Mr,Vp,Kp,Xp,Hn,Jp,na,Gp,Yp,Zp,Qn,eh,Bn,th,oh,nh,Be,Rn,sh,Qt,ah,sa,rh,ih,br,lh,dh,ch,Mo,ph,wr,hh,mh,Un,Ci,Bt,bo,Pr,Vn,uh,Nr,fh,xi,ye,Kn,gh,$r,_h,kh,Xn,vh,aa,Th,Mh,bh,Jn,wh,Gn,Ph,Nh,$h,wo,yh,Re,Yn,Fh,Rt,zh,ra,Eh,qh,yr,Ch,xh,jh,Po,Lh,Fr,Ah,Ih,Zn,ji,Ut,No,zr,es,Dh,Er,Sh,Li,Fe,ts,Oh,os,Wh,qr,Hh,Qh,Bh,ns,Rh,ia,Uh,Vh,Kh,ss,Xh,as,Jh,Gh,Yh,$o,Zh,Ue,rs,em,Vt,tm,la,om,nm,Cr,sm,am,rm,yo,im,xr,lm,dm,is,Ai,Kt,Fo,jr,ls,cm,Lr,pm,Ii,ze,ds,hm,Ar,mm,um,cs,fm,da,gm,_m,km,ps,vm,hs,Tm,Mm,bm,zo,wm,Ve,ms,Pm,Xt,Nm,ca,$m,ym,Ir,Fm,zm,Em,Eo,qm,Dr,Cm,xm,us,Di,Jt,qo,Sr,fs,jm,Or,Lm,Si,Ee,gs,Am,Wr,Im,Dm,_s,Sm,pa,Om,Wm,Hm,ks,Qm,vs,Bm,Rm,Um,Co,Vm,Ke,Ts,Km,Gt,Xm,ha,Jm,Gm,Hr,Ym,Zm,eu,xo,tu,Qr,ou,nu,Ms,Oi,Yt,jo,Br,bs,su,Rr,au,Wi,qe,ws,ru,Ur,iu,lu,Ps,du,ma,cu,pu,hu,Ns,mu,$s,uu,fu,gu,Lo,_u,Xe,ys,ku,Zt,vu,ua,Tu,Mu,Vr,bu,wu,Pu,Ao,Nu,Kr,$u,yu,Fs,Hi,eo,Io,Xr,zs,Fu,Jr,zu,Qi,Ce,Es,Eu,to,qu,Gr,Cu,xu,Yr,ju,Lu,Au,qs,Iu,fa,Du,Su,Ou,Cs,Wu,xs,Hu,Qu,Bu,Do,Ru,Je,js,Uu,oo,Vu,ga,Ku,Xu,Zr,Ju,Gu,Yu,So,Zu,ei,ef,tf,Ls,Bi;return k=new xe({}),G=new xe({}),Ho=new xe({}),Qo=new J({props:{name:"class transformers.MPNetConfig",anchor:"transformers.MPNetConfig",parameters:[{name:"vocab_size",val:" = 30527"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"relative_attention_num_buckets",val:" = 32"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/configuration_mpnet.py#L29",parametersDescription:[{anchor:"transformers.MPNetConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30527) &#x2014;
Vocabulary size of the MPNet model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetModel">MPNetModel</a> or <a href="/docs/transformers/master/en/model_doc/mpnet#transformers.TFMPNetModel">TFMPNetModel</a>.`,name:"vocab_size"},{anchor:"transformers.MPNetConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
The number of buckets to use for each attention layer.`,name:"relative_attention_num_buckets"}]}}),Ro=new Ye({props:{codee:`from transformers import MPNetModel, MPNetConfig

# Initializing a MPNet mpnet-base style configuration
configuration = MPNetConfig()

# Initializing a model from the mpnet-base style configuration
model = MPNetModel(configuration)

# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetModel, MPNetConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a MPNet mpnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = MPNetConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the mpnet-base style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Uo=new xe({}),Vo=new J({props:{name:"class transformers.MPNetTokenizer",anchor:"transformers.MPNetTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/tokenization_mpnet.py#L66",parametersDescription:[{anchor:"transformers.MPNetTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}]}}),Xo=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/tokenization_mpnet.py#L231",parametersDescription:[{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>list of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Go=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.MPNetTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/tokenization_mpnet.py#L256",parametersDescription:[{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.MPNetTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Set to True if the token list is already formatted with special tokens for the model`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Zo=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/tokenization_mpnet.py#L283",parametersDescription:[{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),en=new J({props:{name:"save_vocabulary",anchor:"transformers.MPNetTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/tokenization_mpnet.py#L306"}}),tn=new xe({}),on=new J({props:{name:"class transformers.MPNetTokenizerFast",anchor:"transformers.MPNetTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L51",parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"}]}}),an=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/tokenization_mpnet_fast.py#L190",parametersDescription:[{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of ids.`,name:"token_ids_0"},{anchor:"transformers.MPNetTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs`,name:"token_ids_1"}],returnDescription:`
<p>List of zeros.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),rn=new xe({}),ln=new J({props:{name:"class transformers.MPNetModel",anchor:"transformers.MPNetModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_mpnet.py#L482",parametersDescription:[{anchor:"transformers.MPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new J({props:{name:"forward",anchor:"transformers.MPNetModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_mpnet.py#L511",parametersDescription:[{anchor:"transformers.MPNetModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig"
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
`}}),po=new Ne({props:{$$slots:{default:[I_]},$$scope:{ctx:H}}}),mn=new Ye({props:{codee:`from transformers import MPNetTokenizer, MPNetModel
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetModel.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),un=new xe({}),fn=new J({props:{name:"class transformers.MPNetForMaskedLM",anchor:"transformers.MPNetForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_mpnet.py#L575"}}),gn=new J({props:{name:"forward",anchor:"transformers.MPNetForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_mpnet.py#L594",parametersDescription:[{anchor:"transformers.MPNetForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig"
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
`}}),mo=new Ne({props:{$$slots:{default:[D_]},$$scope:{ctx:H}}}),_n=new Ye({props:{codee:`from transformers import MPNetTokenizer, MPNetForMaskedLM
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForMaskedLM.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),kn=new xe({}),vn=new J({props:{name:"class transformers.MPNetForSequenceClassification",anchor:"transformers.MPNetForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_mpnet.py#L684",parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wn=new J({props:{name:"forward",anchor:"transformers.MPNetForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_mpnet.py#L697",parametersDescription:[{anchor:"transformers.MPNetForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig"
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
`}}),fo=new Ne({props:{$$slots:{default:[S_]},$$scope:{ctx:H}}}),Pn=new Ye({props:{codee:`from transformers import MPNetTokenizer, MPNetForSequenceClassification
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Nn=new Ye({props:{codee:`from transformers import MPNetTokenizer, MPNetForSequenceClassification
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$n=new xe({}),yn=new J({props:{name:"class transformers.MPNetForMultipleChoice",anchor:"transformers.MPNetForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_mpnet.py#L779",parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qn=new J({props:{name:"forward",anchor:"transformers.MPNetForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_mpnet.py#L792",parametersDescription:[{anchor:"transformers.MPNetForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig"
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
`}}),_o=new Ne({props:{$$slots:{default:[O_]},$$scope:{ctx:H}}}),Cn=new Ye({props:{codee:`from transformers import MPNetTokenizer, MPNetForMultipleChoice
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
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),xn=new xe({}),jn=new J({props:{name:"class transformers.MPNetForTokenClassification",anchor:"transformers.MPNetForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_mpnet.py#L870",parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Dn=new J({props:{name:"forward",anchor:"transformers.MPNetForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_mpnet.py#L885",parametersDescription:[{anchor:"transformers.MPNetForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig"
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
`}}),vo=new Ne({props:{$$slots:{default:[W_]},$$scope:{ctx:H}}}),Sn=new Ye({props:{codee:`from transformers import MPNetTokenizer, MPNetForTokenClassification
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForTokenClassification.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),On=new xe({}),Wn=new J({props:{name:"class transformers.MPNetForQuestionAnswering",anchor:"transformers.MPNetForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_mpnet.py#L970",parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Rn=new J({props:{name:"forward",anchor:"transformers.MPNetForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_mpnet.py#L984",parametersDescription:[{anchor:"transformers.MPNetForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.MPNetForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.MPNetForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig"
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
`}}),Mo=new Ne({props:{$$slots:{default:[H_]},$$scope:{ctx:H}}}),Un=new Ye({props:{codee:`from transformers import MPNetTokenizer, MPNetForQuestionAnswering
import torch

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = MPNetForQuestionAnswering.from_pretrained("microsoft/mpnet-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, MPNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = MPNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Vn=new xe({}),Kn=new J({props:{name:"class transformers.TFMPNetModel",anchor:"transformers.TFMPNetModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_tf_mpnet.py#L678",parametersDescription:[{anchor:"transformers.TFMPNetModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wo=new Ne({props:{$$slots:{default:[Q_]},$$scope:{ctx:H}}}),Yn=new J({props:{name:"call",anchor:"transformers.TFMPNetModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_tf_mpnet.py#L683",parametersDescription:[{anchor:"transformers.TFMPNetModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig"
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
`}}),Po=new Ne({props:{$$slots:{default:[B_]},$$scope:{ctx:H}}}),Zn=new Ye({props:{codee:`from transformers import MPNetTokenizer, TFMPNetModel
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetModel.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetModel.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),es=new xe({}),ts=new J({props:{name:"class transformers.TFMPNetForMaskedLM",anchor:"transformers.TFMPNetForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_tf_mpnet.py#L795",parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$o=new Ne({props:{$$slots:{default:[R_]},$$scope:{ctx:H}}}),rs=new J({props:{name:"call",anchor:"transformers.TFMPNetForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_tf_mpnet.py#L812",parametersDescription:[{anchor:"transformers.TFMPNetForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig"
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
`}}),yo=new Ne({props:{$$slots:{default:[U_]},$$scope:{ctx:H}}}),is=new Ye({props:{codee:`from transformers import MPNetTokenizer, TFMPNetForMaskedLM
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForMaskedLM.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ls=new xe({}),ds=new J({props:{name:"class transformers.TFMPNetForSequenceClassification",anchor:"transformers.TFMPNetForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_tf_mpnet.py#L922",parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zo=new Ne({props:{$$slots:{default:[V_]},$$scope:{ctx:H}}}),ms=new J({props:{name:"call",anchor:"transformers.TFMPNetForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_tf_mpnet.py#L933",parametersDescription:[{anchor:"transformers.TFMPNetForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig"
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
`}}),Eo=new Ne({props:{$$slots:{default:[K_]},$$scope:{ctx:H}}}),us=new Ye({props:{codee:`from transformers import MPNetTokenizer, TFMPNetForSequenceClassification
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForSequenceClassification.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),fs=new xe({}),gs=new J({props:{name:"class transformers.TFMPNetForMultipleChoice",anchor:"transformers.TFMPNetForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1019",parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new Ne({props:{$$slots:{default:[X_]},$$scope:{ctx:H}}}),Ts=new J({props:{name:"call",anchor:"transformers.TFMPNetForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1039",parametersDescription:[{anchor:"transformers.TFMPNetForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig"
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
`}}),xo=new Ne({props:{$$slots:{default:[J_]},$$scope:{ctx:H}}}),Ms=new Ye({props:{codee:`from transformers import MPNetTokenizer, TFMPNetForMultipleChoice
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
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),bs=new xe({}),ws=new J({props:{name:"class transformers.TFMPNetForTokenClassification",anchor:"transformers.TFMPNetForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1156",parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Lo=new Ne({props:{$$slots:{default:[G_]},$$scope:{ctx:H}}}),ys=new J({props:{name:"call",anchor:"transformers.TFMPNetForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1170",parametersDescription:[{anchor:"transformers.TFMPNetForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFMPNetForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFMPNetForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig"
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
`}}),Ao=new Ne({props:{$$slots:{default:[Y_]},$$scope:{ctx:H}}}),Fs=new Ye({props:{codee:`from transformers import MPNetTokenizer, TFMPNetForTokenClassification
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForTokenClassification.from_pretrained("microsoft/mpnet-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),zs=new xe({}),Es=new J({props:{name:"class transformers.TFMPNetForQuestionAnswering",anchor:"transformers.TFMPNetForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1255",parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig">MPNetConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Do=new Ne({props:{$$slots:{default:[Z_]},$$scope:{ctx:H}}}),js=new J({props:{name:"call",anchor:"transformers.TFMPNetForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/mpnet/modeling_tf_mpnet.py#L1268",parametersDescription:[{anchor:"transformers.TFMPNetForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetTokenizer">MPNetTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetConfig"
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
`}}),So=new Ne({props:{$$slots:{default:[ek]},$$scope:{ctx:H}}}),Ls=new Ye({props:{codee:`from transformers import MPNetTokenizer, TFMPNetForQuestionAnswering
import tensorflow as tf

tokenizer = MPNetTokenizer.from_pretrained("microsoft/mpnet-base")
model = TFMPNetForQuestionAnswering.from_pretrained("microsoft/mpnet-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> MPNetTokenizer, TFMPNetForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = MPNetTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFMPNetForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/mpnet-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),{c(){p=n("meta"),y=l(),f=n("h1"),g=n("a"),v=n("span"),M(k.$$.fragment),_=l(),F=n("span"),le=r("MPNet"),U=l(),z=n("h2"),X=n("a"),S=n("span"),M(G.$$.fragment),de=l(),O=n("span"),ce=r("Overview"),se=l(),R=n("p"),A=r("The MPNet model was proposed in "),Y=n("a"),V=r("MPNet: Masked and Permuted Pre-training for Language Understanding"),E=r(" by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),q=l(),Z=n("p"),Q=r(`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),ae=l(),ee=n("p"),B=r("The abstract from the paper is the following:"),re=l(),te=n("p"),C=n("em"),pe=r(`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),W=l(),oe=n("p"),he=r("Tips:"),j=l(),ne=n("ul"),x=n("li"),me=r("MPNet doesn\u2019t have "),c=n("code"),T=r("token_type_ids"),K=r(`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),_e=n("code"),ve=r("tokenizer.sep_token"),I=r(" (or "),ke=n("code"),Te=r("[sep]"),Me=r(")."),L=l(),D=n("p"),be=r("The original code can be found "),ge=n("a"),ue=r("here"),we=r("."),ie=l(),fe=n("h2"),no=n("a"),xa=n("span"),M(Ho.$$.fragment),Sl=l(),ja=n("span"),Ol=r("MPNetConfig"),fi=l(),je=n("div"),M(Qo.$$.fragment),Wl=l(),it=n("p"),Hl=r("This is the configuration class to store the configuration of a "),Ss=n("a"),Ql=r("MPNetModel"),Bl=r(" or a "),Os=n("a"),Rl=r("TFMPNetModel"),Ul=r(`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Bo=n("a"),Vl=r("mpnet-base"),Kl=r(" architecture."),Xl=l(),yt=n("p"),Jl=r("Configuration objects inherit from "),Ws=n("a"),Gl=r("PretrainedConfig"),Yl=r(` and can be used to control the model outputs. Read the
documentation from `),Hs=n("a"),Zl=r("PretrainedConfig"),ed=r(" for more information."),td=l(),La=n("p"),od=r("Examples:"),nd=l(),M(Ro.$$.fragment),gi=l(),Ft=n("h2"),so=n("a"),Aa=n("span"),M(Uo.$$.fragment),sd=l(),Ia=n("span"),ad=r("MPNetTokenizer"),_i=l(),$e=n("div"),M(Vo.$$.fragment),rd=l(),Ko=n("p"),id=r("This tokenizer inherits from "),Qs=n("a"),ld=r("BertTokenizer"),dd=r(` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),cd=l(),dt=n("div"),M(Xo.$$.fragment),pd=l(),Da=n("p"),hd=r(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),md=l(),Jo=n("ul"),Bs=n("li"),ud=r("single sequence: "),Sa=n("code"),fd=r("<s> X </s>"),gd=l(),Rs=n("li"),_d=r("pair of sequences: "),Oa=n("code"),kd=r("<s> A </s></s> B </s>"),vd=l(),ao=n("div"),M(Go.$$.fragment),Td=l(),Yo=n("p"),Md=r(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Wa=n("code"),bd=r("prepare_for_model"),wd=r(" methods."),Pd=l(),ro=n("div"),M(Zo.$$.fragment),Nd=l(),Ha=n("p"),$d=r(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),yd=l(),Us=n("div"),M(en.$$.fragment),ki=l(),zt=n("h2"),io=n("a"),Qa=n("span"),M(tn.$$.fragment),Fd=l(),Ba=n("span"),zd=r("MPNetTokenizerFast"),vi=l(),Ze=n("div"),M(on.$$.fragment),Ed=l(),nn=n("p"),qd=r("Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),Ra=n("em"),Cd=r("tokenizers"),xd=r(" library). Based on WordPiece."),jd=l(),sn=n("p"),Ld=r("This tokenizer inherits from "),Vs=n("a"),Ad=r("PreTrainedTokenizerFast"),Id=r(` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),Dd=l(),lo=n("div"),M(an.$$.fragment),Sd=l(),Ua=n("p"),Od=r(`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),Ti=l(),Et=n("h2"),co=n("a"),Va=n("span"),M(rn.$$.fragment),Wd=l(),Ka=n("span"),Hd=r("MPNetModel"),Mi=l(),Le=n("div"),M(ln.$$.fragment),Qd=l(),Xa=n("p"),Bd=r("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),Rd=l(),dn=n("p"),Ud=r("This model inherits from "),Ks=n("a"),Vd=r("PreTrainedModel"),Kd=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Xd=l(),cn=n("p"),Jd=r("This model is also a PyTorch "),pn=n("a"),Gd=r("torch.nn.Module"),Yd=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zd=l(),Oe=n("div"),M(hn.$$.fragment),ec=l(),qt=n("p"),tc=r("The "),Xs=n("a"),oc=r("MPNetModel"),nc=r(" forward method, overrides the "),Ja=n("code"),sc=r("__call__"),ac=r(" special method."),rc=l(),M(po.$$.fragment),ic=l(),Ga=n("p"),lc=r("Example:"),dc=l(),M(mn.$$.fragment),bi=l(),Ct=n("h2"),ho=n("a"),Ya=n("span"),M(un.$$.fragment),cc=l(),Za=n("span"),pc=r("MPNetForMaskedLM"),wi=l(),xt=n("div"),M(fn.$$.fragment),hc=l(),We=n("div"),M(gn.$$.fragment),mc=l(),jt=n("p"),uc=r("The "),Js=n("a"),fc=r("MPNetForMaskedLM"),gc=r(" forward method, overrides the "),er=n("code"),_c=r("__call__"),kc=r(" special method."),vc=l(),M(mo.$$.fragment),Tc=l(),tr=n("p"),Mc=r("Example:"),bc=l(),M(_n.$$.fragment),Pi=l(),Lt=n("h2"),uo=n("a"),or=n("span"),M(kn.$$.fragment),wc=l(),nr=n("span"),Pc=r("MPNetForSequenceClassification"),Ni=l(),Ae=n("div"),M(vn.$$.fragment),Nc=l(),sr=n("p"),$c=r(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),yc=l(),Tn=n("p"),Fc=r("This model inherits from "),Gs=n("a"),zc=r("PreTrainedModel"),Ec=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),qc=l(),Mn=n("p"),Cc=r("This model is also a PyTorch "),bn=n("a"),xc=r("torch.nn.Module"),jc=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Lc=l(),Pe=n("div"),M(wn.$$.fragment),Ac=l(),At=n("p"),Ic=r("The "),Ys=n("a"),Dc=r("MPNetForSequenceClassification"),Sc=r(" forward method, overrides the "),ar=n("code"),Oc=r("__call__"),Wc=r(" special method."),Hc=l(),M(fo.$$.fragment),Qc=l(),rr=n("p"),Bc=r("Example of single-label classification:"),Rc=l(),M(Pn.$$.fragment),Uc=l(),ir=n("p"),Vc=r("Example of multi-label classification:"),Kc=l(),M(Nn.$$.fragment),$i=l(),It=n("h2"),go=n("a"),lr=n("span"),M($n.$$.fragment),Xc=l(),dr=n("span"),Jc=r("MPNetForMultipleChoice"),yi=l(),Ie=n("div"),M(yn.$$.fragment),Gc=l(),cr=n("p"),Yc=r(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Zc=l(),Fn=n("p"),ep=r("This model inherits from "),Zs=n("a"),tp=r("PreTrainedModel"),op=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),np=l(),zn=n("p"),sp=r("This model is also a PyTorch "),En=n("a"),ap=r("torch.nn.Module"),rp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ip=l(),He=n("div"),M(qn.$$.fragment),lp=l(),Dt=n("p"),dp=r("The "),ea=n("a"),cp=r("MPNetForMultipleChoice"),pp=r(" forward method, overrides the "),pr=n("code"),hp=r("__call__"),mp=r(" special method."),up=l(),M(_o.$$.fragment),fp=l(),hr=n("p"),gp=r("Example:"),_p=l(),M(Cn.$$.fragment),Fi=l(),St=n("h2"),ko=n("a"),mr=n("span"),M(xn.$$.fragment),kp=l(),ur=n("span"),vp=r("MPNetForTokenClassification"),zi=l(),De=n("div"),M(jn.$$.fragment),Tp=l(),fr=n("p"),Mp=r(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),bp=l(),Ln=n("p"),wp=r("This model inherits from "),ta=n("a"),Pp=r("PreTrainedModel"),Np=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),$p=l(),An=n("p"),yp=r("This model is also a PyTorch "),In=n("a"),Fp=r("torch.nn.Module"),zp=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Ep=l(),Qe=n("div"),M(Dn.$$.fragment),qp=l(),Ot=n("p"),Cp=r("The "),oa=n("a"),xp=r("MPNetForTokenClassification"),jp=r(" forward method, overrides the "),gr=n("code"),Lp=r("__call__"),Ap=r(" special method."),Ip=l(),M(vo.$$.fragment),Dp=l(),_r=n("p"),Sp=r("Example:"),Op=l(),M(Sn.$$.fragment),Ei=l(),Wt=n("h2"),To=n("a"),kr=n("span"),M(On.$$.fragment),Wp=l(),vr=n("span"),Hp=r("MPNetForQuestionAnswering"),qi=l(),Se=n("div"),M(Wn.$$.fragment),Qp=l(),Ht=n("p"),Bp=r(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Tr=n("code"),Rp=r("span start logits"),Up=r(" and "),Mr=n("code"),Vp=r("span end logits"),Kp=r(")."),Xp=l(),Hn=n("p"),Jp=r("This model inherits from "),na=n("a"),Gp=r("PreTrainedModel"),Yp=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Zp=l(),Qn=n("p"),eh=r("This model is also a PyTorch "),Bn=n("a"),th=r("torch.nn.Module"),oh=r(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),nh=l(),Be=n("div"),M(Rn.$$.fragment),sh=l(),Qt=n("p"),ah=r("The "),sa=n("a"),rh=r("MPNetForQuestionAnswering"),ih=r(" forward method, overrides the "),br=n("code"),lh=r("__call__"),dh=r(" special method."),ch=l(),M(Mo.$$.fragment),ph=l(),wr=n("p"),hh=r("Example:"),mh=l(),M(Un.$$.fragment),Ci=l(),Bt=n("h2"),bo=n("a"),Pr=n("span"),M(Vn.$$.fragment),uh=l(),Nr=n("span"),fh=r("TFMPNetModel"),xi=l(),ye=n("div"),M(Kn.$$.fragment),gh=l(),$r=n("p"),_h=r("The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),kh=l(),Xn=n("p"),vh=r("This model inherits from "),aa=n("a"),Th=r("TFPreTrainedModel"),Mh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh=l(),Jn=n("p"),wh=r("This model is also a "),Gn=n("a"),Ph=r("tf.keras.Model"),Nh=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$h=l(),M(wo.$$.fragment),yh=l(),Re=n("div"),M(Yn.$$.fragment),Fh=l(),Rt=n("p"),zh=r("The "),ra=n("a"),Eh=r("TFMPNetModel"),qh=r(" forward method, overrides the "),yr=n("code"),Ch=r("__call__"),xh=r(" special method."),jh=l(),M(Po.$$.fragment),Lh=l(),Fr=n("p"),Ah=r("Example:"),Ih=l(),M(Zn.$$.fragment),ji=l(),Ut=n("h2"),No=n("a"),zr=n("span"),M(es.$$.fragment),Dh=l(),Er=n("span"),Sh=r("TFMPNetForMaskedLM"),Li=l(),Fe=n("div"),M(ts.$$.fragment),Oh=l(),os=n("p"),Wh=r("MPNet Model with a "),qr=n("code"),Hh=r("language modeling"),Qh=r(" head on top."),Bh=l(),ns=n("p"),Rh=r("This model inherits from "),ia=n("a"),Uh=r("TFPreTrainedModel"),Vh=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kh=l(),ss=n("p"),Xh=r("This model is also a "),as=n("a"),Jh=r("tf.keras.Model"),Gh=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yh=l(),M($o.$$.fragment),Zh=l(),Ue=n("div"),M(rs.$$.fragment),em=l(),Vt=n("p"),tm=r("The "),la=n("a"),om=r("TFMPNetForMaskedLM"),nm=r(" forward method, overrides the "),Cr=n("code"),sm=r("__call__"),am=r(" special method."),rm=l(),M(yo.$$.fragment),im=l(),xr=n("p"),lm=r("Example:"),dm=l(),M(is.$$.fragment),Ai=l(),Kt=n("h2"),Fo=n("a"),jr=n("span"),M(ls.$$.fragment),cm=l(),Lr=n("span"),pm=r("TFMPNetForSequenceClassification"),Ii=l(),ze=n("div"),M(ds.$$.fragment),hm=l(),Ar=n("p"),mm=r(`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),um=l(),cs=n("p"),fm=r("This model inherits from "),da=n("a"),gm=r("TFPreTrainedModel"),_m=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),km=l(),ps=n("p"),vm=r("This model is also a "),hs=n("a"),Tm=r("tf.keras.Model"),Mm=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bm=l(),M(zo.$$.fragment),wm=l(),Ve=n("div"),M(ms.$$.fragment),Pm=l(),Xt=n("p"),Nm=r("The "),ca=n("a"),$m=r("TFMPNetForSequenceClassification"),ym=r(" forward method, overrides the "),Ir=n("code"),Fm=r("__call__"),zm=r(" special method."),Em=l(),M(Eo.$$.fragment),qm=l(),Dr=n("p"),Cm=r("Example:"),xm=l(),M(us.$$.fragment),Di=l(),Jt=n("h2"),qo=n("a"),Sr=n("span"),M(fs.$$.fragment),jm=l(),Or=n("span"),Lm=r("TFMPNetForMultipleChoice"),Si=l(),Ee=n("div"),M(gs.$$.fragment),Am=l(),Wr=n("p"),Im=r(`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Dm=l(),_s=n("p"),Sm=r("This model inherits from "),pa=n("a"),Om=r("TFPreTrainedModel"),Wm=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hm=l(),ks=n("p"),Qm=r("This model is also a "),vs=n("a"),Bm=r("tf.keras.Model"),Rm=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Um=l(),M(Co.$$.fragment),Vm=l(),Ke=n("div"),M(Ts.$$.fragment),Km=l(),Gt=n("p"),Xm=r("The "),ha=n("a"),Jm=r("TFMPNetForMultipleChoice"),Gm=r(" forward method, overrides the "),Hr=n("code"),Ym=r("__call__"),Zm=r(" special method."),eu=l(),M(xo.$$.fragment),tu=l(),Qr=n("p"),ou=r("Example:"),nu=l(),M(Ms.$$.fragment),Oi=l(),Yt=n("h2"),jo=n("a"),Br=n("span"),M(bs.$$.fragment),su=l(),Rr=n("span"),au=r("TFMPNetForTokenClassification"),Wi=l(),qe=n("div"),M(ws.$$.fragment),ru=l(),Ur=n("p"),iu=r(`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),lu=l(),Ps=n("p"),du=r("This model inherits from "),ma=n("a"),cu=r("TFPreTrainedModel"),pu=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hu=l(),Ns=n("p"),mu=r("This model is also a "),$s=n("a"),uu=r("tf.keras.Model"),fu=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gu=l(),M(Lo.$$.fragment),_u=l(),Xe=n("div"),M(ys.$$.fragment),ku=l(),Zt=n("p"),vu=r("The "),ua=n("a"),Tu=r("TFMPNetForTokenClassification"),Mu=r(" forward method, overrides the "),Vr=n("code"),bu=r("__call__"),wu=r(" special method."),Pu=l(),M(Ao.$$.fragment),Nu=l(),Kr=n("p"),$u=r("Example:"),yu=l(),M(Fs.$$.fragment),Hi=l(),eo=n("h2"),Io=n("a"),Xr=n("span"),M(zs.$$.fragment),Fu=l(),Jr=n("span"),zu=r("TFMPNetForQuestionAnswering"),Qi=l(),Ce=n("div"),M(Es.$$.fragment),Eu=l(),to=n("p"),qu=r(`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gr=n("code"),Cu=r("span start logits"),xu=r(" and "),Yr=n("code"),ju=r("span end logits"),Lu=r(")."),Au=l(),qs=n("p"),Iu=r("This model inherits from "),fa=n("a"),Du=r("TFPreTrainedModel"),Su=r(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ou=l(),Cs=n("p"),Wu=r("This model is also a "),xs=n("a"),Hu=r("tf.keras.Model"),Qu=r(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Bu=l(),M(Do.$$.fragment),Ru=l(),Je=n("div"),M(js.$$.fragment),Uu=l(),oo=n("p"),Vu=r("The "),ga=n("a"),Ku=r("TFMPNetForQuestionAnswering"),Xu=r(" forward method, overrides the "),Zr=n("code"),Ju=r("__call__"),Gu=r(" special method."),Yu=l(),M(So.$$.fragment),Zu=l(),ei=n("p"),ef=r("Example:"),tf=l(),M(Ls.$$.fragment),this.h()},l(o){const u=A_('[data-svelte="svelte-1phssyn"]',document.head);p=s(u,"META",{name:!0,content:!0}),u.forEach(t),y=d(o),f=s(o,"H1",{class:!0});var As=a(f);g=s(As,"A",{id:!0,class:!0,href:!0});var ti=a(g);v=s(ti,"SPAN",{});var oi=a(v);b(k.$$.fragment,oi),oi.forEach(t),ti.forEach(t),_=d(As),F=s(As,"SPAN",{});var ni=a(F);le=i(ni,"MPNet"),ni.forEach(t),As.forEach(t),U=d(o),z=s(o,"H2",{class:!0});var Is=a(z);X=s(Is,"A",{id:!0,class:!0,href:!0});var si=a(X);S=s(si,"SPAN",{});var ai=a(S);b(G.$$.fragment,ai),ai.forEach(t),si.forEach(t),de=d(Is),O=s(Is,"SPAN",{});var ri=a(O);ce=i(ri,"Overview"),ri.forEach(t),Is.forEach(t),se=d(o),R=s(o,"P",{});var Ds=a(R);A=i(Ds,"The MPNet model was proposed in "),Y=s(Ds,"A",{href:!0,rel:!0});var ii=a(Y);V=i(ii,"MPNet: Masked and Permuted Pre-training for Language Understanding"),ii.forEach(t),E=i(Ds," by Kaitao Song, Xu Tan, Tao Qin, Jianfeng Lu, Tie-Yan Liu."),Ds.forEach(t),q=d(o),Z=s(o,"P",{});var li=a(Z);Q=i(li,`MPNet adopts a novel pre-training method, named masked and permuted language modeling, to inherit the advantages of
masked language modeling and permuted language modeling for natural language understanding.`),li.forEach(t),ae=d(o),ee=s(o,"P",{});var di=a(ee);B=i(di,"The abstract from the paper is the following:"),di.forEach(t),re=d(o),te=s(o,"P",{});var ci=a(te);C=s(ci,"EM",{});var pi=a(C);pe=i(pi,`BERT adopts masked language modeling (MLM) for pre-training and is one of the most successful pre-training models.
Since BERT neglects dependency among predicted tokens, XLNet introduces permuted language modeling (PLM) for
pre-training to address this problem. However, XLNet does not leverage the full position information of a sentence and
thus suffers from position discrepancy between pre-training and fine-tuning. In this paper, we propose MPNet, a novel
pre-training method that inherits the advantages of BERT and XLNet and avoids their limitations. MPNet leverages the
dependency among predicted tokens through permuted language modeling (vs. MLM in BERT), and takes auxiliary position
information as input to make the model see a full sentence and thus reducing the position discrepancy (vs. PLM in
XLNet). We pre-train MPNet on a large-scale dataset (over 160GB text corpora) and fine-tune on a variety of
down-streaming tasks (GLUE, SQuAD, etc). Experimental results show that MPNet outperforms MLM and PLM by a large
margin, and achieves better results on these tasks compared with previous state-of-the-art pre-trained methods (e.g.,
BERT, XLNet, RoBERTa) under the same model setting.`),pi.forEach(t),ci.forEach(t),W=d(o),oe=s(o,"P",{});var hi=a(oe);he=i(hi,"Tips:"),hi.forEach(t),j=d(o),ne=s(o,"UL",{});var mi=a(ne);x=s(mi,"LI",{});var lt=a(x);me=i(lt,"MPNet doesn\u2019t have "),c=s(lt,"CODE",{});var ui=a(c);T=i(ui,"token_type_ids"),ui.forEach(t),K=i(lt,`, you don\u2019t need to indicate which token belongs to which segment. just
separate your segments with the separation token `),_e=s(lt,"CODE",{});var sf=a(_e);ve=i(sf,"tokenizer.sep_token"),sf.forEach(t),I=i(lt," (or "),ke=s(lt,"CODE",{});var af=a(ke);Te=i(af,"[sep]"),af.forEach(t),Me=i(lt,")."),lt.forEach(t),mi.forEach(t),L=d(o),D=s(o,"P",{});var Ri=a(D);be=i(Ri,"The original code can be found "),ge=s(Ri,"A",{href:!0,rel:!0});var rf=a(ge);ue=i(rf,"here"),rf.forEach(t),we=i(Ri,"."),Ri.forEach(t),ie=d(o),fe=s(o,"H2",{class:!0});var Ui=a(fe);no=s(Ui,"A",{id:!0,class:!0,href:!0});var lf=a(no);xa=s(lf,"SPAN",{});var df=a(xa);b(Ho.$$.fragment,df),df.forEach(t),lf.forEach(t),Sl=d(Ui),ja=s(Ui,"SPAN",{});var cf=a(ja);Ol=i(cf,"MPNetConfig"),cf.forEach(t),Ui.forEach(t),fi=d(o),je=s(o,"DIV",{class:!0});var ct=a(je);b(Qo.$$.fragment,ct),Wl=d(ct),it=s(ct,"P",{});var Oo=a(it);Hl=i(Oo,"This is the configuration class to store the configuration of a "),Ss=s(Oo,"A",{href:!0});var pf=a(Ss);Ql=i(pf,"MPNetModel"),pf.forEach(t),Bl=i(Oo," or a "),Os=s(Oo,"A",{href:!0});var hf=a(Os);Rl=i(hf,"TFMPNetModel"),hf.forEach(t),Ul=i(Oo,`. It is used to
instantiate a MPNet model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the MPNet
`),Bo=s(Oo,"A",{href:!0,rel:!0});var mf=a(Bo);Vl=i(mf,"mpnet-base"),mf.forEach(t),Kl=i(Oo," architecture."),Oo.forEach(t),Xl=d(ct),yt=s(ct,"P",{});var _a=a(yt);Jl=i(_a,"Configuration objects inherit from "),Ws=s(_a,"A",{href:!0});var uf=a(Ws);Gl=i(uf,"PretrainedConfig"),uf.forEach(t),Yl=i(_a,` and can be used to control the model outputs. Read the
documentation from `),Hs=s(_a,"A",{href:!0});var ff=a(Hs);Zl=i(ff,"PretrainedConfig"),ff.forEach(t),ed=i(_a," for more information."),_a.forEach(t),td=d(ct),La=s(ct,"P",{});var gf=a(La);od=i(gf,"Examples:"),gf.forEach(t),nd=d(ct),b(Ro.$$.fragment,ct),ct.forEach(t),gi=d(o),Ft=s(o,"H2",{class:!0});var Vi=a(Ft);so=s(Vi,"A",{id:!0,class:!0,href:!0});var _f=a(so);Aa=s(_f,"SPAN",{});var kf=a(Aa);b(Uo.$$.fragment,kf),kf.forEach(t),_f.forEach(t),sd=d(Vi),Ia=s(Vi,"SPAN",{});var vf=a(Ia);ad=i(vf,"MPNetTokenizer"),vf.forEach(t),Vi.forEach(t),_i=d(o),$e=s(o,"DIV",{class:!0});var et=a($e);b(Vo.$$.fragment,et),rd=d(et),Ko=s(et,"P",{});var Ki=a(Ko);id=i(Ki,"This tokenizer inherits from "),Qs=s(Ki,"A",{href:!0});var Tf=a(Qs);ld=i(Tf,"BertTokenizer"),Tf.forEach(t),dd=i(Ki,` which contains most of the methods. Users should refer to the
superclass for more information regarding methods.`),Ki.forEach(t),cd=d(et),dt=s(et,"DIV",{class:!0});var ka=a(dt);b(Xo.$$.fragment,ka),pd=d(ka),Da=s(ka,"P",{});var Mf=a(Da);hd=i(Mf,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A MPNet sequence has the following format:`),Mf.forEach(t),md=d(ka),Jo=s(ka,"UL",{});var Xi=a(Jo);Bs=s(Xi,"LI",{});var of=a(Bs);ud=i(of,"single sequence: "),Sa=s(of,"CODE",{});var bf=a(Sa);fd=i(bf,"<s> X </s>"),bf.forEach(t),of.forEach(t),gd=d(Xi),Rs=s(Xi,"LI",{});var nf=a(Rs);_d=i(nf,"pair of sequences: "),Oa=s(nf,"CODE",{});var wf=a(Oa);kd=i(wf,"<s> A </s></s> B </s>"),wf.forEach(t),nf.forEach(t),Xi.forEach(t),ka.forEach(t),vd=d(et),ao=s(et,"DIV",{class:!0});var Ji=a(ao);b(Go.$$.fragment,Ji),Td=d(Ji),Yo=s(Ji,"P",{});var Gi=a(Yo);Md=i(Gi,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Wa=s(Gi,"CODE",{});var Pf=a(Wa);bd=i(Pf,"prepare_for_model"),Pf.forEach(t),wd=i(Gi," methods."),Gi.forEach(t),Ji.forEach(t),Pd=d(et),ro=s(et,"DIV",{class:!0});var Yi=a(ro);b(Zo.$$.fragment,Yi),Nd=d(Yi),Ha=s(Yi,"P",{});var Nf=a(Ha);$d=i(Nf,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned.`),Nf.forEach(t),Yi.forEach(t),yd=d(et),Us=s(et,"DIV",{class:!0});var $f=a(Us);b(en.$$.fragment,$f),$f.forEach(t),et.forEach(t),ki=d(o),zt=s(o,"H2",{class:!0});var Zi=a(zt);io=s(Zi,"A",{id:!0,class:!0,href:!0});var yf=a(io);Qa=s(yf,"SPAN",{});var Ff=a(Qa);b(tn.$$.fragment,Ff),Ff.forEach(t),yf.forEach(t),Fd=d(Zi),Ba=s(Zi,"SPAN",{});var zf=a(Ba);zd=i(zf,"MPNetTokenizerFast"),zf.forEach(t),Zi.forEach(t),vi=d(o),Ze=s(o,"DIV",{class:!0});var Wo=a(Ze);b(on.$$.fragment,Wo),Ed=d(Wo),nn=s(Wo,"P",{});var el=a(nn);qd=i(el,"Construct a \u201Cfast\u201D MPNet tokenizer (backed by HuggingFace\u2019s "),Ra=s(el,"EM",{});var Ef=a(Ra);Cd=i(Ef,"tokenizers"),Ef.forEach(t),xd=i(el," library). Based on WordPiece."),el.forEach(t),jd=d(Wo),sn=s(Wo,"P",{});var tl=a(sn);Ld=i(tl,"This tokenizer inherits from "),Vs=s(tl,"A",{href:!0});var qf=a(Vs);Ad=i(qf,"PreTrainedTokenizerFast"),qf.forEach(t),Id=i(tl,` which contains most of the main methods. Users should
refer to this superclass for more information regarding those methods.`),tl.forEach(t),Dd=d(Wo),lo=s(Wo,"DIV",{class:!0});var ol=a(lo);b(an.$$.fragment,ol),Sd=d(ol),Ua=s(ol,"P",{});var Cf=a(Ua);Od=i(Cf,`Creates a mask from the two sequences passed to be used in a sequence-pair classification task. MPNet does not
make use of token type ids, therefore a list of zeros is returned`),Cf.forEach(t),ol.forEach(t),Wo.forEach(t),Ti=d(o),Et=s(o,"H2",{class:!0});var nl=a(Et);co=s(nl,"A",{id:!0,class:!0,href:!0});var xf=a(co);Va=s(xf,"SPAN",{});var jf=a(Va);b(rn.$$.fragment,jf),jf.forEach(t),xf.forEach(t),Wd=d(nl),Ka=s(nl,"SPAN",{});var Lf=a(Ka);Hd=i(Lf,"MPNetModel"),Lf.forEach(t),nl.forEach(t),Mi=d(o),Le=s(o,"DIV",{class:!0});var pt=a(Le);b(ln.$$.fragment,pt),Qd=d(pt),Xa=s(pt,"P",{});var Af=a(Xa);Bd=i(Af,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),Af.forEach(t),Rd=d(pt),dn=s(pt,"P",{});var sl=a(dn);Ud=i(sl,"This model inherits from "),Ks=s(sl,"A",{href:!0});var If=a(Ks);Vd=i(If,"PreTrainedModel"),If.forEach(t),Kd=i(sl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sl.forEach(t),Xd=d(pt),cn=s(pt,"P",{});var al=a(cn);Jd=i(al,"This model is also a PyTorch "),pn=s(al,"A",{href:!0,rel:!0});var Df=a(pn);Gd=i(Df,"torch.nn.Module"),Df.forEach(t),Yd=i(al,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),al.forEach(t),Zd=d(pt),Oe=s(pt,"DIV",{class:!0});var ht=a(Oe);b(hn.$$.fragment,ht),ec=d(ht),qt=s(ht,"P",{});var va=a(qt);tc=i(va,"The "),Xs=s(va,"A",{href:!0});var Sf=a(Xs);oc=i(Sf,"MPNetModel"),Sf.forEach(t),nc=i(va," forward method, overrides the "),Ja=s(va,"CODE",{});var Of=a(Ja);sc=i(Of,"__call__"),Of.forEach(t),ac=i(va," special method."),va.forEach(t),rc=d(ht),b(po.$$.fragment,ht),ic=d(ht),Ga=s(ht,"P",{});var Wf=a(Ga);lc=i(Wf,"Example:"),Wf.forEach(t),dc=d(ht),b(mn.$$.fragment,ht),ht.forEach(t),pt.forEach(t),bi=d(o),Ct=s(o,"H2",{class:!0});var rl=a(Ct);ho=s(rl,"A",{id:!0,class:!0,href:!0});var Hf=a(ho);Ya=s(Hf,"SPAN",{});var Qf=a(Ya);b(un.$$.fragment,Qf),Qf.forEach(t),Hf.forEach(t),cc=d(rl),Za=s(rl,"SPAN",{});var Bf=a(Za);pc=i(Bf,"MPNetForMaskedLM"),Bf.forEach(t),rl.forEach(t),wi=d(o),xt=s(o,"DIV",{class:!0});var il=a(xt);b(fn.$$.fragment,il),hc=d(il),We=s(il,"DIV",{class:!0});var mt=a(We);b(gn.$$.fragment,mt),mc=d(mt),jt=s(mt,"P",{});var Ta=a(jt);uc=i(Ta,"The "),Js=s(Ta,"A",{href:!0});var Rf=a(Js);fc=i(Rf,"MPNetForMaskedLM"),Rf.forEach(t),gc=i(Ta," forward method, overrides the "),er=s(Ta,"CODE",{});var Uf=a(er);_c=i(Uf,"__call__"),Uf.forEach(t),kc=i(Ta," special method."),Ta.forEach(t),vc=d(mt),b(mo.$$.fragment,mt),Tc=d(mt),tr=s(mt,"P",{});var Vf=a(tr);Mc=i(Vf,"Example:"),Vf.forEach(t),bc=d(mt),b(_n.$$.fragment,mt),mt.forEach(t),il.forEach(t),Pi=d(o),Lt=s(o,"H2",{class:!0});var ll=a(Lt);uo=s(ll,"A",{id:!0,class:!0,href:!0});var Kf=a(uo);or=s(Kf,"SPAN",{});var Xf=a(or);b(kn.$$.fragment,Xf),Xf.forEach(t),Kf.forEach(t),wc=d(ll),nr=s(ll,"SPAN",{});var Jf=a(nr);Pc=i(Jf,"MPNetForSequenceClassification"),Jf.forEach(t),ll.forEach(t),Ni=d(o),Ae=s(o,"DIV",{class:!0});var ut=a(Ae);b(vn.$$.fragment,ut),Nc=d(ut),sr=s(ut,"P",{});var Gf=a(sr);$c=i(Gf,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Gf.forEach(t),yc=d(ut),Tn=s(ut,"P",{});var dl=a(Tn);Fc=i(dl,"This model inherits from "),Gs=s(dl,"A",{href:!0});var Yf=a(Gs);zc=i(Yf,"PreTrainedModel"),Yf.forEach(t),Ec=i(dl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dl.forEach(t),qc=d(ut),Mn=s(ut,"P",{});var cl=a(Mn);Cc=i(cl,"This model is also a PyTorch "),bn=s(cl,"A",{href:!0,rel:!0});var Zf=a(bn);xc=i(Zf,"torch.nn.Module"),Zf.forEach(t),jc=i(cl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),cl.forEach(t),Lc=d(ut),Pe=s(ut,"DIV",{class:!0});var Ge=a(Pe);b(wn.$$.fragment,Ge),Ac=d(Ge),At=s(Ge,"P",{});var Ma=a(At);Ic=i(Ma,"The "),Ys=s(Ma,"A",{href:!0});var eg=a(Ys);Dc=i(eg,"MPNetForSequenceClassification"),eg.forEach(t),Sc=i(Ma," forward method, overrides the "),ar=s(Ma,"CODE",{});var tg=a(ar);Oc=i(tg,"__call__"),tg.forEach(t),Wc=i(Ma," special method."),Ma.forEach(t),Hc=d(Ge),b(fo.$$.fragment,Ge),Qc=d(Ge),rr=s(Ge,"P",{});var og=a(rr);Bc=i(og,"Example of single-label classification:"),og.forEach(t),Rc=d(Ge),b(Pn.$$.fragment,Ge),Uc=d(Ge),ir=s(Ge,"P",{});var ng=a(ir);Vc=i(ng,"Example of multi-label classification:"),ng.forEach(t),Kc=d(Ge),b(Nn.$$.fragment,Ge),Ge.forEach(t),ut.forEach(t),$i=d(o),It=s(o,"H2",{class:!0});var pl=a(It);go=s(pl,"A",{id:!0,class:!0,href:!0});var sg=a(go);lr=s(sg,"SPAN",{});var ag=a(lr);b($n.$$.fragment,ag),ag.forEach(t),sg.forEach(t),Xc=d(pl),dr=s(pl,"SPAN",{});var rg=a(dr);Jc=i(rg,"MPNetForMultipleChoice"),rg.forEach(t),pl.forEach(t),yi=d(o),Ie=s(o,"DIV",{class:!0});var ft=a(Ie);b(yn.$$.fragment,ft),Gc=d(ft),cr=s(ft,"P",{});var ig=a(cr);Yc=i(ig,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),ig.forEach(t),Zc=d(ft),Fn=s(ft,"P",{});var hl=a(Fn);ep=i(hl,"This model inherits from "),Zs=s(hl,"A",{href:!0});var lg=a(Zs);tp=i(lg,"PreTrainedModel"),lg.forEach(t),op=i(hl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hl.forEach(t),np=d(ft),zn=s(ft,"P",{});var ml=a(zn);sp=i(ml,"This model is also a PyTorch "),En=s(ml,"A",{href:!0,rel:!0});var dg=a(En);ap=i(dg,"torch.nn.Module"),dg.forEach(t),rp=i(ml,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ml.forEach(t),ip=d(ft),He=s(ft,"DIV",{class:!0});var gt=a(He);b(qn.$$.fragment,gt),lp=d(gt),Dt=s(gt,"P",{});var ba=a(Dt);dp=i(ba,"The "),ea=s(ba,"A",{href:!0});var cg=a(ea);cp=i(cg,"MPNetForMultipleChoice"),cg.forEach(t),pp=i(ba," forward method, overrides the "),pr=s(ba,"CODE",{});var pg=a(pr);hp=i(pg,"__call__"),pg.forEach(t),mp=i(ba," special method."),ba.forEach(t),up=d(gt),b(_o.$$.fragment,gt),fp=d(gt),hr=s(gt,"P",{});var hg=a(hr);gp=i(hg,"Example:"),hg.forEach(t),_p=d(gt),b(Cn.$$.fragment,gt),gt.forEach(t),ft.forEach(t),Fi=d(o),St=s(o,"H2",{class:!0});var ul=a(St);ko=s(ul,"A",{id:!0,class:!0,href:!0});var mg=a(ko);mr=s(mg,"SPAN",{});var ug=a(mr);b(xn.$$.fragment,ug),ug.forEach(t),mg.forEach(t),kp=d(ul),ur=s(ul,"SPAN",{});var fg=a(ur);vp=i(fg,"MPNetForTokenClassification"),fg.forEach(t),ul.forEach(t),zi=d(o),De=s(o,"DIV",{class:!0});var _t=a(De);b(jn.$$.fragment,_t),Tp=d(_t),fr=s(_t,"P",{});var gg=a(fr);Mp=i(gg,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),gg.forEach(t),bp=d(_t),Ln=s(_t,"P",{});var fl=a(Ln);wp=i(fl,"This model inherits from "),ta=s(fl,"A",{href:!0});var _g=a(ta);Pp=i(_g,"PreTrainedModel"),_g.forEach(t),Np=i(fl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fl.forEach(t),$p=d(_t),An=s(_t,"P",{});var gl=a(An);yp=i(gl,"This model is also a PyTorch "),In=s(gl,"A",{href:!0,rel:!0});var kg=a(In);Fp=i(kg,"torch.nn.Module"),kg.forEach(t),zp=i(gl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),gl.forEach(t),Ep=d(_t),Qe=s(_t,"DIV",{class:!0});var kt=a(Qe);b(Dn.$$.fragment,kt),qp=d(kt),Ot=s(kt,"P",{});var wa=a(Ot);Cp=i(wa,"The "),oa=s(wa,"A",{href:!0});var vg=a(oa);xp=i(vg,"MPNetForTokenClassification"),vg.forEach(t),jp=i(wa," forward method, overrides the "),gr=s(wa,"CODE",{});var Tg=a(gr);Lp=i(Tg,"__call__"),Tg.forEach(t),Ap=i(wa," special method."),wa.forEach(t),Ip=d(kt),b(vo.$$.fragment,kt),Dp=d(kt),_r=s(kt,"P",{});var Mg=a(_r);Sp=i(Mg,"Example:"),Mg.forEach(t),Op=d(kt),b(Sn.$$.fragment,kt),kt.forEach(t),_t.forEach(t),Ei=d(o),Wt=s(o,"H2",{class:!0});var _l=a(Wt);To=s(_l,"A",{id:!0,class:!0,href:!0});var bg=a(To);kr=s(bg,"SPAN",{});var wg=a(kr);b(On.$$.fragment,wg),wg.forEach(t),bg.forEach(t),Wp=d(_l),vr=s(_l,"SPAN",{});var Pg=a(vr);Hp=i(Pg,"MPNetForQuestionAnswering"),Pg.forEach(t),_l.forEach(t),qi=d(o),Se=s(o,"DIV",{class:!0});var vt=a(Se);b(Wn.$$.fragment,vt),Qp=d(vt),Ht=s(vt,"P",{});var Pa=a(Ht);Bp=i(Pa,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Tr=s(Pa,"CODE",{});var Ng=a(Tr);Rp=i(Ng,"span start logits"),Ng.forEach(t),Up=i(Pa," and "),Mr=s(Pa,"CODE",{});var $g=a(Mr);Vp=i($g,"span end logits"),$g.forEach(t),Kp=i(Pa,")."),Pa.forEach(t),Xp=d(vt),Hn=s(vt,"P",{});var kl=a(Hn);Jp=i(kl,"This model inherits from "),na=s(kl,"A",{href:!0});var yg=a(na);Gp=i(yg,"PreTrainedModel"),yg.forEach(t),Yp=i(kl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kl.forEach(t),Zp=d(vt),Qn=s(vt,"P",{});var vl=a(Qn);eh=i(vl,"This model is also a PyTorch "),Bn=s(vl,"A",{href:!0,rel:!0});var Fg=a(Bn);th=i(Fg,"torch.nn.Module"),Fg.forEach(t),oh=i(vl,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),vl.forEach(t),nh=d(vt),Be=s(vt,"DIV",{class:!0});var Tt=a(Be);b(Rn.$$.fragment,Tt),sh=d(Tt),Qt=s(Tt,"P",{});var Na=a(Qt);ah=i(Na,"The "),sa=s(Na,"A",{href:!0});var zg=a(sa);rh=i(zg,"MPNetForQuestionAnswering"),zg.forEach(t),ih=i(Na," forward method, overrides the "),br=s(Na,"CODE",{});var Eg=a(br);lh=i(Eg,"__call__"),Eg.forEach(t),dh=i(Na," special method."),Na.forEach(t),ch=d(Tt),b(Mo.$$.fragment,Tt),ph=d(Tt),wr=s(Tt,"P",{});var qg=a(wr);hh=i(qg,"Example:"),qg.forEach(t),mh=d(Tt),b(Un.$$.fragment,Tt),Tt.forEach(t),vt.forEach(t),Ci=d(o),Bt=s(o,"H2",{class:!0});var Tl=a(Bt);bo=s(Tl,"A",{id:!0,class:!0,href:!0});var Cg=a(bo);Pr=s(Cg,"SPAN",{});var xg=a(Pr);b(Vn.$$.fragment,xg),xg.forEach(t),Cg.forEach(t),uh=d(Tl),Nr=s(Tl,"SPAN",{});var jg=a(Nr);fh=i(jg,"TFMPNetModel"),jg.forEach(t),Tl.forEach(t),xi=d(o),ye=s(o,"DIV",{class:!0});var tt=a(ye);b(Kn.$$.fragment,tt),gh=d(tt),$r=s(tt,"P",{});var Lg=a($r);_h=i(Lg,"The bare MPNet Model transformer outputting raw hidden-states without any specific head on top."),Lg.forEach(t),kh=d(tt),Xn=s(tt,"P",{});var Ml=a(Xn);vh=i(Ml,"This model inherits from "),aa=s(Ml,"A",{href:!0});var Ag=a(aa);Th=i(Ag,"TFPreTrainedModel"),Ag.forEach(t),Mh=i(Ml,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ml.forEach(t),bh=d(tt),Jn=s(tt,"P",{});var bl=a(Jn);wh=i(bl,"This model is also a "),Gn=s(bl,"A",{href:!0,rel:!0});var Ig=a(Gn);Ph=i(Ig,"tf.keras.Model"),Ig.forEach(t),Nh=i(bl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bl.forEach(t),$h=d(tt),b(wo.$$.fragment,tt),yh=d(tt),Re=s(tt,"DIV",{class:!0});var Mt=a(Re);b(Yn.$$.fragment,Mt),Fh=d(Mt),Rt=s(Mt,"P",{});var $a=a(Rt);zh=i($a,"The "),ra=s($a,"A",{href:!0});var Dg=a(ra);Eh=i(Dg,"TFMPNetModel"),Dg.forEach(t),qh=i($a," forward method, overrides the "),yr=s($a,"CODE",{});var Sg=a(yr);Ch=i(Sg,"__call__"),Sg.forEach(t),xh=i($a," special method."),$a.forEach(t),jh=d(Mt),b(Po.$$.fragment,Mt),Lh=d(Mt),Fr=s(Mt,"P",{});var Og=a(Fr);Ah=i(Og,"Example:"),Og.forEach(t),Ih=d(Mt),b(Zn.$$.fragment,Mt),Mt.forEach(t),tt.forEach(t),ji=d(o),Ut=s(o,"H2",{class:!0});var wl=a(Ut);No=s(wl,"A",{id:!0,class:!0,href:!0});var Wg=a(No);zr=s(Wg,"SPAN",{});var Hg=a(zr);b(es.$$.fragment,Hg),Hg.forEach(t),Wg.forEach(t),Dh=d(wl),Er=s(wl,"SPAN",{});var Qg=a(Er);Sh=i(Qg,"TFMPNetForMaskedLM"),Qg.forEach(t),wl.forEach(t),Li=d(o),Fe=s(o,"DIV",{class:!0});var ot=a(Fe);b(ts.$$.fragment,ot),Oh=d(ot),os=s(ot,"P",{});var Pl=a(os);Wh=i(Pl,"MPNet Model with a "),qr=s(Pl,"CODE",{});var Bg=a(qr);Hh=i(Bg,"language modeling"),Bg.forEach(t),Qh=i(Pl," head on top."),Pl.forEach(t),Bh=d(ot),ns=s(ot,"P",{});var Nl=a(ns);Rh=i(Nl,"This model inherits from "),ia=s(Nl,"A",{href:!0});var Rg=a(ia);Uh=i(Rg,"TFPreTrainedModel"),Rg.forEach(t),Vh=i(Nl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nl.forEach(t),Kh=d(ot),ss=s(ot,"P",{});var $l=a(ss);Xh=i($l,"This model is also a "),as=s($l,"A",{href:!0,rel:!0});var Ug=a(as);Jh=i(Ug,"tf.keras.Model"),Ug.forEach(t),Gh=i($l,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$l.forEach(t),Yh=d(ot),b($o.$$.fragment,ot),Zh=d(ot),Ue=s(ot,"DIV",{class:!0});var bt=a(Ue);b(rs.$$.fragment,bt),em=d(bt),Vt=s(bt,"P",{});var ya=a(Vt);tm=i(ya,"The "),la=s(ya,"A",{href:!0});var Vg=a(la);om=i(Vg,"TFMPNetForMaskedLM"),Vg.forEach(t),nm=i(ya," forward method, overrides the "),Cr=s(ya,"CODE",{});var Kg=a(Cr);sm=i(Kg,"__call__"),Kg.forEach(t),am=i(ya," special method."),ya.forEach(t),rm=d(bt),b(yo.$$.fragment,bt),im=d(bt),xr=s(bt,"P",{});var Xg=a(xr);lm=i(Xg,"Example:"),Xg.forEach(t),dm=d(bt),b(is.$$.fragment,bt),bt.forEach(t),ot.forEach(t),Ai=d(o),Kt=s(o,"H2",{class:!0});var yl=a(Kt);Fo=s(yl,"A",{id:!0,class:!0,href:!0});var Jg=a(Fo);jr=s(Jg,"SPAN",{});var Gg=a(jr);b(ls.$$.fragment,Gg),Gg.forEach(t),Jg.forEach(t),cm=d(yl),Lr=s(yl,"SPAN",{});var Yg=a(Lr);pm=i(Yg,"TFMPNetForSequenceClassification"),Yg.forEach(t),yl.forEach(t),Ii=d(o),ze=s(o,"DIV",{class:!0});var nt=a(ze);b(ds.$$.fragment,nt),hm=d(nt),Ar=s(nt,"P",{});var Zg=a(Ar);mm=i(Zg,`MPNet Model transformer with a sequence classification/regression head on top (a linear layer on top of the pooled
output) e.g. for GLUE tasks.`),Zg.forEach(t),um=d(nt),cs=s(nt,"P",{});var Fl=a(cs);fm=i(Fl,"This model inherits from "),da=s(Fl,"A",{href:!0});var e_=a(da);gm=i(e_,"TFPreTrainedModel"),e_.forEach(t),_m=i(Fl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fl.forEach(t),km=d(nt),ps=s(nt,"P",{});var zl=a(ps);vm=i(zl,"This model is also a "),hs=s(zl,"A",{href:!0,rel:!0});var t_=a(hs);Tm=i(t_,"tf.keras.Model"),t_.forEach(t),Mm=i(zl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),zl.forEach(t),bm=d(nt),b(zo.$$.fragment,nt),wm=d(nt),Ve=s(nt,"DIV",{class:!0});var wt=a(Ve);b(ms.$$.fragment,wt),Pm=d(wt),Xt=s(wt,"P",{});var Fa=a(Xt);Nm=i(Fa,"The "),ca=s(Fa,"A",{href:!0});var o_=a(ca);$m=i(o_,"TFMPNetForSequenceClassification"),o_.forEach(t),ym=i(Fa," forward method, overrides the "),Ir=s(Fa,"CODE",{});var n_=a(Ir);Fm=i(n_,"__call__"),n_.forEach(t),zm=i(Fa," special method."),Fa.forEach(t),Em=d(wt),b(Eo.$$.fragment,wt),qm=d(wt),Dr=s(wt,"P",{});var s_=a(Dr);Cm=i(s_,"Example:"),s_.forEach(t),xm=d(wt),b(us.$$.fragment,wt),wt.forEach(t),nt.forEach(t),Di=d(o),Jt=s(o,"H2",{class:!0});var El=a(Jt);qo=s(El,"A",{id:!0,class:!0,href:!0});var a_=a(qo);Sr=s(a_,"SPAN",{});var r_=a(Sr);b(fs.$$.fragment,r_),r_.forEach(t),a_.forEach(t),jm=d(El),Or=s(El,"SPAN",{});var i_=a(Or);Lm=i(i_,"TFMPNetForMultipleChoice"),i_.forEach(t),El.forEach(t),Si=d(o),Ee=s(o,"DIV",{class:!0});var st=a(Ee);b(gs.$$.fragment,st),Am=d(st),Wr=s(st,"P",{});var l_=a(Wr);Im=i(l_,`MPNet Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),l_.forEach(t),Dm=d(st),_s=s(st,"P",{});var ql=a(_s);Sm=i(ql,"This model inherits from "),pa=s(ql,"A",{href:!0});var d_=a(pa);Om=i(d_,"TFPreTrainedModel"),d_.forEach(t),Wm=i(ql,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ql.forEach(t),Hm=d(st),ks=s(st,"P",{});var Cl=a(ks);Qm=i(Cl,"This model is also a "),vs=s(Cl,"A",{href:!0,rel:!0});var c_=a(vs);Bm=i(c_,"tf.keras.Model"),c_.forEach(t),Rm=i(Cl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cl.forEach(t),Um=d(st),b(Co.$$.fragment,st),Vm=d(st),Ke=s(st,"DIV",{class:!0});var Pt=a(Ke);b(Ts.$$.fragment,Pt),Km=d(Pt),Gt=s(Pt,"P",{});var za=a(Gt);Xm=i(za,"The "),ha=s(za,"A",{href:!0});var p_=a(ha);Jm=i(p_,"TFMPNetForMultipleChoice"),p_.forEach(t),Gm=i(za," forward method, overrides the "),Hr=s(za,"CODE",{});var h_=a(Hr);Ym=i(h_,"__call__"),h_.forEach(t),Zm=i(za," special method."),za.forEach(t),eu=d(Pt),b(xo.$$.fragment,Pt),tu=d(Pt),Qr=s(Pt,"P",{});var m_=a(Qr);ou=i(m_,"Example:"),m_.forEach(t),nu=d(Pt),b(Ms.$$.fragment,Pt),Pt.forEach(t),st.forEach(t),Oi=d(o),Yt=s(o,"H2",{class:!0});var xl=a(Yt);jo=s(xl,"A",{id:!0,class:!0,href:!0});var u_=a(jo);Br=s(u_,"SPAN",{});var f_=a(Br);b(bs.$$.fragment,f_),f_.forEach(t),u_.forEach(t),su=d(xl),Rr=s(xl,"SPAN",{});var g_=a(Rr);au=i(g_,"TFMPNetForTokenClassification"),g_.forEach(t),xl.forEach(t),Wi=d(o),qe=s(o,"DIV",{class:!0});var at=a(qe);b(ws.$$.fragment,at),ru=d(at),Ur=s(at,"P",{});var __=a(Ur);iu=i(__,`MPNet Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),__.forEach(t),lu=d(at),Ps=s(at,"P",{});var jl=a(Ps);du=i(jl,"This model inherits from "),ma=s(jl,"A",{href:!0});var k_=a(ma);cu=i(k_,"TFPreTrainedModel"),k_.forEach(t),pu=i(jl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),jl.forEach(t),hu=d(at),Ns=s(at,"P",{});var Ll=a(Ns);mu=i(Ll,"This model is also a "),$s=s(Ll,"A",{href:!0,rel:!0});var v_=a($s);uu=i(v_,"tf.keras.Model"),v_.forEach(t),fu=i(Ll,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Ll.forEach(t),gu=d(at),b(Lo.$$.fragment,at),_u=d(at),Xe=s(at,"DIV",{class:!0});var Nt=a(Xe);b(ys.$$.fragment,Nt),ku=d(Nt),Zt=s(Nt,"P",{});var Ea=a(Zt);vu=i(Ea,"The "),ua=s(Ea,"A",{href:!0});var T_=a(ua);Tu=i(T_,"TFMPNetForTokenClassification"),T_.forEach(t),Mu=i(Ea," forward method, overrides the "),Vr=s(Ea,"CODE",{});var M_=a(Vr);bu=i(M_,"__call__"),M_.forEach(t),wu=i(Ea," special method."),Ea.forEach(t),Pu=d(Nt),b(Ao.$$.fragment,Nt),Nu=d(Nt),Kr=s(Nt,"P",{});var b_=a(Kr);$u=i(b_,"Example:"),b_.forEach(t),yu=d(Nt),b(Fs.$$.fragment,Nt),Nt.forEach(t),at.forEach(t),Hi=d(o),eo=s(o,"H2",{class:!0});var Al=a(eo);Io=s(Al,"A",{id:!0,class:!0,href:!0});var w_=a(Io);Xr=s(w_,"SPAN",{});var P_=a(Xr);b(zs.$$.fragment,P_),P_.forEach(t),w_.forEach(t),Fu=d(Al),Jr=s(Al,"SPAN",{});var N_=a(Jr);zu=i(N_,"TFMPNetForQuestionAnswering"),N_.forEach(t),Al.forEach(t),Qi=d(o),Ce=s(o,"DIV",{class:!0});var rt=a(Ce);b(Es.$$.fragment,rt),Eu=d(rt),to=s(rt,"P",{});var qa=a(to);qu=i(qa,`MPNet Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Gr=s(qa,"CODE",{});var $_=a(Gr);Cu=i($_,"span start logits"),$_.forEach(t),xu=i(qa," and "),Yr=s(qa,"CODE",{});var y_=a(Yr);ju=i(y_,"span end logits"),y_.forEach(t),Lu=i(qa,")."),qa.forEach(t),Au=d(rt),qs=s(rt,"P",{});var Il=a(qs);Iu=i(Il,"This model inherits from "),fa=s(Il,"A",{href:!0});var F_=a(fa);Du=i(F_,"TFPreTrainedModel"),F_.forEach(t),Su=i(Il,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Il.forEach(t),Ou=d(rt),Cs=s(rt,"P",{});var Dl=a(Cs);Wu=i(Dl,"This model is also a "),xs=s(Dl,"A",{href:!0,rel:!0});var z_=a(xs);Hu=i(z_,"tf.keras.Model"),z_.forEach(t),Qu=i(Dl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Dl.forEach(t),Bu=d(rt),b(Do.$$.fragment,rt),Ru=d(rt),Je=s(rt,"DIV",{class:!0});var $t=a(Je);b(js.$$.fragment,$t),Uu=d($t),oo=s($t,"P",{});var Ca=a(oo);Vu=i(Ca,"The "),ga=s(Ca,"A",{href:!0});var E_=a(ga);Ku=i(E_,"TFMPNetForQuestionAnswering"),E_.forEach(t),Xu=i(Ca," forward method, overrides the "),Zr=s(Ca,"CODE",{});var q_=a(Zr);Ju=i(q_,"__call__"),q_.forEach(t),Gu=i(Ca," special method."),Ca.forEach(t),Yu=d($t),b(So.$$.fragment,$t),Zu=d($t),ei=s($t,"P",{});var C_=a(ei);ef=i(C_,"Example:"),C_.forEach(t),tf=d($t),b(Ls.$$.fragment,$t),$t.forEach(t),rt.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(ok)),h(g,"id","mpnet"),h(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(g,"href","#mpnet"),h(f,"class","relative group"),h(X,"id","overview"),h(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(X,"href","#overview"),h(z,"class","relative group"),h(Y,"href","https://arxiv.org/abs/2004.09297"),h(Y,"rel","nofollow"),h(ge,"href","https://github.com/microsoft/MPNet"),h(ge,"rel","nofollow"),h(no,"id","transformers.MPNetConfig"),h(no,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(no,"href","#transformers.MPNetConfig"),h(fe,"class","relative group"),h(Ss,"href","/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetModel"),h(Os,"href","/docs/transformers/master/en/model_doc/mpnet#transformers.TFMPNetModel"),h(Bo,"href","https://huggingface.co/mpnet-base"),h(Bo,"rel","nofollow"),h(Ws,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),h(Hs,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),h(je,"class","docstring"),h(so,"id","transformers.MPNetTokenizer"),h(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(so,"href","#transformers.MPNetTokenizer"),h(Ft,"class","relative group"),h(Qs,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer"),h(dt,"class","docstring"),h(ao,"class","docstring"),h(ro,"class","docstring"),h(Us,"class","docstring"),h($e,"class","docstring"),h(io,"id","transformers.MPNetTokenizerFast"),h(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(io,"href","#transformers.MPNetTokenizerFast"),h(zt,"class","relative group"),h(Vs,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizerFast"),h(lo,"class","docstring"),h(Ze,"class","docstring"),h(co,"id","transformers.MPNetModel"),h(co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(co,"href","#transformers.MPNetModel"),h(Et,"class","relative group"),h(Ks,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),h(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(pn,"rel","nofollow"),h(Xs,"href","/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetModel"),h(Oe,"class","docstring"),h(Le,"class","docstring"),h(ho,"id","transformers.MPNetForMaskedLM"),h(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ho,"href","#transformers.MPNetForMaskedLM"),h(Ct,"class","relative group"),h(Js,"href","/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetForMaskedLM"),h(We,"class","docstring"),h(xt,"class","docstring"),h(uo,"id","transformers.MPNetForSequenceClassification"),h(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(uo,"href","#transformers.MPNetForSequenceClassification"),h(Lt,"class","relative group"),h(Gs,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),h(bn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(bn,"rel","nofollow"),h(Ys,"href","/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetForSequenceClassification"),h(Pe,"class","docstring"),h(Ae,"class","docstring"),h(go,"id","transformers.MPNetForMultipleChoice"),h(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(go,"href","#transformers.MPNetForMultipleChoice"),h(It,"class","relative group"),h(Zs,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),h(En,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(En,"rel","nofollow"),h(ea,"href","/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetForMultipleChoice"),h(He,"class","docstring"),h(Ie,"class","docstring"),h(ko,"id","transformers.MPNetForTokenClassification"),h(ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ko,"href","#transformers.MPNetForTokenClassification"),h(St,"class","relative group"),h(ta,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),h(In,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(In,"rel","nofollow"),h(oa,"href","/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetForTokenClassification"),h(Qe,"class","docstring"),h(De,"class","docstring"),h(To,"id","transformers.MPNetForQuestionAnswering"),h(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(To,"href","#transformers.MPNetForQuestionAnswering"),h(Wt,"class","relative group"),h(na,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),h(Bn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Bn,"rel","nofollow"),h(sa,"href","/docs/transformers/master/en/model_doc/mpnet#transformers.MPNetForQuestionAnswering"),h(Be,"class","docstring"),h(Se,"class","docstring"),h(bo,"id","transformers.TFMPNetModel"),h(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(bo,"href","#transformers.TFMPNetModel"),h(Bt,"class","relative group"),h(aa,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),h(Gn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Gn,"rel","nofollow"),h(ra,"href","/docs/transformers/master/en/model_doc/mpnet#transformers.TFMPNetModel"),h(Re,"class","docstring"),h(ye,"class","docstring"),h(No,"id","transformers.TFMPNetForMaskedLM"),h(No,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(No,"href","#transformers.TFMPNetForMaskedLM"),h(Ut,"class","relative group"),h(ia,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),h(as,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(as,"rel","nofollow"),h(la,"href","/docs/transformers/master/en/model_doc/mpnet#transformers.TFMPNetForMaskedLM"),h(Ue,"class","docstring"),h(Fe,"class","docstring"),h(Fo,"id","transformers.TFMPNetForSequenceClassification"),h(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Fo,"href","#transformers.TFMPNetForSequenceClassification"),h(Kt,"class","relative group"),h(da,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),h(hs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(hs,"rel","nofollow"),h(ca,"href","/docs/transformers/master/en/model_doc/mpnet#transformers.TFMPNetForSequenceClassification"),h(Ve,"class","docstring"),h(ze,"class","docstring"),h(qo,"id","transformers.TFMPNetForMultipleChoice"),h(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qo,"href","#transformers.TFMPNetForMultipleChoice"),h(Jt,"class","relative group"),h(pa,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),h(vs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(vs,"rel","nofollow"),h(ha,"href","/docs/transformers/master/en/model_doc/mpnet#transformers.TFMPNetForMultipleChoice"),h(Ke,"class","docstring"),h(Ee,"class","docstring"),h(jo,"id","transformers.TFMPNetForTokenClassification"),h(jo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(jo,"href","#transformers.TFMPNetForTokenClassification"),h(Yt,"class","relative group"),h(ma,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),h($s,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h($s,"rel","nofollow"),h(ua,"href","/docs/transformers/master/en/model_doc/mpnet#transformers.TFMPNetForTokenClassification"),h(Xe,"class","docstring"),h(qe,"class","docstring"),h(Io,"id","transformers.TFMPNetForQuestionAnswering"),h(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Io,"href","#transformers.TFMPNetForQuestionAnswering"),h(eo,"class","relative group"),h(fa,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),h(xs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(xs,"rel","nofollow"),h(ga,"href","/docs/transformers/master/en/model_doc/mpnet#transformers.TFMPNetForQuestionAnswering"),h(Je,"class","docstring"),h(Ce,"class","docstring")},m(o,u){e(document.head,p),m(o,y,u),m(o,f,u),e(f,g),e(g,v),w(k,v,null),e(f,_),e(f,F),e(F,le),m(o,U,u),m(o,z,u),e(z,X),e(X,S),w(G,S,null),e(z,de),e(z,O),e(O,ce),m(o,se,u),m(o,R,u),e(R,A),e(R,Y),e(Y,V),e(R,E),m(o,q,u),m(o,Z,u),e(Z,Q),m(o,ae,u),m(o,ee,u),e(ee,B),m(o,re,u),m(o,te,u),e(te,C),e(C,pe),m(o,W,u),m(o,oe,u),e(oe,he),m(o,j,u),m(o,ne,u),e(ne,x),e(x,me),e(x,c),e(c,T),e(x,K),e(x,_e),e(_e,ve),e(x,I),e(x,ke),e(ke,Te),e(x,Me),m(o,L,u),m(o,D,u),e(D,be),e(D,ge),e(ge,ue),e(D,we),m(o,ie,u),m(o,fe,u),e(fe,no),e(no,xa),w(Ho,xa,null),e(fe,Sl),e(fe,ja),e(ja,Ol),m(o,fi,u),m(o,je,u),w(Qo,je,null),e(je,Wl),e(je,it),e(it,Hl),e(it,Ss),e(Ss,Ql),e(it,Bl),e(it,Os),e(Os,Rl),e(it,Ul),e(it,Bo),e(Bo,Vl),e(it,Kl),e(je,Xl),e(je,yt),e(yt,Jl),e(yt,Ws),e(Ws,Gl),e(yt,Yl),e(yt,Hs),e(Hs,Zl),e(yt,ed),e(je,td),e(je,La),e(La,od),e(je,nd),w(Ro,je,null),m(o,gi,u),m(o,Ft,u),e(Ft,so),e(so,Aa),w(Uo,Aa,null),e(Ft,sd),e(Ft,Ia),e(Ia,ad),m(o,_i,u),m(o,$e,u),w(Vo,$e,null),e($e,rd),e($e,Ko),e(Ko,id),e(Ko,Qs),e(Qs,ld),e(Ko,dd),e($e,cd),e($e,dt),w(Xo,dt,null),e(dt,pd),e(dt,Da),e(Da,hd),e(dt,md),e(dt,Jo),e(Jo,Bs),e(Bs,ud),e(Bs,Sa),e(Sa,fd),e(Jo,gd),e(Jo,Rs),e(Rs,_d),e(Rs,Oa),e(Oa,kd),e($e,vd),e($e,ao),w(Go,ao,null),e(ao,Td),e(ao,Yo),e(Yo,Md),e(Yo,Wa),e(Wa,bd),e(Yo,wd),e($e,Pd),e($e,ro),w(Zo,ro,null),e(ro,Nd),e(ro,Ha),e(Ha,$d),e($e,yd),e($e,Us),w(en,Us,null),m(o,ki,u),m(o,zt,u),e(zt,io),e(io,Qa),w(tn,Qa,null),e(zt,Fd),e(zt,Ba),e(Ba,zd),m(o,vi,u),m(o,Ze,u),w(on,Ze,null),e(Ze,Ed),e(Ze,nn),e(nn,qd),e(nn,Ra),e(Ra,Cd),e(nn,xd),e(Ze,jd),e(Ze,sn),e(sn,Ld),e(sn,Vs),e(Vs,Ad),e(sn,Id),e(Ze,Dd),e(Ze,lo),w(an,lo,null),e(lo,Sd),e(lo,Ua),e(Ua,Od),m(o,Ti,u),m(o,Et,u),e(Et,co),e(co,Va),w(rn,Va,null),e(Et,Wd),e(Et,Ka),e(Ka,Hd),m(o,Mi,u),m(o,Le,u),w(ln,Le,null),e(Le,Qd),e(Le,Xa),e(Xa,Bd),e(Le,Rd),e(Le,dn),e(dn,Ud),e(dn,Ks),e(Ks,Vd),e(dn,Kd),e(Le,Xd),e(Le,cn),e(cn,Jd),e(cn,pn),e(pn,Gd),e(cn,Yd),e(Le,Zd),e(Le,Oe),w(hn,Oe,null),e(Oe,ec),e(Oe,qt),e(qt,tc),e(qt,Xs),e(Xs,oc),e(qt,nc),e(qt,Ja),e(Ja,sc),e(qt,ac),e(Oe,rc),w(po,Oe,null),e(Oe,ic),e(Oe,Ga),e(Ga,lc),e(Oe,dc),w(mn,Oe,null),m(o,bi,u),m(o,Ct,u),e(Ct,ho),e(ho,Ya),w(un,Ya,null),e(Ct,cc),e(Ct,Za),e(Za,pc),m(o,wi,u),m(o,xt,u),w(fn,xt,null),e(xt,hc),e(xt,We),w(gn,We,null),e(We,mc),e(We,jt),e(jt,uc),e(jt,Js),e(Js,fc),e(jt,gc),e(jt,er),e(er,_c),e(jt,kc),e(We,vc),w(mo,We,null),e(We,Tc),e(We,tr),e(tr,Mc),e(We,bc),w(_n,We,null),m(o,Pi,u),m(o,Lt,u),e(Lt,uo),e(uo,or),w(kn,or,null),e(Lt,wc),e(Lt,nr),e(nr,Pc),m(o,Ni,u),m(o,Ae,u),w(vn,Ae,null),e(Ae,Nc),e(Ae,sr),e(sr,$c),e(Ae,yc),e(Ae,Tn),e(Tn,Fc),e(Tn,Gs),e(Gs,zc),e(Tn,Ec),e(Ae,qc),e(Ae,Mn),e(Mn,Cc),e(Mn,bn),e(bn,xc),e(Mn,jc),e(Ae,Lc),e(Ae,Pe),w(wn,Pe,null),e(Pe,Ac),e(Pe,At),e(At,Ic),e(At,Ys),e(Ys,Dc),e(At,Sc),e(At,ar),e(ar,Oc),e(At,Wc),e(Pe,Hc),w(fo,Pe,null),e(Pe,Qc),e(Pe,rr),e(rr,Bc),e(Pe,Rc),w(Pn,Pe,null),e(Pe,Uc),e(Pe,ir),e(ir,Vc),e(Pe,Kc),w(Nn,Pe,null),m(o,$i,u),m(o,It,u),e(It,go),e(go,lr),w($n,lr,null),e(It,Xc),e(It,dr),e(dr,Jc),m(o,yi,u),m(o,Ie,u),w(yn,Ie,null),e(Ie,Gc),e(Ie,cr),e(cr,Yc),e(Ie,Zc),e(Ie,Fn),e(Fn,ep),e(Fn,Zs),e(Zs,tp),e(Fn,op),e(Ie,np),e(Ie,zn),e(zn,sp),e(zn,En),e(En,ap),e(zn,rp),e(Ie,ip),e(Ie,He),w(qn,He,null),e(He,lp),e(He,Dt),e(Dt,dp),e(Dt,ea),e(ea,cp),e(Dt,pp),e(Dt,pr),e(pr,hp),e(Dt,mp),e(He,up),w(_o,He,null),e(He,fp),e(He,hr),e(hr,gp),e(He,_p),w(Cn,He,null),m(o,Fi,u),m(o,St,u),e(St,ko),e(ko,mr),w(xn,mr,null),e(St,kp),e(St,ur),e(ur,vp),m(o,zi,u),m(o,De,u),w(jn,De,null),e(De,Tp),e(De,fr),e(fr,Mp),e(De,bp),e(De,Ln),e(Ln,wp),e(Ln,ta),e(ta,Pp),e(Ln,Np),e(De,$p),e(De,An),e(An,yp),e(An,In),e(In,Fp),e(An,zp),e(De,Ep),e(De,Qe),w(Dn,Qe,null),e(Qe,qp),e(Qe,Ot),e(Ot,Cp),e(Ot,oa),e(oa,xp),e(Ot,jp),e(Ot,gr),e(gr,Lp),e(Ot,Ap),e(Qe,Ip),w(vo,Qe,null),e(Qe,Dp),e(Qe,_r),e(_r,Sp),e(Qe,Op),w(Sn,Qe,null),m(o,Ei,u),m(o,Wt,u),e(Wt,To),e(To,kr),w(On,kr,null),e(Wt,Wp),e(Wt,vr),e(vr,Hp),m(o,qi,u),m(o,Se,u),w(Wn,Se,null),e(Se,Qp),e(Se,Ht),e(Ht,Bp),e(Ht,Tr),e(Tr,Rp),e(Ht,Up),e(Ht,Mr),e(Mr,Vp),e(Ht,Kp),e(Se,Xp),e(Se,Hn),e(Hn,Jp),e(Hn,na),e(na,Gp),e(Hn,Yp),e(Se,Zp),e(Se,Qn),e(Qn,eh),e(Qn,Bn),e(Bn,th),e(Qn,oh),e(Se,nh),e(Se,Be),w(Rn,Be,null),e(Be,sh),e(Be,Qt),e(Qt,ah),e(Qt,sa),e(sa,rh),e(Qt,ih),e(Qt,br),e(br,lh),e(Qt,dh),e(Be,ch),w(Mo,Be,null),e(Be,ph),e(Be,wr),e(wr,hh),e(Be,mh),w(Un,Be,null),m(o,Ci,u),m(o,Bt,u),e(Bt,bo),e(bo,Pr),w(Vn,Pr,null),e(Bt,uh),e(Bt,Nr),e(Nr,fh),m(o,xi,u),m(o,ye,u),w(Kn,ye,null),e(ye,gh),e(ye,$r),e($r,_h),e(ye,kh),e(ye,Xn),e(Xn,vh),e(Xn,aa),e(aa,Th),e(Xn,Mh),e(ye,bh),e(ye,Jn),e(Jn,wh),e(Jn,Gn),e(Gn,Ph),e(Jn,Nh),e(ye,$h),w(wo,ye,null),e(ye,yh),e(ye,Re),w(Yn,Re,null),e(Re,Fh),e(Re,Rt),e(Rt,zh),e(Rt,ra),e(ra,Eh),e(Rt,qh),e(Rt,yr),e(yr,Ch),e(Rt,xh),e(Re,jh),w(Po,Re,null),e(Re,Lh),e(Re,Fr),e(Fr,Ah),e(Re,Ih),w(Zn,Re,null),m(o,ji,u),m(o,Ut,u),e(Ut,No),e(No,zr),w(es,zr,null),e(Ut,Dh),e(Ut,Er),e(Er,Sh),m(o,Li,u),m(o,Fe,u),w(ts,Fe,null),e(Fe,Oh),e(Fe,os),e(os,Wh),e(os,qr),e(qr,Hh),e(os,Qh),e(Fe,Bh),e(Fe,ns),e(ns,Rh),e(ns,ia),e(ia,Uh),e(ns,Vh),e(Fe,Kh),e(Fe,ss),e(ss,Xh),e(ss,as),e(as,Jh),e(ss,Gh),e(Fe,Yh),w($o,Fe,null),e(Fe,Zh),e(Fe,Ue),w(rs,Ue,null),e(Ue,em),e(Ue,Vt),e(Vt,tm),e(Vt,la),e(la,om),e(Vt,nm),e(Vt,Cr),e(Cr,sm),e(Vt,am),e(Ue,rm),w(yo,Ue,null),e(Ue,im),e(Ue,xr),e(xr,lm),e(Ue,dm),w(is,Ue,null),m(o,Ai,u),m(o,Kt,u),e(Kt,Fo),e(Fo,jr),w(ls,jr,null),e(Kt,cm),e(Kt,Lr),e(Lr,pm),m(o,Ii,u),m(o,ze,u),w(ds,ze,null),e(ze,hm),e(ze,Ar),e(Ar,mm),e(ze,um),e(ze,cs),e(cs,fm),e(cs,da),e(da,gm),e(cs,_m),e(ze,km),e(ze,ps),e(ps,vm),e(ps,hs),e(hs,Tm),e(ps,Mm),e(ze,bm),w(zo,ze,null),e(ze,wm),e(ze,Ve),w(ms,Ve,null),e(Ve,Pm),e(Ve,Xt),e(Xt,Nm),e(Xt,ca),e(ca,$m),e(Xt,ym),e(Xt,Ir),e(Ir,Fm),e(Xt,zm),e(Ve,Em),w(Eo,Ve,null),e(Ve,qm),e(Ve,Dr),e(Dr,Cm),e(Ve,xm),w(us,Ve,null),m(o,Di,u),m(o,Jt,u),e(Jt,qo),e(qo,Sr),w(fs,Sr,null),e(Jt,jm),e(Jt,Or),e(Or,Lm),m(o,Si,u),m(o,Ee,u),w(gs,Ee,null),e(Ee,Am),e(Ee,Wr),e(Wr,Im),e(Ee,Dm),e(Ee,_s),e(_s,Sm),e(_s,pa),e(pa,Om),e(_s,Wm),e(Ee,Hm),e(Ee,ks),e(ks,Qm),e(ks,vs),e(vs,Bm),e(ks,Rm),e(Ee,Um),w(Co,Ee,null),e(Ee,Vm),e(Ee,Ke),w(Ts,Ke,null),e(Ke,Km),e(Ke,Gt),e(Gt,Xm),e(Gt,ha),e(ha,Jm),e(Gt,Gm),e(Gt,Hr),e(Hr,Ym),e(Gt,Zm),e(Ke,eu),w(xo,Ke,null),e(Ke,tu),e(Ke,Qr),e(Qr,ou),e(Ke,nu),w(Ms,Ke,null),m(o,Oi,u),m(o,Yt,u),e(Yt,jo),e(jo,Br),w(bs,Br,null),e(Yt,su),e(Yt,Rr),e(Rr,au),m(o,Wi,u),m(o,qe,u),w(ws,qe,null),e(qe,ru),e(qe,Ur),e(Ur,iu),e(qe,lu),e(qe,Ps),e(Ps,du),e(Ps,ma),e(ma,cu),e(Ps,pu),e(qe,hu),e(qe,Ns),e(Ns,mu),e(Ns,$s),e($s,uu),e(Ns,fu),e(qe,gu),w(Lo,qe,null),e(qe,_u),e(qe,Xe),w(ys,Xe,null),e(Xe,ku),e(Xe,Zt),e(Zt,vu),e(Zt,ua),e(ua,Tu),e(Zt,Mu),e(Zt,Vr),e(Vr,bu),e(Zt,wu),e(Xe,Pu),w(Ao,Xe,null),e(Xe,Nu),e(Xe,Kr),e(Kr,$u),e(Xe,yu),w(Fs,Xe,null),m(o,Hi,u),m(o,eo,u),e(eo,Io),e(Io,Xr),w(zs,Xr,null),e(eo,Fu),e(eo,Jr),e(Jr,zu),m(o,Qi,u),m(o,Ce,u),w(Es,Ce,null),e(Ce,Eu),e(Ce,to),e(to,qu),e(to,Gr),e(Gr,Cu),e(to,xu),e(to,Yr),e(Yr,ju),e(to,Lu),e(Ce,Au),e(Ce,qs),e(qs,Iu),e(qs,fa),e(fa,Du),e(qs,Su),e(Ce,Ou),e(Ce,Cs),e(Cs,Wu),e(Cs,xs),e(xs,Hu),e(Cs,Qu),e(Ce,Bu),w(Do,Ce,null),e(Ce,Ru),e(Ce,Je),w(js,Je,null),e(Je,Uu),e(Je,oo),e(oo,Vu),e(oo,ga),e(ga,Ku),e(oo,Xu),e(oo,Zr),e(Zr,Ju),e(oo,Gu),e(Je,Yu),w(So,Je,null),e(Je,Zu),e(Je,ei),e(ei,ef),e(Je,tf),w(Ls,Je,null),Bi=!0},p(o,[u]){const As={};u&2&&(As.$$scope={dirty:u,ctx:o}),po.$set(As);const ti={};u&2&&(ti.$$scope={dirty:u,ctx:o}),mo.$set(ti);const oi={};u&2&&(oi.$$scope={dirty:u,ctx:o}),fo.$set(oi);const ni={};u&2&&(ni.$$scope={dirty:u,ctx:o}),_o.$set(ni);const Is={};u&2&&(Is.$$scope={dirty:u,ctx:o}),vo.$set(Is);const si={};u&2&&(si.$$scope={dirty:u,ctx:o}),Mo.$set(si);const ai={};u&2&&(ai.$$scope={dirty:u,ctx:o}),wo.$set(ai);const ri={};u&2&&(ri.$$scope={dirty:u,ctx:o}),Po.$set(ri);const Ds={};u&2&&(Ds.$$scope={dirty:u,ctx:o}),$o.$set(Ds);const ii={};u&2&&(ii.$$scope={dirty:u,ctx:o}),yo.$set(ii);const li={};u&2&&(li.$$scope={dirty:u,ctx:o}),zo.$set(li);const di={};u&2&&(di.$$scope={dirty:u,ctx:o}),Eo.$set(di);const ci={};u&2&&(ci.$$scope={dirty:u,ctx:o}),Co.$set(ci);const pi={};u&2&&(pi.$$scope={dirty:u,ctx:o}),xo.$set(pi);const hi={};u&2&&(hi.$$scope={dirty:u,ctx:o}),Lo.$set(hi);const mi={};u&2&&(mi.$$scope={dirty:u,ctx:o}),Ao.$set(mi);const lt={};u&2&&(lt.$$scope={dirty:u,ctx:o}),Do.$set(lt);const ui={};u&2&&(ui.$$scope={dirty:u,ctx:o}),So.$set(ui)},i(o){Bi||(P(k.$$.fragment,o),P(G.$$.fragment,o),P(Ho.$$.fragment,o),P(Qo.$$.fragment,o),P(Ro.$$.fragment,o),P(Uo.$$.fragment,o),P(Vo.$$.fragment,o),P(Xo.$$.fragment,o),P(Go.$$.fragment,o),P(Zo.$$.fragment,o),P(en.$$.fragment,o),P(tn.$$.fragment,o),P(on.$$.fragment,o),P(an.$$.fragment,o),P(rn.$$.fragment,o),P(ln.$$.fragment,o),P(hn.$$.fragment,o),P(po.$$.fragment,o),P(mn.$$.fragment,o),P(un.$$.fragment,o),P(fn.$$.fragment,o),P(gn.$$.fragment,o),P(mo.$$.fragment,o),P(_n.$$.fragment,o),P(kn.$$.fragment,o),P(vn.$$.fragment,o),P(wn.$$.fragment,o),P(fo.$$.fragment,o),P(Pn.$$.fragment,o),P(Nn.$$.fragment,o),P($n.$$.fragment,o),P(yn.$$.fragment,o),P(qn.$$.fragment,o),P(_o.$$.fragment,o),P(Cn.$$.fragment,o),P(xn.$$.fragment,o),P(jn.$$.fragment,o),P(Dn.$$.fragment,o),P(vo.$$.fragment,o),P(Sn.$$.fragment,o),P(On.$$.fragment,o),P(Wn.$$.fragment,o),P(Rn.$$.fragment,o),P(Mo.$$.fragment,o),P(Un.$$.fragment,o),P(Vn.$$.fragment,o),P(Kn.$$.fragment,o),P(wo.$$.fragment,o),P(Yn.$$.fragment,o),P(Po.$$.fragment,o),P(Zn.$$.fragment,o),P(es.$$.fragment,o),P(ts.$$.fragment,o),P($o.$$.fragment,o),P(rs.$$.fragment,o),P(yo.$$.fragment,o),P(is.$$.fragment,o),P(ls.$$.fragment,o),P(ds.$$.fragment,o),P(zo.$$.fragment,o),P(ms.$$.fragment,o),P(Eo.$$.fragment,o),P(us.$$.fragment,o),P(fs.$$.fragment,o),P(gs.$$.fragment,o),P(Co.$$.fragment,o),P(Ts.$$.fragment,o),P(xo.$$.fragment,o),P(Ms.$$.fragment,o),P(bs.$$.fragment,o),P(ws.$$.fragment,o),P(Lo.$$.fragment,o),P(ys.$$.fragment,o),P(Ao.$$.fragment,o),P(Fs.$$.fragment,o),P(zs.$$.fragment,o),P(Es.$$.fragment,o),P(Do.$$.fragment,o),P(js.$$.fragment,o),P(So.$$.fragment,o),P(Ls.$$.fragment,o),Bi=!0)},o(o){N(k.$$.fragment,o),N(G.$$.fragment,o),N(Ho.$$.fragment,o),N(Qo.$$.fragment,o),N(Ro.$$.fragment,o),N(Uo.$$.fragment,o),N(Vo.$$.fragment,o),N(Xo.$$.fragment,o),N(Go.$$.fragment,o),N(Zo.$$.fragment,o),N(en.$$.fragment,o),N(tn.$$.fragment,o),N(on.$$.fragment,o),N(an.$$.fragment,o),N(rn.$$.fragment,o),N(ln.$$.fragment,o),N(hn.$$.fragment,o),N(po.$$.fragment,o),N(mn.$$.fragment,o),N(un.$$.fragment,o),N(fn.$$.fragment,o),N(gn.$$.fragment,o),N(mo.$$.fragment,o),N(_n.$$.fragment,o),N(kn.$$.fragment,o),N(vn.$$.fragment,o),N(wn.$$.fragment,o),N(fo.$$.fragment,o),N(Pn.$$.fragment,o),N(Nn.$$.fragment,o),N($n.$$.fragment,o),N(yn.$$.fragment,o),N(qn.$$.fragment,o),N(_o.$$.fragment,o),N(Cn.$$.fragment,o),N(xn.$$.fragment,o),N(jn.$$.fragment,o),N(Dn.$$.fragment,o),N(vo.$$.fragment,o),N(Sn.$$.fragment,o),N(On.$$.fragment,o),N(Wn.$$.fragment,o),N(Rn.$$.fragment,o),N(Mo.$$.fragment,o),N(Un.$$.fragment,o),N(Vn.$$.fragment,o),N(Kn.$$.fragment,o),N(wo.$$.fragment,o),N(Yn.$$.fragment,o),N(Po.$$.fragment,o),N(Zn.$$.fragment,o),N(es.$$.fragment,o),N(ts.$$.fragment,o),N($o.$$.fragment,o),N(rs.$$.fragment,o),N(yo.$$.fragment,o),N(is.$$.fragment,o),N(ls.$$.fragment,o),N(ds.$$.fragment,o),N(zo.$$.fragment,o),N(ms.$$.fragment,o),N(Eo.$$.fragment,o),N(us.$$.fragment,o),N(fs.$$.fragment,o),N(gs.$$.fragment,o),N(Co.$$.fragment,o),N(Ts.$$.fragment,o),N(xo.$$.fragment,o),N(Ms.$$.fragment,o),N(bs.$$.fragment,o),N(ws.$$.fragment,o),N(Lo.$$.fragment,o),N(ys.$$.fragment,o),N(Ao.$$.fragment,o),N(Fs.$$.fragment,o),N(zs.$$.fragment,o),N(Es.$$.fragment,o),N(Do.$$.fragment,o),N(js.$$.fragment,o),N(So.$$.fragment,o),N(Ls.$$.fragment,o),Bi=!1},d(o){t(p),o&&t(y),o&&t(f),$(k),o&&t(U),o&&t(z),$(G),o&&t(se),o&&t(R),o&&t(q),o&&t(Z),o&&t(ae),o&&t(ee),o&&t(re),o&&t(te),o&&t(W),o&&t(oe),o&&t(j),o&&t(ne),o&&t(L),o&&t(D),o&&t(ie),o&&t(fe),$(Ho),o&&t(fi),o&&t(je),$(Qo),$(Ro),o&&t(gi),o&&t(Ft),$(Uo),o&&t(_i),o&&t($e),$(Vo),$(Xo),$(Go),$(Zo),$(en),o&&t(ki),o&&t(zt),$(tn),o&&t(vi),o&&t(Ze),$(on),$(an),o&&t(Ti),o&&t(Et),$(rn),o&&t(Mi),o&&t(Le),$(ln),$(hn),$(po),$(mn),o&&t(bi),o&&t(Ct),$(un),o&&t(wi),o&&t(xt),$(fn),$(gn),$(mo),$(_n),o&&t(Pi),o&&t(Lt),$(kn),o&&t(Ni),o&&t(Ae),$(vn),$(wn),$(fo),$(Pn),$(Nn),o&&t($i),o&&t(It),$($n),o&&t(yi),o&&t(Ie),$(yn),$(qn),$(_o),$(Cn),o&&t(Fi),o&&t(St),$(xn),o&&t(zi),o&&t(De),$(jn),$(Dn),$(vo),$(Sn),o&&t(Ei),o&&t(Wt),$(On),o&&t(qi),o&&t(Se),$(Wn),$(Rn),$(Mo),$(Un),o&&t(Ci),o&&t(Bt),$(Vn),o&&t(xi),o&&t(ye),$(Kn),$(wo),$(Yn),$(Po),$(Zn),o&&t(ji),o&&t(Ut),$(es),o&&t(Li),o&&t(Fe),$(ts),$($o),$(rs),$(yo),$(is),o&&t(Ai),o&&t(Kt),$(ls),o&&t(Ii),o&&t(ze),$(ds),$(zo),$(ms),$(Eo),$(us),o&&t(Di),o&&t(Jt),$(fs),o&&t(Si),o&&t(Ee),$(gs),$(Co),$(Ts),$(xo),$(Ms),o&&t(Oi),o&&t(Yt),$(bs),o&&t(Wi),o&&t(qe),$(ws),$(Lo),$(ys),$(Ao),$(Fs),o&&t(Hi),o&&t(eo),$(zs),o&&t(Qi),o&&t(Ce),$(Es),$(Do),$(js),$(So),$(Ls)}}}const ok={local:"mpnet",sections:[{local:"overview",title:"Overview"},{local:"transformers.MPNetConfig",title:"MPNetConfig"},{local:"transformers.MPNetTokenizer",title:"MPNetTokenizer"},{local:"transformers.MPNetTokenizerFast",title:"MPNetTokenizerFast"},{local:"transformers.MPNetModel",title:"MPNetModel"},{local:"transformers.MPNetForMaskedLM",title:"MPNetForMaskedLM"},{local:"transformers.MPNetForSequenceClassification",title:"MPNetForSequenceClassification"},{local:"transformers.MPNetForMultipleChoice",title:"MPNetForMultipleChoice"},{local:"transformers.MPNetForTokenClassification",title:"MPNetForTokenClassification"},{local:"transformers.MPNetForQuestionAnswering",title:"MPNetForQuestionAnswering"},{local:"transformers.TFMPNetModel",title:"TFMPNetModel"},{local:"transformers.TFMPNetForMaskedLM",title:"TFMPNetForMaskedLM"},{local:"transformers.TFMPNetForSequenceClassification",title:"TFMPNetForSequenceClassification"},{local:"transformers.TFMPNetForMultipleChoice",title:"TFMPNetForMultipleChoice"},{local:"transformers.TFMPNetForTokenClassification",title:"TFMPNetForTokenClassification"},{local:"transformers.TFMPNetForQuestionAnswering",title:"TFMPNetForQuestionAnswering"}],title:"MPNet"};function nk(H,p,y){let{fw:f}=p;return H.$$set=g=>{"fw"in g&&y(0,f=g.fw)},[f]}class ck extends x_{constructor(p){super();j_(this,p,nk,tk,L_,{fw:0})}}export{ck as default,ok as metadata};
