import{S as Q2,i as O2,s as I2,e as o,k as l,w as b,t as a,L as W2,c as r,d as s,m as d,a as i,x as v,h as n,b as p,M as U2,J as e,g as c,y as w,q as y,o as k,B as j}from"../../chunks/vendor-9e2b328e.js";import{T as As}from"../../chunks/Tip-76f97a76.js";import{D as pe}from"../../chunks/Docstring-50fd6873.js";import{C as Ft}from"../../chunks/CodeBlock-88e23343.js";import{C as Hr}from"../../chunks/CodeBlockFw-9c69f7d0.js";import{I as ss}from"../../chunks/IconCopyLink-fd0e58fd.js";import"../../chunks/CopyButton-4ae140ab.js";function H2(U){let m,F,f,g,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function B2(U){let m,F,f,g,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function G2(U){let m,F,f,g,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function R2(U){let m,F,f,g,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function V2(U){let m,F,f,g,q,T,_,A,_e,K,z,Y,O,Z,Te,I,be,ce,W,N,ee,se,$,x,oe,H,he,V,L,te,ve,C,we,Q,ae,ye,B,ke,re,P,je,G,ue;return{c(){m=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),f=l(),g=o("ul"),q=o("li"),T=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=o("li"),_e=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),z=o("p"),Y=a("This second option is useful when using "),O=o("code"),Z=a("tf.keras.Model.fit"),Te=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),be=a("model(inputs)"),ce=a("."),W=l(),N=o("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=l(),$=o("ul"),x=o("li"),oe=a("a single Tensor with "),H=o("code"),he=a("input_ids"),V=a(" only and nothing else: "),L=o("code"),te=a("model(inputs_ids)"),ve=l(),C=o("li"),we=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),ae=a("model([input_ids, attention_mask])"),ye=a(" or "),B=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),re=l(),P=o("li"),je=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=o("code"),ue=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);F=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),f=d(u),g=r(u,"UL",{});var J=i(g);q=r(J,"LI",{});var Fe=i(q);T=n(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(s),_=d(J),A=r(J,"LI",{});var Ge=i(A);_e=n(Ge,"having all inputs as a list, tuple or dict in the first positional arguments."),Ge.forEach(s),J.forEach(s),K=d(u),z=r(u,"P",{});var S=i(z);Y=n(S,"This second option is useful when using "),O=r(S,"CODE",{});var Ae=i(O);Z=n(Ae,"tf.keras.Model.fit"),Ae.forEach(s),Te=n(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(S,"CODE",{});var xe=i(I);be=n(xe,"model(inputs)"),xe.forEach(s),ce=n(S,"."),S.forEach(s),W=d(u),N=r(u,"P",{});var Re=i(N);ee=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(s),se=d(u),$=r(u,"UL",{});var D=i($);x=r(D,"LI",{});var M=i(x);oe=n(M,"a single Tensor with "),H=r(M,"CODE",{});var Ve=i(H);he=n(Ve,"input_ids"),Ve.forEach(s),V=n(M," only and nothing else: "),L=r(M,"CODE",{});var Ce=i(L);te=n(Ce,"model(inputs_ids)"),Ce.forEach(s),M.forEach(s),ve=d(D),C=r(D,"LI",{});var R=i(C);we=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ke=i(Q);ae=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),ye=n(R," or "),B=r(R,"CODE",{});var qe=i(B);ke=n(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(s),R.forEach(s),re=d(D),P=r(D,"LI",{});var Ee=i(P);je=n(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ee,"CODE",{});var Ye=i(G);ue=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),Ee.forEach(s),D.forEach(s)},m(u,E){c(u,m,E),e(m,F),c(u,f,E),c(u,g,E),e(g,q),e(q,T),e(g,_),e(g,A),e(A,_e),c(u,K,E),c(u,z,E),e(z,Y),e(z,O),e(O,Z),e(z,Te),e(z,I),e(I,be),e(z,ce),c(u,W,E),c(u,N,E),e(N,ee),c(u,se,E),c(u,$,E),e($,x),e(x,oe),e(x,H),e(H,he),e(x,V),e(x,L),e(L,te),e($,ve),e($,C),e(C,we),e(C,Q),e(Q,ae),e(C,ye),e(C,B),e(B,ke),e($,re),e($,P),e(P,je),e(P,G),e(G,ue)},d(u){u&&s(m),u&&s(f),u&&s(g),u&&s(K),u&&s(z),u&&s(W),u&&s(N),u&&s(se),u&&s($)}}}function K2(U){let m,F,f,g,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function Y2(U){let m,F,f,g,q,T,_,A,_e,K,z,Y,O,Z,Te,I,be,ce,W,N,ee,se,$,x,oe,H,he,V,L,te,ve,C,we,Q,ae,ye,B,ke,re,P,je,G,ue;return{c(){m=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),f=l(),g=o("ul"),q=o("li"),T=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=o("li"),_e=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),z=o("p"),Y=a("This second option is useful when using "),O=o("code"),Z=a("tf.keras.Model.fit"),Te=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),be=a("model(inputs)"),ce=a("."),W=l(),N=o("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=l(),$=o("ul"),x=o("li"),oe=a("a single Tensor with "),H=o("code"),he=a("input_ids"),V=a(" only and nothing else: "),L=o("code"),te=a("model(inputs_ids)"),ve=l(),C=o("li"),we=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),ae=a("model([input_ids, attention_mask])"),ye=a(" or "),B=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),re=l(),P=o("li"),je=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=o("code"),ue=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);F=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),f=d(u),g=r(u,"UL",{});var J=i(g);q=r(J,"LI",{});var Fe=i(q);T=n(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(s),_=d(J),A=r(J,"LI",{});var Ge=i(A);_e=n(Ge,"having all inputs as a list, tuple or dict in the first positional arguments."),Ge.forEach(s),J.forEach(s),K=d(u),z=r(u,"P",{});var S=i(z);Y=n(S,"This second option is useful when using "),O=r(S,"CODE",{});var Ae=i(O);Z=n(Ae,"tf.keras.Model.fit"),Ae.forEach(s),Te=n(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(S,"CODE",{});var xe=i(I);be=n(xe,"model(inputs)"),xe.forEach(s),ce=n(S,"."),S.forEach(s),W=d(u),N=r(u,"P",{});var Re=i(N);ee=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(s),se=d(u),$=r(u,"UL",{});var D=i($);x=r(D,"LI",{});var M=i(x);oe=n(M,"a single Tensor with "),H=r(M,"CODE",{});var Ve=i(H);he=n(Ve,"input_ids"),Ve.forEach(s),V=n(M," only and nothing else: "),L=r(M,"CODE",{});var Ce=i(L);te=n(Ce,"model(inputs_ids)"),Ce.forEach(s),M.forEach(s),ve=d(D),C=r(D,"LI",{});var R=i(C);we=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ke=i(Q);ae=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),ye=n(R," or "),B=r(R,"CODE",{});var qe=i(B);ke=n(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(s),R.forEach(s),re=d(D),P=r(D,"LI",{});var Ee=i(P);je=n(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ee,"CODE",{});var Ye=i(G);ue=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),Ee.forEach(s),D.forEach(s)},m(u,E){c(u,m,E),e(m,F),c(u,f,E),c(u,g,E),e(g,q),e(q,T),e(g,_),e(g,A),e(A,_e),c(u,K,E),c(u,z,E),e(z,Y),e(z,O),e(O,Z),e(z,Te),e(z,I),e(I,be),e(z,ce),c(u,W,E),c(u,N,E),e(N,ee),c(u,se,E),c(u,$,E),e($,x),e(x,oe),e(x,H),e(H,he),e(x,V),e(x,L),e(L,te),e($,ve),e($,C),e(C,we),e(C,Q),e(Q,ae),e(C,ye),e(C,B),e(B,ke),e($,re),e($,P),e(P,je),e(P,G),e(G,ue)},d(u){u&&s(m),u&&s(f),u&&s(g),u&&s(K),u&&s(z),u&&s(W),u&&s(N),u&&s(se),u&&s($)}}}function J2(U){let m,F,f,g,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function X2(U){let m,F,f,g,q,T,_,A,_e,K,z,Y,O,Z,Te,I,be,ce,W,N,ee,se,$,x,oe,H,he,V,L,te,ve,C,we,Q,ae,ye,B,ke,re,P,je,G,ue;return{c(){m=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),f=l(),g=o("ul"),q=o("li"),T=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=o("li"),_e=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),z=o("p"),Y=a("This second option is useful when using "),O=o("code"),Z=a("tf.keras.Model.fit"),Te=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),be=a("model(inputs)"),ce=a("."),W=l(),N=o("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=l(),$=o("ul"),x=o("li"),oe=a("a single Tensor with "),H=o("code"),he=a("input_ids"),V=a(" only and nothing else: "),L=o("code"),te=a("model(inputs_ids)"),ve=l(),C=o("li"),we=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),ae=a("model([input_ids, attention_mask])"),ye=a(" or "),B=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),re=l(),P=o("li"),je=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=o("code"),ue=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);F=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),f=d(u),g=r(u,"UL",{});var J=i(g);q=r(J,"LI",{});var Fe=i(q);T=n(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(s),_=d(J),A=r(J,"LI",{});var Ge=i(A);_e=n(Ge,"having all inputs as a list, tuple or dict in the first positional arguments."),Ge.forEach(s),J.forEach(s),K=d(u),z=r(u,"P",{});var S=i(z);Y=n(S,"This second option is useful when using "),O=r(S,"CODE",{});var Ae=i(O);Z=n(Ae,"tf.keras.Model.fit"),Ae.forEach(s),Te=n(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(S,"CODE",{});var xe=i(I);be=n(xe,"model(inputs)"),xe.forEach(s),ce=n(S,"."),S.forEach(s),W=d(u),N=r(u,"P",{});var Re=i(N);ee=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(s),se=d(u),$=r(u,"UL",{});var D=i($);x=r(D,"LI",{});var M=i(x);oe=n(M,"a single Tensor with "),H=r(M,"CODE",{});var Ve=i(H);he=n(Ve,"input_ids"),Ve.forEach(s),V=n(M," only and nothing else: "),L=r(M,"CODE",{});var Ce=i(L);te=n(Ce,"model(inputs_ids)"),Ce.forEach(s),M.forEach(s),ve=d(D),C=r(D,"LI",{});var R=i(C);we=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ke=i(Q);ae=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),ye=n(R," or "),B=r(R,"CODE",{});var qe=i(B);ke=n(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(s),R.forEach(s),re=d(D),P=r(D,"LI",{});var Ee=i(P);je=n(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ee,"CODE",{});var Ye=i(G);ue=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),Ee.forEach(s),D.forEach(s)},m(u,E){c(u,m,E),e(m,F),c(u,f,E),c(u,g,E),e(g,q),e(q,T),e(g,_),e(g,A),e(A,_e),c(u,K,E),c(u,z,E),e(z,Y),e(z,O),e(O,Z),e(z,Te),e(z,I),e(I,be),e(z,ce),c(u,W,E),c(u,N,E),e(N,ee),c(u,se,E),c(u,$,E),e($,x),e(x,oe),e(x,H),e(H,he),e(x,V),e(x,L),e(L,te),e($,ve),e($,C),e(C,we),e(C,Q),e(Q,ae),e(C,ye),e(C,B),e(B,ke),e($,re),e($,P),e(P,je),e(P,G),e(G,ue)},d(u){u&&s(m),u&&s(f),u&&s(g),u&&s(K),u&&s(z),u&&s(W),u&&s(N),u&&s(se),u&&s($)}}}function Z2(U){let m,F,f,g,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function e0(U){let m,F,f,g,q,T,_,A,_e,K,z,Y,O,Z,Te,I,be,ce,W,N,ee,se,$,x,oe,H,he,V,L,te,ve,C,we,Q,ae,ye,B,ke,re,P,je,G,ue;return{c(){m=o("p"),F=a("TF 2.0 models accepts two formats as inputs:"),f=l(),g=o("ul"),q=o("li"),T=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),A=o("li"),_e=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),z=o("p"),Y=a("This second option is useful when using "),O=o("code"),Z=a("tf.keras.Model.fit"),Te=a(` method which currently requires having all the
tensors in the first argument of the model call function: `),I=o("code"),be=a("model(inputs)"),ce=a("."),W=l(),N=o("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),se=l(),$=o("ul"),x=o("li"),oe=a("a single Tensor with "),H=o("code"),he=a("input_ids"),V=a(" only and nothing else: "),L=o("code"),te=a("model(inputs_ids)"),ve=l(),C=o("li"),we=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),ae=a("model([input_ids, attention_mask])"),ye=a(" or "),B=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),re=l(),P=o("li"),je=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=o("code"),ue=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);F=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),f=d(u),g=r(u,"UL",{});var J=i(g);q=r(J,"LI",{});var Fe=i(q);T=n(Fe,"having all inputs as keyword arguments (like PyTorch models), or"),Fe.forEach(s),_=d(J),A=r(J,"LI",{});var Ge=i(A);_e=n(Ge,"having all inputs as a list, tuple or dict in the first positional arguments."),Ge.forEach(s),J.forEach(s),K=d(u),z=r(u,"P",{});var S=i(z);Y=n(S,"This second option is useful when using "),O=r(S,"CODE",{});var Ae=i(O);Z=n(Ae,"tf.keras.Model.fit"),Ae.forEach(s),Te=n(S,` method which currently requires having all the
tensors in the first argument of the model call function: `),I=r(S,"CODE",{});var xe=i(I);be=n(xe,"model(inputs)"),xe.forEach(s),ce=n(S,"."),S.forEach(s),W=d(u),N=r(u,"P",{});var Re=i(N);ee=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Re.forEach(s),se=d(u),$=r(u,"UL",{});var D=i($);x=r(D,"LI",{});var M=i(x);oe=n(M,"a single Tensor with "),H=r(M,"CODE",{});var Ve=i(H);he=n(Ve,"input_ids"),Ve.forEach(s),V=n(M," only and nothing else: "),L=r(M,"CODE",{});var Ce=i(L);te=n(Ce,"model(inputs_ids)"),Ce.forEach(s),M.forEach(s),ve=d(D),C=r(D,"LI",{});var R=i(C);we=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ke=i(Q);ae=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),ye=n(R," or "),B=r(R,"CODE",{});var qe=i(B);ke=n(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(s),R.forEach(s),re=d(D),P=r(D,"LI",{});var Ee=i(P);je=n(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ee,"CODE",{});var Ye=i(G);ue=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),Ee.forEach(s),D.forEach(s)},m(u,E){c(u,m,E),e(m,F),c(u,f,E),c(u,g,E),e(g,q),e(q,T),e(g,_),e(g,A),e(A,_e),c(u,K,E),c(u,z,E),e(z,Y),e(z,O),e(O,Z),e(z,Te),e(z,I),e(I,be),e(z,ce),c(u,W,E),c(u,N,E),e(N,ee),c(u,se,E),c(u,$,E),e($,x),e(x,oe),e(x,H),e(H,he),e(x,V),e(x,L),e(L,te),e($,ve),e($,C),e(C,we),e(C,Q),e(Q,ae),e(C,ye),e(C,B),e(B,ke),e($,re),e($,P),e(P,je),e(P,G),e(G,ue)},d(u){u&&s(m),u&&s(f),u&&s(g),u&&s(K),u&&s(z),u&&s(W),u&&s(N),u&&s(se),u&&s($)}}}function s0(U){let m,F,f,g,q;return{c(){m=o("p"),F=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);F=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var A=i(f);g=n(A,"Module"),A.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,F),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function t0(U){let m,F,f,g,q,T,_,A,_e,K,z,Y,O,Z,Te,I,be,ce,W,N,ee,se,$,x,oe,H,he,V,L,te,ve,C,we,Q,ae,ye,B,ke,re,P,je,G,ue,u,E,J,Fe,Ge,S,Ae,xe,Re,D,M,Ve,Ce,R,Ke,qe,Ee,Ye,ga,dh,ph,np,At,By,op,zt,ch,To,hh,uh,rp,_s,mh,_a,fh,gh,Ta,_h,Th,ba,bh,vh,ip,bo,wh,lp,Ts,Me,yh,Br,kh,jh,vo,qh,Eh,Gr,Fh,Ah,va,zh,$h,Rr,xh,Ch,Vr,Mh,Ph,Sh,Je,Dh,Kr,Nh,Lh,Yr,Qh,Oh,Jr,Ih,Wh,Xr,Uh,Hh,wa,Bh,Gh,Rh,Vs,Vh,Zr,Kh,Yh,ei,Jh,Xh,Zh,si,eu,dp,Ks,$t,ti,ya,su,ai,tu,pp,xt,au,wo,nu,ou,cp,yo,ni,ru,hp,Ct,iu,ko,lu,du,up,$s,oi,pu,cu,ka,hu,ri,uu,mu,fu,ja,gu,ii,_u,Tu,mp,jo,bu,fp,Mt,li,Ys,di,pi,vu,wu,ci,hi,yu,ku,ui,mi,ju,qu,Js,Xs,fi,Eu,Fu,gi,Au,zu,_i,$u,xu,Zs,Ti,Cu,Mu,bi,Pu,Su,vi,Du,Nu,et,wi,Lu,Qu,yi,Ou,Iu,ki,Wu,gp,xs,Uu,qa,Hu,Bu,Ea,Gu,Ru,_p,Fa,Tp,Cs,Vu,qo,Ku,Yu,Eo,Ju,Xu,bp,Aa,vp,Pt,Zu,za,em,sm,wp,St,tm,$a,am,nm,yp,Fo,ji,om,kp,Dt,rm,xa,im,lm,jp,ie,Ao,qi,dm,pm,cm,zo,Ei,hm,um,mm,$o,Fi,fm,gm,_m,xo,Ai,Tm,bm,vm,Co,zi,wm,ym,km,Mo,$i,jm,qm,Em,Po,xi,Fm,Am,zm,So,Ci,$m,xm,Cm,Do,Mi,Mm,Pm,qp,We,Sm,Ca,Dm,Nm,Ma,Lm,Qm,Pi,Om,Im,Si,Wm,Um,Di,Hm,Bm,Ep,No,Ni,Gm,Fp,ze,Rm,Lo,Vm,Km,Li,Ym,Jm,Qi,Xm,Zm,Oi,ef,sf,Qo,tf,af,Oo,nf,of,Ap,Nt,Ii,Pa,Wi,Ui,rf,lf,Hi,Bi,df,pf,st,Sa,Gi,cf,hf,zs,Ri,uf,mf,Vi,ff,gf,Ki,_f,Tf,Yi,bf,vf,Da,Ji,wf,yf,Pe,Xi,kf,jf,Zi,qf,Ef,el,Ff,Af,sl,zf,$f,tl,xf,Cf,al,Mf,Pf,nl,Sf,Df,Na,ol,Nf,Lf,ms,rl,Qf,Of,il,If,Wf,ll,Uf,Hf,dl,Bf,Gf,pl,Rf,zp,le,Io,Vf,Kf,cl,Yf,Jf,hl,Xf,Zf,ul,eg,sg,ml,tg,ag,fl,ng,og,gl,rg,ig,_l,lg,dg,$p,La,xp,bs,pg,Wo,cg,hg,Tl,ug,mg,bl,fg,gg,Cp,Qa,Mp,X,_g,vl,Tg,bg,wl,vg,wg,yl,yg,kg,kl,jg,qg,jl,Eg,Fg,ql,Ag,zg,Uo,$g,xg,Oa,Cg,Mg,Ia,Pg,Sg,Pp,Ho,El,Dg,Sp,Ms,Ng,Bo,Lg,Qg,Go,Og,Ig,Dp,Wa,Np,tt,Lt,Fl,Ua,Wg,Al,Ug,Lp,me,Hg,Ro,Bg,Gg,Vo,Rg,Vg,zl,Kg,Yg,$l,Jg,Xg,xl,Zg,e_,Ko,s_,t_,Cl,a_,n_,Qp,Qt,o_,Ml,r_,i_,Op,Ha,Ip,Ue,l_,Pl,d_,p_,Sl,c_,h_,Dl,u_,m_,Ba,f_,g_,Ga,__,T_,Wp,at,Ot,Nl,Ra,b_,Ll,v_,Up,nt,Va,w_,Ka,y_,Yo,k_,j_,Hp,ot,It,Ql,Ya,q_,Ol,E_,Bp,Xe,Ja,F_,fs,A_,Jo,z_,$_,Il,x_,C_,Wl,M_,P_,Xo,S_,D_,N_,Xa,L_,Za,Q_,O_,I_,Ul,W_,U_,en,Gp,rt,Wt,Hl,sn,H_,Bl,B_,Rp,de,tn,G_,Gl,R_,V_,ne,K_,Zo,Y_,J_,er,X_,Z_,Rl,eT,sT,Vl,tT,aT,Kl,nT,oT,Yl,rT,iT,Jl,lT,dT,Xl,pT,cT,Zl,hT,uT,mT,Se,ed,fT,gT,sd,_T,TT,td,bT,vT,ad,wT,yT,nd,kT,jT,od,qT,ET,rd,FT,AT,sr,tr,zT,$T,xT,Ut,an,CT,id,MT,PT,Ps,nn,ST,on,DT,ar,NT,LT,QT,rn,OT,ln,IT,WT,UT,ld,Vp,it,Ht,dd,dn,HT,pd,BT,Kp,De,pn,GT,cn,RT,nr,VT,KT,YT,hn,JT,un,XT,ZT,eb,mn,sb,or,tb,ab,nb,fn,ob,gn,rb,ib,lb,ts,_n,db,lt,pb,rr,cb,hb,cd,ub,mb,fb,Bt,gb,hd,_b,Tb,Tn,Yp,dt,Gt,ud,bn,bb,md,vb,Jp,gs,vn,wb,pt,yb,fd,kb,jb,ir,qb,Eb,Fb,wn,Ab,yn,zb,$b,xb,as,kn,Cb,ct,Mb,lr,Pb,Sb,gd,Db,Nb,Lb,Rt,Qb,_d,Ob,Ib,jn,Xp,ht,Vt,Td,qn,Wb,bd,Ub,Zp,Ze,En,Hb,vd,Bb,Gb,Fn,Rb,dr,Vb,Kb,Yb,An,Jb,zn,Xb,Zb,ev,ns,$n,sv,ut,tv,pr,av,nv,wd,ov,rv,iv,Kt,lv,yd,dv,pv,xn,ec,mt,Yt,kd,Cn,cv,jd,hv,sc,es,Mn,uv,ft,mv,qd,fv,gv,Ed,_v,Tv,bv,Pn,vv,cr,wv,yv,kv,Sn,jv,Dn,qv,Ev,Fv,os,Nn,Av,gt,zv,hr,$v,xv,Fd,Cv,Mv,Pv,Jt,Sv,Ad,Dv,Nv,Ln,tc,_t,Xt,zd,Qn,Lv,$d,Qv,ac,Ne,On,Ov,xd,Iv,Wv,In,Uv,ur,Hv,Bv,Gv,Wn,Rv,Un,Vv,Kv,Yv,Zt,Jv,rs,Hn,Xv,Tt,Zv,mr,ew,sw,Cd,tw,aw,nw,ea,ow,Md,rw,iw,Bn,nc,bt,sa,Pd,Gn,lw,Sd,dw,oc,Le,Rn,pw,Vn,cw,Dd,hw,uw,mw,Kn,fw,fr,gw,_w,Tw,Yn,bw,Jn,vw,ww,yw,ta,kw,is,Xn,jw,vt,qw,gr,Ew,Fw,Nd,Aw,zw,$w,aa,xw,Ld,Cw,Mw,Zn,rc,wt,na,Qd,eo,Pw,Od,Sw,ic,Qe,so,Dw,Id,Nw,Lw,to,Qw,_r,Ow,Iw,Ww,ao,Uw,no,Hw,Bw,Gw,oa,Rw,ls,oo,Vw,yt,Kw,Tr,Yw,Jw,Wd,Xw,Zw,ey,ra,sy,Ud,ty,ay,ro,lc,kt,ia,Hd,io,ny,Bd,oy,dc,Oe,lo,ry,jt,iy,Gd,ly,dy,Rd,py,cy,hy,po,uy,br,my,fy,gy,co,_y,ho,Ty,by,vy,la,wy,ds,uo,yy,qt,ky,vr,jy,qy,Vd,Ey,Fy,Ay,da,zy,Kd,$y,xy,mo,pc;return T=new ss({}),Z=new ss({}),ya=new ss({}),Fa=new Hr({props:{pt:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base")

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig("google-base-finetuned-wikisql-supervised")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for example, the base sized model with default SQA configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WikiSQL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(<span class="hljs-string">&quot;google-base-finetuned-wikisql-supervised&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`},tf:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base")

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained("google/tapas-base-finetuned-wtq")
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig("google-base-finetuned-wikisql-supervised")
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for example, the base sized model with default SQA configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WikiSQL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(<span class="hljs-string">&quot;google-base-finetuned-wikisql-supervised&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}}),Aa=new Hr({props:{pt:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`},tf:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)`}}}),La=new Hr({props:{pt:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = "google/tapas-base"
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(
    table=table,
    queries=queries,
    answer_coordinates=answer_coordinates,
    answer_text=answer_text,
    padding="max_length",
    return_tensors="pt",
)
inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_coordinates = [[(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)], [(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)], [(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)]]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_text = [[<span class="hljs-string">&quot;Brad Pitt&quot;</span>], [<span class="hljs-string">&quot;69&quot;</span>], [<span class="hljs-string">&quot;209&quot;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table,
<span class="hljs-meta">... </span>    queries=queries,
<span class="hljs-meta">... </span>    answer_coordinates=answer_coordinates,
<span class="hljs-meta">... </span>    answer_text=answer_text,
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[...]]), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[[...]]]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`},tf:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = "google/tapas-base"
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(
    table=table,
    queries=queries,
    answer_coordinates=answer_coordinates,
    answer_text=answer_text,
    padding="max_length",
    return_tensors="tf",
)
inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_coordinates = [[(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)], [(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)], [(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)]]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_text = [[<span class="hljs-string">&quot;Brad Pitt&quot;</span>], [<span class="hljs-string">&quot;69&quot;</span>], [<span class="hljs-string">&quot;209&quot;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table,
<span class="hljs-meta">... </span>    queries=queries,
<span class="hljs-meta">... </span>    answer_coordinates=answer_coordinates,
<span class="hljs-meta">... </span>    answer_text=answer_text,
<span class="hljs-meta">... </span>    padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>    return_tensors=<span class="hljs-string">&quot;tf&quot;</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[...]]), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[[...]]]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`}}}),Qa=new Hr({props:{pt:{code:`import torch
import pandas as pd

tsv_path = "your_path_to_the_tsv_file"
table_csv_path = "your_path_to_a_directory_containing_all_csv_files"


class TableDataset(torch.utils.data.Dataset):
    def __init__(self, data, tokenizer):
        self.data = data
        self.tokenizer = tokenizer

    def __getitem__(self, idx):
        item = data.iloc[idx]
        table = pd.read_csv(table_csv_path + item.table_file).astype(
            str
        )  # be sure to make your table data text only
        encoding = self.tokenizer(
            table=table,
            queries=item.question,
            answer_coordinates=item.answer_coordinates,
            answer_text=item.answer_text,
            truncation=True,
            padding="max_length",
            return_tensors="pt",
        )
        # remove the batch dimension which the tokenizer adds by default
        encoding = {key: val.squeeze(0) for key, val in encoding.items()}
        # add the float_answer which is also required (weak supervision for aggregation case)
        encoding["float_answer"] = torch.tensor(item.float_answer)
        return encoding

    def __len__(self):
        return len(self.data)


data = pd.read_csv(tsv_path, sep="\\t")
train_dataset = TableDataset(data, tokenizer)
train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=32)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>(torch.utils.data.Dataset):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):
<span class="hljs-meta">... </span>        self.data = data
<span class="hljs-meta">... </span>        self.tokenizer = tokenizer

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__getitem__</span>(<span class="hljs-params">self, idx</span>):
<span class="hljs-meta">... </span>        item = data.iloc[idx]
<span class="hljs-meta">... </span>        table = pd.read_csv(table_csv_path + item.table_file).astype(
<span class="hljs-meta">... </span>            <span class="hljs-built_in">str</span>
<span class="hljs-meta">... </span>        )  <span class="hljs-comment"># be sure to make your table data text only</span>
<span class="hljs-meta">... </span>        encoding = self.tokenizer(
<span class="hljs-meta">... </span>            table=table,
<span class="hljs-meta">... </span>            queries=item.question,
<span class="hljs-meta">... </span>            answer_coordinates=item.answer_coordinates,
<span class="hljs-meta">... </span>            answer_text=item.answer_text,
<span class="hljs-meta">... </span>            truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>            padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>            return_tensors=<span class="hljs-string">&quot;pt&quot;</span>,
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span>
<span class="hljs-meta">... </span>        encoding = {key: val.squeeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">... </span>        <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span>
<span class="hljs-meta">... </span>        encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = torch.tensor(item.float_answer)
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> encoding

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)


<span class="hljs-meta">&gt;&gt;&gt; </span>data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&quot;\\t&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataset = TableDataset(data, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=<span class="hljs-number">32</span>)`},tf:{code:`import tensorflow as tf
import pandas as pd

tsv_path = "your_path_to_the_tsv_file"
table_csv_path = "your_path_to_a_directory_containing_all_csv_files"


class TableDataset:
    def __init__(self, data, tokenizer):
        self.data = data
        self.tokenizer = tokenizer

    def __iter__(self):
        for idx in range(self.__len__()):
            item = self.data.iloc[idx]
            table = pd.read_csv(table_csv_path + item.table_file).astype(
                str
            )  # be sure to make your table data text only
            encoding = self.tokenizer(
                table=table,
                queries=item.question,
                answer_coordinates=item.answer_coordinates,
                answer_text=item.answer_text,
                truncation=True,
                padding="max_length",
                return_tensors="tf",
            )
            # remove the batch dimension which the tokenizer adds by default
            encoding = {key: tf.squeeze(val, 0) for key, val in encoding.items()}
            # add the float_answer which is also required (weak supervision for aggregation case)
            encoding["float_answer"] = tf.convert_to_tensor(item.float_answer, dtype=tf.float32)
            yield encoding["input_ids"], encoding["attention_mask"], encoding["numeric_values"], encoding[
                "numeric_values_scale"
            ], encoding["token_type_ids"], encoding["labels"], encoding["float_answer"]

    def __len__(self):
        return len(self.data)


data = pd.read_csv(tsv_path, sep="\\t")
train_dataset = TableDataset(data, tokenizer)
output_signature = (
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
    tf.TensorSpec(shape=(512, 7), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.int32),
    tf.TensorSpec(shape=(512,), dtype=tf.float32),
)
train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(32)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span>


<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):
<span class="hljs-meta">... </span>        self.data = data
<span class="hljs-meta">... </span>        self.tokenizer = tokenizer

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__iter__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> idx <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(self.__len__()):
<span class="hljs-meta">... </span>            item = self.data.iloc[idx]
<span class="hljs-meta">... </span>            table = pd.read_csv(table_csv_path + item.table_file).astype(
<span class="hljs-meta">... </span>                <span class="hljs-built_in">str</span>
<span class="hljs-meta">... </span>            )  <span class="hljs-comment"># be sure to make your table data text only</span>
<span class="hljs-meta">... </span>            encoding = self.tokenizer(
<span class="hljs-meta">... </span>                table=table,
<span class="hljs-meta">... </span>                queries=item.question,
<span class="hljs-meta">... </span>                answer_coordinates=item.answer_coordinates,
<span class="hljs-meta">... </span>                answer_text=item.answer_text,
<span class="hljs-meta">... </span>                truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>                padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>                return_tensors=<span class="hljs-string">&quot;tf&quot;</span>,
<span class="hljs-meta">... </span>            )
<span class="hljs-meta">... </span>            <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span>
<span class="hljs-meta">... </span>            encoding = {key: tf.squeeze(val, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">... </span>            <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span>
<span class="hljs-meta">... </span>            encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = tf.convert_to_tensor(item.float_answer, dtype=tf.float32)
<span class="hljs-meta">... </span>            <span class="hljs-keyword">yield</span> encoding[<span class="hljs-string">&quot;input_ids&quot;</span>], encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>], encoding[<span class="hljs-string">&quot;numeric_values&quot;</span>], encoding[
<span class="hljs-meta">... </span>                <span class="hljs-string">&quot;numeric_values_scale&quot;</span>
<span class="hljs-meta">... </span>            ], encoding[<span class="hljs-string">&quot;token_type_ids&quot;</span>], encoding[<span class="hljs-string">&quot;labels&quot;</span>], encoding[<span class="hljs-string">&quot;float_answer&quot;</span>]

<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)


<span class="hljs-meta">&gt;&gt;&gt; </span>data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&quot;\\t&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataset = TableDataset(data, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>output_signature = (
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>, <span class="hljs-number">7</span>), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>    tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(<span class="hljs-number">32</span>)`}}}),Wa=new Hr({props:{pt:{code:`from transformers import TapasConfig, TapasForQuestionAnswering, AdamW

# this is the default WTQ configuration
config = TapasConfig(
    num_aggregation_labels=4,
    use_answer_as_supervision=True,
    answer_loss_cutoff=0.664694,
    cell_selection_preference=0.207951,
    huber_loss_delta=0.121194,
    init_cell_selection_weights_to_zero=True,
    select_one_column=True,
    allow_empty_column_selection=False,
    temperature=0.0352513,
)
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

optimizer = AdamW(model.parameters(), lr=5e-5)

model.train()
for epoch in range(2):  # loop over the dataset multiple times
    for batch in train_dataloader:
        # get the inputs;
        input_ids = batch["input_ids"]
        attention_mask = batch["attention_mask"]
        token_type_ids = batch["token_type_ids"]
        labels = batch["labels"]
        numeric_values = batch["numeric_values"]
        numeric_values_scale = batch["numeric_values_scale"]
        float_answer = batch["float_answer"]

        # zero the parameter gradients
        optimizer.zero_grad()

        # forward + backward + optimize
        outputs = model(
            input_ids=input_ids,
            attention_mask=attention_mask,
            token_type_ids=token_type_ids,
            labels=labels,
            numeric_values=numeric_values,
            numeric_values_scale=numeric_values_scale,
            float_answer=float_answer,
        )
        loss = outputs.loss
        loss.backward()
        optimizer.step()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering, AdamW

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is the default WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(
<span class="hljs-meta">... </span>    num_aggregation_labels=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    use_answer_as_supervision=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    answer_loss_cutoff=<span class="hljs-number">0.664694</span>,
<span class="hljs-meta">... </span>    cell_selection_preference=<span class="hljs-number">0.207951</span>,
<span class="hljs-meta">... </span>    huber_loss_delta=<span class="hljs-number">0.121194</span>,
<span class="hljs-meta">... </span>    init_cell_selection_weights_to_zero=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    select_one_column=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    allow_empty_column_selection=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.0352513</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.train()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span>
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># get the inputs;</span>
<span class="hljs-meta">... </span>        input_ids = batch[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">... </span>        attention_mask = batch[<span class="hljs-string">&quot;attention_mask&quot;</span>]
<span class="hljs-meta">... </span>        token_type_ids = batch[<span class="hljs-string">&quot;token_type_ids&quot;</span>]
<span class="hljs-meta">... </span>        labels = batch[<span class="hljs-string">&quot;labels&quot;</span>]
<span class="hljs-meta">... </span>        numeric_values = batch[<span class="hljs-string">&quot;numeric_values&quot;</span>]
<span class="hljs-meta">... </span>        numeric_values_scale = batch[<span class="hljs-string">&quot;numeric_values_scale&quot;</span>]
<span class="hljs-meta">... </span>        float_answer = batch[<span class="hljs-string">&quot;float_answer&quot;</span>]

<span class="hljs-meta">... </span>        <span class="hljs-comment"># zero the parameter gradients</span>
<span class="hljs-meta">... </span>        optimizer.zero_grad()

<span class="hljs-meta">... </span>        <span class="hljs-comment"># forward + backward + optimize</span>
<span class="hljs-meta">... </span>        outputs = model(
<span class="hljs-meta">... </span>            input_ids=input_ids,
<span class="hljs-meta">... </span>            attention_mask=attention_mask,
<span class="hljs-meta">... </span>            token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>            labels=labels,
<span class="hljs-meta">... </span>            numeric_values=numeric_values,
<span class="hljs-meta">... </span>            numeric_values_scale=numeric_values_scale,
<span class="hljs-meta">... </span>            float_answer=float_answer,
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        loss = outputs.loss
<span class="hljs-meta">... </span>        loss.backward()
<span class="hljs-meta">... </span>        optimizer.step()`},tf:{code:`import tensorflow as tf
from transformers import TapasConfig, TFTapasForQuestionAnswering

# this is the default WTQ configuration
config = TapasConfig(
    num_aggregation_labels=4,
    use_answer_as_supervision=True,
    answer_loss_cutoff=0.664694,
    cell_selection_preference=0.207951,
    huber_loss_delta=0.121194,
    init_cell_selection_weights_to_zero=True,
    select_one_column=True,
    allow_empty_column_selection=False,
    temperature=0.0352513,
)
model = TFTapasForQuestionAnswering.from_pretrained("google/tapas-base", config=config)

optimizer = tf.keras.optimizers.Adam(learning_rate=5e-5)

for epoch in range(2):  # loop over the dataset multiple times
    for batch in train_dataloader:
        # get the inputs;
        input_ids = batch[0]
        attention_mask = batch[1]
        token_type_ids = batch[4]
        labels = batch[-1]
        numeric_values = batch[2]
        numeric_values_scale = batch[3]
        float_answer = batch[6]

        # forward + backward + optimize
        with tf.GradientTape() as tape:
            outputs = model(
                input_ids=input_ids,
                attention_mask=attention_mask,
                token_type_ids=token_type_ids,
                labels=labels,
                numeric_values=numeric_values,
                numeric_values_scale=numeric_values_scale,
                float_answer=float_answer,
            )
        grads = tape.gradient(outputs.loss, model.trainable_weights)
        optimizer.apply_gradients(zip(grads, model.trainable_weights))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is the default WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(
<span class="hljs-meta">... </span>    num_aggregation_labels=<span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>    use_answer_as_supervision=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    answer_loss_cutoff=<span class="hljs-number">0.664694</span>,
<span class="hljs-meta">... </span>    cell_selection_preference=<span class="hljs-number">0.207951</span>,
<span class="hljs-meta">... </span>    huber_loss_delta=<span class="hljs-number">0.121194</span>,
<span class="hljs-meta">... </span>    init_cell_selection_weights_to_zero=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    select_one_column=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>    allow_empty_column_selection=<span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>    temperature=<span class="hljs-number">0.0352513</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = tf.keras.optimizers.Adam(learning_rate=<span class="hljs-number">5e-5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span>
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># get the inputs;</span>
<span class="hljs-meta">... </span>        input_ids = batch[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>        attention_mask = batch[<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        token_type_ids = batch[<span class="hljs-number">4</span>]
<span class="hljs-meta">... </span>        labels = batch[-<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        numeric_values = batch[<span class="hljs-number">2</span>]
<span class="hljs-meta">... </span>        numeric_values_scale = batch[<span class="hljs-number">3</span>]
<span class="hljs-meta">... </span>        float_answer = batch[<span class="hljs-number">6</span>]

<span class="hljs-meta">... </span>        <span class="hljs-comment"># forward + backward + optimize</span>
<span class="hljs-meta">... </span>        <span class="hljs-keyword">with</span> tf.GradientTape() <span class="hljs-keyword">as</span> tape:
<span class="hljs-meta">... </span>            outputs = model(
<span class="hljs-meta">... </span>                input_ids=input_ids,
<span class="hljs-meta">... </span>                attention_mask=attention_mask,
<span class="hljs-meta">... </span>                token_type_ids=token_type_ids,
<span class="hljs-meta">... </span>                labels=labels,
<span class="hljs-meta">... </span>                numeric_values=numeric_values,
<span class="hljs-meta">... </span>                numeric_values_scale=numeric_values_scale,
<span class="hljs-meta">... </span>                float_answer=float_answer,
<span class="hljs-meta">... </span>            )
<span class="hljs-meta">... </span>        grads = tape.gradient(outputs.loss, model.trainable_weights)
<span class="hljs-meta">... </span>        optimizer.apply_gradients(<span class="hljs-built_in">zip</span>(grads, model.trainable_weights))`}}}),Ua=new ss({}),Ha=new Hr({props:{pt:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

model_name = "google/tapas-base-finetuned-wtq"
model = TapasForQuestionAnswering.from_pretrained(model_name)
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)
predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
    inputs, outputs.logits.detach(), outputs.logits_aggregation.detach()
)

# let's print out the results:
id2aggregation = {0: "NONE", 1: "SUM", 2: "AVERAGE", 3: "COUNT"}
aggregation_predictions_string = [id2aggregation[x] for x in predicted_aggregation_indices]

answers = []
for coordinates in predicted_answer_coordinates:
    if len(coordinates) == 1:
        # only a single cell:
        answers.append(table.iat[coordinates[0]])
    else:
        # multiple cells
        cell_values = []
        for coordinate in coordinates:
            cell_values.append(table.iat[coordinate])
        answers.append(", ".join(cell_values))

display(table)
print("")
for query, answer, predicted_agg in zip(queries, answers, aggregation_predictions_string):
    print(query)
    if predicted_agg == "NONE":
        print("Predicted answer: " + answer)
    else:
        print("Predicted answer: " + predicted_agg + " > " + answer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
<span class="hljs-meta">... </span>    inputs, outputs.logits.detach(), outputs.logits_aggregation.detach()
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s print out the results:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>: <span class="hljs-string">&quot;COUNT&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]

<span class="hljs-meta">&gt;&gt;&gt; </span>answers = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only a single cell:</span>
<span class="hljs-meta">... </span>        answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># multiple cells</span>
<span class="hljs-meta">... </span>        cell_values = []
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:
<span class="hljs-meta">... </span>            cell_values.append(table.iat[coordinate])
<span class="hljs-meta">... </span>        answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))

