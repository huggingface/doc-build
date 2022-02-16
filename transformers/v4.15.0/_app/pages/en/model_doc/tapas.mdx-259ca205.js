import{S as S0,i as D0,s as N0,e as o,k as l,w as v,t as a,L as L0,c as r,d as s,m as d,a as i,x as b,h as n,b as p,M as Q0,J as e,g as c,y as w,q as y,o as k,B as j}from"../../../chunks/vendor-b1433968.js";import{T as Fs}from"../../../chunks/Tip-c3840994.js";import{D as pe}from"../../../chunks/Docstring-ff504c58.js";import{C as xt}from"../../../chunks/CodeBlock-a320dbd7.js";import{C as Ur}from"../../../chunks/CodeBlockFw-e3b92d56.js";import{I as ss}from"../../../chunks/IconCopyLink-7029626d.js";import"../../../chunks/CopyButton-f65cb278.js";function O0(U){let m,x,f,g,q;return{c(){m=o("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var F=i(f);g=n(F,"Module"),F.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function I0(U){let m,x,f,g,q;return{c(){m=o("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var F=i(f);g=n(F,"Module"),F.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function W0(U){let m,x,f,g,q;return{c(){m=o("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var F=i(f);g=n(F,"Module"),F.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function U0(U){let m,x,f,g,q;return{c(){m=o("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var F=i(f);g=n(F,"Module"),F.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function H0(U){let m,x,f,g,q,T,_,F,_e,K,A,Y,O,Z,Te,I,ve,ce,W,N,ee,se,z,$,oe,H,he,V,L,te,be,C,we,Q,ae,ye,B,ke,re,P,je,G,ue;return{c(){m=o("p"),x=a("TF 2.0 models accepts two formats as inputs:"),f=l(),g=o("ul"),q=o("li"),T=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=o("li"),_e=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),A=o("p"),Y=a("This second option is useful when using "),O=o("code"),Z=a("tf.keras.Model.fit"),Te=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),I=o("code"),ve=a("model(inputs)"),ce=a("."),W=l(),N=o("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),se=l(),z=o("ul"),$=o("li"),oe=a("a single Tensor with "),H=o("code"),he=a("input_ids"),V=a(" only and nothing else: "),L=o("code"),te=a("model(inputs_ids)"),be=l(),C=o("li"),we=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),ae=a("model([input_ids, attention_mask])"),ye=a(" or "),B=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),re=l(),P=o("li"),je=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=o("code"),ue=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);x=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),f=d(u),g=r(u,"UL",{});var J=i(g);q=r(J,"LI",{});var xe=i(q);T=n(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(s),_=d(J),F=r(J,"LI",{});var Ge=i(F);_e=n(Ge,"having all inputs as a list, tuple or dict in the first positional arguments."),Ge.forEach(s),J.forEach(s),K=d(u),A=r(u,"P",{});var S=i(A);Y=n(S,"This second option is useful when using "),O=r(S,"CODE",{});var Fe=i(O);Z=n(Fe,"tf.keras.Model.fit"),Fe.forEach(s),Te=n(S,` method which currently requires having all
the tensors in the first argument of the model call function: `),I=r(S,"CODE",{});var $e=i(I);ve=n($e,"model(inputs)"),$e.forEach(s),ce=n(S,"."),S.forEach(s),W=d(u),N=r(u,"P",{});var Re=i(N);ee=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Re.forEach(s),se=d(u),z=r(u,"UL",{});var D=i(z);$=r(D,"LI",{});var M=i($);oe=n(M,"a single Tensor with "),H=r(M,"CODE",{});var Ve=i(H);he=n(Ve,"input_ids"),Ve.forEach(s),V=n(M," only and nothing else: "),L=r(M,"CODE",{});var Ce=i(L);te=n(Ce,"model(inputs_ids)"),Ce.forEach(s),M.forEach(s),be=d(D),C=r(D,"LI",{});var R=i(C);we=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ke=i(Q);ae=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),ye=n(R," or "),B=r(R,"CODE",{});var qe=i(B);ke=n(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(s),R.forEach(s),re=d(D),P=r(D,"LI",{});var Ee=i(P);je=n(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ee,"CODE",{});var Ye=i(G);ue=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),Ee.forEach(s),D.forEach(s)},m(u,E){c(u,m,E),e(m,x),c(u,f,E),c(u,g,E),e(g,q),e(q,T),e(g,_),e(g,F),e(F,_e),c(u,K,E),c(u,A,E),e(A,Y),e(A,O),e(O,Z),e(A,Te),e(A,I),e(I,ve),e(A,ce),c(u,W,E),c(u,N,E),e(N,ee),c(u,se,E),c(u,z,E),e(z,$),e($,oe),e($,H),e(H,he),e($,V),e($,L),e(L,te),e(z,be),e(z,C),e(C,we),e(C,Q),e(Q,ae),e(C,ye),e(C,B),e(B,ke),e(z,re),e(z,P),e(P,je),e(P,G),e(G,ue)},d(u){u&&s(m),u&&s(f),u&&s(g),u&&s(K),u&&s(A),u&&s(W),u&&s(N),u&&s(se),u&&s(z)}}}function B0(U){let m,x,f,g,q;return{c(){m=o("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var F=i(f);g=n(F,"Module"),F.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function G0(U){let m,x,f,g,q,T,_,F,_e,K,A,Y,O,Z,Te,I,ve,ce,W,N,ee,se,z,$,oe,H,he,V,L,te,be,C,we,Q,ae,ye,B,ke,re,P,je,G,ue;return{c(){m=o("p"),x=a("TF 2.0 models accepts two formats as inputs:"),f=l(),g=o("ul"),q=o("li"),T=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=o("li"),_e=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),A=o("p"),Y=a("This second option is useful when using "),O=o("code"),Z=a("tf.keras.Model.fit"),Te=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),I=o("code"),ve=a("model(inputs)"),ce=a("."),W=l(),N=o("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),se=l(),z=o("ul"),$=o("li"),oe=a("a single Tensor with "),H=o("code"),he=a("input_ids"),V=a(" only and nothing else: "),L=o("code"),te=a("model(inputs_ids)"),be=l(),C=o("li"),we=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),ae=a("model([input_ids, attention_mask])"),ye=a(" or "),B=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),re=l(),P=o("li"),je=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=o("code"),ue=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);x=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),f=d(u),g=r(u,"UL",{});var J=i(g);q=r(J,"LI",{});var xe=i(q);T=n(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(s),_=d(J),F=r(J,"LI",{});var Ge=i(F);_e=n(Ge,"having all inputs as a list, tuple or dict in the first positional arguments."),Ge.forEach(s),J.forEach(s),K=d(u),A=r(u,"P",{});var S=i(A);Y=n(S,"This second option is useful when using "),O=r(S,"CODE",{});var Fe=i(O);Z=n(Fe,"tf.keras.Model.fit"),Fe.forEach(s),Te=n(S,` method which currently requires having all
the tensors in the first argument of the model call function: `),I=r(S,"CODE",{});var $e=i(I);ve=n($e,"model(inputs)"),$e.forEach(s),ce=n(S,"."),S.forEach(s),W=d(u),N=r(u,"P",{});var Re=i(N);ee=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Re.forEach(s),se=d(u),z=r(u,"UL",{});var D=i(z);$=r(D,"LI",{});var M=i($);oe=n(M,"a single Tensor with "),H=r(M,"CODE",{});var Ve=i(H);he=n(Ve,"input_ids"),Ve.forEach(s),V=n(M," only and nothing else: "),L=r(M,"CODE",{});var Ce=i(L);te=n(Ce,"model(inputs_ids)"),Ce.forEach(s),M.forEach(s),be=d(D),C=r(D,"LI",{});var R=i(C);we=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ke=i(Q);ae=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),ye=n(R," or "),B=r(R,"CODE",{});var qe=i(B);ke=n(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(s),R.forEach(s),re=d(D),P=r(D,"LI",{});var Ee=i(P);je=n(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ee,"CODE",{});var Ye=i(G);ue=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),Ee.forEach(s),D.forEach(s)},m(u,E){c(u,m,E),e(m,x),c(u,f,E),c(u,g,E),e(g,q),e(q,T),e(g,_),e(g,F),e(F,_e),c(u,K,E),c(u,A,E),e(A,Y),e(A,O),e(O,Z),e(A,Te),e(A,I),e(I,ve),e(A,ce),c(u,W,E),c(u,N,E),e(N,ee),c(u,se,E),c(u,z,E),e(z,$),e($,oe),e($,H),e(H,he),e($,V),e($,L),e(L,te),e(z,be),e(z,C),e(C,we),e(C,Q),e(Q,ae),e(C,ye),e(C,B),e(B,ke),e(z,re),e(z,P),e(P,je),e(P,G),e(G,ue)},d(u){u&&s(m),u&&s(f),u&&s(g),u&&s(K),u&&s(A),u&&s(W),u&&s(N),u&&s(se),u&&s(z)}}}function R0(U){let m,x,f,g,q;return{c(){m=o("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var F=i(f);g=n(F,"Module"),F.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function V0(U){let m,x,f,g,q,T,_,F,_e,K,A,Y,O,Z,Te,I,ve,ce,W,N,ee,se,z,$,oe,H,he,V,L,te,be,C,we,Q,ae,ye,B,ke,re,P,je,G,ue;return{c(){m=o("p"),x=a("TF 2.0 models accepts two formats as inputs:"),f=l(),g=o("ul"),q=o("li"),T=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=o("li"),_e=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),A=o("p"),Y=a("This second option is useful when using "),O=o("code"),Z=a("tf.keras.Model.fit"),Te=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),I=o("code"),ve=a("model(inputs)"),ce=a("."),W=l(),N=o("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),se=l(),z=o("ul"),$=o("li"),oe=a("a single Tensor with "),H=o("code"),he=a("input_ids"),V=a(" only and nothing else: "),L=o("code"),te=a("model(inputs_ids)"),be=l(),C=o("li"),we=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),ae=a("model([input_ids, attention_mask])"),ye=a(" or "),B=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),re=l(),P=o("li"),je=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=o("code"),ue=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);x=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),f=d(u),g=r(u,"UL",{});var J=i(g);q=r(J,"LI",{});var xe=i(q);T=n(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(s),_=d(J),F=r(J,"LI",{});var Ge=i(F);_e=n(Ge,"having all inputs as a list, tuple or dict in the first positional arguments."),Ge.forEach(s),J.forEach(s),K=d(u),A=r(u,"P",{});var S=i(A);Y=n(S,"This second option is useful when using "),O=r(S,"CODE",{});var Fe=i(O);Z=n(Fe,"tf.keras.Model.fit"),Fe.forEach(s),Te=n(S,` method which currently requires having all
the tensors in the first argument of the model call function: `),I=r(S,"CODE",{});var $e=i(I);ve=n($e,"model(inputs)"),$e.forEach(s),ce=n(S,"."),S.forEach(s),W=d(u),N=r(u,"P",{});var Re=i(N);ee=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Re.forEach(s),se=d(u),z=r(u,"UL",{});var D=i(z);$=r(D,"LI",{});var M=i($);oe=n(M,"a single Tensor with "),H=r(M,"CODE",{});var Ve=i(H);he=n(Ve,"input_ids"),Ve.forEach(s),V=n(M," only and nothing else: "),L=r(M,"CODE",{});var Ce=i(L);te=n(Ce,"model(inputs_ids)"),Ce.forEach(s),M.forEach(s),be=d(D),C=r(D,"LI",{});var R=i(C);we=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ke=i(Q);ae=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),ye=n(R," or "),B=r(R,"CODE",{});var qe=i(B);ke=n(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(s),R.forEach(s),re=d(D),P=r(D,"LI",{});var Ee=i(P);je=n(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ee,"CODE",{});var Ye=i(G);ue=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),Ee.forEach(s),D.forEach(s)},m(u,E){c(u,m,E),e(m,x),c(u,f,E),c(u,g,E),e(g,q),e(q,T),e(g,_),e(g,F),e(F,_e),c(u,K,E),c(u,A,E),e(A,Y),e(A,O),e(O,Z),e(A,Te),e(A,I),e(I,ve),e(A,ce),c(u,W,E),c(u,N,E),e(N,ee),c(u,se,E),c(u,z,E),e(z,$),e($,oe),e($,H),e(H,he),e($,V),e($,L),e(L,te),e(z,be),e(z,C),e(C,we),e(C,Q),e(Q,ae),e(C,ye),e(C,B),e(B,ke),e(z,re),e(z,P),e(P,je),e(P,G),e(G,ue)},d(u){u&&s(m),u&&s(f),u&&s(g),u&&s(K),u&&s(A),u&&s(W),u&&s(N),u&&s(se),u&&s(z)}}}function K0(U){let m,x,f,g,q;return{c(){m=o("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var F=i(f);g=n(F,"Module"),F.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function Y0(U){let m,x,f,g,q,T,_,F,_e,K,A,Y,O,Z,Te,I,ve,ce,W,N,ee,se,z,$,oe,H,he,V,L,te,be,C,we,Q,ae,ye,B,ke,re,P,je,G,ue;return{c(){m=o("p"),x=a("TF 2.0 models accepts two formats as inputs:"),f=l(),g=o("ul"),q=o("li"),T=a("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=o("li"),_e=a("having all inputs as a list, tuple or dict in the first positional arguments."),K=l(),A=o("p"),Y=a("This second option is useful when using "),O=o("code"),Z=a("tf.keras.Model.fit"),Te=a(` method which currently requires having all
the tensors in the first argument of the model call function: `),I=o("code"),ve=a("model(inputs)"),ce=a("."),W=l(),N=o("p"),ee=a(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),se=l(),z=o("ul"),$=o("li"),oe=a("a single Tensor with "),H=o("code"),he=a("input_ids"),V=a(" only and nothing else: "),L=o("code"),te=a("model(inputs_ids)"),be=l(),C=o("li"),we=a(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=o("code"),ae=a("model([input_ids, attention_mask])"),ye=a(" or "),B=o("code"),ke=a("model([input_ids, attention_mask, token_type_ids])"),re=l(),P=o("li"),je=a(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=o("code"),ue=a('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);x=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),f=d(u),g=r(u,"UL",{});var J=i(g);q=r(J,"LI",{});var xe=i(q);T=n(xe,"having all inputs as keyword arguments (like PyTorch models), or"),xe.forEach(s),_=d(J),F=r(J,"LI",{});var Ge=i(F);_e=n(Ge,"having all inputs as a list, tuple or dict in the first positional arguments."),Ge.forEach(s),J.forEach(s),K=d(u),A=r(u,"P",{});var S=i(A);Y=n(S,"This second option is useful when using "),O=r(S,"CODE",{});var Fe=i(O);Z=n(Fe,"tf.keras.Model.fit"),Fe.forEach(s),Te=n(S,` method which currently requires having all
the tensors in the first argument of the model call function: `),I=r(S,"CODE",{});var $e=i(I);ve=n($e,"model(inputs)"),$e.forEach(s),ce=n(S,"."),S.forEach(s),W=d(u),N=r(u,"P",{});var Re=i(N);ee=n(Re,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Re.forEach(s),se=d(u),z=r(u,"UL",{});var D=i(z);$=r(D,"LI",{});var M=i($);oe=n(M,"a single Tensor with "),H=r(M,"CODE",{});var Ve=i(H);he=n(Ve,"input_ids"),Ve.forEach(s),V=n(M," only and nothing else: "),L=r(M,"CODE",{});var Ce=i(L);te=n(Ce,"model(inputs_ids)"),Ce.forEach(s),M.forEach(s),be=d(D),C=r(D,"LI",{});var R=i(C);we=n(R,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),Q=r(R,"CODE",{});var Ke=i(Q);ae=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),ye=n(R," or "),B=r(R,"CODE",{});var qe=i(B);ke=n(qe,"model([input_ids, attention_mask, token_type_ids])"),qe.forEach(s),R.forEach(s),re=d(D),P=r(D,"LI",{});var Ee=i(P);je=n(Ee,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),G=r(Ee,"CODE",{});var Ye=i(G);ue=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),Ee.forEach(s),D.forEach(s)},m(u,E){c(u,m,E),e(m,x),c(u,f,E),c(u,g,E),e(g,q),e(q,T),e(g,_),e(g,F),e(F,_e),c(u,K,E),c(u,A,E),e(A,Y),e(A,O),e(O,Z),e(A,Te),e(A,I),e(I,ve),e(A,ce),c(u,W,E),c(u,N,E),e(N,ee),c(u,se,E),c(u,z,E),e(z,$),e($,oe),e($,H),e(H,he),e($,V),e($,L),e(L,te),e(z,be),e(z,C),e(C,we),e(C,Q),e(Q,ae),e(C,ye),e(C,B),e(B,ke),e(z,re),e(z,P),e(P,je),e(P,G),e(G,ue)},d(u){u&&s(m),u&&s(f),u&&s(g),u&&s(K),u&&s(A),u&&s(W),u&&s(N),u&&s(se),u&&s(z)}}}function J0(U){let m,x,f,g,q;return{c(){m=o("p"),x=a("Although the recipe for forward pass needs to be defined within this function, one should call the "),f=o("code"),g=a("Module"),q=a(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),f=r(_,"CODE",{});var F=i(f);g=n(F,"Module"),F.forEach(s),q=n(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,f),e(f,g),e(m,q)},d(T){T&&s(m)}}}function X0(U){let m,x,f,g,q,T,_,F,_e,K,A,Y,O,Z,Te,I,ve,ce,W,N,ee,se,z,$,oe,H,he,V,L,te,be,C,we,Q,ae,ye,B,ke,re,P,je,G,ue,u,E,J,xe,Ge,S,Fe,$e,Re,D,M,Ve,Ce,R,Ke,qe,Ee,Ye,fa,ih,lh,ap,Ft,Iy,np,_o,dh,op,_s,ph,ga,ch,hh,_a,uh,mh,Ta,fh,gh,rp,To,_h,ip,Ts,Me,Th,Hr,vh,bh,vo,wh,yh,Br,kh,jh,va,qh,Eh,Gr,xh,Fh,Rr,Ah,zh,$h,Je,Ch,Vr,Mh,Ph,Kr,Sh,Dh,Yr,Nh,Lh,Jr,Qh,Oh,ba,Ih,Wh,Uh,Vs,Hh,Xr,Bh,Gh,Zr,Rh,Vh,Kh,ei,Yh,lp,Ks,At,si,wa,Jh,ti,Xh,dp,zt,Zh,bo,eu,su,pp,wo,ai,tu,cp,$t,au,yo,nu,ou,hp,zs,ni,ru,iu,ya,lu,oi,du,pu,cu,ka,hu,ri,uu,mu,up,ko,fu,mp,Ct,ii,Ys,li,di,gu,_u,pi,ci,Tu,vu,hi,ui,bu,wu,Js,Xs,mi,yu,ku,fi,ju,qu,gi,Eu,xu,Zs,_i,Fu,Au,Ti,zu,$u,vi,Cu,Mu,et,bi,Pu,Su,wi,Du,Nu,yi,Lu,fp,$s,Qu,ja,Ou,Iu,qa,Wu,Uu,gp,Ea,_p,Cs,Hu,jo,Bu,Gu,qo,Ru,Vu,Tp,xa,vp,Mt,Ku,Fa,Yu,Ju,bp,Pt,Xu,Aa,Zu,em,wp,Eo,ki,sm,yp,St,tm,za,am,nm,kp,ie,xo,ji,om,rm,im,Fo,qi,lm,dm,pm,Ao,Ei,cm,hm,um,zo,xi,mm,fm,gm,$o,Fi,_m,Tm,vm,Co,Ai,bm,wm,ym,Mo,zi,km,jm,qm,Po,$i,Em,xm,Fm,So,Ci,Am,zm,jp,We,$m,$a,Cm,Mm,Ca,Pm,Sm,Mi,Dm,Nm,Pi,Lm,Qm,Si,Om,Im,qp,Do,Di,Wm,Ep,Ae,Um,No,Hm,Bm,Ni,Gm,Rm,Li,Vm,Km,Qi,Ym,Jm,Lo,Xm,Zm,Qo,ef,sf,xp,Dt,Oi,Ma,Ii,Wi,tf,af,Ui,Hi,nf,of,st,Pa,Bi,rf,lf,As,Gi,df,pf,Ri,cf,hf,Vi,uf,mf,Ki,ff,gf,Sa,Yi,_f,Tf,Pe,Ji,vf,bf,Xi,wf,yf,Zi,kf,jf,el,qf,Ef,sl,xf,Ff,tl,Af,zf,al,$f,Cf,Da,nl,Mf,Pf,ms,ol,Sf,Df,rl,Nf,Lf,il,Qf,Of,ll,If,Wf,dl,Uf,Fp,le,Oo,Hf,Bf,pl,Gf,Rf,cl,Vf,Kf,hl,Yf,Jf,ul,Xf,Zf,ml,eg,sg,fl,tg,ag,gl,ng,og,Ap,Na,zp,vs,rg,Io,ig,lg,_l,dg,pg,Tl,cg,hg,$p,La,Cp,X,ug,vl,mg,fg,bl,gg,_g,wl,Tg,vg,yl,bg,wg,kl,yg,kg,jl,jg,qg,Wo,Eg,xg,Qa,Fg,Ag,Oa,zg,$g,Mp,Uo,ql,Cg,Pp,Ms,Mg,Ho,Pg,Sg,Bo,Dg,Ng,Sp,Ia,Dp,tt,Nt,El,Wa,Lg,xl,Qg,Np,me,Og,Go,Ig,Wg,Ro,Ug,Hg,Fl,Bg,Gg,Al,Rg,Vg,zl,Kg,Yg,Vo,Jg,Xg,$l,Zg,e_,Lp,Lt,s_,Cl,t_,a_,Qp,Ua,Op,Ue,n_,Ml,o_,r_,Pl,i_,l_,Sl,d_,p_,Ha,c_,h_,Ba,u_,m_,Ip,at,Qt,Dl,Ga,f_,Nl,g_,Wp,nt,Ra,__,Va,T_,Ko,v_,b_,Up,ot,Ot,Ll,Ka,w_,Ql,y_,Hp,Xe,Ya,k_,fs,j_,Yo,q_,E_,Ol,x_,F_,Il,A_,z_,Jo,$_,C_,M_,Ja,P_,Xa,S_,D_,N_,Wl,L_,Q_,Za,Bp,rt,It,Ul,en,O_,Hl,I_,Gp,de,sn,W_,Bl,U_,H_,ne,B_,Xo,G_,R_,Zo,V_,K_,Gl,Y_,J_,Rl,X_,Z_,Vl,eT,sT,Kl,tT,aT,Yl,nT,oT,Jl,rT,iT,Xl,lT,dT,pT,Se,Zl,cT,hT,ed,uT,mT,sd,fT,gT,td,_T,TT,ad,vT,bT,nd,wT,yT,od,kT,jT,er,sr,qT,ET,xT,Wt,tn,FT,rd,AT,zT,Ps,an,$T,nn,CT,tr,MT,PT,ST,on,DT,rn,NT,LT,QT,id,Rp,it,Ut,ld,ln,OT,dd,IT,Vp,De,dn,WT,pn,UT,ar,HT,BT,GT,cn,RT,hn,VT,KT,YT,un,JT,nr,XT,ZT,ev,mn,sv,fn,tv,av,nv,ts,gn,ov,lt,rv,or,iv,lv,pd,dv,pv,cv,Ht,hv,cd,uv,mv,_n,Kp,dt,Bt,hd,Tn,fv,ud,gv,Yp,gs,vn,_v,pt,Tv,md,vv,bv,rr,wv,yv,kv,bn,jv,wn,qv,Ev,xv,as,yn,Fv,ct,Av,ir,zv,$v,fd,Cv,Mv,Pv,Gt,Sv,gd,Dv,Nv,kn,Jp,ht,Rt,_d,jn,Lv,Td,Qv,Xp,Ze,qn,Ov,vd,Iv,Wv,En,Uv,lr,Hv,Bv,Gv,xn,Rv,Fn,Vv,Kv,Yv,ns,An,Jv,ut,Xv,dr,Zv,eb,bd,sb,tb,ab,Vt,nb,wd,ob,rb,zn,Zp,mt,Kt,yd,$n,ib,kd,lb,ec,es,Cn,db,ft,pb,jd,cb,hb,qd,ub,mb,fb,Mn,gb,pr,_b,Tb,vb,Pn,bb,Sn,wb,yb,kb,os,Dn,jb,gt,qb,cr,Eb,xb,Ed,Fb,Ab,zb,Yt,$b,xd,Cb,Mb,Nn,sc,_t,Jt,Fd,Ln,Pb,Ad,Sb,tc,Ne,Qn,Db,zd,Nb,Lb,On,Qb,hr,Ob,Ib,Wb,In,Ub,Wn,Hb,Bb,Gb,Xt,Rb,rs,Un,Vb,Tt,Kb,ur,Yb,Jb,$d,Xb,Zb,ew,Zt,sw,Cd,tw,aw,Hn,ac,vt,ea,Md,Bn,nw,Pd,ow,nc,Le,Gn,rw,Rn,iw,Sd,lw,dw,pw,Vn,cw,mr,hw,uw,mw,Kn,fw,Yn,gw,_w,Tw,sa,vw,is,Jn,bw,bt,ww,fr,yw,kw,Dd,jw,qw,Ew,ta,xw,Nd,Fw,Aw,Xn,oc,wt,aa,Ld,Zn,zw,Qd,$w,rc,Qe,eo,Cw,Od,Mw,Pw,so,Sw,gr,Dw,Nw,Lw,to,Qw,ao,Ow,Iw,Ww,na,Uw,ls,no,Hw,yt,Bw,_r,Gw,Rw,Id,Vw,Kw,Yw,oa,Jw,Wd,Xw,Zw,oo,ic,kt,ra,Ud,ro,ey,Hd,sy,lc,Oe,io,ty,jt,ay,Bd,ny,oy,Gd,ry,iy,ly,lo,dy,Tr,py,cy,hy,po,uy,co,my,fy,gy,ia,_y,ds,ho,Ty,qt,vy,vr,by,wy,Rd,yy,ky,jy,la,qy,Vd,Ey,xy,uo,dc;return T=new ss({}),Z=new ss({}),wa=new ss({}),Ea=new Ur({props:{pt:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TapasForQuestionAnswering.from_pretrained('google/tapas-base')

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained('google/tapas-base-finetuned-wtq')
model = TapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig('google-base-finetuned-wikisql-supervised')
model = TapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for example, the base sized model with default SQA configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base-finetuned-wtq&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WikiSQL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(<span class="hljs-string">&#x27;google-base-finetuned-wikisql-supervised&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>, config=config)`},tf:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TFTapasForQuestionAnswering.from_pretrained('google/tapas-base')

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained('google/tapas-base-finetuned-wtq')
model = TFTapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig('google-base-finetuned-wikisql-supervised')
model = TFTapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># for example, the base sized model with default SQA configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base-finetuned-wtq&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># or, the base sized model with WikiSQL configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(<span class="hljs-string">&#x27;google-base-finetuned-wikisql-supervised&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>, config=config)`}}}),xa=new Ur({props:{pt:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>, config=config)`},tf:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TFTapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>, config=config)`}}}),Na=new Ur({props:{pt:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = 'google/tapas-base'
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], 'Number of movies': ["87", "53", "69"]}
queries = ["What is the name of the first actor?", "How many movies has George Clooney played in?", "What is the total number of movies?"]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, answer_coordinates=answer_coordinates, answer_text=answer_text, padding='max_length', return_tensors='pt')
inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&#x27;google/tapas-base&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>, <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_coordinates = [[(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)], [(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)], [(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)]]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_text = [[<span class="hljs-string">&quot;Brad Pitt&quot;</span>], [<span class="hljs-string">&quot;69&quot;</span>], [<span class="hljs-string">&quot;209&quot;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, answer_coordinates=answer_coordinates, answer_text=answer_text, padding=<span class="hljs-string">&#x27;max_length&#x27;</span>, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[...]]), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[[...]]]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`},tf:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = 'google/tapas-base'
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], 'Number of movies': ["87", "53", "69"]}
queries = ["What is the name of the first actor?", "How many movies has George Clooney played in?", "What is the total number of movies?"]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, answer_coordinates=answer_coordinates, answer_text=answer_text, padding='max_length', return_tensors='tf')
inputs`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&#x27;google/tapas-base&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>, <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_coordinates = [[(<span class="hljs-number">0</span>, <span class="hljs-number">0</span>)], [(<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)], [(<span class="hljs-number">0</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">1</span>, <span class="hljs-number">1</span>), (<span class="hljs-number">2</span>, <span class="hljs-number">1</span>)]]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer_text = [[<span class="hljs-string">&quot;Brad Pitt&quot;</span>], [<span class="hljs-string">&quot;69&quot;</span>], [<span class="hljs-string">&quot;209&quot;</span>]]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, answer_coordinates=answer_coordinates, answer_text=answer_text, padding=<span class="hljs-string">&#x27;max_length&#x27;</span>, return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor([[...]]), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor([[[...]]]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor([[ ... ]]), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`}}}),La=new Ur({props:{pt:{code:`import torch
import pandas as pd

tsv_path = "your_path_to_the_tsv_file"
table_csv_path = "your_path_to_a_directory_containing_all_csv_files"

class TableDataset(torch.utils.data.Dataset):
    def __init__(self, data, tokenizer):
        self.data = data
        self.tokenizer = tokenizer
    def __getitem__(self, idx):
        item = data.iloc[idx]
        table = pd.read_csv(table_csv_path + item.table_file).astype(str) # be sure to make your table data text only
        encoding = self.tokenizer(table=table, 
                                  queries=item.question, 
                                  answer_coordinates=item.answer_coordinates, 
                                  answer_text=item.answer_text,
                                  truncation=True,
                                  padding="max_length",
                                  return_tensors="pt"
        )
        # remove the batch dimension which the tokenizer adds by default
        encoding = {key: val.squeeze(0) for key, val in encoding.items()}
        # add the float_answer which is also required (weak supervision for aggregation case)
        encoding["float_answer"] = torch.tensor(item.float_answer) 
        return encoding
    def __len__(self):
       return len(self.data)

data = pd.read_csv(tsv_path, sep='\\t')
train_dataset = TableDataset(data, tokenizer)
train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=32)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>(torch.utils.data.Dataset):
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):
<span class="hljs-meta">... </span>        self.data = data
<span class="hljs-meta">... </span>        self.tokenizer = tokenizer
...
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__getitem__</span>(<span class="hljs-params">self, idx</span>):
<span class="hljs-meta">... </span>        item = data.iloc[idx]
<span class="hljs-meta">... </span>        table = pd.read_csv(table_csv_path + item.table_file).astype(<span class="hljs-built_in">str</span>) <span class="hljs-comment"># be sure to make your table data text only</span>
<span class="hljs-meta">... </span>        encoding = self.tokenizer(table=table, 
<span class="hljs-meta">... </span>                                  queries=item.question, 
<span class="hljs-meta">... </span>                                  answer_coordinates=item.answer_coordinates, 
<span class="hljs-meta">... </span>                                  answer_text=item.answer_text,
<span class="hljs-meta">... </span>                                  truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>                                  padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>                                  return_tensors=<span class="hljs-string">&quot;pt&quot;</span>
<span class="hljs-meta">... </span>        )
<span class="hljs-meta">... </span>        <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span>
<span class="hljs-meta">... </span>        encoding = {key: val.squeeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">... </span>        <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span>
<span class="hljs-meta">... </span>        encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = torch.tensor(item.float_answer) 
<span class="hljs-meta">... </span>        <span class="hljs-keyword">return</span> encoding
...
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>       <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&#x27;\\t&#x27;</span>)
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
            table = pd.read_csv(table_csv_path + item.table_file).astype(str) # be sure to make your table data text only
            encoding = self.tokenizer(table=table, 
                                  queries=item.question, 
                                  answer_coordinates=item.answer_coordinates, 
                                  answer_text=item.answer_text,
                                  truncation=True,
                                  padding="max_length",
                                  return_tensors="tf"
            )
            # remove the batch dimension which the tokenizer adds by default
            encoding = {key: tf.squeeze(val,0) for key, val in encoding.items()}
            # add the float_answer which is also required (weak supervision for aggregation case)
            encoding["float_answer"] = tf.convert_to_tensor(item.float_answer,dtype=tf.float32)
            yield encoding['input_ids'], encoding['attention_mask'], encoding['numeric_values'], \\
                  encoding['numeric_values_scale'], encoding['token_type_ids'], encoding['labels'], \\
                  encoding['float_answer']
    def __len__(self):
       return len(self.data)

data = pd.read_csv(tsv_path, sep='\\t')
train_dataset = TableDataset(data, tokenizer)
output_signature = (
tf.TensorSpec(shape=(512,), dtype=tf.int32),
tf.TensorSpec(shape=(512,), dtype=tf.int32),
tf.TensorSpec(shape=(512,), dtype=tf.float32),
tf.TensorSpec(shape=(512,), dtype=tf.float32),
tf.TensorSpec(shape=(512,7), dtype=tf.int32),
tf.TensorSpec(shape=(512,), dtype=tf.int32),
tf.TensorSpec(shape=(512,), dtype=tf.float32))
train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(32)`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>:
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):
<span class="hljs-meta">... </span>        self.data = data
<span class="hljs-meta">... </span>        self.tokenizer = tokenizer
...
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__iter__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>        <span class="hljs-keyword">for</span> idx <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(self.__len__()):
<span class="hljs-meta">... </span>            item = self.data.iloc[idx]
<span class="hljs-meta">... </span>            table = pd.read_csv(table_csv_path + item.table_file).astype(<span class="hljs-built_in">str</span>) <span class="hljs-comment"># be sure to make your table data text only</span>
<span class="hljs-meta">... </span>            encoding = self.tokenizer(table=table, 
<span class="hljs-meta">... </span>                                  queries=item.question, 
<span class="hljs-meta">... </span>                                  answer_coordinates=item.answer_coordinates, 
<span class="hljs-meta">... </span>                                  answer_text=item.answer_text,
<span class="hljs-meta">... </span>                                  truncation=<span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>                                  padding=<span class="hljs-string">&quot;max_length&quot;</span>,
<span class="hljs-meta">... </span>                                  return_tensors=<span class="hljs-string">&quot;tf&quot;</span>
<span class="hljs-meta">... </span>            )
<span class="hljs-meta">... </span>            <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span>
<span class="hljs-meta">... </span>            encoding = {key: tf.squeeze(val,<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">... </span>            <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span>
<span class="hljs-meta">... </span>            encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = tf.convert_to_tensor(item.float_answer,dtype=tf.float32)
<span class="hljs-meta">... </span>            <span class="hljs-keyword">yield</span> encoding[<span class="hljs-string">&#x27;input_ids&#x27;</span>], encoding[<span class="hljs-string">&#x27;attention_mask&#x27;</span>], encoding[<span class="hljs-string">&#x27;numeric_values&#x27;</span>], \\
<span class="hljs-meta">... </span>                  encoding[<span class="hljs-string">&#x27;numeric_values_scale&#x27;</span>], encoding[<span class="hljs-string">&#x27;token_type_ids&#x27;</span>], encoding[<span class="hljs-string">&#x27;labels&#x27;</span>], \\
<span class="hljs-meta">... </span>                  encoding[<span class="hljs-string">&#x27;float_answer&#x27;</span>]
...
<span class="hljs-meta">... </span>    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):
<span class="hljs-meta">... </span>       <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&#x27;\\t&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataset = TableDataset(data, tokenizer)
<span class="hljs-meta">&gt;&gt;&gt; </span>output_signature = (
<span class="hljs-meta">... </span>tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),
<span class="hljs-meta">... </span>tf.TensorSpec(shape=(<span class="hljs-number">512</span>,<span class="hljs-number">7</span>), dtype=tf.int32),
<span class="hljs-meta">... </span>tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),
<span class="hljs-meta">... </span>tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32))
<span class="hljs-meta">&gt;&gt;&gt; </span>train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(<span class="hljs-number">32</span>)`}}}),Ia=new Ur({props:{pt:{code:`from transformers import TapasConfig, TapasForQuestionAnswering, AdamW

# this is the default WTQ configuration
config = TapasConfig(
           num_aggregation_labels = 4,
           use_answer_as_supervision = True,
           answer_loss_cutoff = 0.664694,
           cell_selection_preference = 0.207951,
           huber_loss_delta = 0.121194,
           init_cell_selection_weights_to_zero = True,
           select_one_column = True,
           allow_empty_column_selection = False,
           temperature = 0.0352513,
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
        outputs = model(input_ids=input_ids, attention_mask=attention_mask, token_type_ids=token_type_ids, 
                       labels=labels, numeric_values=numeric_values, numeric_values_scale=numeric_values_scale, 
                       float_answer=float_answer)
        loss = outputs.loss
        loss.backward()
        optimizer.step()`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering, AdamW

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is the default WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(
<span class="hljs-meta">... </span>           num_aggregation_labels = <span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>           use_answer_as_supervision = <span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>           answer_loss_cutoff = <span class="hljs-number">0.664694</span>,
<span class="hljs-meta">... </span>           cell_selection_preference = <span class="hljs-number">0.207951</span>,
<span class="hljs-meta">... </span>           huber_loss_delta = <span class="hljs-number">0.121194</span>,
<span class="hljs-meta">... </span>           init_cell_selection_weights_to_zero = <span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>           select_one_column = <span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>           allow_empty_column_selection = <span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>           temperature = <span class="hljs-number">0.0352513</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>model.train()
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span>
<span class="hljs-meta">... </span>   <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># get the inputs; </span>
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
<span class="hljs-meta">... </span>        outputs = model(input_ids=input_ids, attention_mask=attention_mask, token_type_ids=token_type_ids, 
<span class="hljs-meta">... </span>                       labels=labels, numeric_values=numeric_values, numeric_values_scale=numeric_values_scale, 
<span class="hljs-meta">... </span>                       float_answer=float_answer)
<span class="hljs-meta">... </span>        loss = outputs.loss
<span class="hljs-meta">... </span>        loss.backward()
<span class="hljs-meta">... </span>        optimizer.step()`},tf:{code:`import tensorflow as tf
from transformers import TapasConfig, TFTapasForQuestionAnswering

# this is the default WTQ configuration
config = TapasConfig(
           num_aggregation_labels = 4,
           use_answer_as_supervision = True,
           answer_loss_cutoff = 0.664694,
           cell_selection_preference = 0.207951,
           huber_loss_delta = 0.121194,
           init_cell_selection_weights_to_zero = True,
           select_one_column = True,
           allow_empty_column_selection = False,
           temperature = 0.0352513,
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
             outputs = model(input_ids=input_ids, attention_mask=attention_mask, token_type_ids=token_type_ids, 
                       labels=labels, numeric_values=numeric_values, numeric_values_scale=numeric_values_scale, 
                       float_answer=float_answer )
        grads = tape.gradient(outputs.loss, model.trainable_weights)
        optimizer.apply_gradients(zip(grads, model.trainable_weights))`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># this is the default WTQ configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>config = TapasConfig(
<span class="hljs-meta">... </span>           num_aggregation_labels = <span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>           use_answer_as_supervision = <span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>           answer_loss_cutoff = <span class="hljs-number">0.664694</span>,
<span class="hljs-meta">... </span>           cell_selection_preference = <span class="hljs-number">0.207951</span>,
<span class="hljs-meta">... </span>           huber_loss_delta = <span class="hljs-number">0.121194</span>,
<span class="hljs-meta">... </span>           init_cell_selection_weights_to_zero = <span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>           select_one_column = <span class="hljs-literal">True</span>,
<span class="hljs-meta">... </span>           allow_empty_column_selection = <span class="hljs-literal">False</span>,
<span class="hljs-meta">... </span>           temperature = <span class="hljs-number">0.0352513</span>,
<span class="hljs-meta">... </span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)

<span class="hljs-meta">&gt;&gt;&gt; </span>optimizer = tf.keras.optimizers.Adam(learning_rate=<span class="hljs-number">5e-5</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span>
<span class="hljs-meta">... </span>   <span class="hljs-keyword">for</span> batch <span class="hljs-keyword">in</span> train_dataloader:
<span class="hljs-meta">... </span>        <span class="hljs-comment"># get the inputs; </span>
<span class="hljs-meta">... </span>        input_ids = batch[<span class="hljs-number">0</span>]
<span class="hljs-meta">... </span>        attention_mask = batch[<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        token_type_ids = batch[<span class="hljs-number">4</span>]
<span class="hljs-meta">... </span>        labels = batch[-<span class="hljs-number">1</span>]
<span class="hljs-meta">... </span>        numeric_values = batch[<span class="hljs-number">2</span>]
<span class="hljs-meta">... </span>        numeric_values_scale = batch[<span class="hljs-number">3</span>]
<span class="hljs-meta">... </span>        float_answer = batch[<span class="hljs-number">6</span>]

<span class="hljs-meta">... </span>        <span class="hljs-comment"># forward + backward + optimize</span>
<span class="hljs-meta">... </span>        <span class="hljs-keyword">with</span> tf.GradientTape() <span class="hljs-keyword">as</span> tape:
<span class="hljs-meta">... </span>             outputs = model(input_ids=input_ids, attention_mask=attention_mask, token_type_ids=token_type_ids, 
<span class="hljs-meta">... </span>                       labels=labels, numeric_values=numeric_values, numeric_values_scale=numeric_values_scale, 
<span class="hljs-meta">... </span>                       float_answer=float_answer )
<span class="hljs-meta">... </span>        grads = tape.gradient(outputs.loss, model.trainable_weights)
<span class="hljs-meta">... </span>        optimizer.apply_gradients(<span class="hljs-built_in">zip</span>(grads, model.trainable_weights))`}}}),Wa=new ss({}),Ua=new Ur({props:{pt:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd 

model_name = 'google/tapas-base-finetuned-wtq'
model = TapasForQuestionAnswering.from_pretrained(model_name)
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], 'Number of movies': ["87", "53", "69"]}
queries = ["What is the name of the first actor?", "How many movies has George Clooney played in?", "What is the total number of movies?"]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, padding='max_length', return_tensors="pt") 
outputs = model(**inputs)
predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
        inputs, 
        outputs.logits.detach(), 
        outputs.logits_aggregation.detach()
)

# let's print out the results:
id2aggregation = {0: "NONE", 1: "SUM", 2: "AVERAGE", 3:"COUNT"}
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
    print("Predicted answer: " + predicted_agg + " > " + answer)    `,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd 

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&#x27;google/tapas-base-finetuned-wtq&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>, <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&#x27;max_length&#x27;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>) 
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
<span class="hljs-meta">... </span>        inputs, 
<span class="hljs-meta">... </span>        outputs.logits.detach(), 
<span class="hljs-meta">... </span>        outputs.logits_aggregation.detach()
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s print out the results:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>:<span class="hljs-string">&quot;COUNT&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]

<span class="hljs-meta">&gt;&gt;&gt; </span>answers = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:
<span class="hljs-meta">... </span>  <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>    <span class="hljs-comment"># only a single cell:</span>
<span class="hljs-meta">... </span>    answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])
<span class="hljs-meta">... </span>  <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>    <span class="hljs-comment"># multiple cells</span>
<span class="hljs-meta">... </span>    cell_values = []
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:
<span class="hljs-meta">... </span>       cell_values.append(table.iat[coordinate])
<span class="hljs-meta">... </span>    answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))

<span class="hljs-meta">&gt;&gt;&gt; </span>display(table)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):
<span class="hljs-meta">... </span>  <span class="hljs-built_in">print</span>(query)
<span class="hljs-meta">... </span>  <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)
<span class="hljs-meta">... </span>  <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)    
What <span class="hljs-keyword">is</span> the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played <span class="hljs-keyword">in</span>?
Predicted answer: COUNT &gt; <span class="hljs-number">69</span>
What <span class="hljs-keyword">is</span> the total number of movies?
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`},tf:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
import pandas as pd 

model_name = 'google/tapas-base-finetuned-wtq'
model = TFTapasForQuestionAnswering.from_pretrained(model_name)
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], 'Number of movies': ["87", "53", "69"]}
queries = ["What is the name of the first actor?", "How many movies has George Clooney played in?", "What is the total number of movies?"]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, padding='max_length', return_tensors="tf") 
outputs = model(**inputs)
predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
        inputs, 
        outputs.logits, 
        outputs.logits_aggregation
)

# let's print out the results:
id2aggregation = {0: "NONE", 1: "SUM", 2: "AVERAGE", 3:"COUNT"}
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
    print("Predicted answer: " + predicted_agg + " > " + answer)    `,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd 

