import{S as Qb,i as Ub,s as Hb,e as r,k as l,w as k,t as n,Y as Oo,M as Rb,c as a,d as t,m as d,a as i,x as v,h as s,Z as Po,b as c,F as e,g as h,y as T,q as b,o as y,B as L}from"../../chunks/vendor-6b77c823.js";import{T as Pe}from"../../chunks/Tip-39098574.js";import{D as B}from"../../chunks/Docstring-abef54e3.js";import{C as at}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ze}from"../../chunks/IconCopyLink-7a11ce68.js";function Vb(Q){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&t(f)}}}function Gb(Q){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&t(f)}}}function Kb(Q){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&t(f)}}}function Jb(Q){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&t(f)}}}function Xb(Q){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&t(f)}}}function Yb(Q){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&t(f)}}}function Zb(Q){let f,x,g,u,$,w,_,M,me,J,E,Z,I,ee,pe,S,fe,le,G,P,te,X,z,C,ne,U,de,se,D,ge,ce,q,ue,W,re,K,H,ae,_e,j,ie,R,we;return{c(){f=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=r("p"),Z=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),fe=n("model(inputs)"),le=n("."),G=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=r("code"),ge=n("model(inputs_ids)"),ce=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),j=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){f=a(m,"P",{});var F=i(f);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var Y=i(u);$=a(Y,"LI",{});var be=i($);w=s(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),_=d(Y),M=a(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=a(m,"P",{});var N=i(E);Z=s(N,"This second option is useful when using "),I=a(N,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(N,"CODE",{});var $e=i(S);fe=s($e,"model(inputs)"),$e.forEach(t),le=s(N,"."),N.forEach(t),G=d(m),P=a(m,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=a(m,"UL",{});var O=i(z);C=a(O,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var xe=i(U);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=a(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(O),q=a(O,"LI",{});var A=i(q);ue=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var ke=i(W);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(A," or "),H=a(A,"CODE",{});var Te=i(H);ae=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),A.forEach(t),_e=d(O),j=a(O,"LI",{});var oe=i(j);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),O.forEach(t)},m(m,F){h(m,f,F),e(f,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,pe),e(E,S),e(S,fe),e(E,le),h(m,G,F),h(m,P,F),e(P,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,U),e(U,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,re),e(q,K),e(q,H),e(H,ae),e(z,_e),e(z,j),e(j,ie),e(j,R),e(R,we)},d(m){m&&t(f),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(P),m&&t(X),m&&t(z)}}}function ey(Q){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&t(f)}}}function ty(Q){let f,x,g,u,$,w,_,M,me,J,E,Z,I,ee,pe,S,fe,le,G,P,te,X,z,C,ne,U,de,se,D,ge,ce,q,ue,W,re,K,H,ae,_e,j,ie,R,we;return{c(){f=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=r("p"),Z=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),fe=n("model(inputs)"),le=n("."),G=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=r("code"),ge=n("model(inputs_ids)"),ce=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),j=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){f=a(m,"P",{});var F=i(f);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var Y=i(u);$=a(Y,"LI",{});var be=i($);w=s(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),_=d(Y),M=a(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=a(m,"P",{});var N=i(E);Z=s(N,"This second option is useful when using "),I=a(N,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(N,"CODE",{});var $e=i(S);fe=s($e,"model(inputs)"),$e.forEach(t),le=s(N,"."),N.forEach(t),G=d(m),P=a(m,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=a(m,"UL",{});var O=i(z);C=a(O,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var xe=i(U);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=a(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(O),q=a(O,"LI",{});var A=i(q);ue=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var ke=i(W);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(A," or "),H=a(A,"CODE",{});var Te=i(H);ae=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),A.forEach(t),_e=d(O),j=a(O,"LI",{});var oe=i(j);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),O.forEach(t)},m(m,F){h(m,f,F),e(f,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,pe),e(E,S),e(S,fe),e(E,le),h(m,G,F),h(m,P,F),e(P,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,U),e(U,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,re),e(q,K),e(q,H),e(H,ae),e(z,_e),e(z,j),e(j,ie),e(j,R),e(R,we)},d(m){m&&t(f),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(P),m&&t(X),m&&t(z)}}}function oy(Q){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&t(f)}}}function ny(Q){let f,x,g,u,$,w,_,M,me,J,E,Z,I,ee,pe,S,fe,le,G,P,te,X,z,C,ne,U,de,se,D,ge,ce,q,ue,W,re,K,H,ae,_e,j,ie,R,we;return{c(){f=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=r("p"),Z=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),fe=n("model(inputs)"),le=n("."),G=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=r("code"),ge=n("model(inputs_ids)"),ce=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),j=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){f=a(m,"P",{});var F=i(f);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var Y=i(u);$=a(Y,"LI",{});var be=i($);w=s(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),_=d(Y),M=a(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=a(m,"P",{});var N=i(E);Z=s(N,"This second option is useful when using "),I=a(N,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(N,"CODE",{});var $e=i(S);fe=s($e,"model(inputs)"),$e.forEach(t),le=s(N,"."),N.forEach(t),G=d(m),P=a(m,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=a(m,"UL",{});var O=i(z);C=a(O,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var xe=i(U);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=a(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(O),q=a(O,"LI",{});var A=i(q);ue=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var ke=i(W);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(A," or "),H=a(A,"CODE",{});var Te=i(H);ae=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),A.forEach(t),_e=d(O),j=a(O,"LI",{});var oe=i(j);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),O.forEach(t)},m(m,F){h(m,f,F),e(f,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,pe),e(E,S),e(S,fe),e(E,le),h(m,G,F),h(m,P,F),e(P,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,U),e(U,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,re),e(q,K),e(q,H),e(H,ae),e(z,_e),e(z,j),e(j,ie),e(j,R),e(R,we)},d(m){m&&t(f),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(P),m&&t(X),m&&t(z)}}}function sy(Q){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&t(f)}}}function ry(Q){let f,x,g,u,$,w,_,M,me,J,E,Z,I,ee,pe,S,fe,le,G,P,te,X,z,C,ne,U,de,se,D,ge,ce,q,ue,W,re,K,H,ae,_e,j,ie,R,we;return{c(){f=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=r("p"),Z=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),fe=n("model(inputs)"),le=n("."),G=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=r("code"),ge=n("model(inputs_ids)"),ce=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),j=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){f=a(m,"P",{});var F=i(f);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var Y=i(u);$=a(Y,"LI",{});var be=i($);w=s(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),_=d(Y),M=a(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=a(m,"P",{});var N=i(E);Z=s(N,"This second option is useful when using "),I=a(N,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(N,"CODE",{});var $e=i(S);fe=s($e,"model(inputs)"),$e.forEach(t),le=s(N,"."),N.forEach(t),G=d(m),P=a(m,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=a(m,"UL",{});var O=i(z);C=a(O,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var xe=i(U);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=a(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(O),q=a(O,"LI",{});var A=i(q);ue=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var ke=i(W);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(A," or "),H=a(A,"CODE",{});var Te=i(H);ae=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),A.forEach(t),_e=d(O),j=a(O,"LI",{});var oe=i(j);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),O.forEach(t)},m(m,F){h(m,f,F),e(f,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,pe),e(E,S),e(S,fe),e(E,le),h(m,G,F),h(m,P,F),e(P,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,U),e(U,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,re),e(q,K),e(q,H),e(H,ae),e(z,_e),e(z,j),e(j,ie),e(j,R),e(R,we)},d(m){m&&t(f),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(P),m&&t(X),m&&t(z)}}}function ay(Q){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&t(f)}}}function iy(Q){let f,x,g,u,$,w,_,M,me,J,E,Z,I,ee,pe,S,fe,le,G,P,te,X,z,C,ne,U,de,se,D,ge,ce,q,ue,W,re,K,H,ae,_e,j,ie,R,we;return{c(){f=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=r("p"),Z=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),fe=n("model(inputs)"),le=n("."),G=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=r("code"),ge=n("model(inputs_ids)"),ce=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),j=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){f=a(m,"P",{});var F=i(f);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var Y=i(u);$=a(Y,"LI",{});var be=i($);w=s(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),_=d(Y),M=a(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=a(m,"P",{});var N=i(E);Z=s(N,"This second option is useful when using "),I=a(N,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(N,"CODE",{});var $e=i(S);fe=s($e,"model(inputs)"),$e.forEach(t),le=s(N,"."),N.forEach(t),G=d(m),P=a(m,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=a(m,"UL",{});var O=i(z);C=a(O,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var xe=i(U);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=a(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(O),q=a(O,"LI",{});var A=i(q);ue=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var ke=i(W);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(A," or "),H=a(A,"CODE",{});var Te=i(H);ae=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),A.forEach(t),_e=d(O),j=a(O,"LI",{});var oe=i(j);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),O.forEach(t)},m(m,F){h(m,f,F),e(f,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,pe),e(E,S),e(S,fe),e(E,le),h(m,G,F),h(m,P,F),e(P,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,U),e(U,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,re),e(q,K),e(q,H),e(H,ae),e(z,_e),e(z,j),e(j,ie),e(j,R),e(R,we)},d(m){m&&t(f),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(P),m&&t(X),m&&t(z)}}}function ly(Q){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&t(f)}}}function dy(Q){let f,x,g,u,$,w,_,M,me,J,E,Z,I,ee,pe,S,fe,le,G,P,te,X,z,C,ne,U,de,se,D,ge,ce,q,ue,W,re,K,H,ae,_e,j,ie,R,we;return{c(){f=r("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=r("ul"),$=r("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=r("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=r("p"),Z=n("This second option is useful when using "),I=r("code"),ee=n("tf.keras.Model.fit"),pe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r("code"),fe=n("model(inputs)"),le=n("."),G=l(),P=r("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=r("ul"),C=r("li"),ne=n("a single Tensor with "),U=r("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=r("code"),ge=n("model(inputs_ids)"),ce=l(),q=r("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r("code"),re=n("model([input_ids, attention_mask])"),K=n(" or "),H=r("code"),ae=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),j=r("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=r("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){f=a(m,"P",{});var F=i(f);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=a(m,"UL",{});var Y=i(u);$=a(Y,"LI",{});var be=i($);w=s(be,"having all inputs as keyword arguments (like PyTorch models), or"),be.forEach(t),_=d(Y),M=a(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=a(m,"P",{});var N=i(E);Z=s(N,"This second option is useful when using "),I=a(N,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),pe=s(N,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a(N,"CODE",{});var $e=i(S);fe=s($e,"model(inputs)"),$e.forEach(t),le=s(N,"."),N.forEach(t),G=d(m),P=a(m,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=a(m,"UL",{});var O=i(z);C=a(O,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),U=a(V,"CODE",{});var xe=i(U);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=a(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(O),q=a(O,"LI",{});var A=i(q);ue=s(A,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a(A,"CODE",{});var ke=i(W);re=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(A," or "),H=a(A,"CODE",{});var Te=i(H);ae=s(Te,"model([input_ids, attention_mask, token_type_ids])"),Te.forEach(t),A.forEach(t),_e=d(O),j=a(O,"LI",{});var oe=i(j);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),R=a(oe,"CODE",{});var Me=i(R);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),O.forEach(t)},m(m,F){h(m,f,F),e(f,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,pe),e(E,S),e(S,fe),e(E,le),h(m,G,F),h(m,P,F),e(P,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,U),e(U,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,re),e(q,K),e(q,H),e(H,ae),e(z,_e),e(z,j),e(j,ie),e(j,R),e(R,we)},d(m){m&&t(f),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(P),m&&t(X),m&&t(z)}}}function cy(Q){let f,x,g,u,$;return{c(){f=r("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){f=a(w,"P",{});var _=i(f);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,f,_),e(f,x),e(f,g),e(g,u),e(f,$)},d(w){w&&t(f)}}}function hy(Q){let f,x,g,u,$,w,_,M,me,J,E,Z,I,ee,pe,S,fe,le,G,P,te,X,z,C,ne,U,de,se,D,ge,ce,q,ue,W,re,K,H,ae,_e,j,ie,R,we,m,F,Y,be,he,N,ve,$e,Fe,O,V,xe,ye,A,ke,Te,oe,Me,Qa,Eh,Zl,Le,zh,ed,Pb='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',td,od,jb='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',nd,sd,Nb='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',rd,Ua,qh,Ch,Ha,Oh,Ph,Ra,jh,Nh,ad,Ab='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',id,Va,Ah,Ih,ld,ut,Sh,dd,Ib='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',cd,Ga,Dh,Bh,hd,_t,Wh,Ka,Qh,Uh,Ja,Hh,Rh,md,jo,Xa,Vh,Gh,Ya,Kh,pd,No,Jh,Pr,Xh,Yh,fd,Ve,Zh,gd,Sb='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',ud,_d,Db='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',wd,kd,Bb='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',vd,Td,Wb='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',bd,yd,Ao,em,bn,tm,om,Ld,jt,Io,Za,yn,nm,ei,sm,$d,Nt,jr,rm,am,Nr,im,lm,Fd,Ln,xd,At,So,ti,$n,dm,oi,cm,Md,je,Fn,hm,It,mm,Ar,pm,fm,Ir,gm,um,_m,St,wm,Sr,km,vm,xn,Tm,bm,ym,Dt,Lm,Dr,$m,Fm,Br,xm,Mm,Em,ni,zm,qm,Mn,Ed,Bt,Do,si,En,Cm,ri,Om,zd,pt,zn,Pm,ai,jm,Nm,Bo,Wr,Am,Im,Qr,Sm,Dm,qd,Wt,Wo,ii,qn,Bm,li,Wm,Cd,ft,Cn,Qm,On,Um,di,Hm,Rm,Vm,Qo,Ur,Gm,Km,Hr,Jm,Xm,Od,Qt,Uo,ci,Pn,Ym,hi,Zm,Pd,Ut,jn,ep,mi,tp,jd,Ht,Nn,op,pi,np,Nd,Rt,An,sp,fi,rp,Ad,Vt,In,ap,gi,ip,Id,Gt,Sn,lp,ui,dp,Sd,Kt,Dn,cp,_i,hp,Dd,Jt,Bn,mp,wi,pp,Bd,Xt,Wn,fp,ki,gp,Wd,Yt,Qn,up,vi,_p,Qd,Zt,Un,wp,Ti,kp,Ud,eo,Hn,vp,bi,Tp,Hd,to,Rn,bp,yi,yp,Rd,oo,Vn,Lp,Li,$p,Vd,no,Gn,Fp,$i,xp,Gd,so,Ho,Fi,Kn,Mp,xi,Ep,Kd,qe,Jn,zp,Mi,qp,Cp,Xn,Op,Rr,Pp,jp,Np,Yn,Ap,Zn,Ip,Sp,Dp,ro,Bp,Vr,Wp,Qp,es,Up,Hp,Rp,ts,Vp,Ei,Gp,Kp,Jp,Ge,os,Xp,ao,Yp,Gr,Zp,ef,zi,tf,of,nf,Ro,sf,qi,rf,af,ns,Jd,io,Vo,Ci,ss,lf,Oi,df,Xd,We,rs,cf,as,hf,Pi,mf,pf,ff,is,gf,Kr,uf,_f,wf,ls,kf,ds,vf,Tf,bf,Ke,cs,yf,lo,Lf,Jr,$f,Ff,ji,xf,Mf,Ef,Go,zf,Ni,qf,Cf,hs,Yd,co,Ko,Ai,ms,Of,Ii,Pf,Zd,Qe,ps,jf,Si,Nf,Af,fs,If,Xr,Sf,Df,Bf,gs,Wf,us,Qf,Uf,Hf,Ce,_s,Rf,ho,Vf,Yr,Gf,Kf,Di,Jf,Xf,Yf,Jo,Zf,Bi,eg,tg,ws,og,Wi,ng,sg,ks,ec,mo,Xo,Qi,vs,rg,Ui,ag,tc,Ue,Ts,ig,Hi,lg,dg,bs,cg,Zr,hg,mg,pg,ys,fg,Ls,gg,ug,_g,Je,$s,wg,po,kg,ea,vg,Tg,Ri,bg,yg,Lg,Yo,$g,Vi,Fg,xg,Fs,oc,fo,Zo,Gi,xs,Mg,Ki,Eg,nc,He,Ms,zg,Ji,qg,Cg,Es,Og,ta,Pg,jg,Ng,zs,Ag,qs,Ig,Sg,Dg,Xe,Cs,Bg,go,Wg,oa,Qg,Ug,Xi,Hg,Rg,Vg,en,Gg,Yi,Kg,Jg,Os,sc,uo,tn,Zi,Ps,Xg,el,Yg,rc,Re,js,Zg,_o,eu,tl,tu,ou,ol,nu,su,ru,Ns,au,na,iu,lu,du,As,cu,Is,hu,mu,pu,Ye,Ss,fu,wo,gu,sa,uu,_u,nl,wu,ku,vu,on,Tu,sl,bu,yu,Ds,ac,ko,nn,rl,Bs,Lu,al,$u,ic,Ee,Ws,Fu,il,xu,Mu,Qs,Eu,ra,zu,qu,Cu,Us,Ou,Hs,Pu,ju,Nu,sn,Au,vo,Iu,aa,Su,Du,Rs,Bu,Wu,Qu,Vs,Uu,ll,Hu,Ru,Vu,wt,Gs,Gu,To,Ku,ia,Ju,Xu,dl,Yu,Zu,e_,rn,lc,bo,an,cl,Ks,t_,hl,o_,dc,Ne,Js,n_,Xs,s_,ml,r_,a_,i_,Ys,l_,la,d_,c_,h_,Zs,m_,er,p_,f_,g_,ln,u_,Ze,tr,__,yo,w_,da,k_,v_,pl,T_,b_,y_,dn,L_,fl,$_,F_,or,cc,Lo,cn,gl,nr,x_,ul,M_,hc,Ae,sr,E_,$o,z_,_l,q_,C_,wl,O_,P_,j_,rr,N_,ca,A_,I_,S_,ar,D_,ir,B_,W_,Q_,hn,U_,et,lr,H_,Fo,R_,ha,V_,G_,kl,K_,J_,X_,mn,Y_,vl,Z_,ew,dr,mc,xo,pn,Tl,cr,tw,bl,ow,pc,Ie,hr,nw,yl,sw,rw,mr,aw,ma,iw,lw,dw,pr,cw,fr,hw,mw,pw,fn,fw,tt,gr,gw,Mo,uw,pa,_w,ww,Ll,kw,vw,Tw,gn,bw,$l,yw,Lw,ur,fc,Eo,un,Fl,_r,$w,xl,Fw,gc,Se,wr,xw,Ml,Mw,Ew,kr,zw,fa,qw,Cw,Ow,vr,Pw,Tr,jw,Nw,Aw,_n,Iw,ot,br,Sw,zo,Dw,ga,Bw,Ww,El,Qw,Uw,Hw,wn,Rw,zl,Vw,Gw,yr,uc,qo,kn,ql,Lr,Kw,Cl,Jw,_c,De,$r,Xw,Ol,Yw,Zw,Fr,ek,ua,tk,ok,nk,xr,sk,Mr,rk,ak,ik,vn,lk,nt,Er,dk,Co,ck,_a,hk,mk,Pl,pk,fk,gk,Tn,uk,jl,_k,wk,zr,wc;return w=new ze({}),ee=new ze({}),oe=new ze({}),yn=new ze({}),Ln=new at({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),$n=new ze({}),Fn=new B({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/configuration_longformer.py#L33",parametersDescription:[{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}]}}),Mn=new at({props:{code:`from transformers import LongformerConfig, LongformerModel

# Initializing a Longformer configuration
configuration = LongformerConfig()

# Initializing a model from the configuration
model = LongformerModel(configuration)

# Accessing the model configuration
configuration = model.config`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerConfig, LongformerModel

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a Longformer configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = LongformerConfig()

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Initializing a model from the configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel(configuration)

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Accessing the model configuration</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>configuration = model.config`}}),En=new ze({}),zn=new B({props:{name:"class transformers.LongformerTokenizer",anchor:"transformers.LongformerTokenizer",parameters:[{name:"vocab_file",val:""},{name:"merges_file",val:""},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/tokenization_longformer.py#L51"}}),qn=new ze({}),Cn=new B({props:{name:"class transformers.LongformerTokenizerFast",anchor:"transformers.LongformerTokenizerFast",parameters:[{name:"vocab_file",val:" = None"},{name:"merges_file",val:" = None"},{name:"tokenizer_file",val:" = None"},{name:"errors",val:" = 'replace'"},{name:"bos_token",val:" = '<s>'"},{name:"eos_token",val:" = '</s>'"},{name:"sep_token",val:" = '</s>'"},{name:"cls_token",val:" = '<s>'"},{name:"unk_token",val:" = '<unk>'"},{name:"pad_token",val:" = '<pad>'"},{name:"mask_token",val:" = '<mask>'"},{name:"add_prefix_space",val:" = False"},{name:"trim_offsets",val:" = True"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/tokenization_longformer_fast.py#L59"}}),Pn=new ze({}),jn=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L61",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Nn=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L104",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),An=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L152",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),In=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"start_logits",val:": FloatTensor = None"},{name:"end_logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L198",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Sn=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L247",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Dn=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L293",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Bn=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L341",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Wn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L68",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Qn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L111",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
Sequence of hidden-states at the output of the last layer of the model.`,name:"last_hidden_state"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.pooler_output",description:`<strong>pooler_output</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, hidden_size)</code>) &#x2014;
Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.`,name:"pooler_output"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Un=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L159",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Masked language modeling (MLM) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.vocab_size)</code>) &#x2014;
Prediction scores of the language modeling head (scores for each vocabulary token before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Hn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L205",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.start_logits",description:`<strong>start_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-start scores (before SoftMax).`,name:"start_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.end_logits",description:`<strong>end_logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Span-end scores (before SoftMax).`,name:"end_logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Rn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L254",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification (or regression if config.num_labels==1) loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, config.num_labels)</code>) &#x2014;
Classification (or regression if config.num_labels==1) scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Vn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L300",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices)</code>) &#x2014;
<em>num_choices</em> is the second dimension of the input tensors. (see <em>input_ids</em> above).</p>
<p>Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Gn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L348",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
Classification loss.`,name:"loss"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.logits",description:`<strong>logits</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, config.num_labels)</code>) &#x2014;
Classification scores (before SoftMax).`,name:"logits"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.hidden_states",description:`<strong>hidden_states</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for the output of the embeddings + one for the output of each layer) of shape
<code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.`,name:"hidden_states"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.attentions",description:`<strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>`,name:"attentions"},{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.global_attentions",description:`<strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) &#x2014;
Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.`,name:"global_attentions"}]}}),Kn=new ze({}),Jn=new B({props:{name:"class transformers.LongformerModel",anchor:"transformers.LongformerModel",parameters:[{name:"config",val:""},{name:"add_pooling_layer",val:" = True"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L1497",parametersDescription:[{anchor:"transformers.LongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),os=new B({props:{name:"forward",anchor:"transformers.LongformerModel.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L1608",parametersDescription:[{anchor:"transformers.LongformerModel.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerModel.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerModel.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerModel.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerModel.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerModel.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerModel.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerModel.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerModel.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerModel.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerModel.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) \u2014 Sequence of hidden-states at the output of the last layer of the model.</p>
</li>
<li>
<p><strong>pooler_output</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, hidden_size)</code>) \u2014 Last layer hidden-state of the first token of the sequence (classification token) further processed by a
Linear layer and a Tanh activation function. The Linear layer weights are trained from the next sentence
prediction (classification) objective during pretraining.</p>
</li>
<li>
<p><strong>hidden_states</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_hidden_states=True</code> is passed or when <code>config.output_hidden_states=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for the output of the embeddings + one for the output of each layer) of
shape <code>(batch_size, sequence_length, hidden_size)</code>.</p>
<p>Hidden-states of the model at the output of each layer plus the initial embedding outputs.</p>
</li>
<li>
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling"
>transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Ro=new Pe({props:{$$slots:{default:[Vb]},$$scope:{ctx:Q}}}),ns=new at({props:{code:`import torch
from transformers import LongformerModel, LongformerTokenizer

model = LongformerModel.from_pretrained("allenai/longformer-base-4096")
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")

SAMPLE_TEXT = " ".join(["Hello world! "] * 1000)  # long input document
input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(0)  # batch of size 1

attention_mask = torch.ones(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to local attention
global_attention_mask = torch.zeros(
    input_ids.shape, dtype=torch.long, device=input_ids.device
)  # initialize to global attention to be deactivated for all tokens
global_attention_mask[
    :,
    [
        1,
        4,
        21,
    ],
] = 1  # Set global attention to random tokens for the sake of this example
# Usually, set global attention based on the task. For example,
# classification: the <s> token
# QA: question tokens
# LM: potentially on the beginning of sentences and paragraphs
outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
sequence_output = outputs.last_hidden_state
pooled_output = outputs.pooler_output`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerModel, LongformerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerModel.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>SAMPLE_TEXT = <span class="hljs-string">&quot; &quot;</span>.join([<span class="hljs-string">&quot;Hello world! &quot;</span>] * <span class="hljs-number">1000</span>)  <span class="hljs-comment"># long input document</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch of size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = torch.ones(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># initialize to local attention</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask = torch.zeros(
<span class="hljs-meta">... </span>    input_ids.shape, dtype=torch.long, device=input_ids.device
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># initialize to global attention to be deactivated for all tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>global_attention_mask[
<span class="hljs-meta">... </span>    :,
<span class="hljs-meta">... </span>    [
<span class="hljs-meta">... </span>        <span class="hljs-number">1</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">4</span>,
<span class="hljs-meta">... </span>        <span class="hljs-number">21</span>,
<span class="hljs-meta">... </span>    ],
<span class="hljs-meta">&gt;&gt;&gt; </span>] = <span class="hljs-number">1</span>  <span class="hljs-comment"># Set global attention to random tokens for the sake of this example</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># Usually, set global attention based on the task. For example,</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># classification: the &lt;s&gt; token</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># QA: question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># LM: potentially on the beginning of sentences and paragraphs</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask, global_attention_mask=global_attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>sequence_output = outputs.last_hidden_state
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),ss=new ze({}),rs=new B({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L1732",parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),cs=new B({props:{name:"forward",anchor:"transformers.LongformerForMaskedLM.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L1751",parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMaskedLM.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMaskedLM.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMaskedLM.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMaskedLM.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMaskedLM.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMaskedLM.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"},{anchor:"transformers.LongformerForMaskedLM.forward.kwargs",description:`<strong>kwargs</strong> (<code>Dict[str, any]</code>, optional, defaults to <em>{}</em>) &#x2014;
Used to hide legacy arguments that have been deprecated.`,name:"kwargs"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput"
>transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Go=new Pe({props:{$$slots:{default:[Gb]},$$scope:{ctx:Q}}}),hs=new at({props:{code:`import torch
from transformers import LongformerForMaskedLM, LongformerTokenizer

model = LongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")

SAMPLE_TEXT = " ".join(["Hello world! "] * 1000)  # long input document
input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(0)  # batch of size 1

attention_mask = None  # default is local attention everywhere, which is a good choice for MaskedLM
# check \`LongformerModel.forward\` for more details how to set *attention_mask*
outputs = model(input_ids, attention_mask=attention_mask, labels=input_ids)
loss = outputs.loss
prediction_logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerForMaskedLM, LongformerTokenizer

<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>SAMPLE_TEXT = <span class="hljs-string">&quot; &quot;</span>.join([<span class="hljs-string">&quot;Hello world! &quot;</span>] * <span class="hljs-number">1000</span>)  <span class="hljs-comment"># long input document</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = torch.tensor(tokenizer.encode(SAMPLE_TEXT)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># batch of size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = <span class="hljs-literal">None</span>  <span class="hljs-comment"># default is local attention everywhere, which is a good choice for MaskedLM</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># check \`LongformerModel.forward\` for more details how to set *attention_mask*</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask, labels=input_ids)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),ms=new ze({}),ps=new B({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L1837",parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_s=new B({props:{name:"forward",anchor:"transformers.LongformerForSequenceClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L1852",parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForSequenceClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForSequenceClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForSequenceClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForSequenceClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForSequenceClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the sequence classification/regression loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>. If <code>config.num_labels == 1</code> a regression loss is computed (Mean-Square loss), If
<code>config.num_labels &gt; 1</code> a classification loss is computed (Cross-Entropy).`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerSequenceClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Jo=new Pe({props:{$$slots:{default:[Kb]},$$scope:{ctx:Q}}}),ws=new at({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

torch.manual_seed(0)
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1]).unsqueeze(0)  # Batch size 1
outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>]).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),ks=new at({props:{code:`import torch
from transformers import LongformerTokenizer, LongformerForSequenceClassification

torch.manual_seed(0)
tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096", problem_type="multi_label_classification", num_labels=2)

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([[1, 1]], dtype=torch.float)  # need dtype=float for BCEWithLogitsLoss
outputs = model(**inputs, labels=labels)
loss = outputs.loss
list(logits.shape)
`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForSequenceClassification

<span class="hljs-meta">&gt;&gt;&gt; </span>torch.manual_seed(<span class="hljs-number">0</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>, problem_type=<span class="hljs-string">&quot;multi_label_classification&quot;</span>, num_labels=<span class="hljs-number">2</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([[<span class="hljs-number">1</span>, <span class="hljs-number">1</span>]], dtype=torch.<span class="hljs-built_in">float</span>)  <span class="hljs-comment"># need dtype=float for BCEWithLogitsLoss</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-built_in">list</span>(logits.shape)
`}}),vs=new ze({}),Ts=new B({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L2188",parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),$s=new B({props:{name:"forward",anchor:"transformers.LongformerForMultipleChoice.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L2199",parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForMultipleChoice.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForMultipleChoice.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForMultipleChoice.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForMultipleChoice.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForMultipleChoice.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices-1]</code> where <code>num_choices</code> is the size of the second dimension of the input tensors. (See
<code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerMultipleChoiceModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),Yo=new Pe({props:{$$slots:{default:[Jb]},$$scope:{ctx:Q}}}),Fs=new at({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."
labels = torch.tensor(0).unsqueeze(0)  # choice0 is correct (according to Wikipedia ;)), batch size 1

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="pt", padding=True)
outputs = model(**{k: v.unsqueeze(0) for k, v in encoding.items()}, labels=labels)  # batch size is 1

# the linear classifier still needs to be trained
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor(<span class="hljs-number">0</span>).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># choice0 is correct (according to Wikipedia ;)), batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;pt&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**{k: v.unsqueeze(<span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}, labels=labels)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),xs=new ze({}),Ms=new B({props:{name:"class transformers.LongformerForTokenClassification",anchor:"transformers.LongformerForTokenClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L2103",parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Cs=new B({props:{name:"forward",anchor:"transformers.LongformerForTokenClassification.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"labels",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L2118",parametersDescription:[{anchor:"transformers.LongformerForTokenClassification.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForTokenClassification.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForTokenClassification.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForTokenClassification.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForTokenClassification.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForTokenClassification.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForTokenClassification.forward.labels",description:`<strong>labels</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_longformer.LongformerTokenClassifierOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),en=new Pe({props:{$$slots:{default:[Xb]},$$scope:{ctx:Q}}}),Os=new at({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = LongformerForTokenClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="pt")
labels = torch.tensor([1] * inputs["input_ids"].size(1)).unsqueeze(0)  # Batch size 1

outputs = model(**inputs, labels=labels)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>labels = torch.tensor([<span class="hljs-number">1</span>] * inputs[<span class="hljs-string">&quot;input_ids&quot;</span>].size(<span class="hljs-number">1</span>)).unsqueeze(<span class="hljs-number">0</span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(**inputs, labels=labels)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Ps=new ze({}),js=new B({props:{name:"class transformers.LongformerForQuestionAnswering",anchor:"transformers.LongformerForQuestionAnswering",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L1964",parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
model. Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),Ss=new B({props:{name:"forward",anchor:"transformers.LongformerForQuestionAnswering.forward",parameters:[{name:"input_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"global_attention_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"head_mask",val:": typing.Optional[torch.Tensor] = None"},{name:"token_type_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"position_ids",val:": typing.Optional[torch.Tensor] = None"},{name:"inputs_embeds",val:": typing.Optional[torch.Tensor] = None"},{name:"start_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"end_positions",val:": typing.Optional[torch.Tensor] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L1978",parametersDescription:[{anchor:"transformers.LongformerForQuestionAnswering.forward.input_ids",description:`<strong>input_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.attention_mask",description:`<strong>attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.head_mask",description:`<strong>head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the encoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.decoder_head_mask",description:`<strong>decoder_head_mask</strong> (<code>torch.Tensor</code> of shape <code>(num_layers, num_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules in the decoder. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"decoder_head_mask"},{anchor:"transformers.LongformerForQuestionAnswering.forward.token_type_ids",description:`<strong>token_type_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.position_ids",description:`<strong>position_ids</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.LongformerForQuestionAnswering.forward.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail.`,name:"output_attentions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail.`,name:"output_hidden_states"},{anchor:"transformers.LongformerForQuestionAnswering.forward.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple.`,name:"return_dict"},{anchor:"transformers.LongformerForQuestionAnswering.forward.start_positions",description:`<strong>start_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.LongformerForQuestionAnswering.forward.end_positions",description:`<strong>end_positions</strong> (<code>torch.LongTensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<code>sequence_length</code>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or a tuple of
<code>torch.FloatTensor</code> (if <code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various
elements depending on the configuration (<a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
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
<p><strong>attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(torch.FloatTensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>torch.FloatTensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>,
where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_longformer.LongformerQuestionAnsweringModelOutput</a> or <code>tuple(torch.FloatTensor)</code></p>
`}}),on=new Pe({props:{$$slots:{default:[Yb]},$$scope:{ctx:Q}}}),Ds=new at({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
import torch

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = LongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
encoding = tokenizer(question, text, return_tensors="pt")
input_ids = encoding["input_ids"]

# default is local attention everywhere
# the forward method will automatically set global attention on question tokens
attention_mask = encoding["attention_mask"]

outputs = model(input_ids, attention_mask=attention_mask)
start_logits = outputs.start_logits
end_logits = outputs.end_logits
all_tokens = tokenizer.convert_ids_to_tokens(input_ids[0].tolist())

answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + 1]
answer = tokenizer.decode(
    tokenizer.convert_tokens_to_ids(answer_tokens)
)  # remove space prepending space token`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, LongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> torch

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = LongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = encoding[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># default is local attention everywhere</span>
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the forward method will automatically set global attention on question tokens</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>attention_mask = encoding[<span class="hljs-string">&quot;attention_mask&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_ids, attention_mask=attention_mask)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_ids[<span class="hljs-number">0</span>].tolist())

<span class="hljs-meta">&gt;&gt;&gt; </span>answer_tokens = all_tokens[torch.argmax(start_logits) : torch.argmax(end_logits) + <span class="hljs-number">1</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = tokenizer.decode(
<span class="hljs-meta">... </span>    tokenizer.convert_tokens_to_ids(answer_tokens)
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),Bs=new ze({}),Ws=new B({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L1989",parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sn=new Pe({props:{$$slots:{default:[Zb]},$$scope:{ctx:Q}}}),Gs=new B({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2011",parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerModel.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerModel.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerModel.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerModel.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerModel.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerModel.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerModel.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}]}}),rn=new Pe({props:{$$slots:{default:[ey]},$$scope:{ctx:Q}}}),Ks=new ze({}),Js=new B({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2063",parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ln=new Pe({props:{$$slots:{default:[ty]},$$scope:{ctx:Q}}}),tr=new B({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2080",parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMaskedLM.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMaskedLM.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMaskedLM.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMaskedLM.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the masked language modeling loss. Indices should be in <code>[-100, 0, ..., config.vocab_size]</code> (see <code>input_ids</code> docstring) Tokens with indices set to <code>-100</code> are ignored (masked), the
loss is only computed for the tokens with labels in <code>[0, ..., config.vocab_size]</code>`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Masked language modeling (MLM) loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),dn=new Pe({props:{$$slots:{default:[oy]},$$scope:{ctx:Q}}}),or=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMaskedLM.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("The capital of France is <mask>.", return_tensors="tf")
inputs["labels"] = tokenizer("The capital of France is Paris.", return_tensors="tf")["input_ids"]

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMaskedLM
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMaskedLM.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;The capital of France is &lt;mask&gt;.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tokenizer(<span class="hljs-string">&quot;The capital of France is Paris.&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)[<span class="hljs-string">&quot;input_ids&quot;</span>]

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),nr=new ze({}),sr=new B({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2159",parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new Pe({props:{$$slots:{default:[ny]},$$scope:{ctx:Q}}}),lr=new B({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"start_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"end_positions",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2174",parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.start_positions",description:`<strong>start_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the start of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"start_positions"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.end_positions",description:`<strong>end_positions</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for position (index) of the end of the labelled span for computing the token classification loss.
Positions are clamped to the length of the sequence (<em>sequence_length</em>). Position outside of the sequence
are not taken into account for computing the loss.`,name:"end_positions"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Total span extraction loss is the sum of a Cross-Entropy for the start and end positions.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),mn=new Pe({props:{$$slots:{default:[sy]},$$scope:{ctx:Q}}}),dr=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")
model = TFLongformerForQuestionAnswering.from_pretrained("allenai/longformer-large-4096-finetuned-triviaqa")

question, text = "Who was Jim Henson?", "Jim Henson was a nice puppet"
input_dict = tokenizer(question, text, return_tensors="tf")
outputs = model(input_dict)
start_logits = outputs.start_logits
end_logits = outputs.end_logits

all_tokens = tokenizer.convert_ids_to_tokens(input_dict["input_ids"].numpy()[0])
answer = " ".join(all_tokens[tf.math.argmax(start_logits, 1)[0] : tf.math.argmax(end_logits, 1)[0] + 1])`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForQuestionAnswering
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForQuestionAnswering.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-large-4096-finetuned-triviaqa&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>question, text = <span class="hljs-string">&quot;Who was Jim Henson?&quot;</span>, <span class="hljs-string">&quot;Jim Henson was a nice puppet&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>input_dict = tokenizer(question, text, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(input_dict)
<span class="hljs-meta">&gt;&gt;&gt; </span>start_logits = outputs.start_logits
<span class="hljs-meta">&gt;&gt;&gt; </span>end_logits = outputs.end_logits

<span class="hljs-meta">&gt;&gt;&gt; </span>all_tokens = tokenizer.convert_ids_to_tokens(input_dict[<span class="hljs-string">&quot;input_ids&quot;</span>].numpy()[<span class="hljs-number">0</span>])
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),cr=new ze({}),hr=new B({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2309",parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),fn=new Pe({props:{$$slots:{default:[ry]},$$scope:{ctx:Q}}}),gr=new B({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2321",parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForSequenceClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForSequenceClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForSequenceClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification (or regression if config.num_labels==1) loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),gn=new Pe({props:{$$slots:{default:[ay]},$$scope:{ctx:Q}}}),ur=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForSequenceClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
inputs["labels"] = tf.reshape(tf.constant(1), (-1, 1))  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForSequenceClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForSequenceClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(tf.constant(<span class="hljs-number">1</span>), (-<span class="hljs-number">1</span>, <span class="hljs-number">1</span>))  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),_r=new ze({}),wr=new B({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2546",parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_n=new Pe({props:{$$slots:{default:[iy]},$$scope:{ctx:Q}}}),br=new B({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[<built-in function array>, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2561",parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForTokenClassification.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForTokenClassification.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForTokenClassification.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForTokenClassification.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Labels for computing the token classification loss. Indices should be in <code>[0, ..., config.num_labels - 1]</code>.`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),wn=new Pe({props:{$$slots:{default:[ly]},$$scope:{ctx:Q}}}),yr=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForTokenClassification.from_pretrained("allenai/longformer-base-4096")

inputs = tokenizer("Hello, my dog is cute", return_tensors="tf")
input_ids = inputs["input_ids"]
inputs["labels"] = tf.reshape(
    tf.constant([1] * tf.size(input_ids).numpy()), (-1, tf.size(input_ids))
)  # Batch size 1

outputs = model(inputs)
loss = outputs.loss
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForTokenClassification
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForTokenClassification.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = tokenizer(<span class="hljs-string">&quot;Hello, my dog is cute&quot;</span>, return_tensors=<span class="hljs-string">&quot;tf&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>input_ids = inputs[<span class="hljs-string">&quot;input_ids&quot;</span>]
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs[<span class="hljs-string">&quot;labels&quot;</span>] = tf.reshape(
<span class="hljs-meta">... </span>    tf.constant([<span class="hljs-number">1</span>] * tf.size(input_ids).numpy()), (-<span class="hljs-number">1</span>, tf.size(input_ids))
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># Batch size 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)
<span class="hljs-meta">&gt;&gt;&gt; </span>loss = outputs.loss
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),Lr=new ze({}),$r=new B({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2409",parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new Pe({props:{$$slots:{default:[dy]},$$scope:{ctx:Q}}}),Er=new B({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:": typing.Union[typing.List[tensorflow.python.framework.ops.Tensor], typing.List[numpy.ndarray], typing.List[tensorflow.python.keras.engine.keras_tensor.KerasTensor], typing.Dict[str, tensorflow.python.framework.ops.Tensor], typing.Dict[str, numpy.ndarray], typing.Dict[str, tensorflow.python.keras.engine.keras_tensor.KerasTensor], tensorflow.python.framework.ops.Tensor, numpy.ndarray, tensorflow.python.keras.engine.keras_tensor.KerasTensor, NoneType] = None"},{name:"attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"head_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"token_type_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"position_ids",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"global_attention_mask",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"inputs_embeds",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"output_attentions",val:": typing.Optional[bool] = None"},{name:"output_hidden_states",val:": typing.Optional[bool] = None"},{name:"return_dict",val:": typing.Optional[bool] = None"},{name:"labels",val:": typing.Union[numpy.ndarray, tensorflow.python.framework.ops.Tensor, NoneType] = None"},{name:"training",val:": typing.Optional[bool] = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2429",parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>np.ndarray</code> or <code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
Optionally, instead of passing <code>input_ids</code> you can choose to directly pass an embedded representation. This
is useful if you want more control over how to convert <code>input_ids</code> indices into associated vectors than the
model&#x2019;s internal embedding lookup matrix.`,name:"inputs_embeds"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_attentions",description:`<strong>output_attentions</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the attentions tensors of all attention layers. See <code>attentions</code> under returned
tensors for more detail. This argument can be used only in eager mode, in graph mode the value in the
config will be used instead.`,name:"output_attentions"},{anchor:"transformers.TFLongformerForMultipleChoice.call.output_hidden_states",description:`<strong>output_hidden_states</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return the hidden states of all layers. See <code>hidden_states</code> under returned tensors for
more detail. This argument can be used only in eager mode, in graph mode the value in the config will be
used instead.`,name:"output_hidden_states"},{anchor:"transformers.TFLongformerForMultipleChoice.call.return_dict",description:`<strong>return_dict</strong> (<code>bool</code>, <em>optional</em>) &#x2014;
Whether or not to return a <a href="/docs/transformers/master/en/main_classes/output#transformers.file_utils.ModelOutput">ModelOutput</a> instead of a plain tuple. This argument can be used
in eager mode, in graph mode the value will always be set to True.`,name:"return_dict"},{anchor:"transformers.TFLongformerForMultipleChoice.call.training",description:`<strong>training</strong> (<code>bool</code>, <em>optional</em>, defaults to <code>False</code>) &#x2014;
Whether or not to use the model in training mode (some modules like dropout modules have different
behaviors between training and evaluation).`,name:"training"},{anchor:"transformers.TFLongformerForMultipleChoice.call.labels",description:`<strong>labels</strong> (<code>tf.Tensor</code> of shape <code>(batch_size,)</code>, <em>optional</em>) &#x2014;
Labels for computing the multiple choice classification loss. Indices should be in <code>[0, ..., num_choices]</code>
where <code>num_choices</code> is the size of the second dimension of the input tensors. (See <code>input_ids</code> above)`,name:"labels"}],returnDescription:`
<p>A <a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or a tuple of <code>tf.Tensor</code> (if
<code>return_dict=False</code> is passed or when <code>config.return_dict=False</code>) comprising various elements depending on the
configuration (<a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig"
>LongformerConfig</a>) and inputs.</p>
<ul>
<li>
<p><strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) \u2014 Classification loss.</p>
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
<p><strong>attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x + attention_window + 1)</code>, where <code>x</code> is the number of tokens with global attention mask.</p>
<p>Local attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token in the sequence to every token with
global attention (first <code>x</code> values) and to every token in the attention window (remaining \`attention_window</p>
<ul>
<li>1<code>values). Note that the first</code>x<code>values refer to tokens with fixed positions in the text, but the remaining</code>attention_window + 1<code>values refer to tokens with relative positions: the attention weight of a token to itself is located at index</code>x + attention_window / 2<code>and the</code>attention_window / 2<code>preceding (succeeding) values are the attention weights to the</code>attention_window / 2<code>preceding (succeeding) tokens. If the attention window contains a token with global attention, the attention weight at the corresponding index is set to 0; the value should be accessed from the first</code>x<code>attention weights. If a token has global attention, the attention weights to all other tokens in</code>attentions<code>is set to 0, the values should be accessed from</code>global_attentions\`.</li>
</ul>
</li>
<li>
<p><strong>global_attentions</strong> (<code>tuple(tf.Tensor)</code>, <em>optional</em>, returned when <code>output_attentions=True</code> is passed or when <code>config.output_attentions=True</code>) \u2014 Tuple of <code>tf.Tensor</code> (one for each layer) of shape <code>(batch_size, num_heads, sequence_length, x)</code>, where <code>x</code>
is the number of tokens with global attention mask.</p>
<p>Global attentions weights after the attention softmax, used to compute the weighted average in the
self-attention heads. Those are the attention weights from every token with global attention to every token
in the sequence.</p>
</li>
</ul>
`,returnType:`
<p><a
  href="/docs/transformers/master/en/model_doc/longformer#transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput"
>transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput</a> or <code>tuple(tf.Tensor)</code></p>
`}}),Tn=new Pe({props:{$$slots:{default:[cy]},$$scope:{ctx:Q}}}),zr=new at({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
import tensorflow as tf

tokenizer = LongformerTokenizer.from_pretrained("allenai/longformer-base-4096")
model = TFLongformerForMultipleChoice.from_pretrained("allenai/longformer-base-4096")

prompt = "In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced."
choice0 = "It is eaten with a fork and a knife."
choice1 = "It is eaten while held in the hand."

encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors="tf", padding=True)
inputs = {k: tf.expand_dims(v, 0) for k, v in encoding.items()}
outputs = model(inputs)  # batch size is 1

# the linear classifier still needs to be trained
logits = outputs.logits`,highlighted:`<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">from</span> transformers <span class="hljs-keyword">import</span> LongformerTokenizer, TFLongformerForMultipleChoice
<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-keyword">import</span> tensorflow <span class="hljs-keyword">as</span> tf

<span class="hljs-meta">&gt;&gt;&gt; </span>tokenizer = LongformerTokenizer.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>model = TFLongformerForMultipleChoice.from_pretrained(<span class="hljs-string">&quot;allenai/longformer-base-4096&quot;</span>)

<span class="hljs-meta">&gt;&gt;&gt; </span>prompt = <span class="hljs-string">&quot;In Italy, pizza served in formal settings, such as at a restaurant, is presented unsliced.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice0 = <span class="hljs-string">&quot;It is eaten with a fork and a knife.&quot;</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>choice1 = <span class="hljs-string">&quot;It is eaten while held in the hand.&quot;</span>

<span class="hljs-meta">&gt;&gt;&gt; </span>encoding = tokenizer([prompt, prompt], [choice0, choice1], return_tensors=<span class="hljs-string">&quot;tf&quot;</span>, padding=<span class="hljs-literal">True</span>)
<span class="hljs-meta">&gt;&gt;&gt; </span>inputs = {k: tf.expand_dims(v, <span class="hljs-number">0</span>) <span class="hljs-keyword">for</span> k, v <span class="hljs-keyword">in</span> encoding.items()}
<span class="hljs-meta">&gt;&gt;&gt; </span>outputs = model(inputs)  <span class="hljs-comment"># batch size is 1</span>

<span class="hljs-meta">&gt;&gt;&gt; </span><span class="hljs-comment"># the linear classifier still needs to be trained</span>
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){f=r("meta"),x=l(),g=r("h1"),u=r("a"),$=r("span"),k(w.$$.fragment),_=l(),M=r("span"),me=n("Longformer"),J=l(),E=r("h2"),Z=r("a"),I=r("span"),k(ee.$$.fragment),pe=l(),S=r("span"),fe=n("Overview"),le=l(),G=r("p"),P=n("The Longformer model was presented in "),te=r("a"),X=n("Longformer: The Long-Document Transformer"),z=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),C=l(),ne=r("p"),U=n("The abstract from the paper is the following:"),de=l(),se=r("p"),D=r("em"),ge=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ce=l(),q=r("p"),ue=n("Tips:"),W=l(),re=r("ul"),K=r("li"),H=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),ae=r("code"),_e=n("token_type_ids"),j=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=r("code"),R=n("tokenizer.sep_token"),we=n(` (or
`),m=r("code"),F=n("</s>"),Y=n(")."),be=l(),he=r("p"),N=n("This model was contributed by "),ve=r("a"),$e=n("beltagy"),Fe=n(". The Authors\u2019 code can be found "),O=r("a"),V=n("here"),xe=n("."),ye=l(),A=r("h2"),ke=r("a"),Te=r("span"),k(oe.$$.fragment),Me=l(),Qa=r("span"),Eh=n("Longformer Self Attention"),Zl=l(),Le=r("p"),zh=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),ed=new Oo,td=n(` previous tokens and
`),od=new Oo,nd=n(" succeding tokens with "),sd=new Oo,rd=n(` being the window length as defined in
`),Ua=r("code"),qh=n("config.attention_window"),Ch=n(". Note that "),Ha=r("code"),Oh=n("config.attention_window"),Ph=n(" can be of type "),Ra=r("code"),jh=n("List"),Nh=n(` to define a
different `),ad=new Oo,id=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Va=r("code"),Ah=n("BertSelfAttention"),Ih=n("."),ld=l(),ut=r("p"),Sh=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),dd=new Oo,cd=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Ga=r("em"),Dh=n("symmetric"),Bh=n("."),hd=l(),_t=r("p"),Wh=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Ka=r("code"),Qh=n("global_attention_mask"),Uh=n(` at run-time appropriately. All Longformer models employ the following logic for
`),Ja=r("code"),Hh=n("global_attention_mask"),Rh=n(":"),md=l(),jo=r("ul"),Xa=r("li"),Vh=n("0: the token attends \u201Clocally\u201D,"),Gh=l(),Ya=r("li"),Kh=n("1: the token attends \u201Cglobally\u201D."),pd=l(),No=r("p"),Jh=n("For more information please also refer to "),Pr=r("a"),Xh=n("forward()"),Yh=n(" method."),fd=l(),Ve=r("p"),Zh=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),gd=new Oo,ud=n(` to
`),_d=new Oo,wd=n(", with "),kd=new Oo,vd=n(" being the sequence length and "),Td=new Oo,bd=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),yd=l(),Ao=r("p"),em=n("For more information, please refer to the official "),bn=r("a"),tm=n("paper"),om=n("."),Ld=l(),jt=r("h2"),Io=r("a"),Za=r("span"),k(yn.$$.fragment),nm=l(),ei=r("span"),sm=n("Training"),$d=l(),Nt=r("p"),jr=r("a"),rm=n("LongformerForMaskedLM"),am=n(" is trained the exact same way "),Nr=r("a"),im=n("RobertaForMaskedLM"),lm=n(` is
trained and should be used as follows:`),Fd=l(),k(Ln.$$.fragment),xd=l(),At=r("h2"),So=r("a"),ti=r("span"),k($n.$$.fragment),dm=l(),oi=r("span"),cm=n("LongformerConfig"),Md=l(),je=r("div"),k(Fn.$$.fragment),hm=l(),It=r("p"),mm=n("This is the configuration class to store the configuration of a "),Ar=r("a"),pm=n("LongformerModel"),fm=n(" or a "),Ir=r("a"),gm=n("TFLongformerModel"),um=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),_m=l(),St=r("p"),wm=n("This is the configuration class to store the configuration of a "),Sr=r("a"),km=n("LongformerModel"),vm=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),xn=r("a"),Tm=n("roberta-base"),bm=n(" architecture with a sequence length 4,096."),ym=l(),Dt=r("p"),Lm=n("The "),Dr=r("a"),$m=n("LongformerConfig"),Fm=n(" class directly inherits "),Br=r("a"),xm=n("RobertaConfig"),Mm=n(`. It reuses the same defaults. Please check the
parent class for more information.`),Em=l(),ni=r("p"),zm=n("Example:"),qm=l(),k(Mn.$$.fragment),Ed=l(),Bt=r("h2"),Do=r("a"),si=r("span"),k(En.$$.fragment),Cm=l(),ri=r("span"),Om=n("LongformerTokenizer"),zd=l(),pt=r("div"),k(zn.$$.fragment),Pm=l(),ai=r("p"),jm=n("Construct a Longformer tokenizer."),Nm=l(),Bo=r("p"),Wr=r("a"),Am=n("LongformerTokenizer"),Im=n(" is identical to "),Qr=r("a"),Sm=n("RobertaTokenizer"),Dm=n(`. Refer to the superclass for usage examples and
documentation concerning parameters.`),qd=l(),Wt=r("h2"),Wo=r("a"),ii=r("span"),k(qn.$$.fragment),Bm=l(),li=r("span"),Wm=n("LongformerTokenizerFast"),Cd=l(),ft=r("div"),k(Cn.$$.fragment),Qm=l(),On=r("p"),Um=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),di=r("em"),Hm=n("tokenizers"),Rm=n(" library)."),Vm=l(),Qo=r("p"),Ur=r("a"),Gm=n("LongformerTokenizerFast"),Km=n(" is identical to "),Hr=r("a"),Jm=n("RobertaTokenizerFast"),Xm=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Od=l(),Qt=r("h2"),Uo=r("a"),ci=r("span"),k(Pn.$$.fragment),Ym=l(),hi=r("span"),Zm=n("Longformer specific outputs"),Pd=l(),Ut=r("div"),k(jn.$$.fragment),ep=l(),mi=r("p"),tp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),jd=l(),Ht=r("div"),k(Nn.$$.fragment),op=l(),pi=r("p"),np=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Nd=l(),Rt=r("div"),k(An.$$.fragment),sp=l(),fi=r("p"),rp=n("Base class for masked language models outputs."),Ad=l(),Vt=r("div"),k(In.$$.fragment),ap=l(),gi=r("p"),ip=n("Base class for outputs of question answering Longformer models."),Id=l(),Gt=r("div"),k(Sn.$$.fragment),lp=l(),ui=r("p"),dp=n("Base class for outputs of sentence classification models."),Sd=l(),Kt=r("div"),k(Dn.$$.fragment),cp=l(),_i=r("p"),hp=n("Base class for outputs of multiple choice Longformer models."),Dd=l(),Jt=r("div"),k(Bn.$$.fragment),mp=l(),wi=r("p"),pp=n("Base class for outputs of token classification models."),Bd=l(),Xt=r("div"),k(Wn.$$.fragment),fp=l(),ki=r("p"),gp=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Wd=l(),Yt=r("div"),k(Qn.$$.fragment),up=l(),vi=r("p"),_p=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Qd=l(),Zt=r("div"),k(Un.$$.fragment),wp=l(),Ti=r("p"),kp=n("Base class for masked language models outputs."),Ud=l(),eo=r("div"),k(Hn.$$.fragment),vp=l(),bi=r("p"),Tp=n("Base class for outputs of question answering Longformer models."),Hd=l(),to=r("div"),k(Rn.$$.fragment),bp=l(),yi=r("p"),yp=n("Base class for outputs of sentence classification models."),Rd=l(),oo=r("div"),k(Vn.$$.fragment),Lp=l(),Li=r("p"),$p=n("Base class for outputs of multiple choice models."),Vd=l(),no=r("div"),k(Gn.$$.fragment),Fp=l(),$i=r("p"),xp=n("Base class for outputs of token classification models."),Gd=l(),so=r("h2"),Ho=r("a"),Fi=r("span"),k(Kn.$$.fragment),Mp=l(),xi=r("span"),Ep=n("LongformerModel"),Kd=l(),qe=r("div"),k(Jn.$$.fragment),zp=l(),Mi=r("p"),qp=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Cp=l(),Xn=r("p"),Op=n("This model inherits from "),Rr=r("a"),Pp=n("PreTrainedModel"),jp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Np=l(),Yn=r("p"),Ap=n("This model is also a PyTorch "),Zn=r("a"),Ip=n("torch.nn.Module"),Sp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dp=l(),ro=r("p"),Bp=n("This class copied code from "),Vr=r("a"),Wp=n("RobertaModel"),Qp=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),es=r("a"),Up=n(`Longformer:
the Long-Document Transformer`),Hp=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),Rp=l(),ts=r("p"),Vp=n("The self-attention module "),Ei=r("code"),Gp=n("LongformerSelfAttention"),Kp=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Jp=l(),Ge=r("div"),k(os.$$.fragment),Xp=l(),ao=r("p"),Yp=n("The "),Gr=r("a"),Zp=n("LongformerModel"),ef=n(" forward method, overrides the "),zi=r("code"),tf=n("__call__"),of=n(" special method."),nf=l(),k(Ro.$$.fragment),sf=l(),qi=r("p"),rf=n("Examples:"),af=l(),k(ns.$$.fragment),Jd=l(),io=r("h2"),Vo=r("a"),Ci=r("span"),k(ss.$$.fragment),lf=l(),Oi=r("span"),df=n("LongformerForMaskedLM"),Xd=l(),We=r("div"),k(rs.$$.fragment),cf=l(),as=r("p"),hf=n("Longformer Model with a "),Pi=r("code"),mf=n("language modeling"),pf=n(" head on top."),ff=l(),is=r("p"),gf=n("This model inherits from "),Kr=r("a"),uf=n("PreTrainedModel"),_f=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wf=l(),ls=r("p"),kf=n("This model is also a PyTorch "),ds=r("a"),vf=n("torch.nn.Module"),Tf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),bf=l(),Ke=r("div"),k(cs.$$.fragment),yf=l(),lo=r("p"),Lf=n("The "),Jr=r("a"),$f=n("LongformerForMaskedLM"),Ff=n(" forward method, overrides the "),ji=r("code"),xf=n("__call__"),Mf=n(" special method."),Ef=l(),k(Go.$$.fragment),zf=l(),Ni=r("p"),qf=n("Examples:"),Cf=l(),k(hs.$$.fragment),Yd=l(),co=r("h2"),Ko=r("a"),Ai=r("span"),k(ms.$$.fragment),Of=l(),Ii=r("span"),Pf=n("LongformerForSequenceClassification"),Zd=l(),Qe=r("div"),k(ps.$$.fragment),jf=l(),Si=r("p"),Nf=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Af=l(),fs=r("p"),If=n("This model inherits from "),Xr=r("a"),Sf=n("PreTrainedModel"),Df=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bf=l(),gs=r("p"),Wf=n("This model is also a PyTorch "),us=r("a"),Qf=n("torch.nn.Module"),Uf=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hf=l(),Ce=r("div"),k(_s.$$.fragment),Rf=l(),ho=r("p"),Vf=n("The "),Yr=r("a"),Gf=n("LongformerForSequenceClassification"),Kf=n(" forward method, overrides the "),Di=r("code"),Jf=n("__call__"),Xf=n(" special method."),Yf=l(),k(Jo.$$.fragment),Zf=l(),Bi=r("p"),eg=n("Example of single-label classification:"),tg=l(),k(ws.$$.fragment),og=l(),Wi=r("p"),ng=n("Example of multi-label classification:"),sg=l(),k(ks.$$.fragment),ec=l(),mo=r("h2"),Xo=r("a"),Qi=r("span"),k(vs.$$.fragment),rg=l(),Ui=r("span"),ag=n("LongformerForMultipleChoice"),tc=l(),Ue=r("div"),k(Ts.$$.fragment),ig=l(),Hi=r("p"),lg=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),dg=l(),bs=r("p"),cg=n("This model inherits from "),Zr=r("a"),hg=n("PreTrainedModel"),mg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),pg=l(),ys=r("p"),fg=n("This model is also a PyTorch "),Ls=r("a"),gg=n("torch.nn.Module"),ug=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_g=l(),Je=r("div"),k($s.$$.fragment),wg=l(),po=r("p"),kg=n("The "),ea=r("a"),vg=n("LongformerForMultipleChoice"),Tg=n(" forward method, overrides the "),Ri=r("code"),bg=n("__call__"),yg=n(" special method."),Lg=l(),k(Yo.$$.fragment),$g=l(),Vi=r("p"),Fg=n("Example:"),xg=l(),k(Fs.$$.fragment),oc=l(),fo=r("h2"),Zo=r("a"),Gi=r("span"),k(xs.$$.fragment),Mg=l(),Ki=r("span"),Eg=n("LongformerForTokenClassification"),nc=l(),He=r("div"),k(Ms.$$.fragment),zg=l(),Ji=r("p"),qg=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Cg=l(),Es=r("p"),Og=n("This model inherits from "),ta=r("a"),Pg=n("PreTrainedModel"),jg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ng=l(),zs=r("p"),Ag=n("This model is also a PyTorch "),qs=r("a"),Ig=n("torch.nn.Module"),Sg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dg=l(),Xe=r("div"),k(Cs.$$.fragment),Bg=l(),go=r("p"),Wg=n("The "),oa=r("a"),Qg=n("LongformerForTokenClassification"),Ug=n(" forward method, overrides the "),Xi=r("code"),Hg=n("__call__"),Rg=n(" special method."),Vg=l(),k(en.$$.fragment),Gg=l(),Yi=r("p"),Kg=n("Example:"),Jg=l(),k(Os.$$.fragment),sc=l(),uo=r("h2"),tn=r("a"),Zi=r("span"),k(Ps.$$.fragment),Xg=l(),el=r("span"),Yg=n("LongformerForQuestionAnswering"),rc=l(),Re=r("div"),k(js.$$.fragment),Zg=l(),_o=r("p"),eu=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),tl=r("code"),tu=n("span start logits"),ou=n(" and "),ol=r("code"),nu=n("span end logits"),su=n(")."),ru=l(),Ns=r("p"),au=n("This model inherits from "),na=r("a"),iu=n("PreTrainedModel"),lu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),du=l(),As=r("p"),cu=n("This model is also a PyTorch "),Is=r("a"),hu=n("torch.nn.Module"),mu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),pu=l(),Ye=r("div"),k(Ss.$$.fragment),fu=l(),wo=r("p"),gu=n("The "),sa=r("a"),uu=n("LongformerForQuestionAnswering"),_u=n(" forward method, overrides the "),nl=r("code"),wu=n("__call__"),ku=n(" special method."),vu=l(),k(on.$$.fragment),Tu=l(),sl=r("p"),bu=n("Examples:"),yu=l(),k(Ds.$$.fragment),ac=l(),ko=r("h2"),nn=r("a"),rl=r("span"),k(Bs.$$.fragment),Lu=l(),al=r("span"),$u=n("TFLongformerModel"),ic=l(),Ee=r("div"),k(Ws.$$.fragment),Fu=l(),il=r("p"),xu=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Mu=l(),Qs=r("p"),Eu=n("This model inherits from "),ra=r("a"),zu=n("TFPreTrainedModel"),qu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cu=l(),Us=r("p"),Ou=n("This model is also a "),Hs=r("a"),Pu=n("tf.keras.Model"),ju=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nu=l(),k(sn.$$.fragment),Au=l(),vo=r("p"),Iu=n("This class copies code from "),aa=r("a"),Su=n("TFRobertaModel"),Du=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Rs=r("a"),Bu=n("Longformer: the Long-Document Transformer"),Wu=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Qu=l(),Vs=r("p"),Uu=n("The self-attention module "),ll=r("code"),Hu=n("TFLongformerSelfAttention"),Ru=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Vu=l(),wt=r("div"),k(Gs.$$.fragment),Gu=l(),To=r("p"),Ku=n("The "),ia=r("a"),Ju=n("TFLongformerModel"),Xu=n(" forward method, overrides the "),dl=r("code"),Yu=n("__call__"),Zu=n(" special method."),e_=l(),k(rn.$$.fragment),lc=l(),bo=r("h2"),an=r("a"),cl=r("span"),k(Ks.$$.fragment),t_=l(),hl=r("span"),o_=n("TFLongformerForMaskedLM"),dc=l(),Ne=r("div"),k(Js.$$.fragment),n_=l(),Xs=r("p"),s_=n("Longformer Model with a "),ml=r("code"),r_=n("language modeling"),a_=n(" head on top."),i_=l(),Ys=r("p"),l_=n("This model inherits from "),la=r("a"),d_=n("TFPreTrainedModel"),c_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),h_=l(),Zs=r("p"),m_=n("This model is also a "),er=r("a"),p_=n("tf.keras.Model"),f_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),g_=l(),k(ln.$$.fragment),u_=l(),Ze=r("div"),k(tr.$$.fragment),__=l(),yo=r("p"),w_=n("The "),da=r("a"),k_=n("TFLongformerForMaskedLM"),v_=n(" forward method, overrides the "),pl=r("code"),T_=n("__call__"),b_=n(" special method."),y_=l(),k(dn.$$.fragment),L_=l(),fl=r("p"),$_=n("Example:"),F_=l(),k(or.$$.fragment),cc=l(),Lo=r("h2"),cn=r("a"),gl=r("span"),k(nr.$$.fragment),x_=l(),ul=r("span"),M_=n("TFLongformerForQuestionAnswering"),hc=l(),Ae=r("div"),k(sr.$$.fragment),E_=l(),$o=r("p"),z_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),_l=r("code"),q_=n("span start logits"),C_=n(" and "),wl=r("code"),O_=n("span end logits"),P_=n(")."),j_=l(),rr=r("p"),N_=n("This model inherits from "),ca=r("a"),A_=n("TFPreTrainedModel"),I_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),S_=l(),ar=r("p"),D_=n("This model is also a "),ir=r("a"),B_=n("tf.keras.Model"),W_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Q_=l(),k(hn.$$.fragment),U_=l(),et=r("div"),k(lr.$$.fragment),H_=l(),Fo=r("p"),R_=n("The "),ha=r("a"),V_=n("TFLongformerForQuestionAnswering"),G_=n(" forward method, overrides the "),kl=r("code"),K_=n("__call__"),J_=n(" special method."),X_=l(),k(mn.$$.fragment),Y_=l(),vl=r("p"),Z_=n("Example:"),ew=l(),k(dr.$$.fragment),mc=l(),xo=r("h2"),pn=r("a"),Tl=r("span"),k(cr.$$.fragment),tw=l(),bl=r("span"),ow=n("TFLongformerForSequenceClassification"),pc=l(),Ie=r("div"),k(hr.$$.fragment),nw=l(),yl=r("p"),sw=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),rw=l(),mr=r("p"),aw=n("This model inherits from "),ma=r("a"),iw=n("TFPreTrainedModel"),lw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dw=l(),pr=r("p"),cw=n("This model is also a "),fr=r("a"),hw=n("tf.keras.Model"),mw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),pw=l(),k(fn.$$.fragment),fw=l(),tt=r("div"),k(gr.$$.fragment),gw=l(),Mo=r("p"),uw=n("The "),pa=r("a"),_w=n("TFLongformerForSequenceClassification"),ww=n(" forward method, overrides the "),Ll=r("code"),kw=n("__call__"),vw=n(" special method."),Tw=l(),k(gn.$$.fragment),bw=l(),$l=r("p"),yw=n("Example:"),Lw=l(),k(ur.$$.fragment),fc=l(),Eo=r("h2"),un=r("a"),Fl=r("span"),k(_r.$$.fragment),$w=l(),xl=r("span"),Fw=n("TFLongformerForTokenClassification"),gc=l(),Se=r("div"),k(wr.$$.fragment),xw=l(),Ml=r("p"),Mw=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ew=l(),kr=r("p"),zw=n("This model inherits from "),fa=r("a"),qw=n("TFPreTrainedModel"),Cw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ow=l(),vr=r("p"),Pw=n("This model is also a "),Tr=r("a"),jw=n("tf.keras.Model"),Nw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Aw=l(),k(_n.$$.fragment),Iw=l(),ot=r("div"),k(br.$$.fragment),Sw=l(),zo=r("p"),Dw=n("The "),ga=r("a"),Bw=n("TFLongformerForTokenClassification"),Ww=n(" forward method, overrides the "),El=r("code"),Qw=n("__call__"),Uw=n(" special method."),Hw=l(),k(wn.$$.fragment),Rw=l(),zl=r("p"),Vw=n("Example:"),Gw=l(),k(yr.$$.fragment),uc=l(),qo=r("h2"),kn=r("a"),ql=r("span"),k(Lr.$$.fragment),Kw=l(),Cl=r("span"),Jw=n("TFLongformerForMultipleChoice"),_c=l(),De=r("div"),k($r.$$.fragment),Xw=l(),Ol=r("p"),Yw=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Zw=l(),Fr=r("p"),ek=n("This model inherits from "),ua=r("a"),tk=n("TFPreTrainedModel"),ok=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nk=l(),xr=r("p"),sk=n("This model is also a "),Mr=r("a"),rk=n("tf.keras.Model"),ak=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ik=l(),k(vn.$$.fragment),lk=l(),nt=r("div"),k(Er.$$.fragment),dk=l(),Co=r("p"),ck=n("The "),_a=r("a"),hk=n("TFLongformerForMultipleChoice"),mk=n(" forward method, overrides the "),Pl=r("code"),pk=n("__call__"),fk=n(" special method."),gk=l(),k(Tn.$$.fragment),uk=l(),jl=r("p"),_k=n("Example:"),wk=l(),k(zr.$$.fragment),this.h()},l(o){const p=Rb('[data-svelte="svelte-1phssyn"]',document.head);f=a(p,"META",{name:!0,content:!0}),p.forEach(t),x=d(o),g=a(o,"H1",{class:!0});var qr=i(g);u=a(qr,"A",{id:!0,class:!0,href:!0});var Nl=i(u);$=a(Nl,"SPAN",{});var Al=i($);v(w.$$.fragment,Al),Al.forEach(t),Nl.forEach(t),_=d(qr),M=a(qr,"SPAN",{});var Il=i(M);me=s(Il,"Longformer"),Il.forEach(t),qr.forEach(t),J=d(o),E=a(o,"H2",{class:!0});var Cr=i(E);Z=a(Cr,"A",{id:!0,class:!0,href:!0});var Sl=i(Z);I=a(Sl,"SPAN",{});var Dl=i(I);v(ee.$$.fragment,Dl),Dl.forEach(t),Sl.forEach(t),pe=d(Cr),S=a(Cr,"SPAN",{});var Bl=i(S);fe=s(Bl,"Overview"),Bl.forEach(t),Cr.forEach(t),le=d(o),G=a(o,"P",{});var Or=i(G);P=s(Or,"The Longformer model was presented in "),te=a(Or,"A",{href:!0,rel:!0});var Wl=i(te);X=s(Wl,"Longformer: The Long-Document Transformer"),Wl.forEach(t),z=s(Or," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),Or.forEach(t),C=d(o),ne=a(o,"P",{});var Ql=i(ne);U=s(Ql,"The abstract from the paper is the following:"),Ql.forEach(t),de=d(o),se=a(o,"P",{});var Ul=i(se);D=a(Ul,"EM",{});var Hl=i(D);ge=s(Hl,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),Hl.forEach(t),Ul.forEach(t),ce=d(o),q=a(o,"P",{});var Rl=i(q);ue=s(Rl,"Tips:"),Rl.forEach(t),W=d(o),re=a(o,"UL",{});var Vl=i(re);K=a(Vl,"LI",{});var gt=i(K);H=s(gt,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),ae=a(gt,"CODE",{});var Gl=i(ae);_e=s(Gl,"token_type_ids"),Gl.forEach(t),j=s(gt,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=a(gt,"CODE",{});var Kl=i(ie);R=s(Kl,"tokenizer.sep_token"),Kl.forEach(t),we=s(gt,` (or
`),m=a(gt,"CODE",{});var kk=i(m);F=s(kk,"</s>"),kk.forEach(t),Y=s(gt,")."),gt.forEach(t),Vl.forEach(t),be=d(o),he=a(o,"P",{});var wa=i(he);N=s(wa,"This model was contributed by "),ve=a(wa,"A",{href:!0,rel:!0});var vk=i(ve);$e=s(vk,"beltagy"),vk.forEach(t),Fe=s(wa,". The Authors\u2019 code can be found "),O=a(wa,"A",{href:!0,rel:!0});var Tk=i(O);V=s(Tk,"here"),Tk.forEach(t),xe=s(wa,"."),wa.forEach(t),ye=d(o),A=a(o,"H2",{class:!0});var kc=i(A);ke=a(kc,"A",{id:!0,class:!0,href:!0});var bk=i(ke);Te=a(bk,"SPAN",{});var yk=i(Te);v(oe.$$.fragment,yk),yk.forEach(t),bk.forEach(t),Me=d(kc),Qa=a(kc,"SPAN",{});var Lk=i(Qa);Eh=s(Lk,"Longformer Self Attention"),Lk.forEach(t),kc.forEach(t),Zl=d(o),Le=a(o,"P",{});var Oe=i(Le);zh=s(Oe,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),ed=Po(Oe),td=s(Oe,` previous tokens and
`),od=Po(Oe),nd=s(Oe," succeding tokens with "),sd=Po(Oe),rd=s(Oe,` being the window length as defined in
`),Ua=a(Oe,"CODE",{});var $k=i(Ua);qh=s($k,"config.attention_window"),$k.forEach(t),Ch=s(Oe,". Note that "),Ha=a(Oe,"CODE",{});var Fk=i(Ha);Oh=s(Fk,"config.attention_window"),Fk.forEach(t),Ph=s(Oe," can be of type "),Ra=a(Oe,"CODE",{});var xk=i(Ra);jh=s(xk,"List"),xk.forEach(t),Nh=s(Oe,` to define a
different `),ad=Po(Oe),id=s(Oe,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Va=a(Oe,"CODE",{});var Mk=i(Va);Ah=s(Mk,"BertSelfAttention"),Mk.forEach(t),Ih=s(Oe,"."),Oe.forEach(t),ld=d(o),ut=a(o,"P",{});var ka=i(ut);Sh=s(ka,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),dd=Po(ka),cd=s(ka,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Ga=a(ka,"EM",{});var Ek=i(Ga);Dh=s(Ek,"symmetric"),Ek.forEach(t),Bh=s(ka,"."),ka.forEach(t),hd=d(o),_t=a(o,"P",{});var va=i(_t);Wh=s(va,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Ka=a(va,"CODE",{});var zk=i(Ka);Qh=s(zk,"global_attention_mask"),zk.forEach(t),Uh=s(va,` at run-time appropriately. All Longformer models employ the following logic for
`),Ja=a(va,"CODE",{});var qk=i(Ja);Hh=s(qk,"global_attention_mask"),qk.forEach(t),Rh=s(va,":"),va.forEach(t),md=d(o),jo=a(o,"UL",{});var vc=i(jo);Xa=a(vc,"LI",{});var Ck=i(Xa);Vh=s(Ck,"0: the token attends \u201Clocally\u201D,"),Ck.forEach(t),Gh=d(vc),Ya=a(vc,"LI",{});var Ok=i(Ya);Kh=s(Ok,"1: the token attends \u201Cglobally\u201D."),Ok.forEach(t),vc.forEach(t),pd=d(o),No=a(o,"P",{});var Tc=i(No);Jh=s(Tc,"For more information please also refer to "),Pr=a(Tc,"A",{href:!0});var Pk=i(Pr);Xh=s(Pk,"forward()"),Pk.forEach(t),Yh=s(Tc," method."),Tc.forEach(t),fd=d(o),Ve=a(o,"P",{});var kt=i(Ve);Zh=s(kt,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),gd=Po(kt),ud=s(kt,` to
`),_d=Po(kt),wd=s(kt,", with "),kd=Po(kt),vd=s(kt," being the sequence length and "),Td=Po(kt),bd=s(kt,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),kt.forEach(t),yd=d(o),Ao=a(o,"P",{});var bc=i(Ao);em=s(bc,"For more information, please refer to the official "),bn=a(bc,"A",{href:!0,rel:!0});var jk=i(bn);tm=s(jk,"paper"),jk.forEach(t),om=s(bc,"."),bc.forEach(t),Ld=d(o),jt=a(o,"H2",{class:!0});var yc=i(jt);Io=a(yc,"A",{id:!0,class:!0,href:!0});var Nk=i(Io);Za=a(Nk,"SPAN",{});var Ak=i(Za);v(yn.$$.fragment,Ak),Ak.forEach(t),Nk.forEach(t),nm=d(yc),ei=a(yc,"SPAN",{});var Ik=i(ei);sm=s(Ik,"Training"),Ik.forEach(t),yc.forEach(t),$d=d(o),Nt=a(o,"P",{});var Jl=i(Nt);jr=a(Jl,"A",{href:!0});var Sk=i(jr);rm=s(Sk,"LongformerForMaskedLM"),Sk.forEach(t),am=s(Jl," is trained the exact same way "),Nr=a(Jl,"A",{href:!0});var Dk=i(Nr);im=s(Dk,"RobertaForMaskedLM"),Dk.forEach(t),lm=s(Jl,` is
trained and should be used as follows:`),Jl.forEach(t),Fd=d(o),v(Ln.$$.fragment,o),xd=d(o),At=a(o,"H2",{class:!0});var Lc=i(At);So=a(Lc,"A",{id:!0,class:!0,href:!0});var Bk=i(So);ti=a(Bk,"SPAN",{});var Wk=i(ti);v($n.$$.fragment,Wk),Wk.forEach(t),Bk.forEach(t),dm=d(Lc),oi=a(Lc,"SPAN",{});var Qk=i(oi);cm=s(Qk,"LongformerConfig"),Qk.forEach(t),Lc.forEach(t),Md=d(o),je=a(o,"DIV",{class:!0});var it=i(je);v(Fn.$$.fragment,it),hm=d(it),It=a(it,"P",{});var Ta=i(It);mm=s(Ta,"This is the configuration class to store the configuration of a "),Ar=a(Ta,"A",{href:!0});var Uk=i(Ar);pm=s(Uk,"LongformerModel"),Uk.forEach(t),fm=s(Ta," or a "),Ir=a(Ta,"A",{href:!0});var Hk=i(Ir);gm=s(Hk,"TFLongformerModel"),Hk.forEach(t),um=s(Ta,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),Ta.forEach(t),_m=d(it),St=a(it,"P",{});var ba=i(St);wm=s(ba,"This is the configuration class to store the configuration of a "),Sr=a(ba,"A",{href:!0});var Rk=i(Sr);km=s(Rk,"LongformerModel"),Rk.forEach(t),vm=s(ba,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),xn=a(ba,"A",{href:!0,rel:!0});var Vk=i(xn);Tm=s(Vk,"roberta-base"),Vk.forEach(t),bm=s(ba," architecture with a sequence length 4,096."),ba.forEach(t),ym=d(it),Dt=a(it,"P",{});var ya=i(Dt);Lm=s(ya,"The "),Dr=a(ya,"A",{href:!0});var Gk=i(Dr);$m=s(Gk,"LongformerConfig"),Gk.forEach(t),Fm=s(ya," class directly inherits "),Br=a(ya,"A",{href:!0});var Kk=i(Br);xm=s(Kk,"RobertaConfig"),Kk.forEach(t),Mm=s(ya,`. It reuses the same defaults. Please check the
parent class for more information.`),ya.forEach(t),Em=d(it),ni=a(it,"P",{});var Jk=i(ni);zm=s(Jk,"Example:"),Jk.forEach(t),qm=d(it),v(Mn.$$.fragment,it),it.forEach(t),Ed=d(o),Bt=a(o,"H2",{class:!0});var $c=i(Bt);Do=a($c,"A",{id:!0,class:!0,href:!0});var Xk=i(Do);si=a(Xk,"SPAN",{});var Yk=i(si);v(En.$$.fragment,Yk),Yk.forEach(t),Xk.forEach(t),Cm=d($c),ri=a($c,"SPAN",{});var Zk=i(ri);Om=s(Zk,"LongformerTokenizer"),Zk.forEach(t),$c.forEach(t),zd=d(o),pt=a(o,"DIV",{class:!0});var La=i(pt);v(zn.$$.fragment,La),Pm=d(La),ai=a(La,"P",{});var ev=i(ai);jm=s(ev,"Construct a Longformer tokenizer."),ev.forEach(t),Nm=d(La),Bo=a(La,"P",{});var Xl=i(Bo);Wr=a(Xl,"A",{href:!0});var tv=i(Wr);Am=s(tv,"LongformerTokenizer"),tv.forEach(t),Im=s(Xl," is identical to "),Qr=a(Xl,"A",{href:!0});var ov=i(Qr);Sm=s(ov,"RobertaTokenizer"),ov.forEach(t),Dm=s(Xl,`. Refer to the superclass for usage examples and
documentation concerning parameters.`),Xl.forEach(t),La.forEach(t),qd=d(o),Wt=a(o,"H2",{class:!0});var Fc=i(Wt);Wo=a(Fc,"A",{id:!0,class:!0,href:!0});var nv=i(Wo);ii=a(nv,"SPAN",{});var sv=i(ii);v(qn.$$.fragment,sv),sv.forEach(t),nv.forEach(t),Bm=d(Fc),li=a(Fc,"SPAN",{});var rv=i(li);Wm=s(rv,"LongformerTokenizerFast"),rv.forEach(t),Fc.forEach(t),Cd=d(o),ft=a(o,"DIV",{class:!0});var $a=i(ft);v(Cn.$$.fragment,$a),Qm=d($a),On=a($a,"P",{});var xc=i(On);Um=s(xc,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),di=a(xc,"EM",{});var av=i(di);Hm=s(av,"tokenizers"),av.forEach(t),Rm=s(xc," library)."),xc.forEach(t),Vm=d($a),Qo=a($a,"P",{});var Yl=i(Qo);Ur=a(Yl,"A",{href:!0});var iv=i(Ur);Gm=s(iv,"LongformerTokenizerFast"),iv.forEach(t),Km=s(Yl," is identical to "),Hr=a(Yl,"A",{href:!0});var lv=i(Hr);Jm=s(lv,"RobertaTokenizerFast"),lv.forEach(t),Xm=s(Yl,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Yl.forEach(t),$a.forEach(t),Od=d(o),Qt=a(o,"H2",{class:!0});var Mc=i(Qt);Uo=a(Mc,"A",{id:!0,class:!0,href:!0});var dv=i(Uo);ci=a(dv,"SPAN",{});var cv=i(ci);v(Pn.$$.fragment,cv),cv.forEach(t),dv.forEach(t),Ym=d(Mc),hi=a(Mc,"SPAN",{});var hv=i(hi);Zm=s(hv,"Longformer specific outputs"),hv.forEach(t),Mc.forEach(t),Pd=d(o),Ut=a(o,"DIV",{class:!0});var Ec=i(Ut);v(jn.$$.fragment,Ec),ep=d(Ec),mi=a(Ec,"P",{});var mv=i(mi);tp=s(mv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),mv.forEach(t),Ec.forEach(t),jd=d(o),Ht=a(o,"DIV",{class:!0});var zc=i(Ht);v(Nn.$$.fragment,zc),op=d(zc),pi=a(zc,"P",{});var pv=i(pi);np=s(pv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),pv.forEach(t),zc.forEach(t),Nd=d(o),Rt=a(o,"DIV",{class:!0});var qc=i(Rt);v(An.$$.fragment,qc),sp=d(qc),fi=a(qc,"P",{});var fv=i(fi);rp=s(fv,"Base class for masked language models outputs."),fv.forEach(t),qc.forEach(t),Ad=d(o),Vt=a(o,"DIV",{class:!0});var Cc=i(Vt);v(In.$$.fragment,Cc),ap=d(Cc),gi=a(Cc,"P",{});var gv=i(gi);ip=s(gv,"Base class for outputs of question answering Longformer models."),gv.forEach(t),Cc.forEach(t),Id=d(o),Gt=a(o,"DIV",{class:!0});var Oc=i(Gt);v(Sn.$$.fragment,Oc),lp=d(Oc),ui=a(Oc,"P",{});var uv=i(ui);dp=s(uv,"Base class for outputs of sentence classification models."),uv.forEach(t),Oc.forEach(t),Sd=d(o),Kt=a(o,"DIV",{class:!0});var Pc=i(Kt);v(Dn.$$.fragment,Pc),cp=d(Pc),_i=a(Pc,"P",{});var _v=i(_i);hp=s(_v,"Base class for outputs of multiple choice Longformer models."),_v.forEach(t),Pc.forEach(t),Dd=d(o),Jt=a(o,"DIV",{class:!0});var jc=i(Jt);v(Bn.$$.fragment,jc),mp=d(jc),wi=a(jc,"P",{});var wv=i(wi);pp=s(wv,"Base class for outputs of token classification models."),wv.forEach(t),jc.forEach(t),Bd=d(o),Xt=a(o,"DIV",{class:!0});var Nc=i(Xt);v(Wn.$$.fragment,Nc),fp=d(Nc),ki=a(Nc,"P",{});var kv=i(ki);gp=s(kv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),kv.forEach(t),Nc.forEach(t),Wd=d(o),Yt=a(o,"DIV",{class:!0});var Ac=i(Yt);v(Qn.$$.fragment,Ac),up=d(Ac),vi=a(Ac,"P",{});var vv=i(vi);_p=s(vv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),vv.forEach(t),Ac.forEach(t),Qd=d(o),Zt=a(o,"DIV",{class:!0});var Ic=i(Zt);v(Un.$$.fragment,Ic),wp=d(Ic),Ti=a(Ic,"P",{});var Tv=i(Ti);kp=s(Tv,"Base class for masked language models outputs."),Tv.forEach(t),Ic.forEach(t),Ud=d(o),eo=a(o,"DIV",{class:!0});var Sc=i(eo);v(Hn.$$.fragment,Sc),vp=d(Sc),bi=a(Sc,"P",{});var bv=i(bi);Tp=s(bv,"Base class for outputs of question answering Longformer models."),bv.forEach(t),Sc.forEach(t),Hd=d(o),to=a(o,"DIV",{class:!0});var Dc=i(to);v(Rn.$$.fragment,Dc),bp=d(Dc),yi=a(Dc,"P",{});var yv=i(yi);yp=s(yv,"Base class for outputs of sentence classification models."),yv.forEach(t),Dc.forEach(t),Rd=d(o),oo=a(o,"DIV",{class:!0});var Bc=i(oo);v(Vn.$$.fragment,Bc),Lp=d(Bc),Li=a(Bc,"P",{});var Lv=i(Li);$p=s(Lv,"Base class for outputs of multiple choice models."),Lv.forEach(t),Bc.forEach(t),Vd=d(o),no=a(o,"DIV",{class:!0});var Wc=i(no);v(Gn.$$.fragment,Wc),Fp=d(Wc),$i=a(Wc,"P",{});var $v=i($i);xp=s($v,"Base class for outputs of token classification models."),$v.forEach(t),Wc.forEach(t),Gd=d(o),so=a(o,"H2",{class:!0});var Qc=i(so);Ho=a(Qc,"A",{id:!0,class:!0,href:!0});var Fv=i(Ho);Fi=a(Fv,"SPAN",{});var xv=i(Fi);v(Kn.$$.fragment,xv),xv.forEach(t),Fv.forEach(t),Mp=d(Qc),xi=a(Qc,"SPAN",{});var Mv=i(xi);Ep=s(Mv,"LongformerModel"),Mv.forEach(t),Qc.forEach(t),Kd=d(o),qe=a(o,"DIV",{class:!0});var st=i(qe);v(Jn.$$.fragment,st),zp=d(st),Mi=a(st,"P",{});var Ev=i(Mi);qp=s(Ev,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),Ev.forEach(t),Cp=d(st),Xn=a(st,"P",{});var Uc=i(Xn);Op=s(Uc,"This model inherits from "),Rr=a(Uc,"A",{href:!0});var zv=i(Rr);Pp=s(zv,"PreTrainedModel"),zv.forEach(t),jp=s(Uc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Uc.forEach(t),Np=d(st),Yn=a(st,"P",{});var Hc=i(Yn);Ap=s(Hc,"This model is also a PyTorch "),Zn=a(Hc,"A",{href:!0,rel:!0});var qv=i(Zn);Ip=s(qv,"torch.nn.Module"),qv.forEach(t),Sp=s(Hc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Hc.forEach(t),Dp=d(st),ro=a(st,"P",{});var Fa=i(ro);Bp=s(Fa,"This class copied code from "),Vr=a(Fa,"A",{href:!0});var Cv=i(Vr);Wp=s(Cv,"RobertaModel"),Cv.forEach(t),Qp=s(Fa,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),es=a(Fa,"A",{href:!0,rel:!0});var Ov=i(es);Up=s(Ov,`Longformer:
the Long-Document Transformer`),Ov.forEach(t),Hp=s(Fa,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),Fa.forEach(t),Rp=d(st),ts=a(st,"P",{});var Rc=i(ts);Vp=s(Rc,"The self-attention module "),Ei=a(Rc,"CODE",{});var Pv=i(Ei);Gp=s(Pv,"LongformerSelfAttention"),Pv.forEach(t),Kp=s(Rc,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Rc.forEach(t),Jp=d(st),Ge=a(st,"DIV",{class:!0});var vt=i(Ge);v(os.$$.fragment,vt),Xp=d(vt),ao=a(vt,"P",{});var xa=i(ao);Yp=s(xa,"The "),Gr=a(xa,"A",{href:!0});var jv=i(Gr);Zp=s(jv,"LongformerModel"),jv.forEach(t),ef=s(xa," forward method, overrides the "),zi=a(xa,"CODE",{});var Nv=i(zi);tf=s(Nv,"__call__"),Nv.forEach(t),of=s(xa," special method."),xa.forEach(t),nf=d(vt),v(Ro.$$.fragment,vt),sf=d(vt),qi=a(vt,"P",{});var Av=i(qi);rf=s(Av,"Examples:"),Av.forEach(t),af=d(vt),v(ns.$$.fragment,vt),vt.forEach(t),st.forEach(t),Jd=d(o),io=a(o,"H2",{class:!0});var Vc=i(io);Vo=a(Vc,"A",{id:!0,class:!0,href:!0});var Iv=i(Vo);Ci=a(Iv,"SPAN",{});var Sv=i(Ci);v(ss.$$.fragment,Sv),Sv.forEach(t),Iv.forEach(t),lf=d(Vc),Oi=a(Vc,"SPAN",{});var Dv=i(Oi);df=s(Dv,"LongformerForMaskedLM"),Dv.forEach(t),Vc.forEach(t),Xd=d(o),We=a(o,"DIV",{class:!0});var Tt=i(We);v(rs.$$.fragment,Tt),cf=d(Tt),as=a(Tt,"P",{});var Gc=i(as);hf=s(Gc,"Longformer Model with a "),Pi=a(Gc,"CODE",{});var Bv=i(Pi);mf=s(Bv,"language modeling"),Bv.forEach(t),pf=s(Gc," head on top."),Gc.forEach(t),ff=d(Tt),is=a(Tt,"P",{});var Kc=i(is);gf=s(Kc,"This model inherits from "),Kr=a(Kc,"A",{href:!0});var Wv=i(Kr);uf=s(Wv,"PreTrainedModel"),Wv.forEach(t),_f=s(Kc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kc.forEach(t),wf=d(Tt),ls=a(Tt,"P",{});var Jc=i(ls);kf=s(Jc,"This model is also a PyTorch "),ds=a(Jc,"A",{href:!0,rel:!0});var Qv=i(ds);vf=s(Qv,"torch.nn.Module"),Qv.forEach(t),Tf=s(Jc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jc.forEach(t),bf=d(Tt),Ke=a(Tt,"DIV",{class:!0});var bt=i(Ke);v(cs.$$.fragment,bt),yf=d(bt),lo=a(bt,"P",{});var Ma=i(lo);Lf=s(Ma,"The "),Jr=a(Ma,"A",{href:!0});var Uv=i(Jr);$f=s(Uv,"LongformerForMaskedLM"),Uv.forEach(t),Ff=s(Ma," forward method, overrides the "),ji=a(Ma,"CODE",{});var Hv=i(ji);xf=s(Hv,"__call__"),Hv.forEach(t),Mf=s(Ma," special method."),Ma.forEach(t),Ef=d(bt),v(Go.$$.fragment,bt),zf=d(bt),Ni=a(bt,"P",{});var Rv=i(Ni);qf=s(Rv,"Examples:"),Rv.forEach(t),Cf=d(bt),v(hs.$$.fragment,bt),bt.forEach(t),Tt.forEach(t),Yd=d(o),co=a(o,"H2",{class:!0});var Xc=i(co);Ko=a(Xc,"A",{id:!0,class:!0,href:!0});var Vv=i(Ko);Ai=a(Vv,"SPAN",{});var Gv=i(Ai);v(ms.$$.fragment,Gv),Gv.forEach(t),Vv.forEach(t),Of=d(Xc),Ii=a(Xc,"SPAN",{});var Kv=i(Ii);Pf=s(Kv,"LongformerForSequenceClassification"),Kv.forEach(t),Xc.forEach(t),Zd=d(o),Qe=a(o,"DIV",{class:!0});var yt=i(Qe);v(ps.$$.fragment,yt),jf=d(yt),Si=a(yt,"P",{});var Jv=i(Si);Nf=s(Jv,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Jv.forEach(t),Af=d(yt),fs=a(yt,"P",{});var Yc=i(fs);If=s(Yc,"This model inherits from "),Xr=a(Yc,"A",{href:!0});var Xv=i(Xr);Sf=s(Xv,"PreTrainedModel"),Xv.forEach(t),Df=s(Yc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yc.forEach(t),Bf=d(yt),gs=a(yt,"P",{});var Zc=i(gs);Wf=s(Zc,"This model is also a PyTorch "),us=a(Zc,"A",{href:!0,rel:!0});var Yv=i(us);Qf=s(Yv,"torch.nn.Module"),Yv.forEach(t),Uf=s(Zc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zc.forEach(t),Hf=d(yt),Ce=a(yt,"DIV",{class:!0});var rt=i(Ce);v(_s.$$.fragment,rt),Rf=d(rt),ho=a(rt,"P",{});var Ea=i(ho);Vf=s(Ea,"The "),Yr=a(Ea,"A",{href:!0});var Zv=i(Yr);Gf=s(Zv,"LongformerForSequenceClassification"),Zv.forEach(t),Kf=s(Ea," forward method, overrides the "),Di=a(Ea,"CODE",{});var eT=i(Di);Jf=s(eT,"__call__"),eT.forEach(t),Xf=s(Ea," special method."),Ea.forEach(t),Yf=d(rt),v(Jo.$$.fragment,rt),Zf=d(rt),Bi=a(rt,"P",{});var tT=i(Bi);eg=s(tT,"Example of single-label classification:"),tT.forEach(t),tg=d(rt),v(ws.$$.fragment,rt),og=d(rt),Wi=a(rt,"P",{});var oT=i(Wi);ng=s(oT,"Example of multi-label classification:"),oT.forEach(t),sg=d(rt),v(ks.$$.fragment,rt),rt.forEach(t),yt.forEach(t),ec=d(o),mo=a(o,"H2",{class:!0});var eh=i(mo);Xo=a(eh,"A",{id:!0,class:!0,href:!0});var nT=i(Xo);Qi=a(nT,"SPAN",{});var sT=i(Qi);v(vs.$$.fragment,sT),sT.forEach(t),nT.forEach(t),rg=d(eh),Ui=a(eh,"SPAN",{});var rT=i(Ui);ag=s(rT,"LongformerForMultipleChoice"),rT.forEach(t),eh.forEach(t),tc=d(o),Ue=a(o,"DIV",{class:!0});var Lt=i(Ue);v(Ts.$$.fragment,Lt),ig=d(Lt),Hi=a(Lt,"P",{});var aT=i(Hi);lg=s(aT,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),aT.forEach(t),dg=d(Lt),bs=a(Lt,"P",{});var th=i(bs);cg=s(th,"This model inherits from "),Zr=a(th,"A",{href:!0});var iT=i(Zr);hg=s(iT,"PreTrainedModel"),iT.forEach(t),mg=s(th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),th.forEach(t),pg=d(Lt),ys=a(Lt,"P",{});var oh=i(ys);fg=s(oh,"This model is also a PyTorch "),Ls=a(oh,"A",{href:!0,rel:!0});var lT=i(Ls);gg=s(lT,"torch.nn.Module"),lT.forEach(t),ug=s(oh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oh.forEach(t),_g=d(Lt),Je=a(Lt,"DIV",{class:!0});var $t=i(Je);v($s.$$.fragment,$t),wg=d($t),po=a($t,"P",{});var za=i(po);kg=s(za,"The "),ea=a(za,"A",{href:!0});var dT=i(ea);vg=s(dT,"LongformerForMultipleChoice"),dT.forEach(t),Tg=s(za," forward method, overrides the "),Ri=a(za,"CODE",{});var cT=i(Ri);bg=s(cT,"__call__"),cT.forEach(t),yg=s(za," special method."),za.forEach(t),Lg=d($t),v(Yo.$$.fragment,$t),$g=d($t),Vi=a($t,"P",{});var hT=i(Vi);Fg=s(hT,"Example:"),hT.forEach(t),xg=d($t),v(Fs.$$.fragment,$t),$t.forEach(t),Lt.forEach(t),oc=d(o),fo=a(o,"H2",{class:!0});var nh=i(fo);Zo=a(nh,"A",{id:!0,class:!0,href:!0});var mT=i(Zo);Gi=a(mT,"SPAN",{});var pT=i(Gi);v(xs.$$.fragment,pT),pT.forEach(t),mT.forEach(t),Mg=d(nh),Ki=a(nh,"SPAN",{});var fT=i(Ki);Eg=s(fT,"LongformerForTokenClassification"),fT.forEach(t),nh.forEach(t),nc=d(o),He=a(o,"DIV",{class:!0});var Ft=i(He);v(Ms.$$.fragment,Ft),zg=d(Ft),Ji=a(Ft,"P",{});var gT=i(Ji);qg=s(gT,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),gT.forEach(t),Cg=d(Ft),Es=a(Ft,"P",{});var sh=i(Es);Og=s(sh,"This model inherits from "),ta=a(sh,"A",{href:!0});var uT=i(ta);Pg=s(uT,"PreTrainedModel"),uT.forEach(t),jg=s(sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh.forEach(t),Ng=d(Ft),zs=a(Ft,"P",{});var rh=i(zs);Ag=s(rh,"This model is also a PyTorch "),qs=a(rh,"A",{href:!0,rel:!0});var _T=i(qs);Ig=s(_T,"torch.nn.Module"),_T.forEach(t),Sg=s(rh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),rh.forEach(t),Dg=d(Ft),Xe=a(Ft,"DIV",{class:!0});var xt=i(Xe);v(Cs.$$.fragment,xt),Bg=d(xt),go=a(xt,"P",{});var qa=i(go);Wg=s(qa,"The "),oa=a(qa,"A",{href:!0});var wT=i(oa);Qg=s(wT,"LongformerForTokenClassification"),wT.forEach(t),Ug=s(qa," forward method, overrides the "),Xi=a(qa,"CODE",{});var kT=i(Xi);Hg=s(kT,"__call__"),kT.forEach(t),Rg=s(qa," special method."),qa.forEach(t),Vg=d(xt),v(en.$$.fragment,xt),Gg=d(xt),Yi=a(xt,"P",{});var vT=i(Yi);Kg=s(vT,"Example:"),vT.forEach(t),Jg=d(xt),v(Os.$$.fragment,xt),xt.forEach(t),Ft.forEach(t),sc=d(o),uo=a(o,"H2",{class:!0});var ah=i(uo);tn=a(ah,"A",{id:!0,class:!0,href:!0});var TT=i(tn);Zi=a(TT,"SPAN",{});var bT=i(Zi);v(Ps.$$.fragment,bT),bT.forEach(t),TT.forEach(t),Xg=d(ah),el=a(ah,"SPAN",{});var yT=i(el);Yg=s(yT,"LongformerForQuestionAnswering"),yT.forEach(t),ah.forEach(t),rc=d(o),Re=a(o,"DIV",{class:!0});var Mt=i(Re);v(js.$$.fragment,Mt),Zg=d(Mt),_o=a(Mt,"P",{});var Ca=i(_o);eu=s(Ca,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),tl=a(Ca,"CODE",{});var LT=i(tl);tu=s(LT,"span start logits"),LT.forEach(t),ou=s(Ca," and "),ol=a(Ca,"CODE",{});var $T=i(ol);nu=s($T,"span end logits"),$T.forEach(t),su=s(Ca,")."),Ca.forEach(t),ru=d(Mt),Ns=a(Mt,"P",{});var ih=i(Ns);au=s(ih,"This model inherits from "),na=a(ih,"A",{href:!0});var FT=i(na);iu=s(FT,"PreTrainedModel"),FT.forEach(t),lu=s(ih,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ih.forEach(t),du=d(Mt),As=a(Mt,"P",{});var lh=i(As);cu=s(lh,"This model is also a PyTorch "),Is=a(lh,"A",{href:!0,rel:!0});var xT=i(Is);hu=s(xT,"torch.nn.Module"),xT.forEach(t),mu=s(lh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lh.forEach(t),pu=d(Mt),Ye=a(Mt,"DIV",{class:!0});var Et=i(Ye);v(Ss.$$.fragment,Et),fu=d(Et),wo=a(Et,"P",{});var Oa=i(wo);gu=s(Oa,"The "),sa=a(Oa,"A",{href:!0});var MT=i(sa);uu=s(MT,"LongformerForQuestionAnswering"),MT.forEach(t),_u=s(Oa," forward method, overrides the "),nl=a(Oa,"CODE",{});var ET=i(nl);wu=s(ET,"__call__"),ET.forEach(t),ku=s(Oa," special method."),Oa.forEach(t),vu=d(Et),v(on.$$.fragment,Et),Tu=d(Et),sl=a(Et,"P",{});var zT=i(sl);bu=s(zT,"Examples:"),zT.forEach(t),yu=d(Et),v(Ds.$$.fragment,Et),Et.forEach(t),Mt.forEach(t),ac=d(o),ko=a(o,"H2",{class:!0});var dh=i(ko);nn=a(dh,"A",{id:!0,class:!0,href:!0});var qT=i(nn);rl=a(qT,"SPAN",{});var CT=i(rl);v(Bs.$$.fragment,CT),CT.forEach(t),qT.forEach(t),Lu=d(dh),al=a(dh,"SPAN",{});var OT=i(al);$u=s(OT,"TFLongformerModel"),OT.forEach(t),dh.forEach(t),ic=d(o),Ee=a(o,"DIV",{class:!0});var Be=i(Ee);v(Ws.$$.fragment,Be),Fu=d(Be),il=a(Be,"P",{});var PT=i(il);xu=s(PT,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),PT.forEach(t),Mu=d(Be),Qs=a(Be,"P",{});var ch=i(Qs);Eu=s(ch,"This model inherits from "),ra=a(ch,"A",{href:!0});var jT=i(ra);zu=s(jT,"TFPreTrainedModel"),jT.forEach(t),qu=s(ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch.forEach(t),Cu=d(Be),Us=a(Be,"P",{});var hh=i(Us);Ou=s(hh,"This model is also a "),Hs=a(hh,"A",{href:!0,rel:!0});var NT=i(Hs);Pu=s(NT,"tf.keras.Model"),NT.forEach(t),ju=s(hh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hh.forEach(t),Nu=d(Be),v(sn.$$.fragment,Be),Au=d(Be),vo=a(Be,"P",{});var Pa=i(vo);Iu=s(Pa,"This class copies code from "),aa=a(Pa,"A",{href:!0});var AT=i(aa);Su=s(AT,"TFRobertaModel"),AT.forEach(t),Du=s(Pa,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Rs=a(Pa,"A",{href:!0,rel:!0});var IT=i(Rs);Bu=s(IT,"Longformer: the Long-Document Transformer"),IT.forEach(t),Wu=s(Pa,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Pa.forEach(t),Qu=d(Be),Vs=a(Be,"P",{});var mh=i(Vs);Uu=s(mh,"The self-attention module "),ll=a(mh,"CODE",{});var ST=i(ll);Hu=s(ST,"TFLongformerSelfAttention"),ST.forEach(t),Ru=s(mh,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),mh.forEach(t),Vu=d(Be),wt=a(Be,"DIV",{class:!0});var ja=i(wt);v(Gs.$$.fragment,ja),Gu=d(ja),To=a(ja,"P",{});var Na=i(To);Ku=s(Na,"The "),ia=a(Na,"A",{href:!0});var DT=i(ia);Ju=s(DT,"TFLongformerModel"),DT.forEach(t),Xu=s(Na," forward method, overrides the "),dl=a(Na,"CODE",{});var BT=i(dl);Yu=s(BT,"__call__"),BT.forEach(t),Zu=s(Na," special method."),Na.forEach(t),e_=d(ja),v(rn.$$.fragment,ja),ja.forEach(t),Be.forEach(t),lc=d(o),bo=a(o,"H2",{class:!0});var ph=i(bo);an=a(ph,"A",{id:!0,class:!0,href:!0});var WT=i(an);cl=a(WT,"SPAN",{});var QT=i(cl);v(Ks.$$.fragment,QT),QT.forEach(t),WT.forEach(t),t_=d(ph),hl=a(ph,"SPAN",{});var UT=i(hl);o_=s(UT,"TFLongformerForMaskedLM"),UT.forEach(t),ph.forEach(t),dc=d(o),Ne=a(o,"DIV",{class:!0});var lt=i(Ne);v(Js.$$.fragment,lt),n_=d(lt),Xs=a(lt,"P",{});var fh=i(Xs);s_=s(fh,"Longformer Model with a "),ml=a(fh,"CODE",{});var HT=i(ml);r_=s(HT,"language modeling"),HT.forEach(t),a_=s(fh," head on top."),fh.forEach(t),i_=d(lt),Ys=a(lt,"P",{});var gh=i(Ys);l_=s(gh,"This model inherits from "),la=a(gh,"A",{href:!0});var RT=i(la);d_=s(RT,"TFPreTrainedModel"),RT.forEach(t),c_=s(gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gh.forEach(t),h_=d(lt),Zs=a(lt,"P",{});var uh=i(Zs);m_=s(uh,"This model is also a "),er=a(uh,"A",{href:!0,rel:!0});var VT=i(er);p_=s(VT,"tf.keras.Model"),VT.forEach(t),f_=s(uh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uh.forEach(t),g_=d(lt),v(ln.$$.fragment,lt),u_=d(lt),Ze=a(lt,"DIV",{class:!0});var zt=i(Ze);v(tr.$$.fragment,zt),__=d(zt),yo=a(zt,"P",{});var Aa=i(yo);w_=s(Aa,"The "),da=a(Aa,"A",{href:!0});var GT=i(da);k_=s(GT,"TFLongformerForMaskedLM"),GT.forEach(t),v_=s(Aa," forward method, overrides the "),pl=a(Aa,"CODE",{});var KT=i(pl);T_=s(KT,"__call__"),KT.forEach(t),b_=s(Aa," special method."),Aa.forEach(t),y_=d(zt),v(dn.$$.fragment,zt),L_=d(zt),fl=a(zt,"P",{});var JT=i(fl);$_=s(JT,"Example:"),JT.forEach(t),F_=d(zt),v(or.$$.fragment,zt),zt.forEach(t),lt.forEach(t),cc=d(o),Lo=a(o,"H2",{class:!0});var _h=i(Lo);cn=a(_h,"A",{id:!0,class:!0,href:!0});var XT=i(cn);gl=a(XT,"SPAN",{});var YT=i(gl);v(nr.$$.fragment,YT),YT.forEach(t),XT.forEach(t),x_=d(_h),ul=a(_h,"SPAN",{});var ZT=i(ul);M_=s(ZT,"TFLongformerForQuestionAnswering"),ZT.forEach(t),_h.forEach(t),hc=d(o),Ae=a(o,"DIV",{class:!0});var dt=i(Ae);v(sr.$$.fragment,dt),E_=d(dt),$o=a(dt,"P",{});var Ia=i($o);z_=s(Ia,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),_l=a(Ia,"CODE",{});var eb=i(_l);q_=s(eb,"span start logits"),eb.forEach(t),C_=s(Ia," and "),wl=a(Ia,"CODE",{});var tb=i(wl);O_=s(tb,"span end logits"),tb.forEach(t),P_=s(Ia,")."),Ia.forEach(t),j_=d(dt),rr=a(dt,"P",{});var wh=i(rr);N_=s(wh,"This model inherits from "),ca=a(wh,"A",{href:!0});var ob=i(ca);A_=s(ob,"TFPreTrainedModel"),ob.forEach(t),I_=s(wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wh.forEach(t),S_=d(dt),ar=a(dt,"P",{});var kh=i(ar);D_=s(kh,"This model is also a "),ir=a(kh,"A",{href:!0,rel:!0});var nb=i(ir);B_=s(nb,"tf.keras.Model"),nb.forEach(t),W_=s(kh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kh.forEach(t),Q_=d(dt),v(hn.$$.fragment,dt),U_=d(dt),et=a(dt,"DIV",{class:!0});var qt=i(et);v(lr.$$.fragment,qt),H_=d(qt),Fo=a(qt,"P",{});var Sa=i(Fo);R_=s(Sa,"The "),ha=a(Sa,"A",{href:!0});var sb=i(ha);V_=s(sb,"TFLongformerForQuestionAnswering"),sb.forEach(t),G_=s(Sa," forward method, overrides the "),kl=a(Sa,"CODE",{});var rb=i(kl);K_=s(rb,"__call__"),rb.forEach(t),J_=s(Sa," special method."),Sa.forEach(t),X_=d(qt),v(mn.$$.fragment,qt),Y_=d(qt),vl=a(qt,"P",{});var ab=i(vl);Z_=s(ab,"Example:"),ab.forEach(t),ew=d(qt),v(dr.$$.fragment,qt),qt.forEach(t),dt.forEach(t),mc=d(o),xo=a(o,"H2",{class:!0});var vh=i(xo);pn=a(vh,"A",{id:!0,class:!0,href:!0});var ib=i(pn);Tl=a(ib,"SPAN",{});var lb=i(Tl);v(cr.$$.fragment,lb),lb.forEach(t),ib.forEach(t),tw=d(vh),bl=a(vh,"SPAN",{});var db=i(bl);ow=s(db,"TFLongformerForSequenceClassification"),db.forEach(t),vh.forEach(t),pc=d(o),Ie=a(o,"DIV",{class:!0});var ct=i(Ie);v(hr.$$.fragment,ct),nw=d(ct),yl=a(ct,"P",{});var cb=i(yl);sw=s(cb,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cb.forEach(t),rw=d(ct),mr=a(ct,"P",{});var Th=i(mr);aw=s(Th,"This model inherits from "),ma=a(Th,"A",{href:!0});var hb=i(ma);iw=s(hb,"TFPreTrainedModel"),hb.forEach(t),lw=s(Th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Th.forEach(t),dw=d(ct),pr=a(ct,"P",{});var bh=i(pr);cw=s(bh,"This model is also a "),fr=a(bh,"A",{href:!0,rel:!0});var mb=i(fr);hw=s(mb,"tf.keras.Model"),mb.forEach(t),mw=s(bh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),bh.forEach(t),pw=d(ct),v(fn.$$.fragment,ct),fw=d(ct),tt=a(ct,"DIV",{class:!0});var Ct=i(tt);v(gr.$$.fragment,Ct),gw=d(Ct),Mo=a(Ct,"P",{});var Da=i(Mo);uw=s(Da,"The "),pa=a(Da,"A",{href:!0});var pb=i(pa);_w=s(pb,"TFLongformerForSequenceClassification"),pb.forEach(t),ww=s(Da," forward method, overrides the "),Ll=a(Da,"CODE",{});var fb=i(Ll);kw=s(fb,"__call__"),fb.forEach(t),vw=s(Da," special method."),Da.forEach(t),Tw=d(Ct),v(gn.$$.fragment,Ct),bw=d(Ct),$l=a(Ct,"P",{});var gb=i($l);yw=s(gb,"Example:"),gb.forEach(t),Lw=d(Ct),v(ur.$$.fragment,Ct),Ct.forEach(t),ct.forEach(t),fc=d(o),Eo=a(o,"H2",{class:!0});var yh=i(Eo);un=a(yh,"A",{id:!0,class:!0,href:!0});var ub=i(un);Fl=a(ub,"SPAN",{});var _b=i(Fl);v(_r.$$.fragment,_b),_b.forEach(t),ub.forEach(t),$w=d(yh),xl=a(yh,"SPAN",{});var wb=i(xl);Fw=s(wb,"TFLongformerForTokenClassification"),wb.forEach(t),yh.forEach(t),gc=d(o),Se=a(o,"DIV",{class:!0});var ht=i(Se);v(wr.$$.fragment,ht),xw=d(ht),Ml=a(ht,"P",{});var kb=i(Ml);Mw=s(kb,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),kb.forEach(t),Ew=d(ht),kr=a(ht,"P",{});var Lh=i(kr);zw=s(Lh,"This model inherits from "),fa=a(Lh,"A",{href:!0});var vb=i(fa);qw=s(vb,"TFPreTrainedModel"),vb.forEach(t),Cw=s(Lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh.forEach(t),Ow=d(ht),vr=a(ht,"P",{});var $h=i(vr);Pw=s($h,"This model is also a "),Tr=a($h,"A",{href:!0,rel:!0});var Tb=i(Tr);jw=s(Tb,"tf.keras.Model"),Tb.forEach(t),Nw=s($h,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$h.forEach(t),Aw=d(ht),v(_n.$$.fragment,ht),Iw=d(ht),ot=a(ht,"DIV",{class:!0});var Ot=i(ot);v(br.$$.fragment,Ot),Sw=d(Ot),zo=a(Ot,"P",{});var Ba=i(zo);Dw=s(Ba,"The "),ga=a(Ba,"A",{href:!0});var bb=i(ga);Bw=s(bb,"TFLongformerForTokenClassification"),bb.forEach(t),Ww=s(Ba," forward method, overrides the "),El=a(Ba,"CODE",{});var yb=i(El);Qw=s(yb,"__call__"),yb.forEach(t),Uw=s(Ba," special method."),Ba.forEach(t),Hw=d(Ot),v(wn.$$.fragment,Ot),Rw=d(Ot),zl=a(Ot,"P",{});var Lb=i(zl);Vw=s(Lb,"Example:"),Lb.forEach(t),Gw=d(Ot),v(yr.$$.fragment,Ot),Ot.forEach(t),ht.forEach(t),uc=d(o),qo=a(o,"H2",{class:!0});var Fh=i(qo);kn=a(Fh,"A",{id:!0,class:!0,href:!0});var $b=i(kn);ql=a($b,"SPAN",{});var Fb=i(ql);v(Lr.$$.fragment,Fb),Fb.forEach(t),$b.forEach(t),Kw=d(Fh),Cl=a(Fh,"SPAN",{});var xb=i(Cl);Jw=s(xb,"TFLongformerForMultipleChoice"),xb.forEach(t),Fh.forEach(t),_c=d(o),De=a(o,"DIV",{class:!0});var mt=i(De);v($r.$$.fragment,mt),Xw=d(mt),Ol=a(mt,"P",{});var Mb=i(Ol);Yw=s(Mb,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Mb.forEach(t),Zw=d(mt),Fr=a(mt,"P",{});var xh=i(Fr);ek=s(xh,"This model inherits from "),ua=a(xh,"A",{href:!0});var Eb=i(ua);tk=s(Eb,"TFPreTrainedModel"),Eb.forEach(t),ok=s(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),nk=d(mt),xr=a(mt,"P",{});var Mh=i(xr);sk=s(Mh,"This model is also a "),Mr=a(Mh,"A",{href:!0,rel:!0});var zb=i(Mr);rk=s(zb,"tf.keras.Model"),zb.forEach(t),ak=s(Mh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mh.forEach(t),ik=d(mt),v(vn.$$.fragment,mt),lk=d(mt),nt=a(mt,"DIV",{class:!0});var Pt=i(nt);v(Er.$$.fragment,Pt),dk=d(Pt),Co=a(Pt,"P",{});var Wa=i(Co);ck=s(Wa,"The "),_a=a(Wa,"A",{href:!0});var qb=i(_a);hk=s(qb,"TFLongformerForMultipleChoice"),qb.forEach(t),mk=s(Wa," forward method, overrides the "),Pl=a(Wa,"CODE",{});var Cb=i(Pl);pk=s(Cb,"__call__"),Cb.forEach(t),fk=s(Wa," special method."),Wa.forEach(t),gk=d(Pt),v(Tn.$$.fragment,Pt),uk=d(Pt),jl=a(Pt,"P",{});var Ob=i(jl);_k=s(Ob,"Example:"),Ob.forEach(t),wk=d(Pt),v(zr.$$.fragment,Pt),Pt.forEach(t),mt.forEach(t),this.h()},h(){c(f,"name","hf:doc:metadata"),c(f,"content",JSON.stringify(my)),c(u,"id","longformer"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#longformer"),c(g,"class","relative group"),c(Z,"id","overview"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#overview"),c(E,"class","relative group"),c(te,"href","https://arxiv.org/pdf/2004.05150.pdf"),c(te,"rel","nofollow"),c(ve,"href","https://huggingface.co/beltagy"),c(ve,"rel","nofollow"),c(O,"href","https://github.com/allenai/longformer"),c(O,"rel","nofollow"),c(ke,"id","longformer-self-attention"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#longformer-self-attention"),c(A,"class","relative group"),ed.a=td,od.a=nd,sd.a=rd,ad.a=id,dd.a=cd,c(Pr,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerModel.forward"),gd.a=ud,_d.a=wd,kd.a=vd,Td.a=bd,c(bn,"href","https://arxiv.org/pdf/2004.05150.pdf"),c(bn,"rel","nofollow"),c(Io,"id","training"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#training"),c(jt,"class","relative group"),c(jr,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerForMaskedLM"),c(Nr,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaForMaskedLM"),c(So,"id","transformers.LongformerConfig"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#transformers.LongformerConfig"),c(At,"class","relative group"),c(Ar,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerModel"),c(Ir,"href","/docs/transformers/master/en/model_doc/longformer#transformers.TFLongformerModel"),c(Sr,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerModel"),c(xn,"href","https://huggingface.co/roberta-base"),c(xn,"rel","nofollow"),c(Dr,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig"),c(Br,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaConfig"),c(je,"class","docstring"),c(Do,"id","transformers.LongformerTokenizer"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.LongformerTokenizer"),c(Bt,"class","relative group"),c(Wr,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer"),c(Qr,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizer"),c(pt,"class","docstring"),c(Wo,"id","transformers.LongformerTokenizerFast"),c(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wo,"href","#transformers.LongformerTokenizerFast"),c(Wt,"class","relative group"),c(Ur,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizerFast"),c(Hr,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(ft,"class","docstring"),c(Uo,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),c(Uo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Uo,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),c(Qt,"class","relative group"),c(Ut,"class","docstring"),c(Ht,"class","docstring"),c(Rt,"class","docstring"),c(Vt,"class","docstring"),c(Gt,"class","docstring"),c(Kt,"class","docstring"),c(Jt,"class","docstring"),c(Xt,"class","docstring"),c(Yt,"class","docstring"),c(Zt,"class","docstring"),c(eo,"class","docstring"),c(to,"class","docstring"),c(oo,"class","docstring"),c(no,"class","docstring"),c(Ho,"id","transformers.LongformerModel"),c(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ho,"href","#transformers.LongformerModel"),c(so,"class","relative group"),c(Rr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Zn,"rel","nofollow"),c(Vr,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaModel"),c(es,"href","https://arxiv.org/abs/2004.05150"),c(es,"rel","nofollow"),c(Gr,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerModel"),c(Ge,"class","docstring"),c(qe,"class","docstring"),c(Vo,"id","transformers.LongformerForMaskedLM"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.LongformerForMaskedLM"),c(io,"class","relative group"),c(Kr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ds,"rel","nofollow"),c(Jr,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerForMaskedLM"),c(Ke,"class","docstring"),c(We,"class","docstring"),c(Ko,"id","transformers.LongformerForSequenceClassification"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.LongformerForSequenceClassification"),c(co,"class","relative group"),c(Xr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(us,"rel","nofollow"),c(Yr,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),c(Ce,"class","docstring"),c(Qe,"class","docstring"),c(Xo,"id","transformers.LongformerForMultipleChoice"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.LongformerForMultipleChoice"),c(mo,"class","relative group"),c(Zr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ls,"rel","nofollow"),c(ea,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),c(Je,"class","docstring"),c(Ue,"class","docstring"),c(Zo,"id","transformers.LongformerForTokenClassification"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#transformers.LongformerForTokenClassification"),c(fo,"class","relative group"),c(ta,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qs,"rel","nofollow"),c(oa,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerForTokenClassification"),c(Xe,"class","docstring"),c(He,"class","docstring"),c(tn,"id","transformers.LongformerForQuestionAnswering"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.LongformerForQuestionAnswering"),c(uo,"class","relative group"),c(na,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Is,"rel","nofollow"),c(sa,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),c(Ye,"class","docstring"),c(Re,"class","docstring"),c(nn,"id","transformers.TFLongformerModel"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.TFLongformerModel"),c(ko,"class","relative group"),c(ra,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Hs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Hs,"rel","nofollow"),c(aa,"href","/docs/transformers/master/en/model_doc/roberta#transformers.TFRobertaModel"),c(Rs,"href","https://arxiv.org/abs/2004.05150"),c(Rs,"rel","nofollow"),c(ia,"href","/docs/transformers/master/en/model_doc/longformer#transformers.TFLongformerModel"),c(wt,"class","docstring"),c(Ee,"class","docstring"),c(an,"id","transformers.TFLongformerForMaskedLM"),c(an,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(an,"href","#transformers.TFLongformerForMaskedLM"),c(bo,"class","relative group"),c(la,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(er,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(er,"rel","nofollow"),c(da,"href","/docs/transformers/master/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),c(Ze,"class","docstring"),c(Ne,"class","docstring"),c(cn,"id","transformers.TFLongformerForQuestionAnswering"),c(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(cn,"href","#transformers.TFLongformerForQuestionAnswering"),c(Lo,"class","relative group"),c(ca,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(ir,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ir,"rel","nofollow"),c(ha,"href","/docs/transformers/master/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),c(et,"class","docstring"),c(Ae,"class","docstring"),c(pn,"id","transformers.TFLongformerForSequenceClassification"),c(pn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(pn,"href","#transformers.TFLongformerForSequenceClassification"),c(xo,"class","relative group"),c(ma,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(fr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(fr,"rel","nofollow"),c(pa,"href","/docs/transformers/master/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),c(tt,"class","docstring"),c(Ie,"class","docstring"),c(un,"id","transformers.TFLongformerForTokenClassification"),c(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(un,"href","#transformers.TFLongformerForTokenClassification"),c(Eo,"class","relative group"),c(fa,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Tr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Tr,"rel","nofollow"),c(ga,"href","/docs/transformers/master/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),c(ot,"class","docstring"),c(Se,"class","docstring"),c(kn,"id","transformers.TFLongformerForMultipleChoice"),c(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(kn,"href","#transformers.TFLongformerForMultipleChoice"),c(qo,"class","relative group"),c(ua,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Mr,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Mr,"rel","nofollow"),c(_a,"href","/docs/transformers/master/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),c(nt,"class","docstring"),c(De,"class","docstring")},m(o,p){e(document.head,f),h(o,x,p),h(o,g,p),e(g,u),e(u,$),T(w,$,null),e(g,_),e(g,M),e(M,me),h(o,J,p),h(o,E,p),e(E,Z),e(Z,I),T(ee,I,null),e(E,pe),e(E,S),e(S,fe),h(o,le,p),h(o,G,p),e(G,P),e(G,te),e(te,X),e(G,z),h(o,C,p),h(o,ne,p),e(ne,U),h(o,de,p),h(o,se,p),e(se,D),e(D,ge),h(o,ce,p),h(o,q,p),e(q,ue),h(o,W,p),h(o,re,p),e(re,K),e(K,H),e(K,ae),e(ae,_e),e(K,j),e(K,ie),e(ie,R),e(K,we),e(K,m),e(m,F),e(K,Y),h(o,be,p),h(o,he,p),e(he,N),e(he,ve),e(ve,$e),e(he,Fe),e(he,O),e(O,V),e(he,xe),h(o,ye,p),h(o,A,p),e(A,ke),e(ke,Te),T(oe,Te,null),e(A,Me),e(A,Qa),e(Qa,Eh),h(o,Zl,p),h(o,Le,p),e(Le,zh),ed.m(Pb,Le),e(Le,td),od.m(jb,Le),e(Le,nd),sd.m(Nb,Le),e(Le,rd),e(Le,Ua),e(Ua,qh),e(Le,Ch),e(Le,Ha),e(Ha,Oh),e(Le,Ph),e(Le,Ra),e(Ra,jh),e(Le,Nh),ad.m(Ab,Le),e(Le,id),e(Le,Va),e(Va,Ah),e(Le,Ih),h(o,ld,p),h(o,ut,p),e(ut,Sh),dd.m(Ib,ut),e(ut,cd),e(ut,Ga),e(Ga,Dh),e(ut,Bh),h(o,hd,p),h(o,_t,p),e(_t,Wh),e(_t,Ka),e(Ka,Qh),e(_t,Uh),e(_t,Ja),e(Ja,Hh),e(_t,Rh),h(o,md,p),h(o,jo,p),e(jo,Xa),e(Xa,Vh),e(jo,Gh),e(jo,Ya),e(Ya,Kh),h(o,pd,p),h(o,No,p),e(No,Jh),e(No,Pr),e(Pr,Xh),e(No,Yh),h(o,fd,p),h(o,Ve,p),e(Ve,Zh),gd.m(Sb,Ve),e(Ve,ud),_d.m(Db,Ve),e(Ve,wd),kd.m(Bb,Ve),e(Ve,vd),Td.m(Wb,Ve),e(Ve,bd),h(o,yd,p),h(o,Ao,p),e(Ao,em),e(Ao,bn),e(bn,tm),e(Ao,om),h(o,Ld,p),h(o,jt,p),e(jt,Io),e(Io,Za),T(yn,Za,null),e(jt,nm),e(jt,ei),e(ei,sm),h(o,$d,p),h(o,Nt,p),e(Nt,jr),e(jr,rm),e(Nt,am),e(Nt,Nr),e(Nr,im),e(Nt,lm),h(o,Fd,p),T(Ln,o,p),h(o,xd,p),h(o,At,p),e(At,So),e(So,ti),T($n,ti,null),e(At,dm),e(At,oi),e(oi,cm),h(o,Md,p),h(o,je,p),T(Fn,je,null),e(je,hm),e(je,It),e(It,mm),e(It,Ar),e(Ar,pm),e(It,fm),e(It,Ir),e(Ir,gm),e(It,um),e(je,_m),e(je,St),e(St,wm),e(St,Sr),e(Sr,km),e(St,vm),e(St,xn),e(xn,Tm),e(St,bm),e(je,ym),e(je,Dt),e(Dt,Lm),e(Dt,Dr),e(Dr,$m),e(Dt,Fm),e(Dt,Br),e(Br,xm),e(Dt,Mm),e(je,Em),e(je,ni),e(ni,zm),e(je,qm),T(Mn,je,null),h(o,Ed,p),h(o,Bt,p),e(Bt,Do),e(Do,si),T(En,si,null),e(Bt,Cm),e(Bt,ri),e(ri,Om),h(o,zd,p),h(o,pt,p),T(zn,pt,null),e(pt,Pm),e(pt,ai),e(ai,jm),e(pt,Nm),e(pt,Bo),e(Bo,Wr),e(Wr,Am),e(Bo,Im),e(Bo,Qr),e(Qr,Sm),e(Bo,Dm),h(o,qd,p),h(o,Wt,p),e(Wt,Wo),e(Wo,ii),T(qn,ii,null),e(Wt,Bm),e(Wt,li),e(li,Wm),h(o,Cd,p),h(o,ft,p),T(Cn,ft,null),e(ft,Qm),e(ft,On),e(On,Um),e(On,di),e(di,Hm),e(On,Rm),e(ft,Vm),e(ft,Qo),e(Qo,Ur),e(Ur,Gm),e(Qo,Km),e(Qo,Hr),e(Hr,Jm),e(Qo,Xm),h(o,Od,p),h(o,Qt,p),e(Qt,Uo),e(Uo,ci),T(Pn,ci,null),e(Qt,Ym),e(Qt,hi),e(hi,Zm),h(o,Pd,p),h(o,Ut,p),T(jn,Ut,null),e(Ut,ep),e(Ut,mi),e(mi,tp),h(o,jd,p),h(o,Ht,p),T(Nn,Ht,null),e(Ht,op),e(Ht,pi),e(pi,np),h(o,Nd,p),h(o,Rt,p),T(An,Rt,null),e(Rt,sp),e(Rt,fi),e(fi,rp),h(o,Ad,p),h(o,Vt,p),T(In,Vt,null),e(Vt,ap),e(Vt,gi),e(gi,ip),h(o,Id,p),h(o,Gt,p),T(Sn,Gt,null),e(Gt,lp),e(Gt,ui),e(ui,dp),h(o,Sd,p),h(o,Kt,p),T(Dn,Kt,null),e(Kt,cp),e(Kt,_i),e(_i,hp),h(o,Dd,p),h(o,Jt,p),T(Bn,Jt,null),e(Jt,mp),e(Jt,wi),e(wi,pp),h(o,Bd,p),h(o,Xt,p),T(Wn,Xt,null),e(Xt,fp),e(Xt,ki),e(ki,gp),h(o,Wd,p),h(o,Yt,p),T(Qn,Yt,null),e(Yt,up),e(Yt,vi),e(vi,_p),h(o,Qd,p),h(o,Zt,p),T(Un,Zt,null),e(Zt,wp),e(Zt,Ti),e(Ti,kp),h(o,Ud,p),h(o,eo,p),T(Hn,eo,null),e(eo,vp),e(eo,bi),e(bi,Tp),h(o,Hd,p),h(o,to,p),T(Rn,to,null),e(to,bp),e(to,yi),e(yi,yp),h(o,Rd,p),h(o,oo,p),T(Vn,oo,null),e(oo,Lp),e(oo,Li),e(Li,$p),h(o,Vd,p),h(o,no,p),T(Gn,no,null),e(no,Fp),e(no,$i),e($i,xp),h(o,Gd,p),h(o,so,p),e(so,Ho),e(Ho,Fi),T(Kn,Fi,null),e(so,Mp),e(so,xi),e(xi,Ep),h(o,Kd,p),h(o,qe,p),T(Jn,qe,null),e(qe,zp),e(qe,Mi),e(Mi,qp),e(qe,Cp),e(qe,Xn),e(Xn,Op),e(Xn,Rr),e(Rr,Pp),e(Xn,jp),e(qe,Np),e(qe,Yn),e(Yn,Ap),e(Yn,Zn),e(Zn,Ip),e(Yn,Sp),e(qe,Dp),e(qe,ro),e(ro,Bp),e(ro,Vr),e(Vr,Wp),e(ro,Qp),e(ro,es),e(es,Up),e(ro,Hp),e(qe,Rp),e(qe,ts),e(ts,Vp),e(ts,Ei),e(Ei,Gp),e(ts,Kp),e(qe,Jp),e(qe,Ge),T(os,Ge,null),e(Ge,Xp),e(Ge,ao),e(ao,Yp),e(ao,Gr),e(Gr,Zp),e(ao,ef),e(ao,zi),e(zi,tf),e(ao,of),e(Ge,nf),T(Ro,Ge,null),e(Ge,sf),e(Ge,qi),e(qi,rf),e(Ge,af),T(ns,Ge,null),h(o,Jd,p),h(o,io,p),e(io,Vo),e(Vo,Ci),T(ss,Ci,null),e(io,lf),e(io,Oi),e(Oi,df),h(o,Xd,p),h(o,We,p),T(rs,We,null),e(We,cf),e(We,as),e(as,hf),e(as,Pi),e(Pi,mf),e(as,pf),e(We,ff),e(We,is),e(is,gf),e(is,Kr),e(Kr,uf),e(is,_f),e(We,wf),e(We,ls),e(ls,kf),e(ls,ds),e(ds,vf),e(ls,Tf),e(We,bf),e(We,Ke),T(cs,Ke,null),e(Ke,yf),e(Ke,lo),e(lo,Lf),e(lo,Jr),e(Jr,$f),e(lo,Ff),e(lo,ji),e(ji,xf),e(lo,Mf),e(Ke,Ef),T(Go,Ke,null),e(Ke,zf),e(Ke,Ni),e(Ni,qf),e(Ke,Cf),T(hs,Ke,null),h(o,Yd,p),h(o,co,p),e(co,Ko),e(Ko,Ai),T(ms,Ai,null),e(co,Of),e(co,Ii),e(Ii,Pf),h(o,Zd,p),h(o,Qe,p),T(ps,Qe,null),e(Qe,jf),e(Qe,Si),e(Si,Nf),e(Qe,Af),e(Qe,fs),e(fs,If),e(fs,Xr),e(Xr,Sf),e(fs,Df),e(Qe,Bf),e(Qe,gs),e(gs,Wf),e(gs,us),e(us,Qf),e(gs,Uf),e(Qe,Hf),e(Qe,Ce),T(_s,Ce,null),e(Ce,Rf),e(Ce,ho),e(ho,Vf),e(ho,Yr),e(Yr,Gf),e(ho,Kf),e(ho,Di),e(Di,Jf),e(ho,Xf),e(Ce,Yf),T(Jo,Ce,null),e(Ce,Zf),e(Ce,Bi),e(Bi,eg),e(Ce,tg),T(ws,Ce,null),e(Ce,og),e(Ce,Wi),e(Wi,ng),e(Ce,sg),T(ks,Ce,null),h(o,ec,p),h(o,mo,p),e(mo,Xo),e(Xo,Qi),T(vs,Qi,null),e(mo,rg),e(mo,Ui),e(Ui,ag),h(o,tc,p),h(o,Ue,p),T(Ts,Ue,null),e(Ue,ig),e(Ue,Hi),e(Hi,lg),e(Ue,dg),e(Ue,bs),e(bs,cg),e(bs,Zr),e(Zr,hg),e(bs,mg),e(Ue,pg),e(Ue,ys),e(ys,fg),e(ys,Ls),e(Ls,gg),e(ys,ug),e(Ue,_g),e(Ue,Je),T($s,Je,null),e(Je,wg),e(Je,po),e(po,kg),e(po,ea),e(ea,vg),e(po,Tg),e(po,Ri),e(Ri,bg),e(po,yg),e(Je,Lg),T(Yo,Je,null),e(Je,$g),e(Je,Vi),e(Vi,Fg),e(Je,xg),T(Fs,Je,null),h(o,oc,p),h(o,fo,p),e(fo,Zo),e(Zo,Gi),T(xs,Gi,null),e(fo,Mg),e(fo,Ki),e(Ki,Eg),h(o,nc,p),h(o,He,p),T(Ms,He,null),e(He,zg),e(He,Ji),e(Ji,qg),e(He,Cg),e(He,Es),e(Es,Og),e(Es,ta),e(ta,Pg),e(Es,jg),e(He,Ng),e(He,zs),e(zs,Ag),e(zs,qs),e(qs,Ig),e(zs,Sg),e(He,Dg),e(He,Xe),T(Cs,Xe,null),e(Xe,Bg),e(Xe,go),e(go,Wg),e(go,oa),e(oa,Qg),e(go,Ug),e(go,Xi),e(Xi,Hg),e(go,Rg),e(Xe,Vg),T(en,Xe,null),e(Xe,Gg),e(Xe,Yi),e(Yi,Kg),e(Xe,Jg),T(Os,Xe,null),h(o,sc,p),h(o,uo,p),e(uo,tn),e(tn,Zi),T(Ps,Zi,null),e(uo,Xg),e(uo,el),e(el,Yg),h(o,rc,p),h(o,Re,p),T(js,Re,null),e(Re,Zg),e(Re,_o),e(_o,eu),e(_o,tl),e(tl,tu),e(_o,ou),e(_o,ol),e(ol,nu),e(_o,su),e(Re,ru),e(Re,Ns),e(Ns,au),e(Ns,na),e(na,iu),e(Ns,lu),e(Re,du),e(Re,As),e(As,cu),e(As,Is),e(Is,hu),e(As,mu),e(Re,pu),e(Re,Ye),T(Ss,Ye,null),e(Ye,fu),e(Ye,wo),e(wo,gu),e(wo,sa),e(sa,uu),e(wo,_u),e(wo,nl),e(nl,wu),e(wo,ku),e(Ye,vu),T(on,Ye,null),e(Ye,Tu),e(Ye,sl),e(sl,bu),e(Ye,yu),T(Ds,Ye,null),h(o,ac,p),h(o,ko,p),e(ko,nn),e(nn,rl),T(Bs,rl,null),e(ko,Lu),e(ko,al),e(al,$u),h(o,ic,p),h(o,Ee,p),T(Ws,Ee,null),e(Ee,Fu),e(Ee,il),e(il,xu),e(Ee,Mu),e(Ee,Qs),e(Qs,Eu),e(Qs,ra),e(ra,zu),e(Qs,qu),e(Ee,Cu),e(Ee,Us),e(Us,Ou),e(Us,Hs),e(Hs,Pu),e(Us,ju),e(Ee,Nu),T(sn,Ee,null),e(Ee,Au),e(Ee,vo),e(vo,Iu),e(vo,aa),e(aa,Su),e(vo,Du),e(vo,Rs),e(Rs,Bu),e(vo,Wu),e(Ee,Qu),e(Ee,Vs),e(Vs,Uu),e(Vs,ll),e(ll,Hu),e(Vs,Ru),e(Ee,Vu),e(Ee,wt),T(Gs,wt,null),e(wt,Gu),e(wt,To),e(To,Ku),e(To,ia),e(ia,Ju),e(To,Xu),e(To,dl),e(dl,Yu),e(To,Zu),e(wt,e_),T(rn,wt,null),h(o,lc,p),h(o,bo,p),e(bo,an),e(an,cl),T(Ks,cl,null),e(bo,t_),e(bo,hl),e(hl,o_),h(o,dc,p),h(o,Ne,p),T(Js,Ne,null),e(Ne,n_),e(Ne,Xs),e(Xs,s_),e(Xs,ml),e(ml,r_),e(Xs,a_),e(Ne,i_),e(Ne,Ys),e(Ys,l_),e(Ys,la),e(la,d_),e(Ys,c_),e(Ne,h_),e(Ne,Zs),e(Zs,m_),e(Zs,er),e(er,p_),e(Zs,f_),e(Ne,g_),T(ln,Ne,null),e(Ne,u_),e(Ne,Ze),T(tr,Ze,null),e(Ze,__),e(Ze,yo),e(yo,w_),e(yo,da),e(da,k_),e(yo,v_),e(yo,pl),e(pl,T_),e(yo,b_),e(Ze,y_),T(dn,Ze,null),e(Ze,L_),e(Ze,fl),e(fl,$_),e(Ze,F_),T(or,Ze,null),h(o,cc,p),h(o,Lo,p),e(Lo,cn),e(cn,gl),T(nr,gl,null),e(Lo,x_),e(Lo,ul),e(ul,M_),h(o,hc,p),h(o,Ae,p),T(sr,Ae,null),e(Ae,E_),e(Ae,$o),e($o,z_),e($o,_l),e(_l,q_),e($o,C_),e($o,wl),e(wl,O_),e($o,P_),e(Ae,j_),e(Ae,rr),e(rr,N_),e(rr,ca),e(ca,A_),e(rr,I_),e(Ae,S_),e(Ae,ar),e(ar,D_),e(ar,ir),e(ir,B_),e(ar,W_),e(Ae,Q_),T(hn,Ae,null),e(Ae,U_),e(Ae,et),T(lr,et,null),e(et,H_),e(et,Fo),e(Fo,R_),e(Fo,ha),e(ha,V_),e(Fo,G_),e(Fo,kl),e(kl,K_),e(Fo,J_),e(et,X_),T(mn,et,null),e(et,Y_),e(et,vl),e(vl,Z_),e(et,ew),T(dr,et,null),h(o,mc,p),h(o,xo,p),e(xo,pn),e(pn,Tl),T(cr,Tl,null),e(xo,tw),e(xo,bl),e(bl,ow),h(o,pc,p),h(o,Ie,p),T(hr,Ie,null),e(Ie,nw),e(Ie,yl),e(yl,sw),e(Ie,rw),e(Ie,mr),e(mr,aw),e(mr,ma),e(ma,iw),e(mr,lw),e(Ie,dw),e(Ie,pr),e(pr,cw),e(pr,fr),e(fr,hw),e(pr,mw),e(Ie,pw),T(fn,Ie,null),e(Ie,fw),e(Ie,tt),T(gr,tt,null),e(tt,gw),e(tt,Mo),e(Mo,uw),e(Mo,pa),e(pa,_w),e(Mo,ww),e(Mo,Ll),e(Ll,kw),e(Mo,vw),e(tt,Tw),T(gn,tt,null),e(tt,bw),e(tt,$l),e($l,yw),e(tt,Lw),T(ur,tt,null),h(o,fc,p),h(o,Eo,p),e(Eo,un),e(un,Fl),T(_r,Fl,null),e(Eo,$w),e(Eo,xl),e(xl,Fw),h(o,gc,p),h(o,Se,p),T(wr,Se,null),e(Se,xw),e(Se,Ml),e(Ml,Mw),e(Se,Ew),e(Se,kr),e(kr,zw),e(kr,fa),e(fa,qw),e(kr,Cw),e(Se,Ow),e(Se,vr),e(vr,Pw),e(vr,Tr),e(Tr,jw),e(vr,Nw),e(Se,Aw),T(_n,Se,null),e(Se,Iw),e(Se,ot),T(br,ot,null),e(ot,Sw),e(ot,zo),e(zo,Dw),e(zo,ga),e(ga,Bw),e(zo,Ww),e(zo,El),e(El,Qw),e(zo,Uw),e(ot,Hw),T(wn,ot,null),e(ot,Rw),e(ot,zl),e(zl,Vw),e(ot,Gw),T(yr,ot,null),h(o,uc,p),h(o,qo,p),e(qo,kn),e(kn,ql),T(Lr,ql,null),e(qo,Kw),e(qo,Cl),e(Cl,Jw),h(o,_c,p),h(o,De,p),T($r,De,null),e(De,Xw),e(De,Ol),e(Ol,Yw),e(De,Zw),e(De,Fr),e(Fr,ek),e(Fr,ua),e(ua,tk),e(Fr,ok),e(De,nk),e(De,xr),e(xr,sk),e(xr,Mr),e(Mr,rk),e(xr,ak),e(De,ik),T(vn,De,null),e(De,lk),e(De,nt),T(Er,nt,null),e(nt,dk),e(nt,Co),e(Co,ck),e(Co,_a),e(_a,hk),e(Co,mk),e(Co,Pl),e(Pl,pk),e(Co,fk),e(nt,gk),T(Tn,nt,null),e(nt,uk),e(nt,jl),e(jl,_k),e(nt,wk),T(zr,nt,null),wc=!0},p(o,[p]){const qr={};p&2&&(qr.$$scope={dirty:p,ctx:o}),Ro.$set(qr);const Nl={};p&2&&(Nl.$$scope={dirty:p,ctx:o}),Go.$set(Nl);const Al={};p&2&&(Al.$$scope={dirty:p,ctx:o}),Jo.$set(Al);const Il={};p&2&&(Il.$$scope={dirty:p,ctx:o}),Yo.$set(Il);const Cr={};p&2&&(Cr.$$scope={dirty:p,ctx:o}),en.$set(Cr);const Sl={};p&2&&(Sl.$$scope={dirty:p,ctx:o}),on.$set(Sl);const Dl={};p&2&&(Dl.$$scope={dirty:p,ctx:o}),sn.$set(Dl);const Bl={};p&2&&(Bl.$$scope={dirty:p,ctx:o}),rn.$set(Bl);const Or={};p&2&&(Or.$$scope={dirty:p,ctx:o}),ln.$set(Or);const Wl={};p&2&&(Wl.$$scope={dirty:p,ctx:o}),dn.$set(Wl);const Ql={};p&2&&(Ql.$$scope={dirty:p,ctx:o}),hn.$set(Ql);const Ul={};p&2&&(Ul.$$scope={dirty:p,ctx:o}),mn.$set(Ul);const Hl={};p&2&&(Hl.$$scope={dirty:p,ctx:o}),fn.$set(Hl);const Rl={};p&2&&(Rl.$$scope={dirty:p,ctx:o}),gn.$set(Rl);const Vl={};p&2&&(Vl.$$scope={dirty:p,ctx:o}),_n.$set(Vl);const gt={};p&2&&(gt.$$scope={dirty:p,ctx:o}),wn.$set(gt);const Gl={};p&2&&(Gl.$$scope={dirty:p,ctx:o}),vn.$set(Gl);const Kl={};p&2&&(Kl.$$scope={dirty:p,ctx:o}),Tn.$set(Kl)},i(o){wc||(b(w.$$.fragment,o),b(ee.$$.fragment,o),b(oe.$$.fragment,o),b(yn.$$.fragment,o),b(Ln.$$.fragment,o),b($n.$$.fragment,o),b(Fn.$$.fragment,o),b(Mn.$$.fragment,o),b(En.$$.fragment,o),b(zn.$$.fragment,o),b(qn.$$.fragment,o),b(Cn.$$.fragment,o),b(Pn.$$.fragment,o),b(jn.$$.fragment,o),b(Nn.$$.fragment,o),b(An.$$.fragment,o),b(In.$$.fragment,o),b(Sn.$$.fragment,o),b(Dn.$$.fragment,o),b(Bn.$$.fragment,o),b(Wn.$$.fragment,o),b(Qn.$$.fragment,o),b(Un.$$.fragment,o),b(Hn.$$.fragment,o),b(Rn.$$.fragment,o),b(Vn.$$.fragment,o),b(Gn.$$.fragment,o),b(Kn.$$.fragment,o),b(Jn.$$.fragment,o),b(os.$$.fragment,o),b(Ro.$$.fragment,o),b(ns.$$.fragment,o),b(ss.$$.fragment,o),b(rs.$$.fragment,o),b(cs.$$.fragment,o),b(Go.$$.fragment,o),b(hs.$$.fragment,o),b(ms.$$.fragment,o),b(ps.$$.fragment,o),b(_s.$$.fragment,o),b(Jo.$$.fragment,o),b(ws.$$.fragment,o),b(ks.$$.fragment,o),b(vs.$$.fragment,o),b(Ts.$$.fragment,o),b($s.$$.fragment,o),b(Yo.$$.fragment,o),b(Fs.$$.fragment,o),b(xs.$$.fragment,o),b(Ms.$$.fragment,o),b(Cs.$$.fragment,o),b(en.$$.fragment,o),b(Os.$$.fragment,o),b(Ps.$$.fragment,o),b(js.$$.fragment,o),b(Ss.$$.fragment,o),b(on.$$.fragment,o),b(Ds.$$.fragment,o),b(Bs.$$.fragment,o),b(Ws.$$.fragment,o),b(sn.$$.fragment,o),b(Gs.$$.fragment,o),b(rn.$$.fragment,o),b(Ks.$$.fragment,o),b(Js.$$.fragment,o),b(ln.$$.fragment,o),b(tr.$$.fragment,o),b(dn.$$.fragment,o),b(or.$$.fragment,o),b(nr.$$.fragment,o),b(sr.$$.fragment,o),b(hn.$$.fragment,o),b(lr.$$.fragment,o),b(mn.$$.fragment,o),b(dr.$$.fragment,o),b(cr.$$.fragment,o),b(hr.$$.fragment,o),b(fn.$$.fragment,o),b(gr.$$.fragment,o),b(gn.$$.fragment,o),b(ur.$$.fragment,o),b(_r.$$.fragment,o),b(wr.$$.fragment,o),b(_n.$$.fragment,o),b(br.$$.fragment,o),b(wn.$$.fragment,o),b(yr.$$.fragment,o),b(Lr.$$.fragment,o),b($r.$$.fragment,o),b(vn.$$.fragment,o),b(Er.$$.fragment,o),b(Tn.$$.fragment,o),b(zr.$$.fragment,o),wc=!0)},o(o){y(w.$$.fragment,o),y(ee.$$.fragment,o),y(oe.$$.fragment,o),y(yn.$$.fragment,o),y(Ln.$$.fragment,o),y($n.$$.fragment,o),y(Fn.$$.fragment,o),y(Mn.$$.fragment,o),y(En.$$.fragment,o),y(zn.$$.fragment,o),y(qn.$$.fragment,o),y(Cn.$$.fragment,o),y(Pn.$$.fragment,o),y(jn.$$.fragment,o),y(Nn.$$.fragment,o),y(An.$$.fragment,o),y(In.$$.fragment,o),y(Sn.$$.fragment,o),y(Dn.$$.fragment,o),y(Bn.$$.fragment,o),y(Wn.$$.fragment,o),y(Qn.$$.fragment,o),y(Un.$$.fragment,o),y(Hn.$$.fragment,o),y(Rn.$$.fragment,o),y(Vn.$$.fragment,o),y(Gn.$$.fragment,o),y(Kn.$$.fragment,o),y(Jn.$$.fragment,o),y(os.$$.fragment,o),y(Ro.$$.fragment,o),y(ns.$$.fragment,o),y(ss.$$.fragment,o),y(rs.$$.fragment,o),y(cs.$$.fragment,o),y(Go.$$.fragment,o),y(hs.$$.fragment,o),y(ms.$$.fragment,o),y(ps.$$.fragment,o),y(_s.$$.fragment,o),y(Jo.$$.fragment,o),y(ws.$$.fragment,o),y(ks.$$.fragment,o),y(vs.$$.fragment,o),y(Ts.$$.fragment,o),y($s.$$.fragment,o),y(Yo.$$.fragment,o),y(Fs.$$.fragment,o),y(xs.$$.fragment,o),y(Ms.$$.fragment,o),y(Cs.$$.fragment,o),y(en.$$.fragment,o),y(Os.$$.fragment,o),y(Ps.$$.fragment,o),y(js.$$.fragment,o),y(Ss.$$.fragment,o),y(on.$$.fragment,o),y(Ds.$$.fragment,o),y(Bs.$$.fragment,o),y(Ws.$$.fragment,o),y(sn.$$.fragment,o),y(Gs.$$.fragment,o),y(rn.$$.fragment,o),y(Ks.$$.fragment,o),y(Js.$$.fragment,o),y(ln.$$.fragment,o),y(tr.$$.fragment,o),y(dn.$$.fragment,o),y(or.$$.fragment,o),y(nr.$$.fragment,o),y(sr.$$.fragment,o),y(hn.$$.fragment,o),y(lr.$$.fragment,o),y(mn.$$.fragment,o),y(dr.$$.fragment,o),y(cr.$$.fragment,o),y(hr.$$.fragment,o),y(fn.$$.fragment,o),y(gr.$$.fragment,o),y(gn.$$.fragment,o),y(ur.$$.fragment,o),y(_r.$$.fragment,o),y(wr.$$.fragment,o),y(_n.$$.fragment,o),y(br.$$.fragment,o),y(wn.$$.fragment,o),y(yr.$$.fragment,o),y(Lr.$$.fragment,o),y($r.$$.fragment,o),y(vn.$$.fragment,o),y(Er.$$.fragment,o),y(Tn.$$.fragment,o),y(zr.$$.fragment,o),wc=!1},d(o){t(f),o&&t(x),o&&t(g),L(w),o&&t(J),o&&t(E),L(ee),o&&t(le),o&&t(G),o&&t(C),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(q),o&&t(W),o&&t(re),o&&t(be),o&&t(he),o&&t(ye),o&&t(A),L(oe),o&&t(Zl),o&&t(Le),o&&t(ld),o&&t(ut),o&&t(hd),o&&t(_t),o&&t(md),o&&t(jo),o&&t(pd),o&&t(No),o&&t(fd),o&&t(Ve),o&&t(yd),o&&t(Ao),o&&t(Ld),o&&t(jt),L(yn),o&&t($d),o&&t(Nt),o&&t(Fd),L(Ln,o),o&&t(xd),o&&t(At),L($n),o&&t(Md),o&&t(je),L(Fn),L(Mn),o&&t(Ed),o&&t(Bt),L(En),o&&t(zd),o&&t(pt),L(zn),o&&t(qd),o&&t(Wt),L(qn),o&&t(Cd),o&&t(ft),L(Cn),o&&t(Od),o&&t(Qt),L(Pn),o&&t(Pd),o&&t(Ut),L(jn),o&&t(jd),o&&t(Ht),L(Nn),o&&t(Nd),o&&t(Rt),L(An),o&&t(Ad),o&&t(Vt),L(In),o&&t(Id),o&&t(Gt),L(Sn),o&&t(Sd),o&&t(Kt),L(Dn),o&&t(Dd),o&&t(Jt),L(Bn),o&&t(Bd),o&&t(Xt),L(Wn),o&&t(Wd),o&&t(Yt),L(Qn),o&&t(Qd),o&&t(Zt),L(Un),o&&t(Ud),o&&t(eo),L(Hn),o&&t(Hd),o&&t(to),L(Rn),o&&t(Rd),o&&t(oo),L(Vn),o&&t(Vd),o&&t(no),L(Gn),o&&t(Gd),o&&t(so),L(Kn),o&&t(Kd),o&&t(qe),L(Jn),L(os),L(Ro),L(ns),o&&t(Jd),o&&t(io),L(ss),o&&t(Xd),o&&t(We),L(rs),L(cs),L(Go),L(hs),o&&t(Yd),o&&t(co),L(ms),o&&t(Zd),o&&t(Qe),L(ps),L(_s),L(Jo),L(ws),L(ks),o&&t(ec),o&&t(mo),L(vs),o&&t(tc),o&&t(Ue),L(Ts),L($s),L(Yo),L(Fs),o&&t(oc),o&&t(fo),L(xs),o&&t(nc),o&&t(He),L(Ms),L(Cs),L(en),L(Os),o&&t(sc),o&&t(uo),L(Ps),o&&t(rc),o&&t(Re),L(js),L(Ss),L(on),L(Ds),o&&t(ac),o&&t(ko),L(Bs),o&&t(ic),o&&t(Ee),L(Ws),L(sn),L(Gs),L(rn),o&&t(lc),o&&t(bo),L(Ks),o&&t(dc),o&&t(Ne),L(Js),L(ln),L(tr),L(dn),L(or),o&&t(cc),o&&t(Lo),L(nr),o&&t(hc),o&&t(Ae),L(sr),L(hn),L(lr),L(mn),L(dr),o&&t(mc),o&&t(xo),L(cr),o&&t(pc),o&&t(Ie),L(hr),L(fn),L(gr),L(gn),L(ur),o&&t(fc),o&&t(Eo),L(_r),o&&t(gc),o&&t(Se),L(wr),L(_n),L(br),L(wn),L(yr),o&&t(uc),o&&t(qo),L(Lr),o&&t(_c),o&&t(De),L($r),L(vn),L(Er),L(Tn),L(zr)}}}const my={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function py(Q,f,x){let{fw:g}=f;return Q.$$set=u=>{"fw"in u&&x(0,g=u.fw)},[g]}class ky extends Qb{constructor(f){super();Ub(this,f,py,hy,Hb,{fw:0})}}export{ky as default,my as metadata};
