import{S as QT,i as HT,s as RT,e as a,k as l,w as k,t as n,Y as Oo,M as UT,c as r,d as t,m as d,a as i,x as v,h as s,Z as Po,b as c,F as e,g as h,y as b,q as T,o as y,B as L}from"../../chunks/vendor-6b77c823.js";import{T as Pe}from"../../chunks/Tip-39098574.js";import{D as B}from"../../chunks/Docstring-abef54e3.js";import{C as rt}from"../../chunks/CodeBlock-3a8b25a8.js";import{I as ze}from"../../chunks/IconCopyLink-7a11ce68.js";function VT(Q){let p,x,g,u,$;return{c(){p=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=r(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function GT(Q){let p,x,g,u,$;return{c(){p=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=r(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function KT(Q){let p,x,g,u,$;return{c(){p=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=r(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function JT(Q){let p,x,g,u,$;return{c(){p=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=r(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function XT(Q){let p,x,g,u,$;return{c(){p=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=r(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function YT(Q){let p,x,g,u,$;return{c(){p=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=r(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function ZT(Q){let p,x,g,u,$,w,_,M,me,J,E,Z,I,ee,fe,S,pe,le,G,P,te,X,z,C,ne,H,de,se,D,ge,ce,q,ue,W,ae,K,R,re,_e,j,ie,U,we;return{c(){p=a("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=a("ul"),$=a("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=a("p"),Z=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),le=n("."),G=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=a("code"),ge=n("model(inputs_ids)"),ce=l(),q=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),ae=n("model([input_ids, attention_mask])"),K=n(" or "),R=a("code"),re=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),j=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=r(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=r(m,"UL",{});var Y=i(u);$=r(Y,"LI",{});var Te=i($);w=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),_=d(Y),M=r(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=r(m,"P",{});var A=i(E);Z=s(A,"This second option is useful when using "),I=r(A,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(A,"CODE",{});var $e=i(S);pe=s($e,"model(inputs)"),$e.forEach(t),le=s(A,"."),A.forEach(t),G=d(m),P=r(m,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=r(m,"UL",{});var O=i(z);C=r(O,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),H=r(V,"CODE",{});var xe=i(H);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=r(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(O),q=r(O,"LI",{});var N=i(q);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(N,"CODE",{});var ke=i(W);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(N," or "),R=r(N,"CODE",{});var be=i(R);re=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(t),N.forEach(t),_e=d(O),j=r(O,"LI",{});var oe=i(j);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(oe,"CODE",{});var Me=i(U);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),O.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,fe),e(E,S),e(S,pe),e(E,le),h(m,G,F),h(m,P,F),e(P,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,ae),e(q,K),e(q,R),e(R,re),e(z,_e),e(z,j),e(j,ie),e(j,U),e(U,we)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(P),m&&t(X),m&&t(z)}}}function ey(Q){let p,x,g,u,$;return{c(){p=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=r(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function ty(Q){let p,x,g,u,$,w,_,M,me,J,E,Z,I,ee,fe,S,pe,le,G,P,te,X,z,C,ne,H,de,se,D,ge,ce,q,ue,W,ae,K,R,re,_e,j,ie,U,we;return{c(){p=a("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=a("ul"),$=a("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=a("p"),Z=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),le=n("."),G=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=a("code"),ge=n("model(inputs_ids)"),ce=l(),q=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),ae=n("model([input_ids, attention_mask])"),K=n(" or "),R=a("code"),re=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),j=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=r(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=r(m,"UL",{});var Y=i(u);$=r(Y,"LI",{});var Te=i($);w=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),_=d(Y),M=r(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=r(m,"P",{});var A=i(E);Z=s(A,"This second option is useful when using "),I=r(A,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(A,"CODE",{});var $e=i(S);pe=s($e,"model(inputs)"),$e.forEach(t),le=s(A,"."),A.forEach(t),G=d(m),P=r(m,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=r(m,"UL",{});var O=i(z);C=r(O,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),H=r(V,"CODE",{});var xe=i(H);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=r(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(O),q=r(O,"LI",{});var N=i(q);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(N,"CODE",{});var ke=i(W);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(N," or "),R=r(N,"CODE",{});var be=i(R);re=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(t),N.forEach(t),_e=d(O),j=r(O,"LI",{});var oe=i(j);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(oe,"CODE",{});var Me=i(U);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),O.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,fe),e(E,S),e(S,pe),e(E,le),h(m,G,F),h(m,P,F),e(P,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,ae),e(q,K),e(q,R),e(R,re),e(z,_e),e(z,j),e(j,ie),e(j,U),e(U,we)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(P),m&&t(X),m&&t(z)}}}function oy(Q){let p,x,g,u,$;return{c(){p=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=r(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function ny(Q){let p,x,g,u,$,w,_,M,me,J,E,Z,I,ee,fe,S,pe,le,G,P,te,X,z,C,ne,H,de,se,D,ge,ce,q,ue,W,ae,K,R,re,_e,j,ie,U,we;return{c(){p=a("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=a("ul"),$=a("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=a("p"),Z=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),le=n("."),G=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=a("code"),ge=n("model(inputs_ids)"),ce=l(),q=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),ae=n("model([input_ids, attention_mask])"),K=n(" or "),R=a("code"),re=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),j=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=r(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=r(m,"UL",{});var Y=i(u);$=r(Y,"LI",{});var Te=i($);w=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),_=d(Y),M=r(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=r(m,"P",{});var A=i(E);Z=s(A,"This second option is useful when using "),I=r(A,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(A,"CODE",{});var $e=i(S);pe=s($e,"model(inputs)"),$e.forEach(t),le=s(A,"."),A.forEach(t),G=d(m),P=r(m,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=r(m,"UL",{});var O=i(z);C=r(O,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),H=r(V,"CODE",{});var xe=i(H);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=r(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(O),q=r(O,"LI",{});var N=i(q);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(N,"CODE",{});var ke=i(W);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(N," or "),R=r(N,"CODE",{});var be=i(R);re=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(t),N.forEach(t),_e=d(O),j=r(O,"LI",{});var oe=i(j);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(oe,"CODE",{});var Me=i(U);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),O.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,fe),e(E,S),e(S,pe),e(E,le),h(m,G,F),h(m,P,F),e(P,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,ae),e(q,K),e(q,R),e(R,re),e(z,_e),e(z,j),e(j,ie),e(j,U),e(U,we)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(P),m&&t(X),m&&t(z)}}}function sy(Q){let p,x,g,u,$;return{c(){p=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=r(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function ay(Q){let p,x,g,u,$,w,_,M,me,J,E,Z,I,ee,fe,S,pe,le,G,P,te,X,z,C,ne,H,de,se,D,ge,ce,q,ue,W,ae,K,R,re,_e,j,ie,U,we;return{c(){p=a("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=a("ul"),$=a("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=a("p"),Z=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),le=n("."),G=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=a("code"),ge=n("model(inputs_ids)"),ce=l(),q=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),ae=n("model([input_ids, attention_mask])"),K=n(" or "),R=a("code"),re=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),j=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=r(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=r(m,"UL",{});var Y=i(u);$=r(Y,"LI",{});var Te=i($);w=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),_=d(Y),M=r(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=r(m,"P",{});var A=i(E);Z=s(A,"This second option is useful when using "),I=r(A,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(A,"CODE",{});var $e=i(S);pe=s($e,"model(inputs)"),$e.forEach(t),le=s(A,"."),A.forEach(t),G=d(m),P=r(m,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=r(m,"UL",{});var O=i(z);C=r(O,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),H=r(V,"CODE",{});var xe=i(H);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=r(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(O),q=r(O,"LI",{});var N=i(q);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(N,"CODE",{});var ke=i(W);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(N," or "),R=r(N,"CODE",{});var be=i(R);re=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(t),N.forEach(t),_e=d(O),j=r(O,"LI",{});var oe=i(j);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(oe,"CODE",{});var Me=i(U);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),O.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,fe),e(E,S),e(S,pe),e(E,le),h(m,G,F),h(m,P,F),e(P,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,ae),e(q,K),e(q,R),e(R,re),e(z,_e),e(z,j),e(j,ie),e(j,U),e(U,we)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(P),m&&t(X),m&&t(z)}}}function ry(Q){let p,x,g,u,$;return{c(){p=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=r(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function iy(Q){let p,x,g,u,$,w,_,M,me,J,E,Z,I,ee,fe,S,pe,le,G,P,te,X,z,C,ne,H,de,se,D,ge,ce,q,ue,W,ae,K,R,re,_e,j,ie,U,we;return{c(){p=a("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=a("ul"),$=a("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=a("p"),Z=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),le=n("."),G=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=a("code"),ge=n("model(inputs_ids)"),ce=l(),q=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),ae=n("model([input_ids, attention_mask])"),K=n(" or "),R=a("code"),re=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),j=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=r(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=r(m,"UL",{});var Y=i(u);$=r(Y,"LI",{});var Te=i($);w=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),_=d(Y),M=r(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=r(m,"P",{});var A=i(E);Z=s(A,"This second option is useful when using "),I=r(A,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(A,"CODE",{});var $e=i(S);pe=s($e,"model(inputs)"),$e.forEach(t),le=s(A,"."),A.forEach(t),G=d(m),P=r(m,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=r(m,"UL",{});var O=i(z);C=r(O,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),H=r(V,"CODE",{});var xe=i(H);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=r(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(O),q=r(O,"LI",{});var N=i(q);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(N,"CODE",{});var ke=i(W);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(N," or "),R=r(N,"CODE",{});var be=i(R);re=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(t),N.forEach(t),_e=d(O),j=r(O,"LI",{});var oe=i(j);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(oe,"CODE",{});var Me=i(U);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),O.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,fe),e(E,S),e(S,pe),e(E,le),h(m,G,F),h(m,P,F),e(P,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,ae),e(q,K),e(q,R),e(R,re),e(z,_e),e(z,j),e(j,ie),e(j,U),e(U,we)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(P),m&&t(X),m&&t(z)}}}function ly(Q){let p,x,g,u,$;return{c(){p=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=r(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function dy(Q){let p,x,g,u,$,w,_,M,me,J,E,Z,I,ee,fe,S,pe,le,G,P,te,X,z,C,ne,H,de,se,D,ge,ce,q,ue,W,ae,K,R,re,_e,j,ie,U,we;return{c(){p=a("p"),x=n("TF 2.0 models accepts two formats as inputs:"),g=l(),u=a("ul"),$=a("li"),w=n("having all inputs as keyword arguments (like PyTorch models), or"),_=l(),M=a("li"),me=n("having all inputs as a list, tuple or dict in the first positional arguments."),J=l(),E=a("p"),Z=n("This second option is useful when using "),I=a("code"),ee=n("tf.keras.Model.fit"),fe=n(` method which currently requires having all the
tensors in the first argument of the model call function: `),S=a("code"),pe=n("model(inputs)"),le=n("."),G=l(),P=a("p"),te=n(`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),X=l(),z=a("ul"),C=a("li"),ne=n("a single Tensor with "),H=a("code"),de=n("input_ids"),se=n(" only and nothing else: "),D=a("code"),ge=n("model(inputs_ids)"),ce=l(),q=a("li"),ue=n(`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=a("code"),ae=n("model([input_ids, attention_mask])"),K=n(" or "),R=a("code"),re=n("model([input_ids, attention_mask, token_type_ids])"),_e=l(),j=a("li"),ie=n(`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=a("code"),we=n('model({"input_ids": input_ids, "token_type_ids": token_type_ids})')},l(m){p=r(m,"P",{});var F=i(p);x=s(F,"TF 2.0 models accepts two formats as inputs:"),F.forEach(t),g=d(m),u=r(m,"UL",{});var Y=i(u);$=r(Y,"LI",{});var Te=i($);w=s(Te,"having all inputs as keyword arguments (like PyTorch models), or"),Te.forEach(t),_=d(Y),M=r(Y,"LI",{});var he=i(M);me=s(he,"having all inputs as a list, tuple or dict in the first positional arguments."),he.forEach(t),Y.forEach(t),J=d(m),E=r(m,"P",{});var A=i(E);Z=s(A,"This second option is useful when using "),I=r(A,"CODE",{});var ve=i(I);ee=s(ve,"tf.keras.Model.fit"),ve.forEach(t),fe=s(A,` method which currently requires having all the
tensors in the first argument of the model call function: `),S=r(A,"CODE",{});var $e=i(S);pe=s($e,"model(inputs)"),$e.forEach(t),le=s(A,"."),A.forEach(t),G=d(m),P=r(m,"P",{});var Fe=i(P);te=s(Fe,`If you choose this second option, there are three possibilities you can use to gather all the input Tensors in the
first positional argument :`),Fe.forEach(t),X=d(m),z=r(m,"UL",{});var O=i(z);C=r(O,"LI",{});var V=i(C);ne=s(V,"a single Tensor with "),H=r(V,"CODE",{});var xe=i(H);de=s(xe,"input_ids"),xe.forEach(t),se=s(V," only and nothing else: "),D=r(V,"CODE",{});var ye=i(D);ge=s(ye,"model(inputs_ids)"),ye.forEach(t),V.forEach(t),ce=d(O),q=r(O,"LI",{});var N=i(q);ue=s(N,`a list of varying length with one or several input Tensors IN THE ORDER given in the docstring:
`),W=r(N,"CODE",{});var ke=i(W);ae=s(ke,"model([input_ids, attention_mask])"),ke.forEach(t),K=s(N," or "),R=r(N,"CODE",{});var be=i(R);re=s(be,"model([input_ids, attention_mask, token_type_ids])"),be.forEach(t),N.forEach(t),_e=d(O),j=r(O,"LI",{});var oe=i(j);ie=s(oe,`a dictionary with one or several input Tensors associated to the input names given in the docstring:
`),U=r(oe,"CODE",{});var Me=i(U);we=s(Me,'model({"input_ids": input_ids, "token_type_ids": token_type_ids})'),Me.forEach(t),oe.forEach(t),O.forEach(t)},m(m,F){h(m,p,F),e(p,x),h(m,g,F),h(m,u,F),e(u,$),e($,w),e(u,_),e(u,M),e(M,me),h(m,J,F),h(m,E,F),e(E,Z),e(E,I),e(I,ee),e(E,fe),e(E,S),e(S,pe),e(E,le),h(m,G,F),h(m,P,F),e(P,te),h(m,X,F),h(m,z,F),e(z,C),e(C,ne),e(C,H),e(H,de),e(C,se),e(C,D),e(D,ge),e(z,ce),e(z,q),e(q,ue),e(q,W),e(W,ae),e(q,K),e(q,R),e(R,re),e(z,_e),e(z,j),e(j,ie),e(j,U),e(U,we)},d(m){m&&t(p),m&&t(g),m&&t(u),m&&t(J),m&&t(E),m&&t(G),m&&t(P),m&&t(X),m&&t(z)}}}function cy(Q){let p,x,g,u,$;return{c(){p=a("p"),x=n("Although the recipe for forward pass needs to be defined within this function, one should call the "),g=a("code"),u=n("Module"),$=n(`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`)},l(w){p=r(w,"P",{});var _=i(p);x=s(_,"Although the recipe for forward pass needs to be defined within this function, one should call the "),g=r(_,"CODE",{});var M=i(g);u=s(M,"Module"),M.forEach(t),$=s(_,`
instance afterwards instead of this since the former takes care of running the pre and post processing steps while
the latter silently ignores them.`),_.forEach(t)},m(w,_){h(w,p,_),e(p,x),e(p,g),e(g,u),e(p,$)},d(w){w&&t(p)}}}function hy(Q){let p,x,g,u,$,w,_,M,me,J,E,Z,I,ee,fe,S,pe,le,G,P,te,X,z,C,ne,H,de,se,D,ge,ce,q,ue,W,ae,K,R,re,_e,j,ie,U,we,m,F,Y,Te,he,A,ve,$e,Fe,O,V,xe,ye,N,ke,be,oe,Me,Qr,Eh,Zl,Le,zh,ed,PT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',td,od,jT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mfrac><mn>1</mn><mn>2</mn></mfrac><mi>w</mi></mrow><annotation encoding="application/x-tex">\\frac{1}{2} w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1.1901em;vertical-align:-0.345em;"></span><span class="mord"><span class="mopen nulldelimiter"></span><span class="mfrac"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.8451em;"><span style="top:-2.655em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">2</span></span></span></span><span style="top:-3.23em;"><span class="pstrut" style="height:3em;"></span><span class="frac-line" style="border-bottom-width:0.04em;"></span></span><span style="top:-3.394em;"><span class="pstrut" style="height:3em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mtight"><span class="mord mtight">1</span></span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.345em;"><span></span></span></span></span></span><span class="mclose nulldelimiter"></span></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',nd,sd,AT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',ad,Hr,qh,Ch,Rr,Oh,Ph,Ur,jh,Ah,rd,NT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',id,Vr,Nh,Ih,ld,ut,Sh,dd,IT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',cd,Gr,Dh,Bh,hd,_t,Wh,Kr,Qh,Hh,Jr,Rh,Uh,md,jo,Xr,Vh,Gh,Yr,Kh,fd,Ao,Jh,Pa,Xh,Yh,pd,Ve,Zh,gd,ST='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><msub><mi>n</mi><mi>s</mi></msub><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times n_s)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mclose">)</span></span></span></span>',ud,_d,DT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi mathvariant="script">O</mi><mo stretchy="false">(</mo><msub><mi>n</mi><mi>s</mi></msub><mo>\xD7</mo><mi>w</mi><mo stretchy="false">)</mo></mrow><annotation encoding="application/x-tex">\\mathcal{O}(n_s \\times w)</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathcal" style="margin-right:0.02778em;">O</span><span class="mopen">(</span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span><span class="mspace" style="margin-right:0.2222em;"></span><span class="mbin">\xD7</span><span class="mspace" style="margin-right:0.2222em;"></span></span><span class="base"><span class="strut" style="height:1em;vertical-align:-0.25em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span><span class="mclose">)</span></span></span></span>',wd,kd,BT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><msub><mi>n</mi><mi>s</mi></msub></mrow><annotation encoding="application/x-tex">n_s</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.5806em;vertical-align:-0.15em;"></span><span class="mord"><span class="mord mathnormal">n</span><span class="msupsub"><span class="vlist-t vlist-t2"><span class="vlist-r"><span class="vlist" style="height:0.1514em;"><span style="top:-2.55em;margin-left:0em;margin-right:0.05em;"><span class="pstrut" style="height:2.7em;"></span><span class="sizing reset-size6 size3 mtight"><span class="mord mathnormal mtight">s</span></span></span></span><span class="vlist-s">\u200B</span></span><span class="vlist-r"><span class="vlist" style="height:0.15em;"><span></span></span></span></span></span></span></span></span></span>',vd,bd,WT='<span class="katex"><span class="katex-mathml"><math xmlns="http://www.w3.org/1998/Math/MathML"><semantics><mrow><mi>w</mi></mrow><annotation encoding="application/x-tex">w</annotation></semantics></math></span><span class="katex-html" aria-hidden="true"><span class="base"><span class="strut" style="height:0.4306em;"></span><span class="mord mathnormal" style="margin-right:0.02691em;">w</span></span></span></span>',Td,yd,No,em,Tn,tm,om,Ld,jt,Io,Zr,yn,nm,ei,sm,$d,At,ja,am,rm,Aa,im,lm,Fd,Ln,xd,Nt,So,ti,$n,dm,oi,cm,Md,je,Fn,hm,It,mm,Na,fm,pm,Ia,gm,um,_m,St,wm,Sa,km,vm,xn,bm,Tm,ym,Dt,Lm,Da,$m,Fm,Ba,xm,Mm,Em,ni,zm,qm,Mn,Ed,Bt,Do,si,En,Cm,ai,Om,zd,ft,zn,Pm,ri,jm,Am,Bo,Wa,Nm,Im,Qa,Sm,Dm,qd,Wt,Wo,ii,qn,Bm,li,Wm,Cd,pt,Cn,Qm,On,Hm,di,Rm,Um,Vm,Qo,Ha,Gm,Km,Ra,Jm,Xm,Od,Qt,Ho,ci,Pn,Ym,hi,Zm,Pd,Ht,jn,ef,mi,tf,jd,Rt,An,of,fi,nf,Ad,Ut,Nn,sf,pi,af,Nd,Vt,In,rf,gi,lf,Id,Gt,Sn,df,ui,cf,Sd,Kt,Dn,hf,_i,mf,Dd,Jt,Bn,ff,wi,pf,Bd,Xt,Wn,gf,ki,uf,Wd,Yt,Qn,_f,vi,wf,Qd,Zt,Hn,kf,bi,vf,Hd,eo,Rn,bf,Ti,Tf,Rd,to,Un,yf,yi,Lf,Ud,oo,Vn,$f,Li,Ff,Vd,no,Gn,xf,$i,Mf,Gd,so,Ro,Fi,Kn,Ef,xi,zf,Kd,qe,Jn,qf,Mi,Cf,Of,Xn,Pf,Ua,jf,Af,Nf,Yn,If,Zn,Sf,Df,Bf,ao,Wf,Va,Qf,Hf,es,Rf,Uf,Vf,ts,Gf,Ei,Kf,Jf,Xf,Ge,os,Yf,ro,Zf,Ga,ep,tp,zi,op,np,sp,Uo,ap,qi,rp,ip,ns,Jd,io,Vo,Ci,ss,lp,Oi,dp,Xd,We,as,cp,rs,hp,Pi,mp,fp,pp,is,gp,Ka,up,_p,wp,ls,kp,ds,vp,bp,Tp,Ke,cs,yp,lo,Lp,Ja,$p,Fp,ji,xp,Mp,Ep,Go,zp,Ai,qp,Cp,hs,Yd,co,Ko,Ni,ms,Op,Ii,Pp,Zd,Qe,fs,jp,Si,Ap,Np,ps,Ip,Xa,Sp,Dp,Bp,gs,Wp,us,Qp,Hp,Rp,Ce,_s,Up,ho,Vp,Ya,Gp,Kp,Di,Jp,Xp,Yp,Jo,Zp,Bi,eg,tg,ws,og,Wi,ng,sg,ks,ec,mo,Xo,Qi,vs,ag,Hi,rg,tc,He,bs,ig,Ri,lg,dg,Ts,cg,Za,hg,mg,fg,ys,pg,Ls,gg,ug,_g,Je,$s,wg,fo,kg,er,vg,bg,Ui,Tg,yg,Lg,Yo,$g,Vi,Fg,xg,Fs,oc,po,Zo,Gi,xs,Mg,Ki,Eg,nc,Re,Ms,zg,Ji,qg,Cg,Es,Og,tr,Pg,jg,Ag,zs,Ng,qs,Ig,Sg,Dg,Xe,Cs,Bg,go,Wg,or,Qg,Hg,Xi,Rg,Ug,Vg,en,Gg,Yi,Kg,Jg,Os,sc,uo,tn,Zi,Ps,Xg,el,Yg,ac,Ue,js,Zg,_o,eu,tl,tu,ou,ol,nu,su,au,As,ru,nr,iu,lu,du,Ns,cu,Is,hu,mu,fu,Ye,Ss,pu,wo,gu,sr,uu,_u,nl,wu,ku,vu,on,bu,sl,Tu,yu,Ds,rc,ko,nn,al,Bs,Lu,rl,$u,ic,Ee,Ws,Fu,il,xu,Mu,Qs,Eu,ar,zu,qu,Cu,Hs,Ou,Rs,Pu,ju,Au,sn,Nu,vo,Iu,rr,Su,Du,Us,Bu,Wu,Qu,Vs,Hu,ll,Ru,Uu,Vu,wt,Gs,Gu,bo,Ku,ir,Ju,Xu,dl,Yu,Zu,e_,an,lc,To,rn,cl,Ks,t_,hl,o_,dc,Ae,Js,n_,Xs,s_,ml,a_,r_,i_,Ys,l_,lr,d_,c_,h_,Zs,m_,ea,f_,p_,g_,ln,u_,Ze,ta,__,yo,w_,dr,k_,v_,fl,b_,T_,y_,dn,L_,pl,$_,F_,oa,cc,Lo,cn,gl,na,x_,ul,M_,hc,Ne,sa,E_,$o,z_,_l,q_,C_,wl,O_,P_,j_,aa,A_,cr,N_,I_,S_,ra,D_,ia,B_,W_,Q_,hn,H_,et,la,R_,Fo,U_,hr,V_,G_,kl,K_,J_,X_,mn,Y_,vl,Z_,ew,da,mc,xo,fn,bl,ca,tw,Tl,ow,fc,Ie,ha,nw,yl,sw,aw,ma,rw,mr,iw,lw,dw,fa,cw,pa,hw,mw,fw,pn,pw,tt,ga,gw,Mo,uw,fr,_w,ww,Ll,kw,vw,bw,gn,Tw,$l,yw,Lw,ua,pc,Eo,un,Fl,_a,$w,xl,Fw,gc,Se,wa,xw,Ml,Mw,Ew,ka,zw,pr,qw,Cw,Ow,va,Pw,ba,jw,Aw,Nw,_n,Iw,ot,Ta,Sw,zo,Dw,gr,Bw,Ww,El,Qw,Hw,Rw,wn,Uw,zl,Vw,Gw,ya,uc,qo,kn,ql,La,Kw,Cl,Jw,_c,De,$a,Xw,Ol,Yw,Zw,Fa,ek,ur,tk,ok,nk,xa,sk,Ma,ak,rk,ik,vn,lk,nt,Ea,dk,Co,ck,_r,hk,mk,Pl,fk,pk,gk,bn,uk,jl,_k,wk,za,wc;return w=new ze({}),ee=new ze({}),oe=new ze({}),yn=new ze({}),Ln=new rt({props:{code:`input_ids = tokenizer.encode("This is a sentence from [MASK] training data", return_tensors="pt")
mlm_labels = tokenizer.encode("This is a sentence from the training data", return_tensors="pt")

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[0]`,highlighted:`input_ids = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from [MASK] training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)
mlm_labels = tokenizer.encode(<span class="hljs-string">&quot;This is a sentence from the training data&quot;</span>, return_tensors=<span class="hljs-string">&quot;pt&quot;</span>)

loss = model(input_ids, labels=input_ids, masked_lm_labels=mlm_labels)[<span class="hljs-number">0</span>]`}}),$n=new ze({}),Fn=new B({props:{name:"class transformers.LongformerConfig",anchor:"transformers.LongformerConfig",parameters:[{name:"attention_window",val:": typing.Union[typing.List[int], int] = 512"},{name:"sep_token_id",val:": int = 2"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/configuration_longformer.py#L33",parametersDescription:[{anchor:"transformers.LongformerConfig.attention_window",description:`<strong>attention_window</strong> (<code>int</code> or <code>List[int]</code>, <em>optional</em>, defaults to 512) &#x2014;
Size of an attention window around each token. If an <code>int</code>, use the same size for all layers. To specify a
different window size for each layer, use a <code>List[int]</code> where <code>len(attention_window) == num_hidden_layers</code>.`,name:"attention_window"}]}}),Mn=new rt({props:{code:`from transformers import LongformerConfig, LongformerModel

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
in the sequence.`,name:"global_attentions"}]}}),An=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": FloatTensor"},{name:"pooler_output",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L104",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>torch.FloatTensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Nn=new B({props:{name:"class transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[torch.FloatTensor] = None"},{name:"logits",val:": FloatTensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[torch.FloatTensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L152",parametersDescription:[{anchor:"transformers.models.longformer.modeling_longformer.LongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>torch.FloatTensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Wn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L66",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutput.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Qn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling",parameters:[{name:"last_hidden_state",val:": Tensor = None"},{name:"pooler_output",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L109",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerBaseModelOutputWithPooling.last_hidden_state",description:`<strong>last_hidden_state</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Hn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L157",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMaskedLMOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Rn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"start_logits",val:": Tensor = None"},{name:"end_logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L203",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerQuestionAnsweringModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Un=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L252",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerSequenceClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Vn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L298",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerMultipleChoiceModelOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <em>(1,)</em>, <em>optional</em>, returned when <code>labels</code> is provided) &#x2014;
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
in the sequence.`,name:"global_attentions"}]}}),Gn=new B({props:{name:"class transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput",parameters:[{name:"loss",val:": typing.Optional[tensorflow.python.framework.ops.Tensor] = None"},{name:"logits",val:": Tensor = None"},{name:"hidden_states",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"},{name:"global_attentions",val:": typing.Optional[typing.Tuple[tensorflow.python.framework.ops.Tensor]] = None"}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L346",parametersDescription:[{anchor:"transformers.models.longformer.modeling_tf_longformer.TFLongformerTokenClassifierOutput.loss",description:`<strong>loss</strong> (<code>tf.Tensor</code> of shape <code>(1,)</code>, <em>optional</em>, returned when <code>labels</code> is provided)  &#x2014;
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
`}}),Uo=new Pe({props:{$$slots:{default:[VT]},$$scope:{ctx:Q}}}),ns=new rt({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>pooled_output = outputs.pooler_output`}}),ss=new ze({}),as=new B({props:{name:"class transformers.LongformerForMaskedLM",anchor:"transformers.LongformerForMaskedLM",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L1732",parametersDescription:[{anchor:"transformers.LongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
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
`}}),Go=new Pe({props:{$$slots:{default:[GT]},$$scope:{ctx:Q}}}),hs=new rt({props:{code:`import torch
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
<span class="hljs-meta">&gt;&gt;&gt; </span>prediction_logits = outputs.logits`}}),ms=new ze({}),fs=new B({props:{name:"class transformers.LongformerForSequenceClassification",anchor:"transformers.LongformerForSequenceClassification",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L1837",parametersDescription:[{anchor:"transformers.LongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
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
`}}),Jo=new Pe({props:{$$slots:{default:[KT]},$$scope:{ctx:Q}}}),ws=new rt({props:{code:`import torch
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
`}}),ks=new rt({props:{code:`import torch
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
`}}),vs=new ze({}),bs=new B({props:{name:"class transformers.LongformerForMultipleChoice",anchor:"transformers.LongformerForMultipleChoice",parameters:[{name:"config",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_longformer.py#L2188",parametersDescription:[{anchor:"transformers.LongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the
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
`}}),Yo=new Pe({props:{$$slots:{default:[JT]},$$scope:{ctx:Q}}}),Fs=new rt({props:{code:`from transformers import LongformerTokenizer, LongformerForMultipleChoice
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
`}}),en=new Pe({props:{$$slots:{default:[XT]},$$scope:{ctx:Q}}}),Os=new rt({props:{code:`from transformers import LongformerTokenizer, LongformerForTokenClassification
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
`}}),on=new Pe({props:{$$slots:{default:[YT]},$$scope:{ctx:Q}}}),Ds=new rt({props:{code:`from transformers import LongformerTokenizer, LongformerForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>)  <span class="hljs-comment"># remove space prepending space token</span>`}}),Bs=new ze({}),Ws=new B({props:{name:"class transformers.TFLongformerModel",anchor:"transformers.TFLongformerModel",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2006",parametersDescription:[{anchor:"transformers.TFLongformerModel.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),sn=new Pe({props:{$$slots:{default:[ZT]},$$scope:{ctx:Q}}}),Gs=new B({props:{name:"call",anchor:"transformers.TFLongformerModel.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2028",parametersDescription:[{anchor:"transformers.TFLongformerModel.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerModel.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerModel.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerModel.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerModel.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerModel.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerModel.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
behaviors between training and evaluation).`,name:"training"}]}}),an=new Pe({props:{$$slots:{default:[ey]},$$scope:{ctx:Q}}}),Ks=new ze({}),Js=new B({props:{name:"class transformers.TFLongformerForMaskedLM",anchor:"transformers.TFLongformerForMaskedLM",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2094",parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),ln=new Pe({props:{$$slots:{default:[ty]},$$scope:{ctx:Q}}}),ta=new B({props:{name:"call",anchor:"transformers.TFLongformerForMaskedLM.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2111",parametersDescription:[{anchor:"transformers.TFLongformerForMaskedLM.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMaskedLM.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMaskedLM.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
`}}),dn=new Pe({props:{$$slots:{default:[oy]},$$scope:{ctx:Q}}}),oa=new rt({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMaskedLM
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),na=new ze({}),sa=new B({props:{name:"class transformers.TFLongformerForQuestionAnswering",anchor:"transformers.TFLongformerForQuestionAnswering",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2205",parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),hn=new Pe({props:{$$slots:{default:[ny]},$$scope:{ctx:Q}}}),la=new B({props:{name:"call",anchor:"transformers.TFLongformerForQuestionAnswering.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"start_positions",val:" = None"},{name:"end_positions",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2220",parametersDescription:[{anchor:"transformers.TFLongformerForQuestionAnswering.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForQuestionAnswering.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
`}}),mn=new Pe({props:{$$slots:{default:[sy]},$$scope:{ctx:Q}}}),da=new rt({props:{code:`from transformers import LongformerTokenizer, TFLongformerForQuestionAnswering
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
<span class="hljs-meta">&gt;&gt;&gt; </span>answer = <span class="hljs-string">&quot; &quot;</span>.join(all_tokens[tf.math.argmax(start_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] : tf.math.argmax(end_logits, <span class="hljs-number">1</span>)[<span class="hljs-number">0</span>] + <span class="hljs-number">1</span>])`}}),ca=new ze({}),ha=new B({props:{name:"class transformers.TFLongformerForSequenceClassification",anchor:"transformers.TFLongformerForSequenceClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2377",parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),pn=new Pe({props:{$$slots:{default:[ay]},$$scope:{ctx:Q}}}),ga=new B({props:{name:"call",anchor:"transformers.TFLongformerForSequenceClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2389",parametersDescription:[{anchor:"transformers.TFLongformerForSequenceClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForSequenceClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForSequenceClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
`}}),gn=new Pe({props:{$$slots:{default:[ry]},$$scope:{ctx:Q}}}),ua=new rt({props:{code:`from transformers import LongformerTokenizer, TFLongformerForSequenceClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),_a=new ze({}),wa=new B({props:{name:"class transformers.TFLongformerForTokenClassification",anchor:"transformers.TFLongformerForTokenClassification",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2652",parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),_n=new Pe({props:{$$slots:{default:[iy]},$$scope:{ctx:Q}}}),Ta=new B({props:{name:"call",anchor:"transformers.TFLongformerForTokenClassification.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2667",parametersDescription:[{anchor:"transformers.TFLongformerForTokenClassification.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForTokenClassification.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForTokenClassification.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
`}}),wn=new Pe({props:{$$slots:{default:[ly]},$$scope:{ctx:Q}}}),ya=new rt({props:{code:`from transformers import LongformerTokenizer, TFLongformerForTokenClassification
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),La=new ze({}),$a=new B({props:{name:"class transformers.TFLongformerForMultipleChoice",anchor:"transformers.TFLongformerForMultipleChoice",parameters:[{name:"*args",val:""},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2493",parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.config",description:`<strong>config</strong> (<a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig">LongformerConfig</a>) &#x2014; Model configuration class with all the parameters of the model.
Initializing with a config file does not load the weights associated with the model, only the
configuration. Check out the <a href="/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel.from_pretrained">from_pretrained()</a> method to load the model weights.`,name:"config"}]}}),vn=new Pe({props:{$$slots:{default:[dy]},$$scope:{ctx:Q}}}),Ea=new B({props:{name:"call",anchor:"transformers.TFLongformerForMultipleChoice.call",parameters:[{name:"input_ids",val:" = None"},{name:"attention_mask",val:" = None"},{name:"head_mask",val:" = None"},{name:"token_type_ids",val:" = None"},{name:"position_ids",val:" = None"},{name:"global_attention_mask",val:" = None"},{name:"inputs_embeds",val:" = None"},{name:"output_attentions",val:" = None"},{name:"output_hidden_states",val:" = None"},{name:"return_dict",val:" = None"},{name:"labels",val:" = None"},{name:"training",val:" = False"},{name:"**kwargs",val:""}],source:"https://github.com/huggingface/transformers/blob/master/src/transformers/models/longformer/modeling_tf_longformer.py#L2513",parametersDescription:[{anchor:"transformers.TFLongformerForMultipleChoice.call.input_ids",description:`<strong>input_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>) &#x2014;
Indices of input sequence tokens in the vocabulary.</p>
<p>Indices can be obtained using <a href="/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer">LongformerTokenizer</a>. See <a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.__call__">PreTrainedTokenizer.<strong>call</strong>()</a> and
<a href="/docs/transformers/master/en/internal/tokenization_utils#transformers.PreTrainedTokenizerBase.encode">PreTrainedTokenizer.encode()</a> for details.</p>
<p><a href="../glossary#input-ids">What are input IDs?</a>`,name:"input_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.attention_mask",description:`<strong>attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to avoid performing attention on padding token indices. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 for tokens that are <strong>not masked</strong>,</li>
<li>0 for tokens that are <strong>masked</strong>.</li>
</ul>
<p><a href="../glossary#attention-mask">What are attention masks?</a>`,name:"attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.head_mask",description:`<strong>head_mask</strong> (<code>tf.Tensor</code> of shape <code>(encoder_layers, encoder_attention_heads)</code>, <em>optional</em>) &#x2014;
Mask to nullify selected heads of the attention modules. Mask values selected in <code>[0, 1]</code>:</p>
<ul>
<li>1 indicates the head is <strong>not masked</strong>,</li>
<li>0 indicates the head is <strong>masked</strong>.</li>
</ul>`,name:"head_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.global_attention_mask",description:`<strong>global_attention_mask</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Mask to decide the attention given on each token, local attention or global attention. Tokens with global
attention attends to all other tokens, and all other tokens attend to them. This is important for
task-specific finetuning because it makes the model more flexible at representing the task. For example,
for classification, the <s> token should be given global attention. For QA, all question tokens should also
have global attention. Please refer to the <a href="https://arxiv.org/abs/2004.05150" rel="nofollow">Longformer paper</a> for more
details. Mask values selected in <code>[0, 1]</code>:</s></p>
<ul>
<li>0 for local attention (a sliding window attention),</li>
<li>1 for global attention (tokens that attend to all other tokens, and all other tokens attend to them).</li>
</ul>`,name:"global_attention_mask"},{anchor:"transformers.TFLongformerForMultipleChoice.call.token_type_ids",description:`<strong>token_type_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Segment token indices to indicate first and second portions of the inputs. Indices are selected in <code>[0, 1]</code>:</p>
<ul>
<li>0 corresponds to a <em>sentence A</em> token,</li>
<li>1 corresponds to a <em>sentence B</em> token.</li>
</ul>
<p><a href="../glossary#token-type-ids">What are token type IDs?</a>`,name:"token_type_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.position_ids",description:`<strong>position_ids</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length)</code>, <em>optional</em>) &#x2014;
Indices of positions of each input sequence tokens in the position embeddings. Selected in the range <code>[0, config.max_position_embeddings - 1]</code>.</p>
<p><a href="../glossary#position-ids">What are position IDs?</a>`,name:"position_ids"},{anchor:"transformers.TFLongformerForMultipleChoice.call.inputs_embeds",description:`<strong>inputs_embeds</strong> (<code>tf.Tensor</code> of shape <code>(batch_size, num_choices, sequence_length, hidden_size)</code>, <em>optional</em>) &#x2014;
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
`}}),bn=new Pe({props:{$$slots:{default:[cy]},$$scope:{ctx:Q}}}),za=new rt({props:{code:`from transformers import LongformerTokenizer, TFLongformerForMultipleChoice
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
<span class="hljs-meta">&gt;&gt;&gt; </span>logits = outputs.logits`}}),{c(){p=a("meta"),x=l(),g=a("h1"),u=a("a"),$=a("span"),k(w.$$.fragment),_=l(),M=a("span"),me=n("Longformer"),J=l(),E=a("h2"),Z=a("a"),I=a("span"),k(ee.$$.fragment),fe=l(),S=a("span"),pe=n("Overview"),le=l(),G=a("p"),P=n("The Longformer model was presented in "),te=a("a"),X=n("Longformer: The Long-Document Transformer"),z=n(" by Iz Beltagy, Matthew E. Peters, Arman Cohan."),C=l(),ne=a("p"),H=n("The abstract from the paper is the following:"),de=l(),se=a("p"),D=a("em"),ge=n(`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),ce=l(),q=a("p"),ue=n("Tips:"),W=l(),ae=a("ul"),K=a("li"),R=n("Since the Longformer is based on RoBERTa, it doesn\u2019t have "),re=a("code"),_e=n("token_type_ids"),j=n(`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=a("code"),U=n("tokenizer.sep_token"),we=n(` (or
`),m=a("code"),F=n("</s>"),Y=n(")."),Te=l(),he=a("p"),A=n("This model was contributed by "),ve=a("a"),$e=n("beltagy"),Fe=n(". The Authors\u2019 code can be found "),O=a("a"),V=n("here"),xe=n("."),ye=l(),N=a("h2"),ke=a("a"),be=a("span"),k(oe.$$.fragment),Me=l(),Qr=a("span"),Eh=n("Longformer Self Attention"),Zl=l(),Le=a("p"),zh=n(`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),ed=new Oo,td=n(` previous tokens and
`),od=new Oo,nd=n(" succeding tokens with "),sd=new Oo,ad=n(` being the window length as defined in
`),Hr=a("code"),qh=n("config.attention_window"),Ch=n(". Note that "),Rr=a("code"),Oh=n("config.attention_window"),Ph=n(" can be of type "),Ur=a("code"),jh=n("List"),Ah=n(` to define a
different `),rd=new Oo,id=n(` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Vr=a("code"),Nh=n("BertSelfAttention"),Ih=n("."),ld=l(),ut=a("p"),Sh=n(`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),dd=new Oo,cd=n(`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Gr=a("em"),Dh=n("symmetric"),Bh=n("."),hd=l(),_t=a("p"),Wh=n(`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Kr=a("code"),Qh=n("global_attention_mask"),Hh=n(` at run-time appropriately. All Longformer models employ the following logic for
`),Jr=a("code"),Rh=n("global_attention_mask"),Uh=n(":"),md=l(),jo=a("ul"),Xr=a("li"),Vh=n("0: the token attends \u201Clocally\u201D,"),Gh=l(),Yr=a("li"),Kh=n("1: the token attends \u201Cglobally\u201D."),fd=l(),Ao=a("p"),Jh=n("For more information please also refer to "),Pa=a("a"),Xh=n("forward()"),Yh=n(" method."),pd=l(),Ve=a("p"),Zh=n(`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),gd=new Oo,ud=n(` to
`),_d=new Oo,wd=n(", with "),kd=new Oo,vd=n(" being the sequence length and "),bd=new Oo,Td=n(` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),yd=l(),No=a("p"),em=n("For more information, please refer to the official "),Tn=a("a"),tm=n("paper"),om=n("."),Ld=l(),jt=a("h2"),Io=a("a"),Zr=a("span"),k(yn.$$.fragment),nm=l(),ei=a("span"),sm=n("Training"),$d=l(),At=a("p"),ja=a("a"),am=n("LongformerForMaskedLM"),rm=n(" is trained the exact same way "),Aa=a("a"),im=n("RobertaForMaskedLM"),lm=n(` is
trained and should be used as follows:`),Fd=l(),k(Ln.$$.fragment),xd=l(),Nt=a("h2"),So=a("a"),ti=a("span"),k($n.$$.fragment),dm=l(),oi=a("span"),cm=n("LongformerConfig"),Md=l(),je=a("div"),k(Fn.$$.fragment),hm=l(),It=a("p"),mm=n("This is the configuration class to store the configuration of a "),Na=a("a"),fm=n("LongformerModel"),pm=n(" or a "),Ia=a("a"),gm=n("TFLongformerModel"),um=n(`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),_m=l(),St=a("p"),wm=n("This is the configuration class to store the configuration of a "),Sa=a("a"),km=n("LongformerModel"),vm=n(`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),xn=a("a"),bm=n("roberta-base"),Tm=n(" architecture with a sequence length 4,096."),ym=l(),Dt=a("p"),Lm=n("The "),Da=a("a"),$m=n("LongformerConfig"),Fm=n(" class directly inherits "),Ba=a("a"),xm=n("RobertaConfig"),Mm=n(`. It reuses the same defaults. Please check the
parent class for more information.`),Em=l(),ni=a("p"),zm=n("Example:"),qm=l(),k(Mn.$$.fragment),Ed=l(),Bt=a("h2"),Do=a("a"),si=a("span"),k(En.$$.fragment),Cm=l(),ai=a("span"),Om=n("LongformerTokenizer"),zd=l(),ft=a("div"),k(zn.$$.fragment),Pm=l(),ri=a("p"),jm=n("Construct a Longformer tokenizer."),Am=l(),Bo=a("p"),Wa=a("a"),Nm=n("LongformerTokenizer"),Im=n(" is identical to "),Qa=a("a"),Sm=n("RobertaTokenizer"),Dm=n(`. Refer to the superclass for usage examples and
documentation concerning parameters.`),qd=l(),Wt=a("h2"),Wo=a("a"),ii=a("span"),k(qn.$$.fragment),Bm=l(),li=a("span"),Wm=n("LongformerTokenizerFast"),Cd=l(),pt=a("div"),k(Cn.$$.fragment),Qm=l(),On=a("p"),Hm=n("Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),di=a("em"),Rm=n("tokenizers"),Um=n(" library)."),Vm=l(),Qo=a("p"),Ha=a("a"),Gm=n("LongformerTokenizerFast"),Km=n(" is identical to "),Ra=a("a"),Jm=n("RobertaTokenizerFast"),Xm=n(`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Od=l(),Qt=a("h2"),Ho=a("a"),ci=a("span"),k(Pn.$$.fragment),Ym=l(),hi=a("span"),Zm=n("Longformer specific outputs"),Pd=l(),Ht=a("div"),k(jn.$$.fragment),ef=l(),mi=a("p"),tf=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),jd=l(),Rt=a("div"),k(An.$$.fragment),of=l(),fi=a("p"),nf=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Ad=l(),Ut=a("div"),k(Nn.$$.fragment),sf=l(),pi=a("p"),af=n("Base class for masked language models outputs."),Nd=l(),Vt=a("div"),k(In.$$.fragment),rf=l(),gi=a("p"),lf=n("Base class for outputs of question answering Longformer models."),Id=l(),Gt=a("div"),k(Sn.$$.fragment),df=l(),ui=a("p"),cf=n("Base class for outputs of sentence classification models."),Sd=l(),Kt=a("div"),k(Dn.$$.fragment),hf=l(),_i=a("p"),mf=n("Base class for outputs of multiple choice Longformer models."),Dd=l(),Jt=a("div"),k(Bn.$$.fragment),ff=l(),wi=a("p"),pf=n("Base class for outputs of token classification models."),Bd=l(),Xt=a("div"),k(Wn.$$.fragment),gf=l(),ki=a("p"),uf=n("Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),Wd=l(),Yt=a("div"),k(Qn.$$.fragment),_f=l(),vi=a("p"),wf=n("Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),Qd=l(),Zt=a("div"),k(Hn.$$.fragment),kf=l(),bi=a("p"),vf=n("Base class for masked language models outputs."),Hd=l(),eo=a("div"),k(Rn.$$.fragment),bf=l(),Ti=a("p"),Tf=n("Base class for outputs of question answering Longformer models."),Rd=l(),to=a("div"),k(Un.$$.fragment),yf=l(),yi=a("p"),Lf=n("Base class for outputs of sentence classification models."),Ud=l(),oo=a("div"),k(Vn.$$.fragment),$f=l(),Li=a("p"),Ff=n("Base class for outputs of multiple choice models."),Vd=l(),no=a("div"),k(Gn.$$.fragment),xf=l(),$i=a("p"),Mf=n("Base class for outputs of token classification models."),Gd=l(),so=a("h2"),Ro=a("a"),Fi=a("span"),k(Kn.$$.fragment),Ef=l(),xi=a("span"),zf=n("LongformerModel"),Kd=l(),qe=a("div"),k(Jn.$$.fragment),qf=l(),Mi=a("p"),Cf=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Of=l(),Xn=a("p"),Pf=n("This model inherits from "),Ua=a("a"),jf=n("PreTrainedModel"),Af=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Nf=l(),Yn=a("p"),If=n("This model is also a PyTorch "),Zn=a("a"),Sf=n("torch.nn.Module"),Df=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Bf=l(),ao=a("p"),Wf=n("This class copied code from "),Va=a("a"),Qf=n("RobertaModel"),Hf=n(` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),es=a("a"),Rf=n(`Longformer:
the Long-Document Transformer`),Uf=n(` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),Vf=l(),ts=a("p"),Gf=n("The self-attention module "),Ei=a("code"),Kf=n("LongformerSelfAttention"),Jf=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Xf=l(),Ge=a("div"),k(os.$$.fragment),Yf=l(),ro=a("p"),Zf=n("The "),Ga=a("a"),ep=n("LongformerModel"),tp=n(" forward method, overrides the "),zi=a("code"),op=n("__call__"),np=n(" special method."),sp=l(),k(Uo.$$.fragment),ap=l(),qi=a("p"),rp=n("Examples:"),ip=l(),k(ns.$$.fragment),Jd=l(),io=a("h2"),Vo=a("a"),Ci=a("span"),k(ss.$$.fragment),lp=l(),Oi=a("span"),dp=n("LongformerForMaskedLM"),Xd=l(),We=a("div"),k(as.$$.fragment),cp=l(),rs=a("p"),hp=n("Longformer Model with a "),Pi=a("code"),mp=n("language modeling"),fp=n(" head on top."),pp=l(),is=a("p"),gp=n("This model inherits from "),Ka=a("a"),up=n("PreTrainedModel"),_p=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wp=l(),ls=a("p"),kp=n("This model is also a PyTorch "),ds=a("a"),vp=n("torch.nn.Module"),bp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Tp=l(),Ke=a("div"),k(cs.$$.fragment),yp=l(),lo=a("p"),Lp=n("The "),Ja=a("a"),$p=n("LongformerForMaskedLM"),Fp=n(" forward method, overrides the "),ji=a("code"),xp=n("__call__"),Mp=n(" special method."),Ep=l(),k(Go.$$.fragment),zp=l(),Ai=a("p"),qp=n("Examples:"),Cp=l(),k(hs.$$.fragment),Yd=l(),co=a("h2"),Ko=a("a"),Ni=a("span"),k(ms.$$.fragment),Op=l(),Ii=a("span"),Pp=n("LongformerForSequenceClassification"),Zd=l(),Qe=a("div"),k(fs.$$.fragment),jp=l(),Si=a("p"),Ap=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Np=l(),ps=a("p"),Ip=n("This model inherits from "),Xa=a("a"),Sp=n("PreTrainedModel"),Dp=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Bp=l(),gs=a("p"),Wp=n("This model is also a PyTorch "),us=a("a"),Qp=n("torch.nn.Module"),Hp=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rp=l(),Ce=a("div"),k(_s.$$.fragment),Up=l(),ho=a("p"),Vp=n("The "),Ya=a("a"),Gp=n("LongformerForSequenceClassification"),Kp=n(" forward method, overrides the "),Di=a("code"),Jp=n("__call__"),Xp=n(" special method."),Yp=l(),k(Jo.$$.fragment),Zp=l(),Bi=a("p"),eg=n("Example of single-label classification:"),tg=l(),k(ws.$$.fragment),og=l(),Wi=a("p"),ng=n("Example of multi-label classification:"),sg=l(),k(ks.$$.fragment),ec=l(),mo=a("h2"),Xo=a("a"),Qi=a("span"),k(vs.$$.fragment),ag=l(),Hi=a("span"),rg=n("LongformerForMultipleChoice"),tc=l(),He=a("div"),k(bs.$$.fragment),ig=l(),Ri=a("p"),lg=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),dg=l(),Ts=a("p"),cg=n("This model inherits from "),Za=a("a"),hg=n("PreTrainedModel"),mg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),fg=l(),ys=a("p"),pg=n("This model is also a PyTorch "),Ls=a("a"),gg=n("torch.nn.Module"),ug=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),_g=l(),Je=a("div"),k($s.$$.fragment),wg=l(),fo=a("p"),kg=n("The "),er=a("a"),vg=n("LongformerForMultipleChoice"),bg=n(" forward method, overrides the "),Ui=a("code"),Tg=n("__call__"),yg=n(" special method."),Lg=l(),k(Yo.$$.fragment),$g=l(),Vi=a("p"),Fg=n("Example:"),xg=l(),k(Fs.$$.fragment),oc=l(),po=a("h2"),Zo=a("a"),Gi=a("span"),k(xs.$$.fragment),Mg=l(),Ki=a("span"),Eg=n("LongformerForTokenClassification"),nc=l(),Re=a("div"),k(Ms.$$.fragment),zg=l(),Ji=a("p"),qg=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Cg=l(),Es=a("p"),Og=n("This model inherits from "),tr=a("a"),Pg=n("PreTrainedModel"),jg=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ag=l(),zs=a("p"),Ng=n("This model is also a PyTorch "),qs=a("a"),Ig=n("torch.nn.Module"),Sg=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Dg=l(),Xe=a("div"),k(Cs.$$.fragment),Bg=l(),go=a("p"),Wg=n("The "),or=a("a"),Qg=n("LongformerForTokenClassification"),Hg=n(" forward method, overrides the "),Xi=a("code"),Rg=n("__call__"),Ug=n(" special method."),Vg=l(),k(en.$$.fragment),Gg=l(),Yi=a("p"),Kg=n("Example:"),Jg=l(),k(Os.$$.fragment),sc=l(),uo=a("h2"),tn=a("a"),Zi=a("span"),k(Ps.$$.fragment),Xg=l(),el=a("span"),Yg=n("LongformerForQuestionAnswering"),ac=l(),Ue=a("div"),k(js.$$.fragment),Zg=l(),_o=a("p"),eu=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),tl=a("code"),tu=n("span start logits"),ou=n(" and "),ol=a("code"),nu=n("span end logits"),su=n(")."),au=l(),As=a("p"),ru=n("This model inherits from "),nr=a("a"),iu=n("PreTrainedModel"),lu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),du=l(),Ns=a("p"),cu=n("This model is also a PyTorch "),Is=a("a"),hu=n("torch.nn.Module"),mu=n(` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),fu=l(),Ye=a("div"),k(Ss.$$.fragment),pu=l(),wo=a("p"),gu=n("The "),sr=a("a"),uu=n("LongformerForQuestionAnswering"),_u=n(" forward method, overrides the "),nl=a("code"),wu=n("__call__"),ku=n(" special method."),vu=l(),k(on.$$.fragment),bu=l(),sl=a("p"),Tu=n("Examples:"),yu=l(),k(Ds.$$.fragment),rc=l(),ko=a("h2"),nn=a("a"),al=a("span"),k(Bs.$$.fragment),Lu=l(),rl=a("span"),$u=n("TFLongformerModel"),ic=l(),Ee=a("div"),k(Ws.$$.fragment),Fu=l(),il=a("p"),xu=n("The bare Longformer Model outputting raw hidden-states without any specific head on top."),Mu=l(),Qs=a("p"),Eu=n("This model inherits from "),ar=a("a"),zu=n("TFPreTrainedModel"),qu=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Cu=l(),Hs=a("p"),Ou=n("This model is also a "),Rs=a("a"),Pu=n("tf.keras.Model"),ju=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Au=l(),k(sn.$$.fragment),Nu=l(),vo=a("p"),Iu=n("This class copies code from "),rr=a("a"),Su=n("TFRobertaModel"),Du=n(` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Us=a("a"),Bu=n("Longformer: the Long-Document Transformer"),Wu=n(` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Qu=l(),Vs=a("p"),Hu=n("The self-attention module "),ll=a("code"),Ru=n("TFLongformerSelfAttention"),Uu=n(` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Vu=l(),wt=a("div"),k(Gs.$$.fragment),Gu=l(),bo=a("p"),Ku=n("The "),ir=a("a"),Ju=n("TFLongformerModel"),Xu=n(" forward method, overrides the "),dl=a("code"),Yu=n("__call__"),Zu=n(" special method."),e_=l(),k(an.$$.fragment),lc=l(),To=a("h2"),rn=a("a"),cl=a("span"),k(Ks.$$.fragment),t_=l(),hl=a("span"),o_=n("TFLongformerForMaskedLM"),dc=l(),Ae=a("div"),k(Js.$$.fragment),n_=l(),Xs=a("p"),s_=n("Longformer Model with a "),ml=a("code"),a_=n("language modeling"),r_=n(" head on top."),i_=l(),Ys=a("p"),l_=n("This model inherits from "),lr=a("a"),d_=n("TFPreTrainedModel"),c_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),h_=l(),Zs=a("p"),m_=n("This model is also a "),ea=a("a"),f_=n("tf.keras.Model"),p_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),g_=l(),k(ln.$$.fragment),u_=l(),Ze=a("div"),k(ta.$$.fragment),__=l(),yo=a("p"),w_=n("The "),dr=a("a"),k_=n("TFLongformerForMaskedLM"),v_=n(" forward method, overrides the "),fl=a("code"),b_=n("__call__"),T_=n(" special method."),y_=l(),k(dn.$$.fragment),L_=l(),pl=a("p"),$_=n("Example:"),F_=l(),k(oa.$$.fragment),cc=l(),Lo=a("h2"),cn=a("a"),gl=a("span"),k(na.$$.fragment),x_=l(),ul=a("span"),M_=n("TFLongformerForQuestionAnswering"),hc=l(),Ne=a("div"),k(sa.$$.fragment),E_=l(),$o=a("p"),z_=n(`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),_l=a("code"),q_=n("span start logits"),C_=n(" and "),wl=a("code"),O_=n("span end logits"),P_=n(")."),j_=l(),aa=a("p"),A_=n("This model inherits from "),cr=a("a"),N_=n("TFPreTrainedModel"),I_=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),S_=l(),ra=a("p"),D_=n("This model is also a "),ia=a("a"),B_=n("tf.keras.Model"),W_=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Q_=l(),k(hn.$$.fragment),H_=l(),et=a("div"),k(la.$$.fragment),R_=l(),Fo=a("p"),U_=n("The "),hr=a("a"),V_=n("TFLongformerForQuestionAnswering"),G_=n(" forward method, overrides the "),kl=a("code"),K_=n("__call__"),J_=n(" special method."),X_=l(),k(mn.$$.fragment),Y_=l(),vl=a("p"),Z_=n("Example:"),ew=l(),k(da.$$.fragment),mc=l(),xo=a("h2"),fn=a("a"),bl=a("span"),k(ca.$$.fragment),tw=l(),Tl=a("span"),ow=n("TFLongformerForSequenceClassification"),fc=l(),Ie=a("div"),k(ha.$$.fragment),nw=l(),yl=a("p"),sw=n(`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),aw=l(),ma=a("p"),rw=n("This model inherits from "),mr=a("a"),iw=n("TFPreTrainedModel"),lw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),dw=l(),fa=a("p"),cw=n("This model is also a "),pa=a("a"),hw=n("tf.keras.Model"),mw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),fw=l(),k(pn.$$.fragment),pw=l(),tt=a("div"),k(ga.$$.fragment),gw=l(),Mo=a("p"),uw=n("The "),fr=a("a"),_w=n("TFLongformerForSequenceClassification"),ww=n(" forward method, overrides the "),Ll=a("code"),kw=n("__call__"),vw=n(" special method."),bw=l(),k(gn.$$.fragment),Tw=l(),$l=a("p"),yw=n("Example:"),Lw=l(),k(ua.$$.fragment),pc=l(),Eo=a("h2"),un=a("a"),Fl=a("span"),k(_a.$$.fragment),$w=l(),xl=a("span"),Fw=n("TFLongformerForTokenClassification"),gc=l(),Se=a("div"),k(wa.$$.fragment),xw=l(),Ml=a("p"),Mw=n(`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),Ew=l(),ka=a("p"),zw=n("This model inherits from "),pr=a("a"),qw=n("TFPreTrainedModel"),Cw=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Ow=l(),va=a("p"),Pw=n("This model is also a "),ba=a("a"),jw=n("tf.keras.Model"),Aw=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Nw=l(),k(_n.$$.fragment),Iw=l(),ot=a("div"),k(Ta.$$.fragment),Sw=l(),zo=a("p"),Dw=n("The "),gr=a("a"),Bw=n("TFLongformerForTokenClassification"),Ww=n(" forward method, overrides the "),El=a("code"),Qw=n("__call__"),Hw=n(" special method."),Rw=l(),k(wn.$$.fragment),Uw=l(),zl=a("p"),Vw=n("Example:"),Gw=l(),k(ya.$$.fragment),uc=l(),qo=a("h2"),kn=a("a"),ql=a("span"),k(La.$$.fragment),Kw=l(),Cl=a("span"),Jw=n("TFLongformerForMultipleChoice"),_c=l(),De=a("div"),k($a.$$.fragment),Xw=l(),Ol=a("p"),Yw=n(`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),Zw=l(),Fa=a("p"),ek=n("This model inherits from "),ur=a("a"),tk=n("TFPreTrainedModel"),ok=n(`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),nk=l(),xa=a("p"),sk=n("This model is also a "),Ma=a("a"),ak=n("tf.keras.Model"),rk=n(` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),ik=l(),k(vn.$$.fragment),lk=l(),nt=a("div"),k(Ea.$$.fragment),dk=l(),Co=a("p"),ck=n("The "),_r=a("a"),hk=n("TFLongformerForMultipleChoice"),mk=n(" forward method, overrides the "),Pl=a("code"),fk=n("__call__"),pk=n(" special method."),gk=l(),k(bn.$$.fragment),uk=l(),jl=a("p"),_k=n("Example:"),wk=l(),k(za.$$.fragment),this.h()},l(o){const f=UT('[data-svelte="svelte-1phssyn"]',document.head);p=r(f,"META",{name:!0,content:!0}),f.forEach(t),x=d(o),g=r(o,"H1",{class:!0});var qa=i(g);u=r(qa,"A",{id:!0,class:!0,href:!0});var Al=i(u);$=r(Al,"SPAN",{});var Nl=i($);v(w.$$.fragment,Nl),Nl.forEach(t),Al.forEach(t),_=d(qa),M=r(qa,"SPAN",{});var Il=i(M);me=s(Il,"Longformer"),Il.forEach(t),qa.forEach(t),J=d(o),E=r(o,"H2",{class:!0});var Ca=i(E);Z=r(Ca,"A",{id:!0,class:!0,href:!0});var Sl=i(Z);I=r(Sl,"SPAN",{});var Dl=i(I);v(ee.$$.fragment,Dl),Dl.forEach(t),Sl.forEach(t),fe=d(Ca),S=r(Ca,"SPAN",{});var Bl=i(S);pe=s(Bl,"Overview"),Bl.forEach(t),Ca.forEach(t),le=d(o),G=r(o,"P",{});var Oa=i(G);P=s(Oa,"The Longformer model was presented in "),te=r(Oa,"A",{href:!0,rel:!0});var Wl=i(te);X=s(Wl,"Longformer: The Long-Document Transformer"),Wl.forEach(t),z=s(Oa," by Iz Beltagy, Matthew E. Peters, Arman Cohan."),Oa.forEach(t),C=d(o),ne=r(o,"P",{});var Ql=i(ne);H=s(Ql,"The abstract from the paper is the following:"),Ql.forEach(t),de=d(o),se=r(o,"P",{});var Hl=i(se);D=r(Hl,"EM",{});var Rl=i(D);ge=s(Rl,`Transformer-based models are unable to process long sequences due to their self-attention operation, which scales
quadratically with the sequence length. To address this limitation, we introduce the Longformer with an attention
mechanism that scales linearly with sequence length, making it easy to process documents of thousands of tokens or
longer. Longformer\u2019s attention mechanism is a drop-in replacement for the standard self-attention and combines a local
windowed attention with a task motivated global attention. Following prior work on long-sequence transformers, we
evaluate Longformer on character-level language modeling and achieve state-of-the-art results on text8 and enwik8. In
contrast to most prior work, we also pretrain Longformer and finetune it on a variety of downstream tasks. Our
pretrained Longformer consistently outperforms RoBERTa on long document tasks and sets new state-of-the-art results on
WikiHop and TriviaQA.`),Rl.forEach(t),Hl.forEach(t),ce=d(o),q=r(o,"P",{});var Ul=i(q);ue=s(Ul,"Tips:"),Ul.forEach(t),W=d(o),ae=r(o,"UL",{});var Vl=i(ae);K=r(Vl,"LI",{});var gt=i(K);R=s(gt,"Since the Longformer is based on RoBERTa, it doesn\u2019t have "),re=r(gt,"CODE",{});var Gl=i(re);_e=s(Gl,"token_type_ids"),Gl.forEach(t),j=s(gt,`. You don\u2019t need to indicate which
token belongs to which segment. Just separate your segments with the separation token `),ie=r(gt,"CODE",{});var Kl=i(ie);U=s(Kl,"tokenizer.sep_token"),Kl.forEach(t),we=s(gt,` (or
`),m=r(gt,"CODE",{});var kk=i(m);F=s(kk,"</s>"),kk.forEach(t),Y=s(gt,")."),gt.forEach(t),Vl.forEach(t),Te=d(o),he=r(o,"P",{});var wr=i(he);A=s(wr,"This model was contributed by "),ve=r(wr,"A",{href:!0,rel:!0});var vk=i(ve);$e=s(vk,"beltagy"),vk.forEach(t),Fe=s(wr,". The Authors\u2019 code can be found "),O=r(wr,"A",{href:!0,rel:!0});var bk=i(O);V=s(bk,"here"),bk.forEach(t),xe=s(wr,"."),wr.forEach(t),ye=d(o),N=r(o,"H2",{class:!0});var kc=i(N);ke=r(kc,"A",{id:!0,class:!0,href:!0});var Tk=i(ke);be=r(Tk,"SPAN",{});var yk=i(be);v(oe.$$.fragment,yk),yk.forEach(t),Tk.forEach(t),Me=d(kc),Qr=r(kc,"SPAN",{});var Lk=i(Qr);Eh=s(Lk,"Longformer Self Attention"),Lk.forEach(t),kc.forEach(t),Zl=d(o),Le=r(o,"P",{});var Oe=i(Le);zh=s(Oe,`Longformer self attention employs self attention on both a \u201Clocal\u201D context and a \u201Cglobal\u201D context. Most tokens only
attend \u201Clocally\u201D to each other meaning that each token attends to its `),ed=Po(Oe),td=s(Oe,` previous tokens and
`),od=Po(Oe),nd=s(Oe," succeding tokens with "),sd=Po(Oe),ad=s(Oe,` being the window length as defined in
`),Hr=r(Oe,"CODE",{});var $k=i(Hr);qh=s($k,"config.attention_window"),$k.forEach(t),Ch=s(Oe,". Note that "),Rr=r(Oe,"CODE",{});var Fk=i(Rr);Oh=s(Fk,"config.attention_window"),Fk.forEach(t),Ph=s(Oe," can be of type "),Ur=r(Oe,"CODE",{});var xk=i(Ur);jh=s(xk,"List"),xk.forEach(t),Ah=s(Oe,` to define a
different `),rd=Po(Oe),id=s(Oe,` for each layer. A selected few tokens attend \u201Cglobally\u201D to all other tokens, as it is
conventionally done for all tokens in `),Vr=r(Oe,"CODE",{});var Mk=i(Vr);Nh=s(Mk,"BertSelfAttention"),Mk.forEach(t),Ih=s(Oe,"."),Oe.forEach(t),ld=d(o),ut=r(o,"P",{});var kr=i(ut);Sh=s(kr,`Note that \u201Clocally\u201D and \u201Cglobally\u201D attending tokens are projected by different query, key and value matrices. Also note
that every \u201Clocally\u201D attending token not only attends to tokens within its window `),dd=Po(kr),cd=s(kr,`, but also to all \u201Cglobally\u201D
attending tokens so that global attention is `),Gr=r(kr,"EM",{});var Ek=i(Gr);Dh=s(Ek,"symmetric"),Ek.forEach(t),Bh=s(kr,"."),kr.forEach(t),hd=d(o),_t=r(o,"P",{});var vr=i(_t);Wh=s(vr,`The user can define which tokens attend \u201Clocally\u201D and which tokens attend \u201Cglobally\u201D by setting the tensor
`),Kr=r(vr,"CODE",{});var zk=i(Kr);Qh=s(zk,"global_attention_mask"),zk.forEach(t),Hh=s(vr,` at run-time appropriately. All Longformer models employ the following logic for
`),Jr=r(vr,"CODE",{});var qk=i(Jr);Rh=s(qk,"global_attention_mask"),qk.forEach(t),Uh=s(vr,":"),vr.forEach(t),md=d(o),jo=r(o,"UL",{});var vc=i(jo);Xr=r(vc,"LI",{});var Ck=i(Xr);Vh=s(Ck,"0: the token attends \u201Clocally\u201D,"),Ck.forEach(t),Gh=d(vc),Yr=r(vc,"LI",{});var Ok=i(Yr);Kh=s(Ok,"1: the token attends \u201Cglobally\u201D."),Ok.forEach(t),vc.forEach(t),fd=d(o),Ao=r(o,"P",{});var bc=i(Ao);Jh=s(bc,"For more information please also refer to "),Pa=r(bc,"A",{href:!0});var Pk=i(Pa);Xh=s(Pk,"forward()"),Pk.forEach(t),Yh=s(bc," method."),bc.forEach(t),pd=d(o),Ve=r(o,"P",{});var kt=i(Ve);Zh=s(kt,`Using Longformer self attention, the memory and time complexity of the query-key matmul operation, which usually
represents the memory and time bottleneck, can be reduced from `),gd=Po(kt),ud=s(kt,` to
`),_d=Po(kt),wd=s(kt,", with "),kd=Po(kt),vd=s(kt," being the sequence length and "),bd=Po(kt),Td=s(kt,` being the average window
size. It is assumed that the number of \u201Cglobally\u201D attending tokens is insignificant as compared to the number of
\u201Clocally\u201D attending tokens.`),kt.forEach(t),yd=d(o),No=r(o,"P",{});var Tc=i(No);em=s(Tc,"For more information, please refer to the official "),Tn=r(Tc,"A",{href:!0,rel:!0});var jk=i(Tn);tm=s(jk,"paper"),jk.forEach(t),om=s(Tc,"."),Tc.forEach(t),Ld=d(o),jt=r(o,"H2",{class:!0});var yc=i(jt);Io=r(yc,"A",{id:!0,class:!0,href:!0});var Ak=i(Io);Zr=r(Ak,"SPAN",{});var Nk=i(Zr);v(yn.$$.fragment,Nk),Nk.forEach(t),Ak.forEach(t),nm=d(yc),ei=r(yc,"SPAN",{});var Ik=i(ei);sm=s(Ik,"Training"),Ik.forEach(t),yc.forEach(t),$d=d(o),At=r(o,"P",{});var Jl=i(At);ja=r(Jl,"A",{href:!0});var Sk=i(ja);am=s(Sk,"LongformerForMaskedLM"),Sk.forEach(t),rm=s(Jl," is trained the exact same way "),Aa=r(Jl,"A",{href:!0});var Dk=i(Aa);im=s(Dk,"RobertaForMaskedLM"),Dk.forEach(t),lm=s(Jl,` is
trained and should be used as follows:`),Jl.forEach(t),Fd=d(o),v(Ln.$$.fragment,o),xd=d(o),Nt=r(o,"H2",{class:!0});var Lc=i(Nt);So=r(Lc,"A",{id:!0,class:!0,href:!0});var Bk=i(So);ti=r(Bk,"SPAN",{});var Wk=i(ti);v($n.$$.fragment,Wk),Wk.forEach(t),Bk.forEach(t),dm=d(Lc),oi=r(Lc,"SPAN",{});var Qk=i(oi);cm=s(Qk,"LongformerConfig"),Qk.forEach(t),Lc.forEach(t),Md=d(o),je=r(o,"DIV",{class:!0});var it=i(je);v(Fn.$$.fragment,it),hm=d(it),It=r(it,"P",{});var br=i(It);mm=s(br,"This is the configuration class to store the configuration of a "),Na=r(br,"A",{href:!0});var Hk=i(Na);fm=s(Hk,"LongformerModel"),Hk.forEach(t),pm=s(br," or a "),Ia=r(br,"A",{href:!0});var Rk=i(Ia);gm=s(Rk,"TFLongformerModel"),Rk.forEach(t),um=s(br,`. It
is used to instantiate a Longformer model according to the specified arguments, defining the model architecture.`),br.forEach(t),_m=d(it),St=r(it,"P",{});var Tr=i(St);wm=s(Tr,"This is the configuration class to store the configuration of a "),Sa=r(Tr,"A",{href:!0});var Uk=i(Sa);km=s(Uk,"LongformerModel"),Uk.forEach(t),vm=s(Tr,`. It is used to instantiate an
Longformer model according to the specified arguments, defining the model architecture. Instantiating a
configuration with the defaults will yield a similar configuration to that of the RoBERTa
`),xn=r(Tr,"A",{href:!0,rel:!0});var Vk=i(xn);bm=s(Vk,"roberta-base"),Vk.forEach(t),Tm=s(Tr," architecture with a sequence length 4,096."),Tr.forEach(t),ym=d(it),Dt=r(it,"P",{});var yr=i(Dt);Lm=s(yr,"The "),Da=r(yr,"A",{href:!0});var Gk=i(Da);$m=s(Gk,"LongformerConfig"),Gk.forEach(t),Fm=s(yr," class directly inherits "),Ba=r(yr,"A",{href:!0});var Kk=i(Ba);xm=s(Kk,"RobertaConfig"),Kk.forEach(t),Mm=s(yr,`. It reuses the same defaults. Please check the
parent class for more information.`),yr.forEach(t),Em=d(it),ni=r(it,"P",{});var Jk=i(ni);zm=s(Jk,"Example:"),Jk.forEach(t),qm=d(it),v(Mn.$$.fragment,it),it.forEach(t),Ed=d(o),Bt=r(o,"H2",{class:!0});var $c=i(Bt);Do=r($c,"A",{id:!0,class:!0,href:!0});var Xk=i(Do);si=r(Xk,"SPAN",{});var Yk=i(si);v(En.$$.fragment,Yk),Yk.forEach(t),Xk.forEach(t),Cm=d($c),ai=r($c,"SPAN",{});var Zk=i(ai);Om=s(Zk,"LongformerTokenizer"),Zk.forEach(t),$c.forEach(t),zd=d(o),ft=r(o,"DIV",{class:!0});var Lr=i(ft);v(zn.$$.fragment,Lr),Pm=d(Lr),ri=r(Lr,"P",{});var ev=i(ri);jm=s(ev,"Construct a Longformer tokenizer."),ev.forEach(t),Am=d(Lr),Bo=r(Lr,"P",{});var Xl=i(Bo);Wa=r(Xl,"A",{href:!0});var tv=i(Wa);Nm=s(tv,"LongformerTokenizer"),tv.forEach(t),Im=s(Xl," is identical to "),Qa=r(Xl,"A",{href:!0});var ov=i(Qa);Sm=s(ov,"RobertaTokenizer"),ov.forEach(t),Dm=s(Xl,`. Refer to the superclass for usage examples and
documentation concerning parameters.`),Xl.forEach(t),Lr.forEach(t),qd=d(o),Wt=r(o,"H2",{class:!0});var Fc=i(Wt);Wo=r(Fc,"A",{id:!0,class:!0,href:!0});var nv=i(Wo);ii=r(nv,"SPAN",{});var sv=i(ii);v(qn.$$.fragment,sv),sv.forEach(t),nv.forEach(t),Bm=d(Fc),li=r(Fc,"SPAN",{});var av=i(li);Wm=s(av,"LongformerTokenizerFast"),av.forEach(t),Fc.forEach(t),Cd=d(o),pt=r(o,"DIV",{class:!0});var $r=i(pt);v(Cn.$$.fragment,$r),Qm=d($r),On=r($r,"P",{});var xc=i(On);Hm=s(xc,"Construct a \u201Cfast\u201D Longformer tokenizer (backed by HuggingFace\u2019s "),di=r(xc,"EM",{});var rv=i(di);Rm=s(rv,"tokenizers"),rv.forEach(t),Um=s(xc," library)."),xc.forEach(t),Vm=d($r),Qo=r($r,"P",{});var Yl=i(Qo);Ha=r(Yl,"A",{href:!0});var iv=i(Ha);Gm=s(iv,"LongformerTokenizerFast"),iv.forEach(t),Km=s(Yl," is identical to "),Ra=r(Yl,"A",{href:!0});var lv=i(Ra);Jm=s(lv,"RobertaTokenizerFast"),lv.forEach(t),Xm=s(Yl,`. Refer to the superclass for usage examples
and documentation concerning parameters.`),Yl.forEach(t),$r.forEach(t),Od=d(o),Qt=r(o,"H2",{class:!0});var Mc=i(Qt);Ho=r(Mc,"A",{id:!0,class:!0,href:!0});var dv=i(Ho);ci=r(dv,"SPAN",{});var cv=i(ci);v(Pn.$$.fragment,cv),cv.forEach(t),dv.forEach(t),Ym=d(Mc),hi=r(Mc,"SPAN",{});var hv=i(hi);Zm=s(hv,"Longformer specific outputs"),hv.forEach(t),Mc.forEach(t),Pd=d(o),Ht=r(o,"DIV",{class:!0});var Ec=i(Ht);v(jn.$$.fragment,Ec),ef=d(Ec),mi=r(Ec,"P",{});var mv=i(mi);tf=s(mv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),mv.forEach(t),Ec.forEach(t),jd=d(o),Rt=r(o,"DIV",{class:!0});var zc=i(Rt);v(An.$$.fragment,zc),of=d(zc),fi=r(zc,"P",{});var fv=i(fi);nf=s(fv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),fv.forEach(t),zc.forEach(t),Ad=d(o),Ut=r(o,"DIV",{class:!0});var qc=i(Ut);v(Nn.$$.fragment,qc),sf=d(qc),pi=r(qc,"P",{});var pv=i(pi);af=s(pv,"Base class for masked language models outputs."),pv.forEach(t),qc.forEach(t),Nd=d(o),Vt=r(o,"DIV",{class:!0});var Cc=i(Vt);v(In.$$.fragment,Cc),rf=d(Cc),gi=r(Cc,"P",{});var gv=i(gi);lf=s(gv,"Base class for outputs of question answering Longformer models."),gv.forEach(t),Cc.forEach(t),Id=d(o),Gt=r(o,"DIV",{class:!0});var Oc=i(Gt);v(Sn.$$.fragment,Oc),df=d(Oc),ui=r(Oc,"P",{});var uv=i(ui);cf=s(uv,"Base class for outputs of sentence classification models."),uv.forEach(t),Oc.forEach(t),Sd=d(o),Kt=r(o,"DIV",{class:!0});var Pc=i(Kt);v(Dn.$$.fragment,Pc),hf=d(Pc),_i=r(Pc,"P",{});var _v=i(_i);mf=s(_v,"Base class for outputs of multiple choice Longformer models."),_v.forEach(t),Pc.forEach(t),Dd=d(o),Jt=r(o,"DIV",{class:!0});var jc=i(Jt);v(Bn.$$.fragment,jc),ff=d(jc),wi=r(jc,"P",{});var wv=i(wi);pf=s(wv,"Base class for outputs of token classification models."),wv.forEach(t),jc.forEach(t),Bd=d(o),Xt=r(o,"DIV",{class:!0});var Ac=i(Xt);v(Wn.$$.fragment,Ac),gf=d(Ac),ki=r(Ac,"P",{});var kv=i(ki);uf=s(kv,"Base class for Longformer\u2019s outputs, with potential hidden states, local and global attentions."),kv.forEach(t),Ac.forEach(t),Wd=d(o),Yt=r(o,"DIV",{class:!0});var Nc=i(Yt);v(Qn.$$.fragment,Nc),_f=d(Nc),vi=r(Nc,"P",{});var vv=i(vi);wf=s(vv,"Base class for Longformer\u2019s outputs that also contains a pooling of the last hidden states."),vv.forEach(t),Nc.forEach(t),Qd=d(o),Zt=r(o,"DIV",{class:!0});var Ic=i(Zt);v(Hn.$$.fragment,Ic),kf=d(Ic),bi=r(Ic,"P",{});var bv=i(bi);vf=s(bv,"Base class for masked language models outputs."),bv.forEach(t),Ic.forEach(t),Hd=d(o),eo=r(o,"DIV",{class:!0});var Sc=i(eo);v(Rn.$$.fragment,Sc),bf=d(Sc),Ti=r(Sc,"P",{});var Tv=i(Ti);Tf=s(Tv,"Base class for outputs of question answering Longformer models."),Tv.forEach(t),Sc.forEach(t),Rd=d(o),to=r(o,"DIV",{class:!0});var Dc=i(to);v(Un.$$.fragment,Dc),yf=d(Dc),yi=r(Dc,"P",{});var yv=i(yi);Lf=s(yv,"Base class for outputs of sentence classification models."),yv.forEach(t),Dc.forEach(t),Ud=d(o),oo=r(o,"DIV",{class:!0});var Bc=i(oo);v(Vn.$$.fragment,Bc),$f=d(Bc),Li=r(Bc,"P",{});var Lv=i(Li);Ff=s(Lv,"Base class for outputs of multiple choice models."),Lv.forEach(t),Bc.forEach(t),Vd=d(o),no=r(o,"DIV",{class:!0});var Wc=i(no);v(Gn.$$.fragment,Wc),xf=d(Wc),$i=r(Wc,"P",{});var $v=i($i);Mf=s($v,"Base class for outputs of token classification models."),$v.forEach(t),Wc.forEach(t),Gd=d(o),so=r(o,"H2",{class:!0});var Qc=i(so);Ro=r(Qc,"A",{id:!0,class:!0,href:!0});var Fv=i(Ro);Fi=r(Fv,"SPAN",{});var xv=i(Fi);v(Kn.$$.fragment,xv),xv.forEach(t),Fv.forEach(t),Ef=d(Qc),xi=r(Qc,"SPAN",{});var Mv=i(xi);zf=s(Mv,"LongformerModel"),Mv.forEach(t),Qc.forEach(t),Kd=d(o),qe=r(o,"DIV",{class:!0});var st=i(qe);v(Jn.$$.fragment,st),qf=d(st),Mi=r(st,"P",{});var Ev=i(Mi);Cf=s(Ev,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),Ev.forEach(t),Of=d(st),Xn=r(st,"P",{});var Hc=i(Xn);Pf=s(Hc,"This model inherits from "),Ua=r(Hc,"A",{href:!0});var zv=i(Ua);jf=s(zv,"PreTrainedModel"),zv.forEach(t),Af=s(Hc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Hc.forEach(t),Nf=d(st),Yn=r(st,"P",{});var Rc=i(Yn);If=s(Rc,"This model is also a PyTorch "),Zn=r(Rc,"A",{href:!0,rel:!0});var qv=i(Zn);Sf=s(qv,"torch.nn.Module"),qv.forEach(t),Df=s(Rc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Rc.forEach(t),Bf=d(st),ao=r(st,"P",{});var Fr=i(ao);Wf=s(Fr,"This class copied code from "),Va=r(Fr,"A",{href:!0});var Cv=i(Va);Qf=s(Cv,"RobertaModel"),Cv.forEach(t),Hf=s(Fr,` and overwrote standard self-attention with longformer self-attention
to provide the ability to process long sequences following the self-attention approach described in `),es=r(Fr,"A",{href:!0,rel:!0});var Ov=i(es);Rf=s(Ov,`Longformer:
the Long-Document Transformer`),Ov.forEach(t),Uf=s(Fr,` by Iz Beltagy, Matthew E. Peters, and Arman Cohan.
Longformer self-attention combines a local (sliding window) and global attention to extend to long documents
without the O(n^2) increase in memory and compute.`),Fr.forEach(t),Vf=d(st),ts=r(st,"P",{});var Uc=i(ts);Gf=s(Uc,"The self-attention module "),Ei=r(Uc,"CODE",{});var Pv=i(Ei);Kf=s(Pv,"LongformerSelfAttention"),Pv.forEach(t),Jf=s(Uc,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),Uc.forEach(t),Xf=d(st),Ge=r(st,"DIV",{class:!0});var vt=i(Ge);v(os.$$.fragment,vt),Yf=d(vt),ro=r(vt,"P",{});var xr=i(ro);Zf=s(xr,"The "),Ga=r(xr,"A",{href:!0});var jv=i(Ga);ep=s(jv,"LongformerModel"),jv.forEach(t),tp=s(xr," forward method, overrides the "),zi=r(xr,"CODE",{});var Av=i(zi);op=s(Av,"__call__"),Av.forEach(t),np=s(xr," special method."),xr.forEach(t),sp=d(vt),v(Uo.$$.fragment,vt),ap=d(vt),qi=r(vt,"P",{});var Nv=i(qi);rp=s(Nv,"Examples:"),Nv.forEach(t),ip=d(vt),v(ns.$$.fragment,vt),vt.forEach(t),st.forEach(t),Jd=d(o),io=r(o,"H2",{class:!0});var Vc=i(io);Vo=r(Vc,"A",{id:!0,class:!0,href:!0});var Iv=i(Vo);Ci=r(Iv,"SPAN",{});var Sv=i(Ci);v(ss.$$.fragment,Sv),Sv.forEach(t),Iv.forEach(t),lp=d(Vc),Oi=r(Vc,"SPAN",{});var Dv=i(Oi);dp=s(Dv,"LongformerForMaskedLM"),Dv.forEach(t),Vc.forEach(t),Xd=d(o),We=r(o,"DIV",{class:!0});var bt=i(We);v(as.$$.fragment,bt),cp=d(bt),rs=r(bt,"P",{});var Gc=i(rs);hp=s(Gc,"Longformer Model with a "),Pi=r(Gc,"CODE",{});var Bv=i(Pi);mp=s(Bv,"language modeling"),Bv.forEach(t),fp=s(Gc," head on top."),Gc.forEach(t),pp=d(bt),is=r(bt,"P",{});var Kc=i(is);gp=s(Kc,"This model inherits from "),Ka=r(Kc,"A",{href:!0});var Wv=i(Ka);up=s(Wv,"PreTrainedModel"),Wv.forEach(t),_p=s(Kc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Kc.forEach(t),wp=d(bt),ls=r(bt,"P",{});var Jc=i(ls);kp=s(Jc,"This model is also a PyTorch "),ds=r(Jc,"A",{href:!0,rel:!0});var Qv=i(ds);vp=s(Qv,"torch.nn.Module"),Qv.forEach(t),bp=s(Jc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Jc.forEach(t),Tp=d(bt),Ke=r(bt,"DIV",{class:!0});var Tt=i(Ke);v(cs.$$.fragment,Tt),yp=d(Tt),lo=r(Tt,"P",{});var Mr=i(lo);Lp=s(Mr,"The "),Ja=r(Mr,"A",{href:!0});var Hv=i(Ja);$p=s(Hv,"LongformerForMaskedLM"),Hv.forEach(t),Fp=s(Mr," forward method, overrides the "),ji=r(Mr,"CODE",{});var Rv=i(ji);xp=s(Rv,"__call__"),Rv.forEach(t),Mp=s(Mr," special method."),Mr.forEach(t),Ep=d(Tt),v(Go.$$.fragment,Tt),zp=d(Tt),Ai=r(Tt,"P",{});var Uv=i(Ai);qp=s(Uv,"Examples:"),Uv.forEach(t),Cp=d(Tt),v(hs.$$.fragment,Tt),Tt.forEach(t),bt.forEach(t),Yd=d(o),co=r(o,"H2",{class:!0});var Xc=i(co);Ko=r(Xc,"A",{id:!0,class:!0,href:!0});var Vv=i(Ko);Ni=r(Vv,"SPAN",{});var Gv=i(Ni);v(ms.$$.fragment,Gv),Gv.forEach(t),Vv.forEach(t),Op=d(Xc),Ii=r(Xc,"SPAN",{});var Kv=i(Ii);Pp=s(Kv,"LongformerForSequenceClassification"),Kv.forEach(t),Xc.forEach(t),Zd=d(o),Qe=r(o,"DIV",{class:!0});var yt=i(Qe);v(fs.$$.fragment,yt),jp=d(yt),Si=r(yt,"P",{});var Jv=i(Si);Ap=s(Jv,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),Jv.forEach(t),Np=d(yt),ps=r(yt,"P",{});var Yc=i(ps);Ip=s(Yc,"This model inherits from "),Xa=r(Yc,"A",{href:!0});var Xv=i(Xa);Sp=s(Xv,"PreTrainedModel"),Xv.forEach(t),Dp=s(Yc,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Yc.forEach(t),Bp=d(yt),gs=r(yt,"P",{});var Zc=i(gs);Wp=s(Zc,"This model is also a PyTorch "),us=r(Zc,"A",{href:!0,rel:!0});var Yv=i(us);Qp=s(Yv,"torch.nn.Module"),Yv.forEach(t),Hp=s(Zc,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),Zc.forEach(t),Rp=d(yt),Ce=r(yt,"DIV",{class:!0});var at=i(Ce);v(_s.$$.fragment,at),Up=d(at),ho=r(at,"P",{});var Er=i(ho);Vp=s(Er,"The "),Ya=r(Er,"A",{href:!0});var Zv=i(Ya);Gp=s(Zv,"LongformerForSequenceClassification"),Zv.forEach(t),Kp=s(Er," forward method, overrides the "),Di=r(Er,"CODE",{});var eb=i(Di);Jp=s(eb,"__call__"),eb.forEach(t),Xp=s(Er," special method."),Er.forEach(t),Yp=d(at),v(Jo.$$.fragment,at),Zp=d(at),Bi=r(at,"P",{});var tb=i(Bi);eg=s(tb,"Example of single-label classification:"),tb.forEach(t),tg=d(at),v(ws.$$.fragment,at),og=d(at),Wi=r(at,"P",{});var ob=i(Wi);ng=s(ob,"Example of multi-label classification:"),ob.forEach(t),sg=d(at),v(ks.$$.fragment,at),at.forEach(t),yt.forEach(t),ec=d(o),mo=r(o,"H2",{class:!0});var eh=i(mo);Xo=r(eh,"A",{id:!0,class:!0,href:!0});var nb=i(Xo);Qi=r(nb,"SPAN",{});var sb=i(Qi);v(vs.$$.fragment,sb),sb.forEach(t),nb.forEach(t),ag=d(eh),Hi=r(eh,"SPAN",{});var ab=i(Hi);rg=s(ab,"LongformerForMultipleChoice"),ab.forEach(t),eh.forEach(t),tc=d(o),He=r(o,"DIV",{class:!0});var Lt=i(He);v(bs.$$.fragment,Lt),ig=d(Lt),Ri=r(Lt,"P",{});var rb=i(Ri);lg=s(rb,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),rb.forEach(t),dg=d(Lt),Ts=r(Lt,"P",{});var th=i(Ts);cg=s(th,"This model inherits from "),Za=r(th,"A",{href:!0});var ib=i(Za);hg=s(ib,"PreTrainedModel"),ib.forEach(t),mg=s(th,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),th.forEach(t),fg=d(Lt),ys=r(Lt,"P",{});var oh=i(ys);pg=s(oh,"This model is also a PyTorch "),Ls=r(oh,"A",{href:!0,rel:!0});var lb=i(Ls);gg=s(lb,"torch.nn.Module"),lb.forEach(t),ug=s(oh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),oh.forEach(t),_g=d(Lt),Je=r(Lt,"DIV",{class:!0});var $t=i(Je);v($s.$$.fragment,$t),wg=d($t),fo=r($t,"P",{});var zr=i(fo);kg=s(zr,"The "),er=r(zr,"A",{href:!0});var db=i(er);vg=s(db,"LongformerForMultipleChoice"),db.forEach(t),bg=s(zr," forward method, overrides the "),Ui=r(zr,"CODE",{});var cb=i(Ui);Tg=s(cb,"__call__"),cb.forEach(t),yg=s(zr," special method."),zr.forEach(t),Lg=d($t),v(Yo.$$.fragment,$t),$g=d($t),Vi=r($t,"P",{});var hb=i(Vi);Fg=s(hb,"Example:"),hb.forEach(t),xg=d($t),v(Fs.$$.fragment,$t),$t.forEach(t),Lt.forEach(t),oc=d(o),po=r(o,"H2",{class:!0});var nh=i(po);Zo=r(nh,"A",{id:!0,class:!0,href:!0});var mb=i(Zo);Gi=r(mb,"SPAN",{});var fb=i(Gi);v(xs.$$.fragment,fb),fb.forEach(t),mb.forEach(t),Mg=d(nh),Ki=r(nh,"SPAN",{});var pb=i(Ki);Eg=s(pb,"LongformerForTokenClassification"),pb.forEach(t),nh.forEach(t),nc=d(o),Re=r(o,"DIV",{class:!0});var Ft=i(Re);v(Ms.$$.fragment,Ft),zg=d(Ft),Ji=r(Ft,"P",{});var gb=i(Ji);qg=s(gb,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),gb.forEach(t),Cg=d(Ft),Es=r(Ft,"P",{});var sh=i(Es);Og=s(sh,"This model inherits from "),tr=r(sh,"A",{href:!0});var ub=i(tr);Pg=s(ub,"PreTrainedModel"),ub.forEach(t),jg=s(sh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),sh.forEach(t),Ag=d(Ft),zs=r(Ft,"P",{});var ah=i(zs);Ng=s(ah,"This model is also a PyTorch "),qs=r(ah,"A",{href:!0,rel:!0});var _b=i(qs);Ig=s(_b,"torch.nn.Module"),_b.forEach(t),Sg=s(ah,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),ah.forEach(t),Dg=d(Ft),Xe=r(Ft,"DIV",{class:!0});var xt=i(Xe);v(Cs.$$.fragment,xt),Bg=d(xt),go=r(xt,"P",{});var qr=i(go);Wg=s(qr,"The "),or=r(qr,"A",{href:!0});var wb=i(or);Qg=s(wb,"LongformerForTokenClassification"),wb.forEach(t),Hg=s(qr," forward method, overrides the "),Xi=r(qr,"CODE",{});var kb=i(Xi);Rg=s(kb,"__call__"),kb.forEach(t),Ug=s(qr," special method."),qr.forEach(t),Vg=d(xt),v(en.$$.fragment,xt),Gg=d(xt),Yi=r(xt,"P",{});var vb=i(Yi);Kg=s(vb,"Example:"),vb.forEach(t),Jg=d(xt),v(Os.$$.fragment,xt),xt.forEach(t),Ft.forEach(t),sc=d(o),uo=r(o,"H2",{class:!0});var rh=i(uo);tn=r(rh,"A",{id:!0,class:!0,href:!0});var bb=i(tn);Zi=r(bb,"SPAN",{});var Tb=i(Zi);v(Ps.$$.fragment,Tb),Tb.forEach(t),bb.forEach(t),Xg=d(rh),el=r(rh,"SPAN",{});var yb=i(el);Yg=s(yb,"LongformerForQuestionAnswering"),yb.forEach(t),rh.forEach(t),ac=d(o),Ue=r(o,"DIV",{class:!0});var Mt=i(Ue);v(js.$$.fragment,Mt),Zg=d(Mt),_o=r(Mt,"P",{});var Cr=i(_o);eu=s(Cr,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layers on top of the hidden-states output to compute `),tl=r(Cr,"CODE",{});var Lb=i(tl);tu=s(Lb,"span start logits"),Lb.forEach(t),ou=s(Cr," and "),ol=r(Cr,"CODE",{});var $b=i(ol);nu=s($b,"span end logits"),$b.forEach(t),su=s(Cr,")."),Cr.forEach(t),au=d(Mt),As=r(Mt,"P",{});var ih=i(As);ru=s(ih,"This model inherits from "),nr=r(ih,"A",{href:!0});var Fb=i(nr);iu=s(Fb,"PreTrainedModel"),Fb.forEach(t),lu=s(ih,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ih.forEach(t),du=d(Mt),Ns=r(Mt,"P",{});var lh=i(Ns);cu=s(lh,"This model is also a PyTorch "),Is=r(lh,"A",{href:!0,rel:!0});var xb=i(Is);hu=s(xb,"torch.nn.Module"),xb.forEach(t),mu=s(lh,` subclass.
Use it as a regular PyTorch Module and refer to the PyTorch documentation for all matter related to general usage
and behavior.`),lh.forEach(t),fu=d(Mt),Ye=r(Mt,"DIV",{class:!0});var Et=i(Ye);v(Ss.$$.fragment,Et),pu=d(Et),wo=r(Et,"P",{});var Or=i(wo);gu=s(Or,"The "),sr=r(Or,"A",{href:!0});var Mb=i(sr);uu=s(Mb,"LongformerForQuestionAnswering"),Mb.forEach(t),_u=s(Or," forward method, overrides the "),nl=r(Or,"CODE",{});var Eb=i(nl);wu=s(Eb,"__call__"),Eb.forEach(t),ku=s(Or," special method."),Or.forEach(t),vu=d(Et),v(on.$$.fragment,Et),bu=d(Et),sl=r(Et,"P",{});var zb=i(sl);Tu=s(zb,"Examples:"),zb.forEach(t),yu=d(Et),v(Ds.$$.fragment,Et),Et.forEach(t),Mt.forEach(t),rc=d(o),ko=r(o,"H2",{class:!0});var dh=i(ko);nn=r(dh,"A",{id:!0,class:!0,href:!0});var qb=i(nn);al=r(qb,"SPAN",{});var Cb=i(al);v(Bs.$$.fragment,Cb),Cb.forEach(t),qb.forEach(t),Lu=d(dh),rl=r(dh,"SPAN",{});var Ob=i(rl);$u=s(Ob,"TFLongformerModel"),Ob.forEach(t),dh.forEach(t),ic=d(o),Ee=r(o,"DIV",{class:!0});var Be=i(Ee);v(Ws.$$.fragment,Be),Fu=d(Be),il=r(Be,"P",{});var Pb=i(il);xu=s(Pb,"The bare Longformer Model outputting raw hidden-states without any specific head on top."),Pb.forEach(t),Mu=d(Be),Qs=r(Be,"P",{});var ch=i(Qs);Eu=s(ch,"This model inherits from "),ar=r(ch,"A",{href:!0});var jb=i(ar);zu=s(jb,"TFPreTrainedModel"),jb.forEach(t),qu=s(ch,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),ch.forEach(t),Cu=d(Be),Hs=r(Be,"P",{});var hh=i(Hs);Ou=s(hh,"This model is also a "),Rs=r(hh,"A",{href:!0,rel:!0});var Ab=i(Rs);Pu=s(Ab,"tf.keras.Model"),Ab.forEach(t),ju=s(hh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),hh.forEach(t),Au=d(Be),v(sn.$$.fragment,Be),Nu=d(Be),vo=r(Be,"P",{});var Pr=i(vo);Iu=s(Pr,"This class copies code from "),rr=r(Pr,"A",{href:!0});var Nb=i(rr);Su=s(Nb,"TFRobertaModel"),Nb.forEach(t),Du=s(Pr,` and overwrites standard self-attention with longformer
self-attention to provide the ability to process long sequences following the self-attention approach described in
`),Us=r(Pr,"A",{href:!0,rel:!0});var Ib=i(Us);Bu=s(Ib,"Longformer: the Long-Document Transformer"),Ib.forEach(t),Wu=s(Pr,` by Iz Beltagy, Matthew E. Peters, and
Arman Cohan. Longformer self-attention combines a local (sliding window) and global attention to extend to long
documents without the O(n^2) increase in memory and compute.`),Pr.forEach(t),Qu=d(Be),Vs=r(Be,"P",{});var mh=i(Vs);Hu=s(mh,"The self-attention module "),ll=r(mh,"CODE",{});var Sb=i(ll);Ru=s(Sb,"TFLongformerSelfAttention"),Sb.forEach(t),Uu=s(mh,` implemented here supports the combination of local and global
attention but it lacks support for autoregressive attention and dilated attention. Autoregressive and dilated
attention are more relevant for autoregressive language modeling than finetuning on downstream tasks. Future
release will add support for autoregressive attention, but the support for dilated attention requires a custom CUDA
kernel to be memory and compute efficient.`),mh.forEach(t),Vu=d(Be),wt=r(Be,"DIV",{class:!0});var jr=i(wt);v(Gs.$$.fragment,jr),Gu=d(jr),bo=r(jr,"P",{});var Ar=i(bo);Ku=s(Ar,"The "),ir=r(Ar,"A",{href:!0});var Db=i(ir);Ju=s(Db,"TFLongformerModel"),Db.forEach(t),Xu=s(Ar," forward method, overrides the "),dl=r(Ar,"CODE",{});var Bb=i(dl);Yu=s(Bb,"__call__"),Bb.forEach(t),Zu=s(Ar," special method."),Ar.forEach(t),e_=d(jr),v(an.$$.fragment,jr),jr.forEach(t),Be.forEach(t),lc=d(o),To=r(o,"H2",{class:!0});var fh=i(To);rn=r(fh,"A",{id:!0,class:!0,href:!0});var Wb=i(rn);cl=r(Wb,"SPAN",{});var Qb=i(cl);v(Ks.$$.fragment,Qb),Qb.forEach(t),Wb.forEach(t),t_=d(fh),hl=r(fh,"SPAN",{});var Hb=i(hl);o_=s(Hb,"TFLongformerForMaskedLM"),Hb.forEach(t),fh.forEach(t),dc=d(o),Ae=r(o,"DIV",{class:!0});var lt=i(Ae);v(Js.$$.fragment,lt),n_=d(lt),Xs=r(lt,"P",{});var ph=i(Xs);s_=s(ph,"Longformer Model with a "),ml=r(ph,"CODE",{});var Rb=i(ml);a_=s(Rb,"language modeling"),Rb.forEach(t),r_=s(ph," head on top."),ph.forEach(t),i_=d(lt),Ys=r(lt,"P",{});var gh=i(Ys);l_=s(gh,"This model inherits from "),lr=r(gh,"A",{href:!0});var Ub=i(lr);d_=s(Ub,"TFPreTrainedModel"),Ub.forEach(t),c_=s(gh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),gh.forEach(t),h_=d(lt),Zs=r(lt,"P",{});var uh=i(Zs);m_=s(uh,"This model is also a "),ea=r(uh,"A",{href:!0,rel:!0});var Vb=i(ea);f_=s(Vb,"tf.keras.Model"),Vb.forEach(t),p_=s(uh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),uh.forEach(t),g_=d(lt),v(ln.$$.fragment,lt),u_=d(lt),Ze=r(lt,"DIV",{class:!0});var zt=i(Ze);v(ta.$$.fragment,zt),__=d(zt),yo=r(zt,"P",{});var Nr=i(yo);w_=s(Nr,"The "),dr=r(Nr,"A",{href:!0});var Gb=i(dr);k_=s(Gb,"TFLongformerForMaskedLM"),Gb.forEach(t),v_=s(Nr," forward method, overrides the "),fl=r(Nr,"CODE",{});var Kb=i(fl);b_=s(Kb,"__call__"),Kb.forEach(t),T_=s(Nr," special method."),Nr.forEach(t),y_=d(zt),v(dn.$$.fragment,zt),L_=d(zt),pl=r(zt,"P",{});var Jb=i(pl);$_=s(Jb,"Example:"),Jb.forEach(t),F_=d(zt),v(oa.$$.fragment,zt),zt.forEach(t),lt.forEach(t),cc=d(o),Lo=r(o,"H2",{class:!0});var _h=i(Lo);cn=r(_h,"A",{id:!0,class:!0,href:!0});var Xb=i(cn);gl=r(Xb,"SPAN",{});var Yb=i(gl);v(na.$$.fragment,Yb),Yb.forEach(t),Xb.forEach(t),x_=d(_h),ul=r(_h,"SPAN",{});var Zb=i(ul);M_=s(Zb,"TFLongformerForQuestionAnswering"),Zb.forEach(t),_h.forEach(t),hc=d(o),Ne=r(o,"DIV",{class:!0});var dt=i(Ne);v(sa.$$.fragment,dt),E_=d(dt),$o=r(dt,"P",{});var Ir=i($o);z_=s(Ir,`Longformer Model with a span classification head on top for extractive question-answering tasks like SQuAD /
TriviaQA (a linear layer on top of the hidden-states output to compute `),_l=r(Ir,"CODE",{});var eT=i(_l);q_=s(eT,"span start logits"),eT.forEach(t),C_=s(Ir," and "),wl=r(Ir,"CODE",{});var tT=i(wl);O_=s(tT,"span end logits"),tT.forEach(t),P_=s(Ir,")."),Ir.forEach(t),j_=d(dt),aa=r(dt,"P",{});var wh=i(aa);A_=s(wh,"This model inherits from "),cr=r(wh,"A",{href:!0});var oT=i(cr);N_=s(oT,"TFPreTrainedModel"),oT.forEach(t),I_=s(wh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),wh.forEach(t),S_=d(dt),ra=r(dt,"P",{});var kh=i(ra);D_=s(kh,"This model is also a "),ia=r(kh,"A",{href:!0,rel:!0});var nT=i(ia);B_=s(nT,"tf.keras.Model"),nT.forEach(t),W_=s(kh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),kh.forEach(t),Q_=d(dt),v(hn.$$.fragment,dt),H_=d(dt),et=r(dt,"DIV",{class:!0});var qt=i(et);v(la.$$.fragment,qt),R_=d(qt),Fo=r(qt,"P",{});var Sr=i(Fo);U_=s(Sr,"The "),hr=r(Sr,"A",{href:!0});var sT=i(hr);V_=s(sT,"TFLongformerForQuestionAnswering"),sT.forEach(t),G_=s(Sr," forward method, overrides the "),kl=r(Sr,"CODE",{});var aT=i(kl);K_=s(aT,"__call__"),aT.forEach(t),J_=s(Sr," special method."),Sr.forEach(t),X_=d(qt),v(mn.$$.fragment,qt),Y_=d(qt),vl=r(qt,"P",{});var rT=i(vl);Z_=s(rT,"Example:"),rT.forEach(t),ew=d(qt),v(da.$$.fragment,qt),qt.forEach(t),dt.forEach(t),mc=d(o),xo=r(o,"H2",{class:!0});var vh=i(xo);fn=r(vh,"A",{id:!0,class:!0,href:!0});var iT=i(fn);bl=r(iT,"SPAN",{});var lT=i(bl);v(ca.$$.fragment,lT),lT.forEach(t),iT.forEach(t),tw=d(vh),Tl=r(vh,"SPAN",{});var dT=i(Tl);ow=s(dT,"TFLongformerForSequenceClassification"),dT.forEach(t),vh.forEach(t),fc=d(o),Ie=r(o,"DIV",{class:!0});var ct=i(Ie);v(ha.$$.fragment,ct),nw=d(ct),yl=r(ct,"P",{});var cT=i(yl);sw=s(cT,`Longformer Model transformer with a sequence classification/regression head on top (a linear layer on top of the
pooled output) e.g. for GLUE tasks.`),cT.forEach(t),aw=d(ct),ma=r(ct,"P",{});var bh=i(ma);rw=s(bh,"This model inherits from "),mr=r(bh,"A",{href:!0});var hT=i(mr);iw=s(hT,"TFPreTrainedModel"),hT.forEach(t),lw=s(bh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),bh.forEach(t),dw=d(ct),fa=r(ct,"P",{});var Th=i(fa);cw=s(Th,"This model is also a "),pa=r(Th,"A",{href:!0,rel:!0});var mT=i(pa);hw=s(mT,"tf.keras.Model"),mT.forEach(t),mw=s(Th,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Th.forEach(t),fw=d(ct),v(pn.$$.fragment,ct),pw=d(ct),tt=r(ct,"DIV",{class:!0});var Ct=i(tt);v(ga.$$.fragment,Ct),gw=d(Ct),Mo=r(Ct,"P",{});var Dr=i(Mo);uw=s(Dr,"The "),fr=r(Dr,"A",{href:!0});var fT=i(fr);_w=s(fT,"TFLongformerForSequenceClassification"),fT.forEach(t),ww=s(Dr," forward method, overrides the "),Ll=r(Dr,"CODE",{});var pT=i(Ll);kw=s(pT,"__call__"),pT.forEach(t),vw=s(Dr," special method."),Dr.forEach(t),bw=d(Ct),v(gn.$$.fragment,Ct),Tw=d(Ct),$l=r(Ct,"P",{});var gT=i($l);yw=s(gT,"Example:"),gT.forEach(t),Lw=d(Ct),v(ua.$$.fragment,Ct),Ct.forEach(t),ct.forEach(t),pc=d(o),Eo=r(o,"H2",{class:!0});var yh=i(Eo);un=r(yh,"A",{id:!0,class:!0,href:!0});var uT=i(un);Fl=r(uT,"SPAN",{});var _T=i(Fl);v(_a.$$.fragment,_T),_T.forEach(t),uT.forEach(t),$w=d(yh),xl=r(yh,"SPAN",{});var wT=i(xl);Fw=s(wT,"TFLongformerForTokenClassification"),wT.forEach(t),yh.forEach(t),gc=d(o),Se=r(o,"DIV",{class:!0});var ht=i(Se);v(wa.$$.fragment,ht),xw=d(ht),Ml=r(ht,"P",{});var kT=i(Ml);Mw=s(kT,`Longformer Model with a token classification head on top (a linear layer on top of the hidden-states output) e.g.
for Named-Entity-Recognition (NER) tasks.`),kT.forEach(t),Ew=d(ht),ka=r(ht,"P",{});var Lh=i(ka);zw=s(Lh,"This model inherits from "),pr=r(Lh,"A",{href:!0});var vT=i(pr);qw=s(vT,"TFPreTrainedModel"),vT.forEach(t),Cw=s(Lh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),Lh.forEach(t),Ow=d(ht),va=r(ht,"P",{});var $h=i(va);Pw=s($h,"This model is also a "),ba=r($h,"A",{href:!0,rel:!0});var bT=i(ba);jw=s(bT,"tf.keras.Model"),bT.forEach(t),Aw=s($h,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),$h.forEach(t),Nw=d(ht),v(_n.$$.fragment,ht),Iw=d(ht),ot=r(ht,"DIV",{class:!0});var Ot=i(ot);v(Ta.$$.fragment,Ot),Sw=d(Ot),zo=r(Ot,"P",{});var Br=i(zo);Dw=s(Br,"The "),gr=r(Br,"A",{href:!0});var TT=i(gr);Bw=s(TT,"TFLongformerForTokenClassification"),TT.forEach(t),Ww=s(Br," forward method, overrides the "),El=r(Br,"CODE",{});var yT=i(El);Qw=s(yT,"__call__"),yT.forEach(t),Hw=s(Br," special method."),Br.forEach(t),Rw=d(Ot),v(wn.$$.fragment,Ot),Uw=d(Ot),zl=r(Ot,"P",{});var LT=i(zl);Vw=s(LT,"Example:"),LT.forEach(t),Gw=d(Ot),v(ya.$$.fragment,Ot),Ot.forEach(t),ht.forEach(t),uc=d(o),qo=r(o,"H2",{class:!0});var Fh=i(qo);kn=r(Fh,"A",{id:!0,class:!0,href:!0});var $T=i(kn);ql=r($T,"SPAN",{});var FT=i(ql);v(La.$$.fragment,FT),FT.forEach(t),$T.forEach(t),Kw=d(Fh),Cl=r(Fh,"SPAN",{});var xT=i(Cl);Jw=s(xT,"TFLongformerForMultipleChoice"),xT.forEach(t),Fh.forEach(t),_c=d(o),De=r(o,"DIV",{class:!0});var mt=i(De);v($a.$$.fragment,mt),Xw=d(mt),Ol=r(mt,"P",{});var MT=i(Ol);Yw=s(MT,`Longformer Model with a multiple choice classification head on top (a linear layer on top of the pooled output and
a softmax) e.g. for RocStories/SWAG tasks.`),MT.forEach(t),Zw=d(mt),Fa=r(mt,"P",{});var xh=i(Fa);ek=s(xh,"This model inherits from "),ur=r(xh,"A",{href:!0});var ET=i(ur);tk=s(ET,"TFPreTrainedModel"),ET.forEach(t),ok=s(xh,`. Check the superclass documentation for the generic methods the
library implements for all its model (such as downloading or saving, resizing the input embeddings, pruning heads
etc.)`),xh.forEach(t),nk=d(mt),xa=r(mt,"P",{});var Mh=i(xa);sk=s(Mh,"This model is also a "),Ma=r(Mh,"A",{href:!0,rel:!0});var zT=i(Ma);ak=s(zT,"tf.keras.Model"),zT.forEach(t),rk=s(Mh,` subclass. Use it
as a regular TF 2.0 Keras Model and refer to the TF 2.0 documentation for all matter related to general usage and
behavior.`),Mh.forEach(t),ik=d(mt),v(vn.$$.fragment,mt),lk=d(mt),nt=r(mt,"DIV",{class:!0});var Pt=i(nt);v(Ea.$$.fragment,Pt),dk=d(Pt),Co=r(Pt,"P",{});var Wr=i(Co);ck=s(Wr,"The "),_r=r(Wr,"A",{href:!0});var qT=i(_r);hk=s(qT,"TFLongformerForMultipleChoice"),qT.forEach(t),mk=s(Wr," forward method, overrides the "),Pl=r(Wr,"CODE",{});var CT=i(Pl);fk=s(CT,"__call__"),CT.forEach(t),pk=s(Wr," special method."),Wr.forEach(t),gk=d(Pt),v(bn.$$.fragment,Pt),uk=d(Pt),jl=r(Pt,"P",{});var OT=i(jl);_k=s(OT,"Example:"),OT.forEach(t),wk=d(Pt),v(za.$$.fragment,Pt),Pt.forEach(t),mt.forEach(t),this.h()},h(){c(p,"name","hf:doc:metadata"),c(p,"content",JSON.stringify(my)),c(u,"id","longformer"),c(u,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(u,"href","#longformer"),c(g,"class","relative group"),c(Z,"id","overview"),c(Z,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Z,"href","#overview"),c(E,"class","relative group"),c(te,"href","https://arxiv.org/pdf/2004.05150.pdf"),c(te,"rel","nofollow"),c(ve,"href","https://huggingface.co/beltagy"),c(ve,"rel","nofollow"),c(O,"href","https://github.com/allenai/longformer"),c(O,"rel","nofollow"),c(ke,"id","longformer-self-attention"),c(ke,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(ke,"href","#longformer-self-attention"),c(N,"class","relative group"),ed.a=td,od.a=nd,sd.a=ad,rd.a=id,dd.a=cd,c(Pa,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerModel.forward"),gd.a=ud,_d.a=wd,kd.a=vd,bd.a=Td,c(Tn,"href","https://arxiv.org/pdf/2004.05150.pdf"),c(Tn,"rel","nofollow"),c(Io,"id","training"),c(Io,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Io,"href","#training"),c(jt,"class","relative group"),c(ja,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerForMaskedLM"),c(Aa,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaForMaskedLM"),c(So,"id","transformers.LongformerConfig"),c(So,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(So,"href","#transformers.LongformerConfig"),c(Nt,"class","relative group"),c(Na,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerModel"),c(Ia,"href","/docs/transformers/master/en/model_doc/longformer#transformers.TFLongformerModel"),c(Sa,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerModel"),c(xn,"href","https://huggingface.co/roberta-base"),c(xn,"rel","nofollow"),c(Da,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerConfig"),c(Ba,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaConfig"),c(je,"class","docstring"),c(Do,"id","transformers.LongformerTokenizer"),c(Do,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Do,"href","#transformers.LongformerTokenizer"),c(Bt,"class","relative group"),c(Wa,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizer"),c(Qa,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizer"),c(ft,"class","docstring"),c(Wo,"id","transformers.LongformerTokenizerFast"),c(Wo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Wo,"href","#transformers.LongformerTokenizerFast"),c(Wt,"class","relative group"),c(Ha,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerTokenizerFast"),c(Ra,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaTokenizerFast"),c(pt,"class","docstring"),c(Ho,"id","transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),c(Ho,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ho,"href","#transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput"),c(Qt,"class","relative group"),c(Ht,"class","docstring"),c(Rt,"class","docstring"),c(Ut,"class","docstring"),c(Vt,"class","docstring"),c(Gt,"class","docstring"),c(Kt,"class","docstring"),c(Jt,"class","docstring"),c(Xt,"class","docstring"),c(Yt,"class","docstring"),c(Zt,"class","docstring"),c(eo,"class","docstring"),c(to,"class","docstring"),c(oo,"class","docstring"),c(no,"class","docstring"),c(Ro,"id","transformers.LongformerModel"),c(Ro,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ro,"href","#transformers.LongformerModel"),c(so,"class","relative group"),c(Ua,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Zn,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Zn,"rel","nofollow"),c(Va,"href","/docs/transformers/master/en/model_doc/roberta#transformers.RobertaModel"),c(es,"href","https://arxiv.org/abs/2004.05150"),c(es,"rel","nofollow"),c(Ga,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerModel"),c(Ge,"class","docstring"),c(qe,"class","docstring"),c(Vo,"id","transformers.LongformerForMaskedLM"),c(Vo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Vo,"href","#transformers.LongformerForMaskedLM"),c(io,"class","relative group"),c(Ka,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(ds,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(ds,"rel","nofollow"),c(Ja,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerForMaskedLM"),c(Ke,"class","docstring"),c(We,"class","docstring"),c(Ko,"id","transformers.LongformerForSequenceClassification"),c(Ko,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Ko,"href","#transformers.LongformerForSequenceClassification"),c(co,"class","relative group"),c(Xa,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(us,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(us,"rel","nofollow"),c(Ya,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerForSequenceClassification"),c(Ce,"class","docstring"),c(Qe,"class","docstring"),c(Xo,"id","transformers.LongformerForMultipleChoice"),c(Xo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Xo,"href","#transformers.LongformerForMultipleChoice"),c(mo,"class","relative group"),c(Za,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Ls,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Ls,"rel","nofollow"),c(er,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerForMultipleChoice"),c(Je,"class","docstring"),c(He,"class","docstring"),c(Zo,"id","transformers.LongformerForTokenClassification"),c(Zo,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(Zo,"href","#transformers.LongformerForTokenClassification"),c(po,"class","relative group"),c(tr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(qs,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(qs,"rel","nofollow"),c(or,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerForTokenClassification"),c(Xe,"class","docstring"),c(Re,"class","docstring"),c(tn,"id","transformers.LongformerForQuestionAnswering"),c(tn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(tn,"href","#transformers.LongformerForQuestionAnswering"),c(uo,"class","relative group"),c(nr,"href","/docs/transformers/master/en/main_classes/model#transformers.PreTrainedModel"),c(Is,"href","https://pytorch.org/docs/stable/nn.html#torch.nn.Module"),c(Is,"rel","nofollow"),c(sr,"href","/docs/transformers/master/en/model_doc/longformer#transformers.LongformerForQuestionAnswering"),c(Ye,"class","docstring"),c(Ue,"class","docstring"),c(nn,"id","transformers.TFLongformerModel"),c(nn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(nn,"href","#transformers.TFLongformerModel"),c(ko,"class","relative group"),c(ar,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Rs,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Rs,"rel","nofollow"),c(rr,"href","/docs/transformers/master/en/model_doc/roberta#transformers.TFRobertaModel"),c(Us,"href","https://arxiv.org/abs/2004.05150"),c(Us,"rel","nofollow"),c(ir,"href","/docs/transformers/master/en/model_doc/longformer#transformers.TFLongformerModel"),c(wt,"class","docstring"),c(Ee,"class","docstring"),c(rn,"id","transformers.TFLongformerForMaskedLM"),c(rn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(rn,"href","#transformers.TFLongformerForMaskedLM"),c(To,"class","relative group"),c(lr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(ea,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ea,"rel","nofollow"),c(dr,"href","/docs/transformers/master/en/model_doc/longformer#transformers.TFLongformerForMaskedLM"),c(Ze,"class","docstring"),c(Ae,"class","docstring"),c(cn,"id","transformers.TFLongformerForQuestionAnswering"),c(cn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(cn,"href","#transformers.TFLongformerForQuestionAnswering"),c(Lo,"class","relative group"),c(cr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(ia,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ia,"rel","nofollow"),c(hr,"href","/docs/transformers/master/en/model_doc/longformer#transformers.TFLongformerForQuestionAnswering"),c(et,"class","docstring"),c(Ne,"class","docstring"),c(fn,"id","transformers.TFLongformerForSequenceClassification"),c(fn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(fn,"href","#transformers.TFLongformerForSequenceClassification"),c(xo,"class","relative group"),c(mr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(pa,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(pa,"rel","nofollow"),c(fr,"href","/docs/transformers/master/en/model_doc/longformer#transformers.TFLongformerForSequenceClassification"),c(tt,"class","docstring"),c(Ie,"class","docstring"),c(un,"id","transformers.TFLongformerForTokenClassification"),c(un,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(un,"href","#transformers.TFLongformerForTokenClassification"),c(Eo,"class","relative group"),c(pr,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(ba,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(ba,"rel","nofollow"),c(gr,"href","/docs/transformers/master/en/model_doc/longformer#transformers.TFLongformerForTokenClassification"),c(ot,"class","docstring"),c(Se,"class","docstring"),c(kn,"id","transformers.TFLongformerForMultipleChoice"),c(kn,"class","header-link block pr-1.5 text-lg no-hover:hidden with-hover:absolute with-hover:p-1.5 with-hover:opacity-0 with-hover:group-hover:opacity-100 with-hover:right-full"),c(kn,"href","#transformers.TFLongformerForMultipleChoice"),c(qo,"class","relative group"),c(ur,"href","/docs/transformers/master/en/main_classes/model#transformers.TFPreTrainedModel"),c(Ma,"href","https://www.tensorflow.org/api_docs/python/tf/keras/Model"),c(Ma,"rel","nofollow"),c(_r,"href","/docs/transformers/master/en/model_doc/longformer#transformers.TFLongformerForMultipleChoice"),c(nt,"class","docstring"),c(De,"class","docstring")},m(o,f){e(document.head,p),h(o,x,f),h(o,g,f),e(g,u),e(u,$),b(w,$,null),e(g,_),e(g,M),e(M,me),h(o,J,f),h(o,E,f),e(E,Z),e(Z,I),b(ee,I,null),e(E,fe),e(E,S),e(S,pe),h(o,le,f),h(o,G,f),e(G,P),e(G,te),e(te,X),e(G,z),h(o,C,f),h(o,ne,f),e(ne,H),h(o,de,f),h(o,se,f),e(se,D),e(D,ge),h(o,ce,f),h(o,q,f),e(q,ue),h(o,W,f),h(o,ae,f),e(ae,K),e(K,R),e(K,re),e(re,_e),e(K,j),e(K,ie),e(ie,U),e(K,we),e(K,m),e(m,F),e(K,Y),h(o,Te,f),h(o,he,f),e(he,A),e(he,ve),e(ve,$e),e(he,Fe),e(he,O),e(O,V),e(he,xe),h(o,ye,f),h(o,N,f),e(N,ke),e(ke,be),b(oe,be,null),e(N,Me),e(N,Qr),e(Qr,Eh),h(o,Zl,f),h(o,Le,f),e(Le,zh),ed.m(PT,Le),e(Le,td),od.m(jT,Le),e(Le,nd),sd.m(AT,Le),e(Le,ad),e(Le,Hr),e(Hr,qh),e(Le,Ch),e(Le,Rr),e(Rr,Oh),e(Le,Ph),e(Le,Ur),e(Ur,jh),e(Le,Ah),rd.m(NT,Le),e(Le,id),e(Le,Vr),e(Vr,Nh),e(Le,Ih),h(o,ld,f),h(o,ut,f),e(ut,Sh),dd.m(IT,ut),e(ut,cd),e(ut,Gr),e(Gr,Dh),e(ut,Bh),h(o,hd,f),h(o,_t,f),e(_t,Wh),e(_t,Kr),e(Kr,Qh),e(_t,Hh),e(_t,Jr),e(Jr,Rh),e(_t,Uh),h(o,md,f),h(o,jo,f),e(jo,Xr),e(Xr,Vh),e(jo,Gh),e(jo,Yr),e(Yr,Kh),h(o,fd,f),h(o,Ao,f),e(Ao,Jh),e(Ao,Pa),e(Pa,Xh),e(Ao,Yh),h(o,pd,f),h(o,Ve,f),e(Ve,Zh),gd.m(ST,Ve),e(Ve,ud),_d.m(DT,Ve),e(Ve,wd),kd.m(BT,Ve),e(Ve,vd),bd.m(WT,Ve),e(Ve,Td),h(o,yd,f),h(o,No,f),e(No,em),e(No,Tn),e(Tn,tm),e(No,om),h(o,Ld,f),h(o,jt,f),e(jt,Io),e(Io,Zr),b(yn,Zr,null),e(jt,nm),e(jt,ei),e(ei,sm),h(o,$d,f),h(o,At,f),e(At,ja),e(ja,am),e(At,rm),e(At,Aa),e(Aa,im),e(At,lm),h(o,Fd,f),b(Ln,o,f),h(o,xd,f),h(o,Nt,f),e(Nt,So),e(So,ti),b($n,ti,null),e(Nt,dm),e(Nt,oi),e(oi,cm),h(o,Md,f),h(o,je,f),b(Fn,je,null),e(je,hm),e(je,It),e(It,mm),e(It,Na),e(Na,fm),e(It,pm),e(It,Ia),e(Ia,gm),e(It,um),e(je,_m),e(je,St),e(St,wm),e(St,Sa),e(Sa,km),e(St,vm),e(St,xn),e(xn,bm),e(St,Tm),e(je,ym),e(je,Dt),e(Dt,Lm),e(Dt,Da),e(Da,$m),e(Dt,Fm),e(Dt,Ba),e(Ba,xm),e(Dt,Mm),e(je,Em),e(je,ni),e(ni,zm),e(je,qm),b(Mn,je,null),h(o,Ed,f),h(o,Bt,f),e(Bt,Do),e(Do,si),b(En,si,null),e(Bt,Cm),e(Bt,ai),e(ai,Om),h(o,zd,f),h(o,ft,f),b(zn,ft,null),e(ft,Pm),e(ft,ri),e(ri,jm),e(ft,Am),e(ft,Bo),e(Bo,Wa),e(Wa,Nm),e(Bo,Im),e(Bo,Qa),e(Qa,Sm),e(Bo,Dm),h(o,qd,f),h(o,Wt,f),e(Wt,Wo),e(Wo,ii),b(qn,ii,null),e(Wt,Bm),e(Wt,li),e(li,Wm),h(o,Cd,f),h(o,pt,f),b(Cn,pt,null),e(pt,Qm),e(pt,On),e(On,Hm),e(On,di),e(di,Rm),e(On,Um),e(pt,Vm),e(pt,Qo),e(Qo,Ha),e(Ha,Gm),e(Qo,Km),e(Qo,Ra),e(Ra,Jm),e(Qo,Xm),h(o,Od,f),h(o,Qt,f),e(Qt,Ho),e(Ho,ci),b(Pn,ci,null),e(Qt,Ym),e(Qt,hi),e(hi,Zm),h(o,Pd,f),h(o,Ht,f),b(jn,Ht,null),e(Ht,ef),e(Ht,mi),e(mi,tf),h(o,jd,f),h(o,Rt,f),b(An,Rt,null),e(Rt,of),e(Rt,fi),e(fi,nf),h(o,Ad,f),h(o,Ut,f),b(Nn,Ut,null),e(Ut,sf),e(Ut,pi),e(pi,af),h(o,Nd,f),h(o,Vt,f),b(In,Vt,null),e(Vt,rf),e(Vt,gi),e(gi,lf),h(o,Id,f),h(o,Gt,f),b(Sn,Gt,null),e(Gt,df),e(Gt,ui),e(ui,cf),h(o,Sd,f),h(o,Kt,f),b(Dn,Kt,null),e(Kt,hf),e(Kt,_i),e(_i,mf),h(o,Dd,f),h(o,Jt,f),b(Bn,Jt,null),e(Jt,ff),e(Jt,wi),e(wi,pf),h(o,Bd,f),h(o,Xt,f),b(Wn,Xt,null),e(Xt,gf),e(Xt,ki),e(ki,uf),h(o,Wd,f),h(o,Yt,f),b(Qn,Yt,null),e(Yt,_f),e(Yt,vi),e(vi,wf),h(o,Qd,f),h(o,Zt,f),b(Hn,Zt,null),e(Zt,kf),e(Zt,bi),e(bi,vf),h(o,Hd,f),h(o,eo,f),b(Rn,eo,null),e(eo,bf),e(eo,Ti),e(Ti,Tf),h(o,Rd,f),h(o,to,f),b(Un,to,null),e(to,yf),e(to,yi),e(yi,Lf),h(o,Ud,f),h(o,oo,f),b(Vn,oo,null),e(oo,$f),e(oo,Li),e(Li,Ff),h(o,Vd,f),h(o,no,f),b(Gn,no,null),e(no,xf),e(no,$i),e($i,Mf),h(o,Gd,f),h(o,so,f),e(so,Ro),e(Ro,Fi),b(Kn,Fi,null),e(so,Ef),e(so,xi),e(xi,zf),h(o,Kd,f),h(o,qe,f),b(Jn,qe,null),e(qe,qf),e(qe,Mi),e(Mi,Cf),e(qe,Of),e(qe,Xn),e(Xn,Pf),e(Xn,Ua),e(Ua,jf),e(Xn,Af),e(qe,Nf),e(qe,Yn),e(Yn,If),e(Yn,Zn),e(Zn,Sf),e(Yn,Df),e(qe,Bf),e(qe,ao),e(ao,Wf),e(ao,Va),e(Va,Qf),e(ao,Hf),e(ao,es),e(es,Rf),e(ao,Uf),e(qe,Vf),e(qe,ts),e(ts,Gf),e(ts,Ei),e(Ei,Kf),e(ts,Jf),e(qe,Xf),e(qe,Ge),b(os,Ge,null),e(Ge,Yf),e(Ge,ro),e(ro,Zf),e(ro,Ga),e(Ga,ep),e(ro,tp),e(ro,zi),e(zi,op),e(ro,np),e(Ge,sp),b(Uo,Ge,null),e(Ge,ap),e(Ge,qi),e(qi,rp),e(Ge,ip),b(ns,Ge,null),h(o,Jd,f),h(o,io,f),e(io,Vo),e(Vo,Ci),b(ss,Ci,null),e(io,lp),e(io,Oi),e(Oi,dp),h(o,Xd,f),h(o,We,f),b(as,We,null),e(We,cp),e(We,rs),e(rs,hp),e(rs,Pi),e(Pi,mp),e(rs,fp),e(We,pp),e(We,is),e(is,gp),e(is,Ka),e(Ka,up),e(is,_p),e(We,wp),e(We,ls),e(ls,kp),e(ls,ds),e(ds,vp),e(ls,bp),e(We,Tp),e(We,Ke),b(cs,Ke,null),e(Ke,yp),e(Ke,lo),e(lo,Lp),e(lo,Ja),e(Ja,$p),e(lo,Fp),e(lo,ji),e(ji,xp),e(lo,Mp),e(Ke,Ep),b(Go,Ke,null),e(Ke,zp),e(Ke,Ai),e(Ai,qp),e(Ke,Cp),b(hs,Ke,null),h(o,Yd,f),h(o,co,f),e(co,Ko),e(Ko,Ni),b(ms,Ni,null),e(co,Op),e(co,Ii),e(Ii,Pp),h(o,Zd,f),h(o,Qe,f),b(fs,Qe,null),e(Qe,jp),e(Qe,Si),e(Si,Ap),e(Qe,Np),e(Qe,ps),e(ps,Ip),e(ps,Xa),e(Xa,Sp),e(ps,Dp),e(Qe,Bp),e(Qe,gs),e(gs,Wp),e(gs,us),e(us,Qp),e(gs,Hp),e(Qe,Rp),e(Qe,Ce),b(_s,Ce,null),e(Ce,Up),e(Ce,ho),e(ho,Vp),e(ho,Ya),e(Ya,Gp),e(ho,Kp),e(ho,Di),e(Di,Jp),e(ho,Xp),e(Ce,Yp),b(Jo,Ce,null),e(Ce,Zp),e(Ce,Bi),e(Bi,eg),e(Ce,tg),b(ws,Ce,null),e(Ce,og),e(Ce,Wi),e(Wi,ng),e(Ce,sg),b(ks,Ce,null),h(o,ec,f),h(o,mo,f),e(mo,Xo),e(Xo,Qi),b(vs,Qi,null),e(mo,ag),e(mo,Hi),e(Hi,rg),h(o,tc,f),h(o,He,f),b(bs,He,null),e(He,ig),e(He,Ri),e(Ri,lg),e(He,dg),e(He,Ts),e(Ts,cg),e(Ts,Za),e(Za,hg),e(Ts,mg),e(He,fg),e(He,ys),e(ys,pg),e(ys,Ls),e(Ls,gg),e(ys,ug),e(He,_g),e(He,Je),b($s,Je,null),e(Je,wg),e(Je,fo),e(fo,kg),e(fo,er),e(er,vg),e(fo,bg),e(fo,Ui),e(Ui,Tg),e(fo,yg),e(Je,Lg),b(Yo,Je,null),e(Je,$g),e(Je,Vi),e(Vi,Fg),e(Je,xg),b(Fs,Je,null),h(o,oc,f),h(o,po,f),e(po,Zo),e(Zo,Gi),b(xs,Gi,null),e(po,Mg),e(po,Ki),e(Ki,Eg),h(o,nc,f),h(o,Re,f),b(Ms,Re,null),e(Re,zg),e(Re,Ji),e(Ji,qg),e(Re,Cg),e(Re,Es),e(Es,Og),e(Es,tr),e(tr,Pg),e(Es,jg),e(Re,Ag),e(Re,zs),e(zs,Ng),e(zs,qs),e(qs,Ig),e(zs,Sg),e(Re,Dg),e(Re,Xe),b(Cs,Xe,null),e(Xe,Bg),e(Xe,go),e(go,Wg),e(go,or),e(or,Qg),e(go,Hg),e(go,Xi),e(Xi,Rg),e(go,Ug),e(Xe,Vg),b(en,Xe,null),e(Xe,Gg),e(Xe,Yi),e(Yi,Kg),e(Xe,Jg),b(Os,Xe,null),h(o,sc,f),h(o,uo,f),e(uo,tn),e(tn,Zi),b(Ps,Zi,null),e(uo,Xg),e(uo,el),e(el,Yg),h(o,ac,f),h(o,Ue,f),b(js,Ue,null),e(Ue,Zg),e(Ue,_o),e(_o,eu),e(_o,tl),e(tl,tu),e(_o,ou),e(_o,ol),e(ol,nu),e(_o,su),e(Ue,au),e(Ue,As),e(As,ru),e(As,nr),e(nr,iu),e(As,lu),e(Ue,du),e(Ue,Ns),e(Ns,cu),e(Ns,Is),e(Is,hu),e(Ns,mu),e(Ue,fu),e(Ue,Ye),b(Ss,Ye,null),e(Ye,pu),e(Ye,wo),e(wo,gu),e(wo,sr),e(sr,uu),e(wo,_u),e(wo,nl),e(nl,wu),e(wo,ku),e(Ye,vu),b(on,Ye,null),e(Ye,bu),e(Ye,sl),e(sl,Tu),e(Ye,yu),b(Ds,Ye,null),h(o,rc,f),h(o,ko,f),e(ko,nn),e(nn,al),b(Bs,al,null),e(ko,Lu),e(ko,rl),e(rl,$u),h(o,ic,f),h(o,Ee,f),b(Ws,Ee,null),e(Ee,Fu),e(Ee,il),e(il,xu),e(Ee,Mu),e(Ee,Qs),e(Qs,Eu),e(Qs,ar),e(ar,zu),e(Qs,qu),e(Ee,Cu),e(Ee,Hs),e(Hs,Ou),e(Hs,Rs),e(Rs,Pu),e(Hs,ju),e(Ee,Au),b(sn,Ee,null),e(Ee,Nu),e(Ee,vo),e(vo,Iu),e(vo,rr),e(rr,Su),e(vo,Du),e(vo,Us),e(Us,Bu),e(vo,Wu),e(Ee,Qu),e(Ee,Vs),e(Vs,Hu),e(Vs,ll),e(ll,Ru),e(Vs,Uu),e(Ee,Vu),e(Ee,wt),b(Gs,wt,null),e(wt,Gu),e(wt,bo),e(bo,Ku),e(bo,ir),e(ir,Ju),e(bo,Xu),e(bo,dl),e(dl,Yu),e(bo,Zu),e(wt,e_),b(an,wt,null),h(o,lc,f),h(o,To,f),e(To,rn),e(rn,cl),b(Ks,cl,null),e(To,t_),e(To,hl),e(hl,o_),h(o,dc,f),h(o,Ae,f),b(Js,Ae,null),e(Ae,n_),e(Ae,Xs),e(Xs,s_),e(Xs,ml),e(ml,a_),e(Xs,r_),e(Ae,i_),e(Ae,Ys),e(Ys,l_),e(Ys,lr),e(lr,d_),e(Ys,c_),e(Ae,h_),e(Ae,Zs),e(Zs,m_),e(Zs,ea),e(ea,f_),e(Zs,p_),e(Ae,g_),b(ln,Ae,null),e(Ae,u_),e(Ae,Ze),b(ta,Ze,null),e(Ze,__),e(Ze,yo),e(yo,w_),e(yo,dr),e(dr,k_),e(yo,v_),e(yo,fl),e(fl,b_),e(yo,T_),e(Ze,y_),b(dn,Ze,null),e(Ze,L_),e(Ze,pl),e(pl,$_),e(Ze,F_),b(oa,Ze,null),h(o,cc,f),h(o,Lo,f),e(Lo,cn),e(cn,gl),b(na,gl,null),e(Lo,x_),e(Lo,ul),e(ul,M_),h(o,hc,f),h(o,Ne,f),b(sa,Ne,null),e(Ne,E_),e(Ne,$o),e($o,z_),e($o,_l),e(_l,q_),e($o,C_),e($o,wl),e(wl,O_),e($o,P_),e(Ne,j_),e(Ne,aa),e(aa,A_),e(aa,cr),e(cr,N_),e(aa,I_),e(Ne,S_),e(Ne,ra),e(ra,D_),e(ra,ia),e(ia,B_),e(ra,W_),e(Ne,Q_),b(hn,Ne,null),e(Ne,H_),e(Ne,et),b(la,et,null),e(et,R_),e(et,Fo),e(Fo,U_),e(Fo,hr),e(hr,V_),e(Fo,G_),e(Fo,kl),e(kl,K_),e(Fo,J_),e(et,X_),b(mn,et,null),e(et,Y_),e(et,vl),e(vl,Z_),e(et,ew),b(da,et,null),h(o,mc,f),h(o,xo,f),e(xo,fn),e(fn,bl),b(ca,bl,null),e(xo,tw),e(xo,Tl),e(Tl,ow),h(o,fc,f),h(o,Ie,f),b(ha,Ie,null),e(Ie,nw),e(Ie,yl),e(yl,sw),e(Ie,aw),e(Ie,ma),e(ma,rw),e(ma,mr),e(mr,iw),e(ma,lw),e(Ie,dw),e(Ie,fa),e(fa,cw),e(fa,pa),e(pa,hw),e(fa,mw),e(Ie,fw),b(pn,Ie,null),e(Ie,pw),e(Ie,tt),b(ga,tt,null),e(tt,gw),e(tt,Mo),e(Mo,uw),e(Mo,fr),e(fr,_w),e(Mo,ww),e(Mo,Ll),e(Ll,kw),e(Mo,vw),e(tt,bw),b(gn,tt,null),e(tt,Tw),e(tt,$l),e($l,yw),e(tt,Lw),b(ua,tt,null),h(o,pc,f),h(o,Eo,f),e(Eo,un),e(un,Fl),b(_a,Fl,null),e(Eo,$w),e(Eo,xl),e(xl,Fw),h(o,gc,f),h(o,Se,f),b(wa,Se,null),e(Se,xw),e(Se,Ml),e(Ml,Mw),e(Se,Ew),e(Se,ka),e(ka,zw),e(ka,pr),e(pr,qw),e(ka,Cw),e(Se,Ow),e(Se,va),e(va,Pw),e(va,ba),e(ba,jw),e(va,Aw),e(Se,Nw),b(_n,Se,null),e(Se,Iw),e(Se,ot),b(Ta,ot,null),e(ot,Sw),e(ot,zo),e(zo,Dw),e(zo,gr),e(gr,Bw),e(zo,Ww),e(zo,El),e(El,Qw),e(zo,Hw),e(ot,Rw),b(wn,ot,null),e(ot,Uw),e(ot,zl),e(zl,Vw),e(ot,Gw),b(ya,ot,null),h(o,uc,f),h(o,qo,f),e(qo,kn),e(kn,ql),b(La,ql,null),e(qo,Kw),e(qo,Cl),e(Cl,Jw),h(o,_c,f),h(o,De,f),b($a,De,null),e(De,Xw),e(De,Ol),e(Ol,Yw),e(De,Zw),e(De,Fa),e(Fa,ek),e(Fa,ur),e(ur,tk),e(Fa,ok),e(De,nk),e(De,xa),e(xa,sk),e(xa,Ma),e(Ma,ak),e(xa,rk),e(De,ik),b(vn,De,null),e(De,lk),e(De,nt),b(Ea,nt,null),e(nt,dk),e(nt,Co),e(Co,ck),e(Co,_r),e(_r,hk),e(Co,mk),e(Co,Pl),e(Pl,fk),e(Co,pk),e(nt,gk),b(bn,nt,null),e(nt,uk),e(nt,jl),e(jl,_k),e(nt,wk),b(za,nt,null),wc=!0},p(o,[f]){const qa={};f&2&&(qa.$$scope={dirty:f,ctx:o}),Uo.$set(qa);const Al={};f&2&&(Al.$$scope={dirty:f,ctx:o}),Go.$set(Al);const Nl={};f&2&&(Nl.$$scope={dirty:f,ctx:o}),Jo.$set(Nl);const Il={};f&2&&(Il.$$scope={dirty:f,ctx:o}),Yo.$set(Il);const Ca={};f&2&&(Ca.$$scope={dirty:f,ctx:o}),en.$set(Ca);const Sl={};f&2&&(Sl.$$scope={dirty:f,ctx:o}),on.$set(Sl);const Dl={};f&2&&(Dl.$$scope={dirty:f,ctx:o}),sn.$set(Dl);const Bl={};f&2&&(Bl.$$scope={dirty:f,ctx:o}),an.$set(Bl);const Oa={};f&2&&(Oa.$$scope={dirty:f,ctx:o}),ln.$set(Oa);const Wl={};f&2&&(Wl.$$scope={dirty:f,ctx:o}),dn.$set(Wl);const Ql={};f&2&&(Ql.$$scope={dirty:f,ctx:o}),hn.$set(Ql);const Hl={};f&2&&(Hl.$$scope={dirty:f,ctx:o}),mn.$set(Hl);const Rl={};f&2&&(Rl.$$scope={dirty:f,ctx:o}),pn.$set(Rl);const Ul={};f&2&&(Ul.$$scope={dirty:f,ctx:o}),gn.$set(Ul);const Vl={};f&2&&(Vl.$$scope={dirty:f,ctx:o}),_n.$set(Vl);const gt={};f&2&&(gt.$$scope={dirty:f,ctx:o}),wn.$set(gt);const Gl={};f&2&&(Gl.$$scope={dirty:f,ctx:o}),vn.$set(Gl);const Kl={};f&2&&(Kl.$$scope={dirty:f,ctx:o}),bn.$set(Kl)},i(o){wc||(T(w.$$.fragment,o),T(ee.$$.fragment,o),T(oe.$$.fragment,o),T(yn.$$.fragment,o),T(Ln.$$.fragment,o),T($n.$$.fragment,o),T(Fn.$$.fragment,o),T(Mn.$$.fragment,o),T(En.$$.fragment,o),T(zn.$$.fragment,o),T(qn.$$.fragment,o),T(Cn.$$.fragment,o),T(Pn.$$.fragment,o),T(jn.$$.fragment,o),T(An.$$.fragment,o),T(Nn.$$.fragment,o),T(In.$$.fragment,o),T(Sn.$$.fragment,o),T(Dn.$$.fragment,o),T(Bn.$$.fragment,o),T(Wn.$$.fragment,o),T(Qn.$$.fragment,o),T(Hn.$$.fragment,o),T(Rn.$$.fragment,o),T(Un.$$.fragment,o),T(Vn.$$.fragment,o),T(Gn.$$.fragment,o),T(Kn.$$.fragment,o),T(Jn.$$.fragment,o),T(os.$$.fragment,o),T(Uo.$$.fragment,o),T(ns.$$.fragment,o),T(ss.$$.fragment,o),T(as.$$.fragment,o),T(cs.$$.fragment,o),T(Go.$$.fragment,o),T(hs.$$.fragment,o),T(ms.$$.fragment,o),T(fs.$$.fragment,o),T(_s.$$.fragment,o),T(Jo.$$.fragment,o),T(ws.$$.fragment,o),T(ks.$$.fragment,o),T(vs.$$.fragment,o),T(bs.$$.fragment,o),T($s.$$.fragment,o),T(Yo.$$.fragment,o),T(Fs.$$.fragment,o),T(xs.$$.fragment,o),T(Ms.$$.fragment,o),T(Cs.$$.fragment,o),T(en.$$.fragment,o),T(Os.$$.fragment,o),T(Ps.$$.fragment,o),T(js.$$.fragment,o),T(Ss.$$.fragment,o),T(on.$$.fragment,o),T(Ds.$$.fragment,o),T(Bs.$$.fragment,o),T(Ws.$$.fragment,o),T(sn.$$.fragment,o),T(Gs.$$.fragment,o),T(an.$$.fragment,o),T(Ks.$$.fragment,o),T(Js.$$.fragment,o),T(ln.$$.fragment,o),T(ta.$$.fragment,o),T(dn.$$.fragment,o),T(oa.$$.fragment,o),T(na.$$.fragment,o),T(sa.$$.fragment,o),T(hn.$$.fragment,o),T(la.$$.fragment,o),T(mn.$$.fragment,o),T(da.$$.fragment,o),T(ca.$$.fragment,o),T(ha.$$.fragment,o),T(pn.$$.fragment,o),T(ga.$$.fragment,o),T(gn.$$.fragment,o),T(ua.$$.fragment,o),T(_a.$$.fragment,o),T(wa.$$.fragment,o),T(_n.$$.fragment,o),T(Ta.$$.fragment,o),T(wn.$$.fragment,o),T(ya.$$.fragment,o),T(La.$$.fragment,o),T($a.$$.fragment,o),T(vn.$$.fragment,o),T(Ea.$$.fragment,o),T(bn.$$.fragment,o),T(za.$$.fragment,o),wc=!0)},o(o){y(w.$$.fragment,o),y(ee.$$.fragment,o),y(oe.$$.fragment,o),y(yn.$$.fragment,o),y(Ln.$$.fragment,o),y($n.$$.fragment,o),y(Fn.$$.fragment,o),y(Mn.$$.fragment,o),y(En.$$.fragment,o),y(zn.$$.fragment,o),y(qn.$$.fragment,o),y(Cn.$$.fragment,o),y(Pn.$$.fragment,o),y(jn.$$.fragment,o),y(An.$$.fragment,o),y(Nn.$$.fragment,o),y(In.$$.fragment,o),y(Sn.$$.fragment,o),y(Dn.$$.fragment,o),y(Bn.$$.fragment,o),y(Wn.$$.fragment,o),y(Qn.$$.fragment,o),y(Hn.$$.fragment,o),y(Rn.$$.fragment,o),y(Un.$$.fragment,o),y(Vn.$$.fragment,o),y(Gn.$$.fragment,o),y(Kn.$$.fragment,o),y(Jn.$$.fragment,o),y(os.$$.fragment,o),y(Uo.$$.fragment,o),y(ns.$$.fragment,o),y(ss.$$.fragment,o),y(as.$$.fragment,o),y(cs.$$.fragment,o),y(Go.$$.fragment,o),y(hs.$$.fragment,o),y(ms.$$.fragment,o),y(fs.$$.fragment,o),y(_s.$$.fragment,o),y(Jo.$$.fragment,o),y(ws.$$.fragment,o),y(ks.$$.fragment,o),y(vs.$$.fragment,o),y(bs.$$.fragment,o),y($s.$$.fragment,o),y(Yo.$$.fragment,o),y(Fs.$$.fragment,o),y(xs.$$.fragment,o),y(Ms.$$.fragment,o),y(Cs.$$.fragment,o),y(en.$$.fragment,o),y(Os.$$.fragment,o),y(Ps.$$.fragment,o),y(js.$$.fragment,o),y(Ss.$$.fragment,o),y(on.$$.fragment,o),y(Ds.$$.fragment,o),y(Bs.$$.fragment,o),y(Ws.$$.fragment,o),y(sn.$$.fragment,o),y(Gs.$$.fragment,o),y(an.$$.fragment,o),y(Ks.$$.fragment,o),y(Js.$$.fragment,o),y(ln.$$.fragment,o),y(ta.$$.fragment,o),y(dn.$$.fragment,o),y(oa.$$.fragment,o),y(na.$$.fragment,o),y(sa.$$.fragment,o),y(hn.$$.fragment,o),y(la.$$.fragment,o),y(mn.$$.fragment,o),y(da.$$.fragment,o),y(ca.$$.fragment,o),y(ha.$$.fragment,o),y(pn.$$.fragment,o),y(ga.$$.fragment,o),y(gn.$$.fragment,o),y(ua.$$.fragment,o),y(_a.$$.fragment,o),y(wa.$$.fragment,o),y(_n.$$.fragment,o),y(Ta.$$.fragment,o),y(wn.$$.fragment,o),y(ya.$$.fragment,o),y(La.$$.fragment,o),y($a.$$.fragment,o),y(vn.$$.fragment,o),y(Ea.$$.fragment,o),y(bn.$$.fragment,o),y(za.$$.fragment,o),wc=!1},d(o){t(p),o&&t(x),o&&t(g),L(w),o&&t(J),o&&t(E),L(ee),o&&t(le),o&&t(G),o&&t(C),o&&t(ne),o&&t(de),o&&t(se),o&&t(ce),o&&t(q),o&&t(W),o&&t(ae),o&&t(Te),o&&t(he),o&&t(ye),o&&t(N),L(oe),o&&t(Zl),o&&t(Le),o&&t(ld),o&&t(ut),o&&t(hd),o&&t(_t),o&&t(md),o&&t(jo),o&&t(fd),o&&t(Ao),o&&t(pd),o&&t(Ve),o&&t(yd),o&&t(No),o&&t(Ld),o&&t(jt),L(yn),o&&t($d),o&&t(At),o&&t(Fd),L(Ln,o),o&&t(xd),o&&t(Nt),L($n),o&&t(Md),o&&t(je),L(Fn),L(Mn),o&&t(Ed),o&&t(Bt),L(En),o&&t(zd),o&&t(ft),L(zn),o&&t(qd),o&&t(Wt),L(qn),o&&t(Cd),o&&t(pt),L(Cn),o&&t(Od),o&&t(Qt),L(Pn),o&&t(Pd),o&&t(Ht),L(jn),o&&t(jd),o&&t(Rt),L(An),o&&t(Ad),o&&t(Ut),L(Nn),o&&t(Nd),o&&t(Vt),L(In),o&&t(Id),o&&t(Gt),L(Sn),o&&t(Sd),o&&t(Kt),L(Dn),o&&t(Dd),o&&t(Jt),L(Bn),o&&t(Bd),o&&t(Xt),L(Wn),o&&t(Wd),o&&t(Yt),L(Qn),o&&t(Qd),o&&t(Zt),L(Hn),o&&t(Hd),o&&t(eo),L(Rn),o&&t(Rd),o&&t(to),L(Un),o&&t(Ud),o&&t(oo),L(Vn),o&&t(Vd),o&&t(no),L(Gn),o&&t(Gd),o&&t(so),L(Kn),o&&t(Kd),o&&t(qe),L(Jn),L(os),L(Uo),L(ns),o&&t(Jd),o&&t(io),L(ss),o&&t(Xd),o&&t(We),L(as),L(cs),L(Go),L(hs),o&&t(Yd),o&&t(co),L(ms),o&&t(Zd),o&&t(Qe),L(fs),L(_s),L(Jo),L(ws),L(ks),o&&t(ec),o&&t(mo),L(vs),o&&t(tc),o&&t(He),L(bs),L($s),L(Yo),L(Fs),o&&t(oc),o&&t(po),L(xs),o&&t(nc),o&&t(Re),L(Ms),L(Cs),L(en),L(Os),o&&t(sc),o&&t(uo),L(Ps),o&&t(ac),o&&t(Ue),L(js),L(Ss),L(on),L(Ds),o&&t(rc),o&&t(ko),L(Bs),o&&t(ic),o&&t(Ee),L(Ws),L(sn),L(Gs),L(an),o&&t(lc),o&&t(To),L(Ks),o&&t(dc),o&&t(Ae),L(Js),L(ln),L(ta),L(dn),L(oa),o&&t(cc),o&&t(Lo),L(na),o&&t(hc),o&&t(Ne),L(sa),L(hn),L(la),L(mn),L(da),o&&t(mc),o&&t(xo),L(ca),o&&t(fc),o&&t(Ie),L(ha),L(pn),L(ga),L(gn),L(ua),o&&t(pc),o&&t(Eo),L(_a),o&&t(gc),o&&t(Se),L(wa),L(_n),L(Ta),L(wn),L(ya),o&&t(uc),o&&t(qo),L(La),o&&t(_c),o&&t(De),L($a),L(vn),L(Ea),L(bn),L(za)}}}const my={local:"longformer",sections:[{local:"overview",title:"Overview"},{local:"longformer-self-attention",title:"Longformer Self Attention"},{local:"training",title:"Training"},{local:"transformers.LongformerConfig",title:"LongformerConfig"},{local:"transformers.LongformerTokenizer",title:"LongformerTokenizer"},{local:"transformers.LongformerTokenizerFast",title:"LongformerTokenizerFast"},{local:"transformers.models.longformer.modeling_longformer.LongformerBaseModelOutput",title:"Longformer specific outputs"},{local:"transformers.LongformerModel",title:"LongformerModel"},{local:"transformers.LongformerForMaskedLM",title:"LongformerForMaskedLM"},{local:"transformers.LongformerForSequenceClassification",title:"LongformerForSequenceClassification"},{local:"transformers.LongformerForMultipleChoice",title:"LongformerForMultipleChoice"},{local:"transformers.LongformerForTokenClassification",title:"LongformerForTokenClassification"},{local:"transformers.LongformerForQuestionAnswering",title:"LongformerForQuestionAnswering"},{local:"transformers.TFLongformerModel",title:"TFLongformerModel"},{local:"transformers.TFLongformerForMaskedLM",title:"TFLongformerForMaskedLM"},{local:"transformers.TFLongformerForQuestionAnswering",title:"TFLongformerForQuestionAnswering"},{local:"transformers.TFLongformerForSequenceClassification",title:"TFLongformerForSequenceClassification"},{local:"transformers.TFLongformerForTokenClassification",title:"TFLongformerForTokenClassification"},{local:"transformers.TFLongformerForMultipleChoice",title:"TFLongformerForMultipleChoice"}],title:"Longformer"};function fy(Q,p,x){let{fw:g}=p;return Q.$$set=u=>{"fw"in u&&x(0,g=u.fw)},[g]}class ky extends QT{constructor(p){super();HT(this,p,fy,hy,RT,{fw:0})}}export{ky as default,my as metadata};