<span class="hljs-meta">&gt;&gt;&gt; </span>display(table)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(query)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)
What <span class="hljs-keyword">is</span> the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played <span class="hljs-keyword">in</span>?
Predicted answer: COUNT &gt; <span class="hljs-number">69</span>
What <span class="hljs-keyword">is</span> the total number of movies?
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`},tf:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
import pandas as pd

model_name = "google/tapas-base-finetuned-wtq"
model = TFTapasForQuestionAnswering.from_pretrained(model_name)
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {"Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], "Number of movies": ["87", "53", "69"]}
queries = [
    "What is the name of the first actor?",
    "How many movies has George Clooney played in?",
    "What is the total number of movies?",
]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)
predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
    inputs, outputs.logits, outputs.logits_aggregation
)

# let's print out the results:
id2aggregation = {0: "NONE", 1: "SUM", 2: "AVERAGE", 3: "COUNT"}
aggregation_predictions_string = [id2aggregation[x] for x in predicted_aggregation_indices]

answers = []
for coordinates in predicted_answer_coordinates:
    if len(coordinates) == 1:
        # only a single cell:
        answers.append(table.iat[coordinates[0]])
    else:
        # multiple cells
        cell_values = []
        for coordinate in coordinates:
            cell_values.append(table.iat[coordinate])
        answers.append(", ".join(cell_values))

display(table)
print("")
for query, answer, predicted_agg in zip(queries, answers, aggregation_predictions_string):
    print(query)
    if predicted_agg == "NONE":
        print("Predicted answer: " + answer)
    else:
        print("Predicted answer: " + predicted_agg + " > " + answer)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>,
<span class="hljs-meta">... </span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
<span class="hljs-meta">... </span>    inputs, outputs.logits, outputs.logits_aggregation
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s print out the results:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>: <span class="hljs-string">&quot;COUNT&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]

<span class="hljs-meta">&gt;&gt;&gt; </span>answers = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># only a single cell:</span>
<span class="hljs-meta">... </span>        answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># multiple cells</span>
<span class="hljs-meta">... </span>        cell_values = []
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:
<span class="hljs-meta">... </span>            cell_values.append(table.iat[coordinate])
<span class="hljs-meta">... </span>        answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))

<span class="hljs-meta">&gt;&gt;&gt; </span>display(table)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(query)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)
<span class="hljs-meta">... </span>    <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>        <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)
What <span class="hljs-keyword">is</span> the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played <span class="hljs-keyword">in</span>?
Predicted answer: COUNT &gt; <span class="hljs-number">69</span>
What <span class="hljs-keyword">is</span> the total number of movies?
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}}),Ra=new ss({}),Va=new pe({props:{name:"class transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_aggregation",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L106",parametersDescription:[{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) &#x2014;
Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.`,name:"loss"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the cell selection head, for every token.`,name:"logits"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits_aggregation",description:`<strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) &#x2014;
Prediction scores of the aggregation head, for every aggregation operator.`,name:"logits_aggregation"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.`,name:"attentions"}]}}),Ya=new ss({}),Ja=new pe({props:{name:"class transformers.TapasConfig",anchor:"transformers.TapasConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1024"},{name:"type_vocab_sizes",val:" = [3, 256, 256, 2, 256, 256, 10]"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"positive_label_weight",val:" = 10.0"},{name:"num_aggregation_labels",val:" = 0"},{name:"aggregation_loss_weight",val:" = 1.0"},{name:"use_answer_as_supervision",val:" = None"},{name:"answer_loss_importance",val:" = 1.0"},{name:"use_normalized_answer_loss",val:" = False"},{name:"huber_loss_delta",val:" = None"},{name:"temperature",val:" = 1.0"},{name:"aggregation_temperature",val:" = 1.0"},{name:"use_gumbel_for_cells",val:" = False"},{name:"use_gumbel_for_aggregation",val:" = False"},{name:"average_approximation_function",val:" = 'ratio'"},{name:"cell_selection_preference",val:" = None"},{name:"answer_loss_cutoff",val:" = None"},{name:"max_num_rows",val:" = 64"},{name:"max_num_columns",val:" = 32"},{name:"average_logits_per_cell",val:" = False"},{name:"select_one_column",val:" = True"},{name:"allow_empty_column_selection",val:" = False"},{name:"init_cell_selection_weights_to_zero",val:" = False"},{name:"reset_position_index_per_cell",val:" = True"},{name:"disable_per_token_loss",val:" = False"},{name:"aggregation_labels",val:" = None"},{name:"no_aggregation_label_index",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/configuration_tapas.py#L37",parametersDescription:[{anchor:"transformers.TapasConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the TAPAS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"vocab_size"},{anchor:"transformers.TapasConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.TapasConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.TapasConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.TapasConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.TapasConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string, <code>&quot;gelu&quot;</code>,
<code>&quot;relu&quot;</code>, <code>&quot;swish&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.TapasConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.TapasConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.TapasConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.TapasConfig.type_vocab_sizes",description:`<strong>type_vocab_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 256, 256, 2, 256, 256, 10]</code>) &#x2014;
The vocabulary sizes of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"type_vocab_sizes"},{anchor:"transformers.TapasConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
The standard deviation of the truncated_normal_initializer for initializing all weight matrices.`,name:"initializer_range"},{anchor:"transformers.TapasConfig.layer_norm_eps",description:`<strong>layer_norm_eps</strong> (<code>float</code>, <em>optional</em>, defaults to 1e-12) &#x2014;
The epsilon used by the layer normalization layers.`,name:"layer_norm_eps"},{anchor:"transformers.TapasConfig.positive_label_weight",description:`<strong>positive_label_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 10.0) &#x2014;
Weight for positive labels.`,name:"positive_label_weight"},{anchor:"transformers.TapasConfig.num_aggregation_labels",description:`<strong>num_aggregation_labels</strong> (<code>int</code>, <em>optional</em>, defaults to 0) &#x2014;
The number of aggregation operators to predict.`,name:"num_aggregation_labels"},{anchor:"transformers.TapasConfig.aggregation_loss_weight",description:`<strong>aggregation_loss_weight</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Importance weight for the aggregation loss.`,name:"aggregation_loss_weight"},{anchor:"transformers.TapasConfig.use_answer_as_supervision",description:`<strong>use_answer_as_supervision</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether to use the answer as the only supervision for aggregation examples.`,name:"use_answer_as_supervision"},{anchor:"transformers.TapasConfig.answer_loss_importance",description:`<strong>answer_loss_importance</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Importance weight for the regression loss.`,name:"answer_loss_importance"},{anchor:"transformers.TapasConfig.use_normalized_answer_loss",description:`<strong>use_normalized_answer_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to normalize the answer loss by the maximum of the predicted and expected value.`,name:"use_normalized_answer_loss"},{anchor:"transformers.TapasConfig.huber_loss_delta",description:`<strong>huber_loss_delta</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Delta parameter used to calculate the regression loss.`,name:"huber_loss_delta"},{anchor:"transformers.TapasConfig.temperature",description:`<strong>temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Value used to control (OR change) the skewness of cell logits probabilities.`,name:"temperature"},{anchor:"transformers.TapasConfig.aggregation_temperature",description:`<strong>aggregation_temperature</strong> (<code>float</code>, <em>optional</em>, defaults to 1.0) &#x2014;
Scales aggregation logits to control the skewness of probabilities.`,name:"aggregation_temperature"},{anchor:"transformers.TapasConfig.use_gumbel_for_cells",description:`<strong>use_gumbel_for_cells</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply Gumbel-Softmax to cell selection.`,name:"use_gumbel_for_cells"},{anchor:"transformers.TapasConfig.use_gumbel_for_aggregation",description:`<strong>use_gumbel_for_aggregation</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to apply Gumbel-Softmax to aggregation selection.`,name:"use_gumbel_for_aggregation"},{anchor:"transformers.TapasConfig.average_approximation_function",description:`<strong>average_approximation_function</strong> (<code>string</code>, <em>optional</em>, defaults to <code>&quot;ratio&quot;</code>) &#x2014;
Method to calculate the expected average of cells in the weak supervision case. One of <code>&quot;ratio&quot;</code>,
<code>&quot;first_order&quot;</code> or <code>&quot;second_order&quot;</code>.`,name:"average_approximation_function"},{anchor:"transformers.TapasConfig.cell_selection_preference",description:`<strong>cell_selection_preference</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Preference for cell selection in ambiguous cases. Only applicable in case of weak supervision for
aggregation (WTQ, WikiSQL). If the total mass of the aggregation probabilities (excluding the &#x201C;NONE&#x201D;
operator) is higher than this hyperparameter, then aggregation is predicted for an example.`,name:"cell_selection_preference"},{anchor:"transformers.TapasConfig.answer_loss_cutoff",description:`<strong>answer_loss_cutoff</strong> (<code>float</code>, <em>optional</em>) &#x2014;
Ignore examples with answer loss larger than cutoff.`,name:"answer_loss_cutoff"},{anchor:"transformers.TapasConfig.max_num_rows",description:`<strong>max_num_rows</strong> (<code>int</code>, <em>optional</em>, defaults to 64) &#x2014;
Maximum number of rows.`,name:"max_num_rows"},{anchor:"transformers.TapasConfig.max_num_columns",description:`<strong>max_num_columns</strong> (<code>int</code>, <em>optional</em>, defaults to 32) &#x2014;
Maximum number of columns.`,name:"max_num_columns"},{anchor:"transformers.TapasConfig.average_logits_per_cell",description:`<strong>average_logits_per_cell</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to average logits per cell.`,name:"average_logits_per_cell"},{anchor:"transformers.TapasConfig.select_one_column",description:`<strong>select_one_column</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to constrain the model to only select cells from a single column.`,name:"select_one_column"},{anchor:"transformers.TapasConfig.allow_empty_column_selection",description:`<strong>allow_empty_column_selection</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to allow not to select any column.`,name:"allow_empty_column_selection"},{anchor:"transformers.TapasConfig.init_cell_selection_weights_to_zero",description:`<strong>init_cell_selection_weights_to_zero</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to initialize cell selection weights to 0 so that the initial probabilities are 50%.`,name:"init_cell_selection_weights_to_zero"},{anchor:"transformers.TapasConfig.reset_position_index_per_cell",description:`<strong>reset_position_index_per_cell</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether to restart position indexes at every cell (i.e. use relative position embeddings).`,name:"reset_position_index_per_cell"},{anchor:"transformers.TapasConfig.disable_per_token_loss",description:`<strong>disable_per_token_loss</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to disable any (strong or weak) supervision on cells.`,name:"disable_per_token_loss"},{anchor:"transformers.TapasConfig.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>Dict[int, label]</code>, <em>optional</em>) &#x2014;
The aggregation labels used to aggregate the results. For example, the WTQ models have the following
aggregation labels: <code>{0: &quot;NONE&quot;, 1: &quot;SUM&quot;, 2: &quot;AVERAGE&quot;, 3: &quot;COUNT&quot;}</code>`,name:"aggregation_labels"},{anchor:"transformers.TapasConfig.no_aggregation_label_index",description:`<strong>no_aggregation_label_index</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If the aggregation labels are defined and one of these labels represents &#x201C;No aggregation&#x201D;, this should be
set to its index. For example, the WTQ models have the &#x201C;NONE&#x201D; aggregation label at index 0, so that value
should be set to 0 for these models.`,name:"no_aggregation_label_index"}]}}),en=new Ft({props:{code:`from transformers import TapasModel, TapasConfig

# Initializing a default (SQA) Tapas configuration
configuration = TapasConfig()
# Initializing a model from the configuration
model = TapasModel(configuration)
# Accessing the model configuration
configuration = model.config,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasModel, TapasConfig

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a default (SQA) Tapas configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = TapasConfig()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel(configuration)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),sn=new ss({}),tn=new pe({props:{name:"class transformers.TapasTokenizer",anchor:"transformers.TapasTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"empty_token",val:" = '[EMPTY]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"cell_trim_length",val:": int = -1"},{name:"max_column_id",val:": int = None"},{name:"max_row_id",val:": int = None"},{name:"strip_column_names",val:": bool = False"},{name:"update_answer_coordinates",val:": bool = False"},{name:"min_question_length",val:" = None"},{name:"max_question_length",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/tokenization_tapas.py#L189",parametersDescription:[{anchor:"transformers.TapasTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
File containing the vocabulary.`,name:"vocab_file"},{anchor:"transformers.TapasTokenizer.do_lower_case",description:`<strong>do_lower_case</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to lowercase the input when tokenizing.`,name:"do_lower_case"},{anchor:"transformers.TapasTokenizer.do_basic_tokenize",description:`<strong>do_basic_tokenize</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to do basic tokenization before WordPiece.`,name:"do_basic_tokenize"},{anchor:"transformers.TapasTokenizer.never_split",description:`<strong>never_split</strong> (<code>Iterable</code>, <em>optional</em>) &#x2014;
Collection of tokens which will never be split during tokenization. Only has an effect when
<code>do_basic_tokenize=True</code>`,name:"never_split"},{anchor:"transformers.TapasTokenizer.unk_token",description:`<strong>unk_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[UNK]&quot;</code>) &#x2014;
The unknown token. A token that is not in the vocabulary cannot be converted to an ID and is set to be this
token instead.`,name:"unk_token"},{anchor:"transformers.TapasTokenizer.sep_token",description:`<strong>sep_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[SEP]&quot;</code>) &#x2014;
The separator token, which is used when building a sequence from multiple sequences, e.g. two sequences for
sequence classification or for a text and a question for question answering. It is also used as the last
token of a sequence built with special tokens.`,name:"sep_token"},{anchor:"transformers.TapasTokenizer.pad_token",description:`<strong>pad_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[PAD]&quot;</code>) &#x2014;
The token used for padding, for example when batching sequences of different lengths.`,name:"pad_token"},{anchor:"transformers.TapasTokenizer.cls_token",description:`<strong>cls_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[CLS]&quot;</code>) &#x2014;
The classifier token which is used when doing sequence classification (classification of the whole sequence
instead of per-token classification). It is the first token of the sequence when built with special tokens.`,name:"cls_token"},{anchor:"transformers.TapasTokenizer.mask_token",description:`<strong>mask_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[MASK]&quot;</code>) &#x2014;
The token used for masking values. This is the token used when training this model with masked language
modeling. This is the token which the model will try to predict.`,name:"mask_token"},{anchor:"transformers.TapasTokenizer.empty_token",description:`<strong>empty_token</strong> (<code>str</code>, <em>optional</em>, defaults to <code>&quot;[EMPTY]&quot;</code>) &#x2014;
The token used for empty cell values in a table. Empty cell values include &quot;&quot;, &#x201C;n/a&#x201D;, &#x201C;nan&#x201D; and &#x201D;?&#x201C;.`,name:"empty_token"},{anchor:"transformers.TapasTokenizer.tokenize_chinese_chars",description:`<strong>tokenize_chinese_chars</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to tokenize Chinese characters. This should likely be deactivated for Japanese (see this
<a href="https://github.com/huggingface/transformers/issues/328" rel="nofollow">issue</a>).
strip_accents &#x2014; (<code>bool</code>, <em>optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"},{anchor:"transformers.TapasTokenizer.cell_trim_length",description:`<strong>cell_trim_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
If &gt; 0: Trim cells so that the length is &lt;= this value. Also disables further cell trimming, should thus be
used with <code>truncation</code> set to <code>True</code>.`,name:"cell_trim_length"},{anchor:"transformers.TapasTokenizer.max_column_id",description:`<strong>max_column_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max column id to extract.`,name:"max_column_id"},{anchor:"transformers.TapasTokenizer.max_row_id",description:`<strong>max_row_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max row id to extract.`,name:"max_row_id"},{anchor:"transformers.TapasTokenizer.strip_column_names",description:`<strong>strip_column_names</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to add empty strings instead of column names.`,name:"strip_column_names"},{anchor:"transformers.TapasTokenizer.update_answer_coordinates",description:`<strong>update_answer_coordinates</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to recompute the answer coordinates from the answer text.`,name:"update_answer_coordinates"},{anchor:"transformers.TapasTokenizer.min_question_length",description:`<strong>min_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Minimum length of each question in terms of tokens (will be skipped otherwise).`,name:"min_question_length"},{anchor:"transformers.TapasTokenizer.max_question_length",description:`<strong>max_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of each question in terms of tokens (will be skipped otherwise).`,name:"max_question_length"}]}}),an=new pe({props:{name:"__call__",anchor:"transformers.TapasTokenizer.__call__",parameters:[{name:"table",val:": pd.DataFrame"},{name:"queries",val:": typing.Union[str, typing.List[str], typing.List[int], typing.List[typing.List[str]], typing.List[typing.List[int]], NoneType] = None"},{name:"answer_coordinates",val:": typing.Union[typing.List[typing.Tuple], typing.List[typing.List[typing.Tuple]], NoneType] = None"},{name:"answer_text",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.file_utils.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.models.tapas.tokenization_tapas.TapasTruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/tokenization_tapas.py#L529",parametersDescription:[{anchor:"transformers.TapasTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>) &#x2014;
Table containing tabular data. Note that all cell values must be text. Use <em>.astype(str)</em> on a Pandas
dataframe to convert it to string.`,name:"table"},{anchor:"transformers.TapasTokenizer.__call__.queries",description:`<strong>queries</strong> (<code>str</code> or <code>List[str]</code>) &#x2014;
Question or batch of questions related to a table to be encoded. Note that in case of a batch, all
questions must refer to the <strong>same</strong> table.`,name:"queries"},{anchor:"transformers.TapasTokenizer.__call__.answer_coordinates",description:`<strong>answer_coordinates</strong> (<code>List[Tuple]</code> or <code>List[List[Tuple]]</code>, <em>optional</em>) &#x2014;
Answer coordinates of each table-question pair in the batch. In case only a single table-question pair
is provided, then the answer_coordinates must be a single list of one or more tuples. Each tuple must
be a (row_index, column_index) pair. The first data row (not the column header row) has index 0. The
first column has index 0. In case a batch of table-question pairs is provided, then the
answer_coordinates must be a list of lists of tuples (each list corresponding to a single
table-question pair).`,name:"answer_coordinates"},{anchor:"transformers.TapasTokenizer.__call__.answer_text",description:`<strong>answer_text</strong> (<code>List[str]</code> or <code>List[List[str]]</code>, <em>optional</em>) &#x2014;
Answer text of each table-question pair in the batch. In case only a single table-question pair is
provided, then the answer_text must be a single list of one or more strings. Each string must be the
answer text of a corresponding answer coordinate. In case a batch of table-question pairs is provided,
then the answer_coordinates must be a list of lists of strings (each list corresponding to a single
table-question pair).`,name:"answer_text"},{anchor:"transformers.TapasTokenizer.__call__.add_special_tokens",description:`<strong>add_special_tokens</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>True</code>) &#x2014;
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.TapasTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/master/en/internal/file_utils#transformers.file_utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a single
sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the maximum
acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of different
lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.TapasTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <code>TapasTruncationStrategy</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;drop_rows_to_fit&apos;</code>: Truncate to a maximum length specified with the argument <code>max_length</code>
or to the maximum acceptable input length for the model if that argument is not provided. This will
truncate row by row, removing rows from the table.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with sequence lengths
greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.TapasTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum length
is required by one of the truncation/padding parameters. If the model has no specific maximum input
length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.TapasTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.TapasTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.TapasTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/master/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}]}}),nn=new pe({props:{name:"convert_logits_to_predictions",anchor:"transformers.TapasTokenizer.convert_logits_to_predictions",parameters:[{name:"data",val:""},{name:"logits",val:""},{name:"logits_agg",val:" = None"},{name:"cell_classification_threshold",val:" = 0.5"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/tokenization_tapas.py#L1891",parametersDescription:[{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.data",description:`<strong>data</strong> (<code>dict</code>) &#x2014;
Dictionary mapping features to actual values. Should be created using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.`,name:"data"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits",description:`<strong>logits</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Tensor containing the logits at the token level.`,name:"logits"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits_agg",description:`<strong>logits_agg</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_aggregation_labels)</code>, <em>optional</em>) &#x2014;
Tensor containing the aggregation logits.`,name:"logits_agg"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.cell_classification_threshold",description:`<strong>cell_classification_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to be used for cell selection. All table cells for which their probability is larger than
this threshold will be selected.`,name:"cell_classification_threshold"}],returnDescription:`
<ul>
<li>predicted_answer_coordinates (<code>List[List[[tuple]]</code> of length <code>batch_size</code>): Predicted answer coordinates
as a list of lists of tuples. Each element in the list contains the predicted answer coordinates of a
single example in the batch, as a list of tuples. Each tuple is a cell, i.e. (row index, column index).</li>
<li>predicted_aggregation_indices (<code>List[int]</code>of length <code>batch_size</code>, <em>optional</em>, returned when
<code>logits_aggregation</code> is provided): Predicted aggregation operator indices of the aggregation head.</li>
</ul>
`,returnType:`
<p><code>tuple</code> comprising various elements depending on the inputs</p>
`}}),dn=new ss({}),pn=new pe({props:{name:"class transformers.TapasModel",anchor:"transformers.TapasModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L856",parametersDescription:[{anchor:"transformers.TapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_n=new pe({props:{name:"forward",anchor:"transformers.TapasModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L894",parametersDescription:[{anchor:"transformers.TapasModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Bt=new As({props:{$$slots:{default:[H2]},$$scope:{ctx:U}}}),Tn=new Ft({props:{code:`from transformers import TapasTokenizer, TapasModel
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasModel.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),bn=new ss({}),vn=new pe({props:{name:"class transformers.TapasForMaskedLM",anchor:"transformers.TapasForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L1009",parametersDescription:[{anchor:"transformers.TapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),kn=new pe({props:{name:"forward",anchor:"transformers.TapasForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L1028",parametersDescription:[{anchor:"transformers.TapasForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Rt=new As({props:{$$slots:{default:[B2]},$$scope:{ctx:U}}}),jn=new Ft({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasForMaskedLM.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)

inputs = tokenizer(
    table=table, queries="How many [MASK] has George [MASK] played in?", return_tensors="pt"
)
labels = tokenizer(
    table=table, queries="How many movies has George Clooney played in?", return_tensors="pt"
)["input_ids"]

outputs = model(**inputs, labels=labels)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many [MASK] has George [MASK] played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),qn=new ss({}),En=new pe({props:{name:"class transformers.TapasForSequenceClassification",anchor:"transformers.TapasForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L1468",parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$n=new pe({props:{name:"forward",anchor:"transformers.TapasForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L1480",parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Kt=new As({props:{$$slots:{default:[G2]},$$scope:{ctx:U}}}),xn=new Ft({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
import torch
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-tabfact")
model = TapasForSequenceClassification.from_pretrained("google/tapas-base-finetuned-tabfact")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = [
    "There is only one actor who is 45 years old",
    "There are 3 actors which played in more than 60 movies",
]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
labels = torch.tensor([1, 0])  # 1 means entailed, 0 means refuted

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There is only one actor who is 45 years old&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There are 3 actors which played in more than 60 movies&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>, <span class="hljs-number">0</span>])  <span class="hljs-comment"># 1 means entailed, 0 means refuted</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Cn=new ss({}),Mn=new pe({props:{name:"class transformers.TapasForQuestionAnswering",anchor:"transformers.TapasForQuestionAnswering",parameters:[{name:"config",val:": TapasConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L1124",parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Nn=new pe({props:{name:"forward",anchor:"transformers.TapasForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"table_mask",val:" = None"},{name:"labels",val:" = None"},{name:"aggregation_labels",val:" = None"},{name:"float_answer",val:" = None"},{name:"numeric_values",val:" = None"},{name:"numeric_values_scale",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L1159",parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForQuestionAnswering.forward.table_mask",description:`<strong>table_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
<ul>
<li>1 for tokens that are <strong>part of the answer</strong>,</li>
<li>0 for tokens that are <strong>not part of the answer</strong>.</li>
</ul>`,name:"labels"},{anchor:"transformers.TapasForQuestionAnswering.forward.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Aggregation function index for every example in the batch for computing the aggregation loss. Indices
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong supervision for
aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TapasForQuestionAnswering.forward.float_answer",description:`<strong>float_answer</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values",description:`<strong>numeric_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to calculate the
regression loss.`,name:"numeric_values"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) \u2014 Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the cell selection head, for every token.</li>
<li><strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) \u2014 Prediction scores of the aggregation head, for every aggregation operator.</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer
plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jt=new As({props:{$$slots:{default:[R2]},$$scope:{ctx:U}}}),Ln=new Ft({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base-finetuned-wtq")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
logits_aggregation = outputs.logits_aggregation,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),Qn=new ss({}),On=new pe({props:{name:"class transformers.TFTapasModel",anchor:"transformers.TFTapasModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L976",parametersDescription:[{anchor:"transformers.TFTapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Zt=new As({props:{$$slots:{default:[V2]},$$scope:{ctx:U}}}),Hn=new pe({props:{name:"call",anchor:"transformers.TFTapasModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L982",parametersDescription:[{anchor:"transformers.TFTapasModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
<p>This output is usually <em>not</em> a good summary of the semantic content of the input, you\u2019re often better with
averaging or pooling the sequence of hidden-states for the whole input sequence.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ea=new As({props:{$$slots:{default:[K2]},$$scope:{ctx:U}}}),Bn=new Ft({props:{code:`from transformers import TapasTokenizer, TapasModel
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasModel.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Gn=new ss({}),Rn=new pe({props:{name:"class transformers.TFTapasForMaskedLM",anchor:"transformers.TFTapasForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L1066",parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ta=new As({props:{$$slots:{default:[Y2]},$$scope:{ctx:U}}}),Xn=new pe({props:{name:"call",anchor:"transformers.TFTapasForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L1082",parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),aa=new As({props:{$$slots:{default:[J2]},$$scope:{ctx:U}}}),Zn=new Ft({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base")
model = TapasForMaskedLM.from_pretrained("google/tapas-base")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)

inputs = tokenizer(
    table=table, queries="How many [MASK] has George [MASK] played in?", return_tensors="tf"
)
labels = tokenizer(
    table=table, queries="How many movies has George Clooney played in?", return_tensors="tf"
)["input_ids"]

outputs = model(**inputs, labels=labels)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForMaskedLM.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many [MASK] has George [MASK] played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(
<span class="hljs-meta">... </span>    table=table, queries=<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),eo=new ss({}),so=new pe({props:{name:"class transformers.TFTapasForSequenceClassification",anchor:"transformers.TFTapasForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L1649",parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),oa=new As({props:{$$slots:{default:[X2]},$$scope:{ctx:U}}}),oo=new pe({props:{name:"call",anchor:"transformers.TFTapasForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L1660",parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ra=new As({props:{$$slots:{default:[Z2]},$$scope:{ctx:U}}}),ro=new Ft({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
import tensorflow as tf
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-tabfact")
model = TapasForSequenceClassification.from_pretrained("google/tapas-base-finetuned-tabfact")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = [
    "There is only one actor who is 45 years old",
    "There are 3 actors which played in more than 60 movies",
]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
labels = tf.convert_to_tensor([1, 0])  # 1 means entailed, 0 means refuted

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-tabfact&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There is only one actor who is 45 years old&quot;</span>,
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;There are 3 actors which played in more than 60 movies&quot;</span>,
<span class="hljs-meta">... </span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.convert_to_tensor([<span class="hljs-number">1</span>, <span class="hljs-number">0</span>])  <span class="hljs-comment"># 1 means entailed, 0 means refuted</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),io=new ss({}),lo=new pe({props:{name:"class transformers.TFTapasForQuestionAnswering",anchor:"transformers.TFTapasForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L1292",parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),la=new As({props:{$$slots:{default:[e0]},$$scope:{ctx:U}}}),uo=new pe({props:{name:"call",anchor:"transformers.TFTapasForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"table_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"aggregation_labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"float_answer",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values_scale",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L1314",parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this
class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative position embeddings will be
used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForQuestionAnswering.call.table_mask",description:`<strong>table_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
<ul>
<li>1 for tokens that are <strong>part of the answer</strong>,</li>
<li>0 for tokens that are <strong>not part of the answer</strong>.</li>
</ul>`,name:"labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Aggregation function index for every example in the batch for computing the aggregation loss. Indices
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong supervision for
aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.float_answer",description:`<strong>float_answer</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values",description:`<strong>numeric_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to calculate the
regression loss.`,name:"numeric_values"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case
of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],returnDescription:`
<p>A <code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code>or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) \u2014 Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.</li>
<li><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the cell selection head, for every token.</li>
<li><strong>logits_aggregation</strong> (<code>tf.Tensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) \u2014 Prediction scores of the aggregation head, for every aggregation operator.</li>
<li><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each layer plus
the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code>or <code>tuple(tf.Tensor)</code></p>
`}}),da=new As({props:{$$slots:{default:[s0]},$$scope:{ctx:U}}}),mo=new Ft({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained("google/tapas-base-finetuned-wtq")
model = TapasForQuestionAnswering.from_pretrained("google/tapas-base-finetuned-wtq")

data = {
    "Actors": ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
    "Age": ["56", "45", "59"],
    "Number of movies": ["87", "53", "69"],
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)

logits = outputs.logits
logits_aggregation = outputs.logits_aggregation,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base-finetuned-wtq&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Actors&quot;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Age&quot;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>    <span class="hljs-string">&quot;Number of movies&quot;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>],
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),{c(){m=o("meta"),F=l(),f=o("h1"),g=o("a"),q=o("span"),b(T.$$.fragment),_=l(),A=o("span"),_e=a("TAPAS"),K=l(),z=o("h2"),Y=o("a"),O=o("span"),b(Z.$$.fragment),Te=l(),I=o("span"),be=a("Overview"),ce=l(),W=o("p"),N=a("The TAPAS model was proposed in "),ee=o("a"),se=a("TAPAS: Weakly Supervised Table Parsing via Pre-training"),$=a(`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),x=l(),oe=o("p"),H=a("For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),he=l(),V=o("ul"),L=o("li"),te=o("a"),ve=a("SQA"),C=a(" (Sequential Question Answering by Microsoft)"),we=l(),Q=o("li"),ae=o("a"),ye=a("WTQ"),B=a(" (Wiki Table Questions by Stanford University)"),ke=l(),re=o("li"),P=o("a"),je=a("WikiSQL"),G=a(" (by Salesforce)."),ue=l(),u=o("p"),E=a("It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),J=l(),Fe=o("p"),Ge=a("The abstract from the paper is the following:"),S=l(),Ae=o("p"),xe=o("em"),Re=a("Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),D=l(),M=o("p"),Ve=a("In addition, the authors have further pre-trained TAPAS to recognize "),Ce=o("strong"),R=a("table entailment"),Ke=a(", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),qe=o("a"),Ee=a("TabFact"),Ye=a(", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),ga=o("a"),dh=a("Understanding tables with intermediate pre-training"),ph=a(" by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),np=l(),At=o("img"),op=l(),zt=o("small"),ch=a("TAPAS architecture. Taken from the "),To=o("a"),hh=a("original blog post"),uh=a("."),rp=l(),_s=o("p"),mh=a("This model was contributed by "),_a=o("a"),fh=a("nielsr"),gh=a(". The Tensorflow version of this model was contributed by "),Ta=o("a"),_h=a("kamalkraj"),Th=a(". The original code can be found "),ba=o("a"),bh=a("here"),vh=a("."),ip=l(),bo=o("p"),wh=a("Tips:"),lp=l(),Ts=o("ul"),Me=o("li"),yh=a("TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Br=o("code"),kh=a("reset_position_index_per_cell"),jh=a(" parameter of "),vo=o("a"),qh=a("TapasConfig"),Eh=a(", which is set to "),Gr=o("code"),Fh=a("True"),Ah=a(" by default. The default versions of the models available on the "),va=o("a"),zh=a("hub"),$h=a(" all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),Rr=o("code"),xh=a('revision="no_reset"'),Ch=a(" when calling the "),Vr=o("code"),Mh=a("from_pretrained()"),Ph=a(" method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),Sh=l(),Je=o("li"),Dh=a("TAPAS is based on BERT, so "),Kr=o("code"),Nh=a("TAPAS-base"),Lh=a(" for example corresponds to a "),Yr=o("code"),Qh=a("BERT-base"),Oh=a(" architecture. Of course, "),Jr=o("code"),Ih=a("TAPAS-large"),Wh=a(" will result in the best performance (the results reported in the paper are from "),Xr=o("code"),Uh=a("TAPAS-large"),Hh=a("). Results of the various sized models are shown on the "),wa=o("a"),Bh=a("original Github repository"),Gh=a("."),Rh=l(),Vs=o("li"),Vh=a("TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),Zr=o("code"),Kh=a("prev_labels"),Yh=a(" token type ids can be overwritten by the predicted "),ei=o("code"),Jh=a("labels"),Xh=a(" of the model to the previous question. See \u201CUsage\u201D section for more info."),Zh=l(),si=o("li"),eu=a("TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),dp=l(),Ks=o("h2"),$t=o("a"),ti=o("span"),b(ya.$$.fragment),su=l(),ai=o("span"),tu=a("Usage: fine-tuning"),pp=l(),xt=o("p"),au=a("Here we explain how you can fine-tune "),wo=o("a"),nu=a("TapasForQuestionAnswering"),ou=a(" on your own dataset."),cp=l(),yo=o("p"),ni=o("strong"),ru=a("STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),hp=l(),Ct=o("p"),iu=a("Basically, there are 3 different ways in which one can fine-tune "),ko=o("a"),lu=a("TapasForQuestionAnswering"),du=a(", corresponding to the different datasets on which Tapas was fine-tuned:"),up=l(),$s=o("ol"),oi=o("li"),pu=a("SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),cu=l(),ka=o("li"),hu=a("WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ri=o("strong"),uu=a("weak supervision"),mu=a(", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),fu=l(),ja=o("li"),gu=a("WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ii=o("strong"),_u=a("strong supervision"),Tu=a(". Here, learning the appropriate aggregation operator is much easier."),mp=l(),jo=o("p"),bu=a("To summarize:"),fp=l(),Mt=o("table"),li=o("thead"),Ys=o("tr"),di=o("th"),pi=o("strong"),vu=a("Task"),wu=l(),ci=o("th"),hi=o("strong"),yu=a("Example dataset"),ku=l(),ui=o("th"),mi=o("strong"),ju=a("Description"),qu=l(),Js=o("tbody"),Xs=o("tr"),fi=o("td"),Eu=a("Conversational"),Fu=l(),gi=o("td"),Au=a("SQA"),zu=l(),_i=o("td"),$u=a("Conversational, only cell selection questions"),xu=l(),Zs=o("tr"),Ti=o("td"),Cu=a("Weak supervision for aggregation"),Mu=l(),bi=o("td"),Pu=a("WTQ"),Su=l(),vi=o("td"),Du=a("Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Nu=l(),et=o("tr"),wi=o("td"),Lu=a("Strong supervision for aggregation"),Qu=l(),yi=o("td"),Ou=a("WikiSQL-supervised"),Iu=l(),ki=o("td"),Wu=a("Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),gp=l(),xs=o("p"),Uu=a(`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),qa=o("a"),Hu=a("torch-scatter"),Bu=a(" dependency for your environment in case you\u2019re using PyTorch, or the "),Ea=o("a"),Gu=a("tensorflow_probability"),Ru=a(`
dependency in case you\u2019re using Tensorflow:`),_p=l(),b(Fa.$$.fragment),Tp=l(),Cs=o("p"),Vu=a("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),qo=o("a"),Ku=a("TapasConfig"),Yu=a(", and then create a "),Eo=o("a"),Ju=a("TapasForQuestionAnswering"),Xu=a(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),bp=l(),b(Aa.$$.fragment),vp=l(),Pt=o("p"),Zu=a("What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),za=o("a"),em=a("here"),sm=a(" for more info."),wp=l(),St=o("p"),tm=a("For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),$a=o("a"),am=a("here"),nm=a("."),yp=l(),Fo=o("p"),ji=o("strong"),om=a("STEP 2: Prepare your data in the SQA format"),kp=l(),Dt=o("p"),rm=a("Second, no matter what you picked above, you should prepare your dataset in the "),xa=o("a"),im=a("SQA"),lm=a(" format. This format is a TSV/CSV file with the following columns:"),jp=l(),ie=o("ul"),Ao=o("li"),qi=o("code"),dm=a("id"),pm=a(": optional, id of the table-question pair, for bookkeeping purposes."),cm=l(),zo=o("li"),Ei=o("code"),hm=a("annotator"),um=a(": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),mm=l(),$o=o("li"),Fi=o("code"),fm=a("position"),gm=a(": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),_m=l(),xo=o("li"),Ai=o("code"),Tm=a("question"),bm=a(": string"),vm=l(),Co=o("li"),zi=o("code"),wm=a("table_file"),ym=a(": string, name of a csv file containing the tabular data"),km=l(),Mo=o("li"),$i=o("code"),jm=a("answer_coordinates"),qm=a(": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),Em=l(),Po=o("li"),xi=o("code"),Fm=a("answer_text"),Am=a(": list of one or more strings (each string being a cell value that is part of the answer)"),zm=l(),So=o("li"),Ci=o("code"),$m=a("aggregation_label"),xm=a(": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Cm=l(),Do=o("li"),Mi=o("code"),Mm=a("float_answer"),Pm=a(": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),qp=l(),We=o("p"),Sm=a("The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),Ca=o("a"),Dm=a("here"),Nm=a(". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),Ma=o("a"),Lm=a("here"),Qm=a(". Interestingly, these conversion scripts are not perfect (the "),Pi=o("code"),Om=a("answer_coordinates"),Im=a(" and "),Si=o("code"),Wm=a("float_answer"),Um=a(" fields are populated based on the "),Di=o("code"),Hm=a("answer_text"),Bm=a("), meaning that WTQ and WikiSQL results could actually be improved."),Ep=l(),No=o("p"),Ni=o("strong"),Gm=a("STEP 3: Convert your data into PyTorch/TensorFlow tensors using TapasTokenizer"),Fp=l(),ze=o("p"),Rm=a("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),Lo=o("a"),Vm=a("TapasTokenizer"),Km=a(" to convert table-question pairs into "),Li=o("code"),Ym=a("input_ids"),Jm=a(", "),Qi=o("code"),Xm=a("attention_mask"),Zm=a(", "),Oi=o("code"),ef=a("token_type_ids"),sf=a(" and so on. Again, based on which of the three cases you picked above, "),Qo=o("a"),tf=a("TapasForQuestionAnswering"),af=a("/"),Oo=o("a"),nf=a("TFTapasForQuestionAnswering"),of=a(` requires different
inputs to be fine-tuned:`),Ap=l(),Nt=o("table"),Ii=o("thead"),Pa=o("tr"),Wi=o("th"),Ui=o("strong"),rf=a("Task"),lf=l(),Hi=o("th"),Bi=o("strong"),df=a("Required inputs"),pf=l(),st=o("tbody"),Sa=o("tr"),Gi=o("td"),cf=a("Conversational"),hf=l(),zs=o("td"),Ri=o("code"),uf=a("input_ids"),mf=a(", "),Vi=o("code"),ff=a("attention_mask"),gf=a(", "),Ki=o("code"),_f=a("token_type_ids"),Tf=a(", "),Yi=o("code"),bf=a("labels"),vf=l(),Da=o("tr"),Ji=o("td"),wf=a("Weak supervision for aggregation"),yf=l(),Pe=o("td"),Xi=o("code"),kf=a("input_ids"),jf=a(", "),Zi=o("code"),qf=a("attention_mask"),Ef=a(", "),el=o("code"),Ff=a("token_type_ids"),Af=a(", "),sl=o("code"),zf=a("labels"),$f=a(", "),tl=o("code"),xf=a("numeric_values"),Cf=a(", "),al=o("code"),Mf=a("numeric_values_scale"),Pf=a(", "),nl=o("code"),Sf=a("float_answer"),Df=l(),Na=o("tr"),ol=o("td"),Nf=a("Strong supervision for aggregation"),Lf=l(),ms=o("td"),rl=o("code"),Qf=a("input ids"),Of=a(", "),il=o("code"),If=a("attention mask"),Wf=a(", "),ll=o("code"),Uf=a("token type ids"),Hf=a(", "),dl=o("code"),Bf=a("labels"),Gf=a(", "),pl=o("code"),Rf=a("aggregation_labels"),zp=l(),le=o("p"),Io=o("a"),Vf=a("TapasTokenizer"),Kf=a(" creates the "),cl=o("code"),Yf=a("labels"),Jf=a(", "),hl=o("code"),Xf=a("numeric_values"),Zf=a(" and "),ul=o("code"),eg=a("numeric_values_scale"),sg=a(" based on the "),ml=o("code"),tg=a("answer_coordinates"),ag=a(" and "),fl=o("code"),ng=a("answer_text"),og=a(" columns of the TSV file. The "),gl=o("code"),rg=a("float_answer"),ig=a(" and "),_l=o("code"),lg=a("aggregation_labels"),dg=a(" are already in the TSV file of step 2. Here\u2019s an example:"),$p=l(),b(La.$$.fragment),xp=l(),bs=o("p"),pg=a("Note that "),Wo=o("a"),cg=a("TapasTokenizer"),hg=a(" expects the data of the table to be "),Tl=o("strong"),ug=a("text-only"),mg=a(". You can use "),bl=o("code"),fg=a(".astype(str)"),gg=a(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),Cp=l(),b(Qa.$$.fragment),Mp=l(),X=o("p"),_g=a("Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),vl=o("strong"),Tg=a("not conversational"),bg=a(". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),wl=o("code"),vg=a("queries"),wg=a(", "),yl=o("code"),yg=a("answer_coordinates"),kg=a(" and "),kl=o("code"),jg=a("answer_text"),qg=a(" per table (in the order of their "),jl=o("code"),Eg=a("position"),Fg=a(`
index) and batch encode each table with its questions. This will make sure that the `),ql=o("code"),Ag=a("prev_labels"),zg=a(" token types (see docs of "),Uo=o("a"),$g=a("TapasTokenizer"),xg=a(") are set correctly. See "),Oa=o("a"),Cg=a("this notebook"),Mg=a(" for more info. See "),Ia=o("a"),Pg=a("this notebook"),Sg=a(" for more info regarding using the TensorFlow model."),Pp=l(),Ho=o("p"),El=o("strong"),Dg=a("STEP 4: Train (fine-tune) TapasForQuestionAnswering/TFTapasForQuestionAnswering"),Sp=l(),Ms=o("p"),Ng=a("You can then fine-tune "),Bo=o("a"),Lg=a("TapasForQuestionAnswering"),Qg=a(" or "),Go=o("a"),Og=a("TFTapasForQuestionAnswering"),Ig=a(" as follows (shown here for the weak supervision for aggregation case):"),Dp=l(),b(Wa.$$.fragment),Np=l(),tt=o("h2"),Lt=o("a"),Fl=o("span"),b(Ua.$$.fragment),Wg=l(),Al=o("span"),Ug=a("Usage: inference"),Lp=l(),me=o("p"),Hg=a("Here we explain how you can use "),Ro=o("a"),Bg=a("TapasForQuestionAnswering"),Gg=a(" or "),Vo=o("a"),Rg=a("TFTapasForQuestionAnswering"),Vg=a(" for inference (i.e. making predictions on new data). For inference, only "),zl=o("code"),Kg=a("input_ids"),Yg=a(", "),$l=o("code"),Jg=a("attention_mask"),Xg=a(" and "),xl=o("code"),Zg=a("token_type_ids"),e_=a(" (which you can obtain using "),Ko=o("a"),s_=a("TapasTokenizer"),t_=a(") have to be provided to the model to obtain the logits. Next, you can use the handy "),Cl=o("code"),a_=a("convert_logits_to_predictions"),n_=a(" method to convert these into predicted coordinates and optional aggregation indices."),Qp=l(),Qt=o("p"),o_=a("However, note that inference is "),Ml=o("strong"),r_=a("different"),i_=a(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),Op=l(),b(Ha.$$.fragment),Ip=l(),Ue=o("p"),l_=a("In case of a conversational set-up, then each table-question pair must be provided "),Pl=o("strong"),d_=a("sequentially"),p_=a(" to the model, such that the "),Sl=o("code"),c_=a("prev_labels"),h_=a(" token types can be overwritten by the predicted "),Dl=o("code"),u_=a("labels"),m_=a(" of the previous table-question pair. Again, more info can be found in "),Ba=o("a"),f_=a("this notebook"),g_=a(" (for PyTorch) and "),Ga=o("a"),__=a("this notebook"),T_=a(" (for TensorFlow)."),Wp=l(),at=o("h2"),Ot=o("a"),Nl=o("span"),b(Ra.$$.fragment),b_=l(),Ll=o("span"),v_=a("TAPAS specific outputs"),Up=l(),nt=o("div"),b(Va.$$.fragment),w_=l(),Ka=o("p"),y_=a("Output type of "),Yo=o("a"),k_=a("TapasForQuestionAnswering"),j_=a("."),Hp=l(),ot=o("h2"),It=o("a"),Ql=o("span"),b(Ya.$$.fragment),q_=l(),Ol=o("span"),E_=a("TapasConfig"),Bp=l(),Xe=o("div"),b(Ja.$$.fragment),F_=l(),fs=o("p"),A_=a("This is the configuration class to store the configuration of a "),Jo=o("a"),z_=a("TapasModel"),$_=a(`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS `),Il=o("em"),x_=a("tapas-base-finetuned-sqa"),C_=a(` architecture.
Configuration objects inherit from `),Wl=o("code"),M_=a("PreTrainedConfig"),P_=a(` and can be used to control the model outputs. Read the
documentation from `),Xo=o("a"),S_=a("PretrainedConfig"),D_=a(" for more information."),N_=l(),Xa=o("p"),L_=a(`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),Za=o("a"),Q_=a("https://github.com/google-research/tapas/tree/master"),O_=a("."),I_=l(),Ul=o("p"),W_=a("Example:"),U_=l(),b(en.$$.fragment),Gp=l(),rt=o("h2"),Wt=o("a"),Hl=o("span"),b(sn.$$.fragment),H_=l(),Bl=o("span"),B_=a("TapasTokenizer"),Rp=l(),de=o("div"),b(tn.$$.fragment),G_=l(),Gl=o("p"),R_=a(`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),V_=l(),ne=o("p"),K_=a("This tokenizer inherits from "),Zo=o("a"),Y_=a("PreTrainedTokenizer"),J_=a(` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),er=o("a"),X_=a("TapasTokenizer"),Z_=a(` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Rl=o("code"),eT=a("segment_ids"),sT=a(`,
`),Vl=o("code"),tT=a("column_ids"),aT=a(", "),Kl=o("code"),nT=a("row_ids"),oT=a(", "),Yl=o("code"),rT=a("prev_labels"),iT=a(", "),Jl=o("code"),lT=a("column_ranks"),dT=a(", "),Xl=o("code"),pT=a("inv_column_ranks"),cT=a(" and "),Zl=o("code"),hT=a("numeric_relations"),uT=a(":"),mT=l(),Se=o("ul"),ed=o("li"),fT=a(`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),gT=l(),sd=o("li"),_T=a(`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),TT=l(),td=o("li"),bT=a(`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),vT=l(),ad=o("li"),wT=a(`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),yT=l(),nd=o("li"),kT=a(`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),jT=l(),od=o("li"),qT=a(`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),ET=l(),rd=o("li"),FT=a(`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),AT=l(),sr=o("p"),tr=o("a"),zT=a("TapasTokenizer"),$T=a(` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),xT=l(),Ut=o("div"),b(an.$$.fragment),CT=l(),id=o("p"),MT=a("Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),PT=l(),Ps=o("div"),b(nn.$$.fragment),ST=l(),on=o("p"),DT=a("Converts logits of "),ar=o("a"),NT=a("TapasForQuestionAnswering"),LT=a(` to actual predicted answer coordinates and optional
aggregation indices.`),QT=l(),rn=o("p"),OT=a(`The original implementation, on which this function is based, can be found
`),ln=o("a"),IT=a("here"),WT=a("."),UT=l(),ld=o("div"),Vp=l(),it=o("h2"),Ht=o("a"),dd=o("span"),b(dn.$$.fragment),HT=l(),pd=o("span"),BT=a("TapasModel"),Kp=l(),De=o("div"),b(pn.$$.fragment),GT=l(),cn=o("p"),RT=a(`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),nr=o("a"),VT=a("PreTrainedModel"),KT=a(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),YT=l(),hn=o("p"),JT=a("This model is also a PyTorch "),un=o("a"),XT=a("torch.nn.Module"),ZT=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),eb=l(),mn=o("p"),sb=a("This class is a small change compared to "),or=o("a"),tb=a("BertModel"),ab=a(", taking into account the additional token type ids."),nb=l(),fn=o("p"),ob=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),gn=o("a"),rb=a(`Attention is
all you need`),ib=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),lb=l(),ts=o("div"),b(_n.$$.fragment),db=l(),lt=o("p"),pb=a("The "),rr=o("a"),cb=a("TapasModel"),hb=a(" forward method, overrides the "),cd=o("code"),ub=a("__call__"),mb=a(" special method."),fb=l(),b(Bt.$$.fragment),gb=l(),hd=o("p"),_b=a("Examples:"),Tb=l(),b(Tn.$$.fragment),Yp=l(),dt=o("h2"),Gt=o("a"),ud=o("span"),b(bn.$$.fragment),bb=l(),md=o("span"),vb=a("TapasForMaskedLM"),Jp=l(),gs=o("div"),b(vn.$$.fragment),wb=l(),pt=o("p"),yb=a("Tapas Model with a "),fd=o("code"),kb=a("language modeling"),jb=a(` head on top.
This model inherits from `),ir=o("a"),qb=a("PreTrainedModel"),Eb=a(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Fb=l(),wn=o("p"),Ab=a("This model is also a PyTorch "),yn=o("a"),zb=a("torch.nn.Module"),$b=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),xb=l(),as=o("div"),b(kn.$$.fragment),Cb=l(),ct=o("p"),Mb=a("The "),lr=o("a"),Pb=a("TapasForMaskedLM"),Sb=a(" forward method, overrides the "),gd=o("code"),Db=a("__call__"),Nb=a(" special method."),Lb=l(),b(Rt.$$.fragment),Qb=l(),_d=o("p"),Ob=a("Examples:"),Ib=l(),b(jn.$$.fragment),Xp=l(),ht=o("h2"),Vt=o("a"),Td=o("span"),b(qn.$$.fragment),Wb=l(),bd=o("span"),Ub=a("TapasForSequenceClassification"),Zp=l(),Ze=o("div"),b(En.$$.fragment),Hb=l(),vd=o("p"),Bb=a(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Gb=l(),Fn=o("p"),Rb=a("This model inherits from "),dr=o("a"),Vb=a("PreTrainedModel"),Kb=a(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yb=l(),An=o("p"),Jb=a("This model is also a PyTorch "),zn=o("a"),Xb=a("torch.nn.Module"),Zb=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ev=l(),ns=o("div"),b($n.$$.fragment),sv=l(),ut=o("p"),tv=a("The "),pr=o("a"),av=a("TapasForSequenceClassification"),nv=a(" forward method, overrides the "),wd=o("code"),ov=a("__call__"),rv=a(" special method."),iv=l(),b(Kt.$$.fragment),lv=l(),yd=o("p"),dv=a("Examples:"),pv=l(),b(xn.$$.fragment),ec=l(),mt=o("h2"),Yt=o("a"),kd=o("span"),b(Cn.$$.fragment),cv=l(),jd=o("span"),hv=a("TapasForQuestionAnswering"),sc=l(),es=o("div"),b(Mn.$$.fragment),uv=l(),ft=o("p"),mv=a(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),qd=o("code"),fv=a("logits"),gv=a(" and optional "),Ed=o("code"),_v=a("logits_aggregation"),Tv=a(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),bv=l(),Pn=o("p"),vv=a("This model inherits from "),cr=o("a"),wv=a("PreTrainedModel"),yv=a(`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),kv=l(),Sn=o("p"),jv=a("This model is also a PyTorch "),Dn=o("a"),qv=a("torch.nn.Module"),Ev=a(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Fv=l(),os=o("div"),b(Nn.$$.fragment),Av=l(),gt=o("p"),zv=a("The "),hr=o("a"),$v=a("TapasForQuestionAnswering"),xv=a(" forward method, overrides the "),Fd=o("code"),Cv=a("__call__"),Mv=a(" special method."),Pv=l(),b(Jt.$$.fragment),Sv=l(),Ad=o("p"),Dv=a("Examples:"),Nv=l(),b(Ln.$$.fragment),tc=l(),_t=o("h2"),Xt=o("a"),zd=o("span"),b(Qn.$$.fragment),Lv=l(),$d=o("span"),Qv=a("TFTapasModel"),ac=l(),Ne=o("div"),b(On.$$.fragment),Ov=l(),xd=o("p"),Iv=a("The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),Wv=l(),In=o("p"),Uv=a("This model inherits from "),ur=o("a"),Hv=a("TFPreTrainedModel"),Bv=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Gv=l(),Wn=o("p"),Rv=a("This model is also a "),Un=o("a"),Vv=a("tf.keras.Model"),Kv=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Yv=l(),b(Zt.$$.fragment),Jv=l(),rs=o("div"),b(Hn.$$.fragment),Xv=l(),Tt=o("p"),Zv=a("The "),mr=o("a"),ew=a("TFTapasModel"),sw=a(" forward method, overrides the "),Cd=o("code"),tw=a("__call__"),aw=a(" special method."),nw=l(),b(ea.$$.fragment),ow=l(),Md=o("p"),rw=a("Examples:"),iw=l(),b(Bn.$$.fragment),nc=l(),bt=o("h2"),sa=o("a"),Pd=o("span"),b(Gn.$$.fragment),lw=l(),Sd=o("span"),dw=a("TFTapasForMaskedLM"),oc=l(),Le=o("div"),b(Rn.$$.fragment),pw=l(),Vn=o("p"),cw=a("Tapas Model with a "),Dd=o("code"),hw=a("language modeling"),uw=a(" head on top."),mw=l(),Kn=o("p"),fw=a("This model inherits from "),fr=o("a"),gw=a("TFPreTrainedModel"),_w=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Tw=l(),Yn=o("p"),bw=a("This model is also a "),Jn=o("a"),vw=a("tf.keras.Model"),ww=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),yw=l(),b(ta.$$.fragment),kw=l(),is=o("div"),b(Xn.$$.fragment),jw=l(),vt=o("p"),qw=a("The "),gr=o("a"),Ew=a("TFTapasForMaskedLM"),Fw=a(" forward method, overrides the "),Nd=o("code"),Aw=a("__call__"),zw=a(" special method."),$w=l(),b(aa.$$.fragment),xw=l(),Ld=o("p"),Cw=a("Examples:"),Mw=l(),b(Zn.$$.fragment),rc=l(),wt=o("h2"),na=o("a"),Qd=o("span"),b(eo.$$.fragment),Pw=l(),Od=o("span"),Sw=a("TFTapasForSequenceClassification"),ic=l(),Qe=o("div"),b(so.$$.fragment),Dw=l(),Id=o("p"),Nw=a(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Lw=l(),to=o("p"),Qw=a("This model inherits from "),_r=o("a"),Ow=a("TFPreTrainedModel"),Iw=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ww=l(),ao=o("p"),Uw=a("This model is also a "),no=o("a"),Hw=a("tf.keras.Model"),Bw=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Gw=l(),b(oa.$$.fragment),Rw=l(),ls=o("div"),b(oo.$$.fragment),Vw=l(),yt=o("p"),Kw=a("The "),Tr=o("a"),Yw=a("TFTapasForSequenceClassification"),Jw=a(" forward method, overrides the "),Wd=o("code"),Xw=a("__call__"),Zw=a(" special method."),ey=l(),b(ra.$$.fragment),sy=l(),Ud=o("p"),ty=a("Examples:"),ay=l(),b(ro.$$.fragment),lc=l(),kt=o("h2"),ia=o("a"),Hd=o("span"),b(io.$$.fragment),ny=l(),Bd=o("span"),oy=a("TFTapasForQuestionAnswering"),dc=l(),Oe=o("div"),b(lo.$$.fragment),ry=l(),jt=o("p"),iy=a(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Gd=o("code"),ly=a("logits"),dy=a(" and optional "),Rd=o("code"),py=a("logits_aggregation"),cy=a(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),hy=l(),po=o("p"),uy=a("This model inherits from "),br=o("a"),my=a("TFPreTrainedModel"),fy=a(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gy=l(),co=o("p"),_y=a("This model is also a "),ho=o("a"),Ty=a("tf.keras.Model"),by=a(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),vy=l(),b(la.$$.fragment),wy=l(),ds=o("div"),b(uo.$$.fragment),yy=l(),qt=o("p"),ky=a("The "),vr=o("a"),jy=a("TFTapasForQuestionAnswering"),qy=a(" forward method, overrides the "),Vd=o("code"),Ey=a("__call__"),Fy=a(" special method."),Ay=l(),b(da.$$.fragment),zy=l(),Kd=o("p"),$y=a("Examples:"),xy=l(),b(mo.$$.fragment),this.h()},l(t){const h=W2('[data-svelte="svelte-1phssyn"]',document.head);m=r(h,"META",{name:!0,content:!0}),h.forEach(s),F=d(t),f=r(t,"H1",{class:!0});var fo=i(f);g=r(fo,"A",{id:!0,class:!0,href:!0});var Yd=i(g);q=r(Yd,"SPAN",{});var Jd=i(q);v(T.$$.fragment,Jd),Jd.forEach(s),Yd.forEach(s),_=d(fo),A=r(fo,"SPAN",{});var Xd=i(A);_e=n(Xd,"TAPAS"),Xd.forEach(s),fo.forEach(s),K=d(t),z=r(t,"H2",{class:!0});var go=i(z);Y=r(go,"A",{id:!0,class:!0,href:!0});var Zd=i(Y);O=r(Zd,"SPAN",{});var ep=i(O);v(Z.$$.fragment,ep),ep.forEach(s),Zd.forEach(s),Te=d(go),I=r(go,"SPAN",{});var sp=i(I);be=n(sp,"Overview"),sp.forEach(s),go.forEach(s),ce=d(t),W=r(t,"P",{});var _o=i(W);N=n(_o,"The TAPAS model was proposed in "),ee=r(_o,"A",{href:!0,rel:!0});var tp=i(ee);se=n(tp,"TAPAS: Weakly Supervised Table Parsing via Pre-training"),tp.forEach(s),$=n(_o,`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),_o.forEach(s),x=d(t),oe=r(t,"P",{});var ap=i(oe);H=n(ap,"For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),ap.forEach(s),he=d(t),V=r(t,"UL",{});var Et=i(V);L=r(Et,"LI",{});var Cy=i(L);te=r(Cy,"A",{href:!0,rel:!0});var Gy=i(te);ve=n(Gy,"SQA"),Gy.forEach(s),C=n(Cy," (Sequential Question Answering by Microsoft)"),Cy.forEach(s),we=d(Et),Q=r(Et,"LI",{});var My=i(Q);ae=r(My,"A",{href:!0,rel:!0});var Ry=i(ae);ye=n(Ry,"WTQ"),Ry.forEach(s),B=n(My," (Wiki Table Questions by Stanford University)"),My.forEach(s),ke=d(Et),re=r(Et,"LI",{});var Py=i(re);P=r(Py,"A",{href:!0,rel:!0});var Vy=i(P);je=n(Vy,"WikiSQL"),Vy.forEach(s),G=n(Py," (by Salesforce)."),Py.forEach(s),Et.forEach(s),ue=d(t),u=r(t,"P",{});var Ky=i(u);E=n(Ky,"It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),Ky.forEach(s),J=d(t),Fe=r(t,"P",{});var Yy=i(Fe);Ge=n(Yy,"The abstract from the paper is the following:"),Yy.forEach(s),S=d(t),Ae=r(t,"P",{});var Jy=i(Ae);xe=r(Jy,"EM",{});var Xy=i(xe);Re=n(Xy,"Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),Xy.forEach(s),Jy.forEach(s),D=d(t),M=r(t,"P",{});var pa=i(M);Ve=n(pa,"In addition, the authors have further pre-trained TAPAS to recognize "),Ce=r(pa,"STRONG",{});var Zy=i(Ce);R=n(Zy,"table entailment"),Zy.forEach(s),Ke=n(pa,", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),qe=r(pa,"A",{href:!0,rel:!0});var ek=i(qe);Ee=n(ek,"TabFact"),ek.forEach(s),Ye=n(pa,", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),ga=r(pa,"A",{href:!0,rel:!0});var sk=i(ga);dh=n(sk,"Understanding tables with intermediate pre-training"),sk.forEach(s),ph=n(pa," by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),pa.forEach(s),np=d(t),At=r(t,"IMG",{src:!0,alt:!0,width:!0}),op=d(t),zt=r(t,"SMALL",{});var cc=i(zt);ch=n(cc,"TAPAS architecture. Taken from the "),To=r(cc,"A",{href:!0});var tk=i(To);hh=n(tk,"original blog post"),tk.forEach(s),uh=n(cc,"."),cc.forEach(s),rp=d(t),_s=r(t,"P",{});var ca=i(_s);mh=n(ca,"This model was contributed by "),_a=r(ca,"A",{href:!0,rel:!0});var ak=i(_a);fh=n(ak,"nielsr"),ak.forEach(s),gh=n(ca,". The Tensorflow version of this model was contributed by "),Ta=r(ca,"A",{href:!0,rel:!0});var nk=i(Ta);_h=n(nk,"kamalkraj"),nk.forEach(s),Th=n(ca,". The original code can be found "),ba=r(ca,"A",{href:!0,rel:!0});var ok=i(ba);bh=n(ok,"here"),ok.forEach(s),vh=n(ca,"."),ca.forEach(s),ip=d(t),bo=r(t,"P",{});var rk=i(bo);wh=n(rk,"Tips:"),rk.forEach(s),lp=d(t),Ts=r(t,"UL",{});var ha=i(Ts);Me=r(ha,"LI",{});var ps=i(Me);yh=n(ps,"TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Br=r(ps,"CODE",{});var ik=i(Br);kh=n(ik,"reset_position_index_per_cell"),ik.forEach(s),jh=n(ps," parameter of "),vo=r(ps,"A",{href:!0});var lk=i(vo);qh=n(lk,"TapasConfig"),lk.forEach(s),Eh=n(ps,", which is set to "),Gr=r(ps,"CODE",{});var dk=i(Gr);Fh=n(dk,"True"),dk.forEach(s),Ah=n(ps," by default. The default versions of the models available on the "),va=r(ps,"A",{href:!0,rel:!0});var pk=i(va);zh=n(pk,"hub"),pk.forEach(s),$h=n(ps," all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),Rr=r(ps,"CODE",{});var ck=i(Rr);xh=n(ck,'revision="no_reset"'),ck.forEach(s),Ch=n(ps," when calling the "),Vr=r(ps,"CODE",{});var hk=i(Vr);Mh=n(hk,"from_pretrained()"),hk.forEach(s),Ph=n(ps," method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),ps.forEach(s),Sh=d(ha),Je=r(ha,"LI",{});var vs=i(Je);Dh=n(vs,"TAPAS is based on BERT, so "),Kr=r(vs,"CODE",{});var uk=i(Kr);Nh=n(uk,"TAPAS-base"),uk.forEach(s),Lh=n(vs," for example corresponds to a "),Yr=r(vs,"CODE",{});var mk=i(Yr);Qh=n(mk,"BERT-base"),mk.forEach(s),Oh=n(vs," architecture. Of course, "),Jr=r(vs,"CODE",{});var fk=i(Jr);Ih=n(fk,"TAPAS-large"),fk.forEach(s),Wh=n(vs," will result in the best performance (the results reported in the paper are from "),Xr=r(vs,"CODE",{});var gk=i(Xr);Uh=n(gk,"TAPAS-large"),gk.forEach(s),Hh=n(vs,"). Results of the various sized models are shown on the "),wa=r(vs,"A",{href:!0,rel:!0});var _k=i(wa);Bh=n(_k,"original Github repository"),_k.forEach(s),Gh=n(vs,"."),vs.forEach(s),Rh=d(ha),Vs=r(ha,"LI",{});var wr=i(Vs);Vh=n(wr,"TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),Zr=r(wr,"CODE",{});var Tk=i(Zr);Kh=n(Tk,"prev_labels"),Tk.forEach(s),Yh=n(wr," token type ids can be overwritten by the predicted "),ei=r(wr,"CODE",{});var bk=i(ei);Jh=n(bk,"labels"),bk.forEach(s),Xh=n(wr," of the model to the previous question. See \u201CUsage\u201D section for more info."),wr.forEach(s),Zh=d(ha),si=r(ha,"LI",{});var vk=i(si);eu=n(vk,"TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),vk.forEach(s),ha.forEach(s),dp=d(t),Ks=r(t,"H2",{class:!0});var hc=i(Ks);$t=r(hc,"A",{id:!0,class:!0,href:!0});var wk=i($t);ti=r(wk,"SPAN",{});var yk=i(ti);v(ya.$$.fragment,yk),yk.forEach(s),wk.forEach(s),su=d(hc),ai=r(hc,"SPAN",{});var kk=i(ai);tu=n(kk,"Usage: fine-tuning"),kk.forEach(s),hc.forEach(s),pp=d(t),xt=r(t,"P",{});var uc=i(xt);au=n(uc,"Here we explain how you can fine-tune "),wo=r(uc,"A",{href:!0});var jk=i(wo);nu=n(jk,"TapasForQuestionAnswering"),jk.forEach(s),ou=n(uc," on your own dataset."),uc.forEach(s),cp=d(t),yo=r(t,"P",{});var qk=i(yo);ni=r(qk,"STRONG",{});var Ek=i(ni);ru=n(Ek,"STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),Ek.forEach(s),qk.forEach(s),hp=d(t),Ct=r(t,"P",{});var mc=i(Ct);iu=n(mc,"Basically, there are 3 different ways in which one can fine-tune "),ko=r(mc,"A",{href:!0});var Fk=i(ko);lu=n(Fk,"TapasForQuestionAnswering"),Fk.forEach(s),du=n(mc,", corresponding to the different datasets on which Tapas was fine-tuned:"),mc.forEach(s),up=d(t),$s=r(t,"OL",{});var yr=i($s);oi=r(yr,"LI",{});var Ak=i(oi);pu=n(Ak,"SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),Ak.forEach(s),cu=d(yr),ka=r(yr,"LI",{});var fc=i(ka);hu=n(fc,"WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),ri=r(fc,"STRONG",{});var zk=i(ri);uu=n(zk,"weak supervision"),zk.forEach(s),mu=n(fc,", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),fc.forEach(s),fu=d(yr),ja=r(yr,"LI",{});var gc=i(ja);gu=n(gc,"WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ii=r(gc,"STRONG",{});var $k=i(ii);_u=n($k,"strong supervision"),$k.forEach(s),Tu=n(gc,". Here, learning the appropriate aggregation operator is much easier."),gc.forEach(s),yr.forEach(s),mp=d(t),jo=r(t,"P",{});var xk=i(jo);bu=n(xk,"To summarize:"),xk.forEach(s),fp=d(t),Mt=r(t,"TABLE",{});var _c=i(Mt);li=r(_c,"THEAD",{});var Ck=i(li);Ys=r(Ck,"TR",{});var kr=i(Ys);di=r(kr,"TH",{});var Mk=i(di);pi=r(Mk,"STRONG",{});var Pk=i(pi);vu=n(Pk,"Task"),Pk.forEach(s),Mk.forEach(s),wu=d(kr),ci=r(kr,"TH",{});var Sk=i(ci);hi=r(Sk,"STRONG",{});var Dk=i(hi);yu=n(Dk,"Example dataset"),Dk.forEach(s),Sk.forEach(s),ku=d(kr),ui=r(kr,"TH",{});var Nk=i(ui);mi=r(Nk,"STRONG",{});var Lk=i(mi);ju=n(Lk,"Description"),Lk.forEach(s),Nk.forEach(s),kr.forEach(s),Ck.forEach(s),qu=d(_c),Js=r(_c,"TBODY",{});var jr=i(Js);Xs=r(jr,"TR",{});var qr=i(Xs);fi=r(qr,"TD",{});var Qk=i(fi);Eu=n(Qk,"Conversational"),Qk.forEach(s),Fu=d(qr),gi=r(qr,"TD",{});var Ok=i(gi);Au=n(Ok,"SQA"),Ok.forEach(s),zu=d(qr),_i=r(qr,"TD",{});var Ik=i(_i);$u=n(Ik,"Conversational, only cell selection questions"),Ik.forEach(s),qr.forEach(s),xu=d(jr),Zs=r(jr,"TR",{});var Er=i(Zs);Ti=r(Er,"TD",{});var Wk=i(Ti);Cu=n(Wk,"Weak supervision for aggregation"),Wk.forEach(s),Mu=d(Er),bi=r(Er,"TD",{});var Uk=i(bi);Pu=n(Uk,"WTQ"),Uk.forEach(s),Su=d(Er),vi=r(Er,"TD",{});var Hk=i(vi);Du=n(Hk,"Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Hk.forEach(s),Er.forEach(s),Nu=d(jr),et=r(jr,"TR",{});var Fr=i(et);wi=r(Fr,"TD",{});var Bk=i(wi);Lu=n(Bk,"Strong supervision for aggregation"),Bk.forEach(s),Qu=d(Fr),yi=r(Fr,"TD",{});var Gk=i(yi);Ou=n(Gk,"WikiSQL-supervised"),Gk.forEach(s),Iu=d(Fr),ki=r(Fr,"TD",{});var Rk=i(ki);Wu=n(Rk,"Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),Rk.forEach(s),Fr.forEach(s),jr.forEach(s),_c.forEach(s),gp=d(t),xs=r(t,"P",{});var Ar=i(xs);Uu=n(Ar,`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),qa=r(Ar,"A",{href:!0,rel:!0});var Vk=i(qa);Hu=n(Vk,"torch-scatter"),Vk.forEach(s),Bu=n(Ar," dependency for your environment in case you\u2019re using PyTorch, or the "),Ea=r(Ar,"A",{href:!0,rel:!0});var Kk=i(Ea);Gu=n(Kk,"tensorflow_probability"),Kk.forEach(s),Ru=n(Ar,`
dependency in case you\u2019re using Tensorflow:`),Ar.forEach(s),_p=d(t),v(Fa.$$.fragment,t),Tp=d(t),Cs=r(t,"P",{});var zr=i(Cs);Vu=n(zr,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),qo=r(zr,"A",{href:!0});var Yk=i(qo);Ku=n(Yk,"TapasConfig"),Yk.forEach(s),Yu=n(zr,", and then create a "),Eo=r(zr,"A",{href:!0});var Jk=i(Eo);Ju=n(Jk,"TapasForQuestionAnswering"),Jk.forEach(s),Xu=n(zr," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),zr.forEach(s),bp=d(t),v(Aa.$$.fragment,t),vp=d(t),Pt=r(t,"P",{});var Tc=i(Pt);Zu=n(Tc,"What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),za=r(Tc,"A",{href:!0,rel:!0});var Xk=i(za);em=n(Xk,"here"),Xk.forEach(s),sm=n(Tc," for more info."),Tc.forEach(s),wp=d(t),St=r(t,"P",{});var bc=i(St);tm=n(bc,"For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),$a=r(bc,"A",{href:!0,rel:!0});var Zk=i($a);am=n(Zk,"here"),Zk.forEach(s),nm=n(bc,"."),bc.forEach(s),yp=d(t),Fo=r(t,"P",{});var e1=i(Fo);ji=r(e1,"STRONG",{});var s1=i(ji);om=n(s1,"STEP 2: Prepare your data in the SQA format"),s1.forEach(s),e1.forEach(s),kp=d(t),Dt=r(t,"P",{});var vc=i(Dt);rm=n(vc,"Second, no matter what you picked above, you should prepare your dataset in the "),xa=r(vc,"A",{href:!0,rel:!0});var t1=i(xa);im=n(t1,"SQA"),t1.forEach(s),lm=n(vc," format. This format is a TSV/CSV file with the following columns:"),vc.forEach(s),jp=d(t),ie=r(t,"UL",{});var $e=i(ie);Ao=r($e,"LI",{});var Sy=i(Ao);qi=r(Sy,"CODE",{});var a1=i(qi);dm=n(a1,"id"),a1.forEach(s),pm=n(Sy,": optional, id of the table-question pair, for bookkeeping purposes."),Sy.forEach(s),cm=d($e),zo=r($e,"LI",{});var Dy=i(zo);Ei=r(Dy,"CODE",{});var n1=i(Ei);hm=n(n1,"annotator"),n1.forEach(s),um=n(Dy,": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),Dy.forEach(s),mm=d($e),$o=r($e,"LI",{});var Ny=i($o);Fi=r(Ny,"CODE",{});var o1=i(Fi);fm=n(o1,"position"),o1.forEach(s),gm=n(Ny,": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),Ny.forEach(s),_m=d($e),xo=r($e,"LI",{});var Ly=i(xo);Ai=r(Ly,"CODE",{});var r1=i(Ai);Tm=n(r1,"question"),r1.forEach(s),bm=n(Ly,": string"),Ly.forEach(s),vm=d($e),Co=r($e,"LI",{});var Qy=i(Co);zi=r(Qy,"CODE",{});var i1=i(zi);wm=n(i1,"table_file"),i1.forEach(s),ym=n(Qy,": string, name of a csv file containing the tabular data"),Qy.forEach(s),km=d($e),Mo=r($e,"LI",{});var Oy=i(Mo);$i=r(Oy,"CODE",{});var l1=i($i);jm=n(l1,"answer_coordinates"),l1.forEach(s),qm=n(Oy,": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),Oy.forEach(s),Em=d($e),Po=r($e,"LI",{});var Iy=i(Po);xi=r(Iy,"CODE",{});var d1=i(xi);Fm=n(d1,"answer_text"),d1.forEach(s),Am=n(Iy,": list of one or more strings (each string being a cell value that is part of the answer)"),Iy.forEach(s),zm=d($e),So=r($e,"LI",{});var Wy=i(So);Ci=r(Wy,"CODE",{});var p1=i(Ci);$m=n(p1,"aggregation_label"),p1.forEach(s),xm=n(Wy,": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Wy.forEach(s),Cm=d($e),Do=r($e,"LI",{});var Uy=i(Do);Mi=r(Uy,"CODE",{});var c1=i(Mi);Mm=n(c1,"float_answer"),c1.forEach(s),Pm=n(Uy,": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),Uy.forEach(s),$e.forEach(s),qp=d(t),We=r(t,"P",{});var ws=i(We);Sm=n(ws,"The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),Ca=r(ws,"A",{href:!0,rel:!0});var h1=i(Ca);Dm=n(h1,"here"),h1.forEach(s),Nm=n(ws,". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),Ma=r(ws,"A",{href:!0,rel:!0});var u1=i(Ma);Lm=n(u1,"here"),u1.forEach(s),Qm=n(ws,". Interestingly, these conversion scripts are not perfect (the "),Pi=r(ws,"CODE",{});var m1=i(Pi);Om=n(m1,"answer_coordinates"),m1.forEach(s),Im=n(ws," and "),Si=r(ws,"CODE",{});var f1=i(Si);Wm=n(f1,"float_answer"),f1.forEach(s),Um=n(ws," fields are populated based on the "),Di=r(ws,"CODE",{});var g1=i(Di);Hm=n(g1,"answer_text"),g1.forEach(s),Bm=n(ws,"), meaning that WTQ and WikiSQL results could actually be improved."),ws.forEach(s),Ep=d(t),No=r(t,"P",{});var _1=i(No);Ni=r(_1,"STRONG",{});var T1=i(Ni);Gm=n(T1,"STEP 3: Convert your data into PyTorch/TensorFlow tensors using TapasTokenizer"),T1.forEach(s),_1.forEach(s),Fp=d(t),ze=r(t,"P",{});var cs=i(ze);Rm=n(cs,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),Lo=r(cs,"A",{href:!0});var b1=i(Lo);Vm=n(b1,"TapasTokenizer"),b1.forEach(s),Km=n(cs," to convert table-question pairs into "),Li=r(cs,"CODE",{});var v1=i(Li);Ym=n(v1,"input_ids"),v1.forEach(s),Jm=n(cs,", "),Qi=r(cs,"CODE",{});var w1=i(Qi);Xm=n(w1,"attention_mask"),w1.forEach(s),Zm=n(cs,", "),Oi=r(cs,"CODE",{});var y1=i(Oi);ef=n(y1,"token_type_ids"),y1.forEach(s),sf=n(cs," and so on. Again, based on which of the three cases you picked above, "),Qo=r(cs,"A",{href:!0});var k1=i(Qo);tf=n(k1,"TapasForQuestionAnswering"),k1.forEach(s),af=n(cs,"/"),Oo=r(cs,"A",{href:!0});var j1=i(Oo);nf=n(j1,"TFTapasForQuestionAnswering"),j1.forEach(s),of=n(cs,` requires different
inputs to be fine-tuned:`),cs.forEach(s),Ap=d(t),Nt=r(t,"TABLE",{});var wc=i(Nt);Ii=r(wc,"THEAD",{});var q1=i(Ii);Pa=r(q1,"TR",{});var yc=i(Pa);Wi=r(yc,"TH",{});var E1=i(Wi);Ui=r(E1,"STRONG",{});var F1=i(Ui);rf=n(F1,"Task"),F1.forEach(s),E1.forEach(s),lf=d(yc),Hi=r(yc,"TH",{});var A1=i(Hi);Bi=r(A1,"STRONG",{});var z1=i(Bi);df=n(z1,"Required inputs"),z1.forEach(s),A1.forEach(s),yc.forEach(s),q1.forEach(s),pf=d(wc),st=r(wc,"TBODY",{});var $r=i(st);Sa=r($r,"TR",{});var kc=i(Sa);Gi=r(kc,"TD",{});var $1=i(Gi);cf=n($1,"Conversational"),$1.forEach(s),hf=d(kc),zs=r(kc,"TD",{});var ua=i(zs);Ri=r(ua,"CODE",{});var x1=i(Ri);uf=n(x1,"input_ids"),x1.forEach(s),mf=n(ua,", "),Vi=r(ua,"CODE",{});var C1=i(Vi);ff=n(C1,"attention_mask"),C1.forEach(s),gf=n(ua,", "),Ki=r(ua,"CODE",{});var M1=i(Ki);_f=n(M1,"token_type_ids"),M1.forEach(s),Tf=n(ua,", "),Yi=r(ua,"CODE",{});var P1=i(Yi);bf=n(P1,"labels"),P1.forEach(s),ua.forEach(s),kc.forEach(s),vf=d($r),Da=r($r,"TR",{});var jc=i(Da);Ji=r(jc,"TD",{});var S1=i(Ji);wf=n(S1,"Weak supervision for aggregation"),S1.forEach(s),yf=d(jc),Pe=r(jc,"TD",{});var hs=i(Pe);Xi=r(hs,"CODE",{});var D1=i(Xi);kf=n(D1,"input_ids"),D1.forEach(s),jf=n(hs,", "),Zi=r(hs,"CODE",{});var N1=i(Zi);qf=n(N1,"attention_mask"),N1.forEach(s),Ef=n(hs,", "),el=r(hs,"CODE",{});var L1=i(el);Ff=n(L1,"token_type_ids"),L1.forEach(s),Af=n(hs,", "),sl=r(hs,"CODE",{});var Q1=i(sl);zf=n(Q1,"labels"),Q1.forEach(s),$f=n(hs,", "),tl=r(hs,"CODE",{});var O1=i(tl);xf=n(O1,"numeric_values"),O1.forEach(s),Cf=n(hs,", "),al=r(hs,"CODE",{});var I1=i(al);Mf=n(I1,"numeric_values_scale"),I1.forEach(s),Pf=n(hs,", "),nl=r(hs,"CODE",{});var W1=i(nl);Sf=n(W1,"float_answer"),W1.forEach(s),hs.forEach(s),jc.forEach(s),Df=d($r),Na=r($r,"TR",{});var qc=i(Na);ol=r(qc,"TD",{});var U1=i(ol);Nf=n(U1,"Strong supervision for aggregation"),U1.forEach(s),Lf=d(qc),ms=r(qc,"TD",{});var Ss=i(ms);rl=r(Ss,"CODE",{});var H1=i(rl);Qf=n(H1,"input ids"),H1.forEach(s),Of=n(Ss,", "),il=r(Ss,"CODE",{});var B1=i(il);If=n(B1,"attention mask"),B1.forEach(s),Wf=n(Ss,", "),ll=r(Ss,"CODE",{});var G1=i(ll);Uf=n(G1,"token type ids"),G1.forEach(s),Hf=n(Ss,", "),dl=r(Ss,"CODE",{});var R1=i(dl);Bf=n(R1,"labels"),R1.forEach(s),Gf=n(Ss,", "),pl=r(Ss,"CODE",{});var V1=i(pl);Rf=n(V1,"aggregation_labels"),V1.forEach(s),Ss.forEach(s),qc.forEach(s),$r.forEach(s),wc.forEach(s),zp=d(t),le=r(t,"P",{});var Ie=i(le);Io=r(Ie,"A",{href:!0});var K1=i(Io);Vf=n(K1,"TapasTokenizer"),K1.forEach(s),Kf=n(Ie," creates the "),cl=r(Ie,"CODE",{});var Y1=i(cl);Yf=n(Y1,"labels"),Y1.forEach(s),Jf=n(Ie,", "),hl=r(Ie,"CODE",{});var J1=i(hl);Xf=n(J1,"numeric_values"),J1.forEach(s),Zf=n(Ie," and "),ul=r(Ie,"CODE",{});var X1=i(ul);eg=n(X1,"numeric_values_scale"),X1.forEach(s),sg=n(Ie," based on the "),ml=r(Ie,"CODE",{});var Z1=i(ml);tg=n(Z1,"answer_coordinates"),Z1.forEach(s),ag=n(Ie," and "),fl=r(Ie,"CODE",{});var ej=i(fl);ng=n(ej,"answer_text"),ej.forEach(s),og=n(Ie," columns of the TSV file. The "),gl=r(Ie,"CODE",{});var sj=i(gl);rg=n(sj,"float_answer"),sj.forEach(s),ig=n(Ie," and "),_l=r(Ie,"CODE",{});var tj=i(_l);lg=n(tj,"aggregation_labels"),tj.forEach(s),dg=n(Ie," are already in the TSV file of step 2. Here\u2019s an example:"),Ie.forEach(s),$p=d(t),v(La.$$.fragment,t),xp=d(t),bs=r(t,"P",{});var ma=i(bs);pg=n(ma,"Note that "),Wo=r(ma,"A",{href:!0});var aj=i(Wo);cg=n(aj,"TapasTokenizer"),aj.forEach(s),hg=n(ma," expects the data of the table to be "),Tl=r(ma,"STRONG",{});var nj=i(Tl);ug=n(nj,"text-only"),nj.forEach(s),mg=n(ma,". You can use "),bl=r(ma,"CODE",{});var oj=i(bl);fg=n(oj,".astype(str)"),oj.forEach(s),gg=n(ma,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),ma.forEach(s),Cp=d(t),v(Qa.$$.fragment,t),Mp=d(t),X=r(t,"P",{});var fe=i(X);_g=n(fe,"Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),vl=r(fe,"STRONG",{});var rj=i(vl);Tg=n(rj,"not conversational"),rj.forEach(s),bg=n(fe,". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),wl=r(fe,"CODE",{});var ij=i(wl);vg=n(ij,"queries"),ij.forEach(s),wg=n(fe,", "),yl=r(fe,"CODE",{});var lj=i(yl);yg=n(lj,"answer_coordinates"),lj.forEach(s),kg=n(fe," and "),kl=r(fe,"CODE",{});var dj=i(kl);jg=n(dj,"answer_text"),dj.forEach(s),qg=n(fe," per table (in the order of their "),jl=r(fe,"CODE",{});var pj=i(jl);Eg=n(pj,"position"),pj.forEach(s),Fg=n(fe,`
index) and batch encode each table with its questions. This will make sure that the `),ql=r(fe,"CODE",{});var cj=i(ql);Ag=n(cj,"prev_labels"),cj.forEach(s),zg=n(fe," token types (see docs of "),Uo=r(fe,"A",{href:!0});var hj=i(Uo);$g=n(hj,"TapasTokenizer"),hj.forEach(s),xg=n(fe,") are set correctly. See "),Oa=r(fe,"A",{href:!0,rel:!0});var uj=i(Oa);Cg=n(uj,"this notebook"),uj.forEach(s),Mg=n(fe," for more info. See "),Ia=r(fe,"A",{href:!0,rel:!0});var mj=i(Ia);Pg=n(mj,"this notebook"),mj.forEach(s),Sg=n(fe," for more info regarding using the TensorFlow model."),fe.forEach(s),Pp=d(t),Ho=r(t,"P",{});var fj=i(Ho);El=r(fj,"STRONG",{});var gj=i(El);Dg=n(gj,"STEP 4: Train (fine-tune) TapasForQuestionAnswering/TFTapasForQuestionAnswering"),gj.forEach(s),fj.forEach(s),Sp=d(t),Ms=r(t,"P",{});var xr=i(Ms);Ng=n(xr,"You can then fine-tune "),Bo=r(xr,"A",{href:!0});var _j=i(Bo);Lg=n(_j,"TapasForQuestionAnswering"),_j.forEach(s),Qg=n(xr," or "),Go=r(xr,"A",{href:!0});var Tj=i(Go);Og=n(Tj,"TFTapasForQuestionAnswering"),Tj.forEach(s),Ig=n(xr," as follows (shown here for the weak supervision for aggregation case):"),xr.forEach(s),Dp=d(t),v(Wa.$$.fragment,t),Np=d(t),tt=r(t,"H2",{class:!0});var Ec=i(tt);Lt=r(Ec,"A",{id:!0,class:!0,href:!0});var bj=i(Lt);Fl=r(bj,"SPAN",{});var vj=i(Fl);v(Ua.$$.fragment,vj),vj.forEach(s),bj.forEach(s),Wg=d(Ec),Al=r(Ec,"SPAN",{});var wj=i(Al);Ug=n(wj,"Usage: inference"),wj.forEach(s),Ec.forEach(s),Lp=d(t),me=r(t,"P",{});var He=i(me);Hg=n(He,"Here we explain how you can use "),Ro=r(He,"A",{href:!0});var yj=i(Ro);Bg=n(yj,"TapasForQuestionAnswering"),yj.forEach(s),Gg=n(He," or "),Vo=r(He,"A",{href:!0});var kj=i(Vo);Rg=n(kj,"TFTapasForQuestionAnswering"),kj.forEach(s),Vg=n(He," for inference (i.e. making predictions on new data). For inference, only "),zl=r(He,"CODE",{});var jj=i(zl);Kg=n(jj,"input_ids"),jj.forEach(s),Yg=n(He,", "),$l=r(He,"CODE",{});var qj=i($l);Jg=n(qj,"attention_mask"),qj.forEach(s),Xg=n(He," and "),xl=r(He,"CODE",{});var Ej=i(xl);Zg=n(Ej,"token_type_ids"),Ej.forEach(s),e_=n(He," (which you can obtain using "),Ko=r(He,"A",{href:!0});var Fj=i(Ko);s_=n(Fj,"TapasTokenizer"),Fj.forEach(s),t_=n(He,") have to be provided to the model to obtain the logits. Next, you can use the handy "),Cl=r(He,"CODE",{});var Aj=i(Cl);a_=n(Aj,"convert_logits_to_predictions"),Aj.forEach(s),n_=n(He," method to convert these into predicted coordinates and optional aggregation indices."),He.forEach(s),Qp=d(t),Qt=r(t,"P",{});var Fc=i(Qt);o_=n(Fc,"However, note that inference is "),Ml=r(Fc,"STRONG",{});var zj=i(Ml);r_=n(zj,"different"),zj.forEach(s),i_=n(Fc," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),Fc.forEach(s),Op=d(t),v(Ha.$$.fragment,t),Ip=d(t),Ue=r(t,"P",{});var ys=i(Ue);l_=n(ys,"In case of a conversational set-up, then each table-question pair must be provided "),Pl=r(ys,"STRONG",{});var $j=i(Pl);d_=n($j,"sequentially"),$j.forEach(s),p_=n(ys," to the model, such that the "),Sl=r(ys,"CODE",{});var xj=i(Sl);c_=n(xj,"prev_labels"),xj.forEach(s),h_=n(ys," token types can be overwritten by the predicted "),Dl=r(ys,"CODE",{});var Cj=i(Dl);u_=n(Cj,"labels"),Cj.forEach(s),m_=n(ys," of the previous table-question pair. Again, more info can be found in "),Ba=r(ys,"A",{href:!0,rel:!0});var Mj=i(Ba);f_=n(Mj,"this notebook"),Mj.forEach(s),g_=n(ys," (for PyTorch) and "),Ga=r(ys,"A",{href:!0,rel:!0});var Pj=i(Ga);__=n(Pj,"this notebook"),Pj.forEach(s),T_=n(ys," (for TensorFlow)."),ys.forEach(s),Wp=d(t),at=r(t,"H2",{class:!0});var Ac=i(at);Ot=r(Ac,"A",{id:!0,class:!0,href:!0});var Sj=i(Ot);Nl=r(Sj,"SPAN",{});var Dj=i(Nl);v(Ra.$$.fragment,Dj),Dj.forEach(s),Sj.forEach(s),b_=d(Ac),Ll=r(Ac,"SPAN",{});var Nj=i(Ll);v_=n(Nj,"TAPAS specific outputs"),Nj.forEach(s),Ac.forEach(s),Up=d(t),nt=r(t,"DIV",{class:!0});var zc=i(nt);v(Va.$$.fragment,zc),w_=d(zc),Ka=r(zc,"P",{});var $c=i(Ka);y_=n($c,"Output type of "),Yo=r($c,"A",{href:!0});var Lj=i(Yo);k_=n(Lj,"TapasForQuestionAnswering"),Lj.forEach(s),j_=n($c,"."),$c.forEach(s),zc.forEach(s),Hp=d(t),ot=r(t,"H2",{class:!0});var xc=i(ot);It=r(xc,"A",{id:!0,class:!0,href:!0});var Qj=i(It);Ql=r(Qj,"SPAN",{});var Oj=i(Ql);v(Ya.$$.fragment,Oj),Oj.forEach(s),Qj.forEach(s),q_=d(xc),Ol=r(xc,"SPAN",{});var Ij=i(Ol);E_=n(Ij,"TapasConfig"),Ij.forEach(s),xc.forEach(s),Bp=d(t),Xe=r(t,"DIV",{class:!0});var Ds=i(Xe);v(Ja.$$.fragment,Ds),F_=d(Ds),fs=r(Ds,"P",{});var Ns=i(fs);A_=n(Ns,"This is the configuration class to store the configuration of a "),Jo=r(Ns,"A",{href:!0});var Wj=i(Jo);z_=n(Wj,"TapasModel"),Wj.forEach(s),$_=n(Ns,`. It is used to instantiate a TAPAS
model according to the specified arguments, defining the model architecture. Instantiating a configuration with the
defaults will yield a similar configuration to that of the TAPAS `),Il=r(Ns,"EM",{});var Uj=i(Il);x_=n(Uj,"tapas-base-finetuned-sqa"),Uj.forEach(s),C_=n(Ns,` architecture.
Configuration objects inherit from `),Wl=r(Ns,"CODE",{});var Hj=i(Wl);M_=n(Hj,"PreTrainedConfig"),Hj.forEach(s),P_=n(Ns,` and can be used to control the model outputs. Read the
documentation from `),Xo=r(Ns,"A",{href:!0});var Bj=i(Xo);S_=n(Bj,"PretrainedConfig"),Bj.forEach(s),D_=n(Ns," for more information."),Ns.forEach(s),N_=d(Ds),Xa=r(Ds,"P",{});var Cc=i(Xa);L_=n(Cc,`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),Za=r(Cc,"A",{href:!0,rel:!0});var Gj=i(Za);Q_=n(Gj,"https://github.com/google-research/tapas/tree/master"),Gj.forEach(s),O_=n(Cc,"."),Cc.forEach(s),I_=d(Ds),Ul=r(Ds,"P",{});var Rj=i(Ul);W_=n(Rj,"Example:"),Rj.forEach(s),U_=d(Ds),v(en.$$.fragment,Ds),Ds.forEach(s),Gp=d(t),rt=r(t,"H2",{class:!0});var Mc=i(rt);Wt=r(Mc,"A",{id:!0,class:!0,href:!0});var Vj=i(Wt);Hl=r(Vj,"SPAN",{});var Kj=i(Hl);v(sn.$$.fragment,Kj),Kj.forEach(s),Vj.forEach(s),H_=d(Mc),Bl=r(Mc,"SPAN",{});var Yj=i(Bl);B_=n(Yj,"TapasTokenizer"),Yj.forEach(s),Mc.forEach(s),Rp=d(t),de=r(t,"DIV",{class:!0});var Be=i(de);v(tn.$$.fragment,Be),G_=d(Be),Gl=r(Be,"P",{});var Jj=i(Gl);R_=n(Jj,`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),Jj.forEach(s),V_=d(Be),ne=r(Be,"P",{});var ge=i(ne);K_=n(ge,"This tokenizer inherits from "),Zo=r(ge,"A",{href:!0});var Xj=i(Zo);Y_=n(Xj,"PreTrainedTokenizer"),Xj.forEach(s),J_=n(ge,` which contains most of the main methods. Users should refer to
this superclass for more information regarding those methods. `),er=r(ge,"A",{href:!0});var Zj=i(er);X_=n(Zj,"TapasTokenizer"),Zj.forEach(s),Z_=n(ge,` creates several token type ids to
encode tabular structure. To be more precise, it adds 7 token type ids, in the following order: `),Rl=r(ge,"CODE",{});var eq=i(Rl);eT=n(eq,"segment_ids"),eq.forEach(s),sT=n(ge,`,
`),Vl=r(ge,"CODE",{});var sq=i(Vl);tT=n(sq,"column_ids"),sq.forEach(s),aT=n(ge,", "),Kl=r(ge,"CODE",{});var tq=i(Kl);nT=n(tq,"row_ids"),tq.forEach(s),oT=n(ge,", "),Yl=r(ge,"CODE",{});var aq=i(Yl);rT=n(aq,"prev_labels"),aq.forEach(s),iT=n(ge,", "),Jl=r(ge,"CODE",{});var nq=i(Jl);lT=n(nq,"column_ranks"),nq.forEach(s),dT=n(ge,", "),Xl=r(ge,"CODE",{});var oq=i(Xl);pT=n(oq,"inv_column_ranks"),oq.forEach(s),cT=n(ge," and "),Zl=r(ge,"CODE",{});var rq=i(Zl);hT=n(rq,"numeric_relations"),rq.forEach(s),uT=n(ge,":"),ge.forEach(s),mT=d(Be),Se=r(Be,"UL",{});var us=i(Se);ed=r(us,"LI",{});var iq=i(ed);fT=n(iq,`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),iq.forEach(s),gT=d(us),sd=r(us,"LI",{});var lq=i(sd);_T=n(lq,`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),lq.forEach(s),TT=d(us),td=r(us,"LI",{});var dq=i(td);bT=n(dq,`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),dq.forEach(s),vT=d(us),ad=r(us,"LI",{});var pq=i(ad);wT=n(pq,`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),pq.forEach(s),yT=d(us),nd=r(us,"LI",{});var cq=i(nd);kT=n(cq,`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),cq.forEach(s),jT=d(us),od=r(us,"LI",{});var hq=i(od);qT=n(hq,`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),hq.forEach(s),ET=d(us),rd=r(us,"LI",{});var uq=i(rd);FT=n(uq,`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),uq.forEach(s),us.forEach(s),AT=d(Be),sr=r(Be,"P",{});var Hy=i(sr);tr=r(Hy,"A",{href:!0});var mq=i(tr);zT=n(mq,"TapasTokenizer"),mq.forEach(s),$T=n(Hy,` runs end-to-end tokenization on a table and associated sentences: punctuation splitting and
wordpiece.`),Hy.forEach(s),xT=d(Be),Ut=r(Be,"DIV",{class:!0});var Pc=i(Ut);v(an.$$.fragment,Pc),CT=d(Pc),id=r(Pc,"P",{});var fq=i(id);MT=n(fq,"Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),fq.forEach(s),Pc.forEach(s),PT=d(Be),Ps=r(Be,"DIV",{class:!0});var Cr=i(Ps);v(nn.$$.fragment,Cr),ST=d(Cr),on=r(Cr,"P",{});var Sc=i(on);DT=n(Sc,"Converts logits of "),ar=r(Sc,"A",{href:!0});var gq=i(ar);NT=n(gq,"TapasForQuestionAnswering"),gq.forEach(s),LT=n(Sc,` to actual predicted answer coordinates and optional
aggregation indices.`),Sc.forEach(s),QT=d(Cr),rn=r(Cr,"P",{});var Dc=i(rn);OT=n(Dc,`The original implementation, on which this function is based, can be found
`),ln=r(Dc,"A",{href:!0,rel:!0});var _q=i(ln);IT=n(_q,"here"),_q.forEach(s),WT=n(Dc,"."),Dc.forEach(s),Cr.forEach(s),UT=d(Be),ld=r(Be,"DIV",{class:!0}),i(ld).forEach(s),Be.forEach(s),Vp=d(t),it=r(t,"H2",{class:!0});var Nc=i(it);Ht=r(Nc,"A",{id:!0,class:!0,href:!0});var Tq=i(Ht);dd=r(Tq,"SPAN",{});var bq=i(dd);v(dn.$$.fragment,bq),bq.forEach(s),Tq.forEach(s),HT=d(Nc),pd=r(Nc,"SPAN",{});var vq=i(pd);BT=n(vq,"TapasModel"),vq.forEach(s),Nc.forEach(s),Kp=d(t),De=r(t,"DIV",{class:!0});var ks=i(De);v(pn.$$.fragment,ks),GT=d(ks),cn=r(ks,"P",{});var Lc=i(cn);RT=n(Lc,`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),nr=r(Lc,"A",{href:!0});var wq=i(nr);VT=n(wq,"PreTrainedModel"),wq.forEach(s),KT=n(Lc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lc.forEach(s),YT=d(ks),hn=r(ks,"P",{});var Qc=i(hn);JT=n(Qc,"This model is also a PyTorch "),un=r(Qc,"A",{href:!0,rel:!0});var yq=i(un);XT=n(yq,"torch.nn.Module"),yq.forEach(s),ZT=n(Qc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Qc.forEach(s),eb=d(ks),mn=r(ks,"P",{});var Oc=i(mn);sb=n(Oc,"This class is a small change compared to "),or=r(Oc,"A",{href:!0});var kq=i(or);tb=n(kq,"BertModel"),kq.forEach(s),ab=n(Oc,", taking into account the additional token type ids."),Oc.forEach(s),nb=d(ks),fn=r(ks,"P",{});var Ic=i(fn);ob=n(Ic,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),gn=r(Ic,"A",{href:!0,rel:!0});var jq=i(gn);rb=n(jq,`Attention is
all you need`),jq.forEach(s),ib=n(Ic,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Ic.forEach(s),lb=d(ks),ts=r(ks,"DIV",{class:!0});var Ls=i(ts);v(_n.$$.fragment,Ls),db=d(Ls),lt=r(Ls,"P",{});var Mr=i(lt);pb=n(Mr,"The "),rr=r(Mr,"A",{href:!0});var qq=i(rr);cb=n(qq,"TapasModel"),qq.forEach(s),hb=n(Mr," forward method, overrides the "),cd=r(Mr,"CODE",{});var Eq=i(cd);ub=n(Eq,"__call__"),Eq.forEach(s),mb=n(Mr," special method."),Mr.forEach(s),fb=d(Ls),v(Bt.$$.fragment,Ls),gb=d(Ls),hd=r(Ls,"P",{});var Fq=i(hd);_b=n(Fq,"Examples:"),Fq.forEach(s),Tb=d(Ls),v(Tn.$$.fragment,Ls),Ls.forEach(s),ks.forEach(s),Yp=d(t),dt=r(t,"H2",{class:!0});var Wc=i(dt);Gt=r(Wc,"A",{id:!0,class:!0,href:!0});var Aq=i(Gt);ud=r(Aq,"SPAN",{});var zq=i(ud);v(bn.$$.fragment,zq),zq.forEach(s),Aq.forEach(s),bb=d(Wc),md=r(Wc,"SPAN",{});var $q=i(md);vb=n($q,"TapasForMaskedLM"),$q.forEach(s),Wc.forEach(s),Jp=d(t),gs=r(t,"DIV",{class:!0});var fa=i(gs);v(vn.$$.fragment,fa),wb=d(fa),pt=r(fa,"P",{});var Pr=i(pt);yb=n(Pr,"Tapas Model with a "),fd=r(Pr,"CODE",{});var xq=i(fd);kb=n(xq,"language modeling"),xq.forEach(s),jb=n(Pr,` head on top.
This model inherits from `),ir=r(Pr,"A",{href:!0});var Cq=i(ir);qb=n(Cq,"PreTrainedModel"),Cq.forEach(s),Eb=n(Pr,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Pr.forEach(s),Fb=d(fa),wn=r(fa,"P",{});var Uc=i(wn);Ab=n(Uc,"This model is also a PyTorch "),yn=r(Uc,"A",{href:!0,rel:!0});var Mq=i(yn);zb=n(Mq,"torch.nn.Module"),Mq.forEach(s),$b=n(Uc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Uc.forEach(s),xb=d(fa),as=r(fa,"DIV",{class:!0});var Qs=i(as);v(kn.$$.fragment,Qs),Cb=d(Qs),ct=r(Qs,"P",{});var Sr=i(ct);Mb=n(Sr,"The "),lr=r(Sr,"A",{href:!0});var Pq=i(lr);Pb=n(Pq,"TapasForMaskedLM"),Pq.forEach(s),Sb=n(Sr," forward method, overrides the "),gd=r(Sr,"CODE",{});var Sq=i(gd);Db=n(Sq,"__call__"),Sq.forEach(s),Nb=n(Sr," special method."),Sr.forEach(s),Lb=d(Qs),v(Rt.$$.fragment,Qs),Qb=d(Qs),_d=r(Qs,"P",{});var Dq=i(_d);Ob=n(Dq,"Examples:"),Dq.forEach(s),Ib=d(Qs),v(jn.$$.fragment,Qs),Qs.forEach(s),fa.forEach(s),Xp=d(t),ht=r(t,"H2",{class:!0});var Hc=i(ht);Vt=r(Hc,"A",{id:!0,class:!0,href:!0});var Nq=i(Vt);Td=r(Nq,"SPAN",{});var Lq=i(Td);v(qn.$$.fragment,Lq),Lq.forEach(s),Nq.forEach(s),Wb=d(Hc),bd=r(Hc,"SPAN",{});var Qq=i(bd);Ub=n(Qq,"TapasForSequenceClassification"),Qq.forEach(s),Hc.forEach(s),Zp=d(t),Ze=r(t,"DIV",{class:!0});var Os=i(Ze);v(En.$$.fragment,Os),Hb=d(Os),vd=r(Os,"P",{});var Oq=i(vd);Bb=n(Oq,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Oq.forEach(s),Gb=d(Os),Fn=r(Os,"P",{});var Bc=i(Fn);Rb=n(Bc,"This model inherits from "),dr=r(Bc,"A",{href:!0});var Iq=i(dr);Vb=n(Iq,"PreTrainedModel"),Iq.forEach(s),Kb=n(Bc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bc.forEach(s),Yb=d(Os),An=r(Os,"P",{});var Gc=i(An);Jb=n(Gc,"This model is also a PyTorch "),zn=r(Gc,"A",{href:!0,rel:!0});var Wq=i(zn);Xb=n(Wq,"torch.nn.Module"),Wq.forEach(s),Zb=n(Gc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Gc.forEach(s),ev=d(Os),ns=r(Os,"DIV",{class:!0});var Is=i(ns);v($n.$$.fragment,Is),sv=d(Is),ut=r(Is,"P",{});var Dr=i(ut);tv=n(Dr,"The "),pr=r(Dr,"A",{href:!0});var Uq=i(pr);av=n(Uq,"TapasForSequenceClassification"),Uq.forEach(s),nv=n(Dr," forward method, overrides the "),wd=r(Dr,"CODE",{});var Hq=i(wd);ov=n(Hq,"__call__"),Hq.forEach(s),rv=n(Dr," special method."),Dr.forEach(s),iv=d(Is),v(Kt.$$.fragment,Is),lv=d(Is),yd=r(Is,"P",{});var Bq=i(yd);dv=n(Bq,"Examples:"),Bq.forEach(s),pv=d(Is),v(xn.$$.fragment,Is),Is.forEach(s),Os.forEach(s),ec=d(t),mt=r(t,"H2",{class:!0});var Rc=i(mt);Yt=r(Rc,"A",{id:!0,class:!0,href:!0});var Gq=i(Yt);kd=r(Gq,"SPAN",{});var Rq=i(kd);v(Cn.$$.fragment,Rq),Rq.forEach(s),Gq.forEach(s),cv=d(Rc),jd=r(Rc,"SPAN",{});var Vq=i(jd);hv=n(Vq,"TapasForQuestionAnswering"),Vq.forEach(s),Rc.forEach(s),sc=d(t),es=r(t,"DIV",{class:!0});var Ws=i(es);v(Mn.$$.fragment,Ws),uv=d(Ws),ft=r(Ws,"P",{});var Nr=i(ft);mv=n(Nr,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),qd=r(Nr,"CODE",{});var Kq=i(qd);fv=n(Kq,"logits"),Kq.forEach(s),gv=n(Nr," and optional "),Ed=r(Nr,"CODE",{});var Yq=i(Ed);_v=n(Yq,"logits_aggregation"),Yq.forEach(s),Tv=n(Nr,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Nr.forEach(s),bv=d(Ws),Pn=r(Ws,"P",{});var Vc=i(Pn);vv=n(Vc,"This model inherits from "),cr=r(Vc,"A",{href:!0});var Jq=i(cr);wv=n(Jq,"PreTrainedModel"),Jq.forEach(s),yv=n(Vc,`. Check the superclass documentation for the generic methods the
library implements for all its models (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Vc.forEach(s),kv=d(Ws),Sn=r(Ws,"P",{});var Kc=i(Sn);jv=n(Kc,"This model is also a PyTorch "),Dn=r(Kc,"A",{href:!0,rel:!0});var Xq=i(Dn);qv=n(Xq,"torch.nn.Module"),Xq.forEach(s),Ev=n(Kc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Kc.forEach(s),Fv=d(Ws),os=r(Ws,"DIV",{class:!0});var Us=i(os);v(Nn.$$.fragment,Us),Av=d(Us),gt=r(Us,"P",{});var Lr=i(gt);zv=n(Lr,"The "),hr=r(Lr,"A",{href:!0});var Zq=i(hr);$v=n(Zq,"TapasForQuestionAnswering"),Zq.forEach(s),xv=n(Lr," forward method, overrides the "),Fd=r(Lr,"CODE",{});var e2=i(Fd);Cv=n(e2,"__call__"),e2.forEach(s),Mv=n(Lr," special method."),Lr.forEach(s),Pv=d(Us),v(Jt.$$.fragment,Us),Sv=d(Us),Ad=r(Us,"P",{});var s2=i(Ad);Dv=n(s2,"Examples:"),s2.forEach(s),Nv=d(Us),v(Ln.$$.fragment,Us),Us.forEach(s),Ws.forEach(s),tc=d(t),_t=r(t,"H2",{class:!0});var Yc=i(_t);Xt=r(Yc,"A",{id:!0,class:!0,href:!0});var t2=i(Xt);zd=r(t2,"SPAN",{});var a2=i(zd);v(Qn.$$.fragment,a2),a2.forEach(s),t2.forEach(s),Lv=d(Yc),$d=r(Yc,"SPAN",{});var n2=i($d);Qv=n(n2,"TFTapasModel"),n2.forEach(s),Yc.forEach(s),ac=d(t),Ne=r(t,"DIV",{class:!0});var js=i(Ne);v(On.$$.fragment,js),Ov=d(js),xd=r(js,"P",{});var o2=i(xd);Iv=n(o2,"The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),o2.forEach(s),Wv=d(js),In=r(js,"P",{});var Jc=i(In);Uv=n(Jc,"This model inherits from "),ur=r(Jc,"A",{href:!0});var r2=i(ur);Hv=n(r2,"TFPreTrainedModel"),r2.forEach(s),Bv=n(Jc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Jc.forEach(s),Gv=d(js),Wn=r(js,"P",{});var Xc=i(Wn);Rv=n(Xc,"This model is also a "),Un=r(Xc,"A",{href:!0,rel:!0});var i2=i(Un);Vv=n(i2,"tf.keras.Model"),i2.forEach(s),Kv=n(Xc,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Xc.forEach(s),Yv=d(js),v(Zt.$$.fragment,js),Jv=d(js),rs=r(js,"DIV",{class:!0});var Hs=i(rs);v(Hn.$$.fragment,Hs),Xv=d(Hs),Tt=r(Hs,"P",{});var Qr=i(Tt);Zv=n(Qr,"The "),mr=r(Qr,"A",{href:!0});var l2=i(mr);ew=n(l2,"TFTapasModel"),l2.forEach(s),sw=n(Qr," forward method, overrides the "),Cd=r(Qr,"CODE",{});var d2=i(Cd);tw=n(d2,"__call__"),d2.forEach(s),aw=n(Qr," special method."),Qr.forEach(s),nw=d(Hs),v(ea.$$.fragment,Hs),ow=d(Hs),Md=r(Hs,"P",{});var p2=i(Md);rw=n(p2,"Examples:"),p2.forEach(s),iw=d(Hs),v(Bn.$$.fragment,Hs),Hs.forEach(s),js.forEach(s),nc=d(t),bt=r(t,"H2",{class:!0});var Zc=i(bt);sa=r(Zc,"A",{id:!0,class:!0,href:!0});var c2=i(sa);Pd=r(c2,"SPAN",{});var h2=i(Pd);v(Gn.$$.fragment,h2),h2.forEach(s),c2.forEach(s),lw=d(Zc),Sd=r(Zc,"SPAN",{});var u2=i(Sd);dw=n(u2,"TFTapasForMaskedLM"),u2.forEach(s),Zc.forEach(s),oc=d(t),Le=r(t,"DIV",{class:!0});var qs=i(Le);v(Rn.$$.fragment,qs),pw=d(qs),Vn=r(qs,"P",{});var eh=i(Vn);cw=n(eh,"Tapas Model with a "),Dd=r(eh,"CODE",{});var m2=i(Dd);hw=n(m2,"language modeling"),m2.forEach(s),uw=n(eh," head on top."),eh.forEach(s),mw=d(qs),Kn=r(qs,"P",{});var sh=i(Kn);fw=n(sh,"This model inherits from "),fr=r(sh,"A",{href:!0});var f2=i(fr);gw=n(f2,"TFPreTrainedModel"),f2.forEach(s),_w=n(sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh.forEach(s),Tw=d(qs),Yn=r(qs,"P",{});var th=i(Yn);bw=n(th,"This model is also a "),Jn=r(th,"A",{href:!0,rel:!0});var g2=i(Jn);vw=n(g2,"tf.keras.Model"),g2.forEach(s),ww=n(th,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),th.forEach(s),yw=d(qs),v(ta.$$.fragment,qs),kw=d(qs),is=r(qs,"DIV",{class:!0});var Bs=i(is);v(Xn.$$.fragment,Bs),jw=d(Bs),vt=r(Bs,"P",{});var Or=i(vt);qw=n(Or,"The "),gr=r(Or,"A",{href:!0});var _2=i(gr);Ew=n(_2,"TFTapasForMaskedLM"),_2.forEach(s),Fw=n(Or," forward method, overrides the "),Nd=r(Or,"CODE",{});var T2=i(Nd);Aw=n(T2,"__call__"),T2.forEach(s),zw=n(Or," special method."),Or.forEach(s),$w=d(Bs),v(aa.$$.fragment,Bs),xw=d(Bs),Ld=r(Bs,"P",{});var b2=i(Ld);Cw=n(b2,"Examples:"),b2.forEach(s),Mw=d(Bs),v(Zn.$$.fragment,Bs),Bs.forEach(s),qs.forEach(s),rc=d(t),wt=r(t,"H2",{class:!0});var ah=i(wt);na=r(ah,"A",{id:!0,class:!0,href:!0});var v2=i(na);Qd=r(v2,"SPAN",{});var w2=i(Qd);v(eo.$$.fragment,w2),w2.forEach(s),v2.forEach(s),Pw=d(ah),Od=r(ah,"SPAN",{});var y2=i(Od);Sw=n(y2,"TFTapasForSequenceClassification"),y2.forEach(s),ah.forEach(s),ic=d(t),Qe=r(t,"DIV",{class:!0});var Es=i(Qe);v(so.$$.fragment,Es),Dw=d(Es),Id=r(Es,"P",{});var k2=i(Id);Nw=n(k2,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),k2.forEach(s),Lw=d(Es),to=r(Es,"P",{});var nh=i(to);Qw=n(nh,"This model inherits from "),_r=r(nh,"A",{href:!0});var j2=i(_r);Ow=n(j2,"TFPreTrainedModel"),j2.forEach(s),Iw=n(nh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nh.forEach(s),Ww=d(Es),ao=r(Es,"P",{});var oh=i(ao);Uw=n(oh,"This model is also a "),no=r(oh,"A",{href:!0,rel:!0});var q2=i(no);Hw=n(q2,"tf.keras.Model"),q2.forEach(s),Bw=n(oh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),oh.forEach(s),Gw=d(Es),v(oa.$$.fragment,Es),Rw=d(Es),ls=r(Es,"DIV",{class:!0});var Gs=i(ls);v(oo.$$.fragment,Gs),Vw=d(Gs),yt=r(Gs,"P",{});var Ir=i(yt);Kw=n(Ir,"The "),Tr=r(Ir,"A",{href:!0});var E2=i(Tr);Yw=n(E2,"TFTapasForSequenceClassification"),E2.forEach(s),Jw=n(Ir," forward method, overrides the "),Wd=r(Ir,"CODE",{});var F2=i(Wd);Xw=n(F2,"__call__"),F2.forEach(s),Zw=n(Ir," special method."),Ir.forEach(s),ey=d(Gs),v(ra.$$.fragment,Gs),sy=d(Gs),Ud=r(Gs,"P",{});var A2=i(Ud);ty=n(A2,"Examples:"),A2.forEach(s),ay=d(Gs),v(ro.$$.fragment,Gs),Gs.forEach(s),Es.forEach(s),lc=d(t),kt=r(t,"H2",{class:!0});var rh=i(kt);ia=r(rh,"A",{id:!0,class:!0,href:!0});var z2=i(ia);Hd=r(z2,"SPAN",{});var $2=i(Hd);v(io.$$.fragment,$2),$2.forEach(s),z2.forEach(s),ny=d(rh),Bd=r(rh,"SPAN",{});var x2=i(Bd);oy=n(x2,"TFTapasForQuestionAnswering"),x2.forEach(s),rh.forEach(s),dc=d(t),Oe=r(t,"DIV",{class:!0});var Fs=i(Oe);v(lo.$$.fragment,Fs),ry=d(Fs),jt=r(Fs,"P",{});var Wr=i(jt);iy=n(Wr,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Gd=r(Wr,"CODE",{});var C2=i(Gd);ly=n(C2,"logits"),C2.forEach(s),dy=n(Wr," and optional "),Rd=r(Wr,"CODE",{});var M2=i(Rd);py=n(M2,"logits_aggregation"),M2.forEach(s),cy=n(Wr,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Wr.forEach(s),hy=d(Fs),po=r(Fs,"P",{});var ih=i(po);uy=n(ih,"This model inherits from "),br=r(ih,"A",{href:!0});var P2=i(br);my=n(P2,"TFPreTrainedModel"),P2.forEach(s),fy=n(ih,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ih.forEach(s),gy=d(Fs),co=r(Fs,"P",{});var lh=i(co);_y=n(lh,"This model is also a "),ho=r(lh,"A",{href:!0,rel:!0});var S2=i(ho);Ty=n(S2,"tf.keras.Model"),S2.forEach(s),by=n(lh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),lh.forEach(s),vy=d(Fs),v(la.$$.fragment,Fs),wy=d(Fs),ds=r(Fs,"DIV",{class:!0});var Rs=i(ds);v(uo.$$.fragment,Rs),yy=d(Rs),qt=r(Rs,"P",{});var Ur=i(qt);ky=n(Ur,"The "),vr=r(Ur,"A",{href:!0});var D2=i(vr);jy=n(D2,"TFTapasForQuestionAnswering"),D2.forEach(s),qy=n(Ur," forward method, overrides the "),Vd=r(Ur,"CODE",{});var N2=i(Vd);Ey=n(N2,"__call__"),N2.forEach(s),Fy=n(Ur," special method."),Ur.forEach(s),Ay=d(Rs),v(da.$$.fragment,Rs),zy=d(Rs),Kd=r(Rs,"P",{});var L2=i(Kd);$y=n(L2,"Examples:"),L2.forEach(s),xy=d(Rs),v(mo.$$.fragment,Rs),Rs.forEach(s),Fs.forEach(s),this.h()},h(){p(m,"name","hf:doc:metadata"),p(m,"content",JSON.stringify(a0)),p(g,"id","tapas"),p(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(g,"href","#tapas"),p(f,"class","relative group"),p(Y,"id","overview"),p(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Y,"href","#overview"),p(z,"class","relative group"),p(ee,"href","https://www.aclweb.org/anthology/2020.acl-main.398"),p(ee,"rel","nofollow"),p(te,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),p(te,"rel","nofollow"),p(ae,"href","https://github.com/ppasupat/WikiTableQuestions"),p(ae,"rel","nofollow"),p(P,"href","https://github.com/salesforce/WikiSQL"),p(P,"rel","nofollow"),p(qe,"href","https://github.com/wenhuchen/Table-Fact-Checking"),p(qe,"rel","nofollow"),p(ga,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.27/"),p(ga,"rel","nofollow"),U2(At.src,By="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/tapas_architecture.png")||p(At,"src",By),p(At,"alt","drawing"),p(At,"width","600"),p(To,"href","https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html"),p(_a,"href","https://huggingface.co/nielsr"),p(_a,"rel","nofollow"),p(Ta,"href","https://huggingface.co/kamalkraj"),p(Ta,"rel","nofollow"),p(ba,"href","https://github.com/google-research/tapas"),p(ba,"rel","nofollow"),p(vo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig"),p(va,"href","https://huggingface.co/models?search=tapas"),p(va,"rel","nofollow"),p(wa,"href","https://github.com/google-research/tapas%3E"),p(wa,"rel","nofollow"),p($t,"id","usage-finetuning"),p($t,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p($t,"href","#usage-finetuning"),p(Ks,"class","relative group"),p(wo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(ko,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(qa,"href","https://github.com/rusty1s/pytorch_scatter"),p(qa,"rel","nofollow"),p(Ea,"href","https://github.com/tensorflow/probability"),p(Ea,"rel","nofollow"),p(qo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig"),p(Eo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(za,"href","https://github.com/google-research/tapas/issues/91#issuecomment-735719340"),p(za,"rel","nofollow"),p($a,"href","https://huggingface.co/models?search=tapas"),p($a,"rel","nofollow"),p(xa,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),p(xa,"rel","nofollow"),p(Ca,"href","https://github.com/google-research/tapas/issues/50#issuecomment-705465960"),p(Ca,"rel","nofollow"),p(Ma,"href","https://github.com/NielsRogge/tapas_utils"),p(Ma,"rel","nofollow"),p(Lo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),p(Qo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(Oo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),p(Io,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),p(Wo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),p(Uo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),p(Oa,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),p(Oa,"rel","nofollow"),p(Ia,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),p(Ia,"rel","nofollow"),p(Bo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(Go,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),p(Lt,"id","usage-inference"),p(Lt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Lt,"href","#usage-inference"),p(tt,"class","relative group"),p(Ro,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(Vo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),p(Ko,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),p(Ba,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),p(Ba,"rel","nofollow"),p(Ga,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),p(Ga,"rel","nofollow"),p(Ot,"id","transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),p(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ot,"href","#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),p(at,"class","relative group"),p(Yo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(nt,"class","docstring"),p(It,"id","transformers.TapasConfig"),p(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(It,"href","#transformers.TapasConfig"),p(ot,"class","relative group"),p(Jo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasModel"),p(Xo,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),p(Za,"href","https://github.com/google-research/tapas/tree/master"),p(Za,"rel","nofollow"),p(Xe,"class","docstring"),p(Wt,"id","transformers.TapasTokenizer"),p(Wt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Wt,"href","#transformers.TapasTokenizer"),p(rt,"class","relative group"),p(Zo,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(er,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),p(tr,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),p(Ut,"class","docstring"),p(ar,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(ln,"href","https://github.com/google-research/tapas/blob/4908213eb4df7aa988573350278b44c4dbe3f71b/tapas/experiments/prediction_utils.py#L288"),p(ln,"rel","nofollow"),p(Ps,"class","docstring"),p(ld,"class","docstring"),p(de,"class","docstring"),p(Ht,"id","transformers.TapasModel"),p(Ht,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ht,"href","#transformers.TapasModel"),p(it,"class","relative group"),p(nr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),p(un,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(un,"rel","nofollow"),p(or,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertModel"),p(gn,"href","https://arxiv.org/abs/1706.03762"),p(gn,"rel","nofollow"),p(rr,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasModel"),p(ts,"class","docstring"),p(De,"class","docstring"),p(Gt,"id","transformers.TapasForMaskedLM"),p(Gt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Gt,"href","#transformers.TapasForMaskedLM"),p(dt,"class","relative group"),p(ir,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),p(yn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(yn,"rel","nofollow"),p(lr,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForMaskedLM"),p(as,"class","docstring"),p(gs,"class","docstring"),p(Vt,"id","transformers.TapasForSequenceClassification"),p(Vt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Vt,"href","#transformers.TapasForSequenceClassification"),p(ht,"class","relative group"),p(dr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),p(zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(zn,"rel","nofollow"),p(pr,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForSequenceClassification"),p(ns,"class","docstring"),p(Ze,"class","docstring"),p(Yt,"id","transformers.TapasForQuestionAnswering"),p(Yt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Yt,"href","#transformers.TapasForQuestionAnswering"),p(mt,"class","relative group"),p(cr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),p(Dn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Dn,"rel","nofollow"),p(hr,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(os,"class","docstring"),p(es,"class","docstring"),p(Xt,"id","transformers.TFTapasModel"),p(Xt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Xt,"href","#transformers.TFTapasModel"),p(_t,"class","relative group"),p(ur,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),p(Un,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Un,"rel","nofollow"),p(mr,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TFTapasModel"),p(rs,"class","docstring"),p(Ne,"class","docstring"),p(sa,"id","transformers.TFTapasForMaskedLM"),p(sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(sa,"href","#transformers.TFTapasForMaskedLM"),p(bt,"class","relative group"),p(fr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),p(Jn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Jn,"rel","nofollow"),p(gr,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TFTapasForMaskedLM"),p(is,"class","docstring"),p(Le,"class","docstring"),p(na,"id","transformers.TFTapasForSequenceClassification"),p(na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(na,"href","#transformers.TFTapasForSequenceClassification"),p(wt,"class","relative group"),p(_r,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),p(no,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(no,"rel","nofollow"),p(Tr,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TFTapasForSequenceClassification"),p(ls,"class","docstring"),p(Qe,"class","docstring"),p(ia,"id","transformers.TFTapasForQuestionAnswering"),p(ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ia,"href","#transformers.TFTapasForQuestionAnswering"),p(kt,"class","relative group"),p(br,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),p(ho,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(ho,"rel","nofollow"),p(vr,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),p(ds,"class","docstring"),p(Oe,"class","docstring")},m(t,h){e(document.head,m),c(t,F,h),c(t,f,h),e(f,g),e(g,q),w(T,q,null),e(f,_),e(f,A),e(A,_e),c(t,K,h),c(t,z,h),e(z,Y),e(Y,O),w(Z,O,null),e(z,Te),e(z,I),e(I,be),c(t,ce,h),c(t,W,h),e(W,N),e(W,ee),e(ee,se),e(W,$),c(t,x,h),c(t,oe,h),e(oe,H),c(t,he,h),c(t,V,h),e(V,L),e(L,te),e(te,ve),e(L,C),e(V,we),e(V,Q),e(Q,ae),e(ae,ye),e(Q,B),e(V,ke),e(V,re),e(re,P),e(P,je),e(re,G),c(t,ue,h),c(t,u,h),e(u,E),c(t,J,h),c(t,Fe,h),e(Fe,Ge),c(t,S,h),c(t,Ae,h),e(Ae,xe),e(xe,Re),c(t,D,h),c(t,M,h),e(M,Ve),e(M,Ce),e(Ce,R),e(M,Ke),e(M,qe),e(qe,Ee),e(M,Ye),e(M,ga),e(ga,dh),e(M,ph),c(t,np,h),c(t,At,h),c(t,op,h),c(t,zt,h),e(zt,ch),e(zt,To),e(To,hh),e(zt,uh),c(t,rp,h),c(t,_s,h),e(_s,mh),e(_s,_a),e(_a,fh),e(_s,gh),e(_s,Ta),e(Ta,_h),e(_s,Th),e(_s,ba),e(ba,bh),e(_s,vh),c(t,ip,h),c(t,bo,h),e(bo,wh),c(t,lp,h),c(t,Ts,h),e(Ts,Me),e(Me,yh),e(Me,Br),e(Br,kh),e(Me,jh),e(Me,vo),e(vo,qh),e(Me,Eh),e(Me,Gr),e(Gr,Fh),e(Me,Ah),e(Me,va),e(va,zh),e(Me,$h),e(Me,Rr),e(Rr,xh),e(Me,Ch),e(Me,Vr),e(Vr,Mh),e(Me,Ph),e(Ts,Sh),e(Ts,Je),e(Je,Dh),e(Je,Kr),e(Kr,Nh),e(Je,Lh),e(Je,Yr),e(Yr,Qh),e(Je,Oh),e(Je,Jr),e(Jr,Ih),e(Je,Wh),e(Je,Xr),e(Xr,Uh),e(Je,Hh),e(Je,wa),e(wa,Bh),e(Je,Gh),e(Ts,Rh),e(Ts,Vs),e(Vs,Vh),e(Vs,Zr),e(Zr,Kh),e(Vs,Yh),e(Vs,ei),e(ei,Jh),e(Vs,Xh),e(Ts,Zh),e(Ts,si),e(si,eu),c(t,dp,h),c(t,Ks,h),e(Ks,$t),e($t,ti),w(ya,ti,null),e(Ks,su),e(Ks,ai),e(ai,tu),c(t,pp,h),c(t,xt,h),e(xt,au),e(xt,wo),e(wo,nu),e(xt,ou),c(t,cp,h),c(t,yo,h),e(yo,ni),e(ni,ru),c(t,hp,h),c(t,Ct,h),e(Ct,iu),e(Ct,ko),e(ko,lu),e(Ct,du),c(t,up,h),c(t,$s,h),e($s,oi),e(oi,pu),e($s,cu),e($s,ka),e(ka,hu),e(ka,ri),e(ri,uu),e(ka,mu),e($s,fu),e($s,ja),e(ja,gu),e(ja,ii),e(ii,_u),e(ja,Tu),c(t,mp,h),c(t,jo,h),e(jo,bu),c(t,fp,h),c(t,Mt,h),e(Mt,li),e(li,Ys),e(Ys,di),e(di,pi),e(pi,vu),e(Ys,wu),e(Ys,ci),e(ci,hi),e(hi,yu),e(Ys,ku),e(Ys,ui),e(ui,mi),e(mi,ju),e(Mt,qu),e(Mt,Js),e(Js,Xs),e(Xs,fi),e(fi,Eu),e(Xs,Fu),e(Xs,gi),e(gi,Au),e(Xs,zu),e(Xs,_i),e(_i,$u),e(Js,xu),e(Js,Zs),e(Zs,Ti),e(Ti,Cu),e(Zs,Mu),e(Zs,bi),e(bi,Pu),e(Zs,Su),e(Zs,vi),e(vi,Du),e(Js,Nu),e(Js,et),e(et,wi),e(wi,Lu),e(et,Qu),e(et,yi),e(yi,Ou),e(et,Iu),e(et,ki),e(ki,Wu),c(t,gp,h),c(t,xs,h),e(xs,Uu),e(xs,qa),e(qa,Hu),e(xs,Bu),e(xs,Ea),e(Ea,Gu),e(xs,Ru),c(t,_p,h),w(Fa,t,h),c(t,Tp,h),c(t,Cs,h),e(Cs,Vu),e(Cs,qo),e(qo,Ku),e(Cs,Yu),e(Cs,Eo),e(Eo,Ju),e(Cs,Xu),c(t,bp,h),w(Aa,t,h),c(t,vp,h),c(t,Pt,h),e(Pt,Zu),e(Pt,za),e(za,em),e(Pt,sm),c(t,wp,h),c(t,St,h),e(St,tm),e(St,$a),e($a,am),e(St,nm),c(t,yp,h),c(t,Fo,h),e(Fo,ji),e(ji,om),c(t,kp,h),c(t,Dt,h),e(Dt,rm),e(Dt,xa),e(xa,im),e(Dt,lm),c(t,jp,h),c(t,ie,h),e(ie,Ao),e(Ao,qi),e(qi,dm),e(Ao,pm),e(ie,cm),e(ie,zo),e(zo,Ei),e(Ei,hm),e(zo,um),e(ie,mm),e(ie,$o),e($o,Fi),e(Fi,fm),e($o,gm),e(ie,_m),e(ie,xo),e(xo,Ai),e(Ai,Tm),e(xo,bm),e(ie,vm),e(ie,Co),e(Co,zi),e(zi,wm),e(Co,ym),e(ie,km),e(ie,Mo),e(Mo,$i),e($i,jm),e(Mo,qm),e(ie,Em),e(ie,Po),e(Po,xi),e(xi,Fm),e(Po,Am),e(ie,zm),e(ie,So),e(So,Ci),e(Ci,$m),e(So,xm),e(ie,Cm),e(ie,Do),e(Do,Mi),e(Mi,Mm),e(Do,Pm),c(t,qp,h),c(t,We,h),e(We,Sm),e(We,Ca),e(Ca,Dm),e(We,Nm),e(We,Ma),e(Ma,Lm),e(We,Qm),e(We,Pi),e(Pi,Om),e(We,Im),e(We,Si),e(Si,Wm),e(We,Um),e(We,Di),e(Di,Hm),e(We,Bm),c(t,Ep,h),c(t,No,h),e(No,Ni),e(Ni,Gm),c(t,Fp,h),c(t,ze,h),e(ze,Rm),e(ze,Lo),e(Lo,Vm),e(ze,Km),e(ze,Li),e(Li,Ym),e(ze,Jm),e(ze,Qi),e(Qi,Xm),e(ze,Zm),e(ze,Oi),e(Oi,ef),e(ze,sf),e(ze,Qo),e(Qo,tf),e(ze,af),e(ze,Oo),e(Oo,nf),e(ze,of),c(t,Ap,h),c(t,Nt,h),e(Nt,Ii),e(Ii,Pa),e(Pa,Wi),e(Wi,Ui),e(Ui,rf),e(Pa,lf),e(Pa,Hi),e(Hi,Bi),e(Bi,df),e(Nt,pf),e(Nt,st),e(st,Sa),e(Sa,Gi),e(Gi,cf),e(Sa,hf),e(Sa,zs),e(zs,Ri),e(Ri,uf),e(zs,mf),e(zs,Vi),e(Vi,ff),e(zs,gf),e(zs,Ki),e(Ki,_f),e(zs,Tf),e(zs,Yi),e(Yi,bf),e(st,vf),e(st,Da),e(Da,Ji),e(Ji,wf),e(Da,yf),e(Da,Pe),e(Pe,Xi),e(Xi,kf),e(Pe,jf),e(Pe,Zi),e(Zi,qf),e(Pe,Ef),e(Pe,el),e(el,Ff),e(Pe,Af),e(Pe,sl),e(sl,zf),e(Pe,$f),e(Pe,tl),e(tl,xf),e(Pe,Cf),e(Pe,al),e(al,Mf),e(Pe,Pf),e(Pe,nl),e(nl,Sf),e(st,Df),e(st,Na),e(Na,ol),e(ol,Nf),e(Na,Lf),e(Na,ms),e(ms,rl),e(rl,Qf),e(ms,Of),e(ms,il),e(il,If),e(ms,Wf),e(ms,ll),e(ll,Uf),e(ms,Hf),e(ms,dl),e(dl,Bf),e(ms,Gf),e(ms,pl),e(pl,Rf),c(t,zp,h),c(t,le,h),e(le,Io),e(Io,Vf),e(le,Kf),e(le,cl),e(cl,Yf),e(le,Jf),e(le,hl),e(hl,Xf),e(le,Zf),e(le,ul),e(ul,eg),e(le,sg),e(le,ml),e(ml,tg),e(le,ag),e(le,fl),e(fl,ng),e(le,og),e(le,gl),e(gl,rg),e(le,ig),e(le,_l),e(_l,lg),e(le,dg),c(t,$p,h),w(La,t,h),c(t,xp,h),c(t,bs,h),e(bs,pg),e(bs,Wo),e(Wo,cg),e(bs,hg),e(bs,Tl),e(Tl,ug),e(bs,mg),e(bs,bl),e(bl,fg),e(bs,gg),c(t,Cp,h),w(Qa,t,h),c(t,Mp,h),c(t,X,h),e(X,_g),e(X,vl),e(vl,Tg),e(X,bg),e(X,wl),e(wl,vg),e(X,wg),e(X,yl),e(yl,yg),e(X,kg),e(X,kl),e(kl,jg),e(X,qg),e(X,jl),e(jl,Eg),e(X,Fg),e(X,ql),e(ql,Ag),e(X,zg),e(X,Uo),e(Uo,$g),e(X,xg),e(X,Oa),e(Oa,Cg),e(X,Mg),e(X,Ia),e(Ia,Pg),e(X,Sg),c(t,Pp,h),c(t,Ho,h),e(Ho,El),e(El,Dg),c(t,Sp,h),c(t,Ms,h),e(Ms,Ng),e(Ms,Bo),e(Bo,Lg),e(Ms,Qg),e(Ms,Go),e(Go,Og),e(Ms,Ig),c(t,Dp,h),w(Wa,t,h),c(t,Np,h),c(t,tt,h),e(tt,Lt),e(Lt,Fl),w(Ua,Fl,null),e(tt,Wg),e(tt,Al),e(Al,Ug),c(t,Lp,h),c(t,me,h),e(me,Hg),e(me,Ro),e(Ro,Bg),e(me,Gg),e(me,Vo),e(Vo,Rg),e(me,Vg),e(me,zl),e(zl,Kg),e(me,Yg),e(me,$l),e($l,Jg),e(me,Xg),e(me,xl),e(xl,Zg),e(me,e_),e(me,Ko),e(Ko,s_),e(me,t_),e(me,Cl),e(Cl,a_),e(me,n_),c(t,Qp,h),c(t,Qt,h),e(Qt,o_),e(Qt,Ml),e(Ml,r_),e(Qt,i_),c(t,Op,h),w(Ha,t,h),c(t,Ip,h),c(t,Ue,h),e(Ue,l_),e(Ue,Pl),e(Pl,d_),e(Ue,p_),e(Ue,Sl),e(Sl,c_),e(Ue,h_),e(Ue,Dl),e(Dl,u_),e(Ue,m_),e(Ue,Ba),e(Ba,f_),e(Ue,g_),e(Ue,Ga),e(Ga,__),e(Ue,T_),c(t,Wp,h),c(t,at,h),e(at,Ot),e(Ot,Nl),w(Ra,Nl,null),e(at,b_),e(at,Ll),e(Ll,v_),c(t,Up,h),c(t,nt,h),w(Va,nt,null),e(nt,w_),e(nt,Ka),e(Ka,y_),e(Ka,Yo),e(Yo,k_),e(Ka,j_),c(t,Hp,h),c(t,ot,h),e(ot,It),e(It,Ql),w(Ya,Ql,null),e(ot,q_),e(ot,Ol),e(Ol,E_),c(t,Bp,h),c(t,Xe,h),w(Ja,Xe,null),e(Xe,F_),e(Xe,fs),e(fs,A_),e(fs,Jo),e(Jo,z_),e(fs,$_),e(fs,Il),e(Il,x_),e(fs,C_),e(fs,Wl),e(Wl,M_),e(fs,P_),e(fs,Xo),e(Xo,S_),e(fs,D_),e(Xe,N_),e(Xe,Xa),e(Xa,L_),e(Xa,Za),e(Za,Q_),e(Xa,O_),e(Xe,I_),e(Xe,Ul),e(Ul,W_),e(Xe,U_),w(en,Xe,null),c(t,Gp,h),c(t,rt,h),e(rt,Wt),e(Wt,Hl),w(sn,Hl,null),e(rt,H_),e(rt,Bl),e(Bl,B_),c(t,Rp,h),c(t,de,h),w(tn,de,null),e(de,G_),e(de,Gl),e(Gl,R_),e(de,V_),e(de,ne),e(ne,K_),e(ne,Zo),e(Zo,Y_),e(ne,J_),e(ne,er),e(er,X_),e(ne,Z_),e(ne,Rl),e(Rl,eT),e(ne,sT),e(ne,Vl),e(Vl,tT),e(ne,aT),e(ne,Kl),e(Kl,nT),e(ne,oT),e(ne,Yl),e(Yl,rT),e(ne,iT),e(ne,Jl),e(Jl,lT),e(ne,dT),e(ne,Xl),e(Xl,pT),e(ne,cT),e(ne,Zl),e(Zl,hT),e(ne,uT),e(de,mT),e(de,Se),e(Se,ed),e(ed,fT),e(Se,gT),e(Se,sd),e(sd,_T),e(Se,TT),e(Se,td),e(td,bT),e(Se,vT),e(Se,ad),e(ad,wT),e(Se,yT),e(Se,nd),e(nd,kT),e(Se,jT),e(Se,od),e(od,qT),e(Se,ET),e(Se,rd),e(rd,FT),e(de,AT),e(de,sr),e(sr,tr),e(tr,zT),e(sr,$T),e(de,xT),e(de,Ut),w(an,Ut,null),e(Ut,CT),e(Ut,id),e(id,MT),e(de,PT),e(de,Ps),w(nn,Ps,null),e(Ps,ST),e(Ps,on),e(on,DT),e(on,ar),e(ar,NT),e(on,LT),e(Ps,QT),e(Ps,rn),e(rn,OT),e(rn,ln),e(ln,IT),e(rn,WT),e(de,UT),e(de,ld),c(t,Vp,h),c(t,it,h),e(it,Ht),e(Ht,dd),w(dn,dd,null),e(it,HT),e(it,pd),e(pd,BT),c(t,Kp,h),c(t,De,h),w(pn,De,null),e(De,GT),e(De,cn),e(cn,RT),e(cn,nr),e(nr,VT),e(cn,KT),e(De,YT),e(De,hn),e(hn,JT),e(hn,un),e(un,XT),e(hn,ZT),e(De,eb),e(De,mn),e(mn,sb),e(mn,or),e(or,tb),e(mn,ab),e(De,nb),e(De,fn),e(fn,ob),e(fn,gn),e(gn,rb),e(fn,ib),e(De,lb),e(De,ts),w(_n,ts,null),e(ts,db),e(ts,lt),e(lt,pb),e(lt,rr),e(rr,cb),e(lt,hb),e(lt,cd),e(cd,ub),e(lt,mb),e(ts,fb),w(Bt,ts,null),e(ts,gb),e(ts,hd),e(hd,_b),e(ts,Tb),w(Tn,ts,null),c(t,Yp,h),c(t,dt,h),e(dt,Gt),e(Gt,ud),w(bn,ud,null),e(dt,bb),e(dt,md),e(md,vb),c(t,Jp,h),c(t,gs,h),w(vn,gs,null),e(gs,wb),e(gs,pt),e(pt,yb),e(pt,fd),e(fd,kb),e(pt,jb),e(pt,ir),e(ir,qb),e(pt,Eb),e(gs,Fb),e(gs,wn),e(wn,Ab),e(wn,yn),e(yn,zb),e(wn,$b),e(gs,xb),e(gs,as),w(kn,as,null),e(as,Cb),e(as,ct),e(ct,Mb),e(ct,lr),e(lr,Pb),e(ct,Sb),e(ct,gd),e(gd,Db),e(ct,Nb),e(as,Lb),w(Rt,as,null),e(as,Qb),e(as,_d),e(_d,Ob),e(as,Ib),w(jn,as,null),c(t,Xp,h),c(t,ht,h),e(ht,Vt),e(Vt,Td),w(qn,Td,null),e(ht,Wb),e(ht,bd),e(bd,Ub),c(t,Zp,h),c(t,Ze,h),w(En,Ze,null),e(Ze,Hb),e(Ze,vd),e(vd,Bb),e(Ze,Gb),e(Ze,Fn),e(Fn,Rb),e(Fn,dr),e(dr,Vb),e(Fn,Kb),e(Ze,Yb),e(Ze,An),e(An,Jb),e(An,zn),e(zn,Xb),e(An,Zb),e(Ze,ev),e(Ze,ns),w($n,ns,null),e(ns,sv),e(ns,ut),e(ut,tv),e(ut,pr),e(pr,av),e(ut,nv),e(ut,wd),e(wd,ov),e(ut,rv),e(ns,iv),w(Kt,ns,null),e(ns,lv),e(ns,yd),e(yd,dv),e(ns,pv),w(xn,ns,null),c(t,ec,h),c(t,mt,h),e(mt,Yt),e(Yt,kd),w(Cn,kd,null),e(mt,cv),e(mt,jd),e(jd,hv),c(t,sc,h),c(t,es,h),w(Mn,es,null),e(es,uv),e(es,ft),e(ft,mv),e(ft,qd),e(qd,fv),e(ft,gv),e(ft,Ed),e(Ed,_v),e(ft,Tv),e(es,bv),e(es,Pn),e(Pn,vv),e(Pn,cr),e(cr,wv),e(Pn,yv),e(es,kv),e(es,Sn),e(Sn,jv),e(Sn,Dn),e(Dn,qv),e(Sn,Ev),e(es,Fv),e(es,os),w(Nn,os,null),e(os,Av),e(os,gt),e(gt,zv),e(gt,hr),e(hr,$v),e(gt,xv),e(gt,Fd),e(Fd,Cv),e(gt,Mv),e(os,Pv),w(Jt,os,null),e(os,Sv),e(os,Ad),e(Ad,Dv),e(os,Nv),w(Ln,os,null),c(t,tc,h),c(t,_t,h),e(_t,Xt),e(Xt,zd),w(Qn,zd,null),e(_t,Lv),e(_t,$d),e($d,Qv),c(t,ac,h),c(t,Ne,h),w(On,Ne,null),e(Ne,Ov),e(Ne,xd),e(xd,Iv),e(Ne,Wv),e(Ne,In),e(In,Uv),e(In,ur),e(ur,Hv),e(In,Bv),e(Ne,Gv),e(Ne,Wn),e(Wn,Rv),e(Wn,Un),e(Un,Vv),e(Wn,Kv),e(Ne,Yv),w(Zt,Ne,null),e(Ne,Jv),e(Ne,rs),w(Hn,rs,null),e(rs,Xv),e(rs,Tt),e(Tt,Zv),e(Tt,mr),e(mr,ew),e(Tt,sw),e(Tt,Cd),e(Cd,tw),e(Tt,aw),e(rs,nw),w(ea,rs,null),e(rs,ow),e(rs,Md),e(Md,rw),e(rs,iw),w(Bn,rs,null),c(t,nc,h),c(t,bt,h),e(bt,sa),e(sa,Pd),w(Gn,Pd,null),e(bt,lw),e(bt,Sd),e(Sd,dw),c(t,oc,h),c(t,Le,h),w(Rn,Le,null),e(Le,pw),e(Le,Vn),e(Vn,cw),e(Vn,Dd),e(Dd,hw),e(Vn,uw),e(Le,mw),e(Le,Kn),e(Kn,fw),e(Kn,fr),e(fr,gw),e(Kn,_w),e(Le,Tw),e(Le,Yn),e(Yn,bw),e(Yn,Jn),e(Jn,vw),e(Yn,ww),e(Le,yw),w(ta,Le,null),e(Le,kw),e(Le,is),w(Xn,is,null),e(is,jw),e(is,vt),e(vt,qw),e(vt,gr),e(gr,Ew),e(vt,Fw),e(vt,Nd),e(Nd,Aw),e(vt,zw),e(is,$w),w(aa,is,null),e(is,xw),e(is,Ld),e(Ld,Cw),e(is,Mw),w(Zn,is,null),c(t,rc,h),c(t,wt,h),e(wt,na),e(na,Qd),w(eo,Qd,null),e(wt,Pw),e(wt,Od),e(Od,Sw),c(t,ic,h),c(t,Qe,h),w(so,Qe,null),e(Qe,Dw),e(Qe,Id),e(Id,Nw),e(Qe,Lw),e(Qe,to),e(to,Qw),e(to,_r),e(_r,Ow),e(to,Iw),e(Qe,Ww),e(Qe,ao),e(ao,Uw),e(ao,no),e(no,Hw),e(ao,Bw),e(Qe,Gw),w(oa,Qe,null),e(Qe,Rw),e(Qe,ls),w(oo,ls,null),e(ls,Vw),e(ls,yt),e(yt,Kw),e(yt,Tr),e(Tr,Yw),e(yt,Jw),e(yt,Wd),e(Wd,Xw),e(yt,Zw),e(ls,ey),w(ra,ls,null),e(ls,sy),e(ls,Ud),e(Ud,ty),e(ls,ay),w(ro,ls,null),c(t,lc,h),c(t,kt,h),e(kt,ia),e(ia,Hd),w(io,Hd,null),e(kt,ny),e(kt,Bd),e(Bd,oy),c(t,dc,h),c(t,Oe,h),w(lo,Oe,null),e(Oe,ry),e(Oe,jt),e(jt,iy),e(jt,Gd),e(Gd,ly),e(jt,dy),e(jt,Rd),e(Rd,py),e(jt,cy),e(Oe,hy),e(Oe,po),e(po,uy),e(po,br),e(br,my),e(po,fy),e(Oe,gy),e(Oe,co),e(co,_y),e(co,ho),e(ho,Ty),e(co,by),e(Oe,vy),w(la,Oe,null),e(Oe,wy),e(Oe,ds),w(uo,ds,null),e(ds,yy),e(ds,qt),e(qt,ky),e(qt,vr),e(vr,jy),e(qt,qy),e(qt,Vd),e(Vd,Ey),e(qt,Fy),e(ds,Ay),w(da,ds,null),e(ds,zy),e(ds,Kd),e(Kd,$y),e(ds,xy),w(mo,ds,null),pc=!0},p(t,[h]){const fo={};h&2&&(fo.$$scope={dirty:h,ctx:t}),Bt.$set(fo);const Yd={};h&2&&(Yd.$$scope={dirty:h,ctx:t}),Rt.$set(Yd);const Jd={};h&2&&(Jd.$$scope={dirty:h,ctx:t}),Kt.$set(Jd);const Xd={};h&2&&(Xd.$$scope={dirty:h,ctx:t}),Jt.$set(Xd);const go={};h&2&&(go.$$scope={dirty:h,ctx:t}),Zt.$set(go);const Zd={};h&2&&(Zd.$$scope={dirty:h,ctx:t}),ea.$set(Zd);const ep={};h&2&&(ep.$$scope={dirty:h,ctx:t}),ta.$set(ep);const sp={};h&2&&(sp.$$scope={dirty:h,ctx:t}),aa.$set(sp);const _o={};h&2&&(_o.$$scope={dirty:h,ctx:t}),oa.$set(_o);const tp={};h&2&&(tp.$$scope={dirty:h,ctx:t}),ra.$set(tp);const ap={};h&2&&(ap.$$scope={dirty:h,ctx:t}),la.$set(ap);const Et={};h&2&&(Et.$$scope={dirty:h,ctx:t}),da.$set(Et)},i(t){pc||(y(T.$$.fragment,t),y(Z.$$.fragment,t),y(ya.$$.fragment,t),y(Fa.$$.fragment,t),y(Aa.$$.fragment,t),y(La.$$.fragment,t),y(Qa.$$.fragment,t),y(Wa.$$.fragment,t),y(Ua.$$.fragment,t),y(Ha.$$.fragment,t),y(Ra.$$.fragment,t),y(Va.$$.fragment,t),y(Ya.$$.fragment,t),y(Ja.$$.fragment,t),y(en.$$.fragment,t),y(sn.$$.fragment,t),y(tn.$$.fragment,t),y(an.$$.fragment,t),y(nn.$$.fragment,t),y(dn.$$.fragment,t),y(pn.$$.fragment,t),y(_n.$$.fragment,t),y(Bt.$$.fragment,t),y(Tn.$$.fragment,t),y(bn.$$.fragment,t),y(vn.$$.fragment,t),y(kn.$$.fragment,t),y(Rt.$$.fragment,t),y(jn.$$.fragment,t),y(qn.$$.fragment,t),y(En.$$.fragment,t),y($n.$$.fragment,t),y(Kt.$$.fragment,t),y(xn.$$.fragment,t),y(Cn.$$.fragment,t),y(Mn.$$.fragment,t),y(Nn.$$.fragment,t),y(Jt.$$.fragment,t),y(Ln.$$.fragment,t),y(Qn.$$.fragment,t),y(On.$$.fragment,t),y(Zt.$$.fragment,t),y(Hn.$$.fragment,t),y(ea.$$.fragment,t),y(Bn.$$.fragment,t),y(Gn.$$.fragment,t),y(Rn.$$.fragment,t),y(ta.$$.fragment,t),y(Xn.$$.fragment,t),y(aa.$$.fragment,t),y(Zn.$$.fragment,t),y(eo.$$.fragment,t),y(so.$$.fragment,t),y(oa.$$.fragment,t),y(oo.$$.fragment,t),y(ra.$$.fragment,t),y(ro.$$.fragment,t),y(io.$$.fragment,t),y(lo.$$.fragment,t),y(la.$$.fragment,t),y(uo.$$.fragment,t),y(da.$$.fragment,t),y(mo.$$.fragment,t),pc=!0)},o(t){k(T.$$.fragment,t),k(Z.$$.fragment,t),k(ya.$$.fragment,t),k(Fa.$$.fragment,t),k(Aa.$$.fragment,t),k(La.$$.fragment,t),k(Qa.$$.fragment,t),k(Wa.$$.fragment,t),k(Ua.$$.fragment,t),k(Ha.$$.fragment,t),k(Ra.$$.fragment,t),k(Va.$$.fragment,t),k(Ya.$$.fragment,t),k(Ja.$$.fragment,t),k(en.$$.fragment,t),k(sn.$$.fragment,t),k(tn.$$.fragment,t),k(an.$$.fragment,t),k(nn.$$.fragment,t),k(dn.$$.fragment,t),k(pn.$$.fragment,t),k(_n.$$.fragment,t),k(Bt.$$.fragment,t),k(Tn.$$.fragment,t),k(bn.$$.fragment,t),k(vn.$$.fragment,t),k(kn.$$.fragment,t),k(Rt.$$.fragment,t),k(jn.$$.fragment,t),k(qn.$$.fragment,t),k(En.$$.fragment,t),k($n.$$.fragment,t),k(Kt.$$.fragment,t),k(xn.$$.fragment,t),k(Cn.$$.fragment,t),k(Mn.$$.fragment,t),k(Nn.$$.fragment,t),k(Jt.$$.fragment,t),k(Ln.$$.fragment,t),k(Qn.$$.fragment,t),k(On.$$.fragment,t),k(Zt.$$.fragment,t),k(Hn.$$.fragment,t),k(ea.$$.fragment,t),k(Bn.$$.fragment,t),k(Gn.$$.fragment,t),k(Rn.$$.fragment,t),k(ta.$$.fragment,t),k(Xn.$$.fragment,t),k(aa.$$.fragment,t),k(Zn.$$.fragment,t),k(eo.$$.fragment,t),k(so.$$.fragment,t),k(oa.$$.fragment,t),k(oo.$$.fragment,t),k(ra.$$.fragment,t),k(ro.$$.fragment,t),k(io.$$.fragment,t),k(lo.$$.fragment,t),k(la.$$.fragment,t),k(uo.$$.fragment,t),k(da.$$.fragment,t),k(mo.$$.fragment,t),pc=!1},d(t){s(m),t&&s(F),t&&s(f),j(T),t&&s(K),t&&s(z),j(Z),t&&s(ce),t&&s(W),t&&s(x),t&&s(oe),t&&s(he),t&&s(V),t&&s(ue),t&&s(u),t&&s(J),t&&s(Fe),t&&s(S),t&&s(Ae),t&&s(D),t&&s(M),t&&s(np),t&&s(At),t&&s(op),t&&s(zt),t&&s(rp),t&&s(_s),t&&s(ip),t&&s(bo),t&&s(lp),t&&s(Ts),t&&s(dp),t&&s(Ks),j(ya),t&&s(pp),t&&s(xt),t&&s(cp),t&&s(yo),t&&s(hp),t&&s(Ct),t&&s(up),t&&s($s),t&&s(mp),t&&s(jo),t&&s(fp),t&&s(Mt),t&&s(gp),t&&s(xs),t&&s(_p),j(Fa,t),t&&s(Tp),t&&s(Cs),t&&s(bp),j(Aa,t),t&&s(vp),t&&s(Pt),t&&s(wp),t&&s(St),t&&s(yp),t&&s(Fo),t&&s(kp),t&&s(Dt),t&&s(jp),t&&s(ie),t&&s(qp),t&&s(We),t&&s(Ep),t&&s(No),t&&s(Fp),t&&s(ze),t&&s(Ap),t&&s(Nt),t&&s(zp),t&&s(le),t&&s($p),j(La,t),t&&s(xp),t&&s(bs),t&&s(Cp),j(Qa,t),t&&s(Mp),t&&s(X),t&&s(Pp),t&&s(Ho),t&&s(Sp),t&&s(Ms),t&&s(Dp),j(Wa,t),t&&s(Np),t&&s(tt),j(Ua),t&&s(Lp),t&&s(me),t&&s(Qp),t&&s(Qt),t&&s(Op),j(Ha,t),t&&s(Ip),t&&s(Ue),t&&s(Wp),t&&s(at),j(Ra),t&&s(Up),t&&s(nt),j(Va),t&&s(Hp),t&&s(ot),j(Ya),t&&s(Bp),t&&s(Xe),j(Ja),j(en),t&&s(Gp),t&&s(rt),j(sn),t&&s(Rp),t&&s(de),j(tn),j(an),j(nn),t&&s(Vp),t&&s(it),j(dn),t&&s(Kp),t&&s(De),j(pn),j(_n),j(Bt),j(Tn),t&&s(Yp),t&&s(dt),j(bn),t&&s(Jp),t&&s(gs),j(vn),j(kn),j(Rt),j(jn),t&&s(Xp),t&&s(ht),j(qn),t&&s(Zp),t&&s(Ze),j(En),j($n),j(Kt),j(xn),t&&s(ec),t&&s(mt),j(Cn),t&&s(sc),t&&s(es),j(Mn),j(Nn),j(Jt),j(Ln),t&&s(tc),t&&s(_t),j(Qn),t&&s(ac),t&&s(Ne),j(On),j(Zt),j(Hn),j(ea),j(Bn),t&&s(nc),t&&s(bt),j(Gn),t&&s(oc),t&&s(Le),j(Rn),j(ta),j(Xn),j(aa),j(Zn),t&&s(rc),t&&s(wt),j(eo),t&&s(ic),t&&s(Qe),j(so),j(oa),j(oo),j(ra),j(ro),t&&s(lc),t&&s(kt),j(io),t&&s(dc),t&&s(Oe),j(lo),j(la),j(uo),j(da),j(mo)}}}const a0={local:"tapas",sections:[{local:"overview",title:"Overview"},{local:"usage-finetuning",title:"Usage: fine-tuning"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",title:"TAPAS specific outputs"},{local:"transformers.TapasConfig",title:"TapasConfig"},{local:"transformers.TapasTokenizer",title:"TapasTokenizer"},{local:"transformers.TapasModel",title:"TapasModel"},{local:"transformers.TapasForMaskedLM",title:"TapasForMaskedLM"},{local:"transformers.TapasForSequenceClassification",title:"TapasForSequenceClassification"},{local:"transformers.TapasForQuestionAnswering",title:"TapasForQuestionAnswering"},{local:"transformers.TFTapasModel",title:"TFTapasModel"},{local:"transformers.TFTapasForMaskedLM",title:"TFTapasForMaskedLM"},{local:"transformers.TFTapasForSequenceClassification",title:"TFTapasForSequenceClassification"},{local:"transformers.TFTapasForQuestionAnswering",title:"TFTapasForQuestionAnswering"}],title:"TAPAS"};function n0(U,m,F){let{fw:f}=m;return U.$$set=g=>{"fw"in g&&F(0,f=g.fw)},[f]}class h0 extends Q2{constructor(m){super();O2(this,m,n0,t0,I2,{fw:0})}}export{h0 as default,a0 as metadata};
