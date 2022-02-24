import{S as Gg,i as Zg,s as Xg,e as r,k as l,w as b,t as n,M as e_,c as a,d as t,m as d,a as i,x as C,h as s,b as h,F as e,g as m,y as w,q as $,o as y,B}from"../../chunks/vendor-68651a14.js";import{T as Me}from"../../chunks/Tip-3fbaa85f.js";import{D as re}from"../../chunks/Docstring-d699e906.js";import{C as Ie}from"../../chunks/CodeBlock-b98730f5.js";import{I as De}from"../../chunks/IconCopyLink-8ff17449.js";import"../../chunks/CopyButton-e88c769b.js";function t_(H){let p,F,f,g,T;return{c(){p=r("p"),F=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r("code"),g=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),T=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,F),e(p,f),e(f,g),e(p,T)},d(v){v&&t(p)}}}function o_(H){let p,F,f,g,T;return{c(){p=r("p"),F=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r("code"),g=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),T=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,F),e(p,f),e(f,g),e(p,T)},d(v){v&&t(p)}}}function n_(H){let p,F,f,g,T;return{c(){p=r("p"),F=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r("code"),g=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),T=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,F),e(p,f),e(f,g),e(p,T)},d(v){v&&t(p)}}}function s_(H){let p,F,f,g,T;return{c(){p=r("p"),F=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r("code"),g=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),T=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,F),e(p,f),e(f,g),e(p,T)},d(v){v&&t(p)}}}function r_(H){let p,F,f,g,T;return{c(){p=r("p"),F=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r("code"),g=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),T=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,F),e(p,f),e(f,g),e(p,T)},d(v){v&&t(p)}}}function a_(H){let p,F,f,g,T;return{c(){p=r("p"),F=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r("code"),g=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),T=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,F),e(p,f),e(f,g),e(p,T)},d(v){v&&t(p)}}}function i_(H){let p,F,f,g,T,v,_,E,de,K,M,X,S,ee,ce,L,pe,ae,U,A,te,J,z,j,ne,Q,ie,se,O,he,le,q,me,R,G,fe,I,ue,ge,x,_e,W,Z;return{c(){p=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=r("ul"),T=r("li"),v=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),M=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),L=r("code"),pe=n("model(inputs)"),ae=n("."),U=l(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),J=l(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),Q=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),O=r("code"),he=n("model(inputs_ids)"),le=l(),q=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),I=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=l(),x=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){p=a(c,"P",{});var k=i(p);F=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(c),g=a(c,"UL",{});var V=i(g);T=a(V,"LI",{});var $e=i(T);v=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),E=a(V,"LI",{});var Ce=i(E);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=d(c),M=a(c,"P",{});var N=i(M);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var we=i(S);ee=s(we,"tf.keras.Model.fit"),we.forEach(t),ce=s(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),L=a(N,"CODE",{});var oe=i(L);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),U=d(c),A=a(c,"P",{});var Te=i(A);te=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Te.forEach(t),J=d(c),z=a(c,"UL",{});var D=i(z);j=a(D,"LI",{});var P=i(j);ne=s(P,"a single Tensor with "),Q=a(P,"CODE",{});var ye=i(Q);ie=s(ye,"input_ids"),ye.forEach(t),se=s(P," only and nothing else: "),O=a(P,"CODE",{});var be=i(O);he=s(be,"model(inputs_ids)"),be.forEach(t),P.forEach(t),le=d(D),q=a(D,"LI",{});var Y=i(q);me=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Y,"CODE",{});var Be=i(R);G=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),fe=s(Y," or "),I=a(Y,"CODE",{});var ke=i(I);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Y.forEach(t),ge=d(D),x=a(D,"LI",{});var ve=i(x);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(ve,"CODE",{});var Fe=i(W);Z=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),ve.forEach(t),D.forEach(t)},m(c,k){m(c,p,k),e(p,F),m(c,f,k),m(c,g,k),e(g,T),e(T,v),e(g,_),e(g,E),e(E,de),m(c,K,k),m(c,M,k),e(M,X),e(M,S),e(S,ee),e(M,ce),e(M,L),e(L,pe),e(M,ae),m(c,U,k),m(c,A,k),e(A,te),m(c,J,k),m(c,z,k),e(z,j),e(j,ne),e(j,Q),e(Q,ie),e(j,se),e(j,O),e(O,he),e(z,le),e(z,q),e(q,me),e(q,R),e(R,G),e(q,fe),e(q,I),e(I,ue),e(z,ge),e(z,x),e(x,_e),e(x,W),e(W,Z)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(K),c&&t(M),c&&t(U),c&&t(A),c&&t(J),c&&t(z)}}}function l_(H){let p,F,f,g,T;return{c(){p=r("p"),F=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r("code"),g=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),T=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,F),e(p,f),e(f,g),e(p,T)},d(v){v&&t(p)}}}function d_(H){let p,F,f,g,T,v,_,E,de,K,M,X,S,ee,ce,L,pe,ae,U,A,te,J,z,j,ne,Q,ie,se,O,he,le,q,me,R,G,fe,I,ue,ge,x,_e,W,Z;return{c(){p=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=r("ul"),T=r("li"),v=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),M=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),L=r("code"),pe=n("model(inputs)"),ae=n("."),U=l(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),J=l(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),Q=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),O=r("code"),he=n("model(inputs_ids)"),le=l(),q=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),I=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=l(),x=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){p=a(c,"P",{});var k=i(p);F=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(c),g=a(c,"UL",{});var V=i(g);T=a(V,"LI",{});var $e=i(T);v=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),E=a(V,"LI",{});var Ce=i(E);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=d(c),M=a(c,"P",{});var N=i(M);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var we=i(S);ee=s(we,"tf.keras.Model.fit"),we.forEach(t),ce=s(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),L=a(N,"CODE",{});var oe=i(L);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),U=d(c),A=a(c,"P",{});var Te=i(A);te=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Te.forEach(t),J=d(c),z=a(c,"UL",{});var D=i(z);j=a(D,"LI",{});var P=i(j);ne=s(P,"a single Tensor with "),Q=a(P,"CODE",{});var ye=i(Q);ie=s(ye,"input_ids"),ye.forEach(t),se=s(P," only and nothing else: "),O=a(P,"CODE",{});var be=i(O);he=s(be,"model(inputs_ids)"),be.forEach(t),P.forEach(t),le=d(D),q=a(D,"LI",{});var Y=i(q);me=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Y,"CODE",{});var Be=i(R);G=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),fe=s(Y," or "),I=a(Y,"CODE",{});var ke=i(I);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Y.forEach(t),ge=d(D),x=a(D,"LI",{});var ve=i(x);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(ve,"CODE",{});var Fe=i(W);Z=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),ve.forEach(t),D.forEach(t)},m(c,k){m(c,p,k),e(p,F),m(c,f,k),m(c,g,k),e(g,T),e(T,v),e(g,_),e(g,E),e(E,de),m(c,K,k),m(c,M,k),e(M,X),e(M,S),e(S,ee),e(M,ce),e(M,L),e(L,pe),e(M,ae),m(c,U,k),m(c,A,k),e(A,te),m(c,J,k),m(c,z,k),e(z,j),e(j,ne),e(j,Q),e(Q,ie),e(j,se),e(j,O),e(O,he),e(z,le),e(z,q),e(q,me),e(q,R),e(R,G),e(q,fe),e(q,I),e(I,ue),e(z,ge),e(z,x),e(x,_e),e(x,W),e(W,Z)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(K),c&&t(M),c&&t(U),c&&t(A),c&&t(J),c&&t(z)}}}function c_(H){let p,F,f,g,T;return{c(){p=r("p"),F=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r("code"),g=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),T=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,F),e(p,f),e(f,g),e(p,T)},d(v){v&&t(p)}}}function p_(H){let p,F,f,g,T,v,_,E,de,K,M,X,S,ee,ce,L,pe,ae,U,A,te,J,z,j,ne,Q,ie,se,O,he,le,q,me,R,G,fe,I,ue,ge,x,_e,W,Z;return{c(){p=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=r("ul"),T=r("li"),v=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),M=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),L=r("code"),pe=n("model(inputs)"),ae=n("."),U=l(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),J=l(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),Q=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),O=r("code"),he=n("model(inputs_ids)"),le=l(),q=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),I=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=l(),x=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){p=a(c,"P",{});var k=i(p);F=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(c),g=a(c,"UL",{});var V=i(g);T=a(V,"LI",{});var $e=i(T);v=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),E=a(V,"LI",{});var Ce=i(E);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=d(c),M=a(c,"P",{});var N=i(M);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var we=i(S);ee=s(we,"tf.keras.Model.fit"),we.forEach(t),ce=s(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),L=a(N,"CODE",{});var oe=i(L);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),U=d(c),A=a(c,"P",{});var Te=i(A);te=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Te.forEach(t),J=d(c),z=a(c,"UL",{});var D=i(z);j=a(D,"LI",{});var P=i(j);ne=s(P,"a single Tensor with "),Q=a(P,"CODE",{});var ye=i(Q);ie=s(ye,"input_ids"),ye.forEach(t),se=s(P," only and nothing else: "),O=a(P,"CODE",{});var be=i(O);he=s(be,"model(inputs_ids)"),be.forEach(t),P.forEach(t),le=d(D),q=a(D,"LI",{});var Y=i(q);me=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Y,"CODE",{});var Be=i(R);G=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),fe=s(Y," or "),I=a(Y,"CODE",{});var ke=i(I);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Y.forEach(t),ge=d(D),x=a(D,"LI",{});var ve=i(x);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(ve,"CODE",{});var Fe=i(W);Z=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),ve.forEach(t),D.forEach(t)},m(c,k){m(c,p,k),e(p,F),m(c,f,k),m(c,g,k),e(g,T),e(T,v),e(g,_),e(g,E),e(E,de),m(c,K,k),m(c,M,k),e(M,X),e(M,S),e(S,ee),e(M,ce),e(M,L),e(L,pe),e(M,ae),m(c,U,k),m(c,A,k),e(A,te),m(c,J,k),m(c,z,k),e(z,j),e(j,ne),e(j,Q),e(Q,ie),e(j,se),e(j,O),e(O,he),e(z,le),e(z,q),e(q,me),e(q,R),e(R,G),e(q,fe),e(q,I),e(I,ue),e(z,ge),e(z,x),e(x,_e),e(x,W),e(W,Z)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(K),c&&t(M),c&&t(U),c&&t(A),c&&t(J),c&&t(z)}}}function h_(H){let p,F,f,g,T;return{c(){p=r("p"),F=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r("code"),g=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),T=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,F),e(p,f),e(f,g),e(p,T)},d(v){v&&t(p)}}}function m_(H){let p,F,f,g,T,v,_,E,de,K,M,X,S,ee,ce,L,pe,ae,U,A,te,J,z,j,ne,Q,ie,se,O,he,le,q,me,R,G,fe,I,ue,ge,x,_e,W,Z;return{c(){p=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=r("ul"),T=r("li"),v=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),M=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),L=r("code"),pe=n("model(inputs)"),ae=n("."),U=l(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),J=l(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),Q=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),O=r("code"),he=n("model(inputs_ids)"),le=l(),q=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),I=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=l(),x=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){p=a(c,"P",{});var k=i(p);F=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(c),g=a(c,"UL",{});var V=i(g);T=a(V,"LI",{});var $e=i(T);v=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),E=a(V,"LI",{});var Ce=i(E);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=d(c),M=a(c,"P",{});var N=i(M);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var we=i(S);ee=s(we,"tf.keras.Model.fit"),we.forEach(t),ce=s(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),L=a(N,"CODE",{});var oe=i(L);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),U=d(c),A=a(c,"P",{});var Te=i(A);te=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Te.forEach(t),J=d(c),z=a(c,"UL",{});var D=i(z);j=a(D,"LI",{});var P=i(j);ne=s(P,"a single Tensor with "),Q=a(P,"CODE",{});var ye=i(Q);ie=s(ye,"input_ids"),ye.forEach(t),se=s(P," only and nothing else: "),O=a(P,"CODE",{});var be=i(O);he=s(be,"model(inputs_ids)"),be.forEach(t),P.forEach(t),le=d(D),q=a(D,"LI",{});var Y=i(q);me=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Y,"CODE",{});var Be=i(R);G=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),fe=s(Y," or "),I=a(Y,"CODE",{});var ke=i(I);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Y.forEach(t),ge=d(D),x=a(D,"LI",{});var ve=i(x);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(ve,"CODE",{});var Fe=i(W);Z=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),ve.forEach(t),D.forEach(t)},m(c,k){m(c,p,k),e(p,F),m(c,f,k),m(c,g,k),e(g,T),e(T,v),e(g,_),e(g,E),e(E,de),m(c,K,k),m(c,M,k),e(M,X),e(M,S),e(S,ee),e(M,ce),e(M,L),e(L,pe),e(M,ae),m(c,U,k),m(c,A,k),e(A,te),m(c,J,k),m(c,z,k),e(z,j),e(j,ne),e(j,Q),e(Q,ie),e(j,se),e(j,O),e(O,he),e(z,le),e(z,q),e(q,me),e(q,R),e(R,G),e(q,fe),e(q,I),e(I,ue),e(z,ge),e(z,x),e(x,_e),e(x,W),e(W,Z)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(K),c&&t(M),c&&t(U),c&&t(A),c&&t(J),c&&t(z)}}}function f_(H){let p,F,f,g,T;return{c(){p=r("p"),F=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r("code"),g=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),T=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,F),e(p,f),e(f,g),e(p,T)},d(v){v&&t(p)}}}function u_(H){let p,F,f,g,T,v,_,E,de,K,M,X,S,ee,ce,L,pe,ae,U,A,te,J,z,j,ne,Q,ie,se,O,he,le,q,me,R,G,fe,I,ue,ge,x,_e,W,Z;return{c(){p=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=r("ul"),T=r("li"),v=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),M=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),L=r("code"),pe=n("model(inputs)"),ae=n("."),U=l(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),J=l(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),Q=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),O=r("code"),he=n("model(inputs_ids)"),le=l(),q=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),I=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=l(),x=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){p=a(c,"P",{});var k=i(p);F=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(c),g=a(c,"UL",{});var V=i(g);T=a(V,"LI",{});var $e=i(T);v=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),E=a(V,"LI",{});var Ce=i(E);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=d(c),M=a(c,"P",{});var N=i(M);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var we=i(S);ee=s(we,"tf.keras.Model.fit"),we.forEach(t),ce=s(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),L=a(N,"CODE",{});var oe=i(L);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),U=d(c),A=a(c,"P",{});var Te=i(A);te=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Te.forEach(t),J=d(c),z=a(c,"UL",{});var D=i(z);j=a(D,"LI",{});var P=i(j);ne=s(P,"a single Tensor with "),Q=a(P,"CODE",{});var ye=i(Q);ie=s(ye,"input_ids"),ye.forEach(t),se=s(P," only and nothing else: "),O=a(P,"CODE",{});var be=i(O);he=s(be,"model(inputs_ids)"),be.forEach(t),P.forEach(t),le=d(D),q=a(D,"LI",{});var Y=i(q);me=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Y,"CODE",{});var Be=i(R);G=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),fe=s(Y," or "),I=a(Y,"CODE",{});var ke=i(I);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Y.forEach(t),ge=d(D),x=a(D,"LI",{});var ve=i(x);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(ve,"CODE",{});var Fe=i(W);Z=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),ve.forEach(t),D.forEach(t)},m(c,k){m(c,p,k),e(p,F),m(c,f,k),m(c,g,k),e(g,T),e(T,v),e(g,_),e(g,E),e(E,de),m(c,K,k),m(c,M,k),e(M,X),e(M,S),e(S,ee),e(M,ce),e(M,L),e(L,pe),e(M,ae),m(c,U,k),m(c,A,k),e(A,te),m(c,J,k),m(c,z,k),e(z,j),e(j,ne),e(j,Q),e(Q,ie),e(j,se),e(j,O),e(O,he),e(z,le),e(z,q),e(q,me),e(q,R),e(R,G),e(q,fe),e(q,I),e(I,ue),e(z,ge),e(z,x),e(x,_e),e(x,W),e(W,Z)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(K),c&&t(M),c&&t(U),c&&t(A),c&&t(J),c&&t(z)}}}function g_(H){let p,F,f,g,T;return{c(){p=r("p"),F=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r("code"),g=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),T=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,F),e(p,f),e(f,g),e(p,T)},d(v){v&&t(p)}}}function __(H){let p,F,f,g,T,v,_,E,de,K,M,X,S,ee,ce,L,pe,ae,U,A,te,J,z,j,ne,Q,ie,se,O,he,le,q,me,R,G,fe,I,ue,ge,x,_e,W,Z;return{c(){p=r("p"),F=n("TF 2.0 models accepts two formats as inputs:"),f=l(),g=r("ul"),T=r("li"),v=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),E=r("li"),de=n("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),M=r("p"),X=n("This second option is useful when using "),S=r("code"),ee=n("tf.keras.Model.fit"),ce=n(` method which currently requires having all
the tensors in the first argument of the model call function: `),L=r("code"),pe=n("model(inputs)"),ae=n("."),U=l(),A=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),J=l(),z=r("ul"),j=r("li"),ne=n("a single Tensor with "),Q=r("code"),ie=n("input_ids"),se=n(" only and nothing else: "),O=r("code"),he=n("model(inputs_ids)"),le=l(),q=r("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=r("code"),G=n("model([input_ids, attention_mask])"),fe=n(" or "),I=r("code"),ue=n("model([input_ids, attention_mask, token_type_ids])"),ge=l(),x=r("li"),_e=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=r("code"),Z=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(c){p=a(c,"P",{});var k=i(p);F=s(k,"TF 2.0 models accepts two formats as inputs:"),k.forEach(t),f=d(c),g=a(c,"UL",{});var V=i(g);T=a(V,"LI",{});var $e=i(T);v=s($e,"having all inputs as keyword arguments (like PyTorch models), or"),$e.forEach(t),_=d(V),E=a(V,"LI",{});var Ce=i(E);de=s(Ce,"having all inputs as a list, tuple or dict in the first positional arguments."),Ce.forEach(t),V.forEach(t),K=d(c),M=a(c,"P",{});var N=i(M);X=s(N,"This second option is useful when using "),S=a(N,"CODE",{});var we=i(S);ee=s(we,"tf.keras.Model.fit"),we.forEach(t),ce=s(N,` method which currently requires having all
the tensors in the first argument of the model call function: `),L=a(N,"CODE",{});var oe=i(L);pe=s(oe,"model(inputs)"),oe.forEach(t),ae=s(N,"."),N.forEach(t),U=d(c),A=a(c,"P",{});var Te=i(A);te=s(Te,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Te.forEach(t),J=d(c),z=a(c,"UL",{});var D=i(z);j=a(D,"LI",{});var P=i(j);ne=s(P,"a single Tensor with "),Q=a(P,"CODE",{});var ye=i(Q);ie=s(ye,"input_ids"),ye.forEach(t),se=s(P," only and nothing else: "),O=a(P,"CODE",{});var be=i(O);he=s(be,"model(inputs_ids)"),be.forEach(t),P.forEach(t),le=d(D),q=a(D,"LI",{});var Y=i(q);me=s(Y,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),R=a(Y,"CODE",{});var Be=i(R);G=s(Be,"model([input_ids, attention_mask])"),Be.forEach(t),fe=s(Y," or "),I=a(Y,"CODE",{});var ke=i(I);ue=s(ke,"model([input_ids, attention_mask, token_type_ids])"),ke.forEach(t),Y.forEach(t),ge=d(D),x=a(D,"LI",{});var ve=i(x);_e=s(ve,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),W=a(ve,"CODE",{});var Fe=i(W);Z=s(Fe,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Fe.forEach(t),ve.forEach(t),D.forEach(t)},m(c,k){m(c,p,k),e(p,F),m(c,f,k),m(c,g,k),e(g,T),e(T,v),e(g,_),e(g,E),e(E,de),m(c,K,k),m(c,M,k),e(M,X),e(M,S),e(S,ee),e(M,ce),e(M,L),e(L,pe),e(M,ae),m(c,U,k),m(c,A,k),e(A,te),m(c,J,k),m(c,z,k),e(z,j),e(j,ne),e(j,Q),e(Q,ie),e(j,se),e(j,O),e(O,he),e(z,le),e(z,q),e(q,me),e(q,R),e(R,G),e(q,fe),e(q,I),e(I,ue),e(z,ge),e(z,x),e(x,_e),e(x,W),e(W,Z)},d(c){c&&t(p),c&&t(f),c&&t(g),c&&t(K),c&&t(M),c&&t(U),c&&t(A),c&&t(J),c&&t(z)}}}function v_(H){let p,F,f,g,T;return{c(){p=r("p"),F=n(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=r("code"),g=n("Module"),T=n(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(v){p=a(v,"P",{});var _=i(p);F=s(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),f=a(_,"CODE",{});var E=i(f);g=s(E,"Module"),E.forEach(t),T=s(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(t)},m(v,_){m(v,p,_),e(p,F),e(p,f),e(f,g),e(p,T)},d(v){v&&t(p)}}}function T_(H){let p,F,f,g,T,v,_,E,de,K,M,X,S,ee,ce,L,pe,ae,U,A,te,J,z,j,ne,Q,ie,se,O,he,le,q,me,R,G,fe,I,ue,ge,x,_e,W,Z,c,k,V,$e,Ce,N,we,oe,Te,D,P,ye,be,Y,Be,ke,ve,Fe,As,Cl,wl,Ns,$l,yl,Bl,Er,Fl,El,Yo,ci,Bt,oo,Mr,Uo,Ml,zr,zl,pi,ze,Vo,ql,ct,jl,Ds,xl,Pl,Is,Al,Nl,Ss,Dl,Il,Sl,mt,Ko,Ll,qr,Ol,Rl,Jo,Ls,Wl,jr,Hl,Ql,Os,Yl,xr,Ul,Vl,no,Go,Kl,Zo,Jl,Pr,Gl,Zl,Xl,ot,Xo,ed,Ar,td,od,en,nd,Ft,sd,Nr,rd,ad,Dr,id,ld,dd,Ir,hi,Et,so,Sr,tn,cd,Lr,pd,mi,Ge,on,hd,nn,md,Or,fd,ud,gd,ro,Rs,_d,vd,Ws,Td,kd,bd,sn,Cd,Hs,wd,$d,fi,Mt,ao,Rr,rn,yd,Wr,Bd,ui,pt,an,Fd,ln,Ed,dn,Md,zd,qd,Se,cn,jd,zt,xd,Qs,Pd,Ad,Hr,Nd,Dd,Id,io,Sd,Qr,Ld,Od,pn,gi,qt,lo,Yr,hn,Rd,Ur,Wd,_i,ht,mn,Hd,jt,Qd,Vr,Yd,Ud,fn,Vd,Kd,Jd,Le,un,Gd,xt,Zd,Ys,Xd,ec,Kr,tc,oc,nc,co,sc,Jr,rc,ac,gn,vi,Pt,po,Gr,_n,ic,Zr,lc,Ti,Ze,vn,dc,Xr,cc,pc,Tn,hc,kn,mc,fc,uc,Ee,bn,gc,At,_c,Us,vc,Tc,ea,kc,bc,Cc,ho,wc,ta,$c,yc,Cn,Bc,oa,Fc,Ec,wn,ki,Nt,mo,na,$n,Mc,sa,zc,bi,Xe,yn,qc,ra,jc,xc,Bn,Pc,Fn,Ac,Nc,Dc,Oe,En,Ic,Dt,Sc,Vs,Lc,Oc,aa,Rc,Wc,Hc,fo,Qc,ia,Yc,Uc,Mn,Ci,It,uo,la,zn,Vc,da,Kc,wi,et,qn,Jc,ca,Gc,Zc,jn,Xc,xn,ep,tp,op,Re,Pn,np,St,sp,Ks,rp,ap,pa,ip,lp,dp,go,cp,ha,pp,hp,An,$i,Lt,_o,ma,Nn,mp,fa,fp,yi,tt,Dn,up,Ot,gp,ua,_p,vp,ga,Tp,kp,bp,In,Cp,Sn,wp,$p,yp,We,Ln,Bp,Rt,Fp,Js,Ep,Mp,_a,zp,qp,jp,vo,xp,va,Pp,Ap,On,Bi,Wt,To,Ta,Rn,Np,ka,Dp,Fi,qe,Wn,Ip,ba,Sp,Lp,Hn,Op,Gs,Rp,Wp,Hp,Qn,Qp,Yn,Yp,Up,Vp,ko,Kp,He,Un,Jp,Ht,Gp,Zs,Zp,Xp,Ca,eh,th,oh,bo,nh,wa,sh,rh,Vn,Ei,Qt,Co,$a,Kn,ah,ya,ih,Mi,je,Jn,lh,Gn,dh,Ba,ch,ph,hh,Zn,mh,Xs,fh,uh,gh,Xn,_h,es,vh,Th,kh,wo,bh,Qe,ts,Ch,Yt,wh,er,$h,yh,Fa,Bh,Fh,Eh,$o,Mh,Ea,zh,qh,os,zi,Ut,yo,Ma,ns,jh,za,xh,qi,xe,ss,Ph,qa,Ah,Nh,rs,Dh,tr,Ih,Sh,Lh,as,Oh,is,Rh,Wh,Hh,Bo,Qh,Ye,ls,Yh,Vt,Uh,or,Vh,Kh,ja,Jh,Gh,Zh,Fo,Xh,xa,em,tm,ds,ji,Kt,Eo,Pa,cs,om,Aa,nm,xi,Pe,ps,sm,Na,rm,am,hs,im,nr,lm,dm,cm,ms,pm,fs,hm,mm,fm,Mo,um,Ue,us,gm,Jt,_m,sr,vm,Tm,Da,km,bm,Cm,zo,wm,Ia,$m,ym,gs,Pi,Gt,qo,Sa,_s,Bm,La,Fm,Ai,Ae,vs,Em,Oa,Mm,zm,Ts,qm,rr,jm,xm,Pm,ks,Am,bs,Nm,Dm,Im,jo,Sm,Ve,Cs,Lm,Zt,Om,ar,Rm,Wm,Ra,Hm,Qm,Ym,xo,Um,Wa,Vm,Km,ws,Ni,Xt,Po,Ha,$s,Jm,Qa,Gm,Di,Ne,ys,Zm,eo,Xm,Ya,ef,tf,Ua,of,nf,sf,Bs,rf,ir,af,lf,df,Fs,cf,Es,pf,hf,mf,Ao,ff,Ke,Ms,uf,to,gf,lr,_f,vf,Va,Tf,kf,bf,No,Cf,Ka,wf,$f,zs,Ii;return v=new De({}),ee=new De({}),V=new De({}),Te=new re({props:{name:"class transformers.ConvBertConfig",anchor:"transformers.ConvBertConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"is_encoder_decoder",val:" = False"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 2"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 1"},{name:"bos_token_id",val:" = 0"},{name:"eos_token_id",val:" = 2"},{name:"embedding_size",val:" = 768"},{name:"head_ratio",val:" = 2"},{name:"conv_kernel_size",val:" = 9"},{name:"num_groups",val:" = 1"},{name:"classifier_dropout",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/configuration_convbert.py#L31",parametersDescription:[{anchor:"transformers.ConvBertConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the ConvBERT model. Defines the number of different tokens that can be represented by
the <code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertModel">ConvBertModel</a> or
<a href="/docs/transformers/master/en/model_doc/convbert#transformers.TFConvBertModel">TFConvBertModel</a>.`,name:"vocab_size"},{anchor:"transformers.ConvBertConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.ConvBertConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.ConvBertConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.ConvBertConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (i.e., feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.ConvBertConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>function</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;selu&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.ConvBertConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probabilitiy for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.ConvBertConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.ConvBertConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.ConvBertConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertModel">ConvBertModel</a>
or <a href="/docs/transformers/master/en/model_doc/convbert#transformers.TFConvBertModel">TFConvBertModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.ConvBertConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertModel, ConvBertConfig
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a ConvBERT convbert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = ConvBertConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the convbert-base-uncased style configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Uo=new De({}),Vo=new re({props:{name:"class transformers.ConvBertTokenizer",anchor:"transformers.ConvBertTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/tokenization_convbert.py#L46"}}),Ko=new re({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/tokenization_bert.py#L248",parametersDescription:[{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Go=new re({props:{name:"get_special_tokens_mask",anchor:"transformers.BertTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/tokenization_bert.py#L273",parametersDescription:[{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.BertTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xo=new re({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/bert/tokenization_bert.py#L301",parametersDescription:[{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.BertTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given
sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),en=new Ie({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |,`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),tn=new De({}),on=new re({props:{name:"class transformers.ConvBertTokenizerFast",anchor:"transformers.ConvBertTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"do_lower_case",val:" = True"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/tokenization_convbert_fast.py#L47"}}),rn=new De({}),an=new re({props:{name:"class transformers.ConvBertModel",anchor:"transformers.ConvBertModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_convbert.py#L768",parametersDescription:[{anchor:"transformers.ConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),cn=new re({props:{name:"forward",anchor:"transformers.ConvBertModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_convbert.py#L795",parametersDescription:[{anchor:"transformers.ConvBertModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertTokenizer">transformers.ConvBertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>BaseModelOutputWithCrossAttentions</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithCrossAttentions"
>BaseModelOutputWithCrossAttentions</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),io=new Me({props:{$$slots:{default:[t_]},$$scope:{ctx:H}}}),pn=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertModel
import torch

tokenizer = ConvBertTokenizer.from_pretrained('YituTech/conv-bert-base')
model = ConvBertModel.from_pretrained('YituTech/conv-bert-base')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertModel.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),hn=new De({}),mn=new re({props:{name:"class transformers.ConvBertForMaskedLM",anchor:"transformers.ConvBertForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_convbert.py#L882",parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),un=new re({props:{name:"forward",anchor:"transformers.ConvBertForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_convbert.py#L899",parametersDescription:[{anchor:"transformers.ConvBertForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertTokenizer">transformers.ConvBertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new Me({props:{$$slots:{default:[o_]},$$scope:{ctx:H}}}),gn=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertForMaskedLM
import torch

tokenizer = ConvBertTokenizer.from_pretrained('YituTech/conv-bert-base')
model = ConvBertForMaskedLM.from_pretrained('YituTech/conv-bert-base')

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForMaskedLM.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),_n=new De({}),vn=new re({props:{name:"class transformers.ConvBertForSequenceClassification",anchor:"transformers.ConvBertForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_convbert.py#L992",parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),bn=new re({props:{name:"forward",anchor:"transformers.ConvBertForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_convbert.py#L1003",parametersDescription:[{anchor:"transformers.ConvBertForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertTokenizer">transformers.ConvBertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ho=new Me({props:{$$slots:{default:[n_]},$$scope:{ctx:H}}}),Cn=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertForSequenceClassification
import torch

tokenizer = ConvBertTokenizer.from_pretrained('YituTech/conv-bert-base')
model = ConvBertForSequenceClassification.from_pretrained('YituTech/conv-bert-base')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),wn=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertForSequenceClassification
import torch

tokenizer = ConvBertTokenizer.from_pretrained('YituTech/conv-bert-base')
model = ConvBertForSequenceClassification.from_pretrained('YituTech/conv-bert-base', problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float) # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>) <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$n=new De({}),yn=new re({props:{name:"class transformers.ConvBertForMultipleChoice",anchor:"transformers.ConvBertForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_convbert.py#L1088",parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),En=new re({props:{name:"forward",anchor:"transformers.ConvBertForMultipleChoice.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_convbert.py#L1099",parametersDescription:[{anchor:"transformers.ConvBertForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertTokenizer">transformers.ConvBertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>MultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.MultipleChoiceModelOutput"
>MultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new Me({props:{$$slots:{default:[s_]},$$scope:{ctx:H}}}),Mn=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertForMultipleChoice
import torch

tokenizer = ConvBertTokenizer.from_pretrained('YituTech/conv-bert-base')
model = ConvBertForMultipleChoice.from_pretrained('YituTech/conv-bert-base')

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors='pt', padding=True)
outputs = model(**{k: v.unsqueeze(0) for k,v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForMultipleChoice.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k,v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),zn=new De({}),qn=new re({props:{name:"class transformers.ConvBertForTokenClassification",anchor:"transformers.ConvBertForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_convbert.py#L1182",parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Pn=new re({props:{name:"forward",anchor:"transformers.ConvBertForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_convbert.py#L1197",parametersDescription:[{anchor:"transformers.ConvBertForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertTokenizer">transformers.ConvBertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),go=new Me({props:{$$slots:{default:[r_]},$$scope:{ctx:H}}}),An=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertForTokenClassification
import torch

tokenizer = ConvBertTokenizer.from_pretrained('YituTech/conv-bert-base')
model = ConvBertForTokenClassification.from_pretrained('YituTech/conv-bert-base')

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForTokenClassification.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Nn=new De({}),Dn=new re({props:{name:"class transformers.ConvBertForQuestionAnswering",anchor:"transformers.ConvBertForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_convbert.py#L1274",parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ln=new re({props:{name:"forward",anchor:"transformers.ConvBertForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_convbert.py#L1285",parametersDescription:[{anchor:"transformers.ConvBertForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertTokenizer">transformers.ConvBertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.ConvBertForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:`,name:"attention_mask"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),vo=new Me({props:{$$slots:{default:[a_]},$$scope:{ctx:H}}}),On=new Ie({props:{code:`from transformers import ConvBertTokenizer, ConvBertForQuestionAnswering
import torch

tokenizer = ConvBertTokenizer.from_pretrained('YituTech/conv-bert-base')
model = ConvBertForQuestionAnswering.from_pretrained('YituTech/conv-bert-base')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors='pt')
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, ConvBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = ConvBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Rn=new De({}),Wn=new re({props:{name:"class transformers.TFConvBertModel",anchor:"transformers.TFConvBertModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_tf_convbert.py#L749",parametersDescription:[{anchor:"transformers.TFConvBertModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),ko=new Me({props:{$$slots:{default:[i_]},$$scope:{ctx:H}}}),Un=new re({props:{name:"call",anchor:"transformers.TFConvBertModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_tf_convbert.py#L755",parametersDescription:[{anchor:"transformers.TFConvBertModel.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>TFBaseModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),bo=new Me({props:{$$slots:{default:[l_]},$$scope:{ctx:H}}}),Vn=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertModel
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained('YituTech/conv-bert-base')
model = TFConvBertModel.from_pretrained('YituTech/conv-bert-base')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertModel.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Kn=new De({}),Jn=new re({props:{name:"class transformers.TFConvBertForMaskedLM",anchor:"transformers.TFConvBertForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_tf_convbert.py#L866",parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),wo=new Me({props:{$$slots:{default:[d_]},$$scope:{ctx:H}}}),ts=new re({props:{name:"call",anchor:"transformers.TFConvBertForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_tf_convbert.py#L887",parametersDescription:[{anchor:"transformers.TFConvBertForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>TFMaskedLMOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of non-masked labels, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) \u2014 Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$o=new Me({props:{$$slots:{default:[c_]},$$scope:{ctx:H}}}),os=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForMaskedLM
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained('YituTech/conv-bert-base')
model = TFConvBertForMaskedLM.from_pretrained('YituTech/conv-bert-base')

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForMaskedLM.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ns=new De({}),ss=new re({props:{name:"class transformers.TFConvBertForSequenceClassification",anchor:"transformers.TFConvBertForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_tf_convbert.py#L1004",parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Bo=new Me({props:{$$slots:{default:[p_]},$$scope:{ctx:H}}}),ls=new re({props:{name:"call",anchor:"transformers.TFConvBertForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_tf_convbert.py#L1011",parametersDescription:[{anchor:"transformers.TFConvBertForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>TFSequenceClassifierOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) \u2014 Classification (or regression if config.num_labels==1) scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Fo=new Me({props:{$$slots:{default:[h_]},$$scope:{ctx:H}}}),ds=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForSequenceClassification
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained('YituTech/conv-bert-base')
model = TFConvBertForSequenceClassification.from_pretrained('YituTech/conv-bert-base')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1)) # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)) <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),cs=new De({}),ps=new re({props:{name:"class transformers.TFConvBertForMultipleChoice",anchor:"transformers.TFConvBertForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_tf_convbert.py#L1096",parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Mo=new Me({props:{$$slots:{default:[m_]},$$scope:{ctx:H}}}),us=new re({props:{name:"call",anchor:"transformers.TFConvBertForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_tf_convbert.py#L1118",parametersDescription:[{anchor:"transformers.TFConvBertForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>TFMultipleChoiceModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFMultipleChoiceModelOutput"
>TFMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zo=new Me({props:{$$slots:{default:[f_]},$$scope:{ctx:H}}}),gs=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForMultipleChoice
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained('YituTech/conv-bert-base')
model = TFConvBertForMultipleChoice.from_pretrained('YituTech/conv-bert-base')

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors='tf', padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForMultipleChoice.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),_s=new De({}),vs=new re({props:{name:"class transformers.TFConvBertForTokenClassification",anchor:"transformers.TFConvBertForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_tf_convbert.py#L1244",parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),jo=new Me({props:{$$slots:{default:[u_]},$$scope:{ctx:H}}}),Cs=new re({props:{name:"call",anchor:"transformers.TFConvBertForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_tf_convbert.py#L1258",parametersDescription:[{anchor:"transformers.TFConvBertForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>TFTokenClassifierOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig"
>ConvBertConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(n,)</code>, <em>optional</em>, where n is the number of unmasked labels, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
</li>
<li>
<p><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) \u2014 Classification scores (before SoftMax).</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new Me({props:{$$slots:{default:[g_]},$$scope:{ctx:H}}}),ws=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForTokenClassification
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained('YituTech/conv-bert-base')
model = TFConvBertForTokenClassification.from_pretrained('YituTech/conv-bert-base')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))) # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForTokenClassification.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))) <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$s=new De({}),ys=new re({props:{name:"class transformers.TFConvBertForQuestionAnswering",anchor:"transformers.TFConvBertForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_tf_convbert.py#L1343",parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig">ConvBertConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ao=new Me({props:{$$slots:{default:[__]},$$scope:{ctx:H}}}),Ms=new re({props:{name:"call",anchor:"transformers.TFConvBertForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/convbert/modeling_tf_convbert.py#L1353",parametersDescription:[{anchor:"transformers.TFConvBertForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>Numpy array</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertTokenizer">ConvBertTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
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
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the
sequence are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFConvBertForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the
sequence are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>TFQuestionAnsweringModelOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertConfig"
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
<p><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),No=new Me({props:{$$slots:{default:[v_]},$$scope:{ctx:H}}}),zs=new Ie({props:{code:`from transformers import ConvBertTokenizer, TFConvBertForQuestionAnswering
import tensorflow as tf

tokenizer = ConvBertTokenizer.from_pretrained('YituTech/conv-bert-base')
model = TFConvBertForQuestionAnswering.from_pretrained('YituTech/conv-bert-base')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors='tf')
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = ' '.join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0]+1]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> ConvBertTokenizer, TFConvBertForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = ConvBertTokenizer.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFConvBertForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;YituTech/conv-bert-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&#x27; &#x27;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]+<span class="hljs-number">1</span>])`}}),{c(){p=r("meta"),F=l(),f=r("h1"),g=r("a"),T=r("span"),b(v.$$.fragment),_=l(),E=r("span"),de=n("ConvBERT"),K=l(),M=r("h2"),X=r("a"),S=r("span"),b(ee.$$.fragment),ce=l(),L=r("span"),pe=n("Overview"),ae=l(),U=r("p"),A=n("The ConvBERT model was proposed in "),te=r("a"),J=n("ConvBERT: Improving BERT with Span-based Dynamic Convolution"),z=n(` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),j=l(),ne=r("p"),Q=n("The abstract from the paper is the following:"),ie=l(),se=r("p"),O=r("em"),he=n(`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),le=l(),q=r("p"),me=n("ConvBERT training tips are similar to those of BERT."),R=l(),G=r("p"),fe=n("This model was contributed by "),I=r("a"),ue=n("abhishek"),ge=n(`. The original implementation can be found
here: `),x=r("a"),_e=n("https://github.com/yitu-opensource/ConvBert"),W=l(),Z=r("h2"),c=r("a"),k=r("span"),b(V.$$.fragment),$e=l(),Ce=r("span"),N=n("ConvBertConfig"),we=l(),oe=r("div"),b(Te.$$.fragment),D=l(),P=r("p"),ye=n("This is the configuration class to store the configuration of a "),be=r("a"),Y=n("ConvBertModel"),Be=n(`. It is used to
instantiate an ConvBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ConvBERT `),ke=r("a"),ve=n("conv-bert-base"),Fe=n(` architecture. Configuration objects inherit from
`),As=r("a"),Cl=n("PretrainedConfig"),wl=n(` and can be used to control the model outputs. Read the documentation from
`),Ns=r("a"),$l=n("PretrainedConfig"),yl=n(" for more information."),Bl=l(),Er=r("p"),Fl=n("Example:"),El=l(),b(Yo.$$.fragment),ci=l(),Bt=r("h2"),oo=r("a"),Mr=r("span"),b(Uo.$$.fragment),Ml=l(),zr=r("span"),zl=n("ConvBertTokenizer"),pi=l(),ze=r("div"),b(Vo.$$.fragment),ql=l(),ct=r("p"),jl=n("Construct a ConvBERT tokenizer. "),Ds=r("a"),xl=n("ConvBertTokenizer"),Pl=n(` is identical to
`),Is=r("a"),Al=n("BertTokenizer"),Nl=n(` and runs end-to-end tokenization: punctuation splitting and wordpiece. Refer
to superclass `),Ss=r("a"),Dl=n("BertTokenizer"),Il=n(" for usage examples and documentation concerning parameters."),Sl=l(),mt=r("div"),b(Ko.$$.fragment),Ll=l(),qr=r("p"),Ol=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Rl=l(),Jo=r("ul"),Ls=r("li"),Wl=n("single sequence: "),jr=r("code"),Hl=n("[CLS] X [SEP]"),Ql=l(),Os=r("li"),Yl=n("pair of sequences: "),xr=r("code"),Ul=n("[CLS] A [SEP] B [SEP]"),Vl=l(),no=r("div"),b(Go.$$.fragment),Kl=l(),Zo=r("p"),Jl=n(`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Pr=r("code"),Gl=n("prepare_for_model"),Zl=n(" method."),Xl=l(),ot=r("div"),b(Xo.$$.fragment),ed=l(),Ar=r("p"),td=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),od=l(),b(en.$$.fragment),nd=l(),Ft=r("p"),sd=n("If "),Nr=r("code"),rd=n("token_ids_1"),ad=n(" is "),Dr=r("code"),id=n("None"),ld=n(", this method only returns the first portion of the mask (0s)."),dd=l(),Ir=r("div"),hi=l(),Et=r("h2"),so=r("a"),Sr=r("span"),b(tn.$$.fragment),cd=l(),Lr=r("span"),pd=n("ConvBertTokenizerFast"),mi=l(),Ge=r("div"),b(on.$$.fragment),hd=l(),nn=r("p"),md=n("Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),Or=r("em"),fd=n("tokenizers"),ud=n(" library)."),gd=l(),ro=r("p"),Rs=r("a"),_d=n("ConvBertTokenizerFast"),vd=n(" is identical to "),Ws=r("a"),Td=n("BertTokenizerFast"),kd=n(` and runs
end-to-end tokenization: punctuation splitting and wordpiece.`),bd=l(),sn=r("p"),Cd=n("Refer to superclass "),Hs=r("a"),wd=n("BertTokenizerFast"),$d=n(` for usage examples and documentation concerning
parameters.`),fi=l(),Mt=r("h2"),ao=r("a"),Rr=r("span"),b(rn.$$.fragment),yd=l(),Wr=r("span"),Bd=n("ConvBertModel"),ui=l(),pt=r("div"),b(an.$$.fragment),Fd=l(),ln=r("p"),Ed=n(`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),dn=r("a"),Md=n("torch.nn.Module"),zd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),qd=l(),Se=r("div"),b(cn.$$.fragment),jd=l(),zt=r("p"),xd=n("The "),Qs=r("a"),Pd=n("ConvBertModel"),Ad=n(" forward method, overrides the "),Hr=r("code"),Nd=n("__call__"),Dd=n(" special method."),Id=l(),b(io.$$.fragment),Sd=l(),Qr=r("p"),Ld=n("Example:"),Od=l(),b(pn.$$.fragment),gi=l(),qt=r("h2"),lo=r("a"),Yr=r("span"),b(hn.$$.fragment),Rd=l(),Ur=r("span"),Wd=n("ConvBertForMaskedLM"),_i=l(),ht=r("div"),b(mn.$$.fragment),Hd=l(),jt=r("p"),Qd=n("ConvBERT Model with a "),Vr=r("em"),Yd=n("language modeling"),Ud=n(` head on top.
This model is a PyTorch `),fn=r("a"),Vd=n("torch.nn.Module"),Kd=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Jd=l(),Le=r("div"),b(un.$$.fragment),Gd=l(),xt=r("p"),Zd=n("The "),Ys=r("a"),Xd=n("ConvBertForMaskedLM"),ec=n(" forward method, overrides the "),Kr=r("code"),tc=n("__call__"),oc=n(" special method."),nc=l(),b(co.$$.fragment),sc=l(),Jr=r("p"),rc=n("Example:"),ac=l(),b(gn.$$.fragment),vi=l(),Pt=r("h2"),po=r("a"),Gr=r("span"),b(_n.$$.fragment),ic=l(),Zr=r("span"),lc=n("ConvBertForSequenceClassification"),Ti=l(),Ze=r("div"),b(vn.$$.fragment),dc=l(),Xr=r("p"),cc=n(`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),pc=l(),Tn=r("p"),hc=n("This model is a PyTorch "),kn=r("a"),mc=n("torch.nn.Module"),fc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),uc=l(),Ee=r("div"),b(bn.$$.fragment),gc=l(),At=r("p"),_c=n("The "),Us=r("a"),vc=n("ConvBertForSequenceClassification"),Tc=n(" forward method, overrides the "),ea=r("code"),kc=n("__call__"),bc=n(" special method."),Cc=l(),b(ho.$$.fragment),wc=l(),ta=r("p"),$c=n("Example of single-label classification:"),yc=l(),b(Cn.$$.fragment),Bc=l(),oa=r("p"),Fc=n("Example of multi-label classification:"),Ec=l(),b(wn.$$.fragment),ki=l(),Nt=r("h2"),mo=r("a"),na=r("span"),b($n.$$.fragment),Mc=l(),sa=r("span"),zc=n("ConvBertForMultipleChoice"),bi=l(),Xe=r("div"),b(yn.$$.fragment),qc=l(),ra=r("p"),jc=n(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),xc=l(),Bn=r("p"),Pc=n("This model is a PyTorch "),Fn=r("a"),Ac=n("torch.nn.Module"),Nc=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Dc=l(),Oe=r("div"),b(En.$$.fragment),Ic=l(),Dt=r("p"),Sc=n("The "),Vs=r("a"),Lc=n("ConvBertForMultipleChoice"),Oc=n(" forward method, overrides the "),aa=r("code"),Rc=n("__call__"),Wc=n(" special method."),Hc=l(),b(fo.$$.fragment),Qc=l(),ia=r("p"),Yc=n("Example:"),Uc=l(),b(Mn.$$.fragment),Ci=l(),It=r("h2"),uo=r("a"),la=r("span"),b(zn.$$.fragment),Vc=l(),da=r("span"),Kc=n("ConvBertForTokenClassification"),wi=l(),et=r("div"),b(qn.$$.fragment),Jc=l(),ca=r("p"),Gc=n(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Zc=l(),jn=r("p"),Xc=n("This model is a PyTorch "),xn=r("a"),ep=n("torch.nn.Module"),tp=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),op=l(),Re=r("div"),b(Pn.$$.fragment),np=l(),St=r("p"),sp=n("The "),Ks=r("a"),rp=n("ConvBertForTokenClassification"),ap=n(" forward method, overrides the "),pa=r("code"),ip=n("__call__"),lp=n(" special method."),dp=l(),b(go.$$.fragment),cp=l(),ha=r("p"),pp=n("Example:"),hp=l(),b(An.$$.fragment),$i=l(),Lt=r("h2"),_o=r("a"),ma=r("span"),b(Nn.$$.fragment),mp=l(),fa=r("span"),fp=n("ConvBertForQuestionAnswering"),yi=l(),tt=r("div"),b(Dn.$$.fragment),up=l(),Ot=r("p"),gp=n(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ua=r("em"),_p=n("span start logits"),vp=n(" and "),ga=r("em"),Tp=n("span end logits"),kp=n(")."),bp=l(),In=r("p"),Cp=n("This model is a PyTorch "),Sn=r("a"),wp=n("torch.nn.Module"),$p=n(` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),yp=l(),We=r("div"),b(Ln.$$.fragment),Bp=l(),Rt=r("p"),Fp=n("The "),Js=r("a"),Ep=n("ConvBertForQuestionAnswering"),Mp=n(" forward method, overrides the "),_a=r("code"),zp=n("__call__"),qp=n(" special method."),jp=l(),b(vo.$$.fragment),xp=l(),va=r("p"),Pp=n("Example:"),Ap=l(),b(On.$$.fragment),Bi=l(),Wt=r("h2"),To=r("a"),Ta=r("span"),b(Rn.$$.fragment),Np=l(),ka=r("span"),Dp=n("TFConvBertModel"),Fi=l(),qe=r("div"),b(Wn.$$.fragment),Ip=l(),ba=r("p"),Sp=n("The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),Lp=l(),Hn=r("p"),Op=n("This model inherits from "),Gs=r("a"),Rp=n("TFPreTrainedModel"),Wp=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Hp=l(),Qn=r("p"),Qp=n("This model is also a "),Yn=r("a"),Yp=n("tf.keras.Model"),Up=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Vp=l(),b(ko.$$.fragment),Kp=l(),He=r("div"),b(Un.$$.fragment),Jp=l(),Ht=r("p"),Gp=n("The "),Zs=r("a"),Zp=n("TFConvBertModel"),Xp=n(" forward method, overrides the "),Ca=r("code"),eh=n("__call__"),th=n(" special method."),oh=l(),b(bo.$$.fragment),nh=l(),wa=r("p"),sh=n("Example:"),rh=l(),b(Vn.$$.fragment),Ei=l(),Qt=r("h2"),Co=r("a"),$a=r("span"),b(Kn.$$.fragment),ah=l(),ya=r("span"),ih=n("TFConvBertForMaskedLM"),Mi=l(),je=r("div"),b(Jn.$$.fragment),lh=l(),Gn=r("p"),dh=n("ConvBERT Model with a "),Ba=r("em"),ch=n("language modeling"),ph=n(" head on top."),hh=l(),Zn=r("p"),mh=n("This model inherits from "),Xs=r("a"),fh=n("TFPreTrainedModel"),uh=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),gh=l(),Xn=r("p"),_h=n("This model is also a "),es=r("a"),vh=n("tf.keras.Model"),Th=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),kh=l(),b(wo.$$.fragment),bh=l(),Qe=r("div"),b(ts.$$.fragment),Ch=l(),Yt=r("p"),wh=n("The "),er=r("a"),$h=n("TFConvBertForMaskedLM"),yh=n(" forward method, overrides the "),Fa=r("code"),Bh=n("__call__"),Fh=n(" special method."),Eh=l(),b($o.$$.fragment),Mh=l(),Ea=r("p"),zh=n("Example:"),qh=l(),b(os.$$.fragment),zi=l(),Ut=r("h2"),yo=r("a"),Ma=r("span"),b(ns.$$.fragment),jh=l(),za=r("span"),xh=n("TFConvBertForSequenceClassification"),qi=l(),xe=r("div"),b(ss.$$.fragment),Ph=l(),qa=r("p"),Ah=n("ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),Nh=l(),rs=r("p"),Dh=n("This model inherits from "),tr=r("a"),Ih=n("TFPreTrainedModel"),Sh=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Lh=l(),as=r("p"),Oh=n("This model is also a "),is=r("a"),Rh=n("tf.keras.Model"),Wh=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Hh=l(),b(Bo.$$.fragment),Qh=l(),Ye=r("div"),b(ls.$$.fragment),Yh=l(),Vt=r("p"),Uh=n("The "),or=r("a"),Vh=n("TFConvBertForSequenceClassification"),Kh=n(" forward method, overrides the "),ja=r("code"),Jh=n("__call__"),Gh=n(" special method."),Zh=l(),b(Fo.$$.fragment),Xh=l(),xa=r("p"),em=n("Example:"),tm=l(),b(ds.$$.fragment),ji=l(),Kt=r("h2"),Eo=r("a"),Pa=r("span"),b(cs.$$.fragment),om=l(),Aa=r("span"),nm=n("TFConvBertForMultipleChoice"),xi=l(),Pe=r("div"),b(ps.$$.fragment),sm=l(),Na=r("p"),rm=n(`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),am=l(),hs=r("p"),im=n("This model inherits from "),nr=r("a"),lm=n("TFPreTrainedModel"),dm=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),cm=l(),ms=r("p"),pm=n("This model is also a "),fs=r("a"),hm=n("tf.keras.Model"),mm=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),fm=l(),b(Mo.$$.fragment),um=l(),Ue=r("div"),b(us.$$.fragment),gm=l(),Jt=r("p"),_m=n("The "),sr=r("a"),vm=n("TFConvBertForMultipleChoice"),Tm=n(" forward method, overrides the "),Da=r("code"),km=n("__call__"),bm=n(" special method."),Cm=l(),b(zo.$$.fragment),wm=l(),Ia=r("p"),$m=n("Example:"),ym=l(),b(gs.$$.fragment),Pi=l(),Gt=r("h2"),qo=r("a"),Sa=r("span"),b(_s.$$.fragment),Bm=l(),La=r("span"),Fm=n("TFConvBertForTokenClassification"),Ai=l(),Ae=r("div"),b(vs.$$.fragment),Em=l(),Oa=r("p"),Mm=n(`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),zm=l(),Ts=r("p"),qm=n("This model inherits from "),rr=r("a"),jm=n("TFPreTrainedModel"),xm=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Pm=l(),ks=r("p"),Am=n("This model is also a "),bs=r("a"),Nm=n("tf.keras.Model"),Dm=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Im=l(),b(jo.$$.fragment),Sm=l(),Ve=r("div"),b(Cs.$$.fragment),Lm=l(),Zt=r("p"),Om=n("The "),ar=r("a"),Rm=n("TFConvBertForTokenClassification"),Wm=n(" forward method, overrides the "),Ra=r("code"),Hm=n("__call__"),Qm=n(" special method."),Ym=l(),b(xo.$$.fragment),Um=l(),Wa=r("p"),Vm=n("Example:"),Km=l(),b(ws.$$.fragment),Ni=l(),Xt=r("h2"),Po=r("a"),Ha=r("span"),b($s.$$.fragment),Jm=l(),Qa=r("span"),Gm=n("TFConvBertForQuestionAnswering"),Di=l(),Ne=r("div"),b(ys.$$.fragment),Zm=l(),eo=r("p"),Xm=n(`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ya=r("em"),ef=n("span start logits"),tf=n(" and "),Ua=r("em"),of=n("span end logits"),nf=n(")."),sf=l(),Bs=r("p"),rf=n("This model inherits from "),ir=r("a"),af=n("TFPreTrainedModel"),lf=n(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),df=l(),Fs=r("p"),cf=n("This model is also a "),Es=r("a"),pf=n("tf.keras.Model"),hf=n(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),mf=l(),b(Ao.$$.fragment),ff=l(),Ke=r("div"),b(Ms.$$.fragment),uf=l(),to=r("p"),gf=n("The "),lr=r("a"),_f=n("TFConvBertForQuestionAnswering"),vf=n(" forward method, overrides the "),Va=r("code"),Tf=n("__call__"),kf=n(" special method."),bf=l(),b(No.$$.fragment),Cf=l(),Ka=r("p"),wf=n("Example:"),$f=l(),b(zs.$$.fragment),this.h()},l(o){const u=e_('[data-svelte="svelte-1phssyn"]',document.head);p=a(u,"META",{name:!0,content:!0}),u.forEach(t),F=d(o),f=a(o,"H1",{class:!0});var qs=i(f);g=a(qs,"A",{id:!0,class:!0,href:!0});var Ja=i(g);T=a(Ja,"SPAN",{});var Ga=i(T);C(v.$$.fragment,Ga),Ga.forEach(t),Ja.forEach(t),_=d(qs),E=a(qs,"SPAN",{});var Za=i(E);de=s(Za,"ConvBERT"),Za.forEach(t),qs.forEach(t),K=d(o),M=a(o,"H2",{class:!0});var js=i(M);X=a(js,"A",{id:!0,class:!0,href:!0});var Xa=i(X);S=a(Xa,"SPAN",{});var ei=i(S);C(ee.$$.fragment,ei),ei.forEach(t),Xa.forEach(t),ce=d(js),L=a(js,"SPAN",{});var ti=i(L);pe=s(ti,"Overview"),ti.forEach(t),js.forEach(t),ae=d(o),U=a(o,"P",{});var xs=i(U);A=s(xs,"The ConvBERT model was proposed in "),te=a(xs,"A",{href:!0,rel:!0});var oi=i(te);J=s(oi,"ConvBERT: Improving BERT with Span-based Dynamic Convolution"),oi.forEach(t),z=s(xs,` by Zihang Jiang, Weihao Yu, Daquan Zhou, Yunpeng Chen, Jiashi Feng, Shuicheng
Yan.`),xs.forEach(t),j=d(o),ne=a(o,"P",{});var ni=i(ne);Q=s(ni,"The abstract from the paper is the following:"),ni.forEach(t),ie=d(o),se=a(o,"P",{});var si=i(se);O=a(si,"EM",{});var ri=i(O);he=s(ri,`Pre-trained language models like BERT and its variants have recently achieved impressive performance in various
natural language understanding tasks. However, BERT heavily relies on the global self-attention block and thus suffers
large memory footprint and computation cost. Although all its attention heads query on the whole input sequence for
generating the attention map from a global perspective, we observe some heads only need to learn local dependencies,
which means the existence of computation redundancy. We therefore propose a novel span-based dynamic convolution to
replace these self-attention heads to directly model local dependencies. The novel convolution heads, together with the
rest self-attention heads, form a new mixed attention block that is more efficient at both global and local context
learning. We equip BERT with this mixed attention design and build a ConvBERT model. Experiments have shown that
ConvBERT significantly outperforms BERT and its variants in various downstream tasks, with lower training cost and
fewer model parameters. Remarkably, ConvBERTbase model achieves 86.4 GLUE score, 0.7 higher than ELECTRAbase, while
using less than 1/4 training cost. Code and pre-trained models will be released.`),ri.forEach(t),si.forEach(t),le=d(o),q=a(o,"P",{});var ai=i(q);me=s(ai,"ConvBERT training tips are similar to those of BERT."),ai.forEach(t),R=d(o),G=a(o,"P",{});var Do=i(G);fe=s(Do,"This model was contributed by "),I=a(Do,"A",{href:!0,rel:!0});var ii=i(I);ue=s(ii,"abhishek"),ii.forEach(t),ge=s(Do,`. The original implementation can be found
here: `),x=a(Do,"A",{href:!0,rel:!0});var li=i(x);_e=s(li,"https://github.com/yitu-opensource/ConvBert"),li.forEach(t),Do.forEach(t),W=d(o),Z=a(o,"H2",{class:!0});var Ps=i(Z);c=a(Ps,"A",{id:!0,class:!0,href:!0});var Ff=i(c);k=a(Ff,"SPAN",{});var Ef=i(k);C(V.$$.fragment,Ef),Ef.forEach(t),Ff.forEach(t),$e=d(Ps),Ce=a(Ps,"SPAN",{});var Mf=i(Ce);N=s(Mf,"ConvBertConfig"),Mf.forEach(t),Ps.forEach(t),we=d(o),oe=a(o,"DIV",{class:!0});var Io=i(oe);C(Te.$$.fragment,Io),D=d(Io),P=a(Io,"P",{});var ft=i(P);ye=s(ft,"This is the configuration class to store the configuration of a "),be=a(ft,"A",{href:!0});var zf=i(be);Y=s(zf,"ConvBertModel"),zf.forEach(t),Be=s(ft,`. It is used to
instantiate an ConvBERT model according to the specified arguments, defining the model architecture. Instantiating
a configuration with the defaults will yield a similar configuration to that of the ConvBERT `),ke=a(ft,"A",{href:!0,rel:!0});var qf=i(ke);ve=s(qf,"conv-bert-base"),qf.forEach(t),Fe=s(ft,` architecture. Configuration objects inherit from
`),As=a(ft,"A",{href:!0});var jf=i(As);Cl=s(jf,"PretrainedConfig"),jf.forEach(t),wl=s(ft,` and can be used to control the model outputs. Read the documentation from
`),Ns=a(ft,"A",{href:!0});var xf=i(Ns);$l=s(xf,"PretrainedConfig"),xf.forEach(t),yl=s(ft," for more information."),ft.forEach(t),Bl=d(Io),Er=a(Io,"P",{});var Pf=i(Er);Fl=s(Pf,"Example:"),Pf.forEach(t),El=d(Io),C(Yo.$$.fragment,Io),Io.forEach(t),ci=d(o),Bt=a(o,"H2",{class:!0});var Si=i(Bt);oo=a(Si,"A",{id:!0,class:!0,href:!0});var Af=i(oo);Mr=a(Af,"SPAN",{});var Nf=i(Mr);C(Uo.$$.fragment,Nf),Nf.forEach(t),Af.forEach(t),Ml=d(Si),zr=a(Si,"SPAN",{});var Df=i(zr);zl=s(Df,"ConvBertTokenizer"),Df.forEach(t),Si.forEach(t),pi=d(o),ze=a(o,"DIV",{class:!0});var nt=i(ze);C(Vo.$$.fragment,nt),ql=d(nt),ct=a(nt,"P",{});var So=i(ct);jl=s(So,"Construct a ConvBERT tokenizer. "),Ds=a(So,"A",{href:!0});var If=i(Ds);xl=s(If,"ConvBertTokenizer"),If.forEach(t),Pl=s(So,` is identical to
`),Is=a(So,"A",{href:!0});var Sf=i(Is);Al=s(Sf,"BertTokenizer"),Sf.forEach(t),Nl=s(So,` and runs end-to-end tokenization: punctuation splitting and wordpiece. Refer
to superclass `),Ss=a(So,"A",{href:!0});var Lf=i(Ss);Dl=s(Lf,"BertTokenizer"),Lf.forEach(t),Il=s(So," for usage examples and documentation concerning parameters."),So.forEach(t),Sl=d(nt),mt=a(nt,"DIV",{class:!0});var dr=i(mt);C(Ko.$$.fragment,dr),Ll=d(dr),qr=a(dr,"P",{});var Of=i(qr);Ol=s(Of,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A BERT sequence has the following format:`),Of.forEach(t),Rl=d(dr),Jo=a(dr,"UL",{});var Li=i(Jo);Ls=a(Li,"LI",{});var yf=i(Ls);Wl=s(yf,"single sequence: "),jr=a(yf,"CODE",{});var Rf=i(jr);Hl=s(Rf,"[CLS] X [SEP]"),Rf.forEach(t),yf.forEach(t),Ql=d(Li),Os=a(Li,"LI",{});var Bf=i(Os);Yl=s(Bf,"pair of sequences: "),xr=a(Bf,"CODE",{});var Wf=i(xr);Ul=s(Wf,"[CLS] A [SEP] B [SEP]"),Wf.forEach(t),Bf.forEach(t),Li.forEach(t),dr.forEach(t),Vl=d(nt),no=a(nt,"DIV",{class:!0});var Oi=i(no);C(Go.$$.fragment,Oi),Kl=d(Oi),Zo=a(Oi,"P",{});var Ri=i(Zo);Jl=s(Ri,`Retrieve sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),Pr=a(Ri,"CODE",{});var Hf=i(Pr);Gl=s(Hf,"prepare_for_model"),Hf.forEach(t),Zl=s(Ri," method."),Ri.forEach(t),Oi.forEach(t),Xl=d(nt),ot=a(nt,"DIV",{class:!0});var Lo=i(ot);C(Xo.$$.fragment,Lo),ed=d(Lo),Ar=a(Lo,"P",{});var Qf=i(Ar);td=s(Qf,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A BERT sequence
pair mask has the following format:`),Qf.forEach(t),od=d(Lo),C(en.$$.fragment,Lo),nd=d(Lo),Ft=a(Lo,"P",{});var cr=i(Ft);sd=s(cr,"If "),Nr=a(cr,"CODE",{});var Yf=i(Nr);rd=s(Yf,"token_ids_1"),Yf.forEach(t),ad=s(cr," is "),Dr=a(cr,"CODE",{});var Uf=i(Dr);id=s(Uf,"None"),Uf.forEach(t),ld=s(cr,", this method only returns the first portion of the mask (0s)."),cr.forEach(t),Lo.forEach(t),dd=d(nt),Ir=a(nt,"DIV",{class:!0}),i(Ir).forEach(t),nt.forEach(t),hi=d(o),Et=a(o,"H2",{class:!0});var Wi=i(Et);so=a(Wi,"A",{id:!0,class:!0,href:!0});var Vf=i(so);Sr=a(Vf,"SPAN",{});var Kf=i(Sr);C(tn.$$.fragment,Kf),Kf.forEach(t),Vf.forEach(t),cd=d(Wi),Lr=a(Wi,"SPAN",{});var Jf=i(Lr);pd=s(Jf,"ConvBertTokenizerFast"),Jf.forEach(t),Wi.forEach(t),mi=d(o),Ge=a(o,"DIV",{class:!0});var Oo=i(Ge);C(on.$$.fragment,Oo),hd=d(Oo),nn=a(Oo,"P",{});var Hi=i(nn);md=s(Hi,"Construct a \u201Cfast\u201D ConvBERT tokenizer (backed by HuggingFace\u2019s "),Or=a(Hi,"EM",{});var Gf=i(Or);fd=s(Gf,"tokenizers"),Gf.forEach(t),ud=s(Hi," library)."),Hi.forEach(t),gd=d(Oo),ro=a(Oo,"P",{});var di=i(ro);Rs=a(di,"A",{href:!0});var Zf=i(Rs);_d=s(Zf,"ConvBertTokenizerFast"),Zf.forEach(t),vd=s(di," is identical to "),Ws=a(di,"A",{href:!0});var Xf=i(Ws);Td=s(Xf,"BertTokenizerFast"),Xf.forEach(t),kd=s(di,` and runs
end-to-end tokenization: punctuation splitting and wordpiece.`),di.forEach(t),bd=d(Oo),sn=a(Oo,"P",{});var Qi=i(sn);Cd=s(Qi,"Refer to superclass "),Hs=a(Qi,"A",{href:!0});var eu=i(Hs);wd=s(eu,"BertTokenizerFast"),eu.forEach(t),$d=s(Qi,` for usage examples and documentation concerning
parameters.`),Qi.forEach(t),Oo.forEach(t),fi=d(o),Mt=a(o,"H2",{class:!0});var Yi=i(Mt);ao=a(Yi,"A",{id:!0,class:!0,href:!0});var tu=i(ao);Rr=a(tu,"SPAN",{});var ou=i(Rr);C(rn.$$.fragment,ou),ou.forEach(t),tu.forEach(t),yd=d(Yi),Wr=a(Yi,"SPAN",{});var nu=i(Wr);Bd=s(nu,"ConvBertModel"),nu.forEach(t),Yi.forEach(t),ui=d(o),pt=a(o,"DIV",{class:!0});var pr=i(pt);C(an.$$.fragment,pr),Fd=d(pr),ln=a(pr,"P",{});var Ui=i(ln);Ed=s(Ui,`The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top.
This model is a PyTorch `),dn=a(Ui,"A",{href:!0,rel:!0});var su=i(dn);Md=s(su,"torch.nn.Module"),su.forEach(t),zd=s(Ui,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ui.forEach(t),qd=d(pr),Se=a(pr,"DIV",{class:!0});var ut=i(Se);C(cn.$$.fragment,ut),jd=d(ut),zt=a(ut,"P",{});var hr=i(zt);xd=s(hr,"The "),Qs=a(hr,"A",{href:!0});var ru=i(Qs);Pd=s(ru,"ConvBertModel"),ru.forEach(t),Ad=s(hr," forward method, overrides the "),Hr=a(hr,"CODE",{});var au=i(Hr);Nd=s(au,"__call__"),au.forEach(t),Dd=s(hr," special method."),hr.forEach(t),Id=d(ut),C(io.$$.fragment,ut),Sd=d(ut),Qr=a(ut,"P",{});var iu=i(Qr);Ld=s(iu,"Example:"),iu.forEach(t),Od=d(ut),C(pn.$$.fragment,ut),ut.forEach(t),pr.forEach(t),gi=d(o),qt=a(o,"H2",{class:!0});var Vi=i(qt);lo=a(Vi,"A",{id:!0,class:!0,href:!0});var lu=i(lo);Yr=a(lu,"SPAN",{});var du=i(Yr);C(hn.$$.fragment,du),du.forEach(t),lu.forEach(t),Rd=d(Vi),Ur=a(Vi,"SPAN",{});var cu=i(Ur);Wd=s(cu,"ConvBertForMaskedLM"),cu.forEach(t),Vi.forEach(t),_i=d(o),ht=a(o,"DIV",{class:!0});var mr=i(ht);C(mn.$$.fragment,mr),Hd=d(mr),jt=a(mr,"P",{});var fr=i(jt);Qd=s(fr,"ConvBERT Model with a "),Vr=a(fr,"EM",{});var pu=i(Vr);Yd=s(pu,"language modeling"),pu.forEach(t),Ud=s(fr,` head on top.
This model is a PyTorch `),fn=a(fr,"A",{href:!0,rel:!0});var hu=i(fn);Vd=s(hu,"torch.nn.Module"),hu.forEach(t),Kd=s(fr,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),fr.forEach(t),Jd=d(mr),Le=a(mr,"DIV",{class:!0});var gt=i(Le);C(un.$$.fragment,gt),Gd=d(gt),xt=a(gt,"P",{});var ur=i(xt);Zd=s(ur,"The "),Ys=a(ur,"A",{href:!0});var mu=i(Ys);Xd=s(mu,"ConvBertForMaskedLM"),mu.forEach(t),ec=s(ur," forward method, overrides the "),Kr=a(ur,"CODE",{});var fu=i(Kr);tc=s(fu,"__call__"),fu.forEach(t),oc=s(ur," special method."),ur.forEach(t),nc=d(gt),C(co.$$.fragment,gt),sc=d(gt),Jr=a(gt,"P",{});var uu=i(Jr);rc=s(uu,"Example:"),uu.forEach(t),ac=d(gt),C(gn.$$.fragment,gt),gt.forEach(t),mr.forEach(t),vi=d(o),Pt=a(o,"H2",{class:!0});var Ki=i(Pt);po=a(Ki,"A",{id:!0,class:!0,href:!0});var gu=i(po);Gr=a(gu,"SPAN",{});var _u=i(Gr);C(_n.$$.fragment,_u),_u.forEach(t),gu.forEach(t),ic=d(Ki),Zr=a(Ki,"SPAN",{});var vu=i(Zr);lc=s(vu,"ConvBertForSequenceClassification"),vu.forEach(t),Ki.forEach(t),Ti=d(o),Ze=a(o,"DIV",{class:!0});var Ro=i(Ze);C(vn.$$.fragment,Ro),dc=d(Ro),Xr=a(Ro,"P",{});var Tu=i(Xr);cc=s(Tu,`ConvBERT Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Tu.forEach(t),pc=d(Ro),Tn=a(Ro,"P",{});var Ji=i(Tn);hc=s(Ji,"This model is a PyTorch "),kn=a(Ji,"A",{href:!0,rel:!0});var ku=i(kn);mc=s(ku,"torch.nn.Module"),ku.forEach(t),fc=s(Ji,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Ji.forEach(t),uc=d(Ro),Ee=a(Ro,"DIV",{class:!0});var Je=i(Ee);C(bn.$$.fragment,Je),gc=d(Je),At=a(Je,"P",{});var gr=i(At);_c=s(gr,"The "),Us=a(gr,"A",{href:!0});var bu=i(Us);vc=s(bu,"ConvBertForSequenceClassification"),bu.forEach(t),Tc=s(gr," forward method, overrides the "),ea=a(gr,"CODE",{});var Cu=i(ea);kc=s(Cu,"__call__"),Cu.forEach(t),bc=s(gr," special method."),gr.forEach(t),Cc=d(Je),C(ho.$$.fragment,Je),wc=d(Je),ta=a(Je,"P",{});var wu=i(ta);$c=s(wu,"Example of single-label classification:"),wu.forEach(t),yc=d(Je),C(Cn.$$.fragment,Je),Bc=d(Je),oa=a(Je,"P",{});var $u=i(oa);Fc=s($u,"Example of multi-label classification:"),$u.forEach(t),Ec=d(Je),C(wn.$$.fragment,Je),Je.forEach(t),Ro.forEach(t),ki=d(o),Nt=a(o,"H2",{class:!0});var Gi=i(Nt);mo=a(Gi,"A",{id:!0,class:!0,href:!0});var yu=i(mo);na=a(yu,"SPAN",{});var Bu=i(na);C($n.$$.fragment,Bu),Bu.forEach(t),yu.forEach(t),Mc=d(Gi),sa=a(Gi,"SPAN",{});var Fu=i(sa);zc=s(Fu,"ConvBertForMultipleChoice"),Fu.forEach(t),Gi.forEach(t),bi=d(o),Xe=a(o,"DIV",{class:!0});var Wo=i(Xe);C(yn.$$.fragment,Wo),qc=d(Wo),ra=a(Wo,"P",{});var Eu=i(ra);jc=s(Eu,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Eu.forEach(t),xc=d(Wo),Bn=a(Wo,"P",{});var Zi=i(Bn);Pc=s(Zi,"This model is a PyTorch "),Fn=a(Zi,"A",{href:!0,rel:!0});var Mu=i(Fn);Ac=s(Mu,"torch.nn.Module"),Mu.forEach(t),Nc=s(Zi,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),Zi.forEach(t),Dc=d(Wo),Oe=a(Wo,"DIV",{class:!0});var _t=i(Oe);C(En.$$.fragment,_t),Ic=d(_t),Dt=a(_t,"P",{});var _r=i(Dt);Sc=s(_r,"The "),Vs=a(_r,"A",{href:!0});var zu=i(Vs);Lc=s(zu,"ConvBertForMultipleChoice"),zu.forEach(t),Oc=s(_r," forward method, overrides the "),aa=a(_r,"CODE",{});var qu=i(aa);Rc=s(qu,"__call__"),qu.forEach(t),Wc=s(_r," special method."),_r.forEach(t),Hc=d(_t),C(fo.$$.fragment,_t),Qc=d(_t),ia=a(_t,"P",{});var ju=i(ia);Yc=s(ju,"Example:"),ju.forEach(t),Uc=d(_t),C(Mn.$$.fragment,_t),_t.forEach(t),Wo.forEach(t),Ci=d(o),It=a(o,"H2",{class:!0});var Xi=i(It);uo=a(Xi,"A",{id:!0,class:!0,href:!0});var xu=i(uo);la=a(xu,"SPAN",{});var Pu=i(la);C(zn.$$.fragment,Pu),Pu.forEach(t),xu.forEach(t),Vc=d(Xi),da=a(Xi,"SPAN",{});var Au=i(da);Kc=s(Au,"ConvBertForTokenClassification"),Au.forEach(t),Xi.forEach(t),wi=d(o),et=a(o,"DIV",{class:!0});var Ho=i(et);C(qn.$$.fragment,Ho),Jc=d(Ho),ca=a(Ho,"P",{});var Nu=i(ca);Gc=s(Nu,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Nu.forEach(t),Zc=d(Ho),jn=a(Ho,"P",{});var el=i(jn);Xc=s(el,"This model is a PyTorch "),xn=a(el,"A",{href:!0,rel:!0});var Du=i(xn);ep=s(Du,"torch.nn.Module"),Du.forEach(t),tp=s(el,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),el.forEach(t),op=d(Ho),Re=a(Ho,"DIV",{class:!0});var vt=i(Re);C(Pn.$$.fragment,vt),np=d(vt),St=a(vt,"P",{});var vr=i(St);sp=s(vr,"The "),Ks=a(vr,"A",{href:!0});var Iu=i(Ks);rp=s(Iu,"ConvBertForTokenClassification"),Iu.forEach(t),ap=s(vr," forward method, overrides the "),pa=a(vr,"CODE",{});var Su=i(pa);ip=s(Su,"__call__"),Su.forEach(t),lp=s(vr," special method."),vr.forEach(t),dp=d(vt),C(go.$$.fragment,vt),cp=d(vt),ha=a(vt,"P",{});var Lu=i(ha);pp=s(Lu,"Example:"),Lu.forEach(t),hp=d(vt),C(An.$$.fragment,vt),vt.forEach(t),Ho.forEach(t),$i=d(o),Lt=a(o,"H2",{class:!0});var tl=i(Lt);_o=a(tl,"A",{id:!0,class:!0,href:!0});var Ou=i(_o);ma=a(Ou,"SPAN",{});var Ru=i(ma);C(Nn.$$.fragment,Ru),Ru.forEach(t),Ou.forEach(t),mp=d(tl),fa=a(tl,"SPAN",{});var Wu=i(fa);fp=s(Wu,"ConvBertForQuestionAnswering"),Wu.forEach(t),tl.forEach(t),yi=d(o),tt=a(o,"DIV",{class:!0});var Qo=i(tt);C(Dn.$$.fragment,Qo),up=d(Qo),Ot=a(Qo,"P",{});var Tr=i(Ot);gp=s(Tr,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),ua=a(Tr,"EM",{});var Hu=i(ua);_p=s(Hu,"span start logits"),Hu.forEach(t),vp=s(Tr," and "),ga=a(Tr,"EM",{});var Qu=i(ga);Tp=s(Qu,"span end logits"),Qu.forEach(t),kp=s(Tr,")."),Tr.forEach(t),bp=d(Qo),In=a(Qo,"P",{});var ol=i(In);Cp=s(ol,"This model is a PyTorch "),Sn=a(ol,"A",{href:!0,rel:!0});var Yu=i(Sn);wp=s(Yu,"torch.nn.Module"),Yu.forEach(t),$p=s(ol,` sub-class. Use
it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage and
behavior.`),ol.forEach(t),yp=d(Qo),We=a(Qo,"DIV",{class:!0});var Tt=i(We);C(Ln.$$.fragment,Tt),Bp=d(Tt),Rt=a(Tt,"P",{});var kr=i(Rt);Fp=s(kr,"The "),Js=a(kr,"A",{href:!0});var Uu=i(Js);Ep=s(Uu,"ConvBertForQuestionAnswering"),Uu.forEach(t),Mp=s(kr," forward method, overrides the "),_a=a(kr,"CODE",{});var Vu=i(_a);zp=s(Vu,"__call__"),Vu.forEach(t),qp=s(kr," special method."),kr.forEach(t),jp=d(Tt),C(vo.$$.fragment,Tt),xp=d(Tt),va=a(Tt,"P",{});var Ku=i(va);Pp=s(Ku,"Example:"),Ku.forEach(t),Ap=d(Tt),C(On.$$.fragment,Tt),Tt.forEach(t),Qo.forEach(t),Bi=d(o),Wt=a(o,"H2",{class:!0});var nl=i(Wt);To=a(nl,"A",{id:!0,class:!0,href:!0});var Ju=i(To);Ta=a(Ju,"SPAN",{});var Gu=i(Ta);C(Rn.$$.fragment,Gu),Gu.forEach(t),Ju.forEach(t),Np=d(nl),ka=a(nl,"SPAN",{});var Zu=i(ka);Dp=s(Zu,"TFConvBertModel"),Zu.forEach(t),nl.forEach(t),Fi=d(o),qe=a(o,"DIV",{class:!0});var st=i(qe);C(Wn.$$.fragment,st),Ip=d(st),ba=a(st,"P",{});var Xu=i(ba);Sp=s(Xu,"The bare ConvBERT Model transformer outputting raw hidden-states without any specific head on top."),Xu.forEach(t),Lp=d(st),Hn=a(st,"P",{});var sl=i(Hn);Op=s(sl,"This model inherits from "),Gs=a(sl,"A",{href:!0});var eg=i(Gs);Rp=s(eg,"TFPreTrainedModel"),eg.forEach(t),Wp=s(sl,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),sl.forEach(t),Hp=d(st),Qn=a(st,"P",{});var rl=i(Qn);Qp=s(rl,"This model is also a "),Yn=a(rl,"A",{href:!0,rel:!0});var tg=i(Yn);Yp=s(tg,"tf.keras.Model"),tg.forEach(t),Up=s(rl,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),rl.forEach(t),Vp=d(st),C(ko.$$.fragment,st),Kp=d(st),He=a(st,"DIV",{class:!0});var kt=i(He);C(Un.$$.fragment,kt),Jp=d(kt),Ht=a(kt,"P",{});var br=i(Ht);Gp=s(br,"The "),Zs=a(br,"A",{href:!0});var og=i(Zs);Zp=s(og,"TFConvBertModel"),og.forEach(t),Xp=s(br," forward method, overrides the "),Ca=a(br,"CODE",{});var ng=i(Ca);eh=s(ng,"__call__"),ng.forEach(t),th=s(br," special method."),br.forEach(t),oh=d(kt),C(bo.$$.fragment,kt),nh=d(kt),wa=a(kt,"P",{});var sg=i(wa);sh=s(sg,"Example:"),sg.forEach(t),rh=d(kt),C(Vn.$$.fragment,kt),kt.forEach(t),st.forEach(t),Ei=d(o),Qt=a(o,"H2",{class:!0});var al=i(Qt);Co=a(al,"A",{id:!0,class:!0,href:!0});var rg=i(Co);$a=a(rg,"SPAN",{});var ag=i($a);C(Kn.$$.fragment,ag),ag.forEach(t),rg.forEach(t),ah=d(al),ya=a(al,"SPAN",{});var ig=i(ya);ih=s(ig,"TFConvBertForMaskedLM"),ig.forEach(t),al.forEach(t),Mi=d(o),je=a(o,"DIV",{class:!0});var rt=i(je);C(Jn.$$.fragment,rt),lh=d(rt),Gn=a(rt,"P",{});var il=i(Gn);dh=s(il,"ConvBERT Model with a "),Ba=a(il,"EM",{});var lg=i(Ba);ch=s(lg,"language modeling"),lg.forEach(t),ph=s(il," head on top."),il.forEach(t),hh=d(rt),Zn=a(rt,"P",{});var ll=i(Zn);mh=s(ll,"This model inherits from "),Xs=a(ll,"A",{href:!0});var dg=i(Xs);fh=s(dg,"TFPreTrainedModel"),dg.forEach(t),uh=s(ll,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),ll.forEach(t),gh=d(rt),Xn=a(rt,"P",{});var dl=i(Xn);_h=s(dl,"This model is also a "),es=a(dl,"A",{href:!0,rel:!0});var cg=i(es);vh=s(cg,"tf.keras.Model"),cg.forEach(t),Th=s(dl,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),dl.forEach(t),kh=d(rt),C(wo.$$.fragment,rt),bh=d(rt),Qe=a(rt,"DIV",{class:!0});var bt=i(Qe);C(ts.$$.fragment,bt),Ch=d(bt),Yt=a(bt,"P",{});var Cr=i(Yt);wh=s(Cr,"The "),er=a(Cr,"A",{href:!0});var pg=i(er);$h=s(pg,"TFConvBertForMaskedLM"),pg.forEach(t),yh=s(Cr," forward method, overrides the "),Fa=a(Cr,"CODE",{});var hg=i(Fa);Bh=s(hg,"__call__"),hg.forEach(t),Fh=s(Cr," special method."),Cr.forEach(t),Eh=d(bt),C($o.$$.fragment,bt),Mh=d(bt),Ea=a(bt,"P",{});var mg=i(Ea);zh=s(mg,"Example:"),mg.forEach(t),qh=d(bt),C(os.$$.fragment,bt),bt.forEach(t),rt.forEach(t),zi=d(o),Ut=a(o,"H2",{class:!0});var cl=i(Ut);yo=a(cl,"A",{id:!0,class:!0,href:!0});var fg=i(yo);Ma=a(fg,"SPAN",{});var ug=i(Ma);C(ns.$$.fragment,ug),ug.forEach(t),fg.forEach(t),jh=d(cl),za=a(cl,"SPAN",{});var gg=i(za);xh=s(gg,"TFConvBertForSequenceClassification"),gg.forEach(t),cl.forEach(t),qi=d(o),xe=a(o,"DIV",{class:!0});var at=i(xe);C(ss.$$.fragment,at),Ph=d(at),qa=a(at,"P",{});var _g=i(qa);Ah=s(_g,"ConvBERT Model transformer with a sequence classification/regression head on top e.g., for GLUE tasks."),_g.forEach(t),Nh=d(at),rs=a(at,"P",{});var pl=i(rs);Dh=s(pl,"This model inherits from "),tr=a(pl,"A",{href:!0});var vg=i(tr);Ih=s(vg,"TFPreTrainedModel"),vg.forEach(t),Sh=s(pl,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),pl.forEach(t),Lh=d(at),as=a(at,"P",{});var hl=i(as);Oh=s(hl,"This model is also a "),is=a(hl,"A",{href:!0,rel:!0});var Tg=i(is);Rh=s(Tg,"tf.keras.Model"),Tg.forEach(t),Wh=s(hl,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),hl.forEach(t),Hh=d(at),C(Bo.$$.fragment,at),Qh=d(at),Ye=a(at,"DIV",{class:!0});var Ct=i(Ye);C(ls.$$.fragment,Ct),Yh=d(Ct),Vt=a(Ct,"P",{});var wr=i(Vt);Uh=s(wr,"The "),or=a(wr,"A",{href:!0});var kg=i(or);Vh=s(kg,"TFConvBertForSequenceClassification"),kg.forEach(t),Kh=s(wr," forward method, overrides the "),ja=a(wr,"CODE",{});var bg=i(ja);Jh=s(bg,"__call__"),bg.forEach(t),Gh=s(wr," special method."),wr.forEach(t),Zh=d(Ct),C(Fo.$$.fragment,Ct),Xh=d(Ct),xa=a(Ct,"P",{});var Cg=i(xa);em=s(Cg,"Example:"),Cg.forEach(t),tm=d(Ct),C(ds.$$.fragment,Ct),Ct.forEach(t),at.forEach(t),ji=d(o),Kt=a(o,"H2",{class:!0});var ml=i(Kt);Eo=a(ml,"A",{id:!0,class:!0,href:!0});var wg=i(Eo);Pa=a(wg,"SPAN",{});var $g=i(Pa);C(cs.$$.fragment,$g),$g.forEach(t),wg.forEach(t),om=d(ml),Aa=a(ml,"SPAN",{});var yg=i(Aa);nm=s(yg,"TFConvBertForMultipleChoice"),yg.forEach(t),ml.forEach(t),xi=d(o),Pe=a(o,"DIV",{class:!0});var it=i(Pe);C(ps.$$.fragment,it),sm=d(it),Na=a(it,"P",{});var Bg=i(Na);rm=s(Bg,`ConvBERT Model with a multiple choice classification head on top (a linear layer on top of the pooled output and a
softmax) e.g. for RocStories/SWAG tasks.`),Bg.forEach(t),am=d(it),hs=a(it,"P",{});var fl=i(hs);im=s(fl,"This model inherits from "),nr=a(fl,"A",{href:!0});var Fg=i(nr);lm=s(Fg,"TFPreTrainedModel"),Fg.forEach(t),dm=s(fl,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),fl.forEach(t),cm=d(it),ms=a(it,"P",{});var ul=i(ms);pm=s(ul,"This model is also a "),fs=a(ul,"A",{href:!0,rel:!0});var Eg=i(fs);hm=s(Eg,"tf.keras.Model"),Eg.forEach(t),mm=s(ul,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),ul.forEach(t),fm=d(it),C(Mo.$$.fragment,it),um=d(it),Ue=a(it,"DIV",{class:!0});var wt=i(Ue);C(us.$$.fragment,wt),gm=d(wt),Jt=a(wt,"P",{});var $r=i(Jt);_m=s($r,"The "),sr=a($r,"A",{href:!0});var Mg=i(sr);vm=s(Mg,"TFConvBertForMultipleChoice"),Mg.forEach(t),Tm=s($r," forward method, overrides the "),Da=a($r,"CODE",{});var zg=i(Da);km=s(zg,"__call__"),zg.forEach(t),bm=s($r," special method."),$r.forEach(t),Cm=d(wt),C(zo.$$.fragment,wt),wm=d(wt),Ia=a(wt,"P",{});var qg=i(Ia);$m=s(qg,"Example:"),qg.forEach(t),ym=d(wt),C(gs.$$.fragment,wt),wt.forEach(t),it.forEach(t),Pi=d(o),Gt=a(o,"H2",{class:!0});var gl=i(Gt);qo=a(gl,"A",{id:!0,class:!0,href:!0});var jg=i(qo);Sa=a(jg,"SPAN",{});var xg=i(Sa);C(_s.$$.fragment,xg),xg.forEach(t),jg.forEach(t),Bm=d(gl),La=a(gl,"SPAN",{});var Pg=i(La);Fm=s(Pg,"TFConvBertForTokenClassification"),Pg.forEach(t),gl.forEach(t),Ai=d(o),Ae=a(o,"DIV",{class:!0});var lt=i(Ae);C(vs.$$.fragment,lt),Em=d(lt),Oa=a(lt,"P",{});var Ag=i(Oa);Mm=s(Ag,`ConvBERT Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Ag.forEach(t),zm=d(lt),Ts=a(lt,"P",{});var _l=i(Ts);qm=s(_l,"This model inherits from "),rr=a(_l,"A",{href:!0});var Ng=i(rr);jm=s(Ng,"TFPreTrainedModel"),Ng.forEach(t),xm=s(_l,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),_l.forEach(t),Pm=d(lt),ks=a(lt,"P",{});var vl=i(ks);Am=s(vl,"This model is also a "),bs=a(vl,"A",{href:!0,rel:!0});var Dg=i(bs);Nm=s(Dg,"tf.keras.Model"),Dg.forEach(t),Dm=s(vl,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),vl.forEach(t),Im=d(lt),C(jo.$$.fragment,lt),Sm=d(lt),Ve=a(lt,"DIV",{class:!0});var $t=i(Ve);C(Cs.$$.fragment,$t),Lm=d($t),Zt=a($t,"P",{});var yr=i(Zt);Om=s(yr,"The "),ar=a(yr,"A",{href:!0});var Ig=i(ar);Rm=s(Ig,"TFConvBertForTokenClassification"),Ig.forEach(t),Wm=s(yr," forward method, overrides the "),Ra=a(yr,"CODE",{});var Sg=i(Ra);Hm=s(Sg,"__call__"),Sg.forEach(t),Qm=s(yr," special method."),yr.forEach(t),Ym=d($t),C(xo.$$.fragment,$t),Um=d($t),Wa=a($t,"P",{});var Lg=i(Wa);Vm=s(Lg,"Example:"),Lg.forEach(t),Km=d($t),C(ws.$$.fragment,$t),$t.forEach(t),lt.forEach(t),Ni=d(o),Xt=a(o,"H2",{class:!0});var Tl=i(Xt);Po=a(Tl,"A",{id:!0,class:!0,href:!0});var Og=i(Po);Ha=a(Og,"SPAN",{});var Rg=i(Ha);C($s.$$.fragment,Rg),Rg.forEach(t),Og.forEach(t),Jm=d(Tl),Qa=a(Tl,"SPAN",{});var Wg=i(Qa);Gm=s(Wg,"TFConvBertForQuestionAnswering"),Wg.forEach(t),Tl.forEach(t),Di=d(o),Ne=a(o,"DIV",{class:!0});var dt=i(Ne);C(ys.$$.fragment,dt),Zm=d(dt),eo=a(dt,"P",{});var Br=i(eo);Xm=s(Br,`ConvBERT Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layer on top of the hidden-states output to compute `),Ya=a(Br,"EM",{});var Hg=i(Ya);ef=s(Hg,"span start logits"),Hg.forEach(t),tf=s(Br," and "),Ua=a(Br,"EM",{});var Qg=i(Ua);of=s(Qg,"span end logits"),Qg.forEach(t),nf=s(Br,")."),Br.forEach(t),sf=d(dt),Bs=a(dt,"P",{});var kl=i(Bs);rf=s(kl,"This model inherits from "),ir=a(kl,"A",{href:!0});var Yg=i(ir);af=s(Yg,"TFPreTrainedModel"),Yg.forEach(t),lf=s(kl,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),kl.forEach(t),df=d(dt),Fs=a(dt,"P",{});var bl=i(Fs);cf=s(bl,"This model is also a "),Es=a(bl,"A",{href:!0,rel:!0});var Ug=i(Es);pf=s(Ug,"tf.keras.Model"),Ug.forEach(t),hf=s(bl,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),bl.forEach(t),mf=d(dt),C(Ao.$$.fragment,dt),ff=d(dt),Ke=a(dt,"DIV",{class:!0});var yt=i(Ke);C(Ms.$$.fragment,yt),uf=d(yt),to=a(yt,"P",{});var Fr=i(to);gf=s(Fr,"The "),lr=a(Fr,"A",{href:!0});var Vg=i(lr);_f=s(Vg,"TFConvBertForQuestionAnswering"),Vg.forEach(t),vf=s(Fr," forward method, overrides the "),Va=a(Fr,"CODE",{});var Kg=i(Va);Tf=s(Kg,"__call__"),Kg.forEach(t),kf=s(Fr," special method."),Fr.forEach(t),bf=d(yt),C(No.$$.fragment,yt),Cf=d(yt),Ka=a(yt,"P",{});var Jg=i(Ka);wf=s(Jg,"Example:"),Jg.forEach(t),$f=d(yt),C(zs.$$.fragment,yt),yt.forEach(t),dt.forEach(t),this.h()},h(){h(p,"name","hf:doc:metadata"),h(p,"content",JSON.stringify(k_)),h(g,"id","convbert"),h(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(g,"href","#convbert"),h(f,"class","relative group"),h(X,"id","overview"),h(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(X,"href","#overview"),h(M,"class","relative group"),h(te,"href","https://arxiv.org/abs/2008.02496"),h(te,"rel","nofollow"),h(I,"href","https://huggingface.co/abhishek"),h(I,"rel","nofollow"),h(x,"href","https://github.com/yitu-opensource/ConvBert"),h(x,"rel","nofollow"),h(c,"id","transformers.ConvBertConfig"),h(c,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(c,"href","#transformers.ConvBertConfig"),h(Z,"class","relative group"),h(be,"href","/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertModel"),h(ke,"href","https://huggingface.co/YituTech/conv-bert-base"),h(ke,"rel","nofollow"),h(As,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),h(Ns,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),h(oe,"class","docstring"),h(oo,"id","transformers.ConvBertTokenizer"),h(oo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(oo,"href","#transformers.ConvBertTokenizer"),h(Bt,"class","relative group"),h(Ds,"href","/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertTokenizer"),h(Is,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer"),h(Ss,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizer"),h(mt,"class","docstring"),h(no,"class","docstring"),h(ot,"class","docstring"),h(Ir,"class","docstring"),h(ze,"class","docstring"),h(so,"id","transformers.ConvBertTokenizerFast"),h(so,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(so,"href","#transformers.ConvBertTokenizerFast"),h(Et,"class","relative group"),h(Rs,"href","/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertTokenizerFast"),h(Ws,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizerFast"),h(Hs,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertTokenizerFast"),h(Ge,"class","docstring"),h(ao,"id","transformers.ConvBertModel"),h(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(ao,"href","#transformers.ConvBertModel"),h(Mt,"class","relative group"),h(dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(dn,"rel","nofollow"),h(Qs,"href","/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertModel"),h(Se,"class","docstring"),h(pt,"class","docstring"),h(lo,"id","transformers.ConvBertForMaskedLM"),h(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(lo,"href","#transformers.ConvBertForMaskedLM"),h(qt,"class","relative group"),h(fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(fn,"rel","nofollow"),h(Ys,"href","/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertForMaskedLM"),h(Le,"class","docstring"),h(ht,"class","docstring"),h(po,"id","transformers.ConvBertForSequenceClassification"),h(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(po,"href","#transformers.ConvBertForSequenceClassification"),h(Pt,"class","relative group"),h(kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(kn,"rel","nofollow"),h(Us,"href","/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertForSequenceClassification"),h(Ee,"class","docstring"),h(Ze,"class","docstring"),h(mo,"id","transformers.ConvBertForMultipleChoice"),h(mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(mo,"href","#transformers.ConvBertForMultipleChoice"),h(Nt,"class","relative group"),h(Fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Fn,"rel","nofollow"),h(Vs,"href","/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertForMultipleChoice"),h(Oe,"class","docstring"),h(Xe,"class","docstring"),h(uo,"id","transformers.ConvBertForTokenClassification"),h(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(uo,"href","#transformers.ConvBertForTokenClassification"),h(It,"class","relative group"),h(xn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(xn,"rel","nofollow"),h(Ks,"href","/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertForTokenClassification"),h(Re,"class","docstring"),h(et,"class","docstring"),h(_o,"id","transformers.ConvBertForQuestionAnswering"),h(_o,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(_o,"href","#transformers.ConvBertForQuestionAnswering"),h(Lt,"class","relative group"),h(Sn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),h(Sn,"rel","nofollow"),h(Js,"href","/docs/transformers/master/en/model_doc/convbert#transformers.ConvBertForQuestionAnswering"),h(We,"class","docstring"),h(tt,"class","docstring"),h(To,"id","transformers.TFConvBertModel"),h(To,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(To,"href","#transformers.TFConvBertModel"),h(Wt,"class","relative group"),h(Gs,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),h(Yn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Yn,"rel","nofollow"),h(Zs,"href","/docs/transformers/master/en/model_doc/convbert#transformers.TFConvBertModel"),h(He,"class","docstring"),h(qe,"class","docstring"),h(Co,"id","transformers.TFConvBertForMaskedLM"),h(Co,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Co,"href","#transformers.TFConvBertForMaskedLM"),h(Qt,"class","relative group"),h(Xs,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),h(es,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(es,"rel","nofollow"),h(er,"href","/docs/transformers/master/en/model_doc/convbert#transformers.TFConvBertForMaskedLM"),h(Qe,"class","docstring"),h(je,"class","docstring"),h(yo,"id","transformers.TFConvBertForSequenceClassification"),h(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(yo,"href","#transformers.TFConvBertForSequenceClassification"),h(Ut,"class","relative group"),h(tr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),h(is,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(is,"rel","nofollow"),h(or,"href","/docs/transformers/master/en/model_doc/convbert#transformers.TFConvBertForSequenceClassification"),h(Ye,"class","docstring"),h(xe,"class","docstring"),h(Eo,"id","transformers.TFConvBertForMultipleChoice"),h(Eo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Eo,"href","#transformers.TFConvBertForMultipleChoice"),h(Kt,"class","relative group"),h(nr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),h(fs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(fs,"rel","nofollow"),h(sr,"href","/docs/transformers/master/en/model_doc/convbert#transformers.TFConvBertForMultipleChoice"),h(Ue,"class","docstring"),h(Pe,"class","docstring"),h(qo,"id","transformers.TFConvBertForTokenClassification"),h(qo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(qo,"href","#transformers.TFConvBertForTokenClassification"),h(Gt,"class","relative group"),h(rr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),h(bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(bs,"rel","nofollow"),h(ar,"href","/docs/transformers/master/en/model_doc/convbert#transformers.TFConvBertForTokenClassification"),h(Ve,"class","docstring"),h(Ae,"class","docstring"),h(Po,"id","transformers.TFConvBertForQuestionAnswering"),h(Po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),h(Po,"href","#transformers.TFConvBertForQuestionAnswering"),h(Xt,"class","relative group"),h(ir,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),h(Es,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),h(Es,"rel","nofollow"),h(lr,"href","/docs/transformers/master/en/model_doc/convbert#transformers.TFConvBertForQuestionAnswering"),h(Ke,"class","docstring"),h(Ne,"class","docstring")},m(o,u){e(document.head,p),m(o,F,u),m(o,f,u),e(f,g),e(g,T),w(v,T,null),e(f,_),e(f,E),e(E,de),m(o,K,u),m(o,M,u),e(M,X),e(X,S),w(ee,S,null),e(M,ce),e(M,L),e(L,pe),m(o,ae,u),m(o,U,u),e(U,A),e(U,te),e(te,J),e(U,z),m(o,j,u),m(o,ne,u),e(ne,Q),m(o,ie,u),m(o,se,u),e(se,O),e(O,he),m(o,le,u),m(o,q,u),e(q,me),m(o,R,u),m(o,G,u),e(G,fe),e(G,I),e(I,ue),e(G,ge),e(G,x),e(x,_e),m(o,W,u),m(o,Z,u),e(Z,c),e(c,k),w(V,k,null),e(Z,$e),e(Z,Ce),e(Ce,N),m(o,we,u),m(o,oe,u),w(Te,oe,null),e(oe,D),e(oe,P),e(P,ye),e(P,be),e(be,Y),e(P,Be),e(P,ke),e(ke,ve),e(P,Fe),e(P,As),e(As,Cl),e(P,wl),e(P,Ns),e(Ns,$l),e(P,yl),e(oe,Bl),e(oe,Er),e(Er,Fl),e(oe,El),w(Yo,oe,null),m(o,ci,u),m(o,Bt,u),e(Bt,oo),e(oo,Mr),w(Uo,Mr,null),e(Bt,Ml),e(Bt,zr),e(zr,zl),m(o,pi,u),m(o,ze,u),w(Vo,ze,null),e(ze,ql),e(ze,ct),e(ct,jl),e(ct,Ds),e(Ds,xl),e(ct,Pl),e(ct,Is),e(Is,Al),e(ct,Nl),e(ct,Ss),e(Ss,Dl),e(ct,Il),e(ze,Sl),e(ze,mt),w(Ko,mt,null),e(mt,Ll),e(mt,qr),e(qr,Ol),e(mt,Rl),e(mt,Jo),e(Jo,Ls),e(Ls,Wl),e(Ls,jr),e(jr,Hl),e(Jo,Ql),e(Jo,Os),e(Os,Yl),e(Os,xr),e(xr,Ul),e(ze,Vl),e(ze,no),w(Go,no,null),e(no,Kl),e(no,Zo),e(Zo,Jl),e(Zo,Pr),e(Pr,Gl),e(Zo,Zl),e(ze,Xl),e(ze,ot),w(Xo,ot,null),e(ot,ed),e(ot,Ar),e(Ar,td),e(ot,od),w(en,ot,null),e(ot,nd),e(ot,Ft),e(Ft,sd),e(Ft,Nr),e(Nr,rd),e(Ft,ad),e(Ft,Dr),e(Dr,id),e(Ft,ld),e(ze,dd),e(ze,Ir),m(o,hi,u),m(o,Et,u),e(Et,so),e(so,Sr),w(tn,Sr,null),e(Et,cd),e(Et,Lr),e(Lr,pd),m(o,mi,u),m(o,Ge,u),w(on,Ge,null),e(Ge,hd),e(Ge,nn),e(nn,md),e(nn,Or),e(Or,fd),e(nn,ud),e(Ge,gd),e(Ge,ro),e(ro,Rs),e(Rs,_d),e(ro,vd),e(ro,Ws),e(Ws,Td),e(ro,kd),e(Ge,bd),e(Ge,sn),e(sn,Cd),e(sn,Hs),e(Hs,wd),e(sn,$d),m(o,fi,u),m(o,Mt,u),e(Mt,ao),e(ao,Rr),w(rn,Rr,null),e(Mt,yd),e(Mt,Wr),e(Wr,Bd),m(o,ui,u),m(o,pt,u),w(an,pt,null),e(pt,Fd),e(pt,ln),e(ln,Ed),e(ln,dn),e(dn,Md),e(ln,zd),e(pt,qd),e(pt,Se),w(cn,Se,null),e(Se,jd),e(Se,zt),e(zt,xd),e(zt,Qs),e(Qs,Pd),e(zt,Ad),e(zt,Hr),e(Hr,Nd),e(zt,Dd),e(Se,Id),w(io,Se,null),e(Se,Sd),e(Se,Qr),e(Qr,Ld),e(Se,Od),w(pn,Se,null),m(o,gi,u),m(o,qt,u),e(qt,lo),e(lo,Yr),w(hn,Yr,null),e(qt,Rd),e(qt,Ur),e(Ur,Wd),m(o,_i,u),m(o,ht,u),w(mn,ht,null),e(ht,Hd),e(ht,jt),e(jt,Qd),e(jt,Vr),e(Vr,Yd),e(jt,Ud),e(jt,fn),e(fn,Vd),e(jt,Kd),e(ht,Jd),e(ht,Le),w(un,Le,null),e(Le,Gd),e(Le,xt),e(xt,Zd),e(xt,Ys),e(Ys,Xd),e(xt,ec),e(xt,Kr),e(Kr,tc),e(xt,oc),e(Le,nc),w(co,Le,null),e(Le,sc),e(Le,Jr),e(Jr,rc),e(Le,ac),w(gn,Le,null),m(o,vi,u),m(o,Pt,u),e(Pt,po),e(po,Gr),w(_n,Gr,null),e(Pt,ic),e(Pt,Zr),e(Zr,lc),m(o,Ti,u),m(o,Ze,u),w(vn,Ze,null),e(Ze,dc),e(Ze,Xr),e(Xr,cc),e(Ze,pc),e(Ze,Tn),e(Tn,hc),e(Tn,kn),e(kn,mc),e(Tn,fc),e(Ze,uc),e(Ze,Ee),w(bn,Ee,null),e(Ee,gc),e(Ee,At),e(At,_c),e(At,Us),e(Us,vc),e(At,Tc),e(At,ea),e(ea,kc),e(At,bc),e(Ee,Cc),w(ho,Ee,null),e(Ee,wc),e(Ee,ta),e(ta,$c),e(Ee,yc),w(Cn,Ee,null),e(Ee,Bc),e(Ee,oa),e(oa,Fc),e(Ee,Ec),w(wn,Ee,null),m(o,ki,u),m(o,Nt,u),e(Nt,mo),e(mo,na),w($n,na,null),e(Nt,Mc),e(Nt,sa),e(sa,zc),m(o,bi,u),m(o,Xe,u),w(yn,Xe,null),e(Xe,qc),e(Xe,ra),e(ra,jc),e(Xe,xc),e(Xe,Bn),e(Bn,Pc),e(Bn,Fn),e(Fn,Ac),e(Bn,Nc),e(Xe,Dc),e(Xe,Oe),w(En,Oe,null),e(Oe,Ic),e(Oe,Dt),e(Dt,Sc),e(Dt,Vs),e(Vs,Lc),e(Dt,Oc),e(Dt,aa),e(aa,Rc),e(Dt,Wc),e(Oe,Hc),w(fo,Oe,null),e(Oe,Qc),e(Oe,ia),e(ia,Yc),e(Oe,Uc),w(Mn,Oe,null),m(o,Ci,u),m(o,It,u),e(It,uo),e(uo,la),w(zn,la,null),e(It,Vc),e(It,da),e(da,Kc),m(o,wi,u),m(o,et,u),w(qn,et,null),e(et,Jc),e(et,ca),e(ca,Gc),e(et,Zc),e(et,jn),e(jn,Xc),e(jn,xn),e(xn,ep),e(jn,tp),e(et,op),e(et,Re),w(Pn,Re,null),e(Re,np),e(Re,St),e(St,sp),e(St,Ks),e(Ks,rp),e(St,ap),e(St,pa),e(pa,ip),e(St,lp),e(Re,dp),w(go,Re,null),e(Re,cp),e(Re,ha),e(ha,pp),e(Re,hp),w(An,Re,null),m(o,$i,u),m(o,Lt,u),e(Lt,_o),e(_o,ma),w(Nn,ma,null),e(Lt,mp),e(Lt,fa),e(fa,fp),m(o,yi,u),m(o,tt,u),w(Dn,tt,null),e(tt,up),e(tt,Ot),e(Ot,gp),e(Ot,ua),e(ua,_p),e(Ot,vp),e(Ot,ga),e(ga,Tp),e(Ot,kp),e(tt,bp),e(tt,In),e(In,Cp),e(In,Sn),e(Sn,wp),e(In,$p),e(tt,yp),e(tt,We),w(Ln,We,null),e(We,Bp),e(We,Rt),e(Rt,Fp),e(Rt,Js),e(Js,Ep),e(Rt,Mp),e(Rt,_a),e(_a,zp),e(Rt,qp),e(We,jp),w(vo,We,null),e(We,xp),e(We,va),e(va,Pp),e(We,Ap),w(On,We,null),m(o,Bi,u),m(o,Wt,u),e(Wt,To),e(To,Ta),w(Rn,Ta,null),e(Wt,Np),e(Wt,ka),e(ka,Dp),m(o,Fi,u),m(o,qe,u),w(Wn,qe,null),e(qe,Ip),e(qe,ba),e(ba,Sp),e(qe,Lp),e(qe,Hn),e(Hn,Op),e(Hn,Gs),e(Gs,Rp),e(Hn,Wp),e(qe,Hp),e(qe,Qn),e(Qn,Qp),e(Qn,Yn),e(Yn,Yp),e(Qn,Up),e(qe,Vp),w(ko,qe,null),e(qe,Kp),e(qe,He),w(Un,He,null),e(He,Jp),e(He,Ht),e(Ht,Gp),e(Ht,Zs),e(Zs,Zp),e(Ht,Xp),e(Ht,Ca),e(Ca,eh),e(Ht,th),e(He,oh),w(bo,He,null),e(He,nh),e(He,wa),e(wa,sh),e(He,rh),w(Vn,He,null),m(o,Ei,u),m(o,Qt,u),e(Qt,Co),e(Co,$a),w(Kn,$a,null),e(Qt,ah),e(Qt,ya),e(ya,ih),m(o,Mi,u),m(o,je,u),w(Jn,je,null),e(je,lh),e(je,Gn),e(Gn,dh),e(Gn,Ba),e(Ba,ch),e(Gn,ph),e(je,hh),e(je,Zn),e(Zn,mh),e(Zn,Xs),e(Xs,fh),e(Zn,uh),e(je,gh),e(je,Xn),e(Xn,_h),e(Xn,es),e(es,vh),e(Xn,Th),e(je,kh),w(wo,je,null),e(je,bh),e(je,Qe),w(ts,Qe,null),e(Qe,Ch),e(Qe,Yt),e(Yt,wh),e(Yt,er),e(er,$h),e(Yt,yh),e(Yt,Fa),e(Fa,Bh),e(Yt,Fh),e(Qe,Eh),w($o,Qe,null),e(Qe,Mh),e(Qe,Ea),e(Ea,zh),e(Qe,qh),w(os,Qe,null),m(o,zi,u),m(o,Ut,u),e(Ut,yo),e(yo,Ma),w(ns,Ma,null),e(Ut,jh),e(Ut,za),e(za,xh),m(o,qi,u),m(o,xe,u),w(ss,xe,null),e(xe,Ph),e(xe,qa),e(qa,Ah),e(xe,Nh),e(xe,rs),e(rs,Dh),e(rs,tr),e(tr,Ih),e(rs,Sh),e(xe,Lh),e(xe,as),e(as,Oh),e(as,is),e(is,Rh),e(as,Wh),e(xe,Hh),w(Bo,xe,null),e(xe,Qh),e(xe,Ye),w(ls,Ye,null),e(Ye,Yh),e(Ye,Vt),e(Vt,Uh),e(Vt,or),e(or,Vh),e(Vt,Kh),e(Vt,ja),e(ja,Jh),e(Vt,Gh),e(Ye,Zh),w(Fo,Ye,null),e(Ye,Xh),e(Ye,xa),e(xa,em),e(Ye,tm),w(ds,Ye,null),m(o,ji,u),m(o,Kt,u),e(Kt,Eo),e(Eo,Pa),w(cs,Pa,null),e(Kt,om),e(Kt,Aa),e(Aa,nm),m(o,xi,u),m(o,Pe,u),w(ps,Pe,null),e(Pe,sm),e(Pe,Na),e(Na,rm),e(Pe,am),e(Pe,hs),e(hs,im),e(hs,nr),e(nr,lm),e(hs,dm),e(Pe,cm),e(Pe,ms),e(ms,pm),e(ms,fs),e(fs,hm),e(ms,mm),e(Pe,fm),w(Mo,Pe,null),e(Pe,um),e(Pe,Ue),w(us,Ue,null),e(Ue,gm),e(Ue,Jt),e(Jt,_m),e(Jt,sr),e(sr,vm),e(Jt,Tm),e(Jt,Da),e(Da,km),e(Jt,bm),e(Ue,Cm),w(zo,Ue,null),e(Ue,wm),e(Ue,Ia),e(Ia,$m),e(Ue,ym),w(gs,Ue,null),m(o,Pi,u),m(o,Gt,u),e(Gt,qo),e(qo,Sa),w(_s,Sa,null),e(Gt,Bm),e(Gt,La),e(La,Fm),m(o,Ai,u),m(o,Ae,u),w(vs,Ae,null),e(Ae,Em),e(Ae,Oa),e(Oa,Mm),e(Ae,zm),e(Ae,Ts),e(Ts,qm),e(Ts,rr),e(rr,jm),e(Ts,xm),e(Ae,Pm),e(Ae,ks),e(ks,Am),e(ks,bs),e(bs,Nm),e(ks,Dm),e(Ae,Im),w(jo,Ae,null),e(Ae,Sm),e(Ae,Ve),w(Cs,Ve,null),e(Ve,Lm),e(Ve,Zt),e(Zt,Om),e(Zt,ar),e(ar,Rm),e(Zt,Wm),e(Zt,Ra),e(Ra,Hm),e(Zt,Qm),e(Ve,Ym),w(xo,Ve,null),e(Ve,Um),e(Ve,Wa),e(Wa,Vm),e(Ve,Km),w(ws,Ve,null),m(o,Ni,u),m(o,Xt,u),e(Xt,Po),e(Po,Ha),w($s,Ha,null),e(Xt,Jm),e(Xt,Qa),e(Qa,Gm),m(o,Di,u),m(o,Ne,u),w(ys,Ne,null),e(Ne,Zm),e(Ne,eo),e(eo,Xm),e(eo,Ya),e(Ya,ef),e(eo,tf),e(eo,Ua),e(Ua,of),e(eo,nf),e(Ne,sf),e(Ne,Bs),e(Bs,rf),e(Bs,ir),e(ir,af),e(Bs,lf),e(Ne,df),e(Ne,Fs),e(Fs,cf),e(Fs,Es),e(Es,pf),e(Fs,hf),e(Ne,mf),w(Ao,Ne,null),e(Ne,ff),e(Ne,Ke),w(Ms,Ke,null),e(Ke,uf),e(Ke,to),e(to,gf),e(to,lr),e(lr,_f),e(to,vf),e(to,Va),e(Va,Tf),e(to,kf),e(Ke,bf),w(No,Ke,null),e(Ke,Cf),e(Ke,Ka),e(Ka,wf),e(Ke,$f),w(zs,Ke,null),Ii=!0},p(o,[u]){const qs={};u&2&&(qs.$$scope={dirty:u,ctx:o}),io.$set(qs);const Ja={};u&2&&(Ja.$$scope={dirty:u,ctx:o}),co.$set(Ja);const Ga={};u&2&&(Ga.$$scope={dirty:u,ctx:o}),ho.$set(Ga);const Za={};u&2&&(Za.$$scope={dirty:u,ctx:o}),fo.$set(Za);const js={};u&2&&(js.$$scope={dirty:u,ctx:o}),go.$set(js);const Xa={};u&2&&(Xa.$$scope={dirty:u,ctx:o}),vo.$set(Xa);const ei={};u&2&&(ei.$$scope={dirty:u,ctx:o}),ko.$set(ei);const ti={};u&2&&(ti.$$scope={dirty:u,ctx:o}),bo.$set(ti);const xs={};u&2&&(xs.$$scope={dirty:u,ctx:o}),wo.$set(xs);const oi={};u&2&&(oi.$$scope={dirty:u,ctx:o}),$o.$set(oi);const ni={};u&2&&(ni.$$scope={dirty:u,ctx:o}),Bo.$set(ni);const si={};u&2&&(si.$$scope={dirty:u,ctx:o}),Fo.$set(si);const ri={};u&2&&(ri.$$scope={dirty:u,ctx:o}),Mo.$set(ri);const ai={};u&2&&(ai.$$scope={dirty:u,ctx:o}),zo.$set(ai);const Do={};u&2&&(Do.$$scope={dirty:u,ctx:o}),jo.$set(Do);const ii={};u&2&&(ii.$$scope={dirty:u,ctx:o}),xo.$set(ii);const li={};u&2&&(li.$$scope={dirty:u,ctx:o}),Ao.$set(li);const Ps={};u&2&&(Ps.$$scope={dirty:u,ctx:o}),No.$set(Ps)},i(o){Ii||($(v.$$.fragment,o),$(ee.$$.fragment,o),$(V.$$.fragment,o),$(Te.$$.fragment,o),$(Yo.$$.fragment,o),$(Uo.$$.fragment,o),$(Vo.$$.fragment,o),$(Ko.$$.fragment,o),$(Go.$$.fragment,o),$(Xo.$$.fragment,o),$(en.$$.fragment,o),$(tn.$$.fragment,o),$(on.$$.fragment,o),$(rn.$$.fragment,o),$(an.$$.fragment,o),$(cn.$$.fragment,o),$(io.$$.fragment,o),$(pn.$$.fragment,o),$(hn.$$.fragment,o),$(mn.$$.fragment,o),$(un.$$.fragment,o),$(co.$$.fragment,o),$(gn.$$.fragment,o),$(_n.$$.fragment,o),$(vn.$$.fragment,o),$(bn.$$.fragment,o),$(ho.$$.fragment,o),$(Cn.$$.fragment,o),$(wn.$$.fragment,o),$($n.$$.fragment,o),$(yn.$$.fragment,o),$(En.$$.fragment,o),$(fo.$$.fragment,o),$(Mn.$$.fragment,o),$(zn.$$.fragment,o),$(qn.$$.fragment,o),$(Pn.$$.fragment,o),$(go.$$.fragment,o),$(An.$$.fragment,o),$(Nn.$$.fragment,o),$(Dn.$$.fragment,o),$(Ln.$$.fragment,o),$(vo.$$.fragment,o),$(On.$$.fragment,o),$(Rn.$$.fragment,o),$(Wn.$$.fragment,o),$(ko.$$.fragment,o),$(Un.$$.fragment,o),$(bo.$$.fragment,o),$(Vn.$$.fragment,o),$(Kn.$$.fragment,o),$(Jn.$$.fragment,o),$(wo.$$.fragment,o),$(ts.$$.fragment,o),$($o.$$.fragment,o),$(os.$$.fragment,o),$(ns.$$.fragment,o),$(ss.$$.fragment,o),$(Bo.$$.fragment,o),$(ls.$$.fragment,o),$(Fo.$$.fragment,o),$(ds.$$.fragment,o),$(cs.$$.fragment,o),$(ps.$$.fragment,o),$(Mo.$$.fragment,o),$(us.$$.fragment,o),$(zo.$$.fragment,o),$(gs.$$.fragment,o),$(_s.$$.fragment,o),$(vs.$$.fragment,o),$(jo.$$.fragment,o),$(Cs.$$.fragment,o),$(xo.$$.fragment,o),$(ws.$$.fragment,o),$($s.$$.fragment,o),$(ys.$$.fragment,o),$(Ao.$$.fragment,o),$(Ms.$$.fragment,o),$(No.$$.fragment,o),$(zs.$$.fragment,o),Ii=!0)},o(o){y(v.$$.fragment,o),y(ee.$$.fragment,o),y(V.$$.fragment,o),y(Te.$$.fragment,o),y(Yo.$$.fragment,o),y(Uo.$$.fragment,o),y(Vo.$$.fragment,o),y(Ko.$$.fragment,o),y(Go.$$.fragment,o),y(Xo.$$.fragment,o),y(en.$$.fragment,o),y(tn.$$.fragment,o),y(on.$$.fragment,o),y(rn.$$.fragment,o),y(an.$$.fragment,o),y(cn.$$.fragment,o),y(io.$$.fragment,o),y(pn.$$.fragment,o),y(hn.$$.fragment,o),y(mn.$$.fragment,o),y(un.$$.fragment,o),y(co.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(vn.$$.fragment,o),y(bn.$$.fragment,o),y(ho.$$.fragment,o),y(Cn.$$.fragment,o),y(wn.$$.fragment,o),y($n.$$.fragment,o),y(yn.$$.fragment,o),y(En.$$.fragment,o),y(fo.$$.fragment,o),y(Mn.$$.fragment,o),y(zn.$$.fragment,o),y(qn.$$.fragment,o),y(Pn.$$.fragment,o),y(go.$$.fragment,o),y(An.$$.fragment,o),y(Nn.$$.fragment,o),y(Dn.$$.fragment,o),y(Ln.$$.fragment,o),y(vo.$$.fragment,o),y(On.$$.fragment,o),y(Rn.$$.fragment,o),y(Wn.$$.fragment,o),y(ko.$$.fragment,o),y(Un.$$.fragment,o),y(bo.$$.fragment,o),y(Vn.$$.fragment,o),y(Kn.$$.fragment,o),y(Jn.$$.fragment,o),y(wo.$$.fragment,o),y(ts.$$.fragment,o),y($o.$$.fragment,o),y(os.$$.fragment,o),y(ns.$$.fragment,o),y(ss.$$.fragment,o),y(Bo.$$.fragment,o),y(ls.$$.fragment,o),y(Fo.$$.fragment,o),y(ds.$$.fragment,o),y(cs.$$.fragment,o),y(ps.$$.fragment,o),y(Mo.$$.fragment,o),y(us.$$.fragment,o),y(zo.$$.fragment,o),y(gs.$$.fragment,o),y(_s.$$.fragment,o),y(vs.$$.fragment,o),y(jo.$$.fragment,o),y(Cs.$$.fragment,o),y(xo.$$.fragment,o),y(ws.$$.fragment,o),y($s.$$.fragment,o),y(ys.$$.fragment,o),y(Ao.$$.fragment,o),y(Ms.$$.fragment,o),y(No.$$.fragment,o),y(zs.$$.fragment,o),Ii=!1},d(o){t(p),o&&t(F),o&&t(f),B(v),o&&t(K),o&&t(M),B(ee),o&&t(ae),o&&t(U),o&&t(j),o&&t(ne),o&&t(ie),o&&t(se),o&&t(le),o&&t(q),o&&t(R),o&&t(G),o&&t(W),o&&t(Z),B(V),o&&t(we),o&&t(oe),B(Te),B(Yo),o&&t(ci),o&&t(Bt),B(Uo),o&&t(pi),o&&t(ze),B(Vo),B(Ko),B(Go),B(Xo),B(en),o&&t(hi),o&&t(Et),B(tn),o&&t(mi),o&&t(Ge),B(on),o&&t(fi),o&&t(Mt),B(rn),o&&t(ui),o&&t(pt),B(an),B(cn),B(io),B(pn),o&&t(gi),o&&t(qt),B(hn),o&&t(_i),o&&t(ht),B(mn),B(un),B(co),B(gn),o&&t(vi),o&&t(Pt),B(_n),o&&t(Ti),o&&t(Ze),B(vn),B(bn),B(ho),B(Cn),B(wn),o&&t(ki),o&&t(Nt),B($n),o&&t(bi),o&&t(Xe),B(yn),B(En),B(fo),B(Mn),o&&t(Ci),o&&t(It),B(zn),o&&t(wi),o&&t(et),B(qn),B(Pn),B(go),B(An),o&&t($i),o&&t(Lt),B(Nn),o&&t(yi),o&&t(tt),B(Dn),B(Ln),B(vo),B(On),o&&t(Bi),o&&t(Wt),B(Rn),o&&t(Fi),o&&t(qe),B(Wn),B(ko),B(Un),B(bo),B(Vn),o&&t(Ei),o&&t(Qt),B(Kn),o&&t(Mi),o&&t(je),B(Jn),B(wo),B(ts),B($o),B(os),o&&t(zi),o&&t(Ut),B(ns),o&&t(qi),o&&t(xe),B(ss),B(Bo),B(ls),B(Fo),B(ds),o&&t(ji),o&&t(Kt),B(cs),o&&t(xi),o&&t(Pe),B(ps),B(Mo),B(us),B(zo),B(gs),o&&t(Pi),o&&t(Gt),B(_s),o&&t(Ai),o&&t(Ae),B(vs),B(jo),B(Cs),B(xo),B(ws),o&&t(Ni),o&&t(Xt),B($s),o&&t(Di),o&&t(Ne),B(ys),B(Ao),B(Ms),B(No),B(zs)}}}const k_={local:"convbert",sections:[{local:"overview",title:"Overview"},{local:"transformers.ConvBertConfig",title:"ConvBertConfig"},{local:"transformers.ConvBertTokenizer",title:"ConvBertTokenizer"},{local:"transformers.ConvBertTokenizerFast",title:"ConvBertTokenizerFast"},{local:"transformers.ConvBertModel",title:"ConvBertModel"},{local:"transformers.ConvBertForMaskedLM",title:"ConvBertForMaskedLM"},{local:"transformers.ConvBertForSequenceClassification",title:"ConvBertForSequenceClassification"},{local:"transformers.ConvBertForMultipleChoice",title:"ConvBertForMultipleChoice"},{local:"transformers.ConvBertForTokenClassification",title:"ConvBertForTokenClassification"},{local:"transformers.ConvBertForQuestionAnswering",title:"ConvBertForQuestionAnswering"},{local:"transformers.TFConvBertModel",title:"TFConvBertModel"},{local:"transformers.TFConvBertForMaskedLM",title:"TFConvBertForMaskedLM"},{local:"transformers.TFConvBertForSequenceClassification",title:"TFConvBertForSequenceClassification"},{local:"transformers.TFConvBertForMultipleChoice",title:"TFConvBertForMultipleChoice"},{local:"transformers.TFConvBertForTokenClassification",title:"TFConvBertForTokenClassification"},{local:"transformers.TFConvBertForQuestionAnswering",title:"TFConvBertForQuestionAnswering"}],title:"ConvBERT"};function b_(H,p,F){let{fw:f}=p;return H.$$set=g=>{"fw"in g&&F(0,f=g.fw)},[f]}class E_ extends Gg{constructor(p){super();Zg(this,p,b_,T_,Xg,{fw:0})}}export{E_ as default,k_ as metadata};
