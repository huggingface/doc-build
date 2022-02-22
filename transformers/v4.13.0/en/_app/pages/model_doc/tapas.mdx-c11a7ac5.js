import{S as p0,i as d0,s as c0,e as o,k as l,w as b,t,L as h0,c as r,d as s,m as p,a as i,x as w,h as n,b as d,J as e,g as c,y as v,q as y,o as k,B as j}from"../../chunks/vendor-e859c359.js";import{T as _s}from"../../chunks/Tip-edc75249.js";import{D as ue}from"../../chunks/Docstring-ade913b3.js";import{C as we}from"../../chunks/CodeBlock-ce4317c2.js";import{I as ss}from"../../chunks/IconCopyLink-5fae3b20.js";import"../../chunks/CopyButton-77addb3d.js";function u0(B){let m,x;return{c(){m=o("p"),x=t(`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix them in the future.`)},l(g){m=r(g,"P",{});var f=i(m);x=n(f,`This is a recently introduced model so the API hasn\u2019t been tested extensively. There may be some bugs or slight
breaking changes to fix them in the future.`),f.forEach(s)},m(g,f){c(g,m,f),e(m,x)},d(g){g&&s(m)}}}function m0(B){let m,x,g,f,q;return{c(){m=o("p"),x=t(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=o("code"),f=t("Module"),q=t(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=r(_,"CODE",{});var F=i(g);f=n(F,"Module"),F.forEach(s),q=n(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function g0(B){let m,x,g,f,q;return{c(){m=o("p"),x=t(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=o("code"),f=t("Module"),q=t(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=r(_,"CODE",{});var F=i(g);f=n(F,"Module"),F.forEach(s),q=n(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function f0(B){let m,x,g,f,q;return{c(){m=o("p"),x=t(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=o("code"),f=t("Module"),q=t(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=r(_,"CODE",{});var F=i(g);f=n(F,"Module"),F.forEach(s),q=n(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function _0(B){let m,x,g,f,q;return{c(){m=o("p"),x=t(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=o("code"),f=t("Module"),q=t(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=r(_,"CODE",{});var F=i(g);f=n(F,"Module"),F.forEach(s),q=n(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function T0(B){let m,x,g,f,q,T,_,F,ve,Y,$,me,S,X,pe,Q,ye,de,se,N,H,ae,z,M,ke,L,je,qe,O,xe,Ee,A,Fe,K,ge,re,J,fe,ie,D,$e,R,G;return{c(){m=o("p"),x=t("TF 2.0 models accepts two formats as inputs:"),g=l(),f=o("ul"),q=o("li"),T=t("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=o("li"),ve=t("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),$=o("p"),me=t("This second option is useful when using "),S=o("code"),X=t("tf.keras.Model.fit"),pe=t(` method which currently requires having all
the tensors in the first argument of the model call function: `),Q=o("code"),ye=t("model(inputs)"),de=t("."),se=l(),N=o("p"),H=t(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ae=l(),z=o("ul"),M=o("li"),ke=t("a single Tensor with "),L=o("code"),je=t("input_ids"),qe=t(" only and nothing else: "),O=o("code"),xe=t("model(inputs_ids)"),Ee=l(),A=o("li"),Fe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=o("code"),ge=t("model([input_ids, attention_mask])"),re=t(" or "),J=o("code"),fe=t("model([input_ids, attention_mask, token_type_ids])"),ie=l(),D=o("li"),$e=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),G=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);x=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),g=p(u),f=r(u,"UL",{});var te=i(f);q=r(te,"LI",{});var Be=i(q);T=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(s),_=p(te),F=r(te,"LI",{});var ze=i(F);ve=n(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(s),te.forEach(s),Y=p(u),$=r(u,"P",{});var I=i($);me=n(I,"This second option is useful when using "),S=r(I,"CODE",{});var Re=i(S);X=n(Re,"tf.keras.Model.fit"),Re.forEach(s),pe=n(I,` method which currently requires having all
the tensors in the first argument of the model call function: `),Q=r(I,"CODE",{});var Ae=i(Q);ye=n(Ae,"model(inputs)"),Ae.forEach(s),de=n(I,"."),I.forEach(s),se=p(u),N=r(u,"P",{});var Ge=i(N);H=n(Ge,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Ge.forEach(s),ae=p(u),z=r(u,"UL",{});var W=i(z);M=r(W,"LI",{});var V=i(M);ke=n(V,"a single Tensor with "),L=r(V,"CODE",{});var Z=i(L);je=n(Z,"input_ids"),Z.forEach(s),qe=n(V," only and nothing else: "),O=r(V,"CODE",{});var Ve=i(O);xe=n(Ve,"model(inputs_ids)"),Ve.forEach(s),V.forEach(s),Ee=p(W),A=r(W,"LI",{});var U=i(A);Fe=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r(U,"CODE",{});var Ke=i(K);ge=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),re=n(U," or "),J=r(U,"CODE",{});var Je=i(J);fe=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(s),U.forEach(s),ie=p(W),D=r(W,"LI",{});var ne=i(D);$e=n(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ne,"CODE",{});var Ye=i(R);G=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),ne.forEach(s),W.forEach(s)},m(u,E){c(u,m,E),e(m,x),c(u,g,E),c(u,f,E),e(f,q),e(q,T),e(f,_),e(f,F),e(F,ve),c(u,Y,E),c(u,$,E),e($,me),e($,S),e(S,X),e($,pe),e($,Q),e(Q,ye),e($,de),c(u,se,E),c(u,N,E),e(N,H),c(u,ae,E),c(u,z,E),e(z,M),e(M,ke),e(M,L),e(L,je),e(M,qe),e(M,O),e(O,xe),e(z,Ee),e(z,A),e(A,Fe),e(A,K),e(K,ge),e(A,re),e(A,J),e(J,fe),e(z,ie),e(z,D),e(D,$e),e(D,R),e(R,G)},d(u){u&&s(m),u&&s(g),u&&s(f),u&&s(Y),u&&s($),u&&s(se),u&&s(N),u&&s(ae),u&&s(z)}}}function b0(B){let m,x,g,f,q;return{c(){m=o("p"),x=t(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=o("code"),f=t("Module"),q=t(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=r(_,"CODE",{});var F=i(g);f=n(F,"Module"),F.forEach(s),q=n(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function w0(B){let m,x,g,f,q,T,_,F,ve,Y,$,me,S,X,pe,Q,ye,de,se,N,H,ae,z,M,ke,L,je,qe,O,xe,Ee,A,Fe,K,ge,re,J,fe,ie,D,$e,R,G;return{c(){m=o("p"),x=t("TF 2.0 models accepts two formats as inputs:"),g=l(),f=o("ul"),q=o("li"),T=t("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=o("li"),ve=t("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),$=o("p"),me=t("This second option is useful when using "),S=o("code"),X=t("tf.keras.Model.fit"),pe=t(` method which currently requires having all
the tensors in the first argument of the model call function: `),Q=o("code"),ye=t("model(inputs)"),de=t("."),se=l(),N=o("p"),H=t(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ae=l(),z=o("ul"),M=o("li"),ke=t("a single Tensor with "),L=o("code"),je=t("input_ids"),qe=t(" only and nothing else: "),O=o("code"),xe=t("model(inputs_ids)"),Ee=l(),A=o("li"),Fe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=o("code"),ge=t("model([input_ids, attention_mask])"),re=t(" or "),J=o("code"),fe=t("model([input_ids, attention_mask, token_type_ids])"),ie=l(),D=o("li"),$e=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),G=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);x=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),g=p(u),f=r(u,"UL",{});var te=i(f);q=r(te,"LI",{});var Be=i(q);T=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(s),_=p(te),F=r(te,"LI",{});var ze=i(F);ve=n(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(s),te.forEach(s),Y=p(u),$=r(u,"P",{});var I=i($);me=n(I,"This second option is useful when using "),S=r(I,"CODE",{});var Re=i(S);X=n(Re,"tf.keras.Model.fit"),Re.forEach(s),pe=n(I,` method which currently requires having all
the tensors in the first argument of the model call function: `),Q=r(I,"CODE",{});var Ae=i(Q);ye=n(Ae,"model(inputs)"),Ae.forEach(s),de=n(I,"."),I.forEach(s),se=p(u),N=r(u,"P",{});var Ge=i(N);H=n(Ge,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Ge.forEach(s),ae=p(u),z=r(u,"UL",{});var W=i(z);M=r(W,"LI",{});var V=i(M);ke=n(V,"a single Tensor with "),L=r(V,"CODE",{});var Z=i(L);je=n(Z,"input_ids"),Z.forEach(s),qe=n(V," only and nothing else: "),O=r(V,"CODE",{});var Ve=i(O);xe=n(Ve,"model(inputs_ids)"),Ve.forEach(s),V.forEach(s),Ee=p(W),A=r(W,"LI",{});var U=i(A);Fe=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r(U,"CODE",{});var Ke=i(K);ge=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),re=n(U," or "),J=r(U,"CODE",{});var Je=i(J);fe=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(s),U.forEach(s),ie=p(W),D=r(W,"LI",{});var ne=i(D);$e=n(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ne,"CODE",{});var Ye=i(R);G=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),ne.forEach(s),W.forEach(s)},m(u,E){c(u,m,E),e(m,x),c(u,g,E),c(u,f,E),e(f,q),e(q,T),e(f,_),e(f,F),e(F,ve),c(u,Y,E),c(u,$,E),e($,me),e($,S),e(S,X),e($,pe),e($,Q),e(Q,ye),e($,de),c(u,se,E),c(u,N,E),e(N,H),c(u,ae,E),c(u,z,E),e(z,M),e(M,ke),e(M,L),e(L,je),e(M,qe),e(M,O),e(O,xe),e(z,Ee),e(z,A),e(A,Fe),e(A,K),e(K,ge),e(A,re),e(A,J),e(J,fe),e(z,ie),e(z,D),e(D,$e),e(D,R),e(R,G)},d(u){u&&s(m),u&&s(g),u&&s(f),u&&s(Y),u&&s($),u&&s(se),u&&s(N),u&&s(ae),u&&s(z)}}}function v0(B){let m,x,g,f,q;return{c(){m=o("p"),x=t(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=o("code"),f=t("Module"),q=t(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=r(_,"CODE",{});var F=i(g);f=n(F,"Module"),F.forEach(s),q=n(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function y0(B){let m,x,g,f,q,T,_,F,ve,Y,$,me,S,X,pe,Q,ye,de,se,N,H,ae,z,M,ke,L,je,qe,O,xe,Ee,A,Fe,K,ge,re,J,fe,ie,D,$e,R,G;return{c(){m=o("p"),x=t("TF 2.0 models accepts two formats as inputs:"),g=l(),f=o("ul"),q=o("li"),T=t("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=o("li"),ve=t("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),$=o("p"),me=t("This second option is useful when using "),S=o("code"),X=t("tf.keras.Model.fit"),pe=t(` method which currently requires having all
the tensors in the first argument of the model call function: `),Q=o("code"),ye=t("model(inputs)"),de=t("."),se=l(),N=o("p"),H=t(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ae=l(),z=o("ul"),M=o("li"),ke=t("a single Tensor with "),L=o("code"),je=t("input_ids"),qe=t(" only and nothing else: "),O=o("code"),xe=t("model(inputs_ids)"),Ee=l(),A=o("li"),Fe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=o("code"),ge=t("model([input_ids, attention_mask])"),re=t(" or "),J=o("code"),fe=t("model([input_ids, attention_mask, token_type_ids])"),ie=l(),D=o("li"),$e=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),G=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);x=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),g=p(u),f=r(u,"UL",{});var te=i(f);q=r(te,"LI",{});var Be=i(q);T=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(s),_=p(te),F=r(te,"LI",{});var ze=i(F);ve=n(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(s),te.forEach(s),Y=p(u),$=r(u,"P",{});var I=i($);me=n(I,"This second option is useful when using "),S=r(I,"CODE",{});var Re=i(S);X=n(Re,"tf.keras.Model.fit"),Re.forEach(s),pe=n(I,` method which currently requires having all
the tensors in the first argument of the model call function: `),Q=r(I,"CODE",{});var Ae=i(Q);ye=n(Ae,"model(inputs)"),Ae.forEach(s),de=n(I,"."),I.forEach(s),se=p(u),N=r(u,"P",{});var Ge=i(N);H=n(Ge,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Ge.forEach(s),ae=p(u),z=r(u,"UL",{});var W=i(z);M=r(W,"LI",{});var V=i(M);ke=n(V,"a single Tensor with "),L=r(V,"CODE",{});var Z=i(L);je=n(Z,"input_ids"),Z.forEach(s),qe=n(V," only and nothing else: "),O=r(V,"CODE",{});var Ve=i(O);xe=n(Ve,"model(inputs_ids)"),Ve.forEach(s),V.forEach(s),Ee=p(W),A=r(W,"LI",{});var U=i(A);Fe=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r(U,"CODE",{});var Ke=i(K);ge=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),re=n(U," or "),J=r(U,"CODE",{});var Je=i(J);fe=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(s),U.forEach(s),ie=p(W),D=r(W,"LI",{});var ne=i(D);$e=n(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ne,"CODE",{});var Ye=i(R);G=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),ne.forEach(s),W.forEach(s)},m(u,E){c(u,m,E),e(m,x),c(u,g,E),c(u,f,E),e(f,q),e(q,T),e(f,_),e(f,F),e(F,ve),c(u,Y,E),c(u,$,E),e($,me),e($,S),e(S,X),e($,pe),e($,Q),e(Q,ye),e($,de),c(u,se,E),c(u,N,E),e(N,H),c(u,ae,E),c(u,z,E),e(z,M),e(M,ke),e(M,L),e(L,je),e(M,qe),e(M,O),e(O,xe),e(z,Ee),e(z,A),e(A,Fe),e(A,K),e(K,ge),e(A,re),e(A,J),e(J,fe),e(z,ie),e(z,D),e(D,$e),e(D,R),e(R,G)},d(u){u&&s(m),u&&s(g),u&&s(f),u&&s(Y),u&&s($),u&&s(se),u&&s(N),u&&s(ae),u&&s(z)}}}function k0(B){let m,x,g,f,q;return{c(){m=o("p"),x=t(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=o("code"),f=t("Module"),q=t(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=r(_,"CODE",{});var F=i(g);f=n(F,"Module"),F.forEach(s),q=n(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function j0(B){let m,x,g,f,q,T,_,F,ve,Y,$,me,S,X,pe,Q,ye,de,se,N,H,ae,z,M,ke,L,je,qe,O,xe,Ee,A,Fe,K,ge,re,J,fe,ie,D,$e,R,G;return{c(){m=o("p"),x=t("TF 2.0 models accepts two formats as inputs:"),g=l(),f=o("ul"),q=o("li"),T=t("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),F=o("li"),ve=t("having all inputs as a list, tuple or dict in the first positional arguments."),Y=l(),$=o("p"),me=t("This second option is useful when using "),S=o("code"),X=t("tf.keras.Model.fit"),pe=t(` method which currently requires having all
the tensors in the first argument of the model call function: `),Q=o("code"),ye=t("model(inputs)"),de=t("."),se=l(),N=o("p"),H=t(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),ae=l(),z=o("ul"),M=o("li"),ke=t("a single Tensor with "),L=o("code"),je=t("input_ids"),qe=t(" only and nothing else: "),O=o("code"),xe=t("model(inputs_ids)"),Ee=l(),A=o("li"),Fe=t(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=o("code"),ge=t("model([input_ids, attention_mask])"),re=t(" or "),J=o("code"),fe=t("model([input_ids, attention_mask, token_type_ids])"),ie=l(),D=o("li"),$e=t(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=o("code"),G=t('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(u){m=r(u,"P",{});var E=i(m);x=n(E,"TF 2.0 models accepts two formats as inputs:"),E.forEach(s),g=p(u),f=r(u,"UL",{});var te=i(f);q=r(te,"LI",{});var Be=i(q);T=n(Be,"having all inputs as keyword arguments (like PyTorch models), or"),Be.forEach(s),_=p(te),F=r(te,"LI",{});var ze=i(F);ve=n(ze,"having all inputs as a list, tuple or dict in the first positional arguments."),ze.forEach(s),te.forEach(s),Y=p(u),$=r(u,"P",{});var I=i($);me=n(I,"This second option is useful when using "),S=r(I,"CODE",{});var Re=i(S);X=n(Re,"tf.keras.Model.fit"),Re.forEach(s),pe=n(I,` method which currently requires having all
the tensors in the first argument of the model call function: `),Q=r(I,"CODE",{});var Ae=i(Q);ye=n(Ae,"model(inputs)"),Ae.forEach(s),de=n(I,"."),I.forEach(s),se=p(u),N=r(u,"P",{});var Ge=i(N);H=n(Ge,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in
the first positional argument :`),Ge.forEach(s),ae=p(u),z=r(u,"UL",{});var W=i(z);M=r(W,"LI",{});var V=i(M);ke=n(V,"a single Tensor with "),L=r(V,"CODE",{});var Z=i(L);je=n(Z,"input_ids"),Z.forEach(s),qe=n(V," only and nothing else: "),O=r(V,"CODE",{});var Ve=i(O);xe=n(Ve,"model(inputs_ids)"),Ve.forEach(s),V.forEach(s),Ee=p(W),A=r(W,"LI",{});var U=i(A);Fe=n(U,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),K=r(U,"CODE",{});var Ke=i(K);ge=n(Ke,"model([input_ids, attention_mask])"),Ke.forEach(s),re=n(U," or "),J=r(U,"CODE",{});var Je=i(J);fe=n(Je,"model([input_ids, attention_mask, token_type_ids])"),Je.forEach(s),U.forEach(s),ie=p(W),D=r(W,"LI",{});var ne=i(D);$e=n(ne,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r(ne,"CODE",{});var Ye=i(R);G=n(Ye,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Ye.forEach(s),ne.forEach(s),W.forEach(s)},m(u,E){c(u,m,E),e(m,x),c(u,g,E),c(u,f,E),e(f,q),e(q,T),e(f,_),e(f,F),e(F,ve),c(u,Y,E),c(u,$,E),e($,me),e($,S),e(S,X),e($,pe),e($,Q),e(Q,ye),e($,de),c(u,se,E),c(u,N,E),e(N,H),c(u,ae,E),c(u,z,E),e(z,M),e(M,ke),e(M,L),e(L,je),e(M,qe),e(M,O),e(O,xe),e(z,Ee),e(z,A),e(A,Fe),e(A,K),e(K,ge),e(A,re),e(A,J),e(J,fe),e(z,ie),e(z,D),e(D,$e),e(D,R),e(R,G)},d(u){u&&s(m),u&&s(g),u&&s(f),u&&s(Y),u&&s($),u&&s(se),u&&s(N),u&&s(ae),u&&s(z)}}}function q0(B){let m,x,g,f,q;return{c(){m=o("p"),x=t(`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=o("code"),f=t("Module"),q=t(` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`)},l(T){m=r(T,"P",{});var _=i(m);x=n(_,`Although the recipe for forward pass needs to be defined within this function, one should call the
`),g=r(_,"CODE",{});var F=i(g);f=n(F,"Module"),F.forEach(s),q=n(_,` instance afterwards instead of this since the former takes care of running the pre and post
processing steps while the latter silently ignores them.`),_.forEach(s)},m(T,_){c(T,m,_),e(m,x),e(m,g),e(g,f),e(m,q)},d(T){T&&s(m)}}}function x0(B){let m,x,g,f,q,T,_,F,ve,Y,$,me,S,X,pe,Q,ye,de,se,N,H,ae,z,M,ke,L,je,qe,O,xe,Ee,A,Fe,K,ge,re,J,fe,ie,D,$e,R,G,u,E,te,Be,ze,I,Re,Ae,Ge,W,V,Z,Ve,U,Ke,Je,ne,Ye,Ac,rt,Cc,Mc,wp,to,Pc,vp,Ts,Pe,Sc,qr,Dc,Nc,no,Qc,Lc,xr,Oc,Ic,it,Wc,Uc,Er,Hc,Bc,Fr,Rc,Gc,Vc,Es,Kc,$r,Jc,Yc,zr,Xc,Zc,lt,eh,sh,ah,Hs,th,Ar,nh,oh,Cr,rh,ih,lh,Mr,ph,yp,Bs,fa,Pr,pt,dh,Sr,ch,kp,_a,hh,oo,uh,mh,jp,ro,Dr,gh,qp,Ta,fh,io,_h,Th,xp,Fs,Nr,bh,wh,dt,vh,Qr,yh,kh,jh,ct,qh,Lr,xh,Eh,Ep,lo,Fh,Fp,bs,$h,Or,zh,Ah,Ir,Ch,Mh,Wr,Ph,Sh,$p,ba,Dh,ht,Nh,Qh,zp,ut,Ap,wa,Lh,po,Oh,mt,Ih,Wh,Cp,gt,Mp,$s,Uh,co,Hh,Bh,ho,Rh,Gh,Pp,ft,Sp,uo,Vh,Dp,_t,Np,va,Kh,Tt,Jh,Yh,Qp,ya,Xh,bt,Zh,eu,Lp,mo,Ur,su,Op,ka,au,wt,tu,nu,Ip,le,go,Hr,ou,ru,iu,fo,Br,lu,pu,du,_o,Rr,cu,hu,uu,To,Gr,mu,gu,fu,bo,Vr,_u,Tu,bu,wo,Kr,wu,vu,yu,vo,Jr,ku,ju,qu,yo,Yr,xu,Eu,Fu,ko,Xr,$u,zu,Wp,as,Au,vt,Cu,Mu,Zr,Pu,Su,ei,Du,Nu,si,Qu,Lu,Up,jo,ai,Ou,Hp,Ce,Iu,qo,Wu,Uu,ti,Hu,Bu,ni,Ru,Gu,oi,Vu,Ku,xo,Ju,Yu,Eo,Xu,Zu,Bp,C,em,ri,sm,am,ii,tm,nm,li,om,rm,pi,im,lm,di,pm,dm,ci,cm,hm,hi,um,mm,ui,gm,fm,mi,_m,Tm,gi,bm,wm,fi,vm,ym,_i,km,jm,Ti,qm,xm,bi,Em,Fm,wi,$m,zm,vi,Am,Cm,yi,Mm,Pm,ki,Sm,Dm,Rp,ce,Fo,Nm,Qm,ji,Lm,Om,qi,Im,Wm,xi,Um,Hm,Ei,Bm,Rm,Fi,Gm,Vm,$i,Km,Jm,zi,Ym,Xm,Gp,yt,Vp,ja,Zm,Ai,eg,sg,Kp,ws,ag,$o,tg,ng,Ci,og,rg,Mi,ig,lg,Jp,kt,Yp,zo,pg,Xp,jt,Zp,ee,dg,Pi,cg,hg,Si,ug,mg,Di,gg,fg,Ni,_g,Tg,Qi,bg,wg,Li,vg,yg,Ao,kg,jg,qt,qg,xg,xt,Eg,Fg,ed,Co,Oi,$g,sd,qa,zg,Mo,Ag,Cg,ad,Et,td,xa,Mg,Po,Pg,Sg,nd,Ft,od,Rs,Ea,Ii,$t,Dg,Wi,Ng,rd,_e,Qg,So,Lg,Og,Ui,Ig,Wg,Hi,Ug,Hg,Bi,Bg,Rg,Do,Gg,Vg,Ri,Kg,Jg,No,Yg,Xg,id,Fa,Zg,Gi,ef,sf,ld,zt,pd,Qo,af,dd,At,cd,We,tf,Vi,nf,of,Ki,rf,lf,Ji,pf,df,Ct,cf,hf,Mt,uf,mf,hd,Gs,$a,Yi,Pt,gf,Xi,ff,ud,Vs,St,_f,Dt,Tf,Lo,bf,wf,md,Ks,za,Zi,Nt,vf,el,yf,gd,Xe,Qt,kf,ms,jf,Oo,qf,xf,sl,Ef,Ff,al,$f,zf,Io,Af,Cf,Mf,Lt,Pf,Ot,Sf,Df,Nf,tl,Qf,Lf,It,fd,Js,Aa,nl,Wt,Of,ol,If,_d,he,Ut,Wf,rl,Uf,Hf,oe,Bf,Wo,Rf,Gf,Uo,Vf,Kf,il,Jf,Yf,ll,Xf,Zf,pl,e_,s_,dl,a_,t_,cl,n_,o_,hl,r_,i_,ul,l_,p_,d_,Se,ml,c_,h_,gl,u_,m_,fl,g_,f_,_l,__,T_,Tl,b_,w_,bl,v_,y_,wl,k_,j_,Ho,Bo,q_,x_,E_,Ca,Ht,F_,vl,$_,z_,zs,Bt,A_,Rt,C_,Ro,M_,P_,S_,Gt,D_,Vt,N_,Q_,L_,yl,Td,Ys,Ma,kl,Kt,O_,jl,I_,bd,De,Jt,W_,Yt,U_,Go,H_,B_,R_,Xt,G_,Zt,V_,K_,J_,en,Y_,Vo,X_,Z_,eT,sn,sT,an,aT,tT,nT,ts,tn,oT,Xs,rT,Ko,iT,lT,ql,pT,dT,cT,Pa,hT,xl,uT,mT,nn,wd,Zs,Sa,El,on,gT,Fl,fT,vd,gs,rn,_T,ea,TT,$l,bT,wT,Jo,vT,yT,kT,ln,jT,pn,qT,xT,ET,ns,dn,FT,sa,$T,Yo,zT,AT,zl,CT,MT,PT,Da,ST,Al,DT,NT,cn,yd,aa,Na,Cl,hn,QT,Ml,LT,kd,Ze,un,OT,Pl,IT,WT,mn,UT,Xo,HT,BT,RT,gn,GT,fn,VT,KT,JT,os,_n,YT,ta,XT,Zo,ZT,eb,Sl,sb,ab,tb,Qa,nb,Dl,ob,rb,Tn,jd,na,La,Nl,bn,ib,Ql,lb,qd,es,wn,pb,oa,db,Ll,cb,hb,Ol,ub,mb,gb,vn,fb,er,_b,Tb,bb,yn,wb,kn,vb,yb,kb,rs,jn,jb,ra,qb,sr,xb,Eb,Il,Fb,$b,zb,Oa,Ab,Wl,Cb,Mb,qn,xd,ia,Ia,Ul,xn,Pb,Hl,Sb,Ed,Ne,En,Db,Bl,Nb,Qb,Fn,Lb,ar,Ob,Ib,Wb,$n,Ub,zn,Hb,Bb,Rb,Wa,Gb,is,An,Vb,la,Kb,tr,Jb,Yb,Rl,Xb,Zb,ew,Ua,sw,Gl,aw,tw,Cn,Fd,pa,Ha,Vl,Mn,nw,Kl,ow,$d,Qe,Pn,rw,Sn,iw,Jl,lw,pw,dw,Dn,cw,nr,hw,uw,mw,Nn,gw,Qn,fw,_w,Tw,Ba,bw,ls,Ln,ww,da,vw,or,yw,kw,Yl,jw,qw,xw,Ra,Ew,Xl,Fw,$w,On,zd,ca,Ga,Zl,In,zw,ep,Aw,Ad,Le,Wn,Cw,sp,Mw,Pw,Un,Sw,rr,Dw,Nw,Qw,Hn,Lw,Bn,Ow,Iw,Ww,Va,Uw,ps,Rn,Hw,ha,Bw,ir,Rw,Gw,ap,Vw,Kw,Jw,Ka,Yw,tp,Xw,Zw,Gn,Cd,ua,Ja,np,Vn,ev,op,sv,Md,Oe,Kn,av,ma,tv,rp,nv,ov,ip,rv,iv,lv,Jn,pv,lr,dv,cv,hv,Yn,uv,Xn,mv,gv,fv,Ya,_v,ds,Zn,Tv,ga,bv,pr,wv,vv,lp,yv,kv,jv,Xa,qv,pp,xv,Ev,eo,Pd;return T=new ss({}),$=new _s({props:{$$slots:{default:[u0]},$$scope:{ctx:B}}}),Q=new ss({}),pt=new ss({}),ut=new we({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TapasForQuestionAnswering.from_pretrained('google/tapas-base')

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained('google/tapas-base-finetuned-wtq')
model = TapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig('google-base-finetuned-wikisql-supervised')
model = TapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config),`,highlighted:`&gt;&gt;&gt; from transformers import TapasConfig, TapasForQuestionAnswering

&gt;&gt;&gt; # <span class="hljs-keyword">for</span> example, the base sized model <span class="hljs-keyword">with</span> default SQA configuration
&gt;&gt;&gt; model = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">TapasForQuestionAnswering</span>.</span></span>from<span class="hljs-constructor">_pretrained(&#x27;<span class="hljs-params">google</span><span class="hljs-operator">/</span><span class="hljs-params">tapas</span>-<span class="hljs-params">base</span>&#x27;)</span>

&gt;&gt;&gt; # <span class="hljs-keyword">or</span>, the base sized model <span class="hljs-keyword">with</span> WTQ configuration
&gt;&gt;&gt; config = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">TapasConfig</span>.</span></span>from<span class="hljs-constructor">_pretrained(&#x27;<span class="hljs-params">google</span><span class="hljs-operator">/</span><span class="hljs-params">tapas</span>-<span class="hljs-params">base</span>-<span class="hljs-params">finetuned</span>-<span class="hljs-params">wtq</span>&#x27;)</span>
&gt;&gt;&gt; model = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">TapasForQuestionAnswering</span>.</span></span>from<span class="hljs-constructor">_pretrained(&#x27;<span class="hljs-params">google</span><span class="hljs-operator">/</span><span class="hljs-params">tapas</span>-<span class="hljs-params">base</span>&#x27;, <span class="hljs-params">config</span>=<span class="hljs-params">config</span>)</span>

&gt;&gt;&gt; # <span class="hljs-keyword">or</span>, the base sized model <span class="hljs-keyword">with</span> WikiSQL configuration
&gt;&gt;&gt; config = <span class="hljs-constructor">TapasConfig(&#x27;<span class="hljs-params">google</span>-<span class="hljs-params">base</span>-<span class="hljs-params">finetuned</span>-<span class="hljs-params">wikisql</span>-<span class="hljs-params">supervised</span>&#x27;)</span>
&gt;&gt;&gt; model = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">TapasForQuestionAnswering</span>.</span></span>from<span class="hljs-constructor">_pretrained(&#x27;<span class="hljs-params">google</span><span class="hljs-operator">/</span><span class="hljs-params">tapas</span>-<span class="hljs-params">base</span>&#x27;, <span class="hljs-params">config</span>=<span class="hljs-params">config</span>)</span>`}}),gt=new we({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# for example, the base sized model with default SQA configuration
model = TFTapasForQuestionAnswering.from_pretrained('google/tapas-base')

# or, the base sized model with WTQ configuration
config = TapasConfig.from_pretrained('google/tapas-base-finetuned-wtq')
model = TFTapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config)

# or, the base sized model with WikiSQL configuration
config = TapasConfig('google-base-finetuned-wikisql-supervised')
model = TFTapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config),`,highlighted:`&gt;&gt;&gt; from transformers import TapasConfig, TFTapasForQuestionAnswering

&gt;&gt;&gt; # <span class="hljs-keyword">for</span> example, the base sized model <span class="hljs-keyword">with</span> default SQA configuration
&gt;&gt;&gt; model = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">TFTapasForQuestionAnswering</span>.</span></span>from<span class="hljs-constructor">_pretrained(&#x27;<span class="hljs-params">google</span><span class="hljs-operator">/</span><span class="hljs-params">tapas</span>-<span class="hljs-params">base</span>&#x27;)</span>

&gt;&gt;&gt; # <span class="hljs-keyword">or</span>, the base sized model <span class="hljs-keyword">with</span> WTQ configuration
&gt;&gt;&gt; config = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">TapasConfig</span>.</span></span>from<span class="hljs-constructor">_pretrained(&#x27;<span class="hljs-params">google</span><span class="hljs-operator">/</span><span class="hljs-params">tapas</span>-<span class="hljs-params">base</span>-<span class="hljs-params">finetuned</span>-<span class="hljs-params">wtq</span>&#x27;)</span>
&gt;&gt;&gt; model = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">TFTapasForQuestionAnswering</span>.</span></span>from<span class="hljs-constructor">_pretrained(&#x27;<span class="hljs-params">google</span><span class="hljs-operator">/</span><span class="hljs-params">tapas</span>-<span class="hljs-params">base</span>&#x27;, <span class="hljs-params">config</span>=<span class="hljs-params">config</span>)</span>

&gt;&gt;&gt; # <span class="hljs-keyword">or</span>, the base sized model <span class="hljs-keyword">with</span> WikiSQL configuration
&gt;&gt;&gt; config = <span class="hljs-constructor">TapasConfig(&#x27;<span class="hljs-params">google</span>-<span class="hljs-params">base</span>-<span class="hljs-params">finetuned</span>-<span class="hljs-params">wikisql</span>-<span class="hljs-params">supervised</span>&#x27;)</span>
&gt;&gt;&gt; model = <span class="hljs-module-access"><span class="hljs-module"><span class="hljs-identifier">TFTapasForQuestionAnswering</span>.</span></span>from<span class="hljs-constructor">_pretrained(&#x27;<span class="hljs-params">google</span><span class="hljs-operator">/</span><span class="hljs-params">tapas</span>-<span class="hljs-params">base</span>&#x27;, <span class="hljs-params">config</span>=<span class="hljs-params">config</span>)</span>`}}),ft=new we({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>, config=config)</span>`}}),_t=new we({props:{code:`from transformers import TapasConfig, TFTapasForQuestionAnswering

# you can initialize the classification heads any way you want (see docs of TapasConfig)
config = TapasConfig(num_aggregation_labels=3, average_logits_per_cell=True)
# initializing the pre-trained base sized model with our custom classification heads
model = TFTapasForQuestionAnswering.from_pretrained('google/tapas-base', config=config),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># you can initialize the classification heads any way you want (see docs of TapasConfig)</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">config = TapasConfig(num_aggregation_labels=<span class="hljs-number">3</span>, average_logits_per_cell=<span class="hljs-literal">True</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># initializing the pre-trained base sized model with our custom classification heads</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>, config=config)</span>`}}),yt=new we({props:{code:`from transformers import TapasTokenizer
import pandas as pd

model_name = 'google/tapas-base'
tokenizer = TapasTokenizer.from_pretrained(model_name)

data = {'Actors': ["Brad Pitt", "Leonardo Di Caprio", "George Clooney"], 'Number of movies': ["87", "53", "69"]}
queries = ["What is the name of the first actor?", "How many movies has George Clooney played in?", "What is the total number of movies?"]
answer_coordinates = [[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]
answer_text = [["Brad Pitt"], ["69"], ["209"]]
table = pd.DataFrame.from_dict(data)
inputs = tokenizer(table=table, queries=queries, answer_coordinates=answer_coordinates, answer_text=answer_text, padding='max_length', return_tensors='pt')
inputs,`,highlighted:`&gt;&gt;&gt; from transformers import TapasTokenizer
&gt;&gt;&gt; import pandas as pd

&gt;&gt;&gt; model_name = <span class="hljs-string">&#x27;google/tapas-base&#x27;</span>
&gt;&gt;&gt; tokenizer = TapasTokenizer.from_pretrained(model_name)

&gt;&gt;&gt; data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}
&gt;&gt;&gt; queries = [<span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>, <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>]
&gt;&gt;&gt; answer_coordinates = <span class="hljs-string">[[(0, 0)], [(2, 1)], [(0, 1), (1, 1), (2, 1)]]</span>
&gt;&gt;&gt; answer_text = <span class="hljs-string">[[&quot;Brad Pitt&quot;], [&quot;69&quot;], [&quot;209&quot;]]</span>
&gt;&gt;&gt; <span class="hljs-built_in">table</span> = pd.DataFrame.from_dict(data)
&gt;&gt;&gt; inputs = tokenizer(<span class="hljs-built_in">table</span>=<span class="hljs-built_in">table</span>, queries=queries, answer_coordinates=answer_coordinates, answer_text=answer_text, padding=<span class="hljs-string">&#x27;max_length&#x27;</span>, return_tensors=<span class="hljs-string">&#x27;pt&#x27;</span>)
&gt;&gt;&gt; inputs
{<span class="hljs-string">&#x27;input_ids&#x27;</span>: tensor(<span class="hljs-string">[[ ... ]]</span>), <span class="hljs-string">&#x27;attention_mask&#x27;</span>: tensor(<span class="hljs-string">[[...]]</span>), <span class="hljs-string">&#x27;token_type_ids&#x27;</span>: tensor(<span class="hljs-string">[[[...]]</span>]),
<span class="hljs-string">&#x27;numeric_values&#x27;</span>: tensor(<span class="hljs-string">[[ ... ]]</span>), <span class="hljs-string">&#x27;numeric_values_scale: tensor([[ ... ]]), labels: tensor([[ ... ]])}</span>`}}),kt=new we({props:{code:`import torch
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
train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=32),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">import</span> torch</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span></span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>(torch.utils.data.Dataset):</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):</span>
<span class="hljs-meta">...</span> <span class="language-python">        self.data = data</span>
<span class="hljs-meta">...</span> <span class="language-python">        self.tokenizer = tokenizer</span>
<span class="hljs-meta">...</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__getitem__</span>(<span class="hljs-params">self, idx</span>):</span>
<span class="hljs-meta">...</span> <span class="language-python">        item = data.iloc[idx]</span>
<span class="hljs-meta">...</span> <span class="language-python">        table = pd.read_csv(table_csv_path + item.table_file).astype(<span class="hljs-built_in">str</span>) <span class="hljs-comment"># be sure to make your table data text only</span></span>
<span class="hljs-meta">...</span> <span class="language-python">        encoding = self.tokenizer(table=table, </span>
<span class="hljs-meta">...</span> <span class="language-python">                                  queries=item.question, </span>
<span class="hljs-meta">...</span> <span class="language-python">                                  answer_coordinates=item.answer_coordinates, </span>
<span class="hljs-meta">...</span> <span class="language-python">                                  answer_text=item.answer_text,</span>
<span class="hljs-meta">...</span> <span class="language-python">                                  truncation=<span class="hljs-literal">True</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">                                  padding=<span class="hljs-string">&quot;max_length&quot;</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">                                  return_tensors=<span class="hljs-string">&quot;pt&quot;</span></span>
<span class="hljs-meta">...</span> <span class="language-python">        )</span>
<span class="hljs-meta">...</span> <span class="language-python">        <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span></span>
<span class="hljs-meta">...</span> <span class="language-python">        encoding = {key: val.squeeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}</span>
<span class="hljs-meta">...</span> <span class="language-python">        <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span></span>
<span class="hljs-meta">...</span> <span class="language-python">        encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = torch.tensor(item.float_answer) </span>
<span class="hljs-meta">...</span> <span class="language-python">        <span class="hljs-keyword">return</span> encoding</span>
<span class="hljs-meta">...</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):</span>
<span class="hljs-meta">...</span> <span class="language-python">       <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&#x27;\\t&#x27;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">train_dataset = TableDataset(data, tokenizer)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">train_dataloader = torch.utils.data.DataLoader(train_dataset, batch_size=<span class="hljs-number">32</span>)</span>`}}),jt=new we({props:{code:`import tensorflow as tf
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
train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(32),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tsv_path = <span class="hljs-string">&quot;your_path_to_the_tsv_file&quot;</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">table_csv_path = <span class="hljs-string">&quot;your_path_to_a_directory_containing_all_csv_files&quot;</span></span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">class</span> <span class="hljs-title class_">TableDataset</span>:</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__init__</span>(<span class="hljs-params">self, data, tokenizer</span>):</span>
<span class="hljs-meta">...</span> <span class="language-python">        self.data = data</span>
<span class="hljs-meta">...</span> <span class="language-python">        self.tokenizer = tokenizer</span>
<span class="hljs-meta">...</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__iter__</span>(<span class="hljs-params">self</span>):</span>
<span class="hljs-meta">...</span> <span class="language-python">        <span class="hljs-keyword">for</span> idx <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(self.__len__()):</span>
<span class="hljs-meta">...</span> <span class="language-python">            item = self.data.iloc[idx]</span>
<span class="hljs-meta">...</span> <span class="language-python">            table = pd.read_csv(table_csv_path + item.table_file).astype(<span class="hljs-built_in">str</span>) <span class="hljs-comment"># be sure to make your table data text only</span></span>
<span class="hljs-meta">...</span> <span class="language-python">            encoding = self.tokenizer(table=table, </span>
<span class="hljs-meta">...</span> <span class="language-python">                                  queries=item.question, </span>
<span class="hljs-meta">...</span> <span class="language-python">                                  answer_coordinates=item.answer_coordinates, </span>
<span class="hljs-meta">...</span> <span class="language-python">                                  answer_text=item.answer_text,</span>
<span class="hljs-meta">...</span> <span class="language-python">                                  truncation=<span class="hljs-literal">True</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">                                  padding=<span class="hljs-string">&quot;max_length&quot;</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">                                  return_tensors=<span class="hljs-string">&quot;tf&quot;</span></span>
<span class="hljs-meta">...</span> <span class="language-python">            )</span>
<span class="hljs-meta">...</span> <span class="language-python">            <span class="hljs-comment"># remove the batch dimension which the tokenizer adds by default</span></span>
<span class="hljs-meta">...</span> <span class="language-python">            encoding = {key: tf.squeeze(val,<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> key, val <span class="hljs-keyword">in</span> encoding.items()}</span>
<span class="hljs-meta">...</span> <span class="language-python">            <span class="hljs-comment"># add the float_answer which is also required (weak supervision for aggregation case)</span></span>
<span class="hljs-meta">...</span> <span class="language-python">            encoding[<span class="hljs-string">&quot;float_answer&quot;</span>] = tf.convert_to_tensor(item.float_answer,dtype=tf.float32)</span>
<span class="hljs-meta">...</span> <span class="language-python">            <span class="hljs-keyword">yield</span> encoding[<span class="hljs-string">&#x27;input_ids&#x27;</span>], encoding[<span class="hljs-string">&#x27;attention_mask&#x27;</span>], encoding[<span class="hljs-string">&#x27;numeric_values&#x27;</span>], \\</span>
<span class="hljs-meta">...</span> <span class="language-python">                  encoding[<span class="hljs-string">&#x27;numeric_values_scale&#x27;</span>], encoding[<span class="hljs-string">&#x27;token_type_ids&#x27;</span>], encoding[<span class="hljs-string">&#x27;labels&#x27;</span>], \\</span>
<span class="hljs-meta">...</span> <span class="language-python">                  encoding[<span class="hljs-string">&#x27;float_answer&#x27;</span>]</span>
<span class="hljs-meta">...</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-keyword">def</span> <span class="hljs-title function_">__len__</span>(<span class="hljs-params">self</span>):</span>
<span class="hljs-meta">...</span> <span class="language-python">       <span class="hljs-keyword">return</span> <span class="hljs-built_in">len</span>(self.data)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">data = pd.read_csv(tsv_path, sep=<span class="hljs-string">&#x27;\\t&#x27;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">train_dataset = TableDataset(data, tokenizer)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">output_signature = (</span>
<span class="hljs-meta">...</span> <span class="language-python">tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),</span>
<span class="hljs-meta">...</span> <span class="language-python">tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),</span>
<span class="hljs-meta">...</span> <span class="language-python">tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),</span>
<span class="hljs-meta">...</span> <span class="language-python">tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32),</span>
<span class="hljs-meta">...</span> <span class="language-python">tf.TensorSpec(shape=(<span class="hljs-number">512</span>,<span class="hljs-number">7</span>), dtype=tf.int32),</span>
<span class="hljs-meta">...</span> <span class="language-python">tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.int32),</span>
<span class="hljs-meta">...</span> <span class="language-python">tf.TensorSpec(shape=(<span class="hljs-number">512</span>,), dtype=tf.float32))</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">train_dataloader = tf.data.Dataset.from_generator(train_dataset, output_signature=output_signature).batch(<span class="hljs-number">32</span>)</span>`}}),Et=new we({props:{code:`from transformers import TapasConfig, TapasForQuestionAnswering, AdamW

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

for epoch in range(2):  # loop over the dataset multiple times
   for idx, batch in enumerate(train_dataloader):
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
        optimizer.step(),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TapasForQuestionAnswering, AdamW</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># this is the default WTQ configuration</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">config = TapasConfig(</span>
<span class="hljs-meta">...</span> <span class="language-python">           num_aggregation_labels = <span class="hljs-number">4</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           use_answer_as_supervision = <span class="hljs-literal">True</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           answer_loss_cutoff = <span class="hljs-number">0.664694</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           cell_selection_preference = <span class="hljs-number">0.207951</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           huber_loss_delta = <span class="hljs-number">0.121194</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           init_cell_selection_weights_to_zero = <span class="hljs-literal">True</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           select_one_column = <span class="hljs-literal">True</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           allow_empty_column_selection = <span class="hljs-literal">False</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           temperature = <span class="hljs-number">0.0352513</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model = TapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">optimizer = AdamW(model.parameters(), lr=<span class="hljs-number">5e-5</span>)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span></span>
<span class="hljs-meta">...</span> <span class="language-python">   <span class="hljs-keyword">for</span> idx, batch <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(train_dataloader):</span>
<span class="hljs-meta">...</span> <span class="language-python">        <span class="hljs-comment"># get the inputs; </span></span>
<span class="hljs-meta">...</span> <span class="language-python">        input_ids = batch[<span class="hljs-string">&quot;input_ids&quot;</span>]</span>
<span class="hljs-meta">...</span> <span class="language-python">        attention_mask = batch[<span class="hljs-string">&quot;attention_mask&quot;</span>]</span>
<span class="hljs-meta">...</span> <span class="language-python">        token_type_ids = batch[<span class="hljs-string">&quot;token_type_ids&quot;</span>]</span>
<span class="hljs-meta">...</span> <span class="language-python">        labels = batch[<span class="hljs-string">&quot;labels&quot;</span>]</span>
<span class="hljs-meta">...</span> <span class="language-python">        numeric_values = batch[<span class="hljs-string">&quot;numeric_values&quot;</span>]</span>
<span class="hljs-meta">...</span> <span class="language-python">        numeric_values_scale = batch[<span class="hljs-string">&quot;numeric_values_scale&quot;</span>]</span>
<span class="hljs-meta">...</span> <span class="language-python">        float_answer = batch[<span class="hljs-string">&quot;float_answer&quot;</span>]</span>

<span class="hljs-meta">...</span> <span class="language-python">        <span class="hljs-comment"># zero the parameter gradients</span></span>
<span class="hljs-meta">...</span> <span class="language-python">        optimizer.zero_grad()</span>

<span class="hljs-meta">...</span> <span class="language-python">        <span class="hljs-comment"># forward + backward + optimize</span></span>
<span class="hljs-meta">...</span> <span class="language-python">        outputs = model(input_ids=input_ids, attention_mask=attention_mask, token_type_ids=token_type_ids, </span>
<span class="hljs-meta">...</span> <span class="language-python">                       labels=labels, numeric_values=numeric_values, numeric_values_scale=numeric_values_scale, </span>
<span class="hljs-meta">...</span> <span class="language-python">                       float_answer=float_answer)</span>
<span class="hljs-meta">...</span> <span class="language-python">        loss = outputs.loss</span>
<span class="hljs-meta">...</span> <span class="language-python">        loss.backward()</span>
<span class="hljs-meta">...</span> <span class="language-python">        optimizer.step()</span>`}}),Ft=new we({props:{code:`import tensorflow as tf
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
   for idx, batch in enumerate(train_dataloader):
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
        optimizer.apply_gradients(zip(grads, model.trainable_weights)),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasConfig, TFTapasForQuestionAnswering</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># this is the default WTQ configuration</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">config = TapasConfig(</span>
<span class="hljs-meta">...</span> <span class="language-python">           num_aggregation_labels = <span class="hljs-number">4</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           use_answer_as_supervision = <span class="hljs-literal">True</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           answer_loss_cutoff = <span class="hljs-number">0.664694</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           cell_selection_preference = <span class="hljs-number">0.207951</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           huber_loss_delta = <span class="hljs-number">0.121194</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           init_cell_selection_weights_to_zero = <span class="hljs-literal">True</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           select_one_column = <span class="hljs-literal">True</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           allow_empty_column_selection = <span class="hljs-literal">False</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">           temperature = <span class="hljs-number">0.0352513</span>,</span>
<span class="hljs-meta">...</span> <span class="language-python">)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;google/tapas-base&quot;</span>, config=config)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">optimizer = tf.keras.optimizers.Adam(learning_rate=<span class="hljs-number">5e-5</span>)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">for</span> epoch <span class="hljs-keyword">in</span> <span class="hljs-built_in">range</span>(<span class="hljs-number">2</span>):  <span class="hljs-comment"># loop over the dataset multiple times</span></span>
<span class="hljs-meta">...</span> <span class="language-python">   <span class="hljs-keyword">for</span> idx, batch <span class="hljs-keyword">in</span> <span class="hljs-built_in">enumerate</span>(train_dataloader):</span>
<span class="hljs-meta">...</span> <span class="language-python">        <span class="hljs-comment"># get the inputs; </span></span>
<span class="hljs-meta">...</span> <span class="language-python">        input_ids = batch[<span class="hljs-number">0</span>]</span>
<span class="hljs-meta">...</span> <span class="language-python">        attention_mask = batch[<span class="hljs-number">1</span>]</span>
<span class="hljs-meta">...</span> <span class="language-python">        token_type_ids = batch[<span class="hljs-number">4</span>]</span>
<span class="hljs-meta">...</span> <span class="language-python">        labels = batch[-<span class="hljs-number">1</span>]</span>
<span class="hljs-meta">...</span> <span class="language-python">        numeric_values = batch[<span class="hljs-number">2</span>]</span>
<span class="hljs-meta">...</span> <span class="language-python">        numeric_values_scale = batch[<span class="hljs-number">3</span>]</span>
<span class="hljs-meta">...</span> <span class="language-python">        float_answer = batch[<span class="hljs-number">6</span>]</span>

<span class="hljs-meta">...</span> <span class="language-python">        <span class="hljs-comment"># forward + backward + optimize</span></span>
<span class="hljs-meta">...</span> <span class="language-python">        <span class="hljs-keyword">with</span> tf.GradientTape() <span class="hljs-keyword">as</span> tape:</span>
<span class="hljs-meta">...</span> <span class="language-python">             outputs = model(input_ids=input_ids, attention_mask=attention_mask, token_type_ids=token_type_ids, </span>
<span class="hljs-meta">...</span> <span class="language-python">                       labels=labels, numeric_values=numeric_values, numeric_values_scale=numeric_values_scale, </span>
<span class="hljs-meta">...</span> <span class="language-python">                       float_answer=float_answer )</span>
<span class="hljs-meta">...</span> <span class="language-python">        grads = tape.gradient(outputs.loss, model.trainable_weights)</span>
<span class="hljs-meta">...</span> <span class="language-python">        optimizer.apply_gradients(<span class="hljs-built_in">zip</span>(grads, model.trainable_weights))</span>`}}),$t=new ss({}),zt=new we({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
    print("Predicted answer: " + predicted_agg + " > " + answer)    ,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForQuestionAnswering</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd </span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model_name = <span class="hljs-string">&#x27;google/tapas-base-finetuned-wtq&#x27;</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model = TapasForQuestionAnswering.from_pretrained(model_name)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = TapasTokenizer.from_pretrained(model_name)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">queries = [<span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>, <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>]</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">table = pd.DataFrame.from_dict(data)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&#x27;max_length&#x27;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>) </span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">outputs = model(**inputs)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(</span>
<span class="hljs-meta">...</span> <span class="language-python">        inputs, </span>
<span class="hljs-meta">...</span> <span class="language-python">        outputs.logits.detach(), </span>
<span class="hljs-meta">...</span> <span class="language-python">        outputs.logits_aggregation.detach()</span>
<span class="hljs-meta">...</span> <span class="language-python">)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># let&#x27;s print out the results:</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>:<span class="hljs-string">&quot;COUNT&quot;</span>}</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">answers = []</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:</span>
<span class="hljs-meta">...</span> <span class="language-python">  <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-comment"># only a single cell:</span></span>
<span class="hljs-meta">...</span> <span class="language-python">    answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])</span>
<span class="hljs-meta">...</span> <span class="language-python">  <span class="hljs-keyword">else</span>:</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-comment"># multiple cells</span></span>
<span class="hljs-meta">...</span> <span class="language-python">    cell_values = []</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:</span>
<span class="hljs-meta">...</span> <span class="language-python">       cell_values.append(table.iat[coordinate])</span>
<span class="hljs-meta">...</span> <span class="language-python">    answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">display(table)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):</span>
<span class="hljs-meta">...</span> <span class="language-python">  <span class="hljs-built_in">print</span>(query)</span>
<span class="hljs-meta">...</span> <span class="language-python">  <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)</span>
<span class="hljs-meta">...</span> <span class="language-python">  <span class="hljs-keyword">else</span>:</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)    </span>
What is the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played in?
Predicted answer: COUNT &gt; 69
What is the total number of movies?
Predicted answer: SUM &gt; 87, 53, 69`}}),At=new we({props:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
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
    print("Predicted answer: " + predicted_agg + " > " + answer)    ,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasForQuestionAnswering</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">import</span> pandas <span class="hljs-keyword">as</span> pd </span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model_name = <span class="hljs-string">&#x27;google/tapas-base-finetuned-wtq&#x27;</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">model = TFTapasForQuestionAnswering.from_pretrained(model_name)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">tokenizer = TapasTokenizer.from_pretrained(model_name)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">data = {<span class="hljs-string">&#x27;Actors&#x27;</span>: [<span class="hljs-string">&quot;Brad Pitt&quot;</span>, <span class="hljs-string">&quot;Leonardo Di Caprio&quot;</span>, <span class="hljs-string">&quot;George Clooney&quot;</span>], <span class="hljs-string">&#x27;Number of movies&#x27;</span>: [<span class="hljs-string">&quot;87&quot;</span>, <span class="hljs-string">&quot;53&quot;</span>, <span class="hljs-string">&quot;69&quot;</span>]}</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">queries = [<span class="hljs-string">&quot;What is the name of the first actor?&quot;</span>, <span class="hljs-string">&quot;How many movies has George Clooney played in?&quot;</span>, <span class="hljs-string">&quot;What is the total number of movies?&quot;</span>]</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">table = pd.DataFrame.from_dict(data)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">inputs = tokenizer(table=table, queries=queries, padding=<span class="hljs-string">&#x27;max_length&#x27;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>) </span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">outputs = model(**inputs)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">predicted_answer_coordinates, predicted_aggregation_indices = tokenizer.convert_logits_to_predictions(</span>
<span class="hljs-meta">...</span> <span class="language-python">        inputs, </span>
<span class="hljs-meta">...</span> <span class="language-python">        outputs.logits, </span>
<span class="hljs-meta">...</span> <span class="language-python">        outputs.logits_aggregation</span>
<span class="hljs-meta">...</span> <span class="language-python">)</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-comment"># let&#x27;s print out the results:</span></span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">id2aggregation = {<span class="hljs-number">0</span>: <span class="hljs-string">&quot;NONE&quot;</span>, <span class="hljs-number">1</span>: <span class="hljs-string">&quot;SUM&quot;</span>, <span class="hljs-number">2</span>: <span class="hljs-string">&quot;AVERAGE&quot;</span>, <span class="hljs-number">3</span>:<span class="hljs-string">&quot;COUNT&quot;</span>}</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">aggregation_predictions_string = [id2aggregation[x] <span class="hljs-keyword">for</span> x <span class="hljs-keyword">in</span> predicted_aggregation_indices]</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">answers = []</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">for</span> coordinates <span class="hljs-keyword">in</span> predicted_answer_coordinates:</span>
<span class="hljs-meta">...</span> <span class="language-python">  <span class="hljs-keyword">if</span> <span class="hljs-built_in">len</span>(coordinates) == <span class="hljs-number">1</span>:</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-comment"># only a single cell:</span></span>
<span class="hljs-meta">...</span> <span class="language-python">    answers.append(table.iat[coordinates[<span class="hljs-number">0</span>]])</span>
<span class="hljs-meta">...</span> <span class="language-python">  <span class="hljs-keyword">else</span>:</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-comment"># multiple cells</span></span>
<span class="hljs-meta">...</span> <span class="language-python">    cell_values = []</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-keyword">for</span> coordinate <span class="hljs-keyword">in</span> coordinates:</span>
<span class="hljs-meta">...</span> <span class="language-python">       cell_values.append(table.iat[coordinate])</span>
<span class="hljs-meta">...</span> <span class="language-python">    answers.append(<span class="hljs-string">&quot;, &quot;</span>.join(cell_values))</span>

<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python">display(table)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;&quot;</span>)</span>
<span class="hljs-meta">&gt;&gt;&gt;</span> <span class="language-python"><span class="hljs-keyword">for</span> query, answer, predicted_agg <span class="hljs-keyword">in</span> <span class="hljs-built_in">zip</span>(queries, answers, aggregation_predictions_string):</span>
<span class="hljs-meta">...</span> <span class="language-python">  <span class="hljs-built_in">print</span>(query)</span>
<span class="hljs-meta">...</span> <span class="language-python">  <span class="hljs-keyword">if</span> predicted_agg == <span class="hljs-string">&quot;NONE&quot;</span>:</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + answer)</span>
<span class="hljs-meta">...</span> <span class="language-python">  <span class="hljs-keyword">else</span>:</span>
<span class="hljs-meta">...</span> <span class="language-python">    <span class="hljs-built_in">print</span>(<span class="hljs-string">&quot;Predicted answer: &quot;</span> + predicted_agg + <span class="hljs-string">&quot; &gt; &quot;</span> + answer)    </span>
What is the name of the first actor?
Predicted answer: Brad Pitt
How many movies has George Clooney played in?
Predicted answer: COUNT &gt; 69
What is the total number of movies?
Predicted answer: SUM &gt; 87, 53, 69`}}),Pt=new ss({}),St=new ue({props:{name:"class transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"logits_aggregation",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L106",parametersDescription:[{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> (and possibly <code>answer</code>, <code>aggregation_labels</code>, <code>numeric_values</code> and <code>numeric_values_scale</code> are provided)) &#x2014;
Total loss as the sum of the hierarchical cell selection log-likelihood loss and (optionally) the
semi-supervised regression loss and (optionally) supervised loss for aggregations.`,name:"loss"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Prediction scores of the cell selection head, for every token.`,name:"logits"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.logits_aggregation",description:`<strong>logits_aggregation</strong> (<code>torch.FloatTensor</code>, <em>optional</em>, of shape <code>(batch_size, num_aggregation_labels)</code>) &#x2014;
Prediction scores of the aggregation head, for every aggregation operator.`,name:"logits_aggregation"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer)
of shape <code>(batch_size, sequence_length, hidden_size)</code>. Hidden-states of the model at the output of
each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, sequence_length)</code>. Attentions weights after the attention softmax, used to compute the
weighted average in the self-attention heads.`,name:"attentions"}]}}),Nt=new ss({}),Qt=new ue({props:{name:"class transformers.TapasConfig",anchor:"transformers.TapasConfig",parameters:[{name:"vocab_size",val:" = 30522"},{name:"hidden_size",val:" = 768"},{name:"num_hidden_layers",val:" = 12"},{name:"num_attention_heads",val:" = 12"},{name:"intermediate_size",val:" = 3072"},{name:"hidden_act",val:" = 'gelu'"},{name:"hidden_dropout_prob",val:" = 0.1"},{name:"attention_probs_dropout_prob",val:" = 0.1"},{name:"max_position_embeddings",val:" = 1024"},{name:"type_vocab_sizes",val:" = [3, 256, 256, 2, 256, 256, 10]"},{name:"initializer_range",val:" = 0.02"},{name:"layer_norm_eps",val:" = 1e-12"},{name:"pad_token_id",val:" = 0"},{name:"positive_label_weight",val:" = 10.0"},{name:"num_aggregation_labels",val:" = 0"},{name:"aggregation_loss_weight",val:" = 1.0"},{name:"use_answer_as_supervision",val:" = None"},{name:"answer_loss_importance",val:" = 1.0"},{name:"use_normalized_answer_loss",val:" = False"},{name:"huber_loss_delta",val:" = None"},{name:"temperature",val:" = 1.0"},{name:"aggregation_temperature",val:" = 1.0"},{name:"use_gumbel_for_cells",val:" = False"},{name:"use_gumbel_for_aggregation",val:" = False"},{name:"average_approximation_function",val:" = 'ratio'"},{name:"cell_selection_preference",val:" = None"},{name:"answer_loss_cutoff",val:" = None"},{name:"max_num_rows",val:" = 64"},{name:"max_num_columns",val:" = 32"},{name:"average_logits_per_cell",val:" = False"},{name:"select_one_column",val:" = True"},{name:"allow_empty_column_selection",val:" = False"},{name:"init_cell_selection_weights_to_zero",val:" = False"},{name:"reset_position_index_per_cell",val:" = True"},{name:"disable_per_token_loss",val:" = False"},{name:"aggregation_labels",val:" = None"},{name:"no_aggregation_label_index",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/configuration_tapas.py#L37",parametersDescription:[{anchor:"transformers.TapasConfig.vocab_size",description:`<strong>vocab_size</strong> (<code>int</code>, <em>optional</em>, defaults to 30522) &#x2014;
Vocabulary size of the TAPAS model. Defines the number of different tokens that can be represented by the
<code>inputs_ids</code> passed when calling <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasModel">TapasModel</a>.`,name:"vocab_size"},{anchor:"transformers.TapasConfig.hidden_size",description:`<strong>hidden_size</strong> (<code>int</code>, <em>optional</em>, defaults to 768) &#x2014;
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
should be set to 0 for these models.`,name:"no_aggregation_label_index"}]}}),It=new we({props:{code:`from transformers import TapasModel, TapasConfig
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
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),Wt=new ss({}),Ut=new ue({props:{name:"class transformers.TapasTokenizer",anchor:"transformers.TapasTokenizer",parameters:[{name:"vocab_file",val:""},{name:"do_lower_case",val:" = True"},{name:"do_basic_tokenize",val:" = True"},{name:"never_split",val:" = None"},{name:"unk_token",val:" = '[UNK]'"},{name:"sep_token",val:" = '[SEP]'"},{name:"pad_token",val:" = '[PAD]'"},{name:"cls_token",val:" = '[CLS]'"},{name:"mask_token",val:" = '[MASK]'"},{name:"empty_token",val:" = '[EMPTY]'"},{name:"tokenize_chinese_chars",val:" = True"},{name:"strip_accents",val:" = None"},{name:"cell_trim_length",val:": int = -1"},{name:"max_column_id",val:": int = None"},{name:"max_row_id",val:": int = None"},{name:"strip_column_names",val:": bool = False"},{name:"update_answer_coordinates",val:": bool = False"},{name:"min_question_length",val:" = None"},{name:"max_question_length",val:" = None"},{name:"model_max_length",val:": int = 512"},{name:"additional_special_tokens",val:": typing.Optional[typing.List[str]] = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/tokenization_tapas.py#L190",parametersDescription:[{anchor:"transformers.TapasTokenizer.vocab_file",description:`<strong>vocab_file</strong> (<code>str</code>) &#x2014;
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
strip<em>accents &#x2014; (<code>bool</code>, _optional</em>):
Whether or not to strip all accents. If this option is not specified, then it will be determined by the
value for <code>lowercase</code> (as in the original BERT).`,name:"tokenize_chinese_chars"},{anchor:"transformers.TapasTokenizer.cell_trim_length",description:`<strong>cell_trim_length</strong> (<code>int</code>, <em>optional</em>, defaults to -1) &#x2014;
If &gt; 0: Trim cells so that the length is &lt;= this value. Also disables further cell trimming, should thus be
used with <code>truncation</code> set to <code>True</code>.`,name:"cell_trim_length"},{anchor:"transformers.TapasTokenizer.max_column_id",description:`<strong>max_column_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max column id to extract.`,name:"max_column_id"},{anchor:"transformers.TapasTokenizer.max_row_id",description:`<strong>max_row_id</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Max row id to extract.`,name:"max_row_id"},{anchor:"transformers.TapasTokenizer.strip_column_names",description:`<strong>strip_column_names</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to add empty strings instead of column names.`,name:"strip_column_names"},{anchor:"transformers.TapasTokenizer.update_answer_coordinates",description:`<strong>update_answer_coordinates</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether to recompute the answer coordinates from the answer text.`,name:"update_answer_coordinates"},{anchor:"transformers.TapasTokenizer.min_question_length",description:`<strong>min_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Minimum length of each question in terms of tokens (will be skipped otherwise).`,name:"min_question_length"},{anchor:"transformers.TapasTokenizer.max_question_length",description:`<strong>max_question_length</strong> (<code>int</code>, <em>optional</em>) &#x2014;
Maximum length of each question in terms of tokens (will be skipped otherwise).`,name:"max_question_length"}]}}),Ht=new ue({props:{name:"__call__",anchor:"transformers.TapasTokenizer.__call__",parameters:[{name:"table",val:": pd.DataFrame"},{name:"queries",val:": typing.Union[str, typing.List[str], typing.List[int], typing.List[typing.List[str]], typing.List[typing.List[int]], NoneType] = None"},{name:"answer_coordinates",val:": typing.Union[typing.List[typing.Tuple], typing.List[typing.List[typing.Tuple]], NoneType] = None"},{name:"answer_text",val:": typing.Union[typing.List[str], typing.List[typing.List[str]], NoneType] = None"},{name:"add_special_tokens",val:": bool = True"},{name:"padding",val:": typing.Union[bool, str, transformers.file_utils.PaddingStrategy] = False"},{name:"truncation",val:": typing.Union[bool, str, transformers.models.tapas.tokenization_tapas.TapasTruncationStrategy] = False"},{name:"max_length",val:": typing.Optional[int] = None"},{name:"pad_to_multiple_of",val:": typing.Optional[int] = None"},{name:"return_tensors",val:": typing.Union[str, transformers.file_utils.TensorType, NoneType] = None"},{name:"return_token_type_ids",val:": typing.Optional[bool] = None"},{name:"return_attention_mask",val:": typing.Optional[bool] = None"},{name:"return_overflowing_tokens",val:": bool = False"},{name:"return_special_tokens_mask",val:": bool = False"},{name:"return_offsets_mapping",val:": bool = False"},{name:"return_length",val:": bool = False"},{name:"verbose",val:": bool = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/tokenization_tapas.py#L531",parametersDescription:[{anchor:"transformers.TapasTokenizer.__call__.table",description:`<strong>table</strong> (<code>pd.DataFrame</code>) &#x2014;
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
the use of Tensor Cores on NVIDIA hardware with compute capability &gt;= 7.5 (Volta).`,name:"pad_to_multiple_of"},{anchor:"transformers.TapasTokenizer.__call__.return_tensors",description:`<strong>return_tensors</strong> (<code>str</code> or <a href="/docs/transformers/master/en/internal/file_utils#transformers.TensorType">TensorType</a>, <em>optional</em>) &#x2014;
If set, will return tensors instead of list of python integers. Acceptable values are:</p>
<ul>
<li><code>&apos;tf&apos;</code>: Return TensorFlow <code>tf.constant</code> objects.</li>
<li><code>&apos;pt&apos;</code>: Return PyTorch <code>torch.Tensor</code> objects.</li>
<li><code>&apos;np&apos;</code>: Return Numpy <code>np.ndarray</code> objects.</li>
</ul>`,name:"return_tensors"}]}}),Bt=new ue({props:{name:"convert_logits_to_predictions",anchor:"transformers.TapasTokenizer.convert_logits_to_predictions",parameters:[{name:"data",val:""},{name:"logits",val:""},{name:"logits_agg",val:" = None"},{name:"cell_classification_threshold",val:" = 0.5"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/tokenization_tapas.py#L1888",parametersDescription:[{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.data",description:`<strong>data</strong> (<code>dict</code>) &#x2014;
Dictionary mapping features to actual values. Should be created using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.`,name:"data"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits",description:`<strong>logits</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Tensor containing the logits at the token level.`,name:"logits"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.logits_agg",description:`<strong>logits_agg</strong> (<code>torch.Tensor</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_aggregation_labels)</code>, <em>optional</em>) &#x2014;
Tensor containing the aggregation logits.`,name:"logits_agg"},{anchor:"transformers.TapasTokenizer.convert_logits_to_predictions.cell_classification_threshold",description:`<strong>cell_classification_threshold</strong> (<code>float</code>, <em>optional</em>, defaults to 0.5) &#x2014;
Threshold to be used for cell selection. All table cells for which their probability is larger than
this threshold will be selected.`,name:"cell_classification_threshold"}],returnDescription:`
<ul>
<li>predicted_answer_coordinates (<code>List[List[[tuple]]</code> of length <code>batch_size</code>): Predicted answer
coordinates as a list of lists of tuples. Each element in the list contains the predicted answer
coordinates of a single example in the batch, as a list of tuples. Each tuple is a cell, i.e. (row index,
column index).</li>
<li>predicted<em>aggregation_indices (<code>List[int]</code>of length <code>batch_size</code>, _optional</em>, returned when
<code>logits_aggregation</code> is provided): Predicted aggregation operator indices of the aggregation head.</li>
</ul>
`,returnType:`
<p><code>tuple</code> comprising various elements depending on the inputs</p>
`}}),Kt=new ss({}),Jt=new ue({props:{name:"class transformers.TapasModel",anchor:"transformers.TapasModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L858",parametersDescription:[{anchor:"transformers.TapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),tn=new ue({props:{name:"forward",anchor:"transformers.TapasModel.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L897",parametersDescription:[{anchor:"transformers.TapasModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>BaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.BaseModelOutputWithPooling"
>BaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Pa=new _s({props:{$$slots:{default:[m0]},$$scope:{ctx:B}}}),nn=new we({props:{code:`from transformers import TapasTokenizer, TapasModel
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

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),on=new ss({}),rn=new ue({props:{name:"class transformers.TapasForMaskedLM",anchor:"transformers.TapasForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L1010",parametersDescription:[{anchor:"transformers.TapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),dn=new ue({props:{name:"forward",anchor:"transformers.TapasForMaskedLM.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"encoder_hidden_states",val:" = None"},{name:"encoder_attention_mask",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L1029",parametersDescription:[{anchor:"transformers.TapasForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.MaskedLMOutput"
>MaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
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
`}}),Da=new _s({props:{$$slots:{default:[g0]},$$scope:{ctx:B}}}),cn=new we({props:{code:`from transformers import TapasTokenizer, TapasForMaskedLM
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
last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TapasForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),hn=new ss({}),un=new ue({props:{name:"class transformers.TapasForSequenceClassification",anchor:"transformers.TapasForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L1461",parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),_n=new ue({props:{name:"forward",anchor:"transformers.TapasForSequenceClassification.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"labels",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L1473",parametersDescription:[{anchor:"transformers.TapasForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.TapasForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_outputs.SequenceClassifierOutput"
>SequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
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
`}}),Qa=new _s({props:{$$slots:{default:[f0]},$$scope:{ctx:B}}}),Tn=new we({props:{code:`from transformers import TapasTokenizer, TapasForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),bn=new ss({}),wn=new ue({props:{name:"class transformers.TapasForQuestionAnswering",anchor:"transformers.TapasForQuestionAnswering",parameters:[{name:"config",val:": TapasConfig"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L1119",parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),jn=new ue({props:{name:"forward",anchor:"transformers.TapasForQuestionAnswering.forward",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"head_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"table_mask",val:" = None"},{name:"labels",val:" = None"},{name:"aggregation_labels",val:" = None"},{name:"float_answer",val:" = None"},{name:"numeric_values",val:" = None"},{name:"numeric_values_scale",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tapas.py#L1154",parametersDescription:[{anchor:"transformers.TapasForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary. Indices can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TapasForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TapasForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
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
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong
supervision for aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TapasForQuestionAnswering.forward.float_answer",description:`<strong>float_answer</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values",description:`<strong>numeric_values</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to
calculate the regression loss.`,name:"numeric_values"},{anchor:"transformers.TapasForQuestionAnswering.forward.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.
Only required in case of weak supervision for aggregation (WTQ) to calculate the regression loss.`,name:"numeric_values_scale"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>TableQuestionAnsweringOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising
various elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig"
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
  href="/docs/transformers/master/en/model_doc/tapas#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"
>TableQuestionAnsweringOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Oa=new _s({props:{$$slots:{default:[_0]},$$scope:{ctx:B}}}),qn=new we({props:{code:`from transformers import TapasTokenizer, TapasForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits_aggregation = outputs.logits_aggregation`}}),xn=new ss({}),En=new ue({props:{name:"class transformers.TFTapasModel",anchor:"transformers.TFTapasModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L976",parametersDescription:[{anchor:"transformers.TFTapasModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Wa=new _s({props:{$$slots:{default:[T0]},$$scope:{ctx:B}}}),An=new ue({props:{name:"call",anchor:"transformers.TFTapasModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L982",parametersDescription:[{anchor:"transformers.TFTapasModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).</p>
<p>Returns &#x2014;</p>
<p>Examples &#x2014;:</p>
<blockquote>
<blockquote>
<blockquote>
<p>from transformers import TapasTokenizer, TapasModel
import pandas as pd</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>tokenizer = TapasTokenizer.from_pretrained(&#x2018;google/tapas-base&#x2019;)
model = TapasModel.from_pretrained(&#x2018;google/tapas-base&#x2019;)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>data = {&#x2018;Actors&#x2019;: [&#x201C;Brad Pitt&#x201D;, &#x201C;Leonardo Di Caprio&#x201D;, &#x201C;George Clooney&#x201D;],
&#x2026;         &#x2018;Age&#x2019;: [&#x201C;56&#x201D;, &#x201C;45&#x201D;, &#x201C;59&#x201D;],
&#x2026;         &#x2018;Number of movies&#x2019;: [&#x201C;87&#x201D;, &#x201C;53&#x201D;, &#x201C;69&#x201D;]
&#x2026; }
table = pd.DataFrame.from_dict(data)
queries = [&#x201C;How many movies has George Clooney played in?&#x201D;, &#x201C;How old is Brad Pitt?&#x201D;]</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>inputs = tokenizer(table=table, queries=queries, padding=&#x201C;max_length&#x201D;, return_tensors=&#x201C;tf&#x201D;)
outputs = model(**inputs)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>last_hidden_states = outputs.last_hidden_state</p>
</blockquote>
</blockquote>
</blockquote>`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>TFBaseModelOutputWithPooling</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
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
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFBaseModelOutputWithPooling"
>TFBaseModelOutputWithPooling</a> or \`tuple(tf.Tensor)\u201C</p>
`}}),Ua=new _s({props:{$$slots:{default:[b0]},$$scope:{ctx:B}}}),Cn=new we({props:{code:`from transformers import TapasTokenizer, TFTapasModel
import tensorflow as tf

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base')
model = TFTapasModel.from_pretrained('google/tapas-base')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
outputs = model(inputs)

last_hidden_states = outputs.last_hidden_state,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasModel
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasModel.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)

<span class="hljs-meta">&gt;&gt;&gt; </span>last_hidden_states = outputs.last_hidden_state`}}),Mn=new ss({}),Pn=new ue({props:{name:"class transformers.TFTapasForMaskedLM",anchor:"transformers.TFTapasForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L1069",parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ba=new _s({props:{$$slots:{default:[w0]},$$scope:{ctx:B}}}),Ln=new ue({props:{name:"call",anchor:"transformers.TFTapasForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L1085",parametersDescription:[{anchor:"transformers.TFTapasForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> or <code>np.ndarray</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored
(masked), the loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code></p>
<p>Returns &#x2014;</p>
<p>Examples &#x2014;:</p>
<blockquote>
<blockquote>
<blockquote>
<p>from transformers import TapasTokenizer, TapasForMaskedLM
import pandas as pd</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>tokenizer = TapasTokenizer.from_pretrained(&#x2018;google/tapas-base&#x2019;)
model = TapasForMaskedLM.from_pretrained(&#x2018;google/tapas-base&#x2019;)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>data = {&#x2018;Actors&#x2019;: [&#x201C;Brad Pitt&#x201D;, &#x201C;Leonardo Di Caprio&#x201D;, &#x201C;George Clooney&#x201D;],
&#x2026;         &#x2018;Age&#x2019;: [&#x201C;56&#x201D;, &#x201C;45&#x201D;, &#x201C;59&#x201D;],
&#x2026;         &#x2018;Number of movies&#x2019;: [&#x201C;87&#x201D;, &#x201C;53&#x201D;, &#x201C;69&#x201D;]
&#x2026; }
table = pd.DataFrame.from_dict(data)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>inputs = tokenizer(table=table, queries=&#x201C;How many [MASK] has George [MASK] played in?&#x201D;, return_tensors=&#x201C;tf&#x201D;)
labels = tokenizer(table=table, queries=&#x201C;How many movies has George Clooney played in?&#x201D;, return_tensors=&#x201C;tf&#x201D;)[&#x201C;input_ids&#x201D;]</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>outputs = model(**inputs, labels=labels)
last_hidden_states = outputs.last_hidden_state</p>
</blockquote>
</blockquote>
</blockquote>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFMaskedLMOutput"
>TFMaskedLMOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
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
>TFMaskedLMOutput</a> or \`tuple(tf.Tensor)\u201C</p>
`}}),Ra=new _s({props:{$$slots:{default:[v0]},$$scope:{ctx:B}}}),On=new we({props:{code:`from transformers import TapasTokenizer, TFTapasForMaskedLM
import tensorflow as tf

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base')
model = TFTapasForMaskedLM.from_pretrained('google/tapas-base')

inputs = tokenizer("The capital of France is [MASK].", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForMaskedLM.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is [MASK].&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),In=new ss({}),Wn=new ue({props:{name:"class transformers.TFTapasForSequenceClassification",anchor:"transformers.TFTapasForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L1652",parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Va=new _s({props:{$$slots:{default:[y0]},$$scope:{ctx:B}}}),Rn=new ue({props:{name:"call",anchor:"transformers.TFTapasForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L1663",parametersDescription:[{anchor:"transformers.TFTapasForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFTapasForSequenceClassification.call.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss),
If <code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy). Note: this is called
&#x201C;classification_class_index&#x201D; in the original implementation.</p>
<p>Returns &#x2014;</p>
<p>Examples &#x2014;:</p>
<blockquote>
<blockquote>
<blockquote>
<p>from transformers import TapasTokenizer, TapasForSequenceClassification
import tensorflow as tf
import pandas as pd</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>tokenizer = TapasTokenizer.from_pretrained(&#x2018;google/tapas-base-finetuned-tabfact&#x2019;)
model = TapasForSequenceClassification.from_pretrained(&#x2018;google/tapas-base-finetuned-tabfact&#x2019;)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>data = {&#x2018;Actors&#x2019;: [&#x201C;Brad Pitt&#x201D;, &#x201C;Leonardo Di Caprio&#x201D;, &#x201C;George Clooney&#x201D;],
&#x2026;         &#x2018;Age&#x2019;: [&#x201C;56&#x201D;, &#x201C;45&#x201D;, &#x201C;59&#x201D;],
&#x2026;         &#x2018;Number of movies&#x2019;: [&#x201C;87&#x201D;, &#x201C;53&#x201D;, &#x201C;69&#x201D;]
&#x2026; }
table = pd.DataFrame.from_dict(data)
queries = [&#x201C;There is only one actor who is 45 years old&#x201D;, &#x201C;There are 3 actors which played in more than 60 movies&#x201D;]</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>inputs = tokenizer(table=table, queries=queries, padding=&#x201C;max_length&#x201D;, return_tensors=&#x201C;tf&#x201D;)
labels = tf.convert_to_tensor([1, 0]) # 1 means entailed, 0 means refuted</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits</p>
</blockquote>
</blockquote>
</blockquote>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/main_classes/output#transformers.modeling_tf_outputs.TFSequenceClassifierOutput"
>TFSequenceClassifierOutput</a> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
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
>TFSequenceClassifierOutput</a> or \`tuple(tf.Tensor)\u201C</p>
`}}),Ka=new _s({props:{$$slots:{default:[k0]},$$scope:{ctx:B}}}),Gn=new we({props:{code:`from transformers import TapasTokenizer, TFTapasForSequenceClassification
import tensorflow as tf

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base')
model = TFTapasForSequenceClassification.from_pretrained('google/tapas-base')

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1)) # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits,`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForSequenceClassification.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>)) <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Vn=new ss({}),Kn=new ue({props:{name:"class transformers.TFTapasForQuestionAnswering",anchor:"transformers.TFTapasForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L1292",parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model
weights.`,name:"config"}]}}),Ya=new _s({props:{$$slots:{default:[j0]},$$scope:{ctx:B}}}),Zn=new ue({props:{name:"call",anchor:"transformers.TFTapasForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"table_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"aggregation_labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"float_answer",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"numeric_values_scale",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/tapas/modeling_tf_tapas.py#L1314",parametersDescription:[{anchor:"transformers.TFTapasForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code>, <code>tf.Tensor</code>, <code>List[tf.Tensor]</code> \`<code>Dict[str, tf.Tensor]</code> or <code>Dict[str, np.ndarray]</code> and each example must have the shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">transformers.PreTrainedTokenizer.<strong>call</strong>()</a> and <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">transformers.PreTrainedTokenizer.encode()</a> for
details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFTapasForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, 7)</code>, <em>optional</em>) &#x2014;
Token indices that encode tabular structure. Indices can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. See this class for more info.</p>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFTapasForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. If
<code>reset_position_index_per_cell</code> of <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig">TapasConfig</a> is set to <code>True</code>, relative
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
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This
argument can be used in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFTapasForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
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
should be in <code>[0, ..., config.num_aggregation_labels - 1]</code>. Only required in case of strong
supervision for aggregation (WikiSQL-supervised).`,name:"aggregation_labels"},{anchor:"transformers.TFTapasForQuestionAnswering.call.float_answer",description:`<strong>float_answer</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, )</code>, <em>optional</em>) &#x2014;
Float answer for every example in the batch. Set to <em>float(&#x2018;nan&#x2019;)</em> for cell selection questions. Only
required in case of weak supervision (WTQ) to calculate the aggregate mask and regression loss.`,name:"float_answer"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values",description:`<strong>numeric_values</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Numeric values of every token, NaN for tokens which are not numeric values. Can be obtained using
<a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>. Only required in case of weak supervision for aggregation (WTQ) to
calculate the regression loss.`,name:"numeric_values"},{anchor:"transformers.TFTapasForQuestionAnswering.call.numeric_values_scale",description:`<strong>numeric_values_scale</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, seq_length)</code>, <em>optional</em>) &#x2014;
Scale of the numeric values of every token. Can be obtained using <a href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer">TapasTokenizer</a>.
Only required in case of weak supervision for aggregation (WTQ) to calculate the regression loss.</p>
<p>Returns &#x2014;</p>
<p>Examples &#x2014;:</p>
<blockquote>
<blockquote>
<blockquote>
<p>from transformers import TapasTokenizer, TapasForQuestionAnswering
import pandas as pd</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>tokenizer = TapasTokenizer.from_pretrained(&#x2018;google/tapas-base-finetuned-wtq&#x2019;)
model = TapasForQuestionAnswering.from_pretrained(&#x2018;google/tapas-base-finetuned-wtq&#x2019;)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>data = {&#x2018;Actors&#x2019;: [&#x201C;Brad Pitt&#x201D;, &#x201C;Leonardo Di Caprio&#x201D;, &#x201C;George Clooney&#x201D;],
&#x2026;         &#x2018;Age&#x2019;: [&#x201C;56&#x201D;, &#x201C;45&#x201D;, &#x201C;59&#x201D;],
&#x2026;         &#x2018;Number of movies&#x2019;: [&#x201C;87&#x201D;, &#x201C;53&#x201D;, &#x201C;69&#x201D;]
&#x2026; }
table = pd.DataFrame.from_dict(data)
queries = [&#x201C;How many movies has George Clooney played in?&#x201D;, &#x201C;How old is Brad Pitt?&#x201D;]</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>inputs = tokenizer(table=table, queries=queries, padding=&#x201C;max_length&#x201D;, return_tensors=&#x201C;tf&#x201D;)
outputs = model(**inputs)</p>
</blockquote>
</blockquote>
</blockquote>
<blockquote>
<blockquote>
<blockquote>
<p>logits = outputs.logits
logits_aggregation = outputs.logits_aggregation</p>
</blockquote>
</blockquote>
</blockquote>`,name:"numeric_values_scale"}],returnDescription:`
<p>A <code>TFTableQuestionAnsweringOutput</code> or a tuple of
<code>tf.Tensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig"
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
<p><code>TFTableQuestionAnsweringOutput</code> or \`tuple(tf.Tensor)\u201C</p>
`}}),Xa=new _s({props:{$$slots:{default:[q0]},$$scope:{ctx:B}}}),eo=new we({props:{code:`from transformers import TapasTokenizer, TFTapasForQuestionAnswering
import tensorflow as tf

tokenizer = TapasTokenizer.from_pretrained('google/tapas-base')
model = TFTapasForQuestionAnswering.from_pretrained('google/tapas-base')

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors='tf')
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = ' '.join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0]+1]),`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> TapasTokenizer, TFTapasForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = TapasTokenizer.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFTapasForQuestionAnswering.from_pretrained(<span class="hljs-string">&#x27;google/tapas-base&#x27;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&#x27;tf&#x27;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&#x27; &#x27;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>]+<span class="hljs-number">1</span>])`}}),{c(){m=o("meta"),x=l(),g=o("h1"),f=o("a"),q=o("span"),b(T.$$.fragment),_=l(),F=o("span"),ve=t("TAPAS"),Y=l(),b($.$$.fragment),me=l(),S=o("h2"),X=o("a"),pe=o("span"),b(Q.$$.fragment),ye=l(),de=o("span"),se=t("Overview"),N=l(),H=o("p"),ae=t("The TAPAS model was proposed in "),z=o("a"),M=t("TAPAS: Weakly Supervised Table Parsing via Pre-training"),ke=t(` by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller,
Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically designed (and pre-trained) for
answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7 token types
that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset
comprising millions of tables from English Wikipedia and corresponding texts. For question answering, TAPAS has 2 heads
on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or
summing) among selected cells. TAPAS has been fine-tuned on several datasets: `),L=o("a"),je=t("SQA"),qe=t(" (Sequential Question Answering by Microsoft), "),O=o("a"),xe=t("WTQ"),Ee=t(" (Wiki Table Questions by Stanford University) and "),A=o("a"),Fe=t("WikiSQL"),K=t(` (by Salesforce). It achieves state-of-the-art on both SQA and WTQ, while
having comparable performance to SOTA on WikiSQL, with a much simpler architecture.`),ge=l(),re=o("p"),J=t("The abstract from the paper is the following:"),fe=l(),ie=o("p"),D=o("em"),$e=t(`Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the
collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations
instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition,
the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we
present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak
supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation
operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective
joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with
three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by
improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL
and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our
setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art.`),R=l(),G=o("p"),u=t("In addition, the authors have further pre-trained TAPAS to recognize "),E=o("strong"),te=t("table entailment"),Be=t(`, by creating a balanced
dataset of millions of automatically created training examples which are learned in an intermediate step prior to
fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first
pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves
performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on `),ze=o("a"),I=t("TabFact"),Re=t(`, a large-scale dataset with 16k Wikipedia tables for table
entailment (a binary classification task). For more details, see their follow-up paper: `),Ae=o("a"),Ge=t(`Understanding tables with
intermediate pre-training`),W=t(` by Julian Martin Eisenschlos,
Syrine Krichene and Thomas M\xFCller.`),V=l(),Z=o("p"),Ve=t("This model was contributed by "),U=o("a"),Ke=t("nielsr"),Je=t(`. The Tensorflow version of this model was
contributed by `),ne=o("a"),Ye=t("kamalkraj"),Ac=t(". The original code can be found "),rt=o("a"),Cc=t("here"),Mc=t("."),wp=l(),to=o("p"),Pc=t("Tips:"),vp=l(),Ts=o("ul"),Pe=o("li"),Sc=t(`TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell
of the table). Note that this is something that was added after the publication of the original TAPAS paper.
According to the authors, this usually results in a slightly better performance, and allows you to encode longer
sequences without running out of embeddings. This is reflected in the `),qr=o("code"),Dc=t("reset_position_index_per_cell"),Nc=t(` parameter of
`),no=o("a"),Qc=t("TapasConfig"),Lc=t(", which is set to "),xr=o("code"),Oc=t("True"),Ic=t(` by default. The default versions of the models available
in the `),it=o("a"),Wc=t("model hub"),Uc=t(` all use relative position embeddings. You can still
use the ones with absolute position embeddings by passing in an additional argument `),Er=o("code"),Hc=t('revision="no_reset"'),Bc=t(` when
calling the `),Fr=o("code"),Rc=t(".from_pretrained()"),Gc=t(` method. Note that it\u2019s usually advised to pad the inputs on the right rather than
the left.`),Vc=l(),Es=o("li"),Kc=t("TAPAS is based on BERT, so "),$r=o("code"),Jc=t("TAPAS-base"),Yc=t(" for example corresponds to a "),zr=o("code"),Xc=t("BERT-base"),Zc=t(` architecture. Of course,
TAPAS-large will result in the best performance (the results reported in the paper are from TAPAS-large). Results of
the various sized models are shown on the `),lt=o("a"),eh=t("original Github repository"),sh=t("."),ah=l(),Hs=o("li"),th=t(`TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a
conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the
previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that
case, you have to feed every table-question pair one by one to the model, such that the `),Ar=o("em"),nh=t("prev_labels"),oh=t(` token type ids
can be overwritten by the predicted `),Cr=o("em"),rh=t("labels"),ih=t(` of the model to the previous question. See \u201CUsage\u201D section for more
info.`),lh=l(),Mr=o("li"),ph=t(`TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),yp=l(),Bs=o("h2"),fa=o("a"),Pr=o("span"),b(pt.$$.fragment),dh=l(),Sr=o("span"),ch=t("Usage: fine-tuning"),kp=l(),_a=o("p"),hh=t("Here we explain how you can fine-tune "),oo=o("a"),uh=t("TapasForQuestionAnswering"),mh=t(" on your own dataset."),jp=l(),ro=o("p"),Dr=o("strong"),gh=t("STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),qp=l(),Ta=o("p"),fh=t("Basically, there are 3 different ways in which one can fine-tune "),io=o("a"),_h=t("TapasForQuestionAnswering"),Th=t(`,
corresponding to the different datasets on which Tapas was fine-tuned:`),xp=l(),Fs=o("ol"),Nr=o("li"),bh=t(`SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example
if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is
he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions).`),wh=l(),dt=o("li"),vh=t(`WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions
related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or
averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his
career?\u201C. This case is also called `),Qr=o("strong"),yh=t("weak supervision"),kh=t(`, since the model itself must learn the appropriate
aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision.`),jh=l(),ct=o("li"),qh=t(`WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation
operator during training. This is also called `),Lr=o("strong"),xh=t("strong supervision"),Eh=t(`. Here, learning the appropriate aggregation
operator is much easier.`),Ep=l(),lo=o("p"),Fh=t("To summarize:"),Fp=l(),bs=o("p"),$h=t("| "),Or=o("strong"),zh=t("Task"),Ah=t("                           | "),Ir=o("strong"),Ch=t("Example dataset"),Mh=t("  | "),Wr=o("strong"),Ph=t("Description"),Sh=t(`                                                                                                   |
| Conversational                     | SQA                  | Conversational, only cell selection questions                                                                     |
| Weak supervision for aggregation   | WTQ                  | Questions might involve aggregation, and the model must learn this given only the answer as supervision           |
| Strong supervision for aggregation | WikiSQL-supervised   | Questions might involve aggregation, and the model must learn this given the gold aggregation operator            |`),$p=l(),ba=o("p"),Dh=t(`Initializing a model with a pre-trained base and randomly initialized classification heads from the model hub can be
done as follows (be sure to have installed the `),ht=o("a"),Nh=t("torch-scatter dependency"),Qh=t(`
for your environment):`),zp=l(),b(ut.$$.fragment),Ap=l(),wa=o("p"),Lh=t("In TensorFlow, this can be done as follows (make sure to have installed the "),po=o("em"),Oh=t(`tensorflow_probability dependency
<`),mt=o("a"),Ih=t("https://github.com/tensorflow/probability"),Wh=t(">__ for your environment):"),Cp=l(),b(gt.$$.fragment),Mp=l(),$s=o("p"),Uh=t(`Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also
experiment by defining any hyperparameters you want when initializing `),co=o("a"),Hh=t("TapasConfig"),Bh=t(`, and then
create a `),ho=o("a"),Rh=t("TapasForQuestionAnswering"),Gh=t(` based on that configuration. For example, if you have a
dataset that has both conversational questions and questions that might involve aggregation, then you can do it this
way. Here\u2019s an example:`),Pp=l(),b(ft.$$.fragment),Sp=l(),uo=o("p"),Vh=t("And here is the equivalent code for TensorFlow:"),Dp=l(),b(_t.$$.fragment),Np=l(),va=o("p"),Kh=t(`What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned
checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See `),Tt=o("a"),Jh=t("here"),Yh=t(" for more info."),Qp=l(),ya=o("p"),Xh=t("For a list of all pre-trained and fine-tuned TAPAS checkpoints available in the HuggingFace model hub, see "),bt=o("a"),Zh=t("here"),eu=t("."),Lp=l(),mo=o("p"),Ur=o("strong"),su=t("STEP 2: Prepare your data in the SQA format"),Op=l(),ka=o("p"),au=t("Second, no matter what you picked above, you should prepare your dataset in the "),wt=o("a"),tu=t("SQA format"),nu=t(`. This format is a TSV/CSV file with the following
columns:`),Ip=l(),le=o("ul"),go=o("li"),Hr=o("code"),ou=t("id"),ru=t(": optional, id of the table-question pair, for bookkeeping purposes."),iu=l(),fo=o("li"),Br=o("code"),lu=t("annotator"),pu=t(": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),du=l(),_o=o("li"),Rr=o("code"),cu=t("position"),hu=t(`: integer indicating if the question is the first, second, third,\u2026 related to the table. Only required
in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised.`),uu=l(),To=o("li"),Gr=o("code"),mu=t("question"),gu=t(": string"),fu=l(),bo=o("li"),Vr=o("code"),_u=t("table_file"),Tu=t(": string, name of a csv file containing the tabular data"),bu=l(),wo=o("li"),Kr=o("code"),wu=t("answer_coordinates"),vu=t(`: list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is
part of the answer)`),yu=l(),vo=o("li"),Jr=o("code"),ku=t("answer_text"),ju=t(": list of one or more strings (each string being a cell value that is part of the answer)"),qu=l(),yo=o("li"),Yr=o("code"),xu=t("aggregation_label"),Eu=t(`: index of the aggregation operator. Only required in case of strong supervision for aggregation
(the WikiSQL-supervised case)`),Fu=l(),ko=o("li"),Xr=o("code"),$u=t("float_answer"),zu=t(`: the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of
weak supervision for aggregation (such as WTQ and WikiSQL)`),Wp=l(),as=o("p"),Au=t(`The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the
TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the
SQA format. The author explains this `),vt=o("a"),Cu=t("here"),Mu=t(`. Interestingly, these conversion scripts
are not perfect (the `),Zr=o("code"),Pu=t("answer_coordinates"),Su=t(" and "),ei=o("code"),Du=t("float_answer"),Nu=t(" fields are populated based on the "),si=o("code"),Qu=t("answer_text"),Lu=t(`),
meaning that WTQ and WikiSQL results could actually be improved.`),Up=l(),jo=o("p"),ai=o("strong"),Ou=t("STEP 3: Convert your data into PyTorch/TensorFlow tensors using TapasTokenizer"),Hp=l(),Ce=o("p"),Iu=t(`Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular
data), you can then use `),qo=o("a"),Wu=t("TapasTokenizer"),Uu=t(" to convert table-question pairs into "),ti=o("code"),Hu=t("input_ids"),Bu=t(`,
`),ni=o("code"),Ru=t("attention_mask"),Gu=t(", "),oi=o("code"),Vu=t("token_type_ids"),Ku=t(` and so on. Again, based on which of the three cases you picked above,
`),xo=o("a"),Ju=t("TapasForQuestionAnswering"),Yu=t("/"),Eo=o("a"),Xu=t("TFTapasForQuestionAnswering"),Zu=t(` requires different
inputs to be fine-tuned:`),Bp=l(),C=o("p"),em=t("| "),ri=o("strong"),sm=t("Task"),am=t("                           | "),ii=o("strong"),tm=t("Required inputs"),nm=t(`                                                                          |
| Conversational                     | `),li=o("code"),om=t("input_ids"),rm=t(", "),pi=o("code"),im=t("attention_mask"),lm=t(", "),di=o("code"),pm=t("token_type_ids"),dm=t(", "),ci=o("code"),cm=t("labels"),hm=t(`                            |
| Weak supervision for aggregation   | `),hi=o("code"),um=t("input_ids"),mm=t(", "),ui=o("code"),gm=t("attention_mask"),fm=t(", "),mi=o("code"),_m=t("token_type_ids"),Tm=t(", "),gi=o("code"),bm=t("labels"),wm=t(", "),fi=o("code"),vm=t("numeric_values"),ym=t(`,       |
|                                    | `),_i=o("code"),km=t("numeric_values_scale"),jm=t(", "),Ti=o("code"),qm=t("float_answer"),xm=t(`                                                   |
| Strong supervision for aggregation | `),bi=o("code"),Em=t("input ids"),Fm=t(", "),wi=o("code"),$m=t("attention mask"),zm=t(", "),vi=o("code"),Am=t("token type ids"),Cm=t(", "),yi=o("code"),Mm=t("labels"),Pm=t(", "),ki=o("code"),Sm=t("aggregation_labels"),Dm=t("    |"),Rp=l(),ce=o("p"),Fo=o("a"),Nm=t("TapasTokenizer"),Qm=t(" creates the "),ji=o("code"),Lm=t("labels"),Om=t(", "),qi=o("code"),Im=t("numeric_values"),Wm=t(" and "),xi=o("code"),Um=t("numeric_values_scale"),Hm=t(` based on
the `),Ei=o("code"),Bm=t("answer_coordinates"),Rm=t(" and "),Fi=o("code"),Gm=t("answer_text"),Vm=t(" columns of the TSV file. The "),$i=o("code"),Km=t("float_answer"),Jm=t(" and "),zi=o("code"),Ym=t("aggregation_labels"),Xm=t(`
are already in the TSV file of step 2. Here\u2019s an example:`),Gp=l(),b(yt.$$.fragment),Vp=l(),ja=o("p"),Zm=t("Set "),Ai=o("em"),eg=t("return_tensors=\u2018tf\u2019"),sg=t(" when calling the tokenizer to prepare data for the TF models."),Kp=l(),ws=o("p"),ag=t("Note that "),$o=o("a"),tg=t("TapasTokenizer"),ng=t(" expects the data of the table to be "),Ci=o("strong"),og=t("text-only"),rg=t(`. You can use
`),Mi=o("code"),ig=t(".astype(str)"),lg=t(` on a dataframe to turn it into text-only data. Of course, this only shows how to encode a single
training example. It is advised to create a PyTorch dataset and a corresponding dataloader:`),Jp=l(),b(kt.$$.fragment),Yp=l(),zo=o("p"),pg=t("And here is the equivalent code for TensorFlow:"),Xp=l(),b(jt.$$.fragment),Zp=l(),ee=o("p"),dg=t("Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),Pi=o("strong"),cg=t(`not
conversational`),hg=t(`. In case your dataset involves conversational questions (such as in SQA), then you should first group
together the `),Si=o("code"),ug=t("queries"),mg=t(", "),Di=o("code"),gg=t("answer_coordinates"),fg=t(" and "),Ni=o("code"),_g=t("answer_text"),Tg=t(" per table (in the order of their "),Qi=o("code"),bg=t("position"),wg=t(`
index) and batch encode each table with its questions. This will make sure that the `),Li=o("code"),vg=t("prev_labels"),yg=t(` token types (see
docs of `),Ao=o("a"),kg=t("TapasTokenizer"),jg=t(") are set correctly. See "),qt=o("a"),qg=t("this notebook"),xg=t(`
for more info. See `),xt=o("a"),Eg=t("this notebook"),Fg=t(`
for more info regarding using the TensorFlow model.`),ed=l(),Co=o("p"),Oi=o("strong"),$g=t("STEP 4: Train (fine-tune) TapasForQuestionAnswering/TFTapasForQuestionAnswering"),sd=l(),qa=o("p"),zg=t("You can then fine-tune "),Mo=o("a"),Ag=t("TapasForQuestionAnswering"),Cg=t(` using native PyTorch as follows (shown here for
the weak supervision for aggregation case):`),ad=l(),b(Et.$$.fragment),td=l(),xa=o("p"),Mg=t("Equivalently, fine-tuning "),Po=o("a"),Pg=t("TFTapasForQuestionAnswering"),Sg=t(` in native TensorFlow can be done as
follows (shown here for the weak supervision for aggregation case):`),nd=l(),b(Ft.$$.fragment),od=l(),Rs=o("h2"),Ea=o("a"),Ii=o("span"),b($t.$$.fragment),Dg=l(),Wi=o("span"),Ng=t("Usage: inference"),rd=l(),_e=o("p"),Qg=t("Here we explain how you can use "),So=o("a"),Lg=t("TapasForQuestionAnswering"),Og=t(` for inference (i.e. making predictions
on new data). For inference, only `),Ui=o("code"),Ig=t("input_ids"),Wg=t(", "),Hi=o("code"),Ug=t("attention_mask"),Hg=t(" and "),Bi=o("code"),Bg=t("token_type_ids"),Rg=t(` (which you can obtain using
`),Do=o("a"),Gg=t("TapasTokenizer"),Vg=t(`) have to be provided to the model to obtain the logits. Next, you can use the
handy `),Ri=o("code"),Kg=t("convert_logits_to_predictions"),Jg=t(" method of "),No=o("a"),Yg=t("TapasTokenizer"),Xg=t(` to convert these into predicted
coordinates and optional aggregation indices.`),id=l(),Fa=o("p"),Zg=t("However, note that inference is "),Gi=o("strong"),ef=t("different"),sf=t(` depending on whether or not the setup is conversational. In a
non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example
of that:`),ld=l(),b(zt.$$.fragment),pd=l(),Qo=o("p"),af=t("And here is the equivalent code for TensorFlow:"),dd=l(),b(At.$$.fragment),cd=l(),We=o("p"),tf=t("In case of a conversational set-up, then each table-question pair must be provided "),Vi=o("strong"),nf=t("sequentially"),of=t(` to the model, such
that the `),Ki=o("code"),rf=t("prev_labels"),lf=t(" token types can be overwritten by the predicted "),Ji=o("code"),pf=t("labels"),df=t(` of the previous table-question
pair. Again, more info can be found in `),Ct=o("a"),cf=t("this notebook"),hf=t(`
(for PyTorch) and `),Mt=o("a"),uf=t("this notebook"),mf=t(`
(for TensorFlow).`),hd=l(),Gs=o("h2"),$a=o("a"),Yi=o("span"),b(Pt.$$.fragment),gf=l(),Xi=o("span"),ff=t("Tapas specific outputs"),ud=l(),Vs=o("div"),b(St.$$.fragment),_f=l(),Dt=o("p"),Tf=t("Output type of "),Lo=o("a"),bf=t("TapasForQuestionAnswering"),wf=t("."),md=l(),Ks=o("h2"),za=o("a"),Zi=o("span"),b(Nt.$$.fragment),vf=l(),el=o("span"),yf=t("TapasConfig"),gd=l(),Xe=o("div"),b(Qt.$$.fragment),kf=l(),ms=o("p"),jf=t("This is the configuration class to store the configuration of a "),Oo=o("a"),qf=t("TapasModel"),xf=t(`. It is used to
instantiate a TAPAS model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the TAPAS `),sl=o("em"),Ef=t("tapas-base-finetuned-sqa"),Ff=t(`
architecture. Configuration objects inherit from `),al=o("code"),$f=t("PreTrainedConfig"),zf=t(` and can be used to control
the model outputs. Read the documentation from `),Io=o("a"),Af=t("PretrainedConfig"),Cf=t(" for more information."),Mf=l(),Lt=o("p"),Pf=t(`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),Ot=o("a"),Sf=t("https://github.com/google-research/tapas/tree/master"),Df=t("."),Nf=l(),tl=o("p"),Qf=t("Example:"),Lf=l(),b(It.$$.fragment),fd=l(),Js=o("h2"),Aa=o("a"),nl=o("span"),b(Wt.$$.fragment),Of=l(),ol=o("span"),If=t("TapasTokenizer"),_d=l(),he=o("div"),b(Ut.$$.fragment),Wf=l(),rl=o("p"),Uf=t(`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),Hf=l(),oe=o("p"),Bf=t("This tokenizer inherits from "),Wo=o("a"),Rf=t("PreTrainedTokenizer"),Gf=t(` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.
`),Uo=o("a"),Vf=t("TapasTokenizer"),Kf=t(` creates several token type ids to encode tabular structure. To be more
precise, it adds 7 token type ids, in the following order: `),il=o("code"),Jf=t("segment_ids"),Yf=t(", "),ll=o("code"),Xf=t("column_ids"),Zf=t(", "),pl=o("code"),e_=t("row_ids"),s_=t(`,
`),dl=o("code"),a_=t("prev_labels"),t_=t(", "),cl=o("code"),n_=t("column_ranks"),o_=t(", "),hl=o("code"),r_=t("inv_column_ranks"),i_=t(" and "),ul=o("code"),l_=t("numeric_relations"),p_=t(":"),d_=l(),Se=o("ul"),ml=o("li"),c_=t(`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),h_=l(),gl=o("li"),u_=t(`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),m_=l(),fl=o("li"),g_=t(`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),f_=l(),_l=o("li"),__=t(`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),T_=l(),Tl=o("li"),b_=t(`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),w_=l(),bl=o("li"),v_=t(`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),y_=l(),wl=o("li"),k_=t(`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),j_=l(),Ho=o("p"),Bo=o("a"),q_=t("TapasTokenizer"),x_=t(` runs end-to-end tokenization on a table and associated sentences: punctuation
splitting and wordpiece.`),E_=l(),Ca=o("div"),b(Ht.$$.fragment),F_=l(),vl=o("p"),$_=t("Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),z_=l(),zs=o("div"),b(Bt.$$.fragment),A_=l(),Rt=o("p"),C_=t("Converts logits of "),Ro=o("a"),M_=t("TapasForQuestionAnswering"),P_=t(` to actual predicted answer coordinates and
optional aggregation indices.`),S_=l(),Gt=o("p"),D_=t("The original implementation, on which this function is based, can be found "),Vt=o("a"),N_=t("here"),Q_=t("."),L_=l(),yl=o("div"),Td=l(),Ys=o("h2"),Ma=o("a"),kl=o("span"),b(Kt.$$.fragment),O_=l(),jl=o("span"),I_=t("TapasModel"),bd=l(),De=o("div"),b(Jt.$$.fragment),W_=l(),Yt=o("p"),U_=t(`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Go=o("a"),H_=t("PreTrainedModel"),B_=t(`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),R_=l(),Xt=o("p"),G_=t("This model is also a PyTorch "),Zt=o("a"),V_=t("torch.nn.Module"),K_=t(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),J_=l(),en=o("p"),Y_=t("This class is a small change compared to "),Vo=o("a"),X_=t("BertModel"),Z_=t(`, taking into account the additional token
type ids.`),eT=l(),sn=o("p"),sT=t(`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),an=o("a"),aT=t(`Attention is
all you need`),tT=t(` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),nT=l(),ts=o("div"),b(tn.$$.fragment),oT=l(),Xs=o("p"),rT=t("The "),Ko=o("a"),iT=t("TapasModel"),lT=t(" forward method, overrides the "),ql=o("code"),pT=t("__call__"),dT=t(" special method."),cT=l(),b(Pa.$$.fragment),hT=l(),xl=o("p"),uT=t("Examples:"),mT=l(),b(nn.$$.fragment),wd=l(),Zs=o("h2"),Sa=o("a"),El=o("span"),b(on.$$.fragment),gT=l(),Fl=o("span"),fT=t("TapasForMaskedLM"),vd=l(),gs=o("div"),b(rn.$$.fragment),_T=l(),ea=o("p"),TT=t("Tapas Model with a "),$l=o("em"),bT=t("language modeling"),wT=t(` head on top.
This model inherits from `),Jo=o("a"),vT=t("PreTrainedModel"),yT=t(`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),kT=l(),ln=o("p"),jT=t("This model is also a PyTorch "),pn=o("a"),qT=t("torch.nn.Module"),xT=t(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ET=l(),ns=o("div"),b(dn.$$.fragment),FT=l(),sa=o("p"),$T=t("The "),Yo=o("a"),zT=t("TapasForMaskedLM"),AT=t(" forward method, overrides the "),zl=o("code"),CT=t("__call__"),MT=t(" special method."),PT=l(),b(Da.$$.fragment),ST=l(),Al=o("p"),DT=t("Examples:"),NT=l(),b(cn.$$.fragment),yd=l(),aa=o("h2"),Na=o("a"),Cl=o("span"),b(hn.$$.fragment),QT=l(),Ml=o("span"),LT=t("TapasForSequenceClassification"),kd=l(),Ze=o("div"),b(un.$$.fragment),OT=l(),Pl=o("p"),IT=t(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),WT=l(),mn=o("p"),UT=t("This model inherits from "),Xo=o("a"),HT=t("PreTrainedModel"),BT=t(`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),RT=l(),gn=o("p"),GT=t("This model is also a PyTorch "),fn=o("a"),VT=t("torch.nn.Module"),KT=t(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),JT=l(),os=o("div"),b(_n.$$.fragment),YT=l(),ta=o("p"),XT=t("The "),Zo=o("a"),ZT=t("TapasForSequenceClassification"),eb=t(" forward method, overrides the "),Sl=o("code"),sb=t("__call__"),ab=t(" special method."),tb=l(),b(Qa.$$.fragment),nb=l(),Dl=o("p"),ob=t("Examples:"),rb=l(),b(Tn.$$.fragment),jd=l(),na=o("h2"),La=o("a"),Nl=o("span"),b(bn.$$.fragment),ib=l(),Ql=o("span"),lb=t("TapasForQuestionAnswering"),qd=l(),es=o("div"),b(wn.$$.fragment),pb=l(),oa=o("p"),db=t(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Ll=o("em"),cb=t("logits"),hb=t(" and optional "),Ol=o("em"),ub=t("logits_aggregation"),mb=t(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),gb=l(),vn=o("p"),fb=t("This model inherits from "),er=o("a"),_b=t("PreTrainedModel"),Tb=t(`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),bb=l(),yn=o("p"),wb=t("This model is also a PyTorch "),kn=o("a"),vb=t("torch.nn.Module"),yb=t(`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),kb=l(),rs=o("div"),b(jn.$$.fragment),jb=l(),ra=o("p"),qb=t("The "),sr=o("a"),xb=t("TapasForQuestionAnswering"),Eb=t(" forward method, overrides the "),Il=o("code"),Fb=t("__call__"),$b=t(" special method."),zb=l(),b(Oa.$$.fragment),Ab=l(),Wl=o("p"),Cb=t("Examples:"),Mb=l(),b(qn.$$.fragment),xd=l(),ia=o("h2"),Ia=o("a"),Ul=o("span"),b(xn.$$.fragment),Pb=l(),Hl=o("span"),Sb=t("TFTapasModel"),Ed=l(),Ne=o("div"),b(En.$$.fragment),Db=l(),Bl=o("p"),Nb=t("The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),Qb=l(),Fn=o("p"),Lb=t("This model inherits from "),ar=o("a"),Ob=t("TFPreTrainedModel"),Ib=t(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Wb=l(),$n=o("p"),Ub=t("This model is also a "),zn=o("a"),Hb=t("tf.keras.Model"),Bb=t(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Rb=l(),b(Wa.$$.fragment),Gb=l(),is=o("div"),b(An.$$.fragment),Vb=l(),la=o("p"),Kb=t("The "),tr=o("a"),Jb=t("TFTapasModel"),Yb=t(" forward method, overrides the "),Rl=o("code"),Xb=t("__call__"),Zb=t(" special method."),ew=l(),b(Ua.$$.fragment),sw=l(),Gl=o("p"),aw=t("Example:"),tw=l(),b(Cn.$$.fragment),Fd=l(),pa=o("h2"),Ha=o("a"),Vl=o("span"),b(Mn.$$.fragment),nw=l(),Kl=o("span"),ow=t("TFTapasForMaskedLM"),$d=l(),Qe=o("div"),b(Pn.$$.fragment),rw=l(),Sn=o("p"),iw=t("Tapas Model with a "),Jl=o("em"),lw=t("language modeling"),pw=t(" head on top."),dw=l(),Dn=o("p"),cw=t("This model inherits from "),nr=o("a"),hw=t("TFPreTrainedModel"),uw=t(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),mw=l(),Nn=o("p"),gw=t("This model is also a "),Qn=o("a"),fw=t("tf.keras.Model"),_w=t(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Tw=l(),b(Ba.$$.fragment),bw=l(),ls=o("div"),b(Ln.$$.fragment),ww=l(),da=o("p"),vw=t("The "),or=o("a"),yw=t("TFTapasForMaskedLM"),kw=t(" forward method, overrides the "),Yl=o("code"),jw=t("__call__"),qw=t(" special method."),xw=l(),b(Ra.$$.fragment),Ew=l(),Xl=o("p"),Fw=t("Example:"),$w=l(),b(On.$$.fragment),zd=l(),ca=o("h2"),Ga=o("a"),Zl=o("span"),b(In.$$.fragment),zw=l(),ep=o("span"),Aw=t("TFTapasForSequenceClassification"),Ad=l(),Le=o("div"),b(Wn.$$.fragment),Cw=l(),sp=o("p"),Mw=t(`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),Pw=l(),Un=o("p"),Sw=t("This model inherits from "),rr=o("a"),Dw=t("TFPreTrainedModel"),Nw=t(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),Qw=l(),Hn=o("p"),Lw=t("This model is also a "),Bn=o("a"),Ow=t("tf.keras.Model"),Iw=t(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ww=l(),b(Va.$$.fragment),Uw=l(),ps=o("div"),b(Rn.$$.fragment),Hw=l(),ha=o("p"),Bw=t("The "),ir=o("a"),Rw=t("TFTapasForSequenceClassification"),Gw=t(" forward method, overrides the "),ap=o("code"),Vw=t("__call__"),Kw=t(" special method."),Jw=l(),b(Ka.$$.fragment),Yw=l(),tp=o("p"),Xw=t("Example:"),Zw=l(),b(Gn.$$.fragment),Cd=l(),ua=o("h2"),Ja=o("a"),np=o("span"),b(Vn.$$.fragment),ev=l(),op=o("span"),sv=t("TFTapasForQuestionAnswering"),Md=l(),Oe=o("div"),b(Kn.$$.fragment),av=l(),ma=o("p"),tv=t(`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),rp=o("em"),nv=t("logits"),ov=t(" and optional "),ip=o("em"),rv=t("logits_aggregation"),iv=t(`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),lv=l(),Jn=o("p"),pv=t("This model inherits from "),lr=o("a"),dv=t("TFPreTrainedModel"),cv=t(`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),hv=l(),Yn=o("p"),uv=t("This model is also a "),Xn=o("a"),mv=t("tf.keras.Model"),gv=t(` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),fv=l(),b(Ya.$$.fragment),_v=l(),ds=o("div"),b(Zn.$$.fragment),Tv=l(),ga=o("p"),bv=t("The "),pr=o("a"),wv=t("TFTapasForQuestionAnswering"),vv=t(" forward method, overrides the "),lp=o("code"),yv=t("__call__"),kv=t(" special method."),jv=l(),b(Xa.$$.fragment),qv=l(),pp=o("p"),xv=t("Example:"),Ev=l(),b(eo.$$.fragment),this.h()},l(a){const h=h0('[data-svelte="svelte-1phssyn"]',document.head);m=r(h,"META",{name:!0,content:!0}),h.forEach(s),x=p(a),g=r(a,"H1",{class:!0});var so=i(g);f=r(so,"A",{id:!0,class:!0,href:!0});var dp=i(f);q=r(dp,"SPAN",{});var cp=i(q);w(T.$$.fragment,cp),cp.forEach(s),dp.forEach(s),_=p(so),F=r(so,"SPAN",{});var hp=i(F);ve=n(hp,"TAPAS"),hp.forEach(s),so.forEach(s),Y=p(a),w($.$$.fragment,a),me=p(a),S=r(a,"H2",{class:!0});var ao=i(S);X=r(ao,"A",{id:!0,class:!0,href:!0});var up=i(X);pe=r(up,"SPAN",{});var mp=i(pe);w(Q.$$.fragment,mp),mp.forEach(s),up.forEach(s),ye=p(ao),de=r(ao,"SPAN",{});var gp=i(de);se=n(gp,"Overview"),gp.forEach(s),ao.forEach(s),N=p(a),H=r(a,"P",{});var fs=i(H);ae=n(fs,"The TAPAS model was proposed in "),z=r(fs,"A",{href:!0,rel:!0});var fp=i(z);M=n(fp,"TAPAS: Weakly Supervised Table Parsing via Pre-training"),fp.forEach(s),ke=n(fs,` by Jonathan Herzig, Pawe\u0142 Krzysztof Nowak, Thomas M\xFCller,
Francesco Piccinno and Julian Martin Eisenschlos. It\u2019s a BERT-based model specifically designed (and pre-trained) for
answering questions about tabular data. Compared to BERT, TAPAS uses relative position embeddings and has 7 token types
that encode tabular structure. TAPAS is pre-trained on the masked language modeling (MLM) objective on a large dataset
comprising millions of tables from English Wikipedia and corresponding texts. For question answering, TAPAS has 2 heads
on top: a cell selection head and an aggregation head, for (optionally) performing aggregations (such as counting or
summing) among selected cells. TAPAS has been fine-tuned on several datasets: `),L=r(fs,"A",{href:!0,rel:!0});var _p=i(L);je=n(_p,"SQA"),_p.forEach(s),qe=n(fs," (Sequential Question Answering by Microsoft), "),O=r(fs,"A",{href:!0,rel:!0});var Tp=i(O);xe=n(Tp,"WTQ"),Tp.forEach(s),Ee=n(fs," (Wiki Table Questions by Stanford University) and "),A=r(fs,"A",{href:!0,rel:!0});var bp=i(A);Fe=n(bp,"WikiSQL"),bp.forEach(s),K=n(fs,` (by Salesforce). It achieves state-of-the-art on both SQA and WTQ, while
having comparable performance to SOTA on WikiSQL, with a much simpler architecture.`),fs.forEach(s),ge=p(a),re=r(a,"P",{});var Lv=i(re);J=n(Lv,"The abstract from the paper is the following:"),Lv.forEach(s),fe=p(a),ie=r(a,"P",{});var Ov=i(ie);D=r(Ov,"EM",{});var Iv=i(D);$e=n(Iv,`Answering natural language questions over tables is usually seen as a semantic parsing task. To alleviate the
collection cost of full logical forms, one popular approach focuses on weak supervision consisting of denotations
instead of logical forms. However, training semantic parsers from weak supervision poses difficulties, and in addition,
the generated logical forms are only used as an intermediate step prior to retrieving the denotation. In this paper, we
present TAPAS, an approach to question answering over tables without generating logical forms. TAPAS trains from weak
supervision, and predicts the denotation by selecting table cells and optionally applying a corresponding aggregation
operator to such selection. TAPAS extends BERT\u2019s architecture to encode tables as input, initializes from an effective
joint pre-training of text segments and tables crawled from Wikipedia, and is trained end-to-end. We experiment with
three different semantic parsing datasets, and find that TAPAS outperforms or rivals semantic parsing models by
improving state-of-the-art accuracy on SQA from 55.1 to 67.2 and performing on par with the state-of-the-art on WIKISQL
and WIKITQ, but with a simpler model architecture. We additionally find that transfer learning, which is trivial in our
setting, from WIKISQL to WIKITQ, yields 48.7 accuracy, 4.2 points above the state-of-the-art.`),Iv.forEach(s),Ov.forEach(s),R=p(a),G=r(a,"P",{});var Za=i(G);u=n(Za,"In addition, the authors have further pre-trained TAPAS to recognize "),E=r(Za,"STRONG",{});var Wv=i(E);te=n(Wv,"table entailment"),Wv.forEach(s),Be=n(Za,`, by creating a balanced
dataset of millions of automatically created training examples which are learned in an intermediate step prior to
fine-tuning. The authors of TAPAS call this further pre-training intermediate pre-training (since TAPAS is first
pre-trained on MLM, and then on another dataset). They found that intermediate pre-training further improves
performance on SQA, achieving a new state-of-the-art as well as state-of-the-art on `),ze=r(Za,"A",{href:!0,rel:!0});var Uv=i(ze);I=n(Uv,"TabFact"),Uv.forEach(s),Re=n(Za,`, a large-scale dataset with 16k Wikipedia tables for table
entailment (a binary classification task). For more details, see their follow-up paper: `),Ae=r(Za,"A",{href:!0,rel:!0});var Hv=i(Ae);Ge=n(Hv,`Understanding tables with
intermediate pre-training`),Hv.forEach(s),W=n(Za,` by Julian Martin Eisenschlos,
Syrine Krichene and Thomas M\xFCller.`),Za.forEach(s),V=p(a),Z=r(a,"P",{});var et=i(Z);Ve=n(et,"This model was contributed by "),U=r(et,"A",{href:!0,rel:!0});var Bv=i(U);Ke=n(Bv,"nielsr"),Bv.forEach(s),Je=n(et,`. The Tensorflow version of this model was
contributed by `),ne=r(et,"A",{href:!0,rel:!0});var Rv=i(ne);Ye=n(Rv,"kamalkraj"),Rv.forEach(s),Ac=n(et,". The original code can be found "),rt=r(et,"A",{href:!0,rel:!0});var Gv=i(rt);Cc=n(Gv,"here"),Gv.forEach(s),Mc=n(et,"."),et.forEach(s),wp=p(a),to=r(a,"P",{});var Vv=i(to);Pc=n(Vv,"Tips:"),Vv.forEach(s),vp=p(a),Ts=r(a,"UL",{});var st=i(Ts);Pe=r(st,"LI",{});var cs=i(Pe);Sc=n(cs,`TAPAS is a model that uses relative position embeddings by default (restarting the position embeddings at every cell
of the table). Note that this is something that was added after the publication of the original TAPAS paper.
According to the authors, this usually results in a slightly better performance, and allows you to encode longer
sequences without running out of embeddings. This is reflected in the `),qr=r(cs,"CODE",{});var Kv=i(qr);Dc=n(Kv,"reset_position_index_per_cell"),Kv.forEach(s),Nc=n(cs,` parameter of
`),no=r(cs,"A",{href:!0});var Jv=i(no);Qc=n(Jv,"TapasConfig"),Jv.forEach(s),Lc=n(cs,", which is set to "),xr=r(cs,"CODE",{});var Yv=i(xr);Oc=n(Yv,"True"),Yv.forEach(s),Ic=n(cs,` by default. The default versions of the models available
in the `),it=r(cs,"A",{href:!0,rel:!0});var Xv=i(it);Wc=n(Xv,"model hub"),Xv.forEach(s),Uc=n(cs,` all use relative position embeddings. You can still
use the ones with absolute position embeddings by passing in an additional argument `),Er=r(cs,"CODE",{});var Zv=i(Er);Hc=n(Zv,'revision="no_reset"'),Zv.forEach(s),Bc=n(cs,` when
calling the `),Fr=r(cs,"CODE",{});var ey=i(Fr);Rc=n(ey,".from_pretrained()"),ey.forEach(s),Gc=n(cs,` method. Note that it\u2019s usually advised to pad the inputs on the right rather than
the left.`),cs.forEach(s),Vc=p(st),Es=r(st,"LI",{});var at=i(Es);Kc=n(at,"TAPAS is based on BERT, so "),$r=r(at,"CODE",{});var sy=i($r);Jc=n(sy,"TAPAS-base"),sy.forEach(s),Yc=n(at," for example corresponds to a "),zr=r(at,"CODE",{});var ay=i(zr);Xc=n(ay,"BERT-base"),ay.forEach(s),Zc=n(at,` architecture. Of course,
TAPAS-large will result in the best performance (the results reported in the paper are from TAPAS-large). Results of
the various sized models are shown on the `),lt=r(at,"A",{href:!0,rel:!0});var ty=i(lt);eh=n(ty,"original Github repository"),ty.forEach(s),sh=n(at,"."),at.forEach(s),ah=p(st),Hs=r(st,"LI",{});var dr=i(Hs);th=n(dr,`TAPAS has checkpoints fine-tuned on SQA, which are capable of answering questions related to a table in a
conversational set-up. This means that you can ask follow-up questions such as \u201Cwhat is his age?\u201D related to the
previous question. Note that the forward pass of TAPAS is a bit different in case of a conversational set-up: in that
case, you have to feed every table-question pair one by one to the model, such that the `),Ar=r(dr,"EM",{});var ny=i(Ar);nh=n(ny,"prev_labels"),ny.forEach(s),oh=n(dr,` token type ids
can be overwritten by the predicted `),Cr=r(dr,"EM",{});var oy=i(Cr);rh=n(oy,"labels"),oy.forEach(s),ih=n(dr,` of the model to the previous question. See \u201CUsage\u201D section for more
info.`),dr.forEach(s),lh=p(st),Mr=r(st,"LI",{});var ry=i(Mr);ph=n(ry,`TAPAS is similar to BERT and therefore relies on the masked language modeling (MLM) objective. It is therefore
efficient at predicting masked tokens and at NLU in general, but is not optimal for text generation. Models trained
with a causal language modeling (CLM) objective are better in that regard.`),ry.forEach(s),st.forEach(s),yp=p(a),Bs=r(a,"H2",{class:!0});var Sd=i(Bs);fa=r(Sd,"A",{id:!0,class:!0,href:!0});var iy=i(fa);Pr=r(iy,"SPAN",{});var ly=i(Pr);w(pt.$$.fragment,ly),ly.forEach(s),iy.forEach(s),dh=p(Sd),Sr=r(Sd,"SPAN",{});var py=i(Sr);ch=n(py,"Usage: fine-tuning"),py.forEach(s),Sd.forEach(s),kp=p(a),_a=r(a,"P",{});var Dd=i(_a);hh=n(Dd,"Here we explain how you can fine-tune "),oo=r(Dd,"A",{href:!0});var dy=i(oo);uh=n(dy,"TapasForQuestionAnswering"),dy.forEach(s),mh=n(Dd," on your own dataset."),Dd.forEach(s),jp=p(a),ro=r(a,"P",{});var cy=i(ro);Dr=r(cy,"STRONG",{});var hy=i(Dr);gh=n(hy,"STEP 1: Choose one of the 3 ways in which you can use TAPAS - or experiment"),hy.forEach(s),cy.forEach(s),qp=p(a),Ta=r(a,"P",{});var Nd=i(Ta);fh=n(Nd,"Basically, there are 3 different ways in which one can fine-tune "),io=r(Nd,"A",{href:!0});var uy=i(io);_h=n(uy,"TapasForQuestionAnswering"),uy.forEach(s),Th=n(Nd,`,
corresponding to the different datasets on which Tapas was fine-tuned:`),Nd.forEach(s),xp=p(a),Fs=r(a,"OL",{});var cr=i(Fs);Nr=r(cr,"LI",{});var my=i(Nr);bh=n(my,`SQA: if you\u2019re interested in asking follow-up questions related to a table, in a conversational set-up. For example
if you first ask \u201Cwhat\u2019s the name of the first actor?\u201D then you can ask a follow-up question such as \u201Chow old is
he?\u201C. Here, questions do not involve any aggregation (all questions are cell selection questions).`),my.forEach(s),wh=p(cr),dt=r(cr,"LI",{});var Qd=i(dt);vh=n(Qd,`WTQ: if you\u2019re not interested in asking questions in a conversational set-up, but rather just asking questions
related to a table, which might involve aggregation, such as counting a number of rows, summing up cell values or
averaging cell values. You can then for example ask \u201Cwhat\u2019s the total number of goals Cristiano Ronaldo made in his
career?\u201C. This case is also called `),Qr=r(Qd,"STRONG",{});var gy=i(Qr);yh=n(gy,"weak supervision"),gy.forEach(s),kh=n(Qd,`, since the model itself must learn the appropriate
aggregation operator (SUM/COUNT/AVERAGE/NONE) given only the answer to the question as supervision.`),Qd.forEach(s),jh=p(cr),ct=r(cr,"LI",{});var Ld=i(ct);qh=n(Ld,`WikiSQL-supervised: this dataset is based on WikiSQL with the model being given the ground truth aggregation
operator during training. This is also called `),Lr=r(Ld,"STRONG",{});var fy=i(Lr);xh=n(fy,"strong supervision"),fy.forEach(s),Eh=n(Ld,`. Here, learning the appropriate aggregation
operator is much easier.`),Ld.forEach(s),cr.forEach(s),Ep=p(a),lo=r(a,"P",{});var _y=i(lo);Fh=n(_y,"To summarize:"),_y.forEach(s),Fp=p(a),bs=r(a,"P",{});var tt=i(bs);$h=n(tt,"| "),Or=r(tt,"STRONG",{});var Ty=i(Or);zh=n(Ty,"Task"),Ty.forEach(s),Ah=n(tt,"                           | "),Ir=r(tt,"STRONG",{});var by=i(Ir);Ch=n(by,"Example dataset"),by.forEach(s),Mh=n(tt,"  | "),Wr=r(tt,"STRONG",{});var wy=i(Wr);Ph=n(wy,"Description"),wy.forEach(s),Sh=n(tt,`                                                                                                   |
| Conversational                     | SQA                  | Conversational, only cell selection questions                                                                     |
| Weak supervision for aggregation   | WTQ                  | Questions might involve aggregation, and the model must learn this given only the answer as supervision           |
| Strong supervision for aggregation | WikiSQL-supervised   | Questions might involve aggregation, and the model must learn this given the gold aggregation operator            |`),tt.forEach(s),$p=p(a),ba=r(a,"P",{});var Od=i(ba);Dh=n(Od,`Initializing a model with a pre-trained base and randomly initialized classification heads from the model hub can be
done as follows (be sure to have installed the `),ht=r(Od,"A",{href:!0,rel:!0});var vy=i(ht);Nh=n(vy,"torch-scatter dependency"),vy.forEach(s),Qh=n(Od,`
for your environment):`),Od.forEach(s),zp=p(a),w(ut.$$.fragment,a),Ap=p(a),wa=r(a,"P",{});var Id=i(wa);Lh=n(Id,"In TensorFlow, this can be done as follows (make sure to have installed the "),po=r(Id,"EM",{});var Fv=i(po);Oh=n(Fv,`tensorflow_probability dependency
<`),mt=r(Fv,"A",{href:!0,rel:!0});var yy=i(mt);Ih=n(yy,"https://github.com/tensorflow/probability"),yy.forEach(s),Fv.forEach(s),Wh=n(Id,">__ for your environment):"),Id.forEach(s),Cp=p(a),w(gt.$$.fragment,a),Mp=p(a),$s=r(a,"P",{});var hr=i($s);Uh=n(hr,`Of course, you don\u2019t necessarily have to follow one of these three ways in which TAPAS was fine-tuned. You can also
experiment by defining any hyperparameters you want when initializing `),co=r(hr,"A",{href:!0});var ky=i(co);Hh=n(ky,"TapasConfig"),ky.forEach(s),Bh=n(hr,`, and then
create a `),ho=r(hr,"A",{href:!0});var jy=i(ho);Rh=n(jy,"TapasForQuestionAnswering"),jy.forEach(s),Gh=n(hr,` based on that configuration. For example, if you have a
dataset that has both conversational questions and questions that might involve aggregation, then you can do it this
way. Here\u2019s an example:`),hr.forEach(s),Pp=p(a),w(ft.$$.fragment,a),Sp=p(a),uo=r(a,"P",{});var qy=i(uo);Vh=n(qy,"And here is the equivalent code for TensorFlow:"),qy.forEach(s),Dp=p(a),w(_t.$$.fragment,a),Np=p(a),va=r(a,"P",{});var Wd=i(va);Kh=n(Wd,`What you can also do is start from an already fine-tuned checkpoint. A note here is that the already fine-tuned
checkpoint on WTQ has some issues due to the L2-loss which is somewhat brittle. See `),Tt=r(Wd,"A",{href:!0,rel:!0});var xy=i(Tt);Jh=n(xy,"here"),xy.forEach(s),Yh=n(Wd," for more info."),Wd.forEach(s),Qp=p(a),ya=r(a,"P",{});var Ud=i(ya);Xh=n(Ud,"For a list of all pre-trained and fine-tuned TAPAS checkpoints available in the HuggingFace model hub, see "),bt=r(Ud,"A",{href:!0,rel:!0});var Ey=i(bt);Zh=n(Ey,"here"),Ey.forEach(s),eu=n(Ud,"."),Ud.forEach(s),Lp=p(a),mo=r(a,"P",{});var Fy=i(mo);Ur=r(Fy,"STRONG",{});var $y=i(Ur);su=n($y,"STEP 2: Prepare your data in the SQA format"),$y.forEach(s),Fy.forEach(s),Op=p(a),ka=r(a,"P",{});var Hd=i(ka);au=n(Hd,"Second, no matter what you picked above, you should prepare your dataset in the "),wt=r(Hd,"A",{href:!0,rel:!0});var zy=i(wt);tu=n(zy,"SQA format"),zy.forEach(s),nu=n(Hd,`. This format is a TSV/CSV file with the following
columns:`),Hd.forEach(s),Ip=p(a),le=r(a,"UL",{});var Me=i(le);go=r(Me,"LI",{});var $v=i(go);Hr=r($v,"CODE",{});var Ay=i(Hr);ou=n(Ay,"id"),Ay.forEach(s),ru=n($v,": optional, id of the table-question pair, for bookkeeping purposes."),$v.forEach(s),iu=p(Me),fo=r(Me,"LI",{});var zv=i(fo);Br=r(zv,"CODE",{});var Cy=i(Br);lu=n(Cy,"annotator"),Cy.forEach(s),pu=n(zv,": optional, id of the person who annotated the table-question pair, for bookkeeping purposes."),zv.forEach(s),du=p(Me),_o=r(Me,"LI",{});var Av=i(_o);Rr=r(Av,"CODE",{});var My=i(Rr);cu=n(My,"position"),My.forEach(s),hu=n(Av,`: integer indicating if the question is the first, second, third,\u2026 related to the table. Only required
in case of conversational setup (SQA). You don\u2019t need this column in case you\u2019re going for WTQ/WikiSQL-supervised.`),Av.forEach(s),uu=p(Me),To=r(Me,"LI",{});var Cv=i(To);Gr=r(Cv,"CODE",{});var Py=i(Gr);mu=n(Py,"question"),Py.forEach(s),gu=n(Cv,": string"),Cv.forEach(s),fu=p(Me),bo=r(Me,"LI",{});var Mv=i(bo);Vr=r(Mv,"CODE",{});var Sy=i(Vr);_u=n(Sy,"table_file"),Sy.forEach(s),Tu=n(Mv,": string, name of a csv file containing the tabular data"),Mv.forEach(s),bu=p(Me),wo=r(Me,"LI",{});var Pv=i(wo);Kr=r(Pv,"CODE",{});var Dy=i(Kr);wu=n(Dy,"answer_coordinates"),Dy.forEach(s),vu=n(Pv,`: list of one or more tuples (each tuple being a cell coordinate, i.e. row, column pair that is
part of the answer)`),Pv.forEach(s),yu=p(Me),vo=r(Me,"LI",{});var Sv=i(vo);Jr=r(Sv,"CODE",{});var Ny=i(Jr);ku=n(Ny,"answer_text"),Ny.forEach(s),ju=n(Sv,": list of one or more strings (each string being a cell value that is part of the answer)"),Sv.forEach(s),qu=p(Me),yo=r(Me,"LI",{});var Dv=i(yo);Yr=r(Dv,"CODE",{});var Qy=i(Yr);xu=n(Qy,"aggregation_label"),Qy.forEach(s),Eu=n(Dv,`: index of the aggregation operator. Only required in case of strong supervision for aggregation
(the WikiSQL-supervised case)`),Dv.forEach(s),Fu=p(Me),ko=r(Me,"LI",{});var Nv=i(ko);Xr=r(Nv,"CODE",{});var Ly=i(Xr);$u=n(Ly,"float_answer"),Ly.forEach(s),zu=n(Nv,`: the float answer to the question, if there is one (np.nan if there isn\u2019t). Only required in case of
weak supervision for aggregation (such as WTQ and WikiSQL)`),Nv.forEach(s),Me.forEach(s),Wp=p(a),as=r(a,"P",{});var As=i(as);Au=n(As,`The tables themselves should be present in a folder, each table being a separate csv file. Note that the authors of the
TAPAS algorithm used conversion scripts with some automated logic to convert the other datasets (WTQ, WikiSQL) into the
SQA format. The author explains this `),vt=r(As,"A",{href:!0,rel:!0});var Oy=i(vt);Cu=n(Oy,"here"),Oy.forEach(s),Mu=n(As,`. Interestingly, these conversion scripts
are not perfect (the `),Zr=r(As,"CODE",{});var Iy=i(Zr);Pu=n(Iy,"answer_coordinates"),Iy.forEach(s),Su=n(As," and "),ei=r(As,"CODE",{});var Wy=i(ei);Du=n(Wy,"float_answer"),Wy.forEach(s),Nu=n(As," fields are populated based on the "),si=r(As,"CODE",{});var Uy=i(si);Qu=n(Uy,"answer_text"),Uy.forEach(s),Lu=n(As,`),
meaning that WTQ and WikiSQL results could actually be improved.`),As.forEach(s),Up=p(a),jo=r(a,"P",{});var Hy=i(jo);ai=r(Hy,"STRONG",{});var By=i(ai);Ou=n(By,"STEP 3: Convert your data into PyTorch/TensorFlow tensors using TapasTokenizer"),By.forEach(s),Hy.forEach(s),Hp=p(a),Ce=r(a,"P",{});var hs=i(Ce);Iu=n(hs,`Third, given that you\u2019ve prepared your data in this TSV/CSV format (and corresponding CSV files containing the tabular
data), you can then use `),qo=r(hs,"A",{href:!0});var Ry=i(qo);Wu=n(Ry,"TapasTokenizer"),Ry.forEach(s),Uu=n(hs," to convert table-question pairs into "),ti=r(hs,"CODE",{});var Gy=i(ti);Hu=n(Gy,"input_ids"),Gy.forEach(s),Bu=n(hs,`,
`),ni=r(hs,"CODE",{});var Vy=i(ni);Ru=n(Vy,"attention_mask"),Vy.forEach(s),Gu=n(hs,", "),oi=r(hs,"CODE",{});var Ky=i(oi);Vu=n(Ky,"token_type_ids"),Ky.forEach(s),Ku=n(hs,` and so on. Again, based on which of the three cases you picked above,
`),xo=r(hs,"A",{href:!0});var Jy=i(xo);Ju=n(Jy,"TapasForQuestionAnswering"),Jy.forEach(s),Yu=n(hs,"/"),Eo=r(hs,"A",{href:!0});var Yy=i(Eo);Xu=n(Yy,"TFTapasForQuestionAnswering"),Yy.forEach(s),Zu=n(hs,` requires different
inputs to be fine-tuned:`),hs.forEach(s),Bp=p(a),C=r(a,"P",{});var P=i(C);em=n(P,"| "),ri=r(P,"STRONG",{});var Xy=i(ri);sm=n(Xy,"Task"),Xy.forEach(s),am=n(P,"                           | "),ii=r(P,"STRONG",{});var Zy=i(ii);tm=n(Zy,"Required inputs"),Zy.forEach(s),nm=n(P,`                                                                          |
| Conversational                     | `),li=r(P,"CODE",{});var ek=i(li);om=n(ek,"input_ids"),ek.forEach(s),rm=n(P,", "),pi=r(P,"CODE",{});var sk=i(pi);im=n(sk,"attention_mask"),sk.forEach(s),lm=n(P,", "),di=r(P,"CODE",{});var ak=i(di);pm=n(ak,"token_type_ids"),ak.forEach(s),dm=n(P,", "),ci=r(P,"CODE",{});var tk=i(ci);cm=n(tk,"labels"),tk.forEach(s),hm=n(P,`                            |
| Weak supervision for aggregation   | `),hi=r(P,"CODE",{});var nk=i(hi);um=n(nk,"input_ids"),nk.forEach(s),mm=n(P,", "),ui=r(P,"CODE",{});var ok=i(ui);gm=n(ok,"attention_mask"),ok.forEach(s),fm=n(P,", "),mi=r(P,"CODE",{});var rk=i(mi);_m=n(rk,"token_type_ids"),rk.forEach(s),Tm=n(P,", "),gi=r(P,"CODE",{});var ik=i(gi);bm=n(ik,"labels"),ik.forEach(s),wm=n(P,", "),fi=r(P,"CODE",{});var lk=i(fi);vm=n(lk,"numeric_values"),lk.forEach(s),ym=n(P,`,       |
|                                    | `),_i=r(P,"CODE",{});var pk=i(_i);km=n(pk,"numeric_values_scale"),pk.forEach(s),jm=n(P,", "),Ti=r(P,"CODE",{});var dk=i(Ti);qm=n(dk,"float_answer"),dk.forEach(s),xm=n(P,`                                                   |
| Strong supervision for aggregation | `),bi=r(P,"CODE",{});var ck=i(bi);Em=n(ck,"input ids"),ck.forEach(s),Fm=n(P,", "),wi=r(P,"CODE",{});var hk=i(wi);$m=n(hk,"attention mask"),hk.forEach(s),zm=n(P,", "),vi=r(P,"CODE",{});var uk=i(vi);Am=n(uk,"token type ids"),uk.forEach(s),Cm=n(P,", "),yi=r(P,"CODE",{});var mk=i(yi);Mm=n(mk,"labels"),mk.forEach(s),Pm=n(P,", "),ki=r(P,"CODE",{});var gk=i(ki);Sm=n(gk,"aggregation_labels"),gk.forEach(s),Dm=n(P,"    |"),P.forEach(s),Rp=p(a),ce=r(a,"P",{});var Ie=i(ce);Fo=r(Ie,"A",{href:!0});var fk=i(Fo);Nm=n(fk,"TapasTokenizer"),fk.forEach(s),Qm=n(Ie," creates the "),ji=r(Ie,"CODE",{});var _k=i(ji);Lm=n(_k,"labels"),_k.forEach(s),Om=n(Ie,", "),qi=r(Ie,"CODE",{});var Tk=i(qi);Im=n(Tk,"numeric_values"),Tk.forEach(s),Wm=n(Ie," and "),xi=r(Ie,"CODE",{});var bk=i(xi);Um=n(bk,"numeric_values_scale"),bk.forEach(s),Hm=n(Ie,` based on
the `),Ei=r(Ie,"CODE",{});var wk=i(Ei);Bm=n(wk,"answer_coordinates"),wk.forEach(s),Rm=n(Ie," and "),Fi=r(Ie,"CODE",{});var vk=i(Fi);Gm=n(vk,"answer_text"),vk.forEach(s),Vm=n(Ie," columns of the TSV file. The "),$i=r(Ie,"CODE",{});var yk=i($i);Km=n(yk,"float_answer"),yk.forEach(s),Jm=n(Ie," and "),zi=r(Ie,"CODE",{});var kk=i(zi);Ym=n(kk,"aggregation_labels"),kk.forEach(s),Xm=n(Ie,`
are already in the TSV file of step 2. Here\u2019s an example:`),Ie.forEach(s),Gp=p(a),w(yt.$$.fragment,a),Vp=p(a),ja=r(a,"P",{});var Bd=i(ja);Zm=n(Bd,"Set "),Ai=r(Bd,"EM",{});var jk=i(Ai);eg=n(jk,"return_tensors=\u2018tf\u2019"),jk.forEach(s),sg=n(Bd," when calling the tokenizer to prepare data for the TF models."),Bd.forEach(s),Kp=p(a),ws=r(a,"P",{});var nt=i(ws);ag=n(nt,"Note that "),$o=r(nt,"A",{href:!0});var qk=i($o);tg=n(qk,"TapasTokenizer"),qk.forEach(s),ng=n(nt," expects the data of the table to be "),Ci=r(nt,"STRONG",{});var xk=i(Ci);og=n(xk,"text-only"),xk.forEach(s),rg=n(nt,`. You can use
`),Mi=r(nt,"CODE",{});var Ek=i(Mi);ig=n(Ek,".astype(str)"),Ek.forEach(s),lg=n(nt,` on a dataframe to turn it into text-only data. Of course, this only shows how to encode a single
training example. It is advised to create a PyTorch dataset and a corresponding dataloader:`),nt.forEach(s),Jp=p(a),w(kt.$$.fragment,a),Yp=p(a),zo=r(a,"P",{});var Fk=i(zo);pg=n(Fk,"And here is the equivalent code for TensorFlow:"),Fk.forEach(s),Xp=p(a),w(jt.$$.fragment,a),Zp=p(a),ee=r(a,"P",{});var Te=i(ee);dg=n(Te,"Note that here, we encode each table-question pair independently. This is fine as long as your dataset is "),Pi=r(Te,"STRONG",{});var $k=i(Pi);cg=n($k,`not
conversational`),$k.forEach(s),hg=n(Te,`. In case your dataset involves conversational questions (such as in SQA), then you should first group
together the `),Si=r(Te,"CODE",{});var zk=i(Si);ug=n(zk,"queries"),zk.forEach(s),mg=n(Te,", "),Di=r(Te,"CODE",{});var Ak=i(Di);gg=n(Ak,"answer_coordinates"),Ak.forEach(s),fg=n(Te," and "),Ni=r(Te,"CODE",{});var Ck=i(Ni);_g=n(Ck,"answer_text"),Ck.forEach(s),Tg=n(Te," per table (in the order of their "),Qi=r(Te,"CODE",{});var Mk=i(Qi);bg=n(Mk,"position"),Mk.forEach(s),wg=n(Te,`
index) and batch encode each table with its questions. This will make sure that the `),Li=r(Te,"CODE",{});var Pk=i(Li);vg=n(Pk,"prev_labels"),Pk.forEach(s),yg=n(Te,` token types (see
docs of `),Ao=r(Te,"A",{href:!0});var Sk=i(Ao);kg=n(Sk,"TapasTokenizer"),Sk.forEach(s),jg=n(Te,") are set correctly. See "),qt=r(Te,"A",{href:!0,rel:!0});var Dk=i(qt);qg=n(Dk,"this notebook"),Dk.forEach(s),xg=n(Te,`
for more info. See `),xt=r(Te,"A",{href:!0,rel:!0});var Nk=i(xt);Eg=n(Nk,"this notebook"),Nk.forEach(s),Fg=n(Te,`
for more info regarding using the TensorFlow model.`),Te.forEach(s),ed=p(a),Co=r(a,"P",{});var Qk=i(Co);Oi=r(Qk,"STRONG",{});var Lk=i(Oi);$g=n(Lk,"STEP 4: Train (fine-tune) TapasForQuestionAnswering/TFTapasForQuestionAnswering"),Lk.forEach(s),Qk.forEach(s),sd=p(a),qa=r(a,"P",{});var Rd=i(qa);zg=n(Rd,"You can then fine-tune "),Mo=r(Rd,"A",{href:!0});var Ok=i(Mo);Ag=n(Ok,"TapasForQuestionAnswering"),Ok.forEach(s),Cg=n(Rd,` using native PyTorch as follows (shown here for
the weak supervision for aggregation case):`),Rd.forEach(s),ad=p(a),w(Et.$$.fragment,a),td=p(a),xa=r(a,"P",{});var Gd=i(xa);Mg=n(Gd,"Equivalently, fine-tuning "),Po=r(Gd,"A",{href:!0});var Ik=i(Po);Pg=n(Ik,"TFTapasForQuestionAnswering"),Ik.forEach(s),Sg=n(Gd,` in native TensorFlow can be done as
follows (shown here for the weak supervision for aggregation case):`),Gd.forEach(s),nd=p(a),w(Ft.$$.fragment,a),od=p(a),Rs=r(a,"H2",{class:!0});var Vd=i(Rs);Ea=r(Vd,"A",{id:!0,class:!0,href:!0});var Wk=i(Ea);Ii=r(Wk,"SPAN",{});var Uk=i(Ii);w($t.$$.fragment,Uk),Uk.forEach(s),Wk.forEach(s),Dg=p(Vd),Wi=r(Vd,"SPAN",{});var Hk=i(Wi);Ng=n(Hk,"Usage: inference"),Hk.forEach(s),Vd.forEach(s),rd=p(a),_e=r(a,"P",{});var Ue=i(_e);Qg=n(Ue,"Here we explain how you can use "),So=r(Ue,"A",{href:!0});var Bk=i(So);Lg=n(Bk,"TapasForQuestionAnswering"),Bk.forEach(s),Og=n(Ue,` for inference (i.e. making predictions
on new data). For inference, only `),Ui=r(Ue,"CODE",{});var Rk=i(Ui);Ig=n(Rk,"input_ids"),Rk.forEach(s),Wg=n(Ue,", "),Hi=r(Ue,"CODE",{});var Gk=i(Hi);Ug=n(Gk,"attention_mask"),Gk.forEach(s),Hg=n(Ue," and "),Bi=r(Ue,"CODE",{});var Vk=i(Bi);Bg=n(Vk,"token_type_ids"),Vk.forEach(s),Rg=n(Ue,` (which you can obtain using
`),Do=r(Ue,"A",{href:!0});var Kk=i(Do);Gg=n(Kk,"TapasTokenizer"),Kk.forEach(s),Vg=n(Ue,`) have to be provided to the model to obtain the logits. Next, you can use the
handy `),Ri=r(Ue,"CODE",{});var Jk=i(Ri);Kg=n(Jk,"convert_logits_to_predictions"),Jk.forEach(s),Jg=n(Ue," method of "),No=r(Ue,"A",{href:!0});var Yk=i(No);Yg=n(Yk,"TapasTokenizer"),Yk.forEach(s),Xg=n(Ue,` to convert these into predicted
coordinates and optional aggregation indices.`),Ue.forEach(s),id=p(a),Fa=r(a,"P",{});var Kd=i(Fa);Zg=n(Kd,"However, note that inference is "),Gi=r(Kd,"STRONG",{});var Xk=i(Gi);ef=n(Xk,"different"),Xk.forEach(s),sf=n(Kd,` depending on whether or not the setup is conversational. In a
non-conversational set-up, inference can be done in parallel on all table-question pairs of a batch. Here\u2019s an example
of that:`),Kd.forEach(s),ld=p(a),w(zt.$$.fragment,a),pd=p(a),Qo=r(a,"P",{});var Zk=i(Qo);af=n(Zk,"And here is the equivalent code for TensorFlow:"),Zk.forEach(s),dd=p(a),w(At.$$.fragment,a),cd=p(a),We=r(a,"P",{});var vs=i(We);tf=n(vs,"In case of a conversational set-up, then each table-question pair must be provided "),Vi=r(vs,"STRONG",{});var e2=i(Vi);nf=n(e2,"sequentially"),e2.forEach(s),of=n(vs,` to the model, such
that the `),Ki=r(vs,"CODE",{});var s2=i(Ki);rf=n(s2,"prev_labels"),s2.forEach(s),lf=n(vs," token types can be overwritten by the predicted "),Ji=r(vs,"CODE",{});var a2=i(Ji);pf=n(a2,"labels"),a2.forEach(s),df=n(vs,` of the previous table-question
pair. Again, more info can be found in `),Ct=r(vs,"A",{href:!0,rel:!0});var t2=i(Ct);cf=n(t2,"this notebook"),t2.forEach(s),hf=n(vs,`
(for PyTorch) and `),Mt=r(vs,"A",{href:!0,rel:!0});var n2=i(Mt);uf=n(n2,"this notebook"),n2.forEach(s),mf=n(vs,`
(for TensorFlow).`),vs.forEach(s),hd=p(a),Gs=r(a,"H2",{class:!0});var Jd=i(Gs);$a=r(Jd,"A",{id:!0,class:!0,href:!0});var o2=i($a);Yi=r(o2,"SPAN",{});var r2=i(Yi);w(Pt.$$.fragment,r2),r2.forEach(s),o2.forEach(s),gf=p(Jd),Xi=r(Jd,"SPAN",{});var i2=i(Xi);ff=n(i2,"Tapas specific outputs"),i2.forEach(s),Jd.forEach(s),ud=p(a),Vs=r(a,"DIV",{class:!0});var Yd=i(Vs);w(St.$$.fragment,Yd),_f=p(Yd),Dt=r(Yd,"P",{});var Xd=i(Dt);Tf=n(Xd,"Output type of "),Lo=r(Xd,"A",{href:!0});var l2=i(Lo);bf=n(l2,"TapasForQuestionAnswering"),l2.forEach(s),wf=n(Xd,"."),Xd.forEach(s),Yd.forEach(s),md=p(a),Ks=r(a,"H2",{class:!0});var Zd=i(Ks);za=r(Zd,"A",{id:!0,class:!0,href:!0});var p2=i(za);Zi=r(p2,"SPAN",{});var d2=i(Zi);w(Nt.$$.fragment,d2),d2.forEach(s),p2.forEach(s),vf=p(Zd),el=r(Zd,"SPAN",{});var c2=i(el);yf=n(c2,"TapasConfig"),c2.forEach(s),Zd.forEach(s),gd=p(a),Xe=r(a,"DIV",{class:!0});var Cs=i(Xe);w(Qt.$$.fragment,Cs),kf=p(Cs),ms=r(Cs,"P",{});var Ms=i(ms);jf=n(Ms,"This is the configuration class to store the configuration of a "),Oo=r(Ms,"A",{href:!0});var h2=i(Oo);qf=n(h2,"TapasModel"),h2.forEach(s),xf=n(Ms,`. It is used to
instantiate a TAPAS model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the TAPAS `),sl=r(Ms,"EM",{});var u2=i(sl);Ef=n(u2,"tapas-base-finetuned-sqa"),u2.forEach(s),Ff=n(Ms,`
architecture. Configuration objects inherit from `),al=r(Ms,"CODE",{});var m2=i(al);$f=n(m2,"PreTrainedConfig"),m2.forEach(s),zf=n(Ms,` and can be used to control
the model outputs. Read the documentation from `),Io=r(Ms,"A",{href:!0});var g2=i(Io);Af=n(g2,"PretrainedConfig"),g2.forEach(s),Cf=n(Ms," for more information."),Ms.forEach(s),Mf=p(Cs),Lt=r(Cs,"P",{});var ec=i(Lt);Pf=n(ec,`Hyperparameters additional to BERT are taken from run_task_main.py and hparam_utils.py of the original
implementation. Original implementation available at `),Ot=r(ec,"A",{href:!0,rel:!0});var f2=i(Ot);Sf=n(f2,"https://github.com/google-research/tapas/tree/master"),f2.forEach(s),Df=n(ec,"."),ec.forEach(s),Nf=p(Cs),tl=r(Cs,"P",{});var _2=i(tl);Qf=n(_2,"Example:"),_2.forEach(s),Lf=p(Cs),w(It.$$.fragment,Cs),Cs.forEach(s),fd=p(a),Js=r(a,"H2",{class:!0});var sc=i(Js);Aa=r(sc,"A",{id:!0,class:!0,href:!0});var T2=i(Aa);nl=r(T2,"SPAN",{});var b2=i(nl);w(Wt.$$.fragment,b2),b2.forEach(s),T2.forEach(s),Of=p(sc),ol=r(sc,"SPAN",{});var w2=i(ol);If=n(w2,"TapasTokenizer"),w2.forEach(s),sc.forEach(s),_d=p(a),he=r(a,"DIV",{class:!0});var He=i(he);w(Ut.$$.fragment,He),Wf=p(He),rl=r(He,"P",{});var v2=i(rl);Uf=n(v2,`Construct a TAPAS tokenizer. Based on WordPiece. Flattens a table and one or more related sentences to be used by
TAPAS models.`),v2.forEach(s),Hf=p(He),oe=r(He,"P",{});var be=i(oe);Bf=n(be,"This tokenizer inherits from "),Wo=r(be,"A",{href:!0});var y2=i(Wo);Rf=n(y2,"PreTrainedTokenizer"),y2.forEach(s),Gf=n(be,` which contains most of the main methods.
Users should refer to this superclass for more information regarding those methods.
`),Uo=r(be,"A",{href:!0});var k2=i(Uo);Vf=n(k2,"TapasTokenizer"),k2.forEach(s),Kf=n(be,` creates several token type ids to encode tabular structure. To be more
precise, it adds 7 token type ids, in the following order: `),il=r(be,"CODE",{});var j2=i(il);Jf=n(j2,"segment_ids"),j2.forEach(s),Yf=n(be,", "),ll=r(be,"CODE",{});var q2=i(ll);Xf=n(q2,"column_ids"),q2.forEach(s),Zf=n(be,", "),pl=r(be,"CODE",{});var x2=i(pl);e_=n(x2,"row_ids"),x2.forEach(s),s_=n(be,`,
`),dl=r(be,"CODE",{});var E2=i(dl);a_=n(E2,"prev_labels"),E2.forEach(s),t_=n(be,", "),cl=r(be,"CODE",{});var F2=i(cl);n_=n(F2,"column_ranks"),F2.forEach(s),o_=n(be,", "),hl=r(be,"CODE",{});var $2=i(hl);r_=n($2,"inv_column_ranks"),$2.forEach(s),i_=n(be," and "),ul=r(be,"CODE",{});var z2=i(ul);l_=n(z2,"numeric_relations"),z2.forEach(s),p_=n(be,":"),be.forEach(s),d_=p(He),Se=r(He,"UL",{});var us=i(Se);ml=r(us,"LI",{});var A2=i(ml);c_=n(A2,`segment_ids: indicate whether a token belongs to the question (0) or the table (1). 0 for special tokens and
padding.`),A2.forEach(s),h_=p(us),gl=r(us,"LI",{});var C2=i(gl);u_=n(C2,`column_ids: indicate to which column of the table a token belongs (starting from 1). Is 0 for all question
tokens, special tokens and padding.`),C2.forEach(s),m_=p(us),fl=r(us,"LI",{});var M2=i(fl);g_=n(M2,`row_ids: indicate to which row of the table a token belongs (starting from 1). Is 0 for all question tokens,
special tokens and padding. Tokens of column headers are also 0.`),M2.forEach(s),f_=p(us),_l=r(us,"LI",{});var P2=i(_l);__=n(P2,`prev_labels: indicate whether a token was (part of) an answer to the previous question (1) or not (0). Useful in
a conversational setup (such as SQA).`),P2.forEach(s),T_=p(us),Tl=r(us,"LI",{});var S2=i(Tl);b_=n(S2,`column_ranks: indicate the rank of a table token relative to a column, if applicable. For example, if you have a
column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the column ranks of these tokens are 3, 1 and 2
respectively. 0 for all question tokens, special tokens and padding.`),S2.forEach(s),w_=p(us),bl=r(us,"LI",{});var D2=i(bl);v_=n(D2,`inv_column_ranks: indicate the inverse rank of a table token relative to a column, if applicable. For example, if
you have a column \u201Cnumber of movies\u201D with values 87, 53 and 69, then the inverse column ranks of these tokens are
1, 3 and 2 respectively. 0 for all question tokens, special tokens and padding.`),D2.forEach(s),y_=p(us),wl=r(us,"LI",{});var N2=i(wl);k_=n(N2,`numeric_relations: indicate numeric relations between the question and the tokens of the table. 0 for all
question tokens, special tokens and padding.`),N2.forEach(s),us.forEach(s),j_=p(He),Ho=r(He,"P",{});var Qv=i(Ho);Bo=r(Qv,"A",{href:!0});var Q2=i(Bo);q_=n(Q2,"TapasTokenizer"),Q2.forEach(s),x_=n(Qv,` runs end-to-end tokenization on a table and associated sentences: punctuation
splitting and wordpiece.`),Qv.forEach(s),E_=p(He),Ca=r(He,"DIV",{class:!0});var ac=i(Ca);w(Ht.$$.fragment,ac),F_=p(ac),vl=r(ac,"P",{});var L2=i(vl);$_=n(L2,"Main method to tokenize and prepare for the model one or several sequence(s) related to a table."),L2.forEach(s),ac.forEach(s),z_=p(He),zs=r(He,"DIV",{class:!0});var ur=i(zs);w(Bt.$$.fragment,ur),A_=p(ur),Rt=r(ur,"P",{});var tc=i(Rt);C_=n(tc,"Converts logits of "),Ro=r(tc,"A",{href:!0});var O2=i(Ro);M_=n(O2,"TapasForQuestionAnswering"),O2.forEach(s),P_=n(tc,` to actual predicted answer coordinates and
optional aggregation indices.`),tc.forEach(s),S_=p(ur),Gt=r(ur,"P",{});var nc=i(Gt);D_=n(nc,"The original implementation, on which this function is based, can be found "),Vt=r(nc,"A",{href:!0,rel:!0});var I2=i(Vt);N_=n(I2,"here"),I2.forEach(s),Q_=n(nc,"."),nc.forEach(s),ur.forEach(s),L_=p(He),yl=r(He,"DIV",{class:!0}),i(yl).forEach(s),He.forEach(s),Td=p(a),Ys=r(a,"H2",{class:!0});var oc=i(Ys);Ma=r(oc,"A",{id:!0,class:!0,href:!0});var W2=i(Ma);kl=r(W2,"SPAN",{});var U2=i(kl);w(Kt.$$.fragment,U2),U2.forEach(s),W2.forEach(s),O_=p(oc),jl=r(oc,"SPAN",{});var H2=i(jl);I_=n(H2,"TapasModel"),H2.forEach(s),oc.forEach(s),bd=p(a),De=r(a,"DIV",{class:!0});var ys=i(De);w(Jt.$$.fragment,ys),W_=p(ys),Yt=r(ys,"P",{});var rc=i(Yt);U_=n(rc,`The bare Tapas Model transformer outputting raw hidden-states without any specific head on top.
This model inherits from `),Go=r(rc,"A",{href:!0});var B2=i(Go);H_=n(B2,"PreTrainedModel"),B2.forEach(s),B_=n(rc,`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),rc.forEach(s),R_=p(ys),Xt=r(ys,"P",{});var ic=i(Xt);G_=n(ic,"This model is also a PyTorch "),Zt=r(ic,"A",{href:!0,rel:!0});var R2=i(Zt);V_=n(R2,"torch.nn.Module"),R2.forEach(s),K_=n(ic,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),ic.forEach(s),J_=p(ys),en=r(ys,"P",{});var lc=i(en);Y_=n(lc,"This class is a small change compared to "),Vo=r(lc,"A",{href:!0});var G2=i(Vo);X_=n(G2,"BertModel"),G2.forEach(s),Z_=n(lc,`, taking into account the additional token
type ids.`),lc.forEach(s),eT=p(ys),sn=r(ys,"P",{});var pc=i(sn);sT=n(pc,`The model can behave as an encoder (with only self-attention) as well as a decoder, in which case a layer of
cross-attention is added between the self-attention layers, following the architecture described in `),an=r(pc,"A",{href:!0,rel:!0});var V2=i(an);aT=n(V2,`Attention is
all you need`),V2.forEach(s),tT=n(pc,` by Ashish Vaswani, Noam Shazeer, Niki Parmar, Jakob Uszkoreit,
Llion Jones, Aidan N. Gomez, Lukasz Kaiser and Illia Polosukhin.`),pc.forEach(s),nT=p(ys),ts=r(ys,"DIV",{class:!0});var Ps=i(ts);w(tn.$$.fragment,Ps),oT=p(Ps),Xs=r(Ps,"P",{});var mr=i(Xs);rT=n(mr,"The "),Ko=r(mr,"A",{href:!0});var K2=i(Ko);iT=n(K2,"TapasModel"),K2.forEach(s),lT=n(mr," forward method, overrides the "),ql=r(mr,"CODE",{});var J2=i(ql);pT=n(J2,"__call__"),J2.forEach(s),dT=n(mr," special method."),mr.forEach(s),cT=p(Ps),w(Pa.$$.fragment,Ps),hT=p(Ps),xl=r(Ps,"P",{});var Y2=i(xl);uT=n(Y2,"Examples:"),Y2.forEach(s),mT=p(Ps),w(nn.$$.fragment,Ps),Ps.forEach(s),ys.forEach(s),wd=p(a),Zs=r(a,"H2",{class:!0});var dc=i(Zs);Sa=r(dc,"A",{id:!0,class:!0,href:!0});var X2=i(Sa);El=r(X2,"SPAN",{});var Z2=i(El);w(on.$$.fragment,Z2),Z2.forEach(s),X2.forEach(s),gT=p(dc),Fl=r(dc,"SPAN",{});var e1=i(Fl);fT=n(e1,"TapasForMaskedLM"),e1.forEach(s),dc.forEach(s),vd=p(a),gs=r(a,"DIV",{class:!0});var ot=i(gs);w(rn.$$.fragment,ot),_T=p(ot),ea=r(ot,"P",{});var gr=i(ea);TT=n(gr,"Tapas Model with a "),$l=r(gr,"EM",{});var s1=i($l);bT=n(s1,"language modeling"),s1.forEach(s),wT=n(gr,` head on top.
This model inherits from `),Jo=r(gr,"A",{href:!0});var a1=i(Jo);vT=n(a1,"PreTrainedModel"),a1.forEach(s),yT=n(gr,`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),gr.forEach(s),kT=p(ot),ln=r(ot,"P",{});var cc=i(ln);jT=n(cc,"This model is also a PyTorch "),pn=r(cc,"A",{href:!0,rel:!0});var t1=i(pn);qT=n(t1,"torch.nn.Module"),t1.forEach(s),xT=n(cc,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),cc.forEach(s),ET=p(ot),ns=r(ot,"DIV",{class:!0});var Ss=i(ns);w(dn.$$.fragment,Ss),FT=p(Ss),sa=r(Ss,"P",{});var fr=i(sa);$T=n(fr,"The "),Yo=r(fr,"A",{href:!0});var n1=i(Yo);zT=n(n1,"TapasForMaskedLM"),n1.forEach(s),AT=n(fr," forward method, overrides the "),zl=r(fr,"CODE",{});var o1=i(zl);CT=n(o1,"__call__"),o1.forEach(s),MT=n(fr," special method."),fr.forEach(s),PT=p(Ss),w(Da.$$.fragment,Ss),ST=p(Ss),Al=r(Ss,"P",{});var r1=i(Al);DT=n(r1,"Examples:"),r1.forEach(s),NT=p(Ss),w(cn.$$.fragment,Ss),Ss.forEach(s),ot.forEach(s),yd=p(a),aa=r(a,"H2",{class:!0});var hc=i(aa);Na=r(hc,"A",{id:!0,class:!0,href:!0});var i1=i(Na);Cl=r(i1,"SPAN",{});var l1=i(Cl);w(hn.$$.fragment,l1),l1.forEach(s),i1.forEach(s),QT=p(hc),Ml=r(hc,"SPAN",{});var p1=i(Ml);LT=n(p1,"TapasForSequenceClassification"),p1.forEach(s),hc.forEach(s),kd=p(a),Ze=r(a,"DIV",{class:!0});var Ds=i(Ze);w(un.$$.fragment,Ds),OT=p(Ds),Pl=r(Ds,"P",{});var d1=i(Pl);IT=n(d1,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),d1.forEach(s),WT=p(Ds),mn=r(Ds,"P",{});var uc=i(mn);UT=n(uc,"This model inherits from "),Xo=r(uc,"A",{href:!0});var c1=i(Xo);HT=n(c1,"PreTrainedModel"),c1.forEach(s),BT=n(uc,`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),uc.forEach(s),RT=p(Ds),gn=r(Ds,"P",{});var mc=i(gn);GT=n(mc,"This model is also a PyTorch "),fn=r(mc,"A",{href:!0,rel:!0});var h1=i(fn);VT=n(h1,"torch.nn.Module"),h1.forEach(s),KT=n(mc,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),mc.forEach(s),JT=p(Ds),os=r(Ds,"DIV",{class:!0});var Ns=i(os);w(_n.$$.fragment,Ns),YT=p(Ns),ta=r(Ns,"P",{});var _r=i(ta);XT=n(_r,"The "),Zo=r(_r,"A",{href:!0});var u1=i(Zo);ZT=n(u1,"TapasForSequenceClassification"),u1.forEach(s),eb=n(_r," forward method, overrides the "),Sl=r(_r,"CODE",{});var m1=i(Sl);sb=n(m1,"__call__"),m1.forEach(s),ab=n(_r," special method."),_r.forEach(s),tb=p(Ns),w(Qa.$$.fragment,Ns),nb=p(Ns),Dl=r(Ns,"P",{});var g1=i(Dl);ob=n(g1,"Examples:"),g1.forEach(s),rb=p(Ns),w(Tn.$$.fragment,Ns),Ns.forEach(s),Ds.forEach(s),jd=p(a),na=r(a,"H2",{class:!0});var gc=i(na);La=r(gc,"A",{id:!0,class:!0,href:!0});var f1=i(La);Nl=r(f1,"SPAN",{});var _1=i(Nl);w(bn.$$.fragment,_1),_1.forEach(s),f1.forEach(s),ib=p(gc),Ql=r(gc,"SPAN",{});var T1=i(Ql);lb=n(T1,"TapasForQuestionAnswering"),T1.forEach(s),gc.forEach(s),qd=p(a),es=r(a,"DIV",{class:!0});var Qs=i(es);w(wn.$$.fragment,Qs),pb=p(Qs),oa=r(Qs,"P",{});var Tr=i(oa);db=n(Tr,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),Ll=r(Tr,"EM",{});var b1=i(Ll);cb=n(b1,"logits"),b1.forEach(s),hb=n(Tr," and optional "),Ol=r(Tr,"EM",{});var w1=i(Ol);ub=n(w1,"logits_aggregation"),w1.forEach(s),mb=n(Tr,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),Tr.forEach(s),gb=p(Qs),vn=r(Qs,"P",{});var fc=i(vn);fb=n(fc,"This model inherits from "),er=r(fc,"A",{href:!0});var v1=i(er);_b=n(v1,"PreTrainedModel"),v1.forEach(s),Tb=n(fc,`. Check the superclass documentation for the generic
methods the library implements for all its models (such as downloading or saving, resizing the input embeddings,
pruning heads etc.)`),fc.forEach(s),bb=p(Qs),yn=r(Qs,"P",{});var _c=i(yn);wb=n(_c,"This model is also a PyTorch "),kn=r(_c,"A",{href:!0,rel:!0});var y1=i(kn);vb=n(y1,"torch.nn.Module"),y1.forEach(s),yb=n(_c,`
subclass. Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to
general usage and behavior.`),_c.forEach(s),kb=p(Qs),rs=r(Qs,"DIV",{class:!0});var Ls=i(rs);w(jn.$$.fragment,Ls),jb=p(Ls),ra=r(Ls,"P",{});var br=i(ra);qb=n(br,"The "),sr=r(br,"A",{href:!0});var k1=i(sr);xb=n(k1,"TapasForQuestionAnswering"),k1.forEach(s),Eb=n(br," forward method, overrides the "),Il=r(br,"CODE",{});var j1=i(Il);Fb=n(j1,"__call__"),j1.forEach(s),$b=n(br," special method."),br.forEach(s),zb=p(Ls),w(Oa.$$.fragment,Ls),Ab=p(Ls),Wl=r(Ls,"P",{});var q1=i(Wl);Cb=n(q1,"Examples:"),q1.forEach(s),Mb=p(Ls),w(qn.$$.fragment,Ls),Ls.forEach(s),Qs.forEach(s),xd=p(a),ia=r(a,"H2",{class:!0});var Tc=i(ia);Ia=r(Tc,"A",{id:!0,class:!0,href:!0});var x1=i(Ia);Ul=r(x1,"SPAN",{});var E1=i(Ul);w(xn.$$.fragment,E1),E1.forEach(s),x1.forEach(s),Pb=p(Tc),Hl=r(Tc,"SPAN",{});var F1=i(Hl);Sb=n(F1,"TFTapasModel"),F1.forEach(s),Tc.forEach(s),Ed=p(a),Ne=r(a,"DIV",{class:!0});var ks=i(Ne);w(En.$$.fragment,ks),Db=p(ks),Bl=r(ks,"P",{});var $1=i(Bl);Nb=n($1,"The bare Tapas Model transformer outputting raw hidden-states without any specific head on top."),$1.forEach(s),Qb=p(ks),Fn=r(ks,"P",{});var bc=i(Fn);Lb=n(bc,"This model inherits from "),ar=r(bc,"A",{href:!0});var z1=i(ar);Ob=n(z1,"TFPreTrainedModel"),z1.forEach(s),Ib=n(bc,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),bc.forEach(s),Wb=p(ks),$n=r(ks,"P",{});var wc=i($n);Ub=n(wc,"This model is also a "),zn=r(wc,"A",{href:!0,rel:!0});var A1=i(zn);Hb=n(A1,"tf.keras.Model"),A1.forEach(s),Bb=n(wc,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),wc.forEach(s),Rb=p(ks),w(Wa.$$.fragment,ks),Gb=p(ks),is=r(ks,"DIV",{class:!0});var Os=i(is);w(An.$$.fragment,Os),Vb=p(Os),la=r(Os,"P",{});var wr=i(la);Kb=n(wr,"The "),tr=r(wr,"A",{href:!0});var C1=i(tr);Jb=n(C1,"TFTapasModel"),C1.forEach(s),Yb=n(wr," forward method, overrides the "),Rl=r(wr,"CODE",{});var M1=i(Rl);Xb=n(M1,"__call__"),M1.forEach(s),Zb=n(wr," special method."),wr.forEach(s),ew=p(Os),w(Ua.$$.fragment,Os),sw=p(Os),Gl=r(Os,"P",{});var P1=i(Gl);aw=n(P1,"Example:"),P1.forEach(s),tw=p(Os),w(Cn.$$.fragment,Os),Os.forEach(s),ks.forEach(s),Fd=p(a),pa=r(a,"H2",{class:!0});var vc=i(pa);Ha=r(vc,"A",{id:!0,class:!0,href:!0});var S1=i(Ha);Vl=r(S1,"SPAN",{});var D1=i(Vl);w(Mn.$$.fragment,D1),D1.forEach(s),S1.forEach(s),nw=p(vc),Kl=r(vc,"SPAN",{});var N1=i(Kl);ow=n(N1,"TFTapasForMaskedLM"),N1.forEach(s),vc.forEach(s),$d=p(a),Qe=r(a,"DIV",{class:!0});var js=i(Qe);w(Pn.$$.fragment,js),rw=p(js),Sn=r(js,"P",{});var yc=i(Sn);iw=n(yc,"Tapas Model with a "),Jl=r(yc,"EM",{});var Q1=i(Jl);lw=n(Q1,"language modeling"),Q1.forEach(s),pw=n(yc," head on top."),yc.forEach(s),dw=p(js),Dn=r(js,"P",{});var kc=i(Dn);cw=n(kc,"This model inherits from "),nr=r(kc,"A",{href:!0});var L1=i(nr);hw=n(L1,"TFPreTrainedModel"),L1.forEach(s),uw=n(kc,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),kc.forEach(s),mw=p(js),Nn=r(js,"P",{});var jc=i(Nn);gw=n(jc,"This model is also a "),Qn=r(jc,"A",{href:!0,rel:!0});var O1=i(Qn);fw=n(O1,"tf.keras.Model"),O1.forEach(s),_w=n(jc,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),jc.forEach(s),Tw=p(js),w(Ba.$$.fragment,js),bw=p(js),ls=r(js,"DIV",{class:!0});var Is=i(ls);w(Ln.$$.fragment,Is),ww=p(Is),da=r(Is,"P",{});var vr=i(da);vw=n(vr,"The "),or=r(vr,"A",{href:!0});var I1=i(or);yw=n(I1,"TFTapasForMaskedLM"),I1.forEach(s),kw=n(vr," forward method, overrides the "),Yl=r(vr,"CODE",{});var W1=i(Yl);jw=n(W1,"__call__"),W1.forEach(s),qw=n(vr," special method."),vr.forEach(s),xw=p(Is),w(Ra.$$.fragment,Is),Ew=p(Is),Xl=r(Is,"P",{});var U1=i(Xl);Fw=n(U1,"Example:"),U1.forEach(s),$w=p(Is),w(On.$$.fragment,Is),Is.forEach(s),js.forEach(s),zd=p(a),ca=r(a,"H2",{class:!0});var qc=i(ca);Ga=r(qc,"A",{id:!0,class:!0,href:!0});var H1=i(Ga);Zl=r(H1,"SPAN",{});var B1=i(Zl);w(In.$$.fragment,B1),B1.forEach(s),H1.forEach(s),zw=p(qc),ep=r(qc,"SPAN",{});var R1=i(ep);Aw=n(R1,"TFTapasForSequenceClassification"),R1.forEach(s),qc.forEach(s),Ad=p(a),Le=r(a,"DIV",{class:!0});var qs=i(Le);w(Wn.$$.fragment,qs),Cw=p(qs),sp=r(qs,"P",{});var G1=i(sp);Mw=n(G1,`Tapas Model with a sequence classification head on top (a linear layer on top of the pooled output), e.g. for table
entailment tasks, such as TabFact (Chen et al., 2020).`),G1.forEach(s),Pw=p(qs),Un=r(qs,"P",{});var xc=i(Un);Sw=n(xc,"This model inherits from "),rr=r(xc,"A",{href:!0});var V1=i(rr);Dw=n(V1,"TFPreTrainedModel"),V1.forEach(s),Nw=n(xc,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),xc.forEach(s),Qw=p(qs),Hn=r(qs,"P",{});var Ec=i(Hn);Lw=n(Ec,"This model is also a "),Bn=r(Ec,"A",{href:!0,rel:!0});var K1=i(Bn);Ow=n(K1,"tf.keras.Model"),K1.forEach(s),Iw=n(Ec,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),Ec.forEach(s),Ww=p(qs),w(Va.$$.fragment,qs),Uw=p(qs),ps=r(qs,"DIV",{class:!0});var Ws=i(ps);w(Rn.$$.fragment,Ws),Hw=p(Ws),ha=r(Ws,"P",{});var yr=i(ha);Bw=n(yr,"The "),ir=r(yr,"A",{href:!0});var J1=i(ir);Rw=n(J1,"TFTapasForSequenceClassification"),J1.forEach(s),Gw=n(yr," forward method, overrides the "),ap=r(yr,"CODE",{});var Y1=i(ap);Vw=n(Y1,"__call__"),Y1.forEach(s),Kw=n(yr," special method."),yr.forEach(s),Jw=p(Ws),w(Ka.$$.fragment,Ws),Yw=p(Ws),tp=r(Ws,"P",{});var X1=i(tp);Xw=n(X1,"Example:"),X1.forEach(s),Zw=p(Ws),w(Gn.$$.fragment,Ws),Ws.forEach(s),qs.forEach(s),Cd=p(a),ua=r(a,"H2",{class:!0});var Fc=i(ua);Ja=r(Fc,"A",{id:!0,class:!0,href:!0});var Z1=i(Ja);np=r(Z1,"SPAN",{});var e0=i(np);w(Vn.$$.fragment,e0),e0.forEach(s),Z1.forEach(s),ev=p(Fc),op=r(Fc,"SPAN",{});var s0=i(op);sv=n(s0,"TFTapasForQuestionAnswering"),s0.forEach(s),Fc.forEach(s),Md=p(a),Oe=r(a,"DIV",{class:!0});var xs=i(Oe);w(Kn.$$.fragment,xs),av=p(xs),ma=r(xs,"P",{});var kr=i(ma);tv=n(kr,`Tapas Model with a cell selection head and optional aggregation head on top for question-answering tasks on tables
(linear layers on top of the hidden-states output to compute `),rp=r(kr,"EM",{});var a0=i(rp);nv=n(a0,"logits"),a0.forEach(s),ov=n(kr," and optional "),ip=r(kr,"EM",{});var t0=i(ip);rv=n(t0,"logits_aggregation"),t0.forEach(s),iv=n(kr,`), e.g. for
SQA, WTQ or WikiSQL-supervised tasks.`),kr.forEach(s),lv=p(xs),Jn=r(xs,"P",{});var $c=i(Jn);pv=n($c,"This model inherits from "),lr=r($c,"A",{href:!0});var n0=i(lr);dv=n(n0,"TFPreTrainedModel"),n0.forEach(s),cv=n($c,`. Check the superclass documentation for the
generic methods the library implements for all its model (such as downloading or saving, resizing the input
embeddings, pruning heads etc.)`),$c.forEach(s),hv=p(xs),Yn=r(xs,"P",{});var zc=i(Yn);uv=n(zc,"This model is also a "),Xn=r(zc,"A",{href:!0,rel:!0});var o0=i(Xn);mv=n(o0,"tf.keras.Model"),o0.forEach(s),gv=n(zc,` subclass. Use
it as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage
and behavior.`),zc.forEach(s),fv=p(xs),w(Ya.$$.fragment,xs),_v=p(xs),ds=r(xs,"DIV",{class:!0});var Us=i(ds);w(Zn.$$.fragment,Us),Tv=p(Us),ga=r(Us,"P",{});var jr=i(ga);bv=n(jr,"The "),pr=r(jr,"A",{href:!0});var r0=i(pr);wv=n(r0,"TFTapasForQuestionAnswering"),r0.forEach(s),vv=n(jr," forward method, overrides the "),lp=r(jr,"CODE",{});var i0=i(lp);yv=n(i0,"__call__"),i0.forEach(s),kv=n(jr," special method."),jr.forEach(s),jv=p(Us),w(Xa.$$.fragment,Us),qv=p(Us),pp=r(Us,"P",{});var l0=i(pp);xv=n(l0,"Example:"),l0.forEach(s),Ev=p(Us),w(eo.$$.fragment,Us),Us.forEach(s),xs.forEach(s),this.h()},h(){d(m,"name","hf:doc:metadata"),d(m,"content",JSON.stringify(E0)),d(f,"id","tapas"),d(f,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(f,"href","#tapas"),d(g,"class","relative group"),d(X,"id","overview"),d(X,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(X,"href","#overview"),d(S,"class","relative group"),d(z,"href","https://www.aclweb.org/anthology/2020.acl-main.398"),d(z,"rel","nofollow"),d(L,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),d(L,"rel","nofollow"),d(O,"href","https://github.com/ppasupat/WikiTableQuestions"),d(O,"rel","nofollow"),d(A,"href","https://github.com/salesforce/WikiSQL"),d(A,"rel","nofollow"),d(ze,"href","https://github.com/wenhuchen/Table-Fact-Checking"),d(ze,"rel","nofollow"),d(Ae,"href","https://www.aclweb.org/anthology/2020.findings-emnlp.27/"),d(Ae,"rel","nofollow"),d(U,"href","https://huggingface.co/nielsr"),d(U,"rel","nofollow"),d(ne,"href","https://huggingface.co/kamalkraj"),d(ne,"rel","nofollow"),d(rt,"href","https://github.com/google-research/tapas"),d(rt,"rel","nofollow"),d(no,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig"),d(it,"href","https://huggingface.co/models?search=tapas"),d(it,"rel","nofollow"),d(lt,"href","https://github.com/google-research/tapas"),d(lt,"rel","nofollow"),d(fa,"id","usage-finetuning"),d(fa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(fa,"href","#usage-finetuning"),d(Bs,"class","relative group"),d(oo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(io,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(ht,"href","https://github.com/rusty1s/pytorch_scatter"),d(ht,"rel","nofollow"),d(mt,"href","https://github.com/tensorflow/probability"),d(mt,"rel","nofollow"),d(co,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasConfig"),d(ho,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(Tt,"href","https://github.com/google-research/tapas/issues/91#issuecomment-735719340"),d(Tt,"rel","nofollow"),d(bt,"href","https://huggingface.co/models?search=tapas"),d(bt,"rel","nofollow"),d(wt,"href","https://www.microsoft.com/en-us/download/details.aspx?id=54253"),d(wt,"rel","nofollow"),d(vt,"href","https://github.com/google-research/tapas/issues/50#issuecomment-705465960"),d(vt,"rel","nofollow"),d(qo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),d(xo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(Eo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),d(Fo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),d($o,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),d(Ao,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),d(qt,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),d(qt,"rel","nofollow"),d(xt,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),d(xt,"rel","nofollow"),d(Mo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(Po,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),d(Ea,"id","usage-inference"),d(Ea,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ea,"href","#usage-inference"),d(Rs,"class","relative group"),d(So,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(Do,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),d(No,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),d(Ct,"href","https://github.com/NielsRogge/Transformers-Tutorials/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),d(Ct,"rel","nofollow"),d(Mt,"href","https://github.com/kamalkraj/Tapas-Tutorial/blob/master/TAPAS/Fine_tuning_TapasForQuestionAnswering_on_SQA.ipynb"),d(Mt,"rel","nofollow"),d($a,"id","transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),d($a,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d($a,"href","#transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput"),d(Gs,"class","relative group"),d(Lo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(Vs,"class","docstring"),d(za,"id","transformers.TapasConfig"),d(za,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(za,"href","#transformers.TapasConfig"),d(Ks,"class","relative group"),d(Oo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasModel"),d(Io,"href","/docs/transformers/master/en/main_classes/configuration#transformers.PretrainedConfig"),d(Ot,"href","https://github.com/google-research/tapas/tree/master"),d(Ot,"rel","nofollow"),d(Xe,"class","docstring"),d(Aa,"id","transformers.TapasTokenizer"),d(Aa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Aa,"href","#transformers.TapasTokenizer"),d(Js,"class","relative group"),d(Wo,"href","/docs/transformers/master/en/main_classes/tokenizer#transformers.PreTrainedTokenizer"),d(Uo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),d(Bo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasTokenizer"),d(Ca,"class","docstring"),d(Ro,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(Vt,"href","https://github.com/google-research/tapas/blob/4908213eb4df7aa988573350278b44c4dbe3f71b/tapas/experiments/prediction_utils.py#L288"),d(Vt,"rel","nofollow"),d(zs,"class","docstring"),d(yl,"class","docstring"),d(he,"class","docstring"),d(Ma,"id","transformers.TapasModel"),d(Ma,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ma,"href","#transformers.TapasModel"),d(Ys,"class","relative group"),d(Go,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(Zt,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(Zt,"rel","nofollow"),d(Vo,"href","/docs/transformers/master/en/model_doc/bert#transformers.BertModel"),d(an,"href","https://arxiv.org/abs/1706.03762"),d(an,"rel","nofollow"),d(Ko,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasModel"),d(ts,"class","docstring"),d(De,"class","docstring"),d(Sa,"id","transformers.TapasForMaskedLM"),d(Sa,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Sa,"href","#transformers.TapasForMaskedLM"),d(Zs,"class","relative group"),d(Jo,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(pn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(pn,"rel","nofollow"),d(Yo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForMaskedLM"),d(ns,"class","docstring"),d(gs,"class","docstring"),d(Na,"id","transformers.TapasForSequenceClassification"),d(Na,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Na,"href","#transformers.TapasForSequenceClassification"),d(aa,"class","relative group"),d(Xo,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(fn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(fn,"rel","nofollow"),d(Zo,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForSequenceClassification"),d(os,"class","docstring"),d(Ze,"class","docstring"),d(La,"id","transformers.TapasForQuestionAnswering"),d(La,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(La,"href","#transformers.TapasForQuestionAnswering"),d(na,"class","relative group"),d(er,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),d(kn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),d(kn,"rel","nofollow"),d(sr,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TapasForQuestionAnswering"),d(rs,"class","docstring"),d(es,"class","docstring"),d(Ia,"id","transformers.TFTapasModel"),d(Ia,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ia,"href","#transformers.TFTapasModel"),d(ia,"class","relative group"),d(ar,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),d(zn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(zn,"rel","nofollow"),d(tr,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TFTapasModel"),d(is,"class","docstring"),d(Ne,"class","docstring"),d(Ha,"id","transformers.TFTapasForMaskedLM"),d(Ha,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ha,"href","#transformers.TFTapasForMaskedLM"),d(pa,"class","relative group"),d(nr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),d(Qn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Qn,"rel","nofollow"),d(or,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TFTapasForMaskedLM"),d(ls,"class","docstring"),d(Qe,"class","docstring"),d(Ga,"id","transformers.TFTapasForSequenceClassification"),d(Ga,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ga,"href","#transformers.TFTapasForSequenceClassification"),d(ca,"class","relative group"),d(rr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),d(Bn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Bn,"rel","nofollow"),d(ir,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TFTapasForSequenceClassification"),d(ps,"class","docstring"),d(Le,"class","docstring"),d(Ja,"id","transformers.TFTapasForQuestionAnswering"),d(Ja,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),d(Ja,"href","#transformers.TFTapasForQuestionAnswering"),d(ua,"class","relative group"),d(lr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),d(Xn,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),d(Xn,"rel","nofollow"),d(pr,"href","/docs/transformers/master/en/model_doc/tapas#transformers.TFTapasForQuestionAnswering"),d(ds,"class","docstring"),d(Oe,"class","docstring")},m(a,h){e(document.head,m),c(a,x,h),c(a,g,h),e(g,f),e(f,q),v(T,q,null),e(g,_),e(g,F),e(F,ve),c(a,Y,h),v($,a,h),c(a,me,h),c(a,S,h),e(S,X),e(X,pe),v(Q,pe,null),e(S,ye),e(S,de),e(de,se),c(a,N,h),c(a,H,h),e(H,ae),e(H,z),e(z,M),e(H,ke),e(H,L),e(L,je),e(H,qe),e(H,O),e(O,xe),e(H,Ee),e(H,A),e(A,Fe),e(H,K),c(a,ge,h),c(a,re,h),e(re,J),c(a,fe,h),c(a,ie,h),e(ie,D),e(D,$e),c(a,R,h),c(a,G,h),e(G,u),e(G,E),e(E,te),e(G,Be),e(G,ze),e(ze,I),e(G,Re),e(G,Ae),e(Ae,Ge),e(G,W),c(a,V,h),c(a,Z,h),e(Z,Ve),e(Z,U),e(U,Ke),e(Z,Je),e(Z,ne),e(ne,Ye),e(Z,Ac),e(Z,rt),e(rt,Cc),e(Z,Mc),c(a,wp,h),c(a,to,h),e(to,Pc),c(a,vp,h),c(a,Ts,h),e(Ts,Pe),e(Pe,Sc),e(Pe,qr),e(qr,Dc),e(Pe,Nc),e(Pe,no),e(no,Qc),e(Pe,Lc),e(Pe,xr),e(xr,Oc),e(Pe,Ic),e(Pe,it),e(it,Wc),e(Pe,Uc),e(Pe,Er),e(Er,Hc),e(Pe,Bc),e(Pe,Fr),e(Fr,Rc),e(Pe,Gc),e(Ts,Vc),e(Ts,Es),e(Es,Kc),e(Es,$r),e($r,Jc),e(Es,Yc),e(Es,zr),e(zr,Xc),e(Es,Zc),e(Es,lt),e(lt,eh),e(Es,sh),e(Ts,ah),e(Ts,Hs),e(Hs,th),e(Hs,Ar),e(Ar,nh),e(Hs,oh),e(Hs,Cr),e(Cr,rh),e(Hs,ih),e(Ts,lh),e(Ts,Mr),e(Mr,ph),c(a,yp,h),c(a,Bs,h),e(Bs,fa),e(fa,Pr),v(pt,Pr,null),e(Bs,dh),e(Bs,Sr),e(Sr,ch),c(a,kp,h),c(a,_a,h),e(_a,hh),e(_a,oo),e(oo,uh),e(_a,mh),c(a,jp,h),c(a,ro,h),e(ro,Dr),e(Dr,gh),c(a,qp,h),c(a,Ta,h),e(Ta,fh),e(Ta,io),e(io,_h),e(Ta,Th),c(a,xp,h),c(a,Fs,h),e(Fs,Nr),e(Nr,bh),e(Fs,wh),e(Fs,dt),e(dt,vh),e(dt,Qr),e(Qr,yh),e(dt,kh),e(Fs,jh),e(Fs,ct),e(ct,qh),e(ct,Lr),e(Lr,xh),e(ct,Eh),c(a,Ep,h),c(a,lo,h),e(lo,Fh),c(a,Fp,h),c(a,bs,h),e(bs,$h),e(bs,Or),e(Or,zh),e(bs,Ah),e(bs,Ir),e(Ir,Ch),e(bs,Mh),e(bs,Wr),e(Wr,Ph),e(bs,Sh),c(a,$p,h),c(a,ba,h),e(ba,Dh),e(ba,ht),e(ht,Nh),e(ba,Qh),c(a,zp,h),v(ut,a,h),c(a,Ap,h),c(a,wa,h),e(wa,Lh),e(wa,po),e(po,Oh),e(po,mt),e(mt,Ih),e(wa,Wh),c(a,Cp,h),v(gt,a,h),c(a,Mp,h),c(a,$s,h),e($s,Uh),e($s,co),e(co,Hh),e($s,Bh),e($s,ho),e(ho,Rh),e($s,Gh),c(a,Pp,h),v(ft,a,h),c(a,Sp,h),c(a,uo,h),e(uo,Vh),c(a,Dp,h),v(_t,a,h),c(a,Np,h),c(a,va,h),e(va,Kh),e(va,Tt),e(Tt,Jh),e(va,Yh),c(a,Qp,h),c(a,ya,h),e(ya,Xh),e(ya,bt),e(bt,Zh),e(ya,eu),c(a,Lp,h),c(a,mo,h),e(mo,Ur),e(Ur,su),c(a,Op,h),c(a,ka,h),e(ka,au),e(ka,wt),e(wt,tu),e(ka,nu),c(a,Ip,h),c(a,le,h),e(le,go),e(go,Hr),e(Hr,ou),e(go,ru),e(le,iu),e(le,fo),e(fo,Br),e(Br,lu),e(fo,pu),e(le,du),e(le,_o),e(_o,Rr),e(Rr,cu),e(_o,hu),e(le,uu),e(le,To),e(To,Gr),e(Gr,mu),e(To,gu),e(le,fu),e(le,bo),e(bo,Vr),e(Vr,_u),e(bo,Tu),e(le,bu),e(le,wo),e(wo,Kr),e(Kr,wu),e(wo,vu),e(le,yu),e(le,vo),e(vo,Jr),e(Jr,ku),e(vo,ju),e(le,qu),e(le,yo),e(yo,Yr),e(Yr,xu),e(yo,Eu),e(le,Fu),e(le,ko),e(ko,Xr),e(Xr,$u),e(ko,zu),c(a,Wp,h),c(a,as,h),e(as,Au),e(as,vt),e(vt,Cu),e(as,Mu),e(as,Zr),e(Zr,Pu),e(as,Su),e(as,ei),e(ei,Du),e(as,Nu),e(as,si),e(si,Qu),e(as,Lu),c(a,Up,h),c(a,jo,h),e(jo,ai),e(ai,Ou),c(a,Hp,h),c(a,Ce,h),e(Ce,Iu),e(Ce,qo),e(qo,Wu),e(Ce,Uu),e(Ce,ti),e(ti,Hu),e(Ce,Bu),e(Ce,ni),e(ni,Ru),e(Ce,Gu),e(Ce,oi),e(oi,Vu),e(Ce,Ku),e(Ce,xo),e(xo,Ju),e(Ce,Yu),e(Ce,Eo),e(Eo,Xu),e(Ce,Zu),c(a,Bp,h),c(a,C,h),e(C,em),e(C,ri),e(ri,sm),e(C,am),e(C,ii),e(ii,tm),e(C,nm),e(C,li),e(li,om),e(C,rm),e(C,pi),e(pi,im),e(C,lm),e(C,di),e(di,pm),e(C,dm),e(C,ci),e(ci,cm),e(C,hm),e(C,hi),e(hi,um),e(C,mm),e(C,ui),e(ui,gm),e(C,fm),e(C,mi),e(mi,_m),e(C,Tm),e(C,gi),e(gi,bm),e(C,wm),e(C,fi),e(fi,vm),e(C,ym),e(C,_i),e(_i,km),e(C,jm),e(C,Ti),e(Ti,qm),e(C,xm),e(C,bi),e(bi,Em),e(C,Fm),e(C,wi),e(wi,$m),e(C,zm),e(C,vi),e(vi,Am),e(C,Cm),e(C,yi),e(yi,Mm),e(C,Pm),e(C,ki),e(ki,Sm),e(C,Dm),c(a,Rp,h),c(a,ce,h),e(ce,Fo),e(Fo,Nm),e(ce,Qm),e(ce,ji),e(ji,Lm),e(ce,Om),e(ce,qi),e(qi,Im),e(ce,Wm),e(ce,xi),e(xi,Um),e(ce,Hm),e(ce,Ei),e(Ei,Bm),e(ce,Rm),e(ce,Fi),e(Fi,Gm),e(ce,Vm),e(ce,$i),e($i,Km),e(ce,Jm),e(ce,zi),e(zi,Ym),e(ce,Xm),c(a,Gp,h),v(yt,a,h),c(a,Vp,h),c(a,ja,h),e(ja,Zm),e(ja,Ai),e(Ai,eg),e(ja,sg),c(a,Kp,h),c(a,ws,h),e(ws,ag),e(ws,$o),e($o,tg),e(ws,ng),e(ws,Ci),e(Ci,og),e(ws,rg),e(ws,Mi),e(Mi,ig),e(ws,lg),c(a,Jp,h),v(kt,a,h),c(a,Yp,h),c(a,zo,h),e(zo,pg),c(a,Xp,h),v(jt,a,h),c(a,Zp,h),c(a,ee,h),e(ee,dg),e(ee,Pi),e(Pi,cg),e(ee,hg),e(ee,Si),e(Si,ug),e(ee,mg),e(ee,Di),e(Di,gg),e(ee,fg),e(ee,Ni),e(Ni,_g),e(ee,Tg),e(ee,Qi),e(Qi,bg),e(ee,wg),e(ee,Li),e(Li,vg),e(ee,yg),e(ee,Ao),e(Ao,kg),e(ee,jg),e(ee,qt),e(qt,qg),e(ee,xg),e(ee,xt),e(xt,Eg),e(ee,Fg),c(a,ed,h),c(a,Co,h),e(Co,Oi),e(Oi,$g),c(a,sd,h),c(a,qa,h),e(qa,zg),e(qa,Mo),e(Mo,Ag),e(qa,Cg),c(a,ad,h),v(Et,a,h),c(a,td,h),c(a,xa,h),e(xa,Mg),e(xa,Po),e(Po,Pg),e(xa,Sg),c(a,nd,h),v(Ft,a,h),c(a,od,h),c(a,Rs,h),e(Rs,Ea),e(Ea,Ii),v($t,Ii,null),e(Rs,Dg),e(Rs,Wi),e(Wi,Ng),c(a,rd,h),c(a,_e,h),e(_e,Qg),e(_e,So),e(So,Lg),e(_e,Og),e(_e,Ui),e(Ui,Ig),e(_e,Wg),e(_e,Hi),e(Hi,Ug),e(_e,Hg),e(_e,Bi),e(Bi,Bg),e(_e,Rg),e(_e,Do),e(Do,Gg),e(_e,Vg),e(_e,Ri),e(Ri,Kg),e(_e,Jg),e(_e,No),e(No,Yg),e(_e,Xg),c(a,id,h),c(a,Fa,h),e(Fa,Zg),e(Fa,Gi),e(Gi,ef),e(Fa,sf),c(a,ld,h),v(zt,a,h),c(a,pd,h),c(a,Qo,h),e(Qo,af),c(a,dd,h),v(At,a,h),c(a,cd,h),c(a,We,h),e(We,tf),e(We,Vi),e(Vi,nf),e(We,of),e(We,Ki),e(Ki,rf),e(We,lf),e(We,Ji),e(Ji,pf),e(We,df),e(We,Ct),e(Ct,cf),e(We,hf),e(We,Mt),e(Mt,uf),e(We,mf),c(a,hd,h),c(a,Gs,h),e(Gs,$a),e($a,Yi),v(Pt,Yi,null),e(Gs,gf),e(Gs,Xi),e(Xi,ff),c(a,ud,h),c(a,Vs,h),v(St,Vs,null),e(Vs,_f),e(Vs,Dt),e(Dt,Tf),e(Dt,Lo),e(Lo,bf),e(Dt,wf),c(a,md,h),c(a,Ks,h),e(Ks,za),e(za,Zi),v(Nt,Zi,null),e(Ks,vf),e(Ks,el),e(el,yf),c(a,gd,h),c(a,Xe,h),v(Qt,Xe,null),e(Xe,kf),e(Xe,ms),e(ms,jf),e(ms,Oo),e(Oo,qf),e(ms,xf),e(ms,sl),e(sl,Ef),e(ms,Ff),e(ms,al),e(al,$f),e(ms,zf),e(ms,Io),e(Io,Af),e(ms,Cf),e(Xe,Mf),e(Xe,Lt),e(Lt,Pf),e(Lt,Ot),e(Ot,Sf),e(Lt,Df),e(Xe,Nf),e(Xe,tl),e(tl,Qf),e(Xe,Lf),v(It,Xe,null),c(a,fd,h),c(a,Js,h),e(Js,Aa),e(Aa,nl),v(Wt,nl,null),e(Js,Of),e(Js,ol),e(ol,If),c(a,_d,h),c(a,he,h),v(Ut,he,null),e(he,Wf),e(he,rl),e(rl,Uf),e(he,Hf),e(he,oe),e(oe,Bf),e(oe,Wo),e(Wo,Rf),e(oe,Gf),e(oe,Uo),e(Uo,Vf),e(oe,Kf),e(oe,il),e(il,Jf),e(oe,Yf),e(oe,ll),e(ll,Xf),e(oe,Zf),e(oe,pl),e(pl,e_),e(oe,s_),e(oe,dl),e(dl,a_),e(oe,t_),e(oe,cl),e(cl,n_),e(oe,o_),e(oe,hl),e(hl,r_),e(oe,i_),e(oe,ul),e(ul,l_),e(oe,p_),e(he,d_),e(he,Se),e(Se,ml),e(ml,c_),e(Se,h_),e(Se,gl),e(gl,u_),e(Se,m_),e(Se,fl),e(fl,g_),e(Se,f_),e(Se,_l),e(_l,__),e(Se,T_),e(Se,Tl),e(Tl,b_),e(Se,w_),e(Se,bl),e(bl,v_),e(Se,y_),e(Se,wl),e(wl,k_),e(he,j_),e(he,Ho),e(Ho,Bo),e(Bo,q_),e(Ho,x_),e(he,E_),e(he,Ca),v(Ht,Ca,null),e(Ca,F_),e(Ca,vl),e(vl,$_),e(he,z_),e(he,zs),v(Bt,zs,null),e(zs,A_),e(zs,Rt),e(Rt,C_),e(Rt,Ro),e(Ro,M_),e(Rt,P_),e(zs,S_),e(zs,Gt),e(Gt,D_),e(Gt,Vt),e(Vt,N_),e(Gt,Q_),e(he,L_),e(he,yl),c(a,Td,h),c(a,Ys,h),e(Ys,Ma),e(Ma,kl),v(Kt,kl,null),e(Ys,O_),e(Ys,jl),e(jl,I_),c(a,bd,h),c(a,De,h),v(Jt,De,null),e(De,W_),e(De,Yt),e(Yt,U_),e(Yt,Go),e(Go,H_),e(Yt,B_),e(De,R_),e(De,Xt),e(Xt,G_),e(Xt,Zt),e(Zt,V_),e(Xt,K_),e(De,J_),e(De,en),e(en,Y_),e(en,Vo),e(Vo,X_),e(en,Z_),e(De,eT),e(De,sn),e(sn,sT),e(sn,an),e(an,aT),e(sn,tT),e(De,nT),e(De,ts),v(tn,ts,null),e(ts,oT),e(ts,Xs),e(Xs,rT),e(Xs,Ko),e(Ko,iT),e(Xs,lT),e(Xs,ql),e(ql,pT),e(Xs,dT),e(ts,cT),v(Pa,ts,null),e(ts,hT),e(ts,xl),e(xl,uT),e(ts,mT),v(nn,ts,null),c(a,wd,h),c(a,Zs,h),e(Zs,Sa),e(Sa,El),v(on,El,null),e(Zs,gT),e(Zs,Fl),e(Fl,fT),c(a,vd,h),c(a,gs,h),v(rn,gs,null),e(gs,_T),e(gs,ea),e(ea,TT),e(ea,$l),e($l,bT),e(ea,wT),e(ea,Jo),e(Jo,vT),e(ea,yT),e(gs,kT),e(gs,ln),e(ln,jT),e(ln,pn),e(pn,qT),e(ln,xT),e(gs,ET),e(gs,ns),v(dn,ns,null),e(ns,FT),e(ns,sa),e(sa,$T),e(sa,Yo),e(Yo,zT),e(sa,AT),e(sa,zl),e(zl,CT),e(sa,MT),e(ns,PT),v(Da,ns,null),e(ns,ST),e(ns,Al),e(Al,DT),e(ns,NT),v(cn,ns,null),c(a,yd,h),c(a,aa,h),e(aa,Na),e(Na,Cl),v(hn,Cl,null),e(aa,QT),e(aa,Ml),e(Ml,LT),c(a,kd,h),c(a,Ze,h),v(un,Ze,null),e(Ze,OT),e(Ze,Pl),e(Pl,IT),e(Ze,WT),e(Ze,mn),e(mn,UT),e(mn,Xo),e(Xo,HT),e(mn,BT),e(Ze,RT),e(Ze,gn),e(gn,GT),e(gn,fn),e(fn,VT),e(gn,KT),e(Ze,JT),e(Ze,os),v(_n,os,null),e(os,YT),e(os,ta),e(ta,XT),e(ta,Zo),e(Zo,ZT),e(ta,eb),e(ta,Sl),e(Sl,sb),e(ta,ab),e(os,tb),v(Qa,os,null),e(os,nb),e(os,Dl),e(Dl,ob),e(os,rb),v(Tn,os,null),c(a,jd,h),c(a,na,h),e(na,La),e(La,Nl),v(bn,Nl,null),e(na,ib),e(na,Ql),e(Ql,lb),c(a,qd,h),c(a,es,h),v(wn,es,null),e(es,pb),e(es,oa),e(oa,db),e(oa,Ll),e(Ll,cb),e(oa,hb),e(oa,Ol),e(Ol,ub),e(oa,mb),e(es,gb),e(es,vn),e(vn,fb),e(vn,er),e(er,_b),e(vn,Tb),e(es,bb),e(es,yn),e(yn,wb),e(yn,kn),e(kn,vb),e(yn,yb),e(es,kb),e(es,rs),v(jn,rs,null),e(rs,jb),e(rs,ra),e(ra,qb),e(ra,sr),e(sr,xb),e(ra,Eb),e(ra,Il),e(Il,Fb),e(ra,$b),e(rs,zb),v(Oa,rs,null),e(rs,Ab),e(rs,Wl),e(Wl,Cb),e(rs,Mb),v(qn,rs,null),c(a,xd,h),c(a,ia,h),e(ia,Ia),e(Ia,Ul),v(xn,Ul,null),e(ia,Pb),e(ia,Hl),e(Hl,Sb),c(a,Ed,h),c(a,Ne,h),v(En,Ne,null),e(Ne,Db),e(Ne,Bl),e(Bl,Nb),e(Ne,Qb),e(Ne,Fn),e(Fn,Lb),e(Fn,ar),e(ar,Ob),e(Fn,Ib),e(Ne,Wb),e(Ne,$n),e($n,Ub),e($n,zn),e(zn,Hb),e($n,Bb),e(Ne,Rb),v(Wa,Ne,null),e(Ne,Gb),e(Ne,is),v(An,is,null),e(is,Vb),e(is,la),e(la,Kb),e(la,tr),e(tr,Jb),e(la,Yb),e(la,Rl),e(Rl,Xb),e(la,Zb),e(is,ew),v(Ua,is,null),e(is,sw),e(is,Gl),e(Gl,aw),e(is,tw),v(Cn,is,null),c(a,Fd,h),c(a,pa,h),e(pa,Ha),e(Ha,Vl),v(Mn,Vl,null),e(pa,nw),e(pa,Kl),e(Kl,ow),c(a,$d,h),c(a,Qe,h),v(Pn,Qe,null),e(Qe,rw),e(Qe,Sn),e(Sn,iw),e(Sn,Jl),e(Jl,lw),e(Sn,pw),e(Qe,dw),e(Qe,Dn),e(Dn,cw),e(Dn,nr),e(nr,hw),e(Dn,uw),e(Qe,mw),e(Qe,Nn),e(Nn,gw),e(Nn,Qn),e(Qn,fw),e(Nn,_w),e(Qe,Tw),v(Ba,Qe,null),e(Qe,bw),e(Qe,ls),v(Ln,ls,null),e(ls,ww),e(ls,da),e(da,vw),e(da,or),e(or,yw),e(da,kw),e(da,Yl),e(Yl,jw),e(da,qw),e(ls,xw),v(Ra,ls,null),e(ls,Ew),e(ls,Xl),e(Xl,Fw),e(ls,$w),v(On,ls,null),c(a,zd,h),c(a,ca,h),e(ca,Ga),e(Ga,Zl),v(In,Zl,null),e(ca,zw),e(ca,ep),e(ep,Aw),c(a,Ad,h),c(a,Le,h),v(Wn,Le,null),e(Le,Cw),e(Le,sp),e(sp,Mw),e(Le,Pw),e(Le,Un),e(Un,Sw),e(Un,rr),e(rr,Dw),e(Un,Nw),e(Le,Qw),e(Le,Hn),e(Hn,Lw),e(Hn,Bn),e(Bn,Ow),e(Hn,Iw),e(Le,Ww),v(Va,Le,null),e(Le,Uw),e(Le,ps),v(Rn,ps,null),e(ps,Hw),e(ps,ha),e(ha,Bw),e(ha,ir),e(ir,Rw),e(ha,Gw),e(ha,ap),e(ap,Vw),e(ha,Kw),e(ps,Jw),v(Ka,ps,null),e(ps,Yw),e(ps,tp),e(tp,Xw),e(ps,Zw),v(Gn,ps,null),c(a,Cd,h),c(a,ua,h),e(ua,Ja),e(Ja,np),v(Vn,np,null),e(ua,ev),e(ua,op),e(op,sv),c(a,Md,h),c(a,Oe,h),v(Kn,Oe,null),e(Oe,av),e(Oe,ma),e(ma,tv),e(ma,rp),e(rp,nv),e(ma,ov),e(ma,ip),e(ip,rv),e(ma,iv),e(Oe,lv),e(Oe,Jn),e(Jn,pv),e(Jn,lr),e(lr,dv),e(Jn,cv),e(Oe,hv),e(Oe,Yn),e(Yn,uv),e(Yn,Xn),e(Xn,mv),e(Yn,gv),e(Oe,fv),v(Ya,Oe,null),e(Oe,_v),e(Oe,ds),v(Zn,ds,null),e(ds,Tv),e(ds,ga),e(ga,bv),e(ga,pr),e(pr,wv),e(ga,vv),e(ga,lp),e(lp,yv),e(ga,kv),e(ds,jv),v(Xa,ds,null),e(ds,qv),e(ds,pp),e(pp,xv),e(ds,Ev),v(eo,ds,null),Pd=!0},p(a,[h]){const so={};h&2&&(so.$$scope={dirty:h,ctx:a}),$.$set(so);const dp={};h&2&&(dp.$$scope={dirty:h,ctx:a}),Pa.$set(dp);const cp={};h&2&&(cp.$$scope={dirty:h,ctx:a}),Da.$set(cp);const hp={};h&2&&(hp.$$scope={dirty:h,ctx:a}),Qa.$set(hp);const ao={};h&2&&(ao.$$scope={dirty:h,ctx:a}),Oa.$set(ao);const up={};h&2&&(up.$$scope={dirty:h,ctx:a}),Wa.$set(up);const mp={};h&2&&(mp.$$scope={dirty:h,ctx:a}),Ua.$set(mp);const gp={};h&2&&(gp.$$scope={dirty:h,ctx:a}),Ba.$set(gp);const fs={};h&2&&(fs.$$scope={dirty:h,ctx:a}),Ra.$set(fs);const fp={};h&2&&(fp.$$scope={dirty:h,ctx:a}),Va.$set(fp);const _p={};h&2&&(_p.$$scope={dirty:h,ctx:a}),Ka.$set(_p);const Tp={};h&2&&(Tp.$$scope={dirty:h,ctx:a}),Ya.$set(Tp);const bp={};h&2&&(bp.$$scope={dirty:h,ctx:a}),Xa.$set(bp)},i(a){Pd||(y(T.$$.fragment,a),y($.$$.fragment,a),y(Q.$$.fragment,a),y(pt.$$.fragment,a),y(ut.$$.fragment,a),y(gt.$$.fragment,a),y(ft.$$.fragment,a),y(_t.$$.fragment,a),y(yt.$$.fragment,a),y(kt.$$.fragment,a),y(jt.$$.fragment,a),y(Et.$$.fragment,a),y(Ft.$$.fragment,a),y($t.$$.fragment,a),y(zt.$$.fragment,a),y(At.$$.fragment,a),y(Pt.$$.fragment,a),y(St.$$.fragment,a),y(Nt.$$.fragment,a),y(Qt.$$.fragment,a),y(It.$$.fragment,a),y(Wt.$$.fragment,a),y(Ut.$$.fragment,a),y(Ht.$$.fragment,a),y(Bt.$$.fragment,a),y(Kt.$$.fragment,a),y(Jt.$$.fragment,a),y(tn.$$.fragment,a),y(Pa.$$.fragment,a),y(nn.$$.fragment,a),y(on.$$.fragment,a),y(rn.$$.fragment,a),y(dn.$$.fragment,a),y(Da.$$.fragment,a),y(cn.$$.fragment,a),y(hn.$$.fragment,a),y(un.$$.fragment,a),y(_n.$$.fragment,a),y(Qa.$$.fragment,a),y(Tn.$$.fragment,a),y(bn.$$.fragment,a),y(wn.$$.fragment,a),y(jn.$$.fragment,a),y(Oa.$$.fragment,a),y(qn.$$.fragment,a),y(xn.$$.fragment,a),y(En.$$.fragment,a),y(Wa.$$.fragment,a),y(An.$$.fragment,a),y(Ua.$$.fragment,a),y(Cn.$$.fragment,a),y(Mn.$$.fragment,a),y(Pn.$$.fragment,a),y(Ba.$$.fragment,a),y(Ln.$$.fragment,a),y(Ra.$$.fragment,a),y(On.$$.fragment,a),y(In.$$.fragment,a),y(Wn.$$.fragment,a),y(Va.$$.fragment,a),y(Rn.$$.fragment,a),y(Ka.$$.fragment,a),y(Gn.$$.fragment,a),y(Vn.$$.fragment,a),y(Kn.$$.fragment,a),y(Ya.$$.fragment,a),y(Zn.$$.fragment,a),y(Xa.$$.fragment,a),y(eo.$$.fragment,a),Pd=!0)},o(a){k(T.$$.fragment,a),k($.$$.fragment,a),k(Q.$$.fragment,a),k(pt.$$.fragment,a),k(ut.$$.fragment,a),k(gt.$$.fragment,a),k(ft.$$.fragment,a),k(_t.$$.fragment,a),k(yt.$$.fragment,a),k(kt.$$.fragment,a),k(jt.$$.fragment,a),k(Et.$$.fragment,a),k(Ft.$$.fragment,a),k($t.$$.fragment,a),k(zt.$$.fragment,a),k(At.$$.fragment,a),k(Pt.$$.fragment,a),k(St.$$.fragment,a),k(Nt.$$.fragment,a),k(Qt.$$.fragment,a),k(It.$$.fragment,a),k(Wt.$$.fragment,a),k(Ut.$$.fragment,a),k(Ht.$$.fragment,a),k(Bt.$$.fragment,a),k(Kt.$$.fragment,a),k(Jt.$$.fragment,a),k(tn.$$.fragment,a),k(Pa.$$.fragment,a),k(nn.$$.fragment,a),k(on.$$.fragment,a),k(rn.$$.fragment,a),k(dn.$$.fragment,a),k(Da.$$.fragment,a),k(cn.$$.fragment,a),k(hn.$$.fragment,a),k(un.$$.fragment,a),k(_n.$$.fragment,a),k(Qa.$$.fragment,a),k(Tn.$$.fragment,a),k(bn.$$.fragment,a),k(wn.$$.fragment,a),k(jn.$$.fragment,a),k(Oa.$$.fragment,a),k(qn.$$.fragment,a),k(xn.$$.fragment,a),k(En.$$.fragment,a),k(Wa.$$.fragment,a),k(An.$$.fragment,a),k(Ua.$$.fragment,a),k(Cn.$$.fragment,a),k(Mn.$$.fragment,a),k(Pn.$$.fragment,a),k(Ba.$$.fragment,a),k(Ln.$$.fragment,a),k(Ra.$$.fragment,a),k(On.$$.fragment,a),k(In.$$.fragment,a),k(Wn.$$.fragment,a),k(Va.$$.fragment,a),k(Rn.$$.fragment,a),k(Ka.$$.fragment,a),k(Gn.$$.fragment,a),k(Vn.$$.fragment,a),k(Kn.$$.fragment,a),k(Ya.$$.fragment,a),k(Zn.$$.fragment,a),k(Xa.$$.fragment,a),k(eo.$$.fragment,a),Pd=!1},d(a){s(m),a&&s(x),a&&s(g),j(T),a&&s(Y),j($,a),a&&s(me),a&&s(S),j(Q),a&&s(N),a&&s(H),a&&s(ge),a&&s(re),a&&s(fe),a&&s(ie),a&&s(R),a&&s(G),a&&s(V),a&&s(Z),a&&s(wp),a&&s(to),a&&s(vp),a&&s(Ts),a&&s(yp),a&&s(Bs),j(pt),a&&s(kp),a&&s(_a),a&&s(jp),a&&s(ro),a&&s(qp),a&&s(Ta),a&&s(xp),a&&s(Fs),a&&s(Ep),a&&s(lo),a&&s(Fp),a&&s(bs),a&&s($p),a&&s(ba),a&&s(zp),j(ut,a),a&&s(Ap),a&&s(wa),a&&s(Cp),j(gt,a),a&&s(Mp),a&&s($s),a&&s(Pp),j(ft,a),a&&s(Sp),a&&s(uo),a&&s(Dp),j(_t,a),a&&s(Np),a&&s(va),a&&s(Qp),a&&s(ya),a&&s(Lp),a&&s(mo),a&&s(Op),a&&s(ka),a&&s(Ip),a&&s(le),a&&s(Wp),a&&s(as),a&&s(Up),a&&s(jo),a&&s(Hp),a&&s(Ce),a&&s(Bp),a&&s(C),a&&s(Rp),a&&s(ce),a&&s(Gp),j(yt,a),a&&s(Vp),a&&s(ja),a&&s(Kp),a&&s(ws),a&&s(Jp),j(kt,a),a&&s(Yp),a&&s(zo),a&&s(Xp),j(jt,a),a&&s(Zp),a&&s(ee),a&&s(ed),a&&s(Co),a&&s(sd),a&&s(qa),a&&s(ad),j(Et,a),a&&s(td),a&&s(xa),a&&s(nd),j(Ft,a),a&&s(od),a&&s(Rs),j($t),a&&s(rd),a&&s(_e),a&&s(id),a&&s(Fa),a&&s(ld),j(zt,a),a&&s(pd),a&&s(Qo),a&&s(dd),j(At,a),a&&s(cd),a&&s(We),a&&s(hd),a&&s(Gs),j(Pt),a&&s(ud),a&&s(Vs),j(St),a&&s(md),a&&s(Ks),j(Nt),a&&s(gd),a&&s(Xe),j(Qt),j(It),a&&s(fd),a&&s(Js),j(Wt),a&&s(_d),a&&s(he),j(Ut),j(Ht),j(Bt),a&&s(Td),a&&s(Ys),j(Kt),a&&s(bd),a&&s(De),j(Jt),j(tn),j(Pa),j(nn),a&&s(wd),a&&s(Zs),j(on),a&&s(vd),a&&s(gs),j(rn),j(dn),j(Da),j(cn),a&&s(yd),a&&s(aa),j(hn),a&&s(kd),a&&s(Ze),j(un),j(_n),j(Qa),j(Tn),a&&s(jd),a&&s(na),j(bn),a&&s(qd),a&&s(es),j(wn),j(jn),j(Oa),j(qn),a&&s(xd),a&&s(ia),j(xn),a&&s(Ed),a&&s(Ne),j(En),j(Wa),j(An),j(Ua),j(Cn),a&&s(Fd),a&&s(pa),j(Mn),a&&s($d),a&&s(Qe),j(Pn),j(Ba),j(Ln),j(Ra),j(On),a&&s(zd),a&&s(ca),j(In),a&&s(Ad),a&&s(Le),j(Wn),j(Va),j(Rn),j(Ka),j(Gn),a&&s(Cd),a&&s(ua),j(Vn),a&&s(Md),a&&s(Oe),j(Kn),j(Ya),j(Zn),j(Xa),j(eo)}}}const E0={local:"tapas",sections:[{local:"overview",title:"Overview"},{local:"usage-finetuning",title:"Usage: fine-tuning"},{local:"usage-inference",title:"Usage: inference"},{local:"transformers.models.tapas.modeling_tapas.TableQuestionAnsweringOutput",title:"Tapas specific outputs"},{local:"transformers.TapasConfig",title:"TapasConfig"},{local:"transformers.TapasTokenizer",title:"TapasTokenizer"},{local:"transformers.TapasModel",title:"TapasModel"},{local:"transformers.TapasForMaskedLM",title:"TapasForMaskedLM"},{local:"transformers.TapasForSequenceClassification",title:"TapasForSequenceClassification"},{local:"transformers.TapasForQuestionAnswering",title:"TapasForQuestionAnswering"},{local:"transformers.TFTapasModel",title:"TFTapasModel"},{local:"transformers.TFTapasForMaskedLM",title:"TFTapasForMaskedLM"},{local:"transformers.TFTapasForSequenceClassification",title:"TFTapasForSequenceClassification"},{local:"transformers.TFTapasForQuestionAnswering",title:"TFTapasForQuestionAnswering"}],title:"TAPAS"};function F0(B,m,x){let{fw:g}=m;return B.$$set=f=>{"fw"in f&&x(0,g=f.fw)},[g]}class S0 extends p0{constructor(m){super();d0(this,m,F0,x0,c0,{fw:0})}}export{S0 as default,E0 as metadata};
