import{S as Xg,i as e_,s as t_,e as r,k as l,w as b,t as n,M as o_,c as a,d as t,m as d,a as i,x as C,h as s,b as h,F as e,g as u,y as w,q as $,o as y,B}from"../../chunks/vendor-6b77c823.js";import{T as Me}from"../../chunks/Tip-39098574.js";import{D as ne}from"../../chunks/Docstring-abef54e3.js";import{C as Ie}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as De}from"../../chunks/IconCopyLink-7a11ce68.js";function n_(H){let p,F,m,g,T;return{c(){p=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var E=i(m);g=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){u(v,p,_),e(p,F),e(p,m),e(m,g),e(p,T)},d(v){v&&t(p)}}}function s_(H){let p,F,m,g,T;return{c(){p=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var E=i(m);g=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){u(v,p,_),e(p,F),e(p,m),e(m,g),e(p,T)},d(v){v&&t(p)}}}function r_(H){let p,F,m,g,T;return{c(){p=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var E=i(m);g=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){u(v,p,_),e(p,F),e(p,m),e(m,g),e(p,T)},d(v){v&&t(p)}}}function a_(H){let p,F,m,g,T;return{c(){p=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var E=i(m);g=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){u(v,p,_),e(p,F),e(p,m),e(m,g),e(p,T)},d(v){v&&t(p)}}}function i_(H){let p,F,m,g,T;return{c(){p=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var E=i(m);g=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){u(v,p,_),e(p,F),e(p,m),e(m,g),e(p,T)},d(v){v&&t(p)}}}function l_(H){let p,F,m,g,T;return{c(){p=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var E=i(m);g=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){u(v,p,_),e(p,F),e(p,m),e(m,g),e(p,T)},d(v){v&&t(p)}}}function d_(H){let p,F,m,g,T,v,_,E,de,K,M,X,S,ee,ce,L,pe,ae,U,A,te,J,z,j,se,Q,ie,re,O,he,le,q,ue,R,G,me,I,fe,ge,P,_e,W,Z;return{c(){p=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),T=r("li"),v=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),M=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),pe=n("model(inputs)"),ae=n("."),U=l(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),z=r("ul"),j=r("li"),se=n("a single Tensor with "),Q=r("code"),ie=n("input_ids"),re=n(" only and nothing else: "),O=r("code"),he=n("model(inputs_ids)"),le=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),G=n("model([input_ids, attention_mask])"),me=n(" or "),I=r("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),ge=l(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){p=a(c,"P",{});var k=i(p);F=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(c),g=a(c,"UL",{});var V=i(g);T=a(V,"LI",{});var $e=i(T);v=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),E=a(V,"LI",{});var Ce=i(E);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=d(c),M=a(c,"P",{});var N=i(M);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var we=i(S);ee=s(we,"tf.keras.Model.fit"),we.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(N,"CODE",{});var oe=i(L);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),U=d(c),A=a(c,"P",{});var Te=i(A);te=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te.forEach(t),J=d(c),z=a(c,"UL",{});var D=i(z);j=a(D,"LI",{});var x=i(j);se=s(x,"a single Tensor with "),Q=a(x,"CODE",{});var ye=i(Q);ie=s(ye,"input_ids"),ye.forEach(t),re=s(x," only and nothing else: "),O=a(x,"CODE",{});var be=i(O);he=s(be,"model(inputs_ids)"),be.forEach(t),x.forEach(t),le=d(D),q=a(D,"LI",{});var Y=i(q);ue=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Y,"CODE",{});var Be=i(R);G=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),me=s(Y," or "),I=a(Y,"CODE",{});var ke=i(I);fe=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Y.forEach(t),ge=d(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(ve,"CODE",{});var Fe=i(W);Z=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),ve.forEach(t),D.forEach(t)},m(c,k){u(c,p,k),e(p,F),u(c,m,k),u(c,g,k),e(g,T),e(T,v),e(g,_),e(g,E),e(E,de),u(c,K,k),u(c,M,k),e(M,X),e(M,S),e(S,ee),e(M,ce),e(M,L),e(L,pe),e(M,ae),u(c,U,k),u(c,A,k),e(A,te),u(c,J,k),u(c,z,k),e(z,j),e(j,se),e(j,Q),e(Q,ie),e(j,re),e(j,O),e(O,he),e(z,le),e(z,q),e(q,ue),e(q,R),e(R,G),e(q,me),e(q,I),e(I,fe),e(z,ge),e(z,P),e(P,_e),e(P,W),e(W,Z)},d(c){c&&t(p),c&&t(m),c&&t(g),c&&t(K),c&&t(M),c&&t(U),c&&t(A),c&&t(J),c&&t(z)}}}function c_(H){let p,F,m,g,T;return{c(){p=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var E=i(m);g=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){u(v,p,_),e(p,F),e(p,m),e(m,g),e(p,T)},d(v){v&&t(p)}}}function p_(H){let p,F,m,g,T,v,_,E,de,K,M,X,S,ee,ce,L,pe,ae,U,A,te,J,z,j,se,Q,ie,re,O,he,le,q,ue,R,G,me,I,fe,ge,P,_e,W,Z;return{c(){p=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),T=r("li"),v=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),M=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),pe=n("model(inputs)"),ae=n("."),U=l(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),z=r("ul"),j=r("li"),se=n("a single Tensor with "),Q=r("code"),ie=n("input_ids"),re=n(" only and nothing else: "),O=r("code"),he=n("model(inputs_ids)"),le=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),G=n("model([input_ids, attention_mask])"),me=n(" or "),I=r("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),ge=l(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){p=a(c,"P",{});var k=i(p);F=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(c),g=a(c,"UL",{});var V=i(g);T=a(V,"LI",{});var $e=i(T);v=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),E=a(V,"LI",{});var Ce=i(E);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=d(c),M=a(c,"P",{});var N=i(M);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var we=i(S);ee=s(we,"tf.keras.Model.fit"),we.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(N,"CODE",{});var oe=i(L);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),U=d(c),A=a(c,"P",{});var Te=i(A);te=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te.forEach(t),J=d(c),z=a(c,"UL",{});var D=i(z);j=a(D,"LI",{});var x=i(j);se=s(x,"a single Tensor with "),Q=a(x,"CODE",{});var ye=i(Q);ie=s(ye,"input_ids"),ye.forEach(t),re=s(x," only and nothing else: "),O=a(x,"CODE",{});var be=i(O);he=s(be,"model(inputs_ids)"),be.forEach(t),x.forEach(t),le=d(D),q=a(D,"LI",{});var Y=i(q);ue=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Y,"CODE",{});var Be=i(R);G=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),me=s(Y," or "),I=a(Y,"CODE",{});var ke=i(I);fe=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Y.forEach(t),ge=d(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(ve,"CODE",{});var Fe=i(W);Z=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),ve.forEach(t),D.forEach(t)},m(c,k){u(c,p,k),e(p,F),u(c,m,k),u(c,g,k),e(g,T),e(T,v),e(g,_),e(g,E),e(E,de),u(c,K,k),u(c,M,k),e(M,X),e(M,S),e(S,ee),e(M,ce),e(M,L),e(L,pe),e(M,ae),u(c,U,k),u(c,A,k),e(A,te),u(c,J,k),u(c,z,k),e(z,j),e(j,se),e(j,Q),e(Q,ie),e(j,re),e(j,O),e(O,he),e(z,le),e(z,q),e(q,ue),e(q,R),e(R,G),e(q,me),e(q,I),e(I,fe),e(z,ge),e(z,P),e(P,_e),e(P,W),e(W,Z)},d(c){c&&t(p),c&&t(m),c&&t(g),c&&t(K),c&&t(M),c&&t(U),c&&t(A),c&&t(J),c&&t(z)}}}function h_(H){let p,F,m,g,T;return{c(){p=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var E=i(m);g=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){u(v,p,_),e(p,F),e(p,m),e(m,g),e(p,T)},d(v){v&&t(p)}}}function u_(H){let p,F,m,g,T,v,_,E,de,K,M,X,S,ee,ce,L,pe,ae,U,A,te,J,z,j,se,Q,ie,re,O,he,le,q,ue,R,G,me,I,fe,ge,P,_e,W,Z;return{c(){p=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),T=r("li"),v=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),M=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),pe=n("model(inputs)"),ae=n("."),U=l(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),z=r("ul"),j=r("li"),se=n("a single Tensor with "),Q=r("code"),ie=n("input_ids"),re=n(" only and nothing else: "),O=r("code"),he=n("model(inputs_ids)"),le=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),G=n("model([input_ids, attention_mask])"),me=n(" or "),I=r("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),ge=l(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){p=a(c,"P",{});var k=i(p);F=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(c),g=a(c,"UL",{});var V=i(g);T=a(V,"LI",{});var $e=i(T);v=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),E=a(V,"LI",{});var Ce=i(E);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=d(c),M=a(c,"P",{});var N=i(M);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var we=i(S);ee=s(we,"tf.keras.Model.fit"),we.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(N,"CODE",{});var oe=i(L);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),U=d(c),A=a(c,"P",{});var Te=i(A);te=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te.forEach(t),J=d(c),z=a(c,"UL",{});var D=i(z);j=a(D,"LI",{});var x=i(j);se=s(x,"a single Tensor with "),Q=a(x,"CODE",{});var ye=i(Q);ie=s(ye,"input_ids"),ye.forEach(t),re=s(x," only and nothing else: "),O=a(x,"CODE",{});var be=i(O);he=s(be,"model(inputs_ids)"),be.forEach(t),x.forEach(t),le=d(D),q=a(D,"LI",{});var Y=i(q);ue=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Y,"CODE",{});var Be=i(R);G=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),me=s(Y," or "),I=a(Y,"CODE",{});var ke=i(I);fe=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Y.forEach(t),ge=d(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(ve,"CODE",{});var Fe=i(W);Z=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),ve.forEach(t),D.forEach(t)},m(c,k){u(c,p,k),e(p,F),u(c,m,k),u(c,g,k),e(g,T),e(T,v),e(g,_),e(g,E),e(E,de),u(c,K,k),u(c,M,k),e(M,X),e(M,S),e(S,ee),e(M,ce),e(M,L),e(L,pe),e(M,ae),u(c,U,k),u(c,A,k),e(A,te),u(c,J,k),u(c,z,k),e(z,j),e(j,se),e(j,Q),e(Q,ie),e(j,re),e(j,O),e(O,he),e(z,le),e(z,q),e(q,ue),e(q,R),e(R,G),e(q,me),e(q,I),e(I,fe),e(z,ge),e(z,P),e(P,_e),e(P,W),e(W,Z)},d(c){c&&t(p),c&&t(m),c&&t(g),c&&t(K),c&&t(M),c&&t(U),c&&t(A),c&&t(J),c&&t(z)}}}function m_(H){let p,F,m,g,T;return{c(){p=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var E=i(m);g=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){u(v,p,_),e(p,F),e(p,m),e(m,g),e(p,T)},d(v){v&&t(p)}}}function f_(H){let p,F,m,g,T,v,_,E,de,K,M,X,S,ee,ce,L,pe,ae,U,A,te,J,z,j,se,Q,ie,re,O,he,le,q,ue,R,G,me,I,fe,ge,P,_e,W,Z;return{c(){p=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),T=r("li"),v=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),M=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),pe=n("model(inputs)"),ae=n("."),U=l(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),z=r("ul"),j=r("li"),se=n("a single Tensor with "),Q=r("code"),ie=n("input_ids"),re=n(" only and nothing else: "),O=r("code"),he=n("model(inputs_ids)"),le=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),G=n("model([input_ids, attention_mask])"),me=n(" or "),I=r("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),ge=l(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){p=a(c,"P",{});var k=i(p);F=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(c),g=a(c,"UL",{});var V=i(g);T=a(V,"LI",{});var $e=i(T);v=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),E=a(V,"LI",{});var Ce=i(E);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=d(c),M=a(c,"P",{});var N=i(M);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var we=i(S);ee=s(we,"tf.keras.Model.fit"),we.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(N,"CODE",{});var oe=i(L);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),U=d(c),A=a(c,"P",{});var Te=i(A);te=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te.forEach(t),J=d(c),z=a(c,"UL",{});var D=i(z);j=a(D,"LI",{});var x=i(j);se=s(x,"a single Tensor with "),Q=a(x,"CODE",{});var ye=i(Q);ie=s(ye,"input_ids"),ye.forEach(t),re=s(x," only and nothing else: "),O=a(x,"CODE",{});var be=i(O);he=s(be,"model(inputs_ids)"),be.forEach(t),x.forEach(t),le=d(D),q=a(D,"LI",{});var Y=i(q);ue=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Y,"CODE",{});var Be=i(R);G=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),me=s(Y," or "),I=a(Y,"CODE",{});var ke=i(I);fe=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Y.forEach(t),ge=d(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(ve,"CODE",{});var Fe=i(W);Z=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),ve.forEach(t),D.forEach(t)},m(c,k){u(c,p,k),e(p,F),u(c,m,k),u(c,g,k),e(g,T),e(T,v),e(g,_),e(g,E),e(E,de),u(c,K,k),u(c,M,k),e(M,X),e(M,S),e(S,ee),e(M,ce),e(M,L),e(L,pe),e(M,ae),u(c,U,k),u(c,A,k),e(A,te),u(c,J,k),u(c,z,k),e(z,j),e(j,se),e(j,Q),e(Q,ie),e(j,re),e(j,O),e(O,he),e(z,le),e(z,q),e(q,ue),e(q,R),e(R,G),e(q,me),e(q,I),e(I,fe),e(z,ge),e(z,P),e(P,_e),e(P,W),e(W,Z)},d(c){c&&t(p),c&&t(m),c&&t(g),c&&t(K),c&&t(M),c&&t(U),c&&t(A),c&&t(J),c&&t(z)}}}function g_(H){let p,F,m,g,T;return{c(){p=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var E=i(m);g=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){u(v,p,_),e(p,F),e(p,m),e(m,g),e(p,T)},d(v){v&&t(p)}}}function __(H){let p,F,m,g,T,v,_,E,de,K,M,X,S,ee,ce,L,pe,ae,U,A,te,J,z,j,se,Q,ie,re,O,he,le,q,ue,R,G,me,I,fe,ge,P,_e,W,Z;return{c(){p=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),T=r("li"),v=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),M=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),pe=n("model(inputs)"),ae=n("."),U=l(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),z=r("ul"),j=r("li"),se=n("a single Tensor with "),Q=r("code"),ie=n("input_ids"),re=n(" only and nothing else: "),O=r("code"),he=n("model(inputs_ids)"),le=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),G=n("model([input_ids, attention_mask])"),me=n(" or "),I=r("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),ge=l(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){p=a(c,"P",{});var k=i(p);F=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(c),g=a(c,"UL",{});var V=i(g);T=a(V,"LI",{});var $e=i(T);v=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),E=a(V,"LI",{});var Ce=i(E);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=d(c),M=a(c,"P",{});var N=i(M);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var we=i(S);ee=s(we,"tf.keras.Model.fit"),we.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(N,"CODE",{});var oe=i(L);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),U=d(c),A=a(c,"P",{});var Te=i(A);te=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te.forEach(t),J=d(c),z=a(c,"UL",{});var D=i(z);j=a(D,"LI",{});var x=i(j);se=s(x,"a single Tensor with "),Q=a(x,"CODE",{});var ye=i(Q);ie=s(ye,"input_ids"),ye.forEach(t),re=s(x," only and nothing else: "),O=a(x,"CODE",{});var be=i(O);he=s(be,"model(inputs_ids)"),be.forEach(t),x.forEach(t),le=d(D),q=a(D,"LI",{});var Y=i(q);ue=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Y,"CODE",{});var Be=i(R);G=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),me=s(Y," or "),I=a(Y,"CODE",{});var ke=i(I);fe=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Y.forEach(t),ge=d(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(ve,"CODE",{});var Fe=i(W);Z=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),ve.forEach(t),D.forEach(t)},m(c,k){u(c,p,k),e(p,F),u(c,m,k),u(c,g,k),e(g,T),e(T,v),e(g,_),e(g,E),e(E,de),u(c,K,k),u(c,M,k),e(M,X),e(M,S),e(S,ee),e(M,ce),e(M,L),e(L,pe),e(M,ae),u(c,U,k),u(c,A,k),e(A,te),u(c,J,k),u(c,z,k),e(z,j),e(j,se),e(j,Q),e(Q,ie),e(j,re),e(j,O),e(O,he),e(z,le),e(z,q),e(q,ue),e(q,R),e(R,G),e(q,me),e(q,I),e(I,fe),e(z,ge),e(z,P),e(P,_e),e(P,W),e(W,Z)},d(c){c&&t(p),c&&t(m),c&&t(g),c&&t(K),c&&t(M),c&&t(U),c&&t(A),c&&t(J),c&&t(z)}}}function v_(H){let p,F,m,g,T;return{c(){p=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var E=i(m);g=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){u(v,p,_),e(p,F),e(p,m),e(m,g),e(p,T)},d(v){v&&t(p)}}}function T_(H){let p,F,m,g,T,v,_,E,de,K,M,X,S,ee,ce,L,pe,ae,U,A,te,J,z,j,se,Q,ie,re,O,he,le,q,ue,R,G,me,I,fe,ge,P,_e,W,Z;return{c(){p=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=r("ul"),T=r("li"),v=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),M=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),L=r("code"),pe=n("model(inputs)"),ae=n("."),U=l(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),J=l(),z=r("ul"),j=r("li"),se=n("a single Tensor with "),Q=r("code"),ie=n("input_ids"),re=n(" only and nothing else: "),O=r("code"),he=n("model(inputs_ids)"),le=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),G=n("model([input_ids, attention_mask])"),me=n(" or "),I=r("code"),fe=n("model([input_ids, attention_mask, token_type_ids])"),ge=l(),P=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){p=a(c,"P",{});var k=i(p);F=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),m=d(c),g=a(c,"UL",{});var V=i(g);T=a(V,"LI",{});var $e=i(T);v=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),E=a(V,"LI",{});var Ce=i(E);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=d(c),M=a(c,"P",{});var N=i(M);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var we=i(S);ee=s(we,"tf.keras.Model.fit"),we.forEach(t),ce=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),L=a(N,"CODE",{});var oe=i(L);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),U=d(c),A=a(c,"P",{});var Te=i(A);te=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Te.forEach(t),J=d(c),z=a(c,"UL",{});var D=i(z);j=a(D,"LI",{});var x=i(j);se=s(x,"a single Tensor with "),Q=a(x,"CODE",{});var ye=i(Q);ie=s(ye,"input_ids"),ye.forEach(t),re=s(x," only and nothing else: "),O=a(x,"CODE",{});var be=i(O);he=s(be,"model(inputs_ids)"),be.forEach(t),x.forEach(t),le=d(D),q=a(D,"LI",{});var Y=i(q);ue=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Y,"CODE",{});var Be=i(R);G=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),me=s(Y," or "),I=a(Y,"CODE",{});var ke=i(I);fe=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Y.forEach(t),ge=d(D),P=a(D,"LI",{});var ve=i(P);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(ve,"CODE",{});var Fe=i(W);Z=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),ve.forEach(t),D.forEach(t)},m(c,k){u(c,p,k),e(p,F),u(c,m,k),u(c,g,k),e(g,T),e(T,v),e(g,_),e(g,E),e(E,de),u(c,K,k),u(c,M,k),e(M,X),e(M,S),e(S,ee),e(M,ce),e(M,L),e(L,pe),e(M,ae),u(c,U,k),u(c,A,k),e(A,te),u(c,J,k),u(c,z,k),e(z,j),e(j,se),e(j,Q),e(Q,ie),e(j,re),e(j,O),e(O,he),e(z,le),e(z,q),e(q,ue),e(q,R),e(R,G),e(q,me),e(q,I),e(I,fe),e(z,ge),e(z,P),e(P,_e),e(P,W),e(W,Z)},d(c){c&&t(p),c&&t(m),c&&t(g),c&&t(K),c&&t(M),c&&t(U),c&&t(A),c&&t(J),c&&t(z)}}}function k_(H){let p,F,m,g,T;return{c(){p=r("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r("code"),g=n("Module"),T=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a(_,"CODE",{});var E=i(m);g=s(E,"Module"),E.forEach(t),T=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(v,_){u(v,p,_),e(p,F),e(p,m),e(m,g),e(p,T)},d(v){v&&t(p)}}}function b_(H){let p,F,m,g,T,v,_,E,de,K,M,X,S,ee,ce,L,pe,ae,U,A,te,J,z,j,se,Q,ie,re,O,he,le,q,ue,R,G,me,I,fe,ge,P,_e,W,Z,c,k,V,$e,Ce,N,we,oe,Te,D,x,ye,be,Y,Be,ke,ve,Fe,Ns,wl,$l,Ds,yl,Bl,Fl,zr,El,Ml,Yo,pi,Bt,oo,qr,Uo,zl,jr,ql,hi,ze,Vo,jl,ct,Pl,Is,xl,Al,Ss,Nl,Dl,Ls,Il,Sl,Ll,ut,Ko,Ol,Pr,Rl,Wl,Jo,Os,Hl,xr,Ql,Yl,Rs,Ul,Ar,Vl,Kl,no,Go,Jl,Zo,Gl,Nr,Zl,Xl,ed,ot,Xo,td,Dr,od,nd,en,sd,Ft,rd,Ir,ad,id,Sr,ld,dd,cd,Ws,tn,ui,Et,so,Lr,on,pd,Or,hd,mi,Ge,nn,ud,sn,md,Rr,fd,gd,_d,ro,Hs,vd,Td,Qs,kd,bd,Cd,rn,wd,Ys,$d,yd,fi,Mt,ao,Wr,an,Bd,Hr,Fd,gi,pt,ln,Ed,dn,Md,cn,zd,qd,jd,Se,pn,Pd,zt,xd,Us,Ad,Nd,Qr,Dd,Id,Sd,io,Ld,Yr,Od,Rd,hn,_i,qt,lo,Ur,un,Wd,Vr,Hd,vi,ht,mn,Qd,jt,Yd,Kr,Ud,Vd,fn,Kd,Jd,Gd,Le,gn,Zd,Pt,Xd,Vs,ec,tc,Jr,oc,nc,sc,co,rc,Gr,ac,ic,_n,Ti,xt,po,Zr,vn,lc,Xr,dc,ki,Ze,Tn,cc,ea,pc,hc,kn,uc,bn,mc,fc,gc,Ee,Cn,_c,At,vc,Ks,Tc,kc,ta,bc,Cc,wc,ho,$c,oa,yc,Bc,wn,Fc,na,Ec,Mc,$n,bi,Nt,uo,sa,yn,zc,ra,qc,Ci,Xe,Bn,jc,aa,Pc,xc,Fn,Ac,En,Nc,Dc,Ic,Oe,Mn,Sc,Dt,Lc,Js,Oc,Rc,ia,Wc,Hc,Qc,mo,Yc,la,Uc,Vc,zn,wi,It,fo,da,qn,Kc,ca,Jc,$i,et,jn,Gc,pa,Zc,Xc,Pn,ep,xn,tp,op,np,Re,An,sp,St,rp,Gs,ap,ip,ha,lp,dp,cp,go,pp,ua,hp,up,Nn,yi,Lt,_o,ma,Dn,mp,fa,fp,Bi,tt,In,gp,Ot,_p,ga,vp,Tp,_a,kp,bp,Cp,Sn,wp,Ln,$p,yp,Bp,We,On,Fp,Rt,Ep,Zs,Mp,zp,va,qp,jp,Pp,vo,xp,Ta,Ap,Np,Rn,Fi,Wt,To,ka,Wn,Dp,ba,Ip,Ei,qe,Hn,Sp,Ca,Lp,Op,Qn,Rp,Xs,Wp,Hp,Qp,Yn,Yp,Un,Up,Vp,Kp,ko,Jp,He,Vn,Gp,Ht,Zp,er,Xp,eh,wa,th,oh,nh,bo,sh,$a,rh,ah,Kn,Mi,Qt,Co,ya,Jn,ih,Ba,lh,zi,je,Gn,dh,Zn,ch,Fa,ph,hh,uh,Xn,mh,tr,fh,gh,_h,es,vh,ts,Th,kh,bh,wo,Ch,Qe,os,wh,Yt,$h,or,yh,Bh,Ea,Fh,Eh,Mh,$o,zh,Ma,qh,jh,ns,qi,Ut,yo,za,ss,Ph,qa,xh,ji,Pe,rs,Ah,ja,Nh,Dh,as,Ih,nr,Sh,Lh,Oh,is,Rh,ls,Wh,Hh,Qh,Bo,Yh,Ye,ds,Uh,Vt,Vh,sr,Kh,Jh,Pa,Gh,Zh,Xh,Fo,eu,xa,tu,ou,cs,Pi,Kt,Eo,Aa,ps,nu,Na,su,xi,xe,hs,ru,Da,au,iu,us,lu,rr,du,cu,pu,ms,hu,fs,uu,mu,fu,Mo,gu,Ue,gs,_u,Jt,vu,ar,Tu,ku,Ia,bu,Cu,wu,zo,$u,Sa,yu,Bu,_s,Ai,Gt,qo,La,vs,Fu,Oa,Eu,Ni,Ae,Ts,Mu,Ra,zu,qu,ks,ju,ir,Pu,xu,Au,bs,Nu,Cs,Du,Iu,Su,jo,Lu,Ve,ws,Ou,Zt,Ru,lr,Wu,Hu,Wa,Qu,Yu,Uu,Po,Vu,Ha,Ku,Ju,$s,Di,Xt,xo,Qa,ys,Gu,Ya,Zu,Ii,Ne,Bs,Xu,eo,em,Ua,tm,om,Va,nm,sm,rm,Fs,am,dr,im,lm,dm,Es,cm,Ms,pm,hm,um,Ao,mm,Ke,zs,fm,to,gm,cr,_m,vm,Ka,Tm,km,bm,No,Cm,Ja,wm,$m,qs,Si;return v=new De({}),ee=new De({}),V=new De({}),Te=new ne({props:{name:"class transformers.ConvBertConfig",anchor:"transformers.ConvBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"is_encoder_decoder",val:" = False"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"embedding_size",val:" = 768"},{name:"head_ratio",val:" = 2"},{name:"conv_kernel_size",val:" = 9"},{name:"num_groups",val:" = 1"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/configuration_convbert.py#L31",parametersDescription:[{anchor:"transformers.ConvBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ConvBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel">ConvBertModel</a> or <a href="/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertModel">TFConvBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.ConvBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ConvBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ConvBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ConvBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ConvBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ConvBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ConvBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ConvBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.ConvBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel">ConvBertModel</a> or <a href="/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertModel">TFConvBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.ConvBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.ConvBertConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.ConvBertConfig.head_ratio",description:`<strong>head_ratio</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
Ratio gamma to reduce the number of attention heads.`,name:"head_ratio"},{anchor:"transformers.ConvBertConfig.num_groups",description:`<strong>num_groups</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The number of groups for grouped linear layers for ConvBert model`,name:"num_groups"},{anchor:"transformers.ConvBertConfig.conv_kernel_size",description:`<strong>conv_kernel_size</strong> (<code>int</code>, <em>optional</em>, defaults to 9) &#x2014;
The size of the convolutional kernel.`,name:"conv_kernel_size"},{anchor:"transformers.ConvBertConfig.classifier_dropout",description:`<strong>classifier_dropout</strong> (<code>float</code>, <em>optional</em>) &#x2014;
The dropout ratio for the classification head.`,name:"classifier_dropout"}]}}),Yo=new Ie({props:{code:`from transformers import ConvBertModel, ConvBertConfig

# Initializing a ConvBERT convbert-base-uncased style configuration
configuration = ConvBertConfig()
# Initializing a model from the convbert-base-uncased style configuration
model = ConvBertModel(configuration)
# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertModel, ConvBertConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ConvBERT convbert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ConvBertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the convbert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Uo=new De({}),Vo=new ne({props:{name:"class transformers.ConvBertTokenizer",anchor:"transformers.ConvBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/tokenization_convbert.py#L46"}}),Ko=new ne({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L248",parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Go=new ne({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L273",parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xo=new ne({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L301",parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),en=new Ie({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),tn=new ne({props:{name:"save_vocabulary",anchor:"transformers.BertTokenizer.save_vocabulary",parameters:[{name:"save_directory",val:": str"},{name:"filename_prefix",val:": typing.Optional[str] = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/bert/tokenization_bert.py#L330"}}),on=new De({}),nn=new ne({props:{name:"class transformers.ConvBertTokenizerFast",anchor:"transformers.ConvBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/tokenization_convbert_fast.py#L47"}}),an=new De({}),ln=new ne({props:{name:"class transformers.ConvBertModel",anchor:"transformers.ConvBertModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L766",parametersDescription:[{anchor:"transformers.ConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),pn=new ne({props:{name:"forward",anchor:"transformers.ConvBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L793",parametersDescription:[{anchor:"transformers.ConvBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
<li>
<p><strong>cross_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> and <code>config.add_cross_attention=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>.</p>
<p>Attentions weights of the decoder\u2019s cross-attention layer, after the attention softmax, used to compute the
weighted average in the cross-attention heads.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>transformers.modeling_outputs.BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new Me({props:{$$slots:{default:[n_]},$$scope:{ctx:H}}}),hn=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertModel
import torch

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertModel.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertModel.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),un=new De({}),mn=new ne({props:{name:"class transformers.ConvBertForMaskedLM",anchor:"transformers.ConvBertForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L880",parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),gn=new ne({props:{name:"forward",anchor:"transformers.ConvBertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L897",parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
`}}),co=new Me({props:{$$slots:{default:[s_]},$$scope:{ctx:H}}}),_n=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertForMaskedLM
import torch

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForMaskedLM.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),vn=new De({}),Tn=new ne({props:{name:"class transformers.ConvBertForSequenceClassification",anchor:"transformers.ConvBertForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L990",parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Cn=new ne({props:{name:"forward",anchor:"transformers.ConvBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1001",parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
`}}),ho=new Me({props:{$$slots:{default:[r_]},$$scope:{ctx:H}}}),wn=new Ie({props:{code:`import torch
from transformers import ConvBertTokenizer, ConvBertForSequenceClassification

torch.manual_seed(0)
tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForSequenceClassification.from_pretrained("YituTech/conv-bert-base", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),$n=new Ie({props:{code:`import torch
from transformers import ConvBertTokenizer, ConvBertForSequenceClassification

torch.manual_seed(0)
tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForSequenceClassification.from_pretrained("YituTech/conv-bert-base", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),yn=new De({}),Bn=new ne({props:{name:"class transformers.ConvBertForMultipleChoice",anchor:"transformers.ConvBertForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1086",parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Mn=new ne({props:{name:"forward",anchor:"transformers.ConvBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1097",parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>transformers.modeling_outputs.MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
`}}),mo=new Me({props:{$$slots:{default:[a_]},$$scope:{ctx:H}}}),zn=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertForMultipleChoice
import torch

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForMultipleChoice.from_pretrained("YituTech/conv-bert-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),qn=new De({}),jn=new ne({props:{name:"class transformers.ConvBertForTokenClassification",anchor:"transformers.ConvBertForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1180",parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),An=new ne({props:{name:"forward",anchor:"transformers.ConvBertForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1195",parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
`}}),go=new Me({props:{$$slots:{default:[i_]},$$scope:{ctx:H}}}),Nn=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertForTokenClassification
import torch

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForTokenClassification.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Dn=new De({}),In=new ne({props:{name:"class transformers.ConvBertForQuestionAnswering",anchor:"transformers.ConvBertForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1262",parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),On=new ne({props:{name:"forward",anchor:"transformers.ConvBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_convbert.py#L1273",parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
`}}),vo=new Me({props:{$$slots:{default:[l_]},$$scope:{ctx:H}}}),Rn=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertForQuestionAnswering
import torch

torch.manual_seed(0)
tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = ConvBertForQuestionAnswering.from_pretrained("YituTech/conv-bert-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
round(loss.item(), 2)


start_scores = outputs.start_logits
list(start_scores.shape)


end_scores = outputs.end_logits
list(end_scores.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">round</span>(loss.item(), <span class="hljs-number">2</span>)


<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(start_scores.shape)


<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(end_scores.shape)
`}}),Wn=new De({}),Hn=new ne({props:{name:"class transformers.TFConvBertModel",anchor:"transformers.TFConvBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L747",parametersDescription:[{anchor:"transformers.TFConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ko=new Me({props:{$$slots:{default:[d_]},$$scope:{ctx:H}}}),Vn=new ne({props:{name:"call",anchor:"transformers.TFConvBertModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L753",parametersDescription:[{anchor:"transformers.TFConvBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertModel.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertModel.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
`}}),bo=new Me({props:{$$slots:{default:[c_]},$$scope:{ctx:H}}}),Kn=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertModel
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertModel.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertModel.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Jn=new De({}),Gn=new ne({props:{name:"class transformers.TFConvBertForMaskedLM",anchor:"transformers.TFConvBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L864",parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),wo=new Me({props:{$$slots:{default:[p_]},$$scope:{ctx:H}}}),os=new ne({props:{name:"call",anchor:"transformers.TFConvBertForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L885",parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
`}}),$o=new Me({props:{$$slots:{default:[h_]},$$scope:{ctx:H}}}),ns=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForMaskedLM
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForMaskedLM.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForMaskedLM.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ss=new De({}),rs=new ne({props:{name:"class transformers.TFConvBertForSequenceClassification",anchor:"transformers.TFConvBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1002",parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Bo=new Me({props:{$$slots:{default:[u_]},$$scope:{ctx:H}}}),ds=new ne({props:{name:"call",anchor:"transformers.TFConvBertForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1009",parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
`}}),Fo=new Me({props:{$$slots:{default:[m_]},$$scope:{ctx:H}}}),cs=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForSequenceClassification
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForSequenceClassification.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ps=new De({}),hs=new ne({props:{name:"class transformers.TFConvBertForMultipleChoice",anchor:"transformers.TFConvBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1094",parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Mo=new Me({props:{$$slots:{default:[f_]},$$scope:{ctx:H}}}),gs=new ne({props:{name:"call",anchor:"transformers.TFConvBertForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1116",parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
`}}),zo=new Me({props:{$$slots:{default:[g_]},$$scope:{ctx:H}}}),_s=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForMultipleChoice
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForMultipleChoice.from_pretrained("YituTech/conv-bert-base")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),vs=new De({}),Ts=new ne({props:{name:"class transformers.TFConvBertForTokenClassification",anchor:"transformers.TFConvBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1241",parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jo=new Me({props:{$$slots:{default:[__]},$$scope:{ctx:H}}}),ws=new ne({props:{name:"call",anchor:"transformers.TFConvBertForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1255",parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
`}}),Po=new Me({props:{$$slots:{default:[v_]},$$scope:{ctx:H}}}),$s=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForTokenClassification
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForTokenClassification.from_pretrained("YituTech/conv-bert-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForTokenClassification.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ys=new De({}),Bs=new ne({props:{name:"class transformers.TFConvBertForQuestionAnswering",anchor:"transformers.TFConvBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1339",parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/main/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ao=new Me({props:{$$slots:{default:[T_]},$$scope:{ctx:H}}}),zs=new ne({props:{name:"call",anchor:"transformers.TFConvBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/main/src/transformers/models/convbert/modeling_tf_convbert.py#L1349",parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See <a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/main/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/main/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/main/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
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
`}}),No=new Me({props:{$$slots:{default:[k_]},$$scope:{ctx:H}}}),qs=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForQuestionAnswering
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained("YituTech/conv-bert-base")
model = TFConvBertForQuestionAnswering.from_pretrained("YituTech/conv-bert-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;YituTech/conv-bert-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),{c(){p=r("meta"),F=l(),m=r("h1"),g=r("a"),T=r("span"),b(v.$$.fragment),_=l(),E=r("span"),de=n("ConvBERT"),K=l(),M=r("h2"),X=r("a"),S=r("span"),b(ee.$$.fragment),ce=l(),L=r("span"),pe=n("Overview"),ae=l(),U=r("p"),A=n("The ConvBERT model was proposed in "),te=r("a"),J=n("ConvBERT: Improving BERT with Span-based Dynamic Convolution"),z=n(` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),j=l(),se=r("p"),Q=n("The abstract from the paper is the following:"),ie=l(),re=r("p"),O=r("em"),he=n(`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),le=l(),q=r("p"),ue=n("ConvBERT training tips are similar to those of BERT."),R=l(),G=r("p"),me=n("This model was contributed by "),I=r("a"),fe=n("abhishek"),ge=n(`. The original implementation can be found
here: `),P=r("a"),_e=n("https://github.com/yitu-opensource/ConvBert"),W=l(),Z=r("h2"),c=r("a"),k=r("span"),b(V.$$.fragment),$e=l(),Ce=r("span"),N=n("ConvBertConfig"),we=l(),oe=r("div"),b(Te.$$.fragment),D=l(),x=r("p"),ye=n("This is the configuration class to store the configuration of a "),be=r("a"),Y=n("ConvBertModel"),Be=n(`. It is used to instantiate an
ConvBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the ConvBERT
`),ke=r("a"),ve=n("conv-bert-base"),Fe=n(` architecture. Configuration objects inherit from
`),Ns=r("a"),wl=n("PretrainedConfig"),$l=n(" and can be used to control the model outputs. Read the documentation from "),Ds=r("a"),yl=n("PretrainedConfig"),Bl=n(`
for more information.`),Fl=l(),zr=r("p"),El=n("Example:"),Ml=l(),b(Yo.$$.fragment),pi=l(),Bt=r("h2"),oo=r("a"),qr=r("span"),b(Uo.$$.fragment),zl=l(),jr=r("span"),ql=n("ConvBertTokenizer"),hi=l(),ze=r("div"),b(Vo.$$.fragment),jl=l(),ct=r("p"),Pl=n("Construct a ConvBERT tokenizer. "),Is=r("a"),xl=n("ConvBertTokenizer"),Al=n(" is identical to "),Ss=r("a"),Nl=n("BertTokenizer"),Dl=n(` and runs end-to-end
tokenization: punctuation splitting and wordpiece. Refer to superclass `),Ls=r("a"),Il=n("BertTokenizer"),Sl=n(` for usage examples and
documentation concerning parameters.`),Ll=l(),ut=r("div"),b(Ko.$$.fragment),Ol=l(),Pr=r("p"),Rl=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Wl=l(),Jo=r("ul"),Os=r("li"),Hl=n("single sequence: "),xr=r("code"),Ql=n("[CLS] X [SEP]"),Yl=l(),Rs=r("li"),Ul=n("pair of sequences: "),Ar=r("code"),Vl=n("[CLS] A [SEP] B [SEP]"),Kl=l(),no=r("div"),b(Go.$$.fragment),Jl=l(),Zo=r("p"),Gl=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Nr=r("code"),Zl=n("prepare_for_model"),Xl=n(" method."),ed=l(),ot=r("div"),b(Xo.$$.fragment),td=l(),Dr=r("p"),od=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),nd=l(),b(en.$$.fragment),sd=l(),Ft=r("p"),rd=n("If "),Ir=r("code"),ad=n("token_ids_1"),id=n(" is "),Sr=r("code"),ld=n("None"),dd=n(", this method only returns the first portion of the mask (0s)."),cd=l(),Ws=r("div"),b(tn.$$.fragment),ui=l(),Et=r("h2"),so=r("a"),Lr=r("span"),b(on.$$.fragment),pd=l(),Or=r("span"),hd=n("ConvBertTokenizerFast"),mi=l(),Ge=r("div"),b(nn.$$.fragment),ud=l(),sn=r("p"),md=n("Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),Rr=r("em"),fd=n("tokenizers"),gd=n(" library)."),_d=l(),ro=r("p"),Hs=r("a"),vd=n("ConvBertTokenizerFast"),Td=n(" is identical to "),Qs=r("a"),kd=n("BertTokenizerFast"),bd=n(` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),Cd=l(),rn=r("p"),wd=n("Refer to superclass "),Ys=r("a"),$d=n("BertTokenizerFast"),yd=n(" for usage examples and documentation concerning parameters."),fi=l(),Mt=r("h2"),ao=r("a"),Wr=r("span"),b(an.$$.fragment),Bd=l(),Hr=r("span"),Fd=n("ConvBertModel"),gi=l(),pt=r("div"),b(ln.$$.fragment),Ed=l(),dn=r("p"),Md=n(`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),cn=r("a"),zd=n("torch.nn.Module"),qd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),jd=l(),Se=r("div"),b(pn.$$.fragment),Pd=l(),zt=r("p"),xd=n("The "),Us=r("a"),Ad=n("ConvBertModel"),Nd=n(" forward method, overrides the "),Qr=r("code"),Dd=n("__call__"),Id=n(" special method."),Sd=l(),b(io.$$.fragment),Ld=l(),Yr=r("p"),Od=n("Example:"),Rd=l(),b(hn.$$.fragment),_i=l(),qt=r("h2"),lo=r("a"),Ur=r("span"),b(un.$$.fragment),Wd=l(),Vr=r("span"),Hd=n("ConvBertForMaskedLM"),vi=l(),ht=r("div"),b(mn.$$.fragment),Qd=l(),jt=r("p"),Yd=n("ConvBERT Model with a "),Kr=r("code"),Ud=n("language modeling"),Vd=n(` head on top.
This model is a PyTorch `),fn=r("a"),Kd=n("torch.nn.Module"),Jd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gd=l(),Le=r("div"),b(gn.$$.fragment),Zd=l(),Pt=r("p"),Xd=n("The "),Vs=r("a"),ec=n("ConvBertForMaskedLM"),tc=n(" forward method, overrides the "),Jr=r("code"),oc=n("__call__"),nc=n(" special method."),sc=l(),b(co.$$.fragment),rc=l(),Gr=r("p"),ac=n("Example:"),ic=l(),b(_n.$$.fragment),Ti=l(),xt=r("h2"),po=r("a"),Zr=r("span"),b(vn.$$.fragment),lc=l(),Xr=r("span"),dc=n("ConvBertForSequenceClassification"),ki=l(),Ze=r("div"),b(Tn.$$.fragment),cc=l(),ea=r("p"),pc=n(`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),hc=l(),kn=r("p"),uc=n("This model is a PyTorch "),bn=r("a"),mc=n("torch.nn.Module"),fc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gc=l(),Ee=r("div"),b(Cn.$$.fragment),_c=l(),At=r("p"),vc=n("The "),Ks=r("a"),Tc=n("ConvBertForSequenceClassification"),kc=n(" forward method, overrides the "),ta=r("code"),bc=n("__call__"),Cc=n(" special method."),wc=l(),b(ho.$$.fragment),$c=l(),oa=r("p"),yc=n("Example of single-label classification:"),Bc=l(),b(wn.$$.fragment),Fc=l(),na=r("p"),Ec=n("Example of multi-label classification:"),Mc=l(),b($n.$$.fragment),bi=l(),Nt=r("h2"),uo=r("a"),sa=r("span"),b(yn.$$.fragment),zc=l(),ra=r("span"),qc=n("ConvBertForMultipleChoice"),Ci=l(),Xe=r("div"),b(Bn.$$.fragment),jc=l(),aa=r("p"),Pc=n(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),xc=l(),Fn=r("p"),Ac=n("This model is a PyTorch "),En=r("a"),Nc=n("torch.nn.Module"),Dc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ic=l(),Oe=r("div"),b(Mn.$$.fragment),Sc=l(),Dt=r("p"),Lc=n("The "),Js=r("a"),Oc=n("ConvBertForMultipleChoice"),Rc=n(" forward method, overrides the "),ia=r("code"),Wc=n("__call__"),Hc=n(" special method."),Qc=l(),b(mo.$$.fragment),Yc=l(),la=r("p"),Uc=n("Example:"),Vc=l(),b(zn.$$.fragment),wi=l(),It=r("h2"),fo=r("a"),da=r("span"),b(qn.$$.fragment),Kc=l(),ca=r("span"),Jc=n("ConvBertForTokenClassification"),$i=l(),et=r("div"),b(jn.$$.fragment),Gc=l(),pa=r("p"),Zc=n(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Xc=l(),Pn=r("p"),ep=n("This model is a PyTorch "),xn=r("a"),tp=n("torch.nn.Module"),op=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),np=l(),Re=r("div"),b(An.$$.fragment),sp=l(),St=r("p"),rp=n("The "),Gs=r("a"),ap=n("ConvBertForTokenClassification"),ip=n(" forward method, overrides the "),ha=r("code"),lp=n("__call__"),dp=n(" special method."),cp=l(),b(go.$$.fragment),pp=l(),ua=r("p"),hp=n("Example:"),up=l(),b(Nn.$$.fragment),yi=l(),Lt=r("h2"),_o=r("a"),ma=r("span"),b(Dn.$$.fragment),mp=l(),fa=r("span"),fp=n("ConvBertForQuestionAnswering"),Bi=l(),tt=r("div"),b(In.$$.fragment),gp=l(),Ot=r("p"),_p=n(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ga=r("code"),vp=n("span start logits"),Tp=n(" and "),_a=r("code"),kp=n("span end logits"),bp=n(")."),Cp=l(),Sn=r("p"),wp=n("This model is a PyTorch "),Ln=r("a"),$p=n("torch.nn.Module"),yp=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Bp=l(),We=r("div"),b(On.$$.fragment),Fp=l(),Rt=r("p"),Ep=n("The "),Zs=r("a"),Mp=n("ConvBertForQuestionAnswering"),zp=n(" forward method, overrides the "),va=r("code"),qp=n("__call__"),jp=n(" special method."),Pp=l(),b(vo.$$.fragment),xp=l(),Ta=r("p"),Ap=n("Example:"),Np=l(),b(Rn.$$.fragment),Fi=l(),Wt=r("h2"),To=r("a"),ka=r("span"),b(Wn.$$.fragment),Dp=l(),ba=r("span"),Ip=n("TFConvBertModel"),Ei=l(),qe=r("div"),b(Hn.$$.fragment),Sp=l(),Ca=r("p"),Lp=n("The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),Op=l(),Qn=r("p"),Rp=n("This model inherits from "),Xs=r("a"),Wp=n("TFPreTrainedModel"),Hp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Qp=l(),Yn=r("p"),Yp=n("This model is also a "),Un=r("a"),Up=n("tf.keras.Model"),Vp=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Kp=l(),b(ko.$$.fragment),Jp=l(),He=r("div"),b(Vn.$$.fragment),Gp=l(),Ht=r("p"),Zp=n("The "),er=r("a"),Xp=n("TFConvBertModel"),eh=n(" forward method, overrides the "),wa=r("code"),th=n("__call__"),oh=n(" special method."),nh=l(),b(bo.$$.fragment),sh=l(),$a=r("p"),rh=n("Example:"),ah=l(),b(Kn.$$.fragment),Mi=l(),Qt=r("h2"),Co=r("a"),ya=r("span"),b(Jn.$$.fragment),ih=l(),Ba=r("span"),lh=n("TFConvBertForMaskedLM"),zi=l(),je=r("div"),b(Gn.$$.fragment),dh=l(),Zn=r("p"),ch=n("ConvBERT Model with a "),Fa=r("code"),ph=n("language modeling"),hh=n(" head on top."),uh=l(),Xn=r("p"),mh=n("This model inherits from "),tr=r("a"),fh=n("TFPreTrainedModel"),gh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),_h=l(),es=r("p"),vh=n("This model is also a "),ts=r("a"),Th=n("tf.keras.Model"),kh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bh=l(),b(wo.$$.fragment),Ch=l(),Qe=r("div"),b(os.$$.fragment),wh=l(),Yt=r("p"),$h=n("The "),or=r("a"),yh=n("TFConvBertForMaskedLM"),Bh=n(" forward method, overrides the "),Ea=r("code"),Fh=n("__call__"),Eh=n(" special method."),Mh=l(),b($o.$$.fragment),zh=l(),Ma=r("p"),qh=n("Example:"),jh=l(),b(ns.$$.fragment),qi=l(),Ut=r("h2"),yo=r("a"),za=r("span"),b(ss.$$.fragment),Ph=l(),qa=r("span"),xh=n("TFConvBertForSequenceClassification"),ji=l(),Pe=r("div"),b(rs.$$.fragment),Ah=l(),ja=r("p"),Nh=n("ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Dh=l(),as=r("p"),Ih=n("This model inherits from "),nr=r("a"),Sh=n("TFPreTrainedModel"),Lh=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Oh=l(),is=r("p"),Rh=n("This model is also a "),ls=r("a"),Wh=n("tf.keras.Model"),Hh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Qh=l(),b(Bo.$$.fragment),Yh=l(),Ye=r("div"),b(ds.$$.fragment),Uh=l(),Vt=r("p"),Vh=n("The "),sr=r("a"),Kh=n("TFConvBertForSequenceClassification"),Jh=n(" forward method, overrides the "),Pa=r("code"),Gh=n("__call__"),Zh=n(" special method."),Xh=l(),b(Fo.$$.fragment),eu=l(),xa=r("p"),tu=n("Example:"),ou=l(),b(cs.$$.fragment),Pi=l(),Kt=r("h2"),Eo=r("a"),Aa=r("span"),b(ps.$$.fragment),nu=l(),Na=r("span"),su=n("TFConvBertForMultipleChoice"),xi=l(),xe=r("div"),b(hs.$$.fragment),ru=l(),Da=r("p"),au=n(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),iu=l(),us=r("p"),lu=n("This model inherits from "),rr=r("a"),du=n("TFPreTrainedModel"),cu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pu=l(),ms=r("p"),hu=n("This model is also a "),fs=r("a"),uu=n("tf.keras.Model"),mu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fu=l(),b(Mo.$$.fragment),gu=l(),Ue=r("div"),b(gs.$$.fragment),_u=l(),Jt=r("p"),vu=n("The "),ar=r("a"),Tu=n("TFConvBertForMultipleChoice"),ku=n(" forward method, overrides the "),Ia=r("code"),bu=n("__call__"),Cu=n(" special method."),wu=l(),b(zo.$$.fragment),$u=l(),Sa=r("p"),yu=n("Example:"),Bu=l(),b(_s.$$.fragment),Ai=l(),Gt=r("h2"),qo=r("a"),La=r("span"),b(vs.$$.fragment),Fu=l(),Oa=r("span"),Eu=n("TFConvBertForTokenClassification"),Ni=l(),Ae=r("div"),b(Ts.$$.fragment),Mu=l(),Ra=r("p"),zu=n(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),qu=l(),ks=r("p"),ju=n("This model inherits from "),ir=r("a"),Pu=n("TFPreTrainedModel"),xu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Au=l(),bs=r("p"),Nu=n("This model is also a "),Cs=r("a"),Du=n("tf.keras.Model"),Iu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Su=l(),b(jo.$$.fragment),Lu=l(),Ve=r("div"),b(ws.$$.fragment),Ou=l(),Zt=r("p"),Ru=n("The "),lr=r("a"),Wu=n("TFConvBertForTokenClassification"),Hu=n(" forward method, overrides the "),Wa=r("code"),Qu=n("__call__"),Yu=n(" special method."),Uu=l(),b(Po.$$.fragment),Vu=l(),Ha=r("p"),Ku=n("Example:"),Ju=l(),b($s.$$.fragment),Di=l(),Xt=r("h2"),xo=r("a"),Qa=r("span"),b(ys.$$.fragment),Gu=l(),Ya=r("span"),Zu=n("TFConvBertForQuestionAnswering"),Ii=l(),Ne=r("div"),b(Bs.$$.fragment),Xu=l(),eo=r("p"),em=n(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ua=r("code"),tm=n("span start logits"),om=n(" and "),Va=r("code"),nm=n("span end logits"),sm=n(")."),rm=l(),Fs=r("p"),am=n("This model inherits from "),dr=r("a"),im=n("TFPreTrainedModel"),lm=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dm=l(),Es=r("p"),cm=n("This model is also a "),Ms=r("a"),pm=n("tf.keras.Model"),hm=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),um=l(),b(Ao.$$.fragment),mm=l(),Ke=r("div"),b(zs.$$.fragment),fm=l(),to=r("p"),gm=n("The "),cr=r("a"),_m=n("TFConvBertForQuestionAnswering"),vm=n(" forward method, overrides the "),Ka=r("code"),Tm=n("__call__"),km=n(" special method."),bm=l(),b(No.$$.fragment),Cm=l(),Ja=r("p"),wm=n("Example:"),$m=l(),b(qs.$$.fragment),this.h()},l(o){const f=o_('[data-svelte="svelte-1phssyn"]',document.head);p=a(f,"META",{name:!0,content:!0}),f.forEach(t),F=d(o),m=a(o,"H1",{class:!0});var js=i(m);g=a(js,"A",{id:!0,class:!0,href:!0});var Ga=i(g);T=a(Ga,"SPAN",{});var Za=i(T);C(v.$$.fragment,Za),Za.forEach(t),Ga.forEach(t),_=d(js),E=a(js,"SPAN",{});var Xa=i(E);de=s(Xa,"ConvBERT"),Xa.forEach(t),js.forEach(t),K=d(o),M=a(o,"H2",{class:!0});var Ps=i(M);X=a(Ps,"A",{id:!0,class:!0,href:!0});var ei=i(X);S=a(ei,"SPAN",{});var ti=i(S);C(ee.$$.fragment,ti),ti.forEach(t),ei.forEach(t),ce=d(Ps),L=a(Ps,"SPAN",{});var oi=i(L);pe=s(oi,"Overview"),oi.forEach(t),Ps.forEach(t),ae=d(o),U=a(o,"P",{});var xs=i(U);A=s(xs,"The ConvBERT model was proposed in "),te=a(xs,"A",{href:!0,rel:!0});var ni=i(te);J=s(ni,"ConvBERT: Improving BERT with Span-based Dynamic Convolution"),ni.forEach(t),z=s(xs,` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),xs.forEach(t),j=d(o),se=a(o,"P",{});var si=i(se);Q=s(si,"The abstract from the paper is the following:"),si.forEach(t),ie=d(o),re=a(o,"P",{});var ri=i(re);O=a(ri,"EM",{});var ai=i(O);he=s(ai,`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),ai.forEach(t),ri.forEach(t),le=d(o),q=a(o,"P",{});var ii=i(q);ue=s(ii,"ConvBERT training tips are similar to those of BERT."),ii.forEach(t),R=d(o),G=a(o,"P",{});var Do=i(G);me=s(Do,"This model was contributed by "),I=a(Do,"A",{href:!0,rel:!0});var li=i(I);fe=s(li,"abhishek"),li.forEach(t),ge=s(Do,`. The original implementation can be found
here: `),P=a(Do,"A",{href:!0,rel:!0});var di=i(P);_e=s(di,"https://github.com/yitu-opensource/ConvBert"),di.forEach(t),Do.forEach(t),W=d(o),Z=a(o,"H2",{class:!0});var As=i(Z);c=a(As,"A",{id:!0,class:!0,href:!0});var Fm=i(c);k=a(Fm,"SPAN",{});var Em=i(k);C(V.$$.fragment,Em),Em.forEach(t),Fm.forEach(t),$e=d(As),Ce=a(As,"SPAN",{});var Mm=i(Ce);N=s(Mm,"ConvBertConfig"),Mm.forEach(t),As.forEach(t),we=d(o),oe=a(o,"DIV",{class:!0});var Io=i(oe);C(Te.$$.fragment,Io),D=d(Io),x=a(Io,"P",{});var mt=i(x);ye=s(mt,"This is the configuration class to store the configuration of a "),be=a(mt,"A",{href:!0});var zm=i(be);Y=s(zm,"ConvBertModel"),zm.forEach(t),Be=s(mt,`. It is used to instantiate an
ConvBERT model according to the specified arguments, defining the model architecture. Instantiating a configuration
with the defaults will yield a similar configuration to that of the ConvBERT
`),ke=a(mt,"A",{href:!0,rel:!0});var qm=i(ke);ve=s(qm,"conv-bert-base"),qm.forEach(t),Fe=s(mt,` architecture. Configuration objects inherit from
`),Ns=a(mt,"A",{href:!0});var jm=i(Ns);wl=s(jm,"PretrainedConfig"),jm.forEach(t),$l=s(mt," and can be used to control the model outputs. Read the documentation from "),Ds=a(mt,"A",{href:!0});var Pm=i(Ds);yl=s(Pm,"PretrainedConfig"),Pm.forEach(t),Bl=s(mt,`
for more information.`),mt.forEach(t),Fl=d(Io),zr=a(Io,"P",{});var xm=i(zr);El=s(xm,"Example:"),xm.forEach(t),Ml=d(Io),C(Yo.$$.fragment,Io),Io.forEach(t),pi=d(o),Bt=a(o,"H2",{class:!0});var Li=i(Bt);oo=a(Li,"A",{id:!0,class:!0,href:!0});var Am=i(oo);qr=a(Am,"SPAN",{});var Nm=i(qr);C(Uo.$$.fragment,Nm),Nm.forEach(t),Am.forEach(t),zl=d(Li),jr=a(Li,"SPAN",{});var Dm=i(jr);ql=s(Dm,"ConvBertTokenizer"),Dm.forEach(t),Li.forEach(t),hi=d(o),ze=a(o,"DIV",{class:!0});var nt=i(ze);C(Vo.$$.fragment,nt),jl=d(nt),ct=a(nt,"P",{});var So=i(ct);Pl=s(So,"Construct a ConvBERT tokenizer. "),Is=a(So,"A",{href:!0});var Im=i(Is);xl=s(Im,"ConvBertTokenizer"),Im.forEach(t),Al=s(So," is identical to "),Ss=a(So,"A",{href:!0});var Sm=i(Ss);Nl=s(Sm,"BertTokenizer"),Sm.forEach(t),Dl=s(So,` and runs end-to-end
tokenization: punctuation splitting and wordpiece. Refer to superclass `),Ls=a(So,"A",{href:!0});var Lm=i(Ls);Il=s(Lm,"BertTokenizer"),Lm.forEach(t),Sl=s(So,` for usage examples and
documentation concerning parameters.`),So.forEach(t),Ll=d(nt),ut=a(nt,"DIV",{class:!0});var pr=i(ut);C(Ko.$$.fragment,pr),Ol=d(pr),Pr=a(pr,"P",{});var Om=i(Pr);Rl=s(Om,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Om.forEach(t),Wl=d(pr),Jo=a(pr,"UL",{});var Oi=i(Jo);Os=a(Oi,"LI",{});var ym=i(Os);Hl=s(ym,"single sequence: "),xr=a(ym,"CODE",{});var Rm=i(xr);Ql=s(Rm,"[CLS] X [SEP]"),Rm.forEach(t),ym.forEach(t),Yl=d(Oi),Rs=a(Oi,"LI",{});var Bm=i(Rs);Ul=s(Bm,"pair of sequences: "),Ar=a(Bm,"CODE",{});var Wm=i(Ar);Vl=s(Wm,"[CLS] A [SEP] B [SEP]"),Wm.forEach(t),Bm.forEach(t),Oi.forEach(t),pr.forEach(t),Kl=d(nt),no=a(nt,"DIV",{class:!0});var Ri=i(no);C(Go.$$.fragment,Ri),Jl=d(Ri),Zo=a(Ri,"P",{});var Wi=i(Zo);Gl=s(Wi,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Nr=a(Wi,"CODE",{});var Hm=i(Nr);Zl=s(Hm,"prepare_for_model"),Hm.forEach(t),Xl=s(Wi," method."),Wi.forEach(t),Ri.forEach(t),ed=d(nt),ot=a(nt,"DIV",{class:!0});var Lo=i(ot);C(Xo.$$.fragment,Lo),td=d(Lo),Dr=a(Lo,"P",{});var Qm=i(Dr);od=s(Qm,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),Qm.forEach(t),nd=d(Lo),C(en.$$.fragment,Lo),sd=d(Lo),Ft=a(Lo,"P",{});var hr=i(Ft);rd=s(hr,"If "),Ir=a(hr,"CODE",{});var Ym=i(Ir);ad=s(Ym,"token_ids_1"),Ym.forEach(t),id=s(hr," is "),Sr=a(hr,"CODE",{});var Um=i(Sr);ld=s(Um,"None"),Um.forEach(t),dd=s(hr,", this method only returns the first portion of the mask (0s)."),hr.forEach(t),Lo.forEach(t),cd=d(nt),Ws=a(nt,"DIV",{class:!0});var Vm=i(Ws);C(tn.$$.fragment,Vm),Vm.forEach(t),nt.forEach(t),ui=d(o),Et=a(o,"H2",{class:!0});var Hi=i(Et);so=a(Hi,"A",{id:!0,class:!0,href:!0});var Km=i(so);Lr=a(Km,"SPAN",{});var Jm=i(Lr);C(on.$$.fragment,Jm),Jm.forEach(t),Km.forEach(t),pd=d(Hi),Or=a(Hi,"SPAN",{});var Gm=i(Or);hd=s(Gm,"ConvBertTokenizerFast"),Gm.forEach(t),Hi.forEach(t),mi=d(o),Ge=a(o,"DIV",{class:!0});var Oo=i(Ge);C(nn.$$.fragment,Oo),ud=d(Oo),sn=a(Oo,"P",{});var Qi=i(sn);md=s(Qi,"Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),Rr=a(Qi,"EM",{});var Zm=i(Rr);fd=s(Zm,"tokenizers"),Zm.forEach(t),gd=s(Qi," library)."),Qi.forEach(t),_d=d(Oo),ro=a(Oo,"P",{});var ci=i(ro);Hs=a(ci,"A",{href:!0});var Xm=i(Hs);vd=s(Xm,"ConvBertTokenizerFast"),Xm.forEach(t),Td=s(ci," is identical to "),Qs=a(ci,"A",{href:!0});var ef=i(Qs);kd=s(ef,"BertTokenizerFast"),ef.forEach(t),bd=s(ci,` and runs end-to-end tokenization: punctuation
splitting and wordpiece.`),ci.forEach(t),Cd=d(Oo),rn=a(Oo,"P",{});var Yi=i(rn);wd=s(Yi,"Refer to superclass "),Ys=a(Yi,"A",{href:!0});var tf=i(Ys);$d=s(tf,"BertTokenizerFast"),tf.forEach(t),yd=s(Yi," for usage examples and documentation concerning parameters."),Yi.forEach(t),Oo.forEach(t),fi=d(o),Mt=a(o,"H2",{class:!0});var Ui=i(Mt);ao=a(Ui,"A",{id:!0,class:!0,href:!0});var of=i(ao);Wr=a(of,"SPAN",{});var nf=i(Wr);C(an.$$.fragment,nf),nf.forEach(t),of.forEach(t),Bd=d(Ui),Hr=a(Ui,"SPAN",{});var sf=i(Hr);Fd=s(sf,"ConvBertModel"),sf.forEach(t),Ui.forEach(t),gi=d(o),pt=a(o,"DIV",{class:!0});var ur=i(pt);C(ln.$$.fragment,ur),Ed=d(ur),dn=a(ur,"P",{});var Vi=i(dn);Md=s(Vi,`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),cn=a(Vi,"A",{href:!0,rel:!0});var rf=i(cn);zd=s(rf,"torch.nn.Module"),rf.forEach(t),qd=s(Vi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Vi.forEach(t),jd=d(ur),Se=a(ur,"DIV",{class:!0});var ft=i(Se);C(pn.$$.fragment,ft),Pd=d(ft),zt=a(ft,"P",{});var mr=i(zt);xd=s(mr,"The "),Us=a(mr,"A",{href:!0});var af=i(Us);Ad=s(af,"ConvBertModel"),af.forEach(t),Nd=s(mr," forward method, overrides the "),Qr=a(mr,"CODE",{});var lf=i(Qr);Dd=s(lf,"__call__"),lf.forEach(t),Id=s(mr," special method."),mr.forEach(t),Sd=d(ft),C(io.$$.fragment,ft),Ld=d(ft),Yr=a(ft,"P",{});var df=i(Yr);Od=s(df,"Example:"),df.forEach(t),Rd=d(ft),C(hn.$$.fragment,ft),ft.forEach(t),ur.forEach(t),_i=d(o),qt=a(o,"H2",{class:!0});var Ki=i(qt);lo=a(Ki,"A",{id:!0,class:!0,href:!0});var cf=i(lo);Ur=a(cf,"SPAN",{});var pf=i(Ur);C(un.$$.fragment,pf),pf.forEach(t),cf.forEach(t),Wd=d(Ki),Vr=a(Ki,"SPAN",{});var hf=i(Vr);Hd=s(hf,"ConvBertForMaskedLM"),hf.forEach(t),Ki.forEach(t),vi=d(o),ht=a(o,"DIV",{class:!0});var fr=i(ht);C(mn.$$.fragment,fr),Qd=d(fr),jt=a(fr,"P",{});var gr=i(jt);Yd=s(gr,"ConvBERT Model with a "),Kr=a(gr,"CODE",{});var uf=i(Kr);Ud=s(uf,"language modeling"),uf.forEach(t),Vd=s(gr,` head on top.
This model is a PyTorch `),fn=a(gr,"A",{href:!0,rel:!0});var mf=i(fn);Kd=s(mf,"torch.nn.Module"),mf.forEach(t),Jd=s(gr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),gr.forEach(t),Gd=d(fr),Le=a(fr,"DIV",{class:!0});var gt=i(Le);C(gn.$$.fragment,gt),Zd=d(gt),Pt=a(gt,"P",{});var _r=i(Pt);Xd=s(_r,"The "),Vs=a(_r,"A",{href:!0});var ff=i(Vs);ec=s(ff,"ConvBertForMaskedLM"),ff.forEach(t),tc=s(_r," forward method, overrides the "),Jr=a(_r,"CODE",{});var gf=i(Jr);oc=s(gf,"__call__"),gf.forEach(t),nc=s(_r," special method."),_r.forEach(t),sc=d(gt),C(co.$$.fragment,gt),rc=d(gt),Gr=a(gt,"P",{});var _f=i(Gr);ac=s(_f,"Example:"),_f.forEach(t),ic=d(gt),C(_n.$$.fragment,gt),gt.forEach(t),fr.forEach(t),Ti=d(o),xt=a(o,"H2",{class:!0});var Ji=i(xt);po=a(Ji,"A",{id:!0,class:!0,href:!0});var vf=i(po);Zr=a(vf,"SPAN",{});var Tf=i(Zr);C(vn.$$.fragment,Tf),Tf.forEach(t),vf.forEach(t),lc=d(Ji),Xr=a(Ji,"SPAN",{});var kf=i(Xr);dc=s(kf,"ConvBertForSequenceClassification"),kf.forEach(t),Ji.forEach(t),ki=d(o),Ze=a(o,"DIV",{class:!0});var Ro=i(Ze);C(Tn.$$.fragment,Ro),cc=d(Ro),ea=a(Ro,"P",{});var bf=i(ea);pc=s(bf,`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),bf.forEach(t),hc=d(Ro),kn=a(Ro,"P",{});var Gi=i(kn);uc=s(Gi,"This model is a PyTorch "),bn=a(Gi,"A",{href:!0,rel:!0});var Cf=i(bn);mc=s(Cf,"torch.nn.Module"),Cf.forEach(t),fc=s(Gi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Gi.forEach(t),gc=d(Ro),Ee=a(Ro,"DIV",{class:!0});var Je=i(Ee);C(Cn.$$.fragment,Je),_c=d(Je),At=a(Je,"P",{});var vr=i(At);vc=s(vr,"The "),Ks=a(vr,"A",{href:!0});var wf=i(Ks);Tc=s(wf,"ConvBertForSequenceClassification"),wf.forEach(t),kc=s(vr," forward method, overrides the "),ta=a(vr,"CODE",{});var $f=i(ta);bc=s($f,"__call__"),$f.forEach(t),Cc=s(vr," special method."),vr.forEach(t),wc=d(Je),C(ho.$$.fragment,Je),$c=d(Je),oa=a(Je,"P",{});var yf=i(oa);yc=s(yf,"Example of single-label classification:"),yf.forEach(t),Bc=d(Je),C(wn.$$.fragment,Je),Fc=d(Je),na=a(Je,"P",{});var Bf=i(na);Ec=s(Bf,"Example of multi-label classification:"),Bf.forEach(t),Mc=d(Je),C($n.$$.fragment,Je),Je.forEach(t),Ro.forEach(t),bi=d(o),Nt=a(o,"H2",{class:!0});var Zi=i(Nt);uo=a(Zi,"A",{id:!0,class:!0,href:!0});var Ff=i(uo);sa=a(Ff,"SPAN",{});var Ef=i(sa);C(yn.$$.fragment,Ef),Ef.forEach(t),Ff.forEach(t),zc=d(Zi),ra=a(Zi,"SPAN",{});var Mf=i(ra);qc=s(Mf,"ConvBertForMultipleChoice"),Mf.forEach(t),Zi.forEach(t),Ci=d(o),Xe=a(o,"DIV",{class:!0});var Wo=i(Xe);C(Bn.$$.fragment,Wo),jc=d(Wo),aa=a(Wo,"P",{});var zf=i(aa);Pc=s(zf,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),zf.forEach(t),xc=d(Wo),Fn=a(Wo,"P",{});var Xi=i(Fn);Ac=s(Xi,"This model is a PyTorch "),En=a(Xi,"A",{href:!0,rel:!0});var qf=i(En);Nc=s(qf,"torch.nn.Module"),qf.forEach(t),Dc=s(Xi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Xi.forEach(t),Ic=d(Wo),Oe=a(Wo,"DIV",{class:!0});var _t=i(Oe);C(Mn.$$.fragment,_t),Sc=d(_t),Dt=a(_t,"P",{});var Tr=i(Dt);Lc=s(Tr,"The "),Js=a(Tr,"A",{href:!0});var jf=i(Js);Oc=s(jf,"ConvBertForMultipleChoice"),jf.forEach(t),Rc=s(Tr," forward method, overrides the "),ia=a(Tr,"CODE",{});var Pf=i(ia);Wc=s(Pf,"__call__"),Pf.forEach(t),Hc=s(Tr," special method."),Tr.forEach(t),Qc=d(_t),C(mo.$$.fragment,_t),Yc=d(_t),la=a(_t,"P",{});var xf=i(la);Uc=s(xf,"Example:"),xf.forEach(t),Vc=d(_t),C(zn.$$.fragment,_t),_t.forEach(t),Wo.forEach(t),wi=d(o),It=a(o,"H2",{class:!0});var el=i(It);fo=a(el,"A",{id:!0,class:!0,href:!0});var Af=i(fo);da=a(Af,"SPAN",{});var Nf=i(da);C(qn.$$.fragment,Nf),Nf.forEach(t),Af.forEach(t),Kc=d(el),ca=a(el,"SPAN",{});var Df=i(ca);Jc=s(Df,"ConvBertForTokenClassification"),Df.forEach(t),el.forEach(t),$i=d(o),et=a(o,"DIV",{class:!0});var Ho=i(et);C(jn.$$.fragment,Ho),Gc=d(Ho),pa=a(Ho,"P",{});var If=i(pa);Zc=s(If,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),If.forEach(t),Xc=d(Ho),Pn=a(Ho,"P",{});var tl=i(Pn);ep=s(tl,"This model is a PyTorch "),xn=a(tl,"A",{href:!0,rel:!0});var Sf=i(xn);tp=s(Sf,"torch.nn.Module"),Sf.forEach(t),op=s(tl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),tl.forEach(t),np=d(Ho),Re=a(Ho,"DIV",{class:!0});var vt=i(Re);C(An.$$.fragment,vt),sp=d(vt),St=a(vt,"P",{});var kr=i(St);rp=s(kr,"The "),Gs=a(kr,"A",{href:!0});var Lf=i(Gs);ap=s(Lf,"ConvBertForTokenClassification"),Lf.forEach(t),ip=s(kr," forward method, overrides the "),ha=a(kr,"CODE",{});var Of=i(ha);lp=s(Of,"__call__"),Of.forEach(t),dp=s(kr," special method."),kr.forEach(t),cp=d(vt),C(go.$$.fragment,vt),pp=d(vt),ua=a(vt,"P",{});var Rf=i(ua);hp=s(Rf,"Example:"),Rf.forEach(t),up=d(vt),C(Nn.$$.fragment,vt),vt.forEach(t),Ho.forEach(t),yi=d(o),Lt=a(o,"H2",{class:!0});var ol=i(Lt);_o=a(ol,"A",{id:!0,class:!0,href:!0});var Wf=i(_o);ma=a(Wf,"SPAN",{});var Hf=i(ma);C(Dn.$$.fragment,Hf),Hf.forEach(t),Wf.forEach(t),mp=d(ol),fa=a(ol,"SPAN",{});var Qf=i(fa);fp=s(Qf,"ConvBertForQuestionAnswering"),Qf.forEach(t),ol.forEach(t),Bi=d(o),tt=a(o,"DIV",{class:!0});var Qo=i(tt);C(In.$$.fragment,Qo),gp=d(Qo),Ot=a(Qo,"P",{});var br=i(Ot);_p=s(br,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ga=a(br,"CODE",{});var Yf=i(ga);vp=s(Yf,"span start logits"),Yf.forEach(t),Tp=s(br," and "),_a=a(br,"CODE",{});var Uf=i(_a);kp=s(Uf,"span end logits"),Uf.forEach(t),bp=s(br,")."),br.forEach(t),Cp=d(Qo),Sn=a(Qo,"P",{});var nl=i(Sn);wp=s(nl,"This model is a PyTorch "),Ln=a(nl,"A",{href:!0,rel:!0});var Vf=i(Ln);$p=s(Vf,"torch.nn.Module"),Vf.forEach(t),yp=s(nl,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),nl.forEach(t),Bp=d(Qo),We=a(Qo,"DIV",{class:!0});var Tt=i(We);C(On.$$.fragment,Tt),Fp=d(Tt),Rt=a(Tt,"P",{});var Cr=i(Rt);Ep=s(Cr,"The "),Zs=a(Cr,"A",{href:!0});var Kf=i(Zs);Mp=s(Kf,"ConvBertForQuestionAnswering"),Kf.forEach(t),zp=s(Cr," forward method, overrides the "),va=a(Cr,"CODE",{});var Jf=i(va);qp=s(Jf,"__call__"),Jf.forEach(t),jp=s(Cr," special method."),Cr.forEach(t),Pp=d(Tt),C(vo.$$.fragment,Tt),xp=d(Tt),Ta=a(Tt,"P",{});var Gf=i(Ta);Ap=s(Gf,"Example:"),Gf.forEach(t),Np=d(Tt),C(Rn.$$.fragment,Tt),Tt.forEach(t),Qo.forEach(t),Fi=d(o),Wt=a(o,"H2",{class:!0});var sl=i(Wt);To=a(sl,"A",{id:!0,class:!0,href:!0});var Zf=i(To);ka=a(Zf,"SPAN",{});var Xf=i(ka);C(Wn.$$.fragment,Xf),Xf.forEach(t),Zf.forEach(t),Dp=d(sl),ba=a(sl,"SPAN",{});var eg=i(ba);Ip=s(eg,"TFConvBertModel"),eg.forEach(t),sl.forEach(t),Ei=d(o),qe=a(o,"DIV",{class:!0});var st=i(qe);C(Hn.$$.fragment,st),Sp=d(st),Ca=a(st,"P",{});var tg=i(Ca);Lp=s(tg,"The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),tg.forEach(t),Op=d(st),Qn=a(st,"P",{});var rl=i(Qn);Rp=s(rl,"This model inherits from "),Xs=a(rl,"A",{href:!0});var og=i(Xs);Wp=s(og,"TFPreTrainedModel"),og.forEach(t),Hp=s(rl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),rl.forEach(t),Qp=d(st),Yn=a(st,"P",{});var al=i(Yn);Yp=s(al,"This model is also a "),Un=a(al,"A",{href:!0,rel:!0});var ng=i(Un);Up=s(ng,"tf.keras.Model"),ng.forEach(t),Vp=s(al,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),al.forEach(t),Kp=d(st),C(ko.$$.fragment,st),Jp=d(st),He=a(st,"DIV",{class:!0});var kt=i(He);C(Vn.$$.fragment,kt),Gp=d(kt),Ht=a(kt,"P",{});var wr=i(Ht);Zp=s(wr,"The "),er=a(wr,"A",{href:!0});var sg=i(er);Xp=s(sg,"TFConvBertModel"),sg.forEach(t),eh=s(wr," forward method, overrides the "),wa=a(wr,"CODE",{});var rg=i(wa);th=s(rg,"__call__"),rg.forEach(t),oh=s(wr," special method."),wr.forEach(t),nh=d(kt),C(bo.$$.fragment,kt),sh=d(kt),$a=a(kt,"P",{});var ag=i($a);rh=s(ag,"Example:"),ag.forEach(t),ah=d(kt),C(Kn.$$.fragment,kt),kt.forEach(t),st.forEach(t),Mi=d(o),Qt=a(o,"H2",{class:!0});var il=i(Qt);Co=a(il,"A",{id:!0,class:!0,href:!0});var ig=i(Co);ya=a(ig,"SPAN",{});var lg=i(ya);C(Jn.$$.fragment,lg),lg.forEach(t),ig.forEach(t),ih=d(il),Ba=a(il,"SPAN",{});var dg=i(Ba);lh=s(dg,"TFConvBertForMaskedLM"),dg.forEach(t),il.forEach(t),zi=d(o),je=a(o,"DIV",{class:!0});var rt=i(je);C(Gn.$$.fragment,rt),dh=d(rt),Zn=a(rt,"P",{});var ll=i(Zn);ch=s(ll,"ConvBERT Model with a "),Fa=a(ll,"CODE",{});var cg=i(Fa);ph=s(cg,"language modeling"),cg.forEach(t),hh=s(ll," head on top."),ll.forEach(t),uh=d(rt),Xn=a(rt,"P",{});var dl=i(Xn);mh=s(dl,"This model inherits from "),tr=a(dl,"A",{href:!0});var pg=i(tr);fh=s(pg,"TFPreTrainedModel"),pg.forEach(t),gh=s(dl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dl.forEach(t),_h=d(rt),es=a(rt,"P",{});var cl=i(es);vh=s(cl,"This model is also a "),ts=a(cl,"A",{href:!0,rel:!0});var hg=i(ts);Th=s(hg,"tf.keras.Model"),hg.forEach(t),kh=s(cl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cl.forEach(t),bh=d(rt),C(wo.$$.fragment,rt),Ch=d(rt),Qe=a(rt,"DIV",{class:!0});var bt=i(Qe);C(os.$$.fragment,bt),wh=d(bt),Yt=a(bt,"P",{});var $r=i(Yt);$h=s($r,"The "),or=a($r,"A",{href:!0});var ug=i(or);yh=s(ug,"TFConvBertForMaskedLM"),ug.forEach(t),Bh=s($r," forward method, overrides the "),Ea=a($r,"CODE",{});var mg=i(Ea);Fh=s(mg,"__call__"),mg.forEach(t),Eh=s($r," special method."),$r.forEach(t),Mh=d(bt),C($o.$$.fragment,bt),zh=d(bt),Ma=a(bt,"P",{});var fg=i(Ma);qh=s(fg,"Example:"),fg.forEach(t),jh=d(bt),C(ns.$$.fragment,bt),bt.forEach(t),rt.forEach(t),qi=d(o),Ut=a(o,"H2",{class:!0});var pl=i(Ut);yo=a(pl,"A",{id:!0,class:!0,href:!0});var gg=i(yo);za=a(gg,"SPAN",{});var _g=i(za);C(ss.$$.fragment,_g),_g.forEach(t),gg.forEach(t),Ph=d(pl),qa=a(pl,"SPAN",{});var vg=i(qa);xh=s(vg,"TFConvBertForSequenceClassification"),vg.forEach(t),pl.forEach(t),ji=d(o),Pe=a(o,"DIV",{class:!0});var at=i(Pe);C(rs.$$.fragment,at),Ah=d(at),ja=a(at,"P",{});var Tg=i(ja);Nh=s(Tg,"ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Tg.forEach(t),Dh=d(at),as=a(at,"P",{});var hl=i(as);Ih=s(hl,"This model inherits from "),nr=a(hl,"A",{href:!0});var kg=i(nr);Sh=s(kg,"TFPreTrainedModel"),kg.forEach(t),Lh=s(hl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),hl.forEach(t),Oh=d(at),is=a(at,"P",{});var ul=i(is);Rh=s(ul,"This model is also a "),ls=a(ul,"A",{href:!0,rel:!0});var bg=i(ls);Wh=s(bg,"tf.keras.Model"),bg.forEach(t),Hh=s(ul,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ul.forEach(t),Qh=d(at),C(Bo.$$.fragment,at),Yh=d(at),Ye=a(at,"DIV",{class:!0});var Ct=i(Ye);C(ds.$$.fragment,Ct),Uh=d(Ct),Vt=a(Ct,"P",{});var yr=i(Vt);Vh=s(yr,"The "),sr=a(yr,"A",{href:!0});var Cg=i(sr);Kh=s(Cg,"TFConvBertForSequenceClassification"),Cg.forEach(t),Jh=s(yr," forward method, overrides the "),Pa=a(yr,"CODE",{});var wg=i(Pa);Gh=s(wg,"__call__"),wg.forEach(t),Zh=s(yr," special method."),yr.forEach(t),Xh=d(Ct),C(Fo.$$.fragment,Ct),eu=d(Ct),xa=a(Ct,"P",{});var $g=i(xa);tu=s($g,"Example:"),$g.forEach(t),ou=d(Ct),C(cs.$$.fragment,Ct),Ct.forEach(t),at.forEach(t),Pi=d(o),Kt=a(o,"H2",{class:!0});var ml=i(Kt);Eo=a(ml,"A",{id:!0,class:!0,href:!0});var yg=i(Eo);Aa=a(yg,"SPAN",{});var Bg=i(Aa);C(ps.$$.fragment,Bg),Bg.forEach(t),yg.forEach(t),nu=d(ml),Na=a(ml,"SPAN",{});var Fg=i(Na);su=s(Fg,"TFConvBertForMultipleChoice"),Fg.forEach(t),ml.forEach(t),xi=d(o),xe=a(o,"DIV",{class:!0});var it=i(xe);C(hs.$$.fragment,it),ru=d(it),Da=a(it,"P",{});var Eg=i(Da);au=s(Eg,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Eg.forEach(t),iu=d(it),us=a(it,"P",{});var fl=i(us);lu=s(fl,"This model inherits from "),rr=a(fl,"A",{href:!0});var Mg=i(rr);du=s(Mg,"TFPreTrainedModel"),Mg.forEach(t),cu=s(fl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fl.forEach(t),pu=d(it),ms=a(it,"P",{});var gl=i(ms);hu=s(gl,"This model is also a "),fs=a(gl,"A",{href:!0,rel:!0});var zg=i(fs);uu=s(zg,"tf.keras.Model"),zg.forEach(t),mu=s(gl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),gl.forEach(t),fu=d(it),C(Mo.$$.fragment,it),gu=d(it),Ue=a(it,"DIV",{class:!0});var wt=i(Ue);C(gs.$$.fragment,wt),_u=d(wt),Jt=a(wt,"P",{});var Br=i(Jt);vu=s(Br,"The "),ar=a(Br,"A",{href:!0});var qg=i(ar);Tu=s(qg,"TFConvBertForMultipleChoice"),qg.forEach(t),ku=s(Br," forward method, overrides the "),Ia=a(Br,"CODE",{});var jg=i(Ia);bu=s(jg,"__call__"),jg.forEach(t),Cu=s(Br," special method."),Br.forEach(t),wu=d(wt),C(zo.$$.fragment,wt),$u=d(wt),Sa=a(wt,"P",{});var Pg=i(Sa);yu=s(Pg,"Example:"),Pg.forEach(t),Bu=d(wt),C(_s.$$.fragment,wt),wt.forEach(t),it.forEach(t),Ai=d(o),Gt=a(o,"H2",{class:!0});var _l=i(Gt);qo=a(_l,"A",{id:!0,class:!0,href:!0});var xg=i(qo);La=a(xg,"SPAN",{});var Ag=i(La);C(vs.$$.fragment,Ag),Ag.forEach(t),xg.forEach(t),Fu=d(_l),Oa=a(_l,"SPAN",{});var Ng=i(Oa);Eu=s(Ng,"TFConvBertForTokenClassification"),Ng.forEach(t),_l.forEach(t),Ni=d(o),Ae=a(o,"DIV",{class:!0});var lt=i(Ae);C(Ts.$$.fragment,lt),Mu=d(lt),Ra=a(lt,"P",{});var Dg=i(Ra);zu=s(Dg,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Dg.forEach(t),qu=d(lt),ks=a(lt,"P",{});var vl=i(ks);ju=s(vl,"This model inherits from "),ir=a(vl,"A",{href:!0});var Ig=i(ir);Pu=s(Ig,"TFPreTrainedModel"),Ig.forEach(t),xu=s(vl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),vl.forEach(t),Au=d(lt),bs=a(lt,"P",{});var Tl=i(bs);Nu=s(Tl,"This model is also a "),Cs=a(Tl,"A",{href:!0,rel:!0});var Sg=i(Cs);Du=s(Sg,"tf.keras.Model"),Sg.forEach(t),Iu=s(Tl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tl.forEach(t),Su=d(lt),C(jo.$$.fragment,lt),Lu=d(lt),Ve=a(lt,"DIV",{class:!0});var $t=i(Ve);C(ws.$$.fragment,$t),Ou=d($t),Zt=a($t,"P",{});var Fr=i(Zt);Ru=s(Fr,"The "),lr=a(Fr,"A",{href:!0});var Lg=i(lr);Wu=s(Lg,"TFConvBertForTokenClassification"),Lg.forEach(t),Hu=s(Fr," forward method, overrides the "),Wa=a(Fr,"CODE",{});var Og=i(Wa);Qu=s(Og,"__call__"),Og.forEach(t),Yu=s(Fr," special method."),Fr.forEach(t),Uu=d($t),C(Po.$$.fragment,$t),Vu=d($t),Ha=a($t,"P",{});var Rg=i(Ha);Ku=s(Rg,"Example:"),Rg.forEach(t),Ju=d($t),C($s.$$.fragment,$t),$t.forEach(t),lt.forEach(t),Di=d(o),Xt=a(o,"H2",{class:!0});var kl=i(Xt);xo=a(kl,"A",{id:!0,class:!0,href:!0});var Wg=i(xo);Qa=a(Wg,"SPAN",{});var Hg=i(Qa);C(ys.$$.fragment,Hg),Hg.forEach(t),Wg.forEach(t),Gu=d(kl),Ya=a(kl,"SPAN",{});var Qg=i(Ya);Zu=s(Qg,"TFConvBertForQuestionAnswering"),Qg.forEach(t),kl.forEach(t),Ii=d(o),Ne=a(o,"DIV",{class:!0});var dt=i(Ne);C(Bs.$$.fragment,dt),Xu=d(dt),eo=a(dt,"P",{});var Er=i(eo);em=s(Er,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ua=a(Er,"CODE",{});var Yg=i(Ua);tm=s(Yg,"span start logits"),Yg.forEach(t),om=s(Er," and "),Va=a(Er,"CODE",{});var Ug=i(Va);nm=s(Ug,"span end logits"),Ug.forEach(t),sm=s(Er,")."),Er.forEach(t),rm=d(dt),Fs=a(dt,"P",{});var bl=i(Fs);am=s(bl,"This model inherits from "),dr=a(bl,"A",{href:!0});var Vg=i(dr);im=s(Vg,"TFPreTrainedModel"),Vg.forEach(t),lm=s(bl,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bl.forEach(t),dm=d(dt),Es=a(dt,"P",{});var Cl=i(Es);cm=s(Cl,"This model is also a "),Ms=a(Cl,"A",{href:!0,rel:!0});var Kg=i(Ms);pm=s(Kg,"tf.keras.Model"),Kg.forEach(t),hm=s(Cl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Cl.forEach(t),um=d(dt),C(Ao.$$.fragment,dt),mm=d(dt),Ke=a(dt,"DIV",{class:!0});var yt=i(Ke);C(zs.$$.fragment,yt),fm=d(yt),to=a(yt,"P",{});var Mr=i(to);gm=s(Mr,"The "),cr=a(Mr,"A",{href:!0});var Jg=i(cr);_m=s(Jg,"TFConvBertForQuestionAnswering"),Jg.forEach(t),vm=s(Mr," forward method, overrides the "),Ka=a(Mr,"CODE",{});var Gg=i(Ka);Tm=s(Gg,"__call__"),Gg.forEach(t),km=s(Mr," special method."),Mr.forEach(t),bm=d(yt),C(No.$$.fragment,yt),Cm=d(yt),Ja=a(yt,"P",{});var Zg=i(Ja);wm=s(Zg,"Example:"),Zg.forEach(t),$m=d(yt),C(qs.$$.fragment,yt),yt.forEach(t),dt.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(C_)),h(g,"id","convbert"),h(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(g,"href","#convbert"),h(m,"class","relative group"),h(X,"id","overview"),h(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(X,"href","#overview"),h(M,"class","relative group"),h(te,"href","https://arxiv.org/abs/2008.02496"),h(te,"rel","nofollow"),h(I,"href","https://huggingface.co/abhishek"),h(I,"rel","nofollow"),h(P,"href","https://github.com/yitu-opensource/ConvBert"),h(P,"rel","nofollow"),h(c,"id","transformers.ConvBertConfig"),h(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(c,"href","#transformers.ConvBertConfig"),h(Z,"class","relative group"),h(be,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel"),h(ke,"href","https://huggingface.co/YituTech/conv-bert-base"),h(ke,"rel","nofollow"),h(Ns,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(Ds,"href","/docs/transformers/main/en/main_classes/configuration#transformers.PretrainedConfig"),h(oe,"class","docstring"),h(oo,"id","transformers.ConvBertTokenizer"),h(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oo,"href","#transformers.ConvBertTokenizer"),h(Bt,"class","relative group"),h(Is,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizer"),h(Ss,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),h(Ls,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizer"),h(ut,"class","docstring"),h(no,"class","docstring"),h(ot,"class","docstring"),h(Ws,"class","docstring"),h(ze,"class","docstring"),h(so,"id","transformers.ConvBertTokenizerFast"),h(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(so,"href","#transformers.ConvBertTokenizerFast"),h(Et,"class","relative group"),h(Hs,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertTokenizerFast"),h(Qs,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),h(Ys,"href","/docs/transformers/main/en/model_doc/bert#transformers.BertTokenizerFast"),h(Ge,"class","docstring"),h(ao,"id","transformers.ConvBertModel"),h(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ao,"href","#transformers.ConvBertModel"),h(Mt,"class","relative group"),h(cn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(cn,"rel","nofollow"),h(Us,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertModel"),h(Se,"class","docstring"),h(pt,"class","docstring"),h(lo,"id","transformers.ConvBertForMaskedLM"),h(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(lo,"href","#transformers.ConvBertForMaskedLM"),h(qt,"class","relative group"),h(fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(fn,"rel","nofollow"),h(Vs,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForMaskedLM"),h(Le,"class","docstring"),h(ht,"class","docstring"),h(po,"id","transformers.ConvBertForSequenceClassification"),h(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(po,"href","#transformers.ConvBertForSequenceClassification"),h(xt,"class","relative group"),h(bn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(bn,"rel","nofollow"),h(Ks,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForSequenceClassification"),h(Ee,"class","docstring"),h(Ze,"class","docstring"),h(uo,"id","transformers.ConvBertForMultipleChoice"),h(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(uo,"href","#transformers.ConvBertForMultipleChoice"),h(Nt,"class","relative group"),h(En,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(En,"rel","nofollow"),h(Js,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForMultipleChoice"),h(Oe,"class","docstring"),h(Xe,"class","docstring"),h(fo,"id","transformers.ConvBertForTokenClassification"),h(fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(fo,"href","#transformers.ConvBertForTokenClassification"),h(It,"class","relative group"),h(xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(xn,"rel","nofollow"),h(Gs,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForTokenClassification"),h(Re,"class","docstring"),h(et,"class","docstring"),h(_o,"id","transformers.ConvBertForQuestionAnswering"),h(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_o,"href","#transformers.ConvBertForQuestionAnswering"),h(Lt,"class","relative group"),h(Ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Ln,"rel","nofollow"),h(Zs,"href","/docs/transformers/main/en/model_doc/convbert#transformers.ConvBertForQuestionAnswering"),h(We,"class","docstring"),h(tt,"class","docstring"),h(To,"id","transformers.TFConvBertModel"),h(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(To,"href","#transformers.TFConvBertModel"),h(Wt,"class","relative group"),h(Xs,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Un,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Un,"rel","nofollow"),h(er,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertModel"),h(He,"class","docstring"),h(qe,"class","docstring"),h(Co,"id","transformers.TFConvBertForMaskedLM"),h(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Co,"href","#transformers.TFConvBertForMaskedLM"),h(Qt,"class","relative group"),h(tr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(ts,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(ts,"rel","nofollow"),h(or,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForMaskedLM"),h(Qe,"class","docstring"),h(je,"class","docstring"),h(yo,"id","transformers.TFConvBertForSequenceClassification"),h(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yo,"href","#transformers.TFConvBertForSequenceClassification"),h(Ut,"class","relative group"),h(nr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(ls,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(ls,"rel","nofollow"),h(sr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForSequenceClassification"),h(Ye,"class","docstring"),h(Pe,"class","docstring"),h(Eo,"id","transformers.TFConvBertForMultipleChoice"),h(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Eo,"href","#transformers.TFConvBertForMultipleChoice"),h(Kt,"class","relative group"),h(rr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(fs,"rel","nofollow"),h(ar,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForMultipleChoice"),h(Ue,"class","docstring"),h(xe,"class","docstring"),h(qo,"id","transformers.TFConvBertForTokenClassification"),h(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qo,"href","#transformers.TFConvBertForTokenClassification"),h(Gt,"class","relative group"),h(ir,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Cs,"rel","nofollow"),h(lr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForTokenClassification"),h(Ve,"class","docstring"),h(Ae,"class","docstring"),h(xo,"id","transformers.TFConvBertForQuestionAnswering"),h(xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(xo,"href","#transformers.TFConvBertForQuestionAnswering"),h(Xt,"class","relative group"),h(dr,"href","/docs/transformers/main/en/main_classes/model#transformers.TFPreTrainedModel"),h(Ms,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Ms,"rel","nofollow"),h(cr,"href","/docs/transformers/main/en/model_doc/convbert#transformers.TFConvBertForQuestionAnswering"),h(Ke,"class","docstring"),h(Ne,"class","docstring")},m(o,f){e(document.head,p),u(o,F,f),u(o,m,f),e(m,g),e(g,T),w(v,T,null),e(m,_),e(m,E),e(E,de),u(o,K,f),u(o,M,f),e(M,X),e(X,S),w(ee,S,null),e(M,ce),e(M,L),e(L,pe),u(o,ae,f),u(o,U,f),e(U,A),e(U,te),e(te,J),e(U,z),u(o,j,f),u(o,se,f),e(se,Q),u(o,ie,f),u(o,re,f),e(re,O),e(O,he),u(o,le,f),u(o,q,f),e(q,ue),u(o,R,f),u(o,G,f),e(G,me),e(G,I),e(I,fe),e(G,ge),e(G,P),e(P,_e),u(o,W,f),u(o,Z,f),e(Z,c),e(c,k),w(V,k,null),e(Z,$e),e(Z,Ce),e(Ce,N),u(o,we,f),u(o,oe,f),w(Te,oe,null),e(oe,D),e(oe,x),e(x,ye),e(x,be),e(be,Y),e(x,Be),e(x,ke),e(ke,ve),e(x,Fe),e(x,Ns),e(Ns,wl),e(x,$l),e(x,Ds),e(Ds,yl),e(x,Bl),e(oe,Fl),e(oe,zr),e(zr,El),e(oe,Ml),w(Yo,oe,null),u(o,pi,f),u(o,Bt,f),e(Bt,oo),e(oo,qr),w(Uo,qr,null),e(Bt,zl),e(Bt,jr),e(jr,ql),u(o,hi,f),u(o,ze,f),w(Vo,ze,null),e(ze,jl),e(ze,ct),e(ct,Pl),e(ct,Is),e(Is,xl),e(ct,Al),e(ct,Ss),e(Ss,Nl),e(ct,Dl),e(ct,Ls),e(Ls,Il),e(ct,Sl),e(ze,Ll),e(ze,ut),w(Ko,ut,null),e(ut,Ol),e(ut,Pr),e(Pr,Rl),e(ut,Wl),e(ut,Jo),e(Jo,Os),e(Os,Hl),e(Os,xr),e(xr,Ql),e(Jo,Yl),e(Jo,Rs),e(Rs,Ul),e(Rs,Ar),e(Ar,Vl),e(ze,Kl),e(ze,no),w(Go,no,null),e(no,Jl),e(no,Zo),e(Zo,Gl),e(Zo,Nr),e(Nr,Zl),e(Zo,Xl),e(ze,ed),e(ze,ot),w(Xo,ot,null),e(ot,td),e(ot,Dr),e(Dr,od),e(ot,nd),w(en,ot,null),e(ot,sd),e(ot,Ft),e(Ft,rd),e(Ft,Ir),e(Ir,ad),e(Ft,id),e(Ft,Sr),e(Sr,ld),e(Ft,dd),e(ze,cd),e(ze,Ws),w(tn,Ws,null),u(o,ui,f),u(o,Et,f),e(Et,so),e(so,Lr),w(on,Lr,null),e(Et,pd),e(Et,Or),e(Or,hd),u(o,mi,f),u(o,Ge,f),w(nn,Ge,null),e(Ge,ud),e(Ge,sn),e(sn,md),e(sn,Rr),e(Rr,fd),e(sn,gd),e(Ge,_d),e(Ge,ro),e(ro,Hs),e(Hs,vd),e(ro,Td),e(ro,Qs),e(Qs,kd),e(ro,bd),e(Ge,Cd),e(Ge,rn),e(rn,wd),e(rn,Ys),e(Ys,$d),e(rn,yd),u(o,fi,f),u(o,Mt,f),e(Mt,ao),e(ao,Wr),w(an,Wr,null),e(Mt,Bd),e(Mt,Hr),e(Hr,Fd),u(o,gi,f),u(o,pt,f),w(ln,pt,null),e(pt,Ed),e(pt,dn),e(dn,Md),e(dn,cn),e(cn,zd),e(dn,qd),e(pt,jd),e(pt,Se),w(pn,Se,null),e(Se,Pd),e(Se,zt),e(zt,xd),e(zt,Us),e(Us,Ad),e(zt,Nd),e(zt,Qr),e(Qr,Dd),e(zt,Id),e(Se,Sd),w(io,Se,null),e(Se,Ld),e(Se,Yr),e(Yr,Od),e(Se,Rd),w(hn,Se,null),u(o,_i,f),u(o,qt,f),e(qt,lo),e(lo,Ur),w(un,Ur,null),e(qt,Wd),e(qt,Vr),e(Vr,Hd),u(o,vi,f),u(o,ht,f),w(mn,ht,null),e(ht,Qd),e(ht,jt),e(jt,Yd),e(jt,Kr),e(Kr,Ud),e(jt,Vd),e(jt,fn),e(fn,Kd),e(jt,Jd),e(ht,Gd),e(ht,Le),w(gn,Le,null),e(Le,Zd),e(Le,Pt),e(Pt,Xd),e(Pt,Vs),e(Vs,ec),e(Pt,tc),e(Pt,Jr),e(Jr,oc),e(Pt,nc),e(Le,sc),w(co,Le,null),e(Le,rc),e(Le,Gr),e(Gr,ac),e(Le,ic),w(_n,Le,null),u(o,Ti,f),u(o,xt,f),e(xt,po),e(po,Zr),w(vn,Zr,null),e(xt,lc),e(xt,Xr),e(Xr,dc),u(o,ki,f),u(o,Ze,f),w(Tn,Ze,null),e(Ze,cc),e(Ze,ea),e(ea,pc),e(Ze,hc),e(Ze,kn),e(kn,uc),e(kn,bn),e(bn,mc),e(kn,fc),e(Ze,gc),e(Ze,Ee),w(Cn,Ee,null),e(Ee,_c),e(Ee,At),e(At,vc),e(At,Ks),e(Ks,Tc),e(At,kc),e(At,ta),e(ta,bc),e(At,Cc),e(Ee,wc),w(ho,Ee,null),e(Ee,$c),e(Ee,oa),e(oa,yc),e(Ee,Bc),w(wn,Ee,null),e(Ee,Fc),e(Ee,na),e(na,Ec),e(Ee,Mc),w($n,Ee,null),u(o,bi,f),u(o,Nt,f),e(Nt,uo),e(uo,sa),w(yn,sa,null),e(Nt,zc),e(Nt,ra),e(ra,qc),u(o,Ci,f),u(o,Xe,f),w(Bn,Xe,null),e(Xe,jc),e(Xe,aa),e(aa,Pc),e(Xe,xc),e(Xe,Fn),e(Fn,Ac),e(Fn,En),e(En,Nc),e(Fn,Dc),e(Xe,Ic),e(Xe,Oe),w(Mn,Oe,null),e(Oe,Sc),e(Oe,Dt),e(Dt,Lc),e(Dt,Js),e(Js,Oc),e(Dt,Rc),e(Dt,ia),e(ia,Wc),e(Dt,Hc),e(Oe,Qc),w(mo,Oe,null),e(Oe,Yc),e(Oe,la),e(la,Uc),e(Oe,Vc),w(zn,Oe,null),u(o,wi,f),u(o,It,f),e(It,fo),e(fo,da),w(qn,da,null),e(It,Kc),e(It,ca),e(ca,Jc),u(o,$i,f),u(o,et,f),w(jn,et,null),e(et,Gc),e(et,pa),e(pa,Zc),e(et,Xc),e(et,Pn),e(Pn,ep),e(Pn,xn),e(xn,tp),e(Pn,op),e(et,np),e(et,Re),w(An,Re,null),e(Re,sp),e(Re,St),e(St,rp),e(St,Gs),e(Gs,ap),e(St,ip),e(St,ha),e(ha,lp),e(St,dp),e(Re,cp),w(go,Re,null),e(Re,pp),e(Re,ua),e(ua,hp),e(Re,up),w(Nn,Re,null),u(o,yi,f),u(o,Lt,f),e(Lt,_o),e(_o,ma),w(Dn,ma,null),e(Lt,mp),e(Lt,fa),e(fa,fp),u(o,Bi,f),u(o,tt,f),w(In,tt,null),e(tt,gp),e(tt,Ot),e(Ot,_p),e(Ot,ga),e(ga,vp),e(Ot,Tp),e(Ot,_a),e(_a,kp),e(Ot,bp),e(tt,Cp),e(tt,Sn),e(Sn,wp),e(Sn,Ln),e(Ln,$p),e(Sn,yp),e(tt,Bp),e(tt,We),w(On,We,null),e(We,Fp),e(We,Rt),e(Rt,Ep),e(Rt,Zs),e(Zs,Mp),e(Rt,zp),e(Rt,va),e(va,qp),e(Rt,jp),e(We,Pp),w(vo,We,null),e(We,xp),e(We,Ta),e(Ta,Ap),e(We,Np),w(Rn,We,null),u(o,Fi,f),u(o,Wt,f),e(Wt,To),e(To,ka),w(Wn,ka,null),e(Wt,Dp),e(Wt,ba),e(ba,Ip),u(o,Ei,f),u(o,qe,f),w(Hn,qe,null),e(qe,Sp),e(qe,Ca),e(Ca,Lp),e(qe,Op),e(qe,Qn),e(Qn,Rp),e(Qn,Xs),e(Xs,Wp),e(Qn,Hp),e(qe,Qp),e(qe,Yn),e(Yn,Yp),e(Yn,Un),e(Un,Up),e(Yn,Vp),e(qe,Kp),w(ko,qe,null),e(qe,Jp),e(qe,He),w(Vn,He,null),e(He,Gp),e(He,Ht),e(Ht,Zp),e(Ht,er),e(er,Xp),e(Ht,eh),e(Ht,wa),e(wa,th),e(Ht,oh),e(He,nh),w(bo,He,null),e(He,sh),e(He,$a),e($a,rh),e(He,ah),w(Kn,He,null),u(o,Mi,f),u(o,Qt,f),e(Qt,Co),e(Co,ya),w(Jn,ya,null),e(Qt,ih),e(Qt,Ba),e(Ba,lh),u(o,zi,f),u(o,je,f),w(Gn,je,null),e(je,dh),e(je,Zn),e(Zn,ch),e(Zn,Fa),e(Fa,ph),e(Zn,hh),e(je,uh),e(je,Xn),e(Xn,mh),e(Xn,tr),e(tr,fh),e(Xn,gh),e(je,_h),e(je,es),e(es,vh),e(es,ts),e(ts,Th),e(es,kh),e(je,bh),w(wo,je,null),e(je,Ch),e(je,Qe),w(os,Qe,null),e(Qe,wh),e(Qe,Yt),e(Yt,$h),e(Yt,or),e(or,yh),e(Yt,Bh),e(Yt,Ea),e(Ea,Fh),e(Yt,Eh),e(Qe,Mh),w($o,Qe,null),e(Qe,zh),e(Qe,Ma),e(Ma,qh),e(Qe,jh),w(ns,Qe,null),u(o,qi,f),u(o,Ut,f),e(Ut,yo),e(yo,za),w(ss,za,null),e(Ut,Ph),e(Ut,qa),e(qa,xh),u(o,ji,f),u(o,Pe,f),w(rs,Pe,null),e(Pe,Ah),e(Pe,ja),e(ja,Nh),e(Pe,Dh),e(Pe,as),e(as,Ih),e(as,nr),e(nr,Sh),e(as,Lh),e(Pe,Oh),e(Pe,is),e(is,Rh),e(is,ls),e(ls,Wh),e(is,Hh),e(Pe,Qh),w(Bo,Pe,null),e(Pe,Yh),e(Pe,Ye),w(ds,Ye,null),e(Ye,Uh),e(Ye,Vt),e(Vt,Vh),e(Vt,sr),e(sr,Kh),e(Vt,Jh),e(Vt,Pa),e(Pa,Gh),e(Vt,Zh),e(Ye,Xh),w(Fo,Ye,null),e(Ye,eu),e(Ye,xa),e(xa,tu),e(Ye,ou),w(cs,Ye,null),u(o,Pi,f),u(o,Kt,f),e(Kt,Eo),e(Eo,Aa),w(ps,Aa,null),e(Kt,nu),e(Kt,Na),e(Na,su),u(o,xi,f),u(o,xe,f),w(hs,xe,null),e(xe,ru),e(xe,Da),e(Da,au),e(xe,iu),e(xe,us),e(us,lu),e(us,rr),e(rr,du),e(us,cu),e(xe,pu),e(xe,ms),e(ms,hu),e(ms,fs),e(fs,uu),e(ms,mu),e(xe,fu),w(Mo,xe,null),e(xe,gu),e(xe,Ue),w(gs,Ue,null),e(Ue,_u),e(Ue,Jt),e(Jt,vu),e(Jt,ar),e(ar,Tu),e(Jt,ku),e(Jt,Ia),e(Ia,bu),e(Jt,Cu),e(Ue,wu),w(zo,Ue,null),e(Ue,$u),e(Ue,Sa),e(Sa,yu),e(Ue,Bu),w(_s,Ue,null),u(o,Ai,f),u(o,Gt,f),e(Gt,qo),e(qo,La),w(vs,La,null),e(Gt,Fu),e(Gt,Oa),e(Oa,Eu),u(o,Ni,f),u(o,Ae,f),w(Ts,Ae,null),e(Ae,Mu),e(Ae,Ra),e(Ra,zu),e(Ae,qu),e(Ae,ks),e(ks,ju),e(ks,ir),e(ir,Pu),e(ks,xu),e(Ae,Au),e(Ae,bs),e(bs,Nu),e(bs,Cs),e(Cs,Du),e(bs,Iu),e(Ae,Su),w(jo,Ae,null),e(Ae,Lu),e(Ae,Ve),w(ws,Ve,null),e(Ve,Ou),e(Ve,Zt),e(Zt,Ru),e(Zt,lr),e(lr,Wu),e(Zt,Hu),e(Zt,Wa),e(Wa,Qu),e(Zt,Yu),e(Ve,Uu),w(Po,Ve,null),e(Ve,Vu),e(Ve,Ha),e(Ha,Ku),e(Ve,Ju),w($s,Ve,null),u(o,Di,f),u(o,Xt,f),e(Xt,xo),e(xo,Qa),w(ys,Qa,null),e(Xt,Gu),e(Xt,Ya),e(Ya,Zu),u(o,Ii,f),u(o,Ne,f),w(Bs,Ne,null),e(Ne,Xu),e(Ne,eo),e(eo,em),e(eo,Ua),e(Ua,tm),e(eo,om),e(eo,Va),e(Va,nm),e(eo,sm),e(Ne,rm),e(Ne,Fs),e(Fs,am),e(Fs,dr),e(dr,im),e(Fs,lm),e(Ne,dm),e(Ne,Es),e(Es,cm),e(Es,Ms),e(Ms,pm),e(Es,hm),e(Ne,um),w(Ao,Ne,null),e(Ne,mm),e(Ne,Ke),w(zs,Ke,null),e(Ke,fm),e(Ke,to),e(to,gm),e(to,cr),e(cr,_m),e(to,vm),e(to,Ka),e(Ka,Tm),e(to,km),e(Ke,bm),w(No,Ke,null),e(Ke,Cm),e(Ke,Ja),e(Ja,wm),e(Ke,$m),w(qs,Ke,null),Si=!0},p(o,[f]){const js={};f&2&&(js.$$scope={dirty:f,ctx:o}),io.$set(js);const Ga={};f&2&&(Ga.$$scope={dirty:f,ctx:o}),co.$set(Ga);const Za={};f&2&&(Za.$$scope={dirty:f,ctx:o}),ho.$set(Za);const Xa={};f&2&&(Xa.$$scope={dirty:f,ctx:o}),mo.$set(Xa);const Ps={};f&2&&(Ps.$$scope={dirty:f,ctx:o}),go.$set(Ps);const ei={};f&2&&(ei.$$scope={dirty:f,ctx:o}),vo.$set(ei);const ti={};f&2&&(ti.$$scope={dirty:f,ctx:o}),ko.$set(ti);const oi={};f&2&&(oi.$$scope={dirty:f,ctx:o}),bo.$set(oi);const xs={};f&2&&(xs.$$scope={dirty:f,ctx:o}),wo.$set(xs);const ni={};f&2&&(ni.$$scope={dirty:f,ctx:o}),$o.$set(ni);const si={};f&2&&(si.$$scope={dirty:f,ctx:o}),Bo.$set(si);const ri={};f&2&&(ri.$$scope={dirty:f,ctx:o}),Fo.$set(ri);const ai={};f&2&&(ai.$$scope={dirty:f,ctx:o}),Mo.$set(ai);const ii={};f&2&&(ii.$$scope={dirty:f,ctx:o}),zo.$set(ii);const Do={};f&2&&(Do.$$scope={dirty:f,ctx:o}),jo.$set(Do);const li={};f&2&&(li.$$scope={dirty:f,ctx:o}),Po.$set(li);const di={};f&2&&(di.$$scope={dirty:f,ctx:o}),Ao.$set(di);const As={};f&2&&(As.$$scope={dirty:f,ctx:o}),No.$set(As)},i(o){Si||($(v.$$.fragment,o),$(ee.$$.fragment,o),$(V.$$.fragment,o),$(Te.$$.fragment,o),$(Yo.$$.fragment,o),$(Uo.$$.fragment,o),$(Vo.$$.fragment,o),$(Ko.$$.fragment,o),$(Go.$$.fragment,o),$(Xo.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(nn.$$.fragment,o),$(an.$$.fragment,o),$(ln.$$.fragment,o),$(pn.$$.fragment,o),$(io.$$.fragment,o),$(hn.$$.fragment,o),$(un.$$.fragment,o),$(mn.$$.fragment,o),$(gn.$$.fragment,o),$(co.$$.fragment,o),$(_n.$$.fragment,o),$(vn.$$.fragment,o),$(Tn.$$.fragment,o),$(Cn.$$.fragment,o),$(ho.$$.fragment,o),$(wn.$$.fragment,o),$($n.$$.fragment,o),$(yn.$$.fragment,o),$(Bn.$$.fragment,o),$(Mn.$$.fragment,o),$(mo.$$.fragment,o),$(zn.$$.fragment,o),$(qn.$$.fragment,o),$(jn.$$.fragment,o),$(An.$$.fragment,o),$(go.$$.fragment,o),$(Nn.$$.fragment,o),$(Dn.$$.fragment,o),$(In.$$.fragment,o),$(On.$$.fragment,o),$(vo.$$.fragment,o),$(Rn.$$.fragment,o),$(Wn.$$.fragment,o),$(Hn.$$.fragment,o),$(ko.$$.fragment,o),$(Vn.$$.fragment,o),$(bo.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(Gn.$$.fragment,o),$(wo.$$.fragment,o),$(os.$$.fragment,o),$($o.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(rs.$$.fragment,o),$(Bo.$$.fragment,o),$(ds.$$.fragment,o),$(Fo.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(hs.$$.fragment,o),$(Mo.$$.fragment,o),$(gs.$$.fragment,o),$(zo.$$.fragment,o),$(_s.$$.fragment,o),$(vs.$$.fragment,o),$(Ts.$$.fragment,o),$(jo.$$.fragment,o),$(ws.$$.fragment,o),$(Po.$$.fragment,o),$($s.$$.fragment,o),$(ys.$$.fragment,o),$(Bs.$$.fragment,o),$(Ao.$$.fragment,o),$(zs.$$.fragment,o),$(No.$$.fragment,o),$(qs.$$.fragment,o),Si=!0)},o(o){y(v.$$.fragment,o),y(ee.$$.fragment,o),y(V.$$.fragment,o),y(Te.$$.fragment,o),y(Yo.$$.fragment,o),y(Uo.$$.fragment,o),y(Vo.$$.fragment,o),y(Ko.$$.fragment,o),y(Go.$$.fragment,o),y(Xo.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(nn.$$.fragment,o),y(an.$$.fragment,o),y(ln.$$.fragment,o),y(pn.$$.fragment,o),y(io.$$.fragment,o),y(hn.$$.fragment,o),y(un.$$.fragment,o),y(mn.$$.fragment,o),y(gn.$$.fragment,o),y(co.$$.fragment,o),y(_n.$$.fragment,o),y(vn.$$.fragment,o),y(Tn.$$.fragment,o),y(Cn.$$.fragment,o),y(ho.$$.fragment,o),y(wn.$$.fragment,o),y($n.$$.fragment,o),y(yn.$$.fragment,o),y(Bn.$$.fragment,o),y(Mn.$$.fragment,o),y(mo.$$.fragment,o),y(zn.$$.fragment,o),y(qn.$$.fragment,o),y(jn.$$.fragment,o),y(An.$$.fragment,o),y(go.$$.fragment,o),y(Nn.$$.fragment,o),y(Dn.$$.fragment,o),y(In.$$.fragment,o),y(On.$$.fragment,o),y(vo.$$.fragment,o),y(Rn.$$.fragment,o),y(Wn.$$.fragment,o),y(Hn.$$.fragment,o),y(ko.$$.fragment,o),y(Vn.$$.fragment,o),y(bo.$$.fragment,o),y(Kn.$$.fragment,o),y(Jn.$$.fragment,o),y(Gn.$$.fragment,o),y(wo.$$.fragment,o),y(os.$$.fragment,o),y($o.$$.fragment,o),y(ns.$$.fragment,o),y(ss.$$.fragment,o),y(rs.$$.fragment,o),y(Bo.$$.fragment,o),y(ds.$$.fragment,o),y(Fo.$$.fragment,o),y(cs.$$.fragment,o),y(ps.$$.fragment,o),y(hs.$$.fragment,o),y(Mo.$$.fragment,o),y(gs.$$.fragment,o),y(zo.$$.fragment,o),y(_s.$$.fragment,o),y(vs.$$.fragment,o),y(Ts.$$.fragment,o),y(jo.$$.fragment,o),y(ws.$$.fragment,o),y(Po.$$.fragment,o),y($s.$$.fragment,o),y(ys.$$.fragment,o),y(Bs.$$.fragment,o),y(Ao.$$.fragment,o),y(zs.$$.fragment,o),y(No.$$.fragment,o),y(qs.$$.fragment,o),Si=!1},d(o){t(p),o&&t(F),o&&t(m),B(v),o&&t(K),o&&t(M),B(ee),o&&t(ae),o&&t(U),o&&t(j),o&&t(se),o&&t(ie),o&&t(re),o&&t(le),o&&t(q),o&&t(R),o&&t(G),o&&t(W),o&&t(Z),B(V),o&&t(we),o&&t(oe),B(Te),B(Yo),o&&t(pi),o&&t(Bt),B(Uo),o&&t(hi),o&&t(ze),B(Vo),B(Ko),B(Go),B(Xo),B(en),B(tn),o&&t(ui),o&&t(Et),B(on),o&&t(mi),o&&t(Ge),B(nn),o&&t(fi),o&&t(Mt),B(an),o&&t(gi),o&&t(pt),B(ln),B(pn),B(io),B(hn),o&&t(_i),o&&t(qt),B(un),o&&t(vi),o&&t(ht),B(mn),B(gn),B(co),B(_n),o&&t(Ti),o&&t(xt),B(vn),o&&t(ki),o&&t(Ze),B(Tn),B(Cn),B(ho),B(wn),B($n),o&&t(bi),o&&t(Nt),B(yn),o&&t(Ci),o&&t(Xe),B(Bn),B(Mn),B(mo),B(zn),o&&t(wi),o&&t(It),B(qn),o&&t($i),o&&t(et),B(jn),B(An),B(go),B(Nn),o&&t(yi),o&&t(Lt),B(Dn),o&&t(Bi),o&&t(tt),B(In),B(On),B(vo),B(Rn),o&&t(Fi),o&&t(Wt),B(Wn),o&&t(Ei),o&&t(qe),B(Hn),B(ko),B(Vn),B(bo),B(Kn),o&&t(Mi),o&&t(Qt),B(Jn),o&&t(zi),o&&t(je),B(Gn),B(wo),B(os),B($o),B(ns),o&&t(qi),o&&t(Ut),B(ss),o&&t(ji),o&&t(Pe),B(rs),B(Bo),B(ds),B(Fo),B(cs),o&&t(Pi),o&&t(Kt),B(ps),o&&t(xi),o&&t(xe),B(hs),B(Mo),B(gs),B(zo),B(_s),o&&t(Ai),o&&t(Gt),B(vs),o&&t(Ni),o&&t(Ae),B(Ts),B(jo),B(ws),B(Po),B($s),o&&t(Di),o&&t(Xt),B(ys),o&&t(Ii),o&&t(Ne),B(Bs),B(Ao),B(zs),B(No),B(qs)}}}const C_={local:"convbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.ConvBertConfig",title:"ConvBertConfig"},{local:"transformers.ConvBertTokenizer",title:"ConvBertTokenizer"},{local:"transformers.ConvBertTokenizerFast",title:"ConvBertTokenizerFast"},{local:"transformers.ConvBertModel",title:"ConvBertModel"},{local:"transformers.ConvBertForMaskedLM",title:"ConvBertForMaskedLM"},{local:"transformers.ConvBertForSequenceClassification",title:"ConvBertForSequenceClassification"},{local:"transformers.ConvBertForMultipleChoice",title:"ConvBertForMultipleChoice"},{local:"transformers.ConvBertForTokenClassification",title:"ConvBertForTokenClassification"},{local:"transformers.ConvBertForQuestionAnswering",title:"ConvBertForQuestionAnswering"},{local:"transformers.TFConvBertModel",title:"TFConvBertModel"},{local:"transformers.TFConvBertForMaskedLM",title:"TFConvBertForMaskedLM"},{local:"transformers.TFConvBertForSequenceClassification",title:"TFConvBertForSequenceClassification"},{local:"transformers.TFConvBertForMultipleChoice",title:"TFConvBertForMultipleChoice"},{local:"transformers.TFConvBertForTokenClassification",title:"TFConvBertForTokenClassification"},{local:"transformers.TFConvBertForQuestionAnswering",title:"TFConvBertForQuestionAnswering"}],title:"ConvBERT"};function w_(H,p,F){let{fw:m}=p;return H.$$set=g=>{"fw"in g&&F(0,m=g.fw)},[m]}class M_ extends Xg{constructor(p){super();e_(this,p,w_,b_,t_,{fw:0})}}export{M_ as default,C_ as metadata};
