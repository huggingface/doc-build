import{S as d_,i as c_,s as p_,e as a,k as l,w as k,t as n,M as h_,c as r,d as t,m as d,a as i,x as v,h as s,b as c,F as e,g as f,y as T,q as w,o as y,B as D}from"../../chunks/vendor-ab4e3193.js";import{T as Ie}from"../../chunks/Tip-b5c6375a.js";import{D as J}from"../../chunks/Docstring-91f1beab.js";import{C as et}from"../../chunks/CodeBlock-516df0c5.js";import{I as Re}from"../../chunks/IconCopyLink-d992940d.js";import"../../chunks/CopyButton-204b56db.js";function f_(O){let h,F,m,g,E;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function u_(O){let h,F,m,g,E;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function m_(O){let h,F,m,g,E;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function g_(O){let h,F,m,g,E;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function __(O){let h,F,m,g,E;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function b_(O){let h,F,m,g,E,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,ae,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),E=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),P=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var $=i(h);F=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),m=d(p),g=r(p,"UL",{});var V=i(g);E=r(V,"LI",{});var Ee=i(E);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),q=r(V,"LI",{});var $e=i(q);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=r(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(x,"CODE",{});var ve=i(I);ue=s(ve,"model(inputs)"),ve.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var j=i(M);P=r(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=r(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),ae=d(j),C=r(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(N,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),S=r(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=r(j,"LI",{});var Te=i(R);ke=s(Te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(Te,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),Te.forEach(t),j.forEach(t)},m(p,$){f(p,h,$),e(h,F),f(p,m,$),f(p,g,$),e(g,E),e(E,b),e(g,_),e(g,q),e(q,he),f(p,X,$),f(p,z,$),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,$),f(p,B,$),e(B,te),f(p,Z,$),f(p,M,$),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,ae),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function k_(O){let h,F,m,g,E;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function v_(O){let h,F,m,g,E,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,ae,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),E=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),P=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var $=i(h);F=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),m=d(p),g=r(p,"UL",{});var V=i(g);E=r(V,"LI",{});var Ee=i(E);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),q=r(V,"LI",{});var $e=i(q);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=r(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(x,"CODE",{});var ve=i(I);ue=s(ve,"model(inputs)"),ve.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var j=i(M);P=r(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=r(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),ae=d(j),C=r(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(N,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),S=r(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=r(j,"LI",{});var Te=i(R);ke=s(Te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(Te,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),Te.forEach(t),j.forEach(t)},m(p,$){f(p,h,$),e(h,F),f(p,m,$),f(p,g,$),e(g,E),e(E,b),e(g,_),e(g,q),e(q,he),f(p,X,$),f(p,z,$),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,$),f(p,B,$),e(B,te),f(p,Z,$),f(p,M,$),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,ae),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function T_(O){let h,F,m,g,E;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function w_(O){let h,F,m,g,E,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,ae,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),E=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),P=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var $=i(h);F=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),m=d(p),g=r(p,"UL",{});var V=i(g);E=r(V,"LI",{});var Ee=i(E);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),q=r(V,"LI",{});var $e=i(q);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=r(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(x,"CODE",{});var ve=i(I);ue=s(ve,"model(inputs)"),ve.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var j=i(M);P=r(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=r(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),ae=d(j),C=r(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(N,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),S=r(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=r(j,"LI",{});var Te=i(R);ke=s(Te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(Te,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),Te.forEach(t),j.forEach(t)},m(p,$){f(p,h,$),e(h,F),f(p,m,$),f(p,g,$),e(g,E),e(E,b),e(g,_),e(g,q),e(q,he),f(p,X,$),f(p,z,$),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,$),f(p,B,$),e(B,te),f(p,Z,$),f(p,M,$),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,ae),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function y_(O){let h,F,m,g,E;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function D_(O){let h,F,m,g,E,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,ae,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),E=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),P=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var $=i(h);F=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),m=d(p),g=r(p,"UL",{});var V=i(g);E=r(V,"LI",{});var Ee=i(E);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),q=r(V,"LI",{});var $e=i(q);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=r(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(x,"CODE",{});var ve=i(I);ue=s(ve,"model(inputs)"),ve.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var j=i(M);P=r(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=r(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),ae=d(j),C=r(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(N,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),S=r(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=r(j,"LI",{});var Te=i(R);ke=s(Te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(Te,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),Te.forEach(t),j.forEach(t)},m(p,$){f(p,h,$),e(h,F),f(p,m,$),f(p,g,$),e(g,E),e(E,b),e(g,_),e(g,q),e(q,he),f(p,X,$),f(p,z,$),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,$),f(p,B,$),e(B,te),f(p,Z,$),f(p,M,$),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,ae),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function E_(O){let h,F,m,g,E;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function $_(O){let h,F,m,g,E,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,ae,C,me,L,ge,_e,S,K,be,R,ke,Q,oe;return{c(){h=a("p"),F=n("TF 2.0 models accepts two formats as inputs:"),m=l(),g=a("ul"),E=a("li"),b=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),q=a("li"),he=n("having all inputs as a list, tuple or dict in the first positional arguments."),X=l(),z=a("p"),Y=n("This second option is useful when using "),A=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=a("code"),ue=n("model(inputs)"),le=n("."),W=l(),B=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Z=l(),M=a("ul"),P=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),U=a("code"),ce=n("model(inputs_ids)"),ae=l(),C=a("li"),me=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=a("code"),ge=n("model([input_ids, attention_mask])"),_e=n(" or "),S=a("code"),K=n("model([input_ids, attention_mask, token_type_ids])"),be=l(),R=a("li"),ke=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=a("code"),oe=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(p){h=r(p,"P",{});var $=i(h);F=s($,"TF 2.0 models accepts two formats as inputs:"),$.forEach(t),m=d(p),g=r(p,"UL",{});var V=i(g);E=r(V,"LI",{});var Ee=i(E);b=s(Ee,"having all inputs as keyword arguments (like PyTorch models), or"),Ee.forEach(t),_=d(V),q=r(V,"LI",{});var $e=i(q);he=s($e,"having all inputs as a list, tuple or dict in the first positional arguments."),$e.forEach(t),V.forEach(t),X=d(p),z=r(p,"P",{});var x=i(z);Y=s(x,"This second option is useful when using "),A=r(x,"CODE",{});var pe=i(A);ee=s(pe,"tf.keras.Model.fit"),pe.forEach(t),fe=s(x,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(x,"CODE",{});var ve=i(I);ue=s(ve,"model(inputs)"),ve.forEach(t),le=s(x,"."),x.forEach(t),W=d(p),B=r(p,"P",{});var ye=i(B);te=s(ye,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),ye.forEach(t),Z=d(p),M=r(p,"UL",{});var j=i(M);P=r(j,"LI",{});var G=i(P);ne=s(G,"a single Tensor with "),H=r(G,"CODE",{});var De=i(H);de=s(De,"input_ids"),De.forEach(t),se=s(G," only and nothing else: "),U=r(G,"CODE",{});var Fe=i(U);ce=s(Fe,"model(inputs_ids)"),Fe.forEach(t),G.forEach(t),ae=d(j),C=r(j,"LI",{});var N=i(C);me=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),L=r(N,"CODE",{});var re=i(L);ge=s(re,"model([input_ids, attention_mask])"),re.forEach(t),_e=s(N," or "),S=r(N,"CODE",{});var we=i(S);K=s(we,"model([input_ids, attention_mask, token_type_ids])"),we.forEach(t),N.forEach(t),be=d(j),R=r(j,"LI",{});var Te=i(R);ke=s(Te,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),Q=r(Te,"CODE",{});var ie=i(Q);oe=s(ie,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),ie.forEach(t),Te.forEach(t),j.forEach(t)},m(p,$){f(p,h,$),e(h,F),f(p,m,$),f(p,g,$),e(g,E),e(E,b),e(g,_),e(g,q),e(q,he),f(p,X,$),f(p,z,$),e(z,Y),e(z,A),e(A,ee),e(z,fe),e(z,I),e(I,ue),e(z,le),f(p,W,$),f(p,B,$),e(B,te),f(p,Z,$),f(p,M,$),e(M,P),e(P,ne),e(P,H),e(H,de),e(P,se),e(P,U),e(U,ce),e(M,ae),e(M,C),e(C,me),e(C,L),e(L,ge),e(C,_e),e(C,S),e(S,K),e(M,be),e(M,R),e(R,ke),e(R,Q),e(Q,oe)},d(p){p&&t(h),p&&t(m),p&&t(g),p&&t(X),p&&t(z),p&&t(W),p&&t(B),p&&t(Z),p&&t(M)}}}function F_(O){let h,F,m,g,E;return{c(){h=a("p"),F=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),m=a("code"),g=n("Module"),E=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(b){h=r(b,"P",{});var _=i(h);F=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),m=r(_,"CODE",{});var q=i(m);g=s(q,"Module"),q.forEach(t),E=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(b,_){f(b,h,_),e(h,F),e(h,m),e(m,g),e(h,E)},d(b){b&&t(h)}}}function q_(O){let h,F,m,g,E,b,_,q,he,X,z,Y,A,ee,fe,I,ue,le,W,B,te,Z,M,P,ne,H,de,se,U,ce,ae,C,me,L,ge,_e,S,K,be,R,ke,Q,oe,p,$,V,Ee,$e,x,pe,ve,ye,j,G,De,Fe,N,re,we,Te,ie,Dl,Ns,El,$l,Os,Fl,ql,Ho,zl,Ml,Cl,$t,Pl,Ws,Rl,jl,Hs,xl,Bl,ci,Ft,ao,ya,Uo,Ll,Da,Al,pi,ze,Qo,Il,Ea,Sl,Nl,dt,Go,Ol,$a,Wl,Hl,Ko,Fa,Ul,Ql,qa,Gl,Kl,ro,Vo,Vl,qt,Jl,za,Xl,Yl,Ma,Zl,ed,td,tt,Jo,od,Ca,nd,sd,Xo,ad,zt,rd,Pa,id,ld,Ra,dd,cd,pd,ja,hi,Mt,io,xa,Yo,hd,Ba,fd,fi,Je,Zo,ud,en,md,La,gd,_d,bd,ct,tn,kd,Aa,vd,Td,on,Ia,wd,yd,Sa,Dd,Ed,ot,nn,$d,Na,Fd,qd,sn,zd,Ct,Md,Oa,Cd,Pd,Wa,Rd,jd,ui,Pt,lo,Ha,an,xd,Ua,Bd,mi,Xe,rn,Ld,ln,Ad,dn,Id,Sd,Nd,cn,Od,pn,Wd,Hd,Ud,Se,hn,Qd,Rt,Gd,Us,Kd,Vd,Qa,Jd,Xd,Yd,co,Zd,Ga,ec,tc,fn,gi,jt,po,Ka,un,oc,Va,nc,_i,xt,mn,sc,Ja,ac,bi,Bt,ho,Xa,gn,rc,Ya,ic,ki,Ye,_n,lc,Lt,dc,Za,cc,pc,bn,hc,fc,uc,kn,mc,vn,gc,_c,bc,Ne,Tn,kc,At,vc,Qs,Tc,wc,er,yc,Dc,Ec,fo,$c,tr,Fc,qc,wn,vi,It,uo,or,yn,zc,nr,Mc,Ti,je,Dn,Cc,sr,Pc,Rc,En,jc,$n,xc,Bc,Lc,Fn,Ac,qn,Ic,Sc,Nc,qe,zn,Oc,St,Wc,Gs,Hc,Uc,ar,Qc,Gc,Kc,mo,Vc,rr,Jc,Xc,Mn,Yc,ir,Zc,ep,Cn,wi,Nt,go,lr,Pn,tp,dr,op,yi,xe,Rn,np,cr,sp,ap,jn,rp,xn,ip,lp,dp,Bn,cp,Ln,pp,hp,fp,Oe,An,up,Ot,mp,Ks,gp,_p,pr,bp,kp,vp,_o,Tp,hr,wp,yp,In,Di,Wt,bo,fr,Sn,Dp,ur,Ep,Ei,Be,Nn,$p,Ht,Fp,mr,qp,zp,gr,Mp,Cp,Pp,On,Rp,Wn,jp,xp,Bp,Hn,Lp,Un,Ap,Ip,Sp,We,Qn,Np,Ut,Op,Vs,Wp,Hp,_r,Up,Qp,Gp,ko,Kp,br,Vp,Jp,Gn,$i,Qt,vo,kr,Kn,Xp,vr,Yp,Fi,Le,Vn,Zp,Jn,eh,Xn,th,oh,nh,Yn,sh,Zn,ah,rh,ih,To,lh,He,es,dh,Gt,ch,Js,ph,hh,Tr,fh,uh,mh,wo,gh,wr,_h,bh,ts,qi,Kt,yo,yr,os,kh,Dr,vh,zi,lt,ns,Th,Er,wh,yh,nt,ss,Dh,$r,Eh,$h,as,Fh,Fr,qh,zh,Mh,Ze,Ch,qr,Ph,Rh,zr,jh,xh,Mr,Bh,Lh,Cr,Ah,Ih,Mi,Vt,Do,Pr,rs,Sh,Rr,Nh,Ci,Ae,is,Oh,Jt,Wh,jr,Hh,Uh,ls,Qh,Gh,Kh,ds,Vh,cs,Jh,Xh,Yh,Eo,Zh,Ue,ps,ef,Xt,tf,Xs,of,nf,xr,sf,af,rf,$o,lf,Br,df,cf,hs,Pi,Yt,Fo,Lr,fs,pf,Ar,hf,Ri,Me,us,ff,Ir,uf,mf,ms,gf,gs,_f,bf,kf,_s,vf,bs,Tf,wf,yf,qo,Df,Qe,ks,Ef,Zt,$f,Ys,Ff,qf,Sr,zf,Mf,Cf,zo,Pf,Nr,Rf,jf,vs,ji,eo,Mo,Or,Ts,xf,Wr,Bf,xi,Ce,ws,Lf,Hr,Af,If,ys,Sf,Ds,Nf,Of,Wf,Es,Hf,$s,Uf,Qf,Gf,Co,Kf,Ge,Fs,Vf,to,Jf,Zs,Xf,Yf,Ur,Zf,eu,tu,Po,ou,Qr,nu,su,qs,Bi,oo,Ro,Gr,zs,au,Kr,ru,Li,Pe,Ms,iu,no,lu,Vr,du,cu,Jr,pu,hu,fu,Cs,uu,Ps,mu,gu,_u,Rs,bu,js,ku,vu,Tu,jo,wu,Ke,xs,yu,so,Du,ea,Eu,$u,Xr,Fu,qu,zu,xo,Mu,Yr,Cu,Pu,Bs,Ai;return b=new Re({}),ee=new Re({}),j=new Re({}),we=new J({props:{name:"class transformers.DebertaConfig",anchor:"transformers.DebertaConfig",parameters:[{name:"vocab_size",val:" = 50265"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 512"},{name:"type_vocab_size",val:" = 0"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-07"},{name:"relative_attention",val:" = False"},{name:"max_relative_positions",val:" = -1"},{name:"pad_token_id",val:" = 0"},{name:"position_biased_input",val:" = True"},{name:"pos_att_type",val:" = None"},{name:"pooler_dropout",val:" = 0"},{name:"pooler_hidden_act",val:" = 'gelu'"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/configuration_deberta.py#L33",parametersDescription:[{anchor:"transformers.DebertaConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the DeBERTa model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"vocab_size"},{anchor:"transformers.DebertaConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.DebertaConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.DebertaConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.DebertaConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.DebertaConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;silu&quot;</code>, <code>&quot;gelu&quot;</code>, <code>&quot;tanh&quot;</code>, <code>&quot;gelu_fast&quot;</code>, <code>&quot;mish&quot;</code>, <code>&quot;linear&quot;</code>, <code>&quot;sigmoid&quot;</code> and <code>&quot;gelu_new&quot;</code>
are supported.`,name:"hidden_act"},{anchor:"transformers.DebertaConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.DebertaConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.DebertaConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 512) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.DebertaConfig.type_vocab_size",description:`<strong>type_vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 2) &#x2014;
The vocabulary size of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaModel">DebertaModel</a> or <a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.TFDebertaModel">TFDebertaModel</a>.`,name:"type_vocab_size"},{anchor:"transformers.DebertaConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.DebertaConfig.relative_attention",description:`<strong>relative_attention</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether use relative position encoding.`,name:"relative_attention"},{anchor:"transformers.DebertaConfig.max_relative_positions",description:`<strong>max_relative_positions</strong> (<code>int</code>, <em>optional</em>, defaults to 1) &#x2014;
The range of relative positions <code>[-max_position_embeddings, max_position_embeddings]</code>. Use the same value
as <code>max_position_embeddings</code>.`,name:"max_relative_positions"},{anchor:"transformers.DebertaConfig.pad_token_id",description:`<strong>pad_token_id</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The value used to pad input_ids.`,name:"pad_token_id"},{anchor:"transformers.DebertaConfig.position_biased_input",description:`<strong>position_biased_input</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether add absolute position embedding to content embedding.`,name:"position_biased_input"},{anchor:"transformers.DebertaConfig.pos_att_type",description:`<strong>pos_att_type</strong> (<code>List[str]</code>, <em>optional</em>) &#x2014;
The type of relative position attention, it can be a combination of <code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>, e.g. <code>[&quot;p2c&quot;]</code>,
<code>[&quot;p2c&quot;, &quot;c2p&quot;]</code>.`,name:"pos_att_type"},{anchor:"transformers.DebertaConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, optional, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"}]}}),Uo=new Re({}),Qo=new J({props:{name:"class transformers.DebertaTokenizer",anchor:"transformers.DebertaTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/tokenization_deberta.py#L62",parametersDescription:[{anchor:"transformers.DebertaTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.DebertaTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),Go=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/tokenization_deberta.py#L133",parametersDescription:[{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Vo=new J({props:{name:"get_special_tokens_mask",anchor:"transformers.DebertaTokenizer.get_special_tokens_mask",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"},{name:"already_has_special_tokens",val:": bool = False"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/tokenization_deberta.py#L158",parametersDescription:[{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"},{anchor:"transformers.DebertaTokenizer.get_special_tokens_mask.already_has_special_tokens",description:`<strong>already_has_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the token list is already formatted with special tokens for the model.`,name:"already_has_special_tokens"}],returnDescription:`
<p>A list of integers in the range [0, 1]: 1 for a special token, 0 for a sequence token.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Jo=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/tokenization_deberta.py#L185",parametersDescription:[{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizer.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),Xo=new et({props:{code:`0 0 0 0 0 0 0 0 0 0 0 1 1 1 1 1 1 1 1 1
| first sequence    | second sequence |,`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1<span class="hljs-number"> 1 </span>1 1
| first sequence    | second sequence |`}}),Yo=new Re({}),Zo=new J({props:{name:"class transformers.DebertaTokenizerFast",anchor:"transformers.DebertaTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '[CLS]'"},{name:"eos_token",val:" = '[SEP]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"unk_token",val:" = '[UNK]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/tokenization_deberta_fast.py#L63",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.DebertaTokenizerFast.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.DebertaTokenizerFast.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.DebertaTokenizerFast.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.DebertaTokenizerFast.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.DebertaTokenizerFast.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.DebertaTokenizerFast.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"}]}}),tn=new J({props:{name:"build_inputs_with_special_tokens",anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/tokenization_deberta_fast.py#L153",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs to which the special tokens will be added.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.build_inputs_with_special_tokens.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#input-ids">input IDs</a> with the appropriate special tokens.</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),nn=new J({props:{name:"create_token_type_ids_from_sequences",anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences",parameters:[{name:"token_ids_0",val:": typing.List[int]"},{name:"token_ids_1",val:": typing.Optional[typing.List[int]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/tokenization_deberta_fast.py#L178",parametersDescription:[{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_0",description:`<strong>token_ids_0</strong> (<code>List[int]</code>) &#x2014;
List of IDs.`,name:"token_ids_0"},{anchor:"transformers.DebertaTokenizerFast.create_token_type_ids_from_sequences.token_ids_1",description:`<strong>token_ids_1</strong> (<code>List[int]</code>, <em>optional</em>) &#x2014;
Optional second list of IDs for sequence pairs.`,name:"token_ids_1"}],returnDescription:`
<p>List of <a href="../glossary#token-type-ids">token type IDs</a> according to the given sequence(s).</p>
`,returnType:`
<p><code>List[int]</code></p>
`}}),sn=new et({props:{code:`0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0
| first sequence    | second sequence |,`,highlighted:`0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0<span class="hljs-number"> 0 </span>0 0
| first sequence    | second sequence |`}}),an=new Re({}),rn=new J({props:{name:"class transformers.DebertaModel",anchor:"transformers.DebertaModel",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_deberta.py#L882",parametersDescription:[{anchor:"transformers.DebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new J({props:{name:"forward",anchor:"transformers.DebertaModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_deberta.py#L906",parametersDescription:[{anchor:"transformers.DebertaModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),co=new Ie({props:{$$slots:{default:[f_]},$$scope:{ctx:O}}}),fn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaModel
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaModel.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaModel.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),un=new Re({}),mn=new J({props:{name:"class transformers.DebertaPreTrainedModel",anchor:"transformers.DebertaPreTrainedModel",parameters:[{name:"config",val:": PretrainedConfig"},{name:"*inputs",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_deberta.py#L787"}}),gn=new Re({}),_n=new J({props:{name:"class transformers.DebertaForMaskedLM",anchor:"transformers.DebertaForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_deberta.py#L994",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Tn=new J({props:{name:"forward",anchor:"transformers.DebertaForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_deberta.py#L1013",parametersDescription:[{anchor:"transformers.DebertaForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),fo=new Ie({props:{$$slots:{default:[u_]},$$scope:{ctx:O}}}),wn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForMaskedLM
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForMaskedLM.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="pt")
labels = tokenizer("The capital of France is Paris.", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),yn=new Re({}),Dn=new J({props:{name:"class transformers.DebertaForSequenceClassification",anchor:"transformers.DebertaForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_deberta.py#L1129",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),zn=new J({props:{name:"forward",anchor:"transformers.DebertaForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_deberta.py#L1154",parametersDescription:[{anchor:"transformers.DebertaForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),mo=new Ie({props:{$$slots:{default:[m_]},$$scope:{ctx:O}}}),Mn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForSequenceClassification
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Cn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForSequenceClassification
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForSequenceClassification.from_pretrained("microsoft/deberta-base", problem_type="multi_label_classification")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Pn=new Re({}),Rn=new J({props:{name:"class transformers.DebertaForTokenClassification",anchor:"transformers.DebertaForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_deberta.py#L1248",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),An=new J({props:{name:"forward",anchor:"transformers.DebertaForTokenClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_deberta.py#L1262",parametersDescription:[{anchor:"transformers.DebertaForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.TokenClassifierOutput"
>transformers.modeling_outputs.TokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),_o=new Ie({props:{$$slots:{default:[g_]},$$scope:{ctx:O}}}),In=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForTokenClassification
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForTokenClassification.from_pretrained("microsoft/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Sn=new Re({}),Nn=new J({props:{name:"class transformers.DebertaForQuestionAnswering",anchor:"transformers.DebertaForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_deberta.py#L1333",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Qn=new J({props:{name:"forward",anchor:"transformers.DebertaForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_deberta.py#L1346",parametersDescription:[{anchor:"transformers.DebertaForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.DebertaForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.DebertaForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.DebertaForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.DebertaForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.DebertaForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.DebertaForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_outputs.QuestionAnsweringModelOutput"
>transformers.modeling_outputs.QuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),ko=new Ie({props:{$$slots:{default:[__]},$$scope:{ctx:O}}}),Gn=new et({props:{code:`from transformers import DebertaTokenizer, DebertaForQuestionAnswering
import torch

tokenizer = DebertaTokenizer.from_pretrained("microsoft/deberta-base")
model = DebertaForQuestionAnswering.from_pretrained("microsoft/deberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
inputs = tokenizer(question, text, return_tensors="pt")
start_positions = torch.tensor([1])
end_positions = torch.tensor([3])

outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
loss = outputs.loss
start_scores = outputs.start_logits
end_scores = outputs.end_logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, DebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = DebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;microsoft/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_positions = torch.tensor([<span class="hljs-number">1</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>end_positions = torch.tensor([<span class="hljs-number">3</span>])

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, start_positions=start_positions, end_positions=end_positions)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>start_scores = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_scores = outputs.end_logits`}}),Kn=new Re({}),Vn=new J({props:{name:"class transformers.TFDebertaModel",anchor:"transformers.TFDebertaModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_tf_deberta.py#L1088",parametersDescription:[{anchor:"transformers.TFDebertaModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),To=new Ie({props:{$$slots:{default:[b_]},$$scope:{ctx:O}}}),es=new J({props:{name:"call",anchor:"transformers.TFDebertaModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_tf_deberta.py#L1094",parametersDescription:[{anchor:"transformers.TFDebertaModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaModel.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutput"
>transformers.modeling_tf_outputs.TFBaseModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),wo=new Ie({props:{$$slots:{default:[k_]},$$scope:{ctx:O}}}),ts=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaModel
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaModel.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaModel.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),os=new Re({}),ns=new J({props:{name:"class transformers.TFDebertaPreTrainedModel",anchor:"transformers.TFDebertaPreTrainedModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_tf_deberta.py#L993"}}),ss=new J({props:{name:"call",anchor:"None",parameters:[{name:"inputs",val:""},{name:"training",val:" = None"},{name:"mask",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/keras/engine/training.py#L450",returnDescription:`
<p>A tensor if there is a single output, or
a list of tensors if there are more than one outputs.</p>
`}}),rs=new Re({}),is=new J({props:{name:"class transformers.TFDebertaForMaskedLM",anchor:"transformers.TFDebertaForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_tf_deberta.py#L1150",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Eo=new Ie({props:{$$slots:{default:[v_]},$$scope:{ctx:O}}}),ps=new J({props:{name:"call",anchor:"transformers.TFDebertaForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_tf_deberta.py#L1166",parametersDescription:[{anchor:"transformers.TFDebertaForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForMaskedLM.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),$o=new Ie({props:{$$slots:{default:[T_]},$$scope:{ctx:O}}}),hs=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForMaskedLM
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForMaskedLM.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForMaskedLM.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),fs=new Re({}),us=new J({props:{name:"class transformers.TFDebertaForSequenceClassification",anchor:"transformers.TFDebertaForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_tf_deberta.py#L1252",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),qo=new Ie({props:{$$slots:{default:[w_]},$$scope:{ctx:O}}}),ks=new J({props:{name:"call",anchor:"transformers.TFDebertaForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_tf_deberta.py#L1270",parametersDescription:[{anchor:"transformers.TFDebertaForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForSequenceClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),zo=new Ie({props:{$$slots:{default:[y_]},$$scope:{ctx:O}}}),vs=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForSequenceClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForSequenceClassification.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ts=new Re({}),ws=new J({props:{name:"class transformers.TFDebertaForTokenClassification",anchor:"transformers.TFDebertaForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_tf_deberta.py#L1355",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Co=new Ie({props:{$$slots:{default:[D_]},$$scope:{ctx:O}}}),Fs=new J({props:{name:"call",anchor:"transformers.TFDebertaForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_tf_deberta.py#L1367",parametersDescription:[{anchor:"transformers.TFDebertaForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForTokenClassification.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFTokenClassifierOutput"
>transformers.modeling_tf_outputs.TFTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Po=new Ie({props:{$$slots:{default:[E_]},$$scope:{ctx:O}}}),qs=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForTokenClassification
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForTokenClassification.from_pretrained("kamalkraj/deberta-base")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForTokenClassification.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),zs=new Re({}),Ms=new J({props:{name:"class transformers.TFDebertaForQuestionAnswering",anchor:"transformers.TFDebertaForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_tf_deberta.py#L1448",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig">DebertaConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.16.2/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),jo=new Ie({props:{$$slots:{default:[$_]},$$scope:{ctx:O}}}),xs=new J({props:{name:"call",anchor:"transformers.TFDebertaForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.16.2/src/transformers/models/deberta/modeling_tf_deberta.py#L1459",parametersDescription:[{anchor:"transformers.TFDebertaForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaTokenizer">DebertaTokenizer</a>. See <a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.16.2/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <em>input_ids</em> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.return_dict",description:"<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;\nWhether or not to return a [`~transformers.file_utils.ModelOutput&#x201C;] instead of a plain tuple.",name:"return_dict"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFDebertaForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaConfig"
>DebertaConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.16.2/en/main_classes/output#transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput"
>transformers.modeling_tf_outputs.TFQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),xo=new Ie({props:{$$slots:{default:[F_]},$$scope:{ctx:O}}}),Bs=new et({props:{code:`from transformers import DebertaTokenizer, TFDebertaForQuestionAnswering
import tensorflow as tf

tokenizer = DebertaTokenizer.from_pretrained("kamalkraj/deberta-base")
model = TFDebertaForQuestionAnswering.from_pretrained("kamalkraj/deberta-base")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> DebertaTokenizer, TFDebertaForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = DebertaTokenizer.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFDebertaForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;kamalkraj/deberta-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),{c(){h=a("meta"),F=l(),m=a("h1"),g=a("a"),E=a("span"),k(b.$$.fragment),_=l(),q=a("span"),he=n("DeBERTa"),X=l(),z=a("h2"),Y=a("a"),A=a("span"),k(ee.$$.fragment),fe=l(),I=a("span"),ue=n("Overview"),le=l(),W=a("p"),B=n("The DeBERTa model was proposed in "),te=a("a"),Z=n("DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),M=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),P=l(),ne=a("p"),H=n(`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),de=l(),se=a("p"),U=n("The abstract from the paper is the following:"),ce=l(),ae=a("p"),C=a("em"),me=n(`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),L=a("a"),ge=n("https://github.com/microsoft/DeBERTa"),_e=n("."),S=l(),K=a("p"),be=n("This model was contributed by "),R=a("a"),ke=n("DeBERTa"),Q=n(`. This model TF 2.0 implementation was
contributed by `),oe=a("a"),p=n("kamalkraj"),$=n(" . The original code can be found "),V=a("a"),Ee=n("here"),$e=n("."),x=l(),pe=a("h2"),ve=a("a"),ye=a("span"),k(j.$$.fragment),G=l(),De=a("span"),Fe=n("DebertaConfig"),N=l(),re=a("div"),k(we.$$.fragment),Te=l(),ie=a("p"),Dl=n("This is the configuration class to store the configuration of a "),Ns=a("a"),El=n("DebertaModel"),$l=n(" or a "),Os=a("a"),Fl=n("TFDebertaModel"),ql=n(`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=a("a"),zl=n("microsoft/deberta-base"),Ml=n(" architecture."),Cl=l(),$t=a("p"),Pl=n("Configuration objects inherit from "),Ws=a("a"),Rl=n("PretrainedConfig"),jl=n(` and can be used to control the model outputs. Read the
documentation from `),Hs=a("a"),xl=n("PretrainedConfig"),Bl=n(" for more information."),ci=l(),Ft=a("h2"),ao=a("a"),ya=a("span"),k(Uo.$$.fragment),Ll=l(),Da=a("span"),Al=n("DebertaTokenizer"),pi=l(),ze=a("div"),k(Qo.$$.fragment),Il=l(),Ea=a("p"),Sl=n("Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Nl=l(),dt=a("div"),k(Go.$$.fragment),Ol=l(),$a=a("p"),Wl=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Hl=l(),Ko=a("ul"),Fa=a("li"),Ul=n("single sequence: [CLS] X [SEP]"),Ql=l(),qa=a("li"),Gl=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Kl=l(),ro=a("div"),k(Vo.$$.fragment),Vl=l(),qt=a("p"),Jl=n(`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),za=a("code"),Xl=n("prepare_for_model"),Yl=n(" or "),Ma=a("code"),Zl=n("encode_plus"),ed=n(" methods."),td=l(),tt=a("div"),k(Jo.$$.fragment),od=l(),Ca=a("p"),nd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),sd=l(),k(Xo.$$.fragment),ad=l(),zt=a("p"),rd=n("If "),Pa=a("code"),id=n("token_ids_1"),ld=n(" is "),Ra=a("code"),dd=n("None"),cd=n(", this method only returns the first portion of the mask (0s)."),pd=l(),ja=a("div"),hi=l(),Mt=a("h2"),io=a("a"),xa=a("span"),k(Yo.$$.fragment),hd=l(),Ba=a("span"),fd=n("DebertaTokenizerFast"),fi=l(),Je=a("div"),k(Zo.$$.fragment),ud=l(),en=a("p"),md=n(`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),La=a("em"),gd=n("tokenizers"),_d=n(" library."),bd=l(),ct=a("div"),k(tn.$$.fragment),kd=l(),Aa=a("p"),vd=n(`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Td=l(),on=a("ul"),Ia=a("li"),wd=n("single sequence: [CLS] X [SEP]"),yd=l(),Sa=a("li"),Dd=n("pair of sequences: [CLS] A [SEP] B [SEP]"),Ed=l(),ot=a("div"),k(nn.$$.fragment),$d=l(),Na=a("p"),Fd=n(`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),qd=l(),k(sn.$$.fragment),zd=l(),Ct=a("p"),Md=n("If "),Oa=a("code"),Cd=n("token_ids_1"),Pd=n(" is "),Wa=a("code"),Rd=n("None"),jd=n(", this method only returns the first portion of the mask (0s)."),ui=l(),Pt=a("h2"),lo=a("a"),Ha=a("span"),k(an.$$.fragment),xd=l(),Ua=a("span"),Bd=n("DebertaModel"),mi=l(),Xe=a("div"),k(rn.$$.fragment),Ld=l(),ln=a("p"),Ad=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),dn=a("a"),Id=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Sd=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Nd=l(),cn=a("p"),Od=n("This model is also a PyTorch "),pn=a("a"),Wd=n("torch.nn.Module"),Hd=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ud=l(),Se=a("div"),k(hn.$$.fragment),Qd=l(),Rt=a("p"),Gd=n("The "),Us=a("a"),Kd=n("DebertaModel"),Vd=n(" forward method, overrides the "),Qa=a("code"),Jd=n("__call__"),Xd=n(" special method."),Yd=l(),k(co.$$.fragment),Zd=l(),Ga=a("p"),ec=n("Example:"),tc=l(),k(fn.$$.fragment),gi=l(),jt=a("h2"),po=a("a"),Ka=a("span"),k(un.$$.fragment),oc=l(),Va=a("span"),nc=n("DebertaPreTrainedModel"),_i=l(),xt=a("div"),k(mn.$$.fragment),sc=l(),Ja=a("p"),ac=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),bi=l(),Bt=a("h2"),ho=a("a"),Xa=a("span"),k(gn.$$.fragment),rc=l(),Ya=a("span"),ic=n("DebertaForMaskedLM"),ki=l(),Ye=a("div"),k(_n.$$.fragment),lc=l(),Lt=a("p"),dc=n("DeBERTa Model with a "),Za=a("code"),cc=n("language modeling"),pc=n(` head on top.
The DeBERTa model was proposed in `),bn=a("a"),hc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),fc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),uc=l(),kn=a("p"),mc=n("This model is also a PyTorch "),vn=a("a"),gc=n("torch.nn.Module"),_c=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),bc=l(),Ne=a("div"),k(Tn.$$.fragment),kc=l(),At=a("p"),vc=n("The "),Qs=a("a"),Tc=n("DebertaForMaskedLM"),wc=n(" forward method, overrides the "),er=a("code"),yc=n("__call__"),Dc=n(" special method."),Ec=l(),k(fo.$$.fragment),$c=l(),tr=a("p"),Fc=n("Example:"),qc=l(),k(wn.$$.fragment),vi=l(),It=a("h2"),uo=a("a"),or=a("span"),k(yn.$$.fragment),zc=l(),nr=a("span"),Mc=n("DebertaForSequenceClassification"),Ti=l(),je=a("div"),k(Dn.$$.fragment),Cc=l(),sr=a("p"),Pc=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Rc=l(),En=a("p"),jc=n("The DeBERTa model was proposed in "),$n=a("a"),xc=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Bc=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Lc=l(),Fn=a("p"),Ac=n("This model is also a PyTorch "),qn=a("a"),Ic=n("torch.nn.Module"),Sc=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Nc=l(),qe=a("div"),k(zn.$$.fragment),Oc=l(),St=a("p"),Wc=n("The "),Gs=a("a"),Hc=n("DebertaForSequenceClassification"),Uc=n(" forward method, overrides the "),ar=a("code"),Qc=n("__call__"),Gc=n(" special method."),Kc=l(),k(mo.$$.fragment),Vc=l(),rr=a("p"),Jc=n("Example of single-label classification:"),Xc=l(),k(Mn.$$.fragment),Yc=l(),ir=a("p"),Zc=n("Example of multi-label classification:"),ep=l(),k(Cn.$$.fragment),wi=l(),Nt=a("h2"),go=a("a"),lr=a("span"),k(Pn.$$.fragment),tp=l(),dr=a("span"),op=n("DebertaForTokenClassification"),yi=l(),xe=a("div"),k(Rn.$$.fragment),np=l(),cr=a("p"),sp=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),ap=l(),jn=a("p"),rp=n("The DeBERTa model was proposed in "),xn=a("a"),ip=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),lp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dp=l(),Bn=a("p"),cp=n("This model is also a PyTorch "),Ln=a("a"),pp=n("torch.nn.Module"),hp=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),fp=l(),Oe=a("div"),k(An.$$.fragment),up=l(),Ot=a("p"),mp=n("The "),Ks=a("a"),gp=n("DebertaForTokenClassification"),_p=n(" forward method, overrides the "),pr=a("code"),bp=n("__call__"),kp=n(" special method."),vp=l(),k(_o.$$.fragment),Tp=l(),hr=a("p"),wp=n("Example:"),yp=l(),k(In.$$.fragment),Di=l(),Wt=a("h2"),bo=a("a"),fr=a("span"),k(Sn.$$.fragment),Dp=l(),ur=a("span"),Ep=n("DebertaForQuestionAnswering"),Ei=l(),Be=a("div"),k(Nn.$$.fragment),$p=l(),Ht=a("p"),Fp=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mr=a("code"),qp=n("span start logits"),zp=n(" and "),gr=a("code"),Mp=n("span end logits"),Cp=n(")."),Pp=l(),On=a("p"),Rp=n("The DeBERTa model was proposed in "),Wn=a("a"),jp=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),xp=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Bp=l(),Hn=a("p"),Lp=n("This model is also a PyTorch "),Un=a("a"),Ap=n("torch.nn.Module"),Ip=n(" subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Sp=l(),We=a("div"),k(Qn.$$.fragment),Np=l(),Ut=a("p"),Op=n("The "),Vs=a("a"),Wp=n("DebertaForQuestionAnswering"),Hp=n(" forward method, overrides the "),_r=a("code"),Up=n("__call__"),Qp=n(" special method."),Gp=l(),k(ko.$$.fragment),Kp=l(),br=a("p"),Vp=n("Example:"),Jp=l(),k(Gn.$$.fragment),$i=l(),Qt=a("h2"),vo=a("a"),kr=a("span"),k(Kn.$$.fragment),Xp=l(),vr=a("span"),Yp=n("TFDebertaModel"),Fi=l(),Le=a("div"),k(Vn.$$.fragment),Zp=l(),Jn=a("p"),eh=n(`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Xn=a("a"),th=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),oh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),nh=l(),Yn=a("p"),sh=n("This model is also a "),Zn=a("a"),ah=n("tf.keras.Model"),rh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ih=l(),k(To.$$.fragment),lh=l(),He=a("div"),k(es.$$.fragment),dh=l(),Gt=a("p"),ch=n("The "),Js=a("a"),ph=n("TFDebertaModel"),hh=n(" forward method, overrides the "),Tr=a("code"),fh=n("__call__"),uh=n(" special method."),mh=l(),k(wo.$$.fragment),gh=l(),wr=a("p"),_h=n("Example:"),bh=l(),k(ts.$$.fragment),qi=l(),Kt=a("h2"),yo=a("a"),yr=a("span"),k(os.$$.fragment),kh=l(),Dr=a("span"),vh=n("TFDebertaPreTrainedModel"),zi=l(),lt=a("div"),k(ns.$$.fragment),Th=l(),Er=a("p"),wh=n(`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),yh=l(),nt=a("div"),k(ss.$$.fragment),Dh=l(),$r=a("p"),Eh=n("Calls the model on new inputs and returns the outputs as tensors."),$h=l(),as=a("p"),Fh=n("In this case "),Fr=a("code"),qh=n("call()"),zh=n(` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),Mh=l(),Ze=a("p"),Ch=n(`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),qr=a("code"),Ph=n("tf.keras.Model"),Rh=n(`.
To call a model on an input, always use the `),zr=a("code"),jh=n("__call__()"),xh=n(` method,
i.e. `),Mr=a("code"),Bh=n("model(inputs)"),Lh=n(", which relies on the underlying "),Cr=a("code"),Ah=n("call()"),Ih=n(" method."),Mi=l(),Vt=a("h2"),Do=a("a"),Pr=a("span"),k(rs.$$.fragment),Sh=l(),Rr=a("span"),Nh=n("TFDebertaForMaskedLM"),Ci=l(),Ae=a("div"),k(is.$$.fragment),Oh=l(),Jt=a("p"),Wh=n("DeBERTa Model with a "),jr=a("code"),Hh=n("language modeling"),Uh=n(` head on top.
The DeBERTa model was proposed in `),ls=a("a"),Qh=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gh=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Kh=l(),ds=a("p"),Vh=n("This model is also a "),cs=a("a"),Jh=n("tf.keras.Model"),Xh=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yh=l(),k(Eo.$$.fragment),Zh=l(),Ue=a("div"),k(ps.$$.fragment),ef=l(),Xt=a("p"),tf=n("The "),Xs=a("a"),of=n("TFDebertaForMaskedLM"),nf=n(" forward method, overrides the "),xr=a("code"),sf=n("__call__"),af=n(" special method."),rf=l(),k($o.$$.fragment),lf=l(),Br=a("p"),df=n("Example:"),cf=l(),k(hs.$$.fragment),Pi=l(),Yt=a("h2"),Fo=a("a"),Lr=a("span"),k(fs.$$.fragment),pf=l(),Ar=a("span"),hf=n("TFDebertaForSequenceClassification"),Ri=l(),Me=a("div"),k(us.$$.fragment),ff=l(),Ir=a("p"),uf=n(`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),mf=l(),ms=a("p"),gf=n("The DeBERTa model was proposed in "),gs=a("a"),_f=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),bf=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kf=l(),_s=a("p"),vf=n("This model is also a "),bs=a("a"),Tf=n("tf.keras.Model"),wf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yf=l(),k(qo.$$.fragment),Df=l(),Qe=a("div"),k(ks.$$.fragment),Ef=l(),Zt=a("p"),$f=n("The "),Ys=a("a"),Ff=n("TFDebertaForSequenceClassification"),qf=n(" forward method, overrides the "),Sr=a("code"),zf=n("__call__"),Mf=n(" special method."),Cf=l(),k(zo.$$.fragment),Pf=l(),Nr=a("p"),Rf=n("Example:"),jf=l(),k(vs.$$.fragment),ji=l(),eo=a("h2"),Mo=a("a"),Or=a("span"),k(Ts.$$.fragment),xf=l(),Wr=a("span"),Bf=n("TFDebertaForTokenClassification"),xi=l(),Ce=a("div"),k(ws.$$.fragment),Lf=l(),Hr=a("p"),Af=n(`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),If=l(),ys=a("p"),Sf=n("The DeBERTa model was proposed in "),Ds=a("a"),Nf=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Of=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Wf=l(),Es=a("p"),Hf=n("This model is also a "),$s=a("a"),Uf=n("tf.keras.Model"),Qf=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gf=l(),k(Co.$$.fragment),Kf=l(),Ge=a("div"),k(Fs.$$.fragment),Vf=l(),to=a("p"),Jf=n("The "),Zs=a("a"),Xf=n("TFDebertaForTokenClassification"),Yf=n(" forward method, overrides the "),Ur=a("code"),Zf=n("__call__"),eu=n(" special method."),tu=l(),k(Po.$$.fragment),ou=l(),Qr=a("p"),nu=n("Example:"),su=l(),k(qs.$$.fragment),Bi=l(),oo=a("h2"),Ro=a("a"),Gr=a("span"),k(zs.$$.fragment),au=l(),Kr=a("span"),ru=n("TFDebertaForQuestionAnswering"),Li=l(),Pe=a("div"),k(Ms.$$.fragment),iu=l(),no=a("p"),lu=n(`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Vr=a("code"),du=n("span start logits"),cu=n(" and "),Jr=a("code"),pu=n("span end logits"),hu=n(")."),fu=l(),Cs=a("p"),uu=n("The DeBERTa model was proposed in "),Ps=a("a"),mu=n(`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),gu=n(` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_u=l(),Rs=a("p"),bu=n("This model is also a "),js=a("a"),ku=n("tf.keras.Model"),vu=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Tu=l(),k(jo.$$.fragment),wu=l(),Ke=a("div"),k(xs.$$.fragment),yu=l(),so=a("p"),Du=n("The "),ea=a("a"),Eu=n("TFDebertaForQuestionAnswering"),$u=n(" forward method, overrides the "),Xr=a("code"),Fu=n("__call__"),qu=n(" special method."),zu=l(),k(xo.$$.fragment),Mu=l(),Yr=a("p"),Cu=n("Example:"),Pu=l(),k(Bs.$$.fragment),this.h()},l(o){const u=h_('[data-svelte="svelte-1phssyn"]',document.head);h=r(u,"META",{name:!0,content:!0}),u.forEach(t),F=d(o),m=r(o,"H1",{class:!0});var Ls=i(m);g=r(Ls,"A",{id:!0,class:!0,href:!0});var Zr=i(g);E=r(Zr,"SPAN",{});var ei=i(E);v(b.$$.fragment,ei),ei.forEach(t),Zr.forEach(t),_=d(Ls),q=r(Ls,"SPAN",{});var ti=i(q);he=s(ti,"DeBERTa"),ti.forEach(t),Ls.forEach(t),X=d(o),z=r(o,"H2",{class:!0});var As=i(z);Y=r(As,"A",{id:!0,class:!0,href:!0});var oi=i(Y);A=r(oi,"SPAN",{});var ni=i(A);v(ee.$$.fragment,ni),ni.forEach(t),oi.forEach(t),fe=d(As),I=r(As,"SPAN",{});var si=i(I);ue=s(si,"Overview"),si.forEach(t),As.forEach(t),le=d(o),W=r(o,"P",{});var Is=i(W);B=s(Is,"The DeBERTa model was proposed in "),te=r(Is,"A",{href:!0,rel:!0});var ai=i(te);Z=s(ai,"DeBERTa: Decoding-enhanced BERT with Disentangled Attention"),ai.forEach(t),M=s(Is,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen It is based on Google\u2019s
BERT model released in 2018 and Facebook\u2019s RoBERTa model released in 2019.`),Is.forEach(t),P=d(o),ne=r(o,"P",{});var ri=i(ne);H=s(ri,`It builds on RoBERTa with disentangled attention and enhanced mask decoder training with half of the data used in
RoBERTa.`),ri.forEach(t),de=d(o),se=r(o,"P",{});var ii=i(se);U=s(ii,"The abstract from the paper is the following:"),ii.forEach(t),ce=d(o),ae=r(o,"P",{});var li=i(ae);C=r(li,"EM",{});var Ss=i(C);me=s(Ss,`Recent progress in pre-trained neural language models has significantly improved the performance of many natural
language processing (NLP) tasks. In this paper we propose a new model architecture DeBERTa (Decoding-enhanced BERT with
disentangled attention) that improves the BERT and RoBERTa models using two novel techniques. The first is the
disentangled attention mechanism, where each word is represented using two vectors that encode its content and
position, respectively, and the attention weights among words are computed using disentangled matrices on their
contents and relative positions. Second, an enhanced mask decoder is used to replace the output softmax layer to
predict the masked tokens for model pretraining. We show that these two techniques significantly improve the efficiency
of model pretraining and performance of downstream tasks. Compared to RoBERTa-Large, a DeBERTa model trained on half of
the training data performs consistently better on a wide range of NLP tasks, achieving improvements on MNLI by +0.9%
(90.2% vs. 91.1%), on SQuAD v2.0 by +2.3% (88.4% vs. 90.7%) and RACE by +3.6% (83.2% vs. 86.8%). The DeBERTa code and
pre-trained models will be made publicly available at `),L=r(Ss,"A",{href:!0,rel:!0});var di=i(L);ge=s(di,"https://github.com/microsoft/DeBERTa"),di.forEach(t),_e=s(Ss,"."),Ss.forEach(t),li.forEach(t),S=d(o),K=r(o,"P",{});var Bo=i(K);be=s(Bo,"This model was contributed by "),R=r(Bo,"A",{href:!0,rel:!0});var Ru=i(R);ke=s(Ru,"DeBERTa"),Ru.forEach(t),Q=s(Bo,`. This model TF 2.0 implementation was
contributed by `),oe=r(Bo,"A",{href:!0,rel:!0});var ju=i(oe);p=s(ju,"kamalkraj"),ju.forEach(t),$=s(Bo," . The original code can be found "),V=r(Bo,"A",{href:!0,rel:!0});var xu=i(V);Ee=s(xu,"here"),xu.forEach(t),$e=s(Bo,"."),Bo.forEach(t),x=d(o),pe=r(o,"H2",{class:!0});var Ii=i(pe);ve=r(Ii,"A",{id:!0,class:!0,href:!0});var Bu=i(ve);ye=r(Bu,"SPAN",{});var Lu=i(ye);v(j.$$.fragment,Lu),Lu.forEach(t),Bu.forEach(t),G=d(Ii),De=r(Ii,"SPAN",{});var Au=i(De);Fe=s(Au,"DebertaConfig"),Au.forEach(t),Ii.forEach(t),N=d(o),re=r(o,"DIV",{class:!0});var ta=i(re);v(we.$$.fragment,ta),Te=d(ta),ie=r(ta,"P",{});var Lo=i(ie);Dl=s(Lo,"This is the configuration class to store the configuration of a "),Ns=r(Lo,"A",{href:!0});var Iu=i(Ns);El=s(Iu,"DebertaModel"),Iu.forEach(t),$l=s(Lo," or a "),Os=r(Lo,"A",{href:!0});var Su=i(Os);Fl=s(Su,"TFDebertaModel"),Su.forEach(t),ql=s(Lo,`. It is
used to instantiate a DeBERTa model according to the specified arguments, defining the model architecture.
Instantiating a configuration with the defaults will yield a similar configuration to that of the DeBERTa
`),Ho=r(Lo,"A",{href:!0,rel:!0});var Nu=i(Ho);zl=s(Nu,"microsoft/deberta-base"),Nu.forEach(t),Ml=s(Lo," architecture."),Lo.forEach(t),Cl=d(ta),$t=r(ta,"P",{});var oa=i($t);Pl=s(oa,"Configuration objects inherit from "),Ws=r(oa,"A",{href:!0});var Ou=i(Ws);Rl=s(Ou,"PretrainedConfig"),Ou.forEach(t),jl=s(oa,` and can be used to control the model outputs. Read the
documentation from `),Hs=r(oa,"A",{href:!0});var Wu=i(Hs);xl=s(Wu,"PretrainedConfig"),Wu.forEach(t),Bl=s(oa," for more information."),oa.forEach(t),ta.forEach(t),ci=d(o),Ft=r(o,"H2",{class:!0});var Si=i(Ft);ao=r(Si,"A",{id:!0,class:!0,href:!0});var Hu=i(ao);ya=r(Hu,"SPAN",{});var Uu=i(ya);v(Uo.$$.fragment,Uu),Uu.forEach(t),Hu.forEach(t),Ll=d(Si),Da=r(Si,"SPAN",{});var Qu=i(Da);Al=s(Qu,"DebertaTokenizer"),Qu.forEach(t),Si.forEach(t),pi=d(o),ze=r(o,"DIV",{class:!0});var st=i(ze);v(Qo.$$.fragment,st),Il=d(st),Ea=r(st,"P",{});var Gu=i(Ea);Sl=s(Gu,"Constructs a DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece"),Gu.forEach(t),Nl=d(st),dt=r(st,"DIV",{class:!0});var na=i(dt);v(Go.$$.fragment,na),Ol=d(na),$a=r(na,"P",{});var Ku=i($a);Wl=s(Ku,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),Ku.forEach(t),Hl=d(na),Ko=r(na,"UL",{});var Ni=i(Ko);Fa=r(Ni,"LI",{});var Vu=i(Fa);Ul=s(Vu,"single sequence: [CLS] X [SEP]"),Vu.forEach(t),Ql=d(Ni),qa=r(Ni,"LI",{});var Ju=i(qa);Gl=s(Ju,"pair of sequences: [CLS] A [SEP] B [SEP]"),Ju.forEach(t),Ni.forEach(t),na.forEach(t),Kl=d(st),ro=r(st,"DIV",{class:!0});var Oi=i(ro);v(Vo.$$.fragment,Oi),Vl=d(Oi),qt=r(Oi,"P",{});var sa=i(qt);Jl=s(sa,`Retrieves sequence ids from a token list that has no special tokens added. This method is called when adding
special tokens using the tokenizer `),za=r(sa,"CODE",{});var Xu=i(za);Xl=s(Xu,"prepare_for_model"),Xu.forEach(t),Yl=s(sa," or "),Ma=r(sa,"CODE",{});var Yu=i(Ma);Zl=s(Yu,"encode_plus"),Yu.forEach(t),ed=s(sa," methods."),sa.forEach(t),Oi.forEach(t),td=d(st),tt=r(st,"DIV",{class:!0});var Ao=i(tt);v(Jo.$$.fragment,Ao),od=d(Ao),Ca=r(Ao,"P",{});var Zu=i(Ca);nd=s(Zu,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),Zu.forEach(t),sd=d(Ao),v(Xo.$$.fragment,Ao),ad=d(Ao),zt=r(Ao,"P",{});var aa=i(zt);rd=s(aa,"If "),Pa=r(aa,"CODE",{});var em=i(Pa);id=s(em,"token_ids_1"),em.forEach(t),ld=s(aa," is "),Ra=r(aa,"CODE",{});var tm=i(Ra);dd=s(tm,"None"),tm.forEach(t),cd=s(aa,", this method only returns the first portion of the mask (0s)."),aa.forEach(t),Ao.forEach(t),pd=d(st),ja=r(st,"DIV",{class:!0}),i(ja).forEach(t),st.forEach(t),hi=d(o),Mt=r(o,"H2",{class:!0});var Wi=i(Mt);io=r(Wi,"A",{id:!0,class:!0,href:!0});var om=i(io);xa=r(om,"SPAN",{});var nm=i(xa);v(Yo.$$.fragment,nm),nm.forEach(t),om.forEach(t),hd=d(Wi),Ba=r(Wi,"SPAN",{});var sm=i(Ba);fd=s(sm,"DebertaTokenizerFast"),sm.forEach(t),Wi.forEach(t),fi=d(o),Je=r(o,"DIV",{class:!0});var Io=i(Je);v(Zo.$$.fragment,Io),ud=d(Io),en=r(Io,"P",{});var Hi=i(en);md=s(Hi,`Constructs a \u201Cfast\u201D DeBERTa tokenizer, which runs end-to-end tokenization: punctuation splitting + wordpiece. It is
backed by HuggingFace\u2019s `),La=r(Hi,"EM",{});var am=i(La);gd=s(am,"tokenizers"),am.forEach(t),_d=s(Hi," library."),Hi.forEach(t),bd=d(Io),ct=r(Io,"DIV",{class:!0});var ra=i(ct);v(tn.$$.fragment,ra),kd=d(ra),Aa=r(ra,"P",{});var rm=i(Aa);vd=s(rm,`Build model inputs from a sequence or a pair of sequence for sequence classification tasks by concatenating and
adding special tokens. A DeBERTa sequence has the following format:`),rm.forEach(t),Td=d(ra),on=r(ra,"UL",{});var Ui=i(on);Ia=r(Ui,"LI",{});var im=i(Ia);wd=s(im,"single sequence: [CLS] X [SEP]"),im.forEach(t),yd=d(Ui),Sa=r(Ui,"LI",{});var lm=i(Sa);Dd=s(lm,"pair of sequences: [CLS] A [SEP] B [SEP]"),lm.forEach(t),Ui.forEach(t),ra.forEach(t),Ed=d(Io),ot=r(Io,"DIV",{class:!0});var So=i(ot);v(nn.$$.fragment,So),$d=d(So),Na=r(So,"P",{});var dm=i(Na);Fd=s(dm,`Create a mask from the two sequences passed to be used in a sequence-pair classification task. A DeBERTa
sequence pair mask has the following format:`),dm.forEach(t),qd=d(So),v(sn.$$.fragment,So),zd=d(So),Ct=r(So,"P",{});var ia=i(Ct);Md=s(ia,"If "),Oa=r(ia,"CODE",{});var cm=i(Oa);Cd=s(cm,"token_ids_1"),cm.forEach(t),Pd=s(ia," is "),Wa=r(ia,"CODE",{});var pm=i(Wa);Rd=s(pm,"None"),pm.forEach(t),jd=s(ia,", this method only returns the first portion of the mask (0s)."),ia.forEach(t),So.forEach(t),Io.forEach(t),ui=d(o),Pt=r(o,"H2",{class:!0});var Qi=i(Pt);lo=r(Qi,"A",{id:!0,class:!0,href:!0});var hm=i(lo);Ha=r(hm,"SPAN",{});var fm=i(Ha);v(an.$$.fragment,fm),fm.forEach(t),hm.forEach(t),xd=d(Qi),Ua=r(Qi,"SPAN",{});var um=i(Ua);Bd=s(um,"DebertaModel"),um.forEach(t),Qi.forEach(t),mi=d(o),Xe=r(o,"DIV",{class:!0});var No=i(Xe);v(rn.$$.fragment,No),Ld=d(No),ln=r(No,"P",{});var Gi=i(ln);Ad=s(Gi,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),dn=r(Gi,"A",{href:!0,rel:!0});var mm=i(dn);Id=s(mm,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),mm.forEach(t),Sd=s(Gi,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),Gi.forEach(t),Nd=d(No),cn=r(No,"P",{});var Ki=i(cn);Od=s(Ki,"This model is also a PyTorch "),pn=r(Ki,"A",{href:!0,rel:!0});var gm=i(pn);Wd=s(gm,"torch.nn.Module"),gm.forEach(t),Hd=s(Ki," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Ki.forEach(t),Ud=d(No),Se=r(No,"DIV",{class:!0});var pt=i(Se);v(hn.$$.fragment,pt),Qd=d(pt),Rt=r(pt,"P",{});var la=i(Rt);Gd=s(la,"The "),Us=r(la,"A",{href:!0});var _m=i(Us);Kd=s(_m,"DebertaModel"),_m.forEach(t),Vd=s(la," forward method, overrides the "),Qa=r(la,"CODE",{});var bm=i(Qa);Jd=s(bm,"__call__"),bm.forEach(t),Xd=s(la," special method."),la.forEach(t),Yd=d(pt),v(co.$$.fragment,pt),Zd=d(pt),Ga=r(pt,"P",{});var km=i(Ga);ec=s(km,"Example:"),km.forEach(t),tc=d(pt),v(fn.$$.fragment,pt),pt.forEach(t),No.forEach(t),gi=d(o),jt=r(o,"H2",{class:!0});var Vi=i(jt);po=r(Vi,"A",{id:!0,class:!0,href:!0});var vm=i(po);Ka=r(vm,"SPAN",{});var Tm=i(Ka);v(un.$$.fragment,Tm),Tm.forEach(t),vm.forEach(t),oc=d(Vi),Va=r(Vi,"SPAN",{});var wm=i(Va);nc=s(wm,"DebertaPreTrainedModel"),wm.forEach(t),Vi.forEach(t),_i=d(o),xt=r(o,"DIV",{class:!0});var Ji=i(xt);v(mn.$$.fragment,Ji),sc=d(Ji),Ja=r(Ji,"P",{});var ym=i(Ja);ac=s(ym,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),ym.forEach(t),Ji.forEach(t),bi=d(o),Bt=r(o,"H2",{class:!0});var Xi=i(Bt);ho=r(Xi,"A",{id:!0,class:!0,href:!0});var Dm=i(ho);Xa=r(Dm,"SPAN",{});var Em=i(Xa);v(gn.$$.fragment,Em),Em.forEach(t),Dm.forEach(t),rc=d(Xi),Ya=r(Xi,"SPAN",{});var $m=i(Ya);ic=s($m,"DebertaForMaskedLM"),$m.forEach(t),Xi.forEach(t),ki=d(o),Ye=r(o,"DIV",{class:!0});var Oo=i(Ye);v(_n.$$.fragment,Oo),lc=d(Oo),Lt=r(Oo,"P",{});var da=i(Lt);dc=s(da,"DeBERTa Model with a "),Za=r(da,"CODE",{});var Fm=i(Za);cc=s(Fm,"language modeling"),Fm.forEach(t),pc=s(da,` head on top.
The DeBERTa model was proposed in `),bn=r(da,"A",{href:!0,rel:!0});var qm=i(bn);hc=s(qm,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),qm.forEach(t),fc=s(da,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),da.forEach(t),uc=d(Oo),kn=r(Oo,"P",{});var Yi=i(kn);mc=s(Yi,"This model is also a PyTorch "),vn=r(Yi,"A",{href:!0,rel:!0});var zm=i(vn);gc=s(zm,"torch.nn.Module"),zm.forEach(t),_c=s(Yi," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),Yi.forEach(t),bc=d(Oo),Ne=r(Oo,"DIV",{class:!0});var ht=i(Ne);v(Tn.$$.fragment,ht),kc=d(ht),At=r(ht,"P",{});var ca=i(At);vc=s(ca,"The "),Qs=r(ca,"A",{href:!0});var Mm=i(Qs);Tc=s(Mm,"DebertaForMaskedLM"),Mm.forEach(t),wc=s(ca," forward method, overrides the "),er=r(ca,"CODE",{});var Cm=i(er);yc=s(Cm,"__call__"),Cm.forEach(t),Dc=s(ca," special method."),ca.forEach(t),Ec=d(ht),v(fo.$$.fragment,ht),$c=d(ht),tr=r(ht,"P",{});var Pm=i(tr);Fc=s(Pm,"Example:"),Pm.forEach(t),qc=d(ht),v(wn.$$.fragment,ht),ht.forEach(t),Oo.forEach(t),vi=d(o),It=r(o,"H2",{class:!0});var Zi=i(It);uo=r(Zi,"A",{id:!0,class:!0,href:!0});var Rm=i(uo);or=r(Rm,"SPAN",{});var jm=i(or);v(yn.$$.fragment,jm),jm.forEach(t),Rm.forEach(t),zc=d(Zi),nr=r(Zi,"SPAN",{});var xm=i(nr);Mc=s(xm,"DebertaForSequenceClassification"),xm.forEach(t),Zi.forEach(t),Ti=d(o),je=r(o,"DIV",{class:!0});var ft=i(je);v(Dn.$$.fragment,ft),Cc=d(ft),sr=r(ft,"P",{});var Bm=i(sr);Pc=s(Bm,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Bm.forEach(t),Rc=d(ft),En=r(ft,"P",{});var el=i(En);jc=s(el,"The DeBERTa model was proposed in "),$n=r(el,"A",{href:!0,rel:!0});var Lm=i($n);xc=s(Lm,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Lm.forEach(t),Bc=s(el,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),el.forEach(t),Lc=d(ft),Fn=r(ft,"P",{});var tl=i(Fn);Ac=s(tl,"This model is also a PyTorch "),qn=r(tl,"A",{href:!0,rel:!0});var Am=i(qn);Ic=s(Am,"torch.nn.Module"),Am.forEach(t),Sc=s(tl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),tl.forEach(t),Nc=d(ft),qe=r(ft,"DIV",{class:!0});var Ve=i(qe);v(zn.$$.fragment,Ve),Oc=d(Ve),St=r(Ve,"P",{});var pa=i(St);Wc=s(pa,"The "),Gs=r(pa,"A",{href:!0});var Im=i(Gs);Hc=s(Im,"DebertaForSequenceClassification"),Im.forEach(t),Uc=s(pa," forward method, overrides the "),ar=r(pa,"CODE",{});var Sm=i(ar);Qc=s(Sm,"__call__"),Sm.forEach(t),Gc=s(pa," special method."),pa.forEach(t),Kc=d(Ve),v(mo.$$.fragment,Ve),Vc=d(Ve),rr=r(Ve,"P",{});var Nm=i(rr);Jc=s(Nm,"Example of single-label classification:"),Nm.forEach(t),Xc=d(Ve),v(Mn.$$.fragment,Ve),Yc=d(Ve),ir=r(Ve,"P",{});var Om=i(ir);Zc=s(Om,"Example of multi-label classification:"),Om.forEach(t),ep=d(Ve),v(Cn.$$.fragment,Ve),Ve.forEach(t),ft.forEach(t),wi=d(o),Nt=r(o,"H2",{class:!0});var ol=i(Nt);go=r(ol,"A",{id:!0,class:!0,href:!0});var Wm=i(go);lr=r(Wm,"SPAN",{});var Hm=i(lr);v(Pn.$$.fragment,Hm),Hm.forEach(t),Wm.forEach(t),tp=d(ol),dr=r(ol,"SPAN",{});var Um=i(dr);op=s(Um,"DebertaForTokenClassification"),Um.forEach(t),ol.forEach(t),yi=d(o),xe=r(o,"DIV",{class:!0});var ut=i(xe);v(Rn.$$.fragment,ut),np=d(ut),cr=r(ut,"P",{});var Qm=i(cr);sp=s(Qm,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Qm.forEach(t),ap=d(ut),jn=r(ut,"P",{});var nl=i(jn);rp=s(nl,"The DeBERTa model was proposed in "),xn=r(nl,"A",{href:!0,rel:!0});var Gm=i(xn);ip=s(Gm,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Gm.forEach(t),lp=s(nl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),nl.forEach(t),dp=d(ut),Bn=r(ut,"P",{});var sl=i(Bn);cp=s(sl,"This model is also a PyTorch "),Ln=r(sl,"A",{href:!0,rel:!0});var Km=i(Ln);pp=s(Km,"torch.nn.Module"),Km.forEach(t),hp=s(sl," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),sl.forEach(t),fp=d(ut),Oe=r(ut,"DIV",{class:!0});var mt=i(Oe);v(An.$$.fragment,mt),up=d(mt),Ot=r(mt,"P",{});var ha=i(Ot);mp=s(ha,"The "),Ks=r(ha,"A",{href:!0});var Vm=i(Ks);gp=s(Vm,"DebertaForTokenClassification"),Vm.forEach(t),_p=s(ha," forward method, overrides the "),pr=r(ha,"CODE",{});var Jm=i(pr);bp=s(Jm,"__call__"),Jm.forEach(t),kp=s(ha," special method."),ha.forEach(t),vp=d(mt),v(_o.$$.fragment,mt),Tp=d(mt),hr=r(mt,"P",{});var Xm=i(hr);wp=s(Xm,"Example:"),Xm.forEach(t),yp=d(mt),v(In.$$.fragment,mt),mt.forEach(t),ut.forEach(t),Di=d(o),Wt=r(o,"H2",{class:!0});var al=i(Wt);bo=r(al,"A",{id:!0,class:!0,href:!0});var Ym=i(bo);fr=r(Ym,"SPAN",{});var Zm=i(fr);v(Sn.$$.fragment,Zm),Zm.forEach(t),Ym.forEach(t),Dp=d(al),ur=r(al,"SPAN",{});var eg=i(ur);Ep=s(eg,"DebertaForQuestionAnswering"),eg.forEach(t),al.forEach(t),Ei=d(o),Be=r(o,"DIV",{class:!0});var gt=i(Be);v(Nn.$$.fragment,gt),$p=d(gt),Ht=r(gt,"P",{});var fa=i(Ht);Fp=s(fa,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),mr=r(fa,"CODE",{});var tg=i(mr);qp=s(tg,"span start logits"),tg.forEach(t),zp=s(fa," and "),gr=r(fa,"CODE",{});var og=i(gr);Mp=s(og,"span end logits"),og.forEach(t),Cp=s(fa,")."),fa.forEach(t),Pp=d(gt),On=r(gt,"P",{});var rl=i(On);Rp=s(rl,"The DeBERTa model was proposed in "),Wn=r(rl,"A",{href:!0,rel:!0});var ng=i(Wn);jp=s(ng,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),ng.forEach(t),xp=s(rl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),rl.forEach(t),Bp=d(gt),Hn=r(gt,"P",{});var il=i(Hn);Lp=s(il,"This model is also a PyTorch "),Un=r(il,"A",{href:!0,rel:!0});var sg=i(Un);Ap=s(sg,"torch.nn.Module"),sg.forEach(t),Ip=s(il," subclass.\nUse it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage\nand behavior.```"),il.forEach(t),Sp=d(gt),We=r(gt,"DIV",{class:!0});var _t=i(We);v(Qn.$$.fragment,_t),Np=d(_t),Ut=r(_t,"P",{});var ua=i(Ut);Op=s(ua,"The "),Vs=r(ua,"A",{href:!0});var ag=i(Vs);Wp=s(ag,"DebertaForQuestionAnswering"),ag.forEach(t),Hp=s(ua," forward method, overrides the "),_r=r(ua,"CODE",{});var rg=i(_r);Up=s(rg,"__call__"),rg.forEach(t),Qp=s(ua," special method."),ua.forEach(t),Gp=d(_t),v(ko.$$.fragment,_t),Kp=d(_t),br=r(_t,"P",{});var ig=i(br);Vp=s(ig,"Example:"),ig.forEach(t),Jp=d(_t),v(Gn.$$.fragment,_t),_t.forEach(t),gt.forEach(t),$i=d(o),Qt=r(o,"H2",{class:!0});var ll=i(Qt);vo=r(ll,"A",{id:!0,class:!0,href:!0});var lg=i(vo);kr=r(lg,"SPAN",{});var dg=i(kr);v(Kn.$$.fragment,dg),dg.forEach(t),lg.forEach(t),Xp=d(ll),vr=r(ll,"SPAN",{});var cg=i(vr);Yp=s(cg,"TFDebertaModel"),cg.forEach(t),ll.forEach(t),Fi=d(o),Le=r(o,"DIV",{class:!0});var bt=i(Le);v(Vn.$$.fragment,bt),Zp=d(bt),Jn=r(bt,"P",{});var dl=i(Jn);eh=s(dl,`The bare DeBERTa Model transformer outputting raw hidden-states without any specific head on top.
The DeBERTa model was proposed in `),Xn=r(dl,"A",{href:!0,rel:!0});var pg=i(Xn);th=s(pg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),pg.forEach(t),oh=s(dl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),dl.forEach(t),nh=d(bt),Yn=r(bt,"P",{});var cl=i(Yn);sh=s(cl,"This model is also a "),Zn=r(cl,"A",{href:!0,rel:!0});var hg=i(Zn);ah=s(hg,"tf.keras.Model"),hg.forEach(t),rh=s(cl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),cl.forEach(t),ih=d(bt),v(To.$$.fragment,bt),lh=d(bt),He=r(bt,"DIV",{class:!0});var kt=i(He);v(es.$$.fragment,kt),dh=d(kt),Gt=r(kt,"P",{});var ma=i(Gt);ch=s(ma,"The "),Js=r(ma,"A",{href:!0});var fg=i(Js);ph=s(fg,"TFDebertaModel"),fg.forEach(t),hh=s(ma," forward method, overrides the "),Tr=r(ma,"CODE",{});var ug=i(Tr);fh=s(ug,"__call__"),ug.forEach(t),uh=s(ma," special method."),ma.forEach(t),mh=d(kt),v(wo.$$.fragment,kt),gh=d(kt),wr=r(kt,"P",{});var mg=i(wr);_h=s(mg,"Example:"),mg.forEach(t),bh=d(kt),v(ts.$$.fragment,kt),kt.forEach(t),bt.forEach(t),qi=d(o),Kt=r(o,"H2",{class:!0});var pl=i(Kt);yo=r(pl,"A",{id:!0,class:!0,href:!0});var gg=i(yo);yr=r(gg,"SPAN",{});var _g=i(yr);v(os.$$.fragment,_g),_g.forEach(t),gg.forEach(t),kh=d(pl),Dr=r(pl,"SPAN",{});var bg=i(Dr);vh=s(bg,"TFDebertaPreTrainedModel"),bg.forEach(t),pl.forEach(t),zi=d(o),lt=r(o,"DIV",{class:!0});var ga=i(lt);v(ns.$$.fragment,ga),Th=d(ga),Er=r(ga,"P",{});var kg=i(Er);wh=s(kg,`An abstract class to handle weights initialization and a simple interface for downloading and loading pretrained
models.`),kg.forEach(t),yh=d(ga),nt=r(ga,"DIV",{class:!0});var Wo=i(nt);v(ss.$$.fragment,Wo),Dh=d(Wo),$r=r(Wo,"P",{});var vg=i($r);Eh=s(vg,"Calls the model on new inputs and returns the outputs as tensors."),vg.forEach(t),$h=d(Wo),as=r(Wo,"P",{});var hl=i(as);Fh=s(hl,"In this case "),Fr=r(hl,"CODE",{});var Tg=i(Fr);qh=s(Tg,"call()"),Tg.forEach(t),zh=s(hl,` just reapplies
all ops in the graph to the new inputs
(e.g. build a new computational graph from the provided inputs).`),hl.forEach(t),Mh=d(Wo),Ze=r(Wo,"P",{});var vt=i(Ze);Ch=s(vt,`Note: This method should not be called directly. It is only meant to be
overridden when subclassing `),qr=r(vt,"CODE",{});var wg=i(qr);Ph=s(wg,"tf.keras.Model"),wg.forEach(t),Rh=s(vt,`.
To call a model on an input, always use the `),zr=r(vt,"CODE",{});var yg=i(zr);jh=s(yg,"__call__()"),yg.forEach(t),xh=s(vt,` method,
i.e. `),Mr=r(vt,"CODE",{});var Dg=i(Mr);Bh=s(Dg,"model(inputs)"),Dg.forEach(t),Lh=s(vt,", which relies on the underlying "),Cr=r(vt,"CODE",{});var Eg=i(Cr);Ah=s(Eg,"call()"),Eg.forEach(t),Ih=s(vt," method."),vt.forEach(t),Wo.forEach(t),ga.forEach(t),Mi=d(o),Vt=r(o,"H2",{class:!0});var fl=i(Vt);Do=r(fl,"A",{id:!0,class:!0,href:!0});var $g=i(Do);Pr=r($g,"SPAN",{});var Fg=i(Pr);v(rs.$$.fragment,Fg),Fg.forEach(t),$g.forEach(t),Sh=d(fl),Rr=r(fl,"SPAN",{});var qg=i(Rr);Nh=s(qg,"TFDebertaForMaskedLM"),qg.forEach(t),fl.forEach(t),Ci=d(o),Ae=r(o,"DIV",{class:!0});var Tt=i(Ae);v(is.$$.fragment,Tt),Oh=d(Tt),Jt=r(Tt,"P",{});var _a=i(Jt);Wh=s(_a,"DeBERTa Model with a "),jr=r(_a,"CODE",{});var zg=i(jr);Hh=s(zg,"language modeling"),zg.forEach(t),Uh=s(_a,` head on top.
The DeBERTa model was proposed in `),ls=r(_a,"A",{href:!0,rel:!0});var Mg=i(ls);Qh=s(Mg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Mg.forEach(t),Gh=s(_a,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),_a.forEach(t),Kh=d(Tt),ds=r(Tt,"P",{});var ul=i(ds);Vh=s(ul,"This model is also a "),cs=r(ul,"A",{href:!0,rel:!0});var Cg=i(cs);Jh=s(Cg,"tf.keras.Model"),Cg.forEach(t),Xh=s(ul,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ul.forEach(t),Yh=d(Tt),v(Eo.$$.fragment,Tt),Zh=d(Tt),Ue=r(Tt,"DIV",{class:!0});var wt=i(Ue);v(ps.$$.fragment,wt),ef=d(wt),Xt=r(wt,"P",{});var ba=i(Xt);tf=s(ba,"The "),Xs=r(ba,"A",{href:!0});var Pg=i(Xs);of=s(Pg,"TFDebertaForMaskedLM"),Pg.forEach(t),nf=s(ba," forward method, overrides the "),xr=r(ba,"CODE",{});var Rg=i(xr);sf=s(Rg,"__call__"),Rg.forEach(t),af=s(ba," special method."),ba.forEach(t),rf=d(wt),v($o.$$.fragment,wt),lf=d(wt),Br=r(wt,"P",{});var jg=i(Br);df=s(jg,"Example:"),jg.forEach(t),cf=d(wt),v(hs.$$.fragment,wt),wt.forEach(t),Tt.forEach(t),Pi=d(o),Yt=r(o,"H2",{class:!0});var ml=i(Yt);Fo=r(ml,"A",{id:!0,class:!0,href:!0});var xg=i(Fo);Lr=r(xg,"SPAN",{});var Bg=i(Lr);v(fs.$$.fragment,Bg),Bg.forEach(t),xg.forEach(t),pf=d(ml),Ar=r(ml,"SPAN",{});var Lg=i(Ar);hf=s(Lg,"TFDebertaForSequenceClassification"),Lg.forEach(t),ml.forEach(t),Ri=d(o),Me=r(o,"DIV",{class:!0});var at=i(Me);v(us.$$.fragment,at),ff=d(at),Ir=r(at,"P",{});var Ag=i(Ir);uf=s(Ag,`DeBERTa Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Ag.forEach(t),mf=d(at),ms=r(at,"P",{});var gl=i(ms);gf=s(gl,"The DeBERTa model was proposed in "),gs=r(gl,"A",{href:!0,rel:!0});var Ig=i(gs);_f=s(Ig,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Ig.forEach(t),bf=s(gl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),gl.forEach(t),kf=d(at),_s=r(at,"P",{});var _l=i(_s);vf=s(_l,"This model is also a "),bs=r(_l,"A",{href:!0,rel:!0});var Sg=i(bs);Tf=s(Sg,"tf.keras.Model"),Sg.forEach(t),wf=s(_l,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),_l.forEach(t),yf=d(at),v(qo.$$.fragment,at),Df=d(at),Qe=r(at,"DIV",{class:!0});var yt=i(Qe);v(ks.$$.fragment,yt),Ef=d(yt),Zt=r(yt,"P",{});var ka=i(Zt);$f=s(ka,"The "),Ys=r(ka,"A",{href:!0});var Ng=i(Ys);Ff=s(Ng,"TFDebertaForSequenceClassification"),Ng.forEach(t),qf=s(ka," forward method, overrides the "),Sr=r(ka,"CODE",{});var Og=i(Sr);zf=s(Og,"__call__"),Og.forEach(t),Mf=s(ka," special method."),ka.forEach(t),Cf=d(yt),v(zo.$$.fragment,yt),Pf=d(yt),Nr=r(yt,"P",{});var Wg=i(Nr);Rf=s(Wg,"Example:"),Wg.forEach(t),jf=d(yt),v(vs.$$.fragment,yt),yt.forEach(t),at.forEach(t),ji=d(o),eo=r(o,"H2",{class:!0});var bl=i(eo);Mo=r(bl,"A",{id:!0,class:!0,href:!0});var Hg=i(Mo);Or=r(Hg,"SPAN",{});var Ug=i(Or);v(Ts.$$.fragment,Ug),Ug.forEach(t),Hg.forEach(t),xf=d(bl),Wr=r(bl,"SPAN",{});var Qg=i(Wr);Bf=s(Qg,"TFDebertaForTokenClassification"),Qg.forEach(t),bl.forEach(t),xi=d(o),Ce=r(o,"DIV",{class:!0});var rt=i(Ce);v(ws.$$.fragment,rt),Lf=d(rt),Hr=r(rt,"P",{});var Gg=i(Hr);Af=s(Gg,`DeBERTa Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g. for
Named-Entity-Recognition (NER) tasks.`),Gg.forEach(t),If=d(rt),ys=r(rt,"P",{});var kl=i(ys);Sf=s(kl,"The DeBERTa model was proposed in "),Ds=r(kl,"A",{href:!0,rel:!0});var Kg=i(Ds);Nf=s(Kg,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),Kg.forEach(t),Of=s(kl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),kl.forEach(t),Wf=d(rt),Es=r(rt,"P",{});var vl=i(Es);Hf=s(vl,"This model is also a "),$s=r(vl,"A",{href:!0,rel:!0});var Vg=i($s);Uf=s(Vg,"tf.keras.Model"),Vg.forEach(t),Qf=s(vl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vl.forEach(t),Gf=d(rt),v(Co.$$.fragment,rt),Kf=d(rt),Ge=r(rt,"DIV",{class:!0});var Dt=i(Ge);v(Fs.$$.fragment,Dt),Vf=d(Dt),to=r(Dt,"P",{});var va=i(to);Jf=s(va,"The "),Zs=r(va,"A",{href:!0});var Jg=i(Zs);Xf=s(Jg,"TFDebertaForTokenClassification"),Jg.forEach(t),Yf=s(va," forward method, overrides the "),Ur=r(va,"CODE",{});var Xg=i(Ur);Zf=s(Xg,"__call__"),Xg.forEach(t),eu=s(va," special method."),va.forEach(t),tu=d(Dt),v(Po.$$.fragment,Dt),ou=d(Dt),Qr=r(Dt,"P",{});var Yg=i(Qr);nu=s(Yg,"Example:"),Yg.forEach(t),su=d(Dt),v(qs.$$.fragment,Dt),Dt.forEach(t),rt.forEach(t),Bi=d(o),oo=r(o,"H2",{class:!0});var Tl=i(oo);Ro=r(Tl,"A",{id:!0,class:!0,href:!0});var Zg=i(Ro);Gr=r(Zg,"SPAN",{});var e_=i(Gr);v(zs.$$.fragment,e_),e_.forEach(t),Zg.forEach(t),au=d(Tl),Kr=r(Tl,"SPAN",{});var t_=i(Kr);ru=s(t_,"TFDebertaForQuestionAnswering"),t_.forEach(t),Tl.forEach(t),Li=d(o),Pe=r(o,"DIV",{class:!0});var it=i(Pe);v(Ms.$$.fragment,it),iu=d(it),no=r(it,"P",{});var Ta=i(no);lu=s(Ta,`DeBERTa Model with a span classification head on top for extractive question-answering tasks like SQuAD (a linear
layers on top of the hidden-states output to compute `),Vr=r(Ta,"CODE",{});var o_=i(Vr);du=s(o_,"span start logits"),o_.forEach(t),cu=s(Ta," and "),Jr=r(Ta,"CODE",{});var n_=i(Jr);pu=s(n_,"span end logits"),n_.forEach(t),hu=s(Ta,")."),Ta.forEach(t),fu=d(it),Cs=r(it,"P",{});var wl=i(Cs);uu=s(wl,"The DeBERTa model was proposed in "),Ps=r(wl,"A",{href:!0,rel:!0});var s_=i(Ps);mu=s(s_,`DeBERTa: Decoding-enhanced BERT with Disentangled
Attention`),s_.forEach(t),gu=s(wl,` by Pengcheng He, Xiaodong Liu, Jianfeng Gao, Weizhu Chen. It\u2019s build
on top of BERT/RoBERTa with two improvements, i.e. disentangled attention and enhanced mask decoder. With those two
improvements, it out perform BERT/RoBERTa on a majority of tasks with 80GB pretraining data.`),wl.forEach(t),_u=d(it),Rs=r(it,"P",{});var yl=i(Rs);bu=s(yl,"This model is also a "),js=r(yl,"A",{href:!0,rel:!0});var a_=i(js);ku=s(a_,"tf.keras.Model"),a_.forEach(t),vu=s(yl,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yl.forEach(t),Tu=d(it),v(jo.$$.fragment,it),wu=d(it),Ke=r(it,"DIV",{class:!0});var Et=i(Ke);v(xs.$$.fragment,Et),yu=d(Et),so=r(Et,"P",{});var wa=i(so);Du=s(wa,"The "),ea=r(wa,"A",{href:!0});var r_=i(ea);Eu=s(r_,"TFDebertaForQuestionAnswering"),r_.forEach(t),$u=s(wa," forward method, overrides the "),Xr=r(wa,"CODE",{});var i_=i(Xr);Fu=s(i_,"__call__"),i_.forEach(t),qu=s(wa," special method."),wa.forEach(t),zu=d(Et),v(xo.$$.fragment,Et),Mu=d(Et),Yr=r(Et,"P",{});var l_=i(Yr);Cu=s(l_,"Example:"),l_.forEach(t),Pu=d(Et),v(Bs.$$.fragment,Et),Et.forEach(t),it.forEach(t),this.h()},h(){c(h,"name","hf:doc:metadata"),c(h,"content",JSON.stringify(z_)),c(g,"id","deberta"),c(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(g,"href","#deberta"),c(m,"class","relative group"),c(Y,"id","overview"),c(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Y,"href","#overview"),c(z,"class","relative group"),c(te,"href","https://arxiv.org/abs/2006.03654"),c(te,"rel","nofollow"),c(L,"href","https://github.com/microsoft/DeBERTa"),c(L,"rel","nofollow"),c(R,"href","https://huggingface.co/DeBERTa"),c(R,"rel","nofollow"),c(oe,"href","https://huggingface.co/kamalkraj"),c(oe,"rel","nofollow"),c(V,"href","https://github.com/microsoft/DeBERTa"),c(V,"rel","nofollow"),c(ve,"id","transformers.DebertaConfig"),c(ve,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ve,"href","#transformers.DebertaConfig"),c(pe,"class","relative group"),c(Ns,"href","/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaModel"),c(Os,"href","/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.TFDebertaModel"),c(Ho,"href","https://huggingface.co/microsoft/deberta-base"),c(Ho,"rel","nofollow"),c(Ws,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(Hs,"href","/docs/transformers/v4.16.2/en/main_classes/configuration#transformers.PretrainedConfig"),c(re,"class","docstring"),c(ao,"id","transformers.DebertaTokenizer"),c(ao,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ao,"href","#transformers.DebertaTokenizer"),c(Ft,"class","relative group"),c(dt,"class","docstring"),c(ro,"class","docstring"),c(tt,"class","docstring"),c(ja,"class","docstring"),c(ze,"class","docstring"),c(io,"id","transformers.DebertaTokenizerFast"),c(io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(io,"href","#transformers.DebertaTokenizerFast"),c(Mt,"class","relative group"),c(ct,"class","docstring"),c(ot,"class","docstring"),c(Je,"class","docstring"),c(lo,"id","transformers.DebertaModel"),c(lo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(lo,"href","#transformers.DebertaModel"),c(Pt,"class","relative group"),c(dn,"href","https://arxiv.org/abs/2006.03654"),c(dn,"rel","nofollow"),c(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(pn,"rel","nofollow"),c(Us,"href","/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaModel"),c(Se,"class","docstring"),c(Xe,"class","docstring"),c(po,"id","transformers.DebertaPreTrainedModel"),c(po,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(po,"href","#transformers.DebertaPreTrainedModel"),c(jt,"class","relative group"),c(xt,"class","docstring"),c(ho,"id","transformers.DebertaForMaskedLM"),c(ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ho,"href","#transformers.DebertaForMaskedLM"),c(Bt,"class","relative group"),c(bn,"href","https://arxiv.org/abs/2006.03654"),c(bn,"rel","nofollow"),c(vn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(vn,"rel","nofollow"),c(Qs,"href","/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaForMaskedLM"),c(Ne,"class","docstring"),c(Ye,"class","docstring"),c(uo,"id","transformers.DebertaForSequenceClassification"),c(uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(uo,"href","#transformers.DebertaForSequenceClassification"),c(It,"class","relative group"),c($n,"href","https://arxiv.org/abs/2006.03654"),c($n,"rel","nofollow"),c(qn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qn,"rel","nofollow"),c(Gs,"href","/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaForSequenceClassification"),c(qe,"class","docstring"),c(je,"class","docstring"),c(go,"id","transformers.DebertaForTokenClassification"),c(go,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(go,"href","#transformers.DebertaForTokenClassification"),c(Nt,"class","relative group"),c(xn,"href","https://arxiv.org/abs/2006.03654"),c(xn,"rel","nofollow"),c(Ln,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ln,"rel","nofollow"),c(Ks,"href","/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaForTokenClassification"),c(Oe,"class","docstring"),c(xe,"class","docstring"),c(bo,"id","transformers.DebertaForQuestionAnswering"),c(bo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(bo,"href","#transformers.DebertaForQuestionAnswering"),c(Wt,"class","relative group"),c(Wn,"href","https://arxiv.org/abs/2006.03654"),c(Wn,"rel","nofollow"),c(Un,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Un,"rel","nofollow"),c(Vs,"href","/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.DebertaForQuestionAnswering"),c(We,"class","docstring"),c(Be,"class","docstring"),c(vo,"id","transformers.TFDebertaModel"),c(vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(vo,"href","#transformers.TFDebertaModel"),c(Qt,"class","relative group"),c(Xn,"href","https://arxiv.org/abs/2006.03654"),c(Xn,"rel","nofollow"),c(Zn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Zn,"rel","nofollow"),c(Js,"href","/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.TFDebertaModel"),c(He,"class","docstring"),c(Le,"class","docstring"),c(yo,"id","transformers.TFDebertaPreTrainedModel"),c(yo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(yo,"href","#transformers.TFDebertaPreTrainedModel"),c(Kt,"class","relative group"),c(nt,"class","docstring"),c(lt,"class","docstring"),c(Do,"id","transformers.TFDebertaForMaskedLM"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.TFDebertaForMaskedLM"),c(Vt,"class","relative group"),c(ls,"href","https://arxiv.org/abs/2006.03654"),c(ls,"rel","nofollow"),c(cs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(cs,"rel","nofollow"),c(Xs,"href","/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.TFDebertaForMaskedLM"),c(Ue,"class","docstring"),c(Ae,"class","docstring"),c(Fo,"id","transformers.TFDebertaForSequenceClassification"),c(Fo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Fo,"href","#transformers.TFDebertaForSequenceClassification"),c(Yt,"class","relative group"),c(gs,"href","https://arxiv.org/abs/2006.03654"),c(gs,"rel","nofollow"),c(bs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(bs,"rel","nofollow"),c(Ys,"href","/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.TFDebertaForSequenceClassification"),c(Qe,"class","docstring"),c(Me,"class","docstring"),c(Mo,"id","transformers.TFDebertaForTokenClassification"),c(Mo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Mo,"href","#transformers.TFDebertaForTokenClassification"),c(eo,"class","relative group"),c(Ds,"href","https://arxiv.org/abs/2006.03654"),c(Ds,"rel","nofollow"),c($s,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c($s,"rel","nofollow"),c(Zs,"href","/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.TFDebertaForTokenClassification"),c(Ge,"class","docstring"),c(Ce,"class","docstring"),c(Ro,"id","transformers.TFDebertaForQuestionAnswering"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.TFDebertaForQuestionAnswering"),c(oo,"class","relative group"),c(Ps,"href","https://arxiv.org/abs/2006.03654"),c(Ps,"rel","nofollow"),c(js,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(js,"rel","nofollow"),c(ea,"href","/docs/transformers/v4.16.2/en/model_doc/deberta#transformers.TFDebertaForQuestionAnswering"),c(Ke,"class","docstring"),c(Pe,"class","docstring")},m(o,u){e(document.head,h),f(o,F,u),f(o,m,u),e(m,g),e(g,E),T(b,E,null),e(m,_),e(m,q),e(q,he),f(o,X,u),f(o,z,u),e(z,Y),e(Y,A),T(ee,A,null),e(z,fe),e(z,I),e(I,ue),f(o,le,u),f(o,W,u),e(W,B),e(W,te),e(te,Z),e(W,M),f(o,P,u),f(o,ne,u),e(ne,H),f(o,de,u),f(o,se,u),e(se,U),f(o,ce,u),f(o,ae,u),e(ae,C),e(C,me),e(C,L),e(L,ge),e(C,_e),f(o,S,u),f(o,K,u),e(K,be),e(K,R),e(R,ke),e(K,Q),e(K,oe),e(oe,p),e(K,$),e(K,V),e(V,Ee),e(K,$e),f(o,x,u),f(o,pe,u),e(pe,ve),e(ve,ye),T(j,ye,null),e(pe,G),e(pe,De),e(De,Fe),f(o,N,u),f(o,re,u),T(we,re,null),e(re,Te),e(re,ie),e(ie,Dl),e(ie,Ns),e(Ns,El),e(ie,$l),e(ie,Os),e(Os,Fl),e(ie,ql),e(ie,Ho),e(Ho,zl),e(ie,Ml),e(re,Cl),e(re,$t),e($t,Pl),e($t,Ws),e(Ws,Rl),e($t,jl),e($t,Hs),e(Hs,xl),e($t,Bl),f(o,ci,u),f(o,Ft,u),e(Ft,ao),e(ao,ya),T(Uo,ya,null),e(Ft,Ll),e(Ft,Da),e(Da,Al),f(o,pi,u),f(o,ze,u),T(Qo,ze,null),e(ze,Il),e(ze,Ea),e(Ea,Sl),e(ze,Nl),e(ze,dt),T(Go,dt,null),e(dt,Ol),e(dt,$a),e($a,Wl),e(dt,Hl),e(dt,Ko),e(Ko,Fa),e(Fa,Ul),e(Ko,Ql),e(Ko,qa),e(qa,Gl),e(ze,Kl),e(ze,ro),T(Vo,ro,null),e(ro,Vl),e(ro,qt),e(qt,Jl),e(qt,za),e(za,Xl),e(qt,Yl),e(qt,Ma),e(Ma,Zl),e(qt,ed),e(ze,td),e(ze,tt),T(Jo,tt,null),e(tt,od),e(tt,Ca),e(Ca,nd),e(tt,sd),T(Xo,tt,null),e(tt,ad),e(tt,zt),e(zt,rd),e(zt,Pa),e(Pa,id),e(zt,ld),e(zt,Ra),e(Ra,dd),e(zt,cd),e(ze,pd),e(ze,ja),f(o,hi,u),f(o,Mt,u),e(Mt,io),e(io,xa),T(Yo,xa,null),e(Mt,hd),e(Mt,Ba),e(Ba,fd),f(o,fi,u),f(o,Je,u),T(Zo,Je,null),e(Je,ud),e(Je,en),e(en,md),e(en,La),e(La,gd),e(en,_d),e(Je,bd),e(Je,ct),T(tn,ct,null),e(ct,kd),e(ct,Aa),e(Aa,vd),e(ct,Td),e(ct,on),e(on,Ia),e(Ia,wd),e(on,yd),e(on,Sa),e(Sa,Dd),e(Je,Ed),e(Je,ot),T(nn,ot,null),e(ot,$d),e(ot,Na),e(Na,Fd),e(ot,qd),T(sn,ot,null),e(ot,zd),e(ot,Ct),e(Ct,Md),e(Ct,Oa),e(Oa,Cd),e(Ct,Pd),e(Ct,Wa),e(Wa,Rd),e(Ct,jd),f(o,ui,u),f(o,Pt,u),e(Pt,lo),e(lo,Ha),T(an,Ha,null),e(Pt,xd),e(Pt,Ua),e(Ua,Bd),f(o,mi,u),f(o,Xe,u),T(rn,Xe,null),e(Xe,Ld),e(Xe,ln),e(ln,Ad),e(ln,dn),e(dn,Id),e(ln,Sd),e(Xe,Nd),e(Xe,cn),e(cn,Od),e(cn,pn),e(pn,Wd),e(cn,Hd),e(Xe,Ud),e(Xe,Se),T(hn,Se,null),e(Se,Qd),e(Se,Rt),e(Rt,Gd),e(Rt,Us),e(Us,Kd),e(Rt,Vd),e(Rt,Qa),e(Qa,Jd),e(Rt,Xd),e(Se,Yd),T(co,Se,null),e(Se,Zd),e(Se,Ga),e(Ga,ec),e(Se,tc),T(fn,Se,null),f(o,gi,u),f(o,jt,u),e(jt,po),e(po,Ka),T(un,Ka,null),e(jt,oc),e(jt,Va),e(Va,nc),f(o,_i,u),f(o,xt,u),T(mn,xt,null),e(xt,sc),e(xt,Ja),e(Ja,ac),f(o,bi,u),f(o,Bt,u),e(Bt,ho),e(ho,Xa),T(gn,Xa,null),e(Bt,rc),e(Bt,Ya),e(Ya,ic),f(o,ki,u),f(o,Ye,u),T(_n,Ye,null),e(Ye,lc),e(Ye,Lt),e(Lt,dc),e(Lt,Za),e(Za,cc),e(Lt,pc),e(Lt,bn),e(bn,hc),e(Lt,fc),e(Ye,uc),e(Ye,kn),e(kn,mc),e(kn,vn),e(vn,gc),e(kn,_c),e(Ye,bc),e(Ye,Ne),T(Tn,Ne,null),e(Ne,kc),e(Ne,At),e(At,vc),e(At,Qs),e(Qs,Tc),e(At,wc),e(At,er),e(er,yc),e(At,Dc),e(Ne,Ec),T(fo,Ne,null),e(Ne,$c),e(Ne,tr),e(tr,Fc),e(Ne,qc),T(wn,Ne,null),f(o,vi,u),f(o,It,u),e(It,uo),e(uo,or),T(yn,or,null),e(It,zc),e(It,nr),e(nr,Mc),f(o,Ti,u),f(o,je,u),T(Dn,je,null),e(je,Cc),e(je,sr),e(sr,Pc),e(je,Rc),e(je,En),e(En,jc),e(En,$n),e($n,xc),e(En,Bc),e(je,Lc),e(je,Fn),e(Fn,Ac),e(Fn,qn),e(qn,Ic),e(Fn,Sc),e(je,Nc),e(je,qe),T(zn,qe,null),e(qe,Oc),e(qe,St),e(St,Wc),e(St,Gs),e(Gs,Hc),e(St,Uc),e(St,ar),e(ar,Qc),e(St,Gc),e(qe,Kc),T(mo,qe,null),e(qe,Vc),e(qe,rr),e(rr,Jc),e(qe,Xc),T(Mn,qe,null),e(qe,Yc),e(qe,ir),e(ir,Zc),e(qe,ep),T(Cn,qe,null),f(o,wi,u),f(o,Nt,u),e(Nt,go),e(go,lr),T(Pn,lr,null),e(Nt,tp),e(Nt,dr),e(dr,op),f(o,yi,u),f(o,xe,u),T(Rn,xe,null),e(xe,np),e(xe,cr),e(cr,sp),e(xe,ap),e(xe,jn),e(jn,rp),e(jn,xn),e(xn,ip),e(jn,lp),e(xe,dp),e(xe,Bn),e(Bn,cp),e(Bn,Ln),e(Ln,pp),e(Bn,hp),e(xe,fp),e(xe,Oe),T(An,Oe,null),e(Oe,up),e(Oe,Ot),e(Ot,mp),e(Ot,Ks),e(Ks,gp),e(Ot,_p),e(Ot,pr),e(pr,bp),e(Ot,kp),e(Oe,vp),T(_o,Oe,null),e(Oe,Tp),e(Oe,hr),e(hr,wp),e(Oe,yp),T(In,Oe,null),f(o,Di,u),f(o,Wt,u),e(Wt,bo),e(bo,fr),T(Sn,fr,null),e(Wt,Dp),e(Wt,ur),e(ur,Ep),f(o,Ei,u),f(o,Be,u),T(Nn,Be,null),e(Be,$p),e(Be,Ht),e(Ht,Fp),e(Ht,mr),e(mr,qp),e(Ht,zp),e(Ht,gr),e(gr,Mp),e(Ht,Cp),e(Be,Pp),e(Be,On),e(On,Rp),e(On,Wn),e(Wn,jp),e(On,xp),e(Be,Bp),e(Be,Hn),e(Hn,Lp),e(Hn,Un),e(Un,Ap),e(Hn,Ip),e(Be,Sp),e(Be,We),T(Qn,We,null),e(We,Np),e(We,Ut),e(Ut,Op),e(Ut,Vs),e(Vs,Wp),e(Ut,Hp),e(Ut,_r),e(_r,Up),e(Ut,Qp),e(We,Gp),T(ko,We,null),e(We,Kp),e(We,br),e(br,Vp),e(We,Jp),T(Gn,We,null),f(o,$i,u),f(o,Qt,u),e(Qt,vo),e(vo,kr),T(Kn,kr,null),e(Qt,Xp),e(Qt,vr),e(vr,Yp),f(o,Fi,u),f(o,Le,u),T(Vn,Le,null),e(Le,Zp),e(Le,Jn),e(Jn,eh),e(Jn,Xn),e(Xn,th),e(Jn,oh),e(Le,nh),e(Le,Yn),e(Yn,sh),e(Yn,Zn),e(Zn,ah),e(Yn,rh),e(Le,ih),T(To,Le,null),e(Le,lh),e(Le,He),T(es,He,null),e(He,dh),e(He,Gt),e(Gt,ch),e(Gt,Js),e(Js,ph),e(Gt,hh),e(Gt,Tr),e(Tr,fh),e(Gt,uh),e(He,mh),T(wo,He,null),e(He,gh),e(He,wr),e(wr,_h),e(He,bh),T(ts,He,null),f(o,qi,u),f(o,Kt,u),e(Kt,yo),e(yo,yr),T(os,yr,null),e(Kt,kh),e(Kt,Dr),e(Dr,vh),f(o,zi,u),f(o,lt,u),T(ns,lt,null),e(lt,Th),e(lt,Er),e(Er,wh),e(lt,yh),e(lt,nt),T(ss,nt,null),e(nt,Dh),e(nt,$r),e($r,Eh),e(nt,$h),e(nt,as),e(as,Fh),e(as,Fr),e(Fr,qh),e(as,zh),e(nt,Mh),e(nt,Ze),e(Ze,Ch),e(Ze,qr),e(qr,Ph),e(Ze,Rh),e(Ze,zr),e(zr,jh),e(Ze,xh),e(Ze,Mr),e(Mr,Bh),e(Ze,Lh),e(Ze,Cr),e(Cr,Ah),e(Ze,Ih),f(o,Mi,u),f(o,Vt,u),e(Vt,Do),e(Do,Pr),T(rs,Pr,null),e(Vt,Sh),e(Vt,Rr),e(Rr,Nh),f(o,Ci,u),f(o,Ae,u),T(is,Ae,null),e(Ae,Oh),e(Ae,Jt),e(Jt,Wh),e(Jt,jr),e(jr,Hh),e(Jt,Uh),e(Jt,ls),e(ls,Qh),e(Jt,Gh),e(Ae,Kh),e(Ae,ds),e(ds,Vh),e(ds,cs),e(cs,Jh),e(ds,Xh),e(Ae,Yh),T(Eo,Ae,null),e(Ae,Zh),e(Ae,Ue),T(ps,Ue,null),e(Ue,ef),e(Ue,Xt),e(Xt,tf),e(Xt,Xs),e(Xs,of),e(Xt,nf),e(Xt,xr),e(xr,sf),e(Xt,af),e(Ue,rf),T($o,Ue,null),e(Ue,lf),e(Ue,Br),e(Br,df),e(Ue,cf),T(hs,Ue,null),f(o,Pi,u),f(o,Yt,u),e(Yt,Fo),e(Fo,Lr),T(fs,Lr,null),e(Yt,pf),e(Yt,Ar),e(Ar,hf),f(o,Ri,u),f(o,Me,u),T(us,Me,null),e(Me,ff),e(Me,Ir),e(Ir,uf),e(Me,mf),e(Me,ms),e(ms,gf),e(ms,gs),e(gs,_f),e(ms,bf),e(Me,kf),e(Me,_s),e(_s,vf),e(_s,bs),e(bs,Tf),e(_s,wf),e(Me,yf),T(qo,Me,null),e(Me,Df),e(Me,Qe),T(ks,Qe,null),e(Qe,Ef),e(Qe,Zt),e(Zt,$f),e(Zt,Ys),e(Ys,Ff),e(Zt,qf),e(Zt,Sr),e(Sr,zf),e(Zt,Mf),e(Qe,Cf),T(zo,Qe,null),e(Qe,Pf),e(Qe,Nr),e(Nr,Rf),e(Qe,jf),T(vs,Qe,null),f(o,ji,u),f(o,eo,u),e(eo,Mo),e(Mo,Or),T(Ts,Or,null),e(eo,xf),e(eo,Wr),e(Wr,Bf),f(o,xi,u),f(o,Ce,u),T(ws,Ce,null),e(Ce,Lf),e(Ce,Hr),e(Hr,Af),e(Ce,If),e(Ce,ys),e(ys,Sf),e(ys,Ds),e(Ds,Nf),e(ys,Of),e(Ce,Wf),e(Ce,Es),e(Es,Hf),e(Es,$s),e($s,Uf),e(Es,Qf),e(Ce,Gf),T(Co,Ce,null),e(Ce,Kf),e(Ce,Ge),T(Fs,Ge,null),e(Ge,Vf),e(Ge,to),e(to,Jf),e(to,Zs),e(Zs,Xf),e(to,Yf),e(to,Ur),e(Ur,Zf),e(to,eu),e(Ge,tu),T(Po,Ge,null),e(Ge,ou),e(Ge,Qr),e(Qr,nu),e(Ge,su),T(qs,Ge,null),f(o,Bi,u),f(o,oo,u),e(oo,Ro),e(Ro,Gr),T(zs,Gr,null),e(oo,au),e(oo,Kr),e(Kr,ru),f(o,Li,u),f(o,Pe,u),T(Ms,Pe,null),e(Pe,iu),e(Pe,no),e(no,lu),e(no,Vr),e(Vr,du),e(no,cu),e(no,Jr),e(Jr,pu),e(no,hu),e(Pe,fu),e(Pe,Cs),e(Cs,uu),e(Cs,Ps),e(Ps,mu),e(Cs,gu),e(Pe,_u),e(Pe,Rs),e(Rs,bu),e(Rs,js),e(js,ku),e(Rs,vu),e(Pe,Tu),T(jo,Pe,null),e(Pe,wu),e(Pe,Ke),T(xs,Ke,null),e(Ke,yu),e(Ke,so),e(so,Du),e(so,ea),e(ea,Eu),e(so,$u),e(so,Xr),e(Xr,Fu),e(so,qu),e(Ke,zu),T(xo,Ke,null),e(Ke,Mu),e(Ke,Yr),e(Yr,Cu),e(Ke,Pu),T(Bs,Ke,null),Ai=!0},p(o,[u]){const Ls={};u&2&&(Ls.$$scope={dirty:u,ctx:o}),co.$set(Ls);const Zr={};u&2&&(Zr.$$scope={dirty:u,ctx:o}),fo.$set(Zr);const ei={};u&2&&(ei.$$scope={dirty:u,ctx:o}),mo.$set(ei);const ti={};u&2&&(ti.$$scope={dirty:u,ctx:o}),_o.$set(ti);const As={};u&2&&(As.$$scope={dirty:u,ctx:o}),ko.$set(As);const oi={};u&2&&(oi.$$scope={dirty:u,ctx:o}),To.$set(oi);const ni={};u&2&&(ni.$$scope={dirty:u,ctx:o}),wo.$set(ni);const si={};u&2&&(si.$$scope={dirty:u,ctx:o}),Eo.$set(si);const Is={};u&2&&(Is.$$scope={dirty:u,ctx:o}),$o.$set(Is);const ai={};u&2&&(ai.$$scope={dirty:u,ctx:o}),qo.$set(ai);const ri={};u&2&&(ri.$$scope={dirty:u,ctx:o}),zo.$set(ri);const ii={};u&2&&(ii.$$scope={dirty:u,ctx:o}),Co.$set(ii);const li={};u&2&&(li.$$scope={dirty:u,ctx:o}),Po.$set(li);const Ss={};u&2&&(Ss.$$scope={dirty:u,ctx:o}),jo.$set(Ss);const di={};u&2&&(di.$$scope={dirty:u,ctx:o}),xo.$set(di)},i(o){Ai||(w(b.$$.fragment,o),w(ee.$$.fragment,o),w(j.$$.fragment,o),w(we.$$.fragment,o),w(Uo.$$.fragment,o),w(Qo.$$.fragment,o),w(Go.$$.fragment,o),w(Vo.$$.fragment,o),w(Jo.$$.fragment,o),w(Xo.$$.fragment,o),w(Yo.$$.fragment,o),w(Zo.$$.fragment,o),w(tn.$$.fragment,o),w(nn.$$.fragment,o),w(sn.$$.fragment,o),w(an.$$.fragment,o),w(rn.$$.fragment,o),w(hn.$$.fragment,o),w(co.$$.fragment,o),w(fn.$$.fragment,o),w(un.$$.fragment,o),w(mn.$$.fragment,o),w(gn.$$.fragment,o),w(_n.$$.fragment,o),w(Tn.$$.fragment,o),w(fo.$$.fragment,o),w(wn.$$.fragment,o),w(yn.$$.fragment,o),w(Dn.$$.fragment,o),w(zn.$$.fragment,o),w(mo.$$.fragment,o),w(Mn.$$.fragment,o),w(Cn.$$.fragment,o),w(Pn.$$.fragment,o),w(Rn.$$.fragment,o),w(An.$$.fragment,o),w(_o.$$.fragment,o),w(In.$$.fragment,o),w(Sn.$$.fragment,o),w(Nn.$$.fragment,o),w(Qn.$$.fragment,o),w(ko.$$.fragment,o),w(Gn.$$.fragment,o),w(Kn.$$.fragment,o),w(Vn.$$.fragment,o),w(To.$$.fragment,o),w(es.$$.fragment,o),w(wo.$$.fragment,o),w(ts.$$.fragment,o),w(os.$$.fragment,o),w(ns.$$.fragment,o),w(ss.$$.fragment,o),w(rs.$$.fragment,o),w(is.$$.fragment,o),w(Eo.$$.fragment,o),w(ps.$$.fragment,o),w($o.$$.fragment,o),w(hs.$$.fragment,o),w(fs.$$.fragment,o),w(us.$$.fragment,o),w(qo.$$.fragment,o),w(ks.$$.fragment,o),w(zo.$$.fragment,o),w(vs.$$.fragment,o),w(Ts.$$.fragment,o),w(ws.$$.fragment,o),w(Co.$$.fragment,o),w(Fs.$$.fragment,o),w(Po.$$.fragment,o),w(qs.$$.fragment,o),w(zs.$$.fragment,o),w(Ms.$$.fragment,o),w(jo.$$.fragment,o),w(xs.$$.fragment,o),w(xo.$$.fragment,o),w(Bs.$$.fragment,o),Ai=!0)},o(o){y(b.$$.fragment,o),y(ee.$$.fragment,o),y(j.$$.fragment,o),y(we.$$.fragment,o),y(Uo.$$.fragment,o),y(Qo.$$.fragment,o),y(Go.$$.fragment,o),y(Vo.$$.fragment,o),y(Jo.$$.fragment,o),y(Xo.$$.fragment,o),y(Yo.$$.fragment,o),y(Zo.$$.fragment,o),y(tn.$$.fragment,o),y(nn.$$.fragment,o),y(sn.$$.fragment,o),y(an.$$.fragment,o),y(rn.$$.fragment,o),y(hn.$$.fragment,o),y(co.$$.fragment,o),y(fn.$$.fragment,o),y(un.$$.fragment,o),y(mn.$$.fragment,o),y(gn.$$.fragment,o),y(_n.$$.fragment,o),y(Tn.$$.fragment,o),y(fo.$$.fragment,o),y(wn.$$.fragment,o),y(yn.$$.fragment,o),y(Dn.$$.fragment,o),y(zn.$$.fragment,o),y(mo.$$.fragment,o),y(Mn.$$.fragment,o),y(Cn.$$.fragment,o),y(Pn.$$.fragment,o),y(Rn.$$.fragment,o),y(An.$$.fragment,o),y(_o.$$.fragment,o),y(In.$$.fragment,o),y(Sn.$$.fragment,o),y(Nn.$$.fragment,o),y(Qn.$$.fragment,o),y(ko.$$.fragment,o),y(Gn.$$.fragment,o),y(Kn.$$.fragment,o),y(Vn.$$.fragment,o),y(To.$$.fragment,o),y(es.$$.fragment,o),y(wo.$$.fragment,o),y(ts.$$.fragment,o),y(os.$$.fragment,o),y(ns.$$.fragment,o),y(ss.$$.fragment,o),y(rs.$$.fragment,o),y(is.$$.fragment,o),y(Eo.$$.fragment,o),y(ps.$$.fragment,o),y($o.$$.fragment,o),y(hs.$$.fragment,o),y(fs.$$.fragment,o),y(us.$$.fragment,o),y(qo.$$.fragment,o),y(ks.$$.fragment,o),y(zo.$$.fragment,o),y(vs.$$.fragment,o),y(Ts.$$.fragment,o),y(ws.$$.fragment,o),y(Co.$$.fragment,o),y(Fs.$$.fragment,o),y(Po.$$.fragment,o),y(qs.$$.fragment,o),y(zs.$$.fragment,o),y(Ms.$$.fragment,o),y(jo.$$.fragment,o),y(xs.$$.fragment,o),y(xo.$$.fragment,o),y(Bs.$$.fragment,o),Ai=!1},d(o){t(h),o&&t(F),o&&t(m),D(b),o&&t(X),o&&t(z),D(ee),o&&t(le),o&&t(W),o&&t(P),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(ae),o&&t(S),o&&t(K),o&&t(x),o&&t(pe),D(j),o&&t(N),o&&t(re),D(we),o&&t(ci),o&&t(Ft),D(Uo),o&&t(pi),o&&t(ze),D(Qo),D(Go),D(Vo),D(Jo),D(Xo),o&&t(hi),o&&t(Mt),D(Yo),o&&t(fi),o&&t(Je),D(Zo),D(tn),D(nn),D(sn),o&&t(ui),o&&t(Pt),D(an),o&&t(mi),o&&t(Xe),D(rn),D(hn),D(co),D(fn),o&&t(gi),o&&t(jt),D(un),o&&t(_i),o&&t(xt),D(mn),o&&t(bi),o&&t(Bt),D(gn),o&&t(ki),o&&t(Ye),D(_n),D(Tn),D(fo),D(wn),o&&t(vi),o&&t(It),D(yn),o&&t(Ti),o&&t(je),D(Dn),D(zn),D(mo),D(Mn),D(Cn),o&&t(wi),o&&t(Nt),D(Pn),o&&t(yi),o&&t(xe),D(Rn),D(An),D(_o),D(In),o&&t(Di),o&&t(Wt),D(Sn),o&&t(Ei),o&&t(Be),D(Nn),D(Qn),D(ko),D(Gn),o&&t($i),o&&t(Qt),D(Kn),o&&t(Fi),o&&t(Le),D(Vn),D(To),D(es),D(wo),D(ts),o&&t(qi),o&&t(Kt),D(os),o&&t(zi),o&&t(lt),D(ns),D(ss),o&&t(Mi),o&&t(Vt),D(rs),o&&t(Ci),o&&t(Ae),D(is),D(Eo),D(ps),D($o),D(hs),o&&t(Pi),o&&t(Yt),D(fs),o&&t(Ri),o&&t(Me),D(us),D(qo),D(ks),D(zo),D(vs),o&&t(ji),o&&t(eo),D(Ts),o&&t(xi),o&&t(Ce),D(ws),D(Co),D(Fs),D(Po),D(qs),o&&t(Bi),o&&t(oo),D(zs),o&&t(Li),o&&t(Pe),D(Ms),D(jo),D(xs),D(xo),D(Bs)}}}const z_={local:"deberta",sections:[{local:"overview",title:"Overview"},{local:"transformers.DebertaConfig",title:"DebertaConfig"},{local:"transformers.DebertaTokenizer",title:"DebertaTokenizer"},{local:"transformers.DebertaTokenizerFast",title:"DebertaTokenizerFast"},{local:"transformers.DebertaModel",title:"DebertaModel"},{local:"transformers.DebertaPreTrainedModel",title:"DebertaPreTrainedModel"},{local:"transformers.DebertaForMaskedLM",title:"DebertaForMaskedLM"},{local:"transformers.DebertaForSequenceClassification",title:"DebertaForSequenceClassification"},{local:"transformers.DebertaForTokenClassification",title:"DebertaForTokenClassification"},{local:"transformers.DebertaForQuestionAnswering",title:"DebertaForQuestionAnswering"},{local:"transformers.TFDebertaModel",title:"TFDebertaModel"},{local:"transformers.TFDebertaPreTrainedModel",title:"TFDebertaPreTrainedModel"},{local:"transformers.TFDebertaForMaskedLM",title:"TFDebertaForMaskedLM"},{local:"transformers.TFDebertaForSequenceClassification",title:"TFDebertaForSequenceClassification"},{local:"transformers.TFDebertaForTokenClassification",title:"TFDebertaForTokenClassification"},{local:"transformers.TFDebertaForQuestionAnswering",title:"TFDebertaForQuestionAnswering"}],title:"DeBERTa"};function M_(O,h,F){let{fw:m}=h;return O.$$set=g=>{"fw"in g&&F(0,m=g.fw)},[m]}class L_ extends d_{constructor(h){super();c_(this,h,M_,q_,p_,{fw:0})}}export{L_ as default,z_ as metadata};