<span class="hljs-meta">&gt;&gt;&gt; </span>model_name = <span class="hljs-string">&#x27;google/tapas-base-finetuned-wtq&#x27;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(model_name)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(model_name)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>, <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&#x27;max_length&#x27;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>) 
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(
<span class="hljs-meta">... </span>        inputs, 
<span class="hljs-meta">... </span>        outputs.logits, 
<span class="hljs-meta">... </span>        outputs.logits_aggregation
<span class="hljs-meta">... </span>)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># let&#x27;s print out the results:</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>:<span class="hljs-string">&quot;COUNT&quot;</span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]

<span class="hljs-meta">&gt;&gt;&gt; </span>answers = []
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:
<span class="hljs-meta">... </span>  <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:
<span class="hljs-meta">... </span>    <span class="hljs-comment"># only a single cell:</span>
<span class="hljs-meta">... </span>    answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])
<span class="hljs-meta">... </span>  <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>    <span class="hljs-comment"># multiple cells</span>
<span class="hljs-meta">... </span>    cell_values = []
<span class="hljs-meta">... </span>    <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:
<span class="hljs-meta">... </span>       cell_values.append(table.iat[coordinate])
<span class="hljs-meta">... </span>    answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))

<span class="hljs-meta">&gt;&gt;&gt; </span>display(table)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):
<span class="hljs-meta">... </span>  <span class="hljs-built_in">print</span>(query)
<span class="hljs-meta">... </span>  <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)
<span class="hljs-meta">... </span>  <span class="hljs-keyword">else</span>:
<span class="hljs-meta">... </span>    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)    
What <span class="hljs-keyword">is</span> the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played <span class="hljs-keyword">in</span>?
Predicted answer: COUNT &gt; <span class="hljs-number">69</span>
What <span class="hljs-keyword">is</span> the total number of movies?
Predicted answer: SUM &gt; <span class="hljs-number">87</span>, <span class="hljs-number">53</span>, <span class="hljs-number">69</span>`}}}),Ga=new ss({}),Ra=new pe({props:{name:"class transformers.models.tapas.modeling\\_tapas.TableQuestionAnsweringOutput",anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_aggregation",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tapas.py#L106",parametersDescription:[{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) &#x2014;
Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.`,name:"loss"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the cell selection head, for every token.`,name:"logits"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits_aggregation",description:`<strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) &#x2014;
Prediction scores of the aggregation head, for every aggregation operator.`,name:"logits_aggregation"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of
each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the
weighted average in the self-attention heads.`,name:"attentions"}]}}),Ka=new ss({}),Ya=new pe({props:{name:"class transformers.TapasConfig",anchor:"transformers.TapasConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1024"},{name:"type_vocab_sizes",val:" = [3, 256, 256, 2, 256, 256, 10]"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"positive_label_weight",val:" = 10.0"},{name:"num_aggregation_labels",val:" = 0"},{name:"aggregation_loss_weight",val:" = 1.0"},{name:"use_answer_as_supervision",val:" = None"},{name:"answer_loss_importance",val:" = 1.0"},{name:"use_normalized_answer_loss",val:" = False"},{name:"huber_loss_delta",val:" = None"},{name:"temperature",val:" = 1.0"},{name:"aggregation_temperature",val:" = 1.0"},{name:"use_gumbel_for_cells",val:" = False"},{name:"use_gumbel_for_aggregation",val:" = False"},{name:"average_approximation_function",val:" = 'ratio'"},{name:"cell_selection_preference",val:" = None"},{name:"answer_loss_cutoff",val:" = None"},{name:"max_num_rows",val:" = 64"},{name:"max_num_columns",val:" = 32"},{name:"average_logits_per_cell",val:" = False"},{name:"select_one_column",val:" = True"},{name:"allow_empty_column_selection",val:" = False"},{name:"init_cell_selection_weights_to_zero",val:" = False"},{name:"reset_position_index_per_cell",val:" = True"},{name:"disable_per_token_loss",val:" = False"},{name:"aggregation_labels",val:" = None"},{name:"no_aggregation_label_index",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/configuration_tapas.py#L37",parametersDescription:[{anchor:"transformers.TapasConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the TAPAS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"vocab_size"},{anchor:"transformers.TapasConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
Dimensionality of the encoder layers and the pooler layer.`,name:"hidden_size"},{anchor:"transformers.TapasConfig.num_hidden_layers",description:`<strong>num_hidden_layers</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of hidden layers in the Transformer encoder.`,name:"num_hidden_layers"},{anchor:"transformers.TapasConfig.num_attention_heads",description:`<strong>num_attention_heads</strong> (<code>int</code>, <em>optional</em>, defaults to 12) &#x2014;
Number of attention heads for each attention layer in the Transformer encoder.`,name:"num_attention_heads"},{anchor:"transformers.TapasConfig.intermediate_size",description:`<strong>intermediate_size</strong> (<code>int</code>, <em>optional</em>, defaults to 3072) &#x2014;
Dimensionality of the &#x201C;intermediate&#x201D; (often named feed-forward) layer in the Transformer encoder.`,name:"intermediate_size"},{anchor:"transformers.TapasConfig.hidden_act",description:`<strong>hidden_act</strong> (<code>str</code> or <code>Callable</code>, <em>optional</em>, defaults to <code>&quot;gelu&quot;</code>) &#x2014;
The non-linear activation function (function or string) in the encoder and pooler. If string,
<code>&quot;gelu&quot;</code>, <code>&quot;relu&quot;</code>, <code>&quot;swish&quot;</code> and <code>&quot;gelu_new&quot;</code> are supported.`,name:"hidden_act"},{anchor:"transformers.TapasConfig.hidden_dropout_prob",description:`<strong>hidden_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout probability for all fully connected layers in the embeddings, encoder, and pooler.`,name:"hidden_dropout_prob"},{anchor:"transformers.TapasConfig.attention_probs_dropout_prob",description:`<strong>attention_probs_dropout_prob</strong> (<code>float</code>, <em>optional</em>, defaults to 0.1) &#x2014;
The dropout ratio for the attention probabilities.`,name:"attention_probs_dropout_prob"},{anchor:"transformers.TapasConfig.max_position_embeddings",description:`<strong>max_position_embeddings</strong> (<code>int</code>, <em>optional</em>, defaults to 1024) &#x2014;
The maximum sequence length that this model might ever be used with. Typically set this to something large
just in case (e.g., 512 or 1024 or 2048).`,name:"max_position_embeddings"},{anchor:"transformers.TapasConfig.type_vocab_sizes",description:`<strong>type_vocab_sizes</strong> (<code>List[int]</code>, <em>optional</em>, defaults to <code>[3, 256, 256, 2, 256, 256, 10]</code>) &#x2014;
The vocabulary sizes of the <code>token_type_ids</code> passed when calling <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"type_vocab_sizes"},{anchor:"transformers.TapasConfig.initializer_range",description:`<strong>initializer_range</strong> (<code>float</code>, <em>optional</em>, defaults to 0.02) &#x2014;
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
should be set to 0 for these models.`,name:"no_aggregation_label_index"}]}}),Za=new xt({props:{code:`from transformers import TapasModel, TapasConfig
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),en=new ss({}),sn=new pe({props:{name:"class transformers.TapasTokenizer",anchor:"transformers.TapasTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"empty_token",val:" = '[EMPTY]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"cell_trim_length",val:": int = -1"},{name:"max_column_id",val:": int = None"},{name:"max_row_id",val:": int = None"},{name:"strip_column_names",val:": bool = False"},{name:"update_answer_coordinates",val:": bool = False"},{name:"min_question_length",val:" = None"},{name:"max_question_length",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/tokenization_tapas.py#L190",parametersDescription:[{anchor:"transformers.TapasTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
Maximum length of each question in terms of tokens (will be skipped otherwise).`,name:"max_question_length"}]}}),tn=new pe({props:{name:"\\_\\_call\\_\\_",anchor:"transformers.TapasTokenizer.__call__",parameters:[{name:"table",val:": pd.DataFrame"},{name:"queries",val:": typing.Union[str, typing.List[str], typing.List[int], typing.List[typing.List[str]], typing.List[typing.List[int]], NoneType] = None"},{name:"answer_coordinates",val:": typing.Union[typing.List[typing.Tuple], typing.List[typing.List[typing.Tuple]], NoneType] = None"},{name:"answer_text",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.file_utils.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.models.tapas.tokenization_tapas.TapasTruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/tokenization_tapas.py#L531",parametersDescription:[{anchor:"transformers.TapasTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>) &#x2014;
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
Whether or not to encode the sequences with the special tokens relative to their model.`,name:"add_special_tokens"},{anchor:"transformers.TapasTokenizer.__call__.padding",description:`<strong>padding</strong> (<code>bool</code>, <code>str</code> or <a href="/docs/transformers/v4.15.0/en/internal/file_utils#transformers.file_utils.PaddingStrategy">PaddingStrategy</a>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls padding. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;longest&apos;</code>: Pad to the longest sequence in the batch (or no padding if only a
single sequence if provided).</li>
<li><code>&apos;max_length&apos;</code>: Pad to a maximum length specified with the argument <code>max_length</code> or to the
maximum acceptable input length for the model if that argument is not provided.</li>
<li><code>False</code> or <code>&apos;do_not_pad&apos;</code> (default): No padding (i.e., can output a batch with sequences of
different lengths).</li>
</ul>`,name:"padding"},{anchor:"transformers.TapasTokenizer.__call__.truncation",description:`<strong>truncation</strong> (<code>bool</code>, <code>str</code> or <code>TapasTruncationStrategy</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Activates and controls truncation. Accepts the following values:</p>
<ul>
<li><code>True</code> or <code>&apos;drop_rows_to_fit&apos;</code>: Truncate to a maximum length specified with the argument
<code>max_length</code> or to the maximum acceptable input length for the model if that argument is not
provided. This will truncate row by row, removing rows from the table.</li>
<li><code>False</code> or <code>&apos;do_not_truncate&apos;</code> (default): No truncation (i.e., can output batch with
sequence lengths greater than the model maximum admissible input size).</li>
</ul>`,name:"truncation"},{anchor:"transformers.TapasTokenizer.__call__.max_length",description:`<strong>max_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Controls the maximum length to use by one of the truncation/padding parameters.</p>
<p>If left unset or set to <code>None</code>, this will use the predefined model maximum length if a maximum
length is required by one of the truncation/padding parameters. If the model has no specific maximum
input length (like XLNet) truncation/padding to a maximum length will be deactivated.`,name:"max_length"},{anchor:"transformers.TapasTokenizer.__call__.is_split_into_words",description:`<strong>is_split_into_words</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not the input is already pre-tokenized (e.g., split into words). If set to <code>True</code>, the
tokenizer assumes the input is already split into words (for instance, by splitting it on whitespace)
which it will tokenize. This is useful for NER or token classification.`,name:"is_split_into_words"},{anchor:"transformers.TapasTokenizer.__call__.pad_to_multiple_of",description:`<strong>pad_to_multiple_of</strong> (<code>int</code>, <em>optional</em>) &#x2014;
If set will pad the sequence to a multiple of the provided value. This is especially useful to enable
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.TapasTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/v4.15.0/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}]}}),an=new pe({props:{name:"convert\\_logits\\_to\\_predictions",anchor:"transformers.TapasTokenizer.convert_logits_to_predictions",parameters:[{name:"data",val:""},{name:"logits",val:""},{name:"logits_agg",val:" = None"},{name:"cell_classification_threshold",val:" = 0.5"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/tokenization_tapas.py#L1891",parametersDescription:[{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.data",description:`<strong>data</strong> (<code>dict</code>) &#x2014;
Dictionary mapping features to actual values. Should be created using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.`,name:"data"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits",description:`<strong>logits</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Tensor containing the logits at the token level.`,name:"logits"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits_agg",description:`<strong>logits_agg</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_aggregation_labels)</code>, <em>optional</em>) &#x2014;
Tensor containing the aggregation logits.`,name:"logits_agg"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.cell_classification_threshold",description:`<strong>cell_classification_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to be used for cell selection. All table cells for which their probability is larger than
this threshold will be selected.`,name:"cell_classification_threshold"}],returnDescription:`
<ul>
<li>predicted_answer_coordinates (<code>List[List[[tuple]]</code> of length <code>batch_size</code>): Predicted answer
coordinates as a list of lists of tuples. Each element in the list contains the predicted answer
coordinates of a single example in the batch, as a list of tuples. Each tuple is a cell, i.e. (row index,
column index).</li>
<li>predicted_aggregation_indices (<code>List[int]</code>of length <code>batch_size</code>, <em>optional</em>, returned when
<code>logits_aggregation</code> is provided): Predicted aggregation operator indices of the aggregation head.</li>
</ul>
`,returnType:`
<p><code>tuple</code> comprising various elements depending on the inputs</p>
`}}),ln=new ss({}),dn=new pe({props:{name:"class transformers.TapasModel",anchor:"transformers.TapasModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tapas.py#L857",parametersDescription:[{anchor:"transformers.TapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),gn=new pe({props:{name:"forward",anchor:"transformers.TapasModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tapas.py#L896",parametersDescription:[{anchor:"transformers.TapasModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
position embeddings will be used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>transformers.modeling_outputs.BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ht=new Fs({props:{$$slots:{default:[O0]},$$scope:{ctx:U}}}),_n=new xt({props:{code:`from transformers import TapasTokenizer, TapasModel
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base')
model = TapasModel.from_pretrained('google/tapas-base')

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
        'Age': ["56", "45", "59"],
        'Number of movies': ["87", "53", "69"]
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Age&#x27;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Tn=new ss({}),vn=new pe({props:{name:"class transformers.TapasForMaskedLM",anchor:"transformers.TapasForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tapas.py#L1010",parametersDescription:[{anchor:"transformers.TapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),yn=new pe({props:{name:"forward",anchor:"transformers.TapasForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tapas.py#L1029",parametersDescription:[{anchor:"transformers.TapasForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
position embeddings will be used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>transformers.modeling_outputs.MaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Gt=new Fs({props:{$$slots:{default:[I0]},$$scope:{ctx:U}}}),kn=new xt({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base')
model = TapasForMaskedLM.from_pretrained('google/tapas-base')

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
        'Age': ["56", "45", "59"],
        'Number of movies': ["87", "53", "69"]
}
table = pd.DataFrame.from_dict(data)

inputs = tokenizer(table=table, queries="How many [MASK] has George [MASK] played in?", return_tensors="pt")
labels = tokenizer(table=table, queries="How many movies has George Clooney played in?", return_tensors="pt")["input_ids"]

outputs = model(**inputs, labels=labels)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForMaskedLM.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Age&#x27;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=<span class="hljs-string">&quot;How many [MASK] has George [MASK] played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(table=table, queries=<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),jn=new ss({}),qn=new pe({props:{name:"class transformers.TapasForSequenceClassification",anchor:"transformers.TapasForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tapas.py#L1462",parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),An=new pe({props:{name:"forward",anchor:"transformers.TapasForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tapas.py#L1474",parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
position embeddings will be used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>transformers.modeling_outputs.SequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Vt=new Fs({props:{$$slots:{default:[W0]},$$scope:{ctx:U}}}),zn=new xt({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
import torch
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base-finetuned-tabfact')
model = TapasForSequenceClassification.from_pretrained('google/tapas-base-finetuned-tabfact')

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
        'Age': ["56", "45", "59"],
        'Number of movies': ["87", "53", "69"]
}
table = pd.DataFrame.from_dict(data)
queries = ["There is only one actor who is 45 years old", "There are 3 actors which played in more than 60 movies"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
labels = torch.tensor([1, 0]) # 1 means entailed, 0 means refuted

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base-finetuned-tabfact&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base-finetuned-tabfact&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Age&#x27;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;There is only one actor who is 45 years old&quot;</span>, <span class="hljs-string">&quot;There are 3 actors which played in more than 60 movies&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>, <span class="hljs-number">0</span>]) <span class="hljs-comment"># 1 means entailed, 0 means refuted</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),$n=new ss({}),Cn=new pe({props:{name:"class transformers.TapasForQuestionAnswering",anchor:"transformers.TapasForQuestionAnswering",parameters:[{name:"config",val:": TapasConfig"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tapas.py#L1119",parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Dn=new pe({props:{name:"forward",anchor:"transformers.TapasForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"table_mask",val:" = None"},{name:"labels",val:" = None"},{name:"aggregation_labels",val:" = None"},{name:"float_answer",val:" = None"},{name:"numeric_values",val:" = None"},{name:"numeric_values_scale",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tapas.py#L1154",parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
position embeddings will be used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>: - 1
indicates the head is <strong>not masked</strong>, - 0 indicates the head is <strong>masked</strong>.`,name:"head_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TapasForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.TapasForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.TapasForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForQuestionAnswering.forward.table_mask",description:`<strong>table_mask</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
<ul>
<li>1 for tokens that are <strong>part of the answer</strong>,</li>
<li>0 for tokens that are <strong>not part of the answer</strong>.</li>
</ul>`,name:"labels"},{anchor:"transformers.TapasForQuestionAnswering.forward.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Aggregation function index for every example in the batch for computing the aggregation loss. Indices
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong
supervision for aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TapasForQuestionAnswering.forward.float_answer",description:`<strong>float_answer</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values",description:`<strong>numeric_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to
calculate the regression loss.`,name:"numeric_values"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.
Only required in case of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) \u2014 Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.</li>
<li><strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the cell selection head, for every token.</li>
<li><strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) \u2014 Prediction scores of the aggregation head, for every aggregation operator.</li>
<li><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of
each layer plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the
weighted average in the self-attention heads.</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yt=new Fs({props:{$$slots:{default:[U0]},$$scope:{ctx:U}}}),Nn=new xt({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base-finetuned-wtq')
model = TapasForQuestionAnswering.from_pretrained('google/tapas-base-finetuned-wtq')

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
        'Age': ["56", "45", "59"],
        'Number of movies': ["87", "53", "69"]
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="pt")
outputs = model(**inputs)

logits = outputs.logits
logits_aggregation = outputs.logits_aggregation,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base-finetuned-wtq&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base-finetuned-wtq&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Age&#x27;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),Ln=new ss({}),Qn=new pe({props:{name:"class transformers.TFTapasModel",anchor:"transformers.TFTapasModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tf_tapas.py#L977",parametersDescription:[{anchor:"transformers.TFTapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Xt=new Fs({props:{$$slots:{default:[H0]},$$scope:{ctx:U}}}),Un=new pe({props:{name:"call",anchor:"transformers.TFTapasModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tf_tapas.py#L983",parametersDescription:[{anchor:"transformers.TFTapasModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
position embeddings will be used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig"
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Zt=new Fs({props:{$$slots:{default:[B0]},$$scope:{ctx:U}}}),Hn=new xt({props:{code:`from transformers import TapasTokenizer, TapasModel
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base')
model = TapasModel.from_pretrained('google/tapas-base')

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
        'Age': ["56", "45", "59"],
        'Number of movies': ["87", "53", "69"]
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasModel.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Age&#x27;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Bn=new ss({}),Gn=new pe({props:{name:"class transformers.TFTapasForMaskedLM",anchor:"transformers.TFTapasForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tf_tapas.py#L1066",parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),sa=new Fs({props:{$$slots:{default:[G0]},$$scope:{ctx:U}}}),Jn=new pe({props:{name:"call",anchor:"transformers.TFTapasForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tf_tapas.py#L1082",parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
position embeddings will be used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>transformers.modeling_tf_outputs.TFMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),ta=new Fs({props:{$$slots:{default:[R0]},$$scope:{ctx:U}}}),Xn=new xt({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base')
model = TapasForMaskedLM.from_pretrained('google/tapas-base')

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
        'Age': ["56", "45", "59"],
        'Number of movies': ["87", "53", "69"]
}
table = pd.DataFrame.from_dict(data)

inputs = tokenizer(table=table, queries="How many [MASK] has George [MASK] played in?", return_tensors="tf")
labels = tokenizer(table=table, queries="How many movies has George Clooney played in?", return_tensors="tf")["input_ids"]

outputs = model(**inputs, labels=labels)
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForMaskedLM.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Age&#x27;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=<span class="hljs-string">&quot;How many [MASK] has George [MASK] played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tokenizer(table=table, queries=<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Zn=new ss({}),eo=new pe({props:{name:"class transformers.TFTapasForSequenceClassification",anchor:"transformers.TFTapasForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tf_tapas.py#L1640",parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),na=new Fs({props:{$$slots:{default:[V0]},$$scope:{ctx:U}}}),no=new pe({props:{name:"call",anchor:"transformers.TFTapasForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tf_tapas.py#L1651",parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
position embeddings will be used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
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
  href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>transformers.modeling_tf_outputs.TFSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),oa=new Fs({props:{$$slots:{default:[K0]},$$scope:{ctx:U}}}),oo=new xt({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
import tensorflow as tf
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base-finetuned-tabfact')
model = TapasForSequenceClassification.from_pretrained('google/tapas-base-finetuned-tabfact')

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
        'Age': ["56", "45", "59"],
        'Number of movies': ["87", "53", "69"]
}
table = pd.DataFrame.from_dict(data)
queries = ["There is only one actor who is 45 years old", "There are 3 actors which played in more than 60 movies"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
labels = tf.convert_to_tensor([1, 0]) # 1 means entailed, 0 means refuted

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base-finetuned-tabfact&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base-finetuned-tabfact&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Age&#x27;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;There is only one actor who is 45 years old&quot;</span>, <span class="hljs-string">&quot;There are 3 actors which played in more than 60 movies&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = tf.convert_to_tensor([<span class="hljs-number">1</span>, <span class="hljs-number">0</span>]) <span class="hljs-comment"># 1 means entailed, 0 means refuted</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),ro=new ss({}),io=new pe({props:{name:"class transformers.TFTapasForQuestionAnswering",anchor:"transformers.TFTapasForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tf_tapas.py#L1284",parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),ia=new Fs({props:{$$slots:{default:[Y0]},$$scope:{ctx:U}}}),ho=new pe({props:{name:"call",anchor:"transformers.TFTapasForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"table_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"aggregation_labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"float_answer",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values_scale",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/v4.15.0/src/transformers/models/tapas/modeling_tf_tapas.py#L1306",parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/v4.15.0/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
position embeddings will be used. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(num_heads,)</code> or <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the self-attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation.
This is useful if you want more control over how to convert <code>input_ids</code> indices into associated
vectors than the model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFTapasForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFTapasForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFTapasForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/v4.15.0/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to \`False&#x201C;) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForQuestionAnswering.call.table_mask",description:`<strong>table_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Mask for the table. Indicates which tokens belong to the table (1). Question tokens, table headers and
padding are 0.`,name:"table_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Labels per token for computing the hierarchical cell selection loss. This encodes the positions of the
answer appearing in the table. Can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.</p>
<ul>
<li>1 for tokens that are <strong>part of the answer</strong>,</li>
<li>0 for tokens that are <strong>not part of the answer</strong>.</li>
</ul>`,name:"labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.aggregation_labels",description:`<strong>aggregation_labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Aggregation function index for every example in the batch for computing the aggregation loss. Indices
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong
supervision for aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.float_answer",description:`<strong>float_answer</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values",description:`<strong>numeric_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to
calculate the regression loss.`,name:"numeric_values"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.
Only required in case of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],returnDescription:`
<p>A <code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig"
>TapasConfig</a>) and inputs.</p>
<ul>
<li><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) \u2014 Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.</li>
<li><strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) \u2014 Prediction scores of the cell selection head, for every token.</li>
<li><strong>logits_aggregation</strong> (<code>tf.Tensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) \u2014 Prediction scores of the aggregation head, for every aggregation operator.</li>
<li><strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of each
layer plus the initial embedding outputs.</li>
<li><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the weighted average in
the self-attention heads.</li>
</ul>
`,returnType:`
<p><code>transformers.models.tapas.modeling_tf_tapas.TFTableQuestionAnsweringOutput</code> or <code>tuple(tf.Tensor)</code></p>
`}}),la=new Fs({props:{$$slots:{default:[J0]},$$scope:{ctx:U}}}),uo=new xt({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base-finetuned-wtq')
model = TapasForQuestionAnswering.from_pretrained('google/tapas-base-finetuned-wtq')

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"],
        'Age': ["56", "45", "59"],
        'Number of movies': ["87", "53", "69"]
}
table = pd.DataFrame.from_dict(data)
queries = ["How many movies has George Clooney played in?", "How old is Brad Pitt?"]

inputs = tokenizer(table=table, queries=queries, padding="max_length", return_tensors="tf")
outputs = model(**inputs)

logits = outputs.logits
logits_aggregation = outputs.logits_aggregation,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base-finetuned-wtq&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base-finetuned-wtq&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Age&#x27;</span>: [<span class="hljs-string">&quot;56&quot;</span>, <span class="hljs-string">&quot;45&quot;</span>, <span class="hljs-string">&quot;59&quot;</span>],
<span class="hljs-meta">... </span>        <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]
<span class="hljs-meta">... </span>}
<span class="hljs-meta">&gt;&gt;&gt; </span>table = pd.DataFrame.from_dict(data)
<span class="hljs-meta">&gt;&gt;&gt; </span>queries = [<span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;How old is Brad Pitt?&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&quot;max_length&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),{c(){m=o("meta"),x=l(),f=o("h1"),g=o("a"),q=o("span"),v(T.$$.fragment),_=l(),F=o("span"),_e=a("TAPAS"),K=l(),A=o("h2"),Y=o("a"),O=o("span"),v(Z.$$.fragment),Te=l(),I=o("span"),ve=a("Overview"),ce=l(),W=o("p"),N=a("The TAPAS model was proposed in "),ee=o("a"),se=a("TAPAS: Weakly Supervised Table Parsing via Pre-training"),z=a(`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),$=l(),oe=o("p"),H=a("For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),he=l(),V=o("ul"),L=o("li"),te=o("a"),be=a("SQA"),C=a(" (Sequential Question Answering by Microsoft)"),we=l(),Q=o("li"),ae=o("a"),ye=a("WTQ"),B=a(" (Wiki Table Questions by Stanford University)"),ke=l(),re=o("li"),P=o("a"),je=a("WikiSQL"),G=a(" (by Salesforce)."),ue=l(),u=o("p"),E=a("It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),J=l(),xe=o("p"),Ge=a("The abstract from the paper is the following:"),S=l(),Fe=o("p"),$e=o("em"),Re=a("Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),D=l(),M=o("p"),Ve=a("In addition, the authors have further pre-trained TAPAS to recognize "),Ce=o("strong"),R=a("table entailment"),Ke=a(", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),qe=o("a"),Ee=a("TabFact"),Ye=a(", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),fa=o("a"),ih=a("Understanding tables with intermediate pre-training"),lh=a(" by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),ap=l(),Ft=o("img"),np=l(),_o=o("small"),dh=a("TAPAS architecture. Taken from the [official blog post](https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html)."),op=l(),_s=o("p"),ph=a("This model was contributed by "),ga=o("a"),ch=a("nielsr"),hh=a(". The Tensorflow version of this model was contributed by "),_a=o("a"),uh=a("kamalkraj"),mh=a(". The original code can be found "),Ta=o("a"),fh=a("here"),gh=a("."),rp=l(),To=o("p"),_h=a("Tips:"),ip=l(),Ts=o("ul"),Me=o("li"),Th=a("TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Hr=o("code"),vh=a("reset_position_index_per_cell"),bh=a(" parameter of "),vo=o("a"),wh=a("TapasConfig"),yh=a(", which is set to "),Br=o("code"),kh=a("True"),jh=a(" by default. The default versions of the models available on the "),va=o("a"),qh=a("hub"),Eh=a(" all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),Gr=o("code"),xh=a('revision="no_reset"'),Fh=a(" when calling the "),Rr=o("code"),Ah=a("from_pretrained()"),zh=a(" method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),$h=l(),Je=o("li"),Ch=a("TAPAS is based on BERT, so "),Vr=o("code"),Mh=a("TAPAS-base"),Ph=a(" for example corresponds to a "),Kr=o("code"),Sh=a("BERT-base"),Dh=a(" architecture. Of course, "),Yr=o("code"),Nh=a("TAPAS-large"),Lh=a(" will result in the best performance (the results reported in the paper are from "),Jr=o("code"),Qh=a("TAPAS-large"),Oh=a("). Results of the various sized models are shown on the "),ba=o("a"),Ih=a("original Github repository"),Wh=a("."),Uh=l(),Vs=o("li"),Hh=a("TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),Xr=o("code"),Bh=a("prev_labels"),Gh=a(" token type ids can be overwritten by the predicted "),Zr=o("code"),Rh=a("labels"),Vh=a(" of the model to the previous question. See \u201CUsage\u201D section for more info."),Kh=l(),ei=o("li"),Yh=a("TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),lp=l(),Ks=o("h2"),At=o("a"),si=o("span"),v(wa.$$.fragment),Jh=l(),ti=o("span"),Xh=a("Usage: fine-tuning"),dp=l(),zt=o("p"),Zh=a("Here we explain how you can fine-tune "),bo=o("a"),eu=a("TapasForQuestionAnswering"),su=a(" on your own dataset."),pp=l(),wo=o("p"),ai=o("strong"),tu=a("STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),cp=l(),$t=o("p"),au=a("Basically, there are 3 different ways in which one can fine-tune "),yo=o("a"),nu=a("TapasForQuestionAnswering"),ou=a(", corresponding to the different datasets on which Tapas was fine-tuned:"),hp=l(),zs=o("ol"),ni=o("li"),ru=a("SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),iu=l(),ya=o("li"),lu=a("WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),oi=o("strong"),du=a("weak supervision"),pu=a(", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),cu=l(),ka=o("li"),hu=a("WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ri=o("strong"),uu=a("strong supervision"),mu=a(". Here, learning the appropriate aggregation operator is much easier."),up=l(),ko=o("p"),fu=a("To summarize:"),mp=l(),Ct=o("table"),ii=o("thead"),Ys=o("tr"),li=o("th"),di=o("strong"),gu=a("Task"),_u=l(),pi=o("th"),ci=o("strong"),Tu=a("Example dataset"),vu=l(),hi=o("th"),ui=o("strong"),bu=a("Description"),wu=l(),Js=o("tbody"),Xs=o("tr"),mi=o("td"),yu=a("Conversational"),ku=l(),fi=o("td"),ju=a("SQA"),qu=l(),gi=o("td"),Eu=a("Conversational, only cell selection questions"),xu=l(),Zs=o("tr"),_i=o("td"),Fu=a("Weak supervision for aggregation"),Au=l(),Ti=o("td"),zu=a("WTQ"),$u=l(),vi=o("td"),Cu=a("Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Mu=l(),et=o("tr"),bi=o("td"),Pu=a("Strong supervision for aggregation"),Su=l(),wi=o("td"),Du=a("WikiSQL-supervised"),Nu=l(),yi=o("td"),Lu=a("Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),fp=l(),$s=o("p"),Qu=a(`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),ja=o("a"),Ou=a("torch-scatter"),Iu=a(" dependency for your environment in case you\u2019re using PyTorch, or the "),qa=o("a"),Wu=a("tensorflow_probability"),Uu=a(`
dependency in case you\u2019re using Tensorflow:`),gp=l(),v(Ea.$$.fragment),_p=l(),Cs=o("p"),Hu=a("Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),jo=o("a"),Bu=a("TapasConfig"),Gu=a(", and then create a "),qo=o("a"),Ru=a("TapasForQuestionAnswering"),Vu=a(" based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),Tp=l(),v(xa.$$.fragment),vp=l(),Mt=o("p"),Ku=a("What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),Fa=o("a"),Yu=a("here"),Ju=a(" for more info."),bp=l(),Pt=o("p"),Xu=a("For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),Aa=o("a"),Zu=a("here"),em=a("."),wp=l(),Eo=o("p"),ki=o("strong"),sm=a("STEP 2: Prepare your data in the SQA format"),yp=l(),St=o("p"),tm=a("Second, no matter what you picked above, you should prepare your dataset in the "),za=o("a"),am=a("SQA"),nm=a(" format. This format is a TSV/CSV file with the following columns:"),kp=l(),ie=o("ul"),xo=o("li"),ji=o("code"),om=a("id"),rm=a(": optional, id of the table-question pair, for bookkeeping purposes."),im=l(),Fo=o("li"),qi=o("code"),lm=a("annotator"),dm=a(": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),pm=l(),Ao=o("li"),Ei=o("code"),cm=a("position"),hm=a(": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),um=l(),zo=o("li"),xi=o("code"),mm=a("question"),fm=a(": string"),gm=l(),$o=o("li"),Fi=o("code"),_m=a("table_file"),Tm=a(": string, name of a csv file containing the tabular data"),vm=l(),Co=o("li"),Ai=o("code"),bm=a("answer_coordinates"),wm=a(": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),ym=l(),Mo=o("li"),zi=o("code"),km=a("answer_text"),jm=a(": list of one or more strings (each string being a cell value that is part of the answer)"),qm=l(),Po=o("li"),$i=o("code"),Em=a("aggregation_label"),xm=a(": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Fm=l(),So=o("li"),Ci=o("code"),Am=a("float_answer"),zm=a(": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),jp=l(),We=o("p"),$m=a("The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),$a=o("a"),Cm=a("here"),Mm=a(". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),Ca=o("a"),Pm=a("here"),Sm=a(". Interestingly, these conversion scripts are not perfect (the "),Mi=o("code"),Dm=a("answer_coordinates"),Nm=a(" and "),Pi=o("code"),Lm=a("float_answer"),Qm=a(" fields are populated based on the "),Si=o("code"),Om=a("answer_text"),Im=a("), meaning that WTQ and WikiSQL results could actually be improved."),qp=l(),Do=o("p"),Di=o("strong"),Wm=a("STEP 3: Convert your data into PyTorch/TensorFlow tensors using TapasTokenizer"),Ep=l(),Ae=o("p"),Um=a("Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),No=o("a"),Hm=a("TapasTokenizer"),Bm=a(" to convert table-question pairs into "),Ni=o("code"),Gm=a("input_ids"),Rm=a(", "),Li=o("code"),Vm=a("attention_mask"),Km=a(", "),Qi=o("code"),Ym=a("token_type_ids"),Jm=a(" and so on. Again, based on which of the three cases you picked above, "),Lo=o("a"),Xm=a("TapasForQuestionAnswering"),Zm=a("/"),Qo=o("a"),ef=a("TFTapasForQuestionAnswering"),sf=a(` requires different
inputs to be fine-tuned:`),xp=l(),Dt=o("table"),Oi=o("thead"),Ma=o("tr"),Ii=o("th"),Wi=o("strong"),tf=a("Task"),af=l(),Ui=o("th"),Hi=o("strong"),nf=a("Required inputs"),of=l(),st=o("tbody"),Pa=o("tr"),Bi=o("td"),rf=a("Conversational"),lf=l(),As=o("td"),Gi=o("code"),df=a("input_ids"),pf=a(", "),Ri=o("code"),cf=a("attention_mask"),hf=a(", "),Vi=o("code"),uf=a("token_type_ids"),mf=a(", "),Ki=o("code"),ff=a("labels"),gf=l(),Sa=o("tr"),Yi=o("td"),_f=a("Weak supervision for aggregation"),Tf=l(),Pe=o("td"),Ji=o("code"),vf=a("input_ids"),bf=a(", "),Xi=o("code"),wf=a("attention_mask"),yf=a(", "),Zi=o("code"),kf=a("token_type_ids"),jf=a(", "),el=o("code"),qf=a("labels"),Ef=a(", "),sl=o("code"),xf=a("numeric_values"),Ff=a(", "),tl=o("code"),Af=a("numeric_values_scale"),zf=a(", "),al=o("code"),$f=a("float_answer"),Cf=l(),Da=o("tr"),nl=o("td"),Mf=a("Strong supervision for aggregation"),Pf=l(),ms=o("td"),ol=o("code"),Sf=a("input ids"),Df=a(", "),rl=o("code"),Nf=a("attention mask"),Lf=a(", "),il=o("code"),Qf=a("token type ids"),Of=a(", "),ll=o("code"),If=a("labels"),Wf=a(", "),dl=o("code"),Uf=a("aggregation_labels"),Fp=l(),le=o("p"),Oo=o("a"),Hf=a("TapasTokenizer"),Bf=a(" creates the "),pl=o("code"),Gf=a("labels"),Rf=a(", "),cl=o("code"),Vf=a("numeric_values"),Kf=a(" and "),hl=o("code"),Yf=a("numeric_values_scale"),Jf=a(" based on the "),ul=o("code"),Xf=a("answer_coordinates"),Zf=a(" and "),ml=o("code"),eg=a("answer_text"),sg=a(" columns of the TSV file. The "),fl=o("code"),tg=a("float_answer"),ag=a(" and "),gl=o("code"),ng=a("aggregation_labels"),og=a(" are already in the TSV file of step 2. Here\u2019s an example:"),Ap=l(),v(Na.$$.fragment),zp=l(),vs=o("p"),rg=a("Note that "),Io=o("a"),ig=a("TapasTokenizer"),lg=a(" expects the data of the table to be "),_l=o("strong"),dg=a("text-only"),pg=a(". You can use "),Tl=o("code"),cg=a(".astype(str)"),hg=a(` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),$p=l(),v(La.$$.fragment),Cp=l(),X=o("p"),ug=a("Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),vl=o("strong"),mg=a("not conversational"),fg=a(". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),bl=o("code"),gg=a("queries"),_g=a(", "),wl=o("code"),Tg=a("answer_coordinates"),vg=a(" and "),yl=o("code"),bg=a("answer_text"),wg=a(" per table (in the order of their "),kl=o("code"),yg=a("position"),kg=a(`
index) and batch encode each table with its questions. This will make sure that the `),jl=o("code"),jg=a("prev_labels"),qg=a(" token types (see docs of "),Wo=o("a"),Eg=a("TapasTokenizer"),xg=a(") are set correctly. See "),Qa=o("a"),Fg=a("this notebook"),Ag=a(" for more info. See "),Oa=o("a"),zg=a("this notebook"),$g=a(" for more info regarding using the TensorFlow model."),Mp=l(),Uo=o("p"),ql=o("strong"),Cg=a("STEP 4: Train (fine-tune) TapasForQuestionAnswering/TFTapasForQuestionAnswering"),Pp=l(),Ms=o("p"),Mg=a("You can then fine-tune "),Ho=o("a"),Pg=a("TapasForQuestionAnswering"),Sg=a(" or "),Bo=o("a"),Dg=a("TFTapasForQuestionAnswering"),Ng=a(" as follows (shown here for the weak supervision for aggregation case):"),Sp=l(),v(Ia.$$.fragment),Dp=l(),tt=o("h2"),Nt=o("a"),El=o("span"),v(Wa.$$.fragment),Lg=l(),xl=o("span"),Qg=a("Usage: inference"),Np=l(),me=o("p"),Og=a("Here we explain how you can use "),Go=o("a"),Ig=a("TapasForQuestionAnswering"),Wg=a(" or "),Ro=o("a"),Ug=a("TFTapasForQuestionAnswering"),Hg=a(" for inference (i.e. making predictions on new data). For inference, only "),Fl=o("code"),Bg=a("input_ids"),Gg=a(", "),Al=o("code"),Rg=a("attention_mask"),Vg=a(" and "),zl=o("code"),Kg=a("token_type_ids"),Yg=a(" (which you can obtain using "),Vo=o("a"),Jg=a("TapasTokenizer"),Xg=a(") have to be provided to the model to obtain the logits. Next, you can use the handy "),$l=o("code"),Zg=a("convert_logits_to_predictions"),e_=a(" method to convert these into predicted coordinates and optional aggregation indices."),Lp=l(),Lt=o("p"),s_=a("However, note that inference is "),Cl=o("strong"),t_=a("different"),a_=a(" depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),Qp=l(),v(Ua.$$.fragment),Op=l(),Ue=o("p"),n_=a("In case of a conversational set-up, then each table-question pair must be provided "),Ml=o("strong"),o_=a("sequentially"),r_=a(" to the model, such that the "),Pl=o("code"),i_=a("prev_labels"),l_=a(" token types can be overwritten by the predicted "),Sl=o("code"),d_=a("labels"),p_=a(" of the previous table-question pair. Again, more info can be found in "),Ha=o("a"),c_=a("this notebook"),h_=a(" (for PyTorch) and "),Ba=o("a"),u_=a("this notebook"),m_=a(" (for TensorFlow)."),Ip=l(),at=o("h2"),Qt=o("a"),Dl=o("span"),v(Ga.$$.fragment),f_=l(),Nl=o("span"),g_=a("TAPAS specific outputs"),Wp=l(),nt=o("div"),v(Ra.$$.fragment),__=l(),Va=o("p"),T_=a("Output type of "),Ko=o("a"),v_=a("TapasForQuestionAnswering"),b_=a("."),Up=l(),ot=o("h2"),Ot=o("a"),Ll=o("span"),v(Ka.$$.fragment),w_=l(),Ql=o("span"),y_=a("TapasConfig"),Hp=l(),Xe=o("div"),v(Ya.$$.fragment),k_=l(),fs=o("p"),j_=a("This is the configuration class to store the configuration of a "),Yo=o("a"),q_=a("TapasModel"),E_=a(`. It is used to
instantiate a TAPAS model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the TAPAS `),Ol=o("em"),x_=a("tapas-base-finetuned-sqa"),F_=a(`
architecture. Configuration objects inherit from `),Il=o("code"),A_=a("PreTrainedConfig"),z_=a(` and can be used to control
the model outputs. Read the documentation from `),Jo=o("a"),$_=a("PretrainedConfig"),C_=a(" for more information."),M_=l(),Ja=o("p"),P_=a(`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),Xa=o("a"),S_=a("https://github.com/google-research/tapas/tree/master"),D_=a("."),N_=l(),Wl=o("p"),L_=a("Example:"),Q_=l(),v(Za.$$.fragment),Bp=l(),rt=o("h2"),It=o("a"),Ul=o("span"),v(en.$$.fragment),O_=l(),Hl=o("span"),I_=a("TapasTokenizer"),Gp=l(),de=o("div"),v(sn.$$.fragment),W_=l(),Bl=o("p"),U_=a(`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),H_=l(),ne=o("p"),B_=a("This tokenizer inherits from "),Xo=o("a"),G_=a("PreTrainedTokenizer"),R_=a(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.
`),Zo=o("a"),V_=a("TapasTokenizer"),K_=a(` creates several token type ids to encode tabular structure. To be more
precise, it adds 7 token type ids, in the following order: `),Gl=o("code"),Y_=a("segment_ids"),J_=a(", "),Rl=o("code"),X_=a("column_ids"),Z_=a(", "),Vl=o("code"),eT=a("row_ids"),sT=a(`,
`),Kl=o("code"),tT=a("prev_labels"),aT=a(", "),Yl=o("code"),nT=a("column_ranks"),oT=a(", "),Jl=o("code"),rT=a("inv_column_ranks"),iT=a(" and "),Xl=o("code"),lT=a("numeric_relations"),dT=a(":"),pT=l(),Se=o("ul"),Zl=o("li"),cT=a(`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),hT=l(),ed=o("li"),uT=a(`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),mT=l(),sd=o("li"),fT=a(`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),gT=l(),td=o("li"),_T=a(`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),TT=l(),ad=o("li"),vT=a(`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),bT=l(),nd=o("li"),wT=a(`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),yT=l(),od=o("li"),kT=a(`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),jT=l(),er=o("p"),sr=o("a"),qT=a("TapasTokenizer"),ET=a(` runs end-to-end tokenization on a table and associated sentences: punctuation
splitting and wordpiece.`),xT=l(),Wt=o("div"),v(tn.$$.fragment),FT=l(),rd=o("p"),AT=a("Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),zT=l(),Ps=o("div"),v(an.$$.fragment),$T=l(),nn=o("p"),CT=a("Converts logits of "),tr=o("a"),MT=a("TapasForQuestionAnswering"),PT=a(` to actual predicted answer coordinates and
optional aggregation indices.`),ST=l(),on=o("p"),DT=a("The original implementation, on which this function is based, can be found "),rn=o("a"),NT=a("here"),LT=a("."),QT=l(),id=o("div"),Rp=l(),it=o("h2"),Ut=o("a"),ld=o("span"),v(ln.$$.fragment),OT=l(),dd=o("span"),IT=a("TapasModel"),Vp=l(),De=o("div"),v(dn.$$.fragment),WT=l(),pn=o("p"),UT=a(`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ar=o("a"),HT=a("PreTrainedModel"),BT=a(`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),GT=l(),cn=o("p"),RT=a("This model is also a PyTorch "),hn=o("a"),VT=a("torch.nn.Module"),KT=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),YT=l(),un=o("p"),JT=a("This class is a small change compared to "),nr=o("a"),XT=a("BertModel"),ZT=a(`, taking into account the additional token
type ids.`),ev=l(),mn=o("p"),sv=a(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),fn=o("a"),tv=a(`Attention is
all you need`),av=a(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),nv=l(),ts=o("div"),v(gn.$$.fragment),ov=l(),lt=o("p"),rv=a("The "),or=o("a"),iv=a("TapasModel"),lv=a(" forward method, overrides the "),pd=o("code"),dv=a("__call__"),pv=a(" special method."),cv=l(),v(Ht.$$.fragment),hv=l(),cd=o("p"),uv=a("Examples:"),mv=l(),v(_n.$$.fragment),Kp=l(),dt=o("h2"),Bt=o("a"),hd=o("span"),v(Tn.$$.fragment),fv=l(),ud=o("span"),gv=a("TapasForMaskedLM"),Yp=l(),gs=o("div"),v(vn.$$.fragment),_v=l(),pt=o("p"),Tv=a("Tapas Model with a "),md=o("code"),vv=a("language modeling"),bv=a(` head on top.
This model inherits from `),rr=o("a"),wv=a("PreTrainedModel"),yv=a(`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),kv=l(),bn=o("p"),jv=a("This model is also a PyTorch "),wn=o("a"),qv=a("torch.nn.Module"),Ev=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),xv=l(),as=o("div"),v(yn.$$.fragment),Fv=l(),ct=o("p"),Av=a("The "),ir=o("a"),zv=a("TapasForMaskedLM"),$v=a(" forward method, overrides the "),fd=o("code"),Cv=a("__call__"),Mv=a(" special method."),Pv=l(),v(Gt.$$.fragment),Sv=l(),gd=o("p"),Dv=a("Examples:"),Nv=l(),v(kn.$$.fragment),Jp=l(),ht=o("h2"),Rt=o("a"),_d=o("span"),v(jn.$$.fragment),Lv=l(),Td=o("span"),Qv=a("TapasForSequenceClassification"),Xp=l(),Ze=o("div"),v(qn.$$.fragment),Ov=l(),vd=o("p"),Iv=a(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Wv=l(),En=o("p"),Uv=a("This model inherits from "),lr=o("a"),Hv=a("PreTrainedModel"),Bv=a(`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Gv=l(),xn=o("p"),Rv=a("This model is also a PyTorch "),Fn=o("a"),Vv=a("torch.nn.Module"),Kv=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Yv=l(),ns=o("div"),v(An.$$.fragment),Jv=l(),ut=o("p"),Xv=a("The "),dr=o("a"),Zv=a("TapasForSequenceClassification"),eb=a(" forward method, overrides the "),bd=o("code"),sb=a("__call__"),tb=a(" special method."),ab=l(),v(Vt.$$.fragment),nb=l(),wd=o("p"),ob=a("Examples:"),rb=l(),v(zn.$$.fragment),Zp=l(),mt=o("h2"),Kt=o("a"),yd=o("span"),v($n.$$.fragment),ib=l(),kd=o("span"),lb=a("TapasForQuestionAnswering"),ec=l(),es=o("div"),v(Cn.$$.fragment),db=l(),ft=o("p"),pb=a(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),jd=o("code"),cb=a("logits"),hb=a(" and optional "),qd=o("code"),ub=a("logits_aggregation"),mb=a(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),fb=l(),Mn=o("p"),gb=a("This model inherits from "),pr=o("a"),_b=a("PreTrainedModel"),Tb=a(`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),vb=l(),Pn=o("p"),bb=a("This model is also a PyTorch "),Sn=o("a"),wb=a("torch.nn.Module"),yb=a(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),kb=l(),os=o("div"),v(Dn.$$.fragment),jb=l(),gt=o("p"),qb=a("The "),cr=o("a"),Eb=a("TapasForQuestionAnswering"),xb=a(" forward method, overrides the "),Ed=o("code"),Fb=a("__call__"),Ab=a(" special method."),zb=l(),v(Yt.$$.fragment),$b=l(),xd=o("p"),Cb=a("Examples:"),Mb=l(),v(Nn.$$.fragment),sc=l(),_t=o("h2"),Jt=o("a"),Fd=o("span"),v(Ln.$$.fragment),Pb=l(),Ad=o("span"),Sb=a("TFTapasModel"),tc=l(),Ne=o("div"),v(Qn.$$.fragment),Db=l(),zd=o("p"),Nb=a("The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),Lb=l(),On=o("p"),Qb=a("This model inherits from "),hr=o("a"),Ob=a("TFPreTrainedModel"),Ib=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Wb=l(),In=o("p"),Ub=a("This model is also a "),Wn=o("a"),Hb=a("tf.keras.Model"),Bb=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Gb=l(),v(Xt.$$.fragment),Rb=l(),rs=o("div"),v(Un.$$.fragment),Vb=l(),Tt=o("p"),Kb=a("The "),ur=o("a"),Yb=a("TFTapasModel"),Jb=a(" forward method, overrides the "),$d=o("code"),Xb=a("__call__"),Zb=a(" special method."),ew=l(),v(Zt.$$.fragment),sw=l(),Cd=o("p"),tw=a("Examples:"),aw=l(),v(Hn.$$.fragment),ac=l(),vt=o("h2"),ea=o("a"),Md=o("span"),v(Bn.$$.fragment),nw=l(),Pd=o("span"),ow=a("TFTapasForMaskedLM"),nc=l(),Le=o("div"),v(Gn.$$.fragment),rw=l(),Rn=o("p"),iw=a("Tapas Model with a "),Sd=o("code"),lw=a("language modeling"),dw=a(" head on top."),pw=l(),Vn=o("p"),cw=a("This model inherits from "),mr=o("a"),hw=a("TFPreTrainedModel"),uw=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),mw=l(),Kn=o("p"),fw=a("This model is also a "),Yn=o("a"),gw=a("tf.keras.Model"),_w=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Tw=l(),v(sa.$$.fragment),vw=l(),is=o("div"),v(Jn.$$.fragment),bw=l(),bt=o("p"),ww=a("The "),fr=o("a"),yw=a("TFTapasForMaskedLM"),kw=a(" forward method, overrides the "),Dd=o("code"),jw=a("__call__"),qw=a(" special method."),Ew=l(),v(ta.$$.fragment),xw=l(),Nd=o("p"),Fw=a("Examples:"),Aw=l(),v(Xn.$$.fragment),oc=l(),wt=o("h2"),aa=o("a"),Ld=o("span"),v(Zn.$$.fragment),zw=l(),Qd=o("span"),$w=a("TFTapasForSequenceClassification"),rc=l(),Qe=o("div"),v(eo.$$.fragment),Cw=l(),Od=o("p"),Mw=a(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Pw=l(),so=o("p"),Sw=a("This model inherits from "),gr=o("a"),Dw=a("TFPreTrainedModel"),Nw=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Lw=l(),to=o("p"),Qw=a("This model is also a "),ao=o("a"),Ow=a("tf.keras.Model"),Iw=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ww=l(),v(na.$$.fragment),Uw=l(),ls=o("div"),v(no.$$.fragment),Hw=l(),yt=o("p"),Bw=a("The "),_r=o("a"),Gw=a("TFTapasForSequenceClassification"),Rw=a(" forward method, overrides the "),Id=o("code"),Vw=a("__call__"),Kw=a(" special method."),Yw=l(),v(oa.$$.fragment),Jw=l(),Wd=o("p"),Xw=a("Examples:"),Zw=l(),v(oo.$$.fragment),ic=l(),kt=o("h2"),ra=o("a"),Ud=o("span"),v(ro.$$.fragment),ey=l(),Hd=o("span"),sy=a("TFTapasForQuestionAnswering"),lc=l(),Oe=o("div"),v(io.$$.fragment),ty=l(),jt=o("p"),ay=a(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Bd=o("code"),ny=a("logits"),oy=a(" and optional "),Gd=o("code"),ry=a("logits_aggregation"),iy=a(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),ly=l(),lo=o("p"),dy=a("This model inherits from "),Tr=o("a"),py=a("TFPreTrainedModel"),cy=a(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),hy=l(),po=o("p"),uy=a("This model is also a "),co=o("a"),my=a("tf.keras.Model"),fy=a(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),gy=l(),v(ia.$$.fragment),_y=l(),ds=o("div"),v(ho.$$.fragment),Ty=l(),qt=o("p"),vy=a("The "),vr=o("a"),by=a("TFTapasForQuestionAnswering"),wy=a(" forward method, overrides the "),Rd=o("code"),yy=a("__call__"),ky=a(" special method."),jy=l(),v(la.$$.fragment),qy=l(),Vd=o("p"),Ey=a("Examples:"),xy=l(),v(uo.$$.fragment),this.h()},l(t){const h=L0('[data-svelte="svelte-1phssyn"]',document.head);m=r(h,"META",{name:!0,content:!0}),h.forEach(s),x=d(t),f=r(t,"H1",{class:!0});var mo=i(f);g=r(mo,"A",{id:!0,class:!0,href:!0});var Kd=i(g);q=r(Kd,"SPAN",{});var Yd=i(q);b(T.$$.fragment,Yd),Yd.forEach(s),Kd.forEach(s),_=d(mo),F=r(mo,"SPAN",{});var Jd=i(F);_e=n(Jd,"TAPAS"),Jd.forEach(s),mo.forEach(s),K=d(t),A=r(t,"H2",{class:!0});var fo=i(A);Y=r(fo,"A",{id:!0,class:!0,href:!0});var Xd=i(Y);O=r(Xd,"SPAN",{});var Zd=i(O);b(Z.$$.fragment,Zd),Zd.forEach(s),Xd.forEach(s),Te=d(fo),I=r(fo,"SPAN",{});var ep=i(I);ve=n(ep,"Overview"),ep.forEach(s),fo.forEach(s),ce=d(t),W=r(t,"P",{});var go=i(W);N=n(go,"The TAPAS model was proposed in "),ee=r(go,"A",{href:!0,rel:!0});var sp=i(ee);se=n(sp,"TAPAS: Weakly Supervised Table Parsing via Pre-training"),sp.forEach(s),z=n(go,`
by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller, Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically
designed (and pre-trained) for answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7
token types that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset comprising
millions of tables from English Wikipedia and corresponding texts.`),go.forEach(s),$=d(t),oe=r(t,"P",{});var tp=i(oe);H=n(tp,"For question answering, TAPAS has 2 heads on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or summing) among selected cells. TAPAS has been fine-tuned on several datasets:"),tp.forEach(s),he=d(t),V=r(t,"UL",{});var Et=i(V);L=r(Et,"LI",{});var Fy=i(L);te=r(Fy,"A",{href:!0,rel:!0});var Wy=i(te);be=n(Wy,"SQA"),Wy.forEach(s),C=n(Fy," (Sequential Question Answering by Microsoft)"),Fy.forEach(s),we=d(Et),Q=r(Et,"LI",{});var Ay=i(Q);ae=r(Ay,"A",{href:!0,rel:!0});var Uy=i(ae);ye=n(Uy,"WTQ"),Uy.forEach(s),B=n(Ay," (Wiki Table Questions by Stanford University)"),Ay.forEach(s),ke=d(Et),re=r(Et,"LI",{});var zy=i(re);P=r(zy,"A",{href:!0,rel:!0});var Hy=i(P);je=n(Hy,"WikiSQL"),Hy.forEach(s),G=n(zy," (by Salesforce)."),zy.forEach(s),Et.forEach(s),ue=d(t),u=r(t,"P",{});var By=i(u);E=n(By,"It achieves state-of-the-art on both SQA and WTQ, while having comparable performance to SOTA on WikiSQL, with a much simpler architecture."),By.forEach(s),J=d(t),xe=r(t,"P",{});var Gy=i(xe);Ge=n(Gy,"The abstract from the paper is the following:"),Gy.forEach(s),S=d(t),Fe=r(t,"P",{});var Ry=i(Fe);$e=r(Ry,"EM",{});var Vy=i($e);Re=n(Vy,"Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition, the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art."),Vy.forEach(s),Ry.forEach(s),D=d(t),M=r(t,"P",{});var da=i(M);Ve=n(da,"In addition, the authors have further pre-trained TAPAS to recognize "),Ce=r(da,"STRONG",{});var Ky=i(Ce);R=n(Ky,"table entailment"),Ky.forEach(s),Ke=n(da,", by creating a balanced dataset of millions of automatically created training examples which are learned in an intermediate step prior to fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on "),qe=r(da,"A",{href:!0,rel:!0});var Yy=i(qe);Ee=n(Yy,"TabFact"),Yy.forEach(s),Ye=n(da,", a large-scale dataset with 16k Wikipedia tables for table entailment (a binary classification task). For more details, see their follow-up paper: "),fa=r(da,"A",{href:!0,rel:!0});var Jy=i(fa);ih=n(Jy,"Understanding tables with intermediate pre-training"),Jy.forEach(s),lh=n(da," by Julian Martin Eisenschlos, Syrine Krichene and Thomas M\xFCller."),da.forEach(s),ap=d(t),Ft=r(t,"IMG",{src:!0,alt:!0,width:!0}),np=d(t),_o=r(t,"SMALL",{});var Xy=i(_o);dh=n(Xy,"TAPAS architecture. Taken from the [official blog post](https://ai.googleblog.com/2020/04/using-neural-networks-to-find-answers.html)."),Xy.forEach(s),op=d(t),_s=r(t,"P",{});var pa=i(_s);ph=n(pa,"This model was contributed by "),ga=r(pa,"A",{href:!0,rel:!0});var Zy=i(ga);ch=n(Zy,"nielsr"),Zy.forEach(s),hh=n(pa,". The Tensorflow version of this model was contributed by "),_a=r(pa,"A",{href:!0,rel:!0});var ek=i(_a);uh=n(ek,"kamalkraj"),ek.forEach(s),mh=n(pa,". The original code can be found "),Ta=r(pa,"A",{href:!0,rel:!0});var sk=i(Ta);fh=n(sk,"here"),sk.forEach(s),gh=n(pa,"."),pa.forEach(s),rp=d(t),To=r(t,"P",{});var tk=i(To);_h=n(tk,"Tips:"),tk.forEach(s),ip=d(t),Ts=r(t,"UL",{});var ca=i(Ts);Me=r(ca,"LI",{});var ps=i(Me);Th=n(ps,"TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell of the table). Note that this is something that was added after the publication of the original TAPAS paper. According to the authors, this usually results in a slightly better performance, and allows you to encode longer sequences without running out of embeddings. This is reflected in the "),Hr=r(ps,"CODE",{});var ak=i(Hr);vh=n(ak,"reset_position_index_per_cell"),ak.forEach(s),bh=n(ps," parameter of "),vo=r(ps,"A",{href:!0});var nk=i(vo);wh=n(nk,"TapasConfig"),nk.forEach(s),yh=n(ps,", which is set to "),Br=r(ps,"CODE",{});var ok=i(Br);kh=n(ok,"True"),ok.forEach(s),jh=n(ps," by default. The default versions of the models available on the "),va=r(ps,"A",{href:!0,rel:!0});var rk=i(va);qh=n(rk,"hub"),rk.forEach(s),Eh=n(ps," all use relative position embeddings. You can still use the ones with absolute position embeddings by passing in an additional argument "),Gr=r(ps,"CODE",{});var ik=i(Gr);xh=n(ik,'revision="no_reset"'),ik.forEach(s),Fh=n(ps," when calling the "),Rr=r(ps,"CODE",{});var lk=i(Rr);Ah=n(lk,"from_pretrained()"),lk.forEach(s),zh=n(ps," method. Note that it\u2019s usually advised to pad the inputs on the right rather than the left."),ps.forEach(s),$h=d(ca),Je=r(ca,"LI",{});var bs=i(Je);Ch=n(bs,"TAPAS is based on BERT, so "),Vr=r(bs,"CODE",{});var dk=i(Vr);Mh=n(dk,"TAPAS-base"),dk.forEach(s),Ph=n(bs," for example corresponds to a "),Kr=r(bs,"CODE",{});var pk=i(Kr);Sh=n(pk,"BERT-base"),pk.forEach(s),Dh=n(bs," architecture. Of course, "),Yr=r(bs,"CODE",{});var ck=i(Yr);Nh=n(ck,"TAPAS-large"),ck.forEach(s),Lh=n(bs," will result in the best performance (the results reported in the paper are from "),Jr=r(bs,"CODE",{});var hk=i(Jr);Qh=n(hk,"TAPAS-large"),hk.forEach(s),Oh=n(bs,"). Results of the various sized models are shown on the "),ba=r(bs,"A",{href:!0,rel:!0});var uk=i(ba);Ih=n(uk,"original Github repository"),uk.forEach(s),Wh=n(bs,"."),bs.forEach(s),Uh=d(ca),Vs=r(ca,"LI",{});var br=i(Vs);Hh=n(br,"TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that case, you have to feed every table-question pair one by one to the model, such that the "),Xr=r(br,"CODE",{});var mk=i(Xr);Bh=n(mk,"prev_labels"),mk.forEach(s),Gh=n(br," token type ids can be overwritten by the predicted "),Zr=r(br,"CODE",{});var fk=i(Zr);Rh=n(fk,"labels"),fk.forEach(s),Vh=n(br," of the model to the previous question. See \u201CUsage\u201D section for more info."),br.forEach(s),Kh=d(ca),ei=r(ca,"LI",{});var gk=i(ei);Yh=n(gk,"TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained with a causal language modeling (CLM) objective are better in that regard. Note that TAPAS can be used as an encoder in the EncoderDecoderModel framework, to combine it with an autoregressive text decoder such as GPT-2."),gk.forEach(s),ca.forEach(s),lp=d(t),Ks=r(t,"H2",{class:!0});var pc=i(Ks);At=r(pc,"A",{id:!0,class:!0,href:!0});var _k=i(At);si=r(_k,"SPAN",{});var Tk=i(si);b(wa.$$.fragment,Tk),Tk.forEach(s),_k.forEach(s),Jh=d(pc),ti=r(pc,"SPAN",{});var vk=i(ti);Xh=n(vk,"Usage: fine-tuning"),vk.forEach(s),pc.forEach(s),dp=d(t),zt=r(t,"P",{});var cc=i(zt);Zh=n(cc,"Here we explain how you can fine-tune "),bo=r(cc,"A",{href:!0});var bk=i(bo);eu=n(bk,"TapasForQuestionAnswering"),bk.forEach(s),su=n(cc," on your own dataset."),cc.forEach(s),pp=d(t),wo=r(t,"P",{});var wk=i(wo);ai=r(wk,"STRONG",{});var yk=i(ai);tu=n(yk,"STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),yk.forEach(s),wk.forEach(s),cp=d(t),$t=r(t,"P",{});var hc=i($t);au=n(hc,"Basically, there are 3 different ways in which one can fine-tune "),yo=r(hc,"A",{href:!0});var kk=i(yo);nu=n(kk,"TapasForQuestionAnswering"),kk.forEach(s),ou=n(hc,", corresponding to the different datasets on which Tapas was fine-tuned:"),hc.forEach(s),hp=d(t),zs=r(t,"OL",{});var wr=i(zs);ni=r(wr,"LI",{});var jk=i(ni);ru=n(jk,"SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions)."),jk.forEach(s),iu=d(wr),ya=r(wr,"LI",{});var uc=i(ya);lu=n(uc,"WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his career?\u201C. This case is also called "),oi=r(uc,"STRONG",{});var qk=i(oi);du=n(qk,"weak supervision"),qk.forEach(s),pu=n(uc,", since the model itself must learn the appropriate aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision."),uc.forEach(s),cu=d(wr),ka=r(wr,"LI",{});var mc=i(ka);hu=n(mc,"WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation operator during training. This is also called "),ri=r(mc,"STRONG",{});var Ek=i(ri);uu=n(Ek,"strong supervision"),Ek.forEach(s),mu=n(mc,". Here, learning the appropriate aggregation operator is much easier."),mc.forEach(s),wr.forEach(s),up=d(t),ko=r(t,"P",{});var xk=i(ko);fu=n(xk,"To summarize:"),xk.forEach(s),mp=d(t),Ct=r(t,"TABLE",{});var fc=i(Ct);ii=r(fc,"THEAD",{});var Fk=i(ii);Ys=r(Fk,"TR",{});var yr=i(Ys);li=r(yr,"TH",{});var Ak=i(li);di=r(Ak,"STRONG",{});var zk=i(di);gu=n(zk,"Task"),zk.forEach(s),Ak.forEach(s),_u=d(yr),pi=r(yr,"TH",{});var $k=i(pi);ci=r($k,"STRONG",{});var Ck=i(ci);Tu=n(Ck,"Example dataset"),Ck.forEach(s),$k.forEach(s),vu=d(yr),hi=r(yr,"TH",{});var Mk=i(hi);ui=r(Mk,"STRONG",{});var Pk=i(ui);bu=n(Pk,"Description"),Pk.forEach(s),Mk.forEach(s),yr.forEach(s),Fk.forEach(s),wu=d(fc),Js=r(fc,"TBODY",{});var kr=i(Js);Xs=r(kr,"TR",{});var jr=i(Xs);mi=r(jr,"TD",{});var Sk=i(mi);yu=n(Sk,"Conversational"),Sk.forEach(s),ku=d(jr),fi=r(jr,"TD",{});var Dk=i(fi);ju=n(Dk,"SQA"),Dk.forEach(s),qu=d(jr),gi=r(jr,"TD",{});var Nk=i(gi);Eu=n(Nk,"Conversational, only cell selection questions"),Nk.forEach(s),jr.forEach(s),xu=d(kr),Zs=r(kr,"TR",{});var qr=i(Zs);_i=r(qr,"TD",{});var Lk=i(_i);Fu=n(Lk,"Weak supervision for aggregation"),Lk.forEach(s),Au=d(qr),Ti=r(qr,"TD",{});var Qk=i(Ti);zu=n(Qk,"WTQ"),Qk.forEach(s),$u=d(qr),vi=r(qr,"TD",{});var Ok=i(vi);Cu=n(Ok,"Questions might involve aggregation, and the model must learn this given only the answer as supervision"),Ok.forEach(s),qr.forEach(s),Mu=d(kr),et=r(kr,"TR",{});var Er=i(et);bi=r(Er,"TD",{});var Ik=i(bi);Pu=n(Ik,"Strong supervision for aggregation"),Ik.forEach(s),Su=d(Er),wi=r(Er,"TD",{});var Wk=i(wi);Du=n(Wk,"WikiSQL-supervised"),Wk.forEach(s),Nu=d(Er),yi=r(Er,"TD",{});var Uk=i(yi);Lu=n(Uk,"Questions might involve aggregation, and the model must learn this given the gold aggregation operator"),Uk.forEach(s),Er.forEach(s),kr.forEach(s),fc.forEach(s),fp=d(t),$s=r(t,"P",{});var xr=i($s);Qu=n(xr,`Initializing a model with a pre-trained base and randomly initialized classification heads from the hub can be done as shown below. Be sure to have installed the
`),ja=r(xr,"A",{href:!0,rel:!0});var Hk=i(ja);Ou=n(Hk,"torch-scatter"),Hk.forEach(s),Iu=n(xr," dependency for your environment in case you\u2019re using PyTorch, or the "),qa=r(xr,"A",{href:!0,rel:!0});var Bk=i(qa);Wu=n(Bk,"tensorflow_probability"),Bk.forEach(s),Uu=n(xr,`
dependency in case you\u2019re using Tensorflow:`),xr.forEach(s),gp=d(t),b(Ea.$$.fragment,t),_p=d(t),Cs=r(t,"P",{});var Fr=i(Cs);Hu=n(Fr,"Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also experiment by defining any hyperparameters you want when initializing "),jo=r(Fr,"A",{href:!0});var Gk=i(jo);Bu=n(Gk,"TapasConfig"),Gk.forEach(s),Gu=n(Fr,", and then create a "),qo=r(Fr,"A",{href:!0});var Rk=i(qo);Ru=n(Rk,"TapasForQuestionAnswering"),Rk.forEach(s),Vu=n(Fr," based on that configuration. For example, if you have a dataset that has both conversational questions and questions that might involve aggregation, then you can do it this way. Here\u2019s an example:"),Fr.forEach(s),Tp=d(t),b(xa.$$.fragment,t),vp=d(t),Mt=r(t,"P",{});var gc=i(Mt);Ku=n(gc,"What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See "),Fa=r(gc,"A",{href:!0,rel:!0});var Vk=i(Fa);Yu=n(Vk,"here"),Vk.forEach(s),Ju=n(gc," for more info."),gc.forEach(s),bp=d(t),Pt=r(t,"P",{});var _c=i(Pt);Xu=n(_c,"For a list of all pre-trained and fine-tuned TAPAS checkpoints available on HuggingFace\u2019s  hub, see "),Aa=r(_c,"A",{href:!0,rel:!0});var Kk=i(Aa);Zu=n(Kk,"here"),Kk.forEach(s),em=n(_c,"."),_c.forEach(s),wp=d(t),Eo=r(t,"P",{});var Yk=i(Eo);ki=r(Yk,"STRONG",{});var Jk=i(ki);sm=n(Jk,"STEP 2: Prepare your data in the SQA format"),Jk.forEach(s),Yk.forEach(s),yp=d(t),St=r(t,"P",{});var Tc=i(St);tm=n(Tc,"Second, no matter what you picked above, you should prepare your dataset in the "),za=r(Tc,"A",{href:!0,rel:!0});var Xk=i(za);am=n(Xk,"SQA"),Xk.forEach(s),nm=n(Tc," format. This format is a TSV/CSV file with the following columns:"),Tc.forEach(s),kp=d(t),ie=r(t,"UL",{});var ze=i(ie);xo=r(ze,"LI",{});var $y=i(xo);ji=r($y,"CODE",{});var Zk=i(ji);om=n(Zk,"id"),Zk.forEach(s),rm=n($y,": optional, id of the table-question pair, for bookkeeping purposes."),$y.forEach(s),im=d(ze),Fo=r(ze,"LI",{});var Cy=i(Fo);qi=r(Cy,"CODE",{});var e1=i(qi);lm=n(e1,"annotator"),e1.forEach(s),dm=n(Cy,": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),Cy.forEach(s),pm=d(ze),Ao=r(ze,"LI",{});var My=i(Ao);Ei=r(My,"CODE",{});var s1=i(Ei);cm=n(s1,"position"),s1.forEach(s),hm=n(My,": integer indicating if the question is the first, second, third,\u2026 related to the table. Only required in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised."),My.forEach(s),um=d(ze),zo=r(ze,"LI",{});var Py=i(zo);xi=r(Py,"CODE",{});var t1=i(xi);mm=n(t1,"question"),t1.forEach(s),fm=n(Py,": string"),Py.forEach(s),gm=d(ze),$o=r(ze,"LI",{});var Sy=i($o);Fi=r(Sy,"CODE",{});var a1=i(Fi);_m=n(a1,"table_file"),a1.forEach(s),Tm=n(Sy,": string, name of a csv file containing the tabular data"),Sy.forEach(s),vm=d(ze),Co=r(ze,"LI",{});var Dy=i(Co);Ai=r(Dy,"CODE",{});var n1=i(Ai);bm=n(n1,"answer_coordinates"),n1.forEach(s),wm=n(Dy,": list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is part of the answer)"),Dy.forEach(s),ym=d(ze),Mo=r(ze,"LI",{});var Ny=i(Mo);zi=r(Ny,"CODE",{});var o1=i(zi);km=n(o1,"answer_text"),o1.forEach(s),jm=n(Ny,": list of one or more strings (each string being a cell value that is part of the answer)"),Ny.forEach(s),qm=d(ze),Po=r(ze,"LI",{});var Ly=i(Po);$i=r(Ly,"CODE",{});var r1=i($i);Em=n(r1,"aggregation_label"),r1.forEach(s),xm=n(Ly,": index of the aggregation operator. Only required in case of strong supervision for aggregation (the WikiSQL-supervised case)"),Ly.forEach(s),Fm=d(ze),So=r(ze,"LI",{});var Qy=i(So);Ci=r(Qy,"CODE",{});var i1=i(Ci);Am=n(i1,"float_answer"),i1.forEach(s),zm=n(Qy,": the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of weak supervision for aggregation (such as WTQ and WikiSQL)"),Qy.forEach(s),ze.forEach(s),jp=d(t),We=r(t,"P",{});var ws=i(We);$m=n(ws,"The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the SQA format. The author explains this "),$a=r(ws,"A",{href:!0,rel:!0});var l1=i($a);Cm=n(l1,"here"),l1.forEach(s),Mm=n(ws,". A conversion of this script that works with HuggingFace\u2019s implementation can be found "),Ca=r(ws,"A",{href:!0,rel:!0});var d1=i(Ca);Pm=n(d1,"here"),d1.forEach(s),Sm=n(ws,". Interestingly, these conversion scripts are not perfect (the "),Mi=r(ws,"CODE",{});var p1=i(Mi);Dm=n(p1,"answer_coordinates"),p1.forEach(s),Nm=n(ws," and "),Pi=r(ws,"CODE",{});var c1=i(Pi);Lm=n(c1,"float_answer"),c1.forEach(s),Qm=n(ws," fields are populated based on the "),Si=r(ws,"CODE",{});var h1=i(Si);Om=n(h1,"answer_text"),h1.forEach(s),Im=n(ws,"), meaning that WTQ and WikiSQL results could actually be improved."),ws.forEach(s),qp=d(t),Do=r(t,"P",{});var u1=i(Do);Di=r(u1,"STRONG",{});var m1=i(Di);Wm=n(m1,"STEP 3: Convert your data into PyTorch/TensorFlow tensors using TapasTokenizer"),m1.forEach(s),u1.forEach(s),Ep=d(t),Ae=r(t,"P",{});var cs=i(Ae);Um=n(cs,"Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular data), you can then use "),No=r(cs,"A",{href:!0});var f1=i(No);Hm=n(f1,"TapasTokenizer"),f1.forEach(s),Bm=n(cs," to convert table-question pairs into "),Ni=r(cs,"CODE",{});var g1=i(Ni);Gm=n(g1,"input_ids"),g1.forEach(s),Rm=n(cs,", "),Li=r(cs,"CODE",{});var _1=i(Li);Vm=n(_1,"attention_mask"),_1.forEach(s),Km=n(cs,", "),Qi=r(cs,"CODE",{});var T1=i(Qi);Ym=n(T1,"token_type_ids"),T1.forEach(s),Jm=n(cs," and so on. Again, based on which of the three cases you picked above, "),Lo=r(cs,"A",{href:!0});var v1=i(Lo);Xm=n(v1,"TapasForQuestionAnswering"),v1.forEach(s),Zm=n(cs,"/"),Qo=r(cs,"A",{href:!0});var b1=i(Qo);ef=n(b1,"TFTapasForQuestionAnswering"),b1.forEach(s),sf=n(cs,` requires different
inputs to be fine-tuned:`),cs.forEach(s),xp=d(t),Dt=r(t,"TABLE",{});var vc=i(Dt);Oi=r(vc,"THEAD",{});var w1=i(Oi);Ma=r(w1,"TR",{});var bc=i(Ma);Ii=r(bc,"TH",{});var y1=i(Ii);Wi=r(y1,"STRONG",{});var k1=i(Wi);tf=n(k1,"Task"),k1.forEach(s),y1.forEach(s),af=d(bc),Ui=r(bc,"TH",{});var j1=i(Ui);Hi=r(j1,"STRONG",{});var q1=i(Hi);nf=n(q1,"Required inputs"),q1.forEach(s),j1.forEach(s),bc.forEach(s),w1.forEach(s),of=d(vc),st=r(vc,"TBODY",{});var Ar=i(st);Pa=r(Ar,"TR",{});var wc=i(Pa);Bi=r(wc,"TD",{});var E1=i(Bi);rf=n(E1,"Conversational"),E1.forEach(s),lf=d(wc),As=r(wc,"TD",{});var ha=i(As);Gi=r(ha,"CODE",{});var x1=i(Gi);df=n(x1,"input_ids"),x1.forEach(s),pf=n(ha,", "),Ri=r(ha,"CODE",{});var F1=i(Ri);cf=n(F1,"attention_mask"),F1.forEach(s),hf=n(ha,", "),Vi=r(ha,"CODE",{});var A1=i(Vi);uf=n(A1,"token_type_ids"),A1.forEach(s),mf=n(ha,", "),Ki=r(ha,"CODE",{});var z1=i(Ki);ff=n(z1,"labels"),z1.forEach(s),ha.forEach(s),wc.forEach(s),gf=d(Ar),Sa=r(Ar,"TR",{});var yc=i(Sa);Yi=r(yc,"TD",{});var $1=i(Yi);_f=n($1,"Weak supervision for aggregation"),$1.forEach(s),Tf=d(yc),Pe=r(yc,"TD",{});var hs=i(Pe);Ji=r(hs,"CODE",{});var C1=i(Ji);vf=n(C1,"input_ids"),C1.forEach(s),bf=n(hs,", "),Xi=r(hs,"CODE",{});var M1=i(Xi);wf=n(M1,"attention_mask"),M1.forEach(s),yf=n(hs,", "),Zi=r(hs,"CODE",{});var P1=i(Zi);kf=n(P1,"token_type_ids"),P1.forEach(s),jf=n(hs,", "),el=r(hs,"CODE",{});var S1=i(el);qf=n(S1,"labels"),S1.forEach(s),Ef=n(hs,", "),sl=r(hs,"CODE",{});var D1=i(sl);xf=n(D1,"numeric_values"),D1.forEach(s),Ff=n(hs,", "),tl=r(hs,"CODE",{});var N1=i(tl);Af=n(N1,"numeric_values_scale"),N1.forEach(s),zf=n(hs,", "),al=r(hs,"CODE",{});var L1=i(al);$f=n(L1,"float_answer"),L1.forEach(s),hs.forEach(s),yc.forEach(s),Cf=d(Ar),Da=r(Ar,"TR",{});var kc=i(Da);nl=r(kc,"TD",{});var Q1=i(nl);Mf=n(Q1,"Strong supervision for aggregation"),Q1.forEach(s),Pf=d(kc),ms=r(kc,"TD",{});var Ss=i(ms);ol=r(Ss,"CODE",{});var O1=i(ol);Sf=n(O1,"input ids"),O1.forEach(s),Df=n(Ss,", "),rl=r(Ss,"CODE",{});var I1=i(rl);Nf=n(I1,"attention mask"),I1.forEach(s),Lf=n(Ss,", "),il=r(Ss,"CODE",{});var W1=i(il);Qf=n(W1,"token type ids"),W1.forEach(s),Of=n(Ss,", "),ll=r(Ss,"CODE",{});var U1=i(ll);If=n(U1,"labels"),U1.forEach(s),Wf=n(Ss,", "),dl=r(Ss,"CODE",{});var H1=i(dl);Uf=n(H1,"aggregation_labels"),H1.forEach(s),Ss.forEach(s),kc.forEach(s),Ar.forEach(s),vc.forEach(s),Fp=d(t),le=r(t,"P",{});var Ie=i(le);Oo=r(Ie,"A",{href:!0});var B1=i(Oo);Hf=n(B1,"TapasTokenizer"),B1.forEach(s),Bf=n(Ie," creates the "),pl=r(Ie,"CODE",{});var G1=i(pl);Gf=n(G1,"labels"),G1.forEach(s),Rf=n(Ie,", "),cl=r(Ie,"CODE",{});var R1=i(cl);Vf=n(R1,"numeric_values"),R1.forEach(s),Kf=n(Ie," and "),hl=r(Ie,"CODE",{});var V1=i(hl);Yf=n(V1,"numeric_values_scale"),V1.forEach(s),Jf=n(Ie," based on the "),ul=r(Ie,"CODE",{});var K1=i(ul);Xf=n(K1,"answer_coordinates"),K1.forEach(s),Zf=n(Ie," and "),ml=r(Ie,"CODE",{});var Y1=i(ml);eg=n(Y1,"answer_text"),Y1.forEach(s),sg=n(Ie," columns of the TSV file. The "),fl=r(Ie,"CODE",{});var J1=i(fl);tg=n(J1,"float_answer"),J1.forEach(s),ag=n(Ie," and "),gl=r(Ie,"CODE",{});var X1=i(gl);ng=n(X1,"aggregation_labels"),X1.forEach(s),og=n(Ie," are already in the TSV file of step 2. Here\u2019s an example:"),Ie.forEach(s),Ap=d(t),b(Na.$$.fragment,t),zp=d(t),vs=r(t,"P",{});var ua=i(vs);rg=n(ua,"Note that "),Io=r(ua,"A",{href:!0});var Z1=i(Io);ig=n(Z1,"TapasTokenizer"),Z1.forEach(s),lg=n(ua," expects the data of the table to be "),_l=r(ua,"STRONG",{});var e2=i(_l);dg=n(e2,"text-only"),e2.forEach(s),pg=n(ua,". You can use "),Tl=r(ua,"CODE",{});var s2=i(Tl);cg=n(s2,".astype(str)"),s2.forEach(s),hg=n(ua,` on a dataframe to turn it into text-only data.
Of course, this only shows how to encode a single training example. It is advised to create a dataloader to iterate over batches:`),ua.forEach(s),$p=d(t),b(La.$$.fragment,t),Cp=d(t),X=r(t,"P",{});var fe=i(X);ug=n(fe,"Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),vl=r(fe,"STRONG",{});var t2=i(vl);mg=n(t2,"not conversational"),t2.forEach(s),fg=n(fe,". In case your dataset involves conversational questions (such as in SQA), then you should first group together the "),bl=r(fe,"CODE",{});var a2=i(bl);gg=n(a2,"queries"),a2.forEach(s),_g=n(fe,", "),wl=r(fe,"CODE",{});var n2=i(wl);Tg=n(n2,"answer_coordinates"),n2.forEach(s),vg=n(fe," and "),yl=r(fe,"CODE",{});var o2=i(yl);bg=n(o2,"answer_text"),o2.forEach(s),wg=n(fe," per table (in the order of their "),kl=r(fe,"CODE",{});var r2=i(kl);yg=n(r2,"position"),r2.forEach(s),kg=n(fe,`
index) and batch encode each table with its questions. This will make sure that the `),jl=r(fe,"CODE",{});var i2=i(jl);jg=n(i2,"prev_labels"),i2.forEach(s),qg=n(fe," token types (see docs of "),Wo=r(fe,"A",{href:!0});var l2=i(Wo);Eg=n(l2,"TapasTokenizer"),l2.forEach(s),xg=n(fe,") are set correctly. See "),Qa=r(fe,"A",{href:!0,rel:!0});var d2=i(Qa);Fg=n(d2,"this notebook"),d2.forEach(s),Ag=n(fe," for more info. See "),Oa=r(fe,"A",{href:!0,rel:!0});var p2=i(Oa);zg=n(p2,"this notebook"),p2.forEach(s),$g=n(fe," for more info regarding using the TensorFlow model."),fe.forEach(s),Mp=d(t),Uo=r(t,"P",{});var c2=i(Uo);ql=r(c2,"STRONG",{});var h2=i(ql);Cg=n(h2,"STEP 4: Train (fine-tune) TapasForQuestionAnswering/TFTapasForQuestionAnswering"),h2.forEach(s),c2.forEach(s),Pp=d(t),Ms=r(t,"P",{});var zr=i(Ms);Mg=n(zr,"You can then fine-tune "),Ho=r(zr,"A",{href:!0});var u2=i(Ho);Pg=n(u2,"TapasForQuestionAnswering"),u2.forEach(s),Sg=n(zr," or "),Bo=r(zr,"A",{href:!0});var m2=i(Bo);Dg=n(m2,"TFTapasForQuestionAnswering"),m2.forEach(s),Ng=n(zr," as follows (shown here for the weak supervision for aggregation case):"),zr.forEach(s),Sp=d(t),b(Ia.$$.fragment,t),Dp=d(t),tt=r(t,"H2",{class:!0});var jc=i(tt);Nt=r(jc,"A",{id:!0,class:!0,href:!0});var f2=i(Nt);El=r(f2,"SPAN",{});var g2=i(El);b(Wa.$$.fragment,g2),g2.forEach(s),f2.forEach(s),Lg=d(jc),xl=r(jc,"SPAN",{});var _2=i(xl);Qg=n(_2,"Usage: inference"),_2.forEach(s),jc.forEach(s),Np=d(t),me=r(t,"P",{});var He=i(me);Og=n(He,"Here we explain how you can use "),Go=r(He,"A",{href:!0});var T2=i(Go);Ig=n(T2,"TapasForQuestionAnswering"),T2.forEach(s),Wg=n(He," or "),Ro=r(He,"A",{href:!0});var v2=i(Ro);Ug=n(v2,"TFTapasForQuestionAnswering"),v2.forEach(s),Hg=n(He," for inference (i.e. making predictions on new data). For inference, only "),Fl=r(He,"CODE",{});var b2=i(Fl);Bg=n(b2,"input_ids"),b2.forEach(s),Gg=n(He,", "),Al=r(He,"CODE",{});var w2=i(Al);Rg=n(w2,"attention_mask"),w2.forEach(s),Vg=n(He," and "),zl=r(He,"CODE",{});var y2=i(zl);Kg=n(y2,"token_type_ids"),y2.forEach(s),Yg=n(He," (which you can obtain using "),Vo=r(He,"A",{href:!0});var k2=i(Vo);Jg=n(k2,"TapasTokenizer"),k2.forEach(s),Xg=n(He,") have to be provided to the model to obtain the logits. Next, you can use the handy "),$l=r(He,"CODE",{});var j2=i($l);Zg=n(j2,"convert_logits_to_predictions"),j2.forEach(s),e_=n(He," method to convert these into predicted coordinates and optional aggregation indices."),He.forEach(s),Lp=d(t),Lt=r(t,"P",{});var qc=i(Lt);s_=n(qc,"However, note that inference is "),Cl=r(qc,"STRONG",{});var q2=i(Cl);t_=n(q2,"different"),q2.forEach(s),a_=n(qc," depending on whether or not the setup is conversational. In a non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example of that:"),qc.forEach(s),Qp=d(t),b(Ua.$$.fragment,t),Op=d(t),Ue=r(t,"P",{});var ys=i(Ue);n_=n(ys,"In case of a conversational set-up, then each table-question pair must be provided "),Ml=r(ys,"STRONG",{});var E2=i(Ml);o_=n(E2,"sequentially"),E2.forEach(s),r_=n(ys," to the model, such that the "),Pl=r(ys,"CODE",{});var x2=i(Pl);i_=n(x2,"prev_labels"),x2.forEach(s),l_=n(ys," token types can be overwritten by the predicted "),Sl=r(ys,"CODE",{});var F2=i(Sl);d_=n(F2,"labels"),F2.forEach(s),p_=n(ys," of the previous table-question pair. Again, more info can be found in "),Ha=r(ys,"A",{href:!0,rel:!0});var A2=i(Ha);c_=n(A2,"this notebook"),A2.forEach(s),h_=n(ys," (for PyTorch) and "),Ba=r(ys,"A",{href:!0,rel:!0});var z2=i(Ba);u_=n(z2,"this notebook"),z2.forEach(s),m_=n(ys," (for TensorFlow)."),ys.forEach(s),Ip=d(t),at=r(t,"H2",{class:!0});var Ec=i(at);Qt=r(Ec,"A",{id:!0,class:!0,href:!0});var $2=i(Qt);Dl=r($2,"SPAN",{});var C2=i(Dl);b(Ga.$$.fragment,C2),C2.forEach(s),$2.forEach(s),f_=d(Ec),Nl=r(Ec,"SPAN",{});var M2=i(Nl);g_=n(M2,"TAPAS specific outputs"),M2.forEach(s),Ec.forEach(s),Wp=d(t),nt=r(t,"DIV",{class:!0});var xc=i(nt);b(Ra.$$.fragment,xc),__=d(xc),Va=r(xc,"P",{});var Fc=i(Va);T_=n(Fc,"Output type of "),Ko=r(Fc,"A",{href:!0});var P2=i(Ko);v_=n(P2,"TapasForQuestionAnswering"),P2.forEach(s),b_=n(Fc,"."),Fc.forEach(s),xc.forEach(s),Up=d(t),ot=r(t,"H2",{class:!0});var Ac=i(ot);Ot=r(Ac,"A",{id:!0,class:!0,href:!0});var S2=i(Ot);Ll=r(S2,"SPAN",{});var D2=i(Ll);b(Ka.$$.fragment,D2),D2.forEach(s),S2.forEach(s),w_=d(Ac),Ql=r(Ac,"SPAN",{});var N2=i(Ql);y_=n(N2,"TapasConfig"),N2.forEach(s),Ac.forEach(s),Hp=d(t),Xe=r(t,"DIV",{class:!0});var Ds=i(Xe);b(Ya.$$.fragment,Ds),k_=d(Ds),fs=r(Ds,"P",{});var Ns=i(fs);j_=n(Ns,"This is the configuration class to store the configuration of a "),Yo=r(Ns,"A",{href:!0});var L2=i(Yo);q_=n(L2,"TapasModel"),L2.forEach(s),E_=n(Ns,`. It is used to
instantiate a TAPAS model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the TAPAS `),Ol=r(Ns,"EM",{});var Q2=i(Ol);x_=n(Q2,"tapas-base-finetuned-sqa"),Q2.forEach(s),F_=n(Ns,`
architecture. Configuration objects inherit from `),Il=r(Ns,"CODE",{});var O2=i(Il);A_=n(O2,"PreTrainedConfig"),O2.forEach(s),z_=n(Ns,` and can be used to control
the model outputs. Read the documentation from `),Jo=r(Ns,"A",{href:!0});var I2=i(Jo);$_=n(I2,"PretrainedConfig"),I2.forEach(s),C_=n(Ns," for more information."),Ns.forEach(s),M_=d(Ds),Ja=r(Ds,"P",{});var zc=i(Ja);P_=n(zc,`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),Xa=r(zc,"A",{href:!0,rel:!0});var W2=i(Xa);S_=n(W2,"https://github.com/google-research/tapas/tree/master"),W2.forEach(s),D_=n(zc,"."),zc.forEach(s),N_=d(Ds),Wl=r(Ds,"P",{});var U2=i(Wl);L_=n(U2,"Example:"),U2.forEach(s),Q_=d(Ds),b(Za.$$.fragment,Ds),Ds.forEach(s),Bp=d(t),rt=r(t,"H2",{class:!0});var $c=i(rt);It=r($c,"A",{id:!0,class:!0,href:!0});var H2=i(It);Ul=r(H2,"SPAN",{});var B2=i(Ul);b(en.$$.fragment,B2),B2.forEach(s),H2.forEach(s),O_=d($c),Hl=r($c,"SPAN",{});var G2=i(Hl);I_=n(G2,"TapasTokenizer"),G2.forEach(s),$c.forEach(s),Gp=d(t),de=r(t,"DIV",{class:!0});var Be=i(de);b(sn.$$.fragment,Be),W_=d(Be),Bl=r(Be,"P",{});var R2=i(Bl);U_=n(R2,`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),R2.forEach(s),H_=d(Be),ne=r(Be,"P",{});var ge=i(ne);B_=n(ge,"This tokenizer inherits from "),Xo=r(ge,"A",{href:!0});var V2=i(Xo);G_=n(V2,"PreTrainedTokenizer"),V2.forEach(s),R_=n(ge,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.
`),Zo=r(ge,"A",{href:!0});var K2=i(Zo);V_=n(K2,"TapasTokenizer"),K2.forEach(s),K_=n(ge,` creates several token type ids to encode tabular structure. To be more
precise, it adds 7 token type ids, in the following order: `),Gl=r(ge,"CODE",{});var Y2=i(Gl);Y_=n(Y2,"segment_ids"),Y2.forEach(s),J_=n(ge,", "),Rl=r(ge,"CODE",{});var J2=i(Rl);X_=n(J2,"column_ids"),J2.forEach(s),Z_=n(ge,", "),Vl=r(ge,"CODE",{});var X2=i(Vl);eT=n(X2,"row_ids"),X2.forEach(s),sT=n(ge,`,
`),Kl=r(ge,"CODE",{});var Z2=i(Kl);tT=n(Z2,"prev_labels"),Z2.forEach(s),aT=n(ge,", "),Yl=r(ge,"CODE",{});var ej=i(Yl);nT=n(ej,"column_ranks"),ej.forEach(s),oT=n(ge,", "),Jl=r(ge,"CODE",{});var sj=i(Jl);rT=n(sj,"inv_column_ranks"),sj.forEach(s),iT=n(ge," and "),Xl=r(ge,"CODE",{});var tj=i(Xl);lT=n(tj,"numeric_relations"),tj.forEach(s),dT=n(ge,":"),ge.forEach(s),pT=d(Be),Se=r(Be,"UL",{});var us=i(Se);Zl=r(us,"LI",{});var aj=i(Zl);cT=n(aj,`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),aj.forEach(s),hT=d(us),ed=r(us,"LI",{});var nj=i(ed);uT=n(nj,`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),nj.forEach(s),mT=d(us),sd=r(us,"LI",{});var oj=i(sd);fT=n(oj,`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),oj.forEach(s),gT=d(us),td=r(us,"LI",{});var rj=i(td);_T=n(rj,`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),rj.forEach(s),TT=d(us),ad=r(us,"LI",{});var ij=i(ad);vT=n(ij,`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),ij.forEach(s),bT=d(us),nd=r(us,"LI",{});var lj=i(nd);wT=n(lj,`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),lj.forEach(s),yT=d(us),od=r(us,"LI",{});var dj=i(od);kT=n(dj,`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),dj.forEach(s),us.forEach(s),jT=d(Be),er=r(Be,"P",{});var Oy=i(er);sr=r(Oy,"A",{href:!0});var pj=i(sr);qT=n(pj,"TapasTokenizer"),pj.forEach(s),ET=n(Oy,` runs end-to-end tokenization on a table and associated sentences: punctuation
splitting and wordpiece.`),Oy.forEach(s),xT=d(Be),Wt=r(Be,"DIV",{class:!0});var Cc=i(Wt);b(tn.$$.fragment,Cc),FT=d(Cc),rd=r(Cc,"P",{});var cj=i(rd);AT=n(cj,"Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),cj.forEach(s),Cc.forEach(s),zT=d(Be),Ps=r(Be,"DIV",{class:!0});var $r=i(Ps);b(an.$$.fragment,$r),$T=d($r),nn=r($r,"P",{});var Mc=i(nn);CT=n(Mc,"Converts logits of "),tr=r(Mc,"A",{href:!0});var hj=i(tr);MT=n(hj,"TapasForQuestionAnswering"),hj.forEach(s),PT=n(Mc,` to actual predicted answer coordinates and
optional aggregation indices.`),Mc.forEach(s),ST=d($r),on=r($r,"P",{});var Pc=i(on);DT=n(Pc,"The original implementation, on which this function is based, can be found "),rn=r(Pc,"A",{href:!0,rel:!0});var uj=i(rn);NT=n(uj,"here"),uj.forEach(s),LT=n(Pc,"."),Pc.forEach(s),$r.forEach(s),QT=d(Be),id=r(Be,"DIV",{class:!0}),i(id).forEach(s),Be.forEach(s),Rp=d(t),it=r(t,"H2",{class:!0});var Sc=i(it);Ut=r(Sc,"A",{id:!0,class:!0,href:!0});var mj=i(Ut);ld=r(mj,"SPAN",{});var fj=i(ld);b(ln.$$.fragment,fj),fj.forEach(s),mj.forEach(s),OT=d(Sc),dd=r(Sc,"SPAN",{});var gj=i(dd);IT=n(gj,"TapasModel"),gj.forEach(s),Sc.forEach(s),Vp=d(t),De=r(t,"DIV",{class:!0});var ks=i(De);b(dn.$$.fragment,ks),WT=d(ks),pn=r(ks,"P",{});var Dc=i(pn);UT=n(Dc,`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),ar=r(Dc,"A",{href:!0});var _j=i(ar);HT=n(_j,"PreTrainedModel"),_j.forEach(s),BT=n(Dc,`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Dc.forEach(s),GT=d(ks),cn=r(ks,"P",{});var Nc=i(cn);RT=n(Nc,"This model is also a PyTorch "),hn=r(Nc,"A",{href:!0,rel:!0});var Tj=i(hn);VT=n(Tj,"torch.nn.Module"),Tj.forEach(s),KT=n(Nc,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Nc.forEach(s),YT=d(ks),un=r(ks,"P",{});var Lc=i(un);JT=n(Lc,"This class is a small change compared to "),nr=r(Lc,"A",{href:!0});var vj=i(nr);XT=n(vj,"BertModel"),vj.forEach(s),ZT=n(Lc,`, taking into account the additional token
type ids.`),Lc.forEach(s),ev=d(ks),mn=r(ks,"P",{});var Qc=i(mn);sv=n(Qc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),fn=r(Qc,"A",{href:!0,rel:!0});var bj=i(fn);tv=n(bj,`Attention is
all you need`),bj.forEach(s),av=n(Qc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),Qc.forEach(s),nv=d(ks),ts=r(ks,"DIV",{class:!0});var Ls=i(ts);b(gn.$$.fragment,Ls),ov=d(Ls),lt=r(Ls,"P",{});var Cr=i(lt);rv=n(Cr,"The "),or=r(Cr,"A",{href:!0});var wj=i(or);iv=n(wj,"TapasModel"),wj.forEach(s),lv=n(Cr," forward method, overrides the "),pd=r(Cr,"CODE",{});var yj=i(pd);dv=n(yj,"__call__"),yj.forEach(s),pv=n(Cr," special method."),Cr.forEach(s),cv=d(Ls),b(Ht.$$.fragment,Ls),hv=d(Ls),cd=r(Ls,"P",{});var kj=i(cd);uv=n(kj,"Examples:"),kj.forEach(s),mv=d(Ls),b(_n.$$.fragment,Ls),Ls.forEach(s),ks.forEach(s),Kp=d(t),dt=r(t,"H2",{class:!0});var Oc=i(dt);Bt=r(Oc,"A",{id:!0,class:!0,href:!0});var jj=i(Bt);hd=r(jj,"SPAN",{});var qj=i(hd);b(Tn.$$.fragment,qj),qj.forEach(s),jj.forEach(s),fv=d(Oc),ud=r(Oc,"SPAN",{});var Ej=i(ud);gv=n(Ej,"TapasForMaskedLM"),Ej.forEach(s),Oc.forEach(s),Yp=d(t),gs=r(t,"DIV",{class:!0});var ma=i(gs);b(vn.$$.fragment,ma),_v=d(ma),pt=r(ma,"P",{});var Mr=i(pt);Tv=n(Mr,"Tapas Model with a "),md=r(Mr,"CODE",{});var xj=i(md);vv=n(xj,"language modeling"),xj.forEach(s),bv=n(Mr,` head on top.
This model inherits from `),rr=r(Mr,"A",{href:!0});var Fj=i(rr);wv=n(Fj,"PreTrainedModel"),Fj.forEach(s),yv=n(Mr,`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Mr.forEach(s),kv=d(ma),bn=r(ma,"P",{});var Ic=i(bn);jv=n(Ic,"This model is also a PyTorch "),wn=r(Ic,"A",{href:!0,rel:!0});var Aj=i(wn);qv=n(Aj,"torch.nn.Module"),Aj.forEach(s),Ev=n(Ic,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Ic.forEach(s),xv=d(ma),as=r(ma,"DIV",{class:!0});var Qs=i(as);b(yn.$$.fragment,Qs),Fv=d(Qs),ct=r(Qs,"P",{});var Pr=i(ct);Av=n(Pr,"The "),ir=r(Pr,"A",{href:!0});var zj=i(ir);zv=n(zj,"TapasForMaskedLM"),zj.forEach(s),$v=n(Pr," forward method, overrides the "),fd=r(Pr,"CODE",{});var $j=i(fd);Cv=n($j,"__call__"),$j.forEach(s),Mv=n(Pr," special method."),Pr.forEach(s),Pv=d(Qs),b(Gt.$$.fragment,Qs),Sv=d(Qs),gd=r(Qs,"P",{});var Cj=i(gd);Dv=n(Cj,"Examples:"),Cj.forEach(s),Nv=d(Qs),b(kn.$$.fragment,Qs),Qs.forEach(s),ma.forEach(s),Jp=d(t),ht=r(t,"H2",{class:!0});var Wc=i(ht);Rt=r(Wc,"A",{id:!0,class:!0,href:!0});var Mj=i(Rt);_d=r(Mj,"SPAN",{});var Pj=i(_d);b(jn.$$.fragment,Pj),Pj.forEach(s),Mj.forEach(s),Lv=d(Wc),Td=r(Wc,"SPAN",{});var Sj=i(Td);Qv=n(Sj,"TapasForSequenceClassification"),Sj.forEach(s),Wc.forEach(s),Xp=d(t),Ze=r(t,"DIV",{class:!0});var Os=i(Ze);b(qn.$$.fragment,Os),Ov=d(Os),vd=r(Os,"P",{});var Dj=i(vd);Iv=n(Dj,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Dj.forEach(s),Wv=d(Os),En=r(Os,"P",{});var Uc=i(En);Uv=n(Uc,"This model inherits from "),lr=r(Uc,"A",{href:!0});var Nj=i(lr);Hv=n(Nj,"PreTrainedModel"),Nj.forEach(s),Bv=n(Uc,`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Uc.forEach(s),Gv=d(Os),xn=r(Os,"P",{});var Hc=i(xn);Rv=n(Hc,"This model is also a PyTorch "),Fn=r(Hc,"A",{href:!0,rel:!0});var Lj=i(Fn);Vv=n(Lj,"torch.nn.Module"),Lj.forEach(s),Kv=n(Hc,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Hc.forEach(s),Yv=d(Os),ns=r(Os,"DIV",{class:!0});var Is=i(ns);b(An.$$.fragment,Is),Jv=d(Is),ut=r(Is,"P",{});var Sr=i(ut);Xv=n(Sr,"The "),dr=r(Sr,"A",{href:!0});var Qj=i(dr);Zv=n(Qj,"TapasForSequenceClassification"),Qj.forEach(s),eb=n(Sr," forward method, overrides the "),bd=r(Sr,"CODE",{});var Oj=i(bd);sb=n(Oj,"__call__"),Oj.forEach(s),tb=n(Sr," special method."),Sr.forEach(s),ab=d(Is),b(Vt.$$.fragment,Is),nb=d(Is),wd=r(Is,"P",{});var Ij=i(wd);ob=n(Ij,"Examples:"),Ij.forEach(s),rb=d(Is),b(zn.$$.fragment,Is),Is.forEach(s),Os.forEach(s),Zp=d(t),mt=r(t,"H2",{class:!0});var Bc=i(mt);Kt=r(Bc,"A",{id:!0,class:!0,href:!0});var Wj=i(Kt);yd=r(Wj,"SPAN",{});var Uj=i(yd);b($n.$$.fragment,Uj),Uj.forEach(s),Wj.forEach(s),ib=d(Bc),kd=r(Bc,"SPAN",{});var Hj=i(kd);lb=n(Hj,"TapasForQuestionAnswering"),Hj.forEach(s),Bc.forEach(s),ec=d(t),es=r(t,"DIV",{class:!0});var Ws=i(es);b(Cn.$$.fragment,Ws),db=d(Ws),ft=r(Ws,"P",{});var Dr=i(ft);pb=n(Dr,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),jd=r(Dr,"CODE",{});var Bj=i(jd);cb=n(Bj,"logits"),Bj.forEach(s),hb=n(Dr," and optional "),qd=r(Dr,"CODE",{});var Gj=i(qd);ub=n(Gj,"logits_aggregation"),Gj.forEach(s),mb=n(Dr,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Dr.forEach(s),fb=d(Ws),Mn=r(Ws,"P",{});var Gc=i(Mn);gb=n(Gc,"This model inherits from "),pr=r(Gc,"A",{href:!0});var Rj=i(pr);_b=n(Rj,"PreTrainedModel"),Rj.forEach(s),Tb=n(Gc,`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),Gc.forEach(s),vb=d(Ws),Pn=r(Ws,"P",{});var Rc=i(Pn);bb=n(Rc,"This model is also a PyTorch "),Sn=r(Rc,"A",{href:!0,rel:!0});var Vj=i(Sn);wb=n(Vj,"torch.nn.Module"),Vj.forEach(s),yb=n(Rc,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),Rc.forEach(s),kb=d(Ws),os=r(Ws,"DIV",{class:!0});var Us=i(os);b(Dn.$$.fragment,Us),jb=d(Us),gt=r(Us,"P",{});var Nr=i(gt);qb=n(Nr,"The "),cr=r(Nr,"A",{href:!0});var Kj=i(cr);Eb=n(Kj,"TapasForQuestionAnswering"),Kj.forEach(s),xb=n(Nr," forward method, overrides the "),Ed=r(Nr,"CODE",{});var Yj=i(Ed);Fb=n(Yj,"__call__"),Yj.forEach(s),Ab=n(Nr," special method."),Nr.forEach(s),zb=d(Us),b(Yt.$$.fragment,Us),$b=d(Us),xd=r(Us,"P",{});var Jj=i(xd);Cb=n(Jj,"Examples:"),Jj.forEach(s),Mb=d(Us),b(Nn.$$.fragment,Us),Us.forEach(s),Ws.forEach(s),sc=d(t),_t=r(t,"H2",{class:!0});var Vc=i(_t);Jt=r(Vc,"A",{id:!0,class:!0,href:!0});var Xj=i(Jt);Fd=r(Xj,"SPAN",{});var Zj=i(Fd);b(Ln.$$.fragment,Zj),Zj.forEach(s),Xj.forEach(s),Pb=d(Vc),Ad=r(Vc,"SPAN",{});var e0=i(Ad);Sb=n(e0,"TFTapasModel"),e0.forEach(s),Vc.forEach(s),tc=d(t),Ne=r(t,"DIV",{class:!0});var js=i(Ne);b(Qn.$$.fragment,js),Db=d(js),zd=r(js,"P",{});var s0=i(zd);Nb=n(s0,"The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),s0.forEach(s),Lb=d(js),On=r(js,"P",{});var Kc=i(On);Qb=n(Kc,"This model inherits from "),hr=r(Kc,"A",{href:!0});var t0=i(hr);Ob=n(t0,"TFPreTrainedModel"),t0.forEach(s),Ib=n(Kc,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Kc.forEach(s),Wb=d(js),In=r(js,"P",{});var Yc=i(In);Ub=n(Yc,"This model is also a "),Wn=r(Yc,"A",{href:!0,rel:!0});var a0=i(Wn);Hb=n(a0,"tf.keras.Model"),a0.forEach(s),Bb=n(Yc,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Yc.forEach(s),Gb=d(js),b(Xt.$$.fragment,js),Rb=d(js),rs=r(js,"DIV",{class:!0});var Hs=i(rs);b(Un.$$.fragment,Hs),Vb=d(Hs),Tt=r(Hs,"P",{});var Lr=i(Tt);Kb=n(Lr,"The "),ur=r(Lr,"A",{href:!0});var n0=i(ur);Yb=n(n0,"TFTapasModel"),n0.forEach(s),Jb=n(Lr," forward method, overrides the "),$d=r(Lr,"CODE",{});var o0=i($d);Xb=n(o0,"__call__"),o0.forEach(s),Zb=n(Lr," special method."),Lr.forEach(s),ew=d(Hs),b(Zt.$$.fragment,Hs),sw=d(Hs),Cd=r(Hs,"P",{});var r0=i(Cd);tw=n(r0,"Examples:"),r0.forEach(s),aw=d(Hs),b(Hn.$$.fragment,Hs),Hs.forEach(s),js.forEach(s),ac=d(t),vt=r(t,"H2",{class:!0});var Jc=i(vt);ea=r(Jc,"A",{id:!0,class:!0,href:!0});var i0=i(ea);Md=r(i0,"SPAN",{});var l0=i(Md);b(Bn.$$.fragment,l0),l0.forEach(s),i0.forEach(s),nw=d(Jc),Pd=r(Jc,"SPAN",{});var d0=i(Pd);ow=n(d0,"TFTapasForMaskedLM"),d0.forEach(s),Jc.forEach(s),nc=d(t),Le=r(t,"DIV",{class:!0});var qs=i(Le);b(Gn.$$.fragment,qs),rw=d(qs),Rn=r(qs,"P",{});var Xc=i(Rn);iw=n(Xc,"Tapas Model with a "),Sd=r(Xc,"CODE",{});var p0=i(Sd);lw=n(p0,"language modeling"),p0.forEach(s),dw=n(Xc," head on top."),Xc.forEach(s),pw=d(qs),Vn=r(qs,"P",{});var Zc=i(Vn);cw=n(Zc,"This model inherits from "),mr=r(Zc,"A",{href:!0});var c0=i(mr);hw=n(c0,"TFPreTrainedModel"),c0.forEach(s),uw=n(Zc,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Zc.forEach(s),mw=d(qs),Kn=r(qs,"P",{});var eh=i(Kn);fw=n(eh,"This model is also a "),Yn=r(eh,"A",{href:!0,rel:!0});var h0=i(Yn);gw=n(h0,"tf.keras.Model"),h0.forEach(s),_w=n(eh,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),eh.forEach(s),Tw=d(qs),b(sa.$$.fragment,qs),vw=d(qs),is=r(qs,"DIV",{class:!0});var Bs=i(is);b(Jn.$$.fragment,Bs),bw=d(Bs),bt=r(Bs,"P",{});var Qr=i(bt);ww=n(Qr,"The "),fr=r(Qr,"A",{href:!0});var u0=i(fr);yw=n(u0,"TFTapasForMaskedLM"),u0.forEach(s),kw=n(Qr," forward method, overrides the "),Dd=r(Qr,"CODE",{});var m0=i(Dd);jw=n(m0,"__call__"),m0.forEach(s),qw=n(Qr," special method."),Qr.forEach(s),Ew=d(Bs),b(ta.$$.fragment,Bs),xw=d(Bs),Nd=r(Bs,"P",{});var f0=i(Nd);Fw=n(f0,"Examples:"),f0.forEach(s),Aw=d(Bs),b(Xn.$$.fragment,Bs),Bs.forEach(s),qs.forEach(s),oc=d(t),wt=r(t,"H2",{class:!0});var sh=i(wt);aa=r(sh,"A",{id:!0,class:!0,href:!0});var g0=i(aa);Ld=r(g0,"SPAN",{});var _0=i(Ld);b(Zn.$$.fragment,_0),_0.forEach(s),g0.forEach(s),zw=d(sh),Qd=r(sh,"SPAN",{});var T0=i(Qd);$w=n(T0,"TFTapasForSequenceClassification"),T0.forEach(s),sh.forEach(s),rc=d(t),Qe=r(t,"DIV",{class:!0});var Es=i(Qe);b(eo.$$.fragment,Es),Cw=d(Es),Od=r(Es,"P",{});var v0=i(Od);Mw=n(v0,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),v0.forEach(s),Pw=d(Es),so=r(Es,"P",{});var th=i(so);Sw=n(th,"This model inherits from "),gr=r(th,"A",{href:!0});var b0=i(gr);Dw=n(b0,"TFPreTrainedModel"),b0.forEach(s),Nw=n(th,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),th.forEach(s),Lw=d(Es),to=r(Es,"P",{});var ah=i(to);Qw=n(ah,"This model is also a "),ao=r(ah,"A",{href:!0,rel:!0});var w0=i(ao);Ow=n(w0,"tf.keras.Model"),w0.forEach(s),Iw=n(ah,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),ah.forEach(s),Ww=d(Es),b(na.$$.fragment,Es),Uw=d(Es),ls=r(Es,"DIV",{class:!0});var Gs=i(ls);b(no.$$.fragment,Gs),Hw=d(Gs),yt=r(Gs,"P",{});var Or=i(yt);Bw=n(Or,"The "),_r=r(Or,"A",{href:!0});var y0=i(_r);Gw=n(y0,"TFTapasForSequenceClassification"),y0.forEach(s),Rw=n(Or," forward method, overrides the "),Id=r(Or,"CODE",{});var k0=i(Id);Vw=n(k0,"__call__"),k0.forEach(s),Kw=n(Or," special method."),Or.forEach(s),Yw=d(Gs),b(oa.$$.fragment,Gs),Jw=d(Gs),Wd=r(Gs,"P",{});var j0=i(Wd);Xw=n(j0,"Examples:"),j0.forEach(s),Zw=d(Gs),b(oo.$$.fragment,Gs),Gs.forEach(s),Es.forEach(s),ic=d(t),kt=r(t,"H2",{class:!0});var nh=i(kt);ra=r(nh,"A",{id:!0,class:!0,href:!0});var q0=i(ra);Ud=r(q0,"SPAN",{});var E0=i(Ud);b(ro.$$.fragment,E0),E0.forEach(s),q0.forEach(s),ey=d(nh),Hd=r(nh,"SPAN",{});var x0=i(Hd);sy=n(x0,"TFTapasForQuestionAnswering"),x0.forEach(s),nh.forEach(s),lc=d(t),Oe=r(t,"DIV",{class:!0});var xs=i(Oe);b(io.$$.fragment,xs),ty=d(xs),jt=r(xs,"P",{});var Ir=i(jt);ay=n(Ir,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Bd=r(Ir,"CODE",{});var F0=i(Bd);ny=n(F0,"logits"),F0.forEach(s),oy=n(Ir," and optional "),Gd=r(Ir,"CODE",{});var A0=i(Gd);ry=n(A0,"logits_aggregation"),A0.forEach(s),iy=n(Ir,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Ir.forEach(s),ly=d(xs),lo=r(xs,"P",{});var oh=i(lo);dy=n(oh,"This model inherits from "),Tr=r(oh,"A",{href:!0});var z0=i(Tr);py=n(z0,"TFPreTrainedModel"),z0.forEach(s),cy=n(oh,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),oh.forEach(s),hy=d(xs),po=r(xs,"P",{});var rh=i(po);uy=n(rh,"This model is also a "),co=r(rh,"A",{href:!0,rel:!0});var $0=i(co);my=n($0,"tf.keras.Model"),$0.forEach(s),fy=n(rh,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),rh.forEach(s),gy=d(xs),b(ia.$$.fragment,xs),_y=d(xs),ds=r(xs,"DIV",{class:!0});var Rs=i(ds);b(ho.$$.fragment,Rs),Ty=d(Rs),qt=r(Rs,"P",{});var Wr=i(qt);vy=n(Wr,"The "),vr=r(Wr,"A",{href:!0});var C0=i(vr);by=n(C0,"TFTapasForQuestionAnswering"),C0.forEach(s),wy=n(Wr," forward method, overrides the "),Rd=r(Wr,"CODE",{});var M0=i(Rd);yy=n(M0,"__call__"),M0.forEach(s),ky=n(Wr," special method."),Wr.forEach(s),jy=d(Rs),b(la.$$.fragment,Rs),qy=d(Rs),Vd=r(Rs,"P",{});var P0=i(Vd);Ey=n(P0,"Examples:"),P0.forEach(s),xy=d(Rs),b(uo.$$.fragment,Rs),Rs.forEach(s),xs.forEach(s),this.h()},h(){p(m,"name","hf:doc:metadata"),p(m,"content",JSON.stringify(Z0)),p(g,"id","tapas"),p(g,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(g,"href","#tapas"),p(f,"class","relative group"),p(Y,"id","overview"),p(Y,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Y,"href","#overview"),p(A,"class","relative group"),p(ee,"href","https://www.aclweb.org/anthology/2020.acl-main.398"),p(ee,"rel","nofollow"),p(te,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),p(te,"rel","nofollow"),p(ae,"href","https://github.com/ppasupat/WikiTableQuestions"),p(ae,"rel","nofollow"),p(P,"href","https://github.com/salesforce/WikiSQL"),p(P,"rel","nofollow"),p(qe,"href","https://github.com/wenhuchen/Table-Fact-Checking"),p(qe,"rel","nofollow"),p(fa,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.27/"),p(fa,"rel","nofollow"),Q0(Ft.src,Iy="https://huggingface.co/datasets/huggingface/documentation-images/resolve/main/tapas_architecture.png")||p(Ft,"src",Iy),p(Ft,"alt","drawing"),p(Ft,"width","600"),p(ga,"href","https://huggingface.co/nielsr"),p(ga,"rel","nofollow"),p(_a,"href","https://huggingface.co/kamalkraj"),p(_a,"rel","nofollow"),p(Ta,"href","https://github.com/google-research/tapas"),p(Ta,"rel","nofollow"),p(vo,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig"),p(va,"href","https://huggingface.co/models?search=tapas"),p(va,"rel","nofollow"),p(ba,"href","https://github.com/google-research/tapas%3E"),p(ba,"rel","nofollow"),p(At,"id","usage-finetuning"),p(At,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(At,"href","#usage-finetuning"),p(Ks,"class","relative group"),p(bo,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(yo,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(ja,"href","https://github.com/rusty1s/pytorch_scatter"),p(ja,"rel","nofollow"),p(qa,"href","https://github.com/tensorflow/probability"),p(qa,"rel","nofollow"),p(jo,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasConfig"),p(qo,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(Fa,"href","https://github.com/google-research/tapas/issues/91#issuecomment-735719340"),p(Fa,"rel","nofollow"),p(Aa,"href","https://huggingface.co/models?search=tapas"),p(Aa,"rel","nofollow"),p(za,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),p(za,"rel","nofollow"),p($a,"href","https://github.com/google-research/tapas/issues/50#issuecomment-705465960"),p($a,"rel","nofollow"),p(Ca,"href","https://github.com/NielsRogge/tapas_utils"),p(Ca,"rel","nofollow"),p(No,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer"),p(Lo,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(Qo,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),p(Oo,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer"),p(Io,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer"),p(Wo,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer"),p(Qa,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),p(Qa,"rel","nofollow"),p(Oa,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),p(Oa,"rel","nofollow"),p(Ho,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(Bo,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),p(Nt,"id","usage-inference"),p(Nt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Nt,"href","#usage-inference"),p(tt,"class","relative group"),p(Go,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(Ro,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),p(Vo,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer"),p(Ha,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),p(Ha,"rel","nofollow"),p(Ba,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),p(Ba,"rel","nofollow"),p(Qt,"id","transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),p(Qt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Qt,"href","#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),p(at,"class","relative group"),p(Ko,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(nt,"class","docstring"),p(Ot,"id","transformers.TapasConfig"),p(Ot,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ot,"href","#transformers.TapasConfig"),p(ot,"class","relative group"),p(Yo,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasModel"),p(Jo,"href","/docs/transformers/v4.15.0/en/main_classes/configuration#transformers.PretrainedConfig"),p(Xa,"href","https://github.com/google-research/tapas/tree/master"),p(Xa,"rel","nofollow"),p(Xe,"class","docstring"),p(It,"id","transformers.TapasTokenizer"),p(It,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(It,"href","#transformers.TapasTokenizer"),p(rt,"class","relative group"),p(Xo,"href","/docs/transformers/v4.15.0/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),p(Zo,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer"),p(sr,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasTokenizer"),p(Wt,"class","docstring"),p(tr,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(rn,"href","https://github.com/google-research/tapas/blob/4908213eb4df7aa988573350278b44c4dbe3f71b/tapas/experiments/prediction_utils.py#L288"),p(rn,"rel","nofollow"),p(Ps,"class","docstring"),p(id,"class","docstring"),p(de,"class","docstring"),p(Ut,"id","transformers.TapasModel"),p(Ut,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Ut,"href","#transformers.TapasModel"),p(it,"class","relative group"),p(ar,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),p(hn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(hn,"rel","nofollow"),p(nr,"href","/docs/transformers/v4.15.0/en/model_doc/bert#transformers.BertModel"),p(fn,"href","https://arxiv.org/abs/1706.03762"),p(fn,"rel","nofollow"),p(or,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasModel"),p(ts,"class","docstring"),p(De,"class","docstring"),p(Bt,"id","transformers.TapasForMaskedLM"),p(Bt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Bt,"href","#transformers.TapasForMaskedLM"),p(dt,"class","relative group"),p(rr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),p(wn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(wn,"rel","nofollow"),p(ir,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasForMaskedLM"),p(as,"class","docstring"),p(gs,"class","docstring"),p(Rt,"id","transformers.TapasForSequenceClassification"),p(Rt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Rt,"href","#transformers.TapasForSequenceClassification"),p(ht,"class","relative group"),p(lr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),p(Fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Fn,"rel","nofollow"),p(dr,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasForSequenceClassification"),p(ns,"class","docstring"),p(Ze,"class","docstring"),p(Kt,"id","transformers.TapasForQuestionAnswering"),p(Kt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Kt,"href","#transformers.TapasForQuestionAnswering"),p(mt,"class","relative group"),p(pr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.PreTrainedModel"),p(Sn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),p(Sn,"rel","nofollow"),p(cr,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),p(os,"class","docstring"),p(es,"class","docstring"),p(Jt,"id","transformers.TFTapasModel"),p(Jt,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(Jt,"href","#transformers.TFTapasModel"),p(_t,"class","relative group"),p(hr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),p(Wn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Wn,"rel","nofollow"),p(ur,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TFTapasModel"),p(rs,"class","docstring"),p(Ne,"class","docstring"),p(ea,"id","transformers.TFTapasForMaskedLM"),p(ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ea,"href","#transformers.TFTapasForMaskedLM"),p(vt,"class","relative group"),p(mr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),p(Yn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(Yn,"rel","nofollow"),p(fr,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TFTapasForMaskedLM"),p(is,"class","docstring"),p(Le,"class","docstring"),p(aa,"id","transformers.TFTapasForSequenceClassification"),p(aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(aa,"href","#transformers.TFTapasForSequenceClassification"),p(wt,"class","relative group"),p(gr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),p(ao,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(ao,"rel","nofollow"),p(_r,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TFTapasForSequenceClassification"),p(ls,"class","docstring"),p(Qe,"class","docstring"),p(ra,"id","transformers.TFTapasForQuestionAnswering"),p(ra,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),p(ra,"href","#transformers.TFTapasForQuestionAnswering"),p(kt,"class","relative group"),p(Tr,"href","/docs/transformers/v4.15.0/en/main_classes/model#transformers.TFPreTrainedModel"),p(co,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),p(co,"rel","nofollow"),p(vr,"href","/docs/transformers/v4.15.0/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),p(ds,"class","docstring"),p(Oe,"class","docstring")},m(t,h){e(document.head,m),c(t,x,h),c(t,f,h),e(f,g),e(g,q),w(T,q,null),e(f,_),e(f,F),e(F,_e),c(t,K,h),c(t,A,h),e(A,Y),e(Y,O),w(Z,O,null),e(A,Te),e(A,I),e(I,ve),c(t,ce,h),c(t,W,h),e(W,N),e(W,ee),e(ee,se),e(W,z),c(t,$,h),c(t,oe,h),e(oe,H),c(t,he,h),c(t,V,h),e(V,L),e(L,te),e(te,be),e(L,C),e(V,we),e(V,Q),e(Q,ae),e(ae,ye),e(Q,B),e(V,ke),e(V,re),e(re,P),e(P,je),e(re,G),c(t,ue,h),c(t,u,h),e(u,E),c(t,J,h),c(t,xe,h),e(xe,Ge),c(t,S,h),c(t,Fe,h),e(Fe,$e),e($e,Re),c(t,D,h),c(t,M,h),e(M,Ve),e(M,Ce),e(Ce,R),e(M,Ke),e(M,qe),e(qe,Ee),e(M,Ye),e(M,fa),e(fa,ih),e(M,lh),c(t,ap,h),c(t,Ft,h),c(t,np,h),c(t,_o,h),e(_o,dh),c(t,op,h),c(t,_s,h),e(_s,ph),e(_s,ga),e(ga,ch),e(_s,hh),e(_s,_a),e(_a,uh),e(_s,mh),e(_s,Ta),e(Ta,fh),e(_s,gh),c(t,rp,h),c(t,To,h),e(To,_h),c(t,ip,h),c(t,Ts,h),e(Ts,Me),e(Me,Th),e(Me,Hr),e(Hr,vh),e(Me,bh),e(Me,vo),e(vo,wh),e(Me,yh),e(Me,Br),e(Br,kh),e(Me,jh),e(Me,va),e(va,qh),e(Me,Eh),e(Me,Gr),e(Gr,xh),e(Me,Fh),e(Me,Rr),e(Rr,Ah),e(Me,zh),e(Ts,$h),e(Ts,Je),e(Je,Ch),e(Je,Vr),e(Vr,Mh),e(Je,Ph),e(Je,Kr),e(Kr,Sh),e(Je,Dh),e(Je,Yr),e(Yr,Nh),e(Je,Lh),e(Je,Jr),e(Jr,Qh),e(Je,Oh),e(Je,ba),e(ba,Ih),e(Je,Wh),e(Ts,Uh),e(Ts,Vs),e(Vs,Hh),e(Vs,Xr),e(Xr,Bh),e(Vs,Gh),e(Vs,Zr),e(Zr,Rh),e(Vs,Vh),e(Ts,Kh),e(Ts,ei),e(ei,Yh),c(t,lp,h),c(t,Ks,h),e(Ks,At),e(At,si),w(wa,si,null),e(Ks,Jh),e(Ks,ti),e(ti,Xh),c(t,dp,h),c(t,zt,h),e(zt,Zh),e(zt,bo),e(bo,eu),e(zt,su),c(t,pp,h),c(t,wo,h),e(wo,ai),e(ai,tu),c(t,cp,h),c(t,$t,h),e($t,au),e($t,yo),e(yo,nu),e($t,ou),c(t,hp,h),c(t,zs,h),e(zs,ni),e(ni,ru),e(zs,iu),e(zs,ya),e(ya,lu),e(ya,oi),e(oi,du),e(ya,pu),e(zs,cu),e(zs,ka),e(ka,hu),e(ka,ri),e(ri,uu),e(ka,mu),c(t,up,h),c(t,ko,h),e(ko,fu),c(t,mp,h),c(t,Ct,h),e(Ct,ii),e(ii,Ys),e(Ys,li),e(li,di),e(di,gu),e(Ys,_u),e(Ys,pi),e(pi,ci),e(ci,Tu),e(Ys,vu),e(Ys,hi),e(hi,ui),e(ui,bu),e(Ct,wu),e(Ct,Js),e(Js,Xs),e(Xs,mi),e(mi,yu),e(Xs,ku),e(Xs,fi),e(fi,ju),e(Xs,qu),e(Xs,gi),e(gi,Eu),e(Js,xu),e(Js,Zs),e(Zs,_i),e(_i,Fu),e(Zs,Au),e(Zs,Ti),e(Ti,zu),e(Zs,$u),e(Zs,vi),e(vi,Cu),e(Js,Mu),e(Js,et),e(et,bi),e(bi,Pu),e(et,Su),e(et,wi),e(wi,Du),e(et,Nu),e(et,yi),e(yi,Lu),c(t,fp,h),c(t,$s,h),e($s,Qu),e($s,ja),e(ja,Ou),e($s,Iu),e($s,qa),e(qa,Wu),e($s,Uu),c(t,gp,h),w(Ea,t,h),c(t,_p,h),c(t,Cs,h),e(Cs,Hu),e(Cs,jo),e(jo,Bu),e(Cs,Gu),e(Cs,qo),e(qo,Ru),e(Cs,Vu),c(t,Tp,h),w(xa,t,h),c(t,vp,h),c(t,Mt,h),e(Mt,Ku),e(Mt,Fa),e(Fa,Yu),e(Mt,Ju),c(t,bp,h),c(t,Pt,h),e(Pt,Xu),e(Pt,Aa),e(Aa,Zu),e(Pt,em),c(t,wp,h),c(t,Eo,h),e(Eo,ki),e(ki,sm),c(t,yp,h),c(t,St,h),e(St,tm),e(St,za),e(za,am),e(St,nm),c(t,kp,h),c(t,ie,h),e(ie,xo),e(xo,ji),e(ji,om),e(xo,rm),e(ie,im),e(ie,Fo),e(Fo,qi),e(qi,lm),e(Fo,dm),e(ie,pm),e(ie,Ao),e(Ao,Ei),e(Ei,cm),e(Ao,hm),e(ie,um),e(ie,zo),e(zo,xi),e(xi,mm),e(zo,fm),e(ie,gm),e(ie,$o),e($o,Fi),e(Fi,_m),e($o,Tm),e(ie,vm),e(ie,Co),e(Co,Ai),e(Ai,bm),e(Co,wm),e(ie,ym),e(ie,Mo),e(Mo,zi),e(zi,km),e(Mo,jm),e(ie,qm),e(ie,Po),e(Po,$i),e($i,Em),e(Po,xm),e(ie,Fm),e(ie,So),e(So,Ci),e(Ci,Am),e(So,zm),c(t,jp,h),c(t,We,h),e(We,$m),e(We,$a),e($a,Cm),e(We,Mm),e(We,Ca),e(Ca,Pm),e(We,Sm),e(We,Mi),e(Mi,Dm),e(We,Nm),e(We,Pi),e(Pi,Lm),e(We,Qm),e(We,Si),e(Si,Om),e(We,Im),c(t,qp,h),c(t,Do,h),e(Do,Di),e(Di,Wm),c(t,Ep,h),c(t,Ae,h),e(Ae,Um),e(Ae,No),e(No,Hm),e(Ae,Bm),e(Ae,Ni),e(Ni,Gm),e(Ae,Rm),e(Ae,Li),e(Li,Vm),e(Ae,Km),e(Ae,Qi),e(Qi,Ym),e(Ae,Jm),e(Ae,Lo),e(Lo,Xm),e(Ae,Zm),e(Ae,Qo),e(Qo,ef),e(Ae,sf),c(t,xp,h),c(t,Dt,h),e(Dt,Oi),e(Oi,Ma),e(Ma,Ii),e(Ii,Wi),e(Wi,tf),e(Ma,af),e(Ma,Ui),e(Ui,Hi),e(Hi,nf),e(Dt,of),e(Dt,st),e(st,Pa),e(Pa,Bi),e(Bi,rf),e(Pa,lf),e(Pa,As),e(As,Gi),e(Gi,df),e(As,pf),e(As,Ri),e(Ri,cf),e(As,hf),e(As,Vi),e(Vi,uf),e(As,mf),e(As,Ki),e(Ki,ff),e(st,gf),e(st,Sa),e(Sa,Yi),e(Yi,_f),e(Sa,Tf),e(Sa,Pe),e(Pe,Ji),e(Ji,vf),e(Pe,bf),e(Pe,Xi),e(Xi,wf),e(Pe,yf),e(Pe,Zi),e(Zi,kf),e(Pe,jf),e(Pe,el),e(el,qf),e(Pe,Ef),e(Pe,sl),e(sl,xf),e(Pe,Ff),e(Pe,tl),e(tl,Af),e(Pe,zf),e(Pe,al),e(al,$f),e(st,Cf),e(st,Da),e(Da,nl),e(nl,Mf),e(Da,Pf),e(Da,ms),e(ms,ol),e(ol,Sf),e(ms,Df),e(ms,rl),e(rl,Nf),e(ms,Lf),e(ms,il),e(il,Qf),e(ms,Of),e(ms,ll),e(ll,If),e(ms,Wf),e(ms,dl),e(dl,Uf),c(t,Fp,h),c(t,le,h),e(le,Oo),e(Oo,Hf),e(le,Bf),e(le,pl),e(pl,Gf),e(le,Rf),e(le,cl),e(cl,Vf),e(le,Kf),e(le,hl),e(hl,Yf),e(le,Jf),e(le,ul),e(ul,Xf),e(le,Zf),e(le,ml),e(ml,eg),e(le,sg),e(le,fl),e(fl,tg),e(le,ag),e(le,gl),e(gl,ng),e(le,og),c(t,Ap,h),w(Na,t,h),c(t,zp,h),c(t,vs,h),e(vs,rg),e(vs,Io),e(Io,ig),e(vs,lg),e(vs,_l),e(_l,dg),e(vs,pg),e(vs,Tl),e(Tl,cg),e(vs,hg),c(t,$p,h),w(La,t,h),c(t,Cp,h),c(t,X,h),e(X,ug),e(X,vl),e(vl,mg),e(X,fg),e(X,bl),e(bl,gg),e(X,_g),e(X,wl),e(wl,Tg),e(X,vg),e(X,yl),e(yl,bg),e(X,wg),e(X,kl),e(kl,yg),e(X,kg),e(X,jl),e(jl,jg),e(X,qg),e(X,Wo),e(Wo,Eg),e(X,xg),e(X,Qa),e(Qa,Fg),e(X,Ag),e(X,Oa),e(Oa,zg),e(X,$g),c(t,Mp,h),c(t,Uo,h),e(Uo,ql),e(ql,Cg),c(t,Pp,h),c(t,Ms,h),e(Ms,Mg),e(Ms,Ho),e(Ho,Pg),e(Ms,Sg),e(Ms,Bo),e(Bo,Dg),e(Ms,Ng),c(t,Sp,h),w(Ia,t,h),c(t,Dp,h),c(t,tt,h),e(tt,Nt),e(Nt,El),w(Wa,El,null),e(tt,Lg),e(tt,xl),e(xl,Qg),c(t,Np,h),c(t,me,h),e(me,Og),e(me,Go),e(Go,Ig),e(me,Wg),e(me,Ro),e(Ro,Ug),e(me,Hg),e(me,Fl),e(Fl,Bg),e(me,Gg),e(me,Al),e(Al,Rg),e(me,Vg),e(me,zl),e(zl,Kg),e(me,Yg),e(me,Vo),e(Vo,Jg),e(me,Xg),e(me,$l),e($l,Zg),e(me,e_),c(t,Lp,h),c(t,Lt,h),e(Lt,s_),e(Lt,Cl),e(Cl,t_),e(Lt,a_),c(t,Qp,h),w(Ua,t,h),c(t,Op,h),c(t,Ue,h),e(Ue,n_),e(Ue,Ml),e(Ml,o_),e(Ue,r_),e(Ue,Pl),e(Pl,i_),e(Ue,l_),e(Ue,Sl),e(Sl,d_),e(Ue,p_),e(Ue,Ha),e(Ha,c_),e(Ue,h_),e(Ue,Ba),e(Ba,u_),e(Ue,m_),c(t,Ip,h),c(t,at,h),e(at,Qt),e(Qt,Dl),w(Ga,Dl,null),e(at,f_),e(at,Nl),e(Nl,g_),c(t,Wp,h),c(t,nt,h),w(Ra,nt,null),e(nt,__),e(nt,Va),e(Va,T_),e(Va,Ko),e(Ko,v_),e(Va,b_),c(t,Up,h),c(t,ot,h),e(ot,Ot),e(Ot,Ll),w(Ka,Ll,null),e(ot,w_),e(ot,Ql),e(Ql,y_),c(t,Hp,h),c(t,Xe,h),w(Ya,Xe,null),e(Xe,k_),e(Xe,fs),e(fs,j_),e(fs,Yo),e(Yo,q_),e(fs,E_),e(fs,Ol),e(Ol,x_),e(fs,F_),e(fs,Il),e(Il,A_),e(fs,z_),e(fs,Jo),e(Jo,$_),e(fs,C_),e(Xe,M_),e(Xe,Ja),e(Ja,P_),e(Ja,Xa),e(Xa,S_),e(Ja,D_),e(Xe,N_),e(Xe,Wl),e(Wl,L_),e(Xe,Q_),w(Za,Xe,null),c(t,Bp,h),c(t,rt,h),e(rt,It),e(It,Ul),w(en,Ul,null),e(rt,O_),e(rt,Hl),e(Hl,I_),c(t,Gp,h),c(t,de,h),w(sn,de,null),e(de,W_),e(de,Bl),e(Bl,U_),e(de,H_),e(de,ne),e(ne,B_),e(ne,Xo),e(Xo,G_),e(ne,R_),e(ne,Zo),e(Zo,V_),e(ne,K_),e(ne,Gl),e(Gl,Y_),e(ne,J_),e(ne,Rl),e(Rl,X_),e(ne,Z_),e(ne,Vl),e(Vl,eT),e(ne,sT),e(ne,Kl),e(Kl,tT),e(ne,aT),e(ne,Yl),e(Yl,nT),e(ne,oT),e(ne,Jl),e(Jl,rT),e(ne,iT),e(ne,Xl),e(Xl,lT),e(ne,dT),e(de,pT),e(de,Se),e(Se,Zl),e(Zl,cT),e(Se,hT),e(Se,ed),e(ed,uT),e(Se,mT),e(Se,sd),e(sd,fT),e(Se,gT),e(Se,td),e(td,_T),e(Se,TT),e(Se,ad),e(ad,vT),e(Se,bT),e(Se,nd),e(nd,wT),e(Se,yT),e(Se,od),e(od,kT),e(de,jT),e(de,er),e(er,sr),e(sr,qT),e(er,ET),e(de,xT),e(de,Wt),w(tn,Wt,null),e(Wt,FT),e(Wt,rd),e(rd,AT),e(de,zT),e(de,Ps),w(an,Ps,null),e(Ps,$T),e(Ps,nn),e(nn,CT),e(nn,tr),e(tr,MT),e(nn,PT),e(Ps,ST),e(Ps,on),e(on,DT),e(on,rn),e(rn,NT),e(on,LT),e(de,QT),e(de,id),c(t,Rp,h),c(t,it,h),e(it,Ut),e(Ut,ld),w(ln,ld,null),e(it,OT),e(it,dd),e(dd,IT),c(t,Vp,h),c(t,De,h),w(dn,De,null),e(De,WT),e(De,pn),e(pn,UT),e(pn,ar),e(ar,HT),e(pn,BT),e(De,GT),e(De,cn),e(cn,RT),e(cn,hn),e(hn,VT),e(cn,KT),e(De,YT),e(De,un),e(un,JT),e(un,nr),e(nr,XT),e(un,ZT),e(De,ev),e(De,mn),e(mn,sv),e(mn,fn),e(fn,tv),e(mn,av),e(De,nv),e(De,ts),w(gn,ts,null),e(ts,ov),e(ts,lt),e(lt,rv),e(lt,or),e(or,iv),e(lt,lv),e(lt,pd),e(pd,dv),e(lt,pv),e(ts,cv),w(Ht,ts,null),e(ts,hv),e(ts,cd),e(cd,uv),e(ts,mv),w(_n,ts,null),c(t,Kp,h),c(t,dt,h),e(dt,Bt),e(Bt,hd),w(Tn,hd,null),e(dt,fv),e(dt,ud),e(ud,gv),c(t,Yp,h),c(t,gs,h),w(vn,gs,null),e(gs,_v),e(gs,pt),e(pt,Tv),e(pt,md),e(md,vv),e(pt,bv),e(pt,rr),e(rr,wv),e(pt,yv),e(gs,kv),e(gs,bn),e(bn,jv),e(bn,wn),e(wn,qv),e(bn,Ev),e(gs,xv),e(gs,as),w(yn,as,null),e(as,Fv),e(as,ct),e(ct,Av),e(ct,ir),e(ir,zv),e(ct,$v),e(ct,fd),e(fd,Cv),e(ct,Mv),e(as,Pv),w(Gt,as,null),e(as,Sv),e(as,gd),e(gd,Dv),e(as,Nv),w(kn,as,null),c(t,Jp,h),c(t,ht,h),e(ht,Rt),e(Rt,_d),w(jn,_d,null),e(ht,Lv),e(ht,Td),e(Td,Qv),c(t,Xp,h),c(t,Ze,h),w(qn,Ze,null),e(Ze,Ov),e(Ze,vd),e(vd,Iv),e(Ze,Wv),e(Ze,En),e(En,Uv),e(En,lr),e(lr,Hv),e(En,Bv),e(Ze,Gv),e(Ze,xn),e(xn,Rv),e(xn,Fn),e(Fn,Vv),e(xn,Kv),e(Ze,Yv),e(Ze,ns),w(An,ns,null),e(ns,Jv),e(ns,ut),e(ut,Xv),e(ut,dr),e(dr,Zv),e(ut,eb),e(ut,bd),e(bd,sb),e(ut,tb),e(ns,ab),w(Vt,ns,null),e(ns,nb),e(ns,wd),e(wd,ob),e(ns,rb),w(zn,ns,null),c(t,Zp,h),c(t,mt,h),e(mt,Kt),e(Kt,yd),w($n,yd,null),e(mt,ib),e(mt,kd),e(kd,lb),c(t,ec,h),c(t,es,h),w(Cn,es,null),e(es,db),e(es,ft),e(ft,pb),e(ft,jd),e(jd,cb),e(ft,hb),e(ft,qd),e(qd,ub),e(ft,mb),e(es,fb),e(es,Mn),e(Mn,gb),e(Mn,pr),e(pr,_b),e(Mn,Tb),e(es,vb),e(es,Pn),e(Pn,bb),e(Pn,Sn),e(Sn,wb),e(Pn,yb),e(es,kb),e(es,os),w(Dn,os,null),e(os,jb),e(os,gt),e(gt,qb),e(gt,cr),e(cr,Eb),e(gt,xb),e(gt,Ed),e(Ed,Fb),e(gt,Ab),e(os,zb),w(Yt,os,null),e(os,$b),e(os,xd),e(xd,Cb),e(os,Mb),w(Nn,os,null),c(t,sc,h),c(t,_t,h),e(_t,Jt),e(Jt,Fd),w(Ln,Fd,null),e(_t,Pb),e(_t,Ad),e(Ad,Sb),c(t,tc,h),c(t,Ne,h),w(Qn,Ne,null),e(Ne,Db),e(Ne,zd),e(zd,Nb),e(Ne,Lb),e(Ne,On),e(On,Qb),e(On,hr),e(hr,Ob),e(On,Ib),e(Ne,Wb),e(Ne,In),e(In,Ub),e(In,Wn),e(Wn,Hb),e(In,Bb),e(Ne,Gb),w(Xt,Ne,null),e(Ne,Rb),e(Ne,rs),w(Un,rs,null),e(rs,Vb),e(rs,Tt),e(Tt,Kb),e(Tt,ur),e(ur,Yb),e(Tt,Jb),e(Tt,$d),e($d,Xb),e(Tt,Zb),e(rs,ew),w(Zt,rs,null),e(rs,sw),e(rs,Cd),e(Cd,tw),e(rs,aw),w(Hn,rs,null),c(t,ac,h),c(t,vt,h),e(vt,ea),e(ea,Md),w(Bn,Md,null),e(vt,nw),e(vt,Pd),e(Pd,ow),c(t,nc,h),c(t,Le,h),w(Gn,Le,null),e(Le,rw),e(Le,Rn),e(Rn,iw),e(Rn,Sd),e(Sd,lw),e(Rn,dw),e(Le,pw),e(Le,Vn),e(Vn,cw),e(Vn,mr),e(mr,hw),e(Vn,uw),e(Le,mw),e(Le,Kn),e(Kn,fw),e(Kn,Yn),e(Yn,gw),e(Kn,_w),e(Le,Tw),w(sa,Le,null),e(Le,vw),e(Le,is),w(Jn,is,null),e(is,bw),e(is,bt),e(bt,ww),e(bt,fr),e(fr,yw),e(bt,kw),e(bt,Dd),e(Dd,jw),e(bt,qw),e(is,Ew),w(ta,is,null),e(is,xw),e(is,Nd),e(Nd,Fw),e(is,Aw),w(Xn,is,null),c(t,oc,h),c(t,wt,h),e(wt,aa),e(aa,Ld),w(Zn,Ld,null),e(wt,zw),e(wt,Qd),e(Qd,$w),c(t,rc,h),c(t,Qe,h),w(eo,Qe,null),e(Qe,Cw),e(Qe,Od),e(Od,Mw),e(Qe,Pw),e(Qe,so),e(so,Sw),e(so,gr),e(gr,Dw),e(so,Nw),e(Qe,Lw),e(Qe,to),e(to,Qw),e(to,ao),e(ao,Ow),e(to,Iw),e(Qe,Ww),w(na,Qe,null),e(Qe,Uw),e(Qe,ls),w(no,ls,null),e(ls,Hw),e(ls,yt),e(yt,Bw),e(yt,_r),e(_r,Gw),e(yt,Rw),e(yt,Id),e(Id,Vw),e(yt,Kw),e(ls,Yw),w(oa,ls,null),e(ls,Jw),e(ls,Wd),e(Wd,Xw),e(ls,Zw),w(oo,ls,null),c(t,ic,h),c(t,kt,h),e(kt,ra),e(ra,Ud),w(ro,Ud,null),e(kt,ey),e(kt,Hd),e(Hd,sy),c(t,lc,h),c(t,Oe,h),w(io,Oe,null),e(Oe,ty),e(Oe,jt),e(jt,ay),e(jt,Bd),e(Bd,ny),e(jt,oy),e(jt,Gd),e(Gd,ry),e(jt,iy),e(Oe,ly),e(Oe,lo),e(lo,dy),e(lo,Tr),e(Tr,py),e(lo,cy),e(Oe,hy),e(Oe,po),e(po,uy),e(po,co),e(co,my),e(po,fy),e(Oe,gy),w(ia,Oe,null),e(Oe,_y),e(Oe,ds),w(ho,ds,null),e(ds,Ty),e(ds,qt),e(qt,vy),e(qt,vr),e(vr,by),e(qt,wy),e(qt,Rd),e(Rd,yy),e(qt,ky),e(ds,jy),w(la,ds,null),e(ds,qy),e(ds,Vd),e(Vd,Ey),e(ds,xy),w(uo,ds,null),dc=!0},p(t,[h]){const mo={};h&2&&(mo.$$scope={dirty:h,ctx:t}),Ht.$set(mo);const Kd={};h&2&&(Kd.$$scope={dirty:h,ctx:t}),Gt.$set(Kd);const Yd={};h&2&&(Yd.$$scope={dirty:h,ctx:t}),Vt.$set(Yd);const Jd={};h&2&&(Jd.$$scope={dirty:h,ctx:t}),Yt.$set(Jd);const fo={};h&2&&(fo.$$scope={dirty:h,ctx:t}),Xt.$set(fo);const Xd={};h&2&&(Xd.$$scope={dirty:h,ctx:t}),Zt.$set(Xd);const Zd={};h&2&&(Zd.$$scope={dirty:h,ctx:t}),sa.$set(Zd);const ep={};h&2&&(ep.$$scope={dirty:h,ctx:t}),ta.$set(ep);const go={};h&2&&(go.$$scope={dirty:h,ctx:t}),na.$set(go);const sp={};h&2&&(sp.$$scope={dirty:h,ctx:t}),oa.$set(sp);const tp={};h&2&&(tp.$$scope={dirty:h,ctx:t}),ia.$set(tp);const Et={};h&2&&(Et.$$scope={dirty:h,ctx:t}),la.$set(Et)},i(t){dc||(y(T.$$.fragment,t),y(Z.$$.fragment,t),y(wa.$$.fragment,t),y(Ea.$$.fragment,t),y(xa.$$.fragment,t),y(Na.$$.fragment,t),y(La.$$.fragment,t),y(Ia.$$.fragment,t),y(Wa.$$.fragment,t),y(Ua.$$.fragment,t),y(Ga.$$.fragment,t),y(Ra.$$.fragment,t),y(Ka.$$.fragment,t),y(Ya.$$.fragment,t),y(Za.$$.fragment,t),y(en.$$.fragment,t),y(sn.$$.fragment,t),y(tn.$$.fragment,t),y(an.$$.fragment,t),y(ln.$$.fragment,t),y(dn.$$.fragment,t),y(gn.$$.fragment,t),y(Ht.$$.fragment,t),y(_n.$$.fragment,t),y(Tn.$$.fragment,t),y(vn.$$.fragment,t),y(yn.$$.fragment,t),y(Gt.$$.fragment,t),y(kn.$$.fragment,t),y(jn.$$.fragment,t),y(qn.$$.fragment,t),y(An.$$.fragment,t),y(Vt.$$.fragment,t),y(zn.$$.fragment,t),y($n.$$.fragment,t),y(Cn.$$.fragment,t),y(Dn.$$.fragment,t),y(Yt.$$.fragment,t),y(Nn.$$.fragment,t),y(Ln.$$.fragment,t),y(Qn.$$.fragment,t),y(Xt.$$.fragment,t),y(Un.$$.fragment,t),y(Zt.$$.fragment,t),y(Hn.$$.fragment,t),y(Bn.$$.fragment,t),y(Gn.$$.fragment,t),y(sa.$$.fragment,t),y(Jn.$$.fragment,t),y(ta.$$.fragment,t),y(Xn.$$.fragment,t),y(Zn.$$.fragment,t),y(eo.$$.fragment,t),y(na.$$.fragment,t),y(no.$$.fragment,t),y(oa.$$.fragment,t),y(oo.$$.fragment,t),y(ro.$$.fragment,t),y(io.$$.fragment,t),y(ia.$$.fragment,t),y(ho.$$.fragment,t),y(la.$$.fragment,t),y(uo.$$.fragment,t),dc=!0)},o(t){k(T.$$.fragment,t),k(Z.$$.fragment,t),k(wa.$$.fragment,t),k(Ea.$$.fragment,t),k(xa.$$.fragment,t),k(Na.$$.fragment,t),k(La.$$.fragment,t),k(Ia.$$.fragment,t),k(Wa.$$.fragment,t),k(Ua.$$.fragment,t),k(Ga.$$.fragment,t),k(Ra.$$.fragment,t),k(Ka.$$.fragment,t),k(Ya.$$.fragment,t),k(Za.$$.fragment,t),k(en.$$.fragment,t),k(sn.$$.fragment,t),k(tn.$$.fragment,t),k(an.$$.fragment,t),k(ln.$$.fragment,t),k(dn.$$.fragment,t),k(gn.$$.fragment,t),k(Ht.$$.fragment,t),k(_n.$$.fragment,t),k(Tn.$$.fragment,t),k(vn.$$.fragment,t),k(yn.$$.fragment,t),k(Gt.$$.fragment,t),k(kn.$$.fragment,t),k(jn.$$.fragment,t),k(qn.$$.fragment,t),k(An.$$.fragment,t),k(Vt.$$.fragment,t),k(zn.$$.fragment,t),k($n.$$.fragment,t),k(Cn.$$.fragment,t),k(Dn.$$.fragment,t),k(Yt.$$.fragment,t),k(Nn.$$.fragment,t),k(Ln.$$.fragment,t),k(Qn.$$.fragment,t),k(Xt.$$.fragment,t),k(Un.$$.fragment,t),k(Zt.$$.fragment,t),k(Hn.$$.fragment,t),k(Bn.$$.fragment,t),k(Gn.$$.fragment,t),k(sa.$$.fragment,t),k(Jn.$$.fragment,t),k(ta.$$.fragment,t),k(Xn.$$.fragment,t),k(Zn.$$.fragment,t),k(eo.$$.fragment,t),k(na.$$.fragment,t),k(no.$$.fragment,t),k(oa.$$.fragment,t),k(oo.$$.fragment,t),k(ro.$$.fragment,t),k(io.$$.fragment,t),k(ia.$$.fragment,t),k(ho.$$.fragment,t),k(la.$$.fragment,t),k(uo.$$.fragment,t),dc=!1},d(t){s(m),t&&s(x),t&&s(f),j(T),t&&s(K),t&&s(A),j(Z),t&&s(ce),t&&s(W),t&&s($),t&&s(oe),t&&s(he),t&&s(V),t&&s(ue),t&&s(u),t&&s(J),t&&s(xe),t&&s(S),t&&s(Fe),t&&s(D),t&&s(M),t&&s(ap),t&&s(Ft),t&&s(np),t&&s(_o),t&&s(op),t&&s(_s),t&&s(rp),t&&s(To),t&&s(ip),t&&s(Ts),t&&s(lp),t&&s(Ks),j(wa),t&&s(dp),t&&s(zt),t&&s(pp),t&&s(wo),t&&s(cp),t&&s($t),t&&s(hp),t&&s(zs),t&&s(up),t&&s(ko),t&&s(mp),t&&s(Ct),t&&s(fp),t&&s($s),t&&s(gp),j(Ea,t),t&&s(_p),t&&s(Cs),t&&s(Tp),j(xa,t),t&&s(vp),t&&s(Mt),t&&s(bp),t&&s(Pt),t&&s(wp),t&&s(Eo),t&&s(yp),t&&s(St),t&&s(kp),t&&s(ie),t&&s(jp),t&&s(We),t&&s(qp),t&&s(Do),t&&s(Ep),t&&s(Ae),t&&s(xp),t&&s(Dt),t&&s(Fp),t&&s(le),t&&s(Ap),j(Na,t),t&&s(zp),t&&s(vs),t&&s($p),j(La,t),t&&s(Cp),t&&s(X),t&&s(Mp),t&&s(Uo),t&&s(Pp),t&&s(Ms),t&&s(Sp),j(Ia,t),t&&s(Dp),t&&s(tt),j(Wa),t&&s(Np),t&&s(me),t&&s(Lp),t&&s(Lt),t&&s(Qp),j(Ua,t),t&&s(Op),t&&s(Ue),t&&s(Ip),t&&s(at),j(Ga),t&&s(Wp),t&&s(nt),j(Ra),t&&s(Up),t&&s(ot),j(Ka),t&&s(Hp),t&&s(Xe),j(Ya),j(Za),t&&s(Bp),t&&s(rt),j(en),t&&s(Gp),t&&s(de),j(sn),j(tn),j(an),t&&s(Rp),t&&s(it),j(ln),t&&s(Vp),t&&s(De),j(dn),j(gn),j(Ht),j(_n),t&&s(Kp),t&&s(dt),j(Tn),t&&s(Yp),t&&s(gs),j(vn),j(yn),j(Gt),j(kn),t&&s(Jp),t&&s(ht),j(jn),t&&s(Xp),t&&s(Ze),j(qn),j(An),j(Vt),j(zn),t&&s(Zp),t&&s(mt),j($n),t&&s(ec),t&&s(es),j(Cn),j(Dn),j(Yt),j(Nn),t&&s(sc),t&&s(_t),j(Ln),t&&s(tc),t&&s(Ne),j(Qn),j(Xt),j(Un),j(Zt),j(Hn),t&&s(ac),t&&s(vt),j(Bn),t&&s(nc),t&&s(Le),j(Gn),j(sa),j(Jn),j(ta),j(Xn),t&&s(oc),t&&s(wt),j(Zn),t&&s(rc),t&&s(Qe),j(eo),j(na),j(no),j(oa),j(oo),t&&s(ic),t&&s(kt),j(ro),t&&s(lc),t&&s(Oe),j(io),j(ia),j(ho),j(la),j(uo)}}}const Z0={local:"tapas",sections:[{local:"overview",title:"Overview"},{local:"usage-finetuning",title:"Usage: fine-tuning"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",title:"TAPAS specific outputs"},{local:"transformers.TapasConfig",title:"TapasConfig"},{local:"transformers.TapasTokenizer",title:"TapasTokenizer"},{local:"transformers.TapasModel",title:"TapasModel"},{local:"transformers.TapasForMaskedLM",title:"TapasForMaskedLM"},{local:"transformers.TapasForSequenceClassification",title:"TapasForSequenceClassification"},{local:"transformers.TapasForQuestionAnswering",title:"TapasForQuestionAnswering"},{local:"transformers.TFTapasModel",title:"TFTapasModel"},{local:"transformers.TFTapasForMaskedLM",title:"TFTapasForMaskedLM"},{local:"transformers.TFTapasForSequenceClassification",title:"TFTapasForSequenceClassification"},{local:"transformers.TFTapasForQuestionAnswering",title:"TFTapasForQuestionAnswering"}],title:"TAPAS"};function eq(U,m,x){let{fw:f}=m;return U.$$set=g=>{"fw"in g&&x(0,f=g.fw)},[f]}class lq extends S0{constructor(m){super();D0(this,m,eq,X0,N0,{fw:0})}}export{lq as default,Z0 as metadata};
